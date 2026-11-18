/* ==========================================================
   tajweed-lang.js — Tajweed ke 38 qawaid ka tarjuma (नई 4 zubaanein)
   मराठी (mr) · العربية (ar) · Français (fr) · Español (es)

   Kaam: tajweed.html ka renderCards() pehle yahan dekhta hai. Jo qaida
   yahan na mile, wahan English dikhta hai — kuch khaali ya undefined nahi.

   Tarteeb: id = qaida ka number (1 se 38).
     { t: title, u: wazahat, ex: [misal 1, misal 2, ...] }
   "ex" ki tarteeb tajweedData ke examples se milti hai.

   ⚠️ ARABI MATN (Quran ki ayat) KABHI NAHI BADALTA — sirf uska tarjuma.
   ========================================================== */
window.TAJWEED_X = {

  1: {
    mr: { t: "मखारिज (अक्षरांचे उच्चारस्थान)", u: "मखारिज म्हणजे अक्षरे त्यांच्या योग्य जागेवरून उच्चारणे. अरबी अक्षरांची १७ किंवा २९ मखारिज आहेत: कंठ, जीभ, ओठ, नाक इ.",
          ex: ["قُلْ — 'ق' जिभेच्या मुळापासून, 'ل' जिभेच्या कडेपासून", "الْحَمْدُ — 'ح' कंठाच्या मधून, 'م' ओठांपासून"] },
    ar: { t: "المخارج (مخارج الحروف)", u: "مخارج الحروف: إخراج كل حرف من موضعه الصحيح. ولحروف العربية سبعة عشر أو تسعة وعشرون مخرجًا: الحلق واللسان والشفتان والخيشوم وغيرها.",
          ex: ["قُلْ — القاف من أقصى اللسان، واللام من حافة اللسان", "الْحَمْدُ — الحاء من وسط الحلق، والميم من الشفتين"] },
    fr: { t: "Les makhârij (points d'articulation)", u: "Les makhârij consistent à prononcer chaque lettre depuis son point exact. Les lettres arabes ont 17 ou 29 points d'articulation : gorge, langue, lèvres, nez, etc.",
          ex: ["Qoul — le qâf du fond de la langue, le lâm du bord de la langue", "Al-Hamdou — le hâ du milieu de la gorge, le mîm des lèvres"] },
    es: { t: "Los majariy (puntos de articulación)", u: "Los majariy consisten en pronunciar cada letra desde su lugar exacto. Las letras árabes tienen 17 o 29 puntos de articulación: garganta, lengua, labios, nariz, etc.",
          ex: ["Qul: la qaf desde el fondo de la lengua, la lam desde el borde de la lengua", "Al-Hamdu: la ha desde el centro de la garganta, la mim desde los labios"] }
  },

  2: {
    mr: { t: "हरकात (जबर, जेर, पेश)", u: "जबरने 'अ' चा आवाज, जेरने 'इ' चा आवाज आणि पेशने 'उ' चा आवाज निघतो.",
          ex: ["बा, बि, बु", "का, कि, कु"] },
    ar: { t: "الحركات (الفتحة والكسرة والضمة)", u: "الفتحة تعطي صوت «أ»، والكسرة صوت «إ»، والضمة صوت «أُ».",
          ex: ["بَ (با)، بِ (بِ)، بُ (بُ)", "كَ (كا)، كِ (كِ)، كُ (كُ)"] },
    fr: { t: "Les harakât (fatha, kasra, damma)", u: "La fatha donne le son « a », la kasra le son « i », la damma le son « ou ».",
          ex: ["ba, bi, bou", "ka, ki, kou"] },
    es: { t: "Las harakat (fatha, kasra, damma)", u: "La fatha da el sonido «a», la kasra el sonido «i» y la damma el sonido «u».",
          ex: ["ba, bi, bu", "ka, ki, ku"] }
  },

  3: {
    mr: { t: "सुकून (जझ्म)", u: "ज्या अक्षरावर सुकून असेल ते स्वतःचा आवाज देत नाही, तर आधीच्या अक्षरासोबत मिळून उच्चारले जाते.",
          ex: ["अब, इन, उम", "قُلْ — 'ل' साकीन, 'हु'शी जोडले जात नाही"] },
    ar: { t: "السكون (الجزم)", u: "الحرف الساكن لا يُنطق بصوت مستقل، بل يتصل بالحرف الذي قبله.",
          ex: ["أَبْ، إِنْ، أُمْ", "قُلْ — اللام ساكنة ولا تتصل بـ«هُ»"] },
    fr: { t: "Le soukoûn (jazm)", u: "La lettre portant un soukoûn n'a pas de son propre : elle s'unit à la lettre précédente.",
          ex: ["ab, in, oum", "Qoul — le lâm est soukoûn, il ne se joint pas à « hou »"] },
    es: { t: "El sukun (yazm)", u: "La letra con sukun no tiene sonido propio: se une a la letra anterior.",
          ex: ["ab, in, um", "Qul: la lam es sukun y no se une a «hu»"] }
  },

  4: {
    mr: { t: "तनवीन (दुहेरी हरकत)", u: "दुहेरे जबर, दुहेरे जेर आणि दुहेरे पेश यांना तनवीन म्हणतात. हे 'न' चा आवाज देते.",
          ex: ["किताबन — दुहेऱ्या जबरने 'न' चा आवाज", "रहीमुन — दुहेऱ्या पेशने 'न' चा आवाज"] },
    ar: { t: "التنوين (الحركة المزدوجة)", u: "التنوين هو الفتحتان والكسرتان والضمتان، ويعطي صوت النون.",
          ex: ["كِتَابًا (كتابن) — الفتحتان تعطيان صوت النون", "رَحِيمٌ (رحيمن) — الضمتان تعطيان صوت النون"] },
    fr: { t: "Le tanwîn (double haraka)", u: "Le tanwîn est la double fatha, la double kasra et la double damma ; il donne le son « n ».",
          ex: ["kitâban — la double fatha donne le son « n »", "rahîmoun — la double damma donne le son « n »"] },
    es: { t: "El tanwin (haraka doble)", u: "El tanwin es la fatha, la kasra y la damma dobles; da el sonido «n».",
          ex: ["kitaban: la fatha doble da el sonido «n»", "rahimun: la damma doble da el sonido «n»"] }
  },

  5: {
    mr: { t: "मद्दे-असली (तबई)", u: "जेव्हा मद्दच्या अक्षरावर कोणतेही हमझा किंवा सुकून नसेल, तेव्हा ते एक अलिफ (२ हरकात) पर्यंत खेचून वाचले जाते.",
          ex: ["क़ाला — 'ا' २ हरकात खेचा", "यकूलु — 'و' २ हरकात खेचा"] },
    ar: { t: "المد الأصلي (الطبيعي)", u: "إذا لم يأتِ بعد حرف المد همزة ولا سكون مُدّ بمقدار ألف واحدة (حركتين).",
          ex: ["قَالَ — يُمَدّ الألف حركتين", "يَقُولُ — يُمَدّ الواو حركتين"] },
    fr: { t: "Le madd aslî (naturel)", u: "Quand la lettre de madd n'est suivie ni d'une hamza ni d'un soukoûn, on l'étire d'un alif (2 harakât).",
          ex: ["qâla — l'alif est étiré 2 harakât", "yaqoûlou — le wâw est étiré 2 harakât"] },
    es: { t: "El madd asli (natural)", u: "Cuando la letra de madd no va seguida de hamza ni de sukun, se alarga un alif (2 harakat).",
          ex: ["qala: la alif se alarga 2 harakat", "yaqulu: la waw se alarga 2 harakat"] }
  },

  6: {
    mr: { t: "कलकला (हलकी उडी)", u: "पाच अक्षरे (ق، ط، ب، ج، د) यांवर सुकून आल्यास ती हलक्या उडीसह वाचली जातात.",
          ex: ["यक़तऊन — 'ق' वर हलकी उडी", "अबसारुहुम — 'ب' वर हलकी उडी"] },
    ar: { t: "القلقلة", u: "إذا سكنت حروف القلقلة الخمسة (ق ط ب ج د) قُرئت بنبرة خفيفة.",
          ex: ["يَقْطَعُونَ — قلقلة خفيفة في القاف", "أَبْصَارُهُمْ — قلقلة خفيفة في الباء"] },
    fr: { t: "La qalqala (rebond léger)", u: "Quand les cinq lettres (qâf, tâ', bâ', jîm, dâl) portent un soukoûn, on les prononce avec un léger rebond.",
          ex: ["yaqta'oûn — léger rebond sur le qâf", "absârouhoum — léger rebond sur le bâ'"] },
    es: { t: "La qalqala (rebote leve)", u: "Cuando las cinco letras (qaf, ta, ba, yim, dal) llevan sukun, se pronuncian con un leve rebote.",
          ex: ["yaqta'un: leve rebote en la qaf", "absaruhum: leve rebote en la ba"] }
  },

  7: {
    mr: { t: "नून साकीन — इझहार", u: "जर नून साकीन किंवा तनवीननंतर कंठाच्या अक्षरांपैकी (ء، ہ، ع، ح، غ، خ) कोणतेही आले, तर नून स्पष्ट वाचले जाते.",
          ex: ["मन आमन — 'न' स्पष्ट, 'आ'पासून वेगळे", "अन हर्सिन — 'न' स्पष्ट, 'ح'पासून वेगळे"] },
    ar: { t: "النون الساكنة — الإظهار", u: "إذا جاء بعد النون الساكنة أو التنوين حرف من حروف الحلق (ء هـ ع ح غ خ) أُظهرت النون.",
          ex: ["مَنْ آمَنَ — النون ظاهرة منفصلة عن الهمزة", "عَنْ حَرْثٍ — النون ظاهرة منفصلة عن الحاء"] },
    fr: { t: "Le noûn sâkin — izhâr", u: "Si après le noûn sâkin ou le tanwîn vient une lettre de la gorge (hamza, hâ', 'ayn, hâ, ghayn, khâ'), le noûn est prononcé clairement.",
          ex: ["man âmana — le noûn est clair, séparé du alif", "'an harthin — le noûn est clair, séparé du hâ"] },
    es: { t: "La nun sakin: izhar", u: "Si tras la nun sakin o el tanwin viene una letra de la garganta (hamza, ha, ayn, ha, gain, ja), la nun se pronuncia con claridad.",
          ex: ["man amana: la nun es clara, separada de la alif", "an harsin: la nun es clara, separada de la ha"] }
  },

  8: {
    mr: { t: "नून साकीन — इदगाम", u: "जर नून साकीन किंवा तनवीननंतर (ی، ر، م، ل، و، ن) पैकी कोणतेही आले, तर नून पुढच्या अक्षरात मिळवून वाचले जाते.",
          ex: ["मय यअमल — 'न' 'ی' मध्ये मिळाला", "मिर-रब्बिहिम — 'न' 'ر' मध्ये मिळाला"] },
    ar: { t: "النون الساكنة — الإدغام", u: "إذا جاء بعد النون الساكنة أو التنوين حرف من (ي ر م ل و ن) أُدغمت النون في الحرف التالي.",
          ex: ["مَن يَعْمَلْ — أُدغمت النون في الياء", "مِن رَّبِّهِمْ — أُدغمت النون في الراء"] },
    fr: { t: "Le noûn sâkin — idghâm", u: "Si après le noûn sâkin ou le tanwîn vient l'une des lettres (yâ', râ', mîm, lâm, wâw, noûn), le noûn est fondu dans la lettre suivante.",
          ex: ["may ya'mal — le noûn est fondu dans le yâ'", "mir-rabbihim — le noûn est fondu dans le râ'"] },
    es: { t: "La nun sakin: idgam", u: "Si tras la nun sakin o el tanwin viene una de las letras (ya, ra, mim, lam, waw, nun), la nun se funde en la siguiente.",
          ex: ["may ya'mal: la nun se funde en la ya", "mir-rabbihim: la nun se funde en la ra"] }
  },

  9: {
    mr: { t: "नून साकीन — इकलाब", u: "जर नून साकीन किंवा तनवीननंतर 'ب' अक्षर आले, तर नून 'م' मध्ये बदलून हलक्या गुन्नासह वाचले जाते.",
          ex: ["मिम बअदि — 'न' 'م' झाला", "अम्बिहुम — 'न' 'م' झाला"] },
    ar: { t: "النون الساكنة — الإقلاب", u: "إذا جاء بعد النون الساكنة أو التنوين حرف الباء قُلبت النون ميمًا مع غنة خفيفة.",
          ex: ["مِنْ بَعْدِ — قُلبت النون ميمًا", "أَنْبِئْهُمْ — قُلبت النون ميمًا"] },
    fr: { t: "Le noûn sâkin — iqlâb", u: "Si après le noûn sâkin ou le tanwîn vient la lettre bâ', le noûn devient mîm avec une ghunna légère.",
          ex: ["mim ba'di — le noûn devient mîm", "ambihim — le noûn devient mîm"] },
    es: { t: "La nun sakin: iqlab", u: "Si tras la nun sakin o el tanwin viene la letra ba, la nun se convierte en mim con guna leve.",
          ex: ["mim ba'di: la nun se convierte en mim", "ambihum: la nun se convierte en mim"] }
  },

  10: {
    mr: { t: "नून साकीन — इखफा", u: "जर नून साकीन किंवा तनवीननंतर उर्वरित १५ अक्षरांपैकी कोणतेही आले, तर नूनचा आवाज लपवून गुन्नासह वाचला जातो.",
          ex: ["मिंग क़ब्लि — 'न' लपली, गुन्ना", "अंतुम — 'न' लपली, गुन्ना"] },
    ar: { t: "النون الساكنة — الإخفاء", u: "إذا جاء بعد النون الساكنة أو التنوين حرف من باقي الخمسة عشر حرفًا أُخفيت النون مع غنة.",
          ex: ["مِن قَبْلِ — أُخفيت النون مع غنة", "أَنْتُمْ — أُخفيت النون مع غنة"] },
    fr: { t: "Le noûn sâkin — ikhfâ'", u: "Si après le noûn sâkin ou le tanwîn vient l'une des quinze autres lettres, le son du noûn est dissimulé avec une ghunna.",
          ex: ["ming qabli — le noûn est dissimulé, avec ghunna", "antoum — le noûn est dissimulé, avec ghunna"] },
    es: { t: "La nun sakin: ijfa", u: "Si tras la nun sakin o el tanwin viene una de las otras quince letras, el sonido de la nun se oculta con guna.",
          ex: ["ming qabli: la nun se oculta, con guna", "antum: la nun se oculta, con guna"] }
  },

  11: {
    mr: { t: "मीम साकीन — इखफा-ए-शफवी", u: "जर मीम साकीननंतर 'ب' अक्षर आले, तर मीम लपवून गुन्नासह वाचले जाते.",
          ex: ["तर्मीहिम बिहिजारा — 'م' लपले", "रब्बहुम बिहिम — 'م' लपले"] },
    ar: { t: "الميم الساكنة — الإخفاء الشفوي", u: "إذا جاء بعد الميم الساكنة حرف الباء أُخفيت الميم مع غنة.",
          ex: ["تَرْمِيهِم بِحِجَارَةٍ — أُخفيت الميم", "رَبَّهُم بِهِمْ — أُخفيت الميم"] },
    fr: { t: "Le mîm sâkin — ikhfâ' chafawî", u: "Si après le mîm sâkin vient la lettre bâ', le mîm est dissimulé avec une ghunna.",
          ex: ["tarmîhim bihijâra — le mîm est dissimulé", "rabbahoum bihim — le mîm est dissimulé"] },
    es: { t: "La mim sakin: ijfa shafawi", u: "Si tras la mim sakin viene la letra ba, la mim se oculta con guna.",
          ex: ["tarmihim bihiyara: la mim se oculta", "rabbahum bihim: la mim se oculta"] }
  },

  12: {
    mr: { t: "मीम साकीन — इदगाम-ए-शफवी", u: "जर मीम साकीननंतर दुसरे 'م' आले, तर दोन्ही मीम मिळवून गुन्नासह वाचली जातात.",
          ex: ["लहुम-मा — दोन्ही 'م' मिळाले", "कम-मिन — दोन्ही 'م' मिळाले"] },
    ar: { t: "الميم الساكنة — الإدغام الشفوي", u: "إذا جاء بعد الميم الساكنة ميم أخرى أُدغمتا مع غنة.",
          ex: ["لَهُم مَّا — أُدغمت الميمان", "كَم مِّن — أُدغمت الميمان"] },
    fr: { t: "Le mîm sâkin — idghâm chafawî", u: "Si après le mîm sâkin vient un autre mîm, les deux sont fondus avec une ghunna.",
          ex: ["lahoum-mâ — les deux mîm sont fondus", "kam-min — les deux mîm sont fondus"] },
    es: { t: "La mim sakin: idgam shafawi", u: "Si tras la mim sakin viene otra mim, ambas se funden con guna.",
          ex: ["lahum-ma: las dos mim se funden", "kam-min: las dos mim se funden"] }
  },

  13: {
    mr: { t: "मीम साकीन — इझहार-ए-शफवी", u: "जर मीम साकीननंतर 'م' व 'ب' शिवाय कोणतेही अक्षर आले, तर मीम स्पष्ट वाचले जाते.",
          ex: ["अम लम — 'م' स्पष्ट", "हुम फीहा — 'م' स्पष्ट"] },
    ar: { t: "الميم الساكنة — الإظهار الشفوي", u: "إذا جاء بعد الميم الساكنة حرف غير الميم والباء أُظهرت الميم.",
          ex: ["أَمْ لَمْ — الميم ظاهرة", "هُمْ فِيهَا — الميم ظاهرة"] },
    fr: { t: "Le mîm sâkin — izhâr chafawî", u: "Si après le mîm sâkin vient une lettre autre que mîm et bâ', le mîm est prononcé clairement.",
          ex: ["am lam — le mîm est clair", "houm fîhâ — le mîm est clair"] },
    es: { t: "La mim sakin: izhar shafawi", u: "Si tras la mim sakin viene una letra distinta de mim y ba, la mim se pronuncia con claridad.",
          ex: ["am lam: la mim es clara", "hum fiha: la mim es clara"] }
  },

  14: {
    mr: { t: "मद्दे-मुत्तसिल", u: "जेव्हा मद्दच्या अक्षरानंतर त्याच शब्दात हमझा येतो, तेव्हा ते ४ ते ५ हरकात खेचले जाते.",
          ex: ["जाअ — 'ا' ४-५ हरकात", "अस-समाइ — 'ا' ४-५ हरकात"] },
    ar: { t: "المد المتصل", u: "إذا جاء بعد حرف المد همزة في الكلمة نفسها مُدّ أربع أو خمس حركات.",
          ex: ["جَاءَ — يُمَدّ أربع أو خمس حركات", "السَّمَاءِ — يُمَدّ أربع أو خمس حركات"] },
    fr: { t: "Le madd mouttasil", u: "Quand la lettre de madd est suivie d'une hamza dans le même mot, on l'étire de 4 à 5 harakât.",
          ex: ["jâ'a — étiré 4 à 5 harakât", "as-samâ'i — étiré 4 à 5 harakât"] },
    es: { t: "El madd muttasil", u: "Cuando la letra de madd va seguida de hamza en la misma palabra, se alarga de 4 a 5 harakat.",
          ex: ["ya'a: se alarga 4 a 5 harakat", "as-sama'i: se alarga 4 a 5 harakat"] }
  },

  15: {
    mr: { t: "मद्दे-मुनफसिल", u: "जेव्हा मद्दचे अक्षर एका शब्दाच्या शेवटी आणि हमझा पुढच्या शब्दाच्या सुरुवातीला येतो, तेव्हा ४ ते ५ हरकात खेचले जाते.",
          ex: ["या अय्युहा — 'ا' ४-५ हरकात", "बिमा उन्झिल — 'ا' ४-५ हरकात"] },
    ar: { t: "المد المنفصل", u: "إذا كان حرف المد في آخر كلمة والهمزة في أول الكلمة التالية مُدّ أربع أو خمس حركات.",
          ex: ["يَا أَيُّهَا — يُمَدّ أربع أو خمس حركات", "بِمَا أُنزِلَ — يُمَدّ أربع أو خمس حركات"] },
    fr: { t: "Le madd mounfasil", u: "Quand la lettre de madd termine un mot et que la hamza ouvre le mot suivant, on l'étire de 4 à 5 harakât.",
          ex: ["yâ ayyouhâ — étiré 4 à 5 harakât", "bimâ ounzila — étiré 4 à 5 harakât"] },
    es: { t: "El madd munfasil", u: "Cuando la letra de madd termina una palabra y la hamza abre la siguiente, se alarga de 4 a 5 harakat.",
          ex: ["ya ayyuha: se alarga 4 a 5 harakat", "bima unzila: se alarga 4 a 5 harakat"] }
  },

  16: {
    mr: { t: "मद्दे-लाझिम", u: "जेव्हा मद्दच्या अक्षरानंतर सुकून-ए-लाझिम येतो, तेव्हा ते ६ हरकात खेचले जाते.",
          ex: ["अद-दाल्लीन — 'ا' ६ हरकात", "अल-हाक्का — 'ا' नंतर शद्दा असलेला 'ق', ६ हरकात"] },
    ar: { t: "المد اللازم", u: "إذا جاء بعد حرف المد سكون لازم مُدّ ست حركات.",
          ex: ["الضَّالِّينَ — يُمَدّ ست حركات", "الْحَاقَّةُ — بعد الألف قاف مشددة، ويُمَدّ ست حركات"] },
    fr: { t: "Le madd lâzim", u: "Quand la lettre de madd est suivie d'un soukoûn permanent, on l'étire de 6 harakât.",
          ex: ["ad-dâllîn — étiré 6 harakât", "al-hâqqa — l'alif est suivi d'un qâf redoublé, étiré 6 harakât"] },
    es: { t: "El madd lazim", u: "Cuando la letra de madd va seguida de un sukun permanente, se alarga 6 harakat.",
          ex: ["ad-dallin: se alarga 6 harakat", "al-haqqa: tras la alif hay una qaf con shadda, se alarga 6 harakat"] }
  },

  17: {
    mr: { t: "वक्फचे नियम (थांबणे)", u: "वक्फ म्हणजे वाचताना थांबणे. खुणा: (م) वक्फे-लाझिम, (ط) वक्फे-मुतलक (थांबणे बरे), (ج) वक्फे-जायझ, (لا) थांबू नका.",
          ex: ["येथे (م) नाही, पण शेवटी थांबणे जायझ आहे", "खूण (ۛ) मुआनका — 'رَيْبَ' किंवा 'فِيهِ' यापैकी एकाच ठिकाणी थांबा, दोन्हीकडे नाही"] },
    ar: { t: "أحكام الوقف", u: "الوقف هو السكوت أثناء القراءة. العلامات: (م) وقف لازم، (ط) وقف مطلق (الوقف أفضل)، (ج) وقف جائز، (لا) لا تقف.",
          ex: ["لا يوجد (م) هنا، لكن الوقف في الآخر جائز", "علامة (ۛ) معانقة — قف على «رَيْبَ» أو «فِيهِ» لا على الاثنين"] },
    fr: { t: "Les règles du waqf (s'arrêter)", u: "Le waqf consiste à s'arrêter pendant la récitation. Signes : (م) arrêt obligatoire, (ط) arrêt absolu (mieux vaut s'arrêter), (ج) arrêt permis, (لا) ne pas s'arrêter.",
          ex: ["Pas de (م) ici, mais s'arrêter à la fin est permis", "Signe (ۛ) mou'ânaqa — arrête-toi à « rayba » ou à « fîhi », pas aux deux"] },
    es: { t: "Las reglas del waqf (detenerse)", u: "El waqf consiste en detenerse durante la recitación. Signos: (م) parada obligatoria, (ط) parada absoluta (mejor detenerse), (ج) parada permitida, (لا) no detenerse.",
          ex: ["Aquí no hay (م), pero detenerse al final es lícito", "Signo (ۛ) muanaqa: detente en «rayba» o en «fihi», no en ambos"] }
  },

  18: {
    mr: { t: "गुन्ना (नाकातील आवाज)", u: "गुन्ना म्हणजे नाकातून आवाज काढणे. तो नून मुशद्दद आणि मीम मुशद्ददवर वाजिब आहे.",
          ex: ["इन्न — 'ن' मुशद्ददवर गुन्ना, २ हरकात", "सुम्म — 'م' मुशद्ददवर गुन्ना, २ हरकात"] },
    ar: { t: "الغنة", u: "الغنة صوت يخرج من الخيشوم، وهي واجبة في النون والميم المشدّدتين.",
          ex: ["إِنَّ — غنة على النون المشددة، حركتان", "ثُمَّ — غنة على الميم المشددة، حركتان"] },
    fr: { t: "La ghunna (son nasal)", u: "La ghunna est un son nasal ; elle est obligatoire sur le noûn et le mîm redoublés.",
          ex: ["inna — ghunna sur le noûn redoublé, 2 harakât", "thoumma — ghunna sur le mîm redoublé, 2 harakât"] },
    es: { t: "La guna (sonido nasal)", u: "La guna es un sonido nasal; es obligatoria en la nun y la mim con shadda.",
          ex: ["inna: guna en la nun con shadda, 2 harakat", "zumma: guna en la mim con shadda, 2 harakat"] }
  },

  19: {
    mr: { t: "हुरूफे-मुकत्तआत", u: "ही सूरतींच्या सुरुवातीला येणारी मुकत्तआत अक्षरे आहेत, जसे: الم، حم، كهيعص. ती अक्षरांची नावे घेऊन वाचली जातात.",
          ex: ["अलिफ-लाम-मीम — अक्षरांची नावे घेऊन वाचा", "या-सीन — अक्षरांची नावे घेऊन वाचा"] },
    ar: { t: "الحروف المقطعات", u: "هي الحروف التي تبدأ بها بعض السور، مثل: الم، حم، كهيعص، وتُقرأ بأسماء حروفها.",
          ex: ["ألف لام ميم — تُقرأ بأسماء الحروف", "يا سين — تُقرأ بأسماء الحروف"] },
    fr: { t: "Les hourouf mouqatta'ât", u: "Ce sont les lettres isolées qui ouvrent certaines sourates, comme Alif-Lâm-Mîm, Hâ-Mîm, Kâf-Hâ-Yâ-'Ayn-Sâd ; on les récite en épelant.",
          ex: ["Alif-Lâm-Mîm — réciter en épelant", "Yâ-Sîn — réciter en épelant"] },
    es: { t: "Las huruf muqatta'at", u: "Son las letras aisladas con que comienzan algunas suras, como Alif-Lam-Mim, Ha-Mim, Kaf-Ha-Ya-Ayn-Sad; se recitan deletreando.",
          ex: ["Alif-Lam-Mim: se recita deletreando", "Ya-Sin: se recita deletreando"] }
  },

  20: {
    mr: { t: "रस्म-ए-उस्मानी", u: "कुरआनच्या लेखनाची ती पद्धत जी हजरत उस्मान गनी (र.अ.) यांच्या काळात संकलित झाली.",
          ex: ["लिहिले 'الصلوة' जाते, वाचले 'अस-सलाह' जाते", "लिहिले 'الزكوة' जाते, वाचले 'अझ-झकाह' जाते"] },
    ar: { t: "الرسم العثماني", u: "طريقة كتابة المصحف التي جُمعت في عهد عثمان بن عفان رضي الله عنه.",
          ex: ["كُتبت «الصلوة» وتُقرأ «الصلاة»", "كُتبت «الزكوة» وتُقرأ «الزكاة»"] },
    fr: { t: "Le rasm 'outhmânî", u: "La manière d'écrire le Coran, fixée à l'époque de 'Uthmân ibn 'Affân (qu'Allah l'agrée).",
          ex: ["écrit « الصلوة », lu « as-salâh »", "écrit « الزكوة », lu « az-zakâh »"] },
    es: { t: "El rasm usmani", u: "La forma de escribir el Corán, fijada en la época de Uzman ibn Affan (que Alá esté complacido con él).",
          ex: ["escrito «الصلوة», leído «as-salah»", "escrito «الزكوة», leído «az-zakah»"] }
  },

  21: {
    mr: { t: "तशदीद (शद्दा)", u: "शद्दा असलेले अक्षर दोन वेळा वाचले जाते: पहिले साकीन आणि दुसरे हरकतवाले, आणि त्यावर जोर दिला जातो.",
          ex: ["रब्ब — 'ب' दोन वेळा: रब + बि", "इय्याक — 'ي' वर शद्दा, जोराने वाचा"] },
    ar: { t: "التشديد", u: "الحرف المشدد يُنطق مرتين: الأولى ساكنة والثانية متحركة، مع الضغط عليه.",
          ex: ["رَبِّ — الباء مرتين: رَبْ + بِ", "إِيَّاكَ — شدة على الياء، مع الضغط"] },
    fr: { t: "Le tachdîd (shadda)", u: "La lettre portant une shadda se prononce deux fois : la première soukoûn, la seconde voyellée, avec insistance.",
          ex: ["rabbi — le bâ' deux fois : rab + bi", "iyyâka — shadda sur le yâ', en insistant"] },
    es: { t: "El tashdid (shadda)", u: "La letra con shadda se pronuncia dos veces: la primera sukun y la segunda con vocal, con énfasis.",
          ex: ["rabbi: la ba dos veces: rab + bi", "iyyaka: shadda en la ya, con énfasis"] }
  },

  22: {
    mr: { t: "अलिफ-लाम: शम्सी आणि कमरी", u: "'ال' नंतर १४ शम्सी अक्षरांपैकी (ت ث د ذ ر ز س ش ص ض ط ظ ل ن) कोणतेही असेल तर 'ل' वाचले जात नाही आणि पुढचे अक्षर शद्दासह वाचले जाते. उर्वरित १४ कमरी अक्षरांवर (ا ب ج ح خ ع غ ف ق ك م ه و ي) 'ل' स्पष्ट वाचले जाते.",
          ex: ["अश-शम्स — 'ल' वाचले नाही (शम्सी)", "अल-कमर — 'ल' स्पष्ट (कमरी)"] },
    ar: { t: "اللام الشمسية والقمرية", u: "إذا جاء بعد «ال» حرف من الحروف الشمسية الأربعة عشر (ت ث د ذ ر ز س ش ص ض ط ظ ل ن) لم تُنطق اللام وأُدغمت في الحرف التالي. وفي الحروف القمرية الأربعة عشر (ا ب ج ح خ ع غ ف ق ك م هـ و ي) تُنطق اللام ظاهرة.",
          ex: ["الشَّمْسُ — اللام لا تُنطق (شمسية)", "الْقَمَرُ — اللام ظاهرة (قمرية)"] },
    fr: { t: "Le lâm solaire et lunaire", u: "Si après « al » vient l'une des quatorze lettres solaires (t, th, d, dh, r, z, s, ch, sâd, dâd, tâ', zâ', l, n), le lâm ne se prononce pas et la lettre suivante est redoublée. Avec les quatorze lettres lunaires (a, b, j, h, kh, 'ayn, gh, f, q, k, m, h, w, y), le lâm se prononce clairement.",
          ex: ["ach-chams — le lâm ne se prononce pas (solaire)", "al-qamar — le lâm se prononce (lunaire)"] },
    es: { t: "La lam solar y lunar", u: "Si tras «al» viene una de las catorce letras solares (t, z, d, dh, r, z, s, sh, sad, dad, ta, za, l, n), la lam no se pronuncia y la letra siguiente se duplica. Con las catorce letras lunares (a, b, y, h, j, ayn, gain, f, q, k, m, h, w, y), la lam se pronuncia con claridad.",
          ex: ["ash-shams: la lam no se pronuncia (solar)", "al-qamar: la lam se pronuncia (lunar)"] }
  },

  23: {
    mr: { t: "इस्तिआझा आणि बसमला", u: "तिलावत सुरू करण्यापूर्वी 'अऊझु बिल्लाह' वाचले जाते, आणि प्रत्येक सूरतीच्या सुरुवातीला 'बिस्मिल्लाह' (सूरह अत-तौबा शिवाय).",
          ex: ["अऊझु बिल्लाह — तिलावतीपूर्वी", "बिस्मिल्लाह — सूरतीच्या सुरुवातीला"] },
    ar: { t: "الاستعاذة والبسملة", u: "تُقرأ الاستعاذة قبل التلاوة، والبسملة في أول كل سورة إلا سورة التوبة.",
          ex: ["أعوذ بالله — قبل التلاوة", "بسم الله — في أول السورة"] },
    fr: { t: "L'isti'âdha et la basmala", u: "On récite l'isti'âdha avant la lecture, et la basmala au début de chaque sourate sauf at-Tawba.",
          ex: ["A'oudhou billâh — avant la récitation", "Bismillâh — au début de la sourate"] },
    es: { t: "La isti'aza y la basmala", u: "Se recita la isti'aza antes de la lectura, y la basmala al comienzo de cada sura excepto at-Tawba.",
          ex: ["A'udu billah: antes de la recitación", "Bismil-lah: al comienzo de la sura"] }
  },

  24: {
    mr: { t: "हुरूफे-इस्तिअला (जाड अक्षरे)", u: "सात अक्षरे (خ ص ض غ ط ق ظ) नेहमी जाड/भरलेली वाचली जातात, जेर असली तरी. लक्षात ठेवण्यासाठी: خُصَّ ضَغْطٍ قِظْ.",
          ex: ["क़ाला — 'ق' जाड", "अस-सिरात — 'ص' जेर असूनही जाड"] },
    ar: { t: "حروف الاستعلاء", u: "الحروف السبعة (خ ص ض غ ط ق ظ) تُفخّم دائمًا ولو كانت مكسورة. وللحفظ: خُصَّ ضَغْطٍ قِظْ.",
          ex: ["قَالَ — القاف مفخمة", "الصِّرَاطَ — الصاد مفخمة مع الكسرة"] },
    fr: { t: "Les hourouf al-isti'lâ' (lettres lourdes)", u: "Les sept lettres (khâ', sâd, dâd, ghayn, tâ', qâf, zâ') sont toujours prononcées lourdes, même avec une kasra. Moyen mnémotechnique : khoussa daghtin qiz.",
          ex: ["qâla — le qâf est lourd", "as-sirâta — le sâd reste lourd malgré la kasra"] },
    es: { t: "Las huruf al-isti'la (letras pesadas)", u: "Las siete letras (ja, sad, dad, gain, ta, qaf, za) siempre se pronuncian pesadas, aunque lleven kasra. Para memorizar: jussa dagtin qiz.",
          ex: ["qala: la qaf es pesada", "as-sirata: la sad sigue pesada pese a la kasra"] }
  },

  25: {
    mr: { t: "हमझतुल-वस्ल", u: "हा हमझा सुरुवातीला वाचला जातो आणि जोडून वाचताना गळून जातो. सुरुवातीला जेरने वाचतात, पण तिसऱ्या अक्षरावर पेश असेल तर पेशने.",
          ex: ["इह्दिना — सुरुवातीला जेर (तिसऱ्या अक्षर 'د' वर जेर)", "उदउ — सुरुवातीला पेश (तिसऱ्या अक्षर 'ع' वर पेश)"] },
    ar: { t: "همزة الوصل", u: "تُنطق في الابتداء وتسقط في الوصل. ويُبدأ بها بالكسر، إلا إذا كان الحرف الثالث مضمومًا فيُبدأ بالضم.",
          ex: ["اِهْدِنَا — تُبدأ بالكسر (الحرف الثالث مكسور)", "اُدْعُ — تُبدأ بالضم (الحرف الثالث مضموم)"] },
    fr: { t: "La hamzat al-wasl", u: "Elle se prononce au commencement et tombe dans la liaison. On commence par une kasra, sauf si la troisième lettre porte une damma : on commence alors par une damma.",
          ex: ["ihdinâ — on commence par kasra (la 3e lettre est en kasra)", "oud'ou — on commence par damma (la 3e lettre est en damma)"] },
    es: { t: "La hamzat al-wasl", u: "Se pronuncia al comenzar y se cae en la unión. Se empieza con kasra, salvo que la tercera letra lleve damma: entonces se empieza con damma.",
          ex: ["ihdina: se empieza con kasra (la 3.ª letra lleva kasra)", "ud'u: se empieza con damma (la 3.ª letra lleva damma)"] }
  },

  26: {
    mr: { t: "मखारिजची ५ ठिकाणे", u: "एकूण १७ मखारिज पाच ठिकाणी आहेत: (१) जौफ — मद्दची अक्षरे (ا و ي) (२) हल्क (कंठ) — ء ہ ع ح غ خ (३) जीभ — १८ अक्षरे (४) ओठ — ف ب م و (५) खैशूम (नाक) — गुन्ना.",
          ex: ["कंठाची ६ अक्षरे", "ओठांची अक्षरे (ف खालच्या ओठावरून व वरच्या दातांवरून)"] },
    ar: { t: "مقامات المخارج الخمسة", u: "المخارج السبعة عشر في خمسة مقامات: (1) الجوف — حروف المد (ا و ي) (2) الحلق — ء هـ ع ح غ خ (3) اللسان — ثمانية عشر حرفًا (4) الشفتان — ف ب م و (5) الخيشوم — الغنة.",
          ex: ["حروف الحلق الستة", "حروف الشفتين (الفاء من باطن الشفة السفلى وأطراف الثنايا العليا)"] },
    fr: { t: "Les cinq zones des makhârij", u: "Les dix-sept makhârij se répartissent en cinq zones : (1) le jawf — les lettres de madd (a, w, y) (2) la gorge — hamza, hâ', 'ayn, hâ, ghayn, khâ' (3) la langue — 18 lettres (4) les lèvres — fâ', bâ', mîm, wâw (5) le khaychoûm (nez) — la ghunna.",
          ex: ["Les 6 lettres de la gorge", "Les lettres des lèvres (le fâ' de l'intérieur de la lèvre inférieure contre les incisives supérieures)"] },
    es: { t: "Las cinco zonas de los majariy", u: "Los diecisiete majariy se reparten en cinco zonas: (1) el yawf: las letras de madd (a, w, y) (2) la garganta: hamza, ha, ayn, ha, gain, ja (3) la lengua: 18 letras (4) los labios: fa, ba, mim, waw (5) el jayshum (nariz): la guna.",
          ex: ["Las 6 letras de la garganta", "Las letras de los labios (la fa del interior del labio inferior contra los incisivos superiores)"] }
  },

  27: {
    mr: { t: "कलकलाचे प्रकार", u: "कलकलाची अक्षरे: ق ط ب ج د (कुत्बु जद्दिन). साकीन असतील तर हलकी गुंज/उडी. सुग्रा: शब्दाच्या मध्ये; कुब्रा: वक्फाच्या वेळी शेवटी (जास्त उडी).",
          ex: ["'ج' मध्ये साकीन — कलकला सुग्रा", "वक्फावर 'ق' — कलकला कुब्रा"] },
    ar: { t: "درجات القلقلة", u: "حروف القلقلة: ق ط ب ج د (قُطْبُ جَدٍّ). إذا سكنت قلقلت. الصغرى: في وسط الكلمة؛ الكبرى: عند الوقف في آخرها (أقوى).",
          ex: ["الجيم ساكنة في الوسط — قلقلة صغرى", "الوقف على القاف — قلقلة كبرى"] },
    fr: { t: "Les degrés de la qalqala", u: "Les lettres de qalqala : qâf, tâ', bâ', jîm, dâl (qoutbou jadd). Le soukoûn donne un léger rebond. Soughrâ au milieu du mot ; koubrâ à l'arrêt final (plus fort).",
          ex: ["jîm soukoûn au milieu — qalqala soughrâ", "arrêt sur le qâf — qalqala koubrâ"] },
    es: { t: "Los grados de la qalqala", u: "Letras de qalqala: qaf, ta, ba, yim, dal (qutbu yadd). Con sukun dan un leve rebote. Sugra en medio de la palabra; kubra al detenerse al final (más fuerte).",
          ex: ["la yim con sukun en medio: qalqala sugra", "detenerse en la qaf: qalqala kubra"] }
  },

  28: {
    mr: { t: "मद्दे-आरिझ लिस-सुकून", u: "मद्दच्या अक्षरानंतर वक्फामुळे सुकून आले तर २, ४ किंवा ६ हरकातपर्यंत मद्द करता येते.",
          ex: ["वक्फावर नस्तईन — 'ي' मध्ये मद्द", "वक्फावर अल-आलमीन — 'ي' मध्ये मद्द"] },
    ar: { t: "المد العارض للسكون", u: "إذا عرض السكون بعد حرف المد بسبب الوقف جاز المد حركتين أو أربعًا أو ستًا.",
          ex: ["عند الوقف: نَسْتَعِينْ — مد في الياء", "عند الوقف: الْعَالَمِينْ — مد في الياء"] },
    fr: { t: "Le madd 'ârid li-s-soukoûn", u: "Quand le soukoûn survient après la lettre de madd à cause de l'arrêt, on peut étirer 2, 4 ou 6 harakât.",
          ex: ["à l'arrêt : nasta'în — madd sur le yâ'", "à l'arrêt : al-'âlamîn — madd sur le yâ'"] },
    es: { t: "El madd arid li-s-sukun", u: "Cuando el sukun llega tras la letra de madd por detenerse, se puede alargar 2, 4 o 6 harakat.",
          ex: ["al detenerse: nasta'in, madd en la ya", "al detenerse: al-alamin, madd en la ya"] }
  },

  29: {
    mr: { t: "मद्दे-लीन", u: "'و' किंवा 'ي' साकीन ज्यांच्या आधी जबर असेल, आणि नंतर वक्फामुळे सुकून येईल, तर नरमपणे २, ४ किंवा ६ हरकात मद्द केला जातो.",
          ex: ["वक्फावर कुरैश — 'يْ' मध्ये मद्दे-लीन", "वक्फावर खौफ — 'وْ' मध्ये मद्दे-लीन"] },
    ar: { t: "مد اللين", u: "إذا كان الواو أو الياء ساكنًا قبله فتح، ثم عرض السكون للوقف، مُدّ لينًا حركتين أو أربعًا أو ستًا.",
          ex: ["عند الوقف: قُرَيْشْ — مد لين في الياء", "عند الوقف: خَوْفْ — مد لين في الواو"] },
    fr: { t: "Le madd lîn", u: "Un wâw ou un yâ' soukoûn précédé d'une fatha, suivi d'un soukoûn d'arrêt, s'étire doucement 2, 4 ou 6 harakât.",
          ex: ["à l'arrêt : qouraych — madd lîn sur le yâ'", "à l'arrêt : khawf — madd lîn sur le wâw"] },
    es: { t: "El madd lin", u: "Una waw o ya con sukun precedida de fatha, seguida de un sukun por detenerse, se alarga suavemente 2, 4 o 6 harakat.",
          ex: ["al detenerse: quraysh, madd lin en la ya", "al detenerse: jawf, madd lin en la waw"] }
  },

  30: {
    mr: { t: "मद्दे-बदल", u: "जेव्हा हमझा आधी येतो आणि मद्दचे अक्षर लगेच त्यानंतर, तेव्हा २ हरकात (मद्दे-असलीप्रमाणे) वाचले जाते.",
          ex: ["आमनू — 'آ' (अ + आ) २ हरकात", "ऊतू — 'أُو' २ हरकात"] },
    ar: { t: "المد البدل", u: "إذا تقدمت الهمزة وجاء بعدها حرف المد مباشرة مُدّ حركتين (كالمد الأصلي).",
          ex: ["آمَنُوا — الألف حركتان", "أُوتُوا — الواو حركتان"] },
    fr: { t: "Le madd badal", u: "Quand la hamza précède et que la lettre de madd vient juste après, on étire 2 harakât (comme le madd naturel).",
          ex: ["âmanoû — 2 harakât", "oûtoû — 2 harakât"] },
    es: { t: "El madd badal", u: "Cuando la hamza va antes y la letra de madd viene justo después, se alarga 2 harakat (como el madd natural).",
          ex: ["amanu: 2 harakat", "utu: 2 harakat"] }
  },

  31: {
    mr: { t: "मद्दे-सिला (हा-ए-झमीर)", u: "सर्वनाम 'ह' (لَهُ، بِهِ) दोन हरकतवाल्या अक्षरांमध्ये असेल तर ते खेचून वाचले जाते. नंतर हमझा नसेल तर सिला सुग्रा (२ हरकात), हमझा असेल तर सिला कुब्रा (४ किंवा ५ हरकात).",
          ex: ["लहू — सिला सुग्रा (२ हरकात)", "फलहू अज्रुहु — हमझामुळे सिला कुब्रा"] },
    ar: { t: "مد الصلة", u: "هاء الضمير (له، به) إذا وقعت بين حرفين متحركين مُدّت. فإن لم يأتِ بعدها همزة فهي صلة صغرى (حركتان)، وإن جاءت همزة فهي صلة كبرى (أربع أو خمس).",
          ex: ["لَهُو — صلة صغرى (حركتان)", "فَلَهُو أَجْرُهُ — صلة كبرى لوجود الهمزة"] },
    fr: { t: "Le madd sila (le hâ' du pronom)", u: "Le hâ' du pronom (lahou, bihi) entre deux lettres voyellées s'étire. Sans hamza ensuite : sila soughrâ (2 harakât) ; avec hamza : sila koubrâ (4 ou 5).",
          ex: ["lahou — sila soughrâ (2 harakât)", "falahou ajrouhou — sila koubrâ à cause de la hamza"] },
    es: { t: "El madd sila (la ha del pronombre)", u: "La ha del pronombre (lahu, bihi) entre dos letras con vocal se alarga. Sin hamza después: sila sugra (2 harakat); con hamza: sila kubra (4 o 5).",
          ex: ["lahu: sila sugra (2 harakat)", "falahu ajruhu: sila kubra por la hamza"] }
  },

  32: {
    mr: { t: "वक्फाच्या खुणा", u: "م = वक्फे-लाझिम (थांबाच). ط = वक्फे-मुतलक (थांबणे बरे). ج = वक्फे-जायझ (थांबा किंवा जोडा, दोन्ही ठीक). ز = वक्फे-मुजव्वझ (जोडणे बरे). ص = वक्फे-मुरख्खस (मजबुरीत). لا = येथे थांबू नका. قلى = थांबणे बरे. صلى = जोडणे बरे. ۛ ۛ (तीन ठिपके, दोन ठिकाणी) = यापैकी एकाच ठिकाणी थांबा.",
          ex: ["वक्फे-लाझिम — येथे थांबणे आवश्यक", "येथे थांबू नका — थांबल्याने अर्थ बदलू शकतो", "वक्फे-जायझ — थांबा किंवा जोडून वाचा"] },
    ar: { t: "علامات الوقف", u: "م = وقف لازم (قف). ط = وقف مطلق (الوقف أفضل). ج = وقف جائز (الوقف والوصل سواء). ز = وقف مجوّز (الوصل أفضل). ص = وقف مرخّص (عند الضرورة). لا = لا تقف. قلى = الوقف أولى. صلى = الوصل أولى. ۛ ۛ (ثلاث نقاط في موضعين) = قف على أحدهما لا على كليهما.",
          ex: ["وقف لازم — يجب الوقف هنا", "لا تقف هنا — قد يتغير المعنى", "وقف جائز — قف أو صل"] },
    fr: { t: "Les signes du waqf", u: "م = arrêt obligatoire. ط = arrêt absolu (mieux vaut s'arrêter). ج = arrêt permis (s'arrêter ou continuer). ز = continuation préférable. ص = arrêt en cas de nécessité. لا = ne pas s'arrêter. قلى = mieux vaut s'arrêter. صلى = mieux vaut continuer. ۛ ۛ (trois points, deux endroits) = s'arrêter à l'un des deux seulement.",
          ex: ["Arrêt obligatoire : il faut s'arrêter ici", "Ne pas s'arrêter ici : le sens pourrait changer", "Arrêt permis : s'arrêter ou continuer"] },
    es: { t: "Los signos del waqf", u: "م = parada obligatoria. ط = parada absoluta (mejor detenerse). ج = parada permitida (detenerse o continuar). ز = es preferible continuar. ص = parada por necesidad. لا = no detenerse. قلى = es preferible detenerse. صلى = es preferible continuar. ۛ ۛ (tres puntos, dos lugares) = detenerse en uno solo de los dos.",
          ex: ["Parada obligatoria: hay que detenerse aquí", "No detenerse aquí: el sentido podría cambiar", "Parada permitida: detenerse o continuar"] }
  },

  33: {
    mr: { t: "रा जाड किंवा बारीक", u: "'ر' वर जबर किंवा पेश असेल तर जाड. जेर असेल तर बारीक. साकीन 'ر' आधी जेर असेल तर बारीक (नंतर जाड अक्षरे नसतील तर), जबर किंवा पेश असेल तर जाड.",
          ex: ["रब्ब — 'ر' जबर: जाड", "रिझकन — 'ر' जेर: बारीक", "फिरऔन — साकीन 'ر' आधी जेर: बारीक"] },
    ar: { t: "تفخيم الراء وترقيقها", u: "الراء المفتوحة أو المضمومة مفخمة، والمكسورة مرققة. والساكنة بعد كسر مرققة (إن لم يأتِ بعدها حرف استعلاء)، وبعد فتح أو ضم مفخمة.",
          ex: ["رَبِّ — الراء مفتوحة: مفخمة", "رِزْقًا — الراء مكسورة: مرققة", "فِرْعَوْنَ — راء ساكنة بعد كسر: مرققة"] },
    fr: { t: "Tafkhîm et tarqîq du râ'", u: "Le râ' avec fatha ou damma est lourd ; avec kasra il est léger. Le râ' soukoûn après kasra est léger (sauf si une lettre lourde suit) ; après fatha ou damma il est lourd.",
          ex: ["rabbi — râ' avec fatha : lourd", "rizqan — râ' avec kasra : léger", "fir'awn — râ' soukoûn après kasra : léger"] },
    es: { t: "Tajim y tarqiq de la ra", u: "La ra con fatha o damma es pesada; con kasra es ligera. La ra con sukun tras kasra es ligera (salvo que siga una letra pesada); tras fatha o damma es pesada.",
          ex: ["rabbi: ra con fatha, pesada", "rizqan: ra con kasra, ligera", "fir'awn: ra con sukun tras kasra, ligera"] }
  },

  34: {
    mr: { t: "अल्लाह या शब्दातील लाम", u: "'अल्लाह' या शब्दातील 'ल' आधी जबर किंवा पेश असेल तर 'ल' जाड (भरलेले). आधी जेर असेल तर बारीक.",
          ex: ["कालल्लाहु — आधी जबर: 'ल' जाड", "बिस्मिल्लाहि — आधी जेर: 'ल' बारीक"] },
    ar: { t: "لام لفظ الجلالة", u: "لام لفظ «الله» تُفخّم بعد الفتح أو الضم، وتُرقّق بعد الكسر.",
          ex: ["قَالَ اللَّهُ — بعد فتح: اللام مفخمة", "بِسْمِ اللَّهِ — بعد كسر: اللام مرققة"] },
    fr: { t: "Le lâm du mot « Allah »", u: "Le lâm du mot « Allah » est lourd après une fatha ou une damma, et léger après une kasra.",
          ex: ["qâlallâhou — après fatha : lâm lourd", "bismillâhi — après kasra : lâm léger"] },
    es: { t: "La lam de la palabra «Alá»", u: "La lam de la palabra «Alá» es pesada tras fatha o damma, y ligera tras kasra.",
          ex: ["qalallahu: tras fatha, lam pesada", "bismil-lahi: tras kasra, lam ligera"] }
  },

  35: {
    mr: { t: "मिस्लैन, मुतजानिसैन, मुतकारिबैन", u: "मिस्लैन: तेच अक्षर साकीन नंतर तेच हरकतवाले (ब+ब). मुतजानिसैन: मखरज एक, सिफत वेगळी (द+त, त+त, ज+ज). मुतकारिबैन: मखरज किंवा सिफत जवळ (ल+र, क+क). यात इदगाम होतो.",
          ex: ["'ب' + 'ب' — मिस्लैन, एकात मिळवले", "'د' + 'ت' — मुतजानिसैन", "'ل' + 'ر' — मुतकारिबैन"] },
    ar: { t: "المثلان والمتجانسان والمتقاربان", u: "المثلان: حرفان اتفقا رسمًا (ب+ب). المتجانسان: اتفقا مخرجًا واختلفا صفة (د+ت، ط+ت، ذ+ظ). المتقاربان: تقاربا مخرجًا أو صفة (ل+ر، ق+ك). وفيها إدغام.",
          ex: ["ب + ب — مثلان، أُدغما", "د + ت — متجانسان", "ل + ر — متقاربان"] },
    fr: { t: "Mithlayn, moutajânissayn, moutaqâribayn", u: "Mithlayn : la même lettre deux fois (b+b). Moutajânissayn : même makhraj, sifât différentes (d+t). Moutaqâribayn : makhraj ou sifât proches (l+r). Il y a idghâm.",
          ex: ["bâ' + bâ' — mithlayn, fondus", "dâl + tâ' — moutajânissayn", "lâm + râ' — moutaqâribayn"] },
    es: { t: "Mislayn, mutayanisayn, mutaqaribayn", u: "Mislayn: la misma letra dos veces (b+b). Mutayanisayn: mismo majray, distinta sifat (d+t). Mutaqaribayn: majray o sifat próximos (l+r). Hay idgam.",
          ex: ["ba + ba: mislayn, se funden", "dal + ta: mutayanisayn", "lam + ra: mutaqaribayn"] }
  },

  36: {
    mr: { t: "इझहार-ए-मुतलक (दुन्या, बुन्यान, किनवान, सिनवान)", u: "एकाच शब्दात नून साकीननंतर 'و' किंवा 'ي' आले तर इदगाम होत नाही, तर इझहार होतो (अन्यथा शब्द 'दिया' सारखा वाटतो). चार शब्द: दुन्या, बुन्यान, किनवान, सिनवान.",
          ex: ["अद-दुन्या — 'न्' स्पष्ट वाचा", "सिनवान — 'न्' स्पष्ट, मिळवू नका"] },
    ar: { t: "الإظهار المطلق (دُنْيَا، بُنْيَانٌ، قِنْوَانٌ، صِنْوَانٌ)", u: "إذا اجتمع النون الساكن مع الواو أو الياء في كلمة واحدة لم يُدغم بل أُظهر (وإلا صار كلفظ «ديا»). وهي أربع كلمات: دُنْيَا، بُنْيَانٌ، قِنْوَانٌ، صِنْوَانٌ.",
          ex: ["الدُّنْيَا — تُظهر النون", "صِنْوَانٌ — تُظهر النون ولا تُدغم"] },
    fr: { t: "L'izhâr moutlaq (dounyâ, bounyân, qinwân, sinwân)", u: "Quand le noûn sâkin et le wâw ou le yâ' sont dans le même mot, il n'y a pas d'idghâm mais izhâr (sinon le mot sonnerait comme « diyâ »). Quatre mots : dounyâ, bounyân, qinwân, sinwân.",
          ex: ["ad-dounyâ — prononcer le noûn clairement", "sinwân — noûn clair, sans fusion"] },
    es: { t: "El izhar mutlaq (dunya, bunyan, qinwan, sinwan)", u: "Cuando la nun sakin y la waw o la ya están en la misma palabra, no hay idgam sino izhar (si no, la palabra sonaría como «diya»). Son cuatro palabras: dunya, bunyan, qinwan, sinwan.",
          ex: ["ad-dunya: pronuncia la nun con claridad", "sinwan: nun clara, sin fundir"] }
  },

  37: {
    mr: { t: "सकता", u: "हफ्सच्या रिवायतीत चार ठिकाणी श्वास न तोडता थोडे थांबतात: अल-कहफ (عِوَجًا ۜ قَيِّمًا), यासीन (مَرْقَدِنَا ۜ هَٰذَا), अल-कियामा (مَنْ ۜ رَاقٍ), अल-मुतफ्फिफीन (بَلْ ۜ رَانَ).",
          ex: ["अल-कहफ १-२ — 'عِوَجًا' वर थोडे थांबा", "अल-कियामा २७ — 'مَنْ' वर थोडे थांबा"] },
    ar: { t: "السكتة", u: "في رواية حفص أربعة مواضع يُسكت فيها سكتة لطيفة بلا تنفس: الكهف (عِوَجًا ۜ قَيِّمًا)، يس (مَرْقَدِنَا ۜ هَٰذَا)، القيامة (مَنْ ۜ رَاقٍ)، المطففين (بَلْ ۜ رَانَ).",
          ex: ["الكهف 1-2 — سكتة لطيفة بعد «عِوَجًا»", "القيامة 27 — سكتة لطيفة بعد «مَنْ»"] },
    fr: { t: "La saktah", u: "Dans la riwâya de Hafs, on fait une courte pause sans respirer à quatre endroits : al-Kahf, Yâ-Sîn, al-Qiyâma et al-Moutaffifîn.",
          ex: ["al-Kahf 1-2 — brève pause après « 'iwajâ »", "al-Qiyâma 27 — brève pause après « man »"] },
    es: { t: "La saktah", u: "En la riwaya de Hafs se hace una pausa breve sin respirar en cuatro lugares: al-Kahf, Ya-Sin, al-Qiyama y al-Mutaffifin.",
          ex: ["al-Kahf 1-2: pausa breve tras «iwayan»", "al-Qiyama 27: pausa breve tras «man»"] }
  },

  38: {
    mr: { t: "इमाला", u: "हफ्सच्या रिवायतीत फक्त एका ठिकाणी: सूरह हूद (आयत ४१) मध्ये 'मजराहा' — 'र' नंतरचा अलिफ 'ए' कडे झुकवून वाचला जातो.",
          ex: ["'रा' मध्ये इमाला"] },
    ar: { t: "الإمالة", u: "في رواية حفص موضع واحد فقط: سورة هود (الآية 41) في «مَجْرَاهَا» — تُمال الألف بعد الراء نحو الياء.",
          ex: ["إمالة في «را»"] },
    fr: { t: "L'imâla", u: "Dans la riwâya de Hafs, un seul endroit : sourate Hoûd (verset 41), « majrâhâ » — l'alif après le râ' est incliné vers le son « ê ».",
          ex: ["imâla sur « râ »"] },
    es: { t: "La imala", u: "En la riwaya de Hafs, un solo lugar: sura Hud (aleyas 41), «mayraha»: la alif tras la ra se inclina hacia el sonido «e».",
          ex: ["imala en «ra»"] }
  }

};
