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
    }

  }
};
