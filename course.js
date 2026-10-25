/* ==========================================================
   course.js — 90 din ka course (900 alfaz) + har lafz ki ayat
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
        { a: "اللَّهُ", r: "Allah", u: "اللہ", u_ro: "Allah", u_hi: "अल्लाह", u_en: "Allah", m: "اللَّهُ أَحَدٌ", t: "سب کا رب", t_ro: "Sab ka Rabb", t_hi: "सब का रब", t_en: "Lord of all" },
        { a: "رَبِّ", r: "Rabb", u: "پالنے والا", u_ro: "Paalne wala", u_hi: "पालने वाला", u_en: "Lord, Sustainer", m: "رَبِّ الْعَالَمِينَ", t: "مالک", t_ro: "Malik", t_hi: "मालिक", t_en: "Master, Owner" },
        { a: "إِلَه", r: "Ilaah", u: "معبود", u_ro: "Maabood", u_hi: "माबूद", u_en: "God, deity", m: "لَا إِلَهَ إِلَّا اللَّهُ", t: "عبادت کے لائق", t_ro: "Ibaadat ke laayaq", t_hi: "इबादत के लायक़", t_en: "Worthy of worship" },
        { a: "رَحْمَٰن", r: "Rahmaan", u: "بہت مہربان", u_ro: "Bahut meharbaan", u_hi: "बहुत मेहरबान", u_en: "Most Gracious", m: "الرَّحْمَٰنُ", t: "رحم کرنے والا", t_ro: "Rahm karne wala", t_hi: "रहम करने वाला", t_en: "Full of mercy" },
        { a: "رَحِيم", r: "Raheem", u: "نہایت رحم والا", u_ro: "Nihayat rahm wala", u_hi: "निहायत रहम वाला", u_en: "Most Merciful", m: "غَفُورٌ رَّحِيمٌ", t: "خاص رحم والا", t_ro: "Khaas rahm wala", t_hi: "ख़ास रहम वाला", t_en: "Specially merciful" },
        { a: "غَفُور", r: "Ghafoor", u: "بخشنے والا", u_ro: "Bakhshne wala", u_hi: "बख़्शने वाला", u_en: "Oft-Forgiving", m: "هُوَ الْغَفُورُ", t: "معاف کرنے والا", t_ro: "Maaf karne wala", t_hi: "माफ़ करने वाला", t_en: "Forgives" },
        { a: "عَزِيز", r: "Azeez", u: "زبردست", u_ro: "Zabardast", u_hi: "ज़बरदस्त", u_en: "All-Mighty", m: "عَزِيزٌ حَكِيمٌ", t: "غالب", t_ro: "Ghaalib", t_hi: "ग़ालिब", t_en: "Dominant" },
        { a: "حَكِيم", r: "Hakeem", u: "حکمت والا", u_ro: "Hikmat wala", u_hi: "हिकमत वाला", u_en: "All-Wise", m: "عَلِيمٌ حَكِيمٌ", t: "دانا", t_ro: "Daana", t_hi: "दाना", t_en: "Wise" },
        { a: "عَلِيم", r: "Aleem", u: "سب جاننے والا", u_ro: "Sab jaanne wala", u_hi: "सब जानने वाला", u_en: "All-Knowing", m: "هُوَ عَلِيمٌ", t: "جاننے والا", t_ro: "Jaanne wala", t_hi: "जानने वाला", t_en: "Knower" },
        { a: "خَبِير", r: "Khabeer", u: "باخبر", u_ro: "Baakhabar", u_hi: "बाख़बर", u_en: "All-Aware", m: "الْخَبِيرُ", t: "خبر رکھنے والا", t_ro: "Khabar rakhne wala", t_hi: "ख़बर रखने वाला", t_en: "Fully informed" }
    ] },
    { day: 2, words: [
        { a: "بَصِير", r: "Baseer", u: "سب دیکھنے والا", u_ro: "Sab dekhne wala", u_hi: "सब देखने वाला", u_en: "All-Seeing", m: "هُوَ الْبَصِيرُ", t: "دیکھنے والا", t_ro: "Dekhne wala", t_hi: "देखने वाला", t_en: "Seer" },
        { a: "سَمِيع", r: "Samee'", u: "سب سننے والا", u_ro: "Sab sunne wala", u_hi: "सब सुनने वाला", u_en: "All-Hearing", m: "سَمِيعٌ بَصِيرٌ", t: "سننے والا", t_ro: "Sunne wala", t_hi: "सुनने वाला", t_en: "Hearer" },
        { a: "قَدِير", r: "Qadeer", u: "قدرت والا", u_ro: "Qudrat wala", u_hi: "क़ुदरत वाला", u_en: "All-Powerful", m: "قَدِيرٌ", t: "طاقت والا", t_ro: "Taaqat wala", t_hi: "ताक़त वाला", t_en: "Possessing strength" },
        { a: "لَطِيف", r: "Lateef", u: "باریک بین", u_ro: "Baareek been", u_hi: "बारीक बीन", u_en: "Subtle, Gentle", m: "لَطِيفٌ", t: "مہربان", t_ro: "Meharbaan", t_hi: "मेहरबान", t_en: "Kind" },
        { a: "كَرِيم", r: "Kareem", u: "کرم والا", u_ro: "Karam wala", u_hi: "करम वाला", u_en: "Generous, Noble", m: "كَرِيمٌ", t: "سخی", t_ro: "Sakhi", t_hi: "सख़ी", t_en: "Bountiful" },
        { a: "عَظِيم", r: "Azeem", u: "عظمت والا", u_ro: "Azmat wala", u_hi: "अज़मत वाला", u_en: "Magnificent, Mighty", m: "عَظِيمٌ", t: "بڑا", t_ro: "Bada", t_hi: "बड़ा", t_en: "Great" },
        { a: "كَبِير", r: "Kabeer", u: "بڑا", u_ro: "Bada", u_hi: "बड़ा", u_en: "Great", m: "الْكَبِيرُ الْمُتَعَالِ", t: "بزرگ", t_ro: "Buzurg", t_hi: "बुज़ुर्ग", t_en: "Elder, mighty" },
        { a: "حَمِيد", r: "Hameed", u: "تعریف کے لائق", u_ro: "Taareef ke laayaq", u_hi: "तारीफ़ के लायक़", u_en: "Praiseworthy", m: "حَمِيدٌ", t: "تعریف والا", t_ro: "Taareef wala", t_hi: "तारीफ़ वाला", t_en: "Full of praise" },
        { a: "غَنِيّ", r: "Ghaniyy", u: "بے نیاز", u_ro: "Be-niyaaz", u_hi: "बे-नियाज़", u_en: "Self-Sufficient", m: "غَنِيٌّ", t: "دولت والا", t_ro: "Daulat wala", t_hi: "दौलत वाला", t_en: "Wealthy" },
        { a: "حَيّ", r: "Hayy", u: "ہمیشہ زندہ", u_ro: "Hamesha zinda", u_hi: "हमेशा ज़िंदा", u_en: "Ever-Living", m: "الْحَيُّ", t: "زندہ", t_ro: "Zinda", t_hi: "ज़िंदा", t_en: "Alive" }
    ] },
    { day: 3, words: [
        { a: "قَيُّوم", r: "Qayyoom", u: "قائم رکھنے والا", u_ro: "Qaaim rakhne wala", u_hi: "क़ायम रखने वाला", u_en: "Self-Subsisting", m: "الْقَيُّومُ", t: "سنبھالنے والا", t_ro: "Sambhaalne wala", t_hi: "संभालने वाला", t_en: "Sustains all" },
        { a: "مَلِك", r: "Malik", u: "بادشاہ", u_ro: "Baadshaah", u_hi: "बादशाह", u_en: "King", m: "مَلِكِ النَّاسِ", t: "حکمران", t_ro: "Hukmraan", t_hi: "हुक्मरान", t_en: "Ruler" },
        { a: "وَلِيّ", r: "Waliyy", u: "مددگار", u_ro: "Madadgaar", u_hi: "मददगार", u_en: "Protector, Ally", m: "الْوَلِيُّ", t: "دوست", t_ro: "Dost", t_hi: "दोस्त", t_en: "Friend" },
        { a: "نَصِير", r: "Naseer", u: "مدد کرنے والا", u_ro: "Madad karne wala", u_hi: "मदद करने वाला", u_en: "Helper", m: "نَصِيرًا", t: "مددگار", t_ro: "Madadgaar", t_hi: "मददगार", t_en: "Supporter" },
        { a: "تَوَّاب", r: "Tawwaab", u: "توبہ قبول کرنے والا", u_ro: "Tauba qubool karne wala", u_hi: "तौबा क़बूल करने वाला", u_en: "Accepter of repentance", m: "التَّوَّابُ", t: "معاف کرنے والا", t_ro: "Maaf karne wala", t_hi: "माफ़ करने वाला", t_en: "Forgiver" },
        { a: "رَزَّاق", r: "Razzaaq", u: "رزق دینے والا", u_ro: "Rizq dene wala", u_hi: "रिज़्क़ देने वाला", u_en: "Provider", m: "الرَّزَّاقُ", t: "روزی دینے والا", t_ro: "Rozi dene wala", t_hi: "रोज़ी देने वाला", t_en: "Giver of sustenance" },
        { a: "خَالِق", r: "Khaaliq", u: "پیدا کرنے والا", u_ro: "Paida karne wala", u_hi: "पैदा करने वाला", u_en: "Creator", m: "الْخَالِقُ", t: "بنانے والا", t_ro: "Banaane wala", t_hi: "बनाने वाला", t_en: "Maker" },
        { a: "شَهِيد", r: "Shaheed", u: "گواہ", u_ro: "Gawaah", u_hi: "गवाह", u_en: "Witness", m: "شَهِيدًا", t: "گواہ", t_ro: "Gawaah", t_hi: "गवाह", t_en: "Witness" },
        { a: "حَسِيب", r: "Haseeb", u: "حساب لینے والا", u_ro: "Hisaab lene wala", u_hi: "हिसाब लेने वाला", u_en: "Reckoner", m: "حَسِيبًا", t: "حساب والا", t_ro: "Hisaab wala", t_hi: "हिसाब वाला", t_en: "Takes account" },
        { a: "وَكِيل", r: "Wakeel", u: "کارساز", u_ro: "Kaarsaaz", u_hi: "कारसाज़", u_en: "Trustee, Disposer", m: "وَكِيلًا", t: "بھروسہ", t_ro: "Bharosa", t_hi: "भरोसा", t_en: "Trusted in" }
    ] },
    { day: 4, words: [
        { a: "قَوِيّ", r: "Qawiyy", u: "طاقتور", u_ro: "Taaqatwar", u_hi: "ताक़तवर", u_en: "Strong", m: "قَوِيٌّ", t: "طاقت والا", t_ro: "Taaqat wala", t_hi: "ताक़त वाला", t_en: "Powerful" },
        { a: "شَدِيد", r: "Shadeed", u: "سخت", u_ro: "Sakht", u_hi: "सख़्त", u_en: "Severe", m: "شَدِيدٌ", t: "سخت", t_ro: "Sakht", t_hi: "सख़्त", t_en: "Harsh" },
        { a: "عَفُوّ", r: "Afuw", u: "معاف کرنے والا", u_ro: "Maaf karne wala", u_hi: "माफ़ करने वाला", u_en: "Pardoner", m: "عَفُوٌّ", t: "معافی", t_ro: "Maafi", t_hi: "माफ़ी", t_en: "Forgiveness" },
        { a: "حَقّ", r: "Haqq", u: "سچ", u_ro: "Sach", u_hi: "सच", u_en: "Truth", m: "الْحَقُّ", t: "حق", t_ro: "Haq", t_hi: "हक़", t_en: "Truth" },
        { a: "وَاحِد", r: "Waahid", u: "ایک", u_ro: "Ek", u_hi: "एक", u_en: "One", m: "وَاحِدٌ", t: "ایک", t_ro: "Ek", t_hi: "एक", t_en: "One" },
        { a: "أَحَد", r: "Ahad", u: "ایک، بے مثال", u_ro: "Ek, be-misaal", u_hi: "एक, बे-मिसाल", u_en: "One, Unique", m: "أَحَدٌ", t: "جس جیسا کوئی نہیں", t_ro: "Jis jaisa koi nahi", t_hi: "जिस जैसा कोई नहीं", t_en: "Has no equal" },
        { a: "صَمَد", r: "Samad", u: "بے نیاز", u_ro: "Be-niyaaz", u_hi: "बे-नियाज़", u_en: "Eternal, Self-Sufficient", m: "الصَّمَدُ", t: "بے نیاز", t_ro: "Be-niyaaz", t_hi: "बे-नियाज़", t_en: "Needs nothing" },
        { a: "هُوَ", r: "Huwa", u: "وہ (مرد)", u_ro: "Woh (mard)", u_hi: "वह (मर्द)", u_en: "He", m: "هُوَ", t: "وہ", t_ro: "Woh", t_hi: "वह", t_en: "He" },
        { a: "هِيَ", r: "Hiya", u: "وہ (عورت)", u_ro: "Woh (aurat)", u_hi: "वह (औरत)", u_en: "She", m: "هِيَ", t: "وہ", t_ro: "Woh", t_hi: "वह", t_en: "She" },
        { a: "هُمْ", r: "Hum", u: "وہ سب", u_ro: "Woh sab", u_hi: "वे सब", u_en: "They (m.)", m: "هُمْ", t: "وہ سب", t_ro: "Woh sab", t_hi: "वे सब", t_en: "They all" }
    ] },
    { day: 5, words: [
        { a: "هُنَّ", r: "Hunna", u: "وہ عورتیں", u_ro: "Woh auratein", u_hi: "वे औरतें", u_en: "They (f.)", m: "هُنَّ", t: "وہ سب", t_ro: "Woh sab", t_hi: "वे सब", t_en: "They all" },
        { a: "هُمَا", r: "Humaa", u: "وہ دونوں", u_ro: "Woh dono", u_hi: "वे दोनों", u_en: "They two", m: "هُمَا", t: "وہ دونوں", t_ro: "Woh dono", t_hi: "वे दोनों", t_en: "Both of them" },
        { a: "أَنْتَ", r: "Anta", u: "تم", u_ro: "Tum", u_hi: "तुम", u_en: "You (m. sg.)", m: "أَنْتَ", t: "تم", t_ro: "Tum", t_hi: "तुम", t_en: "You" },
        { a: "أَنْتُمْ", r: "Antum", u: "تم سب", u_ro: "Tum sab", u_hi: "तुम सब", u_en: "You (pl.)", m: "أَنْتُمْ", t: "تم سب", t_ro: "Tum sab", t_hi: "तुम सब", t_en: "You all" },
        { a: "أَنَا", r: "Anaa", u: "میں", u_ro: "Main", u_hi: "मैं", u_en: "I", m: "أَنَا", t: "میں", t_ro: "Main", t_hi: "मैं", t_en: "I" },
        { a: "نَحْنُ", r: "Nahnu", u: "ہم", u_ro: "Hum", u_hi: "हम", u_en: "We", m: "نَحْنُ", t: "ہم", t_ro: "Hum", t_hi: "हम", t_en: "We" },
        { a: "هَذَا", r: "Haadhaa", u: "یہ (مرد)", u_ro: "Yeh (mard)", u_hi: "यह (मर्द)", u_en: "This (m.)", m: "هَذَا", t: "یہ", t_ro: "Yeh", t_hi: "यह", t_en: "This" },
        { a: "هَذِهِ", r: "Haadhihi", u: "یہ (عورت)", u_ro: "Yeh (aurat)", u_hi: "यह (औरत)", u_en: "This (f.)", m: "هَذِهِ", t: "یہ", t_ro: "Yeh", t_hi: "यह", t_en: "This" },
        { a: "ذَلِكَ", r: "Dhaalika", u: "وہ", u_ro: "Woh", u_hi: "वह", u_en: "That", m: "ذَلِكَ", t: "وہ", t_ro: "Woh", t_hi: "वह", t_en: "That" },
        { a: "تِلْكَ", r: "Tilka", u: "وہ (عورت)", u_ro: "Woh (aurat)", u_hi: "वह (औरत)", u_en: "That (f.)", m: "تِلْكَ", t: "وہ", t_ro: "Woh", t_hi: "वह", t_en: "That" }
    ] },
    { day: 6, words: [
        { a: "أُولَٰئِكَ", r: "Ulaa'ika", u: "وہ لوگ", u_ro: "Woh log", u_hi: "वे लोग", u_en: "Those people", m: "أُولَٰئِكَ", t: "وہ لوگ", t_ro: "Woh log", t_hi: "वे लोग", t_en: "Those people" },
        { a: "هَؤُلَاءِ", r: "Haa'ulaa'i", u: "یہ لوگ", u_ro: "Yeh log", u_hi: "ये लोग", u_en: "These people", m: "هَؤُلَاءِ", t: "یہ لوگ", t_ro: "Yeh log", t_hi: "ये लोग", t_en: "These people" },
        { a: "الَّذِي", r: "Alladhee", u: "جو", u_ro: "Jo", u_hi: "जो", u_en: "Who, which (m.)", m: "الَّذِي", t: "جو", t_ro: "Jo", t_hi: "जो", t_en: "Who" },
        { a: "الَّتِي", r: "Allatee", u: "جو (عورت)", u_ro: "Jo (aurat)", u_hi: "जो (औरत)", u_en: "Who, which (f.)", m: "الَّتِي", t: "جو", t_ro: "Jo", t_hi: "जो", t_en: "Who" },
        { a: "الَّذِينَ", r: "Alladheena", u: "جو لوگ", u_ro: "Jo log", u_hi: "जो लोग", u_en: "Those who", m: "الَّذِينَ", t: "جو لوگ", t_ro: "Jo log", t_hi: "जो लोग", t_en: "Those who" },
        { a: "مَا", r: "Maa", u: "کیا", u_ro: "Kya", u_hi: "क्या", u_en: "What", m: "مَا", t: "کیا", t_ro: "Kya", t_hi: "क्या", t_en: "What" },
        { a: "مَنْ", r: "Man", u: "کون", u_ro: "Kaun", u_hi: "कौन", u_en: "Who", m: "مَنْ", t: "کون", t_ro: "Kaun", t_hi: "कौन", t_en: "Who" },
        { a: "كُلّ", r: "Kull", u: "ہر", u_ro: "Har", u_hi: "हर", u_en: "Every, all", m: "كُلّ", t: "سب", t_ro: "Sab", t_hi: "सब", t_en: "Each" },
        { a: "بَعْض", r: "Ba'd", u: "کچھ", u_ro: "Kuch", u_hi: "कुछ", u_en: "Some", m: "بَعْض", t: "کچھ", t_ro: "Kuch", t_hi: "कुछ", t_en: "Some" },
        { a: "جَمِيع", r: "Jamee'", u: "سب", u_ro: "Sab", u_hi: "सब", u_en: "All", m: "جَمِيع", t: "تمام", t_ro: "Tamaam", t_hi: "तमाम", t_en: "Entire" }
    ] },
    { day: 7, words: [
        { a: "نَفْس", r: "Nafs", u: "جان", u_ro: "Jaan", u_hi: "जान", u_en: "Soul, self", m: "نَفْس", t: "خود", t_ro: "Khud", t_hi: "ख़ुद", t_en: "Oneself" },
        { a: "غَيْر", r: "Ghayr", u: "کے سوا", u_ro: "Ke siwa", u_hi: "के सिवा", u_en: "Other than", m: "غَيْر", t: "بغیر", t_ro: "Baghair", t_hi: "बग़ैर", t_en: "Without" },
        { a: "مِثْل", r: "Mithl", u: "جیسا", u_ro: "Jaisa", u_hi: "जैसा", u_en: "Like, similar to", m: "مِثْل", t: "مثال", t_ro: "Misaal", t_hi: "मिसाल", t_en: "Example" },
        { a: "أَيّ", r: "Ayy", u: "کون سا", u_ro: "Kaun sa", u_hi: "कौन सा", u_en: "Which", m: "أَيّ", t: "کون", t_ro: "Kaun", t_hi: "कौन", t_en: "Which" },
        { a: "مَاذَا", r: "Maadhaa", u: "کیا", u_ro: "Kya", u_hi: "क्या", u_en: "What", m: "مَاذَا", t: "کیا", t_ro: "Kya", t_hi: "क्या", t_en: "What" },
        { a: "لِمَاذَا", r: "Limaadhaa", u: "کیوں", u_ro: "Kyun", u_hi: "क्यों", u_en: "Why", m: "لِمَاذَا", t: "کیوں", t_ro: "Kyun", t_hi: "क्यों", t_en: "Why" },
        { a: "أَيْنَ", r: "Ayna", u: "کہاں", u_ro: "Kahaan", u_hi: "कहाँ", u_en: "Where", m: "أَيْنَ", t: "کہاں", t_ro: "Kahaan", t_hi: "कहाँ", t_en: "Where" },
        { a: "كَيْفَ", r: "Kayfa", u: "کیسے", u_ro: "Kaise", u_hi: "कैसे", u_en: "How", m: "كَيْفَ", t: "کیسے", t_ro: "Kaise", t_hi: "कैसे", t_en: "How" },
        { a: "مَتَى", r: "Mataa", u: "کب", u_ro: "Kab", u_hi: "कब", u_en: "When", m: "مَتَى", t: "کب", t_ro: "Kab", t_hi: "कब", t_en: "When" },
        { a: "هَلْ", r: "Hal", u: "کیا", u_ro: "Kya", u_hi: "क्या", u_en: "Whether, is it that", m: "هَلْ", t: "کیا", t_ro: "Kya", t_hi: "क्या", t_en: "Question particle" }
    ] },
    { day: 8, words: [
        { a: "لَعَلَّ", r: "La'alla", u: "شاید", u_ro: "Shaayad", u_hi: "शायद", u_en: "Perhaps", m: "لَعَلَّ", t: "تاکہ", t_ro: "Taaki", t_hi: "ताकि", t_en: "So that" },
        { a: "كَمْ", r: "Kam", u: "کتنے", u_ro: "Kitne", u_hi: "कितने", u_en: "How many", m: "كَمْ", t: "کتنے", t_ro: "Kitne", t_hi: "कितने", t_en: "How many" },
        { a: "أَنَّ", r: "Anna", u: "بے شک", u_ro: "Be-shak", u_hi: "बेशक", u_en: "Indeed, that", m: "أَنَّ", t: "کہ", t_ro: "Ke", t_hi: "कि", t_en: "That" },
        { a: "فِي", r: "Fee", u: "میں", u_ro: "Main", u_hi: "मैं", u_en: "In", m: "فِي", t: "میں", t_ro: "Main", t_hi: "मैं", t_en: "In" },
        { a: "إِلَى", r: "Ilaa", u: "کی طرف", u_ro: "Ki taraf", u_hi: "की तरफ़", u_en: "To, towards", m: "إِلَى", t: "طرف", t_ro: "Taraf", t_hi: "तरफ़", t_en: "Toward" },
        { a: "عَلَى", r: "Alaa", u: "پر", u_ro: "Par", u_hi: "पर", u_en: "On, upon", m: "عَلَى", t: "پر", t_ro: "Par", t_hi: "पर", t_en: "On" },
        { a: "عَن", r: "An", u: "سے", u_ro: "Se", u_hi: "से", u_en: "From, about", m: "عَن", t: "بارے میں", t_ro: "Baare mein", t_hi: "बारे में", t_en: "Concerning" },
        { a: "مَعَ", r: "Ma'a", u: "ساتھ", u_ro: "Saath", u_hi: "साथ", u_en: "With", m: "مَعَ", t: "ساتھ", t_ro: "Saath", t_hi: "साथ", t_en: "Together with" },
        { a: "بِ", r: "Bi", u: "ساتھ", u_ro: "Saath", u_hi: "साथ", u_en: "With, by", m: "بِ", t: "کے ذریعے", t_ro: "Ke zariye", t_hi: "के ज़रिए", t_en: "By means of" },
        { a: "لِ", r: "Li", u: "کے لیے", u_ro: "Ke liye", u_hi: "के लिए", u_en: "For, to", m: "لِ", t: "کے لیے", t_ro: "Ke liye", t_hi: "के लिए", t_en: "For" }
    ] },
    { day: 9, words: [
        { a: "كَ", r: "Ka", u: "جیسا", u_ro: "Jaisa", u_hi: "जैसा", u_en: "Like, as", m: "كَ", t: "جیسا", t_ro: "Jaisa", t_hi: "जैसा", t_en: "Like" },
        { a: "وَ", r: "Wa", u: "اور", u_ro: "Aur", u_hi: "और", u_en: "And", m: "وَ", t: "اور", t_ro: "Aur", t_hi: "और", t_en: "And" },
        { a: "فَ", r: "Fa", u: "پھر", u_ro: "Phir", u_hi: "फिर", u_en: "Then, so", m: "فَ", t: "پس", t_ro: "Pas", t_hi: "पस", t_en: "So" },
        { a: "ثُمَّ", r: "Thumma", u: "پھر", u_ro: "Phir", u_hi: "फिर", u_en: "Then", m: "ثُمَّ", t: "اس کے بعد", t_ro: "Is ke baad", t_hi: "इसके बाद", t_en: "Afterwards" },
        { a: "أَوْ", r: "Aw", u: "یا", u_ro: "Ya", u_hi: "या", u_en: "Or", m: "أَوْ", t: "یا", t_ro: "Ya", t_hi: "या", t_en: "Or" },
        { a: "لَا", r: "Laa", u: "نہیں", u_ro: "Nahin", u_hi: "नहीं", u_en: "No, not", m: "لَا", t: "نہیں", t_ro: "Nahin", t_hi: "नहीं", t_en: "No" },
        { a: "لَمْ", r: "Lam", u: "نہیں", u_ro: "Nahin", u_hi: "नहीं", u_en: "Did not", m: "لَمْ", t: "نہیں (ماضی)", t_ro: "Nahin (maazi)", t_hi: "नहीं (भूतकाल)", t_en: "Not (past)" },
        { a: "لَنْ", r: "Lan", u: "ہرگز نہیں", u_ro: "Hargiz nahin", u_hi: "हरगिज़ नहीं", u_en: "Will never", m: "لَنْ", t: "ہرگز نہیں", t_ro: "Hargiz nahin", t_hi: "हरगिज़ नहीं", t_en: "Never" },
        { a: "لَمَّا", r: "Lammaa", u: "جب", u_ro: "Jab", u_hi: "जब", u_en: "When, not yet", m: "لَمَّا", t: "ابھی نہیں", t_ro: "Abhi nahin", t_hi: "अभी नहीं", t_en: "Not yet" },
        { a: "إِنَّ", r: "Inna", u: "بے شک", u_ro: "Be-shak", u_hi: "बेशक", u_en: "Indeed", m: "إِنَّ", t: "یقیناً", t_ro: "Yaqeenan", t_hi: "यक़ीनन", t_en: "Surely" }
    ] },
    { day: 10, words: [
        { a: "إِن", r: "In", u: "اگر", u_ro: "Agar", u_hi: "अगर", u_en: "If", m: "إِن", t: "اگر", t_ro: "Agar", t_hi: "अगर", t_en: "If" },
        { a: "أَن", r: "An", u: "کہ", u_ro: "Ke", u_hi: "कि", u_en: "That", m: "أَن", t: "کہ", t_ro: "Ke", t_hi: "कि", t_en: "That" },
        { a: "إِذَا", r: "Idhaa", u: "جب", u_ro: "Jab", u_hi: "जब", u_en: "When, whenever", m: "إِذَا", t: "جب (آئندہ)", t_ro: "Jab (aainda)", t_hi: "जब (भविष्य)", t_en: "When (future)" },
        { a: "إِذْ", r: "Idh", u: "جب", u_ro: "Jab", u_hi: "जब", u_en: "When", m: "إِذْ", t: "جب (گزرا)", t_ro: "Jab (guzra)", t_hi: "जब (बीता हुआ)", t_en: "When (past)" },
        { a: "لَوْ", r: "Law", u: "اگر", u_ro: "Agar", u_hi: "अगर", u_en: "If only", m: "لَوْ", t: "کاش", t_ro: "Kaash", t_hi: "काश", t_en: "Wish" },
        { a: "لَوْلَا", r: "Lawlaa", u: "اگر نہ ہوتا", u_ro: "Agar na hota", u_hi: "अगर न होता", u_en: "Had it not been for", m: "لَوْلَا", t: "کیوں نہ", t_ro: "Kyun na", t_hi: "क्यों न", t_en: "Why not" },
        { a: "قَدْ", r: "Qad", u: "یقیناً", u_ro: "Yaqeenan", u_hi: "यक़ीनन", u_en: "Indeed, already", m: "قَدْ", t: "تحقیق", t_ro: "Tahqeeq", t_hi: "तहक़ीक़", t_en: "Certainly" },
        { a: "سَوْفَ", r: "Sawfa", u: "عنقریب", u_ro: "Anqareeb", u_hi: "अनक़रीब", u_en: "Soon", m: "سَوْفَ", t: "جلد", t_ro: "Jald", t_hi: "जल्द", t_en: "Soon" },
        { a: "بَلْ", r: "Bal", u: "بلکہ", u_ro: "Balki", u_hi: "बल्कि", u_en: "Rather, but", m: "بَلْ", t: "بلکہ", t_ro: "Balki", t_hi: "बल्कि", t_en: "Rather" },
        { a: "لَكِنْ", r: "Laakin", u: "لیکن", u_ro: "Lekin", u_hi: "लेकिन", u_en: "But", m: "لَكِنْ", t: "لیکن", t_ro: "Lekin", t_hi: "लेकिन", t_en: "But" }
    ] },
    { day: 11, words: [
        { a: "حَتَّى", r: "Hattaa", u: "یہاں تک کہ", u_ro: "Yahaan tak ke", u_hi: "यहाँ तक कि", u_en: "Until, even", m: "حَتَّى", t: "تک", t_ro: "Tak", t_hi: "तक", t_en: "Until" },
        { a: "كَيْ", r: "Kay", u: "تاکہ", u_ro: "Taaki", u_hi: "ताकि", u_en: "So that", m: "كَيْ", t: "تاکہ", t_ro: "Taaki", t_hi: "ताकि", t_en: "So that" },
        { a: "إِلَّا", r: "Illaa", u: "مگر", u_ro: "Magar", u_hi: "मगर", u_en: "Except", m: "إِلَّا", t: "سوائے", t_ro: "Siwaaye", t_hi: "सिवाय", t_en: "Except" },
        { a: "بَيْنَ", r: "Bayna", u: "درمیان", u_ro: "Darmiyaan", u_hi: "दरमियान", u_en: "Between", m: "بَيْنَ", t: "بیچ", t_ro: "Beech", t_hi: "बीच", t_en: "Among" },
        { a: "بَعْدَ", r: "Ba'da", u: "بعد", u_ro: "Baad", u_hi: "बाद", u_en: "After", m: "بَعْدَ", t: "کے بعد", t_ro: "Ke baad", t_hi: "के बाद", t_en: "After" },
        { a: "قَبْلَ", r: "Qabla", u: "پہلے", u_ro: "Pehle", u_hi: "पहले", u_en: "Before", m: "قَبْلَ", t: "سے پہلے", t_ro: "Se pehle", t_hi: "से पहले", t_en: "Before" },
        { a: "فَوْقَ", r: "Fawqa", u: "اوپر", u_ro: "Upar", u_hi: "ऊपर", u_en: "Above", m: "فَوْقَ", t: "اوپر", t_ro: "Upar", t_hi: "ऊपर", t_en: "Above" },
        { a: "تَحْتَ", r: "Tahta", u: "نیچے", u_ro: "Neeche", u_hi: "नीचे", u_en: "Beneath", m: "تَحْتَ", t: "نیچے", t_ro: "Neeche", t_hi: "नीचे", t_en: "Below" },
        { a: "خَلْفَ", r: "Khalfa", u: "پیچھے", u_ro: "Peechhe", u_hi: "पीछे", u_en: "Behind", m: "خَلْفَ", t: "پیچھے", t_ro: "Peechhe", t_hi: "पीछे", t_en: "Behind" },
        { a: "دُونَ", r: "Doona", u: "سوا", u_ro: "Siwa", u_hi: "सिवा", u_en: "Other than, besides", m: "دُونَ", t: "بغیر", t_ro: "Baghair", t_hi: "बग़ैर", t_en: "Without" }
    ] },
    { day: 12, words: [
        { a: "عِندَ", r: "Inda", u: "پاس", u_ro: "Paas", u_hi: "पास", u_en: "With, near", m: "عِندَ", t: "پاس", t_ro: "Paas", t_hi: "पास", t_en: "Near" },
        { a: "لَدَى", r: "Ladaa", u: "پاس", u_ro: "Paas", u_hi: "पास", u_en: "With, near", m: "لَدَى", t: "حضور", t_ro: "Huzoor", t_hi: "हुज़ूर", t_en: "In presence of" },
        { a: "حَوْلَ", r: "Hawla", u: "ارد گرد", u_ro: "Ird-gird", u_hi: "इर्द-गिर्द", u_en: "Around", m: "حَوْلَ", t: "آس پاس", t_ro: "Aas paas", t_hi: "आस-पास", t_en: "Surroundings" },
        { a: "كَلَّا", r: "Kallaa", u: "ہرگز نہیں", u_ro: "Hargiz nahin", u_hi: "हरगिज़ नहीं", u_en: "Nay, never", m: "كَلَّا", t: "ہرگز نہیں", t_ro: "Hargiz nahin", t_hi: "हरगिज़ नहीं", t_en: "Never" },
        { a: "نَعَمْ", r: "Na'am", u: "ہاں", u_ro: "Haan", u_hi: "हाँ", u_en: "Yes", m: "نَعَمْ", t: "ہاں", t_ro: "Haan", t_hi: "हाँ", t_en: "Yes" },
        { a: "بَلَى", r: "Balaa", u: "ہاں کیوں نہیں", u_ro: "Haan kyun nahin", u_hi: "हाँ क्यों नहीं", u_en: "Yes, indeed", m: "بَلَى", t: "کیوں نہیں", t_ro: "Kyun nahin", t_hi: "क्यों नहीं", t_en: "Why not" },
        { a: "أَلَا", r: "Alaa", u: "خبردار", u_ro: "Khabardaar", u_hi: "ख़बरदार", u_en: "Beware, indeed", m: "أَلَا", t: "سنو", t_ro: "Suno", t_hi: "सुनो", t_en: "Listen" },
        { a: "يَا", r: "Yaa", u: "اے", u_ro: "Ae", u_hi: "ऐ", u_en: "O", m: "يَا", t: "اے", t_ro: "Ae", t_hi: "ऐ", t_en: "O" },
        { a: "أَيُّهَا", r: "Ayyuhaa", u: "اے", u_ro: "Ae", u_hi: "ऐ", u_en: "O (you)", m: "أَيُّهَا", t: "اے", t_ro: "Ae", t_hi: "ऐ", t_en: "O" },
        { a: "إِنَّمَا", r: "Innamaa", u: "بس", u_ro: "Bas", u_hi: "बस", u_en: "Only, indeed", m: "إِنَّمَا", t: "صرف", t_ro: "Sirf", t_hi: "सिर्फ़", t_en: "Only" }
    ] },
    { day: 13, words: [
        { a: "كَذَلِكَ", r: "Kadhaalika", u: "اسی طرح", u_ro: "Isi tarah", u_hi: "इसी तरह", u_en: "Thus, likewise", m: "كَذَلِكَ", t: "اسی طرح", t_ro: "Isi tarah", t_hi: "इसी तरह", t_en: "Likewise" },
        { a: "حَيْثُ", r: "Haythu", u: "جہاں", u_ro: "Jahaan", u_hi: "जहाँ", u_en: "Where", m: "حَيْثُ", t: "جہاں", t_ro: "Jahaan", t_hi: "जहाँ", t_en: "Where" },
        { a: "أَبَدًا", r: "Abadan", u: "ہمیشہ", u_ro: "Hamesha", u_hi: "हमेशा", u_en: "Ever, never", m: "أَبَدًا", t: "کبھی", t_ro: "Kabhi", t_hi: "कभी", t_en: "Ever" },
        { a: "سَمَاء", r: "Samaa'", u: "آسمان", u_ro: "Aasmaan", u_hi: "आसमान", u_en: "Sky, heaven", m: "السَّمَاءُ", t: "آسمان", t_ro: "Aasmaan", t_hi: "आसमान", t_en: "Sky" },
        { a: "أَرْض", r: "Ard", u: "زمین", u_ro: "Zameen", u_hi: "ज़मीन", u_en: "Earth", m: "الْأَرْضُ", t: "زمین", t_ro: "Zameen", t_hi: "ज़मीन", t_en: "Earth" },
        { a: "شَمْس", r: "Shams", u: "سورج", u_ro: "Sooraj", u_hi: "सूरज", u_en: "Sun", m: "الشَّمْسُ", t: "سورج", t_ro: "Sooraj", t_hi: "सूरज", t_en: "Sun" },
        { a: "قَمَر", r: "Qamar", u: "چاند", u_ro: "Chaand", u_hi: "चाँद", u_en: "Moon", m: "الْقَمَرُ", t: "چاند", t_ro: "Chaand", t_hi: "चाँद", t_en: "Moon" },
        { a: "نَجْم", r: "Najm", u: "ستارہ", u_ro: "Sitaara", u_hi: "सितारा", u_en: "Star", m: "النَّجْمُ", t: "ستارہ", t_ro: "Sitaara", t_hi: "सितारा", t_en: "Star" },
        { a: "نُور", r: "Noor", u: "روشنی", u_ro: "Roshni", u_hi: "रोशनी", u_en: "Light", m: "النُّورُ", t: "روشنی", t_ro: "Roshni", t_hi: "रोशनी", t_en: "Light" },
        { a: "ظُلُمَات", r: "Zulumaat", u: "اندھیرے", u_ro: "Andhere", u_hi: "अंधेरे", u_en: "Darkness", m: "الظُّلُمَاتِ", t: "اندھیرا", t_ro: "Andhera", t_hi: "अंधेरा", t_en: "Darkness" }
    ] },
    { day: 14, words: [
        { a: "لَيْل", r: "Layl", u: "رات", u_ro: "Raat", u_hi: "रात", u_en: "Night", m: "اللَّيْلُ", t: "رات", t_ro: "Raat", t_hi: "रात", t_en: "Night" },
        { a: "نَهَار", r: "Nahaar", u: "دن", u_ro: "Din", u_hi: "दिन", u_en: "Day, daytime", m: "النَّهَارُ", t: "دن", t_ro: "Din", t_hi: "दिन", t_en: "Day" },
        { a: "يَوْم", r: "Yawm", u: "دن", u_ro: "Din", u_hi: "दिन", u_en: "Day", m: "الْيَوْمَ", t: "دن", t_ro: "Din", t_hi: "दिन", t_en: "Day" },
        { a: "فَجْر", r: "Fajr", u: "صبح", u_ro: "Subah", u_hi: "सुबह", u_en: "Dawn", m: "الْفَجْرِ", t: "صبح", t_ro: "Subah", t_hi: "सुबह", t_en: "Morning" },
        { a: "مَاء", r: "Maa'", u: "پانی", u_ro: "Paani", u_hi: "पानी", u_en: "Water", m: "الْمَاءُ", t: "پانی", t_ro: "Paani", t_hi: "पानी", t_en: "Water" },
        { a: "مَطَر", r: "Matar", u: "بارش", u_ro: "Baarish", u_hi: "बारिश", u_en: "Rain", m: "مَطَرٌ", t: "بارش", t_ro: "Baarish", t_hi: "बारिश", t_en: "Rain" },
        { a: "سَحَاب", r: "Sahaab", u: "بادل", u_ro: "Baadal", u_hi: "बादल", u_en: "Cloud", m: "السَّحَابُ", t: "بادل", t_ro: "Baadal", t_hi: "बादल", t_en: "Cloud" },
        { a: "بَرْق", r: "Barq", u: "بجلی", u_ro: "Bijli", u_hi: "बिजली", u_en: "Lightning", m: "الْبَرْقُ", t: "بجلی", t_ro: "Bijli", t_hi: "बिजली", t_en: "Lightning" },
        { a: "رَعْد", r: "Ra'd", u: "گرج", u_ro: "Garaj", u_hi: "गरज", u_en: "Thunder", m: "الرَّعْدُ", t: "گرج", t_ro: "Garaj", t_hi: "गरज", t_en: "Thunder" },
        { a: "رِيح", r: "Reeh", u: "ہوا", u_ro: "Hawa", u_hi: "हवा", u_en: "Wind", m: "الرِّيحُ", t: "ہوا", t_ro: "Hawa", t_hi: "हवा", t_en: "Wind" }
    ] },
    { day: 15, words: [
        { a: "بَحْر", r: "Bahr", u: "سمندر", u_ro: "Samundar", u_hi: "समुंदर", u_en: "Sea", m: "الْبَحْرُ", t: "سمندر", t_ro: "Samundar", t_hi: "समुंदर", t_en: "Sea" },
        { a: "نَهْر", r: "Nahr", u: "نہر", u_ro: "Nahar", u_hi: "नहर", u_en: "River", m: "النَّهْرُ", t: "نہر", t_ro: "Nahar", t_hi: "नहर", t_en: "River" },
        { a: "جَبَل", r: "Jabal", u: "پہاڑ", u_ro: "Pahaad", u_hi: "पहाड़", u_en: "Mountain", m: "الْجَبَلُ", t: "پہاڑ", t_ro: "Pahaad", t_hi: "पहाड़", t_en: "Mountain" },
        { a: "نَار", r: "Naar", u: "آگ", u_ro: "Aag", u_hi: "आग", u_en: "Fire", m: "النَّارُ", t: "آگ", t_ro: "Aag", t_hi: "आग", t_en: "Fire" },
        { a: "حَجَر", r: "Hajar", u: "پتھر", u_ro: "Patthar", u_hi: "पत्थर", u_en: "Stone", m: "الْحَجَرُ", t: "پتھر", t_ro: "Patthar", t_hi: "पत्थर", t_en: "Stone" },
        { a: "طِين", r: "Teen", u: "مٹی", u_ro: "Mitti", u_hi: "मिट्टी", u_en: "Clay", m: "الطِّينُ", t: "مٹی", t_ro: "Mitti", t_hi: "मिट्टी", t_en: "Clay" },
        { a: "شَجَرَة", r: "Shajarah", u: "درخت", u_ro: "Darakht", u_hi: "दरख़्त", u_en: "Tree", m: "الشَّجَرَةُ", t: "درخت", t_ro: "Darakht", t_hi: "दरख़्त", t_en: "Tree" },
        { a: "وَرَقَة", r: "Waraqah", u: "پتّا", u_ro: "Patta", u_hi: "पत्ता", u_en: "Leaf", m: "الْوَرَقَةُ", t: "پتّا", t_ro: "Patta", t_hi: "पत्ता", t_en: "Leaf" },
        { a: "نَخْل", r: "Nakhl", u: "کھجور کا درخت", u_ro: "Khajoor ka darakht", u_hi: "खजूर का दरख़्त", u_en: "Date palm", m: "النَّخْلُ", t: "کھجور", t_ro: "Khajoor", t_hi: "खजूर", t_en: "Date palm" },
        { a: "ثَمَرَة", r: "Thamarah", u: "پھل", u_ro: "Phal", u_hi: "फल", u_en: "Fruit", m: "الثَّمَرَةُ", t: "پھل", t_ro: "Phal", t_hi: "फल", t_en: "Fruit" }
    ] },
    { day: 16, words: [
        { a: "عِنَب", r: "Inab", u: "انگور", u_ro: "Angoor", u_hi: "अंगूर", u_en: "Grapes", m: "الْعِنَبَ", t: "انگور", t_ro: "Angoor", t_hi: "अंगूर", t_en: "Grapes" },
        { a: "زَيْتُون", r: "Zaytoon", u: "زیتون", u_ro: "Zaitoon", u_hi: "ज़ैतून", u_en: "Olive", m: "الزَّيْتُونَ", t: "زیتون", t_ro: "Zaitoon", t_hi: "ज़ैतून", t_en: "Olive" },
        { a: "زَرْع", r: "Zar'", u: "کھیتی", u_ro: "Kheti", u_hi: "खेती", u_en: "Crops", m: "الزَّرْعَ", t: "کھیتی", t_ro: "Kheti", t_hi: "खेती", t_en: "Crops" },
        { a: "نَبَات", r: "Nabaat", u: "پودے", u_ro: "Paudhe", u_hi: "पौधे", u_en: "Plants", m: "النَّبَاتَ", t: "پودا", t_ro: "Paudha", t_hi: "पौधा", t_en: "Plant" },
        { a: "ذَهَب", r: "Dhahab", u: "سونا", u_ro: "Sona", u_hi: "सोना", u_en: "Gold", m: "الذَّهَبَ", t: "سونا", t_ro: "Sona", t_hi: "सोना", t_en: "Gold" },
        { a: "فِضَّة", r: "Fiddah", u: "چاندی", u_ro: "Chaandi", u_hi: "चाँदी", u_en: "Silver", m: "الْفِضَّةَ", t: "چاندی", t_ro: "Chaandi", t_hi: "चाँदी", t_en: "Silver" },
        { a: "حَدِيد", r: "Hadeed", u: "لوہا", u_ro: "Loha", u_hi: "लोहा", u_en: "Iron", m: "الْحَدِيدَ", t: "لوہا", t_ro: "Loha", t_hi: "लोहा", t_en: "Iron" },
        { a: "لَبَن", r: "Laban", u: "دودھ", u_ro: "Doodh", u_hi: "दूध", u_en: "Milk", m: "اللَّبَنَ", t: "دودھ", t_ro: "Doodh", t_hi: "दूध", t_en: "Milk" },
        { a: "عَسَل", r: "Asal", u: "شہد", u_ro: "Shahad", u_hi: "शहद", u_en: "Honey", m: "الْعَسَلَ", t: "شہد", t_ro: "Shahad", t_hi: "शहद", t_en: "Honey" },
        { a: "طَعَام", r: "Ta'aam", u: "کھانا", u_ro: "Khaana", u_hi: "खाना", u_en: "Food", m: "الطَّعَامَ", t: "کھانا", t_ro: "Khaana", t_hi: "खाना", t_en: "Food" }
    ] },
    { day: 17, words: [
        { a: "لَحْم", r: "Lahm", u: "گوشت", u_ro: "Gosht", u_hi: "गोश्त", u_en: "Meat", m: "اللَّحْمَ", t: "گوشت", t_ro: "Gosht", t_hi: "गोश्त", t_en: "Meat" },
        { a: "بَيْت", r: "Bayt", u: "گھر", u_ro: "Ghar", u_hi: "घर", u_en: "House", m: "الْبَيْتَ", t: "گھر", t_ro: "Ghar", t_hi: "घर", t_en: "House" },
        { a: "مَسْجِد", r: "Masjid", u: "مسجد", u_ro: "Masjid", u_hi: "मस्जिद", u_en: "Mosque", m: "الْمَسْجِدَ", t: "مسجد", t_ro: "Masjid", t_hi: "मस्जिद", t_en: "Mosque" },
        { a: "كَعْبَة", r: "Ka'bah", u: "کعبہ", u_ro: "Kaaba", u_hi: "काबा", u_en: "Kaaba", m: "الْكَعْبَةَ", t: "کعبہ", t_ro: "Kaaba", t_hi: "काबा", t_en: "Kaaba" },
        { a: "قَرْيَة", r: "Qaryah", u: "بستی", u_ro: "Basti", u_hi: "बस्ती", u_en: "Town, village", m: "الْقَرْيَةَ", t: "بستی", t_ro: "Basti", t_hi: "बस्ती", t_en: "Settlement" },
        { a: "مَدِينَة", r: "Madeenah", u: "شہر", u_ro: "Shehar", u_hi: "शहर", u_en: "City", m: "الْمَدِينَةَ", t: "شہر", t_ro: "Shehar", t_hi: "शहर", t_en: "City" },
        { a: "بَاب", r: "Baab", u: "دروازہ", u_ro: "Darwaaza", u_hi: "दरवाज़ा", u_en: "Door", m: "الْبَابَ", t: "دروازہ", t_ro: "Darwaaza", t_hi: "दरवाज़ा", t_en: "Door" },
        { a: "فُلْك", r: "Fulk", u: "کشتی", u_ro: "Kashti", u_hi: "कश्ती", u_en: "Ship", m: "الْفُلْكَ", t: "کشتی", t_ro: "Kashti", t_hi: "कश्ती", t_en: "Ship" },
        { a: "كِتَاب", r: "Kitaab", u: "کتاب", u_ro: "Kitaab", u_hi: "किताब", u_en: "Book", m: "الْكِتَابَ", t: "کتاب", t_ro: "Kitaab", t_hi: "किताब", t_en: "Book" },
        { a: "قَلَم", r: "Qalam", u: "قلم", u_ro: "Qalam", u_hi: "क़लम", u_en: "Pen", m: "الْقَلَمَ", t: "قلم", t_ro: "Qalam", t_hi: "क़लम", t_en: "Pen" }
    ] },
    { day: 18, words: [
        { a: "مِيزَان", r: "Meezaan", u: "ترازو", u_ro: "Taraazu", u_hi: "तराज़ू", u_en: "Scale", m: "الْمِيزَانَ", t: "ترازو", t_ro: "Taraazu", t_hi: "तराज़ू", t_en: "Scale" },
        { a: "مَال", r: "Maal", u: "مال", u_ro: "Maal", u_hi: "माल", u_en: "Wealth", m: "الْمَالَ", t: "دولت", t_ro: "Daulat", t_hi: "दौलत", t_en: "Wealth" },
        { a: "ثِيَاب", r: "Thiyaab", u: "کپڑے", u_ro: "Kapde", u_hi: "कपड़े", u_en: "Clothes", m: "الثِّيَابَ", t: "کپڑا", t_ro: "Kapda", t_hi: "कपड़ा", t_en: "Cloth" },
        { a: "ظِلّ", r: "Zill", u: "سایہ", u_ro: "Saaya", u_hi: "साया", u_en: "Shade", m: "الظِّلَّ", t: "سایہ", t_ro: "Saaya", t_hi: "साया", t_en: "Shade" },
        { a: "سَبِيل", r: "Sabeel", u: "راستہ", u_ro: "Raasta", u_hi: "रास्ता", u_en: "Way, path", m: "السَّبِيلَ", t: "راستہ", t_ro: "Raasta", t_hi: "रास्ता", t_en: "Path" },
        { a: "صِرَاط", r: "Siraat", u: "سیدھا راستہ", u_ro: "Seedha raasta", u_hi: "सीधा रास्ता", u_en: "Straight path", m: "الصِّرَاطَ", t: "راستہ", t_ro: "Raasta", t_hi: "रास्ता", t_en: "Path" },
        { a: "بَقَرَة", r: "Baqarah", u: "گائے", u_ro: "Gaaye", u_hi: "गाय", u_en: "Cow", m: "الْبَقَرَةَ", t: "گائے", t_ro: "Gaaye", t_hi: "गाय", t_en: "Cow" },
        { a: "عِجْل", r: "Ijil", u: "بچھڑا", u_ro: "Bachhda", u_hi: "बछड़ा", u_en: "Calf", m: "الْعِجْلَ", t: "بچھڑا", t_ro: "Bachhda", t_hi: "बछड़ा", t_en: "Calf" },
        { a: "نَاقَة", r: "Naaqah", u: "اونٹنی", u_ro: "Untni", u_hi: "ऊँटनी", u_en: "She-camel", m: "النَّاقَةَ", t: "اونٹنی", t_ro: "Untni", t_hi: "ऊँटनी", t_en: "She-camel" },
        { a: "جَمَل", r: "Jamal", u: "اونٹ", u_ro: "Unt", u_hi: "ऊँट", u_en: "Camel", m: "الْجَمَلَ", t: "اونٹ", t_ro: "Unt", t_hi: "ऊँट", t_en: "Camel" }
    ] },
    { day: 19, words: [
        { a: "غَنَم", r: "Ghanam", u: "بھیڑ بکریاں", u_ro: "Bhed bakriyaan", u_hi: "भेड़-बकरियाँ", u_en: "Sheep and goats", m: "الْغَنَمَ", t: "بکری", t_ro: "Bakri", t_hi: "बकरी", t_en: "Goat" },
        { a: "مَعْز", r: "Ma'z", u: "بکری", u_ro: "Bakri", u_hi: "बकरी", u_en: "Goat", m: "الْمَعْزَ", t: "بکری", t_ro: "Bakri", t_hi: "बकरी", t_en: "Goat" },
        { a: "أَنَعَام", r: "An'aam", u: "مویشی", u_ro: "Maweshi", u_hi: "मवेशी", u_en: "Livestock", m: "الْأَنْعَامَ", t: "مویشی", t_ro: "Maweshi", t_hi: "मवेशी", t_en: "Livestock" },
        { a: "خَيْل", r: "Khayl", u: "گھوڑے", u_ro: "Ghode", u_hi: "घोड़े", u_en: "Horses", m: "الْخَيْلَ", t: "گھوڑا", t_ro: "Ghoda", t_hi: "घोड़ा", t_en: "Horse" },
        { a: "حِمَار", r: "Himaar", u: "گدھا", u_ro: "Gadha", u_hi: "गधा", u_en: "Donkey", m: "الْحِمَارَ", t: "گدھا", t_ro: "Gadha", t_hi: "गधा", t_en: "Donkey" },
        { a: "كَلْب", r: "Kalb", u: "کتا", u_ro: "Kutta", u_hi: "कुत्ता", u_en: "Dog", m: "الْكَلْبَ", t: "کتا", t_ro: "Kutta", t_hi: "कुत्ता", t_en: "Dog" },
        { a: "ذِئْب", r: "Dhi'b", u: "بھیڑیا", u_ro: "Bhediya", u_hi: "भेड़िया", u_en: "Wolf", m: "الذِّئْبَ", t: "بھیڑیا", t_ro: "Bhediya", t_hi: "भेड़िया", t_en: "Wolf" },
        { a: "فِيل", r: "Feel", u: "ہاتھی", u_ro: "Haathi", u_hi: "हाथी", u_en: "Elephant", m: "الْفِيلَ", t: "ہاتھی", t_ro: "Haathi", t_hi: "हाथी", t_en: "Elephant" },
        { a: "طَيْر", r: "Tayr", u: "پرندے", u_ro: "Parinde", u_hi: "परिंदे", u_en: "Birds", m: "الطَّيْرَ", t: "پرندہ", t_ro: "Parinda", t_hi: "परिंदा", t_en: "Bird" },
        { a: "هُدْهُد", r: "Hudhud", u: "ایک پرندہ", u_ro: "Ek parinda", u_hi: "एक परिंदा", u_en: "Hoopoe", m: "الْهُدْهُدَ", t: "ہدہد", t_ro: "Hudhud", t_hi: "हुदहुद", t_en: "A bird" }
    ] },
    { day: 20, words: [
        { a: "غُرَاب", r: "Ghuraab", u: "کوا", u_ro: "Kauwa", u_hi: "कौआ", u_en: "Crow", m: "الْغُرَابَ", t: "کوا", t_ro: "Kauwa", t_hi: "कौआ", t_en: "Crow" },
        { a: "نَمْلَة", r: "Namlah", u: "چیونٹی", u_ro: "Cheenti", u_hi: "चींटी", u_en: "Ant", m: "النَّمْلَةَ", t: "چیونٹی", t_ro: "Cheenti", t_hi: "चींटी", t_en: "Ant" },
        { a: "نَحْل", r: "Nahl", u: "شہد کی مکھی", u_ro: "Shahad ki makkhi", u_hi: "शहद की मक्खी", u_en: "Bee", m: "النَّحْلَ", t: "مکھی", t_ro: "Makkhi", t_hi: "मक्खी", t_en: "Bee" },
        { a: "عَنكَبُوت", r: "Ankaboot", u: "مکڑی", u_ro: "Makdi", u_hi: "मकड़ी", u_en: "Spider", m: "الْعَنكَبُوتَ", t: "مکڑی", t_ro: "Makdi", t_hi: "मकड़ी", t_en: "Spider" },
        { a: "ذُبَاب", r: "Dhubaab", u: "مکھی", u_ro: "Makkhi", u_hi: "मक्खी", u_en: "Fly", m: "الذُّبَابَ", t: "مکھی", t_ro: "Makkhi", t_hi: "मक्खी", t_en: "Fly" },
        { a: "جَرَاد", r: "Jaraad", u: "ٹڈی", u_ro: "Tiddi", u_hi: "टिड्डी", u_en: "Locust", m: "الْجَرَادَ", t: "ٹڈی", t_ro: "Tiddi", t_hi: "टिड्डी", t_en: "Locust" },
        { a: "ضَفَادِع", r: "Dafaaidi'", u: "مینڈک", u_ro: "Mendak", u_hi: "मेंढक", u_en: "Frogs", m: "الضَّفَادِعَ", t: "مینڈک", t_ro: "Mendak", t_hi: "मेंढक", t_en: "Frog" },
        { a: "حَيَّة", r: "Hayyah", u: "سانپ", u_ro: "Saanp", u_hi: "साँप", u_en: "Snake", m: "الْحَيَّةَ", t: "سانپ", t_ro: "Saanp", t_hi: "साँप", t_en: "Snake" },
        { a: "قِرْد", r: "Qird", u: "بندر", u_ro: "Bandar", u_hi: "बंदर", u_en: "Monkey", m: "الْقِرْدَ", t: "بندر", t_ro: "Bandar", t_hi: "बंदर", t_en: "Monkey" },
        { a: "خِنْزِير", r: "Khinzeer", u: "سور", u_ro: "Suar", u_hi: "सूअर", u_en: "Pig", m: "الْخِنْزِيرَ", t: "سور", t_ro: "Soor", t_hi: "सूअर", t_en: "Pig" }
    ] },
    { day: 21, words: [
        { a: "بَعُوضَة", r: "Ba'oodah", u: "مچھر", u_ro: "Machhar", u_hi: "मच्छर", u_en: "Gnat, mosquito", m: "بَعُوضَةً", t: "مچھر", t_ro: "Machhar", t_hi: "मच्छर", t_en: "Mosquito" },
        { a: "حُوت", r: "Hoot", u: "مچھلی", u_ro: "Machhli", u_hi: "मछली", u_en: "Fish, whale", m: "الْحُوتَ", t: "مچھلی", t_ro: "Machhli", t_hi: "मछली", t_en: "Fish" },
        { a: "دَابَّة", r: "Daabbah", u: "جاندار", u_ro: "Jaandaar", u_hi: "जानदार", u_en: "Creature, moving being", m: "الدَّابَّةَ", t: "جانور", t_ro: "Jaanwar", t_hi: "जानवर", t_en: "Animal" },
        { a: "إِنْسَان", r: "Insaan", u: "انسان", u_ro: "Insaan", u_hi: "इंसान", u_en: "Human being", m: "الْإِنسَانَ", t: "انسان", t_ro: "Insaan", t_hi: "इंसान", t_en: "Human" },
        { a: "نَاس", r: "Naas", u: "لوگ", u_ro: "Log", u_hi: "लोग", u_en: "People", m: "النَّاسَ", t: "لوگ", t_ro: "Log", t_hi: "लोग", t_en: "People" },
        { a: "بَشَر", r: "Bashar", u: "انسان", u_ro: "Insaan", u_hi: "इंसान", u_en: "Human, mortal", m: "الْبَشَرَ", t: "انسان", t_ro: "Insaan", t_hi: "इंसान", t_en: "Human" },
        { a: "رَجُل", r: "Rajul", u: "مرد", u_ro: "Mard", u_hi: "मर्द", u_en: "Man", m: "الرَّجُلَ", t: "مرد", t_ro: "Mard", t_hi: "मर्द", t_en: "Man" },
        { a: "امْرَأَة", r: "Imra'ah", u: "عورت", u_ro: "Aurat", u_hi: "औरत", u_en: "Woman", m: "الْمَرْأَةَ", t: "عورت", t_ro: "Aurat", t_hi: "औरत", t_en: "Woman" },
        { a: "نِسَاء", r: "Nisaa'", u: "عورتیں", u_ro: "Auratein", u_hi: "औरतें", u_en: "Women", m: "النِّسَاءَ", t: "عورتیں", t_ro: "Auratein", t_hi: "औरतें", t_en: "Women" },
        { a: "وَلَد", r: "Walad", u: "اولاد", u_ro: "Aulaad", u_hi: "औलाद", u_en: "Child, offspring", m: "الْوَلَدَ", t: "بیٹا", t_ro: "Beta", t_hi: "बेटा", t_en: "Son" }
    ] },
    { day: 22, words: [
        { a: "ابْن", r: "Ibn", u: "بیٹا", u_ro: "Beta", u_hi: "बेटा", u_en: "Son", m: "الِابْنُ", t: "بیٹا", t_ro: "Beta", t_hi: "बेटा", t_en: "Son" },
        { a: "بِنْت", r: "Bint", u: "بیٹی", u_ro: "Beti", u_hi: "बेटी", u_en: "Daughter", m: "الْبِنْتُ", t: "بیٹی", t_ro: "Beti", t_hi: "बेटी", t_en: "Daughter" },
        { a: "أَب", r: "Ab", u: "باپ", u_ro: "Baap", u_hi: "बाप", u_en: "Father", m: "الْأَبُ", t: "باپ", t_ro: "Baap", t_hi: "बाप", t_en: "Father" },
        { a: "أُمّ", r: "Umm", u: "ماں", u_ro: "Maa", u_hi: "माँ", u_en: "Mother", m: "الْأُمُّ", t: "ماں", t_ro: "Maa", t_hi: "माँ", t_en: "Mother" },
        { a: "وَالِدَيْن", r: "Waalidayn", u: "ماں باپ", u_ro: "Maa baap", u_hi: "माँ-बाप", u_en: "Parents", m: "الْوَالِدَيْنِ", t: "ماں باپ", t_ro: "Maa baap", t_hi: "माँ-बाप", t_en: "Parents" },
        { a: "أَخ", r: "Akh", u: "بھائی", u_ro: "Bhai", u_hi: "भाई", u_en: "Brother", m: "الْأَخُ", t: "بھائی", t_ro: "Bhai", t_hi: "भाई", t_en: "Brother" },
        { a: "أُخْت", r: "Ukht", u: "بہن", u_ro: "Behen", u_hi: "बहन", u_en: "Sister", m: "الْأُخْتُ", t: "بہن", t_ro: "Behen", t_hi: "बहन", t_en: "Sister" },
        { a: "زَوْج", r: "Zawj", u: "شوہر یا بیوی", u_ro: "Shauhar ya biwi", u_hi: "शौहर या बीवी", u_en: "Spouse, pair", m: "الزَّوْجُ", t: "جوڑا", t_ro: "Joda", t_hi: "जोड़ा", t_en: "Couple" },
        { a: "أَهْل", r: "Ahl", u: "گھر والے", u_ro: "Ghar wale", u_hi: "घर वाले", u_en: "Family, people", m: "الْأَهْلُ", t: "اہل", t_ro: "Ahl", t_hi: "अहल", t_en: "Household" },
        { a: "قَوْم", r: "Qawm", u: "قوم", u_ro: "Qaum", u_hi: "क़ौम", u_en: "People, nation", m: "الْقَوْمُ", t: "لوگ", t_ro: "Log", t_hi: "लोग", t_en: "People" }
    ] },
    { day: 23, words: [
        { a: "ذُرِّيَّة", r: "Dhurriyyah", u: "اولاد", u_ro: "Aulaad", u_hi: "औलाद", u_en: "Offspring, descendants", m: "الذُّرِّيَّةَ", t: "نسل", t_ro: "Nasl", t_hi: "नस्ल", t_en: "Progeny" },
        { a: "طِفْل", r: "Tifl", u: "بچہ", u_ro: "Bachcha", u_hi: "बच्चा", u_en: "Child", m: "الطِّفْلُ", t: "بچہ", t_ro: "Bachcha", t_hi: "बच्चा", t_en: "Child" },
        { a: "يَتِيم", r: "Yateem", u: "یتیم", u_ro: "Yateem", u_hi: "यतीम", u_en: "Orphan", m: "الْيَتِيمَ", t: "یتیم", t_ro: "Yateem", t_hi: "यतीम", t_en: "Orphan" },
        { a: "مِسْكِين", r: "Miskeen", u: "مسکین", u_ro: "Miskeen", u_hi: "मिस्कीन", u_en: "Needy, poor person", m: "الْمِسْكِينَ", t: "غریب", t_ro: "Ghareeb", t_hi: "ग़रीब", t_en: "Poor" },
        { a: "عَبْد", r: "Abd", u: "بندہ", u_ro: "Banda", u_hi: "बंदा", u_en: "Servant, slave", m: "الْعَبْدُ", t: "غلام", t_ro: "Ghulaam", t_hi: "ग़ुलाम", t_en: "Slave" },
        { a: "مَلَائِكَة", r: "Malaa'ikah", u: "فرشتے", u_ro: "Farishte", u_hi: "फ़रिश्ते", u_en: "Angels", m: "الْمَلَائِكَةَ", t: "فرشتے", t_ro: "Farishte", t_hi: "फ़रिश्ते", t_en: "Angels" },
        { a: "جِنّ", r: "Jinn", u: "جن", u_ro: "Jinn", u_hi: "जिन्न", u_en: "Jinn", m: "الْجِنُّ", t: "جن", t_ro: "Jinn", t_hi: "जिन्न", t_en: "Jinn" },
        { a: "شَيْطَان", r: "Shaytaan", u: "شیطان", u_ro: "Shaitaan", u_hi: "शैतान", u_en: "Satan", m: "الشَّيْطَانُ", t: "شیطان", t_ro: "Shaitaan", t_hi: "शैतान", t_en: "Satan" },
        { a: "نَبِيّ", r: "Nabiyy", u: "نبی", u_ro: "Nabi", u_hi: "नबी", u_en: "Prophet", m: "النَّبِيُّ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "رَسُول", r: "Rasool", u: "رسول", u_ro: "Rasool", u_hi: "रसूल", u_en: "Messenger", m: "الرَّسُولُ", t: "رسول", t_ro: "Rasool", t_hi: "रसूल", t_en: "Messenger" }
    ] },
    { day: 24, words: [
        { a: "عَدُوّ", r: "Aduww", u: "دشمن", u_ro: "Dushman", u_hi: "दुश्मन", u_en: "Enemy", m: "الْعَدُوُّ", t: "دشمن", t_ro: "Dushman", t_hi: "दुश्मन", t_en: "Enemy" },
        { a: "صَاحِب", r: "Saahib", u: "ساتھی", u_ro: "Saathi", u_hi: "साथी", u_en: "Companion", m: "الصَّاحِبُ", t: "ساتھی", t_ro: "Saathi", t_hi: "साथी", t_en: "Companion" },
        { a: "مُؤْمِن", r: "Mu'min", u: "ایمان والا", u_ro: "Imaan wala", u_hi: "ईमान वाला", u_en: "Believer", m: "الْمُؤْمِنُ", t: "مومن", t_ro: "Momin", t_hi: "मोमिन", t_en: "Believer" },
        { a: "كَافِر", r: "Kaafir", u: "انکار کرنے والا", u_ro: "Inkaar karne wala", u_hi: "इनकार करने वाला", u_en: "Disbeliever", m: "الْكَافِرُ", t: "کافر", t_ro: "Kaafir", t_hi: "काफ़िर", t_en: "Disbeliever" },
        { a: "مُنَافِق", r: "Munaafiq", u: "منافق", u_ro: "Munaafiq", u_hi: "मुनाफ़िक़", u_en: "Hypocrite", m: "الْمُنَافِقُ", t: "منافق", t_ro: "Munaafiq", t_hi: "मुनाफ़िक़", t_en: "Hypocrite" },
        { a: "مُسْلِم", r: "Muslim", u: "مسلمان", u_ro: "Musalmaan", u_hi: "मुसलमान", u_en: "Muslim", m: "الْمُسْلِمُ", t: "مسلمان", t_ro: "Musalmaan", t_hi: "मुसलमान", t_en: "Muslim" },
        { a: "مُشْرِك", r: "Mushrik", u: "مشرک", u_ro: "Mushrik", u_hi: "मुशरिक", u_en: "Polytheist", m: "الْمُشْرِكُ", t: "مشرک", t_ro: "Mushrik", t_hi: "मुशरिक", t_en: "Polytheist" },
        { a: "ظَالِم", r: "Zalim", u: "ظالم", u_ro: "Zaalim", u_hi: "ज़ालिम", u_en: "Wrongdoer", m: "الظَّالِمُ", t: "ظالم", t_ro: "Zaalim", t_hi: "ज़ालिम", t_en: "Oppressor" },
        { a: "مُتَّقِي", r: "Muttaqi", u: "پرہیزگار", u_ro: "Parhezgaar", u_hi: "परहेज़गार", u_en: "God-fearing", m: "الْمُتَّقِي", t: "متقی", t_ro: "Muttaqi", t_hi: "मुत्तक़ी", t_en: "Pious" },
        { a: "صَالِح", r: "Saalih", u: "نیک", u_ro: "Nek", u_hi: "नेक", u_en: "Righteous", m: "الصَّالِحُ", t: "نیک", t_ro: "Nek", t_hi: "नेक", t_en: "Good" }
    ] },
    { day: 25, words: [
        { a: "مُحْسِن", r: "Muhsin", u: "نیکی کرنے والا", u_ro: "Neki karne wala", u_hi: "नेकी करने वाला", u_en: "Doer of good", m: "الْمُحْسِنُ", t: "نیک", t_ro: "Nek", t_hi: "नेक", t_en: "Good" },
        { a: "مُجْرِم", r: "Mujrim", u: "مجرم", u_ro: "Mujrim", u_hi: "मुजरिम", u_en: "Criminal, sinner", m: "الْمُجْرِمُ", t: "گنہگار", t_ro: "Gunahgaar", t_hi: "गुनाहगार", t_en: "Sinner" },
        { a: "فَاسِق", r: "Faasiq", u: "نافرمان", u_ro: "Nafarmaan", u_hi: "नाफ़रमान", u_en: "Disobedient", m: "الْفَاسِقُ", t: "نافرمان", t_ro: "Nafarmaan", t_hi: "नाफ़रमान", t_en: "Disobedient" },
        { a: "عَالِم", r: "Aalim", u: "عالم", u_ro: "Aalim", u_hi: "आलिम", u_en: "Knowledgeable, scholar", m: "الْعَالِمُ", t: "جاننے والا", t_ro: "Jaanne wala", t_hi: "जानने वाला", t_en: "Knower" },
        { a: "جَاهِل", r: "Jaahil", u: "نادان", u_ro: "Naadaan", u_hi: "नादान", u_en: "Ignorant", m: "الْجَاهِلُ", t: "جاہل", t_ro: "Jaahil", t_hi: "जाहिल", t_en: "Ignorant" },
        { a: "رَأْس", r: "Ra's", u: "سر", u_ro: "Sar", u_hi: "सर", u_en: "Head", m: "الرَّأْسُ", t: "سر", t_ro: "Sar", t_hi: "सर", t_en: "Head" },
        { a: "وَجْه", r: "Wajh", u: "چہرہ", u_ro: "Chehra", u_hi: "चेहरा", u_en: "Face", m: "الْوَجْهُ", t: "چہرہ", t_ro: "Chehra", t_hi: "चेहरा", t_en: "Face" },
        { a: "عَيْن", r: "Ayn", u: "آنکھ", u_ro: "Aankh", u_hi: "आँख", u_en: "Eye", m: "الْعَيْنُ", t: "آنکھ", t_ro: "Aankh", t_hi: "आँख", t_en: "Eye" },
        { a: "أُذُن", r: "Udhun", u: "کان", u_ro: "Kaan", u_hi: "कान", u_en: "Ear", m: "الْأُذُنُ", t: "کان", t_ro: "Kaan", t_hi: "कान", t_en: "Ear" },
        { a: "أَنْف", r: "Anf", u: "ناک", u_ro: "Naak", u_hi: "नाक", u_en: "Nose", m: "الْأَنْفُ", t: "ناک", t_ro: "Naak", t_hi: "नाक", t_en: "Nose" }
    ] },
    { day: 26, words: [
        { a: "فَم", r: "Fam", u: "منہ", u_ro: "Munh", u_hi: "मुँह", u_en: "Mouth", m: "الْفَمُ", t: "منہ", t_ro: "Munh", t_hi: "मुँह", t_en: "Mouth" },
        { a: "لِسَان", r: "Lisaan", u: "زبان", u_ro: "Zubaan", u_hi: "ज़ुबान", u_en: "Tongue", m: "اللِّسَانُ", t: "زبان", t_ro: "Zubaan", t_hi: "ज़ुबान", t_en: "Tongue" },
        { a: "سِنّ", r: "Sinn", u: "دانت", u_ro: "Daant", u_hi: "दाँत", u_en: "Tooth", m: "السِّنُّ", t: "دانت", t_ro: "Daant", t_hi: "दाँत", t_en: "Tooth" },
        { a: "يَد", r: "Yad", u: "ہاتھ", u_ro: "Haath", u_hi: "हाथ", u_en: "Hand", m: "الْيَدُ", t: "ہاتھ", t_ro: "Haath", t_hi: "हाथ", t_en: "Hand" },
        { a: "أَرْجُل", r: "Arjul", u: "پاؤں", u_ro: "Paaon", u_hi: "पाँव", u_en: "Feet, legs", m: "الْأَرْجُلُ", t: "پاؤں", t_ro: "Paaon", t_hi: "पाँव", t_en: "Feet" },
        { a: "قَلْب", r: "Qalb", u: "دل", u_ro: "Dil", u_hi: "दिल", u_en: "Heart", m: "الْقَلْبُ", t: "دل", t_ro: "Dil", t_hi: "दिल", t_en: "Heart" },
        { a: "صَدْر", r: "Sadr", u: "سینہ", u_ro: "Seena", u_hi: "सीना", u_en: "Chest", m: "الصَّدْرُ", t: "سینہ", t_ro: "Seena", t_hi: "सीना", t_en: "Chest" },
        { a: "بَطْن", r: "Batn", u: "پیٹ", u_ro: "Pet", u_hi: "पेट", u_en: "Belly", m: "الْبَطْنُ", t: "پیٹ", t_ro: "Pet", t_hi: "पेट", t_en: "Belly" },
        { a: "ظَهْر", r: "Zahr", u: "پیٹھ", u_ro: "Peeth", u_hi: "पीठ", u_en: "Back", m: "الظَّهْرُ", t: "پیٹھ", t_ro: "Peeth", t_hi: "पीठ", t_en: "Back" },
        { a: "عُنُق", r: "Unuq", u: "گردن", u_ro: "Gardan", u_hi: "गर्दन", u_en: "Neck", m: "الْعُنُقُ", t: "گردن", t_ro: "Gardan", t_hi: "गर्दन", t_en: "Neck" }
    ] },
    { day: 27, words: [
        { a: "جِلْد", r: "Jild", u: "کھال", u_ro: "Khaal", u_hi: "खाल", u_en: "Skin", m: "الْجِلْدُ", t: "کھال", t_ro: "Khaal", t_hi: "खाल", t_en: "Skin" },
        { a: "عَظْم", r: "Azm", u: "ہڈی", u_ro: "Haddi", u_hi: "हड्डी", u_en: "Bone", m: "الْعَظْمُ", t: "ہڈی", t_ro: "Haddi", t_hi: "हड्डी", t_en: "Bone" },
        { a: "دَم", r: "Dam", u: "خون", u_ro: "Khoon", u_hi: "ख़ून", u_en: "Blood", m: "الدَّمُ", t: "خون", t_ro: "Khoon", t_hi: "ख़ून", t_en: "Blood" },
        { a: "رُوح", r: "Rooh", u: "روح", u_ro: "Rooh", u_hi: "रूह", u_en: "Soul, spirit", m: "الرُّوحُ", t: "روح", t_ro: "Rooh", t_hi: "रूह", t_en: "Spirit" },
        { a: "جَسَد", r: "Jasad", u: "جسم", u_ro: "Jism", u_hi: "जिस्म", u_en: "Body", m: "الْجَسَدُ", t: "جسم", t_ro: "Jism", t_hi: "जिस्म", t_en: "Body" },
        { a: "سَمْع", r: "Sam'", u: "سماعت", u_ro: "Samaa-at", u_hi: "समाअत", u_en: "Hearing", m: "السَّمْعُ", t: "سننا", t_ro: "Sunna", t_hi: "सुनना", t_en: "Hearing" },
        { a: "بَصَر", r: "Basar", u: "نظر", u_ro: "Nazar", u_hi: "नज़र", u_en: "Sight", m: "الْبَصَرُ", t: "دیکھنا", t_ro: "Dekhna", t_hi: "देखना", t_en: "Sight" },
        { a: "فُؤَاد", r: "Fu'aad", u: "دل", u_ro: "Dil", u_hi: "दिल", u_en: "Heart", m: "الْفُؤَادُ", t: "دل", t_ro: "Dil", t_hi: "दिल", t_en: "Heart" },
        { a: "نَاصِيَة", r: "Naasiyah", u: "پیشانی", u_ro: "Peshaani", u_hi: "पेशानी", u_en: "Forelock", m: "النَّاصِيَةُ", t: "پیشانی", t_ro: "Peshaani", t_hi: "पेशानी", t_en: "Forehead" },
        { a: "أَصَابِع", r: "Asaabi'", u: "انگلیاں", u_ro: "Ungliyaan", u_hi: "उँगलियाँ", u_en: "Fingers", m: "الْأَصَابِعُ", t: "انگلی", t_ro: "Ungli", t_hi: "उँगली", t_en: "Finger" }
    ] },
    { day: 28, words: [
        { a: "إِيمَان", r: "Eemaan", u: "ایمان", u_ro: "Imaan", u_hi: "ईमान", u_en: "Faith", m: "الْإِيمَانُ", t: "ایمان", t_ro: "Imaan", t_hi: "ईमान", t_en: "Faith" },
        { a: "صَلَاة", r: "Salaah", u: "نماز", u_ro: "Namaaz", u_hi: "नमाज़", u_en: "Prayer, Salah", m: "الصَّلَاةُ", t: "نماز", t_ro: "Namaaz", t_hi: "नमाज़", t_en: "Prayer" },
        { a: "زَكَاة", r: "Zakaah", u: "زکوٰۃ", u_ro: "Zakaat", u_hi: "ज़कात", u_en: "Zakat, obligatory charity", m: "الزَّكَاةُ", t: "زکوٰۃ", t_ro: "Zakaat", t_hi: "ज़कात", t_en: "Zakat" },
        { a: "صِيَام", r: "Siyaam", u: "روزہ", u_ro: "Roza", u_hi: "रोज़ा", u_en: "Fasting", m: "الصِّيَامُ", t: "روزہ", t_ro: "Roza", t_hi: "रोज़ा", t_en: "Fasting" },
        { a: "حَجّ", r: "Hajj", u: "حج", u_ro: "Hajj", u_hi: "हज", u_en: "Hajj, pilgrimage", m: "الْحَجُّ", t: "حج", t_ro: "Hajj", t_hi: "हज", t_en: "Hajj" },
        { a: "عُمْرَة", r: "Umrah", u: "عمرہ", u_ro: "Umrah", u_hi: "उमरा", u_en: "Umrah", m: "الْعُمْرَةُ", t: "عمرہ", t_ro: "Umrah", t_hi: "उमरा", t_en: "Umrah" },
        { a: "دِين", r: "Deen", u: "دین", u_ro: "Deen", u_hi: "दीन", u_en: "Religion", m: "الدِّينُ", t: "دین", t_ro: "Deen", t_hi: "दीन", t_en: "Religion" },
        { a: "إِسْلَام", r: "Islaam", u: "اسلام", u_ro: "Islaam", u_hi: "इस्लाम", u_en: "Islam, submission", m: "الْإِسْلَامُ", t: "اسلام", t_ro: "Islaam", t_hi: "इस्लाम", t_en: "Islam" },
        { a: "قُرْآن", r: "Qur'aan", u: "قرآن", u_ro: "Quraan", u_hi: "क़ुरआन", u_en: "Quran", m: "الْقُرْآنُ", t: "قرآن", t_ro: "Quraan", t_hi: "क़ुरआन", t_en: "Quran" },
        { a: "آيَة", r: "Aayah", u: "آیت", u_ro: "Aayat", u_hi: "आयत", u_en: "Verse, sign", m: "الْآيَةُ", t: "آیت", t_ro: "Aayat", t_hi: "आयत", t_en: "Verse" }
    ] },
    { day: 29, words: [
        { a: "سُورَة", r: "Soorah", u: "سورت", u_ro: "Soorat", u_hi: "सूरत", u_en: "Chapter, Surah", m: "السُّورَةُ", t: "سورت", t_ro: "Soorat", t_hi: "सूरत", t_en: "Surah" },
        { a: "وَحْي", r: "Wahy", u: "وحی", u_ro: "Wahi", u_hi: "वही", u_en: "Revelation", m: "الْوَحْيُ", t: "وحی", t_ro: "Wahi", t_hi: "वही", t_en: "Revelation" },
        { a: "ذِكْر", r: "Dhikr", u: "ذکر", u_ro: "Zikr", u_hi: "ज़िक्र", u_en: "Remembrance", m: "الذِّكْرُ", t: "یاد", t_ro: "Yaad", t_hi: "याद", t_en: "Remembrance" },
        { a: "دُعَاء", r: "Du'aa'", u: "دعا", u_ro: "Dua", u_hi: "दुआ", u_en: "Supplication", m: "الدُّعَاءُ", t: "دعا", t_ro: "Dua", t_hi: "दुआ", t_en: "Dua" },
        { a: "رُكُوع", r: "Ruku'", u: "رکوع", u_ro: "Rukoo", u_hi: "रुकू", u_en: "Bowing, ruku", m: "الرُّكُوعُ", t: "رکوع", t_ro: "Rukoo", t_hi: "रुकू", t_en: "Ruku" },
        { a: "سُجُود", r: "Sujood", u: "سجدہ", u_ro: "Sajda", u_hi: "सज्दा", u_en: "Prostration", m: "السُّجُودُ", t: "سجدہ", t_ro: "Sajda", t_hi: "सज्दा", t_en: "Sujood" },
        { a: "تَسْبِيح", r: "Tasbeeh", u: "تسبیح", u_ro: "Tasbeeh", u_hi: "तस्बीह", u_en: "Glorification", m: "التَّسْبِيحُ", t: "تسبیح", t_ro: "Tasbeeh", t_hi: "तस्बीह", t_en: "Tasbih" },
        { a: "حَمْد", r: "Hamd", u: "حمد", u_ro: "Hamd", u_hi: "हम्द", u_en: "Praise", m: "الْحَمْدُ", t: "تعریف", t_ro: "Taareef", t_hi: "तारीफ़", t_en: "Praise" },
        { a: "شُكْر", r: "Shukr", u: "شکر", u_ro: "Shukr", u_hi: "शुक्र", u_en: "Gratitude", m: "الشُّكْرُ", t: "شکر", t_ro: "Shukr", t_hi: "शुक्र", t_en: "Gratitude" },
        { a: "صَبْر", r: "Sabr", u: "صبر", u_ro: "Sabr", u_hi: "सब्र", u_en: "Patience", m: "الصَّبْرُ", t: "صبر", t_ro: "Sabr", t_hi: "सब्र", t_en: "Patience" }
    ] },
    { day: 30, words: [
        { a: "تَوْبَة", r: "Tawbah", u: "توبہ", u_ro: "Tauba", u_hi: "तौबा", u_en: "Repentance", m: "التَّوْبَةُ", t: "توبہ", t_ro: "Tauba", t_hi: "तौबा", t_en: "Repentance" },
        { a: "تَقْوَى", r: "Taqwaa", u: "تقویٰ", u_ro: "Taqwa", u_hi: "तक़वा", u_en: "God-consciousness", m: "التَّقْوَى", t: "تقویٰ", t_ro: "Taqwa", t_hi: "तक़वा", t_en: "Taqwa" },
        { a: "تَوَكُّل", r: "Tawakkul", u: "توکل", u_ro: "Tawakkul", u_hi: "तवक्कुल", u_en: "Trust in Allah", m: "التَّوَكُّلُ", t: "بھروسہ", t_ro: "Bharosa", t_hi: "भरोसा", t_en: "Reliance" },
        { a: "إِخْلَاص", r: "Ikhlaas", u: "اخلاص", u_ro: "Ikhlaas", u_hi: "इख़लास", u_en: "Sincerity", m: "الْإِخْلَاصُ", t: "اخلاص", t_ro: "Ikhlaas", t_hi: "इख़लास", t_en: "Ikhlas" },
        { a: "هُدَى", r: "Hudaa", u: "ہدایت", u_ro: "Hidaayat", u_hi: "हिदायत", u_en: "Guidance", m: "الْهُدَى", t: "ہدایت", t_ro: "Hidaayat", t_hi: "हिदायत", t_en: "Guidance" },
        { a: "ضَلَال", r: "Dalaal", u: "گمراہی", u_ro: "Gumraahi", u_hi: "गुमराही", u_en: "Misguidance", m: "الضَّلَالُ", t: "گمراہی", t_ro: "Gumraahi", t_hi: "गुमराही", t_en: "Straying" },
        { a: "طَهَارَة", r: "Tahaarah", u: "پاکیزگی", u_ro: "Paakeezgi", u_hi: "पाकीज़गी", u_en: "Purity", m: "الطَّهَارَةُ", t: "پاکیزگی", t_ro: "Paakeezgi", t_hi: "पाकीज़गी", t_en: "Purity" },
        { a: "قِبْلَة", r: "Qiblah", u: "قبلہ", u_ro: "Qibla", u_hi: "क़िबला", u_en: "Direction of prayer", m: "الْقِبْلَةُ", t: "قبلہ", t_ro: "Qibla", t_hi: "क़िबला", t_en: "Qibla" },
        { a: "عِبَادَة", r: "Ibaadah", u: "عبادت", u_ro: "Ibaadat", u_hi: "इबादत", u_en: "Worship", m: "الْعِبَادَةُ", t: "عبادت", t_ro: "Ibaadat", t_hi: "इबादत", t_en: "Worship" },
        { a: "جِهَاد", r: "Jihaad", u: "جہاد", u_ro: "Jihaad", u_hi: "जिहाद", u_en: "Striving, jihad", m: "الْجِهَادُ", t: "کوشش", t_ro: "Koshish", t_hi: "कोशिश", t_en: "Striving" }
    ] },
    { day: 31, words: [
        { a: "صَدَقَة", r: "Sadaqah", u: "صدقہ", u_ro: "Sadqa", u_hi: "सदक़ा", u_en: "Charity", m: "الصَّدَقَةُ", t: "صدقہ", t_ro: "Sadqa", t_hi: "सदक़ा", t_en: "Charity" },
        { a: "إِنْفَاق", r: "Infaaq", u: "خرچ کرنا", u_ro: "Kharch karna", u_hi: "ख़र्च करना", u_en: "Spending", m: "الْإِنْفَاقُ", t: "خرچ", t_ro: "Kharch", t_hi: "ख़र्च", t_en: "Spending" },
        { a: "إِحْسَان", r: "Ihsaan", u: "احسان", u_ro: "Ehsaan", u_hi: "एहसान", u_en: "Excellence, kindness", m: "الْإِحْسَانُ", t: "نیکی", t_ro: "Neki", t_hi: "नेकी", t_en: "Doing good" },
        { a: "مَعْرُوف", r: "Ma'roof", u: "اچھی بات", u_ro: "Achchhi baat", u_hi: "अच्छी बात", u_en: "Good, righteous deed", m: "الْمَعْرُوفُ", t: "بھلائی", t_ro: "Bhalaai", t_hi: "भलाई", t_en: "Goodness" },
        { a: "مُنْكَر", r: "Munkar", u: "بری بات", u_ro: "Buri baat", u_hi: "बुरी बात", u_en: "Wrong, evil deed", m: "الْمُنْكَرُ", t: "برائی", t_ro: "Buraai", t_hi: "बुराई", t_en: "Evil" },
        { a: "حَرَام", r: "Haraam", u: "حرام", u_ro: "Haraam", u_hi: "हराम", u_en: "Forbidden", m: "الْحَرَامُ", t: "حرام", t_ro: "Haraam", t_hi: "हराम", t_en: "Forbidden" },
        { a: "حَلَال", r: "Halaal", u: "حلال", u_ro: "Halaal", u_hi: "हलाल", u_en: "Lawful, permitted", m: "الْحَلَالُ", t: "حلال", t_ro: "Halaal", t_hi: "हलाल", t_en: "Permitted" },
        { a: "رِبَا", r: "Ribaa", u: "سود", u_ro: "Sood", u_hi: "सूद", u_en: "Usury, interest", m: "الرِّبَا", t: "سود", t_ro: "Sood", t_hi: "सूद", t_en: "Interest" },
        { a: "نِكَاح", r: "Nikaah", u: "نکاح", u_ro: "Nikaah", u_hi: "निकाह", u_en: "Marriage", m: "النِّكَاحُ", t: "نکاح", t_ro: "Nikaah", t_hi: "निकाह", t_en: "Marriage" },
        { a: "طَلَاق", r: "Talaaq", u: "طلاق", u_ro: "Talaaq", u_hi: "तलाक़", u_en: "Divorce", m: "الطَّلَاقُ", t: "طلاق", t_ro: "Talaaq", t_hi: "तलाक़", t_en: "Divorce" }
    ] },
    { day: 32, words: [
        { a: "وَصِيَّة", r: "Wasiyyah", u: "وصیت", u_ro: "Wasiyyat", u_hi: "वसीयत", u_en: "Will, bequest", m: "الْوَصِيَّةُ", t: "وصیت", t_ro: "Wasiyyat", t_hi: "वसीयत", t_en: "Bequest" },
        { a: "شَهْر", r: "Shahr", u: "مہینہ", u_ro: "Maheena", u_hi: "महीना", u_en: "Month", m: "الشَّهْرُ", t: "مہینہ", t_ro: "Maheena", t_hi: "महीना", t_en: "Month" },
        { a: "رَمَضَان", r: "Ramadaan", u: "رمضان", u_ro: "Ramzaan", u_hi: "रमज़ान", u_en: "Ramadan", m: "رَمَضَانُ", t: "رمضان", t_ro: "Ramzaan", t_hi: "रमज़ान", t_en: "Month of fasting" },
        { a: "آخِرَة", r: "Aakhirah", u: "آخرت", u_ro: "Aakhirat", u_hi: "आख़िरत", u_en: "Hereafter", m: "الْآخِرَةُ", t: "آخرت", t_ro: "Aakhirat", t_hi: "आख़िरत", t_en: "The next life" },
        { a: "دُنْيَا", r: "Dunyaa", u: "دنیا", u_ro: "Duniya", u_hi: "दुनिया", u_en: "This world", m: "الدُّنْيَا", t: "دنیا", t_ro: "Duniya", t_hi: "दुनिया", t_en: "Worldly life" },
        { a: "جَنَّة", r: "Jannah", u: "جنت", u_ro: "Jannat", u_hi: "जन्नत", u_en: "Paradise", m: "الْجَنَّةُ", t: "جنت", t_ro: "Jannat", t_hi: "जन्नत", t_en: "Paradise" },
        { a: "جَنَّات", r: "Jannaat", u: "باغات", u_ro: "Baaghaat", u_hi: "बाग़ात", u_en: "Gardens", m: "الْجَنَّاتُ", t: "باغ", t_ro: "Baagh", t_hi: "बाग़", t_en: "Gardens" },
        { a: "جَهَنَّم", r: "Jahannam", u: "جہنم", u_ro: "Jahannam", u_hi: "जहन्नुम", u_en: "Hell", m: "جَهَنَّمُ", t: "جہنم", t_ro: "Jahannam", t_hi: "जहन्नुम", t_en: "Hellfire" },
        { a: "جَحِيم", r: "Jaheem", u: "بھڑکتی آگ", u_ro: "Bhadakti aag", u_hi: "भड़कती आग", u_en: "Blazing Fire", m: "الْجَحِيمُ", t: "آگ", t_ro: "Aag", t_hi: "आग", t_en: "Blazing fire" },
        { a: "سَعِير", r: "Sa'eer", u: "دہکتی آگ", u_ro: "Dahakti aag", u_hi: "दहकती आग", u_en: "Flaming Fire", m: "السَّعِيرُ", t: "آگ", t_ro: "Aag", t_hi: "आग", t_en: "Blazing fire" }
    ] },
    { day: 33, words: [
        { a: "عَذَاب", r: "Azaab", u: "عذاب", u_ro: "Azaab", u_hi: "अज़ाब", u_en: "Punishment", m: "الْعَذَابُ", t: "سزا", t_ro: "Saza", t_hi: "सज़ा", t_en: "Punishment" },
        { a: "أَجْر", r: "Ajr", u: "اجر", u_ro: "Ajr", u_hi: "अज्र", u_en: "Reward", m: "الْأَجْرُ", t: "ثواب", t_ro: "Sawaab", t_hi: "सवाब", t_en: "Reward" },
        { a: "جَزَاء", r: "Jazaa'", u: "بدلہ", u_ro: "Badla", u_hi: "बदला", u_en: "Recompense", m: "الْجَزَاءُ", t: "بدلہ", t_ro: "Badla", t_hi: "बदला", t_en: "Recompense" },
        { a: "حِسَاب", r: "Hisaab", u: "حساب", u_ro: "Hisaab", u_hi: "हिसाब", u_en: "Reckoning", m: "الْحِسَابُ", t: "حساب", t_ro: "Hisaab", t_hi: "हिसाब", t_en: "Accounting" },
        { a: "قِيَامَة", r: "Qiyaamah", u: "قیامت", u_ro: "Qayaamat", u_hi: "क़यामत", u_en: "Resurrection", m: "الْقِيَامَةُ", t: "قیامت", t_ro: "Qayaamat", t_hi: "क़यामत", t_en: "Day of Judgment" },
        { a: "سَاعَة", r: "Saa'ah", u: "گھڑی", u_ro: "Ghadi", u_hi: "घड़ी", u_en: "The Hour", m: "السَّاعَةُ", t: "وقت", t_ro: "Waqt", t_hi: "वक़्त", t_en: "The appointed time" },
        { a: "مَوْت", r: "Mawt", u: "موت", u_ro: "Maut", u_hi: "मौत", u_en: "Death", m: "الْمَوْتُ", t: "موت", t_ro: "Maut", t_hi: "मौत", t_en: "Death" },
        { a: "حَيَاة", r: "Hayaat", u: "زندگی", u_ro: "Zindagi", u_hi: "ज़िंदगी", u_en: "Life", m: "الْحَيَاةُ", t: "زندگی", t_ro: "Zindagi", t_hi: "ज़िंदगी", t_en: "Life" },
        { a: "قَبْر", r: "Qabr", u: "قبر", u_ro: "Qabr", u_hi: "क़ब्र", u_en: "Grave", m: "الْقَبْرُ", t: "قبر", t_ro: "Qabr", t_hi: "क़ब्र", t_en: "Grave" },
        { a: "صُور", r: "Soor", u: "صور", u_ro: "Soor", u_hi: "सूर", u_en: "The Trumpet", m: "الصُّورُ", t: "صور", t_ro: "Soor", t_hi: "सूर", t_en: "The Trumpet" }
    ] },
    { day: 34, words: [
        { a: "شَفَاعَة", r: "Shafaa'ah", u: "سفارش", u_ro: "Sifaarish", u_hi: "सिफ़ारिश", u_en: "Intercession", m: "الشَّفَاعَةُ", t: "سفارش", t_ro: "Sifaarish", t_hi: "सिफ़ारिश", t_en: "Intercession" },
        { a: "فِرْدَوْس", r: "Firdaws", u: "فردوس", u_ro: "Firdaus", u_hi: "फ़िरदौस", u_en: "Firdaus (highest Paradise)", m: "الْفِرْدَوْسُ", t: "جنت", t_ro: "Jannat", t_hi: "जन्नत", t_en: "Paradise" },
        { a: "عَدْن", r: "Adn", u: "ہمیشہ رہنے کے باغات", u_ro: "Hamesha rehne ke baaghaat", u_hi: "हमेशा रहने के बाग़ात", u_en: "Eden (Paradise)", m: "عَدْنٍ", t: "جنت", t_ro: "Jannat", t_hi: "जन्नत", t_en: "Paradise" },
        { a: "خُلْد", r: "Khuld", u: "ہمیشگی", u_ro: "Hamesgi", u_hi: "हमेशगी", u_en: "Eternity", m: "الْخُلْدُ", t: "ہمیشہ", t_ro: "Hamesha", t_hi: "हमेशा", t_en: "Forever" },
        { a: "خَالِدِين", r: "Khaalideen", u: "ہمیشہ رہنے والے", u_ro: "Hamesha rehne wale", u_hi: "हमेशा रहने वाले", u_en: "Abiding forever", m: "خَالِدِينَ", t: "ہمیشہ", t_ro: "Hamesha", t_hi: "हमेशा", t_en: "Everlasting" },
        { a: "فَوْز", r: "Fawz", u: "کامیابی", u_ro: "Kaamyaabi", u_hi: "कामयाबी", u_en: "Triumph, success", m: "الْفَوْزُ", t: "کامیابی", t_ro: "Kaamyaabi", t_hi: "कामयाबी", t_en: "Success" },
        { a: "فَلَاح", r: "Falaah", u: "کامیابی", u_ro: "Kaamyaabi", u_hi: "कामयाबी", u_en: "Success, salvation", m: "الْفَلَاحُ", t: "بھلائی", t_ro: "Bhalaai", t_hi: "भलाई", t_en: "Success" },
        { a: "خُسْرَان", r: "Khusraan", u: "نقصان", u_ro: "Nuqsaan", u_hi: "नुक़सान", u_en: "Loss", m: "الْخُسْرَانُ", t: "نقصان", t_ro: "Nuqsaan", t_hi: "नुक़सान", t_en: "Loss" },
        { a: "هَلَاك", r: "Halaak", u: "ہلاکت", u_ro: "Halaakat", u_hi: "हलाकत", u_en: "Destruction", m: "الْهَلَاكُ", t: "تباہی", t_ro: "Tabaahi", t_hi: "तबाही", t_en: "Destruction" },
        { a: "نَجَاة", r: "Najaah", u: "نجات", u_ro: "Najaat", u_hi: "नजात", u_en: "Salvation, deliverance", m: "النَّجَاةُ", t: "نجات", t_ro: "Najaat", t_hi: "नजात", t_en: "Deliverance" }
    ] },
    { day: 35, words: [
        { a: "حَشْر", r: "Hashr", u: "جمع کیا جانا", u_ro: "Jama kiya jaana", u_hi: "जमा किया जाना", u_en: "Gathering", m: "الْحَشْرُ", t: "جمع", t_ro: "Jama", t_hi: "जमा", t_en: "Gathering" },
        { a: "يَوْمَ الدِّين", r: "Yawm ad-Deen", u: "بدلے کا دن", u_ro: "Badle ka din", u_hi: "बदले का दिन", u_en: "Day of Recompense", m: "يَوْمِ الدِّينِ", t: "قیامت", t_ro: "Qayaamat", t_hi: "क़यामत", t_en: "Judgment Day" },
        { a: "غَيْب", r: "Ghayb", u: "غیب", u_ro: "Ghaib", u_hi: "ग़ैब", u_en: "The Unseen", m: "الْغَيْبِ", t: "چھپی چیز", t_ro: "Chhupi cheez", t_hi: "छुपी चीज़", t_en: "Hidden matter" },
        { a: "عَرْش", r: "Arsh", u: "عرش", u_ro: "Arsh", u_hi: "अर्श", u_en: "The Throne", m: "الْعَرْشِ", t: "تخت", t_ro: "Takht", t_hi: "तख़्त", t_en: "The Throne" },
        { a: "كُرْسِيّ", r: "Kursiyy", u: "کرسی", u_ro: "Kursi", u_hi: "कुर्सी", u_en: "The Footstool (Kursi)", m: "الْكُرْسِيُّ", t: "کرسی", t_ro: "Kursi", t_hi: "कुर्सी", t_en: "The Kursi" },
        { a: "زَقُّوم", r: "Zaqqoom", u: "زقوم", u_ro: "Zaqqoom", u_hi: "ज़क़्क़ूम", u_en: "Zaqqum (tree of Hell)", m: "الزَّقُّومِ", t: "درخت", t_ro: "Darakht", t_hi: "दरख़्त", t_en: "Tree of Hell" },
        { a: "حَمِيم", r: "Hameem", u: "کھولتا پانی", u_ro: "Kholta paani", u_hi: "खौलता पानी", u_en: "Boiling water", m: "الْحَمِيمِ", t: "پانی", t_ro: "Paani", t_hi: "पानी", t_en: "Scalding water" },
        { a: "نَعِيم", r: "Na'eem", u: "نعمتیں", u_ro: "Nemtein", u_hi: "नेमतें", u_en: "Bliss, blessings", m: "النَّعِيمِ", t: "نعمت", t_ro: "Nemat", t_hi: "नेमत", t_en: "Blessings" },
        { a: "رِضْوَان", r: "Ridwaan", u: "رضا", u_ro: "Raza", u_hi: "रज़ा", u_en: "Pleasure, approval", m: "رِضْوَانٌ", t: "خوشی", t_ro: "Khushi", t_hi: "ख़ुशी", t_en: "Divine pleasure" },
        { a: "حُور", r: "Hoor", u: "حوریں", u_ro: "Hoorein", u_hi: "हूरें", u_en: "Houris", m: "حُورٌ", t: "حور", t_ro: "Hoor", t_hi: "हूर", t_en: "Maidens of Paradise" }
    ] },
    { day: 36, words: [
        { a: "أَنْهَار", r: "Anhaar", u: "نہریں", u_ro: "Nehrein", u_hi: "नहरें", u_en: "Rivers", m: "الْأَنْهَارُ", t: "نہریں", t_ro: "Nehrein", t_hi: "नहरें", t_en: "Rivers" },
        { a: "فَاكِهَة", r: "Faakihah", u: "میوہ", u_ro: "Meva", u_hi: "मेवा", u_en: "Fruit", m: "الْفَاكِهَةُ", t: "پھل", t_ro: "Phal", t_hi: "फल", t_en: "Fruit" },
        { a: "مُحَمَّد", r: "Muhammad", u: "محمد ﷺ", u_ro: "Muhammad ﷺ", u_hi: "मुहम्मद ﷺ", u_en: "Muhammad", m: "مُحَمَّدٌ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "The Prophet" },
        { a: "آدَم", r: "Aadam", u: "آدم علیہ السلام", u_ro: "Aadam alaihis-salaam", u_hi: "आदम अलैहिस्सलाम", u_en: "Adam", m: "آدَمُ", t: "پہلے انسان", t_ro: "Pehle insaan", t_hi: "पहले इंसान", t_en: "First human" },
        { a: "نُوح", r: "Nooh", u: "نوح علیہ السلام", u_ro: "Nooh alaihis-salaam", u_hi: "नूह अलैहिस्सलाम", u_en: "Nuh (Noah)", m: "نُوحٌ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "إِبْرَاهِيم", r: "Ibraaheem", u: "ابراہیم علیہ السلام", u_ro: "Ibraheem alaihis-salaam", u_hi: "इब्राहीम अलैहिस्सलाम", u_en: "Ibrahim (Abraham)", m: "إِبْرَاهِيمُ", t: "خلیل اللہ", t_ro: "Khaleelullah", t_hi: "ख़लीलुल्लाह", t_en: "Friend of Allah" },
        { a: "إِسْمَاعِيل", r: "Ismaa'eel", u: "اسماعیل علیہ السلام", u_ro: "Ismaeel alaihis-salaam", u_hi: "इस्माईल अलैहिस्सलाम", u_en: "Ismail (Ishmael)", m: "إِسْمَاعِيلُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "إِسْحَاق", r: "Is-haaq", u: "اسحاق علیہ السلام", u_ro: "Ishaaq alaihis-salaam", u_hi: "इसहाक़ अलैहिस्सलाम", u_en: "Ishaq (Isaac)", m: "إِسْحَاقُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "يَعْقُوب", r: "Ya'qoob", u: "یعقوب علیہ السلام", u_ro: "Yaqoob alaihis-salaam", u_hi: "याक़ूब अलैहिस्सलाम", u_en: "Yaqub (Jacob)", m: "يَعْقُوبُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "يُوسُف", r: "Yoosuf", u: "یوسف علیہ السلام", u_ro: "Yusuf alaihis-salaam", u_hi: "यूसुफ़ अलैहिस्सलाम", u_en: "Yusuf (Joseph)", m: "يُوسُفُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" }
    ] },
    { day: 37, words: [
        { a: "مُوسَى", r: "Moosaa", u: "موسیٰ علیہ السلام", u_ro: "Moosa alaihis-salaam", u_hi: "मूसा अलैहिस्सलाम", u_en: "Musa (Moses)", m: "مُوسَى", t: "کلیم اللہ", t_ro: "Kaleemullah", t_hi: "कलीमुल्लाह", t_en: "One Allah spoke to" },
        { a: "هَارُون", r: "Haaroon", u: "ہارون علیہ السلام", u_ro: "Haroon alaihis-salaam", u_hi: "हारून अलैहिस्सलाम", u_en: "Harun (Aaron)", m: "هَارُونُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "عِيسَى", r: "Eesaa", u: "عیسیٰ علیہ السلام", u_ro: "Eesa alaihis-salaam", u_hi: "ईसा अलैहिस्सलाम", u_en: "Isa (Jesus)", m: "عِيسَى", t: "روح اللہ", t_ro: "Roohullah", t_hi: "रूहुल्लाह", t_en: "Spirit from Allah" },
        { a: "مَرْيَم", r: "Maryam", u: "مریم علیہا السلام", u_ro: "Maryam alaihas-salaam", u_hi: "मरयम अलैहस्सलाम", u_en: "Maryam (Mary)", m: "مَرْيَمُ", t: "عورت", t_ro: "Aurat", t_hi: "औरत", t_en: "Woman" },
        { a: "دَاوُود", r: "Daawood", u: "داؤد علیہ السلام", u_ro: "Dawood alaihis-salaam", u_hi: "दाऊद अलैहिस्सलाम", u_en: "Dawud (David)", m: "دَاوُودُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "سُلَيْمَان", r: "Sulaymaan", u: "سلیمان علیہ السلام", u_ro: "Sulaiman alaihis-salaam", u_hi: "सुलैमान अलैहिस्सलाम", u_en: "Sulayman (Solomon)", m: "سُلَيْمَانُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "أَيُّوب", r: "Ayyoob", u: "ایوب علیہ السلام", u_ro: "Ayyoob alaihis-salaam", u_hi: "अय्यूब अलैहिस्सलाम", u_en: "Ayyub (Job)", m: "أَيُّوبُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "يُونُس", r: "Yoonus", u: "یونس علیہ السلام", u_ro: "Yoonus alaihis-salaam", u_hi: "यूनुस अलैहिस्सलाम", u_en: "Yunus (Jonah)", m: "يُونُسُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "زَكَرِيَّا", r: "Zakariyyaa", u: "زکریا علیہ السلام", u_ro: "Zakariyya alaihis-salaam", u_hi: "ज़करिया अलैहिस्सलाम", u_en: "Zakariyya (Zechariah)", m: "زَكَرِيَّا", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "يَحْيَى", r: "Yahyaa", u: "یحییٰ علیہ السلام", u_ro: "Yahya alaihis-salaam", u_hi: "यह्या अलैहिस्सलाम", u_en: "Yahya (John)", m: "يَحْيَى", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" }
    ] },
    { day: 38, words: [
        { a: "هُود", r: "Hood", u: "ہود علیہ السلام", u_ro: "Hood alaihis-salaam", u_hi: "हूद अलैहिस्सलाम", u_en: "Hud", m: "هُودٌ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "شُعَيْب", r: "Shu'ayb", u: "شعیب علیہ السلام", u_ro: "Shuaib alaihis-salaam", u_hi: "शुऐब अलैहिस्सलाम", u_en: "Shuayb", m: "شُعَيْبٌ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "لُوط", r: "Loot", u: "لوط علیہ السلام", u_ro: "Loot alaihis-salaam", u_hi: "लूत अलैहिस्सलाम", u_en: "Lut (Lot)", m: "لُوطٌ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "فِرْعَوْن", r: "Fir'awn", u: "فرعون", u_ro: "Firaun", u_hi: "फ़िरऔन", u_en: "Pharaoh", m: "فِرْعَوْنُ", t: "بادشاہ", t_ro: "Baadshaah", t_hi: "बादशाह", t_en: "King" },
        { a: "قَارُون", r: "Qaaroon", u: "قارون", u_ro: "Qaaroon", u_hi: "क़ारून", u_en: "Qarun (Korah)", m: "قَارُونُ", t: "دولت مند", t_ro: "Daulatmand", t_hi: "दौलतमंद", t_en: "Wealthy man" },
        { a: "لُقْمَان", r: "Luqmaan", u: "لقمان", u_ro: "Luqmaan", u_hi: "लुक़मान", u_en: "Luqman", m: "لُقْمَانُ", t: "حکیم", t_ro: "Hakeem", t_hi: "हकीम", t_en: "Wise man" },
        { a: "إِسْرَائِيل", r: "Israa'eel", u: "اسرائیل", u_ro: "Israaeel", u_hi: "इसराईल", u_en: "Israel", m: "إِسْرَائِيلَ", t: "یعقوب", t_ro: "Yaqoob", t_hi: "याक़ूब", t_en: "Yaqub" },
        { a: "مِصْر", r: "Misr", u: "مصر", u_ro: "Misr", u_hi: "मिस्र", u_en: "Egypt", m: "مِصْرَ", t: "ملک", t_ro: "Mulk", t_hi: "मुल्क", t_en: "Country" },
        { a: "طُور", r: "Toor", u: "طور پہاڑ", u_ro: "Toor pahaad", u_hi: "तूर पहाड़", u_en: "Mount Tur (Sinai)", m: "الطُّورِ", t: "پہاڑ", t_ro: "Pahaad", t_hi: "पहाड़", t_en: "Mountain" },
        { a: "تَوْرَاة", r: "Tawraah", u: "تورات", u_ro: "Taurat", u_hi: "तौरात", u_en: "Torah", m: "التَّوْرَاةَ", t: "کتاب", t_ro: "Kitaab", t_hi: "किताब", t_en: "Scripture" }
    ] },
    { day: 39, words: [
        { a: "إِنْجِيل", r: "Injeel", u: "انجیل", u_ro: "Injeel", u_hi: "इंजील", u_en: "Gospel (Injil)", m: "الْإِنجِيلَ", t: "کتاب", t_ro: "Kitaab", t_hi: "किताब", t_en: "Scripture" },
        { a: "زَبُور", r: "Zaboor", u: "زبور", u_ro: "Zaboor", u_hi: "ज़बूर", u_en: "Psalms (Zabur)", m: "الزَّبُورَ", t: "کتاب", t_ro: "Kitaab", t_hi: "किताब", t_en: "Scripture" },
        { a: "صُحُف", r: "Suhuf", u: "صحیفے", u_ro: "Sahifay", u_hi: "सहीफ़े", u_en: "Scrolls", m: "الصُّحُفِ", t: "کتاب", t_ro: "Kitaab", t_hi: "किताब", t_en: "Scriptures" },
        { a: "قَالَ", r: "Qaala", u: "اس نے کہا", u_ro: "Us ne kaha", u_hi: "उसने कहा", u_en: "He said", m: "قَالَ", t: "کہنا", t_ro: "Kehna", t_hi: "कहना", t_en: "Said" },
        { a: "قَالُوا", r: "Qaaloo", u: "انہوں نے کہا", u_ro: "Unhon ne kaha", u_hi: "उन्होंने कहा", u_en: "They said", m: "قَالُوا", t: "کہنا", t_ro: "Kehna", t_hi: "कहना", t_en: "Said" },
        { a: "يَقُولُ", r: "Yaqoolu", u: "وہ کہتا ہے", u_ro: "Woh kehta hai", u_hi: "वह कहता है", u_en: "He says", m: "يَقُولُ", t: "کہنا", t_ro: "Kehna", t_hi: "कहना", t_en: "Says" },
        { a: "قُلْ", r: "Qul", u: "کہہ دو", u_ro: "Keh do", u_hi: "कह दो", u_en: "Say!", m: "قُلْ", t: "کہنا", t_ro: "Kehna", t_hi: "कहना", t_en: "Say" },
        { a: "كَانَ", r: "Kaana", u: "تھا", u_ro: "Tha", u_hi: "था", u_en: "He was", m: "كَانَ", t: "تھا", t_ro: "Tha", t_hi: "था", t_en: "Was" },
        { a: "كَانُوا", r: "Kaanoo", u: "وہ تھے", u_ro: "Woh the", u_hi: "वे थे", u_en: "They were", m: "كَانُوا", t: "تھے", t_ro: "The", t_hi: "थे", t_en: "Were" },
        { a: "يَكُونُ", r: "Yakoonu", u: "ہوتا ہے", u_ro: "Hota hai", u_hi: "होता है", u_en: "He is, will be", m: "يَكُونُ", t: "ہونا", t_ro: "Hona", t_hi: "होना", t_en: "Being" }
    ] },
    { day: 40, words: [
        { a: "كُنْ", r: "Kun", u: "ہو جا", u_ro: "Ho ja", u_hi: "हो जा", u_en: "Be!", m: "كُنْ", t: "ہونا", t_ro: "Hona", t_hi: "होना", t_en: "Be" },
        { a: "جَاءَ", r: "Jaa'a", u: "آیا", u_ro: "Aaya", u_hi: "आया", u_en: "He came", m: "جَاءَ", t: "آنا", t_ro: "Aana", t_hi: "आना", t_en: "Came" },
        { a: "أَتَى", r: "Ataa", u: "آیا", u_ro: "Aaya", u_hi: "आया", u_en: "He came", m: "أَتَى", t: "آنا", t_ro: "Aana", t_hi: "आना", t_en: "Came" },
        { a: "يَأْتِي", r: "Ya'tee", u: "آتا ہے", u_ro: "Aata hai", u_hi: "आता है", u_en: "He comes", m: "يَأْتِي", t: "آنا", t_ro: "Aana", t_hi: "आना", t_en: "Comes" },
        { a: "خَرَجَ", r: "Kharaja", u: "نکلا", u_ro: "Nikla", u_hi: "निकला", u_en: "He went out", m: "خَرَجَ", t: "نکلنا", t_ro: "Nikalna", t_hi: "निकलना", t_en: "Went out" },
        { a: "دَخَلَ", r: "Dakhala", u: "داخل ہوا", u_ro: "Daakhil hua", u_hi: "दाख़िल हुआ", u_en: "He entered", m: "دَخَلَ", t: "داخل ہونا", t_ro: "Daakhil hona", t_hi: "दाख़िल होना", t_en: "Entered" },
        { a: "ادْخُلُوا", r: "Udkhuloo", u: "داخل ہو جاؤ", u_ro: "Daakhil ho jaao", u_hi: "दाख़िल हो जाओ", u_en: "Enter!", m: "ادْخُلُوا", t: "داخل ہونا", t_ro: "Daakhil hona", t_hi: "दाख़िल होना", t_en: "Enter" },
        { a: "رَجَعَ", r: "Raja'a", u: "لوٹا", u_ro: "Lauta", u_hi: "लौटा", u_en: "He returned", m: "رَجَعَ", t: "واپس", t_ro: "Waapas", t_hi: "वापस", t_en: "Returned" },
        { a: "اتَّبَعَ", r: "Ittaba'a", u: "پیروی کی", u_ro: "Pairwi ki", u_hi: "पैरवी की", u_en: "He followed", m: "اتَّبَعَ", t: "پیروی", t_ro: "Pairwi", t_hi: "पैरवी", t_en: "Followed" },
        { a: "قَامَ", r: "Qaama", u: "کھڑا ہوا", u_ro: "Khada hua", u_hi: "खड़ा हुआ", u_en: "He stood up", m: "قَامَ", t: "کھڑا ہونا", t_ro: "Khada hona", t_hi: "खड़ा होना", t_en: "Stood" }
    ] },
    { day: 41, words: [
        { a: "خَلَقَ", r: "Khalaqa", u: "پیدا کیا", u_ro: "Paida kiya", u_hi: "पैदा किया", u_en: "He created", m: "خَلَقَ", t: "پیدا کرنا", t_ro: "Paida karna", t_hi: "पैदा करना", t_en: "Created" },
        { a: "جَعَلَ", r: "Ja'ala", u: "بنایا", u_ro: "Banaya", u_hi: "बनाया", u_en: "He made", m: "جَعَلَ", t: "بنانا", t_ro: "Banaana", t_hi: "बनाना", t_en: "Made" },
        { a: "أَنْزَلَ", r: "Anzala", u: "اتارا", u_ro: "Utaara", u_hi: "उतारा", u_en: "He sent down", m: "أَنْزَلَ", t: "نازل کرنا", t_ro: "Naazil karna", t_hi: "नाज़िल करना", t_en: "Sent down" },
        { a: "أَرْسَلَ", r: "Arsala", u: "بھیجا", u_ro: "Bheja", u_hi: "भेजा", u_en: "He sent", m: "أَرْسَلَ", t: "بھیجنا", t_ro: "Bhejna", t_hi: "भेजना", t_en: "Sent" },
        { a: "فَعَلَ", r: "Fa'ala", u: "کیا", u_ro: "Kya", u_hi: "क्या", u_en: "He did", m: "فَعَلَ", t: "کرنا", t_ro: "Karna", t_hi: "करना", t_en: "Did" },
        { a: "عَمِلَ", r: "Amila", u: "کام کیا", u_ro: "Kaam kiya", u_hi: "काम किया", u_en: "He did, worked", m: "عَمِلَ", t: "عمل کرنا", t_ro: "Amal karna", t_hi: "अमल करना", t_en: "Did deeds" },
        { a: "أَخَذَ", r: "Akhadha", u: "لیا", u_ro: "Liya", u_hi: "लिया", u_en: "He took", m: "أَخَذَ", t: "پکڑنا", t_ro: "Pakadna", t_hi: "पकड़ना", t_en: "Took" },
        { a: "أَعْطَى", r: "A'taa", u: "دیا", u_ro: "Diya", u_hi: "दिया", u_en: "He gave", m: "أَعْطَى", t: "دینا", t_ro: "Dena", t_hi: "देना", t_en: "Gave" },
        { a: "أَتَى", r: "Ataa", u: "عطا کیا", u_ro: "Ata kiya", u_hi: "अता किया", u_en: "He came with, brought", m: "أَتَى", t: "دینا", t_ro: "Dena", t_hi: "देना", t_en: "Brought" },
        { a: "تَرَكَ", r: "Taraka", u: "چھوڑا", u_ro: "Chhoda", u_hi: "छोड़ा", u_en: "He left", m: "تَرَكَ", t: "چھوڑنا", t_ro: "Chhodna", t_hi: "छोड़ना", t_en: "Left" }
    ] },
    { day: 42, words: [
        { a: "وَجَدَ", r: "Wajada", u: "پایا", u_ro: "Paaya", u_hi: "पाया", u_en: "He found", m: "وَجَدَ", t: "پانا", t_ro: "Paana", t_hi: "पाना", t_en: "Found" },
        { a: "رَأَى", r: "Ra'aa", u: "دیکھا", u_ro: "Dekha", u_hi: "देखा", u_en: "He saw", m: "رَأَى", t: "دیکھنا", t_ro: "Dekhna", t_hi: "देखना", t_en: "Saw" },
        { a: "نَظَرَ", r: "Nazara", u: "دیکھا", u_ro: "Dekha", u_hi: "देखा", u_en: "He looked", m: "نَظَرَ", t: "دیکھنا", t_ro: "Dekhna", t_hi: "देखना", t_en: "Looked" },
        { a: "انْظُرْ", r: "Unzur", u: "دیکھو", u_ro: "Dekho", u_hi: "देखो", u_en: "Look!", m: "انْظُرْ", t: "دیکھنا", t_ro: "Dekhna", t_hi: "देखना", t_en: "Look" },
        { a: "يَعْلَمُ", r: "Ya'lamu", u: "وہ جانتا ہے", u_ro: "Woh jaanta hai", u_hi: "वह जानता है", u_en: "He knows", m: "يَعْلَمُ", t: "جاننا", t_ro: "Jaanna", t_hi: "जानना", t_en: "Knows" },
        { a: "تَعْلَمُونَ", r: "Ta'lamoon", u: "تم جانتے ہو", u_ro: "Tum jaante ho", u_hi: "तुम जानते हो", u_en: "You know", m: "تَعْلَمُونَ", t: "جاننا", t_ro: "Jaanna", t_hi: "जानना", t_en: "You know" },
        { a: "يَتَفَكَّرُونَ", r: "Yatafakkaroo", u: "وہ غور کرتے ہیں", u_ro: "Woh ghaur karte hain", u_hi: "वे ग़ौर करते हैं", u_en: "They reflect", m: "يَتَفَكَّرُونَ", t: "غور", t_ro: "Ghaur", t_hi: "ग़ौर", t_en: "Reflect" },
        { a: "يَعْقِلُونَ", r: "Ya'qiloon", u: "وہ سمجھتے ہیں", u_ro: "Woh samajhte hain", u_hi: "वे समझते हैं", u_en: "They understand", m: "يَعْقِلُونَ", t: "سمجھنا", t_ro: "Samajhna", t_hi: "समझना", t_en: "Use reason" },
        { a: "اذْكُرُوا", r: "Udhkuroo", u: "یاد کرو", u_ro: "Yaad karo", u_hi: "याद करो", u_en: "Remember!", m: "اذْكُرُوا", t: "یاد کرنا", t_ro: "Yaad karna", t_hi: "याद करना", t_en: "Remember" },
        { a: "نَسِيَ", r: "Nasiya", u: "بھول گیا", u_ro: "Bhool gaya", u_hi: "भूल गया", u_en: "He forgot", m: "نَسِيَ", t: "بھولنا", t_ro: "Bhoolna", t_hi: "भूलना", t_en: "Forgot" }
    ] },
    { day: 43, words: [
        { a: "شَاءَ", r: "Shaa'a", u: "چاہا", u_ro: "Chaaha", u_hi: "चाहा", u_en: "He willed", m: "شَاءَ", t: "چاہنا", t_ro: "Chaahna", t_hi: "चाहना", t_en: "Willed" },
        { a: "أَرَادَ", r: "Araada", u: "ارادہ کیا", u_ro: "Iraada kiya", u_hi: "इरादा किया", u_en: "He intended", m: "أَرَادَ", t: "چاہنا", t_ro: "Chaahna", t_hi: "चाहना", t_en: "Intended" },
        { a: "أَحَبَّ", r: "Ahabba", u: "پسند کیا", u_ro: "Pasand kiya", u_hi: "पसंद किया", u_en: "He loved", m: "أَحَبَّ", t: "محبت", t_ro: "Mohabbat", t_hi: "मोहब्बत", t_en: "Loved" },
        { a: "يُحِبُّ", r: "Yuhibb", u: "وہ پسند کرتا ہے", u_ro: "Woh pasand karta hai", u_hi: "वह पसंद करता है", u_en: "He loves", m: "يُحِبُّ", t: "پسند", t_ro: "Pasand", t_hi: "पसंद", t_en: "Loves" },
        { a: "كَرِهَ", r: "Kariha", u: "ناپسند کیا", u_ro: "Napasand kiya", u_hi: "नापसंद किया", u_en: "He disliked", m: "كَرِهَ", t: "ناپسند", t_ro: "Napasand", t_hi: "नापसंद", t_en: "Disliked" },
        { a: "خَافَ", r: "Khaafa", u: "ڈرا", u_ro: "Dara", u_hi: "डरा", u_en: "He feared", m: "خَافَ", t: "ڈرنا", t_ro: "Darna", t_hi: "डरना", t_en: "Feared" },
        { a: "تَخَافُوا", r: "Takhaafoo", u: "ڈرو مت", u_ro: "Daro mat", u_hi: "डरो मत", u_en: "Do not fear", m: "تَخَافُوا", t: "ڈرنا", t_ro: "Darna", t_hi: "डरना", t_en: "Do not fear" },
        { a: "خَشِيَ", r: "Khashiya", u: "ڈرا", u_ro: "Dara", u_hi: "डरा", u_en: "He feared", m: "خَشِيَ", t: "ڈرنا", t_ro: "Darna", t_hi: "डरना", t_en: "Feared" },
        { a: "اتَّقُوا", r: "Ittaqoo", u: "ڈرو", u_ro: "Daro", u_hi: "डरो", u_en: "Be mindful of Allah", m: "اتَّقُوا", t: "بچنا", t_ro: "Bachna", t_hi: "बचना", t_en: "Fear Allah" },
        { a: "يَرْجُو", r: "Yarjoo", u: "وہ امید رکھتا ہے", u_ro: "Woh umeed rakhta hai", u_hi: "वह उम्मीद रखता है", u_en: "He hopes", m: "يَرْجُو", t: "امید", t_ro: "Umeed", t_hi: "उम्मीद", t_en: "Hopes" }
    ] },
    { day: 44, words: [
        { a: "دَعَا", r: "Da'aa", u: "پکارا", u_ro: "Pukaara", u_hi: "पुकारा", u_en: "He called", m: "دَعَا", t: "دعا", t_ro: "Dua", t_hi: "दुआ", t_en: "Called" },
        { a: "ادْعُوا", r: "Ud'oo", u: "پکارو", u_ro: "Pukaaro", u_hi: "पुकारो", u_en: "Call upon!", m: "ادْعُوا", t: "دعا", t_ro: "Dua", t_hi: "दुआ", t_en: "Call upon" },
        { a: "سَأَلَ", r: "Sa'ala", u: "پوچھا", u_ro: "Poochha", u_hi: "पूछा", u_en: "He asked", m: "سَأَلَ", t: "پوچھنا", t_ro: "Poochhna", t_hi: "पूछना", t_en: "Asked" },
        { a: "أَجَابَ", r: "Ajaaba", u: "جواب دیا", u_ro: "Jawaab diya", u_hi: "जवाब दिया", u_en: "He answered", m: "أَجَابَ", t: "جواب", t_ro: "Jawaab", t_hi: "जवाब", t_en: "Answered" },
        { a: "اسْتَجَابَ", r: "Istajaaba", u: "قبول کیا", u_ro: "Qubool kiya", u_hi: "क़बूल किया", u_en: "He responded", m: "اسْتَجَابَ", t: "قبول", t_ro: "Qubool", t_hi: "क़बूल", t_en: "Responded" },
        { a: "غَفَرَ", r: "Ghafara", u: "بخش دیا", u_ro: "Bakhsh diya", u_hi: "बख़्श दिया", u_en: "He forgave", m: "غَفَرَ", t: "بخشنا", t_ro: "Bakhshna", t_hi: "बख़्शना", t_en: "Forgave" },
        { a: "اغْفِرْ", r: "Ighfir", u: "بخش دے", u_ro: "Bakhsh de", u_hi: "बख़्श दे", u_en: "Forgive!", m: "اغْفِرْ", t: "بخشنا", t_ro: "Bakhshna", t_hi: "बख़्शना", t_en: "Forgive" },
        { a: "رَحِمَ", r: "Rahima", u: "رحم کیا", u_ro: "Rahm kiya", u_hi: "रहम किया", u_en: "He had mercy", m: "رَحِمَ", t: "رحم", t_ro: "Rahm", t_hi: "रहम", t_en: "Had mercy" },
        { a: "ارْحَمْ", r: "Irham", u: "رحم کر", u_ro: "Rahm kar", u_hi: "रहम कर", u_en: "Have mercy!", m: "ارْحَمْ", t: "رحم", t_ro: "Rahm", t_hi: "रहम", t_en: "Have mercy" },
        { a: "اهْدِنَا", r: "Ihdinaa", u: "ہمیں ہدایت دے", u_ro: "Hamein hidaayat de", u_hi: "हमें हिदायत दे", u_en: "Guide us!", m: "اهْدِنَا", t: "ہدایت", t_ro: "Hidaayat", t_hi: "हिदायत", t_en: "Guide us" }
    ] },
    { day: 45, words: [
        { a: "ضَلَّ", r: "Dalla", u: "گمراہ ہوا", u_ro: "Gumraah hua", u_hi: "गुमराह हुआ", u_en: "He went astray", m: "ضَلَّ", t: "گمراہ", t_ro: "Gumraah", t_hi: "गुमराह", t_en: "Went astray" },
        { a: "أَضَلَّ", r: "Adalla", u: "گمراہ کیا", u_ro: "Gumraah kiya", u_hi: "गुमराह किया", u_en: "He misguided", m: "أَضَلَّ", t: "گمراہ", t_ro: "Gumraah", t_hi: "गुमराह", t_en: "Misled" },
        { a: "آمَنَ", r: "Aamana", u: "ایمان لایا", u_ro: "Imaan laaya", u_hi: "ईमान लाया", u_en: "He believed", m: "آمَنَ", t: "ایمان", t_ro: "Imaan", t_hi: "ईमान", t_en: "Believed" },
        { a: "آمَنُوا", r: "Aamanoo", u: "ایمان لائے", u_ro: "Imaan laaye", u_hi: "ईमान लाए", u_en: "They believed", m: "آمَنُوا", t: "ایمان", t_ro: "Imaan", t_hi: "ईमान", t_en: "Believed" },
        { a: "كَفَرَ", r: "Kafara", u: "انکار کیا", u_ro: "Inkaar kiya", u_hi: "इनकार किया", u_en: "He disbelieved", m: "كَفَرَ", t: "کفر", t_ro: "Kufr", t_hi: "कुफ़्र", t_en: "Disbelieved" },
        { a: "كَفَرُوا", r: "Kafaroo", u: "انہوں نے انکار کیا", u_ro: "Unhon ne inkaar kiya", u_hi: "उन्होंने इनकार किया", u_en: "They disbelieved", m: "كَفَرُوا", t: "کفر", t_ro: "Kufr", t_hi: "कुफ़्र", t_en: "Disbelieved" },
        { a: "صَدَقَ", r: "Sadaqa", u: "سچ کہا", u_ro: "Sach kaha", u_hi: "सच कहा", u_en: "He spoke truth", m: "صَدَقَ", t: "سچ", t_ro: "Sach", t_hi: "सच", t_en: "Told truth" },
        { a: "كَذَبَ", r: "Kadhaba", u: "جھوٹ بولا", u_ro: "Jhoot bola", u_hi: "झूठ बोला", u_en: "He lied", m: "كَذَبَ", t: "جھوٹ", t_ro: "Jhoot", t_hi: "झूठ", t_en: "Lied" },
        { a: "كَذَّبُوا", r: "Kadhdhaboo", u: "انہوں نے جھٹلایا", u_ro: "Unhon ne jhutlaaya", u_hi: "उन्होंने झुठलाया", u_en: "They denied", m: "كَذَّبُوا", t: "جھوٹ", t_ro: "Jhoot", t_hi: "झूठ", t_en: "Denied" },
        { a: "ظَلَمَ", r: "Zalama", u: "ظلم کیا", u_ro: "Zulm kiya", u_hi: "ज़ुल्म किया", u_en: "He wronged", m: "ظَلَمَ", t: "ظلم", t_ro: "Zulm", t_hi: "ज़ुल्म", t_en: "Wronged" }
    ] },
    { day: 46, words: [
        { a: "عَصَى", r: "Asaa", u: "نافرمانی کی", u_ro: "Nafarmaani ki", u_hi: "नाफ़रमानी की", u_en: "He disobeyed", m: "عَصَى", t: "نافرمانی", t_ro: "Nafarmaani", t_hi: "नाफ़रमानी", t_en: "Disobeyed" },
        { a: "أَطِيعُوا", r: "Atee'oo", u: "اطاعت کرو", u_ro: "Itaat karo", u_hi: "इताअत करो", u_en: "Obey!", m: "أَطِيعُوا", t: "اطاعت", t_ro: "Itaat", t_hi: "इताअत", t_en: "Obey" },
        { a: "اصْبِرْ", r: "Isbir", u: "صبر کر", u_ro: "Sabr kar", u_hi: "सब्र कर", u_en: "Be patient!", m: "اصْبِرْ", t: "صبر", t_ro: "Sabr", t_hi: "सब्र", t_en: "Be patient" },
        { a: "اعْبُدُوا", r: "U'budoo", u: "عبادت کرو", u_ro: "Ibaadat karo", u_hi: "इबादत करो", u_en: "Worship!", m: "اعْبُدُوا", t: "عبادت", t_ro: "Ibaadat", t_hi: "इबादत", t_en: "Worship" },
        { a: "أَقِيمُوا", r: "Aqeemoo", u: "قائم کرو", u_ro: "Qaaim karo", u_hi: "क़ायम करो", u_en: "Establish!", m: "أَقِيمُوا", t: "قائم", t_ro: "Qaaim", t_hi: "क़ायम", t_en: "Establish" },
        { a: "آتُوا", r: "Aatoo", u: "ادا کرو", u_ro: "Ada karo", u_hi: "अदा करो", u_en: "Give!", m: "آتُوا", t: "دینا", t_ro: "Dena", t_hi: "देना", t_en: "Give" },
        { a: "ارْكَعُوا", r: "Irka'oo", u: "رکوع کرو", u_ro: "Rukoo karo", u_hi: "रुकू करो", u_en: "Bow down!", m: "ارْكَعُوا", t: "رکوع", t_ro: "Rukoo", t_hi: "रुकू", t_en: "Bow" },
        { a: "اسْجُدُوا", r: "Usjudoo", u: "سجدہ کرو", u_ro: "Sajda karo", u_hi: "सज्दा करो", u_en: "Prostrate!", m: "اسْجُدُوا", t: "سجدہ", t_ro: "Sajda", t_hi: "सज्दा", t_en: "Prostrate" },
        { a: "تَابَ", r: "Taaba", u: "توبہ کی", u_ro: "Tauba ki", u_hi: "तौबा की", u_en: "He repented", m: "تَابَ", t: "توبہ", t_ro: "Tauba", t_hi: "तौबा", t_en: "Repented" },
        { a: "هَاجَرَ", r: "Haajara", u: "ہجرت کی", u_ro: "Hijrat ki", u_hi: "हिजरत की", u_en: "He migrated", m: "هَاجَرَ", t: "ہجرت", t_ro: "Hijrat", t_hi: "हिजरत", t_en: "Migrated" }
    ] },
    { day: 47, words: [
        { a: "قَاتَلَ", r: "Qaatala", u: "لڑائی کی", u_ro: "Ladaai ki", u_hi: "लड़ाई की", u_en: "He fought", m: "قَاتَلَ", t: "جنگ", t_ro: "Jang", t_hi: "जंग", t_en: "Fought" },
        { a: "قَتَلَ", r: "Qatala", u: "قتل کیا", u_ro: "Qatl kiya", u_hi: "क़त्ल किया", u_en: "He killed", m: "قَتَلَ", t: "قتل", t_ro: "Qatl", t_hi: "क़त्ल", t_en: "Killed" },
        { a: "مَاتَ", r: "Maata", u: "مر گیا", u_ro: "Mar gaya", u_hi: "मर गया", u_en: "He died", m: "مَاتَ", t: "موت", t_ro: "Maut", t_hi: "मौत", t_en: "Died" },
        { a: "أَحْيَا", r: "Ahyaa", u: "زندہ کیا", u_ro: "Zinda kiya", u_hi: "ज़िंदा किया", u_en: "He gave life", m: "أَحْيَا", t: "زندگی", t_ro: "Zindagi", t_hi: "ज़िंदगी", t_en: "Gave life" },
        { a: "أَمَاتَ", r: "Amaata", u: "موت دی", u_ro: "Maut di", u_hi: "मौत दी", u_en: "He caused death", m: "أَمَاتَ", t: "موت", t_ro: "Maut", t_hi: "मौत", t_en: "Caused death" },
        { a: "أَنْفَقَ", r: "Anfaqa", u: "خرچ کیا", u_ro: "Kharch kiya", u_hi: "ख़र्च किया", u_en: "He spent", m: "أَنْفَقَ", t: "خرچ", t_ro: "Kharch", t_hi: "ख़र्च", t_en: "Spent" },
        { a: "أَنْفِقُوا", r: "Anfiquoo", u: "خرچ کرو", u_ro: "Kharch karo", u_hi: "ख़र्च करो", u_en: "Spend!", m: "أَنْفِقُوا", t: "خرچ", t_ro: "Kharch", t_hi: "ख़र्च", t_en: "Spend" },
        { a: "أَكَلَ", r: "Akala", u: "کھایا", u_ro: "Khaaya", u_hi: "खाया", u_en: "He ate", m: "أَكَلَ", t: "کھانا", t_ro: "Khaana", t_hi: "खाना", t_en: "Ate" },
        { a: "كُلُوا", r: "Kuloo", u: "کھاؤ", u_ro: "Khaao", u_hi: "खाओ", u_en: "Eat!", m: "كُلُوا", t: "کھانا", t_ro: "Khaana", t_hi: "खाना", t_en: "Eat" },
        { a: "شَرِبَ", r: "Shariba", u: "پیا", u_ro: "Piya", u_hi: "पिया", u_en: "He drank", m: "شَرِبَ", t: "پینا", t_ro: "Peena", t_hi: "पीना", t_en: "Drank" }
    ] },
    { day: 48, words: [
        { a: "اشْرَبُوا", r: "Ishraboo", u: "پیو", u_ro: "Piyo", u_hi: "पियो", u_en: "Drink!", m: "اشْرَبُوا", t: "پینا", t_ro: "Peena", t_hi: "पीना", t_en: "Drink" },
        { a: "سَارَ", r: "Saara", u: "چلا", u_ro: "Chala", u_hi: "चला", u_en: "He traveled", m: "سَارَ", t: "چلنا", t_ro: "Chalna", t_hi: "चलना", t_en: "Traveled" },
        { a: "سِيرُوا", r: "Seeroo", u: "چلو پھرو", u_ro: "Chalo phiro", u_hi: "चलो-फिरो", u_en: "Travel!", m: "سِيرُوا", t: "چلنا", t_ro: "Chalna", t_hi: "चलना", t_en: "Travel" },
        { a: "أَخْرَجَ", r: "Akhraja", u: "نکالا", u_ro: "Nikaala", u_hi: "निकाला", u_en: "He brought out", m: "أَخْرَجَ", t: "نکالنا", t_ro: "Nikaalna", t_hi: "निकालना", t_en: "Brought out" },
        { a: "أَدْخَلَ", r: "Adkhala", u: "داخل کیا", u_ro: "Daakhil kiya", u_hi: "दाख़िल किया", u_en: "He admitted", m: "أَدْخَلَ", t: "داخل", t_ro: "Daakhil", t_hi: "दाख़िल", t_en: "Admitted" },
        { a: "رَفَعَ", r: "Rafa'a", u: "بلند کیا", u_ro: "Buland kiya", u_hi: "बुलंद किया", u_en: "He raised", m: "رَفَعَ", t: "بلند", t_ro: "Buland", t_hi: "बुलंद", t_en: "Raised" },
        { a: "جَمَعَ", r: "Jama'a", u: "جمع کیا", u_ro: "Jama kiya", u_hi: "जमा किया", u_en: "He gathered", m: "جَمَعَ", t: "جمع", t_ro: "Jama", t_hi: "जमा", t_en: "Gathered" },
        { a: "حَكَمَ", r: "Hakama", u: "فیصلہ کیا", u_ro: "Faisla kiya", u_hi: "फ़ैसला किया", u_en: "He judged", m: "حَكَمَ", t: "فیصلہ", t_ro: "Faisla", t_hi: "फ़ैसला", t_en: "Judged" },
        { a: "قَضَى", r: "Qadaa", u: "فیصلہ کر دیا", u_ro: "Faisla kar diya", u_hi: "फ़ैसला कर दिया", u_en: "He decreed", m: "قَضَى", t: "فیصلہ", t_ro: "Faisla", t_hi: "फ़ैसला", t_en: "Decreed" },
        { a: "قَصَّ", r: "Qassa", u: "بیان کیا", u_ro: "Bayaan kiya", u_hi: "बयान किया", u_en: "He narrated", m: "قَصَّ", t: "بیان", t_ro: "Bayaan", t_hi: "बयान", t_en: "Narrated" }
    ] },
    { day: 49, words: [
        { a: "كَتَبَ", r: "Kataba", u: "لکھا", u_ro: "Likha", u_hi: "लिखा", u_en: "He wrote, prescribed", m: "كَتَبَ", t: "لکھنا", t_ro: "Likhna", t_hi: "लिखना", t_en: "Wrote" },
        { a: "اقْرَأْ", r: "Iqra'", u: "پڑھو", u_ro: "Padho", u_hi: "पढ़ो", u_en: "Read!", m: "اقْرَأْ", t: "پڑھنا", t_ro: "Padhna", t_hi: "पढ़ना", t_en: "Read" },
        { a: "تَلَا", r: "Talaa", u: "تلاوت کی", u_ro: "Tilaawat ki", u_hi: "तिलावत की", u_en: "He recited", m: "تَلَا", t: "پڑھنا", t_ro: "Padhna", t_hi: "पढ़ना", t_en: "Recited" },
        { a: "أَمَرَ", r: "Amara", u: "حکم دیا", u_ro: "Hukm diya", u_hi: "हुक्म दिया", u_en: "He commanded", m: "أَمَرَ", t: "حکم", t_ro: "Hukm", t_hi: "हुक्म", t_en: "Commanded" },
        { a: "نَهَى", r: "Nahaa", u: "منع کیا", u_ro: "Mana kiya", u_hi: "मना किया", u_en: "He forbade", m: "نَهَى", t: "منع", t_ro: "Mana", t_hi: "मना", t_en: "Forbade" },
        { a: "حَرَّمَ", r: "Harrama", u: "حرام کیا", u_ro: "Haraam kiya", u_hi: "हराम किया", u_en: "He forbade", m: "حَرَّمَ", t: "حرام", t_ro: "Haraam", t_hi: "हराम", t_en: "Made forbidden" },
        { a: "أَحَلَّ", r: "Ahalla", u: "حلال کیا", u_ro: "Halaal kiya", u_hi: "हलाल किया", u_en: "He made lawful", m: "أَحَلَّ", t: "حلال", t_ro: "Halaal", t_hi: "हलाल", t_en: "Made lawful" },
        { a: "بَدَّلَ", r: "Baddala", u: "بدل دیا", u_ro: "Badal diya", u_hi: "बदल दिया", u_en: "He changed", m: "بَدَّلَ", t: "بدلنا", t_ro: "Badalna", t_hi: "बदलना", t_en: "Changed" },
        { a: "بَلَغَ", r: "Balagha", u: "پہنچا", u_ro: "Pahuncha", u_hi: "पहुँचा", u_en: "He reached", m: "بَلَغَ", t: "پہنچنا", t_ro: "Pahunchna", t_hi: "पहुँचना", t_en: "Reached" },
        { a: "ظَنَّ", r: "Zanna", u: "گمان کیا", u_ro: "Gumaan kiya", u_hi: "गुमान किया", u_en: "He thought", m: "ظَنَّ", t: "گمان", t_ro: "Gumaan", t_hi: "गुमान", t_en: "Thought" }
    ] },
    { day: 50, words: [
        { a: "حَسِبَ", r: "Hasiba", u: "سمجھا", u_ro: "Samjha", u_hi: "समझा", u_en: "He supposed", m: "حَسِبَ", t: "سمجھنا", t_ro: "Samajhna", t_hi: "समझना", t_en: "Supposed" },
        { a: "أَنْذَرَ", r: "Andhara", u: "ڈرایا", u_ro: "Daraaya", u_hi: "डराया", u_en: "He warned", m: "أَنْذَرَ", t: "ڈرانا", t_ro: "Daraana", t_hi: "डराना", t_en: "Warned" },
        { a: "نَصَرَ", r: "Nasara", u: "مدد کی", u_ro: "Madad ki", u_hi: "मदद की", u_en: "He helped", m: "نَصَرَ", t: "مدد", t_ro: "Madad", t_hi: "मदद", t_en: "Helped" },
        { a: "هَلَكَ", r: "Halaka", u: "ہلاک ہوا", u_ro: "Halaak hua", u_hi: "हलाक हुआ", u_en: "He perished", m: "هَلَكَ", t: "ہلاک", t_ro: "Halaak", t_hi: "हलाक", t_en: "Perished" },
        { a: "أَهْلَكَ", r: "Ahlaka", u: "ہلاک کیا", u_ro: "Halaak kiya", u_hi: "हलाक किया", u_en: "He destroyed", m: "أَهْلَكَ", t: "ہلاک", t_ro: "Halaak", t_hi: "हलाक", t_en: "Destroyed" },
        { a: "نَجَّى", r: "Najjaa", u: "بچا لیا", u_ro: "Bacha liya", u_hi: "बचा लिया", u_en: "He saved", m: "نَجَّى", t: "نجات", t_ro: "Najaat", t_hi: "नजात", t_en: "Saved" },
        { a: "غَلَبَ", r: "Ghalaba", u: "غالب آیا", u_ro: "Ghaalib aaya", u_hi: "ग़ालिब आया", u_en: "He prevailed", m: "غَلَبَ", t: "غالب", t_ro: "Ghaalib", t_hi: "ग़ालिब", t_en: "Prevailed" },
        { a: "ضَرَبَ", r: "Daraba", u: "مارا", u_ro: "Maara", u_hi: "मारा", u_en: "He struck", m: "ضَرَبَ", t: "مارنا", t_ro: "Maarna", t_hi: "मारना", t_en: "Struck" },
        { a: "فَتَحَ", r: "Fataha", u: "کھولا", u_ro: "Khola", u_hi: "खोला", u_en: "He opened", m: "فَتَحَ", t: "کھولنا", t_ro: "Kholna", t_hi: "खोलना", t_en: "Opened" },
        { a: "طَلَبَ", r: "Talaba", u: "مانگا", u_ro: "Maanga", u_hi: "माँगा", u_en: "He sought", m: "طَلَبَ", t: "مانگنا", t_ro: "Maangna", t_hi: "माँगना", t_en: "Sought" }
    ] },
    { day: 51, words: [
        { a: "أَرْض", r: "Ard", u: "زمین", u_ro: "Zameen", u_hi: "ज़मीन", u_en: "Earth", m: "الْأَرْضُ", t: "زمین", t_ro: "Zameen", t_hi: "ज़मीन", t_en: "Earth" },
        { a: "سَمَاء", r: "Samaa'", u: "آسمان", u_ro: "Aasmaan", u_hi: "आसमान", u_en: "Sky, heaven", m: "السَّمَاءُ", t: "آسمان", t_ro: "Aasmaan", t_hi: "आसमान", t_en: "Sky" },
        { a: "شَمْس", r: "Shams", u: "سورج", u_ro: "Sooraj", u_hi: "सूरज", u_en: "Sun", m: "الشَّمْسُ", t: "سورج", t_ro: "Sooraj", t_hi: "सूरज", t_en: "Sun" },
        { a: "قَمَر", r: "Qamar", u: "چاند", u_ro: "Chaand", u_hi: "चाँद", u_en: "Moon", m: "الْقَمَرُ", t: "چاند", t_ro: "Chaand", t_hi: "चाँद", t_en: "Moon" },
        { a: "نَجْم", r: "Najm", u: "ستارہ", u_ro: "Sitaara", u_hi: "सितारा", u_en: "Star", m: "النَّجْمُ", t: "ستارہ", t_ro: "Sitaara", t_hi: "सितारा", t_en: "Star" },
        { a: "نُور", r: "Noor", u: "روشنی", u_ro: "Roshni", u_hi: "रोशनी", u_en: "Light", m: "النُّورُ", t: "روشنی", t_ro: "Roshni", t_hi: "रोशनी", t_en: "Light" },
        { a: "ظُلُمَات", r: "Zulumaat", u: "اندھیرے", u_ro: "Andhere", u_hi: "अंधेरे", u_en: "Darkness", m: "الظُّلُمَاتِ", t: "اندھیرا", t_ro: "Andhera", t_hi: "अंधेरा", t_en: "Darkness" },
        { a: "لَيْل", r: "Layl", u: "رات", u_ro: "Raat", u_hi: "रात", u_en: "Night", m: "اللَّيْلُ", t: "رات", t_ro: "Raat", t_hi: "रात", t_en: "Night" },
        { a: "نَهَار", r: "Nahaar", u: "دن", u_ro: "Din", u_hi: "दिन", u_en: "Day", m: "النَّهَارُ", t: "دن", t_ro: "Din", t_hi: "दिन", t_en: "Daytime" },
        { a: "فَجْر", r: "Fajr", u: "صبح", u_ro: "Subah", u_hi: "सुबह", u_en: "Dawn", m: "الْفَجْرِ", t: "صبح", t_ro: "Subah", t_hi: "सुबह", t_en: "Dawn" }
    ] },
    { day: 52, words: [
        { a: "مَاء", r: "Maa'", u: "پانی", u_ro: "Paani", u_hi: "पानी", u_en: "Water", m: "الْمَاءُ", t: "پانی", t_ro: "Paani", t_hi: "पानी", t_en: "Water" },
        { a: "مَطَر", r: "Matar", u: "بارش", u_ro: "Baarish", u_hi: "बारिश", u_en: "Rain", m: "مَطَرٌ", t: "بارش", t_ro: "Baarish", t_hi: "बारिश", t_en: "Rain" },
        { a: "سَحَاب", r: "Sahaab", u: "بادل", u_ro: "Baadal", u_hi: "बादल", u_en: "Clouds", m: "السَّحَابُ", t: "بادل", t_ro: "Baadal", t_hi: "बादल", t_en: "Clouds" },
        { a: "بَرْق", r: "Barq", u: "بجلی", u_ro: "Bijli", u_hi: "बिजली", u_en: "Lightning", m: "الْبَرْقُ", t: "بجلی", t_ro: "Bijli", t_hi: "बिजली", t_en: "Lightning" },
        { a: "رَعْد", r: "Ra'd", u: "گرج", u_ro: "Garaj", u_hi: "गरज", u_en: "Thunder", m: "الرَّعْدُ", t: "گرج", t_ro: "Garaj", t_hi: "गरज", t_en: "Thunder" },
        { a: "رِيح", r: "Reeh", u: "ہوا", u_ro: "Hawa", u_hi: "हवा", u_en: "Wind", m: "الرِّيحُ", t: "ہوا", t_ro: "Hawa", t_hi: "हवा", t_en: "Wind" },
        { a: "بَحْر", r: "Bahr", u: "سمندر", u_ro: "Samundar", u_hi: "समुंदर", u_en: "Sea", m: "الْبَحْرُ", t: "سمندر", t_ro: "Samundar", t_hi: "समुंदर", t_en: "Sea" },
        { a: "نَهْر", r: "Nahr", u: "نہر", u_ro: "Nahar", u_hi: "नहर", u_en: "River", m: "النَّهْرُ", t: "نہر", t_ro: "Nahar", t_hi: "नहर", t_en: "River" },
        { a: "جَبَل", r: "Jabal", u: "پہاڑ", u_ro: "Pahaad", u_hi: "पहाड़", u_en: "Mountain", m: "الْجَبَلُ", t: "پہاڑ", t_ro: "Pahaad", t_hi: "पहाड़", t_en: "Mountain" },
        { a: "نَار", r: "Naar", u: "آگ", u_ro: "Aag", u_hi: "आग", u_en: "Fire", m: "النَّارُ", t: "آگ", t_ro: "Aag", t_hi: "आग", t_en: "Fire" }
    ] },
    { day: 53, words: [
        { a: "حَجَر", r: "Hajar", u: "پتھر", u_ro: "Patthar", u_hi: "पत्थर", u_en: "Stone", m: "الْحَجَرُ", t: "پتھر", t_ro: "Patthar", t_hi: "पत्थर", t_en: "Stone" },
        { a: "طِين", r: "Teen", u: "مٹی", u_ro: "Mitti", u_hi: "मिट्टी", u_en: "Clay", m: "الطِّينُ", t: "مٹی", t_ro: "Mitti", t_hi: "मिट्टी", t_en: "Clay" },
        { a: "شَجَرَة", r: "Shajarah", u: "درخت", u_ro: "Darakht", u_hi: "दरख़्त", u_en: "Tree", m: "الشَّجَرَةُ", t: "درخت", t_ro: "Darakht", t_hi: "दरख़्त", t_en: "Tree" },
        { a: "وَرَقَة", r: "Waraqah", u: "پتّا", u_ro: "Patta", u_hi: "पत्ता", u_en: "Leaf", m: "الْوَرَقَةُ", t: "پتّا", t_ro: "Patta", t_hi: "पत्ता", t_en: "Leaf" },
        { a: "نَخْل", r: "Nakhl", u: "کھجور کا درخت", u_ro: "Khajoor ka darakht", u_hi: "खजूर का दरख़्त", u_en: "Date palm", m: "النَّخْلُ", t: "کھجور", t_ro: "Khajoor", t_hi: "खजूर", t_en: "Date palm" },
        { a: "ثَمَرَة", r: "Thamarah", u: "پھل", u_ro: "Phal", u_hi: "फल", u_en: "Fruit", m: "الثَّمَرَةُ", t: "پھل", t_ro: "Phal", t_hi: "फल", t_en: "Fruit" },
        { a: "عِنَب", r: "Inab", u: "انگور", u_ro: "Angoor", u_hi: "अंगूर", u_en: "Grapes", m: "الْعِنَبَ", t: "انگور", t_ro: "Angoor", t_hi: "अंगूर", t_en: "Grapes" },
        { a: "زَيْتُون", r: "Zaytoon", u: "زیتون", u_ro: "Zaitoon", u_hi: "ज़ैतून", u_en: "Olive", m: "الزَّيْتُونَ", t: "زیتون", t_ro: "Zaitoon", t_hi: "ज़ैतून", t_en: "Olive" },
        { a: "لَحْم", r: "Lahm", u: "گوشت", u_ro: "Gosht", u_hi: "गोश्त", u_en: "Meat", m: "اللَّحْمَ", t: "گوشت", t_ro: "Gosht", t_hi: "गोश्त", t_en: "Meat" },
        { a: "عَسَل", r: "Asal", u: "شہد", u_ro: "Shahad", u_hi: "शहद", u_en: "Honey", m: "الْعَسَلَ", t: "شہد", t_ro: "Shahad", t_hi: "शहद", t_en: "Honey" }
    ] },
    { day: 54, words: [
        { a: "بَيْت", r: "Bayt", u: "گھر", u_ro: "Ghar", u_hi: "घर", u_en: "House", m: "الْبَيْتَ", t: "گھر", t_ro: "Ghar", t_hi: "घर", t_en: "House" },
        { a: "مَسْجِد", r: "Masjid", u: "مسجد", u_ro: "Masjid", u_hi: "मस्जिद", u_en: "Mosque", m: "الْمَسْجِدَ", t: "مسجد", t_ro: "Masjid", t_hi: "मस्जिद", t_en: "Place of prostration" },
        { a: "بَاب", r: "Baab", u: "دروازہ", u_ro: "Darwaaza", u_hi: "दरवाज़ा", u_en: "Door", m: "الْبَابَ", t: "دروازہ", t_ro: "Darwaaza", t_hi: "दरवाज़ा", t_en: "Door" },
        { a: "فُلْك", r: "Fulk", u: "کشتی", u_ro: "Kashti", u_hi: "कश्ती", u_en: "Ship", m: "الْفُلْكَ", t: "کشتی", t_ro: "Kashti", t_hi: "कश्ती", t_en: "Ship" },
        { a: "كِتَاب", r: "Kitaab", u: "کتاب", u_ro: "Kitaab", u_hi: "किताब", u_en: "Book", m: "الْكِتَابَ", t: "کتاب", t_ro: "Kitaab", t_hi: "किताब", t_en: "Book" },
        { a: "قَلَم", r: "Qalam", u: "قلم", u_ro: "Qalam", u_hi: "क़लम", u_en: "Pen", m: "الْقَلَمَ", t: "قلم", t_ro: "Qalam", t_hi: "क़लम", t_en: "Pen" },
        { a: "مِيزَان", r: "Meezaan", u: "ترازو", u_ro: "Taraazu", u_hi: "तराज़ू", u_en: "Scale", m: "الْمِيزَانَ", t: "ترازو", t_ro: "Taraazu", t_hi: "तराज़ू", t_en: "Scale" },
        { a: "مَال", r: "Maal", u: "مال", u_ro: "Maal", u_hi: "माल", u_en: "Wealth", m: "الْمَالَ", t: "دولت", t_ro: "Daulat", t_hi: "दौलत", t_en: "Wealth" },
        { a: "ثِيَاب", r: "Thiyaab", u: "کپڑے", u_ro: "Kapde", u_hi: "कपड़े", u_en: "Clothes", m: "الثِّيَابَ", t: "کپڑا", t_ro: "Kapda", t_hi: "कपड़ा", t_en: "Clothing" },
        { a: "ظِلّ", r: "Zill", u: "سایہ", u_ro: "Saaya", u_hi: "साया", u_en: "Shade", m: "الظِّلَّ", t: "سایہ", t_ro: "Saaya", t_hi: "साया", t_en: "Shade" }
    ] },
    { day: 55, words: [
        { a: "سَبِيل", r: "Sabeel", u: "راستہ", u_ro: "Raasta", u_hi: "रास्ता", u_en: "Way, path", m: "السَّبِيلَ", t: "راستہ", t_ro: "Raasta", t_hi: "रास्ता", t_en: "Path" },
        { a: "صِرَاط", r: "Siraat", u: "سیدھا راستہ", u_ro: "Seedha raasta", u_hi: "सीधा रास्ता", u_en: "Straight path", m: "الصِّرَاطَ", t: "راستہ", t_ro: "Raasta", t_hi: "रास्ता", t_en: "The path" },
        { a: "بَقَرَة", r: "Baqarah", u: "گائے", u_ro: "Gaaye", u_hi: "गाय", u_en: "Cow", m: "الْبَقَرَةَ", t: "گائے", t_ro: "Gaaye", t_hi: "गाय", t_en: "Cow" },
        { a: "عِجْل", r: "Ijil", u: "بچھڑا", u_ro: "Bachhda", u_hi: "बछड़ा", u_en: "Calf", m: "الْعِجْلَ", t: "بچھڑا", t_ro: "Bachhda", t_hi: "बछड़ा", t_en: "Calf" },
        { a: "نَاقَة", r: "Naaqah", u: "اونٹنی", u_ro: "Untni", u_hi: "ऊँटनी", u_en: "She-camel", m: "النَّاقَةَ", t: "اونٹنی", t_ro: "Untni", t_hi: "ऊँटनी", t_en: "She-camel" },
        { a: "جَمَل", r: "Jamal", u: "اونٹ", u_ro: "Unt", u_hi: "ऊँट", u_en: "Camel", m: "الْجَمَلَ", t: "اونٹ", t_ro: "Unt", t_hi: "ऊँट", t_en: "Camel" },
        { a: "غَنَم", r: "Ghanam", u: "بھیڑ بکریاں", u_ro: "Bhed bakriyaan", u_hi: "भेड़-बकरियाँ", u_en: "Sheep and goats", m: "الْغَنَمَ", t: "بکری", t_ro: "Bakri", t_hi: "बकरी", t_en: "Flock" },
        { a: "مَعْز", r: "Ma'z", u: "بکری", u_ro: "Bakri", u_hi: "बकरी", u_en: "Goat", m: "الْمَعْزَ", t: "بکری", t_ro: "Bakri", t_hi: "बकरी", t_en: "Goat" },
        { a: "أَنَعَام", r: "An'aam", u: "مویشی", u_ro: "Maweshi", u_hi: "मवेशी", u_en: "Livestock", m: "الْأَنْعَامَ", t: "مویشی", t_ro: "Maweshi", t_hi: "मवेशी", t_en: "Livestock" },
        { a: "خَيْل", r: "Khayl", u: "گھوڑے", u_ro: "Ghode", u_hi: "घोड़े", u_en: "Horses", m: "الْخَيْلَ", t: "گھوڑا", t_ro: "Ghoda", t_hi: "घोड़ा", t_en: "Horses" }
    ] },
    { day: 56, words: [
        { a: "حِمَار", r: "Himaar", u: "گدھا", u_ro: "Gadha", u_hi: "गधा", u_en: "Donkey", m: "الْحِمَارَ", t: "گدھا", t_ro: "Gadha", t_hi: "गधा", t_en: "Donkey" },
        { a: "كَلْب", r: "Kalb", u: "کتا", u_ro: "Kutta", u_hi: "कुत्ता", u_en: "Dog", m: "الْكَلْبَ", t: "کتا", t_ro: "Kutta", t_hi: "कुत्ता", t_en: "Dog" },
        { a: "ذِئْب", r: "Dhi'b", u: "بھیڑیا", u_ro: "Bhediya", u_hi: "भेड़िया", u_en: "Wolf", m: "الذِّئْبَ", t: "بھیڑیا", t_ro: "Bhediya", t_hi: "भेड़िया", t_en: "Wolf" },
        { a: "فِيل", r: "Feel", u: "ہاتھی", u_ro: "Haathi", u_hi: "हाथी", u_en: "Elephant", m: "الْفِيلَ", t: "ہاتھی", t_ro: "Haathi", t_hi: "हाथी", t_en: "Elephant" },
        { a: "طَيْر", r: "Tayr", u: "پرندے", u_ro: "Parinde", u_hi: "परिंदे", u_en: "Birds", m: "الطَّيْرَ", t: "پرندہ", t_ro: "Parinda", t_hi: "परिंदा", t_en: "Birds" },
        { a: "هُدْهُد", r: "Hudhud", u: "ایک پرندہ", u_ro: "Ek parinda", u_hi: "एक परिंदा", u_en: "Hoopoe", m: "الْهُدْهُدَ", t: "ہدہد", t_ro: "Hudhud", t_hi: "हुदहुद", t_en: "Bird" },
        { a: "غُرَاب", r: "Ghuraab", u: "کوا", u_ro: "Kauwa", u_hi: "कौआ", u_en: "Crow", m: "الْغُرَابَ", t: "کوا", t_ro: "Kauwa", t_hi: "कौआ", t_en: "Crow" },
        { a: "نَمْلَة", r: "Namlah", u: "چیونٹی", u_ro: "Cheenti", u_hi: "चींटी", u_en: "Ant", m: "النَّمْلَةَ", t: "چیونٹی", t_ro: "Cheenti", t_hi: "चींटी", t_en: "Ant" },
        { a: "نَحْل", r: "Nahl", u: "شہد کی مکھی", u_ro: "Shahad ki makkhi", u_hi: "शहद की मक्खी", u_en: "Bee", m: "النَّحْلَ", t: "مکھی", t_ro: "Makkhi", t_hi: "मक्खी", t_en: "Bee" },
        { a: "عَنكَبُوت", r: "Ankaboot", u: "مکڑی", u_ro: "Makdi", u_hi: "मकड़ी", u_en: "Spider", m: "الْعَنكَبُوتَ", t: "مکڑی", t_ro: "Makdi", t_hi: "मकड़ी", t_en: "Spider" }
    ] },
    { day: 57, words: [
        { a: "ذُبَاب", r: "Dhubaab", u: "مکھی", u_ro: "Makkhi", u_hi: "मक्खी", u_en: "Fly", m: "الذُّبَابَ", t: "مکھی", t_ro: "Makkhi", t_hi: "मक्खी", t_en: "Fly" },
        { a: "جَرَاد", r: "Jaraad", u: "ٹڈی", u_ro: "Tiddi", u_hi: "टिड्डी", u_en: "Locust", m: "الْجَرَادَ", t: "ٹڈی", t_ro: "Tiddi", t_hi: "टिड्डी", t_en: "Locust" },
        { a: "ضَفَادِع", r: "Dafaaidi'", u: "مینڈک", u_ro: "Mendak", u_hi: "मेंढक", u_en: "Frogs", m: "الضَّفَادِعَ", t: "مینڈک", t_ro: "Mendak", t_hi: "मेंढक", t_en: "Frogs" },
        { a: "حَيَّة", r: "Hayyah", u: "سانپ", u_ro: "Saanp", u_hi: "साँप", u_en: "Snake", m: "الْحَيَّةَ", t: "سانپ", t_ro: "Saanp", t_hi: "साँप", t_en: "Snake" },
        { a: "قِرْد", r: "Qird", u: "بندر", u_ro: "Bandar", u_hi: "बंदर", u_en: "Monkey", m: "الْقِرْدَ", t: "بندر", t_ro: "Bandar", t_hi: "बंदर", t_en: "Monkey" },
        { a: "خِنْزِير", r: "Khinzeer", u: "سور", u_ro: "Suar", u_hi: "सूअर", u_en: "Pig", m: "الْخِنْزِيرَ", t: "سور", t_ro: "Soor", t_hi: "सूअर", t_en: "Pig" },
        { a: "حُوت", r: "Hoot", u: "مچھلی", u_ro: "Machhli", u_hi: "मछली", u_en: "Fish, whale", m: "الْحُوتَ", t: "مچھلی", t_ro: "Machhli", t_hi: "मछली", t_en: "Fish" },
        { a: "دَابَّة", r: "Daabbah", u: "جاندار", u_ro: "Jaandaar", u_hi: "जानदार", u_en: "Creature, beast", m: "الدَّابَّةَ", t: "جانور", t_ro: "Jaanwar", t_hi: "जानवर", t_en: "Creature" },
        { a: "إِنْسَان", r: "Insaan", u: "انسان", u_ro: "Insaan", u_hi: "इंसान", u_en: "Human being", m: "الْإِنسَانَ", t: "انسان", t_ro: "Insaan", t_hi: "इंसान", t_en: "Human" },
        { a: "نَاس", r: "Naas", u: "لوگ", u_ro: "Log", u_hi: "लोग", u_en: "People, mankind", m: "النَّاسَ", t: "لوگ", t_ro: "Log", t_hi: "लोग", t_en: "People" }
    ] },
    { day: 58, words: [
        { a: "بَشَر", r: "Bashar", u: "انسان", u_ro: "Insaan", u_hi: "इंसान", u_en: "Human, mortal", m: "الْبَشَرَ", t: "انسان", t_ro: "Insaan", t_hi: "इंसान", t_en: "Human" },
        { a: "رَجُل", r: "Rajul", u: "مرد", u_ro: "Mard", u_hi: "मर्द", u_en: "Man", m: "الرَّجُلَ", t: "مرد", t_ro: "Mard", t_hi: "मर्द", t_en: "Man" },
        { a: "امْرَأَة", r: "Imra'ah", u: "عورت", u_ro: "Aurat", u_hi: "औरत", u_en: "Woman", m: "الْمَرْأَةَ", t: "عورت", t_ro: "Aurat", t_hi: "औरत", t_en: "Woman" },
        { a: "نِسَاء", r: "Nisaa'", u: "عورتیں", u_ro: "Auratein", u_hi: "औरतें", u_en: "Women", m: "النِّسَاءَ", t: "عورتیں", t_ro: "Auratein", t_hi: "औरतें", t_en: "Women" },
        { a: "وَلَد", r: "Walad", u: "اولاد", u_ro: "Aulaad", u_hi: "औलाद", u_en: "Child, offspring", m: "الْوَلَدَ", t: "بیٹا", t_ro: "Beta", t_hi: "बेटा", t_en: "Child" },
        { a: "ابْن", r: "Ibn", u: "بیٹا", u_ro: "Beta", u_hi: "बेटा", u_en: "Son", m: "الِابْنُ", t: "بیٹا", t_ro: "Beta", t_hi: "बेटा", t_en: "Son" },
        { a: "بِنْت", r: "Bint", u: "بیٹی", u_ro: "Beti", u_hi: "बेटी", u_en: "Daughter", m: "الْبِنْتُ", t: "بیٹی", t_ro: "Beti", t_hi: "बेटी", t_en: "Daughter" },
        { a: "أَب", r: "Ab", u: "باپ", u_ro: "Baap", u_hi: "बाप", u_en: "Father", m: "الْأَبُ", t: "باپ", t_ro: "Baap", t_hi: "बाप", t_en: "Father" },
        { a: "أُمّ", r: "Umm", u: "ماں", u_ro: "Maa", u_hi: "माँ", u_en: "Mother", m: "الْأُمُّ", t: "ماں", t_ro: "Maa", t_hi: "माँ", t_en: "Mother" },
        { a: "وَالِدَيْن", r: "Waalidayn", u: "ماں باپ", u_ro: "Maa baap", u_hi: "माँ-बाप", u_en: "Parents", m: "الْوَالِدَيْنِ", t: "ماں باپ", t_ro: "Maa baap", t_hi: "माँ-बाप", t_en: "Parents" }
    ] },
    { day: 59, words: [
        { a: "أَخ", r: "Akh", u: "بھائی", u_ro: "Bhai", u_hi: "भाई", u_en: "Brother", m: "الْأَخُ", t: "بھائی", t_ro: "Bhai", t_hi: "भाई", t_en: "Brother" },
        { a: "أُخْت", r: "Ukht", u: "بہن", u_ro: "Behen", u_hi: "बहन", u_en: "Sister", m: "الْأُخْتُ", t: "بہن", t_ro: "Behen", t_hi: "बहन", t_en: "Sister" },
        { a: "زَوْج", r: "Zawj", u: "شوہر یا بیوی", u_ro: "Shauhar ya biwi", u_hi: "शौहर या बीवी", u_en: "Spouse, mate", m: "الزَّوْجُ", t: "جوڑا", t_ro: "Joda", t_hi: "जोड़ा", t_en: "Spouse" },
        { a: "أَهْل", r: "Ahl", u: "گھر والے", u_ro: "Ghar wale", u_hi: "घर वाले", u_en: "Family", m: "الْأَهْلُ", t: "اہل", t_ro: "Ahl", t_hi: "अहल", t_en: "Family" },
        { a: "قَوْم", r: "Qawm", u: "قوم", u_ro: "Qaum", u_hi: "क़ौम", u_en: "People, nation", m: "الْقَوْمُ", t: "لوگ", t_ro: "Log", t_hi: "लोग", t_en: "People" },
        { a: "ذُرِّيَّة", r: "Dhurriyyah", u: "اولاد", u_ro: "Aulaad", u_hi: "औलाद", u_en: "Offspring", m: "الذُّرِّيَّةَ", t: "نسل", t_ro: "Nasl", t_hi: "नस्ल", t_en: "Descendants" },
        { a: "طِفْل", r: "Tifl", u: "بچہ", u_ro: "Bachcha", u_hi: "बच्चा", u_en: "Child", m: "الطِّفْلُ", t: "بچہ", t_ro: "Bachcha", t_hi: "बच्चा", t_en: "Child" },
        { a: "يَتِيم", r: "Yateem", u: "یتیم", u_ro: "Yateem", u_hi: "यतीम", u_en: "Orphan", m: "الْيَتِيمَ", t: "یتیم", t_ro: "Yateem", t_hi: "यतीम", t_en: "Orphan" },
        { a: "مِسْكِين", r: "Miskeen", u: "مسکین", u_ro: "Miskeen", u_hi: "मिस्कीन", u_en: "Poor person", m: "الْمِسْكِينَ", t: "غریب", t_ro: "Ghareeb", t_hi: "ग़रीब", t_en: "Needy" },
        { a: "عَبْد", r: "Abd", u: "بندہ", u_ro: "Banda", u_hi: "बंदा", u_en: "Servant, slave", m: "الْعَبْدُ", t: "غلام", t_ro: "Ghulaam", t_hi: "ग़ुलाम", t_en: "Servant" }
    ] },
    { day: 60, words: [
        { a: "مَلَائِكَة", r: "Malaa'ikah", u: "فرشتے", u_ro: "Farishte", u_hi: "फ़रिश्ते", u_en: "Angels", m: "الْمَلَائِكَةَ", t: "فرشتے", t_ro: "Farishte", t_hi: "फ़रिश्ते", t_en: "Angels" },
        { a: "جِنّ", r: "Jinn", u: "جن", u_ro: "Jinn", u_hi: "जिन्न", u_en: "Jinn", m: "الْجِنُّ", t: "جن", t_ro: "Jinn", t_hi: "जिन्न", t_en: "Jinn" },
        { a: "شَيْطَان", r: "Shaytaan", u: "شیطان", u_ro: "Shaitaan", u_hi: "शैतान", u_en: "Satan", m: "الشَّيْطَانُ", t: "شیطان", t_ro: "Shaitaan", t_hi: "शैतान", t_en: "Satan" },
        { a: "نَبِيّ", r: "Nabiyy", u: "نبی", u_ro: "Nabi", u_hi: "नबी", u_en: "Prophet", m: "النَّبِيُّ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "رَسُول", r: "Rasool", u: "رسول", u_ro: "Rasool", u_hi: "रसूल", u_en: "Messenger", m: "الرَّسُولُ", t: "رسول", t_ro: "Rasool", t_hi: "रसूल", t_en: "Messenger" },
        { a: "عَدُوّ", r: "Aduww", u: "دشمن", u_ro: "Dushman", u_hi: "दुश्मन", u_en: "Enemy", m: "الْعَدُوُّ", t: "دشمن", t_ro: "Dushman", t_hi: "दुश्मन", t_en: "Enemy" },
        { a: "صَاحِب", r: "Saahib", u: "ساتھی", u_ro: "Saathi", u_hi: "साथी", u_en: "Companion", m: "الصَّاحِبُ", t: "ساتھی", t_ro: "Saathi", t_hi: "साथी", t_en: "Companion" },
        { a: "مُؤْمِن", r: "Mu'min", u: "ایمان والا", u_ro: "Imaan wala", u_hi: "ईमान वाला", u_en: "Believer", m: "الْمُؤْمِنُ", t: "مومن", t_ro: "Momin", t_hi: "मोमिन", t_en: "Believer" },
        { a: "كَافِر", r: "Kaafir", u: "انکار کرنے والا", u_ro: "Inkaar karne wala", u_hi: "इनकार करने वाला", u_en: "Disbeliever", m: "الْكَافِرُ", t: "کافر", t_ro: "Kaafir", t_hi: "काफ़िर", t_en: "Disbeliever" },
        { a: "مُنَافِق", r: "Munaafiq", u: "منافق", u_ro: "Munaafiq", u_hi: "मुनाफ़िक़", u_en: "Hypocrite", m: "الْمُنَافِقُ", t: "منافق", t_ro: "Munaafiq", t_hi: "मुनाफ़िक़", t_en: "Hypocrite" }
    ] },
    { day: 61, words: [
        { a: "مُسْلِم", r: "Muslim", u: "مسلمان", u_ro: "Musalmaan", u_hi: "मुसलमान", u_en: "Muslim", m: "الْمُسْلِمُ", t: "مسلمان", t_ro: "Musalmaan", t_hi: "मुसलमान", t_en: "Submitter to Allah" },
        { a: "مُشْرِك", r: "Mushrik", u: "مشرک", u_ro: "Mushrik", u_hi: "मुशरिक", u_en: "Polytheist", m: "الْمُشْرِكُ", t: "مشرک", t_ro: "Mushrik", t_hi: "मुशरिक", t_en: "Associates partners with Allah" },
        { a: "ظَالِم", r: "Zalim", u: "ظالم", u_ro: "Zaalim", u_hi: "ज़ालिम", u_en: "Wrongdoer, oppressor", m: "الظَّالِمُ", t: "ظالم", t_ro: "Zaalim", t_hi: "ज़ालिम", t_en: "Unjust person" },
        { a: "مُتَّقِي", r: "Muttaqi", u: "پرہیزگار", u_ro: "Parhezgaar", u_hi: "परहेज़गार", u_en: "God-fearing", m: "الْمُتَّقِي", t: "متقی", t_ro: "Muttaqi", t_hi: "मुत्तक़ी", t_en: "Pious, mindful of Allah" },
        { a: "صَالِح", r: "Saalih", u: "نیک", u_ro: "Nek", u_hi: "नेक", u_en: "Righteous", m: "الصَّالِحُ", t: "نیک", t_ro: "Nek", t_hi: "नेक", t_en: "Good" },
        { a: "مُحْسِن", r: "Muhsin", u: "نیکی کرنے والا", u_ro: "Neki karne wala", u_hi: "नेकी करने वाला", u_en: "Doer of good", m: "الْمُحْسِنُ", t: "نیک", t_ro: "Nek", t_hi: "नेक", t_en: "Good-doer" },
        { a: "مُجْرِم", r: "Mujrim", u: "مجرم", u_ro: "Mujrim", u_hi: "मुजरिम", u_en: "Criminal, sinner", m: "الْمُجْرِمُ", t: "گنہگار", t_ro: "Gunahgaar", t_hi: "गुनाहगार", t_en: "Wrongdoer" },
        { a: "فَاسِق", r: "Faasiq", u: "نافرمان", u_ro: "Nafarmaan", u_hi: "नाफ़रमान", u_en: "Disobedient, transgressor", m: "الْفَاسِقُ", t: "نافرمان", t_ro: "Nafarmaan", t_hi: "नाफ़रमान", t_en: "Defiant" },
        { a: "عَالِم", r: "Aalim", u: "عالم", u_ro: "Aalim", u_hi: "आलिम", u_en: "Knowledgeable, scholar", m: "الْعَالِمُ", t: "جاننے والا", t_ro: "Jaanne wala", t_hi: "जानने वाला", t_en: "Knower" },
        { a: "جَاهِل", r: "Jaahil", u: "نادان", u_ro: "Naadaan", u_hi: "नादान", u_en: "Ignorant", m: "الْجَاهِلُ", t: "جاہل", t_ro: "Jaahil", t_hi: "जाहिल", t_en: "Unknowing" }
    ] },
    { day: 62, words: [
        { a: "رَأْس", r: "Ra's", u: "سر", u_ro: "Sar", u_hi: "सर", u_en: "Head", m: "الرَّأْسُ", t: "سر", t_ro: "Sar", t_hi: "सर", t_en: "Head" },
        { a: "وَجْه", r: "Wajh", u: "چہرہ", u_ro: "Chehra", u_hi: "चेहरा", u_en: "Face", m: "الْوَجْهُ", t: "چہرہ", t_ro: "Chehra", t_hi: "चेहरा", t_en: "Face" },
        { a: "عَيْن", r: "Ayn", u: "آنکھ", u_ro: "Aankh", u_hi: "आँख", u_en: "Eye", m: "الْعَيْنُ", t: "آنکھ", t_ro: "Aankh", t_hi: "आँख", t_en: "Eye" },
        { a: "أُذُن", r: "Udhun", u: "کان", u_ro: "Kaan", u_hi: "कान", u_en: "Ear", m: "الْأُذُنُ", t: "کان", t_ro: "Kaan", t_hi: "कान", t_en: "Ear" },
        { a: "أَنْف", r: "Anf", u: "ناک", u_ro: "Naak", u_hi: "नाक", u_en: "Nose", m: "الْأَنْفُ", t: "ناک", t_ro: "Naak", t_hi: "नाक", t_en: "Nose" },
        { a: "فَم", r: "Fam", u: "منہ", u_ro: "Munh", u_hi: "मुँह", u_en: "Mouth", m: "الْفَمُ", t: "منہ", t_ro: "Munh", t_hi: "मुँह", t_en: "Mouth" },
        { a: "لِسَان", r: "Lisaan", u: "زبان", u_ro: "Zubaan", u_hi: "ज़ुबान", u_en: "Tongue", m: "اللِّسَانُ", t: "زبان", t_ro: "Zubaan", t_hi: "ज़ुबान", t_en: "Tongue, language" },
        { a: "سِنّ", r: "Sinn", u: "دانت", u_ro: "Daant", u_hi: "दाँत", u_en: "Tooth", m: "السِّنُّ", t: "دانت", t_ro: "Daant", t_hi: "दाँत", t_en: "Tooth" },
        { a: "يَد", r: "Yad", u: "ہاتھ", u_ro: "Haath", u_hi: "हाथ", u_en: "Hand", m: "الْيَدُ", t: "ہاتھ", t_ro: "Haath", t_hi: "हाथ", t_en: "Hand" },
        { a: "رِجْل", r: "Rijl", u: "پاؤں", u_ro: "Paaon", u_hi: "पाँव", u_en: "Foot, leg", m: "الرِّجْلُ", t: "پاؤں", t_ro: "Paaon", t_hi: "पाँव", t_en: "Foot" }
    ] },
    { day: 63, words: [
        { a: "قَلْب", r: "Qalb", u: "دل", u_ro: "Dil", u_hi: "दिल", u_en: "Heart", m: "الْقَلْبُ", t: "دل", t_ro: "Dil", t_hi: "दिल", t_en: "Heart" },
        { a: "صَدْر", r: "Sadr", u: "سینہ", u_ro: "Seena", u_hi: "सीना", u_en: "Chest", m: "الصَّدْرُ", t: "سینہ", t_ro: "Seena", t_hi: "सीना", t_en: "Chest" },
        { a: "بَطْن", r: "Batn", u: "پیٹ", u_ro: "Pet", u_hi: "पेट", u_en: "Belly", m: "الْبَطْنُ", t: "پیٹ", t_ro: "Pet", t_hi: "पेट", t_en: "Stomach" },
        { a: "ظَهْر", r: "Zahr", u: "پیٹھ", u_ro: "Peeth", u_hi: "पीठ", u_en: "Back", m: "الظَّهْرُ", t: "پیٹھ", t_ro: "Peeth", t_hi: "पीठ", t_en: "Back" },
        { a: "عُنُق", r: "Unuq", u: "گردن", u_ro: "Gardan", u_hi: "गर्दन", u_en: "Neck", m: "الْعُنُقُ", t: "گردن", t_ro: "Gardan", t_hi: "गर्दन", t_en: "Neck" },
        { a: "جِلْد", r: "Jild", u: "کھال", u_ro: "Khaal", u_hi: "खाल", u_en: "Skin", m: "الْجِلْدُ", t: "کھال", t_ro: "Khaal", t_hi: "खाल", t_en: "Skin" },
        { a: "عَظْم", r: "Azm", u: "ہڈی", u_ro: "Haddi", u_hi: "हड्डी", u_en: "Bone", m: "الْعَظْمُ", t: "ہڈی", t_ro: "Haddi", t_hi: "हड्डी", t_en: "Bone" },
        { a: "دَم", r: "Dam", u: "خون", u_ro: "Khoon", u_hi: "ख़ून", u_en: "Blood", m: "الدَّمُ", t: "خون", t_ro: "Khoon", t_hi: "ख़ून", t_en: "Blood" },
        { a: "رُوح", r: "Rooh", u: "روح", u_ro: "Rooh", u_hi: "रूह", u_en: "Spirit, soul", m: "الرُّوحُ", t: "روح", t_ro: "Rooh", t_hi: "रूह", t_en: "Spirit" },
        { a: "جَسَد", r: "Jasad", u: "جسم", u_ro: "Jism", u_hi: "जिस्म", u_en: "Body", m: "الْجَسَدُ", t: "جسم", t_ro: "Jism", t_hi: "जिस्म", t_en: "Body" }
    ] },
    { day: 64, words: [
        { a: "سَمْع", r: "Sam'", u: "سماعت", u_ro: "Samaa-at", u_hi: "समाअत", u_en: "Hearing", m: "السَّمْعُ", t: "سننا", t_ro: "Sunna", t_hi: "सुनना", t_en: "Sense of hearing" },
        { a: "بَصَر", r: "Basar", u: "نظر", u_ro: "Nazar", u_hi: "नज़र", u_en: "Sight", m: "الْبَصَرُ", t: "دیکھنا", t_ro: "Dekhna", t_hi: "देखना", t_en: "Seeing" },
        { a: "فُؤَاد", r: "Fu'aad", u: "دل", u_ro: "Dil", u_hi: "दिल", u_en: "Heart (inner)", m: "الْفُؤَادُ", t: "دل", t_ro: "Dil", t_hi: "दिल", t_en: "Heart" },
        { a: "نَاصِيَة", r: "Naasiyah", u: "پیشانی", u_ro: "Peshaani", u_hi: "पेशानी", u_en: "Forelock", m: "النَّاصِيَةُ", t: "پیشانی", t_ro: "Peshaani", t_hi: "पेशानी", t_en: "Forehead" },
        { a: "أَصَابِع", r: "Asaabi'", u: "انگلیاں", u_ro: "Ungliyaan", u_hi: "उँगलियाँ", u_en: "Fingers", m: "الْأَصَابِعُ", t: "انگلی", t_ro: "Ungli", t_hi: "उँगली", t_en: "Fingers" },
        { a: "إِيمَان", r: "Eemaan", u: "ایمان", u_ro: "Imaan", u_hi: "ईमान", u_en: "Faith", m: "الْإِيمَانُ", t: "ایمان", t_ro: "Imaan", t_hi: "ईमान", t_en: "Belief" },
        { a: "صَلَاة", r: "Salaah", u: "نماز", u_ro: "Namaaz", u_hi: "नमाज़", u_en: "Prayer (Salah)", m: "الصَّلَاةُ", t: "نماز", t_ro: "Namaaz", t_hi: "नमाज़", t_en: "Prayer" },
        { a: "زَكَاة", r: "Zakaah", u: "زکوٰۃ", u_ro: "Zakaat", u_hi: "ज़कात", u_en: "Zakat, obligatory charity", m: "الزَّكَاةُ", t: "زکوٰۃ", t_ro: "Zakaat", t_hi: "ज़कात", t_en: "Obligatory charity" },
        { a: "صِيَام", r: "Siyaam", u: "روزہ", u_ro: "Roza", u_hi: "रोज़ा", u_en: "Fasting", m: "الصِّيَامُ", t: "روزہ", t_ro: "Roza", t_hi: "रोज़ा", t_en: "Fasting" },
        { a: "حَجّ", r: "Hajj", u: "حج", u_ro: "Hajj", u_hi: "हज", u_en: "Hajj, pilgrimage", m: "الْحَجُّ", t: "حج", t_ro: "Hajj", t_hi: "हज", t_en: "Pilgrimage" }
    ] },
    { day: 65, words: [
        { a: "عُمْرَة", r: "Umrah", u: "عمرہ", u_ro: "Umrah", u_hi: "उमरा", u_en: "Umrah", m: "الْعُمْرَةُ", t: "عمرہ", t_ro: "Umrah", t_hi: "उमरा", t_en: "Lesser pilgrimage" },
        { a: "دِين", r: "Deen", u: "دین", u_ro: "Deen", u_hi: "दीन", u_en: "Religion, way of life", m: "الدِّينُ", t: "دین", t_ro: "Deen", t_hi: "दीन", t_en: "Religion" },
        { a: "إِسْلَام", r: "Islaam", u: "اسلام", u_ro: "Islaam", u_hi: "इस्लाम", u_en: "Islam, submission", m: "الْإِسْلَامُ", t: "اسلام", t_ro: "Islaam", t_hi: "इस्लाम", t_en: "Submission to Allah" },
        { a: "قُرْآن", r: "Qur'aan", u: "قرآن", u_ro: "Quraan", u_hi: "क़ुरआन", u_en: "Quran", m: "الْقُرْآنُ", t: "قرآن", t_ro: "Quraan", t_hi: "क़ुरआन", t_en: "Recitation, the Book" },
        { a: "آيَة", r: "Aayah", u: "آیت", u_ro: "Aayat", u_hi: "आयत", u_en: "Verse, sign", m: "الْآيَةُ", t: "آیت", t_ro: "Aayat", t_hi: "आयत", t_en: "Verse" },
        { a: "سُورَة", r: "Soorah", u: "سورت", u_ro: "Soorat", u_hi: "सूरत", u_en: "Surah, chapter", m: "السُّورَةُ", t: "سورت", t_ro: "Soorat", t_hi: "सूरत", t_en: "Chapter" },
        { a: "وَحْي", r: "Wahy", u: "وحی", u_ro: "Wahi", u_hi: "वही", u_en: "Revelation", m: "الْوَحْيُ", t: "وحی", t_ro: "Wahi", t_hi: "वही", t_en: "Divine revelation" },
        { a: "ذِكْر", r: "Dhikr", u: "ذکر", u_ro: "Zikr", u_hi: "ज़िक्र", u_en: "Remembrance", m: "الذِّكْرُ", t: "یاد", t_ro: "Yaad", t_hi: "याद", t_en: "Remembrance" },
        { a: "دُعَاء", r: "Du'aa'", u: "دعا", u_ro: "Dua", u_hi: "दुआ", u_en: "Supplication, prayer", m: "الدُّعَاءُ", t: "دعا", t_ro: "Dua", t_hi: "दुआ", t_en: "Calling upon Allah" },
        { a: "رُكُوع", r: "Ruku'", u: "رکوع", u_ro: "Rukoo", u_hi: "रुकू", u_en: "Bowing", m: "الرُّكُوعُ", t: "رکوع", t_ro: "Rukoo", t_hi: "रुकू", t_en: "Bowing in prayer" }
    ] },
    { day: 66, words: [
        { a: "سُجُود", r: "Sujood", u: "سجدہ", u_ro: "Sajda", u_hi: "सज्दा", u_en: "Prostration", m: "السُّجُودُ", t: "سجدہ", t_ro: "Sajda", t_hi: "सज्दा", t_en: "Prostration" },
        { a: "تَسْبِيح", r: "Tasbeeh", u: "تسبیح", u_ro: "Tasbeeh", u_hi: "तस्बीह", u_en: "Glorification", m: "التَّسْبِيحُ", t: "تسبیح", t_ro: "Tasbeeh", t_hi: "तस्बीह", t_en: "Glorifying Allah" },
        { a: "حَمْد", r: "Hamd", u: "حمد", u_ro: "Hamd", u_hi: "हम्द", u_en: "Praise", m: "الْحَمْدُ", t: "تعریف", t_ro: "Taareef", t_hi: "तारीफ़", t_en: "Praise" },
        { a: "شُكْر", r: "Shukr", u: "شکر", u_ro: "Shukr", u_hi: "शुक्र", u_en: "Gratitude", m: "الشُّكْرُ", t: "شکر", t_ro: "Shukr", t_hi: "शुक्र", t_en: "Thankfulness" },
        { a: "صَبْر", r: "Sabr", u: "صبر", u_ro: "Sabr", u_hi: "सब्र", u_en: "Patience", m: "الصَّبْرُ", t: "صبر", t_ro: "Sabr", t_hi: "सब्र", t_en: "Patience" },
        { a: "تَوْبَة", r: "Tawbah", u: "توبہ", u_ro: "Tauba", u_hi: "तौबा", u_en: "Repentance", m: "التَّوْبَةُ", t: "توبہ", t_ro: "Tauba", t_hi: "तौबा", t_en: "Repentance" },
        { a: "تَقْوَى", r: "Taqwaa", u: "تقویٰ", u_ro: "Taqwa", u_hi: "तक़वा", u_en: "Piety, God-consciousness", m: "التَّقْوَى", t: "تقویٰ", t_ro: "Taqwa", t_hi: "तक़वा", t_en: "Fear of Allah" },
        { a: "تَوَكُّل", r: "Tawakkul", u: "توکل", u_ro: "Tawakkul", u_hi: "तवक्कुल", u_en: "Reliance on Allah", m: "التَّوَكُّلُ", t: "بھروسہ", t_ro: "Bharosa", t_hi: "भरोसा", t_en: "Trust" },
        { a: "إِخْلَاص", r: "Ikhlaas", u: "اخلاص", u_ro: "Ikhlaas", u_hi: "इख़लास", u_en: "Sincerity", m: "الْإِخْلَاصُ", t: "اخلاص", t_ro: "Ikhlaas", t_hi: "इख़लास", t_en: "Sincerity" },
        { a: "هُدَى", r: "Hudaa", u: "ہدایت", u_ro: "Hidaayat", u_hi: "हिदायत", u_en: "Guidance", m: "الْهُدَى", t: "ہدایت", t_ro: "Hidaayat", t_hi: "हिदायत", t_en: "Right guidance" }
    ] },
    { day: 67, words: [
        { a: "ضَلَال", r: "Dalaal", u: "گمراہی", u_ro: "Gumraahi", u_hi: "गुमराही", u_en: "Misguidance", m: "الضَّلَالُ", t: "گمراہی", t_ro: "Gumraahi", t_hi: "गुमराही", t_en: "Straying" },
        { a: "طَهَارَة", r: "Tahaarah", u: "پاکیزگی", u_ro: "Paakeezgi", u_hi: "पाकीज़गी", u_en: "Purity", m: "الطَّهَارَةُ", t: "پاکیزگی", t_ro: "Paakeezgi", t_hi: "पाकीज़गी", t_en: "Cleanliness" },
        { a: "قِبْلَة", r: "Qiblah", u: "قبلہ", u_ro: "Qibla", u_hi: "क़िबला", u_en: "Qiblah, prayer direction", m: "الْقِبْلَةُ", t: "قبلہ", t_ro: "Qibla", t_hi: "क़िबला", t_en: "Direction of prayer" },
        { a: "عِبَادَة", r: "Ibaadah", u: "عبادت", u_ro: "Ibaadat", u_hi: "इबादत", u_en: "Worship", m: "الْعِبَادَةُ", t: "عبادت", t_ro: "Ibaadat", t_hi: "इबादत", t_en: "Worship" },
        { a: "جِهَاد", r: "Jihaad", u: "جہاد", u_ro: "Jihaad", u_hi: "जिहाद", u_en: "Striving, jihad", m: "الْجِهَادُ", t: "کوشش", t_ro: "Koshish", t_hi: "कोशिश", t_en: "Striving" },
        { a: "صَدَقَة", r: "Sadaqah", u: "صدقہ", u_ro: "Sadqa", u_hi: "सदक़ा", u_en: "Charity", m: "الصَّدَقَةُ", t: "صدقہ", t_ro: "Sadqa", t_hi: "सदक़ा", t_en: "Charity" },
        { a: "إِنْفَاق", r: "Infaaq", u: "خرچ کرنا", u_ro: "Kharch karna", u_hi: "ख़र्च करना", u_en: "Spending", m: "الْإِنْفَاقُ", t: "خرچ", t_ro: "Kharch", t_hi: "ख़र्च", t_en: "Spending" },
        { a: "إِحْسَان", r: "Ihsaan", u: "احسان", u_ro: "Ehsaan", u_hi: "एहसान", u_en: "Excellence, doing good", m: "الْإِحْسَانُ", t: "نیکی", t_ro: "Neki", t_hi: "नेकी", t_en: "Goodness" },
        { a: "مَعْرُوف", r: "Ma'roof", u: "اچھی بات", u_ro: "Achchhi baat", u_hi: "अच्छी बात", u_en: "Good, righteousness", m: "الْمَعْرُوفُ", t: "بھلائی", t_ro: "Bhalaai", t_hi: "भलाई", t_en: "Good deed" },
        { a: "مُنْكَر", r: "Munkar", u: "بری بات", u_ro: "Buri baat", u_hi: "बुरी बात", u_en: "Evil, wrongdoing", m: "الْمُنْكَرُ", t: "برائی", t_ro: "Buraai", t_hi: "बुराई", t_en: "Bad deed" }
    ] },
    { day: 68, words: [
        { a: "حَرَام", r: "Haraam", u: "حرام", u_ro: "Haraam", u_hi: "हराम", u_en: "Forbidden", m: "الْحَرَامُ", t: "حرام", t_ro: "Haraam", t_hi: "हराम", t_en: "Forbidden" },
        { a: "حَلَال", r: "Halaal", u: "حلال", u_ro: "Halaal", u_hi: "हलाल", u_en: "Lawful", m: "الْحَلَالُ", t: "حلال", t_ro: "Halaal", t_hi: "हलाल", t_en: "Permitted" },
        { a: "رِبَا", r: "Ribaa", u: "سود", u_ro: "Sood", u_hi: "सूद", u_en: "Usury, interest", m: "الرِّبَا", t: "سود", t_ro: "Sood", t_hi: "सूद", t_en: "Interest" },
        { a: "نِكَاح", r: "Nikaah", u: "نکاح", u_ro: "Nikaah", u_hi: "निकाह", u_en: "Marriage", m: "النِّكَاحُ", t: "نکاح", t_ro: "Nikaah", t_hi: "निकाह", t_en: "Marriage" },
        { a: "طَلَاق", r: "Talaaq", u: "طلاق", u_ro: "Talaaq", u_hi: "तलाक़", u_en: "Divorce", m: "الطَّلَاقُ", t: "طلاق", t_ro: "Talaaq", t_hi: "तलाक़", t_en: "Divorce" },
        { a: "وَصِيَّة", r: "Wasiyyah", u: "وصیت", u_ro: "Wasiyyat", u_hi: "वसीयत", u_en: "Bequest, will", m: "الْوَصِيَّةُ", t: "وصیت", t_ro: "Wasiyyat", t_hi: "वसीयत", t_en: "Will" },
        { a: "شَهْر", r: "Shahr", u: "مہینہ", u_ro: "Maheena", u_hi: "महीना", u_en: "Month", m: "الشَّهْرُ", t: "مہینہ", t_ro: "Maheena", t_hi: "महीना", t_en: "Month" },
        { a: "رَمَضَان", r: "Ramadaan", u: "رمضان", u_ro: "Ramzaan", u_hi: "रमज़ान", u_en: "Ramadan", m: "رَمَضَانُ", t: "رمضان", t_ro: "Ramzaan", t_hi: "रमज़ान", t_en: "Month of fasting" },
        { a: "آخِرَة", r: "Aakhirah", u: "آخرت", u_ro: "Aakhirat", u_hi: "आख़िरत", u_en: "Hereafter", m: "الْآخِرَةُ", t: "آخرت", t_ro: "Aakhirat", t_hi: "आख़िरत", t_en: "Next life" },
        { a: "دُنْيَا", r: "Dunyaa", u: "دنیا", u_ro: "Duniya", u_hi: "दुनिया", u_en: "Worldly life", m: "الدُّنْيَا", t: "دنیا", t_ro: "Duniya", t_hi: "दुनिया", t_en: "This world" }
    ] },
    { day: 69, words: [
        { a: "جَنَّة", r: "Jannah", u: "جنت", u_ro: "Jannat", u_hi: "जन्नत", u_en: "Paradise", m: "الْجَنَّةُ", t: "جنت", t_ro: "Jannat", t_hi: "जन्नत", t_en: "Paradise" },
        { a: "جَنَّات", r: "Jannaat", u: "باغات", u_ro: "Baaghaat", u_hi: "बाग़ात", u_en: "Gardens", m: "الْجَنَّاتُ", t: "باغ", t_ro: "Baagh", t_hi: "बाग़", t_en: "Gardens" },
        { a: "جَهَنَّم", r: "Jahannam", u: "جہنم", u_ro: "Jahannam", u_hi: "जहन्नुम", u_en: "Hellfire", m: "جَهَنَّمُ", t: "جہنم", t_ro: "Jahannam", t_hi: "जहन्नुम", t_en: "Hell" },
        { a: "جَحِيم", r: "Jaheem", u: "بھڑکتی آگ", u_ro: "Bhadakti aag", u_hi: "भड़कती आग", u_en: "Blazing fire", m: "الْجَحِيمُ", t: "آگ", t_ro: "Aag", t_hi: "आग", t_en: "Fire" },
        { a: "سَعِير", r: "Sa'eer", u: "دہکتی آگ", u_ro: "Dahakti aag", u_hi: "दहकती आग", u_en: "Flaming fire", m: "السَّعِيرُ", t: "آگ", t_ro: "Aag", t_hi: "आग", t_en: "Fire" },
        { a: "عَذَاب", r: "Azaab", u: "عذاب", u_ro: "Azaab", u_hi: "अज़ाब", u_en: "Punishment", m: "الْعَذَابُ", t: "سزا", t_ro: "Saza", t_hi: "सज़ा", t_en: "Punishment" },
        { a: "أَجْر", r: "Ajr", u: "اجر", u_ro: "Ajr", u_hi: "अज्र", u_en: "Reward", m: "الْأَجْرُ", t: "ثواب", t_ro: "Sawaab", t_hi: "सवाब", t_en: "Reward" },
        { a: "جَزَاء", r: "Jazaa'", u: "بدلہ", u_ro: "Badla", u_hi: "बदला", u_en: "Recompense", m: "الْجَزَاءُ", t: "بدلہ", t_ro: "Badla", t_hi: "बदला", t_en: "Recompense" },
        { a: "حِسَاب", r: "Hisaab", u: "حساب", u_ro: "Hisaab", u_hi: "हिसाब", u_en: "Reckoning", m: "الْحِسَابُ", t: "حساب", t_ro: "Hisaab", t_hi: "हिसाब", t_en: "Accounting" },
        { a: "قِيَامَة", r: "Qiyaamah", u: "قیامت", u_ro: "Qayaamat", u_hi: "क़यामत", u_en: "Day of Resurrection", m: "الْقِيَامَةُ", t: "قیامت", t_ro: "Qayaamat", t_hi: "क़यामत", t_en: "Resurrection" }
    ] },
    { day: 70, words: [
        { a: "سَاعَة", r: "Saa'ah", u: "گھڑی", u_ro: "Ghadi", u_hi: "घड़ी", u_en: "Hour, moment", m: "السَّاعَةُ", t: "وقت", t_ro: "Waqt", t_hi: "वक़्त", t_en: "Time, Hour" },
        { a: "مَوْت", r: "Mawt", u: "موت", u_ro: "Maut", u_hi: "मौत", u_en: "Death", m: "الْمَوْتُ", t: "موت", t_ro: "Maut", t_hi: "मौत", t_en: "Death" },
        { a: "حَيَاة", r: "Hayaat", u: "زندگی", u_ro: "Zindagi", u_hi: "ज़िंदगी", u_en: "Life", m: "الْحَيَاةُ", t: "زندگی", t_ro: "Zindagi", t_hi: "ज़िंदगी", t_en: "Life" },
        { a: "قَبْر", r: "Qabr", u: "قبر", u_ro: "Qabr", u_hi: "क़ब्र", u_en: "Grave", m: "الْقَبْرُ", t: "قبر", t_ro: "Qabr", t_hi: "क़ब्र", t_en: "Grave" },
        { a: "صُور", r: "Soor", u: "صور", u_ro: "Soor", u_hi: "सूर", u_en: "Trumpet", m: "الصُّورُ", t: "صور", t_ro: "Soor", t_hi: "सूर", t_en: "Trumpet (Soor)" },
        { a: "شَفَاعَة", r: "Shafaa'ah", u: "سفارش", u_ro: "Sifaarish", u_hi: "सिफ़ारिश", u_en: "Intercession", m: "الشَّفَاعَةُ", t: "سفارش", t_ro: "Sifaarish", t_hi: "सिफ़ारिश", t_en: "Intercession" },
        { a: "فِرْدَوْس", r: "Firdaws", u: "فردوس", u_ro: "Firdaus", u_hi: "फ़िरदौस", u_en: "Firdaus (highest Paradise)", m: "الْفِرْدَوْسُ", t: "جنت", t_ro: "Jannat", t_hi: "जन्नत", t_en: "Paradise" },
        { a: "عَدْن", r: "Adn", u: "ہمیشہ رہنے کے باغات", u_ro: "Hamesha rehne ke baaghaat", u_hi: "हमेशा रहने के बाग़ात", u_en: "Gardens of Eden", m: "عَدْنٍ", t: "جنت", t_ro: "Jannat", t_hi: "जन्नत", t_en: "Paradise" },
        { a: "خُلْد", r: "Khuld", u: "ہمیشگی", u_ro: "Hamesgi", u_hi: "हमेशगी", u_en: "Eternity", m: "الْخُلْدُ", t: "ہمیشہ", t_ro: "Hamesha", t_hi: "हमेशा", t_en: "Forever" },
        { a: "خَالِدِين", r: "Khaalideen", u: "ہمیشہ رہنے والے", u_ro: "Hamesha rehne wale", u_hi: "हमेशा रहने वाले", u_en: "Abiding forever", m: "خَالِدِينَ", t: "ہمیشہ", t_ro: "Hamesha", t_hi: "हमेशा", t_en: "Forever" }
    ] },
    { day: 71, words: [
        { a: "فَوْز", r: "Fawz", u: "کامیابی", u_ro: "Kaamyaabi", u_hi: "कामयाबी", u_en: "Success, triumph", m: "الْفَوْزُ", t: "کامیابی", t_ro: "Kaamyaabi", t_hi: "कामयाबी", t_en: "Success" },
        { a: "فَلَاح", r: "Falaah", u: "کامیابی", u_ro: "Kaamyaabi", u_hi: "कामयाबी", u_en: "Success, prosperity", m: "الْفَلَاحُ", t: "بھلائی", t_ro: "Bhalaai", t_hi: "भलाई", t_en: "Prosperity" },
        { a: "خُسْرَان", r: "Khusraan", u: "نقصان", u_ro: "Nuqsaan", u_hi: "नुक़सान", u_en: "Loss", m: "الْخُسْرَانُ", t: "نقصان", t_ro: "Nuqsaan", t_hi: "नुक़सान", t_en: "Loss" },
        { a: "هَلَاك", r: "Halaak", u: "ہلاکت", u_ro: "Halaakat", u_hi: "हलाकत", u_en: "Destruction", m: "الْهَلَاكُ", t: "تباہی", t_ro: "Tabaahi", t_hi: "तबाही", t_en: "Ruin" },
        { a: "نَجَاة", r: "Najaah", u: "نجات", u_ro: "Najaat", u_hi: "नजात", u_en: "Salvation", m: "النَّجَاةُ", t: "نجات", t_ro: "Najaat", t_hi: "नजात", t_en: "Deliverance" },
        { a: "حَشْر", r: "Hashr", u: "جمع کیا جانا", u_ro: "Jama kiya jaana", u_hi: "जमा किया जाना", u_en: "Gathering", m: "الْحَشْرُ", t: "جمع", t_ro: "Jama", t_hi: "जमा", t_en: "Gathering" },
        { a: "يَوْمَ الدِّين", r: "Yawm ad-Deen", u: "بدلے کا دن", u_ro: "Badle ka din", u_hi: "बदले का दिन", u_en: "Day of Judgment", m: "يَوْمِ الدِّينِ", t: "قیامت", t_ro: "Qayaamat", t_hi: "क़यामत", t_en: "Resurrection" },
        { a: "غَيْب", r: "Ghayb", u: "غیب", u_ro: "Ghaib", u_hi: "ग़ैब", u_en: "The unseen", m: "الْغَيْبِ", t: "چھپی چیز", t_ro: "Chhupi cheez", t_hi: "छुपी चीज़", t_en: "Hidden thing" },
        { a: "عَرْش", r: "Arsh", u: "عرش", u_ro: "Arsh", u_hi: "अर्श", u_en: "Throne", m: "الْعَرْشِ", t: "تخت", t_ro: "Takht", t_hi: "तख़्त", t_en: "Throne" },
        { a: "كُرْسِيّ", r: "Kursiyy", u: "کرسی", u_ro: "Kursi", u_hi: "कुर्सी", u_en: "Kursi, Footstool", m: "الْكُرْسِيُّ", t: "کرسی", t_ro: "Kursi", t_hi: "कुर्सी", t_en: "Kursi" }
    ] },
    { day: 72, words: [
        { a: "زَقُّوم", r: "Zaqqoom", u: "زقوم", u_ro: "Zaqqoom", u_hi: "ज़क़्क़ूम", u_en: "Zaqqum tree", m: "الزَّقُّومِ", t: "درخت", t_ro: "Darakht", t_hi: "दरख़्त", t_en: "Tree of Hell" },
        { a: "حَمِيم", r: "Hameem", u: "کھولتا پانی", u_ro: "Kholta paani", u_hi: "खौलता पानी", u_en: "Boiling water", m: "الْحَمِيمِ", t: "پانی", t_ro: "Paani", t_hi: "पानी", t_en: "Hot water" },
        { a: "نَعِيم", r: "Na'eem", u: "نعمتیں", u_ro: "Nemtein", u_hi: "नेमतें", u_en: "Bliss, blessings", m: "النَّعِيمِ", t: "نعمت", t_ro: "Nemat", t_hi: "नेमत", t_en: "Blessings" },
        { a: "رِضْوَان", r: "Ridwaan", u: "رضا", u_ro: "Raza", u_hi: "रज़ा", u_en: "Pleasure, approval", m: "رِضْوَانٌ", t: "خوشی", t_ro: "Khushi", t_hi: "ख़ुशी", t_en: "Allah's pleasure" },
        { a: "حُور", r: "Hoor", u: "حوریں", u_ro: "Hoorein", u_hi: "हूरें", u_en: "Houris", m: "حُورٌ", t: "حور", t_ro: "Hoor", t_hi: "हूर", t_en: "Houris" },
        { a: "أَنْهَار", r: "Anhaar", u: "نہریں", u_ro: "Nehrein", u_hi: "नहरें", u_en: "Rivers", m: "الْأَنْهَارُ", t: "نہریں", t_ro: "Nehrein", t_hi: "नहरें", t_en: "Rivers" },
        { a: "فَاكِهَة", r: "Faakihah", u: "میوہ", u_ro: "Meva", u_hi: "मेवा", u_en: "Fruit", m: "الْفَاكِهَةُ", t: "پھل", t_ro: "Phal", t_hi: "फल", t_en: "Fruit" },
        { a: "مُحَمَّد", r: "Muhammad", u: "محمد ﷺ", u_ro: "Muhammad ﷺ", u_hi: "मुहम्मद ﷺ", u_en: "Muhammad (peace be upon him)", m: "مُحَمَّدٌ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "آدَم", r: "Aadam", u: "آدم علیہ السلام", u_ro: "Aadam alaihis-salaam", u_hi: "आदम अलैहिस्सलाम", u_en: "Adam (peace be upon him)", m: "آدَمُ", t: "پہلے انسان", t_ro: "Pehle insaan", t_hi: "पहले इंसान", t_en: "First human" },
        { a: "نُوح", r: "Nooh", u: "نوح علیہ السلام", u_ro: "Nooh alaihis-salaam", u_hi: "नूह अलैहिस्सलाम", u_en: "Nuh (Noah)", m: "نُوحٌ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" }
    ] },
    { day: 73, words: [
        { a: "إِبْرَاهِيم", r: "Ibraaheem", u: "ابراہیم علیہ السلام", u_ro: "Ibraheem alaihis-salaam", u_hi: "इब्राहीम अलैहिस्सलाम", u_en: "Ibrahim (Abraham)", m: "إِبْرَاهِيمُ", t: "خلیل اللہ", t_ro: "Khaleelullah", t_hi: "ख़लीलुल्लाह", t_en: "Friend of Allah" },
        { a: "إِسْمَاعِيل", r: "Ismaa'eel", u: "اسماعیل علیہ السلام", u_ro: "Ismaeel alaihis-salaam", u_hi: "इस्माईल अलैहिस्सलाम", u_en: "Ismail (Ishmael)", m: "إِسْمَاعِيلُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "إِسْحَاق", r: "Is-haaq", u: "اسحاق علیہ السلام", u_ro: "Ishaaq alaihis-salaam", u_hi: "इसहाक़ अलैहिस्सलाम", u_en: "Ishaq (Isaac)", m: "إِسْحَاقُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "يَعْقُوب", r: "Ya'qoob", u: "یعقوب علیہ السلام", u_ro: "Yaqoob alaihis-salaam", u_hi: "याक़ूब अलैहिस्सलाम", u_en: "Yaqub (Jacob)", m: "يَعْقُوبُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "يُوسُف", r: "Yoosuf", u: "یوسف علیہ السلام", u_ro: "Yusuf alaihis-salaam", u_hi: "यूसुफ़ अलैहिस्सलाम", u_en: "Yusuf (Joseph)", m: "يُوسُفُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "مُوسَى", r: "Moosaa", u: "موسیٰ علیہ السلام", u_ro: "Moosa alaihis-salaam", u_hi: "मूसा अलैहिस्सलाम", u_en: "Musa (Moses)", m: "مُوسَى", t: "کلیم اللہ", t_ro: "Kaleemullah", t_hi: "कलीमुल्लाह", t_en: "Spoke with Allah" },
        { a: "هَارُون", r: "Haaroon", u: "ہارون علیہ السلام", u_ro: "Haroon alaihis-salaam", u_hi: "हारून अलैहिस्सलाम", u_en: "Harun (Aaron)", m: "هَارُونُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "عِيسَى", r: "Eesaa", u: "عیسیٰ علیہ السلام", u_ro: "Eesa alaihis-salaam", u_hi: "ईसा अलैहिस्सलाम", u_en: "Isa (Jesus)", m: "عِيسَى", t: "روح اللہ", t_ro: "Roohullah", t_hi: "रूहुल्लाह", t_en: "Spirit from Allah" },
        { a: "مَرْيَم", r: "Maryam", u: "مریم علیہا السلام", u_ro: "Maryam alaihas-salaam", u_hi: "मरयम अलैहस्सलाम", u_en: "Maryam (Mary)", m: "مَرْيَمُ", t: "عورت", t_ro: "Aurat", t_hi: "औरत", t_en: "Woman" },
        { a: "دَاوُود", r: "Daawood", u: "داؤد علیہ السلام", u_ro: "Dawood alaihis-salaam", u_hi: "दाऊद अलैहिस्सलाम", u_en: "Dawud (David)", m: "دَاوُودُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" }
    ] },
    { day: 74, words: [
        { a: "سُلَيْمَان", r: "Sulaymaan", u: "سلیمان علیہ السلام", u_ro: "Sulaiman alaihis-salaam", u_hi: "सुलैमान अलैहिस्सलाम", u_en: "Sulaiman (Solomon)", m: "سُلَيْمَانُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "أَيُّوب", r: "Ayyoob", u: "ایوب علیہ السلام", u_ro: "Ayyoob alaihis-salaam", u_hi: "अय्यूब अलैहिस्सलाम", u_en: "Ayyub (Job)", m: "أَيُّوبُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "يُونُس", r: "Yoonus", u: "یونس علیہ السلام", u_ro: "Yoonus alaihis-salaam", u_hi: "यूनुस अलैहिस्सलाम", u_en: "Yunus (Jonah)", m: "يُونُسُ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "زَكَرِيَّا", r: "Zakariyyaa", u: "زکریا علیہ السلام", u_ro: "Zakariyya alaihis-salaam", u_hi: "ज़करिया अलैहिस्सलाम", u_en: "Zakariyya (Zechariah)", m: "زَكَرِيَّا", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "يَحْيَى", r: "Yahyaa", u: "یحییٰ علیہ السلام", u_ro: "Yahya alaihis-salaam", u_hi: "यह्या अलैहिस्सलाम", u_en: "Yahya (John)", m: "يَحْيَى", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "هُود", r: "Hood", u: "ہود علیہ السلام", u_ro: "Hood alaihis-salaam", u_hi: "हूद अलैहिस्सलाम", u_en: "Hud", m: "هُودٌ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "شُعَيْب", r: "Shu'ayb", u: "شعیب علیہ السلام", u_ro: "Shuaib alaihis-salaam", u_hi: "शुऐब अलैहिस्सलाम", u_en: "Shuaib", m: "شُعَيْبٌ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "لُوط", r: "Loot", u: "لوط علیہ السلام", u_ro: "Loot alaihis-salaam", u_hi: "लूत अलैहिस्सलाम", u_en: "Lut (Lot)", m: "لُوطٌ", t: "نبی", t_ro: "Nabi", t_hi: "नबी", t_en: "Prophet" },
        { a: "فِرْعَوْن", r: "Fir'awn", u: "فرعون", u_ro: "Firaun", u_hi: "फ़िरऔन", u_en: "Pharaoh", m: "فِرْعَوْنُ", t: "بادشاہ", t_ro: "Baadshaah", t_hi: "बादशाह", t_en: "King" },
        { a: "قَارُون", r: "Qaaroon", u: "قارون", u_ro: "Qaaroon", u_hi: "क़ारून", u_en: "Qarun (Korah)", m: "قَارُونُ", t: "دولت مند", t_ro: "Daulatmand", t_hi: "दौलतमंद", t_en: "Wealthy man" }
    ] },
    { day: 75, words: [
        { a: "لُقْمَان", r: "Luqmaan", u: "لقمان", u_ro: "Luqmaan", u_hi: "लुक़मान", u_en: "Luqman", m: "لُقْمَانُ", t: "حکیم", t_ro: "Hakeem", t_hi: "हकीम", t_en: "Wise man" },
        { a: "إِسْرَائِيل", r: "Israa'eel", u: "اسرائیل", u_ro: "Israaeel", u_hi: "इसराईल", u_en: "Israel (Yaqub)", m: "إِسْرَائِيلَ", t: "یعقوب", t_ro: "Yaqoob", t_hi: "याक़ूब", t_en: "Jacob" },
        { a: "مِصْر", r: "Misr", u: "مصر", u_ro: "Misr", u_hi: "मिस्र", u_en: "Egypt", m: "مِصْرَ", t: "ملک", t_ro: "Mulk", t_hi: "मुल्क", t_en: "Country" },
        { a: "طُور", r: "Toor", u: "طور پہاڑ", u_ro: "Toor pahaad", u_hi: "तूर पहाड़", u_en: "Mount Tur (Sinai)", m: "الطُّورِ", t: "پہاڑ", t_ro: "Pahaad", t_hi: "पहाड़", t_en: "Mountain" },
        { a: "تَوْرَاة", r: "Tawraah", u: "تورات", u_ro: "Taurat", u_hi: "तौरात", u_en: "Torah (Tawrat)", m: "التَّوْرَاةَ", t: "کتاب", t_ro: "Kitaab", t_hi: "किताब", t_en: "Book" },
        { a: "إِنْجِيل", r: "Injeel", u: "انجیل", u_ro: "Injeel", u_hi: "इंजील", u_en: "Gospel (Injil)", m: "الْإِنجِيلَ", t: "کتاب", t_ro: "Kitaab", t_hi: "किताब", t_en: "Book" },
        { a: "زَبُور", r: "Zaboor", u: "زبور", u_ro: "Zaboor", u_hi: "ज़बूर", u_en: "Psalms (Zabur)", m: "الزَّبُورَ", t: "کتاب", t_ro: "Kitaab", t_hi: "किताब", t_en: "Book" },
        { a: "صُحُف", r: "Suhuf", u: "صحیفے", u_ro: "Sahifay", u_hi: "सहीफ़े", u_en: "Scrolls", m: "الصُّحُفِ", t: "کتاب", t_ro: "Kitaab", t_hi: "किताब", t_en: "Book" },
        { a: "قَالَ", r: "Qaala", u: "اس نے کہا", u_ro: "Us ne kaha", u_hi: "उसने कहा", u_en: "He said", m: "قَالَ", t: "کہنا", t_ro: "Kehna", t_hi: "कहना", t_en: "Saying" },
        { a: "قَالُوا", r: "Qaaloo", u: "انہوں نے کہا", u_ro: "Unhon ne kaha", u_hi: "उन्होंने कहा", u_en: "They said", m: "قَالُوا", t: "کہنا", t_ro: "Kehna", t_hi: "कहना", t_en: "Saying" }
    ] },
    { day: 76, words: [
        { a: "يَقُولُ", r: "Yaqoolu", u: "وہ کہتا ہے", u_ro: "Woh kehta hai", u_hi: "वह कहता है", u_en: "He says", m: "يَقُولُ", t: "کہنا", t_ro: "Kehna", t_hi: "कहना", t_en: "Saying" },
        { a: "قُلْ", r: "Qul", u: "کہہ دو", u_ro: "Keh do", u_hi: "कह दो", u_en: "Say!", m: "قُلْ", t: "کہنا", t_ro: "Kehna", t_hi: "कहना", t_en: "Saying" },
        { a: "كَانَ", r: "Kaana", u: "تھا", u_ro: "Tha", u_hi: "था", u_en: "He was", m: "كَانَ", t: "تھا", t_ro: "Tha", t_hi: "था", t_en: "Was" },
        { a: "كَانُوا", r: "Kaanoo", u: "وہ تھے", u_ro: "Woh the", u_hi: "वे थे", u_en: "They were", m: "كَانُوا", t: "تھے", t_ro: "The", t_hi: "थे", t_en: "Were" },
        { a: "يَكُونُ", r: "Yakoonu", u: "ہوتا ہے", u_ro: "Hota hai", u_hi: "होता है", u_en: "He is, becomes", m: "يَكُونُ", t: "ہونا", t_ro: "Hona", t_hi: "होना", t_en: "Being" },
        { a: "كُنْ", r: "Kun", u: "ہو جا", u_ro: "Ho ja", u_hi: "हो जा", u_en: "Be!", m: "كُنْ", t: "ہونا", t_ro: "Hona", t_hi: "होना", t_en: "Being" },
        { a: "جَاءَ", r: "Jaa'a", u: "آیا", u_ro: "Aaya", u_hi: "आया", u_en: "He came", m: "جَاءَ", t: "آنا", t_ro: "Aana", t_hi: "आना", t_en: "Coming" },
        { a: "أَتَى", r: "Ataa", u: "آیا", u_ro: "Aaya", u_hi: "आया", u_en: "He came", m: "أَتَى", t: "آنا", t_ro: "Aana", t_hi: "आना", t_en: "Coming" },
        { a: "يَأْتِي", r: "Ya'tee", u: "آتا ہے", u_ro: "Aata hai", u_hi: "आता है", u_en: "He comes", m: "يَأْتِي", t: "آنا", t_ro: "Aana", t_hi: "आना", t_en: "Coming" },
        { a: "خَرَجَ", r: "Kharaja", u: "نکلا", u_ro: "Nikla", u_hi: "निकला", u_en: "He went out", m: "خَرَجَ", t: "نکلنا", t_ro: "Nikalna", t_hi: "निकलना", t_en: "Going out" }
    ] },
    { day: 77, words: [
        { a: "دَخَلَ", r: "Dakhala", u: "داخل ہوا", u_ro: "Daakhil hua", u_hi: "दाख़िल हुआ", u_en: "He entered", m: "دَخَلَ", t: "داخل ہونا", t_ro: "Daakhil hona", t_hi: "दाख़िल होना", t_en: "Entering" },
        { a: "ادْخُلُوا", r: "Udkhuloo", u: "داخل ہو جاؤ", u_ro: "Daakhil ho jaao", u_hi: "दाख़िल हो जाओ", u_en: "Enter!", m: "ادْخُلُوا", t: "داخل ہونا", t_ro: "Daakhil hona", t_hi: "दाख़िल होना", t_en: "Entering" },
        { a: "رَجَعَ", r: "Raja'a", u: "لوٹا", u_ro: "Lauta", u_hi: "लौटा", u_en: "He returned", m: "رَجَعَ", t: "واپس", t_ro: "Waapas", t_hi: "वापस", t_en: "Returning" },
        { a: "اتَّبَعَ", r: "Ittaba'a", u: "پیروی کی", u_ro: "Pairwi ki", u_hi: "पैरवी की", u_en: "He followed", m: "اتَّبَعَ", t: "پیروی", t_ro: "Pairwi", t_hi: "पैरवी", t_en: "Following" },
        { a: "قَامَ", r: "Qaama", u: "کھڑا ہوا", u_ro: "Khada hua", u_hi: "खड़ा हुआ", u_en: "He stood", m: "قَامَ", t: "کھڑا ہونا", t_ro: "Khada hona", t_hi: "खड़ा होना", t_en: "Standing" },
        { a: "خَلَقَ", r: "Khalaqa", u: "پیدا کیا", u_ro: "Paida kiya", u_hi: "पैदा किया", u_en: "He created", m: "خَلَقَ", t: "پیدا کرنا", t_ro: "Paida karna", t_hi: "पैदा करना", t_en: "Creating" },
        { a: "جَعَلَ", r: "Ja'ala", u: "بنایا", u_ro: "Banaya", u_hi: "बनाया", u_en: "He made", m: "جَعَلَ", t: "بنانا", t_ro: "Banaana", t_hi: "बनाना", t_en: "Making" },
        { a: "أَنْزَلَ", r: "Anzala", u: "اتارا", u_ro: "Utaara", u_hi: "उतारा", u_en: "He sent down", m: "أَنْزَلَ", t: "نازل کرنا", t_ro: "Naazil karna", t_hi: "नाज़िल करना", t_en: "Sending down" },
        { a: "أَرْسَلَ", r: "Arsala", u: "بھیجا", u_ro: "Bheja", u_hi: "भेजा", u_en: "He sent", m: "أَرْسَلَ", t: "بھیجنا", t_ro: "Bhejna", t_hi: "भेजना", t_en: "Sending" },
        { a: "فَعَلَ", r: "Fa'ala", u: "کیا", u_ro: "Kya", u_hi: "क्या", u_en: "He did", m: "فَعَلَ", t: "کرنا", t_ro: "Karna", t_hi: "करना", t_en: "Doing" }
    ] },
    { day: 78, words: [
        { a: "عَمِلَ", r: "Amila", u: "کام کیا", u_ro: "Kaam kiya", u_hi: "काम किया", u_en: "He did, worked", m: "عَمِلَ", t: "عمل کرنا", t_ro: "Amal karna", t_hi: "अमल करना", t_en: "Doing deeds" },
        { a: "أَخَذَ", r: "Akhadha", u: "لیا", u_ro: "Liya", u_hi: "लिया", u_en: "He took", m: "أَخَذَ", t: "پکڑنا", t_ro: "Pakadna", t_hi: "पकड़ना", t_en: "Taking" },
        { a: "أَعْطَى", r: "A'taa", u: "دیا", u_ro: "Diya", u_hi: "दिया", u_en: "He gave", m: "أَعْطَى", t: "دینا", t_ro: "Dena", t_hi: "देना", t_en: "Giving" },
        { a: "تَرَكَ", r: "Taraka", u: "چھوڑا", u_ro: "Chhoda", u_hi: "छोड़ा", u_en: "He left", m: "تَرَكَ", t: "چھوڑنا", t_ro: "Chhodna", t_hi: "छोड़ना", t_en: "Leaving" },
        { a: "وَجَدَ", r: "Wajada", u: "پایا", u_ro: "Paaya", u_hi: "पाया", u_en: "He found", m: "وَجَدَ", t: "پانا", t_ro: "Paana", t_hi: "पाना", t_en: "Finding" },
        { a: "رَأَى", r: "Ra'aa", u: "دیکھا", u_ro: "Dekha", u_hi: "देखा", u_en: "He saw", m: "رَأَى", t: "دیکھنا", t_ro: "Dekhna", t_hi: "देखना", t_en: "Seeing" },
        { a: "نَظَرَ", r: "Nazara", u: "دیکھا", u_ro: "Dekha", u_hi: "देखा", u_en: "He looked", m: "نَظَرَ", t: "دیکھنا", t_ro: "Dekhna", t_hi: "देखना", t_en: "Looking" },
        { a: "انْظُرْ", r: "Unzur", u: "دیکھو", u_ro: "Dekho", u_hi: "देखो", u_en: "Look!", m: "انْظُرْ", t: "دیکھنا", t_ro: "Dekhna", t_hi: "देखना", t_en: "Looking" },
        { a: "يَعْلَمُ", r: "Ya'lamu", u: "وہ جانتا ہے", u_ro: "Woh jaanta hai", u_hi: "वह जानता है", u_en: "He knows", m: "يَعْلَمُ", t: "جاننا", t_ro: "Jaanna", t_hi: "जानना", t_en: "Knowing" },
        { a: "تَعْلَمُونَ", r: "Ta'lamoon", u: "تم جانتے ہو", u_ro: "Tum jaante ho", u_hi: "तुम जानते हो", u_en: "You know", m: "تَعْلَمُونَ", t: "جاننا", t_ro: "Jaanna", t_hi: "जानना", t_en: "Knowing" }
    ] },
    { day: 79, words: [
        { a: "يَتَفَكَّرُونَ", r: "Yatafakkaroo", u: "وہ غور کرتے ہیں", u_ro: "Woh ghaur karte hain", u_hi: "वे ग़ौर करते हैं", u_en: "They reflect", m: "يَتَفَكَّرُونَ", t: "غور", t_ro: "Ghaur", t_hi: "ग़ौर", t_en: "Reflection" },
        { a: "يَعْقِلُونَ", r: "Ya'qiloon", u: "وہ سمجھتے ہیں", u_ro: "Woh samajhte hain", u_hi: "वे समझते हैं", u_en: "They understand", m: "يَعْقِلُونَ", t: "سمجھنا", t_ro: "Samajhna", t_hi: "समझना", t_en: "Understanding" },
        { a: "اذْكُرُوا", r: "Udhkuroo", u: "یاد کرو", u_ro: "Yaad karo", u_hi: "याद करो", u_en: "Remember!", m: "اذْكُرُوا", t: "یاد کرنا", t_ro: "Yaad karna", t_hi: "याद करना", t_en: "Remembering" },
        { a: "نَسِيَ", r: "Nasiya", u: "بھول گیا", u_ro: "Bhool gaya", u_hi: "भूल गया", u_en: "He forgot", m: "نَسِيَ", t: "بھولنا", t_ro: "Bhoolna", t_hi: "भूलना", t_en: "Forgetting" },
        { a: "شَاءَ", r: "Shaa'a", u: "چاہا", u_ro: "Chaaha", u_hi: "चाहा", u_en: "He willed", m: "شَاءَ", t: "چاہنا", t_ro: "Chaahna", t_hi: "चाहना", t_en: "Willing" },
        { a: "أَرَادَ", r: "Araada", u: "ارادہ کیا", u_ro: "Iraada kiya", u_hi: "इरादा किया", u_en: "He intended", m: "أَرَادَ", t: "چاہنا", t_ro: "Chaahna", t_hi: "चाहना", t_en: "Wanting" },
        { a: "أَحَبَّ", r: "Ahabba", u: "پسند کیا", u_ro: "Pasand kiya", u_hi: "पसंद किया", u_en: "He loved", m: "أَحَبَّ", t: "محبت", t_ro: "Mohabbat", t_hi: "मोहब्बत", t_en: "Love" },
        { a: "يُحِبُّ", r: "Yuhibb", u: "وہ پسند کرتا ہے", u_ro: "Woh pasand karta hai", u_hi: "वह पसंद करता है", u_en: "He loves", m: "يُحِبُّ", t: "پسند", t_ro: "Pasand", t_hi: "पसंद", t_en: "Loving" },
        { a: "كَرِهَ", r: "Kariha", u: "ناپسند کیا", u_ro: "Napasand kiya", u_hi: "नापसंद किया", u_en: "He disliked", m: "كَرِهَ", t: "ناپسند", t_ro: "Napasand", t_hi: "नापसंद", t_en: "Dislike" },
        { a: "خَافَ", r: "Khaafa", u: "ڈرا", u_ro: "Dara", u_hi: "डरा", u_en: "He feared", m: "خَافَ", t: "ڈرنا", t_ro: "Darna", t_hi: "डरना", t_en: "Fearing" }
    ] },
    { day: 80, words: [
        { a: "تَخَافُوا", r: "Takhaafoo", u: "ڈرو مت", u_ro: "Daro mat", u_hi: "डरो मत", u_en: "Do not fear", m: "تَخَافُوا", t: "ڈرنا", t_ro: "Darna", t_hi: "डरना", t_en: "Fearing" },
        { a: "خَشِيَ", r: "Khashiya", u: "ڈرا", u_ro: "Dara", u_hi: "डरा", u_en: "He feared", m: "خَشِيَ", t: "ڈرنا", t_ro: "Darna", t_hi: "डरना", t_en: "Fearing" },
        { a: "اتَّقُوا", r: "Ittaqoo", u: "ڈرو", u_ro: "Daro", u_hi: "डरो", u_en: "Fear (Allah)!", m: "اتَّقُوا", t: "بچنا", t_ro: "Bachna", t_hi: "बचना", t_en: "Guarding against" },
        { a: "يَرْجُو", r: "Yarjoo", u: "وہ امید رکھتا ہے", u_ro: "Woh umeed rakhta hai", u_hi: "वह उम्मीद रखता है", u_en: "He hopes", m: "يَرْجُو", t: "امید", t_ro: "Umeed", t_hi: "उम्मीद", t_en: "Hope" },
        { a: "دَعَا", r: "Da'aa", u: "پکارا", u_ro: "Pukaara", u_hi: "पुकारा", u_en: "He called", m: "دَعَا", t: "دعا", t_ro: "Dua", t_hi: "दुआ", t_en: "Calling" },
        { a: "ادْعُوا", r: "Ud'oo", u: "پکارو", u_ro: "Pukaaro", u_hi: "पुकारो", u_en: "Call!", m: "ادْعُوا", t: "دعا", t_ro: "Dua", t_hi: "दुआ", t_en: "Calling" },
        { a: "سَأَلَ", r: "Sa'ala", u: "پوچھا", u_ro: "Poochha", u_hi: "पूछा", u_en: "He asked", m: "سَأَلَ", t: "پوچھنا", t_ro: "Poochhna", t_hi: "पूछना", t_en: "Asking" },
        { a: "أَجَابَ", r: "Ajaaba", u: "جواب دیا", u_ro: "Jawaab diya", u_hi: "जवाब दिया", u_en: "He answered", m: "أَجَابَ", t: "جواب", t_ro: "Jawaab", t_hi: "जवाब", t_en: "Answering" },
        { a: "اسْتَجَابَ", r: "Istajaaba", u: "قبول کیا", u_ro: "Qubool kiya", u_hi: "क़बूल किया", u_en: "He responded", m: "اسْتَجَابَ", t: "قبول", t_ro: "Qubool", t_hi: "क़बूल", t_en: "Accepting" },
        { a: "غَفَرَ", r: "Ghafara", u: "بخش دیا", u_ro: "Bakhsh diya", u_hi: "बख़्श दिया", u_en: "He forgave", m: "غَفَرَ", t: "بخشنا", t_ro: "Bakhshna", t_hi: "बख़्शना", t_en: "Forgiving" }
    ] },
    { day: 81, words: [
        { a: "اغْفِرْ", r: "Ighfir", u: "بخش دے", u_ro: "Bakhsh de", u_hi: "बख़्श दे", u_en: "Forgive!", m: "اغْفِرْ", t: "بخشنا", t_ro: "Bakhshna", t_hi: "बख़्शना", t_en: "Forgiving" },
        { a: "رَحِمَ", r: "Rahima", u: "رحم کیا", u_ro: "Rahm kiya", u_hi: "रहम किया", u_en: "He had mercy", m: "رَحِمَ", t: "رحم", t_ro: "Rahm", t_hi: "रहम", t_en: "Mercy" },
        { a: "ارْحَمْ", r: "Irham", u: "رحم کر", u_ro: "Rahm kar", u_hi: "रहम कर", u_en: "Have mercy!", m: "ارْحَمْ", t: "رحم", t_ro: "Rahm", t_hi: "रहम", t_en: "Mercy" },
        { a: "اهْدِنَا", r: "Ihdinaa", u: "ہمیں ہدایت دے", u_ro: "Hamein hidaayat de", u_hi: "हमें हिदायत दे", u_en: "Guide us!", m: "اهْدِنَا", t: "ہدایت", t_ro: "Hidaayat", t_hi: "हिदायत", t_en: "Guidance" },
        { a: "ضَلَّ", r: "Dalla", u: "گمراہ ہوا", u_ro: "Gumraah hua", u_hi: "गुमराह हुआ", u_en: "He went astray", m: "ضَلَّ", t: "گمراہ", t_ro: "Gumraah", t_hi: "गुमराह", t_en: "Straying" },
        { a: "أَضَلَّ", r: "Adalla", u: "گمراہ کیا", u_ro: "Gumraah kiya", u_hi: "गुमराह किया", u_en: "He led astray", m: "أَضَلَّ", t: "گمراہ", t_ro: "Gumraah", t_hi: "गुमराह", t_en: "Misguiding" },
        { a: "آمَنَ", r: "Aamana", u: "ایمان لایا", u_ro: "Imaan laaya", u_hi: "ईमान लाया", u_en: "He believed", m: "آمَنَ", t: "ایمان", t_ro: "Imaan", t_hi: "ईमान", t_en: "Faith" },
        { a: "آمَنُوا", r: "Aamanoo", u: "ایمان لائے", u_ro: "Imaan laaye", u_hi: "ईमान लाए", u_en: "They believed", m: "آمَنُوا", t: "ایمان", t_ro: "Imaan", t_hi: "ईमान", t_en: "Faith" },
        { a: "كَفَرَ", r: "Kafara", u: "انکار کیا", u_ro: "Inkaar kiya", u_hi: "इनकार किया", u_en: "He disbelieved", m: "كَفَرَ", t: "کفر", t_ro: "Kufr", t_hi: "कुफ़्र", t_en: "Disbelief" },
        { a: "كَفَرُوا", r: "Kafaroo", u: "انہوں نے انکار کیا", u_ro: "Unhon ne inkaar kiya", u_hi: "उन्होंने इनकार किया", u_en: "They disbelieved", m: "كَفَرُوا", t: "کفر", t_ro: "Kufr", t_hi: "कुफ़्र", t_en: "Disbelief" }
    ] },
    { day: 82, words: [
        { a: "صَدَقَ", r: "Sadaqa", u: "سچ کہا", u_ro: "Sach kaha", u_hi: "सच कहा", u_en: "He spoke truth", m: "صَدَقَ", t: "سچ", t_ro: "Sach", t_hi: "सच", t_en: "Truth" },
        { a: "كَذَبَ", r: "Kadhaba", u: "جھوٹ بولا", u_ro: "Jhoot bola", u_hi: "झूठ बोला", u_en: "He lied", m: "كَذَبَ", t: "جھوٹ", t_ro: "Jhoot", t_hi: "झूठ", t_en: "Lying" },
        { a: "كَذَّبُوا", r: "Kadhdhaboo", u: "انہوں نے جھٹلایا", u_ro: "Unhon ne jhutlaaya", u_hi: "उन्होंने झुठलाया", u_en: "They denied", m: "كَذَّبُوا", t: "جھوٹ", t_ro: "Jhoot", t_hi: "झूठ", t_en: "Denial" },
        { a: "ظَلَمَ", r: "Zalama", u: "ظلم کیا", u_ro: "Zulm kiya", u_hi: "ज़ुल्म किया", u_en: "He wronged", m: "ظَلَمَ", t: "ظلم", t_ro: "Zulm", t_hi: "ज़ुल्म", t_en: "Wrongdoing" },
        { a: "عَصَى", r: "Asaa", u: "نافرمانی کی", u_ro: "Nafarmaani ki", u_hi: "नाफ़रमानी की", u_en: "He disobeyed", m: "عَصَى", t: "نافرمانی", t_ro: "Nafarmaani", t_hi: "नाफ़रमानी", t_en: "Disobedience" },
        { a: "أَطِيعُوا", r: "Atee'oo", u: "اطاعت کرو", u_ro: "Itaat karo", u_hi: "इताअत करो", u_en: "Obey!", m: "أَطِيعُوا", t: "اطاعت", t_ro: "Itaat", t_hi: "इताअत", t_en: "Obedience" },
        { a: "اصْبِرْ", r: "Isbir", u: "صبر کر", u_ro: "Sabr kar", u_hi: "सब्र कर", u_en: "Be patient!", m: "اصْبِرْ", t: "صبر", t_ro: "Sabr", t_hi: "सब्र", t_en: "Patience" },
        { a: "اعْبُدُوا", r: "U'budoo", u: "عبادت کرو", u_ro: "Ibaadat karo", u_hi: "इबादत करो", u_en: "Worship!", m: "اعْبُدُوا", t: "عبادت", t_ro: "Ibaadat", t_hi: "इबादत", t_en: "Worship" },
        { a: "أَقِيمُوا", r: "Aqeemoo", u: "قائم کرو", u_ro: "Qaaim karo", u_hi: "क़ायम करो", u_en: "Establish!", m: "أَقِيمُوا", t: "قائم", t_ro: "Qaaim", t_hi: "क़ायम", t_en: "Establishing" },
        { a: "آتُوا", r: "Aatoo", u: "ادا کرو", u_ro: "Ada karo", u_hi: "अदा करो", u_en: "Give!", m: "آتُوا", t: "دینا", t_ro: "Dena", t_hi: "देना", t_en: "Giving" }
    ] },
    { day: 83, words: [
        { a: "ارْكَعُوا", r: "Irka'oo", u: "رکوع کرو", u_ro: "Rukoo karo", u_hi: "रुकू करो", u_en: "Bow!", m: "ارْكَعُوا", t: "رکوع", t_ro: "Rukoo", t_hi: "रुकू", t_en: "Bowing" },
        { a: "اسْجُدُوا", r: "Usjudoo", u: "سجدہ کرو", u_ro: "Sajda karo", u_hi: "सज्दा करो", u_en: "Prostrate!", m: "اسْجُدُوا", t: "سجدہ", t_ro: "Sajda", t_hi: "सज्दा", t_en: "Prostration" },
        { a: "تَابَ", r: "Taaba", u: "توبہ کی", u_ro: "Tauba ki", u_hi: "तौबा की", u_en: "He repented", m: "تَابَ", t: "توبہ", t_ro: "Tauba", t_hi: "तौबा", t_en: "Repentance" },
        { a: "هَاجَرَ", r: "Haajara", u: "ہجرت کی", u_ro: "Hijrat ki", u_hi: "हिजरत की", u_en: "He migrated", m: "هَاجَرَ", t: "ہجرت", t_ro: "Hijrat", t_hi: "हिजरत", t_en: "Migration" },
        { a: "قَاتَلَ", r: "Qaatala", u: "لڑائی کی", u_ro: "Ladaai ki", u_hi: "लड़ाई की", u_en: "He fought", m: "قَاتَلَ", t: "جنگ", t_ro: "Jang", t_hi: "जंग", t_en: "Fighting" },
        { a: "قَتَلَ", r: "Qatala", u: "قتل کیا", u_ro: "Qatl kiya", u_hi: "क़त्ल किया", u_en: "He killed", m: "قَتَلَ", t: "قتل", t_ro: "Qatl", t_hi: "क़त्ल", t_en: "Killing" },
        { a: "مَاتَ", r: "Maata", u: "مر گیا", u_ro: "Mar gaya", u_hi: "मर गया", u_en: "He died", m: "مَاتَ", t: "موت", t_ro: "Maut", t_hi: "मौत", t_en: "Death" },
        { a: "أَحْيَا", r: "Ahyaa", u: "زندہ کیا", u_ro: "Zinda kiya", u_hi: "ज़िंदा किया", u_en: "He gave life", m: "أَحْيَا", t: "زندگی", t_ro: "Zindagi", t_hi: "ज़िंदगी", t_en: "Giving life" },
        { a: "أَمَاتَ", r: "Amaata", u: "موت دی", u_ro: "Maut di", u_hi: "मौत दी", u_en: "He caused death", m: "أَمَاتَ", t: "موت", t_ro: "Maut", t_hi: "मौत", t_en: "Causing death" },
        { a: "أَنْفَقَ", r: "Anfaqa", u: "خرچ کیا", u_ro: "Kharch kiya", u_hi: "ख़र्च किया", u_en: "He spent", m: "أَنْفَقَ", t: "خرچ", t_ro: "Kharch", t_hi: "ख़र्च", t_en: "Spending" }
    ] },
    { day: 84, words: [
        { a: "أَنْفِقُوا", r: "Anfiquoo", u: "خرچ کرو", u_ro: "Kharch karo", u_hi: "ख़र्च करो", u_en: "Spend!", m: "أَنْفِقُوا", t: "خرچ", t_ro: "Kharch", t_hi: "ख़र्च", t_en: "Spending" },
        { a: "أَكَلَ", r: "Akala", u: "کھایا", u_ro: "Khaaya", u_hi: "खाया", u_en: "He ate", m: "أَكَلَ", t: "کھانا", t_ro: "Khaana", t_hi: "खाना", t_en: "Eating" },
        { a: "كُلُوا", r: "Kuloo", u: "کھاؤ", u_ro: "Khaao", u_hi: "खाओ", u_en: "Eat!", m: "كُلُوا", t: "کھانا", t_ro: "Khaana", t_hi: "खाना", t_en: "Eating" },
        { a: "شَرِبَ", r: "Shariba", u: "پیا", u_ro: "Piya", u_hi: "पिया", u_en: "He drank", m: "شَرِبَ", t: "پینا", t_ro: "Peena", t_hi: "पीना", t_en: "Drinking" },
        { a: "اشْرَبُوا", r: "Ishraboo", u: "پیو", u_ro: "Piyo", u_hi: "पियो", u_en: "Drink!", m: "اشْرَبُوا", t: "پینا", t_ro: "Peena", t_hi: "पीना", t_en: "Drinking" },
        { a: "سَارَ", r: "Saara", u: "چلا", u_ro: "Chala", u_hi: "चला", u_en: "He walked", m: "سَارَ", t: "چلنا", t_ro: "Chalna", t_hi: "चलना", t_en: "Walking" },
        { a: "سِيرُوا", r: "Seeroo", u: "چلو پھرو", u_ro: "Chalo phiro", u_hi: "चलो-फिरो", u_en: "Travel!", m: "سِيرُوا", t: "چلنا", t_ro: "Chalna", t_hi: "चलना", t_en: "Travelling" },
        { a: "أَخْرَجَ", r: "Akhraja", u: "نکالا", u_ro: "Nikaala", u_hi: "निकाला", u_en: "He took out", m: "أَخْرَجَ", t: "نکالنا", t_ro: "Nikaalna", t_hi: "निकालना", t_en: "Taking out" },
        { a: "أَدْخَلَ", r: "Adkhala", u: "داخل کیا", u_ro: "Daakhil kiya", u_hi: "दाख़िल किया", u_en: "He admitted", m: "أَدْخَلَ", t: "داخل", t_ro: "Daakhil", t_hi: "दाख़िल", t_en: "Admitting" },
        { a: "رَفَعَ", r: "Rafa'a", u: "بلند کیا", u_ro: "Buland kiya", u_hi: "बुलंद किया", u_en: "He raised", m: "رَفَعَ", t: "بلند", t_ro: "Buland", t_hi: "बुलंद", t_en: "Raising" }
    ] },
    { day: 85, words: [
        { a: "جَمَعَ", r: "Jama'a", u: "جمع کیا", u_ro: "Jama kiya", u_hi: "जमा किया", u_en: "He gathered", m: "جَمَعَ", t: "جمع", t_ro: "Jama", t_hi: "जमा", t_en: "Gathering" },
        { a: "حَكَمَ", r: "Hakama", u: "فیصلہ کیا", u_ro: "Faisla kiya", u_hi: "फ़ैसला किया", u_en: "He judged", m: "حَكَمَ", t: "فیصلہ", t_ro: "Faisla", t_hi: "फ़ैसला", t_en: "Judging" },
        { a: "قَضَى", r: "Qadaa", u: "فیصلہ کر دیا", u_ro: "Faisla kar diya", u_hi: "फ़ैसला कर दिया", u_en: "He decreed", m: "قَضَى", t: "فیصلہ", t_ro: "Faisla", t_hi: "फ़ैसला", t_en: "Deciding" },
        { a: "قَصَّ", r: "Qassa", u: "بیان کیا", u_ro: "Bayaan kiya", u_hi: "बयान किया", u_en: "He narrated", m: "قَصَّ", t: "بیان", t_ro: "Bayaan", t_hi: "बयान", t_en: "Narrating" },
        { a: "كَتَبَ", r: "Kataba", u: "لکھا", u_ro: "Likha", u_hi: "लिखा", u_en: "He wrote, decreed", m: "كَتَبَ", t: "لکھنا", t_ro: "Likhna", t_hi: "लिखना", t_en: "Writing" },
        { a: "اقْرَأْ", r: "Iqra'", u: "پڑھو", u_ro: "Padho", u_hi: "पढ़ो", u_en: "Read!", m: "اقْرَأْ", t: "پڑھنا", t_ro: "Padhna", t_hi: "पढ़ना", t_en: "Reading" },
        { a: "تَلَا", r: "Talaa", u: "تلاوت کی", u_ro: "Tilaawat ki", u_hi: "तिलावत की", u_en: "He recited", m: "تَلَا", t: "پڑھنا", t_ro: "Padhna", t_hi: "पढ़ना", t_en: "Reciting" },
        { a: "أَمَرَ", r: "Amara", u: "حکم دیا", u_ro: "Hukm diya", u_hi: "हुक्म दिया", u_en: "He commanded", m: "أَمَرَ", t: "حکم", t_ro: "Hukm", t_hi: "हुक्म", t_en: "Command" },
        { a: "نَهَى", r: "Nahaa", u: "منع کیا", u_ro: "Mana kiya", u_hi: "मना किया", u_en: "He forbade", m: "نَهَى", t: "منع", t_ro: "Mana", t_hi: "मना", t_en: "Prohibition" },
        { a: "حَرَّمَ", r: "Harrama", u: "حرام کیا", u_ro: "Haraam kiya", u_hi: "हराम किया", u_en: "He made forbidden", m: "حَرَّمَ", t: "حرام", t_ro: "Haraam", t_hi: "हराम", t_en: "Forbidding" }
    ] },
    { day: 86, words: [
        { a: "أَحَلَّ", r: "Ahalla", u: "حلال کیا", u_ro: "Halaal kiya", u_hi: "हलाल किया", u_en: "He made lawful", m: "أَحَلَّ", t: "حلال", t_ro: "Halaal", t_hi: "हलाल", t_en: "Permitting" },
        { a: "بَدَّلَ", r: "Baddala", u: "بدل دیا", u_ro: "Badal diya", u_hi: "बदल दिया", u_en: "He changed", m: "بَدَّلَ", t: "بدلنا", t_ro: "Badalna", t_hi: "बदलना", t_en: "Changing" },
        { a: "بَلَغَ", r: "Balagha", u: "پہنچا", u_ro: "Pahuncha", u_hi: "पहुँचा", u_en: "He reached", m: "بَلَغَ", t: "پہنچنا", t_ro: "Pahunchna", t_hi: "पहुँचना", t_en: "Reaching" },
        { a: "ظَنَّ", r: "Zanna", u: "گمان کیا", u_ro: "Gumaan kiya", u_hi: "गुमान किया", u_en: "He thought", m: "ظَنَّ", t: "گمان", t_ro: "Gumaan", t_hi: "गुमान", t_en: "Thinking" },
        { a: "حَسِبَ", r: "Hasiba", u: "سمجھا", u_ro: "Samjha", u_hi: "समझा", u_en: "He supposed", m: "حَسِبَ", t: "سمجھنا", t_ro: "Samajhna", t_hi: "समझना", t_en: "Supposing" },
        { a: "أَنْذَرَ", r: "Andhara", u: "ڈرایا", u_ro: "Daraaya", u_hi: "डराया", u_en: "He warned", m: "أَنْذَرَ", t: "ڈرانا", t_ro: "Daraana", t_hi: "डराना", t_en: "Warning" },
        { a: "نَصَرَ", r: "Nasara", u: "مدد کی", u_ro: "Madad ki", u_hi: "मदद की", u_en: "He helped", m: "نَصَرَ", t: "مدد", t_ro: "Madad", t_hi: "मदद", t_en: "Helping" },
        { a: "هَلَكَ", r: "Halaka", u: "ہلاک ہوا", u_ro: "Halaak hua", u_hi: "हलाक हुआ", u_en: "He perished", m: "هَلَكَ", t: "ہلاک", t_ro: "Halaak", t_hi: "हलाक", t_en: "Perishing" },
        { a: "أَهْلَكَ", r: "Ahlaka", u: "ہلاک کیا", u_ro: "Halaak kiya", u_hi: "हलाक किया", u_en: "He destroyed", m: "أَهْلَكَ", t: "ہلاک", t_ro: "Halaak", t_hi: "हलाक", t_en: "Destroying" },
        { a: "نَجَّى", r: "Najjaa", u: "بچا لیا", u_ro: "Bacha liya", u_hi: "बचा लिया", u_en: "He saved", m: "نَجَّى", t: "نجات", t_ro: "Najaat", t_hi: "नजात", t_en: "Saving" }
    ] },
    { day: 87, words: [
        { a: "غَلَبَ", r: "Ghalaba", u: "غالب آیا", u_ro: "Ghaalib aaya", u_hi: "ग़ालिब आया", u_en: "He prevailed", m: "غَلَبَ", t: "غالب", t_ro: "Ghaalib", t_hi: "ग़ालिब", t_en: "Prevailing" },
        { a: "ضَرَبَ", r: "Daraba", u: "مارا", u_ro: "Maara", u_hi: "मारा", u_en: "He struck", m: "ضَرَبَ", t: "مارنا", t_ro: "Maarna", t_hi: "मारना", t_en: "Striking" },
        { a: "فَتَحَ", r: "Fataha", u: "کھولا", u_ro: "Khola", u_hi: "खोला", u_en: "He opened", m: "فَتَحَ", t: "کھولنا", t_ro: "Kholna", t_hi: "खोलना", t_en: "Opening" },
        { a: "طَلَبَ", r: "Talaba", u: "مانگا", u_ro: "Maanga", u_hi: "माँगा", u_en: "He sought", m: "طَلَبَ", t: "مانگنا", t_ro: "Maangna", t_hi: "माँगना", t_en: "Seeking" },
        { a: "الْحَمْدُ لِلَّهِ", r: "Alhamdulillah", u: "تمام تعریف اللہ کے لیے ہے", u_ro: "Sab taareef Allah ke liye hai", u_hi: "सब तारीफ़ अल्लाह के लिए है", u_en: "All praise is for Allah", m: "الْحَمْدُ لِلَّهِ", t: "سورہ فاتحہ", t_ro: "Surah Fatiha", t_hi: "सूरह फ़ातिहा", t_en: "From Surah Al-Fatiha" },
        { a: "سُبْحَانَ اللَّهِ", r: "SubhanAllah", u: "اللہ پاک ہے", u_ro: "Allah paak hai", u_hi: "अल्लाह पाक है", u_en: "Glory be to Allah", m: "سُبْحَانَ اللَّهِ", t: "تسبیح", t_ro: "Tasbeeh", t_hi: "तस्बीह", t_en: "Glorification" },
        { a: "اللَّهُ أَكْبَرُ", r: "Allahu Akbar", u: "اللہ سب سے بڑا ہے", u_ro: "Allah sab se bada hai", u_hi: "अल्लाह सबसे बड़ा है", u_en: "Allah is the Greatest", m: "اللَّهُ أَكْبَرُ", t: "تکبیر", t_ro: "Takbeer", t_hi: "तकबीर", t_en: "Takbeer" },
        { a: "لَا إِلَهَ إِلَّا اللَّهُ", r: "La ilaha illallah", u: "اللہ کے سوا کوئی معبود نہیں", u_ro: "Allah ke siwa koi maabood nahin", u_hi: "अल्लाह के सिवा कोई माबूद नहीं", u_en: "There is no god but Allah", m: "لَا إِلَهَ إِلَّا اللَّهُ", t: "کلمہ", t_ro: "Kalma", t_hi: "कलमा", t_en: "The Shahadah" },
        { a: "بِسْمِ اللَّهِ", r: "Bismillah", u: "اللہ کے نام سے", u_ro: "Allah ke naam se", u_hi: "अल्लाह के नाम से", u_en: "In the name of Allah", m: "بِسْمِ اللَّهِ", t: "شروعات", t_ro: "Shuruaat", t_hi: "शुरुआत", t_en: "Beginning" },
        { a: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ", r: "Allahumma salli 'ala Muhammad", u: "اے اللہ! محمد ﷺ پر رحمت نازل فرما", u_ro: "Ae Allah! Muhammad ﷺ par rahmat naazil farma", u_hi: "ऐ अल्लाह! मुहम्मद ﷺ पर रहमत नाज़िल फ़रमा", u_en: "O Allah, send blessings upon Muhammad", m: "اللَّهُمَّ صَلِّ", t: "درود شریف", t_ro: "Darood Shareef", t_hi: "दरूद शरीफ़", t_en: "Salawat upon the Prophet" }
    ] },
    { day: 88, words: [
        { a: "رَبَّنَا لَكَ الْحَمْدُ", r: "Rabbana lakal hamd", u: "اے ہمارے رب! تیری ہی تعریف ہے", u_ro: "Ae hamare Rabb! Teri hi taareef hai", u_hi: "ऐ हमारे रब! तेरी ही तारीफ़ है", u_en: "Our Lord, to You is all praise", m: "رَبَّنَا لَكَ الْحَمْدُ", t: "رکوع سے اٹھنا", t_ro: "Rukoo se uthna", t_hi: "रुकू से उठना", t_en: "Said rising from bowing" },
        { a: "اللَّهُمَّ بَارِكْ", r: "Allahumma barik", u: "اے اللہ! برکت نازل فرما", u_ro: "Ae Allah! Barkat naazil farma", u_hi: "ऐ अल्लाह! बरकत नाज़िल फ़रमा", u_en: "O Allah, bless", m: "اللَّهُمَّ بَارِكْ", t: "درود ابراہیمی", t_ro: "Darood Ibraheemi", t_hi: "दरूद इब्राहीमी", t_en: "Part of Salawat Ibrahimiyya" },
        { a: "سُبْحَانَ رَبِّيَ الْعَظِيمِ", r: "Subhana Rabbiyal Azeem", u: "میرا رب بہت عظمت والا ہے", u_ro: "Mera Rabb bahut azmat wala hai", u_hi: "मेरा रब बहुत अज़मत वाला है", u_en: "Glory to my Lord, the Magnificent", m: "سُبْحَانَ رَبِّيَ الْعَظِيمِ", t: "رکوع کی تسبیح", t_ro: "Rukoo ki tasbeeh", t_hi: "रुकू की तस्बीह", t_en: "Glorification in bowing" },
        { a: "سُبْحَانَ رَبِّيَ الْأَعْلَى", r: "Subhana Rabbiyal A'la", u: "میرا رب بہت بلند ہے", u_ro: "Mera Rabb bahut buland hai", u_hi: "मेरा रब बहुत बुलंद है", u_en: "Glory to my Lord, the Most High", m: "سُبْحَانَ رَبِّيَ الْأَعْلَى", t: "سجدہ کی تسبیح", t_ro: "Sajda ki tasbeeh", t_hi: "सज्दा की तस्बीह", t_en: "Glorification in prostration" },
        { a: "رَبِّ اغْفِرْ لِي", r: "Rabbighfir li", u: "اے میرے رب! مجھے بخش دے", u_ro: "Ae mere Rabb! Mujhe bakhsh de", u_hi: "ऐ मेरे रब! मुझे बख़्श दे", u_en: "My Lord, forgive me", m: "رَبِّ اغْفِرْ لِي", t: "دو سجدوں کے بیچ", t_ro: "Do sajdon ke beech", t_hi: "दो सज्दों के बीच", t_en: "Between two prostrations" },
        { a: "اللَّهُمَّ اغْفِرْ لِي", r: "Allahummaghfir li", u: "اے اللہ! مجھے بخش دے", u_ro: "Ae Allah! Mujhe bakhsh de", u_hi: "ऐ अल्लाह! मुझे बख़्श दे", u_en: "O Allah, forgive me", m: "اللَّهُمَّ اغْفِرْ لِي", t: "دعا", t_ro: "Dua", t_hi: "दुआ", t_en: "Supplication" },
        { a: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً", r: "Rabbana atina fid-dunya hasanah", u: "اے ہمارے رب! ہمیں دنیا میں بھلائی دے", u_ro: "Ae hamare Rabb! Hamein duniya mein bhalaai de", u_hi: "ऐ हमारे रब! हमें दुनिया में भलाई दे", u_en: "Our Lord, grant us good in this world", m: "رَبَّنَا آتِنَا", t: "جامع دعا", t_ro: "Jaame dua", t_hi: "जामे दुआ", t_en: "Comprehensive supplication" },
        { a: "رَبِّ زِدْنِي عِلْمًا", r: "Rabbi zidni ilma", u: "اے میرے رب! میرے علم میں اضافہ فرما", u_ro: "Ae mere Rabb! Mere ilm mein izaafa farma", u_hi: "ऐ मेरे रब! मेरे इल्म में इज़ाफ़ा फ़रमा", u_en: "My Lord, increase me in knowledge", m: "رَبِّ زِدْنِي عِلْمًا", t: "علم کی دعا", t_ro: "Ilm ki dua", t_hi: "इल्म की दुआ", t_en: "Supplication for knowledge" },
        { a: "رَبِّ اشْرَحْ لِي صَدْرِي", r: "Rabbish rah li sadri", u: "اے میرے رب! میرا سینہ کھول دے", u_ro: "Ae mere Rabb! Mera seena khol de", u_hi: "ऐ मेरे रब! मेरा सीना खोल दे", u_en: "My Lord, expand my chest for me", m: "رَبِّ اشْرَحْ لِي صَدْرِي", t: "موسیٰ علیہ السلام کی دعا", t_ro: "Moosa AS ki dua", t_hi: "मूसा अ.स. की दुआ", t_en: "Prayer of Musa" },
        { a: "يَا حَيُّ يَا قَيُّومُ", r: "Ya Hayyu ya Qayyum", u: "اے زندہ! اے قائم رکھنے والے!", u_ro: "Ae Zinda! Ae Qaaim rakhne wale!", u_hi: "ऐ ज़िंदा! ऐ क़ायम रखने वाले!", u_en: "O Ever-Living, O Sustainer", m: "يَا حَيُّ يَا قَيُّومُ", t: "پریشانی کی دعا", t_ro: "Pareshaani ki dua", t_hi: "परेशानी की दुआ", t_en: "Supplication in distress" }
    ] },
    { day: 89, words: [
        { a: "اللَّهُمَّ أَنْتَ السَّلَامُ", r: "Allahumma antas-salam", u: "اے اللہ! تو سلامتی والا ہے", u_ro: "Ae Allah! Tu salaamati wala hai", u_hi: "ऐ अल्लाह! तू सलामती वाला है", u_en: "O Allah, You are Peace", m: "اللَّهُمَّ أَنْتَ السَّلَامُ", t: "نماز کے بعد", t_ro: "Namaaz ke baad", t_hi: "नमाज़ के बाद", t_en: "After prayer" },
        { a: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", r: "La hawla wa la quwwata illa billah", u: "طاقت نہیں مگر اللہ سے", u_ro: "Taaqat nahin magar Allah se", u_hi: "ताक़त नहीं मगर अल्लाह से", u_en: "There is no power or might except with Allah", m: "لَا حَوْلَ وَلَا قُوَّةَ", t: "جنت کا خزانہ", t_ro: "Jannat ka khazaana", t_hi: "जन्नत का ख़ज़ाना", t_en: "Treasure of Paradise" },
        { a: "أَشْهَدُ أَنْ لَّا إِلَهَ إِلَّا اللَّهُ", r: "Ashhadu an la ilaha illallah", u: "میں گواہی دیتا ہوں", u_ro: "Main gawaahi deta hoon", u_hi: "मैं गवाही देता हूँ", u_en: "I bear witness that there is no god but Allah", m: "أَشْهَدُ أَنْ", t: "تشہد", t_ro: "Tashahhud", t_hi: "तशह्हुद", t_en: "Part of Tashahhud" },
        { a: "أَسْتَغْفِرُ اللَّهَ", r: "Astaghfirullah", u: "میں اللہ سے بخشش مانگتا ہوں", u_ro: "Main Allah se bakhshish maangta hoon", u_hi: "मैं अल्लाह से बख़्शिश माँगता हूँ", u_en: "I seek forgiveness from Allah", m: "أَسْتَغْفِرُ اللَّهَ", t: "استغفار", t_ro: "Astaghfaar", t_hi: "इस्तग़फ़ार", t_en: "Seeking forgiveness" },
        { a: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ", r: "Allahumma inni as'alukal-'afiyata", u: "اے اللہ! میں عافیت مانگتا ہوں", u_ro: "Ae Allah! Main aafiyat maangta hoon", u_hi: "ऐ अल्लाह! मैं आफ़ियत माँगता हूँ", u_en: "O Allah, I ask You for well-being", m: "الْعَافِيَةَ", t: "صبح شام کی دعا", t_ro: "Subah shaam ki dua", t_hi: "सुबह-शाम की दुआ", t_en: "Morning and evening supplication" },
        { a: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى", r: "Allahumma inni as'alukal-huda", u: "اے اللہ! میں ہدایت مانگتا ہوں", u_ro: "Ae Allah! Main hidaayat maangta hoon", u_hi: "ऐ अल्लाह! मैं हिदायत माँगता हूँ", u_en: "O Allah, I ask You for guidance", m: "الْهُدَى", t: "ہدایت", t_ro: "Hidaayat", t_hi: "हिदायत", t_en: "Seeking guidance" },
        { a: "رَبَّنَا آتِنَا", r: "Rabbana atina", u: "اے ہمارے رب! ہمیں دے", u_ro: "Ae hamare Rabb! Hamein de", u_hi: "ऐ हमारे रब! हमें दे", u_en: "Our Lord, grant us", m: "رَبَّنَا آتِنَا", t: "دعا", t_ro: "Dua", t_hi: "दुआ", t_en: "Supplication" },
        { a: "مِنَ الصَّالِحِينَ", r: "Minas-saliheen", u: "نیک لوگوں میں سے", u_ro: "Nek logon mein se", u_hi: "नेक लोगों में से", u_en: "Among the righteous", m: "مِنَ الصَّالِحِينَ", t: "نیکی", t_ro: "Neki", t_hi: "नेकी", t_en: "Goodness" },
        { a: "يَا أَيُّهَا النَّاسُ", r: "Ya ayyuhan-naas", u: "اے لوگو!", u_ro: "Ae logo!", u_hi: "ऐ लोगो!", u_en: "O people!", m: "يَا أَيُّهَا النَّاسُ", t: "پکار", t_ro: "Pukaar", t_hi: "पुकार", t_en: "Address" },
        { a: "اتَّقُوا اللَّهَ", r: "Ittaqullah", u: "اللہ سے ڈرو", u_ro: "Allah se daro", u_hi: "अल्लाह से डरो", u_en: "Fear Allah", m: "اتَّقُوا اللَّهَ", t: "تقویٰ", t_ro: "Taqwa", t_hi: "तक़वा", t_en: "Piety" }
    ] },
    { day: 90, words: [
        { a: "أَطِيعُوا اللَّهَ", r: "Atee'ullah", u: "اللہ کی اطاعت کرو", u_ro: "Allah ki itaat karo", u_hi: "अल्लाह की इताअत करो", u_en: "Obey Allah", m: "أَطِيعُوا اللَّهَ", t: "اطاعت", t_ro: "Itaat", t_hi: "इताअत", t_en: "Obedience" },
        { a: "وَأَطِيعُوا الرَّسُولَ", r: "Wa atee'ur-rasool", u: "رسول کی اطاعت کرو", u_ro: "Rasool ki itaat karo", u_hi: "रसूल की इताअत करो", u_en: "And obey the Messenger", m: "وَأَطِيعُوا الرَّسُولَ", t: "اطاعت", t_ro: "Itaat", t_hi: "इताअत", t_en: "Obedience" },
        { a: "وَاذْكُرُوا نِعْمَتَ اللَّهِ", r: "Wadhkuru ni'matallah", u: "اللہ کی نعمت یاد کرو", u_ro: "Allah ki nemat yaad karo", u_hi: "अल्लाह की नेमत याद करो", u_en: "And remember Allah's favor", m: "وَاذْكُرُوا", t: "یاد", t_ro: "Yaad", t_hi: "याद", t_en: "Remembrance" },
        { a: "وَاشْكُرُوا لِلَّهِ", r: "Washkuru lillah", u: "اللہ کا شکر کرو", u_ro: "Allah ka shukr karo", u_hi: "अल्लाह का शुक्र करो", u_en: "And be grateful to Allah", m: "وَاشْكُرُوا", t: "شکر", t_ro: "Shukr", t_hi: "शुक्र", t_en: "Gratitude" },
        { a: "وَلَا تَكْفُرُوا", r: "Wa la takfuru", u: "انکار نہ کرو", u_ro: "Inkaar na karo", u_hi: "इनकार न करो", u_en: "And do not disbelieve", m: "وَلَا تَكْفُرُوا", t: "انکار", t_ro: "Inkaar", t_hi: "इनकार", t_en: "Disbelief" },
        { a: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", r: "Innallaha ma'as-sabireen", u: "اللہ صبر کرنے والوں کے ساتھ ہے", u_ro: "Allah sabr karne walon ke saath hai", u_hi: "अल्लाह सब्र करने वालों के साथ है", u_en: "Indeed Allah is with the patient", m: "مَعَ الصَّابِرِينَ", t: "صبر", t_ro: "Sabr", t_hi: "सब्र", t_en: "Patience" },
        { a: "إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ", r: "Innallaha ghafoorur-raheem", u: "اللہ بخشنے والا رحم کرنے والا ہے", u_ro: "Allah bakhshne wala rahm karne wala hai", u_hi: "अल्लाह बख़्शने वाला रहम करने वाला है", u_en: "Indeed Allah is Forgiving, Merciful", m: "غَفُورٌ رَّحِيمٌ", t: "رحمت", t_ro: "Rahmat", t_hi: "रहमत", t_en: "Mercy" },
        { a: "إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", r: "Innallaha 'ala kulli shay'in qadeer", u: "اللہ ہر چیز پر قادر ہے", u_ro: "Allah har cheez par qaadir hai", u_hi: "अल्लाह हर चीज़ पर क़ादिर है", u_en: "Indeed Allah has power over all things", m: "عَلَىٰ كُلِّ شَيْءٍ", t: "قدرت", t_ro: "Qudrat", t_hi: "क़ुदरत", t_en: "Power" },
        { a: "إِنَّ اللَّهَ سَمِيعٌ بَصِيرٌ", r: "Innallaha samee'un baseer", u: "اللہ سننے والا دیکھنے والا ہے", u_ro: "Allah sunne wala dekhne wala hai", u_hi: "अल्लाह सुनने वाला देखने वाला है", u_en: "Indeed Allah is All-Hearing, All-Seeing", m: "سَمِيعٌ بَصِيرٌ", t: "سننا دیکھنا", t_ro: "Sunna dekhna", t_hi: "सुनना देखना", t_en: "Hearing and seeing" },
        { a: "إِنَّ اللَّهَ لَا يُحِبُّ الظَّالِمِينَ", r: "Innallaha la yuhibbuz-zalimeen", u: "اللہ ظالموں کو پسند نہیں کرتا", u_ro: "Allah zaalimon ko pasand nahin karta", u_hi: "अल्लाह ज़ालिमों को पसंद नहीं करता", u_en: "Indeed Allah does not love wrongdoers", m: "لَا يُحِبُّ", t: "ظلم", t_ro: "Zulm", t_hi: "ज़ुल्म", t_en: "Wrongdoing" }
    ] }
];
;

/* ───────────── wordAyat.js ───────────── */
/* ==========================================
   WORD -> QURAN KI AYAT (Day 1-50: lafz 1-500 (poora))
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
 "لِمَاذَا": {
  "k": "3:70",
  "i": 2,
  "n": "Quran mein 'لِمَاذَا' is shakal mein nahi aata — Quran mein 'کیوں' ke liye 'لِمَ' aata hai (neeche ayat mein)."
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
 "طَهَارَة": {
  "k": "74:4",
  "i": 1,
  "n": "Quran mein 'طَهَارَة' lafz nahi aata — uski jad se 'طَهِّرْ' (paak karo) aata hai."
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
 "طَلَبَ": {
  "k": "18:41",
  "i": 7,
  "n": "Quran mein 'طَلَبَ' fe'l nahi aata; isi jad ka 'طَلَبًا' (talash) aata hai."
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
 "فَلَاح": {
  "k": "91:9",
  "i": 1,
  "n": "Quran mein 'falaah' ka ye roop nahi aata; isi jad ka lafz «أَفْلَحَ» (kaamyaab hua) is ayat mein hai"
 },
 "خُسْرَان": {
  "k": "39:15",
  "i": 17
 },
 "هَلَاك": {
  "k": "28:88",
  "i": 12,
  "n": "Quran mein 'halaak' ka ye roop nahi aata; isi jad ka lafz «هَالِكٌ» (ho jaane wala) is ayat mein hai"
 },
 "نَجَاة": {
  "k": "40:41",
  "i": 5
 },
 "حَشْر": {
  "k": "50:44",
  "i": 6
 },
 "يَوْمَ الدِّين": {
  "k": "1:4",
  "i": 1,
  "l": 2
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
 }
};
;
