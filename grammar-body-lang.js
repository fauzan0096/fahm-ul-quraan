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

  /* ═══════════════ DIN 16 — Nahw kya hai ═══════════════ */
  16: {
    mr: {
      sections: [
        { h: "📖 नह्व म्हणजे काय?", p: "नह्व अरबी भाषेचे ते शास्त्र आहे ज्यात वाक्याची रचना, शब्दांचा क्रम आणि शेवटच्या अक्षराची हरकत (एराब) यांचा अभ्यास होतो. सोप्या शब्दांत — नह्व म्हणजे «वाक्याचा नकाशा»." },
        { h: "🎯 का गरजेचे?", p: "एकच शब्द वाक्यात वेगळ्या जागी आल्यावर वेगळा अर्थ देतो. एराब ओळखल्यावर कोण कर्ता आहे, कोण कर्म — हे स्पष्ट होते." }
      ],
      keyFacts: ["सर्फ = शब्दाची रचना; नह्व = वाक्याची रचना.", "एराब = शेवटच्या अक्षराची हरकत.", "एराब न बदलता अर्थ बदलतो — म्हणून तो जरुरी."],
      reflection: "एक लहान आयत घ्या आणि प्रत्येक शब्दाची वाक्यातील भूमिका सांगा."
    },
    ar: {
      sections: [
        { h: "📖 ما هو النحو؟", p: "النحو علمٌ يبحث في تركيب الجملة وترتيب الكلمات وحركة آخر الكلمة (الإعراب). وبعبارة بسيطة: النحو «خريطة الجملة»." },
        { h: "🎯 لماذا هو ضروري؟", p: "الكلمة الواحدة يتغيّر معناها بتغيّر موقعها في الجملة، وبالإعراب يُعرف الفاعل من المفعول." }
      ],
      keyFacts: ["الصرف: بناء الكلمة، والنحو: بناء الجملة.", "الإعراب: حركة آخر الكلمة.", "تغيّر الإعراب يغيّر المعنى."],
      reflection: "خذ آيةً قصيرة وبيّن وظيفة كل كلمة فيها."
    },
    fr: {
      sections: [
        { h: "📖 Qu'est-ce que le Nahw ?", p: "Le Nahw étudie la structure de la phrase, l'ordre des mots et la voyelle finale (i'râb). En bref : le Nahw est « la carte de la phrase »." },
        { h: "🎯 Pourquoi est-ce nécessaire ?", p: "Un même mot change de sens selon sa place dans la phrase ; l'i'râb permet de distinguer le sujet de l'objet." }
      ],
      keyFacts: ["Sarf = le mot ; Nahw = la phrase.", "I'râb = voyelle de la dernière lettre.", "Changer l'i'râb change le sens."],
      reflection: "Prends un verset court et indique la fonction de chaque mot."
    },
    es: {
      sections: [
        { h: "📖 ¿Qué es el Nahw?", p: "El Nahw estudia la estructura de la frase, el orden de las palabras y la vocal final (i'râb). En pocas palabras: el Nahw es «el mapa de la frase»." },
        { h: "🎯 ¿Por qué es necesario?", p: "Una misma palabra cambia de sentido según su lugar en la frase; el i'râb distingue el sujeto del objeto." }
      ],
      keyFacts: ["Sarf = la palabra; Nahw = la frase.", "I'râb = vocal de la última letra.", "Cambiar el i'râb cambia el sentido."],
      reflection: "Toma un versículo corto e indica la función de cada palabra."
    }
  },

  /* ═══════════════ DIN 17 — I'rab ki 4 halatein ═══════════════ */
  17: {
    mr: {
      sections: [
        { h: "🎵 एराबच्या चार अवस्था", p: "{{رَفْع}} (पेश), {{نَصْب}} (जबर), {{جَرّ}} (जेर) आणि {{جَزْم}} (सुकून). नामाला तीन अवस्था (रफ, नस्ब, जर्र) आणि क्रियापदाला तीन (रफ, नस्ब, जझ्म)." },
        { h: "📊 रफ, नस्ब, जर्र, जझ्म", p: "{{رَفْع}} चिन्ह: {{ـُ}} / {{ـٌ}} — कर्ता, मुब्तदा, खबर. {{نَصْب}}: {{ـَ}} / {{ـً}} — कर्म. {{جَرّ}}: {{ـِ}} — जर्रच्या अक्षरानंतर. {{جَزْم}}: {{ـْ}} — {{لَمْ}} नंतर." }
      ],
      keyFacts: ["चार अवस्था: रफ, नस्ब, जर्र, जझ्म.", "जर्र फक्त नामाला; जझ्म फक्त मुदारेला.", "एराब ओळखणे = वाक्यातील भूमिका ओळखणे."],
      reflection: "{{اللَّهُ أَحَدٌ}} मधल्या दोन्ही शब्दांची एराब सांगा."
    },
    ar: {
      sections: [
        { h: "🎵 حالات الإعراب الأربع", p: "{{رَفْع}} (ضمة) و{{نَصْب}} (فتحة) و{{جَرّ}} (كسرة) و{{جَزْم}} (سكون). وللاسم ثلاث: رفع ونصب وجرّ، وللفعل ثلاث: رفع ونصب وجزم." },
        { h: "📊 علاماتها", p: "الرفع: {{ـُ}} / {{ـٌ}}. النصب: {{ـَ}} / {{ـً}}. الجرّ: {{ـِ}} (بعد حرف جر أو إضافة). الجزم: {{ـْ}} (بعد {{لَمْ}})." }
      ],
      keyFacts: ["أربع حالات: رفع، نصب، جرّ، جزم.", "الجرّ للاسم، والجزم للمضارع.", "معرفة الإعراب = معرفة الوظيفة."],
      reflection: "أعرب كلمتَي {{اللَّهُ أَحَدٌ}}."
    },
    fr: {
      sections: [
        { h: "🎵 Les quatre cas de l'i'râb", p: "{{رَفْع}} (damme), {{نَصْب}} (fatha), {{جَرّ}} (kasra), {{جَزْم}} (soukoun). Le nom a trois cas (raf', nasb, jarr) et le verbe trois (raf', nasb, jazm)." },
        { h: "📊 Leurs signes", p: "Raf' : {{ـُ}} / {{ـٌ}}. Nasb : {{ـَ}} / {{ـً}}. Jarr : {{ـِ}} après une préposition ou une annexion. Jazm : {{ـْ}} après {{لَمْ}}." }
      ],
      keyFacts: ["Quatre cas : raf', nasb, jarr, jazm.", "Jarr pour le nom, jazm pour le mudâri'.", "Connaître l'i'râb, c'est connaître la fonction."],
      reflection: "Analyse les deux mots de {{اللَّهُ أَحَدٌ}}."
    },
    es: {
      sections: [
        { h: "🎵 Los cuatro casos del i'râb", p: "{{رَفْع}} (damma), {{نَصْب}} (fatha), {{جَرّ}} (kasra), {{جَزْم}} (sukún). El nombre tiene tres casos (raf', nasb, yarr) y el verbo tres (raf', nasb, yazm)." },
        { h: "📊 Sus signos", p: "Raf': {{ـُ}} / {{ـٌ}}. Nasb: {{ـَ}} / {{ـً}}. Yarr: {{ـِ}} tras preposición o anexión. Yazm: {{ـْ}} tras {{لَمْ}}." }
      ],
      keyFacts: ["Cuatro casos: raf', nasb, yarr, yazm.", "Yarr para el nombre, yazm para el mudâri'.", "Conocer el i'râb es conocer la función."],
      reflection: "Analiza las dos palabras de {{اللَّهُ أَحَدٌ}}."
    }
  },

  /* ═══════════════ DIN 18 — Jumla ismiyya ═══════════════ */
  18: {
    mr: {
      sections: [
        { h: "🏠 इस्मीय वाक्य (नामापासून सुरू)", p: "जे वाक्य नामाने सुरू होते ते {{جُمْلَة اسْمِيَّة}}. त्याचे दोन भाग: {{مُبْتَدَأ}} (ज्याच्याबद्दल बोलतात) आणि {{خَبَر}} (त्याची माहिती). दोन्ही रफमध्ये असतात." },
        { h: "📖 उदाहरण", p: "{{اللَّهُ أَحَدٌ}} — «अल्लाह एक आहे». {{اللَّهُ}} = मुब्तदा (रफ), {{أَحَدٌ}} = खबर (रफ). खबर एक शब्द, वाक्यांश किंवा पूर्ण वाक्य असू शकते." }
      ],
      keyFacts: ["इस्मीय वाक्य = मुब्तदा + खबर.", "दोन्ही सामान्यतः रफमध्ये.", "खबर शब्द, वाक्यांश किंवा वाक्य असू शकते."],
      reflection: "{{الْحَمْدُ لِلَّهِ}} मध्ये मुब्तदा व खबर ओळखा."
    },
    ar: {
      sections: [
        { h: "🏠 الجملة الاسمية", p: "ما بدأ باسمٍ يُسمّى جملةً اسمية، وعموداه {{مُبْتَدَأ}} و{{خَبَر}}. والمبتدأ مرفوع، والخبر مرفوع." },
        { h: "📖 مثال", p: "{{اللَّهُ أَحَدٌ}}: {{اللَّهُ}} مبتدأ مرفوع، {{أَحَدٌ}} خبر مرفوع. والخبر قد يكون مفردًا أو جملةً أو شبه جملة." }
      ],
      keyFacts: ["الجملة الاسمية: مبتدأ + خبر.", "كلاهما مرفوع في الأصل.", "الخبر يكون مفردًا أو جملةً أو شبه جملة."],
      reflection: "أعرب {{الْحَمْدُ لِلَّهِ}} وبيّن المبتدأ والخبر."
    },
    fr: {
      sections: [
        { h: "🏠 La phrase nominale", p: "Une phrase qui commence par un nom s'appelle {{جُمْلَة اسْمِيَّة}}. Ses deux piliers : le {{مُبْتَدَأ}} (ce dont on parle) et le {{خَبَر}} (l'information). Les deux sont au raf'." },
        { h: "📖 Exemple", p: "{{اللَّهُ أَحَدٌ}} : {{اللَّهُ}} mubtada (raf'), {{أَحَدٌ}} khabar (raf'). Le khabar peut être un mot, un groupe ou une phrase." }
      ],
      keyFacts: ["Phrase nominale = mubtada + khabar.", "Les deux au raf' en principe.", "Le khabar peut être simple ou complexe."],
      reflection: "Analyse {{الْحَمْدُ لِلَّهِ}} : où sont le mubtada et le khabar ?"
    },
    es: {
      sections: [
        { h: "🏠 La frase nominal", p: "La frase que empieza por un nombre se llama {{جُمْلَة اسْمِيَّة}}. Sus dos pilares: el {{مُبْتَدَأ}} (de lo que se habla) y el {{خَبَر}} (la información). Ambos van en raf'." },
        { h: "📖 Ejemplo", p: "{{اللَّهُ أَحَدٌ}}: {{اللَّهُ}} mubtada (raf'), {{أَحَدٌ}} jabar (raf'). El jabar puede ser una palabra, un grupo o una frase." }
      ],
      keyFacts: ["Frase nominal = mubtada + jabar.", "Ambos en raf' por defecto.", "El jabar puede ser simple o complejo."],
      reflection: "Analiza {{الْحَمْدُ لِلَّهِ}} y señala mubtada y jabar."
    }
  },

  /* ═══════════════ DIN 19 — Jumla fi'liyya ═══════════════ */
  19: {
    mr: {
      sections: [
        { h: "🏃 क्रियापदीय वाक्य", p: "जे वाक्य क्रियापदाने सुरू होते ते {{جُمْلَة فِعْلِيَّة}}. क्रम: क्रियापद + कर्ता ({{فَاعِل}}) + कर्म ({{مَفْعُول بِهِ}}) — जर असेल तर. कर्ता नेहमी रफमध्ये, कर्म नस्बमध्ये." },
        { h: "📖 उदाहरण", p: "{{كَتَبَ الطَّالِبُ الدَّرْسَ}} — «विद्यार्थ्याने धडा लिहिला». {{كَتَبَ}} = क्रियापद, {{الطَّالِبُ}} = कर्ता (रफ), {{الدَّرْسَ}} = कर्म (नस्ब)." }
      ],
      keyFacts: ["क्रियापदीय वाक्य = क्रियापद + कर्ता (+ कर्म).", "कर्ता रफ, कर्म नस्ब.", "कर्ता क्रियापदानंतर येतो (मराठीप्रमाणे नाही)."],
      reflection: "{{خَلَقَ اللَّهُ السَّمَاوَاتِ}} मधले कर्ता व कर्म सांगा."
    },
    ar: {
      sections: [
        { h: "🏃 الجملة الفعلية", p: "ما بدأ بفعلٍ يُسمّى جملةً فعلية. وترتيبها: فعل + فاعل + مفعول به (إن وُجد). والفاعل مرفوع، والمفعول منصوب." },
        { h: "📖 مثال", p: "{{كَتَبَ الطَّالِبُ الدَّرْسَ}}: {{كَتَبَ}} فعل، {{الطَّالِبُ}} فاعل مرفوع، {{الدَّرْسَ}} مفعول به منصوب." }
      ],
      keyFacts: ["الجملة الفعلية: فعل + فاعل (+ مفعول).", "الفاعل مرفوع دائمًا.", "الفعل يطابق الفاعل في التذكير والتأنيث."],
      reflection: "أعرب {{خَلَقَ اللَّهُ السَّمَاوَاتِ}}."
    },
    fr: {
      sections: [
        { h: "🏃 La phrase verbale", p: "Une phrase qui commence par un verbe est une {{جُمْلَة فِعْلِيَّة}}. L'ordre : verbe + sujet ({{فَاعِل}}) + objet ({{مَفْعُول بِهِ}}) s'il y en a un. Le sujet est au raf', l'objet au nasb." },
        { h: "📖 Exemple", p: "{{كَتَبَ الطَّالِبُ الدَّرْسَ}} : {{كَتَبَ}} verbe, {{الطَّالِبُ}} sujet (raf'), {{الدَّرْسَ}} objet (nasb)." }
      ],
      keyFacts: ["Phrase verbale : verbe + sujet (+ objet).", "Sujet au raf', objet au nasb.", "Le verbe s'accorde en genre avec le sujet."],
      reflection: "Analyse {{خَلَقَ اللَّهُ السَّمَاوَاتِ}}."
    },
    es: {
      sections: [
        { h: "🏃 La frase verbal", p: "La frase que empieza por un verbo es {{جُمْلَة فِعْلِيَّة}}. El orden: verbo + sujeto ({{فَاعِل}}) + objeto ({{مَفْعُول بِهِ}}) si lo hay. El sujeto en raf', el objeto en nasb." },
        { h: "📖 Ejemplo", p: "{{كَتَبَ الطَّالِبُ الدَّرْسَ}}: {{كَتَبَ}} verbo, {{الطَّالِبُ}} sujeto (raf'), {{الدَّرْسَ}} objeto (nasb)." }
      ],
      keyFacts: ["Frase verbal: verbo + sujeto (+ objeto).", "Sujeto en raf', objeto en nasb.", "El verbo concuerda en género con el sujeto."],
      reflection: "Analiza {{خَلَقَ اللَّهُ السَّمَاوَاتِ}}."
    }
  },

  /* ═══════════════ DIN 20 — Kana aur uski behnein ═══════════════ */
  20: {
    mr: {
      sections: [
        { h: "🔄 {{كَانَ}} आणि तिच्या बहिणी", p: "{{كَانَ}} (होते) इस्मीय वाक्यात येते आणि एराब बदलते: मुब्तदा रफमध्ये राहतो (त्याला {{اسْم كَانَ}} म्हणतात) पण खबर नस्बमध्ये जाते ({{خَبَر كَانَ}})." },
        { h: "📖 उदाहरण", p: "{{كَانَ الطَّالِبُ مُجْتَهِدًا}} — «विद्यार्थी मेहनती होता». {{الطَّالِبُ}} = इस्म कान (रफ), {{مُجْتَهِدًا}} = खबर कान (नस्ब). बहिणी: {{أَصْبَحَ، أَظْهَرَ، صَارَ، لَيْسَ، مَا زَالَ}}." }
      ],
      keyFacts: ["{{كَانَ}} मुब्तदाचा रफ ठेवते, खबर नस्ब करते.", "बहिणी: {{أَصْبَحَ، صَارَ، لَيْسَ، مَا زَالَ}} इत्यादी.", "{{لَيْسَ}} नकारासाठी वापरते."],
      reflection: "{{كَانَ اللَّهُ غَفُورًا}} मधले इस्म कान व खबर कान सांगा."
    },
    ar: {
      sections: [
        { h: "🔄 كان وأخواتها", p: "{{كَانَ}} تدخل على الجملة الاسمية فترفع المبتدأ ويُسمّى {{اسْم كَانَ}}، وتنصب الخبر ويُسمّى {{خَبَر كَانَ}}." },
        { h: "📖 مثال", p: "{{كَانَ الطَّالِبُ مُجْتَهِدًا}}: {{الطَّالِبُ}} اسم كان مرفوع، {{مُجْتَهِدًا}} خبر كان منصوب. وأخواتها: {{أَصْبَحَ، أَظْهَرَ، صَارَ، لَيْسَ، مَا زَالَ}}." }
      ],
      keyFacts: ["كان ترفع الاسم وتنصب الخبر.", "أخواتها تعمل عملها.", "{{لَيْسَ}} للنفي."],
      reflection: "أعرب {{كَانَ اللَّهُ غَفُورًا}}."
    },
    fr: {
      sections: [
        { h: "🔄 {{كَانَ}} et ses sœurs", p: "{{كَانَ}} entre dans la phrase nominale : elle laisse le mubtada au raf' ({{اسْم كَانَ}}) et met le khabar au nasb ({{خَبَر كَانَ}})." },
        { h: "📖 Exemple", p: "{{كَانَ الطَّالِبُ مُجْتَهِدًا}} : {{الطَّالِبُ}} nom de kâna (raf'), {{مُجْتَهِدًا}} prédicat de kâna (nasb). Ses sœurs : {{أَصْبَحَ، صَارَ، لَيْسَ، مَا زَالَ}}." }
      ],
      keyFacts: ["Kâna : nom au raf', prédicat au nasb.", "Ses sœurs ont le même effet.", "{{لَيْسَ}} sert à nier."],
      reflection: "Analyse {{كَانَ اللَّهُ غَفُورًا}}."
    },
    es: {
      sections: [
        { h: "🔄 {{كَانَ}} y sus hermanas", p: "{{كَانَ}} entra en la frase nominal: deja el mubtada en raf' ({{اسْم كَانَ}}) y pone el jabar en nasb ({{خَبَر كَانَ}})." },
        { h: "📖 Ejemplo", p: "{{كَانَ الطَّالِبُ مُجْتَهِدًا}}: {{الطَّالِبُ}} nombre de kâna (raf'), {{مُجْتَهِدًا}} predicado de kâna (nasb). Sus hermanas: {{أَصْبَحَ، صَارَ، لَيْسَ، مَا زَالَ}}." }
      ],
      keyFacts: ["Kâna: nombre en raf', predicado en nasb.", "Sus hermanas actúan igual.", "{{لَيْسَ}} sirve para negar."],
      reflection: "Analiza {{كَانَ اللَّهُ غَفُورًا}}."
    }
  }

  /* ═══════════════ DIN 21 — Inna aur uski behnein ═══════════════ */
  21: {
    mr: {
      sections: [
        { h: "❗ {{إِنَّ}} आणि तिच्या बहिणी", p: "{{إِنَّ}} (निश्चयच {{إِنَّ}}) इस्मीय वाक्यात येते आणि उलट काम करते: मुब्तदा नस्बमध्ये जातो ({{اسْم إِنَّ}}) आणि खबर रफमध्ये राहतो ({{خَبَر إِنَّ}}). बहिणी: {{إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ}}." },
        { h: "📖 उदाहरण", p: "{{إِنَّ اللَّهَ غَفُورٌ}}: {{اللَّهَ}} = इस्म इन्न (नस्ब), {{غَفُورٌ}} = खबर इन्न (रफ). {{لَيْتَ}} इच्छा, {{لَعَلَّ}} आशा, {{كَأَنَّ}} तुलना, {{لَكِنَّ}} विरोध." }
      ],
      keyFacts: ["{{إِنَّ}} मुब्तदाला नस्ब देते, खबर रफ ठेवते.", "सहा बहिणी: इन्न, अन्न, कअन्न, लाकिन्न, लैत, लअल्ल.", "{{إِنَّ}} निश्चयासाठी, {{لَعَلَّ}} आशेसाठी."],
      reflection: "{{إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ}} मधले इस्म व खबर सांगा."
    },
    ar: {
      sections: [
        { h: "❗ إنّ وأخواتها", p: "{{إِنَّ}} تدخل على الجملة الاسمية فتنصب المبتدأ ({{اسْم إِنَّ}}) وترفع الخبر ({{خَبَر إِنَّ}}) — عكس عمل كان. وأخواتها: {{إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ}}." },
        { h: "📖 مثال", p: "{{إِنَّ اللَّهَ غَفُورٌ}}: {{اللَّهَ}} اسم إنّ منصوب، {{غَفُورٌ}} خبر إنّ مرفوع. و{{لَيْتَ}} للتمنّي، {{لَعَلَّ}} للرجاء، {{كَأَنَّ}} للتشبيه." }
      ],
      keyFacts: ["إنّ وأخواتها تنصب الاسم وترفع الخبر.", "ستٌّ: إنّ، أنّ، كأنّ، لكنّ، ليت، لعلّ.", "لكلٍّ منها معنى زائد على التوكيد."],
      reflection: "أعرب {{إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ}}."
    },
    fr: {
      sections: [
        { h: "❗ {{إِنَّ}} et ses sœurs", p: "{{إِنَّ}} fait l'inverse de kâna : elle met le mubtada au nasb ({{اسْم إِنَّ}}) et laisse le khabar au raf' ({{خَبَر إِنَّ}}). Ses sœurs : {{إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ}}." },
        { h: "📖 Exemple", p: "{{إِنَّ اللَّهَ غَفُورٌ}} : {{اللَّهَ}} nom de inna (nasb), {{غَفُورٌ}} prédicat (raf'). {{لَيْتَ}} = souhait, {{لَعَلَّ}} = espoir, {{كَأَنَّ}} = comparaison." }
      ],
      keyFacts: ["Inna : nom au nasb, prédicat au raf'.", "Six sœurs.", "Chacune ajoute un sens (souhait, espoir…)."],
      reflection: "Analyse {{إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ}}."
    },
    es: {
      sections: [
        { h: "❗ {{إِنَّ}} y sus hermanas", p: "{{إِنَّ}} hace lo contrario de kâna: pone el mubtada en nasb ({{اسْم إِنَّ}}) y deja el jabar en raf' ({{خَبَر إِنَّ}}). Sus hermanas: {{إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ}}." },
        { h: "📖 Ejemplo", p: "{{إِنَّ اللَّهَ غَفُورٌ}}: {{اللَّهَ}} nombre de inna (nasb), {{غَفُورٌ}} predicado (raf'). {{لَيْتَ}} = deseo, {{لَعَلَّ}} = esperanza, {{كَأَنَّ}} = comparación." }
      ],
      keyFacts: ["Inna: nombre en nasb, predicado en raf'.", "Seis hermanas.", "Cada una añade un matiz (deseo, esperanza…)."],
      reflection: "Analiza {{إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ}}."
    }
  },

  /* ═══════════════ DIN 22 — Harf jarr (jarr ke huruf) ═══════════════ */
  22: {
    mr: {
      sections: [
        { h: "🔗 जर्रची अक्षरे", p: "नामाच्या आधी येऊन त्याला जर्र (जेर) देणारी अक्षरे — {{بِ}} (ने/साठी), {{لِ}} (साठी), {{فِي}} (मध्ये), {{مِنْ}} (पासून), {{إِلَى}} (कडे), {{عَلَى}} (वर), {{عَنْ}} (बद्दल), {{كَ}} (सारखे), {{رُبَّ}} (कधीकधी)." },
        { h: "📖 उदाहरण", p: "{{فِي الْبَيْتِ}} — «घरात»: {{الْبَيْتِ}} जर्रमध्ये. {{بِسْمِ اللَّهِ}} — {{اللَّهِ}} जर्रमध्ये. जर्रच्या अक्षरानंतर नाम नेहमी जर्रमध्ये असते." }
      ],
      keyFacts: ["हर्फ जर्र नंतर नाम जर्रमध्ये.", "सर्वात जास्त वापरले: {{بِ، لِ، فِي، مِنْ، إِلَى}}.", "काही अक्षरे अर्थ बदलतात ({{مِنْ}} = पासून, {{فِي}} = मध्ये)."],
      reflection: "{{بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ}} मधली जर्रची अक्षरे ओळखा."
    },
    ar: {
      sections: [
        { h: "🔗 حروف الجرّ", p: "حروفٌ تجرّ ما بعدها — {{بِ، لِ، فِي، مِنْ، إِلَى، عَلَى، عَنْ، كَ، رُبَّ}}. والاسم بعدها مجرور أبدًا." },
        { h: "📖 مثال", p: "{{فِي الْبَيْتِ}}: {{الْبَيْتِ}} مجرور بالكسرة. {{بِسْمِ اللَّهِ}}: {{اللَّهِ}} مجرور. ولكل حرفٍ معنى: {{مِنْ}} للابتداء، {{إِلَى}} للانتهاء، {{عَلَى}} للاستعلاء." }
      ],
      keyFacts: ["بعد حرف الجرّ: اسم مجرور.", "أشهرها: {{بِ، لِ، فِي، مِنْ، إِلَى}}.", "لكل حرفٍ معنى خاصّ."],
      reflection: "استخرج حروف الجرّ من {{بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ}}."
    },
    fr: {
      sections: [
        { h: "🔗 Les prépositions", p: "Des particules qui mettent le nom suivant au jarr — {{بِ، لِ، فِي، مِنْ، إِلَى، عَلَى، عَنْ، كَ، رُبَّ}}. Le nom après elles est toujours au jarr." },
        { h: "📖 Exemple", p: "{{فِي الْبَيْتِ}} : {{الْبَيْتِ}} au jarr. {{بِسْمِ اللَّهِ}} : {{اللَّهِ}} au jarr. Chaque particule a son sens : {{مِنْ}} = origine, {{إِلَى}} = terme." }
      ],
      keyFacts: ["Après une préposition : nom au jarr.", "Les plus fréquentes : {{بِ، لِ، فِي، مِنْ، إِلَى}}.", "Chacune a un sens propre."],
      reflection: "Relève les prépositions de {{بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ}}."
    },
    es: {
      sections: [
        { h: "🔗 Las preposiciones", p: "Partículas que ponen en yarr al nombre siguiente — {{بِ، لِ، فِي، مِنْ، إِلَى، عَلَى، عَنْ، كَ، رُبَّ}}. El nombre tras ellas va siempre en yarr." },
        { h: "📖 Ejemplo", p: "{{فِي الْبَيْتِ}}: {{الْبَيْتِ}} en yarr. {{بِسْمِ اللَّهِ}}: {{اللَّهِ}} en yarr. Cada partícula tiene su sentido: {{مِنْ}} = origen, {{إِلَى}} = término." }
      ],
      keyFacts: ["Tras preposición: nombre en yarr.", "Las más frecuentes: {{بِ، لِ، فِي، مِنْ، إِلَى}}.", "Cada una tiene su matiz."],
      reflection: "Saca las preposiciones de {{بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ}}."
    }
  },

  /* ═══════════════ DIN 23 — Izafat (mudaf/mudaf ilayh) ═══════════════ */
  23: {
    mr: {
      sections: [
        { h: "➕ इजाफत काय आहे?", p: "दोन नामे जोडणे — पहिले ({{مُضَاف}}) दुसऱ्याचे ({{مُضَاف إِلَيْه}}) होते. मुदाफला {{ال}} नसते व तन्वीन नसते; मुदाफ इलैह नेहमी जर्रमध्ये असते." },
        { h: "📖 उदाहरण", p: "{{كِتَابُ الطَّالِبِ}} — «विद्यार्थ्याचे पुस्तक». {{كِتَابُ}} = मुदाफ, {{الطَّالِبِ}} = मुदाफ इलैह (जर्र). {{بَابُ الْبَيْتِ}} — «घराचा दरवाजा»." }
      ],
      keyFacts: ["मुदाफ: {{ال}} आणि तन्वीन नाही.", "मुदाफ इलैह: नेहमी जर्र.", "इजाफत = «चा/ची/चे» संबंध."],
      reflection: "{{بَابُ الْبَيْتِ}} मध्ये मुदाफ व मुदाफ इलैह ओळखा."
    },
    ar: {
      sections: [
        { h: "➕ الإضافة", p: "ضمُّ اسمٍ إلى اسمٍ: الأول {{مُضَاف}} والثاني {{مُضَاف إِلَيْه}}. والمضاف لا يدخله {{ال}} ولا التنوين، والمضاف إليه مجرورٌ دائمًا." },
        { h: "📖 مثال", p: "{{كِتَابُ الطَّالِبِ}}: {{كِتَابُ}} مضاف، {{الطَّالِبِ}} مضاف إليه مجرور. {{بَابُ الْبَيْتِ}}: مضاف ومضاف إليه." }
      ],
      keyFacts: ["المضاف بلا {{ال}} وبلا تنوين.", "المضاف إليه مجرور.", "الإضافة تفيد التملّك أو التخصيص."],
      reflection: "بيّن المضاف والمضاف إليه في {{بَابُ الْبَيْتِ}}."
    },
    fr: {
      sections: [
        { h: "➕ L'annexion (idâfa)", p: "Joindre deux noms : le premier est le {{مُضَاف}}, le second le {{مُضَاف إِلَيْه}}. Le mudâf n'a ni {{ال}} ni tanwîn ; le mudâf ilayh est toujours au jarr." },
        { h: "📖 Exemple", p: "{{كِتَابُ الطَّالِبِ}} : « le livre de l'étudiant ». {{كِتَابُ}} = mudâf, {{الطَّالِبِ}} = mudâf ilayh (jarr)." }
      ],
      keyFacts: ["Mudâf : sans {{ال}} ni tanwîn.", "Mudâf ilayh : toujours au jarr.", "L'idâfa exprime la possession ou la précision."],
      reflection: "Repère le mudâf et le mudâf ilayh dans {{بَابُ الْبَيْتِ}}."
    },
    es: {
      sections: [
        { h: "➕ La anexión (idâfa)", p: "Unir dos nombres: el primero es el {{مُضَاف}}, el segundo el {{مُضَاف إِلَيْه}}. El mudâf no lleva {{ال}} ni tanwín; el mudâf ilayh va siempre en yarr." },
        { h: "📖 Ejemplo", p: "{{كِتَابُ الطَّالِبِ}}: «el libro del estudiante». {{كِتَابُ}} = mudâf, {{الطَّالِبِ}} = mudâf ilayh (yarr)." }
      ],
      keyFacts: ["Mudâf: sin {{ال}} ni tanwín.", "Mudâf ilayh: siempre en yarr.", "La idâfa expresa posesión o precisión."],
      reflection: "Señala mudâf y mudâf ilayh en {{بَابُ الْبَيْتِ}}."
    }
  },

  /* ═══════════════ DIN 24 — Na't aur Man'ut ═══════════════ */
  24: {
    mr: {
      sections: [
        { h: "🎨 विशेषण व विशेष्य", p: "विशेषण ({{نَعْت}} / {{صِفَة}}) विशेष्याची ({{مَنْعُوت}} / {{مَوْصُوف}}) माहिती सांगते. अरबीत विशेषण विशेष्यानंतर येते आणि त्याच्याशी एराब, लिंग व वचनात जुळते." },
        { h: "📖 उदाहरण", p: "{{رَجُلٌ كَرِيمٌ}} — «उदार माणूस» (दोन्ही रफ, पुल्लिंग, एकवचन). {{امْرَأَةٌ كَرِيمَةٌ}} — स्त्रीलिंगात {{ـة}}. {{الرَّجُلُ الْكَرِيمُ}} — दोन्ही {{ال}} सह." }
      ],
      keyFacts: ["विशेषण विशेष्यानंतर येते.", "एराब, लिंग, वचन — तीनही जुळतात.", "विशेष्य {{ال}} असेल तर विशेषणही {{ال}}."],
      reflection: "{{الْكِتَابُ الْجَدِيدُ}} मधले नअत व मनऊत सांगा."
    },
    ar: {
      sections: [
        { h: "🎨 النعت والمنعوت", p: "النعت (الصفة) يبيّن صفة المنعوت (الموصوف). ويتأخّر عنه، ويطابقه في الإعراب والتعريف والتنكير والتذكير والتأنيث والعدد." },
        { h: "📖 مثال", p: "{{رَجُلٌ كَرِيمٌ}}: نعتٌ ومنعوتٌ مرفوعان. {{امْرَأَةٌ كَرِيمَةٌ}}: بالتأنيث. {{الرَّجُلُ الْكَرِيمُ}}: كلاهما معرّف." }
      ],
      keyFacts: ["النعت بعد المنعوت.", "يطابقه في أربعة: الإعراب، التعريف، النوع، العدد.", "النعت يوضّح ويخصّص."],
      reflection: "بيّن النعت والمنعوت في {{الْكِتَابُ الْجَدِيدُ}}."
    },
    fr: {
      sections: [
        { h: "🎨 L'adjectif et le nom décrit", p: "Le {{نَعْت}} (adjectif) décrit le {{مَنْعُوت}} (nom décrit). Il vient après et s'accorde en i'râb, en genre et en nombre, et suit la présence de {{ال}}." },
        { h: "📖 Exemple", p: "{{رَجُلٌ كَرِيمٌ}} (un homme généreux), {{امْرَأَةٌ كَرِيمَةٌ}} (une femme généreuse), {{الرَّجُلُ الْكَرِيمُ}} (l'homme généreux)." }
      ],
      keyFacts: ["L'adjectif suit le nom décrit.", "Accord en i'râb, genre, nombre.", "Même présence de {{ال}}."],
      reflection: "Repère l'adjectif et le nom décrit dans {{الْكِتَابُ الْجَدِيدُ}}."
    },
    es: {
      sections: [
        { h: "🎨 El adjetivo y el sustantivo descrito", p: "El {{نَعْت}} (adjetivo) describe al {{مَنْعُوت}} (sustantivo). Va después y concuerda en i'râb, género y número, y lleva {{ال}} si la lleva el sustantivo." },
        { h: "📖 Ejemplo", p: "{{رَجُلٌ كَرِيمٌ}} (hombre generoso), {{امْرَأَةٌ كَرِيمَةٌ}} (mujer generosa), {{الرَّجُلُ الْكَرِيمُ}} (el hombre generoso)." }
      ],
      keyFacts: ["El adjetivo va tras el sustantivo.", "Concuerda en i'râb, género y número.", "Misma presencia de {{ال}}."],
      reflection: "Señala adjetivo y sustantivo en {{الْكِتَابُ الْجَدِيدُ}}."
    }
  },

  /* ═══════════════ DIN 25 — Atf, Badal, Ta'keed ═══════════════ */
  25: {
    mr: {
      sections: [
        { h: "🔀 तीन अनुयायी शब्द", p: "{{عَطْف}} = जोडणी ({{وَ، فَ، ثُمَّ، أَوْ}} ने जोडलेला शब्द वरचा एराब घेतो), {{بَدَل}} = बदली (पहिल्याची जागा घेतो), {{تَأْكِيد}} = ठामपणा (वाढीव एकच शब्द — {{نَفْس، عَيْن، كُلّ، جَمِيع}})." },
        { h: "📖 उदाहरण", p: "{{جَاءَ زَيْدٌ وَعَمْرٌو}} — दोघेही रफमध्ये. {{جَاءَ أَخُوكَ زَيْدٌ}} — {{زَيْدٌ}} बदली (बदल). {{جَاءَ الطُّلَّابُ كُلُّهُمْ}} — ठामपणा." }
      ],
      keyFacts: ["अनुयायी (तवाबी): नअत, अत्फ, बदल, ताअकीद.", "प्रत्येकजण पहिल्याचा एराब घेतो.", "{{كُلّ}} व {{جَمِيع}} ठामपणासाठी."],
      reflection: "{{جَاءَ الْقَوْمُ أَجْمَعُونَ}} मधला शब्द कोणत्या प्रकारचा आहे?"
    },
    ar: {
      sections: [
        { h: "🔀 التوابع الثلاثة", p: "{{عَطْف}} (يُوصل بـ{{وَ، فَ، ثُمَّ، أَوْ}} فيأخذ إعراب ما قبله)، {{بَدَل}} (يحلّ محلّ ما قبله)، {{تَأْكِيد}} ({{نَفْس، عَيْن، كُلّ، جَمِيع}})." },
        { h: "📖 مثال", p: "{{جَاءَ زَيْدٌ وَعَمْرٌو}}: كلاهما مرفوع. {{جَاءَ أَخُوكَ زَيْدٌ}}: {{زَيْدٌ}} بدل. {{جَاءَ الطُّلَّابُ كُلُّهُمْ}}: توكيد." }
      ],
      keyFacts: ["التوابع أربع: النعت، العطف، البدل، التوكيد.", "كلّها تتبع ما قبلها في الإعراب.", "{{كُلّ}} و{{جَمِيع}} للتوكيد."],
      reflection: "ما نوع {{أَجْمَعُونَ}} في {{جَاءَ الْقَوْمُ أَجْمَعُونَ}}؟"
    },
    fr: {
      sections: [
        { h: "🔀 Les trois suivants", p: "{{عَطْف}} = coordination (avec {{وَ، فَ، ثُمَّ، أَوْ}}) qui prend le même i'râb ; {{بَدَل}} = substitut qui remplace le premier ; {{تَأْكِيد}} = renforcement ({{نَفْس، عَيْن، كُلّ، جَمِيع}})." },
        { h: "📖 Exemple", p: "{{جَاءَ زَيْدٌ وَعَمْرٌو}} : tous deux au raf'. {{جَاءَ أَخُوكَ زَيْدٌ}} : {{زَيْدٌ}} badal. {{جَاءَ الطُّلَّابُ كُلُّهُمْ}} : renforcement." }
      ],
      keyFacts: ["Les suivants (tawâbi') : na't, atf, badal, ta'kîd.", "Ils suivent l'i'râb du premier.", "{{كُلّ}} et {{جَمِيع}} renforcent."],
      reflection: "Quelle est la fonction de {{أَجْمَعُونَ}} dans {{جَاءَ الْقَوْمُ أَجْمَعُونَ}} ?"
    },
    es: {
      sections: [
        { h: "🔀 Los tres seguidores", p: "{{عَطْف}} = coordinación (con {{وَ، فَ، ثُمَّ، أَوْ}}) que toma el mismo i'râb; {{بَدَل}} = sustituto que reemplaza al primero; {{تَأْكِيد}} = refuerzo ({{نَفْس، عَيْن، كُلّ، جَمِيع}})." },
        { h: "📖 Ejemplo", p: "{{جَاءَ زَيْدٌ وَعَمْرٌو}}: ambos en raf'. {{جَاءَ أَخُوكَ زَيْدٌ}}: {{زَيْدٌ}} badal. {{جَاءَ الطُّلَّابُ كُلُّهُمْ}}: refuerzo." }
      ],
      keyFacts: ["Los seguidores (tawâbi'): na't, atf, badal, ta'kîd.", "Siguen el i'râb del primero.", "{{كُلّ}} y {{جَمِيع}} refuerzan."],
      reflection: "¿Qué función tiene {{أَجْمَعُونَ}} en {{جَاءَ الْقَوْمُ أَجْمَعُونَ}}?"
    }
  }

  /* ═══════════════ DIN 26 — Mawsul aur Ishara ═══════════════ */
  26: {
    mr: {
      sections: [
        { h: "🔗 जोडणारी व दाखवणारी नामे", p: "{{اسْم مَوْصُول}} वाक्याला आधीच्या नामाशी जोडते — {{الَّذِي}} (पुल्लिंग एकवचन), {{الَّتِي}} (स्त्रीलिंग), {{الَّذِينَ}} (पुल्लिंग अनेकवचन), {{اللَّاتِي}} (स्त्रीलिंग अनेकवचन), {{مَنْ}} (समजुतीच्या प्राण्यांसाठी), {{مَا}} (बाकी साठी)." },
        { h: "📖 दाखवणारी नामे", p: "{{هَذَا}} (हा), {{هَذِهِ}} (ही), {{ذَلِكَ}} (तो), {{تِلْكَ}} (ती), {{أُولَئِكَ}} (ते). ही सर्व {{ال}} सह येतात व त्यांच्यानंतरचा शब्द वर्णन करतो." }
      ],
      keyFacts: ["मौसूल = जोडणारे; इशारा = दाखवणारे.", "{{الَّذِي}} च्या नंतरचे वाक्य त्याला स्पष्ट करते.", "दोन्ही ज्ञानार्थक (मारिफा) नामे आहेत."],
      reflection: "{{الَّذِي}} घेऊन एक वाक्य बनवा आणि त्याचा अर्थ सांगा."
    },
    ar: {
      sections: [
        { h: "🔗 الأسماء الموصولة وأسماء الإشارة", p: "الموصول يربط جملةً بما قبله — {{الَّذِي، الَّتِي، الَّذِينَ، اللَّاتِي، مَنْ، مَا}}. والإشارة تدلّ على معيّن — {{هَذَا، هَذِهِ، ذَلِكَ، تِلْكَ، أُولَئِكَ}}." },
        { h: "📖 ملاحظة", p: "الموصول يحتاج جملةً بعده تُسمّى {{صِلَة المَوْصُول}}، وهي التي تبيّن معناه: {{الَّذِي يَكْتُبُ}} = الذي يكتب." }
      ],
      keyFacts: ["الموصول لا يتمّ معناه إلا بصلته.", "أسماء الإشارة للمفرد والمثنى والجمع.", "كلها معارف."],
      reflection: "كوّن جملةً بـ{{الَّذِي}} وبيّن صلتها."
    },
    fr: {
      sections: [
        { h: "🔗 Relatifs et démonstratifs", p: "Le relatif relie une proposition à ce qui précède — {{الَّذِي، الَّتِي، الَّذِينَ، اللَّاتِي، مَنْ، مَا}}. Le démonstratif désigne — {{هَذَا، هَذِهِ، ذَلِكَ، تِلْكَ، أُولَئِكَ}}." },
        { h: "📖 Remarque", p: "Le relatif a besoin d'une proposition appelée {{صِلَة المَوْصُول}} qui en précise le sens : {{الَّذِي يَكْتُبُ}} = celui qui écrit." }
      ],
      keyFacts: ["Le relatif ne se comprend qu'avec sa proposition.", "Les démonstratifs varient en nombre.", "Tous sont des noms définis."],
      reflection: "Fais une phrase avec {{الَّذِي}} et indique sa subordonnée."
    },
    es: {
      sections: [
        { h: "🔗 Relativos y demostrativos", p: "El relativo une una frase a lo anterior — {{الَّذِي، الَّتِي، الَّذِينَ، اللَّاتِي، مَنْ، مَا}}. El demostrativo señala — {{هَذَا، هَذِهِ، ذَلِكَ، تِلْكَ، أُولَئِكَ}}." },
        { h: "📖 Nota", p: "El relativo necesita una frase llamada {{صِلَة المَوْصُول}} que precisa su sentido: {{الَّذِي يَكْتُبُ}} = el que escribe." }
      ],
      keyFacts: ["El relativo se entiende con su frase.", "Los demostrativos varían en número.", "Todos son nombres definidos."],
      reflection: "Haz una frase con {{الَّذِي}} e indica su subordinada."
    }
  },

  /* ═══════════════ DIN 27 — Damair (sarvaname) ═══════════════ */
  27: {
    mr: {
      sections: [
        { h: "👤 वेगळे सर्वनाम (मुनफसिल)", p: "{{أَنَا}} (मी), {{نَحْنُ}} (आम्ही), {{أَنْتَ}} (तू, पु.), {{أَنْتِ}} (तू, स्त्री), {{هُوَ}} (तो), {{هِيَ}} (ती), {{هُمْ}} (ते), {{هُنَّ}} (त्या)." },
        { h: "👤 जोडलेले सर्वनाम (मुत्तसिल)", p: "शब्दाच्या शेवटी जोडले जातात — {{ـهُ}} (त्याचा), {{ـهَا}} (तिचा), {{ـكَ}} (तुझा), {{ـنِي}} (मला), {{ـنَا}} (आम्हाला). उदा. {{كِتَابُهُ}} = त्याचे पुस्तक." }
      ],
      keyFacts: ["मुनफसिल = वेगळा शब्द; मुत्तसिल = जोडलेला.", "सर्वनाम नेहमी मारिफा (ज्ञात) असते.", "मुत्तसिल सर्वनाम जर्र किंवा नस्बमध्ये असते."],
      reflection: "{{كِتَابِي}} व {{كِتَابُهُ}} यांचा फरक स्पष्ट करा."
    },
    ar: {
      sections: [
        { h: "👤 الضمائر المنفصلة", p: "{{أَنَا، نَحْنُ، أَنْتَ، أَنْتِ، هُوَ، هِيَ، هُمْ، هُنَّ}}. وتكون في محلّ رفع غالبًا." },
        { h: "👤 الضمائر المتصلة", p: "تتصل بآخر الكلمة — {{ـهُ، ـهَا، ـكَ، ـنِي، ـنَا}}. نحو {{كِتَابُهُ}} (كتابه) و{{كِتَابِي}} (كتابي)." }
      ],
      keyFacts: ["المنفصل كلمة مستقلة، والمتصل لا يُنطق وحده.", "الضمير معرفة دائمًا.", "المتصل يأتي في محلّ جرّ أو نصب."],
      reflection: "فرّق بين {{كِتَابِي}} و{{كِتَابُهُ}}."
    },
    fr: {
      sections: [
        { h: "👤 Les pronoms séparés", p: "{{أَنَا، نَحْنُ، أَنْتَ، أَنْتِ، هُوَ، هِيَ، هُمْ، هُنَّ}} — pronoms autonomes, généralement au raf'." },
        { h: "👤 Les pronoms attachés", p: "Ils s'attachent à la fin du mot — {{ـهُ، ـهَا، ـكَ، ـنِي، ـنَا}} : {{كِتَابُهُ}} (son livre), {{كِتَابِي}} (mon livre)." }
      ],
      keyFacts: ["Séparé = mot autonome ; attaché = suffixe.", "Un pronom est toujours défini.", "L'attaché est au jarr ou au nasb."],
      reflection: "Explique la différence entre {{كِتَابِي}} et {{كِتَابُهُ}}."
    },
    es: {
      sections: [
        { h: "👤 Los pronombres separados", p: "{{أَنَا، نَحْنُ، أَنْتَ، أَنْتِ، هُوَ، هِيَ، هُمْ، هُنَّ}} — pronombres autónomos, casi siempre en raf'." },
        { h: "👤 Los pronombres unidos", p: "Se unen al final de la palabra — {{ـهُ، ـهَا، ـكَ، ـنِي، ـنَا}}: {{كِتَابُهُ}} (su libro), {{كِتَابِي}} (mi libro)." }
      ],
      keyFacts: ["Separado = palabra autónoma; unido = sufijo.", "El pronombre es siempre definido.", "El unido va en yarr o nasb."],
      reflection: "Explica la diferencia entre {{كِتَابِي}} y {{كِتَابُهُ}}."
    }
  },

  /* ═══════════════ DIN 28 — Haal aur Tamyeez ═══════════════ */
  28: {
    mr: {
      sections: [
        { h: "🎭 हाल (अवस्था)", p: "कर्ता किंवा कर्माची अवस्था सांगणारा नस्बमधला शब्द — {{جَاءَ زَيْدٌ رَاكِبًا}} («झैद स्वार होऊन आला»). प्रश्न: «कसा?»" },
        { h: "🎭 तम्यीझ (स्पष्टता)", p: "एखाद्या अस्पष्ट गोष्टीची जात स्पष्ट करणारा नस्बमधला शब्द — {{اشْتَرَيْتُ رِطْلًا زَيْتًا}} («मी एक रतल तेल विकत घेतले»). प्रश्न: «काय?»" }
      ],
      keyFacts: ["हाल = अवस्था; तम्यीझ = जातीची स्पष्टता.", "दोन्ही नस्बमध्ये.", "हाल प्रश्न «कसा?», तम्यीझ प्रश्न «काय?»."],
      reflection: "{{رَأَيْتُ الطَّالِبَ مُبْتَسِمًا}} मध्ये हाल कोणता?"
    },
    ar: {
      sections: [
        { h: "🎭 الحال", p: "اسمٌ منصوب يبيّن هيئة الفاعل أو المفعول — {{جَاءَ زَيْدٌ رَاكِبًا}}. والسؤال: كيف؟" },
        { h: "🎭 التمييز", p: "اسمٌ منصوب يرفع الإبهام عن مقدارٍ أو جنس — {{اشْتَرَيْتُ رِطْلًا زَيْتًا}}. والسؤال: ماذا؟" }
      ],
      keyFacts: ["كلاهما منصوب.", "الحال يُسأل عنه بـ«كيف»، والتمييز بـ«ماذا».", "الحال قد يكون جملةً أو شبه جملة."],
      reflection: "ما الحال في {{رَأَيْتُ الطَّالِبَ مُبْتَسِمًا}}؟"
    },
    fr: {
      sections: [
        { h: "🎭 Le hâl (état)", p: "Nom au nasb qui décrit l'état du sujet ou de l'objet — {{جَاءَ زَيْدٌ رَاكِبًا}} (Zayd vint à cheval). Question : « comment ? »" },
        { h: "🎭 Le tamyîz (précision)", p: "Nom au nasb qui lève l'ambiguïté sur une quantité ou une espèce — {{اشْتَرَيْتُ رِطْلًا زَيْتًا}}. Question : « quoi ? »" }
      ],
      keyFacts: ["Les deux sont au nasb.", "Hâl → « comment ? » ; tamyîz → « quoi ? ».", "Le hâl peut être une phrase."],
      reflection: "Quel est le hâl dans {{رَأَيْتُ الطَّالِبَ مُبْتَسِمًا}} ?"
    },
    es: {
      sections: [
        { h: "🎭 El hâl (estado)", p: "Nombre en nasb que describe el estado del sujeto o del objeto — {{جَاءَ زَيْدٌ رَاكِبًا}} (Zayd vino montado). Pregunta: «¿cómo?»" },
        { h: "🎭 El tamyîz (precisión)", p: "Nombre en nasb que aclara una cantidad o una especie — {{اشْتَرَيْتُ رِطْلًا زَيْتًا}}. Pregunta: «¿qué?»" }
      ],
      keyFacts: ["Ambos van en nasb.", "Hâl → «¿cómo?»; tamyîz → «¿qué?».", "El hâl puede ser una frase."],
      reflection: "¿Cuál es el hâl en {{رَأَيْتُ الطَّالِبَ مُبْتَسِمًا}}?"
    }
  },

  /* ═══════════════ DIN 29 — Majrurat aur Majzumat ═══════════════ */
  29: {
    mr: {
      sections: [
        { h: "📊 जर्र होणारी नामे", p: "तीन ठिकाणे: (1) जर्रच्या अक्षरानंतर — {{فِي الْبَيْتِ}}, (2) मुदाफ इलैह — {{كِتَابُ الطَّالِبِ}}, (3) जर्रतील अनुयायी (नअत, अत्फ, बदल)." },
        { h: "📊 जझ्म होणारी क्रियापदे", p: "मुदारे जझ्ममध्ये येते: {{لَمْ}} नंतर — {{لَمْ يَكْتُبْ}}, {{لَمَّا}} नंतर — {{لَمَّا يَذْهَبْ}}, आणि शर्तीच्या अक्षरानंतर — {{إِنْ تَذْهَبْ أَذْهَبْ}}." }
      ],
      keyFacts: ["जर्र: 3 ठिकाणे (हर्फ, इजाफत, अनुयायी).", "जझ्म: फक्त मुदारे.", "{{لَمْ}} नकार भूतकाळासाठी वापरतात."],
      reflection: "{{لَمْ يَلِدْ وَلَمْ يُولَدْ}} मध्ये जझ्मची कारणे सांगा."
    },
    ar: {
      sections: [
        { h: "📊 المجرورات", p: "ثلاثة مواضع: (1) بعد حرف الجرّ — {{فِي الْبَيْتِ}}، (2) المضاف إليه — {{كِتَابُ الطَّالِبِ}}، (3) التابع المجرور (نعت، عطف، بدل)." },
        { h: "📊 المجزومات", p: "المضارع يُجزم بـ{{لَمْ}} — {{لَمْ يَكْتُبْ}}، وبـ{{لَمَّا}} — {{لَمَّا يَذْهَبْ}}، وبأدوات الشرط — {{إِنْ تَذْهَبْ أَذْهَبْ}}." }
      ],
      keyFacts: ["الجرّ في ثلاثة مواضع.", "الجزم للمضارع فقط.", "{{لَمْ}} تنفي الماضي وتقلبه إلى مضارع مجزوم."],
      reflection: "بيّن سبب الجزم في {{لَمْ يَلِدْ وَلَمْ يُولَدْ}}."
    },
    fr: {
      sections: [
        { h: "📊 Les noms au jarr", p: "Trois cas : (1) après une préposition — {{فِي الْبَيْتِ}} ; (2) complément d'annexion — {{كِتَابُ الطَّالِبِ}} ; (3) le suivant au jarr (na't, atf, badal)." },
        { h: "📊 Les verbes au jazm", p: "Le mudâri' est au jazm après {{لَمْ}} — {{لَمْ يَكْتُبْ}} — après {{لَمَّا}}, et après les particules de condition — {{إِنْ تَذْهَبْ أَذْهَبْ}}." }
      ],
      keyFacts: ["Le jarr a trois causes.", "Le jazm ne concerne que le mudâri'.", "{{لَمْ}} nie le passé."],
      reflection: "Explique le jazm dans {{لَمْ يَلِدْ وَلَمْ يُولَدْ}}."
    },
    es: {
      sections: [
        { h: "📊 Los nombres en yarr", p: "Tres casos: (1) tras preposición — {{فِي الْبَيْتِ}}; (2) complemento de anexión — {{كِتَابُ الطَّالِبِ}}; (3) el seguidor en yarr (na't, atf, badal)." },
        { h: "📊 Los verbos en yazm", p: "El mudâri' va en yazm tras {{لَمْ}} — {{لَمْ يَكْتُبْ}} — tras {{لَمَّا}}, y tras partículas de condición — {{إِنْ تَذْهَبْ أَذْهَبْ}}." }
      ],
      keyFacts: ["El yarr tiene tres causas.", "El yazm solo afecta al mudâri'.", "{{لَمْ}} niega el pasado."],
      reflection: "Explica el yazm en {{لَمْ يَلِدْ وَلَمْ يُولَدْ}}."
    }
  },

  /* ═══════════════ DIN 30 — Nahw ka khulasa ═══════════════ */
  30: {
    mr: {
      sections: [
        { h: "🏆 15 दिवसांत काय शिकलो?", p: "नह्वची व्याख्या, एराबच्या 4 अवस्था, इस्मीय वाक्य (मुब्तदा-खबर), क्रियापदीय वाक्य (क्रियापद-कर्ता-कर्म), {{كَانَ}} व {{إِنَّ}} च्या बहिणी, जर्रची अक्षरे, इजाफत, विशेषण, अनुयायी, सर्वनाम, हाल, तम्यीझ, जर्र व जझ्म." },
        { h: "🌱 पुढे काय?", p: "हे नियम रोज एक आयतावर लावा. एराब ओळखता आला की अर्थ स्वतः स्पष्ट होतो — शब्दकोशाची गरज कमी होते." }
      ],
      keyFacts: ["नह्व = वाक्याचा नकाशा; सर्फ = शब्दाची रचना.", "एराब ओळखणे हीच खरी किल्ली.", "सराव: रोज एक आयत."],
      reflection: "आज एक आयत घ्या आणि प्रत्येक शब्दाची भूमिका व एराब सांगा."
    },
    ar: {
      sections: [
        { h: "🏆 ماذا تعلّمنا في خمسة عشر يومًا؟", p: "تعريف النحو، وحالات الإعراب الأربع، والجملة الاسمية (مبتدأ وخبر)، والجملة الفعلية (فعل وفاعل ومفعول)، وكان وأخواتها، وإنّ وأخواتها، وحروف الجرّ، والإضافة، والنعت، والتوابع، والضمائر، والحال، والتمييز، والمجرورات والمجزومات." },
        { h: "🌱 الخطوة التالية", p: "طبّق هذه القواعد على آيةٍ كل يوم؛ فإذا عرفتَ الإعراب فهمتَ المعنى بلا معجم." }
      ],
      keyFacts: ["النحو خريطة الجملة، والصرف بناء الكلمة.", "الإعراب هو المفتاح.", "التمرين اليومي يثبّت القاعدة."],
      reflection: "خذ آيةً اليوم وأعرب كل كلمة فيها إعرابًا مختصرًا."
    },
    fr: {
      sections: [
        { h: "🏆 Ce que nous avons appris en 15 jours", p: "La définition du Nahw, les quatre cas de l'i'râb, la phrase nominale (mubtada/khabar), la phrase verbale (verbe/sujet/objet), kâna et ses sœurs, inna et ses sœurs, les prépositions, l'annexion, l'adjectif, les suivants, les pronoms, le hâl, le tamyîz, les noms au jarr et les verbes au jazm." },
        { h: "🌱 La suite", p: "Applique ces règles à un verset chaque jour : connaître l'i'râb suffit souvent à comprendre sans dictionnaire." }
      ],
      keyFacts: ["Nahw = carte de la phrase ; Sarf = formation du mot.", "L'i'râb est la clé.", "Un verset par jour suffit."],
      reflection: "Prends un verset et donne l'i'râb de chaque mot."
    },
    es: {
      sections: [
        { h: "🏆 Lo que aprendimos en 15 días", p: "La definición del Nahw, los cuatro casos del i'râb, la frase nominal (mubtada/jabar), la frase verbal (verbo/sujeto/objeto), kâna y sus hermanas, inna y sus hermanas, las preposiciones, la anexión, el adjetivo, los seguidores, los pronombres, el hâl, el tamyîz, los nombres en yarr y los verbos en yazm." },
        { h: "🌱 Lo siguiente", p: "Aplica estas reglas a un versículo cada día: con el i'râb muchas veces se entiende sin diccionario." }
      ],
      keyFacts: ["Nahw = mapa de la frase; Sarf = formación de la palabra.", "El i'râb es la llave.", "Un versículo al día basta."],
      reflection: "Toma un versículo y da el i'râb de cada palabra."
    }
  }
};


/* ══════════════════════════════════════════════════════════════════════════
   IMTIHAN (quiz) — नई चार zubaanein
   Har din 3 sawal; `correct` batata hai kaunsa option sahi hai (0 se shuru).
   Apni alag kunji is liye hai ke English/Urdu ke sawalon ka tarteeb alag hai —
   ye dono saath hi lagte hain, warna sahi jawab galat ho jata.
   Jis din yahan na ho, us din ka imtihan purane (English) par chalta hai.
   ══════════════════════════════════════════════════════════════════════════ */
window.GRAMMAR_QUIZ_LANG = {

  /* ── DIN 1 — Sarf kya hai ── */
  1: {
    mr: {
      correct: [0, 0, 1],
      quiz: [
        { q: "सर्फ कोणत्या गोष्टीचे शास्त्र आहे?", opts: ["शब्दाची रचना", "वाक्याची रचना", "अक्षरांचा उच्चार"] },
        { q: "नह्व कोणत्या गोष्टीचे शास्त्र आहे?", opts: ["वाक्याची रचना", "शब्दाची रचना", "गुणवाचक शब्द"] },
        { q: "मुळात (जड) सहसा किती अक्षरे असतात?", opts: ["दोन", "तीन", "चार"] }
      ]
    },
    ar: {
      correct: [0, 0, 1],
      quiz: [
        { q: "الصرف علمٌ يبحث في…", opts: ["بناء الكلمة", "تركيب الجملة", "مخارج الحروف"] },
        { q: "النحو علمٌ يبحث في…", opts: ["تركيب الجملة", "بناء الكلمة", "الصفات"] },
        { q: "أكثر الجذور تتكوّن من…", opts: ["حرفين", "ثلاثة أحرف", "أربعة أحرف"] }
      ]
    },
    fr: {
      correct: [0, 0, 1],
      quiz: [
        { q: "Le Sarf étudie…", opts: ["la formation du mot", "la structure de la phrase", "la prononciation"] },
        { q: "Le Nahw étudie…", opts: ["la structure de la phrase", "la formation du mot", "les qualités"] },
        { q: "Une racine a le plus souvent…", opts: ["deux lettres", "trois lettres", "quatre lettres"] }
      ]
    },
    es: {
      correct: [0, 0, 1],
      quiz: [
        { q: "El Sarf estudia…", opts: ["la formación de la palabra", "la estructura de la frase", "la pronunciación"] },
        { q: "El Nahw estudia…", opts: ["la estructura de la frase", "la formación de la palabra", "las cualidades"] },
        { q: "Una raíz tiene casi siempre…", opts: ["dos letras", "tres letras", "cuatro letras"] }
      ]
    }
  },

  /* ── DIN 2 — Kalima ki 3 qismein ── */
  2: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "अरबीत शब्दाचे किती प्रकार आहेत?", opts: ["दोन", "तीन", "चार"] },
        { q: "{{كِتَاب}} कोणत्या प्रकारचा शब्द आहे?", opts: ["नाम (इसम)", "क्रियापद (फिअल)", "अव्यय (हर्फ)"] },
        { q: "{{فِي}} कोणत्या प्रकारचा शब्द आहे?", opts: ["नाम", "क्रियापद", "अव्यय"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "كم أقسام الكلمة في العربية؟", opts: ["قسمان", "ثلاثة", "أربعة"] },
        { q: "{{كِتَاب}} أيُّ الأقسام؟", opts: ["اسم", "فعل", "حرف"] },
        { q: "{{فِي}} أيُّ الأقسام؟", opts: ["اسم", "فعل", "حرف"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "Combien de catégories de mots en arabe ?", opts: ["Deux", "Trois", "Quatre"] },
        { q: "{{كِتَاب}} appartient à…", opts: ["un nom (ism)", "un verbe (fi'l)", "une particule (harf)"] },
        { q: "{{فِي}} est…", opts: ["un nom", "un verbe", "une particule"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "¿Cuántas clases de palabra hay en árabe?", opts: ["Dos", "Tres", "Cuatro"] },
        { q: "{{كِتَاب}} es…", opts: ["un nombre (ism)", "un verbo (fi'l)", "una partícula (harf)"] },
        { q: "{{فِي}} es…", opts: ["un nombre", "un verbo", "una partícula"] }
      ]
    }
  },

  /* ── DIN 3 — Jadhr ── */
  3: {
    mr: {
      correct: [0, 1, 0],
      quiz: [
        { q: "{{ك ت ب}} पासून «लेखक» कोणता शब्द आहे?", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كِتَاب}}"] },
        { q: "मूळ लिहिताना काय देत नाहीत?", opts: ["अक्षरे", "हरकत", "दोन्ही"] },
        { q: "{{ع ل م}} चा अर्थ काय?", opts: ["ज्ञान", "लिहिणे", "ऐकणे"] }
      ]
    },
    ar: {
      correct: [0, 1, 0],
      quiz: [
        { q: "أيُّ كلمةٍ من {{ك ت ب}} بمعنى الكاتب؟", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كِتَاب}}"] },
        { q: "الجذر يُكتب…", opts: ["بالحركات", "بلا حركات", "بالتنوين"] },
        { q: "معنى {{ع ل م}}؟", opts: ["العلم", "الكتابة", "السمع"] }
      ]
    },
    fr: {
      correct: [0, 1, 0],
      quiz: [
        { q: "Quel mot de {{ك ت ب}} signifie « écrivain » ?", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كِتَاب}}"] },
        { q: "La racine s'écrit…", opts: ["avec les voyelles", "sans voyelles", "avec tanwîn"] },
        { q: "Que signifie {{ع ل م}} ?", opts: ["le savoir", "l'écriture", "l'ouïe"] }
      ]
    },
    es: {
      correct: [0, 1, 0],
      quiz: [
        { q: "¿Qué palabra de {{ك ت ب}} significa «escritor»?", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كِتَاب}}"] },
        { q: "La raíz se escribe…", opts: ["con vocales", "sin vocales", "con tanwín"] },
        { q: "¿Qué significa {{ع ل م}}?", opts: ["el saber", "la escritura", "el oído"] }
      ]
    }
  },

  /* ── DIN 4 — Wazn ── */
  4: {
    mr: {
      correct: [0, 0, 2],
      quiz: [
        { q: "वजन दाखवताना मुळाच्या जागी कोणती अक्षरे घेतात?", opts: ["{{ف ع ل}}", "{{ا ب ج}}", "{{ك ت ب}}"] },
        { q: "{{فَاعِل}} साच्यात {{ك ت ب}} घातल्यास काय बनते?", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كَتَبَ}}"] },
        { q: "वजन म्हणजे काय?", opts: ["शब्दाचा अर्थ", "शब्दाची जात", "शब्दाचा साचा"] }
      ]
    },
    ar: {
      correct: [0, 0, 2],
      quiz: [
        { q: "في الوزن تُوضع {{ف ع ل}} مكان…", opts: ["حروف الجذر", "حروف الزيادة", "الحركات"] },
        { q: "{{ك ت ب}} في وزن {{فَاعِل}} تُعطي…", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كَتَبَ}}"] },
        { q: "الوزن هو…", opts: ["معنى الكلمة", "نوع الكلمة", "قالب الكلمة"] }
      ]
    },
    fr: {
      correct: [0, 0, 2],
      quiz: [
        { q: "Dans un schème, {{ف ع ل}} remplacent…", opts: ["les lettres de la racine", "les lettres ajoutées", "les voyelles"] },
        { q: "{{ك ت ب}} dans le schème {{فَاعِل}} donne…", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كَتَبَ}}"] },
        { q: "Le wazn est…", opts: ["le sens du mot", "la classe du mot", "le moule du mot"] }
      ]
    },
    es: {
      correct: [0, 0, 2],
      quiz: [
        { q: "En el molde, {{ف ع ل}} ocupan el lugar de…", opts: ["las letras de la raíz", "las letras añadidas", "las vocales"] },
        { q: "{{ك ت ب}} en el molde {{فَاعِل}} da…", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كَتَبَ}}"] },
        { q: "El wazn es…", opts: ["el sentido de la palabra", "la clase de palabra", "el molde de la palabra"] }
      ]
    }
  },

  /* ── DIN 5 — Maazi ki 14 sooratein ── */
  5: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "माहीची (भूतकाळ) किती रूपे आहेत?", opts: ["सहा", "चौदा", "दहा"] },
        { q: "{{كَتَبَ}} चा अर्थ काय?", opts: ["त्याने लिहिले", "तो लिहितो", "लिही!"] },
        { q: "माही कोणता काळ दाखवते?", opts: ["भविष्यकाळ", "वर्तमानकाळ", "पूर्ण झालेला काळ"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "كم صيغةً للماضي؟", opts: ["ستّ", "أربع عشرة", "عشر"] },
        { q: "معنى {{كَتَبَ}}؟", opts: ["كتب", "يكتب", "اكتب"] },
        { q: "الماضي يدل على…", opts: ["الاستقبال", "الحال", "زمنٍ مضى"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "Combien de formes a le passé (mâdî) ?", opts: ["Six", "Quatorze", "Dix"] },
        { q: "{{كَتَبَ}} signifie…", opts: ["il a écrit", "il écrit", "écris"] },
        { q: "Le mâdî exprime…", opts: ["le futur", "le présent", "un temps passé"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "¿Cuántas formas tiene el pasado (mâdî)?", opts: ["Seis", "Catorce", "Diez"] },
        { q: "{{كَتَبَ}} significa…", opts: ["escribió", "escribe", "escribe tú"] },
        { q: "El mâdî expresa…", opts: ["el futuro", "el presente", "un tiempo pasado"] }
      ]
    }
  },

  /* ── DIN 6 — Mudari' ── */
  6: {
    mr: {
      correct: [0, 0, 1],
      quiz: [
        { q: "मुदारे कोणते दोन काळ दाखवते?", opts: ["वर्तमान व भविष्य", "फक्त भूतकाळ", "फक्त भविष्य"] },
        { q: "मुदारे सुरू होते…", opts: ["{{ي}} / {{ت}} / {{أ}} / {{ن}}", "{{س}} / {{ش}} / {{ص}}", "{{ب}} / {{م}} / {{و}}"] },
        { q: "{{يَكْتُبُ}} चा अर्थ?", opts: ["त्याने लिहिले", "तो लिहितो", "लिही!"] }
      ]
    },
    ar: {
      correct: [0, 0, 1],
      quiz: [
        { q: "المضارع يدل على…", opts: ["الحال والاستقبال", "الماضي فقط", "الاستقبال فقط"] },
        { q: "المضارع يبدأ بأحد أحرف…", opts: ["{{أَنَيْتُ}}", "{{سَأَلَ}}", "{{بِمَو}}"] },
        { q: "معنى {{يَكْتُبُ}}؟", opts: ["كتب", "يكتب", "اكتب"] }
      ]
    },
    fr: {
      correct: [0, 0, 1],
      quiz: [
        { q: "Le mudâri' exprime…", opts: ["le présent et le futur", "seulement le passé", "seulement le futur"] },
        { q: "Le mudâri' commence par…", opts: ["une lettre de {{أَنَيْتُ}}", "{{س}} ou {{ش}}", "{{ب}} ou {{م}}"] },
        { q: "{{يَكْتُبُ}} signifie…", opts: ["il a écrit", "il écrit", "écris"] }
      ]
    },
    es: {
      correct: [0, 0, 1],
      quiz: [
        { q: "El mudâri' expresa…", opts: ["presente y futuro", "solo pasado", "solo futuro"] },
        { q: "El mudâri' empieza por…", opts: ["una letra de {{أَنَيْتُ}}", "{{س}} o {{ش}}", "{{ب}} o {{م}}"] },
        { q: "{{يَكْتُبُ}} significa…", opts: ["escribió", "escribe", "escribe tú"] }
      ]
    }
  },

  /* ── DIN 7 — Amr ── */
  7: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "अम्रची किती रूपे आहेत?", opts: ["चौदा", "सहा", "तीन"] },
        { q: "अम्र कोणासाठी असतो?", opts: ["हजर (समोरचा) व्यक्ती", "गैरहजर", "वक्ता स्वतः"] },
        { q: "{{اُكْتُبْ}} चा अर्थ?", opts: ["त्याने लिहिले", "तो लिहितो", "लिही!"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "كم صيغةً للأمر؟", opts: ["أربع عشرة", "ستّ", "ثلاث"] },
        { q: "الأمر يكون لـ…", opts: ["المخاطب", "الغائب", "المتكلّم"] },
        { q: "معنى {{اُكْتُبْ}}؟", opts: ["كتب", "يكتب", "اكتب"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "Combien de formes a l'ordre (amr) ?", opts: ["Quatorze", "Six", "Trois"] },
        { q: "L'amr s'adresse à…", opts: ["l'interlocuteur", "l'absent", "le locuteur"] },
        { q: "{{اُكْتُبْ}} signifie…", opts: ["il a écrit", "il écrit", "écris !"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "¿Cuántas formas tiene el imperativo (amr)?", opts: ["Catorce", "Seis", "Tres"] },
        { q: "El amr se dirige a…", opts: ["el interlocutor", "el ausente", "el hablante"] },
        { q: "{{اُكْتُبْ}} significa…", opts: ["escribió", "escribe", "¡escribe!"] }
      ]
    }
  },

  /* ── DIN 8 — Nahi ── */
  8: {
    mr: {
      correct: [0, 2, 0],
      quiz: [
        { q: "नही कोणत्या अक्षराने बनते?", opts: ["{{لَا}}", "{{لَمْ}}", "{{هَلْ}}"] },
        { q: "{{لَا تَكْتُبْ}} चा अर्थ?", opts: ["लिही!", "त्याने लिहिले", "लिहू नको"] },
        { q: "नहीत मुदारे कोणत्या अवस्थेत असते?", opts: ["जझ्म", "रफ", "नस्ब"] }
      ]
    },
    ar: {
      correct: [0, 2, 0],
      quiz: [
        { q: "النهي يكون بـ…", opts: ["{{لَا}}", "{{لَمْ}}", "{{هَلْ}}"] },
        { q: "معنى {{لَا تَكْتُبْ}}؟", opts: ["اكتب", "كتب", "لا تكتب"] },
        { q: "الفعل بعد {{لَا}} الناهية يكون…", opts: ["مجزومًا", "مرفوعًا", "منصوبًا"] }
      ]
    },
    fr: {
      correct: [0, 2, 0],
      quiz: [
        { q: "La défense (nahî) se forme avec…", opts: ["{{لَا}}", "{{لَمْ}}", "{{هَلْ}}"] },
        { q: "{{لَا تَكْتُبْ}} signifie…", opts: ["écris", "il a écrit", "n'écris pas"] },
        { q: "Après {{لَا}}, le verbe est…", opts: ["au jazm", "au raf'", "au nasb"] }
      ]
    },
    es: {
      correct: [0, 2, 0],
      quiz: [
        { q: "La prohibición (nahî) se forma con…", opts: ["{{لَا}}", "{{لَمْ}}", "{{هَلْ}}"] },
        { q: "{{لَا تَكْتُبْ}} significa…", opts: ["escribe", "escribió", "no escribas"] },
        { q: "Tras {{لَا}}, el verbo va…", opts: ["en yazm", "en raf'", "en nasb"] }
      ]
    }
  },

  /* ── DIN 9 — Chhe abwab (1-3) ── */
  9: {
    mr: {
      correct: [0, 1, 2],
      quiz: [
        { q: "{{نَصَرَ يَنْصُرُ}} मध्ये दुसऱ्या अक्षराची हरकत?", opts: ["पेश → पेश", "जबर → जेर", "जेर → जबर"] },
        { q: "{{ضَرَبَ يَضْرِبُ}} कोणत्या बाबात आहे?", opts: ["नसर", "जर्ब", "फतह"] },
        { q: "{{فَتَحَ يَفْتَحُ}} मध्ये हरकत?", opts: ["पेश → जेर", "जेर → जेर", "जबर → जबर"] }
      ]
    },
    ar: {
      correct: [0, 1, 2],
      quiz: [
        { q: "حركة العين في {{نَصَرَ يَنْصُرُ}}؟", opts: ["ضمٌّ فيهما", "فتحٌ ثم كسر", "كسرٌ ثم فتح"] },
        { q: "{{ضَرَبَ يَضْرِبُ}} في أيّ باب؟", opts: ["نصر", "ضرب", "فتح"] },
        { q: "حركة العين في {{فَتَحَ يَفْتَحُ}}؟", opts: ["ضمٌّ ثم كسر", "كسرٌ فيهما", "فتحٌ فيهما"] }
      ]
    },
    fr: {
      correct: [0, 1, 2],
      quiz: [
        { q: "Voyelle de la 2e lettre dans {{نَصَرَ يَنْصُرُ}} ?", opts: ["damme → damme", "fatha → kasra", "kasra → fatha"] },
        { q: "{{ضَرَبَ يَضْرِبُ}} appartient à…", opts: ["nasr", "darb", "fath"] },
        { q: "Voyelles de {{فَتَحَ يَفْتَحُ}} ?", opts: ["damme → kasra", "kasra → kasra", "fatha → fatha"] }
      ]
    },
    es: {
      correct: [0, 1, 2],
      quiz: [
        { q: "Vocal de la 2.ª letra en {{نَصَرَ يَنْصُرُ}}?", opts: ["damma → damma", "fatha → kasra", "kasra → fatha"] },
        { q: "{{ضَرَبَ يَضْرِبُ}} pertenece a…", opts: ["nasr", "darb", "fath"] },
        { q: "Vocales de {{فَتَحَ يَفْتَحُ}}?", opts: ["damma → kasra", "kasra → kasra", "fatha → fatha"] }
      ]
    }
  },

  /* ── DIN 10 — Chhe abwab (4-6) ── */
  10: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{عَلِمَ يَعْلَمُ}} कोणत्या बाबात आहे?", opts: ["करम", "समअ", "हसब"] },
        { q: "{{كَرُمَ يَكْرُمُ}} मध्ये हरकत?", opts: ["पेश → पेश", "जबर → जेर", "जेर → जेर"] },
        { q: "{{حَسِبَ يَحْسِبُ}} मध्ये हरकत?", opts: ["जबर → जबर", "पेश → पेश", "जेर → जेर"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{عَلِمَ يَعْلَمُ}} في أيّ باب؟", opts: ["كرم", "سمع", "حسب"] },
        { q: "حركة العين في {{كَرُمَ يَكْرُمُ}}؟", opts: ["ضمٌّ فيهما", "فتحٌ ثم كسر", "كسرٌ فيهما"] },
        { q: "حركة العين في {{حَسِبَ يَحْسِبُ}}؟", opts: ["فتحٌ فيهما", "ضمٌّ فيهما", "كسرٌ فيهما"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{عَلِمَ يَعْلَمُ}} appartient à…", opts: ["karam", "sama'", "hasab"] },
        { q: "Voyelles de {{كَرُمَ يَكْرُمُ}} ?", opts: ["damme → damme", "fatha → kasra", "kasra → kasra"] },
        { q: "Voyelles de {{حَسِبَ يَحْسِبُ}} ?", opts: ["fatha → fatha", "damme → damme", "kasra → kasra"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{عَلِمَ يَعْلَمُ}} pertenece a…", opts: ["karam", "sama'", "hasab"] },
        { q: "Vocales de {{كَرُمَ يَكْرُمُ}}?", opts: ["damma → damma", "fatha → kasra", "kasra → kasra"] },
        { q: "Vocales de {{حَسِبَ يَحْسِبُ}}?", opts: ["fatha → fatha", "damma → damma", "kasra → kasra"] }
      ]
    }
  }

  /* ── DIN 11 — Ism fa'il / Ism maf'ul ── */
  11: {
    mr: {
      correct: [0, 1, 2],
      quiz: [
        { q: "कर्तृवाचक नामाचा साचा कोणता?", opts: ["{{فَاعِل}}", "{{مَفْعُول}}", "{{فَعَلَ}}"] },
        { q: "«लिहिलेले» साठी कोणता शब्द?", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كَتَبَ}}"] },
        { q: "{{عَالِم}} चा अर्थ?", opts: ["माहीत नसलेला", "लिहिणारा", "जाणणारा"] }
      ]
    },
    ar: {
      correct: [0, 1, 2],
      quiz: [
        { q: "وزن اسم الفاعل من الثلاثي؟", opts: ["{{فَاعِل}}", "{{مَفْعُول}}", "{{فَعَلَ}}"] },
        { q: "أيُّ كلمةٍ بمعنى «مكتوب»؟", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كَتَبَ}}"] },
        { q: "معنى {{عَالِم}}؟", opts: ["جاهل", "كاتب", "عارف"] }
      ]
    },
    fr: {
      correct: [0, 1, 2],
      quiz: [
        { q: "Schème du participe actif (trilitère) ?", opts: ["{{فَاعِل}}", "{{مَفْعُول}}", "{{فَعَلَ}}"] },
        { q: "Quel mot signifie « écrit » ?", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كَتَبَ}}"] },
        { q: "{{عَالِم}} signifie…", opts: ["ignorant", "écrivain", "savant"] }
      ]
    },
    es: {
      correct: [0, 1, 2],
      quiz: [
        { q: "¿Molde del participio activo (trilitero)?", opts: ["{{فَاعِل}}", "{{مَفْعُول}}", "{{فَعَلَ}}"] },
        { q: "¿Qué palabra significa «escrito»?", opts: ["{{كَاتِب}}", "{{مَكْتُوب}}", "{{كَتَبَ}}"] },
        { q: "{{عَالِم}} significa…", opts: ["ignorante", "escritor", "sabio"] }
      ]
    }
  },

  /* ── DIN 12 — Zarf aur Aala ── */
  12: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "जागा/वेळ दाखवणाऱ्या नामाचा साचा?", opts: ["{{مِفْعَال}}", "{{مَفْعَل}}", "{{فَاعِل}}"] },
        { q: "{{مَسْجِد}} चा अर्थ?", opts: ["सजदा करण्याची जागा", "किल्ली", "झाडू"] },
        { q: "{{مِفْتَاح}} कोणत्या प्रकारचे नाम आहे?", opts: ["जागा", "वेळ", "साधन"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "وزن اسم المكان والزمان؟", opts: ["{{مِفْعَال}}", "{{مَفْعَل}}", "{{فَاعِل}}"] },
        { q: "معنى {{مَسْجِد}}؟", opts: ["موضع السجود", "المفتاح", "المكنسة"] },
        { q: "{{مِفْتَاح}} اسم…", opts: ["مكان", "زمان", "آلة"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "Schème du nom de lieu/temps ?", opts: ["{{مِفْعَال}}", "{{مَفْعَل}}", "{{فَاعِل}}"] },
        { q: "{{مَسْجِد}} signifie…", opts: ["lieu de prosternation", "clé", "balai"] },
        { q: "{{مِفْتَاح}} est un nom de…", opts: ["lieu", "temps", "instrument"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "¿Molde del nombre de lugar/tiempo?", opts: ["{{مِفْعَال}}", "{{مَفْعَل}}", "{{فَاعِل}}"] },
        { q: "{{مَسْجِد}} significa…", opts: ["lugar de postración", "llave", "escoba"] },
        { q: "{{مِفْتَاح}} es nombre de…", opts: ["lugar", "tiempo", "instrumento"] }
      ]
    }
  },

  /* ── DIN 13 — Sifat mushabbaha / Ism tafzeel ── */
  13: {
    mr: {
      correct: [2, 0, 1],
      quiz: [
        { q: "कायम गुण दाखवणारे नाम कोणत्या साच्यात येते?", opts: ["{{مَفْعُول}}", "{{أَفْعَل}}", "{{فَعِيل}}"] },
        { q: "तुलना दाखवणारा साचा?", opts: ["{{أَفْعَل}}", "{{فَعِيل}}", "{{فَاعِل}}"] },
        { q: "{{أَكْبَر}} चा अर्थ?", opts: ["लहान", "मोठा (अधिक)", "सारखा"] }
      ]
    },
    ar: {
      correct: [2, 0, 1],
      quiz: [
        { q: "وزن الصفة المشبَّهة؟", opts: ["{{مَفْعُول}}", "{{أَفْعَل}}", "{{فَعِيل}}"] },
        { q: "وزن اسم التفضيل؟", opts: ["{{أَفْعَل}}", "{{فَعِيل}}", "{{فَاعِل}}"] },
        { q: "معنى {{أَكْبَر}}؟", opts: ["أصغر", "أكبر", "مثل"] }
      ]
    },
    fr: {
      correct: [2, 0, 1],
      quiz: [
        { q: "Schème de l'adjectif permanent ?", opts: ["{{مَفْعُول}}", "{{أَفْعَل}}", "{{فَعِيل}}"] },
        { q: "Schème du comparatif ?", opts: ["{{أَفْعَل}}", "{{فَعِيل}}", "{{فَاعِل}}"] },
        { q: "{{أَكْبَر}} signifie…", opts: ["plus petit", "plus grand", "semblable"] }
      ]
    },
    es: {
      correct: [2, 0, 1],
      quiz: [
        { q: "¿Molde del adjetivo permanente?", opts: ["{{مَفْعُول}}", "{{أَفْعَل}}", "{{فَعِيل}}"] },
        { q: "¿Molde del comparativo?", opts: ["{{أَفْعَل}}", "{{فَعِيل}}", "{{فَاعِل}}"] },
        { q: "{{أَكْبَر}} significa…", opts: ["más pequeño", "más grande", "semejante"] }
      ]
    }
  },

  /* ── DIN 14 — Jama ── */
  14: {
    mr: {
      correct: [0, 2, 1],
      quiz: [
        { q: "पुल्लिंग सलग अनेकवचनाचे चिन्ह (मरफूअ)?", opts: ["{{ُونَ}}", "{{ِينَ}}", "{{َات}}"] },
        { q: "स्त्रीलिंग सलग अनेकवचन?", opts: ["{{ُونَ}}", "{{ِينَ}}", "{{َات}}"] },
        { q: "{{كُتُب}} कोणत्या प्रकारचे अनेकवचन आहे?", opts: ["सलग", "तुटके", "द्विवचन"] }
      ]
    },
    ar: {
      correct: [0, 2, 1],
      quiz: [
        { q: "علامة جمع المذكر السالم في الرفع؟", opts: ["{{ُونَ}}", "{{ِينَ}}", "{{َات}}"] },
        { q: "جمع المؤنث السالم؟", opts: ["{{ُونَ}}", "{{ِينَ}}", "{{َات}}"] },
        { q: "{{كُتُب}} أيُّ جمع؟", opts: ["سالم", "تكسير", "مثنى"] }
      ]
    },
    fr: {
      correct: [0, 2, 1],
      quiz: [
        { q: "Marque du pluriel masculin régulier au raf' ?", opts: ["{{ُونَ}}", "{{ِينَ}}", "{{َات}}"] },
        { q: "Pluriel féminin régulier ?", opts: ["{{ُونَ}}", "{{ِينَ}}", "{{َات}}"] },
        { q: "{{كُتُب}} est un pluriel…", opts: ["régulier", "brisé", "duel"] }
      ]
    },
    es: {
      correct: [0, 2, 1],
      quiz: [
        { q: "¿Marca del plural masculino regular en raf'?", opts: ["{{ُونَ}}", "{{ِينَ}}", "{{َات}}"] },
        { q: "¿Plural femenino regular?", opts: ["{{ُونَ}}", "{{ِينَ}}", "{{َات}}"] },
        { q: "{{كُتُب}} es un plural…", opts: ["regular", "fracto", "dual"] }
      ]
    }
  },

  /* ── DIN 15 — Mazeed ── */
  15: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{أَكْرَمَ يُكْرِمُ}} कोणत्या बाबात आहे?", opts: ["तफईल", "इफआल", "मुफाअला"] },
        { q: "{{عَلَّمَ}} चा अर्थ?", opts: ["शिकवले", "शिकले", "जाणले"] },
        { q: "{{تَعَلَّمَ}} कोणत्या बाबात आहे?", opts: ["इफआल", "इस्तिफआल", "तफऊल"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{أَكْرَمَ يُكْرِمُ}} في أيّ باب؟", opts: ["تفعيل", "إفعال", "مفاعلة"] },
        { q: "معنى {{عَلَّمَ}}؟", opts: ["علَّم غيره", "تعلَّم", "عَلِمَ"] },
        { q: "{{تَعَلَّمَ}} في أيّ باب؟", opts: ["إفعال", "استفعال", "تفعُّل"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{أَكْرَمَ يُكْرِمُ}} appartient à…", opts: ["taf'îl", "if'âl", "mufâ'ala"] },
        { q: "{{عَلَّمَ}} signifie…", opts: ["il a enseigné", "il a appris", "il a su"] },
        { q: "{{تَعَلَّمَ}} appartient à…", opts: ["if'âl", "istif'âl", "tafa''ul"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{أَكْرَمَ يُكْرِمُ}} pertenece a…", opts: ["taf'îl", "if'âl", "mufâ'ala"] },
        { q: "{{عَلَّمَ}} significa…", opts: ["enseñó", "aprendió", "supo"] },
        { q: "{{تَعَلَّمَ}} pertenece a…", opts: ["if'âl", "istif'âl", "tafa''ul"] }
      ]
    }
  },

  /* ── DIN 16 — Nahw kya hai ── */
  16: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "नह्व म्हणजे काय?", opts: ["शब्दाची रचना", "वाक्याची रचना", "अक्षरांचा उच्चार"] },
        { q: "एराब म्हणजे काय?", opts: ["शेवटच्या अक्षराची हरकत", "पहिल्या अक्षराची हरकत", "शब्दाचा अर्थ"] },
        { q: "एराब न बदलता वाक्यात बदल केला तर…", opts: ["काहीच होत नाही", "फक्त लिहिताना फरक", "अर्थ बदलतो"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "النحو علمٌ يبحث في…", opts: ["بناء الكلمة", "تركيب الجملة", "مخارج الحروف"] },
        { q: "الإعراب هو…", opts: ["حركة آخر الكلمة", "حركة أول الكلمة", "معنى الكلمة"] },
        { q: "تغيّر الإعراب…", opts: ["لا يؤثّر", "يؤثّر في الكتابة فقط", "يغيّر المعنى"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "Le Nahw étudie…", opts: ["la formation du mot", "la structure de la phrase", "la prononciation"] },
        { q: "L'i'râb est…", opts: ["la voyelle de la dernière lettre", "la voyelle de la 1re lettre", "le sens du mot"] },
        { q: "Changer l'i'râb…", opts: ["ne change rien", "change seulement l'écriture", "change le sens"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "El Nahw estudia…", opts: ["la formación de la palabra", "la estructura de la frase", "la pronunciación"] },
        { q: "El i'râb es…", opts: ["la vocal de la última letra", "la vocal de la 1.ª letra", "el sentido de la palabra"] },
        { q: "Cambiar el i'râb…", opts: ["no cambia nada", "solo cambia la escritura", "cambia el sentido"] }
      ]
    }
  },

  /* ── DIN 17 — I'rab ki 4 halatein ── */
  17: {
    mr: {
      correct: [0, 2, 1],
      quiz: [
        { q: "एराबच्या किती अवस्था आहेत?", opts: ["चार", "तीन", "दोन"] },
        { q: "जर्रचे चिन्ह कोणते?", opts: ["पेश", "जबर", "जेर"] },
        { q: "जझ्म कोणत्या शब्दाला लागू होते?", opts: ["नामाला", "मुदारेला", "माहीला"] }
      ]
    },
    ar: {
      correct: [0, 2, 1],
      quiz: [
        { q: "كم حالةً للإعراب؟", opts: ["أربع", "ثلاث", "اثنتان"] },
        { q: "علامة الجرّ؟", opts: ["الضمة", "الفتحة", "الكسرة"] },
        { q: "الجزم يكون في…", opts: ["الاسم", "المضارع", "الماضي"] }
      ]
    },
    fr: {
      correct: [0, 2, 1],
      quiz: [
        { q: "Combien de cas d'i'râb ?", opts: ["Quatre", "Trois", "Deux"] },
        { q: "Signe du jarr ?", opts: ["damme", "fatha", "kasra"] },
        { q: "Le jazm concerne…", opts: ["le nom", "le mudâri'", "le mâdî"] }
      ]
    },
    es: {
      correct: [0, 2, 1],
      quiz: [
        { q: "¿Cuántos casos de i'râb?", opts: ["Cuatro", "Tres", "Dos"] },
        { q: "¿Signo del yarr?", opts: ["damma", "fatha", "kasra"] },
        { q: "El yazm afecta a…", opts: ["el nombre", "el mudâri'", "el mâdî"] }
      ]
    }
  },

  /* ── DIN 18 — Jumla ismiyya ── */
  18: {
    mr: {
      correct: [1, 2, 0],
      quiz: [
        { q: "इस्मीय वाक्याचे दोन भाग कोणते?", opts: ["कर्ता व कर्म", "मुब्तदा व खबर", "क्रियापद व कर्ता"] },
        { q: "{{اللَّهُ أَحَدٌ}} मध्ये {{أَحَدٌ}} काय आहे?", opts: ["मुब्तदा", "कर्ता", "खबर"] },
        { q: "मुब्तदा व खबर सामान्यतः कोणत्या एराबमध्ये?", opts: ["रफ", "नस्ब", "जर्र"] }
      ]
    },
    ar: {
      correct: [1, 2, 0],
      quiz: [
        { q: "ركنا الجملة الاسمية؟", opts: ["فاعل ومفعول", "مبتدأ وخبر", "فعل وفاعل"] },
        { q: "{{اللَّهُ أَحَدٌ}}: {{أَحَدٌ}}…", opts: ["مبتدأ", "فاعل", "خبر"] },
        { q: "المبتدأ والخبر حكمهما…", opts: ["الرفع", "النصب", "الجرّ"] }
      ]
    },
    fr: {
      correct: [1, 2, 0],
      quiz: [
        { q: "Les deux piliers de la phrase nominale ?", opts: ["sujet et objet", "mubtada et khabar", "verbe et sujet"] },
        { q: "Dans {{اللَّهُ أَحَدٌ}}, {{أَحَدٌ}} est…", opts: ["mubtada", "sujet", "khabar"] },
        { q: "Mubtada et khabar sont…", opts: ["au raf'", "au nasb", "au jarr"] }
      ]
    },
    es: {
      correct: [1, 2, 0],
      quiz: [
        { q: "¿Los dos pilares de la frase nominal?", opts: ["sujeto y objeto", "mubtada y jabar", "verbo y sujeto"] },
        { q: "En {{اللَّهُ أَحَدٌ}}, {{أَحَدٌ}} es…", opts: ["mubtada", "sujeto", "jabar"] },
        { q: "Mubtada y jabar van…", opts: ["en raf'", "en nasb", "en yarr"] }
      ]
    }
  },

  /* ── DIN 19 — Jumla fi'liyya ── */
  19: {
    mr: {
      correct: [0, 1, 2],
      quiz: [
        { q: "क्रियापदीय वाक्याचा क्रम?", opts: ["क्रियापद + कर्ता + कर्म", "कर्ता + क्रियापद", "कर्म + कर्ता"] },
        { q: "कर्ता कोणत्या एराबमध्ये?", opts: ["नस्ब", "रफ", "जर्र"] },
        { q: "{{الدَّرْسَ}} मध्ये एराब?", opts: ["रफ", "जर्र", "नस्ब"] }
      ]
    },
    ar: {
      correct: [0, 1, 2],
      quiz: [
        { q: "ترتيب الجملة الفعلية؟", opts: ["فعل + فاعل + مفعول", "فاعل + فعل", "مفعول + فاعل"] },
        { q: "الفاعل حكمه…", opts: ["النصب", "الرفع", "الجرّ"] },
        { q: "{{الدَّرْسَ}} إعرابها…", opts: ["رفع", "جرّ", "نصب"] }
      ]
    },
    fr: {
      correct: [0, 1, 2],
      quiz: [
        { q: "L'ordre de la phrase verbale ?", opts: ["verbe + sujet + objet", "sujet + verbe", "objet + sujet"] },
        { q: "Le sujet est…", opts: ["au nasb", "au raf'", "au jarr"] },
        { q: "{{الدَّرْسَ}} est…", opts: ["au raf'", "au jarr", "au nasb"] }
      ]
    },
    es: {
      correct: [0, 1, 2],
      quiz: [
        { q: "¿El orden de la frase verbal?", opts: ["verbo + sujeto + objeto", "sujeto + verbo", "objeto + sujeto"] },
        { q: "El sujeto va…", opts: ["en nasb", "en raf'", "en yarr"] },
        { q: "{{الدَّرْسَ}} está…", opts: ["en raf'", "en yarr", "en nasb"] }
      ]
    }
  },

  /* ── DIN 20 — Kana ── */
  20: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{كَانَ}} वाक्यात काय बदलते?", opts: ["काहीच नाही", "खबर नस्ब करते", "मुब्तदा नस्ब करते"] },
        { q: "{{كَانَ الطَّالِبُ مُجْتَهِدًا}} मध्ये {{مُجْتَهِدًا}}?", opts: ["खबर कान (नस्ब)", "खबर (रफ)", "कर्ता"] },
        { q: "खालीलपैकी {{كَانَ}} ची बहीण कोणती?", opts: ["{{إِنَّ}}", "{{لَعَلَّ}}", "{{لَيْسَ}}"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{كَانَ}} تعمل في الجملة…", opts: ["لا تعمل شيئًا", "ترفع الاسم وتنصب الخبر", "تنصب الاسم وترفع الخبر"] },
        { q: "{{كَانَ الطَّالِبُ مُجْتَهِدًا}}: {{مُجْتَهِدًا}}…", opts: ["خبر كان منصوب", "خبر مرفوع", "فاعل"] },
        { q: "أيُّها من أخوات {{كَانَ}}؟", opts: ["{{إِنَّ}}", "{{لَعَلَّ}}", "{{لَيْسَ}}"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{كَانَ}} dans la phrase…", opts: ["ne change rien", "laisse le nom au raf' et met le khabar au nasb", "met le nom au nasb"] },
        { q: "{{كَانَ الطَّالِبُ مُجْتَهِدًا}} : {{مُجْتَهِدًا}} est…", opts: ["khabar de kâna (nasb)", "khabar (raf')", "sujet"] },
        { q: "Laquelle est une sœur de {{كَانَ}} ?", opts: ["{{إِنَّ}}", "{{لَعَلَّ}}", "{{لَيْسَ}}"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{كَانَ}} en la frase…", opts: ["no cambia nada", "deja el nombre en raf' y pone el jabar en nasb", "pone el nombre en nasb"] },
        { q: "{{كَانَ الطَّالِبُ مُجْتَهِدًا}}: {{مُجْتَهِدًا}} es…", opts: ["jabar de kâna (nasb)", "jabar (raf')", "sujeto"] },
        { q: "¿Cuál es hermana de {{كَانَ}}?", opts: ["{{إِنَّ}}", "{{لَعَلَّ}}", "{{لَيْسَ}}"] }
      ]
    }
  }

  /* ── DIN 21 — Inna ── */
  21: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{إِنَّ}} वाक्यात काय करते?", opts: ["खबर नस्ब करते", "मुब्तदा नस्ब व खबर रफ ठेवते", "काहीच नाही"] },
        { q: "{{إِنَّ اللَّهَ غَفُورٌ}} मध्ये {{اللَّهَ}}?", opts: ["इस्म इन्न (नस्ब)", "मुब्तदा (रफ)", "कर्ता"] },
        { q: "इच्छा दाखवण्यासाठी कोणते अक्षर?", opts: ["{{لَعَلَّ}}", "{{لَكِنَّ}}", "{{لَيْتَ}}"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{إِنَّ}} تعمل…", opts: ["تنصب الخبر", "تنصب الاسم وترفع الخبر", "لا تعمل شيئًا"] },
        { q: "{{إِنَّ اللَّهَ غَفُورٌ}}: {{اللَّهَ}}…", opts: ["اسم إنّ منصوب", "مبتدأ مرفوع", "فاعل"] },
        { q: "للتمنّي نستعمل…", opts: ["{{لَعَلَّ}}", "{{لَكِنَّ}}", "{{لَيْتَ}}"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{إِنَّ}} …", opts: ["met le khabar au nasb", "met le nom au nasb et garde le khabar au raf'", "ne change rien"] },
        { q: "{{إِنَّ اللَّهَ غَفُورٌ}} : {{اللَّهَ}} est…", opts: ["nom de inna (nasb)", "mubtada (raf')", "sujet"] },
        { q: "Pour le souhait on emploie…", opts: ["{{لَعَلَّ}}", "{{لَكِنَّ}}", "{{لَيْتَ}}"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "{{إِنَّ}} …", opts: ["pone el jabar en nasb", "pone el nombre en nasb y deja el jabar en raf'", "no cambia nada"] },
        { q: "{{إِنَّ اللَّهَ غَفُورٌ}}: {{اللَّهَ}} es…", opts: ["nombre de inna (nasb)", "mubtada (raf')", "sujeto"] },
        { q: "Para el deseo se usa…", opts: ["{{لَعَلَّ}}", "{{لَكِنَّ}}", "{{لَيْتَ}}"] }
      ]
    }
  },

  /* ── DIN 22 — Harf jarr ── */
  22: {
    mr: {
      correct: [0, 2, 1],
      quiz: [
        { q: "हर्फ जर्रनंतर नाम कोणत्या एराबमध्ये?", opts: ["जर्र", "रफ", "नस्ब"] },
        { q: "«मध्ये» साठी कोणते अक्षर?", opts: ["{{مِنْ}}", "{{إِلَى}}", "{{فِي}}"] },
        { q: "{{بِسْمِ اللَّهِ}} मध्ये {{اللَّهِ}}?", opts: ["रफ", "जर्र", "नस्ब"] }
      ]
    },
    ar: {
      correct: [0, 2, 1],
      quiz: [
        { q: "بعد حرف الجرّ يكون الاسم…", opts: ["مجرورًا", "مرفوعًا", "منصوبًا"] },
        { q: "أيُّ حرفٍ بمعنى «في»؟", opts: ["{{مِنْ}}", "{{إِلَى}}", "{{فِي}}"] },
        { q: "{{بِسْمِ اللَّهِ}}: {{اللَّهِ}}…", opts: ["مرفوع", "مجرور", "منصوب"] }
      ]
    },
    fr: {
      correct: [0, 2, 1],
      quiz: [
        { q: "Après une préposition, le nom est…", opts: ["au jarr", "au raf'", "au nasb"] },
        { q: "Quelle particule signifie « dans » ?", opts: ["{{مِنْ}}", "{{إِلَى}}", "{{فِي}}"] },
        { q: "{{بِسْمِ اللَّهِ}} : {{اللَّهِ}} est…", opts: ["au raf'", "au jarr", "au nasb"] }
      ]
    },
    es: {
      correct: [0, 2, 1],
      quiz: [
        { q: "Tras una preposición el nombre va…", opts: ["en yarr", "en raf'", "en nasb"] },
        { q: "¿Qué partícula significa «en»?", opts: ["{{مِنْ}}", "{{إِلَى}}", "{{فِي}}"] },
        { q: "{{بِسْمِ اللَّهِ}}: {{اللَّهِ}} está…", opts: ["en raf'", "en yarr", "en nasb"] }
      ]
    }
  },

  /* ── DIN 23 — Izafat ── */
  23: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "मुदाफला काय नसते?", opts: ["हरकत", "{{ال}} व तन्वीन", "अक्षरे"] },
        { q: "मुदाफ इलैह कोणत्या एराबमध्ये?", opts: ["जर्र", "रफ", "नस्ब"] },
        { q: "{{كِتَابُ الطَّالِبِ}} चा अर्थ?", opts: ["विद्यार्थ्याचे पुस्तक", "पुस्तकाचा विद्यार्थी", "पुस्तक व विद्यार्थी"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "المضاف لا يدخله…", opts: ["الحركات", "{{ال}} والتنوين", "الحروف"] },
        { q: "المضاف إليه حكمه…", opts: ["الجرّ", "الرفع", "النصب"] },
        { q: "{{كِتَابُ الطَّالِبِ}} معناها…", opts: ["كتاب الطالب", "الطالب الكتاب", "الكتاب والطالب"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "Le mudâf n'a pas…", opts: ["de voyelles", "{{ال}} ni tanwîn", "de lettres"] },
        { q: "Le mudâf ilayh est…", opts: ["au jarr", "au raf'", "au nasb"] },
        { q: "{{كِتَابُ الطَّالِبِ}} signifie…", opts: ["le livre de l'étudiant", "l'étudiant du livre", "le livre et l'étudiant"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "El mudâf no lleva…", opts: ["vocales", "{{ال}} ni tanwín", "letras"] },
        { q: "El mudâf ilayh va…", opts: ["en yarr", "en raf'", "en nasb"] },
        { q: "{{كِتَابُ الطَّالِبِ}} significa…", opts: ["el libro del estudiante", "el estudiante del libro", "el libro y el estudiante"] }
      ]
    }
  },

  /* ── DIN 24 — Na't ── */
  24: {
    mr: {
      correct: [2, 0, 1],
      quiz: [
        { q: "विशेषण विशेष्याच्या कुठे येते?", opts: ["आधी", "कुठेही", "नंतर"] },
        { q: "विशेषण कशात जुळते?", opts: ["एराब, लिंग, वचन", "फक्त अर्थ", "फक्त लिंग"] },
        { q: "{{رَجُلٌ كَرِيمٌ}} मध्ये {{كَرِيمٌ}}?", opts: ["विशेष्य", "विशेषण", "क्रियापद"] }
      ]
    },
    ar: {
      correct: [2, 0, 1],
      quiz: [
        { q: "النعت يأتي…", opts: ["قبل المنعوت", "في أيّ موضع", "بعد المنعوت"] },
        { q: "النعت يطابق المنعوت في…", opts: ["الإعراب والتعريف والنوع والعدد", "المعنى فقط", "النوع فقط"] },
        { q: "{{رَجُلٌ كَرِيمٌ}}: {{كَرِيمٌ}}…", opts: ["منعوت", "نعت", "فعل"] }
      ]
    },
    fr: {
      correct: [2, 0, 1],
      quiz: [
        { q: "L'adjectif vient…", opts: ["avant le nom", "n'importe où", "après le nom"] },
        { q: "L'adjectif s'accorde en…", opts: ["i'râb, définition, genre, nombre", "sens seulement", "genre seulement"] },
        { q: "{{رَجُلٌ كَرِيمٌ}} : {{كَرِيمٌ}} est…", opts: ["le nom décrit", "l'adjectif", "un verbe"] }
      ]
    },
    es: {
      correct: [2, 0, 1],
      quiz: [
        { q: "El adjetivo va…", opts: ["antes del nombre", "en cualquier lugar", "después del nombre"] },
        { q: "El adjetivo concuerda en…", opts: ["i'râb, definición, género, número", "solo el sentido", "solo el género"] },
        { q: "{{رَجُلٌ كَرِيمٌ}}: {{كَرِيمٌ}} es…", opts: ["el descrito", "el adjetivo", "un verbo"] }
      ]
    }
  },

  /* ── DIN 25 — Atf / Badal / Ta'keed ── */
  25: {
    mr: {
      correct: [0, 1, 2],
      quiz: [
        { q: "अनुयायी शब्द कोणता एराब घेतो?", opts: ["पहिल्याचा", "नेहमी रफ", "नेहमी नस्ब"] },
        { q: "{{كُلّ}} व {{جَمِيع}} कशासाठी?", opts: ["बदली", "ठामपणा (ताअकीद)", "जोडणी"] },
        { q: "{{جَاءَ زَيْدٌ وَعَمْرٌو}} मध्ये {{عَمْرٌو}}?", opts: ["बदल", "ताअकीद", "मअतूफ (जोडलेला)"] }
      ]
    },
    ar: {
      correct: [0, 1, 2],
      quiz: [
        { q: "التابع يأخذ إعراب…", opts: ["ما قبله", "الرفع دائمًا", "النصب دائمًا"] },
        { q: "{{كُلّ}} و{{جَمِيع}} تكونان…", opts: ["بدلًا", "توكيدًا", "عطفًا"] },
        { q: "{{جَاءَ زَيْدٌ وَعَمْرٌو}}: {{عَمْرٌو}}…", opts: ["بدل", "توكيد", "معطوف"] }
      ]
    },
    fr: {
      correct: [0, 1, 2],
      quiz: [
        { q: "Le suivant prend l'i'râb…", opts: ["de ce qui le précède", "toujours raf'", "toujours nasb"] },
        { q: "{{كُلّ}} et {{جَمِيع}} servent à…", opts: ["remplacer", "renforcer (ta'kîd)", "coordonner"] },
        { q: "{{جَاءَ زَيْدٌ وَعَمْرٌو}} : {{عَمْرٌو}} est…", opts: ["badal", "ta'kîd", "ma'tûf (coordonné)"] }
      ]
    },
    es: {
      correct: [0, 1, 2],
      quiz: [
        { q: "El seguidor toma el i'râb…", opts: ["del anterior", "siempre raf'", "siempre nasb"] },
        { q: "{{كُلّ}} y {{جَمِيع}} sirven para…", opts: ["sustituir", "reforzar (ta'kîd)", "coordinar"] },
        { q: "{{جَاءَ زَيْدٌ وَعَمْرٌو}}: {{عَمْرٌو}} es…", opts: ["badal", "ta'kîd", "ma'tûf (coordinado)"] }
      ]
    }
  },

  /* ── DIN 26 — Mawsul / Ishara ── */
  26: {
    mr: {
      correct: [1, 2, 0],
      quiz: [
        { q: "स्त्रीलिंग एकवचनासाठी कोणते मौसूल?", opts: ["{{الَّذِي}}", "{{الَّتِي}}", "{{الَّذِينَ}}"] },
        { q: "{{هَذَا}} चा अर्थ?", opts: ["ती", "तो", "हा"] },
        { q: "मौसूलाला काय लागते?", opts: ["सिला (जोडणारे वाक्य)", "फक्त हरकत", "काहीच नाही"] }
      ]
    },
    ar: {
      correct: [1, 2, 0],
      quiz: [
        { q: "الموصول للمفردة المؤنثة؟", opts: ["{{الَّذِي}}", "{{الَّتِي}}", "{{الَّذِينَ}}"] },
        { q: "معنى {{هَذَا}}؟", opts: ["تلك", "ذلك", "هذا"] },
        { q: "الموصول يحتاج…", opts: ["صلةً بعده", "حركةً فقط", "لا شيء"] }
      ]
    },
    fr: {
      correct: [1, 2, 0],
      quiz: [
        { q: "Relatif du féminin singulier ?", opts: ["{{الَّذِي}}", "{{الَّتِي}}", "{{الَّذِينَ}}"] },
        { q: "{{هَذَا}} signifie…", opts: ["celle-là", "celui-là", "celui-ci"] },
        { q: "Le relatif a besoin…", opts: ["d'une proposition (sila)", "d'une voyelle", "de rien"] }
      ]
    },
    es: {
      correct: [1, 2, 0],
      quiz: [
        { q: "¿Relativo femenino singular?", opts: ["{{الَّذِي}}", "{{الَّتِي}}", "{{الَّذِينَ}}"] },
        { q: "{{هَذَا}} significa…", opts: ["aquella", "aquel", "este"] },
        { q: "El relativo necesita…", opts: ["una frase (sila)", "solo una vocal", "nada"] }
      ]
    }
  },

  /* ── DIN 27 — Damair ── */
  27: {
    mr: {
      correct: [0, 2, 1],
      quiz: [
        { q: "«मी» साठी सर्वनाम?", opts: ["{{أَنَا}}", "{{أَنْتَ}}", "{{هُوَ}}"] },
        { q: "{{كِتَابِي}} चा अर्थ?", opts: ["त्याचे पुस्तक", "आमचे पुस्तक", "माझे पुस्तक"] },
        { q: "{{ـهُ}} कोणत्या प्रकारचे सर्वनाम?", opts: ["मुनफसिल", "मुत्तसिल", "इशारा"] }
      ]
    },
    ar: {
      correct: [0, 2, 1],
      quiz: [
        { q: "ضمير المتكلّم المفرد؟", opts: ["{{أَنَا}}", "{{أَنْتَ}}", "{{هُوَ}}"] },
        { q: "معنى {{كِتَابِي}}؟", opts: ["كتابه", "كتابنا", "كتابي"] },
        { q: "{{ـهُ}} ضمير…", opts: ["منفصل", "متصل", "إشارة"] }
      ]
    },
    fr: {
      correct: [0, 2, 1],
      quiz: [
        { q: "Pronom de « je » ?", opts: ["{{أَنَا}}", "{{أَنْتَ}}", "{{هُوَ}}"] },
        { q: "{{كِتَابِي}} signifie…", opts: ["son livre", "notre livre", "mon livre"] },
        { q: "{{ـهُ}} est un pronom…", opts: ["séparé", "attaché", "démonstratif"] }
      ]
    },
    es: {
      correct: [0, 2, 1],
      quiz: [
        { q: "¿Pronombre de «yo»?", opts: ["{{أَنَا}}", "{{أَنْتَ}}", "{{هُوَ}}"] },
        { q: "{{كِتَابِي}} significa…", opts: ["su libro", "nuestro libro", "mi libro"] },
        { q: "{{ـهُ}} es pronombre…", opts: ["separado", "unido", "demostrativo"] }
      ]
    }
  },

  /* ── DIN 28 — Haal / Tamyeez ── */
  28: {
    mr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "हाल कोणत्या एराबमध्ये असतो?", opts: ["रफ", "नस्ब", "जर्र"] },
        { q: "हाल कोणता प्रश्न विचारतो?", opts: ["«कसा?»", "«किती?»", "«कुठे?»"] },
        { q: "तम्यीझ काय स्पष्ट करतो?", opts: ["कर्त्याची अवस्था", "क्रियापदाचा काळ", "अस्पष्ट गोष्टीची जात"] }
      ]
    },
    ar: {
      correct: [1, 0, 2],
      quiz: [
        { q: "الحال حكمه…", opts: ["الرفع", "النصب", "الجرّ"] },
        { q: "الحال جوابُ سؤال…", opts: ["كيف؟", "كم؟", "أين؟"] },
        { q: "التمييز يرفع الإبهام عن…", opts: ["هيئة الفاعل", "زمن الفعل", "المقدار أو الجنس"] }
      ]
    },
    fr: {
      correct: [1, 0, 2],
      quiz: [
        { q: "Le hâl est…", opts: ["au raf'", "au nasb", "au jarr"] },
        { q: "Le hâl répond à « … »", opts: ["comment ?", "combien ?", "où ?"] },
        { q: "Le tamyîz lève l'ambiguïté sur…", opts: ["l'état du sujet", "le temps du verbe", "la quantité ou l'espèce"] }
      ]
    },
    es: {
      correct: [1, 0, 2],
      quiz: [
        { q: "El hâl va…", opts: ["en raf'", "en nasb", "en yarr"] },
        { q: "El hâl responde a « … »", opts: ["¿cómo?", "¿cuánto?", "¿dónde?"] },
        { q: "El tamyîz aclara…", opts: ["el estado del sujeto", "el tiempo del verbo", "la cantidad o especie"] }
      ]
    }
  },

  /* ── DIN 29 — Majrurat / Majzumat ── */
  29: {
    mr: {
      correct: [2, 1, 0],
      quiz: [
        { q: "जर्रची कारणे किती?", opts: ["दोन", "चार", "तीन"] },
        { q: "{{لَمْ}} नंतर मुदारे कोणत्या अवस्थेत?", opts: ["रफ", "जझ्म", "नस्ब"] },
        { q: "{{فِي الْبَيْتِ}} मध्ये जर्रचे कारण?", opts: ["हर्फ जर्र", "इजाफत", "अनुयायी"] }
      ]
    },
    ar: {
      correct: [2, 1, 0],
      quiz: [
        { q: "للمجرورات كم موضعًا؟", opts: ["موضعان", "أربعة", "ثلاثة"] },
        { q: "المضارع بعد {{لَمْ}}…", opts: ["مرفوع", "مجزوم", "منصوب"] },
        { q: "سبب الجرّ في {{فِي الْبَيْتِ}}؟", opts: ["حرف الجرّ", "الإضافة", "التبعية"] }
      ]
    },
    fr: {
      correct: [2, 1, 0],
      quiz: [
        { q: "Combien de causes du jarr ?", opts: ["Deux", "Quatre", "Trois"] },
        { q: "Après {{لَمْ}}, le mudâri' est…", opts: ["au raf'", "au jazm", "au nasb"] },
        { q: "La cause du jarr dans {{فِي الْبَيْتِ}} ?", opts: ["la préposition", "l'annexion", "la coordination"] }
      ]
    },
    es: {
      correct: [2, 1, 0],
      quiz: [
        { q: "¿Cuántas causas tiene el yarr?", opts: ["Dos", "Cuatro", "Tres"] },
        { q: "Tras {{لَمْ}}, el mudâri' va…", opts: ["en raf'", "en yazm", "en nasb"] },
        { q: "La causa del yarr en {{فِي الْبَيْتِ}}?", opts: ["la preposición", "la anexión", "la coordinación"] }
      ]
    }
  },

  /* ── DIN 30 — Khulasa ── */
  30: {
    mr: {
      correct: [0, 1, 2],
      quiz: [
        { q: "एराबच्या अवस्था किती?", opts: ["चार", "तीन", "सहा"] },
        { q: "{{كَانَ}} च्या बहिणींपैकी कोणती नकारासाठी?", opts: ["{{أَصْبَحَ}}", "{{لَيْسَ}}", "{{صَارَ}}"] },
        { q: "{{إِنَّ}} काय करते?", opts: ["खबर नस्ब करते", "काहीच नाही", "मुब्तदा नस्ब करते"] }
      ]
    },
    ar: {
      correct: [0, 1, 2],
      quiz: [
        { q: "كم حالةً للإعراب؟", opts: ["أربع", "ثلاث", "ستّ"] },
        { q: "أيُّ أخوات {{كَانَ}} للنفي؟", opts: ["{{أَصْبَحَ}}", "{{لَيْسَ}}", "{{صَارَ}}"] },
        { q: "{{إِنَّ}} تعمل…", opts: ["تنصب الخبر", "لا تعمل شيئًا", "تنصب الاسم وترفع الخبر"] }
      ]
    },
    fr: {
      correct: [0, 1, 2],
      quiz: [
        { q: "Combien de cas d'i'râb ?", opts: ["Quatre", "Trois", "Six"] },
        { q: "Quelle sœur de {{كَانَ}} sert à nier ?", opts: ["{{أَصْبَحَ}}", "{{لَيْسَ}}", "{{صَارَ}}"] },
        { q: "{{إِنَّ}} …", opts: ["met le khabar au nasb", "ne change rien", "met le nom au nasb et le khabar au raf'"] }
      ]
    },
    es: {
      correct: [0, 1, 2],
      quiz: [
        { q: "¿Cuántos casos de i'râb?", opts: ["Cuatro", "Tres", "Seis"] },
        { q: "¿Qué hermana de {{كَانَ}} sirve para negar?", opts: ["{{أَصْبَحَ}}", "{{لَيْسَ}}", "{{صَارَ}}"] },
        { q: "{{إِنَّ}} …", opts: ["pone el jabar en nasb", "no cambia nada", "pone el nombre en nasb y el jabar en raf'"] }
      ]
    }
  }
};

