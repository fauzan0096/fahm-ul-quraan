package com.quraanustad.app;

import android.app.Activity;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

import org.json.JSONObject;

import java.io.OutputStream;

/** Website (namaz.js) isi ke zariye app se baat karti hai: window.AndroidNS */
public class NativeBridge {
    private final Activity a;

    NativeBridge(Activity a) {
        this.a = a;
    }

    @JavascriptInterface
    public String info() {
        return "{\"native\":true,\"v\":1}";
    }

    /** json: {times:{Fajr:"05:10",...}, lat, lng, school, auto, sound} */
    @JavascriptInterface
    public void configure(String json) {
        try {
            JSONObject o = new JSONObject(json);
            SharedPreferences.Editor e = Prefs.sp(a).edit();
            if (o.has("times") && !o.isNull("times")) e.putString("times", o.getJSONObject("times").toString());
            if (o.has("lat") && !o.isNull("lat")) e.putString("lat", o.getString("lat"));
            if (o.has("lng") && !o.isNull("lng")) e.putString("lng", o.getString("lng"));
            if (o.has("school")) e.putString("school", o.getString("school"));
            if (o.has("auto")) e.putBoolean("auto", o.getBoolean("auto"));
            if (o.has("sound")) e.putString("sound", o.getString("sound"));
            e.apply();
            Scheduler.scheduleAll(a);
        } catch (Exception ignored) {
        }
    }

    /** Azan ka test */
    @JavascriptInterface
    public void test() {
        Intent s = new Intent(a, AzanService.class);
        s.putExtra("test", true);
        a.startForegroundService(s);
    }

    /** Download (certificate / tasveer): data: URL ko Downloads folder mein save karo */
    @JavascriptInterface
    public void saveDataUrl(String dataUrl, String name) {
        try {
            int comma = dataUrl.indexOf(',');
            String head = dataUrl.substring(5, comma);              // "image/png;base64"
            String mime = head.split(";")[0];
            if (mime.length() == 0) mime = "application/octet-stream";
            byte[] bytes = head.contains("base64")
                    ? Base64.decode(dataUrl.substring(comma + 1), Base64.DEFAULT)
                    : Uri.decode(dataUrl.substring(comma + 1)).getBytes("UTF-8");

            ContentValues cv = new ContentValues();
            cv.put(MediaStore.MediaColumns.DISPLAY_NAME, name);
            cv.put(MediaStore.MediaColumns.MIME_TYPE, mime);
            cv.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS);
            ContentResolver r = a.getContentResolver();
            Uri u = r.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, cv);
            if (u == null) throw new Exception("insert");
            OutputStream os = r.openOutputStream(u);
            os.write(bytes);
            os.close();
            toast("📥 Downloads mein save ho gaya: " + name);
        } catch (Exception e) {
            toast("❌ Save nahi ho saka");
        }
    }

    private void toast(final String m) {
        a.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(a, m, Toast.LENGTH_LONG).show();
            }
        });
    }
}
