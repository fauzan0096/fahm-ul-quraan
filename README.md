# 📱 Fahm-ul-Quran — Android App (azan app band ho tab bhi)

Ye app aapki website ko hi kholta hai (WebView), aur Android ke alarm/service se:
- 🕌 **Paanchon azan apne waqt par bajti hai — app band ho, screen off ho, tab bhi**
- 🔁 Phone restart ke baad alarm khud dobara lag jaate hain, kal ka waqt khud internet se aa jaata hai
- Sirf **Android 10+**. iPhone par aisa kuch mumkin nahi.

## APK kaise banayein (GitHub par, koi software install nahi)
1. Repo ke root mein ye daalein: **`android/`** folder aur **`.github/workflows/android.yml`**
   (repo ke root mein `icon-192.png` aur teeno `azan-*.mp3` pehle se hon — woh khud use ho jayengi).
2. `android/app/build.gradle` mein `APP_URL` apni website ke link par check karein (abhi `https://quraan-ustad.github.io/`).
3. GitHub → **Actions** tab → **"Android APK banao"** → **Run workflow**. 3-5 minute mein khatam.
4. Run kholein → neeche **Artifacts → QuraanUstad-APK** download karein → zip se `app-debug.apk` nikalein.
5. Phone mein APK kholein → "Unknown sources" ki ijazat dein → Install.

## Play Store ki target-API shart
- **31 Aug 2026 se** naye app aur updates ko **Android 16 (API 36)** target karna zaroori hai. Is project mein `compileSdk 36` / `targetSdk 36` hai (`minSdk 29` hi hai, purane phone par chalta rahega).
- Iske liye AGP **8.9.1** aur Gradle **8.11.1** chahiye (workflow mein set hai).
- Android 15/16 ke badlav sambhaale gaye hain: edge-to-edge (status/navigation bar ke neeche dabna) aur predictive back (peechhe jaana).
- Har saal Google ye number badhata hai — agle saal dobara dekhna padega.

## Phone mein pehli baar setup
1. App kholein → login karein.
2. **Dropdown → 🕌 Namaz ka Hisaab** → **📍 Location se azan ke waqt lein**.
3. **🧪 Azan ka test** se check karein.
4. Notification ki ijazat "Allow" dein.
5. Xiaomi / Oppo / Vivo / Realme / Samsung: Settings → Battery → Fahm-ul-Quran → **Unrestricted** (aur Autostart ON), warna company ka battery-saver alarm rok sakta hai.

## Awaaz band karna ho
- Namaz panel mein "Azan ki awaaz" → "Awaaz band".
## Dhyan
- Ye "debug" APK hai (sideload ke liye). Play Store ke liye neeche wala hissa dekhein (exact alarm jaisi permissions par Google ka review sakht hota hai).
- **💾 Backup / Restore** Android app mein bhi chalta hai: backup file seedha **Downloads** mein save hoti hai, aur restore ke liye file chooser khulta hai.
- Android ka version/company badal sakti hai ke alarm kaise bajta hai — pehle apne phone par test zaroor karein.

## Play Store ke liye testing / publish (checklist)
1. **Signing key banayein** (ek baar, kisi safe jagah rakhein — kho gayi to update nahi ho sakta):
   `keytool -genkey -v -keystore release.keystore -alias fahm -keyalg RSA -keysize 2048 -validity 10000`
2. Keystore ko base64 karein (`base64 -w0 release.keystore`) aur GitHub → Settings → Secrets → Actions mein 4 secrets daalein:
   `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`.
3. Workflow dobara chalayein → Artifacts mein **QuraanUstad-AAB** (`app-release.aab`) aayega. `versionCode` har run par apne aap badhta hai.
4. Play Console → **Testing → Internal testing** mein `.aab` upload karein, apne email ko tester banayein, phone par install karke check karein (login, backup/restore, azan, offline).
5. Store listing: icon 512×512 (`icon.png`), kam az kam 2 screenshots, Privacy Policy link (`privacy.html` ka GitHub Pages link), Data safety form (data sirf device par hai).
6. **Dhyan:** exact alarm jaisi permissions par Google ka review sakht ho sakta hai; masla aaye to Play Console ki hidayat dekhein.
