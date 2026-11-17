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
    }

  }
};
