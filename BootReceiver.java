package com.quraanustad.app;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class BootReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context c, Intent in) {
        Scheduler.scheduleAll(c);   // phone restart / app update ke baad alarm dobara
    }
}
