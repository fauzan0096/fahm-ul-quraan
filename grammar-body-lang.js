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

  /* Agle din (6 se 30) yahan jodte jayenge — jaise hi koi din judta hai,
     us zubaan par wo din poora usi zubaan mein dikhne lagta hai. */
};
