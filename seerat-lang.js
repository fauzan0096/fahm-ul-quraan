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
    }

  }
};
