/* ==========================================================
   course.js — 90 din ka course (900 alfaz) — Day 1: Allah ke naam, phir Surah ke tarteeb se + har lafz ki ayat
   (Is file mein: courseData.js, wordAyat.js)
   ========================================================== */

/* ───────────── courseData.js ───────────── */
/* ==========================================
   COURSE DATA FILE - 90 DAYS (900 WORDS)
   Yahan aap naye din (Day 91+) add karte rahein.
   Format: { day: X, words: [ { a, r, u, u_ro, u_hi, u_en, m, t, t_ro, t_hi, t_en }, ... ] }
   u/t = Urdu meaning, u_ro/t_ro = Roman, u_hi/t_hi = Hindi, u_en/t_en = English
   ========================================== */

const courseData = [
    { day: 1, words: [
        {a: "اللَّهُ",r: "Allah",u: "اللہ",u_ro: "Allah",u_hi: "अल्लाह",u_en: "Allah",m: "اللَّهُ أَحَدٌ",t: "سب کا رب",t_ro: "Sab ka Rabb",t_hi: "सब का रब",t_en: "Lord of all"},
        {a: "رَبِّ",r: "Rabb",u: "پالنے والا",u_ro: "Paalne wala",u_hi: "पालने वाला",u_en: "Lord, Sustainer",m: "رَبِّ الْعَالَمِينَ",t: "مالک",t_ro: "Malik",t_hi: "मालिक",t_en: "Master, Owner"},
        {a: "إِلَه",r: "Ilaah",u: "معبود",u_ro: "Maabood",u_hi: "माबूद",u_en: "God, deity",m: "لَا إِلَهَ إِلَّا اللَّهُ",t: "عبادت کے لائق",t_ro: "Ibaadat ke laayaq",t_hi: "इबादत के लायक़",t_en: "Worthy of worship"},
        {a: "رَحْمَٰن",r: "Rahmaan",u: "بہت مہربان",u_ro: "Bahut meharbaan",u_hi: "बहुत मेहरबान",u_en: "Most Gracious",m: "الرَّحْمَٰنُ",t: "رحم کرنے والا",t_ro: "Rahm karne wala",t_hi: "रहम करने वाला",t_en: "Full of mercy"},
        {a: "رَحِيم",r: "Raheem",u: "نہایت رحم والا",u_ro: "Nihayat rahm wala",u_hi: "निहायत रहम वाला",u_en: "Most Merciful",m: "غَفُورٌ رَّحِيمٌ",t: "خاص رحم والا",t_ro: "Khaas rahm wala",t_hi: "ख़ास रहम वाला",t_en: "Specially merciful"},
        {a: "غَفُور",r: "Ghafoor",u: "بخشنے والا",u_ro: "Bakhshne wala",u_hi: "बख़्शने वाला",u_en: "Oft-Forgiving",m: "هُوَ الْغَفُورُ",t: "معاف کرنے والا",t_ro: "Maaf karne wala",t_hi: "माफ़ करने वाला",t_en: "Forgives"},
        {a: "عَزِيز",r: "Azeez",u: "زبردست",u_ro: "Zabardast",u_hi: "ज़बरदस्त",u_en: "All-Mighty",m: "عَزِيزٌ حَكِيمٌ",t: "غالب",t_ro: "Ghaalib",t_hi: "ग़ालिब",t_en: "Dominant"},
        {a: "حَكِيم",r: "Hakeem",u: "حکمت والا",u_ro: "Hikmat wala",u_hi: "हिकमत वाला",u_en: "All-Wise",m: "عَلِيمٌ حَكِيمٌ",t: "دانا",t_ro: "Daana",t_hi: "दाना",t_en: "Wise"},
        {a: "عَلِيم",r: "Aleem",u: "سب جاننے والا",u_ro: "Sab jaanne wala",u_hi: "सब जानने वाला",u_en: "All-Knowing",m: "هُوَ عَلِيمٌ",t: "جاننے والا",t_ro: "Jaanne wala",t_hi: "जानने वाला",t_en: "Knower"},
        {a: "خَبِير",r: "Khabeer",u: "باخبر",u_ro: "Baakhabar",u_hi: "बाख़बर",u_en: "All-Aware",m: "الْخَبِيرُ",t: "خبر رکھنے والا",t_ro: "Khabar rakhne wala",t_hi: "ख़बर रखने वाला",t_en: "Fully informed"}
    ] },
    { day: 2, words: [
        {a: "بِ",r: "Bi",u: "ساتھ",u_ro: "Saath",u_hi: "साथ",u_en: "With, by",m: "بِ",t: "کے ذریعے",t_ro: "Ke zariye",t_hi: "के ज़रिए",t_en: "By means of"},
        {a: "بِسْمِ",r: "Bismi",u: "نام سے",u_ro: "Naam se",u_hi: "नाम से",u_en: "In the name of",m: "بِسْمِ اللَّهِ",t: "شروعات",t_ro: "Shuruaat",t_hi: "शुरुआत",t_en: "Beginning"},
        {a: "حَمْد",r: "Hamd",u: "حمد",u_ro: "Hamd",u_hi: "हम्द",u_en: "Praise",m: "الْحَمْدُ",t: "تعریف",t_ro: "Taareef",t_hi: "तारीफ़",t_en: "Praise"},
        {a: "الْحَمْدُ",r: "Alhamdu",u: "تمام تعریفیں",u_ro: "Tamaam taareefein",u_hi: "तमाम तारीफ़ें",u_en: "All praise",m: "الْحَمْدُ لِلَّهِ",t: "سورہ فاتحہ",t_ro: "Surah Fatiha",t_hi: "सूरह फ़ातिहा",t_en: "From Surah Al-Fatiha"},
        {a: "لِلَّهِ",r: "Lillahi",u: "اللہ کے لیے",u_ro: "Allah ke liye",u_hi: "अल्लाह के लिए",u_en: "For Allah",m: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",t: "سب تعریف اللہ کے لیے جو سارے جہانوں کا رب ہے",t_ro: "Sab taareef Allah ke liye jo saare jahaanon ka Rabb hai",t_hi: "सब तारीफ़ अल्लाह के लिए जो सारे जहानों का रब है",t_en: "All praise is for Allah, Lord of the worlds"},
        {a: "لِ",r: "Li",u: "کے لیے",u_ro: "Ke liye",u_hi: "के लिए",u_en: "For, to",m: "لِ",t: "کے لیے",t_ro: "Ke liye",t_hi: "के लिए",t_en: "For"},
        {a: "يَوْم",r: "Yawm",u: "دن",u_ro: "Din",u_hi: "दिन",u_en: "Day",m: "الْيَوْمَ",t: "دن",t_ro: "Din",t_hi: "दिन",t_en: "Day"},
        {a: "يَوْمِ",r: "Yawmi",u: "دن",u_ro: "Din",u_hi: "दिन",u_en: "Day (of)",m: "يَوْمِ الدِّينِ",t: "قیامت",t_ro: "Qayaamat",t_hi: "क़यामत",t_en: "Judgment Day"},
        {a: "وَ",r: "Wa",u: "اور",u_ro: "Aur",u_hi: "और",u_en: "And",m: "وَ",t: "اور",t_ro: "Aur",t_hi: "और",t_en: "And"},
        {a: "اسْتَعَانَ",r: "Ista'aana",u: "مدد مانگی",u_ro: "Madad maangi",u_hi: "मदद माँगी",u_en: "He sought help",m: "إِيَّاكَ نَسْتَعِينُ",t: "مدد مانگنا",t_ro: "Madad maangna",t_hi: "मदद माँगना",t_en: "To seek help"}
    ] },
    { day: 3, words: [
        {a: "اهْدِنَا",r: "Ihdinaa",u: "ہمیں ہدایت دے",u_ro: "Hamein hidaayat de",u_hi: "हमें हिदायत दे",u_en: "Guide us!",m: "اهْدِنَا",t: "ہدایت",t_ro: "Hidaayat",t_hi: "हिदायत",t_en: "Guide us"},
        {a: "الصِّرَاطَ",r: "As-Siraata",u: "راستہ",u_ro: "Raasta",u_hi: "रास्ता",u_en: "The path",m: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",t: "ہمیں سیدھا راستہ دکھا",t_ro: "Hamein seedha raasta dikha",t_hi: "हमें सीधा रास्ता दिखा",t_en: "Guide us to the straight path"},
        {a: "صِرَاط",r: "Siraat",u: "سیدھا راستہ",u_ro: "Seedha raasta",u_hi: "सीधा रास्ता",u_en: "Straight path",m: "الصِّرَاطَ",t: "راستہ",t_ro: "Raasta",t_hi: "रास्ता",t_en: "Path"},
        {a: "الَّذِينَ",r: "Alladheena",u: "جو لوگ",u_ro: "Jo log",u_hi: "जो लोग",u_en: "Those who",m: "الَّذِينَ",t: "جو لوگ",t_ro: "Jo log",t_hi: "जो लोग",t_en: "Those who"},
        {a: "أَنْعَمَ",r: "An'ama",u: "نعمت دی",u_ro: "Nemat di",u_hi: "नेमत दी",u_en: "He bestowed",m: "أَنْعَمْتَ عَلَيْهِمْ",t: "نعمت دینا",t_ro: "Nemat dena",t_hi: "नेमत देना",t_en: "To bestow"},
        {a: "غَيْر",r: "Ghayr",u: "کے سوا",u_ro: "Ke siwa",u_hi: "के सिवा",u_en: "Other than",m: "غَيْر",t: "بغیر",t_ro: "Baghair",t_hi: "बग़ैर",t_en: "Without"},
        {a: "ذَلِكَ",r: "Dhaalika",u: "وہ",u_ro: "Woh",u_hi: "वह",u_en: "That",m: "ذَلِكَ",t: "وہ",t_ro: "Woh",t_hi: "वह",t_en: "That"},
        {a: "كِتَاب",r: "Kitaab",u: "کتاب",u_ro: "Kitaab",u_hi: "किताब",u_en: "Book",m: "الْكِتَابَ",t: "کتاب",t_ro: "Kitaab",t_hi: "किताब",t_en: "Book"},
        {a: "هُدَى",r: "Hudaa",u: "ہدایت",u_ro: "Hidaayat",u_hi: "हिदायत",u_en: "Guidance",m: "الْهُدَى",t: "ہدایت",t_ro: "Hidaayat",t_hi: "हिदायत",t_en: "Guidance"},
        {a: "غَيْب",r: "Ghayb",u: "غیب",u_ro: "Ghaib",u_hi: "ग़ैब",u_en: "The Unseen",m: "الْغَيْبِ",t: "چھپی چیز",t_ro: "Chhupi cheez",t_hi: "छुपी चीज़",t_en: "Hidden matter"}
    ] },
    { day: 4, words: [
        {a: "أُولَٰئِكَ",r: "Ulaa'ika",u: "وہ لوگ",u_ro: "Woh log",u_hi: "वे लोग",u_en: "Those people",m: "أُولَٰئِكَ",t: "وہ لوگ",t_ro: "Woh log",t_hi: "वे लोग",t_en: "Those people"},
        {a: "مُفْلِحُون",r: "Muflihoon",u: "کامیاب لوگ",u_ro: "Kaamyaab log",u_hi: "कामयाब लोग",u_en: "The successful",m: "مُفْلِحُون",t: "بھلائی",t_ro: "Bhalaai",t_hi: "भलाई",t_en: "Success"},
        {a: "سَمْع",r: "Sam'",u: "سماعت",u_ro: "Samaa-at",u_hi: "समाअत",u_en: "Hearing",m: "السَّمْعُ",t: "سننا",t_ro: "Sunna",t_hi: "सुनना",t_en: "Hearing"},
        {a: "شَعَرَ",r: "Sha'ara",u: "محسوس کیا، خبر ہوئی",u_ro: "Mehsoos kiya, khabar hui",u_hi: "महसूस किया, ख़बर हुई",u_en: "He perceived",m: "وَهُمْ لَا يَشْعُرُونَ",t: "محسوس کرنا",t_ro: "Mehsoos karna",t_hi: "महसूस करना",t_en: "To perceive"},
        {a: "اشْتَرَى",r: "Ishtaraa",u: "خریدا",u_ro: "Khareeda",u_hi: "ख़रीदा",u_en: "He bought",m: "اشْتَرَوُا الضَّلَالَةَ",t: "خریدنا",t_ro: "Khareedna",t_hi: "ख़रीदना",t_en: "To buy"},
        {a: "أَبْكَم",r: "Abkam",u: "گونگا",u_ro: "Goonga",u_hi: "गूँगा",u_en: "Mute",m: "صُمٌّ بُكْمٌ عُمْيٌ",t: "گونگا",t_ro: "Goonga",t_hi: "गूँगा",t_en: "Mute"},
        {a: "أَصَابِع",r: "Asaabi'",u: "انگلیاں",u_ro: "Ungliyaan",u_hi: "उँगलियाँ",u_en: "Fingers",m: "الْأَصَابِعُ",t: "انگلی",t_ro: "Ungli",t_hi: "उँगली",t_en: "Finger"},
        {a: "الْمُحِيط",r: "Al-Muheet",u: "سب کو گھیرنے والا",u_ro: "Sab ko gherne wala",u_hi: "सब को घेरने वाला",u_en: "All-Encompassing",m: "وَاللَّهُ مِن وَرَائِهِم مُّحِيطٌ",t: "احاطہ کرنے والا",t_ro: "Ihaata karne wala",t_hi: "इहाता करने वाला",t_en: "Encompassing all"},
        {a: "اللَّهَ",r: "Allaha",u: "اللہ",u_ro: "Allah",u_hi: "अल्लाह",u_en: "Allah",m: "عَلَىٰ كُلِّ شَيْءٍ",t: "قدرت",t_ro: "Qudrat",t_hi: "क़ुदरत",t_en: "Power"},
        {a: "النَّاسُ",r: "An-Naasu",u: "لوگ",u_ro: "Log",u_hi: "लोग",u_en: "The people",m: "يَا أَيُّهَا النَّاسُ",t: "پکار",t_ro: "Pukaar",t_hi: "पुकार",t_en: "Address"}
    ] },
    { day: 5, words: [
        {a: "اعْبُدُوا",r: "U'budoo",u: "عبادت کرو",u_ro: "Ibaadat karo",u_hi: "इबादत करो",u_en: "Worship!",m: "اعْبُدُوا",t: "عبادت",t_ro: "Ibaadat",t_hi: "इबादत",t_en: "Worship"},
        {a: "لَعَلَّ",r: "La'alla",u: "شاید",u_ro: "Shaayad",u_hi: "शायद",u_en: "Perhaps",m: "لَعَلَّ",t: "تاکہ",t_ro: "Taaki",t_hi: "ताकि",t_en: "So that"},
        {a: "الَّتِي",r: "Allatee",u: "جو (عورت)",u_ro: "Jo (aurat)",u_hi: "जो (औरत)",u_en: "Who, which (f.)",m: "الَّتِي",t: "جو",t_ro: "Jo",t_hi: "जो",t_en: "Who"},
        {a: "جَنَّات",r: "Jannaat",u: "باغات",u_ro: "Baaghaat",u_hi: "बाग़ात",u_en: "Gardens",m: "الْجَنَّاتُ",t: "باغ",t_ro: "Baagh",t_hi: "बाग़",t_en: "Gardens"},
        {a: "أَنْهَار",r: "Anhaar",u: "نہریں",u_ro: "Nehrein",u_hi: "नहरें",u_en: "Rivers",m: "الْأَنْهَارُ",t: "نہریں",t_ro: "Nehrein",t_hi: "नहरें",t_en: "Rivers"},
        {a: "بَعُوضَة",r: "Ba'oodah",u: "مچھر",u_ro: "Machhar",u_hi: "मच्छर",u_en: "Gnat, mosquito",m: "بَعُوضَةً",t: "مچھر",t_ro: "Machhar",t_hi: "मच्छर",t_en: "Mosquito"},
        {a: "خَلِيفَة",r: "Khaleefah",u: "خلیفہ، نائب",u_ro: "Khaleefa, naayab",u_hi: "ख़लीफ़ा, नायब",u_en: "Vicegerent",m: "إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",t: "خلیفہ",t_ro: "Khaleefa",t_hi: "ख़लीफ़ा",t_en: "Vicegerent"},
        {a: "آدَم",r: "Aadam",u: "آدم علیہ السلام",u_ro: "Aadam alaihis-salaam",u_hi: "आदम अलैहिस्सलाम",u_en: "Adam",m: "آدَمُ",t: "پہلے انسان",t_ro: "Pehle insaan",t_hi: "पहले इंसान",t_en: "First human"},
        {a: "هَؤُلَاءِ",r: "Haa'ulaa'i",u: "یہ لوگ",u_ro: "Yeh log",u_hi: "ये लोग",u_en: "These people",m: "هَؤُلَاءِ",t: "یہ لوگ",t_ro: "Yeh log",t_hi: "ये लोग",t_en: "These people"},
        {a: "عِلْم",r: "'Ilm",u: "علم",u_ro: "Ilm",u_hi: "इल्म",u_en: "Knowledge",m: "رَبِّ زِدْنِي عِلْمًا",t: "علم",t_ro: "Ilm",t_hi: "इल्म",t_en: "Knowledge"}
    ] },
    { day: 6, words: [
        {a: "أَنْتَ",r: "Anta",u: "تم",u_ro: "Tum",u_hi: "तुम",u_en: "You (m. sg.)",m: "أَنْتَ",t: "تم",t_ro: "Tum",t_hi: "तुम",t_en: "You"},
        {a: "مَلَائِكَة",r: "Malaa'ikah",u: "فرشتے",u_ro: "Farishte",u_hi: "फ़रिश्ते",u_en: "Angels",m: "الْمَلَائِكَةَ",t: "فرشتے",t_ro: "Farishte",t_hi: "फ़रिश्ते",t_en: "Angels"},
        {a: "إِبْلِيس",r: "Iblees",u: "ابلیس (شیطان)",u_ro: "Iblees (shaitaan)",u_hi: "इबलीस (शैतान)",u_en: "Iblis (Satan)",m: "إِلَّا إِبْلِيسَ أَبَىٰ",t: "ابلیس",t_ro: "Iblees",t_hi: "इबलीस",t_en: "Iblis"},
        {a: "اسْتَكْبَرَ",r: "Istakbara",u: "تکبر کیا، گھمنڈ کیا",u_ro: "Takabbur kiya, ghamand kiya",u_hi: "तकब्बुर किया, घमंड किया",u_en: "He was arrogant",m: "إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ",t: "تکبر",t_ro: "Takabbur",t_hi: "तकब्बुर",t_en: "Arrogance"},
        {a: "زَوْج",r: "Zawj",u: "شوہر یا بیوی",u_ro: "Shauhar ya biwi",u_hi: "शौहर या बीवी",u_en: "Spouse, pair",m: "الزَّوْجُ",t: "جوڑا",t_ro: "Joda",t_hi: "जोड़ा",t_en: "Couple"},
        {a: "رَغَد",r: "Raghad",u: "کشادگی، فراخی",u_ro: "Kushaadgi, faraakhi",u_hi: "कुशादगी, फ़राख़ी",u_en: "Abundance",m: "رَغَدًا حَيْثُ شِئْتُمَا",t: "فراخی",t_ro: "Faraakhi",t_hi: "फ़राख़ी",t_en: "Abundance"},
        {a: "إِسْرَائِيل",r: "Israa'eel",u: "اسرائیل",u_ro: "Israaeel",u_hi: "इसराईल",u_en: "Israel",m: "إِسْرَائِيلَ",t: "یعقوب",t_ro: "Yaqoob",t_hi: "याक़ूब",t_en: "Yaqub"},
        {a: "عَهْد",r: "'Ahd",u: "عہد، وعدہ",u_ro: "Ahd, waada",u_hi: "अहद, वादा",u_en: "Covenant",m: "وَأَوْفُوا بِعَهْدِي",t: "عہد",t_ro: "Ahd",t_hi: "अहद",t_en: "Covenant"},
        {a: "أَقِيمُوا",r: "Aqeemoo",u: "قائم کرو",u_ro: "Qaaim karo",u_hi: "क़ायम करो",u_en: "Establish!",m: "أَقِيمُوا",t: "قائم",t_ro: "Qaaim",t_hi: "क़ायम",t_en: "Establish"},
        {a: "آتُوا",r: "Aatoo",u: "ادا کرو",u_ro: "Ada karo",u_hi: "अदा करो",u_en: "Give!",m: "آتُوا",t: "دینا",t_ro: "Dena",t_hi: "देना",t_en: "Give"}
    ] },
    { day: 7, words: [
        {a: "ارْكَعُوا",r: "Irka'oo",u: "رکوع کرو",u_ro: "Rukoo karo",u_hi: "रुकू करो",u_en: "Bow down!",m: "ارْكَعُوا",t: "رکوع",t_ro: "Rukoo",t_hi: "रुकू",t_en: "Bow"},
        {a: "بَقْل",r: "Baql",u: "ترکاری، سبزی",u_ro: "Tarkaari, sabzi",u_hi: "तरकारी, सब्ज़ी",u_en: "Herbs, vegetables",m: "وَبَقْلِهَا",t: "سبزی",t_ro: "Sabzi",t_hi: "सब्ज़ी",t_en: "Greens"},
        {a: "قِثَّاء",r: "Qiththaa'",u: "کھیرا",u_ro: "Kheera",u_hi: "खीरा",u_en: "Cucumber",m: "وَقِثَّائِهَا",t: "کھیرا",t_ro: "Kheera",t_hi: "खीरा",t_en: "Cucumber"},
        {a: "فُوم",r: "Foom",u: "لہسن، گندم",u_ro: "Lehsan, gandum",u_hi: "लहसुन, गेहूँ",u_en: "Garlic, wheat",m: "وَفُومِهَا",t: "لہسن",t_ro: "Lehsan",t_hi: "लहसुन",t_en: "Garlic"},
        {a: "عَدَس",r: "'Adas",u: "مسور",u_ro: "Masoor",u_hi: "मसूर",u_en: "Lentils",m: "وَعَدَسِهَا وَبَصَلِهَا",t: "مسور",t_ro: "Masoor",t_hi: "मसूर",t_en: "Lentils"},
        {a: "بَصَل",r: "Basal",u: "پیاز",u_ro: "Pyaaz",u_hi: "प्याज़",u_en: "Onion",m: "بَصَل",t: "پیاز",t_ro: "Pyaaz",t_hi: "प्याज़",t_en: "Onion"},
        {a: "بَاءَ",r: "Baa'a",u: "لوٹا، واپس ہوا",u_ro: "Lauta, waapas hua",u_hi: "लौटा, वापस हुआ",u_en: "He returned with",m: "وَبَاءُوا بِغَضَبٍ",t: "لوٹنا",t_ro: "Lautna",t_hi: "लौटना",t_en: "Returned"},
        {a: "طُور",r: "Toor",u: "طور پہاڑ",u_ro: "Toor pahaad",u_hi: "तूर पहाड़",u_en: "Mount Tur (Sinai)",m: "الطُّورِ",t: "پہاڑ",t_ro: "Pahaad",t_hi: "पहाड़",t_en: "Mountain"},
        {a: "قِرْد",r: "Qird",u: "بندر",u_ro: "Bandar",u_hi: "बंदर",u_en: "Monkey",m: "الْقِرْدَ",t: "بندر",t_ro: "Bandar",t_hi: "बंदर",t_en: "Monkey"},
        {a: "بَقَرَة",r: "Baqarah",u: "گائے",u_ro: "Gaaye",u_hi: "गाय",u_en: "Cow",m: "الْبَقَرَةَ",t: "گائے",t_ro: "Gaaye",t_hi: "गाय",t_en: "Cow"}
    ] },
    { day: 8, words: [
        {a: "صَفْرَاء",r: "Safraa'",u: "پیلی، زرد",u_ro: "Peeli, zard",u_hi: "पीली, ज़र्द",u_en: "Yellow",m: "بَقَرَةٌ صَفْرَاءُ",t: "پیلی",t_ro: "Peeli",t_hi: "पीली",t_en: "Yellow"},
        {a: "فَتَحَ",r: "Fataha",u: "کھولا",u_ro: "Khola",u_hi: "खोला",u_en: "He opened",m: "فَتَحَ",t: "کھولنا",t_ro: "Kholna",t_hi: "खोलना",t_en: "Opened"},
        {a: "جَنَّة",r: "Jannah",u: "جنت",u_ro: "Jannat",u_hi: "जन्नत",u_en: "Paradise",m: "الْجَنَّةُ",t: "جنت",t_ro: "Jannat",t_hi: "जन्नत",t_en: "Paradise"},
        {a: "جِبْرِيل",r: "Jibreel",u: "جبرائیل (فرشتہ)",u_ro: "Jibraail (farishta)",u_hi: "जिब्राईल (फ़रिश्ता)",u_en: "Jibril (Gabriel)",m: "وَجِبْرِيلَ وَمِيكَالَ",t: "جبرائیل",t_ro: "Jibraail",t_hi: "जिब्राईल",t_en: "Jibril"},
        {a: "مِيكَال",r: "Meekaal",u: "میکائیل (فرشتہ)",u_ro: "Mikaail (farishta)",u_hi: "मीकाईल (फ़रिश्ता)",u_en: "Mika'il (angel)",m: "وَجِبْرِيلَ وَمِيكَالَ",t: "میکائیل",t_ro: "Mikaail",t_hi: "मीकाईल",t_en: "Mika'il"},
        {a: "بَابِل",r: "Baabil",u: "بابل (عراق کا شہر)",u_ro: "Baabil (Iraq ka shehar)",u_hi: "बाबिल (इराक़ का शहर)",u_en: "Babylon",m: "بِبَابِلَ هَارُوتَ وَمَارُوتَ",t: "بابل",t_ro: "Baabil",t_hi: "बाबिल",t_en: "Babylon"},
        {a: "هَارُوت",r: "Haaroot",u: "ہاروت (فرشتہ)",u_ro: "Haaroot (farishta)",u_hi: "हारूत (फ़रिश्ता)",u_en: "Harut (angel)",m: "هَارُوتَ وَمَارُوتَ",t: "ہاروت",t_ro: "Haaroot",t_hi: "हारूत",t_en: "Harut"},
        {a: "مَارُوت",r: "Maaroot",u: "ماروت (فرشتہ)",u_ro: "Maaroot (farishta)",u_hi: "मारूत (फ़रिश्ता)",u_en: "Marut (angel)",m: "هَارُوتَ وَمَارُوتَ",t: "ماروت",t_ro: "Maaroot",t_hi: "मारूत",t_en: "Marut"},
        {a: "أَنَّ",r: "Anna",u: "بے شک",u_ro: "Be-shak",u_hi: "बेशक",u_en: "Indeed, that",m: "أَنَّ",t: "کہ",t_ro: "Ke",t_hi: "कि",t_en: "That"},
        {a: "مَشْرِق",r: "Mashriq",u: "مشرق، پورب",u_ro: "Mashriq, poorab",u_hi: "मशरिक़, पूरब",u_en: "East",m: "الْمَشْرِقُ وَالْمَغْرِبُ",t: "مشرق",t_ro: "Mashriq",t_hi: "मशरिक़",t_en: "East"}
    ] },
    { day: 9, words: [
        {a: "مَغْرِب",r: "Maghrib",u: "مغرب، پچھم",u_ro: "Maghrib, pachhim",u_hi: "मग़रिब, पच्छिम",u_en: "West",m: "الْمَشْرِقُ وَالْمَغْرِبُ",t: "مغرب",t_ro: "Maghrib",t_hi: "मग़रिब",t_en: "West"},
        {a: "اتَّخَذَ",r: "Ittakhadha",u: "بنایا، پکڑا",u_ro: "Banaaya, pakda",u_hi: "बनाया, पकड़ा",u_en: "He took",m: "اتَّخَذُوا أَيْمَانَهُمْ جُنَّةً",t: "بنانا",t_ro: "Banaana",t_hi: "बनाना",t_en: "To take"},
        {a: "يَقُولُ",r: "Yaqoolu",u: "وہ کہتا ہے",u_ro: "Woh kehta hai",u_hi: "वह कहता है",u_en: "He says",m: "يَقُولُ",t: "کہنا",t_ro: "Kehna",t_hi: "कहना",t_en: "Says"},
        {a: "رُكُوع",r: "Ruku'",u: "رکوع",u_ro: "Rukoo",u_hi: "रुकू",u_en: "Bowing, ruku",m: "الرُّكُوعُ",t: "رکوع",t_ro: "Rukoo",t_hi: "रुकू",t_en: "Ruku"},
        {a: "وَسَط",r: "Wasat",u: "بیچ، درمیان",u_ro: "Beech, darmiyaan",u_hi: "बीच, दरमियान",u_en: "Middle",m: "أُمَّةً وَسَطًا",t: "درمیان",t_ro: "Darmiyaan",t_hi: "दरमियान",t_en: "Middle"},
        {a: "قِبْلَة",r: "Qiblah",u: "قبلہ",u_ro: "Qibla",u_hi: "क़िबला",u_en: "Direction of prayer",m: "الْقِبْلَةُ",t: "قبلہ",t_ro: "Qibla",t_hi: "क़िबला",t_en: "Qibla"},
        {a: "وَلَا",r: "Wa laa",u: "اور نہ",u_ro: "Aur nahin",u_hi: "और नहीं",u_en: "And do not",m: "وَلَا تَكْفُرُونِ",t: "اور ناشکری نہ کرو",t_ro: "Aur naashukri na karo",t_hi: "और नाशुक्री न करो",t_en: "And do not be ungrateful"},
        {a: "الصَّابِرِينَ",r: "As-Saabireen",u: "صبر کرنے والے",u_ro: "Sabr karne wale",u_hi: "सब्र करने वाले",u_en: "The patient ones",m: "مَعَ الصَّابِرِينَ",t: "صبر",t_ro: "Sabr",t_hi: "सब्र",t_en: "Patience"},
        {a: "نَقْص",r: "Naqs",u: "کمی، نقصان",u_ro: "Kami, nuqsaan",u_hi: "कमी, नुक़सान",u_en: "Deficiency, loss",m: "بِنَقْصٍ مِنَ الْأَمْوَالِ",t: "کمی",t_ro: "Kami",t_hi: "कमी",t_en: "Loss"},
        {a: "وَاحِد",r: "Waahid",u: "ایک",u_ro: "Ek",u_hi: "एक",u_en: "One",m: "وَاحِدٌ",t: "ایک",t_ro: "Ek",t_hi: "एक",t_en: "One"}
    ] },
    { day: 10, words: [
        {a: "حَلَال",r: "Halaal",u: "حلال",u_ro: "Halaal",u_hi: "हलाल",u_en: "Lawful, permitted",m: "الْحَلَالُ",t: "حلال",t_ro: "Halaal",t_hi: "हलाल",t_en: "Permitted"},
        {a: "طَيِّب",r: "Tayyib",u: "پاکیزہ، اچھا",u_ro: "Paakeeza, achchha",u_hi: "पाकीज़ा, अच्छा",u_en: "Good, pure",m: "طَيِّبَاتِ مَا رَزَقْنَاكُمْ",t: "پاکیزہ",t_ro: "Paakeeza",t_hi: "पाकीज़ा",t_en: "Pure"},
        {a: "وَاشْكُرُوا",r: "Washkuroo",u: "اور شکر کرو",u_ro: "Aur shukr karo",u_hi: "और शुक्र करो",u_en: "And give thanks",m: "وَاشْكُرُوا",t: "شکر",t_ro: "Shukr",t_hi: "शुक्र",t_en: "Gratitude"},
        {a: "دَم",r: "Dam",u: "خون",u_ro: "Khoon",u_hi: "ख़ून",u_en: "Blood",m: "الدَّمُ",t: "خون",t_ro: "Khoon",t_hi: "ख़ून",t_en: "Blood"},
        {a: "لَحْم",r: "Lahm",u: "گوشت",u_ro: "Gosht",u_hi: "गोश्त",u_en: "Meat",m: "اللَّحْمَ",t: "گوشت",t_ro: "Gosht",t_hi: "गोश्त",t_en: "Meat"},
        {a: "خِنْزِير",r: "Khinzeer",u: "سور",u_ro: "Suar",u_hi: "सूअर",u_en: "Pig",m: "الْخِنْزِيرَ",t: "سور",t_ro: "Soor",t_hi: "सूअर",t_en: "Pig"},
        {a: "إِثْم",r: "Ithm",u: "گناہ",u_ro: "Gunah",u_hi: "गुनाह",u_en: "Sin",m: "وَالْإِثْمَ وَالْبَغْيَ",t: "گناہ",t_ro: "Gunah",t_hi: "गुनाह",t_en: "Sin"},
        {a: "غَفُورٌ",r: "Ghafoorun",u: "بہت بخشنے والا",u_ro: "Bahut bakhshne wala",u_hi: "बहुत बख़्शने वाला",u_en: "Most Forgiving",m: "غَفُورٌ رَّحِيمٌ",t: "رحمت",t_ro: "Rahmat",t_hi: "रहमत",t_en: "Mercy"},
        {a: "وَصِيَّة",r: "Wasiyyah",u: "وصیت",u_ro: "Wasiyyat",u_hi: "वसीयत",u_en: "Will, bequest",m: "الْوَصِيَّةُ",t: "وصیت",t_ro: "Wasiyyat",t_hi: "वसीयत",t_en: "Bequest"},
        {a: "بَدَّلَ",r: "Baddala",u: "بدل دیا",u_ro: "Badal diya",u_hi: "बदल दिया",u_en: "He changed",m: "بَدَّلَ",t: "بدلنا",t_ro: "Badalna",t_hi: "बदलना",t_en: "Changed"}
    ] },
    { day: 11, words: [
        {a: "صِيَام",r: "Siyaam",u: "روزہ",u_ro: "Roza",u_hi: "रोज़ा",u_en: "Fasting",m: "الصِّيَامُ",t: "روزہ",t_ro: "Roza",t_hi: "रोज़ा",t_en: "Fasting"},
        {a: "رَمَضَان",r: "Ramadaan",u: "رمضان",u_ro: "Ramzaan",u_hi: "रमज़ान",u_en: "Ramadan",m: "رَمَضَانُ",t: "رمضان",t_ro: "Ramzaan",t_hi: "रमज़ान",t_en: "Month of fasting"},
        {a: "تَهْلُكَة",r: "Tahlukah",u: "ہلاکت",u_ro: "Halaakat",u_hi: "हलाकत",u_en: "Destruction",m: "تَهْلُكَة",t: "تباہی",t_ro: "Tabaahi",t_hi: "तबाही",t_en: "Destruction"},
        {a: "عُمْرَة",r: "Umrah",u: "عمرہ",u_ro: "Umrah",u_hi: "उमरा",u_en: "Umrah",m: "الْعُمْرَةُ",t: "عمرہ",t_ro: "Umrah",t_hi: "उमरा",t_en: "Umrah"},
        {a: "ثَلَاثَة",r: "Thalaathah",u: "تین",u_ro: "Teen",u_hi: "तीन",u_en: "Three",m: "ثَلَاثَةَ أَيَّامٍ",t: "تین",t_ro: "Teen",t_hi: "तीन",t_en: "Three"},
        {a: "عَشَرَة",r: "'Asharah",u: "دس",u_ro: "Das",u_hi: "दस",u_en: "Ten",m: "عَشَرَةٌ كَامِلَةٌ",t: "دس",t_ro: "Das",t_hi: "दस",t_en: "Ten"},
        {a: "رَبَّنَا",r: "Rabbanaa",u: "ہمارے رب",u_ro: "Hamare Rabb",u_hi: "हमारे रब",u_en: "Our Lord",m: "رَبَّنَا آتِنَا",t: "جامع دعا",t_ro: "Jaame dua",t_hi: "जामे दुआ",t_en: "Comprehensive supplication"},
        {a: "آتِنَا",r: "Aatinaa",u: "ہمیں دے",u_ro: "Hamein de",u_hi: "हमें दे",u_en: "Grant us",m: "رَبَّنَا آتِنَا",t: "دعا",t_ro: "Dua",t_hi: "दुआ",t_en: "Supplication"},
        {a: "عَذَاب",r: "Azaab",u: "عذاب",u_ro: "Azaab",u_hi: "अज़ाब",u_en: "Punishment",m: "الْعَذَابُ",t: "سزا",t_ro: "Saza",t_hi: "सज़ा",t_en: "Punishment"},
        {a: "نَصِيب",r: "Naseeb",u: "حصہ",u_ro: "Hissa",u_hi: "हिस्सा",u_en: "Share",m: "لِّكُلٍّ نَصِيبٌ",t: "حصہ",t_ro: "Hissa",t_hi: "हिस्सा",t_en: "Share"}
    ] },
    { day: 12, words: [
        {a: "حِسَاب",r: "Hisaab",u: "حساب",u_ro: "Hisaab",u_hi: "हिसाब",u_en: "Reckoning",m: "الْحِسَابُ",t: "حساب",t_ro: "Hisaab",t_hi: "हिसाब",t_en: "Accounting"},
        {a: "نَسْل",r: "Nasl",u: "اولاد، نسل",u_ro: "Aulaad, nasl",u_hi: "औलाद, नस्ल",u_en: "Descendants",m: "وَيُهْلِكَ الْحَرْثَ وَالنَّسْلَ",t: "اولاد",t_ro: "Aulaad",t_hi: "औलाद",t_en: "Offspring"},
        {a: "هَاجَرَ",r: "Haajara",u: "ہجرت کی",u_ro: "Hijrat ki",u_hi: "हिजरत की",u_en: "He migrated",m: "هَاجَرَ",t: "ہجرت",t_ro: "Hijrat",t_hi: "हिजरत",t_en: "Migrated"},
        {a: "طَلَاق",r: "Talaaq",u: "طلاق",u_ro: "Talaaq",u_hi: "तलाक़",u_en: "Divorce",m: "الطَّلَاقُ",t: "طلاق",t_ro: "Talaaq",t_hi: "तलाक़",t_en: "Divorce"},
        {a: "نِكَاح",r: "Nikaah",u: "نکاح",u_ro: "Nikaah",u_hi: "निकाह",u_en: "Marriage",m: "النِّكَاحُ",t: "نکاح",t_ro: "Nikaah",t_hi: "निकाह",t_en: "Marriage"},
        {a: "الْحَلِيم",r: "Al-Haleem",u: "برداشت کرنے والا",u_ro: "Bardasht karne wala",u_hi: "बर्दाश्त करने वाला",u_en: "Most Forbearing",m: "وَاللَّهُ غَفُورٌ حَلِيمٌ",t: "بردبار",t_ro: "Burdbaar",t_hi: "बुर्दबार",t_en: "Patiently forbearing"},
        {a: "قَبَضَ",r: "Qabada",u: "سمیٹا، تنگ کیا",u_ro: "Sameeta, tang kiya",u_hi: "समेटा, तंग किया",u_en: "He withheld",m: "وَيَقْبِضُ",t: "تنگ کرنا",t_ro: "Tang karna",t_hi: "तंग करना",t_en: "To withhold"},
        {a: "بَسَطَ",r: "Basata",u: "پھیلایا، کشادہ کیا",u_ro: "Phailaaya, kushaada kiya",u_hi: "फैलाया, कुशादा किया",u_en: "He spread",m: "اللَّهُ يَبْسُطُ الرِّزْقَ",t: "کشادہ کرنا",t_ro: "Kushaada karna",t_hi: "कुशादा करना",t_en: "To spread"},
        {a: "طَالُوت",r: "Taaloot",u: "طالوت (بادشاہ)",u_ro: "Taaloot (baadshaah)",u_hi: "तालूत (बादशाह)",u_en: "Talut (Saul)",m: "وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ اللَّهَ قَدْ بَعَثَ لَكُمْ طَالُوتَ",t: "طالوت",t_ro: "Taaloot",t_hi: "तालूत",t_en: "Talut"},
        {a: "شَرِبَ",r: "Shariba",u: "پیا",u_ro: "Piya",u_hi: "पिया",u_en: "He drank",m: "شَرِبَ",t: "پینا",t_ro: "Peena",t_hi: "पीना",t_en: "Drank"}
    ] },
    { day: 13, words: [
        {a: "غَلَبَ",r: "Ghalaba",u: "غالب آیا",u_ro: "Ghaalib aaya",u_hi: "ग़ालिब आया",u_en: "He prevailed",m: "غَلَبَ",t: "غالب",t_ro: "Ghaalib",t_hi: "ग़ालिब",t_en: "Prevailed"},
        {a: "جَالُوت",r: "Jaaloot",u: "جالوت (بادشاہ)",u_ro: "Jaaloot (baadshaah)",u_hi: "जालूत (बादशाह)",u_en: "Jalut (Goliath)",m: "وَقَتَلَ دَاوُودُ جَالُوتَ",t: "جالوت",t_ro: "Jaaloot",t_hi: "जालूत",t_en: "Jalut"},
        {a: "تِلْكَ",r: "Tilka",u: "وہ (عورت)",u_ro: "Woh (aurat)",u_hi: "वह (औरत)",u_en: "That (f.)",m: "تِلْكَ",t: "وہ",t_ro: "Woh",t_hi: "वह",t_en: "That"},
        {a: "الْحَيُّ",r: "Al-Hayyu",u: "زندہ",u_ro: "Zinda",u_hi: "ज़िंदा",u_en: "The Ever-Living",m: "الْحَيُّ الْقَيُّومُ",t: "زندہ، قائم رکھنے والا",t_ro: "Zinda, Qaaim rakhne wala",t_hi: "ज़िंदा, क़ायम रखने वाला",t_en: "The Ever-Living, the Sustainer"},
        {a: "كُرْسِيّ",r: "Kursiyy",u: "کرسی",u_ro: "Kursi",u_hi: "कुर्सी",u_en: "The Footstool (Kursi)",m: "الْكُرْسِيُّ",t: "کرسی",t_ro: "Kursi",t_hi: "कुर्सी",t_en: "The Kursi"},
        {a: "الْعَلِيّ",r: "Al-'Alee",u: "بہت بلند",u_ro: "Bahut buland",u_hi: "बहुत बुलंद",u_en: "The Most High",m: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",t: "بلند",t_ro: "Buland",t_hi: "बुलंद",t_en: "Exalted"},
        {a: "تَبَيَّنَ",r: "Tabayyana",u: "واضح ہوا",u_ro: "Waazeh hua",u_hi: "वाज़ेह हुआ",u_en: "It became clear",m: "تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ",t: "واضح ہونا",t_ro: "Waazeh hona",t_hi: "वाज़ेह होना",t_en: "To become clear"},
        {a: "رُشْد",r: "Rushd",u: "ہدایت، سیدھا راستہ",u_ro: "Hidaayat, seedha raasta",u_hi: "हिदायत, सीधा रास्ता",u_en: "Right guidance",m: "تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ",t: "ہدایت",t_ro: "Hidaayat",t_hi: "हिदायत",t_en: "Guidance"},
        {a: "طَاغُوت",r: "Taaghoot",u: "باطل معبود، سرکش",u_ro: "Baatil maabood, sarkash",u_hi: "बातिल माबूद, सरकश",u_en: "False god, tyrant",m: "فَمَنْ يَكْفُرْ بِالطَّاغُوتِ",t: "باطل معبود",t_ro: "Baatil maabood",t_hi: "बातिल माबूद",t_en: "False deity"},
        {a: "سُنْبُلَة",r: "Sunbulah",u: "بالی، خوشہ",u_ro: "Baali, khosha",u_hi: "बाली, ख़ोशा",u_en: "Ear of corn",m: "سَبعَ سَنَابِلَ",t: "بالی",t_ro: "Baali",t_hi: "बाली",t_en: "Ear of corn"}
    ] },
    { day: 14, words: [
        {a: "شَيْطَان",r: "Shaytaan",u: "شیطان",u_ro: "Shaitaan",u_hi: "शैतान",u_en: "Satan",m: "الشَّيْطَانُ",t: "شیطان",t_ro: "Shaitaan",t_hi: "शैतान",t_en: "Satan"},
        {a: "رِبَا",r: "Ribaa",u: "سود",u_ro: "Sood",u_hi: "सूद",u_en: "Usury, interest",m: "الرِّبَا",t: "سود",t_ro: "Sood",t_hi: "सूद",t_en: "Interest"},
        {a: "بَاعَ",r: "Baa'a",u: "بیچا",u_ro: "Becha",u_hi: "बेचा",u_en: "He sold",m: "وَمِنَ النَّاسِ مَن يَشْرِي نَفْسَهُ",t: "بیچنا",t_ro: "Bechana",t_hi: "बेचना",t_en: "To sell"},
        {a: "أَحَلَّ",r: "Ahalla",u: "حلال کیا",u_ro: "Halaal kiya",u_hi: "हलाल किया",u_en: "He made lawful",m: "أَحَلَّ",t: "حلال",t_ro: "Halaal",t_hi: "हलाल",t_en: "Made lawful"},
        {a: "بَيْع",r: "Bay'",u: "خرید و فروخت",u_ro: "Khareed-o-farokht",u_hi: "ख़रीद-ओ-फ़रोख़्त",u_en: "Sale",m: "وَأَحَلَّ اللَّهُ الْبَيْعَ",t: "بیع",t_ro: "Bay",t_hi: "बै",t_en: "Sale"},
        {a: "حَرَّمَ",r: "Harrama",u: "حرام کیا",u_ro: "Haraam kiya",u_hi: "हराम किया",u_en: "He forbade",m: "حَرَّمَ",t: "حرام",t_ro: "Haraam",t_hi: "हराम",t_en: "Made forbidden"},
        {a: "وَاعْفُ",r: "Wa'fu",u: "اور معاف کر",u_ro: "Aur maaf kar",u_hi: "और माफ़ कर",u_en: "And pardon",m: "وَاعْفُ عَنَّا",t: "اور ہمیں معاف کر دے",t_ro: "Aur hamein maaf kar de",t_hi: "और हमें माफ़ कर दे",t_en: "And pardon us"},
        {a: "وَاغْفِرْ",r: "Waghfir",u: "اور بخش دے",u_ro: "Aur bakhsh de",u_hi: "और बख़्श दे",u_en: "And forgive",m: "وَاغْفِرْ لَنَا",t: "اور ہمیں بخش دے",t_ro: "Aur hamein bakhsh de",t_hi: "और हमें बख़्श दे",t_en: "And forgive us"},
        {a: "قَيُّوم",r: "Qayyoom",u: "قائم رکھنے والا",u_ro: "Qaaim rakhne wala",u_hi: "क़ायम रखने वाला",u_en: "Self-Subsisting",m: "الْقَيُّومُ",t: "سنبھالنے والا",t_ro: "Sambhaalne wala",t_hi: "संभालने वाला",t_en: "Sustains all"},
        {a: "نَزَّلَ",r: "Nazzala",u: "اتارا، نازل کیا",u_ro: "Utaara, naazil kiya",u_hi: "उतारा, नाज़िल किया",u_en: "He sent down",m: "نَزَّلَ عَلَيْكَ الْكِتَابَ",t: "نازل کرنا",t_ro: "Naazil karna",t_hi: "नाज़िल करना",t_en: "To send down"}
    ] },
    { day: 15, words: [
        {a: "تَوْرَاة",r: "Tawraah",u: "تورات",u_ro: "Taurat",u_hi: "तौरात",u_en: "Torah",m: "التَّوْرَاةَ",t: "کتاب",t_ro: "Kitaab",t_hi: "किताब",t_en: "Scripture"},
        {a: "صَوَّرَ",r: "Sawwara",u: "شکل بنائی",u_ro: "Shakl banaai",u_hi: "शक्ल बनाई",u_en: "He fashioned",m: "هُوَ الَّذِي يُصَوِّرُكُمْ",t: "شکل بنانا",t_ro: "Shakl banaana",t_hi: "शक्ल बनाना",t_en: "To shape"},
        {a: "مِيعَاد",r: "Mee'aad",u: "مقررہ وقت",u_ro: "Muqarrara waqt",u_hi: "मुक़र्ररा वक़्त",u_en: "Appointed time",m: "إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ",t: "وعدہ کا وقت",t_ro: "Waada ka waqt",t_hi: "वादे का वक़्त",t_en: "Appointed term"},
        {a: "رِضْوَان",r: "Ridwaan",u: "رضا",u_ro: "Raza",u_hi: "रज़ा",u_en: "Pleasure, approval",m: "رِضْوَانٌ",t: "خوشی",t_ro: "Khushi",t_hi: "ख़ुशी",t_en: "Divine pleasure"},
        {a: "شَهِدَ",r: "Shahida",u: "گواہی دی",u_ro: "Gawahi di",u_hi: "गवाही दी",u_en: "Bore witness",m: "شَهِدَ اللَّهُ أَنَّهُ لَا إِلَهَ إِلَّا هُوَ",t: "اللہ نے گواہی دی کہ اس کے سوا کوئی معبود نہیں",t_ro: "Allah ne gawaahi di ke uske siwa koi maabood nahin",t_hi: "अल्लाह ने गवाही दी कि उसके सिवा कोई माबूद नहीं",t_en: "Allah bears witness that there is no god but Him"},
        {a: "إِسْلَام",r: "Islaam",u: "اسلام",u_ro: "Islaam",u_hi: "इस्लाम",u_en: "Islam, submission",m: "الْإِسْلَامُ",t: "اسلام",t_ro: "Islaam",t_hi: "इस्लाम",t_en: "Islam"},
        {a: "ذُرِّيَّة",r: "Dhurriyyah",u: "اولاد",u_ro: "Aulaad",u_hi: "औलाद",u_en: "Offspring, descendants",m: "الذُّرِّيَّةَ",t: "نسل",t_ro: "Nasl",t_hi: "नस्ल",t_en: "Progeny"},
        {a: "وَضَعَ",r: "Wada'a",u: "رکھا، جنم دیا",u_ro: "Rakha, janam diya",u_hi: "रखा, जन्म दिया",u_en: "He placed / gave birth",m: "فَلَمَّا وَضَعَتْهَا",t: "رکھنا",t_ro: "Rakhna",t_hi: "रखना",t_en: "To place"},
        {a: "دَعَا",r: "Da'aa",u: "پکارا",u_ro: "Pukaara",u_hi: "पुकारा",u_en: "He called",m: "دَعَا",t: "دعا",t_ro: "Dua",t_hi: "दुआ",t_en: "Called"},
        {a: "مَرْيَم",r: "Maryam",u: "مریم علیہا السلام",u_ro: "Maryam alaihas-salaam",u_hi: "मरयम अलैहस्सलाम",u_en: "Maryam (Mary)",m: "مَرْيَمُ",t: "عورت",t_ro: "Aurat",t_hi: "औरत",t_en: "Woman"}
    ] },
    { day: 16, words: [
        {a: "يَكُونُ",r: "Yakoonu",u: "ہوتا ہے",u_ro: "Hota hai",u_hi: "होता है",u_en: "He is, will be",m: "يَكُونُ",t: "ہونا",t_ro: "Hona",t_hi: "होना",t_en: "Being"},
        {a: "إِنْجِيل",r: "Injeel",u: "انجیل",u_ro: "Injeel",u_hi: "इंजील",u_en: "Gospel (Injil)",m: "الْإِنجِيلَ",t: "کتاب",t_ro: "Kitaab",t_hi: "किताब",t_en: "Scripture"},
        {a: "أَحَسّ",r: "Ahassa",u: "محسوس کیا، بھانپ لیا",u_ro: "Mehsoos kiya, bhaanp liya",u_hi: "महसूस किया, भाँप लिया",u_en: "He sensed",m: "هَلْ تُحِسُّ مِنْهُم مِّنْ أَحَدٍ",t: "بھانپنا",t_ro: "Bhaanpna",t_hi: "भाँपना",t_en: "To sense"},
        {a: "وَاللَّهُ",r: "Wallahu",u: "اور اللہ",u_ro: "Aur Allah",u_hi: "और अल्लाह",u_en: "And Allah",m: "وَاللَّهُ لَا يُحِبُّ الظَّالِمِينَ",t: "اور اللہ ظالموں کو پسند نہیں کرتا",t_ro: "Aur Allah zaalimon ko pasand nahin karta",t_hi: "और अल्लाह ज़ालिमों को पसंद नहीं करता",t_en: "And Allah does not like the wrongdoers"},
        {a: "مِثْل",r: "Mithl",u: "جیسا",u_ro: "Jaisa",u_hi: "जैसा",u_en: "Like, similar to",m: "مِثْل",t: "مثال",t_ro: "Misaal",t_hi: "मिसाल",t_en: "Example"},
        {a: "عِيسَى",r: "Eesaa",u: "عیسیٰ علیہ السلام",u_ro: "Eesa alaihis-salaam",u_hi: "ईसा अलैहिस्सलाम",u_en: "Isa (Jesus)",m: "عِيسَى",t: "روح اللہ",t_ro: "Roohullah",t_hi: "रूहुल्लाह",t_en: "Spirit from Allah"},
        {a: "تُرَاب",r: "Turaab",u: "خاک، مٹی",u_ro: "Khaak, mitti",u_hi: "ख़ाक, मिट्टी",u_en: "Dust, earth",m: "خَلَقَهُ مِنْ تُرَابٍ",t: "مٹی",t_ro: "Mitti",t_hi: "मिट्टी",t_en: "Dust"},
        {a: "حَاجَّ",r: "Haajja",u: "دلیل سے بحث کی",u_ro: "Daleel se behas ki",u_hi: "दलील से बहस की",u_en: "He disputed",m: "أَتُحَاجُّونَنَا فِي اللَّهِ",t: "بحث",t_ro: "Behas",t_hi: "बहस",t_en: "Disputation"},
        {a: "مُسْلِم",r: "Muslim",u: "مسلمان",u_ro: "Musalmaan",u_hi: "मुसलमान",u_en: "Muslim",m: "الْمُسْلِمُ",t: "مسلمان",t_ro: "Musalmaan",t_hi: "मुसलमान",t_en: "Muslim"},
        {a: "لِمَ",r: "Lima",u: "کیوں",u_ro: "Kyun",u_hi: "क्यों",u_en: "Why",m: "لِمَ",t: "کیوں",t_ro: "Kyun",t_hi: "क्यों",t_en: "Why"}
    ] },
    { day: 17, words: [
        {a: "دِينَار",r: "Deenaar",u: "دینار (سونا)",u_ro: "Deenaar (sona)",u_hi: "दीनार (सोना)",u_en: "Dinar (gold)",m: "دِينَارًا",t: "دینار",t_ro: "Deenaar",t_hi: "दीनार",t_en: "Dinar"},
        {a: "يُحِبُّ",r: "Yuhibb",u: "وہ پسند کرتا ہے",u_ro: "Woh pasand karta hai",u_hi: "वह पसंद करता है",u_en: "He loves",m: "يُحِبُّ",t: "پسند",t_ro: "Pasand",t_hi: "पसंद",t_en: "Loves"},
        {a: "لَنْ",r: "Lan",u: "ہرگز نہیں",u_ro: "Hargiz nahin",u_hi: "हरगिज़ नहीं",u_en: "Will never",m: "لَنْ",t: "ہرگز نہیں",t_ro: "Hargiz nahin",t_hi: "हरगिज़ नहीं",t_en: "Never"},
        {a: "بِرّ",r: "Birr",u: "نیکی، بھلائی",u_ro: "Neki, bhalaai",u_hi: "नेकी, भलाई",u_en: "Righteousness",m: "لَنْ تَنَالُوا الْبِرَّ",t: "نیکی",t_ro: "Neki",t_hi: "नेकी",t_en: "Righteousness"},
        {a: "صَدَقَ",r: "Sadaqa",u: "سچ کہا",u_ro: "Sach kaha",u_hi: "सच कहा",u_en: "He spoke truth",m: "صَدَقَ",t: "سچ",t_ro: "Sach",t_hi: "सच",t_en: "Told truth"},
        {a: "مُسْلِمُونَ",r: "Muslimoon",u: "فرمانبردار، مسلمان",u_ro: "Farmanbardaar, Muslim",u_hi: "फ़रमाँबरदार, मुस्लिम",u_en: "Muslims, those who submit",m: "إِلَّا وَأَنْتُمْ مُسْلِمُونَ",t: "مگر اس حال میں کہ تم مسلمان ہو",t_ro: "Magar is haal mein ke tum Muslim ho",t_hi: "मगर इस हाल में कि तुम मुस्लिम हो",t_en: "Except as Muslims"},
        {a: "مَعْرُوف",r: "Ma'roof",u: "اچھی بات",u_ro: "Achchhi baat",u_hi: "अच्छी बात",u_en: "Good, righteous deed",m: "الْمَعْرُوفُ",t: "بھلائی",t_ro: "Bhalaai",t_hi: "भलाई",t_en: "Goodness"},
        {a: "بَدْر",r: "Badr",u: "بدر (پہلی جنگ کا مقام)",u_ro: "Badr (pehli jang ka maqaam)",u_hi: "बद्र (पहली जंग का मक़ाम)",u_en: "Badr (battle site)",m: "وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ",t: "بدر",t_ro: "Badr",t_hi: "बद्र",t_en: "Badr"},
        {a: "أَطِيعُوا",r: "Atee'oo",u: "اطاعت کرو",u_ro: "Itaat karo",u_hi: "इताअत करो",u_en: "Obey!",m: "أَطِيعُوا",t: "اطاعت",t_ro: "Itaat",t_hi: "इताअत",t_en: "Obey"},
        {a: "سَارَعَ",r: "Saara'a",u: "آگے بڑھا، دوڑا",u_ro: "Aage badha, dauda",u_hi: "आगे बढ़ा, दौड़ा",u_en: "He raced",m: "سَارِعُوا إِلَىٰ مَغْفِرَةٍ",t: "دوڑنا",t_ro: "Daudna",t_hi: "दौड़ना",t_en: "To race"}
    ] },
    { day: 18, words: [
        {a: "غَيْظ",r: "Ghayz",u: "غصہ",u_ro: "Gussa",u_hi: "ग़ुस्सा",u_en: "Rage, anger",m: "وَالْكَاظِمِينَ الْغَيْظَ",t: "غصہ",t_ro: "Gussa",t_hi: "ग़ुस्सा",t_en: "Anger"},
        {a: "اسْتَغْفَرَ",r: "Istaghfara",u: "بخشش مانگی",u_ro: "Bakhshish maangi",u_hi: "बख़्शिश माँगी",u_en: "He sought forgiveness",m: "فَاسْتَغْفَرُوا لِذُنُوبِهِمْ",t: "بخشش مانگنا",t_ro: "Bakhshish maangna",t_hi: "बख़्शिश माँगना",t_en: "To seek forgiveness"},
        {a: "مُحَمَّد",r: "Muhammad",u: "محمد ﷺ",u_ro: "Muhammad ﷺ",u_hi: "मुहम्मद ﷺ",u_en: "Muhammad",m: "مُحَمَّدٌ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "The Prophet"},
        {a: "مَاتَ",r: "Maata",u: "مر گیا",u_ro: "Mar gaya",u_hi: "मर गया",u_en: "He died",m: "مَاتَ",t: "موت",t_ro: "Maut",t_hi: "मौत",t_en: "Died"},
        {a: "غَلّ",r: "Ghalla",u: "خیانت کی (مالِ غنیمت میں)",u_ro: "Khiyaanat ki",u_hi: "ख़ियानत की",u_en: "He embezzled",m: "وَمَا كَانَ لِنَبِيٍّ أَن يَغُلَّ",t: "خیانت",t_ro: "Khiyaanat",t_hi: "ख़ियानत",t_en: "Embezzlement"},
        {a: "مَوْت",r: "Mawt",u: "موت",u_ro: "Maut",u_hi: "मौत",u_en: "Death",m: "الْمَوْتُ",t: "موت",t_ro: "Maut",t_hi: "मौत",t_en: "Death"},
        {a: "فَازَ",r: "Faaza",u: "کامیاب ہوا",u_ro: "Kaamyaab hua",u_hi: "कामयाब हुआ",u_en: "He succeeded",m: "فَمَن زُحْزِحَ عَنِ النَّارِ فَقَدْ فَازَ",t: "کامیاب ہونا",t_ro: "Kaamyaab hona",t_hi: "कामयाब होना",t_en: "To succeed"},
        {a: "مَتَاع",r: "Mataa'",u: "سامان، فائدہ",u_ro: "Saamaan, faaida",u_hi: "सामान, फ़ायदा",u_en: "Provision",m: "مَتَاعُ الْغُرُورِ",t: "سامان",t_ro: "Saamaan",t_hi: "सामान",t_en: "Provision"},
        {a: "أَلْبَاب",r: "Albaab",u: "عقلیں",u_ro: "Aqlein",u_hi: "अक़्लें",u_en: "Minds, intellects",m: "أَلْبَاب",t: "عقل والے",t_ro: "Aql waale",t_hi: "अक़्ल वाले",t_en: "People of understanding"},
        {a: "نِصْف",r: "Nisf",u: "آدھا",u_ro: "Aadha",u_hi: "आधा",u_en: "Half",m: "نِصْفُ مَا تَرَكَ",t: "آدھا",t_ro: "Aadha",t_hi: "आधा",t_en: "Half"}
    ] },
    { day: 19, words: [
        {a: "رُبُع",r: "Rub'",u: "چوتھائی",u_ro: "Chauthaai",u_hi: "चौथाई",u_en: "One quarter",m: "فَلَهُنَّ الرُّبُعُ",t: "چوتھائی",t_ro: "Chauthaai",t_hi: "चौथाई",t_en: "Quarter"},
        {a: "ثُمُن",r: "Thumun",u: "آٹھواں حصہ",u_ro: "Aathwa hissa",u_hi: "आठवाँ हिस्सा",u_en: "One eighth",m: "الثُّمُنُ",t: "آٹھواں حصہ",t_ro: "Aathwa hissa",t_hi: "आठवाँ हिस्सा",t_en: "One eighth"},
        {a: "سُدُس",r: "Sudus",u: "چھٹا حصہ",u_ro: "Chhatta hissa",u_hi: "छठा हिस्सा",u_en: "One sixth",m: "السُّدُسُ",t: "چھٹا حصہ",t_ro: "Chhatta hissa",t_hi: "छठा हिस्सा",t_en: "One sixth"},
        {a: "ثُلُث",r: "Thuluth",u: "ایک تہائی",u_ro: "Ek tehaai",u_hi: "एक तिहाई",u_en: "One third",m: "فَلِأُمِّهِ الثُّلُثُ",t: "تہائی",t_ro: "Tehaai",t_hi: "तिहाई",t_en: "One third"},
        {a: "جَار",r: "Jaar",u: "پڑوسی",u_ro: "Parosi",u_hi: "पड़ोसी",u_en: "Neighbour",m: "وَالْجَارِ ذِي الْقُرْبَىٰ",t: "پڑوسی",t_ro: "Parosi",t_hi: "पड़ोसी",t_en: "Neighbour"},
        {a: "وَلِيّ",r: "Waliyy",u: "مددگار",u_ro: "Madadgaar",u_hi: "मददगार",u_en: "Protector, Ally",m: "الْوَلِيُّ",t: "دوست",t_ro: "Dost",t_hi: "दोस्त",t_en: "Friend"},
        {a: "نَصِير",r: "Naseer",u: "مدد کرنے والا",u_ro: "Madad karne wala",u_hi: "मदद करने वाला",u_en: "Helper",m: "نَصِيرًا",t: "مددگار",t_ro: "Madadgaar",t_hi: "मददगार",t_en: "Supporter"},
        {a: "أَشْرَكَ",r: "Ashraka",u: "شرک کیا",u_ro: "Shirk kiya",u_hi: "शिर्क किया",u_en: "He associated partners",m: "وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا",t: "شرک",t_ro: "Shirk",t_hi: "शिर्क",t_en: "Polytheism"},
        {a: "لَعَنَ",r: "La'ana",u: "لعنت کی",u_ro: "Laanat ki",u_hi: "लानत की",u_en: "He cursed",m: "يَلْعَنُهُمُ اللَّهُ",t: "لعنت",t_ro: "Laanat",t_hi: "लानत",t_en: "Curse"},
        {a: "أَن",r: "An",u: "کہ",u_ro: "Ke",u_hi: "कि",u_en: "That",m: "أَن",t: "کہ",t_ro: "Ke",t_hi: "कि",t_en: "That"}
    ] },
    { day: 20, words: [
        {a: "وَأَطِيعُوا",r: "Wa atee'oo",u: "اور اطاعت کرو",u_ro: "Aur itaat karo",u_hi: "और इताअत करो",u_en: "And obey",m: "وَأَطِيعُوا الرَّسُولَ",t: "اطاعت",t_ro: "Itaat",t_hi: "इताअत",t_en: "Obedience"},
        {a: "الرَّسُولَ",r: "Ar-Rasool",u: "رسول، پیغمبر",u_ro: "Rasool, Paigambar",u_hi: "रसूल, पैग़म्बर",u_en: "The Messenger",m: "وَأَطِيعُوا الرَّسُولَ",t: "اور رسول کی اطاعت کرو",t_ro: "Aur Rasool ki itaat karo",t_hi: "और रसूल की इताअत करो",t_en: "And obey the Messenger"},
        {a: "رَفِيق",r: "Rafeeq",u: "ساتھی",u_ro: "Saathi",u_hi: "साथी",u_en: "Companion",m: "حَسُنَ أُولَٰئِكَ رَفِيقًا",t: "ساتھی",t_ro: "Saathi",t_hi: "साथी",t_en: "Companion"},
        {a: "أَصَابَ",r: "Asaaba",u: "پہنچا، مارا",u_ro: "Pahuncha, maara",u_hi: "पहुँचा, मारा",u_en: "It struck",m: "مَا أَصَابَكَ مِنْ حَسَنَةٍ",t: "پہنچنا",t_ro: "Pahunchna",t_hi: "पहुँचना",t_en: "Struck"},
        {a: "حَسَنَة",r: "Hasanah",u: "نیکی",u_ro: "Neki",u_hi: "नेकी",u_en: "Good deed",m: "مَنْ جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا",t: "نیکی",t_ro: "Neki",t_hi: "नेकी",t_en: "Good deed"},
        {a: "سَيِّئَة",r: "Sayyi'ah",u: "برائی",u_ro: "Buraai",u_hi: "बुराई",u_en: "Evil deed",m: "وَمَنْ جَاءَ بِالسَّيِّئَةِ",t: "برائی",t_ro: "Buraai",t_hi: "बुराई",t_en: "Bad deed"},
        {a: "شَهِيد",r: "Shaheed",u: "گواہ",u_ro: "Gawaah",u_hi: "गवाह",u_en: "Witness",m: "شَهِيدًا",t: "گواہ",t_ro: "Gawaah",t_hi: "गवाह",t_en: "Witness"},
        {a: "أَطَاعَ",r: "Ataa'a",u: "اطاعت کی",u_ro: "Itaat ki",u_hi: "इताअत की",u_en: "He obeyed",m: "فَقَدْ أَطَاعَ اللَّهَ",t: "اطاعت",t_ro: "Itaat",t_hi: "इताअत",t_en: "Obedience"},
        {a: "الْمُقِيت",r: "Al-Muqeet",u: "نگہبان، قوت دینے والا",u_ro: "Nigahbaan, quwwat dene wala",u_hi: "निगहबान, क़ुव्वत देने वाला",u_en: "Sustainer, Guardian",m: "وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ مُّقِيتًا",t: "نگہبان",t_ro: "Nigahbaan",t_hi: "निगहबान",t_en: "Watcher over all"},
        {a: "قَعَدَ",r: "Qa'ada",u: "بیٹھا",u_ro: "Baitha",u_hi: "बैठा",u_en: "He sat",m: "الْقَاعِدُونَ مِنَ الْمُؤْمِنِينَ",t: "بیٹھنا",t_ro: "Baithna",t_hi: "बैठना",t_en: "To sit"}
    ] },
    { day: 21, words: [
        {a: "عَفُوّ",r: "Afuw",u: "معاف کرنے والا",u_ro: "Maaf karne wala",u_hi: "माफ़ करने वाला",u_en: "Pardoner",m: "عَفُوٌّ",t: "معافی",t_ro: "Maafi",t_hi: "माफ़ी",t_en: "Forgiveness"},
        {a: "وَاسْتَغْفِرِ",r: "Wastaghfir",u: "اور بخشش مانگ",u_ro: "Aur bakhshish maang",u_hi: "और बख़्शिश माँग",u_en: "And seek forgiveness",m: "وَاسْتَغْفِرِ اللَّهَ",t: "اور اللہ سے بخشش مانگو",t_ro: "Aur Allah se bakhshish maango",t_hi: "और अल्लाह से बख़्शिश माँगो",t_en: "And seek forgiveness from Allah"},
        {a: "مُنَافِق",r: "Munaafiq",u: "منافق",u_ro: "Munaafiq",u_hi: "मुनाफ़िक़",u_en: "Hypocrite",m: "الْمُنَافِقُ",t: "منافق",t_ro: "Munaafiq",t_hi: "मुनाफ़िक़",t_en: "Hypocrite"},
        {a: "لَكِنْ",r: "Laakin",u: "لیکن",u_ro: "Lekin",u_hi: "लेकिन",u_en: "But",m: "لَكِنْ",t: "لیکن",t_ro: "Lekin",t_hi: "लेकिन",t_en: "But"},
        {a: "تَعَاوَنَ",r: "Ta'aawana",u: "تعاون کیا",u_ro: "Ta'aawun kiya",u_hi: "तआवुन किया",u_en: "They cooperated",m: "وَتَعَاوَنُوا عَلَى الْبِرِّ",t: "تعاون",t_ro: "Ta'aawun",t_hi: "तआवुन",t_en: "Cooperation"},
        {a: "وَاذْكُرُوا",r: "Wazkuroo",u: "اور یاد کرو",u_ro: "Aur yaad karo",u_hi: "और याद करो",u_en: "And remember",m: "وَاذْكُرُوا نِعْمَةَ اللَّهِ",t: "اللہ کی نعمت یاد کرو",t_ro: "Allah ki nemat yaad karo",t_hi: "अल्लाह की नेमत याद करो",t_en: "Remember Allah's favour"},
        {a: "غُرَاب",r: "Ghuraab",u: "کوا",u_ro: "Kauwa",u_hi: "कौआ",u_en: "Crow",m: "الْغُرَابَ",t: "کوا",t_ro: "Kauwa",t_hi: "कौआ",t_en: "Crow"},
        {a: "قَتَلَ",r: "Qatala",u: "قتل کیا",u_ro: "Qatl kiya",u_hi: "क़त्ल किया",u_en: "He killed",m: "قَتَلَ",t: "قتل",t_ro: "Qatl",t_hi: "क़त्ल",t_en: "Killed"},
        {a: "سَرَقَ",r: "Saraqa",u: "چوری کی",u_ro: "Chori ki",u_hi: "चोरी की",u_en: "He stole",m: "وَالسَّارِقُ وَالسَّارِقَةُ",t: "چوری",t_ro: "Chori",t_hi: "चोरी",t_en: "Theft"},
        {a: "قِسْط",r: "Qist",u: "انصاف، عدل",u_ro: "Insaaf, adl",u_hi: "इंसाफ़, अद्ल",u_en: "Equity",m: "بِالْقِسْطِ",t: "انصاف",t_ro: "Insaaf",t_hi: "इंसाफ़",t_en: "Equity"}
    ] },
    { day: 22, words: [
        {a: "أَنْف",r: "Anf",u: "ناک",u_ro: "Naak",u_hi: "नाक",u_en: "Nose",m: "الْأَنْفُ",t: "ناک",t_ro: "Naak",t_hi: "नाक",t_en: "Nose"},
        {a: "سِنّ",r: "Sinn",u: "دانت",u_ro: "Daant",u_hi: "दाँत",u_en: "Tooth",m: "السِّنُّ",t: "دانت",t_ro: "Daant",t_hi: "दाँत",t_en: "Tooth"},
        {a: "تَصَدَّقَ",r: "Tasaddaqa",u: "صدقہ دیا",u_ro: "Sadqa diya",u_hi: "सदक़ा दिया",u_en: "He gave charity",m: "وَأَن تَصَدَّقُوا خَيْرٌ لَّكُمْ",t: "صدقہ دینا",t_ro: "Sadqa dena",t_hi: "सदक़ा देना",t_en: "To give charity"},
        {a: "مَيْسِر",r: "Maysir",u: "جوا",u_ro: "Jua",u_hi: "जुआ",u_en: "Gambling",m: "إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ",t: "جوا",t_ro: "Jua",t_hi: "जुआ",t_en: "Gambling"},
        {a: "كَعْبَة",r: "Ka'bah",u: "کعبہ",u_ro: "Kaaba",u_hi: "काबा",u_en: "Kaaba",m: "الْكَعْبَةَ",t: "کعبہ",t_ro: "Kaaba",t_hi: "काबा",t_en: "Kaaba"},
        {a: "خَبِيث",r: "Khabeeth",u: "ناپاک، برا",u_ro: "Naapaak, bura",u_hi: "नापाक, बुरा",u_en: "Impure, bad",m: "لَا يَسْتَوِي الْخَبِيثُ وَالطَّيِّبُ",t: "ناپاک",t_ro: "Naapaak",t_hi: "नापाक",t_en: "Impure"},
        {a: "ظُلُمَات",r: "Zulumaat",u: "اندھیرے",u_ro: "Andhere",u_hi: "अंधेरे",u_en: "Darkness",m: "الظُّلُمَاتِ",t: "اندھیرا",t_ro: "Andhera",t_hi: "अंधेरा",t_en: "Darkness"},
        {a: "سِيرُوا",r: "Seeroo",u: "چلو پھرو",u_ro: "Chalo phiro",u_hi: "चलो-फिरो",u_en: "Travel!",m: "سِيرُوا",t: "چلنا",t_ro: "Chalna",t_hi: "चलना",t_en: "Travel"},
        {a: "فَوْقَ",r: "Fawqa",u: "اوپر",u_ro: "Upar",u_hi: "ऊपर",u_en: "Above",m: "فَوْقَ",t: "اوپر",t_ro: "Upar",t_hi: "ऊपर",t_en: "Above"},
        {a: "ظَالِم",r: "Zalim",u: "ظالم",u_ro: "Zaalim",u_hi: "ज़ालिम",u_en: "Wrongdoer",m: "الظَّالِمُ",t: "ظالم",t_ro: "Zaalim",t_hi: "ज़ालिम",t_en: "Oppressor"}
    ] },
    { day: 23, words: [
        {a: "انْظُرْ",r: "Unzur",u: "دیکھو",u_ro: "Dekho",u_hi: "देखो",u_en: "Look!",m: "انْظُرْ",t: "دیکھنا",t_ro: "Dekhna",t_hi: "देखना",t_en: "Look"},
        {a: "أَصْلَحَ",r: "Aslaha",u: "اصلاح کی",u_ro: "Islaah ki",u_hi: "इसलाह की",u_en: "He reformed",m: "وَأَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ",t: "اصلاح کرنا",t_ro: "Islaah karna",t_hi: "इसलाह करना",t_en: "To reform"},
        {a: "وَرَقَة",r: "Waraqah",u: "پتّا",u_ro: "Patta",u_hi: "पत्ता",u_en: "Leaf",m: "الْوَرَقَةُ",t: "پتّا",t_ro: "Patta",t_hi: "पत्ता",t_en: "Leaf"},
        {a: "حَبَّة",r: "Habbah",u: "دانہ",u_ro: "Daana",u_hi: "दाना",u_en: "Grain, seed",m: "حَبَّةٍ",t: "دانہ",t_ro: "Daana",t_hi: "दाना",t_en: "Seed"},
        {a: "تَضَرُّع",r: "Tadarru'",u: "عاجزی سے دعا",u_ro: "Aajzi se dua",u_hi: "आजिज़ी से दुआ",u_en: "Humble supplication",m: "تَضَرُّعًا وَخُفْيَةً",t: "عاجزی",t_ro: "Aajzi",t_hi: "आजिज़ी",t_en: "Humble pleading"},
        {a: "فَطَرَ",r: "Fatara",u: "پیدا کیا، پھاڑا",u_ro: "Paida kiya, phaada",u_hi: "पैदा किया, फाड़ा",u_en: "He originated",m: "فَاطِرِ السَّمَاوَاتِ",t: "پیدا کرنا",t_ro: "Paida karna",t_hi: "पैदा करना",t_en: "To originate"},
        {a: "نَوَى",r: "Nawaa",u: "گٹھلی، بیج",u_ro: "Guthli, beej",u_hi: "गुठली, बीज",u_en: "Kernel, seed",m: "فَالِقُ الْحَبِّ وَالنَّوَىٰ",t: "بیج",t_ro: "Beej",t_hi: "बीज",t_en: "Seed"},
        {a: "أَنْشَأَ",r: "Anshaa",u: "پیدا کیا، اٹھایا",u_ro: "Paida kiya, uthaaya",u_hi: "पैदा किया, उठाया",u_en: "He produced",m: "وَهُوَ الَّذِي أَنشَأَكُم",t: "پیدا کرنا",t_ro: "Paida karna",t_hi: "पैदा करना",t_en: "To produce"},
        {a: "فَصَّلَ",r: "Fassala",u: "تفصیل سے بیان کیا",u_ro: "Tafseel se bayaan kiya",u_hi: "तफ़सील से बयान किया",u_en: "He detailed",m: "كِتَابٌ فُصِّلَتْ آيَاتُهُ",t: "تفصیل",t_ro: "Tafseel",t_hi: "तफ़सील",t_en: "Detailed"},
        {a: "صَاحِبَة",r: "Saahibah",u: "بیوی، ساتھی عورت",u_ro: "Biwi, saathi aurat",u_hi: "बीवी, साथी औरत",u_en: "Wife, female companion",m: "أَنَّىٰ يَكُونُ لَهُ وَلَدٌ وَلَمْ تَكُن لَّهُ صَاحِبَةٌ",t: "بیوی",t_ro: "Biwi",t_hi: "बीवी",t_en: "Wife"}
    ] },
    { day: 24, words: [
        {a: "سَبَّ",r: "Sabba",u: "برا بھلا کہا، گالی دی",u_ro: "Bura bhala kaha, gaali di",u_hi: "बुरा भला कहा, गाली दी",u_en: "He insulted",m: "وَلَا تَسُبُّوا الَّذِينَ يَدْعُونَ",t: "گالی",t_ro: "Gaali",t_hi: "गाली",t_en: "To insult"},
        {a: "الْحَكَم",r: "Al-Hakam",u: "فیصلہ کرنے والا",u_ro: "Faisla karne wala",u_hi: "फ़ैसला करने वाला",u_en: "The Judge",m: "أَفَغَيْرَ اللَّهِ أَبْتَغِي حَكَمًا",t: "منصف",t_ro: "Munsif",t_hi: "मुन्सिफ़",t_en: "Arbiter"},
        {a: "ثَمَانِيَة",r: "Thamaaniyah",u: "آٹھ",u_ro: "Aath",u_hi: "आठ",u_en: "Eight",m: "ثَمَانِيَةَ أَزْوَاجٍ",t: "آٹھ",t_ro: "Aath",t_hi: "आठ",t_en: "Eight"},
        {a: "مَعْز",r: "Ma'z",u: "بکری",u_ro: "Bakri",u_hi: "बकरी",u_en: "Goat",m: "الْمَعْزَ",t: "بکری",t_ro: "Bakri",t_hi: "बकरी",t_en: "Goat"},
        {a: "غَنَم",r: "Ghanam",u: "بھیڑ بکریاں",u_ro: "Bhed bakriyaan",u_hi: "भेड़-बकरियाँ",u_en: "Sheep and goats",m: "الْغَنَمَ",t: "بکری",t_ro: "Bakri",t_hi: "बकरी",t_en: "Goat"},
        {a: "كَيْل",r: "Kayl",u: "ناپنا",u_ro: "Naapna",u_hi: "नापना",u_en: "Measuring",m: "أَوْفُوا الْكَيْلَ",t: "ناپنا",t_ro: "Naapna",t_hi: "नापना",t_en: "Measuring"},
        {a: "بَعْض",r: "Ba'd",u: "کچھ",u_ro: "Kuch",u_hi: "कुछ",u_en: "Some",m: "بَعْض",t: "کچھ",t_ro: "Kuch",t_hi: "कुछ",t_en: "Some"},
        {a: "فِي",r: "Fee",u: "میں",u_ro: "Main",u_hi: "मैं",u_en: "In",m: "فِي",t: "میں",t_ro: "Main",t_hi: "मैं",t_en: "In"},
        {a: "حِين",r: "Heen",u: "وقت، لمحہ",u_ro: "Waqt, lamha",u_hi: "वक़्त, लम्हा",u_en: "Time",m: "إِلَىٰ حِينٍ",t: "وقت",t_ro: "Waqt",t_hi: "वक़्त",t_en: "Time"},
        {a: "اشْرَبُوا",r: "Ishraboo",u: "پیو",u_ro: "Piyo",u_hi: "पियो",u_en: "Drink!",m: "اشْرَبُوا",t: "پینا",t_ro: "Peena",t_hi: "पीना",t_en: "Drink"}
    ] },
    { day: 25, words: [
        {a: "جَمَل",r: "Jamal",u: "اونٹ",u_ro: "Unt",u_hi: "ऊँट",u_en: "Camel",m: "الْجَمَلَ",t: "اونٹ",t_ro: "Unt",t_hi: "ऊँट",t_en: "Camel"},
        {a: "ادْعُوا",r: "Ud'oo",u: "پکارو",u_ro: "Pukaaro",u_hi: "पुकारो",u_en: "Call upon!",m: "ادْعُوا",t: "دعا",t_ro: "Dua",t_hi: "दुआ",t_en: "Call upon"},
        {a: "خُفْيَة",r: "Khufyah",u: "چھپے ہوئے، خاموشی سے",u_ro: "Chhupe hue, khaamoshi se",u_hi: "छुपे हुए, ख़ामोशी से",u_en: "Secretly",m: "تَضَرُّعًا وَخُفْيَةً",t: "چھپ کر",t_ro: "Chhup kar",t_hi: "छुप कर",t_en: "In secret"},
        {a: "عَصَا",r: "'Asaa",u: "لاٹھی",u_ro: "Laathi",u_hi: "लाठी",u_en: "Staff",m: "فَأَلْقَىٰ عَصَاهُ",t: "لاٹھی",t_ro: "Laathi",t_hi: "लाठी",t_en: "Staff"},
        {a: "جَرَاد",r: "Jaraad",u: "ٹڈی",u_ro: "Tiddi",u_hi: "टिड्डी",u_en: "Locust",m: "الْجَرَادَ",t: "ٹڈی",t_ro: "Tiddi",t_hi: "टिड्डी",t_en: "Locust"},
        {a: "ضَفَادِع",r: "Dafaaidi'",u: "مینڈک",u_ro: "Mendak",u_hi: "मेंढक",u_en: "Frogs",m: "الضَّفَادِعَ",t: "مینڈک",t_ro: "Mendak",t_hi: "मेंढक",t_en: "Frog"},
        {a: "رَجَعَ",r: "Raja'a",u: "لوٹا",u_ro: "Lauta",u_hi: "लौटा",u_en: "He returned",m: "رَجَعَ",t: "واپس",t_ro: "Waapas",t_hi: "वापस",t_en: "Returned"},
        {a: "أَلْوَاح",r: "Alwaah",u: "تختیاں",u_ro: "Takhtiyan",u_hi: "तख़्तियाँ",u_en: "Tablets",m: "وَكَتَبْنَا لَهُ فِي الْأَلْوَاحِ",t: "تختیاں",t_ro: "Takhtiyan",t_hi: "तख़्तियाँ",t_en: "Tablets"},
        {a: "لِي",r: "Lee",u: "میرے لیے",u_ro: "Mere liye",u_hi: "मेरे लिए",u_en: "For me",m: "رَبِّ اغْفِرْ لِي",t: "دو سجدوں کے بیچ",t_ro: "Do sajdon ke beech",t_hi: "दो सज्दों के बीच",t_en: "Between two prostrations"},
        {a: "كَلْب",r: "Kalb",u: "کتا",u_ro: "Kutta",u_hi: "कुत्ता",u_en: "Dog",m: "الْكَلْبَ",t: "کتا",t_ro: "Kutta",t_hi: "कुत्ता",t_en: "Dog"}
    ] },
    { day: 26, words: [
        {a: "كَذَّبُوا",r: "Kadhdhaboo",u: "انہوں نے جھٹلایا",u_ro: "Unhon ne jhutlaaya",u_hi: "उन्होंने झुठलाया",u_en: "They denied",m: "كَذَّبُوا",t: "جھوٹ",t_ro: "Jhoot",t_hi: "झूठ",t_en: "Denied"},
        {a: "حَيْثُ",r: "Haythu",u: "جہاں",u_ro: "Jahaan",u_hi: "जहाँ",u_en: "Where",m: "حَيْثُ",t: "جہاں",t_ro: "Jahaan",t_hi: "जहाँ",t_en: "Where"},
        {a: "عَفْو",r: "'Afw",u: "معافی، درگزر",u_ro: "Maafi, darguzar",u_hi: "माफ़ी, दरगुज़र",u_en: "Pardon, forgiveness",m: "وَالْعَافِينَ عَنِ النَّاسِ",t: "درگزر",t_ro: "Darguzar",t_hi: "दरगुज़र",t_en: "Pardoning"},
        {a: "جَاهِل",r: "Jaahil",u: "نادان",u_ro: "Naadaan",u_hi: "नादान",u_en: "Ignorant",m: "الْجَاهِلُ",t: "جاہل",t_ro: "Jaahil",t_hi: "जाहिल",t_en: "Ignorant"},
        {a: "اسْتَغَاثَ",r: "Istaghaatha",u: "فریاد کی، مدد مانگی",u_ro: "Faryaad ki, madad maangi",u_hi: "फ़र्याद की, मदद माँगी",u_en: "He cried for help",m: "إِذْ تَسْتَغِيثُونَ رَبَّكُمْ",t: "فریاد",t_ro: "Faryaad",t_hi: "फ़र्याद",t_en: "Cry for help"},
        {a: "اسْتَجَابَ",r: "Istajaaba",u: "قبول کیا",u_ro: "Qubool kiya",u_hi: "क़बूल किया",u_en: "He responded",m: "اسْتَجَابَ",t: "قبول",t_ro: "Qubool",t_hi: "क़बूल",t_en: "Responded"},
        {a: "عِشْرُون",r: "'Ishroon",u: "بیس",u_ro: "Bees",u_hi: "बीस",u_en: "Twenty",m: "عِشْرُونَ صَابِرُونَ",t: "بیس",t_ro: "Bees",t_hi: "बीस",t_en: "Twenty"},
        {a: "مِائَتَيْنِ",r: "Mi'atayn",u: "دو سو",u_ro: "Do sau",u_hi: "दो सौ",u_en: "Two hundred",m: "مِائَتَيْنِ",t: "دو سو",t_ro: "Do sau",t_hi: "दो सौ",t_en: "Two hundred"},
        {a: "غَنِمَ",r: "Ghanima",u: "مالِ غنیمت حاصل کیا",u_ro: "Maal-e-ghaneemat haasil kiya",u_hi: "माल-ए-ग़नीमत हासिल किया",u_en: "He gained spoils",m: "فَكُلُوا مِمَّا غَنِمْتُم",t: "غنیمت حاصل کرنا",t_ro: "Ghaneemat haasil karna",t_hi: "ग़नीमत हासिल करना",t_en: "To gain spoils"},
        {a: "أَرْبَعَة",r: "Arba'ah",u: "چار",u_ro: "Chaar",u_hi: "चार",u_en: "Four",m: "أَرْبَعَةَ أَشْهُرٍ",t: "چار",t_ro: "Chaar",t_hi: "चार",t_en: "Four"}
    ] },
    { day: 27, words: [
        {a: "حُنَيْن",r: "Hunayn",u: "حنین (جنگ کا مقام)",u_ro: "Hunayn (jang ka maqaam)",u_hi: "हुनैन (जंग का मक़ाम)",u_en: "Hunayn (valley)",m: "وَيَوْمَ حُنَيْنٍ",t: "حنین",t_ro: "Hunayn",t_hi: "हुनैन",t_en: "Hunayn"},
        {a: "مُشْرِك",r: "Mushrik",u: "مشرک",u_ro: "Mushrik",u_hi: "मुशरिक",u_en: "Polytheist",m: "الْمُشْرِكُ",t: "مشرک",t_ro: "Mushrik",t_hi: "मुशरिक",t_en: "Polytheist"},
        {a: "عُزَيْر",r: "'Uzayr",u: "عزیر",u_ro: "Uzayr",u_hi: "उज़ैर",u_en: "Uzayr (Ezra)",m: "وَقَالَتِ الْيَهُودُ عُزَيْرٌ ابْنُ اللَّهِ",t: "عزیر",t_ro: "Uzayr",t_hi: "उज़ैर",t_en: "Uzayr"},
        {a: "نَصَرَ",r: "Nasara",u: "مدد کی",u_ro: "Madad ki",u_hi: "मदद की",u_en: "He helped",m: "نَصَرَ",t: "مدد",t_ro: "Madad",t_hi: "मदद",t_en: "Helped"},
        {a: "هُمَا",r: "Humaa",u: "وہ دونوں",u_ro: "Woh dono",u_hi: "वे दोनों",u_en: "They two",m: "هُمَا",t: "وہ دونوں",t_ro: "Woh dono",t_hi: "वे दोनों",t_en: "Both of them"},
        {a: "كَرِهَ",r: "Kariha",u: "ناپسند کیا",u_ro: "Napasand kiya",u_hi: "नापसंद किया",u_en: "He disliked",m: "كَرِهَ",t: "ناپسند",t_ro: "Napasand",t_hi: "नापसंद",t_en: "Disliked"},
        {a: "حَلَفَ",r: "Halafa",u: "قسم کھائی",u_ro: "Qasam khaai",u_hi: "क़सम खाई",u_en: "He swore",m: "وَيَحْلِفُونَ بِاللَّهِ",t: "قسم",t_ro: "Qasam",t_hi: "क़सम",t_en: "Oath"},
        {a: "قَبْر",r: "Qabr",u: "قبر",u_ro: "Qabr",u_hi: "क़ब्र",u_en: "Grave",m: "الْقَبْرُ",t: "قبر",t_ro: "Qabr",t_hi: "क़ब्र",t_en: "Grave"},
        {a: "صَدَقَة",r: "Sadaqah",u: "صدقہ",u_ro: "Sadqa",u_hi: "सदक़ा",u_en: "Charity",m: "الصَّدَقَةُ",t: "صدقہ",t_ro: "Sadqa",t_hi: "सदक़ा",t_en: "Charity"},
        {a: "جُرُف",r: "Juruf",u: "کنارہ، گڑھا",u_ro: "Kinaara, gaddha",u_hi: "किनारा, गड्ढा",u_en: "Cliff, bank",m: "عَلَىٰ شَفَا جُرُفٍ هَارٍ",t: "کنارہ",t_ro: "Kinaara",t_hi: "किनारा",t_en: "Cliff"}
    ] },
    { day: 28, words: [
        {a: "اسْتِغْفَار",r: "Istighfaar",u: "بخشش مانگنا",u_ro: "Bakhshish maangna",u_hi: "बख़्शिश माँगना",u_en: "Seeking forgiveness",m: "اسْتِغْفَار",t: "بخشش مانگنا",t_ro: "Bakhshish maangna",t_hi: "बख़्शिश माँगना",t_en: "Seeking forgiveness"},
        {a: "بَغَى",r: "Baghaa",u: "سرکشی کی، حد سے بڑھا",u_ro: "Sarkashi ki, had se badha",u_hi: "सरकशी की, हद से बढ़ा",u_en: "He transgressed",m: "يَبْغُونَ فِي الْأَرْضِ",t: "سرکشی",t_ro: "Sarkashi",t_hi: "सरकशी",t_en: "Transgression"},
        {a: "شِفَاء",r: "Shifaa'",u: "شفا",u_ro: "Shifa",u_hi: "शिफ़ा",u_en: "Healing",m: "شِفَاءٌ لِّمَا فِي الصُّدُورِ",t: "شفا",t_ro: "Shifa",t_hi: "शिफ़ा",t_en: "Cure"},
        {a: "دَابَّة",r: "Daabbah",u: "جاندار",u_ro: "Jaandaar",u_hi: "जानदार",u_en: "Creature, moving being",m: "الدَّابَّةَ",t: "جانور",t_ro: "Jaanwar",t_hi: "जानवर",t_en: "Animal"},
        {a: "جَادَلَ",r: "Jaadala",u: "جھگڑا کیا، بحث کی",u_ro: "Jhagda kiya, behas ki",u_hi: "झगड़ा किया, बहस की",u_en: "He argued",m: "وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ",t: "بحث",t_ro: "Behas",t_hi: "बहस",t_en: "Argument"},
        {a: "نُصْح",r: "Nush",u: "خیر خواہی",u_ro: "Khair-khwaahi",u_hi: "ख़ैरख़्वाही",u_en: "Sincere advice",m: "وَلَا يَنْفَعُكُمْ نُصْحِي",t: "خیر خواہی",t_ro: "Khair-khwaahi",t_hi: "ख़ैरख़्वाही",t_en: "Sincere counsel"},
        {a: "هُود",r: "Hood",u: "ہود علیہ السلام",u_ro: "Hood alaihis-salaam",u_hi: "हूद अलैहिस्सलाम",u_en: "Hud",m: "هُودٌ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "عَجُوز",r: "'Ajooz",u: "بڑھیا، بوڑھی عورت",u_ro: "Budhiya, boorhi aurat",u_hi: "बुढ़िया, बूढ़ी औरत",u_en: "Old woman",m: "قَالَتْ يَا وَيْلَتَىٰ أَأَلِدُ وَأَنَا عَجُوزٌ",t: "بڑھیا",t_ro: "Budhiya",t_hi: "बुढ़िया",t_en: "Old woman"},
        {a: "بَعْل",r: "Ba'l",u: "شوہر",u_ro: "Shauhar",u_hi: "शौहर",u_en: "Husband",m: "وَهَذَا بَعْلِي شَيْخًا",t: "شوہر",t_ro: "Shauhar",t_hi: "शौहर",t_en: "Husband"},
        {a: "شَيْخ",r: "Shaykh",u: "بزرگ، بوڑھا",u_ro: "Buzurg, boorha",u_hi: "बुज़ुर्ग, बूढ़ा",u_en: "Elder, old man",m: "وَهَذَا بَعْلِي شَيْخًا",t: "بزرگ",t_ro: "Buzurg",t_hi: "बुज़ुर्ग",t_en: "Elder"}
    ] },
    { day: 29, words: [
        {a: "بَرَكَات",r: "Barakaat",u: "برکتیں",u_ro: "Barkatein",u_hi: "बरकतें",u_en: "Blessings",m: "بَرَكَات",t: "برکت",t_ro: "Barkat",t_hi: "बरकत",t_en: "Blessing"},
        {a: "صُبْح",r: "Subh",u: "صبح",u_ro: "Subah",u_hi: "सुबह",u_en: "Morning",m: "وَالصُّبْحِ إِذَا تَنَفَّسَ",t: "صبح",t_ro: "Subah",t_hi: "सुबह",t_en: "Morning"},
        {a: "مِكْيَال",r: "Mikyaal",u: "ناپنے کا پیمانہ",u_ro: "Naapne ka paimaana",u_hi: "नापने का पैमाना",u_en: "Measure",m: "وَلَا تَنقُصُوا الْمِكْيَالَ وَالْمِيزَانَ",t: "پیمانہ",t_ro: "Paimana",t_hi: "पैमाना",t_en: "Measure"},
        {a: "بَعِيد",r: "Ba'eed",u: "دور",u_ro: "Door",u_hi: "दूर",u_en: "Far",m: "وَمَا قَوْمُ لُوطٍ مِنْكُمْ بِبَعِيدٍ",t: "دور",t_ro: "Door",t_hi: "दूर",t_en: "Far"},
        {a: "اصْبِرْ",r: "Isbir",u: "صبر کر",u_ro: "Sabr kar",u_hi: "सब्र कर",u_en: "Be patient!",m: "اصْبِرْ",t: "صبر",t_ro: "Sabr",t_hi: "सब्र",t_en: "Be patient"},
        {a: "رَحِمَ",r: "Rahima",u: "رحم کیا",u_ro: "Rahm kiya",u_hi: "रहम किया",u_en: "He had mercy",m: "رَحِمَ",t: "رحم",t_ro: "Rahm",t_hi: "रहम",t_en: "Had mercy"},
        {a: "عَقَلَ",r: "'Aqala",u: "عقل سے سمجھا",u_ro: "Aql se samjha",u_hi: "अक़्ल से समझा",u_en: "He understood",m: "أَفَلَا يَعْقِلُونَ",t: "سمجھنا",t_ro: "Samajhna",t_hi: "समझना",t_en: "To understand"},
        {a: "يُوسُف",r: "Yoosuf",u: "یوسف علیہ السلام",u_ro: "Yusuf alaihis-salaam",u_hi: "यूसुफ़ अलैहिस्सलाम",u_en: "Yusuf (Joseph)",m: "يُوسُفُ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "كَوْكَب",r: "Kawkab",u: "ستارہ، سیارہ",u_ro: "Sitaara, sayyaarah",u_hi: "सितारा, सय्यारा",u_en: "Star, planet",m: "أَحَدَ عَشَرَ كَوْكَبًا",t: "ستارہ",t_ro: "Sitaara",t_hi: "सितारा",t_en: "Star"},
        {a: "أَكَلَ",r: "Akala",u: "کھایا",u_ro: "Khaaya",u_hi: "खाया",u_en: "He ate",m: "أَكَلَ",t: "کھانا",t_ro: "Khaana",t_hi: "खाना",t_en: "Ate"}
    ] },
    { day: 30, words: [
        {a: "ذِئْب",r: "Dhi'b",u: "بھیڑیا",u_ro: "Bhediya",u_hi: "भेड़िया",u_en: "Wolf",m: "الذِّئْبَ",t: "بھیڑیا",t_ro: "Bhediya",t_hi: "भेड़िया",t_en: "Wolf"},
        {a: "دَرَاهِم",r: "Daraahim",u: "درہم (جمع)",u_ro: "Dirham (jama)",u_hi: "दिरहम (जमा)",u_en: "Dirhams",m: "دَرَاهِم",t: "درہم",t_ro: "Dirham",t_hi: "दिरहम",t_en: "Dirham"},
        {a: "بَلَغَ",r: "Balagha",u: "پہنچا",u_ro: "Pahuncha",u_hi: "पहुँचा",u_en: "He reached",m: "بَلَغَ",t: "پہنچنا",t_ro: "Pahunchna",t_hi: "पहुँचना",t_en: "Reached"},
        {a: "بَاب",r: "Baab",u: "دروازہ",u_ro: "Darwaaza",u_hi: "दरवाज़ा",u_en: "Door",m: "الْبَابَ",t: "دروازہ",t_ro: "Darwaaza",t_hi: "दरवाज़ा",t_en: "Door"},
        {a: "دُبُر",r: "Dubur",u: "پیچھے، پشت",u_ro: "Peechhe, pusht",u_hi: "पीछे, पुश्त",u_en: "Behind, back",m: "مِن دُبُرٍ",t: "پیچھے",t_ro: "Peechhe",t_hi: "पीछे",t_en: "Behind"},
        {a: "لَدَى",r: "Ladaa",u: "پاس",u_ro: "Paas",u_hi: "पास",u_en: "With, near",m: "لَدَى",t: "حضور",t_ro: "Huzoor",t_hi: "हुज़ूर",t_en: "In presence of"},
        {a: "خُبْز",r: "Khubz",u: "روٹی",u_ro: "Roti",u_hi: "रोटी",u_en: "Bread",m: "أَحْمِلُ فَوْقَ رَأْسِي خُبْزًا",t: "روٹی",t_ro: "Roti",t_hi: "रोटी",t_en: "Bread"},
        {a: "أَمَرَ",r: "Amara",u: "حکم دیا",u_ro: "Hukm diya",u_hi: "हुक्म दिया",u_en: "He commanded",m: "أَمَرَ",t: "حکم",t_ro: "Hukm",t_hi: "हुक्म",t_en: "Commanded"},
        {a: "بِضْع",r: "Biḍ'",u: "چند (3 سے 9 تک)",u_ro: "Chand (3 se 9 tak)",u_hi: "चंद (3 से 9 तक)",u_en: "A few (3–9)",m: "فِي بِضْعِ سِنِينَ",t: "چند",t_ro: "Chand",t_hi: "चंद",t_en: "A few"},
        {a: "أَنْكَرَ",r: "Ankara",u: "انکار کیا",u_ro: "Inkaar kiya",u_hi: "इनकार किया",u_en: "He denied",m: "فَأَنكَرُوا بِهَا",t: "انکار",t_ro: "Inkaar",t_hi: "इनकार",t_en: "To deny"}
    ] },
    { day: 31, words: [
        {a: "قَرْيَة",r: "Qaryah",u: "بستی",u_ro: "Basti",u_hi: "बस्ती",u_en: "Town, village",m: "الْقَرْيَةَ",t: "بستی",t_ro: "Basti",t_hi: "बस्ती",t_en: "Settlement"},
        {a: "مِصْر",r: "Misr",u: "مصر",u_ro: "Misr",u_hi: "मिस्र",u_en: "Egypt",m: "مِصْرَ",t: "ملک",t_ro: "Mulk",t_hi: "मुल्क",t_en: "Country"},
        {a: "سَبِيل",r: "Sabeel",u: "راستہ",u_ro: "Raasta",u_hi: "रास्ता",u_en: "Way, path",m: "السَّبِيلَ",t: "راستہ",t_ro: "Raasta",t_hi: "रास्ता",t_en: "Path"},
        {a: "وَسُبْحَانَ",r: "Wa Subhaana",u: "اور پاکی ہے",u_ro: "Aur paaki hai",u_hi: "और पाकी है",u_en: "And glory be to",m: "سُبْحَانَ اللَّهِ",t: "تسبیح",t_ro: "Tasbeeh",t_hi: "तस्बीह",t_en: "Glorification"},
        {a: "كَبِير",r: "Kabeer",u: "بڑا",u_ro: "Bada",u_hi: "बड़ा",u_en: "Great",m: "الْكَبِيرُ الْمُتَعَالِ",t: "بزرگ",t_ro: "Buzurg",t_hi: "बुज़ुर्ग",t_en: "Elder, mighty"},
        {a: "الْوَالِي",r: "Al-Waalee",u: "حکمرانی کرنے والا",u_ro: "Hukmraani karne wala",u_hi: "हुक्मरानी करने वाला",u_en: "The Governor",m: "وَمَا لَهُمْ مِنْ دُونِهِ مِنْ وَالٍ",t: "حاکم",t_ro: "Haakim",t_hi: "हाकिम",t_en: "Governor"},
        {a: "بَرْق",r: "Barq",u: "بجلی",u_ro: "Bijli",u_hi: "बिजली",u_en: "Lightning",m: "الْبَرْقُ",t: "بجلی",t_ro: "Bijli",t_hi: "बिजली",t_en: "Lightning"},
        {a: "سَحَاب",r: "Sahaab",u: "بادل",u_ro: "Baadal",u_hi: "बादल",u_en: "Cloud",m: "السَّحَابُ",t: "بادل",t_ro: "Baadal",t_hi: "बादल",t_en: "Cloud"},
        {a: "رَعْد",r: "Ra'd",u: "گرج",u_ro: "Garaj",u_hi: "गरज",u_en: "Thunder",m: "الرَّعْدُ",t: "گرج",t_ro: "Garaj",t_hi: "गरज",t_en: "Thunder"},
        {a: "آمَنُوا",r: "Aamanoo",u: "ایمان لائے",u_ro: "Imaan laaye",u_hi: "ईमान लाए",u_en: "They believed",m: "آمَنُوا",t: "ایمان",t_ro: "Imaan",t_hi: "ईमान",t_en: "Believed"}
    ] },
    { day: 32, words: [
        {a: "أَلَا",r: "Alaa",u: "خبردار",u_ro: "Khabardaar",u_hi: "ख़बरदार",u_en: "Beware, indeed",m: "أَلَا",t: "سنو",t_ro: "Suno",t_hi: "सुनो",t_en: "Listen"},
        {a: "وَهَبَ",r: "Wahaba",u: "عطا کیا، بخشا",u_ro: "Ata kiya, bakhsha",u_hi: "अता किया, बख़्शा",u_en: "He granted",m: "وَوَهَبْنَا لَهُ إِسْحَاقَ",t: "عطا کرنا",t_ro: "Ata karna",t_hi: "अता करना",t_en: "To grant"},
        {a: "دُعَاء",r: "Du'aa'",u: "دعا",u_ro: "Dua",u_hi: "दुआ",u_en: "Supplication",m: "الدُّعَاءُ",t: "دعا",t_ro: "Dua",t_hi: "दुआ",t_en: "Dua"},
        {a: "نَحْنُ",r: "Nahnu",u: "ہم",u_ro: "Hum",u_hi: "हम",u_en: "We",m: "نَحْنُ",t: "ہم",t_ro: "Hum",t_hi: "हम",t_en: "We"},
        {a: "ذِكْر",r: "Dhikr",u: "ذکر",u_ro: "Zikr",u_hi: "ज़िक्र",u_en: "Remembrance",m: "الذِّكْرُ",t: "یاد",t_ro: "Yaad",t_hi: "याद",t_en: "Remembrance"},
        {a: "حَفِظَ",r: "Hafiza",u: "حفظ کیا، بچایا",u_ro: "Hifz kiya, bachaaya",u_hi: "हिफ़्ज़ किया, बचाया",u_en: "He preserved",m: "وَإِنَّا لَهُ لَحَافِظُونَ",t: "حفظ کرنا",t_ro: "Hifz karna",t_hi: "हिफ़्ज़ करना",t_en: "To preserve"},
        {a: "حَمَأ",r: "Hama'",u: "کالا کیچڑ",u_ro: "Kaala keechad",u_hi: "काला कीचड़",u_en: "Black mud",m: "مِّن حَمَإٍ مَّسْنُونٍ",t: "کیچڑ",t_ro: "Keechad",t_hi: "कीचड़",t_en: "Mud"},
        {a: "مَسْنُون",r: "Masnoon",u: "بدبو دار، سڑی ہوئی",u_ro: "Badboo-daar, sadi hui",u_hi: "बदबूदार, सड़ी हुई",u_en: "Altered, moulded",m: "مِّن حَمَإٍ مَّسْنُونٍ",t: "سڑی مٹی",t_ro: "Sadi mitti",t_hi: "सड़ी मिट्टी",t_en: "Altered"},
        {a: "سَرِير",r: "Sareer",u: "تخت، بستر",u_ro: "Takht, bistar",u_hi: "तख़्त, बिस्तर",u_en: "Throne, couch",m: "عَلَى سُرُرٍ مُّتَقَابِلِينَ",t: "بستر",t_ro: "Bistar",t_hi: "बिस्तर",t_en: "Couch"},
        {a: "أَتَى",r: "Ataa",u: "آیا",u_ro: "Aaya",u_hi: "आया",u_en: "He came",m: "أَتَى",t: "آنا",t_ro: "Aana",t_hi: "आना",t_en: "Came"}
    ] },
    { day: 33, words: [
        {a: "خَصِيم",r: "Khaseem",u: "جھگڑنے والا، حریف",u_ro: "Jhagadne wala, hareef",u_hi: "झगड़ने वाला, हरीफ़",u_en: "Opponent, adversary",m: "فَإِذَا هُوَ خَصِيمٌ مُبِينٌ",t: "حریف",t_ro: "Hareef",t_hi: "हरीफ़",t_en: "Adversary"},
        {a: "خَيْل",r: "Khayl",u: "گھوڑے",u_ro: "Ghode",u_hi: "घोड़े",u_en: "Horses",m: "الْخَيْلَ",t: "گھوڑا",t_ro: "Ghoda",t_hi: "घोड़ा",t_en: "Horse"},
        {a: "شَرَاب",r: "Sharaab",u: "مشروب",u_ro: "Mashroob",u_hi: "मशरूब",u_en: "Drink",m: "لَكُمْ مِنْهُ شَرَابٌ",t: "پینے کی چیز",t_ro: "Peene ki cheez",t_hi: "पीने की चीज़",t_en: "Beverage"},
        {a: "مَاذَا",r: "Maadhaa",u: "کیا",u_ro: "Kya",u_hi: "क्या",u_en: "What",m: "مَاذَا",t: "کیا",t_ro: "Kya",t_hi: "क्या",t_en: "What"},
        {a: "أَنْزَلَ",r: "Anzala",u: "اتارا",u_ro: "Utaara",u_hi: "उतारा",u_en: "He sent down",m: "أَنْزَلَ",t: "نازل کرنا",t_ro: "Naazil karna",t_hi: "नाज़िल करना",t_en: "Sent down"},
        {a: "ادْخُلُوا",r: "Udkhuloo",u: "داخل ہو جاؤ",u_ro: "Daakhil ho jaao",u_hi: "दाख़िल हो जाओ",u_en: "Enter!",m: "ادْخُلُوا",t: "داخل ہونا",t_ro: "Daakhil hona",t_hi: "दाख़िल होना",t_en: "Enter"},
        {a: "حَاقَ",r: "Haaqa",u: "گھیر لیا، آ پڑا",u_ro: "Gher liya, aa pada",u_hi: "घेर लिया, आ पड़ा",u_en: "It encompassed",m: "وَحَاقَ بِهِم مَّا كَانُوا",t: "گھیر لینا",t_ro: "Gher lena",t_hi: "घेर लेना",t_en: "Encompassed"},
        {a: "اثْنَان",r: "Ithnaan",u: "دو",u_ro: "Do",u_hi: "दो",u_en: "Two",m: "إِلَٰهَيْنِ اثْنَيْنِ",t: "دو",t_ro: "Do",t_hi: "दो",t_en: "Two"},
        {a: "لَبَن",r: "Laban",u: "دودھ",u_ro: "Doodh",u_hi: "दूध",u_en: "Milk",m: "اللَّبَنَ",t: "دودھ",t_ro: "Doodh",t_hi: "दूध",t_en: "Milk"},
        {a: "نَحْل",r: "Nahl",u: "شہد کی مکھی",u_ro: "Shahad ki makkhi",u_hi: "शहद की मक्खी",u_en: "Bee",m: "النَّحْلَ",t: "مکھی",t_ro: "Makkhi",t_hi: "मक्खी",t_en: "Bee"}
    ] },
    { day: 34, words: [
        {a: "بَطْن",r: "Batn",u: "پیٹ",u_ro: "Pet",u_hi: "पेट",u_en: "Belly",m: "الْبَطْنُ",t: "پیٹ",t_ro: "Pet",t_hi: "पेट",t_en: "Belly"},
        {a: "عَدْل",r: "'Adl",u: "انصاف",u_ro: "Insaaf",u_hi: "इंसाफ़",u_en: "Justice",m: "يَأْمُرُ بِالْعَدْلِ",t: "انصاف",t_ro: "Insaaf",t_hi: "इंसाफ़",t_en: "Justice"},
        {a: "كَذِب",r: "Kadhib",u: "جھوٹ",u_ro: "Jhoot",u_hi: "झूठ",u_en: "Falsehood",m: "إِنَّ اللَّهَ لَا يَهْدِي مَنْ هُوَ كَاذِبٌ كَفَّارٌ",t: "جھوٹ",t_ro: "Jhoot",t_hi: "झूठ",t_en: "Lie"},
        {a: "حَرَام",r: "Haraam",u: "حرام",u_ro: "Haraam",u_hi: "हराम",u_en: "Forbidden",m: "الْحَرَامُ",t: "حرام",t_ro: "Haraam",t_hi: "हराम",t_en: "Forbidden"},
        {a: "مَسْجِد",r: "Masjid",u: "مسجد",u_ro: "Masjid",u_hi: "मस्जिद",u_en: "Mosque",m: "الْمَسْجِدَ",t: "مسجد",t_ro: "Masjid",t_hi: "मस्जिद",t_en: "Mosque"},
        {a: "حَوْلَ",r: "Hawla",u: "ارد گرد",u_ro: "Ird-gird",u_hi: "इर्द-गिर्द",u_en: "Around",m: "حَوْلَ",t: "آس پاس",t_ro: "Aas paas",t_hi: "आस-पास",t_en: "Surroundings"},
        {a: "كَفَى",r: "Kafaa",u: "کافی ہوا",u_ro: "Kaafi hua",u_hi: "काफ़ी हुआ",u_en: "He sufficed, was enough",m: "كَفَى بِاللَّهِ",t: "کافی ہونا",t_ro: "Kaafi hona",t_hi: "काफ़ी होना",t_en: "To suffice"},
        {a: "حَسِيب",r: "Haseeb",u: "حساب لینے والا",u_ro: "Hisaab lene wala",u_hi: "हिसाब लेने वाला",u_en: "Reckoner",m: "حَسِيبًا",t: "حساب والا",t_ro: "Hisaab wala",t_hi: "हिसाब वाला",t_en: "Takes account"},
        {a: "كَمْ",r: "Kam",u: "کتنے",u_ro: "Kitne",u_hi: "कितने",u_en: "How many",m: "كَمْ",t: "کتنے",t_ro: "Kitne",t_hi: "कितने",t_en: "How many"},
        {a: "جَنَاح",r: "Janaah",u: "پر، بازو",u_ro: "Par, baazu",u_hi: "पर, बाज़ू",u_en: "Wing",m: "وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ",t: "پر",t_ro: "Par",t_hi: "पर",t_en: "Wing"}
    ] },
    { day: 35, words: [
        {a: "عُنُق",r: "Unuq",u: "گردن",u_ro: "Gardan",u_hi: "गर्दन",u_en: "Neck",m: "الْعُنُقُ",t: "گردن",t_ro: "Gardan",t_hi: "गर्दन",t_en: "Neck"},
        {a: "زَنَى",r: "Zanaa",u: "زنا کیا",u_ro: "Zina kiya",u_hi: "ज़िना किया",u_en: "He committed fornication",m: "وَلَا تَقْرَبُوا الزِّنَىٰ",t: "زنا",t_ro: "Zina",t_hi: "ज़िना",t_en: "Adultery"},
        {a: "تَسْبِيح",r: "Tasbeeh",u: "تسبیح",u_ro: "Tasbeeh",u_hi: "तस्बीह",u_en: "Glorification",m: "التَّسْبِيحُ",t: "تسبیح",t_ro: "Tasbeeh",t_hi: "तस्बीह",t_en: "Tasbih"},
        {a: "حَدِيد",r: "Hadeed",u: "لوہا",u_ro: "Loha",u_hi: "लोहा",u_en: "Iron",m: "الْحَدِيدَ",t: "لوہا",t_ro: "Loha",t_hi: "लोहा",t_en: "Iron"},
        {a: "رَجَاء",r: "Rajaa'",u: "امید",u_ro: "Umeed",u_hi: "उम्मीद",u_en: "Hope",m: "وَيَرْجُونَ رَحْمَتَهُ",t: "امید",t_ro: "Umeed",t_hi: "उम्मीद",t_en: "Hope"},
        {a: "تَهَجُّد",r: "Tahajjud",u: "رات کی نماز",u_ro: "Raat ki namaaz",u_hi: "रात की नमाज़",u_en: "Night prayer",m: "وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ",t: "رات کی نماز",t_ro: "Raat ki namaaz",t_hi: "रात की नमाज़",t_en: "Night prayer"},
        {a: "حَقّ",r: "Haqq",u: "سچ",u_ro: "Sach",u_hi: "सच",u_en: "Truth",m: "الْحَقُّ",t: "حق",t_ro: "Haq",t_hi: "हक़",t_en: "Truth"},
        {a: "بَاطِل",r: "Baatil",u: "باطل، جھوٹ",u_ro: "Baatil, jhoot",u_hi: "बातिल, झूठ",u_en: "Falsehood",m: "وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا",t: "باطل",t_ro: "Baatil",t_hi: "बातिल",t_en: "Falsehood"},
        {a: "كَانَ",r: "Kaana",u: "تھا",u_ro: "Tha",u_hi: "था",u_en: "He was",m: "كَانَ",t: "تھا",t_ro: "Tha",t_hi: "था",t_en: "Was"},
        {a: "رُوح",r: "Rooh",u: "روح",u_ro: "Rooh",u_hi: "रूह",u_en: "Soul, spirit",m: "الرُّوحُ",t: "روح",t_ro: "Rooh",t_hi: "रूह",t_en: "Spirit"}
    ] },
    { day: 36, words: [
        {a: "أَمْر",r: "Amr",u: "حکم، معاملہ",u_ro: "Hukm, mu'aamla",u_hi: "हुक्म, मामला",u_en: "Command, matter",m: "أَلَا لَهُ الْخَلْقُ وَالْأَمْرُ",t: "حکم",t_ro: "Hukm",t_hi: "हुक्म",t_en: "Command"},
        {a: "يَنْبُوع",r: "Yanboo'",u: "چشمہ",u_ro: "Chashma",u_hi: "चश्मा",u_en: "Spring",m: "حَتَّىٰ تَفْجُرَ لَنَا مِنَ الْأَرْضِ يَنبُوعًا",t: "چشمہ",t_ro: "Chashma",t_hi: "चश्मा",t_en: "Spring"},
        {a: "خَزَائِن",r: "Khazaa'in",u: "خزانے",u_ro: "Khazaane",u_hi: "ख़ज़ाने",u_en: "Treasures",m: "وَإِن مِّن شَيْءٍ إِلَّا عِندَنَا خَزَائِنُهُ",t: "خزانے",t_ro: "Khazaane",t_hi: "ख़ज़ाने",t_en: "Treasures"},
        {a: "رَحْمَة",r: "Rahmah",u: "رحمت",u_ro: "Rahmat",u_hi: "रहमत",u_en: "Mercy",m: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",t: "رحمت",t_ro: "Rahmat",t_hi: "रहमत",t_en: "Mercy"},
        {a: "إِنْفَاق",r: "Infaaq",u: "خرچ کرنا",u_ro: "Kharch karna",u_hi: "ख़र्च करना",u_en: "Spending",m: "الْإِنْفَاقُ",t: "خرچ",t_ro: "Kharch",t_hi: "ख़र्च",t_en: "Spending"},
        {a: "تِسْعَة",r: "Ti'sah",u: "نو",u_ro: "Nau",u_hi: "नौ",u_en: "Nine",m: "تِسْعَ آيَاتٍ",t: "نو",t_ro: "Nau",t_hi: "नौ",t_en: "Nine"},
        {a: "خُشُوع",r: "Khushoo'",u: "عاجزی، جھکنا",u_ro: "Aajzi, jhukna",u_hi: "आजिज़ी, झुकना",u_en: "Humility",m: "وَيَزِيدُهُمْ خُشُوعًا",t: "عاجزی",t_ro: "Aajzi",t_hi: "आजिज़ी",t_en: "Humility"},
        {a: "تَكْبِير",r: "Takbeer",u: "اللہ اکبر کہنا",u_ro: "Allahu Akbar kehna",u_hi: "अल्लाहु अकबर कहना",u_en: "Magnifying Allah",m: "وَكَبِّرْهُ تَكْبِيرًا",t: "بڑائی بیان کرنا",t_ro: "Baraai bayaan karna",t_hi: "बड़ाई बयान करना",t_en: "Declaring greatness"},
        {a: "أَبَدًا",r: "Abadan",u: "ہمیشہ",u_ro: "Hamesha",u_hi: "हमेशा",u_en: "Ever, never",m: "أَبَدًا",t: "کبھی",t_ro: "Kabhi",t_hi: "कभी",t_en: "Ever"},
        {a: "كَهْف",r: "Kahf",u: "غار",u_ro: "Ghaar",u_hi: "ग़ार",u_en: "Cave",m: "أَصْحَابُ الْكَهْفِ وَالرَّقِيمِ",t: "غار",t_ro: "Ghaar",t_hi: "ग़ार",t_en: "Cave"}
    ] },
    { day: 37, words: [
        {a: "رَقِيم",r: "Raqeem",u: "لکھا ہوا کتبہ",u_ro: "Likha hua katba",u_hi: "लिखा हुआ कतबा",u_en: "Inscription",m: "أَصْحَابُ الْكَهْفِ وَالرَّقِيمِ",t: "کتبہ",t_ro: "Katba",t_hi: "कतबा",t_en: "Inscription"},
        {a: "أَوَى",r: "Awaa",u: "پناہ دی، جگہ دی",u_ro: "Panah di, jagah di",u_hi: "पनाह दी, जगह दी",u_en: "He sheltered",m: "أَوَىٰ إِلَى الْكَهْفِ",t: "پناہ دینا",t_ro: "Panah dena",t_hi: "पनाह देना",t_en: "To shelter"},
        {a: "يَمِين",r: "Yameen",u: "دایاں، دائیں طرف",u_ro: "Daayaan, daayen taraf",u_hi: "दायाँ, दाएँ तरफ़",u_en: "Right",m: "أَصْحَابُ الْيَمِينِ",t: "دایاں",t_ro: "Daayaan",t_hi: "दायाँ",t_en: "Right"},
        {a: "شِمَال",r: "Shimaal",u: "بایاں، بائیں طرف",u_ro: "Baayaan, baayen taraf",u_hi: "बायाँ, बाएँ तरफ़",u_en: "Left",m: "أَصْحَابُ الشِّمَالِ",t: "بایاں",t_ro: "Baayaan",t_hi: "बायाँ",t_en: "Left"},
        {a: "رُقُود",r: "Ruqood",u: "سوئے ہوئے",u_ro: "Soye hue",u_hi: "सोए हुए",u_en: "Sleeping ones",m: "رُقُود",t: "سوئے ہوئے",t_ro: "Soye hue",t_hi: "सोए हुए",t_en: "Sleeping ones"},
        {a: "لَبِثَ",r: "Labitha",u: "ٹھہرا، رکا",u_ro: "Thehra, ruka",u_hi: "ठहरा, रुका",u_en: "He remained",m: "قَالُوا لَبِثْنَا يَوْمًا",t: "ٹھہرنا",t_ro: "Thehrna",t_hi: "ठहरना",t_en: "To remain"},
        {a: "خَمْسَة",r: "Khamsah",u: "پانچ",u_ro: "Paanch",u_hi: "पाँच",u_en: "Five",m: "خَمْسَةٌ سَادِسُهُمْ كَلْبُهُمْ",t: "پانچ",t_ro: "Paanch",t_hi: "पाँच",t_en: "Five"},
        {a: "سَبْعَة",r: "Sab'ah",u: "سات",u_ro: "Saat",u_hi: "सात",u_en: "Seven",m: "سَبْعَةٌ وَثَامِنُهُمْ كَلْبُهُمْ",t: "سات",t_ro: "Saat",t_hi: "सात",t_en: "Seven"},
        {a: "سُرَادِق",r: "Suraadiq",u: "خیمہ، شامیانہ",u_ro: "Khaima, shaamiyaana",u_hi: "ख़ैमा, शामियाना",u_en: "Tent, canopy",m: "أَحَاطَ بِهِمْ سُرَادِقُهَا",t: "خیمہ",t_ro: "Khaima",t_hi: "ख़ैमा",t_en: "Canopy"},
        {a: "لَبِسَ",r: "Labisa",u: "پہنا",u_ro: "Pehna",u_hi: "पहना",u_en: "He wore",m: "وَيَلْبَسُونَ ثِيَابًا خُضْرًا",t: "پہننا",t_ro: "Pehna",t_hi: "पहना",t_en: "To wear"}
    ] },
    { day: 38, words: [
        {a: "دَخَلَ",r: "Dakhala",u: "داخل ہوا",u_ro: "Daakhil hua",u_hi: "दाख़िल हुआ",u_en: "He entered",m: "دَخَلَ",t: "داخل ہونا",t_ro: "Daakhil hona",t_hi: "दाख़िल होना",t_en: "Entered"},
        {a: "قُوَّةَ",r: "Quwwata",u: "طاقت",u_ro: "Taaqat",u_hi: "ताक़त",u_en: "Power, strength",m: "لَا قُوَّةَ إِلَّا بِاللَّهِ",t: "طاقت نہیں مگر اللہ سے",t_ro: "Taaqat nahin magar Allah se",t_hi: "ताक़त नहीं मगर अल्लाह से",t_en: "There is no power except with Allah"},
        {a: "طَلَبًا",r: "Talaban",u: "تلاش، طلب",u_ro: "Talaash, talab",u_hi: "तलाश, तलब",u_en: "Search, seeking",m: "طَلَبًا",t: "مانگنا",t_ro: "Maangna",t_hi: "माँगना",t_en: "Sought"},
        {a: "زِينَة",r: "Zeenah",u: "سجاوٹ، آرائش",u_ro: "Sajaawat, aaraaish",u_hi: "सजावट, आराइश",u_en: "Adornment",m: "زِينَةَ اللَّهِ",t: "سجاوٹ",t_ro: "Sajaawat",t_hi: "सजावट",t_en: "Adornment"},
        {a: "فَسَقَ",r: "Fasaqa",u: "نافرمانی کی",u_ro: "Nafarmaani ki",u_hi: "नाफ़रमानी की",u_en: "He deviated",m: "فَفَسَقَ عَنْ أَمْرِ رَبِّهِ",t: "نافرمانی",t_ro: "Nafarmaani",t_hi: "नाफ़रमानी",t_en: "Deviation"},
        {a: "رَكِبَ",r: "Rakiba",u: "سوار ہوا",u_ro: "Sawaar hua",u_hi: "सवार हुआ",u_en: "He rode",m: "لِتَرْكَبُوهَا",t: "سوار ہونا",t_ro: "Sawaar hona",t_hi: "सवार होना",t_en: "To ride"},
        {a: "سَفِينَة",r: "Safeenah",u: "کشتی",u_ro: "Kashti",u_hi: "कश्ती",u_en: "Ship, boat",m: "رَكِبَا فِي السَّفِينَةِ",t: "کشتی",t_ro: "Kashti",t_hi: "कश्ती",t_en: "Boat"},
        {a: "وَرَاء",r: "Waraa'",u: "پیچھے، ورائے",u_ro: "Peechhe, waraaye",u_hi: "पीछे, वराए",u_en: "Behind",m: "وَرَاءَ",t: "پیچھے",t_ro: "Peechhe",t_hi: "पीछे",t_en: "Behind"},
        {a: "كَنْز",r: "Kanz",u: "خزانہ",u_ro: "Khazaana",u_hi: "ख़ज़ाना",u_en: "Treasure",m: "وَكَانَ تَحْتَهُ كَنزٌ لَّهُمَا",t: "خزانہ",t_ro: "Khazaana",t_hi: "ख़ज़ाना",t_en: "Treasure"},
        {a: "ظَلَمَ",r: "Zalama",u: "ظلم کیا",u_ro: "Zulm kiya",u_hi: "ज़ुल्म किया",u_en: "He wronged",m: "ظَلَمَ",t: "ظلم",t_ro: "Zulm",t_hi: "ज़ुल्म",t_en: "Wronged"}
    ] },
    { day: 39, words: [
        {a: "آمَنَ",r: "Aamana",u: "ایمان لایا",u_ro: "Imaan laaya",u_hi: "ईमान लाया",u_en: "He believed",m: "آمَنَ",t: "ایمان",t_ro: "Imaan",t_hi: "ईमान",t_en: "Believed"},
        {a: "صُور",r: "Soor",u: "صور",u_ro: "Soor",u_hi: "सूर",u_en: "The Trumpet",m: "الصُّورُ",t: "صور",t_ro: "Soor",t_hi: "सूर",t_en: "The Trumpet"},
        {a: "عَظْم",r: "Azm",u: "ہڈی",u_ro: "Haddi",u_hi: "हड्डी",u_en: "Bone",m: "الْعَظْمُ",t: "ہڈی",t_ro: "Haddi",t_hi: "हड्डी",t_en: "Bone"},
        {a: "رَأْس",r: "Ra's",u: "سر",u_ro: "Sar",u_hi: "सर",u_en: "Head",m: "الرَّأْسُ",t: "سر",t_ro: "Sar",t_hi: "सर",t_en: "Head"},
        {a: "يَحْيَى",r: "Yahyaa",u: "یحییٰ علیہ السلام",u_ro: "Yahya alaihis-salaam",u_hi: "यह्या अलैहिस्सलाम",u_en: "Yahya (John)",m: "يَحْيَى",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "وَالِدَيْن",r: "Waalidayn",u: "ماں باپ",u_ro: "Maa baap",u_hi: "माँ-बाप",u_en: "Parents",m: "الْوَالِدَيْنِ",t: "ماں باپ",t_ro: "Maa baap",t_hi: "माँ-बाप",t_en: "Parents"},
        {a: "حَمَلَ",r: "Hamala",u: "اٹھایا",u_ro: "Uthaaya",u_hi: "उठाया",u_en: "He carried",m: "فَحَمَلَتْهُ فَانتَبَذَتْ",t: "اٹھانا",t_ro: "Uthaana",t_hi: "उठाना",t_en: "To carry"},
        {a: "ابْن",r: "Ibn",u: "بیٹا",u_ro: "Beta",u_hi: "बेटा",u_en: "Son",m: "الِابْنُ",t: "بیٹا",t_ro: "Beta",t_hi: "बेटा",t_en: "Son"},
        {a: "وَلَد",r: "Walad",u: "اولاد",u_ro: "Aulaad",u_hi: "औलाद",u_en: "Child, offspring",m: "الْوَلَدَ",t: "بیٹا",t_ro: "Beta",t_hi: "बेटा",t_en: "Son"},
        {a: "إِسْمَاعِيل",r: "Ismaa'eel",u: "اسماعیل علیہ السلام",u_ro: "Ismaeel alaihis-salaam",u_hi: "इस्माईल अलैहिस्सलाम",u_en: "Ismail (Ishmael)",m: "إِسْمَاعِيلُ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"}
    ] },
    { day: 40, words: [
        {a: "إِدْرِيس",r: "Idrees",u: "ادریس علیہ السلام",u_ro: "Idrees alaihis-salaam",u_hi: "इदरीस अलैहिस्सलाम",u_en: "Idris (Enoch)",m: "وَاذْكُرْ فِي الْكِتَابِ إِدْرِيسَ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "مُتَّقِي",r: "Muttaqi",u: "پرہیزگار",u_ro: "Parhezgaar",u_hi: "परहेज़गार",u_en: "God-fearing",m: "الْمُتَّقِي",t: "متقی",t_ro: "Muttaqi",t_hi: "मुत्तक़ी",t_en: "Pious"},
        {a: "جَهَنَّم",r: "Jahannam",u: "جہنم",u_ro: "Jahannam",u_hi: "जहन्नुम",u_en: "Hell",m: "جَهَنَّمُ",t: "جہنم",t_ro: "Jahannam",t_hi: "जहन्नुम",t_en: "Hellfire"},
        {a: "عَرْش",r: "Arsh",u: "عرش",u_ro: "Arsh",u_hi: "अर्श",u_en: "The Throne",m: "الْعَرْشِ",t: "تخت",t_ro: "Takht",t_hi: "तख़्त",t_en: "The Throne"},
        {a: "مُوسَى",r: "Moosaa",u: "موسیٰ علیہ السلام",u_ro: "Moosa alaihis-salaam",u_hi: "मूसा अलैहिस्सलाम",u_en: "Musa (Moses)",m: "مُوسَى",t: "کلیم اللہ",t_ro: "Kaleemullah",t_hi: "कलीमुल्लाह",t_en: "One Allah spoke to"},
        {a: "أَنَا",r: "Anaa",u: "میں",u_ro: "Main",u_hi: "मैं",u_en: "I",m: "أَنَا",t: "میں",t_ro: "Main",t_hi: "मैं",t_en: "I"},
        {a: "صَلَاة",r: "Salaah",u: "نماز",u_ro: "Namaaz",u_hi: "नमाज़",u_en: "Prayer, Salah",m: "الصَّلَاةُ",t: "نماز",t_ro: "Namaaz",t_hi: "नमाज़",t_en: "Prayer"},
        {a: "هِيَ",r: "Hiya",u: "وہ (عورت)",u_ro: "Woh (aurat)",u_hi: "वह (औरत)",u_en: "She",m: "هِيَ",t: "وہ",t_ro: "Woh",t_hi: "वह",t_en: "She"},
        {a: "حَيَّة",r: "Hayyah",u: "سانپ",u_ro: "Saanp",u_hi: "साँप",u_en: "Snake",m: "الْحَيَّةَ",t: "سانپ",t_ro: "Saanp",t_hi: "साँप",t_en: "Snake"},
        {a: "فِرْعَوْن",r: "Fir'awn",u: "فرعون",u_ro: "Firaun",u_hi: "फ़िरऔन",u_en: "Pharaoh",m: "فِرْعَوْنُ",t: "بادشاہ",t_ro: "Baadshaah",t_hi: "बादशाह",t_en: "King"}
    ] },
    { day: 41, words: [
        {a: "قَالَ",r: "Qaala",u: "اس نے کہا",u_ro: "Us ne kaha",u_hi: "उसने कहा",u_en: "He said",m: "قَالَ",t: "کہنا",t_ro: "Kehna",t_hi: "कहना",t_en: "Said"},
        {a: "اشْرَحْ",r: "Ishrah",u: "کھول دے",u_ro: "Khol de",u_hi: "खोल दे",u_en: "Expand, open up",m: "رَبِّ اشْرَحْ لِي صَدْرِي",t: "موسیٰ علیہ السلام کی دعا",t_ro: "Moosa AS ki dua",t_hi: "मूसा अ.स. की दुआ",t_en: "Prayer of Musa"},
        {a: "أَهْل",r: "Ahl",u: "گھر والے",u_ro: "Ghar wale",u_hi: "घर वाले",u_en: "Family, people",m: "الْأَهْلُ",t: "اہل",t_ro: "Ahl",t_hi: "अहल",t_en: "Household"},
        {a: "هَارُون",r: "Haaroon",u: "ہارون علیہ السلام",u_ro: "Haroon alaihis-salaam",u_hi: "हारून अलैहिस्सलाम",u_en: "Harun (Aaron)",m: "هَارُونُ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "أَخ",r: "Akh",u: "بھائی",u_ro: "Bhai",u_hi: "भाई",u_en: "Brother",m: "الْأَخُ",t: "بھائی",t_ro: "Bhai",t_hi: "भाई",t_en: "Brother"},
        {a: "كَيْ",r: "Kay",u: "تاکہ",u_ro: "Taaki",u_hi: "ताकि",u_en: "So that",m: "كَيْ",t: "تاکہ",t_ro: "Taaki",t_hi: "ताकि",t_en: "So that"},
        {a: "خَشَعَ",r: "Khasha'a",u: "جھکا، عاجز ہوا",u_ro: "Jhuka, aajiz hua",u_hi: "झुका, आजिज़ हुआ",u_en: "It humbled",m: "أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَن تَخْشَعَ",t: "جھکنا",t_ro: "Jhukna",t_hi: "झुकना",t_en: "To humble"},
        {a: "هَمْس",r: "Hams",u: "دھیمی آواز، سرگوشی",u_ro: "Dheemi aawaaz, sargoshi",u_hi: "धीमी आवाज़, सरगोशी",u_en: "Whisper",m: "لَا تَسْمَعُ إِلَّا هَمْسًا",t: "دھیمی آواز",t_ro: "Dheemi aawaaz",t_hi: "धीमी आवाज़",t_en: "Whisper"},
        {a: "شَفَاعَة",r: "Shafaa'ah",u: "سفارش",u_ro: "Sifaarish",u_hi: "सिफ़ारिश",u_en: "Intercession",m: "الشَّفَاعَةُ",t: "سفارش",t_ro: "Sifaarish",t_hi: "सिफ़ारिश",t_en: "Intercession"},
        {a: "زِدْنِي",r: "Zidnee",u: "مجھے بڑھا دے",u_ro: "Mujhe badha de",u_hi: "मुझे बढ़ा दे",u_en: "Increase me",m: "رَبِّ زِدْنِي عِلْمًا",t: "علم کی دعا",t_ro: "Ilm ki dua",t_hi: "इल्म की दुआ",t_en: "Supplication for knowledge"}
    ] },
    { day: 42, words: [
        {a: "شَجَرَة",r: "Shajarah",u: "درخت",u_ro: "Darakht",u_hi: "दरख़्त",u_en: "Tree",m: "الشَّجَرَةُ",t: "درخت",t_ro: "Darakht",t_hi: "दरख़्त",t_en: "Tree"},
        {a: "زَهْرَة",r: "Zahrah",u: "پھول، بہار",u_ro: "Phool, bahaar",u_hi: "फूल, बहार",u_en: "Flower, bloom",m: "زَهْرَةَ الْحَيَاةِ الدُّنْيَا",t: "پھول",t_ro: "Phool",t_hi: "फूल",t_en: "Blossom"},
        {a: "جَسَد",r: "Jasad",u: "جسم",u_ro: "Jism",u_hi: "जिस्म",u_en: "Body",m: "الْجَسَدُ",t: "جسم",t_ro: "Jism",t_hi: "जिस्म",t_en: "Body"},
        {a: "عِبَادَة",r: "Ibaadah",u: "عبادت",u_ro: "Ibaadat",u_hi: "इबादत",u_en: "Worship",m: "الْعِبَادَةُ",t: "عبادت",t_ro: "Ibaadat",t_hi: "इबादत",t_en: "Worship"},
        {a: "لَوْ",r: "Law",u: "اگر",u_ro: "Agar",u_hi: "अगर",u_en: "If only",m: "لَوْ",t: "کاش",t_ro: "Kaash",t_hi: "काश",t_en: "Wish"},
        {a: "اسْتَهْزَأَ",r: "Istahzaa",u: "استہزاء کیا، مذاق کیا",u_ro: "Istahza kiya, mazaak kiya",u_hi: "इस्तहज़ा किया, मज़ाक़ किया",u_en: "He ridiculed",m: "وَلَقَدِ اسْتُهْزِئَ بِرُسُلٍ مِّن قَبْلِكَ",t: "مذاق",t_ro: "Mazaak",t_hi: "मज़ाक़",t_en: "Ridicule"},
        {a: "سَخِرَ",r: "Sakhira",u: "مذاق اڑایا",u_ro: "Mazaak udaaya",u_hi: "मज़ाक़ उड़ाया",u_en: "He mocked",m: "لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ",t: "مذاق",t_ro: "Mazaak",t_hi: "मज़ाक़",t_en: "Mockery"},
        {a: "خَرْدَل",r: "Khardal",u: "رائی کا دانہ",u_ro: "Raai ka daana",u_hi: "राई का दाना",u_en: "Mustard seed",m: "مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ",t: "رائی کا دانہ",t_ro: "Raai ka daana",t_hi: "राई का दाना",t_en: "Mustard seed"},
        {a: "فَتَى",r: "Fataa",u: "جوان، نوجوان",u_ro: "Jawaan, naujawaan",u_hi: "जवान, नौजवान",u_en: "Young man",m: "سَمِعْنَا فَتًى",t: "جوان",t_ro: "Jawaan",t_hi: "जवान",t_en: "Youth"},
        {a: "إِبْرَاهِيم",r: "Ibraaheem",u: "ابراہیم علیہ السلام",u_ro: "Ibraheem alaihis-salaam",u_hi: "इब्राहीम अलैहिस्सलाम",u_en: "Ibrahim (Abraham)",m: "إِبْرَاهِيمُ",t: "خلیل اللہ",t_ro: "Khaleelullah",t_hi: "ख़लीलुल्लाह",t_en: "Friend of Allah"}
    ] },
    { day: 43, words: [
        {a: "يَعْقُوب",r: "Ya'qoob",u: "یعقوب علیہ السلام",u_ro: "Yaqoob alaihis-salaam",u_hi: "याक़ूब अलैहिस्सलाम",u_en: "Yaqub (Jacob)",m: "يَعْقُوبُ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "أَيُّوب",r: "Ayyoob",u: "ایوب علیہ السلام",u_ro: "Ayyoob alaihis-salaam",u_hi: "अय्यूब अलैहिस्सलाम",u_en: "Ayyub (Job)",m: "أَيُّوبُ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "ضُرّ",r: "Durr",u: "تکلیف",u_ro: "Takleef",u_hi: "तकलीफ़",u_en: "Harm, distress",m: "مَسَّنِيَ الضُّرُّ",t: "تکلیف",t_ro: "Takleef",t_hi: "तकलीफ़",t_en: "Affliction"},
        {a: "نَجَّى",r: "Najjaa",u: "بچا لیا",u_ro: "Bacha liya",u_hi: "बचा लिया",u_en: "He saved",m: "نَجَّى",t: "نجات",t_ro: "Najaat",t_hi: "नजात",t_en: "Saved"},
        {a: "زَكَرِيَّا",r: "Zakariyyaa",u: "زکریا علیہ السلام",u_ro: "Zakariyya alaihis-salaam",u_hi: "ज़करिया अलैहिस्सलाम",u_en: "Zakariyya (Zechariah)",m: "زَكَرِيَّا",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "هَذِهِ",r: "Haadhihi",u: "یہ (عورت)",u_ro: "Yeh (aurat)",u_hi: "यह (औरत)",u_en: "This (f.)",m: "هَذِهِ",t: "یہ",t_ro: "Yeh",t_hi: "यह",t_en: "This"},
        {a: "يَأْجُوج",r: "Ya'jooj",u: "یاجوج",u_ro: "Yaajooj",u_hi: "याजूज",u_en: "Yajuj (Gog)",m: "يَأْجُوجُ وَمَأْجُوجُ",t: "یاجوج",t_ro: "Yaajooj",t_hi: "याजूज",t_en: "Yajuj"},
        {a: "مَأْجُوج",r: "Ma'jooj",u: "ماجوج",u_ro: "Maajooj",u_hi: "माजूज",u_en: "Majuj (Magog)",m: "يَأْجُوجُ وَمَأْجُوجُ",t: "ماجوج",t_ro: "Maajooj",t_hi: "माजूज",t_en: "Majuj"},
        {a: "زَبُور",r: "Zaboor",u: "زبور",u_ro: "Zaboor",u_hi: "ज़बूर",u_en: "Psalms (Zabur)",m: "الزَّبُورَ",t: "کتاب",t_ro: "Kitaab",t_hi: "किताब",t_en: "Scripture"},
        {a: "زَلْزَلَة",r: "Zalzalah",u: "زلزلہ، ہلا دینے والی جنبش",u_ro: "Zalzala, hila dene wali junbish",u_hi: "ज़लज़ला, हिला देने वाली जुनबिश",u_en: "Earthquake",m: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا",t: "زلزلہ",t_ro: "Zalzala",t_hi: "ज़लज़ला",t_en: "Quake"}
    ] },
    { day: 44, words: [
        {a: "بَعْث",r: "Ba'th",u: "دوبارہ زندہ کرنا",u_ro: "Dobara zinda karna",u_hi: "दोबारा ज़िंदा करना",u_en: "Resurrection",m: "وَأَنَّ اللَّهَ يَبْعَثُ مَن فِي الْقُبُورِ",t: "اٹھانا",t_ro: "Uthaana",t_hi: "उठाना",t_en: "Raising"},
        {a: "ذَهَب",r: "Dhahab",u: "سونا",u_ro: "Sona",u_hi: "सोना",u_en: "Gold",m: "الذَّهَبَ",t: "سونا",t_ro: "Sona",t_hi: "सोना",t_en: "Gold"},
        {a: "أَذَّنَ",r: "Adhdhana",u: "اعلان کیا، اذان دی",u_ro: "Elaan kiya, azaan di",u_hi: "एलान किया, अज़ान दी",u_en: "He announced",m: "فَأَذَّنَ مُؤَذِّنٌ",t: "اعلان",t_ro: "Elaan",t_hi: "एलान",t_en: "Announcement"},
        {a: "حَجّ",r: "Hajj",u: "حج",u_ro: "Hajj",u_hi: "हज",u_en: "Hajj, pilgrimage",m: "الْحَجُّ",t: "حج",t_ro: "Hajj",t_hi: "हज",t_en: "Hajj"},
        {a: "فَجّ",r: "Fajj",u: "کھلا چوڑا راستہ",u_ro: "Khula chaura raasta",u_hi: "खुला चौड़ा रास्ता",u_en: "Wide mountain pass",m: "مِن كُلِّ فَجٍّ عَمِيقٍ",t: "راستہ",t_ro: "Raasta",t_hi: "रास्ता",t_en: "Pass"},
        {a: "الْعَلِيُّ",r: "Al-'Aliyyu",u: "بلند",u_ro: "Buland",u_hi: "बुलंद",u_en: "The Most High",m: "هُوَ الْعَلِيُّ الْكَبِيرُ",t: "وہی بلند، بڑا ہے",t_ro: "Wohi buland, bada hai",t_hi: "वही बुलंद, बड़ा है",t_en: "He is the Most High, the Most Great"},
        {a: "الرَّءُوف",r: "Ar-Ra'oof",u: "نہایت شفقت والا",u_ro: "Nihayat shafqat wala",u_hi: "निहायत शफ़क़त वाला",u_en: "Most Compassionate",m: "إِنَّ اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَحِيمٌ",t: "شفقت کرنے والا",t_ro: "Shafqat karne wala",t_hi: "शफ़क़त करने वाला",t_en: "Full of tenderness"},
        {a: "ذُبَاب",r: "Dhubaab",u: "مکھی",u_ro: "Makkhi",u_hi: "मक्खी",u_en: "Fly",m: "الذُّبَابَ",t: "مکھی",t_ro: "Makkhi",t_hi: "मक्खी",t_en: "Fly"},
        {a: "قَوِيّ",r: "Qawiyy",u: "طاقتور",u_ro: "Taaqatwar",u_hi: "ताक़तवर",u_en: "Strong",m: "قَوِيٌّ",t: "طاقت والا",t_ro: "Taaqat wala",t_hi: "ताक़त वाला",t_en: "Powerful"},
        {a: "اسْجُدُوا",r: "Usjudoo",u: "سجدہ کرو",u_ro: "Sajda karo",u_hi: "सज्दा करो",u_en: "Prostrate!",m: "اسْجُدُوا",t: "سجدہ",t_ro: "Sajda",t_hi: "सज्दा",t_en: "Prostrate"}
    ] },
    { day: 45, words: [
        {a: "فِرْدَوْس",r: "Firdaws",u: "فردوس",u_ro: "Firdaus",u_hi: "फ़िरदौस",u_en: "Firdaus (highest Paradise)",m: "الْفِرْدَوْسُ",t: "جنت",t_ro: "Jannat",t_hi: "जन्नत",t_en: "Paradise"},
        {a: "مُضْغَة",r: "Mudghah",u: "گوشت کا ٹکڑا",u_ro: "Gosht ka tukda",u_hi: "गोश्त का टुकड़ा",u_en: "Lump of flesh",m: "مُضْغَةً مُّخَلَّقَةً",t: "گوشت کا ٹکڑا",t_ro: "Gosht ka tukda",t_hi: "गोश्त का टुकड़ा",t_en: "Lump"},
        {a: "سِينَا",r: "Seenaa",u: "سینا (پہاڑ)",u_ro: "Seena (pahaad)",u_hi: "सीना (पहाड़)",u_en: "Sinai",m: "وَشَجَرَةً تَخْرُجُ مِن طُورِ سَيْنَاءَ",t: "سینا",t_ro: "Seena",t_hi: "सीना",t_en: "Sinai"},
        {a: "أَنْزِلْنِي",r: "Anzilnee",u: "مجھے اتار",u_ro: "Mujhe utaar",u_hi: "मुझे उतार",u_en: "Let me land / settle me",m: "رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا",t: "اے میرے رب! مجھے برکت والی جگہ اتار",t_ro: "Ae mere Rabb! Mujhe barkat wali jagah utaar",t_hi: "ऐ मेरे रब! मुझे बरकत वाली जगह उतार",t_en: "My Lord, let me land at a blessed landing place"},
        {a: "ذَرَأَ",r: "Dhara'a",u: "پیدا کیا، پھیلایا",u_ro: "Paida kiya, phailaaya",u_hi: "पैदा किया, फैलाया",u_en: "He multiplied",m: "وَهُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ",t: "پیدا کرنا",t_ro: "Paida karna",t_hi: "पैदा करना",t_en: "To create"},
        {a: "بَرْزَخ",r: "Barzakh",u: "درمیانی پردہ (قبر کی دنیا)",u_ro: "Darmiyaani parda (qabr ki duniya)",u_hi: "दरमियानी पर्दा (क़ब्र की दुनिया)",u_en: "Barzakh, barrier",m: "وَمِن وَرَائِهِم بَرْزَخٌ",t: "پردہ",t_ro: "Parda",t_hi: "पर्दा",t_en: "Barrier"},
        {a: "اغْفِرْ",r: "Ighfir",u: "بخش دے",u_ro: "Bakhsh de",u_hi: "बख़्श दे",u_en: "Forgive!",m: "اغْفِرْ",t: "بخشنا",t_ro: "Bakhshna",t_hi: "बख़्शना",t_en: "Forgive"},
        {a: "ارْحَمْ",r: "Irham",u: "رحم کر",u_ro: "Rahm kar",u_hi: "रहम कर",u_en: "Have mercy!",m: "ارْحَمْ",t: "رحم",t_ro: "Rahm",t_hi: "रहम",t_en: "Have mercy"},
        {a: "سُورَة",r: "Soorah",u: "سورت",u_ro: "Soorat",u_hi: "सूरत",u_en: "Chapter, Surah",m: "السُّورَةُ",t: "سورت",t_ro: "Soorat",t_hi: "सूरत",t_en: "Surah"},
        {a: "لَوْلَا",r: "Lawlaa",u: "اگر نہ ہوتا",u_ro: "Agar na hota",u_hi: "अगर न होता",u_en: "Had it not been for",m: "لَوْلَا",t: "کیوں نہ",t_ro: "Kyun na",t_hi: "क्यों न",t_en: "Why not"}
    ] },
    { day: 46, words: [
        {a: "إِذْ",r: "Idh",u: "جب",u_ro: "Jab",u_hi: "जब",u_en: "When",m: "إِذْ",t: "جب (گزرا)",t_ro: "Jab (guzra)",t_hi: "जब (बीता हुआ)",t_en: "When (past)"},
        {a: "ظَنَّ",r: "Zanna",u: "گمان کیا",u_ro: "Gumaan kiya",u_hi: "गुमान किया",u_en: "He thought",m: "ظَنَّ",t: "گمان",t_ro: "Gumaan",t_hi: "गुमान",t_en: "Thought"},
        {a: "مِشْكَاة",r: "Mishkaah",u: "طاق، چراغ دان",u_ro: "Taaq, chiraagh-daan",u_hi: "ताक़, चिराग़दान",u_en: "Niche, lamp-stand",m: "كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ",t: "چراغ دان",t_ro: "Chiraagh-daan",t_hi: "चिराग़दान",t_en: "Lamp niche"},
        {a: "مِصْبَاح",r: "Misbaah",u: "چراغ",u_ro: "Chiraagh",u_hi: "चिराग़",u_en: "Lamp",m: "الْمِصْبَاحُ فِي زُجَاجَةٍ",t: "چراغ",t_ro: "Chiraagh",t_hi: "चिराग़",t_en: "Lamp"},
        {a: "زُجَاجَة",r: "Zujaajah",u: "شیشے کا قندیل",u_ro: "Sheeshe ka qandeel",u_hi: "शीशे का क़ंदील",u_en: "Glass globe",m: "الْمِصْبَاحُ فِي زُجَاجَةٍ",t: "شیشہ",t_ro: "Sheesha",t_hi: "शीशा",t_en: "Glass"},
        {a: "زَيْت",r: "Zayt",u: "تیل",u_ro: "Tail",u_hi: "तेल",u_en: "Oil",m: "يَكَادُ زَيْتُهَا يُضِيءُ",t: "زیتون کا تیل",t_ro: "Zaitoon ka tail",t_hi: "ज़ैतून का तेल",t_en: "Olive oil"},
        {a: "تِجَارَة",r: "Tijaarah",u: "تجارت",u_ro: "Tijaarat",u_hi: "तिजारत",u_en: "Trade",m: "تِجَارَةً لَّن تَبُورَ",t: "تجارت",t_ro: "Tijaarat",t_hi: "तिजारत",t_en: "Trade"},
        {a: "أَمْن",r: "Amn",u: "امن، سکون",u_ro: "Aman, sukoon",u_hi: "अमन, सुकून",u_en: "Security, peace",m: "مِنْ بَعْدِ خَوْفِهِمْ أَمْنًا",t: "امن",t_ro: "Aman",t_hi: "अमन",t_en: "Safety"},
        {a: "عَمّ",r: "'Amm",u: "چچا",u_ro: "Chachcha",u_hi: "चच्चा",u_en: "Paternal uncle",m: "بُيُوتِ أَعْمَامِكُمْ",t: "چچا",t_ro: "Chachcha",t_hi: "चच्चा",t_en: "Paternal uncle"},
        {a: "عَمَّة",r: "'Ammah",u: "پھوپھی",u_ro: "Phoophi",u_hi: "फूफी",u_en: "Paternal aunt",m: "بُيُوتِ عَمَّاتِكُمْ",t: "پھوپھی",t_ro: "Phoophi",t_hi: "फूफी",t_en: "Paternal aunt"}
    ] },
    { day: 47, words: [
        {a: "خَال",r: "Khaal",u: "ماموں",u_ro: "Maamoon",u_hi: "मामूँ",u_en: "Maternal uncle",m: "بُيُوتِ أَخْوَالِكُمْ",t: "ماموں",t_ro: "Maamoon",t_hi: "मामूँ",t_en: "Maternal uncle"},
        {a: "خَالَة",r: "Khaalah",u: "خالہ",u_ro: "Khaala",u_hi: "ख़ाला",u_en: "Maternal aunt",m: "بُيُوتِ خَالَاتِكُمْ",t: "خالہ",t_ro: "Khaala",t_hi: "ख़ाला",t_en: "Maternal aunt"},
        {a: "صَدِيق",r: "Sadeeq",u: "دوست",u_ro: "Dost",u_hi: "दोस्त",u_en: "Friend",m: "أَوْ صَدِيقِكُمْ",t: "دوست",t_ro: "Dost",t_hi: "दोस्त",t_en: "Friend"},
        {a: "خَالَفَ",r: "Khaalafa",u: "مخالفت کی",u_ro: "Mukhaalifat ki",u_hi: "मुख़ालिफ़त की",u_en: "He opposed",m: "الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ",t: "مخالفت",t_ro: "Mukhaalifat",t_hi: "मुख़ालिफ़त",t_en: "Opposition"},
        {a: "مَشَى",r: "Mashaa",u: "چلا",u_ro: "Chala",u_hi: "चला",u_en: "He walked",m: "وَيَمْشِي فِي الْأَسْوَاقِ",t: "چلنا",t_ro: "Chalna",t_hi: "चलना",t_en: "To walk"},
        {a: "سُوق",r: "Sooq",u: "بازار",u_ro: "Bazaar",u_hi: "बाज़ार",u_en: "Market",m: "يَمْشِي فِي الْأَسْوَاقِ",t: "بازار",t_ro: "Bazaar",t_hi: "बाज़ार",t_en: "Market"},
        {a: "جَرَى",r: "Jaraa",u: "بہا، دوڑا",u_ro: "Baha, dauda",u_hi: "बहा, दौड़ा",u_en: "It flowed/ran",m: "تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",t: "بہنا",t_ro: "Bahna",t_hi: "बहना",t_en: "To flow"},
        {a: "قَصْر",r: "Qasr",u: "محل",u_ro: "Mehal",u_hi: "महल",u_en: "Palace",m: "وَيَجْعَل لَّكَ قُصُورًا",t: "محل",t_ro: "Mehal",t_hi: "महल",t_en: "Palace"},
        {a: "خُلْد",r: "Khuld",u: "ہمیشگی",u_ro: "Hamesgi",u_hi: "हमेशगी",u_en: "Eternity",m: "الْخُلْدُ",t: "ہمیشہ",t_ro: "Hamesha",t_hi: "हमेशा",t_en: "Forever"},
        {a: "طَهُور",r: "Tahoor",u: "نہایت پاک",u_ro: "Nihayat paak",u_hi: "निहायत पाक",u_en: "Purifying, pure",m: "طَهُور",t: "پاکیزگی",t_ro: "Paakeezgi",t_hi: "पाकीज़गी",t_en: "Purity"}
    ] },
    { day: 48, words: [
        {a: "جِهَاد",r: "Jihaad",u: "جہاد",u_ro: "Jihaad",u_hi: "जिहाद",u_en: "Striving, jihad",m: "الْجِهَادُ",t: "کوشش",t_ro: "Koshish",t_hi: "कोशिश",t_en: "Striving"},
        {a: "نَسَب",r: "Nasab",u: "نسب، خاندانی تعلق",u_ro: "Nasab, khaandani ta'alluq",u_hi: "नसब, ख़ानदानी ताल्लुक़",u_en: "Lineage",m: "فَجَعَلَهُ نَسَبًا وَصِهْرًا",t: "نسب",t_ro: "Nasab",t_hi: "नसब",t_en: "Lineage"},
        {a: "صِهْر",r: "Sihr",u: "سسرال کا رشتہ",u_ro: "Susraal ka rishta",u_hi: "ससुराल का रिश्ता",u_en: "In-law relation",m: "فَجَعَلَهُ نَسَبًا وَصِهْرًا",t: "سسرال کا رشتہ",t_ro: "Susraal ka rishta",t_hi: "ससुराल का रिश्ता",t_en: "In-law"},
        {a: "قِيَام",r: "Qiyaam",u: "کھڑے ہونا (عبادت میں)",u_ro: "Khade hona (ibaadat mein)",u_hi: "खड़े होना (इबादत में)",u_en: "Standing (in worship)",m: "قِيَام",t: "کھڑے ہونا (عبادت میں)",t_ro: "Khade hona (ibaadat mein)",t_hi: "खड़े होना (इबादत में)",t_en: "Standing (in worship)"},
        {a: "تَابَ",r: "Taaba",u: "توبہ کی",u_ro: "Tauba ki",u_hi: "तौबा की",u_en: "He repented",m: "تَابَ",t: "توبہ",t_ro: "Tauba",t_hi: "तौबा",t_en: "Repented"},
        {a: "نَفْع",r: "Naf'",u: "فائدہ",u_ro: "Faaida",u_hi: "फ़ायदा",u_en: "Benefit",m: "لَا يَنْفَعُ",t: "فائدہ",t_ro: "Faaida",t_hi: "फ़ायदा",t_en: "Benefit"},
        {a: "أَمِين",r: "Ameen",u: "اماندار",u_ro: "Amaandaar",u_hi: "अमानदार",u_en: "Trustworthy",m: "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ",t: "اماندار",t_ro: "Amaandaar",t_hi: "अमानदार",t_en: "Trustworthy"},
        {a: "مَطَر",r: "Matar",u: "بارش",u_ro: "Baarish",u_hi: "बारिश",u_en: "Rain",m: "مَطَرٌ",t: "بارش",t_ro: "Baarish",t_hi: "बारिश",t_en: "Rain"},
        {a: "أَيْكَة",r: "Aykah",u: "ایکہ (باغات والا علاقہ)",u_ro: "Aykah (baaghaat wala ilaaqa)",u_hi: "ऐका (बाग़ात वाला इलाक़ा)",u_en: "Aykah (the Thicket)",m: "أَصْحَابُ الْأَيْكَةِ",t: "ایکہ",t_ro: "Aykah",t_hi: "ऐका",t_en: "Aykah"},
        {a: "سَمِيع",r: "Samee'",u: "سب سننے والا",u_ro: "Sab sunne wala",u_hi: "सब सुनने वाला",u_en: "All-Hearing",m: "سَمِيعٌ بَصِيرٌ",t: "سننے والا",t_ro: "Sunne wala",t_hi: "सुनने वाला",t_en: "Hearer"}
    ] },
    { day: 49, words: [
        {a: "أَدْخَلَ",r: "Adkhala",u: "داخل کیا",u_ro: "Daakhil kiya",u_hi: "दाख़िल किया",u_en: "He admitted",m: "أَدْخَلَ",t: "داخل",t_ro: "Daakhil",t_hi: "दाख़िल",t_en: "Admitted"},
        {a: "سُوء",r: "Soo'",u: "برا، برائی",u_ro: "Bura, buraai",u_hi: "बुरा, बुराई",u_en: "Evil, harm",m: "يَسُومُونَكُمْ سُوءَ الْعَذَابِ",t: "برائی",t_ro: "Buraai",t_hi: "बुराई",t_en: "Evil"},
        {a: "سُلَيْمَان",r: "Sulaymaan",u: "سلیمان علیہ السلام",u_ro: "Sulaiman alaihis-salaam",u_hi: "सुलैमान अलैहिस्सलाम",u_en: "Sulayman (Solomon)",m: "سُلَيْمَانُ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "فَضْل",r: "Fadl",u: "فضل، کرم",u_ro: "Fazl, karam",u_hi: "फ़ज़्ल, करम",u_en: "Grace, bounty",m: "ذُو الْفَضْلِ الْعَظِيمِ",t: "فضل",t_ro: "Fazl",t_hi: "फ़ज़्ल",t_en: "Bounty"},
        {a: "وَاد",r: "Waad",u: "وادی",u_ro: "Waadi",u_hi: "वादी",u_en: "Valley",m: "بِالْوَادِ الْمُقَدَّسِ طُوًى",t: "وادی",t_ro: "Waadi",t_hi: "वादी",t_en: "Valley"},
        {a: "نَمْلَة",r: "Namlah",u: "چیونٹی",u_ro: "Cheenti",u_hi: "चींटी",u_en: "Ant",m: "النَّمْلَةَ",t: "چیونٹی",t_ro: "Cheenti",t_hi: "चींटी",t_en: "Ant"},
        {a: "هُدْهُد",r: "Hudhud",u: "ایک پرندہ",u_ro: "Ek parinda",u_hi: "एक परिंदा",u_en: "Hoopoe",m: "الْهُدْهُدَ",t: "ہدہد",t_ro: "Hudhud",t_hi: "हुदहुद",t_en: "A bird"},
        {a: "امْرَأَة",r: "Imra'ah",u: "عورت",u_ro: "Aurat",u_hi: "औरत",u_en: "Woman",m: "الْمَرْأَةَ",t: "عورت",t_ro: "Aurat",t_hi: "औरत",t_en: "Woman"},
        {a: "أَفْسَدَ",r: "Afsada",u: "فساد پھیلایا",u_ro: "Fasaad phailaaya",u_hi: "फ़साद फैलाया",u_en: "He corrupted",m: "أَفْسَدُوهَا",t: "فساد کرنا",t_ro: "Fasaad karna",t_hi: "फ़साद करना",t_en: "To spread corruption"},
        {a: "شَكَرَ",r: "Shakara",u: "شکر کیا",u_ro: "Shukr kiya",u_hi: "शुक्र किया",u_en: "He was grateful",m: "وَمَنْ شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ",t: "شکر کرنا",t_ro: "Shukr karna",t_hi: "शुक्र करना",t_en: "To be grateful"}
    ] },
    { day: 50, words: [
        {a: "أُخْت",r: "Ukht",u: "بہن",u_ro: "Behen",u_hi: "बहन",u_en: "Sister",m: "الْأُخْتُ",t: "بہن",t_ro: "Behen",t_hi: "बहन",t_en: "Sister"},
        {a: "اسْتَنْصَرَ",r: "Istanṣara",u: "مدد مانگی",u_ro: "Madad maangi",u_hi: "मदद माँगी",u_en: "He sought victory",m: "وَإِنِ اسْتَنصَرُوكُمْ فِي الدِّينِ",t: "مدد",t_ro: "Madad",t_hi: "मदद",t_en: "Seeking aid"},
        {a: "خَرَجَ",r: "Kharaja",u: "نکلا",u_ro: "Nikla",u_hi: "निकला",u_en: "He went out",m: "خَرَجَ",t: "نکلنا",t_ro: "Nikalna",t_hi: "निकलना",t_en: "Went out"},
        {a: "قَصَّ",r: "Qassa",u: "بیان کیا",u_ro: "Bayaan kiya",u_hi: "बयान किया",u_en: "He narrated",m: "قَصَّ",t: "بیان",t_ro: "Bayaan",t_hi: "बयान",t_en: "Narrated"},
        {a: "قَضَى",r: "Qadaa",u: "فیصلہ کر دیا",u_ro: "Faisla kar diya",u_hi: "फ़ैसला कर दिया",u_en: "He decreed",m: "قَضَى",t: "فیصلہ",t_ro: "Faisla",t_hi: "फ़ैसला",t_en: "Decreed"},
        {a: "سَارَ",r: "Saara",u: "چلا",u_ro: "Chala",u_hi: "चला",u_en: "He traveled",m: "سَارَ",t: "چلنا",t_ro: "Chalna",t_hi: "चलना",t_en: "Traveled"},
        {a: "جَانِب",r: "Jaanib",u: "طرف، کنارہ",u_ro: "Taraf, kinaara",u_hi: "तरफ़, किनारा",u_en: "Side",m: "مِن جَانِبِ الطُّورِ",t: "طرف",t_ro: "Taraf",t_hi: "तरफ़",t_en: "Side"},
        {a: "اتَّبَعَ",r: "Ittaba'a",u: "پیروی کی",u_ro: "Pairwi ki",u_hi: "पैरवी की",u_en: "He followed",m: "اتَّبَعَ",t: "پیروی",t_ro: "Pairwi",t_hi: "पैरवी",t_en: "Followed"},
        {a: "أَحَبَّ",r: "Ahabba",u: "پسند کیا",u_ro: "Pasand kiya",u_hi: "पसंद किया",u_en: "He loved",m: "أَحَبَّ",t: "محبت",t_ro: "Mohabbat",t_hi: "मोहब्बत",t_en: "Loved"},
        {a: "أَجَابَ",r: "Ajaaba",u: "جواب دیا",u_ro: "Jawaab diya",u_hi: "जवाब दिया",u_en: "He answered",m: "أَجَابَ",t: "جواب",t_ro: "Jawaab",t_hi: "जवाब",t_en: "Answered"}
    ] },
    { day: 51, words: [
        {a: "حَظّ",r: "Hazz",u: "نصیب، حصہ",u_ro: "Naseeb, hissa",u_hi: "नसीब, हिस्सा",u_en: "Portion",m: "ذُو حَظٍّ عَظِيمٍ",t: "نصیب",t_ro: "Naseeb",t_hi: "नसीब",t_en: "Portion"},
        {a: "حَسِبَ",r: "Hasiba",u: "سمجھا",u_ro: "Samjha",u_hi: "समझा",u_en: "He supposed",m: "حَسِبَ",t: "سمجھنا",t_ro: "Samajhna",t_hi: "समझना",t_en: "Supposed"},
        {a: "يَرْجُو",r: "Yarjoo",u: "وہ امید رکھتا ہے",u_ro: "Woh umeed rakhta hai",u_hi: "वह उम्मीद रखता है",u_en: "He hopes",m: "يَرْجُو",t: "امید",t_ro: "Umeed",t_hi: "उम्मीद",t_en: "Hopes"},
        {a: "جَاهَدَ",r: "Jaahada",u: "جہاد کیا، کوشش کی",u_ro: "Jihaad kiya, koshish ki",u_hi: "जिहाद किया, कोशिश की",u_en: "He strove",m: "وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ",t: "کوشش",t_ro: "Koshish",t_hi: "कोशिश",t_en: "Striving"},
        {a: "صَالِح",r: "Saalih",u: "نیک",u_ro: "Nek",u_hi: "नेक",u_en: "Righteous",m: "الصَّالِحُ",t: "نیک",t_ro: "Nek",t_hi: "नेक",t_en: "Good"},
        {a: "سَنَة",r: "Sanah",u: "سال",u_ro: "Saal",u_hi: "साल",u_en: "Year",m: "أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا",t: "سال",t_ro: "Saal",t_hi: "साल",t_en: "Year"},
        {a: "عَام",r: "Aam",u: "سال",u_ro: "Saal",u_hi: "साल",u_en: "Year",m: "عَامِهِمْ هَٰذَا",t: "سال",t_ro: "Saal",t_hi: "साल",t_en: "Year"},
        {a: "أَبْدَأَ",r: "Abda'a",u: "شروع کیا، پہلی بار پیدا کیا",u_ro: "Shuru kiya, pehli baar paida kiya",u_hi: "शुरू किया, पहली बार पैदा किया",u_en: "He originated",m: "إِنَّهُ هُوَ يُبْدِئُ وَيُعِيدُ",t: "شروع کرنا",t_ro: "Shuru karna",t_hi: "शुरू करना",t_en: "To originate"},
        {a: "أَعَادَ",r: "A'aada",u: "لوٹایا، دوبارہ کیا",u_ro: "Lautaaya, dobara kiya",u_hi: "लौटाया, दोबारा किया",u_en: "He repeated",m: "وَهُوَ الَّذِي يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ",t: "لوٹانا",t_ro: "Lautaana",t_hi: "लौटाना",t_en: "To restore"},
        {a: "مَدْيَن",r: "Madyan",u: "مدین (ملک)",u_ro: "Madyan (mulk)",u_hi: "मदयन (मुल्क)",u_en: "Madyan",m: "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا",t: "مدین",t_ro: "Madyan",t_hi: "मदयन",t_en: "Madyan"}
    ] },
    { day: 52, words: [
        {a: "شُعَيْب",r: "Shu'ayb",u: "شعیب علیہ السلام",u_ro: "Shuaib alaihis-salaam",u_hi: "शुऐब अलैहिस्सलाम",u_en: "Shuayb",m: "شُعَيْبٌ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "الْآخِر",r: "Al-Aakhir",u: "سب کے بعد",u_ro: "Sab ke baad",u_hi: "सब के बाद",u_en: "The Last",m: "هُوَ الْأَوَّلُ وَالْآخِرُ",t: "آخری",t_ro: "Aakhri",t_hi: "आख़िरी",t_en: "The Last"},
        {a: "قَارُون",r: "Qaaroon",u: "قارون",u_ro: "Qaaroon",u_hi: "क़ारून",u_en: "Qarun (Korah)",m: "قَارُونُ",t: "دولت مند",t_ro: "Daulatmand",t_hi: "दौलतमंद",t_en: "Wealthy man"},
        {a: "عَنكَبُوت",r: "Ankaboot",u: "مکڑی",u_ro: "Makdi",u_hi: "मकड़ी",u_en: "Spider",m: "الْعَنكَبُوتَ",t: "مکڑی",t_ro: "Makdi",t_hi: "मकड़ी",t_en: "Spider"},
        {a: "مُنْكَر",r: "Munkar",u: "بری بات",u_ro: "Buri baat",u_hi: "बुरी बात",u_en: "Wrong, evil deed",m: "الْمُنْكَرُ",t: "برائی",t_ro: "Buraai",t_hi: "बुराई",t_en: "Evil"},
        {a: "كُلّ",r: "Kull",u: "ہر",u_ro: "Har",u_hi: "हर",u_en: "Every, all",m: "كُلّ",t: "سب",t_ro: "Sab",t_hi: "सब",t_en: "Each"},
        {a: "نَفْس",r: "Nafs",u: "جان",u_ro: "Jaan",u_hi: "जान",u_en: "Soul, self",m: "نَفْس",t: "خود",t_ro: "Khud",t_hi: "ख़ुद",t_en: "Oneself"},
        {a: "ثُمَّ",r: "Thumma",u: "پھر",u_ro: "Phir",u_hi: "फिर",u_en: "Then",m: "ثُمَّ",t: "اس کے بعد",t_ro: "Is ke baad",t_hi: "इसके बाद",t_en: "Afterwards"},
        {a: "فَرَح",r: "Farah",u: "خوشی",u_ro: "Khushi",u_hi: "ख़ुशी",u_en: "Joy, happiness",m: "وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ",t: "خوشی",t_ro: "Khushi",t_hi: "ख़ुशी",t_en: "Joy"},
        {a: "يَأْتِي",r: "Ya'tee",u: "آتا ہے",u_ro: "Aata hai",u_hi: "आता है",u_en: "He comes",m: "يَأْتِي",t: "آنا",t_ro: "Aana",t_hi: "आना",t_en: "Comes"}
    ] },
    { day: 53, words: [
        {a: "كَفَرَ",r: "Kafara",u: "انکار کیا",u_ro: "Inkaar kiya",u_hi: "इनकार किया",u_en: "He disbelieved",m: "كَفَرَ",t: "کفر",t_ro: "Kufr",t_hi: "कुफ़्र",t_en: "Disbelieved"},
        {a: "عَمِلَ",r: "Amila",u: "کام کیا",u_ro: "Kaam kiya",u_hi: "काम किया",u_en: "He did, worked",m: "عَمِلَ",t: "عمل کرنا",t_ro: "Amal karna",t_hi: "अमल करना",t_en: "Did deeds"},
        {a: "لُقْمَان",r: "Luqmaan",u: "لقمان",u_ro: "Luqmaan",u_hi: "लुक़मान",u_en: "Luqman",m: "لُقْمَانُ",t: "حکیم",t_ro: "Hakeem",t_hi: "हकीम",t_en: "Wise man"},
        {a: "ظُلْم",r: "Zulm",u: "ظلم، بے انصافی",u_ro: "Zulm, be-insaafi",u_hi: "ज़ुल्म, बेइंसाफ़ी",u_en: "Wrongdoing, oppression",m: "إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ",t: "ظلم",t_ro: "Zulm",t_hi: "ज़ुल्म",t_en: "Injustice"},
        {a: "سَمِيعٌ",r: "Samee'un",u: "خوب سننے والا",u_ro: "Khoob sunne wala",u_hi: "ख़ूब सुनने वाला",u_en: "All-Hearing",m: "سَمِيعٌ بَصِيرٌ",t: "سننا دیکھنا",t_ro: "Sunna dekhna",t_hi: "सुनना देखना",t_en: "Hearing and seeing"},
        {a: "عَالِم",r: "Aalim",u: "عالم",u_ro: "Aalim",u_hi: "आलिम",u_en: "Knowledgeable, scholar",m: "الْعَالِمُ",t: "جاننے والا",t_ro: "Jaanne wala",t_hi: "जानने वाला",t_en: "Knower"},
        {a: "مُؤْمِن",r: "Mu'min",u: "ایمان والا",u_ro: "Imaan wala",u_hi: "ईमान वाला",u_en: "Believer",m: "الْمُؤْمِنُ",t: "مومن",t_ro: "Momin",t_hi: "मोमिन",t_en: "Believer"},
        {a: "فَاسِق",r: "Faasiq",u: "نافرمان",u_ro: "Nafarmaan",u_hi: "नाफ़रमान",u_en: "Disobedient",m: "الْفَاسِقُ",t: "نافرمان",t_ro: "Nafarmaan",t_hi: "नाफ़रमान",t_en: "Disobedient"},
        {a: "زَرْع",r: "Zar'",u: "کھیتی",u_ro: "Kheti",u_hi: "खेती",u_en: "Crops",m: "الزَّرْعَ",t: "کھیتی",t_ro: "Kheti",t_hi: "खेती",t_en: "Crops"},
        {a: "نَبِيّ",r: "Nabiyy",u: "نبی",u_ro: "Nabi",u_hi: "नबी",u_en: "Prophet",m: "النَّبِيُّ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"}
    ] },
    { day: 54, words: [
        {a: "تَوَكُّل",r: "Tawakkul",u: "توکل",u_ro: "Tawakkul",u_hi: "तवक्कुल",u_en: "Trust in Allah",m: "التَّوَكُّلُ",t: "بھروسہ",t_ro: "Bharosa",t_hi: "भरोसा",t_en: "Reliance"},
        {a: "وَكِيل",r: "Wakeel",u: "کارساز",u_ro: "Kaarsaaz",u_hi: "कारसाज़",u_en: "Trustee, Disposer",m: "وَكِيلًا",t: "بھروسہ",t_ro: "Bharosa",t_hi: "भरोसा",t_en: "Trusted in"},
        {a: "نِسَاء",r: "Nisaa'",u: "عورتیں",u_ro: "Auratein",u_hi: "औरतें",u_en: "Women",m: "النِّسَاءَ",t: "عورتیں",t_ro: "Auratein",t_hi: "औरतें",t_en: "Women"},
        {a: "مَرَض",r: "Marad",u: "بیماری",u_ro: "Beemari",u_hi: "बीमारी",u_en: "Illness",m: "فِي قُلُوبِهِم مَّرَضٌ",t: "بیماری",t_ro: "Beemari",t_hi: "बीमारी",t_en: "Disease"},
        {a: "اذْكُرُوا",r: "Udhkuroo",u: "یاد کرو",u_ro: "Yaad karo",u_hi: "याद करो",u_en: "Remember!",m: "اذْكُرُوا",t: "یاد کرنا",t_ro: "Yaad karna",t_hi: "याद करना",t_en: "Remember"},
        {a: "أَصِيل",r: "Aseel",u: "شام کا وقت",u_ro: "Shaam ka waqt",u_hi: "शाम का वक़्त",u_en: "Late afternoon",m: "وَبُكْرَةً وَأَصِيلًا",t: "شام",t_ro: "Shaam",t_hi: "शाम",t_en: "Late afternoon"},
        {a: "صَلُّوا",r: "Sallu",u: "درود بھیجو",u_ro: "Durood bhejo",u_hi: "दुरूद भेजो",u_en: "Send blessings",m: "صَلُّوا عَلَيْهِ",t: "ان پر درود بھیجو",t_ro: "Un par durood bhejo",t_hi: "उन पर दरूद भेजो",t_en: "Send blessings upon him"},
        {a: "أَمَانَة",r: "Amaanah",u: "امانت",u_ro: "Amaanat",u_hi: "अमानत",u_en: "Trust",m: "عَرَضْنَا الْأَمَانَةَ",t: "امانت",t_ro: "Amaanat",t_hi: "अमानत",t_en: "Trust"},
        {a: "الْحَفِيظ",r: "Al-Hafeez",u: "حفاظت کرنے والا",u_ro: "Hifaazat karne wala",u_hi: "हिफ़ाज़त करने वाला",u_en: "The Preserver",m: "وَرَبُّكَ عَلَىٰ كُلِّ شَيْءٍ حَفِيظٌ",t: "محافظ",t_ro: "Muhaafiz",t_hi: "मुहाफ़िज़",t_en: "Guardian"},
        {a: "قَذَفَ",r: "Qadhafa",u: "تہمت لگائی",u_ro: "Tohmat lagaai",u_hi: "तोहमत लगाई",u_en: "He slandered",m: "وَالَّذِينَ يَرْمُونَ الْمُحْصَنَاتِ",t: "تہمت",t_ro: "Tohmat",t_hi: "तोहमत",t_en: "Slander"}
    ] },
    { day: 55, words: [
        {a: "عَدُوّ",r: "Aduww",u: "دشمن",u_ro: "Dushman",u_hi: "दुश्मन",u_en: "Enemy",m: "الْعَدُوُّ",t: "دشمن",t_ro: "Dushman",t_hi: "दुश्मन",t_en: "Enemy"},
        {a: "قِطْمِير",r: "Qitmeer",u: "کھجور کی گٹھلی کا پردہ",u_ro: "Khajoor ki guthli ka parda",u_hi: "खजूर की गुठली का पर्दा",u_en: "Filament (of date stone)",m: "مَا يَمْلِكُونَ مِن قِطْمِيرٍ",t: "انتہائی چھوٹی چیز",t_ro: "Intehaai chhoti cheez",t_hi: "इंतहाई छोटी चीज़",t_en: "Tiny thing"},
        {a: "أَنْتُمْ",r: "Antum",u: "تم سب",u_ro: "Tum sab",u_hi: "तुम सब",u_en: "You (pl.)",m: "أَنْتُمْ",t: "تم سب",t_ro: "Tum sab",t_hi: "तुम सब",t_en: "You all"},
        {a: "غَنِيّ",r: "Ghaniyy",u: "بے نیاز",u_ro: "Be-niyaaz",u_hi: "बे-नियाज़",u_en: "Self-Sufficient",m: "غَنِيٌّ",t: "دولت والا",t_ro: "Daulat wala",t_hi: "दौलत वाला",t_en: "Wealthy"},
        {a: "حَمِيد",r: "Hameed",u: "تعریف کے لائق",u_ro: "Taareef ke laayaq",u_hi: "तारीफ़ के लायक़",u_en: "Praiseworthy",m: "حَمِيدٌ",t: "تعریف والا",t_ro: "Taareef wala",t_hi: "तारीफ़ वाला",t_en: "Full of praise"},
        {a: "قَالُوا",r: "Qaaloo",u: "انہوں نے کہا",u_ro: "Unhon ne kaha",u_hi: "उन्होंने कहा",u_en: "They said",m: "قَالُوا",t: "کہنا",t_ro: "Kehna",t_hi: "कहना",t_en: "Said"},
        {a: "حَزَن",r: "Hazan",u: "غم",u_ro: "Gham",u_hi: "ग़म",u_en: "Grief, sorrow",m: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",t: "غم",t_ro: "Gham",t_hi: "ग़म",t_en: "Sorrow"},
        {a: "الشَّكُور",r: "Ash-Shakoor",u: "نیک اعمال کا قدردان",u_ro: "Nek a'maal ka qadrdaan",u_hi: "नेक अमल का क़दरदान",u_en: "Most Appreciative",m: "إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ",t: "قدردانی کرنے والا",t_ro: "Qadrdaani karne wala",t_hi: "क़दरदानी करने वाला",t_en: "Rewards abundantly"},
        {a: "تَرَكَ",r: "Taraka",u: "چھوڑا",u_ro: "Chhoda",u_hi: "छोड़ा",u_en: "He left",m: "تَرَكَ",t: "چھوڑنا",t_ro: "Chhodna",t_hi: "छोड़ना",t_en: "Left"},
        {a: "أَجَل",r: "Ajal",u: "مدت، موت کا وقت",u_ro: "Muddat, maut ka waqt",u_hi: "मुद्दत, मौत का वक़्त",u_en: "Term, appointed time",m: "فَإِذَا جَاءَ أَجَلُهُمْ",t: "مقررہ مدت",t_ro: "Muqarrara muddat",t_hi: "मुक़र्ररा मुद्दत",t_en: "Fixed term"}
    ] },
    { day: 56, words: [
        {a: "مَدِينَة",r: "Madeenah",u: "شہر",u_ro: "Shehar",u_hi: "शहर",u_en: "City",m: "الْمَدِينَةَ",t: "شہر",t_ro: "Shehar",t_hi: "शहर",t_en: "City"},
        {a: "رَجُل",r: "Rajul",u: "مرد",u_ro: "Mard",u_hi: "मर्द",u_en: "Man",m: "الرَّجُلَ",t: "مرد",t_ro: "Mard",t_hi: "मर्द",t_en: "Man"},
        {a: "ضَلَال",r: "Dalaal",u: "گمراہی",u_ro: "Gumraahi",u_hi: "गुमराही",u_en: "Misguidance",m: "الضَّلَالُ",t: "گمراہی",t_ro: "Gumraahi",t_hi: "गुमराही",t_en: "Straying"},
        {a: "جَمِيع",r: "Jamee'",u: "سب",u_ro: "Sab",u_hi: "सब",u_en: "All",m: "جَمِيع",t: "تمام",t_ro: "Tamaam",t_hi: "तमाम",t_en: "Entire"},
        {a: "آيَة",r: "Aayah",u: "آیت",u_ro: "Aayat",u_hi: "आयत",u_en: "Verse, sign",m: "الْآيَةُ",t: "آیت",t_ro: "Aayat",t_hi: "आयत",t_en: "Verse"},
        {a: "عُرْجُون",r: "'Urjoon",u: "کھجور کا پرانا گچھا",u_ro: "Khajoor ka puraana guchha",u_hi: "खजूर का पुराना गुच्छा",u_en: "Old date bunch",m: "كَالْعُرْجُونِ الْقَدِيمِ",t: "سوکھا گچھا",t_ro: "Sookha guchha",t_hi: "सूखा गुच्छा",t_en: "Shrivelled cluster"},
        {a: "فُلْك",r: "Fulk",u: "کشتی",u_ro: "Kashti",u_hi: "कश्ती",u_en: "Ship",m: "الْفُلْكَ",t: "کشتی",t_ro: "Kashti",t_hi: "कश्ती",t_en: "Ship"},
        {a: "صَرَخَ",r: "Sarakha",u: "چیخا، پکارا",u_ro: "Cheekha, pukaara",u_hi: "चीख़ा, पुकारा",u_en: "He cried out",m: "وَهُمْ يَصْطَرِخُونَ فِيهَا",t: "چیخنا",t_ro: "Cheekhna",t_hi: "चीख़ना",t_en: "To cry"},
        {a: "فَم",r: "Fam",u: "منہ",u_ro: "Munh",u_hi: "मुँह",u_en: "Mouth",m: "الْفَمُ",t: "منہ",t_ro: "Munh",t_hi: "मुँह",t_en: "Mouth"},
        {a: "أَرْجُل",r: "Arjul",u: "پاؤں",u_ro: "Paaon",u_hi: "पाँव",u_en: "Feet, legs",m: "الْأَرْجُلُ",t: "پاؤں",t_ro: "Paaon",t_hi: "पाँव",t_en: "Feet"}
    ] },
    { day: 57, words: [
        {a: "يَعْقِلُونَ",r: "Ya'qiloon",u: "وہ سمجھتے ہیں",u_ro: "Woh samajhte hain",u_hi: "वे समझते हैं",u_en: "They understand",m: "يَعْقِلُونَ",t: "سمجھنا",t_ro: "Samajhna",t_hi: "समझना",t_en: "Use reason"},
        {a: "أَنَعَام",r: "An'aam",u: "مویشی",u_ro: "Maweshi",u_hi: "मवेशी",u_en: "Livestock",m: "الْأَنْعَامَ",t: "مویشی",t_ro: "Maweshi",t_hi: "मवेशी",t_en: "Livestock"},
        {a: "ضَرَبَ",r: "Daraba",u: "مارا",u_ro: "Maara",u_hi: "मारा",u_en: "He struck",m: "ضَرَبَ",t: "مارنا",t_ro: "Maarna",t_hi: "मारना",t_en: "Struck"},
        {a: "نَسِيَ",r: "Nasiya",u: "بھول گیا",u_ro: "Bhool gaya",u_hi: "भूल गया",u_en: "He forgot",m: "نَسِيَ",t: "بھولنا",t_ro: "Bhoolna",t_hi: "भूलना",t_en: "Forgot"},
        {a: "عِظَام",r: "'Izaam",u: "ہڈیاں",u_ro: "Haddiyan",u_hi: "हड्डियाँ",u_en: "Bones",m: "مَنْ يُحْيِي الْعِظَامَ",t: "ہڈیاں",t_ro: "Haddiyan",t_hi: "हड्डियाँ",t_en: "Bones"},
        {a: "أَرَادَ",r: "Araada",u: "ارادہ کیا",u_ro: "Iraada kiya",u_hi: "इरादा किया",u_en: "He intended",m: "أَرَادَ",t: "چاہنا",t_ro: "Chaahna",t_hi: "चाहना",t_en: "Intended"},
        {a: "كُنْ",r: "Kun",u: "ہو جا",u_ro: "Ho ja",u_hi: "हो जा",u_en: "Be!",m: "كُنْ",t: "ہونا",t_ro: "Hona",t_hi: "होना",t_en: "Be"},
        {a: "نَعَمْ",r: "Na'am",u: "ہاں",u_ro: "Haan",u_hi: "हाँ",u_en: "Yes",m: "نَعَمْ",t: "ہاں",t_ro: "Haan",t_hi: "हाँ",t_en: "Yes"},
        {a: "بَيْض",r: "Bayd",u: "انڈے",u_ro: "Ande",u_hi: "अंडे",u_en: "Eggs",m: "بَيْضٌ مَّكْنُونٌ",t: "محفوظ انڈے",t_ro: "Mehfooz ande",t_hi: "महफ़ूज़ अंडे",t_en: "Guarded eggs"},
        {a: "إِسْحَاق",r: "Is-haaq",u: "اسحاق علیہ السلام",u_ro: "Ishaaq alaihis-salaam",u_hi: "इसहाक़ अलैहिस्सलाम",u_en: "Ishaq (Isaac)",m: "إِسْحَاقُ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"}
    ] },
    { day: 58, words: [
        {a: "مِنَ",r: "Mina",u: "میں سے",u_ro: "Mein se",u_hi: "में से",u_en: "From, among",m: "مِنَ الصَّالِحِينَ",t: "نیکی",t_ro: "Neki",t_hi: "नेकी",t_en: "Goodness"},
        {a: "إِلْيَاس",r: "Ilyaas",u: "الیاس علیہ السلام",u_ro: "Ilyaas alaihis-salaam",u_hi: "इल्यास अलैहिस्सलाम",u_en: "Ilyas (Elias)",m: "وَإِنَّ إِلْيَاسَ لَمِنَ الْمُرْسَلِينَ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "لُوط",r: "Loot",u: "لوط علیہ السلام",u_ro: "Loot alaihis-salaam",u_hi: "लूत अलैहिस्सलाम",u_en: "Lut (Lot)",m: "لُوطٌ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "يُونُس",r: "Yoonus",u: "یونس علیہ السلام",u_ro: "Yoonus alaihis-salaam",u_hi: "यूनुस अलैहिस्सलाम",u_en: "Yunus (Jonah)",m: "يُونُسُ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "حُوت",r: "Hoot",u: "مچھلی",u_ro: "Machhli",u_hi: "मछली",u_en: "Fish, whale",m: "الْحُوتَ",t: "مچھلی",t_ro: "Machhli",t_hi: "मछली",t_en: "Fish"},
        {a: "مِائَة",r: "Mi'ah",u: "سو",u_ro: "Sau",u_hi: "सौ",u_en: "Hundred",m: "مِائَةِ أَلْفٍ",t: "سو",t_ro: "Sau",t_hi: "सौ",t_en: "Hundred"},
        {a: "أَوْ",r: "Aw",u: "یا",u_ro: "Ya",u_hi: "या",u_en: "Or",m: "أَوْ",t: "یا",t_ro: "Ya",t_hi: "या",t_en: "Or"},
        {a: "دَاوُود",r: "Daawood",u: "داؤد علیہ السلام",u_ro: "Dawood alaihis-salaam",u_hi: "दाऊद अलैहिस्सलाम",u_en: "Dawud (David)",m: "دَاوُودُ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "الْيَسَع",r: "Al-Yasa'",u: "الیسع علیہ السلام",u_ro: "Al-Yasa alaihis-salaam",u_hi: "अल-यसअ अलैहिस्सलाम",u_en: "Alyasa (Elisha)",m: "وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"},
        {a: "وَذَا",r: "Wa dhaa",u: "اور والا",u_ro: "Aur wala",u_hi: "और वाला",u_en: "And owner of",m: "وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"}
    ] },
    { day: 59, words: [
        {a: "طِين",r: "Teen",u: "مٹی",u_ro: "Mitti",u_hi: "मिट्टी",u_en: "Clay",m: "الطِّينُ",t: "مٹی",t_ro: "Mitti",t_hi: "मिट्टी",t_en: "Clay"},
        {a: "إِخْلَاص",r: "Ikhlaas",u: "اخلاص",u_ro: "Ikhlaas",u_hi: "इख़लास",u_en: "Sincerity",m: "الْإِخْلَاصُ",t: "اخلاص",t_ro: "Ikhlaas",t_hi: "इख़लास",t_en: "Ikhlas"},
        {a: "أَخْلَصَ",r: "Akhlasa",u: "خالص کیا",u_ro: "Khaalis kiya",u_hi: "ख़ालिस किया",u_en: "He made sincere",m: "وَأَخْلَصَ لِرَبِّهِ",t: "خالص کرنا",t_ro: "Khaalis karna",t_hi: "ख़ालिस करना",t_en: "To purify"},
        {a: "خَالِص",r: "Khaalis",u: "خالص، صاف",u_ro: "Khaalis, saaf",u_hi: "ख़ालिस, साफ़",u_en: "Pure",m: "لَبَنًا خَالِصًا",t: "خالص",t_ro: "Khaalis",t_hi: "ख़ालिस",t_en: "Pure"},
        {a: "خُسْرَان",r: "Khusraan",u: "نقصان",u_ro: "Nuqsaan",u_hi: "नुक़सान",u_en: "Loss",m: "الْخُسْرَانُ",t: "نقصان",t_ro: "Nuqsaan",t_hi: "नुक़सान",t_en: "Loss"},
        {a: "أَسْرَفَ",r: "Asrafa",u: "حد سے بڑھا",u_ro: "Had se badha",u_hi: "हद से बढ़ा",u_en: "He exceeded limits",m: "الَّذِينَ أَسْرَفُوا",t: "حد سے بڑھنا",t_ro: "Had se badhna",t_hi: "हद से बढ़ना",t_en: "To overstep"},
        {a: "نَجَاة",r: "Najaah",u: "نجات",u_ro: "Najaat",u_hi: "नजात",u_en: "Salvation, deliverance",m: "النَّجَاةُ",t: "نجات",t_ro: "Najaat",t_hi: "नजात",t_en: "Deliverance"},
        {a: "حَكَمَ",r: "Hakama",u: "فیصلہ کیا",u_ro: "Faisla kiya",u_hi: "फ़ैसला किया",u_en: "He judged",m: "حَكَمَ",t: "فیصلہ",t_ro: "Faisla",t_hi: "फ़ैसला",t_en: "Judged"},
        {a: "حَيّ",r: "Hayy",u: "ہمیشہ زندہ",u_ro: "Hamesha zinda",u_hi: "हमेशा ज़िंदा",u_en: "Ever-Living",m: "الْحَيُّ",t: "زندہ",t_ro: "Zinda",t_hi: "ज़िंदा",t_en: "Alive"},
        {a: "نُطْفَة",r: "Nutfa",u: "نطفہ، قطرہ",u_ro: "Nutfa, qatra",u_hi: "नुत्फ़ा, क़तरा",u_en: "Drop (semen)",m: "مِن نُّطْفَةٍ أَمْشَاجٍ",t: "نطفہ",t_ro: "Nutfa",t_hi: "नुत्फ़ा",t_en: "Drop"}
    ] },
    { day: 60, words: [
        {a: "عَلَقَة",r: "'Alaqah",u: "جما ہوا خون",u_ro: "Jama hua khoon",u_hi: "जमा हुआ ख़ून",u_en: "Clot",m: "خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ",t: "جما خون",t_ro: "Jama khoon",t_hi: "जमा ख़ून",t_en: "Clot"},
        {a: "طِفْل",r: "Tifl",u: "بچہ",u_ro: "Bachcha",u_hi: "बच्चा",u_en: "Child",m: "الطِّفْلُ",t: "بچہ",t_ro: "Bachcha",t_hi: "बच्चा",t_en: "Child"},
        {a: "أَجْر",r: "Ajr",u: "اجر",u_ro: "Ajr",u_hi: "अज्र",u_en: "Reward",m: "الْأَجْرُ",t: "ثواب",t_ro: "Sawaab",t_hi: "सवाब",t_en: "Reward"},
        {a: "جِلْد",r: "Jild",u: "کھال",u_ro: "Khaal",u_hi: "खाल",u_en: "Skin",m: "الْجِلْدُ",t: "کھال",t_ro: "Khaal",t_hi: "खाल",t_en: "Skin"},
        {a: "تَخَافُوا",r: "Takhaafoo",u: "ڈرو مت",u_ro: "Daro mat",u_hi: "डरो मत",u_en: "Do not fear",m: "تَخَافُوا",t: "ڈرنا",t_ro: "Darna",t_hi: "डरना",t_en: "Do not fear"},
        {a: "أَلْحَدَ",r: "Alhada",u: "الحاد کیا، کج روی کی",u_ro: "Ilhaad kiya, kajravi ki",u_hi: "इलहाद किया, कजरवी की",u_en: "He deviated",m: "يُلْحِدُونَ فِي آيَاتِهِ",t: "الحاد",t_ro: "Ilhaad",t_hi: "इलहाद",t_en: "Deviation"},
        {a: "خَلْفَ",r: "Khalfa",u: "پیچھے",u_ro: "Peechhe",u_hi: "पीछे",u_en: "Behind",m: "خَلْفَ",t: "پیچھے",t_ro: "Peechhe",t_hi: "पीछे",t_en: "Behind"},
        {a: "سَعِير",r: "Sa'eer",u: "دہکتی آگ",u_ro: "Dahakti aag",u_hi: "दहकती आग",u_en: "Flaming Fire",m: "السَّعِيرُ",t: "آگ",t_ro: "Aag",t_hi: "आग",t_en: "Blazing fire"},
        {a: "تَوْبَة",r: "Tawbah",u: "توبہ",u_ro: "Tauba",u_hi: "तौबा",u_en: "Repentance",m: "التَّوْبَةُ",t: "توبہ",t_ro: "Tauba",t_hi: "तौबा",t_en: "Repentance"},
        {a: "بَثَّ",r: "Baththa",u: "پھیلایا",u_ro: "Phailaaya",u_hi: "फैलाया",u_en: "He spread",m: "وَبَثَّ فِيهَا مِن كُلِّ دَابَّةٍ",t: "پھیلانا",t_ro: "Phailaana",t_hi: "फैलाना",t_en: "To spread"}
    ] },
    { day: 61, words: [
        {a: "شَاوَرَ",r: "Shaawara",u: "مشورہ کیا",u_ro: "Mashwara kiya",u_hi: "मशवरा किया",u_en: "He consulted",m: "وَشَاوِرْهُمْ فِي الْأَمْرِ",t: "مشورہ",t_ro: "Mashwara",t_hi: "मशवरा",t_en: "Consultation"},
        {a: "غَفَرَ",r: "Ghafara",u: "بخش دیا",u_ro: "Bakhsh diya",u_hi: "बख़्श दिया",u_en: "He forgave",m: "غَفَرَ",t: "بخشنا",t_ro: "Bakhshna",t_hi: "बख़्शना",t_en: "Forgave"},
        {a: "زَقُّوم",r: "Zaqqoom",u: "زقوم",u_ro: "Zaqqoom",u_hi: "ज़क़्क़ूम",u_en: "Zaqqum (tree of Hell)",m: "الزَّقُّومِ",t: "درخت",t_ro: "Darakht",t_hi: "दरख़्त",t_en: "Tree of Hell"},
        {a: "حُور",r: "Hoor",u: "حوریں",u_ro: "Hoorein",u_hi: "हूरें",u_en: "Houris",m: "حُورٌ",t: "حور",t_ro: "Hoor",t_hi: "हूर",t_en: "Maidens of Paradise"},
        {a: "اسْتَقَامَ",r: "Istaqaama",u: "سیدھا رہا، قائم رہا",u_ro: "Seedha raha, qaaim raha",u_hi: "सीधा रहा, क़ायम रहा",u_en: "He remained steadfast",m: "ثُمَّ اسْتَقَامُوا",t: "قائم رہنا",t_ro: "Qaaim rehna",t_hi: "क़ायम रहना",t_en: "Steadfastness"},
        {a: "ثَلَاثُون",r: "Thalaathoon",u: "تیس",u_ro: "Tees",u_hi: "तीस",u_en: "Thirty",m: "ثَلَاثِينَ لَيْلَةً",t: "تیس",t_ro: "Tees",t_hi: "तीस",t_en: "Thirty"},
        {a: "أَنْذَرَ",r: "Andhara",u: "ڈرایا",u_ro: "Daraaya",u_hi: "डराया",u_en: "He warned",m: "أَنْذَرَ",t: "ڈرانا",t_ro: "Daraana",t_hi: "डराना",t_en: "Warned"},
        {a: "كَفَرُوا",r: "Kafaroo",u: "انہوں نے انکار کیا",u_ro: "Unhon ne inkaar kiya",u_hi: "उन्होंने इनकार किया",u_en: "They disbelieved",m: "كَفَرُوا",t: "کفر",t_ro: "Kufr",t_hi: "कुफ़्र",t_en: "Disbelieved"},
        {a: "صَدَّ",r: "Sadda",u: "روکا، ہٹایا",u_ro: "Roka, hataaya",u_hi: "रोका, हटाया",u_en: "He turned away",m: "صَدُّوا عَن سَبِيلِ اللَّهِ",t: "روکنا",t_ro: "Rokna",t_hi: "रोकना",t_en: "To turn away"},
        {a: "أَضَلَّ",r: "Adalla",u: "گمراہ کیا",u_ro: "Gumraah kiya",u_hi: "गुमराह किया",u_en: "He misguided",m: "أَضَلَّ",t: "گمراہ",t_ro: "Gumraah",t_hi: "गुमराह",t_en: "Misled"}
    ] },
    { day: 62, words: [
        {a: "خَمْر",r: "Khamr",u: "شراب (نشہ آور)",u_ro: "Sharaab (nasha-aawar)",u_hi: "शराब (नशा)",u_en: "Intoxicant, wine",m: "إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ",t: "نشہ آور",t_ro: "Nasha-aawar",t_hi: "नशा देने वाला",t_en: "Intoxicant"},
        {a: "عَسَل",r: "Asal",u: "شہد",u_ro: "Shahad",u_hi: "शहद",u_en: "Honey",m: "الْعَسَلَ",t: "شہد",t_ro: "Shahad",t_hi: "शहद",t_en: "Honey"},
        {a: "ثَمَرَة",r: "Thamarah",u: "پھل",u_ro: "Phal",u_hi: "फल",u_en: "Fruit",m: "الثَّمَرَةُ",t: "پھل",t_ro: "Phal",t_hi: "फल",t_en: "Fruit"},
        {a: "إِلَهَ",r: "Ilaaha",u: "معبود",u_ro: "Maabood",u_hi: "माबूद",u_en: "God, deity",m: "لَا إِلَهَ إِلَّا اللَّهُ",t: "کلمہ",t_ro: "Kalma",t_hi: "कलमा",t_en: "The Shahadah"},
        {a: "أَصَمّ",r: "Asamm",u: "بہرا",u_ro: "Behra",u_hi: "बहरा",u_en: "Deaf",m: "صُمٌّ بُكْمٌ عُمْيٌ",t: "بہرا",t_ro: "Behra",t_hi: "बहरा",t_en: "Deaf"},
        {a: "تَدَبَّرَ",r: "Tadabbara",u: "غور کیا، تدبر کیا",u_ro: "Ghaur kiya, tadabbur kiya",u_hi: "ग़ौर किया, तदब्बुर किया",u_en: "He pondered",m: "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ",t: "غور کرنا",t_ro: "Ghaur karna",t_hi: "ग़ौर करना",t_en: "To ponder"},
        {a: "يَد",r: "Yad",u: "ہاتھ",u_ro: "Haath",u_hi: "हाथ",u_en: "Hand",m: "الْيَدُ",t: "ہاتھ",t_ro: "Haath",t_hi: "हाथ",t_en: "Hand"},
        {a: "أَعْمَى",r: "A'maa",u: "اندھا",u_ro: "Andha",u_hi: "अंधा",u_en: "Blind",m: "أَن جَاءَهُ الْأَعْمَىٰ",t: "اندھا",t_ro: "Andha",t_hi: "अंधा",t_en: "Blind"},
        {a: "أَعْرَج",r: "A'raj",u: "لنگڑا",u_ro: "Langda",u_hi: "लंगड़ा",u_en: "Lame",m: "وَلَا عَلَى الْأَعْرَجِ حَرَجٌ",t: "لنگڑا",t_ro: "Langda",t_hi: "लंगड़ा",t_en: "Lame"},
        {a: "مَرِيض",r: "Mareed",u: "بیمار",u_ro: "Beemaar",u_hi: "बीमार",u_en: "Sick",m: "وَمَن كَانَ مَرِيضًا",t: "بیمار",t_ro: "Beemaar",t_hi: "बीमार",t_en: "Sick"}
    ] },
    { day: 63, words: [
        {a: "تَحْتَ",r: "Tahta",u: "نیچے",u_ro: "Neeche",u_hi: "नीचे",u_en: "Beneath",m: "تَحْتَ",t: "نیچے",t_ro: "Neeche",t_hi: "नीचे",t_en: "Below"},
        {a: "إِنَّمَا",r: "Innamaa",u: "بس",u_ro: "Bas",u_hi: "बस",u_en: "Only, indeed",m: "إِنَّمَا",t: "صرف",t_ro: "Sirf",t_hi: "सिर्फ़",t_en: "Only"},
        {a: "بَيْنَ",r: "Bayna",u: "درمیان",u_ro: "Darmiyaan",u_hi: "दरमियान",u_en: "Between",m: "بَيْنَ",t: "بیچ",t_ro: "Beech",t_hi: "बीच",t_en: "Among"},
        {a: "اتَّقُوا",r: "Ittaqoo",u: "ڈرو",u_ro: "Daro",u_hi: "डरो",u_en: "Be mindful of Allah",m: "اتَّقُوا",t: "بچنا",t_ro: "Bachna",t_hi: "बचना",t_en: "Fear Allah"},
        {a: "اغْتَابَ",r: "Ightaaba",u: "غیبت کی",u_ro: "Gheebat ki",u_hi: "ग़ीबत की",u_en: "He backbit",m: "وَلَا يَغْتَبْ بَعْضُكُمْ بَعْضًا",t: "غیبت",t_ro: "Gheebat",t_hi: "ग़ीबत",t_en: "Backbiting"},
        {a: "إِيمَان",r: "Eemaan",u: "ایمان",u_ro: "Imaan",u_hi: "ईमान",u_en: "Faith",m: "الْإِيمَانُ",t: "ایمان",t_ro: "Imaan",t_hi: "ईमान",t_en: "Faith"},
        {a: "يَعْلَمُ",r: "Ya'lamu",u: "وہ جانتا ہے",u_ro: "Woh jaanta hai",u_hi: "वह जानता है",u_en: "He knows",m: "يَعْلَمُ",t: "جاننا",t_ro: "Jaanna",t_hi: "जानना",t_en: "Knows"},
        {a: "بَصِير",r: "Baseer",u: "سب دیکھنے والا",u_ro: "Sab dekhne wala",u_hi: "सब देखने वाला",u_en: "All-Seeing",m: "هُوَ الْبَصِيرُ",t: "دیکھنے والا",t_ro: "Dekhne wala",t_hi: "देखने वाला",t_en: "Seer"},
        {a: "رَقِيب",r: "Raqeeb",u: "نگرانی کرنے والا",u_ro: "Nigraani karne wala",u_hi: "निगरानी करने वाला",u_en: "Watcher",m: "مَا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ",t: "نگہبان",t_ro: "Nigahbaan",t_hi: "निगहबान",t_en: "Observer"},
        {a: "عَتِيد",r: "'Ateed",u: "تیار",u_ro: "Tayyaar",u_hi: "तैयार",u_en: "Ready, prepared",m: "رَقِيبٌ عَتِيدٌ",t: "تیار",t_ro: "Tayyaar",t_hi: "तैयार",t_en: "Prepared"}
    ] },
    { day: 64, words: [
        {a: "خَشِيَ",r: "Khashiya",u: "ڈرا",u_ro: "Dara",u_hi: "डरा",u_en: "He feared",m: "خَشِيَ",t: "ڈرنا",t_ro: "Darna",t_hi: "डरना",t_en: "Feared"},
        {a: "قَلْب",r: "Qalb",u: "دل",u_ro: "Dil",u_hi: "दिल",u_en: "Heart",m: "الْقَلْبُ",t: "دل",t_ro: "Dil",t_hi: "दिल",t_en: "Heart"},
        {a: "سِتَّة",r: "Sittah",u: "چھ",u_ro: "Chhe",u_hi: "छः",u_en: "Six",m: "فِي سِتَّةِ أَيَّامٍ",t: "چھ",t_ro: "Chhe",t_hi: "छः",t_en: "Six"},
        {a: "سُجُود",r: "Sujood",u: "سجدہ",u_ro: "Sajda",u_hi: "सज्दा",u_en: "Prostration",m: "السُّجُودُ",t: "سجدہ",t_ro: "Sajda",t_hi: "सज्दा",t_en: "Sujood"},
        {a: "حَشْر",r: "Hashr",u: "جمع کیا جانا",u_ro: "Jama kiya jaana",u_hi: "जमा किया जाना",u_en: "Gathering",m: "الْحَشْرُ",t: "جمع",t_ro: "Jama",t_hi: "जमा",t_en: "Gathering"},
        {a: "رِزْق",r: "Rizq",u: "رزق، روزی",u_ro: "Rizq, rozi",u_hi: "रिज़्क़, रोज़ी",u_en: "Provision, sustenance",m: "وَفِي السَّمَاءِ رِزْقُكُمْ",t: "رزق",t_ro: "Rizq",t_hi: "रिज़्क़",t_en: "Sustenance"},
        {a: "ضَيْف",r: "Dayf",u: "مہمان",u_ro: "Mehmaan",u_hi: "मेहमान",u_en: "Guest",m: "هَلْ أَتَاكَ حَدِيثُ ضَيْفِ إِبْرَاهِيمَ",t: "مہمان",t_ro: "Mehmaan",t_hi: "मेहमान",t_en: "Guest"},
        {a: "عِجْل",r: "Ijil",u: "بچھڑا",u_ro: "Bachhda",u_hi: "बछड़ा",u_en: "Calf",m: "الْعِجْلَ",t: "بچھڑا",t_ro: "Bachhda",t_hi: "बछड़ा",t_en: "Calf"},
        {a: "رَزَّاق",r: "Razzaaq",u: "رزق دینے والا",u_ro: "Rizq dene wala",u_hi: "रिज़्क़ देने वाला",u_en: "Provider",m: "الرَّزَّاقُ",t: "روزی دینے والا",t_ro: "Rozi dene wala",t_hi: "रोज़ी देने वाला",t_en: "Giver of sustenance"},
        {a: "بَحْر",r: "Bahr",u: "سمندر",u_ro: "Samundar",u_hi: "समुंदर",u_en: "Sea",m: "الْبَحْرُ",t: "سمندر",t_ro: "Samundar",t_hi: "समुंदर",t_en: "Sea"}
    ] },
    { day: 65, words: [
        {a: "غِلْمَان",r: "Ghilmaan",u: "جنت کے نوجوان خدمت گار",u_ro: "Jannat ke naujawaan khidmatgaar",u_hi: "जन्नत के नौजवान ख़िदमतगार",u_en: "Youths of Paradise",m: "وَيَطُوفُ عَلَيْهِمْ غِلْمَانٌ",t: "خدمت گار",t_ro: "Khidmatgaar",t_hi: "ख़िदमतगार",t_en: "Servants"},
        {a: "الْبَرّ",r: "Al-Barr",u: "بھلائی کا سرچشمہ",u_ro: "Bhalaai ka sarchashma",u_hi: "भलाई का स्रोत",u_en: "Source of all goodness",m: "إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ",t: "نیکی کرنے والا",t_ro: "Neki karne wala",t_hi: "नेकी करने वाला",t_en: "Doer of good"},
        {a: "نَجْم",r: "Najm",u: "ستارہ",u_ro: "Sitaara",u_hi: "सितारा",u_en: "Star",m: "النَّجْمُ",t: "ستارہ",t_ro: "Sitaara",t_hi: "सितारा",t_en: "Star"},
        {a: "ضَلَّ",r: "Dalla",u: "گمراہ ہوا",u_ro: "Gumraah hua",u_hi: "गुमराह हुआ",u_en: "He went astray",m: "ضَلَّ",t: "گمراہ",t_ro: "Gumraah",t_hi: "गुमराह",t_en: "Went astray"},
        {a: "صَاحِب",r: "Saahib",u: "ساتھی",u_ro: "Saathi",u_hi: "साथी",u_en: "Companion",m: "الصَّاحِبُ",t: "ساتھی",t_ro: "Saathi",t_hi: "साथी",t_en: "Companion"},
        {a: "وَحْي",r: "Wahy",u: "وحی",u_ro: "Wahi",u_hi: "वही",u_en: "Revelation",m: "الْوَحْيُ",t: "وحی",t_ro: "Wahi",t_hi: "वही",t_en: "Revelation"},
        {a: "أَوْحَى",r: "Awhaa",u: "وحی کی، اشارہ کیا",u_ro: "Wahi ki, ishaara kiya",u_hi: "वही की, इशारा किया",u_en: "He revealed",m: "وَكَذَٰلِكَ أَوْحَيْنَا إِلَيْكَ",t: "وحی کرنا",t_ro: "Wahi karna",t_hi: "वही करना",t_en: "To reveal"},
        {a: "كَذَبَ",r: "Kadhaba",u: "جھوٹ بولا",u_ro: "Jhoot bola",u_hi: "झूठ बोला",u_en: "He lied",m: "كَذَبَ",t: "جھوٹ",t_ro: "Jhoot",t_hi: "झूठ",t_en: "Lied"},
        {a: "فُؤَاد",r: "Fu'aad",u: "دل",u_ro: "Dil",u_hi: "दिल",u_en: "Heart",m: "الْفُؤَادُ",t: "دل",t_ro: "Dil",t_hi: "दिल",t_en: "Heart"},
        {a: "رَأَى",r: "Ra'aa",u: "دیکھا",u_ro: "Dekha",u_hi: "देखा",u_en: "He saw",m: "رَأَى",t: "دیکھنا",t_ro: "Dekhna",t_hi: "देखना",t_en: "Saw"}
    ] },
    { day: 66, words: [
        {a: "عِندَ",r: "Inda",u: "پاس",u_ro: "Paas",u_hi: "पास",u_en: "With, near",m: "عِندَ",t: "پاس",t_ro: "Paas",t_hi: "पास",t_en: "Near"},
        {a: "سِدْرَة",r: "Sidrah",u: "بیری کا درخت",u_ro: "Beri ka darakht",u_hi: "बेर का दरख़्त",u_en: "Lote tree",m: "عِندَ سِدْرَةِ الْمُنتَهَىٰ",t: "بیری کا درخت",t_ro: "Beri ka darakht",t_hi: "बेर का दरख़्त",t_en: "Lote tree"},
        {a: "بَصَر",r: "Basar",u: "نظر",u_ro: "Nazar",u_hi: "नज़र",u_en: "Sight",m: "الْبَصَرُ",t: "دیکھنا",t_ro: "Dekhna",t_hi: "देखना",t_en: "Sight"},
        {a: "سَعَى",r: "Sa'aa",u: "کوشش کی، دوڑا",u_ro: "Koshish ki, dauda",u_hi: "कोशिश की, दौड़ा",u_en: "He strove",m: "إِنَّ سَعْيَكُمْ لَشَتَّىٰ",t: "کوشش",t_ro: "Koshish",t_hi: "कोशिश",t_en: "Striving"},
        {a: "أَمَاتَ",r: "Amaata",u: "موت دی",u_ro: "Maut di",u_hi: "मौत दी",u_en: "He caused death",m: "أَمَاتَ",t: "موت",t_ro: "Maut",t_hi: "मौत",t_en: "Caused death"},
        {a: "أَحْيَا",r: "Ahyaa",u: "زندہ کیا",u_ro: "Zinda kiya",u_hi: "ज़िंदा किया",u_en: "He gave life",m: "أَحْيَا",t: "زندگی",t_ro: "Zindagi",t_hi: "ज़िंदगी",t_en: "Gave life"},
        {a: "أَهْلَكَ",r: "Ahlaka",u: "ہلاک کیا",u_ro: "Halaak kiya",u_hi: "हलाक किया",u_en: "He destroyed",m: "أَهْلَكَ",t: "ہلاک",t_ro: "Halaak",t_hi: "हलाक",t_en: "Destroyed"},
        {a: "سَاعَة",r: "Saa'ah",u: "گھڑی",u_ro: "Ghadi",u_hi: "घड़ी",u_en: "The Hour",m: "السَّاعَةُ",t: "وقت",t_ro: "Waqt",t_hi: "वक़्त",t_en: "The appointed time"},
        {a: "قُرْآن",r: "Qur'aan",u: "قرآن",u_ro: "Quraan",u_hi: "क़ुरआन",u_en: "Quran",m: "الْقُرْآنُ",t: "قرآن",t_ro: "Quraan",t_hi: "क़ुरआन",t_en: "Quran"},
        {a: "رِيح",r: "Reeh",u: "ہوا",u_ro: "Hawa",u_hi: "हवा",u_en: "Wind",m: "الرِّيحُ",t: "ہوا",t_ro: "Hawa",t_hi: "हवा",t_en: "Wind"}
    ] },
    { day: 67, words: [
        {a: "سَحَر",r: "Sahar",u: "سحر، آخری رات",u_ro: "Sahar, aakhri raat",u_hi: "सहर, आख़िरी रात",u_en: "Pre-dawn",m: "بِالْأَسْحَارِ",t: "سحر",t_ro: "Sahar",t_hi: "सहर",t_en: "Pre-dawn"},
        {a: "مَوْعِد",r: "Maw'id",u: "مقررہ وعدہ گاہ",u_ro: "Muqarrara waada-gaah",u_hi: "मुक़र्ररा वादा-गाह",u_en: "Appointed place",m: "مَوْعِدُكُمْ يَوْمُ الزِّينَةِ",t: "مقررہ وقت",t_ro: "Muqarrara waqt",t_hi: "मुक़र्ररा वक़्त",t_en: "Appointed time"},
        {a: "نَهْر",r: "Nahr",u: "نہر",u_ro: "Nahar",u_hi: "नहर",u_en: "River",m: "النَّهْرُ",t: "نہر",t_ro: "Nahar",t_hi: "नहर",t_en: "River"},
        {a: "صِدْق",r: "Sidq",u: "سچائی",u_ro: "Sachchai",u_hi: "सच्चाई",u_en: "Truthfulness",m: "فِي مَقْعَدِ صِدْقٍ",t: "سچائی",t_ro: "Sachchai",t_hi: "सच्चाई",t_en: "Truth"},
        {a: "الْمُقْتَدِر",r: "Al-Muqtadir",u: "پوری قدرت والا",u_ro: "Poori qudrat wala",u_hi: "पूरी क़ुदरत वाला",u_en: "Omnipotent",m: "عِندَ مَلِيكٍ مُّقْتَدِرٍ",t: "قدرت والا",t_ro: "Qudrat wala",t_hi: "क़ुदरत वाला",t_en: "All-Powerful"},
        {a: "رَفَعَ",r: "Rafa'a",u: "بلند کیا",u_ro: "Buland kiya",u_hi: "बुलंद किया",u_en: "He raised",m: "رَفَعَ",t: "بلند",t_ro: "Buland",t_hi: "बुलंद",t_en: "Raised"},
        {a: "مِيزَان",r: "Meezaan",u: "ترازو",u_ro: "Taraazu",u_hi: "तराज़ू",u_en: "Scale",m: "الْمِيزَانَ",t: "ترازو",t_ro: "Taraazu",t_hi: "तराज़ू",t_en: "Scale"},
        {a: "وَزْن",r: "Wazn",u: "تولنا، وزن",u_ro: "Tolna, wazan",u_hi: "तोलना, वज़न",u_en: "Weight",m: "وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ",t: "وزن",t_ro: "Wazan",t_hi: "वज़न",t_en: "Weight"},
        {a: "أَيّ",r: "Ayy",u: "کون سا",u_ro: "Kaun sa",u_hi: "कौन सा",u_en: "Which",m: "أَيّ",t: "کون",t_ro: "Kaun",t_hi: "कौन",t_en: "Which"},
        {a: "صَلْصَال",r: "Salsaal",u: "بجتی ہوئی سوکھی مٹی",u_ro: "Bajti hui sookhi mitti",u_hi: "बजती हुई सूखी मिट्टी",u_en: "Dry ringing clay",m: "مِن صَلْصَالٍ كَالْفَخَّارِ",t: "بجنے والی مٹی",t_ro: "Bajne wali mitti",t_hi: "बजने वाली मिट्टी",t_en: "Ringing clay"}
    ] },
    { day: 68, words: [
        {a: "كَ",r: "Ka",u: "جیسا",u_ro: "Jaisa",u_hi: "जैसा",u_en: "Like, as",m: "كَ",t: "جیسا",t_ro: "Jaisa",t_hi: "जैसा",t_en: "Like"},
        {a: "فَخَّار",r: "Fakhkhaar",u: "پکی ہوئی مٹی، ٹھیکری",u_ro: "Pakki hui mitti, theekri",u_hi: "पक्की हुई मिट्टी, ठीकरी",u_en: "Baked clay",m: "كَالْفَخَّارِ",t: "پکی مٹی",t_ro: "Pakki mitti",t_hi: "पक्की मिट्टी",t_en: "Baked clay"},
        {a: "وَجْه",r: "Wajh",u: "چہرہ",u_ro: "Chehra",u_hi: "चेहरा",u_en: "Face",m: "الْوَجْهُ",t: "چہرہ",t_ro: "Chehra",t_hi: "चेहरा",t_en: "Face"},
        {a: "نُحَاس",r: "Nuhaas",u: "تانبا، پگھلا ہوا دھات",u_ro: "Taamba, pighla hua dhaat",u_hi: "तांबा, पिघला हुआ धात",u_en: "Molten copper",m: "يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ",t: "پگھلی دھات",t_ro: "Pighli dhaat",t_hi: "पिघली धात",t_en: "Molten metal"},
        {a: "مُجْرِم",r: "Mujrim",u: "مجرم",u_ro: "Mujrim",u_hi: "मुजरिम",u_en: "Criminal, sinner",m: "الْمُجْرِمُ",t: "گنہگار",t_ro: "Gunahgaar",t_hi: "गुनाहगार",t_en: "Sinner"},
        {a: "خَافَ",r: "Khaafa",u: "ڈرا",u_ro: "Dara",u_hi: "डरा",u_en: "He feared",m: "خَافَ",t: "ڈرنا",t_ro: "Darna",t_hi: "डरना",t_en: "Feared"},
        {a: "إِحْسَان",r: "Ihsaan",u: "احسان",u_ro: "Ehsaan",u_hi: "एहसान",u_en: "Excellence, kindness",m: "الْإِحْسَانُ",t: "نیکی",t_ro: "Neki",t_hi: "नेकी",t_en: "Doing good"},
        {a: "إِلَّا",r: "Illaa",u: "مگر",u_ro: "Magar",u_hi: "मगर",u_en: "Except",m: "إِلَّا",t: "سوائے",t_ro: "Siwaaye",t_hi: "सिवाय",t_en: "Except"},
        {a: "فَاكِهَة",r: "Faakihah",u: "میوہ",u_ro: "Meva",u_hi: "मेवा",u_en: "Fruit",m: "الْفَاكِهَةُ",t: "پھل",t_ro: "Phal",t_hi: "फल",t_en: "Fruit"},
        {a: "رُمَّان",r: "Rummaan",u: "انار",u_ro: "Anaar",u_hi: "अनार",u_en: "Pomegranate",m: "وَنَخْلٌ وَرُمَّانٌ",t: "انار",t_ro: "Anaar",t_hi: "अनार",t_en: "Pomegranate"}
    ] },
    { day: 69, words: [
        {a: "وَاقِعَة",r: "Waaqi'ah",u: "واقع ہونے والی",u_ro: "Waaqe hone wali",u_hi: "वाक़े होने वाली",u_en: "Occurring event",m: "إِذَا وَقَعَتِ الْوَاقِعَةُ",t: "واقعہ",t_ro: "Waaqia",t_hi: "वाक़िआ",t_en: "Event"},
        {a: "وِلْدَان",r: "Wildaan",u: "جنت کے بچے",u_ro: "Jannat ke bachche",u_hi: "जन्नत के बच्चे",u_en: "Children of Paradise",m: "يَطُوفُ عَلَيْهِمْ وِلْدَانٌ مُّخَلَّدُونَ",t: "بچے",t_ro: "Bachche",t_hi: "बच्चे",t_en: "Youths"},
        {a: "حَمِيم",r: "Hameem",u: "کھولتا پانی",u_ro: "Kholta paani",u_hi: "खौलता पानी",u_en: "Boiling water",m: "الْحَمِيمِ",t: "پانی",t_ro: "Paani",t_hi: "पानी",t_en: "Scalding water"},
        {a: "كَانُوا",r: "Kaanoo",u: "وہ تھے",u_ro: "Woh the",u_hi: "वे थे",u_en: "They were",m: "كَانُوا",t: "تھے",t_ro: "The",t_hi: "थे",t_en: "Were"},
        {a: "قَبْلَ",r: "Qabla",u: "پہلے",u_ro: "Pehle",u_hi: "पहले",u_en: "Before",m: "قَبْلَ",t: "سے پہلے",t_ro: "Se pehle",t_hi: "से पहले",t_en: "Before"},
        {a: "فَسَبِّحْ",r: "Fasabbih",u: "پس پاکی بیان کر",u_ro: "Pas paaki bayan kar",u_hi: "तो पाकी बयान कर",u_en: "So glorify",m: "فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ",t: "اپنے عظمت والے رب کے نام کی تسبیح کرو",t_ro: "Apne azmat wale Rabb ke naam ki tasbeeh karo",t_hi: "अपने अज़मत वाले रब के नाम की तस्बीह करो",t_en: "So glorify the name of your Magnificent Lord"},
        {a: "عَظِيم",r: "Azeem",u: "عظمت والا",u_ro: "Azmat wala",u_hi: "अज़मत वाला",u_en: "Magnificent, Mighty",m: "عَظِيمٌ",t: "بڑا",t_ro: "Bada",t_hi: "बड़ा",t_en: "Great"},
        {a: "سَبَّحَ",r: "Sabbaha",u: "تسبیح کی",u_ro: "Tasbeeh ki",u_hi: "तस्बीह की",u_en: "He glorified",m: "سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ",t: "تسبیح کرنا",t_ro: "Tasbeeh karna",t_hi: "तस्बीह करना",t_en: "To glorify"},
        {a: "الْمُحْيِي",r: "Al-Muhyee",u: "زندہ کرنے والا",u_ro: "Zinda karne wala",u_hi: "ज़िंदा करने वाला",u_en: "The Giver of Life",m: "يُحْيِي وَيُمِيتُ",t: "زندہ کرنے والا",t_ro: "Zinda karne wala",t_hi: "ज़िंदा करने वाला",t_en: "Giver of life"},
        {a: "الْمُمِيت",r: "Al-Mumeet",u: "موت دینے والا",u_ro: "Maut dene wala",u_hi: "मौत देने वाला",u_en: "The Bringer of Death",m: "يُحْيِي وَيُمِيتُ",t: "موت دینے والا",t_ro: "Maut dene wala",t_hi: "मौत देने वाला",t_en: "Causer of death"}
    ] },
    { day: 70, words: [
        {a: "شَيْء",r: "Shay'",u: "چیز",u_ro: "Cheez",u_hi: "चीज़",u_en: "Thing",m: "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",t: "چیز",t_ro: "Cheez",t_hi: "चीज़",t_en: "Thing"},
        {a: "قَدِير",r: "Qadeer",u: "قدرت والا",u_ro: "Qudrat wala",u_hi: "क़ुदरत वाला",u_en: "All-Powerful",m: "قَدِيرٌ",t: "طاقت والا",t_ro: "Taaqat wala",t_hi: "ताक़त वाला",t_en: "Possessing strength"},
        {a: "الْأَوَّل",r: "Al-Awwal",u: "سب سے پہلے",u_ro: "Sab se pehle",u_hi: "सबसे पहले",u_en: "The First",m: "هُوَ الْأَوَّلُ وَالْآخِرُ",t: "پہلا",t_ro: "Pehla",t_hi: "पहला",t_en: "The First"},
        {a: "الظَّاهِر",r: "Az-Zaahir",u: "ظاہر، عیاں",u_ro: "Zaahir, ayaan",u_hi: "ज़ाहिर, अयाँ",u_en: "The Manifest",m: "وَالظَّاهِرُ وَالْبَاطِنُ",t: "ظاہر",t_ro: "Zaahir",t_hi: "ज़ाहिर",t_en: "Manifest"},
        {a: "الْبَاطِن",r: "Al-Baatin",u: "چھپا ہوا، باطن",u_ro: "Chhupa hua, baatin",u_hi: "छुपा हुआ, बातिन",u_en: "The Hidden",m: "وَالظَّاهِرُ وَالْبَاطِنُ",t: "باطن",t_ro: "Baatin",t_hi: "बातिन",t_en: "Hidden"},
        {a: "أَنْفَقَ",r: "Anfaqa",u: "خرچ کیا",u_ro: "Kharch kiya",u_hi: "ख़र्च किया",u_en: "He spent",m: "أَنْفَقَ",t: "خرچ",t_ro: "Kharch",t_hi: "ख़र्च",t_en: "Spent"},
        {a: "قَاتَلَ",r: "Qaatala",u: "لڑائی کی",u_ro: "Ladaai ki",u_hi: "लड़ाई की",u_en: "He fought",m: "قَاتَلَ",t: "جنگ",t_ro: "Jang",t_hi: "जंग",t_en: "Fought"},
        {a: "أَقْرَضَ",r: "Aqrada",u: "قرض دیا",u_ro: "Qarz diya",u_hi: "क़र्ज़ दिया",u_en: "He lent",m: "مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا",t: "قرض دینا",t_ro: "Qarz dena",t_hi: "क़र्ज़ देना",t_en: "To lend"},
        {a: "سُور",r: "Soor",u: "دیوار",u_ro: "Deewar",u_hi: "दीवार",u_en: "Wall",m: "فَضُرِبَ بَيْنَهُم بِسُورٍ",t: "دیوار",t_ro: "Deewar",t_hi: "दीवार",t_en: "Wall"},
        {a: "بَيَّنَ",r: "Bayyana",u: "واضح کیا",u_ro: "Waazeh kiya",u_hi: "वाज़ेह किया",u_en: "He explained",m: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا",t: "بیان کرنا",t_ro: "Bayaan karna",t_hi: "बयान करना",t_en: "To explain"}
    ] },
    { day: 71, words: [
        {a: "هُنَّ",r: "Hunna",u: "وہ عورتیں",u_ro: "Woh auratein",u_hi: "वे औरतें",u_en: "They (f.)",m: "هُنَّ",t: "وہ سب",t_ro: "Woh sab",t_hi: "वे सब",t_en: "They all"},
        {a: "قَوْل",r: "Qawl",u: "بات، قول",u_ro: "Baat, qawl",u_hi: "बात, क़ौल",u_en: "Word, saying",m: "وَقُولُوا قَوْلًا سَدِيدًا",t: "بات",t_ro: "Baat",t_hi: "बात",t_en: "Saying"},
        {a: "نَاجَى",r: "Naajaa",u: "سرگوشی کی",u_ro: "Sargoshi ki",u_hi: "सरगोशी की",u_en: "He whispered",m: "إِذَا نَاجَيْتُمُ الرَّسُولَ",t: "سرگوشی",t_ro: "Sargoshi",t_hi: "सरगोशी",t_en: "Whisper"},
        {a: "كَتَبَ",r: "Kataba",u: "لکھا",u_ro: "Likha",u_hi: "लिखा",u_en: "He wrote, prescribed",m: "كَتَبَ",t: "لکھنا",t_ro: "Likhna",t_hi: "लिखना",t_en: "Wrote"},
        {a: "جَبَل",r: "Jabal",u: "پہاڑ",u_ro: "Pahaad",u_hi: "पहाड़",u_en: "Mountain",m: "الْجَبَلُ",t: "پہاڑ",t_ro: "Pahaad",t_hi: "पहाड़",t_en: "Mountain"},
        {a: "يَتَفَكَّرُونَ",r: "Yatafakkaroo",u: "وہ غور کرتے ہیں",u_ro: "Woh ghaur karte hain",u_hi: "वे ग़ौर करते हैं",u_en: "They reflect",m: "يَتَفَكَّرُونَ",t: "غور",t_ro: "Ghaur",t_hi: "ग़ौर",t_en: "Reflect"},
        {a: "الَّذِي",r: "Alladhee",u: "جو",u_ro: "Jo",u_hi: "जो",u_en: "Who, which (m.)",m: "الَّذِي",t: "جو",t_ro: "Jo",t_hi: "जो",t_en: "Who"},
        {a: "السَّلَامُ",r: "As-Salaam",u: "سلامتی دینے والا",u_ro: "Salaamati dene wala",u_hi: "सलामती देने वाला",u_en: "The Source of Peace",m: "السَّلَامُ",t: "نماز کے بعد",t_ro: "Namaaz ke baad",t_hi: "नमाज़ के बाद",t_en: "After prayer"},
        {a: "خَالِق",r: "Khaaliq",u: "پیدا کرنے والا",u_ro: "Paida karne wala",u_hi: "पैदा करने वाला",u_en: "Creator",m: "الْخَالِقُ",t: "بنانے والا",t_ro: "Banaane wala",t_hi: "बनाने वाला",t_en: "Maker"},
        {a: "بَرَأَ",r: "Bara'a",u: "پیدا کیا، تخلیق کیا",u_ro: "Paida kiya, takhleeq ki",u_hi: "पैदा किया, तख़लीक़ की",u_en: "He created",m: "هُوَ الَّذِي بَرَأَكُم",t: "پیدا کرنا",t_ro: "Paida karna",t_hi: "पैदा करना",t_en: "To create"}
    ] },
    { day: 72, words: [
        {a: "بُنْيَان",r: "Bunyan",u: "عمارت",u_ro: "Imaarat",u_hi: "इमारत",u_en: "Building",m: "بُنْيَانٌ مَّرْصُوصٌ",t: "عمارت",t_ro: "Imaarat",t_hi: "इमारत",t_en: "Structure"},
        {a: "أَحْمَد",r: "Ahmad",u: "احمد ﷺ",u_ro: "Ahmad ﷺ",u_hi: "अहमद ﷺ",u_en: "Ahmad",m: "وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِن بَعْدِي اسْمُهُ أَحْمَدُ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "The Praised One"},
        {a: "عَدْن",r: "Adn",u: "ہمیشہ رہنے کے باغات",u_ro: "Hamesha rehne ke baaghaat",u_hi: "हमेशा रहने के बाग़ात",u_en: "Eden (Paradise)",m: "عَدْنٍ",t: "جنت",t_ro: "Jannat",t_hi: "जन्नत",t_en: "Paradise"},
        {a: "حِمَار",r: "Himaar",u: "گدھا",u_ro: "Gadha",u_hi: "गधा",u_en: "Donkey",m: "الْحِمَارَ",t: "گدھا",t_ro: "Gadha",t_hi: "गधा",t_en: "Donkey"},
        {a: "خَشَب",r: "Khashab",u: "لکڑی",u_ro: "Lakdi",u_hi: "लकड़ी",u_en: "Wood",m: "كَأَنَّهُمْ خُشُبٌ مُّسَنَّدَةٌ",t: "لکڑی",t_ro: "Lakdi",t_hi: "लकड़ी",t_en: "Wood"},
        {a: "كَافِر",r: "Kaafir",u: "انکار کرنے والا",u_ro: "Inkaar karne wala",u_hi: "इनकार करने वाला",u_en: "Disbeliever",m: "الْكَافِرُ",t: "کافر",t_ro: "Kaafir",t_hi: "काफ़िर",t_en: "Disbeliever"},
        {a: "زَعَمَ",r: "Za'ama",u: "دعویٰ کیا، گمان کیا",u_ro: "Dawa kiya, gumaan kiya",u_hi: "दावा किया, गुमान किया",u_en: "He claimed",m: "زَعَمُوا أَنَّهُمْ عَلَىٰ شَيْءٍ",t: "دعویٰ",t_ro: "Dawa",t_hi: "दावा",t_en: "Claim"},
        {a: "نُور",r: "Noor",u: "روشنی",u_ro: "Roshni",u_hi: "रोशनी",u_en: "Light",m: "النُّورُ",t: "روشنی",t_ro: "Roshni",t_hi: "रोशनी",t_en: "Light"},
        {a: "أَنْفِقُوا",r: "Anfiquoo",u: "خرچ کرو",u_ro: "Kharch karo",u_hi: "ख़र्च करो",u_en: "Spend!",m: "أَنْفِقُوا",t: "خرچ",t_ro: "Kharch",t_hi: "ख़र्च",t_en: "Spend"},
        {a: "سِعَة",r: "Si'ah",u: "کشادگی، وسعت",u_ro: "Kushaadgi, wusat",u_hi: "कुशादगी, वुसत",u_en: "Ampleness",m: "وَلَمْ يُؤْتَ سَعَةً مِّنَ الْمَالِ",t: "کشادگی",t_ro: "Kushaadgi",t_hi: "कुशादगी",t_en: "Ampleness"}
    ] },
    { day: 73, words: [
        {a: "ذَاقَ",r: "Dhaaqa",u: "چکھا",u_ro: "Chakha",u_hi: "चखा",u_en: "He tasted",m: "ذَاقَ الْمَوْتَ",t: "چکھنا",t_ro: "Chakhna",t_hi: "चखना",t_en: "To taste"},
        {a: "بِنْت",r: "Bint",u: "بیٹی",u_ro: "Beti",u_hi: "बेटी",u_en: "Daughter",m: "الْبِنْتُ",t: "بیٹی",t_ro: "Beti",t_hi: "बेटी",t_en: "Daughter"},
        {a: "قُنُوت",r: "Qunoot",u: "اطاعت، عبادت میں کھڑا رہنا",u_ro: "Itaat, ibaadat mein khada rehna",u_hi: "इताअत, इबादत में खड़ा रहना",u_en: "Devotion, obedience",m: "وَكَانَتْ مِنَ الْقَانِتِينَ",t: "فرمانبرداری",t_ro: "Farmaabardaari",t_hi: "फ़रमाँबरदारी",t_en: "Devoted obedience"},
        {a: "حَيَاة",r: "Hayaat",u: "زندگی",u_ro: "Zindagi",u_hi: "ज़िंदगी",u_en: "Life",m: "الْحَيَاةُ",t: "زندگی",t_ro: "Zindagi",t_hi: "ज़िंदगी",t_en: "Life"},
        {a: "عَمَل",r: "'Amal",u: "عمل، کام",u_ro: "Amal, kaam",u_hi: "अमल, काम",u_en: "Deed, action",m: "أَحْسَنُ عَمَلًا",t: "عمل",t_ro: "Amal",t_hi: "अमल",t_en: "Deed"},
        {a: "لَطِيف",r: "Lateef",u: "باریک بین",u_ro: "Baareek been",u_hi: "बारीक बीन",u_en: "Subtle, Gentle",m: "لَطِيفٌ",t: "مہربان",t_ro: "Meharbaan",t_hi: "मेहरबान",t_en: "Kind"},
        {a: "جَعَلَ",r: "Ja'ala",u: "بنایا",u_ro: "Banaya",u_hi: "बनाया",u_en: "He made",m: "جَعَلَ",t: "بنانا",t_ro: "Banaana",t_hi: "बनाना",t_en: "Made"},
        {a: "كُلُوا",r: "Kuloo",u: "کھاؤ",u_ro: "Khaao",u_hi: "खाओ",u_en: "Eat!",m: "كُلُوا",t: "کھانا",t_ro: "Khaana",t_hi: "खाना",t_en: "Eat"},
        {a: "نُشُور",r: "Nushoor",u: "مرنے کے بعد اٹھنا",u_ro: "Marne ke baad uthna",u_hi: "मरने के बाद उठना",u_en: "Resurrection",m: "وَإِلَيْهِ النُّشُورُ",t: "اٹھایا جانا",t_ro: "Uthaaya jaana",t_hi: "उठाया जाना",t_en: "Rising again"},
        {a: "مَتَى",r: "Mataa",u: "کب",u_ro: "Kab",u_hi: "कब",u_en: "When",m: "مَتَى",t: "کب",t_ro: "Kab",t_hi: "कब",t_en: "When"}
    ] },
    { day: 74, words: [
        {a: "هَذَا",r: "Haadhaa",u: "یہ (مرد)",u_ro: "Yeh (mard)",u_hi: "यह (मर्द)",u_en: "This (m.)",m: "هَذَا",t: "یہ",t_ro: "Yeh",t_hi: "यह",t_en: "This"},
        {a: "وَعْد",r: "Wa'd",u: "وعدہ",u_ro: "Waada",u_hi: "वादा",u_en: "Promise",m: "إِنَّ وَعْدَ اللَّهِ حَقٌّ",t: "وعدہ",t_ro: "Waada",t_hi: "वादा",t_en: "Promise"},
        {a: "إِن",r: "In",u: "اگر",u_ro: "Agar",u_hi: "अगर",u_en: "If",m: "إِن",t: "اگر",t_ro: "Agar",t_hi: "अगर",t_en: "If"},
        {a: "حَاقَّة",r: "Haaqqah",u: "ہونے والی، واقع ہونے والی",u_ro: "Hone wali, waaqe hone wali",u_hi: "होने वाली, वाक़े होने वाली",u_en: "Inevitable reality",m: "الْحَاقَّةُ * مَا الْحَاقَّةُ",t: "یقینی واقعہ",t_ro: "Yaqeeni waaqia",t_hi: "यक़ीनी वाक़िआ",t_en: "The Reality"},
        {a: "أَدْرَى",r: "Adraa",u: "خبر دی",u_ro: "Khabar di",u_hi: "ख़बर दी",u_en: "He made known",m: "وَمَا أَدْرَاكَ مَا هِيَهْ",t: "معلوم کرنا",t_ro: "Maloom karna",t_hi: "मालूम करना",t_en: "To inform"},
        {a: "أُذُن",r: "Udhun",u: "کان",u_ro: "Kaan",u_hi: "कान",u_en: "Ear",m: "الْأُذُنُ",t: "کان",t_ro: "Kaan",t_hi: "कान",t_en: "Ear"},
        {a: "أَرْجَاء",r: "Arjaa",u: "طرف، کنارے",u_ro: "Taraf, kinaare",u_hi: "तरफ़, किनारे",u_en: "Sides, edges",m: "أَرْجَاء",t: "طرف",t_ro: "Taraf",t_hi: "तरफ़",t_en: "Side"},
        {a: "هَلَكَ",r: "Halaka",u: "ہلاک ہوا",u_ro: "Halaak hua",u_hi: "हलाक हुआ",u_en: "He perished",m: "هَلَكَ",t: "ہلاک",t_ro: "Halaak",t_hi: "हलाक",t_en: "Perished"},
        {a: "سَأَلَ",r: "Sa'ala",u: "پوچھا",u_ro: "Poochha",u_hi: "पूछा",u_en: "He asked",m: "سَأَلَ",t: "پوچھنا",t_ro: "Poochhna",t_hi: "पूछना",t_en: "Asked"},
        {a: "نُوح",r: "Nooh",u: "نوح علیہ السلام",u_ro: "Nooh alaihis-salaam",u_hi: "नूह अलैहिस्सलाम",u_en: "Nuh (Noah)",m: "نُوحٌ",t: "نبی",t_ro: "Nabi",t_hi: "नबी",t_en: "Prophet"}
    ] },
    { day: 75, words: [
        {a: "قَوْم",r: "Qawm",u: "قوم",u_ro: "Qaum",u_hi: "क़ौम",u_en: "People, nation",m: "الْقَوْمُ",t: "لوگ",t_ro: "Log",t_hi: "लोग",t_en: "People"},
        {a: "نَبَات",r: "Nabaat",u: "پودے",u_ro: "Paudhe",u_hi: "पौधे",u_en: "Plants",m: "النَّبَاتَ",t: "پودا",t_ro: "Paudha",t_hi: "पौधा",t_en: "Plant"},
        {a: "جِنّ",r: "Jinn",u: "جن",u_ro: "Jinn",u_hi: "जिन्न",u_en: "Jinn",m: "الْجِنُّ",t: "جن",t_ro: "Jinn",t_hi: "जिन्न",t_en: "Jinn"},
        {a: "دُونَ",r: "Doona",u: "سوا",u_ro: "Siwa",u_hi: "सिवा",u_en: "Other than, besides",m: "دُونَ",t: "بغیر",t_ro: "Baghair",t_hi: "बग़ैर",t_en: "Without"},
        {a: "قَامَ",r: "Qaama",u: "کھڑا ہوا",u_ro: "Khada hua",u_hi: "खड़ा हुआ",u_en: "He stood up",m: "قَامَ",t: "کھڑا ہونا",t_ro: "Khada hona",t_hi: "खड़ा होना",t_en: "Stood"},
        {a: "بَلَّغَ",r: "Ballagha",u: "پہنچایا",u_ro: "Pahunchaaya",u_hi: "पहुँचाया",u_en: "He conveyed",m: "بَلِّغْ مَا أُنزِلَ إِلَيْكَ",t: "پہنچانا",t_ro: "Pahunchaana",t_hi: "पहुँचाना",t_en: "To convey"},
        {a: "أَحْصَى",r: "Ahsaa",u: "گن لیا، شمار کیا",u_ro: "Gan liya, shumaar kiya",u_hi: "गिन लिया, शुमार किया",u_en: "He counted",m: "وَأَحْصَىٰ كُلَّ شَيْءٍ عَدَدًا",t: "گننا",t_ro: "Ganna",t_hi: "गिनना",t_en: "To count"},
        {a: "تَرْتِيل",r: "Tarteel",u: "ٹھہر ٹھہر کر پڑھنا",u_ro: "Thehar thehar kar padhna",u_hi: "ठहर-ठहर कर पढ़ना",u_en: "Measured recitation",m: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",t: "ٹھہر کر پڑھنا",t_ro: "Thehar kar padhna",t_hi: "ठहर कर पढ़ना",t_en: "Reciting slowly"},
        {a: "كَثِيب",r: "Katheeb",u: "ریت کا ٹیلہ",u_ro: "Rait ka teela",u_hi: "रेत का टीला",u_en: "Sand dune",m: "كَثِيبًا مَّهِيلًا",t: "بہتی ریت",t_ro: "Behti rait",t_hi: "बहती रेत",t_en: "Loose sand"},
        {a: "ثِيَاب",r: "Thiyaab",u: "کپڑے",u_ro: "Kapde",u_hi: "कपड़े",u_en: "Clothes",m: "الثِّيَابَ",t: "کپڑا",t_ro: "Kapda",t_hi: "कपड़ा",t_en: "Cloth"}
    ] },
    { day: 76, words: [
        {a: "نَظَرَ",r: "Nazara",u: "دیکھا",u_ro: "Dekha",u_hi: "देखा",u_en: "He looked",m: "نَظَرَ",t: "دیکھنا",t_ro: "Dekhna",t_hi: "देखना",t_en: "Looked"},
        {a: "بَشَر",r: "Bashar",u: "انسان",u_ro: "Insaan",u_hi: "इंसान",u_en: "Human, mortal",m: "الْبَشَرَ",t: "انسان",t_ro: "Insaan",t_hi: "इंसान",t_en: "Human"},
        {a: "تَقْوَى",r: "Taqwaa",u: "تقویٰ",u_ro: "Taqwa",u_hi: "तक़वा",u_en: "God-consciousness",m: "التَّقْوَى",t: "تقویٰ",t_ro: "Taqwa",t_hi: "तक़वा",t_en: "Taqwa"},
        {a: "قِيَامَة",r: "Qiyaamah",u: "قیامت",u_ro: "Qayaamat",u_hi: "क़यामत",u_en: "Resurrection",m: "الْقِيَامَةُ",t: "قیامت",t_ro: "Qayaamat",t_hi: "क़यामत",t_en: "Day of Judgment"},
        {a: "بَلَى",r: "Balaa",u: "ہاں کیوں نہیں",u_ro: "Haan kyun nahin",u_hi: "हाँ क्यों नहीं",u_en: "Yes, indeed",m: "بَلَى",t: "کیوں نہیں",t_ro: "Kyun nahin",t_hi: "क्यों नहीं",t_en: "Why not"},
        {a: "أَمَام",r: "Amaam",u: "سامنے",u_ro: "Saamne",u_hi: "सामने",u_en: "Front, before",m: "أَمَامَهُ",t: "سامنے",t_ro: "Saamne",t_hi: "सामने",t_en: "Before"},
        {a: "يَوْمَئِذٍ",r: "Yawma'idhin",u: "اُس دن",u_ro: "Us din",u_hi: "उस दिन",u_en: "On that Day",m: "يَوْمَئِذٍ يَصْدُرُ النَّاسُ",t: "اس دن",t_ro: "Is din",t_hi: "इस दिन",t_en: "On that Day"},
        {a: "أَيْنَ",r: "Ayna",u: "کہاں",u_ro: "Kahaan",u_hi: "कहाँ",u_en: "Where",m: "أَيْنَ",t: "کہاں",t_ro: "Kahaan",t_hi: "कहाँ",t_en: "Where"},
        {a: "هَلْ",r: "Hal",u: "کیا",u_ro: "Kya",u_hi: "क्या",u_en: "Whether, is it that",m: "هَلْ",t: "کیا",t_ro: "Kya",t_hi: "क्या",t_en: "Question particle"},
        {a: "عَلَى",r: "Alaa",u: "پر",u_ro: "Par",u_hi: "पर",u_en: "On, upon",m: "عَلَى",t: "پر",t_ro: "Par",t_hi: "पर",t_en: "On"}
    ] },
    { day: 77, words: [
        {a: "شُكْر",r: "Shukr",u: "شکر",u_ro: "Shukr",u_hi: "शुक्र",u_en: "Gratitude",m: "الشُّكْرُ",t: "شکر",t_ro: "Shukr",t_hi: "शुक्र",t_en: "Gratitude"},
        {a: "جَزَى",r: "Jazaa",u: "بدلہ دیا",u_ro: "Badla diya",u_hi: "बदला दिया",u_en: "He rewarded",m: "سَيُجْزَىٰ",t: "بدلہ دینا",t_ro: "Badla dena",t_hi: "बदला देना",t_en: "To reward"},
        {a: "فِضَّة",r: "Fiddah",u: "چاندی",u_ro: "Chaandi",u_hi: "चाँदी",u_en: "Silver",m: "الْفِضَّةَ",t: "چاندی",t_ro: "Chaandi",t_hi: "चाँदी",t_en: "Silver"},
        {a: "سَقَى",r: "Saqaa",u: "پانی پلایا",u_ro: "Paani pilaaya",u_hi: "पानी पिलाया",u_en: "He watered",m: "وَسَقَاهُمْ رَبُّهُمْ شَرَابًا",t: "پانی پلانا",t_ro: "Paani pilaana",t_hi: "पानी पिलाना",t_en: "To water"},
        {a: "مَاء",r: "Maa'",u: "پانی",u_ro: "Paani",u_hi: "पानी",u_en: "Water",m: "الْمَاءُ",t: "پانی",t_ro: "Paani",t_hi: "पानी",t_en: "Water"},
        {a: "الْقَادِر",r: "Al-Qaadir",u: "قدرت رکھنے والا",u_ro: "Qudrat rakhne wala",u_hi: "क़ुदरत रखने वाला",u_en: "The Able",m: "فَقَدَرْنَا فَنِعْمَ الْقَادِرُونَ",t: "قادر",t_ro: "Qaadir",t_hi: "क़ादिर",t_en: "All-Powerful"},
        {a: "ظِلّ",r: "Zill",u: "سایہ",u_ro: "Saaya",u_hi: "साया",u_en: "Shade",m: "الظِّلَّ",t: "سایہ",t_ro: "Saaya",t_hi: "साया",t_en: "Shade"},
        {a: "كَذَلِكَ",r: "Kadhaalika",u: "اسی طرح",u_ro: "Isi tarah",u_hi: "इसी तरह",u_en: "Thus, likewise",m: "كَذَلِكَ",t: "اسی طرح",t_ro: "Isi tarah",t_hi: "इसी तरह",t_en: "Likewise"},
        {a: "مُحْسِن",r: "Muhsin",u: "نیکی کرنے والا",u_ro: "Neki karne wala",u_hi: "नेकी करने वाला",u_en: "Doer of good",m: "الْمُحْسِنُ",t: "نیک",t_ro: "Nek",t_hi: "नेक",t_en: "Good"},
        {a: "أَوْتَاد",r: "Awtaad",u: "میخیں، کیل",u_ro: "Mekhein, keel",u_hi: "मेख़ें, कील",u_en: "Pegs, stakes",m: "وَالْجِبَالَ أَوْتَادًا",t: "میخیں",t_ro: "Mekhein",t_hi: "मेख़ें",t_en: "Stakes"}
    ] },
    { day: 78, words: [
        {a: "جَزَاء",r: "Jazaa'",u: "بدلہ",u_ro: "Badla",u_hi: "बदला",u_en: "Recompense",m: "الْجَزَاءُ",t: "بدلہ",t_ro: "Badla",t_hi: "बदला",t_en: "Recompense"},
        {a: "عَطَاء",r: "'Ataa'",u: "عطیہ، بخشش",u_ro: "Atiya, bakhshish",u_hi: "अतिया, बख़्शिश",u_en: "Gift",m: "عَطَاءً حِسَابًا",t: "عطیہ",t_ro: "Atiya",t_hi: "अतिया",t_en: "Gift"},
        {a: "سَاهِرَة",r: "Saahirah",u: "چٹیل میدان",u_ro: "Chatil maidaan",u_hi: "चटील मैदान",u_en: "Plain, awake",m: "فَإِذَا هُم بِالسَّاهِرَةِ",t: "چٹیل میدان",t_ro: "Chatil maidaan",t_hi: "चटील मैदान",t_en: "Plain"},
        {a: "عَصَى",r: "Asaa",u: "نافرمانی کی",u_ro: "Nafarmaani ki",u_hi: "नाफ़रमानी की",u_en: "He disobeyed",m: "عَصَى",t: "نافرمانی",t_ro: "Nafarmaani",t_hi: "नाफ़रमानी",t_en: "Disobeyed"},
        {a: "أَخَذَ",r: "Akhadha",u: "لیا",u_ro: "Liya",u_hi: "लिया",u_en: "He took",m: "أَخَذَ",t: "پکڑنا",t_ro: "Pakadna",t_hi: "पकड़ना",t_en: "Took"},
        {a: "بَعْدَ",r: "Ba'da",u: "بعد",u_ro: "Baad",u_hi: "बाद",u_en: "After",m: "بَعْدَ",t: "کے بعد",t_ro: "Ke baad",t_hi: "के बाद",t_en: "After"},
        {a: "طَامَّة",r: "Taammah",u: "بڑی آفت، مصیبت",u_ro: "Badi aafat, museebat",u_hi: "बड़ी आफ़त, मुसीबत",u_en: "Great calamity",m: "فَإِذَا جَاءَتِ الطَّامَّةُ الْكُبْرَىٰ",t: "بڑی آفت",t_ro: "Badi aafat",t_hi: "बड़ी आफ़त",t_en: "Calamity"},
        {a: "نَهَى",r: "Nahaa",u: "منع کیا",u_ro: "Mana kiya",u_hi: "मना किया",u_en: "He forbade",m: "نَهَى",t: "منع",t_ro: "Mana",t_hi: "मना",t_en: "Forbade"},
        {a: "شَاءَ",r: "Shaa'a",u: "چاہا",u_ro: "Chaaha",u_hi: "चाहा",u_en: "He willed",m: "شَاءَ",t: "چاہنا",t_ro: "Chaahna",t_hi: "चाहना",t_en: "Willed"},
        {a: "كِرَام",r: "Kiraam",u: "بزرگ، معزز",u_ro: "Buzurg, mu'azzaz",u_hi: "बुज़ुर्ग, मुअज़्ज़ज़",u_en: "Noble, honoured",m: "بِأَيْدِي سَفَرَةٍ كِرَامٍ بَرَرَةٍ",t: "معزز",t_ro: "Mu'azzaz",t_hi: "मुअज़्ज़ज़",t_en: "Honoured"}
    ] },
    { day: 79, words: [
        {a: "طَعَام",r: "Ta'aam",u: "کھانا",u_ro: "Khaana",u_hi: "खाना",u_en: "Food",m: "الطَّعَامَ",t: "کھانا",t_ro: "Khaana",t_hi: "खाना",t_en: "Food"},
        {a: "أَنْبَتَ",r: "Anbata",u: "اگایا",u_ro: "Ugaaya",u_hi: "उगाया",u_en: "He caused to grow",m: "وَاللَّهُ أَنبَتَكُم",t: "اگانا",t_ro: "Ugaana",t_hi: "उगाना",t_en: "To grow"},
        {a: "عِنَب",r: "Inab",u: "انگور",u_ro: "Angoor",u_hi: "अंगूर",u_en: "Grapes",m: "الْعِنَبَ",t: "انگور",t_ro: "Angoor",t_hi: "अंगूर",t_en: "Grapes"},
        {a: "نَخْل",r: "Nakhl",u: "کھجور کا درخت",u_ro: "Khajoor ka darakht",u_hi: "खजूर का दरख़्त",u_en: "Date palm",m: "النَّخْلُ",t: "کھجور",t_ro: "Khajoor",t_hi: "खजूर",t_en: "Date palm"},
        {a: "صَاخَّة",r: "Saakhkhah",u: "کان پھاڑ دینے والی آواز",u_ro: "Kaan phaad dene wali aawaaz",u_hi: "कान फाड़ देने वाली आवाज़",u_en: "Deafening cry",m: "فَإِذَا جَاءَتِ الصَّاخَّةُ",t: "کان پھاڑ آواز",t_ro: "Kaan phaad aawaaz",t_hi: "कान फाड़ आवाज़",t_en: "Deafening blast"},
        {a: "فَرَّ",r: "Farra",u: "بھاگا",u_ro: "Bhaaga",u_hi: "भागा",u_en: "He fled",m: "فَفِرُّوا إِلَى اللَّهِ",t: "بھاگنا",t_ro: "Bhaagna",t_hi: "भागना",t_en: "To flee"},
        {a: "أُفُق",r: "Ufuq",u: "افق، کنارہ",u_ro: "Ufuq, kinaara",u_hi: "उफ़ुक़, किनारा",u_en: "Horizon",m: "بِالْأُفُقِ الْمُبِينِ",t: "افق",t_ro: "Ufuq",t_hi: "उफ़ुक़",t_en: "Horizon"},
        {a: "إِذَا",r: "Idhaa",u: "جب",u_ro: "Jab",u_hi: "जब",u_en: "When, whenever",m: "إِذَا",t: "جب (آئندہ)",t_ro: "Jab (aainda)",t_hi: "जब (भविष्य)",t_en: "When (future)"},
        {a: "كَرِيم",r: "Kareem",u: "کرم والا",u_ro: "Karam wala",u_hi: "करम वाला",u_en: "Generous, Noble",m: "كَرِيمٌ",t: "سخی",t_ro: "Sakhi",t_hi: "सख़ी",t_en: "Bountiful"},
        {a: "نَعِيم",r: "Na'eem",u: "نعمتیں",u_ro: "Nemtein",u_hi: "नेमतें",u_en: "Bliss, blessings",m: "النَّعِيمِ",t: "نعمت",t_ro: "Nemat",t_hi: "नेमत",t_en: "Blessings"}
    ] },
    { day: 80, words: [
        {a: "جَحِيم",r: "Jaheem",u: "بھڑکتی آگ",u_ro: "Bhadakti aag",u_hi: "भड़कती आग",u_en: "Blazing Fire",m: "الْجَحِيمُ",t: "آگ",t_ro: "Aag",t_hi: "आग",t_en: "Blazing fire"},
        {a: "أَجْرَمَ",r: "Ajrama",u: "جرم کیا",u_ro: "Jurm kiya",u_hi: "जुर्म किया",u_en: "He committed crime",m: "إِنَّ الَّذِينَ أَجْرَمُوا",t: "جرم",t_ro: "Jurm",t_hi: "जुर्म",t_en: "Crime"},
        {a: "فَوْز",r: "Fawz",u: "کامیابی",u_ro: "Kaamyaabi",u_hi: "कामयाबी",u_en: "Triumph, success",m: "الْفَوْزُ",t: "کامیابی",t_ro: "Kaamyaabi",t_hi: "कामयाबी",t_en: "Success"},
        {a: "شَدِيد",r: "Shadeed",u: "سخت",u_ro: "Sakht",u_hi: "सख़्त",u_en: "Severe",m: "شَدِيدٌ",t: "سخت",t_ro: "Sakht",t_hi: "सख़्त",t_en: "Harsh"},
        {a: "الْوَدُود",r: "Al-Wadood",u: "بہت محبت کرنے والا",u_ro: "Bahut mohabbat karne wala",u_hi: "बहुत मोहब्बत करने वाला",u_en: "Most Loving",m: "وَهُوَ الْغَفُورُ الْوَدُودُ",t: "محبت کرنے والا",t_ro: "Mohabbat karne wala",t_hi: "मोहब्बत करने वाला",t_en: "Full of love"},
        {a: "الْمَاجِد",r: "Al-Maajid",u: "بزرگی والا",u_ro: "Buzurgi wala",u_hi: "बुज़ुर्गी वाला",u_en: "The Glorious",m: "ذُو الْعَرْشِ الْمَجِيدُ",t: "بزرگی والا",t_ro: "Buzurgi wala",t_hi: "बुज़ुर्गी वाला",t_en: "Majestic"},
        {a: "لَوْح",r: "Lawh",u: "تختی، لوح",u_ro: "Takhti, lauh",u_hi: "तख़्ती, लौह",u_en: "Tablet",m: "فِي لَوْحٍ مَّحْفُوظٍ",t: "تختی",t_ro: "Takhti",t_hi: "तख़्ती",t_en: "Tablet"},
        {a: "مَحْفُوظ",r: "Mahfooz",u: "محفوظ",u_ro: "Mehfooz",u_hi: "महफ़ूज़",u_en: "Preserved",m: "فِي لَوْحٍ مَّحْفُوظٍ",t: "محفوظ",t_ro: "Mehfooz",t_hi: "महफ़ूज़",t_en: "Guarded"},
        {a: "لَمَّا",r: "Lammaa",u: "جب",u_ro: "Jab",u_hi: "जब",u_en: "When, not yet",m: "لَمَّا",t: "ابھی نہیں",t_ro: "Abhi nahin",t_hi: "अभी नहीं",t_en: "Not yet"},
        {a: "حَافِظ",r: "Haafiz",u: "حفاظت کرنے والا",u_ro: "Hifaazat karne wala",u_hi: "हिफ़ाज़त करने वाला",u_en: "Guardian",m: "إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ",t: "نگہبان",t_ro: "Nigahbaan",t_hi: "निगहबान",t_en: "Guardian"}
    ] },
    { day: 81, words: [
        {a: "سَبِّحِ",r: "Sabbihi",u: "پاکی بیان کر",u_ro: "Paaki bayan kar",u_hi: "पाकी बयान कर",u_en: "Glorify",m: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",t: "اپنے سب سے بلند رب کے نام کی تسبیح کرو",t_ro: "Apne sab se buland Rabb ke naam ki tasbeeh karo",t_hi: "अपने सबसे बुलंद रब के नाम की तस्बीह करो",t_en: "Glorify the name of your Lord, the Most High"},
        {a: "أَخْرَجَ",r: "Akhraja",u: "نکالا",u_ro: "Nikaala",u_hi: "निकाला",u_en: "He brought out",m: "أَخْرَجَ",t: "نکالنا",t_ro: "Nikaalna",t_hi: "निकालना",t_en: "Brought out"},
        {a: "ذَكَرَ",r: "Dhakara",u: "یاد کیا",u_ro: "Yaad kiya",u_hi: "याद किया",u_en: "He remembered",m: "وَذَكَرَ اسْمَ رَبِّهِ",t: "یاد کرنا",t_ro: "Yaad karna",t_hi: "याद करना",t_en: "To remember"},
        {a: "بَلْ",r: "Bal",u: "بلکہ",u_ro: "Balki",u_hi: "बल्कि",u_en: "Rather, but",m: "بَلْ",t: "بلکہ",t_ro: "Balki",t_hi: "बल्कि",t_en: "Rather"},
        {a: "دُنْيَا",r: "Dunyaa",u: "دنیا",u_ro: "Duniya",u_hi: "दुनिया",u_en: "This world",m: "الدُّنْيَا",t: "دنیا",t_ro: "Duniya",t_hi: "दुनिया",t_en: "Worldly life"},
        {a: "صُحُف",r: "Suhuf",u: "صحیفے",u_ro: "Sahifay",u_hi: "सहीफ़े",u_en: "Scrolls",m: "الصُّحُفِ",t: "کتاب",t_ro: "Kitaab",t_hi: "किताब",t_en: "Scriptures"},
        {a: "غَاشِيَة",r: "Ghaashiyah",u: "ڈھانپ لینے والی",u_ro: "Dhaanp lene wali",u_hi: "ढाँप लेने वाली",u_en: "Overwhelming",m: "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ",t: "ڈھانپنے والی",t_ro: "Dhaanpne wali",t_hi: "ढाँपने वाली",t_en: "Overwhelming event"},
        {a: "إِلَى",r: "Ilaa",u: "کی طرف",u_ro: "Ki taraf",u_hi: "की तरफ़",u_en: "To, towards",m: "إِلَى",t: "طرف",t_ro: "Taraf",t_hi: "तरफ़",t_en: "Toward"},
        {a: "كَيْفَ",r: "Kayfa",u: "کیسے",u_ro: "Kaise",u_hi: "कैसे",u_en: "How",m: "كَيْفَ",t: "کیسے",t_ro: "Kaise",t_hi: "कैसे",t_en: "How"},
        {a: "سَمَاء",r: "Samaa'",u: "آسمان",u_ro: "Aasmaan",u_hi: "आसमान",u_en: "Sky, heaven",m: "السَّمَاءُ",t: "آسمان",t_ro: "Aasmaan",t_hi: "आसमान",t_en: "Sky"}
    ] },
    { day: 82, words: [
        {a: "أَرْض",r: "Ard",u: "زمین",u_ro: "Zameen",u_hi: "ज़मीन",u_en: "Earth",m: "الْأَرْضُ",t: "زمین",t_ro: "Zameen",t_hi: "ज़मीन",t_en: "Earth"},
        {a: "ذَكَّرَ",r: "Dhakkara",u: "یاد دلایا",u_ro: "Yaad dilaaya",u_hi: "याद दिलाया",u_en: "He reminded",m: "فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ",t: "یاد دلانا",t_ro: "Yaad dilaana",t_hi: "याद दिलाना",t_en: "To remind"},
        {a: "فَجْر",r: "Fajr",u: "صبح",u_ro: "Subah",u_hi: "सुबह",u_en: "Dawn",m: "الْفَجْرِ",t: "صبح",t_ro: "Subah",t_hi: "सुबह",t_en: "Morning"},
        {a: "لَا",r: "Laa",u: "نہیں",u_ro: "Nahin",u_hi: "नहीं",u_en: "No, not",m: "لَا",t: "نہیں",t_ro: "Nahin",t_hi: "नहीं",t_en: "No"},
        {a: "عَيْن",r: "Ayn",u: "آنکھ",u_ro: "Aankh",u_hi: "आँख",u_en: "Eye",m: "الْعَيْنُ",t: "آنکھ",t_ro: "Aankh",t_hi: "आँख",t_en: "Eye"},
        {a: "لِسَان",r: "Lisaan",u: "زبان",u_ro: "Zubaan",u_hi: "ज़ुबान",u_en: "Tongue",m: "اللِّسَانُ",t: "زبان",t_ro: "Zubaan",t_hi: "ज़ुबान",t_en: "Tongue"},
        {a: "شَفَة",r: "Shafah",u: "ہونٹ",u_ro: "Hont",u_hi: "होंठ",u_en: "Lip",m: "وَلِسَانًا وَشَفَتَيْنِ",t: "ہونٹ",t_ro: "Hont",t_hi: "होंठ",t_en: "Lip"},
        {a: "شَمْس",r: "Shams",u: "سورج",u_ro: "Sooraj",u_hi: "सूरज",u_en: "Sun",m: "الشَّمْسُ",t: "سورج",t_ro: "Sooraj",t_hi: "सूरज",t_en: "Sun"},
        {a: "قَمَر",r: "Qamar",u: "چاند",u_ro: "Chaand",u_hi: "चाँद",u_en: "Moon",m: "الْقَمَرُ",t: "چاند",t_ro: "Chaand",t_hi: "चाँद",t_en: "Moon"},
        {a: "تَلَا",r: "Talaa",u: "تلاوت کی",u_ro: "Tilaawat ki",u_hi: "तिलावत की",u_en: "He recited",m: "تَلَا",t: "پڑھنا",t_ro: "Padhna",t_hi: "पढ़ना",t_en: "Recited"}
    ] },
    { day: 83, words: [
        {a: "أَلْهَمَ",r: "Alhama",u: "الہام کیا",u_ro: "Ilhaam kiya",u_hi: "इलहाम किया",u_en: "He inspired",m: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا",t: "الہام",t_ro: "Ilhaam",t_hi: "इलहाम",t_en: "Inspiration"},
        {a: "قَدْ",r: "Qad",u: "یقیناً",u_ro: "Yaqeenan",u_hi: "यक़ीनन",u_en: "Indeed, already",m: "قَدْ",t: "تحقیق",t_ro: "Tahqeeq",t_hi: "तहक़ीक़",t_en: "Certainly"},
        {a: "نَاقَة",r: "Naaqah",u: "اونٹنی",u_ro: "Untni",u_hi: "ऊँटनी",u_en: "She-camel",m: "النَّاقَةَ",t: "اونٹنی",t_ro: "Untni",t_hi: "ऊँटनी",t_en: "She-camel"},
        {a: "لَيْل",r: "Layl",u: "رات",u_ro: "Raat",u_hi: "रात",u_en: "Night",m: "اللَّيْلُ",t: "رات",t_ro: "Raat",t_hi: "रात",t_en: "Night"},
        {a: "نَهَار",r: "Nahaar",u: "دن",u_ro: "Din",u_hi: "दिन",u_en: "Day, daytime",m: "النَّهَارُ",t: "دن",t_ro: "Din",t_hi: "दिन",t_en: "Day"},
        {a: "أَعْطَى",r: "A'taa",u: "دیا",u_ro: "Diya",u_hi: "दिया",u_en: "He gave",m: "أَعْطَى",t: "دینا",t_ro: "Dena",t_hi: "देना",t_en: "Gave"},
        {a: "بَخِلَ",r: "Bakhila",u: "کنجوسی کی",u_ro: "Kanjosi ki",u_hi: "कंजूसी की",u_en: "He was stingy",m: "وَمَن يَبْخَلْ فَإِنَّمَا يَبْخَلُ عَن نَّفْسِهِ",t: "کنجوسی",t_ro: "Kanjosi",t_hi: "कंजूसी",t_en: "Stinginess"},
        {a: "ضُحَى",r: "Duhaa",u: "چڑھتی دھوپ",u_ro: "Chadhti dhoop",u_hi: "चढ़ती धूप",u_en: "Forenoon",m: "وَالضُّحَىٰ",t: "چاشت",t_ro: "Chaasht",t_hi: "चाश्त",t_en: "Forenoon"},
        {a: "آخِرَة",r: "Aakhirah",u: "آخرت",u_ro: "Aakhirat",u_hi: "आख़िरत",u_en: "Hereafter",m: "الْآخِرَةُ",t: "آخرت",t_ro: "Aakhirat",t_hi: "आख़िरत",t_en: "The next life"},
        {a: "يَتِيم",r: "Yateem",u: "یتیم",u_ro: "Yateem",u_hi: "यतीम",u_en: "Orphan",m: "الْيَتِيمَ",t: "یتیم",t_ro: "Yateem",t_hi: "यतीम",t_en: "Orphan"}
    ] },
    { day: 84, words: [
        {a: "وَجَدَ",r: "Wajada",u: "پایا",u_ro: "Paaya",u_hi: "पाया",u_en: "He found",m: "وَجَدَ",t: "پانا",t_ro: "Paana",t_hi: "पाना",t_en: "Found"},
        {a: "صَدْر",r: "Sadr",u: "سینہ",u_ro: "Seena",u_hi: "सीना",u_en: "Chest",m: "الصَّدْرُ",t: "سینہ",t_ro: "Seena",t_hi: "सीना",t_en: "Chest"},
        {a: "ظَهْر",r: "Zahr",u: "پیٹھ",u_ro: "Peeth",u_hi: "पीठ",u_en: "Back",m: "الظَّهْرُ",t: "پیٹھ",t_ro: "Peeth",t_hi: "पीठ",t_en: "Back"},
        {a: "إِنَّ",r: "Inna",u: "بے شک",u_ro: "Be-shak",u_hi: "बेशक",u_en: "Indeed",m: "إِنَّ",t: "یقیناً",t_ro: "Yaqeenan",t_hi: "यक़ीनन",t_en: "Surely"},
        {a: "مَعَ",r: "Ma'a",u: "ساتھ",u_ro: "Saath",u_hi: "साथ",u_en: "With",m: "مَعَ",t: "ساتھ",t_ro: "Saath",t_hi: "साथ",t_en: "Together with"},
        {a: "فَ",r: "Fa",u: "پھر",u_ro: "Phir",u_hi: "फिर",u_en: "Then, so",m: "فَ",t: "پس",t_ro: "Pas",t_hi: "पस",t_en: "So"},
        {a: "رَغِبَ",r: "Raghiba",u: "رغبت کی، چاہا",u_ro: "Ragbat ki, chaaha",u_hi: "रग़बत की, चाहा",u_en: "He desired",m: "وَإِلَىٰ رَبِّكَ فَارْغَبْ",t: "رغبت",t_ro: "Ragbat",t_hi: "रग़बत",t_en: "Desire"},
        {a: "تِين",r: "Teen",u: "انجیر",u_ro: "Anjeer",u_hi: "अंजीर",u_en: "Fig",m: "وَالتِّينِ وَالزَّيْتُونِ",t: "انجیر",t_ro: "Anjeer",t_hi: "अंजीर",t_en: "Fig"},
        {a: "زَيْتُون",r: "Zaytoon",u: "زیتون",u_ro: "Zaitoon",u_hi: "ज़ैतून",u_en: "Olive",m: "الزَّيْتُونَ",t: "زیتون",t_ro: "Zaitoon",t_hi: "ज़ैतून",t_en: "Olive"},
        {a: "تَقْوِيم",r: "Taqweem",u: "سیدھا کرنا",u_ro: "Seedha karna",u_hi: "सीधा करना",u_en: "Proportion, molding",m: "فِي أَحْسَنِ تَقْوِيمٍ",t: "سیدھا کرنا",t_ro: "Seedha karna",t_hi: "सीधा करना",t_en: "Proportioning"}
    ] },
    { day: 85, words: [
        {a: "اقْرَأْ",r: "Iqra'",u: "پڑھو",u_ro: "Padho",u_hi: "पढ़ो",u_en: "Read!",m: "اقْرَأْ",t: "پڑھنا",t_ro: "Padhna",t_hi: "पढ़ना",t_en: "Read"},
        {a: "أَقْرَأَ",r: "Aqraa",u: "پڑھایا",u_ro: "Padhaaya",u_hi: "पढ़ाया",u_en: "He made recite",m: "سَنُقْرِئُكَ فَلَا تَنسَىٰ",t: "پڑھانا",t_ro: "Padhaana",t_hi: "पढ़ाना",t_en: "To make recite"},
        {a: "خَلَقَ",r: "Khalaqa",u: "پیدا کیا",u_ro: "Paida kiya",u_hi: "पैदा किया",u_en: "He created",m: "خَلَقَ",t: "پیدا کرنا",t_ro: "Paida karna",t_hi: "पैदा करना",t_en: "Created"},
        {a: "إِنْسَان",r: "Insaan",u: "انسان",u_ro: "Insaan",u_hi: "इंसान",u_en: "Human being",m: "الْإِنسَانَ",t: "انسان",t_ro: "Insaan",t_hi: "इंसान",t_en: "Human"},
        {a: "عَلَّمَ",r: "'Allama",u: "سکھایا",u_ro: "Sikhaaya",u_hi: "सिखाया",u_en: "He taught",m: "عَلَّمَ بِالْقَلَمِ",t: "سکھانا",t_ro: "Sikhaana",t_hi: "सिखाना",t_en: "To teach"},
        {a: "قَلَم",r: "Qalam",u: "قلم",u_ro: "Qalam",u_hi: "क़लम",u_en: "Pen",m: "الْقَلَمَ",t: "قلم",t_ro: "Qalam",t_hi: "क़लम",t_en: "Pen"},
        {a: "عَبْد",r: "Abd",u: "بندہ",u_ro: "Banda",u_hi: "बंदा",u_en: "Servant, slave",m: "الْعَبْدُ",t: "غلام",t_ro: "Ghulaam",t_hi: "ग़ुलाम",t_en: "Slave"},
        {a: "صَلَّى",r: "Sallaa",u: "نماز پڑھی / رحمت بھیجی",u_ro: "Namaaz padhi / rahmat bheji",u_hi: "नमाज़ पढ़ी / रहमत भेजी",u_en: "He prayed / sent blessings",m: "وَصَلِّ عَلَيْهِمْ",t: "نماز پڑھنا",t_ro: "Namaaz padhna",t_hi: "नमाज़ पढ़ना",t_en: "To pray"},
        {a: "نَاصِيَة",r: "Naasiyah",u: "پیشانی",u_ro: "Peshaani",u_hi: "पेशानी",u_en: "Forelock",m: "النَّاصِيَةُ",t: "پیشانی",t_ro: "Peshaani",t_hi: "पेशानी",t_en: "Forehead"},
        {a: "أَلْف",r: "Alf",u: "ہزار",u_ro: "Hazaar",u_hi: "हज़ार",u_en: "Thousand",m: "أَلْفِ شَهْرٍ",t: "ہزار",t_ro: "Hazaar",t_hi: "हज़ार",t_en: "Thousand"}
    ] },
    { day: 86, words: [
        {a: "شَهْر",r: "Shahr",u: "مہینہ",u_ro: "Maheena",u_hi: "महीना",u_en: "Month",m: "الشَّهْرُ",t: "مہینہ",t_ro: "Maheena",t_hi: "महीना",t_en: "Month"},
        {a: "حَتَّى",r: "Hattaa",u: "یہاں تک کہ",u_ro: "Yahaan tak ke",u_hi: "यहाँ तक कि",u_en: "Until, even",m: "حَتَّى",t: "تک",t_ro: "Tak",t_hi: "तक",t_en: "Until"},
        {a: "رَسُول",r: "Rasool",u: "رسول",u_ro: "Rasool",u_hi: "रसूल",u_en: "Messenger",m: "الرَّسُولُ",t: "رسول",t_ro: "Rasool",t_hi: "रसूल",t_en: "Messenger"},
        {a: "زَكَاة",r: "Zakaah",u: "زکوٰۃ",u_ro: "Zakaat",u_hi: "ज़कात",u_en: "Zakat, obligatory charity",m: "الزَّكَاةُ",t: "زکوٰۃ",t_ro: "Zakaat",t_hi: "ज़कात",t_en: "Zakat"},
        {a: "خَالِدِين",r: "Khaalideen",u: "ہمیشہ رہنے والے",u_ro: "Hamesha rehne wale",u_hi: "हमेशा रहने वाले",u_en: "Abiding forever",m: "خَالِدِينَ",t: "ہمیشہ",t_ro: "Hamesha",t_hi: "हमेशा",t_en: "Everlasting"},
        {a: "مِثْقَال",r: "Mithqaal",u: "وزن، تول",u_ro: "Wazan, tol",u_hi: "वज़न, तोल",u_en: "Weight",m: "مِثْقَالَ حَبَّةٍ",t: "وزن",t_ro: "Wazan",t_hi: "वज़न",t_en: "Weight"},
        {a: "ذَرَّة",r: "Dharr",u: "ذرا، ننھا سا",u_ro: "Zaraa, nanha sa",u_hi: "ज़र्रा, नन्हा सा",u_en: "Atom, tiny speck",m: "مِثْقَالَ ذَرَّةٍ",t: "ذرا برابر",t_ro: "Zaraa barabar",t_hi: "ज़र्रा बराबर",t_en: "Atom's weight"},
        {a: "قُبُور",r: "Quboor",u: "قبریں",u_ro: "Qabrein",u_hi: "क़ब्रें",u_en: "Graves",m: "بُعْثِرَ مَا فِي الْقُبُورِ",t: "قبریں",t_ro: "Qabrein",t_hi: "क़ब्रें",t_en: "Graves"},
        {a: "قَارِعَة",r: "Qaari'ah",u: "کھٹکھٹانے والی آفت",u_ro: "Khatkhatane wali aafat",u_hi: "खटखटाने वाली आफ़त",u_en: "Striking calamity",m: "الْقَارِعَةُ * مَا الْقَارِعَةُ",t: "آفت",t_ro: "Aafat",t_hi: "आफ़त",t_en: "Calamity"},
        {a: "أُمّ",r: "Umm",u: "ماں",u_ro: "Maa",u_hi: "माँ",u_en: "Mother",m: "الْأُمُّ",t: "ماں",t_ro: "Maa",t_hi: "माँ",t_en: "Mother"}
    ] },
    { day: 87, words: [
        {a: "كَلَّا",r: "Kallaa",u: "ہرگز نہیں",u_ro: "Hargiz nahin",u_hi: "हरगिज़ नहीं",u_en: "Nay, never",m: "كَلَّا",t: "ہرگز نہیں",t_ro: "Hargiz nahin",t_hi: "हरगिज़ नहीं",t_en: "Never"},
        {a: "سَوْفَ",r: "Sawfa",u: "عنقریب",u_ro: "Anqareeb",u_hi: "अनक़रीब",u_en: "Soon",m: "سَوْفَ",t: "جلد",t_ro: "Jald",t_hi: "जल्द",t_en: "Soon"},
        {a: "تَعْلَمُونَ",r: "Ta'lamoon",u: "تم جانتے ہو",u_ro: "Tum jaante ho",u_hi: "तुम जानते हो",u_en: "You know",m: "تَعْلَمُونَ",t: "جاننا",t_ro: "Jaanna",t_hi: "जानना",t_en: "You know"},
        {a: "تَوَاصَى",r: "Tawaasaa",u: "ایک دوسرے کو نصیحت کی",u_ro: "Ek doosre ko naseehat ki",u_hi: "एक दूसरे को नसीहत की",u_en: "They enjoined one another",m: "وَتَوَاصَوْا بِالْحَقِّ",t: "نصیحت",t_ro: "Naseehat",t_hi: "नसीहत",t_en: "Mutual advice"},
        {a: "صَبْر",r: "Sabr",u: "صبر",u_ro: "Sabr",u_hi: "सब्र",u_en: "Patience",m: "الصَّبْرُ",t: "صبر",t_ro: "Sabr",t_hi: "सब्र",t_en: "Patience"},
        {a: "جَمَعَ",r: "Jama'a",u: "جمع کیا",u_ro: "Jama kiya",u_hi: "जमा किया",u_en: "He gathered",m: "جَمَعَ",t: "جمع",t_ro: "Jama",t_hi: "जमा",t_en: "Gathered"},
        {a: "فَعَلَ",r: "Fa'ala",u: "کیا",u_ro: "Kya",u_hi: "क्या",u_en: "He did",m: "فَعَلَ",t: "کرنا",t_ro: "Karna",t_hi: "करना",t_en: "Did"},
        {a: "فِيل",r: "Feel",u: "ہاتھی",u_ro: "Haathi",u_hi: "हाथी",u_en: "Elephant",m: "الْفِيلَ",t: "ہاتھی",t_ro: "Haathi",t_hi: "हाथी",t_en: "Elephant"},
        {a: "أَرْسَلَ",r: "Arsala",u: "بھیجا",u_ro: "Bheja",u_hi: "भेजा",u_en: "He sent",m: "أَرْسَلَ",t: "بھیجنا",t_ro: "Bhejna",t_hi: "भेजना",t_en: "Sent"},
        {a: "طَيْر",r: "Tayr",u: "پرندے",u_ro: "Parinde",u_hi: "परिंदे",u_en: "Birds",m: "الطَّيْرَ",t: "پرندہ",t_ro: "Parinda",t_hi: "परिंदा",t_en: "Bird"}
    ] },
    { day: 88, words: [
        {a: "حَجَر",r: "Hajar",u: "پتھر",u_ro: "Patthar",u_hi: "पत्थर",u_en: "Stone",m: "الْحَجَرُ",t: "پتھر",t_ro: "Patthar",t_hi: "पत्थर",t_en: "Stone"},
        {a: "شِتَاء",r: "Shitaa'",u: "سردی کا موسم",u_ro: "Sardi ka mausam",u_hi: "सर्दी का मौसम",u_en: "Winter",m: "رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",t: "سردی",t_ro: "Sardi",t_hi: "सर्दी",t_en: "Winter"},
        {a: "صَيْف",r: "Sayf",u: "گرمی کا موسم",u_ro: "Garmi ka mausam",u_hi: "गर्मी का मौसम",u_en: "Summer",m: "رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",t: "گرمی",t_ro: "Garmi",t_hi: "गर्मी",t_en: "Summer"},
        {a: "بَيْت",r: "Bayt",u: "گھر",u_ro: "Ghar",u_hi: "घर",u_en: "House",m: "الْبَيْتَ",t: "گھر",t_ro: "Ghar",t_hi: "घर",t_en: "House"},
        {a: "خَوْف",r: "Khawf",u: "ڈر",u_ro: "Dar",u_hi: "डर",u_en: "Fear",m: "وَآمَنَهُمْ مِنْ خَوْفٍ",t: "خوف",t_ro: "Khawf",t_hi: "ख़ौफ़",t_en: "Fear"},
        {a: "مِسْكِين",r: "Miskeen",u: "مسکین",u_ro: "Miskeen",u_hi: "मिस्कीन",u_en: "Needy, poor person",m: "الْمِسْكِينَ",t: "غریب",t_ro: "Ghareeb",t_hi: "ग़रीब",t_en: "Poor"},
        {a: "هُمْ",r: "Hum",u: "وہ سب",u_ro: "Woh sab",u_hi: "वे सब",u_en: "They (m.)",m: "هُمْ",t: "وہ سب",t_ro: "Woh sab",t_hi: "वे सब",t_en: "They all"},
        {a: "عَن",r: "An",u: "سے",u_ro: "Se",u_hi: "से",u_en: "From, about",m: "عَن",t: "بارے میں",t_ro: "Baare mein",t_hi: "बारे में",t_en: "Concerning"},
        {a: "مَنَعَ",r: "Mana'a",u: "روکا، منع کیا",u_ro: "Roka, mana kiya",u_hi: "रोका, मना किया",u_en: "He prevented",m: "مَّنَّاعٍ لِّلْخَيْرِ",t: "روکنا",t_ro: "Rokna",t_hi: "रोकना",t_en: "To prevent"},
        {a: "يَا",r: "Yaa",u: "اے",u_ro: "Ae",u_hi: "ऐ",u_en: "O",m: "يَا",t: "اے",t_ro: "Ae",t_hi: "ऐ",t_en: "O"}
    ] },
    { day: 89, words: [
        {a: "أَيُّهَا",r: "Ayyuhaa",u: "اے",u_ro: "Ae",u_hi: "ऐ",u_en: "O (you)",m: "أَيُّهَا",t: "اے",t_ro: "Ae",t_hi: "ऐ",t_en: "O"},
        {a: "دِين",r: "Deen",u: "دین",u_ro: "Deen",u_hi: "दीन",u_en: "Religion",m: "الدِّينُ",t: "دین",t_ro: "Deen",t_hi: "दीन",t_en: "Religion"},
        {a: "جَاءَ",r: "Jaa'a",u: "آیا",u_ro: "Aaya",u_hi: "आया",u_en: "He came",m: "جَاءَ",t: "آنا",t_ro: "Aana",t_hi: "आना",t_en: "Came"},
        {a: "تَوَّاب",r: "Tawwaab",u: "توبہ قبول کرنے والا",u_ro: "Tauba qubool karne wala",u_hi: "तौबा क़बूल करने वाला",u_en: "Accepter of repentance",m: "التَّوَّابُ",t: "معاف کرنے والا",t_ro: "Maaf karne wala",t_hi: "माफ़ करने वाला",t_en: "Forgiver"},
        {a: "أَب",r: "Ab",u: "باپ",u_ro: "Baap",u_hi: "बाप",u_en: "Father",m: "الْأَبُ",t: "باپ",t_ro: "Baap",t_hi: "बाप",t_en: "Father"},
        {a: "مَا",r: "Maa",u: "کیا",u_ro: "Kya",u_hi: "क्या",u_en: "What",m: "مَا",t: "کیا",t_ro: "Kya",t_hi: "क्या",t_en: "What"},
        {a: "مَال",r: "Maal",u: "مال",u_ro: "Maal",u_hi: "माल",u_en: "Wealth",m: "الْمَالَ",t: "دولت",t_ro: "Daulat",t_hi: "दौलत",t_en: "Wealth"},
        {a: "كَسَبَ",r: "Kasaba",u: "کمایا",u_ro: "Kamaaya",u_hi: "कमाया",u_en: "He earned",m: "لَهَا مَا كَسَبَتْ",t: "کمانا",t_ro: "Kamaana",t_hi: "कमाना",t_en: "Earning"},
        {a: "نَار",r: "Naar",u: "آگ",u_ro: "Aag",u_hi: "आग",u_en: "Fire",m: "النَّارُ",t: "آگ",t_ro: "Aag",t_hi: "आग",t_en: "Fire"},
        {a: "حَطَب",r: "Hatab",u: "ایندھن کی لکڑی",u_ro: "Eendhan ki lakdi",u_hi: "ईंधन की लकड़ी",u_en: "Firewood",m: "حَمَّالَةَ الْحَطَبِ",t: "لکڑی",t_ro: "Lakdi",t_hi: "लकड़ी",t_en: "Firewood"}
    ] },
    { day: 90, words: [
        {a: "قُلْ",r: "Qul",u: "کہہ دو",u_ro: "Keh do",u_hi: "कह दो",u_en: "Say!",m: "قُلْ",t: "کہنا",t_ro: "Kehna",t_hi: "कहना",t_en: "Say"},
        {a: "هُوَ",r: "Huwa",u: "وہ (مرد)",u_ro: "Woh (mard)",u_hi: "वह (मर्द)",u_en: "He",m: "هُوَ",t: "وہ",t_ro: "Woh",t_hi: "वह",t_en: "He"},
        {a: "أَحَد",r: "Ahad",u: "ایک، بے مثال",u_ro: "Ek, be-misaal",u_hi: "एक, बे-मिसाल",u_en: "One, Unique",m: "أَحَدٌ",t: "جس جیسا کوئی نہیں",t_ro: "Jis jaisa koi nahi",t_hi: "जिस जैसा कोई नहीं",t_en: "Has no equal"},
        {a: "صَمَد",r: "Samad",u: "بے نیاز",u_ro: "Be-niyaaz",u_hi: "बे-नियाज़",u_en: "Eternal, Self-Sufficient",m: "الصَّمَدُ",t: "بے نیاز",t_ro: "Be-niyaaz",t_hi: "बे-नियाज़",t_en: "Needs nothing"},
        {a: "لَمْ",r: "Lam",u: "نہیں",u_ro: "Nahin",u_hi: "नहीं",u_en: "Did not",m: "لَمْ",t: "نہیں (ماضی)",t_ro: "Nahin (maazi)",t_hi: "नहीं (भूतकाल)",t_en: "Not (past)"},
        {a: "مَنْ",r: "Man",u: "کون",u_ro: "Kaun",u_hi: "कौन",u_en: "Who",m: "مَنْ",t: "کون",t_ro: "Kaun",t_hi: "कौन",t_en: "Who"},
        {a: "شَرّ",r: "Sharr",u: "برائی",u_ro: "Buraai",u_hi: "बुराई",u_en: "Evil",m: "مِنْ شَرِّ مَا خَلَقَ",t: "برائی",t_ro: "Buraai",t_hi: "बुराई",t_en: "Evil"},
        {a: "حَسَد",r: "Hasad",u: "حسد، جلن",u_ro: "Hasad, jalan",u_hi: "हसद, जलन",u_en: "Envy",m: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",t: "حسد",t_ro: "Hasad",t_hi: "हसद",t_en: "Envy"},
        {a: "نَاس",r: "Naas",u: "لوگ",u_ro: "Log",u_hi: "लोग",u_en: "People",m: "النَّاسَ",t: "لوگ",t_ro: "Log",t_hi: "लोग",t_en: "People"},
        {a: "مَلِك",r: "Malik",u: "بادشاہ",u_ro: "Baadshaah",u_hi: "बादशाह",u_en: "King",m: "مَلِكِ النَّاسِ",t: "حکمران",t_ro: "Hukmraan",t_hi: "हुक्मरान",t_en: "Ruler"}
    ] }
];
;

/* ───────────── wordAyat.js ───────────── */
/* ==========================================
   WORD -> QURAN KI AYAT (Day 1-90: sabhi 900 lafz par ayat)
   Har lafz ke liye ek ayat; us ayat mein wo lafz alag rang mein dikhta hai.
   Ayat ka text aur surah ka naam: Maktaba Shamila (shamela_get_aya / search_quran, 'body').
   Awaaz: Qari Mishary Alafasy (poori ayat) — qari.js ke zariye.
   wordAyat[ arabic-lafz (courseData ka 'a') ] = { k: "surah:ayat", i: ayat mein lafz ka number (0 se), n: note }
   ayatText[ "surah:ayat" ] = { sn: surah ka naam, sr: Roman naam, t: ayat }
   ========================================== */
const wordAyat = {
 "اللَّهُ": {
  "k": "112:1",
  "i": 2
 },
 "رَبِّ": {
  "k": "1:2",
  "i": 2
 },
 "إِلَه": {
  "k": "3:2",
  "i": 2
 },
 "رَحْمَٰن": {
  "k": "1:3",
  "i": 0
 },
 "رَحِيم": {
  "k": "1:3",
  "i": 1
 },
 "غَفُور": {
  "k": "85:14",
  "i": 1
 },
 "عَزِيز": {
  "k": "3:6",
  "i": 11
 },
 "حَكِيم": {
  "k": "2:32",
  "i": 11
 },
 "عَلِيم": {
  "k": "2:32",
  "i": 10
 },
 "خَبِير": {
  "k": "6:18",
  "i": 6
 },
 "بَصِير": {
  "k": "49:18",
  "i": 7
 },
 "سَمِيع": {
  "k": "26:220",
  "i": 2
 },
 "قَدِير": {
  "k": "57:2",
  "i": 10
 },
 "لَطِيف": {
  "k": "67:14",
  "i": 5
 },
 "كَرِيم": {
  "k": "82:6",
  "i": 5
 },
 "عَظِيم": {
  "k": "56:74",
  "i": 3
 },
 "كَبِير": {
  "k": "13:9",
  "i": 3
 },
 "حَمِيد": {
  "k": "35:15",
  "i": 9
 },
 "غَنِيّ": {
  "k": "35:15",
  "i": 8
 },
 "حَيّ": {
  "k": "40:65",
  "i": 1
 },
 "قَيُّوم": {
  "k": "3:2",
  "i": 6
 },
 "مَلِك": {
  "k": "114:2",
  "i": 0
 },
 "وَلِيّ": {
  "k": "4:45",
  "i": 5
 },
 "نَصِير": {
  "k": "4:45",
  "i": 8
 },
 "تَوَّاب": {
  "k": "110:3",
  "i": 6
 },
 "رَزَّاق": {
  "k": "51:58",
  "i": 3
 },
 "خَالِق": {
  "k": "59:24",
  "i": 2
 },
 "شَهِيد": {
  "k": "4:79",
  "i": 17
 },
 "حَسِيب": {
  "k": "17:14",
  "i": 6
 },
 "وَكِيل": {
  "k": "33:3",
  "i": 5
 },
 "قَوِيّ": {
  "k": "22:74",
  "i": 7
 },
 "شَدِيد": {
  "k": "85:12",
  "i": 3
 },
 "عَفُوّ": {
  "k": "4:99",
  "i": 8
 },
 "حَقّ": {
  "k": "17:81",
  "i": 2
 },
 "وَاحِد": {
  "k": "2:163",
  "i": 2
 },
 "أَحَد": {
  "k": "112:1",
  "i": 3
 },
 "صَمَد": {
  "k": "112:2",
  "i": 1
 },
 "هُوَ": {
  "k": "112:1",
  "i": 1
 },
 "هِيَ": {
  "k": "20:20",
  "i": 2
 },
 "هُمْ": {
  "k": "107:5",
  "i": 1
 },
 "هُنَّ": {
  "k": "58:2",
  "i": 6
 },
 "هُمَا": {
  "k": "9:40",
  "i": 12
 },
 "أَنْتَ": {
  "k": "2:32",
  "i": 9
 },
 "أَنْتُمْ": {
  "k": "35:15",
  "i": 2
 },
 "أَنَا": {
  "k": "20:14",
  "i": 1
 },
 "نَحْنُ": {
  "k": "15:9",
  "i": 1
 },
 "هَذَا": {
  "k": "67:25",
  "i": 2
 },
 "هَذِهِ": {
  "k": "21:92",
  "i": 1
 },
 "ذَلِكَ": {
  "k": "2:2",
  "i": 0
 },
 "تِلْكَ": {
  "k": "2:252",
  "i": 0
 },
 "أُولَٰئِكَ": {
  "k": "2:5",
  "i": 0
 },
 "هَؤُلَاءِ": {
  "k": "2:31",
  "i": 11
 },
 "الَّذِي": {
  "k": "59:22",
  "i": 2
 },
 "الَّتِي": {
  "k": "2:24",
  "i": 7
 },
 "الَّذِينَ": {
  "k": "1:7",
  "i": 1
 },
 "مَا": {
  "k": "111:2",
  "i": 0
 },
 "مَنْ": {
  "k": "113:2",
  "i": 0
 },
 "كُلّ": {
  "k": "29:57",
  "i": 0
 },
 "بَعْض": {
  "k": "7:24",
  "i": 2
 },
 "جَمِيع": {
  "k": "36:32",
  "i": 3
 },
 "نَفْس": {
  "k": "29:57",
  "i": 1
 },
 "غَيْر": {
  "k": "1:7",
  "i": 4
 },
 "مِثْل": {
  "k": "3:59",
  "i": 1
 },
 "أَيّ": {
  "k": "55:13",
  "i": 0
 },
 "مَاذَا": {
  "k": "16:24",
  "i": 3
 },
 "أَيْنَ": {
  "k": "75:10",
  "i": 3
 },
 "كَيْفَ": {
  "k": "88:17",
  "i": 4
 },
 "مَتَى": {
  "k": "67:25",
  "i": 1
 },
 "هَلْ": {
  "k": "76:1",
  "i": 0
 },
 "لَعَلَّ": {
  "k": "2:21",
  "i": 9
 },
 "كَمْ": {
  "k": "17:17",
  "i": 0
 },
 "أَنَّ": {
  "k": "2:107",
  "i": 2
 },
 "فِي": {
  "k": "7:24",
  "i": 6
 },
 "إِلَى": {
  "k": "88:17",
  "i": 2
 },
 "عَلَى": {
  "k": "76:1",
  "i": 2
 },
 "عَن": {
  "k": "107:5",
  "i": 2
 },
 "مَعَ": {
  "k": "94:6",
  "i": 1
 },
 "بِ": {
  "k": "1:1",
  "i": 0
 },
 "لِ": {
  "k": "1:2",
  "i": 1
 },
 "كَ": {
  "k": "55:14",
  "i": 4
 },
 "وَ": {
  "k": "1:5",
  "i": 2
 },
 "فَ": {
  "k": "94:7",
  "i": 2
 },
 "ثُمَّ": {
  "k": "29:57",
  "i": 4
 },
 "أَوْ": {
  "k": "37:147",
  "i": 4
 },
 "لَا": {
  "k": "90:1",
  "i": 0
 },
 "لَمْ": {
  "k": "112:3",
  "i": 0
 },
 "لَنْ": {
  "k": "3:92",
  "i": 0
 },
 "لَمَّا": {
  "k": "86:4",
  "i": 3
 },
 "إِنَّ": {
  "k": "94:6",
  "i": 0
 },
 "إِن": {
  "k": "67:25",
  "i": 4
 },
 "أَن": {
  "k": "4:58",
  "i": 3
 },
 "إِذَا": {
  "k": "82:1",
  "i": 0
 },
 "إِذْ": {
  "k": "24:12",
  "i": 1
 },
 "لَوْ": {
  "k": "21:22",
  "i": 0
 },
 "لَوْلَا": {
  "k": "24:12",
  "i": 0
 },
 "قَدْ": {
  "k": "91:9",
  "i": 0
 },
 "سَوْفَ": {
  "k": "102:3",
  "i": 1
 },
 "بَلْ": {
  "k": "87:16",
  "i": 0
 },
 "لَكِنْ": {
  "k": "4:166",
  "i": 0
 },
 "حَتَّى": {
  "k": "97:5",
  "i": 2
 },
 "كَيْ": {
  "k": "20:33",
  "i": 0
 },
 "إِلَّا": {
  "k": "55:60",
  "i": 3
 },
 "بَيْنَ": {
  "k": "49:10",
  "i": 4
 },
 "بَعْدَ": {
  "k": "79:30",
  "i": 1
 },
 "قَبْلَ": {
  "k": "56:45",
  "i": 2
 },
 "فَوْقَ": {
  "k": "6:18",
  "i": 2
 },
 "تَحْتَ": {
  "k": "48:18",
  "i": 7
 },
 "خَلْفَ": {
  "k": "41:42",
  "i": 8,
  "n": "Quran mein 'خَلْفِهِ' (uske peeche) aata hai."
 },
 "دُونَ": {
  "k": "72:11",
  "i": 4
 },
 "عِندَ": {
  "k": "53:14",
  "i": 0
 },
 "لَدَى": {
  "k": "12:25",
  "i": 8,
  "n": "Mushaf mein ye 'لَدَا' likha jaata hai, matlab wahi 'لَدَى' (paas)."
 },
 "حَوْلَ": {
  "k": "17:1",
  "i": 13,
  "n": "Quran mein 'حَوْلَهُ' (uske ird-gird) aata hai."
 },
 "كَلَّا": {
  "k": "102:3",
  "i": 0
 },
 "نَعَمْ": {
  "k": "37:18",
  "i": 1
 },
 "بَلَى": {
  "k": "75:4",
  "i": 0
 },
 "أَلَا": {
  "k": "13:28",
  "i": 6
 },
 "يَا": {
  "k": "109:1",
  "i": 1
 },
 "أَيُّهَا": {
  "k": "109:1",
  "i": 2
 },
 "إِنَّمَا": {
  "k": "49:10",
  "i": 0
 },
 "كَذَلِكَ": {
  "k": "77:44",
  "i": 1
 },
 "حَيْثُ": {
  "k": "7:182",
  "i": 5
 },
 "أَبَدًا": {
  "k": "18:3",
  "i": 2
 },
 "سَمَاء": {
  "k": "88:18",
  "i": 1
 },
 "أَرْض": {
  "k": "88:20",
  "i": 1
 },
 "شَمْس": {
  "k": "91:1",
  "i": 0
 },
 "قَمَر": {
  "k": "91:2",
  "i": 0
 },
 "نَجْم": {
  "k": "53:1",
  "i": 0
 },
 "نُور": {
  "k": "64:8",
  "i": 3
 },
 "ظُلُمَات": {
  "k": "6:1",
  "i": 7
 },
 "لَيْل": {
  "k": "92:1",
  "i": 0
 },
 "نَهَار": {
  "k": "92:2",
  "i": 0
 },
 "يَوْم": {
  "k": "1:4",
  "i": 1
 },
 "فَجْر": {
  "k": "89:1",
  "i": 0
 },
 "مَاء": {
  "k": "77:20",
  "i": 3
 },
 "مَطَر": {
  "k": "26:173",
  "i": 2
 },
 "سَحَاب": {
  "k": "13:12",
  "i": 7
 },
 "بَرْق": {
  "k": "13:12",
  "i": 3
 },
 "رَعْد": {
  "k": "13:13",
  "i": 1
 },
 "رِيح": {
  "k": "54:19",
  "i": 3
 },
 "بَحْر": {
  "k": "52:6",
  "i": 0
 },
 "نَهْر": {
  "k": "54:54",
  "i": 4,
  "n": "Quran mein 'نَهَر' (nehar/nahr) aata hai — matlab wahi: nahr."
 },
 "جَبَل": {
  "k": "59:21",
  "i": 5
 },
 "نَار": {
  "k": "111:3",
  "i": 1
 },
 "حَجَر": {
  "k": "105:4",
  "i": 1,
  "n": "Quran mein 'حِجَارَة' (pattharon) aata hai — 'حَجَر' ki jama."
 },
 "طِين": {
  "k": "38:76",
  "i": 9
 },
 "شَجَرَة": {
  "k": "20:120",
  "i": 8
 },
 "وَرَقَة": {
  "k": "6:59",
  "i": 15
 },
 "نَخْل": {
  "k": "80:29",
  "i": 1
 },
 "ثَمَرَة": {
  "k": "47:15",
  "i": 30,
  "n": "Quran mein 'ثَمَرَات' (phal, jama) aata hai — 'ثَمَرَة' ki jama."
 },
 "عِنَب": {
  "k": "80:28",
  "i": 0
 },
 "زَيْتُون": {
  "k": "95:1",
  "i": 1
 },
 "زَرْع": {
  "k": "32:27",
  "i": 10
 },
 "نَبَات": {
  "k": "71:17",
  "i": 4
 },
 "ذَهَب": {
  "k": "22:23",
  "i": 17
 },
 "فِضَّة": {
  "k": "76:15",
  "i": 4
 },
 "حَدِيد": {
  "k": "17:50",
  "i": 4
 },
 "لَبَن": {
  "k": "16:66",
  "i": 13
 },
 "عَسَل": {
  "k": "47:15",
  "i": 24
 },
 "طَعَام": {
  "k": "80:24",
  "i": 3
 },
 "لَحْم": {
  "k": "2:173",
  "i": 5
 },
 "بَيْت": {
  "k": "106:3",
  "i": 3
 },
 "مَسْجِد": {
  "k": "17:1",
  "i": 6
 },
 "كَعْبَة": {
  "k": "5:97",
  "i": 2
 },
 "قَرْيَة": {
  "k": "12:82",
  "i": 1
 },
 "مَدِينَة": {
  "k": "36:20",
  "i": 3
 },
 "بَاب": {
  "k": "12:25",
  "i": 1
 },
 "فُلْك": {
  "k": "36:41",
  "i": 6
 },
 "كِتَاب": {
  "k": "2:2",
  "i": 1
 },
 "قَلَم": {
  "k": "96:4",
  "i": 2
 },
 "مِيزَان": {
  "k": "55:7",
  "i": 3
 },
 "مَال": {
  "k": "111:2",
  "i": 3
 },
 "ثِيَاب": {
  "k": "74:4",
  "i": 0
 },
 "ظِلّ": {
  "k": "77:30",
  "i": 2
 },
 "سَبِيل": {
  "k": "12:108",
  "i": 2
 },
 "صِرَاط": {
  "k": "1:6",
  "i": 1
 },
 "بَقَرَة": {
  "k": "2:67",
  "i": 9
 },
 "عِجْل": {
  "k": "51:26",
  "i": 4
 },
 "نَاقَة": {
  "k": "91:13",
  "i": 4
 },
 "جَمَل": {
  "k": "7:40",
  "i": 16
 },
 "غَنَم": {
  "k": "6:146",
  "i": 9
 },
 "مَعْز": {
  "k": "6:143",
  "i": 6
 },
 "أَنَعَام": {
  "k": "36:71",
  "i": 8,
  "n": "Quran mein 'أَنْعَام' (mawaishi) aata hai."
 },
 "خَيْل": {
  "k": "16:8",
  "i": 0
 },
 "حِمَار": {
  "k": "62:5",
  "i": 8
 },
 "كَلْب": {
  "k": "7:176",
  "i": 12
 },
 "ذِئْب": {
  "k": "12:14",
  "i": 3
 },
 "فِيل": {
  "k": "105:1",
  "i": 6
 },
 "طَيْر": {
  "k": "105:3",
  "i": 2
 },
 "هُدْهُد": {
  "k": "27:20",
  "i": 7
 },
 "غُرَاب": {
  "k": "5:31",
  "i": 2
 },
 "نَمْلَة": {
  "k": "27:18",
  "i": 7
 },
 "نَحْل": {
  "k": "16:68",
  "i": 3
 },
 "عَنكَبُوت": {
  "k": "29:41",
  "i": 8
 },
 "ذُبَاب": {
  "k": "22:73",
  "i": 14
 },
 "جَرَاد": {
  "k": "7:133",
  "i": 3
 },
 "ضَفَادِع": {
  "k": "7:133",
  "i": 5
 },
 "حَيَّة": {
  "k": "20:20",
  "i": 3
 },
 "قِرْد": {
  "k": "2:65",
  "i": 10,
  "n": "Quran mein 'قِرَدَة' (bandar, jama) aata hai — 'قِرْد' ki jama."
 },
 "خِنْزِير": {
  "k": "2:173",
  "i": 6
 },
 "بَعُوضَة": {
  "k": "2:26",
  "i": 8
 },
 "حُوت": {
  "k": "37:142",
  "i": 1
 },
 "دَابَّة": {
  "k": "11:6",
  "i": 2
 },
 "إِنْسَان": {
  "k": "96:2",
  "i": 1
 },
 "نَاس": {
  "k": "114:1",
  "i": 3
 },
 "بَشَر": {
  "k": "74:25",
  "i": 4
 },
 "رَجُل": {
  "k": "36:20",
  "i": 4
 },
 "امْرَأَة": {
  "k": "27:23",
  "i": 2
 },
 "نِسَاء": {
  "k": "33:32",
  "i": 5
 },
 "وَلَد": {
  "k": "19:35",
  "i": 6
 },
 "ابْن": {
  "k": "19:34",
  "i": 2
 },
 "بِنْت": {
  "k": "66:12",
  "i": 1,
  "n": "Quran mein 'بِنْت' ki jagah 'ابْنَة' aata hai — ayat mein wahi lafz rang mein hai."
 },
 "أَب": {
  "k": "111:1",
  "i": 2,
  "n": "Is ayat mein 'أَب' ka roop 'أَبِي' aaya hai (Abu Lahab ke naam mein)."
 },
 "أُمّ": {
  "k": "101:9",
  "i": 0,
  "n": "Is ayat mein 'أُمّ' ka roop 'أُمُّهُ' (uski maa) aaya hai."
 },
 "وَالِدَيْن": {
  "k": "19:14",
  "i": 1
 },
 "أَخ": {
  "k": "20:30",
  "i": 1
 },
 "أُخْت": {
  "k": "28:11",
  "i": 1
 },
 "زَوْج": {
  "k": "2:35",
  "i": 4
 },
 "أَهْل": {
  "k": "20:29",
  "i": 4
 },
 "قَوْم": {
  "k": "71:1",
  "i": 4
 },
 "ذُرِّيَّة": {
  "k": "3:34",
  "i": 0
 },
 "طِفْل": {
  "k": "40:67",
  "i": 13
 },
 "يَتِيم": {
  "k": "93:6",
  "i": 2
 },
 "مِسْكِين": {
  "k": "107:3",
  "i": 4
 },
 "عَبْد": {
  "k": "96:10",
  "i": 0
 },
 "مَلَائِكَة": {
  "k": "2:34",
  "i": 2
 },
 "جِنّ": {
  "k": "72:1",
  "i": 7
 },
 "شَيْطَان": {
  "k": "2:268",
  "i": 0
 },
 "نَبِيّ": {
  "k": "33:1",
  "i": 1
 },
 "رَسُول": {
  "k": "98:2",
  "i": 0
 },
 "عَدُوّ": {
  "k": "35:6",
  "i": 3
 },
 "صَاحِب": {
  "k": "53:2",
  "i": 2
 },
 "مُؤْمِن": {
  "k": "32:18",
  "i": 2
 },
 "كَافِر": {
  "k": "64:2",
  "i": 4
 },
 "مُنَافِق": {
  "k": "4:145",
  "i": 1
 },
 "مُسْلِم": {
  "k": "3:67",
  "i": 9
 },
 "مُشْرِك": {
  "k": "9:28",
  "i": 4
 },
 "ظَالِم": {
  "k": "6:21",
  "i": 13
 },
 "مُتَّقِي": {
  "k": "19:85",
  "i": 2
 },
 "صَالِح": {
  "k": "29:9",
  "i": 6
 },
 "مُحْسِن": {
  "k": "77:44",
  "i": 3
 },
 "مُجْرِم": {
  "k": "55:41",
  "i": 1
 },
 "فَاسِق": {
  "k": "32:18",
  "i": 5
 },
 "عَالِم": {
  "k": "32:6",
  "i": 1
 },
 "جَاهِل": {
  "k": "7:199",
  "i": 6
 },
 "رَأْس": {
  "k": "19:4",
  "i": 7
 },
 "وَجْه": {
  "k": "55:27",
  "i": 1
 },
 "عَيْن": {
  "k": "90:8",
  "i": 3
 },
 "أُذُن": {
  "k": "69:12",
  "i": 4
 },
 "أَنْف": {
  "k": "5:45",
  "i": 8
 },
 "فَم": {
  "k": "36:65",
  "i": 3,
  "n": "Quran mein 'فَم' ki jama 'أَفْوَاه' aati hai — ayat mein wahi lafz rang mein hai."
 },
 "لِسَان": {
  "k": "90:9",
  "i": 0
 },
 "سِنّ": {
  "k": "5:45",
  "i": 12
 },
 "يَد": {
  "k": "48:10",
  "i": 6
 },
 "أَرْجُل": {
  "k": "36:65",
  "i": 7
 },
 "قَلْب": {
  "k": "50:37",
  "i": 7
 },
 "صَدْر": {
  "k": "94:1",
  "i": 3
 },
 "بَطْن": {
  "k": "16:78",
  "i": 3,
  "n": "Quran mein 'بَطْن' ki jama 'بُطُون' aati hai — ayat mein wahi lafz rang mein hai."
 },
 "ظَهْر": {
  "k": "94:3",
  "i": 2
 },
 "عُنُق": {
  "k": "17:29",
  "i": 5
 },
 "جِلْد": {
  "k": "41:20",
  "i": 8
 },
 "عَظْم": {
  "k": "19:4",
  "i": 4
 },
 "دَم": {
  "k": "2:173",
  "i": 4
 },
 "رُوح": {
  "k": "17:85",
  "i": 2
 },
 "جَسَد": {
  "k": "21:8",
  "i": 2
 },
 "سَمْع": {
  "k": "2:7",
  "i": 5
 },
 "بَصَر": {
  "k": "53:17",
  "i": 2
 },
 "فُؤَاد": {
  "k": "53:11",
  "i": 2
 },
 "نَاصِيَة": {
  "k": "96:15",
  "i": 5
 },
 "أَصَابِع": {
  "k": "2:19",
  "i": 9
 },
 "إِيمَان": {
  "k": "49:14",
  "i": 11
 },
 "صَلَاة": {
  "k": "20:14",
  "i": 9
 },
 "زَكَاة": {
  "k": "98:5",
  "i": 12
 },
 "صِيَام": {
  "k": "2:183",
  "i": 5
 },
 "حَجّ": {
  "k": "22:27",
  "i": 3
 },
 "عُمْرَة": {
  "k": "2:196",
  "i": 2,
  "n": "Quran mein 'عُمْرَة' sirf do ayaton (2:158, 2:196) mein aata hai; ye ayat lambi hai, lafz shuru mein hi hai."
 },
 "دِين": {
  "k": "109:6",
  "i": 1
 },
 "إِسْلَام": {
  "k": "3:19",
  "i": 4
 },
 "قُرْآن": {
  "k": "54:17",
  "i": 2
 },
 "آيَة": {
  "k": "36:37",
  "i": 0
 },
 "سُورَة": {
  "k": "24:1",
  "i": 0
 },
 "وَحْي": {
  "k": "53:4",
  "i": 3
 },
 "ذِكْر": {
  "k": "15:9",
  "i": 3
 },
 "دُعَاء": {
  "k": "14:40",
  "i": 8
 },
 "رُكُوع": {
  "k": "2:125",
  "i": 20
 },
 "سُجُود": {
  "k": "50:40",
  "i": 4
 },
 "تَسْبِيح": {
  "k": "17:44",
  "i": 16,
  "n": "Is ayat mein 'تَسْبِيح' ka roop 'تَسْبِيحَهُمْ' (unki tasbeeh) aaya hai."
 },
 "حَمْد": {
  "k": "1:2",
  "i": 0
 },
 "شُكْر": {
  "k": "76:9",
  "i": 9,
  "n": "Quran mein 'شُكْر' ke saath-saath 'شُكُور' bhi aata hai (usi jad se) — ayat mein wahi rang mein hai."
 },
 "صَبْر": {
  "k": "103:3",
  "i": 8
 },
 "تَوْبَة": {
  "k": "42:25",
  "i": 3
 },
 "تَقْوَى": {
  "k": "74:56",
  "i": 8
 },
 "تَوَكُّل": {
  "k": "33:3",
  "i": 0,
  "n": "Is ayat mein 'تَوَكُّل' ka fe'l 'تَوَكَّلْ' (bharosa karo) aaya hai."
 },
 "إِخْلَاص": {
  "k": "39:2",
  "i": 7,
  "n": "Quran mein 'إِخْلَاص' ki jad se 'مُخْلِصًا' (khaalis karne wala) aata hai."
 },
 "هُدَى": {
  "k": "2:2",
  "i": 5
 },
 "ضَلَال": {
  "k": "36:24",
  "i": 3
 },
 "قِبْلَة": {
  "k": "2:144",
  "i": 7
 },
 "عِبَادَة": {
  "k": "21:19",
  "i": 10
 },
 "جِهَاد": {
  "k": "25:52",
  "i": 5
 },
 "خَلَقَ": {
  "k": "96:1",
  "i": 4
 },
 "جَعَلَ": {
  "k": "67:15",
  "i": 2
 },
 "أَنْزَلَ": {
  "k": "16:24",
  "i": 4
 },
 "أَرْسَلَ": {
  "k": "105:3",
  "i": 0
 },
 "فَعَلَ": {
  "k": "105:1",
  "i": 3
 },
 "عَمِلَ": {
  "k": "30:44",
  "i": 5
 },
 "أَخَذَ": {
  "k": "79:25",
  "i": 0,
  "n": "Quran mein 'فَأَخَذَهُ' (phir use pakda) aata hai."
 },
 "أَعْطَى": {
  "k": "92:5",
  "i": 2
 },
 "أَتَى": {
  "k": "16:1",
  "i": 0
 },
 "كَفَى": {
  "k": "17:14",
  "i": 2
 },
 "تَرَكَ": {
  "k": "35:45",
  "i": 7
 },
 "وَجَدَ": {
  "k": "93:7",
  "i": 0,
  "n": "Quran mein 'وَجَدَكَ' (usne aap ko paya) aata hai."
 },
 "رَأَى": {
  "k": "53:11",
  "i": 4
 },
 "نَظَرَ": {
  "k": "74:21",
  "i": 1
 },
 "انْظُرْ": {
  "k": "6:24",
  "i": 0
 },
 "يَعْلَمُ": {
  "k": "49:18",
  "i": 2
 },
 "تَعْلَمُونَ": {
  "k": "102:3",
  "i": 2
 },
 "يَتَفَكَّرُونَ": {
  "k": "59:21",
  "i": 17
 },
 "يَعْقِلُونَ": {
  "k": "36:68",
  "i": 6
 },
 "اذْكُرُوا": {
  "k": "33:41",
  "i": 4
 },
 "نَسِيَ": {
  "k": "36:78",
  "i": 3
 },
 "شَاءَ": {
  "k": "80:12",
  "i": 1
 },
 "أَرَادَ": {
  "k": "36:82",
  "i": 3
 },
 "أَحَبَّ": {
  "k": "28:56",
  "i": 4,
  "n": "Quran mein 'أَحْبَبْتَ' (tum ne chaha) aata hai — 'أَحَبَّ' ka hi fe'l."
 },
 "يُحِبُّ": {
  "k": "3:76",
  "i": 7
 },
 "كَرِهَ": {
  "k": "9:46",
  "i": 7
 },
 "خَافَ": {
  "k": "55:46",
  "i": 1
 },
 "تَخَافُوا": {
  "k": "41:30",
  "i": 11
 },
 "خَشِيَ": {
  "k": "50:33",
  "i": 1
 },
 "اتَّقُوا": {
  "k": "49:10",
  "i": 6
 },
 "يَرْجُو": {
  "k": "29:5",
  "i": 2
 },
 "دَعَا": {
  "k": "3:38",
  "i": 1
 },
 "ادْعُوا": {
  "k": "7:55",
  "i": 0
 },
 "سَأَلَ": {
  "k": "70:1",
  "i": 0
 },
 "أَجَابَ": {
  "k": "28:65",
  "i": 4,
  "n": "Quran mein 'أَجَبْتُمُ' (tum ne jawab diya) aata hai — 'أَجَابَ' ka hi fe'l."
 },
 "اسْتَجَابَ": {
  "k": "8:9",
  "i": 3
 },
 "غَفَرَ": {
  "k": "42:43",
  "i": 2
 },
 "اغْفِرْ": {
  "k": "23:118",
  "i": 2
 },
 "رَحِمَ": {
  "k": "11:119",
  "i": 2
 },
 "ارْحَمْ": {
  "k": "23:118",
  "i": 3
 },
 "اهْدِنَا": {
  "k": "1:6",
  "i": 0
 },
 "ضَلَّ": {
  "k": "53:2",
  "i": 1
 },
 "أَضَلَّ": {
  "k": "47:1",
  "i": 6
 },
 "آمَنَ": {
  "k": "18:88",
  "i": 2
 },
 "آمَنُوا": {
  "k": "13:28",
  "i": 1
 },
 "كَفَرَ": {
  "k": "30:44",
  "i": 1
 },
 "كَفَرُوا": {
  "k": "47:1",
  "i": 1
 },
 "صَدَقَ": {
  "k": "3:95",
  "i": 1
 },
 "كَذَبَ": {
  "k": "53:11",
  "i": 1
 },
 "كَذَّبُوا": {
  "k": "7:182",
  "i": 1
 },
 "ظَلَمَ": {
  "k": "18:87",
  "i": 3
 },
 "عَصَى": {
  "k": "79:21",
  "i": 1
 },
 "أَطِيعُوا": {
  "k": "3:132",
  "i": 0
 },
 "اصْبِرْ": {
  "k": "11:115",
  "i": 0
 },
 "اعْبُدُوا": {
  "k": "2:21",
  "i": 2
 },
 "أَقِيمُوا": {
  "k": "2:43",
  "i": 0
 },
 "آتُوا": {
  "k": "2:43",
  "i": 2
 },
 "ارْكَعُوا": {
  "k": "2:43",
  "i": 4
 },
 "اسْجُدُوا": {
  "k": "22:77",
  "i": 4
 },
 "تَابَ": {
  "k": "25:71",
  "i": 1
 },
 "هَاجَرَ": {
  "k": "2:218",
  "i": 4,
  "n": "Quran mein 'هَاجَرُوا' (unhon ne hijrat ki) aata hai — 'هَاجَرَ' ki jama."
 },
 "قَاتَلَ": {
  "k": "57:10",
  "i": 19
 },
 "قَتَلَ": {
  "k": "5:32",
  "i": 9
 },
 "مَاتَ": {
  "k": "3:144",
  "i": 10
 },
 "أَحْيَا": {
  "k": "53:44",
  "i": 3
 },
 "أَمَاتَ": {
  "k": "53:44",
  "i": 2
 },
 "أَنْفَقَ": {
  "k": "57:10",
  "i": 15
 },
 "أَنْفِقُوا": {
  "k": "64:16",
  "i": 6
 },
 "أَكَلَ": {
  "k": "12:14",
  "i": 2,
  "n": "Quran mein 'أَكَلَهُ' (usay kha liya) aata hai."
 },
 "كُلُوا": {
  "k": "67:15",
  "i": 9
 },
 "شَرِبَ": {
  "k": "2:249",
  "i": 10
 },
 "اشْرَبُوا": {
  "k": "7:31",
  "i": 8
 },
 "سَارَ": {
  "k": "28:29",
  "i": 4
 },
 "سِيرُوا": {
  "k": "6:11",
  "i": 1
 },
 "أَخْرَجَ": {
  "k": "87:4",
  "i": 1
 },
 "أَدْخَلَ": {
  "k": "27:12",
  "i": 0,
  "n": "Quran mein 'أَدْخَلَ' (madi) nahi, 'أَدْخِلْ' (dakhil kar) aata hai."
 },
 "رَفَعَ": {
  "k": "55:7",
  "i": 1,
  "n": "Quran mein 'رَفَعَهَا' (usay buland kiya) aata hai."
 },
 "جَمَعَ": {
  "k": "104:2",
  "i": 1
 },
 "حَكَمَ": {
  "k": "40:48",
  "i": 9
 },
 "قَضَى": {
  "k": "28:29",
  "i": 1
 },
 "قَصَّ": {
  "k": "28:25",
  "i": 16
 },
 "كَتَبَ": {
  "k": "58:21",
  "i": 0
 },
 "اقْرَأْ": {
  "k": "96:1",
  "i": 0
 },
 "تَلَا": {
  "k": "91:2",
  "i": 2,
  "n": "Quran mein 'تَلَاهَا' (uske peeche aaya) aata hai."
 },
 "أَمَرَ": {
  "k": "12:40",
  "i": 19
 },
 "حَرَّمَ": {
  "k": "2:275",
  "i": 23
 },
 "أَحَلَّ": {
  "k": "2:275",
  "i": 20
 },
 "بَدَّلَ": {
  "k": "2:181",
  "i": 1,
  "n": "Quran mein 'بَدَّلَهُ' (use badal diya) aata hai."
 },
 "بَلَغَ": {
  "k": "12:22",
  "i": 1
 },
 "ظَنَّ": {
  "k": "24:12",
  "i": 3
 },
 "حَسِبَ": {
  "k": "29:2",
  "i": 0,
  "n": "Quran mein 'أَحَسِبَ' (kya samjha?) aata hai — 'حَسِبَ' ke saath sawaliya hamza."
 },
 "أَنْذَرَ": {
  "k": "46:21",
  "i": 4
 },
 "نَصَرَ": {
  "k": "9:40",
  "i": 3,
  "n": "Quran mein 'نَصَرَهُ' (uski madad ki) aata hai."
 },
 "هَلَكَ": {
  "k": "69:29",
  "i": 0
 },
 "أَهْلَكَ": {
  "k": "53:50",
  "i": 1
 },
 "نَجَّى": {
  "k": "21:88",
  "i": 2,
  "n": "Quran mein 'نَجَّيْنَاهُ' (hum ne use bachaya) aata hai — 'نَجَّى' ka hi fe'l."
 },
 "غَلَبَ": {
  "k": "2:249",
  "i": 52,
  "n": "Quran mein 'غَلَبَتْ' (ghalib aayi) aata hai — 'غَلَبَ' ka muannas fe'l."
 },
 "ضَرَبَ": {
  "k": "36:78",
  "i": 0
 },
 "فَتَحَ": {
  "k": "2:76",
  "i": 14
 },
 "نَهَى": {
  "k": "79:40",
  "i": 5
 },
 "صَدَقَة": {
  "k": "9:103",
  "i": 3
 },
 "إِنْفَاق": {
  "k": "17:100",
  "i": 10
 },
 "إِحْسَان": {
  "k": "55:60",
  "i": 2
 },
 "مَعْرُوف": {
  "k": "3:104",
  "i": 7
 },
 "مُنْكَر": {
  "k": "29:45",
  "i": 13
 },
 "حَرَام": {
  "k": "16:116",
  "i": 9
 },
 "حَلَال": {
  "k": "2:168",
  "i": 6
 },
 "رِبَا": {
  "k": "2:275",
  "i": 2
 },
 "نِكَاح": {
  "k": "2:235",
  "i": 29
 },
 "طَلَاق": {
  "k": "2:227",
  "i": 2
 },
 "وَصِيَّة": {
  "k": "2:180",
  "i": 9
 },
 "شَهْر": {
  "k": "97:3",
  "i": 5
 },
 "رَمَضَان": {
  "k": "2:185",
  "i": 1
 },
 "آخِرَة": {
  "k": "93:4",
  "i": 0
 },
 "دُنْيَا": {
  "k": "87:16",
  "i": 3
 },
 "جَنَّة": {
  "k": "2:82",
  "i": 6
 },
 "جَنَّات": {
  "k": "2:25",
  "i": 7
 },
 "جَهَنَّم": {
  "k": "19:86",
  "i": 3
 },
 "جَحِيم": {
  "k": "82:14",
  "i": 3
 },
 "سَعِير": {
  "k": "42:7",
  "i": 21
 },
 "عَذَاب": {
  "k": "2:201",
  "i": 12
 },
 "أَجْر": {
  "k": "41:8",
  "i": 6
 },
 "جَزَاء": {
  "k": "78:36",
  "i": 0
 },
 "حِسَاب": {
  "k": "2:202",
  "i": 7
 },
 "قِيَامَة": {
  "k": "75:1",
  "i": 3
 },
 "سَاعَة": {
  "k": "54:1",
  "i": 1
 },
 "مَوْت": {
  "k": "3:185",
  "i": 3
 },
 "حَيَاة": {
  "k": "67:2",
  "i": 3
 },
 "قَبْر": {
  "k": "9:84",
  "i": 10
 },
 "صُور": {
  "k": "18:99",
  "i": 8
 },
 "شَفَاعَة": {
  "k": "20:109",
  "i": 3
 },
 "فِرْدَوْس": {
  "k": "23:11",
  "i": 2
 },
 "عَدْن": {
  "k": "61:12",
  "i": 13
 },
 "خُلْد": {
  "k": "25:15",
  "i": 5
 },
 "خَالِدِين": {
  "k": "98:8",
  "i": 9
 },
 "فَوْز": {
  "k": "85:11",
  "i": 12
 },
 "خُسْرَان": {
  "k": "39:15",
  "i": 17
 },
 "نَجَاة": {
  "k": "40:41",
  "i": 5
 },
 "حَشْر": {
  "k": "50:44",
  "i": 6
 },
 "غَيْب": {
  "k": "2:3",
  "i": 2
 },
 "عَرْش": {
  "k": "20:5",
  "i": 2
 },
 "كُرْسِيّ": {
  "k": "2:255",
  "i": 41
 },
 "زَقُّوم": {
  "k": "44:43",
  "i": 2
 },
 "حَمِيم": {
  "k": "56:42",
  "i": 2
 },
 "نَعِيم": {
  "k": "82:13",
  "i": 3
 },
 "رِضْوَان": {
  "k": "3:15",
  "i": 18
 },
 "حُور": {
  "k": "44:54",
  "i": 2
 },
 "أَنْهَار": {
  "k": "2:25",
  "i": 11
 },
 "فَاكِهَة": {
  "k": "55:68",
  "i": 1
 },
 "مُحَمَّد": {
  "k": "3:144",
  "i": 1,
  "n": "Hamare Nabi Muhammad ﷺ ka mubarak naam"
 },
 "آدَم": {
  "k": "2:31",
  "i": 1
 },
 "نُوح": {
  "k": "71:1",
  "i": 2
 },
 "إِبْرَاهِيم": {
  "k": "21:69",
  "i": 6
 },
 "إِسْمَاعِيل": {
  "k": "19:54",
  "i": 3
 },
 "إِسْحَاق": {
  "k": "37:112",
  "i": 1
 },
 "يَعْقُوب": {
  "k": "21:72",
  "i": 3
 },
 "يُوسُف": {
  "k": "12:4",
  "i": 2
 },
 "مُوسَى": {
  "k": "20:9",
  "i": 3
 },
 "هَارُون": {
  "k": "20:30",
  "i": 0
 },
 "عِيسَى": {
  "k": "3:59",
  "i": 2
 },
 "مَرْيَم": {
  "k": "3:42",
  "i": 3
 },
 "دَاوُود": {
  "k": "38:17",
  "i": 6
 },
 "سُلَيْمَان": {
  "k": "27:16",
  "i": 1
 },
 "أَيُّوب": {
  "k": "21:83",
  "i": 0
 },
 "يُونُس": {
  "k": "37:139",
  "i": 1
 },
 "زَكَرِيَّا": {
  "k": "21:89",
  "i": 0
 },
 "يَحْيَى": {
  "k": "19:12",
  "i": 0
 },
 "هُود": {
  "k": "11:50",
  "i": 3
 },
 "شُعَيْب": {
  "k": "29:36",
  "i": 3
 },
 "لُوط": {
  "k": "37:133",
  "i": 1
 },
 "فِرْعَوْن": {
  "k": "20:24",
  "i": 2
 },
 "قَارُون": {
  "k": "29:39",
  "i": 0
 },
 "لُقْمَان": {
  "k": "31:13",
  "i": 2
 },
 "إِسْرَائِيل": {
  "k": "2:40",
  "i": 1
 },
 "مِصْر": {
  "k": "12:99",
  "i": 9
 },
 "طُور": {
  "k": "2:63",
  "i": 5
 },
 "تَوْرَاة": {
  "k": "3:3",
  "i": 9
 },
 "إِنْجِيل": {
  "k": "3:48",
  "i": 4
 },
 "زَبُور": {
  "k": "21:105",
  "i": 3
 },
 "صُحُف": {
  "k": "87:18",
  "i": 3
 },
 "قَالَ": {
  "k": "20:25",
  "i": 0
 },
 "قَالُوا": {
  "k": "35:34",
  "i": 0
 },
 "يَقُولُ": {
  "k": "2:117",
  "i": 7
 },
 "قُلْ": {
  "k": "112:1",
  "i": 0
 },
 "كَانَ": {
  "k": "17:81",
  "i": 7
 },
 "كَانُوا": {
  "k": "56:45",
  "i": 1
 },
 "يَكُونُ": {
  "k": "3:47",
  "i": 3
 },
 "كُنْ": {
  "k": "36:82",
  "i": 8
 },
 "جَاءَ": {
  "k": "110:1",
  "i": 1
 },
 "يَأْتِي": {
  "k": "30:43",
  "i": 7
 },
 "خَرَجَ": {
  "k": "28:21",
  "i": 0
 },
 "دَخَلَ": {
  "k": "18:35",
  "i": 0
 },
 "ادْخُلُوا": {
  "k": "16:32",
  "i": 7
 },
 "رَجَعَ": {
  "k": "7:150",
  "i": 1
 },
 "اتَّبَعَ": {
  "k": "28:50",
  "i": 11
 },
 "قَامَ": {
  "k": "72:19",
  "i": 2
 },
 "الْمُحِيط": {
  "k": "2:19",
  "i": 17
 },
 "الْوَدُود": {
  "k": "85:14",
  "i": 2
 },
 "الشَّكُور": {
  "k": "35:34",
  "i": 10
 },
 "الْحَلِيم": {
  "k": "2:235",
  "i": 46
 },
 "الْعَلِيّ": {
  "k": "2:255",
  "i": 48
 },
 "ثَلَاثَة": {
  "k": "2:196",
  "i": 48
 },
 "ثَمَانِيَة": {
  "k": "6:143",
  "i": 0
 },
 "عَشَرَة": {
  "k": "2:196",
  "i": 56
 },
 "مِائَة": {
  "k": "37:147",
  "i": 2
 },
 "تُرَاب": {
  "k": "3:59",
  "i": 9
 },
 "رُمَّان": {
  "k": "55:68",
  "i": 3
 },
 "تِين": {
  "k": "95:1",
  "i": 0
 },
 "فَجّ": {
  "k": "22:27",
  "i": 12
 },
 "خَمْر": {
  "k": "47:15",
  "i": 19
 },
 "مَرَض": {
  "k": "33:32",
  "i": 15
 },
 "حَزَن": {
  "k": "35:34",
  "i": 6
 },
 "ضُرّ": {
  "k": "21:83",
  "i": 6
 },
 "فَضْل": {
  "k": "27:16",
  "i": 16
 },
 "رَحْمَة": {
  "k": "17:100",
  "i": 5
 },
 "كَذِب": {
  "k": "16:116",
  "i": 5
 },
 "إِثْم": {
  "k": "2:173",
  "i": 19
 },
 "عَفْو": {
  "k": "7:199",
  "i": 1
 },
 "حَسَنَة": {
  "k": "4:79",
  "i": 3
 },
 "سَيِّئَة": {
  "k": "4:79",
  "i": 9
 },
 "تَصَدَّقَ": {
  "k": "5:45",
  "i": 17
 },
 "صَلَّى": {
  "k": "96:10",
  "i": 2
 },
 "أَجَل": {
  "k": "35:45",
  "i": 15
 },
 "نُشُور": {
  "k": "67:15",
  "i": 13
 },
 "حَافِظ": {
  "k": "86:4",
  "i": 5
 },
 "شَيْء": {
  "k": "57:2",
  "i": 9
 },
 "أَمْر": {
  "k": "17:85",
  "i": 6
 },
 "عِلْم": {
  "k": "2:32",
  "i": 3
 },
 "قَوْل": {
  "k": "58:2",
  "i": 17
 },
 "بَاطِل": {
  "k": "17:81",
  "i": 4
 },
 "وَعْد": {
  "k": "67:25",
  "i": 3
 },
 "شَرّ": {
  "k": "113:2",
  "i": 1
 },
 "سُوء": {
  "k": "27:12",
  "i": 8
 },
 "الْآخِر": {
  "k": "29:36",
  "i": 10
 },
 "مَدْيَن": {
  "k": "29:36",
  "i": 1
 },
 "وَاد": {
  "k": "27:18",
  "i": 4
 },
 "كَسَبَ": {
  "k": "111:2",
  "i": 5
 },
 "خُفْيَة": {
  "k": "7:55",
  "i": 3
 },
 "إِبْلِيس": {
  "k": "2:34",
  "i": 7
 },
 "سِدْرَة": {
  "k": "53:14",
  "i": 1
 },
 "طَالُوت": {
  "k": "2:249",
  "i": 2
 },
 "نَزَّلَ": {
  "k": "3:3",
  "i": 0
 },
 "عَلَّمَ": {
  "k": "96:4",
  "i": 1
 },
 "اسْتَكْبَرَ": {
  "k": "2:34",
  "i": 9
 },
 "يَوْمَئِذٍ": {
  "k": "75:10",
  "i": 2
 },
 "نُطْفَة": {
  "k": "40:67",
  "i": 7
 },
 "عَلَقَة": {
  "k": "40:67",
  "i": 10
 },
 "عِظَام": {
  "k": "36:78",
  "i": 8
 },
 "فَخَّار": {
  "k": "55:14",
  "i": 4
 },
 "صَلْصَال": {
  "k": "55:14",
  "i": 3
 },
 "أَلْوَاح": {
  "k": "7:150",
  "i": 16
 },
 "فَازَ": {
  "k": "3:185",
  "i": 16
 },
 "خَزَائِن": {
  "k": "17:100",
  "i": 4
 },
 "مَتَاع": {
  "k": "3:185",
  "i": 21
 },
 "نَصِيب": {
  "k": "2:202",
  "i": 2
 },
 "عَطَاء": {
  "k": "78:36",
  "i": 3
 },
 "بَيْع": {
  "k": "2:275",
  "i": 22
 },
 "حِين": {
  "k": "7:24",
  "i": 11
 },
 "أَلْف": {
  "k": "97:3",
  "i": 4
 },
 "دُبُر": {
  "k": "12:25",
  "i": 5
 },
 "جَانِب": {
  "k": "28:29",
  "i": 8
 },
 "حَبَّة": {
  "k": "6:59",
  "i": 19
 },
 "الرَّءُوف": {
  "k": "22:65",
  "i": 25
 },
 "الْبَرّ": {
  "k": "52:28",
  "i": 7
 },
 "الْمُقِيت": {
  "k": "4:85",
  "i": 21,
  "n": "Quran mein 'مُقِيتًا' (nigahbaan, quwwat dene wala) aata hai."
 },
 "الْحَفِيظ": {
  "k": "34:21",
  "i": 20
 },
 "الْحَكَم": {
  "k": "6:114",
  "i": 3,
  "n": "Quran mein 'حَكَمًا' (faisla karne wala) aata hai."
 },
 "اثْنَان": {
  "k": "16:51",
  "i": 5,
  "n": "Quran mein 'اثْنَيْنِ' (do) aata hai."
 },
 "أَرْبَعَة": {
  "k": "9:2",
  "i": 3
 },
 "خَمْسَة": {
  "k": "18:22",
  "i": 5
 },
 "سِتَّة": {
  "k": "50:38",
  "i": 7
 },
 "سَبْعَة": {
  "k": "18:22",
  "i": 11
 },
 "تِسْعَة": {
  "k": "17:101",
  "i": 3,
  "n": "Quran mein 'تِسْعَ' (nau) aata hai."
 },
 "ذَرَّة": {
  "k": "99:7",
  "i": 3
 },
 "كَثِيب": {
  "k": "73:14",
  "i": 6,
  "n": "Quran mein 'كَثِيبًا' (rait ka teela) aata hai."
 },
 "عَصَا": {
  "k": "7:107",
  "i": 1,
  "n": "Quran mein 'عَصَاهُ' (unki laathi) aata hai."
 },
 "سَفِينَة": {
  "k": "18:71",
  "i": 5
 },
 "كَوْكَب": {
  "k": "12:4",
  "i": 9,
  "n": "Quran mein 'كَوْكَبًا' (sitaara) aata hai."
 },
 "عُرْجُون": {
  "k": "36:39",
  "i": 5,
  "n": "Quran mein 'كَالْعُرْجُونِ' (khajoor ke puraane guchhe ki tarah) aata hai."
 },
 "عَدَس": {
  "k": "2:61",
  "i": 20,
  "n": "Quran mein 'وَعَدَسِهَا' (aur uski masoor) aata hai."
 },
 "بَقْل": {
  "k": "2:61",
  "i": 17,
  "n": "Quran mein 'بَقْلِهَا' (uski sabzi) aata hai."
 },
 "قِثَّاء": {
  "k": "2:61",
  "i": 18,
  "n": "Quran mein 'وَقِثَّائِهَا' (aur uska kheera) aata hai."
 },
 "فُوم": {
  "k": "2:61",
  "i": 19,
  "n": "Quran mein 'وَفُومِهَا' (aur uska lehsan/gandum) aata hai."
 },
 "بَيْض": {
  "k": "37:49",
  "i": 1
 },
 "شَرَاب": {
  "k": "16:10",
  "i": 8
 },
 "زَيْت": {
  "k": "24:35",
  "i": 26,
  "n": "Quran mein 'زَيْتُهَا' (uska tel) aata hai."
 },
 "خُبْز": {
  "k": "12:36",
  "i": 17,
  "n": "Quran mein 'خُبْزًا' (roti) aata hai."
 },
 "شِفَاء": {
  "k": "10:57",
  "i": 7
 },
 "فَرَح": {
  "k": "30:4",
  "i": 10,
  "n": "Quran mein 'يَفْرَحُ' (khush hota hai) aata hai."
 },
 "خَوْف": {
  "k": "106:4",
  "i": 6
 },
 "أَمْن": {
  "k": "24:55",
  "i": 25,
  "n": "Quran mein 'أَمْنًا' (aman) aata hai."
 },
 "نَفْع": {
  "k": "26:88",
  "i": 2,
  "n": "Quran mein 'يَنْفَعُ' (faaida deta hai) aata hai."
 },
 "صِدْق": {
  "k": "54:55",
  "i": 2
 },
 "عَدْل": {
  "k": "16:90",
  "i": 3
 },
 "ظُلْم": {
  "k": "31:13",
  "i": 12
 },
 "غَيْظ": {
  "k": "3:134",
  "i": 6
 },
 "حَسَد": {
  "k": "113:5",
  "i": 4
 },
 "أَصْلَحَ": {
  "k": "6:48",
  "i": 8
 },
 "أَفْسَدَ": {
  "k": "27:34",
  "i": 6,
  "n": "Quran mein 'أَفْسَدُوهَا' (unhon ne use bigaad diya) aata hai."
 },
 "أَسْرَفَ": {
  "k": "39:53",
  "i": 3,
  "n": "Quran mein 'أَسْرَفُوا' (unhon ne had se badhaya) aata hai."
 },
 "أَقْرَضَ": {
  "k": "57:11",
  "i": 3,
  "n": "Quran mein 'يُقْرِضُ' (qarz deta hai) aata hai."
 },
 "اسْتَغْفَرَ": {
  "k": "3:135",
  "i": 9,
  "n": "Quran mein 'فَاسْتَغْفَرُوا' (phir unhon ne bakhshish maangi) aata hai."
 },
 "سَبَّحَ": {
  "k": "57:1",
  "i": 0
 },
 "ذَكَرَ": {
  "k": "87:15",
  "i": 0
 },
 "شَكَرَ": {
  "k": "27:40",
  "i": 28
 },
 "سُوق": {
  "k": "25:7",
  "i": 8,
  "n": "Quran mein 'الْأَسْوَاقِ' (bazaaron) aata hai."
 },
 "قَصْر": {
  "k": "25:10",
  "i": 16,
  "n": "Quran mein 'قُصُورًا' (mehal) aata hai."
 },
 "سَرِير": {
  "k": "15:47",
  "i": 8,
  "n": "Quran mein 'سُرُرٍ' (takht) aata hai."
 },
 "سُرَادِق": {
  "k": "18:29",
  "i": 16,
  "n": "Quran mein 'سُرَادِقُهَا' (uska khaima) aata hai."
 },
 "بُنْيَان": {
  "k": "61:4",
  "i": 9
 },
 "سُور": {
  "k": "57:13",
  "i": 17
 },
 "مِصْبَاح": {
  "k": "24:35",
  "i": 8
 },
 "زُجَاجَة": {
  "k": "24:35",
  "i": 11
 },
 "مِشْكَاة": {
  "k": "24:35",
  "i": 6,
  "n": "Quran mein 'كَمِشْكَاةٍ' (taaq ki tarah) aata hai."
 },
 "أَوْتَاد": {
  "k": "78:7",
  "i": 1,
  "n": "Quran mein 'أَوْتَادًا' (mekhein) aata hai."
 },
 "بَرْزَخ": {
  "k": "23:100",
  "i": 12
 },
 "مِيعَاد": {
  "k": "3:9",
  "i": 12
 },
 "قُبُور": {
  "k": "100:9",
  "i": 6
 },
 "بَعْث": {
  "k": "22:7",
  "i": 8,
  "n": "Quran mein 'يَبْعَثُ' (dobara uthata hai) aata hai."
 },
 "رَقِيب": {
  "k": "50:18",
  "i": 6
 },
 "عَتِيد": {
  "k": "50:18",
  "i": 7
 },
 "كِرَام": {
  "k": "80:16",
  "i": 0
 },
 "عَمَل": {
  "k": "67:2",
  "i": 7,
  "n": "Quran mein 'عَمَلًا' (amal) aata hai."
 },
 "عَهْد": {
  "k": "2:40",
  "i": 8,
  "n": "Quran mein 'بِعَهْدِي' (mere ahd ko) aata hai."
 },
 "أَمَانَة": {
  "k": "33:72",
  "i": 2
 },
 "رِزْق": {
  "k": "51:22",
  "i": 2,
  "n": "Quran mein 'رِزْقُكُمْ' (tumhara rizq) aata hai."
 },
 "بِرّ": {
  "k": "3:92",
  "i": 2,
  "n": "Quran mein 'الْبِرَّ' (neki ko) aata hai."
 },
 "نُصْح": {
  "k": "11:34",
  "i": 2,
  "n": "Quran mein 'نُصْحِي' (meri khair-khwaahi) aata hai."
 },
 "تَقْوِيم": {
  "k": "95:4",
  "i": 5
 },
 "رُشْد": {
  "k": "2:256",
  "i": 6
 },
 "طَيِّب": {
  "k": "2:172",
  "i": 5,
  "n": "Quran mein 'طَيِّبَاتِ' (paakeeza cheezein) aata hai."
 },
 "خَبِيث": {
  "k": "5:100",
  "i": 3
 },
 "رَجَاء": {
  "k": "17:57",
  "i": 9,
  "n": "Quran mein 'وَيَرْجُونَ' (aur woh umeed rakhte hain) aata hai."
 },
 "نَقْص": {
  "k": "2:155",
  "i": 5
 },
 "الْمَاجِد": {
  "k": "85:15",
  "i": 2,
  "n": "Quran mein 'الْمَجِيدُ' (buzurgi wala (Quran mein 'Majeed')) aata hai."
 },
 "الْقَادِر": {
  "k": "77:23",
  "i": 2,
  "n": "Quran mein 'الْقَادِرُونَ' (qudrat rakhne wale) aata hai."
 },
 "الْمُقْتَدِر": {
  "k": "54:55",
  "i": 5
 },
 "الْأَوَّل": {
  "k": "57:3",
  "i": 1
 },
 "الظَّاهِر": {
  "k": "57:3",
  "i": 3
 },
 "الْبَاطِن": {
  "k": "57:3",
  "i": 4
 },
 "الْوَالِي": {
  "k": "13:11",
  "i": 34,
  "n": "Quran mein 'وَالٍ' (hukmraan) aata hai."
 },
 "الْمُحْيِي": {
  "k": "57:2",
  "i": 4,
  "n": "Quran mein 'يُحْيِي' (zinda karta hai) aata hai."
 },
 "الْمُمِيت": {
  "k": "57:2",
  "i": 5,
  "n": "Quran mein 'وَيُمِيتُ' (aur maut deta hai) aata hai."
 },
 "صَدِيق": {
  "k": "24:61",
  "i": 48,
  "n": "Quran mein 'صَدِيقِكُمْ' (tumhara dost) aata hai."
 },
 "جَار": {
  "k": "4:36",
  "i": 12
 },
 "ضَيْف": {
  "k": "51:24",
  "i": 3
 },
 "بَعِيد": {
  "k": "11:89",
  "i": 21,
  "n": "Quran mein 'بِبَعِيدٍ' (door ke saath) aata hai."
 },
 "شَيْخ": {
  "k": "11:72",
  "i": 7,
  "n": "Quran mein 'شَيْخًا' (boorha) aata hai."
 },
 "فَتَى": {
  "k": "21:60",
  "i": 2
 },
 "رَفِيق": {
  "k": "4:69",
  "i": 17,
  "n": "Quran mein 'رَفِيقًا' (saathi) aata hai."
 },
 "طَاغُوت": {
  "k": "2:256",
  "i": 11
 },
 "خَصِيم": {
  "k": "16:4",
  "i": 6
 },
 "أَمِين": {
  "k": "26:107",
  "i": 3
 },
 "عَمّ": {
  "k": "24:61",
  "i": 33,
  "n": "Quran mein 'أَعْمَامِكُمْ' (tumhare chachaon) aata hai."
 },
 "عَمَّة": {
  "k": "24:61",
  "i": 36,
  "n": "Quran mein 'عَمَّاتِكُمْ' (tumhari phoophiyon) aata hai."
 },
 "خَال": {
  "k": "24:61",
  "i": 39,
  "n": "Quran mein 'أَخْوَالِكُمْ' (tumhare maamoon) aata hai."
 },
 "خَالَة": {
  "k": "24:61",
  "i": 42,
  "n": "Quran mein 'خَالَاتِكُمْ' (tumhari khaalaon) aata hai."
 },
 "عَجُوز": {
  "k": "11:72",
  "i": 4
 },
 "بَعْل": {
  "k": "11:72",
  "i": 6,
  "n": "Quran mein 'بَعْلِي' (mera shauhar) aata hai."
 },
 "أَيْكَة": {
  "k": "26:176",
  "i": 2
 },
 "بَابِل": {
  "k": "2:102",
  "i": 20,
  "n": "Quran mein 'بِبَابِلَ' (baabil mein) aata hai."
 },
 "بَدْر": {
  "k": "3:123",
  "i": 3,
  "n": "Quran mein 'بِبَدْرٍ' (badr mein) aata hai."
 },
 "حُنَيْن": {
  "k": "9:25",
  "i": 7
 },
 "سِينَا": {
  "k": "23:20",
  "i": 4,
  "n": "Quran mein 'سَيْنَاءَ' (seena (Quran ka imlaa)) aata hai."
 },
 "كَهْف": {
  "k": "18:9",
  "i": 4
 },
 "رَقِيم": {
  "k": "18:9",
  "i": 5
 },
 "جُرُف": {
  "k": "9:109",
  "i": 15
 },
 "هَارُوت": {
  "k": "2:102",
  "i": 21
 },
 "مَارُوت": {
  "k": "2:102",
  "i": 22
 },
 "بَغَى": {
  "k": "10:23",
  "i": 4,
  "n": "Quran mein 'يَبْغُونَ' (woh sarkashi karte hain) aata hai."
 },
 "فَسَقَ": {
  "k": "18:50",
  "i": 11,
  "n": "Quran mein 'فَفَسَقَ' (phir usne nafarmaani ki) aata hai."
 },
 "أَجْرَمَ": {
  "k": "83:29",
  "i": 2,
  "n": "Quran mein 'أَجْرَمُوا' (unhon ne jurm kiya) aata hai."
 },
 "حَاقَ": {
  "k": "16:34",
  "i": 4
 },
 "بَاءَ": {
  "k": "2:61",
  "i": 40,
  "n": "Quran mein 'وَبَاءُوا' (aur woh laute) aata hai."
 },
 "أَصَابَ": {
  "k": "4:79",
  "i": 1,
  "n": "Quran mein 'أَصَابَكَ' (tujhe pahuncha) aata hai."
 },
 "أَطَاعَ": {
  "k": "4:80",
  "i": 4
 },
 "خَالَفَ": {
  "k": "24:63",
  "i": 17,
  "n": "Quran mein 'يُخَالِفُونَ' (woh mukhaalifat karte hain) aata hai."
 },
 "صَدَّ": {
  "k": "47:1",
  "i": 2,
  "n": "Quran mein 'وَصَدُّوا' (aur unhon ne roka) aata hai."
 },
 "لَبِسَ": {
  "k": "18:31",
  "i": 14,
  "n": "Quran mein 'وَيَلْبَسُونَ' (aur woh pehnte hain) aata hai."
 },
 "قَعَدَ": {
  "k": "4:95",
  "i": 2,
  "n": "Quran mein 'الْقَاعِدُونَ' (baithne wale) aata hai."
 },
 "مَشَى": {
  "k": "25:7",
  "i": 6,
  "n": "Quran mein 'وَيَمْشِي' (aur chalta hai) aata hai."
 },
 "جَرَى": {
  "k": "25:10",
  "i": 10,
  "n": "Quran mein 'تَجْرِي' (behti hain) aata hai."
 },
 "رَكِبَ": {
  "k": "18:71",
  "i": 3,
  "n": "Quran mein 'رَكِبَا' (dono sawaar hue) aata hai."
 },
 "حَمَلَ": {
  "k": "19:22",
  "i": 0,
  "n": "Quran mein 'فَحَمَلَتْهُ' (phir us (aurat) ne use uthaaya) aata hai."
 },
 "وَضَعَ": {
  "k": "3:36",
  "i": 1,
  "n": "Quran mein 'وَضَعَتْهَا' (us ne use janam diya) aata hai."
 },
 "سَقَى": {
  "k": "76:21",
  "i": 9,
  "n": "Quran mein 'وَسَقَاهُمْ' (aur unhein pilaaya) aata hai."
 },
 "لَبِثَ": {
  "k": "18:19",
  "i": 10,
  "n": "Quran mein 'لَبِثْنَا' (hum thehre) aata hai."
 },
 "قُنُوت": {
  "k": "66:12",
  "i": 16,
  "n": "Quran mein 'الْقَانِتِينَ' (farmaabardaar) aata hai."
 },
 "خُشُوع": {
  "k": "17:109",
  "i": 4,
  "n": "Quran mein 'خُشُوعًا' (aajizi) aata hai."
 },
 "تَهَجُّد": {
  "k": "17:79",
  "i": 2
 },
 "هَمْس": {
  "k": "20:108",
  "i": 12,
  "n": "Quran mein 'هَمْسًا' (dhimi aawaaz) aata hai."
 },
 "تَرْتِيل": {
  "k": "73:4",
  "i": 5,
  "n": "Quran mein 'تَرْتِيلًا' (thehar thehar kar padhna) aata hai."
 },
 "تَكْبِير": {
  "k": "17:111",
  "i": 20,
  "n": "Quran mein 'تَكْبِيرًا' (badaai bayaan karna) aata hai."
 },
 "تَضَرُّع": {
  "k": "6:63",
  "i": 8,
  "n": "Quran mein 'تَضَرُّعًا' (girgira kar) aata hai."
 },
 "نَسَب": {
  "k": "25:54",
  "i": 7,
  "n": "Quran mein 'نَسَبًا' (khaandaani rishta) aata hai."
 },
 "صِهْر": {
  "k": "25:54",
  "i": 8,
  "n": "Quran mein 'وَصِهْرًا' (aur susraal) aata hai."
 },
 "نَسْل": {
  "k": "2:205",
  "i": 9
 },
 "صَاحِبَة": {
  "k": "6:101",
  "i": 10
 },
 "مِيكَال": {
  "k": "2:98",
  "i": 7
 },
 "جِبْرِيل": {
  "k": "2:98",
  "i": 6
 },
 "لَوْح": {
  "k": "85:22",
  "i": 1
 },
 "مَحْفُوظ": {
  "k": "85:22",
  "i": 2
 },
 "غِلْمَان": {
  "k": "52:24",
  "i": 2
 },
 "وِلْدَان": {
  "k": "56:17",
  "i": 2
 },
 "إِدْرِيس": {
  "k": "19:56",
  "i": 3
 },
 "إِلْيَاس": {
  "k": "37:123",
  "i": 1
 },
 "الْيَسَع": {
  "k": "38:48",
  "i": 2
 },
 "عُزَيْر": {
  "k": "9:30",
  "i": 2
 },
 "جَالُوت": {
  "k": "2:251",
  "i": 5
 },
 "أَحْمَد": {
  "k": "61:6",
  "i": 23
 },
 "يَأْجُوج": {
  "k": "21:96",
  "i": 3
 },
 "مَأْجُوج": {
  "k": "21:96",
  "i": 4
 },
 "أَوْحَى": {
  "k": "53:10",
  "i": 0
 },
 "بَيَّنَ": {
  "k": "57:17",
  "i": 8
 },
 "فَصَّلَ": {
  "k": "6:98",
  "i": 9
 },
 "أَلْهَمَ": {
  "k": "91:8",
  "i": 0
 },
 "بَلَّغَ": {
  "k": "72:28",
  "i": 3
 },
 "حَفِظَ": {
  "k": "15:9",
  "i": 6
 },
 "أَقْرَأَ": {
  "k": "96:1",
  "i": 0
 },
 "ذَكَّرَ": {
  "k": "88:21",
  "i": 0
 },
 "رَغِبَ": {
  "k": "94:8",
  "i": 2
 },
 "سَعَى": {
  "k": "53:39",
  "i": 5
 },
 "جَاهَدَ": {
  "k": "29:6",
  "i": 1
 },
 "سَارَعَ": {
  "k": "3:133",
  "i": 0
 },
 "شَاوَرَ": {
  "k": "42:38",
  "i": 6
 },
 "تَوَاصَى": {
  "k": "103:3",
  "i": 5
 },
 "تَعَاوَنَ": {
  "k": "5:2",
  "i": 37
 },
 "اسْتَعَانَ": {
  "k": "1:5",
  "i": 3
 },
 "أَخْلَصَ": {
  "k": "39:2",
  "i": 7
 },
 "اسْتَقَامَ": {
  "k": "46:13",
  "i": 6
 },
 "أَشْرَكَ": {
  "k": "4:48",
  "i": 14
 },
 "أَلْحَدَ": {
  "k": "41:40",
  "i": 2
 },
 "غَلّ": {
  "k": "3:161",
  "i": 9
 },
 "سَرَقَ": {
  "k": "5:38",
  "i": 0
 },
 "زَنَى": {
  "k": "17:32",
  "i": 2
 },
 "قَذَفَ": {
  "k": "34:48",
  "i": 3
 },
 "اغْتَابَ": {
  "k": "49:12",
  "i": 14
 },
 "سَخِرَ": {
  "k": "21:41",
  "i": 7
 },
 "اسْتَهْزَأَ": {
  "k": "21:41",
  "i": 1
 },
 "مَوْعِد": {
  "k": "54:46",
  "i": 2
 },
 "سَاهِرَة": {
  "k": "79:14",
  "i": 2
 },
 "طَامَّة": {
  "k": "79:34",
  "i": 2
 },
 "صَاخَّة": {
  "k": "80:33",
  "i": 2
 },
 "قَارِعَة": {
  "k": "101:1",
  "i": 0
 },
 "حَاقَّة": {
  "k": "69:1",
  "i": 0
 },
 "غَاشِيَة": {
  "k": "88:1",
  "i": 3
 },
 "وَاقِعَة": {
  "k": "56:1",
  "i": 2
 },
 "زَلْزَلَة": {
  "k": "22:1",
  "i": 5
 },
 "مَرِيض": {
  "k": "48:17",
  "i": 10
 },
 "أَعْرَج": {
  "k": "48:17",
  "i": 6
 },
 "أَعْمَى": {
  "k": "48:17",
  "i": 2
 },
 "أَصَمّ": {
  "k": "47:23",
  "i": 4
 },
 "أَبْكَم": {
  "k": "2:18",
  "i": 1
 },
 "مُضْغَة": {
  "k": "23:14",
  "i": 6
 },
 "شَفَة": {
  "k": "90:9",
  "i": 1
 },
 "نُحَاس": {
  "k": "55:35",
  "i": 5
 },
 "قِطْمِير": {
  "k": "35:13",
  "i": 27
 },
 "صَفْرَاء": {
  "k": "2:69",
  "i": 13
 },
 "حَمَأ": {
  "k": "15:26",
  "i": 6
 },
 "مَسْنُون": {
  "k": "15:26",
  "i": 7
 },
 "خَشَب": {
  "k": "63:4",
  "i": 9
 },
 "حَطَب": {
  "k": "111:4",
  "i": 2
 },
 "صَرَخَ": {
  "k": "36:43",
  "i": 4
 },
 "أَذَّنَ": {
  "k": "22:27",
  "i": 0
 },
 "جَادَلَ": {
  "k": "11:32",
  "i": 3
 },
 "حَاجَّ": {
  "k": "3:66",
  "i": 8
 },
 "سَبَّ": {
  "k": "6:108",
  "i": 1
 },
 "لَعَنَ": {
  "k": "4:52",
  "i": 2
 },
 "حَلَفَ": {
  "k": "9:56",
  "i": 0
 },
 "اسْتَغَاثَ": {
  "k": "8:9",
  "i": 1
 },
 "اسْتَنْصَرَ": {
  "k": "28:18",
  "i": 7
 },
 "نَاجَى": {
  "k": "58:12",
  "i": 4
 },
 "بَرَأَ": {
  "k": "59:24",
  "i": 3
 },
 "صَوَّرَ": {
  "k": "3:6",
  "i": 2
 },
 "فَطَرَ": {
  "k": "6:79",
  "i": 4
 },
 "أَبْدَأَ": {
  "k": "29:19",
  "i": 3
 },
 "أَعَادَ": {
  "k": "29:19",
  "i": 7
 },
 "ذَرَأَ": {
  "k": "23:79",
  "i": 2
 },
 "بَثَّ": {
  "k": "42:29",
  "i": 6
 },
 "أَنْبَتَ": {
  "k": "80:27",
  "i": 0
 },
 "أَنْشَأَ": {
  "k": "6:98",
  "i": 2
 },
 "أَحْصَى": {
  "k": "72:28",
  "i": 9
 },
 "خَشَعَ": {
  "k": "20:108",
  "i": 6
 },
 "أَنْكَرَ": {
  "k": "12:58",
  "i": 8
 },
 "تَدَبَّرَ": {
  "k": "47:24",
  "i": 1
 },
 "أَنْعَمَ": {
  "k": "1:7",
  "i": 2
 },
 "أَدْرَى": {
  "k": "69:3",
  "i": 1
 },
 "تَبَيَّنَ": {
  "k": "2:256",
  "i": 5
 },
 "زَعَمَ": {
  "k": "64:7",
  "i": 0
 },
 "عَقَلَ": {
  "k": "12:2",
  "i": 5
 },
 "شَعَرَ": {
  "k": "2:9",
  "i": 9
 },
 "أَحَسّ": {
  "k": "3:52",
  "i": 1
 },
 "مَنَعَ": {
  "k": "107:7",
  "i": 0
 },
 "بَخِلَ": {
  "k": "92:8",
  "i": 2
 },
 "بَسَطَ": {
  "k": "2:245",
  "i": 13
 },
 "قَبَضَ": {
  "k": "2:245",
  "i": 12
 },
 "وَهَبَ": {
  "k": "14:39",
  "i": 3
 },
 "غَنِمَ": {
  "k": "8:69",
  "i": 2
 },
 "بَاعَ": {
  "k": "2:275",
  "i": 17
 },
 "اشْتَرَى": {
  "k": "2:16",
  "i": 2
 },
 "اتَّخَذَ": {
  "k": "2:116",
  "i": 1
 },
 "كَنْز": {
  "k": "18:82",
  "i": 9
 },
 "حَظّ": {
  "k": "28:79",
  "i": 18
 },
 "زِينَة": {
  "k": "18:46",
  "i": 2
 },
 "رَغَد": {
  "k": "2:35",
  "i": 8
 },
 "سِعَة": {
  "k": "65:7",
  "i": 2
 },
 "تِجَارَة": {
  "k": "24:37",
  "i": 3
 },
 "مَيْسِر": {
  "k": "5:90",
  "i": 5
 },
 "مِثْقَال": {
  "k": "99:7",
  "i": 2
 },
 "دِينَار": {
  "k": "3:75",
  "i": 13
 },
 "وَزْن": {
  "k": "55:9",
  "i": 1
 },
 "كَيْل": {
  "k": "6:152",
  "i": 12
 },
 "مِكْيَال": {
  "k": "11:84",
  "i": 15
 },
 "قِسْط": {
  "k": "5:42",
  "i": 21
 },
 "سَنَة": {
  "k": "29:14",
  "i": 8
 },
 "عَام": {
  "k": "29:14",
  "i": 11
 },
 "صَيْف": {
  "k": "106:2",
  "i": 3
 },
 "شِتَاء": {
  "k": "106:2",
  "i": 2
 },
 "سَحَر": {
  "k": "54:34",
  "i": 8
 },
 "أُفُق": {
  "k": "81:23",
  "i": 2
 },
 "صُبْح": {
  "k": "11:81",
  "i": 25
 },
 "ضُحَى": {
  "k": "93:1",
  "i": 0
 },
 "أَصِيل": {
  "k": "33:42",
  "i": 2
 },
 "بِضْع": {
  "k": "12:42",
  "i": 16
 },
 "نِصْف": {
  "k": "4:12",
  "i": 1
 },
 "ثُلُث": {
  "k": "4:12",
  "i": 72
 },
 "رُبُع": {
  "k": "4:12",
  "i": 15
 },
 "سُدُس": {
  "k": "4:12",
  "i": 63
 },
 "ثُمُن": {
  "k": "4:12",
  "i": 39
 },
 "عِشْرُون": {
  "k": "8:65",
  "i": 9
 },
 "ثَلَاثُون": {
  "k": "46:15",
  "i": 11
 },
 "يَمِين": {
  "k": "18:17",
  "i": 8
 },
 "شِمَال": {
  "k": "18:17",
  "i": 13
 },
 "مَشْرِق": {
  "k": "2:115",
  "i": 1
 },
 "مَغْرِب": {
  "k": "2:115",
  "i": 2
 },
 "أَمَام": {
  "k": "75:5",
  "i": 4
 },
 "وَرَاء": {
  "k": "18:79",
  "i": 11
 },
 "وَسَط": {
  "k": "2:143",
  "i": 3
 },
 "خَرْدَل": {
  "k": "21:47",
  "i": 14
 },
 "سُنْبُلَة": {
  "k": "2:261",
  "i": 14
 },
 "زَهْرَة": {
  "k": "20:131",
  "i": 9
 },
 "نَوَى": {
  "k": "6:95",
  "i": 4
 },
 "جَنَاح": {
  "k": "17:24",
  "i": 2
 },
 "خَالِص": {
  "k": "39:3",
  "i": 3
 },
 "يَنْبُوع": {
  "k": "17:90",
  "i": 9
 },
 "خَلِيفَة": {
  "k": "2:30",
  "i": 8
 },
 "أَوَى": {
  "k": "18:10",
  "i": 1
 },
 "جَزَى": {
  "k": "76:12",
  "i": 0
 },
 "ذَاقَ": {
  "k": "65:9",
  "i": 0
 },
 "فَرَّ": {
  "k": "80:34",
  "i": 1
 },
 "لِمَ": {
  "k": "3:70",
  "i": 2
 },
 "طَهُور": {
  "k": "25:48",
  "i": 12
 },
 "مُفْلِحُون": {
  "k": "2:5",
  "i": 7
 },
 "تَهْلُكَة": {
  "k": "2:195",
  "i": 8
 },
 "طَلَبًا": {
  "k": "18:41",
  "i": 7
 },
 "أَرْجَاء": {
  "k": "69:17",
  "i": 2
 },
 "السَّلَامُ": {
  "k": "59:23",
  "i": 9
 },
 "بَرَكَات": {
  "k": "11:73",
  "i": 7
 },
 "دَرَاهِم": {
  "k": "12:20",
  "i": 3
 },
 "مِائَتَيْنِ": {
  "k": "8:65",
  "i": 12
 },
 "أَلْبَاب": {
  "k": "3:190",
  "i": 10
 },
 "بَصَل": {
  "k": "2:61",
  "i": 21
 },
 "رُقُود": {
  "k": "18:18",
  "i": 3
 },
 "اسْتِغْفَار": {
  "k": "9:114",
  "i": 2
 },
 "قِيَام": {
  "k": "25:64",
  "i": 4
 },
 "بِسْمِ": {
  "k": "1:1",
  "i": 0
 },
 "الْحَمْدُ": {
  "k": "1:2",
  "i": 0
 },
 "لِلَّهِ": {
  "k": "1:2",
  "i": 1
 },
 "يَوْمِ": {
  "k": "1:4",
  "i": 1
 },
 "الصِّرَاطَ": {
  "k": "1:6",
  "i": 1
 },
 "اللَّهَ": {
  "k": "2:20",
  "i": 20
 },
 "النَّاسُ": {
  "k": "2:21",
  "i": 1
 },
 "وَلَا": {
  "k": "2:152",
  "i": 4
 },
 "الصَّابِرِينَ": {
  "k": "2:153",
  "i": 9
 },
 "وَاشْكُرُوا": {
  "k": "2:172",
  "i": 8
 },
 "غَفُورٌ": {
  "k": "2:173",
  "i": 23
 },
 "رَبَّنَا": {
  "k": "2:201",
  "i": 3
 },
 "آتِنَا": {
  "k": "2:201",
  "i": 4
 },
 "الْحَيُّ": {
  "k": "2:255",
  "i": 5
 },
 "وَاعْفُ": {
  "k": "2:286",
  "i": 38
 },
 "وَاغْفِرْ": {
  "k": "2:286",
  "i": 40
 },
 "شَهِدَ": {
  "k": "3:18",
  "i": 0
 },
 "وَاللَّهُ": {
  "k": "3:57",
  "i": 7
 },
 "وَأَطِيعُوا": {
  "k": "4:59",
  "i": 5
 },
 "وَاسْتَغْفِرِ": {
  "k": "4:106",
  "i": 0
 },
 "وَاذْكُرُوا": {
  "k": "5:7",
  "i": 0
 },
 "لِي": {
  "k": "7:151",
  "i": 3
 },
 "قُوَّةَ": {
  "k": "18:39",
  "i": 9
 },
 "اشْرَحْ": {
  "k": "20:25",
  "i": 2
 },
 "زِدْنِي": {
  "k": "20:114",
  "i": 15
 },
 "الْعَلِيُّ": {
  "k": "22:62",
  "i": 15
 },
 "أَنْزِلْنِي": {
  "k": "23:29",
  "i": 2
 },
 "سَمِيعٌ": {
  "k": "31:28",
  "i": 9
 },
 "صَلُّوا": {
  "k": "33:56",
  "i": 9
 },
 "مِنَ": {
  "k": "37:112",
  "i": 3
 },
 "وَذَا": {
  "k": "38:48",
  "i": 3
 },
 "إِلَهَ": {
  "k": "47:19",
  "i": 3
 },
 "فَسَبِّحْ": {
  "k": "56:74",
  "i": 0
 },
 "سَبِّحِ": {
  "k": "87:1",
  "i": 0
 },
 "وَسُبْحَانَ": {
  "k": "12:108",
  "i": 11
 },
 "مُسْلِمُونَ": {
  "k": "3:102",
  "i": 11
 },
 "الرَّسُولَ": {
  "k": "4:59",
  "i": 6
 }
};

const ayatText = {
 "1:1": {
  "sn": "الفاتحة",
  "sr": "Al-Fatiha",
  "t": "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
 },
 "1:2": {
  "sn": "الفاتحة",
  "sr": "Al-Fatiha",
  "t": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
 },
 "1:3": {
  "sn": "الفاتحة",
  "sr": "Al-Fatiha",
  "t": "الرَّحْمَنِ الرَّحِيمِ"
 },
 "1:5": {
  "sn": "الفاتحة",
  "sr": "Al-Fatiha",
  "t": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ"
 },
 "1:7": {
  "sn": "الفاتحة",
  "sr": "Al-Fatiha",
  "t": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"
 },
 "2:2": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ"
 },
 "2:5": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "أُولَئِكَ عَلَى هُدًى مِنْ رَبِّهِمْ وَأُولَئِكَ هُمُ الْمُفْلِحُونَ"
 },
 "2:21": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "يَاأَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ"
 },
 "2:24": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "فَإِنْ لَمْ تَفْعَلُوا وَلَنْ تَفْعَلُوا فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ أُعِدَّتْ لِلْكَافِرِينَ"
 },
 "2:31": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا ثُمَّ عَرَضَهُمْ عَلَى الْمَلَائِكَةِ فَقَالَ أَنْبِئُونِي بِأَسْمَاءِ هَؤُلَاءِ إِنْ كُنْتُمْ صَادِقِينَ"
 },
 "2:32": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ"
 },
 "2:107": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "أَلَمْ تَعْلَمْ أَنَّ اللَّهَ لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَمَا لَكُمْ مِنْ دُونِ اللَّهِ مِنْ وَلِيٍّ وَلَا نَصِيرٍ"
 },
 "2:163": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَإِلَهُكُمْ إِلَهٌ وَاحِدٌ لَا إِلَهَ إِلَّا هُوَ الرَّحْمَنُ الرَّحِيمُ"
 },
 "2:252": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "تِلْكَ آيَاتُ اللَّهِ نَتْلُوهَا عَلَيْكَ بِالْحَقِّ وَإِنَّكَ لَمِنَ الْمُرْسَلِينَ"
 },
 "3:2": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ"
 },
 "3:6": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "هُوَ الَّذِي يُصَوِّرُكُمْ فِي الْأَرْحَامِ كَيْفَ يَشَاءُ لَا إِلَهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ"
 },
 "3:59": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "إِنَّ مَثَلَ عِيسَى عِنْدَ اللَّهِ كَمَثَلِ آدَمَ خَلَقَهُ مِنْ تُرَابٍ ثُمَّ قَالَ لَهُ كُنْ فَيَكُونُ"
 },
 "3:70": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "يَاأَهْلَ الْكِتَابِ لِمَ تَكْفُرُونَ بِآيَاتِ اللَّهِ وَأَنْتُمْ تَشْهَدُونَ"
 },
 "3:92": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "لَنْ تَنَالُوا الْبِرَّ حَتَّى تُنْفِقُوا مِمَّا تُحِبُّونَ وَمَا تُنْفِقُوا مِنْ شَيْءٍ فَإِنَّ اللَّهَ بِهِ عَلِيمٌ"
 },
 "4:45": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "وَاللَّهُ أَعْلَمُ بِأَعْدَائِكُمْ وَكَفَى بِاللَّهِ وَلِيًّا وَكَفَى بِاللَّهِ نَصِيرًا"
 },
 "4:58": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَى أَهْلِهَا وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ إِنَّ اللَّهَ نِعِمَّا يَعِظُكُمْ بِهِ إِنَّ اللَّهَ كَانَ سَمِيعًا بَصِيرًا"
 },
 "4:79": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "مَا أَصَابَكَ مِنْ حَسَنَةٍ فَمِنَ اللَّهِ وَمَا أَصَابَكَ مِنْ سَيِّئَةٍ فَمِنْ نَفْسِكَ وَأَرْسَلْنَاكَ لِلنَّاسِ رَسُولًا وَكَفَى بِاللَّهِ شَهِيدًا"
 },
 "4:99": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "فَأُولَئِكَ عَسَى اللَّهُ أَنْ يَعْفُوَ عَنْهُمْ وَكَانَ اللَّهُ عَفُوًّا غَفُورًا"
 },
 "4:166": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "لَكِنِ اللَّهُ يَشْهَدُ بِمَا أَنْزَلَ إِلَيْكَ أَنْزَلَهُ بِعِلْمِهِ وَالْمَلَائِكَةُ يَشْهَدُونَ وَكَفَى بِاللَّهِ شَهِيدًا"
 },
 "6:18": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "وَهُوَ الْقَاهِرُ فَوْقَ عِبَادِهِ وَهُوَ الْحَكِيمُ الْخَبِيرُ"
 },
 "7:24": {
  "sn": "الأعراف",
  "sr": "Al-A'raf",
  "t": "قَالَ اهْبِطُوا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ وَلَكُمْ فِي الْأَرْضِ مُسْتَقَرٌّ وَمَتَاعٌ إِلَى حِينٍ"
 },
 "9:40": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "إِلَّا تَنْصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا فَأَنْزَلَ اللَّهُ سَكِينَتَهُ عَلَيْهِ وَأَيَّدَهُ بِجُنُودٍ لَمْ تَرَوْهَا وَجَعَلَ كَلِمَةَ الَّذِينَ كَفَرُوا السُّفْلَى وَكَلِمَةُ اللَّهِ هِيَ الْعُلْيَا وَاللَّهُ عَزِيزٌ حَكِيمٌ"
 },
 "13:9": {
  "sn": "الرعد",
  "sr": "Ar-Ra'd",
  "t": "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ"
 },
 "15:9": {
  "sn": "الحجر",
  "sr": "Al-Hijr",
  "t": "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ"
 },
 "16:24": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "وَإِذَا قِيلَ لَهُمْ مَاذَا أَنْزَلَ رَبُّكُمْ قَالُوا أَسَاطِيرُ الْأَوَّلِينَ"
 },
 "17:14": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "اقْرَأْ كِتَابَكَ كَفَى بِنَفْسِكَ الْيَوْمَ عَلَيْكَ حَسِيبًا"
 },
 "17:17": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَكَمْ أَهْلَكْنَا مِنَ الْقُرُونِ مِنْ بَعْدِ نُوحٍ وَكَفَى بِرَبِّكَ بِذُنُوبِ عِبَادِهِ خَبِيرًا بَصِيرًا"
 },
 "17:81": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا"
 },
 "20:14": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "إِنَّنِي أَنَا اللَّهُ لَا إِلَهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي"
 },
 "20:20": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "فَأَلْقَاهَا فَإِذَا هِيَ حَيَّةٌ تَسْعَى"
 },
 "21:22": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللَّهُ لَفَسَدَتَا فَسُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ عَمَّا يَصِفُونَ"
 },
 "21:92": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "إِنَّ هَذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً وَأَنَا رَبُّكُمْ فَاعْبُدُونِ"
 },
 "22:74": {
  "sn": "الحج",
  "sr": "Al-Hajj",
  "t": "مَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ إِنَّ اللَّهَ لَقَوِيٌّ عَزِيزٌ"
 },
 "24:12": {
  "sn": "النور",
  "sr": "An-Noor",
  "t": "لَوْلَا إِذْ سَمِعْتُمُوهُ ظَنَّ الْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بِأَنْفُسِهِمْ خَيْرًا وَقَالُوا هَذَا إِفْكٌ مُبِينٌ"
 },
 "26:220": {
  "sn": "الشعراء",
  "sr": "Ash-Shu'ara",
  "t": "إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ"
 },
 "29:57": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ثُمَّ إِلَيْنَا تُرْجَعُونَ"
 },
 "33:3": {
  "sn": "الأحزاب",
  "sr": "Al-Ahzab",
  "t": "وَتَوَكَّلْ عَلَى اللَّهِ وَكَفَى بِاللَّهِ وَكِيلًا"
 },
 "35:15": {
  "sn": "فاطر",
  "sr": "Fatir",
  "t": "يَاأَيُّهَا النَّاسُ أَنْتُمُ الْفُقَرَاءُ إِلَى اللَّهِ وَاللَّهُ هُوَ الْغَنِيُّ الْحَمِيدُ"
 },
 "36:32": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "وَإِنْ كُلٌّ لَمَّا جَمِيعٌ لَدَيْنَا مُحْضَرُونَ"
 },
 "37:147": {
  "sn": "الصافات",
  "sr": "As-Saffat",
  "t": "وَأَرْسَلْنَاهُ إِلَى مِائَةِ أَلْفٍ أَوْ يَزِيدُونَ"
 },
 "40:65": {
  "sn": "غافر",
  "sr": "Ghafir",
  "t": "هُوَ الْحَيُّ لَا إِلَهَ إِلَّا هُوَ فَادْعُوهُ مُخْلِصِينَ لَهُ الدِّينَ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
 },
 "49:18": {
  "sn": "الحجرات",
  "sr": "Al-Hujurat",
  "t": "إِنَّ اللَّهَ يَعْلَمُ غَيْبَ السَّمَاوَاتِ وَالْأَرْضِ وَاللَّهُ بَصِيرٌ بِمَا تَعْمَلُونَ"
 },
 "51:58": {
  "sn": "الذاريات",
  "sr": "Adh-Dhariyat",
  "t": "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ"
 },
 "55:13": {
  "sn": "الرحمن",
  "sr": "Ar-Rahman",
  "t": "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ"
 },
 "55:14": {
  "sn": "الرحمن",
  "sr": "Ar-Rahman",
  "t": "خَلَقَ الْإِنْسَانَ مِنْ صَلْصَالٍ كَالْفَخَّارِ"
 },
 "56:74": {
  "sn": "الواقعة",
  "sr": "Al-Waqi'ah",
  "t": "فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ"
 },
 "57:2": {
  "sn": "الحديد",
  "sr": "Al-Hadid",
  "t": "لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ"
 },
 "58:2": {
  "sn": "المجادلة",
  "sr": "Al-Mujadila",
  "t": "الَّذِينَ يُظَاهِرُونَ مِنْكُمْ مِنْ نِسَائِهِمْ مَا هُنَّ أُمَّهَاتِهِمْ إِنْ أُمَّهَاتُهُمْ إِلَّا اللَّائِي وَلَدْنَهُمْ وَإِنَّهُمْ لَيَقُولُونَ مُنْكَرًا مِنَ الْقَوْلِ وَزُورًا وَإِنَّ اللَّهَ لَعَفُوٌّ غَفُورٌ"
 },
 "59:22": {
  "sn": "الحشر",
  "sr": "Al-Hashr",
  "t": "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَنُ الرَّحِيمُ"
 },
 "59:24": {
  "sn": "الحشر",
  "sr": "Al-Hashr",
  "t": "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَى يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ"
 },
 "67:14": {
  "sn": "الملك",
  "sr": "Al-Mulk",
  "t": "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ"
 },
 "67:25": {
  "sn": "الملك",
  "sr": "Al-Mulk",
  "t": "وَيَقُولُونَ مَتَى هَذَا الْوَعْدُ إِنْ كُنْتُمْ صَادِقِينَ"
 },
 "75:10": {
  "sn": "القيامة",
  "sr": "Al-Qiyamah",
  "t": "يَقُولُ الْإِنْسَانُ يَوْمَئِذٍ أَيْنَ الْمَفَرُّ"
 },
 "76:1": {
  "sn": "الإنسان",
  "sr": "Al-Insan",
  "t": "هَلْ أَتَى عَلَى الْإِنْسَانِ حِينٌ مِنَ الدَّهْرِ لَمْ يَكُنْ شَيْئًا مَذْكُورًا"
 },
 "82:1": {
  "sn": "الانفطار",
  "sr": "Al-Infitar",
  "t": "إِذَا السَّمَاءُ انْفَطَرَتْ"
 },
 "82:6": {
  "sn": "الانفطار",
  "sr": "Al-Infitar",
  "t": "يَاأَيُّهَا الْإِنْسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ"
 },
 "85:12": {
  "sn": "البروج",
  "sr": "Al-Burooj",
  "t": "إِنَّ بَطْشَ رَبِّكَ لَشَدِيدٌ"
 },
 "85:14": {
  "sn": "البروج",
  "sr": "Al-Burooj",
  "t": "وَهُوَ الْغَفُورُ الْوَدُودُ"
 },
 "86:4": {
  "sn": "الطارق",
  "sr": "At-Tariq",
  "t": "إِنْ كُلُّ نَفْسٍ لَمَّا عَلَيْهَا حَافِظٌ"
 },
 "87:16": {
  "sn": "الأعلى",
  "sr": "Al-A'la",
  "t": "بَلْ تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا"
 },
 "88:17": {
  "sn": "الغاشية",
  "sr": "Al-Ghashiyah",
  "t": "أَفَلَا يَنْظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ"
 },
 "90:1": {
  "sn": "البلد",
  "sr": "Al-Balad",
  "t": "لَا أُقْسِمُ بِهَذَا الْبَلَدِ"
 },
 "91:9": {
  "sn": "الشمس",
  "sr": "Ash-Shams",
  "t": "قَدْ أَفْلَحَ مَنْ زَكَّاهَا"
 },
 "94:6": {
  "sn": "الشرح",
  "sr": "Ash-Sharh",
  "t": "إِنَّ مَعَ الْعُسْرِ يُسْرًا"
 },
 "94:7": {
  "sn": "الشرح",
  "sr": "Ash-Sharh",
  "t": "فَإِذَا فَرَغْتَ فَانْصَبْ"
 },
 "102:3": {
  "sn": "التكاثر",
  "sr": "At-Takathur",
  "t": "كَلَّا سَوْفَ تَعْلَمُونَ"
 },
 "107:5": {
  "sn": "الماعون",
  "sr": "Al-Ma'un",
  "t": "الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ"
 },
 "110:3": {
  "sn": "النصر",
  "sr": "An-Nasr",
  "t": "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا"
 },
 "111:2": {
  "sn": "المسد",
  "sr": "Al-Masad",
  "t": "مَا أَغْنَى عَنْهُ مَالُهُ وَمَا كَسَبَ"
 },
 "112:1": {
  "sn": "الإخلاص",
  "sr": "Al-Ikhlas",
  "t": "قُلْ هُوَ اللَّهُ أَحَدٌ"
 },
 "112:2": {
  "sn": "الإخلاص",
  "sr": "Al-Ikhlas",
  "t": "اللَّهُ الصَّمَدُ"
 },
 "112:3": {
  "sn": "الإخلاص",
  "sr": "Al-Ikhlas",
  "t": "لَمْ يَلِدْ وَلَمْ يُولَدْ"
 },
 "113:2": {
  "sn": "الفلق",
  "sr": "Al-Falaq",
  "t": "مِنْ شَرِّ مَا خَلَقَ"
 },
 "114:2": {
  "sn": "الناس",
  "sr": "An-Nas",
  "t": "مَلِكِ النَّاسِ"
 },
 "97:5": {
  "sn": "القدر",
  "sr": "Al-Qadr",
  "t": "سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ"
 },
 "20:33": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "كَيْ نُسَبِّحَكَ كَثِيرًا"
 },
 "55:60": {
  "sn": "الرحمن",
  "sr": "Ar-Rahman",
  "t": "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ"
 },
 "49:10": {
  "sn": "الحجرات",
  "sr": "Al-Hujurat",
  "t": "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ"
 },
 "79:30": {
  "sn": "النازعات",
  "sr": "An-Nazi'at",
  "t": "وَالْأَرْضَ بَعْدَ ذَلِكَ دَحَاهَا"
 },
 "56:45": {
  "sn": "الواقعة",
  "sr": "Al-Waqi'ah",
  "t": "إِنَّهُمْ كَانُوا قَبْلَ ذَلِكَ مُتْرَفِينَ"
 },
 "48:18": {
  "sn": "الفتح",
  "sr": "Al-Fath",
  "t": "لَقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ فَعَلِمَ مَا فِي قُلُوبِهِمْ فَأَنْزَلَ السَّكِينَةَ عَلَيْهِمْ وَأَثَابَهُمْ فَتْحًا قَرِيبًا"
 },
 "41:42": {
  "sn": "فصلت",
  "sr": "Fussilat",
  "t": "لَا يَأْتِيهِ الْبَاطِلُ مِنْ بَيْنِ يَدَيْهِ وَلَا مِنْ خَلْفِهِ تَنْزِيلٌ مِنْ حَكِيمٍ حَمِيدٍ"
 },
 "72:11": {
  "sn": "الجن",
  "sr": "Al-Jinn",
  "t": "وَأَنَّا مِنَّا الصَّالِحُونَ وَمِنَّا دُونَ ذَلِكَ كُنَّا طَرَائِقَ قِدَدًا"
 },
 "53:14": {
  "sn": "النجم",
  "sr": "An-Najm",
  "t": "عِنْدَ سِدْرَةِ الْمُنْتَهَى"
 },
 "12:25": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "وَاسْتَبَقَا الْبَابَ وَقَدَّتْ قَمِيصَهُ مِنْ دُبُرٍ وَأَلْفَيَا سَيِّدَهَا لَدَى الْبَابِ قَالَتْ مَا جَزَاءُ مَنْ أَرَادَ بِأَهْلِكَ سُوءًا إِلَّا أَنْ يُسْجَنَ أَوْ عَذَابٌ أَلِيمٌ"
 },
 "17:1": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "سُبْحَانَ الَّذِي أَسْرَى بِعَبْدِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ"
 },
 "37:18": {
  "sn": "الصافات",
  "sr": "As-Saffat",
  "t": "قُلْ نَعَمْ وَأَنْتُمْ دَاخِرُونَ"
 },
 "75:4": {
  "sn": "القيامة",
  "sr": "Al-Qiyamah",
  "t": "بَلَى قَادِرِينَ عَلَى أَنْ نُسَوِّيَ بَنَانَهُ"
 },
 "13:28": {
  "sn": "الرعد",
  "sr": "Ar-Ra'd",
  "t": "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ"
 },
 "109:1": {
  "sn": "الكافرون",
  "sr": "Al-Kafirun",
  "t": "قُلْ يَا أَيُّهَا الْكَافِرُونَ"
 },
 "77:44": {
  "sn": "المرسلات",
  "sr": "Al-Mursalat",
  "t": "إِنَّا كَذَلِكَ نَجْزِي الْمُحْسِنِينَ"
 },
 "7:182": {
  "sn": "الأعراف",
  "sr": "Al-A'raf",
  "t": "وَالَّذِينَ كَذَّبُوا بِآيَاتِنَا سَنَسْتَدْرِجُهُمْ مِنْ حَيْثُ لَا يَعْلَمُونَ"
 },
 "18:3": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "مَاكِثِينَ فِيهِ أَبَدًا"
 },
 "88:18": {
  "sn": "الغاشية",
  "sr": "Al-Ghashiyah",
  "t": "وَإِلَى السَّمَاءِ كَيْفَ رُفِعَتْ"
 },
 "88:20": {
  "sn": "الغاشية",
  "sr": "Al-Ghashiyah",
  "t": "وَإِلَى الْأَرْضِ كَيْفَ سُطِحَتْ"
 },
 "91:1": {
  "sn": "الشمس",
  "sr": "Ash-Shams",
  "t": "وَالشَّمْسِ وَضُحَاهَا"
 },
 "91:2": {
  "sn": "الشمس",
  "sr": "Ash-Shams",
  "t": "وَالْقَمَرِ إِذَا تَلَاهَا"
 },
 "53:1": {
  "sn": "النجم",
  "sr": "An-Najm",
  "t": "وَالنَّجْمِ إِذَا هَوَى"
 },
 "64:8": {
  "sn": "التغابن",
  "sr": "At-Taghabun",
  "t": "فَآمِنُوا بِاللَّهِ وَرَسُولِهِ وَالنُّورِ الَّذِي أَنْزَلْنَا وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ"
 },
 "6:1": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ"
 },
 "92:1": {
  "sn": "الليل",
  "sr": "Al-Layl",
  "t": "وَاللَّيْلِ إِذَا يَغْشَى"
 },
 "92:2": {
  "sn": "الليل",
  "sr": "Al-Layl",
  "t": "وَالنَّهَارِ إِذَا تَجَلَّى"
 },
 "1:4": {
  "sn": "الفاتحة",
  "sr": "Al-Fatiha",
  "t": "مَالِكِ يَوْمِ الدِّينِ"
 },
 "89:1": {
  "sn": "الفجر",
  "sr": "Al-Fajr",
  "t": "وَالْفَجْرِ"
 },
 "77:20": {
  "sn": "المرسلات",
  "sr": "Al-Mursalat",
  "t": "أَلَمْ نَخْلُقْكُمْ مِنْ مَاءٍ مَهِينٍ"
 },
 "26:173": {
  "sn": "الشعراء",
  "sr": "Ash-Shu'ara",
  "t": "وَأَمْطَرْنَا عَلَيْهِمْ مَطَرًا فَسَاءَ مَطَرُ الْمُنْذَرِينَ"
 },
 "13:12": {
  "sn": "الرعد",
  "sr": "Ar-Ra'd",
  "t": "هُوَ الَّذِي يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا وَيُنْشِئُ السَّحَابَ الثِّقَالَ"
 },
 "13:13": {
  "sn": "الرعد",
  "sr": "Ar-Ra'd",
  "t": "وَيُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ وَيُرْسِلُ الصَّوَاعِقَ فَيُصِيبُ بِهَا مَنْ يَشَاءُ وَهُمْ يُجَادِلُونَ فِي اللَّهِ وَهُوَ شَدِيدُ الْمِحَالِ"
 },
 "54:19": {
  "sn": "القمر",
  "sr": "Al-Qamar",
  "t": "إِنَّا أَرْسَلْنَا عَلَيْهِمْ رِيحًا صَرْصَرًا فِي يَوْمِ نَحْسٍ مُسْتَمِرٍّ"
 },
 "52:6": {
  "sn": "الطور",
  "sr": "At-Tur",
  "t": "وَالْبَحْرِ الْمَسْجُورِ"
 },
 "54:54": {
  "sn": "القمر",
  "sr": "Al-Qamar",
  "t": "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ"
 },
 "59:21": {
  "sn": "الحشر",
  "sr": "Al-Hashr",
  "t": "لَوْ أَنْزَلْنَا هَذَا الْقُرْآنَ عَلَى جَبَلٍ لَرَأَيْتَهُ خَاشِعًا مُتَصَدِّعًا مِنْ خَشْيَةِ اللَّهِ وَتِلْكَ الْأَمْثَالُ نَضْرِبُهَا لِلنَّاسِ لَعَلَّهُمْ يَتَفَكَّرُونَ"
 },
 "111:3": {
  "sn": "المسد",
  "sr": "Al-Masad",
  "t": "سَيَصْلَى نَارًا ذَاتَ لَهَبٍ"
 },
 "105:4": {
  "sn": "الفيل",
  "sr": "Al-Fil",
  "t": "تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ"
 },
 "38:76": {
  "sn": "ص",
  "sr": "Sad",
  "t": "قَالَ أَنَا خَيْرٌ مِنْهُ خَلَقْتَنِي مِنْ نَارٍ وَخَلَقْتَهُ مِنْ طِينٍ"
 },
 "20:120": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "فَوَسْوَسَ إِلَيْهِ الشَّيْطَانُ قَالَ يَاآدَمُ هَلْ أَدُلُّكَ عَلَى شَجَرَةِ الْخُلْدِ وَمُلْكٍ لَا يَبْلَى"
 },
 "6:59": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ وَمَا تَسْقُطُ مِنْ وَرَقَةٍ إِلَّا يَعْلَمُهَا وَلَا حَبَّةٍ فِي ظُلُمَاتِ الْأَرْضِ وَلَا رَطْبٍ وَلَا يَابِسٍ إِلَّا فِي كِتَابٍ مُبِينٍ"
 },
 "80:29": {
  "sn": "عبس",
  "sr": "Abasa",
  "t": "وَزَيْتُونًا وَنَخْلًا"
 },
 "47:15": {
  "sn": "محمد",
  "sr": "Muhammad",
  "t": "مَثَلُ الْجَنَّةِ الَّتِي وُعِدَ الْمُتَّقُونَ فِيهَا أَنْهَارٌ مِنْ مَاءٍ غَيْرِ آسِنٍ وَأَنْهَارٌ مِنْ لَبَنٍ لَمْ يَتَغَيَّرْ طَعْمُهُ وَأَنْهَارٌ مِنْ خَمْرٍ لَذَّةٍ لِلشَّارِبِينَ وَأَنْهَارٌ مِنْ عَسَلٍ مُصَفًّى وَلَهُمْ فِيهَا مِنْ كُلِّ الثَّمَرَاتِ وَمَغْفِرَةٌ مِنْ رَبِّهِمْ كَمَنْ هُوَ خَالِدٌ فِي النَّارِ وَسُقُوا مَاءً حَمِيمًا فَقَطَّعَ أَمْعَاءَهُمْ"
 },
 "80:28": {
  "sn": "عبس",
  "sr": "Abasa",
  "t": "وَعِنَبًا وَقَضْبًا"
 },
 "95:1": {
  "sn": "التين",
  "sr": "At-Tin",
  "t": "وَالتِّينِ وَالزَّيْتُونِ"
 },
 "32:27": {
  "sn": "السجدة",
  "sr": "As-Sajdah",
  "t": "أَوَلَمْ يَرَوْا أَنَّا نَسُوقُ الْمَاءَ إِلَى الْأَرْضِ الْجُرُزِ فَنُخْرِجُ بِهِ زَرْعًا تَأْكُلُ مِنْهُ أَنْعَامُهُمْ وَأَنْفُسُهُمْ أَفَلَا يُبْصِرُونَ"
 },
 "71:17": {
  "sn": "نوح",
  "sr": "Nuh",
  "t": "وَاللَّهُ أَنْبَتَكُمْ مِنَ الْأَرْضِ نَبَاتًا"
 },
 "22:23": {
  "sn": "الحج",
  "sr": "Al-Hajj",
  "t": "إِنَّ اللَّهَ يُدْخِلُ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِنْ ذَهَبٍ وَلُؤْلُؤًا وَلِبَاسُهُمْ فِيهَا حَرِيرٌ"
 },
 "76:15": {
  "sn": "الإنسان",
  "sr": "Al-Insan",
  "t": "وَيُطَافُ عَلَيْهِمْ بِآنِيَةٍ مِنْ فِضَّةٍ وَأَكْوَابٍ كَانَتْ قَوَارِيرَا"
 },
 "17:50": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "قُلْ كُونُوا حِجَارَةً أَوْ حَدِيدًا"
 },
 "16:66": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "وَإِنَّ لَكُمْ فِي الْأَنْعَامِ لَعِبْرَةً نُسْقِيكُمْ مِمَّا فِي بُطُونِهِ مِنْ بَيْنِ فَرْثٍ وَدَمٍ لَبَنًا خَالِصًا سَائِغًا لِلشَّارِبِينَ"
 },
 "80:24": {
  "sn": "عبس",
  "sr": "Abasa",
  "t": "فَلْيَنْظُرِ الْإِنْسَانُ إِلَى طَعَامِهِ"
 },
 "2:173": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "إِنَّمَا حَرَّمَ عَلَيْكُمُ الْمَيْتَةَ وَالدَّمَ وَلَحْمَ الْخِنْزِيرِ وَمَا أُهِلَّ بِهِ لِغَيْرِ اللَّهِ فَمَنِ اضْطُرَّ غَيْرَ بَاغٍ وَلَا عَادٍ فَلَا إِثْمَ عَلَيْهِ إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ"
 },
 "106:3": {
  "sn": "قريش",
  "sr": "Quraysh",
  "t": "فَلْيَعْبُدُوا رَبَّ هَذَا الْبَيْتِ"
 },
 "5:97": {
  "sn": "المائدة",
  "sr": "Al-Ma'idah",
  "t": "جَعَلَ اللَّهُ الْكَعْبَةَ الْبَيْتَ الْحَرَامَ قِيَامًا لِلنَّاسِ وَالشَّهْرَ الْحَرَامَ وَالْهَدْيَ وَالْقَلَائِدَ ذَلِكَ لِتَعْلَمُوا أَنَّ اللَّهَ يَعْلَمُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَأَنَّ اللَّهَ بِكُلِّ شَيْءٍ عَلِيمٌ"
 },
 "12:82": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "وَاسْأَلِ الْقَرْيَةَ الَّتِي كُنَّا فِيهَا وَالْعِيرَ الَّتِي أَقْبَلْنَا فِيهَا وَإِنَّا لَصَادِقُونَ"
 },
 "36:20": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "وَجَاءَ مِنْ أَقْصَى الْمَدِينَةِ رَجُلٌ يَسْعَى قَالَ يَاقَوْمِ اتَّبِعُوا الْمُرْسَلِينَ"
 },
 "36:41": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "وَآيَةٌ لَهُمْ أَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِي الْفُلْكِ الْمَشْحُونِ"
 },
 "96:4": {
  "sn": "العلق",
  "sr": "Al-Alaq",
  "t": "الَّذِي عَلَّمَ بِالْقَلَمِ"
 },
 "55:7": {
  "sn": "الرحمن",
  "sr": "Ar-Rahman",
  "t": "وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ"
 },
 "74:4": {
  "sn": "المدثر",
  "sr": "Al-Muddaththir",
  "t": "وَثِيَابَكَ فَطَهِّرْ"
 },
 "77:30": {
  "sn": "المرسلات",
  "sr": "Al-Mursalat",
  "t": "انْطَلِقُوا إِلَى ظِلٍّ ذِي ثَلَاثِ شُعَبٍ"
 },
 "12:108": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "قُلْ هَذِهِ سَبِيلِي أَدْعُو إِلَى اللَّهِ عَلَى بَصِيرَةٍ أَنَا وَمَنِ اتَّبَعَنِي وَسُبْحَانَ اللَّهِ وَمَا أَنَا مِنَ الْمُشْرِكِينَ"
 },
 "1:6": {
  "sn": "الفاتحة",
  "sr": "Al-Fatiha",
  "t": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ"
 },
 "2:67": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَإِذْ قَالَ مُوسَى لِقَوْمِهِ إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً قَالُوا أَتَتَّخِذُنَا هُزُوًا قَالَ أَعُوذُ بِاللَّهِ أَنْ أَكُونَ مِنَ الْجَاهِلِينَ"
 },
 "51:26": {
  "sn": "الذاريات",
  "sr": "Adh-Dhariyat",
  "t": "فَرَاغَ إِلَى أَهْلِهِ فَجَاءَ بِعِجْلٍ سَمِينٍ"
 },
 "91:13": {
  "sn": "الشمس",
  "sr": "Ash-Shams",
  "t": "فَقَالَ لَهُمْ رَسُولُ اللَّهِ نَاقَةَ اللَّهِ وَسُقْيَاهَا"
 },
 "7:40": {
  "sn": "الأعراف",
  "sr": "Al-A'raf",
  "t": "إِنَّ الَّذِينَ كَذَّبُوا بِآيَاتِنَا وَاسْتَكْبَرُوا عَنْهَا لَا تُفَتَّحُ لَهُمْ أَبْوَابُ السَّمَاءِ وَلَا يَدْخُلُونَ الْجَنَّةَ حَتَّى يَلِجَ الْجَمَلُ فِي سَمِّ الْخِيَاطِ وَكَذَلِكَ نَجْزِي الْمُجْرِمِينَ"
 },
 "6:146": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "وَعَلَى الَّذِينَ هَادُوا حَرَّمْنَا كُلَّ ذِي ظُفُرٍ وَمِنَ الْبَقَرِ وَالْغَنَمِ حَرَّمْنَا عَلَيْهِمْ شُحُومَهُمَا إِلَّا مَا حَمَلَتْ ظُهُورُهُمَا أَوِ الْحَوَايَا أَوْ مَا اخْتَلَطَ بِعَظْمٍ ذَلِكَ جَزَيْنَاهُمْ بِبَغْيِهِمْ وَإِنَّا لَصَادِقُونَ"
 },
 "6:143": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "ثَمَانِيَةَ أَزْوَاجٍ مِنَ الضَّأْنِ اثْنَيْنِ وَمِنَ الْمَعْزِ اثْنَيْنِ قُلْ آلذَّكَرَيْنِ حَرَّمَ أَمِ الْأُنْثَيَيْنِ أَمَّا اشْتَمَلَتْ عَلَيْهِ أَرْحَامُ الْأُنْثَيَيْنِ نَبِّئُونِي بِعِلْمٍ إِنْ كُنْتُمْ صَادِقِينَ"
 },
 "36:71": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "أَوَلَمْ يَرَوْا أَنَّا خَلَقْنَا لَهُمْ مِمَّا عَمِلَتْ أَيْدِينَا أَنْعَامًا فَهُمْ لَهَا مَالِكُونَ"
 },
 "16:8": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "وَالْخَيْلَ وَالْبِغَالَ وَالْحَمِيرَ لِتَرْكَبُوهَا وَزِينَةً وَيَخْلُقُ مَا لَا تَعْلَمُونَ"
 },
 "62:5": {
  "sn": "الجمعة",
  "sr": "Al-Jumu'ah",
  "t": "مَثَلُ الَّذِينَ حُمِّلُوا التَّوْرَاةَ ثُمَّ لَمْ يَحْمِلُوهَا كَمَثَلِ الْحِمَارِ يَحْمِلُ أَسْفَارًا بِئْسَ مَثَلُ الْقَوْمِ الَّذِينَ كَذَّبُوا بِآيَاتِ اللَّهِ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ"
 },
 "7:176": {
  "sn": "الأعراف",
  "sr": "Al-A'raf",
  "t": "وَلَوْ شِئْنَا لَرَفَعْنَاهُ بِهَا وَلَكِنَّهُ أَخْلَدَ إِلَى الْأَرْضِ وَاتَّبَعَ هَوَاهُ فَمَثَلُهُ كَمَثَلِ الْكَلْبِ إِنْ تَحْمِلْ عَلَيْهِ يَلْهَثْ أَوْ تَتْرُكْهُ يَلْهَثْ ذَلِكَ مَثَلُ الْقَوْمِ الَّذِينَ كَذَّبُوا بِآيَاتِنَا فَاقْصُصِ الْقَصَصَ لَعَلَّهُمْ يَتَفَكَّرُونَ"
 },
 "12:14": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "قَالُوا لَئِنْ أَكَلَهُ الذِّئْبُ وَنَحْنُ عُصْبَةٌ إِنَّا إِذًا لَخَاسِرُونَ"
 },
 "105:1": {
  "sn": "الفيل",
  "sr": "Al-Fil",
  "t": "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ"
 },
 "105:3": {
  "sn": "الفيل",
  "sr": "Al-Fil",
  "t": "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ"
 },
 "27:20": {
  "sn": "النمل",
  "sr": "An-Naml",
  "t": "وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ أَمْ كَانَ مِنَ الْغَائِبِينَ"
 },
 "5:31": {
  "sn": "المائدة",
  "sr": "Al-Ma'idah",
  "t": "فَبَعَثَ اللَّهُ غُرَابًا يَبْحَثُ فِي الْأَرْضِ لِيُرِيَهُ كَيْفَ يُوَارِي سَوْءَةَ أَخِيهِ قَالَ يَاوَيْلَتَا أَعَجَزْتُ أَنْ أَكُونَ مِثْلَ هَذَا الْغُرَابِ فَأُوَارِيَ سَوْءَةَ أَخِي فَأَصْبَحَ مِنَ النَّادِمِينَ"
 },
 "27:18": {
  "sn": "النمل",
  "sr": "An-Naml",
  "t": "حَتَّى إِذَا أَتَوْا عَلَى وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَاأَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ"
 },
 "16:68": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "وَأَوْحَى رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي مِنَ الْجِبَالِ بُيُوتًا وَمِنَ الشَّجَرِ وَمِمَّا يَعْرِشُونَ"
 },
 "29:41": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "مَثَلُ الَّذِينَ اتَّخَذُوا مِنْ دُونِ اللَّهِ أَوْلِيَاءَ كَمَثَلِ الْعَنْكَبُوتِ اتَّخَذَتْ بَيْتًا وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنْكَبُوتِ لَوْ كَانُوا يَعْلَمُونَ"
 },
 "22:73": {
  "sn": "الحج",
  "sr": "Al-Hajj",
  "t": "يَاأَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا لَهُ إِنَّ الَّذِينَ تَدْعُونَ مِنْ دُونِ اللَّهِ لَنْ يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ وَإِنْ يَسْلُبْهُمُ الذُّبَابُ شَيْئًا لَا يَسْتَنْقِذُوهُ مِنْهُ ضَعُفَ الطَّالِبُ وَالْمَطْلُوبُ"
 },
 "7:133": {
  "sn": "الأعراف",
  "sr": "Al-A'raf",
  "t": "فَأَرْسَلْنَا عَلَيْهِمُ الطُّوفَانَ وَالْجَرَادَ وَالْقُمَّلَ وَالضَّفَادِعَ وَالدَّمَ آيَاتٍ مُفَصَّلَاتٍ فَاسْتَكْبَرُوا وَكَانُوا قَوْمًا مُجْرِمِينَ"
 },
 "2:65": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَلَقَدْ عَلِمْتُمُ الَّذِينَ اعْتَدَوْا مِنْكُمْ فِي السَّبْتِ فَقُلْنَا لَهُمْ كُونُوا قِرَدَةً خَاسِئِينَ"
 },
 "2:26": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَنْ يَضْرِبَ مَثَلًا مَا بَعُوضَةً فَمَا فَوْقَهَا فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ وَأَمَّا الَّذِينَ كَفَرُوا فَيَقُولُونَ مَاذَا أَرَادَ اللَّهُ بِهَذَا مَثَلًا يُضِلُّ بِهِ كَثِيرًا وَيَهْدِي بِهِ كَثِيرًا وَمَا يُضِلُّ بِهِ إِلَّا الْفَاسِقِينَ"
 },
 "37:142": {
  "sn": "الصافات",
  "sr": "As-Saffat",
  "t": "فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ"
 },
 "11:6": {
  "sn": "هود",
  "sr": "Hud",
  "t": "وَمَا مِنْ دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا وَيَعْلَمُ مُسْتَقَرَّهَا وَمُسْتَوْدَعَهَا كُلٌّ فِي كِتَابٍ مُبِينٍ"
 },
 "96:2": {
  "sn": "العلق",
  "sr": "Al-Alaq",
  "t": "خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ"
 },
 "114:1": {
  "sn": "الناس",
  "sr": "An-Nas",
  "t": "قُلْ أَعُوذُ بِرَبِّ النَّاسِ"
 },
 "74:25": {
  "sn": "المدثر",
  "sr": "Al-Muddaththir",
  "t": "إِنْ هَذَا إِلَّا قَوْلُ الْبَشَرِ"
 },
 "27:23": {
  "sn": "النمل",
  "sr": "An-Naml",
  "t": "إِنِّي وَجَدْتُ امْرَأَةً تَمْلِكُهُمْ وَأُوتِيَتْ مِنْ كُلِّ شَيْءٍ وَلَهَا عَرْشٌ عَظِيمٌ"
 },
 "33:32": {
  "sn": "الأحزاب",
  "sr": "Al-Ahzab",
  "t": "يَانِسَاءَ النَّبِيِّ لَسْتُنَّ كَأَحَدٍ مِنَ النِّسَاءِ إِنِ اتَّقَيْتُنَّ فَلَا تَخْضَعْنَ بِالْقَوْلِ فَيَطْمَعَ الَّذِي فِي قَلْبِهِ مَرَضٌ وَقُلْنَ قَوْلًا مَعْرُوفًا"
 },
 "19:35": {
  "sn": "مريم",
  "sr": "Maryam",
  "t": "مَا كَانَ لِلَّهِ أَنْ يَتَّخِذَ مِنْ وَلَدٍ سُبْحَانَهُ إِذَا قَضَى أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ"
 },
 "19:34": {
  "sn": "مريم",
  "sr": "Maryam",
  "t": "ذَلِكَ عِيسَى ابْنُ مَرْيَمَ قَوْلَ الْحَقِّ الَّذِي فِيهِ يَمْتَرُونَ"
 },
 "66:12": {
  "sn": "التحريم",
  "sr": "At-Tahrim",
  "t": "وَمَرْيَمَ ابْنَتَ عِمْرَانَ الَّتِي أَحْصَنَتْ فَرْجَهَا فَنَفَخْنَا فِيهِ مِنْ رُوحِنَا وَصَدَّقَتْ بِكَلِمَاتِ رَبِّهَا وَكُتُبِهِ وَكَانَتْ مِنَ الْقَانِتِينَ"
 },
 "111:1": {
  "sn": "المسد",
  "sr": "Al-Masad",
  "t": "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ"
 },
 "101:9": {
  "sn": "القارعة",
  "sr": "Al-Qari'ah",
  "t": "فَأُمُّهُ هَاوِيَةٌ"
 },
 "19:14": {
  "sn": "مريم",
  "sr": "Maryam",
  "t": "وَبَرًّا بِوَالِدَيْهِ وَلَمْ يَكُنْ جَبَّارًا عَصِيًّا"
 },
 "20:30": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "هَارُونَ أَخِي"
 },
 "28:11": {
  "sn": "القصص",
  "sr": "Al-Qasas",
  "t": "وَقَالَتْ لِأُخْتِهِ قُصِّيهِ فَبَصُرَتْ بِهِ عَنْ جُنُبٍ وَهُمْ لَا يَشْعُرُونَ"
 },
 "2:35": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَقُلْنَا يَاآدَمُ اسْكُنْ أَنْتَ وَزَوْجُكَ الْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ"
 },
 "20:29": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "وَاجْعَلْ لِي وَزِيرًا مِنْ أَهْلِي"
 },
 "71:1": {
  "sn": "نوح",
  "sr": "Nuh",
  "t": "إِنَّا أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ أَنْ أَنْذِرْ قَوْمَكَ مِنْ قَبْلِ أَنْ يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ"
 },
 "3:34": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "ذُرِّيَّةً بَعْضُهَا مِنْ بَعْضٍ وَاللَّهُ سَمِيعٌ عَلِيمٌ"
 },
 "40:67": {
  "sn": "غافر",
  "sr": "Ghafir",
  "t": "هُوَ الَّذِي خَلَقَكُمْ مِنْ تُرَابٍ ثُمَّ مِنْ نُطْفَةٍ ثُمَّ مِنْ عَلَقَةٍ ثُمَّ يُخْرِجُكُمْ طِفْلًا ثُمَّ لِتَبْلُغُوا أَشُدَّكُمْ ثُمَّ لِتَكُونُوا شُيُوخًا وَمِنْكُمْ مَنْ يُتَوَفَّى مِنْ قَبْلُ وَلِتَبْلُغُوا أَجَلًا مُسَمًّى وَلَعَلَّكُمْ تَعْقِلُونَ"
 },
 "93:6": {
  "sn": "الضحى",
  "sr": "Ad-Duha",
  "t": "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَى"
 },
 "107:3": {
  "sn": "الماعون",
  "sr": "Al-Ma'un",
  "t": "وَلَا يَحُضُّ عَلَى طَعَامِ الْمِسْكِينِ"
 },
 "96:10": {
  "sn": "العلق",
  "sr": "Al-Alaq",
  "t": "عَبْدًا إِذَا صَلَّى"
 },
 "2:34": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَى وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ"
 },
 "72:1": {
  "sn": "الجن",
  "sr": "Al-Jinn",
  "t": "قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِنَ الْجِنِّ فَقَالُوا إِنَّا سَمِعْنَا قُرْآنًا عَجَبًا"
 },
 "2:268": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "الشَّيْطَانُ يَعِدُكُمُ الْفَقْرَ وَيَأْمُرُكُمْ بِالْفَحْشَاءِ وَاللَّهُ يَعِدُكُمْ مَغْفِرَةً مِنْهُ وَفَضْلًا وَاللَّهُ وَاسِعٌ عَلِيمٌ"
 },
 "33:1": {
  "sn": "الأحزاب",
  "sr": "Al-Ahzab",
  "t": "يَاأَيُّهَا النَّبِيُّ اتَّقِ اللَّهَ وَلَا تُطِعِ الْكَافِرِينَ وَالْمُنَافِقِينَ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا"
 },
 "98:2": {
  "sn": "البينة",
  "sr": "Al-Bayyinah",
  "t": "رَسُولٌ مِنَ اللَّهِ يَتْلُو صُحُفًا مُطَهَّرَةً"
 },
 "35:6": {
  "sn": "فاطر",
  "sr": "Fatir",
  "t": "إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ فَاتَّخِذُوهُ عَدُوًّا إِنَّمَا يَدْعُو حِزْبَهُ لِيَكُونُوا مِنْ أَصْحَابِ السَّعِيرِ"
 },
 "53:2": {
  "sn": "النجم",
  "sr": "An-Najm",
  "t": "مَا ضَلَّ صَاحِبُكُمْ وَمَا غَوَى"
 },
 "32:18": {
  "sn": "السجدة",
  "sr": "As-Sajdah",
  "t": "أَفَمَنْ كَانَ مُؤْمِنًا كَمَنْ كَانَ فَاسِقًا لَا يَسْتَوُونَ"
 },
 "64:2": {
  "sn": "التغابن",
  "sr": "At-Taghabun",
  "t": "هُوَ الَّذِي خَلَقَكُمْ فَمِنْكُمْ كَافِرٌ وَمِنْكُمْ مُؤْمِنٌ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ"
 },
 "4:145": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "إِنَّ الْمُنَافِقِينَ فِي الدَّرْكِ الْأَسْفَلِ مِنَ النَّارِ وَلَنْ تَجِدَ لَهُمْ نَصِيرًا"
 },
 "3:67": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "مَا كَانَ إِبْرَاهِيمُ يَهُودِيًّا وَلَا نَصْرَانِيًّا وَلَكِنْ كَانَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ"
 },
 "9:28": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْمُشْرِكُونَ نَجَسٌ فَلَا يَقْرَبُوا الْمَسْجِدَ الْحَرَامَ بَعْدَ عَامِهِمْ هَذَا وَإِنْ خِفْتُمْ عَيْلَةً فَسَوْفَ يُغْنِيكُمُ اللَّهُ مِنْ فَضْلِهِ إِنْ شَاءَ إِنَّ اللَّهَ عَلِيمٌ حَكِيمٌ"
 },
 "6:21": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "وَمَنْ أَظْلَمُ مِمَّنِ افْتَرَى عَلَى اللَّهِ كَذِبًا أَوْ كَذَّبَ بِآيَاتِهِ إِنَّهُ لَا يُفْلِحُ الظَّالِمُونَ"
 },
 "19:85": {
  "sn": "مريم",
  "sr": "Maryam",
  "t": "يَوْمَ نَحْشُرُ الْمُتَّقِينَ إِلَى الرَّحْمَنِ وَفْدًا"
 },
 "29:9": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَنُدْخِلَنَّهُمْ فِي الصَّالِحِينَ"
 },
 "55:41": {
  "sn": "الرحمن",
  "sr": "Ar-Rahman",
  "t": "يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ"
 },
 "32:6": {
  "sn": "السجدة",
  "sr": "As-Sajdah",
  "t": "ذَلِكَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْعَزِيزُ الرَّحِيمُ"
 },
 "7:199": {
  "sn": "الأعراف",
  "sr": "Al-A'raf",
  "t": "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ"
 },
 "19:4": {
  "sn": "مريم",
  "sr": "Maryam",
  "t": "قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا وَلَمْ أَكُنْ بِدُعَائِكَ رَبِّ شَقِيًّا"
 },
 "55:27": {
  "sn": "الرحمن",
  "sr": "Ar-Rahman",
  "t": "وَيَبْقَى وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ"
 },
 "90:8": {
  "sn": "البلد",
  "sr": "Al-Balad",
  "t": "أَلَمْ نَجْعَلْ لَهُ عَيْنَيْنِ"
 },
 "69:12": {
  "sn": "الحاقة",
  "sr": "Al-Haqqah",
  "t": "لِنَجْعَلَهَا لَكُمْ تَذْكِرَةً وَتَعِيَهَا أُذُنٌ وَاعِيَةٌ"
 },
 "5:45": {
  "sn": "المائدة",
  "sr": "Al-Ma'idah",
  "t": "وَكَتَبْنَا عَلَيْهِمْ فِيهَا أَنَّ النَّفْسَ بِالنَّفْسِ وَالْعَيْنَ بِالْعَيْنِ وَالْأَنْفَ بِالْأَنْفِ وَالْأُذُنَ بِالْأُذُنِ وَالسِّنَّ بِالسِّنِّ وَالْجُرُوحَ قِصَاصٌ فَمَنْ تَصَدَّقَ بِهِ فَهُوَ كَفَّارَةٌ لَهُ وَمَنْ لَمْ يَحْكُمْ بِمَا أَنْزَلَ اللَّهُ فَأُولَئِكَ هُمُ الظَّالِمُونَ"
 },
 "36:65": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "الْيَوْمَ نَخْتِمُ عَلَى أَفْوَاهِهِمْ وَتُكَلِّمُنَا أَيْدِيهِمْ وَتَشْهَدُ أَرْجُلُهُمْ بِمَا كَانُوا يَكْسِبُونَ"
 },
 "90:9": {
  "sn": "البلد",
  "sr": "Al-Balad",
  "t": "وَلِسَانًا وَشَفَتَيْنِ"
 },
 "48:10": {
  "sn": "الفتح",
  "sr": "Al-Fath",
  "t": "إِنَّ الَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ اللَّهَ يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ فَمَنْ نَكَثَ فَإِنَّمَا يَنْكُثُ عَلَى نَفْسِهِ وَمَنْ أَوْفَى بِمَا عَاهَدَ عَلَيْهُ اللَّهَ فَسَيُؤْتِيهِ أَجْرًا عَظِيمًا"
 },
 "50:37": {
  "sn": "ق",
  "sr": "Qaf",
  "t": "إِنَّ فِي ذَلِكَ لَذِكْرَى لِمَنْ كَانَ لَهُ قَلْبٌ أَوْ أَلْقَى السَّمْعَ وَهُوَ شَهِيدٌ"
 },
 "94:1": {
  "sn": "الشرح",
  "sr": "Ash-Sharh",
  "t": "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ"
 },
 "16:78": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "وَاللَّهُ أَخْرَجَكُمْ مِنْ بُطُونِ أُمَّهَاتِكُمْ لَا تَعْلَمُونَ شَيْئًا وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ لَعَلَّكُمْ تَشْكُرُونَ"
 },
 "94:3": {
  "sn": "الشرح",
  "sr": "Ash-Sharh",
  "t": "الَّذِي أَنْقَضَ ظَهْرَكَ"
 },
 "17:29": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً إِلَى عُنُقِكَ وَلَا تَبْسُطْهَا كُلَّ الْبَسْطِ فَتَقْعُدَ مَلُومًا مَحْسُورًا"
 },
 "41:20": {
  "sn": "فصلت",
  "sr": "Fussilat",
  "t": "حَتَّى إِذَا مَا جَاءُوهَا شَهِدَ عَلَيْهِمْ سَمْعُهُمْ وَأَبْصَارُهُمْ وَجُلُودُهُمْ بِمَا كَانُوا يَعْمَلُونَ"
 },
 "17:85": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَيَسْأَلُونَكَ عَنِ الرُّوحِ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي وَمَا أُوتِيتُمْ مِنَ الْعِلْمِ إِلَّا قَلِيلًا"
 },
 "21:8": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "وَمَا جَعَلْنَاهُمْ جَسَدًا لَا يَأْكُلُونَ الطَّعَامَ وَمَا كَانُوا خَالِدِينَ"
 },
 "2:7": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "خَتَمَ اللَّهُ عَلَى قُلُوبِهِمْ وَعَلَى سَمْعِهِمْ وَعَلَى أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ"
 },
 "53:17": {
  "sn": "النجم",
  "sr": "An-Najm",
  "t": "مَا زَاغَ الْبَصَرُ وَمَا طَغَى"
 },
 "53:11": {
  "sn": "النجم",
  "sr": "An-Najm",
  "t": "مَا كَذَبَ الْفُؤَادُ مَا رَأَى"
 },
 "96:15": {
  "sn": "العلق",
  "sr": "Al-Alaq",
  "t": "كَلَّا لَئِنْ لَمْ يَنْتَهِ لَنَسْفَعًا بِالنَّاصِيَةِ"
 },
 "2:19": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "أَوْ كَصَيِّبٍ مِنَ السَّمَاءِ فِيهِ ظُلُمَاتٌ وَرَعْدٌ وَبَرْقٌ يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِمْ مِنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ وَاللَّهُ مُحِيطٌ بِالْكَافِرِينَ"
 },
 "49:14": {
  "sn": "الحجرات",
  "sr": "Al-Hujurat",
  "t": "قَالَتِ الْأَعْرَابُ آمَنَّا قُلْ لَمْ تُؤْمِنُوا وَلَكِنْ قُولُوا أَسْلَمْنَا وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ وَإِنْ تُطِيعُوا اللَّهَ وَرَسُولَهُ لَا يَلِتْكُمْ مِنْ أَعْمَالِكُمْ شَيْئًا إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ"
 },
 "98:5": {
  "sn": "البينة",
  "sr": "Al-Bayyinah",
  "t": "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ وَذَلِكَ دِينُ الْقَيِّمَةِ"
 },
 "2:183": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ"
 },
 "22:27": {
  "sn": "الحج",
  "sr": "Al-Hajj",
  "t": "وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَى كُلِّ ضَامِرٍ يَأْتِينَ مِنْ كُلِّ فَجٍّ عَمِيقٍ"
 },
 "2:196": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ فَإِنْ أُحْصِرْتُمْ فَمَا اسْتَيْسَرَ مِنَ الْهَدْيِ وَلَا تَحْلِقُوا رُءُوسَكُمْ حَتَّى يَبْلُغَ الْهَدْيُ مَحِلَّهُ فَمَنْ كَانَ مِنْكُمْ مَرِيضًا أَوْ بِهِ أَذًى مِنْ رَأْسِهِ فَفِدْيَةٌ مِنْ صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍ فَإِذَا أَمِنْتُمْ فَمَنْ تَمَتَّعَ بِالْعُمْرَةِ إِلَى الْحَجِّ فَمَا اسْتَيْسَرَ مِنَ الْهَدْيِ فَمَنْ لَمْ يَجِدْ فَصِيَامُ ثَلَاثَةِ أَيَّامٍ فِي الْحَجِّ وَسَبْعَةٍ إِذَا رَجَعْتُمْ تِلْكَ عَشَرَةٌ كَامِلَةٌ ذَلِكَ لِمَنْ لَمْ يَكُنْ أَهْلُهُ حَاضِرِي الْمَسْجِدِ الْحَرَامِ وَاتَّقُوا اللَّهَ وَاعْلَمُوا أَنَّ اللَّهَ شَدِيدُ الْعِقَابِ"
 },
 "109:6": {
  "sn": "الكافرون",
  "sr": "Al-Kafirun",
  "t": "لَكُمْ دِينُكُمْ وَلِيَ دِينِ"
 },
 "3:19": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "إِنَّ الدِّينَ عِنْدَ اللَّهِ الْإِسْلَامُ وَمَا اخْتَلَفَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِنْ بَعْدِ مَا جَاءَهُمُ الْعِلْمُ بَغْيًا بَيْنَهُمْ وَمَنْ يَكْفُرْ بِآيَاتِ اللَّهِ فَإِنَّ اللَّهَ سَرِيعُ الْحِسَابِ"
 },
 "54:17": {
  "sn": "القمر",
  "sr": "Al-Qamar",
  "t": "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ"
 },
 "36:37": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "وَآيَةٌ لَهُمُ اللَّيْلُ نَسْلَخُ مِنْهُ النَّهَارَ فَإِذَا هُمْ مُظْلِمُونَ"
 },
 "24:1": {
  "sn": "النور",
  "sr": "An-Noor",
  "t": "سُورَةٌ أَنْزَلْنَاهَا وَفَرَضْنَاهَا وَأَنْزَلْنَا فِيهَا آيَاتٍ بَيِّنَاتٍ لَعَلَّكُمْ تَذَكَّرُونَ"
 },
 "53:4": {
  "sn": "النجم",
  "sr": "An-Najm",
  "t": "إِنْ هُوَ إِلَّا وَحْيٌ يُوحَى"
 },
 "14:40": {
  "sn": "إبراهيم",
  "sr": "Ibrahim",
  "t": "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ"
 },
 "2:125": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَإِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِلنَّاسِ وَأَمْنًا وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى وَعَهِدْنَا إِلَى إِبْرَاهِيمَ وَإِسْمَاعِيلَ أَنْ طَهِّرَا بَيْتِيَ لِلطَّائِفِينَ وَالْعَاكِفِينَ وَالرُّكَّعِ السُّجُودِ"
 },
 "50:40": {
  "sn": "ق",
  "sr": "Qaf",
  "t": "وَمِنَ اللَّيْلِ فَسَبِّحْهُ وَأَدْبَارَ السُّجُودِ"
 },
 "17:44": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "تُسَبِّحُ لَهُ السَّمَاوَاتُ السَّبْعُ وَالْأَرْضُ وَمَنْ فِيهِنَّ وَإِنْ مِنْ شَيْءٍ إِلَّا يُسَبِّحُ بِحَمْدِهِ وَلَكِنْ لَا تَفْقَهُونَ تَسْبِيحَهُمْ إِنَّهُ كَانَ حَلِيمًا غَفُورًا"
 },
 "76:9": {
  "sn": "الإنسان",
  "sr": "Al-Insan",
  "t": "إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنْكُمْ جَزَاءً وَلَا شُكُورًا"
 },
 "103:3": {
  "sn": "العصر",
  "sr": "Al-Asr",
  "t": "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ"
 },
 "42:25": {
  "sn": "الشورى",
  "sr": "Ash-Shura",
  "t": "وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ وَيَعْفُو عَنِ السَّيِّئَاتِ وَيَعْلَمُ مَا تَفْعَلُونَ"
 },
 "74:56": {
  "sn": "المدثر",
  "sr": "Al-Muddaththir",
  "t": "وَمَا يَذْكُرُونَ إِلَّا أَنْ يَشَاءَ اللَّهُ هُوَ أَهْلُ التَّقْوَى وَأَهْلُ الْمَغْفِرَةِ"
 },
 "39:2": {
  "sn": "الزمر",
  "sr": "Az-Zumar",
  "t": "إِنَّا أَنْزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ فَاعْبُدِ اللَّهَ مُخْلِصًا لَهُ الدِّينَ"
 },
 "36:24": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "إِنِّي إِذًا لَفِي ضَلَالٍ مُبِينٍ"
 },
 "2:144": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "قَدْ نَرَى تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ وَحَيْثُ مَا كُنْتُمْ فَوَلُّوا وُجُوهَكُمْ شَطْرَهُ وَإِنَّ الَّذِينَ أُوتُوا الْكِتَابَ لَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ وَمَا اللَّهُ بِغَافِلٍ عَمَّا يَعْمَلُونَ"
 },
 "21:19": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "وَلَهُ مَنْ فِي السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ عِنْدَهُ لَا يَسْتَكْبِرُونَ عَنْ عِبَادَتِهِ وَلَا يَسْتَحْسِرُونَ"
 },
 "25:52": {
  "sn": "الفرقان",
  "sr": "Al-Furqan",
  "t": "فَلَا تُطِعِ الْكَافِرِينَ وَجَاهِدْهُمْ بِهِ جِهَادًا كَبِيرًا"
 },
 "96:1": {
  "sn": "العلق",
  "sr": "Al-Alaq",
  "t": "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ"
 },
 "67:15": {
  "sn": "الملك",
  "sr": "Al-Mulk",
  "t": "هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِنْ رِزْقِهِ وَإِلَيْهِ النُّشُورُ"
 },
 "30:44": {
  "sn": "الروم",
  "sr": "Ar-Rum",
  "t": "مَنْ كَفَرَ فَعَلَيْهِ كُفْرُهُ وَمَنْ عَمِلَ صَالِحًا فَلِأَنْفُسِهِمْ يَمْهَدُونَ"
 },
 "79:25": {
  "sn": "النازعات",
  "sr": "An-Nazi'at",
  "t": "فَأَخَذَهُ اللَّهُ نَكَالَ الْآخِرَةِ وَالْأُولَى"
 },
 "92:5": {
  "sn": "الليل",
  "sr": "Al-Layl",
  "t": "فَأَمَّا مَنْ أَعْطَى وَاتَّقَى"
 },
 "35:45": {
  "sn": "فاطر",
  "sr": "Fatir",
  "t": "وَلَوْ يُؤَاخِذُ اللَّهُ النَّاسَ بِمَا كَسَبُوا مَا تَرَكَ عَلَى ظَهْرِهَا مِنْ دَابَّةٍ وَلَكِنْ يُؤَخِّرُهُمْ إِلَى أَجَلٍ مُسَمًّى فَإِذَا جَاءَ أَجَلُهُمْ فَإِنَّ اللَّهَ كَانَ بِعِبَادِهِ بَصِيرًا"
 },
 "93:7": {
  "sn": "الضحى",
  "sr": "Ad-Duha",
  "t": "وَوَجَدَكَ ضَالًّا فَهَدَى"
 },
 "74:21": {
  "sn": "المدثر",
  "sr": "Al-Muddaththir",
  "t": "ثُمَّ نَظَرَ"
 },
 "6:24": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "انْظُرْ كَيْفَ كَذَبُوا عَلَى أَنْفُسِهِمْ وَضَلَّ عَنْهُمْ مَا كَانُوا يَفْتَرُونَ"
 },
 "36:68": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "وَمَنْ نُعَمِّرْهُ نُنَكِّسْهُ فِي الْخَلْقِ أَفَلَا يَعْقِلُونَ"
 },
 "33:41": {
  "sn": "الأحزاب",
  "sr": "Al-Ahzab",
  "t": "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا"
 },
 "36:78": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "وَضَرَبَ لَنَا مَثَلًا وَنَسِيَ خَلْقَهُ قَالَ مَنْ يُحْيِ الْعِظَامَ وَهِيَ رَمِيمٌ"
 },
 "80:12": {
  "sn": "عبس",
  "sr": "Abasa",
  "t": "فَمَنْ شَاءَ ذَكَرَهُ"
 },
 "36:82": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَنْ يَقُولَ لَهُ كُنْ فَيَكُونُ"
 },
 "28:56": {
  "sn": "القصص",
  "sr": "Al-Qasas",
  "t": "إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ وَلَكِنَّ اللَّهَ يَهْدِي مَنْ يَشَاءُ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ"
 },
 "3:76": {
  "sn": "آل عمران",
  "sr": "Ali 'Imran",
  "t": "بَلَى مَنْ أَوْفَى بِعَهْدِهِ وَاتَّقَى فَإِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ"
 },
 "9:46": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "وَلَوْ أَرَادُوا الْخُرُوجَ لَأَعَدُّوا لَهُ عُدَّةً وَلَكِنْ كَرِهَ اللَّهُ انْبِعَاثَهُمْ فَثَبَّطَهُمْ وَقِيلَ اقْعُدُوا مَعَ الْقَاعِدِينَ"
 },
 "55:46": {
  "sn": "الرحمن",
  "sr": "Ar-Rahman",
  "t": "وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ"
 },
 "41:30": {
  "sn": "فصلت",
  "sr": "Fussilat",
  "t": "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ أَلَّا تَخَافُوا وَلَا تَحْزَنُوا وَأَبْشِرُوا بِالْجَنَّةِ الَّتِي كُنْتُمْ تُوعَدُونَ"
 },
 "50:33": {
  "sn": "ق",
  "sr": "Qaf",
  "t": "مَنْ خَشِيَ الرَّحْمَنَ بِالْغَيْبِ وَجَاءَ بِقَلْبٍ مُنِيبٍ"
 },
 "29:5": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "مَنْ كَانَ يَرْجُو لِقَاءَ اللَّهِ فَإِنَّ أَجَلَ اللَّهِ لَآتٍ وَهُوَ السَّمِيعُ الْعَلِيمُ"
 },
 "3:38": {
  "sn": "آل عمران",
  "sr": "Ali 'Imran",
  "t": "هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُ قَالَ رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ"
 },
 "7:55": {
  "sn": "الأعراف",
  "sr": "Al-A'raf",
  "t": "ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً إِنَّهُ لَا يُحِبُّ الْمُعْتَدِينَ"
 },
 "70:1": {
  "sn": "المعارج",
  "sr": "Al-Ma'arij",
  "t": "سَأَلَ سَائِلٌ بِعَذَابٍ وَاقِعٍ"
 },
 "28:65": {
  "sn": "القصص",
  "sr": "Al-Qasas",
  "t": "وَيَوْمَ يُنَادِيهِمْ فَيَقُولُ مَاذَا أَجَبْتُمُ الْمُرْسَلِينَ"
 },
 "8:9": {
  "sn": "الأنفال",
  "sr": "Al-Anfal",
  "t": "إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُمْ بِأَلْفٍ مِنَ الْمَلَائِكَةِ مُرْدِفِينَ"
 },
 "42:43": {
  "sn": "الشورى",
  "sr": "Ash-Shura",
  "t": "وَلَمَنْ صَبَرَ وَغَفَرَ إِنَّ ذَلِكَ لَمِنْ عَزْمِ الْأُمُورِ"
 },
 "23:118": {
  "sn": "المؤمنون",
  "sr": "Al-Mu'minun",
  "t": "وَقُلْ رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ"
 },
 "11:119": {
  "sn": "هود",
  "sr": "Hud",
  "t": "إِلَّا مَنْ رَحِمَ رَبُّكَ وَلِذَلِكَ خَلَقَهُمْ وَتَمَّتْ كَلِمَةُ رَبِّكَ لَأَمْلَأَنَّ جَهَنَّمَ مِنَ الْجِنَّةِ وَالنَّاسِ أَجْمَعِينَ"
 },
 "47:1": {
  "sn": "محمد",
  "sr": "Muhammad",
  "t": "الَّذِينَ كَفَرُوا وَصَدُّوا عَنْ سَبِيلِ اللَّهِ أَضَلَّ أَعْمَالَهُمْ"
 },
 "18:88": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "وَأَمَّا مَنْ آمَنَ وَعَمِلَ صَالِحًا فَلَهُ جَزَاءً الْحُسْنَى وَسَنَقُولُ لَهُ مِنْ أَمْرِنَا يُسْرًا"
 },
 "3:95": {
  "sn": "آل عمران",
  "sr": "Ali 'Imran",
  "t": "قُلْ صَدَقَ اللَّهُ فَاتَّبِعُوا مِلَّةَ إِبْرَاهِيمَ حَنِيفًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ"
 },
 "18:87": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "قَالَ أَمَّا مَنْ ظَلَمَ فَسَوْفَ نُعَذِّبُهُ ثُمَّ يُرَدُّ إِلَى رَبِّهِ فَيُعَذِّبُهُ عَذَابًا نُكْرًا"
 },
 "79:21": {
  "sn": "النازعات",
  "sr": "An-Nazi'at",
  "t": "فَكَذَّبَ وَعَصَى"
 },
 "3:132": {
  "sn": "آل عمران",
  "sr": "Ali 'Imran",
  "t": "وَأَطِيعُوا اللَّهَ وَالرَّسُولَ لَعَلَّكُمْ تُرْحَمُونَ"
 },
 "11:115": {
  "sn": "هود",
  "sr": "Hud",
  "t": "وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ"
 },
 "2:43": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ"
 },
 "22:77": {
  "sn": "الحج",
  "sr": "Al-Hajj",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا ارْكَعُوا وَاسْجُدُوا وَاعْبُدُوا رَبَّكُمْ وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ"
 },
 "25:71": {
  "sn": "الفرقان",
  "sr": "Al-Furqan",
  "t": "وَمَنْ تَابَ وَعَمِلَ صَالِحًا فَإِنَّهُ يَتُوبُ إِلَى اللَّهِ مَتَابًا"
 },
 "2:218": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "إِنَّ الَّذِينَ آمَنُوا وَالَّذِينَ هَاجَرُوا وَجَاهَدُوا فِي سَبِيلِ اللَّهِ أُولَئِكَ يَرْجُونَ رَحْمَتَ اللَّهِ وَاللَّهُ غَفُورٌ رَحِيمٌ"
 },
 "57:10": {
  "sn": "الحديد",
  "sr": "Al-Hadid",
  "t": "وَمَا لَكُمْ أَلَّا تُنْفِقُوا فِي سَبِيلِ اللَّهِ وَلِلَّهِ مِيرَاثُ السَّمَاوَاتِ وَالْأَرْضِ لَا يَسْتَوِي مِنْكُمْ مَنْ أَنْفَقَ مِنْ قَبْلِ الْفَتْحِ وَقَاتَلَ أُولَئِكَ أَعْظَمُ دَرَجَةً مِنَ الَّذِينَ أَنْفَقُوا مِنْ بَعْدُ وَقَاتَلُوا وَكُلًّا وَعَدَ اللَّهُ الْحُسْنَى وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ"
 },
 "5:32": {
  "sn": "المائدة",
  "sr": "Al-Ma'idah",
  "t": "مِنْ أَجْلِ ذَلِكَ كَتَبْنَا عَلَى بَنِي إِسْرَائِيلَ أَنَّهُ مَنْ قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا وَلَقَدْ جَاءَتْهُمْ رُسُلُنَا بِالْبَيِّنَاتِ ثُمَّ إِنَّ كَثِيرًا مِنْهُمْ بَعْدَ ذَلِكَ فِي الْأَرْضِ لَمُسْرِفُونَ"
 },
 "3:144": {
  "sn": "آل عمران",
  "sr": "Ali 'Imran",
  "t": "وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِنْ قَبْلِهِ الرُّسُلُ أَفَإِنْ مَاتَ أَوْ قُتِلَ انْقَلَبْتُمْ عَلَى أَعْقَابِكُمْ وَمَنْ يَنْقَلِبْ عَلَى عَقِبَيْهِ فَلَنْ يَضُرَّ اللَّهَ شَيْئًا وَسَيَجْزِي اللَّهُ الشَّاكِرِينَ"
 },
 "53:44": {
  "sn": "النجم",
  "sr": "An-Najm",
  "t": "وَأَنَّهُ هُوَ أَمَاتَ وَأَحْيَا"
 },
 "64:16": {
  "sn": "التغابن",
  "sr": "At-Taghabun",
  "t": "فَاتَّقُوا اللَّهَ مَا اسْتَطَعْتُمْ وَاسْمَعُوا وَأَطِيعُوا وَأَنْفِقُوا خَيْرًا لِأَنْفُسِكُمْ وَمَنْ يُوقَ شُحَّ نَفْسِهِ فَأُولَئِكَ هُمُ الْمُفْلِحُونَ"
 },
 "2:249": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "فَلَمَّا فَصَلَ طَالُوتُ بِالْجُنُودِ قَالَ إِنَّ اللَّهَ مُبْتَلِيكُمْ بِنَهَرٍ فَمَنْ شَرِبَ مِنْهُ فَلَيْسَ مِنِّي وَمَنْ لَمْ يَطْعَمْهُ فَإِنَّهُ مِنِّي إِلَّا مَنِ اغْتَرَفَ غُرْفَةً بِيَدِهِ فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِنْهُمْ فَلَمَّا جَاوَزَهُ هُوَ وَالَّذِينَ آمَنُوا مَعَهُ قَالُوا لَا طَاقَةَ لَنَا الْيَوْمَ بِجَالُوتَ وَجُنُودِهِ قَالَ الَّذِينَ يَظُنُّونَ أَنَّهُمْ مُلَاقُو اللَّهِ كَمْ مِنْ فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ وَاللَّهُ مَعَ الصَّابِرِينَ"
 },
 "7:31": {
  "sn": "الأعراف",
  "sr": "Al-A'raf",
  "t": "يَابَنِي آدَمَ خُذُوا زِينَتَكُمْ عِنْدَ كُلِّ مَسْجِدٍ وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ"
 },
 "28:29": {
  "sn": "القصص",
  "sr": "Al-Qasas",
  "t": "فَلَمَّا قَضَى مُوسَى الْأَجَلَ وَسَارَ بِأَهْلِهِ آنَسَ مِنْ جَانِبِ الطُّورِ نَارًا قَالَ لِأَهْلِهِ امْكُثُوا إِنِّي آنَسْتُ نَارًا لَعَلِّي آتِيكُمْ مِنْهَا بِخَبَرٍ أَوْ جَذْوَةٍ مِنَ النَّارِ لَعَلَّكُمْ تَصْطَلُونَ"
 },
 "6:11": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "قُلْ سِيرُوا فِي الْأَرْضِ ثُمَّ انْظُرُوا كَيْفَ كَانَ عَاقِبَةُ الْمُكَذِّبِينَ"
 },
 "87:4": {
  "sn": "الأعلى",
  "sr": "Al-A'la",
  "t": "وَالَّذِي أَخْرَجَ الْمَرْعَى"
 },
 "27:12": {
  "sn": "النمل",
  "sr": "An-Naml",
  "t": "وَأَدْخِلْ يَدَكَ فِي جَيْبِكَ تَخْرُجْ بَيْضَاءَ مِنْ غَيْرِ سُوءٍ فِي تِسْعِ آيَاتٍ إِلَى فِرْعَوْنَ وَقَوْمِهِ إِنَّهُمْ كَانُوا قَوْمًا فَاسِقِينَ"
 },
 "104:2": {
  "sn": "الهمزة",
  "sr": "Al-Humazah",
  "t": "الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ"
 },
 "40:48": {
  "sn": "غافر",
  "sr": "Ghafir",
  "t": "قَالَ الَّذِينَ اسْتَكْبَرُوا إِنَّا كُلٌّ فِيهَا إِنَّ اللَّهَ قَدْ حَكَمَ بَيْنَ الْعِبَادِ"
 },
 "28:25": {
  "sn": "القصص",
  "sr": "Al-Qasas",
  "t": "فَجَاءَتْهُ إِحْدَاهُمَا تَمْشِي عَلَى اسْتِحْيَاءٍ قَالَتْ إِنَّ أَبِي يَدْعُوكَ لِيَجْزِيَكَ أَجْرَ مَا سَقَيْتَ لَنَا فَلَمَّا جَاءَهُ وَقَصَّ عَلَيْهِ الْقَصَصَ قَالَ لَا تَخَفْ نَجَوْتَ مِنَ الْقَوْمِ الظَّالِمِينَ"
 },
 "58:21": {
  "sn": "المجادلة",
  "sr": "Al-Mujadilah",
  "t": "كَتَبَ اللَّهُ لَأَغْلِبَنَّ أَنَا وَرُسُلِي إِنَّ اللَّهَ قَوِيٌّ عَزِيزٌ"
 },
 "12:40": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "مَا تَعْبُدُونَ مِنْ دُونِهِ إِلَّا أَسْمَاءً سَمَّيْتُمُوهَا أَنْتُمْ وَآبَاؤُكُمْ مَا أَنْزَلَ اللَّهُ بِهَا مِنْ سُلْطَانٍ إِنِ الْحُكْمُ إِلَّا لِلَّهِ أَمَرَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ ذَلِكَ الدِّينُ الْقَيِّمُ وَلَكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ"
 },
 "2:275": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "الَّذِينَ يَأْكُلُونَ الرِّبَا لَا يَقُومُونَ إِلَّا كَمَا يَقُومُ الَّذِي يَتَخَبَّطُهُ الشَّيْطَانُ مِنَ الْمَسِّ ذَلِكَ بِأَنَّهُمْ قَالُوا إِنَّمَا الْبَيْعُ مِثْلُ الرِّبَا وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا فَمَنْ جَاءَهُ مَوْعِظَةٌ مِنْ رَبِّهِ فَانْتَهَى فَلَهُ مَا سَلَفَ وَأَمْرُهُ إِلَى اللَّهِ وَمَنْ عَادَ فَأُولَئِكَ أَصْحَابُ النَّارِ هُمْ فِيهَا خَالِدُونَ"
 },
 "2:181": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "فَمَنْ بَدَّلَهُ بَعْدَ مَا سَمِعَهُ فَإِنَّمَا إِثْمُهُ عَلَى الَّذِينَ يُبَدِّلُونَهُ إِنَّ اللَّهَ سَمِيعٌ عَلِيمٌ"
 },
 "12:22": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "وَلَمَّا بَلَغَ أَشُدَّهُ آتَيْنَاهُ حُكْمًا وَعِلْمًا وَكَذَلِكَ نَجْزِي الْمُحْسِنِينَ"
 },
 "29:2": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ"
 },
 "46:21": {
  "sn": "الأحقاف",
  "sr": "Al-Ahqaf",
  "t": "وَاذْكُرْ أَخَا عَادٍ إِذْ أَنْذَرَ قَوْمَهُ بِالْأَحْقَافِ وَقَدْ خَلَتِ النُّذُرُ مِنْ بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ أَلَّا تَعْبُدُوا إِلَّا اللَّهَ إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ"
 },
 "69:29": {
  "sn": "الحاقة",
  "sr": "Al-Haqqah",
  "t": "هَلَكَ عَنِّي سُلْطَانِيَهْ"
 },
 "53:50": {
  "sn": "النجم",
  "sr": "An-Najm",
  "t": "وَأَنَّهُ أَهْلَكَ عَادًا الْأُولَى"
 },
 "21:88": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ وَكَذَلِكَ نُنْجِي الْمُؤْمِنِينَ"
 },
 "2:76": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَإِذَا لَقُوا الَّذِينَ آمَنُوا قَالُوا آمَنَّا وَإِذَا خَلَا بَعْضُهُمْ إِلَى بَعْضٍ قَالُوا أَتُحَدِّثُونَهُمْ بِمَا فَتَحَ اللَّهُ عَلَيْكُمْ لِيُحَاجُّوكُمْ بِهِ عِنْدَ رَبِّكُمْ أَفَلَا تَعْقِلُونَ"
 },
 "18:41": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "أَوْ يُصْبِحَ مَاؤُهَا غَوْرًا فَلَنْ تَسْتَطِيعَ لَهُ طَلَبًا"
 },
 "79:40": {
  "sn": "النازعات",
  "sr": "An-Nazi'at",
  "t": "وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَى"
 },
 "9:103": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا وَصَلِّ عَلَيْهِمْ إِنَّ صَلَاتَكَ سَكَنٌ لَهُمْ وَاللَّهُ سَمِيعٌ عَلِيمٌ"
 },
 "17:100": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "قُلْ لَوْ أَنْتُمْ تَمْلِكُونَ خَزَائِنَ رَحْمَةِ رَبِّي إِذًا لَأَمْسَكْتُمْ خَشْيَةَ الْإِنْفَاقِ وَكَانَ الْإِنْسَانُ قَتُورًا"
 },
 "3:104": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "وَلْتَكُنْ مِنْكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنْكَرِ وَأُولَئِكَ هُمُ الْمُفْلِحُونَ"
 },
 "29:45": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "اتْلُ مَا أُوحِيَ إِلَيْكَ مِنَ الْكِتَابِ وَأَقِمِ الصَّلَاةَ إِنَّ الصَّلَاةَ تَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَلَذِكْرُ اللَّهِ أَكْبَرُ وَاللَّهُ يَعْلَمُ مَا تَصْنَعُونَ"
 },
 "16:116": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "وَلَا تَقُولُوا لِمَا تَصِفُ أَلْسِنَتُكُمُ الْكَذِبَ هَذَا حَلَالٌ وَهَذَا حَرَامٌ لِتَفْتَرُوا عَلَى اللَّهِ الْكَذِبَ إِنَّ الَّذِينَ يَفْتَرُونَ عَلَى اللَّهِ الْكَذِبَ لَا يُفْلِحُونَ"
 },
 "2:168": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "يَاأَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا وَلَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ إِنَّهُ لَكُمْ عَدُوٌّ مُبِينٌ"
 },
 "2:235": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَلَا جُنَاحَ عَلَيْكُمْ فِيمَا عَرَّضْتُمْ بِهِ مِنْ خِطْبَةِ النِّسَاءِ أَوْ أَكْنَنْتُمْ فِي أَنْفُسِكُمْ عَلِمَ اللَّهُ أَنَّكُمْ سَتَذْكُرُونَهُنَّ وَلَكِنْ لَا تُوَاعِدُوهُنَّ سِرًّا إِلَّا أَنْ تَقُولُوا قَوْلًا مَعْرُوفًا وَلَا تَعْزِمُوا عُقْدَةَ النِّكَاحِ حَتَّى يَبْلُغَ الْكِتَابُ أَجَلَهُ وَاعْلَمُوا أَنَّ اللَّهَ يَعْلَمُ مَا فِي أَنْفُسِكُمْ فَاحْذَرُوهُ وَاعْلَمُوا أَنَّ اللَّهَ غَفُورٌ حَلِيمٌ"
 },
 "2:227": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَإِنْ عَزَمُوا الطَّلَاقَ فَإِنَّ اللَّهَ سَمِيعٌ عَلِيمٌ"
 },
 "2:180": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "كُتِبَ عَلَيْكُمْ إِذَا حَضَرَ أَحَدَكُمُ الْمَوْتُ إِنْ تَرَكَ خَيْرًا الْوَصِيَّةُ لِلْوَالِدَيْنِ وَالْأَقْرَبِينَ بِالْمَعْرُوفِ حَقًّا عَلَى الْمُتَّقِينَ"
 },
 "97:3": {
  "sn": "القدر",
  "sr": "Al-Qadr",
  "t": "لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ"
 },
 "2:185": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَى وَالْفُرْقَانِ فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ وَمَنْ كَانَ مَرِيضًا أَوْ عَلَى سَفَرٍ فَعِدَّةٌ مِنْ أَيَّامٍ أُخَرَ يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ وَلِتُكْمِلُوا الْعِدَّةَ وَلِتُكَبِّرُوا اللَّهَ عَلَى مَا هَدَاكُمْ وَلَعَلَّكُمْ تَشْكُرُونَ"
 },
 "93:4": {
  "sn": "الضحى",
  "sr": "Ad-Duha",
  "t": "وَلَلْآخِرَةُ خَيْرٌ لَكَ مِنَ الْأُولَى"
 },
 "2:82": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَئِكَ أَصْحَابُ الْجَنَّةِ هُمْ فِيهَا خَالِدُونَ"
 },
 "2:25": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَبَشِّرِ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أَنَّ لَهُمْ جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ كُلَّمَا رُزِقُوا مِنْهَا مِنْ ثَمَرَةٍ رِزْقًا قَالُوا هَذَا الَّذِي رُزِقْنَا مِنْ قَبْلُ وَأُتُوا بِهِ مُتَشَابِهًا وَلَهُمْ فِيهَا أَزْوَاجٌ مُطَهَّرَةٌ وَهُمْ فِيهَا خَالِدُونَ"
 },
 "19:86": {
  "sn": "مريم",
  "sr": "Maryam",
  "t": "وَنَسُوقُ الْمُجْرِمِينَ إِلَى جَهَنَّمَ وِرْدًا"
 },
 "82:14": {
  "sn": "الانفطار",
  "sr": "Al-Infitar",
  "t": "وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ"
 },
 "42:7": {
  "sn": "الشورى",
  "sr": "Ash-Shura",
  "t": "وَكَذَلِكَ أَوْحَيْنَا إِلَيْكَ قُرْآنًا عَرَبِيًّا لِتُنْذِرَ أُمَّ الْقُرَى وَمَنْ حَوْلَهَا وَتُنْذِرَ يَوْمَ الْجَمْعِ لَا رَيْبَ فِيهِ فَرِيقٌ فِي الْجَنَّةِ وَفَرِيقٌ فِي السَّعِيرِ"
 },
 "2:201": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَمِنْهُمْ مَنْ يَقُولُ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
 },
 "41:8": {
  "sn": "فصلت",
  "sr": "Fussilat",
  "t": "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ"
 },
 "78:36": {
  "sn": "النبأ",
  "sr": "An-Naba",
  "t": "جَزَاءً مِنْ رَبِّكَ عَطَاءً حِسَابًا"
 },
 "2:202": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "أُولَئِكَ لَهُمْ نَصِيبٌ مِمَّا كَسَبُوا وَاللَّهُ سَرِيعُ الْحِسَابِ"
 },
 "75:1": {
  "sn": "القيامة",
  "sr": "Al-Qiyamah",
  "t": "لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ"
 },
 "54:1": {
  "sn": "القمر",
  "sr": "Al-Qamar",
  "t": "اقْتَرَبَتِ السَّاعَةُ وَانْشَقَّ الْقَمَرُ"
 },
 "3:185": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ فَمَنْ زُحْزِحَ عَنِ النَّارِ وَأُدْخِلَ الْجَنَّةَ فَقَدْ فَازَ وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ"
 },
 "67:2": {
  "sn": "الملك",
  "sr": "Al-Mulk",
  "t": "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا وَهُوَ الْعَزِيزُ الْغَفُورُ"
 },
 "9:84": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "وَلَا تُصَلِّ عَلَى أَحَدٍ مِنْهُمْ مَاتَ أَبَدًا وَلَا تَقُمْ عَلَى قَبْرِهِ إِنَّهُمْ كَفَرُوا بِاللَّهِ وَرَسُولِهِ وَمَاتُوا وَهُمْ فَاسِقُونَ"
 },
 "18:99": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "وَتَرَكْنَا بَعْضَهُمْ يَوْمَئِذٍ يَمُوجُ فِي بَعْضٍ وَنُفِخَ فِي الصُّورِ فَجَمَعْنَاهُمْ جَمْعًا"
 },
 "20:109": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "يَوْمَئِذٍ لَا تَنْفَعُ الشَّفَاعَةُ إِلَّا مَنْ أَذِنَ لَهُ الرَّحْمَنُ وَرَضِيَ لَهُ قَوْلًا"
 },
 "23:11": {
  "sn": "المؤمنون",
  "sr": "Al-Mu'minun",
  "t": "الَّذِينَ يَرِثُونَ الْفِرْدَوْسَ هُمْ فِيهَا خَالِدُونَ"
 },
 "61:12": {
  "sn": "الصف",
  "sr": "As-Saff",
  "t": "يَغْفِرْ لَكُمْ ذُنُوبَكُمْ وَيُدْخِلْكُمْ جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ وَمَسَاكِنَ طَيِّبَةً فِي جَنَّاتِ عَدْنٍ ذَلِكَ الْفَوْزُ الْعَظِيمُ"
 },
 "25:15": {
  "sn": "الفرقان",
  "sr": "Al-Furqan",
  "t": "قُلْ أَذَلِكَ خَيْرٌ أَمْ جَنَّةُ الْخُلْدِ الَّتِي وُعِدَ الْمُتَّقُونَ كَانَتْ لَهُمْ جَزَاءً وَمَصِيرًا"
 },
 "98:8": {
  "sn": "البينة",
  "sr": "Al-Bayyinah",
  "t": "جَزَاؤُهُمْ عِنْدَ رَبِّهِمْ جَنَّاتُ عَدْنٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ ذَلِكَ لِمَنْ خَشِيَ رَبَّهُ"
 },
 "85:11": {
  "sn": "البروج",
  "sr": "Al-Buruj",
  "t": "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ ذَلِكَ الْفَوْزُ الْكَبِيرُ"
 },
 "39:15": {
  "sn": "الزمر",
  "sr": "Az-Zumar",
  "t": "فَاعْبُدُوا مَا شِئْتُمْ مِنْ دُونِهِ قُلْ إِنَّ الْخَاسِرِينَ الَّذِينَ خَسِرُوا أَنْفُسَهُمْ وَأَهْلِيهِمْ يَوْمَ الْقِيَامَةِ أَلَا ذَلِكَ هُوَ الْخُسْرَانُ الْمُبِينُ"
 },
 "28:88": {
  "sn": "القصص",
  "sr": "Al-Qasas",
  "t": "وَلَا تَدْعُ مَعَ اللَّهِ إِلَهًا آخَرَ لَا إِلَهَ إِلَّا هُوَ كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ لَهُ الْحُكْمُ وَإِلَيْهِ تُرْجَعُونَ"
 },
 "40:41": {
  "sn": "غافر",
  "sr": "Ghafir",
  "t": "وَيَاقَوْمِ مَا لِي أَدْعُوكُمْ إِلَى النَّجَاةِ وَتَدْعُونَنِي إِلَى النَّارِ"
 },
 "50:44": {
  "sn": "ق",
  "sr": "Qaaf",
  "t": "يَوْمَ تَشَقَّقُ الْأَرْضُ عَنْهُمْ سِرَاعًا ذَلِكَ حَشْرٌ عَلَيْنَا يَسِيرٌ"
 },
 "2:3": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ"
 },
 "20:5": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "الرَّحْمَنُ عَلَى الْعَرْشِ اسْتَوَى"
 },
 "2:255": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ"
 },
 "44:43": {
  "sn": "الدخان",
  "sr": "Ad-Dukhan",
  "t": "إِنَّ شَجَرَتَ الزَّقُّومِ"
 },
 "56:42": {
  "sn": "الواقعة",
  "sr": "Al-Waqi'ah",
  "t": "فِي سَمُومٍ وَحَمِيمٍ"
 },
 "82:13": {
  "sn": "الانفطار",
  "sr": "Al-Infitar",
  "t": "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ"
 },
 "3:15": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "قُلْ أَؤُنَبِّئُكُمْ بِخَيْرٍ مِنْ ذَلِكُمْ لِلَّذِينَ اتَّقَوْا عِنْدَ رَبِّهِمْ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا وَأَزْوَاجٌ مُطَهَّرَةٌ وَرِضْوَانٌ مِنَ اللَّهِ وَاللَّهُ بَصِيرٌ بِالْعِبَادِ"
 },
 "44:54": {
  "sn": "الدخان",
  "sr": "Ad-Dukhan",
  "t": "كَذَلِكَ وَزَوَّجْنَاهُمْ بِحُورٍ عِينٍ"
 },
 "55:68": {
  "sn": "الرحمن",
  "sr": "Ar-Rahman",
  "t": "فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ"
 },
 "21:69": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "قُلْنَا يَانَارُ كُونِي بَرْدًا وَسَلَامًا عَلَى إِبْرَاهِيمَ"
 },
 "19:54": {
  "sn": "مريم",
  "sr": "Maryam",
  "t": "وَاذْكُرْ فِي الْكِتَابِ إِسْمَاعِيلَ إِنَّهُ كَانَ صَادِقَ الْوَعْدِ وَكَانَ رَسُولًا نَبِيًّا"
 },
 "37:112": {
  "sn": "الصافات",
  "sr": "As-Saffat",
  "t": "وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِنَ الصَّالِحِينَ"
 },
 "21:72": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ نَافِلَةً وَكُلًّا جَعَلْنَا صَالِحِينَ"
 },
 "12:4": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَاأَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ"
 },
 "20:9": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "وَهَلْ أَتَاكَ حَدِيثُ مُوسَى"
 },
 "3:42": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "وَإِذْ قَالَتِ الْمَلَائِكَةُ يَامَرْيَمُ إِنَّ اللَّهَ اصْطَفَاكِ وَطَهَّرَكِ وَاصْطَفَاكِ عَلَى نِسَاءِ الْعَالَمِينَ"
 },
 "38:17": {
  "sn": "ص",
  "sr": "Saad",
  "t": "اصْبِرْ عَلَى مَا يَقُولُونَ وَاذْكُرْ عَبْدَنَا دَاوُودَ ذَا الْأَيْدِ إِنَّهُ أَوَّابٌ"
 },
 "27:16": {
  "sn": "النمل",
  "sr": "An-Naml",
  "t": "وَوَرِثَ سُلَيْمَانُ دَاوُودَ وَقَالَ يَاأَيُّهَا النَّاسُ عُلِّمْنَا مَنْطِقَ الطَّيْرِ وَأُوتِينَا مِنْ كُلِّ شَيْءٍ إِنَّ هَذَا لَهُوَ الْفَضْلُ الْمُبِينُ"
 },
 "21:83": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "وَأَيُّوبَ إِذْ نَادَى رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ"
 },
 "37:139": {
  "sn": "الصافات",
  "sr": "As-Saffat",
  "t": "وَإِنَّ يُونُسَ لَمِنَ الْمُرْسَلِينَ"
 },
 "21:89": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "وَزَكَرِيَّا إِذْ نَادَى رَبَّهُ رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ"
 },
 "19:12": {
  "sn": "مريم",
  "sr": "Maryam",
  "t": "يَايَحْيَى خُذِ الْكِتَابَ بِقُوَّةٍ وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا"
 },
 "11:50": {
  "sn": "هود",
  "sr": "Hud",
  "t": "وَإِلَى عَادٍ أَخَاهُمْ هُودًا قَالَ يَاقَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ إِنْ أَنْتُمْ إِلَّا مُفْتَرُونَ"
 },
 "29:36": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "وَإِلَى مَدْيَنَ أَخَاهُمْ شُعَيْبًا فَقَالَ يَاقَوْمِ اعْبُدُوا اللَّهَ وَارْجُوا الْيَوْمَ الْآخِرَ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ"
 },
 "37:133": {
  "sn": "الصافات",
  "sr": "As-Saffat",
  "t": "وَإِنَّ لُوطًا لَمِنَ الْمُرْسَلِينَ"
 },
 "20:24": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "اذْهَبْ إِلَى فِرْعَوْنَ إِنَّهُ طَغَى"
 },
 "29:39": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "وَقَارُونَ وَفِرْعَوْنَ وَهَامَانَ وَلَقَدْ جَاءَهُمْ مُوسَى بِالْبَيِّنَاتِ فَاسْتَكْبَرُوا فِي الْأَرْضِ وَمَا كَانُوا سَابِقِينَ"
 },
 "31:13": {
  "sn": "لقمان",
  "sr": "Luqman",
  "t": "وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ وَهُوَ يَعِظُهُ يَابُنَيَّ لَا تُشْرِكْ بِاللَّهِ إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ"
 },
 "2:40": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "يَابَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ وَأَوْفُوا بِعَهْدِي أُوفِ بِعَهْدِكُمْ وَإِيَّايَ فَارْهَبُونِ"
 },
 "12:99": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "فَلَمَّا دَخَلُوا عَلَى يُوسُفَ آوَى إِلَيْهِ أَبَوَيْهِ وَقَالَ ادْخُلُوا مِصْرَ إِنْ شَاءَ اللَّهُ آمِنِينَ"
 },
 "2:63": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَإِذْ أَخَذْنَا مِيثَاقَكُمْ وَرَفَعْنَا فَوْقَكُمُ الطُّورَ خُذُوا مَا آتَيْنَاكُمْ بِقُوَّةٍ وَاذْكُرُوا مَا فِيهِ لَعَلَّكُمْ تَتَّقُونَ"
 },
 "3:3": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ يَدَيْهِ وَأَنْزَلَ التَّوْرَاةَ وَالْإِنْجِيلَ"
 },
 "3:48": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "وَيُعَلِّمُهُ الْكِتَابَ وَالْحِكْمَةَ وَالتَّوْرَاةَ وَالْإِنْجِيلَ"
 },
 "21:105": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "وَلَقَدْ كَتَبْنَا فِي الزَّبُورِ مِنْ بَعْدِ الذِّكْرِ أَنَّ الْأَرْضَ يَرِثُهَا عِبَادِيَ الصَّالِحُونَ"
 },
 "87:18": {
  "sn": "الأعلى",
  "sr": "Al-A'la",
  "t": "إِنَّ هَذَا لَفِي الصُّحُفِ الْأُولَى"
 },
 "20:25": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "قَالَ رَبِّ اشْرَحْ لِي صَدْرِي"
 },
 "35:34": {
  "sn": "فاطر",
  "sr": "Fatir",
  "t": "وَقَالُوا الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ"
 },
 "2:117": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ وَإِذَا قَضَى أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ"
 },
 "3:47": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "قَالَتْ رَبِّ أَنَّى يَكُونُ لِي وَلَدٌ وَلَمْ يَمْسَسْنِي بَشَرٌ قَالَ كَذَلِكِ اللَّهُ يَخْلُقُ مَا يَشَاءُ إِذَا قَضَى أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُنْ فَيَكُونُ"
 },
 "110:1": {
  "sn": "النصر",
  "sr": "An-Nasr",
  "t": "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ"
 },
 "16:1": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "أَتَى أَمْرُ اللَّهِ فَلَا تَسْتَعْجِلُوهُ سُبْحَانَهُ وَتَعَالَى عَمَّا يُشْرِكُونَ"
 },
 "30:43": {
  "sn": "الروم",
  "sr": "Ar-Rum",
  "t": "فَأَقِمْ وَجْهَكَ لِلدِّينِ الْقَيِّمِ مِنْ قَبْلِ أَنْ يَأْتِيَ يَوْمٌ لَا مَرَدَّ لَهُ مِنَ اللَّهِ يَوْمَئِذٍ يَصَّدَّعُونَ"
 },
 "28:21": {
  "sn": "القصص",
  "sr": "Al-Qasas",
  "t": "فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ قَالَ رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ"
 },
 "18:35": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "وَدَخَلَ جَنَّتَهُ وَهُوَ ظَالِمٌ لِنَفْسِهِ قَالَ مَا أَظُنُّ أَنْ تَبِيدَ هَذِهِ أَبَدًا"
 },
 "16:32": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "الَّذِينَ تَتَوَفَّاهُمُ الْمَلَائِكَةُ طَيِّبِينَ يَقُولُونَ سَلَامٌ عَلَيْكُمُ ادْخُلُوا الْجَنَّةَ بِمَا كُنْتُمْ تَعْمَلُونَ"
 },
 "7:150": {
  "sn": "الأعراف",
  "sr": "Al-A'raf",
  "t": "وَلَمَّا رَجَعَ مُوسَى إِلَى قَوْمِهِ غَضْبَانَ أَسِفًا قَالَ بِئْسَمَا خَلَفْتُمُونِي مِنْ بَعْدِي أَعَجِلْتُمْ أَمْرَ رَبِّكُمْ وَأَلْقَى الْأَلْوَاحَ وَأَخَذَ بِرَأْسِ أَخِيهِ يَجُرُّهُ إِلَيْهِ قَالَ ابْنَ أُمَّ إِنَّ الْقَوْمَ اسْتَضْعَفُونِي وَكَادُوا يَقْتُلُونَنِي فَلَا تُشْمِتْ بِيَ الْأَعْدَاءَ وَلَا تَجْعَلْنِي مَعَ الْقَوْمِ الظَّالِمِينَ"
 },
 "28:50": {
  "sn": "القصص",
  "sr": "Al-Qasas",
  "t": "فَإِنْ لَمْ يَسْتَجِيبُوا لَكَ فَاعْلَمْ أَنَّمَا يَتَّبِعُونَ أَهْوَاءَهُمْ وَمَنْ أَضَلُّ مِمَّنِ اتَّبَعَ هَوَاهُ بِغَيْرِ هُدًى مِنَ اللَّهِ إِنَّ اللَّهَ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ"
 },
 "72:19": {
  "sn": "الجن",
  "sr": "Al-Jinn",
  "t": "وَأَنَّهُ لَمَّا قَامَ عَبْدُ اللَّهِ يَدْعُوهُ كَادُوا يَكُونُونَ عَلَيْهِ لِبَدًا"
 },
 "22:65": {
  "sn": "الحج",
  "sr": "Al-Hajj",
  "t": "أَلَمْ تَرَ أَنَّ اللَّهَ سَخَّرَ لَكُمْ مَا فِي الْأَرْضِ وَالْفُلْكَ تَجْرِي فِي الْبَحْرِ بِأَمْرِهِ وَيُمْسِكُ السَّمَاءَ أَنْ تَقَعَ عَلَى الْأَرْضِ إِلَّا بِإِذْنِهِ إِنَّ اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَحِيمٌ"
 },
 "52:28": {
  "sn": "الطور",
  "sr": "At-Tur",
  "t": "إِنَّا كُنَّا مِنْ قَبْلُ نَدْعُوهُ إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ"
 },
 "4:85": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "مَنْ يَشْفَعْ شَفَاعَةً حَسَنَةً يَكُنْ لَهُ نَصِيبٌ مِنْهَا وَمَنْ يَشْفَعْ شَفَاعَةً سَيِّئَةً يَكُنْ لَهُ كِفْلٌ مِنْهَا وَكَانَ اللَّهُ عَلَى كُلِّ شَيْءٍ مُقِيتًا"
 },
 "34:21": {
  "sn": "سبأ",
  "sr": "Saba",
  "t": "وَمَا كَانَ لَهُ عَلَيْهِمْ مِنْ سُلْطَانٍ إِلَّا لِنَعْلَمَ مَنْ يُؤْمِنُ بِالْآخِرَةِ مِمَّنْ هُوَ مِنْهَا فِي شَكٍّ وَرَبُّكَ عَلَى كُلِّ شَيْءٍ حَفِيظٌ"
 },
 "6:114": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "أَفَغَيْرَ اللَّهِ أَبْتَغِي حَكَمًا وَهُوَ الَّذِي أَنْزَلَ إِلَيْكُمُ الْكِتَابَ مُفَصَّلًا وَالَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يَعْلَمُونَ أَنَّهُ مُنَزَّلٌ مِنْ رَبِّكَ بِالْحَقِّ فَلَا تَكُونَنَّ مِنَ الْمُمْتَرِينَ"
 },
 "16:51": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "وَقَالَ اللَّهُ لَا تَتَّخِذُوا إِلَهَيْنِ اثْنَيْنِ إِنَّمَا هُوَ إِلَهٌ وَاحِدٌ فَإِيَّايَ فَارْهَبُونِ"
 },
 "9:2": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "فَسِيحُوا فِي الْأَرْضِ أَرْبَعَةَ أَشْهُرٍ وَاعْلَمُوا أَنَّكُمْ غَيْرُ مُعْجِزِي اللَّهِ وَأَنَّ اللَّهَ مُخْزِي الْكَافِرِينَ"
 },
 "18:22": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "سَيَقُولُونَ ثَلَاثَةٌ رَابِعُهُمْ كَلْبُهُمْ وَيَقُولُونَ خَمْسَةٌ سَادِسُهُمْ كَلْبُهُمْ رَجْمًا بِالْغَيْبِ وَيَقُولُونَ سَبْعَةٌ وَثَامِنُهُمْ كَلْبُهُمْ قُلْ رَبِّي أَعْلَمُ بِعِدَّتِهِمْ مَا يَعْلَمُهُمْ إِلَّا قَلِيلٌ فَلَا تُمَارِ فِيهِمْ إِلَّا مِرَاءً ظَاهِرًا وَلَا تَسْتَفْتِ فِيهِمْ مِنْهُمْ أَحَدًا"
 },
 "50:38": {
  "sn": "ق",
  "sr": "Qaaf",
  "t": "وَلَقَدْ خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا فِي سِتَّةِ أَيَّامٍ وَمَا مَسَّنَا مِنْ لُغُوبٍ"
 },
 "17:101": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَلَقَدْ آتَيْنَا مُوسَى تِسْعَ آيَاتٍ بَيِّنَاتٍ فَاسْأَلْ بَنِي إِسْرَائِيلَ إِذْ جَاءَهُمْ فَقَالَ لَهُ فِرْعَوْنُ إِنِّي لَأَظُنُّكَ يَامُوسَى مَسْحُورًا"
 },
 "99:7": {
  "sn": "الزلزلة",
  "sr": "Az-Zalzalah",
  "t": "فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ"
 },
 "73:14": {
  "sn": "المزمل",
  "sr": "Al-Muzzammil",
  "t": "يَوْمَ تَرْجُفُ الْأَرْضُ وَالْجِبَالُ وَكَانَتِ الْجِبَالُ كَثِيبًا مَهِيلًا"
 },
 "7:107": {
  "sn": "الأعراف",
  "sr": "Al-A'raf",
  "t": "فَأَلْقَى عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ مُبِينٌ"
 },
 "18:71": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "فَانْطَلَقَا حَتَّى إِذَا رَكِبَا فِي السَّفِينَةِ خَرَقَهَا قَالَ أَخَرَقْتَهَا لِتُغْرِقَ أَهْلَهَا لَقَدْ جِئْتَ شَيْئًا إِمْرًا"
 },
 "36:39": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّى عَادَ كَالْعُرْجُونِ الْقَدِيمِ"
 },
 "2:61": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَإِذْ قُلْتُمْ يَامُوسَى لَنْ نَصْبِرَ عَلَى طَعَامٍ وَاحِدٍ فَادْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنْبِتُ الْأَرْضُ مِنْ بَقْلِهَا وَقِثَّائِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا قَالَ أَتَسْتَبْدِلُونَ الَّذِي هُوَ أَدْنَى بِالَّذِي هُوَ خَيْرٌ اهْبِطُوا مِصْرًا فَإِنَّ لَكُمْ مَا سَأَلْتُمْ وَضُرِبَتْ عَلَيْهِمُ الذِّلَّةُ وَالْمَسْكَنَةُ وَبَاءُوا بِغَضَبٍ مِنَ اللَّهِ ذَلِكَ بِأَنَّهُمْ كَانُوا يَكْفُرُونَ بِآيَاتِ اللَّهِ وَيَقْتُلُونَ النَّبِيِّينَ بِغَيْرِ الْحَقِّ ذَلِكَ بِمَا عَصَوْا وَكَانُوا يَعْتَدُونَ"
 },
 "37:49": {
  "sn": "الصافات",
  "sr": "As-Saffat",
  "t": "كَأَنَّهُنَّ بَيْضٌ مَكْنُونٌ"
 },
 "16:10": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "هُوَ الَّذِي أَنْزَلَ مِنَ السَّمَاءِ مَاءً لَكُمْ مِنْهُ شَرَابٌ وَمِنْهُ شَجَرٌ فِيهِ تُسِيمُونَ"
 },
 "24:35": {
  "sn": "النور",
  "sr": "An-Noor",
  "t": "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ الْمِصْبَاحُ فِي زُجَاجَةٍ الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ يُوقَدُ مِنْ شَجَرَةٍ مُبَارَكَةٍ زَيْتُونَةٍ لَا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ يَكَادُ زَيْتُهَا يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ نُورٌ عَلَى نُورٍ يَهْدِي اللَّهُ لِنُورِهِ مَنْ يَشَاءُ وَيَضْرِبُ اللَّهُ الْأَمْثَالَ لِلنَّاسِ وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ"
 },
 "12:36": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "وَدَخَلَ مَعَهُ السِّجْنَ فَتَيَانِ قَالَ أَحَدُهُمَا إِنِّي أَرَانِي أَعْصِرُ خَمْرًا وَقَالَ الْآخَرُ إِنِّي أَرَانِي أَحْمِلُ فَوْقَ رَأْسِي خُبْزًا تَأْكُلُ الطَّيْرُ مِنْهُ نَبِّئْنَا بِتَأْوِيلِهِ إِنَّا نَرَاكَ مِنَ الْمُحْسِنِينَ"
 },
 "10:57": {
  "sn": "يونس",
  "sr": "Yunus",
  "t": "يَاأَيُّهَا النَّاسُ قَدْ جَاءَتْكُمْ مَوْعِظَةٌ مِنْ رَبِّكُمْ وَشِفَاءٌ لِمَا فِي الصُّدُورِ وَهُدًى وَرَحْمَةٌ لِلْمُؤْمِنِينَ"
 },
 "30:4": {
  "sn": "الروم",
  "sr": "Ar-Rum",
  "t": "فِي بِضْعِ سِنِينَ لِلَّهِ الْأَمْرُ مِنْ قَبْلُ وَمِنْ بَعْدُ وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ"
 },
 "106:4": {
  "sn": "قريش",
  "sr": "Quraysh",
  "t": "الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ"
 },
 "24:55": {
  "sn": "النور",
  "sr": "An-Noor",
  "t": "وَعَدَ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَعَمِلُوا الصَّالِحَاتِ لَيَسْتَخْلِفَنَّهُمْ فِي الْأَرْضِ كَمَا اسْتَخْلَفَ الَّذِينَ مِنْ قَبْلِهِمْ وَلَيُمَكِّنَنَّ لَهُمْ دِينَهُمُ الَّذِي ارْتَضَى لَهُمْ وَلَيُبَدِّلَنَّهُمْ مِنْ بَعْدِ خَوْفِهِمْ أَمْنًا يَعْبُدُونَنِي لَا يُشْرِكُونَ بِي شَيْئًا وَمَنْ كَفَرَ بَعْدَ ذَلِكَ فَأُولَئِكَ هُمُ الْفَاسِقُونَ"
 },
 "26:88": {
  "sn": "الشعراء",
  "sr": "Ash-Shu'ara",
  "t": "يَوْمَ لَا يَنْفَعُ مَالٌ وَلَا بَنُونَ"
 },
 "54:55": {
  "sn": "القمر",
  "sr": "Al-Qamar",
  "t": "فِي مَقْعَدِ صِدْقٍ عِنْدَ مَلِيكٍ مُقْتَدِرٍ"
 },
 "16:90": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَى وَيَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَالْبَغْيِ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ"
 },
 "3:134": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "الَّذِينَ يُنْفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ"
 },
 "113:5": {
  "sn": "الفلق",
  "sr": "Al-Falaq",
  "t": "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ"
 },
 "6:48": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "وَمَا نُرْسِلُ الْمُرْسَلِينَ إِلَّا مُبَشِّرِينَ وَمُنْذِرِينَ فَمَنْ آمَنَ وَأَصْلَحَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ"
 },
 "27:34": {
  "sn": "النمل",
  "sr": "An-Naml",
  "t": "قَالَتْ إِنَّ الْمُلُوكَ إِذَا دَخَلُوا قَرْيَةً أَفْسَدُوهَا وَجَعَلُوا أَعِزَّةَ أَهْلِهَا أَذِلَّةً وَكَذَلِكَ يَفْعَلُونَ"
 },
 "39:53": {
  "sn": "الزمر",
  "sr": "Az-Zumar",
  "t": "قُلْ يَاعِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ"
 },
 "57:11": {
  "sn": "الحديد",
  "sr": "Al-Hadid",
  "t": "مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ وَلَهُ أَجْرٌ كَرِيمٌ"
 },
 "3:135": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "وَالَّذِينَ إِذَا فَعَلُوا فَاحِشَةً أَوْ ظَلَمُوا أَنْفُسَهُمْ ذَكَرُوا اللَّهَ فَاسْتَغْفَرُوا لِذُنُوبِهِمْ وَمَنْ يَغْفِرُ الذُّنُوبَ إِلَّا اللَّهُ وَلَمْ يُصِرُّوا عَلَى مَا فَعَلُوا وَهُمْ يَعْلَمُونَ"
 },
 "57:1": {
  "sn": "الحديد",
  "sr": "Al-Hadid",
  "t": "سَبَّحَ لِلَّهِ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ"
 },
 "87:15": {
  "sn": "الأعلى",
  "sr": "Al-A'la",
  "t": "وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّى"
 },
 "27:40": {
  "sn": "النمل",
  "sr": "An-Naml",
  "t": "قَالَ الَّذِي عِنْدَهُ عِلْمٌ مِنَ الْكِتَابِ أَنَا آتِيكَ بِهِ قَبْلَ أَنْ يَرْتَدَّ إِلَيْكَ طَرْفُكَ فَلَمَّا رَآهُ مُسْتَقِرًّا عِنْدَهُ قَالَ هَذَا مِنْ فَضْلِ رَبِّي لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ وَمَنْ شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ وَمَنْ كَفَرَ فَإِنَّ رَبِّي غَنِيٌّ كَرِيمٌ"
 },
 "25:7": {
  "sn": "الفرقان",
  "sr": "Al-Furqan",
  "t": "وَقَالُوا مَالِ هَذَا الرَّسُولِ يَأْكُلُ الطَّعَامَ وَيَمْشِي فِي الْأَسْوَاقِ لَوْلَا أُنْزِلَ إِلَيْهِ مَلَكٌ فَيَكُونَ مَعَهُ نَذِيرًا"
 },
 "25:10": {
  "sn": "الفرقان",
  "sr": "Al-Furqan",
  "t": "تَبَارَكَ الَّذِي إِنْ شَاءَ جَعَلَ لَكَ خَيْرًا مِنْ ذَلِكَ جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ وَيَجْعَلْ لَكَ قُصُورًا"
 },
 "15:47": {
  "sn": "الحجر",
  "sr": "Al-Hijr",
  "t": "وَنَزَعْنَا مَا فِي صُدُورِهِمْ مِنْ غِلٍّ إِخْوَانًا عَلَى سُرُرٍ مُتَقَابِلِينَ"
 },
 "18:29": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "وَقُلِ الْحَقُّ مِنْ رَبِّكُمْ فَمَنْ شَاءَ فَلْيُؤْمِنْ وَمَنْ شَاءَ فَلْيَكْفُرْ إِنَّا أَعْتَدْنَا لِلظَّالِمِينَ نَارًا أَحَاطَ بِهِمْ سُرَادِقُهَا وَإِنْ يَسْتَغِيثُوا يُغَاثُوا بِمَاءٍ كَالْمُهْلِ يَشْوِي الْوُجُوهَ بِئْسَ الشَّرَابُ وَسَاءَتْ مُرْتَفَقًا"
 },
 "61:4": {
  "sn": "الصف",
  "sr": "As-Saff",
  "t": "إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُمْ بُنْيَانٌ مَرْصُوصٌ"
 },
 "57:13": {
  "sn": "الحديد",
  "sr": "Al-Hadid",
  "t": "يَوْمَ يَقُولُ الْمُنَافِقُونَ وَالْمُنَافِقَاتُ لِلَّذِينَ آمَنُوا انْظُرُونَا نَقْتَبِسْ مِنْ نُورِكُمْ قِيلَ ارْجِعُوا وَرَاءَكُمْ فَالْتَمِسُوا نُورًا فَضُرِبَ بَيْنَهُمْ بِسُورٍ لَهُ بَابٌ بَاطِنُهُ فِيهِ الرَّحْمَةُ وَظَاهِرُهُ مِنْ قِبَلِهِ الْعَذَابُ"
 },
 "78:7": {
  "sn": "النبأ",
  "sr": "An-Naba",
  "t": "وَالْجِبَالَ أَوْتَادًا"
 },
 "23:100": {
  "sn": "المؤمنون",
  "sr": "Al-Mu'minun",
  "t": "لَعَلِّي أَعْمَلُ صَالِحًا فِيمَا تَرَكْتُ كَلَّا إِنَّهَا كَلِمَةٌ هُوَ قَائِلُهَا وَمِنْ وَرَائِهِمْ بَرْزَخٌ إِلَى يَوْمِ يُبْعَثُونَ"
 },
 "3:9": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَا رَيْبَ فِيهِ إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ"
 },
 "100:9": {
  "sn": "العاديات",
  "sr": "Al-Adiyat",
  "t": "أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِي الْقُبُورِ"
 },
 "22:7": {
  "sn": "الحج",
  "sr": "Al-Hajj",
  "t": "وَأَنَّ السَّاعَةَ آتِيَةٌ لَا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَنْ فِي الْقُبُورِ"
 },
 "50:18": {
  "sn": "ق",
  "sr": "Qaaf",
  "t": "مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ"
 },
 "80:16": {
  "sn": "عبس",
  "sr": "Abasa",
  "t": "كِرَامٍ بَرَرَةٍ"
 },
 "33:72": {
  "sn": "الأحزاب",
  "sr": "Al-Ahzab",
  "t": "إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ وَالْجِبَالِ فَأَبَيْنَ أَنْ يَحْمِلْنَهَا وَأَشْفَقْنَ مِنْهَا وَحَمَلَهَا الْإِنْسَانُ إِنَّهُ كَانَ ظَلُومًا جَهُولًا"
 },
 "51:22": {
  "sn": "الذاريات",
  "sr": "Adh-Dhariyat",
  "t": "وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ"
 },
 "11:34": {
  "sn": "هود",
  "sr": "Hud",
  "t": "وَلَا يَنْفَعُكُمْ نُصْحِي إِنْ أَرَدْتُ أَنْ أَنْصَحَ لَكُمْ إِنْ كَانَ اللَّهُ يُرِيدُ أَنْ يُغْوِيَكُمْ هُوَ رَبُّكُمْ وَإِلَيْهِ تُرْجَعُونَ"
 },
 "95:4": {
  "sn": "التين",
  "sr": "At-Tin",
  "t": "لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ"
 },
 "2:256": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "لَا إِكْرَاهَ فِي الدِّينِ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ فَمَنْ يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِنْ بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَى لَا انْفِصَامَ لَهَا وَاللَّهُ سَمِيعٌ عَلِيمٌ"
 },
 "2:172": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ وَاشْكُرُوا لِلَّهِ إِنْ كُنْتُمْ إِيَّاهُ تَعْبُدُونَ"
 },
 "5:100": {
  "sn": "المائدة",
  "sr": "Al-Ma'idah",
  "t": "قُلْ لَا يَسْتَوِي الْخَبِيثُ وَالطَّيِّبُ وَلَوْ أَعْجَبَكَ كَثْرَةُ الْخَبِيثِ فَاتَّقُوا اللَّهَ يَاأُولِي الْأَلْبَابِ لَعَلَّكُمْ تُفْلِحُونَ"
 },
 "17:57": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "أُولَئِكَ الَّذِينَ يَدْعُونَ يَبْتَغُونَ إِلَى رَبِّهِمُ الْوَسِيلَةَ أَيُّهُمْ أَقْرَبُ وَيَرْجُونَ رَحْمَتَهُ وَيَخَافُونَ عَذَابَهُ إِنَّ عَذَابَ رَبِّكَ كَانَ مَحْذُورًا"
 },
 "2:155": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِنَ الْأَمْوَالِ وَالْأَنْفُسِ وَالثَّمَرَاتِ وَبَشِّرِ الصَّابِرِينَ"
 },
 "85:15": {
  "sn": "البروج",
  "sr": "Al-Buruj",
  "t": "ذُو الْعَرْشِ الْمَجِيدُ"
 },
 "77:23": {
  "sn": "المرسلات",
  "sr": "Al-Mursalat",
  "t": "فَقَدَرْنَا فَنِعْمَ الْقَادِرُونَ"
 },
 "57:3": {
  "sn": "الحديد",
  "sr": "Al-Hadid",
  "t": "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ"
 },
 "13:11": {
  "sn": "الرعد",
  "sr": "Ar-Ra'd",
  "t": "لَهُ مُعَقِّبَاتٌ مِنْ بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ يَحْفَظُونَهُ مِنْ أَمْرِ اللَّهِ إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ وَإِذَا أَرَادَ اللَّهُ بِقَوْمٍ سُوءًا فَلَا مَرَدَّ لَهُ وَمَا لَهُمْ مِنْ دُونِهِ مِنْ وَالٍ"
 },
 "24:61": {
  "sn": "النور",
  "sr": "An-Noor",
  "t": "لَيْسَ عَلَى الْأَعْمَى حَرَجٌ وَلَا عَلَى الْأَعْرَجِ حَرَجٌ وَلَا عَلَى الْمَرِيضِ حَرَجٌ وَلَا عَلَى أَنْفُسِكُمْ أَنْ تَأْكُلُوا مِنْ بُيُوتِكُمْ أَوْ بُيُوتِ آبَائِكُمْ أَوْ بُيُوتِ أُمَّهَاتِكُمْ أَوْ بُيُوتِ إِخْوَانِكُمْ أَوْ بُيُوتِ أَخَوَاتِكُمْ أَوْ بُيُوتِ أَعْمَامِكُمْ أَوْ بُيُوتِ عَمَّاتِكُمْ أَوْ بُيُوتِ أَخْوَالِكُمْ أَوْ بُيُوتِ خَالَاتِكُمْ أَوْ مَا مَلَكْتُمْ مَفَاتِحَهُ أَوْ صَدِيقِكُمْ لَيْسَ عَلَيْكُمْ جُنَاحٌ أَنْ تَأْكُلُوا جَمِيعًا أَوْ أَشْتَاتًا فَإِذَا دَخَلْتُمْ بُيُوتًا فَسَلِّمُوا عَلَى أَنْفُسِكُمْ تَحِيَّةً مِنْ عِنْدِ اللَّهِ مُبَارَكَةً طَيِّبَةً كَذَلِكَ يُبَيِّنُ اللَّهُ لَكُمُ الْآيَاتِ لَعَلَّكُمْ تَعْقِلُونَ"
 },
 "4:36": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا وَبِالْوَالِدَيْنِ إِحْسَانًا وَبِذِي الْقُرْبَى وَالْيَتَامَى وَالْمَسَاكِينِ وَالْجَارِ ذِي الْقُرْبَى وَالْجَارِ الْجُنُبِ وَالصَّاحِبِ بِالْجَنْبِ وَابْنِ السَّبِيلِ وَمَا مَلَكَتْ أَيْمَانُكُمْ إِنَّ اللَّهَ لَا يُحِبُّ مَنْ كَانَ مُخْتَالًا فَخُورًا"
 },
 "51:24": {
  "sn": "الذاريات",
  "sr": "Adh-Dhariyat",
  "t": "هَلْ أَتَاكَ حَدِيثُ ضَيْفِ إِبْرَاهِيمَ الْمُكْرَمِينَ"
 },
 "11:89": {
  "sn": "هود",
  "sr": "Hud",
  "t": "وَيَاقَوْمِ لَا يَجْرِمَنَّكُمْ شِقَاقِي أَنْ يُصِيبَكُمْ مِثْلُ مَا أَصَابَ قَوْمَ نُوحٍ أَوْ قَوْمَ هُودٍ أَوْ قَوْمَ صَالِحٍ وَمَا قَوْمُ لُوطٍ مِنْكُمْ بِبَعِيدٍ"
 },
 "11:72": {
  "sn": "هود",
  "sr": "Hud",
  "t": "قَالَتْ يَاوَيْلَتَا أَأَلِدُ وَأَنَا عَجُوزٌ وَهَذَا بَعْلِي شَيْخًا إِنَّ هَذَا لَشَيْءٌ عَجِيبٌ"
 },
 "21:60": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "قَالُوا سَمِعْنَا فَتًى يَذْكُرُهُمْ يُقَالُ لَهُ إِبْرَاهِيمُ"
 },
 "4:69": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "وَمَنْ يُطِعِ اللَّهَ وَالرَّسُولَ فَأُولَئِكَ مَعَ الَّذِينَ أَنْعَمَ اللَّهُ عَلَيْهِمْ مِنَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ وَالصَّالِحِينَ وَحَسُنَ أُولَئِكَ رَفِيقًا"
 },
 "16:4": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "خَلَقَ الْإِنْسَانَ مِنْ نُطْفَةٍ فَإِذَا هُوَ خَصِيمٌ مُبِينٌ"
 },
 "26:107": {
  "sn": "الشعراء",
  "sr": "Ash-Shu'ara",
  "t": "إِنِّي لَكُمْ رَسُولٌ أَمِينٌ"
 },
 "26:176": {
  "sn": "الشعراء",
  "sr": "Ash-Shu'ara",
  "t": "كَذَّبَ أَصْحَابُ الْأَيْكَةِ الْمُرْسَلِينَ"
 },
 "2:102": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَاتَّبَعُوا مَا تَتْلُو الشَّيَاطِينُ عَلَى مُلْكِ سُلَيْمَانَ وَمَا كَفَرَ سُلَيْمَانُ وَلَكِنَّ الشَّيَاطِينَ كَفَرُوا يُعَلِّمُونَ النَّاسَ السِّحْرَ وَمَا أُنْزِلَ عَلَى الْمَلَكَيْنِ بِبَابِلَ هَارُوتَ وَمَارُوتَ وَمَا يُعَلِّمَانِ مِنْ أَحَدٍ حَتَّى يَقُولَا إِنَّمَا نَحْنُ فِتْنَةٌ فَلَا تَكْفُرْ فَيَتَعَلَّمُونَ مِنْهُمَا مَا يُفَرِّقُونَ بِهِ بَيْنَ الْمَرْءِ وَزَوْجِهِ وَمَا هُمْ بِضَارِّينَ بِهِ مِنْ أَحَدٍ إِلَّا بِإِذْنِ اللَّهِ وَيَتَعَلَّمُونَ مَا يَضُرُّهُمْ وَلَا يَنْفَعُهُمْ وَلَقَدْ عَلِمُوا لَمَنِ اشْتَرَاهُ مَا لَهُ فِي الْآخِرَةِ مِنْ خَلَاقٍ وَلَبِئْسَ مَا شَرَوْا بِهِ أَنْفُسَهُمْ لَوْ كَانُوا يَعْلَمُونَ"
 },
 "3:123": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنْتُمْ أَذِلَّةٌ فَاتَّقُوا اللَّهَ لَعَلَّكُمْ تَشْكُرُونَ"
 },
 "9:25": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "لَقَدْ نَصَرَكُمُ اللَّهُ فِي مَوَاطِنَ كَثِيرَةٍ وَيَوْمَ حُنَيْنٍ إِذْ أَعْجَبَتْكُمْ كَثْرَتُكُمْ فَلَمْ تُغْنِ عَنْكُمْ شَيْئًا وَضَاقَتْ عَلَيْكُمُ الْأَرْضُ بِمَا رَحُبَتْ ثُمَّ وَلَّيْتُمْ مُدْبِرِينَ"
 },
 "23:20": {
  "sn": "المؤمنون",
  "sr": "Al-Mu'minun",
  "t": "وَشَجَرَةً تَخْرُجُ مِنْ طُورِ سَيْنَاءَ تَنْبُتُ بِالدُّهْنِ وَصِبْغٍ لِلْآكِلِينَ"
 },
 "18:9": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "أَمْ حَسِبْتَ أَنَّ أَصْحَابَ الْكَهْفِ وَالرَّقِيمِ كَانُوا مِنْ آيَاتِنَا عَجَبًا"
 },
 "9:109": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "أَفَمَنْ أَسَّسَ بُنْيَانَهُ عَلَى تَقْوَى مِنَ اللَّهِ وَرِضْوَانٍ خَيْرٌ أَمْ مَنْ أَسَّسَ بُنْيَانَهُ عَلَى شَفَا جُرُفٍ هَارٍ فَانْهَارَ بِهِ فِي نَارِ جَهَنَّمَ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ"
 },
 "10:23": {
  "sn": "يونس",
  "sr": "Yunus",
  "t": "فَلَمَّا أَنْجَاهُمْ إِذَا هُمْ يَبْغُونَ فِي الْأَرْضِ بِغَيْرِ الْحَقِّ يَاأَيُّهَا النَّاسُ إِنَّمَا بَغْيُكُمْ عَلَى أَنْفُسِكُمْ مَتَاعَ الْحَيَاةِ الدُّنْيَا ثُمَّ إِلَيْنَا مَرْجِعُكُمْ فَنُنَبِّئُكُمْ بِمَا كُنْتُمْ تَعْمَلُونَ"
 },
 "18:50": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ كَانَ مِنَ الْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِ أَفَتَتَّخِذُونَهُ وَذُرِّيَّتَهُ أَوْلِيَاءَ مِنْ دُونِي وَهُمْ لَكُمْ عَدُوٌّ بِئْسَ لِلظَّالِمِينَ بَدَلًا"
 },
 "83:29": {
  "sn": "المطففين",
  "sr": "Al-Mutaffifin",
  "t": "إِنَّ الَّذِينَ أَجْرَمُوا كَانُوا مِنَ الَّذِينَ آمَنُوا يَضْحَكُونَ"
 },
 "16:34": {
  "sn": "النحل",
  "sr": "An-Nahl",
  "t": "فَأَصَابَهُمْ سَيِّئَاتُ مَا عَمِلُوا وَحَاقَ بِهِمْ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ"
 },
 "4:80": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "مَنْ يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ وَمَنْ تَوَلَّى فَمَا أَرْسَلْنَاكَ عَلَيْهِمْ حَفِيظًا"
 },
 "24:63": {
  "sn": "النور",
  "sr": "An-Noor",
  "t": "لَا تَجْعَلُوا دُعَاءَ الرَّسُولِ بَيْنَكُمْ كَدُعَاءِ بَعْضِكُمْ بَعْضًا قَدْ يَعْلَمُ اللَّهُ الَّذِينَ يَتَسَلَّلُونَ مِنْكُمْ لِوَاذًا فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ أَنْ تُصِيبَهُمْ فِتْنَةٌ أَوْ يُصِيبَهُمْ عَذَابٌ أَلِيمٌ"
 },
 "18:31": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "أُولَئِكَ لَهُمْ جَنَّاتُ عَدْنٍ تَجْرِي مِنْ تَحْتِهِمُ الْأَنْهَارُ يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِنْ ذَهَبٍ وَيَلْبَسُونَ ثِيَابًا خُضْرًا مِنْ سُنْدُسٍ وَإِسْتَبْرَقٍ مُتَّكِئِينَ فِيهَا عَلَى الْأَرَائِكِ نِعْمَ الثَّوَابُ وَحَسُنَتْ مُرْتَفَقًا"
 },
 "4:95": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "لَا يَسْتَوِي الْقَاعِدُونَ مِنَ الْمُؤْمِنِينَ غَيْرُ أُولِي الضَّرَرِ وَالْمُجَاهِدُونَ فِي سَبِيلِ اللَّهِ بِأَمْوَالِهِمْ وَأَنْفُسِهِمْ فَضَّلَ اللَّهُ الْمُجَاهِدِينَ بِأَمْوَالِهِمْ وَأَنْفُسِهِمْ عَلَى الْقَاعِدِينَ دَرَجَةً وَكُلًّا وَعَدَ اللَّهُ الْحُسْنَى وَفَضَّلَ اللَّهُ الْمُجَاهِدِينَ عَلَى الْقَاعِدِينَ أَجْرًا عَظِيمًا"
 },
 "19:22": {
  "sn": "مريم",
  "sr": "Maryam",
  "t": "فَحَمَلَتْهُ فَانْتَبَذَتْ بِهِ مَكَانًا قَصِيًّا"
 },
 "3:36": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ إِنِّي وَضَعْتُهَا أُنْثَى وَاللَّهُ أَعْلَمُ بِمَا وَضَعَتْ وَلَيْسَ الذَّكَرُ كَالْأُنْثَى وَإِنِّي سَمَّيْتُهَا مَرْيَمَ وَإِنِّي أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطَانِ الرَّجِيمِ"
 },
 "76:21": {
  "sn": "الإنسان",
  "sr": "Al-Insan",
  "t": "عَالِيَهُمْ ثِيَابُ سُنْدُسٍ خُضْرٌ وَإِسْتَبْرَقٌ وَحُلُّوا أَسَاوِرَ مِنْ فِضَّةٍ وَسَقَاهُمْ رَبُّهُمْ شَرَابًا طَهُورًا"
 },
 "18:19": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "وَكَذَلِكَ بَعَثْنَاهُمْ لِيَتَسَاءَلُوا بَيْنَهُمْ قَالَ قَائِلٌ مِنْهُمْ كَمْ لَبِثْتُمْ قَالُوا لَبِثْنَا يَوْمًا أَوْ بَعْضَ يَوْمٍ قَالُوا رَبُّكُمْ أَعْلَمُ بِمَا لَبِثْتُمْ فَابْعَثُوا أَحَدَكُمْ بِوَرِقِكُمْ هَذِهِ إِلَى الْمَدِينَةِ فَلْيَنْظُرْ أَيُّهَا أَزْكَى طَعَامًا فَلْيَأْتِكُمْ بِرِزْقٍ مِنْهُ وَلْيَتَلَطَّفْ وَلَا يُشْعِرَنَّ بِكُمْ أَحَدًا"
 },
 "17:109": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَيَخِرُّونَ لِلْأَذْقَانِ يَبْكُونَ وَيَزِيدُهُمْ خُشُوعًا"
 },
 "17:79": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَكَ عَسَى أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا"
 },
 "20:108": {
  "sn": "طه",
  "sr": "Ta-Ha",
  "t": "يَوْمَئِذٍ يَتَّبِعُونَ الدَّاعِيَ لَا عِوَجَ لَهُ وَخَشَعَتِ الْأَصْوَاتُ لِلرَّحْمَنِ فَلَا تَسْمَعُ إِلَّا هَمْسًا"
 },
 "73:4": {
  "sn": "المزمل",
  "sr": "Al-Muzzammil",
  "t": "أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
 },
 "17:111": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَقُلِ الْحَمْدُ لِلَّهِ الَّذِي لَمْ يَتَّخِذْ وَلَدًا وَلَمْ يَكُنْ لَهُ شَرِيكٌ فِي الْمُلْكِ وَلَمْ يَكُنْ لَهُ وَلِيٌّ مِنَ الذُّلِّ وَكَبِّرْهُ تَكْبِيرًا"
 },
 "6:63": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "قُلْ مَنْ يُنَجِّيكُمْ مِنْ ظُلُمَاتِ الْبَرِّ وَالْبَحْرِ تَدْعُونَهُ تَضَرُّعًا وَخُفْيَةً لَئِنْ أَنْجَانَا مِنْ هَذِهِ لَنَكُونَنَّ مِنَ الشَّاكِرِينَ"
 },
 "25:54": {
  "sn": "الفرقان",
  "sr": "Al-Furqan",
  "t": "وَهُوَ الَّذِي خَلَقَ مِنَ الْمَاءِ بَشَرًا فَجَعَلَهُ نَسَبًا وَصِهْرًا وَكَانَ رَبُّكَ قَدِيرًا"
 },
 "2:205": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَإِذَا تَوَلَّى سَعَى فِي الْأَرْضِ لِيُفْسِدَ فِيهَا وَيُهْلِكَ الْحَرْثَ وَالنَّسْلَ وَاللَّهُ لَا يُحِبُّ الْفَسَادَ"
 },
 "6:101": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ أَنَّى يَكُونُ لَهُ وَلَدٌ وَلَمْ تَكُنْ لَهُ صَاحِبَةٌ وَخَلَقَ كُلَّ شَيْءٍ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ"
 },
 "2:98": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "مَنْ كَانَ عَدُوًّا لِلَّهِ وَمَلَائِكَتِهِ وَرُسُلِهِ وَجِبْرِيلَ وَمِيكَالَ فَإِنَّ اللَّهَ عَدُوٌّ لِلْكَافِرِينَ"
 },
 "85:22": {
  "sn": "البروج",
  "sr": "Al-Buruj",
  "t": "فِي لَوْحٍ مَحْفُوظٍ"
 },
 "52:24": {
  "sn": "الطور",
  "sr": "At-Tur",
  "t": "وَيَطُوفُ عَلَيْهِمْ غِلْمَانٌ لَهُمْ كَأَنَّهُمْ لُؤْلُؤٌ مَكْنُونٌ"
 },
 "56:17": {
  "sn": "الواقعة",
  "sr": "Al-Waqi'ah",
  "t": "يَطُوفُ عَلَيْهِمْ وِلْدَانٌ مُخَلَّدُونَ"
 },
 "19:56": {
  "sn": "مريم",
  "sr": "Maryam",
  "t": "وَاذْكُرْ فِي الْكِتَابِ إِدْرِيسَ إِنَّهُ كَانَ صِدِّيقًا نَبِيًّا"
 },
 "37:123": {
  "sn": "الصافات",
  "sr": "As-Saffat",
  "t": "وَإِنَّ إِلْيَاسَ لَمِنَ الْمُرْسَلِينَ"
 },
 "38:48": {
  "sn": "ص",
  "sr": "Saad",
  "t": "وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ وَذَا الْكِفْلِ وَكُلٌّ مِنَ الْأَخْيَارِ"
 },
 "9:30": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "وَقَالَتِ الْيَهُودُ عُزَيْرٌ ابْنُ اللَّهِ وَقَالَتِ النَّصَارَى الْمَسِيحُ ابْنُ اللَّهِ ذَلِكَ قَوْلُهُمْ بِأَفْوَاهِهِمْ يُضَاهِئُونَ قَوْلَ الَّذِينَ كَفَرُوا مِنْ قَبْلُ قَاتَلَهُمُ اللَّهُ أَنَّى يُؤْفَكُونَ"
 },
 "2:251": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "فَهَزَمُوهُمْ بِإِذْنِ اللَّهِ وَقَتَلَ دَاوُودُ جَالُوتَ وَآتَاهُ اللَّهُ الْمُلْكَ وَالْحِكْمَةَ وَعَلَّمَهُ مِمَّا يَشَاءُ وَلَوْلَا دَفْعُ اللَّهِ النَّاسَ بَعْضَهُمْ بِبَعْضٍ لَفَسَدَتِ الْأَرْضُ وَلَكِنَّ اللَّهَ ذُو فَضْلٍ عَلَى الْعَالَمِينَ"
 },
 "61:6": {
  "sn": "الصف",
  "sr": "As-Saff",
  "t": "وَإِذْ قَالَ عِيسَى ابْنُ مَرْيَمَ يَابَنِي إِسْرَائِيلَ إِنِّي رَسُولُ اللَّهِ إِلَيْكُمْ مُصَدِّقًا لِمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِنْ بَعْدِي اسْمُهُ أَحْمَدُ فَلَمَّا جَاءَهُمْ بِالْبَيِّنَاتِ قَالُوا هَذَا سِحْرٌ مُبِينٌ"
 },
 "21:96": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "حَتَّى إِذَا فُتِحَتْ يَأْجُوجُ وَمَأْجُوجُ وَهُمْ مِنْ كُلِّ حَدَبٍ يَنْسِلُونَ"
 },
 "53:10": {
  "sn": "النجم",
  "sr": "An-Najm",
  "t": "فَأَوْحَى إِلَى عَبْدِهِ مَا أَوْحَى"
 },
 "57:17": {
  "sn": "الحديد",
  "sr": "Al-Hadid",
  "t": "اعْلَمُوا أَنَّ اللَّهَ يُحْيِ الْأَرْضَ بَعْدَ مَوْتِهَا قَدْ بَيَّنَّا لَكُمُ الْآيَاتِ لَعَلَّكُمْ تَعْقِلُونَ"
 },
 "6:98": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "وَهُوَ الَّذِي أَنْشَأَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ فَمُسْتَقَرٌّ وَمُسْتَوْدَعٌ قَدْ فَصَّلْنَا الْآيَاتِ لِقَوْمٍ يَفْقَهُونَ"
 },
 "91:8": {
  "sn": "الشمس",
  "sr": "Ash-Shams",
  "t": "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا"
 },
 "72:28": {
  "sn": "الجن",
  "sr": "Al-Jinn",
  "t": "لِيَعْلَمَ أَنْ قَدْ أَبْلَغُوا رِسَالَاتِ رَبِّهِمْ وَأَحَاطَ بِمَا لَدَيْهِمْ وَأَحْصَى كُلَّ شَيْءٍ عَدَدًا"
 },
 "88:21": {
  "sn": "الغاشية",
  "sr": "Al-Ghashiyah",
  "t": "فَذَكِّرْ إِنَّمَا أَنْتَ مُذَكِّرٌ"
 },
 "94:8": {
  "sn": "الشرح",
  "sr": "Ash-Sharh",
  "t": "وَإِلَى رَبِّكَ فَارْغَبْ"
 },
 "53:39": {
  "sn": "النجم",
  "sr": "An-Najm",
  "t": "وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَى"
 },
 "29:6": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "وَمَنْ جَاهَدَ فَإِنَّمَا يُجَاهِدُ لِنَفْسِهِ إِنَّ اللَّهَ لَغَنِيٌّ عَنِ الْعَالَمِينَ"
 },
 "3:133": {
  "sn": "آل عمران",
  "sr": "Ali 'Imran",
  "t": "وَسَارِعُوا إِلَى مَغْفِرَةٍ مِنْ رَبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ أُعِدَّتْ لِلْمُتَّقِينَ"
 },
 "42:38": {
  "sn": "الشورى",
  "sr": "Ash-Shura",
  "t": "وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَمْرُهُمْ شُورَى بَيْنَهُمْ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ"
 },
 "5:2": {
  "sn": "المائدة",
  "sr": "Al-Ma'idah",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا لَا تُحِلُّوا شَعَائِرَ اللَّهِ وَلَا الشَّهْرَ الْحَرَامَ وَلَا الْهَدْيَ وَلَا الْقَلَائِدَ وَلَا آمِّينَ الْبَيْتَ الْحَرَامَ يَبْتَغُونَ فَضْلًا مِنْ رَبِّهِمْ وَرِضْوَانًا وَإِذَا حَلَلْتُمْ فَاصْطَادُوا وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ أَنْ صَدُّوكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ أَنْ تَعْتَدُوا وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ وَاتَّقُوا اللَّهَ إِنَّ اللَّهَ شَدِيدُ الْعِقَابِ"
 },
 "46:13": {
  "sn": "الأحقاف",
  "sr": "Al-Ahqaf",
  "t": "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ"
 },
 "4:48": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "إِنَّ اللَّهَ لَا يَغْفِرُ أَنْ يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَلِكَ لِمَنْ يَشَاءُ وَمَنْ يُشْرِكْ بِاللَّهِ فَقَدِ افْتَرَى إِثْمًا عَظِيمًا"
 },
 "41:40": {
  "sn": "فصلت",
  "sr": "Fussilat",
  "t": "إِنَّ الَّذِينَ يُلْحِدُونَ فِي آيَاتِنَا لَا يَخْفَوْنَ عَلَيْنَا أَفَمَنْ يُلْقَى فِي النَّارِ خَيْرٌ أَمْ مَنْ يَأْتِي آمِنًا يَوْمَ الْقِيَامَةِ اعْمَلُوا مَا شِئْتُمْ إِنَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ"
 },
 "3:161": {
  "sn": "آل عمران",
  "sr": "Ali 'Imran",
  "t": "وَمَا كَانَ لِنَبِيٍّ أَنْ يَغُلَّ وَمَنْ يَغْلُلْ يَأْتِ بِمَا غَلَّ يَوْمَ الْقِيَامَةِ ثُمَّ تُوَفَّى كُلُّ نَفْسٍ مَا كَسَبَتْ وَهُمْ لَا يُظْلَمُونَ"
 },
 "5:38": {
  "sn": "المائدة",
  "sr": "Al-Ma'idah",
  "t": "وَالسَّارِقُ وَالسَّارِقَةُ فَاقْطَعُوا أَيْدِيَهُمَا جَزَاءً بِمَا كَسَبَا نَكَالًا مِنَ اللَّهِ وَاللَّهُ عَزِيزٌ حَكِيمٌ"
 },
 "17:32": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَلَا تَقْرَبُوا الزِّنَا إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا"
 },
 "34:48": {
  "sn": "سبأ",
  "sr": "Saba",
  "t": "قُلْ إِنَّ رَبِّي يَقْذِفُ بِالْحَقِّ عَلَّامُ الْغُيُوبِ"
 },
 "49:12": {
  "sn": "الحجرات",
  "sr": "Al-Hujurat",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ وَلَا تَجَسَّسُوا وَلَا يَغْتَبْ بَعْضُكُمْ بَعْضًا أَيُحِبُّ أَحَدُكُمْ أَنْ يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ وَاتَّقُوا اللَّهَ إِنَّ اللَّهَ تَوَّابٌ رَحِيمٌ"
 },
 "21:41": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "وَلَقَدِ اسْتُهْزِئَ بِرُسُلٍ مِنْ قَبْلِكَ فَحَاقَ بِالَّذِينَ سَخِرُوا مِنْهُمْ مَا كَانُوا بِهِ يَسْتَهْزِئُونَ"
 },
 "54:46": {
  "sn": "القمر",
  "sr": "Al-Qamar",
  "t": "بَلِ السَّاعَةُ مَوْعِدُهُمْ وَالسَّاعَةُ أَدْهَى وَأَمَرُّ"
 },
 "79:14": {
  "sn": "النازعات",
  "sr": "An-Nazi'at",
  "t": "فَإِذَا هُمْ بِالسَّاهِرَةِ"
 },
 "79:34": {
  "sn": "النازعات",
  "sr": "An-Nazi'at",
  "t": "فَإِذَا جَاءَتِ الطَّامَّةُ الْكُبْرَى"
 },
 "80:33": {
  "sn": "عبس",
  "sr": "Abasa",
  "t": "فَإِذَا جَاءَتِ الصَّاخَّةُ"
 },
 "101:1": {
  "sn": "القارعة",
  "sr": "Al-Qari'ah",
  "t": "الْقَارِعَةُ"
 },
 "69:1": {
  "sn": "الحاقة",
  "sr": "Al-Haqqah",
  "t": "الْحَاقَّةُ"
 },
 "88:1": {
  "sn": "الغاشية",
  "sr": "Al-Ghashiyah",
  "t": "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ"
 },
 "56:1": {
  "sn": "الواقعة",
  "sr": "Al-Waqi'ah",
  "t": "إِذَا وَقَعَتِ الْوَاقِعَةُ"
 },
 "22:1": {
  "sn": "الحج",
  "sr": "Al-Hajj",
  "t": "يَاأَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمْ إِنَّ زَلْزَلَةَ السَّاعَةِ شَيْءٌ عَظِيمٌ"
 },
 "48:17": {
  "sn": "الفتح",
  "sr": "Al-Fath",
  "t": "لَيْسَ عَلَى الْأَعْمَى حَرَجٌ وَلَا عَلَى الْأَعْرَجِ حَرَجٌ وَلَا عَلَى الْمَرِيضِ حَرَجٌ وَمَنْ يُطِعِ اللَّهَ وَرَسُولَهُ يُدْخِلْهُ جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ وَمَنْ يَتَوَلَّ يُعَذِّبْهُ عَذَابًا أَلِيمًا"
 },
 "47:23": {
  "sn": "محمد",
  "sr": "Muhammad",
  "t": "أُولَئِكَ الَّذِينَ لَعَنَهُمُ اللَّهُ فَأَصَمَّهُمْ وَأَعْمَى أَبْصَارَهُمْ"
 },
 "2:18": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "صُمٌّ بُكْمٌ عُمْيٌ فَهُمْ لَا يَرْجِعُونَ"
 },
 "23:14": {
  "sn": "المؤمنون",
  "sr": "Al-Mu'minun",
  "t": "ثُمَّ خَلَقْنَا النُّطْفَةَ عَلَقَةً فَخَلَقْنَا الْعَلَقَةَ مُضْغَةً فَخَلَقْنَا الْمُضْغَةَ عِظَامًا فَكَسَوْنَا الْعِظَامَ لَحْمًا ثُمَّ أَنْشَأْنَاهُ خَلْقًا آخَرَ فَتَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ"
 },
 "55:35": {
  "sn": "الرحمن",
  "sr": "Ar-Rahman",
  "t": "يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِنْ نَارٍ وَنُحَاسٌ فَلَا تَنْتَصِرَانِ"
 },
 "35:13": {
  "sn": "فاطر",
  "sr": "Fatir",
  "t": "يُولِجُ اللَّيْلَ فِي النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ كُلٌّ يَجْرِي لِأَجَلٍ مُسَمًّى ذَلِكُمُ اللَّهُ رَبُّكُمْ لَهُ الْمُلْكُ وَالَّذِينَ تَدْعُونَ مِنْ دُونِهِ مَا يَمْلِكُونَ مِنْ قِطْمِيرٍ"
 },
 "2:69": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَنَا مَا لَوْنُهَا قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَوْنُهَا تَسُرُّ النَّاظِرِينَ"
 },
 "15:26": {
  "sn": "الحجر",
  "sr": "Al-Hijr",
  "t": "وَلَقَدْ خَلَقْنَا الْإِنْسَانَ مِنْ صَلْصَالٍ مِنْ حَمَإٍ مَسْنُونٍ"
 },
 "63:4": {
  "sn": "المنافقون",
  "sr": "Al-Munafiqun",
  "t": "وَإِذَا رَأَيْتَهُمْ تُعْجِبُكَ أَجْسَامُهُمْ وَإِنْ يَقُولُوا تَسْمَعْ لِقَوْلِهِمْ كَأَنَّهُمْ خُشُبٌ مُسَنَّدَةٌ يَحْسَبُونَ كُلَّ صَيْحَةٍ عَلَيْهِمْ هُمُ الْعَدُوُّ فَاحْذَرْهُمْ قَاتَلَهُمُ اللَّهُ أَنَّى يُؤْفَكُونَ"
 },
 "111:4": {
  "sn": "المسد",
  "sr": "Al-Masad",
  "t": "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ"
 },
 "36:43": {
  "sn": "يس",
  "sr": "Ya-Sin",
  "t": "وَإِنْ نَشَأْ نُغْرِقْهُمْ فَلَا صَرِيخَ لَهُمْ وَلَا هُمْ يُنْقَذُونَ"
 },
 "11:32": {
  "sn": "هود",
  "sr": "Hud",
  "t": "قَالُوا يَانُوحُ قَدْ جَادَلْتَنَا فَأَكْثَرْتَ جِدَالَنَا فَأْتِنَا بِمَا تَعِدُنَا إِنْ كُنْتَ مِنَ الصَّادِقِينَ"
 },
 "3:66": {
  "sn": "آل عمران",
  "sr": "Ali 'Imran",
  "t": "هَاأَنْتُمْ هَؤُلَاءِ حَاجَجْتُمْ فِيمَا لَكُمْ بِهِ عِلْمٌ فَلِمَ تُحَاجُّونَ فِيمَا لَيْسَ لَكُمْ بِهِ عِلْمٌ وَاللَّهُ يَعْلَمُ وَأَنْتُمْ لَا تَعْلَمُونَ"
 },
 "6:108": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "وَلَا تَسُبُّوا الَّذِينَ يَدْعُونَ مِنْ دُونِ اللَّهِ فَيَسُبُّوا اللَّهَ عَدْوًا بِغَيْرِ عِلْمٍ كَذَلِكَ زَيَّنَّا لِكُلِّ أُمَّةٍ عَمَلَهُمْ ثُمَّ إِلَى رَبِّهِمْ مَرْجِعُهُمْ فَيُنَبِّئُهُمْ بِمَا كَانُوا يَعْمَلُونَ"
 },
 "4:52": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "أُولَئِكَ الَّذِينَ لَعَنَهُمُ اللَّهُ وَمَنْ يَلْعَنِ اللَّهُ فَلَنْ تَجِدَ لَهُ نَصِيرًا"
 },
 "9:56": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "وَيَحْلِفُونَ بِاللَّهِ إِنَّهُمْ لَمِنْكُمْ وَمَا هُمْ مِنْكُمْ وَلَكِنَّهُمْ قَوْمٌ يَفْرَقُونَ"
 },
 "28:18": {
  "sn": "القصص",
  "sr": "Al-Qasas",
  "t": "فَأَصْبَحَ فِي الْمَدِينَةِ خَائِفًا يَتَرَقَّبُ فَإِذَا الَّذِي اسْتَنْصَرَهُ بِالْأَمْسِ يَسْتَصْرِخُهُ قَالَ لَهُ مُوسَى إِنَّكَ لَغَوِيٌّ مُبِينٌ"
 },
 "58:12": {
  "sn": "المجادلة",
  "sr": "Al-Mujadila",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا إِذَا نَاجَيْتُمُ الرَّسُولَ فَقَدِّمُوا بَيْنَ يَدَيْ نَجْوَاكُمْ صَدَقَةً ذَلِكَ خَيْرٌ لَكُمْ وَأَطْهَرُ فَإِنْ لَمْ تَجِدُوا فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ"
 },
 "6:79": {
  "sn": "الأنعام",
  "sr": "Al-An'am",
  "t": "إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ"
 },
 "29:19": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "أَوَلَمْ يَرَوْا كَيْفَ يُبْدِئُ اللَّهُ الْخَلْقَ ثُمَّ يُعِيدُهُ إِنَّ ذَلِكَ عَلَى اللَّهِ يَسِيرٌ"
 },
 "23:79": {
  "sn": "المؤمنون",
  "sr": "Al-Mu'minun",
  "t": "وَهُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ"
 },
 "42:29": {
  "sn": "الشورى",
  "sr": "Ash-Shura",
  "t": "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَثَّ فِيهِمَا مِنْ دَابَّةٍ وَهُوَ عَلَى جَمْعِهِمْ إِذَا يَشَاءُ قَدِيرٌ"
 },
 "80:27": {
  "sn": "عبس",
  "sr": "Abasa",
  "t": "فَأَنْبَتْنَا فِيهَا حَبًّا"
 },
 "12:58": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "وَجَاءَ إِخْوَةُ يُوسُفَ فَدَخَلُوا عَلَيْهِ فَعَرَفَهُمْ وَهُمْ لَهُ مُنْكِرُونَ"
 },
 "47:24": {
  "sn": "محمد",
  "sr": "Muhammad",
  "t": "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَى قُلُوبٍ أَقْفَالُهَا"
 },
 "69:3": {
  "sn": "الحاقة",
  "sr": "Al-Haqqah",
  "t": "وَمَا أَدْرَاكَ مَا الْحَاقَّةُ"
 },
 "64:7": {
  "sn": "التغابن",
  "sr": "At-Taghabun",
  "t": "زَعَمَ الَّذِينَ كَفَرُوا أَنْ لَنْ يُبْعَثُوا قُلْ بَلَى وَرَبِّي لَتُبْعَثُنَّ ثُمَّ لَتُنَبَّؤُنَّ بِمَا عَمِلْتُمْ وَذَلِكَ عَلَى اللَّهِ يَسِيرٌ"
 },
 "12:2": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "إِنَّا أَنْزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ"
 },
 "2:9": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "يُخَادِعُونَ اللَّهَ وَالَّذِينَ آمَنُوا وَمَا يَخْدَعُونَ إِلَّا أَنْفُسَهُمْ وَمَا يَشْعُرُونَ"
 },
 "3:52": {
  "sn": "آل عمران",
  "sr": "Ali 'Imran",
  "t": "فَلَمَّا أَحَسَّ عِيسَى مِنْهُمُ الْكُفْرَ قَالَ مَنْ أَنْصَارِي إِلَى اللَّهِ قَالَ الْحَوَارِيُّونَ نَحْنُ أَنْصَارُ اللَّهِ آمَنَّا بِاللَّهِ وَاشْهَدْ بِأَنَّا مُسْلِمُونَ"
 },
 "107:7": {
  "sn": "الماعون",
  "sr": "Al-Ma'un",
  "t": "وَيَمْنَعُونَ الْمَاعُونَ"
 },
 "92:8": {
  "sn": "الليل",
  "sr": "Al-Layl",
  "t": "وَأَمَّا مَنْ بَخِلَ وَاسْتَغْنَى"
 },
 "2:245": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً وَاللَّهُ يَقْبِضُ وَيَبْسُطُ وَإِلَيْهِ تُرْجَعُونَ"
 },
 "14:39": {
  "sn": "إبراهيم",
  "sr": "Ibrahim",
  "t": "الْحَمْدُ لِلَّهِ الَّذِي وَهَبَ لِي عَلَى الْكِبَرِ إِسْمَاعِيلَ وَإِسْحَاقَ إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ"
 },
 "8:69": {
  "sn": "الأنفال",
  "sr": "Al-Anfal",
  "t": "فَكُلُوا مِمَّا غَنِمْتُمْ حَلَالًا طَيِّبًا وَاتَّقُوا اللَّهَ إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ"
 },
 "2:16": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "أُولَئِكَ الَّذِينَ اشْتَرَوُا الضَّلَالَةَ بِالْهُدَى فَمَا رَبِحَتْ تِجَارَتُهُمْ وَمَا كَانُوا مُهْتَدِينَ"
 },
 "2:116": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَقَالُوا اتَّخَذَ اللَّهُ وَلَدًا سُبْحَانَهُ بَلْ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ كُلٌّ لَهُ قَانِتُونَ"
 },
 "18:82": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "وَأَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ يَتِيمَيْنِ فِي الْمَدِينَةِ وَكَانَ تَحْتَهُ كَنْزٌ لَهُمَا وَكَانَ أَبُوهُمَا صَالِحًا فَأَرَادَ رَبُّكَ أَنْ يَبْلُغَا أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنْزَهُمَا رَحْمَةً مِنْ رَبِّكَ وَمَا فَعَلْتُهُ عَنْ أَمْرِي ذَلِكَ تَأْوِيلُ مَا لَمْ تَسْطِعْ عَلَيْهِ صَبْرًا"
 },
 "28:79": {
  "sn": "القصص",
  "sr": "Al-Qasas",
  "t": "فَخَرَجَ عَلَى قَوْمِهِ فِي زِينَتِهِ قَالَ الَّذِينَ يُرِيدُونَ الْحَيَاةَ الدُّنْيَا يَالَيْتَ لَنَا مِثْلَ مَا أُوتِيَ قَارُونُ إِنَّهُ لَذُو حَظٍّ عَظِيمٍ"
 },
 "18:46": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِنْدَ رَبِّكَ ثَوَابًا وَخَيْرٌ أَمَلًا"
 },
 "11:73": {
  "sn": "هود",
  "sr": "Hud",
  "t": "قَالُوا أَتَعْجَبِينَ مِنْ أَمْرِ اللَّهِ رَحْمَتُ اللَّهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ إِنَّهُ حَمِيدٌ مَجِيدٌ"
 },
 "65:7": {
  "sn": "الطلاق",
  "sr": "At-Talaq",
  "t": "لِيُنْفِقْ ذُو سَعَةٍ مِنْ سَعَتِهِ وَمَنْ قُدِرَ عَلَيْهِ رِزْقُهُ فَلْيُنْفِقْ مِمَّا آتَاهُ اللَّهُ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا مَا آتَاهَا سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا"
 },
 "24:37": {
  "sn": "النور",
  "sr": "An-Nur",
  "t": "رِجَالٌ لَا تُلْهِيهِمْ تِجَارَةٌ وَلَا بَيْعٌ عَنْ ذِكْرِ اللَّهِ وَإِقَامِ الصَّلَاةِ وَإِيتَاءِ الزَّكَاةِ يَخَافُونَ يَوْمًا تَتَقَلَّبُ فِيهِ الْقُلُوبُ وَالْأَبْصَارُ"
 },
 "5:90": {
  "sn": "المائدة",
  "sr": "Al-Maidah",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ"
 },
 "3:75": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "وَمِنْ أَهْلِ الْكِتَابِ مَنْ إِنْ تَأْمَنْهُ بِقِنْطَارٍ يُؤَدِّهِ إِلَيْكَ وَمِنْهُمْ مَنْ إِنْ تَأْمَنْهُ بِدِينَارٍ لَا يُؤَدِّهِ إِلَيْكَ إِلَّا مَا دُمْتَ عَلَيْهِ قَائِمًا ذَلِكَ بِأَنَّهُمْ قَالُوا لَيْسَ عَلَيْنَا فِي الْأُمِّيِّينَ سَبِيلٌ وَيَقُولُونَ عَلَى اللَّهِ الْكَذِبَ وَهُمْ يَعْلَمُونَ"
 },
 "12:20": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "وَشَرَوْهُ بِثَمَنٍ بَخْسٍ دَرَاهِمَ مَعْدُودَةٍ وَكَانُوا فِيهِ مِنَ الزَّاهِدِينَ"
 },
 "55:9": {
  "sn": "الرحمن",
  "sr": "Ar-Rahman",
  "t": "وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ"
 },
 "6:152": {
  "sn": "الأنعام",
  "sr": "Al-Anam",
  "t": "وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ حَتَّى يَبْلُغَ أَشُدَّهُ وَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ بِالْقِسْطِ لَا نُكَلِّفُ نَفْسًا إِلَّا وُسْعَهَا وَإِذَا قُلْتُمْ فَاعْدِلُوا وَلَوْ كَانَ ذَا قُرْبَى وَبِعَهْدِ اللَّهِ أَوْفُوا ذَلِكُمْ وَصَّاكُمْ بِهِ لَعَلَّكُمْ تَذَكَّرُونَ"
 },
 "11:84": {
  "sn": "هود",
  "sr": "Hud",
  "t": "وَإِلَى مَدْيَنَ أَخَاهُمْ شُعَيْبًا قَالَ يَاقَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ وَلَا تَنْقُصُوا الْمِكْيَالَ وَالْمِيزَانَ إِنِّي أَرَاكُمْ بِخَيْرٍ وَإِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ مُحِيطٍ"
 },
 "5:42": {
  "sn": "المائدة",
  "sr": "Al-Maidah",
  "t": "سَمَّاعُونَ لِلْكَذِبِ أَكَّالُونَ لِلسُّحْتِ فَإِنْ جَاءُوكَ فَاحْكُمْ بَيْنَهُمْ أَوْ أَعْرِضْ عَنْهُمْ وَإِنْ تُعْرِضْ عَنْهُمْ فَلَنْ يَضُرُّوكَ شَيْئًا وَإِنْ حَكَمْتَ فَاحْكُمْ بَيْنَهُمْ بِالْقِسْطِ إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ"
 },
 "29:14": {
  "sn": "العنكبوت",
  "sr": "Al-Ankabut",
  "t": "وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ"
 },
 "106:2": {
  "sn": "قريش",
  "sr": "Quraysh",
  "t": "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ"
 },
 "54:34": {
  "sn": "القمر",
  "sr": "Al-Qamar",
  "t": "إِنَّا أَرْسَلْنَا عَلَيْهِمْ حَاصِبًا إِلَّا آلَ لُوطٍ نَجَّيْنَاهُمْ بِسَحَرٍ"
 },
 "81:23": {
  "sn": "التكوير",
  "sr": "At-Takwir",
  "t": "وَلَقَدْ رَآهُ بِالْأُفُقِ الْمُبِينِ"
 },
 "11:81": {
  "sn": "هود",
  "sr": "Hud",
  "t": "قَالُوا يَالُوطُ إِنَّا رُسُلُ رَبِّكَ لَنْ يَصِلُوا إِلَيْكَ فَأَسْرِ بِأَهْلِكَ بِقِطْعٍ مِنَ اللَّيْلِ وَلَا يَلْتَفِتْ مِنْكُمْ أَحَدٌ إِلَّا امْرَأَتَكَ إِنَّهُ مُصِيبُهَا مَا أَصَابَهُمْ إِنَّ مَوْعِدَهُمُ الصُّبْحُ أَلَيْسَ الصُّبْحُ بِقَرِيبٍ"
 },
 "93:1": {
  "sn": "الضحى",
  "sr": "Ad-Duha",
  "t": "وَالضُّحَى"
 },
 "33:42": {
  "sn": "الأحزاب",
  "sr": "Al-Ahzab",
  "t": "وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا"
 },
 "12:42": {
  "sn": "يوسف",
  "sr": "Yusuf",
  "t": "وَقَالَ لِلَّذِي ظَنَّ أَنَّهُ نَاجٍ مِنْهُمَا اذْكُرْنِي عِنْدَ رَبِّكَ فَأَنْسَاهُ الشَّيْطَانُ ذِكْرَ رَبِّهِ فَلَبِثَ فِي السِّجْنِ بِضْعَ سِنِينَ"
 },
 "4:12": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ إِنْ لَمْ يَكُنْ لَهُنَّ وَلَدٌ فَإِنْ كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ مِمَّا تَرَكْنَ مِنْ بَعْدِ وَصِيَّةٍ يُوصِينَ بِهَا أَوْ دَيْنٍ وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ إِنْ لَمْ يَكُنْ لَكُمْ وَلَدٌ فَإِنْ كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُمْ مِنْ بَعْدِ وَصِيَّةٍ تُوصُونَ بِهَا أَوْ دَيْنٍ وَإِنْ كَانَ رَجُلٌ يُورَثُ كَلَالَةً أَوِ امْرَأَةٌ وَلَهُ أَخٌ أَوْ أُخْتٌ فَلِكُلِّ وَاحِدٍ مِنْهُمَا السُّدُسُ فَإِنْ كَانُوا أَكْثَرَ مِنْ ذَلِكَ فَهُمْ شُرَكَاءُ فِي الثُّلُثِ مِنْ بَعْدِ وَصِيَّةٍ يُوصَى بِهَا أَوْ دَيْنٍ غَيْرَ مُضَارٍّ وَصِيَّةً مِنَ اللَّهِ وَاللَّهُ عَلِيمٌ حَلِيمٌ"
 },
 "8:65": {
  "sn": "الأنفال",
  "sr": "Al-Anfal",
  "t": "يَاأَيُّهَا النَّبِيُّ حَرِّضِ الْمُؤْمِنِينَ عَلَى الْقِتَالِ إِنْ يَكُنْ مِنْكُمْ عِشْرُونَ صَابِرُونَ يَغْلِبُوا مِائَتَيْنِ وَإِنْ يَكُنْ مِنْكُمْ مِائَةٌ يَغْلِبُوا أَلْفًا مِنَ الَّذِينَ كَفَرُوا بِأَنَّهُمْ قَوْمٌ لَا يَفْقَهُونَ"
 },
 "46:15": {
  "sn": "الأحقاف",
  "sr": "Al-Ahqaf",
  "t": "وَوَصَّيْنَا الْإِنْسَانَ بِوَالِدَيْهِ إِحْسَانًا حَمَلَتْهُ أُمُّهُ كُرْهًا وَوَضَعَتْهُ كُرْهًا وَحَمْلُهُ وَفِصَالُهُ ثَلَاثُونَ شَهْرًا حَتَّى إِذَا بَلَغَ أَشُدَّهُ وَبَلَغَ أَرْبَعِينَ سَنَةً قَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَصْلِحْ لِي فِي ذُرِّيَّتِي إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ"
 },
 "18:17": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "وَتَرَى الشَّمْسَ إِذَا طَلَعَتْ تَزَاوَرُ عَنْ كَهْفِهِمْ ذَاتَ الْيَمِينِ وَإِذَا غَرَبَتْ تَقْرِضُهُمْ ذَاتَ الشِّمَالِ وَهُمْ فِي فَجْوَةٍ مِنْهُ ذَلِكَ مِنْ آيَاتِ اللَّهِ مَنْ يَهْدِ اللَّهُ فَهُوَ الْمُهْتَدِ وَمَنْ يُضْلِلْ فَلَنْ تَجِدَ لَهُ وَلِيًّا مُرْشِدًا"
 },
 "2:115": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ إِنَّ اللَّهَ وَاسِعٌ عَلِيمٌ"
 },
 "75:5": {
  "sn": "القيامة",
  "sr": "Al-Qiyamah",
  "t": "بَلْ يُرِيدُ الْإِنْسَانُ لِيَفْجُرَ أَمَامَهُ"
 },
 "18:79": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ يَعْمَلُونَ فِي الْبَحْرِ فَأَرَدْتُ أَنْ أَعِيبَهَا وَكَانَ وَرَاءَهُمْ مَلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ غَصْبًا"
 },
 "2:143": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا وَمَا جَعَلْنَا الْقِبْلَةَ الَّتِي كُنْتَ عَلَيْهَا إِلَّا لِنَعْلَمَ مَنْ يَتَّبِعُ الرَّسُولَ مِمَّنْ يَنْقَلِبُ عَلَى عَقِبَيْهِ وَإِنْ كَانَتْ لَكَبِيرَةً إِلَّا عَلَى الَّذِينَ هَدَى اللَّهُ وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ إِنَّ اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَحِيمٌ"
 },
 "69:17": {
  "sn": "الحاقة",
  "sr": "Al-Haqqah",
  "t": "وَالْمَلَكُ عَلَى أَرْجَائِهَا وَيَحْمِلُ عَرْشَ رَبِّكَ فَوْقَهُمْ يَوْمَئِذٍ ثَمَانِيَةٌ"
 },
 "21:47": {
  "sn": "الأنبياء",
  "sr": "Al-Anbiya",
  "t": "وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ فَلَا تُظْلَمُ نَفْسٌ شَيْئًا وَإِنْ كَانَ مِثْقَالَ حَبَّةٍ مِنْ خَرْدَلٍ أَتَيْنَا بِهَا وَكَفَى بِنَا حَاسِبِينَ"
 },
 "2:261": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ وَاللَّهُ وَاسِعٌ عَلِيمٌ"
 },
 "20:131": {
  "sn": "طه",
  "sr": "Taha",
  "t": "وَلَا تَمُدَّنَّ عَيْنَيْكَ إِلَى مَا مَتَّعْنَا بِهِ أَزْوَاجًا مِنْهُمْ زَهْرَةَ الْحَيَاةِ الدُّنْيَا لِنَفْتِنَهُمْ فِيهِ وَرِزْقُ رَبِّكَ خَيْرٌ وَأَبْقَى"
 },
 "6:95": {
  "sn": "الأنعام",
  "sr": "Al-Anam",
  "t": "إِنَّ اللَّهَ فَالِقُ الْحَبِّ وَالنَّوَى يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَمُخْرِجُ الْمَيِّتِ مِنَ الْحَيِّ ذَلِكُمُ اللَّهُ فَأَنَّى تُؤْفَكُونَ"
 },
 "3:190": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ"
 },
 "17:24": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُلْ رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا"
 },
 "39:3": {
  "sn": "الزمر",
  "sr": "Az-Zumar",
  "t": "أَلَا لِلَّهِ الدِّينُ الْخَالِصُ وَالَّذِينَ اتَّخَذُوا مِنْ دُونِهِ أَوْلِيَاءَ مَا نَعْبُدُهُمْ إِلَّا لِيُقَرِّبُونَا إِلَى اللَّهِ زُلْفَى إِنَّ اللَّهَ يَحْكُمُ بَيْنَهُمْ فِي مَا هُمْ فِيهِ يَخْتَلِفُونَ إِنَّ اللَّهَ لَا يَهْدِي مَنْ هُوَ كَاذِبٌ كَفَّارٌ"
 },
 "17:90": {
  "sn": "الإسراء",
  "sr": "Al-Isra",
  "t": "وَقَالُوا لَنْ نُؤْمِنَ لَكَ حَتَّى تَفْجُرَ لَنَا مِنَ الْأَرْضِ يَنْبُوعًا"
 },
 "2:30": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً قَالُوا أَتَجْعَلُ فِيهَا مَنْ يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ"
 },
 "18:10": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا"
 },
 "76:12": {
  "sn": "الإنسان",
  "sr": "Al-Insan",
  "t": "وَجَزَاهُمْ بِمَا صَبَرُوا جَنَّةً وَحَرِيرًا"
 },
 "65:9": {
  "sn": "الطلاق",
  "sr": "At-Talaq",
  "t": "فَذَاقَتْ وَبَالَ أَمْرِهَا وَكَانَ عَاقِبَةُ أَمْرِهَا خُسْرًا"
 },
 "80:34": {
  "sn": "عبس",
  "sr": "Abasa",
  "t": "يَوْمَ يَفِرُّ الْمَرْءُ مِنْ أَخِيهِ"
 },
 "47:19": {
  "sn": "محمد",
  "sr": "Muhammad",
  "t": "فَاعْلَمْ أَنَّهُ لَا إِلَهَ إِلَّا اللَّهُ وَاسْتَغْفِرْ لِذَنْبِكَ وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَاللَّهُ يَعْلَمُ مُتَقَلَّبَكُمْ وَمَثْوَاكُمْ"
 },
 "33:56": {
  "sn": "الأحزاب",
  "sr": "Al-Ahzab",
  "t": "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَاأَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا"
 },
 "41:10": {
  "sn": "فصلت",
  "sr": "Fussilat",
  "t": "وَجَعَلَ فِيهَا رَوَاسِيَ مِنْ فَوْقِهَا وَبَارَكَ فِيهَا وَقَدَّرَ فِيهَا أَقْوَاتَهَا فِي أَرْبَعَةِ أَيَّامٍ سَوَاءً لِلسَّائِلِينَ"
 },
 "87:1": {
  "sn": "الأعلى",
  "sr": "Al-Ala",
  "t": "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى"
 },
 "7:151": {
  "sn": "الأعراف",
  "sr": "Al-Araf",
  "t": "قَالَ رَبِّ اغْفِرْ لِي وَلِأَخِي وَأَدْخِلْنَا فِي رَحْمَتِكَ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ"
 },
 "71:28": {
  "sn": "نوح",
  "sr": "Nuh",
  "t": "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَلَا تَزِدِ الظَّالِمِينَ إِلَّا تَبَارًا"
 },
 "20:114": {
  "sn": "طه",
  "sr": "Taha",
  "t": "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ وَلَا تَعْجَلْ بِالْقُرْآنِ مِنْ قَبْلِ أَنْ يُقْضَى إِلَيْكَ وَحْيُهُ وَقُلْ رَبِّ زِدْنِي عِلْمًا"
 },
 "59:23": {
  "sn": "الحشر",
  "sr": "Al-Hashr",
  "t": "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ"
 },
 "18:39": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "وَلَوْلَا إِذْ دَخَلْتَ جَنَّتَكَ قُلْتَ مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ إِنْ تَرَنِ أَنَا أَقَلَّ مِنْكَ مَالًا وَوَلَدًا"
 },
 "3:18": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "شَهِدَ اللَّهُ أَنَّهُ لَا إِلَهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ لَا إِلَهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ"
 },
 "4:106": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "وَاسْتَغْفِرِ اللَّهَ إِنَّ اللَّهَ كَانَ غَفُورًا رَحِيمًا"
 },
 "2:286": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ"
 },
 "3:102": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُونَ"
 },
 "4:59": {
  "sn": "النساء",
  "sr": "An-Nisa",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنْكُمْ فَإِنْ تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ إِنْ كُنْتُمْ تُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ذَلِكَ خَيْرٌ وَأَحْسَنُ تَأْوِيلًا"
 },
 "5:7": {
  "sn": "المائدة",
  "sr": "Al-Maidah",
  "t": "وَاذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ وَمِيثَاقَهُ الَّذِي وَاثَقَكُمْ بِهِ إِذْ قُلْتُمْ سَمِعْنَا وَأَطَعْنَا وَاتَّقُوا اللَّهَ إِنَّ اللَّهَ عَلِيمٌ بِذَاتِ الصُّدُورِ"
 },
 "2:152": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ"
 },
 "2:153": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "يَاأَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ"
 },
 "2:20": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "يَكَادُ الْبَرْقُ يَخْطَفُ أَبْصَارَهُمْ كُلَّمَا أَضَاءَ لَهُمْ مَشَوْا فِيهِ وَإِذَا أَظْلَمَ عَلَيْهِمْ قَامُوا وَلَوْ شَاءَ اللَّهُ لَذَهَبَ بِسَمْعِهِمْ وَأَبْصَارِهِمْ إِنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ"
 },
 "31:28": {
  "sn": "لقمان",
  "sr": "Luqman",
  "t": "مَا خَلْقُكُمْ وَلَا بَعْثُكُمْ إِلَّا كَنَفْسٍ وَاحِدَةٍ إِنَّ اللَّهَ سَمِيعٌ بَصِيرٌ"
 },
 "3:57": {
  "sn": "آل عمران",
  "sr": "Aal-e-Imran",
  "t": "وَأَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَيُوَفِّيهِمْ أُجُورَهُمْ وَاللَّهُ لَا يُحِبُّ الظَّالِمِينَ"
 },
 "25:48": {
  "sn": "الفرقان",
  "sr": "Al-Furqan",
  "t": "وَهُوَ الَّذِي أَرْسَلَ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ وَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا"
 },
 "2:195": {
  "sn": "البقرة",
  "sr": "Al-Baqarah",
  "t": "وَأَنْفِقُوا فِي سَبِيلِ اللَّهِ وَلَا تُلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ وَأَحْسِنُوا إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ"
 },
 "22:62": {
  "sn": "الحج",
  "sr": "Al-Hajj",
  "t": "ذَلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ وَأَنَّ مَا يَدْعُونَ مِنْ دُونِهِ هُوَ الْبَاطِلُ وَأَنَّ اللَّهَ هُوَ الْعَلِيُّ الْكَبِيرُ"
 },
 "23:29": {
  "sn": "المؤمنون",
  "sr": "Al-Muminun",
  "t": "وَقُلْ رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا وَأَنْتَ خَيْرُ الْمُنْزِلِينَ"
 },
 "18:18": {
  "sn": "الكهف",
  "sr": "Al-Kahf",
  "t": "وَتَحْسَبُهُمْ أَيْقَاظًا وَهُمْ رُقُودٌ وَنُقَلِّبُهُمْ ذَاتَ الْيَمِينِ وَذَاتَ الشِّمَالِ وَكَلْبُهُمْ بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ لَوِ اطَّلَعْتَ عَلَيْهِمْ لَوَلَّيْتَ مِنْهُمْ فِرَارًا وَلَمُلِئْتَ مِنْهُمْ رُعْبًا"
 },
 "9:114": {
  "sn": "التوبة",
  "sr": "At-Tawbah",
  "t": "وَمَا كَانَ اسْتِغْفَارُ إِبْرَاهِيمَ لِأَبِيهِ إِلَّا عَنْ مَوْعِدَةٍ وَعَدَهَا إِيَّاهُ فَلَمَّا تَبَيَّنَ لَهُ أَنَّهُ عَدُوٌّ لِلَّهِ تَبَرَّأَ مِنْهُ إِنَّ إِبْرَاهِيمَ لَأَوَّاهٌ حَلِيمٌ"
 },
 "25:64": {
  "sn": "الفرقان",
  "sr": "Al-Furqan",
  "t": "وَالَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا"
 }
};
;
