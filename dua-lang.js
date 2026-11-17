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
