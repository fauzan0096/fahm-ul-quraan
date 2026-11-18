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
    },

    /* ═══════════════ DAY 5 — Pehli wahi (Ghar-e-Hira) ═══════════════ */
    5: {
      mr: [
        "पहिली वही — हिरा गुहा",
        "हिरा गुहा, नूर पर्वत",
        "वय वर्षे ४०, इ.स. ६१०",
        "नबी ﷺ यांचा एकांत, पहिल्या वहीची घटना आणि वहीची सुरुवात समजून घेणे.",
        "पहिल्या वहीच्या वेळी नबी ﷺ थरथरत होते आणि खदीजा (र.अ.) यांनी सांत्वना दिली — हे प्रेम आणि विश्वासाचे नाते होते. हे अल्लाह! आम्हालाही कुरआनवर तसेच प्रेम दे जसे नबी ﷺ यांना होते. आमीन.",
        [
          "वय: ४० वर्षे",
          "ठिकाण: हिरा गुहा",
          "पहिली आयत: اقْرَأْ",
          "पहिली ईमान आणणारी: खदीजा (र.अ.)",
          "वरका बिन नौफल यांनी पुष्टी केली",
          "वहीचा खंड, नंतर पुन्हा सुरुवात"
        ],
        [
          ["🌙 एकांताची सवय",
           "वय वर्षे ३५-४० दरम्यान नबी ﷺ यांना एकांत आवडू लागला. मक्केपासून दूर नूर पर्वतावरील हिरा गुहेत जात, अनेक दिवस राहत, अल्लाहची उपासना करत आणि विचार करत. आप ﷺ यांना खरे स्वप्न पडत, जे पहाटेच्या प्रकाशासारखे खरे ठरत. ही नबुव्वतच्या पहाटेची सुरुवात होती.",
           "सहीह बुखारी: ३; सहीह मुस्लिम: १६०"],
          ["📖 पहिली वही",
           "वय वर्षे ४०, रमजानचा महिना, एके दिवशी गुहेत जिब्राईल (अ.स.) आले. ते म्हणाले: «اِقْرَأْ» (वाच). नबी ﷺ म्हणाले: «मी वाचणारा नाही.» देवदूताने जोरात कवटाळले, नंतर सोडले आणि म्हणाले: «اقْرَأْ». असे तीन वेळा झाले. नंतर देवदूताने वाचले: «اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ» — (तुझ्या रबच्या नावाने वाच ज्याने निर्माण केले, माणसाला रक्ताच्या गुठळीतून निर्माण केले. वाच, आणि तुझा रब मोठा करमाळू आहे, ज्याने लेखणीने शिकवले, माणसाला ते शिकवले जे त्याला माहीत नव्हते).",
           "सहीह बुखारी: ३; सहीह मुस्लिम: १६०; कुरआन: ९६:१-५"],
          ["😰 भीती आणि अस्वस्थता",
           "नबी ﷺ थरथरत घरी आले आणि हजरत खदीजा (र.अ.) यांना म्हणाले: «मला पांघरून घ्या, मला पांघरून घ्या» (زَمِّلُوْنِي زَمِّلُوْنِي). हजरत खदीजा (र.अ.) यांनी घोंगडी पांघरली. नंतर सर्व घटना सांगितली. हजरत खदीजा (र.अ.) म्हणाल्या: «अल्लाहची शपथ, अल्लाह तुम्हाला कधीही अपमानित करणार नाही. तुम्ही तर नाती जोडणारे, दुसऱ्यांचे ओझे उचलणारे, आधार नसलेल्यांचा आधार, पाहुण्यांचा मान करणारे आणि सत्याची मदत करणारे आहात.» ही सांत्वना एका पर्वताइतकी होती.",
           "सहीह बुखारी: ३; सहीह मुस्लिम: १६०"],
          ["👨‍🏫 वरका बिन नौफल",
           "हजरत खदीजा (र.अ.) नबी ﷺ यांना वरका बिन नौफल यांच्याकडे घेऊन गेल्या, जे ख्रिश्चन विद्वान होते आणि इंजील वाचत. त्यांनी ऐकले आणि म्हणाले: «हाच तो नामूस (जिब्राईल अ.स.) आहे जो हजरत मूसा (अ.स.) यांच्याकडे येत असे. मी तरुण असतो तर! तुमचे लोक तुम्हाला काढून टाकतील त्या वेळी मी जिवंत असतो तर!» थोड्या दिवसांनी वरकांचे निधन झाले.",
           "सहीह बुखारी: ३; सहीह मुस्लिम: १६०"],
          ["💔 वहीचा खंड",
           "पहिल्या वह्यीनंतर काही काळ वही थांबली (फतरतुल-वही); तिच्या कालावधीबद्दल सीरतकारांत मतभेद आहे. नबी ﷺ अस्वस्थ राहिले आणि वहीची वाट पाहत राहिले. नंतर एके दिवशी आप ﷺ यांनी आकाश व धरतीच्या दरम्यान तोच देवदूत आसनावर बसलेला पाहिला; आप ﷺ घाबरून घरी आले आणि म्हणाले: «मला चादर पांघरून घ्या» (सहीह बुखारी). तेव्हा या आयती उतरल्या: «يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ ۝ وَرَبَّكَ فَكَبِّرْ» — (हे चादर ओढणाऱ्या! उठ आणि भय दाखव, आणि आपल्या रबची मोठी स्तुती कर) — सूरह अल-मुद्दस्सिर ७४:१-३. अशा प्रकारे वहीची मालिका पुन्हा सुरू झाली.",
           "सहीह बुखारी: ४, ४९२२; सहीह मुस्लिम: १६१; कुरआन: ७४:१-३"],
          ["🎯 बोध",
           "अल्लाहने आपल्या हबीबाला एकांतात बोलावले, कारण जगाच्या गोंगाटापासून दूर मन स्वच्छ होते. वहीची सुरुवात «اقْرَأْ» ने झाली — वाच. हे दाखवते की ज्ञानाचे महत्त्व किती आहे. आपण अभ्यासाला उपासना मानले पाहिजे आणि एकांतात अल्लाहशी मनमोकळे बोलले पाहिजे.",
           ""]
        ],
        [
          ["पहिली वही कुठे आली?", ["सौर गुहा", "हिरा गुहा", "उहुद पर्वत"]],
          ["पहिली आयत कोणती?", ["اقْرَأْ", "قُلْ", "سَبِّحْ"]],
          ["पहिली ईमान आणणारी कोण?", ["आयशा", "खदीजा", "फातिमा"]]
        ],
        [
          ["इ.स. ६१०", "पहिली वही — اقْرَأْ"],
          ["इ.स. ६१०", "वरका बिन नौफल यांची पुष्टी"],
          ["इ.स. ६१०", "वहीचा खंड"],
          ["इ.स. ६१०", "सूरह अल-मुद्दस्सिरपासून वही पुन्हा"]
        ]
      ],
      ar: [
        "أول الوحي — غار حراء",
        "غار حراء، جبل النور",
        "في الأربعين، سنة 610 م",
        "فهم خلوة النبي ﷺ، وقصة أول الوحي، وبداية نزول الوحي.",
        "كان النبي ﷺ يرتجف عند أول الوحي، فثبّتته خديجة رضي الله عنها — وكان ذلك رابط محبة وثقة. اللهم ارزقنا حب القرآن كما كان حب النبي ﷺ له. آمين.",
        [
          "العمر: 40 سنة",
          "المكان: غار حراء",
          "أول آية: اقْرَأْ",
          "أول من آمن: خديجة رضي الله عنها",
          "ورقة بن نوفل صدّقه",
          "توقف الوحي ثم عاد"
        ],
        [
          ["🌙 عادة الخلوة",
           "بين الخامسة والثلاثين والأربعين حُبّبت إليه ﷺ الخلوة، فكان يذهب إلى غار حراء بجبل النور بعيدًا عن مكة، ويقيم فيه أيامًا يعبد الله ويتفكر. وكان يرى الرؤيا الصادقة فتجيء مثل فلق الصبح. وكان ذلك بداية صباح النبوة.",
           "صحيح البخاري: 3؛ صحيح مسلم: 160"],
          ["📖 أول الوحي",
           "في الأربعين من عمره، في شهر رمضان، جاءه جبريل عليه السلام في الغار يومًا فقال: «اِقْرَأْ». قال ﷺ: «ما أنا بقارئ». فغتّه الملك، ثم أرسله، فقال: «اقْرَأْ». ثلاث مرات. ثم قرأ: «اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ».",
           "صحيح البخاري: 3؛ صحيح مسلم: 160؛ القرآن: 96:1-5"],
          ["😰 الخوف والاضطراب",
           "رجع ﷺ إلى البيت يرتجف فقال لخديجة رضي الله عنها: «زمّلوني، زمّلوني». فزمّلته، ثم أخبرها بالخبر. فقالت: «والله لا يخزيك الله أبدًا؛ إنك لتصل الرحم، وتحمل الكَلّ، وتكسب المعدوم، وتقري الضيف، وتعين على نوائب الحق». وكانت هذه التسلية كالجبل.",
           "صحيح البخاري: 3؛ صحيح مسلم: 160"],
          ["👨‍🏫 ورقة بن نوفل",
           "ذهبت به خديجة رضي الله عنها إلى ورقة بن نوفل، وكان نصرانيًّا يقرأ الإنجيل. فلما سمع قال: «هذا الناموس الذي نزل على موسى عليه السلام. يا ليتني كنت جذعًا، ليتني أكون حيًّا حين يخرجك قومك». ثم توفي ورقة بعد أيام.",
           "صحيح البخاري: 3؛ صحيح مسلم: 160"],
          ["💔 فترة الوحي",
           "بعد الوحي الأول توقف الوحي مدة (فترة الوحي)، وفي مدتها خلاف بين أهل السير. فبقي ﷺ قلقًا ينتظر الوحي. ثم رأى يومًا ذلك الملك جالسًا على كرسي بين السماء والأرض، فرجع إلى بيته يرتجف فقال: «دثّروني» (صحيح البخاري). فنزلت: «يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ ۝ وَرَبَّكَ فَكَبِّرْ» — سورة المدثر 74:1-3. وهكذا عاد الوحي.",
           "صحيح البخاري: 4، 4922؛ صحيح مسلم: 161؛ القرآن: 74:1-3"],
          ["🎯 العبرة",
           "دعا الله حبيبه إلى الخلوة، لأن القلب يصفو بعيدًا عن ضجيج الدنيا. وقد بدأ الوحي بـ«اقْرَأْ» — اقرأ — وهذا يدل على عظيم شأن العلم. فعلينا أن نعدّ طلب العلم عبادة، وأن نناجي الله في الخلوة.",
           ""]
        ],
        [
          ["أين نزل أول الوحي؟", ["غار ثور", "غار حراء", "جبل أحد"]],
          ["ما أول آية نزلت؟", ["اقْرَأْ", "قُلْ", "سَبِّحْ"]],
          ["من أول من آمن؟", ["عائشة", "خديجة", "فاطمة"]]
        ],
        [
          ["610", "أول الوحي — اقْرَأْ"],
          ["610", "تصديق ورقة بن نوفل"],
          ["610", "فترة الوحي"],
          ["610", "عود الوحي بسورة المدثر"]
        ]
      ],
      fr: [
        "La première révélation — la grotte de Hirâ'",
        "La grotte de Hirâ', mont Nour",
        "À quarante ans, en 610",
        "Comprendre la retraite du Prophète ﷺ, l'épisode de la première révélation et le début de la révélation.",
        "Au moment de la première révélation, le Prophète ﷺ tremblait et Khadîja (qu'Allah l'agrée) le rassura : c'était un lien d'amour et de confiance. Ô Allah ! Accorde-nous pour le Coran un amour semblable à celui du Prophète ﷺ. Âmîn.",
        [
          "Âge : 40 ans",
          "Lieu : la grotte de Hirâ'",
          "Premier verset : اقْرَأْ",
          "La première à croire : Khadîja (qu'Allah l'agrée)",
          "Waraqa ibn Nawfal le confirma",
          "Interruption de la révélation, puis reprise"
        ],
        [
          ["🌙 L'habitude de la retraite",
           "Entre trente-cinq et quarante ans, la solitude devint chère au Prophète ﷺ. Il se rendait à la grotte de Hirâ', sur le mont Nour, loin de La Mecque, y demeurait plusieurs jours, adorait Allah et méditait. Il avait des rêves véridiques qui se réalisaient comme la lumière de l'aube. Ce fut le début de l'aube de la prophétie.",
           "Sahih al-Bukhari : 3 ; Sahih Muslim : 160"],
          ["📖 La première révélation",
           "À quarante ans, au mois de Ramadan, Jibrîl (paix sur lui) vint un jour dans la grotte. Il dit : « اِقْرَأْ » (Lis). Le Prophète ﷺ répondit : « Je ne sais pas lire. » L'ange le serra fort, puis le relâcha et dit : « Lis. » Cela se produisit trois fois. Puis l'ange récita : « اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ » — Lis au nom de ton Seigneur qui a créé, qui a créé l'homme d'un caillot de sang. Lis ! Ton Seigneur est le Très Noble, qui a enseigné par la plume, a enseigné à l'homme ce qu'il ne savait pas.",
           "Sahih al-Bukhari : 3 ; Sahih Muslim : 160 ; Coran : 96:1-5"],
          ["😰 La peur et le trouble",
           "Le Prophète ﷺ rentra chez lui en tremblant et dit à Khadîja (qu'Allah l'agrée) : « Enveloppez-moi, enveloppez-moi » (زَمِّلُوْنِي زَمِّلُوْنِي). Elle le couvrit d'un manteau, puis il raconta tout. Elle dit : « Par Allah, Allah ne t'avilira jamais. Tu maintiens les liens de parenté, tu portes le fardeau des autres, tu secours les démunis, tu honores l'hôte et tu aides la vérité. » Cette consolation valait une montagne.",
           "Sahih al-Bukhari : 3 ; Sahih Muslim : 160"],
          ["👨‍🏫 Waraqa ibn Nawfal",
           "Khadîja (qu'Allah l'agrée) le mena chez Waraqa ibn Nawfal, un savant chrétien qui lisait l'Évangile. Ayant entendu, il dit : « C'est le Nâmous (Jibrîl) qui descendait sur Mûsâ (paix sur lui). Que ne suis-je jeune ! Que ne serais-je vivant quand ton peuple te fera sortir ! » Peu de jours après, Waraqa mourut.",
           "Sahih al-Bukhari : 3 ; Sahih Muslim : 160"],
          ["💔 L'interruption de la révélation",
           "Après la première révélation, celle-ci s'interrompit un temps (fatrat al-wahy) ; les historiens de la Sîra divergent sur sa durée. Le Prophète ﷺ resta inquiet, attendant la révélation. Puis un jour il ﷺ vit ce même ange assis sur un trône entre le ciel et la terre ; il rentra chez lui effrayé et dit : « Couvrez-moi d'un manteau » (Sahih al-Bukhari). Alors descendirent ces versets : « يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ ۝ وَرَبَّكَ فَكَبِّرْ » — sourate al-Mouddaththir 74:1-3 : Ô toi qui es enveloppé ! Lève-toi et avertis, et proclame la grandeur de ton Seigneur. Ainsi la révélation reprit.",
           "Sahih al-Bukhari : 4, 4922 ; Sahih Muslim : 161 ; Coran : 74:1-3"],
          ["🎯 La leçon",
           "Allah appela Son bien-aimé dans la solitude, car loin du bruit du monde le cœur s'épure. La révélation commença par « اقْرَأْ » — Lis. Cela montre l'importance du savoir. Nous devons considérer l'étude comme une adoration et converser avec Allah dans la solitude.",
           ""]
        ],
        [
          ["Où vint la première révélation ?", ["La grotte de Thawr", "La grotte de Hirâ'", "Le mont Ouhoud"]],
          ["Quel est le premier verset ?", ["اقْرَأْ", "قُلْ", "سَبِّحْ"]],
          ["Qui fut la première à croire ?", ["'Â'icha", "Khadîja", "Fâtima"]]
        ],
        [
          ["610", "La première révélation — اقْرَأْ"],
          ["610", "La confirmation de Waraqa ibn Nawfal"],
          ["610", "L'interruption de la révélation"],
          ["610", "Reprise de la révélation par sourate al-Mouddaththir"]
        ]
      ],
      es: [
        "La primera revelación: la cueva de Hira",
        "La cueva de Hira, monte Nur",
        "A los cuarenta años, en 610",
        "Comprender el retiro del Profeta ﷺ, el episodio de la primera revelación y el comienzo de la revelación.",
        "En el momento de la primera revelación el Profeta ﷺ temblaba y Jadiya (que Alá esté complacido con ella) lo tranquilizó: era un lazo de amor y confianza. ¡Oh Alá! Concédenos por el Corán un amor como el que tenía el Profeta ﷺ. Amín.",
        [
          "Edad: 40 años",
          "Lugar: la cueva de Hira",
          "Primera aleya: اقْرَأْ",
          "La primera en creer: Jadiya (que Alá esté complacido con ella)",
          "Waraqa ibn Nawfal lo confirmó",
          "Interrupción de la revelación y luego reanudación"
        ],
        [
          ["🌙 La costumbre del retiro",
           "Entre los treinta y cinco y los cuarenta años, la soledad se volvió querida para el Profeta ﷺ. Iba a la cueva de Hira, en el monte Nur, lejos de La Meca, permanecía allí varios días, adoraba a Alá y meditaba. Tenía sueños veraces que se cumplían como la luz del alba. Fue el comienzo del alba de la profecía.",
           "Sahih al-Bujari: 3; Sahih Muslim: 160"],
          ["📖 La primera revelación",
           "A los cuarenta años, en el mes de Ramadán, Yibril (la paz sea con él) vino un día a la cueva. Dijo: «اِقْرَأْ» (Lee). El Profeta ﷺ respondió: «No sé leer.» El ángel lo apretó con fuerza, luego lo soltó y dijo: «Lee.» Esto ocurrió tres veces. Después el ángel recitó: «اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ» — Lee en el nombre de tu Señor que creó, que creó al hombre de un coágulo. ¡Lee! Tu Señor es el Más Generoso, que enseñó con la pluma, enseñó al hombre lo que no sabía.",
           "Sahih al-Bujari: 3; Sahih Muslim: 160; Corán: 96:1-5"],
          ["😰 El miedo y la inquietud",
           "El Profeta ﷺ llegó a casa temblando y dijo a Jadiya (que Alá esté complacido con ella): «Cubridme, cubridme» (زَمِّلُوْنِي زَمِّلُوْنِي). Ella lo cubrió con un manto y luego él contó todo. Ella dijo: «Por Alá, Alá nunca te humillará. Tú mantienes los lazos familiares, cargas con el peso de otros, socorres a los desamparados, honras al huésped y ayudas a la verdad.» Ese consuelo valía una montaña.",
           "Sahih al-Bujari: 3; Sahih Muslim: 160"],
          ["👨‍🏫 Waraqa ibn Nawfal",
           "Jadiya (que Alá esté complacido con ella) lo llevó a Waraqa ibn Nawfal, un sabio cristiano que leía el Evangelio. Al oírlo dijo: «Este es el Namus (Yibril) que descendía sobre Musa (la paz sea con él). ¡Ojalá fuera joven! ¡Ojalá estuviera vivo cuando tu pueblo te expulse!» Pocos días después, Waraqa falleció.",
           "Sahih al-Bujari: 3; Sahih Muslim: 160"],
          ["💔 La interrupción de la revelación",
           "Tras la primera revelación, esta se interrumpió un tiempo (fatrat al-wahy); los historiadores de la Sira discrepan sobre su duración. El Profeta ﷺ quedó inquieto esperando la revelación. Luego, un día, vio ﷺ a ese mismo ángel sentado en un trono entre el cielo y la tierra; volvió a casa asustado y dijo: «Cubridme con un manto» (Sahih al-Bujari). Entonces descendieron estas aleyas: «يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ ۝ وَرَبَّكَ فَكَبِّرْ» — sura al-Muddazzir 74:1-3: ¡Oh tú, envuelto! Levántate y advierte, y proclama la grandeza de tu Señor. Así se reanudó la revelación.",
           "Sahih al-Bujari: 4, 4922; Sahih Muslim: 161; Corán: 74:1-3"],
          ["🎯 La lección",
           "Alá llamó a Su amado a la soledad, porque lejos del ruido del mundo el corazón se purifica. La revelación comenzó con «اقْرَأْ»: Lee. Esto muestra la importancia del conocimiento. Debemos considerar el estudio como adoración y conversar con Alá en la soledad.",
           ""]
        ],
        [
          ["¿Dónde vino la primera revelación?", ["La cueva de Zawr", "La cueva de Hira", "El monte Uhud"]],
          ["¿Cuál es la primera aleya?", ["اقْرَأْ", "قُلْ", "سَبِّحْ"]],
          ["¿Quién fue la primera en creer?", ["Aisha", "Jadiya", "Fatima"]]
        ],
        [
          ["610", "La primera revelación: اقْرَأْ"],
          ["610", "La confirmación de Waraqa ibn Nawfal"],
          ["610", "La interrupción de la revelación"],
          ["610", "Reanudación de la revelación con la sura al-Muddazzir"]
        ]
      ]
    },

    /* ═══════════════ DAY 6 — Da'wat-e-khufiya ═══════════════ */
    6: {
      mr: [
        "गुप्त दावत — लपून प्रचार",
        "मक्का, दारुल-अरकम",
        "इ.स. ६१०-६१३",
        "नबुव्वतच्या सुरुवातीच्या ३ वर्षांची गुप्त दावत आणि पहिल्या मुस्लिमांचे चारित्र्य समजून घेणे.",
        "हजरत अबू बक्र (र.अ.) यांच्या दावतीमुळे अनेक मोठे सहाबा ईमान आणले. हेच प्रशिक्षण होते, हाच परिणाम होता. हे अल्लाह! आम्हालाही दावतीची तौफीक दे. आमीन.",
        [
          "३ वर्षांची गुप्त दावत",
          "पहिला पुरुष: अबू बक्र (र.अ.)",
          "पहिले बालक: अली (र.अ.)",
          "पहिला गुलाम: झैद (र.अ.)",
          "पहिली स्त्री: खदीजा (र.अ.)",
          "सुमारे ४० मुस्लिम"
        ],
        [
          ["🎯 शहाणपणाने सुरुवात",
           "सुरुवातीची सुमारे तीन वर्षे दावत गुप्त राहिली. का? कारण विरोधाचा धोका होता आणि नव्या ईमानवाल्यांना प्रशिक्षणाची गरज होती. नबी ﷺ यांनी एक एकाला बोलावले आणि संयमाने समजावले.",
           ""],
          ["👥 पहिले मुस्लिम",
           "पहिला पुरुष: हजरत अबू बक्र (र.अ.). पहिले बालक: हजरत अली (र.अ.) (वय १०). पहिला गुलाम: हजरत झैद बिन हारिसा (र.अ.). पहिली स्त्री: हजरत खदीजा (र.अ.). हजरत अबू बक्र (र.अ.) यांनी आपल्या मित्रांना बोलावले: उस्मान (र.अ.), झुबैर (र.अ.), अब्दुर्रहमान बिन औफ (र.अ.), साद बिन अबी वक्कास (र.अ.) आणि तल्हा (र.अ.) — हे पाचही पुढे «अशरा-ए-मुबश्शरा» मध्ये सामील झाले. तीन वर्षांत सुमारे ४० लोक ईमान आणले.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🏠 दारुल-अरकम",
           "हजरत अरकम बिन अबिल-अरकम (र.अ.) यांचे घर, सफा टेकडीजवळ, नबी ﷺ यांचे गुप्त केंद्र बनले. इथे लोक येत, कुरआन ऐकत आणि नबी ﷺ यांची शिकवण शिकत. ही पहिली इस्लामी मदरसा होती.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🕌 नमाज़ची सुरुवात",
           "सुरुवातीला सकाळी व संध्याकाळी दोन दोन रकअत नमाज़ पढली जात असे (पाच नमाजा नंतर मेराजच्या रात्री फर्ज झाल्या). हजरत खदीजा (र.अ.), हजरत अली (र.अ.) आणि हजरत अबू बक्र (र.अ.) सर्व पढत. सीरतच्या पुस्तकांत येते की एके दिवशी अबू तालिब यांनी पाहिले की नबी ﷺ आणि अली (र.अ.) नमाज़ पढत आहेत, तेव्हा ते म्हणाले: «बाळा, हे काय आहे?» नबी ﷺ म्हणाले: «हे अल्लाहचे दीन आहे, जे मी घेऊन आलो आहे.» अबू तालिब म्हणाले: «मी तुम्हाला मदत करीन, पण मी माझ्या वडिलांचा-आजोबांचा दीन सोडू शकत नाही.»",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (या घटनेच्या सनदेवर चर्चा आहे)"],
          ["🌱 प्रशिक्षणाचे महत्त्व",
           "ही तीन वर्षे ईमानाच्या प्रशिक्षणाची होती. सहाबांनी कुरआनच्या आयती शिकल्या, नबी ﷺ यांचे चारित्र्य पाहिले आणि मने मजबूत केली. जेव्हा खुली दावत सुरू झाली, तेव्हा हा मजबूत पाया कामी आला.",
           ""],
          ["🎯 बोध",
           "शहाणपणाने काम करणे. प्रत्येक काम आपल्या वेळी, आपल्या क्रमाने. दावत देताना घाई करू नये; आधी मन तयार करावे, नंतर बोलावे.",
           ""]
        ],
        [
          ["गुप्त दावत किती वर्षे राहिली?", ["२", "३", "५"]],
          ["पहिला पुरुष मुस्लिम कोण?", ["उमर", "अबू बक्र", "उस्मान"]],
          ["गुप्त केंद्राचे नाव काय?", ["दारुल-अरकम", "मस्जिदे-नबवी", "गुहा"]]
        ],
        [
          ["इ.स. ६१०", "हजरत खदीजा (र.अ.) व अली (र.अ.) यांचा इस्लाम"],
          ["इ.स. ६१०", "हजरत अबू बक्र (र.अ.) यांचा इस्लाम"],
          ["इ.स. सु. ६११", "दारुल-अरकमची स्थापना"],
          ["इ.स. ६१३", "गुप्त दावतीची समाप्ती"]
        ]
      ],
      ar: [
        "الدعوة السرية — التبليغ خفية",
        "مكة، دار الأرقم",
        "610-613 م",
        "فهم الدعوة السرية في السنوات الثلاث الأولى من النبوة، وخلق المسلمين الأوائل.",
        "بدعوة أبي بكر رضي الله عنه أسلم كبار الصحابة رضي الله عنهم. تلك كانت التربية، وذلك كان الأثر. اللهم وفقنا للدعوة إليك. آمين.",
        [
          "ثلاث سنين من الدعوة السرية",
          "أول الرجال: أبو بكر رضي الله عنه",
          "أول الصبيان: علي رضي الله عنه",
          "أول الموالي: زيد رضي الله عنه",
          "أول النساء: خديجة رضي الله عنها",
          "نحو أربعين مسلمًا"
        ],
        [
          ["🎯 بداية بحكمة",
           "بقيت الدعوة سرًّا نحو ثلاث سنين. لماذا؟ لخطر المعارضة، ولحاجة المؤمنين الجدد إلى التربية. فكان ﷺ يدعو واحدًا واحدًا ويشرح لهم بصبر.",
           ""],
          ["👥 أوائل المسلمين",
           "أول الرجال: أبو بكر رضي الله عنه. وأول الصبيان: علي رضي الله عنه (ابن عشر). وأول الموالي: زيد بن حارثة رضي الله عنه. وأول النساء: خديجة رضي الله عنها. ودعا أبو بكر رضي الله عنه أصحابه: عثمان والزبير وعبد الرحمن بن عوف وسعد بن أبي وقاص وطلحة رضي الله عنهم — وهؤلاء الخمسة من «العشرة المبشرين بالجنة». وأسلم في ثلاث سنين نحو أربعين رجلًا.",
           "من روايات السيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🏠 دار الأرقم",
           "صار بيت الأرقم بن أبي الأرقم رضي الله عنه، قريبًا من جبل الصفا، مركز النبي ﷺ السري. يأتيه الناس فيسمعون القرآن ويتعلمون تعاليم النبي ﷺ. وكان أول مدرسة إسلامية.",
           "من روايات السيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🕌 بداية الصلاة",
           "كانوا يصلّون في البداية ركعتين صباحًا وركعتين مساءً (والصلوات الخمس فُرضت بعد ذلك ليلة المعراج). وكانت خديجة وعلي وأبو بكر رضي الله عنهم يصلّون. وجاء في كتب السيرة أن أبا طالب رأى يومًا النبي ﷺ وعليًّا يصليان فقال: «يا ابن أخي، ما هذا؟» فقال ﷺ: «هذا دين الله الذي جئت به». فقال أبو طالب: «إني سأنصرك، ولكن لا أستطيع أن أترك دين آبائي».",
           "من روايات السيرة — سيرة ابن هشام / الرحيق المختوم (وفي إسناد هذه القصة كلام)"],
          ["🌱 أهمية التربية",
           "كانت هذه الثلاث سنين تربيةً للإيمان. تعلّم الصحابة آيات القرآن، ورأوا خلق النبي ﷺ، وقوّوا قلوبهم. فلما بدأت الدعوة العلنية كان هذا الأساس المتين هو العماد.",
           ""],
          ["🎯 العبرة",
           "العمل بالحكمة. فكل عمل في وقته وترتيبه. فلا نستعجل في الدعوة، بل نُهيّئ القلوب أولًا ثم نتكلم.",
           ""]
        ],
        [
          ["كم سنة استمرت الدعوة السرية؟", ["2", "3", "5"]],
          ["من أول الرجال إسلامًا؟", ["عمر", "أبو بكر", "عثمان"]],
          ["ما اسم المركز السري؟", ["دار الأرقم", "المسجد النبوي", "الغار"]]
        ],
        [
          ["610", "إسلام خديجة وعلي رضي الله عنهما"],
          ["610", "إسلام أبي بكر رضي الله عنه"],
          ["نحو 611", "قيام دار الأرقم"],
          ["613", "انتهاء الدعوة السرية"]
        ]
      ],
      fr: [
        "La prédication secrète — appeler en secret",
        "La Mecque, la maison d'al-Arqam",
        "610-613",
        "Comprendre la prédication secrète des trois premières années de la prophétie et le caractère des premiers musulmans.",
        "Par la prédication d'Abou Bakr (qu'Allah l'agrée), de grands Compagnons embrassèrent l'islam. Telle était la formation, tel fut l'effet. Ô Allah ! Accorde-nous d'appeler vers Toi. Âmîn.",
        [
          "Trois ans de prédication secrète",
          "Premier homme : Abou Bakr (qu'Allah l'agrée)",
          "Premier enfant : 'Alî (qu'Allah l'agrée)",
          "Premier affranchi : Zayd (qu'Allah l'agrée)",
          "Première femme : Khadîja (qu'Allah l'agrée)",
          "Environ quarante musulmans"
        ],
        [
          ["🎯 Un début plein de sagesse",
           "La prédication resta secrète environ trois ans. Pourquoi ? En raison du danger de l'opposition et du besoin de formation des nouveaux croyants. Le Prophète ﷺ appelait chacun individuellement et expliquait avec patience.",
           ""],
          ["👥 Les premiers musulmans",
           "Premier homme : Abou Bakr (qu'Allah l'agrée). Premier enfant : 'Alî (qu'Allah l'agrée), âgé de dix ans. Premier affranchi : Zayd ibn Hâritha (qu'Allah l'agrée). Première femme : Khadîja (qu'Allah l'agrée). Abou Bakr (qu'Allah l'agrée) appela ses amis : 'Uthmân, az-Zubayr, 'Abd ar-Rahmân ibn 'Awf, Sa'd ibn Abî Waqqâs et Talha (qu'Allah les agrée) — ces cinq font partie des « dix annoncés au Paradis ». En trois ans, environ quarante personnes embrassèrent l'islam.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🏠 La maison d'al-Arqam",
           "La maison d'al-Arqam ibn Abî al-Arqam (qu'Allah l'agrée), près de la colline de Safâ, devint le centre secret du Prophète ﷺ. On y venait écouter le Coran et apprendre l'enseignement du Prophète ﷺ. Ce fut la première école islamique.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🕌 Le début de la prière",
           "Au début, on priait deux rak'ahs le matin et deux le soir (les cinq prières furent rendues obligatoires plus tard, la nuit du Mi'râj). Khadîja, 'Alî et Abou Bakr (qu'Allah les agrée) priaient. Les livres de Sîra rapportent qu'un jour Abou Tâlib vit le Prophète ﷺ et 'Alî prier et dit : « Mon neveu, qu'est-ce que c'est ? » Il ﷺ dit : « C'est la religion d'Allah que j'ai apportée. » Abou Tâlib dit : « Je t'aiderai, mais je ne peux pas abandonner la religion de mes pères. »",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (la chaîne de cet épisode est discutée)"],
          ["🌱 L'importance de la formation",
           "Ces trois années furent une formation à la foi. Les Compagnons apprirent les versets du Coran, observèrent le caractère du Prophète ﷺ et fortifièrent leurs cœurs. Quand la prédication publique commença, cette base solide fut d'un grand secours.",
           ""],
          ["🎯 La leçon",
           "Agir avec sagesse. Chaque chose en son temps et dans son ordre. Nous ne devons pas nous précipiter dans la prédication : préparons d'abord les cœurs, puis parlons.",
           ""]
        ],
        [
          ["Combien d'années dura la prédication secrète ?", ["2", "3", "5"]],
          ["Qui fut le premier homme à embrasser l'islam ?", ["'Umar", "Abou Bakr", "'Uthmân"]],
          ["Quel est le nom du centre secret ?", ["La maison d'al-Arqam", "La mosquée du Prophète", "La grotte"]]
        ],
        [
          ["610", "Islam de Khadîja et de 'Alî (qu'Allah les agrée)"],
          ["610", "Islam d'Abou Bakr (qu'Allah l'agrée)"],
          ["~611", "Ouverture de la maison d'al-Arqam"],
          ["613", "Fin de la prédication secrète"]
        ]
      ],
      es: [
        "La predicación secreta: llamar en secreto",
        "La Meca, la casa de al-Arqam",
        "610-613",
        "Comprender la predicación secreta de los tres primeros años de la profecía y el carácter de los primeros musulmanes.",
        "Por la predicación de Abu Bakr (que Alá esté complacido con él), grandes Compañeros abrazaron el islam. Esa fue la formación, ese fue el efecto. ¡Oh Alá! Concédenos llamar hacia Ti. Amín.",
        [
          "Tres años de predicación secreta",
          "Primer hombre: Abu Bakr (que Alá esté complacido con él)",
          "Primer niño: Ali (que Alá esté complacido con él)",
          "Primer liberto: Zayd (que Alá esté complacido con él)",
          "Primera mujer: Jadiya (que Alá esté complacido con ella)",
          "Unos cuarenta musulmanes"
        ],
        [
          ["🎯 Un comienzo con sabiduría",
           "La predicación permaneció secreta unos tres años. ¿Por qué? Por el peligro de la oposición y la necesidad de formación de los nuevos creyentes. El Profeta ﷺ llamaba a cada uno individualmente y explicaba con paciencia.",
           ""],
          ["👥 Los primeros musulmanes",
           "Primer hombre: Abu Bakr (que Alá esté complacido con él). Primer niño: Ali (que Alá esté complacido con él), de diez años. Primer liberto: Zayd ibn Hariza (que Alá esté complacido con él). Primera mujer: Jadiya (que Alá esté complacido con ella). Abu Bakr (que Alá esté complacido con él) llamó a sus amigos: Uzman, az-Zubayr, Abd ar-Rahman ibn Awf, Sad ibn Abi Waqqas y Talha (que Alá esté complacido con ellos); esos cinco forman parte de «los diez anunciados con el Paraíso». En tres años abrazaron el islam unas cuarenta personas.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🏠 La casa de al-Arqam",
           "La casa de al-Arqam ibn Abi al-Arqam (que Alá esté complacido con él), cerca de la colina de Safa, se convirtió en el centro secreto del Profeta ﷺ. La gente iba a escuchar el Corán y a aprender las enseñanzas del Profeta ﷺ. Fue la primera escuela islámica.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🕌 El comienzo de la oración",
           "Al principio se rezaban dos rakas por la mañana y dos por la tarde (las cinco oraciones se hicieron obligatorias después, la noche del Miray). Jadiya, Ali y Abu Bakr (que Alá esté complacido con ellos) rezaban. Los libros de Sira cuentan que un día Abu Talib vio al Profeta ﷺ y a Ali rezando y dijo: «Sobrino, ¿qué es esto?» Él ﷺ dijo: «Es la religión de Alá que he traído.» Abu Talib dijo: «Te ayudaré, pero no puedo abandonar la religión de mis padres.»",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (la cadena de este episodio es discutida)"],
          ["🌱 La importancia de la formación",
           "Esos tres años fueron una formación en la fe. Los Compañeros aprendieron las aleyas del Corán, observaron el carácter del Profeta ﷺ y fortalecieron sus corazones. Cuando comenzó la predicación pública, esa base firme fue de gran ayuda.",
           ""],
          ["🎯 La lección",
           "Actuar con sabiduría. Cada cosa en su tiempo y en su orden. No debemos apresurarnos en la predicación: preparemos primero los corazones y luego hablemos.",
           ""]
        ],
        [
          ["¿Cuántos años duró la predicación secreta?", ["2", "3", "5"]],
          ["¿Quién fue el primer hombre en abrazar el islam?", ["Umar", "Abu Bakr", "Uzman"]],
          ["¿Cómo se llama el centro secreto?", ["La casa de al-Arqam", "La mezquita del Profeta", "La cueva"]]
        ],
        [
          ["610", "Islam de Jadiya y de Ali (que Alá esté complacido con ellos)"],
          ["610", "Islam de Abu Bakr (que Alá esté complacido con él)"],
          ["~611", "Apertura de la casa de al-Arqam"],
          ["613", "Fin de la predicación secreta"]
        ]
      ]
    },

    /* ═══════════════ DAY 7 — Da'wat-e-alaniya ═══════════════ */
    7: {
      mr: [
        "खुली दावत — सफा टेकडीवरून घोषणा",
        "मक्का, सफा टेकडी",
        "इ.स. ६१३",
        "खुल्या दावतीची सुरुवात, कुरैशच्या विरोधाची सुरुवात आणि अबू लहबचे शत्रुत्व समजून घेणे.",
        "सीरतच्या रिवायतींनुसार हजरत सुमय्या (र.अ.) यांना अबू जहलने भाला मारला आणि त्या पहिल्या शहीदा झाल्या. हे अल्लाह! दीनासाठी कुर्बानी देण्याची तौफीक आम्हालाही दे. आमीन.",
        [
          "खुली दावत: सफा टेकडीवर",
          "अबू लहबचे शत्रुत्व",
          "सूरह अल-मसद उतरली",
          "पहिली शहीदा: सुमय्या (र.अ.)",
          "अबू तालिब यांचे संरक्षण"
        ],
        [
          ["🗣️ «या अय्युहन्नास»",
           "जेव्हा हा हुकूम आला: «وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ» (आपल्या जवळच्या नातेवाइकांना भय दाखव) — सूरह अश-शुअरा २६:२१४ (सहीह बुखारी), आणि खुल्या दावतीचा हुकूम: «فَاصْدَعْ بِمَا تُؤْمَرُ» (जे हुकूम दिले आहे ते खुलेपणाने सांग) — सूरह अल-हिज्र १५:९४. नबी ﷺ सफा टेकडीवर चढले आणि मोठ्या आवाजात हाक दिली: «या सबाहाह! या सबाहाह!» (पहाटेच्या हल्ल्यापासून सावध!) — ही अरबमध्ये धोक्याची घोषणा होती. कुरैशच्या टोळ्या जमल्या. नबी ﷺ म्हणाले: «जर मी सांगितले की या डोंगरामागे शत्रूचे सैन्य आहे, तर तुम्ही मानाल का?» सर्वांनी म्हटले: «होय, तुम्ही कधीही खोटे बोलले नाही.» नंतर ते म्हणाले: «तर मी तुम्हाला अल्लाहच्या अज़ाबापासून भय दाखवतो.»",
           "सहीह बुखारी: ४७७०; कुरआन: २६:२१४, १५:९४"],
          ["🔥 अबू लहबचे शत्रुत्व",
           "अबू लहब (नबी ﷺ यांचा काका) म्हणाला: «नाश हो तुमचा! यासाठीच बोलावले होते का?» (सहीह बुखारी व मुस्लिम). अल्लाहने सूरह अल-मसद उतरवली: «تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝ مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ» (अबू लहबचे हात तुटोत आणि तो स्वतः नष्ट होवो; त्याचा माल आणि कमाई कामी आली नाही). ही अबू लहबच्या शत्रुत्वाची औपचारिक घोषणा होती.",
           "सहीह बुखारी: ४९७१; सहीह मुस्लिम: २०८; कुरआन: १११"],
          ["💢 कुरैशच्या विरोधाची ३ कारणे",
           "१) तौहीद — «आमच्या मूर्तींचे काय होईल?» २) रिसालत — «अल्लाह एखाद्या सामान्य माणसाला नबी का बनवेल?» ३) आखिरत — «आमचे वडील-आजोबा मरून माती झाले, पुन्हा जिवंत?» या तीन्ही गोष्टी कुरैशच्या स्वार्थांवर घाव होत्या — काबाचा व्यापार, सरदारी आणि स्वातंत्र्य.",
           ""],
          ["😢 कष्टांची सुरुवात",
           "आता प्रत्येक मुस्लिमाला छळ सुरू झाला. हजरत बिलाल (र.अ.) यांना गरम वाळूवर झोपवले जात, त्यांच्यावर दगड ठेवले जात, तरी ते म्हणत «अहद, अहद» (एक अल्लाह, एक अल्लाह). हजरत अम्मार (र.अ.), त्यांचे वडील यासिर (र.अ.) आणि आई सुमय्या (र.अ.) — तिघांनाही छळले गेले. सीरतच्या रिवायतींनुसार सुमय्या (र.अ.) यांना अबू जहलने भाला मारला आणि त्या पहिल्या शहीदा झाल्या. हजरत अबू बक्र (र.अ.) यांना मस्जिदीत इतके मारले गेले की चेहरा ओळखताच येत नव्हता (सीरतची रिवायत).",
           "सुनन इब्न माजा: १५० (हसन); मुस्नद अहमद: ३८३२ (बिलाल र.अ.); सुमय्या (र.अ.) यांची शहादत व अबू बक्र (र.अ.) यांच्या छळाचा तपशील: सीरतच्या रिवायती"],
          ["🛡️ अबू तालिब यांचे संरक्षण",
           "अबू तालिब यांनी कुरैशला सांगितले की मी माझ्या भाच्याचे रक्षण करीन. कुरैशने दबाव आणला, धमक्या दिल्या, नंतर एक सौदा मांडला (इब्न इशाक): अमारा बिन वलीद (कुरैशचा देखणा तरुण) याला आपला मुलगा करून घ्या आणि आपल्या भाच्याला आमच्या स्वाधीन करा जेणेकरून आम्ही त्याला ठार मारू. अबू तालिब म्हणाले: «हा कसला न्याय? तुम्ही आपला मुलगा मला द्या जेणेकरून मी त्याला वाढवू, आणि मी माझा मुलगा तुम्हाला द्या जेणेकरून तुम्ही त्याला ठार माराल?» आणि त्यांनी स्पष्ट नकार दिला.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🎯 बोध",
           "सत्य सांगण्यात कोणतीही भीती नाही. नबी ﷺ यांनी खुली दावत दिली, कष्ट सोसले, पण मागे हटले नाहीत. आपण सत्यासाठी ठाम उभे राहिले पाहिजे, कितीही कठीण असो.",
           ""]
        ],
        [
          ["खुली दावत कुठून सुरू झाली?", ["मस्जिदे-हराम", "सफा टेकडी", "उहुद पर्वत"]],
          ["पहिली शहीदा कोण?", ["खदीजा", "सुमय्या", "आयशा"]],
          ["नबी ﷺ यांना कोणत्या काकांनी छळले?", ["अबू तालिब", "अबू लहब", "हमझा"]]
        ],
        [
          ["इ.स. ६१३", "सफा टेकडीवरून घोषणा"],
          ["इ.स. ६१३", "अबू लहबचे शत्रुत्व"],
          ["इ.स. सु. ६१४", "पहिली शहीदा सुमय्या (र.अ.)"]
        ]
      ],
      ar: [
        "الدعوة العلنية — الإعلان على الصفا",
        "مكة، جبل الصفا",
        "613 م",
        "فهم بداية الدعوة العلنية، وبداية معارضة قريش، وعداوة أبي لهب.",
        "جاء في روايات السيرة أن أبا جهل طعن سمية رضي الله عنها بحربة فكانت أول شهيدة. اللهم ارزقنا التضحية من أجل الدين. آمين.",
        [
          "الدعوة العلنية: على جبل الصفا",
          "عداوة أبي لهب",
          "نزول سورة المسد",
          "أول شهيدة: سمية رضي الله عنها",
          "حماية أبي طالب"
        ],
        [
          ["🗣️ «يا أيها الناس»",
           "لما نزل: «وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ» — سورة الشعراء 26:214 (صحيح البخاري)، ونزل الأمر بالجهر: «فَاصْدَعْ بِمَا تُؤْمَرُ» — سورة الحجر 15:94. صعد النبي ﷺ الصفا ونادى بأعلى صوته: «يا صباحاه! يا صباحاه!» — وكان ذلك إعلان خطر عند العرب. فاجتمعت قبائل قريش. فقال ﷺ: «لو أخبرتكم أن خيلًا بالوادي تريد أن تغير عليكم أكنتم مصدقيّ؟» قالوا: «نعم، ما جربنا عليك كذبًا». فقال: «فإني نذير لكم بين يدي عذاب شديد».",
           "صحيح البخاري: 4770؛ القرآن: 26:214، 15:94"],
          ["🔥 عداوة أبي لهب",
           "قال أبو لهب (عم النبي ﷺ): «تبًّا لك! ألهذا جمعتنا؟» (صحيح البخاري ومسلم). فأنزل الله سورة المسد: «تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝ مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ». وكان ذلك إعلانًا رسميًّا لعداوة أبي لهب.",
           "صحيح البخاري: 4971؛ صحيح مسلم: 208؛ القرآن: 111"],
          ["💢 أسباب معارضة قريش الثلاثة",
           "1) التوحيد — «ماذا يكون بآلهتنا؟» 2) الرسالة — «أيبعث الله بشرًا من عامة الناس نبيًّا؟» 3) الآخرة — «آباؤنا صاروا ترابًا، أيُبعثون؟» وهذه الثلاث كانت ضربة لمصالح قريش: تجارة الكعبة، والسيادة، والحرية.",
           ""],
          ["😢 بداية الأذى",
           "بدأ تعذيب كل مسلم. كان بلال رضي الله عنه يُطرح على الرمل الحار ويُوضع عليه الحجر، وهو يقول: «أحد، أحد». وعُذّب عمار رضي الله عنه وأبوه ياسر وأمه سمية رضي الله عنهما. وجاء في روايات السيرة أن أبا جهل طعن سمية رضي الله عنها بحربة فكانت أول شهيدة. وضُرب أبو بكر رضي الله عنه في المسجد حتى لم يُعرف وجهه (رواية سيرة).",
           "سنن ابن ماجه: 150 (حسن)؛ مسند أحمد: 3832 (بلال رضي الله عنه)؛ تفصيل شهادة سمية رضي الله عنها وإيذاء أبي بكر رضي الله عنه: روايات السيرة"],
          ["🛡️ حماية أبي طالب",
           "قال أبو طالب لقريش: إني سأحمي ابن أخي. فضغطت قريش وهددت، ثم عرضت صفقة (ابن إسحاق): خذ عمارة بن الوليد (فتى قريش الوسيم) ابنًا لك، وسلّم إلينا ابن أخيك لنقتله. فقال أبو طالب: «أيُّ إنصاف هذا؟ تعطونني ابنكم أغذوه، وأعطيكم ابني تقتلونه؟» ورفض رفضًا صريحًا.",
           "من روايات السيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🎯 العبرة",
           "لا خوف في قول الحق. أعلن النبي ﷺ الدعوة علنًا، واحتمل الأذى، ولم يتراجع. فعلينا أن نثبت على الحق مهما كان صعبًا.",
           ""]
        ],
        [
          ["من أين بدأت الدعوة العلنية؟", ["المسجد الحرام", "جبل الصفا", "جبل أحد"]],
          ["من أول شهيدة؟", ["خديجة", "سمية", "عائشة"]],
          ["أي عم أذى النبي ﷺ؟", ["أبو طالب", "أبو لهب", "حمزة"]]
        ],
        [
          ["613", "الإعلان على جبل الصفا"],
          ["613", "عداوة أبي لهب"],
          ["نحو 614", "أول شهيدة: سمية رضي الله عنها"]
        ]
      ],
      fr: [
        "La prédication publique — l'annonce sur Safâ",
        "La Mecque, la colline de Safâ",
        "613",
        "Comprendre le début de la prédication publique, le début de l'opposition des Quraysh et l'hostilité d'Abou Lahab.",
        "Les récits de Sîra rapportent qu'Abou Jahl frappa Soumayya (qu'Allah l'agrée) d'une lance et qu'elle fut la première martyre. Ô Allah ! Accorde-nous le sacrifice pour la religion. Âmîn.",
        [
          "La prédication publique : sur la colline de Safâ",
          "L'hostilité d'Abou Lahab",
          "La révélation de sourate al-Masad",
          "Première martyre : Soumayya (qu'Allah l'agrée)",
          "La protection d'Abou Tâlib"
        ],
        [
          ["🗣️ « Ô gens ! »",
           "Quand vint l'ordre : « وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ » (avertis tes proches parents) — sourate ach-Chou'arâ' 26:214 (Sahih al-Bukhari), et l'ordre d'annoncer publiquement : « فَاصْدَعْ بِمَا تُؤْمَرُ » (proclame ce qui t'est ordonné) — sourate al-Hijr 15:94. Le Prophète ﷺ monta sur Safâ et cria d'une voix forte : « Yâ sabâhâh ! Yâ sabâhâh ! » (alerte à l'attaque du matin !) — c'était l'annonce d'un danger chez les Arabes. Les tribus de Quraysh se rassemblèrent. Le Prophète ﷺ dit : « Si je vous disais qu'une armée est derrière cette montagne, me croiriez-vous ? » Tous dirent : « Oui, tu n'as jamais menti. » Il dit : « Je vous avertis donc du châtiment d'Allah. »",
           "Sahih al-Bukhari : 4770 ; Coran : 26:214, 15:94"],
          ["🔥 L'hostilité d'Abou Lahab",
           "Abou Lahab (l'oncle du Prophète ﷺ) dit : « Que tu périsses ! Est-ce pour cela que tu nous as rassemblés ? » (Sahih al-Bukhari et Muslim). Allah révéla alors sourate al-Masad : « تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝ مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ » (Que périssent les deux mains d'Abou Lahab, et qu'il périsse ! Sa richesse et ce qu'il a acquis ne lui ont servi à rien). Ce fut l'annonce officielle de l'hostilité d'Abou Lahab.",
           "Sahih al-Bukhari : 4971 ; Sahih Muslim : 208 ; Coran : 111"],
          ["💢 Les trois causes de l'opposition des Quraysh",
           "1) L'unicité — « Qu'adviendra-t-il de nos idoles ? » 2) La prophétie — « Pourquoi Allah ferait-Il d'un homme ordinaire un prophète ? » 3) L'au-delà — « Nos pères sont devenus poussière, et ils revivraient ? » Ces trois points frappaient les intérêts des Quraysh : le commerce de la Kaaba, la primauté et la liberté.",
           ""],
          ["😢 Le début des épreuves",
           "Chaque musulman fut alors persécuté. Bilâl (qu'Allah l'agrée) était étendu sur le sable brûlant, une pierre posée sur lui, et il disait : « Ahad, ahad » (Un, Un). 'Ammâr (qu'Allah l'agrée), son père Yâsir et sa mère Soumayya (qu'Allah les agrée) furent torturés. Les récits de Sîra rapportent qu'Abou Jahl frappa Soumayya (qu'Allah l'agrée) d'une lance et qu'elle fut la première martyre. Abou Bakr (qu'Allah l'agrée) fut frappé à la mosquée au point qu'on ne reconnaissait plus son visage (récit de Sîra).",
           "Sunan Ibn Mâjah : 150 (hasan) ; Mousnad Ahmad : 3832 (Bilâl) ; détail du martyre de Soumayya et de la persécution d'Abou Bakr : récits de Sîra"],
          ["🛡️ La protection d'Abou Tâlib",
           "Abou Tâlib dit aux Quraysh qu'il protégerait son neveu. Les Quraysh firent pression, menacèrent, puis proposèrent un marché (Ibn Ishâq) : prends 'Umâra ibn al-Walîd (le beau jeune homme des Quraysh) comme fils, et remets-nous ton neveu pour que nous le tuions. Abou Tâlib dit : « Quelle justice est-ce là ? Vous me donnez votre fils pour que je l'élève, et je vous donne le mien pour que vous le tuiez ? » Et il refusa catégoriquement.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🎯 La leçon",
           "Aucune crainte à dire la vérité. Le Prophète ﷺ prêcha publiquement, endura les épreuves et ne recula pas. Nous devons tenir ferme pour la vérité, quelle que soit la difficulté.",
           ""]
        ],
        [
          ["Où commença la prédication publique ?", ["La Mosquée sacrée", "La colline de Safâ", "Le mont Ouhoud"]],
          ["Qui fut la première martyre ?", ["Khadîja", "Soumayya", "'Â'icha"]],
          ["Quel oncle persécuta le Prophète ﷺ ?", ["Abou Tâlib", "Abou Lahab", "Hamza"]]
        ],
        [
          ["613", "L'annonce sur la colline de Safâ"],
          ["613", "L'hostilité d'Abou Lahab"],
          ["~614", "La première martyre, Soumayya (qu'Allah l'agrée)"]
        ]
      ],
      es: [
        "La predicación pública: el anuncio en Safa",
        "La Meca, la colina de Safa",
        "613",
        "Comprender el comienzo de la predicación pública, el inicio de la oposición de los Quraysh y la hostilidad de Abu Lahab.",
        "Los relatos de Sira cuentan que Abu Yahal hirió a Sumayya (que Alá esté complacido con ella) con una lanza y fue la primera mártir. ¡Oh Alá! Concédenos el sacrificio por la religión. Amín.",
        [
          "La predicación pública: en la colina de Safa",
          "La hostilidad de Abu Lahab",
          "La revelación de la sura al-Masad",
          "Primera mártir: Sumayya (que Alá esté complacido con ella)",
          "La protección de Abu Talib"
        ],
        [
          ["🗣️ «¡Oh gente!»",
           "Cuando vino la orden: «وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ» (advierte a tus parientes más cercanos) — sura ash-Shu'ara 26:214 (Sahih al-Bujari), y la orden de proclamar públicamente: «فَاصْدَعْ بِمَا تُؤْمَرُ» (proclama lo que se te ordena) — sura al-Hiyy 15:94. El Profeta ﷺ subió a Safa y gritó con voz fuerte: «¡Ya sabahah! ¡Ya sabahah!» (¡alerta de ataque al amanecer!) — era el anuncio de un peligro entre los árabes. Se reunieron las tribus de Quraysh. El Profeta ﷺ dijo: «Si os dijera que hay un ejército detrás de este monte, ¿me creeríais?» Todos dijeron: «Sí, nunca has mentido.» Dijo: «Os advierto, pues, del castigo de Alá.»",
           "Sahih al-Bujari: 4770; Corán: 26:214, 15:94"],
          ["🔥 La hostilidad de Abu Lahab",
           "Abu Lahab (tío del Profeta ﷺ) dijo: «¡Que perezcas! ¿Para esto nos has reunido?» (Sahih al-Bujari y Muslim). Entonces Alá reveló la sura al-Masad: «تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝ مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ» (¡Perezcan las dos manos de Abu Lahab, y perezca él! De nada le sirvieron su riqueza ni lo que ganó). Fue el anuncio oficial de la hostilidad de Abu Lahab.",
           "Sahih al-Bujari: 4971; Sahih Muslim: 208; Corán: 111"],
          ["💢 Las tres causas de la oposición de los Quraysh",
           "1) La unicidad: «¿Qué será de nuestros ídolos?» 2) La profecía: «¿Por qué Alá haría profeta a un hombre común?» 3) El más allá: «Nuestros padres se volvieron tierra, ¿y resucitarán?» Estos tres puntos golpeaban los intereses de los Quraysh: el comercio de la Kaaba, la primacía y la libertad.",
           ""],
          ["😢 El comienzo de las pruebas",
           "Entonces se persiguió a cada musulmán. A Bilal (que Alá esté complacido con él) lo tendían sobre arena caliente y le ponían una piedra encima, y él decía: «Ahad, ahad» (Uno, Uno). Ammar (que Alá esté complacido con él), su padre Yasir y su madre Sumayya (que Alá esté complacido con ellos) fueron torturados. Los relatos de Sira cuentan que Abu Yahal hirió a Sumayya (que Alá esté complacido con ella) con una lanza y fue la primera mártir. A Abu Bakr (que Alá esté complacido con él) lo golpearon en la mezquita hasta que no se le reconocía el rostro (relato de Sira).",
           "Sunan Ibn Maya: 150 (hasan); Musnad Ahmad: 3832 (Bilal); detalle del martirio de Sumayya y de la persecución de Abu Bakr: relatos de Sira"],
          ["🛡️ La protección de Abu Talib",
           "Abu Talib dijo a los Quraysh que protegería a su sobrino. Los Quraysh presionaron, amenazaron y luego propusieron un trato (Ibn Ishaq): toma a Umara ibn al-Walid (el apuesto joven de los Quraysh) como hijo, y entréganos a tu sobrino para que lo matemos. Abu Talib dijo: «¿Qué justicia es esta? Me dais vuestro hijo para que lo críe, y yo os doy el mío para que lo matéis?» Y se negó tajantemente.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🎯 La lección",
           "No hay miedo al decir la verdad. El Profeta ﷺ predicó públicamente, soportó las pruebas y no retrocedió. Debemos mantenernos firmes por la verdad, por difícil que sea.",
           ""]
        ],
        [
          ["¿Dónde comenzó la predicación pública?", ["La Mezquita Sagrada", "La colina de Safa", "El monte Uhud"]],
          ["¿Quién fue la primera mártir?", ["Jadiya", "Sumayya", "Aisha"]],
          ["¿Qué tío persiguió al Profeta ﷺ?", ["Abu Talib", "Abu Lahab", "Hamza"]]
        ],
        [
          ["613", "El anuncio en la colina de Safa"],
          ["613", "La hostilidad de Abu Lahab"],
          ["~614", "La primera mártir, Sumayya (que Alá esté complacido con ella)"]
        ]
      ]
    },

    /* ═══════════════ DAY 8 — Masaa'ib o aziyatein ═══════════════ */
    8: {
      mr: [
        "कष्ट व छळ — संयमाची परीक्षा",
        "मक्का",
        "इ.स. ६१४-६१५",
        "सहाबांच्या कुर्बान्या, विशेषतः गुलाम व दुर्बल लोकांचे कष्ट समजून घेणे.",
        "हजरत बिलाल (र.अ.), हजरत सुमय्या (र.अ.) आणि हजरत अम्मार (र.अ.) — यांच्याच कुर्बान्यांमुळे आज आपल्याला ईमान मिळाले. हे अल्लाह! त्यांच्या कुर्बान्यांचे कृतज्ञता व्यक्त करणारे आपल्याला बनव. आमीन.",
        [
          "बिलाल (र.अ.) यांना गरम वाळूवर झोपवले",
          "पहिली शहीदा: सुमय्या (र.अ.)",
          "अम्मार (र.अ.) यांचे आई-वडील शहीद",
          "अबू बक्र (र.अ.) यांना मारले गेले",
          "उमर (र.अ.)ही आधी विरोधक होते (दिवस १० मध्ये)"
        ],
        [
          ["🔥 अत्याचाराचा कळस",
           "कुरैशने प्रत्येक मुस्लिमाला छळायला सुरुवात केली. जो गुलाम मुस्लिम झाला, त्याचा मालक त्याच्यावर अत्याचार करत असे — गरम वाळूवर झोपवून छातीवर दगड ठेवले जात, पाणी मिळत नसे आणि चाबकाचे मार पडत. हजरत बिलाल (र.अ.) यांची घटना प्रसिद्ध आहे — उमय्या बिन खलफ त्यांना गरम वाळूवर झोपवत, दगड ठेवत आणि म्हणत: «मुहम्मद ﷺ यांना नाकार» — ते म्हणत «अहद, अहद». हजरत अबू बक्र (र.अ.) यांनी त्यांना विकत घेऊन मुक्त केले.",
           "सहीह बुखारी: ३७५४ (अबू बक्र (र.अ.) यांनी बिलाल (र.अ.) यांना मुक्त करणे); बाकी तपशील: सीरतच्या रिवायती"],
          ["👨‍👩‍👦 यासिर यांचे कुटुंब",
           "हजरत यासिर (र.अ.), हजरत सुमय्या (र.अ.) आणि हजरत अम्मार (र.अ.) — हे तिघेही गुलाम होते आणि मुस्लिम झाले. सीरतच्या रिवायतींनुसार अबू जहलने सुमय्या (र.अ.) यांना भाला मारला आणि त्या शहीद झाल्या — इस्लामची पहिली शहीदा. यासिर (र.अ.)ही शहीद झाले. अम्मार (र.अ.) यांना कठोर छळ दिला गेला, इतका की त्यांना भाग्यवश कुफ्राचे शब्द बोलावे लागले — पण मन ईमानाने भरलेले होते. जेव्हा ते नबी ﷺ यांच्याकडे आले, तेव्हा आप ﷺ यांनी विचारले: «मन कसे आहे?» ते म्हणाले: «ईमानाने भरलेले.» आप ﷺ म्हणाले: «पुन्हा असे करावे लागले तर काही हरकत नाही.» (यावर ही आयत उतरली — सूरह अन-नहल १६:१०६: «مَنْ كَفَرَ بِاللَّهِ مِن بَعْدِ إِيمَانِهِ إِلَّا مَنْ أُكْرِهَ وَقَلْبُهُ مُطْمَئِنٌّ بِالْإِيمَانِ»).",
           "कुरआन: १६:१०६; सबबे-नुझूल: तफसीर तबरी / मुस्तद्रक हाकिम (मुर्सल); सुमय्या (र.अ.) व यासिर (र.अ.) यांची शहादत: सीरतच्या रिवायती"],
          ["💔 हजरत अबू बक्र (र.अ.) यांचा छळ",
           "हजरत अबू बक्र (र.अ.) यांना मस्जिदे-हराममध्ये मारले गेले, इतके मारले की चेहरा ओळखताच येत नव्हता. बनू तैम टोळीने त्यांना उचलले आणि घरी नेले; शुद्धी आल्यावर पहिला प्रश्न होता: «नबी ﷺ कसे आहेत?» एवढ्या त्रासातही नबी ﷺ यांची काळजी. रात्री आईसोबत नबी ﷺ यांना भेटायला गेले, दुआ दिली आणि परत आले.",
           "सीरतची रिवायत — अल-बिदाया वन-निहाया / सीरत इब्न हिशाम (सनदेवर चर्चा)"],
          ["🏹 हजरत उमर (र.अ.) यांचा विरोध",
           "इस्लाम आणण्यापूर्वी हजरत उमर (र.अ.) मुस्लिमांच्या कडव्या विरोधकांत होते. पण अल्लाहने त्यांच्यासाठी हिदायत लिहून ठेवली होती — त्यांच्या इस्लामबद्दलची घटना आणि त्याचा परिणाम आपण दिवस १० मध्ये वाचू.",
           ""],
          ["🎯 बोध",
           "या कुर्बान्या पाहून डोळे भरून येतात. हजरत बिलाल (र.अ.) गरम वाळूवर «अहद, अहद» म्हणत राहिले, हजरत सुमय्या (र.अ.) यांनी जीव दिला, हजरत अम्मार (र.अ.) यांनी छळ सहन केला — पण ईमान सोडले नाही. आपण त्यांच्या कुर्बान्या लक्षात ठेवल्या पाहिजेत आणि आपल्या छोट्या कष्टांतही संयम ठेवला पाहिजे.",
           ""]
        ],
        [
          ["पहिली शहीदा कोण?", ["खदीजा", "सुमय्या", "आयशा"]],
          ["बिलाल (र.अ.) यांचा मालक कोण होता?", ["अबू जहल", "उमय्या बिन खलफ", "अबू सुफियान"]],
          ["सीरतच्या प्रसिद्ध रिवायतीनुसार हजरत उमर (र.अ.) यांनी कोणती सूरत ऐकून इस्लाम स्वीकारला?", ["अल-फातिहा", "ता-हा", "यासीन"]]
        ],
        [
          ["इ.स. सु. ६१४", "सुमय्या (र.अ.) यांची शहादत"],
          ["इ.स. सु. ६१४", "बिलाल (र.अ.) यांचा छळ"],
          ["इ.स. ६१६", "हजरत उमर (र.अ.) यांचा इस्लाम"]
        ]
      ],
      ar: [
        "المصائب والأذى — امتحان الصبر",
        "مكة",
        "614-615 م",
        "فهم تضحيات الصحابة رضي الله عنهم، وخاصة مصائب العبيد والضعفاء.",
        "بلال وسمية وعمار رضي الله عنهم — بتضحيات هؤلاء وصل إلينا الإيمان اليوم. اللهم اجعلنا من الشاكرين لتضحياتهم. آمين.",
        [
          "بلال رضي الله عنه على الرمل الحار",
          "أول شهيدة: سمية رضي الله عنها",
          "والدا عمار رضي الله عنه شهيدان",
          "أبو بكر رضي الله عنه ضُرب",
          "عمر رضي الله عنه كان معارضًا أولًا (في اليوم العاشر)"
        ],
        [
          ["🔥 ذروة الظلم",
           "بدأت قريش تعذيب كل مسلم. فمن أسلم من العبيد عذّبه سيده — يُطرح على الرمل الحار ويُوضع الحجر على صدره، ولا يُسقى، ويُضرب بالسياط. وقصة بلال رضي الله عنه مشهورة: كان أمية بن خلف يطرحه على الرمل الحار ويضع الحجر ويقول: «اكفر بمحمد ﷺ»، وهو يقول: «أحد، أحد». فاشتراه أبو بكر رضي الله عنه وأعتقه.",
           "صحيح البخاري: 3754 (عتق أبي بكر لبلال)؛ وبقية التفصيل: روايات السيرة"],
          ["👨‍👩‍👦 آل ياسر",
           "ياسر وسمية وعمار رضي الله عنهم كانوا عبيدًا فأسلموا. وجاء في روايات السيرة أن أبا جهل طعن سمية رضي الله عنها بحربة فماتت شهيدة — أول شهيدة في الإسلام. واستُشهد ياسر رضي الله عنه أيضًا. وعُذّب عمار رضي الله عنه عذابًا شديدًا حتى اضطر إلى كلمة الكفر — وقلبه مطمئن بالإيمان. فلما جاء إلى النبي ﷺ سأله: «كيف قلبك؟» قال: «مطمئن بالإيمان». فقال ﷺ: «إن عادوا فعد». (فنزلت: سورة النحل 16:106).",
           "القرآن: 16:106؛ سبب النزول: تفسير الطبري / المستدرك للحاكم (مرسل)؛ شهادة سمية وياسر رضي الله عنهما: روايات السيرة"],
          ["💔 إيذاء أبي بكر رضي الله عنه",
           "ضُرب أبو بكر رضي الله عنه في المسجد الحرام حتى لم يُعرف وجهه. فحمله قومه بنو تيم إلى البيت، فلما أفاق كان أول سؤاله: «كيف رسول الله ﷺ؟» — في هذا الألم كله كان يهتم بالنبي ﷺ. ثم ذهب ليلًا مع أمه ليرى النبي ﷺ فدعا له ورجع.",
           "رواية سيرة — البداية والنهاية / سيرة ابن هشام (وفي الإسناد كلام)"],
          ["🏹 معارضة عمر رضي الله عنه",
           "كان عمر رضي الله عنه قبل إسلامه من أشد المعارضين. لكن الله كتب له الهداية — وسنقرأ قصة إسلامه وأثره في اليوم العاشر.",
           ""],
          ["🎯 العبرة",
           "تُدمع العين هذه التضحيات. لقد بقي بلال رضي الله عنه على الرمل الحار يقول «أحد، أحد»، وبذلت سمية رضي الله عنها روحها، واحتمل عمار رضي الله عنه الأذى — ولم يتركوا الإيمان. فعلينا أن نتذكر تضحياتهم وأن نصبر في مصائبنا الصغيرة.",
           ""]
        ],
        [
          ["من أول شهيدة؟", ["خديجة", "سمية", "عائشة"]],
          ["من سيد بلال رضي الله عنه؟", ["أبو جهل", "أمية بن خلف", "أبو سفيان"]],
          ["بأي سورة أسلم عمر رضي الله عنه في رواية السيرة المشهورة؟", ["الفاتحة", "طه", "يس"]]
        ],
        [
          ["نحو 614", "شهادة سمية رضي الله عنها"],
          ["نحو 614", "تعذيب بلال رضي الله عنه"],
          ["616", "إسلام عمر رضي الله عنه"]
        ]
      ],
      fr: [
        "Les persécutions et les épreuves — l'épreuve de la patience",
        "La Mecque",
        "614-615",
        "Comprendre les sacrifices des Compagnons, en particulier les épreuves des esclaves et des faibles.",
        "Bilâl, Soumayya et 'Ammâr (qu'Allah les agrée) — c'est par leurs sacrifices que la foi nous est parvenue aujourd'hui. Ô Allah ! Fais de nous des reconnaissants de leurs sacrifices. Âmîn.",
        [
          "Bilâl (qu'Allah l'agrée) étendu sur le sable brûlant",
          "Première martyre : Soumayya (qu'Allah l'agrée)",
          "Les parents de 'Ammâr (qu'Allah l'agrée) martyrs",
          "Abou Bakr (qu'Allah l'agrée) frappé",
          "'Umar (qu'Allah l'agrée) fut d'abord un opposant (au jour 10)"
        ],
        [
          ["🔥 Le comble de l'injustice",
           "Les Quraysh commencèrent à persécuter chaque musulman. L'esclave qui embrassait l'islam était torturé par son maître : étendu sur le sable brûlant, une pierre posée sur la poitrine, privé d'eau et frappé de coups. L'épisode de Bilâl (qu'Allah l'agrée) est célèbre : Umayya ibn Khalaf l'étendait sur le sable brûlant, posait une pierre et disait : « Renie Mouhammad ﷺ » ; il répondait : « Ahad, ahad » (Un, Un). Abou Bakr (qu'Allah l'agrée) l'acheta et l'affranchit.",
           "Sahih al-Bukhari : 3754 (Abou Bakr affranchit Bilâl) ; le reste : récits de Sîra"],
          ["👨‍👩‍👦 La famille de Yâsir",
           "Yâsir, Soumayya et 'Ammâr (qu'Allah les agrée) étaient esclaves et embrassèrent l'islam. Les récits de Sîra rapportent qu'Abou Jahl frappa Soumayya (qu'Allah l'agrée) d'une lance et qu'elle mourut martyre — la première martyre de l'islam. Yâsir (qu'Allah l'agrée) fut aussi martyrisé. 'Ammâr (qu'Allah l'agrée) fut torturé si durement qu'il fut contraint de prononcer des paroles de mécréance — mais son cœur était plein de foi. Quand il vint au Prophète ﷺ, celui-ci demanda : « Comment est ton cœur ? » Il dit : « Rempli de foi. » Il ﷺ dit : « S'ils recommencent, recommence. » (Sur cela descendit le verset — sourate an-Nahl 16:106).",
           "Coran : 16:106 ; occasion de la révélation : Tafsîr at-Tabarî / al-Moustadrak d'al-Hâkim (moursal) ; le martyre de Soumayya et Yâsir : récits de Sîra"],
          ["💔 La persécution d'Abou Bakr (qu'Allah l'agrée)",
           "Abou Bakr (qu'Allah l'agrée) fut frappé à la Mosquée sacrée, tant frappé qu'on ne reconnaissait plus son visage. Sa tribu, Banou Taym, le porta à la maison ; revenu à lui, sa première question fut : « Comment va le Prophète ﷺ ? » Dans une telle souffrance, il se souciait du Prophète ﷺ. La nuit, il alla avec sa mère voir le Prophète ﷺ, reçut son invocation, et revint.",
           "Récit de Sîra — al-Bidâya wan-Nihâya / Sîra d'Ibn Hichâm (chaîne discutée)"],
          ["🏹 L'opposition de 'Umar (qu'Allah l'agrée)",
           "Avant son islam, 'Umar (qu'Allah l'agrée) était parmi les opposants les plus durs. Mais Allah lui avait écrit la guidée — nous lirons l'épisode de son islam et son effet au jour 10.",
           ""],
          ["🎯 La leçon",
           "Ces sacrifices font monter les larmes aux yeux. Bilâl (qu'Allah l'agrée) répétait « ahad, ahad » sur le sable brûlant, Soumayya (qu'Allah l'agrée) donna sa vie, 'Ammâr (qu'Allah l'agrée) endura les tortures — sans abandonner la foi. Nous devons garder le souvenir de leurs sacrifices et être patients dans nos petites épreuves.",
           ""]
        ],
        [
          ["Qui fut la première martyre ?", ["Khadîja", "Soumayya", "'Â'icha"]],
          ["Qui était le maître de Bilâl (qu'Allah l'agrée) ?", ["Abou Jahl", "Umayya ibn Khalaf", "Abou Soufyân"]],
          ["Quelle sourate fit embrasser l'islam à 'Umar (qu'Allah l'agrée) selon le récit célèbre ?", ["Al-Fâtiha", "Tâ-Hâ", "Yâ-Sîn"]]
        ],
        [
          ["~614", "Martyre de Soumayya (qu'Allah l'agrée)"],
          ["~614", "Persécution de Bilâl (qu'Allah l'agrée)"],
          ["616", "Islam de 'Umar (qu'Allah l'agrée)"]
        ]
      ],
      es: [
        "Las persecuciones y las pruebas: la prueba de la paciencia",
        "La Meca",
        "614-615",
        "Comprender los sacrificios de los Compañeros, en especial las pruebas de los esclavos y los débiles.",
        "Bilal, Sumayya y Ammar (que Alá esté complacido con ellos): por sus sacrificios nos llegó hoy la fe. ¡Oh Alá! Haznos agradecidos de sus sacrificios. Amín.",
        [
          "A Bilal (que Alá esté complacido con él) lo tendían sobre arena caliente",
          "Primera mártir: Sumayya (que Alá esté complacido con ella)",
          "Los padres de Ammar (que Alá esté complacido con él), mártires",
          "A Abu Bakr (que Alá esté complacido con él) lo golpearon",
          "Umar (que Alá esté complacido con él) fue primero un opositor (en el día 10)"
        ],
        [
          ["🔥 El colmo de la injusticia",
           "Los Quraysh comenzaron a perseguir a cada musulmán. Al esclavo que abrazaba el islam lo torturaba su amo: lo tendían sobre arena caliente, le ponían una piedra en el pecho, le negaban agua y lo azotaban. El episodio de Bilal (que Alá esté complacido con él) es famoso: Umayya ibn Jalaf lo tendía sobre la arena caliente, ponía una piedra y decía: «Reniega de Muhámmad ﷺ», y él decía: «Ahad, ahad» (Uno, Uno). Abu Bakr (que Alá esté complacido con él) lo compró y lo libertó.",
           "Sahih al-Bujari: 3754 (Abu Bakr libera a Bilal); el resto: relatos de Sira"],
          ["👨‍👩‍👦 La familia de Yasir",
           "Yasir, Sumayya y Ammar (que Alá esté complacido con ellos) eran esclavos y abrazaron el islam. Los relatos de Sira cuentan que Abu Yahal hirió a Sumayya (que Alá esté complacido con ella) con una lanza y murió mártir: la primera mártir del islam. Yasir (que Alá esté complacido con él) también fue martirizado. A Ammar (que Alá esté complacido con él) lo torturaron tan duramente que se vio obligado a pronunciar palabras de incredulidad, pero su corazón estaba lleno de fe. Cuando vino al Profeta ﷺ, este preguntó: «¿Cómo está tu corazón?» Dijo: «Lleno de fe.» Él ﷺ dijo: «Si vuelven a hacerlo, vuelve a hacerlo.» (Sobre esto descendió la aleya: sura an-Nahl 16:106).",
           "Corán: 16:106; ocasión de la revelación: Tafsir at-Tabari / al-Mustadrak de al-Hakim (mursal); el martirio de Sumayya y Yasir: relatos de Sira"],
          ["💔 La persecución de Abu Bakr (que Alá esté complacido con él)",
           "A Abu Bakr (que Alá esté complacido con él) lo golpearon en la Mezquita Sagrada, tanto que no se le reconocía el rostro. Su tribu, Banu Taym, lo llevó a casa; al recobrar el sentido, su primera pregunta fue: «¿Cómo está el Profeta ﷺ?» En tal sufrimiento se preocupaba por el Profeta ﷺ. De noche fue con su madre a ver al Profeta ﷺ, recibió su súplica y regresó.",
           "Relato de Sira: al-Bidaya wan-Nihaya / Sira de Ibn Hisham (cadena discutida)"],
          ["🏹 La oposición de Umar (que Alá esté complacido con él)",
           "Antes de su islam, Umar (que Alá esté complacido con él) era de los opositores más duros. Pero Alá le tenía escrita la guía; leeremos el episodio de su islam y su efecto en el día 10.",
           ""],
          ["🎯 La lección",
           "Estos sacrificios hacen brotar lágrimas. Bilal (que Alá esté complacido con él) repetía «ahad, ahad» sobre la arena caliente, Sumayya (que Alá esté complacido con ella) dio su vida, Ammar (que Alá esté complacido con él) soportó las torturas, sin abandonar la fe. Debemos recordar sus sacrificios y ser pacientes en nuestras pequeñas pruebas.",
           ""]
        ],
        [
          ["¿Quién fue la primera mártir?", ["Jadiya", "Sumayya", "Aisha"]],
          ["¿Quién era el amo de Bilal (que Alá esté complacido con él)?", ["Abu Yahal", "Umayya ibn Jalaf", "Abu Sufian"]],
          ["¿Qué sura hizo que Umar (que Alá esté complacido con él) abrazara el islam según el relato famoso?", ["Al-Fatiha", "Ta-Ha", "Ya-Sin"]]
        ],
        [
          ["~614", "Martirio de Sumayya (que Alá esté complacido con ella)"],
          ["~614", "Persecución de Bilal (que Alá esté complacido con él)"],
          ["616", "Islam de Umar (que Alá esté complacido con él)"]
        ]
      ]
    },

    /* ═══════════════ DAY 9 — Hijrat-e-Habsha ═══════════════ */
    9: {
      mr: [
        "हबशाची हिजरत — पहिले आश्रयस्थान",
        "हबशा (इथिओपिया)",
        "इ.स. ६१५ (नबवी ५)",
        "मुस्लिमांची पहिली हिजरत, नजाशीचा न्याय आणि मुश्रिकांचा कट समजून घेणे.",
        "हजरत जाफर (र.अ.) यांनी नजाशीसमोर सूरह मरियम वाचली — किती सुंदर दृश्य असेल. नजाशीचे डोळे भरून आले. हे अल्लाह! आम्हालाही कुरआनवर तसेच प्रेम दे. आमीन.",
        [
          "नबवी ५ मध्ये हिजरत",
          "नजाशीचा न्याय",
          "पहिल्यांदा: १५ व्यक्ती",
          "दुसऱ्यांदा: सुमारे १०० व्यक्ती",
          "सूरह मरियमने नजाशीवर परिणाम केला"
        ],
        [
          ["🚢 हिजरतीची परवानगी",
           "कष्ट वाढत गेल्यावर नबी ﷺ सहाबांना म्हणाले: «हबशाला जा, तिथे असा राजा आहे जो कोणावरही अत्याचार करत नाही.» पहिल्यांदा ११ पुरुष व ४ स्त्रिया गेल्या. दुसऱ्यांदा ८३ पुरुष व १८ स्त्रिया गेल्या. ही पहिली हिजरत होती — अल्लाहसाठी घर, माल आणि कुटुंब सोडणे.",
           "अर-रहीकुल-मख्तूम; मुस्नद अहमद: १७४०"],
          ["👑 नजाशीचा न्याय",
           "हबशाचा राजा नजाशी (असहमा) यांनी आश्रय दिला. कुरैशने अम्र बिन अल-आस व अब्दुल्लाह बिन अबी रबीआ यांना मौल्यवान भेटवस्तू घेऊन पाठवले आणि म्हणाले: «काही मूर्ख तरुण आमच्या दीनापासून फिरले आहेत, त्यांना परत द्या.» नजाशीने विचारले: «तुमचा दीन काय आहे?» जाफर बिन अबी तालिब (र.अ.) म्हणाले: «आम्ही जाहिलियतमध्ये होतो — मूर्ती पूजत, मेलेले खात, व्यभिचार करत, नाती तोडत आणि दुर्बलांवर अत्याचार करत. नंतर अल्लाहने आमच्यातून एक रसूल पाठवले, ज्यांना आम्ही ओळखतो — ते सत्यवादी व विश्वासू आहेत. त्यांनी तौहीद, नमाज़, रोजा, जकात आणि पवित्रता शिकवली. नंतर आमच्यावर अत्याचार झाला, म्हणून आम्ही हिजरत केली.» नजाशीने विचारले: «कुरआन ऐकवा.» जाफर (र.अ.) यांनी सूरह मरियमच्या सुरुवातीच्या आयती वाचल्या — नजाशी इतका रडला की त्याची दाढी ओली झाली, आणि म्हणाला: «हा शब्द आणि ईसा (अ.स.) जे (इंजील) घेऊन आले, दोन्ही एकाच दिव्यातून निघाले आहेत.» आणि घोषणा केली: «मी या लोकांना तुमच्या स्वाधीन करणार नाही.»",
           "मुस्नद अहमद: १७४० (उम्मे सलमा (र.अ.) यांची रिवायत)"],
          ["💢 मुश्रिकांचा कट",
           "दुसऱ्या दिवशी अम्र बिन अल-आसने दुसरी चाल केली. तो नजाशीला म्हणाला: «हे राजा! हे लोक ईसा बिन मरियम यांच्याबद्दल मोठी गोष्ट सांगतात.» नजाशीने मुस्लिमांना बोलावून विचारले. जाफर (र.अ.) म्हणाले: «आम्ही तेच सांगतो जे आमचे नबी ﷺ घेऊन आले: ते अल्लाहचे दास, त्याचे रसूल, त्याची रूह आणि त्याचा शब्द आहेत, जो त्याने कुमारी मरियम (अ.स.) यांच्याकडे टाकला.» नजाशीने जमिनीवरून एक काडी उचलली आणि म्हणाला: «ईसा (अ.स.) आणि तुम्ही जे सांगितले त्यात एका काडीइतकाही फरक नाही.» (म्हणजे गोष्ट तीच आहे) (मुस्नद अहमद). मुश्रिक रिकाम्या हाताने परत गेले.",
           "मुस्नद अहमद: १७४० (उम्मे सलमा (र.अ.) यांची रिवायत)"],
          ["🤍 हबशात शांती",
           "मुस्लिमांनी हबशात शांतीने उपासना केली. एकदा नजाशीविरुद्ध कोणी बंड केले, तेव्हा मुस्लिमांना मोठी काळजी झाली की नजाशी हरू नये; त्यांनी त्याच्या विजयासाठी दुआ केली आणि तो विजयी झाल्यावर सर्व आनंदी झाले (मुस्नद अहमद). काही सहाबा नंतर मक्का व मदिन्याला परत आले, आणि जाफर (र.अ.) व त्यांचे साथीदार ७ हिजरीत खैबरच्या वेळी मदिन्याला पोहोचले. नजाशी नंतर मुस्लिम झाले; त्यांच्या निधनाची बातमी मिळाल्यावर नबी ﷺ यांनी गैरहजेरीत नमाज़े-जनाज़ा पढली (सहीह बुखारी).",
           "मुस्नद अहमद: १७४०; सहीह बुखारी: १२४५ (नजाशीची नमाज़े-जनाज़ा) आणि गझवा-ए-खैबरचा बाब (जाफर (र.अ.) यांचे आगमन)"],
          ["👨‍👩‍👧 कुटुंबांची कुर्बानी",
           "ही हिजरत सोपी नव्हती. कुटुंबे विखुरली. हजरत उस्मान (र.अ.) आपल्या पत्नी रुकय्या (र.अ.) (नबी ﷺ यांची मुलगी) यांच्यासोबत गेले. हजरत जाफर (र.अ.) आपल्या पत्नी अस्मा बिंत उमैस (र.अ.) यांच्यासोबत गेले, आणि तिथेच त्यांचा मुलगा अब्दुल्लाह जन्मला. हजरत उम्मे सलमा (र.अ.) आपले पती अबू सलमा (र.अ.) यांच्यासोबत हबशाला गेल्या होत्या; नंतर मदिन्याच्या हिजरतीच्या वेळी त्यांना यापेक्षा मोठी परीक्षा आली — त्यांच्या माहेरच्यांनी त्यांना आणि सासरच्यांनी त्यांच्या मुलाला रोखले, पती एकटे निघाले, आणि त्या सुमारे वर्षभर रडत राहिल्या, नंतर त्यांना परवानगी मिळाली.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🎯 बोध",
           "अल्लाहसाठी घर सोडणे किती कठीण आहे — हे हजरत उम्मे सलमा (र.अ.) यांच्या घटनेवरून कळते. पण त्यांनी ईमान सोडले नाही. दीनासाठी कुर्बानी द्यायला आपण घाबरू नये.",
           ""]
        ],
        [
          ["नजाशीला कोणत्या सूरतीने परिणाम केला?", ["अल-फातिहा", "मरियम", "यासीन"]],
          ["हबशाच्या राजाचे नाव काय?", ["किसरा", "कैसर", "नजाशी"]],
          ["मुस्लिमांतर्फे बोलायला कोण गेले?", ["जाफर (र.अ.)", "अली (र.अ.)", "उस्मान (र.अ.)"]]
        ],
        [
          ["इ.स. ६१५", "पहिली हिजरत-ए-हबशा"],
          ["इ.स. सु. ६१६", "दुसरी हिजरत-ए-हबशा"],
          ["इ.स. सु. ६१६", "अम्र बिन अल-आसचा कट"]
        ]
      ],
      ar: [
        "الهجرة إلى الحبشة — أول ملجأ",
        "الحبشة (إثيوبيا)",
        "615 م (السنة الخامسة من النبوة)",
        "فهم أول هجرة للمسلمين، وعدل النجاشي، ومكيدة المشركين.",
        "قرأ جعفر رضي الله عنه سورة مريم أمام النجاشي — يا له من مشهد جميل! فاضت عينا النجاشي. اللهم ارزقنا حب القرآن كما أحبه النبي ﷺ. آمين.",
        [
          "الهجرة في السنة الخامسة",
          "عدل النجاشي",
          "المرة الأولى: 15 شخصًا",
          "المرة الثانية: نحو مئة",
          "سورة مريم أثّرت في النجاشي"
        ],
        [
          ["🚢 الإذن بالهجرة",
           "لما اشتد الأذى قال النبي ﷺ لأصحابه: «اذهبوا إلى الحبشة، فإن بها ملكًا لا يظلم أحدًا». فذهب أولًا أحد عشر رجلًا وأربع نساء. ثم ذهب في المرة الثانية ثلاثة وثمانون رجلًا وثماني عشرة امرأة. وكانت هذه أول هجرة — ترك البيت والمال والأهل من أجل الله.",
           "الرحيق المختوم؛ مسند أحمد: 1740"],
          ["👑 عدل النجاشي",
           "آواهم ملك الحبشة النجاشي (أصحمة). فأرسلت قريش عمرو بن العاص وعبد الله بن أبي ربيعة بهدايا ثمينة وقالوا: «فتيان سفهاء فارقوا ديننا، فردّهم إلينا». فسأل النجاشي: «ما دينكم؟» فقال جعفر بن أبي طالب رضي الله عنه: «كنا في جاهلية — نعبد الأصنام، ونأكل الميتة، ونفعل الفواحش، ونقطع الأرحام، ونظلم الضعيف. ثم بعث الله فينا رسولًا نعرفه: صادق أمين. فعلّمنا التوحيد والصلاة والصيام والزكاة والطهارة. ثم ظُلمنا فهاجرنا». فقال النجاشي: «اقرأ عليّ القرآن». فقرأ جعفر رضي الله عنه صدر سورة مريم — فبكى النجاشي حتى بلّ لحيته وقال: «إن هذا والذي جاء به عيسى عليه السلام ليخرجان من مشكاة واحدة». وأعلن: «لن أسلّمهم إليكم».",
           "مسند أحمد: 1740 (رواية أم سلمة رضي الله عنها)"],
          ["💢 مكيدة المشركين",
           "في الغد جاء عمرو بن العاص بحيلة ثانية، فقال للنجاشي: «أيها الملك، إن هؤلاء يقولون في عيسى بن مريم قولًا عظيمًا». فدعاهم النجاشي وسألهم. فقال جعفر رضي الله عنه: «نقول ما جاء به نبينا ﷺ: هو عبد الله ورسوله، وروحه وكلمته ألقاها إلى مريم العذراء». فأخذ النجاشي عودًا من الأرض وقال: «ما عيسى عليه السلام مما قلتم بقدر هذا العود» (أي القول واحد). (مسند أحمد). فرجع المشركون خائبين.",
           "مسند أحمد: 1740 (رواية أم سلمة رضي الله عنها)"],
          ["🤍 الطمأنينة في الحبشة",
           "عبد المسلمون في الحبشة في أمن. ولما خرج أحد على النجاشي مرة، اهتم المسلمون كثيرًا خشية أن يُغلب، فدعوا له بالنصر وفرحوا بنصره (مسند أحمد). ورجع بعض الصحابة بعد ذلك إلى مكة والمدينة، ووصل جعفر رضي الله عنه وأصحابه إلى المدينة سنة سبع عند خيبر. وأسلم النجاشي بعد ذلك؛ فلما بلغ النبي ﷺ خبر وفاته صلى عليه صلاة الغائب (صحيح البخاري).",
           "مسند أحمد: 1740؛ صحيح البخاري: 1245 (الصلاة على النجاشي) وباب غزوة خيبر (قدوم جعفر رضي الله عنه)"],
          ["👨‍👩‍👧 تضحية الأسر",
           "لم تكن هذه الهجرة سهلة؛ تفرقت الأسر. ذهب عثمان رضي الله عنه مع زوجته رقية رضي الله عنها (بنت النبي ﷺ). وذهب جعفر رضي الله عنه مع زوجته أسماء بنت عميس رضي الله عنها، وهناك وُلد ابنه عبد الله. وذهبت أم سلمة رضي الله عنها مع زوجها أبي سلمة رضي الله عنه إلى الحبشة؛ ثم عند الهجرة إلى المدينة لاقت امتحانًا أشد — حبسها أهلها وحبسوا ابنها في أهل زوجها، فسافر زوجها وحده، وبقيت تبكي نحو سنة، ثم أُذن لها.",
           "رواية سيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🎯 العبرة",
           "ما أصعب ترك البيت من أجل الله — ويظهر ذلك في قصة أم سلمة رضي الله عنها. ومع ذلك لم تترك الإيمان. فلا نهاب التضحية من أجل الدين.",
           ""]
        ],
        [
          ["أي سورة أثّرت في النجاشي؟", ["الفاتحة", "مريم", "يس"]],
          ["ما اسم ملك الحبشة؟", ["كسرى", "قيصر", "النجاشي"]],
          ["من تكلم عن المسلمين؟", ["جعفر رضي الله عنه", "علي رضي الله عنه", "عثمان رضي الله عنه"]]
        ],
        [
          ["615", "أول هجرة إلى الحبشة"],
          ["نحو 616", "الهجرة الثانية إلى الحبشة"],
          ["نحو 616", "مكيدة عمرو بن العاص"]
        ]
      ],
      fr: [
        "L'émigration en Abyssinie — le premier refuge",
        "L'Abyssinie (Éthiopie)",
        "615 (5e année de la prophétie)",
        "Comprendre la première émigration des musulmans, la justice du Négus et la machination des polythéistes.",
        "Ja'far (qu'Allah l'agrée) récita sourate Maryam devant le Négus — quel beau tableau ! Les yeux du Négus se remplirent de larmes. Ô Allah ! Accorde-nous pour le Coran l'amour qu'avait le Prophète ﷺ. Âmîn.",
        [
          "Émigration en la 5e année",
          "La justice du Négus",
          "Première fois : 15 personnes",
          "Deuxième fois : environ 100 personnes",
          "Sourate Maryam toucha le Négus"
        ],
        [
          ["🚢 L'autorisation d'émigrer",
           "Les épreuves s'aggravant, le Prophète ﷺ dit aux Compagnons : « Allez en Abyssinie : il y a là un roi qui n'opprime personne. » La première fois partirent onze hommes et quatre femmes. La seconde fois, quatre-vingt-trois hommes et dix-huit femmes. Ce fut la première émigration — quitter maison, biens et famille pour Allah.",
           "Ar-Rahîq al-Makhtûm ; Mousnad Ahmad : 1740"],
          ["👑 La justice du Négus",
           "Le roi d'Abyssinie, le Négus (Asmaha), les accueillit. Les Quraysh envoyèrent 'Amr ibn al-'Âs et 'Abdoullah ibn Abî Rabî'a avec de riches présents, disant : « Des jeunes insensés ont quitté notre religion, rends-les-nous. » Le Négus demanda : « Quelle est votre religion ? » Ja'far ibn Abî Tâlib (qu'Allah l'agrée) dit : « Nous étions dans l'ignorance — nous adorions les idoles, mangions la bête morte, commettions l'immoralité, rompions les liens de parenté et opprimions les faibles. Puis Allah envoya parmi nous un Messager que nous connaissons : véridique et digne de confiance. Il nous enseigna l'unicité, la prière, le jeûne, la zakât et la pureté. Puis on nous opprima, et nous émigrâmes. » Le Négus dit : « Récite-moi le Coran. » Ja'far (qu'Allah l'agrée) récita le début de sourate Maryam — le Négus pleura au point de mouiller sa barbe et dit : « Ceci et ce qu'Issâ (paix sur lui) a apporté sortent de la même lampe. » Et il déclara : « Je ne vous les livrerai pas. »",
           "Mousnad Ahmad : 1740 (récit d'Oumm Salama, qu'Allah l'agrée)"],
          ["💢 La machination des polythéistes",
           "Le lendemain, 'Amr ibn al-'Âs tenta une seconde ruse. Il dit au Négus : « Ô roi ! Ces gens disent une chose énorme sur 'Issâ ibn Maryam. » Le Négus les convoqua et interrogea. Ja'far (qu'Allah l'agrée) dit : « Nous disons ce qu'a apporté notre Prophète ﷺ : il est le serviteur d'Allah, Son messager, Son esprit et Sa parole qu'Il a déposée en Maryam la vierge. » Le Négus ramassa un brin de paille et dit : « 'Issâ (paix sur lui) ne diffère en rien de ce que vous avez dit, pas même d'un brin de paille » (c'est-à-dire : c'est la même chose) (Mousnad Ahmad). Les polythéistes revinrent bredouilles.",
           "Mousnad Ahmad : 1740 (récit d'Oumm Salama)"],
          ["🤍 La quiétude en Abyssinie",
           "Les musulmans adorèrent en paix en Abyssinie. Une fois, quelqu'un se révolta contre le Négus ; les musulmans s'inquiétèrent vivement qu'il ne fût vaincu, invoquèrent Allah pour sa victoire et se réjouirent de son triomphe (Mousnad Ahmad). Certains Compagnons revinrent ensuite à La Mecque et à Médine, et Ja'far (qu'Allah l'agrée) et ses compagnons arrivèrent à Médine en l'an 7, à l'occasion de Khaybar. Le Négus embrassa l'islam plus tard ; quand la nouvelle de sa mort parvint, le Prophète ﷺ fit la prière funéraire en son absence (Sahih al-Bukhari).",
           "Mousnad Ahmad : 1740 ; Sahih al-Bukhari : 1245 (la prière pour le Négus) et le chapitre de Khaybar (arrivée de Ja'far)"],
          ["👨‍👩‍👧 Le sacrifice des familles",
           "Cette émigration ne fut pas facile : les familles se dispersèrent. 'Uthmân (qu'Allah l'agrée) partit avec son épouse Rouqayya (qu'Allah l'agrée), fille du Prophète ﷺ. Ja'far (qu'Allah l'agrée) partit avec son épouse Asmâ' bint 'Umays (qu'Allah l'agrée), et là naquit son fils 'Abdoullah. Oumm Salama (qu'Allah l'agrée) était partie en Abyssinie avec son mari Abou Salama (qu'Allah l'agrée) ; plus tard, lors de l'émigration vers Médine, elle subit une épreuve plus grande : les siens la retinrent et la famille de son mari retint son fils, son époux partit seul, et elle pleura près d'un an, puis on la laissa partir.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🎯 La leçon",
           "Qu'il est difficile de quitter sa maison pour Allah — la preuve en est l'épisode d'Oumm Salama (qu'Allah l'agrée). Pourtant elle n'abandonna pas la foi. Nous ne devons pas craindre le sacrifice pour la religion.",
           ""]
        ],
        [
          ["Quelle sourate toucha le Négus ?", ["Al-Fâtiha", "Maryam", "Yâ-Sîn"]],
          ["Quel est le nom du roi d'Abyssinie ?", ["Kisrâ", "César", "Le Négus"]],
          ["Qui parla au nom des musulmans ?", ["Ja'far (qu'Allah l'agrée)", "'Alî (qu'Allah l'agrée)", "'Uthmân (qu'Allah l'agrée)"]]
        ],
        [
          ["615", "La première émigration en Abyssinie"],
          ["~616", "La seconde émigration en Abyssinie"],
          ["~616", "La machination de 'Amr ibn al-'Âs"]
        ]
      ],
      es: [
        "La emigración a Abisinia: el primer refugio",
        "Abisinia (Etiopía)",
        "615 (año 5 de la profecía)",
        "Comprender la primera emigración de los musulmanes, la justicia del Negus y la conspiración de los idólatras.",
        "Yafar (que Alá esté complacido con él) recitó la sura Maryam ante el Negus; ¡qué escena tan hermosa! Se le llenaron los ojos de lágrimas. ¡Oh Alá! Concédenos por el Corán el amor que tenía el Profeta ﷺ. Amín.",
        [
          "Emigración en el año 5",
          "La justicia del Negus",
          "Primera vez: 15 personas",
          "Segunda vez: unas 100 personas",
          "La sura Maryam impresionó al Negus"
        ],
        [
          ["🚢 El permiso para emigrar",
           "Al agravarse las pruebas, el Profeta ﷺ dijo a los Compañeros: «Id a Abisinia, allí hay un rey que no oprime a nadie.» La primera vez fueron once hombres y cuatro mujeres. La segunda, ochenta y tres hombres y dieciocho mujeres. Fue la primera emigración: dejar casa, bienes y familia por Alá.",
           "Ar-Rahiq al-Majtum; Musnad Ahmad: 1740"],
          ["👑 La justicia del Negus",
           "El rey de Abisinia, el Negus (Asmaha), les dio refugio. Los Quraysh enviaron a Amr ibn al-As y a Abdalah ibn Abi Rabia con ricos regalos, diciendo: «Unos jóvenes insensatos han dejado nuestra religión; devuélvenoslos.» El Negus preguntó: «¿Cuál es vuestra religión?» Yafar ibn Abi Talib (que Alá esté complacido con él) dijo: «Estábamos en la ignorancia: adorábamos ídolos, comíamos animales muertos, cometíamos inmoralidades, rompíamos los lazos familiares y oprimíamos a los débiles. Luego Alá envió entre nosotros un Mensajero al que conocemos: veraz y digno de confianza. Nos enseñó la unicidad, la oración, el ayuno, la zakat y la pureza. Después nos oprimieron y emigramos.» El Negus dijo: «Recítame el Corán.» Yafar (que Alá esté complacido con él) recitó el comienzo de la sura Maryam; el Negus lloró hasta mojar su barba y dijo: «Esto y lo que Isa (la paz sea con él) trajo salen de la misma lámpara.» Y declaró: «No os los entregaré.»",
           "Musnad Ahmad: 1740 (relato de Umm Salama, que Alá esté complacido con ella)"],
          ["💢 La conspiración de los idólatras",
           "Al día siguiente, Amr ibn al-As intentó otra artimaña. Dijo al Negus: «¡Oh rey! Esta gente dice algo enorme sobre Isa ibn Maryam.» El Negus los convocó y preguntó. Yafar (que Alá esté complacido con él) dijo: «Decimos lo que trajo nuestro Profeta ﷺ: él es el siervo de Alá, Su mensajero, Su espíritu y Su palabra que depositó en Maryam la virgen.» El Negus tomó una brizna de paja del suelo y dijo: «Isa (la paz sea con él) no difiere de lo que habéis dicho ni en una brizna» (es decir, es lo mismo) (Musnad Ahmad). Los idólatras volvieron con las manos vacías.",
           "Musnad Ahmad: 1740 (relato de Umm Salama)"],
          ["🤍 La tranquilidad en Abisinia",
           "Los musulmanes adoraron en paz en Abisinia. Una vez alguien se rebeló contra el Negus y los musulmanes se preocuparon mucho por si era vencido; suplicaron por su victoria y se alegraron cuando venció (Musnad Ahmad). Algunos Compañeros volvieron luego a La Meca y a Medina, y Yafar (que Alá esté complacido con él) y sus compañeros llegaron a Medina en el año 7, con motivo de Jaybar. El Negus abrazó el islam después; cuando llegó la noticia de su muerte, el Profeta ﷺ hizo la oración funeraria en su ausencia (Sahih al-Bujari).",
           "Musnad Ahmad: 1740; Sahih al-Bujari: 1245 (la oración por el Negus) y el capítulo de Jaybar (llegada de Yafar)"],
          ["👨‍👩‍👧 El sacrificio de las familias",
           "Esta emigración no fue fácil: las familias se dispersaron. Uzman (que Alá esté complacido con él) partió con su esposa Ruqayya (que Alá esté complacido con ella), hija del Profeta ﷺ. Yafar (que Alá esté complacido con él) partió con su esposa Asma bint Umays (que Alá esté complacido con ella), y allí nació su hijo Abdalah. Umm Salama (que Alá esté complacido con ella) había ido a Abisinia con su esposo Abu Salama (que Alá esté complacido con él); más tarde, en la emigración a Medina, sufrió una prueba mayor: los suyos la retuvieron y la familia de su esposo retuvo a su hijo, su esposo partió solo y ella lloró cerca de un año, hasta que le dieron permiso.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🎯 La lección",
           "Qué difícil es dejar la casa por Alá; lo muestra el episodio de Umm Salama (que Alá esté complacido con ella). Y aun así no abandonó la fe. No debemos temer el sacrificio por la religión.",
           ""]
        ],
        [
          ["¿Qué sura impresionó al Negus?", ["Al-Fatiha", "Maryam", "Ya-Sin"]],
          ["¿Cómo se llamaba el rey de Abisinia?", ["Kisra", "César", "El Negus"]],
          ["¿Quién habló en nombre de los musulmanes?", ["Yafar (que Alá esté complacido con él)", "Ali (que Alá esté complacido con él)", "Uzman (que Alá esté complacido con él)"]]
        ],
        [
          ["615", "La primera emigración a Abisinia"],
          ["~616", "La segunda emigración a Abisinia"],
          ["~616", "La conspiración de Amr ibn al-As"]
        ]
      ]
    },

    /* ═══════════════ DAY 10 — Hamza ؓ o Umar ؓ ka Islam ═══════════════ */
    10: {
      mr: [
        "हमझा (र.अ.) व उमर (र.अ.) यांचा इस्लाम — शक्तीत वाढ",
        "मक्का",
        "इ.स. ६१६ (नबवी ६)",
        "दोन शक्तिशाली साथीदारांच्या इस्लामामुळे मुस्लिमांची शक्ती वाढल्याची घटना समजून घेणे.",
        "हजरत उमर (र.अ.) यांनी कुरआन ऐकून म्हटले: «किती सुंदर गोष्टी आहेत» — हीच कुरआनची शक्ती आहे. हे अल्लाह! आम्हालाही कुरआनचे प्रेम दे. आमीन.",
        [
          "हमझा (र.अ.): नबी ﷺ यांचे काका",
          "हमझा (र.अ.) यांनी अबू जहलच्या डोक्यावर धनुष्य मारले",
          "सीरतच्या प्रसिद्ध रिवायतीनुसार उमर (र.अ.) यांनी सूरह ता-हा ऐकून इस्लाम स्वीकारला",
          "दोघांनी इस्लामला शक्ती दिली",
          "खुली नमाज़ सुरू झाली"
        ],
        [
          ["🦁 हमझा (र.अ.) यांचा इस्लाम — आत्माभिमानाची भावना",
           "हजरत हमझा (र.अ.) नबी ﷺ यांचे काका, शूर आणि शिकारीचे शौकीन होते. एके दिवशी शिकारीतून परत आले, तेव्हा त्यांना सांगण्यात आले की अबू जहलने सफाजवळ आपल्या (ﷺ) भाच्याला शिव्या दिल्या आणि छळले. हमझा (र.अ.) रागाने सरळ मस्जिदे-हराममध्ये गेले, अबू जहलच्या डोक्यावर धनुष्य मारले आणि म्हणाले: «तुम्ही मुहम्मद ﷺ यांना शिव्या देता? मीही त्यांच्या दीनावर आहे, ते जे सांगतात तेच मीही सांगतो — हिंमत असेल तर मला रोखून दाखवा.» नंतर अल्लाहने त्यांचे मन इस्लामसाठी उघडले आणि ते इस्लामावर मजबुतीने ठाम राहिले (इब्न इशाक, मुस्तद्रक हाकिम). सुरुवात आत्माभिमानाने झाली आणि अल्लाहने तिला ईमान बनवले.",
           "सीरतची रिवायत — सीरत इब्न हिशाम; मुस्तद्रक हाकिम (सनदेवर चर्चा)"],
          ["🦁 हमझा (र.अ.) यांच्या इस्लामचा परिणाम",
           "हजरत हमझा (र.अ.) यांच्या इस्लामामुळे कुरैशला फार धक्का बसला. ते शूर व शक्तिशाली होते, म्हणून कुरैशने नबी ﷺ यांना छळण्यात सावधगिरी सुरू केली आणि मुस्लिमांना बळ मिळाले.",
           ""],
          ["💪 उमर (र.अ.) यांचा इस्लाम — कुरआनची शक्ती",
           "हजरत उमर (र.अ.) (इस्लामपूर्वी) फार कठोर, शूर पण कडवे विरोधक होते. एके दिवशी तलवार घेऊन नबी ﷺ यांना ठार मारायला निघाले. वाटेत नुऐम बिन अब्दुल्लाह म्हणाला: «आधी आपल्या घरी जा, तुमची बहीण फातिमा आणि तिचा नवरा सईद मुस्लिम झाले आहेत.» हजरत उमर (र.अ.) रागाने बहिणीच्या घरी गेले; ते कुरआन वाचत होते. त्यांनी मारले, नंतर पत्र मागितले: «काय आहे दाखवा?» बहिणीने म्हटले: «तुम्ही अपवित्र आहात, हे पवित्र आहे, देऊ शकत नाही.» ते स्नान करून आले आणि वाचले (सूरह ता-हाच्या सुरुवातीच्या आयती). वाचून म्हणाले: «किती सुंदर गोष्टी आहेत, कोणी आणल्या?» म्हणाल्या: «मुहम्मद ﷺ आणले.» तलवार घेऊन नबी ﷺ यांच्याकडे गेले. (ही प्रसिद्ध सीरती रिवायत आहे; दुसऱ्या रिवायतीत आहे की उमर (र.अ.) यांनी नबी ﷺ यांच्याकडून सूरह अल-हाक्का ऐकली होती.)",
           "सीरतची रिवायत — सीरत इब्न हिशाम; सुनन दारकुत्नी (सनदेवर चर्चा); सूरह अल-हाक्काची रिवायत: मुस्नद अहमद (सनद जईफ)"],
          ["💥 उमर (र.अ.) यांची घोषणा",
           "नबी ﷺ दारुल-अरकममध्ये सहाबांसोबत होते. दारावर उमर (र.अ.) आले, तेव्हा हजरत हमझा (र.अ.) म्हणाले: «येऊ द्या; जर चांगल्या हेतूने आला आहे तर ठीक, आणि वाईट हेतू असेल तर त्याच्याच तलवारीने त्याचा शिरच्छेद करीन.» नबी ﷺ यांनी त्यांचा झगा धरला आणि म्हणाले: «हे इब्ने खत्ताब! तुम्ही थांबणार नाही का?» उमर (र.अ.) यांनी लगेच म्हटले: «मी साक्ष देतो की अल्लाहशिवाय कोणी उपास्य नाही आणि तुम्ही अल्लाहचे रसूल आहात.» सर्व सहाबांनी मोठ्याने «अल्लाहु अकबर» म्हटले. नंतर मुस्लिम दोन रांगांत काबाकडे निघाले आणि उघडपणे नमाज़ पढली. इब्न मसऊद (र.अ.) म्हणतात: «उमर (र.अ.) यांच्या इस्लामनंतर आम्ही कायम मान व प्रभुत्वात राहिलो» (सहीह बुखारी). नबी ﷺ यांनी आधीच दुआ केली होती: «हे अल्लाह! अबू जहल किंवा उमर बिन खत्ताब यांपैकी जो तुला अधिक प्रिय असेल त्याच्याद्वारे इस्लामला मान दे» (जामे तिर्मिझी: ३६८१).",
           "सहीह बुखारी: ३६८४; जामे तिर्मिझी: ३६८१; बाकी तपशील: सीरतच्या रिवायती"],
          ["🎯 बोध",
           "हजरत हमझा (र.अ.) यांनी आत्माभिमानाने आणि हजरत उमर (र.अ.) यांनी कुरआनने इस्लाम स्वीकारला. दोघेही शक्तिशाली होते आणि दोघांनी इस्लामला शक्ती दिली. आपण आपली शक्ती दीनासाठी वापरली पाहिजे. हे अल्लाह! आम्हालाही दीनाची सेवा करण्याची तौफीक दे. आमीन.",
           ""]
        ],
        [
          ["हमझा (र.अ.) नबी ﷺ यांचे कोण लागतात?", ["भाऊ", "काका", "आजोबा"]],
          ["सीरतच्या प्रसिद्ध रिवायतीनुसार उमर (र.अ.) यांनी कोणती सूरत ऐकून इस्लाम स्वीकारला?", ["अल-फातिहा", "ता-हा", "यासीन"]],
          ["उमर (र.अ.) यांचे विशेषण?", ["सिद्दीक", "फारूक", "झुन्नूरैन"]]
        ],
        [
          ["इ.स. सु. ६१६", "हमझा (र.अ.) यांचा इस्लाम"],
          ["इ.स. ६१६", "उमर (र.अ.) यांचा इस्लाम"],
          ["इ.स. ६१६", "काबामध्ये खुली नमाज़"]
        ]
      ],
      ar: [
        "إسلام حمزة وعمر رضي الله عنهما — قوة تزداد",
        "مكة",
        "616 م (السنة السادسة من النبوة)",
        "فهم قصة ازدياد قوة المسلمين بإسلام رفيقين قويين.",
        "لما سمع عمر رضي الله عنه القرآن قال: «ما أحسن هذه الكلام» — وهذه قوة القرآن. اللهم ارزقنا حب القرآن. آمين.",
        [
          "حمزة رضي الله عنه: عم النبي ﷺ",
          "حمزة رضي الله عنه ضرب أبا جهل بالقوس على رأسه",
          "عمر رضي الله عنه أسلم بسماع سورة طه في رواية السيرة المشهورة",
          "كلاهما قوّى الإسلام",
          "بدأت الصلاة علنًا"
        ],
        [
          ["🦁 إسلام حمزة رضي الله عنه — حميّة",
           "كان حمزة رضي الله عنه عم النبي ﷺ، شجاعًا محبًّا للصيد. فلما رجع من صيده يومًا أُخبر أن أبا جهل شتم ابن أخيه ﷺ وآذاه عند الصفا. فذهب حمزة رضي الله عنه مغضبًا إلى المسجد الحرام، وضرب أبا جهل بالقوس على رأسه وقال: «أتشتم محمدًا ﷺ؟ أنا على دينه، أقول ما يقول — فإن استطعت أن تمنعني فافعل». ثم شرح الله صدره للإسلام فثبت عليه (ابن إسحاق، المستدرك للحاكم). بدأ الأمر بحميّة فجعله الله إيمانًا.",
           "رواية سيرة — سيرة ابن هشام؛ المستدرك للحاكم (وفي الإسناد كلام)"],
          ["🦁 أثر إسلام حمزة رضي الله عنه",
           "شقّ إسلام حمزة رضي الله عنه قريشًا شقًّا كبيرًا. وكان شجاعًا قويًّا، فبدأت قريش تحذر في إيذاء النبي ﷺ، وتقوّى المسلمون.",
           ""],
          ["💪 إسلام عمر رضي الله عنه — قوة القرآن",
           "كان عمر رضي الله عنه (قبل إسلامه) شديدًا شجاعًا، لكنه من أشد المعارضين. خرج يومًا بسيفه ليقتل النبي ﷺ، فلقيَه نعيم بن عبد الله فقال: «ارجع إلى أهل بيتك، فقد أسلمت أختك فاطمة وزوجها سعيد». فذهب عمر رضي الله عنه مغضبًا إلى بيت أخته وهما يقرآن القرآن. فضربهما، ثم طلب الصحيفة: «أروني ما هذا؟» فقالت أخته: «إنك نجس، وهذا طاهر، لا أعطيكه». فاغتسل وقرأ (صدر سورة طه). ثم قال: «ما أحسن هذا الكلام، من جاء به؟» قالت: «محمد ﷺ». فأخذ سيفه وذهب إلى النبي ﷺ. (وهذه رواية السيرة المشهورة؛ وفي رواية أخرى أنه سمع سورة الحاقة من النبي ﷺ.)",
           "رواية سيرة — سيرة ابن هشام؛ سنن الدارقطني (وفي الإسناد كلام)؛ رواية سورة الحاقة: مسند أحمد (إسناد ضعيف)"],
          ["💥 إعلان عمر رضي الله عنه",
           "كان النبي ﷺ في دار الأرقم مع أصحابه. فجاء عمر رضي الله عنه إلى الباب، فقال حمزة رضي الله عنه: «ائذن له؛ إن كان جاء بخير فهو ذاك، وإن كان جاء بشرّ قتلتُه بسيفه». فأخذه النبي ﷺ بجُمَّته وقال: «يا ابن الخطاب، أما تنتهي؟» فقال عمر رضي الله عنه في الحال: «أشهد أن لا إله إلا الله وأنك رسول الله». فكبّر الصحابة رضي الله عنهم تكبيرًا عظيمًا. ثم خرج المسلمون في صفين إلى الكعبة فصلّوا علانية. قال ابن مسعود رضي الله عنه: «ما زلنا أعزة منذ أسلم عمر» (صحيح البخاري). وقد دعا النبي ﷺ قبل ذلك: «اللهم أعزّ الإسلام بأحب الرجلين إليك: أبي جهل أو عمر بن الخطاب» (جامع الترمذي: 3681).",
           "صحيح البخاري: 3684؛ جامع الترمذي: 3681؛ وبقية التفصيل: روايات السيرة"],
          ["🎯 العبرة",
           "أسلم حمزة رضي الله عنه بحميّة، وأسلم عمر رضي الله عنه بالقرآن. وكلاهما كان قويًّا، وكلاهما قوّى الإسلام. فعلينا أن نستعمل قوتنا في الدين. اللهم وفقنا لخدمة دينك. آمين.",
           ""]
        ],
        [
          ["ما قرابة حمزة رضي الله عنه للنبي ﷺ؟", ["أخوه", "عمه", "جده"]],
          ["بأي سورة أسلم عمر رضي الله عنه في رواية السيرة المشهورة؟", ["الفاتحة", "طه", "يس"]],
          ["ما لقب عمر رضي الله عنه؟", ["الصديق", "الفاروق", "ذو النورين"]]
        ],
        [
          ["نحو 616", "إسلام حمزة رضي الله عنه"],
          ["616", "إسلام عمر رضي الله عنه"],
          ["616", "الصلاة علنًا في الكعبة"]
        ]
      ],
      fr: [
        "L'islam de Hamza et de 'Umar (qu'Allah les agrée) — la force s'accroît",
        "La Mecque",
        "616 (6e année de la prophétie)",
        "Comprendre l'épisode de l'accroissement de la force des musulmans par l'islam de deux compagnons puissants.",
        "En entendant le Coran, 'Umar (qu'Allah l'agrée) dit : « Que ces paroles sont belles ! » — c'est là la force du Coran. Ô Allah ! Accorde-nous l'amour du Coran. Âmîn.",
        [
          "Hamza (qu'Allah l'agrée) : oncle du Prophète ﷺ",
          "Hamza (qu'Allah l'agrée) frappa Abou Jahl de son arc sur la tête",
          "'Umar (qu'Allah l'agrée) embrassa l'islam en entendant sourate Tâ-Hâ selon le récit célèbre",
          "Tous deux fortifièrent l'islam",
          "La prière devint publique"
        ],
        [
          ["🦁 L'islam de Hamza (qu'Allah l'agrée) — l'ardeur",
           "Hamza (qu'Allah l'agrée), oncle du Prophète ﷺ, était brave et aimait la chasse. Un jour, revenant de la chasse, il apprit qu'Abou Jahl avait insulté et maltraité le fils de son frère ﷺ près de Safâ. Hamza (qu'Allah l'agrée) se rendit furieux à la Mosquée sacrée, frappa Abou Jahl de son arc sur la tête et dit : « Tu insultes Mouhammad ﷺ ? Je suis de sa religion, je dis ce qu'il dit — si tu peux m'en empêcher, essaie. » Puis Allah ouvrit son cœur à l'islam et il s'y tint fermement (Ibn Ishâq, al-Moustadrak d'al-Hâkim). Cela commença par l'ardeur, et Allah en fit la foi.",
           "Récit de Sîra — Sîra d'Ibn Hichâm ; al-Moustadrak d'al-Hâkim (chaîne discutée)"],
          ["🦁 L'effet de l'islam de Hamza (qu'Allah l'agrée)",
           "L'islam de Hamza (qu'Allah l'agrée) affligea profondément les Quraysh. Il était brave et puissant, aussi les Quraysh commencèrent-ils à se montrer prudents en persécutant le Prophète ﷺ, et les musulmans furent fortifiés.",
           ""],
          ["💪 L'islam de 'Umar (qu'Allah l'agrée) — la force du Coran",
           "'Umar (qu'Allah l'agrée), avant l'islam, était très dur, brave, mais un opposant acharné. Un jour il partit, son épée à la main, pour tuer le Prophète ﷺ. En chemin, Nou'aym ibn 'Abdoullah lui dit : « Va d'abord chez toi : ta sœur Fâtima et son mari Sa'îd ont embrassé l'islam. » 'Umar (qu'Allah l'agrée) se rendit furieux chez sa sœur, qui lisait le Coran. Il la frappa, puis demanda la feuille : « Montrez-moi ce que c'est. » Elle dit : « Tu es impur ; ceci est pur, je ne peux pas te le donner. » Il se lava, puis lut (le début de sourate Tâ-Hâ). Après avoir lu, il dit : « Que ces paroles sont belles ! Qui les a apportées ? » Elle dit : « Mouhammad ﷺ. » Il prit son épée et alla vers le Prophète ﷺ. (C'est le récit de Sîra célèbre ; un autre récit dit que 'Umar avait entendu sourate al-Hâqqa du Prophète ﷺ.)",
           "Récit de Sîra — Sîra d'Ibn Hichâm ; Sunan ad-Dâraqoutnî (chaîne discutée) ; le récit d'al-Hâqqa : Mousnad Ahmad (chaîne faible)"],
          ["💥 La déclaration de 'Umar (qu'Allah l'agrée)",
           "Le Prophète ﷺ était à la maison d'al-Arqam avec les Compagnons. 'Umar (qu'Allah l'agrée) vint à la porte ; Hamza (qu'Allah l'agrée) dit : « Laisse-le entrer : s'il vient avec du bien, c'est cela ; s'il vient avec du mal, je le tue de son propre sabre. » Le Prophète ﷺ le saisit par son vêtement et dit : « Ô Ibn al-Khattâb ! Ne vas-tu pas cesser ? » 'Umar (qu'Allah l'agrée) dit aussitôt : « J'atteste qu'il n'y a de divinité qu'Allah et que tu es le Messager d'Allah. » Les Compagnons proclamèrent alors un grand takbîr. Puis les musulmans sortirent en deux rangs vers la Kaaba et prièrent ouvertement. Ibn Mas'oûd (qu'Allah l'agrée) dit : « Nous sommes restés puissants depuis l'islam de 'Umar » (Sahih al-Bukhari). Le Prophète ﷺ avait déjà invoqué : « Ô Allah ! Honore l'islam par celui que Tu aimes le plus des deux hommes : Abou Jahl ou 'Umar ibn al-Khattâb » (Jâmi' at-Tirmidhi : 3681).",
           "Sahih al-Bukhari : 3684 ; Jâmi' at-Tirmidhi : 3681 ; le reste : récits de Sîra"],
          ["🎯 La leçon",
           "Hamza (qu'Allah l'agrée) embrassa l'islam par ardeur, 'Umar (qu'Allah l'agrée) par le Coran. Tous deux étaient forts, tous deux fortifièrent l'islam. Nous devons employer notre force pour la religion. Ô Allah ! Accorde-nous de servir Ta religion. Âmîn.",
           ""]
        ],
        [
          ["Quel est le lien de Hamza (qu'Allah l'agrée) avec le Prophète ﷺ ?", ["Son frère", "Son oncle", "Son grand-père"]],
          ["Quelle sourate fit embrasser l'islam à 'Umar (qu'Allah l'agrée) selon le récit célèbre ?", ["Al-Fâtiha", "Tâ-Hâ", "Yâ-Sîn"]],
          ["Quel est le surnom de 'Umar (qu'Allah l'agrée) ?", ["As-Siddîq", "Al-Fâroûq", "Dhou-n-Noûrayn"]]
        ],
        [
          ["~616", "Islam de Hamza (qu'Allah l'agrée)"],
          ["616", "Islam de 'Umar (qu'Allah l'agrée)"],
          ["616", "Prière publique dans la Kaaba"]
        ]
      ],
      es: [
        "El islam de Hamza y Umar (que Alá esté complacido con ellos): la fuerza crece",
        "La Meca",
        "616 (año 6 de la profecía)",
        "Comprender el episodio del aumento de la fuerza de los musulmanes con el islam de dos compañeros poderosos.",
        "Al oír el Corán, Umar (que Alá esté complacido con él) dijo: «¡Qué hermosas palabras!» Ese es el poder del Corán. ¡Oh Alá! Concédenos el amor al Corán. Amín.",
        [
          "Hamza (que Alá esté complacido con él): tío del Profeta ﷺ",
          "Hamza (que Alá esté complacido con él) golpeó a Abu Yahal con su arco en la cabeza",
          "Umar (que Alá esté complacido con él) abrazó el islam al oír la sura Ta-Ha según el relato famoso",
          "Ambos fortalecieron el islam",
          "La oración se hizo pública"
        ],
        [
          ["🦁 El islam de Hamza (que Alá esté complacido con él): el ardor",
           "Hamza (que Alá esté complacido con él), tío del Profeta ﷺ, era valiente y aficionado a la caza. Un día, al volver de cazar, le dijeron que Abu Yahal había insultado y maltratado al hijo de su hermano ﷺ junto a Safa. Hamza (que Alá esté complacido con él) fue furioso a la Mezquita Sagrada, golpeó a Abu Yahal con su arco en la cabeza y dijo: «¿Insultas a Muhámmad ﷺ? Yo estoy en su religión, digo lo que él dice; si puedes impedírmelo, inténtalo.» Después Alá abrió su corazón al islam y se mantuvo firme en él (Ibn Ishaq, al-Mustadrak de al-Hakim). Comenzó por el ardor y Alá lo convirtió en fe.",
           "Relato de Sira: Sira de Ibn Hisham; al-Mustadrak de al-Hakim (cadena discutida)"],
          ["🦁 El efecto del islam de Hamza (que Alá esté complacido con él)",
           "El islam de Hamza (que Alá esté complacido con él) afligió profundamente a los Quraysh. Era valiente y poderoso, así que los Quraysh comenzaron a ser cautos al perseguir al Profeta ﷺ, y los musulmanes se fortalecieron.",
           ""],
          ["💪 El islam de Umar (que Alá esté complacido con él): la fuerza del Corán",
           "Umar (que Alá esté complacido con él), antes del islam, era muy duro, valiente, pero un opositor acérrimo. Un día salió con su espada para matar al Profeta ﷺ. En el camino, Nuaym ibn Abdalah le dijo: «Ve primero a tu casa: tu hermana Fatima y su esposo Said han abrazado el islam.» Umar (que Alá esté complacido con él) fue furioso a casa de su hermana, que estaba leyendo el Corán. La golpeó y luego pidió la hoja: «Muéstrame qué es.» Ella dijo: «Estás impuro; esto es puro, no puedo dártelo.» Se lavó y leyó (el comienzo de la sura Ta-Ha). Tras leer dijo: «¡Qué hermosas palabras! ¿Quién las trajo?» Ella dijo: «Muhámmad ﷺ.» Tomó su espada y fue hacia el Profeta ﷺ. (Este es el relato famoso de la Sira; otro relato dice que Umar había oído la sura al-Haqqa del Profeta ﷺ.)",
           "Relato de Sira: Sira de Ibn Hisham; Sunan ad-Daraqutni (cadena discutida); el relato de al-Haqqa: Musnad Ahmad (cadena débil)"],
          ["💥 La declaración de Umar (que Alá esté complacido con él)",
           "El Profeta ﷺ estaba en la casa de al-Arqam con los Compañeros. Umar (que Alá esté complacido con él) llegó a la puerta; Hamza (que Alá esté complacido con él) dijo: «Dejadle entrar: si viene con bien, es eso; si viene con mal, lo mato con su propia espada.» El Profeta ﷺ lo tomó por su ropa y dijo: «¡Oh Ibn al-Jattab! ¿No vas a cesar?» Umar (que Alá esté complacido con él) dijo de inmediato: «Atestiguo que no hay divinidad sino Alá y que tú eres el Mensajero de Alá.» Los Compañeros pronunciaron entonces un gran takbir. Luego los musulmanes salieron en dos filas hacia la Kaaba y rezaron abiertamente. Ibn Masud (que Alá esté complacido con él) dijo: «Hemos permanecido poderosos desde el islam de Umar» (Sahih al-Bujari). El Profeta ﷺ ya había suplicado: «¡Oh Alá! Honra el islam con el que más ames de estos dos hombres: Abu Yahal o Umar ibn al-Jattab» (Yami at-Tirmidhi: 3681).",
           "Sahih al-Bujari: 3684; Yami at-Tirmidhi: 3681; el resto: relatos de Sira"],
          ["🎯 La lección",
           "Hamza (que Alá esté complacido con él) abrazó el islam por ardor y Umar (que Alá esté complacido con él) por el Corán. Ambos eran fuertes y ambos fortalecieron el islam. Debemos emplear nuestra fuerza por la religión. ¡Oh Alá! Concédenos servir Tu religión. Amín.",
           ""]
        ],
        [
          ["¿Qué parentesco tiene Hamza (que Alá esté complacido con él) con el Profeta ﷺ?", ["Su hermano", "Su tío", "Su abuelo"]],
          ["¿Qué sura hizo que Umar (que Alá esté complacido con él) abrazara el islam según el relato famoso?", ["Al-Fatiha", "Ta-Ha", "Ya-Sin"]],
          ["¿Cuál es el apelativo de Umar (que Alá esté complacido con él)?", ["As-Siddiq", "Al-Faruq", "Du-n-Nurayn"]]
        ],
        [
          ["~616", "Islam de Hamza (que Alá esté complacido con él)"],
          ["616", "Islam de Umar (que Alá esté complacido con él)"],
          ["616", "Oración pública en la Kaaba"]
        ]
      ]
    },

    /* ═══════════════ DAY 11 — Boycott of Shib-e-Abi Talib ═══════════════ */
    11: {
      mr: [
        "शिबे-अबी तालिबची नाकेबंदी — ३ वर्षांची बहिष्कार",
        "शिबे-अबी तालिब",
        "इ.स. ६१७-६१९ (नबवी ७-१०)",
        "३ वर्षांची कठोर नाकेबंदी, मुस्लिम व बनू हाशिमच्या कुर्बान्या समजून घेणे.",
        "३ वर्षांचा शिब, ३ वर्षांचा संयम, ३ वर्षांची कुर्बानी. हे अल्लाह! आम्हालाही संयम धरणारे बनव आणि या कुर्बान्यांचे कृतज्ञता व्यक्त करणारे बनव. आमीन.",
        [
          "३ वर्षांची नाकेबंदी",
          "शिबे-अबी तालिबमध्ये वेढा",
          "मुले भुकेने रडत",
          "पाने व सुकलेले चाम खाण्याची वेळ आली",
          "दीमकने करार खाल्ला",
          "खदीजा (र.अ.) यांचा माल सत्याच्या मार्गात खर्च"
        ],
        [
          ["📜 करार",
           "मुस्लिमांची वाढती शक्ती आणि हबशातील त्यांचा आश्रय पाहून कुरैशचे सरदार घाबरले. त्यांनी एक करार लिहिला: «बनू हाशिम व बनू मुत्तलिबशी कोणताही व्यवहार नाही, कोणतेही लग्न नाही, कोणतेही खाणे-पिणे नाही, कोणतीही खरेदी-विक्री नाही, जोपर्यंत हे मुहम्मद ﷺ यांना आमच्या स्वाधीन करत नाहीत.» हा करार काबाच्या पडद्यात लटकवला गेला.",
           "सहीह बुखारी: १५९०; सहीह मुस्लिम: १३१४ (कुरैशचा बनू हाशिमविरुद्धचा करार); तपशील: सीरतच्या रिवायती"],
          ["😢 ३ वर्षांची कैद",
           "अबू तालिब यांनी बनू हाशिम व बनू मुत्तलिब यांना शिबे-अबी तालिब (डोंगरातील एक दरी) मध्ये एकत्र केले. सुमारे ३ वर्षे ते वेढलेले राहिले. खायला फार कमी मिळत असे; भुकेच्या तीव्रतेने मुलांच्या रडण्याचा आवाज दरीबाहेरही ऐकू येत असे. रिवायतींमध्ये येते की पाने व सुकलेले चाम खाण्याची वेळ आली. कधी एखादा दयाळू नातेवाईक (जसे हकीम बिन हिझाम) चोरून काही धान्य पोहोचवत असे. हजच्या पवित्र महिन्यांशिवाय ते दरीतून बाहेरही पडू शकत नव्हते.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🪵 करार खाणे",
           "रिवायतींनुसार नबी ﷺ यांनी अबू तालिबला सांगितले: «अल्लाहने दीमक पाठवला, त्याने करारातील अत्याचार व नातेछेदाचे लिखाण खाल्ले, फक्त अल्लाहचे नाव राहिले.» अबू तालिब कुरैशला म्हणाले: «जर माझा भाचा सत्यवादी असेल तर हा जुलमी बहिष्कार थांबवा, आणि जर खोटा असेल तर मी त्याला तुमच्या स्वाधीन करीन.» करार काढला असता बाब तशीच निघाली. नंतर कुरैशमधील काही सद्सद्विवेकबुद्धीच्या लोकांनी (हिशाम बिन अम्र, झुहैर बिन अबी उमय्या, मुतइम बिन अदी इ.) हा बहिष्कार मिटवला. (ही घटना सीरत इब्न इशाकची रिवायत आहे.)",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["💔 मुस्लिमांचा संयम",
           "३ वर्षांच्या या परीक्षेत मुस्लिमांनी अद्वितीय संयम केला. मुलांची भूक व त्रास असूनही ते ईमानावर ठाम राहिले. हजरत खदीजा (र.अ.) यांनी आपला बराच माल या मार्गात खर्च केला आणि कधीही तक्रार केली नाही. अबू तालिब यांनी इस्लाम स्वीकारला नाही, पण भाच्याच्या संरक्षणावर ठाम राहिले.",
           ""],
          ["🎯 बोध",
           "३ वर्षांची कैद, खायला पाने, मुलांचे रडणे — या कुर्बान्या पाहून डोळे भरून येतात. आपण या कुर्बान्या लक्षात ठेवल्या पाहिजेत आणि आपल्या सोप्या दिवसांतही कृतज्ञता व्यक्त केली पाहिजे.",
           ""]
        ],
        [
          ["बहिष्कार किती वर्षे राहिला?", ["२", "३", "५"]],
          ["करार कोणी खाल्ला?", ["दीमक", "उंदीर", "कीटक"]],
          ["मुस्लिम कुठे कैद होते?", ["शिबे-अबी तालिब", "हिरा गुहा", "दारुल-अरकम"]]
        ],
        [
          ["इ.स. ६१७", "करार व बहिष्कार"],
          ["इ.स. ६१९", "दीमकने करार खाल्ला"],
          ["इ.स. ६१९", "बहिष्काराची समाप्ती"]
        ]
      ],
      ar: [
        "مقاطعة شعب أبي طالب — ثلاث سنين من الحصار",
        "شعب أبي طالب",
        "617-619 م (7-10 من النبوة)",
        "فهم الحصار الشديد ثلاث سنين، وتضحيات المسلمين وبني هاشم.",
        "ثلاث سنين في الشعب، وثلاث سنين من الصبر، وثلاث سنين من التضحية. اللهم اجعلنا من الصابرين الشاكرين لهذه التضحيات. آمين.",
        [
          "حصار ثلاث سنين",
          "محصورون في شعب أبي طالب",
          "الأطفال يبكون من الجوع",
          "بلغ بهم الأمر أكل الورق والجلد",
          "الأرضة أكلت الصحيفة",
          "خديجة رضي الله عنها بذلت مالها في سبيل الحق"
        ],
        [
          ["📜 الصحيفة",
           "لما رأى سادة قريش قوة المسلمين وتأمينهم في الحبشة جزعوا، فكتبوا صحيفة: «لا نكاح ولا معاملة ولا طعام ولا شراء ولا بيع مع بني هاشم وبني المطلب حتى يسلموا إلينا محمدًا ﷺ». وعُلّقت الصحيفة في ستر الكعبة.",
           "صحيح البخاري: 1590؛ صحيح مسلم: 1314 (عهد قريش على بني هاشم)؛ والتفصيل: روايات السيرة"],
          ["😢 حصار ثلاث سنين",
           "جمع أبو طالب بني هاشم وبني المطلب في شعب أبي طالب (شِعْب بين الجبال). فبقوا محصورين نحو ثلاث سنين. وكان الطعام قليلًا جدًّا، حتى كان يُسمع بكاء الأطفال من شدة الجوع خارج الشعب. وجاء في الروايات أنهم بلغوا أكل الورق والجلد اليابس. وكان بعض ذوي الرحم كحكيم بن حزام يُدخل قليلًا من الطعام خفية. ولم يكن لهم أن يخرجوا من الشعب إلا في الأشهر الحرم.",
           "رواية سيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🪵 أكل الصحيفة",
           "جاء في الروايات أن النبي ﷺ أخبر أبا طالب: «إن الله سلّط الأرضة على الصحيفة فأكلت ما فيها من ظلم وقطيعة رحم، ولم يبقَ إلا اسم الله». فقال أبو طالب لقريش: «إن كان ابن أخي صادقًا فارفعوا هذا الحصار الظالم، وإن كان كاذبًا أسلمته إليكم». فأخرجوا الصحيفة فوجدوا الأمر كما قال. ثم سعى رجال من قريش ذوو ضمير (هشام بن عمرو، وزهير بن أبي أمية، ومطعم بن عدي...) في رفع الحصار. (وهذه القصة من رواية ابن إسحاق.)",
           "رواية سيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["💔 صبر المسلمين",
           "في هذه المحنة ثلاث سنين صبر المسلمون صبرًا عجيبًا. ومع جوع الأطفال وألمهم ثبتوا على الإيمان. وأنفقت خديجة رضي الله عنها كثيرًا من مالها في هذا السبيل ولم تشكُ قط. ولم يُسلم أبو طالب، لكنه ثبت على حماية ابن أخيه.",
           ""],
          ["🎯 العبرة",
           "ثلاث سنين في الشعب، وثلاث سنين من الصبر، وثلاث سنين من التضحية — تُدمع العين. فعلينا أن نتذكر هذه التضحيات ونشكر في أيامنا الهيّنة.",
           ""]
        ],
        [
          ["كم سنة استمرت المقاطعة؟", ["2", "3", "5"]],
          ["من أكل الصحيفة؟", ["الأرضة", "الفأر", "الحشرات"]],
          ["أين كان المسلمون محصورين؟", ["شعب أبي طالب", "غار حراء", "دار الأرقم"]]
        ],
        [
          ["617", "الصحيفة والمقاطعة"],
          ["619", "الأرضة أكلت الصحيفة"],
          ["619", "انتهاء المقاطعة"]
        ]
      ],
      fr: [
        "Le boycott du défilé d'Abou Tâlib — trois ans de blocus",
        "Le défilé (shi'b) d'Abou Tâlib",
        "617-619 (7e-10e année de la prophétie)",
        "Comprendre le dur blocus de trois ans et les sacrifices des musulmans et des Banou Hâchim.",
        "Trois ans dans le défilé, trois ans de patience, trois ans de sacrifice. Ô Allah ! Fais de nous des endurants et des reconnaissants de ces sacrifices. Âmîn.",
        [
          "Un blocus de trois ans",
          "Assiégés dans le défilé d'Abou Tâlib",
          "Les enfants pleuraient de faim",
          "On en vint à manger des feuilles et du cuir",
          "Les termites mangèrent l'acte",
          "Khadîja (qu'Allah l'agrée) dépensa ses biens pour la vérité"
        ],
        [
          ["📜 L'acte",
           "Voyant la force croissante des musulmans et leur refuge en Abyssinie, les chefs quraysh s'inquiétèrent. Ils écrivirent un acte : « Ni mariage, ni commerce, ni nourriture, ni achat, ni vente avec les Banou Hâchim et les Banou al-Muttalib, jusqu'à ce qu'ils nous livrent Mouhammad ﷺ. » Cet acte fut suspendu au voile de la Kaaba.",
           "Sahih al-Bukhari : 1590 ; Sahih Muslim : 1314 (le pacte des Quraysh contre les Banou Hâchim) ; détails : récits de Sîra"],
          ["😢 Trois ans de siège",
           "Abou Tâlib rassembla les Banou Hâchim et les Banou al-Muttalib dans le défilé d'Abou Tâlib (une gorge de montagne). Ils y restèrent assiégés environ trois ans. La nourriture était très rare, au point qu'on entendait les pleurs des enfants de faim hors du défilé. Les récits rapportent qu'on en vint à manger des feuilles et du cuir sec. Parfois un proche compatissant (comme Hakîm ibn Hizâm) faisait parvenir un peu de grain en secret. Ils ne pouvaient sortir du défilé qu'aux mois sacrés du pèlerinage.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🪵 L'acte mangé",
           "Les récits rapportent que le Prophète ﷺ informa Abou Tâlib : « Allah a envoyé les termites : elles ont mangé tout ce que l'acte contenait d'injustice et de rupture des liens, et seul le nom d'Allah est resté. » Abou Tâlib dit aux Quraysh : « Si mon neveu est véridique, levez ce blocus injuste ; s'il est menteur, je vous le livrerai. » On sortit l'acte et il en fut ainsi. Puis des hommes de conscience parmi les Quraysh (Hichâm ibn 'Amr, Zouhayr ibn Abî Umayya, Mout'im ibn 'Adî…) firent lever le blocus. (Cet épisode vient du récit d'Ibn Ishâq.)",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["💔 La patience des musulmans",
           "Durant ces trois années d'épreuve, les musulmans firent preuve d'une patience sans exemple. Malgré la faim et la souffrance des enfants, ils tinrent ferme dans la foi. Khadîja (qu'Allah l'agrée) dépensa beaucoup de ses biens dans cette voie et ne se plaignit jamais. Abou Tâlib n'embrassa pas l'islam, mais resta ferme dans la protection de son neveu.",
           ""],
          ["🎯 La leçon",
           "Trois ans dans le défilé, trois ans de patience, trois ans de sacrifice — cela fait monter les larmes. Nous devons garder le souvenir de ces sacrifices et être reconnaissants même dans nos jours faciles.",
           ""]
        ],
        [
          ["Combien d'années dura le blocus ?", ["2", "3", "5"]],
          ["Qui mangea l'acte ?", ["Les termites", "Un rat", "Des insectes"]],
          ["Où les musulmans étaient-ils assiégés ?", ["Le défilé d'Abou Tâlib", "La grotte de Hirâ'", "La maison d'al-Arqam"]]
        ],
        [
          ["617", "L'acte et le blocus"],
          ["619", "Les termites mangèrent l'acte"],
          ["619", "Fin du blocus"]
        ]
      ],
      es: [
        "El boicot al desfiladero de Abu Talib: tres años de bloqueo",
        "El desfiladero (shi'b) de Abu Talib",
        "617-619 (años 7 a 10 de la profecía)",
        "Comprender el duro bloqueo de tres años y los sacrificios de los musulmanes y los Banu Hashim.",
        "Tres años en el desfiladero, tres años de paciencia, tres años de sacrificio. ¡Oh Alá! Haznos pacientes y agradecidos de estos sacrificios. Amín.",
        [
          "Un bloqueo de tres años",
          "Sitiados en el desfiladero de Abu Talib",
          "Los niños lloraban de hambre",
          "Se llegó a comer hojas y cuero",
          "Las termitas comieron el documento",
          "Jadiya (que Alá esté complacido con ella) gastó sus bienes por la verdad"
        ],
        [
          ["📜 El documento",
           "Al ver la fuerza creciente de los musulmanes y su refugio en Abisinia, los jefes de Quraysh se alarmaron. Escribieron un documento: «Ni matrimonio, ni trato, ni comida, ni compra, ni venta con los Banu Hashim y los Banu al-Muttalib, hasta que nos entreguen a Muhámmad ﷺ.» El documento fue colgado en el velo de la Kaaba.",
           "Sahih al-Bujari: 1590; Sahih Muslim: 1314 (el pacto de Quraysh contra los Banu Hashim); detalles: relatos de Sira"],
          ["😢 Tres años de asedio",
           "Abu Talib reunió a los Banu Hashim y a los Banu al-Muttalib en el desfiladero de Abu Talib (una garganta de montaña). Permanecíeron sitiados unos tres años. La comida era muy escasa, hasta el punto de que se oían los llantos de los niños de hambre fuera del desfiladero. Los relatos dicen que llegaron a comer hojas y cuero seco. A veces un pariente compasivo (como Hakim ibn Hizam) hacía llegar un poco de grano en secreto. Solo podían salir del desfiladero en los meses sagrados de la peregrinación.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🪵 El documento comido",
           "Los relatos cuentan que el Profeta ﷺ informó a Abu Talib: «Alá ha enviado a las termitas: comieron todo lo que el documento tenía de injusticia y ruptura de lazos, y solo quedó el nombre de Alá.» Abu Talib dijo a los Quraysh: «Si mi sobrino es veraz, levantad este bloqueo injusto; y si es mentiroso, os lo entregaré.» Se sacó el documento y así fue. Luego algunos hombres de conciencia de Quraysh (Hisham ibn Amr, Zuhayr ibn Abi Umayya, Mutim ibn Adi…) hicieron levantar el bloqueo. (Este episodio viene del relato de Ibn Ishaq.)",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["💔 La paciencia de los musulmanes",
           "En esos tres años de prueba los musulmanes mostraron una paciencia sin igual. Pese al hambre y al sufrimiento de los niños, se mantuvieron firmes en la fe. Jadiya (que Alá esté complacido con ella) gastó mucho de sus bienes en este camino y nunca se quejó. Abu Talib no abrazó el islam, pero permaneció firme en proteger a su sobrino.",
           ""],
          ["🎯 La lección",
           "Tres años en el desfiladero, tres años de paciencia, tres años de sacrificio: hace brotar lágrimas. Debemos recordar estos sacrificios y ser agradecidos incluso en nuestros días fáciles.",
           ""]
        ],
        [
          ["¿Cuántos años duró el boicot?", ["2", "3", "5"]],
          ["¿Quién comió el documento?", ["Las termitas", "Una rata", "Insectos"]],
          ["¿Dónde estaban sitiados los musulmanes?", ["El desfiladero de Abu Talib", "La cueva de Hira", "La casa de al-Arqam"]]
        ],
        [
          ["617", "El documento y el boicot"],
          ["619", "Las termitas comieron el documento"],
          ["619", "Fin del boicot"]
        ]
      ]
    },

    /* ═══════════════ DAY 12 — Aamul-huzn ═══════════════ */
    12: {
      mr: [
        "आमुल-हुझ्न — दुःखाचे वर्ष",
        "मक्का",
        "इ.स. ६१९ (नबवी १०)",
        "अबू तालिब व हजरत खदीजा (र.अ.) यांचे निधन, नबी ﷺ यांचे दुःख आणि मुश्रिकांची निर्दयता समजून घेणे.",
        "नबी ﷺ म्हणाले: «खदीजा (र.अ.) तेव्हा ईमान आणल्या जेव्हा लोक कुफ्र करत होते» — हे प्रेम व निष्ठेचे उदाहरण आहे. हे अल्लाह! आम्हालाही अशी निष्ठा दे. आमीन.",
        [
          "आमुल-हुझ्न: नबवी १०",
          "अबू तालिब यांचे निधन",
          "खदीजा (र.अ.) यांचे निधन",
          "खदीजा (र.अ.) यांचे वय: ६५ वर्षे (प्रसिद्ध मत)",
          "नबी ﷺ फार एकटे"
        ],
        [
          ["🖤 आमुल-हुझ्न",
           "नबवी १० मध्ये, एकाच वर्षात दोन मोठे आधार गेले — आधी अबू तालिब (नबी ﷺ यांचे काका, संरक्षक), नंतर हजरत खदीजा (र.अ.) (नबी ﷺ यांच्या पत्नी, शांती व साथीदार). या वर्षाला «आमुल-हुझ्न» म्हणजे दुःखाचे वर्ष म्हणतात. अबू तालिब यांच्या निधनानंतर मुश्रिकांनी नबी ﷺ यांना उघडपणे छळायला सुरुवात केली.",
           ""],
          ["💔 अबू तालिब यांचे निधन",
           "अबू तालिब आजारी पडले. नबी ﷺ त्यांच्याकडे गेले आणि म्हणाले: «काका! «ला इलाहा इल्लल्लाह» म्हणा, हे असे कलिमा आहे ज्याच्याद्वारे मी अल्लाहकडे तुमच्यासाठी साक्ष देऊ शकेन.» तिथे अबू जहल व अब्दुल्लाह बिन अबी उमय्याही होते; ते म्हणाले: «तुम्ही अब्दुलमुत्तलिबचा दीन सोडणार का?» ते पुन्हा पुन्हा हेच म्हणत राहिले, शेवटी अबू तालिब यांनी असे सांगितले की ते अब्दुलमुत्तलिबच्या दीनावर आहेत आणि कलिमा म्हणण्यास नकार दिला (सहीह बुखारी: १३६०, सहीह मुस्लिम: २४). नबी ﷺ म्हणाले: «मला रोखले जाईपर्यंत मी तुमच्यासाठी माफी मागत राहीन.» नंतर ही आयत उतरली: «مَا كَانَ لِلنَّبِيِّ وَالَّذِينَ آمَنُوا أَن يَسْتَغْفِرُوا لِلْمُشْرِكِينَ» (नबी व ईमानवाल्यांना मुश्रिकांसाठी माफी मागणे योग्य नाही) — सूरह अत-तौबा ९:११३. हिदायत अल्लाहच्या हातात आहे: «إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ» (सूरह अल-कसस २८:५६).",
           "सहीह बुखारी: १३६०; सहीह मुस्लिम: २४; कुरआन: ९:११३, २८:५६"],
          ["💔 खदीजा (र.अ.) यांचे निधन",
           "अबू तालिब यांच्या निधनानंतर काहीच काळात (रिवायतींमध्ये तीन दिवसांपासून एक महिन्यापर्यंत फरक येतो) हजरत खदीजा (र.अ.) यांचे निधन झाले — प्रसिद्ध मतानुसार वय वर्षे ६५, आणि त्या नबी ﷺ यांच्यासोबत सुमारे २५ वर्षे राहिल्या. आप ﷺ यांना हा फार मोठा धक्का होता. आप ﷺ यांनी त्यांना जन्नतमध्ये मोत्याच्या पोकळ महालाची (بَيْتٍ مِنْ قَصَبٍ) बुशरत दिली होती (सहीह बुखारी व मुस्लिम). पुढच्या वर्षांतही आप ﷺ त्यांचा वारंवार उल्लेख करत आणि त्यांच्या मैत्रिणींना भेटवस्तू पाठवत. हजरत आयशा (र.अ.) म्हणतात: मी एकदा म्हटले: «जणू जगात खदीजाशिवाय कोणतीही स्त्री नव्हती!» आप ﷺ म्हणाले: «त्या अशा होत्या, अशा होत्या, आणि मला संतती त्यांच्याचपासून मिळाली.» (सहीह बुखारी: ३८१८). दुसऱ्या रिवायतीत आहे: «अल्लाहने मला त्यांच्यापेक्षा चांगली पत्नी दिली नाही: जेव्हा लोकांनी नाकारले तेव्हा त्या माझ्यावर ईमान आणल्या, जेव्हा लोकांनी खोटे ठरवले तेव्हा त्यांनी माझी पुष्टी केली, आणि जेव्हा लोकांनी मला वंचित ठेवले तेव्हा त्यांनी आपल्या मालाने माझी काळजी घेतली.» (मुस्नद अहमद).",
           "सहीह बुखारी: ३८१८, ३८१९; सहीह मुस्लिम: २४३२; मुस्नद अहमद"],
          ["🖤 नबी ﷺ यांचे दुःख",
           "दोन आधार गेले — एक काका जो संरक्षण करत होते आणि एक पत्नी जी मनाला शांती देत होती. नबी ﷺ फार एकटे जाणवत होते. सीरतच्या रिवायतीत आप ﷺ यांचे वचन आहे: «अबू तालिब यांच्या निधनापर्यंत कुरैश मला त्रास देऊ शकले नाहीत जो मला असह्य वाटेल.» एकदा कोण्या अजाण माणसाने आप ﷺ यांच्या डोक्यावर माती टाकली, आप ﷺ यांनी संयम केला. हाच तो काळ होता जेव्हा आप ﷺ यांनी तायफला जाण्याचे ठरवले.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🎯 बोध",
           "अल्लाहने नबी ﷺ यांची परीक्षा घेतली, पण आप ﷺ यांनी तक्रार केली नाही. आपण आपल्या दुःखांत संयम ठेवला पाहिजे आणि अल्लाहवर भरवसा ठेवला पाहिजे. अबू तालिब व खदीजा (र.अ.) यांच्यासारखे आधारही निघून जातात, पण अल्लाहचा आधार कायम राहतो.",
           ""]
        ],
        [
          ["आमुल-हुझ्नचा अर्थ?", ["आनंदाचे वर्ष", "दुःखाचे वर्ष", "युद्धाचे वर्ष"]],
          ["त्याच वर्षी कोण गेले?", ["अबू बक्र व उमर", "अबू तालिब व खदीजा", "हमझा व जाफर"]],
          ["प्रसिद्ध मतानुसार खदीजा (र.अ.) यांचे वय?", ["५०", "६०", "६५"]]
        ],
        [
          ["इ.स. ६१९", "अबू तालिब यांचे निधन"],
          ["इ.स. ६१९", "खदीजा (र.अ.) यांचे निधन"],
          ["इ.स. ६१९", "आमुल-हुझ्न"]
        ]
      ],
      ar: [
        "عام الحزن — سنة الحزن",
        "مكة",
        "619 م (السنة العاشرة من النبوة)",
        "فهم وفاة أبي طالب وخديجة رضي الله عنها، وحزن النبي ﷺ، وقسوة المشركين.",
        "قال النبي ﷺ: «آمنت بي خديجة حين كفر الناس» — وهذا مثال المحبة والوفاء. اللهم ارزقنا مثل هذا الوفاء. آمين.",
        [
          "عام الحزن: السنة العاشرة",
          "وفاة أبي طالب",
          "وفاة خديجة رضي الله عنها",
          "عمر خديجة رضي الله عنها: 65 سنة (المشهور)",
          "النبي ﷺ في وحدة شديدة"
        ],
        [
          ["🖤 عام الحزن",
           "في السنة العاشرة من النبوة ذهب في سنة واحدة سندان كبيران — أولًا أبو طالب (عم النبي ﷺ وحاميه)، ثم خديجة رضي الله عنها (زوج النبي ﷺ وسكنه ورفيقته). وتسمى هذه السنة «عام الحزن». وبعد وفاة أبي طالب بدأ المشركون يؤذون النبي ﷺ علنًا.",
           ""],
          ["💔 وفاة أبي طالب",
           "مرض أبو طالب، فجاءه النبي ﷺ وقال: «يا عمّ، قل: لا إله إلا الله، كلمةً أشهد لك بها عند الله». وكان عنده أبو جهل وعبد الله بن أبي أمية فقالا: «أترغب عن دين عبد المطلب؟» فما زالا يقولان ذلك حتى قال أبو طالب آخر ما قال إنه على دين عبد المطلب، وأبى أن يقول الكلمة (صحيح البخاري: 1360، صحيح مسلم: 24). فقال النبي ﷺ: «لأستغفرنّ لك ما لم أُنهَ عنه». فنزلت: «مَا كَانَ لِلنَّبِيِّ وَالَّذِينَ آمَنُوا أَن يَسْتَغْفِرُوا لِلْمُشْرِكِينَ» — سورة التوبة 9:113. والهداية بيد الله: «إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ» — سورة القصص 28:56.",
           "صحيح البخاري: 1360؛ صحيح مسلم: 24؛ القرآن: 9:113، 28:56"],
          ["💔 وفاة خديجة رضي الله عنها",
           "بعد وفاة أبي طالب بفترة قصيرة (تختلف الروايات بين ثلاثة أيام وشهر) توفيت خديجة رضي الله عنها — في الخامسة والستين على المشهور، وقد عاشت مع النبي ﷺ نحو خمس وعشرين سنة. وكان ذلك مصابًا عظيمًا له ﷺ. وقد بشّرها ﷺ ببيت من قصب في الجنة (صحيح البخاري ومسلم). وظل ﷺ يذكرها في السنين بعدها ويبعث الهدايا إلى صواحباتها. قالت عائشة رضي الله عنها: قلت مرة: «كأن لم تكن في الدنيا امرأة إلا خديجة!» فقال ﷺ: «إنها كانت وكانت، وقد رُزقت منها الولد» (صحيح البخاري: 3818). وفي رواية: «ما أبدلني الله خيرًا منها: آمنت بي حين كفر الناس، وصدّقتني حين كذّبني الناس، وأشركتني في مالها حين حرمني الناس» (مسند أحمد).",
           "صحيح البخاري: 3818، 3819؛ صحيح مسلم: 2432؛ مسند أحمد"],
          ["🖤 حزن النبي ﷺ",
           "ذهب سندان: عم يحميه، وزوجة تسكن قلبه. فشعر ﷺ بوحدة شديدة. وجاء في روايات السيرة قوله ﷺ: «ما زالت قريش تمنعني حتى مات أبو طالب من أذىً أكرهه». ووضع رجل جاهل يومًا ترابًا على رأسه ﷺ فصبر. وفي ذلك الوقت قرر ﷺ الخروج إلى الطائف.",
           "رواية سيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🎯 العبرة",
           "ابتلى الله نبيه ﷺ فلم يشكُ. فعلينا أن نصبر في أحزاننا ونتوكل على الله. فأمثال أبي طالب وخديجة رضي الله عنها من الأسناد تذهب، أما سند الله فيبقى.",
           ""]
        ],
        [
          ["ما معنى عام الحزن؟", ["سنة الفرح", "سنة الحزن", "سنة الحرب"]],
          ["من توفي في تلك السنة؟", ["أبو بكر وعمر", "أبو طالب وخديجة", "حمزة وجعفر"]],
          ["كم كان عمر خديجة رضي الله عنها على المشهور؟", ["50", "60", "65"]]
        ],
        [
          ["619", "وفاة أبي طالب"],
          ["619", "وفاة خديجة رضي الله عنها"],
          ["619", "عام الحزن"]
        ]
      ],
      fr: [
        "L'année de la tristesse (Âm al-Houzn)",
        "La Mecque",
        "619 (10e année de la prophétie)",
        "Comprendre la mort d'Abou Tâlib et de Khadîja (qu'Allah l'agrée), la tristesse du Prophète ﷺ et la dureté des polythéistes.",
        "Le Prophète ﷺ dit : « Khadîja crut en moi quand les gens mécroyaient » — c'est l'exemple de l'amour et de la fidélité. Ô Allah ! Accorde-nous une telle fidélité. Âmîn.",
        [
          "Âm al-Houzn : 10e année",
          "Mort d'Abou Tâlib",
          "Mort de Khadîja (qu'Allah l'agrée)",
          "Âge de Khadîja (qu'Allah l'agrée) : 65 ans (avis célèbre)",
          "Le Prophète ﷺ très seul"
        ],
        [
          ["🖤 L'année de la tristesse",
           "En la 10e année de la prophétie, deux grands appuis disparurent en une seule année — d'abord Abou Tâlib (l'oncle et protecteur du Prophète ﷺ), puis Khadîja (qu'Allah l'agrée), son épouse, sa quiétude et sa compagne. Cette année est appelée « Âm al-Houzn », l'année de la tristesse. Après la mort d'Abou Tâlib, les polythéistes commencèrent à persécuter ouvertement le Prophète ﷺ.",
           ""],
          ["💔 La mort d'Abou Tâlib",
           "Abou Tâlib tomba malade. Le Prophète ﷺ vint à lui et dit : « Mon oncle ! Dis : "Lâ ilâha illallâh", une parole par laquelle je témoignerai pour toi auprès d'Allah. » Abou Jahl et 'Abdoullah ibn Abî Umayya étaient là et dirent : « Renierais-tu la religion d''Abd al-Muttalib ? » Ils répétèrent cela, jusqu'à ce qu'Abou Tâlib dise enfin qu'il était sur la religion d''Abd al-Muttalib, et il refusa de prononcer la parole (Sahih al-Bukhari : 1360, Sahih Muslim : 24). Le Prophète ﷺ dit : « Je demanderai pardon pour toi tant qu'on ne me l'interdira pas. » Puis descendit : « مَا كَانَ لِلنَّبِيِّ وَالَّذِينَ آمَنُوا أَن يَسْتَغْفِرُوا لِلْمُشْرِكِينَ » — sourate at-Tawba 9:113. La guidée est entre les mains d'Allah : « إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ » — sourate al-Qasas 28:56.",
           "Sahih al-Bukhari : 1360 ; Sahih Muslim : 24 ; Coran : 9:113, 28:56"],
          ["💔 La mort de Khadîja (qu'Allah l'agrée)",
           "Peu après la mort d'Abou Tâlib (les récits varient de trois jours à un mois), Khadîja (qu'Allah l'agrée) mourut — à soixante-cinq ans selon l'avis célèbre — après avoir vécu environ vingt-cinq ans avec le Prophète ﷺ. Ce fut pour lui ﷺ un choc immense. Il ﷺ lui avait annoncé un palais de perles creuses au Paradis (Sahih al-Bukhari et Muslim). Dans les années suivantes, il ﷺ la mentionnait souvent et envoyait des cadeaux à ses amies. 'Â'icha (qu'Allah l'agrée) dit : « Je dis un jour : on dirait qu'il n'y avait au monde d'autre femme que Khadîja ! » Il ﷺ dit : « Elle était telle et telle, et c'est d'elle que j'ai eu des enfants. » (Sahih al-Bukhari : 3818). Dans un autre récit : « Allah ne m'a pas donné de meilleure épouse qu'elle : elle crut en moi quand les gens mécroyaient, elle me crut quand les gens me traitaient de menteur, et elle m'associa à ses biens quand les gens me privaient. » (Mousnad Ahmad).",
           "Sahih al-Bukhari : 3818, 3819 ; Sahih Muslim : 2432 ; Mousnad Ahmad"],
          ["🖤 La tristesse du Prophète ﷺ",
           "Deux appuis disparurent : un oncle qui protégeait et une épouse qui apaisait le cœur. Le Prophète ﷺ se sentit très seul. Un récit de Sîra rapporte sa parole : « Les Quraysh ne purent me nuire d'une manière qui me déplût qu'après la mort d'Abou Tâlib. » Un jour, un ignorant jeta de la terre sur sa tête ﷺ ; il patienta. C'est alors qu'il ﷺ décida d'aller à Tâ'if.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🎯 La leçon",
           "Allah éprouva Son Prophète ﷺ, mais il ne se plaignit pas. Nous devons être patients dans nos tristesses et faire confiance à Allah. Des appuis comme Abou Tâlib et Khadîja (qu'Allah l'agrée) passent, mais l'appui d'Allah demeure.",
           ""]
        ],
        [
          ["Que signifie Âm al-Houzn ?", ["L'année de la joie", "L'année de la tristesse", "L'année de la guerre"]],
          ["Qui mourut cette même année ?", ["Abou Bakr et 'Umar", "Abou Tâlib et Khadîja", "Hamza et Ja'far"]],
          ["Quel âge avait Khadîja (qu'Allah l'agrée) selon l'avis célèbre ?", ["50", "60", "65"]]
        ],
        [
          ["619", "Mort d'Abou Tâlib"],
          ["619", "Mort de Khadîja (qu'Allah l'agrée)"],
          ["619", "L'année de la tristesse"]
        ]
      ],
      es: [
        "El año de la tristeza (Am al-Huzn)",
        "La Meca",
        "619 (año 10 de la profecía)",
        "Comprender la muerte de Abu Talib y de Jadiya (que Alá esté complacido con ella), la tristeza del Profeta ﷺ y la dureza de los idólatras.",
        "El Profeta ﷺ dijo: «Jadiya creyó en mí cuando la gente negaba»; es el ejemplo del amor y la fidelidad. ¡Oh Alá! Concédenos tal fidelidad. Amín.",
        [
          "Am al-Huzn: año 10",
          "Muerte de Abu Talib",
          "Muerte de Jadiya (que Alá esté complacido con ella)",
          "Edad de Jadiya (que Alá esté complacido con ella): 65 años (opinión famosa)",
          "El Profeta ﷺ muy solo"
        ],
        [
          ["🖤 El año de la tristeza",
           "En el año 10 de la profecía desaparecieron en un solo año dos grandes apoyos: primero Abu Talib (tío y protector del Profeta ﷺ) y luego Jadiya (que Alá esté complacido con ella), su esposa, su quietud y su compañera. A ese año se le llama «Am al-Huzn», el año de la tristeza. Tras la muerte de Abu Talib, los idólatras comenzaron a perseguir abiertamente al Profeta ﷺ.",
           ""],
          ["💔 La muerte de Abu Talib",
           "Abu Talib enfermó. El Profeta ﷺ vino a él y dijo: «¡Tío! Di: "La ilaha illa Alá", una palabra con la que testificaré por ti ante Alá.» Estaban allí Abu Yahal y Abdalah ibn Abi Umayya, que dijeron: «¿Renunciarías a la religión de Abd al-Muttalib?» Repitieron esto hasta que Abu Talib dijo por último que estaba en la religión de Abd al-Muttalib, y se negó a pronunciar la palabra (Sahih al-Bujari: 1360; Sahih Muslim: 24). El Profeta ﷺ dijo: «Pediré perdón por ti mientras no se me prohíba.» Luego descendió: «مَا كَانَ لِلنَّبِيِّ وَالَّذِينَ آمَنُوا أَن يَسْتَغْفِرُوا لِلْمُشْرِكِينَ» — sura at-Tawba 9:113. La guía está en manos de Alá: «إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ» — sura al-Qasas 28:56.",
           "Sahih al-Bujari: 1360; Sahih Muslim: 24; Corán: 9:113, 28:56"],
          ["💔 La muerte de Jadiya (que Alá esté complacido con ella)",
           "Poco después de la muerte de Abu Talib (los relatos varían entre tres días y un mes) falleció Jadiya (que Alá esté complacido con ella), a los sesenta y cinco años según la opinión famosa, tras vivir unos veinticinco años con el Profeta ﷺ. Fue para él ﷺ un golpe inmenso. Él ﷺ le había anunciado un palacio de perlas huecas en el Paraíso (Sahih al-Bujari y Muslim). En los años siguientes él ﷺ la recordaba a menudo y enviaba regalos a sus amigas. Aisha (que Alá esté complacido con ella) dijo: «Dije un día: ¡como si en el mundo no hubiera otra mujer que Jadiya!» Él ﷺ dijo: «Ella era así y así, y de ella tuve hijos.» (Sahih al-Bujari: 3818). En otro relato: «Alá no me dio mejor esposa que ella: creyó en mí cuando la gente negaba, me creyó cuando me llamaban mentiroso y me asoció a sus bienes cuando la gente me privaba.» (Musnad Ahmad).",
           "Sahih al-Bujari: 3818, 3819; Sahih Muslim: 2432; Musnad Ahmad"],
          ["🖤 La tristeza del Profeta ﷺ",
           "Se fueron dos apoyos: un tío que protegía y una esposa que daba sosiego al corazón. El Profeta ﷺ se sintió muy solo. Un relato de Sira recoge su dicho: «Los Quraysh no pudieron hacerme daño que me desagradara hasta la muerte de Abu Talib.» Un día un ignorante echó tierra sobre su cabeza ﷺ y él tuvo paciencia. Entonces decidió ﷺ ir a Taif.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🎯 La lección",
           "Alá probó a Su Profeta ﷺ y él no se quejó. Debemos ser pacientes en nuestras tristezas y confiar en Alá. Apoyos como Abu Talib y Jadiya (que Alá esté complacido con ella) se van, pero el apoyo de Alá permanece.",
           ""]
        ],
        [
          ["¿Qué significa Am al-Huzn?", ["El año de la alegría", "El año de la tristeza", "El año de la guerra"]],
          ["¿Quiénes murieron ese mismo año?", ["Abu Bakr y Umar", "Abu Talib y Jadiya", "Hamza y Yafar"]],
          ["¿Qué edad tenía Jadiya (que Alá esté complacido con ella) según la opinión famosa?", ["50", "60", "65"]]
        ],
        [
          ["619", "Muerte de Abu Talib"],
          ["619", "Muerte de Jadiya (que Alá esté complacido con ella)"],
          ["619", "El año de la tristeza"]
        ]
      ]
    },

    /* ═══════════════ DAY 13 — Taif ka safar ═══════════════ */
    13: {
      mr: [
        "तायफचा प्रवास — रक्ताने माखलेले पाय, शत्रूंसाठी दुआ",
        "तायफ",
        "इ.स. ६१९ (नबवी १०)",
        "नबी ﷺ यांचा तायफचा प्रवास, छळ आणि शत्रूंसाठी दुआ केल्याची घटना समजून घेणे.",
        "दगड पडत होते, पाय रक्ताने भरले, पण आप ﷺ यांनी त्यांच्या नाशाची मागणी केली नाही, तर त्यांच्या संततीतून हिदायतीची आशा ठेवली — ही दया आहे, हे नबी ﷺ यांचे चारित्र्य आहे. हे अल्लाह! आम्हालाही ही दया दे. आमीन.",
        [
          "तायफचा प्रवास पायी",
          "तायफकरांनी दगड मारले",
          "झैद बिन हारिसा (र.अ.) पुढे झाले",
          "मलकुल-जिबालचा देवदूत आला",
          "नबी ﷺ यांनी चिरडण्यास नकार दिला",
          "हिदायतीची आशा ठेवली"
        ],
        [
          ["🥾 तायफचा प्रवास",
           "आमुल-हुझ्ननंतर नबी ﷺ यांनी विचार केला: «तायफचे लोक कदाचित मानतील.» अबू तालिब व खदीजा (र.अ.) यांच्यानंतर मदतीची आशा कमी होती. आप ﷺ झैद बिन हारिसा (र.अ.) यांना सोबत घेऊन पायी तायफला गेले. मक्केपासून तायफ सुमारे १०० किमी (अर-रहीकुल-मख्तूमनुसार सुमारे ६० मैल)चा डोंगराळ मार्ग होता — पायी.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🗣️ तायफकरांचा नकार",
           "नबी ﷺ तायफच्या तीन सरदारांना (अब्द यालैल, मसऊद व हबीब, जे भाऊ होते) भेटले, त्यांना इस्लामची दावत दिली आणि मदतीची विनंती केली. एकाने उपहास केला: «जर अल्लाहने तुम्हाला रसूल बनवले असेल तर तो काबाचा पडदा फाडून टाको!» दुसरा म्हणाला: «अल्लाहला तुमच्याशिवाय कोणीच मिळाला नाही का?» तिसरा म्हणाला: «मी तुमच्याशी बोलणार नाही; जर तुम्ही खरे रसूल असाल तर तुमच्याशी बोलणे धोकादायक आहे, आणि जर खोटे असाल तर बोलणे निरर्थक.» नंतर त्यांनी शहरातील अजाण मुलांना व गुलामांना मागे लावले, जे शिव्या देऊ लागले आणि दगड मारू लागले. (इब्न इशाक)",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🩸 रक्ताने माखलेले पाय",
           "दगड इतके पडले की नबी ﷺ यांच्या पायांतून रक्त वाहू लागले. झैद बिन हारिसा (र.अ.) आप ﷺ यांचे रक्षण करण्यासाठी ढाल बनले आणि स्वतः जखमी झाले. शेवटी आप ﷺ यांना एका बागेत आश्रय घ्यावा लागला, जी मक्केच्या दोन सरदारांची — उत्बा व शैबा (रबीआचे पुत्र) यांची होती. त्यांनी आप ﷺ यांची अवस्था पाहून दया दाखवली आणि आपल्या ख्रिश्चन गुलाम अद्दासकडून द्राक्षे पाठवली. आप ﷺ यांनी «बिस्मिल्लाह» म्हणून खाल्ली. (हा तपशील सीरत इब्न इशाकचा आहे.) याच प्रसंगी «अल्लाहुम्मा इलैक अश्कू ज़ुफ़्फ़ क़ुव्वती...» ही दुआ सांगितली जाते, पण तिची सनद जईफ आहे.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🤲 मलकुल-जिबालची घटना",
           "परतीच्या वेळी कर्नुस-सआलिब येथे आप ﷺ यांनी डोके उचलले, तेव्हा ढगाचा एक तुकडा सावली देत होता, त्यात जिब्राईल (अ.स.) होते. ते म्हणाले: «अल्लाहने तुमच्या कौमचे बोलणे व त्यांचे उत्तर ऐकले. हा डोंगरांचा देवदूत आहे, तुम्हाला जे पाहिजे ते त्याला हुकूम करा.» देवदूताने सलाम केला आणि म्हणाला: «जर तुम्ही इच्छा असाल तर मी दोन्ही डोंगर त्यांच्यावर कोसळून टाकतो.» नबी ﷺ म्हणाले: «नाही, मला आशा आहे की अल्लाह त्यांच्या संततीतून असे लोक निर्माण करेल जे फक्त एका अल्लाहची उपासना करतील आणि त्याच्यासोबत कोणालाही सहभागी करणार नाहीत.» (सहीह बुखारी: ३२३१, सहीह मुस्लिम: १७९५). हजरत आयशा (र.अ.) यांनी विचारले होते: «तुमच्यावर उहुदपेक्षाही कठीण दिवस आला का?» ते म्हणाले: «होय, सर्वात कठीण दिवस तो होता जो मला अकबाच्या दिवशी आला» (विद्वानांच्या मते यातून तायफच्या प्रवासाचा दिवस अभिप्रेत आहे).",
           "सहीह बुखारी: ३२३१; सहीह मुस्लिम: १७९५"],
          ["🌟 दया आणि आशा",
           "तायफकरांच्या एवढ्या मोठ्या अत्याचारानंतरही आप ﷺ यांनी त्यांना नष्ट करण्याची परवानगी दिली नाही, तर त्यांच्या पिढ्यांच्या ईमानाची आशा ठेवली. आणि खरोखर तसेच झाले: सकीफचा शिष्टमंडळ ९ हिजरीत स्वतः येऊन मुस्लिम झाले. सीरतच्या पुस्तकांनुसार परतीच्या वेळी नखल येथे जिन्नांच्या एका समूहाने आप ﷺ यांच्याकडून कुरआन ऐकले आणि ईमान आणले (सूरह अल-अहकाफ ४६:२९; सहीह बुखारीत ही घटना नखल येथे सूक-ए-उकाजच्या मार्गावर नमूद आहे), नंतर मुतइम बिन अदी यांनी आप ﷺ यांना आपल्या आश्रयात मक्केत प्रवेश करवला.",
           "कुरआन: ४६:२९; जिन्नांची घटना: सहीह बुखारी (तफसीर सूरह अल-जिन्न); बाकी: सीरतच्या रिवायती"],
          ["🎯 बोध",
           "ही घटना वाचून डोळे भरून येतात. दगडांचा वर्षाव, रक्ताने माखलेले पाय, पण शत्रूंसाठी दुआ. आपण आपल्या शत्रूंसाठीही दुआ केली पाहिजे; हा नबी ﷺ यांचा मार्ग आहे.",
           ""]
        ],
        [
          ["नबी ﷺ तायफला कोणासोबत गेले?", ["अबू बक्र (र.अ.)", "झैद (र.अ.)", "उमर (र.अ.)"]],
          ["मलकुल-जिबालने काय सुचवले?", ["माल", "डोंगरांनी चिरडणे", "राज्य"]],
          ["नबी ﷺ यांनी काय उत्तर दिले?", ["होय, चिरडा", "नाही, हिदायतीची दुआ", "नंतर"]]
        ],
        [
          ["इ.स. ६१९", "तायफचा प्रवास"],
          ["इ.स. ६१९", "दगडांचा वर्षाव"],
          ["इ.स. ६१९", "मलकुल-जिबालची घटना"]
        ]
      ],
      ar: [
        "رحلة الطائف — قدمان داميتان، ودعاء للأعداء",
        "الطائف",
        "619 م (السنة العاشرة من النبوة)",
        "فهم رحلة النبي ﷺ إلى الطائف، والأذى الذي لقيَه، وقصّة دعائه لأعدائه.",
        "كانت الحجارة تُمطر، وامتلأت القدمان دمًا، ومع ذلك لم يسأل ﷺ هلاكهم بل رجا الهداية في ذريتهم — هذه رحمة، وهذا خلق النبي ﷺ. اللهم ارزقنا هذه الرحمة. آمين.",
        [
          "رحلة الطائف على القدمين",
          "أهل الطائف رموه بالحجارة",
          "زيد بن حارثة رضي الله عنه وقف دونه",
          "جاء ملك الجبال",
          "رفض ﷺ أن يطبق عليهم الجبلان",
          "رجّا الهداية"
        ],
        [
          ["🥾 الرحلة إلى الطائف",
           "بعد عام الحزن فكّر النبي ﷺ: «لعل أهل الطائف يقبلون». فقد ضعفت آمال النصرة بعد أبي طالب وخديجة رضي الله عنها. فأخذ زيد بن حارثة رضي الله عنه ومشى إلى الطائف على قدميه. وكان بين مكة والطائف نحو مئة كيلومتر (نحو ستين ميلًا كما في الرحيق المختوم) من طريق الجبال — على القدمين.",
           "رواية سيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🗣️ ردّ أهل الطائف",
           "لقي النبي ﷺ سادة الطائف الثلاثة (عبد ياليل ومسعود وحبيب، وهم إخوة)، فدعاهم إلى الإسلام وطلب نصرتهم. فسخر أحدهم: «إن كان الله أرسلك فمزّق أستار الكعبة!» وقال الثاني: «أما وجد الله غيرك؟» وقال الثالث: «لن أكلمك؛ إن كنت رسولًا فمكالمتك خطر، وإن كنت كاذبًا فمكالمتك عبث». ثم أغرَوا بسفهاء البلد وعبيدهم، فجعلوا يشتمونه ويرمونه بالحجارة. (ابن إسحاق)",
           "رواية سيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🩸 قدمان داميتان",
           "تتابعت الحجارة حتى سال الدم من قدميه الشريفتين. وجعل زيد بن حارثة رضي الله عنه نفسه دِرعًا يقيه، فجُرح هو نفسه. ثم اضطر ﷺ إلى الاستجارة بحديقة كانت لعتبة وشيبة ابني ربيعة من سادة مكة. فرأَيا حاله فرحما، وأرسلا إليه عنبًا مع غلامهما النصراني عدّاس. فأكل ﷺ باسم الله. (وهذا التفصيل من سيرة ابن إسحاق.) وفي هذا المقام يُذكر دعاء «اللهم إليك أشكو ضعف قوتي...»، لكن إسناده ضعيف.",
           "رواية سيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🤲 حديث ملك الجبال",
           "في رجوعه، عند قرن الثعالب، رفع ﷺ رأسه فإذا سحابة أظلّته فيها جبريل عليه السلام. فقال: «قد سمع الله ما قالت قومك وما ردّوا به عليك. وهذا ملك الجبال، فمره بما شئت». فسلّم الملك وقال: «إن شئت أطبق عليهم الأخشبين». فقال النبي ﷺ: «لا، إني أرجو أن يُخرج الله من أصلابهم من يعبد الله وحده ولا يشرك به شيئًا». (صحيح البخاري: 3231، صحيح مسلم: 1795). وقد سألت عائشة رضي الله عنها: «هل أتاك يوم أشد من يوم أُحد؟» فقال: «نعم، أشدّ يوم مرّ عليّ يوم العقبة» (والمراد عند أهل العلم يوم الطائف).",
           "صحيح البخاري: 3231؛ صحيح مسلم: 1795"],
          ["🌟 الرحمة والرجاء",
           "مع هذا الأذى العظيم لم يأذن ﷺ بإهلاكهم، بل رجا الإيمان في ذرياتهم. وقد كان كذلك: فقد جاء وفد ثقيف فأسلموا سنة تسع من الهجرة. وجاء في كتب السيرة أن جماعة من الجن استمعوا إلى القرآن منه ﷺ في نخل في رجوعه فآمنوا (سورة الأحقاف 46:29؛ وفي صحيح البخاري ذكر هذه القصة في نخل على طريق سوق عكاظ)، ثم أدخله مطعم بن عدي مكة في جواره.",
           "القرآن: 46:29؛ قصة الجن: صحيح البخاري (تفسير سورة الجن)؛ والباقي: روايات السيرة"],
          ["🎯 العبرة",
           "تُدمع العين هذه القصة: وابل من الحجارة، وقدمان داميتان، ودعاء للأعداء. فعلينا أن ندعو لأعدائنا أيضًا؛ فهذا طريق النبي ﷺ.",
           ""]
        ],
        [
          ["مع من خرج النبي ﷺ إلى الطائف؟", ["أبو بكر رضي الله عنه", "زيد رضي الله عنه", "عمر رضي الله عنه"]],
          ["ماذا عرض ملك الجبال؟", ["مالًا", "أن يطبق عليهم الجبلين", "ملكًا"]],
          ["بماذا أجاب النبي ﷺ؟", ["نعم، أطبق عليهم", "لا، ودعا بالهداية", "لاحقًا"]]
        ],
        [
          ["619", "الرحلة إلى الطائف"],
          ["619", "وابل الحجارة"],
          ["619", "حديث ملك الجبال"]
        ]
      ],
      fr: [
        "Le voyage à Tâ'if — les pieds ensanglantés, l'invocation pour les ennemis",
        "Tâ'if",
        "619 (10e année de la prophétie)",
        "Comprendre le voyage du Prophète ﷺ à Tâ'if, les persécutions subies et l'épisode de son invocation pour ses ennemis.",
        "Les pierres pleuvaient et ses pieds se couvrirent de sang ; pourtant il ﷺ ne demanda pas leur destruction, mais espéra la guidée dans leur descendance — voilà la miséricorde, voilà le caractère du Prophète ﷺ. Ô Allah ! Accorde-nous cette miséricorde. Âmîn.",
        [
          "Le voyage à Tâ'if à pied",
          "Les gens de Tâ'if lancèrent des pierres",
          "Zayd ibn Hâritha (qu'Allah l'agrée) s'interposa",
          "L'ange des montagnes vint",
          "Le Prophète ﷺ refusa de les écraser",
          "Il espéra la guidée"
        ],
        [
          ["🥾 Le voyage à Tâ'if",
           "Après l'année de la tristesse, le Prophète ﷺ pensa : « Peut-être les gens de Tâ'if accepteront-ils. » Après Abou Tâlib et Khadîja (qu'Allah l'agrée), l'espoir de secours était mince. Il prit Zayd ibn Hâritha (qu'Allah l'agrée) et se rendit à pied à Tâ'if. Entre La Mecque et Tâ'if, il y a environ 100 km (près de 60 miles selon Ar-Rahîq al-Makhtûm) de route de montagne — à pied.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🗣️ Le refus des gens de Tâ'if",
           "Le Prophète ﷺ rencontra les trois chefs de Tâ'if ('Abd Yâlîl, Mas'oûd et Habîb, trois frères), les appela à l'islam et demanda leur secours. L'un railla : « Si Allah t'a envoyé, qu'Il déchire les voiles de la Kaaba ! » Le deuxième dit : « Allah n'a-t-Il trouvé que toi ? » Le troisième dit : « Je ne te parlerai pas : si tu es véridique, te parler est dangereux ; si tu es menteur, te parler est inutile. » Puis ils lâchèrent sur lui les jeunes insensés et les esclaves de la ville, qui l'insultèrent et lui lancèrent des pierres. (Ibn Ishâq)",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🩸 Les pieds ensanglantés",
           "Les pierres tombèrent si dru que le sang coula de ses pieds bénis. Zayd ibn Hâritha (qu'Allah l'agrée) se fit un bouclier pour le protéger et fut lui-même blessé. Finalement il ﷺ dut se réfugier dans un jardin appartenant à deux chefs de La Mecque, 'Outba et Chayba (fils de Rabî'a). Voyant son état, ils eurent pitié et envoyèrent des raisins par leur esclave chrétien 'Addâs. Il ﷺ mangea en disant « Bismillâh ». (Ce détail vient de la Sîra d'Ibn Ishâq.) À cette occasion est rapportée l'invocation « Allâhumma ilayka achkoû dou'fa qouwwatî... », mais sa chaîne est faible.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🤲 L'épisode de l'ange des montagnes",
           "Au retour, à Qarn ath-Tha'âlib, il ﷺ leva la tête : un morceau de nuage l'ombrageait, avec Jibrîl (paix sur lui). Il dit : « Allah a entendu ce que ton peuple a dit et ce qu'il t'a répondu. Voici l'ange des montagnes : ordonne-lui ce que tu veux. » L'ange salua et dit : « Si tu veux, je fais tomber sur eux les deux montagnes. » Le Prophète ﷺ dit : « Non, j'espère qu'Allah fera sortir de leur descendance des gens qui adoreront Allah seul et ne Lui associeront rien. » (Sahih al-Bukhari : 3231, Sahih Muslim : 1795). 'Â'icha (qu'Allah l'agrée) demanda : « As-tu connu un jour plus dur que le jour d'Ouhoud ? » Il dit : « Oui, le jour le plus dur fut celui de 'Aqaba » (selon les savants : le jour de Tâ'if).",
           "Sahih al-Bukhari : 3231 ; Sahih Muslim : 1795"],
          ["🌟 Miséricorde et espérance",
           "Malgré une telle injustice, il ﷺ ne permit pas de les anéantir, mais espéra la foi pour leurs générations. Et ce fut le cas : la délégation de Thaqîf vint d'elle-même embrasser l'islam en l'an 9. Selon les livres de Sîra, au retour, à Nakhl, un groupe de djinns écouta le Coran de lui ﷺ et crut (sourate al-Ahqâf 46:29 ; dans Sahih al-Bukhari cet épisode est mentionné à Nakhl, sur la route du marché de 'Oukâz) ; puis Mout'im ibn 'Adî le fit entrer à La Mecque sous sa protection.",
           "Coran : 46:29 ; l'épisode des djinns : Sahih al-Bukhari (tafsîr de sourate al-Jinn) ; le reste : récits de Sîra"],
          ["🎯 La leçon",
           "Cet épisode fait monter les larmes : une pluie de pierres, des pieds ensanglantés, et une invocation pour les ennemis. Nous devons invoquer pour nos ennemis aussi : c'est la voie du Prophète ﷺ.",
           ""]
        ],
        [
          ["Avec qui le Prophète ﷺ partit-il à Tâ'if ?", ["Abou Bakr (qu'Allah l'agrée)", "Zayd (qu'Allah l'agrée)", "'Umar (qu'Allah l'agrée)"]],
          ["Que proposa l'ange des montagnes ?", ["Des biens", "D'écraser la ville sous les deux montagnes", "Un royaume"]],
          ["Que répondit le Prophète ﷺ ?", ["Oui, écrase-les", "Non, il invoqua pour leur guidée", "Plus tard"]]
        ],
        [
          ["619", "Le voyage à Tâ'if"],
          ["619", "La pluie de pierres"],
          ["619", "L'épisode de l'ange des montagnes"]
        ]
      ],
      es: [
        "El viaje a Taif: los pies ensangrentados y la súplica por los enemigos",
        "Taif",
        "619 (año 10 de la profecía)",
        "Comprender el viaje del Profeta ﷺ a Taif, el daño sufrido y el episodio de su súplica por sus enemigos.",
        "Caían piedras y los pies se llenaron de sangre; y aun así ﷺ no pidió su destrucción, sino que esperó la guía en su descendencia. Eso es misericordia, ese es el carácter del Profeta ﷺ. ¡Oh Alá! Concédenos esa misericordia. Amín.",
        [
          "El viaje a Taif a pie",
          "La gente de Taif le lanzó piedras",
          "Zayd ibn Hariza (que Alá esté complacido con él) se interpuso",
          "Vino el ángel de las montañas",
          "El Profeta ﷺ se negó a aplastarlos",
          "Esperó la guía"
        ],
        [
          ["🥾 El viaje a Taif",
           "Tras el año de la tristeza, el Profeta ﷺ pensó: «Quizá la gente de Taif acepte.» Después de Abu Talib y Jadiya (que Alá esté complacido con ella), la esperanza de auxilio era escasa. Tomó a Zayd ibn Hariza (que Alá esté complacido con él) y fue a pie a Taif. Entre La Meca y Taif hay unos 100 km (cerca de 60 millas según Ar-Rahiq al-Majtum) de camino de montaña, a pie.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🗣️ El rechazo de la gente de Taif",
           "El Profeta ﷺ se reunió con los tres jefes de Taif (Abd Yalil, Masud y Habib, tres hermanos), los llamó al islam y pidió su auxilio. Uno se burló: «Si Alá te ha enviado, ¡que rompa los velos de la Kaaba!» El segundo dijo: «¿Acaso Alá no encontró a nadie más que a ti?» El tercero dijo: «No te hablaré: si eres veraz, hablar contigo es peligroso; y si eres mentiroso, es inútil.» Luego soltaron contra él a los jóvenes necios y a los esclavos de la ciudad, que lo insultaron y le lanzaron piedras. (Ibn Ishaq)",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🩸 Los pies ensangrentados",
           "Las piedras cayeron tan densas que la sangre brotó de sus pies benditos. Zayd ibn Hariza (que Alá esté complacido con él) se hizo escudo para protegerlo y resultó herido. Finalmente ﷺ tuvo que refugiarse en un jardín de dos jefes de La Meca, Utba y Shayba (hijos de Rabia). Al ver su estado, se compadecieron y le enviaron uvas con su esclavo cristiano Addas. Él ﷺ comió diciendo «Bismil-lah». (Este detalle viene de la Sira de Ibn Ishaq.) En esa ocasión se transmite la súplica «Aláhumma ilayka ashku du'fa quwwati...», pero su cadena es débil.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🤲 El episodio del ángel de las montañas",
           "A la vuelta, en Qarn az-Za'alib, ﷺ levantó la cabeza: una nube le daba sombra y en ella estaba Yibril (la paz sea con él). Dijo: «Alá ha oído lo que dijo tu pueblo y lo que te respondió. Este es el ángel de las montañas: ordénale lo que quieras.» El ángel saludó y dijo: «Si quieres, hago caer sobre ellos las dos montañas.» El Profeta ﷺ dijo: «No; espero que Alá saque de su descendencia a gente que adore a Alá solo y no Le asocie nada.» (Sahih al-Bujari: 3231; Sahih Muslim: 1795). Aisha (que Alá esté complacido con ella) preguntó: «¿Tuviste un día más duro que el de Uhud?» Dijo: «Sí, el día más duro fue el de Aqaba» (según los sabios, el día de Taif).",
           "Sahih al-Bujari: 3231; Sahih Muslim: 1795"],
          ["🌟 Misericordia y esperanza",
           "Pese a tan gran injusticia, ﷺ no permitió aniquilarlos, sino que esperó la fe para sus generaciones. Y así fue: la delegación de Zaqif vino ella misma a abrazar el islam en el año 9. Según los libros de Sira, a la vuelta, en Najl, un grupo de yinn escuchó el Corán de él ﷺ y creyó (sura al-Ahqaf 46:29; en Sahih al-Bujari este episodio se menciona en Najl, en el camino del mercado de Ukaz); luego Mutim ibn Adi lo hizo entrar en La Meca bajo su protección.",
           "Corán: 46:29; el episodio de los yinn: Sahih al-Bujari (tafsir de la sura al-Yinn); el resto: relatos de Sira"],
          ["🎯 La lección",
           "Este episodio hace brotar lágrimas: una lluvia de piedras, pies ensangrentados y una súplica por los enemigos. Debemos suplicar también por nuestros enemigos: ese es el camino del Profeta ﷺ.",
           ""]
        ],
        [
          ["¿Con quién fue el Profeta ﷺ a Taif?", ["Abu Bakr (que Alá esté complacido con él)", "Zayd (que Alá esté complacido con él)", "Umar (que Alá esté complacido con él)"]],
          ["¿Qué ofreció el ángel de las montañas?", ["Bienes", "Aplastar la ciudad con las dos montañas", "Un reino"]],
          ["¿Qué respondió el Profeta ﷺ?", ["Sí, aplástalos", "No; suplicó por su guía", "Más tarde"]]
        ],
        [
          ["619", "El viaje a Taif"],
          ["619", "La lluvia de piedras"],
          ["619", "El episodio del ángel de las montañas"]
        ]
      ]
    },

    /* ═══════════════ DAY 14 — Isra o Mi'raj ═══════════════ */
    14: {
      mr: [
        "इसरा व मेराज — आकाशांचा प्रवास",
        "मस्जिदे-हराम → मस्जिदे-अक्सा → आकाश",
        "हिजरतीच्या थोडे आधी (तारखेत मतभेद)",
        "मेराजची घटना, पाच नमाजांची फर्जियत आणि नबी ﷺ यांचा आकाशांतील प्रवास समजून घेणे.",
        "मूसा (अ.स.) यांच्या सल्ल्याने नमाजा पन्नासांवरून पाच झाल्या, फळ तरीही पन्नासांचेच — तरीही आपल्याला पाच नमाजाही कठीण वाटतात. हे अल्लाह! आम्हाला नमाजची किंमत दे. आमीन.",
        [
          "हिजरतीपूर्वी मेराज (वर्षात मतभेद)",
          "मस्जिदे-हरामपासून मस्जिदे-अक्सापर्यंत",
          "नबींचे इमामत्व",
          "सात आकाशे",
          "पाच नमाजा फर्ज",
          "अबू बक्र (र.अ.) यांना सिद्दीक हे विशेषण"
        ],
        [
          ["🌌 इसरा — रात्रीचा प्रवास",
           "एके रात्री (तारखेत मतभेद आहे; सत्तावीस रजब प्रसिद्ध आहे पण त्याला कोणताही सहीह पुरावा सिद्ध नाही) नबी ﷺ मस्जिदे-हराममध्ये हतीमजवळ झोप व जागरणाच्या अवस्थेत होते. जिब्राईल (अ.स.) आले, आप ﷺ यांची छाती उघडली, हृदय झमझमच्या पाण्याने धुतले आणि ते हिकमत व ईमानाने भरून टाकले. नंतर बुराक सादर केला — पांढरे वाहन, गाढवापेक्षा मोठे व खेचरापेक्षा लहान, जे आपले पाऊल दृष्टीच्या हद्दीपर्यंत ठेवत होते (सहीह बुखारी व मुस्लिम). कुरआनात आहे: «سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى» (पवित्र आहे तो, ज्याने आपल्या दासाला रात्रीच्या एका भागात मस्जिदे-हरामपासून मस्जिदे-अक्सापर्यंत नेले) — सूरह अल-इसरा १७:१.",
           "सहीह बुखारी: ३२०७; सहीह मुस्लिम (किताबुल-ईमान, बाबुल-इसरा); कुरआन: १७:१"],
          ["🕌 मस्जिदे-अक्सामध्ये",
           "आप ﷺ बैतुल-मुकद्दस पोहोचले, बुराक बांधला आणि मस्जिदीत दोन रकअत नमाज़ पढली. सहीह मुस्लिमच्या रिवायतीनुसार तिथे नबी जमले होते आणि आप ﷺ यांनी त्यांचे इमामत्व केले. नंतर जिब्राईल (अ.स.) यांनी दोन वाट्या सादर केल्या — एकात दूध, दुसऱ्यात दारू. आप ﷺ यांनी दूध निवडले. जिब्राईल (अ.स.) म्हणाले: «तुम्ही फितरत निवडली; जर दारू घेतली असती तर तुमची उम्मत मार्गभ्रष्ट झाली असती.» (सहीह मुस्लिम)",
           "सहीह मुस्लिम: १७२"],
          ["🪜 आकाशांचा प्रवास",
           "नंतर आप ﷺ यांना जिब्राईल (अ.स.) सोबत आकाशांवर नेले गेले. सहीह बुखारी व मुस्लिमनुसार: पहिल्या आकाशात आदम (अ.स.), दुसऱ्यात यह्या (अ.स.) व ईसा (अ.स.), तिसऱ्यात यूसुफ (अ.स.), चौथ्यात इद्रीस (अ.स.), पाचव्यात हारून (अ.स.), सहाव्यात मूसा (अ.स.) आणि सातव्यात इब्राहीम (अ.स.) यांची भेट झाली. प्रत्येकाने मरहबा म्हटले आणि नबुव्वतची पुष्टी केली. सातव्या आकाशात इब्राहीम (अ.स.) बैतुल-मअमूरला टेकून होते. नंतर आप ﷺ यांना सिदरतुल-मुंतहापर्यंत नेले गेले — सातव्या आकाशातील बेरिचे एक महान वृक्ष, जे प्रकाशाने व रंगांनी झाकलेले होते.",
           "सहीह बुखारी: ३२०७; सहीह मुस्लिम (किताबुल-ईमान, बाबुल-इसरा)"],
          ["🤲 पाच नमाजा",
           "अल्लाहने आप ﷺ यांच्या उम्मतीवर पन्नास नमाजा फर्ज केल्या. परतीच्या वेळी मूसा (अ.स.) म्हणाले: «तुमची उम्मत एवढ्या नमाजा सांभाळू शकणार नाही; मी बनी इस्राईलची परीक्षा घेतली आहे; आपल्या रबकडे कमी करण्याची विनंती करा.» नबी ﷺ वारंवार गेले आणि प्रत्येक वेळी काही कमी होत राहिले, शेवटी पाच राहिल्या. मूसा (अ.स.) यांनी पुन्हा सल्ला दिला तेव्हा आप ﷺ म्हणाले: «आता मला माझ्या रबकडून लाज वाटते, मी राजी आहे.» नंतर निदा आली: «मी माझे फर्ज जारी केले आणि माझ्या दासांवर सवलत केली. या पाच आहेत पण फळात पन्नास आहेत; माझ्याकडे बोल बदलत नाही.» (सहीह बुखारी व मुस्लिम). ही या उम्मतीसाठी फार मोठी दया आहे.",
           "सहीह बुखारी: ३४९; सहीह मुस्लिम (किताबुल-ईमान, बाबुल-इसरा)"],
          ["🌟 महत्त्वाच्या भेटी",
           "मेराजमध्ये नबी ﷺ यांना काही भेटी मिळाल्या: पाच नमाजा, सूरह अल-बकराच्या शेवटच्या दोन आयती, आणि ही बुशरत की उम्मतीतील जो शिर्क करणार नाही, अल्लाह इच्छा असेल तर त्याचे नाश करणारे मोठे पापही माफ करेल (सहीह मुस्लिम: १७३). ही या उम्मतीसाठी फार मोठी बुशरत होती.",
           "सहीह मुस्लिम: १७३"],
          ["😢 कुरैशचा इन्कार",
           "सकाळी नबी ﷺ यांनी कुरैशला घटना सांगितली. त्यांनी थट्टा केली आणि खोटे ठरवले; काही लोक अबू बक्र (र.अ.) यांच्याकडे धावले. अबू बक्र (र.अ.) म्हणाले: «जर आप ﷺ यांनी हे सांगितले असेल तर खरे सांगितले. मी तर याहूनही मोठ्या गोष्टीवर (आकाशाची बातमी सकाळ-संध्याकाळ) आपली पुष्टी करतो.» याच पुष्टीमुळे त्यांचे «सिद्दीक» हे विशेषण प्रसिद्ध झाले (मुस्तद्रक हाकिम).",
           "मुस्तद्रक हाकिम (अबू बक्र (र.अ.) यांच्या विशेषणाची रिवायत)"],
          ["🎯 बोध",
           "मेराजची घटना दाखवते की अल्लाह आपल्या हबीबाला किती प्रिय मानतो. पाच नमाजा ही भेट आहे; आपण ती सांभाळली पाहिजे आणि पूर्ण लक्षाने पढली पाहिजे.",
           ""]
        ],
        [
          ["मेराज कुठून सुरू झाला?", ["हिरा गुहा", "मस्जिदे-हराम", "तायफ"]],
          ["किती नमाजा फर्ज झाल्या?", ["३", "५", "५०"]],
          ["अबू बक्र (र.अ.) यांचे विशेषण?", ["फारूक", "सिद्दीक", "झुन्नूरैन"]]
        ],
        [
          ["नबवी १०-१२", "इसरा व मेराज"],
          ["नबवी १०-१२", "पाच नमाजा फर्ज"],
          ["नबवी १०-१२", "अबू बक्र (र.अ.) यांची पुष्टी"]
        ]
      ],
      ar: [
        "الإسراء والمعراج — الرحلة إلى السماوات",
        "المسجد الحرام ← المسجد الأقصى ← السماء",
        "قبل الهجرة بقليل (وفي التاريخ خلاف)",
        "فهم حادثة المعراج، وفرض الصلوات الخمس، ورحلة النبي ﷺ في السماوات.",
        "بمشورة موسى عليه السلام صارت الصلوات خمسًا من خمسين، والأجر أجر خمسين — ومع ذلك نجد الخمس ثقيلة. اللهم ارزقنا تعظيم الصلاة. آمين.",
        [
          "المعراج قبل الهجرة (وفي السنة خلاف)",
          "من المسجد الحرام إلى المسجد الأقصى",
          "إمامته ﷺ بالأنبياء",
          "السماوات السبع",
          "فرض الصلوات الخمس",
          "لقب الصديق لأبي بكر رضي الله عنه"
        ],
        [
          ["🌌 الإسراء — الرحلة الليلية",
           "في ليلة (وفي تاريخها خلاف؛ والمشهور السابع والعشرون من رجب ولا يثبت عليه دليل صحيح) كان النبي ﷺ في المسجد الحرام عند الحطيم بين النوم واليقظة. فجاء جبريل عليه السلام فشق صدره، وغسل قلبه بماء زمزم، وملأه حكمةً وإيمانًا. ثم أُتي بالبراق — دابة بيضاء أكبر من الحمار وأصغر من البغل، تضع خطوها عند منتهى بصرها (صحيح البخاري ومسلم). وفي القرآن: «سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى» — سورة الإسراء 17:1.",
           "صحيح البخاري: 3207؛ صحيح مسلم (كتاب الإيمان، باب الإسراء)؛ القرآن: 17:1"],
          ["🕌 في المسجد الأقصى",
           "وصل ﷺ بيت المقدس، فربط البراق، وصلى في المسجد ركعتين. وفي رواية صحيح مسلم أن الأنبياء جُمعوا هناك وصلى بهم ﷺ إمامًا. ثم أُتي جبريل عليه السلام بإناءين — في أحدهما لبن وفي الآخر خمر، فاختار ﷺ اللبن. فقال جبريل: «أصبت الفطرة؛ لو أخذت الخمر لغوَت أمتك» (صحيح مسلم).",
           "صحيح مسلم: 172"],
          ["🪜 الرحلة في السماوات",
           "ثم عُرج به ﷺ مع جبريل عليه السلام إلى السماوات. وفي صحيح البخاري ومسلم: في السماء الأولى آدم عليه السلام، وفي الثانية يحيى وعيسى عليهما السلام، وفي الثالثة يوسف عليه السلام، وفي الرابعة إدريس عليه السلام، وفي الخامسة هارون عليه السلام، وفي السادسة موسى عليه السلام، وفي السابعة إبراهيم عليه السلام. فسلّم كلٌّ منهم عليه ورحّب وصدّق بنبوته. وكان إبراهيم عليه السلام في السابعة مستندًا إلى البيت المعمور. ثم أُعرج به ﷺ إلى سدرة المنتهى — شجرة عظيمة في السماء السابعة يغشاها نور وألوان.",
           "صحيح البخاري: 3207؛ صحيح مسلم (كتاب الإيمان، باب الإسراء)"],
          ["🤲 الصلوات الخمس",
           "فرض الله على أمة النبي ﷺ خمسين صلاة. وفي الرجوع قال موسى عليه السلام: «إن أمتك لا تطيق ذلك، وقد جربت بني إسرائيل؛ فارجع إلى ربك فاسأله التخفيف». فرجع ﷺ مرارًا وكل مرة تُخفَّف، حتى بقيت خمس. ثم قال موسى عليه السلام مرة أخرى، فقال ﷺ: «قد استحييت من ربي، أنا راضٍ». فنودي: «قد أمضيت فريضتي وخففت عن عبادي: هي خمس وهي خمسون، لا يُبدَّل القول لديّ». (صحيح البخاري ومسلم). وهذه رحمة عظيمة لهذه الأمة.",
           "صحيح البخاري: 349؛ صحيح مسلم (كتاب الإيمان، باب الإسراء)"],
          ["🌟 عطايا عظيمة",
           "أُعطي النبي ﷺ في المعراج: الصلوات الخمس، وخواتيم سورة البقرة، والبشرى بأن من لم يشرك بالله من أمته ولم يُشرك، غفر الله له ما دون ذلك من الموبقات إن شاء (صحيح مسلم: 173). وكانت هذه بشرى عظيمة لهذه الأمة.",
           "صحيح مسلم: 173"],
          ["😢 تكذيب قريش",
           "في الصباح أخبر ﷺ قريشًا بالخبر، فسخروا وكذّبوا، وأسرع بعضهم إلى أبي بكر رضي الله عنه. فقال أبو بكر: «إن كان قال فقد صدق؛ أنا أصدقه بأكبر من ذلك (بخبر السماء صباحًا ومساءً)». وبهذا التصديق اشتهر لقبه «الصديق» (المستدرك للحاكم).",
           "المستدرك للحاكم (رواية لقب أبي بكر رضي الله عنه)"],
          ["🎯 العبرة",
           "تدل حادثة المعراج على عظيم مكانة الحبيب ﷺ عند ربه. والصلوات الخمس عطية، فعلينا أن نحفظها ونصليها بكامل الحضور.",
           ""]
        ],
        [
          ["من أين بدأ المعراج؟", ["غار حراء", "المسجد الحرام", "الطائف"]],
          ["كم صلاة فُرضت؟", ["3", "5", "50"]],
          ["ما لقب أبي بكر رضي الله عنه؟", ["الفاروق", "الصديق", "ذو النورين"]]
        ],
        [
          ["10-12 من النبوة", "الإسراء والمعراج"],
          ["10-12 من النبوة", "فرض الصلوات الخمس"],
          ["10-12 من النبوة", "تصديق أبي بكر رضي الله عنه"]
        ]
      ],
      fr: [
        "Al-Isrâ' et al-Mi'râj — le voyage dans les cieux",
        "Mosquée sacrée → Mosquée al-Aqsâ → les cieux",
        "Peu avant l'émigration (dates divergentes)",
        "Comprendre l'épisode du Mi'râj, l'obligation des cinq prières et le voyage du Prophète ﷺ dans les cieux.",
        "Sur le conseil de Mûsâ (paix sur lui), les prières passèrent de cinquante à cinq, mais la récompense reste celle de cinquante — et nous trouvons encore les cinq lourdes. Ô Allah ! Accorde-nous d'estimer la prière. Âmîn.",
        [
          "Le Mi'râj avant l'émigration (année discutée)",
          "De la Mosquée sacrée à la Mosquée al-Aqsâ",
          "Le Prophète ﷺ imam des prophètes",
          "Les sept cieux",
          "Les cinq prières obligatoires",
          "Le surnom d'as-Siddîq pour Abou Bakr (qu'Allah l'agrée)"
        ],
        [
          ["🌌 Al-Isrâ' — le voyage nocturne",
           "Une nuit (sa date est discutée ; le 27 rajab est célèbre mais sans preuve authentique), le Prophète ﷺ se trouvait à la Mosquée sacrée, près du Hijr, entre sommeil et veille. Jibrîl (paix sur lui) vint, ouvrit sa poitrine, lava son cœur avec l'eau de Zamzam et le remplit de sagesse et de foi. Puis on lui présenta le Bourâq — une monture blanche, plus grande qu'un âne et plus petite qu'un mulet, posant son pas à l'extrémité de sa vue (Sahih al-Bukhari et Muslim). Le Coran dit : « سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى » — sourate al-Isrâ' 17:1.",
           "Sahih al-Bukhari : 3207 ; Sahih Muslim (Livre de la foi, chapitre al-Isrâ') ; Coran : 17:1"],
          ["🕌 À la Mosquée al-Aqsâ",
           "Il ﷺ arriva à Bayt al-Maqdis, attacha le Bourâq et pria deux rak'ahs dans la mosquée. Selon le récit de Sahih Muslim, les prophètes y étaient rassemblés et il ﷺ les dirigea en prière. Puis Jibrîl (paix sur lui) présenta deux coupes — l'une de lait, l'autre de vin. Il ﷺ choisit le lait. Jibrîl dit : « Tu as suivi la nature originelle ; si tu avais pris le vin, ta communauté se serait égarée. » (Sahih Muslim)",
           "Sahih Muslim : 172"],
          ["🪜 Le voyage dans les cieux",
           "Puis il ﷺ fut élevé avec Jibrîl (paix sur lui) à travers les cieux. Selon Sahih al-Bukhari et Muslim : au premier ciel Adam (paix sur lui), au deuxième Yahyâ et 'Issâ (paix sur eux), au troisième Yoûsouf (paix sur lui), au quatrième Idrîs (paix sur lui), au cinquième Hâroûn (paix sur lui), au sixième Mûsâ (paix sur lui) et au septième Ibrâhîm (paix sur lui). Chacun le salua, l'accueillit et confirma sa prophétie. Au septième ciel, Ibrâhîm (paix sur lui) était appuyé contre la Maison peuplée (al-Bayt al-Ma'moûr). Puis il ﷺ fut conduit au Lotus de la limite (Sidrat al-Mountahâ) — un arbre immense au septième ciel, couvert de lumière et de couleurs.",
           "Sahih al-Bukhari : 3207 ; Sahih Muslim (Livre de la foi, chapitre al-Isrâ')"],
          ["🤲 Les cinq prières",
           "Allah imposa cinquante prières à la communauté du Prophète ﷺ. Au retour, Mûsâ (paix sur lui) dit : « Ta communauté ne pourra pas supporter cela ; j'ai éprouvé les Enfants d'Isrâ'îl ; retourne vers ton Seigneur et demande une réduction. » Il ﷺ y retourna plusieurs fois, et chaque fois elles furent allégées, jusqu'à ce qu'il en reste cinq. Mûsâ (paix sur lui) conseilla encore, et il ﷺ dit : « J'ai eu honte de mon Seigneur ; je suis satisfait. » Alors il fut annoncé : « J'ai décrété Mon obligation et allégé pour Mes serviteurs : elles sont cinq et elles valent cinquante ; Ma parole ne change pas. » (Sahih al-Bukhari et Muslim). C'est une immense miséricorde pour cette communauté.",
           "Sahih al-Bukhari : 349 ; Sahih Muslim (Livre de la foi, chapitre al-Isrâ')"],
          ["🌟 Des dons précieux",
           "Au Mi'râj, le Prophète ﷺ reçut : les cinq prières, les deux derniers versets de sourate al-Baqara, et l'annonce que celui de sa communauté qui ne commet pas d'association à Allah, Allah lui pardonnera les péchés graves qui ne sont pas de cet ordre, s'Il le veut (Sahih Muslim : 173). Ce fut une immense annonce pour cette communauté.",
           "Sahih Muslim : 173"],
          ["😢 Le démenti des Quraysh",
           "Le matin, le Prophète ﷺ raconta l'épisode aux Quraysh. Ils s'en moquèrent et le traitèrent de menteur ; certains coururent chez Abou Bakr (qu'Allah l'agrée). Il dit : « S'il l'a dit, il a dit vrai. Moi je le crois pour plus grand que cela (la nouvelle du ciel matin et soir). » C'est à cause de cette attestation que son surnom « as-Siddîq » devint célèbre (al-Moustadrak d'al-Hâkim).",
           "al-Moustadrak d'al-Hâkim (récit du surnom d'Abou Bakr)"],
          ["🎯 La leçon",
           "L'épisode du Mi'râj montre combien le bien-aimé ﷺ est cher à son Seigneur. Les cinq prières sont un don : nous devons les préserver et les accomplir avec une pleine présence.",
           ""]
        ],
        [
          ["D'où commença le Mi'râj ?", ["La grotte de Hirâ'", "La Mosquée sacrée", "Tâ'if"]],
          ["Combien de prières furent rendues obligatoires ?", ["3", "5", "50"]],
          ["Quel est le surnom d'Abou Bakr (qu'Allah l'agrée) ?", ["Al-Fâroûq", "As-Siddîq", "Dhou-n-Noûrayn"]]
        ],
        [
          ["10-12 de la prophétie", "Al-Isrâ' et al-Mi'râj"],
          ["10-12 de la prophétie", "Obligation des cinq prières"],
          ["10-12 de la prophétie", "L'attestation d'Abou Bakr (qu'Allah l'agrée)"]
        ]
      ],
      es: [
        "Al-Isra y al-Miraj: el viaje a los cielos",
        "Mezquita Sagrada → Mezquita al-Aqsa → los cielos",
        "Poco antes de la emigración (fecha discutida)",
        "Comprender el episodio del Miraj, la obligatoriedad de las cinco oraciones y el viaje del Profeta ﷺ por los cielos.",
        "Por consejo de Musa (la paz sea con él), las oraciones pasaron de cincuenta a cinco, pero la recompensa sigue siendo la de cincuenta; y aun así nos resultan pesadas las cinco. ¡Oh Alá! Concédenos valorar la oración. Amín.",
        [
          "El Miraj antes de la emigración (año discutido)",
          "De la Mezquita Sagrada a la Mezquita al-Aqsa",
          "El Profeta ﷺ imán de los profetas",
          "Los siete cielos",
          "Las cinco oraciones obligatorias",
          "El apelativo as-Siddiq para Abu Bakr (que Alá esté complacido con él)"
        ],
        [
          ["🌌 Al-Isra: el viaje nocturno",
           "Una noche (su fecha es discutida; el 27 de rayab es famoso pero sin prueba auténtica), el Profeta ﷺ estaba en la Mezquita Sagrada, junto al Hiyir, entre el sueño y la vigilia. Vino Yibril (la paz sea con él), abrió su pecho, lavó su corazón con agua de Zamzam y lo llenó de sabiduría y fe. Luego le presentaron el Buraq: una montura blanca, mayor que un asno y menor que un mulo, que ponía su paso al límite de su vista (Sahih al-Bujari y Muslim). El Corán dice: «سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى» — sura al-Isra 17:1.",
           "Sahih al-Bujari: 3207; Sahih Muslim (Libro de la fe, capítulo al-Isra); Corán: 17:1"],
          ["🕌 En la Mezquita al-Aqsa",
           "Él ﷺ llegó a Bayt al-Maqdis, ató el Buraq y rezó dos rakas en la mezquita. Según el relato de Sahih Muslim, los profetas estaban reunidos allí y él ﷺ los dirigió en la oración. Luego Yibril (la paz sea con él) presentó dos copas: una de leche y otra de vino. Él ﷺ eligió la leche. Yibril dijo: «Has seguido la naturaleza original; si hubieras tomado el vino, tu comunidad se habría extraviado.» (Sahih Muslim)",
           "Sahih Muslim: 172"],
          ["🪜 El viaje por los cielos",
           "Luego ﷺ fue elevado con Yibril (la paz sea con él) por los cielos. Según Sahih al-Bujari y Muslim: en el primer cielo Adam (la paz sea con él), en el segundo Yahya e Isa (la paz sea con ellos), en el tercero Yusuf (la paz sea con él), en el cuarto Idris (la paz sea con él), en el quinto Harun (la paz sea con él), en el sexto Musa (la paz sea con él) y en el séptimo Ibrahim (la paz sea con él). Cada uno lo saludó, lo acogió y confirmó su profecía. En el séptimo cielo, Ibrahim (la paz sea con él) estaba recostado junto a la Casa Poblada (al-Bayt al-Mamur). Luego ﷺ fue llevado al Loto del Límite (Sidrat al-Muntaha), un árbol inmenso en el séptimo cielo, cubierto de luz y colores.",
           "Sahih al-Bujari: 3207; Sahih Muslim (Libro de la fe, capítulo al-Isra)"],
          ["🤲 Las cinco oraciones",
           "Alá impuso cincuenta oraciones a la comunidad del Profeta ﷺ. A la vuelta, Musa (la paz sea con él) dijo: «Tu comunidad no podrá con ello; yo he probado a los Hijos de Israel; vuelve a tu Señor y pide una reducción.» Él ﷺ volvió varias veces y cada vez fueron aligeradas, hasta que quedaron cinco. Musa (la paz sea con él) aconsejó de nuevo, y él ﷺ dijo: «He sentido vergüenza de mi Señor; estoy satisfecho.» Entonces se anunció: «He cumplido Mi obligación y he aligerado a Mis siervos: son cinco y valen cincuenta; Mi palabra no cambia.» (Sahih al-Bujari y Muslim). Es una misericordia inmensa para esta comunidad.",
           "Sahih al-Bujari: 349; Sahih Muslim (Libro de la fe, capítulo al-Isra)"],
          ["🌟 Dones preciosos",
           "En el Miraj el Profeta ﷺ recibió: las cinco oraciones, las dos últimas aleyas de la sura al-Baqara, y el anuncio de que a quien de su comunidad no asocie nada a Alá, Alá le perdonará los pecados graves que no sean de ese orden, si Él quiere (Sahih Muslim: 173). Fue un anuncio inmenso para esta comunidad.",
           "Sahih Muslim: 173"],
          ["😢 El desmentido de los Quraysh",
           "Por la mañana, el Profeta ﷺ contó el episodio a los Quraysh. Se burlaron y lo tacharon de mentiroso; algunos corrieron a casa de Abu Bakr (que Alá esté complacido con él). Él dijo: «Si lo ha dicho, ha dicho la verdad. Yo le creo para algo aún mayor (la noticia del cielo mañana y tarde).» Por esta confirmación se hizo famoso su apelativo «as-Siddiq» (al-Mustadrak de al-Hakim).",
           "al-Mustadrak de al-Hakim (relato del apelativo de Abu Bakr)"],
          ["🎯 La lección",
           "El episodio del Miraj muestra cuán querido es el amado ﷺ para su Señor. Las cinco oraciones son un regalo: debemos cuidarlas y rezarlas con plena presencia.",
           ""]
        ],
        [
          ["¿De dónde comenzó el Miraj?", ["La cueva de Hira", "La Mezquita Sagrada", "Taif"]],
          ["¿Cuántas oraciones se hicieron obligatorias?", ["3", "5", "50"]],
          ["¿Cuál es el apelativo de Abu Bakr (que Alá esté complacido con él)?", ["Al-Faruq", "As-Siddiq", "Du-n-Nurayn"]]
        ],
        [
          ["Años 10-12 de la profecía", "Al-Isra y al-Miraj"],
          ["Años 10-12 de la profecía", "Obligación de las cinco oraciones"],
          ["Años 10-12 de la profecía", "La confirmación de Abu Bakr (que Alá esté complacido con él)"]
        ]
      ]
    },

    /* ═══════════════ DAY 15 — Bai'at-e-Aqabah ═══════════════ */
    15: {
      mr: [
        "अकबाच्या बैअती — मदिन्याचा मार्ग",
        "मिना (मक्केजवळ)",
        "इ.स. ६२१-६२२ (नबवी ११-१२)",
        "अन्सारांची पहिली व दुसरी बैअत आणि मदिन्यात इस्लाम पसरल्याची घटना समजून घेणे.",
        "मुसअब (र.अ.) एक तरुण, सुखवस्तू घरातील, पण इस्लामसाठी मदिन्याला गेले आणि एका वर्षात संपूर्ण शहर बदलले. हीच दावतीची शक्ती आहे. हे अल्लाह! आम्हालाही दावतीची तौफीक दे. आमीन.",
        [
          "पहिली बैअत: १२ लोक",
          "दुसरी बैअत: ७५ लोक",
          "मुसअब (र.अ.) मदिन्याला पाठवले",
          "१२ नकीब नेमले",
          "हिजरतीचा निर्णय"
        ],
        [
          ["🌴 मदिन्यात इस्लामचा प्रकाश",
           "मदिन्यात (यसरीब) यहुदी टोळ्यांसोबत अरब टोळ्या औस व खजरज वसलेल्या होत्या, ज्या आपापसातील कठोर युद्धांनी (जंगे-बुआस इ.) थकल्या होत्या. यहुदी म्हणत असत की एक नबी येणार आहे. नबवी ११ च्या हजमध्ये खजरजचे सहा लोक नबी ﷺ यांना भेटले; आप ﷺ यांनी त्यांना कुरआन ऐकवले, ते ईमान आणले आणि आपल्या शहरात परत जाऊन दावत देऊ लागले. (इब्न इशाक)",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🅰️ पहिली बैअते-अकबा — इ.स. ६२१",
           "मिनामध्ये, हजच्या वेळी, १२ लोक (मदिन्याचे) नबी ﷺ यांना भेटले. त्यांनी इस्लाम स्वीकारला आणि ही बैअत केली: «आम्ही अल्लाहसोबत कोणालाही सहभागी करणार नाही, चोरी करणार नाही, व्यभिचार करणार नाही, संततीची हत्या करणार नाही, कोणावर बदनामी करणार नाही, आणि नबी ﷺ यांचे प्रत्येक चांगले बोलणे मान्य करू.» या बैअतीवर नबी ﷺ म्हणाले: «जर तुम्ही पूर्ण कराल तर जन्नत आहे; आणि कसूर केला तर अल्लाह माफ करेल किंवा शिक्षा देईल.»",
           "सहीह बुखारी: १८, ३८९२ (उबादा बिन सामित (र.अ.))"],
          ["📿 मुसअब बिन उमैर (र.अ.) यांची नेमणूक",
           "नबी ﷺ यांनी मुसअब बिन उमैर (र.अ.) यांना मदिन्याला पाठवले की कुरआन शिकवावे आणि इस्लामची शिकवण द्यावी. मुसअब (र.अ.) यांनी खूप मेहनत केली — एका वर्षात मदिन्यात इस्लाम पसरला. औस व खजरजचे सरदार साद बिन मुआज (र.अ.) व उसैद बिन हुदैर (र.अ.) हेदेखील मुस्लिम झाले, नंतर त्यांच्या कौमनेही इस्लाम स्वीकारला. हेच ते लोक होते ज्यांनी पुढे हिजरतीत नबी ﷺ यांना मदत केली.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🅱️ दुसरी बैअते-अकबा — इ.स. ६२२",
           "पुढच्या वर्षी हजला ७५ लोक (७३ पुरुष, २ स्त्रिया) आले — मदिन्याचे. नबी ﷺ यांचे काका अब्बास (र.अ.) (तेव्हापर्यंत मुस्लिम नव्हते, पण पाठिंब्यासाठी आले) म्हणाले: «मुहम्मद ﷺ आमच्या टोळीत मानाचे आहेत. जर तुम्ही त्यांना मदिन्याला न्यायचे असेल तर प्रत्येक परिस्थितीत संरक्षण करा.» त्यांनी म्हटले: «आम्ही आप ﷺ यांचे संरक्षण करू जसे आपल्या बायका-मुलांचे करतो.» ही बैअत फार महत्त्वाची होती — यात नबी ﷺ यांनी १२ नकीब (सरदार) नेमले.",
           "मुस्नद अहमद (काब बिन मलिक (र.अ.) यांची रिवायत); अर-रहीकुल-मख्तूम"],
          ["🏡 मदिन्याच्या हिजरतीचा निर्णय",
           "आता नबी ﷺ सहाबांना म्हणाले: «मदिन्याला जा, तिथे तुमचे बंधू आहेत, ते तुम्हाला मदत करतील.» सहाबांनी हिजरत सुरू केली — गुप्तपणे, बहुतेक रात्री. काहींनी सर्व माल सोडला, कुटुंब सोडले, पण ईमान सोडले नाही.",
           "सीरतची रिवायत — सीरत इब्न हिशाम / अर-रहीकुल-मख्तूम (सहीह हदीस नाही)"],
          ["🎯 बोध",
           "अन्सारांच्या बैअतीने आणि मुसअब (र.अ.) यांच्या मेहनतीने मदिन्यात इस्लाम पसरला. आपण दावतीसाठी तयारी केली पाहिजे आणि शहाणपणाने काम केले पाहिजे. एक चांगला शिक्षक एका वर्षात संपूर्ण वस्ती बदलू शकतो.",
           ""]
        ],
        [
          ["पहिल्या बैअतीत किती लोक?", ["१०", "१२", "२०"]],
          ["मदिन्याला कोण पाठवले?", ["अली (र.अ.)", "मुसअब (र.अ.)", "झैद (र.अ.)"]],
          ["दुसऱ्या बैअतीत किती?", ["५०", "७५", "१००"]]
        ],
        [
          ["इ.स. ६२१", "पहिली बैअते-अकबा"],
          ["इ.स. ६२१", "मुसअब (र.अ.) यांचे मदिन्याला प्रयाण"],
          ["इ.स. ६२२", "दुसरी बैअते-अकबा"]
        ]
      ],
      ar: [
        "بيعتا العقبة — الطريق إلى المدينة",
        "منى (قرب مكة)",
        "621-622 م (11-12 من النبوة)",
        "فهم بيعة الأنصار الأولى والثانية، وانتشار الإسلام في المدينة.",
        "مصعب رضي الله عنه شاب من بيت نعمة، لكنه خرج إلى المدينة من أجل الإسلام فغيّر مدينة كاملة في سنة. هذه قوة الدعوة. اللهم وفقنا للدعوة إليك. آمين.",
        [
          "البيعة الأولى: 12 رجلًا",
          "البيعة الثانية: 75",
          "إرسال مصعب رضي الله عنه",
          "تعيين 12 نقيبًا",
          "قرار الهجرة إلى المدينة"
        ],
        [
          ["🌴 بذرة الإسلام في المدينة",
           "كانت المدينة (يثرب) تسكنها قبائل عربية هي الأوس والخزرج مع قبائل يهودية، وقد تعبت من حروبها الشديدة (يوم بعاث وغيره). وكان اليهود يقولون إن نبيًّا سيُبعث. وفي حج السنة الحادية عشرة لقي ستة من الخزرج النبي ﷺ، فقرأ عليهم القرآن فآمنوا، ورجعوا إلى بلدهم يدعون إليه. (ابن إسحاق)",
           "رواية سيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🅰️ بيعة العقبة الأولى — 621 م",
           "في منى، في موسم الحج، لقيه ﷺ اثنا عشر رجلًا من المدينة. فأسلموا وبايعوه على: «ألا نشرك بالله شيئًا، ولا نسرق، ولا نزني، ولا نقتل أولادنا، ولا نأتي ببهتان نفتريه، ولا نعصيه في معروف». فقال ﷺ: «فمن وفى منكم فله الجنة، ومن أصاب شيئًا من ذلك فستر الله عليه فهو إلى الله: إن شاء عذّبه وإن شاء غفر له».",
           "صحيح البخاري: 18، 3892 (عبادة بن الصامت رضي الله عنه)"],
          ["📿 إرسال مصعب بن عمير رضي الله عنه",
           "بعث النبي ﷺ مصعب بن عمير رضي الله عنه إلى المدينة يعلّم القرآن ويفقّه في الدين. فاجتهد مصعب رضي الله عنه حتى انتشر الإسلام في المدينة في سنة واحدة. وأسلم سعد بن معاذ وأسيد بن حضير رضي الله عنهما سيدا الأوس والخزرج، ثم أسلمت قومهما. وهؤلاء هم الذين ناصروا النبي ﷺ في الهجرة بعد ذلك.",
           "رواية سيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🅱️ بيعة العقبة الثانية — 622 م",
           "في الحج من العام التالي جاء خمسة وسبعون (73 رجلًا وامرأتان) من المدينة. فقال عباس رضي الله عنه، عم النبي ﷺ (ولم يكن أسلم بعد، لكنه جاء نصرة): «إن محمدًا ﷺ في قومه بمنعة؛ فإن أردتم أخذه إلى المدينة فاحفظوه في كل حال». فقالوا: «نحفظه كما نحفظ أبناءنا ونساءنا». وكانت هذه البيعة عظيمة، وفيها عيّن ﷺ اثني عشر نقيبًا.",
           "مسند أحمد (رواية كعب بن مالك رضي الله عنه)؛ الرحيق المختوم"],
          ["🏡 قرار الهجرة إلى المدينة",
           "ثم قال النبي ﷺ لأصحابه: «اذهبوا إلى المدينة، فإن بها إخوانًا لكم ينصرونكم». فبدأ الصحابة بالهجرة سرًّا، وأكثرهم ليلًا. وترك بعضهم مالًا وأهلًا، ولم يتركوا الإيمان.",
           "رواية سيرة — سيرة ابن هشام / الرحيق المختوم (ليست حديثًا صحيحًا)"],
          ["🎯 العبرة",
           "ببيعة الأنصار واجتهاد مصعب رضي الله عنه انتشر الإسلام في المدينة. فعلينا أن نستعد للدعوة ونعمل بالحكمة. فالمعلم الصالح قد يغيّر بلدة كاملة في سنة.",
           ""]
        ],
        [
          ["كم عدد من بايع في البيعة الأولى؟", ["10", "12", "20"]],
          ["من أُرسل إلى المدينة؟", ["علي رضي الله عنه", "مصعب رضي الله عنه", "زيد رضي الله عنه"]],
          ["كم عدد البيعة الثانية؟", ["50", "75", "100"]]
        ],
        [
          ["621", "بيعة العقبة الأولى"],
          ["621", "خروج مصعب رضي الله عنه إلى المدينة"],
          ["622", "بيعة العقبة الثانية"]
        ]
      ],
      fr: [
        "Les serments d'al-'Aqaba — la route de Médine",
        "Minâ (près de La Mecque)",
        "621-622 (11e-12e année de la prophétie)",
        "Comprendre le premier et le second serment des Ansâr et la diffusion de l'islam à Médine.",
        "Mous'ab (qu'Allah l'agrée), un jeune homme d'une famille aisée, partit à Médine pour l'islam et changea toute une ville en un an. C'est la force de la prédication. Ô Allah ! Accorde-nous d'appeler vers Toi. Âmîn.",
        [
          "Premier serment : 12 hommes",
          "Second serment : 75",
          "Envoi de Mous'ab (qu'Allah l'agrée)",
          "Désignation de 12 chefs (nouqabâ')",
          "La décision de l'émigration à Médine"
        ],
        [
          ["🌴 La semence de l'islam à Médine",
           "Médine (Yathrib) était habitée par les tribus arabes d'al-Aws et al-Khazraj, aux côtés de tribus juives ; elles étaient épuisées par leurs guerres violentes (la bataille de Bou'âth, etc.). Les Juifs disaient qu'un prophète allait venir. Lors du pèlerinage de la 11e année, six hommes de Khazraj rencontrèrent le Prophète ﷺ ; il leur récita le Coran, ils crurent et retournèrent chez eux pour appeler à l'islam. (Ibn Ishâq)",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🅰️ Le premier serment d'al-'Aqaba — 621",
           "À Minâ, pendant le pèlerinage, douze hommes de Médine rencontrèrent le Prophète ﷺ. Ils embrassèrent l'islam et lui prêtèrent serment : « Nous n'associerons rien à Allah, nous ne volerons pas, nous ne forniquerons pas, nous ne tuerons pas nos enfants, nous ne proférerons pas de calomnie, et nous ne te désobéirons pas dans le bien. » Le Prophète ﷺ dit : « Si vous l'accomplissez, c'est le Paradis ; si vous y manquez, c'est à Allah : Il punit ou pardonne, s'Il veut. »",
           "Sahih al-Bukhari : 18, 3892 ('Ubâda ibn as-Sâmit, qu'Allah l'agrée)"],
          ["📿 L'envoi de Mous'ab ibn 'Umayr (qu'Allah l'agrée)",
           "Le Prophète ﷺ envoya Mous'ab ibn 'Umayr (qu'Allah l'agrée) à Médine pour enseigner le Coran et la religion. Il s'y employa si bien qu'en un an l'islam se répandit à Médine. Les chefs d'al-Aws et al-Khazraj, Sa'd ibn Mou'âdh et Ousayd ibn Houdhayr (qu'Allah les agrée), embrassèrent l'islam, puis leurs tribus. Ce sont eux qui soutinrent ensuite le Prophète ﷺ lors de l'émigration.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🅱️ Le second serment d'al-'Aqaba — 622",
           "L'année suivante, au pèlerinage, vinrent soixante-quinze personnes (73 hommes et 2 femmes) de Médine. Al-'Abbâs (qu'Allah l'agrée), oncle du Prophète ﷺ — qui n'était pas encore musulman mais vint en soutien — dit : « Mouhammad ﷺ est honoré dans sa tribu ; si vous voulez l'emmener à Médine, protégez-le en toute circonstance. » Ils dirent : « Nous le protégerons comme nous protégeons nos femmes et nos enfants. » Ce serment fut très important : le Prophète ﷺ y désigna douze chefs (nouqabâ').",
           "Mousnad Ahmad (récit de Ka'b ibn Mâlik, qu'Allah l'agrée) ; Ar-Rahîq al-Makhtûm"],
          ["🏡 La décision de l'émigration à Médine",
           "Alors le Prophète ﷺ dit aux Compagnons : « Allez à Médine : vous y avez des frères qui vous secourront. » Les Compagnons commencèrent l'émigration, en secret, souvent de nuit. Certains laissèrent tous leurs biens et leur famille, mais pas leur foi.",
           "Récit de Sîra — Sîra d'Ibn Hichâm / Ar-Rahîq al-Makhtûm (ce n'est pas un hadith authentique)"],
          ["🎯 La leçon",
           "Par le serment des Ansâr et le labeur de Mous'ab (qu'Allah l'agrée), l'islam se répandit à Médine. Nous devons nous préparer à la prédication et agir avec sagesse. Un bon enseignant peut transformer tout un bourg en un an.",
           ""]
        ],
        [
          ["Combien étaient-ils au premier serment ?", ["10", "12", "20"]],
          ["Qui fut envoyé à Médine ?", ["'Alî (qu'Allah l'agrée)", "Mous'ab (qu'Allah l'agrée)", "Zayd (qu'Allah l'agrée)"]],
          ["Combien au second serment ?", ["50", "75", "100"]]
        ],
        [
          ["621", "Le premier serment d'al-'Aqaba"],
          ["621", "Départ de Mous'ab (qu'Allah l'agrée) pour Médine"],
          ["622", "Le second serment d'al-'Aqaba"]
        ]
      ],
      es: [
        "Los juramentos de al-Aqaba: el camino a Medina",
        "Mina (cerca de La Meca)",
        "621-622 (años 11 y 12 de la profecía)",
        "Comprender el primer y segundo juramento de los Ansar y la difusión del islam en Medina.",
        "Musab (que Alá esté complacido con él), un joven de familia acomodada, fue a Medina por el islam y cambió toda una ciudad en un año. Ese es el poder de la predicación. ¡Oh Alá! Concédenos llamar hacia Ti. Amín.",
        [
          "Primer juramento: 12 hombres",
          "Segundo juramento: 75",
          "Envío de Musab (que Alá esté complacido con él)",
          "Designación de 12 jefes (nuqaba)",
          "La decisión de emigrar a Medina"
        ],
        [
          ["🌴 La semilla del islam en Medina",
           "Medina (Yatrib) estaba habitada por las tribus árabes de al-Aws y al-Jazray, junto a tribus judías; estaban agotadas por sus guerras violentas (la batalla de Buaath, etc.). Los judíos decían que iba a venir un profeta. En la peregrinación del año 11, seis hombres de Jazray se encontraron con el Profeta ﷺ; él les recitó el Corán, creyeron y volvieron a su tierra a llamar al islam. (Ibn Ishaq)",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🅰️ El primer juramento de al-Aqaba: 621",
           "En Mina, durante la peregrinación, doce hombres de Medina se encontraron con el Profeta ﷺ. Abrazaron el islam y le juraron: «No asociaremos nada a Alá, no robaremos, no fornicaremos, no mataremos a nuestros hijos, no proferiremos calumnia y no te desobedeceremos en el bien.» El Profeta ﷺ dijo: «Si lo cumplís, tendréis el Paraíso; si falláis, es cosa de Alá: castiga o perdona, si quiere.»",
           "Sahih al-Bujari: 18, 3892 (Ubada ibn as-Samit, que Alá esté complacido con él)"],
          ["📿 El envío de Musab ibn Umayr (que Alá esté complacido con él)",
           "El Profeta ﷺ envió a Musab ibn Umayr (que Alá esté complacido con él) a Medina para enseñar el Corán y la religión. Se esforzó tanto que en un año el islam se difundió en Medina. Los jefes de al-Aws y al-Jazray, Sad ibn Muaz y Usayd ibn Hudayr (que Alá esté complacido con ellos), abrazaron el islam, y luego sus tribus. Ellos fueron quienes después apoyaron al Profeta ﷺ en la emigración.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🅱️ El segundo juramento de al-Aqaba: 622",
           "Al año siguiente, en la peregrinación, vinieron setenta y cinco personas (73 hombres y 2 mujeres) de Medina. Al-Abbas (que Alá esté complacido con él), tío del Profeta ﷺ —que aún no era musulmán pero vino en apoyo—, dijo: «Muhámmad ﷺ es honrado en su tribu; si queréis llevarlo a Medina, protegedlo en toda circunstancia.» Dijeron: «Lo protegeremos como protegemos a nuestras mujeres e hijos.» Este juramento fue muy importante: en él el Profeta ﷺ designó a doce jefes (nuqaba).",
           "Musnad Ahmad (relato de Kab ibn Malik, que Alá esté complacido con él); Ar-Rahiq al-Majtum"],
          ["🏡 La decisión de emigrar a Medina",
           "Entonces el Profeta ﷺ dijo a los Compañeros: «Id a Medina: allí tenéis hermanos que os socorrerán.» Los Compañeros comenzaron la emigración en secreto, a menudo de noche. Algunos dejaron todos sus bienes y su familia, pero no su fe.",
           "Relato de Sira: Sira de Ibn Hisham / Ar-Rahiq al-Majtum (no es un hadiz auténtico)"],
          ["🎯 La lección",
           "Por el juramento de los Ansar y el esfuerzo de Musab (que Alá esté complacido con él), el islam se difundió en Medina. Debemos prepararnos para la predicación y actuar con sabiduría. Un buen maestro puede transformar todo un poblado en un año.",
           ""]
        ],
        [
          ["¿Cuántos eran en el primer juramento?", ["10", "12", "20"]],
          ["¿A quién se envió a Medina?", ["Ali (que Alá esté complacido con él)", "Musab (que Alá esté complacido con él)", "Zayd (que Alá esté complacido con él)"]],
          ["¿Cuántos en el segundo juramento?", ["50", "75", "100"]]
        ],
        [
          ["621", "El primer juramento de al-Aqaba"],
          ["621", "Partida de Musab (que Alá esté complacido con él) a Medina"],
          ["622", "El segundo juramento de al-Aqaba"]
        ]
      ]
    },

    /* ═══════════════ DAY 16 — Hijrat-e-Madina ═══════════════ */
    16: {
      mr: [
        "मदिन्याची हिजरत — इतिहासाचे नवे पर्व",
        "मक्का → सौर गुहा → मदिना",
        "इ.स. ६२२ (नबवी १२)",
        "हिजरतीची घटना, सौर गुहा, सुराका आणि इस्लामी इतिहासातील नव्या वर्षाची सुरुवात समजून घेणे.",
        "संपूर्ण कुरैश मागे लागले होते, पण अल्लाहने आपल्या नबी ﷺ यांचे रक्षण केले. हे अल्लाह! आम्हालाही भरवसा दे. आमीन.",
        [
          "हिजरत: इ.स. ६२२",
          "सौर गुहेत ३ रात्री",
          "सुराकाचा पाठलाग",
          "उम्मे मअबदचा तंबू",
          "अबू अय्यूब अन्सारी यांचे घर",
          "हिजरी वर्ष: हजरत उमर (र.अ.) यांनी ठरवले"
        ],
        [
          ["🎯 हिजरतीची परवानगी",
           "सहाबा मोठ्या संख्येने मदिन्याला जाऊन पोहोचले होते. कुरैशला काळजी वाटली की जर मुहम्मद ﷺ ही मदिन्याला पोहोचले तर तिथे मुस्लिमांची शक्ती वाढेल. दारुन-नदवामध्ये सल्ला झाला की प्रत्येक टोळीतून एक तरुण घ्यावा आणि सर्वांनी मिळून एकाच वारात आप ﷺ यांची हत्या करावी, जेणेकरून बनू हाशिम सर्वांकडून सूड घेऊ शकणार नाहीत. अल्लाहने नबी ﷺ यांना बातमी दिली आणि हिजरतीची परवानगी दिली. आप ﷺ यांनी अली (र.अ.) यांना आपल्या बिछान्यावर झोपवले आणि लोकांच्या अनामती परत करण्याची जबाबदारी दिली, नंतर हत्यारांच्या समोरून निघून गेले — अल्लाहने त्यांच्या डोळ्यांवर पडदा टाकला (सीरतची रिवायत).",
           "कुरआन: ८:३०; मुस्नद अहमद (इब्न अब्बास (र.अ.) यांची रिवायत); सहीह बुखारी: ३९०५"],
          ["🕳️ सौर गुहा",
           "नबी ﷺ अबू बक्र (र.अ.) यांच्यासोबत मक्केपासून दक्षिणेकडे सौर गुहेत लपले (मदिन्याचा मार्ग उत्तरेकडे होता; कुरैशला दिशाभूल करण्यासाठी उलट बाजूला गेले). अबू बक्र (र.अ.) यांचे पुत्र अब्दुल्लाह (र.अ.) दिवसभर मक्केत राहून कुरैशच्या बातम्या ऐकत आणि रात्री गुहेत येऊन सांगत, मुलगी अस्मा (र.अ.) अन्न पोहोचवत, आणि मेंढपाळ आमिर बिन फुहैरा (र.अ.) शेळ्या चारत पावलांचे ठसे पुसत आणि ताजे दूध आणत. तीन रात्री गुहेत राहिले. एके वेळी कुरैशचे शोधक गुहेच्या तोंडापर्यंत पोहोचले, अबू बक्र (र.अ.) म्हणाले: «यांपैकी कोणी खाली पाहिले तर आपल्याला दिसेल.» नबी ﷺ म्हणाले: «अबू बक्र! ज्यांचा तिसरा अल्लाह आहे त्यांच्याबद्दल तुमचे काय मत आहे?» (सहीह बुखारी: ३६५३). कुरआनात आहे: «لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا» (दुःख करू नको, अल्लाह आपल्यासोबत आहे) — सूरह अत-तौबा ९:४०. कोळ्याचे जाळे व कबुतराची अंडी ही कथा प्रसिद्ध आहे, पण तिच्या सनदा जईफ आहेत, म्हणून आपण कुरआन व सहीह हदीसवर समाधान मानतो.",
           "सहीह बुखारी: ३९०५, ३६५३; कुरआन: ९:४०"],
          ["🐎 सुराकाचा पाठलाग",
           "कुरैशने आप ﷺ यांना पकडून आणण्यावर १०० उंटांचे बक्षीस ठेवले. सुराका बिन मलिकने पाठलाग केला. जवळ आल्यावर त्याच्या घोड्याचे पाय जमिनीत रुतले आणि तो पडला. त्याने अमान मागितले; आप ﷺ यांनी दुआ केली आणि घोडा बाहेर निघाला; असे अनेक वेळा झाले. शेवटी त्याला खात्री झाली की आप ﷺ सुरक्षित आहेत, आणि तो परत जाऊन इतर पाठलाग करणाऱ्यांनाही परतवत गेला (सहीह बुखारी). रिवायतीत आहे की नबी ﷺ यांनी त्याला म्हटले: «सुराका! जेव्हा तू किसराचे कडे परिधान करशील तेव्हा तुझी काय अवस्था असेल?» (बैहकी; या रिवायतीच्या सनदेवर विद्वानांनी चर्चा केली आहे). सुराका (र.अ.) नंतर मुस्लिम झाले, आणि त्याच रिवायतीनुसार हजरत उमर (र.अ.) यांच्या काळात इराण जिंकल्यावर किसराचे कडे त्यांनाच परिधान केले गेले.",
           "सहीह बुखारी (किताबु मनाकिबिल-अन्सार, बाबु हिजरत); बैहकी (कड्यांची भविष्यवाणी; सनदेवर चर्चा)"],
          ["🌴 उम्मे मअबदचा तंबू",
           "वाटेत उम्मे मअबदचा तंबू आला. त्यांची शेळी कमजोर होती आणि दूध देत नव्हती. नबी ﷺ यांनी शेळीच्या कासेवर हात फिरवला, दुआ केली आणि दूध उतरले, सर्वांनी प्यायले. त्यांचे पती परत आले तेव्हा उम्मे मअबदने पाहुण्याचे वर्णन तपशीलवार सांगितले. पती म्हणाले: «हाच तो कुरैशी आहे ज्याला कुरैश शोधत आहेत; जर भेटला तर मी त्यांची संगत धरेन.» (मुस्तद्रक हाकिम; रिवायतीच्या सनदेवर विद्वानांनी चर्चा केली आहे.)",
           "मुस्तद्रक हाकिम (सनदेवर चर्चा)"],
          ["🌅 मदिन्यात आगमन",
           "नबी ﷺ प्रथम कुबामध्ये बनू अम्र बिन औफकडे सोमवारी पोहोचले (रबीउल-अव्वलची तारीख: प्रसिद्ध मत १२, काहींच्या मते ८) आणि मुक्काम करून मस्जिदे-कुबाची पायाभरणी केली (मुक्कामाचा कालावधी: इब्न इशाकनुसार सुमारे ४ दिवस, तर सहीह बुखारीत अनस (र.अ.) यांच्याकडून १४ रात्री आल्या आहेत). नंतर शुक्रवारी मदिन्याला निघाले; वाटेत बनू सालिमच्या परिसरात पहिला जुम्मा पढवला. मदिन्याचे लोक आनंदाने बाहेर आले आणि प्रत्येकाला वाटत होते की आप ﷺ त्याच्याकडे उतरावेत; आप ﷺ म्हणाले की उंटीण सोडा, ती अल्लाहतर्फे नेमलेली आहे. ती अबू अय्यूब अन्सारी (र.अ.) यांच्या घरासमोर बसली आणि आप ﷺ तिथेच राहिले. «तलअल-बद्रु अलैना» हे स्वागतगीत प्रसिद्ध असले तरी तिची सनद सिद्ध नाही, म्हणून आपण फक्त या आनंदाचा उल्लेख करतो. हिजरी वर्षाची सुरुवात हिजरतीच्या वेळी झाली नाही, तर हजरत उमर (र.अ.) यांनी आपल्या काळात (१७ हिजरी) हिजरतीला आधार मानून हिजरी कॅलेंडर ठरवले.",
           "सहीह बुखारी (अनस (र.अ.) यांची रिवायत: बनू अम्र बिन औफकडे १४ रात्री); बाकी: सीरतच्या रिवायती"],
          ["🎯 बोध",
           "हिजरतीत तवक्कुल, संयम आणि अल्लाहवर भरवसा आहे. नबी ﷺ म्हणाले: «घाबरू नका, अल्लाह आपल्यासोबत आहे» — हा तो विश्वास आहे जो प्रत्येक मुस्लिमाच्या मनात असला पाहिजे.",
           ""]
        ],
        [
          ["हिजरतीत सोबत कोण होते?", ["अली (र.अ.)", "अबू बक्र (र.अ.)", "उमर (र.अ.)"]],
          ["गुहेत किती दिवस राहिले?", ["१", "३", "५"]],
          ["मदिन्यात कोणाच्या घरी उतरले?", ["साद (र.अ.)", "अबू अय्यूब (र.अ.)", "मुसअब (र.अ.)"]]
        ],
        [
          ["इ.स. ६२२", "दारुन-नदवामध्ये हत्येचा सल्ला"],
          ["इ.स. ६२२", "सौर गुहेत ३ रात्री"],
          ["इ.स. ६२२", "रबीउल-अव्वल — कुबा व मदिन्यात आगमन"]
        ]
      ],
      ar: [
        "الهجرة إلى المدينة — صفحة جديدة في التاريخ",
        "مكة ← غار ثور ← المدينة",
        "622 م (السنة الثانية عشرة من النبوة)",
        "فهم حادثة الهجرة، وغار ثور، وسُراقة، وبداية التقويم الهجري.",
        "كانت قريش كلها في الطلب، فحفظ الله نبيه ﷺ. اللهم ارزقنا التوكل عليك. آمين.",
        [
          "الهجرة: 622 م",
          "ثلاث ليالٍ في غار ثور",
          "مطاردة سُراقة",
          "خيمة أم معبد",
          "بيت أبي أيوب الأنصاري",
          "التقويم الهجري: وضعه عمر رضي الله عنه"
        ],
        [
          ["🎯 الإذن بالهجرة",
           "كان الصحابة قد ذهبوا إلى المدينة بأعداد كبيرة. فخافت قريش أن يصل محمد ﷺ إلى المدينة فتزداد قوة المسلمين. فتشاوروا في دار الندوة على أن يأخذوا من كل قبيلة فتىً فيقتلوه ﷺ جميعًا ضربة رجل واحد، حتى لا تستطيع بنو هاشم الأخذ بثأرها من الجميع. فأخبر الله نبيه ﷺ وأذن له بالهجرة. فأنام ﷺ عليًّا رضي الله عنه على فراشه، وأوصاه بردّ الأمانات إلى أهلها، ثم خرج من بين القتلة — وقد أعمى الله أبصارهم (رواية سيرة).",
           "القرآن: 8:30؛ مسند أحمد (رواية ابن عباس رضي الله عنه)؛ صحيح البخاري: 3905"],
          ["🕳️ غار ثور",
           "اختفى ﷺ مع أبي بكر رضي الله عنه في غار ثور جنوب مكة (وطريق المدينة شمالًا، فسلكا خلافه ليُضلّا قريشًا). وكان عبد الله بن أبي بكر رضي الله عنه يبيت في مكة نهارًا يسمع أخبار قريش، ويأتي الغار ليلًا فيخبرهما؛ وتأتيهما أسماء رضي الله عنها بالطعام؛ وكان عامر بن فهيرة رضي الله عنه يرعى الغنم فيمحو الأثر ويأتي باللبن. ومكثا في الغار ثلاث ليالٍ. ووصلت قريش مرة إلى فم الغار، فقال أبو بكر: «لو نظر أحدهم تحت قدميه لرآنا». فقال ﷺ: «يا أبا بكر، ما ظنك باثنين الله ثالثهما؟» (صحيح البخاري: 3653). وفي القرآن: «لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا» — سورة التوبة 9:40. وقصة بيت العنكبوت وبيض الحمام مشهورة، لكن أسانيدها ضعيفة، فنكتفي بالقرآن والحديث الصحيح.",
           "صحيح البخاري: 3905، 3653؛ القرآن: 9:40"],
          ["🐎 مطاردة سُراقة",
           "جعلت قريش مئة ناقة لمن يأتي بهما. فتبعهما سُراقة بن مالك، فلما دنا ساخت قدما فرسه في الأرض فسقط. فطلب الأمان، فدعا له ﷺ فخرجت؛ وحدث ذلك مرارًا. ثم أيقن أنهما محفوظان، فرجع وكان يردّ من يطلبهم (صحيح البخاري). وفي الرواية أن النبي ﷺ قال له: «يا سُراقة، كيف بك إذا لبست سواري كسرى؟» (البيهقي؛ وفي إسنادها كلام). وأسلم سُراقة رضي الله عنه بعد ذلك، وفي خلافة عمر رضي الله عنه فُتحت فارس فأُلبس سواري كسرى.",
           "صحيح البخاري (كتاب مناقب الأنصار، باب الهجرة)؛ البيهقي (بشارة السوارين؛ وفي الإسناد كلام)"],
          ["🌴 خيمة أم معبد",
           "مرّ ﷺ في طريقه بخيمة أم معبد، وكانت شاتها ضعيفة لا تُدرّ. فمسح ﷺ ضرعها ودعا، فدرّ اللبن فشرب الجميع. ولما رجع زوجها وصفت له أم معبد صفة الضيف. فقال زوجها: «هذا هو القرشي الذي تطلبه قريش؛ فإن ظفرت به لأصحبنّه». (المستدرك للحاكم؛ وفي إسنادها كلام)",
           "المستدرك للحاكم (وفي الإسناد كلام)"],
          ["🌅 الوصول إلى المدينة",
           "نزل ﷺ أولًا بقباء على بني عمرو بن عوف يوم الاثنين (والمشهور في تاريخ ربيع الأول الثاني عشر، وقيل الثامن)، وأقام فأسّس مسجد قباء (ومدة الإقامة: نحو أربعة أيام عند ابن إسحاق، وفي صحيح البخاري عن أنس رضي الله عنه أربع عشرة ليلة). ثم خرج يوم الجمعة إلى المدينة، فصلى بهم أول جمعة في بني سالم. وخرج أهل المدينة فرحين، وكلٌّ يريد أن ينزل ﷺ عنده؛ فقال ﷺ: «خلّوا الناقة، فإنها مأمورة». فبركت عند بيت أبي أيوب الأنصاري رضي الله عنه، فنزل ﷺ هناك. ونشيد «طلع البدر علينا» مشهور لكن إسناده لم يثبت، فنذكر الفرح فقط. ولم يبدأ التأريخ الهجري وقت الهجرة، بل جعله عمر رضي الله عنه في خلافته (سنة 17) وجعل الهجرة مبدأً للتقويم.",
           "صحيح البخاري (رواية أنس رضي الله عنه: أربع عشرة ليلة عند بني عمرو بن عوف)؛ والباقي: روايات السيرة"],
          ["🎯 العبرة",
           "في الهجرة توكل وصبر وثقة بالله. قال ﷺ: «لا تحزن، إن الله معنا» — وهذا اليقين الذي ينبغي أن يكون في قلب كل مسلم.",
           ""]
        ],
        [
          ["من كان معه ﷺ في الهجرة؟", ["علي رضي الله عنه", "أبو بكر رضي الله عنه", "عمر رضي الله عنه"]],
          ["كم ليلة مكثا في الغار؟", ["1", "3", "5"]],
          ["عند من نزل ﷺ في المدينة؟", ["سعد رضي الله عنه", "أبو أيوب رضي الله عنه", "مصعب رضي الله عنه"]]
        ],
        [
          ["622", "التشاور في دار الندوة على القتل"],
          ["622", "ثلاث ليالٍ في غار ثور"],
          ["622", "ربيع الأول — الوصول إلى قباء والمدينة"]
        ]
      ],
      fr: [
        "L'émigration à Médine — une nouvelle page de l'histoire",
        "La Mecque → la grotte de Thawr → Médine",
        "622 (12e année de la prophétie)",
        "Comprendre l'épisode de l'émigration, la grotte de Thawr, Souraka et le début du calendrier hégirien.",
        "Tous les Quraysh étaient à leur poursuite, mais Allah protégea Son Prophète ﷺ. Ô Allah ! Accorde-nous la confiance en Toi. Âmîn.",
        [
          "L'émigration : 622",
          "Trois nuits dans la grotte de Thawr",
          "La poursuite de Souraka",
          "La tente d'Oumm Ma'bad",
          "La maison d'Abou Ayyûb al-Ansârî",
          "Le calendrier hégirien : établi par 'Umar (qu'Allah l'agrée)"
        ],
        [
          ["🎯 L'autorisation d'émigrer",
           "Les Compagnons étaient partis en grand nombre à Médine. Les Quraysh craignirent que Mouhammad ﷺ n'atteigne Médine et que la force des musulmans n'y croisse. Ils se concertèrent dans la Dâr an-Nadwa : prendre un jeune homme de chaque tribu et le tuer ﷺ tous ensemble d'un seul coup, afin que les Banou Hâchim ne puissent se venger de tous. Allah informa Son Prophète ﷺ et l'autorisa à émigrer. Il fit coucher 'Alî (qu'Allah l'agrée) dans son lit, lui confia la restitution des dépôts, puis sortit au milieu des meurtriers — Allah voila leurs regards (récit de Sîra).",
           "Coran : 8:30 ; Mousnad Ahmad (récit d'Ibn 'Abbâs) ; Sahih al-Bukhari : 3905"],
          ["🕳️ La grotte de Thawr",
           "Le Prophète ﷺ et Abou Bakr (qu'Allah l'agrée) se cachèrent dans la grotte de Thawr, au sud de La Mecque (la route de Médine étant au nord, ils prirent la direction opposée pour tromper les Quraysh). 'Abdoullah, fils d'Abou Bakr (qu'Allah l'agrée), passait la journée à La Mecque pour écouter les nouvelles des Quraysh et venait la nuit les en informer ; sa fille Asmâ' (qu'Allah l'agrée) apportait la nourriture ; le berger 'Âmir ibn Fouhayra (qu'Allah l'agrée) faisait paître les bêtes, effaçait les traces et apportait du lait frais. Ils restèrent trois nuits. Un jour les éclaireurs quraysh arrivèrent à l'entrée de la grotte ; Abou Bakr dit : « Si l'un d'eux regarde sous ses pieds, il nous verra. » Le Prophète ﷺ dit : « Abou Bakr ! Que penses-tu de deux dont Allah est le troisième ? » (Sahih al-Bukhari : 3653). Le Coran dit : « لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا » — sourate at-Tawba 9:40. L'histoire de la toile d'araignée et des œufs de colombe est célèbre, mais ses chaînes sont faibles ; nous nous en tenons au Coran et au hadith authentique.",
           "Sahih al-Bukhari : 3905, 3653 ; Coran : 9:40"],
          ["🐎 La poursuite de Souraka",
           "Les Quraysh promirent cent chameaux à qui les ramènerait. Souraka ibn Mâlik les suivit. Comme il approchait, les pieds de son cheval s'enfoncèrent dans le sol et il tomba. Il demanda la sécurité ; le Prophète ﷺ invoqua Allah et le cheval se dégagea ; cela se répéta plusieurs fois. Finalement il fut convaincu qu'ils étaient protégés, et il revint en détournant les autres poursuivants (Sahih al-Bukhari). Le récit rapporte que le Prophète ﷺ lui dit : « Souraka ! Que sera-t-il de toi quand tu porteras les bracelets de Kisrâ ? » (al-Bayhaqî ; chaîne discutée). Souraka (qu'Allah l'agrée) embrassa l'islam plus tard, et sous le califat de 'Umar (qu'Allah l'agrée), la Perse fut conquise et on lui fit porter les bracelets de Kisrâ.",
           "Sahih al-Bukhari (Livre des mérites des Ansâr, chapitre de l'émigration) ; al-Bayhaqî (l'annonce des bracelets ; chaîne discutée)"],
          ["🌴 La tente d'Oumm Ma'bad",
           "En chemin, ils passèrent près de la tente d'Oumm Ma'bad. Sa chèvre était faible et ne donnait pas de lait. Le Prophète ﷺ passa la main sur sa mamelle, invoqua Allah, et le lait vint ; tous en burent. Quand son mari revint, Oumm Ma'bad lui décrivit longuement l'hôte. Il dit : « C'est ce Qourachî que les Quraysh recherchent ; si je le trouve, je l'accompagnerai. » (al-Moustadrak d'al-Hâkim ; chaîne discutée)",
           "al-Moustadrak d'al-Hâkim (chaîne discutée)"],
          ["🌅 L'arrivée à Médine",
           "Le Prophète ﷺ arriva d'abord à Qoubâ' chez les Banou 'Amr ibn 'Awf, un lundi (date de rabî' al-awwal : le 12 selon l'avis célèbre, le 8 selon d'autres), y séjourna et posa les fondations de la mosquée de Qoubâ' (durée du séjour : environ quatre jours selon Ibn Ishâq, tandis que Sahih al-Bukhari rapporte d'Anas quatorze nuits). Puis il partit pour Médine le vendredi et dirigea la première prière du vendredi chez les Banou Sâlim. Les gens de Médine sortirent joyeux, chacun voulant qu'il descende chez lui ; il ﷺ dit : « Laissez la chamelle, elle est commandée. » Elle s'agenouilla devant la maison d'Abou Ayyûb al-Ansârî (qu'Allah l'agrée), et il y descendit. Le chant « Tala'a al-badrou 'alaynâ » est célèbre mais sa chaîne n'est pas établie ; nous ne mentionnons donc que la joie. Le calendrier hégirien ne commença pas à l'époque de l'émigration : c'est 'Umar (qu'Allah l'agrée) qui, sous son califat (an 17), prit l'émigration comme point de départ du calendrier.",
           "Sahih al-Bukhari (récit d'Anas : quatorze nuits chez les Banou 'Amr ibn 'Awf) ; le reste : récits de Sîra"],
          ["🎯 La leçon",
           "L'émigration contient la confiance en Allah, la patience et la remise à Lui. Le Prophète ﷺ dit : « Ne crains pas, Allah est avec nous » — c'est la certitude qui doit habiter le cœur de chaque musulman.",
           ""]
        ],
        [
          ["Qui accompagnait le Prophète ﷺ dans l'émigration ?", ["'Alî (qu'Allah l'agrée)", "Abou Bakr (qu'Allah l'agrée)", "'Umar (qu'Allah l'agrée)"]],
          ["Combien de nuits restèrent-ils dans la grotte ?", ["1", "3", "5"]],
          ["Chez qui le Prophète ﷺ descendit-il à Médine ?", ["Sa'd (qu'Allah l'agrée)", "Abou Ayyûb (qu'Allah l'agrée)", "Mous'ab (qu'Allah l'agrée)"]]
        ],
        [
          ["622", "La concertation de Dâr an-Nadwa pour le tuer"],
          ["622", "Trois nuits dans la grotte de Thawr"],
          ["622", "Rabî' al-awwal — arrivée à Qoubâ' et à Médine"]
        ]
      ],
      es: [
        "La emigración a Medina: una nueva página de la historia",
        "La Meca → la cueva de Zawr → Medina",
        "622 (año 12 de la profecía)",
        "Comprender el episodio de la emigración, la cueva de Zawr, Suraqa y el comienzo del calendario hiyri.",
        "Todos los Quraysh los perseguían, pero Alá protegió a Su Profeta ﷺ. ¡Oh Alá! Concédenos la confianza en Ti. Amín.",
        [
          "La emigración: 622",
          "Tres noches en la cueva de Zawr",
          "La persecución de Suraqa",
          "La tienda de Umm Mabad",
          "La casa de Abu Ayyub al-Ansari",
          "El calendario hiyri: lo estableció Umar (que Alá esté complacido con él)"
        ],
        [
          ["🎯 El permiso para emigrar",
           "Los Compañeros habían ido a Medina en gran número. Los Quraysh temieron que Muhámmad ﷺ llegara a Medina y creciera allí la fuerza de los musulmanes. Se reunieron en la Dar an-Nadwa y acordaron tomar un joven de cada tribu y matarlo ﷺ todos a la vez, para que los Banu Hashim no pudieran vengarse de todos. Alá informó a Su Profeta ﷺ y le autorizó a emigrar. Él ﷺ hizo que Ali (que Alá esté complacido con él) durmiera en su lecho, le encargó devolver los depósitos a sus dueños y luego salió entre los asesinos: Alá veló sus ojos (relato de Sira).",
           "Corán: 8:30; Musnad Ahmad (relato de Ibn Abbas); Sahih al-Bujari: 3905"],
          ["🕳️ La cueva de Zawr",
           "El Profeta ﷺ y Abu Bakr (que Alá esté complacido con él) se ocultaron en la cueva de Zawr, al sur de La Meca (el camino a Medina está al norte, así que tomaron la dirección opuesta para engañar a los Quraysh). Abdalah, hijo de Abu Bakr (que Alá esté complacido con él), pasaba el día en La Meca escuchando las noticias de los Quraysh y venía de noche a informarles; su hija Asma (que Alá esté complacido con ella) traía la comida; y el pastor Amir ibn Fuhayra (que Alá esté complacido con él) pastoreaba, borraba las huellas y traía leche fresca. Permanecieron tres noches. Un día los rastreadores de Quraysh llegaron a la boca de la cueva; Abu Bakr dijo: «Si uno de ellos mira bajo sus pies, nos verá.» El Profeta ﷺ dijo: «¡Abu Bakr! ¿Qué piensas de dos cuyo tercero es Alá?» (Sahih al-Bujari: 3653). El Corán dice: «لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا» — sura at-Tawba 9:40. La historia de la tela de araña y los huevos de paloma es famosa, pero sus cadenas son débiles; nos atenemos al Corán y al hadiz auténtico.",
           "Sahih al-Bujari: 3905, 3653; Corán: 9:40"],
          ["🐎 La persecución de Suraqa",
           "Los Quraysh ofrecieron cien camellos a quien los trajera. Suraqa ibn Malik los siguió. Al acercarse, los pies de su caballo se hundieron en la tierra y cayó. Pidió seguridad; el Profeta ﷺ suplicó a Alá y el caballo salió; esto ocurrió varias veces. Finalmente se convenció de que estaban protegidos, y volvió apartando a los demás perseguidores (Sahih al-Bujari). El relato dice que el Profeta ﷺ le dijo: «¡Suraqa! ¿Qué será de ti cuando lleves los brazaletes de Kisra?» (al-Bayhaqi; cadena discutida). Suraqa (que Alá esté complacido con él) abrazó el islam después, y en el califato de Umar (que Alá esté complacido con él) se conquistó Persia y se le hicieron llevar los brazaletes de Kisra.",
           "Sahih al-Bujari (Libro de las virtudes de los Ansar, capítulo de la emigración); al-Bayhaqi (el anuncio de los brazaletes; cadena discutida)"],
          ["🌴 La tienda de Umm Mabad",
           "En el camino pasaron junto a la tienda de Umm Mabad. Su cabra era débil y no daba leche. El Profeta ﷺ pasó la mano por su ubre, suplicó a Alá y la leche brotó; todos bebieron. Cuando su esposo volvió, Umm Mabad le describió con detalle al huésped. Él dijo: «Ese es el qurayshí que buscan los Quraysh; si lo encuentro, lo acompañaré.» (al-Mustadrak de al-Hakim; cadena discutida)",
           "al-Mustadrak de al-Hakim (cadena discutida)"],
          ["🌅 La llegada a Medina",
           "El Profeta ﷺ llegó primero a Quba, a casa de los Banu Amr ibn Awf, un lunes (fecha de rabi' al-awwal: el 12 según la opinión famosa, el 8 según otros), se alojó y puso los cimientos de la mezquita de Quba (duración: unos cuatro días según Ibn Ishaq, mientras que en Sahih al-Bujari se transmiten de Anas catorce noches). Luego partió a Medina el viernes y dirigió la primera oración del viernes en casa de los Banu Salim. La gente de Medina salió gozosa, y cada uno quería que él ﷺ se alojara en su casa; él ﷺ dijo: «Dejad a la camella, pues está mandada.» Se arrodilló ante la casa de Abu Ayyub al-Ansari (que Alá esté complacido con él), y allí se alojó. El canto «Tala'a al-badru alayna» es famoso pero su cadena no está probada; por eso solo mencionamos la alegría. El calendario hiyri no comenzó en la época de la emigración: fue Umar (que Alá esté complacido con él) quien, en su califato (año 17), tomó la emigración como inicio del calendario.",
           "Sahih al-Bujari (relato de Anas: catorce noches en casa de los Banu Amr ibn Awf); el resto: relatos de Sira"],
          ["🎯 La lección",
           "En la emigración hay confianza en Alá, paciencia y encomienda a Él. El Profeta ﷺ dijo: «No temas, Alá está con nosotros»; esa es la certeza que debe haber en el corazón de cada musulmán.",
           ""]
        ],
        [
          ["¿Quién acompañaba al Profeta ﷺ en la emigración?", ["Ali (que Alá esté complacido con él)", "Abu Bakr (que Alá esté complacido con él)", "Umar (que Alá esté complacido con él)"]],
          ["¿Cuántas noches estuvieron en la cueva?", ["1", "3", "5"]],
          ["¿En casa de quién se alojó el Profeta ﷺ en Medina?", ["Sad (que Alá esté complacido con él)", "Abu Ayyub (que Alá esté complacido con él)", "Musab (que Alá esté complacido con él)"]]
        ],
        [
          ["622", "La reunión de Dar an-Nadwa para matarlo"],
          ["622", "Tres noches en la cueva de Zawr"],
          ["622", "Rabi al-awwal: llegada a Quba y a Medina"]
        ]
      ]
    },

    /* ═══════════════ DAY 17 — Masjid-e-Nabawi o bhaichaara ═══════════════ */
    17: {
      mr: [
        "मस्जिदे-नबवी आणि बंधुत्व",
        "मदिना",
        "इ.स. ६२२-६२३",
        "मस्जिदीची बांधणी, मुहाजिर व अन्सार यांचे बंधुत्व आणि इस्लामी समाजाची स्थापना समजून घेणे.",
        "अन्सारांनी मुहाजिरांना आपला अर्धा माल दिला — हे प्रेम फक्त अल्लाहसाठी होते. हे अल्लाह! आम्हालाही असे प्रेम दे. आमीन.",
        [
          "मस्जिदे-नबवीची बांधणी",
          "नबी ﷺ स्वतः विटा उचलत",
          "असहाबे-सुफ्फा: पहिली पाठशाळा",
          "मुहाजिर व अन्सार यांचे बंधुत्व",
          "मिसाके-मदिना",
          "अजानची सुरुवात"
        ],
        [
          ["🕌 मस्जिदे-नबवीची बांधणी",
           "नबी ﷺ यांनी उंटीण सोडली, ती अबू अय्यूब (र.अ.) यांच्या घराजवळ बसली. तिथेच मस्जिदे-नबवीची पायाभरणी झाली. जमीन दोन अनाथ मुलांची (सहल व सुहैल) होती, जी आप ﷺ यांनी किंमत देऊन विकत घेतली (सहीह बुखारी). नबी ﷺ स्वतः विटा उचलत, सहाबांनीही — मुहाजिर व अन्सार सर्वांनी मिळून. मस्जिद साधी होती: कच्च्या विटांच्या भिंती, खजुरीच्या खोडांचे स्तंभ, खजुरीच्या फांद्यांचे छत आणि कच्चा फरशी. सहाबांनी नबी ﷺ यांच्यासोबत रजझ म्हटले: «अल्लाहुम्मा ला खैरा इल्ला खैरल-आखिरा, फगफिर लिल-अन्सारि वल-मुहाजिरा» (हे अल्लाह! आखिरतच्या भल्याशिवाय कोणतेही भले नाही, अन्सार व मुहाजिरांना माफ कर) (सहीह बुखारी). मस्जिदीजवळ कक्ष बांधले गेले जिथे नबी ﷺ यांच्या पत्नी राहिल्या — «हुजराते-नबवी».",
           "सहीह बुखारी: ४२८, ३९०६"],
          ["🏘️ सुफ्फा — पाठशाळा",
           "मस्जिदीच्या एका बाजूला सुफ्फा नावाचा चबुतरा बांधला, जिथे गरीब सहाबा राहत आणि कुरआन शिकत — त्याला इस्लामची सुरुवातीची पाठशाळा म्हणतात. त्यांना «असहाबे-सुफ्फा» म्हणतात. अबू हुरैरा (र.अ.) यांसारखे हदीसचे हाफिज असहाबे-सुफ्फात होते.",
           "सहीह बुखारी: ६४५२ (असहाबे-सुफ्फा)"],
          ["🤝 बंधुत्व",
           "मुहाजिर सर्व काही सोडून मदिन्याला आले होते. नबी ﷺ यांनी एका मुहाजिराला एका अन्सारीशी बंधू बनवले — माल, घर आणि व्यवसाय सर्वात सहभागी. अन्सारांनी नबी ﷺ यांना म्हटले: «आमच्या व आमच्या मुहाजिर बंधूंच्या दरम्यान खजुरीच्या बागा वाटून द्या.» आप ﷺ म्हणाले: «नाही.» तेव्हा अन्सारांनी मुहाजिरांना म्हटले: «तुम्ही आमच्यातर्फे मेहनत करा आणि फळात आमच्यासोबत सहभागी राहा.» मुहाजिरांनी म्हटले: «आम्ही ऐकले आणि मान्य केले.» (सहीह बुखारी). हेच बंधुत्व होते. हजरत साद बिन रबीअ (र.अ.) यांनी आपल्या मुहाजिर बंधू अब्दुर्रहमान बिन औफ (र.अ.) यांना म्हटले: «माझा माल, माझे घर — अर्धे घ्या.» अब्दुर्रहमान (र.अ.) म्हणाले: «अल्लाह तुम्हाला बरकत दे, मला बाजाराचा रस्ता दाखवा.» आणि बाजारात जाऊन व्यापार सुरू केला, इतके कमावले की लवकर श्रीमंत झाले, नंतर लग्न केले.",
           "सहीह बुखारी: ३७८०, ३७८२"],
          ["📜 मिसाके-मदिना",
           "नबी ﷺ यांनी मदिन्यात मुहाजिर, अन्सार आणि यहुद्यांसोबत एक करार केला — हे पहिले इस्लामी बंधनपत्र होते. त्यात: सर्व मिळून बचाव करतील, कोणी कोणावर अत्याचार करणार नाही, निर्णय नबी ﷺ यांचा असेल, पीडिताला मदत होईल. यहुदी आपल्या दीनावर राहतील, मुस्लिम आपल्या दीनावर. सर्व एकमेकांसोबत राहतील. काही इतिहासकार याला सुरुवातीचे लिखित बंधनपत्र म्हणतात (सीरत इब्न हिशाम; या पत्राच्या सनदेबद्दल विद्वानांत मतभेद आहे).",
           "सीरत इब्न हिशाम; अर-रहीकुल-मख्तूम (सनदेवर विद्वानांत मतभेद)"],
          ["🕌 अजानची सुरुवात",
           "मदिन्यात नमाजची वेळ कशी कळवायची? सहाबांनी सल्ला केला: नाकूस वाजवणे (ख्रिश्चनांप्रमाणे) किंवा शिंग फुंकणे (यहुद्यांप्रमाणे) (सहीह बुखारी). नंतर अब्दुल्लाह बिन झैद (र.अ.) यांनी स्वप्नात अजानचे शब्द ऐकले. त्यांनी नबी ﷺ यांना सांगितले तेव्हा आप ﷺ म्हणाले: «हे खरे स्वप्न आहे», आणि म्हणाले की बिलाल (र.अ.) यांना शिकवा कारण त्यांचा आवाज उंच आहे. हजरत उमर (र.अ.) यांनीही असेच स्वप्न पाहिले होते. अशा प्रकारे अजान सुरू झाली (सुनन अबी दाऊद).",
           "सहीह बुखारी: ६०४; सुनन अबी दाऊद: ४९९"],
          ["🎯 बोध",
           "मस्जिदे-नबवी आणि बंधुत्व हा इस्लामी समाजाचा पाया आहे. आपण मस्जिदीशी जोडलेले राहिले पाहिजे आणि मुस्लिमांसोबत बंधुत्वाने राहिले पाहिजे, त्यांची नस्ल, भाषा किंवा रंग कोणताही असो.",
           ""]
        ],
        [
          ["सुफ्फा काय होते?", ["बाजार", "पाठशाळा", "बाग"]],
          ["बंधुत्व कोणी प्रस्थापित केले?", ["अबू बक्र (र.अ.)", "नबी ﷺ", "उमर (र.अ.)"]],
          ["मदिन्यात मुस्लिम व यहुद्यांमधील कराराला काय म्हणतात?", ["मिसाके-मदिना", "मिसाके-उमर", "मिसाके-नबवी"]]
        ],
        [
          ["इ.स. ६२२", "मस्जिदे-नबवीची पायाभरणी"],
          ["इ.स. ६२२", "बंधुत्वाची स्थापना"],
          ["हिजरी १", "मिसाके-मदिना"],
          ["हिजरी १", "अजानची सुरुवात"]
        ]
      ],
      ar: [
        "المسجد النبوي والأخوّة",
        "المدينة",
        "622-623 م",
        "فهم بناء المسجد، والمؤاخاة بين المهاجرين والأنصار، وقيام المجتمع الإسلامي.",
        "أعطى الأنصار للمهاجرين نصف أموالهم — وكان ذلك الحب لله وحده. اللهم ارزقنا مثل هذا الحب. آمين.",
        [
          "بناء المسجد النبوي",
          "النبي ﷺ كان يحمل اللبن بنفسه",
          "أهل الصفة: أول مدرسة",
          "المؤاخاة بين المهاجرين والأنصار",
          "صحيفة المدينة",
          "بداية الأذان"
        ],
        [
          ["🕌 بناء المسجد النبوي",
           "ترك ﷺ الناقة فبركت عند بيت أبي أيوب رضي الله عنه، وهناك وُضع أساس المسجد النبوي. وكانت الأرض ليتيمين (سهل وسهيل)، فاشتراها ﷺ بثمنها (صحيح البخاري). وكان ﷺ يحمل اللبن بنفسه، والصحابة معه — المهاجرون والأنصار جميعًا. وكان المسجد بسيطًا: جدران من اللبن، وأعمدة من جذوع النخل، وسقف من سعف النخل، وأرض ترابية. ورجز الصحابة مع النبي ﷺ: «اللهم لا خير إلا خير الآخرة، فاغفر للأنصار والمهاجرة» (صحيح البخاري). وبُني بجانب المسجد حجرات سكن فيها أزواج النبي ﷺ — «الحجرات النبوية».",
           "صحيح البخاري: 428، 3906"],
          ["🏘️ الصفة — مدرسة",
           "بُني في جانب المسجد مكان مرتفع يسمى الصفة، يسكنه فقراء الصحابة ويتعلمون القرآن — ويُعد أول مدرسة في الإسلام. ويُسمَّون «أهل الصفة». وكان فيهم مثل أبي هريرة رضي الله عنه من حفاظ الحديث.",
           "صحيح البخاري: 6452 (أهل الصفة)"],
          ["🤝 المؤاخاة",
           "جاء المهاجرون إلى المدينة وقد تركوا كل شيء. فآخى النبي ﷺ بين كل مهاجر وأنصاري — في المال والبيت والتجارة. وقال الأنصار للنبي ﷺ: «اقسم بيننا وبين إخواننا المهاجرين حيطان النخل». فقال ﷺ: «لا». فقال الأنصار للمهاجرين: «تكفوننا المؤونة وتشركوننا في الثمر». فقال المهاجرون: «سمعنا وأطعنا» (صحيح البخاري). وكان هذا هو الإيثار. وقال سعد بن الربيع رضي الله عنه لأخيه المهاجري عبد الرحمن بن عوف رضي الله عنه: «مالي وبيتي — خذ نصفه». فقال عبد الرحمن: «بارك الله فيك، دلّني على السوق». فذهب فاتّجر حتى ربح وأصبح غنيًّا ثم تزوج.",
           "صحيح البخاري: 3780، 3782"],
          ["📜 صحيفة المدينة",
           "كتب النبي ﷺ بين المهاجرين والأنصار واليهود في المدينة كتابًا — وهو أول دستور إسلامي. فيه: أنهم ينصرون من دهمهم، ولا يظلم أحد أحدًا، وأن ما اختلفوا فيه يُرد إلى النبي ﷺ، وأن المظلوم يُنصر. ولليهود دينهم وللمسلمين دينهم، وكلٌّ يتعايش مع الآخر. ويراه بعض المؤرخين أول وثيقة دستورية مكتوبة (سيرة ابن هشام؛ وفي إسناد هذه الصحيفة خلاف بين أهل العلم).",
           "سيرة ابن هشام؛ الرحيق المختوم (وفي الإسناد خلاف بين أهل العلم)"],
          ["🕌 بداية الأذان",
           "كيف يُعلم الناس بوقت الصلاة في المدينة؟ تشاور الصحابة: ضرب الناقوس (كالنصارى) أو النفخ في البوق (كيهود) (صحيح البخاري). ثم رأى عبد الله بن زيد رضي الله عنه في المنام كلمات الأذان. فأخبر النبي ﷺ فقال: «إنها لرؤيا حق»، وأمر أن يعلّمها بلالًا رضي الله عنه لنداء صوته. وقد رأى عمر رضي الله عنه مثل ذلك. وهكذا بدأ الأذان (سنن أبي داود).",
           "صحيح البخاري: 604؛ سنن أبي داود: 499"],
          ["🎯 العبرة",
           "المسجد النبوي والأخوّة أساس المجتمع الإسلامي. فعلينا أن نتعلق بالمسجد، وأن نعيش مع المسلمين بالأخوّة، أيًّا كان جنسهم ولغتهم ولونهم.",
           ""]
        ],
        [
          ["ما هي الصفة؟", ["سوق", "مدرسة", "بستان"]],
          ["من أسّس المؤاخاة؟", ["أبو بكر رضي الله عنه", "النبي ﷺ", "عمر رضي الله عنه"]],
          ["ماذا يسمى العهد بين المسلمين واليهود في المدينة؟", ["صحيفة المدينة", "عهد عمر", "العهد النبوي"]]
        ],
        [
          ["622", "أساس المسجد النبوي"],
          ["622", "قيام المؤاخاة"],
          ["السنة الأولى", "صحيفة المدينة"],
          ["السنة الأولى", "بداية الأذان"]
        ]
      ],
      fr: [
        "La mosquée du Prophète et la fraternité",
        "Médine",
        "622-623",
        "Comprendre la construction de la mosquée, la fraternité entre les émigrés et les Ansâr, et l'établissement de la société islamique.",
        "Les Ansâr donnèrent aux émigrés la moitié de leurs biens — cet amour n'était que pour Allah. Ô Allah ! Accorde-nous un tel amour. Âmîn.",
        [
          "La construction de la mosquée du Prophète",
          "Le Prophète ﷺ portait lui-même les briques",
          "Les gens de la Souffa : la première école",
          "La fraternité entre émigrés et Ansâr",
          "Le pacte de Médine",
          "Le début de l'adhan"
        ],
        [
          ["🕌 La construction de la mosquée",
           "Il ﷺ laissa la chamelle, qui s'agenouilla près de la maison d'Abou Ayyûb (qu'Allah l'agrée) ; là furent posées les fondations de la mosquée du Prophète. Le terrain appartenait à deux orphelins (Sahl et Souhayl) ; il ﷺ l'acheta à son prix (Sahih al-Bukhari). Le Prophète ﷺ portait lui-même les briques, et les Compagnons avec lui — émigrés et Ansâr ensemble. La mosquée était simple : murs de briques crues, colonnes de troncs de palmier, toit de palmes et sol de terre. Les Compagnons récitaient avec lui ﷺ : « Allâhumma lâ khayra illâ khayr al-âkhira, faghfir lil-Ansâri wal-Mouhâjira » (Ô Allah ! Il n'y a de bien que celui de l'au-delà ; pardonne aux Ansâr et aux émigrés) (Sahih al-Bukhari). Des chambres furent bâties près de la mosquée pour les épouses du Prophète ﷺ — les « chambres prophétiques ».",
           "Sahih al-Bukhari : 428, 3906"],
          ["🏘️ La Souffa — une école",
           "On construisit sur un côté de la mosquée une plateforme appelée as-Souffa, où vivaient les Compagnons pauvres et où ils apprenaient le Coran — on la considère comme la première école de l'islam. On les appelle « les gens de la Souffa ». Parmi eux se trouvaient des mémorisateurs de hadiths comme Abou Hourayra (qu'Allah l'agrée).",
           "Sahih al-Bukhari : 6452 (les gens de la Souffa)"],
          ["🤝 La fraternité",
           "Les émigrés étaient venus à Médine en abandonnant tout. Le Prophète ﷺ unit chaque émigré à un Ansârî comme frère — partageant biens, maison et commerce. Les Ansâr dirent au Prophète ﷺ : « Partage entre nous et nos frères émigrés les vergers de palmiers. » Il ﷺ dit : « Non. » Alors les Ansâr dirent aux émigrés : « Chargez-vous du travail pour nous et partagez avec nous les fruits. » Les émigrés dirent : « Nous avons entendu et nous acceptons. » (Sahih al-Bukhari). Telle était la fraternité. Sa'd ibn Rabî' (qu'Allah l'agrée) dit à son frère émigré 'Abd ar-Rahmân ibn 'Awf (qu'Allah l'agrée) : « Mon bien, ma maison — prends-en la moitié. » Il répondit : « Qu'Allah te bénisse ; montre-moi le chemin du marché. » Il alla commercer et gagna tant qu'il devint riche, puis se maria.",
           "Sahih al-Bukhari : 3780, 3782"],
          ["📜 Le pacte de Médine",
           "Le Prophète ﷺ conclut à Médine un pacte entre les émigrés, les Ansâr et les Juifs — ce fut la première constitution islamique. Elle stipulait : tous défendent ensemble, nul n'opprime autrui, le jugement revient au Prophète ﷺ, l'opprimé est secouru. Les Juifs gardent leur religion, les musulmans la leur ; tous vivent ensemble. Certains historiens y voient le premier document constitutionnel écrit (Sîra d'Ibn Hichâm ; les savants divergent sur la chaîne de ce document).",
           "Sîra d'Ibn Hichâm ; Ar-Rahîq al-Makhtûm (divergence des savants sur la chaîne)"],
          ["🕌 Le début de l'adhan",
           "Comment annoncer l'heure de la prière à Médine ? Les Compagnons proposèrent : frapper le nâqoûs (comme les chrétiens) ou souffler dans une corne (comme les Juifs) (Sahih al-Bukhari). Puis 'Abdoullah ibn Zayd (qu'Allah l'agrée) entendit en rêve les paroles de l'adhan. Il en informa le Prophète ﷺ, qui dit : « C'est un rêve véridique », et ordonna de les enseigner à Bilâl (qu'Allah l'agrée) dont la voix portait. 'Umar (qu'Allah l'agrée) fit un rêve semblable. Ainsi commença l'adhan (Sunan Abi Dawud).",
           "Sahih al-Bukhari : 604 ; Sunan Abi Dawud : 499"],
          ["🎯 La leçon",
           "La mosquée du Prophète et la fraternité sont le fondement de la société islamique. Nous devons rester attachés à la mosquée et vivre en fraternité avec les musulmans, quels que soient leur origine, leur langue et leur couleur.",
           ""]
        ],
        [
          ["Qu'était la Souffa ?", ["Un marché", "Une école", "Un jardin"]],
          ["Qui établit la fraternité ?", ["Abou Bakr (qu'Allah l'agrée)", "Le Prophète ﷺ", "'Umar (qu'Allah l'agrée)"]],
          ["Comment appelle-t-on le pacte entre musulmans et Juifs à Médine ?", ["Le pacte de Médine", "Le pacte de 'Umar", "Le pacte prophétique"]]
        ],
        [
          ["622", "Fondation de la mosquée du Prophète"],
          ["622", "Établissement de la fraternité"],
          ["1re année hégirienne", "Le pacte de Médine"],
          ["1re année hégirienne", "Le début de l'adhan"]
        ]
      ],
      es: [
        "La mezquita del Profeta y la hermandad",
        "Medina",
        "622-623",
        "Comprender la construcción de la mezquita, la hermandad entre emigrados y Ansar, y el establecimiento de la sociedad islámica.",
        "Los Ansar dieron a los emigrados la mitad de sus bienes; ese amor era solo por Alá. ¡Oh Alá! Concédenos un amor así. Amín.",
        [
          "La construcción de la mezquita del Profeta",
          "El Profeta ﷺ llevaba él mismo los ladrillos",
          "La gente de la Suffa: la primera escuela",
          "La hermandad entre emigrados y Ansar",
          "El pacto de Medina",
          "El comienzo del adhan"
        ],
        [
          ["🕌 La construcción de la mezquita",
           "Él ﷺ dejó a la camella, que se arrodilló junto a la casa de Abu Ayyub (que Alá esté complacido con él); allí se pusieron los cimientos de la mezquita del Profeta. El terreno era de dos huérfanos (Sahl y Suhayl) y él ﷺ lo compró por su precio (Sahih al-Bujari). El Profeta ﷺ llevaba él mismo los ladrillos, y los Compañeros con él: emigrados y Ansar juntos. La mezquita era sencilla: muros de ladrillo crudo, columnas de troncos de palmera, techo de palmas y suelo de tierra. Los Compañeros recitaban con él ﷺ: «Aláhumma la jayra illa jayr al-ajira, fagfir lil-Ansari wal-Muhayira» (¡Oh Alá! No hay bien sino el del más allá; perdona a los Ansar y a los emigrados) (Sahih al-Bujari). Junto a la mezquita se construyeron habitaciones donde vivieron las esposas del Profeta ﷺ: las «habitaciones proféticas».",
           "Sahih al-Bujari: 428, 3906"],
          ["🏘️ La Suffa: una escuela",
           "Se construyó a un lado de la mezquita una plataforma llamada as-Suffa, donde vivían los Compañeros pobres y aprendían el Corán; se la considera la primera escuela del islam. Se les llama «la gente de la Suffa». Entre ellos había memorizadores de hadices como Abu Hurayra (que Alá esté complacido con él).",
           "Sahih al-Bujari: 6452 (la gente de la Suffa)"],
          ["🤝 La hermandad",
           "Los emigrados habían llegado a Medina dejándolo todo. El Profeta ﷺ unió a cada emigrado con un Ansari como hermano, compartiendo bienes, casa y comercio. Los Ansar dijeron al Profeta ﷺ: «Reparte entre nosotros y nuestros hermanos emigrados los huertos de palmeras.» Él ﷺ dijo: «No.» Entonces los Ansar dijeron a los emigrados: «Trabajad por nosotros y compartid con nosotros los frutos.» Los emigrados dijeron: «Hemos oído y aceptamos.» (Sahih al-Bujari). Esa era la hermandad. Sad ibn Rabi (que Alá esté complacido con él) dijo a su hermano emigrado Abd ar-Rahman ibn Awf (que Alá esté complacido con él): «Mi bien y mi casa: toma la mitad.» Él respondió: «Que Alá te bendiga; muéstrame el camino del mercado.» Fue a comerciar y ganó tanto que se hizo rico, y luego se casó.",
           "Sahih al-Bujari: 3780, 3782"],
          ["📜 El pacto de Medina",
           "El Profeta ﷺ concluyó en Medina un pacto entre los emigrados, los Ansar y los judíos; fue la primera constitución islámica. Establecía: todos defienden juntos, nadie oprime a otro, la decisión corresponde al Profeta ﷺ, se auxilia al oprimido. Los judíos conservan su religión y los musulmanes la suya; todos conviven. Algunos historiadores lo consideran el primer documento constitucional escrito (Sira de Ibn Hisham; los sabios discrepan sobre la cadena de este documento).",
           "Sira de Ibn Hisham; Ar-Rahiq al-Majtum (discrepancia de los sabios sobre la cadena)"],
          ["🕌 El comienzo del adhan",
           "¿Cómo anunciar la hora de la oración en Medina? Los Compañeros propusieron: tocar el naqus (como los cristianos) o soplar un cuerno (como los judíos) (Sahih al-Bujari). Luego Abdalah ibn Zayd (que Alá esté complacido con él) oyó en sueños las palabras del adhan. Se lo comunicó al Profeta ﷺ, que dijo: «Es un sueño verdadero», y ordenó enseñárselas a Bilal (que Alá esté complacido con él), cuya voz era potente. Umar (que Alá esté complacido con él) tuvo un sueño semejante. Así comenzó el adhan (Sunan Abi Dawud).",
           "Sahih al-Bujari: 604; Sunan Abi Dawud: 499"],
          ["🎯 La lección",
           "La mezquita del Profeta y la hermandad son el fundamento de la sociedad islámica. Debemos permanecer unidos a la mezquita y vivir en hermandad con los musulmanes, sea cual sea su origen, lengua o color.",
           ""]
        ],
        [
          ["¿Qué era la Suffa?", ["Un mercado", "Una escuela", "Un jardín"]],
          ["¿Quién estableció la hermandad?", ["Abu Bakr (que Alá esté complacido con él)", "El Profeta ﷺ", "Umar (que Alá esté complacido con él)"]],
          ["¿Cómo se llama el pacto entre musulmanes y judíos en Medina?", ["El pacto de Medina", "El pacto de Umar", "El pacto profético"]]
        ],
        [
          ["622", "Fundación de la mezquita del Profeta"],
          ["622", "Establecimiento de la hermandad"],
          ["Año 1 hiyri", "El pacto de Medina"],
          ["Año 1 hiyri", "El comienzo del adhan"]
        ]
      ]
    },

    /* ═══════════════ DAY 18 — Qibla ki tabdeeli ═══════════════ */
    18: {
      mr: [
        "किब्ल्याची बदल — उम्मतीची ओळख",
        "मदिना",
        "इ.स. ६२४ (हिजरी २)",
        "बैतुल-मुकद्दसकडून काबाकडे किब्ला बदलण्याची आणि उम्मतीची स्वतंत्र ओळख निर्माण झाल्याची घटना समजून घेणे.",
        "एका हुकुमाने संपूर्ण उम्मतीची ओळख बदलली. हे अल्लाह! आम्हाला आमच्या इस्लामी ओळखीवर ठाम ठेव. आमीन.",
        [
          "आधी बैतुल-मुकद्दस",
          "नंतर काबाचा हुकूम",
          "मस्जिदे-किब्लतैन",
          "यहुद्यांचा आक्षेप",
          "उम्मते-वस्ताचे फजीलत"
        ],
        [
          ["🕌 आधी बैतुल-मुकद्दस",
           "हिजरतीनंतर सुमारे १६-१७ महिने नबी ﷺ व सहाबा बैतुल-मुकद्दसकडे तोंड करून नमाज़ पढत राहिले (सहीह बुखारी). मक्केत आप ﷺ अशा प्रकारे उभे राहत की काबाही समोर असे; मदिन्यापासून या दोन्ही वेगवेगळ्या दिशांना होत्या. नबी ﷺ यांची इच्छा होती की इब्राहीम (अ.स.) यांच्या किब्ल्याकडे, म्हणजे काबाकडे तोंड व्हावे; म्हणून आप ﷺ वारंवार आकाशाकडे पाहत आणि वहीची वाट पाहत.",
           "सहीह बुखारी: ४०, ३९९; मुस्नद अहमद (इब्न अब्बास (र.अ.): मक्केत)"],
          ["📖 वही उतरली",
           "अल्लाहने उतरवले: «قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ» (आम्ही तुमचे आकाशाकडे वारंवार पाहणे पाहिले; आता आम्ही तुम्हाला तो किब्ला देऊ ज्याने तुम्ही राजी व्हाल, तेव्हा आपले तोंड मस्जिदे-हरामकडे फिरवा) — सूरह अल-बकरा २:१४४.",
           "कुरआन: २:१४४"],
          ["🔄 नमाज़ेदरम्यान बदल",
           "सीरतच्या रिवायतींनुसार एका मस्जिदीत (जी नंतर «मस्जिदे-किब्लतैन» म्हणून प्रसिद्ध झाली) नमाज़ सुरू होती की हुकूम पोहोचला आणि नमाजी त्याच अवस्थेत काबाकडे वळले. त्याचप्रमाणे कुबाच्या लोकांना फजरच्या नमाज़ेत बातमी पोहोचली आणि तेही नमाज़ेतच काबाकडे वळले (सहीह बुखारी व मुस्लिम). सहीह बुखारीत (बरा (र.अ.) यांच्याकडून) आहे की काबाकडे पढलेली पहिली नमाज़ असरची होती.",
           "सहीह बुखारी (किताबुस-सलात, बाबु अहलि कुबा); सहीह मुस्लिम; मस्जिदे-किब्लतैनची घटना: सीरतच्या रिवायती"],
          ["🕍 यहुद्यांचा नकार",
           "यहुदी म्हणाले: «आता मुहम्मद ﷺ यांनी आमचा किब्ला सोडून काबाकडे तोंड का केले?» अल्लाहने उत्तर दिले: «لِّلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ ۚ يَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ» (पूर्व व पश्चिम अल्लाहचे आहे, ज्याला इच्छा त्याला सरळ मार्ग दाखवतो) — सूरह अल-बकरा २:१४२. खरी गोष्ट ही होती की किब्ला बदलल्याने उम्मतीची स्वतंत्र ओळख बनली — आता मुस्लिम एक वेगळी उम्मत आहेत, यहुदी व ख्रिश्चनांपासून वेगळी.",
           "कुरआन: २:१४२"],
          ["🌟 उम्मते-वस्ता",
           "अल्लाहने सांगितले: «وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا» (आम्ही तुम्हाला «उम्मते-वस्ता» बनवले जेणेकरून तुम्ही लोकांवर साक्षीदार व्हाल आणि रसूल तुमच्यावर साक्षीदार असेल) — सूरह अल-बकरा २:१४३. हे उम्मतीचे फजीलत आहे, हाच किब्ला बदलण्याचा खरा उद्देश.",
           "कुरआन: २:१४३"],
          ["🎯 बोध",
           "किब्ला बदलल्यावरून कळते की अल्लाह आपल्या उम्मतीला स्वतंत्र ओळख देतो. आपण आपल्या इस्लामी ओळखीचा अभिमान बाळगला पाहिजे आणि यहुदी व ख्रिश्चनांची नक्कल करू नये.",
           ""]
        ],
        [
          ["किब्ला कुठून कुठे बदलला?", ["काबाकडून बैतुल-मुकद्दसकडे", "बैतुल-मुकद्दसकडून काबाकडे", "मदिन्यापासून मक्केकडे"]],
          ["कोणत्या मस्जिदीत बदल झाला?", ["मस्जिदे-नबवी", "मस्जिदे-किब्लतैन", "मस्जिदे-कुबा"]],
          ["उम्मतीला काय म्हटले गेले?", ["उम्मते-वस्ता", "उम्मते-आखिर", "उम्मते-अव्वल"]]
        ],
        [
          ["इ.स. ६२४", "किब्ला बदलाचा हुकूम"],
          ["इ.स. ६२४", "मस्जिदे-किब्लतैनची घटना"]
        ]
      ],
      ar: [
        "تحويل القبلة — هوية الأمة",
        "المدينة",
        "624 م (السنة الثانية من الهجرة)",
        "فهم تحويل القبلة من بيت المقدس إلى الكعبة، ونشوء هوية الأمة المتميزة.",
        "حكم واحد غيّر هوية الأمة كلها. اللهم ثبّتنا على هويتنا الإسلامية. آمين.",
        [
          "أولًا بيت المقدس",
          "ثم الأمر بالكعبة",
          "مسجد القبلتين",
          "اعتراض اليهود",
          "فضل الأمة الوسط"
        ],
        [
          ["🕌 أولًا بيت المقدس",
           "بعد الهجرة استقبل النبي ﷺ وأصحابه بيت المقدس في الصلاة نحو ستة عشر أو سبعة عشر شهرًا (صحيح البخاري). وكان ﷺ في مكة يقف بحيث تكون الكعبة بين يديه؛ أما في المدينة فاتجهت الجهتان مختلفتين. وكان ﷺ يحب أن تكون قبلته قبلة إبراهيم عليه السلام، أي الكعبة، فكان يقلّب وجهه في السماء ينتظر الوحي.",
           "صحيح البخاري: 40، 399؛ مسند أحمد (ابن عباس رضي الله عنه: في مكة)"],
          ["📖 نزول الوحي",
           "أنزل الله: «قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ» — سورة البقرة 2:144.",
           "القرآن: 2:144"],
          ["🔄 التحويل في أثناء الصلاة",
           "جاء في روايات السيرة أنهم كانوا يصلّون في مسجد (عُرف بعد ذلك بمسجد القبلتين) فبلغهم الأمر فاستداروا إلى الكعبة في صلاتهم. وكذلك بلغ أهل قباء الخبر في صلاة الفجر فاستداروا إلى الكعبة وهم في الصلاة (صحيح البخاري ومسلم). وفي صحيح البخاري عن البراء رضي الله عنه أن أول صلاة صُلّيت إلى الكعبة كانت العصر.",
           "صحيح البخاري (كتاب الصلاة، باب أهل قباء)؛ صحيح مسلم؛ قصة مسجد القبلتين: روايات السيرة"],
          ["🕍 اعتراض اليهود",
           "قال اليهود: «ما بال محمد ﷺ ترك قبلتنا واستقبل الكعبة؟» فأجاب الله: «لِّلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ ۚ يَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ» — سورة البقرة 2:142. والحقيقة أن تحويل القبلة جعل للأمة هوية مستقلة — فالمسلمون الآن أمة متميزة عن اليهود والنصارى.",
           "القرآن: 2:142"],
          ["🌟 الأمة الوسط",
           "قال الله: «وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا» — سورة البقرة 2:143. هذا فضل الأمة، وهذا هو المقصد الحقيقي من تحويل القبلة.",
           "القرآن: 2:143"],
          ["🎯 العبرة",
           "يُفهم من تحويل القبلة أن الله يمنح أمته هوية خاصة. فعلينا أن نعتز بهويتنا الإسلامية وألا نقلّد اليهود والنصارى.",
           ""]
        ],
        [
          ["من أين إلى أين حُوّلت القبلة؟", ["من الكعبة إلى بيت المقدس", "من بيت المقدس إلى الكعبة", "من المدينة إلى مكة"]],
          ["في أي مسجد وقع التحويل؟", ["المسجد النبوي", "مسجد القبلتين", "مسجد قباء"]],
          ["بماذا وُصفت الأمة؟", ["الأمة الوسط", "الأمة الآخرة", "الأمة الأولى"]]
        ],
        [
          ["624", "الأمر بتحويل القبلة"],
          ["624", "قصة مسجد القبلتين"]
        ]
      ],
      fr: [
        "Le changement de qibla — l'identité de la communauté",
        "Médine",
        "624 (2e année de l'hégire)",
        "Comprendre le changement de qibla de Bayt al-Maqdis vers la Kaaba et la naissance d'une identité propre à la communauté.",
        "Un seul ordre a changé l'identité de toute la communauté. Ô Allah ! Affermis-nous dans notre identité islamique. Âmîn.",
        [
          "D'abord Bayt al-Maqdis",
          "Puis l'ordre de la Kaaba",
          "La mosquée des deux qiblas",
          "L'objection des Juifs",
          "Le mérite de la communauté médiane"
        ],
        [
          ["🕌 D'abord Bayt al-Maqdis",
           "Après l'émigration, le Prophète ﷺ et les Compagnons prièrent en direction de Bayt al-Maqdis pendant environ seize ou dix-sept mois (Sahih al-Bukhari). À La Mecque, il ﷺ se plaçait de façon que la Kaaba fût aussi devant lui ; à Médine, les deux directions étaient différentes. Il ﷺ désirait que sa qibla fût celle d'Ibrâhîm (paix sur lui), c'est-à-dire la Kaaba ; il levait donc souvent les yeux vers le ciel, attendant la révélation.",
           "Sahih al-Bukhari : 40, 399 ; Mousnad Ahmad (Ibn 'Abbâs : à La Mecque)"],
          ["📖 La révélation descendit",
           "Allah révéla : « قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ » — sourate al-Baqara 2:144.",
           "Coran : 2:144"],
          ["🔄 Le changement pendant la prière",
           "Les récits de Sîra rapportent qu'on priait dans une mosquée (appelée ensuite « mosquée des deux qiblas ») quand l'ordre parvint : les fidèles se tournèrent vers la Kaaba en pleine prière. De même, les gens de Qoubâ' apprirent la nouvelle pendant la prière de Fajr et se tournèrent vers la Kaaba sans interrompre leur prière (Sahih al-Bukhari et Muslim). Selon Sahih al-Bukhari (d'après al-Barâ'), la première prière accomplie vers la Kaaba fut celle de 'Asr.",
           "Sahih al-Bukhari (Livre de la prière, chapitre des gens de Qoubâ') ; Sahih Muslim ; l'épisode de la mosquée des deux qiblas : récits de Sîra"],
          ["🕍 Le refus des Juifs",
           "Les Juifs dirent : « Pourquoi Mouhammad ﷺ a-t-il délaissé notre qibla pour la Kaaba ? » Allah répondit : « لِّلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ ۚ يَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ » — sourate al-Baqara 2:142. En vérité, le changement de qibla donna à la communauté une identité distincte : les musulmans sont désormais une communauté à part, distincte des Juifs et des chrétiens.",
           "Coran : 2:142"],
          ["🌟 La communauté médiane",
           "Allah dit : « وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا » — sourate al-Baqara 2:143. C'est le mérite de cette communauté, et c'est le but réel du changement de qibla.",
           "Coran : 2:143"],
          ["🎯 La leçon",
           "Le changement de qibla montre qu'Allah donne à Sa communauté une identité propre. Nous devons être fiers de notre identité islamique et ne pas imiter les Juifs et les chrétiens.",
           ""]
        ],
        [
          ["D'où vers où la qibla fut-elle changée ?", ["De la Kaaba à Bayt al-Maqdis", "De Bayt al-Maqdis à la Kaaba", "De Médine à La Mecque"]],
          ["Dans quelle mosquée eut lieu le changement ?", ["La mosquée du Prophète", "La mosquée des deux qiblas", "La mosquée de Qoubâ'"]],
          ["Comment la communauté fut-elle qualifiée ?", ["La communauté médiane", "La dernière communauté", "La première communauté"]]
        ],
        [
          ["624", "L'ordre du changement de qibla"],
          ["624", "L'épisode de la mosquée des deux qiblas"]
        ]
      ],
      es: [
        "El cambio de qibla: la identidad de la comunidad",
        "Medina",
        "624 (año 2 de la hégira)",
        "Comprender el cambio de qibla de Bayt al-Maqdis hacia la Kaaba y el nacimiento de una identidad propia de la comunidad.",
        "Una sola orden cambió la identidad de toda la comunidad. ¡Oh Alá! Afirmanos en nuestra identidad islámica. Amín.",
        [
          "Primero Bayt al-Maqdis",
          "Luego la orden de la Kaaba",
          "La mezquita de las dos qiblas",
          "La objeción de los judíos",
          "El mérito de la comunidad media"
        ],
        [
          ["🕌 Primero Bayt al-Maqdis",
           "Tras la emigración, el Profeta ﷺ y los Compañeros rezaron hacia Bayt al-Maqdis unos dieciséis o diecisiete meses (Sahih al-Bujari). En La Meca él ﷺ se colocaba de modo que la Kaaba quedara también al frente; en Medina las dos direcciones eran distintas. Él ﷺ deseaba que su qibla fuera la de Ibrahim (la paz sea con él), es decir, la Kaaba; por eso levantaba a menudo los ojos al cielo esperando la revelación.",
           "Sahih al-Bujari: 40, 399; Musnad Ahmad (Ibn Abbas: en La Meca)"],
          ["📖 La revelación descendió",
           "Alá reveló: «قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ» — sura al-Baqara 2:144.",
           "Corán: 2:144"],
          ["🔄 El cambio durante la oración",
           "Los relatos de Sira cuentan que se rezaba en una mezquita (llamada después «mezquita de las dos qiblas») cuando llegó la orden, y los fieles se giraron hacia la Kaaba en plena oración. Igualmente, a la gente de Quba le llegó la noticia durante la oración del Fayr y se giraron hacia la Kaaba sin interrumpir la oración (Sahih al-Bujari y Muslim). Según Sahih al-Bujari (de al-Bara), la primera oración hecha hacia la Kaaba fue la del Asr.",
           "Sahih al-Bujari (Libro de la oración, capítulo de la gente de Quba); Sahih Muslim; el episodio de la mezquita de las dos qiblas: relatos de Sira"],
          ["🕍 El rechazo de los judíos",
           "Los judíos dijeron: «¿Por qué Muhámmad ﷺ ha dejado nuestra qibla por la Kaaba?» Alá respondió: «لِّلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ ۚ يَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ» — sura al-Baqara 2:142. La verdad es que el cambio de qibla dio a la comunidad una identidad distinta: los musulmanes son ahora una comunidad aparte, distinta de judíos y cristianos.",
           "Corán: 2:142"],
          ["🌟 La comunidad media",
           "Alá dijo: «وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا» — sura al-Baqara 2:143. Ese es el mérito de esta comunidad, y ese es el propósito real del cambio de qibla.",
           "Corán: 2:143"],
          ["🎯 La lección",
           "El cambio de qibla muestra que Alá da a Su comunidad una identidad propia. Debemos enorgullecernos de nuestra identidad islámica y no imitar a judíos y cristianos.",
           ""]
        ],
        [
          ["¿De dónde a dónde cambió la qibla?", ["De la Kaaba a Bayt al-Maqdis", "De Bayt al-Maqdis a la Kaaba", "De Medina a La Meca"]],
          ["¿En qué mezquita ocurrió el cambio?", ["La mezquita del Profeta", "La mezquita de las dos qiblas", "La mezquita de Quba"]],
          ["¿Cómo se calificó a la comunidad?", ["La comunidad media", "La última comunidad", "La primera comunidad"]]
        ],
        [
          ["624", "La orden del cambio de qibla"],
          ["624", "El episodio de la mezquita de las dos qiblas"]
        ]
      ]
    },

    /* ═══════════════ DAY 19 — Ramazan o roze ═══════════════ */
    19: {
      mr: [
        "रमजान आणि रोजे — उपासनेचे प्रशिक्षण",
        "मदिना",
        "इ.स. ६२४ (हिजरी २)",
        "रोज्यांची फर्जियत, रमजानचे फजीलत आणि उम्मतीच्या प्रशिक्षणाची घटना समजून घेणे.",
        "रोज्याचा उद्देश तकवा आहे. हे अल्लाह! आम्हाला रमजानची किंमत दे आणि रमजानचे प्रशिक्षण आयुष्यभर टिकवण्याची तौफीक दे. आमीन.",
        [
          "रोजे हिजरी २ मध्ये फर्ज",
          "कुरआन रमजानमध्ये उतरले",
          "लैलतुल-कद्र हजार महिन्यांपेक्षा उत्तम",
          "सहरीत बरकत",
          "रोजा फक्त उपाशी राहणे नाही"
        ],
        [
          ["📖 फर्जियतीचा हुकूम",
           "मदिन्यात, हिजरी २ मध्ये अल्लाहने रोजे फर्ज केले: «يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ» (हे ईमानवाल्यांनो! तुमच्यावर रोजे फर्ज केले गेले, जसे तुमच्यापूर्वीच्या लोकांवर फर्ज केले गेले होते, यासाठी की तुम्ही मुत्तकी व्हावे) — सूरह अल-बकरा २:१८३.",
           "कुरआन: २:१८३"],
          ["🌙 रमजानचे फजीलत",
           "रमजान तो महिना आहे ज्यात कुरआन उतरले: «شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ» (रमजानचा महिना तो आहे ज्यात कुरआन उतरवले गेले, जे लोकांसाठी हिदायत आहे) — सूरह अल-बकरा २:१८५. याच महिन्यात पहिली वही आली, यातच लैलतुल-कद्र आहे जी हजार महिन्यांपेक्षा उत्तम आहे.",
           "कुरआन: २:१८५, ९७:३"],
          ["🍽️ सहरी व इफ्तार",
           "नबी ﷺ म्हणाले: «सहरी खा, कारण सहरीत बरकत आहे.» (सहीह बुखारी: १९२३). दुसरी रिवायत: «रोजादारासाठी दोन आनंद आहेत: एक इफ्तारच्या वेळी आणि एक आपल्या रबला भेटल्यावर.» (सहीह मुस्लिम: ११५१). नबी ﷺ नमाज़ेपूर्वी ताज्या खजुरीने रोजा सोडत; त्या नसतील तर सुक्या खजुरीने, आणि त्याही नसतील तर काही घोट पाण्याने (सुनन अबी दाऊद: २३५६, हसन).",
           "सहीह बुखारी: १९२३; सहीह मुस्लिम: ११५१; सुनन अबी दाऊद: २३५६ (हसन)"],
          ["🤲 सहानुभूतीचे प्रशिक्षण",
           "रोज्याचा खरा उद्देश तकवा आहे. नबी ﷺ म्हणाले: «ज्याने खोटे आणि खोट्यावर आचरण सोडले नाही, अल्लाहला त्याच्या खाणे-पिणे सोडण्याची गरज नाही.» (सहीह बुखारी: १९०३). रोजा फक्त उपाशी राहणे नाही, तर डोळे, जीभ आणि मन सर्वांचा रोजा आहे. नबी ﷺ सर्व लोकांत सर्वाधिक उदार होते आणि रमजानमध्ये सर्वाधिक दानशूर — वाहणाऱ्या वाऱ्यापेक्षाही जास्त (सहीह बुखारी: ६).",
           "सहीह बुखारी: १९०३, ६"],
          ["🌟 नफिल रोजे",
           "नबी ﷺ सोमवार, गुरुवार, अय्यामे-बीज (१३, १४, १५ तारखा), अरफा आणि आशूरा (१० मुहर्रम) यांचे रोजे राखत, मुहर्रममध्ये जास्त आणि शाबानमध्ये जास्त. ते म्हणाले: «ज्याने रमजाननंतर शव्वालचे ६ रोजे राखले, त्याला कायम रोजे राखल्याचे फळ मिळाले.» (सहीह मुस्लिम: ११६४).",
           "सहीह मुस्लिम: ११६२, ११६३, ११६४; सहीह बुखारी: १९६९"],
          ["🎯 बोध",
           "रमजानचे प्रशिक्षण संपूर्ण आयुष्यासाठी आहे. रमजानमध्ये जो तकवा, सहानुभूती आणि स्वतःवरील नियंत्रण शिकलो, तो आयुष्यभर टिकवला पाहिजे.",
           ""]
        ],
        [
          ["रोजे कधी फर्ज झाले?", ["हिजरी १", "हिजरी २", "हिजरी ३"]],
          ["लैलतुल-कद्र किती रात्रींपेक्षा उत्तम?", ["१००", "५००", "१०००"]],
          ["रोज्याचा खरा उद्देश?", ["उपाशी राहणे", "तकवा", "वजन कमी करणे"]]
        ],
        [
          ["इ.स. ६२४", "रोज्यांची फर्जियत"],
          ["इ.स. ६२४", "मदिन्यातील पहिला रमजान"]
        ]
      ],
      ar: [
        "رمضان والصيام — تربية على العبادة",
        "المدينة",
        "624 م (السنة الثانية من الهجرة)",
        "فهم فرض الصيام، وفضل رمضان، وتربية الأمة.",
        "مقصود الصيام التقوى. اللهم ارزقنا تعظيم رمضان ووفقنا لإبقاء تربية رمضان طوال حياتنا. آمين.",
        [
          "فُرض الصيام في السنة الثانية",
          "نزل القرآن في رمضان",
          "ليلة القدر خير من ألف شهر",
          "في السحور بركة",
          "الصيام ليس مجرد جوع"
        ],
        [
          ["📖 الأمر بالفرض",
           "في المدينة، في السنة الثانية، فرض الله الصيام: «يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ» — سورة البقرة 2:183.",
           "القرآن: 2:183"],
          ["🌙 فضل رمضان",
           "رمضان هو الشهر الذي أُنزل فيه القرآن: «شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ» — سورة البقرة 2:185. وفيه نزل الوحي الأول، وفيه ليلة القدر التي هي خير من ألف شهر.",
           "القرآن: 2:185، 97:3"],
          ["🍽️ السحور والإفطار",
           "قال ﷺ: «تسحّروا فإن في السحور بركة» (صحيح البخاري: 1923). وفي رواية: «للصائم فرحتان: فرحة عند فطره، وفرحة عند لقاء ربه» (صحيح مسلم: 1151). وكان ﷺ يفطر قبل الصلاة على رطب، فإن لم يجد فتمر، فإن لم يجد فحسوات من ماء (سنن أبي داود: 2356، حسن).",
           "صحيح البخاري: 1923؛ صحيح مسلم: 1151؛ سنن أبي داود: 2356 (حسن)"],
          ["🤲 تربية على الرحمة",
           "مقصد الصيام التقوى. قال ﷺ: «من لم يدع قول الزور والعمل به فليس لله حاجة في أن يدع طعامه وشرابه» (صحيح البخاري: 1903). فالصيام ليس جوعًا فقط، بل صيام العين واللسان والقلب. وكان ﷺ أجود الناس، وكان في رمضان أجود بالخير من الريح المرسلة (صحيح البخاري: 6).",
           "صحيح البخاري: 1903، 6"],
          ["🌟 صيام النفل",
           "كان ﷺ يصوم الاثنين والخميس، وأيام البيض (13 و14 و15)، وعرفة، وعاشوراء (10 محرم)، ويكثر في محرم، ويكثر في شعبان. وقال: «من صام رمضان ثم أتبعه ستًّا من شوال كان كصيام الدهر» (صحيح مسلم: 1164).",
           "صحيح مسلم: 1162، 1163، 1164؛ صحيح البخاري: 1969"],
          ["🎯 العبرة",
           "تربية رمضان للحياة كلها. فعلينا أن نحفظ ما تعلمناه في رمضان من تقوى ورحمة وضبط للنفس طوال حياتنا.",
           ""]
        ],
        [
          ["متى فُرض الصيام؟", ["السنة الأولى", "السنة الثانية", "السنة الثالثة"]],
          ["ليلة القدر خير من كم شهر؟", ["100", "500", "1000"]],
          ["ما مقصود الصيام؟", ["الجوع", "التقوى", "إنقاص الوزن"]]
        ],
        [
          ["624", "فرض الصيام"],
          ["624", "أول رمضان في المدينة"]
        ]
      ],
      fr: [
        "Ramadan et le jeûne — une éducation à l'adoration",
        "Médine",
        "624 (2e année de l'hégire)",
        "Comprendre l'obligation du jeûne, le mérite de Ramadan et l'éducation de la communauté.",
        "Le but du jeûne est la piété. Ô Allah ! Accorde-nous d'estimer Ramadan et de garder toute la vie l'éducation qu'il nous donne. Âmîn.",
        [
          "Le jeûne rendu obligatoire en l'an 2",
          "Le Coran révélé en Ramadan",
          "La nuit du Destin meilleure que mille mois",
          "La bénédiction du sahûr",
          "Jeûner n'est pas seulement avoir faim"
        ],
        [
          ["📖 L'ordre de l'obligation",
           "À Médine, en l'an 2 de l'hégire, Allah rendit le jeûne obligatoire : « يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ » — sourate al-Baqara 2:183.",
           "Coran : 2:183"],
          ["🌙 Le mérite de Ramadan",
           "Ramadan est le mois où le Coran fut révélé : « شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ » — sourate al-Baqara 2:185. C'est en ce mois que vint la première révélation, et c'est en lui que se trouve la nuit du Destin, meilleure que mille mois.",
           "Coran : 2:185, 97:3"],
          ["🍽️ Le sahûr et l'iftâr",
           "Le Prophète ﷺ dit : « Prenez le sahûr, car il y a une bénédiction dans le sahûr. » (Sahih al-Bukhari : 1923). Un autre récit : « Le jeûneur a deux joies : une à la rupture du jeûne et une à la rencontre de son Seigneur. » (Sahih Muslim : 1151). Il ﷺ rompait le jeûne avant la prière avec des dattes fraîches, sinon des dattes sèches, sinon quelques gorgées d'eau (Sunan Abi Dawud : 2356, hasan).",
           "Sahih al-Bukhari : 1923 ; Sahih Muslim : 1151 ; Sunan Abi Dawud : 2356 (hasan)"],
          ["🤲 Une éducation à la compassion",
           "Le but du jeûne est la piété. Le Prophète ﷺ dit : « Celui qui ne renonce pas au mensonge et à ce qui l'accompagne, Allah n'a pas besoin qu'il laisse sa nourriture et sa boisson. » (Sahih al-Bukhari : 1903). Jeûner n'est pas seulement avoir faim : c'est le jeûne de l'œil, de la langue et du cœur. Il ﷺ était le plus généreux des hommes, et en Ramadan plus généreux que le vent qui souffle (Sahih al-Bukhari : 6).",
           "Sahih al-Bukhari : 1903, 6"],
          ["🌟 Les jeûnes surérogatoires",
           "Le Prophète ﷺ jeûnait le lundi et le jeudi, les jours blancs (13, 14, 15), le jour d'Arafa et d'Achoura (10 muharram), beaucoup en muharram et beaucoup en chaabane. Il dit : « Celui qui jeûne Ramadan puis y ajoute six jours de Chawwâl, c'est comme s'il avait jeûné toute une vie. » (Sahih Muslim : 1164).",
           "Sahih Muslim : 1162, 1163, 1164 ; Sahih al-Bukhari : 1969"],
          ["🎯 La leçon",
           "L'éducation de Ramadan est pour toute la vie. La piété, la compassion et la maîtrise de soi apprises en Ramadan doivent être gardées toute la vie.",
           ""]
        ],
        [
          ["Quand le jeûne fut-il rendu obligatoire ?", ["1re année", "2e année", "3e année"]],
          ["La nuit du Destin est meilleure que combien de mois ?", ["100", "500", "1000"]],
          ["Quel est le but du jeûne ?", ["Avoir faim", "La piété", "Perdre du poids"]]
        ],
        [
          ["624", "Obligation du jeûne"],
          ["624", "Premier Ramadan à Médine"]
        ]
      ],
      es: [
        "Ramadán y el ayuno: una educación en la adoración",
        "Medina",
        "624 (año 2 de la hégira)",
        "Comprender la obligatoriedad del ayuno, el mérito de Ramadán y la educación de la comunidad.",
        "El propósito del ayuno es la piedad. ¡Oh Alá! Concédenos valorar Ramadán y mantener toda la vida la educación que nos da. Amín.",
        [
          "El ayuno se hizo obligatorio en el año 2",
          "El Corán fue revelado en Ramadán",
          "La noche del Destino mejor que mil meses",
          "En el suhur hay bendición",
          "Ayunar no es solo tener hambre"
        ],
        [
          ["📖 La orden de la obligación",
           "En Medina, en el año 2 de la hégira, Alá hizo obligatorio el ayuno: «يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ» — sura al-Baqara 2:183.",
           "Corán: 2:183"],
          ["🌙 El mérito de Ramadán",
           "Ramadán es el mes en que se reveló el Corán: «شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ» — sura al-Baqara 2:185. En él vino la primera revelación, y en él está la noche del Destino, mejor que mil meses.",
           "Corán: 2:185, 97:3"],
          ["🍽️ El suhur y el iftar",
           "El Profeta ﷺ dijo: «Tomad el suhur, pues en el suhur hay bendición.» (Sahih al-Bujari: 1923). Otro relato: «El ayunante tiene dos alegrías: una al romper el ayuno y otra al encontrarse con su Señor.» (Sahih Muslim: 1151). Él ﷺ rompía el ayuno antes de la oración con dátiles frescos; si no había, con dátiles secos; y si no, con unos sorbos de agua (Sunan Abi Dawud: 2356, hasan).",
           "Sahih al-Bujari: 1923; Sahih Muslim: 1151; Sunan Abi Dawud: 2356 (hasan)"],
          ["🤲 Una educación en la compasión",
           "El propósito del ayuno es la piedad. El Profeta ﷺ dijo: «Quien no deja la mentira y obrar conforme a ella, Alá no tiene necesidad de que deje su comida y su bebida.» (Sahih al-Bujari: 1903). Ayunar no es solo tener hambre: es el ayuno del ojo, la lengua y el corazón. Él ﷺ era el más generoso de los hombres, y en Ramadán más generoso que el viento que sopla (Sahih al-Bujari: 6).",
           "Sahih al-Bujari: 1903, 6"],
          ["🌟 Los ayunos voluntarios",
           "El Profeta ﷺ ayunaba los lunes y jueves, los días blancos (13, 14 y 15), el día de Arafa y de Ashura (10 de Muharram), mucho en Muharram y mucho en Shaabán. Dijo: «Quien ayuna Ramadán y luego añade seis días de Shawal, es como si hubiera ayunado toda la vida.» (Sahih Muslim: 1164).",
           "Sahih Muslim: 1162, 1163, 1164; Sahih al-Bujari: 1969"],
          ["🎯 La lección",
           "La educación de Ramadán es para toda la vida. La piedad, la compasión y el dominio de uno mismo aprendidos en Ramadán deben mantenerse toda la vida.",
           ""]
        ],
        [
          ["¿Cuándo se hizo obligatorio el ayuno?", ["Año 1", "Año 2", "Año 3"]],
          ["¿La noche del Destino es mejor que cuántos meses?", ["100", "500", "1000"]],
          ["¿Cuál es el propósito del ayuno?", ["Tener hambre", "La piedad", "Perder peso"]]
        ],
        [
          ["624", "Obligatoriedad del ayuno"],
          ["624", "Primer Ramadán en Medina"]
        ]
      ]
    },

    /* ═══════════════ DAY 20 — Ghazwa-e-Badr ═══════════════ */
    20: {
      mr: [
        "बद्रचे युद्ध — सत्य व असत्याचा निर्णय",
        "बद्र",
        "शुक्रवार, १७ रमजान, हिजरी २ (मार्च इ.स. ६२४) — बहुसंख्यांच्या मते; काही रिवायतींमध्ये १९ किंवा २१ रमजान",
        "बद्रची घटना, मुस्लिमांची कुर्बानी, देवदूतांची मदत आणि विजयाची घटना समजून घेणे.",
        "ईमानाने भरलेल्या मनांनी संख्येला हरवले. हे अल्लाह! आम्हालाही ईमान व भरवशाची ही संपत्ती दे. आमीन.",
        [
          "१७ रमजान हिजरी २",
          "~३१३ विरुद्ध ~१०००",
          "१४ शहीद",
          "~७० ठार, ~७० कैदी",
          "यवमुल-फुरकान"
        ],
        [
          ["🎯 पार्श्वभूमी",
           "मुस्लिम अबू सुफियानच्या काफिल्यासाठी निघाले (सूरह अल-अनफाल ८:७); काफिला निसटला आणि कुरैशचे सैन्य (सुमारे ९५०–१०००) येऊन पोहोचले (सहीह मुस्लिम १७६३). नबी ﷺ यांनी सहाबांचा सल्ला घेतला; मिकदाद (र.अ.) म्हणाले की आम्ही मूसा (अ.स.) यांच्या कौमसारखे बोलणार नाही, आम्ही तुमच्यासोबत लढू (सहीह बुखारी ३९५२). (मुहाजिरांचे माल जप्त झाल्याची गोष्ट सीरतच्या पुस्तकांतून आहे, सहीह हदीसांतून नाही.)",
           ""],
          ["🏕️ बद्रच्या मैदानात",
           "सुमारे ३१३ मुस्लिम (सहीह बुखारी ३९५९; काही रिवायतींमध्ये ३१४/३१७), ७० उंट पाळीपाळीने, २ घोडे (झुबैर व मिकदाद (र.अ.) — सीरत). मतभेद: अली (र.अ.) यांच्या रिवायतीत फक्त मिकदाद (र.अ.) यांचा घोडा आहे (मुस्नद अहमद १०२३). नबी ﷺ यांनी दुआ केली इतकी की चादर पडली; अबू बक्र (र.अ.) म्हणाले «पुरेसे आहे». दुआ: «जर हा गट नष्ट झाला तर जमिनीवर तुझी उपासना होणार नाही» (सहीह मुस्लिम १७६३).",
           ""],
          ["🌧️ रात्रीची मदत",
           "हलकी झोप शांतीसाठी आणि पाऊस (अल-अनफाल ८:११). नबी ﷺ यांनी रात्र झाडाखाली नमाज़ व रडण्यात घालवली (मुस्नद अहमद १०२३). आप ﷺ यांनी शत्रूंच्या पडण्याच्या जागा सांगितल्या (सहीह मुस्लिम १७७९). (कुरैशच्या बाजूच्या चिखलाची गोष्ट सीरतमधून आहे.)",
           ""],
          ["⚔️ युद्ध",
           "आधी वैयक्तिक मुकाबले: हमझा, अली व उबैदा (र.अ.) विरुद्ध शैबा, उत्बा व वलीद (सहीह बुखारी ३९६५–३९६८; अल-हज २२:१९). मतभेद: कोण कोणाशी लढले, त्याचा क्रम रिवायतींमध्ये वेगळा आहे. देवदूत (अल-अनफाल ८:९, आले-इमरान ३:१२४). अबू जहलला दोन अन्सारी तरुणांनी (मुआज बिन अम्र व मुआज बिन अफरा (र.अ.)) जखमी केले (सहीह बुखारी ३१४१) आणि इब्न मसऊद (र.अ.) यांनी त्याचा शेवट केला (सहीह बुखारी ३९६२).",
           ""],
          ["🌟 विजय",
           "१४ शहीद (६ मुहाजिर, ८ अन्सार — अर-रहीकुल-मख्तूम); ७० कुरैशी ठार, ७० कैदी (सहीह मुस्लिम १७६३). कुरआनाने याला «यवमुल-फुरकान» म्हटले (अल-अनफाल ८:४१). मृतदेह विहिरीत टाकले गेले, नबी ﷺ तीन रात्री थांबले (सहीह बुखारी ३९७६).",
           ""],
          ["🎯 बोध",
           "३१३ ने १००० ला ईमान, तयारी आणि अल्लाहवरील भरवशाने हरवले.",
           ""]
        ],
        [
          ["बद्र युद्धात मुस्लिमांची संख्या?", ["१००", "३१३", "१०००"]],
          ["कुरैशची संख्या?", ["५००", "१०००", "२०००"]],
          ["बद्र युद्धाचे दुसरे नाव?", ["यवमुन-नस्र", "यवमुल-फुरकान", "यवमुल-फतह"]]
        ],
        [
          ["८ रमजान", "प्रयाण (काहींच्या मते १२)"],
          ["रमजान हिजरी २", "काफिल्याची बातमी व कुरैशचे सैन्य"],
          ["१७ रमजान", "बद्रचे युद्ध"]
        ]
      ],
      ar: [
        "غزوة بدر — الفرقان بين الحق والباطل",
        "بدر",
        "الجمعة 17 رمضان، السنة الثانية (مارس 624) — عند الجمهور؛ وفي بعض الروايات 19 أو 21 رمضان",
        "فهم غزوة بدر، وتضحية المسلمين، ونصر الله بالملائكة، وحقيقة الفتح.",
        "قلوب مملوءة بالإيمان غلبت الكثرة. اللهم ارزقنا هذه الثروة: الإيمان والتوكل. آمين.",
        [
          "17 رمضان من السنة الثانية",
          "نحو 313 مقابل نحو 1000",
          "14 شهيدًا",
          "نحو 70 قتيلًا و70 أسيرًا",
          "يوم الفرقان"
        ],
        [
          ["🎯 الخلفية",
           "خرج المسلمون لقافلة أبي سفيان (سورة الأنفال 8:7)؛ فأفلتت القافلة ووصل جيش قريش (نحو 950–1000) (صحيح مسلم 1763). فاستشار ﷺ أصحابه؛ فقال المقداد رضي الله عنه: لا نقول لك كما قالت بنو إسرائيل لموسى، بل نقاتل معك (صحيح البخاري 3952). (وأما مسألة أخذ أموال المهاجرين فهي من كتب السيرة لا من الأحاديث الصحيحة.)",
           ""],
          ["🏕️ في ميدان بدر",
           "نحو 313 مسلمًا (صحيح البخاري 3959؛ وفي بعض الروايات 314 أو 317)، و70 بعيرًا يتعاقبونها، وفرسان (الزبير والمقداد رضي الله عنهما — سيرة). وفي رواية علي رضي الله عنه فرس المقداد فقط (مسند أحمد 1023). ودعا ﷺ حتى سقط رداؤه؛ فقال أبو بكر: «حسبك». ومن دعائه: «اللهم إن تهلك هذه العصابة لا تُعبد في الأرض» (صحيح مسلم 1763).",
           ""],
          ["🌧️ مدد الليل",
           "نعاسًا أمنةً ومطرًا (الأنفال 8:11). وبات ﷺ يصلي ويبكي تحت شجرة (مسند أحمد 1023). وأشار ﷺ إلى مصارع القوم (صحيح مسلم 1779). (وأما الطين في جانب قريش فمن السيرة.)",
           ""],
          ["⚔️ القتال",
           "أولًا المبارزة: حمزة وعلي وعبيدة رضي الله عنهم مقابل شيبة وعتبة والوليد (صحيح البخاري 3965–3968؛ الحج 22:19). والترتيب مختلف في الروايات. والملائكة (الأنفال 8:9، آل عمران 3:124). وجرح أبا جهل معاذان من الأنصار (معاذ بن عمرو ومعاذ بن عفراء رضي الله عنهما) (صحيح البخاري 3141)، وأجهز عليه ابن مسعود رضي الله عنه (صحيح البخاري 3962).",
           ""],
          ["🌟 الفتح",
           "14 شهيدًا (6 من المهاجرين و8 من الأنصار — الرحيق المختوم)؛ و70 قتيلًا من قريش و70 أسيرًا (صحيح مسلم 1763). وسماه القرآن «يوم الفرقان» (الأنفال 8:41). وأُلقي القتلى في القليب، وأقام ﷺ ثلاث ليالٍ (صحيح البخاري 3976).",
           ""],
          ["🎯 العبرة",
           "313 غلبوا 1000 بالإيمان والاستعداد والتوكل على الله.",
           ""]
        ],
        [
          ["كم كان عدد المسلمين في بدر؟", ["100", "313", "1000"]],
          ["كم كان عدد قريش؟", ["500", "1000", "2000"]],
          ["ما الاسم الآخر لغزوة بدر؟", ["يوم النصر", "يوم الفرقان", "يوم الفتح"]]
        ],
        [
          ["8 رمضان", "الخروج (وقيل 12)"],
          ["رمضان السنة الثانية", "خبر القافلة وجيش قريش"],
          ["17 رمضان", "غزوة بدر"]
        ]
      ],
      fr: [
        "La bataille de Badr — la distinction entre le vrai et le faux",
        "Badr",
        "Vendredi 17 Ramadan, an 2 (mars 624) — selon la majorité ; 19 ou 21 Ramadan selon d'autres",
        "Comprendre l'épisode de Badr, le sacrifice des musulmans, le secours des anges et la réalité de la victoire.",
        "Des cœurs remplis de foi ont vaincu le nombre. Ô Allah ! Accorde-nous cette richesse : la foi et la confiance. Âmîn.",
        [
          "17 Ramadan de l'an 2",
          "Environ 313 contre environ 1000",
          "14 martyrs",
          "Environ 70 tués et 70 prisonniers",
          "Le jour de la distinction"
        ],
        [
          ["🎯 Le contexte",
           "Les musulmans sortirent pour la caravane d'Abou Soufyân (sourate al-Anfâl 8:7) ; la caravane échappa et l'armée des Quraysh (environ 950 à 1000) arriva (Sahih Muslim : 1763). Le Prophète ﷺ consulta ses Compagnons ; al-Miqdâd (qu'Allah l'agrée) dit : nous ne dirons pas comme les Enfants d'Isrâ'îl à Mûsâ, nous combattrons avec toi (Sahih al-Bukhari : 3952). (Quant à la saisie des biens des émigrés, cela vient des livres de Sîra, non des hadiths authentiques.)",
           ""],
          ["🏕️ Sur le champ de Badr",
           "Environ 313 musulmans (Sahih al-Bukhari : 3959 ; 314 ou 317 dans d'autres récits), 70 chameaux qu'ils se partageaient, deux chevaux (az-Zoubayr et al-Miqdâd — Sîra). Divergence : dans le récit de 'Alî, seul le cheval d'al-Miqdâd (Mousnad Ahmad : 1023). Le Prophète ﷺ invoqua jusqu'à ce que son manteau tombât ; Abou Bakr dit : « Cela suffit. » Son invocation : « Si cette troupe périt, Tu ne seras plus adoré sur la terre. » (Sahih Muslim : 1763)",
           ""],
          ["🌧️ Le secours de la nuit",
           "Un sommeil apaisant et la pluie (al-Anfâl 8:11). Il ﷺ passa la nuit à prier et à pleurer sous un arbre (Mousnad Ahmad : 1023). Il ﷺ indiqua les lieux où tomberaient les ennemis (Sahih Muslim : 1779). (La boue du côté des Quraysh vient de la Sîra.)",
           ""],
          ["⚔️ Le combat",
           "D'abord les duels : Hamza, 'Alî et 'Oubayda (qu'Allah les agrée) contre Chayba, 'Outba et al-Walîd (Sahih al-Bukhari : 3965-3968 ; al-Hajj 22:19). L'ordre des duels varie selon les récits. Les anges (al-Anfâl 8:9, Âl 'Imrân 3:124). Abou Jahl fut blessé par deux jeunes Ansâr (Mu'âdh ibn 'Amr et Mu'âdh ibn 'Afrâ') (Sahih al-Bukhari : 3141) et achevé par Ibn Mas'oûd (Sahih al-Bukhari : 3962).",
           ""],
          ["🌟 La victoire",
           "14 martyrs (6 émigrés et 8 Ansâr — Ar-Rahîq al-Makhtûm) ; 70 Quraysh tués et 70 prisonniers (Sahih Muslim : 1763). Le Coran l'appela « le jour de la distinction » (al-Anfâl 8:41). Les corps furent jetés dans le puits ; le Prophète ﷺ resta trois nuits (Sahih al-Bukhari : 3976).",
           ""],
          ["🎯 La leçon",
           "313 ont vaincu 1000 par la foi, la préparation et la confiance en Allah.",
           ""]
        ],
        [
          ["Combien de musulmans à Badr ?", ["100", "313", "1000"]],
          ["Combien de Quraysh ?", ["500", "1000", "2000"]],
          ["Quel autre nom porte Badr ?", ["Le jour de la victoire", "Le jour de la distinction", "Le jour de la conquête"]]
        ],
        [
          ["8 Ramadan", "Le départ (12 selon d'autres)"],
          ["Ramadan an 2", "La nouvelle de la caravane et l'armée quraysh"],
          ["17 Ramadan", "La bataille de Badr"]
        ]
      ],
      es: [
        "La batalla de Badr: la distinción entre la verdad y la falsedad",
        "Badr",
        "Viernes 17 de Ramadán, año 2 (marzo de 624), según la mayoría; 19 o 21 según otros",
        "Comprender el episodio de Badr, el sacrificio de los musulmanes, el auxilio de los ángeles y la realidad de la victoria.",
        "Corazones llenos de fe vencieron al número. ¡Oh Alá! Concédenos esa riqueza: la fe y la confianza. Amín.",
        [
          "17 de Ramadán del año 2",
          "Unos 313 frente a unos 1000",
          "14 mártires",
          "Unos 70 muertos y 70 prisioneros",
          "El día de la distinción"
        ],
        [
          ["🎯 El contexto",
           "Los musulmanes salieron por la caravana de Abu Sufian (sura al-Anfal 8:7); la caravana escapó y llegó el ejército de los Quraysh (unos 950 a 1000) (Sahih Muslim: 1763). El Profeta ﷺ consultó a sus Compañeros; al-Miqdad (que Alá esté complacido con él) dijo: no diremos como los Hijos de Israel a Musa, combatiremos contigo (Sahih al-Bujari: 3952). (Lo de la confiscación de los bienes de los emigrados viene de los libros de Sira, no de los hadices auténticos.)",
           ""],
          ["🏕️ En el campo de Badr",
           "Unos 313 musulmanes (Sahih al-Bujari: 3959; 314 o 317 en otros relatos), 70 camellos que se turnaban y dos caballos (az-Zubayr y al-Miqdad, según la Sira). Discrepancia: en el relato de Ali solo el caballo de al-Miqdad (Musnad Ahmad: 1023). El Profeta ﷺ suplicó hasta que se le cayó el manto; Abu Bakr dijo: «Basta.» Su súplica: «Si esta tropa perece, no serás adorado en la tierra.» (Sahih Muslim: 1763)",
           ""],
          ["🌧️ El auxilio de la noche",
           "Un sueño apacible y la lluvia (al-Anfal 8:11). Él ﷺ pasó la noche rezando y llorando bajo un árbol (Musnad Ahmad: 1023). Él ﷺ señaló los lugares donde caerían los enemigos (Sahih Muslim: 1779). (El barro del lado de los Quraysh viene de la Sira.)",
           ""],
          ["⚔️ El combate",
           "Primero los duelos: Hamza, Ali y Ubayda (que Alá esté complacido con ellos) frente a Shayba, Utba y al-Walid (Sahih al-Bujari: 3965-3968; al-Hayy 22:19). El orden de los duelos varía según los relatos. Los ángeles (al-Anfal 8:9, Al Imran 3:124). A Abu Yahal lo hirieron dos jóvenes Ansar (Muaz ibn Amr y Muaz ibn Afra) (Sahih al-Bujari: 3141) y lo remató Ibn Masud (Sahih al-Bujari: 3962).",
           ""],
          ["🌟 La victoria",
           "14 mártires (6 emigrados y 8 Ansar, según Ar-Rahiq al-Majtum); 70 qurayshíes muertos y 70 prisioneros (Sahih Muslim: 1763). El Corán lo llamó «el día de la distinción» (al-Anfal 8:41). Los cuerpos fueron arrojados al pozo; el Profeta ﷺ permaneció tres noches (Sahih al-Bujari: 3976).",
           ""],
          ["🎯 La lección",
           "313 vencieron a 1000 con la fe, la preparación y la confianza en Alá.",
           ""]
        ],
        [
          ["¿Cuántos musulmanes había en Badr?", ["100", "313", "1000"]],
          ["¿Cuántos qurayshíes?", ["500", "1000", "2000"]],
          ["¿Qué otro nombre tiene Badr?", ["El día de la victoria", "El día de la distinción", "El día de la conquista"]]
        ],
        [
          ["8 de Ramadán", "La salida (12 según otros)"],
          ["Ramadán del año 2", "La noticia de la caravana y el ejército qurayshí"],
          ["17 de Ramadán", "La batalla de Badr"]
        ]
      ]
    },

    /* ═══════════════ DAY 21 — Ghazwa-e-Uhud ═══════════════ */
    21: {
      mr: [
        "उहुदचे युद्ध — संयमाची परीक्षा",
        "उहुद पर्वत",
        "शव्वाल हिजरी ३ (मार्च इ.स. ६२५) — अर-रहीक: ७ शव्वाल; काहींच्या मते ११ किंवा १५",
        "उहुदची घटना, हुकुमाचे पालन करण्याचे महत्त्व आणि नबी ﷺ जखमी झाल्याची घटना समजून घेणे.",
        "हमझा (र.अ.) शहीद, नबी ﷺ जखमी, तरीही दयेचा दामन सुटला नाही. हे अल्लाह! आम्हालाही ही दया दे. आमीन.",
        [
          "हिजरी ३, उहुद पर्वत",
          "मुश्रिक: ३०००",
          "मुस्लिम: सुमारे ७००",
          "५० धनुर्धाऱ्यांचा हुकूम",
          "७० शहीद",
          "हमझा (र.अ.) शहीद",
          "नबी ﷺ जखमी"
        ],
        [
          ["🎯 पार्श्वभूमी",
           "बद्रचा बदला घेण्यासाठी कुरैशचे सुमारे ३००० सैन्य आले (७०० चिलखतधारी, २०० स्वार, ३००० उंट — अर-रहीकुल-मख्तूम). नबी ﷺ मदिन्यात राहून बचाव करू इच्छित होते, पण तरुणांच्या आग्रहाने बाहेर निघाले (मुस्नद अहमद; सीरत इब्न इशाक).",
           ""],
          ["⛰️ उहुद पर्वतावर",
           "अब्दुल्लाह बिन उबय्य सुमारे ३०० साथीदारांसह परत गेला (सीरत; सहीह बुखारी ४०५० मध्ये दोन गटांच्या घसरणीचा उल्लेख, आले-इमरान ३:१२२); सुमारे ७०० राहिले. ५० धनुर्धारी अब्दुल्लाह बिन जुबैर (र.अ.) यांच्या नेतृत्वाखाली; हुकूम: «पक्षी आम्हाला उचलून नेले तरी जागा सोडू नका» (सहीह बुखारी ३०३९, ४०४३).",
           ""],
          ["⚔️ पहिला टप्पा",
           "मुस्लिम प्रभावी झाले; बहुतेक धनुर्धाऱ्यांनी मालमत्तेसाठी जागा सोडली (सहीह बुखारी ३०३९); खालिद बिन वलीद (जे तेव्हा मुस्लिम नव्हते) यांनी मागून हल्ला केला.",
           ""],
          ["💔 दुसरा टप्पा — परीक्षा",
           "नबी ﷺ यांचा दात शहीद झाला, चेहरा जखमी झाला आणि शिरस्त्राच्या कड्या गालात घुसल्या (सहीह बुखारी ४०७३–४०७५; सहीह मुस्लिम १७९०). तल्हा (र.अ.) व साद (र.अ.) यांच्यासह सात अन्सारी व दोन कुरैशी सहाबा बचावात राहिले (सहीह मुस्लिम १७८९; सहीह बुखारी ३७२४). मुसअब (र.अ.) शहीद झाले; इब्न कमीअने «मुहम्मदला ठार मारले» असे सांगितले (सीरत). फातिमा (र.अ.) यांनी जखम धुतली आणि अली (र.अ.) पाणी आणले (सहीह बुखारी २९११).",
           ""],
          ["🤲 नबी ﷺ यांची दया",
           "«ज्या कौमने आपल्या नबीला जखमी केले ती कशी यशस्वी होईल?» तेव्हा आले-इमरान ३:१२८ उतरली (सहीह मुस्लिम १७९१). स्पष्टीकरण: सहीह बुखारी ४०६९ मध्ये आहे की आप ﷺ यांनी काही सरदारांना शाप दिला होता तेव्हा ही आयत उतरली. मतभेद: «हे अल्लाह, माझ्या कौमला माफ कर» ही दुआ दुसऱ्या एका नबीची आहे जी नबी ﷺ यांनी सांगितली (सहीह बुखारी ३४७७; सहीह मुस्लिम १७९२); त्या नबीचे नाव सहीह हदीसमध्ये नाही, विद्वानांची मते वेगळी आहेत.",
           ""],
          ["🌟 शहीद",
           "७० शहीद (सहीह बुखारी ४०४३); सुमारे ६५ अन्सारी व ४ मुहाजिर (अर-रहीकुल-मख्तूम); कुरैशचे सुमारे २२ ठार. हमझा (र.अ.) यांना वहशीने शहीद केले, जो नंतर मुस्लिम झाला (सहीह बुखारी ४०७२). मुसअब (र.अ.) यांचे कफन लहान होते (सहीह बुखारी १२७६). अनस बिन नज्र (र.अ.) यांच्या अंगावर ८० हून अधिक जखमा होत्या (सहीह बुखारी २८०५). (हनझल (र.अ.) यांचे «गसीलुल-मलाइका» होणे व साद बिन रबीअ (र.अ.) यांची घटना सीरत/मुस्तद्रकच्या रिवायती आहेत, सहीहैनमध्ये नाहीत.)",
           ""],
          ["🎯 बोध",
           "हुकूम पाळा; मालाला दीनापेक्षा प्राधान्य देऊ नका.",
           ""]
        ],
        [
          ["उहुदमध्ये मुश्रिकांची संख्या?", ["१०००", "३०००", "५०००"]],
          ["किती शहीद झाले?", ["१४", "७०", "१००"]],
          ["नबी ﷺ यांचे कोणते काका शहीद झाले?", ["अबू तालिब", "हमझा (र.अ.)", "अब्बास (र.अ.)"]]
        ],
        [
          ["इ.स. ६२५", "उहुदची तयारी"],
          ["इ.स. ६२५", "युद्धाची सुरुवात"],
          ["इ.स. ६२५", "धनुर्धाऱ्यांची चूक"],
          ["इ.स. ६२५", "७० शहीद, नबी ﷺ जखमी"]
        ]
      ],
      ar: [
        "غزوة أحد — امتحان الصبر",
        "جبل أحد",
        "شوال السنة الثالثة (مارس 625) — الرحيق: 7 شوال؛ وقيل 11 أو 15",
        "فهم غزوة أحد، وأهمية طاعة الأمر، وجرح النبي ﷺ.",
        "حمزة رضي الله عنه شهيد، والنبي ﷺ جريح، ومع ذلك لم يُفلت طرف الرحمة. اللهم ارزقنا هذه الرحمة. آمين.",
        [
          "السنة الثالثة، جبل أحد",
          "المشركون: 3000",
          "المسلمون: نحو 700",
          "أمر الخمسين من الرماة",
          "70 شهيدًا",
          "استشهاد حمزة رضي الله عنه",
          "جرح النبي ﷺ"
        ],
        [
          ["🎯 الخلفية",
           "جاء جيش قريش نحو 3000 للثأر من بدر (700 دارع، و200 فارس، و3000 بعير — الرحيق المختوم). وكان ﷺ يريد البقاء في المدينة للدفاع، فخرج لشدّة الشبان (مسند أحمد؛ سيرة ابن إسحاق).",
           ""],
          ["⛰️ عند جبل أحد",
           "انصرف عبد الله بن أُبيّ بنحو 300 (سيرة؛ وفي صحيح البخاري 4050 ذكر انزلاق طائفتين، آل عمران 3:122)، وبقي نحو 700. وخمسون راميًا تحت إمرة عبد الله بن جبير رضي الله عنه؛ والأمر: «لا تبرحوا مكانكم وإن تخطفتنا الطير» (صحيح البخاري 3039، 4043).",
           ""],
          ["⚔️ المرحلة الأولى",
           "ظهر المسلمون؛ وترك أكثر الرماة مواقعهم للغنيمة (صحيح البخاري 3039)؛ فهجم خالد بن الوليد (ولم يكن أسلم بعد) من الخلف.",
           ""],
          ["💔 المرحلة الثانية — الامتحان",
           "شُجّ وجه النبي ﷺ وكُسرت رباعيته ودخلت حلقتا المغفر في وجنته (صحيح البخاري 4073–4075؛ صحيح مسلم 1790). وثبت للدفاع سبعة من الأنصار واثنان من قريش ومنهم طلحة وسعد رضي الله عنهم (صحيح مسلم 1789؛ صحيح البخاري 3724). واستُشهد مصعب رضي الله عنه؛ وقال ابن قميئة: «قتلت محمدًا» (سيرة). وغسلت فاطمة رضي الله عنها الجرح وكان علي رضي الله عنه يأتي بالماء (صحيح البخاري 2911).",
           ""],
          ["🤲 رحمة النبي ﷺ",
           "«كيف يفلح قوم شجّوا نبيّهم؟» فنزلت آل عمران 3:128 (صحيح مسلم 1791). وبيان ذلك في صحيح البخاري 4069 أن النبي ﷺ دعا على بعض ساداتهم فنزلت. والخلاف: دعاء «اللهم اغفر لقومي» هو لنبيٍّ آخر حدّث به النبي ﷺ (صحيح البخاري 3477؛ صحيح مسلم 1792)؛ ولم يُسمَّ في الحديث الصحيح، وأقوال العلماء مختلفة.",
           ""],
          ["🌟 الشهداء",
           "سبعون شهيدًا (صحيح البخاري 4043)؛ نحو 65 من الأنصار و4 من المهاجرين (الرحيق المختوم)؛ ونحو 22 قتيلًا من قريش. قتل وحشيٌّ حمزة رضي الله عنه ثم أسلم (صحيح البخاري 4072). وكان كفن مصعب رضي الله عنه قصيرًا (صحيح البخاري 1276). وفي جسد أنس بن النضر رضي الله عنه أكثر من ثمانين جرحًا (صحيح البخاري 2805). (وأما كون حنظلة رضي الله عنه «غسيل الملائكة» وقصة سعد بن الربيع فهي من روايات السيرة والمستدرك لا من الصحيحين.)",
           ""],
          ["🎯 العبرة",
           "أطع الأمر؛ ولا تقدّم المال على الدين.",
           ""]
        ],
        [
          ["كم كان عدد المشركين في أحد؟", ["1000", "3000", "5000"]],
          ["كم شهيدًا كان في أحد؟", ["14", "70", "100"]],
          ["أي عم للنبي ﷺ استُشهد؟", ["أبو طالب", "حمزة رضي الله عنه", "العباس رضي الله عنه"]]
        ],
        [
          ["625", "الاستعداد لأحد"],
          ["625", "بداية القتال"],
          ["625", "خطأ الرماة"],
          ["625", "70 شهيدًا وجرح النبي ﷺ"]
        ]
      ],
      fr: [
        "La bataille d'Ouhoud — l'épreuve de la patience",
        "Le mont Ouhoud",
        "Chawwâl de l'an 3 (mars 625) — Ar-Rahîq : 7 Chawwâl ; 11 ou 15 selon d'autres",
        "Comprendre l'épisode d'Ouhoud, l'importance d'obéir à l'ordre et la blessure du Prophète ﷺ.",
        "Hamza (qu'Allah l'agrée) martyr, le Prophète ﷺ blessé, et pourtant il ne lâcha pas le pan de la miséricorde. Ô Allah ! Accorde-nous cette miséricorde. Âmîn.",
        [
          "An 3, mont Ouhoud",
          "Polythéistes : 3000",
          "Musulmans : environ 700",
          "L'ordre aux cinquante archers",
          "70 martyrs",
          "Hamza (qu'Allah l'agrée) martyr",
          "Le Prophète ﷺ blessé"
        ],
        [
          ["🎯 Le contexte",
           "L'armée des Quraysh vint, environ 3000 hommes, pour venger Badr (700 cuirassés, 200 cavaliers, 3000 chameaux — Ar-Rahîq al-Makhtûm). Le Prophète ﷺ voulait rester à Médine pour défendre, mais sortit sur l'insistance des jeunes (Mousnad Ahmad ; Sîra d'Ibn Ishâq).",
           ""],
          ["⛰️ Au mont Ouhoud",
           "'Abdoullah ibn Oubayy se retira avec environ 300 hommes (Sîra ; Sahih al-Bukhari : 4050 mentionne le glissement de deux groupes, Âl 'Imrân 3:122) ; il resta environ 700. Cinquante archers sous le commandement de 'Abdoullah ibn Joubayr (qu'Allah l'agrée) ; l'ordre : « Ne quittez pas vos places, même si les oiseaux nous enlèvent. » (Sahih al-Bukhari : 3039, 4043)",
           ""],
          ["⚔️ La première phase",
           "Les musulmans dominèrent ; la plupart des archers quittèrent leurs postes pour le butin (Sahih al-Bukhari : 3039) ; Khâlid ibn al-Walîd (qui n'était pas encore musulman) attaqua par l'arrière.",
           ""],
          ["💔 La seconde phase — l'épreuve",
           "Le Prophète ﷺ eut une dent cassée, le visage blessé, et les anneaux du casque entrèrent dans sa joue (Sahih al-Bukhari : 4073-4075 ; Sahih Muslim : 1790). Sept Ansâr et deux Quraysh restèrent pour le défendre, dont Talha et Sa'd (qu'Allah les agrée) (Sahih Muslim : 1789 ; Sahih al-Bukhari : 3724). Mous'ab (qu'Allah l'agrée) fut martyrisé ; Ibn Qami'a dit : « J'ai tué Mouhammad » (Sîra). Fâtima (qu'Allah l'agrée) lava la blessure et 'Alî apporta l'eau (Sahih al-Bukhari : 2911).",
           ""],
          ["🤲 La miséricorde du Prophète ﷺ",
           "« Comment un peuple qui a blessé son prophète pourrait-il réussir ? » Alors descendit Âl 'Imrân 3:128 (Sahih Muslim : 1791). Précision : selon Sahih al-Bukhari 4069, le Prophète ﷺ avait invoqué contre certains chefs, et ce verset descendit alors. Divergence : l'invocation « Ô Allah, pardonne à mon peuple » est celle d'un autre prophète que le Prophète ﷺ a rapportée (Sahih al-Bukhari : 3477 ; Sahih Muslim : 1792) ; ce prophète n'est pas nommé dans le hadith authentique, et les avis des savants divergent.",
           ""],
          ["🌟 Les martyrs",
           "Soixante-dix martyrs (Sahih al-Bukhari : 4043) ; environ 65 Ansâr et 4 émigrés (Ar-Rahîq al-Makhtûm) ; environ 22 tués chez les Quraysh. Wahchî tua Hamza (qu'Allah l'agrée), puis embrassa l'islam (Sahih al-Bukhari : 4072). Le linceul de Mous'ab (qu'Allah l'agrée) était court (Sahih al-Bukhari : 1276). Le corps d'Anas ibn an-Nadr (qu'Allah l'agrée) portait plus de quatre-vingts blessures (Sahih al-Bukhari : 2805). (Que Hanzala soit « lavé par les anges » et l'épisode de Sa'd ibn Rabî' viennent des récits de Sîra et d'al-Moustadrak, non des deux Sahih.)",
           ""],
          ["🎯 La leçon",
           "Obéis à l'ordre ; ne préfère pas le bien à la religion.",
           ""]
        ],
        [
          ["Combien de polythéistes à Ouhoud ?", ["1000", "3000", "5000"]],
          ["Combien de martyrs ?", ["14", "70", "100"]],
          ["Quel oncle du Prophète ﷺ fut martyrisé ?", ["Abou Tâlib", "Hamza (qu'Allah l'agrée)", "Al-'Abbâs (qu'Allah l'agrée)"]]
        ],
        [
          ["625", "Les préparatifs d'Ouhoud"],
          ["625", "Le début du combat"],
          ["625", "L'erreur des archers"],
          ["625", "70 martyrs et le Prophète ﷺ blessé"]
        ]
      ],
      es: [
        "La batalla de Uhud: la prueba de la paciencia",
        "El monte Uhud",
        "Shawal del año 3 (marzo de 625); Ar-Rahiq: 7 de Shawal; 11 o 15 según otros",
        "Comprender el episodio de Uhud, la importancia de obedecer la orden y la herida del Profeta ﷺ.",
        "Hamza (que Alá esté complacido con él) mártir, el Profeta ﷺ herido, y aun así no soltó el manto de la misericordia. ¡Oh Alá! Concédenos esa misericordia. Amín.",
        [
          "Año 3, monte Uhud",
          "Idólatras: 3000",
          "Musulmanes: unos 700",
          "La orden a los cincuenta arqueros",
          "70 mártires",
          "Hamza (que Alá esté complacido con él) mártir",
          "El Profeta ﷺ herido"
        ],
        [
          ["🎯 El contexto",
           "El ejército de los Quraysh vino con unos 3000 hombres para vengar Badr (700 con coraza, 200 jinetes, 3000 camellos, según Ar-Rahiq al-Majtum). El Profeta ﷺ quería quedarse en Medina para defender, pero salió por la insistencia de los jóvenes (Musnad Ahmad; Sira de Ibn Ishaq).",
           ""],
          ["⛰️ En el monte Uhud",
           "Abdalah ibn Ubayy se retiró con unos 300 hombres (Sira; Sahih al-Bujari: 4050 menciona el resbalar de dos grupos, Al Imran 3:122); quedaron unos 700. Cincuenta arqueros bajo el mando de Abdalah ibn Yubayr (que Alá esté complacido con él); la orden: «No dejéis vuestras posiciones, aunque los pájaros nos lleven.» (Sahih al-Bujari: 3039, 4043)",
           ""],
          ["⚔️ La primera fase",
           "Los musulmanes dominaron; la mayoría de los arqueros dejó sus puestos por el botín (Sahih al-Bujari: 3039); Jalid ibn al-Walid (que aún no era musulmán) atacó por la retaguardia.",
           ""],
          ["💔 La segunda fase: la prueba",
           "Al Profeta ﷺ se le rompió un diente, se le hirió el rostro y los anillos del casco se le clavaron en la mejilla (Sahih al-Bujari: 4073-4075; Sahih Muslim: 1790). Siete Ansar y dos qurayshíes permanecieron para defenderlo, entre ellos Talha y Sad (que Alá esté complacido con ellos) (Sahih Muslim: 1789; Sahih al-Bujari: 3724). Musab (que Alá esté complacido con él) fue martirizado; Ibn Qami'a dijo: «He matado a Muhámmad» (Sira). Fatima (que Alá esté complacido con ella) lavó la herida y Ali trajo el agua (Sahih al-Bujari: 2911).",
           ""],
          ["🤲 La misericordia del Profeta ﷺ",
           "«¿Cómo puede prosperar un pueblo que ha herido a su profeta?» Entonces descendió Al Imran 3:128 (Sahih Muslim: 1791). Precisión: según Sahih al-Bujari 4069, el Profeta ﷺ había suplicado contra algunos jefes, y entonces descendió la aleya. Discrepancia: la súplica «¡Oh Alá, perdona a mi pueblo!» es de otro profeta que el Profeta ﷺ narró (Sahih al-Bujari: 3477; Sahih Muslim: 1792); ese profeta no se nombra en el hadiz auténtico y los sabios discrepan.",
           ""],
          ["🌟 Los mártires",
           "Setenta mártires (Sahih al-Bujari: 4043); unos 65 Ansar y 4 emigrados (Ar-Rahiq al-Majtum); unos 22 muertos entre los Quraysh. Wahshi mató a Hamza (que Alá esté complacido con él), y luego abrazó el islam (Sahih al-Bujari: 4072). El sudario de Musab (que Alá esté complacido con él) era corto (Sahih al-Bujari: 1276). El cuerpo de Anas ibn an-Nadr (que Alá esté complacido con él) tenía más de ochenta heridas (Sahih al-Bujari: 2805). (Que Hanzala sea «lavado por los ángeles» y el episodio de Sad ibn Rabi vienen de relatos de Sira y al-Mustadrak, no de los dos Sahih.)",
           ""],
          ["🎯 La lección",
           "Obedece la orden; no prefieras el bien a la religión.",
           ""]
        ],
        [
          ["¿Cuántos idólatras había en Uhud?", ["1000", "3000", "5000"]],
          ["¿Cuántos mártires hubo?", ["14", "70", "100"]],
          ["¿Qué tío del Profeta ﷺ fue martirizado?", ["Abu Talib", "Hamza (que Alá esté complacido con él)", "Al-Abbas (que Alá esté complacido con él)"]]
        ],
        [
          ["625", "Los preparativos de Uhud"],
          ["625", "El comienzo del combate"],
          ["625", "El error de los arqueros"],
          ["625", "70 mártires y el Profeta ﷺ herido"]
        ]
      ]
    },

    /* ═══════════════ DAY 22 — Ghazwa-e-Khandaq ═══════════════ */
    22: {
      mr: [
        "खंदकाचे युद्ध — शहाणपण व योजना",
        "मदिना",
        "शव्वाल हिजरी ५ (इ.स. ६२७) — मतभेद: इब्न इशाक व अर-रहीक हिजरी ५, मूसा बिन उकबा हिजरी ४",
        "खंदकाची योजना, हजरत सलमान (र.अ.) यांचा सल्ला आणि १० हजारांचा वेढा अयशस्वी झाल्याची घटना समजून घेणे.",
        "१०,००० चे सैन्य वाऱ्याने विखुरले; अल्लाहची मदत पुरेशी आहे. हे अल्लाह! आम्हालाही सल्ला, मेहनत आणि भरवशाची तौफीक दे. आमीन.",
        [
          "हिजरी ५ (एक मत ४)",
          "सुमारे १०,००० शत्रू",
          "सलमान (र.अ.) यांचा सल्ला (सीरतची रिवायत)",
          "वेढा सुमारे १५–२७ दिवस",
          "थंड वादळ"
        ],
        [
          ["📅 तारखेत मतभेद",
           "इब्न उमर (र.अ.) यांचे वय (उहुदमध्ये १४ वर्षे, खंदकात १५ वर्षे — सहीह बुखारी ४०९७) या दोन्ही युद्धांमध्ये एका वर्षाचे अंतर दाखवते; म्हणून मूसा बिन उकबाने खंदक हिजरी ४ मध्ये मानले; इब्न इशाक व अर-रहीकुल-मख्तूम हिजरी ५ म्हणतात.",
           ""],
          ["🌪️ कट",
           "बनू नजीरचे यहुदी सरदार (हय्य बिन अख्तब इ.) कुरैश व गतफानला घेऊन आले; सैन्य सुमारे १०,०००, मुस्लिम सुमारे ३,००० (अर-रहीकुल-मख्तूम). सलमान (र.अ.) यांचा खंदकाचा सल्ला सीरत (इब्न इशाक) मध्ये आहे, सनद जईफ/मुन्कते; प्रसिद्ध आहे पण सहीह हदीसमध्ये नाही.",
           ""],
          ["⛏️ खोदकाम",
           "उत्तरेकडील मोकळ्या बाजूला. नबी ﷺ माती उचलत राहिले, इतके की पोटाला माती लागली (सहीह बुखारी ४१०४). जाबिर (र.अ.) यांनी भुकेमुळे पोटाला दगड बांधलेला पाहिला; त्यांच्या निमंत्रणात बरकतीने सुमारे १,००० लोकांनी जेवण केले (सहीह बुखारी ४१०१).",
           ""],
          ["🛡️ वेढा",
           "कुरआन ३३:१०–११ (डोळे फिरले, मने घशापर्यंत आली, कठोर हादरे दिले). नमाजा उशिरा: असर सूर्यास्तानंतर (सहीह बुखारी ४११२; सहीह मुस्लिम ६२७); मतभेद: काही रिवायतींमध्ये जास्त नमाजा (तिर्मिझी १७९, नसाई ६६२). अम्र बिन अब्दवुदचा अली (र.अ.) यांच्या हातून वध आणि बनू कुरैजाची करारभंग ही सीरतची रिवायती आहेत, सहीह सनदेने सिद्ध नाहीत. कालावधी: सुमारे १५ ते २७ दिवस, काहींच्या मते सुमारे एक महिना (मतभेद).",
           ""],
          ["💪 नबी ﷺ यांची दुआ आणि नुऐम (र.अ.)",
           "«हे ग्रंथ उतरवणाऱ्या, लवकर हिशोब घेणाऱ्या! या सैन्यांना हरव आणि त्यांना नष्ट कर» (सहीह बुखारी २९३३; सहीह मुस्लिम १७४२). «युद्ध हे कपट आहे» (सहीह बुखारी ३०३०; सहीह मुस्लिम १७३९) ही सहीह हदीस आहे, पण नुऐम बिन मसऊद (र.अ.) यांची घटना सीरतची जईफ/मुर्सल रिवायत आहे; या हदीचा संदर्भ काब बिन अशरफची घटना आहे.",
           ""],
          ["🌪️ रात्रीचे वादळ",
           "कुरआन ३३:९ (वारा आणि न दिसणारे सैन्य). हुजैफा (र.अ.) यांना रात्री बातमी आणण्यास पाठवले; थंड वारा आला, आग विझली आणि अबू सुफियानने परतीची घोषणा केली (सहीह मुस्लिम १७८८). «मला पूर्वेच्या वाऱ्याने (सबा) मदत झाली» (सहीह बुखारी १०३५). नंतर ते म्हणाले: «आता आपण त्यांच्यावर चढाई करू, ते आपल्यावर नाही» (सहीह बुखारी ४११०).",
           ""],
          ["🎯 बोध",
           "सल्ला, मेहनत आणि अल्लाहवर भरवसा.",
           ""]
        ],
        [
          ["शत्रूंची संख्या?", ["१०००", "सुमारे १०,०००", "५०००"]],
          ["वेढ्याचा कालावधी?", ["१० दिवसांपेक्षा कमी", "दोन आठवड्यांपासून एका महिन्यापर्यंत", "एक वर्ष"]],
          ["खंदकाचा सल्ला कोणी दिला (सीरतची रिवायत)?", ["उमर (र.अ.)", "सलमान (र.अ.)", "अबू बक्र (र.अ.)"]]
        ],
        [
          ["इ.स. ६२७", "सैन्यांचे आगमन"],
          ["इ.स. ६२७", "खंदक व वेढा"],
          ["इ.स. ६२७", "वादळ व परती"]
        ]
      ],
      ar: [
        "غزوة الخندق — حكمة وتدبير",
        "المدينة",
        "شوال السنة الخامسة (627 م) — خلاف: ابن إسحاق والرحيق: السنة الخامسة، وموسى بن عقبة: الرابعة",
        "فهم خطة الخندق، ومشورة سلمان رضي الله عنه، وفشل حصار العشرة آلاف.",
        "تفرّق جيش العشرة آلاف بالريح؛ وكفاية الله تكفي. اللهم وفقنا للمشورة والعمل والتوكل. آمين.",
        [
          "السنة الخامسة (وقيل الرابعة)",
          "نحو عشرة آلاف عدو",
          "مشورة سلمان رضي الله عنه (رواية سيرة)",
          "الحصار نحو 15–27 يومًا",
          "ريح باردة"
        ],
        [
          ["📅 خلاف في التاريخ",
           "عمر ابن عمر رضي الله عنه (14 سنة في أحد و15 في الخندق — صحيح البخاري 4097) يدل على سنة واحدة بين الغزوتين، ولذلك جعل موسى بن عقبة الخندق في السنة الرابعة؛ وابن إسحاق والرحيق المختوم يقولان: الخامسة.",
           ""],
          ["🌪️ المكيدة",
           "جاء سادة يهود بني النضير (حيي بن أخطب وغيره) بقريش وغطفان؛ فالجيش نحو عشرة آلاف، والمسلمون نحو ثلاثة آلاف (الرحيق المختوم). ومشورة سلمان رضي الله عنه بالخندق في السيرة (ابن إسحاق) بإسناد ضعيف أو منقطع؛ وهي مشهورة لكنها ليست في حديث صحيح.",
           ""],
          ["⛏️ الحفر",
           "في الجهة الشمالية المكشوفة. وكان النبي ﷺ ينقل التراب حتى غطى التراب بطنه (صحيح البخاري 4104). ورأى جابر رضي الله عنه حجرًا مشدودًا على بطنه من الجوع؛ وفي دعوته أكل نحو ألف رجل ببركة (صحيح البخاري 4101).",
           ""],
          ["🛡️ الحصار",
           "القرآن 33:10–11 (زاغت الأبصار، وبلغت القلوب الحناجر، وزُلزلوا زلزالًا شديدًا). وتأخرت الصلوات: العصر بعد الغروب (صحيح البخاري 4112؛ صحيح مسلم 627)؛ وفي روايات أخرى أكثر من صلاة (الترمذي 179، النسائي 662). وقتل عمرو بن عبدود على يد علي رضي الله عنه ونقض بني قريظة من روايات السيرة، لم تثبت بسند صحيح. والمدة: نحو 15 إلى 27 يومًا، وقيل نحو شهر (خلاف).",
           ""],
          ["💪 دعاء النبي ﷺ ونعيم رضي الله عنه",
           "«اللهم منزل الكتاب، سريع الحساب، اهزم الأحزاب، اللهم اهزمهم وزلزلهم» (صحيح البخاري 2933؛ صحيح مسلم 1742). و«الحرب خدعة» (صحيح البخاري 3030؛ صحيح مسلم 1739) حديث صحيح، لكن قصة نعيم بن مسعود رضي الله عنه رواية سيرة ضعيفة أو مرسلة؛ وسياق هذا الحديث في قصة كعب بن الأشرف.",
           ""],
          ["🌪️ ريح الليل",
           "القرآن 33:9 (ريحًا وجنودًا لم تروها). وأُرسل حذيفة رضي الله عنه يأتي بالخبر؛ فجاءت ريح باردة، وانطفأت النار، وأعلن أبو سفيان الرحيل (صحيح مسلم 1788). و«نُصرت بالصبا» (صحيح البخاري 1035). وقال بعد ذلك: «الآن نغزوهم ولا يغزوننا» (صحيح البخاري 4110).",
           ""],
          ["🎯 العبرة",
           "المشورة، والعمل، والتوكل على الله.",
           ""]
        ],
        [
          ["كم كان عدد الأعداء؟", ["1000", "نحو 10,000", "5000"]],
          ["كم دام الحصار؟", ["أقل من عشرة أيام", "بين أسبوعين وشهر", "سنة"]],
          ["من أشار بالخندق (رواية سيرة)؟", ["عمر رضي الله عنه", "سلمان رضي الله عنه", "أبو بكر رضي الله عنه"]]
        ],
        [
          ["627", "قدوم الأحزاب"],
          ["627", "الخندق والحصار"],
          ["627", "الريح والرحيل"]
        ]
      ],
      fr: [
        "La bataille du Fossé — sagesse et stratégie",
        "Médine",
        "Chawwâl de l'an 5 (627) — divergence : Ibn Ishâq et Ar-Rahîq : an 5 ; Mûsâ ibn 'Oqba : an 4",
        "Comprendre le plan du fossé, le conseil de Salmân (qu'Allah l'agrée) et l'échec du siège de dix mille hommes.",
        "L'armée de dix mille fut dispersée par le vent ; le secours d'Allah suffit. Ô Allah ! Accorde-nous la consultation, l'effort et la confiance. Âmîn.",
        [
          "An 5 (ou 4 selon un avis)",
          "Environ 10 000 ennemis",
          "Le conseil de Salmân (qu'Allah l'agrée) (récit de Sîra)",
          "Un siège d'environ 15 à 27 jours",
          "Un vent froid"
        ],
        [
          ["📅 Divergence de date",
           "L'âge d'Ibn 'Umar (qu'Allah l'agrée) (14 ans à Ouhoud, 15 au Fossé — Sahih al-Bukhari : 4097) indique un an d'écart entre les deux batailles ; c'est pourquoi Mûsâ ibn 'Oqba place le Fossé en l'an 4 ; Ibn Ishâq et Ar-Rahîq al-Makhtûm disent l'an 5.",
           ""],
          ["🌪️ La conspiration",
           "Les chefs juifs des Banou Nadîr (Houyay ibn Akhtab et d'autres) amenèrent les Quraysh et Ghatafân ; l'armée comptait environ 10 000 hommes, les musulmans environ 3000 (Ar-Rahîq al-Makhtûm). Le conseil du fossé donné par Salmân (qu'Allah l'agrée) figure dans la Sîra (Ibn Ishâq) avec une chaîne faible ou interrompue ; il est célèbre mais absent des hadiths authentiques.",
           ""],
          ["⛏️ Le creusement",
           "Du côté nord, ouvert. Le Prophète ﷺ portait la terre jusqu'à ce qu'elle couvrît son ventre (Sahih al-Bukhari : 4104). Jâbir (qu'Allah l'agrée) le vit avec une pierre nouée sur le ventre à cause de la faim ; à son invitation, environ mille personnes mangèrent par bénédiction (Sahih al-Bukhari : 4101).",
           ""],
          ["🛡️ Le siège",
           "Coran 33:10-11 (les regards se troublèrent, les cœurs montèrent aux gorges, et ils furent violemment ébranlés). Les prières furent retardées : 'Asr après le coucher du soleil (Sahih al-Bukhari : 4112 ; Sahih Muslim : 627) ; d'autres récits parlent de plus de prières (Tirmidhi 179, Nasâ'î 662). La mort de 'Amr ibn 'Abd Woudd par la main de 'Alî (qu'Allah l'agrée) et la trahison des Banou Qourayza sont des récits de Sîra, non établis par une chaîne authentique. Durée : environ 15 à 27 jours, et jusqu'à un mois selon d'autres (divergence).",
           ""],
          ["💪 L'invocation du Prophète ﷺ et Nou'aym (qu'Allah l'agrée)",
           "« Ô Allah, Toi qui as révélé le Livre, prompt au compte, défais les coalisés, défais-les et ébranle-les. » (Sahih al-Bukhari : 2933 ; Sahih Muslim : 1742). « La guerre est une ruse » (Sahih al-Bukhari : 3030 ; Sahih Muslim : 1739) est un hadith authentique, mais l'épisode de Nou'aym ibn Mas'oûd (qu'Allah l'agrée) est un récit de Sîra faible ou moursal ; le contexte de ce hadith concerne l'affaire de Ka'b ibn al-Achraf.",
           ""],
          ["🌪️ Le vent de la nuit",
           "Coran 33:9 (un vent et des armées que vous ne voyiez pas). Houdayfa (qu'Allah l'agrée) fut envoyé chercher des nouvelles ; un vent froid vint, les feux s'éteignirent, et Abou Soufyân annonça le départ (Sahih Muslim : 1788). « J'ai été secouru par le vent d'est (as-Sabâ) » (Sahih al-Bukhari : 1035). Puis il dit : « Désormais nous les attaquerons, et ils ne nous attaqueront plus. » (Sahih al-Bukhari : 4110)",
           ""],
          ["🎯 La leçon",
           "La consultation, l'effort et la confiance en Allah.",
           ""]
        ],
        [
          ["Combien d'ennemis ?", ["1000", "Environ 10 000", "5000"]],
          ["Combien de temps dura le siège ?", ["Moins de dix jours", "Entre deux semaines et un mois", "Un an"]],
          ["Qui proposa le fossé (récit de Sîra) ?", ["'Umar (qu'Allah l'agrée)", "Salmân (qu'Allah l'agrée)", "Abou Bakr (qu'Allah l'agrée)"]]
        ],
        [
          ["627", "L'arrivée des coalisés"],
          ["627", "Le fossé et le siège"],
          ["627", "Le vent et le départ"]
        ]
      ],
      es: [
        "La batalla del Foso: sabiduría y estrategia",
        "Medina",
        "Shawal del año 5 (627); discrepancia: Ibn Ishaq y Ar-Rahiq: año 5; Musa ibn Uqba: año 4",
        "Comprender el plan del foso, el consejo de Salman (que Alá esté complacido con él) y el fracaso del asedio de diez mil hombres.",
        "El ejército de diez mil se dispersó con el viento; el auxilio de Alá basta. ¡Oh Alá! Concédenos la consulta, el esfuerzo y la confianza. Amín.",
        [
          "Año 5 (o 4 según una opinión)",
          "Unos 10 000 enemigos",
          "El consejo de Salman (que Alá esté complacido con él) (relato de Sira)",
          "Un asedio de unos 15 a 27 días",
          "Un viento frío"
        ],
        [
          ["📅 Discrepancia de fecha",
           "La edad de Ibn Umar (que Alá esté complacido con él) (14 años en Uhud, 15 en el Foso; Sahih al-Bujari: 4097) indica un año de diferencia entre las dos batallas; por eso Musa ibn Uqba sitúa el Foso en el año 4, mientras que Ibn Ishaq y Ar-Rahiq al-Majtum dicen el año 5.",
           ""],
          ["🌪️ La conspiración",
           "Los jefes judíos de los Banu Nadir (Huyay ibn Ajtab y otros) trajeron a los Quraysh y a Gatafan; el ejército era de unos 10 000 y los musulmanes unos 3000 (Ar-Rahiq al-Majtum). El consejo del foso de Salman (que Alá esté complacido con él) figura en la Sira (Ibn Ishaq) con una cadena débil o interrumpida; es famoso pero no está en los hadices auténticos.",
           ""],
          ["⛏️ La excavación",
           "En el lado norte, abierto. El Profeta ﷺ cargaba tierra hasta que le cubrió el vientre (Sahih al-Bujari: 4104). Yabir (que Alá esté complacido con él) lo vio con una piedra atada al vientre por el hambre; en su invitación comieron unas mil personas por bendición (Sahih al-Bujari: 4101).",
           ""],
          ["🛡️ El asedio",
           "Corán 33:10-11 (las miradas se turbaron, los corazones llegaron a las gargantas y fueron sacudidos con violencia). Las oraciones se retrasaron: el Asr después de la puesta del sol (Sahih al-Bujari: 4112; Sahih Muslim: 627); otros relatos hablan de más oraciones (Tirmidhi 179, Nasai 662). La muerte de Amr ibn Abd Wudd a manos de Ali (que Alá esté complacido con él) y la traición de los Banu Qurayza son relatos de Sira, no probados con cadena auténtica. Duración: unos 15 a 27 días, y hasta un mes según otros (discrepancia).",
           ""],
          ["💪 La súplica del Profeta ﷺ y Nuaym (que Alá esté complacido con él)",
           "«¡Oh Alá, que revelaste el Libro y eres rápido en el ajuste de cuentas: derrota a los coaligados, derrótalos y sacúdelos!» (Sahih al-Bujari: 2933; Sahih Muslim: 1742). «La guerra es engaño» (Sahih al-Bujari: 3030; Sahih Muslim: 1739) es un hadiz auténtico, pero el episodio de Nuaym ibn Masud (que Alá esté complacido con él) es un relato de Sira débil o mursal; el contexto de ese hadiz es el asunto de Kab ibn al-Ashraf.",
           ""],
          ["🌪️ El viento de la noche",
           "Corán 33:9 (un viento y ejércitos que no veíais). Se envió a Hudayfa (que Alá esté complacido con él) a traer noticias; vino un viento frío, se apagaron los fuegos y Abu Sufian anunció la retirada (Sahih Muslim: 1788). «Fui auxiliado con el viento del este (as-Saba)» (Sahih al-Bujari: 1035). Luego dijo: «Ahora nosotros los atacaremos, y ellos no nos atacarán.» (Sahih al-Bujari: 4110)",
           ""],
          ["🎯 La lección",
           "La consulta, el esfuerzo y la confianza en Alá.",
           ""]
        ],
        [
          ["¿Cuántos enemigos eran?", ["1000", "Unos 10 000", "5000"]],
          ["¿Cuánto duró el asedio?", ["Menos de diez días", "Entre dos semanas y un mes", "Un año"]],
          ["¿Quién propuso el foso (relato de Sira)?", ["Umar (que Alá esté complacido con él)", "Salman (que Alá esté complacido con él)", "Abu Bakr (que Alá esté complacido con él)"]]
        ],
        [
          ["627", "La llegada de los coaligados"],
          ["627", "El foso y el asedio"],
          ["627", "El viento y la retirada"]
        ]
      ]
    },

    /* ═══════════════ DAY 23 — Sulah-e-Hudaibiya ═══════════════ */
    23: {
      mr: [
        "हुदैबियाचा तह — स्पष्ट विजय",
        "हुदैबिया",
        "झुलकदा हिजरी ६ (मार्च इ.स. ६२८)",
        "तहाची घटना, दिसणारे नुकसान, आंतरिक विजय आणि सूरह अल-फतह उतरल्याची गोष्ट समजून घेणे.",
        "दिसणारा पराभव, आंतरिक विजय. हे अल्लाह! आम्हालाही तुझ्या शहाणपणावर भरवसा ठेवणारे बनव. आमीन.",
        [
          "हिजरी ६",
          "सुमारे १४०० सहाबा (१३००–१५००)",
          "बैअते-रिझवान",
          "१० वर्षांचा तह (एक मत २)",
          "सूरह अल-फतह"
        ],
        [
          ["🕋 उमऱ्याचा विचार",
           "रसूलुल्लाह ﷺ यांना स्वप्नात मस्जिदे-हराममध्ये शांतीने प्रवेश दाखवला गेला (अल-फतह ४८:२७). सहाबा सुमारे १४०० होते (सहीह बुखारी ४१५४). मतभेद: १३०० (सहीह बुखारी ४१५५) आणि १५०० अशा रिवायतीही आहेत. हदीसाठी सुमारे ७० उंट (अर-रहीकुल-मख्तूम); प्रवाशाप्रमाणे म्यानात तलवारी (सहीह बुखारी २७३१).",
           ""],
          ["🤝 कुरैशचा अडथळा",
           "खालिद बिन वलीदच्या स्वारांपासून बचावासाठी मार्ग बदलला; नाका कसवा बसली तेव्हा आप ﷺ म्हणाले: «तिला हत्तीला रोखणाऱ्याने रोखले आहे» (सहीह बुखारी २७३१). उर्वा बिन मसऊदने सहाबांचे प्रेम पाहिले (सहीह बुखारी २७३१). उस्मान (र.अ.) दूत बनले. कुरैशने त्यांनाच उमरा करण्याची विनंती केली आणि त्यांनी नकार दिला — ही सीरतची रिवायत आहे.",
           ""],
          ["🌳 बैअते-रिझवान",
           "उस्मान (र.अ.) यांच्या वधाच्या अफवेवर झाडाखाली बैअत (अल-फतह ४८:१८); नबी ﷺ यांनी आपला हात उस्मान (र.अ.) यांचा हात मानला (सहीह बुखारी ३६९८). मतभेद: सलमा बिन अकवा (र.अ.) यांच्यानुसार मृत्यूवर बैअत (सहीह बुखारी ४१६९); इब्न उमर (र.अ.) यांच्यानुसार न पळण्यावर. बुशरत: बैअत करणाऱ्यांपैकी कोणी जहन्नममध्ये जाणार नाही (सहीह मुस्लिम २४९६).",
           ""],
          ["📜 तह",
           "सुहैल बिन अम्र यांच्याकडून; «बिस्मिक अल्लाहुम्म» आणि «मुहम्मद बिन अब्दुल्लाह» असे लिहिले गेले; अली (र.अ.) यांनी «रसूलुल्लाह» पुसण्यास नकार दिला तेव्हा नबी ﷺ यांनी स्वतः पुसले (सहीह बुखारी २६९८, २७३१). अटी: या वर्षी परती, पुढच्या वर्षी तीन दिवस; वालीच्या परवानगीशिवाय येणारा कुरैशी परत, मदिन्याहून जाणारा परत नाही; टोळ्यांना अधिकार (सहीह बुखारी २७३१). मतभेद: कालावधी १० वर्षे (सुनन अबी दाऊद २७६६; इब्न इशाक) विरुद्ध २ वर्षे (वाकिदी). अबू जंदल (र.अ.) यांना परत पाठवले गेले. उमर (र.अ.) यांनी प्रश्न विचारला; नबी ﷺ म्हणाले की मी अल्लाहचा रसूल आहे, त्याची अवज्ञा करणार नाही (सहीह बुखारी २७३१). कुर्बानी व डोके मुंडण्यात सहाबांच्या संकोचावर उम्मे सलमा (र.अ.) यांच्या सल्ल्याने आप ﷺ यांनी पुढाकार घेतला आणि सर्वांनी केले (सहीह बुखारी २७३१).",
           ""],
          ["🌟 सूरह अल-फतह",
           "परतीच्या वेळी उतरली (सहीह मुस्लिम १७८६); «माझ्यावर अशी सूरत उतरली जी मला जग व त्यातील सर्व गोष्टींपेक्षा अधिक प्रिय आहे» (सहीह बुखारी ४१७७). बरा (र.अ.): तुम्ही मक्केच्या विजयाला फतह मानता, आम्ही बैअते-रिझवानला फतह मानतो (सहीह बुखारी ४१५०). खालिद व अम्र बिन अल-आस (र.अ.) नंतर (हिजरी ७–८, सीरत) मुस्लिम झाले; मक्केचा विजय हिजरी ८ मध्ये झाला.",
           ""],
          ["🎯 बोध",
           "दिसणारे नुकसान विजय होऊ शकते; अल्लाहच्या शहाणपणावर भरवसा ठेवा.",
           ""]
        ],
        [
          ["हुदैबियाचा तह कोणत्या वर्षी झाला?", ["हिजरी ५", "हिजरी ६", "हिजरी ७"]],
          ["सहाबांची संख्या (प्रसिद्ध मत)?", ["७००", "सुमारे १४००", "३०००"]],
          ["या प्रसंगी कोणती सूरत उतरली?", ["अल-फतह", "अल-इसरा", "अल-हज"]]
        ],
        [
          ["इ.स. ६२८", "उमऱ्याचा विचार"],
          ["इ.स. ६२८", "हुदैबियाचा मुक्काम"],
          ["इ.स. ६२८", "बैअते-रिझवान"],
          ["इ.स. ६२८", "तह आणि सूरह अल-फतह"]
        ]
      ],
      ar: [
        "صلح الحديبية — فتح مبين",
        "الحديبية",
        "ذو القعدة السنة السادسة (مارس 628)",
        "فهم قصة الصلح، والخسارة الظاهرة، والفتح الباطن، ونزول سورة الفتح.",
        "خسارة ظاهرة وفتح باطن. اللهم اجعلنا ممن يتوكلون على حكمتك. آمين.",
        [
          "السنة السادسة",
          "نحو 1400 صحابي (1300–1500)",
          "بيعة الرضوان",
          "صلح عشر سنين (وقيل سنتان)",
          "سورة الفتح"
        ],
        [
          ["🕋 قصد العمرة",
           "أُري رسول الله ﷺ في المنام دخول المسجد الحرام آمنًا (الفتح 48:27). وكان الصحابة نحو 1400 (صحيح البخاري 4154). والخلاف: 1300 (صحيح البخاري 4155) و1500. وأهدى نحو سبعين بدنة (الرحيق المختوم)؛ وتقلّدوا السيوف في الأغماد كالمسافرين (صحيح البخاري 2731).",
           ""],
          ["🤝 اعتراض قريش",
           "غيّروا الطريق تجنبًا لخيول خالد بن الوليد؛ فبركت الناقة القصواء فقال ﷺ: «حبسها حابس الفيل» (صحيح البخاري 2731). ورأى عروة بن مسعود محبة الصحابة له ﷺ (صحيح البخاري 2731). وأُرسل عثمان رضي الله عنه سفيرًا. وعرض قريش عليه ﷺ العمرة في عامه ورفضه من روايات السيرة.",
           ""],
          ["🌳 بيعة الرضوان",
           "لما بلغهم مقتل عثمان رضي الله عنه بايعوه تحت الشجرة (الفتح 48:18)؛ وجعل ﷺ يده مكان يد عثمان (صحيح البخاري 3698). والخلاف: عند سلمة بن الأكوع على الموت (صحيح البخاري 4169)، وعند ابن عمر على ألا يفروا. والبشارة: لا يدخل النار أحد ممن بايع (صحيح مسلم 2496).",
           ""],
          ["📜 الصلح",
           "على يد سهيل بن عمرو؛ وكُتب «بسمك اللهم» و«محمد بن عبد الله»؛ وأبى علي رضي الله عنه محو «رسول الله» فمحاه ﷺ بيده (صحيح البخاري 2698، 2731). والشروط: الرجوع هذا العام ودخول العام القادم ثلاثة أيام؛ ومن جاء من قريش بغير إذن وليه رُدّ، ومن ذهب من المدينة لم يُردّ؛ والقبائل بالخيار (صحيح البخاري 2731). والخلاف في المدة: عشر سنين (سنن أبي داود 2766؛ ابن إسحاق) أو سنتان (الواقدي). ورُدّ أبو جندل رضي الله عنه. وسأل عمر رضي الله عنه، فقال ﷺ: أنا رسول الله ولا أعصيه (صحيح البخاري 2731). وتأخر الصحابة في الهدي والحلق، فأشارت أم سلمة رضي الله عنها، فبدأ ﷺ ففعلوا (صحيح البخاري 2731).",
           ""],
          ["🌟 سورة الفتح",
           "نزلت في الرجوع (صحيح مسلم 1786)؛ «لقد أُنزلت عليّ سورة لهي أحب إليّ من الدنيا وما فيها» (صحيح البخاري 4177). وقال البراء رضي الله عنه: إنكم تعدّون فتح مكة فتحًا، ونحن نعدّ بيعة الرضوان فتحًا (صحيح البخاري 4150). وأسلم خالد وعمرو بن العاص رضي الله عنهما بعد ذلك (7–8 من الهجرة، سيرة)؛ وكان فتح مكة سنة ثمانٍ.",
           ""],
          ["🎯 العبرة",
           "قد تكون الخسارة الظاهرة فتحًا؛ فتوكل على حكمة الله.",
           ""]
        ],
        [
          ["في أي سنة كانت صلح الحديبية؟", ["السنة الخامسة", "السادسة", "السابعة"]],
          ["كم كان عدد الصحابة (المشهور)؟", ["700", "نحو 1400", "3000"]],
          ["أي سورة نزلت في هذا المقام؟", ["الفتح", "الإسراء", "الحج"]]
        ],
        [
          ["628", "قصد العمرة"],
          ["628", "النزول بالحديبية"],
          ["628", "بيعة الرضوان"],
          ["628", "الصلح وسورة الفتح"]
        ]
      ],
      fr: [
        "Le traité de Houdaybiyya — une victoire éclatante",
        "Houdaybiyya",
        "Dhou al-qi'da de l'an 6 (mars 628)",
        "Comprendre l'épisode du traité, la perte apparente, la victoire intérieure et la révélation de sourate al-Fath.",
        "Une perte apparente, une victoire intérieure. Ô Allah ! Fais de nous ceux qui se fient à Ta sagesse. Âmîn.",
        [
          "An 6",
          "Environ 1400 Compagnons (1300 à 1500)",
          "Le serment du contentement",
          "Une trêve de dix ans (ou deux selon un avis)",
          "Sourate al-Fath"
        ],
        [
          ["🕋 L'intention de la 'Umra",
           "Le Messager d'Allah ﷺ vit en rêve son entrée paisible dans la Mosquée sacrée (al-Fath 48:27). Les Compagnons étaient environ 1400 (Sahih al-Bukhari : 4154). Divergence : 1300 (Sahih al-Bukhari : 4155) et 1500. Environ soixante-dix offrandes (Ar-Rahîq al-Makhtûm) ; ils portaient les épées au fourreau comme des voyageurs (Sahih al-Bukhari : 2731).",
           ""],
          ["🤝 L'obstruction des Quraysh",
           "Ils changèrent de route pour éviter les cavaliers de Khâlid ibn al-Walîd ; la chamelle al-Qaswâ' s'agenouilla, et il ﷺ dit : « Celui qui a retenu l'éléphant l'a retenue. » (Sahih al-Bukhari : 2731). 'Ourwa ibn Mas'oûd vit l'amour des Compagnons pour lui ﷺ (Sahih al-Bukhari : 2731). 'Uthmân (qu'Allah l'agrée) fut envoyé comme ambassadeur. Que les Quraysh lui aient proposé de faire lui-même la 'Umra et qu'il ait refusé relève des récits de Sîra.",
           ""],
          ["🌳 Le serment du contentement",
           "Sur la rumeur du meurtre de 'Uthmân (qu'Allah l'agrée), ils lui prêtèrent serment sous l'arbre (al-Fath 48:18) ; le Prophète ﷺ mit sa main à la place de celle de 'Uthmân (Sahih al-Bukhari : 3698). Divergence : selon Salama ibn al-Akwa', le serment portait sur la mort (Sahih al-Bukhari : 4169) ; selon Ibn 'Umar, sur la fuite à ne pas commettre. Annonce : nul de ceux qui prêtèrent serment n'entrera en Enfer (Sahih Muslim : 2496).",
           ""],
          ["📜 Le traité",
           "Négocié avec Souhayl ibn 'Amr ; on écrivit « Bismika-llâhumma » et « Mouhammad ibn 'Abdillâh » ; 'Alî (qu'Allah l'agrée) refusa d'effacer « Messager d'Allah », et le Prophète ﷺ l'effaça lui-même (Sahih al-Bukhari : 2698, 2731). Conditions : retour cette année, entrée l'année suivante pour trois jours ; tout Qourachî venant sans l'autorisation de son tuteur est rendu, et celui qui part de Médine n'est pas rendu ; les tribus restent libres (Sahih al-Bukhari : 2731). Divergence sur la durée : dix ans (Sunan Abi Dawud : 2766 ; Ibn Ishâq) ou deux ans (al-Wâqidî). Abou Jandal (qu'Allah l'agrée) fut rendu. 'Umar (qu'Allah l'agrée) interrogea, et il ﷺ dit : « Je suis le Messager d'Allah et je ne Lui désobéis pas. » (Sahih al-Bukhari : 2731). Les Compagnons hésitèrent à égorger et à se raser ; sur le conseil d'Oumm Salama (qu'Allah l'agrée), il ﷺ commença et tous firent de même (Sahih al-Bukhari : 2731).",
           ""],
          ["🌟 Sourate al-Fath",
           "Elle descendit au retour (Sahih Muslim : 1786) ; « Une sourate m'a été révélée qui m'est plus chère que le monde et tout ce qu'il contient » (Sahih al-Bukhari : 4177). Al-Barâ' (qu'Allah l'agrée) dit : vous considérez la conquête de La Mecque comme une victoire, nous considérons le serment du contentement comme une victoire (Sahih al-Bukhari : 4150). Khâlid et 'Amr ibn al-'Âs (qu'Allah les agrée) embrassèrent l'islam plus tard (7e-8e année, Sîra) ; la conquête de La Mecque eut lieu en l'an 8.",
           ""],
          ["🎯 La leçon",
           "Une perte apparente peut devenir une victoire ; fais confiance à la sagesse d'Allah.",
           ""]
        ],
        [
          ["En quelle année eut lieu le traité ?", ["An 5", "An 6", "An 7"]],
          ["Combien de Compagnons (avis célèbre) ?", ["700", "Environ 1400", "3000"]],
          ["Quelle sourate descendit à cette occasion ?", ["Al-Fath", "Al-Isrâ'", "Al-Hajj"]]
        ],
        [
          ["628", "L'intention de la 'Umra"],
          ["628", "Le campement à Houdaybiyya"],
          ["628", "Le serment du contentement"],
          ["628", "Le traité et sourate al-Fath"]
        ]
      ],
      es: [
        "El tratado de Hudaybiyya: una victoria clara",
        "Hudaybiyya",
        "Du l-qi'da del año 6 (marzo de 628)",
        "Comprender el episodio del tratado, la pérdida aparente, la victoria interior y la revelación de la sura al-Fath.",
        "Una pérdida aparente, una victoria interior. ¡Oh Alá! Haznos de quienes confían en Tu sabiduría. Amín.",
        [
          "Año 6",
          "Unos 1400 Compañeros (1300 a 1500)",
          "El juramento del contento",
          "Una tregua de diez años (o dos según una opinión)",
          "La sura al-Fath"
        ],
        [
          ["🕋 La intención de la Umra",
           "El Mensajero de Alá ﷺ vio en sueños su entrada pacífica en la Mezquita Sagrada (al-Fath 48:27). Los Compañeros eran unos 1400 (Sahih al-Bujari: 4154). Discrepancia: 1300 (Sahih al-Bujari: 4155) y 1500. Unas setenta ofrendas (Ar-Rahiq al-Majtum); llevaban las espadas en la funda como viajeros (Sahih al-Bujari: 2731).",
           ""],
          ["🤝 La obstrucción de los Quraysh",
           "Cambiaron de ruta para evitar a los jinetes de Jalid ibn al-Walid; la camella al-Qaswa se arrodilló y él ﷺ dijo: «La ha retenido Quien retuvo al elefante.» (Sahih al-Bujari: 2731). Urwa ibn Masud vio el amor de los Compañeros por él ﷺ (Sahih al-Bujari: 2731). Uzman (que Alá esté complacido con él) fue enviado como embajador. Que los Quraysh le ofrecieran hacer él mismo la Umra y que lo rechazara pertenece a los relatos de Sira.",
           ""],
          ["🌳 El juramento del contento",
           "Ante el rumor del asesinato de Uzman (que Alá esté complacido con él), le juraron bajo el árbol (al-Fath 48:18); el Profeta ﷺ puso su mano en lugar de la de Uzman (Sahih al-Bujari: 3698). Discrepancia: según Salama ibn al-Akwa, el juramento fue sobre la muerte (Sahih al-Bujari: 4169); según Ibn Umar, sobre no huir. Anuncio: ninguno de los que juraron entrará en el Infierno (Sahih Muslim: 2496).",
           ""],
          ["📜 El tratado",
           "Negociado con Suhayl ibn Amr; se escribió «Bismika Aláhumma» y «Muhámmad ibn Abdil-lah»; Ali (que Alá esté complacido con él) se negó a borrar «Mensajero de Alá» y el Profeta ﷺ lo borró él mismo (Sahih al-Bujari: 2698, 2731). Condiciones: regreso este año, entrada el año siguiente por tres días; todo qurayshí que venga sin permiso de su tutor es devuelto, y quien parta de Medina no es devuelto; las tribus quedan libres (Sahih al-Bujari: 2731). Discrepancia sobre la duración: diez años (Sunan Abi Dawud: 2766; Ibn Ishaq) o dos (al-Waqidi). Abu Yandal (que Alá esté complacido con él) fue devuelto. Umar (que Alá esté complacido con él) preguntó, y él ﷺ dijo: «Soy el Mensajero de Alá y no Le desobedezco.» (Sahih al-Bujari: 2731). Los Compañeros dudaron en sacrificar y afeitarse; por consejo de Umm Salama (que Alá esté complacido con ella), él ﷺ comenzó y todos hicieron lo mismo (Sahih al-Bujari: 2731).",
           ""],
          ["🌟 La sura al-Fath",
           "Descendió a la vuelta (Sahih Muslim: 1786); «Se me ha revelado una sura que me es más querida que el mundo y cuanto contiene» (Sahih al-Bujari: 4177). Al-Bara (que Alá esté complacido con él) dijo: vosotros tenéis la conquista de La Meca por victoria, nosotros tenemos el juramento del contento por victoria (Sahih al-Bujari: 4150). Jalid y Amr ibn al-As (que Alá esté complacido con ellos) abrazaron el islam después (años 7-8, Sira); la conquista de La Meca fue en el año 8.",
           ""],
          ["🎯 La lección",
           "Una pérdida aparente puede ser una victoria; confía en la sabiduría de Alá.",
           ""]
        ],
        [
          ["¿En qué año fue el tratado?", ["Año 5", "Año 6", "Año 7"]],
          ["¿Cuántos Compañeros (opinión famosa)?", ["700", "Unos 1400", "3000"]],
          ["¿Qué sura descendió en esa ocasión?", ["Al-Fath", "Al-Isra", "Al-Hayy"]]
        ],
        [
          ["628", "La intención de la Umra"],
          ["628", "El campamento en Hudaybiyya"],
          ["628", "El juramento del contento"],
          ["628", "El tratado y la sura al-Fath"]
        ]
      ]
    },

    /* ═══════════════ DAY 24 — Ghazwa-e-Khaibar ═══════════════ */
    24: {
      mr: [
        "खैबरचे युद्ध — किल्ल्यांचा विजय",
        "खैबर",
        "मुहर्रम हिजरी ७ (इ.स. ६२८) — इब्न इशाक व अर-रहीक; काहींच्या मते सफर",
        "खैबरचा विजय, यहुद्यांचे कट आणि हजरत अली (र.अ.) यांची भूमिका समजून घेणे.",
        "ज्याला अल्लाह व रसूल प्रिय होते त्यालाच निशाण मिळाले. हे अल्लाह! आम्हाला खरे प्रेम दे. आमीन.",
        [
          "हिजरी ७",
          "किल्ले जिंकले",
          "निशाण अली (र.अ.) यांना",
          "सफिय्या (र.अ.) यांच्याशी विवाह",
          "मुझाराअत (सामायिक पीक)",
          "विषाची घटना"
        ],
        [
          ["🏰 पार्श्वभूमी",
           "खैबर यहुद्यांची वस्ती होती (मदिन्यापासून सुमारे १५०–१७० किमी उत्तरेला); बनू नजीरच्या हद्दपार सरदारांनी (हय्य बिन अख्तब इ.) अहझाबला भडकवले होते (सीरत). फक्त हुदैबियाचे लोक निघाले (अल-फतह ४८:१५–१९); सुमारे १४०० पायी, सुमारे २०० स्वार (अर-रहीकुल-मख्तूम). रात्री पोहोचले, नबी ﷺ यांनी रात्री हल्ला केला नाही; सकाळी यहुदी कुदळी घेऊन बाहेर आले तेव्हा आप ﷺ म्हणाले «अल्लाहु अकबर, खैबर उद्ध्वस्त झाले» (सहीह बुखारी ३७१, ४१९७).",
           ""],
          ["⚔️ किल्ले",
           "नाइम, कमूस, सअब बिन मुआज इ. (सीरत). अबू बक्र व उमर (र.अ.) यांना निशाण मिळाले पण विजय मिळाला नाही (मुस्नद अहमद, बुरैदा (र.अ.); सहीहैनमध्ये नाही). नंतर आप ﷺ म्हणाले: «उद्या निशाण अशाला देईन जो अल्लाह व रसूलवर प्रेम करतो आणि अल्लाह व रसूल त्याच्यावर प्रेम करतात» (सहीह बुखारी ३७०१; सहीह मुस्लिम २४०६). अली (र.अ.) यांचे डोळे दुखत होते, आप ﷺ यांच्या थुंकीने बरे झाले; मार्गदर्शन: «शांतपणे जा, इस्लामची दावत द्या; तुमच्यामुळे एखादा माणूस हिदायत मिळवेल तर ते लाल उंटांपेक्षा उत्तम आहे» (सहीह बुखारी ३७०१).",
           ""],
          ["🦁 अली (र.अ.) व मरहब",
           "सहीह मुस्लिम १८०७ (सलमा बिन अकवा (र.अ.)) नुसार अली (र.अ.) यांनी मरहबचा वध केला. मतभेद: इब्न इशाकच्या मते मुहम्मद बिन मुस्लिमा (र.अ.) यांनी. दरवाजा उपटण्याची रिवायत जईफ आहे, ती समाविष्ट केलेली नाही.",
           ""],
          ["💔 सफिय्या (र.अ.)",
           "हय्य यांची मुलगी; नबी ﷺ यांनी त्यांना मुक्त करून मुक्तीचा मेहर केला आणि विवाह केला (सहीह बुखारी ९४७, ४२००; सहीह मुस्लिम १३६५); सहाबांनी म्हटले की जर पडदा केला तर त्या उम्मुल-मोमिनीन आहेत (सहीह बुखारी ४२१३).",
           ""],
          ["🍇 जमीन",
           "यहुद्यांना निम्म्या उत्पन्नावर काम करू दिले (सहीह बुखारी २३३१, २३३८); उमर (र.अ.) यांनी आपल्या काळात त्यांना हद्दपार केले (सहीह बुखारी २७३०; सहीह मुस्लिम १५५१).",
           ""],
          ["☠️ विष",
           "एका यहुदी स्त्रीने भाजलेल्या बकरीत विष मिसळले; नबी ﷺ यांनी घास थुंकून टाकला (सहीह बुखारी २६१७; सहीह मुस्लिम २१९०). तिचे नाव झैनब बिंत हारिस सीरतमध्ये येते. मतभेद: बुखारी व मुस्लिममध्ये तिला ठार मारले गेले नाही; सुनन अबी दाऊदमध्ये (किताबुद-दियात) बिश्र बिन बरा (र.अ.) यांच्या मृत्यूवर वधाचा उल्लेख आहे. विद्वान असे एकत्र करतात: आधी माफी, बिश्र (र.अ.) यांच्या मृत्यूनंतर किसास.",
           ""],
          ["🐴 भर",
           "पाळीव गाढवांचे मांस हराम झाले (सहीह बुखारी ४२१९).",
           ""],
          ["🎯 बोध",
           "अल्लाह व रसूल यांचे प्रेम; अहले-बैत व सहाबांचा आदर.",
           ""]
        ],
        [
          ["खैबरचे युद्ध कोणत्या वर्षी झाले?", ["हिजरी ६", "हिजरी ७", "हिजरी ८"]],
          ["निशाण कोणाला मिळाले?", ["उमर (र.अ.)", "अली (र.अ.)", "उस्मान (र.अ.)"]],
          ["निशाण देताना कोणता गुण सांगितला?", ["अल्लाह व रसूल यांचे प्रेम", "तलवारीचे कौशल्य", "धन-दौलत"]]
        ],
        [
          ["इ.स. ६२८", "प्रयाण"],
          ["इ.स. ६२८", "किल्ल्यांचा विजय"],
          ["इ.स. ६२८", "सफिय्या (र.अ.) यांच्याशी विवाह"]
        ]
      ],
      ar: [
        "غزوة خيبر — فتح الحصون",
        "خيبر",
        "محرم السنة السابعة (628) — ابن إسحاق والرحيق؛ وقيل صفر",
        "فهم فتح خيبر، ومكائد اليهود، ودور علي رضي الله عنه.",
        "أُعطي الراية من كان يحب الله ورسوله. اللهم ارزقنا المحبة الصادقة. آمين.",
        [
          "السنة السابعة",
          "فتح الحصون",
          "الراية لعلي رضي الله عنه",
          "زواجه ﷺ بصفية رضي الله عنها",
          "المزارعة",
          "قصة السم"
        ],
        [
          ["🏰 الخلفية",
           "كانت خيبر بلدة يهود (نحو 150–170 كم شمال المدينة)؛ وقد حرّض سادة بني النضير المنفيون (حيي بن أخطب وغيره) الأحزاب (سيرة). ولم يخرج إلا أهل الحديبية (الفتح 48:15–19)؛ نحو 1400 راجل و200 فارس (الرحيق المختوم). وصلوا ليلًا فلم يهجم ﷺ ليلًا؛ فلما خرج اليهود بالمساحي صباحًا قال: «الله أكبر، خربت خيبر» (صحيح البخاري 371، 4197).",
           ""],
          ["⚔️ الحصون",
           "ناعم وقموص وصعب بن معاذ وغيرها (سيرة). وأُعطى الراية لأبي بكر وعمر رضي الله عنهما فلم يُفتح؛ ثم قال ﷺ: «لأعطين الراية غدًا رجلًا يحب الله ورسوله ويحبه الله ورسوله» (صحيح البخاري 3701؛ صحيح مسلم 2406). وكان علي رضي الله عنه أرمد، فبرئ بريق النبي ﷺ؛ وقال له: «انفذ على رسلك، وادعهم إلى الإسلام؛ فوالله لأن يهدي الله بك رجلًا واحدًا خير لك من حمر النعم» (صحيح البخاري 3701).",
           ""],
          ["🦁 علي رضي الله عنه ومرحب",
           "في صحيح مسلم 1807 (سلمة بن الأكوع رضي الله عنه) أن عليًّا رضي الله عنه قتل مرحبًا. والخلاف: عند ابن إسحاق قتله محمد بن مسلمة رضي الله عنه. وأما قلع الباب فرواية ضعيفة لم تُدرج.",
           ""],
          ["💔 صفية رضي الله عنها",
           "بنت حيي؛ أعتقها النبي ﷺ وجعل عتقها صداقها وتزوجها (صحيح البخاري 947، 4200؛ صحيح مسلم 1365)؛ فقال الصحابة: إن حُجب عنها فهي أم المؤمنين (صحيح البخاري 4213).",
           ""],
          ["🍇 الأرض",
           "أُقرّ اليهود على العمل بنصف الثمر (صحيح البخاري 2331، 2338)؛ وأجلاهم عمر رضي الله عنه في خلافته (صحيح البخاري 2730؛ صحيح مسلم 1551).",
           ""],
          ["☠️ السم",
           "دسّت امرأة يهودية السم في شاة مشوية؛ فلفظ النبي ﷺ اللقمة (صحيح البخاري 2617؛ صحيح مسلم 2190). واسمها زينب بنت الحارث في السيرة. والخلاف: في البخاري ومسلم لم تُقتل؛ وفي سنن أبي داود (كتاب الديات) ذكر القتل لوفاة بشر بن البراء رضي الله عنه. ويجمع العلماء: العفو أولًا، ثم القصاص عند وفاة بشر رضي الله عنه.",
           ""],
          ["🐴 زيادة",
           "حرّمت لحوم الحمر الأهلية (صحيح البخاري 4219).",
           ""],
          ["🎯 العبرة",
           "محبة الله ورسوله؛ وإجلال أهل البيت والصحابة.",
           ""]
        ],
        [
          ["في أي سنة كانت خيبر؟", ["السادسة", "السابعة", "الثامنة"]],
          ["من أُعطي الراية؟", ["عمر رضي الله عنه", "علي رضي الله عنه", "عثمان رضي الله عنه"]],
          ["ما الصفة المذكورة عند إعطاء الراية؟", ["محبة الله ورسوله", "مهارة السيف", "المال"]]
        ],
        [
          ["628", "الخروج"],
          ["628", "فتح الحصون"],
          ["628", "زواجه ﷺ بصفية رضي الله عنها"]
        ]
      ],
      fr: [
        "La bataille de Khaybar — la prise des forteresses",
        "Khaybar",
        "Mouharram de l'an 7 (628) — Ibn Ishâq et Ar-Rahîq ; safar selon d'autres",
        "Comprendre la prise de Khaybar, les intrigues des Juifs et le rôle de 'Alî (qu'Allah l'agrée).",
        "L'étendard fut donné à celui qui aimait Allah et Son Messager. Ô Allah ! Accorde-nous l'amour sincère. Âmîn.",
        [
          "An 7",
          "Les forteresses prises",
          "L'étendard à 'Alî (qu'Allah l'agrée)",
          "Le mariage avec Safiyya (qu'Allah l'agrée)",
          "Le métayage",
          "L'affaire du poison"
        ],
        [
          ["🏰 Le contexte",
           "Khaybar était une localité juive (à environ 150-170 km au nord de Médine) ; les chefs exilés des Banou Nadîr (Houyay ibn Akhtab et d'autres) avaient poussé les coalisés (Sîra). Seuls ceux de Houdaybiyya sortirent (al-Fath 48:15-19) ; environ 1400 à pied et 200 cavaliers (Ar-Rahîq al-Makhtûm). Ils arrivèrent de nuit, et le Prophète ﷺ n'attaqua pas de nuit ; au matin, quand les Juifs sortirent avec leurs pioches, il dit : « Allah est le plus grand, Khaybar est ruinée » (Sahih al-Bukhari : 371, 4197).",
           ""],
          ["⚔️ Les forteresses",
           "Nâ'im, Qamoûs, Sa'b ibn Mou'âdh, etc. (Sîra). L'étendard fut donné à Abou Bakr puis à 'Umar (qu'Allah les agrée), sans succès ; puis il ﷺ dit : « Je donnerai demain l'étendard à un homme qui aime Allah et Son Messager, et qu'Allah et Son Messager aiment. » (Sahih al-Bukhari : 3701 ; Sahih Muslim : 2406). 'Alî (qu'Allah l'agrée) souffrait des yeux et fut guéri par la salive du Prophète ﷺ ; il lui dit : « Avance avec calme et appelle-les à l'islam ; par Allah, qu'Allah guide par toi un seul homme vaut mieux pour toi que les chameaux roux. » (Sahih al-Bukhari : 3701)",
           ""],
          ["🦁 'Alî (qu'Allah l'agrée) et Marhab",
           "Selon Sahih Muslim 1807 (Salama ibn al-Akwa'), 'Alî (qu'Allah l'agrée) tua Marhab. Divergence : selon Ibn Ishâq, ce fut Mouhammad ibn Maslama (qu'Allah l'agrée). Le récit de la porte arrachée est faible et n'a pas été retenu.",
           ""],
          ["💔 Safiyya (qu'Allah l'agrée)",
           "Fille de Houyay ; le Prophète ﷺ l'affranchit, fit de son affranchissement sa dot et l'épousa (Sahih al-Bukhari : 947, 4200 ; Sahih Muslim : 1365) ; les Compagnons dirent : s'il la voile, elle est mère des croyants (Sahih al-Bukhari : 4213).",
           ""],
          ["🍇 La terre",
           "Les Juifs furent maintenus à cultiver contre la moitié des fruits (Sahih al-Bukhari : 2331, 2338) ; 'Umar (qu'Allah l'agrée) les expulsa sous son califat (Sahih al-Bukhari : 2730 ; Sahih Muslim : 1551).",
           ""],
          ["☠️ Le poison",
           "Une femme juive mit du poison dans une chèvre rôtie ; le Prophète ﷺ recracha le morceau (Sahih al-Bukhari : 2617 ; Sahih Muslim : 2190). Son nom, Zaynab bint al-Hârith, figure dans la Sîra. Divergence : dans al-Bukhari et Muslim elle ne fut pas tuée ; dans Sunan Abi Dawud (Livre des diyât) il est question de la mise à mort après la mort de Bichr ibn al-Barâ' (qu'Allah l'agrée). Les savants concilient : d'abord le pardon, puis la loi du talion à la mort de Bichr.",
           ""],
          ["🐴 En plus",
           "La viande des ânes domestiques fut rendue illicite (Sahih al-Bukhari : 4219).",
           ""],
          ["🎯 La leçon",
           "L'amour d'Allah et de Son Messager ; le respect des gens de la maison et des Compagnons.",
           ""]
        ],
        [
          ["En quelle année eut lieu Khaybar ?", ["An 6", "An 7", "An 8"]],
          ["À qui fut donné l'étendard ?", ["'Umar (qu'Allah l'agrée)", "'Alî (qu'Allah l'agrée)", "'Uthmân (qu'Allah l'agrée)"]],
          ["Quelle qualité fut mentionnée en donnant l'étendard ?", ["L'amour d'Allah et de Son Messager", "La maîtrise du sabre", "La richesse"]]
        ],
        [
          ["628", "Le départ"],
          ["628", "La prise des forteresses"],
          ["628", "Le mariage avec Safiyya (qu'Allah l'agrée)"]
        ]
      ],
      es: [
        "La batalla de Jaybar: la toma de las fortalezas",
        "Jaybar",
        "Muharram del año 7 (628); Ibn Ishaq y Ar-Rahiq: así; safar según otros",
        "Comprender la toma de Jaybar, las intrigas de los judíos y el papel de Ali (que Alá esté complacido con él).",
        "El estandarte fue dado a quien amaba a Alá y a Su Mensajero. ¡Oh Alá! Concédenos el amor sincero. Amín.",
        [
          "Año 7",
          "Se tomaron las fortalezas",
          "El estandarte a Ali (que Alá esté complacido con él)",
          "El matrimonio con Safiyya (que Alá esté complacido con ella)",
          "El aparcero",
          "El asunto del veneno"
        ],
        [
          ["🏰 El contexto",
           "Jaybar era una localidad judía (a unos 150-170 km al norte de Medina); los jefes exiliados de los Banu Nadir (Huyay ibn Ajtab y otros) habían incitado a los coaligados (Sira). Solo salieron los de Hudaybiyya (al-Fath 48:15-19); unos 1400 a pie y 200 jinetes (Ar-Rahiq al-Majtum). Llegaron de noche y el Profeta ﷺ no atacó de noche; por la mañana, cuando los judíos salieron con sus azadas, dijo: «Alá es el más grande, Jaybar está arruinada» (Sahih al-Bujari: 371, 4197).",
           ""],
          ["⚔️ Las fortalezas",
           "Naim, Qamus, Sab ibn Muaz, etc. (Sira). El estandarte fue dado a Abu Bakr y luego a Umar (que Alá esté complacido con ellos) sin éxito; entonces ﷺ dijo: «Mañana daré el estandarte a un hombre que ama a Alá y a Su Mensajero, y a quien Alá y Su Mensajero aman.» (Sahih al-Bujari: 3701; Sahih Muslim: 2406). Ali (que Alá esté complacido con él) tenía los ojos enfermos y sanó con la saliva del Profeta ﷺ; le dijo: «Avanza con calma y llámalos al islam; por Alá, que Alá guíe por ti a un solo hombre vale más para ti que los camellos rojos.» (Sahih al-Bujari: 3701)",
           ""],
          ["🦁 Ali (que Alá esté complacido con él) y Marhab",
           "Según Sahih Muslim 1807 (Salama ibn al-Akwa), Ali (que Alá esté complacido con él) mató a Marhab. Discrepancia: según Ibn Ishaq, fue Muhámmad ibn Maslama (que Alá esté complacido con él). El relato de la puerta arrancada es débil y no se ha incluido.",
           ""],
          ["💔 Safiyya (que Alá esté complacido con ella)",
           "Hija de Huyay; el Profeta ﷺ la libertó, hizo de su liberación su dote y se casó con ella (Sahih al-Bujari: 947, 4200; Sahih Muslim: 1365); los Compañeros dijeron: si la cubre con velo, es madre de los creyentes (Sahih al-Bujari: 4213).",
           ""],
          ["🍇 La tierra",
           "Se dejó a los judíos cultivarla a cambio de la mitad de los frutos (Sahih al-Bujari: 2331, 2338); Umar (que Alá esté complacido con él) los expulsó en su califato (Sahih al-Bujari: 2730; Sahih Muslim: 1551).",
           ""],
          ["☠️ El veneno",
           "Una mujer judía puso veneno en una cabra asada; el Profeta ﷺ escupió el bocado (Sahih al-Bujari: 2617; Sahih Muslim: 2190). Su nombre, Zaynab bint al-Hariz, aparece en la Sira. Discrepancia: en al-Bujari y Muslim no fue matada; en Sunan Abi Dawud (Libro de las diyat) se menciona la muerte tras el fallecimiento de Bishr ibn al-Bara (que Alá esté complacido con él). Los sabios concilian: primero el perdón, luego la ley del talión a la muerte de Bishr.",
           ""],
          ["🐴 Además",
           "Se prohibió la carne de los asnos domésticos (Sahih al-Bujari: 4219).",
           ""],
          ["🎯 La lección",
           "El amor a Alá y a Su Mensajero; el respeto a la gente de la casa y a los Compañeros.",
           ""]
        ],
        [
          ["¿En qué año fue Jaybar?", ["Año 6", "Año 7", "Año 8"]],
          ["¿A quién se dio el estandarte?", ["Umar (que Alá esté complacido con él)", "Ali (que Alá esté complacido con él)", "Uzman (que Alá esté complacido con él)"]],
          ["¿Qué cualidad se mencionó al dar el estandarte?", ["El amor a Alá y a Su Mensajero", "La destreza con la espada", "La riqueza"]]
        ],
        [
          ["628", "La salida"],
          ["628", "La toma de las fortalezas"],
          ["628", "El matrimonio con Safiyya (que Alá esté complacido con ella)"]
        ]
      ]
    },

    /* ═══════════════ DAY 25 — Waqi'a-e-Ifk ═══════════════ */
    25: {
      mr: [
        "इफ्कची घटना — पावित्र्याची परीक्षा",
        "मदिना",
        "गझवा-ए-बनू मुस्तलिकहून परतीच्या वेळी — शाबान हिजरी ५ (इब्न इशाक) / हिजरी ६ (अर-रहीक) / हिजरी ४ (मूसा बिन उकबा), सुमारे इ.स. ६२७",
        "हजरत आयशा (र.अ.) यांच्यावरील बदनामी, कुरआनची निर्दोषता आणि संयमाची घटना समजून घेणे.",
        "«फसब्रुन जमील» — अल्लाहने कायमचे आयशा (र.अ.) यांची निर्दोषता उतरवली. हे अल्लाह! आमच्या जिभांना बदनामीपासून सुरक्षित ठेव. आमीन.",
        [
          "आयशा (र.अ.) यांच्यावर बदनामी",
          "मुनाफिकांचा कट",
          "सूरह अन-नूर",
          "निर्दोषतेची घोषणा",
          "हद्दे-कज्फ",
          "आयशा (र.अ.) यांचा संयम"
        ],
        [
          ["⚠️ क्रम आणि तारीख",
           "ही घटना गझवा-ए-बनू मुस्तलिकहून परतीच्या वेळी घडली. इब्न इशाकच्या हिशोबाने ही खंदकाच्या युद्धापूर्वीची आहे (दिवस २२), म्हणून अभ्यासक्रमाच्या क्रमात तारखेचा फरक लक्षात ठेवा.",
           ""],
          ["🐪 घटना",
           "परतीच्या वेळी आयशा (र.अ.) हजेरीसाठी गेल्या, हार हरवला; होदा उचलणाऱ्यांनी समजले की त्या आत आहेत (त्या हलक्या होत्या). सफवान बिन मुअत्तल (र.अ.) यांनी त्यांना पाहिले, «इन्ना लिल्लाहि व इन्ना इलैहि राजिऊन» म्हटले, उंटीण बसवली आणि वाग घेऊन घेऊन आले; याशिवाय काहीच बोलले नाहीत (सहीह बुखारी ४१४१).",
           ""],
          ["🗣️ बदनामी",
           "मुख्य सूत्रधार अब्दुल्लाह बिन उबय्य बिन सलूल होता; काही मुस्लिमही (हस्सान, मिस्तह व हम्ना (र.अ.)) त्यात सामील झाले (सहीह बुखारी ४१४१; सुनन अबी दाऊद ४४७४). आयशा (र.अ.) आजारी पडल्या आणि सुमारे एक महिना बेखबर राहिल्या; त्यांना नबी ﷺ यांची पूर्वीची ममता जाणवली नाही. उम्मे मिस्तहकडून त्यांना कळले. नबी ﷺ यांनी अली, उसामा व बरैरा (र.अ.) यांचा सल्ला घेतला; झैनब बिंत जहश (र.अ.) यांनी फक्त चांगलेच सांगितले (सहीह बुखारी ४१४१). सूचना: रिवायतीत साद बिन मुआज (र.अ.) यांचा उल्लेख आहे, जरी ते गझवा-ए-बनू कुरैजानंतर गेले; म्हणून काही विद्वान याला वर्णनकर्त्याची भूल किंवा तारखेचा गोंधळ म्हणतात (याच्याशी तारखेचा मतभेद जोडलेला आहे).",
           ""],
          ["💔 आयशा (र.अ.) यांचा संयम",
           "त्या दोन रात्री व एक दिवस रडत राहिल्या; नबी ﷺ म्हणाले: निर्दोष असाल तर अल्लाह उघड करेल, गुन्हा झाला असेल तर तौबा करा. याकूब (अ.स.) यांचे नाव आठवले नाही तेव्हा त्या म्हणाल्या: «मी तेच म्हणते जे यूसुफच्या वडिलांनी म्हटले: फसब्रुन जमील» (यूसुफ १२:१८) (सहीह बुखारी ४१४१).",
           ""],
          ["📖 कुरआनची निर्दोषता",
           "वही आली, थंडीतही घाम आला, नबी ﷺ हसून म्हणाले: «आयशा! अल्लाहने तुमची निर्दोषता उतरवली.» आईंनी म्हटले आप ﷺ यांचे आभार माना; त्या म्हणाल्या: «अल्लाहची शपथ! मी फक्त अल्लाहची स्तुती करीन.» सूरह अन-नूर २४:११–२० (दहा आयती). अबू बक्र (र.अ.) यांनी मिस्तहला मदत थांबवली होती, तेव्हा २४:२२ उतरली आणि त्यांनी पुन्हा सुरू केली (सहीह बुखारी ४१४१).",
           ""],
          ["⚖️ हद",
           "कज्फची हद ८० चाबक्या (अन-नूर २४:४). सुनन अबी दाऊद ४४७४, तिर्मिझी ३१८१, इब्न माजा २५६७ नुसार मिस्तह, हस्सान व हम्ना (र.अ.) यांना हद लागली. सूचना: हा उल्लेख सहीहैनमध्ये नाही; अल्बानी यांनी हसन म्हटले. अब्दुल्लाह बिन उबय्यवर हद न लागण्याची कारणे विद्वानांनी वेगवेगळी सांगितली आहेत (आखिरतची शिक्षा, अन-नूर २४:११; फितनेपासून बचाव इ.).",
           ""],
          ["🎯 बोध",
           "बदनामी मोठा गुन्हा आहे; जीभ आवरा; पुराव्याशिवाय बोलू नका.",
           ""]
        ],
        [
          ["बदनामी कोणावर केली?", ["खदीजा (र.अ.)", "आयशा (र.अ.)", "हफ्सा (र.अ.)"]],
          ["निर्दोषता कोणत्या सूरतीत उतरली?", ["अन-नूर", "अल-फतह", "अल-अहझाब"]],
          ["हद्दे-कज्फ किती चाबक्या?", ["४०", "८०", "१००"]]
        ],
        [
          ["इ.स. ६२७", "गझवा-ए-बनू मुस्तलिकहून परती"],
          ["इ.स. ६२७", "बदनामीचा प्रसार"],
          ["इ.स. ६२७", "सूरह अन-नूरचे अवतरण"]
        ]
      ],
      ar: [
        "حديث الإفك — امتحان العفة",
        "المدينة",
        "في الرجوع من غزوة بني المصطلق — شعبان السنة الخامسة (ابن إسحاق) / السادسة (الرحيق) / الرابعة (موسى بن عقبة)، نحو 627 م",
        "فهم بُهتان عائشة رضي الله عنها، وبراءتها في القرآن، وقصة الصبر.",
        "«فصبر جميل» — وقد أنزل الله براءة عائشة رضي الله عنها إلى الأبد. اللهم احفظ ألسنتنا من البهتان. آمين.",
        [
          "البهتان على عائشة رضي الله عنها",
          "مكيدة المنافقين",
          "سورة النور",
          "إعلان البراءة",
          "حد القذف",
          "صبر عائشة رضي الله عنها"
        ],
        [
          ["⚠️ الترتيب والتاريخ",
           "وقعت هذه القصة في الرجوع من غزوة بني المصطلق. وبحساب ابن إسحاق هي قبل غزوة الخندق (اليوم 22)، فانتبه إلى اختلاف التاريخ في ترتيب الدروس.",
           ""],
          ["🐪 القصة",
           "في الرجوع ذهبت عائشة رضي الله عنها لقضاء حاجتها فضاع عقدها؛ وظنّ من رفع الهودج أنها فيه (وكانت خفيفة). فوجدها صفوان بن المعطل رضي الله عنه فقال: «إنا لله وإنا إليه راجعون»، وأناخ الناقة وأخذ بالزمام وأتى بها؛ ولم يزد على ذلك (صحيح البخاري 4141).",
           ""],
          ["🗣️ البهتان",
           "كان رأس الأمر عبد الله بن أُبيّ بن سلول؛ ودخل فيه بعض المسلمين (حسان ومسطح وحمنة رضي الله عنهم) (صحيح البخاري 4141؛ سنن أبي داود 4474). ومرضت عائشة رضي الله عنها وبقيت نحو شهر لا تعلم؛ ولم تجد من النبي ﷺ لطفه الأول. وعرفت من أم مسطح. فاستشار النبي ﷺ عليًّا وأسامة وبريدة رضي الله عنهم؛ وقالت زينب بنت جحش رضي الله عنها خيرًا (صحيح البخاري 4141). تنبيه: في الرواية ذكر سعد بن معاذ رضي الله عنه، وقد توفي بعد غزوة بني قريظة؛ فاعتبره بعض العلماء وهمًا من الراوي أو إشكالًا في التاريخ (ومنه جاء اختلاف التاريخ).",
           ""],
          ["💔 صبر عائشة رضي الله عنها",
           "بكت ليلتين ويومًا؛ فقال ﷺ: إن كنت بريئة فسيظهر الله ذلك، وإن كنت أذنبت فاستغفري. ولم يحضرها اسم يعقوب عليه السلام فقالت: «أقول ما قاله أبو يوسف: فصبر جميل» (يوسف 12:18) (صحيح البخاري 4141).",
           ""],
          ["📖 براءة القرآن",
           "جاء الوحي، وسال العرق في البرد، فتبسم ﷺ وقال: «عائشة! قد أنزل الله براءتك». فقالت أمها: اشكري رسول الله ﷺ؛ فقالت: «والله لا أشكر إلا الله». سورة النور 24:11–20 (عشر آيات). وكان أبو بكر رضي الله عنه قد قطع نفقة مسطح، فنزلت 24:22 فأعادها (صحيح البخاري 4141).",
           ""],
          ["⚖️ الحد",
           "حد القذف ثمانون جلدة (النور 24:4). وفي سنن أبي داود 4474 والترمذي 3181 وابن ماجه 2567 أن الحد أُقيم على مسطح وحسان وحمنة رضي الله عنهم. تنبيه: هذا ليس في الصحيحين؛ وقال الألباني: حسن. وأسباب عدم إقامة الحد على عبد الله بن أُبيّ ذكرها العلماء (عقوبة الآخرة، النور 24:11؛ ودرء الفتنة، وغيرها).",
           ""],
          ["🎯 العبرة",
           "البهتان كبيرة؛ فاحفظ لسانك؛ ولا تتكلم بلا بينة.",
           ""]
        ],
        [
          ["على من كان البهتان؟", ["خديجة رضي الله عنها", "عائشة رضي الله عنها", "حفصة رضي الله عنها"]],
          ["في أي سورة نزلت البراءة؟", ["النور", "الفتح", "الأحزاب"]],
          ["كم جلدة في حد القذف؟", ["40", "80", "100"]]
        ],
        [
          ["627", "الرجوع من غزوة بني المصطلق"],
          ["627", "انتشار البهتان"],
          ["627", "نزول سورة النور"]
        ]
      ],
      fr: [
        "L'affaire du calomnieux mensonge (al-Ifk) — l'épreuve de la chasteté",
        "Médine",
        "Au retour de l'expédition des Banou al-Moustaliq — chaabane de l'an 5 (Ibn Ishâq) / an 6 (Ar-Rahîq) / an 4 (Mûsâ ibn 'Oqba), vers 627",
        "Comprendre la calomnie contre 'Â'icha (qu'Allah l'agrée), son innocence dans le Coran et l'épisode de la patience.",
        "« Fasabroun jamîl » — Allah a révélé pour toujours l'innocence de 'Â'icha (qu'Allah l'agrée). Ô Allah ! Protège nos langues de la calomnie. Âmîn.",
        [
          "La calomnie contre 'Â'icha (qu'Allah l'agrée)",
          "La machination des hypocrites",
          "Sourate an-Noûr",
          "L'annonce de l'innocence",
          "La peine de la calomnie",
          "La patience de 'Â'icha (qu'Allah l'agrée)"
        ],
        [
          ["⚠️ Ordre et date",
           "Cet épisode eut lieu au retour de l'expédition des Banou al-Moustaliq. Selon le calcul d'Ibn Ishâq, il précède la bataille du Fossé (jour 22) ; attention donc à l'écart de date dans l'ordre du cours.",
           ""],
          ["🐪 L'épisode",
           "Au retour, 'Â'icha (qu'Allah l'agrée) s'éloigna pour ses besoins et son collier se perdit ; ceux qui portaient le palanquin crurent qu'elle y était (elle était légère). Safwân ibn al-Mou'attal (qu'Allah l'agrée) la trouva, dit : « Inna lillâhi wa innâ ilayhi râji'oûn », fit agenouiller la chamelle et la ramena en tenant la bride ; il ne dit rien de plus (Sahih al-Bukhari : 4141).",
           ""],
          ["🗣️ La calomnie",
           "Le meneur était 'Abdoullah ibn Oubayy ibn Saloûl ; quelques musulmans y entrèrent (Hassân, Mistah et Hamna, qu'Allah les agrée) (Sahih al-Bukhari : 4141 ; Sunan Abi Dawud : 4474). 'Â'icha (qu'Allah l'agrée) tomba malade et resta près d'un mois sans savoir ; elle ne retrouva pas la douceur habituelle du Prophète ﷺ. Elle l'apprit par Oumm Mistah. Le Prophète ﷺ consulta 'Alî, Ousâma et Barîra (qu'Allah les agrée) ; Zaynab bint Jahch (qu'Allah l'agrée) ne dit que du bien (Sahih al-Bukhari : 4141). Remarque : le récit mentionne Sa'd ibn Mou'âdh (qu'Allah l'agrée), alors qu'il mourut après l'expédition des Banou Qourayza ; certains savants y voient une erreur du transmetteur ou un problème de date (d'où la divergence de date).",
           ""],
          ["💔 La patience de 'Â'icha (qu'Allah l'agrée)",
           "Elle pleura deux nuits et un jour ; le Prophète ﷺ dit : si tu es innocente, Allah le montrera ; si tu as péché, repens-toi. Le nom de Ya'qoûb (paix sur lui) ne lui vint pas à l'esprit, alors elle dit : « Je dis ce qu'a dit le père de Yoûsouf : fasabroun jamîl » (Yoûsouf 12:18) (Sahih al-Bukhari : 4141).",
           ""],
          ["📖 L'innocence révélée",
           "La révélation vint ; il transpira même par temps froid, puis il ﷺ dit en souriant : « 'Â'icha ! Allah a révélé ton innocence. » Sa mère lui dit : remercie le Messager d'Allah ; elle répondit : « Par Allah, je ne remercierai qu'Allah. » Sourate an-Noûr 24:11-20 (dix versets). Abou Bakr (qu'Allah l'agrée) avait cessé d'aider Mistah ; alors descendit 24:22 et il reprit (Sahih al-Bukhari : 4141).",
           ""],
          ["⚖️ La peine",
           "La peine de la calomnie est de quatre-vingts coups (an-Noûr 24:4). Selon Sunan Abi Dawud 4474, Tirmidhi 3181 et Ibn Mâjah 2567, la peine fut appliquée à Mistah, Hassân et Hamna (qu'Allah les agrée). Remarque : cela n'est pas dans les deux Sahih ; al-Albani l'a jugé hasan. Les raisons pour lesquelles la peine ne fut pas appliquée à 'Abdoullah ibn Oubayy sont diverses selon les savants (châtiment de l'au-delà, an-Noûr 24:11 ; éviter la discorde, etc.).",
           ""],
          ["🎯 La leçon",
           "La calomnie est un grand péché ; maîtrise ta langue ; ne parle pas sans preuve.",
           ""]
        ],
        [
          ["Contre qui fut la calomnie ?", ["Khadîja (qu'Allah l'agrée)", "'Â'icha (qu'Allah l'agrée)", "Hafsa (qu'Allah l'agrée)"]],
          ["Dans quelle sourate vint l'innocence ?", ["An-Noûr", "Al-Fath", "Al-Ahzâb"]],
          ["Combien de coups pour la calomnie ?", ["40", "80", "100"]]
        ],
        [
          ["627", "Le retour de l'expédition des Banou al-Moustaliq"],
          ["627", "La diffusion de la calomnie"],
          ["627", "La révélation de sourate an-Noûr"]
        ]
      ],
      es: [
        "El episodio de la calumnia (al-Ifk): la prueba de la castidad",
        "Medina",
        "A la vuelta de la expedición de los Banu al-Mustaliq: Shaabán del año 5 (Ibn Ishaq), año 6 (Ar-Rahiq), año 4 (Musa ibn Uqba), hacia 627",
        "Comprender la calumnia contra Aisha (que Alá esté complacido con ella), su inocencia en el Corán y el episodio de la paciencia.",
        "«Fasabrun yamil»: Alá reveló para siempre la inocencia de Aisha (que Alá esté complacido con ella). ¡Oh Alá! Protege nuestras lenguas de la calumnia. Amín.",
        [
          "La calumnia contra Aisha (que Alá esté complacido con ella)",
          "La conspiración de los hipócritas",
          "La sura an-Nur",
          "El anuncio de la inocencia",
          "La pena de la calumnia",
          "La paciencia de Aisha (que Alá esté complacido con ella)"
        ],
        [
          ["⚠️ Orden y fecha",
           "Este episodio ocurrió a la vuelta de la expedición de los Banu al-Mustaliq. Según el cálculo de Ibn Ishaq, es anterior a la batalla del Foso (día 22); atención, pues, a la diferencia de fecha en el orden del curso.",
           ""],
          ["🐪 El episodio",
           "A la vuelta, Aisha (que Alá esté complacido con ella) se alejó para sus necesidades y se perdió su collar; quienes llevaban el palanquín creyeron que ella estaba dentro (era ligera). Safwan ibn al-Muattal (que Alá esté complacido con él) la encontró, dijo: «Inna lil-lahi wa inna ilayhi rayi'un», hizo arrodillar a la camella y la trajo tomando las riendas; no dijo nada más (Sahih al-Bujari: 4141).",
           ""],
          ["🗣️ La calumnia",
           "El cabecilla era Abdalah ibn Ubayy ibn Salul; algunos musulmanes entraron en ello (Hassan, Mistah y Hamna, que Alá esté complacido con ellos) (Sahih al-Bujari: 4141; Sunan Abi Dawud: 4474). Aisha (que Alá esté complacido con ella) enfermó y estuvo cerca de un mes sin saberlo; no encontró la dulzura habitual del Profeta ﷺ. Lo supo por Umm Mistah. El Profeta ﷺ consultó a Ali, Usama y Barira (que Alá esté complacido con ellos); Zaynab bint Yahsh (que Alá esté complacido con ella) solo dijo bien (Sahih al-Bujari: 4141). Nota: el relato menciona a Sad ibn Muaz (que Alá esté complacido con él), que murió después de la expedición de los Banu Qurayza; algunos sabios lo ven como un error del transmisor o un problema de fecha (de ahí la discrepancia).",
           ""],
          ["💔 La paciencia de Aisha (que Alá esté complacido con ella)",
           "Lloró dos noches y un día; el Profeta ﷺ dijo: si eres inocente, Alá lo mostrará; si has pecado, arrepiéntete. No le vino el nombre de Yaqub (la paz sea con él), así que dijo: «Digo lo que dijo el padre de Yusuf: fasabrun yamil» (Yusuf 12:18) (Sahih al-Bujari: 4141).",
           ""],
          ["📖 La inocencia revelada",
           "Vino la revelación; sudó incluso con frío, y luego ﷺ dijo sonriendo: «¡Aisha! Alá ha revelado tu inocencia.» Su madre le dijo: agradece al Mensajero de Alá; ella respondió: «Por Alá, no agradeceré sino a Alá.» Sura an-Nur 24:11-20 (diez aleyas). Abu Bakr (que Alá esté complacido con él) había dejado de ayudar a Mistah; entonces descendió 24:22 y lo reanudó (Sahih al-Bujari: 4141).",
           ""],
          ["⚖️ La pena",
           "La pena de la calumnia es de ochenta azotes (an-Nur 24:4). Según Sunan Abi Dawud 4474, Tirmidhi 3181 e Ibn Maya 2567, la pena se aplicó a Mistah, Hassan y Hamna (que Alá esté complacido con ellos). Nota: esto no está en los dos Sahih; al-Albani lo consideró hasan. Las razones por las que no se aplicó a Abdalah ibn Ubayy son diversas según los sabios (castigo del más allá, an-Nur 24:11; evitar la discordia, etc.).",
           ""],
          ["🎯 La lección",
           "La calumnia es un pecado grave; domina tu lengua; no hables sin prueba.",
           ""]
        ],
        [
          ["¿Contra quién fue la calumnia?", ["Jadiya (que Alá esté complacido con ella)", "Aisha (que Alá esté complacido con ella)", "Hafsa (que Alá esté complacido con ella)"]],
          ["¿En qué sura vino la inocencia?", ["An-Nur", "Al-Fath", "Al-Ahzab"]],
          ["¿Cuántos azotes por la calumnia?", ["40", "80", "100"]]
        ],
        [
          ["627", "La vuelta de la expedición de los Banu al-Mustaliq"],
          ["627", "La difusión de la calumnia"],
          ["627", "La révélation de la sura an-Nur"]
        ]
      ]
    },

    /* ═══════════════ DAY 26 — Fath-e-Makkah ═══════════════ */
    26: {
      mr: [
        "मक्केचा विजय — महान विजय, सर्वसाधारण माफी",
        "मक्का",
        "रमजान हिजरी ८ (जानेवारी इ.स. ६३०) — प्रयाण १० रमजान; मक्केत १९ दिवस मुक्काम",
        "मक्केच्या विजयाची घटना, रक्त न सांडता विजय, सर्वसाधारण माफी आणि काबाची शुद्धी समजून घेणे.",
        "ज्यांनी छळ केला त्यांनाच माफ केले. हे अल्लाह! आम्हालाही माफ करण्याची व नम्रतेची तौफीक दे. आमीन.",
        [
          "हिजरी ८, रमजान",
          "सुमारे १०,००० सैन्य",
          "जवळपास रक्तहीन विजय",
          "३६० मूर्ती पाडल्या",
          "सर्वसाधारण माफी",
          "मक्केत १९ दिवस मुक्काम"
        ],
        [
          ["📜 करारभंग",
           "बनू बक्र (कुरैशचे मित्र) यांनी खुझाआ (नबी ﷺ यांचे मित्र) यांच्यावर हल्ला केला आणि कुरैशने त्यांना मदत केली; अबू सुफियान करार नूतनीकरणासाठी आला पण अयशस्वी झाला (सीरत, इब्न इशाक).",
           ""],
          ["🤫 गुप्त तयारी",
           "सुमारे १०,००० सैन्य (सहीह बुखारी ४२७६). हातिब बिन अबी बल्तआ (र.अ.) यांनी कुरैशला पत्र लिहिले; वहीद्वारे बातमी मिळाली आणि पत्र पकडले गेले; कारण: नातेवाइकांचे रक्षण. उमर (र.अ.) यांनी ठार मारण्याची परवानगी मागितली; नबी ﷺ म्हणाले: तो बद्री आहे, कदाचित अल्लाहने बद्री लोकांकडे पाहून सांगितले असेल की जे पाहिजे ते करा, मी तुम्हाला माफ केले (सहीह बुखारी ३००७, ४२७४; अल-मुम्तहिना ६०:१).",
           ""],
          ["🚶 प्रयाण",
           "रमजानमध्ये रोज्याच्या अवस्थेत निघाले आणि कदीद येथे इफ्तार केला (सहीह बुखारी ४२७५–४२७६). मर्रुज-झहरानमध्ये आग पेटवली; अबू सुफियान, हकीम बिन हिझाम व बदील बिन वरका आले; अब्बास (र.अ.) त्यांना घेऊन आले; अबू सुफियान मुस्लिम झाले (सहीह बुखारी ४२८०, उर्वा; तपशील सीरत).",
           ""],
          ["🏳️ मक्केत प्रवेश",
           "स्वारीवर सूरह अल-फतहची तिलावत (सहीह बुखारी ४२८१). डोके झुकवून प्रवेश केल्याची गोष्ट सीरत (इब्न इशाक) मधून आहे. घोषणा: जो अबू सुफियानच्या घरी जाईल, किंवा शस्त्रे टाकून देईल, किंवा दरवाजा बंद करेल तो सुरक्षित आहे (सहीह मुस्लिम १७८०). खालिद (र.अ.) यांच्या तुकडीची खंदमामध्ये चकमक झाली: सुमारे २ मुस्लिम व १२–१३ मुश्रिक ठार झाले (अर-रहीकुल-मख्तूम). मक्का जबरदस्तीने जिंकला गेला, नंतर अमान दिली (झादुल-मआद); म्हणून «पूर्णपणे रक्तहीन» ऐवजी «जवळपास रक्तहीन» म्हणणे योग्य.",
           ""],
          ["🕋 काबाची शुद्धी",
           "३६० मूर्ती; नबी ﷺ लाकडाने त्या पाडत जात आणि «जाअल-हक्कु व झहकल-बातिल» वाचत (अल-इसरा १७:८१; सबा ३४:४९) (सहीह बुखारी २४७८, ४२८७). चित्रे पुसल्यावर काबाच्या आत नमाज़ पढली (सहीह बुखारी ३३५१, ३९७). बिलाल (र.अ.) यांनी काबाच्या छतावर अजान दिल्याची गोष्ट सीरत (इब्न इशाक) ची रिवायत आहे, सहीह सनदेने सिद्ध नाही.",
           ""],
          ["🤲 सर्वसाधारण माफी",
           "सर्वसाधारण अमानची घोषणा (सहीह मुस्लिम १७८०); खुतबा: मक्केला अल्लाहने हरम केले, लोकांनी नाही (सहीह बुखारी १०४, १८३२). «इजहबू फइन्नकुमुत-तुलकाआ» आणि यूसुफ १२:९२ चा उल्लेख सीरत/बैहकीची रिवायत आहे, सनद जईफ. अपवाद: इब्न खतल काबाच्या पडद्यांना चिकटून होता, तरीही ठार झाला (सहीह बुखारी १८४६, ३०४४). सफवान व इक्रमा (र.अ.) यांची माफी सीरत/मुवत्ता (मुर्सल) मधून आहे.",
           ""],
          ["🎯 बोध",
           "शत्रूंना माफ करणे हा नबी ﷺ यांचा मार्ग आहे; विजयावर नम्रता.",
           ""]
        ],
        [
          ["मक्केचा विजय कोणत्या वर्षी झाला?", ["हिजरी ६", "हिजरी ८", "हिजरी १०"]],
          ["सैन्याची संख्या?", ["१४००", "सुमारे १०,०००", "३०,०००"]],
          ["काबात किती मूर्ती होत्या?", ["१००", "३६०", "५००"]]
        ],
        [
          ["इ.स. ६३०", "करारभंग"],
          ["इ.स. ६३०", "गुप्त तयारी"],
          ["इ.स. ६३०", "मक्केचा विजय"]
        ]
      ],
      ar: [
        "فتح مكة — الفتح الأعظم والعفو العام",
        "مكة",
        "رمضان السنة الثامنة (يناير 630) — الخروج 10 رمضان؛ والإقامة بمكة 19 يومًا",
        "فهم فتح مكة، والفتح بأقل دم، والعفو العام، وتطهير الكعبة.",
        "عفا عمّن آذوه. اللهم ارزقنا العفو والتواضع. آمين.",
        [
          "السنة الثامنة، رمضان",
          "نحو عشرة آلاف",
          "فتح شبه بلا دم",
          "تحطيم 360 صنمًا",
          "العفو العام",
          "الإقامة بمكة 19 يومًا"
        ],
        [
          ["📜 نقض العهد",
           "اعتدت بنو بكر (حلفاء قريش) على خزاعة (حلفاء النبي ﷺ) وأعانتها قريش؛ وجاء أبو سفيان لتجديد العهد ففشل (سيرة، ابن إسحاق).",
           ""],
          ["🤫 الاستعداد السري",
           "جيش نحو عشرة آلاف (صحيح البخاري 4276). وكتب حاطب بن أبي بلتعة رضي الله عنه إلى قريش؛ فأخبر الوحي وأُخذ الكتاب؛ وعذره: حماية أقاربه. فاستأذن عمر رضي الله عنه في قتله؛ فقال ﷺ: إنه من أهل بدر، ولعل الله اطّلع على أهل بدر فقال: اعملوا ما شئتم فقد غفرت لكم (صحيح البخاري 3007، 4274؛ الممتحنة 60:1).",
           ""],
          ["🚶 الخروج",
           "خرجوا في رمضان صائمين، ثم أفطروا بالكديد (صحيح البخاري 4275–4276). وأُوقدت النار بمرّ الظهران؛ وجاء أبو سفيان وحكيم بن حزام وبديل بن ورقاء؛ جاء بهم العباس رضي الله عنه؛ وأسلم أبو سفيان (صحيح البخاري 4280، عروة؛ والتفصيل في السيرة).",
           ""],
          ["🏳️ الدخول إلى مكة",
           "يقرأ سورة الفتح على راحلته (صحيح البخاري 4281). وأما الدخول مطأطئ الرأس فمن السيرة (ابن إسحاق). والإعلان: من دخل دار أبي سفيان، أو ألقى السلاح، أو أغلق بابه فهو آمن (صحيح مسلم 1780). وكانت في مفرزة خالد رضي الله عنه ملاحقة بخندمة: قُتل نحو مسلمين و12 أو 13 مشركًا (الرحيق المختوم). وفُتحت مكة بالقوة ثم أُعطي الأمان (زاد المعاد)؛ فالأولى أن يقال: «شبه بلا دم» لا «بلا دم إطلاقًا».",
           ""],
          ["🕋 تطهير الكعبة",
           "360 صنمًا؛ وكان ﷺ يطعنها بعود ويقرأ «جاء الحق وزَهَق الباطل» (الإسراء 17:81؛ سبأ 34:49) (صحيح البخاري 2478، 4287). وبعد محو الصور صلى داخل الكعبة (صحيح البخاري 3351، 397). وأذان بلال رضي الله عنه على ظهر الكعبة من روايات السيرة (ابن إسحاق) لا يثبت بسند صحيح.",
           ""],
          ["🤲 العفو العام",
           "إعلان الأمان العام (صحيح مسلم 1780)؛ والخطبة: إن مكة حرّمها الله لا الناس (صحيح البخاري 104، 1832). وقول «اذهبوا فأنتم الطلقاء» وتطبيق يوسف 12:92 من روايات السيرة والبيهقي بإسناد ضعيف. والاستثناء: ابن خطل كان متعلقًا بأستار الكعبة فقُتل (صحيح البخاري 1846، 3044). وعفو صفوان وعكرمة رضي الله عنهما من السيرة والموطأ (مرسل).",
           ""],
          ["🎯 العبرة",
           "العفو عن الأعداء طريقة النبي ﷺ؛ والتواضع عند الفتح.",
           ""]
        ],
        [
          ["في أي سنة كان فتح مكة؟", ["السادسة", "الثامنة", "العاشرة"]],
          ["كم كان عدد الجيش؟", ["1400", "نحو عشرة آلاف", "30,000"]],
          ["كم صنمًا كان في الكعبة؟", ["100", "360", "500"]]
        ],
        [
          ["630", "نقض العهد"],
          ["630", "الاستعداد السري"],
          ["630", "فتح مكة"]
        ]
      ],
      fr: [
        "La conquête de La Mecque — une immense victoire, un pardon général",
        "La Mecque",
        "Ramadan de l'an 8 (janvier 630) — départ le 10 Ramadan ; séjour de 19 jours à La Mecque",
        "Comprendre l'épisode de la conquête, la victoire presque sans effusion de sang, le pardon général et la purification de la Kaaba.",
        "Il pardonna à ceux qui l'avaient persécuté. Ô Allah ! Accorde-nous le pardon et l'humilité. Âmîn.",
        [
          "An 8, Ramadan",
          "Environ 10 000 hommes",
          "Une victoire presque sans sang",
          "360 idoles brisées",
          "Le pardon général",
          "Séjour de 19 jours à La Mecque"
        ],
        [
          ["📜 La rupture du pacte",
           "Les Banou Bakr (alliés des Quraysh) attaquèrent Khouzâ'a (alliés du Prophète ﷺ) et les Quraysh les aidèrent ; Abou Soufyân vint renouveler le pacte mais échoua (Sîra, Ibn Ishâq).",
           ""],
          ["🤫 Les préparatifs secrets",
           "Une armée d'environ 10 000 hommes (Sahih al-Bukhari : 4276). Hâtib ibn Abî Balta'a (qu'Allah l'agrée) écrivit aux Quraysh ; la révélation informa et la lettre fut saisie ; son excuse : protéger ses proches. 'Umar (qu'Allah l'agrée) demanda la permission de le tuer ; le Prophète ﷺ dit : il est de ceux de Badr ; peut-être Allah a-t-Il regardé les gens de Badr et dit : faites ce que vous voulez, Je vous ai pardonné (Sahih al-Bukhari : 3007, 4274 ; al-Moumtaḥina 60:1).",
           ""],
          ["🚶 Le départ",
           "Ils sortirent en Ramadan en jeûnant, puis rompirent le jeûne à Kadîd (Sahih al-Bukhari : 4275-4276). Des feux furent allumés à Marr az-Zahrân ; Abou Soufyân, Hakîm ibn Hizâm et Boudhayl ibn Warqâ' vinrent ; al-'Abbâs (qu'Allah l'agrée) les amena ; Abou Soufyân embrassa l'islam (Sahih al-Bukhari : 4280, d'après 'Ourwa ; détails dans la Sîra).",
           ""],
          ["🏳️ L'entrée à La Mecque",
           "Il récitait sourate al-Fath sur sa monture (Sahih al-Bukhari : 4281). Entrer la tête baissée vient de la Sîra (Ibn Ishâq). L'annonce : quiconque entre dans la maison d'Abou Soufyân, dépose les armes ou ferme sa porte est en sécurité (Sahih Muslim : 1780). Il y eut un accrochage à Khandoma avec le détachement de Khâlid (qu'Allah l'agrée) : environ deux musulmans et 12 ou 13 polythéistes tués (Ar-Rahîq al-Makhtûm). La Mecque fut prise par la force, puis l'amnistie fut accordée (Zâd al-Ma'âd) ; mieux vaut donc dire « presque sans sang » que « sans aucune goutte de sang ».",
           ""],
          ["🕋 La purification de la Kaaba",
           "360 idoles ; il ﷺ les faisait tomber d'un bâton en récitant « جاء الحق وزَهَق الباطل » (al-Isrâ' 17:81 ; Saba' 34:49) (Sahih al-Bukhari : 2478, 4287). Après l'effacement des images, il pria à l'intérieur de la Kaaba (Sahih al-Bukhari : 3351, 397). L'adhan de Bilâl (qu'Allah l'agrée) sur le toit de la Kaaba vient des récits de Sîra (Ibn Ishâq) et n'est pas établi par une chaîne authentique.",
           ""],
          ["🤲 Le pardon général",
           "L'annonce de la sécurité générale (Sahih Muslim : 1780) ; le sermon : La Mecque, c'est Allah qui l'a rendue sacrée, non les hommes (Sahih al-Bukhari : 104, 1832). « Allez, vous êtes libres » et l'application de Yoûsouf 12:92 viennent de la Sîra et d'al-Bayhaqî avec une chaîne faible. Exception : Ibn Khatal s'était accroché aux voiles de la Kaaba et fut tué quand même (Sahih al-Bukhari : 1846, 3044). Le pardon de Safwân et de 'Ikrima (qu'Allah les agrée) vient de la Sîra et du Muwatta' (moursal).",
           ""],
          ["🎯 La leçon",
           "Pardonner à ses ennemis est la voie du Prophète ﷺ ; l'humilité dans la victoire.",
           ""]
        ],
        [
          ["En quelle année eut lieu la conquête ?", ["An 6", "An 8", "An 10"]],
          ["Combien d'hommes dans l'armée ?", ["1400", "Environ 10 000", "30 000"]],
          ["Combien d'idoles dans la Kaaba ?", ["100", "360", "500"]]
        ],
        [
          ["630", "La rupture du pacte"],
          ["630", "Les préparatifs secrets"],
          ["630", "La conquête de La Mecque"]
        ]
      ],
      es: [
        "La conquista de La Meca: una gran victoria y un perdón general",
        "La Meca",
        "Ramadán del año 8 (enero de 630); salida el 10 de Ramadán; estancia de 19 días en La Meca",
        "Comprender el episodio de la conquista, la victoria casi sin derramamiento de sangre, el perdón general y la purificación de la Kaaba.",
        "Perdonó a quienes lo habían perseguido. ¡Oh Alá! Concédenos el perdón y la humildad. Amín.",
        [
          "Año 8, Ramadán",
          "Unos 10 000 hombres",
          "Una victoria casi sin sangre",
          "360 ídolos destruidos",
          "El perdón general",
          "Estancia de 19 días en La Meca"
        ],
        [
          ["📜 La ruptura del pacto",
           "Los Banu Bakr (aliados de los Quraysh) atacaron a Juzaa (aliados del Profeta ﷺ) y los Quraysh les ayudaron; Abu Sufian vino a renovar el pacto pero fracasó (Sira, Ibn Ishaq).",
           ""],
          ["🤫 Los preparativos secretos",
           "Un ejército de unos 10 000 (Sahih al-Bujari: 4276). Hatib ibn Abi Baltaa (que Alá esté complacido con él) escribió a los Quraysh; la revelación informó y la carta fue interceptada; su excusa: proteger a sus parientes. Umar (que Alá esté complacido con él) pidió permiso para matarlo; el Profeta ﷺ dijo: es de los de Badr; quizá Alá miró a la gente de Badr y dijo: haced lo que queráis, os he perdonado (Sahih al-Bujari: 3007, 4274; al-Mumtahina 60:1).",
           ""],
          ["🚶 La salida",
           "Salieron en Ramadán ayunando y rompieron el ayuno en Kadid (Sahih al-Bujari: 4275-4276). Se encendieron fuegos en Marr az-Zahran; vinieron Abu Sufian, Hakim ibn Hizam y Budayl ibn Warqa; al-Abbas (que Alá esté complacido con él) los trajo; Abu Sufian abrazó el islam (Sahih al-Bujari: 4280, de Urwa; detalles en la Sira).",
           ""],
          ["🏳️ La entrada en La Meca",
           "Recitaba la sura al-Fath sobre su montura (Sahih al-Bujari: 4281). Entrar con la cabeza baja viene de la Sira (Ibn Ishaq). El anuncio: quien entre en la casa de Abu Sufian, deposite las armas o cierre su puerta está a salvo (Sahih Muslim: 1780). Hubo un choque en Jandama con el destacamento de Jalid (que Alá esté complacido con él): unos dos musulmanes y 12 o 13 idólatras muertos (Ar-Rahiq al-Majtum). La Meca fue tomada por la fuerza y luego se dio la amnistía (Zad al-Maad); por eso es mejor decir «casi sin sangre» que «sin ninguna gota de sangre».",
           ""],
          ["🕋 La purificación de la Kaaba",
           "360 ídolos; él ﷺ los derribaba con un palo recitando «جاء الحق وزَهَق الباطل» (al-Isra 17:81; Saba 34:49) (Sahih al-Bujari: 2478, 4287). Tras borrar las imágenes, rezó dentro de la Kaaba (Sahih al-Bujari: 3351, 397). El adhan de Bilal (que Alá esté complacido con él) sobre el techo de la Kaaba viene de relatos de Sira (Ibn Ishaq) y no está probado con cadena auténtica.",
           ""],
          ["🤲 El perdón general",
           "El anuncio de la seguridad general (Sahih Muslim: 1780); el sermón: La Meca la hizo sagrada Alá, no los hombres (Sahih al-Bujari: 104, 1832). «Id, sois libres» y la aplicación de Yusuf 12:92 vienen de la Sira y de al-Bayhaqi con cadena débil. Excepción: Ibn Jatal estaba colgado de los velos de la Kaaba y fue matado igualmente (Sahih al-Bujari: 1846, 3044). El perdón de Safwan y de Ikrima (que Alá esté complacido con ellos) viene de la Sira y del Muwatta (mursal).",
           ""],
          ["🎯 La lección",
           "Perdonar a los enemigos es el camino del Profeta ﷺ; humildad en la victoria.",
           ""]
        ],
        [
          ["¿En qué año fue la conquista?", ["Año 6", "Año 8", "Año 10"]],
          ["¿Cuántos hombres tenía el ejército?", ["1400", "Unos 10 000", "30 000"]],
          ["¿Cuántos ídolos había en la Kaaba?", ["100", "360", "500"]]
        ],
        [
          ["630", "La ruptura del pacto"],
          ["630", "Los preparativos secretos"],
          ["630", "La conquista de La Meca"]
        ]
      ]
    },

    /* ═══════════════ DAY 27 — Hunain o Taif ═══════════════ */
    27: {
      mr: [
        "हुनैन व तायफचे युद्ध — विजयानंतर",
        "हुनैन, तायफ",
        "शव्वाल हिजरी ८ (जानेवारी–फेब्रुवारी इ.स. ६३०)",
        "हुनैनची घटना, सुरुवातीचा पराभव, नंतर विजय आणि तायफचा वेढा समजून घेणे.",
        "अब्बास (र.अ.) यांनी हाक दिली, सहाबा परत आले आणि अल्लाहने विजय दिला. हे अल्लाह! आम्हालाही ठामपणा व निष्ठा दे. आमीन.",
        [
          "हिजरी ८",
          "हवाझिन सुमारे २०,०००",
          "सुरुवातीचा पराभव",
          "नबी ﷺ ठाम राहिले",
          "सुमारे ६००० कैदी",
          "अन्सारांचा संयम"
        ],
        [
          ["💪 शत्रूचे सैन्य",
           "हवाझिन व सकीफ, सरदार मलिक बिन औफ नसरी; स्त्रिया, मुले व माल सोबत आणले (अर-रहीकुल-मख्तूम; सीरत). संख्या सुमारे २०,००० (अर-रहीकुल-मख्तूम), यात मतभेद आहे. मुस्लिम १२,००० होते (१०,००० मदिन्याचे + २,००० नवे मक्केचे) (अर-रहीकुल-मख्तूम).",
           ""],
          ["🏹 सुरुवातीची माघार",
           "«संख्येवर गर्व» या बाबतीत कुरआन ९:२५–२६ उतरले. सूचना: हे वाक्य कोणत्याही विशिष्ट सहाबीला (अबू बक्र (र.अ.) इ.) जोडणे ही सीरतची जईफ रिवायत आहे. सकाळी दरीत हवाझिनच्या धनुर्धाऱ्यांचा अचानक हल्ला झाला; अनेक लोक मागे हटले (सहीह बुखारी २८६४, ४३१७). नबी ﷺ पांढऱ्या खेचरावर ठाम राहिले: «मी नबी आहे, खोटे नाही; मी अब्दुलमुत्तलिबचा मुलगा आहे» (सहीह बुखारी २८६४; सहीह मुस्लिम १७७६). अबू सुफियान बिन हारिस (र.अ.) यांनी लगाम धरली (सहीह मुस्लिम १७७६).",
           ""],
          ["🦁 अब्बास (र.अ.) यांची हाक",
           "«हे अन्सारांनो! हे झाडवाल्यांनो (बैअते-रिझवान)!» ते «लब्बैक» म्हणत परत आले (सहीह मुस्लिम १७७५). नबी ﷺ यांनी माती फेकली: «चेहरे बिघडोत» (सहीह मुस्लिम १७७७). शत्रू पळाला; सुमारे ६,००० कैदी (सहीह बुखारी ४३१८–४३१९), सुमारे २४,००० उंट आणि ४०,००० हून अधिक शेळ्या (अर-रहीकुल-मख्तूम; सीरत).",
           ""],
          ["🕋 तायफचा वेढा",
           "सकीफ किल्ल्यात बंदिस्त झाले; वेढा सुमारे २० दिवसांहून थोडा जास्त (अर-रहीकुल-मख्तूम). मतभेद: १० ते ४० दिवसांची मते आहेत (फतहुल-बारी). मंजनीकाचा वापर सीरतची रिवायत आहे. नबी ﷺ यांनी परतीची घोषणा केली तेव्हा सहाबांना ते आवडले नाही; पुढच्या दिवशी लढले, जखमी झाले, नंतर परतीचे सांगितले तेव्हा ते हसले (सहीह बुखारी ४३२५). दुआ: «हे अल्लाह, सकीफला हिदायत दे आणि त्यांना घेऊन ये» (तिर्मिझी ३९४२, अल्बानी: सहीह). सकीफचे शिष्टमंडळ हिजरी ९ मध्ये मुस्लिम झाले.",
           ""],
          ["🎁 वाटणी",
           "जअरानामध्ये हवाझिनच्या शिष्टमंडळाची वाट पाहिली; नबी ﷺ यांनी कैदी किंवा माल यात पर्याय दिला, त्यांनी कैदी निवडले आणि सर्व परत केले गेले (सहीह बुखारी ४३१८–४३१९). नव्या मक्केकरांना (अबू सुफियान, सफवान, अक्रअ, उयैना) प्रत्येकी शंभर उंट दिले (सहीह मुस्लिम १०६०). अन्सारांना तक्रार झाली; आप ﷺ म्हणाले: «तुम्ही राजी नाही का की लोक शेळ्या-उंट घेऊन जातील आणि तुम्ही नबी ﷺ यांना आपल्यासोबत घेऊन जाल?» ते इतके रडले की दाढ्या ओल्या झाल्या (सहीह बुखारी ४३३३).",
           ""],
          ["🎯 बोध",
           "संख्येवर गर्व नाही, अल्लाहवर भरवसा; दानशूरता व संयम.",
           ""]
        ],
        [
          ["शत्रूची टोळी?", ["कुरैश", "हवाझिन", "यहुदी"]],
          ["कैद्यांची संख्या?", ["१०००", "सुमारे ६०००", "२०,०००"]],
          ["तायफचा वेढा?", ["५ दिवस", "सुमारे २० दिवस (मते १०–४०)", "३ महिने"]]
        ],
        [
          ["इ.स. ६३०", "हवाझिनची तयारी"],
          ["इ.स. ६३०", "हुनैन"],
          ["इ.स. ६३०", "तायफचा वेढा"],
          ["इ.स. ६३०", "जअरानामध्ये वाटणी"]
        ]
      ],
      ar: [
        "غزوتا حنين والطائف — بعد الفتح",
        "حنين والطائف",
        "شوال السنة الثامنة (يناير–فبراير 630)",
        "فهم حنين، والانكسار الأول، ثم النصر، وحصار الطائف.",
        "نادى العباس رضي الله عنه فرجع الصحابة فمنح الله النصر. اللهم ارزقنا الثبات والوفاء. آمين.",
        [
          "السنة الثامنة",
          "هوازن نحو 20,000",
          "انهزام أولي",
          "ثبات النبي ﷺ",
          "نحو 6000 أسير",
          "صبر الأنصار"
        ],
        [
          ["💪 جيش العدو",
           "هوازن وثقيف، وعلى رأسهم مالك بن عوف النصري؛ جاءوا بالنساء والأطفال والأموال (الرحيق المختوم؛ سيرة). والعدد نحو عشرين ألفًا (الرحيق المختوم)، وفيه خلاف. وكان المسلمون اثني عشر ألفًا (عشرة آلاف من المدينة وألفان من أهل مكة الجدد) (الرحيق المختوم).",
           ""],
          ["🏹 انسحاب أولي",
           "نزل القرآن 9:25–26 في العجب بالكثرة. تنبيه: نسبة هذه الكلمة إلى صحابي بعينه (كأبي بكر رضي الله عنه) رواية سيرة ضعيفة. ففي الصباح هجم رماة هوازن في الوادي بغتة، فتراجع كثير من الناس (صحيح البخاري 2864، 4317). وثبت النبي ﷺ على بغلة بيضاء: «أنا النبي لا كذب، أنا ابن عبد المطلب» (صحيح البخاري 2864؛ صحيح مسلم 1776). وأخذ أبو سفيان بن الحارث رضي الله عنه باللجام (صحيح مسلم 1776).",
           ""],
          ["🦁 نداء العباس رضي الله عنه",
           "«يا معشر الأنصار! يا أصحاب الشجرة (بيعة الرضوان)!» فرجعوا يقولون: «لبيك» (صحيح مسلم 1775). وحثا النبي ﷺ التراب: «شاهت الوجوه» (صحيح مسلم 1777). وانهزم العدو؛ ونحو ستة آلاف أسير (صحيح البخاري 4318–4319)، ونحو أربعة وعشرين ألف بعير، وأكثر من أربعين ألف شاة (الرحيق المختوم؛ سيرة).",
           ""],
          ["🕋 حصار الطائف",
           "تحصّنت ثقيف؛ والحصار نحو عشرين يومًا أو أكثر قليلًا (الرحيق المختوم). والخلاف: من عشرة إلى أربعين يومًا (فتح الباري). واستعمال المنجنيق من روايات السيرة. ولما أعلن النبي ﷺ الرجوع كره الصحابة ذلك؛ ثم قاتلوا في الغد وجرحوا، فلما قال الرجوع ضحكوا (صحيح البخاري 4325). ودعا: «اللهم اهدِ ثقيفًا وأتِ بهم» (الترمذي 3942، الألباني: صحيح). وأسلم وفد ثقيف سنة تسع.",
           ""],
          ["🎁 القسمة",
           "انتظر وفد هوازن بالجعرانة؛ فخيّرهم النبي ﷺ بين الأسرى والمال، فاختاروا الأسرى فردّ الجميع (صحيح البخاري 4318–4319). وأعطى أهل مكة الجدد (أبا سفيان وصفوان والأقرع وعيينة) مئة بعير لكل واحد (صحيح مسلم 1060). فشكا الأنصار؛ فقال ﷺ: «أما ترضون أن يذهب الناس بالشاء والبعير وتذهبون برسول الله ﷺ؟» فبكوا حتى بلّوا اللحى (صحيح البخاري 4333).",
           ""],
          ["🎯 العبرة",
           "لا عجب بالكثرة بل توكل على الله؛ والسخاء والصبر.",
           ""]
        ],
        [
          ["أي قبيلة كانت العدو؟", ["قريش", "هوازن", "اليهود"]],
          ["كم كان عدد الأسرى؟", ["1000", "نحو 6000", "20,000"]],
          ["كم دام حصار الطائف؟", ["5 أيام", "نحو 20 يومًا (10–40)", "3 أشهر"]]
        ],
        [
          ["630", "استعداد هوازن"],
          ["630", "حنين"],
          ["630", "حصار الطائف"],
          ["630", "القسمة بالجعرانة"]
        ]
      ],
      fr: [
        "Les batailles de Hounayn et de Tâ'if — après la conquête",
        "Hounayn et Tâ'if",
        "Chawwâl de l'an 8 (janvier-février 630)",
        "Comprendre Hounayn, la déroute initiale, puis la victoire, et le siège de Tâ'if.",
        "Al-'Abbâs (qu'Allah l'agrée) appela, les Compagnons revinrent et Allah donna la victoire. Ô Allah ! Accorde-nous la fermeté et la fidélité. Âmîn.",
        [
          "An 8",
          "Hawâzin : environ 20 000",
          "Une déroute initiale",
          "Le Prophète ﷺ resta ferme",
          "Environ 6000 prisonniers",
          "La patience des Ansâr"
        ],
        [
          ["💪 L'armée ennemie",
           "Hawâzin et Thaqîf, avec à leur tête Mâlik ibn 'Awf an-Nasrî ; ils vinrent avec femmes, enfants et biens (Ar-Rahîq al-Makhtûm ; Sîra). Leur nombre : environ 20 000 (Ar-Rahîq al-Makhtûm), avec divergence. Les musulmans étaient 12 000 (10 000 de Médine et 2000 des nouveaux Mecquois) (Ar-Rahîq al-Makhtûm).",
           ""],
          ["🏹 La déroute initiale",
           "Le Coran 9:25-26 descendit au sujet de l'orgueil du nombre. Remarque : attribuer cette parole à un Compagnon précis (Abou Bakr, qu'Allah l'agrée) est un récit de Sîra faible. Au matin, les archers de Hawâzin attaquèrent soudainement dans la vallée ; beaucoup reculèrent (Sahih al-Bukhari : 2864, 4317). Le Prophète ﷺ tint bon sur une mule blanche : « Je suis le prophète, sans mensonge ; je suis le fils d''Abd al-Muttalib. » (Sahih al-Bukhari : 2864 ; Sahih Muslim : 1776). Abou Soufyân ibn al-Hârith (qu'Allah l'agrée) saisit la bride (Sahih Muslim : 1776).",
           ""],
          ["🦁 L'appel d'al-'Abbâs (qu'Allah l'agrée)",
           "« Ô Ansâr ! Ô gens de l'arbre (le serment du contentement) ! » Ils revinrent en disant « labbayk » (Sahih Muslim : 1775). Le Prophète ﷺ jeta de la terre : « Que leurs visages soient noircis ! » (Sahih Muslim : 1777). L'ennemi s'enfuit ; environ 6000 prisonniers (Sahih al-Bukhari : 4318-4319), environ 24 000 chameaux et plus de 40 000 moutons (Ar-Rahîq al-Makhtûm ; Sîra).",
           ""],
          ["🕋 Le siège de Tâ'if",
           "Thaqîf s'enferma dans la forteresse ; le siège dura un peu plus de vingt jours (Ar-Rahîq al-Makhtûm). Divergence : de dix à quarante jours (Fath al-Bârî). L'usage du mangonneau vient des récits de Sîra. Quand le Prophète ﷺ annonça le retour, les Compagnons le désapprouvèrent ; ils combattirent le lendemain et furent blessés, puis quand il parla de retour, ils sourirent (Sahih al-Bukhari : 4325). Invocation : « Ô Allah, guide Thaqîf et amène-les. » (Tirmidhi 3942, al-Albani : sahih). La délégation de Thaqîf embrassa l'islam en l'an 9.",
           ""],
          ["🎁 Le partage",
           "On attendit la délégation de Hawâzin à Ji'râna ; le Prophète ﷺ leur laissa le choix entre les captifs et les biens ; ils choisirent les captifs et tous furent rendus (Sahih al-Bukhari : 4318-4319). Il donna cent chameaux à chacun des nouveaux Mecquois (Abou Soufyân, Safwân, al-Aqra' et 'Ouyayna) (Sahih Muslim : 1060). Les Ansâr se plaignirent ; il ﷺ dit : « N'êtes-vous pas satisfaits que les gens emportent les moutons et les chameaux, tandis que vous emportez le Messager d'Allah ﷺ ? » Ils pleurèrent jusqu'à mouiller leurs barbes (Sahih al-Bukhari : 4333).",
           ""],
          ["🎯 La leçon",
           "Pas d'orgueil du nombre, mais confiance en Allah ; générosité et patience.",
           ""]
        ],
        [
          ["Quelle tribu était l'ennemi ?", ["Quraysh", "Hawâzin", "Les Juifs"]],
          ["Combien de prisonniers ?", ["1000", "Environ 6000", "20 000"]],
          ["Combien de temps dura le siège de Tâ'if ?", ["5 jours", "Environ 20 jours (10 à 40)", "3 mois"]]
        ],
        [
          ["630", "Les préparatifs de Hawâzin"],
          ["630", "Hounayn"],
          ["630", "Le siège de Tâ'if"],
          ["630", "Le partage à Ji'râna"]
        ]
      ],
      es: [
        "Las batallas de Hunayn y Taif: después de la conquista",
        "Hunayn y Taif",
        "Shawal del año 8 (enero-febrero de 630)",
        "Comprender Hunayn, la derrota inicial, luego la victoria y el asedio de Taif.",
        "Al-Abbas (que Alá esté complacido con él) llamó, los Compañeros volvieron y Alá dio la victoria. ¡Oh Alá! Concédenos la firmeza y la fidelidad. Amín.",
        [
          "Año 8",
          "Hawazin: unos 20 000",
          "Una derrota inicial",
          "El Profeta ﷺ se mantuvo firme",
          "Unos 6000 prisioneros",
          "La paciencia de los Ansar"
        ],
        [
          ["💪 El ejército enemigo",
           "Hawazin y Zaqif, encabezados por Malik ibn Awf an-Nasri; trajeron mujeres, niños y bienes (Ar-Rahiq al-Majtum; Sira). Su número: unos 20 000 (Ar-Rahiq al-Majtum), con discrepancias. Los musulmanes eran 12 000 (10 000 de Medina y 2000 de los nuevos mequíes) (Ar-Rahiq al-Majtum).",
           ""],
          ["🏹 La derrota inicial",
           "El Corán 9:25-26 descendió sobre el orgullo del número. Nota: atribuir esta frase a un Compañero concreto (Abu Bakr, que Alá esté complacido con él) es un relato de Sira débil. Por la mañana los arqueros de Hawazin atacaron de repente en el valle; muchos retrocedieron (Sahih al-Bujari: 2864, 4317). El Profeta ﷺ se mantuvo firme sobre una mula blanca: «Soy el profeta, sin mentira; soy el hijo de Abd al-Muttalib.» (Sahih al-Bujari: 2864; Sahih Muslim: 1776). Abu Sufian ibn al-Hariz (que Alá esté complacido con él) tomó las riendas (Sahih Muslim: 1776).",
           ""],
          ["🦁 El llamamiento de al-Abbas (que Alá esté complacido con él)",
           "«¡Oh Ansar! ¡Oh gente del árbol (el juramento del contento)!» Volvieron diciendo «labbayk» (Sahih Muslim: 1775). El Profeta ﷺ arrojó tierra: «¡Que sus rostros se oscurezcan!» (Sahih Muslim: 1777). El enemigo huyó; unos 6000 prisioneros (Sahih al-Bujari: 4318-4319), unos 24 000 camellos y más de 40 000 ovejas (Ar-Rahiq al-Majtum; Sira).",
           ""],
          ["🕋 El asedio de Taif",
           "Zaqif se encerró en la fortaleza; el asedio duró algo más de veinte días (Ar-Rahiq al-Majtum). Discrepancia: de diez a cuarenta días (Fath al-Bari). El uso del manganel viene de los relatos de Sira. Cuando el Profeta ﷺ anunció el regreso, a los Compañeros les disgustó; combatieron al día siguiente y fueron heridos, y cuando habló del regreso, sonrieron (Sahih al-Bujari: 4325). Súplica: «¡Oh Alá, guía a Zaqif y tráelos!» (Tirmidhi 3942, al-Albani: sahih). La delegación de Zaqif abrazó el islam en el año 9.",
           ""],
          ["🎁 El reparto",
           "Se esperó a la delegación de Hawazin en Yirana; el Profeta ﷺ les dio a elegir entre los cautivos y los bienes; eligieron los cautivos y todos fueron devueltos (Sahih al-Bujari: 4318-4319). Dio cien camellos a cada uno de los nuevos mequíes (Abu Sufian, Safwan, al-Aqra y Uyayna) (Sahih Muslim: 1060). Los Ansar se quejaron; él ﷺ dijo: «¿No os complacéis de que la gente se lleve las ovejas y los camellos mientras vosotros os lleváis al Mensajero de Alá ﷺ?» Lloraron hasta mojar sus barbas (Sahih al-Bujari: 4333).",
           ""],
          ["🎯 La lección",
           "Nada de orgullo por el número, sino confianza en Alá; generosidad y paciencia.",
           ""]
        ],
        [
          ["¿Qué tribu era el enemigo?", ["Quraysh", "Hawazin", "Los judíos"]],
          ["¿Cuántos prisioneros?", ["1000", "Unos 6000", "20 000"]],
          ["¿Cuánto duró el asedio de Taif?", ["5 días", "Unos 20 días (10 a 40)", "3 meses"]]
        ],
        [
          ["630", "Los preparativos de Hawazin"],
          ["630", "Hunayn"],
          ["630", "El asedio de Taif"],
          ["630", "El reparto en Yirana"]
        ]
      ]
    },

    /* ═══════════════ DAY 28 — Ghazwa-e-Tabuk ═══════════════ */
    28: {
      mr: [
        "तबूकचे युद्ध — शेवटचे युद्ध",
        "तबूक",
        "रजब हिजरी ९ (ऑक्टोबर इ.स. ६३०)",
        "तबूकची तयारी, कठीण परिस्थिती आणि युद्ध न करता परतीची घटना समजून घेणे.",
        "हजरत उस्मान (र.अ.) यांनी मोकळ्या हाताने दिले. हे अल्लाह! आम्हालाही तुझ्या मार्गात देण्याची तौफीक दे. आमीन.",
        [
          "हिजरी ९",
          "सुमारे ३०,००० सैन्य",
          "उस्मान (र.अ.) यांचे मोठे दान",
          "कठोर उकाडा",
          "युद्ध झाले नाही",
          "तीन सत्यवादी सहाबांची तौबा"
        ],
        [
          ["🌡️ पार्श्वभूमी",
           "शामकडे रोमन/गस्सानींच्या जमावाची बातमी (सीरत; इब्न साद). कठोर उकाडा, फळांचा हंगाम आणि तंगी; म्हणून «जैशुल-उसरा» (कुरआन ९:११७ «साअतुल-उसरा»). संख्या सुमारे ३०,००० (अर-रहीकुल-मख्तूम; सीरत). अली (र.अ.) यांना मदिन्यात ठेवले: «तुम्ही माझ्यासाठी तसे आहात जसे मूसा (अ.स.) यांच्यासाठी हारून (अ.स.) होते» (सहीह बुखारी ४४१६; सहीह मुस्लिम २४०४).",
           ""],
          ["💰 कुर्बानी",
           "अबू बक्र (र.अ.) आपला सर्व माल घेऊन आले: «अल्लाह व त्याचा रसूल पुरेसे आहेत»; उमर (र.अ.) अर्धा माल घेऊन आले (सुनन अबी दाऊद १६७८; तिर्मिझी ३६७५, अल्बानी: हसन). उस्मान (र.अ.): ३०० उंट व एक हजार दिनार; «आजनंतर उस्मानला कोणतेही कर्म हानी करणार नाही» (तिर्मिझी ३६९९–३७०१, अल्बानी: हसन). सूचना: अब्दुर्रहमान बिन औफ (र.अ.) यांचे २०० औकिया व स्त्रियांच्या दागिन्यांचा तपशील वाकिदी/इब्न साद (जईफ) मधून आहे, सहीह हदीसमध्ये नाही.",
           ""],
          ["😢 मागे राहिलेले",
           "खऱ्या गरिबांकडे स्वारी नव्हती, ते रडत परत गेले (अत-तौबा ९:९२); अबू मूसा (र.अ.) यांना नंतर उंट मिळाले (सहीह बुखारी ४४१५). मुनाफिकांनी सबबी सांगितल्या. तीन सत्यवादी सहाबा: काब बिन मालिक, मरारा बिन रबीअ व हिलाल बिन उमय्या (र.अ.) यांनी विनाकारण मागे राहणे कबूल केले; ५० दिवसांचा बहिष्कार; नंतर तौबा स्वीकारली (अत-तौबा ९:११८) (सहीह बुखारी ४४१८; सहीह मुस्लिम २७६९).",
           ""],
          ["🏜️ प्रवास",
           "तंगी, एका उंटावर अनेक जण, पाण्याची कमतरता. हिज्र (समूद) मधून जाताना मार्गदर्शन: रडत जा, डोके झाकून घ्या (सहीह बुखारी ४४१९–४४२०). अबू झर (र.अ.) यांच्या पायी चालण्याच्या व «अल्लाह अबू झरवर दया करो» या रिवायतीच्या सनदेवर चर्चा आहे (इब्न इशाक/हाकिम), आणि पावसाची घटनाही सीरतमधून आहे.",
           ""],
          ["🏰 तबूकमध्ये",
           "रोमन सैन्य समोर आले नाही (अर-रहीकुल-मख्तूम). मुक्काम सुमारे २० दिवस (सुनन अबी दाऊद १२३५, अल्बानी: सहीह). ऐलाचा हाकीम युहन्ना बिन रुबा यांनी भेटवस्तू दिल्या आणि जिझिया घेऊन तह केला (सहीह बुखारी १४८१; तपशील सीरत); जर्बा व अजरुहसोबतचा तह सीरतची रिवायत आहे. सुधारणा: मस्जिदे-जिरार (अत-तौबा ९:१०७–११०) चा विध्वंस तबूकमध्ये नाही, परतीच्या वेळी झी अवानजवळ झाला; निघण्याच्या वेळी नबी ﷺ म्हणाले होते «परतीवर» (सीरत; तफसीर इब्न कसीर).",
           ""],
          ["🏘️ परती",
           "«मदिन्यात काही लोक असे आहेत की तुम्ही ज्या दरीतून गेलात तिथे ते तुमच्यासोबत होते; त्यांना सबबीने रोखले होते» (सहीह बुखारी ४४२३).",
           ""],
          ["🎯 बोध",
           "कठीण वेळी माल व जिवाने दीनाची साथ द्या; अल्लाहवर भरवसा ठेवा.",
           ""]
        ],
        [
          ["तबूकचे युद्ध कोणत्या वर्षी झाले?", ["हिजरी ८", "हिजरी ९", "हिजरी १०"]],
          ["सर्वात मोठे दान कोणी दिले?", ["अबू बक्र (र.अ.)", "उमर (र.अ.)", "उस्मान (र.अ.)"]],
          ["रोमन सैन्याचे काय झाले?", ["युद्ध झाले", "समोर आले नाही", "तह झाला"]]
        ],
        [
          ["इ.स. ६३०", "रोमन बातमी"],
          ["इ.स. ६३०", "मालाची जमवाजमव"],
          ["इ.स. ६३०", "तबूकचा प्रवास व सुमारे २० दिवस मुक्काम"],
          ["इ.स. ६३०", "परतीवर मस्जिदे-जिरारचा विध्वंस"]
        ]
      ],
      ar: [
        "غزوة تبوك — الغزوة الأخيرة",
        "تبوك",
        "رجب السنة التاسعة (أكتوبر 630)",
        "فهم استعداد تبوك، وشدة الأحوال، والرجوع دون قتال.",
        "أنفق عثمان رضي الله عنه بسخاء. اللهم وفقنا للإنفاق في سبيلك. آمين.",
        [
          "السنة التاسعة",
          "نحو ثلاثين ألفًا",
          "إنفاق عثمان رضي الله عنه العظيم",
          "شدة الحر",
          "لم يكن قتال",
          "توبة ثلاثة من صادقي الصحابة"
        ],
        [
          ["🌡️ الخلفية",
           "خبر تجمّع الروم والغساسنة نحو الشام (سيرة؛ ابن سعد). وحر شديد، وأوان ثمار، وضيق؛ ولذلك «جيش العسرة» (القرآن 9:117 «ساعة العسرة»). والعدد نحو ثلاثين ألفًا (الرحيق المختوم؛ سيرة). واستخلف عليًّا رضي الله عنه على المدينة: «أنت مني بمنزلة هارون من موسى» (صحيح البخاري 4416؛ صحيح مسلم 2404).",
           ""],
          ["💰 التضحية",
           "جاء أبو بكر رضي الله عنه بماله كله وقال: «حسبي الله ورسوله»؛ وجاء عمر رضي الله عنه بنصف ماله (سنن أبي داود 1678؛ الترمذي 3675، الألباني: حسن). وعثمان رضي الله عنه: ثلاثمئة بعير وألف دينار؛ «ما ضرّ عثمان ما عمل بعد اليوم» (الترمذي 3699–3701، الألباني: حسن). تنبيه: تفصيل مئتي أوقية لعبد الرحمن بن عوف رضي الله عنه وحُليّ النساء من الواقدي وابن سعد (ضعيف)، وليس في حديث صحيح.",
           ""],
          ["😢 المتخلفون",
           "لم يكن عند الفقراء الصادقين ظهر، فرجعوا يبكون (التوبة 9:92)؛ وحصل أبو موسى رضي الله عنه على إبل بعد ذلك (صحيح البخاري 4415). واعتذر المنافقون بأعذار. وأما الثلاثة الصادقون: كعب بن مالك ومرارة بن الربيع وهلال بن أمية رضي الله عنهم فاعترفوا بالتخلف بلا عذر؛ فقوطعوا خمسين يومًا؛ ثم تِيب عليهم (التوبة 9:118) (صحيح البخاري 4418؛ صحيح مسلم 2769).",
           ""],
          ["🏜️ السفر",
           "ضيق، وعلى البعير الواحد عدة نفر، وقلة ماء. ولما مرّوا بالحِجر (ثمود) قال: «لا تدخلوا إلا باكين، وغطّوا رؤوسكم» (صحيح البخاري 4419–4420). وأما مَشْي أبي ذر رضي الله عنه وقول «رحم الله أبا ذر» ففي إسناده كلام (ابن إسحاق/الحاكم)، وكذلك قصة المطر من السيرة.",
           ""],
          ["🏰 في تبوك",
           "لم يظهر للروم جيش (الرحيق المختوم). والإقامة نحو عشرين يومًا (سنن أبي داود 1235، الألباني: صحيح). وصالح يوحنا بن رؤبة عامل أيلة على الجزية وأهدى (صحيح البخاري 1481؛ والتفصيل في السيرة)؛ وصلح جرباء وأذرح من روايات السيرة. تصحيح: هدم مسجد الضرار (التوبة 9:107–110) لم يكن في تبوك، بل عند ذي أوان في الرجوع؛ وقد قال ﷺ عند الخروج: «حين نرجع» (سيرة؛ تفسير ابن كثير).",
           ""],
          ["🏘️ الرجوع",
           "«إن بالمدينة أقوامًا ما سرتم مسيرًا ولا قطعتم واديًا إلا كانوا معكم، حبسهم العذر» (صحيح البخاري 4423).",
           ""],
          ["🎯 العبرة",
           "في الشدائد ناصر الدين بالمال والنفس؛ وتوكل على الله.",
           ""]
        ],
        [
          ["في أي سنة كانت تبوك؟", ["الثامنة", "التاسعة", "العاشرة"]],
          ["من كان أكبر المنفقين؟", ["أبو بكر رضي الله عنه", "عمر رضي الله عنه", "عثمان رضي الله عنه"]],
          ["ماذا حدث لجيش الروم؟", ["وقع قتال", "لم يظهر", "وقع صلح"]]
        ],
        [
          ["630", "خبر الروم"],
          ["630", "تجهيز المال"],
          ["630", "سفر تبوك والإقامة نحو عشرين يومًا"],
          ["630", "هدم مسجد الضرار في الرجوع"]
        ]
      ],
      fr: [
        "L'expédition de Taboûk — la dernière expédition",
        "Taboûk",
        "Rajab de l'an 9 (octobre 630)",
        "Comprendre les préparatifs de Taboûk, la dureté des conditions et le retour sans combat.",
        "'Uthmân (qu'Allah l'agrée) dépensa largement. Ô Allah ! Accorde-nous de dépenser dans Ta voie. Âmîn.",
        [
          "An 9",
          "Environ 30 000 hommes",
          "La grande dépense de 'Uthmân (qu'Allah l'agrée)",
          "Une chaleur extrême",
          "Pas de combat",
          "Le repentir de trois véridiques Compagnons"
        ],
        [
          ["🌡️ Le contexte",
           "La nouvelle d'un rassemblement des Byzantins et des Ghassânides vers le Châm (Sîra ; Ibn Sa'd). Chaleur intense, saison des fruits et gêne ; d'où « l'armée de la difficulté » (Coran 9:117 « l'heure de la difficulté »). Le nombre : environ 30 000 (Ar-Rahîq al-Makhtûm ; Sîra). Il laissa 'Alî (qu'Allah l'agrée) à Médine : « Tu es pour moi ce que Hâroûn fut pour Mûsâ. » (Sahih al-Bukhari : 4416 ; Sahih Muslim : 2404)",
           ""],
          ["💰 Le sacrifice",
           "Abou Bakr (qu'Allah l'agrée) vint avec tous ses biens : « Allah et Son Messager me suffisent » ; 'Umar (qu'Allah l'agrée) vint avec la moitié (Sunan Abi Dawud : 1678 ; Tirmidhi 3675, al-Albani : hasan). 'Uthmân (qu'Allah l'agrée) : trois cents chameaux et mille dinars ; « Ce qu'a fait 'Uthmân aujourd'hui ne lui nuira plus » (Tirmidhi 3699-3701, al-Albani : hasan). Remarque : le détail des deux cents ouqiyya de 'Abd ar-Rahmân ibn 'Awf (qu'Allah l'agrée) et des bijoux des femmes vient d'al-Wâqidî et d'Ibn Sa'd (faible), non d'un hadith authentique.",
           ""],
          ["😢 Ceux qui restèrent",
           "Les pauvres véridiques n'avaient pas de monture et revinrent en pleurant (at-Tawba 9:92) ; Abou Moûsâ (qu'Allah l'agrée) obtint ensuite des chameaux (Sahih al-Bukhari : 4415). Les hypocrites présentèrent des excuses. Quant aux trois véridiques : Ka'b ibn Mâlik, Marâra ibn ar-Rabî' et Hilâl ibn Oumayya (qu'Allah les agrée), ils reconnurent leur absence sans excuse ; ils furent boycottés cinquante jours ; puis leur repentir fut accepté (at-Tawba 9:118) (Sahih al-Bukhari : 4418 ; Sahih Muslim : 2769).",
           ""],
          ["🏜️ Le voyage",
           "La gêne, plusieurs hommes sur un seul chameau, le manque d'eau. En passant par al-Hijr (Thamoud) : « N'entrez qu'en pleurant, et couvrez-vous la tête » (Sahih al-Bukhari : 4419-4420). Le récit de la marche d'Abou Dharr (qu'Allah l'agrée) et de « Qu'Allah fasse miséricorde à Abou Dharr » a une chaîne discutée (Ibn Ishâq/al-Hâkim), et l'épisode de la pluie vient de la Sîra.",
           ""],
          ["🏰 À Taboûk",
           "Aucune armée byzantine ne se présenta (Ar-Rahîq al-Makhtûm). Le séjour dura environ vingt jours (Sunan Abi Dawud : 1235, al-Albani : sahih). Youhannâ ibn Rou'ba, gouverneur d'Ayla, offrit des présents et conclut la paix contre la jizya (Sahih al-Bukhari : 1481 ; détails dans la Sîra) ; la paix avec Jarbâ' et Adhrouh vient des récits de Sîra. Correction : la démolition de la mosquée du tort (at-Tawba 9:107-110) n'eut pas lieu à Taboûk, mais au retour près de Dhî Awân ; au départ, il ﷺ avait dit « au retour » (Sîra ; tafsîr d'Ibn Kathîr).",
           ""],
          ["🏘️ Le retour",
           "« Il y a à Médine des gens tels que, chaque fois que vous avez marché ou traversé une vallée, ils étaient avec vous ; seule l'excuse les a retenus. » (Sahih al-Bukhari : 4423)",
           ""],
          ["🎯 La leçon",
           "Dans l'épreuve, soutiens la religion par tes biens et ta personne ; et fais confiance à Allah.",
           ""]
        ],
        [
          ["En quelle année eut lieu Taboûk ?", ["An 8", "An 9", "An 10"]],
          ["Qui fit la plus grande dépense ?", ["Abou Bakr (qu'Allah l'agrée)", "'Umar (qu'Allah l'agrée)", "'Uthmân (qu'Allah l'agrée)"]],
          ["Qu'advint-il de l'armée byzantine ?", ["Il y eut un combat", "Elle ne se présenta pas", "Une paix fut conclue"]]
        ],
        [
          ["630", "La nouvelle des Byzantins"],
          ["630", "La collecte des biens"],
          ["630", "Le voyage de Taboûk et un séjour d'environ vingt jours"],
          ["630", "La démolition de la mosquée du tort au retour"]
        ]
      ],
      es: [
        "La expedición de Tabuk: la última expedición",
        "Tabuk",
        "Rayab del año 9 (octubre de 630)",
        "Comprender los preparativos de Tabuk, la dureza de las condiciones y el regreso sin combate.",
        "Uzman (que Alá esté complacido con él) gastó con generosidad. ¡Oh Alá! Concédenos gastar en Tu camino. Amín.",
        [
          "Año 9",
          "Unos 30 000 hombres",
          "El gran gasto de Uzman (que Alá esté complacido con él)",
          "Un calor extremo",
          "No hubo combate",
          "El arrepentimiento de tres Compañeros veraces"
        ],
        [
          ["🌡️ El contexto",
           "La noticia de una reunión de bizantinos y gasaníes hacia el Sham (Sira; Ibn Sad). Calor intenso, temporada de frutos y estrechez; de ahí «el ejército de la dificultad» (Corán 9:117). El número: unos 30 000 (Ar-Rahiq al-Majtum; Sira). Dejó a Ali (que Alá esté complacido con él) en Medina: «Tú eres para mí lo que Harun fue para Musa.» (Sahih al-Bujari: 4416; Sahih Muslim: 2404)",
           ""],
          ["💰 El sacrificio",
           "Abu Bakr (que Alá esté complacido con él) vino con todos sus bienes: «Alá y Su Mensajero me bastan»; Umar (que Alá esté complacido con él) con la mitad (Sunan Abi Dawud: 1678; Tirmidhi 3675, al-Albani: hasan). Uzman (que Alá esté complacido con él): trescientos camellos y mil dinares; «Lo que Uzman ha hecho hoy no le perjudicará más» (Tirmidhi 3699-3701, al-Albani: hasan). Nota: el detalle de las doscientas uquiyyas de Abd ar-Rahman ibn Awf (que Alá esté complacido con él) y las joyas de las mujeres viene de al-Waqidi e Ibn Sad (débil), no de un hadiz auténtico.",
           ""],
          ["😢 Los que se quedaron",
           "Los pobres veraces no tenían montura y volvieron llorando (at-Tawba 9:92); Abu Musa (que Alá esté complacido con él) obtuvo camellos después (Sahih al-Bujari: 4415). Los hipócritas presentaron excusas. Los tres veraces: Kab ibn Malik, Marara ibn ar-Rabi y Hilal ibn Umayya (que Alá esté complacido con ellos) reconocieron su ausencia sin excusa; fueron boicoteados cincuenta días; luego su arrepentimiento fue aceptado (at-Tawba 9:118) (Sahih al-Bujari: 4418; Sahih Muslim: 2769).",
           ""],
          ["🏜️ El viaje",
           "Estrechez, varios hombres en un solo camello y falta de agua. Al pasar por al-Hiyir (Zamud): «No entréis sino llorando, y cubríos la cabeza» (Sahih al-Bujari: 4419-4420). El relato de la marcha de Abu Zarr (que Alá esté complacido con él) y de «Que Alá tenga misericordia de Abu Zarr» tiene cadena discutida (Ibn Ishaq/al-Hakim), y el episodio de la lluvia viene de la Sira.",
           ""],
          ["🏰 En Tabuk",
           "No apareció ejército bizantino (Ar-Rahiq al-Majtum). La estancia duró unos veinte días (Sunan Abi Dawud: 1235, al-Albani: sahih). Yuhanna ibn Ru'ba, gobernador de Ayla, ofreció regalos y pactó la paz a cambio de la yizia (Sahih al-Bujari: 1481; detalles en la Sira); la paz con Yarba y Azruh viene de relatos de Sira. Corrección: la demolición de la mezquita del daño (at-Tawba 9:107-110) no fue en Tabuk, sino a la vuelta, cerca de Zi Awan; al salir, él ﷺ había dicho «a la vuelta» (Sira; tafsir de Ibn Kazir).",
           ""],
          ["🏘️ El regreso",
           "«Hay en Medina gentes tales que, cada vez que marchasteis o cruzasteis un valle, estaban con vosotros; solo la excusa los retuvo.» (Sahih al-Bujari: 4423)",
           ""],
          ["🎯 La lección",
           "En la dificultad, sostén la religión con tus bienes y tu persona; y confía en Alá.",
           ""]
        ],
        [
          ["¿En qué año fue Tabuk?", ["Año 8", "Año 9", "Año 10"]],
          ["¿Quién hizo el mayor gasto?", ["Abu Bakr (que Alá esté complacido con él)", "Umar (que Alá esté complacido con él)", "Uzman (que Alá esté complacido con él)"]],
          ["¿Qué ocurrió con el ejército bizantino?", ["Hubo combate", "No apareció", "Se pactó la paz"]]
        ],
        [
          ["630", "La noticia de los bizantinos"],
          ["630", "La reunión de bienes"],
          ["630", "El viaje a Tabuk y una estancia de unos veinte días"],
          ["630", "La demolición de la mezquita del daño a la vuelta"]
        ]
      ]
    },

    /* ═══════════════ DAY 29 — Hajjatul-Wida ═══════════════ */
    29: {
      mr: [
        "हज्जतुल-विदा — शेवटचा खुतबा",
        "अरफातचे मैदान",
        "झुलकदा–झुलहिज्जा हिजरी १० (मार्च इ.स. ६३२) — मदिन्याहून प्रयाण झुलकदाचे शेवटचे पाच दिवस (सहीह बुखारी १५४५); अरफा शुक्रवारी (सहीह बुखारी ४५)",
        "हज्जतुल-विदाची घटना, शेवटचा खुतबा आणि दीन पूर्ण झाल्याची घोषणा समजून घेणे.",
        "«हे अल्लाह! साक्षी राहा» — ही आमचीही जबाबदारी आहे; ही अनामत पुढे पोहोचवणे. हे अल्लाह! आम्हाला त्याची तौफीक दे. आमीन.",
        [
          "हिजरी १०",
          "एक लाखाहून अधिक (संख्येत मतभेद)",
          "अरफातचा खुतबा",
          "अल-माइदा ५:३",
          "अल्लाहच्या ग्रंथाला धरून राहणे",
          "हज्जतुल-विदा"
        ],
        [
          ["🕋 विचार",
           "हिजरतीनंतर हाच एकमेव हज होता (सहीह बुखारी १७७८). हाजींची कोणतीही सहीह संख्या नाही; जाबिर (र.अ.): दृष्टीच्या हद्दीपर्यंत लोकच लोक (सहीह मुस्लिम १२१८). मते: ९० हजार, सुमारे ११४ हजार, १२४ हजार, १४४ हजार (सीरत). «माझ्याकडून आपली मनासिक शिका, कदाचित या वर्षानंतर मी हज करू शकणार नाही» (सहीह मुस्लिम १२९७). मतभेद: आप ﷺ यांचा हज इफ्राद होता, तमत्तो की किरान? (सहीह बुखारी १५६१, १६९१; सहीह मुस्लिम १२११); इब्नुल-कय्यिमने किरानला प्राधान्य दिले (झादुल-मआद).",
           ""],
          ["📢 अरफातचा खुतबा",
           "९ झुलहिज्जाला वादी-ए-उरनामध्ये (सहीह मुस्लिम १२१८): जाहिलियतची प्रत्येक गोष्ट माझ्या पायांखाली; जाहिलियतचे रक्त व व्याज (अब्बास (र.अ.) यांचे व्याज) संपुष्टात; स्त्रियांबद्दल अल्लाहचे भय ठेवा (सहीह मुस्लिम १२१८). «तुमचे रक्त, माल आणि मान हराम आहेत» (सहीह बुखारी ६७, १७३९, मिनाच्या खुतब्यात; «हजर असलेल्याने गैरहजराला पोहोचवावे»). रबीआ बिन उमय्या यांनी मोठ्या आवाजात दोहराव केल्याची गोष्ट सीरत (इब्न इशाक) ची रिवायत आहे. स्पष्टीकरण: «शेवटचा खुतबा» अनेक ठिकाणांचा (अरफा, मिना) व अनेक रिवायतींचा संग्रह आहे, एक संपूर्ण सहीह मतन नाही.",
           ""],
          ["📖 दीन पूर्ण झाल्याची आयत",
           "«आज मी तुमच्यासाठी तुमचा दीन पूर्ण केला» (अल-माइदा ५:३), अरफाच्या दिवशी, शुक्रवारी (सहीह बुखारी ४५, ४६०६). सुधारणा: अबू बक्र (र.अ.) यांनी या आयतीवर रडल्याची सहीह सनद मिळत नाही; त्यांचे रडणे «बंद्याला पर्याय दिला गेला» या खुतब्यावर आहे (सहीह बुखारी ३६५४).",
           ""],
          ["🤲 शेवटची वसीयत",
           "«मी तुमच्यात अशी गोष्ट सोडत आहे की जर ती घट्ट धरून राहिलात तर कधीही मार्गभ्रष्ट होणार नाही: अल्लाहचा ग्रंथ» (सहीह मुस्लिम १२१८). «ग्रंथ व सुन्नत» ही रिवायत मुवत्ता (बलागन्) व मुस्तद्रकमध्ये आहे; मुहद्दिसांनी तिच्या सनदेवर चर्चा केली आहे, काहींनी शवाहिदांमुळे मजबूत म्हटले. «अहले-बैत» ची वसीयत गदीरे-खुम येथे आहे (सहीह मुस्लिम २४०८), अरफावर नाही. नंतर विचारले: «माझ्याबद्दल काय सांगाल?» सहाबांनी म्हटले: «तुम्ही पोहोचवले»; आप ﷺ यांनी बोट आकाशाकडे उचलून तीन वेळा म्हटले: «हे अल्लाह! साक्षी राहा» (सहीह मुस्लिम १२१८).",
           ""],
          ["💔 शेवटचा दिवस",
           "सूरह अन-नस्र उतरली; उमर व इब्न अब्बास (र.अ.) यांनी निधनाची जवळीक ओळखली (सहीह बुखारी ४९७०). मतभेद: तिचे अवतरण मिनामध्ये अय्यामे-तशरीकमध्ये सांगितले जाते (बैहकी; सनदेवर चर्चा).",
           ""],
          ["🎯 बोध",
           "शेवटचा खुतबा ही एक वसीयत आहे: हक्क, स्त्रिया, जीव, माल, मान, ग्रंथ व सुन्नत.",
           ""]
        ],
        [
          ["हज्जतुल-विदा कोणत्या वर्षी झाला?", ["हिजरी ९", "हिजरी १०", "हिजरी ११"]],
          ["अरफाच्या दिवशी कोणती आयत उतरली?", ["आज मी तुमचा दीन पूर्ण केला", "आम्ही तुम्हाला स्पष्ट विजय दिला", "जेव्हा अल्लाहची मदत येईल"]],
          ["खुतब्यात घट्ट धरून ठेवण्याची कोणती गोष्ट सांगितली?", ["माल व संतती", "अल्लाहचा ग्रंथ (व सुन्नत)", "जग व परलोक"]]
        ],
        [
          ["इ.स. ६३२", "हजचा विचार"],
          ["इ.स. ६३२", "९ झुलहिज्जाचा खुतबा"],
          ["इ.स. ६३२", "दीन पूर्ण झाल्याची आयत"],
          ["इ.स. ६३२", "मिनाचा खुतबा"]
        ]
      ],
      ar: [
        "حجة الوداع — الخطبة الأخيرة",
        "ميدان عرفة",
        "ذو القعدة–ذو الحجة السنة العاشرة (مارس 632) — الخروج من المدينة في آخر خمس من ذي القعدة (صحيح البخاري 1545)؛ وعرفة يوم الجمعة (صحيح البخاري 45)",
        "فهم حجة الوداع، والخطبة الأخيرة، وإعلان كمال الدين.",
        "«اللهم اشهد» — وهي مسؤوليتنا أيضًا: تبليغ هذه الأمانة. اللهم وفقنا لذلك. آمين.",
        [
          "السنة العاشرة",
          "أكثر من مئة ألف (وفي العدد خلاف)",
          "خطبة عرفة",
          "المائدة 5:3",
          "التمسك بكتاب الله",
          "حجة الوداع"
        ],
        [
          ["🕋 القصد",
           "كان هذا حجه الوحيد بعد الهجرة (صحيح البخاري 1778). ولا يُعرف عدد الحجاج على وجه الصحة؛ قال جابر رضي الله عنه: الناس ما يبلغهم البصر (صحيح مسلم 1218). والأقوال: تسعون ألفًا، نحو 114 ألفًا، 124 ألفًا، 144 ألفًا (سيرة). «خذوا عني مناسككم، فلعلي لا أحج بعد عامي هذا» (صحيح مسلم 1297). والخلاف: هل كان حجه ﷺ إفرادًا أو تمتعًا أو قرانًا؟ (صحيح البخاري 1561، 1691؛ صحيح مسلم 1211)؛ ورجّح ابن القيم القران (زاد المعاد).",
           ""],
          ["📢 خطبة عرفة",
           "في وادي عرنة يوم 9 ذي الحجة (صحيح مسلم 1218): كل أمر جاهلية تحت قدمي؛ ودم الجاهلية ورباها (ربا العباس رضي الله عنه) موضوع؛ واتقوا الله في النساء (صحيح مسلم 1218). «إن دماءكم وأموالكم وأعراضكم حرام عليكم» (صحيح البخاري 67، 1739، في خطبة منى؛ «فليبلغ الشاهد الغائب»). وإعادة ربيعة بن أمية بصوت عالٍ من روايات السيرة (ابن إسحاق). توضيح: «الخطبة الأخيرة» مجموع مواضع (عرفة ومنى) وروايات، لا متنًا واحدًا صحيحًا كاملًا.",
           ""],
          ["📖 آية كمال الدين",
           "«اليوم أكملت لكم دينكم» (المائدة 5:3)، يوم عرفة، يوم الجمعة (صحيح البخاري 45، 4606). تصحيح: لا يثبت بسند صحيح بكاء أبي بكر رضي الله عنه على هذه الآية؛ وإنما بكى على خطبة «خُيّر عبد بين الدنيا وبين ما عند الله» (صحيح البخاري 3654).",
           ""],
          ["🤲 الوصية الأخيرة",
           "«إني قد تركت فيكم ما إن أخذتم به لن تضلوا: كتاب الله» (صحيح مسلم 1218). ورواية «الكتاب والسنة» في الموطأ (بلاغًا) والمستدرك؛ وقد تكلم المحدثون في إسنادها، وقواها بعضهم بالشواهد. ووصية «أهل البيت» في غدير خم (صحيح مسلم 2408)، لا في عرفة. ثم سأل: «ماذا تقولون فيّ؟» قالوا: «بلغت»؛ فرفع إصبعه إلى السماء وقال ثلاثًا: «اللهم اشهد» (صحيح مسلم 1218).",
           ""],
          ["💔 اليوم الأخير",
           "نزلت سورة النصر؛ وفهم عمر وابن عباس رضي الله عنهما قرب الأجل (صحيح البخاري 4970). والخلاف: يُذكر نزولها بمنى في أيام التشريق (البيهقي؛ وفي الإسناد كلام).",
           ""],
          ["🎯 العبرة",
           "الخطبة الأخيرة وصية: الحقوق، والنساء، والنفس، والمال، والعرض، والكتاب والسنة.",
           ""]
        ],
        [
          ["في أي سنة كانت حجة الوداع؟", ["التاسعة", "العاشرة", "الحادية عشرة"]],
          ["أي آية نزلت يوم عرفة؟", ["اليوم أكملت لكم دينكم", "إنا فتحنا لك فتحًا مبينًا", "إذا جاء نصر الله"]],
          ["بماذا أوصى بالتمسك في الخطبة؟", ["المال والولد", "كتاب الله (والسنة)", "الدنيا والآخرة"]]
        ],
        [
          ["632", "قصد الحج"],
          ["632", "خطبة يوم 9 ذي الحجة"],
          ["632", "آية كمال الدين"],
          ["632", "خطبة منى"]
        ]
      ],
      fr: [
        "Le pèlerinage d'adieu — le dernier sermon",
        "La plaine d'Arafa",
        "Dhou al-qi'da – dhou al-hijja de l'an 10 (mars 632) — départ de Médine les cinq derniers jours de dhou al-qi'da (Sahih al-Bukhari : 1545) ; Arafa un vendredi (Sahih al-Bukhari : 45)",
        "Comprendre le pèlerinage d'adieu, le dernier sermon et l'annonce de la perfection de la religion.",
        "« Ô Allah, sois témoin » — c'est aussi notre responsabilité : transmettre ce dépôt. Ô Allah ! Accorde-nous cela. Âmîn.",
        [
          "An 10",
          "Plus de cent mille (nombre discuté)",
          "Le sermon d'Arafa",
          "Al-Mâ'ida 5:3",
          "S'attacher au Livre d'Allah",
          "Le pèlerinage d'adieu"
        ],
        [
          ["🕋 L'intention",
           "Ce fut son seul pèlerinage après l'émigration (Sahih al-Bukhari : 1778). Le nombre des pèlerins n'est pas connu avec certitude ; Jâbir (qu'Allah l'agrée) dit : les gens à perte de vue (Sahih Muslim : 1218). Les avis : 90 000, environ 114 000, 124 000, 144 000 (Sîra). « Apprenez de moi vos rites ; peut-être ne ferai-je plus de pèlerinage après cette année. » (Sahih Muslim : 1297). Divergence : son pèlerinage fut-il ifrâd, tamattu' ou qirân ? (Sahih al-Bukhari : 1561, 1691 ; Sahih Muslim : 1211) ; Ibn al-Qayyim préféra le qirân (Zâd al-Ma'âd).",
           ""],
          ["📢 Le sermon d'Arafa",
           "Dans la vallée de 'Ourna le 9 dhou al-hijja (Sahih Muslim : 1218) : tout ce qui relève de l'ignorance est sous mes pieds ; le sang et l'usure de l'ignorance (l'usure d'al-'Abbâs, qu'Allah l'agrée) sont abolis ; craignez Allah au sujet des femmes (Sahih Muslim : 1218). « Vos sangs, vos biens et vos honneurs sont sacrés » (Sahih al-Bukhari : 67, 1739, dans le sermon de Minâ ; « que le présent informe l'absent »). La répétition à voix haute par Rabî'a ibn Oumayya vient des récits de Sîra (Ibn Ishâq). Précision : le « dernier sermon » est un ensemble de lieux (Arafa et Minâ) et de récits, non un seul texte authentique complet.",
           ""],
          ["📖 Le verset de la perfection",
           "« Aujourd'hui J'ai parachevé pour vous votre religion » (al-Mâ'ida 5:3), le jour d'Arafa, un vendredi (Sahih al-Bukhari : 45, 4606). Correction : les larmes d'Abou Bakr (qu'Allah l'agrée) sur ce verset ne sont pas établies par une chaîne authentique ; il pleura sur le sermon « un serviteur a été mis au choix » (Sahih al-Bukhari : 3654).",
           ""],
          ["🤲 La dernière recommandation",
           "« Je vous ai laissé ce qui, si vous vous y tenez fermement, ne vous égarera jamais : le Livre d'Allah. » (Sahih Muslim : 1218). Le récit « le Livre et la Sunna » se trouve dans le Muwatta' (balâghan) et al-Moustadrak ; les spécialistes ont discuté sa chaîne, certains l'ont renforcée par des témoignages. La recommandation concernant « les gens de la maison » eut lieu à Ghadîr Khoum (Sahih Muslim : 2408), non à Arafa. Puis il demanda : « Que direz-vous de moi ? » Ils dirent : « Tu as transmis. » Il leva le doigt vers le ciel et dit trois fois : « Ô Allah, sois témoin. » (Sahih Muslim : 1218)",
           ""],
          ["💔 Le dernier jour",
           "Sourate an-Nasr descendit ; 'Umar et Ibn 'Abbâs (qu'Allah les agrée) comprirent la proximité de la mort (Sahih al-Bukhari : 4970). Divergence : on rapporte sa révélation à Minâ durant les jours de Tachrîq (al-Bayhaqî ; chaîne discutée).",
           ""],
          ["🎯 La leçon",
           "Le dernier sermon est une recommandation : les droits, les femmes, la vie, les biens, l'honneur, le Livre et la Sunna.",
           ""]
        ],
        [
          ["En quelle année eut lieu le pèlerinage d'adieu ?", ["An 9", "An 10", "An 11"]],
          ["Quel verset descendit le jour d'Arafa ?", ["Aujourd'hui J'ai parachevé votre religion", "Nous t'avons accordé une victoire éclatante", "Quand vient le secours d'Allah"]],
          ["À quoi recommanda-t-il de s'attacher ?", ["Aux biens et aux enfants", "Au Livre d'Allah (et à la Sunna)", "À la vie et à l'au-delà"]]
        ],
        [
          ["632", "L'intention du pèlerinage"],
          ["632", "Le sermon du 9 dhou al-hijja"],
          ["632", "Le verset de la perfection"],
          ["632", "Le sermon de Minâ"]
        ]
      ],
      es: [
        "La peregrinación de despedida: el último sermón",
        "La llanura de Arafa",
        "Du l-qi'da a du l-hiyya del año 10 (marzo de 632); salida de Medina los cinco últimos días de du l-qi'da (Sahih al-Bujari: 1545); Arafa un viernes (Sahih al-Bujari: 45)",
        "Comprender la peregrinación de despedida, el último sermón y el anuncio de la perfección de la religión.",
        "«¡Oh Alá, sé testigo!» Es también nuestra responsabilidad: transmitir este depósito. ¡Oh Alá! Concédenoslo. Amín.",
        [
          "Año 10",
          "Más de cien mil (número discutido)",
          "El sermón de Arafa",
          "Al-Maida 5:3",
          "Aferrarse al Libro de Alá",
          "La peregrinación de despedida"
        ],
        [
          ["🕋 La intención",
           "Fue su única peregrinación tras la emigración (Sahih al-Bujari: 1778). El número de peregrinos no se conoce con certeza; Yabir (que Alá esté complacido con él) dijo: la gente hasta donde alcanza la vista (Sahih Muslim: 1218). Las opiniones: 90 000, unos 114 000, 124 000, 144 000 (Sira). «Aprended de mí vuestros ritos; quizá no vuelva a peregrinar después de este año.» (Sahih Muslim: 1297). Discrepancia: ¿su peregrinación fue ifrad, tamattu o qiran? (Sahih al-Bujari: 1561, 1691; Sahih Muslim: 1211); Ibn al-Qayyim prefirió el qiran (Zad al-Maad).",
           ""],
          ["📢 El sermón de Arafa",
           "En el valle de Urna el 9 de du l-hiyya (Sahih Muslim: 1218): todo lo de la ignorancia está bajo mis pies; la sangre y la usura de la ignorancia (la usura de al-Abbas, que Alá esté complacido con él) quedan abolidas; temed a Alá respecto a las mujeres (Sahih Muslim: 1218). «Vuestras sangres, bienes y honores son sagrados» (Sahih al-Bujari: 67, 1739, en el sermón de Mina; «que el presente informe al ausente»). La repetición en voz alta por Rabia ibn Umayya viene de relatos de Sira (Ibn Ishaq). Precisión: el «último sermón» es un conjunto de lugares (Arafa y Mina) y de relatos, no un solo texto auténtico completo.",
           ""],
          ["📖 La aleya de la perfección",
           "«Hoy he perfeccionado para vosotros vuestra religión» (al-Maida 5:3), el día de Arafa, un viernes (Sahih al-Bujari: 45, 4606). Corrección: el llanto de Abu Bakr (que Alá esté complacido con él) por esta aleya no está probado con cadena auténtica; lloró por el sermón «un siervo fue puesto a elegir» (Sahih al-Bujari: 3654).",
           ""],
          ["🤲 La última recomendación",
           "«Os he dejado aquello que, si os aferráis a ello con firmeza, nunca os extraviaréis: el Libro de Alá.» (Sahih Muslim: 1218). El relato «el Libro y la Sunna» está en el Muwatta (balagan) y al-Mustadrak; los expertos discutieron su cadena y algunos la reforzaron con testimonios. La recomendación sobre «la gente de la casa» fue en Gadir Jum (Sahih Muslim: 2408), no en Arafa. Luego preguntó: «¿Qué diréis de mí?» Dijeron: «Has transmitido.» Levantó el dedo al cielo y dijo tres veces: «¡Oh Alá, sé testigo!» (Sahih Muslim: 1218)",
           ""],
          ["💔 El último día",
           "Descendió la sura an-Nasr; Umar e Ibn Abbas (que Alá esté complacido con ellos) comprendieron la cercanía del fin (Sahih al-Bujari: 4970). Discrepancia: se menciona su revelación en Mina durante los días de Tashriq (al-Bayhaqi; cadena discutida).",
           ""],
          ["🎯 La lección",
           "El último sermón es una recomendación: los derechos, las mujeres, la vida, los bienes, el honor, el Libro y la Sunna.",
           ""]
        ],
        [
          ["¿En qué año fue la peregrinación de despedida?", ["Año 9", "Año 10", "Año 11"]],
          ["¿Qué aleya descendió el día de Arafa?", ["Hoy he perfeccionado vuestra religión", "Te hemos dado una victoria clara", "Cuando llegue el auxilio de Alá"]],
          ["¿A qué recomendó aferrarse?", ["A los bienes y los hijos", "Al Libro de Alá (y la Sunna)", "A la vida y el más allá"]]
        ],
        [
          ["632", "La intención de la peregrinación"],
          ["632", "El sermón del 9 de du l-hiyya"],
          ["632", "La aleya de la perfección"],
          ["632", "El sermón de Mina"]
        ]
      ]
    },

    /* ═══════════════ DAY 30 — Wisal-e-Nabawi ﷺ ═══════════════ */
    30: {
      mr: [
        "नबी ﷺ यांचे निधन — रफीक-ए-आला यांची भेट",
        "मदिना",
        "सोमवार, रबीउल-अव्वल हिजरी ११ (जून इ.स. ६३२) — प्रसिद्ध मत: १२ रबीउल-अव्वल; तारखेत मतभेद पाहा",
        "नबी ﷺ यांचे शेवटचे दिवस, निधन आणि सहाबांच्या दुःखाची घटना समजून घेणे.",
        "जेव्हा आप ﷺ यांनी «अर-रफीकुल-आला» म्हटले तेव्हा मने तुटली. हे अल्लाह! जन्नतमध्ये त्यांची साथ नशीबात दे. आमीन.",
        [
          "हिजरी ११, सोमवार (१२ रबीउल-अव्वल प्रसिद्ध मत)",
          "वय वर्षे ६३ (सहीह मुस्लिम २३४८–२३४९)",
          "शेवटची नमाज़ अबू बक्र (र.अ.) यांनी पढवली",
          "«अल्लाहुम्मर-रफीकुल-आला»",
          "आयशा (र.अ.) यांच्या कक्षेत दफन"
        ],
        [
          ["📅 निधनाच्या तारखेत मतभेद",
           "अरफा शुक्रवारी होता (सहीह बुखारी ४५). जर झुलहिज्जा, मुहर्रम व सफर प्रत्येकी २९ किंवा ३० दिवस मानले तर रबीउल-अव्वलची पहिली तारीख रविवारपासून बुधवारपर्यंत येते, आणि या हिशोबाने १२ रबीउल-अव्वल सोमवार होत नाही. विद्वानांनी (फतहुल-बारी) यावर सूचना केली; मते १, २ व १२ तारखेची आहेत. प्रसिद्ध मत १२ रबीउल-अव्वल, सोमवार, पण त्यात मतभेद आहे.",
           ""],
          ["💔 आजार",
           "डोकेदुखी व तीव्र ताप (सहीह बुखारी ५६६६); पत्नींच्या परवानगीने आयशा (र.अ.) यांच्या कक्षेत (सहीह बुखारी १९८); «माझ्यावर सात न उघडलेल्या मशकांचे पाणी ओता» (सहीह बुखारी १९८); अबू बक्र (र.अ.) यांना इमामतीचा हुकूम (सहीह बुखारी ६६४). आजार सुमारे १३ दिवस (अर-रहीकुल-मख्तूम; मते १०–१४).",
           ""],
          ["🕌 शेवटची नमाज़",
           "थोडे हलके वाटल्यावर दोन माणसांच्या आधाराने मस्जिदीत आले (सहीह बुखारी ७१२–७१३). मतभेद: आयशा (र.अ.) यांनी एकाचे नाव अब्बास (र.अ.) सांगितले, दुसऱ्याचे नाही; इब्न अब्बास (र.अ.) म्हणाले ते अली (र.अ.) होते (सहीह बुखारी १९८, ६६५). अबू बक्र (र.अ.) मागे हटू लागले तेव्हा आप ﷺ यांनी थांबवले आणि त्यांच्या शेजारी बसले; अबू बक्र (र.अ.) नबी ﷺ यांचे अनुकरण करत आणि लोक अबू बक्र (र.अ.) यांचे (सहीह बुखारी ७१३). मतभेद: काही रिवायतींमध्ये नबी ﷺ यांनी बसून अबू बक्र (र.अ.) यांच्या मागे नमाज़ पढली (तिर्मिझी ३६२–३६३); विद्वानांनी ती वेगवेगळ्या नमाजांवर लावली (फतहुल-बारी). सोमवारी फजर: कक्षाचा पडदा उघडला, हसले, आणि अबू बक्र (र.अ.) मागे हटले तेव्हा खुणेने «नमाज़ पूर्ण करा» सांगून पडदा सोडला (सहीह बुखारी ६८०–६८१; सहीह मुस्लिम ४१९).",
           ""],
          ["🚪 वसीयती",
           "«अल्लाह यहुदी व ख्रिश्चनांवर शाप करो, त्यांनी आपल्या नबींच्या कबरी मस्जिदी बनवल्या» (सहीह बुखारी ४३५, ४३६); «जझीरतुल-अरबमधून मुश्रिकांना काढून टाका» (सहीह बुखारी ३०५३; सहीह मुस्लिम १६३७); «नमाज़ आणि आपल्या अधीन लोकांची (काळजी घ्या)» (सुनन अबी दाऊद ५१५६, अल्बानी: सहीह); अबू बक्र (र.अ.) यांच्या दाराशिवाय मस्जिदीचे सर्व दरवाजे बंद करा (सहीह बुखारी ४६७); «अल्लाहने एका बंद्याला पर्याय दिला» हा खुतबा, ज्यावर अबू बक्र (र.अ.) रडले (सहीह बुखारी ४६६, ३६५४); अन्सारांबद्दल वसीयत (सहीह बुखारी ३७९९). वारसा: न दिनार न दिरहम (सहीह मुस्लिम १६३५).",
           ""],
          ["💔 शेवटचे क्षण",
           "आयशा (र.अ.) यांच्या छातीवर टेकले; अब्दुर्रहमान बिन अबी बक्र (र.अ.) यांच्याकडे ताजी मिस्वाक होती; आयशा (र.अ.) यांनी ती चावून मऊ केली आणि आप ﷺ यांनी दात स्वच्छ केले; पाण्यात हात बुडवून चेहरा पुसला; «ला इलाहा इल्लल्लाह, मृत्यूच्या मोठ्या कठीणी आहेत»; नंतर हात उचलला: «अल्लाहुम्मगफिर ली वरहम्नी व अल्हिक्नी बिर-रफीकिल-आला»; हात पडला (सहीह बुखारी ४४४९, ४४४०; सहीह मुस्लिम २४४४). पर्याय दिल्याचा उल्लेख: सहीह बुखारी ४४३५–४४३७.",
           ""],
          ["😢 सहाबांचे दुःख",
           "आयशा (र.अ.): माझ्या कक्षेत, माझ्या पाळीच्या दिवशी, माझ्या छाती व गळ्याच्या दरम्यान (सहीह बुखारी ४४४६). फातिमा (र.अ.): «वडिलांच्या खेदाने! रबच्या हाकेला लब्बैक म्हटले; वडिलांच्या खेदाने! जन्नतुल-फिरदौस ज्यांचे ठिकाण आहे» (सहीह बुखारी ४४६२). उमर (र.अ.) यांनी निधन नाकारले; अबू बक्र (र.अ.) यांनी चेहरा उघडला, चुंबन दिले, «अल्लाह तुमच्यावर दोन मृत्यू एकत्र करणार नाही»; नंतर खुतबा दिला: जो मुहम्मद ﷺ ची उपासना करत होता तो गेला, आणि जो अल्लाहची उपासना करतो तो जिवंत आहे; आले-इमरान ३:१४४ वाचली (सहीह बुखारी ३६६७–३६६८). अझ-झुमर ३९:३० वाचणे सीरत (इब्न हिशाम) मधून आहे. उमर (र.अ.) सावरले.",
           ""],
          ["🕌 दफन",
           "स्नान: अली, फझल, कुसम, उसामा व शक्रान (र.अ.) (सुनन अबी दाऊद, इब्न माजा; काही मार्ग हसन); कपड्यांत स्नानाची घटना (अबू दाऊद ३१४१, अल्बानी: हसन). तीन पांढरी सुहुली वस्त्रे, न शर्ट न पगडी (सहीह बुखारी १२६४; सहीह मुस्लिम ९४१). सहाबांनी गटागटाने इमामाशिवाय नमाज़ पढली (इब्न माजा १६२८, अल्बानी: जईफ; सीरतमध्ये प्रसिद्ध). जिथे निधन झाले तिथेच दफन (तिर्मिझी १०१८, अल्बानी: सहीह); मंगळवारच्या रात्री (मुस्नद अहमद; सीरत).",
           ""],
          ["🌟 अल्लाहची साक्ष",
           "अत-तौबा ९:१२८ — तुमच्यातच एक रसूल आला, तुमचे त्रास त्यांना जड वाटतात, तुमच्या भल्याची तीव्र इच्छा, मोमिनांवर अत्यंत वात्सल्य व दया.",
           ""],
          ["🎯 बोध",
           "सुन्नतीवर चला, खरे प्रेम ठेवा आणि जन्नतमध्ये साथीची दुआ करा.",
           ""]
        ],
        [
          ["निधन कोणत्या हिजरी वर्षी झाले?", ["हिजरी १०", "हिजरी ११", "हिजरी १२"]],
          ["शेवटची नमाज़ कोणी पढवली?", ["अली (र.अ.)", "अबू बक्र (र.अ.)", "उमर (र.अ.)"]],
          ["शेवटची दुआ कोणती होती?", ["«अल्लाहुम्मर-रफीकुल-आला»", "«अल्लाहुम्मगफिर ली»", "«रब्बना आतिना»"]]
        ],
        [
          ["इ.स. ६३२", "आजार"],
          ["इ.स. ६३२", "मस्जिदीत शेवटची नमाज़"],
          ["इ.स. ६३२", "निधन"],
          ["इ.स. ६३२", "दफन"]
        ]
      ],
      ar: [
        "وفاة النبي ﷺ — لقاء الرفيق الأعلى",
        "المدينة",
        "الاثنين، ربيع الأول السنة الحادية عشرة (يونيو 632) — المشهور: 12 ربيع الأول؛ وانظر الخلاف في التاريخ",
        "فهم أيام النبي ﷺ الأخيرة، ووفاته، وحزن الصحابة.",
        "لما قال ﷺ «الرفيق الأعلى» انكسرت القلوب. اللهم ارزقنا صحبته في الجنة. آمين.",
        [
          "السنة الحادية عشرة، الاثنين (والمشهور 12 ربيع الأول)",
          "عمره الشريف 63 سنة (صحيح مسلم 2348–2349)",
          "آخر صلاة أمّهم فيها أبو بكر رضي الله عنه",
          "«اللهم الرفيق الأعلى»",
          "دُفن في حجرة عائشة رضي الله عنها"
        ],
        [
          ["📅 الخلاف في تاريخ الوفاة",
           "كان عرفة يوم الجمعة (صحيح البخاري 45). ولو جُعل ذو الحجة والمحرم وصفر تسعة وعشرين أو ثلاثين لكلٍّ، لكان أول ربيع الأول بين الأحد والأربعاء، وعلى هذا الحساب لا يكون 12 ربيع الأول يوم الاثنين. وقد نبه العلماء على ذلك (فتح الباري)؛ والأقوال: الأول والثاني والثاني عشر. والمشهور الثاني عشر يوم الاثنين، وفيه خلاف.",
           ""],
          ["💔 المرض",
           "صداع وحمّ شديد (صحيح البخاري 5666)؛ وفي حجرة عائشة رضي الله عنها بإذن أزواجه (صحيح البخاري 198)؛ «صبّوا عليّ من سبع قرب لم تُحلَّ أوكيتهن» (صحيح البخاري 198)؛ وأمر أبا بكر رضي الله عنه بالإمامة (صحيح البخاري 664). والمرض نحو ثلاثة عشر يومًا (الرحيق المختوم؛ والأقوال 10–14).",
           ""],
          ["🕌 الصلاة الأخيرة",
           "لما وجد خفة خرج بين رجلين إلى المسجد (صحيح البخاري 712–713). والخلاف: ذكرت عائشة رضي الله عنها اسم العباس رضي الله عنه لأحدهما ولم تذكر الآخر؛ وقال ابن عباس رضي الله عنه: هو علي رضي الله عنه (صحيح البخاري 198، 665). وتأخر أبو بكر رضي الله عنه فأمره ﷺ أن يثبت وجلس إلى جانبه؛ فكان أبو بكر رضي الله عنه يقتدي بالنبي ﷺ والناس يقتدون بأبي بكر (صحيح البخاري 713). والخلاف: في بعض الروايات صلى ﷺ قاعدًا خلف أبي بكر رضي الله عنه (الترمذي 362–363)؛ وحملها العلماء على صلاتين مختلفتين (فتح الباري). وفي فجر الاثنين: كشف ستر الحجرة وتبسم، وتأخر أبو بكر رضي الله عنه فأشار إليه ﷺ أن يتمّ الصلاة وأرخى الستر (صحيح البخاري 680–681؛ صحيح مسلم 419).",
           ""],
          ["🚪 الوصايا",
           "«لعن الله اليهود والنصارى، اتخذوا قبور أنبيائهم مساجد» (صحيح البخاري 435، 436)؛ «أخرجوا المشركين من جزيرة العرب» (صحيح البخاري 3053؛ صحيح مسلم 1637)؛ «الصلاة وما ملكت أيمانكم» (سنن أبي داود 5156، الألباني: صحيح)؛ «سدّوا كل الأبواب إلا باب أبي بكر» (صحيح البخاري 467)؛ وخطبة «إن الله خيّر عبدًا»، وبكى عندها أبو بكر رضي الله عنه (صحيح البخاري 466، 3654)؛ والوصية بالأنصار (صحيح البخاري 3799). والتركة: لا دينار ولا درهم (صحيح مسلم 1635).",
           ""],
          ["💔 اللحظات الأخيرة",
           "أسند ظهره إلى صدر عائشة رضي الله عنها؛ وكان عند عبد الرحمن بن أبي بكر رضي الله عنه سواك رطب؛ فمضغته عائشة رضي الله عنها ونظّف ﷺ أسنانه؛ ثم أدخل يده في الماء ومسح وجهه؛ وقال: «لا إله إلا الله، إن للموت سكرات»؛ ثم رفع يده: «اللهم اغفر لي وارحمني وألحقني بالرفيق الأعلى»؛ فسقطت يده (صحيح البخاري 4449، 4440؛ صحيح مسلم 2444). وذكر التخيير: صحيح البخاري 4435–4437.",
           ""],
          ["😢 حزن الصحابة",
           "عائشة رضي الله عنها: في حجرتي، في يومي، بين سحري ونحري (صحيح البخاري 4446). فاطمة رضي الله عنها: «واكرباه لكرب أباه! أجاب ربًّا دعاه؛ واكرباه لكرب أباه! جنة الفردوس مأواه» (صحيح البخاري 4462). وأنكر عمر رضي الله عنه الوفاة؛ فكشف أبو بكر رضي الله عنه وجهه وقبّله وقال: «لا يجمع الله عليك موتتين»؛ ثم خطب: من كان يعبد محمدًا ﷺ فقد مات، ومن كان يعبد الله فهو حي؛ وقرأ آل عمران 3:144 (صحيح البخاري 3667–3668). وقراءة الزمر 39:30 من السيرة (ابن هشام). فسكن عمر رضي الله عنه.",
           ""],
          ["🕌 الدفن",
           "الغسل: علي والفضل وقثم وأسامة وشقران رضي الله عنهم (سنن أبي داود، ابن ماجه؛ وبعض الطرق حسن)؛ والغسل في الثياب (أبو داود 3141، الألباني: حسن). ثلاثة أثواب سحولية بيض، لا قميص ولا عمامة (صحيح البخاري 1264؛ صحيح مسلم 941). وصلّى عليه الصحابة أفواجًا بلا إمام (ابن ماجه 1628، الألباني: ضعيف؛ ومشهور في السيرة). ودُفن حيث توفي (الترمذي 1018، الألباني: صحيح)؛ ليلة الأربعاء (مسند أحمد؛ سيرة).",
           ""],
          ["🌟 شهادة الله",
           "التوبة 9:128 — لقد جاءكم رسول من أنفسكم، عزيز عليه ما عنتم، حريص عليكم، بالمؤمنين رءوف رحيم.",
           ""],
          ["🎯 العبرة",
           "اتبع السنة، وأحبب محبة صادقة، واسأل الله صحبته في الجنة.",
           ""]
        ],
        [
          ["في أي سنة هجرية كانت الوفاة؟", ["العاشرة", "الحادية عشرة", "الثانية عشرة"]],
          ["من أمّ الصلاة الأخيرة؟", ["علي رضي الله عنه", "أبو بكر رضي الله عنه", "عمر رضي الله عنه"]],
          ["ما الدعاء الأخير؟", ["«اللهم الرفيق الأعلى»", "«اللهم اغفر لي»", "«ربنا آتنا»"]]
        ],
        [
          ["632", "المرض"],
          ["632", "الصلاة الأخيرة في المسجد"],
          ["632", "الوفاة"],
          ["632", "الدفن"]
        ]
      ],
      fr: [
        "La mort du Prophète ﷺ — la rencontre du Compagnon suprême",
        "Médine",
        "Lundi, rabî' al-awwal de l'an 11 (juin 632) — avis célèbre : 12 rabî' al-awwal ; voir la divergence de date",
        "Comprendre les derniers jours du Prophète ﷺ, sa mort et la douleur des Compagnons.",
        "Quand il ﷺ dit « ar-Rafîq al-A'lâ », les cœurs se brisèrent. Ô Allah ! Accorde-nous sa compagnie au Paradis. Âmîn.",
        [
          "An 11, un lundi (12 rabî' al-awwal selon l'avis célèbre)",
          "Son âge béni : 63 ans (Sahih Muslim : 2348-2349)",
          "La dernière prière fut dirigée par Abou Bakr (qu'Allah l'agrée)",
          "« Allâhumma ar-Rafîq al-A'lâ »",
          "Enterré dans la chambre de 'Â'icha (qu'Allah l'agrée)"
        ],
        [
          ["📅 Divergence sur la date",
           "Arafa tomba un vendredi (Sahih al-Bukhari : 45). Si dhou al-hijja, mouharram et safar font chacun 29 ou 30 jours, le 1er rabî' al-awwal tombe entre le dimanche et le mercredi, et selon ce calcul le 12 rabî' al-awwal n'est pas un lundi. Les savants l'ont signalé (Fath al-Bârî) ; les avis sont le 1er, le 2 et le 12. L'avis célèbre est le 12, un lundi, mais il est discuté.",
           ""],
          ["💔 La maladie",
           "Maux de tête et forte fièvre (Sahih al-Bukhari : 5666) ; dans la chambre de 'Â'icha (qu'Allah l'agrée) avec la permission de ses épouses (Sahih al-Bukhari : 198) ; « Versez sur moi sept outres dont les liens n'ont pas été défaits » (Sahih al-Bukhari : 198) ; il ordonna à Abou Bakr (qu'Allah l'agrée) de diriger la prière (Sahih al-Bukhari : 664). La maladie dura environ treize jours (Ar-Rahîq al-Makhtûm ; avis de 10 à 14).",
           ""],
          ["🕌 La dernière prière",
           "Se sentant un peu mieux, il sortit soutenu par deux hommes vers la mosquée (Sahih al-Bukhari : 712-713). Divergence : 'Â'icha (qu'Allah l'agrée) nomma al-'Abbâs (qu'Allah l'agrée) pour l'un des deux et pas l'autre ; Ibn 'Abbâs (qu'Allah l'agrée) dit que c'était 'Alî (qu'Allah l'agrée) (Sahih al-Bukhari : 198, 665). Abou Bakr (qu'Allah l'agrée) recula, mais il ﷺ l'en empêcha et s'assit à côté de lui ; Abou Bakr suivait le Prophète ﷺ et les gens suivaient Abou Bakr (Sahih al-Bukhari : 713). Divergence : dans certains récits, le Prophète ﷺ pria assis derrière Abou Bakr (qu'Allah l'agrée) (Tirmidhi 362-363) ; les savants les ont rapportés à deux prières différentes (Fath al-Bârî). À l'aube du lundi : il souleva le rideau de la chambre, sourit, et comme Abou Bakr reculait, il lui fit signe de terminer la prière et laissa retomber le rideau (Sahih al-Bukhari : 680-681 ; Sahih Muslim : 419).",
           ""],
          ["🚪 Les recommandations",
           "« Qu'Allah maudisse les Juifs et les chrétiens : ils ont pris les tombes de leurs prophètes pour lieux de culte » (Sahih al-Bukhari : 435, 436) ; « Expulsez les polythéistes de la péninsule arabique » (Sahih al-Bukhari : 3053 ; Sahih Muslim : 1637) ; « La prière et ce que possèdent vos mains » (Sunan Abi Dawud : 5156, al-Albani : sahih) ; « Fermez toutes les portes sauf celle d'Abou Bakr » (Sahih al-Bukhari : 467) ; le sermon « Allah a mis un serviteur au choix », sur lequel Abou Bakr (qu'Allah l'agrée) pleura (Sahih al-Bukhari : 466, 3654) ; la recommandation au sujet des Ansâr (Sahih al-Bukhari : 3799). Héritage : ni dinar ni dirham (Sahih Muslim : 1635).",
           ""],
          ["💔 Les derniers instants",
           "Il s'appuya contre la poitrine de 'Â'icha (qu'Allah l'agrée) ; 'Abd ar-Rahmân ibn Abî Bakr (qu'Allah l'agrée) avait un siwâk frais ; 'Â'icha le mâcha pour l'amollir et il ﷺ se nettoya les dents ; il plongea la main dans l'eau et passa sur son visage ; « Lâ ilâha illallâh, la mort a de grandes agonies » ; puis il leva la main : « Allâhumma-ghfir lî warhamnî wa alhiqnî bir-Rafîq al-A'lâ » ; et la main retomba (Sahih al-Bukhari : 4449, 4440 ; Sahih Muslim : 2444). Le récit du choix : Sahih al-Bukhari : 4435-4437.",
           ""],
          ["😢 La douleur des Compagnons",
           "'Â'icha (qu'Allah l'agrée) : dans ma chambre, mon jour, entre ma poitrine et ma gorge (Sahih al-Bukhari : 4446). Fâtima (qu'Allah l'agrée) : « Ô douleur de mon père ! Il a répondu à l'appel de son Seigneur ; ô douleur de mon père ! Le Paradis d'al-Firdaws est sa demeure » (Sahih al-Bukhari : 4462). 'Umar (qu'Allah l'agrée) nia la mort ; Abou Bakr (qu'Allah l'agrée) découvrit le visage, l'embrassa et dit : « Allah ne réunira pas sur toi deux morts » ; puis il prononça un sermon : qui adorait Mouhammad ﷺ, il est mort ; qui adore Allah, Il est vivant ; et il récita Âl 'Imrân 3:144 (Sahih al-Bukhari : 3667-3668). La récitation d'az-Zoumar 39:30 vient de la Sîra (Ibn Hichâm). 'Umar se calma.",
           ""],
          ["🕌 L'enterrement",
           "Le lavage : 'Alî, al-Fadl, Qoutham, Ousâma et Chaqrân (qu'Allah les agrée) (Sunan Abi Dawud, Ibn Mâjah ; certaines chaînes hasan) ; le lavage dans ses vêtements (Abou Dawud 3141, al-Albani : hasan). Trois pièces de tissu blanc de Sahoul, sans chemise ni turban (Sahih al-Bukhari : 1264 ; Sahih Muslim : 941). Les Compagnons prièrent en groupes sans imam (Ibn Mâjah 1628, al-Albani : faible ; célèbre dans la Sîra). Il fut enterré là où il mourut (Tirmidhi 1018, al-Albani : sahih) ; la nuit du mardi (Mousnad Ahmad ; Sîra).",
           ""],
          ["🌟 Le témoignage d'Allah",
           "At-Tawba 9:128 — Un Messager est venu à vous, issu de vous ; ce qui vous pèse lui pèse ; il est plein d'ardeur pour vous, et envers les croyants plein de bonté et de miséricorde.",
           ""],
          ["🎯 La leçon",
           "Suis la Sunna, aime d'un amour sincère, et demande la compagnie du Prophète ﷺ au Paradis.",
           ""]
        ],
        [
          ["En quelle année hégirienne eut lieu la mort ?", ["An 10", "An 11", "An 12"]],
          ["Qui dirigea la dernière prière ?", ["'Alî (qu'Allah l'agrée)", "Abou Bakr (qu'Allah l'agrée)", "'Umar (qu'Allah l'agrée)"]],
          ["Quelle fut la dernière invocation ?", ["« Allâhumma ar-Rafîq al-A'lâ »", "« Allâhumma-ghfir lî »", "« Rabbanâ âtinâ »"]]
        ],
        [
          ["632", "La maladie"],
          ["632", "La dernière prière à la mosquée"],
          ["632", "La mort"],
          ["632", "L'enterrement"]
        ]
      ],
      es: [
        "El fallecimiento del Profeta ﷺ: el encuentro con el Compañero Supremo",
        "Medina",
        "Lunes, rabi al-awwal del año 11 (junio de 632); opinión famosa: 12 de rabi al-awwal; véase la discrepancia de fecha",
        "Comprender los últimos días del Profeta ﷺ, su fallecimiento y el dolor de los Compañeros.",
        "Cuando ﷺ dijo «ar-Rafiq al-A'la», los corazones se rompieron. ¡Oh Alá! Concédenos su compañía en el Paraíso. Amín.",
        [
          "Año 11, un lunes (12 de rabi al-awwal según la opinión famosa)",
          "Su edad bendita: 63 años (Sahih Muslim: 2348-2349)",
          "La última oración la dirigió Abu Bakr (que Alá esté complacido con él)",
          "«Aláhumma ar-Rafiq al-A'la»",
          "Enterrado en la habitación de Aisha (que Alá esté complacido con ella)"
        ],
        [
          ["📅 Discrepancia sobre la fecha",
           "Arafa fue un viernes (Sahih al-Bujari: 45). Si du l-hiyya, Muharram y safar tienen cada uno 29 o 30 días, el 1 de rabi al-awwal cae entre el domingo y el miércoles, y según ese cálculo el 12 de rabi al-awwal no es lunes. Los sabios lo señalaron (Fath al-Bari); las opiniones son el 1, el 2 y el 12. La opinión famosa es el 12, un lunes, pero es discutida.",
           ""],
          ["💔 La enfermedad",
           "Dolor de cabeza y fiebre intensa (Sahih al-Bujari: 5666); en la habitación de Aisha (que Alá esté complacido con ella) con permiso de sus esposas (Sahih al-Bujari: 198); «Echadme agua de siete odres cuyos atados no se hayan desatado» (Sahih al-Bujari: 198); ordenó a Abu Bakr (que Alá esté complacido con él) dirigir la oración (Sahih al-Bujari: 664). La enfermedad duró unos trece días (Ar-Rahiq al-Majtum; opiniones de 10 a 14).",
           ""],
          ["🕌 La última oración",
           "Al sentirse algo mejor, salió apoyado en dos hombres hacia la mezquita (Sahih al-Bujari: 712-713). Discrepancia: Aisha (que Alá esté complacido con ella) nombró a al-Abbas (que Alá esté complacido con él) para uno de los dos y no para el otro; Ibn Abbas (que Alá esté complacido con él) dijo que era Ali (que Alá esté complacido con él) (Sahih al-Bujari: 198, 665). Abu Bakr (que Alá esté complacido con él) retrocedió, pero él ﷺ se lo impidió y se sentó a su lado; Abu Bakr seguía al Profeta ﷺ y la gente seguía a Abu Bakr (Sahih al-Bujari: 713). Discrepancia: en algunos relatos el Profeta ﷺ rezó sentado detrás de Abu Bakr (que Alá esté complacido con él) (Tirmidhi 362-363); los sabios los refirieron a dos oraciones distintas (Fath al-Bari). En el alba del lunes: levantó la cortina de la habitación, sonrió, y como Abu Bakr retrocedía, le indicó que completara la oración y dejó caer la cortina (Sahih al-Bujari: 680-681; Sahih Muslim: 419).",
           ""],
          ["🚪 Las recomendaciones",
           "«Que Alá maldiga a judíos y cristianos: tomaron las tumbas de sus profetas como lugares de culto» (Sahih al-Bujari: 435, 436); «Expulsad a los idólatras de la península arábiga» (Sahih al-Bujari: 3053; Sahih Muslim: 1637); «La oración y lo que poseen vuestras manos» (Sunan Abi Dawud: 5156, al-Albani: sahih); «Cerrad todas las puertas salvo la de Abu Bakr» (Sahih al-Bujari: 467); el sermón «Alá puso a un siervo a elegir», ante el cual Abu Bakr (que Alá esté complacido con él) lloró (Sahih al-Bujari: 466, 3654); la recomendación sobre los Ansar (Sahih al-Bujari: 3799). Herencia: ni dinar ni dirham (Sahih Muslim: 1635).",
           ""],
          ["💔 Los últimos instantes",
           "Se apoyó en el pecho de Aisha (que Alá esté complacido con ella); Abd ar-Rahman ibn Abi Bakr (que Alá esté complacido con él) tenía un siwak fresco; Aisha lo masticó para ablandarlo y él ﷺ se limpió los dientes; metió la mano en el agua y se pasó por el rostro; «La ilaha illa Alá, la muerte tiene grandes agonías»; luego levantó la mano: «Aláhumma-ghfir li warhamni wa alhiqni bir-Rafiq al-A'la»; y la mano cayó (Sahih al-Bujari: 4449, 4440; Sahih Muslim: 2444). El relato de la elección: Sahih al-Bujari: 4435-4437.",
           ""],
          ["😢 El dolor de los Compañeros",
           "Aisha (que Alá esté complacido con ella): en mi habitación, en mi día, entre mi pecho y mi garganta (Sahih al-Bujari: 4446). Fatima (que Alá esté complacido con ella): «¡Ay, la pena de mi padre! Respondió a la llamada de su Señor; ¡ay, la pena de mi padre! El Paraíso de al-Firdaws es su morada» (Sahih al-Bujari: 4462). Umar (que Alá esté complacido con él) negó la muerte; Abu Bakr (que Alá esté complacido con él) descubrió el rostro, lo besó y dijo: «Alá no reunirá en ti dos muertes»; luego pronunció un sermón: quien adoraba a Muhámmad ﷺ, ha muerto; quien adora a Alá, Él está vivo; y recitó Al Imran 3:144 (Sahih al-Bujari: 3667-3668). La recitación de az-Zumar 39:30 viene de la Sira (Ibn Hisham). Umar se serenó.",
           ""],
          ["🕌 El entierro",
           "El lavado: Ali, al-Fadl, Qusam, Usama y Shaqran (que Alá esté complacido con ellos) (Sunan Abi Dawud, Ibn Maya; algunas cadenas hasan); el lavado con su ropa (Abu Dawud 3141, al-Albani: hasan). Tres telas blancas de Sahul, sin camisa ni turbante (Sahih al-Bujari: 1264; Sahih Muslim: 941). Los Compañeros rezaron en grupos sin imán (Ibn Maya 1628, al-Albani: débil; famoso en la Sira). Fue enterrado donde murió (Tirmidhi 1018, al-Albani: sahih); la noche del martes (Musnad Ahmad; Sira).",
           ""],
          ["🌟 El testimonio de Alá",
           "At-Tawba 9:128: Os ha llegado un Mensajero de entre vosotros; le pesa lo que os aflige, se afana por vosotros y es con los creyentes compasivo y misericordioso.",
           ""],
          ["🎯 La lección",
           "Sigue la Sunna, ama con amor sincero y pide la compañía del Profeta ﷺ en el Paraíso.",
           ""]
        ],
        [
          ["¿En qué año hiyri falleció?", ["Año 10", "Año 11", "Año 12"]],
          ["¿Quién dirigió la última oración?", ["Ali (que Alá esté complacido con él)", "Abu Bakr (que Alá esté complacido con él)", "Umar (que Alá esté complacido con él)"]],
          ["¿Cuál fue la última súplica?", ["«Aláhumma ar-Rafiq al-A'la»", "«Aláhumma-ghfir li»", "«Rabbana atina»"]]
        ],
        [
          ["632", "La enfermedad"],
          ["632", "La última oración en la mezquita"],
          ["632", "El fallecimiento"],
          ["632", "El entierro"]
        ]
      ]
    },

    /* ═══════════════ DAY 31 — Shamail 1: qad, rang, chehra ═══════════════ */
    31: {
      mr: [
        "नबवी शमाइल (१) — उंची, रंग आणि तेजस्वी चेहरा",
        "मक्का व मदिना",
        "सहाबांची प्रत्यक्ष साक्ष",
        "इमाम तिर्मिझी (र.अ.) यांच्या «अश-शमाइल अल-मुहम्मदिया» मधून फक्त त्या रिवायती वाचणे ज्यांना अल्लामा अल्बानी (र.अ.) यांनी सहीह म्हटले, जेणेकरून नबी ﷺ उंची, रंग व चेहऱ्यात कसे होते हे कळेल.",
        "हे अल्लाह! आम्हाला आपल्या नबी ﷺ यांच्यावर खरे प्रेम आणि त्यांच्या सुन्नतींवर चालण्याची तौफीक दे. आणि आपल्या डोळ्यांनी त्यांचे दर्शन नशीबात दे. आमीन.",
        [
          "मध्यम उंची, न उंच न ठेंगणे",
          "चेहरा चंद्रासारखा तेजस्वी",
          "खांद्यांमध्ये रुंदी",
          "डोके मोठे, तळवे मांसल",
          "चालताना जोराने, थोडे पुढे झुकून",
          "फक्त सहीह रिवायती (अल्बानी)"
        ],
        [
          ["📖 शमाइल काय आहेत? आणि आमचा नियम काय",
           "«शमाइल» हे शमीला याचे अनेकवचन आहे, म्हणजे नबी ﷺ यांचे बाह्य रूप, सवयी व आचार. इमाम तिर्मिझी (र.अ.) (मृत्यू २७९ हि.) यांनी या विषयावर «अश-शमाइल अल-मुहम्मदिया» लिहिले. आम्ही मक्तबा शामिलातून «मुख्तसरुश-शमाइल» (अल्लामा अल्बानी यांचे तहकीक) उघडले, ज्यात प्रत्येक हदीवर दर्जा लिहिला आहे. या धड्यात व पुढच्या तीन दिवसांत फक्त त्या हदीसी घेतल्या आहेत ज्यांवर «सहीह» लिहिले आहे; जईफ व हसन रिवायती समाविष्ट केलेल्या नाहीत.",
           "स्रोत: मुख्तसरुश-शमाइल अल-मुहम्मदिया, तहकीक अल्बानी (मक्तबा शामिला, किताब क्र. ७००)"],
          ["⚠️ हिंद बिन अबी हाला (र.अ.) यांची लांब रिवायत का नाही?",
           "नबी ﷺ यांच्या हुल्याची एक फार प्रसिद्ध लांब रिवायत हजरत हिंद बिन अबी हाला (र.अ.) यांच्या नावाने सांगितली जाते («फख्मन मुफखमन यतलअलउ वज्हुहु...»). अल्लामा अल्बानी (र.अ.) यांनी «मुख्तसरुश-शमाइल» मध्ये तिला «जईफ जिद्दन» (फार कमजोर) म्हटले आहे (हदीस क्र. ६, पृ. १८), म्हणून आम्ही ती या अभ्यासक्रमात घेतली नाही. त्याचप्रमाणे इब्न अब्बास (र.अ.) यांच्याकडून «दातांतून प्रकाश निघणे» ही रिवायतही जईफ जिद्दन आहे (हदीस क्र. १३, पृ. २९).",
           "स्रोत: मुख्तसरुश-शमाइल, हदीस ६ (पृ. १८) व हदीस १३ (पृ. २९)"],
          ["🧍 उंची व शरीर",
           "सहीह रिवायतींनुसार नबी ﷺ मध्यम उंचीचे होते; न फार उंच, न ठेंगणे. शरीर सुंदर, दोन्ही खांद्यांमध्ये रुंदी, डोके मोठे, तळवे व पाय मांसल होते, आणि छातीपासून नाभीपर्यंत केसांची बारीक रेषा होती. चालताना शक्तीने थोडे पुढे झुकून चालत, जणू उंचीवरून उतरत आहेत.",
           "स्रोत: अश-शमाइल हदीस १, २, ३, ४ (पृ. १३–१५)"],
          ["🌕 रंग व चेहरा",
           "सहाबांनी तेजस्वी चेहऱ्याची चंद्राशी तुलना केली; जाबिर बिन समरा (र.अ.) यांनी चांदण्या रात्री आप ﷺ यांना व चंद्राला पाहून म्हटले की आप ﷺ मला चंद्रापेक्षाही सुंदर वाटले. बरा (र.अ.) यांना विचारले गेले की चेहरा तलवारीसारखा होता का? ते म्हणाले: नाही, चंद्रासारखा होता. रंगाबद्दल अनस (र.अ.) यांनी «अस्मरुल-लौन» (गव्हाळ) म्हटले, तर अबू हुरैरा (र.अ.) व अबू तुफैल (र.अ.) यांनी «अब्यद» (गोरा, तेजस्वी) सांगितले. या सहीह रिवायतींमध्ये विद्वान असे एकत्र करतात की रंग तेजस्वी व स्वच्छ होता, प्रवास व ऊनामुळे हलकी लालसर/गव्हाळ छटा होती; न चुन्यासारखा पांढरा, न गडद गव्हाळ.",
           "स्रोत: अश-शमाइल हदीस २, ८, ९, १०, १२ (पृ. १३–२७)"],
          ["⚖️ रिवायतींमधील मतभेद व त्यांचा मेळ",
           "पहिले: आयुष्य — अनस (र.अ.) यांच्या रिवायतीत (अश-शमाइल हदीस १; सहीह मुस्लिम २३४७) चाळिशीत नबुव्वत, मक्केत १० व मदिन्यात १० वर्षे, आणि निधन साठीत; बहुसंख्यांच्या मते मक्केत १३ वर्षे (सहीह बुखारी ३८५१) व निधन ६३ व्या वर्षी (सहीह मुस्लिम २३४९). विद्वानांनी अनस (र.अ.) यांची रिवायत अंदाज किंवा हिशोबातील कमतरता मानली. दुसरे: रंग — अनस (र.अ.) यांच्या एका रिवायतीत «अझहरुल-लौन» म्हणजे तेजस्वी रंग (सहीह मुस्लिम २३३०) व दुसरीत «अस्मर»; अबू हुरैरा (र.अ.) «चांदीसारखा» व अबू तुफैल (र.अ.) «गोरा सुंदर» म्हणतात. विद्वान एकत्र करतात: तेजस्वी स्वच्छ रंग ज्यात ऊन व प्रवासामुळे हलकी लालसर छटा येते; न चुन्यासारखा पांढरा, न गडद गव्हाळ. तिसरे: «अश्कलुल-ऐन» (सहीह मुस्लिम २३३९) चा अर्थ: लांब भेगेचा डोळा (सिमाकची तफसीर) किंवा डोळ्याच्या पांढऱ्यात लाल धागे; बहुतेक विद्वानांनी (काजी इयाज, नववी) दुसऱ्या अर्थाला प्राधान्य दिले.",
           "स्रोत: अश-शमाइल हदीस १, २; सहीह बुखारी ३८५१; सहीह मुस्लिम २३३०, २३३९, २३४७, २३४९"]
        ],
        [
          ["अनस (र.अ.)", "अनस (र.अ.) म्हणतात: रसूलुल्लाह ﷺ न फार उंच होते न ठेंगणे, न पूर्णपणे चुन्यासारखे पांढरे, न गडद गव्हाळ, न पूर्ण गुंगुरलेले व न पूर्ण सरळ केसांचे. चाळिशीच्या वयात अल्लाहने त्यांना नबी केले; मक्केत दहा वर्षे व मदिन्यात दहा वर्षे राहिले; नंतर (अनस (र.अ.) यांच्या या रिवायतीनुसार) साठ वर्षांच्या शेवटी अल्लाहने त्यांचे निधन केले, आणि त्यांच्या डोक्यात व दाढीत वीस केसही पांढरे नव्हते.", "अश-शमाइल अल-मुहम्मदिया, हदीस क्र. १, पृ. १३ — अल्बानी: सहीह"],
          ["अनस (र.अ.)", "अनस (र.अ.): रसूलुल्लाह ﷺ मध्यम उंचीचे होते, न उंच न ठेंगणे, शरीर सुंदर होते, केस न जास्त गुंगुरलेले न पूर्ण सरळ, रंग गव्हाळ होता, आणि चालताना ते थोडे पुढे झुकून चालत.", "अश-शमाइल अल-मुहम्मदिया, हदीस क्र. २, पृ. १३ — अल्बानी: सहीह"],
          ["बरा बिन आझिब (र.अ.)", "बरा (र.अ.): रसूलुल्लाह ﷺ मध्यम उंचीचे होते, दोन्ही खांद्यांमध्ये रुंदी होती, दाट केस कानाच्या पाळीपर्यंत होते, आप ﷺ यांनी लाल जोडा परिधान केला होता; मी आप ﷺ यांच्यापेक्षा सुंदर काहीही कधी पाहिले नाही.", "अश-शमाइल अल-मुहम्मदिया, हदीस क्र. ३, पृ. १४ — अल्बानी: सहीह"],
          ["अली (र.अ.)", "अली (र.अ.): नबी ﷺ न फार उंच होते न ठेंगणे; तळवे व पाय मांसल, डोके मोठे, सांध्यांची हाडे मोठी व मजबूत, छातीपासून नाभीपर्यंत केसांची लांब बारीक रेषा होती; चालताना इतक्या जोराने चालत जणू उंचीवरून उतरत आहेत; मी आप ﷺ यांच्यापूर्वी व नंतर आप ﷺ यांच्यासारखा कोणीही पाहिले नाही.", "अश-शमाइल अल-मुहम्मदिया, हदीस क्र. ४, पृ. १५ — अल्बानी: सहीह"],
          ["जाबिर बिन समरा (र.अ.)", "जाबिर बिन समरा (र.अ.): रसूलुल्लाह ﷺ यांचे तेजस्वी तोंड रुंद होते, डोळ्यांची भेग लांब होती, आणि टाचांवर मांस कमी होते. (वर्णनकर्ता सिमाक (र.अ.) यांच्याकडून या तीनही शब्दांची हीच तफसीर आली आहे.)", "अश-शमाइल अल-मुहम्मदिया, हदीस क्र. ७, पृ. २६ — अल्बानी: सहीह"],
          ["जाबिर बिन समरा (र.अ.)", "जाबिर बिन समरा (र.अ.): मी चांदण्या रात्री रसूलुल्लाह ﷺ यांना पाहिले, आप ﷺ यांनी लाल जोडा परिधान केला होता; मी कधी आप ﷺ यांना पाहत होतो कधी चंद्राला, तर आप ﷺ मला चंद्रापेक्षाही सुंदर वाटले.", "अश-शमाइल अल-मुहम्मदिया, हदीस क्र. ८, पृ. २६ — अल्बानी: सहीह"],
          ["बरा बिन आझिब (र.अ.)", "एका माणसाने बरा (र.अ.) यांना विचारले: रसूलुल्लाह ﷺ यांचा चेहरा तलवारीसारखा होता का? ते म्हणाले: नाही, तर चंद्रासारखा होता.", "अश-शमाइल अल-मुहम्मदिया, हदीस क्र. ९, पृ. २६ — अल्बानी: सहीह"],
          ["अबू हुरैरा (र.अ.)", "अबू हुरैरा (र.अ.): रसूलुल्लाह ﷺ असे तेजस्वी गोरे होते जणू चांदीतून घडवले गेले आहेत, आणि केस मऊ व हलके वळणदार होते.", "अश-शमाइल अल-मुहम्मदिया, हदीस क्र. १०, पृ. २७ — अल्बानी: सहीह"],
          ["जाबिर बिन अब्दुल्लाह (र.अ.)", "जाबिर बिन अब्दुल्लाह (र.अ.): रसूलुल्लाह ﷺ म्हणाले: माझ्यासमोर नबी सादर केले गेले; मूसा (अ.स.) सडपातळ शरीराचे होते जणू शनूआ टोळीच्या लोकांपैकी; ईसा बिन मरियम (अ.स.) यांच्याशी सर्वाधिक साम्य मला उर्वा बिन मसऊद यांच्यात आढळले; इब्राहीम (अ.स.) यांच्याशी सर्वाधिक साम्य तुमच्या साथीदाराचे (म्हणजे स्वतः आप ﷺ) आहे; आणि जिब्राईल (अ.स.) यांच्याशी सर्वाधिक साम्य दिह्या (कल्बी (र.अ.)) यांचे आहे.", "अश-शमाइल अल-मुहम्मदिया, हदीस क्र. ११, पृ. २७ — अल्बानी: सहीह"],
          ["अबू तुफैल आमिर बिन वासिला (र.अ.)", "अबू तुफैल (र.अ.): मी नबी ﷺ यांना पाहिले आहे आणि (आता) पृथ्वीवर माझ्याशिवाय कोणीही उरले नाही ज्याने आप ﷺ यांना पाहिले असेल. मी म्हटले: मला आप ﷺ यांचे हुल्ये सांगा. ते म्हणाले: आप ﷺ गोरे, आकर्षक (तेजस्वी) आणि मध्यम शरीराचे होते.", "अश-शमाइल अल-मुहम्मदिया, हदीस क्र. १२, पृ. २७ — अल्बानी: सहीह"]
        ],
        [
          "शमाइल अल-मुहम्मदिया, इमाम तिर्मिझी (र.अ.) — मुख्तसरुश-शमाइल, तहकीक अल्लामा अल्बानी: हदीस १, २, ३, ४, ७, ८, ९, १०, ११, १२ (सर्वांवर «सहीह»)",
          "जईफ ठरवलेल्या रिवायती (समाविष्ट नाहीत): हदीस ५ (जईफ), हदीस ६ हिंद बिन अबी हाला (र.अ.) (जईफ जिद्दन), हदीस १३ (जईफ जिद्दन)",
          "मतभेदाच्या टिपेसाठी अधिक संदर्भ: सहीह बुखारी ३८५१; सहीह मुस्लिम २३३०, २३३९, २३४७, २३४९"
        ],
        [
          ["नबी ﷺ यांच्या चेहऱ्याची बरा (र.अ.) यांनी कोणाशी तुलना केली?", ["तलवारीशी", "चंद्राशी", "सूर्याशी"]],
          ["हिंद बिन अबी हाला (र.अ.) यांच्या लांब रिवायतीवर अल्बानी यांचा हुकूम काय?", ["सहीह", "हसन", "जईफ जिद्दन"]],
          ["शेवटी नबी ﷺ यांना पाहणारे व हुल्ये सांगणारे सहाबी कोण?", ["अबू तुफैल (र.अ.)", "अनस (र.अ.)", "जाबिर (र.अ.)"]]
        ],
        []
      ],
      ar: [
        "الشمائل النبوية (١) — القد واللون والوجه الأزهر",
        "مكة والمدينة",
        "شهادة الصحابة رضي الله عنهم عن معاينة",
        "أن نقرأ من «الشمائل المحمدية» للإمام الترمذي رحمه الله فقط ما حكم عليه العلامة الألباني رحمه الله بالصحة، لنعلم كيف كان النبي ﷺ في قده ولونه ووجهه.",
        "اللهم ارزقنا محبة صادقة لنبيك ﷺ واتباع سنته، وارزقنا النظر إلى وجهه الشريف. آمين.",
        [
          "ربعة، ليس بالطويل ولا بالقصير",
          "وجهه كالقمر في الإشراق",
          "بعيد ما بين المنكبين",
          "ضخم الرأس، شثن الكفين",
          "إذا مشى تكفأ من صبب",
          "الأحاديث الصحيحة فقط (الألباني)"
        ],
        [
          ["📖 ما هي الشمائل؟ وما الأصل الذي التزمناه",
           "«الشمائل» جمع شميلة، وهي هيئته الظاهرة ﷺ وعاداته وأخلاقه. وقد ألّف الإمام الترمذي رحمه الله (ت 279هـ) في هذا الباب «الشمائل المحمدية». وقد فتحنا من المكتبة الشاملة «مختصر الشمائل» (تحقيق العلامة الألباني) وفيه درجة كل حديث. وفي هذا الدرس والأيام الثلاثة التالية أُخذت فقط الأحاديث المكتوب عليها «صحيح»، ولم تُدرج الروايات الضعيفة أو الحسنة.",
           "المصدر: مختصر الشمائل المحمدية، تحقيق الألباني (المكتبة الشاملة، كتاب رقم 700)"],
          ["⚠️ لماذا لم تُدرج رواية هند بن أبي هالة الطويلة؟",
           "تُروى في صفته ﷺ رواية طويلة مشهورة عن هند بن أبي هالة رضي الله عنه («فخمًا مفخمًا يتلألأ وجهه...»). وقد حكم عليها العلامة الألباني في «مختصر الشمائل» بأنها «ضعيف جدًّا» (حديث رقم 6، ص 18)، فلذلك لم نُدرجها في هذا الدرس. وكذلك رواية «النور من أسنانه» عن ابن عباس رضي الله عنه ضعيف جدًّا أيضًا (حديث رقم 13، ص 29).",
           "المصدر: مختصر الشمائل، حديث 6 (ص 18) وحديث 13 (ص 29)"],
          ["🧍 القد والجسم",
           "في الروايات الصحيحة كان النبي ﷺ ربعة، لا طويلًا ولا قصيرًا. وكان حسن الجسم، بعيد ما بين المنكبين، ضخم الرأس، شثن الكفين والقدمين، وبين صدره وسرته شعر رقيق يجري كالخط. وكان إذا مشى مشى بقوة وتكفؤًا كأنما ينحط من صبب.",
           "المصدر: الشمائل حديث 1، 2، 3، 4 (ص 13–15)"],
          ["🌕 اللون والوجه",
           "شبّه الصحابة رضي الله عنهم وجهه الشريف بالقمر؛ وقال جابر بن سمرة رضي الله عنه وقد نظر إليه ﷺ وإلى القمر في ليلة مقمرة: إنه كان أحسن عندي من القمر. وسُئل البراء رضي الله عنه: أكان وجهه مثل السيف؟ قال: لا، بل مثل القمر. وأما اللون فقال أنس رضي الله عنه: «أسمر اللون»، وقال أبو هريرة وأبو الطفيل رضي الله عنهما: «أبيض» (مشرق). ويجمع العلماء بين هذه الصحاح بأن اللون كان مشرقًا صافيًا، وفيه حمرة أو سمرة خفيفة من السفر والشمس؛ لا كالجص أبيض، ولا أدهم غامقًا.",
           "المصدر: الشمائل حديث 2، 8، 9، 10، 12 (ص 13–27)"],
          ["⚖️ الخلاف بين الروايات والجمع بينها",
           "أولًا: العمر — في رواية أنس (الشمائل حديث 1؛ صحيح مسلم 2347) أنه بُعث على رأس أربعين، وأقام بمكة عشرًا وبالمدينة عشرًا، وتوفي على رأس ستين؛ وعند الجمهور أقام بمكة ثلاث عشرة (صحيح البخاري 3851) وتوفي على رأس ثلاث وستين (صحيح مسلم 2349). وحمل العلماء رواية أنس على التقدير أو النقص في الحساب. ثانيًا: اللون — في رواية لأنس «أزهر اللون» أي مشرق (صحيح مسلم 2330)، وفي أخرى «أسمر»؛ وقال أبو هريرة «كأنما صيغ من فضة»، وأبو الطفيل «أبيض مليح». ويجمع العلماء: لون مشرق صافٍ تعتريه حمرة خفيفة من الشمس والسفر؛ لا كالجص ولا أدهم. ثالثًا: «أشكل العين» (صحيح مسلم 2339): طويل شق العين (تفسير سماك) أو عروق حمر في بياضها؛ ورجّح أكثر العلماء (القاضي عياض والنووي) المعنى الثاني.",
           "المصدر: الشمائل حديث 1، 2؛ صحيح البخاري 3851؛ صحيح مسلم 2330، 2339، 2347، 2349"]
        ],
        [
          ["أنس رضي الله عنه", "قال أنس رضي الله عنه: لم يكن رسول الله ﷺ بالطويل البائن ولا بالقصير، ولا بالأبيض الأمهق ولا بالآدم، ولا بالجعد القطط ولا بالسبط. بعثه الله على رأس أربعين سنة، فأقام بمكة عشرًا وبالمدينة عشرًا، وتوفاه الله (في هذه الرواية) على رأس ستين، وليس في رأسه ولحيته عشرون شعرة بيضاء.", "الشمائل المحمدية، حديث رقم 1، ص 13 — الألباني: صحيح"],
          ["أنس رضي الله عنه", "قال أنس رضي الله عنه: كان رسول الله ﷺ ربعة، ليس بالطويل ولا بالقصير، حسن الجسم، وكان شعره ليس بجعد ولا سبط، أسمر اللون، وإذا مشى تكفأ.", "الشمائل المحمدية، حديث رقم 2، ص 13 — الألباني: صحيح"],
          ["البراء بن عازب رضي الله عنه", "قال البراء رضي الله عنه: كان رسول الله ﷺ رجلًا مربوعًا، بعيد ما بين المنكبين، عظيم الجمة إلى شحمة أذنيه، عليه حلة حمراء، ما رأيت شيئًا قط أحسن منه.", "الشمائل المحمدية، حديث رقم 3، ص 14 — الألباني: صحيح"],
          ["علي رضي الله عنه", "قال علي رضي الله عنه: لم يكن النبي ﷺ بالطويل ولا بالقصير، شثن الكفين والقدمين، ضخم الرأس، ضخم الكراديس، طويل المسربة؛ وإذا مشى تكفأ تكفؤًا كأنما ينحط من صبب؛ لم أر قبله ولا بعده مثله ﷺ.", "الشمائل المحمدية، حديث رقم 4، ص 15 — الألباني: صحيح"],
          ["جابر بن سمرة رضي الله عنه", "قال جابر بن سمرة رضي الله عنه: كان رسول الله ﷺ ضليع الفم، أشكل العين، منهوس العقب. (وهذا تفسير الراوي سماك لهذه الألفاظ الثلاثة.)", "الشمائل المحمدية، حديث رقم 7، ص 26 — الألباني: صحيح"],
          ["جابر بن سمرة رضي الله عنه", "قال جابر بن سمرة رضي الله عنه: رأيت رسول الله ﷺ في ليلة إضحيان وعليه حلة حمراء، فجعلت أنظر إليه وإلى القمر، فلهو عندي أحسن من القمر.", "الشمائل المحمدية، حديث رقم 8، ص 26 — الألباني: صحيح"],
          ["البراء بن عازب رضي الله عنه", "سأل رجل البراء رضي الله عنه: أكان وجه رسول الله ﷺ مثل السيف؟ قال: لا، بل مثل القمر.", "الشمائل المحمدية، حديث رقم 9، ص 26 — الألباني: صحيح"],
          ["أبو هريرة رضي الله عنه", "قال أبو هريرة رضي الله عنه: كان رسول الله ﷺ أبيض كأنما صيغ من فضة، رجل الشعر.", "الشمائل المحمدية، حديث رقم 10، ص 27 — الألباني: صحيح"],
          ["جابر بن عبد الله رضي الله عنه", "قال جابر بن عبد الله رضي الله عنه: قال رسول الله ﷺ: عُرض عليّ الأنبياء؛ فإذا موسى عليه السلام ضرب من الرجال كأنه من رجال شنوءة، ورأيت عيسى بن مريم عليه السلام فإذا أقرب من رأيت به شبهًا عروة بن مسعود، ورأيت إبراهيم عليه السلام فإذا أقرب من رأيت به شبهًا صاحبكم (يعني نفسه)، ورأيت جبريل عليه السلام فإذا أقرب من رأيت به شبهًا دحية.", "الشمائل المحمدية، حديث رقم 11، ص 27 — الألباني: صحيح"],
          ["أبو الطفيل عامر بن واثلة رضي الله عنه", "قال أبو الطفيل رضي الله عنه: رأيت النبي ﷺ وما بقي على وجه الأرض أحد رآه غيري. قلت: صفه لي. قال: كان أبيض مليحًا مقصدًا.", "الشمائل المحمدية، حديث رقم 12، ص 27 — الألباني: صحيح"]
        ],
        [
          "الشمائل المحمدية للإمام الترمذي — مختصر الشمائل، تحقيق العلامة الألباني: الأحاديث 1، 2، 3، 4، 7، 8، 9، 10، 11، 12 (كلها «صحيح»)",
          "الروايات المحكوم عليها بالضعف (لم تُدرج): حديث 5 (ضعيف)، حديث 6 لهند بن أبي هالة (ضعيف جدًّا)، حديث 13 (ضعيف جدًّا)",
          "لمزيد من المراجع في ملاحظة الخلاف: صحيح البخاري 3851؛ صحيح مسلم 2330، 2339، 2347، 2349"
        ],
        [
          ["بمن شبّه البراء رضي الله عنه وجه النبي ﷺ؟", ["بالسيف", "بالقمر", "بالشمس"]],
          ["ما حكم الألباني على رواية هند بن أبي هالة الطويلة؟", ["صحيح", "حسن", "ضعيف جدًّا"]],
          ["من آخر من رأى النبي ﷺ ووصف هيئته؟", ["أبو الطفيل رضي الله عنه", "أنس رضي الله عنه", "جابر رضي الله عنه"]]
        ],
        []
      ],
      fr: [
        "Les Shamâ'il du Prophète (1) — la taille, le teint et le visage radieux",
        "La Mecque et Médine",
        "Le témoignage oculaire des Compagnons",
        "Lire, dans « Ach-Chamâ'il al-Muhammadiyya » de l'imam at-Tirmidhi, uniquement les récits jugés authentiques par Allama al-Albani, afin de savoir comment le Prophète ﷺ était de taille, de teint et de visage.",
        "Ô Allah ! Accorde-nous un amour sincère pour Ton Prophète ﷺ et la force de suivre sa sunna, et accorde-nous de le contempler de nos yeux. Âmîn.",
        [
          "De taille moyenne, ni grand ni petit",
          "Un visage éclatant comme la lune",
          "Les épaules larges",
          "La tête grande, les paumes charnues",
          "Il marchait avec force, légèrement penché",
          "Seuls les hadiths authentiques (al-Albani)"
        ],
        [
          ["📖 Que sont les Shamâ'il ? Et notre règle",
           "« Ach-Chamâ'il » est le pluriel de chamîla : son apparence extérieure ﷺ, ses habitudes et son caractère. L'imam at-Tirmidhi (mort en 279 H) composa sur ce sujet « Ach-Chamâ'il al-Muhammadiyya ». Nous avons ouvert dans la Maktaba Chamila le « Moukhtasar ach-Chamâ'il » (édité par Allama al-Albani), où le degré de chaque hadith est indiqué. Dans cette leçon et les trois suivantes, seuls les hadiths marqués « sahih » ont été retenus ; les récits faibles ou hasan n'y figurent pas.",
           "Source : Moukhtasar ach-Chamâ'il al-Muhammadiyya, éd. al-Albani (Maktaba Chamila, livre n° 700)"],
          ["⚠️ Pourquoi le long récit de Hind ibn Abî Hâla n'est-il pas inclus ?",
           "Un long récit très célèbre sur la description du Prophète ﷺ est rapporté sous le nom de Hind ibn Abî Hâla (qu'Allah l'agrée) (« fakhman moufkhama, yatala'la'ou wajhouhou... »). Allama al-Albani l'a jugé « da'îf jiddan » (très faible) dans le « Moukhtasar ach-Chamâ'il » (hadith n° 6, p. 18) ; nous ne l'avons donc pas inclus. De même, le récit d'Ibn 'Abbâs sur « la lumière sortant de ses dents » est très faible (hadith n° 13, p. 29).",
           "Source : Moukhtasar ach-Chamâ'il, hadith 6 (p. 18) et hadith 13 (p. 29)"],
          ["🧍 La taille et le corps",
           "Selon les récits authentiques, le Prophète ﷺ était de taille moyenne, ni très grand ni petit. Son corps était beau, ses épaules larges, sa tête grande, ses paumes et ses pieds charnus, et un fin duvet descendait de sa poitrine jusqu'au nombril. En marchant, il avançait avec force, légèrement penché en avant, comme s'il descendait d'une pente.",
           "Source : Ach-Chamâ'il, hadiths 1, 2, 3, 4 (p. 13-15)"],
          ["🌕 Le teint et le visage",
           "Les Compagnons comparèrent son visage béni à la lune ; Jâbir ibn Samoura, l'ayant regardé ﷺ puis la lune par une nuit claire, dit qu'il était à ses yeux plus beau que la lune. On demanda à al-Barâ' : son visage était-il comme une épée ? Il dit : non, comme la lune. Pour le teint, Anas dit « asmar » (teint clair légèrement hâlé), tandis qu'Abou Hourayra et Abou at-Toufayl dirent « abyad » (clair, lumineux). Les savants concilient ces récits authentiques : le teint était clair et pur, avec une légère rougeur ou hâle dû aux voyages et au soleil ; ni blanc comme la chaux, ni brun foncé.",
           "Source : Ach-Chamâ'il, hadiths 2, 8, 9, 10, 12 (p. 13-27)"],
          ["⚖️ La divergence des récits et leur conciliation",
           "Premièrement : l'âge — dans le récit d'Anas (Ach-Chamâ'il hadith 1 ; Sahih Muslim 2347), il fut envoyé à quarante ans, resta dix ans à La Mecque et dix à Médine, et mourut à soixante ans ; pour la majorité, il resta treize ans à La Mecque (Sahih al-Bukhari 3851) et mourut à soixante-trois ans (Sahih Muslim 2349). Les savants ont rapporté le récit d'Anas à une estimation ou à un manque dans le calcul. Deuxièmement : le teint — un récit d'Anas dit « azhar al-lawn » (teint éclatant) (Sahih Muslim 2330), un autre « asmar » ; Abou Hourayra dit « comme façonné d'argent » et Abou at-Toufayl « clair et beau ». Les savants concilient : un teint clair et pur avec une légère rougeur due au soleil et aux voyages. Troisièmement : « achkal al-'ayn » (Sahih Muslim 2339) signifie : l'œil fendu longuement (selon Simâk) ou des veines rouges dans le blanc de l'œil ; la plupart des savants (al-Qâdî 'Iyâd, an-Nawawî) ont préféré le second sens.",
           "Source : Ach-Chamâ'il hadiths 1, 2 ; Sahih al-Bukhari 3851 ; Sahih Muslim 2330, 2339, 2347, 2349"]
        ],
        [
          ["Anas (qu'Allah l'agrée)", "Anas (qu'Allah l'agrée) dit : Le Messager d'Allah ﷺ n'était ni très grand ni petit, ni blanc comme la chaux ni brun foncé, ni aux cheveux très crépus ni tout à fait lisses. Allah l'envoya à quarante ans ; il resta dix ans à La Mecque et dix ans à Médine ; puis Allah le rappela (selon ce récit) à soixante ans, et il n'y avait pas vingt cheveux blancs dans sa tête et sa barbe.", "Ach-Chamâ'il al-Muhammadiyya, hadith n° 1, p. 13 — al-Albani : sahih"],
          ["Anas (qu'Allah l'agrée)", "Anas (qu'Allah l'agrée) dit : Le Messager d'Allah ﷺ était de taille moyenne, ni grand ni petit ; son corps était beau ; ses cheveux n'étaient ni très crépus ni lisses ; son teint était clair légèrement hâlé ; et quand il marchait, il se penchait légèrement en avant.", "Ach-Chamâ'il al-Muhammadiyya, hadith n° 2, p. 13 — al-Albani : sahih"],
          ["Al-Barâ' ibn 'Âzib (qu'Allah l'agrée)", "Al-Barâ' (qu'Allah l'agrée) dit : Le Messager d'Allah ﷺ était de taille moyenne, les épaules larges, les cheveux abondants jusqu'au lobe de l'oreille ; il portait un habit rouge ; je n'ai jamais rien vu de plus beau que lui.", "Ach-Chamâ'il al-Muhammadiyya, hadith n° 3, p. 14 — al-Albani : sahih"],
          ["'Alî (qu'Allah l'agrée)", "'Alî (qu'Allah l'agrée) dit : Le Prophète ﷺ n'était ni grand ni petit ; ses paumes et ses pieds étaient charnus, sa tête grande, ses articulations fortes ; un fin duvet descendait de sa poitrine jusqu'au nombril ; quand il marchait, il avançait avec une telle force qu'on eût dit qu'il descendait d'une pente ; je n'ai jamais vu, avant ni après lui, quelqu'un comme lui ﷺ.", "Ach-Chamâ'il al-Muhammadiyya, hadith n° 4, p. 15 — al-Albani : sahih"],
          ["Jâbir ibn Samoura (qu'Allah l'agrée)", "Jâbir ibn Samoura (qu'Allah l'agrée) dit : La bouche du Messager d'Allah ﷺ était large, ses yeux fendus longuement, et ses talons peu charnus. (C'est l'explication que le transmetteur Simâk a donnée de ces trois termes.)", "Ach-Chamâ'il al-Muhammadiyya, hadith n° 7, p. 26 — al-Albani : sahih"],
          ["Jâbir ibn Samoura (qu'Allah l'agrée)", "Jâbir ibn Samoura (qu'Allah l'agrée) dit : J'ai vu le Messager d'Allah ﷺ par une nuit claire, portant un habit rouge ; je me mis à le regarder puis à regarder la lune, et il était à mes yeux plus beau que la lune.", "Ach-Chamâ'il al-Muhammadiyya, hadith n° 8, p. 26 — al-Albani : sahih"],
          ["Al-Barâ' ibn 'Âzib (qu'Allah l'agrée)", "Un homme demanda à al-Barâ' (qu'Allah l'agrée) : Le visage du Messager d'Allah ﷺ était-il comme une épée ? Il dit : Non, il était comme la lune.", "Ach-Chamâ'il al-Muhammadiyya, hadith n° 9, p. 26 — al-Albani : sahih"],
          ["Abou Hourayra (qu'Allah l'agrée)", "Abou Hourayra (qu'Allah l'agrée) dit : Le Messager d'Allah ﷺ était d'un blanc lumineux, comme s'il avait été façonné d'argent, et ses cheveux étaient souples et légèrement ondulés.", "Ach-Chamâ'il al-Muhammadiyya, hadith n° 10, p. 27 — al-Albani : sahih"],
          ["Jâbir ibn 'Abdillâh (qu'Allah l'agrée)", "Jâbir ibn 'Abdillâh (qu'Allah l'agrée) dit : Le Messager d'Allah ﷺ dit : On m'a présenté les prophètes ; Mûsâ (paix sur lui) était de constitution fine, comme s'il était des gens de la tribu de Chanou'a ; 'Issâ ibn Maryam (paix sur lui) : le plus ressemblant que j'aie vu est 'Ourwa ibn Mas'oûd ; Ibrâhîm (paix sur lui) : le plus ressemblant est votre compagnon (c'est-à-dire lui-même) ; et Jibrîl (paix sur lui) : le plus ressemblant est Dihya (al-Kalbî).", "Ach-Chamâ'il al-Muhammadiyya, hadith n° 11, p. 27 — al-Albani : sahih"],
          ["Abou at-Toufayl 'Âmir ibn Wâthila (qu'Allah l'agrée)", "Abou at-Toufayl (qu'Allah l'agrée) dit : J'ai vu le Prophète ﷺ, et il ne reste plus sur la terre personne qui l'ait vu excepté moi. Je dis : décris-le-moi. Il dit : Il était clair de teint, beau et de taille moyenne.", "Ach-Chamâ'il al-Muhammadiyya, hadith n° 12, p. 27 — al-Albani : sahih"]
        ],
        [
          "Ach-Chamâ'il al-Muhammadiyya de l'imam at-Tirmidhi — Moukhtasar ach-Chamâ'il, éd. Allama al-Albani : hadiths 1, 2, 3, 4, 7, 8, 9, 10, 11, 12 (tous « sahih »)",
          "Récits jugés faibles (non inclus) : hadith 5 (faible), hadith 6 de Hind ibn Abî Hâla (très faible), hadith 13 (très faible)",
          "Autres références pour la note sur la divergence : Sahih al-Bukhari 3851 ; Sahih Muslim 2330, 2339, 2347, 2349"
        ],
        [
          ["À quoi al-Barâ' (qu'Allah l'agrée) compara-t-il le visage du Prophète ﷺ ?", ["À une épée", "À la lune", "Au soleil"]],
          ["Quel est le jugement d'al-Albani sur le long récit de Hind ibn Abî Hâla ?", ["Sahih", "Hasan", "Très faible"]],
          ["Qui fut le dernier Compagnon à avoir vu le Prophète ﷺ et à décrire sa personne ?", ["Abou at-Toufayl (qu'Allah l'agrée)", "Anas (qu'Allah l'agrée)", "Jâbir (qu'Allah l'agrée)"]]
        ],
        []
      ],
      es: [
        "Los Shamail del Profeta (1): la estatura, el color y el rostro radiante",
        "La Meca y Medina",
        "El testimonio directo de los Compañeros",
        "Leer, de «Ash-Shamail al-Muhammadiyya» del imán at-Tirmidhi, solo los relatos que Allama al-Albani declaró auténticos, para saber cómo era el Profeta ﷺ en estatura, color y rostro.",
        "¡Oh Alá! Concédenos un amor sincero por Tu Profeta ﷺ y la fuerza de seguir su sunna, y concédenos contemplarlo con nuestros ojos. Amín.",
        [
          "De estatura media, ni alto ni bajo",
          "Un rostro radiante como la luna",
          "Los hombros anchos",
          "La cabeza grande, las palmas carnosas",
          "Caminaba con fuerza, ligeramente inclinado",
          "Solo los hadices auténticos (al-Albani)"
        ],
        [
          ["📖 ¿Qué son los Shamail? Y nuestra regla",
           "«Ash-Shamail» es el plural de shamila: su apariencia exterior ﷺ, sus costumbres y su carácter. El imán at-Tirmidhi (m. 279 H) compuso sobre este tema «Ash-Shamail al-Muhammadiyya». Abrimos en la Maktaba Shamila el «Mujtasar ash-Shamail» (editado por Allama al-Albani), donde consta el grado de cada hadiz. En esta lección y en las tres siguientes solo se tomaron los hadices marcados «sahih»; no se incluyeron los relatos débiles ni los hasan.",
           "Fuente: Mujtasar ash-Shamail al-Muhammadiyya, ed. al-Albani (Maktaba Shamila, libro n.º 700)"],
          ["⚠️ ¿Por qué no se incluye el largo relato de Hind ibn Abi Hala?",
           "Un relato muy famoso sobre la descripción del Profeta ﷺ se transmite a nombre de Hind ibn Abi Hala (que Alá esté complacido con él) («fajman mujmama, yatala'la'u wayhuhu...»). Allama al-Albani lo calificó de «da'if yiddan» (muy débil) en el «Mujtasar ash-Shamail» (hadiz n.º 6, p. 18), por eso no lo incluimos en este curso. Igualmente, el relato de Ibn Abbas sobre «la luz que salía de sus dientes» es muy débil (hadiz n.º 13, p. 29).",
           "Fuente: Mujtasar ash-Shamail, hadiz 6 (p. 18) y hadiz 13 (p. 29)"],
          ["🧍 La estatura y el cuerpo",
           "Según los relatos auténticos, el Profeta ﷺ era de estatura media, ni muy alto ni bajo. Su cuerpo era hermoso, los hombros anchos, la cabeza grande, las palmas y los pies carnosos, y un vello fino descendía del pecho hasta el ombligo. Al caminar avanzaba con fuerza, ligeramente inclinado hacia delante, como si bajara de una cuesta.",
           "Fuente: Ash-Shamail, hadices 1, 2, 3, 4 (p. 13-15)"],
          ["🌕 El color y el rostro",
           "Los Compañeros compararon su rostro bendito con la luna; Yabir ibn Samura, mirándolo ﷺ y luego a la luna en una noche clara, dijo que era para él más hermoso que la luna. Se preguntó a al-Bara: ¿era su rostro como una espada? Dijo: no, como la luna. Sobre el color, Anas dijo «asmar» (claro con leve moreno), mientras que Abu Hurayra y Abu at-Tufayl dijeron «abyad» (claro, luminoso). Los sabios concilian estos relatos auténticos: el color era claro y puro, con un leve rubor o moreno por los viajes y el sol; ni blanco como la cal, ni moreno oscuro.",
           "Fuente: Ash-Shamail, hadices 2, 8, 9, 10, 12 (p. 13-27)"],
          ["⚖️ La discrepancia de los relatos y su conciliación",
           "Primero: la edad — en el relato de Anas (Ash-Shamail hadiz 1; Sahih Muslim 2347) fue enviado a los cuarenta, permaneció diez años en La Meca y diez en Medina, y murió a los sesenta; para la mayoría permaneció trece años en La Meca (Sahih al-Bujari 3851) y murió a los sesenta y tres (Sahih Muslim 2349). Los sabios refirieron el relato de Anas a una estimación o a una falta en el cálculo. Segundo: el color — un relato de Anas dice «azhar al-lawn» (color radiante) (Sahih Muslim 2330), otro «asmar»; Abu Hurayra dice «como forjado en plata» y Abu at-Tufayl «claro y hermoso». Los sabios concilian: color claro y puro con leve rubor por el sol y los viajes. Tercero: «ashkal al-ayn» (Sahih Muslim 2339) significa: ojo de hendidura larga (según Simak) o venas rojas en el blanco del ojo; la mayoría de los sabios (al-Qadi Iyad, an-Nawawi) prefirieron el segundo sentido.",
           "Fuente: Ash-Shamail hadices 1, 2; Sahih al-Bujari 3851; Sahih Muslim 2330, 2339, 2347, 2349"]
        ],
        [
          ["Anas (que Alá esté complacido con él)", "Anas (que Alá esté complacido con él) dijo: El Mensajero de Alá ﷺ no era muy alto ni bajo, ni blanco como la cal ni moreno oscuro, ni de cabello muy rizado ni completamente liso. Alá lo envió a los cuarenta años; permaneció diez años en La Meca y diez en Medina; luego Alá lo llamó (según este relato) a los sesenta, y no había veinte cabellos blancos en su cabeza y su barba.", "Ash-Shamail al-Muhammadiyya, hadiz n.º 1, p. 13; al-Albani: sahih"],
          ["Anas (que Alá esté complacido con él)", "Anas (que Alá esté complacido con él) dijo: El Mensajero de Alá ﷺ era de estatura media, ni alto ni bajo; su cuerpo era hermoso; su cabello no era muy rizado ni liso; su color era claro con leve moreno; y al caminar se inclinaba ligeramente hacia delante.", "Ash-Shamail al-Muhammadiyya, hadiz n.º 2, p. 13; al-Albani: sahih"],
          ["Al-Bara ibn Azib (que Alá esté complacido con él)", "Al-Bara (que Alá esté complacido con él) dijo: El Mensajero de Alá ﷺ era de estatura media, los hombros anchos, el cabello abundante hasta el lóbulo de la oreja; llevaba un traje rojo; nunca vi nada más hermoso que él.", "Ash-Shamail al-Muhammadiyya, hadiz n.º 3, p. 14; al-Albani: sahih"],
          ["Ali (que Alá esté complacido con él)", "Ali (que Alá esté complacido con él) dijo: El Profeta ﷺ no era alto ni bajo; sus palmas y pies eran carnosos, la cabeza grande, las articulaciones fuertes; un vello fino descendía del pecho hasta el ombligo; al caminar avanzaba con tal fuerza que parecía bajar de una cuesta; nunca vi antes ni después a alguien como él ﷺ.", "Ash-Shamail al-Muhammadiyya, hadiz n.º 4, p. 15; al-Albani: sahih"],
          ["Yabir ibn Samura (que Alá esté complacido con él)", "Yabir ibn Samura (que Alá esté complacido con él) dijo: La boca del Mensajero de Alá ﷺ era ancha, sus ojos de hendidura larga, y sus talones poco carnosos. (Esta es la explicación que el transmisor Simak dio de estos tres términos.)", "Ash-Shamail al-Muhammadiyya, hadiz n.º 7, p. 26; al-Albani: sahih"],
          ["Yabir ibn Samura (que Alá esté complacido con él)", "Yabir ibn Samura (que Alá esté complacido con él) dijo: Vi al Mensajero de Alá ﷺ en una noche clara, llevando un traje rojo; me puse a mirarlo y luego a la luna, y él era para mí más hermoso que la luna.", "Ash-Shamail al-Muhammadiyya, hadiz n.º 8, p. 26; al-Albani: sahih"],
          ["Al-Bara ibn Azib (que Alá esté complacido con él)", "Un hombre preguntó a al-Bara (que Alá esté complacido con él): ¿Era el rostro del Mensajero de Alá ﷺ como una espada? Dijo: No, era como la luna.", "Ash-Shamail al-Muhammadiyya, hadiz n.º 9, p. 26; al-Albani: sahih"],
          ["Abu Hurayra (que Alá esté complacido con él)", "Abu Hurayra (que Alá esté complacido con él) dijo: El Mensajero de Alá ﷺ era de un blanco luminoso, como si hubiera sido forjado en plata, y su cabello era suave y ligeramente ondulado.", "Ash-Shamail al-Muhammadiyya, hadiz n.º 10, p. 27; al-Albani: sahih"],
          ["Yabir ibn Abdalah (que Alá esté complacido con él)", "Yabir ibn Abdalah (que Alá esté complacido con él) dijo: El Mensajero de Alá ﷺ dijo: Me fueron presentados los profetas; Musa (la paz sea con él) era de constitución delgada, como si fuera de la tribu de Shanua; a Isa ibn Maryam (la paz sea con él) el más parecido que vi fue Urwa ibn Masud; a Ibrahim (la paz sea con él) el más parecido es vuestro compañero (es decir, él mismo); y a Yibril (la paz sea con él) el más parecido es Dihya (al-Kalbi).", "Ash-Shamail al-Muhammadiyya, hadiz n.º 11, p. 27; al-Albani: sahih"],
          ["Abu at-Tufayl Amir ibn Wazila (que Alá esté complacido con él)", "Abu at-Tufayl (que Alá esté complacido con él) dijo: Vi al Profeta ﷺ, y no queda en la faz de la tierra nadie que lo haya visto sino yo. Dije: descríbemelo. Dijo: Era de tez clara, hermoso y de cuerpo medio.", "Ash-Shamail al-Muhammadiyya, hadiz n.º 12, p. 27; al-Albani: sahih"]
        ],
        [
          "Ash-Shamail al-Muhammadiyya del imán at-Tirmidhi; Mujtasar ash-Shamail, ed. Allama al-Albani: hadices 1, 2, 3, 4, 7, 8, 9, 10, 11, 12 (todos «sahih»)",
          "Relatos declarados débiles (no incluidos): hadiz 5 (débil), hadiz 6 de Hind ibn Abi Hala (muy débil), hadiz 13 (muy débil)",
          "Otras referencias para la nota sobre la discrepancia: Sahih al-Bujari 3851; Sahih Muslim 2330, 2339, 2347, 2349"
        ],
        [
          ["¿A qué comparó al-Bara (que Alá esté complacido con él) el rostro del Profeta ﷺ?", ["A una espada", "A la luna", "Al sol"]],
          ["¿Cuál es el juicio de al-Albani sobre el largo relato de Hind ibn Abi Hala?", ["Sahih", "Hasan", "Muy débil"]],
          ["¿Quién fue el último Compañero en ver al Profeta ﷺ y describir su persona?", ["Abu at-Tufayl (que Alá esté complacido con él)", "Anas (que Alá esté complacido con él)", "Yabir (que Alá esté complacido con él)"]]
        ],
        []
      ]
    }

  }
};
