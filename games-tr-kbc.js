/* games-tr-kbc.js — Maratib-e-Ilm (30 din × 10 sawal) ke SAWAL aur JAWAB
   मराठी / العربية / Français / Español mein.
   Key = games.html ke KBC array ka bilkul wahi Roman jumla (sawal aur options).
   Jo lafz yahan na ho wahan English dikhta hai (games-extra.js ka GT()).
   ⚠️ Numbers ("5", "2.5%") ka tarjuma nahi hota — wo sab zubaanoN mein wahi rehte hain. */
(function () {
  var X = window.FQ_GAMES_TR = window.FQ_GAMES_TR || {};
  function Q(k, mr, ar, fr, es) { X[k] = { mr: mr, ar: ar, fr: fr, es: es }; }

  /* ================= DAY 1 ================= */
  Q("Islam ke kitne arkaan hain?", "इस्लामचे किती स्तंभ आहेत?", "كم عدد أركان الإسلام؟", "Combien de piliers l’islam a-t-il ?", "¿Cuántos pilares tiene el islam?");
  Q("Namaz din mein kitni baar farz hai?", "दिवसातून किती वेळा नमाज़ फर्ज आहे?", "كم مرة تُفرض الصلاة في اليوم؟", "Combien de fois par jour la prière est-elle obligatoire ?", "¿Cuántas veces al día es obligatoria la oración?");
  Q("Quran kis Nabi par nazil hua?", "कुरआन कोणत्या नबीवर अवतरले?", "على أي نبي أُنزل القرآن؟", "Sur quel prophète le Coran a-t-il été révélé ?", "¿Sobre qué profeta fue revelado el Corán?");
  Q("Roza kis mahine mein farz hai?", "रोज़ा कोणत्या महिन्यात फर्ज आहे?", "في أي شهر يُفرض الصيام؟", "En quel mois le jeûne est-il obligatoire ?", "¿En qué mes es obligatorio el ayuno?");
  Q("Qibla kahan hai?", "किबला कुठे आहे?", "أين القبلة؟", "Où est la Qibla ?", "¿Dónde está la Qibla?");
  Q("Kaaba kis shehar mein hai?", "काबा कोणत्या शहरात आहे?", "في أي مدينة تقع الكعبة؟", "Dans quelle ville se trouve la Kaaba ?", "¿En qué ciudad está la Kaaba?");
  Q("Zakat kitne hisse par farz hai?", "जकात किती भागावर फर्ज आहे?", "كم مقدار الزكاة المفروض؟", "Quelle part est due au titre de la zakat ?", "¿Qué proporción se debe de zakat?");
  Q("Pehle Nabi kaun the?", "पहिले नबी कोण होते?", "من أول الأنبياء؟", "Qui fut le premier prophète ?", "¿Quién fue el primer profeta?");
  Q("Fajr ki farz rak'at kitni hain?", "फज्रच्या फर्ज रकअती किती आहेत?", "كم عدد ركعات الفرض في الفجر؟", "Combien de rak’as obligatoires dans le Fajr ?", "¿Cuántas rak’as obligatorias hay en el Fayr?");
  Q("Quran mein kitni Surah hain?", "कुरआनमध्ये किती सूरती आहेत?", "كم عدد سور القرآن؟", "Combien de sourates le Coran contient-il ?", "¿Cuántas suras tiene el Corán?");

  /* ================= DAY 2 ================= */
  Q("Quran ki pehli Surah kaun si hai?", "कुरआनची पहिली सूरत कोणती आहे?", "ما أول سورة في القرآن؟", "Quelle est la première sourate du Coran ?", "¿Cuál es la primera sura del Corán?");
  Q("Bismillah mein Allah ke kul kitne naam hain?", "बिस्मिल्लाहमध्ये अल्लाहची एकूण किती नावे आहेत?", "كم عدد أسماء الله في البسملة إجمالًا؟", "Combien de noms d’Allah y a-t-il au total dans la Basmala ?", "¿Cuántos nombres de Allah hay en total en la Basmala?");
  Q("Quran kis zaban mein nazil hua?", "कुरआन कोणत्या भाषेत अवतरले?", "بأي لغة نزل القرآن؟", "En quelle langue le Coran a-t-il été révélé ?", "¿En qué lengua fue revelado el Corán?");
  Q("Juma ki namaz kis din farz hai?", "जुम्म्याची नमाज़ कोणत्या दिवशी फर्ज आहे?", "في أي يوم تُفرض صلاة الجمعة؟", "Quel jour la prière du vendredi est-elle obligatoire ?", "¿En qué día es obligatoria la oración del viernes?");
  Q("Maghrib ki farz rak'at kitni?", "मगरिबच्या फर्ज रकअती किती?", "كم ركعات فرض المغرب؟", "Combien de rak’as obligatoires au Maghrib ?", "¿Cuántas rak’as obligatorias en el Magrib?");
  Q("Eid ki namaz kitni rak'at hoti hai?", "ईदची नमाज़ किती रकअती असते?", "كم ركعة في صلاة العيد؟", "Combien de rak’as compte la prière de l’Aïd ?", "¿Cuántas rak’as tiene la oración del Eid?");
  Q("Kashti kis Nabi ne banai?", "नाव कोणत्या नबीने बनवली?", "أي نبي صنع السفينة؟", "Quel prophète a construit l’arche ?", "¿Qué profeta construyó el arca?");
  Q("Zuhr ki farz rak'at kitni?", "झुहरच्या फर्ज रकअती किती?", "كم ركعات فرض الظهر؟", "Combien de rak’as obligatoires au Dhuhr ?", "¿Cuántas rak’as obligatorias en el Dhuhr?");
  Q("Pehle Khalifa kaun the?", "पहिले खलीफा कोण होते?", "من أول الخلفاء؟", "Qui fut le premier calife ?", "¿Quién fue el primer califa?");
  Q("Asr ki farz rak'at kitni?", "अस्रच्या फर्ज रकअती किती?", "كم ركعات فرض العصر؟", "Combien de rak’as obligatoires à l’Asr ?", "¿Cuántas rak’as obligatorias en el Asr?");

  /* ================= DAY 3 ================= */
  Q("Isha ki farz rak'at kitni?", "इशाच्या फर्ज रकअती किती?", "كم ركعات فرض العشاء؟", "Combien de rak’as obligatoires à l’Isha ?", "¿Cuántas rak’as obligatorias en el Isha?");
  Q("Nabi ﷺ ki pehli biwi kaun thin?", "नबी ﷺ यांची पहिली पत्नी कोण होती?", "من أول زوجات النبي ﷺ؟", "Qui fut la première épouse du Prophète ﷺ ?", "¿Quién fue la primera esposa del Profeta ﷺ?");
  Q("Pehli Wahy kis ghaar mein hui?", "पहिली वही कोणत्या गुहेत झाली?", "في أي غار نزلت أول وحي؟", "Dans quelle grotte la première révélation est-elle venue ?", "¿En qué cueva llegó la primera revelación?");
  Q("Machhli ne kis Nabi ko nigal liya?", "माशीने कोणत्या नबीला गिळले?", "أي نبي ابتلعه الحوت؟", "Quel prophète fut avalé par le poisson ?", "¿A qué profeta lo tragó el pez?");
  Q("Quran ki sabse choti Surah?", "कुरआनची सर्वात लहान सूरत?", "ما أقصر سورة في القرآن؟", "Quelle est la plus courte sourate du Coran ?", "¿Cuál es la sura más corta del Corán?");
  Q("Hazrat Fatima (RA) ke walid kaun?", "हजरत फातिमा (रज़ि.) यांचे वालिद कोण?", "من والد فاطمة (رض)؟", "Qui est le père de Fatima (RA) ?", "¿Quién es el padre de Fátima (RA)?");
  Q("Hazrat Fatima (RA) ke shauhar kaun?", "हजरत फातिमा (रज़ि.) यांचे पती कोण?", "من زوج فاطمة (رض)؟", "Qui est l’époux de Fatima (RA) ?", "¿Quién es el esposo de Fátima (RA)?");
  Q("Pehli Wahy mein kaunsi Surah ki aayat?", "पहिल्या वहीत कोणत्या सूरतीची आयत होती?", "آية أي سورة كانت في أول وحي؟", "D’quelle sourate était le verset de la première révélation ?", "¿De qué sura era el versículo de la primera revelación?");
  Q("Fajr ki sunnat rak'at kitni?", "फज्रच्या सुन्नत रकअती किती?", "كم ركعات السنة في الفجر؟", "Combien de rak’as de sunna au Fajr ?", "¿Cuántas rak’as de sunna en el Fayr?");
  Q("Hazrat Hamza (RA) Nabi ﷺ ke kya the?", "हजरत हमजा (रज़ि.) नबी ﷺ यांचे काय होते?", "ما صلة حمزة (رض) بالنبي ﷺ؟", "Quel lien Hamza (RA) avait-il avec le Prophète ﷺ ?", "¿Qué parentesco tenía Hamza (RA) con el Profeta ﷺ?");

  /* ================= DAY 4 ================= */
  Q("Hazrat Abbas (RA) Nabi ﷺ ke kya the?", "हजरत अब्बास (रज़ि.) नबी ﷺ यांचे काय होते?", "ما صلة العباس (رض) بالنبي ﷺ؟", "Quel lien Abbas (RA) avait-il avec le Prophète ﷺ ?", "¿Qué parentesco tenía Abbas (RA) con el Profeta ﷺ?");
  Q("Maghrib ki sunnat rak'at kitni?", "मगरिबच्या सुन्नत रकअती किती?", "كم ركعات السنة في المغرب؟", "Combien de rak’as de sunna au Maghrib ?", "¿Cuántas rak’as de sunna en el Magrib?");
  Q("Pehli azan kisne di?", "पहिली अज़ान कोणी दिली?", "من أذّن أول مرة؟", "Qui a prononcé le premier adhan ?", "¿Quién dio el primer adhan?");
  Q("Zakat kis par farz hai?", "जकात कोणावर फर्ज आहे?", "على من تجب الزكاة؟", "Sur qui la zakat est-elle obligatoire ?", "¿Sobre quién es obligatoria la zakat?");
  Q("Hajj kis par farz hai?", "हज कोणावर फर्ज आहे?", "على من يجب الحج؟", "Sur qui le pèlerinage est-il obligatoire ?", "¿Sobre quién es obligatoria la peregrinación?");
  Q("Roza kis par farz hai?", "रोज़ा कोणावर फर्ज आहे?", "على من يجب الصيام؟", "Sur qui le jeûne est-il obligatoire ?", "¿Sobre quién es obligatorio el ayuno?");
  Q("Nabi ﷺ ki wafat kis umar mein hui?", "नबी ﷺ यांचे निधन कोणत्या वयात झाले?", "في أي عمر توفي النبي ﷺ؟", "À quel âge le Prophète ﷺ est-il décédé ?", "¿A qué edad falleció el Profeta ﷺ?");
  Q("Nabi ﷺ ko Nabuwat kis umar mein mili?", "नबी ﷺ यांना नुबुव्वत कोणत्या वयात मिळाली?", "في أي عمر بُعث النبي ﷺ؟", "À quel âge le Prophète ﷺ a-t-il reçu la prophétie ?", "¿A qué edad recibió el Profeta ﷺ la profecía?");
  Q("Hazrat Aisha (RA) ke walid kaun?", "हजरत आइशा (रज़ि.) यांचे वालिद कोण?", "من والد عائشة (رض)؟", "Qui est le père de Aisha (RA) ?", "¿Quién es el padre de Aisha (RA)?");
  Q("Hazrat Ibrahim (AS) ne kis ke saath Kaaba ki buniyad uthayi?", "हजरत इब्राहीम (अ.स.) यांनी कोणासोबत काबाची पायाभरणी केली?", "مع من رفع إبراهيم (ع) قواعد الكعبة؟", "Avec qui Ibrahim (AS) a-t-il élevé les fondations de la Kaaba ?", "¿Con quién levantó Ibrahim (AS) los cimientos de la Kaaba?");

  /* ================= DAY 5 ================= */
  Q("Surah Al-Fatiha mein kitni aayat?", "सूरत अल-फातिहामध्ये किती आयती आहेत?", "كم عدد آيات سورة الفاتحة؟", "Combien de versets compte sourate Al-Fatiha ?", "¿Cuántos versículos tiene la sura Al-Fatiha?");
  Q("Surah Al-Ikhlas mein kitni aayat?", "सूरत अल-इखलासमध्ये किती आयती आहेत?", "كم عدد آيات سورة الإخلاص؟", "Combien de versets compte sourate Al-Ikhlas ?", "¿Cuántos versículos tiene la sura Al-Ijlas?");
  Q("Quran mein kitne Juz hain?", "कुरआनमध्ये किती जुज़ आहेत?", "كم عدد أجزاء القرآن؟", "Combien de juz le Coran compte-t-il ?", "¿Cuántos yuz tiene el Corán?");
  Q("Quran ki sabse badi Surah?", "कुरआनची सर्वात मोठी सूरत?", "ما أطول سورة في القرآن؟", "Quelle est la plus longue sourate du Coran ?", "¿Cuál es la sura más larga del Corán?");
  Q("Quran mein kitne Manzil hain?", "कुरआनमध्ये किती मंज़िले आहेत?", "كم عدد منازل القرآن؟", "Combien de manzils le Coran compte-t-il ?", "¿Cuántos manziles tiene el Corán?");
  Q("Surah An-Nas mein kitni aayat?", "सूरत अन-नासमध्ये किती आयती आहेत?", "كم عدد آيات سورة الناس؟", "Combien de versets compte sourate An-Nas ?", "¿Cuántos versículos tiene la sura An-Nas?");
  Q("Quran ki pehli nazil aayat kis Surah ki?", "कुरआनची पहिली अवतरलेली आयत कोणत्या सूरतीची?", "أول آية نزلت من أي سورة؟", "Le premier verset révélé appartient à quelle sourate ?", "¿A qué sura pertenece el primer versículo revelado?");
  Q("Quran ki aakhri Surah kaun si?", "कुरआनची शेवटची सूरत कोणती?", "ما آخر سورة في القرآن؟", "Quelle est la dernière sourate du Coran ?", "¿Cuál es la última sura del Corán?");
  Q("Surah Fatiha ko kya kaha jata hai?", "सूरत फातिहाला काय म्हणतात?", "بماذا تُسمى سورة الفاتحة؟", "Comment appelle-t-on sourate Al-Fatiha ?", "¿Cómo se llama la sura Al-Fatiha?");
  Q("Surah Yusuf ko Quran mein kya kaha gaya?", "सूरत यूसुफला कुरआनमध्ये काय म्हटले आहे?", "بماذا وُصفت سورة يوسف في القرآن؟", "Comment le Coran qualifie-t-il sourate Yusuf ?", "¿Cómo describe el Corán a la sura Yusuf?");

  /* ================= DAY 6 ================= */
  Q("Kis Nabi ne kashti banai?", "कोणत्या नबीने नाव बनवली?", "أي نبي صنع السفينة؟", "Quel prophète a construit l’arche ?", "¿Qué profeta construyó el arca?");
  Q("Kis Nabi ka sabr misaal hai?", "कोणत्या नबीचा संयम उदाहरण आहे?", "أي نبي صبره مضرب المثل؟", "La patience de quel prophète est exemplaire ?", "¿La paciencia de qué profeta es ejemplar?");
  Q("Kis Nabi ko machhli ne nigla?", "कोणत्या नबीला माशीने गिळले?", "أي نبي ابتلعه الحوت؟", "Quel prophète fut avalé par le poisson ?", "¿A qué profeta lo tragó el pez?");
  Q("Kis Nabi ko bhaiyon ne kuwein mein dala?", "कोणत्या नबीला भावांनी विहिरीत टाकले?", "أي نبي ألقاه إخوته في البئر؟", "Quel prophète fut jeté dans un puits par ses frères ?", "¿A qué profeta arrojaron sus hermanos al pozo?");
  Q("Kis Nabi ko Khalilullah kaha jata?", "कोणत्या नबीला खलीलुल्लाह म्हणतात?", "أي نبي يُلقب بخليل الله؟", "Quel prophète est appelé Khalilullah (l’ami d’Allah) ?", "¿A qué profeta se le llama Jalilullah (el amigo de Allah)?");
  Q("Kis Nabi ko Kalimullah kaha jata?", "कोणत्या नबीला कलीमुल्लाह म्हणतात?", "أي نبي يُلقب بكليم الله؟", "Quel prophète est appelé Kalimullah (celui qui a parlé à Allah) ?", "¿A qué profeta se le llama Kalimullah (el que habló con Allah)?");
  Q("Kis Nabi ko Ruhullah kaha jata?", "कोणत्या नबीला रुहुल्लाह म्हणतात?", "أي نبي يُلقب بروح الله؟", "Quel prophète est appelé Ruhullah (l’esprit d’Allah) ?", "¿A qué profeta se le llama Ruhullah (el espíritu de Allah)?");
  Q("Kis Nabi ne Fir'aun ka muqabla kiya?", "कोणत्या नबीने फिरऔनचा मुकाबला केला?", "أي نبي واجه فرعون؟", "Quel prophète a affronté Pharaon ?", "¿Qué profeta se enfrentó al Faraón?");
  Q("Kis Nabi ke paas jinn ka control tha?", "कोणत्या नबीकडे जिन्नांवर नियंत्रण होते?", "أي نبي كان يسيطر على الجن؟", "Quel prophète avait autorité sur les djinns ?", "¿Qué profeta tenía dominio sobre los yinn?");

  /* ================= DAY 7 ================= */
  Q("Kis Nabi ko Injeel di gayi?", "कोणत्या नबीला इंजील दिले गेले?", "أي نبي أُعطي الإنجيل؟", "Quel prophète a reçu l’Injil (Évangile) ?", "¿A qué profeta se le dio el Inyil (Evangelio)?");
  Q("Kis Nabi ko Tawraat di gayi?", "कोणत्या नबीला तौरात दिली गेली?", "أي نبي أُعطي التوراة؟", "Quel prophète a reçu la Tawrat (Torah) ?", "¿A qué profeta se le dio la Tawrat (Torá)?");
  Q("Aakhri Nabi kaun hain?", "शेवटचे नबी कोण आहेत?", "من خاتم الأنبياء؟", "Qui est le dernier prophète ?", "¿Quién es el último profeta?");
  Q("Kis Nabi ki walida Hazrat Maryam thin?", "कोणत्या नबीची वालिदा हजरत मरयम होत्या?", "أي نبي كانت أمه مريم؟", "La mère de quel prophète était Maryam ?", "¿La madre de qué profeta fue Maryam?");
  Q("Kis Nabi ke walid Zakariya (AS) the?", "कोणत्या नबीचे वालिद ज़करिया (अ.स.) होते?", "أي نبي كان أبوه زكريا (ع)؟", "Le père de quel prophète était Zakariyya (AS) ?", "¿El padre de qué profeta fue Zakariya (AS)?");
  Q("Kis Nabi ne chunti ki baat suni?", "कोणत्या नबीने मुंगीचे बोलणे ऐकले?", "أي نبي سمع كلام النملة؟", "Quel prophète a entendu la parole de la fourmi ?", "¿Qué profeta escuchó el habla de la hormiga?");
  Q("Quran mein kitne Nabiyon ka zikr?", "कुरआनमध्ये किती नबींचा उल्लेख आहे?", "كم عدد الأنبياء المذكورين في القرآن؟", "Combien de prophètes sont mentionnés dans le Coran ?", "¿Cuántos profetas se mencionan en el Corán?");
  Q("Kis Nabi ka naam Quran mein sabse zyada?", "कुरआनमध्ये कोणत्या नबीचे नाव सर्वाधिक?", "أي نبي تكرر اسمه أكثر في القرآن؟", "Le nom de quel prophète revient le plus dans le Coran ?", "¿El nombre de qué profeta aparece más en el Corán?");
  Q("Kis Nabi ki qaum par pathar barse?", "कोणत्या नबीच्या कौमवर दगड पडले?", "على قوم أي نبي أمطرت الحجارة؟", "Sur le peuple de quel prophète des pierres sont-elles tombées ?", "¿Sobre el pueblo de qué profeta llovieron piedras?");
  Q("Kis Nabi ki qaum ko Aad kaha jata?", "कोणत्या नबीच्या कौमला आद म्हणतात?", "قوم أي نبي تُسمى عادًا؟", "Le peuple de quel prophète est appelé Aad ?", "¿El pueblo de qué profeta se llama Aad?");

  /* ================= DAY 8 ================= */
  Q("Pehle Khalifa kaun?", "पहिले खलीफा कोण?", "من أول الخلفاء؟", "Qui fut le premier calife ?", "¿Quién fue el primer califa?");
  Q("Doosre Khalifa kaun?", "दुसरे खलीफा कोण?", "من الخليفة الثاني؟", "Qui fut le deuxième calife ?", "¿Quién fue el segundo califa?");
  Q("Teesre Khalifa kaun?", "तिसरे खलीफा कोण?", "من الخليفة الثالث؟", "Qui fut le troisième calife ?", "¿Quién fue el tercer califa?");
  Q("Chauthe Khalifa kaun?", "चौथे खलीफा कोण?", "من الخليفة الرابع؟", "Qui fut le quatrième calife ?", "¿Quién fue el cuarto califa?");
  Q("Siddiq kis sahaba ka laqab?", "सिद्दीक हे कोणत्या सहाबीचे लकब?", "الصديق لقب أي صحابي؟", "As-Siddiq est le surnom de quel compagnon ?", "¿As-Siddiq es el apodo de qué compañero?");
  Q("Farooq kis sahaba ka laqab?", "फारूक हे कोणत्या सहाबीचे लकब?", "الفاروق لقب أي صحابي؟", "Al-Faruq est le surnom de quel compagnon ?", "¿Al-Faruq es el apodo de qué compañero?");
  Q("Zul Noorain kis sahaba ka laqab?", "ज़ुन्नूरैन हे कोणत्या सहाबीचे लकब?", "ذو النورين لقب أي صحابي؟", "Dhun-Nurayn est le surnom de quel compagnon ?", "¿Dhun-Nurayn es el apodo de qué compañero?");
  Q("Hazrat Bilal (RA) kis ke ghulam the?", "हजरत बिलाल (रज़ि.) कोणाचे गुलाम होते?", "غلام من كان بلال (رض)؟", "L’esclave de qui était Bilal (RA) ?", "¿Esclavo de quién era Bilal (RA)?");
  Q("Pehli shaheeda aurat kaun?", "पहिली शहीद स्त्री कोण?", "من أول شهيدة في الإسلام؟", "Qui fut la première femme martyre ?", "¿Quién fue la primera mujer mártir?");
  Q("Abu Turab kis sahaba ki kunyat thi?", "अबू तुराब ही कोणत्या सहाबीची कुन्नियत होती?", "أبو تراب كنية أي صحابي؟", "Abu Turab est la kunya de quel compagnon ?", "¿Abu Turab es la kunya de qué compañero?");

  /* ================= DAY 9 ================= */
  Q("Hazrat Hamza (RA) kis jang mein shaheed?", "हजरत हमजा (रज़ि.) कोणत्या लढाईत शहीद झाले?", "في أي معركة استُشهد حمزة (رض)؟", "Dans quelle bataille Hamza (RA) est-il tombé en martyr ?", "¿En qué batalla cayó mártir Hamza (RA)?");
  Q("Saifullah kis sahaba ka laqab?", "सैफुल्लाह हे कोणत्या सहाबीचे लकब?", "سيف الله لقب أي صحابي؟", "Sayfullah est le surnom de quel compagnon ?", "¿Sayfullah es el apodo de qué compañero?");
  Q("Nabi ﷺ ki razai maa kaun?", "नबी ﷺ यांची दूध आई कोण होती?", "من مرضعة النبي ﷺ؟", "Qui fut la nourrice du Prophète ﷺ ?", "¿Quién fue la nodriza del Profeta ﷺ?");
  Q("Zul Janahain kis sahaba ka laqab?", "ज़ुल-जनाहैन हे कोणत्या सहाबीचे लकब?", "ذو الجناحين لقب أي صحابي؟", "Dhul-Janahayn est le surnom de quel compagnon ?", "¿Dhul-Yanahayn es el apodo de qué compañero?");
  Q("Ameer-ul-Mu'mineen pehla kisko kaha?", "अमीरुल मोमिनीन सर्वप्रथम कोणाला म्हटले?", "من أول من لُقب بأمير المؤمنين؟", "Qui a été appelé le premier Amir al-Mu’minin ?", "¿A quién se llamó primero Amir al-Muminin?");
  Q("Sabse zyada hadees riwayat karne wale?", "सर्वाधिक हदीस रिवायत करणारे कोण?", "من أكثر الصحابة رواية للحديث؟", "Qui a rapporté le plus de hadiths ?", "¿Quién narró más hadices?");
  Q("Nabi ﷺ ki walida ka naam?", "नबी ﷺ यांच्या वालिदेचे नाव?", "ما اسم أم النبي ﷺ؟", "Quel est le nom de la mère du Prophète ﷺ ?", "¿Cómo se llamaba la madre del Profeta ﷺ?");
  Q("Nabi ﷺ ke walid ka naam?", "नबी ﷺ यांच्या वालिदाचे नाव?", "ما اسم والد النبي ﷺ؟", "Quel est le nom du père du Prophète ﷺ ?", "¿Cómo se llamaba el padre del Profeta ﷺ?");
  Q("Nabi ﷺ ke dada ka naam?", "नबी ﷺ यांच्या आजोबांचे नाव?", "ما اسم جد النبي ﷺ؟", "Quel est le nom du grand-père du Prophète ﷺ ?", "¿Cómo se llamaba el abuelo del Profeta ﷺ?");
  Q("Nabi ﷺ ki phuphi kaun?", "नबी ﷺ यांची आत्या कोण होती?", "من عمة النبي ﷺ؟", "Qui était la tante paternelle du Prophète ﷺ ?", "¿Quién era la tía paterna del Profeta ﷺ?");

  /* ================= DAY 10 ================= */
  Q("Jannat ke darwaze kitne?", "जन्नतची दारे किती?", "كم عدد أبواب الجنة؟", "Combien de portes a le Paradis ?", "¿Cuántas puertas tiene el Paraíso?");
  Q("Hadees mein kitne naam yaad karne par jannat ka wada hai?", "हदीसमध्ये किती नावे लक्षात ठेवल्यावर जन्नतचे वचन आहे?", "كم عدد الأسماء التي وعد عليها النبي ﷺ بالجنة عند إحصائه؟", "Selon le hadith, mémoriser combien de noms d’Allah promet le Paradis ?", "Según el hadiz, ¿memorizar cuántos nombres de Allah promete el Paraíso?");
  Q("Farishton ka kaam kya hai?", "फरिश्त्यांचे काम काय आहे?", "ما عمل الملائكة؟", "Quelle est la fonction des anges ?", "¿Cuál es la función de los ángeles?");
  Q("Jahannam ke darwaze kitne?", "जहन्नमची दारे किती?", "كم عدد أبواب جهنم؟", "Combien de portes a l’Enfer ?", "¿Cuántas puertas tiene el Infierno?");
  Q("Wahi kya hai?", "वही काय आहे?", "ما الوحي؟", "Qu’est-ce que la wahy (révélation) ?", "¿Qué es la wahy (revelación)?");
  Q("Quran ki tilawat ka sawab (har harf)?", "कुरआन वाचण्याचे प्रतिफळ (प्रत्येक अक्षराला)?", "ما أجر تلاوة القرآن عن كل حرف؟", "Quelle récompense pour chaque lettre récitée du Coran ?", "¿Cuál es la recompensa por cada letra recitada del Corán?");
  Q("Wudu kis cheez ke liye zaroori?", "वुजू कशासाठी आवश्यक?", "لأي شيء يجب الوضوء؟", "Pour quoi le wudu est-il nécessaire ?", "¿Para qué es necesario el wudu?");
  Q("Namaz mein kis ki taraf munh hota hai?", "नमाज़ेत कोणत्या दिशेला तोंड असते?", "إلى أي جهة يُتوجه في الصلاة؟", "Vers quelle direction se tourne-t-on dans la prière ?", "¿Hacia qué dirección se orienta uno en la oración?");
  Q("Paak hone ka amal kya kehlata hai?", "पवित्र होण्याच्या क्रियेला काय म्हणतात?", "ماذا تُسمى أعمال الطهارة؟", "Comment appelle-t-on l’acte de purification ?", "¿Cómo se llama el acto de purificación?");
  Q("Islam ka pehla rukn kya hai?", "इस्लामचा पहिला स्तंभ काय आहे?", "ما أول أركان الإسلام؟", "Quel est le premier pilier de l’islam ?", "¿Cuál es el primer pilar del islam?");

  /* ================= DAY 11 ================= */
  Q("Islami calendar mein pehla mahina?", "इस्लामी दिनदर्शिकेतील पहिला महिना?", "ما أول شهر في التقويم الهجري؟", "Quel est le premier mois du calendrier islamique ?", "¿Cuál es el primer mes del calendario islámico?");
  Q("Islami saal mein kitne mahine?", "इस्लामी वर्षात किती महिने?", "كم شهرًا في السنة الهجرية؟", "Combien de mois compte l’année islamique ?", "¿Cuántos meses tiene el año islámico?");
  Q("Ramzan ke baad ka mahina?", "रमजाननंतरचा महिना?", "ما الشهر الذي يلي رمضان؟", "Quel mois suit le Ramadan ?", "¿Qué mes sigue al Ramadán?");
  Q("Ashura kis mahine mein?", "आशूरा कोणत्या महिन्यात?", "في أي شهر عاشوراء؟", "En quel mois tombe Achoura ?", "¿En qué mes es Ashura?");
  Q("Hajj kis mahine mein hota hai?", "हज कोणत्या महिन्यात होतो?", "في أي شهر يكون الحج؟", "En quel mois a lieu le pèlerinage ?", "¿En qué mes se realiza la peregrinación?");
  Q("Islami saal ka aakhri mahina kaun sa hai?", "इस्लामी वर्षाचा शेवटचा महिना कोणता?", "ما آخر شهر في السنة الهجرية؟", "Quel est le dernier mois de l’année islamique ?", "¿Cuál es el último mes del año islámico?");
  Q("Lailatul Qadr kis mahine mein?", "लैलतुल कद्र कोणत्या महिन्यात?", "في أي شهر ليلة القدر؟", "En quel mois est Laylat al-Qadr ?", "¿En qué mes es Laylat al-Qadr?");
  Q("Qurbani kis mahine mein?", "कुर्बानी कोणत्या महिन्यात?", "في أي شهر الأضحية؟", "En quel mois a lieu le sacrifice (qurbani) ?", "¿En qué mes es el sacrificio (qurbani)?");
  Q("Hijri calendar kis sahaba ne muqarrar kiya?", "हिजरी दिनदर्शिका कोणत्या सहाबीने ठरवली?", "من الصحابي الذي أقرّ التقويم الهجري؟", "Quel compagnon a établi le calendrier hégirien ?", "¿Qué compañero estableció el calendario hiyri?");
  Q("Ayyam-e-Tashreeq kis mahine mein?", "अय्याम-ए-तशरीक कोणत्या महिन्यात?", "في أي شهر أيام التشريق؟", "En quel mois sont les jours de Tachriq ?", "¿En qué mes son los días de Tashriq?");

  /* ================= DAY 12 ================= */
  Q("Fajr ki namaz kitni rak'at farz?", "फज्रची नमाज़ किती रकअत फर्ज?", "كم ركعة فرض في صلاة الفجر؟", "Combien de rak’as obligatoires dans la prière du Fajr ?", "¿Cuántas rak’as obligatorias en la oración del Fayr?");
  Q("Zuhr ki namaz ki farz kitni?", "झुहरच्या नमाज़ेच्या फर्ज रकअती किती?", "كم ركعة فرض في صلاة الظهر؟", "Combien de rak’as obligatoires dans la prière du Dhuhr ?", "¿Cuántas rak’as obligatorias en la oración del Dhuhr?");
  Q("Asr ki namaz ki farz kitni?", "अस्रच्या नमाज़ेच्या फर्ज रकअती किती?", "كم ركعة فرض في صلاة العصر؟", "Combien de rak’as obligatoires dans la prière de l’Asr ?", "¿Cuántas rak’as obligatorias en la oración del Asr?");
  Q("Maghrib ki namaz ki farz kitni?", "मगरिबच्या नमाज़ेच्या फर्ज रकअती किती?", "كم ركعة فرض في صلاة المغرب؟", "Combien de rak’as obligatoires dans la prière du Maghrib ?", "¿Cuántas rak’as obligatorias en la oración del Magrib?");
  Q("Isha ki namaz ki farz kitni?", "इशाच्या नमाज़ेच्या फर्ज रकअती किती?", "كم ركعة فرض في صلاة العشاء؟", "Combien de rak’as obligatoires dans la prière de l’Isha ?", "¿Cuántas rak’as obligatorias en la oración del Isha?");
  Q("Juma ki namaz kitni rak'at farz?", "जुम्म्याची नमाज़ किती रकअत फर्ज?", "كم ركعة فرض في صلاة الجمعة؟", "Combien de rak’as obligatoires dans la prière du vendredi ?", "¿Cuántas rak’as obligatorias en la oración del viernes?");
  Q("Taraweeh kis mahine mein?", "तरावीह कोणत्या महिन्यात?", "في أي شهر صلاة التراويح؟", "En quel mois prie-t-on les Tarawih ?", "¿En qué mes se reza el Tarawih?");
  Q("Witr kab padhi jati hai?", "वित्र कधी पढली जाते?", "متى تُصلى الوتر؟", "Quand prie-t-on le Witr ?", "¿Cuándo se reza el Witr?");
  Q("Eidain ki namaz kitni rak'at?", "ईदैनची नमाज़ किती रकअती?", "كم ركعة في صلاة العيدين؟", "Combien de rak’as dans les prières de l’Aïd ?", "¿Cuántas rak’as tienen las oraciones del Eid?");
  Q("Janaza ki namaz mein kitni takbiren?", "जनाज़ाच्या नमाज़ेत किती तकबीरी?", "كم عدد التكبيرات في صلاة الجنازة؟", "Combien de takbirs dans la prière funéraire ?", "¿Cuántos takbires hay en la oración funeraria?");

  /* ================= DAY 13 ================= */
  Q("Ayatul Kursi kis Surah mein?", "आयतुल कुर्सी कोणत्या सूरतीत?", "في أي سورة آية الكرسي؟", "Dans quelle sourate se trouve Ayat al-Kursi ?", "¿En qué sura está Ayat al-Kursi?");
  Q("Ummul Quran kis Surah ko kaha?", "उम्मुल कुरआन कोणत्या सूरतीला म्हटले?", "أي سورة تُسمى أم القرآن؟", "Quelle sourate est appelée Umm al-Quran ?", "¿A qué sura se le llama Umm al-Quran?");
  Q("Surah Yaseen mein kitni aayat?", "सूरत यासीनमध्ये किती आयती?", "كم عدد آيات سورة يس؟", "Combien de versets compte sourate Yasin ?", "¿Cuántos versículos tiene la sura Yasin?");
  Q("Surah Ar-Rahman mein kitni aayat?", "सूरत अर-रहमानमध्ये किती आयती?", "كم عدد آيات سورة الرحمن؟", "Combien de versets compte sourate Ar-Rahman ?", "¿Cuántos versículos tiene la sura Ar-Rahman?");
  Q("Surah Al-Kahf mein kitni aayat?", "सूरत अल-कहफमध्ये किती आयती?", "كم عدد آيات سورة الكهف؟", "Combien de versets compte sourate Al-Kahf ?", "¿Cuántos versículos tiene la sura Al-Kahf?");
  Q("Surah Al-Mulk mein kitni aayat?", "सूरत अल-मुल्कमध्ये किती आयती?", "كم عدد آيات سورة الملك؟", "Combien de versets compte sourate Al-Mulk ?", "¿Cuántos versículos tiene la sura Al-Mulk?");
  Q("Aayatul Kursi kis aayat number?", "आयतुल कुर्सी कोणत्या आयत क्रमांकावर?", "ما رقم آية الكرسي؟", "À quel numéro de verset se trouve Ayat al-Kursi ?", "¿En qué número de versículo está Ayat al-Kursi?");
  Q("Hadith ke mutabiq Surah Al-Ikhlas Quran ke kitne hisse ke barabar hai?", "हदीशानुसार सूरत अल-इखलास कुरआनच्या किती भागाइतकी आहे?", "بحسب الحديث، سورة الإخلاص تعدل كم من القرآن؟", "Selon le hadith, sourate Al-Ikhlas équivaut à quelle part du Coran ?", "Según el hadiz, ¿a qué parte del Corán equivale la sura Al-Ijlas?");
  Q("Quran ki sabse lambi aayat kis Surah mein hai?", "कुरआनची सर्वात मोठी आयत कोणत्या सूरतीत आहे?", "في أي سورة أطول آية في القرآن؟", "Dans quelle sourate se trouve le plus long verset du Coran ?", "¿En qué sura está el versículo más largo del Corán?");
  Q("Quran ki pehli Surah kis naam se mashhoor hai?", "कुरआनची पहिली सूरत कोणत्या नावाने प्रसिद्ध आहे?", "بأي اسم عُرفت أول سورة في القرآن؟", "Sous quel nom la première sourate du Coran est-elle connue ?", "¿Con qué nombre se conoce la primera sura del Corán?");

  /* ================= DAY 14 ================= */
  Q("Quran kitne saal mein nazil hua?", "कुरआन किती वर्षांत अवतरले?", "في كم سنة نزل القرآن؟", "En combien d’années le Coran a-t-il été révélé ?", "¿En cuántos años fue revelado el Corán?");
  Q("Pehli Wahy kis umar mein hui?", "पहिली वही कोणत्या वयात झाली?", "في أي عمر كانت أول وحي؟", "À quel âge la première révélation est-elle venue ?", "¿A qué edad llegó la primera revelación?");
  Q("Surah Al-Falaq ka matlab?", "सूरत अल-फलकचा अर्थ?", "ما معنى سورة الفلق؟", "Que signifie sourate Al-Falaq ?", "¿Qué significa la sura Al-Falaq?");
  Q("Surah An-Nas ka matlab?", "सूरत अन-नासचा अर्थ?", "ما معنى سورة الناس؟", "Que signifie sourate An-Nas ?", "¿Qué significa la sura An-Nas?");
  Q("Surah Al-Kawthar ka matlab?", "सूरत अल-कौसरचा अर्थ?", "ما معنى سورة الكوثر؟", "Que signifie sourate Al-Kawthar ?", "¿Qué significa la sura Al-Kawzar?");
  Q("Surah Al-Asr mein kitni aayat?", "सूरत अल-अस्रमध्ये किती आयती?", "كم عدد آيات سورة العصر؟", "Combien de versets compte sourate Al-Asr ?", "¿Cuántos versículos tiene la sura Al-Asr?");
  Q("Surah Al-Kawthar mein kitni aayat?", "सूरत अल-कौसरमध्ये किती आयती?", "كم عدد آيات سورة الكوثر؟", "Combien de versets compte sourate Al-Kawthar ?", "¿Cuántos versículos tiene la sura Al-Kawzar?");
  Q("Surah Al-Falaq mein kis se panah maangi gayi?", "सूरत अल-फलकमध्ये कोणाची पनाह मागितली आहे?", "بمن يُستعاذ في سورة الفلق؟", "Auprès de qui refuge est-il cherché dans sourate Al-Falaq ?", "¿De quién se busca refugio en la sura Al-Falaq?");
  Q("Surah Al-Fil kis jaanwar ke waqie par hai?", "सूरत अल-फील कोणत्या प्राण्याच्या घटनेवर आहे?", "سورة الفيل عن واقعة أي حيوان؟", "Sourate Al-Fil parle de l’incident de quel animal ?", "¿La sura Al-Fil trata del suceso de qué animal?");
  Q("Surah Al-Quraish kis qabeele ke naam par hai?", "सूरत अल-कुरैश कोणत्या कुळाच्या नावावर आहे?", "سورة قريش على اسم أي قبيلة؟", "Sourate Quraysh porte le nom de quelle tribu ?", "¿La sura Quraysh lleva el nombre de qué tribu?");

  /* ================= DAY 15 ================= */
  Q("Hazrat Aadam (AS) ki biwi ka naam?", "हजरत आदम (अ.स.) यांच्या पत्नीचे नाव?", "ما اسم زوجة آدم (ع)؟", "Quel est le nom de l’épouse d’Adam (AS) ?", "¿Cómo se llamaba la esposa de Adán (AS)?");
  Q("Hazrat Yusuf (AS) ke walid?", "हजरत यूसुफ (अ.स.) यांचे वालिद?", "من والد يوسف (ع)؟", "Qui est le père de Yusuf (AS) ?", "¿Quién es el padre de Yusuf (AS)?");
  Q("Hazrat Musa (AS) ke bhai?", "हजरत मूसा (अ.स.) यांचे बंधू?", "من أخو موسى (ع)؟", "Qui est le frère de Musa (AS) ?", "¿Quién es el hermano de Musa (AS)?");
  Q("Hazrat Nuh (AS) ki kashti kis pahar par ruki?", "हजरत नूह (अ.स.) यांची नाव कोणत्या डोंगरावर थांबली?", "على أي جبل استوت سفينة نوح (ع)؟", "Sur quelle montagne l’arche de Nuh (AS) s’est-elle posée ?", "¿Sobre qué montaña se posó el arca de Nuh (AS)?");
  Q("Hazrat Ibrahim (AS) ko kis ne aag mein dala?", "हजरत इब्राहीम (अ.स.) यांना कोणी आगीत टाकले?", "من ألقى إبراهيم (ع) في النار؟", "Qui a jeté Ibrahim (AS) dans le feu ?", "¿Quién arrojó a Ibrahim (AS) al fuego?");
  Q("Hazrat Sulayman (AS) ke walid?", "हजरत सुलैमान (अ.स.) यांचे वालिद?", "من والد سليمان (ع)؟", "Qui est le père de Sulayman (AS) ?", "¿Quién es el padre de Sulayman (AS)?");
  Q("Hazrat Musa (AS) ka muqabla kis se?", "हजरत मूसा (अ.स.) यांचा मुकाबला कोणाशी झाला?", "مع من كانت مواجهة موسى (ع)؟", "Contre qui Musa (AS) s’est-il dressé ?", "¿Contra quién se enfrentó Musa (AS)?");
  Q("Hazrat Isa (AS) ne kya kamaal dikhaya?", "हजरत ईसा (अ.स.) यांनी कोणता चमत्कार दाखवला?", "ما المعجزة التي أظهرها عيسى (ع)؟", "Quel miracle Issa (AS) a-t-il accompli ?", "¿Qué milagro realizó Isa (AS)?");
  Q("Hazrat Isa (AS) ke walid kaun?", "हजरत ईसा (अ.स.) यांचे वालिद कोण?", "من والد عيسى (ع)؟", "Qui est le père de Issa (AS) ?", "¿Quién es el padre de Isa (AS)?");
  Q("Hazrat Yusuf (AS) ne khwab mein kitne sitare dekhe?", "हजरत यूसुफ (अ.स.) यांनी स्वप्नात किती तारे पाहिले?", "كم كوكبًا رأى يوسف (ع) في رؤياه؟", "Combien d’étoiles Yusuf (AS) a-t-il vues en rêve ?", "¿Cuántas estrellas vio Yusuf (AS) en sueños?");

  /* ================= DAY 16 ================= */
  Q("Jang-e-Badr mein kitne sahaba?", "जंगे-बद्रमध्ये किती सहाबा होते?", "كم عدد الصحابة في غزوة بدر؟", "Combien de compagnons à la bataille de Badr ?", "¿Cuántos compañeros hubo en la batalla de Badr?");
  Q("Asharah Mubasharah kitne sahaba?", "अशरा मुबश्शरा किती सहाबा?", "كم عدد العشرة المبشرين بالجنة؟", "Combien de compagnons forment les Achara Moubachchara ?", "¿Cuántos compañeros forman los Ashara Mubashshara?");
  Q("Hazrat Ali (RA) ki kuniyat?", "हजरत अली (रज़ि.) यांची कुन्नियत?", "ما كنية علي (رض)؟", "Quelle est la kunya de Ali (RA) ?", "¿Cuál es la kunya de Ali (RA)?");
  Q("Hazrat Umar (RA) ke khilafat ke saal?", "हजरत उमर (रज़ि.) यांच्या खिलाफतीची वर्षे?", "كم سنة استمرت خلافة عمر (رض)؟", "Combien d’années a duré le califat de Umar (RA) ?", "¿Cuántos años duró el califato de Umar (RA)?");
  Q("Hazrat Uthman (RA) ke khilafat ke saal?", "हजरत उस्मान (रज़ि.) यांच्या खिलाफतीची वर्षे?", "كم سنة استمرت خلافة عثمان (رض)؟", "Combien d’années a duré le califat de Uthman (RA) ?", "¿Cuántos años duró el califato de Uthman (RA)?");
  Q("Jang-e-Badr kis saal hui?", "जंगे-बद्र कोणत्या वर्षी झाली?", "في أي سنة كانت غزوة بدر؟", "En quelle année eut lieu la bataille de Badr ?", "¿En qué año fue la batalla de Badr?");
  Q("Ahle Suffa kya the?", "अहले सुफ्फा कोण होते?", "من هم أهل الصفة؟", "Qui étaient les gens de la Souffa ?", "¿Quiénes eran la gente de la Suffa?");
  Q("Sahaba ka matlab kya hai?", "सहाबा याचा अर्थ काय?", "ما معنى الصحابة؟", "Que signifie « Sahaba » ?", "¿Qué significa «Sahaba»?");
  Q("Hazrat Salman Farsi (RA) kis mulk ke?", "हजरत सलमान फारसी (रज़ि.) कोणत्या देशाचे?", "من أي بلد سلمان الفارسي (رض)؟", "De quel pays venait Salman al-Farsi (RA) ?", "¿De qué país era Salman al-Farsi (RA)?");
  Q("Hazrat Suhaib (RA) kis mulk ke?", "हजरत सुहैब (रज़ि.) कोणत्या देशाचे?", "من أي بلد صهيب (رض)؟", "De quel pays venait Suhayb (RA) ?", "¿De qué país era Suhayb (RA)?");

  /* ================= DAY 17 ================= */
  Q("Hazrat Abu Ubaida (RA) ka laqab?", "हजरत अबू उबैदा (रज़ि.) यांचे लकब?", "ما لقب أبي عبيدة (رض)؟", "Quel est le surnom d’Abu Ubayda (RA) ?", "¿Cuál es el apodo de Abu Ubayda (RA)?");
  Q("Hazrat Khalid bin Waleed (RA) ka laqab?", "हजरत खालिद बिन वलीद (रज़ि.) यांचे लकब?", "ما لقب خالد بن الوليد (رض)؟", "Quel est le surnom de Khalid ibn al-Walid (RA) ?", "¿Cuál es el apodo de Jalid ibn al-Walid (RA)?");
  Q("Hazrat Bilal (RA) ka pura naam?", "हजरत बिलाल (रज़ि.) यांचे पूर्ण नाव?", "ما اسم بلال (رض) الكامل؟", "Quel est le nom complet de Bilal (RA) ?", "¿Cuál es el nombre completo de Bilal (RA)?");
  Q("Hazrat Anas (RA) kitne saal Nabi ﷺ ki khidmat mein?", "हजरत अनस (रज़ि.) किती वर्षे नबी ﷺ यांच्या सेवेत होते?", "كم سنة خدم أنس (رض) النبي ﷺ؟", "Combien d’années Anas (RA) a-t-il servi le Prophète ﷺ ?", "¿Cuántos años sirvió Anas (RA) al Profeta ﷺ?");
  Q("Mu'adh bin Jabal (RA) ko kahan bheja?", "मुआज़ बिन जबल (रज़ि.) यांना कुठे पाठवले?", "إلى أين أُرسل معاذ بن جبل (رض)؟", "Où Mu’adh ibn Jabal (RA) a-t-il été envoyé ?", "¿A dónde fue enviado Muadh ibn Yabal (RA)?");
  Q("Hazrat Usama bin Zaid (RA) kitni umar mein commander bane?", "हजरत उसामा बिन ज़ैद (रज़ि.) किती वयात सेनापती झाले?", "في أي عمر صار أسامة بن زيد (رض) قائدًا؟", "À quel âge Usama ibn Zayd (RA) est-il devenu commandant ?", "¿A qué edad Usama ibn Zayd (RA) se hizo comandante?");
  Q("Hazrat Zaid bin Haritha (RA) kis rishte se Nabi ﷺ se jude?", "हजरत ज़ैद बिन हारिसा (रज़ि.) कोणत्या नात्याने नबी ﷺ यांच्याशी जोडले गेले?", "بأي صلة ارتبط زيد بن حارثة (رض) بالنبي ﷺ؟", "Par quel lien Zayd ibn Haritha (RA) était-il lié au Prophète ﷺ ?", "¿Por qué vínculo estaba unido Zayd ibn Hariza (RA) al Profeta ﷺ?");
  Q("Hazrat Zubair bin Awwam (RA) ka laqab?", "हजरत ज़ुबैर बिन अव्वाम (रज़ि.) यांचे लकब?", "ما لقب الزبير بن العوام (رض)؟", "Quel est le surnom de Zubayr ibn al-Awwam (RA) ?", "¿Cuál es el apodo de Zubayr ibn al-Awwam (RA)?");
  Q("Fatah Misr kis sahaba ne kiya?", "मिस्रचा फतह कोणत्या सहाबीने केला?", "من الصحابي الذي فتح مصر؟", "Quel compagnon a conquis l’Égypte ?", "¿Qué compañero conquistó Egipto?");
  Q("Hazrat Saad bin Abi Waqqas (RA) ki dua kis liye mashhoor?", "हजरत सअद बिन अबी वक्कास (रज़ि.) यांची दुआ कशासाठी प्रसिद्ध?", "بماذا اشتهرت دعوة سعد بن أبي وقاص (رض)؟", "Pour quoi la invocation de Sa’d ibn Abi Waqqas (RA) est-elle célèbre ?", "¿Por qué es famosa la súplica de Saad ibn Abi Waqqas (RA)?");

  /* ================= DAY 18 ================= */
  Q("Hazrat Fatima (RA) ki walida?", "हजरत फातिमा (रज़ि.) यांची वालिदा?", "من والدة فاطمة (رض)؟", "Qui est la mère de Fatima (RA) ?", "¿Quién es la madre de Fátima (RA)?");
  Q("Hazrat Hassan (RA) kis ke bette?", "हजरत हसन (रज़ि.) कोणाचे पुत्र?", "ابن من الحسن (رض)؟", "Fils de qui est Hasan (RA) ?", "¿Hijo de quién es Hasan (RA)?");
  Q("Hazrat Hussain (RA) kis maqam par shaheed hue?", "हजरत हुसैन (रज़ि.) कोणत्या ठिकाणी शहीद झाले?", "في أي مكان استُشهد الحسين (رض)؟", "En quel lieu Husayn (RA) est-il tombé en martyr ?", "¿En qué lugar cayó mártir Husain (RA)?");
  Q("Hazrat Ali (RA) kis masjid mein shaheed?", "हजरत अली (रज़ि.) कोणत्या मशिदीत शहीद झाले?", "في أي مسجد استُشهد علي (رض)؟", "Dans quelle mosquée Ali (RA) a-t-il été tué ?", "¿En qué mezquita fue martirizado Ali (RA)?");
  Q("Syed-ush-Shuhada kis ko kaha jata?", "सैयदुश-शुहदा कोणाला म्हणतात?", "من يُلقب بسيد الشهداء؟", "Qui est appelé Sayyid ach-Chouhada ?", "¿A quién se le llama Sayyid ash-Shuhada?");
  Q("Hazrat Hussain (RA) ki walida kaun?", "हजरत हुसैन (रज़ि.) यांची वालिदा कोण?", "من والدة الحسين (رض)؟", "Qui est la mère de Husayn (RA) ?", "¿Quién es la madre de Husain (RA)?");
  Q("Hazrat Ali (RA) kis ke damaad the?", "हजरत अली (रज़ि.) कोणाचे जावई होते?", "من كان علي (رض) صهره؟", "De qui Ali (RA) était-il le gendre ?", "¿De quién era Ali (RA) yerno?");
  Q("Hazrat Hassan aur Hussain (RA) Nabi ﷺ ke kya lagte the?", "हजरत हसन व हुसैन (रज़ि.) नबी ﷺ यांचे काय लागत होते?", "ما صلة الحسن والحسين (رض) بالنبي ﷺ؟", "Quel lien les deux Hasan et Husayn (RA) avaient-ils avec le Prophète ﷺ ?", "¿Qué parentesco tenían Hasan y Husain (RA) con el Profeta ﷺ?");
  Q("Nabi ﷺ ki sahibzadi Hazrat Ruqayya (RA) ka nikah kis se hua?", "नबी ﷺ यांच्या साहेबजादी हजरत रुकैया (रज़ि.) यांचा निकाह कोणाशी झाला?", "من تزوجت رقية (رض) بنت النبي ﷺ؟", "Qui a épousé Ruqayya (RA), fille du Prophète ﷺ ?", "¿Con quién se casó Ruqayya (RA), hija del Profeta ﷺ?");
  Q("Hazrat Uthman (RA) ko Zul Noorain kyun kaha jata hai?", "हजरत उस्मान (रज़ि.) यांना ज़ुन्नूरैन का म्हणतात?", "لماذا يُلقب عثمان (رض) بذي النورين؟", "Pourquoi Uthman (RA) est-il appelé Dhun-Nurayn ?", "¿Por qué se llama a Uthman (RA) Dhun-Nurayn?");

  /* ================= DAY 19 ================= */
  Q("Roza kis waqt iftar?", "रोज़ा कोणत्या वेळी सोडला जातो?", "في أي وقت يُفطر؟", "À quel moment rompt-on le jeûne ?", "¿A qué hora se rompe el ayuno?");
  Q("Roza kis waqt se shuru?", "रोज़ा कोणत्या वेळेपासून सुरू होतो?", "من أي وقت يبدأ الصيام؟", "À partir de quand commence le jeûne ?", "¿Desde qué hora comienza el ayuno?");
  Q("Talbiyah kab padhi jati hai?", "तल्बिया कधी वाचले जाते?", "متى تُقرأ التلبية؟", "Quand récite-t-on la Talbiya ?", "¿Cuándo se recita la Talbiya?");
  Q("Namaz se pehle wudu karna kaisa hai?", "नमाज़ेपूर्वी वुजू करणे कसे आहे?", "ما حكم الوضوء قبل الصلاة؟", "Quel est le statut du wudu avant la prière ?", "¿Cuál es el estatus del wudu antes de la oración?");
  Q("Roza kis cheez se rukne ka naam hai?", "रोज़ा कशापासून थांबण्याचे नाव आहे?", "عن أي شيء يمتنع الصائم؟", "Le jeûne consiste à s’abstenir de quoi ?", "¿De qué se abstiene quien ayuna?");
  Q("Hajj kitni baar farz hai?", "हज किती वेळा फर्ज आहे?", "كم مرة يجب الحج؟", "Combien de fois le pèlerinage est-il obligatoire ?", "¿Cuántas veces es obligatoria la peregrinación?");
  Q("Eid-ul-Fitr kis mahine ki pehli tareekh ko hoti hai?", "ईदुल-फित्र कोणत्या महिन्याच्या पहिल्या तारखेला असते?", "في أول أي شهر يكون عيد الفطر؟", "Le premier jour de quel mois tombe l’Aïd al-Fitr ?", "¿El primer día de qué mes es el Eid al-Fitr?");
  Q("Hajj mein Arafat ka din kaun si tareekh ko hota hai?", "हजमध्ये अरफातचा दिवस कोणत्या तारखेला असतो?", "في أي تاريخ يكون يوم عرفة في الحج؟", "À quelle date tombe le jour d’Arafat pendant le pèlerinage ?", "¿En qué fecha es el día de Arafat durante la peregrinación?");
  Q("Quran mein Zakat ka zikr aksar kis ke saath aaya hai?", "कुरआनमध्ये जकातचा उल्लेख बहुतेक कोणासोबत आला आहे?", "مع أي شيء يُذكر الزكاة غالبًا في القرآن؟", "Avec quoi la zakat est-elle le plus souvent mentionnée dans le Coran ?", "¿Con qué se menciona más a menudo la zakat en el Corán?");
  Q("Qurbani kis Nabi ki sunnat ki yaad hai?", "कुर्बानी कोणत्या नबीच्या सुन्नतीची आठवण आहे?", "قرباني إحياء لسنة أي نبي؟", "Le sacrifice rappelle la sunna de quel prophète ?", "¿El sacrificio conmemora la sunna de qué profeta?");

  /* ================= DAY 20 ================= */
  Q("Imam Bukhari ka asal naam?", "इमाम बुखारी यांचे खरे नाव?", "ما الاسم الحقيقي للإمام البخاري؟", "Quel est le vrai nom de l’imam al-Bukhari ?", "¿Cuál es el nombre real del imam al-Bujari?");
  Q("Imam Ahmad bin Hanbal ki kitab?", "इमाम अहमद बिन हंबल यांचा ग्रंथ?", "ما كتاب الإمام أحمد بن حنبل؟", "Quel livre est de l’imam Ahmad ibn Hanbal ?", "¿Qué libro es del imam Ahmad ibn Hanbal?");
  Q("Muwatta kis imam ki kitab?", "मुवत्ता कोणत्या इमामचा ग्रंथ?", "الموطأ كتاب أي إمام؟", "Le Muwatta est le livre de quel imam ?", "¿El Muwatta es el libro de qué imam?");
  Q("Behtareen daur kis ko kaha jata hai?", "सर्वोत्तम कालखंड कोणाला म्हणतात?", "أي جيل يُسمى خير القرون؟", "Quelle époque est appelée la meilleure ?", "¿A qué época se le llama la mejor?");
  Q("Imam Bukhari ki mashhoor kitab?", "इमाम बुखारी यांचा प्रसिद्ध ग्रंथ?", "ما كتاب الإمام البخاري المشهور؟", "Quel est le livre célèbre de l’imam al-Bukhari ?", "¿Cuál es el libro famoso del imam al-Bujari?");
  Q("Imam Muslim ka asal naam?", "इमाम मुस्लिम यांचे खरे नाव?", "ما الاسم الحقيقي للإمام مسلم؟", "Quel est le vrai nom de l’imam Muslim ?", "¿Cuál es el nombre real del imam Muslim?");
  Q("Jami at-Tirmidhi kis imam ki kitab hai?", "जामे तिर्मिजी कोणत्या इमामचा ग्रंथ आहे?", "جامع الترمذي كتاب أي إمام؟", "Le Jami at-Tirmidhi est le livre de quel imam ?", "¿El Yami at-Tirmidi es el libro de qué imam?");
  Q("Riyad-us-Saliheen ke muallif kaun hain?", "रियाजुस-सालिहीनचे लेखक कोण आहेत?", "من مؤلف رياض الصالحين؟", "Qui est l’auteur de Riyad as-Salihin ?", "¿Quién es el autor de Riad as-Salihin?");
  Q("Imam Bukhari ne Sahih Bukhari kitne saal mein tarteeb di?", "इमाम बुखारी यांनी सहीह बुखारी किती वर्षांत संकलित केले?", "في كم سنة رتّب البخاري صحيحه؟", "En combien d’années al-Bukhari a-t-il compilé son Sahih ?", "¿En cuántos años compiló al-Bujari su Sahih?");
  Q("Al-Adab al-Mufrad ke muallif kaun hain?", "अल-अदब अल-मुफरदचे लेखक कोण आहेत?", "من مؤلف الأدب المفرد؟", "Qui est l’auteur d’Al-Adab al-Mufrad ?", "¿Quién es el autor de Al-Adab al-Mufrad?");

  /* ================= DAY 21 ================= */
  Q("Hijrat kis saal hui?", "हिजरत कोणत्या वर्षी झाली?", "في أي سنة كانت الهجرة؟", "En quelle année eut lieu l’Hégire ?", "¿En qué año fue la Hiyra?");
  Q("Pehli masjid kaun si banai?", "पहिली मशीद कोणती बांधली?", "ما أول مسجد بُني؟", "Quelle est la première mosquée construite ?", "¿Cuál fue la primera mezquita construida?");
  Q("Jang-e-Uhud kis saal?", "जंगे-उहुद कोणत्या वर्षी?", "في أي سنة كانت غزوة أحد؟", "En quelle année fut la bataille d’Uhud ?", "¿En qué año fue la batalla de Uhud?");
  Q("Fatah Makkah kis saal?", "फतहे मक्का कोणत्या वर्षी?", "في أي سنة كان فتح مكة؟", "En quelle année fut la conquête de La Mecque ?", "¿En qué año fue la conquista de La Meca?");
  Q("Jang-e-Khandaq kis saal?", "जंगे-खंदक कोणत्या वर्षी?", "في أي سنة كانت غزوة الخندق؟", "En quelle année fut la bataille du Fossé ?", "¿En qué año fue la batalla del Foso?");
  Q("Jang-e-Khyber kis saal?", "जंगे-खैबर कोणत्या वर्षी?", "في أي سنة كانت غزوة خيبر؟", "En quelle année fut la bataille de Khaybar ?", "¿En qué año fue la batalla de Jaibar?");
  Q("Sulah Hudaibiya kis saal?", "सुल्ह हुदैबिया कोणत्या वर्षी?", "في أي سنة كان صلح الحديبية؟", "En quelle année fut le traité de Hudaybiyya ?", "¿En qué año fue el tratado de Hudaybiyya?");
  Q("Hajjatul Wida kis saal?", "हज्जतुल विदा कोणत्या वर्षी?", "في أي سنة كان حجة الوداع؟", "En quelle année fut le pèlerinage d’adieu ?", "¿En qué año fue la peregrinación de despedida?");
  Q("Nabi ﷺ ki wafat kis saal?", "नबी ﷺ यांचे निधन कोणत्या वर्षी?", "في أي سنة توفي النبي ﷺ؟", "En quelle année le Prophète ﷺ est-il décédé ?", "¿En qué año falleció el Profeta ﷺ?");
  Q("Pehle Khalifa ka daur-e-khilafat?", "पहिल्या खलीफाचा खिलाफत कालावधी?", "كم دامت خلافة أول الخلفاء؟", "Combien de temps a duré le califat du premier calife ?", "¿Cuánto duró el califato del primer califa?");

  /* ================= DAY 22 ================= */
  Q("Allah ek hai ya do?", "अल्लाह एक आहे की दोन?", "هل الله واحد أم اثنان؟", "Allah est-Il un ou deux ?", "¿Allah es uno o dos?");
  Q("Wahi lane wale farishte ka naam?", "वही आणणाऱ्या फरिश्त्याचे नाव?", "ما اسم الملك الذي ينزل بالوحي؟", "Quel est le nom de l’ange qui apporte la révélation ?", "¿Cuál es el nombre del ángel que trae la revelación?");
  Q("Hazrat Aadam (AS) ko kis cheez se banaya gaya?", "हजरत आदम (अ.स.) कशापासून निर्माण केले?", "من أي شيء خُلق آدم (ع)؟", "De quoi Adam (AS) a-t-il été créé ?", "¿De qué fue creado Adán (AS)?");
  Q("Jinn ko kis cheez se banaya gaya?", "जिन्न कशापासून निर्माण केले?", "من أي شيء خُلق الجن؟", "De quoi les djinns ont-ils été créés ?", "¿De qué fueron creados los yinn?");
  Q("Farishte kis cheez se bane hain?", "फरिश्ते कशापासून बनले आहेत?", "من أي شيء خُلقت الملائكة؟", "De quoi les anges sont-ils créés ?", "¿De qué están creados los ángeles?");
  Q("Qayamat ke din Sur kaun phoonkega?", "कयामतच्या दिवशी सूर कोण फुंकेल?", "من ينفخ في الصور يوم القيامة؟", "Qui soufflera dans la trompe au Jour du Jugement ?", "¿Quién soplará la trompeta el Día del Juicio?");
  Q("Rizq dene wala kaun hai?", "रिज्क देणारा कोण आहे?", "من هو الرزّاق؟", "Qui est Celui qui accorde la subsistance ?", "¿Quién es el que provee el sustento?");
  Q("Shirk ka matlab kya hai?", "शिर्कचा अर्थ काय?", "ما معنى الشرك؟", "Que signifie le chirk ?", "¿Qué significa el shirk?");
  Q("Quran kis ka kalaam hai?", "कुरआन कोणाचे वचन आहे?", "كلام من القرآن؟", "De qui le Coran est-il la parole ?", "¿De quién es la palabra el Corán?");
  Q("Maut ka farishta kis naam se Quran mein aaya?", "मृत्यूचा फरिश्ता कुरआनमध्ये कोणत्या नावाने आला आहे?", "بأي اسم ذُكر ملك الموت في القرآن؟", "Sous quel nom l’ange de la mort est-il mentionné dans le Coran ?", "¿Con qué nombre se menciona al ángel de la muerte en el Corán?");

  /* ================= DAY 23 ================= */
  Q("Kaaba kis masjid mein hai?", "काबा कोणत्या मशिदीत आहे?", "في أي مسجد تقع الكعبة؟", "Dans quelle mosquée se trouve la Kaaba ?", "¿En qué mezquita está la Kaaba?");
  Q("Masjid-e-Nabawi kis shehar?", "मस्जिदे-नबवी कोणत्या शहरात?", "في أي مدينة المسجد النبوي؟", "Dans quelle ville est la mosquée du Prophète ?", "¿En qué ciudad está la Mezquita del Profeta?");
  Q("Masjid-e-Aqsa kis shehar?", "मस्जिदे-अक्सा कोणत्या शहरात?", "في أي مدينة المسجد الأقصى؟", "Dans quelle ville est la mosquée al-Aqsa ?", "¿En qué ciudad está la mezquita al-Aqsa?");
  Q("Jabal-e-Noor kahan?", "जबल-ए-नूर कुठे?", "أين جبل النور؟", "Où se trouve Jabal an-Nour ?", "¿Dónde está Yabal an-Nur?");
  Q("Ghaar-e-Hira kahan?", "गारे-हिरा कुठे?", "أين غار حراء؟", "Où se trouve la grotte de Hira ?", "¿Dónde está la cueva de Hira?");
  Q("Maqam-e-Ibrahim kahan?", "मकामे-इब्राहीम कुठे?", "أين مقام إبراهيم؟", "Où se trouve le Maqam Ibrahim ?", "¿Dónde está el Maqam Ibrahim?");
  Q("Safa aur Marwa kahan?", "सफा आणि मरवा कुठे?", "أين الصفا والمروة؟", "Où sont Safa et Marwa ?", "¿Dónde están Safa y Marwa?");
  Q("Mina kahan?", "मिना कुठे?", "أين منى؟", "Où se trouve Mina ?", "¿Dónde está Mina?");
  Q("Muzdalifa kahan?", "मुज़दलिफा कुठे?", "أين مزدلفة؟", "Où se trouve Muzdalifa ?", "¿Dónde está Muzdalifa?");
  Q("Arafat kahan?", "अरफात कुठे?", "أين عرفات؟", "Où se trouve Arafat ?", "¿Dónde está Arafat?");

  /* ================= DAY 24 ================= */
  Q("Hadith ke kitne hisse?", "हदीचे किती भाग?", "من كم جزء يتكون الحديث؟", "De combien de parties un hadith se compose-t-il ?", "¿De cuántas partes consta un hadiz?");
  Q("Sahih Bukhari ke muallif?", "सहीह बुखारीचे लेखक?", "من مؤلف صحيح البخاري؟", "Qui est l’auteur du Sahih al-Bukhari ?", "¿Quién es el autor del Sahih al-Bujari?");
  Q("Sahih Muslim ke muallif?", "सहीह मुस्लिमचे लेखक?", "من مؤلف صحيح مسلم؟", "Qui est l’auteur du Sahih Muslim ?", "¿Quién es el autor del Sahih Muslim?");
  Q("Mishkat Sharif kaunsi hadith ki kitab?", "मिश्कात शरीफ कोणता हदीसचा ग्रंथ?", "مشكاة المصابيح من كتب أي شيء؟", "Le Michkat Charif est un livre de quoi ?", "¿El Mishkat Sharif es un libro de qué?");
  Q("Musnad kis imam ki kitab?", "मुसनद कोणत्या इमामचा ग्रंथ?", "المسند كتاب أي إمام؟", "Le Musnad est le livre de quel imam ?", "¿El Musnad es el libro de qué imam?");
  Q("Tirmidhi kis imam?", "तिर्मिजी कोणत्या इमामचे?", "الترمذي أي إمام؟", "At-Tirmidhi, c’est quel imam ?", "¿At-Tirmidi, de qué imam es?");
  Q("Sunan Abu Dawud ke muallif?", "सुनन अबू दाऊदचे लेखक?", "من مؤلف سنن أبي داود؟", "Qui est l’auteur des Sunan Abi Dawud ?", "¿Quién es el autor de los Sunan Abi Dawud?");
  Q("Imam Bukhari 'Amirul Mu'mineen' ka laqab kis ilm mein paate hain?", "इमाम बुखारी यांना 'अमीरुल मोमिनीन' हे लकब कोणत्या शास्त्रात मिळाले?", "في أي علم لُقب الإمام البخاري بأمير المؤمنين؟", "Dans quelle science l’imam al-Bukhari est-il appelé « Amir al-Mu’minin » ?", "¿En qué ciencia se llama al imam al-Bujari «Amir al-Muminin»?");
  Q("Sunan an-Nasai ke muallif kaun hain?", "सुनन नसाईचे लेखक कोण आहेत?", "من مؤلف سنن النسائي؟", "Qui est l’auteur des Sunan an-Nasai ?", "¿Quién es el autor de los Sunan an-Nasai?");

  /* ================= DAY 25 ================= */
  Q("Fatah Makkah ke waqt kitne sahaba?", "फतहे मक्केच्या वेळी किती सहाबा होते?", "كم عدد الصحابة عند فتح مكة؟", "Combien de compagnons lors de la conquête de La Mecque ?", "¿Cuántos compañeros había en la conquista de La Meca?");
  Q("Jang-e-Hunain kis saal?", "जंगे-हुनैन कोणत्या वर्षी?", "في أي سنة كانت غزوة حنين؟", "En quelle année fut la bataille de Hunayn ?", "¿En qué año fue la batalla de Hunayn?");
  Q("Jang-e-Mutah kis saal?", "जंगे-मूता कोणत्या वर्षी?", "في أي سنة كانت غزوة مؤتة؟", "En quelle année fut la bataille de Mu’ta ?", "¿En qué año fue la batalla de Muta?");
  Q("Jang-e-Taif kis saal?", "जंगे-ताइफ कोणत्या वर्षी?", "في أي سنة كانت غزوة الطائف؟", "En quelle année fut la bataille de Taïf ?", "¿En qué año fue la batalla de Taif?");
  Q("Jang-e-Tabuk kis saal?", "जंगे-तबूक कोणत्या वर्षी?", "في أي سنة كانت غزوة تبوك؟", "En quelle année fut la bataille de Tabuk ?", "¿En qué año fue la batalla de Tabuk?");
  Q("Wafd-e-Banu Tamim kis saal?", "वफ्दे बनू तमीम कोणत्या वर्षी?", "في أي سنة جاء وفد بني تميم؟", "En quelle année la délégation de Banu Tamim est-elle venue ?", "¿En qué año llegó la delegación de Banu Tamim?");
  Q("Hajjatul Wida mein kitne musalman?", "हज्जतुल विदामध्ये किती मुसलमान होते?", "كم عدد المسلمين في حجة الوداع؟", "Combien de musulmans au pèlerinage d’adieu ?", "¿Cuántos musulmanes hubo en la peregrinación de despedida?");
  Q("Sanatul Wufud (Delegations ka saal)?", "सनतुल वुफूद (प्रतिनिधींचे वर्ष)?", "سنة الوفود؟", "Sanat al-Wufud (l’année des délégations) ?", "¿Sanat al-Wufud (el año de las delegaciones)?");
  Q("Pehli Wahy kis saal (CE)?", "पहिली वही कोणत्या वर्षी (इ.स.)?", "في أي سنة ميلادية كانت أول وحي؟", "En quelle année (ap. J.-C.) la première révélation est-elle venue ?", "¿En qué año (d. C.) llegó la primera revelación?");
  Q("Hijrat-e-Madinah kis saal (CE)?", "हिजरते मदीना कोणत्या वर्षी (इ.स.)?", "في أي سنة ميلادية كانت الهجرة إلى المدينة؟", "En quelle année (ap. J.-C.) eut lieu l’Hégire vers Médine ?", "¿En qué año (d. C.) fue la Hiyra a Medina?");

  /* ================= DAY 26 ================= */
  Q("Ashab-e-Kahf kis jagah so gaye?", "असहाबे कहफ कोणत्या ठिकाणी झोपले?", "أين نام أصحاب الكهف؟", "Où les gens de la Caverne se sont-ils endormis ?", "¿Dónde se durmieron los de la Caverna?");
  Q("Hazrat Yusuf (AS) ko Misr mein kis ne khareeda?", "हजरत यूसुफ (अ.स.) यांना मिस्रात कोणी विकत घेतले?", "من اشترى يوسف (ع) في مصر؟", "Qui a acheté Yusuf (AS) en Égypte ?", "¿Quién compró a Yusuf (AS) en Egipto?");
  Q("Hazrat Musa (AS) se Allah ne kis pahar par kalam kiya?", "हजरत मूसा (अ.स.) यांच्याशी अल्लाहने कोणत्या डोंगरावर बोलणे केले?", "على أي جبل كلّم الله موسى (ع)؟", "Sur quelle montagne Allah a-t-Il parlé à Musa (AS) ?", "¿En qué montaña habló Allah con Musa (AS)?");
  Q("Quran mein kis khatoon ke naam par Surah hai?", "कुरआनमध्ये कोणत्या स्त्रीच्या नावावर सूरत आहे?", "باسم أي امرأة سُميت سورة في القرآن؟", "Une sourate porte le nom de quelle femme ?", "¿Una sura lleva el nombre de qué mujer?");
  Q("Hazrat Zakariyya (AS) ko Allah ne kaun sa beta ata kiya?", "हजरत ज़करिया (अ.स.) यांना अल्लाहने कोणता पुत्र दिला?", "أي ابن وهبه الله لزكريا (ع)؟", "Quel fils Allah a-t-Il accordé à Zakariyya (AS) ?", "¿Qué hijo concedió Allah a Zakariya (AS)?");
  Q("Hazrat Dawud (AS) ne kis zalim ko qatal kiya?", "हजरत दाऊद (अ.स.) यांनी कोणत्या जुलमीला ठार केले?", "أي طاغوت قتل داود (ع)؟", "Quel tyran Dawud (AS) a-t-il tué ?", "¿A qué tirano mató Dawud (AS)?");
  Q("Qaroon kis Nabi ki qaum se tha?", "कारून कोणत्या नबीच्या कौमचा होता?", "قارون من قوم أي نبي؟", "Qarun était du peuple de quel prophète ?", "¿Qarun era del pueblo de qué profeta?");
  Q("Ashab-ul-Fil ka waqia kis saal pesh aaya?", "असहाबे फीलची घटना कोणत्या वर्षी घडली?", "في أي سنة وقعت حادثة أصحاب الفيل؟", "En quelle année eut lieu l’incident des gens de l’éléphant ?", "¿En qué año ocurrió el suceso de los del elefante?");
  Q("Hazrat Sulayman (AS) ne Malika-e-Saba ko khat kis parinde se bheja?", "हजरत सुलैमान (अ.स.) यांनी मलिका-ए-सबाला कोणत्या पक्ष्याकडून पत्र पाठवले?", "بأي طائر أرسل سليمان (ع) كتابه إلى ملكة سبأ؟", "Par quel oiseau Sulayman (AS) a-t-il envoyé sa lettre à la reine de Saba ?", "¿Con qué ave envió Sulayman (AS) su carta a la reina de Saba?");
  Q("Hazrat Ayyub (AS) kis cheez mein mubtala hue?", "हजरत अय्यूब (अ.स.) कोणत्या संकटात अडकले?", "بماذا ابتُلي أيوب (ع)؟", "De quelle épreuve Ayyub (AS) a-t-il souffert ?", "¿Qué aflicción sufrió Ayyub (AS)?");

  /* ================= DAY 27 ================= */
  Q("Wudu mein munh dhone ka farz?", "वुजूत तोंड धुण्याचे फर्ज?", "كم مرة يجب غسل الوجه في الوضوء؟", "Combien de fois le visage doit-il être lavé dans le wudu ?", "¿Cuántas veces es obligatorio lavar el rostro en el wudu?");
  Q("Namaz mein Sutra kya hai?", "नमाज़ेतील सुतरा काय आहे?", "ما هي السترة في الصلاة؟", "Qu’est-ce qu’une soutra dans la prière ?", "¿Qué es una sutra en la oración?");
  Q("Tahiyyatul Wudu kitni rak'at?", "तहिय्यतुल वुजू किती रकअती?", "كم ركعة في تحية الوضوء؟", "Combien de rak’as compte la prière de salutation du wudu ?", "¿Cuántas rak’as tiene la oración de saludo del wudu?");
  Q("Salatul Istikhara kitni rak'at?", "सलातुल इस्तिखारा किती रकअती?", "كم ركعة في صلاة الاستخارة؟", "Combien de rak’as compte la prière d’istikhara ?", "¿Cuántas rak’as tiene la oración de istijara?");
  Q("Azan ka maqsad kya hai?", "अज़ानचा उद्देश काय आहे?", "ما الغرض من الأذان؟", "Quel est le but de l’adhan ?", "¿Cuál es el propósito del adhan?");
  Q("Fajr ka waqt kab shuru hota hai?", "फज्रची वेळ कधी सुरू होते?", "متى يبدأ وقت الفجر؟", "Quand commence le temps du Fajr ?", "¿Cuándo comienza el tiempo del Fayr?");
  Q("Maghrib ka waqt kab shuru hota hai?", "मगरिबची वेळ कधी सुरू होते?", "متى يبدأ وقت المغرب؟", "Quand commence le temps du Maghrib ?", "¿Cuándo comienza el tiempo del Magrib?");
  Q("Juma ki namaz se pehle kya hota hai?", "जुम्म्याच्या नमाज़ेपूर्वी काय असते?", "ما الذي يسبق صلاة الجمعة؟", "Qu’est-ce qui précède la prière du vendredi ?", "¿Qué precede a la oración del viernes?");
  Q("Tahajjud kis waqt padhi jati hai?", "तहज्जुद कोणत्या वेळी पढली जाते?", "متى تُصلى التهجد؟", "À quel moment prie-t-on le Tahajjud ?", "¿A qué hora se reza el Tahayyud?");
  Q("Namaz-e-Janaza mein ruku aur sajda hota hai?", "जनाज़ाच्या नमाज़ेत रुकू व सजदा असतो का?", "هل في صلاة الجنازة ركوع وسجود؟", "La prière funéraire comporte-t-elle l’inclinaison et la prosternation ?", "¿La oración funeraria incluye inclinación y postración?");

  /* ================= DAY 28 ================= */
  Q("Bismillah kis Surah mein nahi hai?", "बिस्मिल्लाह कोणत्या सूरतीत नाही?", "في أي سورة لا توجد البسملة؟", "Dans quelle sourate la Basmala est-elle absente ?", "¿En qué sura no está la Basmala?");
  Q("Surah An-Naml mein kitne Bismillah?", "सूरत अन-नम्लमध्ये किती बिस्मिल्लाह?", "كم بسملة في سورة النمل؟", "Combien de Basmalas dans sourate An-Naml ?", "¿Cuántas Basmalas hay en la sura An-Naml?");
  Q("Quran mein kitne Surah Bismillah se shuru hain?", "कुरआनमध्ये किती सूरती बिस्मिल्लाहने सुरू होतात?", "كم سورة تبدأ بالبسملة في القرآن؟", "Combien de sourates du Coran commencent par la Basmala ?", "¿Cuántas suras del Corán comienzan con la Basmala?");
  Q("Quran mein lafz Muhammad ﷺ kitni baar?", "कुरआनमध्ये मुहम्मद ﷺ हा शब्द किती वेळा?", "كم مرة ورد لفظ محمد ﷺ في القرآن؟", "Combien de fois le nom Muhammad ﷺ apparaît-il dans le Coran ?", "¿Cuántas veces aparece el nombre Muhammad ﷺ en el Corán?");
  Q("Quran mein lafz Ahmad kitni baar?", "कुरआनमध्ये अहमद हा शब्द किती वेळा?", "كم مرة ورد لفظ أحمد في القرآن؟", "Combien de fois le nom Ahmad apparaît-il dans le Coran ?", "¿Cuántas veces aparece el nombre Ahmad en el Corán?");
  Q("Surah Al-Fatiha mein kis ki tareef hai?", "सूरत अल-फातिहामध्ये कोणाची स्तुती आहे?", "من المُثنى عليه في سورة الفاتحة؟", "Qui est loué dans sourate Al-Fatiha ?", "¿A quién se alaba en la sura Al-Fatiha?");
  Q("Quran ka aakhri Para (Juz) kaun sa hai?", "कुरआनचा शेवटचा पारा (जुज़) कोणता?", "ما آخر جزء في القرآن؟", "Quel est le dernier juz du Coran ?", "¿Cuál es el último yuz del Corán?");
  Q("Surah Al-Fil mein kitni aayat hain?", "सूरत अल-फीलमध्ये किती आयती आहेत?", "كم عدد آيات سورة الفيل؟", "Combien de versets compte sourate Al-Fil ?", "¿Cuántos versículos tiene la sura Al-Fil?");
  Q("Surah Quraish mein kitni aayat hain?", "सूरत कुरैशमध्ये किती आयती आहेत?", "كم عدد آيات سورة قريش؟", "Combien de versets compte sourate Quraysh ?", "¿Cuántos versículos tiene la sura Quraysh?");

  /* ================= DAY 29 ================= */
  Q("Imam Malik ka watan?", "इमाम मलिक यांचे वतन?", "ما وطن الإمام مالك؟", "Quel est le pays de l’imam Malik ?", "¿Cuál es la tierra del imam Malik?");
  Q("Imam Bukhari ka watan?", "इमाम बुखारी यांचे वतन?", "ما وطن الإمام البخاري؟", "Quel est le pays de l’imam al-Bukhari ?", "¿Cuál es la tierra del imam al-Bujari?");
  Q("Imam Muslim ka watan?", "इमाम मुस्लिम यांचे वतन?", "ما وطن الإمام مسلم؟", "Quel est le pays de l’imam Muslim ?", "¿Cuál es la tierra del imam Muslim?");
  Q("Imam Tirmidhi ka watan?", "इमाम तिर्मिजी यांचे वतन?", "ما وطن الإمام الترمذي؟", "Quel est le pays de l’imam at-Tirmidhi ?", "¿Cuál es la tierra del imam at-Tirmidi?");
  Q("Sunan Ibn Majah ke muallif?", "सुनन इब्ने माजाचे लेखक?", "من مؤلف سنن ابن ماجه؟", "Qui est l’auteur des Sunan Ibn Majah ?", "¿Quién es el autor de los Sunan Ibn Mayah?");
  Q("Sahifa-e-Sadiqa kis sahabi ki?", "सहीफा-ए-सादिका कोणत्या सहाबीची?", "صحيفة الصادقة لأي صحابي؟", "À quel compagnon appartient la Sahifa as-Sadiqa ?", "¿A qué compañero pertenece la Sahifa as-Sadiqa?");
  Q("Kutub-e-Sittah mein sab se pehle kaun si kitab shumar hoti hai?", "कुतुबे-सित्तामध्ये सर्वप्रथम कोणता ग्रंथ मोजला जातो?", "أي كتاب يُعد أولًا في الكتب الستة؟", "Quel livre est compté en premier parmi les six livres ?", "¿Qué libro se cuenta primero entre los seis libros?");
  Q("Kutub-e-Sittah mein kya Sunan Abu Dawud shamil hai?", "कुतुबे-सित्तामध्ये सुनन अबू दाऊद आहे का?", "هل سنن أبي داود من الكتب الستة؟", "Les Sunan Abi Dawud font-ils partie des six livres ?", "¿Los Sunan Abi Dawud forman parte de los seis libros?");
  Q("Sahihain se kya murad hai?", "सहीहैन म्हणजे काय?", "ما المراد بالصحيحين؟", "Que désigne-t-on par « les deux Sahih » ?", "¿Qué significa «los dos Sahih»?");

  /* ================= DAY 30 ================= */
  Q("Sahih Bukhari ke baad Sahih Muslim ka darja?", "सहीह बुखारीनंतर सहीह मुस्लिमचा दर्जा?", "ما مرتبة صحيح مسلم بعد صحيح البخاري؟", "Quel est le rang du Sahih Muslim après le Sahih al-Bukhari ?", "¿Cuál es el rango del Sahih Muslim después del Sahih al-Bujari?");
  Q("Kutub-e-Sittah kitni hadith ki kitab?", "कुतुबे-सित्ता किती हदीसचे ग्रंथ आहेत?", "كم عدد كتب الحديث في الكتب الستة؟", "Combien de livres de hadith forment les six livres ?", "¿Cuántos libros de hadiz forman los seis libros?");
  Q("Sihah Sitta ka matlab?", "सिहाहे-सित्ता याचा अर्थ?", "ما معنى الصحاح الستة؟", "Que signifie « Sihah Sitta » ?", "¿Qué significa «Sihah Sitta»?");
  Q("Hadith Gharib (Fard) ka matlab?", "हदीस गरीब (फर्द) याचा अर्थ?", "ما معنى الحديث الغريب (الفرد)؟", "Que signifie un hadith gharib (fard) ?", "¿Qué significa un hadiz garib (fard)?");
  Q("Hadith Mutawatir ka matlab?", "हदीस मुतवातिर याचा अर्थ?", "ما معنى الحديث المتواتر؟", "Que signifie un hadith mutawatir ?", "¿Qué significa un hadiz mutawatir?");
  Q("Hadith Daif ka matlab?", "हदीस ज़ईफ याचा अर्थ?", "ما معنى الحديث الضعيف؟", "Que signifie un hadith da’if ?", "¿Qué significa un hadiz daif?");
  Q("Hadith kis ke qaul, fe'l ya taqreer ko kehte hain?", "हदीस कोणाच्या कथन, कृती किंवा मान्यतेला म्हणतात?", "حديث من يُنسب إلى قوله أو فعله أو تقريره؟", "Le hadith rapporte les paroles, actes ou approbations de qui ?", "¿El hadiz recoge las palabras, actos o aprobaciones de quién?");
  Q("Hadith Sahih kis ko kehte hain?", "हदीस सहीह कोणाला म्हणतात?", "ما هو الحديث الصحيح؟", "Qu’appelle-t-on un hadith authentique (sahih) ?", "¿Qué es un hadiz auténtico (sahih)?");
  Q("Hadith Mawdu' kya hoti hai?", "हदीस मौज़ू काय असते?", "ما الحديث الموضوع؟", "Qu’est-ce qu’un hadith mawdu’ ?", "¿Qué es un hadiz mawdu?");
  Q("Rawi kis ko kehte hain?", "रावी कोणाला म्हणतात?", "من هو الراوي؟", "Qu’appelle-t-on le rawi ?", "¿A quién se llama rawi?");

  /* ================= JAWAB ke jo lafz baaqi the ================= */
  Q("Bhai", "भाऊ", "أخ", "Frère", "Hermano");
  Q("Chacha", "काका", "عم", "Oncle paternel", "Tío paterno");
  Q("Mamu", "मामा", "خال", "Oncle maternel", "Tío materno");
  Q("Beta", "मुलगा", "ابن", "Fils", "Hijo");
  Q("Beta (adopted)", "मुलगा (दत्तक)", "ابن بالتبني", "Fils (adoptif)", "Hijo (adoptado)");
  Q("Muta bhai", "मुतअ भाऊ", "أخ بالتبني", "Frère par adoption", "Hermano por adopción");
  Q("Nawaase", "नातवंडे (मुलीची)", "أحفاد (أبناء البنت)", "Petits-fils (par la fille)", "Nietos (hijos de la hija)");
  Q("Bhatije", "पुतणे", "أبناء الأخ", "Neveux (frères)", "Sobrinos (de hermano)");
  Q("Sahabi", "सहाबी", "صحابي", "Compagnon", "Compañero");
  Q("Shaheed", "शहीद", "شهيد", "Martyrs", "Mártires");
  Q("Khatib", "खतीब", "خطيب", "Prédicateur", "Predicador");
  Q("Siddiq", "सिद्दीक", "الصديق", "As-Siddiq (le véridique)", "As-Siddiq (el veraz)");
  Q("Farooq", "फारूक", "الفاروق", "Al-Faruq (le discernant)", "Al-Faruq (el discernidor)");
  Q("Zul Noorain", "ज़ुन्नूरैन", "ذو النورين", "Dhun-Nurayn (aux deux lumières)", "Dhun-Nurayn (el de las dos luces)");
  Q("Saifullah", "सैफुल्लाह", "سيف الله", "Sayfullah (épée d’Allah)", "Sayfullah (espada de Allah)");
  Q("Abu Turab", "अबू तुराब", "أبو تراب", "Abu Turab", "Abu Turab");
  Q("Amin-ul-Ummat", "अमीनुल उम्मत", "أمين الأمة", "Amin al-Ummah (le digne de confiance)", "Amin al-Ummah (el digno de confianza)");
  Q("Hawari", "हवारी", "حواري", "Hawari (disciple dévoué)", "Hawari (discípulo devoto)");
  Q("Zul Janahain", "ज़ुल-जनाहैन", "ذو الجناحين", "Dhul-Janahayn (aux deux ailes)", "Dhul-Yanahayn (el de las dos alas)");
  Q("Malak-ul-Maut", "मलकुल मौत", "ملك الموت", "L’ange de la mort", "El ángel de la muerte");
  Q("Khair-ul-Quroon", "खैरुल कुरून", "خير القرون", "Les meilleures générations", "Las mejores generaciones");
  Q("Sahaba ke baad", "सहाबांनंतर", "بعد الصحابة", "Après les compagnons", "Después de los compañeros");
  Q("Tabi'in ke baad", "ताबिईननंतर", "بعد التابعين", "Après les Tabi’in", "Después de los Tabiin");
  Q("Masjid-e-Nabawi ke chabutre par rehne wale gareeb sahaba", "मस्जिदे-नबवीच्या चबुतऱ्यावर राहणारे गरीब सहाबा", "فقراء الصحابة الذين كانوا يقيمون على صُفّة المسجد النبوي", "Les compagnons pauvres qui vivaient sur la plate-forme de la mosquée du Prophète", "Los compañeros pobres que vivían en la plataforma de la mezquita del Profeta");
  Q("Nabi ﷺ ke sathi", "नबी ﷺ यांचे साथी", "أصحاب النبي ﷺ", "Les compagnons du Prophète ﷺ", "Los compañeros del Profeta ﷺ");
  Q("Nabi ﷺ ke dost", "नबी ﷺ यांचे मित्र", "أصدقاء النبي ﷺ", "Les amis du Prophète ﷺ", "Los amigos del Profeta ﷺ");
  Q("Nabi ﷺ ke ghulam", "नबी ﷺ यांचे गुलाम", "عبيد النبي ﷺ", "Les esclaves du Prophète ﷺ", "Los esclavos del Profeta ﷺ");
  Q("Nabi ﷺ ke dushman", "नबी ﷺ यांचे शत्रू", "أعداء النبي ﷺ", "Les ennemis du Prophète ﷺ", "Los enemigos del Profeta ﷺ");
  Q("Nabi ﷺ ke", "नबी ﷺ यांचे", "للنبي ﷺ", "Du Prophète ﷺ", "Del Profeta ﷺ");
  Q("Sahaba ke", "सहाबांचे", "للصحابة", "Des compagnons", "De los compañeros");
  Q("Imam ke", "इमामचे", "للإمام", "De l’imam", "Del imam");
  Q("Wali ke", "वलीचे", "لولي", "Du wali", "Del wali");
  Q("Urdu", "उर्दू", "الأردية", "L’ourdou", "El urdu");
  Q("Farsi", "फारसी", "الفارسية", "Le persan", "El persa");
  Q("Arabic", "अरबी", "العربية", "L’arabe", "El árabe");
  Q("Hebrew", "हिब्रू", "العبرية", "L’hébreu", "El hebreo");
  Q("Quran ka dil", "कुरआनचे हृदय", "قلب القرآن", "Le cœur du Coran", "El corazón del Corán");
  Q("Quran ka noor", "कुरआनचा नूर", "نور القرآن", "La lumière du Coran", "La luz del Corán");
  Q("Quran ki jaan", "कुरआनचा आत्मा", "روح القرآن", "L’âme du Coran", "El alma del Corán");
  Q("Ahsan-ul-Qasas (behtareen qissa)", "अहसनुल कसस (सर्वोत्तम कथा)", "أحسن القصص", "Ahsan al-Qasas (le plus beau récit)", "Ahsan al-Qasas (el mejor relato)");
  Q("Huda", "हुदा (मार्गदर्शन)", "الهدى", "La guidée", "La guía");
  Q("Rahmat", "रहमत (दया)", "الرحمة", "La miséricorde", "La misericordia");
  Q("Subah", "पहाट", "الفجر (الصبح)", "L’aube", "El alba");
  Q("Raat", "रात्र", "الليل", "La nuit", "La noche");
  Q("Din", "दिवस", "النهار", "Le jour", "El día");
  Q("Andhera", "अंधार", "الظلمة", "Les ténèbres", "La oscuridad");
  Q("Log", "लोक", "الناس", "Les gens", "La gente");
  Q("Dushman", "शत्रू", "العدو", "L’ennemi", "El enemigo");
  Q("Dost", "मित्र", "الصديق", "L’ami", "El amigo");
  Q("Malik", "मालक", "المالك", "Le possesseur", "El dueño");
  Q("Kasrat-e-Khair", "कसरते खैर (विपुल भले)", "كثرة الخير", "Abondance de bien", "Abundancia de bien");
  Q("Sabr", "संयम", "الصبر", "La patience", "La paciencia");
  Q("Subah ke Rab se", "पहाटेच्या रबपासून", "برب الفلق", "Auprès du Seigneur de l’aube", "Del Señor del alba");
  Q("Raat ke Rab se", "रात्रीच्या रबपासून", "برب الليل", "Auprès du Seigneur de la nuit", "Del Señor de la noche");
  Q("Pahad ke Rab se", "डोंगराच्या रबपासून", "برب الجبل", "Auprès du Seigneur de la montagne", "Del Señor de la montaña");
  Q("Samandar ke Rab se", "समुद्राच्या रबपासून", "برب البحر", "Auprès du Seigneur de la mer", "Del Señor del mar");
  Q("Haathi", "हत्ती", "الفيل", "L’éléphant", "El elefante");
  Q("Oont", "उंट", "الجمل", "Le chameau", "El camello");
  Q("Ghoda", "घोडा", "الفرس", "Le cheval", "El caballo");
  Q("Sher", "वाघ", "الأسد", "Le lion", "El león");
  Q("Hashim", "हाशिम", "هاشم", "Hachim", "Hashim");
  Q("Aus", "औस", "الأوس", "Aws", "Aws");
  Q("Khazraj", "खजरज", "الخزرج", "Khazraj", "Jazray");
  Q("Unki qaum ke zalim log", "त्यांच्या कौमचे जुलमी लोक", "الظالمون من قومه", "Les injustes de son peuple", "Los injustos de su pueblo");
  Q("Unki qaum ke zalim log ne", "त्यांच्या कौमच्या जुलमी लोकांनी", "ظالمون من قومه", "Les injustes de son peuple", "Los injustos de su pueblo");
  Q("Allah ke hukm se murda zinda karna", "अल्लाहच्या आदेशाने मेलेल्याला जिवंत करणे", "إحياء الموتى بإذن الله", "Ressusciter les morts par la permission d’Allah", "Resucitar a los muertos con permiso de Allah");
  Q("Aag bujhani", "आग विझवणे", "إطفاء النار", "Éteindre le feu", "Apagar el fuego");
  Q("Kashti chalana", "नाव चालवणे", "تشغيل السفينة", "Naviguer", "Navegar");
  Q("Pahad hatana", "डोंगर हलवणे", "إزالة الجبل", "Déplacer une montagne", "Mover una montaña");
  Q("Gyarah", "अकरा", "أحد عشر", "Onze", "Once");
  Q("Das", "दहा", "عشرة", "Dix", "Diez");
  Q("Barah", "बारा", "اثنا عشر", "Douze", "Doce");
  Q("Nau", "नऊ", "تسعة", "Neuf", "Nueve");
  Q("Qabool hona", "कबूल होणे", "الإجابة", "Être exaucée", "Ser aceptada");
  Q("Rizq", "रिज्क", "الرزق", "La subsistance", "El sustento");
  Q("Shifa", "शिफा", "الشفاء", "La guérison", "La curación");
  Q("Nabi ﷺ ki do sahibzadiyon se nikah ki wajah se", "नबी ﷺ यांच्या दोन साहेबजादींशी निकाह केल्यामुळे", "لأنه تزوج ابنتي النبي ﷺ", "Parce qu’il a épousé deux filles du Prophète ﷺ", "Porque se casó con dos hijas del Profeta ﷺ");
  Q("Do noor wale the", "दोन नूर असलेले होते", "كان ذا نورين", "Il avait deux lumières", "Tenía dos luces");
  Q("Do masjidein banayi", "दोन मशिदी बांधल्या", "بنى مسجدين", "Il a bâti deux mosquées", "Construyó dos mezquitas");
  Q("Do mulkon ke hakim the", "दोन देशांचे हाकिम होते", "كان حاكم بلدين", "Il gouvernait deux pays", "Gobernaba dos países");
  Q("Suraj ghuroob", "सूर्यास्त", "غروب الشمس", "Le coucher du soleil", "La puesta del sol");
  Q("Zawal", "ज़वाल (सूर्य मध्यान्हावरून ढळणे)", "الزوال", "Le zénith passé", "El cenit pasado");
  Q("Ihram ke baad", "एहरामनंतर", "بعد الإحرام", "Après l’ihram", "Después del ihram");
  Q("Ihram se pehle", "एहरामपूर्वी", "قبل الإحرام", "Avant l’ihram", "Antes del ihram");
  Q("Tawaf ke baad", "तवाफनंतर", "بعد الطواف", "Après le tawaf", "Después del tawaf");
  Q("Sai ke baad", "सईनंतर", "بعد السعي", "Après le sa’i", "Después del sai");
  Q("Zaroori (shart)", "आवश्यक (अट)", "شرط", "Nécessaire (une condition)", "Necesario (una condición)");
  Q("Mana hai", "मना आहे", "ممنوع", "Interdit", "Prohibido");
  Q("Sirf Juma ko", "फक्त जुम्म्याला", "يوم الجمعة فقط", "Seulement le vendredi", "Solo el viernes");
  Q("Zaroori nahi", "आवश्यक नाही", "غير لازم", "Pas nécessaire", "No es necesario");
  Q("Khaane peene se", "खाण्या-पिण्यापासून", "عن الطعام والشراب", "De manger et boire", "De comer y beber");
  Q("Baat karne se", "बोलण्यापासून", "عن الكلام", "De parler", "De hablar");
  Q("Chalne se", "चालण्यापासून", "عن المشي", "De marcher", "De caminar");
  Q("Sone se", "झोपण्यापासून", "عن النوم", "De dormir", "De dormir");
  Q("Namaz ke saath", "नमाज़ेसोबत", "مع الصلاة", "Avec la prière", "Con la oración");
  Q("Roze ke saath", "रोज़्यासोबत", "مع الصيام", "Avec le jeûne", "Con el ayuno");
  Q("Hajj ke saath", "हजसोबत", "مع الحج", "Avec le pèlerinage", "Con la peregrinación");
  Q("Jihad ke saath", "जिहादसोबत", "مع الجهاد", "Avec le jihad", "Con el yihad");
  Q("Sanad aur Matan", "सनद आणि मतन", "الإسناد والمتن", "La chaîne (isnad) et le texte (matn)", "La cadena (isnad) y el texto (matn)");
  Q("Sirf Sanad", "फक्त सनद", "الإسناد فقط", "Seulement la chaîne", "Solo la cadena");
  Q("Sirf Matan", "फक्त मतन", "المتن فقط", "Seulement le texte", "Solo el texto");
  Q("Hadith", "हदीस", "الحديث", "Le hadith", "El hadiz");
  Q("Fiqh", "फिक्ह", "الفقه", "Le fiqh", "El fiqh");
  Q("Tafsir", "तफसीर", "التفسير", "Le tafsir", "El tafsir");
  Q("Lughat", "लुगत", "اللغة", "La langue", "La lengua");
  Q("Misr ke Aziz ne", "मिस्रच्या अझीझने", "عزيز مصر", "L’Aziz d’Égypte", "El Aziz de Egipto");
  Q("Fir'aun ne", "फिरऔनने", "فرعون", "Pharaon", "El Faraón");
  Q("Qaroon ne", "कारूनने", "قارون", "Qarun", "Qarun");
  Q("Nabi ﷺ ki paidaish ke saal", "नबी ﷺ यांच्या जन्माच्या वर्षी", "في سنة مولد النبي ﷺ", "L’année de la naissance du Prophète ﷺ", "El año del nacimiento del Profeta ﷺ");
  Q("Hijrat ke saal", "हिजरतच्या वर्षी", "في سنة الهجرة", "L’année de l’Hégire", "El año de la Hiyra");
  Q("Fatah Makkah ke saal", "फतहे मक्केच्या वर्षी", "في سنة فتح مكة", "L’année de la conquête de La Mecque", "El año de la conquista de La Meca");
  Q("Badr ke saal", "बद्रच्या वर्षी", "في سنة بدر", "L’année de Badr", "El año de Badr");
  Q("Hudhud", "हुदहुद", "الهدهد", "La huppe (hudhud)", "La abubilla (hudhud)");
  Q("Kabootar", "कबूतर", "الحمامة", "Le pigeon", "La paloma");
  Q("Eagle", "गरुड", "العقاب", "L’aigle", "El águila");
  Q("Kauwa", "कावळा", "الغراب", "Le corbeau", "El cuervo");
  Q("Bimari", "आजार", "المرض", "La maladie", "La enfermedad");
  Q("Qaid", "कैद", "السجن", "La captivité", "El cautiverio");
  Q("Jang", "लढाई", "الحرب", "La guerre", "La guerra");
  Q("Gharibi", "गरिबी", "الفقر", "La pauvreté", "La pobreza");
  Q("Aage ki rukawat", "पुढील अडथळा", "ساتر أمامه", "Un obstacle devant", "Un obstáculo delante");
  Q("Aage ki deewar", "पुढील भिंत", "جدار أمامه", "Un mur devant", "Una pared delante");
  Q("Aage ki kitab", "पुढील पुस्तक", "كتاب أمامه", "Un livre devant", "Un libro delante");
  Q("Aage ka sahaba", "पुढील सहाबी", "صحابي أمامه", "Un compagnon devant", "Un compañero delante");
  Q("Namaz ke waqt ka elan", "नमाज़ेच्या वेळेची घोषणा", "الإعلام بوقت الصلاة", "Annoncer l’heure de la prière", "Anunciar la hora de la oración");
  Q("Khushi ka elan", "आनंदाची घोषणा", "إعلان الفرح", "Annoncer une joie", "Anunciar una alegría");
  Q("Jang ka elan", "लढाईची घोषणा", "إعلان الحرب", "Annoncer la guerre", "Anunciar la guerra");
  Q("Bazar ka elan", "बाजाराची घोषणा", "إعلان السوق", "Annoncer le marché", "Anunciar el mercado");
  Q("Subah sadiq ke baad", "सुब्ह सादिकनंतर", "بعد الفجر الصادق", "Après l’aube véridique", "Después del alba verdadera");
  Q("Zawal ke baad", "ज़वालनंतर", "بعد الزوال", "Après le zénith", "Después del cenit");
  Q("Suraj nikalne ke baad", "सूर्योदयानंतर", "بعد طلوع الشمس", "Après le lever du soleil", "Después de la salida del sol");
  Q("Raat ke aadhe hisse mein", "रात्रीच्या अर्ध्या भागात", "في منتصف الليل", "Au milieu de la nuit", "En mitad de la noche");
  Q("Suraj doobne par", "सूर्यास्तावर", "عند غروب الشمس", "Au coucher du soleil", "Al ponerse el sol");
  Q("Asr ke baad", "अस्रनंतर", "بعد العصر", "Après l’Asr", "Después del Asr");
  Q("Zawal par", "ज़वालला", "عند الزوال", "Au zénith", "En el cenit");
  Q("Fajr par", "फज्रला", "عند الفجر", "Au Fajr", "En el Fayr");
  Q("Khutba", "खुत्बा", "الخطبة", "Le sermon (khutba)", "El sermón (jutba)");
  Q("Taraweeh", "तरावीह", "التراويح", "Les Tarawih", "El Tarawih");
  Q("Eid ka khutba", "ईदचा खुत्बा", "خطبة العيد", "Le sermon de l’Aïd", "El sermón del Eid");
  Q("Tahajjud", "तहज्जुद", "التهجد", "Le Tahajjud", "El Tahayyud");
  Q("Raat ke aakhri hisse mein", "रात्रीच्या शेवटच्या भागात", "في الثلث الأخير من الليل", "Dans le dernier tiers de la nuit", "En el último tercio de la noche");
  Q("Zuhr ke baad", "झुहरनंतर", "بعد الظهر", "Après le Dhuhr", "Después del Dhuhr");
  Q("Subah ko", "सकाळी", "صباحًا", "Le matin", "Por la mañana");
  Q("Sirf ruku", "फक्त रुकू", "الركوع فقط", "Seulement l’inclinaison", "Solo la inclinación");
  Q("Sirf sajda", "फक्त सजदा", "السجود فقط", "Seulement la prosternation", "Solo la postración");
  Q("Chhe sahih kitab", "सहा सहीह ग्रंथ", "ستة كتب صحيحة", "Six livres authentiques", "Seis libros auténticos");
  Q("Paanch sahih kitab", "पाच सहीह ग्रंथ", "خمسة كتب صحيحة", "Cinq livres authentiques", "Cinco libros auténticos");
  Q("Saat sahih kitab", "सात सहीह ग्रंथ", "سبعة كتب صحيحة", "Sept livres authentiques", "Siete libros auténticos");
  Q("Chaar sahih kitab", "चार सहीह ग्रंथ", "أربعة كتب صحيحة", "Quatre livres authentiques", "Cuatro libros auténticos");
  Q("Kisi tabqe mein sirf ek rawi", "कोणत्याही स्तरावर फक्त एक रावी", "راوٍ واحد في طبقة ما", "Un seul narrateur à un niveau", "Un solo narrador en un nivel");
  Q("Do rawiyon ki", "दोन रावींची", "براويين", "Deux narrateurs", "Dos narradores");
  Q("Teen rawiyon ki", "तीन रावींची", "بثلاثة رواة", "Trois narrateurs", "Tres narradores");
  Q("Itne rawi ke jhoot par ittefaq muhaal ho", "इतके रावी की त्यांचा खोट्यावर एकमत अशक्य", "رواة يستحيل تواطؤهم على الكذب", "Tant de narrateurs qu’un accord sur un mensonge est impossible", "Tantos narradores que un acuerdo en la mentira es imposible");
  Q("Gharhi hui (jhooti) hadith", "रचलेली (खोटी) हदीस", "حديث موضوع (مكذوب)", "Un hadith forgé (faux)", "Un hadiz inventado (falso)");
  Q("Kamzor hadith", "कमकुवत हदीस", "حديث ضعيف", "Un hadith faible", "Un hadiz débil");
  Q("Mashhoor hadith", "प्रसिद्ध हदीस", "حديث مشهور", "Un hadith célèbre", "Un hadiz famoso");
  Q("Lambi hadith", "लांब हदीस", "حديث طويل", "Un hadith long", "Un hadiz largo");
  Q("Hadith bayan karne wale ko", "हदीस सांगणाऱ्याला", "الذي يروي الحديث", "Celui qui rapporte le hadith", "El que narra el hadiz");
  Q("Hadith ki kitab ko", "हदीसच्या ग्रंथाला", "كتاب الحديث", "Le livre de hadith", "El libro de hadiz");
  Q("Hadith ke matan ko", "हदीसच्या मतनला", "متن الحديث", "Le texte du hadith", "El texto del hadiz");
  Q("Hadith ki sanad ko", "हदीसच्या सनदला", "إسناد الحديث", "La chaîne du hadith", "La cadena del hadiz");
  Q("Jis ki sanad muttasil ho, rawi adil aur zabit hon aur shaaz/illat se paak ho", "जिची सनद मुत्तसिल असेल, रावी न्यायी व स्मरणशक्तीचे असतील आणि शाज़/इल्लतपासून मुक्त असेल", "ما اتصل إسناده وعدل رواته وضبطوا وسلِم من الشذوذ والعلة", "Chaîne continue, narrateurs intègres et précis, exempt de bizarrerie et de défaut caché", "Cadena continua, narradores íntegros y precisos, libre de rareza y defecto oculto");
  Q("Jo mashhoor ho", "जी प्रसिद्ध असेल", "ما كان مشهورًا", "Celui qui est célèbre", "El que es famoso");
  Q("Jo lambi ho", "जी लांब असेल", "ما كان طويلًا", "Celui qui est long", "El que es largo");
  Q("Jo purani ho", "जी जुनी असेल", "ما كان قديمًا", "Celui qui est ancien", "El que es antiguo");
  Q("Sirf Makki", "फक्त मक्की", "مكية فقط", "Seulement mecquoise", "Solo mequí");
  Q("Sirf Madani", "फक्त मदनी", "مدنية فقط", "Seulement médinoise", "Solo medinense");
})();
