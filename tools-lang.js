/* tools-lang.js — Tasbeeh, Namaz ka Hisaab aur Qibla Finder ke jumle
   मराठी / العربية / Français / Español mein (tools.js + index.html).
   ---------------------------------------------------------------------------
   Ye file app.js ke engine ke liye do cheezein deti hai (window.FQ_XLANG):
     dict : poore jumle (bilkul wahi Roman matn jo tools.js likhta hai)
     pat  : number/naam wale jumle — [regex, tarjuma] ($1 $2 = regex ke groups)

   app.js ka engine pehle dict dekhta hai, phir pat, phir purani 4 zubaanoN ka D.
   Jo yahan na ho wahan English dikhta hai (kabhi khaali/undefined nahi).

   ⚠️ Zikr ka Arabi matn (سُبْحَانَ اللَّهِ waghairah) aur namaz ke naam kabhi nahi
      badalte — sirf matlab, label aur button badalte hain. */
(function () {
  'use strict';
  var X = window.FQ_XLANG || (window.FQ_XLANG = {});
  var L = ['mr', 'ar', 'fr', 'es'];

  /* ───────────────────────── 1) POORE JUMLA ─────────────────────────
     har entry: [मराठी, العربية, Français, Español] */
  var D = {
    /* ===== TASBEEH — tile ===== */
    'Tasbeeh kholein': ['तस्बीह उघडा', 'افتح المسبحة', 'Ouvrir le tasbih', 'Abrir el tasbih'],
    /* ===== TASBEEH — sheet ===== */
    'Zikr chunein': ['झिक्र निवडा', 'اختر الذكر', 'Choisir le dhikr', 'Elegir el dhikr'],
    'tap karein': ['टॅप करा', 'اضغط', 'touchez', 'toca'],
    'Apna': ['स्वतःचे', 'مخصّص', 'Personnalisé', 'Personalizado'],
    'jaise 500': ['उदा. 500', 'مثال 500', 'ex. 500', 'p. ej. 500'],
    'Apna target': ['स्वतःचे लक्ष्य', 'هدفك الخاص', 'Votre objectif', 'Tu objetivo'],
    'Namaz ke baad: SubhanAllah 33 • Alhamdulillah 33 • Allahu Akbar 34':
      ['नमाज़नंतर: सुभानअल्लाह ३३ • अल्हम्दुलिल्लाह ३३ • अल्लाहु अकबर ३४',
       'بعد الصلاة: سبحان الله ٣٣ • الحمد لله ٣٣ • الله أكبر ٣٤',
       'Après la prière : SubhanAllah 33 • Alhamdulillah 33 • Allahu Akbar 34',
       'Después de la oración: SubhanAllah 33 • Alhamdulillah 33 • Allahu Akbar 34'],
    'Peechhe': ['मागे', 'تراجع', 'Annuler', 'Deshacer'],
    'Zero': ['शून्य', 'تصفير', 'Zéro', 'Cero'],
    'Vibration': ['कंपन', 'اهتزاز', 'Vibration', 'Vibración'],
    'Awaaz': ['आवाज', 'الصوت', 'Son', 'Sonido'],
    'Screen on': ['स्क्रीन सुरू', 'إبقاء الشاشة مضاءة', 'Écran allumé', 'Pantalla encendida'],
    'Aaj': ['आज', 'اليوم', 'Aujourd’hui', 'Hoy'],
    'Kul': ['एकूण', 'الإجمالي', 'Total', 'Total'],
    'Round poore': ['पूर्ण फेऱ्या', 'دورات مكتملة', 'Tours complets', 'Rondas completas'],
    'Pichhle 7 din ka tasbeeh': ['गेल्या ७ दिवसांची तस्बीह', 'مسبحة الأيام السبعة الماضية', 'Tasbih des 7 derniers jours', 'Tasbih de los últimos 7 días'],
    'bina hadd': ['मर्यादेशिवाय', 'بلا حد', 'sans limite', 'sin límite'],
    /* ===== TASBEEH — zikr ke matlab ===== */
    'Allah paak hai': ['अल्लाह पवित्र आहे', 'الله منزَّه عن كل نقص', 'Allah est exempt de tout défaut', 'Allah está libre de todo defecto'],
    'Saari tareef Allah ke liye': ['सर्व स्तुती अल्लाहसाठी', 'كل الثناء لله', 'Toute louange est à Allah', 'Toda alabanza es para Allah'],
    'Allah sabse bada hai': ['अल्लाह सर्वात मोठा आहे', 'الله أكبر من كل شيء', 'Allah est le plus grand', 'Allah es el más grande'],
    'Allah ke siwa koi ibaadat ke laayaq nahi': ['अल्लाहशिवाय उपासनेयोग्य कोणीही नाही', 'لا معبود بحق إلا الله', 'Nul n’est digne d’adoration sauf Allah', 'Nadie merece adoración excepto Allah'],
    'Main Allah se bakhshish maangta hoon': ['मी अल्लाहकडे क्षमा मागतो', 'أطلب المغفرة من الله', 'Je demande pardon à Allah', 'Pido perdón a Allah'],
    'Ae Allah, Muhammad ﷺ par rehmat bhej': ['हे अल्लाह, मुहम्मद ﷺ वर दया पाठव', 'اللهم صلِّ على محمد ﷺ', 'Ô Allah, prie sur Muhammad ﷺ', 'Oh Allah, bendice a Muhammad ﷺ'],
    'Allah paak hai, aur usi ki tareef hai': ['अल्लाह पवित्र आहे आणि त्याचीच स्तुती आहे', 'الله منزَّه، وله الحمد', 'Allah est exempt de défaut et à Lui la louange', 'Allah está libre de defecto y Suya es la alabanza'],
    'Gunah se bachne aur neki ki taaqat sirf Allah se': ['पापापासून बचण्याची आणि नेकीची ताकद फक्त अल्लाहकडून', 'لا حَوْل عن المعصية ولا قوة على الطاعة إلا بالله', 'La force d’éviter le péché et de faire le bien ne vient que d’Allah', 'La fuerza para evitar el pecado y hacer el bien solo viene de Allah'],
    /* ===== TASBEEH — paigham ===== */
    'Ginti pehle se 0 hai': ['गणना आधीच ० आहे', 'العدّ صفر بالفعل', 'Le compte est déjà à 0', 'La cuenta ya está en 0'],
    'Namaz ke baad ka zikr mukammal. JazakAllah': ['नमाज़नंतरचा झिक्र पूर्ण. जझाकल्लाह', 'اكتمل ذكر ما بعد الصلاة. جزاك الله خيرًا', 'Le dhikr d’après-prière est terminé. JazakAllah', 'El dhikr posterior a la oración está completo. YazakiAllah'],
    'SubhanAllah se shuru karein': ['सुभानअल्लाहपासून सुरू करा', 'ابدأ بسبحان الله', 'Commencez par SubhanAllah', 'Empieza con SubhanAllah'],
    '1 ya us se zyada ginti likhein': ['१ किंवा त्यापेक्षा जास्त संख्या लिहा', 'اكتب ١ أو أكثر', 'Écrivez 1 ou plus', 'Escribe 1 o más'],

    /* ===== NAMAZ — card ===== */
    'Azan ke waqt': ['अज़ानच्या वेळी', 'وقت الأذان', 'À l’heure de l’adhan', 'A la hora del adhan'],
    'Tap karke set karein': ['टॅप करून सेट करा', 'اضغط للضبط', 'Touchez pour régler', 'Toca para ajustar'],
    /* ===== NAMAZ — panel ===== */
    'Namaz ka Hisaab': ['नमाज़चा हिशोब', 'متابعة الصلاة', 'Suivi des prières', 'Registro de oraciones'],
    'Band': ['बंद करा', 'إغلاق', 'Fermer', 'Cerrar'],
    'Azan ke waqt set karein 👇': ['अज़ानच्या वेळी सेट करा 👇', 'اضبط وقت الأذان 👇', 'Réglez l’heure de l’adhan 👇', 'Ajusta la hora del adhan 👇'],
    ' padh li': [' पढली', ' صُلّيت', ' récitée', ' recitada'],
    'Time box = azan ka waqt (badal sakte hain). ✓ = aaj padh li. Poori 5 par +25 XP.':
      ['वेळेचा बॉक्स = अज़ानची वेळ (बदलू शकता). ✓ = आज पढली. पूर्ण ५ वर +२५ XP.',
       'مربع الوقت = وقت الأذان (يمكن تغييره). ✓ = صُلّيت اليوم. الخمس كاملة +٢٥ XP.',
       'Case horaire = heure de l’adhan (modifiable). ✓ = récitée aujourd’hui. Les 5 complètes : +25 XP.',
       'Casilla de hora = hora del adhan (se puede cambiar). ✓ = recitada hoy. Las 5 completas: +25 XP.'],
    'Mahine ka hisaab (5 boxes)': ['महिन्याचा हिशोब (५ बॉक्स)', 'حساب الشهر (٥ مربعات)', 'Bilan du mois (5 cases)', 'Balance del mes (5 casillas)'],
    'PICHLE 7 DIN': ['गेले ७ दिवस', 'آخر ٧ أيام', '7 DERNIERS JOURS', 'ÚLTIMOS 7 DÍAS'],
    'SETTINGS': ['सेटिंग्ज', 'الإعدادات', 'RÉGLAGES', 'AJUSTES'],
    'Waqt dobara lein (location se)': ['वेळ पुन्हा घ्या (लोकेशनवरून)', 'خذ الوقت مرة أخرى (حسب الموقع)', 'Reprendre l’heure (selon la position)', 'Volver a tomar la hora (según la ubicación)'],
    'Location se azan ke waqt lein': ['लोकेशनवरून अज़ानची वेळ घ्या', 'خذ وقت الأذان حسب الموقع', 'Prendre l’heure de l’adhan selon la position', 'Tomar la hora del adhan según la ubicación'],
    'Azan ki awaaz': ['अज़ानचा आवाज', 'صوت الأذان', 'Son de l’adhan', 'Sonido del adhan'],
    'Awaaz sunein': ['आवाज ऐका', 'اسمع الصوت', 'Écouter le son', 'Escuchar el sonido'],
    'ANDROID APP': ['ANDROID अ‍ॅप', 'تطبيق ANDROID', 'APPLICATION ANDROID', 'APP DE ANDROID'],
    'Azan app band ho tab bhi waqt par bajegi.': ['अ‍ॅप बंद असतानाही अज़ान वेळेवर वाजेल.', 'سيُرفع الأذان في وقته حتى والتطبيق مغلق.', 'L’adhan sonnera à l’heure même application fermée.', 'El adhan sonará a su hora incluso con la app cerrada.'],
    'Azan ka test': ['अज़ानची चाचणी', 'تجربة الأذان', 'Test de l’adhan', 'Prueba del adhan'],
    'Kitne din ka chahiye? Jitna chunenge utna hi banega.': ['किती दिवसांचे हवे? जितके निवडाल तितकेच तयार होईल.', 'كم يومًا تريد؟ سيُنشأ بقدر ما تختار.', 'Pour combien de jours ? Autant que vous choisissez.', '¿Para cuántos días? Se crearán los que elijas.'],
    'Ya apne din likhein:': ['किंवा तुमचे दिवस लिहा:', 'أو اكتب عدد الأيام:', 'Ou écrivez vos jours :', 'O escribe tus días:'],
    'PHONE CALENDAR MEIN AZAN ALARM': ['फोन कॅलेंडरमध्ये अज़ान अलार्म', 'تنبيه الأذان في تقويم الهاتف', 'ALARME D’ADHAN DANS LE CALENDRIER', 'ALARMA DE ADHAN EN EL CALENDARIO'],
    /* ===== AZAN ki awaazein ===== */
    'Awaaz band': ['आवाज बंद', 'بلا صوت', 'Sans son', 'Sin sonido'],
    'Azan Al-Aqsa': ['अज़ान अल-अक्सा', 'أذان الأقصى', 'Adhan Al-Aqsa', 'Adhan Al-Aqsa'],
    'Meethi Azan': ['गोड अज़ान', 'أذان عذب', 'Adhan doux', 'Adhan dulce'],
    'Azan 3': ['अज़ान ३', 'أذان ٣', 'Adhan 3', 'Adhan 3'],
    /* ===== MAHINE KA HISAAB ===== */
    'Is mahine': ['या महिन्यात', 'هذا الشهر', 'Ce mois', 'Este mes'],
    'Pichla mahina': ['मागील महिना', 'الشهر الماضي', 'Mois dernier', 'Mes pasado'],
    'Theek hai': ['ठीक आहे', 'حسنًا', 'D’accord', 'De acuerdo'],
    'Is mahine ka koi din abhi gina nahi gaya.': ['या महिन्याचा एकही दिवस अजून मोजला गेलेला नाही.', 'لم يُحسب أي يوم من هذا الشهر بعد.', 'Aucun jour de ce mois n’a encore été compté.', 'Todavía no se ha contado ningún día de este mes.'],
    'MashaAllah! Bohot behtareen mahina — Allah qubool farmaye.': ['माशा अल्लाह! अत्यंत उत्तम महिना — अल्लाह कबूल करो.', 'ما شاء الله! شهر ممتاز جدًا — تقبّل الله.', 'MashaAllah ! Un mois excellent — qu’Allah l’accepte.', '¡MashaAllah! Un mes excelente: que Allah lo acepte.'],
    'Achha raha. Thodi aur koshish — chhooti hui namazein qaza padh lein.': ['बरा गेला. थोडा अजून प्रयत्न — चुकलेल्या नमाज़ा कजा पढा.', 'كان جيدًا. اجتهد أكثر قليلًا — واقضِ ما فاتك من الصلوات.', 'C’était bien. Encore un effort — rattrapez les prières manquées.', 'Estuvo bien. Un poco más de esfuerzo: recupera las oraciones perdidas.'],
    'Koi baat nahi, agle mahine himmat karein. Chhooti hui namazein qaza padh lein.': ['काही हरकत नाही, पुढच्या महिन्यात धैर्य धरा. चुकलेल्या नमाज़ा कजा पढा.', 'لا بأس، اجتهد في الشهر القادم. واقضِ ما فاتك من الصلوات.', 'Ce n’est rien, reprenez courage le mois prochain. Rattrapez les prières manquées.', 'No pasa nada, ánimo el próximo mes. Recupera las oraciones perdidas.'],
    'Allah se dua karein ke namaz ki aadat de. Aaj se hi shuru kar lein — har namaz ginti mein aayegi.': ['अल्लाहकडे नमाज़ची सवय देण्याची दुआ करा. आजपासूनच सुरू करा — प्रत्येक नमाज़ मोजली जाईल.', 'ادعُ الله أن يعينك على الصلاة. ابدأ من اليوم — كل صلاة تُحسب.', 'Demandez à Allah de vous donner l’habitude de la prière. Commencez aujourd’hui — chaque prière compte.', 'Pide a Allah que te dé la constancia en la oración. Empieza hoy: cada oración cuenta.'],
    'DIN-BA-DIN (box dabakar badal sakte hain)': ['दिवसानुदिवस (बॉक्स दाबून बदलू शकता)', 'يومًا بيوم (اضغط المربع لتغييره)', 'JOUR PAR JOUR (touchez une case pour changer)', 'DÍA A DÍA (toca una casilla para cambiar)'],
    'Is mahine aur pichle mahine ka data rakha jata hai.': ['या आणि मागील महिन्याचीच नोंद ठेवली जाते.', 'يُحفظ بيانات هذا الشهر والشهر الماضي فقط.', 'Seuls ce mois et le précédent sont conservés.', 'Solo se guardan este mes y el anterior.'],
    /* ===== QIBLA ===== */
    'Qibla Finder': ['किबला दिशा', 'بوصلة القبلة', 'Boussole de la Qibla', 'Brújula de la Qibla'],
    'Qibla ka zaavia (Uttar se)': ['किबल्याचा कोन (उत्तरेपासून)', 'زاوية القبلة (من الشمال)', 'Angle de la Qibla (depuis le nord)', 'Ángulo de la Qibla (desde el norte)'],
    'Kaaba se doori': ['काबापासून अंतर', 'المسافة إلى الكعبة', 'Distance à la Kaaba', 'Distancia a la Kaaba'],
    'Aapki location': ['तुमचे स्थान', 'موقعك', 'Votre position', 'Tu ubicación'],
    'Location dobara lein': ['लोकेशन पुन्हा घ्या', 'خذ الموقع مرة أخرى', 'Reprendre la position', 'Volver a tomar la ubicación'],
    'Location haath se likhein': ['लोकेशन हाताने लिहा', 'اكتب الموقع يدويًا', 'Saisir la position', 'Escribir la ubicación'],
    'Set karein': ['सेट करा', 'اضبط', 'Définir', 'Fijar'],
    'jaise 28.61, 77.20': ['उदा. 28.61, 77.20', 'مثال 28.61, 77.20', 'ex. 28.61, 77.20', 'p. ej. 28.61, 77.20'],
    'Latitude, Longitude': ['अक्षांश, रेखांश', 'خط العرض، خط الطول', 'Latitude, longitude', 'Latitud, longitud'],
    'Compass nahi mila ya ijazat band hai. Dial mein Uttar (N) upar hai aur Kaaba ka nishan Qibla ki disha batata hai.':
      ['कंपास सापडला नाही किंवा परवानगी बंद आहे. डायलमध्ये उत्तर (N) वर आहे आणि काबाचे चिन्ह किबल्याची दिशा दाखवते.',
       'لم يُعثر على البوصلة أو الإذن مغلق. في القرص الشمال (N) إلى الأعلى وعلامة الكعبة تُبيّن اتجاه القبلة.',
       'Boussole introuvable ou permission refusée. Sur le cadran, le nord (N) est en haut et le repère de la Kaaba indique la Qibla.',
       'No se encontró la brújula o el permiso está cerrado. En el dial, el norte (N) está arriba y la marca de la Kaaba indica la Qibla.'],
    'Compass ki ijazat nahi mili': ['कंपासची परवानगी मिळाली नाही', 'لم يُمنح إذن البوصلة', 'Permission de la boussole refusée', 'No se concedió permiso para la brújula'],
    'Location ki ijazat nahi mili. Neeche apne shehar ke coordinates likhein.': ['लोकेशनची परवानगी मिळाली नाही. खाली तुमच्या शहराचे निर्देशांक लिहा.', 'لم يُمنح إذن الموقع. اكتب إحداثيات مدينتك أدناه.', 'Permission de localisation refusée. Saisissez les coordonnées de votre ville ci-dessous.', 'No se concedió permiso de ubicación. Escribe las coordenadas de tu ciudad abajo.'],
    'Coordinates sahi nahi (jaise 28.61, 77.20)': ['निर्देशांक बरोबर नाहीत (उदा. 28.61, 77.20)', 'الإحداثيات غير صحيحة (مثال 28.61, 77.20)', 'Coordonnées incorrectes (ex. 28.61, 77.20)', 'Coordenadas incorrectas (p. ej. 28.61, 77.20)'],
    'Location mil rahi hai…': ['लोकेशन मिळत आहे…', 'جارٍ تحديد الموقع…', 'Localisation en cours…', 'Obteniendo ubicación…'],
    'Kholein': ['उघडा', 'افتح', 'Ouvrir', 'Abrir'],
    'Compass shuru karein': ['कंपास सुरू करा', 'شغّل البوصلة', 'Démarrer la boussole', 'Iniciar brújula'],
    'Phone ko sidha (flat) rakhein, magnet ya dhatu se door. Compass theek na ho to phone ko 8 ki shakl mein ghumakar calibrate karein. Compass mein kuch degree ka farq ho sakta hai — agar aapke ilaqe ki masjid ya mehrab ka rukh maloom ho to usi ko tarjeeh dein.':
      ['फोन सपाट ठेवा, चुंबक किंवा धातूपासून दूर. कंपास बरोबर नसेल तर फोन ८ च्या आकारात फिरवून कॅलिब्रेट करा. कंपासमध्ये काही अंशांचा फरक असू शकतो — तुमच्या भागातील मशीद किंवा मेहराबची दिशा माहीत असेल तर तीच प्रमाण माना.',
       'ضع الهاتف مستويًا بعيدًا عن المغناطيس والمعادن. وإن لم تستقم البوصلة فحرّك الهاتف على شكل ٨ لمعايرتها. وقد يختلف الاتجاه بدرجات قليلة — فإن عرفتَ اتجاه مسجد حيّك أو محرابه فاعتمدْه.',
       'Posez le téléphone à plat, loin des aimants et du métal. Si la boussole n’est pas juste, faites un 8 avec le téléphone pour la calibrer. Quelques degrés d’écart sont possibles — si vous connaissez la direction de la mosquée ou du mihrab de votre quartier, fiez-vous-y.',
       'Pon el teléfono plano, lejos de imanes y metales. Si la brújula no está bien, gira el teléfono en forma de 8 para calibrarla. Puede haber algunos grados de diferencia; si conoces la dirección de la mezquita o del mihrab de tu zona, guíate por ella.'],
    'Aapka Safar': ['तुमचा प्रवास', 'رحلتك', 'Votre parcours', 'Tu camino'],

    /* ===== Tasbeeh — tile ki chhoti line aur baaqi lafz ===== */
    'Shuru karo': ['सुरू करा', 'اضغط للبدء', 'touchez pour commencer', 'toca para empezar'],
    'shuru karein': ['सुरू करा', 'اضغط للبدء', 'touchez pour commencer', 'toca para empezar'],
    'Shuru Karein': ['सुरू करा', 'ابدأ', 'Commencer', 'Empezar'],
    'Shuru karein': ['सुरू करा', 'ابدأ', 'Commencer', 'Empezar'],
    'Target': ['लक्ष्य', 'الهدف', 'Objectif', 'Objetivo'],
    'Band karein': ['बंद करा', 'إغلاق', 'Fermer', 'Cerrar'],
    'Course ke alfaz rang mein hain': ['अभ्यासक्रमातील शब्द रंगात आहेत', 'كلمات المنهج ملوّنة', 'Les mots du parcours sont en couleur', 'Las palabras del curso están en color'],
    'Course ke alfaz ka rang band hai': ['अभ्यासक्रमातील शब्दांचा रंग बंद आहे', 'تلوين كلمات المنهج متوقف', 'La couleur des mots du parcours est désactivée', 'El color de las palabras del curso está desactivado'],
    'Is ayat mein ye lafz juRa hua / badla hua rupp hai': ['या आयतीत हा शब्द जोडलेला / बदललेला रूप आहे', 'هذه الكلمة في الآية جاءت موصولة أو بصيغة متغيرة', 'Dans ce verset, ce mot est joint ou sous une forme modifiée', 'En este versículo esta palabra aparece unida o en forma modificada'],
    'Course: Din': ['अभ्यासक्रम: दिवस', 'المنهج: اليوم', 'Parcours : Jour', 'Curso: Día'],
    'Wapas': ['परत', 'رجوع', 'Retour', 'Volver'],
    'Zubaan': ['भाषा', 'اللغة', 'Langue', 'Idioma'],
    'Language': ['भाषा', 'اللغة', 'Langue', 'Idioma']
  };

  /* ───────────────────────── 2) NUMBER WALE JUMLA ─────────────────────────
     [regex, [मराठी, العربية, Français, Español]] — $1 $2 = regex ke groups */
  var P = [
    /* tasbeeh tile: "SubhanAllah • shuru karein" */
    [/^(.+?) • shuru karein$/, ['$1 • सुरू करा', '$1 • اضغط للبدء', '$1 • touchez pour commencer', '$1 • toca para empezar']],
    /* tasbeeh tap ka aria-label: "SubhanAllah: 3 / 33 — ginne ke liye tap karein" */
    [/^(.+?): (\d+)( \/ \d+)? — ginne ke liye tap karein$/, ['$1: $2$3 — मोजण्यासाठी टॅप करा', '$1: $2$3 — اضغط للعدّ', '$1 : $2$3 — touchez pour compter', '$1: $2$3 — toca para contar']],
    /* "33 poore — ab Alhamdulillah" */
    [/^(\d+) poore — ab (.+)$/, ['$1 पूर्ण — आता $2', 'أتممت $1 — الآن $2', '$1 récités — maintenant $2', '$1 completados — ahora $2']],
    /* "Mashallah, 33 poore" */
    [/^Mashallah, (\d+) poore$/, ['माशा अल्लाह, $1 पूर्ण', 'ما شاء الله، أتممت $1', 'MashaAllah, $1 récités', '¡MashaAllah, $1 completados!']],
    /* "/ 33 • daur 1/2" */
    [/^\/ (\d+) • daur (\d+)\/(\d+)$/, ['/ $1 • फेरी $2/$3', '/ $1 • دورة $2/$3', '/ $1 • tour $2/$3', '/ $1 • ronda $2/$3']],
    /* "SubhanAllah ki ginti (3) 0 karein? Aaj/kul ka hisaab nahi badlega." — confirm */
    [/^(.+?) ki ginti \((\d+)\) 0 karein\? Aaj\/kul ka hisaab nahi badlega\.$/,
      ['$1 ची गणना ($2) शून्य करायची? आजचा/एकूण हिशोब बदलणार नाही.',
       'أتصفير عدّ $1 ($2)؟ لن يتغيّر حساب اليوم/الإجمالي.',
       'Remettre à 0 le compte de $1 ($2) ? Le total du jour ne changera pas.',
       '¿Poner en 0 la cuenta de $1 ($2)? El total de hoy no cambiará.']],
    /* namaz card: "3h 20m • aaj 2/5 ✓"  ya "45 min • aaj 2/5 ✓" */
    [/^(.+?) • aaj (\d+)\/5 ✓$/, ['$1 • आज $2/५ ✓', '$1 • اليوم $2/٥ ✓', '$1 • aujourd’hui $2/5 ✓', '$1 • hoy $2/5 ✓']],
    /* namaz panel: "Poori namaz 5 din" */
    [/^Poori namaz (\d+) din$/, ['पूर्ण नमाज़ $1 दिवस', 'صلوات كاملة $1 يومًا', 'Prières complètes $1 jours', 'Oraciones completas $1 días']],
    /* panel stats: "Aaj 3/5" */
    [/^Aaj (\d+)\/5$/, ['आज $1/५', 'اليوم $1/٥', 'Aujourd’hui $1/5', 'Hoy $1/5']],
    /* report boxes: "3 chhooti" / "3 padhi" / "10 din poori" */
    [/^(\d+) chhooti$/, ['$1 चुकली', '$1 فائتة', '$1 manquées', '$1 perdidas']],
    [/^(\d+) padhi$/, ['$1 पढली', '$1 صُلّيت', '$1 récitées', '$1 recitadas']],
    [/^(\d+) din poori$/, ['$1 दिवस पूर्ण', '$1 يومًا كاملة', '$1 jours complets', '$1 días completos']],
    /* "Kul 150 namazein (30 din × 5)" */
    [/^Kul (\d+) namazein \((\d+) din × 5\)$/, ['एकूण $1 नमाज़ा ($2 दिवस × ५)', 'الإجمالي $1 صلاة ($2 يوم × ٥)', 'Total $1 prières ($2 jours × 5)', 'Total $1 oraciones ($2 días × 5)']],
    /* ICS: "7 din" / "7 din ka alarm banayein" */
    [/^(\d+) din$/, ['$1 दिवस', '$1 يومًا', '$1 jours', '$1 días']],
    [/^(\d+) din ka alarm banayein$/, ['$1 दिवसांचा अलार्म बनवा', 'أنشئ تنبيهًا لـ $1 يومًا', 'Créer l’alarme de $1 jours', 'Crear la alarma de $1 días']],
    /* panel: "Agli namaz: Fajr 5:12 am" aur "3h 20m baaki" */
    [/^Agli namaz: (.+)$/, ['पुढील नमाज़: $1', 'الصلاة القادمة: $1', 'Prochaine prière : $1', 'Próxima oración: $1']],
    [/^(.+) baaki$/, ['$1 बाकी', '$1 متبقية', '$1 restantes', '$1 restantes']],
    /* qibla: "292°" — jaisa hai waisa */
    [/^(\d+(?:\.\d+)?)°$/, ['$1°', '$1°', '$1°', '$1°']],
    /* tasbeeh tile: "Aaj 2026-1-1 • SubhanAllah 5/33" (ya bina hadd: "... SubhanAllah 5") */
    [/^Aaj (\S+) • (.+?) (\d+)(\/\d+)?$/, ['आज $1 • $2 $3$4', 'اليوم $1 • $2 $3$4', 'Aujourd’hui $1 • $2 $3$4', 'Hoy $1 • $2 $3$4']],
    /* tasbeeh tile: sirf "SubhanAllah • shuru karein" ke baad kuch aur na ho */
    [/^(.+) • shuru karein$/, ['$1 • सुरू करा', '$1 • اضغط للبدء', '$1 • touchez pour commencer', '$1 • toca para empezar']],
    /* quran page: "Course ke alfaz rang mein hain (is surah mein 12) — tap karke matlab dekhein" */
    [/^Course ke alfaz rang mein hain \(is surah mein (\d+)\) — tap karke matlab dekhein$/,
      ['अभ्यासक्रमातील शब्द रंगात आहेत (या सूरतीत $1) — टॅप करून अर्थ पाहा',
       'كلمات المنهج ملوّنة (في هذه السورة $1) — اضغط لرؤية المعنى',
       'Les mots du parcours sont en couleur ($1 dans cette sourate) — touchez pour voir le sens',
       'Las palabras del curso están en color ($1 en esta sura): toca para ver el significado']],
    /* quran page: "Course: Din 12" */
    [/^Course: Din (\d+)$/, ['अभ्यासक्रम: दिवस $1', 'المنهج: اليوم $1', 'Parcours : Jour $1', 'Curso: Día $1']],
    /* quran page: "Page 12" / "Page 12 · Juz 3" */
    [/^Page (\d+)$/, ['पान $1', 'صفحة $1', 'Page $1', 'Página $1']],
    [/^Page (\d+) · Juz (\d+)$/, ['पान $1 · जुज़ $2', 'صفحة $1 · جزء $2', 'Page $1 · Juz $2', 'Página $1 · Yuz $2']]
  ];

  var i, j, z, k, q;
  for (i = 0; i < L.length; i++) {
    z = X[L[i]]; if (!z) continue;
    if (!z.dict) z.dict = {};
    for (k in D) if (Object.prototype.hasOwnProperty.call(D, k) && z.dict[k] == null) z.dict[k] = D[k][i];
    if (!z.pat) z.pat = [];
    for (j = 0; j < P.length; j++) {
      var dup = false;
      for (q = 0; q < z.pat.length; q++) if (z.pat[q][0].source === P[j][0].source) { dup = true; break; }
      if (!dup) z.pat.push([P[j][0], P[j][1][i]]);
    }
  }
})();
