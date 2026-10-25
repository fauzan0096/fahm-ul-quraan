package com.quraanustad.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ServiceInfo;
import android.content.res.AssetFileDescriptor;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;


/** Sirf azan bajata hai. Phone/screen par koi lock nahi lagta. */
public class AzanService extends Service {

    private static final String CH = "azan";
    private MediaPlayer mp;
    private final Handler h = new Handler(Looper.getMainLooper());
    private static final long FAILSAFE_MS = 10L * 60L * 1000L;   // azan kabhi khatam na ho to service khud band

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        cleanup();
        boolean test = intent != null && intent.getBooleanExtra("test", false);
        int i = intent == null ? 0 : intent.getIntExtra("i", 0);
        String name = test ? "Test" : Prefs.NAMES[Math.max(0, Math.min(4, i))];

        SharedPreferences sp = Prefs.sp(this);
        String snd = sp.getString("sound", "aksa");

        NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        NotificationChannel ch = new NotificationChannel(CH, "Azan", NotificationManager.IMPORTANCE_HIGH);
        ch.setSound(null, null);
        nm.createNotificationChannel(ch);

        PendingIntent open = PendingIntent.getActivity(this, 0, new Intent(this, MainActivity.class),
                PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
        Notification n = new Notification.Builder(this, CH)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle("🕌 " + name + " ki azan")
                .setContentText("Namaz ka waqt ho gaya")
                .setContentIntent(open)
                .setOngoing(true)
                .setCategory(Notification.CATEGORY_ALARM)
                .build();
        if (Build.VERSION.SDK_INT >= 29) {
            startForeground(1, n, ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK);
        } else {
            startForeground(1, n);
        }

        boolean playing = play(snd);

        if (playing) {
            h.postDelayed(new Runnable() {
                @Override
                public void run() {
                    finishService();
                }
            }, FAILSAFE_MS);
        } else {
            finishService();
        }
        return START_NOT_STICKY;
    }

    private boolean play(String snd) {
        int res;
        if ("aksa".equals(snd)) res = R.raw.azan_aksa;
        else if ("sweet".equals(snd)) res = R.raw.azan_sweet;
        else if ("third".equals(snd)) res = R.raw.azan_3;
        else return false;
        try {
            mp = new MediaPlayer();
            mp.setAudioAttributes(new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_ALARM)
                    .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC).build());
            AssetFileDescriptor afd = getResources().openRawResourceFd(res);
            mp.setDataSource(afd.getFileDescriptor(), afd.getStartOffset(), afd.getLength());
            afd.close();
            mp.prepare();
            mp.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
                @Override
                public void onCompletion(MediaPlayer m) {
                    m.release();
                    mp = null;
                    finishService();   // azan khatam — service band
                }
            });
            mp.start();
            return true;
        } catch (Exception e) {
            mp = null;
            return false;
        }
    }

    private void cleanup() {
        h.removeCallbacksAndMessages(null);
        if (mp != null) {
            try {
                mp.release();
            } catch (Exception ignored) {
            }
            mp = null;
        }
    }

    private void finishService() {
        cleanup();
        stopForeground(true);
        stopSelf();
    }

    @Override
    public void onDestroy() {
        cleanup();
        super.onDestroy();
    }
}
