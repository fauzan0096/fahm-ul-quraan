/* games-extra.js — Games page ki 4 nayi zubaanein: मराठी / العربية / Français / Español
   ---------------------------------------------------------------------------
   games-lang.js 4 zubaanein (u / ro / hi / en) rakhta hai. Ye file unke baad load hoti hai
   aur GU() / GM() ko lapet deti hai: nayi zubaan chuni ho to yahan se tarjuma, warna
   purana games-lang.js wala kaam (bilkul waisa hi, kuch nahi badalta).

   GU(key, vars) -> UI ke jumle        GM(urdu matlab) -> Memory game ke card ka matlab
   Jo cheez yahan nahi hai (jaise sawal/jawab ka matn) wo pehle ki tarah rehti hai —
   nayi zubaanoN par English, taake adhoora tarjuma galat maani na de.
   Arabi lafz (Quran ke alfaz) kahin badle nahi jaate — sirf unka matlab. */
(function () {
  'use strict';
  var NEW = { mr: 1, ar: 1, fr: 1, es: 1 };
  function cur() { try { return (window.QSLang && QSLang.get()) || 'u'; } catch (e) { return 'u'; } }
  function fill(s, v) {
    if (!v) return s;
    return s.replace(/\{(\w+)\}/g, function (m, n) { return v[n] != null ? v[n] : m; });
  }

  /* ===================== UI ke jumle ===================== */
  var XUI = {
    title: { mr: "खेळ", ar: "ألعاب", fr: "Jeux", es: "Juegos" },
    notice: {
      mr: "⚠️ <b>महत्त्वाचे:</b> हे अ‍ॅप <b>आलिम किंवा क़ारी यांची जागा नाही</b>. तजवीद, नमाज़ आणि दीनी अहकाम कोणत्याही विश्वासार्ह उस्तादांकडून शिका. हे अ‍ॅप फक्त शिकण्यासाठी मदत आहे. <a href='privacy.html'>तपशील</a>",
      ar: "⚠️ <b>مهم:</b> هذا التطبيق <b>ليس بديلاً عن عالم أو قارئ</b>. تعلَّم التجويد والصلاة والأحكام الشرعية من أستاذ موثوق. التطبيق وسيلة مساعدة للتعلّم فقط. <a href='privacy.html'>التفاصيل</a>",
      fr: "⚠️ <b>Important :</b> cette application <b>ne remplace pas un savant ou un qari</b>. Apprenez le tajwid, la prière et les règles religieuses auprès d'un enseignant qualifié. L'application n'est qu'une aide à l'apprentissage. <a href='privacy.html'>Détails</a>",
      es: "⚠️ <b>Importante:</b> esta app <b>no sustituye a un sabio ni a un qari</b>. Aprende el tajwid, la oración y las normas religiosas con un maestro cualificado. La app solo es una ayuda para aprender. <a href='privacy.html'>Detalles</a>"
    },
    close: { mr: "बंद करा", ar: "إغلاق", fr: "Fermer", es: "Cerrar" },

    n_kbc: { mr: "🪜 मरातिब-ए-इल्म", ar: "🪜 مراتب العلم", fr: "🪜 Maratib al-Ilm", es: "🪜 Maratib al-Ilm" },
    n_sahaba: { mr: "⭐ सहाबा", ar: "⭐ الصحابة", fr: "⭐ Compagnons", es: "⭐ Compañeros" },
    n_memory: { mr: "🧠 स्मरणशक्ती", ar: "🧠 الذاكرة", fr: "🧠 Mémoire", es: "🧠 Memoria" },
    n_emoji: { mr: "😀 इमोजी", ar: "😀 إيموجي", fr: "😀 Émoji", es: "😀 Emoji" },
    n_bazm: { mr: "🎓 बज़्म-ए-फ़हम", ar: "🎓 بزم الفهم", fr: "🎓 Bazm al-Fahm", es: "🎓 Bazm al-Fahm" },

    tier0: { mr: "नवशिक्षु", ar: "مبتدئ", fr: "Débutant", es: "Principiante" },
    tier1: { mr: "विद्यार्थी", ar: "طالب", fr: "Étudiant", es: "Estudiante" },
    tier2: { mr: "समजणारा", ar: "فاهم", fr: "Comprenant", es: "Comprensivo" },
    tier3: { mr: "निपुण", ar: "متقن", fr: "Confirmé", es: "Competente" },
    tier4: { mr: "तज्ज्ञ", ar: "ماهر", fr: "Expert", es: "Experto" },

    day: { mr: "📅 दिवस {n}", ar: "📅 اليوم {n}", fr: "📅 Jour {n}", es: "📅 Día {n}" },
    days_prog: {
      u: "{a} / {b} din khule", ro: "{a} / {b} din khule", hi: "{a} / {b} दिन खुले",
      en: "{a} of {b} days unlocked", mr: "{a} / {b} दिवस उघडे", ar: "{a} من {b} يومًا مفتوحة",
      fr: "{a} jours sur {b} débloqués", es: "{a} de {b} días desbloqueados"
    },

    yes: { mr: "होय, उत्तर पक्के", ar: "نعم، الجواب نهائي", fr: "Oui, réponse définitive", es: "Sí, respuesta definitiva" },
    no: { mr: "पुन्हा विचार करू", ar: "دعني أفكر مرة أخرى", fr: "Je réfléchis encore", es: "Déjame pensarlo" },
    l5050: { mr: "✂️ दोन चुकीचे काढा", ar: "✂️ احذف إجابتين خاطئتين", fr: "✂️ Retirer deux mauvaises", es: "✂️ Quitar dos incorrectas" },
    laud: { mr: "👥 प्रेक्षकांचे मत", ar: "👥 رأي الجمهور", fr: "👥 Sondage du public", es: "👥 Voto del público" },
    lphone: { mr: "📞 मित्राचा सल्ला", ar: "📞 اسأل صديقًا", fr: "📞 Demander à un ami", es: "📞 Preguntar a un amigo" },
    lustad: { mr: "📞 उस्तादांना विचारा", ar: "📞 اسأل الأستاذ", fr: "📞 Demander au maître", es: "📞 Preguntar al maestro" },
    lswap: { mr: "🔄 प्रश्न बदला", ar: "🔄 تبديل السؤال", fr: "🔄 Changer la question", es: "🔄 Cambiar la pregunta" },

    kbc_note: {
      mr: "🎯 = पक्की पातळी (इथपर्यंतचे स्टार्स सुरक्षित) • स्टार्स फक्त बक्षिसाची खूण आहेत, पैसे नाहीत",
      ar: "🎯 = درجة مضمونة (النجوم حتى هنا محفوظة) • النجوم مجرد علامات مكافأة، لا مال فيها",
      fr: "🎯 = palier assuré (les étoiles jusqu'ici sont gardées) • Les étoiles ne sont qu'une récompense, pas d'argent",
      es: "🎯 = nivel asegurado (las estrellas hasta aquí se conservan) • Las estrellas son solo una recompensa, no dinero"
    },
    kbc_quit: {
      mr: "🛑 येथेच थांबा (आतापर्यंतचे स्टार्स घ्या)", ar: "🛑 توقف هنا (خذ النجوم الحالية)",
      fr: "🛑 Arrêter ici (garder les étoiles)", es: "🛑 Detente aquí (conserva tus estrellas)"
    },
    qnum: {
      mr: "प्रश्न <b>{n}</b> / 10 &nbsp;•&nbsp; पातळी: <b>{d}</b>", ar: "سؤال <b>{n}</b> / 10 &nbsp;•&nbsp; الدرجة: <b>{d}</b>",
      fr: "Question <b>{n}</b> / 10 &nbsp;•&nbsp; Niveau : <b>{d}</b>", es: "Pregunta <b>{n}</b> / 10 &nbsp;•&nbsp; Nivel: <b>{d}</b>"
    },
    kbc_confirm_quit: {
      mr: "येथेच थांबायचे? आतापर्यंतचे स्टार्स मिळतील.", ar: "أتوقف هنا؟ ستحصل على النجوم حتى الآن.",
      fr: "Arrêter ici ? Vous garderez les étoiles gagnées.", es: "¿Detenerse aquí? Conservarás las estrellas ganadas."
    },
    aud_alert: {
      mr: "👥 प्रेक्षकांचे मत (फक्त अंदाज, खरे लोक नाहीत):", ar: "👥 رأي الجمهور (تقدير فقط، ليسوا أناسًا حقيقيين):",
      fr: "👥 Sondage du public (une estimation, pas de vraies personnes) :", es: "👥 Voto del público (solo una estimación, no personas reales):"
    },
    phone_alert: {
      mr: "📞 मित्राचा सल्ला (अंदाज, पक्का नाही):\n«मला वाटते {l} — {a} बरोबर आहे»",
      ar: "📞 نصيحة صديقك (تقدير، ليس يقينًا):\n«أظن أن {l} — {a} هو الصحيح»",
      fr: "📞 Le conseil de ton ami (une estimation, pas une certitude) :\n« Je pense que {l} — {a} est correct »",
      es: "📞 El consejo de tu amigo (una estimación, no una certeza):\n«Creo que {l} — {a} es correcto»"
    },
    next_day: {
      mr: "➡️ पुढील दिवस (दिवस {n})", ar: "➡️ اليوم التالي (اليوم {n})",
      fr: "➡️ Jour suivant (Jour {n})", es: "➡️ Día siguiente (Día {n})"
    },
    cele_win_t: { mr: "माशा अल्लाह! 🎉", ar: "ما شاء الله! 🎉", fr: "MashaAllah ! 🎉", es: "¡MashaAllah! 🎉" },
    cele_win_m: {
      mr: "दिवस {n} पूर्ण! ⭐ {s} स्टार्स मिळाले.", ar: "أكملت اليوم {n}! ⭐ {s} نجمة.",
      fr: "Jour {n} terminé ! ⭐ {s} étoiles gagnées.", es: "¡Día {n} completado! ⭐ {s} estrellas ganadas."
    },
    res_win: { mr: "🏆 अभिनंदन!", ar: "🏆 مبارك!", fr: "🏆 Félicitations !", es: "🏆 ¡Felicidades!" },
    res_quit: { mr: "🛑 तुम्ही येथेच थांबलात", ar: "🛑 لقد توقفت هنا", fr: "🛑 Vous vous êtes arrêté ici", es: "🛑 Te detuviste aquí" },
    res_lose: { mr: "😢 अफसोस, उत्तर बरोबर नव्हते", ar: "😢 عذرًا، الإجابة غير صحيحة", fr: "😢 Désolé, la réponse était fausse", es: "😢 Lo siento, la respuesta no era correcta" },
    res_win_msg: {
      mr: "दिवस {n} पूर्ण! दिवस {m} उघडला.", ar: "أكملت اليوم {n}! تم فتح اليوم {m}.",
      fr: "Jour {n} terminé ! Le jour {m} est débloqué.", es: "¡Día {n} completado! El día {m} está desbloqueado."
    },
    res_all: {
      mr: "तुम्ही सर्व 30 दिवस पूर्ण केले!", ar: "لقد أكملت كل الأيام الثلاثين!",
      fr: "Vous avez terminé les 30 jours !", es: "¡Has completado los 30 días!"
    },
    res_quit_msg: {
      mr: "तुम्ही {n} प्रश्न बरोबर केले.", ar: "أجبت عن {n} سؤالًا بشكل صحيح.",
      fr: "Vous avez répondu correctement à {n} questions.", es: "Respondiste correctamente {n} preguntas."
    },
    res_lose_msg: {
      mr: "तुम्ही प्रश्न {n} वर थांबलात. पुन्हा प्रयत्न करा 🤍", ar: "توقفت عند السؤال {n}. حاول مرة أخرى 🤍",
      fr: "Vous vous êtes arrêté à la question {n}. Réessayez 🤍", es: "Te detuviste en la pregunta {n}. Inténtalo otra vez 🤍"
    },
    again: { mr: "🔄 पुन्हा खेळा", ar: "🔄 العب مرة أخرى", fr: "🔄 Rejouer", es: "🔄 Jugar otra vez" },

    sh_title: { mr: "⭐ सहाबीची कहाणी", ar: "⭐ قصة صحابي", fr: "⭐ L'histoire d'un compagnon", es: "⭐ La historia de un compañero" },
    sh_score: { mr: "{i} / {t} • गुण: {s}", ar: "{i} / {t} • النقاط: {s}", fr: "{i} / {t} • Score : {s}", es: "{i} / {t} • Puntos: {s}" },
    sh_next: { mr: "➡️ पुढील प्रश्न", ar: "➡️ السؤال التالي", fr: "➡️ Question suivante", es: "➡️ Siguiente pregunta" },
    sh_cele_m: {
      mr: "तुम्ही या फेरीतील सर्व सहाबा प्रश्न पूर्ण केले.", ar: "أكملت كل أسئلة الصحابة في هذه الجولة.",
      fr: "Vous avez terminé toutes les questions des compagnons de cette manche.", es: "Has completado todas las preguntas de los compañeros de esta ronda."
    },
    congrats: { mr: "अभिनंदन!", ar: "مبارك!", fr: "Félicitations !", es: "¡Felicidades!" },
    congrats_i: { mr: "🎉 अभिनंदन!", ar: "🎉 مبارك!", fr: "🎉 Félicitations !", es: "🎉 ¡Felicidades!" },
    sh_round: { mr: "तुम्ही फेरी पूर्ण केली.", ar: "لقد أكملت الجولة.", fr: "Vous avez terminé la manche.", es: "Has completado la ronda." },
    score_line: { mr: "गुण: {s} / {t}", ar: "النقاط: {s} / {t}", fr: "Score : {s} / {t}", es: "Puntos: {s} / {t}" },
    new_round: { mr: "🔄 नवीन फेरी", ar: "🔄 جولة جديدة", fr: "🔄 Nouvelle manche", es: "🔄 Nueva ronda" },

    mem_matched: { mr: "✅ जुळले: {a} / {b}", ar: "✅ المتطابق: {a} / {b}", fr: "✅ Trouvés : {a} / {b}", es: "✅ Emparejados: {a} / {b}" },
    mem_moves: { mr: "🎯 चाली: {n}", ar: "🎯 المحاولات: {n}", fr: "🎯 Coups : {n}", es: "🎯 Jugadas: {n}" },
    mem_cele_t: { mr: "शाब्बास!", ar: "أحسنت!", fr: "Bravo !", es: "¡Bien hecho!" },
    mem_cele_m: { mr: "सर्व कार्ड जुळले.", ar: "تطابقت كل البطاقات.", fr: "Toutes les cartes sont trouvées.", es: "Todas las cartas coincidieron." },
    mem_done: { mr: "🎉 सर्व जुळले!", ar: "🎉 تم التطابق الكامل!", fr: "🎉 Tout est trouvé !", es: "🎉 ¡Todo emparejado!" },
    mem_total: { mr: "एकूण चाली: {n}", ar: "إجمالي المحاولات: {n}", fr: "Total des coups : {n}", es: "Jugadas totales: {n}" },

    em_full: { mr: "माशा अल्लाह! पूर्ण गुण!", ar: "ما شاء الله! علامة كاملة!", fr: "MashaAllah ! Sans faute !", es: "¡MashaAllah! ¡Puntuación perfecta!" },
    em_cele_m: {
      mr: "तुम्ही {t} पैकी {s} बरोबर सांगितले.", ar: "أجبت بشكل صحيح عن {s} من {t}.",
      fr: "Vous avez répondu correctement à {s} sur {t}.", es: "Respondiste correctamente {s} de {t}."
    },
    em_try: { mr: "💪 चांगला प्रयत्न!", ar: "💪 محاولة جيدة!", fr: "💪 Bon effort !", es: "💪 ¡Buen intento!" },
    em_good_p: { mr: "खूप छान!", ar: "أحسنت جدًا!", fr: "Très bien !", es: "¡Muy bien!" },
    em_try_p: {
      mr: "थोडा अजून सराव करा, पुढच्या वेळी बरे होईल.", ar: "تدرّب قليلًا أكثر، ستكون أفضل في المرة القادمة.",
      fr: "Entraînez-vous un peu plus, ce sera mieux la prochaine fois.", es: "Practica un poco más, la próxima vez irá mejor."
    },

    bz_h: { mr: "बज़्म-ए-फ़हम", ar: "بزم الفهم", fr: "Bazm al-Fahm", es: "Bazm al-Fahm" },
    bz_intro: {
      mr: "क़ुरआनच्या शब्दांवर 15 प्रश्न. दर 3 प्रश्नांनंतर एक <b>पातळी</b> पक्की होते. चुकीच्या उत्तरावर तुमच्याकडे आधीच्या पक्क्या पातळीचे XP राहते. पैसे नाहीत, फक्त <b>इल्म पॉइंट्स (XP)</b>.",
      ar: "15 سؤالًا عن كلمات القرآن. بعد كل 3 أسئلة تُثبَّت <b>درجة</b>. إذا أخطأت تحتفظ بنقاط XP للدرجة المضمونة السابقة. لا مال، فقط <b>نقاط العلم (XP)</b>.",
      fr: "15 questions sur les mots du Coran. Tous les 3 questions, un <b>palier</b> est assuré. En cas de mauvaise réponse, vous gardez les XP du dernier palier assuré. Pas d'argent, seulement des <b>points de savoir (XP)</b>.",
      es: "15 preguntas sobre palabras del Corán. Cada 3 preguntas se asegura un <b>nivel</b>. Si fallas, conservas los XP del último nivel asegurado. Sin dinero, solo <b>puntos de conocimiento (XP)</b>."
    },
    bz_start: { mr: "▶️ सुरू करा", ar: "▶️ ابدأ", fr: "▶️ Commencer", es: "▶️ Empezar" },
    bz_madad_h: {
      mr: "मदतीचे 4 मार्ग (प्रत्येक फक्त एकदा)", ar: "4 طرق للمساعدة (كل واحدة مرة واحدة)",
      fr: "4 aides (une seule fois chacune)", es: "4 ayudas (cada una solo una vez)"
    },
    bz_madad: {
      mr: "✂️ <b>दोन चुकीचे काढा</b>: 2 चुकीची उत्तरे काढली जातात<br>👥 <b>प्रेक्षकांचे मत</b>: अंदाज (खरे लोक नाहीत, फक्त सल्ला)<br>📞 <b>उस्तादांना विचारा</b>: एक खरा इशारा (वाचण्याची पद्धत / आयतीचा भाग)<br>🔄 <b>प्रश्न बदला</b>: नवीन प्रश्न, त्याच पातळीचा",
      ar: "✂️ <b>احذف إجابتين خاطئتين</b>: تُحذف إجابتان خاطئتان<br>👥 <b>رأي الجمهور</b>: تقدير (ليسوا أناسًا حقيقيين، مجرد رأي)<br>📞 <b>اسأل الأستاذ</b>: إشارة حقيقية (طريقة القراءة / جزء من الآية)<br>🔄 <b>تبديل السؤال</b>: سؤال جديد من نفس الدرجة",
      fr: "✂️ <b>Retirer deux mauvaises</b> : deux mauvaises réponses sont retirées<br>👥 <b>Sondage du public</b> : une estimation (pas de vraies personnes, juste un avis)<br>📞 <b>Demander au maître</b> : un vrai indice (comment lire / une partie du verset)<br>🔄 <b>Changer la question</b> : une nouvelle question du même niveau",
      es: "✂️ <b>Quitar dos incorrectas</b>: se quitan dos respuestas incorrectas<br>👥 <b>Voto del público</b>: una estimación (no son personas reales, solo un consejo)<br>📞 <b>Preguntar al maestro</b>: una pista real (cómo leerlo / parte del versículo)<br>🔄 <b>Cambiar la pregunta</b>: una pregunta nueva del mismo nivel"
    },
    bz_foot: {
      mr: "हा खेळ फक्त शिकण्यासाठी मदत आहे. दीनी बाबी विश्वासार्ह उस्तादांकडून शिका.",
      ar: "هذه اللعبة وسيلة مساعدة للتعلّم فقط. تعلَّم الأمور الدينية من أستاذ موثوق.",
      fr: "Ce jeu n'est qu'une aide à l'apprentissage. Apprenez les questions religieuses auprès d'un enseignant qualifié.",
      es: "Este juego solo es una ayuda para aprender. Aprende los asuntos religiosos con un maestro cualificado."
    },
    bz_sawal: { mr: "प्रश्न", ar: "سؤال", fr: "Question", es: "Pregunta" },
    bz_quit: { mr: "🛑 येथेच थांबा (आतापर्यंतचे XP घ्या)", ar: "🛑 توقف هنا (خذ نقاط XP الحالية)", fr: "🛑 Arrêter ici (garder les XP)", es: "🛑 Detente aquí (conserva tus XP)" },
    bz_again: { mr: "🔁 पुन्हा खेळा", ar: "🔁 العب مرة أخرى", fr: "🔁 Rejouer", es: "🔁 Jugar otra vez" },
    bz_back: { mr: "📚 धड्याकडे परत", ar: "📚 العودة إلى الدرس", fr: "📚 Retour à la leçon", es: "📚 Volver a la lección" },

    tier_q: { mr: "(प्रश्न {a}–{b})", ar: "(الأسئلة {a}–{b})", fr: "(questions {a}–{b})", es: "(preguntas {a}–{b})" },
    login_warn: {
      mr: "⚠️ XP साठी आधी अ‍ॅपमध्ये लॉगिन करा (लॉगिनशिवाय फक्त खेळू शकता).<br>",
      ar: "⚠️ سجّل الدخول إلى التطبيق أولًا لكسب XP (بدون تسجيل يمكنك اللعب فقط).<br>",
      fr: "⚠️ Connectez-vous d'abord à l'application pour gagner des XP (sans connexion, vous pouvez seulement jouer).<br>",
      es: "⚠️ Inicia sesión primero en la app para ganar XP (sin sesión solo puedes jugar).<br>"
    },
    pool: {
      mr: "प्रश्न तुमच्या {d} दिवसांपर्यंतच्या {n} शब्दांतून येतील.",
      ar: "ستأتي الأسئلة من {n} كلمة من أول {d} أيام لك.",
      fr: "Les questions viendront des {n} mots de vos {d} premiers jours.",
      es: "Las preguntas vendrán de las {n} palabras de tus primeros {d} días."
    },
    capleft: {
      mr: " आजचे XP शिल्लक: <b>{n}</b> / {c}.", ar: " نقاط XP المتبقية اليوم: <b>{n}</b> / {c}.",
      fr: " XP restants aujourd'hui : <b>{n}</b> / {c}.", es: " XP restantes hoy: <b>{n}</b> / {c}."
    },
    pool_low: {
      mr: "<br>⚠️ आधी काही धडे (दिवस) पूर्ण करा.", ar: "<br>⚠️ أكمل بعض الدروس (الأيام) أولًا.",
      fr: "<br>⚠️ Terminez d'abord quelques leçons (jours).", es: "<br>⚠️ Primero completa algunas lecciones (días)."
    },
    p0: { mr: "या शब्दाचा अर्थ काय आहे?", ar: "ما معنى هذه الكلمة؟", fr: "Quel est le sens de ce mot ?", es: "¿Qué significa esta palabra?" },
    p1: {
      mr: "आयतीच्या या भागात «{w}» चा अर्थ?", ar: "ما معنى «{w}» في هذا الجزء من الآية؟",
      fr: "Dans cette partie du verset, que signifie « {w} » ?", es: "En esta parte del versículo, ¿qué significa «{w}»?"
    },
    p2: {
      mr: "या अर्थाचा बरोबर अरबी शब्द कोणता?", ar: "ما الكلمة العربية الصحيحة لهذا المعنى؟",
      fr: "Quel est le mot arabe correct pour ce sens ?", es: "¿Cuál es la palabra árabe correcta para este significado?"
    },
    p3: {
      mr: "या रोमन शब्दाचा बरोबर अर्थ?", ar: "ما المعنى الصحيح لهذه الكلمة المنقولة بحروف لاتينية؟",
      fr: "Quel est le sens correct de ce mot translittéré ?", es: "¿Cuál es el significado correcto de esta palabra transliterada?"
    },
    lafz_lbl: { mr: "शब्द: <b>{a}</b> ({r})", ar: "الكلمة: <b>{a}</b> ({r})", fr: "Mot : <b>{a}</b> ({r})", es: "Palabra: <b>{a}</b> ({r})" },
    hint: {
      mr: "📞 <b>उस्तादांचा इशारा:</b> {a} हा शब्द «<b>{r}</b>» असा वाचला जातो",
      ar: "📞 <b>إشارة الأستاذ:</b> الكلمة {a} تُقرأ «<b>{r}</b>»",
      fr: "📞 <b>Indice du maître :</b> le mot {a} se lit « <b>{r}</b> »",
      es: "📞 <b>Pista del maestro:</b> la palabra {a} se lee «<b>{r}</b>»"
    },
    ayat_part: { mr: "आयतीचा भाग: ", ar: "جزء من الآية: ", fr: "Partie du verset : ", es: "Parte del versículo: " },
    other_mean: { mr: "दुसरा अर्थ: ", ar: "معنى آخر: ", fr: "Autre sens : ", es: "Otro significado: " },
    toast_new: { mr: "🔄 नवीन प्रश्न", ar: "🔄 سؤال جديد", fr: "🔄 Nouvelle question", es: "🔄 Nueva pregunta" },
    toast_tier: {
      mr: "🎉 पातळी पूर्ण: {t} — XP पक्के!", ar: "🎉 اكتملت الدرجة: {t} — XP مضمونة!",
      fr: "🎉 Palier terminé : {t} — XP assurés !", es: "🎉 Nivel completado: {t} — ¡XP asegurados!"
    },
    fin_win_t: { mr: "माशा अल्लाह! तुम्ही तज्ज्ञ झालात", ar: "ما شاء الله! أصبحت ماهرًا", fr: "MashaAllah ! Vous êtes devenu expert", es: "¡MashaAllah! Te has convertido en experto" },
    fin_win_m: {
      mr: "तुम्ही सर्व 15 प्रश्न बरोबर केले.", ar: "أجبت عن كل الأسئلة الخمسة عشر بشكل صحيح.",
      fr: "Vous avez répondu correctement aux 15 questions.", es: "Respondiste correctamente las 15 preguntas."
    },
    fin_quit_t: { mr: "तुम्ही येथेच थांबलात", ar: "لقد توقفت هنا", fr: "Vous vous êtes arrêté ici", es: "Te detuviste aquí" },
    fin_quit_m: { mr: "{n} प्रश्न बरोबर केले.", ar: "أجبت عن {n} سؤالًا بشكل صحيح.", fr: "{n} questions réussies.", es: "{n} preguntas correctas." },
    fin_lose_t: { mr: "अफसोस, बरोबर उत्तर हे होते:", ar: "عذرًا، الإجابة الصحيحة كانت:", fr: "Désolé, la bonne réponse était :", es: "Lo siento, la respuesta correcta era:" },
    fin_lose_m: {
      mr: "शब्द: {a} — {r} — {m}<br>आधी हा शब्द पुन्हा वाचा, मग खेळा 🤍",
      ar: "الكلمة: {a} — {r} — {m}<br>اقرأ هذه الكلمة مرة أخرى أولًا، ثم العب 🤍",
      fr: "Mot : {a} — {r} — {m}<br>Relisez d'abord ce mot, puis jouez 🤍",
      es: "Palabra: {a} — {r} — {m}<br>Lee esta palabra otra vez y luego juega 🤍"
    },
    cap_login: { mr: "XP साठी लॉगिन आवश्यक आहे.", ar: "تسجيل الدخول مطلوب لكسب XP.", fr: "La connexion est nécessaire pour gagner des XP.", es: "Se requiere iniciar sesión para ganar XP." },
    cap_admin: { mr: "अ‍ॅडमिन खात्याला XP मिळत नाही.", ar: "حساب المشرف لا يكسب XP.", fr: "Le compte administrateur ne gagne pas d'XP.", es: "La cuenta de administrador no gana XP." },
    cap_hit: { mr: "आजची XP मर्यादा ({c}) पूर्ण झाली.", ar: "تم بلوغ حد XP اليوم ({c}).", fr: "La limite d'XP du jour ({c}) est atteinte.", es: "Se alcanzó el límite de XP de hoy ({c})." },
    cap_total: { mr: "एकूण XP: {n}", ar: "إجمالي XP: {n}", fr: "XP total : {n}", es: "XP total: {n}" },
    bz_confirm_quit: {
      mr: "येथेच थांबायचे? आतापर्यंतचे XP मिळेल.", ar: "أتوقف هنا؟ ستحصل على XP حتى الآن.",
      fr: "Arrêter ici ? Vous recevrez les XP gagnés.", es: "¿Detenerse aquí? Recibirás los XP ganados."
    },
    shukriya: { mr: "धन्यवाद 🤲", ar: "شكرًا 🤲", fr: "Merci 🤲", es: "Gracias 🤲" },
    cele_def_m: {
      mr: "तुम्ही जिंकलात! अल्लाह तुम्हाला अधिक ज्ञान देवो.", ar: "لقد فزت! زادك الله علمًا.",
      fr: "Vous avez gagné ! Qu'Allah vous accorde plus de savoir.", es: "¡Has ganado! Que Allah te aumente en conocimiento."
    }
  };

  /* ===================== Memory game ke matlab =====================
     Card ka Arabi lafz waisa hi rehta hai — sirf matlab badalta hai. */
  var XMEM = {
    "اللہ": { mr: "अल्लाह", ar: "الله", fr: "Allah", es: "Alá" },
    "پالنے والا": { mr: "पालनहार", ar: "الرَّبّ (المُربّي)", fr: "Le Seigneur nourricier", es: "El Señor sustentador" },
    "معبود": { mr: "उपास्य देव", ar: "المَعْبود", fr: "Le Dieu adoré", es: "El Dios adorado" },
    "بہت مہربان": { mr: "परम कृपाळू", ar: "الرَّحْمٰن (شديد الرحمة)", fr: "Le Tout Miséricordieux", es: "El Más Misericordioso" },
    "نہایت رحم والا": { mr: "परम दयाळू", ar: "الرَّحيم (واسع الرحمة)", fr: "Le Très Miséricordieux", es: "El Muy Misericordioso" },
    "بخشنے والا": { mr: "क्षमाशील", ar: "الغَفور (كثير المغفرة)", fr: "Le Pardonneur", es: "El Perdonador" },
    "حکمت والا": { mr: "हिकमतवान", ar: "الحَكيم", fr: "Le Sage", es: "El Sabio" },
    "سب جاننے والا": { mr: "सर्वज्ञ", ar: "العَليم (العالم بكل شيء)", fr: "L'Omniscient", es: "El Omnisciente" },
    "سننے والا": { mr: "सर्व ऐकणारा", ar: "السَّميع", fr: "L'Audient", es: "El Que Todo lo Oye" },
    "دیکھنے والا": { mr: "सर्व पाहणारा", ar: "البَصير", fr: "Le Clairvoyant", es: "El Que Todo lo Ve" },
    "قدرت والا": { mr: "सर्वशक्तिमान", ar: "القَدير", fr: "Le Tout-Puissant", es: "El Todopoderoso" },
    "غالب": { mr: "प्रबळ", ar: "العَزيز (الغالب)", fr: "Le Puissant", es: "El Poderoso" },
    "پیدا کرنے والا": { mr: "निर्माणकर्ता", ar: "الخالِق", fr: "Le Créateur", es: "El Creador" },
    "رزق دینے والا": { mr: "उपजीविका देणारा", ar: "الرَّزّاق", fr: "Le Pourvoyeur", es: "El Proveedor" },
    "مالک": { mr: "मालक", ar: "المالِك", fr: "Le Possesseur", es: "El Dueño" },
    "محبت کرنے والا": { mr: "प्रेमळ", ar: "الوَدود", fr: "Le Tout-Aimant", es: "El Amantísimo" },
    "بردبار": { mr: "सहनशील", ar: "الحَليم", fr: "Le Très Indulgent", es: "El Tolerante" },
    "شکر قبول کرنے والا": { mr: "कृतज्ञता स्वीकारणारा", ar: "الشَّكور", fr: "Le Reconnaissant", es: "El Agradecido" },
    "صبر کرنے والا": { mr: "संयमी", ar: "الصَّبور", fr: "Le Très Patient", es: "El Paciente" },
    "طاقت والا": { mr: "शक्तिमान", ar: "القَوِيّ", fr: "Le Fort", es: "El Fuerte" },
    "روشنی": { mr: "प्रकाश", ar: "النُّور", fr: "La Lumière", es: "La Luz" },
    "ہدایت": { mr: "मार्गदर्शन", ar: "الهُدى", fr: "La guidée", es: "La guía" },
    "ایمان": { mr: "ईमान", ar: "الإيمان", fr: "La foi", es: "La fe" },
    "اسلام": { mr: "इस्लाम", ar: "الإسلام", fr: "L'islam", es: "El islam" },
    "پرہیزگاری": { mr: "तकवा (ईशभय)", ar: "التَّقوى", fr: "La piété (taqwa)", es: "La piedad (taqwa)" },
    "نماز": { mr: "नमाज़", ar: "الصلاة", fr: "La prière", es: "La oración" },
    "روزہ": { mr: "रोज़ा (उपवास)", ar: "الصوم", fr: "Le jeûne", es: "El ayuno" },
    "زکوٰۃ": { mr: "जकात", ar: "الزكاة", fr: "L'aumône obligatoire (zakat)", es: "La caridad obligatoria (zakat)" },
    "حج": { mr: "हज", ar: "الحج", fr: "Le pèlerinage", es: "La peregrinación" },
    "جہاد": { mr: "जिहाद (प्रयत्न)", ar: "الجهاد", fr: "L'effort (jihad)", es: "El esfuerzo (yihad)" },
    "جنت": { mr: "जन्नत (स्वर्ग)", ar: "الجنة", fr: "Le Paradis", es: "El Paraíso" },
    "جہنم": { mr: "जहन्नम (नरक)", ar: "النار (جهنم)", fr: "L'Enfer", es: "El Infierno" },
    "دل": { mr: "हृदय", ar: "القلب", fr: "Le cœur", es: "El corazón" },
    "عقل": { mr: "बुद्धी", ar: "العقل", fr: "L'intellect", es: "El intelecto" },
    "علم": { mr: "ज्ञान", ar: "العلم", fr: "Le savoir", es: "El conocimiento" },
    "عمل": { mr: "कर्म", ar: "العمل", fr: "L'action", es: "La acción" },
    "صبر": { mr: "संयम", ar: "الصبر", fr: "La patience", es: "La paciencia" },
    "شکر": { mr: "कृतज्ञता", ar: "الشكر", fr: "La gratitude", es: "La gratitud" },
    "توبہ": { mr: "पश्चात्ताप", ar: "التوبة", fr: "Le repentir", es: "El arrepentimiento" },
    "دعا": { mr: "दुआ (प्रार्थना)", ar: "الدعاء", fr: "L'invocation (du'a)", es: "La súplica (dua)" },
    "ذکر": { mr: "स्मरण", ar: "الذكر", fr: "Le rappel (dhikr)", es: "El recuerdo (dhikr)" },
    "قرآن": { mr: "कुरआन", ar: "القرآن", fr: "Le Coran", es: "El Corán" },
    "حدیث": { mr: "हदीस", ar: "الحديث", fr: "Le hadith", es: "El hadiz" },
    "سنت": { mr: "सुन्नत", ar: "السنة", fr: "La sunna", es: "La sunna" },
    "نبی": { mr: "नबी (पैगंबर)", ar: "النبي", fr: "Le prophète", es: "El profeta" },
    "رسول": { mr: "रसूल (दूत)", ar: "الرسول", fr: "Le messager", es: "El mensajero" },
    "صحابہ": { mr: "सहाबा (साथी)", ar: "الصحابة", fr: "Les compagnons", es: "Los compañeros" },
    "فرشتہ": { mr: "देवदूत", ar: "المَلَك", fr: "L'ange", es: "El ángel" },
    "شیطان": { mr: "सैतान", ar: "الشيطان", fr: "Satan", es: "Satanás" },
    "مسجد": { mr: "मशीद", ar: "المسجد", fr: "La mosquée", es: "La mezquita" }
  };

  window.FQGamesX = { ui: XUI, mem: XMEM };

  var oGU = window.GU, oGM = window.GM;

  window.GU = function (k, v) {
    var e = XUI[k];
    if (e) {
      var l = cur(), s = e[l];
      if (s == null && NEW[l]) s = e.en;      // nayi zubaan: English par girao
      if (s != null) return fill(s, v);
    }
    return oGU ? oGU(k, v) : k;
  };

  window.GM = function (ur) {
    var l = cur();
    if (NEW[l] && XMEM[ur] && XMEM[ur][l]) return XMEM[ur][l];
    return oGM ? oGM(ur) : ur;
  };
})();
