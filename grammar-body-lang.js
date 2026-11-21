/* grammar-body-lang.js — Nahw-Sarf ke SABAQ ka matn (मराठी / العربية / Français / Español)
   ==========================================================================
   grammar-lang.js mein sirf unwan (title) aur maqsad (goal) the. Yahan sabaq ka
   asal matn aata hai: sections (unwan + para), keyFacts (yaad rakhne wali baatein)
   aur reflection (aaj ka amal).

   Kaam ka tareeqa: arabic-grammar.html pehle English ka poora sabaq uthata hai,
   phir is file se jo mil jaye wo us par likh deta hai. Yaani jitne din yahan hain,
   utne din us zubaan mein poore dikhte hain; baqi din English par chalte hain —
   is liye ye file dheere dheere Bharti jaa sakti hai, kuch tootta nahi.

   ⚠️ Arabi alfaz ({{...}} ke andar) kabhi badle nahi jaate — sirf unka matlab.
   Imtihan (quiz) ke sawal iss waqt English mein hain (unka jawab number se juda
   hai, is liye unhein haath se badalna khatarnak hai).
   ========================================================================== */
window.GRAMMAR_BODY_LANG = {

  /* ═══════════════ DIN 1 — Sarf kya hai ═══════════════ */
  1: {
    mr: {
      sections: [
        { h: "📖 सर्फ म्हणजे काय?", p: "सर्फ अरबी भाषेचे ते शास्त्र आहे ज्यात शब्दाचा आकार, त्याचे बदल आणि एका मुळापासून नवीन शब्द कसे तयार होतात याचा अभ्यास होतो. सोप्या शब्दांत सांगायचे तर — सर्फ म्हणजे «शब्दांची कारखाना»." },
        { h: "🎯 का आवश्यक आहे?", p: "कुरआन समजण्यासाठी सर्फ अत्यंत गरजेचे आहे. एक मूळ ({{ج ذ ر}}) माहीत असेल तर त्याच्या अनेक रूपांचा अर्थ सहज लक्षात येतो — म्हणून सर्फ शिकल्यावर शब्दकोश कमी वापरावा लागतो." }
      ],
      keyFacts: ["सर्फ = शब्दाची रचना; नह्व = वाक्याची रचना.", "बहुतेक मुळे तीन अक्षरी असतात.", "मुळाला हरकत नसते, फक्त अक्षरे असतात."],
      reflection: "आज एक मूळ निवडा (उदा. {{ك ت ب}}) आणि त्याचे तीन शब्द शोधा."
    },
    ar: {
      sections: [
        { h: "📖 ما هو الصرف؟", p: "الصرف فرعٌ من فروع العربية يبحث في بناء الكلمة وتغيّر صورها وقواعد توليد كلمات جديدة من جذر واحد. وبعبارة بسيطة: الصرف «مصنع الكلمات»." },
        { h: "🎯 لماذا هو مهم؟", p: "الصرف ضروري لفهم القرآن؛ فإذا عرفتَ الجذر ({{ج ذ ر}}) عرفتَ صور الكلمة ومعانيها، فاستغنيتَ عن كثرة الرجوع إلى المعجم." }
      ],
      keyFacts: ["الصرف: بناء الكلمة، والنحو: بناء الجملة.", "أكثر الجذور ثلاثية الأحرف.", "الجذر يُكتب بحروفه دون حركات."],
      reflection: "اختر جذرًا واحدًا (مثل {{ك ت ب}}) واستخرج منه ثلاثة أسماء."
    },
    fr: {
      sections: [
        { h: "📖 Qu'est-ce que le Sarf ?", p: "Le Sarf est la branche de l'arabe qui étudie la forme du mot, ses transformations et les règles qui permettent de former de nouveaux mots à partir d'une même racine. En bref : le Sarf est « l'usine des mots »." },
        { h: "🎯 Pourquoi est-ce important ?", p: "Le Sarf est indispensable pour comprendre le Coran : si tu connais la racine ({{ج ذ ر}}), tu reconnais les différentes formes d'un mot et tu as moins besoin du dictionnaire." }
      ],
      keyFacts: ["Sarf = formation du mot ; Nahw = structure de la phrase.", "La plupart des racines ont trois lettres.", "La racine s'écrit sans voyelles."],
      reflection: "Choisis une racine (par ex. {{ك ت ب}}) et trouve trois mots qui en dérivent."
    },
    es: {
      sections: [
        { h: "📖 ¿Qué es el Sarf?", p: "El Sarf es la rama del árabe que estudia la forma de la palabra, sus cambios y las reglas para formar palabras nuevas a partir de una misma raíz. En pocas palabras: el Sarf es «la fábrica de las palabras»." },
        { h: "🎯 ¿Por qué es importante?", p: "El Sarf es imprescindible para entender el Corán: si conoces la raíz ({{ج ذ ر}}) reconoces las distintas formas de una palabra y necesitas menos el diccionario." }
      ],
      keyFacts: ["Sarf = formación de la palabra; Nahw = estructura de la frase.", "La mayoría de las raíces tienen tres letras.", "La raíz se escribe sin vocales."],
      reflection: "Elige una raíz (por ejemplo {{ك ت ب}}) y saca tres palabras derivadas."
    }
  },

  /* ═══════════════ DIN 2 — Kalima ki 3 qismein ═══════════════ */
  2: {
    mr: {
      sections: [
        { h: "📖 शब्द (कलिमा) चे तीन प्रकार", p: "अरबीत प्रत्येक शब्द तीनपैकी एकच असतो: नाम (इसम), क्रियापद (फिअल) किंवा अव्यय (हर्फ). हे तीन भाग वाक्याची पायाभरणी आहेत." },
        { h: "🚪 नाम, क्रियापद, अव्यय", p: "नाम वेळेशी जोडलेले नसते — {{كِتَاب}} (पुस्तक), {{بَيْت}} (घर). क्रियापद वेळ दाखवते — {{كَتَبَ}} (त्याने लिहिले). अव्ययाचा अर्थ स्वतः पूर्ण होत नाही — {{فِي}} (मध्ये), {{مِنْ}} (पासून)." }
      ],
      keyFacts: ["इसम = नाम, फिअल = क्रियापद, हर्फ = अव्यय.", "एकच शब्द दोन प्रकारचा होऊ शकत नाही.", "हर्फ नेहमी दुसऱ्या शब्दाशी जोडून अर्थ देतो."],
      reflection: "आज एक आयत घ्या आणि त्यातून एक नाम, एक क्रियापद व एक अव्यय शोधा."
    },
    ar: {
      sections: [
        { h: "📖 أقسام الكلمة الثلاثة", p: "كل كلمة في العربية إمّا اسم أو فعل أو حرف، ولا رابع لها. وهذه الأقسام الثلاثة أساس الجملة." },
        { h: "🚪 الاسم والفعل والحرف", p: "الاسم لا يرتبط بزمن — {{كِتَاب}} و{{بَيْت}}. والفعل يدل على زمن — {{كَتَبَ}}. والحرف لا يتمّ معناه إلا مع غيره — {{فِي}} و{{مِنْ}}." }
      ],
      keyFacts: ["الاسم، والفعل، والحرف: لا يخرج عنها شيء.", "الكلمة الواحدة لا تكون قسمين معًا.", "الحرف لا بدّ له من متعلَّق."],
      reflection: "اقرأ آية واحدة، واستخرج منها اسمًا وفعلًا وحرفًا."
    },
    fr: {
      sections: [
        { h: "📖 Les trois catégories de mots", p: "En arabe, chaque mot (kalima) est soit un nom (ism), soit un verbe (fi'l), soit une particule (harf) — il n'y a pas de quatrième catégorie. Ces trois catégories sont la base de la phrase." },
        { h: "🚪 Nom, verbe, particule", p: "Le nom n'est pas lié au temps — {{كِتَاب}} (livre), {{بَيْت}} (maison). Le verbe indique un temps — {{كَتَبَ}} (il a écrit). La particule n'a pas de sens complet seule — {{فِي}} (dans), {{مِنْ}} (de)." }
      ],
      keyFacts: ["Ism = nom, fi'l = verbe, harf = particule.", "Un même mot n'appartient qu'à une seule catégorie.", "La particule a besoin d'un complément."],
      reflection: "Prends un verset et repère un nom, un verbe et une particule."
    },
    es: {
      sections: [
        { h: "📖 Las tres clases de palabra", p: "En árabe cada palabra (kalima) es un nombre (ism), un verbo (fi'l) o una partícula (harf); no hay una cuarta clase. Estas tres son la base de la frase." },
        { h: "🚪 Nombre, verbo, partícula", p: "El nombre no se liga al tiempo — {{كِتَاب}} (libro), {{بَيْت}} (casa). El verbo indica tiempo — {{كَتَبَ}} (escribió). La partícula sola no completa su sentido — {{فِي}} (en), {{مِنْ}} (desde)." }
      ],
      keyFacts: ["Ism = nombre, fi'l = verbo, harf = partícula.", "Una misma palabra no es de dos clases.", "La partícula necesita otra palabra."],
      reflection: "Toma un versículo y saca un nombre, un verbo y una partícula."
    }
  },

  /* ═══════════════ DIN 3 — Jadhr (jawhar) ═══════════════ */
  3: {
    mr: {
      sections: [
        { h: "🌱 मूळ (जड) म्हणजे काय?", p: "बहुतेक अरबी शब्द तीन अक्षरी मुळापासून बनतात. मूळ हीच शब्दाची मूळ सामग्री असते. मुळात हरकत नसते — फक्त अक्षरे लिहिली जातात ({{ك ت ب}})." },
        { h: "📝 मुळाची उदाहरणे", p: "{{ك ت ب}} = लिहिणे → {{كَتَبَ}} (त्याने लिहिले), {{كِتَاب}} (पुस्तक), {{كَاتِب}} (लेखक), {{مَكْتُوب}} (लिहिलेले). एखादे मूळ तुमच्या ओळखीचे असेल तर नवीन शब्द सहज लक्षात राहतात." }
      ],
      keyFacts: ["मूळ सहसा 3 अक्षरी असते (काही वेळा 4).", "मूळ हरकतांशिवाय लिहितात.", "एका मुळापासून अनेक नामे व क्रियापदे बनतात."],
      reflection: "{{ع ل م}} मुळापासून तीन शब्द तयार करा आणि त्यांचा अर्थ शोधा."
    },
    ar: {
      sections: [
        { h: "🌱 ما هو الجذر؟", p: "أكثر الأسماء والأفعال في العربية مبنيّة على جذر من ثلاثة أحرف، والجذر هو المادة الأصلية للكلمة. ويُكتب الجذر بحروفه دون حركات ({{ك ت ب}})." },
        { h: "📝 أمثلة على الجذور", p: "{{ك ت ب}} = الكتابة → {{كَتَبَ}} (كتب)، {{كِتَاب}} (الكتاب)، {{كَاتِب}} (الكاتب)، {{مَكْتُوب}} (المكتوب). ومعرفة الجذر تُعين على فهم الكلمات الجديدة." }
      ],
      keyFacts: ["أكثر الجذور ثلاثية، وقليلها رباعي.", "الجذر يُجرَّد من الحركات والزوائد.", "من الجذر الواحد تتولّد أسماء وأفعال كثيرة."],
      reflection: "استخرج من جذر {{ع ل م}} ثلاثة أسماء واذكر معانيها."
    },
    fr: {
      sections: [
        { h: "🌱 Qu'est-ce qu'une racine ?", p: "La plupart des mots arabes sont bâtis sur une racine de trois lettres. La racine est la matière première du mot ; on l'écrit sans voyelles ({{ك ت ب}})." },
        { h: "📝 Exemples de racines", p: "{{ك ت ب}} = écrire → {{كَتَبَ}} (il a écrit), {{كِتَاب}} (livre), {{كَاتِب}} (écrivain), {{مَكْتُوب}} (écrit). Connaître la racine aide à comprendre les mots nouveaux." }
      ],
      keyFacts: ["La racine a le plus souvent trois lettres.", "On écrit la racine sans voyelles.", "Une racine engendre de nombreux noms et verbes."],
      reflection: "Forme trois mots à partir de la racine {{ع ل م}} et note leur sens."
    },
    es: {
      sections: [
        { h: "🌱 ¿Qué es una raíz?", p: "La mayoría de las palabras árabes se construyen sobre una raíz de tres letras. La raíz es la materia prima de la palabra y se escribe sin vocales ({{ك ت ب}})." },
        { h: "📝 Ejemplos de raíces", p: "{{ك ت ب}} = escribir → {{كَتَبَ}} (escribió), {{كِتَاب}} (libro), {{كَاتِب}} (escritor), {{مَكْتُوب}} (escrito). Conocer la raíz ayuda a entender palabras nuevas." }
      ],
      keyFacts: ["La raíz suele tener tres letras.", "La raíz se escribe sin vocales.", "De una raíz nacen muchos nombres y verbos."],
      reflection: "Forma tres palabras de la raíz {{ع ل م}} y anota su significado."
    }
  },

  /* ═══════════════ DIN 4 — Wazn (dhancha) ═══════════════ */
  4: {
    mr: {
      sections: [
        { h: "📐 वजन म्हणजे काय?", p: "वजन म्हणजे शब्दाचा साचा (फ्रेम). अरबीत प्रत्येक शब्द एखाद्या साच्यावर बसवला जातो. साचा दाखवण्यासाठी {{ف}} {{ع}} {{ل}} ही तीन अक्षरे मुळाची जागा घेतात — उदा. {{فَعَلَ}}, {{فَاعِل}}, {{مَفْعُول}}." },
        { h: "🔧 साचा कसा वापरायचा?", p: "मूळ साच्यात ठेवले की नवीन शब्द तयार होतो. {{ك ت ب}} + {{فَاعِل}} = {{كَاتِب}} (लेखक). हेच सर्फचे खरे यंत्र आहे." }
      ],
      keyFacts: ["वजन = शब्दाचा साचा; मुळाची जागा फ, अ, ल घेतात.", "एकच साचा अनेक मुळांवर चालतो.", "साच्यावरून शब्दाचा प्रकार समजतो (नाम/क्रियापद)."],
      reflection: "{{فَعِيل}} साच्यात {{ع ل م}} मूळ घाला — कोणता शब्द बनला?"
    },
    ar: {
      sections: [
        { h: "📐 ما هو الوزن؟", p: "الوزن هو القالب الذي تُبنى عليه الكلمة. ولبيان الوزن تُوضع {{ف}} {{ع}} {{ل}} موضع حروف الجذر — مثل {{فَعَلَ}} و{{فَاعِل}} و{{مَفْعُول}}." },
        { h: "🔧 كيف يُستعمل الوزن؟", p: "إذا وضعتَ حروف الجذر في قالب الوزن تولّدت كلمة جديدة: {{ك ت ب}} + {{فَاعِل}} = {{كَاتِب}} (كاتب). وهذا هو جوهر الصرف." }
      ],
      keyFacts: ["الوزن قالبٌ، و{{ف ع ل}} رموزٌ لحروف الجذر.", "الوزن الواحد يصلح لكل الجذور.", "من الوزن يُعرف نوع الكلمة."],
      reflection: "ضع {{ع ل م}} في وزن {{فَعِيل}} — أيّ كلمة تخرج؟"
    },
    fr: {
      sections: [
        { h: "📐 Qu'est-ce qu'un schème ?", p: "Le wazn est le moule sur lequel on construit le mot. Pour le montrer, on met {{ف}} {{ع}} {{ل}} à la place des lettres de la racine — par ex. {{فَعَلَ}}, {{فَاعِل}}, {{مَفْعُول}}." },
        { h: "🔧 Comment l'utiliser ?", p: "Mets la racine dans le moule et tu obtiens un mot nouveau : {{ك ت ب}} + {{فَاعِل}} = {{كَاتِب}} (écrivain). C'est tout l'art du Sarf." }
      ],
      keyFacts: ["Le schème est un moule ; {{ف ع ل}} représentent la racine.", "Un même schème sert pour toutes les racines.", "Le schème indique la catégorie du mot."],
      reflection: "Mets {{ع ل م}} dans le schème {{فَعِيل}} : quel mot obtiens-tu ?"
    },
    es: {
      sections: [
        { h: "📐 ¿Qué es el wazn?", p: "El wazn es el molde sobre el que se construye la palabra. Para mostrarlo se ponen {{ف}} {{ع}} {{ل}} en el lugar de las letras de la raíz — por ejemplo {{فَعَلَ}}, {{فَاعِل}}, {{مَفْعُول}}." },
        { h: "🔧 ¿Cómo se usa?", p: "Pon la raíz en el molde y sale una palabra nueva: {{ك ت ب}} + {{فَاعِل}} = {{كَاتِب}} (escritor). Esa es la esencia del Sarf." }
      ],
      keyFacts: ["El molde es un patrón; {{ف ع ل}} representan la raíz.", "Un mismo molde sirve para todas las raíces.", "El molde indica la clase de palabra."],
      reflection: "Pon {{ع ل م}} en el molde {{فَعِيل}} y dime qué palabra sale."
    }
  },

  /* ═══════════════ DIN 5 — Maazi ki 14 sooratein ═══════════════ */
  5: {
    mr: {
      sections: [
        { h: "📖 माही (भूतकाळ) क्रियापद", p: "माही म्हणजे पूर्ण झालेली क्रिया — {{كَتَبَ}} (त्याने लिहिले), {{قَالَ}} (त्याने सांगितले), {{ذَهَبَ}} (तो गेला). त्याला 14 रूपे आहेत — प्रत्येक कर्त्यासाठी एक." },
        { h: "🎯 14 रूपे का?", p: "अरबीत क्रियापद कर्त्यानुसार बदलते — एकवचन, द्विवचन, अनेकवचन आणि पुल्लिंग/स्त्रीलिंग. म्हणून का, तू, तो/ती, आम्ही, तुम्ही, ते/त्या अशा सर्वांसाठी वेगळे रूप असते." }
      ],
      keyFacts: ["माही = पूर्ण झालेली क्रिया.", "माहीची 14 रूपे: 3 पुल्लिंग + 3 स्त्रीलिंग + 6 कर्ता-सर्वनामे + 2 वक्ता.", "रूप ओळखण्याची खूण: शेवटचा हरकत/अक्षर बदलतो."],
      reflection: "{{كَتَبَ}} ची 14 रूपे मोठ्याने म्हणा आणि प्रत्येकाचा अर्थ सांगा."
    },
    ar: {
      sections: [
        { h: "📖 الفعل الماضي", p: "الماضي فعلٌ يدل على زمن مضى — {{كَتَبَ}} و{{قَالَ}} و{{ذَهَبَ}}. وله أربعة عشر صيغةً، لكل فاعلٍ صيغة." },
        { h: "🎯 لماذا أربع عشرة صيغة؟", p: "لأن الفعل في العربية يتغيّر بتغيّر الفاعل: مفرد ومثنى وجمع، ومذكّر ومؤنّث، ومتكلّم ومخاطب وغائب. فلكل حالٍ صيغةٌ خاصّة." }
      ],
      keyFacts: ["الماضي يدل على زمن قد انقضى.", "صيغه أربع عشرة: ستٌّ للغائب، ستٌّ للمخاطب، اثنتان للمتكلّم.", "علامته قبول {{قَدْ}} و{{تاء التأنيث}}."],
      reflection: "اصرِف {{كَتَبَ}} في الصيغ الأربع عشرة، واذكر معنى كل صيغة."
    },
    fr: {
      sections: [
        { h: "📖 Le verbe au passé (mâdî)", p: "Le mâdî exprime une action achevée — {{كَتَبَ}} (il a écrit), {{قَالَ}} (il a dit), {{ذَهَبَ}} (il est allé). Il a quatorze formes, une pour chaque sujet." },
        { h: "🎯 Pourquoi quatorze ?", p: "En arabe le verbe change selon le sujet : singulier, duel, pluriel, et masculin/féminin. D'où une forme pour je, tu, il/elle, nous, vous, ils/elles." }
      ],
      keyFacts: ["Le mâdî exprime une action terminée.", "Quatorze formes : 6 pour l'absent, 6 pour l'interlocuteur, 2 pour le locuteur.", "Sa marque : il accepte {{قَدْ}}."],
      reflection: "Conjugue {{كَتَبَ}} aux quatorze formes et donne le sens de chacune."
    },
    es: {
      sections: [
        { h: "📖 El verbo en pasado (mâdî)", p: "El mâdî expresa una acción terminada — {{كَتَبَ}} (escribió), {{قَالَ}} (dijo), {{ذَهَبَ}} (fue). Tiene catorce formas, una por cada sujeto." },
        { h: "🎯 ¿Por qué catorce?", p: "En árabe el verbo cambia según el sujeto: singular, dual, plural, y masculino/femenino. Por eso hay una forma para yo, tú, él/ella, nosotros, vosotros, ellos/ellas." }
      ],
      keyFacts: ["El mâdî expresa una acción acabada.", "Catorce formas: 6 para el ausente, 6 para el interlocutor, 2 para el hablante.", "Su marca: acepta {{قَدْ}}."],
      reflection: "Conjuga {{كَتَبَ}} en las catorce formas y di el significado de cada una."
    }
  }

  /* ═══════════════ DIN 6 — Mudari' (14 sooratein) ═══════════════ */
  6: {
    mr: {
      sections: [
        { h: "📖 मुदारे (वर्तमान-भविष्य)", p: "मुदारे अशी क्रिया आहे जी वर्तमान किंवा भविष्यकाळ दाखवते — {{يَكْتُبُ}} (तो लिहितो / लिहील), {{يَقُولُ}} (तो म्हणतो). तिलाही 14 रूपे आहेत." },
        { h: "🎯 मुदारे कसे ओळखावे?", p: "मुदारे सुरू होते {{ي}} (गैरहजर पुल्लिंग), {{ت}} (हजर किंवा स्त्रीलिंग), {{أ}} (मी) किंवा {{ن}} (आम्ही) ने — ही चार अक्षरे मिळून {{أَنَيْتُ}}." }
      ],
      keyFacts: ["मुदारे = वर्तमान व भविष्य.", "सुरुवातची खूण: {{أَنَيْتُ}} मधले अक्षर.", "तो नेहमी मरफूअ (पेश) असतो, {{لَمْ}} किंवा नासिब/जाझिम नसेल तर."],
      reflection: "{{يَكْتُبُ}} ची 14 रूपे म्हणा आणि प्रत्येकाचा अर्थ सांगा."
    },
    ar: {
      sections: [
        { h: "📖 المضارع", p: "المضارع فعلٌ يدل على الحال أو الاستقبال — {{يَكْتُبُ}} و{{يَقُولُ}}. وله أيضًا أربع عشرة صيغة." },
        { h: "🎯 كيف يُعرف المضارع؟", p: "يبدأ بحرف من أحرف {{أَنَيْتُ}}: {{ي}} للغائب، {{ت}} للمخاطب أو المؤنّث، {{أ}} للمتكلّم، {{ن}} للمتكلّمين." }
      ],
      keyFacts: ["المضارع للحال والاستقبال.", "علامته: قبول {{لَمْ}} و{{سَوْفَ}}.", "مرفوعٌ ما لم يسبقه ناصبٌ أو جازم."],
      reflection: "اصرِف {{يَكْتُبُ}} في الصيغ الأربع عشرة."
    },
    fr: {
      sections: [
        { h: "📖 Le mudâri' (présent-futur)", p: "Le mudâri' exprime le présent ou le futur — {{يَكْتُبُ}} (il écrit / il écrira), {{يَقُولُ}} (il dit). Il a lui aussi quatorze formes." },
        { h: "🎯 Comment le reconnaître", p: "Il commence par une lettre de {{أَنَيْتُ}} : {{ي}} (absent), {{ت}} (interlocuteur ou féminin), {{أ}} (je), {{ن}} (nous)." }
      ],
      keyFacts: ["Le mudâri' = présent et futur.", "Sa marque : il accepte {{لَمْ}} et {{سَوْفَ}}.", "Il est au raf' sauf après un nâsib ou un jâzim."],
      reflection: "Conjugue {{يَكْتُبُ}} aux quatorze formes."
    },
    es: {
      sections: [
        { h: "📖 El mudâri' (presente-futuro)", p: "El mudâri' expresa el presente o el futuro — {{يَكْتُبُ}} (escribe / escribirá), {{يَقُولُ}} (dice). También tiene catorce formas." },
        { h: "🎯 Cómo reconocerlo", p: "Empieza por una letra de {{أَنَيْتُ}}: {{ي}} (ausente), {{ت}} (interlocutor o femenino), {{أ}} (yo), {{ن}} (nosotros)." }
      ],
      keyFacts: ["El mudâri' = presente y futuro.", "Su marca: acepta {{لَمْ}} y {{سَوْفَ}}.", "Va en raf' salvo tras un nâsib o un yâzim."],
      reflection: "Conjuga {{يَكْتُبُ}} en las catorce formas."
    }
  },

  /* ═══════════════ DIN 7 — Amr (6 sooratein) ═══════════════ */
  7: {
    mr: {
      sections: [
        { h: "📖 आज्ञार्थक (अम्र)", p: "अम्र म्हणजे आज्ञा देणारी क्रिया — {{اُكْتُبْ}} (लिही!), {{اِقْرَأْ}} (वाच!), {{اِذْهَبْ}} (जा!). फक्त 6 रूपे आहेत, कारण आज्ञा समोरच्यालाच देतात." },
        { h: "🎯 अम्र कसा बनतो?", p: "मुदारेतील पहिले अक्षर काढून शेवट सुकून करा — {{تَكْتُبُ}} → {{كْتُبْ}}; जर शब्द सुकून अक्षरावर सुरू झाला तर {{ا}} जोडा — {{اُكْتُبْ}}." }
      ],
      keyFacts: ["अम्र फक्त हजर (दुसऱ्या व्यक्ती) साठी.", "6 रूपे: पुल्लिंग/स्त्रीलिंग × एक/द्वि/अनेक.", "{{ا}} ची हरकत दुसऱ्या अक्षरावरून ठरते."],
      reflection: "{{تَذْهَبُ}} वरून अम्र बनवा आणि सहाही रूपे म्हणा."
    },
    ar: {
      sections: [
        { h: "📖 الأمر", p: "الأمر فعلٌ يُطلب به حصول الشيء — {{اُكْتُبْ}} و{{اِقْرَأْ}} و{{اِذْهَبْ}}. وصيغه ستٌّ، لأن الأمر لا يكون إلا للمخاطب." },
        { h: "🎯 كيف يُبنى؟", p: "يُؤخذ من المضارع بحذف حرف المضارعة وتسكين الآخر: {{تَكْتُبُ}} → {{كْتُبْ}}، فإن وقع في الابتداء ساكنٌ زيدت همزة الوصل: {{اُكْتُبْ}}." }
      ],
      keyFacts: ["الأمر للمخاطب وحده.", "ست صيغ: مذكّر ومؤنّث × مفرد ومثنى وجمع.", "همزة الوصل تُضمّ أو تُكسر بحسب حركة العين."],
      reflection: "حوّل {{تَذْهَبُ}} إلى أمر، واذكر صيغه الستّ."
    },
    fr: {
      sections: [
        { h: "📖 L'ordre (amr)", p: "L'amr exprime un ordre — {{اُكْتُبْ}} (écris !), {{اِقْرَأْ}} (lis !), {{اِذْهَبْ}} (va !). Il n'a que six formes, car on n'ordonne qu'à celui qui est devant soi." },
        { h: "🎯 Comment le former", p: "On retire la lettre du mudâri' et on met un soukoun à la fin : {{تَكْتُبُ}} → {{كْتُبْ}} ; si le mot commence par une lettre à soukoun, on ajoute {{ا}} : {{اُكْتُبْ}}." }
      ],
      keyFacts: ["L'amr ne s'adresse qu'à l'interlocuteur.", "Six formes : masculin/féminin × singulier, duel, pluriel.", "La voyelle de la hamza dépend de la 2e lettre."],
      reflection: "Transforme {{تَذْهَبُ}} en ordre et cite ses six formes."
    },
    es: {
      sections: [
        { h: "📖 El imperativo (amr)", p: "El amr expresa una orden — {{اُكْتُبْ}} (¡escribe!), {{اِقْرَأْ}} (¡lee!), {{اِذْهَبْ}} (¡ve!). Solo tiene seis formas, porque se ordena a quien está delante." },
        { h: "🎯 Cómo se forma", p: "Se quita la letra del mudâri' y se pone la última letra con sukún: {{تَكْتُبُ}} → {{كْتُبْ}}; si empieza con letra con sukún se añade {{ا}}: {{اُكْتُبْ}}." }
      ],
      keyFacts: ["El amr solo se dirige al interlocutor.", "Seis formas.", "La vocal de la hamza depende de la 2.ª letra."],
      reflection: "Convierte {{تَذْهَبُ}} en imperativo y di sus seis formas."
    }
  },

  /* ═══════════════ DIN 8 — Nahi (6 sooratein) ═══════════════ */
  8: {
    mr: {
      sections: [
        { h: "📖 निषेधार्थक (नही)", p: "नही म्हणजे नकार देणारी क्रिया — {{لَا تَكْتُبْ}} (लिहू नको), {{لَا تَذْهَبْ}} (जाऊ नको). ही सुद्धा 6 रूपे आहेत, कारण नकार समोरच्यालाच देतात." },
        { h: "🎯 नही कसे बनते?", p: "मुदारेच्या आधी {{لَا}} लावा आणि शेवट जाझ्म (सुकून) करा — {{تَكْتُبُ}} → {{لَا تَكْتُبْ}}." }
      ],
      keyFacts: ["नही = {{لَا}} + मुदारे जाझ्म.", "6 रूपे, फक्त हजरासाठी.", "अर्थ: ते कृत्य करू नको."],
      reflection: "{{تَقُولُ}} चे सहाही नही रूपे बनवा."
    },
    ar: {
      sections: [
        { h: "📖 النهي", p: "النهي طلبُ الكفّ عن الفعل — {{لَا تَكْتُبْ}} و{{لَا تَذْهَبْ}}. وصيغه ستٌّ كالأمر." },
        { h: "🎯 كيف يُبنى؟", p: "يُسبق المضارع بـ{{لَا}} ويُجزم: {{تَكْتُبُ}} → {{لَا تَكْتُبْ}}." }
      ],
      keyFacts: ["النهي: {{لَا}} الناهية + مضارع مجزوم.", "ست صيغ، للمخاطب.", "معناه الكفّ عن الفعل."],
      reflection: "ابنِ النهي من {{تَقُولُ}} في الصيغ الستّ."
    },
    fr: {
      sections: [
        { h: "📖 La défense (nahî)", p: "Le nahî demande de renoncer à l'acte — {{لَا تَكْتُبْ}} (n'écris pas), {{لَا تَذْهَبْ}} (ne va pas). Il a six formes, comme l'ordre." },
        { h: "🎯 Comment le former", p: "On fait précéder le mudâri' de {{لَا}} et on le met au jazm : {{تَكْتُبُ}} → {{لَا تَكْتُبْ}}." }
      ],
      keyFacts: ["Nahî = {{لَا}} + mudâri' au jazm.", "Six formes, pour l'interlocuteur.", "Sens : cesser l'acte."],
      reflection: "Forme les six défenses de {{تَقُولُ}}."
    },
    es: {
      sections: [
        { h: "📖 La prohibición (nahî)", p: "El nahî pide dejar el acto — {{لَا تَكْتُبْ}} (no escribas), {{لَا تَذْهَبْ}} (no vayas). Tiene seis formas, como el imperativo." },
        { h: "🎯 Cómo se forma", p: "Se antepone {{لَا}} al mudâri' y se pone en yazm: {{تَكْتُبُ}} → {{لَا تَكْتُبْ}}." }
      ],
      keyFacts: ["Nahî = {{لَا}} + mudâri' en yazm.", "Seis formas, para el interlocutor.", "Sentido: dejar el acto."],
      reflection: "Forma las seis prohibiciones de {{تَقُولُ}}."
    }
  },

  /* ═══════════════ DIN 9 — Chhe abwab (1-3) ═══════════════ */
  9: {
    mr: {
      sections: [
        { h: "📖 सहा बाब काय आहेत?", p: "तीन अक्षरी मूळ क्रियापदाला सहा बाब असतात. प्रत्येक बाब ओळखला जातो माहीच्या दुसऱ्या अक्षराच्या हरकतीवरून आणि मुदारेच्या दुसऱ्या अक्षराच्या हरकतीवरून." },
        { h: "1️⃣ नसर · 2️⃣ जर्ब · 3️⃣ फतह", p: "{{نَصَرَ يَنْصُرُ}} (पेश → पेश), {{ضَرَبَ يَضْرِبُ}} (पेश → जेर), {{فَتَحَ يَفْتَحُ}} (जबर → जबर). लक्षात ठेवण्यासाठी: «नसर, जर्ब, फतह, समअ, करम, हसब»." }
      ],
      keyFacts: ["बाब ओळखण्याची खूण = दुसऱ्या अक्षराची हरकत (माही + मुदारे).", "पहिला बाब (नसर) सर्वात सोपा मानला जातो.", "मुदारेच्या दुसऱ्या अक्षराची हरकत पाहणे पुरते."],
      reflection: "{{كَتَبَ يَكْتُبُ}} कोणत्या बाबात आहे? अजून दोन उदाहरणे शोधा."
    },
    ar: {
      sections: [
        { h: "📖 الأبواب الستة للثلاثي المجرّد", p: "للفعل الثلاثي المجرّد ستة أبواب، يُعرف كل باب بحركة عين الماضي وحركة عين المضارع." },
        { h: "1️⃣ نصر · 2️⃣ ضرب · 3️⃣ فتح", p: "{{نَصَرَ يَنْصُرُ}} (ضمٌّ فيهما)، {{ضَرَبَ يَضْرِبُ}} (فتحٌ ثم كسر)، {{فَتَحَ يَفْتَحُ}} (فتحٌ فيهما). وللحفظ: «نصر، ضرب، فتح، سمع، كرم، حسب»." }
      ],
      keyFacts: ["المعيار: حركة عين الماضي وعين المضارع.", "باب نصر هو الأصل في التعدية.", "باب فتح كثير في الأسماء والصفات."],
      reflection: "في أي بابٍ {{كَتَبَ يَكْتُبُ}}؟ واذكر مثالين آخرين."
    },
    fr: {
      sections: [
        { h: "📖 Les six schèmes du verbe trilitère", p: "Le verbe trilitère simple a six schèmes (abwâb). Chacun se reconnaît par la voyelle de la 2e lettre au passé et au mudâri'." },
        { h: "1️⃣ nasr · 2️⃣ darb · 3️⃣ fath", p: "{{نَصَرَ يَنْصُرُ}} (damme → damme), {{ضَرَبَ يَضْرِبُ}} (fatha → kasra), {{فَتَحَ يَفْتَحُ}} (fatha → fatha). Pour retenir : « nasr, darb, fath, sama', karam, hasab »." }
      ],
      keyFacts: ["Le critère : la voyelle de la 2e lettre (passé + mudâri').", "Le schème nasr est le plus courant pour les verbes transitifs.", "Les verbes se classent par paires de voyelles."],
      reflection: "À quel schème appartient {{كَتَبَ يَكْتُبُ}} ? Donne deux autres exemples."
    },
    es: {
      sections: [
        { h: "📖 Los seis esquemas del verbo trilitero", p: "El verbo trilitero simple tiene seis esquemas (abwâb). Cada uno se reconoce por la vocal de la 2.ª letra en pasado y en mudâri'." },
        { h: "1️⃣ nasr · 2️⃣ darb · 3️⃣ fath", p: "{{نَصَرَ يَنْصُرُ}} (damma → damma), {{ضَرَبَ يَضْرِبُ}} (fatha → kasra), {{فَتَحَ يَفْتَحُ}} (fatha → fatha). Para memorizar: «nasr, darb, fath, sama', karam, hasab»." }
      ],
      keyFacts: ["El criterio: la vocal de la 2.ª letra en pasado y en mudâri'.", "El esquema nasr es el más común en verbos transitivos.", "Los verbos se agrupan por pares de vocales."],
      reflection: "¿En qué esquema está {{كَتَبَ يَكْتُبُ}}? Da otros dos ejemplos."
    }
  },

  /* ═══════════════ DIN 10 — Chhe abwab (4-6) ═══════════════ */
  10: {
    mr: {
      sections: [
        { h: "4️⃣ समअ · 5️⃣ करम · 6️⃣ हसब", p: "{{عَلِمَ يَعْلَمُ}} (जेर → जबर, ज्ञानासाठी), {{كَرُمَ يَكْرُمُ}} (पेश → पेश, गुणासाठी), {{حَسِبَ يَحْسِبُ}} (जेर → जेर)." }
      ],
      keyFacts: ["समअ बाब ज्ञान-विषयक क्रियापदांत जास्त.", "करम बाब गुणवाचक क्रियापदांत (उदा. कृतज्ञता, शौर्य).", "हसब बाब: दोन्ही ठिकाणी जेर."],
      reflection: "{{سَمِعَ يَسْمَعُ}} चा बाब सांगा आणि त्याच जोडीची दोन उदाहरणे द्या."
    },
    ar: {
      sections: [
        { h: "4️⃣ سمع · 5️⃣ كرم · 6️⃣ حسب", p: "{{عَلِمَ يَعْلَمُ}} (كسرٌ ثم فتح)، {{كَرُمَ يَكْرُمُ}} (ضمٌّ فيهما، للأخلاق)، {{حَسِبَ يَحْسِبُ}} (كسرٌ فيهما)." }
      ],
      keyFacts: ["باب سمع يغلب في أفعال العلوم.", "باب كرم يغلب في الأخلاق والصفات.", "باب حسب: كسرٌ في الماضي والمضارع."],
      reflection: "ما باب {{سَمِعَ يَسْمَعُ}}؟ واذكر مثالين على وزنه."
    },
    fr: {
      sections: [
        { h: "4️⃣ sama' · 5️⃣ karam · 6️⃣ hasab", p: "{{عَلِمَ يَعْلَمُ}} (kasra → fatha, pour la connaissance), {{كَرُمَ يَكْرُمُ}} (damme → damme, pour les qualités), {{حَسِبَ يَحْسِبُ}} (kasra → kasra)." }
      ],
      keyFacts: ["Le schème sama' domine dans les verbes de savoir.", "Le schème karam exprime une qualité innée.", "Le schème hasab : kasra aux deux temps."],
      reflection: "Quel est le schème de {{سَمِعَ يَسْمَعُ}} ? Donne deux exemples."
    },
    es: {
      sections: [
        { h: "4️⃣ sama' · 5️⃣ karam · 6️⃣ hasab", p: "{{عَلِمَ يَعْلَمُ}} (kasra → fatha, para el saber), {{كَرُمَ يَكْرُمُ}} (damma → damma, para las cualidades), {{حَسِبَ يَحْسِبُ}} (kasra → kasra)." }
      ],
      keyFacts: ["El esquema sama' domina en los verbos de conocimiento.", "El esquema karam expresa cualidad innata.", "El esquema hasab: kasra en ambos tiempos."],
      reflection: "¿Cuál es el esquema de {{سَمِعَ يَسْمَعُ}}? Da dos ejemplos."
    }
  }

  /* ═══════════════ DIN 11 — Ism fa'il aur Ism maf'ul ═══════════════ */
  11: {
    mr: {
      sections: [
        { h: "🔨 कर्तृवाचक नाम (इसम फाइल)", p: "जो काम करतो त्याला दाखवणारे नाम. तीन अक्षरी मुळासाठी साचा {{فَاعِل}} आहे — {{كَاتِب}} (लेखक), {{عَالِم}} (जाणणारा), {{نَاصِر}} (मदत करणारा), {{خَالِق}} (निर्माण करणारा)." },
        { h: "🔧 कर्मवाचक नाम (इसम मफऊल)", p: "ज्यावर काम झाले ते दाखवणारे नाम. साचा {{مَفْعُول}} आहे — {{مَكْتُوب}} (लिहिलेले), {{مَعْلُوم}} (माहीत), {{مَخْلُوق}} (निर्माण केलेले)." }
      ],
      keyFacts: ["इसम फाइल = {{فَاعِل}}; इसम मफऊल = {{مَفْعُول}}.", "दोन्ही क्रियापदापासून बनतात.", "मुळातील हरकत बदलल्यास अर्थ बदलतो — म्हणून साचा ओळखणे जरुरी."],
      reflection: "{{ع ل م}} मुळापासून इसम फाइल व इसम मफऊल बनवा."
    },
    ar: {
      sections: [
        { h: "🔨 اسم الفاعل", p: "اسمٌ يدل على من قام بالفعل. ووزنه من الثلاثي {{فَاعِل}} — {{كَاتِب}} و{{عَالِم}} و{{نَاصِر}} و{{خَالِق}}." },
        { h: "🔧 اسم المفعول", p: "اسمٌ يدل على من وقع عليه الفعل. ووزنه {{مَفْعُول}} — {{مَكْتُوب}} و{{مَعْلُوم}} و{{مَخْلُوق}}." }
      ],
      keyFacts: ["اسم الفاعل على وزن {{فَاعِل}}، واسم المفعول على وزن {{مَفْعُول}}.", "كلاهما مشتقٌّ من الفعل.", "معرفة الوزن تُعين على الفهم بلا معجم."],
      reflection: "اشتقّ من الجذر {{ع ل م}} اسم فاعل واسم مفعول."
    },
    fr: {
      sections: [
        { h: "🔨 Le participe actif (ism fâ'il)", p: "Le nom qui désigne celui qui fait l'action. Son schème, pour la racine trilitère, est {{فَاعِل}} — {{كَاتِب}} (écrivain), {{عَالِم}} (savant), {{خَالِق}} (créateur)." },
        { h: "🔧 Le participe passif (ism maf'ûl)", p: "Le nom qui désigne celui sur qui l'action tombe. Son schème est {{مَفْعُول}} — {{مَكْتُوب}} (écrit), {{مَعْلُوم}} (connu), {{مَخْلُوق}} (créé)." }
      ],
      keyFacts: ["Fâ'il = {{فَاعِل}} ; maf'ûl = {{مَفْعُول}}.", "Les deux dérivent du verbe.", "Reconnaître le schème évite le dictionnaire."],
      reflection: "Forme le participe actif et passif de la racine {{ع ل م}}."
    },
    es: {
      sections: [
        { h: "🔨 El participio activo (ism fâ'il)", p: "El nombre que designa a quien hace la acción. Su molde, para la raíz trilitera, es {{فَاعِل}} — {{كَاتِب}} (escritor), {{عَالِم}} (sabio), {{خَالِق}} (creador)." },
        { h: "🔧 El participio pasivo (ism maf'ûl)", p: "El nombre que designa a quien recibe la acción. Su molde es {{مَفْعُول}} — {{مَكْتُوب}} (escrito), {{مَعْلُوم}} (conocido), {{مَخْلُوق}} (creado)." }
      ],
      keyFacts: ["Fâ'il = {{فَاعِل}}; maf'ûl = {{مَفْعُول}}.", "Ambos derivan del verbo.", "Reconocer el molde ahorra el diccionario."],
      reflection: "Forma el participio activo y pasivo de la raíz {{ع ل م}}."
    }
  },

  /* ═══════════════ DIN 12 — Zarf (jagah/waqt) aur Aala ═══════════════ */
  12: {
    mr: {
      sections: [
        { h: "📍 जागा व वेळ दाखवणारे नाम", p: "साचे {{مَفْعَل}} किंवा {{مَفْعِل}} — {{مَسْجِد}} (सजदा करण्याची जागा), {{مَكْتَب}} (लिहिण्याची जागा), {{مَغْرِب}} (सूर्यास्ताची वेळ), {{مَشْرِق}} (सूर्योदयाची वेळ)." },
        { h: "🔧 साधनवाचक नाम (इसम आला)", p: "ज्या साधनाने काम होते ते — {{مِفْتَاح}} (किल्ली), {{مِنْظَار}} (दुर्बिण), {{مِكْنَسَة}} (झाडू). साचे: {{مِفْعَال}} / {{مِفْعَل}} / {{مِفْعَلَة}}." }
      ],
      keyFacts: ["जागा/वेळ: {{مَفْعَل}} किंवा {{مَفْعِل}}.", "साधन: {{مِفْعَال}} / {{مِفْعَل}} / {{مِفْعَلَة}}.", "हरकत बदलली की अर्थ बदलतो — म्हणून ऐकून ओळखणे सराव करा."],
      reflection: "{{ك ت ب}} वरून जागा व साधन दाखवणारे शब्द बनवा."
    },
    ar: {
      sections: [
        { h: "📍 اسم المكان والزمان", p: "وزنه {{مَفْعَل}} أو {{مَفْعِل}} — {{مَسْجِد}} و{{مَكْتَب}} و{{مَغْرِب}} و{{مَشْرِق}}." },
        { h: "🔧 اسم الآلة", p: "ما يُفعل به الفعل — {{مِفْتَاح}} و{{مِنْظَار}} و{{مِكْنَسَة}}. وأوزانه: {{مِفْعَال}} و{{مِفْعَل}} و{{مِفْعَلَة}}." }
      ],
      keyFacts: ["المكان والزمان: {{مَفْعَل}} / {{مَفْعِل}}.", "الآلة: {{مِفْعَال}} / {{مِفْعَل}} / {{مِفْعَلَة}}.", "حركة العين تُفرّق بينها."],
      reflection: "اشتقّ من {{ك ت ب}} اسم مكان واسم آلة."
    },
    fr: {
      sections: [
        { h: "📍 Le nom de lieu et de temps", p: "Schèmes {{مَفْعَل}} ou {{مَفْعِل}} — {{مَسْجِد}} (lieu de prosternation), {{مَكْتَب}} (lieu d'écriture), {{مَغْرِب}} (coucher du soleil), {{مَشْرِق}} (lever du soleil)." },
        { h: "🔧 Le nom d'instrument", p: "Ce avec quoi l'action se fait — {{مِفْتَاح}} (clé), {{مِنْظَار}} (télescope), {{مِكْنَسَة}} (balai). Schèmes : {{مِفْعَال}} / {{مِفْعَل}} / {{مِفْعَلَة}}." }
      ],
      keyFacts: ["Lieu/temps : {{مَفْعَل}} ou {{مَفْعِل}}.", "Instrument : {{مِفْعَال}} / {{مِفْعَل}} / {{مِفْعَلَة}}.", "La voyelle de la 2e lettre change le sens."],
      reflection: "Forme un nom de lieu et un nom d'instrument à partir de {{ك ت ب}}."
    },
    es: {
      sections: [
        { h: "📍 El nombre de lugar y tiempo", p: "Moldes {{مَفْعَل}} o {{مَفْعِل}} — {{مَسْجِد}} (lugar de postración), {{مَكْتَب}} (lugar de escribir), {{مَغْرِب}} (puesta del sol), {{مَشْرِق}} (salida del sol)." },
        { h: "🔧 El nombre de instrumento", p: "Con lo que se hace la acción — {{مِفْتَاح}} (llave), {{مِنْظَار}} (telescopio), {{مِكْنَسَة}} (escoba). Moldes: {{مِفْعَال}} / {{مِفْعَل}} / {{مِفْعَلَة}}." }
      ],
      keyFacts: ["Lugar/tiempo: {{مَفْعَل}} o {{مَفْعِل}}.", "Instrumento: {{مِفْعَال}} / {{مِفْعَل}} / {{مِفْعَلَة}}.", "La vocal de la 2.ª letra cambia el sentido."],
      reflection: "Forma un nombre de lugar y uno de instrumento de {{ك ت ب}}."
    }
  },

  /* ═══════════════ DIN 13 — Sifat mushabbaha aur Ism tafzeel ═══════════════ */
  13: {
    mr: {
      sections: [
        { h: "⭐ कायम गुण दाखवणारे नाम", p: "कायमचा गुण दाखवणारे नाम — {{رَحِيم}} (अत्यंत दयाळू), {{كَرِيم}} (उदार), {{عَلِيم}} (सर्वज्ञ), {{عَظِيم}} (महान). साचे: {{فَعِيل}} / {{فَعْلَان}}." },
        { h: "📈 तुलना दाखवणारे नाम (इसम तफजील)", p: "«अधिक / सर्वाधिक» दाखवणारे नाम — {{أَكْبَر}} (मोठा), {{أَعْلَم}} (अधिक जाणणारा). साचा {{أَفْعَل}}; जोडी {{أَفْعَل}} + {{مِنْ}}." }
      ],
      keyFacts: ["कायम गुण: {{فَعِيل}} किंवा {{فَعْلَان}}.", "तुलना: {{أَفْعَل}} (स्त्रीलिंग {{فُعْلَى}}).", "अल्लाहच्या नावांमध्ये {{فَعِيل}} खूप आहे."],
      reflection: "{{ر ح م}} वरून कायम गुण व तुलना दाखवणारे शब्द बनवा."
    },
    ar: {
      sections: [
        { h: "⭐ الصفة المشبَّهة", p: "اسمٌ يدل على صفةٍ ثابتة — {{رَحِيم}} و{{كَرِيم}} و{{عَلِيم}} و{{عَظِيم}}. وأوزانها {{فَعِيل}} و{{فَعْلَان}}." },
        { h: "📈 اسم التفضيل", p: "اسمٌ يدل على الزيادة — {{أَكْبَر}} و{{أَعْلَم}}. ووزنه {{أَفْعَل}}، ويُؤنَّث على {{فُعْلَى}}، ويُوصل بـ{{مِنْ}}." }
      ],
      keyFacts: ["الصفة المشبهة: {{فَعِيل}} / {{فَعْلَان}}.", "التفضيل: {{أَفْعَل}} و{{فُعْلَى}}.", "أسماء الله الحسنى كثيرةٌ على {{فَعِيل}}."],
      reflection: "اشتقّ من {{ر ح م}} صفةً مشبهةً واسم تفضيل."
    },
    fr: {
      sections: [
        { h: "⭐ L'adjectif permanent", p: "Un nom qui exprime une qualité stable — {{رَحِيم}} (très miséricordieux), {{كَرِيم}} (généreux), {{عَلِيم}} (omniscient), {{عَظِيم}} (immense). Schèmes : {{فَعِيل}} / {{فَعْلَان}}." },
        { h: "📈 Le comparatif-superlatif", p: "Le nom qui exprime « plus / le plus » — {{أَكْبَر}} (plus grand), {{أَعْلَم}} (plus savant). Schème {{أَفْعَل}}, féminin {{فُعْلَى}}, suivi de {{مِنْ}}." }
      ],
      keyFacts: ["Qualité stable : {{فَعِيل}} / {{فَعْلَان}}.", "Comparatif : {{أَفْعَل}} (fém. {{فُعْلَى}}).", "Beaucoup de noms d'Allah suivent {{فَعِيل}}."],
      reflection: "Forme un adjectif permanent et un comparatif à partir de {{ر ح م}}."
    },
    es: {
      sections: [
        { h: "⭐ El adjetivo permanente", p: "Un nombre que expresa cualidad estable — {{رَحِيم}} (misericordioso), {{كَرِيم}} (generoso), {{عَلِيم}} (sabio), {{عَظِيم}} (inmenso). Moldes: {{فَعِيل}} / {{فَعْلَان}}." },
        { h: "📈 El comparativo-superlativo", p: "El nombre que expresa «más / el más» — {{أَكْبَر}} (más grande), {{أَعْلَم}} (más sabio). Molde {{أَفْعَل}}, femenino {{فُعْلَى}}, seguido de {{مِنْ}}." }
      ],
      keyFacts: ["Cualidad estable: {{فَعِيل}} / {{فَعْلَان}}.", "Comparativo: {{أَفْعَل}} (fem. {{فُعْلَى}}).", "Muchos nombres de Allah siguen {{فَعِيل}}."],
      reflection: "Forma un adjetivo permanente y un comparativo de {{ر ح م}}."
    }
  },

  /* ═══════════════ DIN 14 — Jama (bahuvachan) ═══════════════ */
  14: {
    mr: {
      sections: [
        { h: "👥 सलग पुल्लिंग व स्त्रीलिंग अनेकवचन", p: "पुल्लिंग: एकवचनाला {{ُونَ}} (मरफूअ) किंवा {{ِينَ}} (मन्सूब/मजरूर) लावा — {{مُسْلِم}} → {{مُسْلِمُونَ}}. स्त्रीलिंग: शेवटी {{َات}} — {{مُسْلِمَة}} → {{مُسْلِمَات}}." },
        { h: "🧩 तुटके अनेकवचन (जमउ तकसीर)", p: "साचा बदलून बनणारे अनेकवचन — {{كِتَاب}} → {{كُتُب}}, {{قَلْب}} → {{قُلُوب}}, {{رَجُل}} → {{رِجَال}}. हे ऐकून व वाचून पाठ करावे लागतात." }
      ],
      keyFacts: ["पुल्लिंग सलग: {{ُونَ}} / {{ِينَ}}.", "स्त्रीलिंग सलग: {{َات}}.", "तुटके अनेकवचन: साचा बदलतो, तीनपेक्षा जास्त प्रकार."],
      reflection: "{{مُسْلِم}}, {{مُؤْمِن}}, {{كَاتِب}} चे अनेकवचन सांगा."
    },
    ar: {
      sections: [
        { h: "👥 جمع المذكر والمؤنث السالم", p: "المذكر: {{ُونَ}} في الرفع و{{ِينَ}} في النصب والجر — {{مُسْلِم}} → {{مُسْلِمُونَ}}. والمؤنث: {{َات}} — {{مُسْلِمَة}} → {{مُسْلِمَات}}." },
        { h: "🧩 جمع التكسير", p: "ما يتغيّر فيه بناء المفرد — {{كِتَاب}} → {{كُتُب}}، {{قَلْب}} → {{قُلُوب}}، {{رَجُل}} → {{رِجَال}}. ويُحفظ بالسماع." }
      ],
      keyFacts: ["السالم: {{ُونَ}} / {{ِينَ}} / {{َات}}.", "التكسير: يتغيّر البناء.", "في القرآن جموع تكسير كثيرة — معرفتها تفتح المعنى."],
      reflection: "اجمع {{مُسْلِم}} و{{مُؤْمِن}} و{{كَاتِب}}."
    },
    fr: {
      sections: [
        { h: "👥 Les pluriels réguliers", p: "Masculin : on ajoute {{ُونَ}} (raf') ou {{ِينَ}} (nasb/jarr) — {{مُسْلِم}} → {{مُسْلِمُونَ}}. Féminin : on ajoute {{َات}} — {{مُسْلِمَة}} → {{مُسْلِمَات}}." },
        { h: "🧩 Les pluriels brisés", p: "Le pluriel qui change la structure du singulier — {{كِتَاب}} → {{كُتُب}}, {{قَلْب}} → {{قُلُوب}}, {{رَجُل}} → {{رِجَال}}. Ils s'apprennent par l'usage." }
      ],
      keyFacts: ["Régulier : {{ُونَ}} / {{ِينَ}} / {{َات}}.", "Brisé : la structure change.", "Le Coran en contient beaucoup : les reconnaître ouvre le sens."],
      reflection: "Mets au pluriel {{مُسْلِم}}, {{مُؤْمِن}} et {{كَاتِب}}."
    },
    es: {
      sections: [
        { h: "👥 Los plurales regulares", p: "Masculino: se añade {{ُونَ}} (raf') o {{ِينَ}} (nasb/yarr) — {{مُسْلِم}} → {{مُسْلِمُونَ}}. Femenino: se añade {{َات}} — {{مُسْلِمَة}} → {{مُسْلِمَات}}." },
        { h: "🧩 Los plurales fractos", p: "El plural que cambia la estructura del singular — {{كِتَاب}} → {{كُتُب}}, {{قَلْب}} → {{قُلُوب}}, {{رَجُل}} → {{رِجَال}}. Se aprenden con el uso." }
      ],
      keyFacts: ["Regular: {{ُونَ}} / {{ِينَ}} / {{َات}}.", "Fracto: cambia la estructura.", "El Corán tiene muchos: reconocerlos abre el sentido."],
      reflection: "Pon en plural {{مُسْلِم}}, {{مُؤْمِن}} y {{كَاتِب}}."
    }
  },

  /* ═══════════════ DIN 15 — Mazeed feeh (Sarf ka khulasa) ═══════════════ */
  15: {
    mr: {
      sections: [
        { h: "📖 तीन अक्षरी मुळात अक्षरे वाढवणे", p: "मुळाच्या तीन अक्षरांत 1, 2 किंवा 3 अक्षरे जोडली की «मझीद फीह» बाब बनतात — {{أَكْرَمَ يُكْرِمُ}} (इफआल), {{عَلَّمَ يُعَلِّمُ}} (तफईल), {{جَاهَدَ يُجَاهِدُ}} (मुफाअला), {{تَعَلَّمَ يَتَعَلَّمُ}} (तफऊल)." },
        { h: "🧾 सर्फचा सारांश", p: "मूळ → साचा → नाम/क्रियापद. एका मुळापासून क्रियापदाची रूपे, इसम फाइल/मफऊल, जागा-वेळ, साधन, अनेकवचन — सगळे याच साच्यांच्या नियमाने बनते." }
      ],
      keyFacts: ["8 प्रमुख मझीद बाब: इफआल, तफईल, मुफाअला, तफऊल, तफाउल, इनफिआल, इफ्तिआल, इस्तिफआल.", "अक्षरे वाढली की अर्थ बदलतो (उदा. {{{عَلِمَ}}} → {{{عَلَّمَ}}} = शिकवले).", "सर्फ = साच्यांचे शास्त्र; साचा ओळखला की अर्थ स्पष्ट."],
      reflection: "{{ع ل م}} वरून मझीद बाबाची दोन रूपे बनवा आणि अर्थ सांगा."
    },
    ar: {
      sections: [
        { h: "📖 الثلاثي المزيد فيه", p: "إذا زيد على الثلاثي حرفٌ أو حرفان أو ثلاثة تولّدت أبواب المزيد — {{أَكْرَمَ يُكْرِمُ}} (إفعال)، {{عَلَّمَ يُعَلِّمُ}} (تفعيل)، {{جَاهَدَ يُجَاهِدُ}} (مفاعلة)، {{تَعَلَّمَ يَتَعَلَّمُ}} (تفعُّل)." },
        { h: "🧾 خلاصة الصرف", p: "الجذر ← الوزن ← اسم أو فعل. ومن جذرٍ واحد تتولّد صيغ الفعل واسم الفاعل والمفعول واسم المكان والزمان والآلة والجمع — كلّها بقانون الأوزان." }
      ],
      keyFacts: ["ثمانية أبواب للمزيد: إفعال، تفعيل، مفاعلة، تفعُّل، تفاعُل، انفعال، افتعال، استفعال.", "زيادة الحروف تُغيّر المعنى ({{عَلِمَ}} ← {{عَلَّمَ}}).", "الصرف قانون أوزان لا حفظ قائمة."],
      reflection: "ابنِ من {{ع ل م}} صيغتين من المزيد، وبيّن الفرق في المعنى."
    },
    fr: {
      sections: [
        { h: "📖 Le verbe augmenté", p: "Quand on ajoute une, deux ou trois lettres à la racine trilitère, on obtient les schèmes augmentés — {{أَكْرَمَ يُكْرِمُ}} (if'âl), {{عَلَّمَ يُعَلِّمُ}} (taf'îl), {{جَاهَدَ يُجَاهِدُ}} (mufâ'ala), {{تَعَلَّمَ يَتَعَلَّمُ}} (tafa''ul)." },
        { h: "🧾 Résumé du Sarf", p: "Racine → schème → nom ou verbe. D'une seule racine naissent les formes du verbe, les participes, le nom de lieu et de temps, l'instrument et les pluriels : tout suit la loi des schèmes." }
      ],
      keyFacts: ["Huit schèmes augmentés : if'âl, taf'îl, mufâ'ala, tafa''ul, tafâ'ul, infi'âl, ifti'âl, istif'âl.", "Ajouter des lettres change le sens ({{عَلِمَ}} → {{عَلَّمَ}}).", "Le Sarf est une loi de schèmes, non une liste à mémoriser."],
      reflection: "Forme deux verbes augmentés de {{ع ل م}} et explique la différence de sens."
    },
    es: {
      sections: [
        { h: "📖 El verbo aumentado", p: "Cuando se añaden una, dos o tres letras a la raíz trilitera se forman los esquemas aumentados — {{أَكْرَمَ يُكْرِمُ}} (if'âl), {{عَلَّمَ يُعَلِّمُ}} (taf'îl), {{جَاهَدَ يُجَاهِدُ}} (mufâ'ala), {{تَعَلَّمَ يَتَعَلَّمُ}} (tafa''ul)." },
        { h: "🧾 Resumen del Sarf", p: "Raíz → molde → nombre o verbo. De una sola raíz nacen las formas del verbo, los participios, el nombre de lugar y tiempo, el instrumento y los plurales: todo sigue la ley de los moldes." }
      ],
      keyFacts: ["Ocho esquemas aumentados: if'âl, taf'îl, mufâ'ala, tafa''ul, tafâ'ul, infi'âl, ifti'âl, istif'âl.", "Añadir letras cambia el sentido ({{عَلِمَ}} → {{عَلَّمَ}}).", "El Sarf es una ley de moldes, no una lista para memorizar."],
      reflection: "Forma dos verbos aumentados de {{ع ل م}} y explica la diferencia de sentido."
    }
  }

  /* Agle din (16 se 30 = Nahw) yahan jodte jayenge — jaise hi koi din judta hai,
     us zubaan par wo din poora usi zubaan mein dikhne lagta hai. */
};
