/* ==========================================================
   grammar-lang.js — Nahw-Sarf (30 din) ka tarjuma — hissa 1
   मराठी (mr) · العربية (ar) · Français (fr) · Español (es)

   Kaam: arabic-grammar.html ka tx() pehle yahan dekhta hai aur jo mila
   usse mila deta hai (baaqi matn English par girta hai — Urdu par nahi).
   Tarteeb: din ka number (1-30).

   Ab tak: har din ka **unwan (title) aur maqsad (goal)**.
   {{ ... }} ke andar Arabi lafz hain — woh waise hi rehte hain.
   ========================================================== */
window.GRAMMAR_LANG = {

  1: {
    mr: { title: "सर्फ काय आहे?", goal: "सर्फची व्याख्या आणि महत्त्व समजून घेणे." },
    ar: { title: "ما هو الصرف؟", goal: "فهم تعريف الصرف وأهميته." },
    fr: { title: "Qu'est-ce que le Sarf ?", goal: "Comprendre la définition du Sarf et son importance." },
    es: { title: "¿Qué es el Sarf?", goal: "Comprender la definición del Sarf y su importancia." }
  },
  2: {
    mr: { title: "शब्दाचे तीन प्रकार", goal: "नाम, क्रियापद आणि उपसर्ग (हर्फ) यातील फरक समजून घेणे." },
    ar: { title: "أقسام الكلمة الثلاثة", goal: "فهم الفرق بين الاسم والفعل والحرف." },
    fr: { title: "Les trois sortes de mots", goal: "Comprendre la différence entre le nom, le verbe et la particule." },
    es: { title: "Las tres clases de palabra", goal: "Comprender la diferencia entre nombre, verbo y partícula." }
  },
  3: {
    mr: { title: "मूळ (जदर) — शब्दाचा पाया", goal: "अरबीत शब्दाच्या मुळाची पद्धत समजून घेणे." },
    ar: { title: "الجذر — أساس الكلمة", goal: "فهم نظام الجذر في الكلمات العربية." },
    fr: { title: "La racine (jadhr) — la base du mot", goal: "Comprendre le système des racines des mots en arabe." },
    es: { title: "La raíz (yadr): la base de la palabra", goal: "Comprender el sistema de raíces de las palabras en árabe." }
  },
  4: {
    mr: { title: "वजन (साचा) — शब्दाची चौकट", goal: "शब्दाचे वजन आणि त्याचे महत्त्व समजून घेणे." },
    ar: { title: "الوزن — قالب الكلمة", goal: "فهم وزن الكلمة وأهميته." },
    fr: { title: "Le wazn (moule) — la forme du mot", goal: "Comprendre le moule d'un mot et son importance." },
    es: { title: "El wazn (molde): la forma de la palabra", goal: "Comprender el molde de una palabra y su importancia." }
  },
  5: {
    mr: { title: "भूतकाळाची गणना (१४ रूपे)", goal: "भूतकाळाच्या १४ रूपांचे संपूर्ण ज्ञान." },
    ar: { title: "تصريف الفعل الماضي (14 صيغة)", goal: "معرفة صيغ الفعل الماضي الأربع عشرة كاملة." },
    fr: { title: "La conjugaison du passé (14 formes)", goal: "Connaître complètement les 14 formes du passé." },
    es: { title: "La conjugación del pasado (14 formas)", goal: "Conocer por completo las 14 formas del pasado." }
  },
  6: {
    mr: { title: "वर्तमान-भविष्यकाळाची गणना (१४ रूपे)", goal: "वर्तमान-भविष्यकाळाच्या १४ रूपांचे संपूर्ण ज्ञान." },
    ar: { title: "تصريف الفعل المضارع (14 صيغة)", goal: "معرفة صيغ الفعل المضارع الأربع عشرة كاملة." },
    fr: { title: "La conjugaison du présent-futur (14 formes)", goal: "Connaître complètement les 14 formes du présent-futur." },
    es: { title: "La conjugación del presente-futuro (14 formas)", goal: "Conocer por completo las 14 formas del presente-futuro." }
  },
  7: {
    mr: { title: "आज्ञार्थकाची गणना (६ रूपे)", goal: "आज्ञार्थकाच्या ६ रूपांचे संपूर्ण ज्ञान." },
    ar: { title: "تصريف فعل الأمر (6 صيغ)", goal: "معرفة صيغ الأمر الست كاملة." },
    fr: { title: "La conjugaison de l'impératif (6 formes)", goal: "Connaître complètement les 6 formes de l'impératif." },
    es: { title: "La conjugación del imperativo (6 formas)", goal: "Conocer por completo las 6 formas del imperativo." }
  },
  8: {
    mr: { title: "निषेधार्थकाची गणना (६ रूपे)", goal: "निषेधार्थकाच्या ६ रूपांचे संपूर्ण ज्ञान." },
    ar: { title: "تصريف فعل النهي (6 صيغ)", goal: "معرفة صيغ النهي الست كاملة." },
    fr: { title: "La conjugaison de la défense (6 formes)", goal: "Connaître complètement les 6 formes de la défense." },
    es: { title: "La conjugación de la prohibición (6 formas)", goal: "Conocer por completo las 6 formas de la prohibición." }
  },
  9: {
    mr: { title: "त्र्यक्षरी साध्या क्रियापदाचे ६ बाब (१–३)", goal: "पहिले ३ बाब (नसर, झर्ब, फतह) समजून घेणे." },
    ar: { title: "أبواب الثلاثي المجرد الستة (1–3)", goal: "فهم الأبواب الثلاثة الأولى (نصر، ضرب، فتح)." },
    fr: { title: "Les 6 bab du verbe trilitère simple (1-3)", goal: "Comprendre les 3 premiers bab (Nasr, Zarb, Fatah)." },
    es: { title: "Los 6 bab del verbo trilitero simple (1-3)", goal: "Comprender los 3 primeros bab (Nasr, Zarb, Fatah)." }
  },
  10: {
    mr: { title: "त्र्यक्षरी साध्या क्रियापदाचे ६ बाब (४–६)", goal: "उर्वरित ३ बाब (समअ, करम, हसब) समजून घेणे." },
    ar: { title: "أبواب الثلاثي المجرد الستة (4–6)", goal: "فهم الأبواب الثلاثة الباقية (سمع، كرم، حسب)." },
    fr: { title: "Les 6 bab du verbe trilitère simple (4-6)", goal: "Comprendre les 3 bab restants (Sama', Karam, Hasab)." },
    es: { title: "Los 6 bab del verbo trilitero simple (4-6)", goal: "Comprender los 3 bab restantes (Sama, Karam, Hasab)." }
  },
  11: {
    mr: { title: "कर्तरी व कर्मणी विशेषणे", goal: "कर्तरी (इस्म-ए-फाइल) आणि कर्मणी (इस्म-ए-मफऊल) यातील फरक समजून घेणे." },
    ar: { title: "اسم الفاعل واسم المفعول", goal: "فهم الفرق بين اسم الفاعل واسم المفعول." },
    fr: { title: "Le participe actif et le participe passif", goal: "Comprendre la différence entre le participe actif et le participe passif." },
    es: { title: "El participio activo y el participio pasivo", goal: "Comprender la diferencia entre el participio activo y el pasivo." }
  },
  12: {
    mr: { title: "स्थान/काळाचे नाम आणि साधनाचे नाम", goal: "स्थान-काळ (झर्फ) आणि साधन (आला) यांची नामे समजून घेणे." },
    ar: { title: "اسم المكان والزمان واسم الآلة", goal: "فهم اسمي الزمان والمكان واسم الآلة." },
    fr: { title: "Le nom de lieu/temps et le nom d'instrument", goal: "Comprendre les noms de lieu/temps et d'instrument." },
    es: { title: "El nombre de lugar/tiempo y el de instrumento", goal: "Comprender los nombres de lugar/tiempo y de instrumento." }
  },
  13: {
    mr: { title: "कायमचे विशेषण आणि तुलनात्मक विशेषण", goal: "कायमचे विशेषण आणि 'अधिक' दाखवणारे विशेषण समजून घेणे." },
    ar: { title: "الصفة المشبهة واسم التفضيل", goal: "فهم الصفة الدائمة واسم التفضيل." },
    fr: { title: "L'adjectif permanent et le comparatif-superlatif", goal: "Comprendre l'adjectif permanent et l'adjectif de « plus »." },
    es: { title: "El adjetivo permanente y el comparativo-superlativo", goal: "Comprender el adjetivo permanente y el adjetivo de «más»." }
  },
  14: {
    mr: { title: "अनेकवचने (जमा)", goal: "अनेकवचनाचे वेगवेगळे प्रकार समजून घेणे." },
    ar: { title: "الجمع", goal: "فهم أنواع الجمع المختلفة." },
    fr: { title: "Les pluriels", goal: "Comprendre les différentes sortes de pluriel." },
    es: { title: "Los plurales", goal: "Comprender las distintas clases de plural." }
  },
  15: {
    mr: { title: "अधिक अक्षरांची क्रियापदे + सर्फचा सारांश", goal: "मझीद फीह बाबांची ओळख आणि सर्फचा सारांश." },
    ar: { title: "الثلاثي المزيد فيه + خلاصة الصرف", goal: "التعرف على أبواب المزيد فيه وخلاصة الصرف." },
    fr: { title: "Les verbes augmentés + résumé du Sarf", goal: "Découvrir les bab augmentés et récapituler le Sarf." },
    es: { title: "Los verbos aumentados + resumen del Sarf", goal: "Conocer los bab aumentados y resumir el Sarf." }
  },
  16: {
    mr: { title: "नह्व काय आहे?", goal: "नह्वची व्याख्या आणि महत्त्व समजून घेणे." },
    ar: { title: "ما هو النحو؟", goal: "فهم تعريف النحو وأهميته." },
    fr: { title: "Qu'est-ce que le Nahw ?", goal: "Comprendre la définition du Nahw et son importance." },
    es: { title: "¿Qué es el Nahw?", goal: "Comprender la definición del Nahw y su importancia." }
  },
  17: {
    mr: { title: "एराब — चार अवस्था", goal: "रफअ, नसब, जर आणि जझ्म समजून घेणे." },
    ar: { title: "الإعراب — الحالات الأربع", goal: "فهم الرفع والنصب والجر والجزم." },
    fr: { title: "L'i'rab — les quatre états", goal: "Comprendre le raf', le nasb, le jarr et le jazm." },
    es: { title: "El i'rab: los cuatro estados", goal: "Comprender el raf', el nasb, el yarr y el yazm." }
  },
  18: {
    mr: { title: "नामवाचक वाक्य — उद्देश्य आणि विधान", goal: "नामवाचक वाक्याची रचना समजून घेणे." },
    ar: { title: "الجملة الاسمية — المبتدأ والخبر", goal: "فهم بناء الجملة الاسمية." },
    fr: { title: "La phrase nominale — mubtada et khabar", goal: "Comprendre la structure de la phrase nominale." },
    es: { title: "La frase nominal: mubtada y jabar", goal: "Comprender la estructura de la frase nominal." }
  },
  19: {
    mr: { title: "क्रियावाचक वाक्य — क्रिया, कर्ता, कर्म", goal: "क्रियावाचक वाक्याची संपूर्ण रचना समजून घेणे." },
    ar: { title: "الجملة الفعلية — الفعل والفاعل والمفعول", goal: "فهم بناء الجملة الفعلية كاملًا." },
    fr: { title: "La phrase verbale — verbe, sujet, objet", goal: "Comprendre la structure complète de la phrase verbale." },
    es: { title: "La frase verbal: verbo, sujeto y objeto", goal: "Comprender la estructura completa de la frase verbal." }
  },
  20: {
    mr: { title: "कान आणि त्याची भगिनी", goal: "कान आणि त्याच्या भगिनींचे कार्य समजून घेणे." },
    ar: { title: "كان وأخواتها", goal: "فهم عمل كان وأخواتها." },
    fr: { title: "Kana et ses sœurs", goal: "Comprendre l'action de Kana et de ses sœurs." },
    es: { title: "Kana y sus hermanas", goal: "Comprender la acción de Kana y sus hermanas." }
  },
  21: {
    mr: { title: "{{إنَّ}} आणि त्याची भगिनी", goal: "{{إنَّ}} आणि त्याच्या भगिनींचे कार्य समजून घेणे." },
    ar: { title: "{{إنَّ}} وأخواتها", goal: "فهم عمل {{إنَّ}} وأخواتها." },
    fr: { title: "{{إنَّ}} et ses sœurs", goal: "Comprendre l'action de {{إنَّ}} et de ses sœurs." },
    es: { title: "{{إنَّ}} y sus hermanas", goal: "Comprender la acción de {{إنَّ}} y sus hermanas." }
  },
  22: {
    mr: { title: "शब्दयोगी अव्यये (हर्फे-जर)", goal: "हर्फे-जर आणि त्यानंतरचा एराब समजून घेणे." },
    ar: { title: "حروف الجر", goal: "فهم حروف الجر والإعراب بعدها." },
    fr: { title: "Les prépositions (harf jarr)", goal: "Comprendre les prépositions et l'i'rab qui les suit." },
    es: { title: "Las preposiciones (harf yarr)", goal: "Comprender las preposiciones y el i'rab que las sigue." }
  },
  23: {
    mr: { title: "इझाफत (मालकी संबंध)", goal: "इझाफतची रचना समजून घेणे." },
    ar: { title: "الإضافة", goal: "فهم بناء الإضافة." },
    fr: { title: "L'idafa (possession)", goal: "Comprendre la structure de l'idafa." },
    es: { title: "La idafa (posesión)", goal: "Comprender la estructura de la idafa." }
  },
  24: {
    mr: { title: "विशेषण आणि विशेष्य", goal: "विशेषण आणि विशेष्य यांचे नाते समजून घेणे." },
    ar: { title: "الصفة والموصوف", goal: "فهم علاقة الصفة بالموصوف." },
    fr: { title: "L'adjectif et le nom décrit", goal: "Comprendre le rapport entre l'adjectif (sifa) et le nom décrit (mawsuf)." },
    es: { title: "El adjetivo y el nombre descrito", goal: "Comprender la relación entre el adjetivo (sifa) y el nombre descrito (mawsuf)." }
  },
  25: {
    mr: { title: "अतफ, बदल आणि ताअकीद", goal: "हे तीन अनुयायी (तवाबेअ) समजून घेणे." },
    ar: { title: "العطف والبدل والتوكيد", goal: "فهم هذه التوابع الثلاثة." },
    fr: { title: "Atf, badal, ta'kid", goal: "Comprendre ces trois suivants (tawabi')." },
    es: { title: "Atf, badal y ta'kid", goal: "Comprender estos tres seguidores (tawabi)." }
  },
  26: {
    mr: { title: "संबंधी सर्वनामे आणि दर्शक सर्वनामे", goal: "मवसूल आणि इशारा सर्वनामे समजून घेणे." },
    ar: { title: "الاسم الموصول واسم الإشارة", goal: "فهم الأسماء الموصولة وأسماء الإشارة." },
    fr: { title: "Les pronoms relatifs et les démonstratifs", goal: "Comprendre les noms relatifs et démonstratifs." },
    es: { title: "Los pronombres relativos y los demostrativos", goal: "Comprender los nombres relativos y demostrativos." }
  },
  27: {
    mr: { title: "सर्वनामे (झमाइर)", goal: "सर्वनामांचे प्रकार समजून घेणे." },
    ar: { title: "الضمائر", goal: "فهم أنواع الضمائر." },
    fr: { title: "Les pronoms (damâ'ir)", goal: "Comprendre les sortes de pronoms." },
    es: { title: "Los pronombres (damair)", goal: "Comprender las clases de pronombres." }
  },
  28: {
    mr: { title: "हाल आणि तम्यीझ", goal: "हाल आणि तम्यीझ ही नसबातील नामे समजून घेणे." },
    ar: { title: "الحال والتمييز", goal: "فهم الحال والتمييز من المنصوبات." },
    fr: { title: "Le hal et le tamyiz", goal: "Comprendre le hal et le tamyiz (noms au nasb)." },
    es: { title: "El hal y el tamyiz", goal: "Comprender el hal y el tamyiz (nombres en nasb)." }
  },
  29: {
    mr: { title: "जर आणि जझ्म असलेले शब्द", goal: "जर आणि जझ्म असलेली शब्दे समजून घेणे." },
    ar: { title: "المجرورات والمجزومات", goal: "فهم المجرورات والمجزومات." },
    fr: { title: "Les majrourat et les majzoumat", goal: "Comprendre les mots au jarr et au jazm." },
    es: { title: "Los mayrurat y los mayzumat", goal: "Comprender las palabras en yarr y en yazm." }
  },
  30: {
    mr: { title: "नह्वचा संपूर्ण सारांश", goal: "संपूर्ण नह्वचा सारांश आणि परीक्षा." },
    ar: { title: "خلاصة النحو الكاملة", goal: "خلاصة النحو كله واختبار." },
    fr: { title: "Résumé complet du Nahw", goal: "Un résumé de tout le Nahw, et un test." },
    es: { title: "Resumen completo del Nahw", goal: "Un resumen de todo el Nahw y un examen." }
  }

};
