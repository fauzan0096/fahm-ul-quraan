package com.quraanustad.app;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Insets;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.widget.FrameLayout;
import android.window.OnBackInvokedCallback;
import android.window.OnBackInvokedDispatcher;
import android.webkit.DownloadListener;
import android.webkit.ValueCallback;
import android.webkit.GeolocationPermissions;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebResourceRequest;

public class MainActivity extends Activity {

    private WebView web;
    private NativeBridge bridge;
    private GeolocationPermissions.Callback geoCb;
    private String geoOrigin;
    // Backup file restore ke liye file chooser (WebView mein <input type=file> ke bina nahi chalta)
    private ValueCallback<Uri[]> fileCb;
    private static final int FILE_REQ = 21;
    private OnBackInvokedCallback backCb;   // Android 13+ (predictive back)
    private boolean backOn;

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        // Android 15/16 mein app status/navigation bar ke neeche tak failti hai (edge-to-edge) —
        // isliye zameen hara rakha aur insets ke hisaab se padding di, warna upar/neeche ka hissa dab jata.
        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(0xFF0F4C3A);
        web = new WebView(this);
        root.addView(web, new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
        setContentView(root);
        setupInsets(root);
        bridge = new NativeBridge(this);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setGeolocationEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setUserAgentString(s.getUserAgentString() + " QuraanUstadApp/1");
        web.addJavascriptInterface(bridge, "AndroidNS");

        final String host = Uri.parse(BuildConfig.APP_URL).getHost();
        web.setWebViewClient(new WebViewClient() {
            @Override
            public void doUpdateVisitedHistory(WebView v, String url, boolean isReload) {
                updateBack();
            }

            @Override
            public void onPageFinished(WebView v, String url) {
                updateBack();
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest req) {
                Uri u = req.getUrl();
                if (host != null && host.equals(u.getHost())) return false;
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, u));   // WhatsApp, YouTube waghera bahar
                } catch (Exception ignored) {
                }
                return true;
            }
        });

        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView v, ValueCallback<Uri[]> cb, FileChooserParams params) {
                if (fileCb != null) fileCb.onReceiveValue(null);
                fileCb = cb;
                try {
                    Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                    i.addCategory(Intent.CATEGORY_OPENABLE);
                    i.setType("*/*");
                    startActivityForResult(Intent.createChooser(i, "Backup file chunein"), FILE_REQ);
                } catch (Exception e) {
                    fileCb = null;
                    cb.onReceiveValue(null);
                    return false;
                }
                return true;
            }

            @Override
            public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback cb) {
                if (checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
                    cb.invoke(origin, true, false);
                } else {
                    geoCb = cb;
                    geoOrigin = origin;
                    requestPermissions(new String[]{Manifest.permission.ACCESS_FINE_LOCATION,
                            Manifest.permission.ACCESS_COARSE_LOCATION}, 11);
                }
            }
        });

        web.setDownloadListener(new DownloadListener() {
            @Override
            public void onDownloadStart(String url, String ua, String cd, String mime, long len) {
                String ext = ".bin";
                if (mime != null) {
                    if (mime.contains("png")) ext = ".png";
                    else if (mime.contains("jpeg") || mime.contains("jpg")) ext = ".jpg";
                    else if (mime.contains("pdf")) ext = ".pdf";
                    else if (mime.contains("calendar")) ext = ".ics";
                    else if (mime.contains("json")) ext = ".json";
                }
                String name = "quraan-ustad-" + System.currentTimeMillis() + ext;
                if (url.startsWith("data:")) {
                    bridge.saveDataUrl(url, name);
                } else if (url.startsWith("blob:")) {
                    web.evaluateJavascript("fetch('" + url + "').then(function(r){return r.blob()}).then(function(b){"
                            + "var f=new FileReader();f.onloadend=function(){AndroidNS.saveDataUrl(f.result,'" + name + "')};"
                            + "f.readAsDataURL(b)})", null);
                } else {
                    try {
                        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
                    } catch (Exception ignored) {
                    }
                }
            }
        });

        if (Build.VERSION.SDK_INT >= 33
                && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, 12);
        }

        if (b == null) web.loadUrl(BuildConfig.APP_URL);
        else web.restoreState(b);

        Scheduler.scheduleAll(this);
    }

    @Override
    protected void onActivityResult(int req, int res, Intent data) {
        if (req == FILE_REQ) {
            if (fileCb != null) {
                Uri[] out = null;
                if (res == RESULT_OK && data != null && data.getData() != null) out = new Uri[]{data.getData()};
                fileCb.onReceiveValue(out);
                fileCb = null;
            }
            return;
        }
        super.onActivityResult(req, res, data);
    }

    @Override
    public void onRequestPermissionsResult(int code, String[] perms, int[] res) {
        if (code == 11 && geoCb != null) {
            boolean ok = res.length > 0 && res[0] == PackageManager.PERMISSION_GRANTED;
            geoCb.invoke(geoOrigin, ok, false);
            geoCb = null;
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
        updateBack();
        web.evaluateJavascript("window.dispatchEvent(new Event('focus'));document.dispatchEvent(new Event('visibilitychange'))", null);
    }

    @Override
    protected void onPause() {
        web.onPause();
        super.onPause();
    }

    private void setupInsets(View root) {
        if (Build.VERSION.SDK_INT < 30) return;   // Android 10: purana tareeqa khud sambhal leta hai
        root.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
            @Override
            public WindowInsets onApplyWindowInsets(View v, WindowInsets in) {
                Insets i = in.getInsets(WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout() | WindowInsets.Type.ime());
                v.setPadding(i.left, i.top, i.right, i.bottom);
                return WindowInsets.CONSUMED;
            }
        });
        WindowInsetsController c = getWindow().getInsetsController();
        if (c != null) {   // hare background par safed icons
            c.setSystemBarsAppearance(0, WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS
                    | WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS);
        }
    }

    /** Android 13+: Back sirf tab pakdo jab website mein peechhe jaane ko kuch ho; warna system ka back (home/band). */
    private void updateBack() {
        if (Build.VERSION.SDK_INT < 33 || web == null) return;
        boolean need = web.canGoBack();
        OnBackInvokedDispatcher d = getOnBackInvokedDispatcher();
        if (need && !backOn) {
            if (backCb == null) {
                backCb = new OnBackInvokedCallback() {
                    @Override
                    public void onBackInvoked() {
                        if (web.canGoBack()) web.goBack();
                        else finish();
                        web.postDelayed(new Runnable() {
                            @Override
                            public void run() {
                                updateBack();
                            }
                        }, 350);
                    }
                };
            }
            d.registerOnBackInvokedCallback(OnBackInvokedDispatcher.PRIORITY_DEFAULT, backCb);
            backOn = true;
        } else if (!need && backOn) {
            d.unregisterOnBackInvokedCallback(backCb);
            backOn = false;
        }
    }

    @Override
    public void onBackPressed() {   // Android 12 aur purane
        if (web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }
}
