# 📖 Fahm-ul-Quran

Ek simple, mobile-friendly web app (PWA) jisse Quran ke alfaz, namaz ki duaen aur azkar aasaani se seekhe ja sakte hain. Koi build ya install ki zaroorat nahi.

<p align="center"><img src="icon.png" width="140" alt="App icon"></p>

## ✨ Features

### 📚 Sabaq (90 Days Course)
- Har din 10 alfaz (kul 900) — Arabic + Roman + meaning, **Mashq** aur tafseel
- Meaning 4 zubaanon mein: **اردو / Roman / हिंदी / English** (ek button, index + dua + tajweed + asma sab par ek saath)
- Arabic lafz aur **Mashq par tap karke Qari ki awaaz** suniye 🔊
- 📖 **Har lafz ke saath Quran ki ayat** (abhi Day 1–50: lafz 1–500, poore): ayat mein wo lafz **alag rang** mein, **surah aur ayat ka hawala**, aur ayat par tap karke **Qari Mishary Alafasy** ki awaaz. Har ayat ke neeche **⬇️ Download** (app mein save, net ke bina bhi sunein), **📥 MP3 file** (phone mein file utaarein) aur **🗑 Hatao**; din ke upar **Is din ki sab ayaat / Sab ayaat** ek saath download. Ayat ka text Maktaba Shamila se.
- 📝 **Daily Exam** — roz 10 sawal, 8 sahi hon to agla din unlock
- 🗺️ **92 padav ka safar**: 90 din + beech mein 🥈 Silver (Day 50 ke baad) + aakhir mein 🥇 Gold
- 🥈 **Silver Exam (500 lafz)** — Day 50 poora hote hi **50 mushkil sawal**. **80% (40/50)** laayen to Silver Completion Certificate milta hai. **Jab tak pass nahi, Day 51 se aage sab band (🔒).**
- 🥇 **Final Exam (900 lafz)** — Day 90 ke baad **75 sawal**, pass **80% (60/75)**. Silver aur Final **dono 80%+** hon tabhi Gold Completion Certificate.
- Exam fail ho to dobara de sakte hain (har baar naye sawal). Certificate download/share ho sakta hai (disclaimer ke saath: ijazah/sanad nahi).
- 🔥 Streak, ⭐ XP/Levels, 🏅 Badges
- 🛒 **Inaam Ghar (Shop)** — 3 themes + **16 stickers** (Aam / Khaas / Nayaab / Shahi). **Kharida hua item hamesha profile ke paas rehta hai**; theme badalne/reset karne se kuch khatam nahi hota, Shop se **🎨 Lagayein** dabayein. Stickers (max 3) **profile ke naam ke baazu mein** dikhte hain (Shahi stickers chamakte hain ✨)
- 📤 Lafz ya badge ki share card (WhatsApp / Insta)
- 📖 **Aaj ki Ayat + 🌿 Aaj ki Sunnat** — roz ek ayat ke saath ek pyaari sunnat (arabi matn, urdu tarjuma, aaj ka amal, hawala). Sunnat ka matn *Riyadh-us-Saliheen* (Maktaba Shamela) se hu-ba-hu; `sunnat.js` mein 26 sunnatein. Share image mein dono. 👤 alag-alag naam ki alag profile (har ki apni history)

**Silver/Gold exam mein anbiya ke naam (Adam, Musa, Isa, Muhammad ﷺ wagairah) nahi aate** — na sawal mein, na options mein. Roz ke Day exam mein wo aate hain.

**Mushkil sawal kaise bante hain:** jo lafz aapne daily exam mein galat kiye wo pehle aate hain, phir aakhri dinon ke kam aane wale aur lambe lafz. Galat options bhi sahi jawab jaise lambai ke hote hain, isliye andaze se pass hona mushkil hai.

- 🧠 **Kamzor lafz revision** (galat hue lafz dobara) • 🔔 **Roz ki yaad** (.ics) • 🔖 **Ref. No.** (certificate par)
- 🏠 **Dashboard**: Maqsad → shortcuts → Aaj ki Ayat → Namaz/Yaad → Safar → Aaj ke lafz

### 📜 Seerat-e-Nabawi ﷺ — 30 din (`seerat.js`) — abhi sirf Admin
- Admin menu (👤 ▾) mein **📜 Seerat — 30 din (Admin)**. Har din: maqsad, tafseel (khulne wale hisse), ahem nukte, timeline, ghaur-o-fikr, 3 sawal ka chhota imtihan, aur "din mukammal" ka nishan (profile ke saath save).
- `seerat.js` sirf tab load hoti hai jab Admin button dabaye, isliye baaqi users ke liye app mein koi nayi cheez nazar nahi aati aur koi bojh nahi.
- Text badalna ho to `seerat.js` ke `SEERAT_COURSE` mein badlein. Sab ke liye kholna ho to `isAdmin()` ki line (seerat.js) aur `openSeerat()` ka admin-check (index.html) hata dein.

### 🕌 Arkan-e-Islam (`arkan.html` + `arkan-kalima.html`, `arkan-namaz.html`, `arkan-zakat.html`, `arkan-roza.html`, `arkan-hajj.html` — sab root par, koi folder nahi) — abhi sirf Admin
- Home ke quick links mein **Nahw-Sarf / Seerat** ke baazu mein **🕌 Arkan-e-Islam** (sirf Admin ko). Andar 5 pages: **Kalima, Namaz, Zakat, Roza, Hajj-Umrah** (`arkan.html` hub).
- Har page: hawale (Quran/Hadith), Hanafi vs Jumhur ka farq, har hisse par ✅ "padh liya" nishan (device par save), chips se seedha hisse par jump, theme (dark/skin) saath.
- Zakat page par calculator (rate khud likhna hota hai — koi purana rate nahi).
- Har page ke `<head>` mein admin-check hai (`userRole === 'admin'`), warna `index.html`. Sab ke liye kholna ho to wo chhota script har page se aur `adminArkanLink` ki line (index.html `initApp`) hata dein.
- Styling `arkan.css`, "padh liya" logic `arkan.js`; baaki pages `theme.css` aur `app.js` (FQTheme) istemal karte hain.

### 🌙 Arabi (Hijri) tareekh (`tools.js` ke andar)
- Header mein ek chhoti line; tap karne par poori tafseel. Location (Namaz ke liye di hui) ya timezone se ilaqa pehchanta hai: Saudi/Arab = Umm al-Qura, Bharat/Pakistan/Bangladesh = aam taur par 1 din peechhe.
- Azan ke waqt set hon to **Maghrib ke baad** nayi tareekh. Chaand dekhne se farq ho sakta hai, isliye popup mein **−1 / +1 din** se khud theek kar sakte hain (yaad rehta hai).

### 🤲 Masnoon Duaein (`dua.html`)
- **119 duaein**: Namaz (59), Subah-Sham Azkar, Roz marra (26, Hisnul Muslim), Mushkil & Pareshani, Bimari & Shifa, Sone se Pehle
- Har dua: Arabic (line-wise) + Roman + Urdu tarjuma + tafseel + hawala
- 🔍 Search (Urdu ya Roman)
- **⭐ Favourites** — jo dua baar baar padhni ho, card ke ☆ par tap karein. Upar **⭐ Favourites** tab mein sab ek jagah milengi (search bhi chalta hai). Har profile ki apni favourites list.
- A- / A+ se Arabic aur Urdu ka size

### 🕌 Tajweed (`tajweed.html`)
Basic / Intermediate / High qawaid, misaalon ke saath — har misaal Qari ki awaaz mein.

### 🕌 Namaz (`namaz.js`)
- **Azan ke waqt**: 📍 location se Aladhan API se 5 waqt aate hain (ya khud time bharein). Asr: saaya apne barabar hone par (sahih hadith); koi maslak ka intikhab nahi.
- **Roz ek baar sawal**: Isha ke baad (ya kal ka na bhara ho to subah) "Poori namaz padhi?" — ✅ sab padhi = +25 XP, 🔥 poori-namaz streak, 3/7/30 din ke badges.
- **📊 Mahine ka hisaab**: 5 boxes (Fajr–Isha) mein padhi/chhooti, % aur din-ba-din grid (box dabakar badal sakte hain). Sirf **is mahine + pichle mahine** ka data rakha jata hai. Mahine ke aakhri din Isha ke baad (ya naye mahine mein pehli baar kholne par) apne aap hisaab dikhta hai.
- **🔊 Azan ki awaaz**: azan ka waqt aate hi (app khula ho to) apne aap, `azan-aksa.mp3` / `azan-sweet.mp3` / `azan-3.mp3` mein se chuni hui bajti hai (Settings mein badal sakte hain ya band). Phone kabhi-kabhi bina chhue awaaz rok deta hai.
- **📅 Calendar alarm**: 2 mahine ke azan alarms ki `.ics` file (app band ho tab bhi phone bajata hai).
- Har page ke `<head>` mein `<script src="namaz.js" defer></script>` chahiye (index aur games mein lag chuka hai).

### 📿 Tasbeeh (`tasbeeh.js`)
- Home par **Azan** aur **Roz ki yaad** ke neeche ek tile — tap karte hi poori screen ka misbaha khulta hai.
- **33 daano ki ring**: har tap par ek daana aage badhta hai; poora daur hone par sunehri chamak.
- 8 zikr (SubhanAllah, Alhamdulillah, Allahu Akbar, La ilaha illallah, Astaghfirullah, Durood, SubhanAllahi wa bihamdihi, La hawla...), target **33 / 99 / 100 / ∞ / apna**.
- **Namaz ke baad**: SubhanAllah 33 → Alhamdulillah 33 → Allahu Akbar 34 (Sahih Muslim), apne aap agle zikr par.
- Vibration, tik ki awaaz, screen jaagti rahe — teeno alag se on/off. **Peechhe** (undo) aur **Zero** bhi hai.
- Aaj / kul / poore rounds aur pichle 7 din ka hisaab, profile ke saath device par save.
- Android app ke liye `VIBRATE` permission manifest mein hai.

### 📱 Android App (`android/`)
Azan app band hone par bhi bajne ke liye. **Phone/screen par koi lock nahi lagta** (device-admin ka purana code hata diya gaya). Dekhein `android/README.md` (GitHub Actions se APK banta hai).

### 🎮 Games (`games.html`)
🏆 KBC · ⭐ Sahaba · 🧠 Memory · 😀 Emoji · 🎓 **Bazm-e-Fahm** (ab isi page ke andar, alag file nahi; purana `bazm.html` link sirf redirect hai) — sound effects ke saath. Header ka **🎵 button** har game mein nasheed chalata/rokta hai (`nasheed.mp3` chahiye).

### 🎵 Background awaaz (`nature-ambience.mp3`)
- Games mein 🎵 button hawa + behta paani + parindon (chehchahate, trill, siti, kabootar) ki **original** awaaz chalata hai. Ye awaaz code se bani hai (koi recording / sample istemal nahi hui), isliye uska copyright ka masla nahi.
- Is mein koi saaz ya gaana nahi. Agar apni awaaz mein nasheed record karwa kar ispar mila dein to wahi file `nature-ambience.mp3` ke naam se rakh dein.

### 📖 Quran (`quran.html`)
- 114 surahein, **Indo-Pak rasm-ul-khat** (Quran.com `text_indopak`), ayat-ba-ayat **Urdu tarjuma: Maulana Muhammad Junagarhi** (Quran.com ID 54 — wahi tarjuma jo Ahsan-ul-Bayan mein hai).
- 🔊 Mishary ki ayat-ba-ayat awaaz, ▶ poori surah, 🔖 bookmark, "Jaari rakhein" (aakhri padhi ayat), A-/A+, surah naam ya `2:255` likh kar seedha jaana, ya link `quran.html#2:255`.
- Jo surah / tafseer ek baar khul gayi wo `fq-quran-v1` cache mein save hoti hai aur offline chalti hai. Bookmark aur last-read Backup mein shamil hain.
- 🎨 **Course ke saare lafz (900) Quran ki ayat mein alag rang mein** dikhte hain (theme ke hisaab se rang). Rang wale lafz par tap karein to Arabic, Roman, Urdu matlab aur course ka din aata hai. Header ke 🎨 button se rang on/off. Matching harakat aur alif/yaa ke farq ko nazar-andaaz karti hai aur aam prefix (و ف ب ل ك ال) aur zameer (ك ه ها هم كم نا) hata kar bhi dhoondti hai; kuch badle hue rupp (jaise fe'l ki doosri shaklein) nahi pakde jaate, aur kabhi kabhi milta-julta lafz bhi rang pakad leta hai (tooltip mein likha hota hai).
- Behtareen Indo-Pak shakal ke liye `fonts/indopak.woff2` (ya `.ttf`) rakh dein, warna Scheherazade New / Noto Naskh chalta hai.
- Ahsan-ul-Bayan ke **hawashi (tafseer)** Quran.com par nahi milte; wo chahiye to licence wali source alag se judni hogi.

### 🎨 Themes (`themes.js`)
- Shop se kharidi hui theme ab **har page** (Sabaq, Duaein, Tajweed, Asma, Games + Bazm) par lagti hai. Sub-pages ka 🌙/☀️ button kharidi hui themes ek ke baad ek badalta hai (sirf wohi jo is profile ne kharidi hon; admin ke liye sab).
- Naye special themes: **🌌 Shab-e-Qadr** (500 XP, sitaron wali raat), **🌿 Jannah ka Bagh** (450 XP, hara-bhara), **🕋 Kaala-Sunehra** (800 XP, Shahi). Shop mein har theme ke rang ke chhote gole bhi dikhte hain.
- Naya theme jodna ho to sirf `themes.js` ke `THEMES` array mein ek entry (shop khud bann jata hai). `c` = rang, `hdr` = header, `btn` = buttons, `deco` = background naqsh.
- Lagi hui theme `localStorage` key `theme` mein hai (backup mein shamil), kharidi hui `p_<profile>_ownedItems` mein.

### 💾 Backup / Restore (`backup.js`)
- **Free, bina login, bina server.** Dropdown (👤 naam) → **💾 Backup / Restore**, ya login screen par **📂 Naye phone par? Backup se progress wapas laayein**.
- **⬇️ Backup file banayein** → `Fahm-ul-Quran-backup-YYYY-MM-DD.json` (sab profiles, XP, streak, exam, namaz hisaab, favourites, shop, theme). Android app mein seedha Downloads mein; share (WhatsApp/Drive) bhi chalta hai.
- **📂 Restore**: file chunein → tasdeeq → progress wapas. Backup wali profiles badal jaati hain, is phone ki baaki profiles safe rehti hain. Phir **usi naam** se login karein (profile id naam se banti hai).
- File ka check (checksum) hota hai — adhoori/kharab/ghalat file reject.
- Login session (`isLoggedIn`, `userRole`, `userId`, `activeProfile`) aur Qari ka cache backup mein nahi jaata.
- Pehle backup ki yaad 3 din baad, phir har hafte (din mein ek baar se zyada nahi).
- App storage ko browser se saaf hone se bachane ke liye `navigator.storage.persist()` bhi mangta hai.
- Naya `localStorage` key jo backup mein nahi jaana chahiye uska naam `fq_` se shuru karein, ya `backup.js` ke `SKIP_*` mein daalein.

### Aur
🔊 Suno · 🌙 Dark/Light mode · 🔐 Password login · 📱 PWA (home screen par install)

## 🎙️ Qari ki awaaz (Quran ka har hissa)

App mein jahan bhi Arabic par 🔊 / tap hai — dua, sabaq, mashq, tajweed, Aaj ki Ayat — wahan **jo hissa Quran ka hai wo Qari ki asli recording se chalta hai, phone ki robot awaaz se nahi.**

Kaise kaam karta hai (`sounds.js`):

1. Poora Quran text (harakat ke saath) ek baar Quran.com se aata hai aur phone mein save ho jaata hai.
2. App ka Arabic text poore Quran se milaya jaata hai — **ek se zyada ayat aur ek se zyada surah bhi** (jaise Aamanar-Rasulu, teeno Qul). Spelling ka chhota farq maaf hai (jaise `يَئُودُهُ` / `يَـُٔودُهُ`).
3. **Poori ayat** mile to us ayat ki **Qari Mishary Rashid Alafasy** ki recording chalti hai (everyayah.com se, na chale to Quran.com se). Ayat ka **tukda** ho to Quran.com ki lafz-ba-lafz recording chalti hai.
4. **Jo Quran mein nahi hai** (hadees ki duaein, jaise "Allahumma inni a'udhu bika...") wo phone ki awaaz mein chalta hai. Agar ek hi dua mein Quran + hadees dono hon (jaise musibat ki dua) to Quran wala hissa Qari se aur baaki phone se.
5. Net na ho ya recording na chale to us hisse ke liye phone ki awaaz chalti hai.

Dhyan dein:
- Qari ki recording ke liye **internet zaroori** hai (Quran text pehli baar ke baad offline bhi match ho jaata hai).
- Quran ka hissa sahi pehchanne ke liye dua/sabaq ke `arabic` mein Quran ka text **bilkul sahi** likhein (Quran.com se copy karna behtar hai). Quran aur hadees ko ek hi dua mein milana ho to bhi chalega, magar alag-alag cards behtar hain.
- **Qari badalna** ho to `sounds.js` mein `RECITER` (everyayah.com ka folder naam, jaise `Alafasy_128kbps`) badlein.

## 📁 Files

```
.
├── index.html       # Sabaq, exam, login, shop, certificate (main app)
├── quran.html       # 114 surahein (Indo-Pak), tarjuma, audio
├── dua.html         # 119 masnoon duaein
├── tajweed.html     # 38 tajweed qawaid + hawala
├── asma.html        # 99 Asma-ul-Husna
├── games.html       # KBC, Sahaba, Memory, Emoji, Bazm-e-Fahm
├── privacy.html / terms.html / kill.html
├── manifest.json    # PWA manifest (icons, screenshots, shortcuts)
├── sw.js            # Service worker (offline, sync, push)
├── theme.css
├── 
│   ├── app.js       # themes + UI/install/progress + language (lang) + welcome slides + backup
│   ├── tools.js     # Namaz (azan, roz ka sawal, calendar) + Tasbeeh
│   ├── sounds.js    # Saari awaazein: Qari + Suno/Roko + games ke effects/nasheed
│   ├── course.js    # courseData (900 alfaz) + wordAyat (har lafz ki ayat)
│   └── dua.js       # Duaon ka Roman/Hindi/English tarjuma
├──            # azan-aksa/sweet/3.mp3, nature-ambience.mp3
├──              # icon.png, icon-192.png, icon-maskable.png, signature.png, icons/, screenshots/
├── android/         # Android wrapper (azan app band hone par bhi)
├── tools/           # make_nature_ambience.py
└── .github/workflows/android.yml
```

> Purane file naam (themes.js, lang.js, namaz.js, courseData.js, ...) ab upar ki 5 bundle files ke andar hain; har bundle mein section ka header (`/* ───── naam.js ───── */`) laga hai.

## 🚀 GitHub Pages par Live Karein

1. Repo ki **Settings → Pages** kholen.
2. **Source:** `Deploy from a branch` → branch `main`, folder `/ (root)` → **Save**.
3. App is link par live hogi: `https://<your-username>.github.io/<repo-name>/`
4. Phone ke browser mein kholkar **Add to Home Screen** karein.

Locally chalane ke liye `python3 -m http.server` chalayein aur `http://localhost:8000` kholen (PWA install aur Qari ki awaaz ke liye server zaroori hai, seedha file kholne se kuch cheezein nahi chalti).

> Koi bhi file badalne par `sw.js` mein `CACHE_NAME` ka number badha dein (jaise `v51` → `v52`), taake purane phones par naya version aaye. Users ki history (localStorage) par koi asar nahi padta.

## 📴 Offline

- Pages, JS, CSS, icons, **Google Fonts** aur **azan/nasheed mp3** pehli baar net se aane ke baad offline chalte hain (`sw.js`: `fq-audio-v1`, `fq-fonts-v1` caches, version badalne par delete nahi hote).
- Qari ki ayat ki recording ke liye **⬇️ Download** (neeche) ya internet chahiye. Namaz ke waqt ki location lookup (Aladhan) ke liye bhi net chahiye; ek baar le lene ke baad waqt save rehte hain.

## ⬇️ Ayat Download (Offline)

- Download karne par ayat ki Mishary wali mp3 phone ke **Cache Storage** (`qs-mishary-v1`) mein save hoti hai; phir ayat par tap karne se pehle wahi saved copy chalti hai (net na ho tab bhi). Saved na ho to pehle jaisa net se.
- `sw.js` is cache (`qs-mishary-v1`) ko version badalne par bhi delete nahi karta. Naam badlein to `sounds.js` (`DL_CACHE`) aur `sw.js` (`KEEP_CACHES`) dono mein.
- Download ke liye internet chahiye aur everyayah.com / Quran.com ko browser se fetch karne dena chahiye (CORS).

## 🛠️ Data Badalna / Badhaana

**Sabaq** — `courseData.js` mein:

```js
{ day: 1, words: [
  { a: "اللَّهُ", r: "Allah", u: "اللہ", u_ro: "Allah", u_hi: "अल्लाह",
    m: "اللَّهُ أَحَدٌ", t: "سب کا رب", t_ro: "Sab ka Rabb", t_hi: "सब का रब" }
]}
```

`a` = Arabic, `r` = Roman, `u` / `u_ro` / `u_hi` = meaning (Urdu / Roman / Hindi), `m` = mashq (Quran ka jumla), `t` / `t_ro` / `t_hi` = tafseel.

**Lafz ke saath ayat** — `wordAyat.js` mein:

```js
wordAyat["اللَّهُ"] = { k: "112:1", i: 3 };           // k = surah:ayat, i = ayat mein lafz ka number (0 se)
ayatText["112:1"]   = { sn: "الإخلاص", sr: "Al-Ikhlas", t: "قُلْ هُوَ اللَّهُ أَحَدٌ" };
```

Key wahi Arabic hai jo `courseData.js` ke `a` mein hai. Jis lafz ki entry nahi hoti uske card par ayat ka box nahi dikhta. Ayat ka text Maktaba Shamila (`shamela_get_aya`) se lein taake Quran ke saath bilkul ek jaisa rahe. Kuch lafz (jaise `لِمَاذَا`) Quran mein is shakal mein nahi aate — unke liye `n` (note) likha hai aur Quran ka sabse qareebi lafz (`لِمَ`) dikhaya gaya hai.

**Duaein** — `dua.html` ke andar `allDuas` array mein:

```js
{ cat: "namaz", title: "5. Masjid mein dakhil hote waqt",
  arabic: "...", roman: "...", urdu: "...", tafseel: "...", hawala: "Sahih Muslim 713" }
```

`cat` = `namaz` / `subah` / `mushkil` / `bimari` / `sone`. Favourites `cat` + `title` se pehchani jaati hain, isliye kisi dua ka `title` badalne par uski favourite hat jayegi.

## 🔐 Password

Login ke passwords `index.html` ke script mein (`ADMIN_PASSWORD`, `GUEST_PASSWORD`) hain. Yeh client-side hain, isliye asli security nahi dete — public repo mein koi bhi inhein dekh sakta hai. Asli password README ya kisi public jagah par na likhein.

## 📬 Contact

[gormefauzan@gmail.com](mailto:gormefauzan@gmail.com)


## Language system
- `lang.js`: ek shared button Urdu → Roman → Hindi → English (`localStorage 'mlang'`). Games page shamil nahi.
- `duaTr.js`: 119 duaon ka Roman/Hindi/English tarjuma + tafseel.
- Tajweed: har card mein hawala + 5 corrections (Madd Lazim misaal, Waqf ط/ج, Waqf misaal 2:2, Rasm misaal, English typo).
- Tarjume kisi mustanad aalim/kitab se verify karwa lein.
- Quran page: tafseer hata di; Arabic text se akela 'ش' token filter hota hai.


## Language system + PWA extras
- `lang.js`: ek button Urdu → Roman → Hindi → English (index, dua, tajweed, asma). `duaTr.js`: duaon ka tarjuma.
- `sw.js`: Background Sync (`fq-sync`), Periodic Sync (`fq-periodic`), Push Notifications (`push` + `notificationclick`) handlers — PWABuilder ke Service Worker ke saare ticks. Push asal mein bhejne ke liye server chahiye; handler tayyar hai.
- Quran page se tafseer hata di; Arabic text se akela 'ش' filter hota hai.
- Cache bump: `v54` → `v55`.
