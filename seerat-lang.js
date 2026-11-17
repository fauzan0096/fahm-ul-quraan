/* ==========================================================
   seerat-lang.js — Seerat-e-Nabawi ﷺ ka tarjuma (नई 4 zubaanein)
   मराठी (mr) · العربية (ar) · Français (fr) · Español (es)

   Kaam: ye file seerat.js se PEHLE load hoti hai aur sirf data rakhti hai
   (window.SEERAT_LANG). seerat.js shuru hote waqt ise SEERAT_TR / SEERAT_TOP /
   SEERAT_UI mein mila deta hai. Jo din yahan na ho, uska matn English/Urdu
   mein hi dikhta hai — kuch bhi tootta nahi.

   Ek din ka tarjuma = wohi tarteeb jo seerat.js ke TR mein hai:
     [0] title · [1] place · [2] time · [3] goal · [4] reflection
     [5] keyFacts[] · [6] sections[[h,p,src], ...] · [7] quiz[[q,[opts]], ...]
     [8] timeline[[year,event], ...] · [9] refs[] · [10] hadith[[who,ur,ref], ...]

   ⚠️ ARABI MATN (Quran/hadith) KABHI NAHI BADALTA — woh har zubaan mein waisa hi
      rehta hai. Yahan sirf us ka tarjuma hai. Hawale (Bukhari/Muslim waghairah)
      bhi waise hi rehte hain, sirf "Sahih Bukhari" ka naam zubaan ke hisaab se likha hai.

   Ab tak: Day 1 (poora).
   ========================================================== */
window.SEERAT_LANG = {

  /* ── sab se upar ki do lines (list ke sarwara mein) ── */
  top: {
    mr: {
      title: "सीरत-ए-नबवी ﷺ — ३० दिवसांचा प्रवास + शमाइल",
      source: "स्रोत: अर-रहीकुल-मख्तूम (सफीउर्रहमान मुबारकपुरी), सहीह बुखारी, सहीह मुस्लिम; शमाइलचे चार दिवस: अश-शमाइल अल-मुहम्मदिया (इमाम तिर्मिझी), अल्बानी यांची मुख्तसर आवृत्ती — फक्त ज्या हदीसेसवर «सहीह» चा हुकूम आहे (मक्तबा शामिला)",
      note: "ऐतिहासिक तपशील सीरतच्या पुस्तकांतून घेतले आहेत; काही रिवायतींच्या सनदा व तारखांबद्दल विद्वानांत मतभेद आहे — जिथे तसे आहे तिथे निर्देश केला आहे."
    },
    ar: {
      title: "السيرة النبوية ﷺ — رحلة 30 يومًا + الشمائل",
      source: "المصادر: الرحيق المختوم (صفي الرحمن المباركفوري)، صحيح البخاري، صحيح مسلم؛ وأيام الشمائل الأربعة: الشمائل المحمدية (الإمام الترمذي)، مختصرها للعلامة الألباني — فقط ما حُكم عليه بـ«صحيح» (المكتبة الشاملة)",
      note: "التفصيلات التاريخية مأخوذة من كتب السيرة؛ وفي أسانيد بعض الروايات وتواريخها خلاف بين أهل العلم — وقد نُبِّه على موضع ذلك."
    },
    fr: {
      title: "La Sîra du Prophète ﷺ — un parcours de 30 jours + les Shamâ'il",
      source: "Sources : Ar-Rahîq al-Makhtûm (Safiur Rahman Mubarakpuri), Sahih al-Bukhari, Sahih Muslim ; pour les quatre jours des Shamâ'il : Ach-Chamâ'il al-Muhammadiyya (imam at-Tirmidhi), version abrégée par Allama al-Albani — uniquement les hadiths jugés « sahih » (Maktaba Chamila)",
      note: "Les détails historiques sont tirés des livres de Sîra ; les savants divergent sur les chaînes et les dates de certaines narrations — cela est signalé là où c'est le cas."
    },
    es: {
      title: "La Sira del Profeta ﷺ: un recorrido de 30 días + los Shamail",
      source: "Fuentes: Ar-Rahiq al-Majtum (Safiur Rahman Mubarakpuri), Sahih al-Bujari, Sahih Muslim; para los cuatro días de los Shamail: Ash-Shamail al-Muhammadiyya (imam at-Tirmidhi), versión abreviada de Allama al-Albani: solo los hadices calificados de «sahih» (Maktaba Shamila)",
      note: "Los detalles históricos se toman de los libros de Sira; los sabios discrepan sobre las cadenas y fechas de algunas narraciones, y se señala donde ocurre."
    }
  },

  /* ── reader ke button aur headings ── */
  ui: {
    mr: {
      daysDone: "दिवस पूर्ण", dayOf: "दिवस",
      keyFacts: "📌 महत्त्वाचे मुद्दे", timeline: "🗓️ कालरेषा",
      refs: "📚 स्रोत व संदर्भ", reflect: "🤲 चिंतन",
      quiz: "📝 छोटी परीक्षा",
      hadith: "📜 सहीह हदीस (मतन, अनुवाद व संदर्भ)",
      next: "पुढील दिवस ›", prev: "‹ मागील दिवस",
      done: "✅ आजचा दिवस पूर्ण", undone: "✓ पूर्ण (काढा)",
      pending: "(या दिवसाचा मराठी अनुवाद लवकरच येत आहे — सध्या उर्दू दाखवली जात आहे)"
    },
    ar: {
      daysDone: "يومًا مكتملًا", dayOf: "اليوم",
      keyFacts: "📌 أهم النقاط", timeline: "🗓️ الخط الزمني",
      refs: "📚 المصادر والمراجع", reflect: "🤲 وقفة تدبر",
      quiz: "📝 اختبار قصير",
      hadith: "📜 أحاديث صحيحة (المتن والترجمة والمرجع)",
      next: "اليوم التالي ›", prev: "‹ اليوم السابق",
      done: "✅ أكملت يوم اليوم", undone: "✓ مكتمل (إلغاء)",
      pending: "(ترجمة هذا اليوم بالعربية قادمة قريبًا — يُعرض النص الأردي حاليًا)"
    },
    fr: {
      daysDone: "jours accomplis", dayOf: "Jour",
      keyFacts: "📌 Points clés", timeline: "🗓️ Chronologie",
      refs: "📚 Sources et références", reflect: "🤲 Méditation",
      quiz: "📝 Petit quiz",
      hadith: "📜 Hadiths authentiques (texte, traduction et référence)",
      next: "Jour suivant ›", prev: "‹ Jour précédent",
      done: "✅ Marquer le jour accompli", undone: "✓ Accompli (annuler)",
      pending: "(La traduction française de ce jour arrive bientôt — l'ourdou est affiché pour l'instant)"
    },
    es: {
      daysDone: "días completados", dayOf: "Día",
      keyFacts: "📌 Puntos clave", timeline: "🗓️ Cronología",
      refs: "📚 Fuentes y referencias", reflect: "🤲 Reflexión",
      quiz: "📝 Un cuestionario breve",
      hadith: "📜 Hadices auténticos (texto, traducción y referencia)",
      next: "Día siguiente ›", prev: "‹ Día anterior",
      done: "✅ Marcar el día como completado", undone: "✓ Completado (anular)",
      pending: "(La traducción al español de este día llegará pronto; por ahora se muestra el urdu)"
    }
  },

  /* ── din (day number se) ── */
  days: {

    /* ═══════════════ DAY 1 — Arab qabl az Islam ═══════════════ */
    1: {
      mr: [
        "इस्लामपूर्व अरब — अंधाराचे जग",
        "अरबी द्वीपकल्प",
        "इ.स. ५७० पूर्वी",
        "नबी ﷺ यांच्या आगमनापूर्वी अरबची स्थिती किती जुलमी, अंधारी आणि असहाय होती हे समजून घेणे.",
        "हे समजून हृदय थरथरते की आपण किती भाग्यवान आहोत की नबी ﷺ यांचे उम्मती आहोत. हे अल्लाह! या नेमातून कृतज्ञता व्यक्त करणारे आपल्याला बनव. आमीन.",
        [
          "काबाभोवती ३६० मूर्ती",
          "अम्र बिन लुहयने मूर्तिपूजा सुरू केली",
          "काही टोळ्यांमध्ये मुलींना जिवंत पुरण्याची प्रथा",
          "व्याज, दारू आणि जुगार सामान्य",
          "मक्केत कोणतेही केंद्रीय राज्य नाही (टोळीवादी व्यवस्था)",
          "अरबी भाषा अत्यंत विकसित"
        ],
        [
          ["📍 ठिकाण",
           "अरबी द्वीपकल्प (जझीरतुल-अरब) मध्यपूर्वेत आहे. तीन बाजूंनी पाणी: पश्चिमेला लाल समुद्र, पूर्वेला पर्शियन आखात आणि दक्षिणेला अरबी समुद्र. जमीन बहुतांश वाळवंट, पाणी कमी आणि जीवन कठीण — म्हणूनच टोळीवादी जीवन आणि एका जागेवरून दुसऱ्या जागी स्थलांतर. महत्त्वाची शहरे: मक्का (व्यापार व हजचे केंद्र) आणि यसरीब (नंतर मदिना).",
           ""],
          ["🕯️ धार्मिक स्थिती — मूर्तिपूजा",
           "हे लोक हजरत इब्राहीम (अ.स.) यांची संतती होते, अल्लाहला मानत होते, पण काळाने मूर्तींकडे वळले. अम्र बिन लुहयने शाममधून मूर्ती आणल्या आणि काबाजवळ ठेवल्या. नंतर प्रत्येक टोळीने आपल्या मूर्ती बनवल्या — लात, मनात आणि उज्जा प्रसिद्ध होत्या. मक्केच्या विजयाच्या वेळी काबाभोवती ३६० मूर्ती होत्या; नबी ﷺ यांनी काठीने त्या पाडल्या आणि सांगितले: «جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ» (सत्य आले, असत्य नष्ट झाले).",
           "सहीह बुखारी: २४७८ (३६० मूर्ती); सहीह बुखारी: ३५२१ (अम्र बिन लुहय); कुरआन: १७:८१"],
          ["🏘️ सामाजिक स्थिती — अत्याचाराचा कळस",
           "टोळीवाद शिखरावर होता. काही टोळ्यांमध्ये मुलींना जिवंत पुरले जात असे. दारू, व्यभिचार आणि जुगार सामान्य होते. गुलामांशी जनावरांपेक्षाही वाईट वागणूक असे. स्त्रीला वारसात हिस्सा मिळत नसे; ती स्वतः मालमत्तेप्रमाणे वारसात येत असे. पाहुण्याचा मान खूप होता, पण परक्यांसाठी दया नव्हती.",
           "कुरआन: ८१:८-९, १६:५८-५९"],
          ["💰 आर्थिक स्थिती",
           "मक्का व्यापाराचे केंद्र होते. कुरैश हिवाळ्यात येमेनला आणि उन्हाळ्यात शामला जात. पण सर्वात मोठा दोष व्याज (रिबा) होता. श्रीमंत गरिबाला व्याजावर कर्ज देत; वेळेवर न दिल्यास व्याज वाढत आणि शेवटी गरीब गुलाम होई. अनाथांचा माल हडपणे आणि मापतोलात बेईमानी सामान्य होती.",
           ""],
          ["🎯 बोध",
           "अंधार जितका घनदाट, प्रकाशाची गरज तितकी जास्त. अल्लाहने अशा वेळी प्रकाश पाठवण्याचे ठरवले. हे दाखवते की अल्लाह आपल्या दासांना एकटे सोडत नाही. आपण अत्याचार पाहूनही अल्लाहचा प्रकाश येईल असा विश्वास ठेवला पाहिजे.",
           ""]
        ],
        [
          ["काबाभोवती किती मूर्ती होत्या?", ["३०", "३६०", "३६००"]],
          ["मूर्तिपूजा कोणी सुरू केली?", ["अबू जहल", "अम्र बिन लुहय", "अबू सुफियान"]],
          ["आमुल-फील काय आहे?", ["मूर्तींचा नाश", "अब्रहाचा हत्तींसह हल्ला", "काबाची बांधणी"]]
        ],
        [
          ["इ.स.पू. सुमारे २०००", "हजरत इब्राहीम (अ.स.) व इस्माईल (अ.स.) यांनी काबा बांधली"],
          ["इ.स.चे तिसरे शतक (अंदाजे)", "अम्र बिन लुहयने मूर्तिपूजा सुरू केली"],
          ["इ.स. ५७०", "अब्रहाचा हल्ला — आमुल-फील"]
        ]
      ],
      ar: [
        "العرب قبل الإسلام — عالم الظلمات",
        "جزيرة العرب",
        "قبل سنة 570 ميلادية",
        "أن نفهم كيف كانت حال العرب قبل مجيء النبي ﷺ: ظلمًا وظلامًا وعجزًا.",
        "يرتجف القلب حين نعلم كم نحن محظوظون بأننا من أمة النبي ﷺ. اللهم اجعلنا من الشاكرين لهذه النعمة. آمين.",
        [
          "360 صنمًا حول الكعبة",
          "عمرو بن لحي أول من أدخل عبادة الأصنام",
          "دفن البنات حيًّا في بعض القبائل",
          "الربا والخمر والميسر شائعة",
          "لا حكم مركزي في مكة (نظام قبلي)",
          "اللغة العربية في غاية الرقي"
        ],
        [
          ["📍 الموقع",
           "تقع جزيرة العرب في الشرق الأوسط. يحيط بها الماء من ثلاث جهات: البحر الأحمر غربًا، والخليج العربي شرقًا، وبحر العرب جنوبًا. وأرضها أكثرها صحراء، والماء قليل، والحياة شاقة؛ ولذلك كانت الحياة القبلية والتنقل من مكان إلى مكان. ومن أهم مدنها: مكة (مركز التجارة والحج) ويثرب (المدينة بعد ذلك).",
           ""],
          ["🕯️ الحال الدينية — عبادة الأصنام",
           "كان هؤلاء من ذرية إبراهيم عليه السلام، يؤمنون بالله، لكنهم انحرفوا مع الزمن إلى الأصنام. جاء عمرو بن لحي بأصنام من الشام فوضعها عند الكعبة، ثم اتخذت كل قبيلة أصنامها — وكانت اللات ومناة والعزى مشهورة. وكان حول الكعبة يوم الفتح 360 صنمًا، فأسقطها النبي ﷺ بعصا وقال: «جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ» (جاء الحق وذهب الباطل).",
           "صحيح البخاري: 2478 (360 صنمًا)؛ صحيح البخاري: 3521 (عمرو بن لحي)؛ القرآن: 17:81"],
          ["🏘️ الحال الاجتماعية — ذروة الظلم",
           "كانت العصبية القبلية في أوجها. وفي بعض القبائل كانت البنات تُدفن حية. وكانت الخمر والزنا والميسر شائعة. وكان يُعامل العبيد أسوأ من معاملة البهائم. ولم تكن المرأة ترث، بل كانت هي نفسها تُورث كالمتاع. وكانت حرمة الضيف عظيمة، لكن لا رحمة عندهم للغرباء.",
           "القرآن: 81:8-9، 16:58-59"],
          ["💰 الحال الاقتصادية",
           "كانت مكة مركز التجارة؛ وكانت قريش تسافر إلى اليمن شتاءً وإلى الشام صيفًا. لكن أكبر آفة كانت الربا: يُقرض الغنيُّ الفقيرَ بالربا، فإذا لم يقضِ في الوقت ازداد الربا حتى يصير الفقير عبدًا. وكان أكل مال اليتامى والغش في المكيال والميزان شائعًا.",
           ""],
          ["🎯 العبرة",
           "كلما كان الظلام أشد كانت الحاجة إلى النور أعظم. وقد قدّر الله أن يبعث نورًا في ذلك الزمن، وهذا يدل على أن الله لا يترك عباده. وينبغي لنا إذا رأينا الظلم أن نوقن بأن نور الله آتٍ.",
           ""]
        ],
        [
          ["كم كان عدد الأصنام حول الكعبة؟", ["30", "360", "3600"]],
          ["من أول من أدخل عبادة الأصنام؟", ["أبو جهل", "عمرو بن لحي", "أبو سفيان"]],
          ["ما هو عام الفيل؟", ["هلاك الأصنام", "هجوم أبرهة بالفيلة", "بناء الكعبة"]]
        ],
        [
          ["نحو 2000 ق.م", "بنى إبراهيم وإسماعيل عليهما السلام الكعبة"],
          ["القرن الثالث الميلادي (تقريبًا)", "أدخل عمرو بن لحي عبادة الأصنام"],
          ["570 م", "هجوم أبرهة — عام الفيل"]
        ]
      ],
      fr: [
        "L'Arabie avant l'islam — le monde des ténèbres",
        "La péninsule arabique",
        "Avant 570 de l'ère chrétienne",
        "Comprendre combien la situation de l'Arabie, avant la venue du Prophète ﷺ, était injuste, ténébreuse et sans recours.",
        "Le cœur tremble en sachant combien nous sommes chanceux d'être de la communauté du Prophète ﷺ. Ô Allah ! Fais de nous des reconnaissants de cette grâce. Âmîn.",
        [
          "360 idoles autour de la Kaaba",
          "'Amr ibn Luhay introduisit l'idolâtrie",
          "Des filles enterrées vivantes dans certaines tribus",
          "Usure, vin et jeux de hasard courants",
          "Aucun pouvoir central à La Mecque (système tribal)",
          "La langue arabe très développée"
        ],
        [
          ["📍 Le lieu",
           "La péninsule arabique se situe au Moyen-Orient. L'eau l'entoure sur trois côtés : la mer Rouge à l'ouest, le golfe Persique à l'est et la mer d'Arabie au sud. Le sol est surtout désertique, l'eau rare et la vie rude — d'où la vie tribale et les déplacements d'un lieu à l'autre. Principales villes : La Mecque (centre du commerce et du Hajj) et Yathrib (Médine par la suite).",
           ""],
          ["🕯️ La situation religieuse — l'idolâtrie",
           "Ces gens étaient de la descendance d'Ibrâhîm (paix sur lui) ; ils croyaient en Allah, mais se sont tournés vers les idoles avec le temps. 'Amr ibn Luhay rapporta des idoles du Châm et les plaça près de la Kaaba ; puis chaque tribu se fit ses idoles — al-Lât, Manât et al-'Uzzâ étaient célèbres. À la conquête de La Mecque, il y avait 360 idoles autour de la Kaaba ; le Prophète ﷺ les renversa de son bâton et dit : « جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ » (la vérité est venue, le faux a disparu).",
           "Sahih al-Bukhari : 2478 (360 idoles) ; Sahih al-Bukhari : 3521 ('Amr ibn Luhay) ; Coran : 17:81"],
          ["🏘️ La situation sociale — le comble de l'injustice",
           "Le tribalisme était à son apogée. Dans certaines tribus, on enterrait les filles vivantes. Le vin, la fornication et les jeux de hasard étaient courants. On traitait les esclaves plus mal que les bêtes. La femme n'héritait pas ; elle-même passait en héritage comme un bien. L'hôte était fort honoré, mais il n'y avait aucune pitié envers les étrangers.",
           "Coran : 81:8-9, 16:58-59"],
          ["💰 La situation économique",
           "La Mecque était le centre du commerce. Les Quraysh allaient au Yémen en hiver et au Châm en été. Mais le plus grand fléau était l'usure (ribâ) : le riche prêtait au pauvre à intérêt ; s'il ne remboursait pas à temps, l'intérêt augmentait, jusqu'à ce que le pauvre devienne esclave. Le détournement des biens des orphelins et la tricherie dans la mesure et le poids étaient courants.",
           ""],
          ["🎯 La leçon",
           "Plus les ténèbres sont profondes, plus le besoin de lumière est grand. Allah décida d'envoyer une lumière en un tel moment : cela montre qu'Il ne laisse pas Ses serviteurs seuls. Devant l'injustice, il nous faut croire que la lumière d'Allah viendra.",
           ""]
        ],
        [
          ["Combien y avait-il d'idoles autour de la Kaaba ?", ["30", "360", "3600"]],
          ["Qui introduisit l'idolâtrie ?", ["Abou Jahl", "'Amr ibn Luhay", "Abou Soufyân"]],
          ["Qu'est-ce que l'année de l'Éléphant ?", ["La destruction des idoles", "L'attaque d'Abraha avec des éléphants", "La construction de la Kaaba"]]
        ],
        [
          ["~2000 av. J.-C.", "Ibrâhîm et Ismâ'îl (paix sur eux) bâtirent la Kaaba"],
          ["IIIe siècle (environ)", "'Amr ibn Luhay introduisit l'idolâtrie"],
          ["570", "L'attaque d'Abraha — l'année de l'Éléphant"]
        ]
      ],
      es: [
        "La Arabia anterior al islam: el mundo de las tinieblas",
        "La península arábiga",
        "Antes del año 570 d. C.",
        "Comprender cuán injusta, oscura y desamparada era la situación de Arabia antes de la llegada del Profeta ﷺ.",
        "El corazón tiembla al saber cuán afortunados somos por ser de la comunidad del Profeta ﷺ. ¡Oh Alá! Haznos agradecidos de esta gracia. Amín.",
        [
          "360 ídolos alrededor de la Kaaba",
          "Amr ibn Luhay introdujo la idolatría",
          "En algunas tribus se enterraba vivas a las niñas",
          "Usura, vino y juegos de azar comunes",
          "No hay poder central en La Meca (sistema tribal)",
          "La lengua árabe muy desarrollada"
        ],
        [
          ["📍 El lugar",
           "La península arábiga está en Oriente Medio. El agua la rodea por tres lados: el mar Rojo al oeste, el golfo Pérsico al este y el mar de Arabia al sur. La tierra es en su mayor parte desierto, el agua escasa y la vida dura; por eso la vida tribal y el traslado de un lugar a otro. Ciudades principales: La Meca (centro del comercio y del Hach) y Yatrib (Medina después).",
           ""],
          ["🕯️ La situación religiosa: la idolatría",
           "Esta gente era descendiente de Ibrahim (la paz sea con él); creían en Alá, pero con el tiempo se volvieron a los ídolos. Amr ibn Luhay trajo ídolos del Sham y los colocó junto a la Kaaba; luego cada tribu hizo sus ídolos: al-Lat, Manat y al-Uzza eran famosos. En la conquista de La Meca había 360 ídolos alrededor de la Kaaba; el Profeta ﷺ los derribó con su bastón y dijo: «جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ» (la verdad ha llegado, lo falso se ha desvanecido).",
           "Sahih al-Bujari: 2478 (360 ídolos); Sahih al-Bujari: 3521 (Amr ibn Luhay); Corán: 17:81"],
          ["🏘️ La situación social: el colmo de la injusticia",
           "El tribalismo estaba en su apogeo. En algunas tribus enterraban vivas a las niñas. El vino, la fornicación y los juegos de azar eran comunes. A los esclavos se les trataba peor que a los animales. La mujer no heredaba; ella misma pasaba como herencia, como un bien. Al huésped se le honraba mucho, pero no había compasión para los extraños.",
           "Corán: 81:8-9, 16:58-59"],
          ["💰 La situación económica",
           "La Meca era el centro del comercio. Los Quraysh iban al Yemen en invierno y al Sham en verano. Pero el mayor mal era la usura (riba): el rico prestaba al pobre con interés y, si no pagaba a tiempo, el interés crecía hasta que el pobre se volvía esclavo. Apropiarse de los bienes de los huérfanos y defraudar en la medida y el peso eran comunes.",
           ""],
          ["🎯 La lección",
           "Cuanto más profunda es la oscuridad, mayor es la necesidad de luz. Alá decidió enviar una luz en tal momento; esto muestra que Alá no deja solos a Sus siervos. Ante la injusticia debemos tener la certeza de que la luz de Alá vendrá.",
           ""]
        ],
        [
          ["¿Cuántos ídolos había alrededor de la Kaaba?", ["30", "360", "3600"]],
          ["¿Quién introdujo la idolatría?", ["Abu Yahal", "Amr ibn Luhay", "Abu Sufian"]],
          ["¿Qué es el año del Elefante?", ["La destrucción de los ídolos", "El ataque de Abraha con elefantes", "La construcción de la Kaaba"]]
        ],
        [
          ["~2000 a. C.", "Ibrahim e Ismail (la paz sea con ellos) construyeron la Kaaba"],
          ["Siglo III d. C. (aprox.)", "Amr ibn Luhay introdujo la idolatría"],
          ["570 d. C.", "El ataque de Abraha: el año del Elefante"]
        ]
      ]
    },

    /* ═══════════════ DAY 2 — Wiladat-e-Nabawi ﷺ ═══════════════ */
    2: {
      mr: [
        "नबी ﷺ यांचा जन्म — प्रकाशाचा उदय",
        "मक्का मुकर्रमा",
        "आमुल-फीलचे वर्ष (इ.स. ५७०-५७१)",
        "नबी ﷺ यांचा जन्म, आमुल-फील, वडिलांचे निधन आणि दूध-पाजण्याची (रिजाअत) घटना समजून घेणे.",
        "नबी ﷺ अनाथ जन्मले, पण जगातील सर्वात मोठे मानव बनले. हे अल्लाह! आम्हालाही आपल्या हबीब ﷺ यांच्यासारखे चारित्र्य दे. आमीन.",
        [
          "जन्म: सोमवार, आमुल-फीलचे वर्ष",
          "वडील: अब्दुल्लाह (आधी निधन)",
          "आई: आमिना",
          "आजोबा: अब्दुलमुत्तलिब",
          "दूध: सुवैबा, नंतर हलीमा सादिया",
          "आईचे निधन: वय वर्षे ६"
        ],
        [
          ["🐘 आमुल-फील",
           "येमेनचा गव्हर्नर अब्रहाने सनआमध्ये मोठे चर्च बांधले जेणेकरून लोक काबाऐवजी तिथे हज करतील. कोणीही आले नाही, तेव्हा त्याने काबा पाडण्याचे ठरवले आणि मोठ्या हत्तीसह मक्केला आला. अब्दुलमुत्तलिब म्हणाले: «या घराला त्याचा पालनकर्ता आहे, तो त्याचे रक्षण करेल.» अल्लाहने अबाबील पक्षी पाठवले, त्यांनी दगड फेकले आणि ते सैन्य नष्ट झाले. त्याच वर्षी नबी ﷺ जन्मले.",
           ""],
          ["👶 जन्म",
           "सोमवारी, सकाळच्या वेळी, आमुल-फीलच्या वर्षी. तारखेबद्दल मतभेद आहे: प्रसिद्ध मत १२ रबीउल-अव्वल आहे, तर «अर-रहीकुल-मख्तूम» मध्ये ९ रबीउल-अव्वल (सुमारे २० किंवा २२ एप्रिल ५७१) यांना प्राधान्य दिले आहे. सोमवारी जन्म हा सहीह मुस्लिम (११६२) च्या हदीसने सिद्ध आहे. वडील: अब्दुल्लाह बिन अब्दुलमुत्तलिब (प्रसिद्ध मतानुसार जन्मापूर्वी निधन), आई: आमिना बिंत वहब. आजोबा अब्दुलमुत्तलिब यांनी «मुहम्मद» हे नाव ठेवले.",
           ""],
          ["🤱 रिजाअत — हलीमा सादिया",
           "अरबी रीतीनुसार बाळाला वाळवंटातील स्त्रीकडे दिले जात असे, जेणेकरून तो निरोगी राहील आणि शुद्ध अरबी शिकेल. आधी सुवैबाने काही दिवस दूध पाजले, नंतर हलीमा सादिया यांच्याकडे दिले. सीरतच्या रिवायतींमध्ये हलीमा यांच्याकडून आले आहे: «जेव्हा मी मुहम्मद ﷺ यांना कडेवर घेतले, तेव्हा माझ्या छातीत दूध आले आणि आमच्या सुकलेल्या शेळ्या दूध देऊ लागल्या.» आप ﷺ तिथे ४-५ वर्षे राहिले.",
           ""],
          ["💔 आईचे निधन",
           "वय वर्षे ६ असताना आमिना आपल्याला (ﷺ) मदिन्याला घेऊन गेल्या, जेणेकरून मामांच्या नातेवाईकांना भेटतील आणि पतीच्या कबरीला भेट देतील. परतीच्या प्रवासात अबवा येथे आजारी पडून त्यांचे निधन झाले. आप ﷺ वडिलांनंतर आईपासूनही वंचित झाले. नंतर आप ﷺ आईच्या कबरीला भेटायला गेले, स्वतः रडले आणि साथीदारांनाही रडवले, आणि म्हणाले: «मी माझ्या रबकडे त्यांच्यासाठी माफी मागण्याची परवानगी मागितली, ती मिळाली नाही; आणि त्यांच्या कबरीला भेट देण्याची परवानगी मागितली, ती मिळाली.» (सहीह मुस्लिम: ९७६). हे आईबद्दलचे आपल्या ﷺ खोल प्रेम दाखवते.",
           ""],
          ["🎯 बोध",
           "नबी ﷺ अनाथ जन्मले, पण जगातील सर्वात मोठे मानव बनले. अल्लाहकडे मान वंशाने नाही, तर तकवा आणि चारित्र्याने मिळतो.",
           ""]
        ],
        [
          ["जन्म कोणत्या वर्षी झाला?", ["६००", "५७०", "६१०"]],
          ["वडिलांचे नाव काय होते?", ["अब्दुलमुत्तलिब", "अब्दुल्लाह", "अबू तालिब"]],
          ["प्रसिद्ध दाई कोण होती?", ["सुवैबा", "हलीमा सादिया", "उम्मे ऐमन"]]
        ],
        [
          ["इ.स. ५७०–५७१", "अब्रहाचा हल्ला अयशस्वी"],
          ["इ.स. ५७०–५७१", "जन्म — १२ रबीउल-अव्वल (प्रसिद्ध) / ९ रबीउल-अव्वल (अर-रहीक)"],
          ["इ.स. ५७०–५७५", "हलीमा सादिया यांच्याकडे दूध"],
          ["इ.स. ५७६", "आईचे निधन"]
        ]
      ],
      ar: [
        "ولادة النبي ﷺ — بزوغ النور",
        "مكة المكرمة",
        "عام الفيل (570-571 م)",
        "فهم ولادة النبي ﷺ، وعام الفيل، ووفاة أبيه، وحادثة الرضاعة.",
        "وُلد النبي ﷺ يتيمًا فصار أعظم إنسان في الدنيا. اللهم ارزقنا خلقًا كخلق حبيبك ﷺ. آمين.",
        [
          "الولادة: يوم الاثنين، عام الفيل",
          "الأب: عبد الله (توفي قبلها)",
          "الأم: آمنة",
          "الجد: عبد المطلب",
          "الرضاعة: ثويبة ثم حليمة السعدية",
          "وفاة الأم: في السادسة من عمره"
        ],
        [
          ["🐘 عام الفيل",
           "بنى أبرهة والي اليمن كنيسة كبيرة في صنعاء ليحج الناس إليها بدل الكعبة، فلما لم يأتِ أحد عزم على هدم الكعبة وجاء مكة بفيل عظيم. فقال عبد المطلب: «إن للبيت ربًّا يمنعه». فأرسل الله طيرًا أبابيل ترميهم بحجارة فهلك الجيش، وفي تلك السنة وُلد النبي ﷺ.",
           ""],
          ["👶 الولادة",
           "يوم الاثنين في أول النهار، في عام الفيل. وفي التاريخ خلاف: فالمشهور الثاني عشر من ربيع الأول، وارتضى «الرحيق المختوم» التاسع من ربيع الأول (نحو 20 أو 22 أبريل 571). وثبتت الولادة يوم الاثنين بحديث صحيح مسلم (1162). الأب: عبد الله بن عبد المطلب (توفي قبل الولادة على المشهور)، والأم: آمنة بنت وهب، وسمّاه جده عبد المطلب «محمدًا».",
           ""],
          ["🤱 الرضاعة — حليمة السعدية",
           "كان من عادة العرب أن يُدفع الطفل إلى امرأة من البادية ليكون أصح بدنًا وليتعلم العربية الخالصة. فأرضعته ثويبة أيامًا، ثم دُفع إلى حليمة السعدية. وفي روايات السيرة عنها: «لما أخذت محمدًا ﷺ في حجري درّ اللبن في صدري، وأخذت شاتانا الجافة تُدرّ». وأقام ﷺ عندها أربع أو خمس سنين.",
           ""],
          ["💔 وفاة الأم",
           "في السادسة من عمره ذهبت به آمنة إلى المدينة لزيارة أخواله وزيارة قبر أبيه، وفي رجوعها مرضت بالأبواء فتوفيت، فبقي ﷺ بعد أبيه بلا أم. وقد زار ﷺ قبرها بعد ذلك فبكى وأبكى أصحابه وقال: «استأذنت ربي أن أستغفر لها فلم يؤذن لي، واستأذنته أن أزور قبرها فأذن لي». (صحيح مسلم: 976). وهذا يدل على شدة محبته ﷺ لأمه.",
           ""],
          ["🎯 العبرة",
           "وُلد النبي ﷺ يتيمًا فصار أعظم إنسان في الدنيا. والعزة عند الله ليست بالنسب، بل بالتقوى والخلق.",
           ""]
        ],
        [
          ["في أي سنة كانت الولادة؟", ["600", "570", "610"]],
          ["ما اسم أبيه؟", ["عبد المطلب", "عبد الله", "أبو طالب"]],
          ["من أشهر مرضعة له؟", ["ثويبة", "حليمة السعدية", "أم أيمن"]]
        ],
        [
          ["570–571", "فشل هجوم أبرهة"],
          ["570–571", "الولادة — 12 ربيع الأول (المشهور) / 9 ربيع الأول (الرحيق)"],
          ["570–575", "الرضاعة عند حليمة السعدية"],
          ["576", "وفاة الأم"]
        ]
      ],
      fr: [
        "La naissance du Prophète ﷺ — l'apparition de la lumière",
        "La Mecque",
        "L'année de l'Éléphant (570-571)",
        "Comprendre la naissance du Prophète ﷺ, l'année de l'Éléphant, la mort de son père et l'épisode de l'allaitement.",
        "Le Prophète ﷺ naquit orphelin et devint le plus grand des hommes. Ô Allah ! Accorde-nous un caractère semblable à celui de Ton bien-aimé ﷺ. Âmîn.",
        [
          "Naissance : un lundi, l'année de l'Éléphant",
          "Père : 'Abdoullah (mort avant)",
          "Mère : Âmina",
          "Grand-père : 'Abd al-Muttalib",
          "Allaitement : Thuwayba, puis Halîma as-Sa'diyya",
          "Mort de la mère : à six ans"
        ],
        [
          ["🐘 L'année de l'Éléphant",
           "Abraha, gouverneur du Yémen, bâtit une grande église à Sanaa pour que les gens y fassent le pèlerinage au lieu de la Kaaba. Comme personne ne vint, il décida de démolir la Kaaba et vint à La Mecque avec un grand éléphant. 'Abd al-Muttalib dit : « Cette Maison a un Seigneur qui la défendra. » Allah envoya des oiseaux ababîl qui lancèrent des pierres, et l'armée fut détruite. Cette année-là, le Prophète ﷺ naquit.",
           ""],
          ["👶 La naissance",
           "Un lundi, au début de la matinée, l'année de l'Éléphant. Les dates divergent : l'avis célèbre est le 12 rabî' al-awwal, tandis que « Ar-Rahîq al-Makhtûm » retient le 9 rabî' al-awwal (vers le 20 ou 22 avril 571). La naissance un lundi est établie par le hadith de Sahih Muslim (1162). Père : 'Abdoullah ibn 'Abd al-Muttalib (mort avant la naissance selon l'avis célèbre) ; mère : Âmina bint Wahb. Son grand-père 'Abd al-Muttalib le nomma « Mouhammad ».",
           ""],
          ["🤱 L'allaitement — Halîma as-Sa'diyya",
           "Selon l'usage arabe, on confiait le nourrisson à une femme du désert pour qu'il grandisse en bonne santé et apprenne l'arabe pur. Thuwayba l'allaita quelques jours, puis il fut confié à Halîma as-Sa'diyya. Les récits de Sîra rapportent d'elle : « Quand je pris Mouhammad ﷺ dans mes bras, le lait vint à ma poitrine et nos brebis desséchées se mirent à donner du lait. » Il resta chez elle quatre ou cinq ans.",
           ""],
          ["💔 La mort de sa mère",
           "À six ans, Âmina l'emmena à Médine pour rencontrer ses oncles maternels et visiter la tombe de son père. Au retour, elle tomba malade à Abwâ' et mourut. Après son père, le Prophète ﷺ fut donc privé aussi de sa mère. Plus tard, il visita sa tombe, pleura et fit pleurer ses compagnons, et dit : « J'ai demandé à mon Seigneur la permission de demander pardon pour elle, elle ne me fut pas accordée ; et je Lui ai demandé la permission de visiter sa tombe, elle me fut accordée. » (Sahih Muslim : 976). Cela montre la profonde affection du Prophète ﷺ pour sa mère.",
           ""],
          ["🎯 La leçon",
           "Le Prophète ﷺ naquit orphelin et devint le plus grand des hommes. La dignité auprès d'Allah ne vient pas de la lignée, mais de la piété et du caractère.",
           ""]
        ],
        [
          ["En quelle année eut lieu la naissance ?", ["600", "570", "610"]],
          ["Quel est le nom de son père ?", ["'Abd al-Muttalib", "'Abdoullah", "Abou Tâlib"]],
          ["Quelle est sa nourrice la plus connue ?", ["Thuwayba", "Halîma as-Sa'diyya", "Oumm Ayman"]]
        ],
        [
          ["570–571", "Échec de l'attaque d'Abraha"],
          ["570–571", "Naissance — 12 rabî' al-awwal (avis célèbre) / 9 rabî' al-awwal (Ar-Rahîq)"],
          ["570–575", "Allaitement chez Halîma as-Sa'diyya"],
          ["576", "Mort de sa mère"]
        ]
      ],
      es: [
        "El nacimiento del Profeta ﷺ: la aparición de la luz",
        "La Meca",
        "El año del Elefante (570-571)",
        "Comprender el nacimiento del Profeta ﷺ, el año del Elefante, la muerte de su padre y el episodio de la lactancia.",
        "El Profeta ﷺ nació huérfano y llegó a ser el más grande de los hombres. ¡Oh Alá! Concédenos un carácter como el de Tu amado ﷺ. Amín.",
        [
          "Nacimiento: un lunes, el año del Elefante",
          "Padre: Abdalah (falleció antes)",
          "Madre: Amina",
          "Abuelo: Abd al-Muttalib",
          "Lactancia: Suwaiba y luego Halima as-Sadiyya",
          "Fallecimiento de la madre: a los seis años"
        ],
        [
          ["🐘 El año del Elefante",
           "Abraha, gobernador del Yemen, construyó una gran iglesia en Sanaa para que la gente peregrinara allí en lugar de a la Kaaba. Como nadie vino, decidió demoler la Kaaba y llegó a La Meca con un gran elefante. Abd al-Muttalib dijo: «Esta Casa tiene un Señor que la defenderá.» Alá envió aves ababil que lanzaron piedras, y el ejército fue destruido. Ese mismo año nació el Profeta ﷺ.",
           ""],
          ["👶 El nacimiento",
           "Un lunes, a primera hora de la mañana, en el año del Elefante. Las fechas difieren: la opinión famosa es el 12 de rabi' al-awwal, mientras que «Ar-Rahiq al-Majtum» prefiere el 9 de rabi' al-awwal (hacia el 20 o 22 de abril de 571). El nacimiento en lunes está probado por el hadiz de Sahih Muslim (1162). Padre: Abdalah ibn Abd al-Muttalib (fallecido antes del nacimiento según la opinión famosa); madre: Amina bint Wahb. Su abuelo Abd al-Muttalib le puso el nombre de «Muhámmad».",
           ""],
          ["🤱 La lactancia: Halima as-Sadiyya",
           "Según la costumbre árabe, se entregaba al niño a una mujer del desierto para que creciera sano y aprendiera el árabe puro. Suwaiba le amamantó unos días y luego fue entregado a Halima as-Sadiyya. Las narraciones de la Sira transmiten de ella: «Cuando tomé a Muhámmad ﷺ en mi regazo, me vino leche al pecho y nuestras ovejas secas empezaron a dar leche.» Permaneció con ella cuatro o cinco años.",
           ""],
          ["💔 El fallecimiento de su madre",
           "A los seis años, Amina lo llevó a Medina para visitar a sus tíos maternos y la tumba de su padre. A la vuelta enfermó en Abwa y falleció. Tras su padre, el Profeta ﷺ quedó también privado de su madre. Más tarde visitó su tumba, lloró e hizo llorar a sus compañeros, y dijo: «Pedí permiso a mi Señor para pedir perdón por ella y no me lo concedió; y le pedí permiso para visitar su tumba y me lo concedió.» (Sahih Muslim: 976). Esto muestra el profundo amor del Profeta ﷺ por su madre.",
           ""],
          ["🎯 La lección",
           "El Profeta ﷺ nació huérfano y llegó a ser el más grande de los hombres. La dignidad ante Alá no viene del linaje, sino de la piedad y el carácter.",
           ""]
        ],
        [
          ["¿En qué año nació?", ["600", "570", "610"]],
          ["¿Cómo se llamaba su padre?", ["Abd al-Muttalib", "Abdalah", "Abu Talib"]],
          ["¿Quién fue su nodriza más conocida?", ["Suwaiba", "Halima as-Sadiyya", "Umm Ayman"]]
        ],
        [
          ["570–571", "Fracasa el ataque de Abraha"],
          ["570–571", "Nacimiento: 12 de rabi' al-awwal (opinión famosa) / 9 de rabi' al-awwal (Ar-Rahiq)"],
          ["570–575", "Lactancia con Halima as-Sadiyya"],
          ["576", "Fallecimiento de su madre"]
        ]
      ]
    },

    /* ═══════════════ DAY 3 — Bachpan se jawani ═══════════════ */
    3: {
      mr: [
        "बालपणापासून तारुण्यापर्यंत — सत्यनिष्ठ व विश्वासू",
        "मक्का, शाम",
        "वय वर्षे ६ ते २५",
        "बालपण, आजोबा व अबू तालिब यांचे संगोपन, बहीरा भिक्षु, हिल्फुल-फुदूल आणि «सादिक व अमीन» ही विशेषणे समजून घेणे.",
        "अनाथपण, आईची विरह आणि आजोबांची विरह — पण आप ﷺ यांनी कधीही तक्रार केली नाही. कायम संयम, कृतज्ञता आणि अल्लाहवर भरवसा. म्हणूनच अल्लाहने «सादिक व अमीन» बनवले आणि नंतर रसूल म्हणून निवडले. हे अल्लाह! आम्हालाही हा संयम दे. आमीन.",
        [
          "हलीमा यांच्या घरी ४-५ वर्षे",
          "बालपणी शक्कुस-सद्र",
          "आई: वय वर्षे ६, आजोबा: वय वर्षे ८",
          "अबू तालिब: सुमारे ४० वर्षांचे संरक्षण",
          "बहीरा भिक्षु: वय वर्षे १२",
          "हिल्फुल-फुदूल: वय वर्षे २०",
          "«सादिक व अमीन» ही विशेषणे"
        ],
        [
          ["👼 शक्कुस-सद्र",
           "बालपणी एके दिवशी दोन देवदूत आले, त्यांनी छाती उघडली, हृदय काढले, झमझमच्या पाण्याने धुतले आणि शैतानाचा वाटा काढून टाकला. ही घटना दाखवते की अल्लाहने आपल्या हबीबाला नबुव्वतपूर्वीच प्रत्येक वाईट गोष्टीपासून पवित्र केले.",
           "सहीह मुस्लिम: १६२"],
          ["👴 आजोबांचे संगोपन — २ वर्षे",
           "अब्दुलमुत्तलिब कुरैशचे सरदार होते; त्यांनी फार प्रेमाने संगोपन केले, आपल्याला (ﷺ) आपल्या बिछान्यावर बसवत आणि (सीरतच्या रिवायतीनुसार) म्हणत: «हा मुलगा पुढे मोठे काम करेल.» वय वर्षे ८ असताना आजोबाही गेले.",
           ""],
          ["🤝 अबू तालिब — ४० वर्षांची सावली",
           "काका अबू तालिब यांनी संगोपन केले. ते गरीब होते, पण भाच्यावर अमर्याद प्रेम होते आणि ते त्याला प्रत्येक ठिकाणी सोबत नेत. सुमारे ४० वर्षे संरक्षण केले; नबुव्वतनंतरही मुश्रिकांविरुद्ध ते ठाम उभे राहिले. अबू तालिब यांच्या निधनानंतर मुश्रिकांनी उघडपणे छळ सुरू केला. (एवढे संरक्षण असूनही अबू तालिब इस्लाम आणले नाहीत — त्याचा उल्लेख आमुल-हुझ्नमध्ये येईल.)",
           ""],
          ["🐐 शेळ्या चारणे",
           "नबी ﷺ यांनी शेळ्या चारल्या. हे प्रशिक्षणाचा भाग होते — संयम, एकटेपणा आणि जनावरांवरील माया. आप ﷺ म्हणाले: «अल्लाहने असा कोणताही नबी पाठवला नाही ज्याने शेळ्या चारल्या नाहीत.» सहाबांनी विचारले: तुम्हीही? ते म्हणाले: «होय, मी काही किराटांवर मक्केकरांच्या शेळ्या चारत असे.»",
           "सहीह बुखारी: २२६२"],
          ["🧙 बहीरा भिक्षु — वय वर्षे १२",
           "शामच्या प्रवासात बुसरामध्ये बहीरा नावाच्या भिक्षुने पाहिले की आपल्यावर (ﷺ) ढगाची सावली होती आणि झाडाची सावली होती, आणि त्याने आपल्याला (ﷺ) ओळखले. तो अबू तालिबला म्हणाला की या मुलाचे मोठे स्थान आहे, त्याचे रक्षण करा. ही घटना सीरतच्या पुस्तकांत (इब्न इशाक) आणि तिर्मिझीच्या एका रिवायतीत आली आहे; तिच्या काही तपशिलांवर मुहद्दिसांनी चर्चा केली आहे, म्हणून आपण ती सीरतची रिवायत म्हणून वाचतो.",
           "जामे तिर्मिझी: ३६२० (काही तपशिलांवर चर्चा)"],
          ["⚔️ हिल्फुल-फुदूल — वय वर्षे २०",
           "अरबमध्ये अत्याचार वाढला, तेव्हा काही टोळ्यांनी करार केला: «मक्केत कोणावरही अन्याय होणार नाही.» आप ﷺ यांनीही त्यात भाग घेतला. नंतर ते म्हणाले: «आजही हाक दिली तर मी नक्की येईन.» न्याय आपल्याला (ﷺ) किती प्रिय होता.",
           ""],
          ["⭐ सादिक व अमीन",
           "सत्यनिष्ठा, विश्वासार्हता, प्रामाणिकपणा आणि पवित्रतेमुळे «अस-सादिक» आणि «अल-अमीन» ही विशेषणे मिळाली. लोक आपल्याकडे (ﷺ) आपल्या वस्तू ठेवत, जरी ते शत्रू असले तरी. ही विशेषणे नबुव्वतपूर्वीच मिळाली — म्हणजे शत्रूही आपल्या (ﷺ) चारित्र्याचे साक्षीदार होते, आणि अल्लाहने याच चारित्र्यामुळे आपल्याला (ﷺ) नबुव्वतीसाठी निवडले.",
           ""],
          ["🎯 बोध",
           "अनाथ मुलापासून सत्यनिष्ठ व विश्वासू माणसापर्यंतचा प्रवास. हे दाखवते की अल्लाह ज्याला इच्छा त्याला मान देतो. सत्य आणि विश्वासार्हता हे असे अलंकार आहेत जे या जगातही मान देतात आणि परलोकातही.",
           ""]
        ],
        [
          ["आईचे निधन कोणत्या वयात झाले?", ["४", "६", "८"]],
          ["आजोबांचे निधन कोणत्या वयात झाले?", ["६", "८", "१०"]],
          ["वय वर्षे १२ मध्ये कोणत्या भिक्षुशी भेट झाली?", ["वरका", "बहीरा", "नजाशी"]]
        ],
        [
          ["इ.स. ५७६", "आईचे निधन"],
          ["इ.स. ५७८", "आजोबांचे निधन"],
          ["इ.स. ५८२", "बहीराशी भेट"],
          ["इ.स. ५९०", "हिल्फुल-फुदूल"]
        ]
      ],
      ar: [
        "من الطفولة إلى الشباب — الصادق الأمين",
        "مكة، الشام",
        "من 6 إلى 25 سنة",
        "فهم طفولته، وكفالة جده ثم أبي طالب، وبحيرى الراهب، وحلف الفضول، ولقب الصادق الأمين.",
        "اليتم، وفراق الأم، وفراق الجد — ومع ذلك لم يشكُ ﷺ قط، بل صبر وشكر وتوكل على الله. ولهذا جعله الله «الصادق الأمين» ثم اختاره رسولًا. اللهم ارزقنا هذا الصبر. آمين.",
        [
          "أربع أو خمس سنين في بيت حليمة",
          "شق الصدر في صغره",
          "الأم: في السادسة، والجد: في الثامنة",
          "أبو طالب: حماية نحو أربعين سنة",
          "بحيرى الراهب: في الثانية عشرة",
          "حلف الفضول: في العشرين",
          "لقب الصادق الأمين"
        ],
        [
          ["👼 شق الصدر",
           "في صغره جاء ملكان يومًا فشقّا صدره، وأخرجا قلبه، وغسلاه بماء زمزم، وأخرجا منه حظ الشيطان. ويدل هذا على أن الله طهّر حبيبه ﷺ من كل سوء قبل النبوة.",
           "صحيح مسلم: 162"],
          ["👴 كفالة الجد — سنتان",
           "كان عبد المطلب سيد قريش، ربّاه بمحبة شديدة، وكان يُجلسه ﷺ على فراشه ويقول (كما في روايات السيرة): «إن هذا الغلام سيكون له شأن». وفي الثامنة من عمره توفي جده أيضًا.",
           ""],
          ["🤝 أبو طالب — ظل أربعين سنة",
           "ربّاه عمه أبو طالب، وكان فقيرًا لكنه شديد المحبة لابن أخيه، يأخذه معه في كل مكان. حماه نحو أربعين سنة، وثبت أمام المشركين بعد النبوة أيضًا. وبعد وفاة أبي طالب بدأ المشركون يؤذونه علنًا. (ومع كل هذه الحماية لم يُسلم أبو طالب — وسيأتي ذكره في عام الحزن.)",
           ""],
          ["🐐 رعي الغنم",
           "رعى النبي ﷺ الغنم، وكان ذلك من تربيته: الصبر والوحدة والرحمة بالحيوان. قال ﷺ: «ما بعث الله نبيًّا إلا رعى الغنم». قالوا: وأنت؟ قال: «نعم، كنت أرعاها على قراريط لأهل مكة».",
           "صحيح البخاري: 2262"],
          ["🧙 بحيرى الراهب — في الثانية عشرة",
           "في سفره إلى الشام رأى بحيرى الراهب في بصرى أن غمامًا يظلله ﷺ وأن الشجر يظله، فعرفه. وقال لأبي طالب: إن لهذا الغلام شأنًا عظيمًا فاحفظه. وقد جاءت هذه القصة في كتب السيرة (ابن إسحاق) وفي رواية عند الترمذي؛ وتكلم المحدثون في بعض تفصيلاتها، فنقرأها على أنها من روايات السيرة.",
           "جامع الترمذي: 3620 (وفي بعض تفصيلاتها كلام)"],
          ["⚔️ حلف الفضول — في العشرين",
           "لما كثر الظلم في العرب تعاهدت قبائل على ألا يُظلم أحد في مكة. وقد شارك ﷺ في ذلك، وقال بعد ذلك: «لو دُعيت به اليوم لأجبت». فما أعظم مكانة العدل عنده ﷺ.",
           ""],
          ["⭐ الصادق الأمين",
           "بسبب الصدق والأمانة والاستقامة والطهارة لُقّب ﷺ بـ«الصادق» و«الأمين». وكان الناس يستودعونه أماناتهم ولو كانوا أعداءه. وقد جاءته هذه الألقاب قبل النبوة — أي أن أعداءه أنفسهم كانوا شهداء على خلقه، وعلى هذا الخلق اختاره الله للنبوة.",
           ""],
          ["🎯 العبرة",
           "رحلة من طفل يتيم إلى إنسان صادق أمين. وهذا يدل على أن الله يُعزّ من يشاء. والصدق والأمانة هما الحلية التي تُعزّ في الدنيا وفي الآخرة.",
           ""]
        ],
        [
          ["في أي عمر توفيت أمه؟", ["4", "6", "8"]],
          ["في أي عمر توفي جده؟", ["6", "8", "10"]],
          ["بمن التقى في الثانية عشرة؟", ["ورقة", "بحيرى", "النجاشي"]]
        ],
        [
          ["576", "وفاة الأم"],
          ["578", "وفاة الجد"],
          ["582", "لقاء بحيرى"],
          ["590", "حلف الفضول"]
        ]
      ],
      fr: [
        "De l'enfance à la jeunesse — le véridique et le digne de confiance",
        "La Mecque, le Châm",
        "De 6 à 25 ans",
        "Comprendre son enfance, la tutelle de son grand-père puis d'Abou Tâlib, le moine Bahîra, le pacte al-fudûl et les surnoms de « as-Sâdiq » et « al-Amîn ».",
        "L'orphelinat, la séparation d'avec sa mère, puis d'avec son grand-père — et pourtant il ﷺ ne se plaignit jamais : toujours la patience, la gratitude et la confiance en Allah. C'est pourquoi Allah le fit « as-Sâdiq al-Amîn » puis l'envoya comme Messager. Ô Allah ! Accorde-nous cette patience. Âmîn.",
        [
          "Quatre ou cinq ans chez Halîma",
          "Le fendage de la poitrine dans l'enfance",
          "Sa mère : à six ans ; son grand-père : à huit ans",
          "Abou Tâlib : environ quarante ans de protection",
          "Le moine Bahîra : à douze ans",
          "Al-fudûl : à vingt ans",
          "Les surnoms de « as-Sâdiq » et « al-Amîn »"
        ],
        [
          ["👼 Le fendage de la poitrine",
           "Dans son enfance, deux anges vinrent un jour, ouvrirent sa poitrine, en sortirent le cœur, le lavèrent avec l'eau de Zamzam et en ôtèrent la part du diable. Cela montre qu'Allah purifia Son bien-aimé ﷺ de tout mal avant la prophétie.",
           "Sahih Muslim : 162"],
          ["👴 La tutelle du grand-père — deux ans",
           "'Abd al-Muttalib, chef des Quraysh, l'éleva avec une grande affection ; il l'installait ﷺ sur sa propre couche et disait (selon les récits de Sîra) : « Cet enfant aura une grande affaire. » À huit ans, son grand-père mourut à son tour.",
           ""],
          ["🤝 Abou Tâlib — quarante ans d'ombre",
           "Son oncle Abou Tâlib l'éleva. Il était pauvre mais aimait profondément son neveu et l'emmenait partout. Il le protégea environ quarante ans et tint tête aux polythéistes même après la prophétie. Après la mort d'Abou Tâlib, les polythéistes commencèrent à le persécuter ouvertement. (Malgré toute cette protection, Abou Tâlib n'embrassa pas l'islam — cela sera évoqué dans l'année de la tristesse.)",
           ""],
          ["🐐 La garde des troupeaux",
           "Le Prophète ﷺ garda les troupeaux. Cela faisait partie de sa formation : patience, solitude, compassion envers les animaux. Il ﷺ dit : « Allah n'a envoyé aucun prophète sans qu'il n'ait gardé les moutons. » Les Compagnons demandèrent : et toi ? Il dit : « Oui, je les gardais pour quelques qîrât pour les gens de La Mecque. »",
           "Sahih al-Bukhari : 2262"],
          ["🧙 Le moine Bahîra — à douze ans",
           "Lors de son voyage en Syrie, à Bousrâ, le moine Bahîra vit qu'un nuage faisait de l'ombre au Prophète ﷺ et que les arbres l'ombrageaient, et il le reconnut. Il dit à Abou Tâlib : cet enfant a une grande importance, protège-le. Cet épisode figure dans les livres de Sîra (Ibn Ishâq) et dans une narration de Tirmidhi ; les spécialistes du hadith ont discuté certains de ses détails, c'est pourquoi nous le lisons comme un récit de Sîra.",
           "Jâmi' at-Tirmidhi : 3620 (discussion sur certains détails)"],
          ["⚔️ Al-fudûl — à vingt ans",
           "L'injustice s'étant accrue en Arabie, plusieurs tribus conclurent un pacte : nul ne serait opprimé à La Mecque. Le Prophète ﷺ y participa et dit plus tard : « Si on m'y appelait aujourd'hui, j'y répondrais. » Comme la justice lui était chère ﷺ.",
           ""],
          ["⭐ As-Sâdiq al-Amîn",
           "À cause de sa véracité, de sa fiabilité, de sa droiture et de sa pureté, il ﷺ reçut les surnoms de « as-Sâdiq » et « al-Amîn ». Les gens lui confiaient leurs dépôts, même ses ennemis. Ces surnoms lui furent donnés avant la prophétie — c'est-à-dire que ses ennemis eux-mêmes témoignaient de son caractère, et c'est sur ce caractère qu'Allah le choisit pour la prophétie.",
           ""],
          ["🎯 La leçon",
           "Le parcours d'un enfant orphelin vers un homme véridique et digne de confiance. Cela montre qu'Allah élève qui Il veut. La véracité et la fiabilité sont l'ornement qui honore en ce monde comme dans l'au-delà.",
           ""]
        ],
        [
          ["À quel âge sa mère mourut-elle ?", ["4", "6", "8"]],
          ["À quel âge son grand-père mourut-il ?", ["6", "8", "10"]],
          ["Quel moine rencontra-t-il à douze ans ?", ["Waraqa", "Bahîra", "an-Najâshî"]]
        ],
        [
          ["576", "Mort de sa mère"],
          ["578", "Mort de son grand-père"],
          ["582", "Rencontre de Bahîra"],
          ["590", "Le pacte al-fudûl"]
        ]
      ],
      es: [
        "De la infancia a la juventud: el veraz y el digno de confianza",
        "La Meca, el Sham",
        "De los 6 a los 25 años",
        "Comprender su infancia, la tutela de su abuelo y luego de Abu Talib, al monje Bahira, el pacto al-fudul y los apelativos de «as-Sadiq» y «al-Amin».",
        "La orfandad, la separación de su madre y luego de su abuelo; y sin embargo ﷺ nunca se quejó: siempre paciencia, gratitud y confianza en Alá. Por eso Alá lo hizo «as-Sadiq al-Amin» y después lo envió como Mensajero. ¡Oh Alá! Concédenos esa paciencia. Amín.",
        [
          "Cuatro o cinco años en casa de Halima",
          "El desdoblamiento del pecho en su infancia",
          "Su madre: a los seis años; su abuelo: a los ocho",
          "Abu Talib: unos cuarenta años de protección",
          "El monje Bahira: a los doce años",
          "Al-fudul: a los veinte años",
          "Los apelativos de «as-Sadiq» y «al-Amin»"
        ],
        [
          ["👼 El desdoblamiento del pecho",
           "En su infancia, dos ángeles vinieron un día, abrieron su pecho, sacaron el corazón, lo lavaron con agua de Zamzam y quitaron de él la parte del demonio. Esto muestra que Alá purificó a Su amado ﷺ de todo mal antes de la profecía.",
           "Sahih Muslim: 162"],
          ["👴 La tutela del abuelo: dos años",
           "Abd al-Muttalib, jefe de los Quraysh, lo crió con gran cariño; lo sentaba ﷺ en su propio lecho y decía (según los relatos de la Sira): «Este niño tendrá un gran asunto.» A los ocho años murió también su abuelo.",
           ""],
          ["🤝 Abu Talib: cuarenta años de sombra",
           "Lo crió su tío Abu Talib. Era pobre pero amaba profundamente a su sobrino y lo llevaba consigo a todas partes. Lo protegió unos cuarenta años y se mantuvo firme frente a los idólatras incluso después de la profecía. Tras la muerte de Abu Talib, los idólatras comenzaron a perseguirlo abiertamente. (A pesar de toda esa protección, Abu Talib no abrazó el islam; se mencionará en el año de la tristeza.)",
           ""],
          ["🐐 El pastoreo",
           "El Profeta ﷺ pastoreó rebaños. Formaba parte de su formación: paciencia, soledad y compasión hacia los animales. Dijo ﷺ: «Alá no envió profeta alguno sin que haya pastoreado ovejas.» Le preguntaron: ¿y tú? Dijo: «Sí, yo las pastoreaba por unos quirats para la gente de La Meca.»",
           "Sahih al-Bujari: 2262"],
          ["🧙 El monje Bahira: a los doce años",
           "En su viaje al Sham, en Busra, el monje Bahira vio que una nube daba sombra al Profeta ﷺ y que los árboles le daban sombra, y lo reconoció. Dijo a Abu Talib: este niño tiene un gran asunto, protégelo. Este episodio aparece en los libros de Sira (Ibn Ishaq) y en una narración de Tirmidhi; los expertos en hadiz discutieron algunos de sus detalles, por eso lo leemos como un relato de Sira.",
           "Yami' at-Tirmidhi: 3620 (con discusión sobre algunos detalles)"],
          ["⚔️ Al-fudul: a los veinte años",
           "Al crecer la injusticia en Arabia, varias tribus pactaron que nadie sería oprimido en La Meca. El Profeta ﷺ participó en ello y dijo después: «Si hoy se me llamara a ello, acudiría.» ¡Cuánto amaba la justicia ﷺ!",
           ""],
          ["⭐ As-Sadiq al-Amin",
           "Por su veracidad, su confiabilidad, su rectitud y su pureza recibió ﷺ los apelativos de «as-Sadiq» y «al-Amin». La gente le confiaba sus depósitos, incluso sus enemigos. Estos apelativos le fueron dados antes de la profecía; es decir, sus propios enemigos daban testimonio de su carácter, y por ese carácter Alá lo eligió para la profecía.",
           ""],
          ["🎯 La lección",
           "El camino de un niño huérfano a un hombre veraz y digno de confianza. Esto muestra que Alá eleva a quien quiere. La veracidad y la confiabilidad son el adorno que honra en este mundo y en el otro.",
           ""]
        ],
        [
          ["¿A qué edad murió su madre?", ["4", "6", "8"]],
          ["¿A qué edad murió su abuelo?", ["6", "8", "10"]],
          ["¿Con qué monje se encontró a los doce años?", ["Waraqa", "Bahira", "an-Nayashi"]]
        ],
        [
          ["576", "Fallecimiento de su madre"],
          ["578", "Fallecimiento de su abuelo"],
          ["582", "Encuentro con Bahira"],
          ["590", "El pacto al-fudul"]
        ]
      ]
    },

    /* ═══════════════ DAY 4 — Nikah-e-Khadija ؓ ═══════════════ */
    4: {
      mr: [
        "हजरत खदीजा (र.अ.) यांच्याशी विवाह — शांतीचा साथीदार",
        "मक्का",
        "वय वर्षे २५, इ.स. ५९५",
        "नबी ﷺ यांच्या पहिल्या पत्नी, व्यापारी प्रवास आणि या बरकतदायक विवाहाची घटना समजून घेणे.",
        "हजरत खदीजा (र.अ.) यांनी नबी ﷺ यांच्या सत्यनिष्ठा व विश्वासार्हतेची साक्ष ऐकून स्वतः नात्याची वाणी पाठवली. हे नाते धन-दौलतीचे नव्हते, चारित्र्याचे होते. हे अल्लाह! आम्हालाही असाच चांगला साथीदार दे. आमीन.",
        [
          "नबी ﷺ यांचे वय: २५ वर्षे",
          "खदीजा (र.अ.) यांचे वय: ४० वर्षे (प्रसिद्ध मत)",
          "२५ वर्षे सोबत राहिले",
          "खदीजा (र.अ.) यांच्या आयुष्यात दुसरा विवाह केला नाही",
          "पहिल्या ईमान आणणारी",
          "संतती: ४ मुली, २ पुत्र"
        ],
        [
          ["💼 व्यापारी प्रवास",
           "वय वर्षे २५ असताना अबू तालिब म्हणाले (सीरतच्या रिवायतीनुसार): «भाच्या, मी गरीब आहे, आता तू स्वतः काही कर.» हजरत खदीजा (र.अ.) मक्केच्या फार मोठ्या व्यापारी महिला होत्या; त्या आपला माल व्यापारात लावत आणि नफा देत. त्यांनी नबी ﷺ यांच्या सत्यनिष्ठेची प्रशंसा ऐकली आणि आपला माल व्यापारासाठी द्यायला पाठवले. आप ﷺ शामला गेले, मैसरा गुलाम सोबत होता, आणि भरपूर नफा मिळवला. परतीच्या वेळी गुलामाने सर्व हकीकत सांगितली — नबी ﷺ किती प्रामाणिक व विश्वासू होते, बाजारात विक्रेत्यांशी कसा व्यवहार करत, आणि (सीरतच्या रिवायतींनुसार) वाटेत काही असामान्य खुणाही दिसल्या.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["💍 विवाहाची वाणी",
           "हजरत खदीजा (र.अ.) यांनी आपल्या मैत्रिण नुफैसा बिंत मुन्याला पाठवले की नबी ﷺ यांच्याशी विवाहाची बोलणी करावी. नबी ﷺ यांनी आपल्या काका अबू तालिब यांच्याशी सल्ला घेतला; अबू तालिब यांनी खदीजा (र.अ.) यांच्या काकांशी खुतबा म्हटला आणि मेहर ठरला. विवाह झाला. प्रसिद्ध मतानुसार हजरत खदीजा (र.अ.) ४० वर्षांच्या होत्या (काही विद्वानांनी त्यांचे वय यापेक्षा कमी सांगितले आहे), आणि नबी ﷺ २५ वर्षांचे.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🤍 प्रेमाचे नाते",
           "हा विवाह केवळ सांसारिक नाते नव्हता, तर दोघांच्या हृदयाचे नाते होते. हजरत खदीजा (र.अ.) नबी ﷺ यांची शांती होत्या. जेव्हा वह्य (प्रकटीकरण) आले तेव्हा सर्वात आधी त्याच ईमान आणले. जेव्हा लोक विरोध करत तेव्हा त्या धीर देत आणि मालाने मदत करत. २५ वर्षे सोबत राहिले; त्यांच्या आयुष्यात आप ﷺ यांनी दुसरा विवाह केला नाही (सहीह मुस्लिम: २४३६). त्यांच्या निधनानंतरही नबी ﷺ त्यांची आठवण करत आणि त्यांच्या मैत्रिणींना भेटवस्तू पाठवत. हजरत आयशा (र.अ.) म्हणतात: «खदीजा (र.अ.) यांच्याइतका हेवा मला कोणाचाही आला नाही, जरी मी त्यांना पाहिलेही नव्हते.»",
           "सहीह मुस्लिम: २४३६, २४३५; सहीह बुखारी: ३८१६"],
          ["👨‍👩‍👧 संतती",
           "नबी ﷺ यांची संतती याच विवाहातून झाली: कासिम, अब्दुल्लाह (त्ययिब व ताहिर ही विशेषणे; काही सीरतकार त्यांना वेगळे पुत्र म्हणतात), झैनब, रुकय्या, उम्मे कुलसूम आणि फातिमा (र.अ.). हजरत इब्राहीम मारिया किब्तिया (र.अ.) यांच्यापासून जन्मले. सर्व पुत्र बालपणीच गेले, चार मुली तारुण्यात पोहोचल्या.",
           ""],
          ["🎯 बोध",
           "चांगल्या साथीदाराचे महत्त्व. हजरत खदीजा (र.अ.) यांच्यासारखी पत्नी नबी ﷺ यांनाही मिळाली. आपण आपल्या नात्यात प्रेम, निष्ठा आणि दीन यांना मोल दिले पाहिजे. विवाह केवळ सांसारिक व्यवहार नाही, तर परलोकाचा साथीदार शोधणे आहे.",
           ""]
        ],
        [
          ["नबी ﷺ यांची पहिली पत्नी कोण होती?", ["आयशा", "खदीजा", "हफ्सा"]],
          ["विवाहाच्या वेळी नबी ﷺ यांचे वय किती होते?", ["२०", "२५", "३०"]],
          ["प्रसिद्ध मतानुसार विवाहाच्या वेळी खदीजा (र.अ.) यांचे वय किती होते?", ["३०", "३५", "४०"]]
        ],
        [
          ["इ.स. ५९५", "शामचा व्यापारी प्रवास"],
          ["इ.स. ५९५", "खदीजा (र.अ.) यांच्याशी विवाह"],
          ["इ.स. सु. ५९८", "मुलगी झैनबचा जन्म"],
          ["इ.स. सु. ६०५", "मुलगी फातिमेचा जन्म"]
        ]
      ],
      ar: [
        "زواجه ﷺ بخديجة رضي الله عنها — رفيقة السكينة",
        "مكة",
        "في الخامسة والعشرين، سنة 595 م",
        "فهم زوجة النبي ﷺ الأولى، ورحلة التجارة، وقصة هذا النكاح المبارك.",
        "سمعت خديجة رضي الله عنها بصدق النبي ﷺ وأمانته فأرسلت تطلب الزواج بنفسها. لم يكن هذا الرابط رابط مال، بل رابط خلق. اللهم ارزقنا رفيقًا صالحًا مثله. آمين.",
        [
          "عمر النبي ﷺ: 25 سنة",
          "عمر خديجة رضي الله عنها: 40 سنة (المشهور)",
          "عاشا معًا 25 سنة",
          "لم يتزوج غيرها في حياتها",
          "أول من آمن به",
          "الذرية: 4 بنات وابنان"
        ],
        [
          ["💼 رحلة التجارة",
           "في الخامسة والعشرين قال أبو طالب (كما في روايات السيرة): «يا ابن أخي، إني رجل فقير فاعمل لنفسك». وكانت خديجة رضي الله عنها من كبار تجار مكة، تدفع مالها في التجارة وتؤتي الربح. فلما سمعت بصدق النبي ﷺ أرسلت مالها للتجارة، فخرج ﷺ إلى الشام ومعه غلامها ميسرة، فربح ربحًا كثيرًا. ولما رجع أخبر الغلام بحاله: ما كان أصدقه وأأمنه، وكيف كان يتعامل مع الباعة في السوق، وظهرت (كما في روايات السيرة) بعض العلامات غير المعتادة في الطريق.",
           "من روايات السيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["💍 خطبة النكاح",
           "أرسلت خديجة رضي الله عنها صاحبتها نفيسة بنت منية لتكلم النبي ﷺ في الزواج. فاستشار ﷺ عمه أبا طالب، فخطب أبو طالب إلى عم خديجة رضي الله عنها، وسُمّي المهر، وعُقد النكاح. وكانت خديجة رضي الله عنها في الأربعين على المشهور (وذكر بعض أهل العلم سنًّا أقل)، والنبي ﷺ في الخامسة والعشرين.",
           "من روايات السيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🤍 رابطة المحبة",
           "لم يكن هذا النكاح رابطة دنيوية فحسب، بل كانت رابطة قلبين. كانت خديجة رضي الله عنها سكن النبي ﷺ. ولما جاء الوحي كانت أول من آمن، وكانت إذا عاداه الناس ثبتته وأعانته بمالها. عاشا معًا خمسًا وعشرين سنة، ولم يتزوج ﷺ غيرها في حياتها (صحيح مسلم: 2436). وكان ﷺ يذكرها بعد وفاتها ويبعث الهدايا إلى صواحباتها. قالت عائشة رضي الله عنها: «ما غرت على امرأة ما غرت على خديجة، وما رأيتها قط».",
           "صحيح مسلم: 2436، 2435؛ صحيح البخاري: 3816"],
          ["👨‍👩‍👧 الذرية",
           "كانت ذرية النبي ﷺ من هذا النكاح: القاسم، وعبد الله (الطيب والطاهر، ويراه بعض أهل السير ابنين آخرين)، وزينب، ورقية، وأم كلثوم، وفاطمة رضي الله عنهن. ووُلد إبراهيم من مارية القبطية رضي الله عنها. وكل أبنائه الذكور توفوا في الصغر، وعاشت بناته الأربع حتى شبّت.",
           ""],
          ["🎯 العبرة",
           "أهمية الرفيق الصالح. ومثل خديجة رضي الله عنها زوجة رُزق بها النبي ﷺ. فعلينا أن نُعلي في علاقاتنا المحبة والوفاء والدين. فالنكاح ليس معاملة دنيوية فقط، بل اختيار رفيق للآخرة.",
           ""]
        ],
        [
          ["من أول زوجات النبي ﷺ؟", ["عائشة", "خديجة", "حفصة"]],
          ["كم كان عمر النبي ﷺ عند النكاح؟", ["20", "25", "30"]],
          ["كم كان عمر خديجة رضي الله عنها عند النكاح على المشهور؟", ["30", "35", "40"]]
        ],
        [
          ["595", "رحلة التجارة إلى الشام"],
          ["595", "زواجه ﷺ بخديجة رضي الله عنها"],
          ["نحو 598", "ولادة ابنته زينب"],
          ["نحو 605", "ولادة ابنته فاطمة"]
        ]
      ],
      fr: [
        "Le mariage avec Khadîja (qu'Allah l'agrée) — la compagne de la sérénité",
        "La Mecque",
        "À vingt-cinq ans, en 595",
        "Comprendre la première épouse du Prophète ﷺ, le voyage commercial et l'histoire de ce mariage béni.",
        "Khadîja (qu'Allah l'agrée), ayant entendu témoigner de la véracité et de la fiabilité du Prophète ﷺ, envoya elle-même la demande. Ce lien n'était pas celui de la richesse, mais du caractère. Ô Allah ! Accorde-nous une compagne vertueuse comme elle. Âmîn.",
        [
          "Âge du Prophète ﷺ : 25 ans",
          "Âge de Khadîja (qu'Allah l'agrée) : 40 ans (avis célèbre)",
          "Ils vécurent vingt-cinq ans ensemble",
          "Il n'épousa aucune autre de son vivant",
          "La première à croire en lui",
          "Descendance : 4 filles et 2 fils"
        ],
        [
          ["💼 Le voyage commercial",
           "À vingt-cinq ans, Abou Tâlib lui dit (selon les récits de Sîra) : « Mon neveu, je suis pauvre, désormais fais quelque chose par toi-même. » Khadîja (qu'Allah l'agrée) était une grande commerçante de La Mecque ; elle plaçait son bien dans le commerce et en tirait profit. Ayant entendu vanter la véracité du Prophète ﷺ, elle lui confia son bien pour commercer. Il partit pour le Châm avec son serviteur Maysara et fit de grands bénéfices. Au retour, le serviteur raconta tout : combien il était honnête et fiable, comment il traitait les vendeurs au marché, et (selon les récits de Sîra) certains signes inhabituels apparurent en chemin.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["💍 La demande en mariage",
           "Khadîja (qu'Allah l'agrée) envoya son amie Nafîsa bint Mounya parler au Prophète ﷺ du mariage. Il ﷺ consulta son oncle Abou Tâlib, qui adressa la demande au oncle de Khadîja (qu'Allah l'agrée), la dot fut fixée et le mariage conclu. Selon l'avis célèbre, Khadîja (qu'Allah l'agrée) avait quarante ans (certains savants donnent un âge moindre), et le Prophète ﷺ vingt-cinq ans.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🤍 Un lien d'amour",
           "Ce mariage ne fut pas seulement un lien terrestre, mais un lien de deux cœurs. Khadîja (qu'Allah l'agrée) était la quiétude du Prophète ﷺ. Quand la révélation vint, elle fut la première à croire ; quand les gens s'opposaient, elle l'affermissait et l'aidait de ses biens. Ils vécurent vingt-cinq ans ensemble, et il ﷺ n'épousa aucune autre de son vivant (Sahih Muslim : 2436). Après sa mort, il ﷺ se souvenait d'elle et envoyait des cadeaux à ses amies. 'Â'icha (qu'Allah l'agrée) dit : « Je n'ai été jalouse d'aucune femme autant que de Khadîja, alors que je ne l'ai jamais vue. »",
           "Sahih Muslim : 2436, 2435 ; Sahih al-Bukhari : 3816"],
          ["👨‍👩‍👧 La descendance",
           "La descendance du Prophète ﷺ vint de ce mariage : al-Qâsim, 'Abdoullah (at-Tayyib et at-Tâhir ; certains historiens de la Sîra en font d'autres fils), Zaynab, Rouqayya, Oumm Koulthoûm et Fâtima (qu'Allah les agrée). Ibrâhîm naquit de Mâriya la Copte (qu'Allah l'agrée). Tous ses fils moururent en bas âge ; ses quatre filles atteignirent l'âge adulte.",
           ""],
          ["🎯 La leçon",
           "L'importance d'un bon compagnon. Une épouse comme Khadîja (qu'Allah l'agrée) fut accordée au Prophète ﷺ lui-même. Nous devons tenir en honneur dans nos relations l'amour, la fidélité et la religion. Le mariage n'est pas qu'une affaire terrestre : c'est choisir un compagnon pour l'au-delà.",
           ""]
        ],
        [
          ["Qui fut la première épouse du Prophète ﷺ ?", ["'Â'icha", "Khadîja", "Hafsa"]],
          ["Quel âge avait le Prophète ﷺ lors du mariage ?", ["20", "25", "30"]],
          ["Quel âge avait Khadîja (qu'Allah l'agrée) lors du mariage, selon l'avis célèbre ?", ["30", "35", "40"]]
        ],
        [
          ["595", "Voyage commercial au Châm"],
          ["595", "Mariage avec Khadîja (qu'Allah l'agrée)"],
          ["~598", "Naissance de sa fille Zaynab"],
          ["~605", "Naissance de sa fille Fâtima"]
        ]
      ],
      es: [
        "El matrimonio con Jadiya (que Alá esté complacido con ella): la compañera de la serenidad",
        "La Meca",
        "A los veinticinco años, en 595",
        "Comprender a la primera esposa del Profeta ﷺ, el viaje comercial y la historia de este matrimonio bendito.",
        "Jadiya (que Alá esté complacido con ella), al oír el testimonio de la veracidad y confiabilidad del Profeta ﷺ, envió ella misma la petición de matrimonio. Este lazo no era de riqueza, sino de carácter. ¡Oh Alá! Concédenos una compañera virtuosa como ella. Amín.",
        [
          "Edad del Profeta ﷺ: 25 años",
          "Edad de Jadiya (que Alá esté complacido con ella): 40 años (opinión famosa)",
          "Vivieron juntos veinticinco años",
          "No se casó con otra en vida de ella",
          "La primera en creer en él",
          "Descendencia: 4 hijas y 2 hijos"
        ],
        [
          ["💼 El viaje comercial",
           "A los veinticinco años, Abu Talib le dijo (según los relatos de la Sira): «Sobrino, yo soy pobre; ahora haz algo por ti mismo.» Jadiya (que Alá esté complacido con ella) era una gran comerciante de La Meca; invertía su bien en el comercio y obtenía ganancia. Al oír alabar la veracidad del Profeta ﷺ, le confió su bien para comerciar. Él fue al Sham con su siervo Maysara y obtuvo grandes beneficios. A la vuelta, el siervo contó todo: cuán honesto y confiable era, cómo trataba a los vendedores en el mercado y (según los relatos de la Sira) algunas señales poco comunes que se vieron en el camino.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["💍 La petición de matrimonio",
           "Jadiya (que Alá esté complacido con ella) envió a su amiga Nafisa bint Munya para hablar con el Profeta ﷺ sobre el matrimonio. Él ﷺ consultó a su tío Abu Talib, quien dirigió la petición al tío de Jadiya (que Alá esté complacido con ella), se fijó la dote y se concluyó el matrimonio. Según la opinión famosa, Jadiya (que Alá esté complacido con ella) tenía cuarenta años (algunos sabios dan una edad menor), y el Profeta ﷺ veinticinco.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🤍 Un lazo de amor",
           "Este matrimonio no fue solo un lazo terrenal, sino un lazo de dos corazones. Jadiya (que Alá esté complacido con ella) era la quietud del Profeta ﷺ. Cuando llegó la revelación, fue la primera en creer; cuando la gente se oponía, ella lo afianzaba y lo ayudaba con sus bienes. Vivieron juntos veinticinco años, y él ﷺ no se casó con otra en vida de ella (Sahih Muslim: 2436). Tras su muerte, el Profeta ﷺ la recordaba y enviaba regalos a sus amigas. Aisha (que Alá esté complacido con ella) dijo: «No he tenido celos de ninguna mujer como los tuve de Jadiya, aunque nunca la vi.»",
           "Sahih Muslim: 2436, 2435; Sahih al-Bujari: 3816"],
          ["👨‍👩‍👧 La descendencia",
           "La descendencia del Profeta ﷺ vino de este matrimonio: al-Qasim, Abdalah (at-Tayyib y at-Tahir; algunos historiadores de la Sira los consideran otros hijos), Zaynab, Ruqayya, Umm Kulzum y Fatima (que Alá esté complacido con ellas). Ibrahim nació de Maria la Copta (que Alá esté complacido con ella). Todos sus hijos varones murieron pequeños; sus cuatro hijas llegaron a la edad adulta.",
           ""],
          ["🎯 La lección",
           "La importancia de una buena compañera. Una esposa como Jadiya (que Alá esté complacido con ella) le fue concedida al propio Profeta ﷺ. Debemos honrar en nuestras relaciones el amor, la fidelidad y la religión. El matrimonio no es solo un asunto terrenal: es elegir un compañero para el más allá.",
           ""]
        ],
        [
          ["¿Quién fue la primera esposa del Profeta ﷺ?", ["Aisha", "Jadiya", "Hafsa"]],
          ["¿Qué edad tenía el Profeta ﷺ al casarse?", ["20", "25", "30"]],
          ["¿Qué edad tenía Jadiya (que Alá esté complacido con ella) al casarse, según la opinión famosa?", ["30", "35", "40"]]
        ],
        [
          ["595", "Viaje comercial al Sham"],
          ["595", "Matrimonio con Jadiya (que Alá esté complacido con ella)"],
          ["~598", "Nacimiento de su hija Zaynab"],
          ["~605", "Nacimiento de su hija Fatima"]
        ]
      ]
    }

  }
};
