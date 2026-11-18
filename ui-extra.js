/* ui-extra.js — app.js ke `D` / `PAT` ki baaqi entries nayi 4 zubaanoN mein
   मराठी / العربية / Français / Español
   ---------------------------------------------------------------------------
   app.js ka auto-engine pehle `FQ_XLANG[zubaan].dict` dekhta hai (ye file wahin
   bharta hai), phir `.pat` (number wale jumle), phir purani 4 zubaanoN ka D/PAT.
   Jo yahan na ho wahan English dikhta hai — kuch bhi khaali/undefined nahi.

   Ye file sirf WOH jumle deti hai jo lang-extra.js aur tools-lang.js mein nahi
   the: install popup, backup, exam, admin panel, certificate, onboarding,
   Quran page ke chhote jumle, aur qibla ke kuch jumle. */
(function () {
  'use strict';
  var X = window.FQ_XLANG || (window.FQ_XLANG = {});
  var L = ['mr', 'ar', 'fr', 'es'];

  /* [मराठी, العربية, Français, Español] */
  var D = {
    /* ===== Install popup ===== */
    'Fahm-ul-Quran app install karein': ['Fahm-ul-Quran अ‍ॅप इन्स्टॉल करा', 'ثبّت تطبيق Fahm-ul-Quran', 'Installez l’application Fahm-ul-Quran', 'Instala la app Fahm-ul-Quran'],
    'Home screen par app ki tarah kholein.': ['होम स्क्रीनवर अ‍ॅपसारखे उघडा.', 'افتحه من الشاشة الرئيسية كتطبيق.', 'Ouvrez-la depuis l’écran d’accueil comme une app.', 'Ábrela desde la pantalla de inicio como una app.'],
    'Ek tap mein khule, browser ki zaroorat nahi': ['एका टॅपमध्ये उघडते, ब्राउझरची गरज नाही', 'تفتح بضغطة واحدة، دون حاجة إلى المتصفح', 'S’ouvre en un geste, sans navigateur', 'Se abre con un toque, sin navegador'],
    'Internet ke baghair bhi chale': ['इंटरनेटशिवायही चालते', 'تعمل حتى دون إنترنت', 'Fonctionne même sans internet', 'Funciona incluso sin internet'],
    'Roz ka sabaq aur streak saath rahe': ['रोजचा धडा आणि स्ट्रीक सोबत राहील', 'يبقى درسك اليومي وسلسلتك معك', 'Votre leçon et votre série restent avec vous', 'Tu lección y tu racha te acompañan'],
    'Install karein': ['इन्स्टॉल करा', 'ثبّت', 'Installer', 'Instalar'],
    'Baad mein': ['नंतर', 'لاحقًا', 'Plus tard', 'Más tarde'],
    'Menu se install karein': ['मेनूमधून इन्स्टॉल करा', 'ثبّت من القائمة', 'Installez depuis le menu', 'Instala desde el menú'],
    'Browser mein kholein': ['ब्राउझरमध्ये उघडा', 'افتحه في المتصفح', 'Ouvrez dans le navigateur', 'Ábrelo en el navegador'],
    'Safari mein kholein': ['Safari मध्ये उघडा', 'افتحه في Safari', 'Ouvrez dans Safari', 'Ábrelo en Safari'],
    'Is browser mein install nahi ho sakta. Chrome / Safari mein kholne par install ka button milega.': ['या ब्राउझरमध्ये इन्स्टॉल होऊ शकत नाही. Chrome / Safari मध्ये उघडल्यास इन्स्टॉलचे बटण मिळेल.', 'لا يمكن التثبيت في هذا المتصفح. افتحه في Chrome أو Safari وسيظهر زر التثبيت.', 'Impossible d’installer dans ce navigateur. Ouvrez Chrome ou Safari pour voir le bouton d’installation.', 'No se puede instalar en este navegador. Ábrelo en Chrome o Safari y verás el botón de instalar.'],
    'iPhone par app sirf Safari se install hoti hai. Link copy karke Safari mein kholein.': ['iPhone वर अ‍ॅप फक्त Safari मधून इन्स्टॉल होते. लिंक कॉपी करून Safari मध्ये उघडा.', 'على iPhone لا يُثبَّت التطبيق إلا من Safari. انسخ الرابط وافتحه في Safari.', 'Sur iPhone, l’app ne s’installe que depuis Safari. Copiez le lien et ouvrez-le dans Safari.', 'En iPhone la app solo se instala desde Safari. Copia el enlace y ábrelo en Safari.'],
    'Link copy karein': ['लिंक कॉपी करा', 'انسخ الرابط', 'Copier le lien', 'Copiar el enlace'],

    /* ===== Backup ===== */
    'Backup / Restore': ['बॅकअप / रिस्टोर', 'نسخ احتياطي / استعادة', 'Sauvegarde / Restauration', 'Copia / Restaurar'],
    'Apna sara progress ek file mein save karein, aur nayi phone par wapas laayein.': ['तुमची सर्व प्रगती एका फाइलमध्ये सेव्ह करा आणि नवीन फोनवर परत आणा.', 'احفظ كل تقدّمك في ملف واحد واستعده في هاتف جديد.', 'Enregistrez toute votre progression dans un fichier et retrouvez-la sur un nouveau téléphone.', 'Guarda todo tu progreso en un archivo y recupéralo en un teléfono nuevo.'],
    'Free hai, login ya server ki zaroorat nahi.': ['मोफत आहे, लॉग इन किंवा सर्व्हरची गरज नाही.', 'مجاني، دون تسجيل دخول أو خادم.', 'Gratuit, sans connexion ni serveur.', 'Es gratis, sin inicio de sesión ni servidor.'],
    'Abhi tak backup nahi liya.': ['अजून बॅकअप घेतलेला नाही.', 'لم تأخذ نسخة احتياطية بعد.', 'Aucune sauvegarde pour l’instant.', 'Todavía no has hecho copia.'],
    'Backup file banayein': ['बॅकअप फाइल बनवा', 'أنشئ ملف نسخة احتياطية', 'Créer le fichier de sauvegarde', 'Crear el archivo de copia'],
    'Backup file se restore karein': ['बॅकअप फाइलमधून रिस्टोर करा', 'استعِد من ملف النسخة الاحتياطية', 'Restaurer depuis un fichier', 'Restaurar desde un archivo'],

    /* ===== Exam / certificate ===== */
    'Exam ka natija': ['परीक्षेचा निकाल', 'نتيجة الاختبار', 'Résultat de l’examen', 'Resultado del examen'],
    'Certificate ke liye pehle Day 50 tak poore karein!': ['प्रमाणपत्रासाठी आधी दिवस ५० पर्यंत पूर्ण करा!', 'أكمل حتى اليوم ٥٠ أولًا للحصول على الشهادة!', 'Terminez jusqu’au jour 50 d’abord pour le certificat !', '¡Completa hasta el día 50 primero para el certificado!'],
    'Kamzor Lafz Revision': ['कमकुवत शब्दांची उजळणी', 'مراجعة الكلمات الضعيفة', 'Révision des mots faibles', 'Repaso de palabras débiles'],
    '10 sawal • pass/fail nahi, sirf mashq': ['१० प्रश्न • पास/फेल नाही, फक्त सराव', '١٠ أسئلة • بلا نجاح/رسوب، تدريب فقط', '10 questions • ni réussite ni échec, juste un entraînement', '10 preguntas • sin aprobado/suspenso, solo práctica'],
    'Exam:': ['परीक्षा:', 'الاختبار:', 'Examen :', 'Examen:'],
    'Silver Exam (500 lafz)': ['सिल्व्हर परीक्षा (५०० शब्द)', 'اختبار الفضي (٥٠٠ كلمة)', 'Examen Argent (500 mots)', 'Examen Plata (500 palabras)'],
    'Final / Gold Exam (900 lafz)': ['फायनल / गोल्ड परीक्षा (९०० शब्द)', 'الاختبار النهائي / الذهبي (٩٠٠ كلمة)', 'Examen Final / Or (900 mots)', 'Examen Final / Oro (900 palabras)'],
    'Kisi din ka exam': ['कोणत्याही दिवसाची परीक्षा', 'اختبار أي يوم', 'Examen d’un jour', 'Examen de un día'],
    'Din:': ['दिवस:', 'اليوم:', 'Jour :', 'Día:'],
    'Sawalon ki ginti (5 se 150):': ['प्रश्नांची संख्या (५ ते १५०):', 'عدد الأسئلة (٥ إلى ١٥٠):', 'Nombre de questions (5 à 150) :', 'Número de preguntas (5 a 150):'],
    'Pass ka % (1 se 100):': ['पास % (१ ते १००):', 'نسبة النجاح % (١ إلى ١٠٠):', '% de réussite (1 à 100) :', '% para aprobar (1 a 100):'],
    'Sahi jawab hara dikhayein': ['बरोबर उत्तर हिरवे दाखवा', 'أظهر الإجابة الصحيحة بالأخضر', 'Afficher les bonnes réponses en vert', 'Mostrar las respuestas correctas en verde'],
    'Exam kholein': ['परीक्षा उघडा', 'افتح الاختبار', 'Ouvrir l’examen', 'Abrir el examen'],
    'Admin Certificate Panel': ['अ‍ॅडमिन प्रमाणपत्र पॅनेल', 'لوحة شهادات المشرف', 'Panneau des certificats (admin)', 'Panel de certificados (admin)'],
    'Kisi bhi profile ya koi bhi naam ke liye Completion Certificate banayein.': ['कोणत्याही प्रोफाइलसाठी किंवा कोणत्याही नावासाठी पूर्णता प्रमाणपत्र बनवा.', 'أنشئ شهادة إتمام لأي ملف أو أي اسم.', 'Créez un certificat d’achèvement pour n’importe quel profil ou nom.', 'Crea un certificado de finalización para cualquier perfil o nombre.'],
    'Profile chunein:': ['प्रोफाइल निवडा:', 'اختر ملفًا:', 'Choisir un profil :', 'Elige un perfil:'],
    'Ya koi bhi naam likhein (khali ho to upar wali profile ka naam):': ['किंवा कोणतेही नाव लिहा (रिकामे असल्यास वरील प्रोफाइलचे नाव):', 'أو اكتب أي اسم (إن كان فارغًا يُستخدم اسم الملف أعلاه):', 'Ou saisissez un nom (si vide, le profil ci-dessus est utilisé) :', 'O escribe cualquier nombre (si está vacío, se usa el perfil de arriba):'],
    'Tareekh:': ['तारीख:', 'التاريخ:', 'Date :', 'Fecha:'],
    'Silver score (optional, 50 mein se):': ['सिल्व्हर गुण (ऐच्छिक, ५० पैकी):', 'درجة الفضي (اختياري، من ٥٠):', 'Score Argent (facultatif, sur 50) :', 'Puntuación Plata (opcional, de 50):'],
    'Silver (50 Din)': ['सिल्व्हर (५० दिवस)', 'فضي (٥٠ يومًا)', 'Argent (50 jours)', 'Plata (50 días)'],
    'Gold (90 Din)': ['गोल्ड (९० दिवस)', 'ذهبي (٩٠ يومًا)', 'Or (90 jours)', 'Oro (90 días)'],
    'Chuni hui profile delete karein': ['निवडलेली प्रोफाइल डिलीट करा', 'احذف الملف المحدد', 'Supprimer le profil choisi', 'Borrar el perfil elegido'],
    'Certificate Preview': ['प्रमाणपत्र पूर्वावलोकन', 'معاينة الشهادة', 'Aperçu du certificat', 'Vista previa del certificado'],
    'Certificate par chhapne wala naam': ['प्रमाणपत्रावर छापला जाणारा नाव', 'الاسم المطبوع على الشهادة', 'Nom imprimé sur le certificat', 'Nombre que se imprime en el certificado'],
    'jaise 45 — khali = score nahi likha jayega': ['उदा. ४५ — रिकामे = गुण लिहिले जाणार नाहीत', 'مثال ٤٥ — فارغ = لا تُكتب درجة', 'ex. 45 — vide = aucun score imprimé', 'p. ej. 45 — vacío = no se imprime puntuación'],

    /* ===== Onboarding ===== */
    'Fahm-ul-Quran mein khush aamdeed': ['Fahm-ul-Quran मध्ये स्वागत आहे', 'مرحبًا بك في Fahm-ul-Quran', 'Bienvenue dans Fahm-ul-Quran', 'Bienvenido a Fahm-ul-Quran'],
    'Quran ke 900 lafz, namaz ki duaein, tajweed — sab ek jagah, aasan Urdu mein. Sirf 10 minute roz, 90 din mein poora course.': ['कुरआनचे ९०० शब्द, नमाजच्या दुआ, तजवीद — सर्व एकाच ठिकाणी, सोप्या भाषेत. रोज फक्त १० मिनिटे, ९० दिवसांत पूर्ण अभ्यासक्रम.', '٩٠٠ كلمة قرآنية وأدعية الصلاة والتجويد — كل ذلك في مكان واحد بلغة سهلة. ١٠ دقائق يوميًا فقط، والمنهج كامل في ٩٠ يومًا.', '900 mots du Coran, les invocations de la prière et le tajwid — tout au même endroit, en langage simple. 10 minutes par jour seulement, tout le parcours en 90 jours.', '900 palabras del Corán, las súplicas de la oración y el tajwid, todo en un solo lugar y en lenguaje sencillo. Solo 10 minutos al día y el curso completo en 90 días.'],
    'Roz 10 lafz, 90 din mein 900': ['रोज १० शब्द, ९० दिवसांत ९००', '١٠ كلمات يوميًا، ٩٠٠ في ٩٠ يومًا', '10 mots par jour, 900 en 90 jours', '10 palabras al día, 900 en 90 días'],
    'Har din 10 naye Quran ke alfaz. Har lafz ke saath mashq, tafseel, aur us ayat ka hawala jisme wo lafz aaya hai. Exam pass karke agla din kholein.': ['दररोज कुरआनचे १० नवीन शब्द. प्रत्येक शब्दासोबत सराव, तपशील आणि ज्या आयतीत तो शब्द आला आहे तिचा संदर्भ. परीक्षा उत्तीर्ण होऊन पुढील दिवस उघडा.', '١٠ كلمات قرآنية جديدة كل يوم، مع كل كلمة تدريب وتفصيل ومرجع الآية التي وردت فيها. اجتز الاختبار لتفتح اليوم التالي.', '10 nouveaux mots du Coran chaque jour. Pour chaque mot : entraînement, détails et la référence du verset où il apparaît. Réussissez l’examen pour débloquer le jour suivant.', '10 palabras nuevas del Corán cada día. Con cada palabra: práctica, detalles y la referencia del versículo donde aparece. Aprueba el examen para abrir el día siguiente.'],
    'Qari Mishary ki asli awaaz': ['कारी मिशारी यांचा खरा आवाज', 'صوت القارئ مشاري الحقيقي', 'La vraie voix du qari Mishary', 'La voz real del qari Mishary'],
    'Har lafz, har dua, har ayat — asli Qari ki recording se suno. Robot awaaz nahi, sahi makharij ke saath. Offline bhi sun sakte hain.': ['प्रत्येक शब्द, प्रत्येक दुआ, प्रत्येक आयत — खऱ्या कारीच्या रेकॉर्डिंगमधून ऐका. रोबोट आवाज नाही, योग्य मखारिजसह. ऑफलाइनही ऐकू शकता.', 'كل كلمة وكل دعاء وكل آية — استمع إلى تسجيل قارئ حقيقي، ليس صوتًا آليًا، مع مخارج صحيحة. ويعمل دون إنترنت أيضًا.', 'Chaque mot, chaque invocation, chaque verset — écoutez un enregistrement d’un vrai qari, sans voix robotique et avec une prononciation correcte. Fonctionne aussi hors ligne.', 'Cada palabra, cada súplica y cada versículo: escucha la grabación de un qari real, sin voz robótica y con pronunciación correcta. También funciona sin internet.'],
    'Allah aapko ilm se nawaze, samajh ata farmaye, aur amal ki taufeeq de. Ameen. 🤲': ['अल्लाह तुम्हाला ज्ञान दे, समज दे आणि आचरणाची ताकद दे. आमीन. 🤲', 'زادك الله علمًا، ورزقك فهمًا، وأعانك على العمل. آمين. 🤲', 'Qu’Allah vous accorde le savoir, la compréhension et la capacité d’agir. Amine. 🤲', 'Que Allah te conceda conocimiento, comprensión y la capacidad de actuar. Amín. 🤲'],

    /* ===== Quran page (chhote jumle) ===== */
    'Internet nahi mila. Pehli baar Quran.com se laana padta hai; ek baar khulne ke baad ye hissa offline bhi chalega.': ['इंटरनेट मिळाले नाही. पहिल्यांदा Quran.com वरून आणावे लागते; एकदा उघडल्यावर हा भाग ऑफलाइनही चालेल.', 'لا يوجد إنترنت. في المرة الأولى يُجلب من Quran.com، وبعد فتحه مرة واحدة يعمل هذا الجزء دون إنترنت.', 'Pas d’internet. La première fois, il faut le charger depuis Quran.com ; une fois ouvert, cette partie fonctionne aussi hors ligne.', 'No hay internet. La primera vez hay que cargarlo desde Quran.com; una vez abierto, esta parte también funciona sin conexión.'],
    'Data Quran.com se, ek baar dekhne ke baad offline bhi chalta hai.': ['डेटा Quran.com वरून, एकदा पाहिल्यानंतर ऑफलाइनही चालतो.', 'البيانات من Quran.com، وتعمل دون إنترنت بعد عرضها مرة واحدة.', 'Données de Quran.com ; fonctionne hors ligne après une première consultation.', 'Datos de Quran.com; funciona sin conexión después de verlo una vez.'],
    'Mishary Rashid Alafasy': ['मिशारी राशिद अल-अफासी', 'مشاري راشد العفاسي', 'Mishary Rashid Alafasy', 'Mishary Rashid Alafasy'],
    'Abdur-Rahman As-Sudais': ['अब्दुर्रहमान अस-सुदैस', 'عبد الرحمن السديس', 'Abdur-Rahman As-Sudais', 'Abdur-Rahman As-Sudais'],
    'Mahmoud Khalil Al-Husary': ['महमूद खलील अल-हुसरी', 'محمود خليل الحصري', 'Mahmoud Khalil Al-Husary', 'Mahmoud Khalil Al-Husary'],
    'Abdul Basit (Murattal)': ['अब्दुल बासित (मुरत्तल)', 'عبد الباسط (مرتل)', 'Abdul Basit (Murattal)', 'Abdul Basit (Murattal)'],
    'Qari Mishary Alafasy': ['कारी मिशारी अल-अफासी', 'القارئ مشاري العفاسي', 'Qari Mishary Alafasy', 'Qari Mishary Alafasy'],
    'Course ke alfaz rang mein hain — tap karke matlab dekhein': ['अभ्यासक्रमातील शब्द रंगात आहेत — टॅप करून अर्थ पाहा', 'كلمات المنهج ملوّنة — اضغط لرؤية المعنى', 'Les mots du parcours sont en couleur — touchez pour voir le sens', 'Las palabras del curso están en color: toca para ver el significado'],
    'Surah / 2:255 / page 50 / juz 5 / ayat ka hissa (Arabic)': ['सूरत / 2:255 / पान 50 / जुज़ 5 / आयतीचा भाग (अरबी)', 'سورة / 2:255 / صفحة 50 / جزء 5 / جزء من آية (عربي)', 'Sourate / 2:255 / page 50 / juz 5 / partie d’un verset (arabe)', 'Sura / 2:255 / página 50 / yuz 5 / parte de un versículo (árabe)'],
    'Chhota': ['छोटा', 'أصغر', 'Plus petit', 'Más pequeño'],
    'Bada': ['मोठा', 'أكبر', 'Plus grand', 'Más grande'],
    'Back to App': ['अ‍ॅपवर परत', 'عودة إلى التطبيق', 'Retour à l’app', 'Volver a la app'],
    'Har ayat kitni baar': ['प्रत्येक आयत किती वेळा', 'كم مرة لكل آية', 'Répéter chaque verset', 'Repetir cada versículo'],

    /* ===== Qibla — baaqi jumle ===== */
    'Compass ka intezaar…': ['कंपासची वाट…', 'بانتظار البوصلة…', 'En attente de la boussole…', 'Esperando la brújula…'],
    'Qibla ki taraf ✓': ['किबल्याच्या दिशेने ✓', 'باتجاه القبلة ✓', 'Vers la Qibla ✓', 'Hacia la Qibla ✓'],
    'Baayein ghumein': ['डावीकडे वळा', 'استدر يسارًا', 'Tournez à gauche', 'Gira a la izquierda'],
    'Daayein ghumein': ['उजवीकडे वळा', 'استدر يمينًا', 'Tournez à droite', 'Gira a la derecha'],
    'Kaaba ki disha — compass se': ['काबाची दिशा — कंपासने', 'اتجاه الكعبة — بالبوصلة', 'Direction de la Kaaba — par boussole', 'Dirección de la Kaaba: con brújula'],

    /* ===== Chhote tukde / misc ===== */
    'Aap yahin ruk gaye': ['तुम्ही येथेच थांबलात', 'لقد توقفت هنا', 'Vous vous êtes arrêté ici', 'Te detuviste aquí'],
    'Afsos, jawab durust nahi tha': ['अफसोस, उत्तर बरोबर नव्हते', 'عذرًا، الإجابة غير صحيحة', 'Désolé, la réponse était fausse', 'Lo siento, la respuesta no era correcta'],
    'Afsos, durust jawab ye tha:': ['अफसोस, बरोबर उत्तर हे होते:', 'عذرًا، الإجابة الصحيحة كانت:', 'Désolé, la bonne réponse était :', 'Lo siento, la respuesta correcta era:'],
    'MashaAllah! Aap Mahir ban gaye': ['माशा अल्लाह! तुम्ही तज्ज्ञ झालात', 'ما شاء الله! أصبحت ماهرًا', 'MashaAllah ! Vous êtes devenu expert', '¡MashaAllah! Te has hecho experto'],
    'Aapne saare 15 sawal durust kiye.': ['तुम्ही सर्व १५ प्रश्न बरोबर केले.', 'أجبت عن الأسئلة الخمسة عشر كلها بشكل صحيح.', 'Vous avez répondu correctement aux 15 questions.', 'Respondiste correctamente las 15 preguntas.'],
    'Aapne saare 30 din mukammal kar liye!': ['तुम्ही सर्व ३० दिवस पूर्ण केले!', 'لقد أكملت الأيام الثلاثين كلها!', 'Vous avez terminé les 30 jours !', '¡Has completado los 30 días!'],
    'Aapne is round ke saare Sahaba sawal mukammal kiye.': ['तुम्ही या फेरीतील सर्व सहाबा प्रश्न पूर्ण केले.', 'أكملت كل أسئلة الصحابة في هذه الجولة.', 'Vous avez terminé toutes les questions des compagnons de cette manche.', 'Has completado todas las preguntas de los compañeros de esta ronda.'],
    'Saare cards match ho gaye.': ['सर्व कार्ड जुळली.', 'تطابقت كل البطاقات.', 'Toutes les cartes sont trouvées.', 'Todas las cartas coincidieron.'],
    'Mashaallah! Full Marks!': ['माशा अल्लाह! पूर्ण गुण!', 'ما شاء الله! علامة كاملة!', 'MashaAllah ! Sans faute !', '¡MashaAllah! ¡Puntuación perfecta!'],
    'Achi Koshish!': ['चांगला प्रयत्न!', 'محاولة جيدة!', 'Bon effort !', '¡Buen intento!'],
    'Thodi aur mashq karein, agli baar behtar hoga.': ['थोडा अजून सराव करा, पुढच्या वेळी बरे होईल.', 'تدرّب قليلًا أكثر، ستكون أفضل في المرة القادمة.', 'Entraînez-vous un peu plus, ce sera mieux la prochaine fois.', 'Practica un poco más, la próxima vez irá mejor.'],
    'Naya sawal': ['नवीन प्रश्न', 'سؤال جديد', 'Nouvelle question', 'Nueva pregunta'],
    'XP ke liye login zaroori hai.': ['XP साठी लॉग इन आवश्यक आहे.', 'تسجيل الدخول مطلوب لكسب XP.', 'La connexion est nécessaire pour gagner des XP.', 'Se requiere iniciar sesión para ganar XP.'],
    'Admin account ko XP nahi milta.': ['अ‍ॅडमिन खात्याला XP मिळत नाही.', 'حساب المشرف لا يكسب XP.', 'Le compte admin ne gagne pas d’XP.', 'La cuenta de admin no gana XP.'],
    'Yahin ruk jayein? Abhi tak ke stars mil jayenge.': ['येथेच थांबायचे? आतापर्यंतचे स्टार्स मिळतील.', 'أتوقف هنا؟ ستحصل على النجوم حتى الآن.', 'Arrêter ici ? Vous garderez les étoiles gagnées.', '¿Detenerse aquí? Conservarás las estrellas ganadas.'],
    'Yahin ruk jayein? Abhi tak ka XP mil jayega.': ['येथेच थांबायचे? आतापर्यंतचे XP मिळेल.', 'أتوقف هنا؟ ستحصل على XP حتى الآن.', 'Arrêter ici ? Vous garderez les XP gagnés.', '¿Detenerse aquí? Recibirás los XP ganados.'],
    'Nasheed Off': ['नशीद बंद', 'النشيد متوقف', 'Nasheed arrêté', 'Nasheed apagado'],
    'Nasheed': ['नशीद', 'النشيد', 'Nasheed', 'Nasheed'],
    'Mubarak Ho!': ['अभिनंदन!', 'مبارك!', 'Félicitations !', '¡Felicidades!'],
    'Aap jeet gaye! Allah aap ko aur ilm de.': ['तुम्ही जिंकलात! अल्लाह तुम्हाला अधिक ज्ञान देवो.', 'لقد فزت! زادك الله علمًا.', 'Vous avez gagné ! Qu’Allah vous accorde plus de savoir.', '¡Has ganado! Que Allah te aumente en conocimiento.'],
    '10 • Darja:': ['१० • पातळी:', '١٠ • الدرجة:', '10 • Niveau :', '10 • Nivel:'],
    'Talib': ['विद्यार्थी', 'طالب', 'Étudiant', 'Estudiante'],
    'Faahim': ['समजणारा', 'فاهم', 'Comprenant', 'Comprensivo'],
    'Mutqin': ['निपुण', 'متقن', 'Confirmé', 'Competente'],
    'Mahir': ['तज्ज्ञ', 'ماهر', 'Expert', 'Experto'],

    /* ===== Shop / sticker naam ===== */
    'Aapke stickers': ['तुमचे स्टिकर', 'ملصقاتك', 'Vos autocollants', 'Tus pegatinas'],
    'abhi koi nahi': ['अजून काहीही नाही', 'لا شيء بعد', 'rien pour l’instant', 'nada todavía'],
    'Themes': ['थीम्स', 'المظاهر', 'Thèmes', 'Temas'],
    'Stickers': ['स्टिकर', 'الملصقات', 'Autocollants', 'Pegatinas'],
    '(profile ke naam ke saath dikhte hain)': ['(प्रोफाइलच्या नावासोबत दिसतात)', '(تظهر بجانب اسم ملفك)', '(affichés à côté de votre nom)', '(se muestran junto a tu nombre)'],
    'Aam': ['सामान्य', 'عادي', 'Courant', 'Común'],
    'Khaas': ['खास', 'خاص', 'Spécial', 'Especial'],
    'Nayaab': ['दुर्मीळ', 'نادر', 'Rare', 'Raro'],
    'Shahi': ['शाही', 'ملكي', 'Royal', 'Real'],
    'Midnight Theme': ['मिडनाइट थीम', 'مظهر منتصف الليل', 'Thème Minuit', 'Tema Medianoche'],
    'Royal Theme': ['रॉयल थीम', 'المظهر الملكي', 'Thème Royal', 'Tema Real'],
    'Sky Blue Theme': ['स्काय ब्लू थीम', 'المظهر الأزرق السماوي', 'Thème Bleu Ciel', 'Tema Azul Cielo'],
    'Samundar (Deep Teal)': ['समुद्र (गडद फिरोजी)', 'المحيط (فيروزي غامق)', 'Océan (bleu-vert profond)', 'Océano (verde azulado profundo)'],
    'Gulaab (Rose)': ['गुलाब (गुलाबी)', 'الورد (وردي)', 'Rose', 'Rosa'],
    'Amethyst (Binafsha Raat)': ['अ‍ॅमेथिस्ट (जांभळी रात्र)', 'الجمشت (ليلة بنفسجية)', 'Améthyste (nuit violette)', 'Amatista (noche violeta)'],
    'Zamurrud-Sunehra (Emerald Gold)': ['पन्ना-सोनेरी (एमराल्ड गोल्ड)', 'الزمرد الذهبي', 'Émeraude dorée', 'Esmeralda dorada'],
    'Lavender Subah': ['लॅव्हेंडर सकाळ', 'صباح الخُزامى', 'Matin lavande', 'Mañana lavanda'],
    'Registan (Retila Sunehra)': ['वाळवंट (सोनेरी वाळू)', 'الصحراء (رمل ذهبي)', 'Désert (sable doré)', 'Desierto (arena dorada)'],
    'Shab-e-Qadr ✨ (sitaron wali raat)': ['शब-ए-कद्र ✨ (ताऱ्यांची रात्र)', 'ليلة القدر ✨ (ليلة النجوم)', 'Nuit du Destin ✨ (nuit étoilée)', 'Noche del Destino ✨ (noche estrellada)'],
    'Jannah ka Bagh ✨ (hara-bhara)': ['जन्नतचा बाग ✨ (हिरवागार)', 'حديقة الجنة ✨ (خضراء)', 'Jardin du Paradis ✨ (verdoyant)', 'Jardín del Paraíso ✨ (frondoso)'],
    'Kaala-Sunehra ✨ (Shahi)': ['काळा-सोनेरी ✨ (शाही)', 'أسود وذهبي ✨ (ملكي)', 'Noir et or ✨ (royal)', 'Negro y oro ✨ (real)'],
    'Chaand Sitara': ['चंद्र-तारा', 'الهلال والنجمة', 'Croissant et étoile', 'Luna y estrella'],
    'Gulab': ['गुलाब', 'الورد', 'Rose', 'Rosa'],
    'Quran Premi': ['कुरआन प्रेमी', 'محب القرآن', 'Amoureux du Coran', 'Amante del Corán'],
    'Dua Wala': ['दुआवाला', 'صاحب الدعاء', 'Adepte des invocations', 'Amante de las súplicas'],
    'Ounth': ['उंट', 'الجمل', 'Chameau', 'Camello'],
    'Josh': ['जोश', 'الحماس', 'Enthousiasme', 'Entusiasmo'],
    'Sher-e-Quran': ['शेर-ए-कुरआन', 'أسد القرآن', 'Lion du Coran', 'León del Corán'],
    'Baaz': ['बाज', 'الصقر', 'Faucon', 'Halcón'],
    'Champion': ['चॅम्पियन', 'البطل', 'Champion', 'Campeón'],
    'Roshan Sitara': ['तेजस्वी तारा', 'النجم المضيء', 'Étoile brillante', 'Estrella brillante'],
    'Heera': ['हिरा', 'الماسة', 'Diamant', 'Diamante'],
    'Taj': ['ताज', 'التاج', 'Couronne', 'Corona'],
    'Alim': ['विद्वान', 'عالم', 'Savant', 'Sabio'],
    'Unlock': ['उघडा', 'افتح', 'Débloquer', 'Desbloquear'],
    'Goal Mukammal!': ['ध्येय पूर्ण!', 'اكتمل الهدف!', 'Objectif atteint !', '¡Meta completada!'],
    'Aaj 10 lafz padhein': ['आज १० शब्द वाचा', 'اقرأ ١٠ كلمات اليوم', 'Lisez 10 mots aujourd’hui', 'Lee 10 palabras hoy'],

    /* ===== Mahine ke naam (report) ===== */
    'Janwari': ['जानेवारी', 'يناير', 'janvier', 'enero'],
    'Farwari': ['फेब्रुवारी', 'فبراير', 'février', 'febrero'],
    'March': ['मार्च', 'مارس', 'mars', 'marzo'],
    'April': ['एप्रिल', 'أبريل', 'avril', 'abril'],
    'May': ['मे', 'مايو', 'mai', 'mayo'],
    'June': ['जून', 'يونيو', 'juin', 'junio'],
    'July': ['जुलै', 'يوليو', 'juillet', 'julio'],
    'August': ['ऑगस्ट', 'أغسطس', 'août', 'agosto'],
    'Sitambar': ['सप्टेंबर', 'سبتمبر', 'septembre', 'septiembre'],
    'Aktoobar': ['ऑक्टोबर', 'أكتوبر', 'octobre', 'octubre'],
    'Navambar': ['नोव्हेंबर', 'نوفمبر', 'novembre', 'noviembre'],
    'Disambar': ['डिसेंबर', 'ديسمبر', 'décembre', 'diciembre'],

    /* ===== Haftay ke din (tasbeeh bars) ===== */
    'Sun': ['रवि', 'الأحد', 'dim.', 'dom.'],
    'Mon': ['सोम', 'الاثنين', 'lun.', 'lun.'],
    'Tue': ['मंगळ', 'الثلاثاء', 'mar.', 'mar.'],
    'Wed': ['बुध', 'الأربعاء', 'mer.', 'mié.'],
    'Thu': ['गुरु', 'الخميس', 'jeu.', 'jue.'],
    'Fri': ['शुक्र', 'الجمعة', 'ven.', 'vie.'],
    'Sat': ['शनि', 'السبت', 'sam.', 'sáb.']
  };

  /* Number/naam wale jumle — [regex, [मराठी, العربية, Français, Español]] */
  var P = [
    [/^Day (\d+)$/, ['दिवस $1', 'اليوم $1', 'Jour $1', 'Día $1']],
    [/^Day (\d+) Exam$/, ['दिवस $1 ची परीक्षा', 'اختبار اليوم $1', 'Examen du jour $1', 'Examen del día $1']],
    [/^Lvl (\d+) • (\d+) XP$/, ['स्तर $1 • $2 XP', 'المستوى $1 • $2 XP', 'Niv. $1 • $2 XP', 'Niv. $1 • $2 XP']],
    [/^(\d+) \/ (\d+) lafz padhein$/, ['$1 / $2 शब्द वाचा', 'اقرأ $1 / $2 كلمة', 'Lisez $1 / $2 mots', 'Lee $1 / $2 palabras']],
    [/^(\d+) baar$/, ['$1 वेळा', '$1 مرة', '$1 fois', '$1 veces']],
    [/^(\d+) XP aur$/, ['आणखी $1 XP हवे', 'تحتاج $1 XP أخرى', 'Encore $1 XP nécessaires', 'Faltan $1 XP']],
    [/^Sawal (\d+)$/, ['प्रश्न $1', 'سؤال $1', 'Question $1', 'Pregunta $1']],
    [/^(\d+) sawal • Pass: (\d+)\/(\d+)$/, ['$1 प्रश्न • पास: $2/$3', '$1 أسئلة • النجاح: $2/$3', '$1 questions • Réussite : $2/$3', '$1 preguntas • Aprobado: $2/$3']],
    [/^(\d+)\/(\d+)\. Aapko (\d+) chahiye\.$/, ['$1/$2. तुम्हाला $3 हवेत.', '$1/$2. تحتاج $3.', '$1/$2. Il vous en faut $3.', '$1/$2. Necesitas $3.']],
    [/^Pehle Day (\d+)[–-](\d+) poore karein!$/, ['आधी दिवस $1–$2 पूर्ण करा!', 'أكمل اليوم $1–$2 أولًا!', 'Terminez d’abord les jours $1–$2 !', '¡Completa primero los días $1–$2!']],
    [/^Kul XP: (\d+)$/, ['एकूण XP: $1', 'إجمالي XP: $1', 'XP total : $1', 'XP total: $1']],
    [/^Darja mukammal: (.+) — XP pakka!$/, ['पातळी पूर्ण: $1 — XP पक्के!', 'اكتملت الدرجة: $1 — XP مضمونة!', 'Palier terminé : $1 — XP assurés !', 'Nivel completado: $1 — ¡XP asegurados!']],
    [/^Is phone ki profiles: (.+)$/, ['या फोनवरील प्रोफाइल्स: $1', 'ملفات هذا الهاتف: $1', 'Profils de ce téléphone : $1', 'Perfiles de este teléfono: $1']],
    [/^Aakhri backup: (.+)$/, ['शेवटचा बॅकअप: $1', 'آخر نسخة احتياطية: $1', 'Dernière sauvegarde : $1', 'Última copia: $1']],
    [/^(\d+) \/ (\d+)$/, ['$1 / $2', '$1 / $2', '$1 / $2', '$1 / $2']]
  ];

  var i, j, k, q, z;
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
