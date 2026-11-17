/* ==========================================================
   dua-lang.js — DUAON ka tarjuma (नई 4 zubaanein)
   मराठी (mr) · العربية (ar) · Français (fr) · Español (es)

   Har entry dua ke NAAM se judi hai (dua.html ke allDuas ka title, bina number ke) —
   is liye tarteeb badalne se bhi sahi dua ka tarjuma milta hai.
     t = title (dua ka naam)   m = matlab (Urdu tarjuma ki jagah)   f = tafseel (wazahat)

   ⚠️ ARABI DUA KA MATN KABHI NAHI BADALTA — woh har zubaan mein waisa hi rehta hai.
      Yahan sirf us ka tarjuma hai. Jo dua yahan na ho, us par app English tarjuma dikhati hai.
   ========================================================== */

window.FQ_DUA_LANG = {

  /* ═══════ Namaz ki duaein ═══════ */

  "Wudu ke baad ki dua": {
    t: { mr: "वुजूनंतरची दुआ", ar: "دعاء بعد الوضوء", fr: "Doua après les ablutions", es: "Dua después del wudu" },
    m: { mr: "मी साक्ष देतो की अल्लाहशिवाय कोणी उपास्य नाही, तो एकटाच आहे, त्याला कोणी भागीदार नाही; आणि मी साक्ष देतो की मुहम्मद ﷺ त्याचे दास व रसूल आहेत.",
         ar: "أشهد أن لا إله إلا الله وحده لا شريك له، وأشهد أن محمدًا عبده ورسوله.",
         fr: "Je témoigne qu'il n'y a de divinité qu'Allah, unique et sans associé, et je témoigne que Muhammad ﷺ est Son serviteur et Son Messager.",
         es: "Doy testimonio de que no hay divinidad salvo Alá, Único y sin asociado, y de que Mujámmad ﷺ es Su siervo y Mensajero." },
    f: { mr: "जो व्यक्ती व्यवस्थित वुजू करून ही दुआ वाचेल, त्याच्यासाठी जन्नतचे आठही दरवाजे उघडले जातात.",
         ar: "من توضأ فأحسن الوضوء ثم قال هذا، فُتحت له أبواب الجنة الثمانية.",
         fr: "Celui qui fait bien ses ablutions puis récite cette doua : les huit portes du Paradis lui sont ouvertes.",
         es: "Quien hace bien el wudu y luego recita esta dua: se le abren las ocho puertas del Paraíso." }
  },

  "Azan ka jawab": {
    t: { mr: "अजानला उत्तर", ar: "إجابة الأذان", fr: "Répondre à l'adhan", es: "Responder al adhan" },
    m: { mr: "पापापासून दूर राहण्याची शक्ती आणि नेकी करण्याची ताकद अल्लाहच्या मदतीशिवाय नाही.",
         ar: "لا حول عن المعصية ولا قوة على الطاعة إلا بالله.",
         fr: "Il n'y a de force pour éviter le péché ni de puissance pour faire le bien sans l'aide d'Allah.",
         es: "No hay fuerza para evitar el pecado ni poder para hacer el bien sin la ayuda de Alá." },
    f: { mr: "मुअज्झिनचे शब्द पुन्हा म्हणा; फक्त ‘हय्या अलस्सलाह’ आणि ‘हय्या अलल-फलाह’ला उत्तर म्हणून हे म्हणा.",
         ar: "ردّد كلمات المؤذن؛ وفي «حي على الصلاة» و«حي على الفلاح» قل هذا الذكر.",
         fr: "Répétez les paroles du muezzin ; seulement pour « Hayya 'alas-salah » et « Hayya 'alal-falah », dites ceci.",
         es: "Repite las palabras del muecín; solo en respuesta a «Haiya 'ala-s-salah» y «Haiya 'ala-l-falah» di esto." }
  },

  "Azan ke baad shahadat aur raza ka iqrar": {
    t: { mr: "अजाननंतर शहादत आणि समाधानाची कबुली", ar: "الشهادة والرضا بعد الأذان", fr: "Témoignage et contentement après l'adhan", es: "Testimonio y conformidad tras el adhan" },
    m: { mr: "आणि मीही साक्ष देतो की अल्लाहशिवाय कोणी उपास्य नाही, तो एकटाच आहे, त्याला कोणी भागीदार नाही; आणि मुहम्मद ﷺ त्याचे दास व रसूल आहेत. अल्लाह माझा रब, मुहम्मद ﷺ माझे रसूल आणि इस्लाम माझा दीन यावर मी राजी आहे.",
         ar: "وأنا أشهد أن لا إله إلا الله وحده لا شريك له، وأن محمدًا عبده ورسوله، رضيت بالله ربًا وبمحمد رسولًا وبالإسلام دينًا.",
         fr: "Et je témoigne qu'il n'y a de divinité qu'Allah, unique sans associé, et que Muhammad ﷺ est Son serviteur et Messager. Je suis satisfait d'Allah comme Seigneur, de Muhammad ﷺ comme Messager et de l'islam comme religion.",
         es: "Y doy testimonio de que no hay divinidad salvo Alá, Único sin asociado, y de que Mujámmad ﷺ es Su siervo y Mensajero. Estoy complacido con Alá como Señor, con Mujámmad ﷺ como Mensajero y con el islam como religión." },
    f: { mr: "जो मुअज्झिन ऐकून हे म्हणेल, त्याचे पाप माफ केले जातात.",
         ar: "من قاله بعد سماع الأذان غُفرت ذنوبه.",
         fr: "Celui qui le dit après avoir écouté l'adhan, ses péchés sont pardonnés.",
         es: "A quien lo diga tras escuchar el adhan, se le perdonan sus pecados." }
  },

  "Azan ke baad darood aur wasila ki dua": {
    t: { mr: "अजाननंतर दुरुद आणि वसिल्याची दुआ", ar: "الصلاة على النبي ودعاء الوسيلة بعد الأذان", fr: "Bénédiction et doua du wasila après l'adhan", es: "Bendición y dua del wasila tras el adhan" },
    m: { mr: "हे अल्लाह! मुहम्मद ﷺ आणि त्यांच्या कुटुंबावर दया पाठव, जशी तू इब्राहीम आणि त्यांच्या कुटुंबावर पाठवली; निःसंशय तू स्तुतीपात्र व महिमावान आहेस. हे अल्लाह! मुहम्मद ﷺ आणि त्यांच्या कुटुंबावर बरकत पाठव, जशी तू इब्राहीम आणि त्यांच्या कुटुंबावर पाठवली. नंतर: हे अल्लाह! या पूर्ण हाकेच्या आणि उभ्या असलेल्या नमाजाच्या रबा! मुहम्मद ﷺ यांना वसिला आणि फजीलत दे, आणि ज्या मकामे महमूदचे तू वचन दिले तिथे त्यांना पोहोचव.",
         ar: "اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد، اللهم بارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد. ثم: اللهم رب هذه الدعوة التامة والصلاة القائمة آت محمدًا الوسيلة والفضيلة وابعثه مقامًا محمودًا الذي وعدته.",
         fr: "Ô Allah, prie sur Muhammad et sa famille comme Tu as prié sur Ibrahim et sa famille ; Tu es Digne de louange, Glorieux. Ô Allah, bénis Muhammad et sa famille comme Tu as béni Ibrahim et sa famille. Puis : Ô Allah, Seigneur de cet appel parfait et de la prière qui va être accomplie, accorde à Muhammad le wasila et la faveur, et élève-le au rang loué que Tu lui as promis.",
         es: "Oh Alá, bendice a Mujámmad y a su familia como bendijiste a Ibrahim y a su familia; Tú eres Digno de alabanza, Glorioso. Oh Alá, colma de bendiciones a Mujámmad y a su familia como colmaste a Ibrahim y a su familia. Luego: Oh Alá, Señor de esta llamada perfecta y de la oración que se va a cumplir, concede a Mujámmad el wasila y la excelencia, y elévalo al rango alabado que le prometiste." },
    f: { mr: "जो ही दुआ वाचेल, कयामती दिवशी नबी ﷺ यांची शिफारस त्याच्यासाठी अनिवार्य होते.",
         ar: "من قالها وجبت له شفاعة النبي ﷺ يوم القيامة.",
         fr: "Celui qui récite cette doua, l'intercession du Prophète ﷺ lui est assurée au Jour du Jugement.",
         es: "A quien la recite, le corresponderá la intercesión del Profeta ﷺ en el Día del Juicio." }
  },

  "Masjid mein dakhil hote waqt": {
    t: { mr: "मशिदीत प्रवेश करताना", ar: "دعاء دخول المسجد", fr: "En entrant à la mosquée", es: "Al entrar en la mezquita" },
    m: { mr: "हे अल्लाह! माझ्यासाठी तुझ्या दयेचे दरवाजे उघड.",
         ar: "اللهم افتح لي أبواب رحمتك.",
         fr: "Ô Allah, ouvre-moi les portes de Ta miséricorde.",
         es: "Oh Alá, ábreme las puertas de Tu misericordia." },
    f: { mr: "मशिदीत प्रवेश करताना हे वाचणे सुन्नत आहे.",
         ar: "من سنن دخول المسجد.",
         fr: "C'est une sunna de le réciter en entrant à la mosquée.",
         es: "Es sunna recitarlo al entrar en la mezquita." }
  },

  "Masjid se nikalte waqt": {
    t: { mr: "मशिदीतून बाहेर पडताना", ar: "دعاء الخروج من المسجد", fr: "En sortant de la mosquée", es: "Al salir de la mezquita" },
    m: { mr: "हे अल्लाह! मी तुझ्याकडे तुझ्या कृपेची मागणी करतो.",
         ar: "اللهم إني أسألك من فضلك.",
         fr: "Ô Allah, je Te demande de Ta faveur.",
         es: "Oh Alá, Te pido de Tu favor." },
    f: { mr: "मशिदीतून बाहेर पडताना ही दुआ वाचतात.",
         ar: "تُقال عند الخروج من المسجد.",
         fr: "On la récite en sortant de la mosquée.",
         es: "Se recita al salir de la mezquita." }
  },

  "Istiftah (1) - Allahumma ba'id bayni": {
    t: { mr: "इस्तिफ्ताह (१)", ar: "دعاء الاستفتاح (١)", fr: "Istiftah (1)", es: "Istiftah (1)" },
    m: { mr: "हे अल्लाह! माझ्या आणि माझ्या पापांमध्ये इतके अंतर कर जितके तू पूर्व आणि पश्चिमेमध्ये ठेवले. हे अल्लाह! मला पापांपासून असे स्वच्छ कर जसे पांढरे कापड मळापासून स्वच्छ होते. हे अल्लाह! माझी पापे बर्फ, पाणी आणि गारांनी धुवून टाक.",
         ar: "اللهم باعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب، اللهم نقني من الخطايا كما ينقى الثوب الأبيض من الدنس، اللهم اغسلني من خطاياي بالثلج والماء والبرد.",
         fr: "Ô Allah, éloigne-moi de mes péchés comme Tu as éloigné l'Orient de l'Occident. Ô Allah, purifie-moi de mes péchés comme le vêtement blanc est purifié de la saleté. Ô Allah, lave mes péchés avec la neige, l'eau et la grêle.",
         es: "Oh Alá, aleja de mí mis pecados como alejaste el oriente del occidente. Oh Alá, purifícame de mis pecados como se purifica el vestido blanco de la suciedad. Oh Alá, lava mis pecados con la nieve, el agua y el granizo." },
    f: { mr: "नमाज सुरू करण्याच्या दुआंपैकी एक.",
         ar: "من أدعية استفتاح الصلاة.",
         fr: "L'une des douas d'ouverture de la prière.",
         es: "Una de las duas de apertura de la oración." }
  },

  "Istiftah (2) - Subhanaka Allahumma": {
    t: { mr: "इस्तिफ्ताह (२)", ar: "دعاء الاستفتاح (٢)", fr: "Istiftah (2)", es: "Istiftah (2)" },
    m: { mr: "हे अल्लाह! तू पवित्र आहे आणि तुझीच स्तुती आहे; तुझे नाव बरकतवाले आहे, तुझी शान उंच आहे आणि तुझ्याशिवाय कोणी उपास्य नाही.",
         ar: "سبحانك اللهم وبحمدك، وتبارك اسمك، وتعالى جدك، ولا إله غيرك.",
         fr: "Gloire à Toi, ô Allah, et louange à Toi ; Ton nom est béni, Ta majesté est sublime, et il n'y a de divinité que Toi.",
         es: "Gloria a Ti, oh Alá, y alabanza a Ti; bendito es Tu nombre, sublime es Tu majestad, y no hay divinidad sino Tú." },
    f: { mr: "हीही नमाजच्या सुरुवातीची दुआ आहे.",
         ar: "من أدعية استفتاح الصلاة أيضًا.",
         fr: "Aussi une doua d'ouverture de la prière.",
         es: "También es una dua de apertura de la oración." }
  },

  "Istiftah (3) - Wajjahtu wajhiya": {
    t: { mr: "इस्तिफ्ताह (३)", ar: "دعاء الاستفتاح (٣)", fr: "Istiftah (3)", es: "Istiftah (3)" },
    m: { mr: "मी माझा चेहरा त्या सत्तेकडे केला जिने आकाशे व धरती निर्माण केली, एकनिष्ठ होऊन, आणि मी मुश्रिकांमध्ये नाही. निःसंशय माझी नमाज, माझी कुर्बानी, माझे जगणे आणि माझे मरण सर्व अल्लाहसाठी आहे, जो सर्व जगांचा रब आहे; त्याला कोणी भागीदार नाही. याचा मला आदेश दिला गेला आहे आणि मी आज्ञाधारकांमध्ये आहे. हे अल्लाह! तूच राजा आहेस, तुझ्याशिवाय कोणी उपास्य नाही; तू माझा रब आहेस आणि मी तुझा दास आहे. मी माझ्या जिवावर अन्याय केला आणि माझ्या पापाची कबुली देतो; तर माझी सर्व पापे माफ कर, तुझ्याशिवाय कोणी पापे माफ करत नाही. मला उत्तम अखलाकाचे मार्गदर्शन कर, तुझ्याशिवाय कोणी त्याचे मार्गदर्शन करत नाही; आणि माझ्यापासून वाईट अखलाक दूर कर, तुझ्याशिवाय कोणी ते दूर करत नाही. मी हजर आहे आणि तुझ्या आज्ञेसाठी तयार आहे; सर्व भले तुझ्या हातात आहे आणि वाईट तुझ्याकडे नाही. मी तुझ्याच आधारावर आहे आणि तुझ्याकडेच परतणार आहे. तू महान व उंच आहेस; मी तुझी क्षमा मागतो आणि तुझ्याकडे तौबा करतो.",
         ar: "وجهت وجهي للذي فطر السماوات والأرض حنيفًا وما أنا من المشركين، إن صلاتي ونسكي ومحياي ومماتي لله رب العالمين، لا شريك له وبذلك أمرت وأنا من المسلمين. اللهم أنت الملك لا إله إلا أنت، أنت ربي وأنا عبدك، ظلمت نفسي واعترفت بذنبي فاغفر لي ذنوبي جميعًا، إنه لا يغفر الذنوب إلا أنت، واهدني لأحسن الأخلاق لا يهدي لأحسنها إلا أنت، واصرف عني سيئها لا يصرف عني سيئها إلا أنت، لبيك وسعديك، والخير كله في يديك، والشر ليس إليك، أنا بك وإليك، تباركت وتعاليت، أستغفرك وأتوب إليك.",
         fr: "J'ai tourné mon visage vers Celui qui a créé les cieux et la terre, en pur monothéiste, et je ne suis pas du nombre des associateurs. Ma prière, mon sacrifice, ma vie et ma mort sont pour Allah, Seigneur des mondes, sans associé ; tel est l'ordre qui m'a été donné, et je suis du nombre des soumis. Ô Allah, Tu es le Roi, il n'y a de divinité que Toi ; Tu es mon Seigneur et je suis Ton serviteur. Je me suis fait du tort et je reconnais mon péché : pardonne-moi tous mes péchés, nul ne pardonne les péchés sauf Toi. Guide-moi vers les meilleurs caractères, nul ne guide vers eux sauf Toi ; éloigne de moi les mauvais, nul ne les éloigne sauf Toi. Me voici à Ton service, tout bien est entre Tes mains, et le mal ne T'est pas attribué. Je suis par Toi et vers Toi. Béni et exalté sois-Tu ; je Te demande pardon et je reviens à Toi.",
         es: "He vuelto mi rostro hacia Quien creó los cielos y la tierra, como monoteísta puro, y no soy de los asociadores. Mi oración, mi sacrificio, mi vida y mi muerte son para Alá, Señor de los mundos, sin asociado; así se me ha ordenado y soy de los sometidos. Oh Alá, Tú eres el Rey, no hay divinidad sino Tú; Tú eres mi Señor y yo soy Tu siervo. Me he hecho injusticia y reconozco mi pecado: perdona todos mis pecados, nadie perdona los pecados sino Tú. Guíame a los mejores caracteres, nadie guía a ellos sino Tú; aparta de mí los malos, nadie los aparta sino Tú. Aquí estoy a Tu servicio; todo bien está en Tus manos y el mal no se Te atribuye. Soy por Ti y hacia Ti. Bendito y exaltado seas; Te pido perdón y a Ti vuelvo." },
    f: { mr: "ही सर्वांत लांब व सर्वांगीण इस्तिफ्ताह दुआ आहे.",
         ar: "أطول أدعية الاستفتاح وأجمعها.",
         fr: "La plus longue et la plus complète des douas d'ouverture.",
         es: "La más larga y completa de las duas de apertura." }
  },

  "Ta'awwudh": {
    t: { mr: "ता‘अव्वुझ (पनाह मागणे)", ar: "التعوذ", fr: "Ta'awwudh (demande de protection)", es: "Ta'awwudh (pedir protección)" },
    m: { mr: "मी धिक्कारलेल्या शैतानापासून अल्लाहची पनाह मागतो.",
         ar: "أعوذ بالله من الشيطان الرجيم.",
         fr: "Je cherche refuge auprès d'Allah contre Satan le maudit.",
         es: "Busco refugio en Alá contra Satán el maldito." },
    f: { mr: "वाचन सुरू करण्यापूर्वी वाचली जाते.",
         ar: "تُقال قبل القراءة.",
         fr: "On la récite avant la récitation.",
         es: "Se recita antes de la recitación." }
  },

  "Surah Al-Fatiha": {
    t: { mr: "सूरा अल-फातिहा", ar: "سورة الفاتحة", fr: "Sourate Al-Fâtiha", es: "Sura Al-Fátiha" },
    m: { mr: "अल्लाहच्या नावाने जो अत्यंत दयाळू, परम दयाळू आहे. सर्व स्तुती अल्लाहसाठी जो सर्व जगांचा रब. अत्यंत दयाळू, परम दयाळू. न्यायाच्या दिवसाचा मालिक. आम्ही फक्त तुझीच उपासना करतो आणि तुझ्याकडेच मदत मागतो. आम्हाला सरळ मार्ग दाखव, ज्यांच्यावर तू कृपा केली त्यांचा मार्ग; ज्यांच्यावर प्रकोप झाला त्यांचा नाही आणि जे मार्गभ्रष्ट झाले त्यांचाही नाही.",
         ar: "بسم الله الرحمن الرحيم. الحمد لله رب العالمين. الرحمن الرحيم. مالك يوم الدين. إياك نعبد وإياك نستعين. اهدنا الصراط المستقيم. صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين.",
         fr: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur des mondes. Le Tout Miséricordieux, le Très Miséricordieux. Maître du Jour du Jugement. C'est Toi que nous adorons, et c'est Toi dont nous implorons le secours. Guide-nous vers le droit chemin, le chemin de ceux que Tu as comblés de faveurs, non pas celui de ceux qui ont encouru Ta colère, ni des égarés.",
         es: "En el nombre de Alá, el Compasivo, el Misericordioso. Alabanza a Alá, Señor de los mundos. El Compasivo, el Misericordioso. Dueño del Día del Juicio. Solo a Ti adoramos y solo a Ti pedimos ayuda. Guíanos al camino recto, el camino de quienes Tú has agraciado, no el de los que han incurrido en Tu ira ni el de los extraviados." },
    f: { mr: "हे नमाजचे रुक्न आहे; याशिवाय नमाज होत नाही.",
         ar: "هي ركن في الصلاة، لا تصح الصلاة بدونها.",
         fr: "C'est un pilier de la prière : sans elle, la prière n'est pas valable.",
         es: "Es un pilar de la oración: sin ella, la oración no es válida." }
  },

  "Ameen": {
    t: { mr: "आमीन", ar: "آمين", fr: "Amine", es: "Amín" },
    m: { mr: "हे अल्लाह! आमची दुआ कबूल कर.",
         ar: "اللهم استجب لنا.",
         fr: "Ô Allah, exauce notre doua.",
         es: "Oh Alá, acepta nuestra dua." },
    f: { mr: "जेव्हा इमाम आमीन म्हणेल तेव्हा मुक्तदीही आमीन म्हणावे.",
         ar: "إذا قال الإمام آمين قال المأموم آمين.",
         fr: "Quand l'imam dit « Amine », celui qui suit dit « Amine ».",
         es: "Cuando el imam dice «Amín», quien le sigue dice «Amín»." }
  },

  "Ruku ki tasbeeh": {
    t: { mr: "रुकूची तस्बीह", ar: "تسبيح الركوع", fr: "Tasbih du ruku'", es: "Tasbih del ruku" },
    m: { mr: "माझा रब पवित्र आहे, अत्यंत महान.",
         ar: "سبحان ربي العظيم.",
         fr: "Gloire à mon Seigneur, le Très Grand.",
         es: "Gloria a mi Señor, el Más Grande." },
    f: { mr: "रुकूमध्ये वाचली जाते; तीन वेळा वाचणे उत्तम.",
         ar: "تُقال في الركوع، والأفضل ثلاثًا.",
         fr: "On la récite dans le ruku', trois fois de préférence.",
         es: "Se recita en el ruku, preferiblemente tres veces." }
  },

  "Ruku ki dua (Ali RA)": {
    t: { mr: "रुकूची दुआ (अली र.अ.)", ar: "دعاء الركوع (عن علي رضي الله عنه)", fr: "Doua du ruku' (Ali)", es: "Dua del ruku (Ali)" },
    m: { mr: "हे अल्लाह! मी तुझ्यासाठी रुकू केला, तुझ्यावर ईमान राखले आणि तुझा आज्ञाधारक झालो; माझे कान, माझे डोळे, माझा मेंदू, माझी हाडे आणि माझे स्नायू तुझ्यासाठी नम्र झाले.",
         ar: "اللهم لك ركعت وبك آمنت ولك أسلمت، خشع لك سمعي وبصري ومخي وعظمي وعصبي.",
         fr: "Ô Allah, c'est pour Toi que je me suis incliné, en Toi que j'ai cru et à Toi que je me suis soumis ; mon ouïe, ma vue, mon cerveau, mes os et mes nerfs se sont humiliés devant Toi.",
         es: "Oh Alá, por Ti me he inclinado, en Ti he creído y a Ti me he sometido; mi oído, mi vista, mi cerebro, mis huesos y mis nervios se han humillado ante Ti." },
    f: { mr: "नबी ﷺ रुकूमध्ये ही दुआही वाचत असत.",
         ar: "كان النبي ﷺ يقولها في الركوع أيضًا.",
         fr: "Le Prophète ﷺ récitait aussi cette doua dans le ruku'.",
         es: "El Profeta ﷺ también recitaba esta dua en el ruku." }
  },

  "Ruku/Sajde mein gunahon ki muafi": {
    t: { mr: "रुकू व सजद्यात पापांची माफी", ar: "الاستغفار في الركوع والسجود", fr: "Demande de pardon dans le ruku' et le sujud", es: "Pedir perdón en el ruku y el suyud" },
    m: { mr: "हे अल्लाह! हे आमच्या रबा! तू पवित्र आहे आणि तुझीच स्तुती आहे; हे अल्लाह! मला माफ कर.",
         ar: "سبحانك اللهم ربنا وبحمدك، اللهم اغفر لي.",
         fr: "Gloire à Toi, ô Allah notre Seigneur, et louange à Toi ; ô Allah, pardonne-moi.",
         es: "Gloria a Ti, oh Alá nuestro Señor, y alabanza a Ti; oh Alá, perdóname." },
    f: { mr: "नबी ﷺ रुकू आणि सजद्यात ही दुआ वाचत असत.",
         ar: "كان النبي ﷺ يقولها في الركوع والسجود.",
         fr: "Le Prophète ﷺ la récitait dans le ruku' et le sujud.",
         es: "El Profeta ﷺ la recitaba en el ruku y el suyud." }
  }
};

/* ===== duaTr mein bhar do (dua.html ke allDuas se index nikaal kar) ===== */
(function () {
  'use strict';
  var MAP = { t: 'title', m: 'urdu', f: 'tafseel' }, L = ['mr', 'ar', 'fr', 'es'];
  function key(s) { return String(s || '').replace(/^\s*\d+\.\s*/, '').replace(/\s+/g, ' ').trim(); }
  function apply() {
    var list = window.allDuas, tr = window.duaTr;
    if (!list || !list.length || !tr) return false;
    var src = window.FQ_DUA_LANG || {}, n = 0;
    for (var i = 0; i < list.length; i++) {
      var e = src[key(list[i].title)];
      if (!e) continue;
      var k = String(list[i]._i != null ? list[i]._i : i);
      if (!tr[k]) tr[k] = {};
      for (var f in MAP) {
        var grp = e[f]; if (!grp) continue;
        for (var j = 0; j < L.length; j++) {
          var v = L[j];
          if (grp[v]) { tr[k][MAP[f] + '_' + v] = grp[v]; n++; }
        }
      }
    }
    window.FQ_DUA_LANG_DONE = n;   // kitne tarjume lag gaye
    return n > 0;
  }
  window.FQDuaLangApply = apply;
  if (!apply()) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
    else window.addEventListener('load', apply);
  }
})();


/* ═══════════════════════════════════════════════════════════
   Namaz ki duaein (16 – 30)
   ═══════════════════════════════════════════════════════════ */
Object.assign(window.FQ_DUA_LANG, {

  "Ruku/Sajde mein Subbuhun Quddus": {
    t: { mr: "रुकू व सजद्यात ‘सुब्बूहुन कुद्दूस’", ar: "سبوح قدوس في الركوع والسجود", fr: "« Subbuhun Quddus » dans le ruku' et le sujud", es: "«Subbuhun Quddus» en el ruku y el suyud" },
    m: { mr: "अत्यंत पवित्र, अत्यंत पावन, देवदूतांचा आणि जिब्राईल (रूह) चा रब.",
         ar: "سبوح قدوس، رب الملائكة والروح.",
         fr: "Très Glorifié, Très Saint, Seigneur des anges et de l'Esprit.",
         es: "Muy Glorificado, Muy Santo, Señor de los ángeles y del Espíritu." },
    f: { mr: "नबी ﷺ रुकू आणि सजद्यात हेही म्हणत असत.",
         ar: "كان النبي ﷺ يقوله في الركوع والسجود.",
         fr: "Le Prophète ﷺ le disait dans le ruku' et le sujud.",
         es: "El Profeta ﷺ lo decía en el ruku y el suyud." }
  },

  "Ruku se uthte hue (Qawmah)": {
    t: { mr: "रुकूतून उठताना (कौमा)", ar: "الرفع من الركوع (القومة)", fr: "En se relevant du ruku' (qawmah)", es: "Al levantarse del ruku (qawmah)" },
    m: { mr: "ज्याने त्याची स्तुती केली, अल्लाहने ती ऐकली. हे आमच्या रबा! तुझीच स्तुती आहे — खूप, पवित्र आणि बरकतीची स्तुती.",
         ar: "سمع الله لمن حمده، ربنا ولك الحمد حمدًا كثيرًا طيبًا مباركًا فيه.",
         fr: "Allah entend celui qui Le loue. Notre Seigneur, à Toi la louange, louange abondante, pure et bénie.",
         es: "Alá escucha a quien Le alaba. Señor nuestro, a Ti la alabanza, alabanza abundante, pura y bendita." },
    f: { mr: "एका सहाबीने हे वाचले तेव्हा नबी ﷺ म्हणाले की ३० पेक्षा जास्त देवदूत ते लिहिण्यासाठी घाई करत होते.",
         ar: "قالها صحابي فقال النبي ﷺ: «رأيت ثلاثين ملكًا يبتدرونها أيهم يكتبها».",
         fr: "Un compagnon la récita ; le Prophète ﷺ dit que plus de trente anges se hâtaient de l'écrire.",
         es: "Un compañero la recitó y el Profeta ﷺ dijo que más de treinta ángeles se apresuraban a escribirla." }
  },

  "Sajde ki tasbeeh": {
    t: { mr: "सजद्याची तस्बीह", ar: "تسبيح السجود", fr: "Tasbih du sujud", es: "Tasbih del suyud" },
    m: { mr: "माझा रब पवित्र आहे, सर्वांत उंच.",
         ar: "سبحان ربي الأعلى.",
         fr: "Gloire à mon Seigneur, le Très-Haut.",
         es: "Gloria a mi Señor, el Altísimo." },
    f: { mr: "सजद्यात वाचली जाते; तीन वेळा वाचणे उत्तम.",
         ar: "تُقال في السجود، والأفضل ثلاثًا.",
         fr: "On la récite dans le sujud, trois fois de préférence.",
         es: "Se recita en el suyud, preferiblemente tres veces." }
  },

  "Sajde ki dua (Ali RA)": {
    t: { mr: "सजद्याची दुआ (अली र.अ.)", ar: "دعاء السجود (عن علي رضي الله عنه)", fr: "Doua du sujud (Ali)", es: "Dua del suyud (Ali)" },
    m: { mr: "हे अल्लाह! मी तुझ्यासाठी सजदा केला, तुझ्यावर ईमान राखले आणि तुझा आज्ञाधारक झालो. माझा चेहरा त्या सत्तेस सजदा करतो जिने त्याला निर्माण केले, आकार दिला आणि त्याचे कान व डोळे उघडले. अल्लाह बरकतवाला आहे, सर्वोत्तम निर्माणकर्ता.",
         ar: "اللهم لك سجدت وبك آمنت ولك أسلمت، سجد وجهي للذي خلقه وصوره وشق سمعه وبصره، تبارك الله أحسن الخالقين.",
         fr: "Ô Allah, c'est pour Toi que je me suis prosterné, en Toi que j'ai cru et à Toi que je me suis soumis. Mon visage s'est prosterné devant Celui qui l'a créé, lui a donné forme, et lui a ouvert l'ouïe et la vue. Béni soit Allah, le meilleur des créateurs.",
         es: "Oh Alá, por Ti me he postrado, en Ti he creído y a Ti me he sometido. Mi rostro se postró ante Quien lo creó, le dio forma y le abrió el oído y la vista. Bendito sea Alá, el mejor de los creadores." },
    f: { mr: "नबी ﷺ सजद्यात ही दुआ वाचत असत.",
         ar: "كان النبي ﷺ يقولها في السجود.",
         fr: "Le Prophète ﷺ la récitait dans le sujud.",
         es: "El Profeta ﷺ la recitaba en el suyud." }
  },

  "Sajde mein saare gunahon ki muafi": {
    t: { mr: "सजद्यात सर्व पापांची माफी", ar: "سؤال مغفرة الذنوب كلها في السجود", fr: "Demander le pardon de tous les péchés dans le sujud", es: "Pedir perdón de todos los pecados en el suyud" },
    m: { mr: "हे अल्लाह! माझी सर्व पापे माफ कर — लहान व मोठी, पहिली व शेवटची, उघडी व लपलेली.",
         ar: "اللهم اغفر لي ذنبي كله، دقه وجله، وأوله وآخره، وعلانيته وسره.",
         fr: "Ô Allah, pardonne-moi tous mes péchés : les petits et les grands, les premiers et les derniers, les apparents et les cachés.",
         es: "Oh Alá, perdona todos mis pecados: los pequeños y los grandes, los primeros y los últimos, los manifiestos y los ocultos." },
    f: { mr: "सजदा ही अशी अवस्था आहे जेव्हा बंदा आपल्या रबाच्या सर्वात जवळ असतो; त्यात दुआ जास्त करा.",
         ar: "السجود أقرب ما يكون العبد من ربه، فأكثروا فيه الدعاء.",
         fr: "Le sujud est le moment où le serviteur est le plus proche de son Seigneur : multipliez-y les invocations.",
         es: "El suyud es el momento en que el siervo está más cerca de su Señor: multiplicad las súplicas en él." }
  },

  "Do sajdon ke darmiyan (Jalsa)": {
    t: { mr: "दोन सजद्यांमध्ये (जल्सा)", ar: "بين السجدتين (الجلسة)", fr: "Entre les deux prosternations (jalsah)", es: "Entre las dos postraciones (yalsa)" },
    m: { mr: "हे माझ्या रबा! मला माफ कर, हे माझ्या रबा! मला माफ कर.",
         ar: "رب اغفر لي، رب اغفر لي.",
         fr: "Mon Seigneur, pardonne-moi ; mon Seigneur, pardonne-moi.",
         es: "Señor mío, perdóname; Señor mío, perdóname." },
    f: { mr: "दोन सजद्यांमध्ये ही दुआ वाचली जाते.",
         ar: "تُقال بين السجدتين.",
         fr: "On la récite entre les deux prosternations.",
         es: "Se recita entre las dos postraciones." }
  },

  "Do sajdon ke darmiyan mukammal dua": {
    t: { mr: "दोन सजद्यांमधील पूर्ण दुआ", ar: "الدعاء الكامل بين السجدتين", fr: "Doua complète entre les deux prosternations", es: "Dua completa entre las dos postraciones" },
    m: { mr: "हे अल्लाह! मला माफ कर, माझ्यावर दया कर, माझी अवस्था सुधार, मला मार्गदर्शन दे आणि मला रोजी दे.",
         ar: "اللهم اغفر لي، وارحمني، واجبرني، واهدني، وارزقني.",
         fr: "Ô Allah, pardonne-moi, fais-moi miséricorde, remets-moi debout, guide-moi et accorde-moi la subsistance.",
         es: "Oh Alá, perdóname, ten misericordia de mí, restáuranos, guíame y concédeme el sustento." },
    f: { mr: "नबी ﷺ दोन सजद्यांमध्ये ही दुआ वाचत असत.",
         ar: "كان النبي ﷺ يقولها بين السجدتين.",
         fr: "Le Prophète ﷺ la récitait entre les deux prosternations.",
         es: "El Profeta ﷺ la recitaba entre las dos postraciones." }
  },

  "Tashahhud (At-Tahiyyat)": {
    t: { mr: "तशह्हुद (अत-तहिय्यात)", ar: "التشهد (التحيات)", fr: "Tashahhud (At-Tahiyyat)", es: "Tashahhud (At-Tahiyyat)" },
    m: { mr: "सर्व वाचिक, शारीरिक व आर्थिक उपासना अल्लाहसाठी आहे. हे नबी ﷺ! तुमच्यावर शांती, अल्लाहची दया व बरकती असो. आमच्यावर आणि अल्लाहच्या नेक बंद्यांवरही शांती असो. मी साक्ष देतो की अल्लाहशिवाय कोणी उपास्य नाही आणि मी साक्ष देतो की मुहम्मद ﷺ त्याचे दास व रसूल आहेत.",
         ar: "التحيات لله والصلوات والطيبات، السلام عليك أيها النبي ورحمة الله وبركاته، السلام علينا وعلى عباد الله الصالحين، أشهد أن لا إله إلا الله وأشهد أن محمدًا عبده ورسوله.",
         fr: "Les salutations, les prières et les bonnes choses sont pour Allah. Paix sur toi, ô Prophète, ainsi que la miséricorde d'Allah et Ses bénédictions. Paix sur nous et sur les serviteurs vertueux d'Allah. Je témoigne qu'il n'y a de divinité qu'Allah, et je témoigne que Muhammad est Son serviteur et Messager.",
         es: "Las salutaciones, las oraciones y las cosas buenas son para Alá. La paz sea contigo, oh Profeta, y la misericordia de Alá y Sus bendiciones. La paz sea con nosotros y con los siervos virtuosos de Alá. Doy testimonio de que no hay divinidad salvo Alá y de que Mujámmad es Su siervo y Mensajero." },
    f: { mr: "ही नमाजच्या कयादाची दुआ आहे; त्यानंतर दुरुद वाचला जातो.",
         ar: "هي دعاء القعدة في الصلاة، ويُقرأ بعدها الصلاة على النبي.",
         fr: "C'est la doua de la station assise dans la prière ; on récite ensuite la bénédiction sur le Prophète.",
         es: "Es la dua de la posición sentada en la oración; después se recita la bendición sobre el Profeta." }
  },

  "Darood Ibrahim": {
    t: { mr: "दुरुदे इब्राहीम", ar: "الصلاة الإبراهيمية", fr: "Bénédiction d'Ibrahim", es: "Bendición de Ibrahim" },
    m: { mr: "हे अल्लाह! मुहम्मद ﷺ आणि त्यांच्या कुटुंबावर दया पाठव, जशी तू इब्राहीम आणि त्यांच्या कुटुंबावर पाठवली; निःसंशय तू स्तुतीपात्र व महिमावान आहेस. हे अल्लाह! मुहम्मद ﷺ आणि त्यांच्या कुटुंबावर बरकत पाठव, जशी तू इब्राहीम आणि त्यांच्या कुटुंबावर पाठवली; निःसंशय तू स्तुतीपात्र व महिमावान आहेस.",
         ar: "اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد، اللهم بارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد.",
         fr: "Ô Allah, prie sur Muhammad et sa famille comme Tu as prié sur Ibrahim et sa famille ; Tu es Digne de louange, Glorieux. Ô Allah, bénis Muhammad et sa famille comme Tu as béni Ibrahim et sa famille ; Tu es Digne de louange, Glorieux.",
         es: "Oh Alá, bendice a Mujámmad y a su familia como bendijiste a Ibrahim y a su familia; Tú eres Digno de alabanza, Glorioso. Oh Alá, colma de bendiciones a Mujámmad y a su familia como colmaste a Ibrahim y a su familia; Tú eres Digno de alabanza, Glorioso." },
    f: { mr: "शेवटच्या कयाद्यात तशह्हुदनंतर दुरुद वाचणे ही नबी ﷺ यांची शिकवण आहे.",
         ar: "الصلاة على النبي بعد التشهد في القعدة الأخيرة من تعليم النبي ﷺ.",
         fr: "Réciter la bénédiction après le tashahhud dans la dernière station assise fait partie de l'enseignement du Prophète ﷺ.",
         es: "Recitar la bendición tras el tashahhud en la última posición sentada forma parte de la enseñanza del Profeta ﷺ." }
  },

  "Jahannam, qabr aur dajjal se panah": {
    t: { mr: "जहन्नम, कबर आणि दज्जालपासून पनाह", ar: "الاستعاذة من عذاب جهنم والقبر والدجال", fr: "Refuge contre l'Enfer, la tombe et le Dajjal", es: "Refugio del Infierno, la tumba y el Dayyal" },
    m: { mr: "हे अल्लाह! मी तुझी पनाह मागतो जहन्नमच्या अझाबापासून, कबरच्या अझाबापासून, जगण्या-मरण्याच्या फितन्यापासून आणि मसीह दज्जालच्या फितन्याच्या वाईटापासून.",
         ar: "اللهم إني أعوذ بك من عذاب جهنم، ومن عذاب القبر، ومن فتنة المحيا والممات، ومن شر فتنة المسيح الدجال.",
         fr: "Ô Allah, je cherche refuge auprès de Toi contre le châtiment de l'Enfer, contre le châtiment de la tombe, contre l'épreuve de la vie et de la mort, et contre le mal de l'épreuve du Faux Messie.",
         es: "Oh Alá, busco refugio en Ti del castigo del Infierno, del castigo de la tumba, de la prueba de la vida y de la muerte, y del mal de la prueba del Falso Mesías." },
    f: { mr: "शेवटच्या तशह्हुदनंतर ही दुआ वाचली जाते.",
         ar: "تُقال بعد التشهد الأخير.",
         fr: "On la récite après le dernier tashahhud.",
         es: "Se recita después del último tashahhud." }
  },

  "Salam se pehle (Abu Bakr RA ki dua)": {
    t: { mr: "सलामापूर्वी (अबू बक्र र.अ. यांची दुआ)", ar: "دعاء قبل السلام (عن أبي بكر رضي الله عنه)", fr: "Avant le salam (doua d'Abu Bakr)", es: "Antes del salam (dua de Abu Bakr)" },
    m: { mr: "हे अल्लाह! मी माझ्या जिवावर खूप अन्याय केला, आणि पापे तुझ्याशिवाय कोणी माफ करत नाही; तर तुझ्याकडून मला क्षमा दे आणि माझ्यावर दया कर; निःसंशय तूच क्षमाशील व परम दयाळू आहेस.",
         ar: "اللهم إني ظلمت نفسي ظلمًا كثيرًا، ولا يغفر الذنوب إلا أنت، فاغفر لي مغفرة من عندك وارحمني، إنك أنت الغفور الرحيم.",
         fr: "Ô Allah, je me suis fait beaucoup de tort, et nul ne pardonne les péchés sauf Toi : accorde-moi un pardon de Ta part et fais-moi miséricorde ; Tu es le Pardonneur, le Très Miséricordieux.",
         es: "Oh Alá, me he hecho mucho daño, y nadie perdona los pecados sino Tú: concédeme un perdón de Tu parte y ten misericordia de mí; Tú eres el Perdonador, el Misericordioso." },
    f: { mr: "नबी ﷺ यांनी हजरत अबू बक्र र.अ. यांना ही दुआ शिकवली होती.",
         ar: "علّمها النبي ﷺ أبا بكر رضي الله عنه.",
         fr: "Le Prophète ﷺ l'a enseignée à Abu Bakr.",
         es: "El Profeta ﷺ se la enseñó a Abu Bakr." }
  },

  "Namaz khatam karne waqt salam": {
    t: { mr: "नमाज संपवताना सलाम", ar: "السلام عند ختام الصلاة", fr: "Le salam à la fin de la prière", es: "El salam al terminar la oración" },
    m: { mr: "तुमच्यावर शांती आणि अल्लाहची दया.",
         ar: "السلام عليكم ورحمة الله.",
         fr: "Que la paix soit sur vous et la miséricorde d'Allah.",
         es: "La paz sea con vosotros y la misericordia de Alá." },
    f: { mr: "नमाज संपवताना प्रथम उजवीकडे नंतर डावीकडे सलाम फिरवला जातो.",
         ar: "يُسلّم عن اليمين ثم عن الشمال عند ختام الصلاة.",
         fr: "On salue d'abord à droite puis à gauche à la fin de la prière.",
         es: "Se saluda primero a la derecha y luego a la izquierda al terminar la oración." }
  },

  "Salam ke baad takbir": {
    t: { mr: "सलामानंतर तकबीर", ar: "التكبير بعد السلام", fr: "Le takbir après le salam", es: "El takbir tras el salam" },
    m: { mr: "अल्लाह सर्वांत मोठा आहे.",
         ar: "الله أكبر.",
         fr: "Allah est le plus Grand.",
         es: "Alá es el más Grande." },
    f: { mr: "नमाज संपल्याची घोषणा.",
         ar: "إعلان ختام الصلاة.",
         fr: "L'annonce de la fin de la prière.",
         es: "El anuncio del fin de la oración." }
  },

  "Salam ke baad Istighfar aur Salamati": {
    t: { mr: "सलामानंतर इस्तिगफार आणि शांती", ar: "الاستغفار والسلام بعد الصلاة", fr: "Istighfar et salam après la prière", es: "Istighfar y salam tras la oración" },
    m: { mr: "मी अल्लाहकडे क्षमा मागतो (तीन वेळा). हे अल्लाह! तू शांती देणारा आहेस आणि तुझ्याकडूनच शांती येते; तू बरकतवाला आहेस, हे महिमा व सन्मानाच्या स्वामी.",
         ar: "أستغفر الله (ثلاثًا). اللهم أنت السلام ومنك السلام، تباركت يا ذا الجلال والإكرام.",
         fr: "Je demande pardon à Allah (trois fois). Ô Allah, Tu es la Paix et de Toi vient la paix ; béni sois-Tu, ô Maître de majesté et de générosité.",
         es: "Pido perdón a Alá (tres veces). Oh Alá, Tú eres la Paz y de Ti viene la paz; bendito seas, oh Dueño de majestad y generosidad." },
    f: { mr: "नमाजनंतर हे अजकार वाचणे सुन्नत आहे.",
         ar: "من سنن ما بعد الصلاة.",
         fr: "Réciter ces invocations après la prière est une sunna.",
         es: "Recitar estas invocaciones tras la oración es sunna." }
  },

  "Tauheed aur Allah ke ata karne ka iqrar": {
    t: { mr: "तौहीद आणि अल्लाहच्या देण्याची कबुली", ar: "التوحيد والإقرار بعطاء الله", fr: "Unicité et reconnaissance du don d'Allah", es: "Unidad y reconocimiento del don de Alá" },
    m: { mr: "अल्लाहशिवाय कोणी उपास्य नाही, तो एकटाच आहे, त्याला कोणी भागीदार नाही; त्याचेच राज्य आहे, त्याचीच स्तुती आहे आणि तो प्रत्येक गोष्टीवर सामर्थ्यवान आहे. हे अल्लाह! तू जे देतेस ते कोणी रोखू शकत नाही आणि तू जे रोखतेस ते कोणी देऊ शकत नाही; आणि कोणा मोठ्या व्यक्तीची मोठेपणा तुझ्यासमोर उपयोगी पडत नाही.",
         ar: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، اللهم لا مانع لما أعطيت، ولا معطي لما منعت، ولا ينفع ذا الجد منك الجد.",
         fr: "Il n'y a de divinité qu'Allah, unique sans associé ; à Lui la royauté et la louange, et Il est capable de toute chose. Ô Allah, nul ne peut retenir ce que Tu donnes, ni donner ce que Tu retiens ; et la grandeur d'un grand ne lui sert à rien devant Toi.",
         es: "No hay divinidad salvo Alá, Único sin asociado; Suyo es el reino y Suya la alabanza, y Él es capaz de todo. Oh Alá, nadie puede retener lo que Tú das ni dar lo que Tú retienes; y la grandeza de un grande de nada le sirve ante Ti." },
    f: { mr: "प्रत्येक फर्ज नमाजनंतर हे वाचणे मसनून आहे.",
         ar: "مسنون بعد كل صلاة مفروضة.",
         fr: "Il est recommandé de le réciter après chaque prière obligatoire.",
         es: "Es recomendable recitarlo tras cada oración obligatoria." }
  }
});

if (window.FQDuaLangApply) window.FQDuaLangApply();


/* ═══════════════════════════════════════════════════════════
   Namaz ki duaein (31 – 45)
   ═══════════════════════════════════════════════════════════ */
Object.assign(window.FQ_DUA_LANG, {

  "Tasbeehat: 33+33+33 aur kalima-e-tauheed": {
    t: { mr: "तस्बीहात: ३३+३३+३३ आणि कलिमा-ए-तौहीद", ar: "التسبيحات: ٣٣+٣٣+٣٣ وكلمة التوحيد", fr: "Tasbihât : 33+33+33 et le kalima du tawhid", es: "Tasbihat: 33+33+33 y la kalima del tawhid" },
    m: { mr: "अल्लाह पवित्र आहे (३३ वेळा), सर्व स्तुती अल्लाहसाठी आहे (३३ वेळा), अल्लाह सर्वांत मोठा आहे (३३ वेळा). नंतर (शंभर पूर्ण करण्यासाठी): अल्लाहशिवाय कोणी उपास्य नाही, तो एकटाच आहे, त्याला कोणी भागीदार नाही; त्याचेच राज्य आहे, त्याचीच स्तुती आहे आणि तो प्रत्येक गोष्टीवर सामर्थ्यवान आहे.",
         ar: "سبحان الله (٣٣)، الحمد لله (٣٣)، الله أكبر (٣٣). ثم: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.",
         fr: "Gloire à Allah (33), louange à Allah (33), Allah est le plus Grand (33). Puis : il n'y a de divinité qu'Allah, unique sans associé ; à Lui la royauté et la louange, et Il est capable de toute chose.",
         es: "Gloria a Alá (33), alabanza a Alá (33), Alá es el más Grande (33). Luego: no hay divinidad salvo Alá, Único sin asociado; Suyo es el reino y Suya la alabanza, y Él es capaz de todo." },
    f: { mr: "नमाजनंतर हे तस्बीहात पापांची माफी मिळवून देतात.",
         ar: "هذه التسبيحات بعد الصلاة سبب لمغفرة الذنوب.",
         fr: "Ces tasbihs après la prière sont une cause de pardon des péchés.",
         es: "Estos tasbihs tras la oración son causa de perdón de los pecados." }
  },

  "Mu'aqqibat: 33+33+34": {
    t: { mr: "मुअक्किबात: ३३+३३+३४", ar: "المعقبات: ٣٣+٣٣+٣٤", fr: "Mu'aqqibât : 33+33+34", es: "Mu'aqqibat: 33+33+34" },
    m: { mr: "अल्लाह पवित्र आहे (३३), सर्व स्तुती अल्लाहसाठी आहे (३३), अल्लाह सर्वांत मोठा आहे (३४).",
         ar: "سبحان الله (٣٣)، الحمد لله (٣٣)، الله أكبر (٣٤).",
         fr: "Gloire à Allah (33), louange à Allah (33), Allah est le plus Grand (34).",
         es: "Gloria a Alá (33), alabanza a Alá (33), Alá es el más Grande (34)." },
    f: { mr: "फर्ज नमाजनंतर हे तस्बीहात वाचणे फार मोठा मोबदला आहे.",
         ar: "لهذه التسبيحات بعد الفريضة أجر عظيم.",
         fr: "Réciter ces tasbihs après la prière obligatoire vaut une immense récompense.",
         es: "Recitar estos tasbihs tras la oración obligatoria tiene una recompensa inmensa." }
  },

  "Ayatul Kursi (Har namaz ke baad)": {
    t: { mr: "आयतुल कुर्सी (प्रत्येक नमाजनंतर)", ar: "آية الكرسي بعد كل صلاة", fr: "Ayat al-Kursi (après chaque prière)", es: "Ayat al-Kursi (tras cada oración)" },
    m: { mr: "अल्लाह, त्याच्याशिवाय कोणी उपास्य नाही; तो सदैव जिवंत, सर्वांना टिकवणारा आहे. त्याला झोप किंवा डुलकी येत नाही. आकाशात व धरतीवर जे काही आहे ते त्याचेच आहे. त्याच्या परवानगीशिवाय त्याच्याजवळ शिफारस कोण करू शकतो? त्यांच्या पुढे व मागे जे आहे ते तो जाणतो... त्याची कुर्सी आकाश व धरती व्यापते आणि त्यांचे रक्षण त्याला थकवत नाही; तोच उच्च व महान आहे.",
         ar: "الله لا إله إلا هو الحي القيوم، لا تأخذه سنة ولا نوم، له ما في السماوات وما في الأرض، من ذا الذي يشفع عنده إلا بإذنه، يعلم ما بين أيديهم وما خلفهم، ولا يحيطون بشيء من علمه إلا بما شاء، وسع كرسيه السماوات والأرض، ولا يئوده حفظهما، وهو العلي العظيم.",
         fr: "Allah, il n'y a de divinité que Lui, le Vivant, le Subsistant. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il sait ce qui est devant eux et derrière eux… Son Trône englobe les cieux et la terre, et leur garde ne Lui pèse point. Il est le Très-Haut, le Très Grand.",
         es: "Alá, no hay divinidad sino Él, el Viviente, el Subsistente. Ni somnolencia ni sueño Le alcanzan. Suyo es cuanto está en los cielos y en la tierra. ¿Quién puede interceder ante Él sin Su permiso? Sabe lo que está ante ellos y detrás de ellos… Su Trono abarca los cielos y la tierra, y su custodia no Le pesa. Él es el Altísimo, el Inmenso." },
    f: { mr: "जो प्रत्येक फर्ज नमाजनंतर हे वाचेल, त्याला जन्नतमध्ये प्रवेश करण्यापासून केवळ मृत्यूच रोखतो.",
         ar: "من قرأها دبر كل صلاة لم يمنعه من دخول الجنة إلا الموت.",
         fr: "Celui qui la récite après chaque prière obligatoire, seul la mort le sépare du Paradis.",
         es: "A quien la recite tras cada oración obligatoria, solo la muerte le separa del Paraíso." }
  },

  "Mu'awwidhat (Teeno Qul)": {
    t: { mr: "मुअव्विझात (तीनही कुल)", ar: "المعوذات (الثلاث قل)", fr: "Al-Mu'awwidhât (les trois Qoul)", es: "Al-Mu'awwidhat (las tres Qul)" },
    m: { mr: "सांग: तो अल्लाह एक आहे; अल्लाह निरपेक्ष आहे; त्याला संतती नाही आणि तो कोणापासून जन्मला नाही; आणि त्याच्यासारखा कोणी नाही. सांग: मी पहाटेच्या रबाची पनाह मागतो... सांग: मी लोकांच्या रबाची पनाह मागतो, लोकांचा राजा, लोकांचा उपास्य...",
         ar: "قل هو الله أحد، الله الصمد، لم يلد ولم يولد، ولم يكن له كفوًا أحد. قل أعوذ برب الفلق… قل أعوذ برب الناس، ملك الناس، إله الناس…",
         fr: "Dis : Il est Allah, Unique. Allah, le Seul à être imploré. Il n'a pas engendré et n'a pas été engendré, et nul n'est égal à Lui. Dis : je cherche protection auprès du Seigneur de l'aube naissante… Dis : je cherche protection auprès du Seigneur des hommes, le Roi des hommes, le Dieu des hommes…",
         es: "Di: Él es Alá, Uno. Alá, el Absoluto. No ha engendrado ni ha sido engendrado, y no hay nadie igual a Él. Di: busco protección en el Señor del alba… Di: busco protección en el Señor de los hombres, el Rey de los hombres, el Dios de los hombres…" },
    f: { mr: "ही तीन सूरे सकाळ-संध्याकाळ आणि सुतण्यापूर्वी तीन वेळा वाचणे सुन्नत आहे.",
         ar: "تُقرأ هذه السور الثلاث ثلاثًا صباحًا ومساءً وعند النوم.",
         fr: "Ces trois sourates se récitent trois fois matin et soir, et avant de dormir.",
         es: "Estas tres suras se recitan tres veces por la mañana y por la noche, y antes de dormir." }
  },

  "Zikr, Shukr aur Ibadat ki madad": {
    t: { mr: "झिक्र, शुक्र आणि उपासनेसाठी मदत", ar: "العون على الذكر والشكر والعبادة", fr: "Aide pour le dhikr, la gratitude et l'adoration", es: "Ayuda para el dhikr, la gratitud y la adoración" },
    m: { mr: "हे अल्लाह! मला मदत कर की मी तुझे स्मरण करू, तुझे आभार मानू आणि सर्वोत्तम पद्धतीने तुझी उपासना करू.",
         ar: "اللهم أعني على ذكرك وشكرك وحسن عبادتك.",
         fr: "Ô Allah, aide-moi à T'évoquer, à Te remercier et à T'adorer de la meilleure façon.",
         es: "Oh Alá, ayúdame a recordarte, a agradecerte y a adorarte de la mejor manera." },
    f: { mr: "नबी ﷺ यांनी मुआझ र.अ. यांना ही दुआ प्रत्येक नमाजनंतर कधीही न सोडण्याची वसियत केली.",
         ar: "أوصى النبي ﷺ معاذًا رضي الله عنه ألا يدع هذه الدعاء دبر كل صلاة.",
         fr: "Le Prophète ﷺ recommanda à Mu'adh de ne jamais délaisser cette doua après chaque prière.",
         es: "El Profeta ﷺ recomendó a Mu'adh no dejar nunca esta dua tras cada oración." }
  },

  "Qayamat ke azab se panah": {
    t: { mr: "कयामतच्या अझाबापासून पनाह", ar: "الاستعاذة من عذاب يوم القيامة", fr: "Refuge contre le châtiment du Jour du Jugement", es: "Refugio del castigo del Día del Juicio" },
    m: { mr: "हे माझ्या रबा! ज्या दिवशी तू आपल्या बंद्यांना उठवशील, त्या दिवशी मला तुझ्या अझाबापासून वाचव.",
         ar: "رب قني عذابك يوم تبعث عبادك.",
         fr: "Mon Seigneur, préserve-moi de Ton châtiment le jour où Tu ressusciteras Tes serviteurs.",
         es: "Señor mío, protégeme de Tu castigo el día en que resucites a Tus siervos." },
    f: { mr: "नबी ﷺ सलामानंतर ही दुआ वाचत असत.",
         ar: "كان النبي ﷺ يقولها بعد السلام.",
         fr: "Le Prophète ﷺ la récitait après le salam.",
         es: "El Profeta ﷺ la recitaba tras el salam." }
  },

  "Namaz ke baad in cheezon se panah": {
    t: { mr: "नमाजनंतर या गोष्टींपासून पनाह", ar: "الاستعاذة بعد الصلاة من أمور", fr: "Refuge après la prière contre plusieurs maux", es: "Refugio tras la oración de varios males" },
    m: { mr: "हे अल्लाह! मी भित्रेपणापासून तुझी पनाह मागतो, आणि या गोष्टीपासून पनाह मागतो की मला अत्यंत निकामी म्हातारपणाकडे परत केले जावे, आणि दुनियेच्या फितन्यापासून व कबरच्या अझाबापासून तुझी पनाह मागतो.",
         ar: "اللهم إني أعوذ بك من الجبن، وأعوذ بك أن أرد إلى أرذل العمر، وأعوذ بك من فتنة الدنيا، وأعوذ بك من عذاب القبر.",
         fr: "Ô Allah, je cherche refuge contre la lâcheté, contre le retour au plus vil âge, contre l'épreuve de ce monde et contre le châtiment de la tombe.",
         es: "Oh Alá, busco refugio de la cobardía, de ser devuelto a la edad más vil, de la prueba de este mundo y del castigo de la tumba." },
    f: { mr: "नबी ﷺ नमाजनंतर हे अजकार वाचत असत.",
         ar: "كان النبي ﷺ يقولها دبر الصلاة.",
         fr: "Le Prophète ﷺ la récitait après la prière.",
         es: "El Profeta ﷺ la recitaba tras la oración." }
  },

  "Fajr ke baad: ilm, rizq aur amal ki dua": {
    t: { mr: "फजरनंतर: ज्ञान, रोजी व कर्माची दुआ", ar: "بعد الفجر: دعاء العلم والرزق والعمل", fr: "Après Fajr : doua pour le savoir, la subsistance et les œuvres", es: "Tras Fajr: dua por el conocimiento, el sustento y las obras" },
    m: { mr: "हे अल्लाह! मी तुझ्याकडे उपयुक्त ज्ञान, पवित्र (हलाल) रोजी आणि स्वीकारले जाणारे कर्म मागतो.",
         ar: "اللهم إني أسألك علمًا نافعًا، ورزقًا طيبًا، وعملًا متقبلًا.",
         fr: "Ô Allah, je Te demande un savoir utile, une subsistance pure et des œuvres acceptées.",
         es: "Oh Alá, Te pido conocimiento útil, sustento puro y obras aceptadas." },
    f: { mr: "फक्त फजरच्या नमाजनंतर वाचली जाते.",
         ar: "تُقال بعد صلاة الفجر خاصة.",
         fr: "On la récite spécialement après la prière de Fajr.",
         es: "Se recita especialmente tras la oración de Fajr." }
  },

  "Panj waqta farz namaz": {
    t: { mr: "पाच वेळची फर्ज नमाज", ar: "الصلوات الخمس المفروضة", fr: "Les cinq prières obligatoires", es: "Las cinco oraciones obligatorias" },
    m: { mr: "निःसंशय नमाज ईमानवाल्यांवर ठरलेल्या वेळी फर्ज आहे. फजर २, जोहर ४, असर ४, मगरिब ३ आणि इशा ४ रकअत.",
         ar: "إن الصلاة كانت على المؤمنين كتابًا موقوتًا. الفجر ٢، الظهر ٤، العصر ४، المغرب ३، العشاء ४.",
         fr: "La prière est prescrite aux croyants à des heures déterminées. Fajr 2, Dhuhr 4, Asr 4, Maghrib 3, Isha 4 rak'ahs.",
         es: "La oración está prescrita a los creyentes en horas determinadas. Fajr 2, Dhuhr 4, Asr 4, Maghrib 3, Isha 4 rakas." },
    f: { mr: "इस्लामचा स्तंभ. पुरुषांनी मशिदीत जमातीने पाळणे ताकीदी आहे.",
         ar: "هي ركن الإسلام، والجماعة في المسجد للرجال مؤكدة.",
         fr: "C'est le pilier de l'islam ; pour les hommes, la prière en groupe à la mosquée est fortement recommandée.",
         es: "Es el pilar del islam; para los hombres, orar en grupo en la mezquita está muy recomendado." }
  },

  "Sunnat-e-Mu'akkadah (Rawatib) - 12 rak'at": {
    t: { mr: "सुन्नत-ए-मुअक्कदा (रवातिब) — १२ रकअत", ar: "السنن المؤكدة (الرواتب) — १२ ركعة", fr: "Sunan mu'akkada (rawâtib) — 12 rak'ahs", es: "Sunan mu'akkada (rawatib): 12 rakas" },
    m: { mr: "फर्जाशिवाय रोज १२ रकअत सुन्नत वाचणाऱ्यासाठी जन्नतमध्ये घर आहे.",
         ar: "من صلى اثنتي عشرة ركعة تطوعًا غير الفريضة بنى الله له بيتًا في الجنة.",
         fr: "Celui qui prie douze rak'ahs surérogatoires en plus des obligatoires, Allah lui bâtit une maison au Paradis.",
         es: "Quien reza doce rakas voluntarias además de las obligatorias, Alá le construye una casa en el Paraíso." },
    f: { mr: "ह्या ताकीदी सुन्नती फर्जसोबत वाचल्या जातात.",
         ar: "هذه السنن المؤكدة تُصلى مع الفرائض.",
         fr: "Ces sunan sont priées avec les prières obligatoires.",
         es: "Estas sunnas se rezan junto a las oraciones obligatorias." }
  },

  "Fajr ki do sunnatein": {
    t: { mr: "फजरच्या दोन सुन्नती", ar: "سنتا الفجر", fr: "Les deux sunan de Fajr", es: "Las dos sunnas de Fajr" },
    m: { mr: "फजरच्या दोन सुन्नती दुनिया आणि त्यात जे काही आहे त्यापेक्षा उत्तम आहेत.",
         ar: "ركعتا الفجر خير من الدنيا وما فيها.",
         fr: "Les deux rak'ahs de Fajr valent mieux que ce monde et tout ce qu'il contient.",
         es: "Las dos rakas de Fajr valen más que este mundo y todo lo que contiene." },
    f: { mr: "ह्या फार हलक्या व संक्षिप्त वाचल्या जातात.",
         ar: "تُصلى خفيفتين قصيرتين.",
         fr: "On les prie très légères et courtes.",
         es: "Se rezan muy ligeras y breves." }
  },

  "Witr": {
    t: { mr: "वित्र", ar: "الوتر", fr: "Witr", es: "Witr" },
    m: { mr: "रात्रीची नमाज दोन-दोन रकअत आहे, नंतर एक रकअत मिळवून वित्र करा.",
         ar: "صلاة الليل مثنى مثنى، ثم يوتر بواحدة.",
         fr: "La prière de nuit se fait par deux, puis on conclut par une rak'ah (witr).",
         es: "La oración nocturna es de dos en dos, y luego se cierra con una raka (witr)." },
    f: { mr: "रात्रीची शेवटची नमाज.",
         ar: "آخر صلاة الليل.",
         fr: "C'est la dernière prière de la nuit.",
         es: "Es la última oración de la noche." }
  },

  "Witr ki dua-e-Qunoot": {
    t: { mr: "वित्रची दुआ-ए-कुनूत", ar: "دعاء القنوت في الوتر", fr: "Doua du qunût dans le witr", es: "Dua del qunut en el witr" },
    m: { mr: "हे अल्लाह! ज्यांना तू मार्गदर्शन दिले त्यांच्यात मलाही मार्गदर्शन दे; ज्यांना तू सुरक्षित ठेवले त्यांच्यात मलाही सुरक्षित ठेव; ज्यांचा तू जबाबदार झालास त्यांच्यात माझीही जबाबदारी घे; जे तू दिले त्यात बरकत दे; जे तू ठरवले त्याच्या वाईटापासून मला वाचव; निःसंशय तूच ठरवतोस आणि तुझ्याविरुद्ध कोणी ठरवत नाही; ज्याला तू मित्र बनवले तो अपमानित होत नाही आणि ज्याच्याशी तू वैर केले तो सन्मानित होत नाही. हे आमच्या रबा! तू बरकतवाला व उंच आहेस.",
         ar: "اللهم اهدني فيمن هديت، وعافني فيمن عافيت، وتولني فيمن توليت، وبارك لي فيما أعطيت، وقني شر ما قضيت، فإنك تقضي ولا يقضى عليك، وإنه لا يذل من واليت، ولا يعز من عاديت، تباركت ربنا وتعاليت.",
         fr: "Ô Allah, guide-moi parmi ceux que Tu as guidés, préserve-moi parmi ceux que Tu as préservés, prends-moi en charge parmi ceux dont Tu prends soin, bénis ce que Tu m'as donné, protège-moi du mal de ce que Tu as décrété. C'est Toi qui décrètes et nul ne décrète contre Toi ; celui que Tu prends pour allié n'est jamais avili, et celui à qui Tu t'opposes n'est jamais honoré. Béni et exalté sois-Tu, notre Seigneur.",
         es: "Oh Alá, guíame entre quienes Tú has guiado, protégeme entre quienes Tú has protegido, hazte cargo de mí entre aquellos de quienes Te haces cargo, bendice lo que me has dado y líbrame del mal de lo que has decretado. Tú decretas y nadie decreta contra Ti; a quien Tú tomas por aliado nunca es humillado, y a quien Tú te opones nunca es honrado. Bendito y exaltado seas, Señor nuestro." },
    f: { mr: "वित्रच्या शेवटच्या रकअतीत वाचली जाते.",
         ar: "تُقال في الركعة الأخيرة من الوتر.",
         fr: "On la récite dans la dernière rak'ah du witr.",
         es: "Se recita en la última raka del witr." }
  },

  "Witr ke baad: Subhanal-Malikil-Quddus": {
    t: { mr: "वित्रनंतर: ‘सुभानल-मलिकिल-कुद्दूस’", ar: "بعد الوتر: سبحان الملك القدوس", fr: "Après le witr : « Subhâna-l-Maliki-l-Quddûs »", es: "Tras el witr: «Subhana-l-Maliki-l-Quddus»" },
    m: { mr: "पवित्र आहे तो राजा जो प्रत्येक दोषापासून पवित्र आहे.",
         ar: "سبحان الملك القدوس.",
         fr: "Gloire au Roi, le Très Saint.",
         es: "Gloria al Rey, el Santísimo." },
    f: { mr: "वित्रच्या सलामानंतर ३ वेळा, तिसऱ्या वेळी आवाज उंच करून.",
         ar: "بعد سلام الوتر ثلاثًا، ويرفع صوته في الثالثة.",
         fr: "Trois fois après le salam du witr, en élevant la voix la troisième fois.",
         es: "Tres veces tras el salam del witr, elevando la voz la tercera vez." }
  }
});

if (window.FQDuaLangApply) window.FQDuaLangApply();


/* ═══════════════════════════════════════════════════════════
   Namaz ki duaein (46 – 59)
   ═══════════════════════════════════════════════════════════ */
Object.assign(window.FQ_DUA_LANG, {

  "Tahajjud / Qiyam-ul-Layl": {
    t: { mr: "तहज्जुद / कयाम-उल-लैल", ar: "التهجد / قيام الليل", fr: "Tahajjud / Qiyâm al-layl", es: "Tahayyud / Qiyam al-layl" },
    m: { mr: "फर्जानंतर सर्वोत्तम नमाज रात्रीची नमाज आहे.",
         ar: "أفضل الصلاة بعد الفريضة صلاة الليل.",
         fr: "La meilleure prière après les obligatoires est celle de la nuit.",
         es: "La mejor oración después de las obligatorias es la de la noche." },
    f: { mr: "रात्रीच्या शेवटच्या तिसऱ्या भागात अल्लाहच्या विशेष दयेची वेळ असते.",
         ar: "في الثلث الأخير من الليل وقت رحمة الله الخاصة.",
         fr: "Dans le dernier tiers de la nuit se trouve un temps de miséricorde particulière d'Allah.",
         es: "En el último tercio de la noche hay un tiempo de misericordia especial de Alá." }
  },

  "Tarawih (Qiyam-e-Ramadan)": {
    t: { mr: "तरावीह (कयाम-ए-रमजान)", ar: "التراويح (قيام رمضان)", fr: "Tarâwîh (qiyâm de Ramadan)", es: "Tarawih (qiyam de Ramadán)" },
    m: { mr: "जो रमजानमध्ये ईमान आणि मोबदल्याच्या नियतीने रात्रीची नमाज वाचेल, त्याची पूर्वीची पापे माफ केली जातात.",
         ar: "من قام رمضان إيمانًا واحتسابًا غُفر له ما تقدم من ذنبه.",
         fr: "Celui qui prie la nuit en Ramadan par foi et en espérant la récompense, ses péchés passés sont pardonnés.",
         es: "Quien ore de noche en Ramadán con fe y buscando recompensa, se le perdonan sus pecados anteriores." },
    f: { mr: "रमजानमधील रात्रीची नमाज.",
         ar: "صلاة الليل في رمضان.",
         fr: "La prière de nuit pendant le Ramadan.",
         es: "La oración nocturna durante el Ramadán." }
  },

  "Salat-ud-Duha (Chasht)": {
    t: { mr: "सलात-उद-दुहा (चाश्त)", ar: "صلاة الضحى", fr: "Salât ad-Duhâ (châsht)", es: "Salat ad-Duha (chasht)" },
    m: { mr: "प्रत्येक सांध्याच्या दानाऐवजी दोन रकअत पुरेशा आहेत.",
         ar: "ويجزئ من ذلك ركعتان يركعهما من الضحى.",
         fr: "Deux rak'ahs de Duha suffisent pour cela.",
         es: "Dos rakas de Duha bastan para ello." },
    f: { mr: "सूर्य उंच आल्यानंतर, झिजवण्यापूर्वी वाचली जाते.",
         ar: "تُصلى بعد ارتفاع الشمس وقبل الزوال.",
         fr: "On la prie après que le soleil s'est élevé, avant la déclinaison.",
         es: "Se reza tras elevarse el sol, antes del mediodía." }
  },

  "Tahiyyat-ul-Masjid": {
    t: { mr: "तहिय्यत-उल-मस्जिद", ar: "تحية المسجد", fr: "Tahiyyat al-masjid", es: "Tahiyyat al-masjid" },
    m: { mr: "तुमच्यापैकी जो मशिदीत प्रवेश करेल, त्याने बसण्यापूर्वी दोन रकअत वाचाव्यात.",
         ar: "إذا دخل أحدكم المسجد فلا يجلس حتى يصلي ركعتين.",
         fr: "Quand l'un de vous entre à la mosquée, qu'il ne s'asseye pas avant d'avoir prié deux rak'ahs.",
         es: "Cuando uno de vosotros entre en la mezquita, que no se siente hasta haber rezado dos rakas." },
    f: { mr: "मशिदीचा हक्क.",
         ar: "حق المسجد.",
         fr: "C'est le droit de la mosquée.",
         es: "Es el derecho de la mezquita." }
  },

  "Tahiyyat-ul-Wudu": {
    t: { mr: "तहिय्यत-उल-वुजू", ar: "تحية الوضوء", fr: "Tahiyyat al-wudû", es: "Tahiyyat al-wudu" },
    m: { mr: "वुजूनंतर दोन रकअत वाचणे हा हजरत बिलाल र.अ. यांचा नित्यक्रम होता.",
         ar: "كان من عادة بلال رضي الله عنه أن يصلي ركعتين بعد الوضوء.",
         fr: "Prier deux rak'ahs après les ablutions était l'habitude de Bilal.",
         es: "Rezar dos rakas tras el wudu era la costumbre de Bilal." },
    f: { mr: "ज्यावर नबी ﷺ यांनी त्यांना जन्नतची खुशखबर दिली.",
         ar: "وبشره النبي ﷺ بسببها بالجنة.",
         fr: "C'est pour cela que le Prophète ﷺ lui annonça le Paradis.",
         es: "Por ello el Profeta ﷺ le anunció el Paraíso." }
  },

  "Maghrib se pehle 2 rak'at": {
    t: { mr: "मगरिबपूर्वी २ रकअत", ar: "ركعتان قبل المغرب", fr: "Deux rak'ahs avant Maghrib", es: "Dos rakas antes de Maghrib" },
    m: { mr: "मगरिबपूर्वी नमाज वाचा (जो वाचू इच्छितो).",
         ar: "صلوا قبل المغرب (لمن شاء).",
         fr: "Priez avant Maghrib (pour qui le veut).",
         es: "Rezad antes de Maghrib (quien quiera)." },
    f: { mr: "ही सुन्नत-ए-गैर-मुअक्कदा आहे.",
         ar: "هي سنة غير مؤكدة.",
         fr: "C'est une sunna non confirmée.",
         es: "Es una sunna no confirmada." }
  },

  "Salat-ut-Taubah": {
    t: { mr: "सलात-उत-तौबा", ar: "صلاة التوبة", fr: "Salât at-tawbah", es: "Salat at-tawba" },
    m: { mr: "जो पाप करेल, नंतर वुजू करून दोन रकअत वाचेल आणि क्षमा मागेल, अल्लाह त्याला माफ करतो.",
         ar: "ما من عبد يذنب ذنبًا ثم يتوضأ ويصلي ركعتين ويستغفر الله إلا غفر الله له.",
         fr: "Quiconque commet un péché, puis fait ses ablutions, prie deux rak'ahs et demande pardon à Allah, Allah lui pardonne.",
         es: "Quien cometa un pecado, luego haga el wudu, rece dos rakas y pida perdón a Alá, Alá le perdona." },
    f: { mr: "तौब्याची नमाज.",
         ar: "صلاة التوبة.",
         fr: "La prière du repentir.",
         es: "La oración del arrepentimiento." }
  },

  "Jumu'ah ki namaz": {
    t: { mr: "जुम्माची नमाज", ar: "صلاة الجمعة", fr: "La prière du vendredi", es: "La oración del viernes" },
    m: { mr: "जुम्माच्या दिवशी नमाजसाठी हाक दिली जाईल तेव्हा अल्लाहच्या स्मरणाकडे धावा.",
         ar: "إذا نودي للصلاة من يوم الجمعة فاسعوا إلى ذكر الله.",
         fr: "Quand l'appel à la prière est fait le vendredi, accourez au rappel d'Allah.",
         es: "Cuando se llame a la oración del viernes, acudid al recuerdo de Alá." },
    f: { mr: "पुरुषांवर फर्ज आहे.",
         ar: "فرض على الرجال.",
         fr: "Elle est obligatoire pour les hommes.",
         es: "Es obligatoria para los hombres." }
  },

  "Eidain ki namaz": {
    t: { mr: "ईदैनची नमाज", ar: "صلاة العيدين", fr: "La prière des deux Aïd", es: "La oración de las dos Fiestas" },
    m: { mr: "नबी ﷺ ईदच्या दिवशी ईदगाहीत जात असत, प्रथम नमाज वाचत आणि नंतर खुतबा देत.",
         ar: "كان النبي ﷺ يخرج يوم العيد فيصلي ثم يخطب.",
         fr: "Le Prophète ﷺ sortait le jour de l'Aïd, priait puis prononçait le sermon.",
         es: "El Profeta ﷺ salía el día de la fiesta, oraba y luego pronunciaba el sermón." },
    f: { mr: "ईदची नमाज.",
         ar: "صلاة العيد.",
         fr: "La prière de l'Aïd.",
         es: "La oración de la fiesta." }
  },

  "Namaz-e-Janazah": {
    t: { mr: "नमाज-ए-जनाजा", ar: "صلاة الجنازة", fr: "La prière funéraire", es: "La oración funeraria" },
    m: { mr: "जो जनाज्यासोबत जाईल त्याला एक किराताचा मोबदला आहे.",
         ar: "من تبع جنازة فله قيراط من الأجر.",
         fr: "Celui qui suit un convoi funèbre obtient un qîrât de récompense.",
         es: "Quien acompaña un funeral obtiene un quirat de recompensa." },
    f: { mr: "फर्ज-ए-किफाया.",
         ar: "فرض كفاية.",
         fr: "Obligation collective (fard kifâya).",
         es: "Obligación colectiva (fard kifaya)." }
  },

  "Namaz-e-Kusuf": {
    t: { mr: "नमाज-ए-कुसूफ (ग्रहणाची नमाज)", ar: "صلاة الكسوف", fr: "La prière de l'éclipse", es: "La oración del eclipse" },
    m: { mr: "सूर्य आणि चंद्र अल्लाहची चिन्हे आहेत; ग्रहण लागल्यास नमाज वाचा, दुआ करा आणि दान द्या.",
         ar: "إن الشمس والقمر آيتان من آيات الله، فإذا رأيتم ذلك فصلوا وادعوا وتصدقوا.",
         fr: "Le soleil et la lune sont deux signes d'Allah ; quand vous les voyez ainsi, priez, invoquez et faites l'aumône.",
         es: "El sol y la luna son dos signos de Alá; cuando veáis eso, orad, suplicad y dad caridad." },
    f: { mr: "ग्रहणाची नमाज.",
         ar: "صلاة الكسوف.",
         fr: "La prière de l'éclipse.",
         es: "La oración del eclipse." }
  },

  "Namaz-e-Istisqa": {
    t: { mr: "नमाज-ए-इस्तिस्का (पावसाची नमाज)", ar: "صلاة الاستسقاء", fr: "La prière de la pluie", es: "La oración de la lluvia" },
    m: { mr: "नबी ﷺ पावसाच्या दुआसाठी मैदानात गेले, किबल्याकडे तोंड केले, चादर उलटली आणि दोन रकअत वाचल्या.",
         ar: "خرج النبي ﷺ يستسقي فاستقبل القبلة وقلب رداءه وصلى ركعتين.",
         fr: "Le Prophète ﷺ sortit pour implorer la pluie, se tourna vers la qibla, retourna son manteau et pria deux rak'ahs.",
         es: "El Profeta ﷺ salió a pedir lluvia, se orientó a la qibla, volvió su manto y rezó dos rakas." },
    f: { mr: "पावसाची नमाज.",
         ar: "صلاة الاستسقاء.",
         fr: "La prière de la pluie.",
         es: "La oración de la lluvia." }
  },

  "Safar mein namaz ka qasr": {
    t: { mr: "प्रवासात नमाजचा कसर (कमी करणे)", ar: "قصر الصلاة في السفر", fr: "Le raccourcissement de la prière en voyage", es: "Acortar la oración en viaje" },
    m: { mr: "हे असे दान आहे जे अल्लाहने तुमच्यावर केले आहे, ते स्वीकारा.",
         ar: "صدقة تصدق الله بها عليكم فاقبلوا صدقته.",
         fr: "C'est une aumône qu'Allah vous a faite : acceptez-la.",
         es: "Es una caridad que Alá os ha concedido: aceptadla." },
    f: { mr: "प्रवासात चार रकअतींऐवजी दोन रकअत.",
         ar: "في السفر تُصلى الرباعية ركعتين.",
         fr: "En voyage, les prières de quatre rak'ahs se font en deux.",
         es: "En viaje, las oraciones de cuatro rakas se hacen en dos." }
  },

  "Nafl namaz ghar mein": {
    t: { mr: "घरी नफल नमाज", ar: "صلاة النافلة في البيت", fr: "La prière surérogatoire à la maison", es: "La oración voluntaria en casa" },
    m: { mr: "आपल्या घरांमध्ये नमाज वाचा, कारण माणसाची सर्वोत्तम नमाज ती आहे जी तो आपल्या घरी वाचतो (फर्ज सोडून).",
         ar: "صلوا في بيوتكم، فإن أفضل صلاة المرء في بيته إلا المكتوبة.",
         fr: "Priez dans vos maisons, car la meilleure prière de l'homme est celle qu'il fait chez lui, sauf les obligatoires.",
         es: "Orad en vuestras casas, pues la mejor oración del hombre es la que hace en su casa, salvo las obligatorias." },
    f: { mr: "घरी नफल वाचण्याचे फजीलत.",
         ar: "فضل صلاة النافلة في البيت.",
         fr: "Le mérite de la prière surérogatoire à la maison.",
         es: "El mérito de la oración voluntaria en casa." }
  },

  "Salat-ul-Istikhara ka tareeqa": {
    t: { mr: "सलात-उल-इस्तिखाराची पद्धत", ar: "صفة صلاة الاستخارة", fr: "La manière de la prière d'istikhâra", es: "La forma de la oración de istijara" },
    m: { mr: "हे अल्लाह! मी तुझ्या ज्ञानाच्या आधारे तुझ्याकडून भले मागतो, तुझ्या सामर्थ्याने शक्ती मागतो आणि तुझ्या महान कृपेची मागणी करतो; तू सामर्थ्यवान आहेस आणि मी नाही, तू जाणतोस आणि मी जाणत नाही, आणि तू गुप्त गोष्टी जाणणारा आहेस. हे अल्लाह! जर हे काम माझ्या दीन, माझ्या जगण्यात आणि माझ्या कामाच्या परिणामात माझ्यासाठी चांगले असेल, तर ते माझ्यासाठी ठरव, माझ्यासाठी सोपे कर आणि त्यात बरकत दे. आणि जर हे काम वाईट असेल, तर ते माझ्यापासून दूर कर आणि मला त्यापासून दूर ठेव; आणि जिथे असेल तिथे माझ्यासाठी भले ठरव, नंतर मला त्यावर राजी कर.",
         ar: "اللهم إني أستخيرك بعلمك، وأستقدرك بقدرتك، وأسألك من فضلك العظيم، فإنك تقدر ولا أقدر، وتعلم ولا أعلم، وأنت علام الغيوب. اللهم إن كنت تعلم أن هذا الأمر خير لي في ديني ومعاشي وعاقبة أمري فاقدره لي ويسره لي ثم بارك لي فيه، وإن كنت تعلم أن هذا الأمر شر لي في ديني ومعاشي وعاقبة أمري فاصرفه عني واصرفني عنه، واقدر لي الخير حيث كان ثم أرضني به.",
         fr: "Ô Allah, je Te demande de choisir pour moi par Ton savoir, je Te demande la capacité par Ta puissance, et je Te demande de Ton immense faveur. Tu peux et je ne peux pas, Tu sais et je ne sais pas, et Tu connais l'invisible. Ô Allah, si cette affaire m'est bonne dans ma religion, ma vie et son issue, destine-la-moi, facilite-la-moi et bénis-la pour moi. Si elle m'est mauvaise, écarte-la de moi et écarte-moi d'elle, et destine-moi le bien où qu'il soit, puis rends-moi satisfait de lui.",
         es: "Oh Alá, Te pido que elijas por mí con Tu conocimiento, Te pido capacidad con Tu poder y Te pido de Tu inmenso favor. Tú puedes y yo no puedo, Tú sabes y yo no sé, y Tú conoces lo oculto. Oh Alá, si este asunto me es bueno en mi religión, mi vida y su resultado, decrétalo para mí, facilítamelo y bendícelo. Si me es malo, apártalo de mí y apártame de él, y decrétame el bien donde esté, y luego hazme complacido con él." },
    f: { mr: "ज्या कामाचा निर्णय करायचा असेल त्यासाठी दोन रकअत वाचून ही दुआ वाचली जाते.",
         ar: "تُصلى ركعتان ثم تُقال هذه الدعاء في الأمر الذي يُستخار فيه.",
         fr: "On prie deux rak'ahs puis on récite cette doua pour l'affaire concernée.",
         es: "Se rezan dos rakas y luego se recita esta dua por el asunto en cuestión." }
  }
});

if (window.FQDuaLangApply) window.FQDuaLangApply();


/* ═══════════════════════════════════════════════════════════
   Subah-Sham Azkar (1 – 10)
   ═══════════════════════════════════════════════════════════ */
Object.assign(window.FQ_DUA_LANG, {

  "Neend se uthne ki dua": {
    t: { mr: "झोपेतून उठल्यावरची दुआ", ar: "دعاء الاستيقاظ من النوم", fr: "Doua au réveil", es: "Dua al despertar" },
    m: { mr: "सर्व स्तुती अल्लाहसाठी जिने आम्हाला (झोपेच्या) मृत्यूनंतर जिवंत केले, आणि त्याच्याकडेच परत जायचे आहे.",
         ar: "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور.",
         fr: "Louange à Allah qui nous a rendu la vie après nous avoir fait mourir, et c'est vers Lui que se fera la résurrection.",
         es: "Alabanza a Alá que nos devolvió la vida después de hacernos morir, y hacia Él es la resurrección." },
    f: { mr: "झोपेला एक प्रकारची मृत्यू म्हटले आहे; सकाळी जागे होणे हे नवे जीवन आहे.",
         ar: "النوم كالموت، والاستيقاظ حياة جديدة.",
         fr: "Le sommeil est comme une mort ; se réveiller le matin est une vie nouvelle.",
         es: "El sueño es como una muerte; despertar por la mañana es una vida nueva." }
  },

  "Ghar se nikalte waqt": {
    t: { mr: "घरातून बाहेर पडताना", ar: "دعاء الخروج من المنزل", fr: "En sortant de la maison", es: "Al salir de casa" },
    m: { mr: "अल्लाहच्या नावाने, मी अल्लाहवर भरवसा ठेवला; आणि पापापासून दूर राहण्याची शक्ती व नेकी करण्याची ताकद अल्लाहच्या मदतीशिवाय नाही.",
         ar: "بسم الله، توكلت على الله، ولا حول ولا قوة إلا بالله.",
         fr: "Au nom d'Allah, je m'en remets à Allah ; il n'y a de force contre le péché ni de puissance pour le bien sans l'aide d'Allah.",
         es: "En el nombre de Alá, me encomiendo a Alá; no hay fuerza contra el pecado ni poder para el bien sin la ayuda de Alá." },
    f: { mr: "घरातून बाहेर पडताना हे वाचल्यास मार्गदर्शन, पुरेपूर मदत आणि सुरक्षिततेचे वचन आहे.",
         ar: "من قالها عند خروجه كُفي وهُدي ووُقي.",
         fr: "Celui qui la dit en sortant est suffi, guidé et protégé.",
         es: "A quien la diga al salir, se le basta, se le guía y se le protege." }
  },

  "Teeno Qul (Subah + Sham 3-3 martaba)": {
    t: { mr: "तीनही कुल (सकाळ-संध्याकाळ ३-३ वेळा)", ar: "المعوذات (صباحًا ومساءً ثلاثًا)", fr: "Les trois Qoul (matin et soir, 3 fois)", es: "Las tres Qul (mañana y tarde, 3 veces)" },
    m: { mr: "सांग: तो अल्लाह एक आहे; अल्लाह निरपेक्ष आहे; त्याला संतती नाही व तो जन्मला नाही; आणि त्याच्यासारखा कोणी नाही. सांग: मी पहाटेच्या रबाची पनाह मागतो... सांग: मी लोकांच्या रबाची पनाह मागतो...",
         ar: "قل هو الله أحد… قل أعوذ برب الفلق… قل أعوذ برب الناس…",
         fr: "Dis : Il est Allah, Unique… Dis : je cherche protection auprès du Seigneur de l'aube naissante… Dis : je cherche protection auprès du Seigneur des hommes…",
         es: "Di: Él es Alá, Uno… Di: busco protección en el Señor del alba… Di: busco protección en el Señor de los hombres…" },
    f: { mr: "सकाळ-संध्याकाळ तीन वेळा वाचल्यास प्रत्येक गोष्टीपासून पुरेशी सुरक्षा मिळते.",
         ar: "من قالها ثلاثًا صباحًا ومساءً كفته من كل شيء.",
         fr: "Celui qui les récite trois fois matin et soir, cela lui suffit contre toute chose.",
         es: "A quien las recite tres veces por la mañana y por la tarde, le bastan contra toda cosa." }
  },

  "Din ki bhalai maangne ki dua (Asbahna...)": {
    t: { mr: "दिवसाचे भले मागण्याची दुआ (अस्बह्ना…)", ar: "دعاء أصبحنا وأصبح الملك لله", fr: "Doua du matin (Asbahnâ…)", es: "Dua de la mañana (Asbahna…)" },
    m: { mr: "आम्ही सकाळी झालो आणि सारे राज्य अल्लाहचे आहे; सर्व स्तुती अल्लाहसाठी. अल्लाहशिवाय कोणी उपास्य नाही, तो एकटाच आहे, त्याला कोणी भागीदार नाही; त्याचेच राज्य व स्तुती आहे आणि तो प्रत्येक गोष्टीवर सामर्थ्यवान आहे. हे माझ्या रबा! मी तुझ्याकडे या दिवसाचे भले आणि त्यानंतरचे भले मागतो, आणि या दिवसाच्या वाईटापासून व त्यानंतरच्या वाईटापासून तुझी पनाह मागतो. हे माझ्या रबा! मी आळशीपणापासून आणि निकामी म्हातारपणापासून तुझी पनाह मागतो; जहन्नमच्या अझाबापासून व कबरच्या अझाबापासून तुझी पनाह मागतो.",
         ar: "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، رب أسألك خير ما في هذا اليوم وخير ما بعده، وأعوذ بك من شر ما في هذا اليوم وشر ما بعده، رب أعوذ بك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر.",
         fr: "Nous voici au matin et la royauté appartient à Allah ; louange à Allah. Il n'y a de divinité qu'Allah, unique sans associé ; à Lui la royauté et la louange, et Il est capable de toute chose. Mon Seigneur, je Te demande le bien de ce jour et le bien de ce qui le suit, et je cherche refuge contre le mal de ce jour et le mal de ce qui le suit. Mon Seigneur, je cherche refuge contre la paresse et la décrépitude, contre le châtiment du Feu et le châtiment de la tombe.",
         es: "Hemos amanecido y el reino es de Alá; alabanza a Alá. No hay divinidad salvo Alá, Único sin asociado; Suyo es el reino y Suya la alabanza, y Él es capaz de todo. Señor mío, Te pido el bien de este día y el bien de lo que le sigue, y busco refugio del mal de este día y del mal de lo que le sigue. Señor mío, busco refugio de la pereza y de la vejez decrépita, y busco refugio del castigo del Fuego y del castigo de la tumba." },
    f: { mr: "ही सकाळची जामी दुआ आहे; संध्याकाळी ‘अस्बह्ना’ऐवजी ‘अम्सैना’ म्हणतात.",
         ar: "هذا دعاء الصباح، ويُقال في المساء: «أمسينا وأمسى الملك لله».",
         fr: "C'est la doua du matin ; le soir on dit « Amsaynâ » au lieu de « Asbahnâ ».",
         es: "Es la dua de la mañana; por la tarde se dice «Amsayna» en lugar de «Asbahna»." }
  },

  "Nuqsan se hifazat ki dua (3 martaba)": {
    t: { mr: "हानीपासून सुरक्षेची दुआ (३ वेळा)", ar: "دعاء الحفظ من الضرر (ثلاثًا)", fr: "Doua de protection contre tout mal (3 fois)", es: "Dua de protección contra todo daño (3 veces)" },
    m: { mr: "अल्लाहच्या नावाने, ज्याच्या नावासोबत धरती व आकाशातील कोणतीही गोष्ट हानी पोहोचवू शकत नाही; आणि तो ऐकणारा, जाणणारा आहे.",
         ar: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.",
         fr: "Au nom d'Allah, avec le nom duquel rien sur la terre ni dans le ciel ne peut nuire ; Il est l'Audient, l'Omniscient.",
         es: "En el nombre de Alá, con cuyo nombre nada en la tierra ni en el cielo puede dañar; Él es el Oyente, el Sabio." },
    f: { mr: "सकाळ-संध्याकाळ ३ वेळा वाचल्यास कोणतीही गोष्ट हानी पोहोचवत नाही.",
         ar: "من قالها ثلاثًا صباحًا ومساءً لم يضره شيء.",
         fr: "Celui qui la récite trois fois matin et soir, rien ne lui nuira.",
         es: "A quien la recite tres veces por la mañana y por la tarde, nada le dañará." }
  },

  "Afiyat (sehat, salamati) ki jaame dua": {
    t: { mr: "आरोग्य व सुखशांतीची सर्वांगीण दुआ", ar: "دعاء جامع للعافية", fr: "Doua complète pour la santé et la sécurité", es: "Dua completa por la salud y la seguridad" },
    m: { mr: "हे अल्लाह! मी तुझ्याकडे दुनिया व आखिरतची आरोग्यता मागतो. हे अल्लाह! मी माझ्या दीन, दुनिया, कुटुंब आणि मालामध्ये क्षमा व आरोग्यता मागतो. हे अल्लाह! माझी लपलेली कमतरता झाकून टाक आणि माझी भीती शांत कर. हे अल्लाह! माझ्या पुढून, मागून, उजवीकडून, डावीकडून आणि वरून माझे रक्षण कर; आणि माझ्या खालून येणाऱ्या आकस्मिक संकटापासून तुझ्या महानतेची पनाह मागतो.",
         ar: "اللهم إني أسألك العافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي، اللهم احفظني من بين يدي ومن خلفي وعن يميني وعن شمالي ومن فوقي، وأعوذ بعظمتك أن أُغتال من تحتي.",
         fr: "Ô Allah, je Te demande la santé ici-bas et dans l'au-delà. Ô Allah, je Te demande le pardon et la santé dans ma religion, ma vie, ma famille et mes biens. Ô Allah, couvre mes défauts et rassure mes craintes. Ô Allah, protège-moi devant, derrière, à ma droite, à ma gauche et au-dessus de moi, et je cherche refuge dans Ta grandeur contre ce qui pourrait me saisir par-dessous.",
         es: "Oh Alá, Te pido salud en este mundo y en el más allá. Oh Alá, Te pido perdón y salud en mi religión, mi vida, mi familia y mis bienes. Oh Alá, cubre mis defectos y calma mis miedos. Oh Alá, protégeme por delante, por detrás, a mi derecha, a mi izquierda y por encima de mí, y busco refugio en Tu grandeza de lo que pueda sorprenderme por debajo." },
    f: { mr: "ही सकाळ-संध्याकाळ वाचली जाणारी सर्वांगीण दुआ आहे.",
         ar: "تُقال صباحًا ومساءً.",
         fr: "On la récite matin et soir.",
         es: "Se recita por la mañana y por la tarde." }
  },

  "Mamlaat sanwarne ki dua (Fatima RA ki wasiyat)": {
    t: { mr: "कामे सुधारण्याची दुआ (फातिमा र.अ. यांची वसियत)", ar: "دعاء إصلاح الشأن (وصية فاطمة رضي الله عنها)", fr: "Doua pour la bonne marche des affaires (recommandée à Fatima)", es: "Dua para el buen curso de los asuntos (recomendada a Fátima)" },
    m: { mr: "हे जिवंत! हे सर्वांना सांभाळणाऱ्या! मी तुझ्या दयेच्या माध्यमातून हाक मारतो; माझी सर्व कामे सुधार आणि मला पापणी मिचकावण्याइतकाही माझ्या मनाच्या स्वाधीन करू नकोस.",
         ar: "يا حي يا قيوم برحمتك أستغيث، أصلح لي شأني كله، ولا تكلني إلى نفسي طرفة عين.",
         fr: "Ô Vivant, ô Subsistant, par Ta miséricorde j'implore secours : réforme toutes mes affaires, et ne me laisse pas à moi-même l'espace d'un clin d'œil.",
         es: "Oh Viviente, oh Subsistente, por Tu misericordia imploro auxilio: repara todos mis asuntos y no me dejes a mí mismo ni el tiempo de un parpadeo." },
    f: { mr: "नबी ﷺ यांनी फातिमा र.अ. यांना ही दुआ सांगितली.",
         ar: "أوصى بها النبي ﷺ فاطمة رضي الله عنها.",
         fr: "Le Prophète ﷺ la recommanda à Fatima.",
         es: "El Profeta ﷺ se la recomendó a Fátima." }
  },

  "Nafs aur shaitan ke shar se panah (Abu Bakr RA ko sikhayi)": {
    t: { mr: "स्वतःच्या मनाच्या व शैतानाच्या वाईटापासून पनाह (अबू बक्र र.अ. यांना शिकवली)", ar: "الاستعاذة من شر النفس والشيطان (علّمها أبو بكر)", fr: "Refuge contre le mal de soi-même et de Satan (enseignée à Abu Bakr)", es: "Refugio del mal propio y de Satán (enseñada a Abu Bakr)" },
    m: { mr: "हे अल्लाह! गुप्त व प्रकट जाणणाऱ्या, आकाशे व धरतीच्या निर्माणकर्त्या, प्रत्येक गोष्टीच्या रबा व मालक! मी साक्ष देतो की तुझ्याशिवाय कोणी उपास्य नाही. मी माझ्या मनाच्या वाईटापासून, शैतान व त्याच्या शिर्कापासून, आणि स्वतःवर वाईट केल्यापासून किंवा ते कोणा मुस्लिमाकडे ओढल्यापासून तुझी पनाह मागतो.",
         ar: "اللهم عالم الغيب والشهادة، فاطر السماوات والأرض، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي، ومن شر الشيطان وشركه، وأن أقترف على نفسي سوءًا أو أجره إلى مسلم.",
         fr: "Ô Allah, connaisseur de l'invisible et du visible, créateur des cieux et de la terre, Seigneur et maître de toute chose, je témoigne qu'il n'y a de divinité que Toi. Je cherche refuge contre le mal de moi-même, contre le mal de Satan et de son polythéisme, et contre le fait de commettre un mal ou de l'attirer vers un musulman.",
         es: "Oh Alá, conocedor de lo oculto y lo visible, creador de los cielos y la tierra, Señor y dueño de toda cosa, doy testimonio de que no hay divinidad sino Tú. Busco refugio del mal de mí mismo, del mal de Satán y de su politeísmo, y de cometer un mal o de arrastrarlo hacia un musulmán." },
    f: { mr: "नबी ﷺ यांनी अबू बक्र र.अ. यांना ही दुआ शिकवली.",
         ar: "علّمها النبي ﷺ أبا بكر رضي الله عنه.",
         fr: "Le Prophète ﷺ l'a enseignée à Abu Bakr.",
         es: "El Profeta ﷺ se la enseñó a Abu Bakr." }
  },

  "Iman ki tajdeed ka kalimah": {
    t: { mr: "ईमानाच्या नूतनीकरणाचा कलिमा", ar: "كلمة تجديد الإيمان", fr: "La formule de renouvellement de la foi", es: "La fórmula de renovación de la fe" },
    m: { mr: "अल्लाह माझा रब, इस्लाम माझा दीन आणि मुहम्मद ﷺ माझे नबी यावर मी राजी आहे.",
         ar: "رضيت بالله ربًا، وبالإسلام دينًا، وبمحمد نبيًا.",
         fr: "Je suis satisfait d'Allah comme Seigneur, de l'islam comme religion et de Muhammad ﷺ comme Prophète.",
         es: "Estoy complacido con Alá como Señor, con el islam como religión y con Mujámmad ﷺ como Profeta." },
    f: { mr: "जो हे मनापासून मानेल, त्याच्यासाठी जन्नत अनिवार्य होते.",
         ar: "من قالها بقلبه وجبت له الجنة.",
         fr: "Celui qui le dit du cœur, le Paradis lui est assuré.",
         es: "A quien lo diga con el corazón, el Paraíso le queda asegurado." }
  },

  "Subhanallah wa bihamdihi (100 martaba)": {
    t: { mr: "‘सुभानअल्लाह व बिहम्दिहि’ (१०० वेळा)", ar: "سبحان الله وبحمده (مئة مرة)", fr: "« Subhânallâhi wa bihamdih » (100 fois)", es: "«Subhan Alá wa bihamdih» (100 veces)" },
    m: { mr: "अल्लाह पवित्र आहे आणि मी त्याच्या स्तुतीसह त्याची तस्बीह करतो.",
         ar: "سبحان الله وبحمده.",
         fr: "Gloire à Allah et louange à Lui.",
         es: "Gloria a Alá y alabanza a Él." },
    f: { mr: "सकाळ-संध्याकाळ १०० वेळा वाचल्यास पापे माफ होतात.",
         ar: "من قالها مئة مرة صباحًا ومساءً حُطت خطاياه.",
         fr: "Celui qui la dit cent fois matin et soir, ses péchés sont effacés.",
         es: "A quien la diga cien veces por la mañana y por la tarde, se le borran sus pecados." }
  }
});

if (window.FQDuaLangApply) window.FQDuaLangApply();


/* ═══════════════════════════════════════════════════════════
   Subah-Sham Azkar (11 – 19)
   ═══════════════════════════════════════════════════════════ */
Object.assign(window.FQ_DUA_LANG, {

  "La ilaha illallah (100 martaba)": {
    t: { mr: "‘ला इलाहा इल्लल्लाह’ (१०० वेळा)", ar: "لا إله إلا الله (مئة مرة)", fr: "« Lâ ilâha illallâh » (100 fois)", es: "«La ilaha illa Alá» (100 veces)" },
    m: { mr: "अल्लाहशिवाय कोणी उपास्य नाही, तो एकटाच आहे, त्याला कोणी भागीदार नाही; त्याचेच राज्य व स्तुती आहे आणि तो प्रत्येक गोष्टीवर सामर्थ्यवान आहे.",
         ar: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.",
         fr: "Il n'y a de divinité qu'Allah, unique sans associé ; à Lui la royauté et la louange, et Il est capable de toute chose.",
         es: "No hay divinidad salvo Alá, Único sin asociado; Suyo es el reino y Suya la alabanza, y Él es capaz de todo." },
    f: { mr: "दिवसात १०० वेळा वाचल्यास दहा गुलाम मुक्त केल्याचा मोबदला, १०० नेक्या, १०० पापे माफ.",
         ar: "من قالها مئة مرة في اليوم كان له عدل عشر رقاب، ومئة حسنة، ومُحيت عنه مئة سيئة.",
         fr: "Cent fois par jour : la récompense d'affranchir dix esclaves, cent bonnes actions, et cent péchés effacés.",
         es: "Cien veces al día: la recompensa de liberar diez esclavos, cien buenas obras y cien pecados borrados." }
  },

  "Darood Shareef": {
    t: { mr: "दुरुद शरीफ", ar: "الصلاة على النبي", fr: "Bénédiction sur le Prophète", es: "Bendición sobre el Profeta" },
    m: { mr: "हे अल्लाह! मुहम्मद ﷺ आणि त्यांच्या कुटुंबावर दया पाठव, जशी तू इब्राहीम आणि त्यांच्या कुटुंबावर पाठवली; निःसंशय तू स्तुतीपात्र व महिमावान आहेस. हे अल्लाह! मुहम्मद ﷺ आणि त्यांच्या कुटुंबावर बरकत पाठव, जशी तू इब्राहीम आणि त्यांच्या कुटुंबावर पाठवली.",
         ar: "اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد، اللهم بارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد.",
         fr: "Ô Allah, prie sur Muhammad et sa famille comme Tu as prié sur Ibrahim et sa famille ; Tu es Digne de louange, Glorieux. Bénis Muhammad et sa famille comme Tu as béni Ibrahim et sa famille.",
         es: "Oh Alá, bendice a Mujámmad y a su familia como bendijiste a Ibrahim y a su familia; Tú eres Digno de alabanza, Glorioso. Colma de bendiciones a Mujámmad y a su familia como colmaste a Ibrahim y a su familia." },
    f: { mr: "दुरुद वाचणे हे सर्वात उत्तम स्मरणांपैकी एक आहे.",
         ar: "الصلاة على النبي من أفضل الأذكار.",
         fr: "La bénédiction sur le Prophète est l'un des meilleurs dhikrs.",
         es: "La bendición sobre el Profeta es uno de los mejores dhikrs." }
  },

  "Sayyidul Istighfar": {
    t: { mr: "सय्यिदुल इस्तिगफार", ar: "سيد الاستغفار", fr: "Sayyid al-istighfâr", es: "Sayyid al-istighfar" },
    m: { mr: "हे अल्लाह! तू माझा रब आहेस, तुझ्याशिवाय कोणी उपास्य नाही; तू मला निर्माण केले आणि मी तुझा दास आहे. मी तुझ्या वचनावर व करारावर माझ्या ताकदीपुरता आहे. मी केलेल्या वाईटापासून तुझी पनाह मागतो. माझ्यावरच्या तुझ्या कृपेची कबुली देतो आणि माझ्या पापाचीही कबुली देतो; तर मला माफ कर, कारण तुझ्याशिवाय कोणी पापे माफ करत नाही.",
         ar: "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأبوء بذنبي فاغفر لي، فإنه لا يغفر الذنوب إلا أنت.",
         fr: "Ô Allah, Tu es mon Seigneur, il n'y a de divinité que Toi ; Tu m'as créé et je suis Ton serviteur. Je reste fidèle à Ton pacte et à Ta promesse autant que je le peux. Je cherche refuge contre le mal que j'ai commis. Je reconnais Ton bienfait sur moi et je reconnais mon péché : pardonne-moi, car nul ne pardonne les péchés sauf Toi.",
         es: "Oh Alá, Tú eres mi Señor, no hay divinidad sino Tú; Tú me creaste y yo soy Tu siervo. Mantengo Tu pacto y Tu promesa en la medida que puedo. Busco refugio del mal que he cometido. Reconozco Tu favor sobre mí y reconozco mi pecado: perdóname, pues nadie perdona los pecados sino Tú." },
    f: { mr: "जो दिवसा किंवा रात्री विश्वासाने हे वाचेल आणि त्याच दिवशी/रात्री मरण पावेल, तो जन्नतात जाईल.",
         ar: "من قالها بالنهار أو الليل موقنًا بها فمات دخل الجنة.",
         fr: "Celui qui la récite de jour ou de nuit avec conviction et meurt, entre au Paradis.",
         es: "Quien la recite de día o de noche con convicción y muera, entra en el Paraíso." }
  },

  "Rasulullah ﷺ ka roz ka istighfar (100 martaba)": {
    t: { mr: "नबी ﷺ यांचा रोजचा इस्तिगफार (१०० वेळा)", ar: "استغفار النبي ﷺ كل يوم (مئة مرة)", fr: "L'istighfâr quotidien du Prophète ﷺ (100 fois)", es: "El istighfar diario del Profeta ﷺ (100 veces)" },
    m: { mr: "मी अल्लाहकडे क्षमा मागतो आणि त्याच्याकडे तौबा करतो.",
         ar: "أستغفر الله وأتوب إليه.",
         fr: "Je demande pardon à Allah et je reviens à Lui.",
         es: "Pido perdón a Alá y a Él vuelvo." },
    f: { mr: "नबी ﷺ रोज १०० वेळा इस्तिगफार करत असत.",
         ar: "كان النبي ﷺ يستغفر مئة مرة في اليوم.",
         fr: "Le Prophète ﷺ demandait pardon cent fois par jour.",
         es: "El Profeta ﷺ pedía perdón cien veces al día." }
  },

  "Gunahon ki muafi ka mukammal istighfar": {
    t: { mr: "पापांच्या माफीचा सर्वांगीण इस्तिगफार", ar: "الاستغفار الجامع لمغفرة الذنوب", fr: "L'istighfâr complet pour le pardon des péchés", es: "El istighfar completo para el perdón de los pecados" },
    m: { mr: "मी महान अल्लाहकडे क्षमा मागतो, ज्याच्याशिवाय कोणी उपास्य नाही, जो जिवंत व सर्वांना टिकवणारा आहे; आणि मी त्याच्याकडे तौबा करतो.",
         ar: "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه.",
         fr: "Je demande pardon à Allah le Très Grand, en dehors duquel il n'y a de divinité, le Vivant, le Subsistant, et je reviens à Lui.",
         es: "Pido perdón a Alá el Inmenso, fuera de Quien no hay divinidad, el Viviente, el Subsistente, y a Él vuelvo." },
    f: { mr: "जो हे म्हणेल, अल्लाह त्याला माफ करतो — जरी तो रणांगणातून पळाला असेल तरी.",
         ar: "من قاله غُفر له وإن كان فر من الزحف.",
         fr: "Celui qui le dit, Allah lui pardonne, même s'il a fui le champ de bataille.",
         es: "A quien lo diga, Alá le perdona, aunque haya huido del campo de batalla." }
  },

  "Rabbi ghfir li wa tub 'alayya": {
    t: { mr: "‘रब्बिगफिर ली व तुब अलय्य’", ar: "رب اغفر لي وتب عليّ", fr: "« Rabbighfir lî wa tub 'alayya »", es: "«Rabbi-ghfir li wa tub 'alayya»" },
    m: { mr: "हे माझ्या रबा! मला माफ कर आणि माझी तौबा कबूल कर; निःसंशय तूच तौबा कबूल करणारा, परम दयाळू आहेस.",
         ar: "رب اغفر لي وتب عليّ، إنك أنت التواب الرحيم.",
         fr: "Mon Seigneur, pardonne-moi et accepte mon repentir ; Tu es Celui qui accepte le repentir, le Très Miséricordieux.",
         es: "Señor mío, perdóname y acepta mi arrepentimiento; Tú eres Quien acepta el arrepentimiento, el Misericordioso." },
    f: { mr: "नबी ﷺ एकाच मजलिसीत १०० वेळा हे वाचत असत.",
         ar: "كان النبي ﷺ يقوله مئة مرة في المجلس الواحد.",
         fr: "Le Prophète ﷺ le disait cent fois dans une même assemblée.",
         es: "El Profeta ﷺ lo decía cien veces en una misma reunión." }
  },

  "Saare gunahon ki muafi ki dua": {
    t: { mr: "सर्व पापांच्या माफीची दुआ", ar: "دعاء مغفرة الذنوب كلها", fr: "Doua pour le pardon de tous les péchés", es: "Dua por el perdón de todos los pecados" },
    m: { mr: "हे अल्लाह! माझी सर्व पापे माफ कर — लहान व मोठी, पहिली व शेवटची, उघडी व लपलेली.",
         ar: "اللهم اغفر لي ذنبي كله، دقه وجله، وأوله وآخره، وعلانيته وسره.",
         fr: "Ô Allah, pardonne-moi tous mes péchés : petits et grands, premiers et derniers, apparents et cachés.",
         es: "Oh Alá, perdona todos mis pecados: pequeños y grandes, primeros y últimos, manifiestos y ocultos." },
    f: { mr: "सजद्यात किंवा कधीही वाचू शकता.",
         ar: "تُقال في السجود أو في أي وقت.",
         fr: "On peut la réciter dans le sujud ou à tout moment.",
         es: "Se puede recitar en el suyud o en cualquier momento." }
  },

  "Adam AS ki tauba ki dua": {
    t: { mr: "आदम (अ.स.) यांच्या तौब्याची दुआ", ar: "دعاء توبة آدم عليه السلام", fr: "La doua du repentir d'Adam", es: "La dua del arrepentimiento de Adán" },
    m: { mr: "हे आमच्या रबा! आम्ही आमच्या जिवांवर अन्याय केला; आणि जर तू आम्हाला माफ केले नाहीस व आमच्यावर दया केली नाहीस, तर आम्ही निश्चितच तोटा सहन करणाऱ्यांमध्ये होऊ.",
         ar: "ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين.",
         fr: "Notre Seigneur, nous nous sommes fait du tort ; si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons du nombre des perdants.",
         es: "Señor nuestro, nos hemos hecho injusticia; si no nos perdonas y tienes misericordia de nosotros, seremos de los perdedores." },
    f: { mr: "ही हजरत आदम व हव्वा (अ.स.) यांच्या तौब्याची दुआ आहे.",
         ar: "هي دعاء توبة آدم وحواء عليهما السلام.",
         fr: "C'est la doua du repentir d'Adam et Ève.",
         es: "Es la dua del arrepentimiento de Adán y Eva." }
  },

  "Maafi (Afw) ki dua": {
    t: { mr: "माफी (अफव) ची दुआ", ar: "دعاء العفو", fr: "Doua du pardon (al-'afw)", es: "Dua del perdón (al-'afw)" },
    m: { mr: "हे अल्लाह! निःसंशय तू मोठा माफ करणारा आहेस, माफी आवडते; तर मला माफ कर.",
         ar: "اللهم إنك عفو تحب العفو فاعف عني.",
         fr: "Ô Allah, Tu es Pardonneur et Tu aimes le pardon : pardonne-moi.",
         es: "Oh Alá, Tú eres Indulgente y amas el perdón: perdóname." },
    f: { mr: "विशेषतः रमजानच्या शेवटच्या रात्रींमध्ये वाचा.",
         ar: "تُقال خاصة في العشر الأواخر من رمضان.",
         fr: "À réciter surtout les dernières nuits de Ramadan.",
         es: "Recitarla sobre todo en las últimas noches de Ramadán." }
  }
});

if (window.FQDuaLangApply) window.FQDuaLangApply();
