/* ==========================================================
   asma-lang.js — 99 Asma-ul-Husna ke matlab (नई 4 zubaanein)
   मराठी (mr) · العربية (ar) · Français (fr) · Español (es)

   Kaam: asma.html ka mean() pehle yahan dekhta hai (tarteeb se, 0 = پہلا نام).
   Jo na mile wahan English dikhta hai — kuch khaali ya undefined nahi.

   ⚠️ Allah ke naam (Arabic) KABHI NAHI BADALTE — sirf unka matlab likha hai.
      Tarjume mashhoor (99 naam ki) fehrist ke matlab par hain, apni taraf se
      koi naya matlab nahi gadha gaya.
   ========================================================== */
window.ASMA_X = [
  { mr: "अत्यंत दयाळू", ar: "ذو الرحمة الواسعة", fr: "Le Tout Miséricordieux", es: "El Más Misericordioso" },              /* 1  الرَّحْمَنُ */
  { mr: "फार दया करणारा", ar: "الرحيم بعباده", fr: "Le Très Miséricordieux", es: "El Muy Misericordioso" },                 /* 2  الرَّحِيمُ */
  { mr: "खरा राजा, सर्वसत्ताधारी", ar: "المالك المتصرف في خلقه", fr: "Le Roi, le Souverain", es: "El Rey, el Soberano" },     /* 3  الْمَلِكُ */
  { mr: "अत्यंत पवित्र", ar: "المنزّه عن كل نقص", fr: "Le Très Saint", es: "El Santísimo" },                                 /* 4  الْقُدُّوسُ */
  { mr: "शांती देणारा, दोषरहित", ar: "السالم من كل عيب، المانح للسلام", fr: "La Source de la paix", es: "La Fuente de la paz" }, /* 5  السَّلَامُ */
  { mr: "सुरक्षा देणारा", ar: "المؤمّن عباده من الخوف", fr: "Le Donateur de sécurité", es: "El Dador de seguridad" },         /* 6  الْمُؤْمِنُ */
  { mr: "रक्षण करणारा, पहारेकरी", ar: "الرقيب الحفيظ على خلقه", fr: "Le Gardien, l'Observateur", es: "El Guardián, el Vigilante" }, /* 7  الْمُهَيْمِنُ */
  { mr: "सर्वशक्तिमान, प्रभावी", ar: "الغالب القوي", fr: "Le Tout-Puissant", es: "El Todopoderoso" },                         /* 8  الْعَزِيزُ */
  { mr: "मोठ्या सत्तेचा, तुटलेले जोडणारा", ar: "القاهر الذي يجبر الكسير", fr: "Le Contraignant, le Réparateur", es: "El Dominante, el Restaurador" }, /* 9  الْجَبَّارُ */
  { mr: "महानतेचा अधिपती", ar: "المتعالي عن صفات الخلق", fr: "Le Suprême en grandeur", es: "El Supremo en grandeza" },        /* 10 الْمُتَكَبِّرُ */
  { mr: "निर्माणकर्ता", ar: "الخالق للخلق", fr: "Le Créateur", es: "El Creador" },                                           /* 11 الْخَالِقُ */
  { mr: "अस्तित्वात आणणारा", ar: "المُنشئ من العدم", fr: "L'Initiateur", es: "El Originador" },                              /* 12 الْبَارِئُ */
  { mr: "आकार देणारा", ar: "المصوّر للصور", fr: "Le Formateur des formes", es: "El Formador de formas" },                     /* 13 الْمُصَوِّرُ */
  { mr: "अत्यंत क्षमाशील", ar: "كثير المغفرة", fr: "Le Pardonneur par excellence", es: "El Perdonador" },                    /* 14 الْغَفَّارُ */
  { mr: "सर्वांवर प्रभावी", ar: "القاهر لكل شيء", fr: "Le Dominateur", es: "El Subyugador" },                                /* 15 الْقَهَّارُ */
  { mr: "भरपूर देणारा", ar: "كثير العطاء", fr: "Le Donateur généreux", es: "El Dador generoso" },                             /* 16 الْوَهَّابُ */
  { mr: "रोजी देणारा", ar: "الرازق لخلقه", fr: "Le Pourvoyeur", es: "El Proveedor" },                                        /* 17 الرَّزَّاقُ */
  { mr: "दारे उघडणारा, निर्णय देणारा", ar: "الفاتح لأبواب الرحمة، الحاكم", fr: "L'Ouvreur, le Juge", es: "El Abridor, el Juez" }, /* 18 الْفَتَّاحُ */
  { mr: "सर्वज्ञ", ar: "المحيط علمًا بكل شيء", fr: "L'Omniscient", es: "El Omnisciente" },                                   /* 19 الْعَلِيمُ */
  { mr: "आकुंचन देणारा", ar: "القابض الرزق بحكمته", fr: "Celui qui retient", es: "El que restringe" },                       /* 20 الْقَابِضُ */
  { mr: "विस्तार देणारा", ar: "الباسط الرزق لعباده", fr: "Celui qui étend", es: "El que expande" },                          /* 21 الْبَاسِطُ */
  { mr: "खाली करणारा", ar: "الخافض لأهل الكبر", fr: "Celui qui abaisse", es: "El que rebaja" },                              /* 22 الْخَافِضُ */
  { mr: "उंच करणारा", ar: "الرافع لأهل الطاعة", fr: "Celui qui élève", es: "El que eleva" },                                 /* 23 الرَّافِعُ */
  { mr: "मान देणारा", ar: "المعزّ من يشاء", fr: "Le Donateur d'honneur", es: "El que da honor" },                            /* 24 الْمُعِزُّ */
  { mr: "अपमान देणारा", ar: "المذلّ من يشاء", fr: "Celui qui avilit", es: "El que humilla" },                                /* 25 الْمُذِلُّ */
  { mr: "सर्व ऐकणारा", ar: "السميع لكل شيء", fr: "L'Audient", es: "El que todo lo oye" },                                   /* 26 السَّمِيعُ */
  { mr: "सर्व पाहणारा", ar: "البصير بكل شيء", fr: "Le Clairvoyant", es: "El que todo lo ve" },                               /* 27 الْبَصِيرُ */
  { mr: "निर्णय करणारा", ar: "الحاكم الذي لا يُردّ حكمه", fr: "Le Juge", es: "El Juez" },                                     /* 28 الْحَكَمُ */
  { mr: "पूर्ण न्यायी", ar: "العادل في حكمه", fr: "Le Parfaitement Juste", es: "El Absolutamente Justo" },                    /* 29 الْعَدْلُ */
  { mr: "सूक्ष्मदर्शी, अत्यंत दयाळू", ar: "اللطيف بعباده", fr: "Le Subtil, le Bienveillant", es: "El Sutil, el Bondadoso" }, /* 30 اللَّطِيفُ */
  { mr: "सर्वसूचित", ar: "الخبير ببواطن الأمور", fr: "Le Parfaitement Informé", es: "El Bien Informado" },                    /* 31 الْخَبِيرُ */
  { mr: "सहनशील", ar: "الحليم الذي لا يعاجل بالعقوبة", fr: "Le Longanime", es: "El Tolerante" },                              /* 32 الْحَلِيمُ */
  { mr: "महान", ar: "العظيم الشأن", fr: "Le Magnifique", es: "El Magnífico" },                                               /* 33 الْعَظِيمُ */
  { mr: "अत्यंत क्षमाशील", ar: "الغفور لذنوب عباده", fr: "Le Très Pardonneur", es: "El Muy Perdonador" },                    /* 34 الْغَفُورُ */
  { mr: "मोल जाणणारा", ar: "الشاكر لطاعة عباده", fr: "Le Reconnaissant", es: "El Agradecido" },                              /* 35 الشَّكُورُ */
  { mr: "सर्वोच्च", ar: "العليّ فوق خلقه", fr: "Le Très Haut", es: "El Altísimo" },                                          /* 36 الْعَلِيُّ */
  { mr: "सर्वात मोठा", ar: "الكبير المتعالي", fr: "Le Plus Grand", es: "El Más Grande" },                                    /* 37 الْكَبِيرُ */
  { mr: "रक्षक", ar: "الحفيظ لكل شيء", fr: "Le Préservateur", es: "El Preservador" },                                        /* 38 الْحَفِيظُ */
  { mr: "पोषण करणारा", ar: "المقيت الذي يوصل القوت", fr: "Le Nourricier", es: "El Sustentador" },                            /* 39 الْمُقِيتُ */
  { mr: "हिशोब घेणारा, पुरेसा", ar: "الحسيب الكافي", fr: "Le Comptable, le Suffisant", es: "El Contador, el Suficiente" },    /* 40 الْحَسِيبُ */
  { mr: "गौरवशाली", ar: "الجلّي العظيم", fr: "Le Majestueux", es: "El Majestuoso" },                                         /* 41 الْجَلِيلُ */
  { mr: "उदार", ar: "الكريم كثير الخير", fr: "Le Généreux", es: "El Generoso" },                                             /* 42 الْكَرِيمُ */
  { mr: "लक्ष ठेवणारा", ar: "الرقيب المطّلع", fr: "L'Observateur", es: "El Observador" },                                    /* 43 الرَّقِيبُ */
  { mr: "दुआ ऐकणारा", ar: "المجيب لدعاء الداعين", fr: "Celui qui répond à l'invocation", es: "El que responde a la súplica" }, /* 44 الْمُجِيبُ */
  { mr: "व्यापक", ar: "الواسع الفضل", fr: "L'Immense", es: "El Inmenso" },                                                   /* 45 الْوَاسِعُ */
  { mr: "हिकमती", ar: "الحكيم في تدبيره", fr: "Le Sage", es: "El Sabio" },                                                   /* 46 الْحَكِيمُ */
  { mr: "प्रेमळ", ar: "المحبّ لأوليائه", fr: "Le Tout Aimant", es: "El Más Amante" },                                        /* 47 الْوَدُودُ */
  { mr: "वैभवशाली", ar: "المجيد الشريف", fr: "Le Glorieux", es: "El Glorioso" },                                             /* 48 الْمَجِيدُ */
  { mr: "पुन्हा उठवणारा", ar: "الباعث للخلق يوم القيامة", fr: "Le Ressusciteur", es: "El Resucitador" },                     /* 49 الْبَاعِثُ */
  { mr: "साक्षीदार", ar: "الشاهد على كل شيء", fr: "Le Témoin", es: "El Testigo" },                                           /* 50 الشَّهِيدُ */
  { mr: "सत्य", ar: "الحق الثابت", fr: "La Vérité", es: "La Verdad" },                                                       /* 51 الْحَقُّ */
  { mr: "विश्वासू, सर्व कारभार सांभाळणारा", ar: "الوكيل القائم بأمور عباده", fr: "Le Garant, le Gérant", es: "El Garante, el Administrador" }, /* 52 الْوَكِيلُ */
  { mr: "अत्यंत बलवान", ar: "القويّ لا يعجزه شيء", fr: "Le Très Fort", es: "El Muy Fuerte" },                                /* 53 الْقَوِيُّ */
  { mr: "दृढ", ar: "المتين الشديد القوة", fr: "Le Solide", es: "El Firme" },                                                 /* 54 الْمَتِينُ */
  { mr: "मित्र, मदतनीस", ar: "الناصر لعباده", fr: "L'Ami protecteur", es: "El Amigo protector" },                             /* 55 الْوَلِيُّ */
  { mr: "स्तुतीला पात्र", ar: "المحمود على كل حال", fr: "Le Digne de louange", es: "El Digno de alabanza" },                 /* 56 الْحَمِيدُ */
  { mr: "गणना करणारा", ar: "المحصي لكل شيء", fr: "Le Compteur", es: "El Contador" },                                         /* 57 الْمُحْصِي */
  { mr: "पहिल्यांदा निर्माण करणारा", ar: "المبتدئ للخلق", fr: "Le Commenceur", es: "El Iniciador" },                          /* 58 الْمُبْدِئُ */
  { mr: "पुन्हा लोटणारा", ar: "المعيد للخلق بعد الفناء", fr: "Le Rétablisseur", es: "El Restaurador" },                       /* 59 الْمُعِيدُ */
  { mr: "जीवन देणारा", ar: "المحيي للأحياء", fr: "Le Donateur de vie", es: "El Dador de vida" },                             /* 60 الْمُحْيِي */
  { mr: "मृत्यू देणारा", ar: "المميت لخلقه", fr: "Le Donateur de mort", es: "El Dador de muerte" },                          /* 61 الْمُمِيتُ */
  { mr: "कायम जिवंत", ar: "الحيّ الذي لا يموت", fr: "Le Vivant éternel", es: "El Viviente eterno" },                         /* 62 الْحَيُّ */
  { mr: "स्वतः टिकणारा, सर्वांना टिकवणारा", ar: "القائم بنفسه، المقيم لغيره", fr: "Le Subsistant par Lui-même", es: "El Subsistente por Sí mismo" }, /* 63 الْقَيُّومُ */
  { mr: "सर्व काही असणारा, निरपेक्ष", ar: "الواجد الذي لا يفتقر", fr: "Celui qui trouve, le Suffisant", es: "El que encuentra, el Autosuficiente" }, /* 64 الْوَاجِدُ */
  { mr: "महिमावान", ar: "الماجد العظيم", fr: "Le Très Glorieux", es: "El Gloriosísimo" },                                   /* 65 الْمَاجِدُ */
  { mr: "एक", ar: "الواحد في ذاته وصفاته", fr: "L'Un", es: "El Uno" },                                                      /* 66 الْوَاحِدُ */
  { mr: "एकमेव", ar: "الأحد الفرد", fr: "L'Unique", es: "El Único" },                                                        /* 67 الْأَحَدُ */
  { mr: "निरपेक्ष आधार", ar: "الصمد المقصود في الحوائج", fr: "Le Refuge éternel", es: "El Refugio eterno" },                  /* 68 الصَّمَدُ */
  { mr: "सामर्थ्यवान", ar: "القادر على كل شيء", fr: "Le Capable", es: "El Capaz" },                                          /* 69 الْقَادِرُ */
  { mr: "सर्वसत्ताधारी", ar: "المقتدر الذي لا يغالب", fr: "Le Tout-Puissant", es: "El Omnipotente" },                        /* 70 الْمُقْتَدِرُ */
  { mr: "पुढे करणारा", ar: "المقدّم من يشاء", fr: "Celui qui avance", es: "El que adelanta" },                                /* 71 الْمُقَدِّمُ */
  { mr: "मागे करणारा", ar: "المؤخّر من يشاء", fr: "Celui qui retarde", es: "El que retrasa" },                               /* 72 الْمُؤَخِّرُ */
  { mr: "सर्वप्रथम", ar: "الأول قبل كل شيء", fr: "Le Premier", es: "El Primero" },                                            /* 73 الْأَوَّلُ */
  { mr: "सर्वानंतर", ar: "الآخر بعد كل شيء", fr: "Le Dernier", es: "El Último" },                                            /* 74 الْآخِرُ */
  { mr: "प्रकट", ar: "الظاهر بأدلته", fr: "L'Apparent", es: "El Manifiesto" },                                               /* 75 الظَّاهِرُ */
  { mr: "गुप्त", ar: "الباطن عن إدراك الأبصار", fr: "Le Caché", es: "El Oculto" },                                           /* 76 الْبَاطِنُ */
  { mr: "कारभारी, शासक", ar: "الوالي المتصرف", fr: "Le Gouverneur", es: "El Gobernador" },                                   /* 77 الْوَالِي */
  { mr: "अत्यंत उच्च", ar: "المتعالي عن كل نقص", fr: "Le Très Élevé", es: "El Excelso" },                                    /* 78 الْمُتَعَالِي */
  { mr: "भलाई करणारा", ar: "البارّ المحسن", fr: "La Source du bien", es: "La Fuente del bien" },                             /* 79 الْبَرُّ */
  { mr: "तौबा स्वीकारणारा", ar: "التواب يقبل التوبة", fr: "L'Accepteur du repentir", es: "El Aceptador del arrepentimiento" }, /* 80 التَّوَّابُ */
  { mr: "अवज्ञाकार्यांना शिक्षा देणारा", ar: "المنتقم من المعاندين", fr: "Le Vengeur", es: "El Vengador" },                   /* 81 الْمُنْتَقِمُ */
  { mr: "क्षमा करणारा", ar: "العفوّ عن عباده", fr: "Le Pardonneur", es: "El Indulgente" },                                    /* 82 الْعَفُوُّ */
  { mr: "अत्यंत कृपाळू", ar: "الرءوف بعباده", fr: "Le Très Compatissant", es: "El Muy Compasivo" },                          /* 83 الرَّءُوفُ */
  { mr: "राज्याचा मालक", ar: "مالك الملك يؤتي الملك من يشاء", fr: "Maître de toute souveraineté", es: "Dueño de todo dominio" }, /* 84 مَالِكُ الْمُلْكِ */
  { mr: "गौरव व उदारतेचा स्वामी", ar: "ذو الجلال والإكرام", fr: "Seigneur de majesté et de générosité", es: "Señor de majestad y generosidad" }, /* 85 ذُو الْجَلَالِ وَالْإِكْرَامِ */
  { mr: "न्याय करणारा", ar: "المقسط العادل", fr: "L'Équitable", es: "El Equitativo" },                                       /* 86 الْمُقْسِطُ */
  { mr: "एकत्र करणारा", ar: "الجامع للخلق", fr: "Le Rassembleur", es: "El Reunidor" },                                        /* 87 الْجَامِعُ */
  { mr: "निरपेक्ष", ar: "الغني عن كل شيء", fr: "Le Suffisant", es: "El Autosuficiente" },                                     /* 88 الْغَنِيُّ */
  { mr: "समृद्ध करणारा", ar: "المغني من يشاء", fr: "L'Enrichisseur", es: "El Enriquecedor" },                                 /* 89 الْمُغْنِي */
  { mr: "रोखणारा", ar: "المانع لما شاء", fr: "Celui qui empêche", es: "El que impide" },                                      /* 90 الْمَانِعُ */
  { mr: "हानी करण्याचा अधिकार असणारा", ar: "الضارّ بقدرته", fr: "Celui qui afflige", es: "El que aflige" },                    /* 91 الضَّارُّ */
  { mr: "फायदा देणारा", ar: "النافع لعباده", fr: "Le Bienfaiteur", es: "El Benefactor" },                                     /* 92 النَّافِعُ */
  { mr: "प्रकाश देणारा", ar: "النور الهادي", fr: "La Lumière", es: "La Luz" },                                                /* 93 النُّورُ */
  { mr: "मार्गदर्शक", ar: "الهادي إلى الحق", fr: "Le Guide", es: "El Guía" },                                                 /* 94 الْهَادِي */
  { mr: "अद्वितीय निर्माता", ar: "البديع بلا مثال", fr: "L'Initiateur incomparable", es: "El Originador incomparable" },       /* 95 الْبَدِيعُ */
  { mr: "कायम टिकणारा", ar: "الباقي لا يزول", fr: "L'Éternel", es: "El Eterno" },                                             /* 96 الْبَاقِي */
  { mr: "सर्वांचा वारस", ar: "الوارث لكل شيء", fr: "L'Héritier", es: "El Heredero" },                                         /* 97 الْوَارِثُ */
  { mr: "सन्मार्ग दाखवणारा", ar: "الرشيد المرشد", fr: "Le Guide vers le droit chemin", es: "El Guía al camino recto" },       /* 98 الرَّشِيدُ */
  { mr: "अत्यंत संयमी", ar: "الصبور لا يعاجل", fr: "Le Très Patient", es: "El Muy Paciente" }                                 /* 99 الصَّبُورُ */
];

/* chhote labels (page par JS se aate hain) — nayi 4 zubaanein */
window.ASMA_UI = {
  empty: {
    mr: "कोणतेही नाव सापडले नाही.",
    ar: "لم يُعثر على أي اسم.",
    fr: "Aucun nom trouvé.",
    es: "No se encontró ningún nombre."
  }
};
