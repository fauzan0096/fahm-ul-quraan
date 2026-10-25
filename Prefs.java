package com.quraanustad.app;

import android.content.Context;
import android.content.SharedPreferences;

final class Prefs {
    static final String[] KEYS = {"Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"};
    static final String[] NAMES = {"Fajr", "Zuhr", "Asr", "Maghrib", "Isha"};

    static SharedPreferences sp(Context c) {
        return c.getSharedPreferences("ns", Context.MODE_PRIVATE);
    }

    private Prefs() {}
}
