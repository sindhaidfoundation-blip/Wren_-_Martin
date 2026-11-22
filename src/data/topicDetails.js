export const topicDetails = {
  "parts-of-speech": {
    overview: "Every word has a job in a sentence. The main word classes are nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions and interjections; articles are also taught as a separate group.",
    watchFor: "Classify a word by how it is used in that sentence, not by the word alone. A word can belong to different classes in different contexts.",
    examples: ["The fast train arrived. (fast describes train.)", "The train moved fast. (fast describes moved.)"]
  },
  "nouns": {
    overview: "Nouns name people, places, objects, qualities and ideas. They can act as subjects, objects or complements, and many have singular and plural forms.",
    watchFor: "A noun is not always a physical thing. Words such as honesty, freedom and childhood name ideas or qualities.",
    examples: ["Honesty matters. (idea)", "The children visited the museum. (people and place)"],
    nounTypes: [
      {
        title: "Masculine Gender",
        english: "A masculine noun refers to a male person or animal.",
        urdu: "Masculine Gender ایسے اسم کو کہتے ہیں جو کسی مرد، لڑکے یا نر جانور کے لیے استعمال ہو۔",
        sindhi: "Masculine Gender اهڙي اسم کي چئبو آهي جيڪو مرد، ڇوڪري يا نر جانور لاءِ استعمال ٿئي.",
        examples: [
          ["boy", "لڑکا", "ڇوڪرو"],
          ["man", "مرد", "مرد"],
          ["king", "بادشاہ", "بادشاهه"],
          ["father", "والد", "پيءُ"],
          ["lion", "شیر (نر)", "شينهن (نر)"]
        ]
      },
      {
        title: "Feminine Gender",
        english: "A feminine noun refers to a female person or animal.",
        urdu: "Feminine Gender ایسے اسم کو کہتے ہیں جو کسی عورت، لڑکی یا مادہ جانور کے لیے استعمال ہو۔",
        sindhi: "Feminine Gender اهڙي اسم کي چئبو آهي جيڪو عورت، ڇوڪري يا مادي جانور لاءِ استعمال ٿئي.",
        examples: [
          ["girl", "لڑکی", "ڇوڪري"],
          ["woman", "عورت", "عورت"],
          ["queen", "ملکہ", "راڻي"],
          ["mother", "والدہ", "ماءُ"],
          ["lioness", "شیرنی", "شينهنياڻي"]
        ]
      },
      {
        title: "Common Gender",
        english: "A common-gender noun can refer to either a male or a female.",
        urdu: "Common Gender ایسا اسم ہے جو مرد اور عورت دونوں کے لیے استعمال ہو سکتا ہے۔",
        sindhi: "Common Gender اهڙو اسم آهي جيڪو مرد ۽ عورت ٻنهي لاءِ استعمال ٿي سگهي ٿو.",
        examples: [
          ["teacher", "استاد (مرد یا عورت)", "استاد (مرد يا عورت)"],
          ["student", "طالب علم (لڑکا یا لڑکی)", "شاگرد (ڇوڪرو يا ڇوڪري)"],
          ["child", "بچہ (لڑکا یا لڑکی)", "ٻار (ڇوڪرو يا ڇوڪري)"],
          ["doctor", "ڈاکٹر (مرد یا عورت)", "ڊاڪٽر (مرد يا عورت)"],
          ["friend", "دوست (مرد یا عورت)", "دوست (مرد يا عورت)"]
        ]
      },
      {
        title: "Neuter Gender",
        english: "A neuter-gender noun refers to a thing that is neither male nor female, usually a non-living object.",
        urdu: "Neuter Gender ایسے اسم کو کہتے ہیں جو نہ مذکر ہو نہ مؤنث؛ عموماً یہ بے جان چیزوں کے لیے استعمال ہوتا ہے۔",
        sindhi: "Neuter Gender اهڙي اسم کي چئبو آهي جيڪو نه نر هجي نه مادي؛ عام طور بي جان شين لاءِ استعمال ٿيندو آهي.",
        examples: [
          ["book", "کتاب", "ڪتاب"],
          ["table", "میز", "ميز"],
          ["pen", "قلم", "قلم"],
          ["chair", "کرسی", "ڪرسي"],
          ["window", "کھڑکی", "دري"]
        ]
      },
      {
        title: "Personified Gender",
        english: "Personification is a literary way of speaking in which a non-human thing or idea is described as if it were a person, sometimes using he or she. This is a figure of speech, not the thing's real gender.",
        urdu: "Personified Gender میں کسی بے جان چیز یا خیال کو ادبی انداز میں انسان کی طرح پیش کیا جاتا ہے، اور کبھی اسے he یا she کہا جاتا ہے۔ یہ ادبی صنعت ہے، چیز کی حقیقی جنس نہیں۔",
        sindhi: "Personified Gender ۾ ڪنهن بي جان شيءِ يا خيال کي ادبي انداز ۾ انسان وانگر ڏيکاريو ويندو آهي ۽ ڪڏهن ان لاءِ he يا she استعمال ٿيندو آهي. اها ادبي تشبيهه يا صنعت آهي، شيءِ جي حقيقي جنس نه آهي.",
        examples: [
          ["The sun smiled down on us. (sun as a person)", "سورج ہم پر مسکرایا۔ (سورج کو انسان کی طرح دکھایا گیا)", "سج اسان ڏانهن مُرڪيو. (سج کي انسان وانگر ڏيکاريو ويو)"],
          ["The moon hid her face behind a cloud. (poetic)", "چاند نے بادل کے پیچھے اپنا چہرہ چھپا لیا۔ (شاعرانہ انداز)", "چنڊ ڪڪر پٺيان پنهنجو چهرو لڪايو. (شاعراڻو انداز)"],
          ["The wind whispered through the trees.", "ہوا درختوں میں سرگوشی کرنے لگی۔", "هوا وڻن ۾ سرگوشيون ڪرڻ لڳي."],
          ["The stars danced in the sky.", "ستارے آسمان پر رقص کرنے لگے۔", "تارا آسمان ۾ نچڻ لڳا."],
          ["Death is often pictured as a hooded figure.", "موت کو اکثر چادر اوڑھے ہوئے انسانی شکل میں دکھایا جاتا ہے۔", "موت کي اڪثر ڍڪيل انساني شڪل ۾ ڏيکاريو ويندو آهي."]
        ]
      },
      {
        title: "Common Noun",
        english: "A common noun is a general name for a person, place, animal or thing. It is not the special name of one particular person or place. Common nouns can be singular (one) or plural (more than one).",
        urdu: "Common noun کسی شخص، جگہ، جانور یا چیز کا عام نام ہوتا ہے، کسی ایک خاص شخص یا جگہ کا مخصوص نام نہیں۔ Common noun واحد بھی ہو سکتا ہے، یعنی ایک، اور جمع بھی، یعنی ایک سے زیادہ۔",
        sindhi: "Common noun ڪنهن ماڻهو، هنڌ، جانور يا شيءِ جو عام نالو آهي؛ اهو ڪنهن هڪ خاص ماڻهو يا هنڌ جو مخصوص نالو ناهي. Common noun واحد به ٿي سگهي ٿو، يعني هڪ، ۽ جمع به، يعني هڪ کان وڌيڪ.",
        examples: [
          ["boy → boys", "لڑکا → لڑکے", "ڇوڪرو → ڇوڪرا"],
          ["girl → girls", "لڑکی → لڑکیاں", "ڇوڪري → ڇوڪريون"],
          ["teacher → teachers", "استاد → اساتذہ", "استاد → استاد"],
          ["student → students", "طالب علم → طالب علم", "شاگرد → شاگرد"],
          ["book → books", "کتاب → کتابیں", "ڪتاب → ڪتاب"],
          ["pen → pens", "قلم → قلم", "قلم → قلم"],
          ["chair → chairs", "کرسی → کرسیاں", "ڪرسي → ڪرسيون"],
          ["table → tables", "میز → میزیں", "ميز → ميزون"],
          ["car → cars", "گاڑی → گاڑیاں", "گاڏي → گاڏيون"],
          ["bus → buses", "بس → بسیں", "بس → بسون"],
          ["city → cities", "شہر → شہر", "شهر → شهر"],
          ["village → villages", "گاؤں → گاؤں", "ڳوٺ → ڳوٺ"],
          ["river → rivers", "دریا → دریا", "درياهه → درياهه"],
          ["tree → trees", "درخت → درخت", "وڻ → وڻ"],
          ["flower → flowers", "پھول → پھول", "گل → گل"],
          ["dog → dogs", "کتا → کتے", "ڪتو → ڪتا"],
          ["cat → cats", "بلی → بلیاں", "ٻلي → ٻليون"],
          ["bird → birds", "پرندہ → پرندے", "پکي → پکي"],
          [" apple → apples", "سیب → سیب", "صوف → صوف"],
          ["box → boxes", "ڈبہ → ڈبے", "دٻو → دٻا"]
        ]
      },
      {
        title: "Abstract Noun",
        english: "An abstract noun names an idea, quality, feeling or state that we cannot normally see or touch.",
        urdu: "Abstract noun کسی خیال، خوبی، احساس یا کیفیت کا نام ہے جسے ہم عام طور پر دیکھ یا چھو نہیں سکتے۔",
        sindhi: "Abstract noun ڪنهن خيال، خوبي، احساس يا حالت جو نالو آهي، جنهن کي اسين عام طور ڏسي يا ڇهي نٿا سگهون.",
        examples: [
          ["honesty", "ایمانداری", "ايمانداري"],
          ["bravery", "بہادری", "بهادري"],
          ["love", "محبت", "محبت"],
          ["happiness", "خوشی", "خوشي"],
          ["freedom", "آزادی", "آزادي"]
        ]
      },
      {
        title: "Number of Nouns",
        english: "Number tells whether a noun refers to one person or thing (singular) or more than one (plural).",
        urdu: "Noun کا Number بتاتا ہے کہ اسم ایک شخص یا چیز کے لیے ہے (واحد) یا ایک سے زیادہ کے لیے (جمع)۔",
        sindhi: "اسم جو Number ٻڌائي ٿو ته اسم هڪ ماڻهو يا شيءِ لاءِ آهي (واحد) يا هڪ کان وڌيڪ لاءِ (جمع).",
        examples: [
          ["book → books", "ایک کتاب → کئی کتابیں", "هڪ ڪتاب → ڪيترائي ڪتاب"],
          ["child → children", "ایک بچہ → کئی بچے", "هڪ ٻار → ڪيترائي ٻار"],
          ["man → men", "ایک مرد → کئی مرد", "هڪ مرد → ڪيترائي مرد"],
          ["city → cities", "ایک شہر → کئی شہر", "هڪ شهر → ڪيترائي شهر"],
          ["box → boxes", "ایک ڈبہ → کئی ڈبے", "هڪ دٻو → ڪيترائي دٻا"]
        ],
        specialSections: [
          {
            title: "Some nouns have two plural forms with different meanings",
            english: "Some nouns have two plural forms. Each plural has a different meaning. Choose the form according to what you want to say.",
            urdu: "کچھ اسموں کی جمع بنانے کی دو صورتیں ہوتی ہیں، اور دونوں کے معنی مختلف ہوتے ہیں۔ درست معنی کے مطابق جمع استعمال کریں۔",
            sindhi: "ڪجهه اسمن جا جمع جا ٻه روپ هوندا آهن ۽ ٻنهي جا مطلب مختلف هوندا آهن. پنهنجي مطلب موجب صحيح جمع استعمال ڪريو.",
            examples: [
              ["brother → brothers (sons of the same parent); brethren (members of a society or community)", "Brothers: ایک ہی والدین کے بیٹے؛ Brethren: کسی جماعت یا برادری کے ارکان۔", "Brothers: ساڳين والدين جا پٽ؛ Brethren: ڪنهن جماعت يا برادري جا ميمبر."],
              ["cloth → cloths (kinds or pieces of cloth); clothes (garments)", "Cloths: کپڑے کی قسمیں یا ٹکڑے؛ Clothes: پہننے کے کپڑے۔", "Cloths: ڪپڙي جا قسم يا ٽڪرا؛ Clothes: پائڻ وارا ڪپڙا."],
              ["die → dies (stamps for coining); dice (small cubes used in games)", "Dies: سکے بنانے کے سانچے؛ Dice: کھیل میں استعمال ہونے والے چھوٹے مکعب۔", "Dies: سڪا ٺاهڻ جا ٺپا؛ Dice: راند ۾ استعمال ٿيندڙ ننڍڙا پاسا."],
              ["index → indexes (tables of contents); indices (signs used in algebra)", "Indexes: کتابوں کے فہرستِ مضامین؛ Indices: الجبرا میں استعمال ہونے والی علامتیں۔", "Indexes: ڪتابن جون فهرستون؛ Indices: الجبرا ۾ استعمال ٿيندڙ نشانيون."],
              ["penny → pennies (number of coins); pence (amount in value)", "Pennies: سکوں کی تعداد؛ Pence: رقم یا مالیت۔", "Pennies: سڪن جو تعداد؛ Pence: رقم يا قدر."]
            ]
          },
          {
            title: "Some nouns have two meanings in singular but only one in plural",
            english: "Some nouns can have two meanings in the singular form, but their plural form refers to only one of those meanings.",
            urdu: "کچھ اسم واحد میں دو مختلف معنی رکھتے ہیں، لیکن ان کی جمع صرف ایک معنی کے لیے استعمال ہوتی ہے۔",
            sindhi: "ڪجهه اسم واحد ۾ ٻه مختلف مطلب ڏيندا آهن، پر انهن جو جمع رڳو هڪ مطلب لاءِ استعمال ٿيندو آهي.",
            examples: [
              ["light → lights (lamps)", "Light کے معنی روشنی یا چراغ ہو سکتے ہیں؛ Lights سے مراد چراغ ہیں۔", "Light جا مطلب روشني يا ڏيئو ٿي سگهن ٿا؛ Lights مان مراد ڏيئا آهن."],
              ["people → peoples (nations)", "People سے مراد لوگ؛ Peoples سے مراد قومیں۔", "People مان مراد ماڻهو؛ Peoples مان مراد قومون."],
              ["powder → powders (doses of medicine)", "Powder کے معنی گرد یا دوا کا سفوف؛ Powders سے مراد دوا کی خوراکیں۔", "Powder جا مطلب مٽي يا دوا جو پائوڊر؛ Powders مان مراد دوا جون خوراڪون."],
              ["practice → practices (habits)", "Practice کے معنی عادت یا پیشہ ورانہ مشق؛ Practices سے مراد عادتیں۔", "Practice جا مطلب عادت يا پيشي جي مشق؛ Practices مان مراد عادتون."]
            ]
          },
          {
            title: "Some nouns have one meaning in singular and two in plural",
            english: "Some nouns have one meaning in the singular but their plural form can express two different meanings.",
            urdu: "کچھ اسم واحد میں ایک معنی دیتے ہیں، لیکن جمع میں ان کے دو مختلف معنی ہو سکتے ہیں۔",
            sindhi: "ڪجهه اسم واحد ۾ هڪ مطلب ڏيندا آهن، پر جمع ۾ انهن جا ٻه مختلف مطلب ٿي سگهن ٿا.",
            examples: [
              ["colour → colours (1) hues; (2) a regiment's flag", "Colour: رنگ یا hue؛ Colours: رنگوں کے شیڈز یا کسی فوجی دستے کا پرچم۔", "Colour: رنگ يا ڇانوَ؛ Colours: رنگن جا قسم يا فوجي دستي جو جهنڊو."],
              ["custom → customs (1) habits; (2) duties levied on imports", "Custom: رواج؛ Customs: عادتیں یا درآمدات پر محصول۔", "Custom: رواج؛ Customs: عادتون يا درآمد تي محصول."],
              ["effect → effects (1) results; (2) property or belongings", "Effect: نتیجہ؛ Effects: نتائج یا ذاتی سامان۔", "Effect: نتيجو؛ Effects: نتيجا يا ذاتي سامان."],
              ["manner → manners (1) methods; (2) correct behaviour", "Manner: طریقہ؛ Manners: طریقے یا اچھا برتاؤ۔", "Manner: طريقو؛ Manners: طريقا يا سٺو ورتاءُ."],
              ["moral → morals (1) moral lessons; (2) conduct", "Moral: اخلاقی سبق؛ Morals: اخلاقی اسباق یا کردار۔", "Moral: اخلاقي سبق؛ Morals: اخلاقي سبق يا ڪردار."],
              ["number → numbers (1) quantities; (2) verses", "Number: تعداد؛ Numbers: مقداریں یا اشعار۔", "Number: تعداد؛ Numbers: مقدارون يا شعر."],
              ["pain → pains (1) sufferings; (2) care or exertion", "Pain: تکلیف؛ Pains: تکلیفیں یا محنت و کوشش۔", "Pain: تڪليف؛ Pains: تڪليفون يا محنت ۽ ڪوشش."],
              ["premise → premises (1) propositions; (2) buildings", "Premise: مقدمہ یا تجویز؛ Premises: قضیے یا عمارت/احاطہ۔", "Premise: دليل يا تجويز؛ Premises: دليلون يا عمارت/احاطو."]
            ]
          },
          {
            title: "Plural forms borrowed from other languages",
            english: "Some nouns borrowed from Italian, French and Hebrew have traditional plural forms. The textbook also gives common English alternatives for some words.",
            urdu: "اطالوی، فرانسیسی اور عبرانی زبانوں سے آئے ہوئے کچھ اسموں کی روایتی جمع مختلف ہوتی ہے۔ کتاب بعض الفاظ کی عام انگریزی جمع بھی دیتی ہے۔",
            sindhi: "اطالوي، فرانسيسي ۽ عبراني ٻولين مان آيل ڪجهه اسمن جا روايتي جمع الڳ هوندا آهن. ڪتاب ڪجهه لفظن جا عام انگريزي جمع به ڏئي ٿي.",
            examples: [
              ["bandit → banditti (or bandits)", "ڈاکو → banditti یا عام جمع bandits۔", "ڌاڙيل → banditti يا عام جمع bandits."],
              ["madam → mesdames; monsieur → messieurs", "Madam کی جمع Mesdames؛ Monsieur کی جمع Messieurs۔", "Madam جو جمع Mesdames؛ Monsieur جو جمع Messieurs."],
              ["cherub → cherubim (or cherubs); seraph → seraphim (or seraphs)", "Cherub کی جمع Cherubim یا Cherubs؛ Seraph کی جمع Seraphim یا Seraphs۔", "Cherub جو جمع Cherubim يا Cherubs؛ Seraph جو جمع Seraphim يا Seraphs."]
            ]
          }
        ]
      },
      {
        title: "How Plurals Are Formed",
        english: "Most English nouns form their plural by adding -s or -es, but some follow spelling changes and some have irregular forms. Learn these common rules.",
        urdu: "انگریزی میں زیادہ تر اسموں کی جمع بنانے کے لیے -s یا -es لگاتے ہیں، لیکن بعض الفاظ کے آخر میں تبدیلی ہوتی ہے اور کچھ کی جمع بے قاعدہ ہوتی ہے۔ درج ذیل عام قواعد یاد رکھیں۔",
        sindhi: "انگريزيءَ ۾ گهڻن اسمن جي جمع ٺاهڻ لاءِ -s يا -es لڳائبو آهي، پر ڪجهه لفظن جي پڇاڙي بدلبي آهي ۽ ڪجهه جا جمع جا بي قاعدا روپ هوندا آهن. هي عام قاعدا ياد رکو.",
        rules: [
          {
            title: "1. Add -s to most nouns",
            english: "For most nouns, simply add -s.",
            urdu: "زیادہ تر اسموں کے آخر میں صرف -s لگائیں۔",
            sindhi: "گهڻن اسمن جي آخر ۾ صرف -s لڳايو.",
            examples: "book → books; pen → pens; apple → apples"
          },
          {
            title: "2. Add -es to s, ss, sh, ch, x and z endings",
            english: "When a noun ends in -s, -ss, -sh, -ch, -x or usually -z, add -es. This makes the plural easier to pronounce.",
            urdu: "جن اسموں کے آخر میں s، ss، sh، ch، x یا عموماً z ہو، ان کے آخر میں -es لگائیں۔",
            sindhi: "جن اسمن جي پڇاڙي s، ss، sh، ch، x يا عام طور z سان ٿئي، انهن جي آخر ۾ -es لڳايو.",
            examples: "bus → buses; class → classes; dish → dishes; watch → watches; box → boxes"
          },
          {
            title: "3. Consonant + y: change y to -ies",
            english: "If a noun ends in a consonant + y, change y to i and add -es.",
            urdu: "اگر اسم کے آخر میں consonant کے بعد y آئے تو y کو i میں بدل کر -es لگائیں۔",
            sindhi: "جيڪڏهن اسم جي آخر ۾ consonant کان پوءِ y اچي ته y کي i ۾ بدلائي -es لڳايو.",
            examples: "city → cities; baby → babies; story → stories"
          },
          {
            title: "4. Vowel + y: add -s only",
            english: "If a vowel comes before the final y, do not change y; simply add -s.",
            urdu: "اگر y سے پہلے vowel (a, e, i, o, u) ہو تو y تبدیل نہ کریں، صرف -s لگائیں۔",
            sindhi: "جيڪڏهن آخري y کان اڳ vowel (a, e, i, o, u) هجي ته y نه بدلايو، صرف -s لڳايو.",
            examples: "boy → boys; key → keys; toy → toys"
          },
          {
            title: "5. Many nouns ending in -f or -fe change to -ves",
            english: "Some nouns ending in -f or -fe change that ending to -ves. However, not all do; some simply take -s.",
            urdu: "کچھ اسموں کے آخر میں -f یا -fe کو بدل کر -ves کر دیتے ہیں، لیکن یہ قاعدہ ہر لفظ پر لاگو نہیں ہوتا؛ کچھ میں صرف -s لگتا ہے۔",
            sindhi: "ڪجهه اسمن جي آخر وارو -f يا -fe بدلائي -ves ڪيو ويندو آهي، پر اهو قاعدو سڀني لفظن لاءِ ناهي؛ ڪجهه ۾ صرف -s لڳندو آهي.",
            examples: "leaf → leaves; knife → knives; wife → wives; roof → roofs; chief → chiefs"
          },
          {
            title: "6. Some nouns ending in -o take -es; others take -s",
            english: "Some nouns ending in -o take -es, while many take only -s. Learn common spellings.",
            urdu: "o پر ختم ہونے والے کچھ اسموں میں -es اور کچھ میں صرف -s لگتا ہے۔ عام الفاظ کی املا یاد کریں۔",
            sindhi: "o تي ختم ٿيندڙ ڪجهه اسمن ۾ -es ۽ ڪجهه ۾ صرف -s لڳندو آهي. عام لفظن جا روپ ياد ڪريو.",
            examples: "tomato → tomatoes; potato → potatoes; hero → heroes; photo → photos; piano → pianos"
          },
          {
            title: "7. Some plurals are irregular",
            english: "Some nouns do not form their plurals by adding -s or -es. Their forms change and must be memorised.",
            urdu: "کچھ اسموں کی جمع -s یا -es لگا کر نہیں بنتی بلکہ لفظ کی شکل بدل جاتی ہے۔ ان صورتوں کو یاد کرنا ضروری ہے۔",
            sindhi: "ڪجهه اسمن جي جمع -s يا -es لڳائڻ سان نٿي ٺهي، پر لفظ جي صورت بدلجي وڃي ٿي. اهي صورتون ياد ڪرڻ گهرجن.",
            examples: "man → men; woman → women; child → children; tooth → teeth; foot → feet"
          },
          {
            title: "8. Some nouns have the same singular and plural form",
            english: "A few nouns have the same form in both singular and plural. The sentence tells us whether one or more are meant.",
            urdu: "کچھ اسموں کی واحد اور جمع کی شکل ایک جیسی رہتی ہے۔ جملے سے معلوم ہوتا ہے کہ ایک مراد ہے یا ایک سے زیادہ۔",
            sindhi: "ڪجهه اسمن جي واحد ۽ جمع جي صورت ساڳي رهندي آهي. جملي مان خبر پوندي آهي ته هڪ مراد آهي يا هڪ کان وڌيڪ.",
            examples: "one sheep → two sheep; one deer → five deer; one fish → ten fish (often)"
          },
          {
            title: "9. Compound nouns",
            english: "In many compound nouns, the main word takes the plural ending. Some compounds have special plural forms.",
            urdu: "مرکب اسموں میں عموماً اصل یا اہم لفظ کو جمع بنایا جاتا ہے۔ کچھ مرکب الفاظ کی جمع خاص ہوتی ہے۔",
            sindhi: "مرڪب اسمن ۾ عام طور مکيه لفظ کي جمع بڻائبو آهي. ڪجهه مرڪب لفظن جا جمع خاص هوندا آهن.",
            examples: "mother-in-law → mothers-in-law; passer-by → passers-by; toothbrush → toothbrushes"
          },
          {
            title: "10. Nouns from foreign languages",
            english: "Some words borrowed from other languages keep traditional plural forms, though regular English plurals are also accepted for some words.",
            urdu: "دوسری زبانوں سے آئے ہوئے کچھ الفاظ اپنی روایتی جمع برقرار رکھتے ہیں، اگرچہ بعض کے لیے عام انگریزی جمع بھی درست ہے۔",
            sindhi: "ٻين ٻولين مان آيل ڪجهه لفظ پنهنجا روايتي جمع روپ برقرار رکن ٿا، جيتوڻيڪ ڪجهه لفظن لاءِ عام انگريزي جمع به قبول آهي.",
            examples: "cactus → cacti / cactuses; fungus → fungi / funguses; criterion → criteria; phenomenon → phenomena"
          }
        ],
        examples: [
          ["book → books", "کتاب → کتابیں", "ڪتاب → ڪتاب"],
          ["bus → buses", "بس → بسیں", "بس → بسون"],
          ["city → cities", "شہر → شہر", "شهر → شهر"],
          ["leaf → leaves", "پتا → پتے", "پن → پن"],
          ["child → children", "بچہ → بچے", "ٻار → ٻار"]
        ]
      },
      {
        title: "The Noun Case",
        english: "The possessive case shows ownership, relationship or association. It is commonly formed with an apostrophe (') and, in many cases, -'s or an apostrophe after the plural -s.",
        urdu: "Possessive Case ملکیت، تعلق یا نسبت ظاہر کرتا ہے۔ اسے عموماً apostrophe (') اور اکثر -'s کے ذریعے بنایا جاتا ہے۔ جمع کے ایسے اسم جن کے آخر میں پہلے ہی s ہو، ان کے بعد صرف apostrophe لگاتے ہیں۔",
        sindhi: "Possessive Case ملڪيت، لاڳاپو يا واسطو ظاهر ڪري ٿو. اهو عام طور apostrophe (') ۽ گهڻن حالتن ۾ -'s سان ٺاهبو آهي. جمع جي انهن اسمن کان پوءِ، جن جي آخر ۾ اڳ ئي s هجي، رڳو apostrophe لڳائبي آهي.",
        specialSections: [
          {
            title: "Formation of the Possessive Case — 20 examples",
            english: "For a singular noun, usually add -'s: the boy's book. For a regular plural ending in -s, add only an apostrophe: the girls' school. For an irregular plural not ending in -s, add -'s: children's toys. Names ending in s may take -'s or an apostrophe according to the style followed.",
            urdu: "واحد اسم کے ساتھ عموماً -'s لگاتے ہیں: the boy's book۔ s پر ختم ہونے والی عام جمع کے ساتھ صرف apostrophe لگاتے ہیں: the girls' school۔ ایسی بے قاعدہ جمع جو s پر ختم نہ ہو، اس کے ساتھ -'s لگاتے ہیں: children's toys۔ s پر ختم ہونے والے ناموں میں رائج اسلوب کے مطابق -'s یا صرف apostrophe استعمال ہو سکتی ہے۔",
            sindhi: "واحد اسم سان عام طور -'s لڳائبو آهي: the boy's book. s تي ختم ٿيندڙ عام جمع سان رڳو apostrophe لڳائبي آهي: the girls' school. اهڙي بي قاعدي جمع جيڪا s تي ختم نه ٿئي، ان سان -'s لڳائبو آهي: children's toys. s تي ختم ٿيندڙ نالن سان اختيار ڪيل لکڻيءَ جي طريقي موجب -'s يا رڳو apostrophe اچي سگهي ٿي.",
            examples: [
              ["the boy's bag — The boy's bag is blue.", "لڑکے کا بستہ نیلا ہے۔", "ڇوڪري جو ٿيلهو نيرو آهي."],
              ["the girl's doll — The girl's doll is beautiful.", "لڑکی کی گڑیا خوبصورت ہے۔", "ڇوڪري جي گڏي سهڻي آهي."],
              ["the teacher's desk — The teacher's desk is clean.", "استاد کی میز صاف ہے۔", "استاد جي ميز صاف آهي."],
              ["Ali's bicycle — Ali's bicycle is new.", "علی کی سائیکل نئی ہے۔", "علي جي سائيڪل نئين آهي."],
              ["Sara's notebook — Sara's notebook is on the table.", "سارہ کی کاپی میز پر ہے۔", "سارا جي ڪاپي ميز تي آهي."],
              ["the dog's tail — The dog's tail is long.", "کتے کی دم لمبی ہے۔", "ڪتي جي پڇ ڊگهي آهي."],
              ["the cat's milk — The cat's milk is in a bowl.", "بلی کا دودھ پیالے میں ہے۔", "ٻلي جو کير پيالي ۾ آهي."],
              ["the mother's advice — The mother's advice was helpful.", "ماں کا مشورہ فائدہ مند تھا۔", "ماءُ جو مشورو فائديمند هو."],
              ["the children's toys — The children's toys are colourful.", "بچوں کے کھلونے رنگین ہیں۔", "ٻارن جا رانديڪا رنگين آهن."],
              ["the men's shoes — The men's shoes are outside.", "مردوں کے جوتے باہر ہیں۔", "مردن جا جوتا ٻاهر آهن."],
              ["the women's room — The women's room is upstairs.", "عورتوں کا کمرہ اوپر ہے۔", "عورتن جو ڪمرو مٿي آهي."],
              ["the students' books — The students' books are ready.", "طلبہ کی کتابیں تیار ہیں۔", "شاگردن جا ڪتاب تيار آهن."],
              ["the girls' hostel — The girls' hostel is near the college.", "لڑکیوں کا ہاسٹل کالج کے قریب ہے۔", "ڇوڪرين جو هاسٽل ڪاليج جي ويجهو آهي."],
              ["the players' uniforms — The players' uniforms are clean.", "کھلاڑیوں کی وردیاں صاف ہیں۔", "رانديگرن جا يونيفارم صاف آهن."],
              ["the workers' tools — The workers' tools are in the box.", "مزدوروں کے اوزار ڈبے میں ہیں۔", "مزدورن جا اوزار دٻي ۾ آهن."],
              ["James's house — James's house is large.", "جیمز کا گھر بڑا ہے۔", "جيمس جو گهر وڏو آهي."],
              ["Charles's car — Charles's car is black.", "چارلس کی گاڑی کالی ہے۔", "چارلس جي گاڏي ڪاري آهي."],
              ["a day's work — A day's work is enough for today.", "ایک دن کا کام آج کے لیے کافی ہے۔", "هڪ ڏينهن جو ڪم اڄ لاءِ ڪافي آهي."],
              ["two weeks' holiday — We had two weeks' holiday.", "ہم نے دو ہفتوں کی چھٹی کی۔", "اسان ٻه هفتا موڪل ڪئي."],
              ["the sun's rays — The sun's rays are warm.", "سورج کی کرنیں گرم ہیں۔", "سج جون ڪرڻون گرم آهن."]
            ]
          },
          {
            title: "Use of the Possessive Case — 20 examples",
            english: "The possessive case is used to show ownership, relationships, parts of a living being, time or duration, and association. It is especially common with people and animals.",
            urdu: "Possessive Case ملکیت، رشتے، جاندار کے اعضا، وقت یا مدت اور تعلق ظاہر کرنے کے لیے استعمال ہوتا ہے۔ یہ خاص طور پر انسانوں اور جانوروں کے ساتھ عام ہے۔",
            sindhi: "Possessive Case ملڪيت، رشتن، جاندار جي عضون، وقت يا مُدي ۽ لاڳاپي کي ظاهر ڪرڻ لاءِ استعمال ٿيندو آهي. اهو خاص طور ماڻهن ۽ جانورن سان عام آهي.",
            examples: [
              ["This is Ahmed's pencil.", "یہ احمد کی پنسل ہے۔", "هي احمد جي پينسل آهي."],
              ["That is my father's car.", "وہ میرے والد کی گاڑی ہے۔", "اها منهنجي پيءُ جي گاڏي آهي."],
              ["Ayesha's mother is a doctor.", "عائشہ کی والدہ ڈاکٹر ہیں۔", "عائشه جي ماءُ ڊاڪٽر آهي."],
              ["The baby's eyes are bright.", "بچے کی آنکھیں چمکدار ہیں۔", "ٻار جون اکيون چمڪندڙ آهن."],
              ["The horse's legs are strong.", "گھوڑے کی ٹانگیں مضبوط ہیں۔", "گهوڙي جون ٽنگون مضبوط آهن."],
              ["The bird's nest is in the tree.", "پرندے کا گھونسلہ درخت میں ہے۔", "پکيءَ جو آکيرو وڻ ۾ آهي."],
              ["The teacher's explanation was clear.", "استاد کی وضاحت واضح تھی۔", "استاد جي وضاحت صاف هئي."],
              ["The doctor's clinic is nearby.", "ڈاکٹر کا کلینک قریب ہے۔", "ڊاڪٽر جو ڪلينڪ ويجهو آهي."],
              ["My friend's house is near the school.", "میرے دوست کا گھر اسکول کے قریب ہے۔", "منهنجي دوست جو گهر اسڪول جي ويجهو آهي."],
              ["The children's playground is large.", "بچوں کا کھیل کا میدان بڑا ہے۔", "ٻارن جي راند جو ميدان وڏو آهي."],
              ["The students' results were excellent.", "طلبہ کے نتائج شاندار تھے۔", "شاگردن جا نتيجا شاندار هئا."],
              ["The company's office is in Karachi.", "کمپنی کا دفتر کراچی میں ہے۔", "ڪمپنيءَ جو دفتر ڪراچيءَ ۾ آهي."],
              ["The city's roads are busy.", "شہر کی سڑکیں مصروف ہیں۔", "شهر جا رستا مصروف آهن."],
              ["We enjoyed a summer's day.", "ہم نے گرمیوں کے ایک دن سے لطف اٹھایا۔", "اسان اونهاري جي هڪ ڏينهن جو مزو ورتو."],
              ["I need a week's rest.", "مجھے ایک ہفتے کے آرام کی ضرورت ہے۔", "مون کي هڪ هفتي جي آرام جي ضرورت آهي."],
              ["Today's lesson is easy.", "آج کا سبق آسان ہے۔", "اڄ جو سبق آسان آهي."],
              ["Yesterday's match was exciting.", "کل کا میچ دلچسپ تھا۔", "ڪالهه جو مقابلو دلچسپ هو."],
              ["The earth's surface contains water and land.", "زمین کی سطح پر پانی اور خشکی ہے۔", "ڌرتيءَ جي مٿاڇري تي پاڻي ۽ خشڪي آهي."],
              ["The river's banks are green.", "دریا کے کنارے سرسبز ہیں۔", "درياهه جا ڪنارا ساوا آهن."],
              ["The team's victory made the fans happy.", "ٹیم کی فتح نے مداحوں کو خوش کر دیا۔", "ٽيم جي ڪاميابي مداحن کي خوش ڪري ڇڏيو."]
            ]
          }
        ]
      },
      {
        title: "Nouns in Apposition",
        english: "A noun in apposition is a noun or noun phrase placed beside another noun to explain, identify or give more information about it. Both nouns refer to the same person or thing. Example: My friend, Ali, is a doctor. Ali explains who my friend is.",
        urdu: "Noun in Apposition ایسا اسم یا اسم کا فقرہ ہوتا ہے جو دوسرے اسم کے ساتھ آ کر اس کی وضاحت، شناخت یا مزید معلومات دیتا ہے۔ دونوں اسم ایک ہی شخص یا چیز کے لیے استعمال ہوتے ہیں۔ مثال: میرا دوست، علی، ڈاکٹر ہے۔ یہاں علی، میرے دوست کی وضاحت کرتا ہے۔",
        sindhi: "Noun in Apposition اهڙو اسم يا اسمي فقرو آهي جيڪو ٻئي اسم جي ڀرسان اچي ان جي وضاحت، سڃاڻپ يا وڌيڪ ڄاڻ ڏئي ٿو. ٻئي اسم ساڳئي ماڻهو يا شيءِ لاءِ هوندا آهن. مثال: منهنجو دوست، علي، ڊاڪٽر آهي. هتي علي، منهنجي دوست جي سڃاڻپ ڪرائي ٿو.",
        examples: [
          ["My friend, Ali, is a doctor.", "میرا دوست، علی، ڈاکٹر ہے۔", "منهنجو دوست، علي، ڊاڪٽر آهي."],
          ["Mr. Ahmed, our teacher, is very kind.", "مسٹر احمد، ہمارے استاد، بہت مہربان ہیں۔", "مسٽر احمد، اسان جو استاد، تمام مهربان آهي."],
          ["Karachi, the largest city of Pakistan, is near the sea.", "کراچی، پاکستان کا سب سے بڑا شہر، سمندر کے قریب ہے۔", "ڪراچي، پاڪستان جو سڀ کان وڏو شهر، سمنڊ جي ويجهو آهي."],
          ["Quaid-e-Azam, the founder of Pakistan, is remembered with respect.", "قائداعظم، پاکستان کے بانی، کو احترام سے یاد کیا جاتا ہے۔", "قائداعظم، پاڪستان جو باني، عزت سان ياد ڪيو وڃي ٿو."],
          ["My brother, a skilled player, won the match.", "میرا بھائی، ایک ماہر کھلاڑی، میچ جیت گیا۔", "منهنجو ڀاءُ، هڪ ماهر رانديگر، مقابلو کٽي ويو."],
          ["Lahore, a historic city, attracts many visitors.", "لاہور، ایک تاریخی شہر، بہت سے سیاحوں کو اپنی طرف متوجہ کرتا ہے۔", "لاهور، هڪ تاريخي شهر، ڪيترن ئي سياحن کي پاڻ ڏانهن ڇڪي ٿو."],
          ["Sara, my cousin, lives in Hyderabad.", "سارہ، میری کزن، حیدرآباد میں رہتی ہے۔", "سارا، منهنجي سئوٽ، حيدرآباد ۾ رهي ٿي."],
          ["The poet Iqbal wrote inspiring poetry.", "شاعر اقبال نے حوصلہ افزا شاعری لکھی۔", "شاعر اقبال اتساهيندڙ شاعري لکي."],
          ["Mr. Khan, the principal of our school, addressed the students.", "مسٹر خان، ہمارے اسکول کے پرنسپل، نے طلبہ سے خطاب کیا۔", "مسٽر خان، اسان جي اسڪول جو پرنسپال، شاگردن کي خطاب ڪيو."],
          ["The river Indus flows through Pakistan.", "دریا سندھ پاکستان میں بہتا ہے۔", "سنڌو درياهه پاڪستان مان وهي ٿو."]
        ]
      },
      {
        title: "Material Noun",
        english: "A material noun names a substance or material from which things are made.",
        urdu: "Material noun کسی ایسے مادّے یا مواد کا نام ہے جس سے چیزیں بنائی جاتی ہیں۔",
        sindhi: "Material noun اهڙي مادي يا شيءِ جو نالو آهي، جنهن مان ٻيون شيون ٺاهيون وڃن ٿيون.",
        examples: [
          ["gold", "سونا", "سون"],
          ["silver", "چاندی", "چاندي"],
          ["wood", "لکڑی", "ڪاٺ"],
          ["cotton", "روئی", "ڪپهه"],
          ["iron", "لوہا", "لوهه"]
        ]
      },
      {
        title: "Proper Noun",
        english: "A proper noun is the special name of a particular person, place, day, month or organisation. It begins with a capital letter in English.",
        urdu: "Proper noun کسی خاص شخص، جگہ، دن، مہینے یا ادارے کا مخصوص نام ہے۔ انگریزی میں اس کا پہلا حرف Capital ہوتا ہے۔",
        sindhi: "Proper noun ڪنهن خاص ماڻهو، هنڌ، ڏينهن، مهيني يا اداري جو مخصوص نالو آهي. انگريزي ۾ ان جو پهريون اکر وڏو (Capital) لکبو آهي.",
        examples: [
          ["Ali", "علی", "علي"],
          ["Karachi", "کراچی", "ڪراچي"],
          ["Pakistan", "پاکستان", "پاڪستان"],
          ["Monday", "پیر", "سومر"],
          ["January", "جنوری", "جنوري"]
        ]
      },
      {
        title: "Collective Noun",
        english: "A collective noun names a group of people, animals or things considered as one unit.",
        urdu: "Collective noun ایسے گروہ کا نام ہے جس میں لوگ، جانور یا چیزیں شامل ہوں اور انہیں ایک اکائی سمجھا جائے۔",
        sindhi: "Collective noun اهڙي ٽولي يا ميڙ جو نالو آهي، جنهن ۾ ماڻهو، جانور يا شيون شامل هجن ۽ انهن کي هڪ گڏيل ايڪو سمجهيو وڃي.",
        examples: [
          ["team", "ٹیم — کھلاڑیوں کا گروہ", "ٽيم — رانديگرن جو ٽولو"],
          ["family", "خاندان — گھر کے افراد کا گروہ", "خاندان — گهر جي ڀاتين جو ٽولو"],
          ["flock", "پرندوں کا غول", "پکين جو ولر"],
          ["herd", "مویشیوں کا ریوڑ", "ڍورن جو ڌڻ"],
          ["bunch", "چابیوں کا گچھا", "چاٻين جو ڇڳو"]
        ]
      },
      {
        title: "Countable Noun",
        english: "A countable noun names something that can be counted. It has singular and plural forms and can be used with a or an in the singular.",
        urdu: "Countable noun ایسی چیز یا شخص کا نام ہے جسے گنا جا سکتا ہے۔ اس کی واحد اور جمع دونوں صورتیں ہوتی ہیں، اور واحد میں اس سے پہلے a یا an آ سکتا ہے۔",
        sindhi: "Countable noun اهڙي شيءِ يا ماڻهوءَ جو نالو آهي، جنهن کي ڳڻي سگهجي ٿو. ان جو واحد ۽ جمع هوندو آهي، ۽ واحد صورت ۾ ان کان اڳ a يا an اچي سگهي ٿو.",
        examples: [
          ["one apple → three apples", "ایک سیب → تین سیب", "هڪ صوف → ٽي صوف"],
          ["one book → two books", "ایک کتاب → دو کتابیں", "هڪ ڪتاب → ٻه ڪتاب"],
          ["one chair → four chairs", "ایک کرسی → چار کرسیاں", "هڪ ڪرسي → چار ڪرسيون"],
          ["one student → ten students", "ایک طالب علم → دس طالب علم", "هڪ شاگرد → ڏهه شاگرد"],
          ["one egg → six eggs", "ایک انڈا → چھ انڈے", "هڪ آنو → ڇهه آنا"]
        ]
      },
      {
        title: "Uncountable Noun",
        english: "An uncountable noun names something that is not usually counted separately. It often refers to a substance, material or abstract idea. We do not normally make it plural; we measure it using words such as a glass of, a piece of or some.",
        urdu: "Uncountable noun ایسی چیز یا مادّے کا نام ہے جسے عام طور پر الگ الگ گنا نہیں جاتا۔ اسے عموماً جمع نہیں بناتے بلکہ مقدار بتانے کے لیے ایک گلاس، ایک ٹکڑا یا کچھ جیسے الفاظ استعمال کرتے ہیں۔",
        sindhi: "Uncountable noun اهڙي شيءِ يا مادي جو نالو آهي، جنهن کي عام طور الڳ الڳ ڳڻبو ناهي. عام طور ان جي جمع نه ٺاهبي آهي؛ مقدار ٻڌائڻ لاءِ هڪ گلاس، هڪ ٽڪرو يا ڪجهه جهڙا لفظ استعمال ٿيندا آهن.",
        examples: [
          ["water — a glass of water", "پانی — ایک گلاس پانی", "پاڻي — هڪ گلاس پاڻي"],
          ["milk — two bottles of milk", "دودھ — دودھ کی دو بوتلیں", "کير — کير جون ٻه بوتلون"],
          ["sugar — a spoonful of sugar", "چینی — ایک چمچ چینی", "کنڊ — کنڊ جو هڪ چمچو"],
          ["rice — a bowl of rice", "چاول — ایک پیالہ چاول", "چانور — چانورن جو هڪ پيالو"],
          ["information — a piece of information", "معلومات — ایک اطلاع / معلومات کا ایک حصہ", "معلومات — هڪ ڄاڻ / معلومات جو هڪ حصو"]
        ]
      }
    ],
  },
  "the-sentence": {
    overview: "A sentence is a group of words that makes complete sense. We use words in groups when we speak or write.",
    watchFor: "A group of words is not a sentence unless it gives a complete thought. Begin a sentence with a capital letter and use suitable end punctuation.",
    examples: ["Little Jack Horner sat in a corner.", "The sun rises in the east.", "Where do you live?", "Please help me.", "What a beautiful day!"],
    bilingualSections: [
      {
        title: "What is a Sentence?",
        english: "When we speak or write, we use words. We generally use these words in groups. A group of words that makes complete sense is called a sentence.",
        urdu: "جب ہم بولتے یا لکھتے ہیں تو الفاظ استعمال کرتے ہیں۔ عموماً ہم الفاظ کو گروہوں کی صورت میں استعمال کرتے ہیں۔ الفاظ کا ایسا مجموعہ جو مکمل مطلب دے، Sentence یعنی جملہ کہلاتا ہے۔",
        sindhi: "جڏهن اسين ڳالهايون يا لکون ٿا ته لفظ استعمال ڪريون ٿا. عام طور لفظن کي گڏ ڪري استعمال ڪندا آهيون. لفظن جو اهڙو مجموعو جيڪو پورو مطلب ڏئي، ان کي Sentence يعني جملو چئبو آهي۔",
        examples: [
          ["Little Jack Horner sat in a corner.", "لٹل جیک ہارنر ایک کونے میں بیٹھا۔", "لٽل جيڪ هورنر هڪ ڪنڊ ۾ ويٺو."],
          ["The boy is playing.", "لڑکا کھیل رہا ہے۔", "ڇوڪرو راند ڪري رهيو آهي."],
          ["Birds fly in the sky.", "پرندے آسمان میں اڑتے ہیں۔", "پکي آسمان ۾ اڏامن ٿا."],
          ["My mother is kind.", "میری والدہ مہربان ہیں۔", "منهنجي امڙ مهربان آهي."],
          ["We learn English.", "ہم انگریزی سیکھتے ہیں۔", "اسين انگريزي سکون ٿا."]
        ]
      },
      {
        title: "Kinds of Sentences",
        english: "The textbook describes four kinds: Declarative or Assertive sentences make statements; Interrogative sentences ask questions; Imperative sentences express commands, requests or entreaties; Exclamatory sentences express strong feelings.",
        urdu: "کتاب کے مطابق جملوں کی چار اقسام ہیں: Declarative یا Assertive جملہ بیان دیتا ہے؛ Interrogative سوال پوچھتا ہے؛ Imperative حکم، درخواست یا التجا ظاہر کرتا ہے؛ Exclamatory شدید جذبات ظاہر کرتا ہے۔",
        sindhi: "ڪتاب موجب جملن جا چار قسم آهن: Declarative يا Assertive جملو بيان ڏئي ٿو؛ Interrogative سوال پڇي ٿو؛ Imperative حڪم، درخواست يا التجا ظاهر ڪري ٿو؛ Exclamatory شديد احساس ظاهر ڪري ٿو۔",
        examples: [
          ["Humpty Dumpty sat on a wall. — Declarative / Assertive", "ہمپٹی ڈمپٹی دیوار پر بیٹھا تھا۔ — خبریہ", "همپٽي ڊمپٽي ڀت تي ويٺو هو. — بياني"],
          ["Where do you live? — Interrogative", "آپ کہاں رہتے ہیں؟ — سوالیہ", "توهان ڪٿي رهو ٿا؟ — سوالي"],
          ["Be quiet. — Imperative (command)", "خاموش رہو۔ — حکمیہ", "ماٺ ڪريو. — حڪمي"],
          ["Have mercy upon us. — Imperative (request / entreaty)", "ہم پر رحم کریں۔ — درخواست / التجا", "اسان تي رحم ڪريو. — درخواست / التجا"],
          ["How cold the night is! — Exclamatory", "رات کتنی سرد ہے! — فجائیہ", "رات ڪيتري ٿڌي آهي! — عجب وارو"]
        ]
      },
      {
        title: "Subject and Predicate",
        english: "Every sentence has two parts. The Subject names the person or thing we are speaking about. The Predicate says something about that subject.",
        urdu: "ہر جملے کے دو حصے ہوتے ہیں۔ Subject وہ حصہ ہے جس میں اس شخص یا چیز کا نام آتا ہے جس کے بارے میں بات ہو رہی ہو۔ Predicate وہ حصہ ہے جو Subject کے بارے میں کچھ بتاتا ہے۔",
        sindhi: "هر جملي جا ٻه حصا هوندا آهن. Subject اهو حصو آهي جنهن ۾ ان ماڻهو يا شيءِ جو نالو اچي ٿو جنهن بابت ڳالهائجي ٿو. Predicate اهو حصو آهي جيڪو Subject بابت ڪجهه ٻڌائي ٿو۔",
        examples: [
          ["The boy | is playing.", "لڑکا | کھیل رہا ہے۔ (The boy = Subject، is playing = Predicate)", "ڇوڪرو | راند ڪري رهيو آهي. (The boy = Subject، is playing = Predicate)"],
          ["Ali | reads a book.", "علی | کتاب پڑھتا ہے۔", "علي | ڪتاب پڙهي ٿو."],
          ["The sun | shines brightly.", "سورج | تیز چمکتا ہے۔", "سج | تيز چمڪي ٿو."],
          ["My mother | cooks food.", "میری والدہ | کھانا پکاتی ہیں۔", "منهنجي امڙ | کاڌو پچائي ٿي."],
          ["The children | are happy.", "بچے | خوش ہیں۔", "ٻار | خوش آهن."]
        ]
      }
      ,
      {
        title: "Nouns Used as Adjectives",
        english: "A noun is usually the name of a person, place, thing, animal, quality or idea. However, a noun can also be placed before another noun to describe or classify it. When a noun is used in this way, it is called a noun used as an adjective, an attributive noun, or a noun adjunct. The first noun works like a describing word: it tells us what kind of person or thing the second noun is, what it is made of, what it is used for, where it is associated, or what subject it relates to. In “a school bus,” the word school is a noun, but it tells us what kind of bus we mean. In “a gold ring,” gold tells us what the ring is made of.\n\nThe noun used as an adjective normally comes immediately before the main noun. The main noun is the head word; the first noun modifies it. For example, in “a chicken soup recipe,” recipe is the main noun, while chicken and soup help describe the kind of recipe. In “a computer shop,” shop is the main noun and computer tells us what the shop sells or relates to. This pattern is very common in English and appears in everyday expressions such as bus stop, shoe shop, kitchen table, history teacher, cricket match, office chair and phone number.\n\nA noun modifier is usually singular, even when the meaning is general or the main noun is plural. We say “shoe shop” and “shoe shops,” not usually “shoes shop.” We say “a book shelf” or “book shelves,” not “books shelf.” The plural ending normally belongs to the main noun, because it is the main noun that is being counted. There are established exceptions and fixed expressions, such as “sports car,” “clothes shop” and “arms race,” which should be learnt as standard expressions. Do not change a familiar compound expression by applying the singular rule mechanically.\n\nA noun used as an adjective is not the same as an ordinary adjective. In “a wooden chair,” wooden is an adjective. In “a kitchen chair,” kitchen is a noun used as a modifier. Both words describe the chair, but they belong to different word classes. Similarly, “a golden watch” contains the adjective golden, while “a gold watch” contains the noun gold used before another noun. The meaning can be close, but the grammatical form is different.\n\nSometimes the noun modifier shows purpose or function, as in “swimming pool,” “tennis shoes” and “coffee cup.” Sometimes it shows material, as in “stone wall” or “silver necklace.” It may show a place or institution, as in “village school” and “city centre”; a subject or field, as in “science lesson” and “English teacher”; or a user or group, as in “children's books” and “women's clothes.” Notice that possessive forms with apostrophes, such as children's and women's, are also used as modifiers, but they are not the same pattern as a simple singular noun modifier.\n\nWhen two or more nouns come together, read the whole expression to identify its main noun. In “football club manager,” manager is the main noun; football club tells us which manager. In “bus stop sign,” sign is the main noun. The final noun is often the head word, though the meaning and structure of longer expressions can vary. Hyphens may be used in some compound modifiers, especially when they come before another noun, but ordinary noun-noun combinations are often written as separate words.\n\nRemember that a noun used as an adjective does not become a different kind of word permanently. It is still a noun by nature, but it performs a modifying job in that particular phrase. The easiest way to recognise it is to ask: what is the main noun, and does the word before it name a thing, material, activity, place, subject or group that classifies the main noun? If so, that first noun is functioning as a noun modifier.",
        urdu: "اسم عموماً کسی شخص، جگہ، چیز، جانور، خوبی یا خیال کا نام ہوتا ہے۔ لیکن بعض اوقات ایک اسم دوسرے اسم سے پہلے آ کر اس کی قسم، مقصد، مادہ، جگہ یا تعلق بتاتا ہے۔ اس استعمال کو Noun Used as an Adjective، Attributive Noun یا Noun Adjunct کہتے ہیں۔ مثال “school bus” میں school اسم ہے، لیکن یہ بتاتا ہے کہ بس کس کام یا تعلق کی ہے۔ “gold ring” میں gold بتاتا ہے کہ انگوٹھی کس دھات کی بنی ہے۔ ایسے فقرے میں پہلا اسم دوسرے اسم کی وضاحت کرتا ہے، جبکہ دوسرا اسم اصل یا مرکزی اسم ہوتا ہے۔ مثال “computer shop” میں shop مرکزی اسم ہے اور computer بتاتا ہے کہ دکان کس چیز سے متعلق ہے۔ روزمرہ مثالیں: bus stop، shoe shop، kitchen table، history teacher اور cricket match۔ عام طور پر پہلا اسم واحد رہتا ہے، چاہے مرکزی اسم جمع ہو: shoe shop / shoe shops، book shelf / book shelves۔ جمع کا نشان عموماً مرکزی اسم پر لگتا ہے۔ تاہم sports car، clothes shop اور arms race جیسے مستعمل مرکبات اپنی مقررہ صورت میں یاد رکھنے چاہییں۔ Noun modifier اور عام adjective میں فرق ہے: wooden chair میں wooden صفت ہے، جبکہ kitchen chair میں kitchen اسم ہے جو وضاحتی کام کر رہا ہے۔ اسی طرح golden watch میں golden صفت اور gold watch میں gold اسم ہے۔ پہلا اسم مقصد (coffee cup)، مادہ (stone wall)، جگہ (village school)، مضمون (science lesson) یا استعمال کرنے والے گروہ (children's books) کو ظاہر کر سکتا ہے۔ دو یا زیادہ اسم اکٹھے ہوں تو عموماً آخری اسم مرکزی ہوتا ہے، جیسے football club manager میں manager مرکزی اسم ہے۔ یاد رکھیں کہ وضاحتی کام کرنے سے اسم اپنی بنیادی قسم نہیں بدلتا؛ وہ صرف اس جملے یا فقرے میں دوسرے اسم کی وضاحت کر رہا ہوتا ہے۔",
        sindhi: "اسم عام طور ڪنهن ماڻهو، جاءِ، شيءِ، جانور، خوبي يا خيال جو نالو هوندو آهي. پر ڪڏهن هڪ اسم ٻئي اسم کان اڳ اچي ان جي قسم، مقصد، مادو، جاءِ يا لاڳاپو ٻڌائيندو آهي. هن استعمال کي Noun Used as an Adjective، Attributive Noun يا Noun Adjunct چئبو آهي. مثال “school bus” ۾ school اسم آهي، پر اهو ٻڌائي ٿو ته بس ڪهڙي ڪم يا لاڳاپي واري آهي. “gold ring” ۾ gold ٻڌائي ٿو ته منڊي ڪهڙي ڌاتوءَ جي ٺهيل آهي. اهڙي فقري ۾ پهريون اسم ٻئي اسم جي وضاحت ڪري ٿو، جڏهن ته ٻيو اسم مکيه اسم هوندو آهي. “computer shop” ۾ shop مکيه اسم آهي ۽ computer ٻڌائي ٿو ته دڪان ڪهڙي شيءِ سان لاڳاپيل آهي. روزمره مثال آهن: bus stop، shoe shop، kitchen table، history teacher ۽ cricket match۔ عام طور پهريون اسم واحد رهندو آهي، ڀلي مکيه اسم جمع هجي: shoe shop / shoe shops، book shelf / book shelves. جمع جو نشان عام طور مکيه اسم تي لڳندو آهي. پر sports car، clothes shop ۽ arms race جهڙيون مقرر ۽ رائج ترڪيبون پنهنجي معياري صورت ۾ ياد رکڻ گهرجن. Noun modifier ۽ عام adjective ۾ فرق آهي: wooden chair ۾ wooden صفت آهي، جڏهن ته kitchen chair ۾ kitchen اسم آهي جيڪو وضاحتي ڪم ڪري ٿو. اهڙيءَ طرح golden watch ۾ golden صفت ۽ gold watch ۾ gold اسم آهي. پهريون اسم مقصد (coffee cup)، مادو (stone wall)، جاءِ (village school)، مضمون (science lesson) يا استعمال ڪندڙ گروهه (children's books) ڏيکاري سگهي ٿو. جڏهن ٻه يا وڌيڪ اسم گڏ اچن ته عام طور آخري اسم مکيه هوندو آهي، جيئن football club manager ۾ manager مکيه اسم آهي. ياد رکو ته وضاحتي ڪم ڪرڻ سان اسم پنهنجي بنيادي قسم نٿو بدلائي؛ اهو رڳو ان فقري ۾ ٻئي اسم جي وضاحت ڪري ٿو.",
        examples: [
          ["I waited at the bus stop.", "میں بس اسٹاپ پر انتظار کرتا رہا۔", "مان بس اسٽاپ تي انتظار ڪندو رهيس."],
          ["She bought a gold ring.", "اس نے سونے کی انگوٹھی خریدی۔", "هن سون جي منڊي خريد ڪئي."],
          ["My father reads the morning newspaper.", "میرے والد صبح کا اخبار پڑھتے ہیں۔", "منهنجو والد صبح جو اخبار پڙهي ٿو."],
          ["The children are playing a cricket match.", "بچے کرکٹ کا میچ کھیل رہے ہیں۔", "ٻار ڪرڪيٽ جو مقابلو کيڏي رهيا آهن."],
          ["He works in a shoe shop.", "وہ جوتوں کی دکان میں کام کرتا ہے۔", "هو جوتن جي دڪان ۾ ڪم ڪري ٿو."],
          ["We need a kitchen table.", "ہمیں باورچی خانے کی میز چاہیے۔", "اسان کي رڌڻي جي ميز گهرجي."],
          ["She is our English teacher.", "وہ ہماری انگریزی کی استاد ہیں۔", "هوءَ اسان جي انگريزيءَ جي استاد آهي."],
          ["Please put the books on the office desk.", "براہِ کرم کتابیں دفتر کی میز پر رکھ دیں۔", "مهرباني ڪري ڪتاب آفيس جي ميز تي رکو."],
          ["They visited the village school.", "انہوں نے گاؤں کے اسکول کا دورہ کیا۔", "انهن ڳوٺ جي اسڪول جو دورو ڪيو."],
          ["I bought a new coffee cup.", "میں نے کافی کا نیا کپ خریدا۔", "مون ڪافي جو نئون ڪوپ خريد ڪيو."]
        ]
      }    ]
  },
  "subject-predicate": {
    overview: "A sentence has two main parts: the Subject and the Predicate.",
    watchFor: "The subject is who or what the sentence is about; the predicate tells what the subject does or what is said about it.",
    examples: ["Ali reads a book. (Subject: Ali; Predicate: reads a book.)", "The birds are singing. (Subject: The birds; Predicate: are singing.)"]
  },
  "pronouns": {
    overview: "Pronouns replace nouns or noun phrases and help avoid repetition. Their form can change according to person, number, gender and grammatical case.",
    watchFor: "Make sure a pronoun clearly refers to the noun it replaces, and use subject forms for subjects and object forms after verbs or prepositions.",
    examples: ["Mina lost her keys, but she found them later.", "Ali and I went home; the teacher spoke to us."],
    overviewUrdu: "Pronoun (ضمیر) اسم کی جگہ استعمال ہوتا ہے تاکہ نام بار بار نہ دہرانا پڑے۔",
    overviewSindhi: "Pronoun (ضمير) اسم جي جاءِ تي استعمال ٿيندو آهي، جيئن نالو بار بار نه ورجائجي.",
    specialSectionsTitle: "DETAILED NOTES ON PRONOUNS",
    specialSections: [
      {
        title: "Personal Pronouns — Meaning and Use",
        english: "Personal pronouns are words used in place of the names of particular people, animals or things. They help us avoid repeating nouns. Personal pronouns show person (first, second or third), number (singular or plural), and in some forms gender and grammatical case.\n\nFirst person refers to the speaker: I, me, we, us. Second person refers to the person or people spoken to: you. Third person refers to someone or something being spoken about: he, him, she, her, it, they, them.\n\nSubject pronouns do the action or function as the subject of a sentence: I, you, he, she, it, we, they. Object pronouns receive the action or follow a preposition: me, you, him, her, it, us, them. For example, “She called me”: she is the subject and me is the object.\n\nUse “I” as a subject and “me” as an object: “My brother and I went” but “The teacher called my brother and me.” Use “he/him” and “she/her” in the same way. “You” and “it” have the same form as subject and object. “They” is plural and can refer to people, animals or things; singular “they” is also commonly used for a person whose gender is unknown or when a person uses they/them pronouns.\n\nA personal pronoun should agree with the noun it refers to in meaning and number. Its reference should be clear. Avoid switching person unnecessarily and do not use an object form as the subject.",
        urdu: "Personal pronouns ایسے الفاظ ہیں جو مخصوص لوگوں، جانوروں یا چیزوں کے ناموں کی جگہ استعمال ہوتے ہیں۔ ان سے اسم کو بار بار دہرانے کی ضرورت نہیں رہتی۔ یہ شخص (first, second, third person)، تعداد (واحد یا جمع)، اور بعض صورتوں میں جنس اور grammatical case ظاہر کرتے ہیں۔\n\nFirst person بولنے والے کے لیے ہے: I، me، we، us۔ Second person اس شخص یا افراد کے لیے ہے جن سے بات کی جا رہی ہو: you۔ Third person اس شخص یا چیز کے لیے ہے جس کے بارے میں بات ہو: he، him، she، her، it، they، them۔\n\nSubject pronouns جملے میں فاعل ہوتے ہیں: I، you، he، she، it، we، they۔ Object pronouns فعل کا اثر قبول کرتے ہیں یا حرفِ جار کے بعد آتے ہیں: me، you، him، her، it، us، them۔ مثال “She called me” میں she فاعل اور me مفعول ہے۔\n\nفاعل کے طور پر “I” اور مفعول کے طور پر “me” استعمال کریں: “My brother and I went” لیکن “The teacher called my brother and me.” اسی طرح he/him اور she/her کا فرق سمجھیں۔ You اور it کی فاعل اور مفعول دونوں صورتوں میں شکل ایک جیسی رہتی ہے۔ They جمع کے لیے آتا ہے اور لوگ، جانور یا چیزیں مراد ہو سکتی ہیں۔ واحد they بھی اس شخص کے لیے عام ہے جس کی جنس معلوم نہ ہو یا جو they/them ضمیر استعمال کرتا ہو۔\n\nPersonal pronoun کا اپنے مرجع اسم کے ساتھ معنی اور تعداد کے لحاظ سے درست تعلق ہونا چاہیے۔ اس کا اشارہ واضح رکھیں۔ جملے میں بلاوجہ person نہ بدلیں اور فاعل کی جگہ object form استعمال نہ کریں۔",
        sindhi: "Personal pronouns اهي لفظ آهن، جيڪي خاص ماڻهن، جانورن يا شين جي نالن بدران استعمال ٿيندا آهن. انهن سان اسم کي بار بار ورجائڻ جي ضرورت نٿي پوي. اهي شخص (first، second، third person)، تعداد (واحد يا جمع)، ۽ ڪن صورتن ۾ جنس ۽ grammatical case ظاهر ڪن ٿا.\n\nFirst person ڳالهائيندڙ لاءِ آهي: I، me، we، us. Second person ان شخص يا ماڻهن لاءِ آهي، جن سان ڳالهه ڪئي وڃي ٿي: you. Third person ان شخص يا شيءِ لاءِ آهي، جنهن بابت ڳالهه ٿئي ٿي: he، him، she، her، it، they، them.\n\nSubject pronouns جملي ۾ فاعل ٿيندا آهن: I، you، he، she، it، we، they. Object pronouns فعل جو اثر قبول ڪندا آهن يا حرفِ جر کان پوءِ ايندا آهن: me، you، him، her، it، us، them. مثال “She called me” ۾ she فاعل ۽ me مفعول آهي.\n\nفاعل طور “I” ۽ مفعول طور “me” استعمال ڪريو: “My brother and I went” پر “The teacher called my brother and me.” اهڙيءَ طرح he/him ۽ she/her جو فرق سمجهو. You ۽ it فاعل ۽ مفعول ٻنهي صورتن ۾ ساڳي شڪل رکن ٿا. They جمع لاءِ اچي ٿو ۽ ماڻهو، جانور يا شيون ظاهر ڪري سگهي ٿو. واحد they به اهڙي شخص لاءِ عام آهي، جنهن جي جنس معلوم نه هجي يا جيڪو they/them ضمير استعمال ڪري.\n\nPersonal pronoun جو پنهنجي مرجع اسم سان معنيٰ ۽ تعداد مطابق صحيح لاڳاپو هجڻ گهرجي. ان جو اشارو واضح رکو. جملي ۾ بنا سبب person نه بدلايو ۽ فاعل جي جاءِ تي object form استعمال نه ڪريو.",
        examples: [
          ["I am learning English.", "میں انگریزی سیکھ رہا ہوں۔", "مان انگريزي سکي رهيو آهيان."],
          ["She is my younger sister.", "وہ میری چھوٹی بہن ہے۔", "هوءَ منهنجي ننڍي ڀيڻ آهي."],
          ["They live near the school.", "وہ اسکول کے قریب رہتے ہیں۔", "اهي اسڪول جي ويجهو رهن ٿا."],
          ["We are ready for the test.", "ہم امتحان کے لیے تیار ہیں۔", "اسان امتحان لاءِ تيار آهيون."],
          ["He works in a bank.", "وہ ایک بینک میں کام کرتا ہے۔", "هو هڪ بئنڪ ۾ ڪم ڪري ٿو."],
          ["You are a good friend.", "تم ایک اچھے دوست ہو۔", "تون سٺو دوست آهين."],
          ["It is very cold today.", "آج بہت سردی ہے۔", "اڄ تمام گهڻي ٿڌ آهي."],
          ["The teacher praised me.", "استاد نے میری تعریف کی۔", "استاد منهنجي ساراهه ڪئي."],
          ["Please give him the message.", "براہِ کرم اسے پیغام دے دیں۔", "مهرباني ڪري کيس پيغام ڏيو."],
          ["I invited her to dinner.", "میں نے اسے کھانے پر بلایا۔", "مون کيس مانيءَ جي دعوت ڏني."],
          ["The coach selected us.", "کوچ نے ہمیں منتخب کیا۔", "ڪوچ اسان کي چونڊيو."],
          ["The children helped them.", "بچوں نے ان کی مدد کی۔", "ٻارن انهن جي مدد ڪئي."],
          ["She and I study together.", "وہ اور میں اکٹھے پڑھتے ہیں۔", "هوءَ ۽ مان گڏ پڙهون ٿا."],
          ["He sent it to you.", "اس نے یہ تمہیں بھیجا۔", "هن اهو توکي موڪليو."],
          ["They thanked her for the help.", "انہوں نے مدد کے لیے اس کا شکریہ ادا کیا۔", "انهن مدد لاءِ سندس شڪريو ادا ڪيو."],
          ["My parents love us.", "میرے والدین ہم سے محبت کرتے ہیں۔", "منهنجا والدين اسان سان پيار ڪن ٿا."],
          ["I met them at the station.", "میں ان سے اسٹیشن پر ملا۔", "مان انهن سان اسٽيشن تي مليس."],
          ["You can sit beside me.", "تم میرے پاس بیٹھ سکتے ہو۔", "تون منهنجي ڀرسان ويهي سگهين ٿو."],
          ["The dog followed him home.", "کتا اس کے پیچھے گھر تک گیا۔", "ڪتو سندس پٺيان گهر تائين ويو."],
          ["She told us the truth.", "اس نے ہمیں سچ بتایا۔", "هن اسان کي سچ ٻڌايو."]
        ]
      },
      {
        title: "Forms of the Personal Pronouns",
        english: "Personal pronouns have different forms according to their grammatical function. The main forms are subject (subjective/nominative), object (objective), possessive determiners, possessive pronouns and reflexive pronouns. These forms are related, but they are not interchangeable.\n\nSubject forms: I, you, he, she, it, we, they. Use them as the subject: “They are working.”\nObject forms: me, you, him, her, it, us, them. Use them after verbs and prepositions: “The manager called them”; “Come with us.”\nPossessive determiners: my, your, his, her, its, our, their. They come before a noun and show ownership: “This is my book.” They cannot normally stand alone.\nPossessive pronouns: mine, yours, his, hers, ours, theirs. They replace a noun phrase: “This book is mine.” There is no commonly used independent possessive form of its.\nReflexive forms: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves. Use them when the subject and object refer to the same person or thing: “She hurt herself.” They can also add emphasis: “I did it myself.”\n\nNotice these important contrasts: I/me/my/mine/myself; he/him/his/his/himself; she/her/her/hers/herself; we/us/our/ours/ourselves; they/them/their/theirs/themselves. “You” has the forms you, your, yours, yourself or yourselves. “It” has it, its and itself.\n\nUse a subject form before the verb, an object form after a verb or preposition, a possessive determiner before a noun, and a possessive pronoun without a following noun. Do not confuse “its” (possessive) with “it's” (it is or it has).",
        urdu: "Personal pronouns کے مختلف grammatical functions کے مطابق ان کی شکلیں بدلتی ہیں۔ اہم صورتیں subject (فاعل)، object (مفعول)، possessive determiners، possessive pronouns اور reflexive pronouns ہیں۔ یہ ایک دوسرے سے متعلق ہیں، لیکن ہر جگہ ایک دوسرے کی جگہ استعمال نہیں ہو سکتے۔\n\nSubject forms: I، you، he، she، it، we، they۔ انہیں فاعل کے طور پر استعمال کریں: “They are working.”\nObject forms: me، you، him، her، it، us، them۔ یہ فعل یا حرفِ جار کے بعد آتے ہیں: “The manager called them”؛ “Come with us.”\nPossessive determiners: my، your، his، her، its، our، their۔ یہ اسم سے پہلے آ کر ملکیت ظاہر کرتے ہیں: “This is my book.” عام طور پر یہ اکیلے استعمال نہیں ہوتے۔\nPossessive pronouns: mine، yours، his، hers، ours، theirs۔ یہ اسم والے فقرے کی جگہ آتے ہیں: “This book is mine.” Its کی مستقل possessive pronoun والی صورت عام استعمال میں نہیں۔\nReflexive forms: myself، yourself، himself، herself، itself، ourselves، yourselves، themselves۔ جب فاعل اور مفعول ایک ہی شخص یا چیز ہوں تو استعمال کریں: “She hurt herself.” زور دینے کے لیے بھی آتے ہیں: “I did it myself.”\n\nاہم فرق یاد رکھیں: I/me/my/mine/myself؛ he/him/his/his/himself؛ she/her/her/hers/herself؛ we/us/our/ours/ourselves؛ they/them/their/theirs/themselves۔ You کی صورتیں you، your، yours، yourself یا yourselves ہیں۔ It کی صورتیں it، its اور itself ہیں۔\n\nفعل سے پہلے subject form، فعل یا حرفِ جار کے بعد object form، اسم سے پہلے possessive determiner اور اسم کے بغیر possessive pronoun استعمال کریں۔ “its” ملکیت ظاہر کرتا ہے، جبکہ “it's” کا مطلب “it is” یا “it has” ہے۔",
        sindhi: "Personal pronouns جون مختلف grammatical ڪمن مطابق انهن جون صورتون بدلجن ٿيون. اهم صورتون subject (فاعل)، object (مفعول)، possessive determiners، possessive pronouns ۽ reflexive pronouns آهن. اهي هڪ ٻئي سان لاڳاپيل آهن، پر هر جاءِ تي هڪ ٻئي بدران استعمال نٿا ڪري سگهجن.\n\nSubject forms: I، you، he، she، it، we، they. انهن کي فاعل طور استعمال ڪريو: “They are working.”\nObject forms: me، you، him، her، it، us، them. اهي فعل يا حرفِ جر کان پوءِ اچن ٿا: “The manager called them”؛ “Come with us.”\nPossessive determiners: my، your، his، her، its، our، their. اهي اسم کان اڳ اچي ملڪيت ظاهر ڪن ٿا: “This is my book.” عام طور اڪيلا نٿا اچن.\nPossessive pronouns: mine، yours، his، hers، ours، theirs. اهي اسم واري فقري جي جاءِ وٺن ٿا: “This book is mine.” Its جي الڳ possessive pronoun واري صورت عام استعمال ۾ ناهي.\nReflexive forms: myself، yourself، himself، herself، itself، ourselves، yourselves، themselves. جڏهن فاعل ۽ مفعول ساڳيو ماڻهو يا شيءِ هجي ته استعمال ڪريو: “She hurt herself.” زور ڏيڻ لاءِ به ايندا آهن: “I did it myself.”\n\nاهم فرق ياد رکو: I/me/my/mine/myself؛ he/him/his/his/himself؛ she/her/her/hers/herself؛ we/us/our/ours/ourselves؛ they/them/their/theirs/themselves۔ You جون صورتون you، your، yours، yourself يا yourselves آهن. It جون صورتون it، its ۽ itself آهن.\n\nفعل کان اڳ subject form، فعل يا حرفِ جر کان پوءِ object form، اسم کان اڳ possessive determiner ۽ اسم کان سواءِ possessive pronoun استعمال ڪريو. “its” ملڪيت ڏيکاري ٿو، جڏهن⁠تہ “it's” جو مطلب “it is” يا “it has” آهي.",
        examples: [
          ["I gave her my notebook.", "میں نے اسے اپنی کاپی دی۔", "مون کيس پنهنجي ڪاپي ڏني."],
          ["This seat is mine.", "یہ نشست میری ہے۔", "هيءَ جاءِ منهنجي آهي."],
          ["He introduced himself to the guests.", "اس نے مہمانوں سے اپنا تعارف کرایا۔", "هن مهمانن سان پنهنجو تعارف ڪرايو."],
          ["They invited us to their house.", "انہوں نے ہمیں اپنے گھر بلایا۔", "انهن اسان کي پنهنجي گهر دعوت ڏني."],
          ["The blue bag is hers.", "نیلا بیگ اس کا ہے۔", "نيرو ٿيلهو هن جو آهي."],
          ["We prepared the meal ourselves.", "ہم نے کھانا خود تیار کیا۔", "اسان کاڌو پاڻ تيار ڪيو."],
          ["Please bring your dictionary.", "براہِ کرم اپنی لغت لے آئیں۔", "مهرباني ڪري پنهنجي لغت کڻي اچو."],
          ["The decision was theirs.", "یہ فیصلہ ان کا تھا۔", "اهو فيصلو انهن جو هو."],
          ["She looked at herself in the mirror.", "اس نے آئینے میں خود کو دیکھا۔", "هن آئيني ۾ پاڻ کي ڏٺو."],
          ["The cat cleaned its paws.", "بلی نے اپنے پنجے صاف کیے۔", "ٻلي پنهنجا چنبا صاف ڪيا."],
          ["This is our classroom.", "یہ ہمارا جماعتی کمرہ ہے۔", "هي اسان جو ڪلاس روم آهي."],
          ["The teacher spoke to him.", "استاد نے اس سے بات کی۔", "استاد هن سان ڳالهايو."],
          ["I completed the work myself.", "میں نے کام خود مکمل کیا۔", "مون ڪم پاڻ مڪمل ڪيو."],
          ["Is this pen yours?", "کیا یہ قلم تمہارا ہے؟", "ڇا هي قلم تنهنجو آهي؟"],
          ["You should trust yourself.", "تمہیں خود پر بھروسا کرنا چاہیے۔", "توکي پاڻ تي ڀروسو ڪرڻ گهرجي."],
          ["Their house is larger than ours.", "ان کا گھر ہمارے گھر سے بڑا ہے۔", "انهن جو گهر اسان جي گهر کان وڏو آهي."],
          ["He blamed himself for the mistake.", "اس نے غلطی کا الزام خود پر لیا۔", "هن غلطيءَ جو الزام پاڻ تي رکيو."],
          ["I sent them an invitation.", "میں نے انہیں دعوت نامہ بھیجا۔", "مون انهن کي دعوت نامو موڪليو."],
          ["She has lost her keys.", "اس نے اپنی چابیاں کھو دی ہیں۔", "هن پنهنجون چاٻيون وڃائي ڇڏيون آهن."],
          ["The children enjoyed themselves.", "بچوں نے خوب لطف اٹھایا۔", "ٻارن خوب مزو ماڻيو."]
        ]
      },
      {
        title: "Impersonal Pronouns — It, Nouns and Verbs",
        english: "In traditional school grammar, “impersonal pronoun” commonly refers especially to “it” when it does not stand for a particular noun or object. It is used as a grammatical subject to talk about weather, time, distance, conditions or an event. In such sentences, “it” is sometimes called a dummy or empty subject: it is needed to make a complete English sentence, although it does not name a particular thing.\n\nA. Weather and natural conditions: “It is raining”; “It is cold.” The pronoun it is the grammatical subject, and the verb agrees with it in the third-person singular: it is, it was, it has.\nB. Time and date: “It is five o'clock”; “It is Monday”; “It is late.” The noun or time expression tells what the sentence is about, while it fills the subject position.\nC. Distance and measurement: “It is ten kilometres to the village”; “It takes an hour.” It introduces the statement; the verb remains singular.\nD. General situations and conditions: “It is noisy here”; “It was difficult to understand.” Adjectives such as cold, easy, important and possible commonly follow a linking verb with impersonal it.\nE. Introductory it + be + noun/adjective + to-infinitive or that-clause: “It is important to study”; “It is certain that she will come.” The real idea is expressed in the infinitive or that-clause, while it occupies the subject position.\nF. Reporting and passive constructions: “It is said that the earth is round”; “It is expected that prices will rise.” It introduces a statement without naming the speaker.\nG. Impersonal “it” is different from personal “it”: in “The baby is sleeping; it is tired,” it refers to the baby. In “It is raining,” it does not refer to a particular noun.\n\nRelation to nouns and verbs: A noun names a person, place, thing or idea. A pronoun can replace a noun, but impersonal it may have no specific noun antecedent. The pronoun “it” normally takes a singular verb: it is, it seems, it has, it was. Do not use a plural verb with this impersonal subject. “There is/there are” is a separate introductory construction; there is not an impersonal pronoun in these examples.",
        urdu: "روایتی اسکولی قواعد میں “impersonal pronoun” سے عموماً خاص طور پر “it” مراد ہوتا ہے، جب یہ کسی مخصوص اسم یا چیز کی جگہ استعمال نہ ہو۔ اسے موسم، وقت، فاصلے، حالات یا کسی واقعے کے بارے میں بات کرنے کے لیے فاعل کے طور پر استعمال کیا جاتا ہے۔ ایسے جملوں میں “it” کو dummy یا empty subject بھی کہتے ہیں: مکمل انگریزی جملہ بنانے کے لیے یہ ضروری ہوتا ہے، اگرچہ یہ کسی خاص چیز کا نام نہیں لیتا۔\n\nA. موسم اور قدرتی حالات: “It is raining” یعنی بارش ہو رہی ہے؛ “It is cold” یعنی سردی ہے۔ یہاں it grammatical subject ہے اور فعل third-person singular کے مطابق آتا ہے: it is، it was، it has۔\nB. وقت اور تاریخ: “It is five o'clock” یعنی پانچ بجے ہیں؛ “It is Monday” یعنی پیر کا دن ہے؛ “It is late” یعنی دیر ہو گئی ہے۔ It فاعل کی جگہ پُر کرتا ہے۔\nC. فاصلہ اور پیمائش: “It is ten kilometres to the village” یعنی گاؤں دس کلومیٹر دور ہے؛ “It takes an hour” یعنی ایک گھنٹہ لگتا ہے۔ یہاں بھی فعل واحد رہتا ہے۔\nD. عمومی حالات: “It is noisy here” یعنی یہاں شور ہے؛ “It was difficult to understand” یعنی سمجھنا مشکل تھا۔ Cold، easy، important اور possible جیسی صفات impersonal it کے ساتھ linking verb کے بعد آ سکتی ہیں۔\nE. Introductory it + be + noun/adjective + to-infinitive یا that-clause: “It is important to study” یعنی پڑھنا ضروری ہے؛ “It is certain that she will come” یعنی یہ یقینی ہے کہ وہ آئے گی۔ اصل خیال infinitive یا that-clause میں ہوتا ہے اور it فاعل کی جگہ آتا ہے۔\nF. Reporting اور passive جملے: “It is said that the earth is round” یعنی کہا جاتا ہے کہ زمین گول ہے؛ “It is expected that prices will rise” یعنی توقع ہے کہ قیمتیں بڑھیں گی۔ اس سے بات کہنے والے کا نام لیے بغیر بیان ہوتی ہے۔\nG. Impersonal it اور personal it میں فرق ہے: “The baby is sleeping; it is tired” میں it بچے کی طرف اشارہ کرتا ہے۔ “It is raining” میں یہ کسی خاص اسم کی جگہ نہیں۔\n\nاسم اور فعل سے تعلق: Noun کسی شخص، جگہ، چیز یا خیال کا نام ہے۔ Pronoun اسم کی جگہ آ سکتا ہے، لیکن impersonal it کا کوئی مخصوص antecedent اسم ضروری نہیں ہوتا۔ Impersonal it کے ساتھ عموماً واحد فعل آتا ہے: it is، it seems، it has، it was۔ اس کے ساتھ جمع فعل استعمال نہ کریں۔ “There is/there are” ایک الگ introductory construction ہے؛ ان مثالوں میں there impersonal pronoun نہیں ہے۔",
        sindhi: "روايتي اسڪولي گرامر ۾ “impersonal pronoun” مان عام طور خاص طور “it” مراد هوندو آهي، جڏهن اهو ڪنهن مخصوص اسم يا شيءِ جي جاءِ تي نه اچي. اهو موسم، وقت، فاصلي، حالتن يا ڪنهن واقعي بابت ڳالهائڻ لاءِ فاعل طور استعمال ٿيندو آهي. اهڙن جملن ۾ “it” کي dummy يا empty subject به چوندا آهن: مڪمل انگريزي جملو ٺاهڻ لاءِ اهو ضروري هوندو آهي، جيتوڻيڪ اهو ڪنهن خاص شيءِ جو نالو نٿو ٻڌائي.\n\nA. موسم ۽ قدرتي حالتون: “It is raining” يعني مينهن وسي رهيو آهي؛ “It is cold” يعني ٿڌ آهي. هتي it grammatical subject آهي ۽ فعل third-person singular مطابق ايندو آهي: it is، it was، it has.\nB. وقت ۽ تاريخ: “It is five o'clock” يعني پنج ٿيا آهن؛ “It is Monday” يعني سومر آهي؛ “It is late” يعني دير ٿي وئي آهي. It فاعل جي جاءِ ڀري ٿو.\nC. فاصلو ۽ ماپ: “It is ten kilometres to the village” يعني ڳوٺ ڏهه ڪلوميٽر پري آهي؛ “It takes an hour” يعني هڪ ڪلاڪ لڳي ٿو. هتي به فعل واحد رهندو آهي.\nD. عام حالتون: “It is noisy here” يعني هتي شور آهي؛ “It was difficult to understand” يعني سمجهڻ ڏکيو هو. Cold، easy، important ۽ possible جهڙيون صفتون impersonal it سان linking verb کان پوءِ اچي سگهن ٿيون.\nE. Introductory it + be + noun/adjective + to-infinitive يا that-clause: “It is important to study” يعني پڙهڻ ضروري آهي؛ “It is certain that she will come” يعني پڪ آهي ته هوءَ ايندي. اصل خيال infinitive يا that-clause ۾ هوندو آهي ۽ it فاعل جي جاءِ وٺندو آهي.\nF. Reporting ۽ passive جملا: “It is said that the earth is round” يعني چيو ويندو آهي ته زمين گول آهي؛ “It is expected that prices will rise” يعني اميد آهي ته قيمتون وڌنديون. ڳالهائيندڙ جو نالو ٻڌائڻ کان سواءِ ڳالهه بيان ٿئي ٿي.\nG. Impersonal it ۽ personal it ۾ فرق: “The baby is sleeping; it is tired” ۾ it ٻار ڏانهن اشارو ڪري ٿو. “It is raining” ۾ اهو ڪنهن خاص اسم جي جاءِ تي ناهي.\n\nاسم ۽ فعل سان لاڳاپو: Noun ڪنهن ماڻهو، هنڌ، شيءِ يا خيال جو نالو آهي. Pronoun اسم جي جاءِ وٺي سگهي ٿو، پر impersonal it جو ڪو خاص اڳوڻو اسم (antecedent) ضروري ناهي. Impersonal it سان عام طور واحد فعل ايندو آهي: it is، it seems، it has، it was. ان سان جمع فعل استعمال نه ڪريو. “There is/there are” هڪ الڳ introductory construction آهي؛ انهن مثالن ۾ there impersonal pronoun ناهي.",
        examples: [
          ["It is raining heavily.", "تیز بارش ہو رہی ہے۔", "تيز مينهن وسي رهيو آهي."],
          ["It is very hot today.", "آج بہت گرمی ہے۔", "اڄ تمام گهڻي گرمي آهي."],
          ["It is cold outside.", "باہر سردی ہے۔", "ٻاهر ٿڌ آهي."],
          ["It is five o'clock.", "پانچ بجے ہیں۔", "پنج ٿيا آهن."],
          ["It is Monday today.", "آج پیر ہے۔", "اڄ سومر آهي."],
          ["It is too late to leave.", "جانے کے لیے بہت دیر ہو چکی ہے۔", "وڃڻ لاءِ تمام دير ٿي چڪي آهي."],
          ["It is ten kilometres to the station.", "اسٹیشن دس کلومیٹر دور ہے۔", "اسٽيشن ڏهه ڪلوميٽر پري آهي."],
          ["It takes twenty minutes to walk there.", "وہاں پیدل جانے میں بیس منٹ لگتے ہیں۔", "اتي پنڌ ڪري وڃڻ ۾ ويهه منٽ لڳن ٿا."],
          ["It is noisy in this room.", "اس کمرے میں شور ہے۔", "هن ڪمري ۾ شور آهي."],
          ["It was difficult to solve the problem.", "مسئلہ حل کرنا مشکل تھا۔", "مسئلو حل ڪرڻ ڏکيو هو."],
          ["It is important to speak politely.", "شائستگی سے بات کرنا ضروری ہے۔", "ادب سان ڳالهائڻ ضروري آهي."],
          ["It is easy to learn this rule.", "یہ اصول سیکھنا آسان ہے۔", "هي اصول سکڻ آسان آهي."],
          ["It is certain that he will return.", "یہ یقینی ہے کہ وہ واپس آئے گا۔", "پڪ آهي ته هو واپس ايندو."],
          ["It is possible to finish the work today.", "آج کام مکمل کرنا ممکن ہے۔", "اڄ ڪم پورو ڪرڻ ممڪن آهي."],
          ["It is said that health is wealth.", "کہا جاتا ہے کہ صحت دولت ہے۔", "چيو ويندو آهي ته صحت دولت آهي."],
          ["It is believed that the earth moves around the sun.", "مانا جاتا ہے کہ زمین سورج کے گرد گھومتی ہے۔", "مڃيو وڃي ٿو ته زمين سج جي چوڌاري ڦري ٿي."],
          ["It seems that the train is late.", "ایسا لگتا ہے کہ ٹرین لیٹ ہے۔", "لڳي ٿو ته ريل گاڏي دير سان آهي."],
          ["It was a pleasant surprise to meet you.", "آپ سے ملنا ایک خوشگوار حیرت تھی۔", "توهان سان ملڻ هڪ وڻندڙ حيرت هئي."],
          ["It is my turn to answer.", "جواب دینے کی اب میری باری ہے۔", "جواب ڏيڻ جي هاڻي منهنجي واري آهي."],
          ["It does not matter what others say.", "دوسرے کیا کہتے ہیں، اس سے فرق نہیں پڑتا۔", "ٻيا ڇا ٿا چون، ان سان ڪو فرق نٿو پوي."]
        ]
      },
      {
        title: "Reflexive and Emphatic Pronouns",
        english: "Reflexive and emphatic pronouns are formed with -self (singular) and -selves (plural): myself, yourself, himself, herself, itself, ourselves, yourselves and themselves. They have the same forms, but their functions are different.\n\n1. Reflexive use: A pronoun is reflexive when the subject and object refer to the same person or thing. The subject performs the action and the action returns to that subject: “She hurt herself.” Here she and herself refer to the same person.\n2. Reflexive verbs and actions: Common examples include enjoy oneself, introduce oneself, teach oneself, blame oneself, prepare oneself and hurt oneself. The reflexive pronoun is needed when the action is directed back to the subject.\n3. After a preposition: Use a reflexive pronoun when the preposition refers back to the subject: “He was talking to himself”; “She looked at herself.”\n4. Emphatic use: An emphatic (intensive) pronoun adds emphasis to a noun or pronoun. It can usually be removed without changing the basic meaning: “The principal himself welcomed us.” The principal welcomed us; himself adds emphasis.\n5. Position: An emphatic pronoun often comes immediately after the noun/pronoun it emphasizes, or at the end of the sentence: “I myself checked the answer”; “I checked the answer myself.”\n6. Key difference: In “He blamed himself,” himself is essential to the meaning and is reflexive. In “He himself opened the door,” himself only emphasizes he and is emphatic.\n7. Agreement: Choose the correct form according to the subject: I—myself; you—yourself (singular) / yourselves (plural); he—himself; she—herself; it—itself; we—ourselves; they—themselves.\n8. Avoid using reflexive forms as ordinary subject or object replacements. Say “Sara and I attended,” not “Sara and myself attended”; say “Please contact Ali or me,” not “Ali or myself,” in ordinary standard usage.\nRemember: the same word can be reflexive in one sentence and emphatic in another. Its job in the sentence—not its spelling—determines its use.",
        urdu: "Reflexive اور emphatic pronouns کے آخر میں واحد کے لیے -self اور جمع کے لیے -selves آتا ہے: myself، yourself، himself، herself، itself، ourselves، yourselves اور themselves۔ ان کی شکلیں ایک جیسی ہوتی ہیں، لیکن جملے میں کام مختلف ہوتا ہے۔\n\n1. Reflexive استعمال: جب فاعل اور مفعول ایک ہی شخص یا چیز کی طرف اشارہ کریں تو ضمیر reflexive ہوتا ہے۔ فاعل عمل کرتا ہے اور عمل واپس اسی پر آتا ہے: “She hurt herself.” یہاں she اور herself ایک ہی شخص ہیں۔\n2. Reflexive افعال اور کام: enjoy oneself، introduce oneself، teach oneself، blame oneself، prepare oneself اور hurt oneself عام مثالیں ہیں۔ جب عمل واپس فاعل کی طرف آئے تو reflexive pronoun استعمال ہوتا ہے۔\n3. حرفِ جار کے بعد: جب حرفِ جار کا تعلق واپس فاعل سے ہو تو reflexive pronoun لگائیں: “He was talking to himself”؛ “She looked at herself.”\n4. Emphatic استعمال: emphatic یا intensive pronoun کسی اسم یا ضمیر پر زور دیتا ہے۔ اسے عموماً نکال دینے سے جملے کا بنیادی مطلب نہیں بدلتا: “The principal himself welcomed us.” یعنی پرنسپل نے خود ہمارا استقبال کیا۔\n5. جگہ: emphatic pronoun اکثر اسی اسم/ضمیر کے فوراً بعد یا جملے کے آخر میں آتا ہے: “I myself checked the answer”؛ “I checked the answer myself.”\n6. بنیادی فرق: “He blamed himself” میں himself معنی کے لیے ضروری ہے، اس لیے reflexive ہے۔ “He himself opened the door” میں himself صرف he پر زور دیتا ہے، اس لیے emphatic ہے۔\n7. درست مطابقت: I—myself؛ you—yourself (واحد) / yourselves (جمع)؛ he—himself؛ she—herself؛ it—itself؛ we—ourselves؛ they—themselves۔\n8. Reflexive forms کو عام subject یا object کی جگہ استعمال نہ کریں۔ درست جملہ “Sara and I attended” ہے، “Sara and myself attended” نہیں۔ عام معیاری استعمال میں “Please contact Ali or me” کہیں، “Ali or myself” نہیں۔\nیاد رکھیں: ایک ہی لفظ ایک جملے میں reflexive اور دوسرے میں emphatic ہو سکتا ہے۔ اس کا کام جملے میں اس کا استعمال طے کرتا ہے، صرف اس کی شکل نہیں۔",
        sindhi: "Reflexive ۽ emphatic pronouns جي پڇاڙي واحد لاءِ -self ۽ جمع لاءِ -selves هوندي آهي: myself، yourself، himself، herself، itself، ourselves، yourselves ۽ themselves. انهن جون صورتون ساڳيون آهن، پر جملي ۾ ڪم الڳ هوندو آهي.\n\n1. Reflexive استعمال: جڏهن فاعل ۽ مفعول هڪ ئي ماڻهو يا شيءِ ڏانهن اشارو ڪن ته ضمير reflexive هوندو آهي. فاعل ڪم ڪري ٿو ۽ اهو عمل وري ان ڏانهن موٽي ٿو: “She hurt herself.” هتي she ۽ herself ساڳئي شخص لاءِ آهن.\n2. Reflexive فعل ۽ ڪم: enjoy oneself، introduce oneself، teach oneself، blame oneself، prepare oneself ۽ hurt oneself عام مثال آهن. جڏهن عمل فاعل ڏانهن موٽي اچي ته reflexive pronoun استعمال ٿيندو آهي.\n3. حرفِ جر کان پوءِ: جڏهن حرفِ جر جو تعلق وري فاعل سان هجي ته reflexive pronoun لڳايو: “He was talking to himself”؛ “She looked at herself.”\n4. Emphatic استعمال: emphatic يا intensive pronoun ڪنهن اسم يا ضمير تي زور ڏئي ٿو. ان کي ڪڍڻ سان عام طور جملي جي بنيادي معنيٰ نٿي بدلجي: “The principal himself welcomed us.” يعني پرنسپال پاڻ اسان جو آڌرڀاءُ ڪيو.\n5. جاءِ: emphatic pronoun اڪثر ان اسم يا ضمير کان فوراً پوءِ يا جملي جي آخر ۾ ايندو آهي: “I myself checked the answer”؛ “I checked the answer myself.”\n6. بنيادي فرق: “He blamed himself” ۾ himself معنيٰ لاءِ ضروري آهي، تنهنڪري reflexive آهي. “He himself opened the door” ۾ himself رڳو he تي زور ڏئي ٿو، تنهنڪري emphatic آهي.\n7. صحيح صورت: I—myself؛ you—yourself (واحد) / yourselves (جمع)؛ he—himself؛ she—herself؛ it—itself؛ we—ourselves؛ they—themselves۔\n8. Reflexive صورتن کي عام subject يا object جي جاءِ تي استعمال نه ڪريو. صحيح جملو “Sara and I attended” آهي، “Sara and myself attended” نه. عام معياري استعمال ۾ “Please contact Ali or me” چئو، “Ali or myself” نه.\nياد رکو: ساڳيو لفظ هڪ جملي ۾ reflexive ۽ ٻئي ۾ emphatic ٿي سگهي ٿو. ان جو ڪم جملي ۾ استعمال طئي ڪري ٿو، رڳو لفظ جي صورت نه.",
        examples: [
          ["I taught myself to cook.", "میں نے خود کھانا پکانا سیکھا۔", "مون پاڻ پچائڻ سکيو."],
          ["She looked at herself in the mirror.", "اس نے آئینے میں خود کو دیکھا۔", "هن آئيني ۾ پاڻ کي ڏٺو."],
          ["He hurt himself while playing.", "کھیلتے ہوئے اسے خود چوٹ لگ گئی۔", "راند ڪندي هن پاڻ کي زخمي ڪيو."],
          ["The children enjoyed themselves at the park.", "بچوں نے پارک میں خوب لطف اٹھایا۔", "ٻارن پارڪ ۾ خوب مزو ماڻيو."],
          ["We prepared ourselves for the examination.", "ہم نے خود کو امتحان کے لیے تیار کیا۔", "اسان پاڻ کي امتحان لاءِ تيار ڪيو."],
          ["The cat washed itself.", "بلی نے خود کو صاف کیا۔", "ٻلي پاڻ کي صاف ڪيو."],
          ["Please make yourself comfortable.", "براہِ کرم آرام سے بیٹھیں۔", "مهرباني ڪري آرام سان ويهو."],
          ["They blamed themselves for the loss.", "انہوں نے نقصان کا الزام خود پر لیا۔", "انهن نقصان جو الزام پاڻ تي رکيو."],
          ["I introduced myself to the new teacher.", "میں نے نئے استاد سے اپنا تعارف کرایا۔", "مون نئين استاد سان پنهنجو تعارف ڪرايو."],
          ["He was talking to himself.", "وہ خود سے بات کر رہا تھا۔", "هو پاڻ سان ڳالهائي رهيو هو."],
          ["She bought herself a new bag.", "اس نے اپنے لیے نیا بیگ خریدا۔", "هن پاڻ لاءِ نئون ٿيلهو خريد ڪيو."],
          ["You should believe in yourself.", "تمہیں خود پر یقین رکھنا چاہیے۔", "توکي پاڻ تي يقين رکڻ گهرجي."],
          ["The boy hid himself behind the door.", "لڑکا دروازے کے پیچھے چھپ گیا۔", "ڇوڪرو دروازي پٺيان لڪي ويو."],
          ["I reminded myself to call my mother.", "میں نے خود کو اپنی والدہ کو فون کرنے کی یاد دہانی کرائی۔", "مون پاڻ کي ماءُ کي فون ڪرڻ جي ياد ڏيارِي."],
          ["The bird freed itself from the cage.", "پرندے نے خود کو پنجرے سے آزاد کر لیا۔", "پکي پاڻ کي پڃري مان آزاد ڪرايو."],
          ["The principal himself gave us the certificates.", "پرنسپل نے خود ہمیں اسناد دیں۔", "پرنسپال پاڻ اسان کي سرٽيفڪيٽ ڏنا."],
          ["I myself checked every answer.", "میں نے خود ہر جواب چیک کیا۔", "مون پاڻ هر جواب چيڪ ڪيو."],
          ["The queen herself opened the ceremony.", "ملکہ نے خود تقریب کا افتتاح کیا۔", "راڻيءَ پاڻ تقريب جو افتتاح ڪيو."],
          ["The players themselves cleaned the ground.", "کھلاڑیوں نے خود میدان صاف کیا۔", "رانديگرن پاڻ ميدان صاف ڪيو."],
          ["We ourselves witnessed the event.", "ہم نے خود یہ واقعہ دیکھا۔", "اسان پاڻ اهو واقعو ڏٺو."],
          ["The teacher herself explained the rule.", "استاد نے خود اصول سمجھایا۔", "استاد پاڻ اهو اصول سمجهايو."],
          ["The manager himself answered my question.", "منیجر نے خود میرے سوال کا جواب دیا۔", "مينيجر پاڻ منهنجي سوال جو جواب ڏنو."],
          ["You yourself can solve this problem.", "تم خود یہ مسئلہ حل کر سکتے ہو۔", "تون پاڻ هي مسئلو حل ڪري سگهين ٿو."],
          ["The machine itself stopped suddenly.", "مشین خود اچانک رک گئی۔", "مشين پاڻ اوچتو بيهي رهي."],
          ["My parents themselves arranged the event.", "میرے والدین نے خود تقریب کا انتظام کیا۔", "منهنجي والدين پاڻ تقريب جو انتظام ڪيو."],
          ["She herself invited all the guests.", "اس نے خود تمام مہمانوں کو بلایا۔", "هن پاڻ سڀني مهمانن کي دعوت ڏني."],
          ["The author himself signed my book.", "مصنف نے خود میری کتاب پر دستخط کیے۔", "ليکڪ پاڻ منهنجي ڪتاب تي صحيح ڪئي."],
          ["I myself heard the announcement.", "میں نے خود اعلان سنا۔", "مون پاڻ اعلان ٻڌو."],
          ["The students themselves requested extra time.", "طلبہ نے خود اضافی وقت کی درخواست کی۔", "شاگردن پاڻ وڌيڪ وقت جي درخواست ڪئي."],
          ["The doctor himself spoke to the family.", "ڈاکٹر نے خود خاندان سے بات کی۔", "ڊاڪٽر پاڻ خاندان سان ڳالهه ڪئي."]
        ]
      },
      {
        title: "Demonstrative Pronouns",
        english: "Demonstrative pronouns point to particular people or things. The main demonstrative pronouns are this, that, these and those. Use this for one person or thing near the speaker, that for one farther away, these for more than one nearby, and those for more than one farther away. They stand in place of nouns: “This is mine.” When a demonstrative word comes before a noun, as in “this book”, it functions as a demonstrative determiner rather than a pronoun. Demonstratives can identify, compare or distinguish things in context.",
        urdu: "Demonstrative pronouns کسی خاص شخص یا چیز کی طرف اشارہ کرتے ہیں۔ بنیادی demonstrative pronouns یہ ہیں: this، that، these اور those۔ قریب موجود ایک چیز یا شخص کے لیے this، دور موجود ایک کے لیے that، قریب موجود ایک سے زیادہ چیزوں کے لیے these اور دور موجود ایک سے زیادہ چیزوں کے لیے those استعمال ہوتا ہے۔ یہ اسم کی جگہ آتے ہیں، جیسے “This is mine.” جب یہ کسی اسم سے پہلے آئیں، جیسے “this book”، تو یہ pronoun کے بجائے demonstrative determiner ہوتے ہیں۔ ان کا استعمال چیزوں کی نشاندہی اور فرق واضح کرنے کے لیے ہوتا ہے۔",
        sindhi: "Demonstrative pronouns ڪنهن خاص ماڻهو يا شيءِ ڏانهن اشارو ڪن ٿا. بنيادي demonstrative pronouns هي آهن: this، that، these ۽ those. ويجهو هڪ شيءِ يا ماڻهو لاءِ this، پري هڪ لاءِ that، ويجهو هڪ کان وڌيڪ شين لاءِ these ۽ پري هڪ کان وڌيڪ شين لاءِ those استعمال ٿيندا آهن. اهي اسم جي جاءِ تي اچن ٿا، مثال “This is mine.” جڏهن اهي اسم کان اڳ اچن، جيئن “this book”، ته pronoun بدران demonstrative determiner هوندا آهن. انهن سان شين جي سڃاڻپ ۽ فرق ظاهر ڪيو ويندو آهي.",
        examples: [
          ["This is my pen.", "یہ میرا قلم ہے۔", "هي منهنجو قلم آهي."],
          ["That is your house.", "وہ تمہارا گھر ہے۔", "اهو تنهنجو گهر آهي."],
          ["These are fresh apples.", "یہ تازا سیب ہیں۔", "اهي تازا صوف آهن."],
          ["Those are beautiful birds.", "وہ خوبصورت پرندے ہیں۔", "اهي سهڻا پکي آهن."],
          ["This belongs to me.", "یہ میری ملکیت ہے۔", "هي منهنجو آهي."],
          ["That looks expensive.", "وہ مہنگا لگتا ہے۔", "اهو مهانگو ٿو لڳي."],
          ["These are my classmates.", "یہ میرے ہم جماعت ہیں۔", "اهي منهنجا هم جماعت آهن."],
          ["Those were difficult days.", "وہ مشکل دن تھے۔", "اهي ڏکيا ڏينهن هئا."],
          ["This is exactly what I need.", "مجھے بالکل یہی چاہیے۔", "مون کي بلڪل اها ئي شيءِ گهرجي."],
          ["That was a wonderful idea.", "وہ ایک شاندار خیال تھا۔", "اهو هڪ شاندار خيال هو."],
          ["These taste delicious.", "ان کا ذائقہ مزیدار ہے۔", "انهن جو ذائقو مزيدار آهي."],
          ["Those belong to the school.", "وہ اسکول کی ملکیت ہیں۔", "اهي اسڪول جا آهن."],
          ["This is better than that.", "یہ اُس سے بہتر ہے۔", "هي اُن کان بهتر آهي."],
          ["These are cheaper than those.", "یہ اُن سے سستے ہیں۔", "هي انهن کان سستا آهن."],
          ["Who is that at the door?", "دروازے پر وہ کون ہے؟", "دروازي تي اهو ڪير آهي؟"],
          ["What are these?", "یہ کیا ہیں؟", "هي ڇا آهن؟"],
          ["That is not true.", "یہ درست نہیں ہے۔", "اهو سچ ناهي."],
          ["These are the ones I selected.", "یہی وہ ہیں جنہیں میں نے منتخب کیا۔", "اهي ئي آهن جيڪي مون چونڊيا."],
          ["This was a pleasant surprise.", "یہ ایک خوشگوار حیرت تھی۔", "اها هڪ وڻندڙ حيرت هئي."],
          ["Those were the best moments of my life.", "وہ میری زندگی کے بہترین لمحات تھے۔", "اهي منهنجي زندگيءَ جا بهترين لمحا هئا."]
        ]
      },
      {
        title: "Indefinite Pronouns",
        english: "Indefinite pronouns refer to people or things without naming exactly who or what they are. Common forms include someone, somebody, something, anyone, anybody, anything, everyone, everybody, everything, no one, nobody, nothing, each, either, neither, many, few, several, all, some and none. Many indefinite pronouns take a singular verb (everyone is, nobody knows); some take a plural verb (many are, few have); and some depend on the noun or meaning (all, some, none). Use any in questions and negatives commonly, and some in affirmative statements and offers or requests when appropriate. Avoid double negatives in standard English: “Nobody came,” not “Nobody didn't come.”",
        urdu: "Indefinite pronouns ایسے لوگوں یا چیزوں کے لیے استعمال ہوتے ہیں جن کی شناخت یا تعداد واضح نہ ہو۔ عام الفاظ میں someone، somebody، something، anyone، anybody، anything، everyone، everybody، everything، no one، nobody، nothing، each، either، neither، many، few، several، all، some اور none شامل ہیں۔ بہت سے indefinite pronouns کے ساتھ واحد فعل آتا ہے، جیسے everyone is اور nobody knows؛ بعض کے ساتھ جمع فعل آتا ہے، جیسے many are اور few have؛ جبکہ all، some اور none کا فعل سیاق و معنی کے مطابق ہوتا ہے۔ سوالات اور منفی جملوں میں عموماً any اور مثبت جملوں یا پیشکش میں مناسب طور پر some استعمال ہوتا ہے۔ معیاری انگریزی میں دوہری نفی سے بچیں۔",
        sindhi: "Indefinite pronouns اهڙن ماڻهن يا شين لاءِ استعمال ٿين ٿا جن جي سڃاڻپ يا تعداد صاف نه هجي. عام لفظن ۾ someone، somebody، something، anyone، anybody، anything، everyone، everybody، everything، no one، nobody، nothing، each، either، neither، many، few، several، all، some ۽ none شامل آهن. ڪيترن indefinite pronouns سان واحد فعل ايندو آهي، جيئن everyone is ۽ nobody knows؛ ڪن سان جمع فعل ايندو آهي، جيئن many are ۽ few have؛ جڏهن ته all، some ۽ none جو فعل جملي جي مطلب ۽ حوالي تي دارومدار رکي ٿو. سوالن ۽ ناڪاري جملن ۾ عام طور any، ۽ هاڪاري جملن يا آڇن ۾ مناسب طور some استعمال ٿيندو آهي. معياري انگريزيءَ ۾ ٻٽي نفي کان پاسو ڪريو.",
        examples: [
          ["Someone is waiting outside.", "کوئی باہر انتظار کر رہا ہے۔", "ڪو ٻاهر انتظار ڪري رهيو آهي."],
          ["Everybody enjoyed the picnic.", "سب نے پکنک کا لطف اٹھایا۔", "سڀني پڪنڪ جو مزو ورتو."],
          ["Nobody knows the answer.", "کسی کو جواب معلوم نہیں۔", "ڪنهن کي به جواب معلوم ناهي."],
          ["Something smells delicious.", "کسی چیز کی خوشبو مزیدار ہے۔", "ڪنهن شيءِ جي خوشبو مزيدار آهي."],
          ["Anyone can learn this skill.", "کوئی بھی یہ مہارت سیکھ سکتا ہے۔", "ڪو به هي هنر سکي سگهي ٿو."],
          ["Everything is ready.", "سب کچھ تیار ہے۔", "سڀ ڪجهه تيار آهي."],
          ["No one was absent today.", "آج کوئی غیر حاضر نہیں تھا۔", "اڄ ڪو به غير حاضر نه هو."],
          ["Somebody has taken my notebook.", "کسی نے میری کاپی لے لی ہے۔", "ڪنهن منهنجي ڪاپي کڻي ورتي آهي."],
          ["Is anybody at home?", "کیا گھر میں کوئی ہے؟", "ڇا گهر ۾ ڪو آهي؟"],
          ["Nothing can stop her.", "کوئی چیز اسے نہیں روک سکتی۔", "ڪا به شيءِ هن کي روڪي نٿي سگهي."],
          ["Several have already arrived.", "کئی پہلے ہی پہنچ چکے ہیں۔", "ڪيترائي اڳ ئي پهچي چڪا آهن."],
          ["Few understood the question.", "بہت کم لوگوں نے سوال سمجھا۔", "تمام ٿورن ماڻهن سوال سمجهيو."],
          ["Many were invited to the meeting.", "بہت سے لوگوں کو اجلاس میں بلایا گیا۔", "ڪيترن ئي ماڻهن کي گڏجاڻيءَ ۾ سڏايو ويو."],
          ["All are welcome here.", "یہاں سب کا خیر مقدم ہے۔", "هتي سڀني کي ڀليڪار آهي."],
          ["Some are missing.", "کچھ غائب ہیں۔", "ڪجهه گم آهن."],
          ["None of the milk is left.", "دودھ بالکل باقی نہیں بچا۔", "کير بلڪل باقي نه بچيو آهي."],
          ["Either of the roads leads to the village.", "دونوں میں سے کوئی ایک راستہ گاؤں جاتا ہے۔", "ٻنهي مان ڪو هڪ رستو ڳوٺ ڏانهن وڃي ٿو."],
          ["Neither was suitable for the job.", "ان دونوں میں سے کوئی بھی اس کام کے لیے موزوں نہیں تھا۔", "انهن ٻنهي مان ڪو به ان ڪم لاءِ مناسب نه هو."],
          ["Is there anything I can do?", "کیا میں کچھ کر سکتا ہوں؟", "ڇا مان ڪجهه ڪري سگهان ٿو؟"],
          ["Everyone has a different opinion.", "ہر کسی کی رائے مختلف ہوتی ہے۔", "هر ڪنهن جي راءِ الڳ هوندي آهي."]
        ]
      },
      {
        title: "Distributive Pronouns",
        english: "Distributive pronouns refer to members of a group separately, one at a time. The main forms are each, either and neither. Each considers members individually; either means one or the other of two; neither means not one and not the other of two. They are generally followed by a singular verb when used as pronouns: “Each has a book”; “Neither is ready.” Each of, either of and neither of are followed by a plural noun or pronoun, but the verb is traditionally singular in formal grammar: “Each of the students is present.” Distributive pronouns emphasize individuals rather than the group as a whole. Do not confuse them with distributive determiners, which come before nouns, as in “each student.”",
        urdu: "Distributive pronouns کسی گروہ کے افراد کو ایک ایک کرکے الگ الگ ظاہر کرتے ہیں۔ ان کی بنیادی صورتیں each، either اور neither ہیں۔ Each ہر فرد کو الگ دیکھتا ہے؛ either کا مطلب دو میں سے کوئی ایک؛ اور neither کا مطلب دونوں میں سے کوئی بھی نہیں ہے۔ جب یہ pronoun کے طور پر استعمال ہوں تو عموماً واحد فعل لیتے ہیں، جیسے “Each has a book” اور “Neither is ready.” Each of، either of اور neither of کے بعد جمع اسم یا ضمیر آتا ہے، لیکن رسمی قواعد میں فعل عموماً واحد ہوتا ہے: “Each of the students is present.” یہ پورے گروہ کے بجائے ہر فرد پر الگ زور دیتے ہیں۔ انہیں distributive determiners سے الگ پہچانیں، جو اسم سے پہلے آتے ہیں، جیسے “each student.”",
        sindhi: "Distributive pronouns ڪنهن گروهه جي ماڻهن يا شين کي هڪ هڪ ڪري الڳ ظاهر ڪن ٿا. انهن جون بنيادي صورتون each، either ۽ neither آهن. Each هر فرد کي الڳ ڏسي ٿو؛ either جو مطلب ٻن مان ڪو هڪ؛ ۽ neither جو مطلب ٻنهي مان ڪو به نه آهي. جڏهن اهي pronoun طور استعمال ٿين ٿا ته عام طور واحد فعل وٺن ٿا، جيئن “Each has a book” ۽ “Neither is ready.” Each of، either of ۽ neither of کان پوءِ جمع اسم يا ضمير اچي ٿو، پر رسمي گرامر ۾ فعل عام طور واحد هوندو آهي: “Each of the students is present.” اهي سڄي گروهه بدران هر فرد تي الڳ زور ڏين ٿا. انهن کي distributive determiners کان الڳ سڃاڻو، جيڪي اسم کان اڳ اچن ٿا، جيئن “each student.”",
        examples: [
          ["Each has a different task.", "ہر ایک کا کام الگ ہے۔", "هر هڪ جو ڪم الڳ آهي."],
          ["Each of the boys is ready.", "لڑکوں میں سے ہر ایک تیار ہے۔", "ڇوڪرن مان هر هڪ تيار آهي."],
          ["Either of these books is useful.", "ان دونوں کتابوں میں سے کوئی ایک مفید ہے۔", "انهن ٻن ڪتابن مان ڪو هڪ فائديمند آهي."],
          ["Neither of the answers is correct.", "دونوں جوابوں میں سے کوئی بھی درست نہیں۔", "انهن ٻن جوابن مان ڪو به صحيح ناهي."],
          ["Each received a certificate.", "ہر ایک کو سند ملی۔", "هر هڪ کي سرٽيفڪيٽ مليو."],
          ["Either will suit me.", "ان دونوں میں سے کوئی ایک میرے لیے مناسب ہوگا۔", "انهن ٻنهي مان ڪو هڪ مون لاءِ مناسب هوندو."],
          ["Neither was at home.", "ان دونوں میں سے کوئی بھی گھر پر نہیں تھا۔", "انهن ٻنهي مان ڪو به گهر ۾ نه هو."],
          ["Each of us has a responsibility.", "ہم میں سے ہر ایک کی ذمہ داری ہے۔", "اسان مان هر هڪ جي ذميواري آهي."],
          ["Either of the roads is safe.", "دونوں راستوں میں سے کوئی ایک محفوظ ہے۔", "انهن ٻن رستن مان ڪو هڪ محفوظ آهي."],
          ["Neither of them knows the truth.", "ان دونوں میں سے کسی کو بھی حقیقت معلوم نہیں۔", "انهن ٻنهي مان ڪنهن کي به حقيقت معلوم ناهي."],
          ["Each must do their best.", "ہر ایک کو اپنی پوری کوشش کرنی چاہیے۔", "هر هڪ کي پنهنجي پوري ڪوشش ڪرڻ گهرجي."],
          ["Either is acceptable to the teacher.", "استاد کو ان دونوں میں سے کوئی ایک قابلِ قبول ہے۔", "استاد لاءِ انهن ٻنهي مان ڪو هڪ قبول آهي."],
          ["Neither seems interested.", "ان دونوں میں سے کوئی بھی دلچسپی نہیں رکھتا۔", "انهن ٻنهي مان ڪو به دلچسپي نٿو ڏيکاري."],
          ["Each of the players was given water.", "ہر کھلاڑی کو پانی دیا گیا۔", "هر رانديگر کي پاڻي ڏنو ويو."],
          ["Either of my parents can help.", "میرے والدین میں سے کوئی ایک مدد کر سکتا ہے۔", "منهنجي والدين مان ڪو هڪ مدد ڪري سگهي ٿو."],
          ["Neither of these plans works.", "ان دونوں منصوبوں میں سے کوئی بھی کام نہیں کرتا۔", "انهن ٻن منصوبن مان ڪو به ڪم نٿو ڪري."],
          ["Each took a seat.", "ہر ایک نے ایک نشست سنبھالی۔", "هر هڪ پنهنجي جاءِ ورتي."],
          ["Either of the two keys opens the door.", "دونوں چابیوں میں سے کوئی ایک دروازہ کھولتی ہے۔", "انهن ٻن چاٻين مان ڪا هڪ دروازو کولي ٿي."],
          ["Neither of the twins was late.", "جڑواں بچوں میں سے کوئی بھی دیر سے نہیں آیا۔", "جاڙن مان ڪو به دير سان نه آيو."],
          ["Each of the answers has a reason.", "ہر جواب کی ایک وجہ ہے۔", "هر جواب جو هڪ سبب آهي."]
        ]
      },
      {
        title: "Relative Pronouns — Meaning and Function",
        english: "A relative pronoun introduces a relative (adjective) clause and connects it to a noun or pronoun called its antecedent. The clause gives more information about that antecedent. The main relative pronouns are who, whom, whose, which and that. Who generally refers to people and acts as the subject of its clause; whom refers to people as the object; whose shows possession; which refers to animals or things; and that can refer to people, animals or things in defining clauses. Example: “The girl who won the prize is my sister.” The clause “who won the prize” describes “the girl.”",
        urdu: "Relative pronoun ایسا ضمیر ہے جو relative یا adjective clause شروع کرکے اسے کسی اسم یا ضمیر سے جوڑتا ہے۔ اس اسم یا ضمیر کو antecedent کہتے ہیں۔ یہ clause antecedent کے بارے میں مزید معلومات دیتا ہے۔ اہم relative pronouns یہ ہیں: who، whom، whose، which اور that۔ Who عموماً انسانوں کے لیے فاعل کے طور پر، whom انسانوں کے لیے مفعول کے طور پر، whose ملکیت ظاہر کرنے کے لیے، which جانوروں یا چیزوں کے لیے، اور that defining clauses میں انسانوں، جانوروں یا چیزوں کے لیے استعمال ہوتا ہے۔ مثال: “The girl who won the prize is my sister.” یہاں “who won the prize” لڑکی کے بارے میں وضاحت کرتا ہے۔",
        sindhi: "Relative pronoun اهڙو ضمير آهي جيڪو relative يا adjective clause شروع ڪري ان کي ڪنهن اسم يا ضمير سان ڳنڍي ٿو. ان اسم يا ضمير کي antecedent چئبو آهي. اهو clause antecedent بابت وڌيڪ ڄاڻ ڏئي ٿو. اهم relative pronouns هي آهن: who، whom، whose، which ۽ that. Who عام طور ماڻهن لاءِ فاعل طور، whom ماڻهن لاءِ مفعول طور، whose ملڪيت ڏيکارڻ لاءِ، which جانورن يا شين لاءِ، ۽ that defining clauses ۾ ماڻهن، جانورن يا شين لاءِ استعمال ٿيندو آهي. مثال: “The girl who won the prize is my sister.” هتي “who won the prize” ڇوڪري بابت وڌيڪ ٻڌائي ٿو.",
      },
      {
        title: "Forms of the Relative Pronouns",
        english: "1. Who — subjective form; used for a person who performs the action: “The boy who called me is here.”\n2. Whom — objective form; used for a person who receives the action or follows a preposition: “The man whom I met was kind.” In everyday English, who is often used instead of whom, especially in conversation.\n3. Whose — possessive form; shows that something belongs to a person, and sometimes an animal or organization: “The student whose bag was lost is waiting.”\n4. Which — used for animals and things: “The phone which I bought works well.” It can also refer to a whole preceding idea in a non-defining clause: “He missed the bus, which made him late.”\n5. That — used for people, animals and things in defining (restrictive) clauses: “The book that you gave me is useful.” It is not normally used after a comma in a non-defining clause.\n6. What — in some grammar descriptions, what is a fused relative pronoun meaning “the thing(s) that”: “I understand what you mean.” Unlike who/which/that, it does not have an expressed antecedent before it.",
        urdu: "1. Who — فاعلی صورت؛ ایسے شخص کے لیے جو عمل کرتا ہے: “The boy who called me is here.”\n2. Whom — مفعولی صورت؛ ایسے شخص کے لیے جس پر عمل ہو یا جو حرفِ جار کے بعد آئے: “The man whom I met was kind.” روزمرہ گفتگو میں whom کی جگہ اکثر who بھی استعمال ہوتا ہے۔\n3. Whose — ملکیتی صورت؛ کسی شخص، اور بعض اوقات جانور یا ادارے کی ملکیت ظاہر کرتی ہے: “The student whose bag was lost is waiting.”\n4. Which — جانوروں اور چیزوں کے لیے استعمال ہوتا ہے: “The phone which I bought works well.” غیر تعریفی clause میں یہ پچھلی پوری بات کی طرف بھی اشارہ کر سکتا ہے: “He missed the bus, which made him late.”\n5. That — انسانوں، جانوروں اور چیزوں کے لیے defining clause میں استعمال ہوتا ہے: “The book that you gave me is useful.” اسے عموماً non-defining clause میں comma کے بعد استعمال نہیں کرتے۔\n6. What — بعض قواعد میں fused relative pronoun ہے، جس کا مطلب “the thing(s) that” ہوتا ہے: “I understand what you mean.” Who/which/that کے برعکس اس سے پہلے الگ antecedent نہیں آتا۔",
        sindhi: "1. Who — فاعلي صورت؛ اهڙي ماڻهو لاءِ جيڪو ڪم ڪري: “The boy who called me is here.”\n2. Whom — مفعولي صورت؛ اهڙي ماڻهو لاءِ جنهن تي عمل ٿئي يا جيڪو حرفِ جر کان پوءِ اچي: “The man whom I met was kind.” روزمره ڳالهائڻ ۾ whom جي جاءِ تي اڪثر who به ايندو آهي.\n3. Whose — ملڪيت ڏيکاري ٿو؛ ڪنهن ماڻهو ۽ ڪڏهن جانور يا اداري جي ملڪيت لاءِ: “The student whose bag was lost is waiting.”\n4. Which — جانورن ۽ شين لاءِ استعمال ٿئي ٿو: “The phone which I bought works well.” غير تعريفي clause ۾ اڳئين پوري ڳالهه ڏانهن به اشارو ڪري سگهي ٿو: “He missed the bus, which made him late.”\n5. That — ماڻهن، جانورن ۽ شين لاءِ defining clause ۾ استعمال ٿئي ٿو: “The book that you gave me is useful.” ان کي عام طور comma کان پوءِ non-defining clause ۾ استعمال نٿو ڪجي.\n6. What — ڪجهه گرامر بيانن ۾ fused relative pronoun آهي، جنهن جي معنيٰ “the thing(s) that” آهي: “I understand what you mean.” Who/which/that جي ابتڙ ان کان اڳ الڳ antecedent نٿو اچي.",
      },
      {
        title: "Use of the Relative Pronouns — 30 Examples",
        english: "Use who when the relative pronoun is the subject referring to a person; whom when it is the object (especially after a preposition or in formal English); whose to show possession; which for animals and things; and that in defining clauses for people, animals or things. Relative clauses may be defining (essential information, usually no commas) or non-defining (extra information, set off by commas). Use who/which, not that, in non-defining clauses. The relative pronoun may sometimes be omitted when it is the object in a defining clause: “The book (that) I bought is new.” Do not omit it when it is the subject: “The boy who lives next door…”",
        urdu: "کسی شخص کے لیے جب relative pronoun فاعل ہو تو who، مفعول ہو تو whom (خاص طور پر حرفِ جار کے بعد یا رسمی انگریزی میں)، ملکیت کے لیے whose، جانوروں اور چیزوں کے لیے which، اور انسانوں، جانوروں یا چیزوں کے لیے defining clause میں that استعمال کریں۔ Relative clauses دو طرح کے ہوتے ہیں: defining clause ضروری معلومات دیتا ہے اور عموماً comma نہیں لیتا؛ non-defining clause اضافی معلومات دیتا ہے اور commas کے درمیان آتا ہے۔ Non-defining clause میں who یا which استعمال کریں، that نہیں۔ Defining clause میں جب relative pronoun مفعول ہو تو کبھی اسے حذف کیا جا سکتا ہے: “The book (that) I bought is new.” لیکن جب وہ فاعل ہو تو اسے حذف نہ کریں: “The boy who lives next door…”",
        sindhi: "ڪنهن ماڻهو لاءِ جڏهن relative pronoun فاعل هجي ته who، مفعول هجي ته whom (خاص ڪري حرفِ جر کان پوءِ يا رسمي انگريزيءَ ۾)، ملڪيت لاءِ whose، جانورن ۽ شين لاءِ which، ۽ ماڻهن، جانورن يا شين لاءِ defining clause ۾ that استعمال ڪريو. Relative clauses جا ٻه قسم آهن: defining clause ضروري ڄاڻ ڏئي ٿو ۽ عام طور comma نٿو وٺي؛ non-defining clause اضافي ڄاڻ ڏئي ٿو ۽ commas جي وچ ۾ لکبو آهي. Non-defining clause ۾ who يا which استعمال ڪريو، that نه. Defining clause ۾ جڏهن relative pronoun مفعول هجي ته ڪڏهن ان کي ڇڏي سگهجي ٿو: “The book (that) I bought is new.” پر جڏهن اهو فاعل هجي ته ان کي نه ڇڏيو: “The boy who lives next door…”",
        examples: [
          ["The woman who teaches us is kind.", "جو خاتون ہمیں پڑھاتی ہیں وہ مہربان ہیں۔", "جيڪا عورت اسان کي پڙهائي ٿي، اها مهربان آهي."],
          ["I know a boy who speaks five languages.", "میں ایک ایسے لڑکے کو جانتا ہوں جو پانچ زبانیں بولتا ہے۔", "مان هڪ اهڙي ڇوڪري کي سڃاڻان ٿو جيڪو پنج ٻوليون ڳالهائي ٿو."],
          ["The man whom you called is my uncle.", "جس آدمی کو تم نے فون کیا وہ میرے چچا ہیں۔", "جنهن ماڻهوءَ کي تو فون ڪيو، اهو منهنجو چاچو آهي."],
          ["The person to whom I wrote replied.", "جس شخص کو میں نے خط لکھا، اس نے جواب دیا۔", "جنهن ماڻهوءَ کي مون خط لکيو، تنهن جواب ڏنو."],
          ["The girl whose father is a doctor won the prize.", "وہ لڑکی جس کے والد ڈاکٹر ہیں انعام جیت گئی۔", "اها ڇوڪري جنهن جو پيءُ ڊاڪٽر آهي، انعام کٽي وئي."],
          ["This is the house whose roof was damaged.", "یہ وہ گھر ہے جس کی چھت کو نقصان پہنچا تھا۔", "هي اهو گهر آهي جنهن جي ڇت کي نقصان پهتو هو."],
          ["The book which is on the table is mine.", "جو کتاب میز پر ہے وہ میری ہے۔", "جيڪو ڪتاب ميز تي آهي، اهو منهنجو آهي."],
          ["The car which we bought is economical.", "جو گاڑی ہم نے خریدی ہے وہ کم خرچ ہے۔", "جيڪا گاڏي اسان خريد ڪئي آهي، اها گهٽ خرچ واري آهي."],
          ["The dog that barked all night belongs to our neighbour.", "وہ کتا جو ساری رات بھونکتا رہا ہمارے پڑوسی کا ہے۔", "اهو ڪتو جيڪو سڄي رات ڀونڪندو رهيو، اسان جي پاڙيسريءَ جو آهي."],
          ["The student that answered first received a gift.", "جس طالب علم نے پہلے جواب دیا اسے انعام ملا۔", "جنهن شاگرد پهرين جواب ڏنو، تنهن کي تحفو مليو."],
          ["I returned the phone that you lent me.", "میں نے وہ فون واپس کر دیا جو تم نے مجھے دیا تھا۔", "مون اهو فون واپس ڪيو جيڪو تو مون کي ڏنو هو."],
          ["The teacher who helped me is absent today.", "جس استاد نے میری مدد کی وہ آج غیر حاضر ہیں۔", "جنهن استاد منهنجي مدد ڪئي، اهو اڄ غير حاضر آهي."],
          ["The woman whom we invited could not come.", "جس خاتون کو ہم نے دعوت دی وہ نہیں آ سکیں۔", "جنهن عورت کي اسان دعوت ڏني، اها اچي نه سگهي."],
          ["The child whose toy broke began to cry.", "جس بچے کا کھلونا ٹوٹ گیا وہ رونے لگا۔", "جنهن ٻار جو رانديڪو ڀڄي پيو، اهو روئڻ لڳو."],
          ["The museum, which opened in 1990, is very popular.", "میوزیم، جو 1990 میں کھلا تھا، بہت مقبول ہے۔", "ميوزيم، جيڪو 1990ع ۾ کليو هو، تمام مشهور آهي."],
          ["My brother, who lives in Karachi, is a doctor.", "میرا بھائی، جو کراچی میں رہتا ہے، ڈاکٹر ہے۔", "منهنجو ڀاءُ، جيڪو ڪراچيءَ ۾ رهي ٿو، ڊاڪٽر آهي."],
          ["The bicycle that has a red seat is mine.", "وہ سائیکل جس کی نشست سرخ ہے میری ہے۔", "اها سائيڪل جنهن جي سيٽ ڳاڙهي آهي، منهنجي آهي."],
          ["Anyone who works hard can succeed.", "جو بھی محنت کرتا ہے وہ کامیاب ہو سکتا ہے۔", "جيڪو به محنت ڪري ٿو، اهو ڪامياب ٿي سگهي ٿو."],
          ["I liked the story that you told us.", "مجھے وہ کہانی پسند آئی جو تم نے ہمیں سنائی۔", "مون کي اها ڪهاڻي وڻي جيڪا تو اسان کي ٻڌائي."],
          ["The woman whose purse was missing informed the guard.", "جس خاتون کا پرس گم تھا اس نے محافظ کو بتایا۔", "جنهن عورت جو پرس گم هو، تنهن چوڪيدار کي ٻڌايو."],
          ["This is the restaurant where we first met.", "یہ وہ ریستوران ہے جہاں ہم پہلی بار ملے تھے۔", "هي اهو ريسٽورنٽ آهي جتي اسان پهريون ڀيرو مليا هئاسين."],
          ["I remember the day when we graduated.", "مجھے وہ دن یاد ہے جب ہم نے تعلیم مکمل کی۔", "مون کي اهو ڏينهن ياد آهي جڏهن اسان تعليم مڪمل ڪئي."],
          ["That is the reason why she left early.", "یہی وجہ ہے کہ وہ جلدی چلی گئی۔", "اهو ئي سبب آهي جو هوءَ جلدي هلي وئي."],
          ["The student who sits near the window is my cousin.", "جو طالب علم کھڑکی کے قریب بیٹھتا ہے وہ میرا کزن ہے۔", "جيڪو شاگرد دريءَ ڀرسان ويهي ٿو، اهو منهنجو سوٽ آهي."],
          ["The pen that I lost was expensive.", "جو قلم مجھ سے گم ہوا تھا وہ مہنگا تھا۔", "جيڪو قلم مون کان گم ٿيو هو، اهو مهانگو هو."],
          ["The doctor to whom I spoke was helpful.", "جس ڈاکٹر سے میں نے بات کی وہ مددگار تھے۔", "جنهن ڊاڪٽر سان مون ڳالهايو، اهو مددگار هو."],
          ["The players who trained daily improved quickly.", "جو کھلاڑی روزانہ مشق کرتے تھے وہ جلد بہتر ہو گئے۔", "جيڪي رانديگر روزانو مشق ڪندا هئا، سي جلدي بهتر ٿيا."],
          ["The laptop, which I bought last year, still works well.", "لیپ ٹاپ، جو میں نے پچھلے سال خریدا تھا، اب بھی اچھا چلتا ہے۔", "ليپ ٽاپ، جيڪو مون گذريل سال خريد ڪيو هو، اڃا به سٺو هلي ٿو."],
          ["I understand what you are saying.", "میں سمجھتا ہوں کہ تم کیا کہہ رہے ہو۔", "مان سمجهان ٿو ته تون ڇا چئي رهيو آهين."],
          ["She gave me everything that I needed.", "اس نے مجھے وہ سب کچھ دیا جس کی مجھے ضرورت تھی۔", "هن مون کي اهو سڀ ڪجهه ڏنو جنهن جي مون کي ضرورت هئي."]
        ]
      },
      {
        title: "Omission of the Relative Pronouns",
        english: "A relative pronoun may sometimes be omitted from a relative clause. This is called omission or zero relative pronoun.\n\n1. The relative pronoun can be omitted when it is the object of the verb in a defining (restrictive) relative clause. Example: “The book that I bought is interesting” may become “The book I bought is interesting.” Here that is the object of bought; the subject is I.\n2. It can also be omitted when it is the object of a preposition placed at the end of the clause in ordinary English: “The person whom I spoke to” becomes “The person I spoke to.”\n3. The relative pronoun must not be omitted when it is the subject of its clause: “The woman who lives next door is a doctor.” Who is the subject of lives.\n4. Do not omit whose, because it expresses possession: “The boy whose bicycle was stolen…”\n5. In formal English, a preposition placed before the relative pronoun requires the pronoun: “The person to whom I spoke…” Do not say “the person to I spoke.”\n6. The relative pronoun is not normally omitted in non-defining clauses, which are separated by commas: “My uncle, who lives in Lahore, is a teacher.”\n7. The omission is most common with that, who or whom when they function as objects in defining clauses. The meaning remains clear because the noun being described is already stated.\n\nRemember: omit an object relative pronoun only when the clause remains clear and grammatical. Never omit a subject relative pronoun.",
        urdu: "Relative clause میں بعض اوقات relative pronoun کو حذف کیا جا سکتا ہے۔ اسے omission یا zero relative pronoun کہتے ہیں۔\n\n1. جب relative pronoun کسی defining (restrictive) relative clause میں فعل کا مفعول ہو تو اسے حذف کیا جا سکتا ہے۔ مثال: “The book that I bought is interesting” کو “The book I bought is interesting” بھی لکھ سکتے ہیں۔ یہاں that، bought کا مفعول ہے جبکہ فاعل I ہے۔\n2. عام انگریزی میں جب حرفِ جار clause کے آخر میں آئے اور relative pronoun اس کا مفعول ہو تو اسے بھی حذف کیا جا سکتا ہے: “The person whom I spoke to” کی جگہ “The person I spoke to”۔\n3. جب relative pronoun اپنے clause کا فاعل ہو تو اسے حذف نہیں کرنا چاہیے: “The woman who lives next door is a doctor.” یہاں who، lives کا فاعل ہے۔\n4. Whose کو حذف نہ کریں کیونکہ یہ ملکیت ظاہر کرتا ہے: “The boy whose bicycle was stolen…”\n5. رسمی انگریزی میں جب حرفِ جار relative pronoun سے پہلے ہو تو pronoun لازمی ہے: “The person to whom I spoke…”۔ “the person to I spoke” غلط ہے۔\n6. Non-defining clauses میں، جو commas کے درمیان آتے ہیں، relative pronoun عموماً حذف نہیں ہوتا: “My uncle, who lives in Lahore, is a teacher.”\n7. حذف کرنا زیادہ تر اس وقت ممکن ہے جب that، who یا whom defining clause میں مفعول ہوں۔ جس اسم کی وضاحت ہو رہی ہے وہ پہلے موجود ہوتا ہے، اس لیے مطلب واضح رہتا ہے۔\n\nیاد رکھیں: صرف مفعولی relative pronoun کو اس وقت حذف کریں جب جملہ واضح اور قواعد کے مطابق رہے۔ فاعلی relative pronoun کو حذف نہ کریں۔",
        sindhi: "Relative clause ۾ ڪڏهن ڪڏهن relative pronoun کي ڇڏي سگهجي ٿو. ان کي omission يا zero relative pronoun چئبو آهي.\n\n1. جڏهن relative pronoun defining (restrictive) relative clause ۾ فعل جو مفعول هجي ته ان کي ڇڏي سگهجي ٿو. مثال: “The book that I bought is interesting” کي “The book I bought is interesting” به لکي سگهجي ٿو. هتي that، bought جو مفعول آهي ۽ فاعل I آهي.\n2. عام انگريزيءَ ۾ جڏهن حرفِ جر clause جي آخر ۾ اچي ۽ relative pronoun ان جو مفعول هجي ته ان کي به ڇڏي سگهجي ٿو: “The person whom I spoke to” بدران “The person I spoke to”.\n3. جڏهن relative pronoun پنهنجي clause جو فاعل هجي ته ان کي نه ڇڏڻ گهرجي: “The woman who lives next door is a doctor.” هتي who، lives جو فاعل آهي.\n4. Whose کي نه ڇڏيو، ڇاڪاڻ⁠تہ اهو ملڪيت ڏيکاري ٿو: “The boy whose bicycle was stolen…”\n5. رسمي انگريزيءَ ۾ جڏهن حرفِ جر relative pronoun کان اڳ اچي ته pronoun ضروري آهي: “The person to whom I spoke…”۔ “the person to I spoke” غلط آهي.\n6. Non-defining clauses ۾، جيڪي commas جي وچ ۾ اچن ٿا، relative pronoun عام طور نٿو ڇڏجي: “My uncle, who lives in Lahore, is a teacher.”\n7. حذف ڪرڻ گهڻو ڪري تڏهن ممڪن آهي جڏهن that، who يا whom defining clause ۾ مفعول طور ڪم ڪن. جنهن اسم جي وضاحت ٿئي ٿي، اهو اڳ ۾ موجود هوندو آهي، تنهنڪري مطلب صاف رهي ٿو.\n\nياد رکو: رڳو مفعولي relative pronoun کي تڏهن ڇڏيو جڏهن جملو صاف ۽ گرامر موجب هجي. فاعلي relative pronoun کي ڪڏهن به نه ڇڏيو.",
        examples: [
          ["The movie that we watched was exciting.", "جو فلم ہم نے دیکھی وہ دلچسپ تھی۔", "جيڪا فلم اسان ڏٺي، سا دلچسپ هئي."],
          ["The man whom I met yesterday is a pilot.", "وہ آدمی جس سے میں کل ملا ایک پائلٹ ہے۔", "اهو ماڻهو جنهن سان مان ڪالهه مليس، پائلٽ آهي."],
          ["The letter that she wrote was beautiful.", "وہ خط جو اس نے لکھا خوبصورت تھا۔", "اهو خط جيڪو هن لکيو، سهڻو هو."],
          ["The house which they bought is very old.", "وہ گھر جو انہوں نے خریدا بہت پرانا ہے۔", "اهو گهر جيڪو انهن خريد ڪيو، تمام پراڻو آهي."],
          ["The person whom I was waiting for has arrived.", "وہ شخص جس کا میں انتظار کر رہا تھا آ گیا ہے۔", "اهو ماڻهو جنهن جو مان انتظار ڪري رهيو هوس، اچي ويو آهي."],
          ["The food that you prepared tastes delicious.", "جو کھانا تم نے تیار کیا وہ مزیدار ہے۔", "جيڪو کاڌو تو تيار ڪيو، اهو مزيدار آهي."],
          ["The song which he sang became popular.", "وہ گانا جو اس نے گایا مقبول ہو گیا۔", "اهو گيت جيڪو هن ڳايو، مشهور ٿي ويو."],
          ["The teacher whom we respect is retiring.", "وہ استاد جس کی ہم عزت کرتے ہیں ریٹائر ہو رہے ہیں۔", "اهو استاد جنهن جي اسان عزت ڪريون ٿا، رٽائر ٿي رهيو آهي."],
          ["The bag that I left on the bus is missing.", "وہ بیگ جو میں بس میں چھوڑ آیا تھا گم ہے۔", "اهو ٿيلهو جيڪو مان بس ۾ ڇڏي آيو هوس، گم آهي."],
          ["The friend whom you invited could not attend.", "وہ دوست جسے تم نے بلایا تھا شریک نہ ہو سکا۔", "اهو دوست جنهن کي تو سڏيو هو، اچي نه سگهيو."]
        ]
      },
      {
        title: "Omission of the Antecedent",
        english: "The antecedent is the noun or pronoun to which a relative pronoun refers. Usually it appears before the relative clause: “The man who came here is my uncle.” The antecedent of who is man.\n\nSometimes the antecedent is not separately expressed. It is understood as part of the relative expression itself. This is traditionally described as omission of the antecedent, and modern grammar often calls the construction a fused or free relative clause.\n\n1. What often means “the thing(s) that” or “that which”: “Take what you need” means “Take the thing that you need.”\n2. Whoever means “any person who” or “the person who”: “Whoever works hard will succeed.”\n3. Whomever means “any person whom” when it is the object: “Give it to whomever you choose.”\n4. Whatever means “anything that” or “no matter what”: “Whatever you decide, tell me.”\n5. Whichever means “the one that” from a limited choice: “Choose whichever you prefer.”\n\nIn these expressions, there is no separate noun antecedent before the clause; the relative word and its understood antecedent are combined. Do not confuse this with ordinary relative clauses, where the antecedent is stated: “I liked the book that you recommended.”",
        urdu: "Antecedent وہ اسم یا ضمیر ہے جس کی طرف relative pronoun اشارہ کرتا ہے۔ عام طور پر یہ relative clause سے پہلے آتا ہے: “The man who came here is my uncle.” یہاں who کا antecedent man ہے۔\n\nبعض اوقات antecedent الگ سے ظاہر نہیں کیا جاتا بلکہ relative expression کے اندر ہی سمجھا جاتا ہے۔ روایتی قواعد میں اسے omission of the antecedent کہا جاتا ہے، جبکہ جدید گرامر میں اسے fused یا free relative clause بھی کہتے ہیں۔\n\n1. What کا مطلب اکثر “the thing(s) that” یا “that which” ہوتا ہے: “Take what you need” یعنی “وہ چیز لے لو جس کی تمہیں ضرورت ہے۔”\n2. Whoever کا مطلب “any person who” یا “وہ شخص جو” ہے: “Whoever works hard will succeed.”\n3. Whomever مفعولی صورت میں “any person whom” کے معنی دیتا ہے: “Give it to whomever you choose.”\n4. Whatever کا مطلب “anything that” یا “چاہے کچھ بھی” ہو سکتا ہے: “Whatever you decide, tell me.”\n5. Whichever محدود انتخاب میں “ان میں سے جو بھی” کے معنی دیتا ہے: “Choose whichever you prefer.”\n\nان expressions میں clause سے پہلے الگ اسم بطور antecedent موجود نہیں ہوتا؛ relative word اور اس کا مفہوم میں شامل antecedent ایک ساتھ ہوتے ہیں۔ اسے عام relative clause سے الگ سمجھیں، جہاں antecedent واضح ہوتا ہے: “I liked the book that you recommended.”",
        sindhi: "Antecedent اهو اسم يا ضمير آهي جنهن ڏانهن relative pronoun اشارو ڪري ٿو. عام طور اهو relative clause کان اڳ ايندو آهي: “The man who came here is my uncle.” هتي who جو antecedent man آهي.\n\nڪڏهن antecedent الڳ لفظ طور ظاهر نه ٿيندو، پر relative expression جي اندر ئي سمجهيو ويندو آهي. روايتي گرامر ۾ ان کي omission of the antecedent چئبو آهي، جڏهن ته جديد گرامر ۾ ان کي fused يا free relative clause به چوندا آهن.\n\n1. What جي معنيٰ اڪثر “the thing(s) that” يا “that which” هوندي آهي: “Take what you need” يعني “اها شيءِ وٺ جيڪا توکي گهرجي.”\n2. Whoever جي معنيٰ “any person who” يا “اهو ماڻهو جيڪو” آهي: “Whoever works hard will succeed.”\n3. Whomever مفعولي صورت ۾ “any person whom” جي معنيٰ ڏئي ٿو: “Give it to whomever you choose.”\n4. Whatever جي معنيٰ “anything that” يا “جيڪو به” ٿي سگهي ٿي: “Whatever you decide, tell me.”\n5. Whichever محدود چونڊ مان “جيڪو به” جي معنيٰ ڏئي ٿو: “Choose whichever you prefer.”\n\nانهن expressions ۾ clause کان اڳ الڳ antecedent اسم موجود نه هوندو؛ relative word ۽ ان ۾ سمجهيل antecedent گڏ هوندا آهن. ان کي عام relative clause کان الڳ سمجهو، جتي antecedent صاف لکيل هوندو آهي: “I liked the book that you recommended.”"
      },
      {
        title: "Agreement of the Relative Pronoun and Its Antecedent",
        english: "A relative pronoun must correctly refer to its antecedent, and the verb inside the relative clause must agree in number and person with the antecedent when the relative pronoun is the subject.\n\n1. Singular antecedent: use a singular verb — “The boy who lives here is my cousin.” Boy is singular, so the clause uses lives.\n2. Plural antecedent: use a plural verb — “The boys who live here are my cousins.” Boys is plural, so the clause uses live.\n3. First- and second-person antecedents: the verb agrees with the person of the antecedent: “I, who am your friend, will help”; “You, who are honest, can be trusted.”\n4. Each, every, everyone, someone, anybody and nobody are grammatically singular in standard usage: “Everyone who wants a ticket is waiting.”\n5. A relative pronoun referring to one of two nouns joined by and generally takes a plural verb: “The teacher and the student who are speaking…”\n6. If the antecedent is one of two alternatives joined by or/nor, the verb usually agrees with the nearer antecedent in formal constructions; rewrite awkward sentences to make the meaning clear.\n7. With collective nouns, agreement depends on whether the group is viewed as one unit (singular) or as individuals (plural, especially in British English). Keep the intended meaning clear.\n8. Remember that who, whom, whose, which and that do not change their form for singular or plural. It is the verb in the relative clause—not the relative pronoun itself—that shows number agreement when the pronoun is the subject.\n\nCheck the antecedent first, then choose the correct verb. Do not make the verb agree with a nearby noun inside the relative clause if that noun is not the antecedent.",
        urdu: "Relative pronoun کا antecedent سے درست تعلق ہونا چاہیے، اور جب relative pronoun اپنے clause میں فاعل ہو تو اس clause کا فعل antecedent کے عدد اور شخص کے مطابق ہونا چاہیے۔\n\n1. واحد antecedent: واحد فعل استعمال کریں — “The boy who lives here is my cousin.” Boy واحد ہے، اس لیے lives آئے گا۔\n2. جمع antecedent: جمع فعل استعمال کریں — “The boys who live here are my cousins.” Boys جمع ہے، اس لیے live آئے گا۔\n3. پہلے اور دوسرے شخص کے antecedents: فعل antecedent کے شخص کے مطابق ہوگا: “I, who am your friend, will help”؛ “You, who are honest, can be trusted.”\n4. Each، every، everyone، someone، anybody اور nobody معیاری استعمال میں واحد شمار ہوتے ہیں: “Everyone who wants a ticket is waiting.”\n5. جب antecedent دو اسم ہوں جو and سے ملے ہوں تو relative clause میں عموماً جمع فعل آتا ہے: “The teacher and the student who are speaking…”\n6. اگر antecedent or/nor سے ملے متبادل اسموں میں سے ہو تو رسمی ساخت میں فعل عموماً قریب والے antecedent کے مطابق ہوتا ہے؛ مبہم جملے کو دوبارہ لکھ کر واضح بنائیں۔\n7. Collective nouns کے ساتھ فعل اس بات پر منحصر ہے کہ گروہ کو ایک اکائی سمجھا گیا ہے (واحد) یا افراد کے طور پر (جمع، خاص طور پر برطانوی انگریزی میں)۔\n8. یاد رکھیں کہ who، whom، whose، which اور that واحد یا جمع کے لحاظ سے اپنی شکل نہیں بدلتے۔ جب یہ فاعل ہوں تو عدد کی مطابقت relative pronoun نہیں بلکہ relative clause کا فعل ظاہر کرتا ہے۔\n\nپہلے antecedent تلاش کریں، پھر اس کے مطابق درست فعل منتخب کریں۔ relative clause کے اندر کسی قریب موجود دوسرے اسم کے مطابق فعل نہ لگائیں، اگر وہ antecedent نہیں ہے۔",
        sindhi: "Relative pronoun جو antecedent سان صحيح تعلق هجڻ گهرجي، ۽ جڏهن relative pronoun پنهنجي clause ۾ فاعل هجي ته ان clause جو فعل antecedent جي عدد ۽ شخص مطابق هجڻ گهرجي.\n\n1. واحد antecedent: واحد فعل استعمال ڪريو — “The boy who lives here is my cousin.” Boy واحد آهي، تنهنڪري lives ايندو.\n2. جمع antecedent: جمع فعل استعمال ڪريو — “The boys who live here are my cousins.” Boys جمع آهي، تنهنڪري live ايندو.\n3. پهرين ۽ ٻئي شخص جا antecedents: فعل antecedent جي شخص مطابق ٿيندو: “I, who am your friend, will help”؛ “You, who are honest, can be trusted.”\n4. Each، every، everyone، someone، anybody ۽ nobody معياري استعمال ۾ واحد آهن: “Everyone who wants a ticket is waiting.”\n5. جڏهن antecedent ٻه اسم هجن جيڪي and سان ڳنڍيل هجن ته relative clause ۾ عام طور جمع فعل ايندو: “The teacher and the student who are speaking…”\n6. جيڪڏهن antecedent or/nor سان ڳنڍيل متبادل اسمن مان هجي ته رسمي ساخت ۾ فعل عام طور ويجهي antecedent مطابق ٿيندو؛ ڏکئي جملي کي ٻيهر لکي صاف ڪريو.\n7. Collective nouns سان فعل ان ڳالهه تي دارومدار رکي ٿو ته گروهه کي هڪ گڏيل ايڪي طور ڏٺو ويو آهي (واحد) يا فردن طور (جمع، خاص ڪري برطانوي انگريزيءَ ۾).\n8. ياد رکو ته who، whom، whose، which ۽ that واحد يا جمع موجب پنهنجي صورت نٿا بدلائين. جڏهن اهي فاعل هجن ته عدد جي مطابقت relative pronoun نه، پر relative clause جو فعل ڏيکاري ٿو.\n\nپهريان antecedent سڃاڻو، پوءِ ان مطابق صحيح فعل چونڊيو. Relative clause اندر ويجهي ٻئي اسم مطابق فعل نه لڳايو، جيڪڏهن اهو antecedent نه هجي."
      },
      {
        title: "Position of the Relative Pronouns",
        english: "A relative pronoun is normally placed immediately after its antecedent, because it introduces the clause that describes that noun or pronoun. The relative clause may appear in the middle or at the end of a sentence, depending on where the antecedent occurs.\n\n1. Immediately after the antecedent: “The boy who won the race is my brother.” The pronoun who follows boy.\n2. After an antecedent used as the object: “I met the woman who teaches English.” The clause follows woman.\n3. A relative clause can interrupt the main clause when the antecedent is its subject: “My uncle, who lives abroad, is visiting us.” The main clause continues after the inserted clause.\n4. A non-defining relative clause is separated by commas: “Mr Khan, who is our neighbour, is a doctor.”\n5. A defining relative clause is not separated by commas: “The student who answered correctly received a prize.”\n6. A preposition may come before whom/which in formal English: “The person to whom I spoke was helpful.” In informal English, the preposition usually comes at the end: “The person who I spoke to was helpful.”\n7. The relative pronoun must be placed close enough to its antecedent to avoid confusion. Keep the relative clause next to the noun it describes.\n\nThe relative pronoun itself does not normally move freely; its position is determined by the antecedent and the structure of the relative clause.",
        urdu: "Relative pronoun عام طور اپنے antecedent کے فوراً بعد آتا ہے، کیونکہ یہ اسی اسم یا ضمیر کی وضاحت کرنے والا clause شروع کرتا ہے۔ Relative clause جملے کے درمیان یا آخر میں آ سکتا ہے، اس بات پر منحصر ہے کہ antecedent کہاں موجود ہے۔\n\n1. Antecedent کے فوراً بعد: “The boy who won the race is my brother.” یہاں who، boy کے فوراً بعد آیا ہے۔\n2. مفعول کے طور پر آنے والے antecedent کے بعد: “I met the woman who teaches English.” Clause، woman کے بعد آیا ہے۔\n3. جب antecedent main clause کا فاعل ہو تو relative clause main clause کے درمیان آ سکتا ہے: “My uncle, who lives abroad, is visiting us.” درمیان والا clause ختم ہونے کے بعد اصل جملہ جاری رہتا ہے۔\n4. Non-defining relative clause کو commas سے الگ کیا جاتا ہے: “Mr Khan, who is our neighbour, is a doctor.”\n5. Defining relative clause کو commas سے الگ نہیں کیا جاتا: “The student who answered correctly received a prize.”\n6. رسمی انگریزی میں حرفِ جار، whom/which سے پہلے آ سکتا ہے: “The person to whom I spoke was helpful.” غیر رسمی انگریزی میں حرفِ جار عموماً آخر میں آتا ہے: “The person who I spoke to was helpful.”\n7. Relative pronoun کو antecedent کے اتنا قریب رکھیں کہ ابہام پیدا نہ ہو۔ Relative clause اسی اسم کے ساتھ ہونا چاہیے جس کی وہ وضاحت کرتا ہے۔\n\nRelative pronoun اپنی جگہ آزادانہ طور پر نہیں بدلتا؛ اس کی جگہ antecedent اور relative clause کی ساخت کے مطابق ہوتی ہے۔",
        sindhi: "Relative pronoun عام طور پنهنجي antecedent کان فوراً پوءِ ايندو آهي، ڇاڪاڻ⁠تہ اهو ان اسم يا ضمير جي وضاحت ڪندڙ clause شروع ڪري ٿو. Antecedent جي جاءِ موجب relative clause جملي جي وچ ۾ يا آخر ۾ اچي سگهي ٿو.\n\n1. Antecedent کان فوراً پوءِ: “The boy who won the race is my brother.” هتي who، boy کان فوراً پوءِ آيو آهي.\n2. مفعول طور ايندڙ antecedent کان پوءِ: “I met the woman who teaches English.” Clause، woman کان پوءِ آيو آهي.\n3. جڏهن antecedent main clause جو فاعل هجي ته relative clause جملي جي وچ ۾ اچي سگهي ٿو: “My uncle, who lives abroad, is visiting us.” وچ وارو clause ختم ٿيڻ کان پوءِ اصل جملو جاري رهي ٿو.\n4. Non-defining relative clause کي commas سان الڳ ڪيو ويندو آهي: “Mr Khan, who is our neighbour, is a doctor.”\n5. Defining relative clause کي commas سان الڳ نه ڪيو ويندو آهي: “The student who answered correctly received a prize.”\n6. رسمي انگريزيءَ ۾ حرفِ جر whom/which کان اڳ اچي سگهي ٿو: “The person to whom I spoke was helpful.” غير رسمي انگريزيءَ ۾ حرفِ جر عام طور آخر ۾ ايندو آهي: “The person who I spoke to was helpful.”\n7. Relative pronoun کي antecedent جي ويجهو رکو ته جيئن مطلب ۾ مونجهارو نه ٿئي. Relative clause ان اسم جي ڀرسان هجي جنهن جي اها وضاحت ڪري ٿي.\n\nRelative pronoun پنهنجي جاءِ مرضيءَ سان نٿو بدلائي؛ ان جي جاءِ antecedent ۽ relative clause جي بناوت تي دارومدار رکي ٿي.",
        examples: [
          ["The girl who is singing is my sister.", "جو لڑکی گا رہی ہے وہ میری بہن ہے۔", "جيڪا ڇوڪري ڳائي رهي آهي، سا منهنجي ڀيڻ آهي."],
          ["I bought a book that explains grammar.", "میں نے ایک ایسی کتاب خریدی جو گرامر سمجھاتی ہے۔", "مون هڪ اهڙو ڪتاب خريد ڪيو جيڪو گرامر سمجهائي ٿو."],
          ["The man whom we met is a scientist.", "وہ آدمی جس سے ہم ملے ایک سائنس دان ہے۔", "اهو ماڻهو جنهن سان اسان ملياسين، سائنسدان آهي."],
          ["My aunt, who lives in Hyderabad, is visiting us.", "میری خالہ، جو حیدرآباد میں رہتی ہیں، ہم سے ملنے آ رہی ہیں۔", "منهنجي ماسي، جيڪا حيدرآباد ۾ رهي ٿي، اسان وٽ اچي رهي آهي."],
          ["The student whose work won the prize is absent.", "وہ طالب علم جس کے کام نے انعام جیتا غیر حاضر ہے۔", "اهو شاگرد جنهن جي ڪم انعام کٽيو، غير حاضر آهي."],
          ["The shop which opens early sells fresh bread.", "وہ دکان جو جلد کھلتی ہے تازہ روٹی فروخت کرتی ہے۔", "اها دڪان جيڪا سوير کلي ٿي، تازو ماني وڪڻي ٿي."],
          ["The person to whom you sent the letter has replied.", "جس شخص کو تم نے خط بھیجا تھا اس نے جواب دے دیا ہے۔", "جنهن ماڻهوءَ کي تو خط موڪليو هو، تنهن جواب ڏنو آهي."],
          ["The house that stands on the hill is very old.", "وہ گھر جو پہاڑی پر ہے بہت پرانا ہے۔", "اهو گهر جيڪو ٽڪريءَ تي بيٺل آهي، تمام پراڻو آهي."],
          ["Our teacher, who is very patient, explained the lesson.", "ہمارے استاد، جو بہت صابر ہیں، نے سبق سمجھایا۔", "اسان جي استاد، جيڪو تمام صبر وارو آهي، سبق سمجهايو."],
          ["The players who practised daily improved quickly.", "وہ کھلاڑی جو روزانہ مشق کرتے تھے جلد بہتر ہو گئے۔", "اهي رانديگر جيڪي روزانو مشق ڪندا هئا، جلدي بهتر ٿيا."]
        ]
      },
      {
        title: "Compound Relative Pronouns",
        english: "Compound relative pronouns are formed by adding -ever to certain relative words. The common forms are whoever, whomever, whichever and whatever. They introduce a relative clause and refer to an unknown, unrestricted or selected person or thing. In many grammar treatments, whatever and whichever can also be called compound relative forms.\n\n1. Whoever means “any person who” or “the person who”: “Whoever arrives first may begin.” It functions as the subject of the clause.\n2. Whomever means “any person whom” and is used as an object: “Invite whomever you like.” In everyday English, whoever is often used in object position too, but whomever is the traditional formal object form.\n3. Whatever means “anything that” or “no matter what”: “Take whatever you need.”\n4. Whichever means “any one or ones that” from a limited choice: “Choose whichever you prefer.”\n5. The compound form itself includes the understood antecedent, so a separate noun antecedent is not needed before it. For example, whoever means “the person who”.\n6. Choose the case according to the role of the word in its own clause: whoever is subject; whomever is object. Compare: “Whoever calls will be answered” and “I will answer whomever calls” (formal usage may vary in complex clauses; identify the role within the clause).\n7. These forms can appear at the beginning or within a sentence, depending on their grammatical function.\n\nDo not confuse compound relative pronouns with ordinary relative pronouns following a stated antecedent: “the person who came” has an expressed antecedent; “whoever came” does not.",
        urdu: "Compound relative pronouns بعض relative الفاظ کے ساتھ -ever لگانے سے بنتے ہیں۔ عام صورتیں whoever، whomever، whichever اور whatever ہیں۔ یہ relative clause شروع کرتے ہیں اور کسی غیر متعین یا محدود انتخاب میں سے شخص یا چیز کی طرف اشارہ کرتے ہیں۔ بعض قواعد میں whatever اور whichever کو بھی compound relative forms کہا جاتا ہے۔\n\n1. Whoever کا مطلب “any person who” یا “جو بھی شخص” ہے: “Whoever arrives first may begin.” یہ اپنے clause میں فاعل ہوتا ہے۔\n2. Whomever کا مطلب “any person whom” ہے اور یہ مفعول کے طور پر آتا ہے: “Invite whomever you like.” روزمرہ انگریزی میں مفعولی جگہ پر بھی اکثر whoever آتا ہے، لیکن روایتی رسمی قاعدے میں whomever مفعول کی صورت ہے۔\n3. Whatever کا مطلب “anything that” یا “جو کچھ بھی” ہے: “Take whatever you need.”\n4. Whichever کا مطلب محدود انتخاب میں سے “جو بھی” ہے: “Choose whichever you prefer.”\n5. Compound form میں antecedent کا مفہوم خود شامل ہوتا ہے، اس لیے اس سے پہلے الگ اسم کی ضرورت نہیں: whoever کا مطلب ہی “وہ شخص جو” ہے۔\n6. اپنی clause میں لفظ کے کام کے مطابق صورت منتخب کریں: whoever فاعل اور whomever مفعول ہے۔\n7. یہ الفاظ اپنے grammatical function کے مطابق جملے کے آغاز یا درمیان میں آ سکتے ہیں۔\n\nCompound relative pronouns کو ایسے عام relative pronouns سے الگ سمجھیں جن کا antecedent پہلے سے موجود ہو: “the person who came” میں antecedent موجود ہے، جبکہ “whoever came” میں الگ antecedent نہیں۔",
        sindhi: "Compound relative pronouns ڪجهه relative لفظن سان -ever ملائڻ سان ٺهن ٿا. عام صورتون whoever، whomever، whichever ۽ whatever آهن. اهي relative clause شروع ڪن ٿا ۽ ڪنهن اڻڄاتل ماڻهو يا شيءِ، يا محدود چونڊ مان ڪنهن هڪ ڏانهن اشارو ڪن ٿا. ڪجهه گرامر ڪتابن ۾ whatever ۽ whichever کي به compound relative forms چيو ويندو آهي.\n\n1. Whoever جي معنيٰ “any person who” يا “جيڪو به ماڻهو” آهي: “Whoever arrives first may begin.” اهو پنهنجي clause ۾ فاعل هوندو آهي.\n2. Whomever جي معنيٰ “any person whom” آهي ۽ اهو مفعول طور ايندو آهي: “Invite whomever you like.” روزمره انگريزيءَ ۾ مفعولي جاءِ تي به اڪثر whoever ايندو آهي، پر روايتي رسمي قاعدي ۾ whomever مفعولي صورت آهي.\n3. Whatever جي معنيٰ “anything that” يا “جيڪا به شيءِ” آهي: “Take whatever you need.”\n4. Whichever جي معنيٰ محدود چونڊ مان “جيڪو به” آهي: “Choose whichever you prefer.”\n5. Compound صورت ۾ antecedent جو مطلب پاڻ شامل هوندو آهي، تنهنڪري ان کان اڳ الڳ اسم جي ضرورت ناهي: whoever جو مطلب ئي “اهو ماڻهو جيڪو” آهي.\n6. پنهنجي clause ۾ لفظ جي ڪم موجب صورت چونڊيو: whoever فاعل ۽ whomever مفعول آهي.\n7. اهي لفظ پنهنجي grammatical ڪم موجب جملي جي شروعات يا وچ ۾ اچي سگهن ٿا.\n\nCompound relative pronouns کي انهن عام relative pronouns کان الڳ سمجهو جن جو antecedent اڳ ۾ لکيل هجي: “the person who came” ۾ antecedent موجود آهي، پر “whoever came” ۾ الڳ antecedent ناهي.",
        examples: [
          ["Whoever finishes first will receive a prize.", "جو بھی سب سے پہلے مکمل کرے گا اسے انعام ملے گا۔", "جيڪو به پهرين پورو ڪندو، تنهن کي انعام ملندو."],
          ["Whoever wants to join may register.", "جو بھی شامل ہونا چاہتا ہے وہ رجسٹر کر سکتا ہے۔", "جيڪو به شامل ٿيڻ چاهي، اهو نالو لکرائي سگهي ٿو."],
          ["I will support whoever needs help.", "میں ہر اس شخص کی مدد کروں گا جسے مدد چاہیے۔", "مان هر ان ماڻهوءَ جي مدد ڪندس جنهن کي مدد گهرجي."],
          ["Invite whomever you trust.", "جس پر بھی تمہیں اعتماد ہو اسے دعوت دو۔", "جنهن تي به توکي ڀروسو هجي، ان کي دعوت ڏي."],
          ["Give the message to whomever you meet.", "جس سے بھی تم ملو اسے پیغام دے دینا۔", "جنهن سان به ملين، ان کي پيغام ڏئي ڇڏجانءِ."],
          ["Whatever you choose will be acceptable.", "تم جو کچھ بھی منتخب کرو گے وہ قابلِ قبول ہوگا۔", "تون جيڪو به چونڊيندين، اهو قبول هوندو."],
          ["Take whatever you need from the shelf.", "شیلف سے جو کچھ بھی چاہیے لے لو۔", "شيلف مان جيڪا به شيءِ گهرجي، کڻي وٺ."],
          ["Whatever happens, remain calm.", "جو کچھ بھی ہو، پُرسکون رہو۔", "جيڪو به ٿئي، پرسڪون رهو."],
          ["Choose whichever seems easier.", "ان میں سے جو بھی آسان لگے اسے منتخب کرو۔", "انهن مان جيڪو به آسان لڳي، اهو چونڊ."],
          ["Whichever road you take, drive carefully.", "تم جو بھی راستہ اختیار کرو، احتیاط سے گاڑی چلانا۔", "تون جيڪو به رستو وٺين، احتياط سان گاڏي هلائجانءِ."]
        ]
      },
      {
        title: "Interrogative Pronouns",
        english: "An interrogative pronoun is a pronoun used to ask a question. It stands in place of the person, thing, owner or choice about which the speaker wants information. The main interrogative pronouns are who, whom, whose, which and what.\n\n1. Who — asks about a person and is normally the subject: “Who called you?”\n2. Whom — asks about a person as the object of a verb or preposition: “Whom did you meet?” In everyday speech, who is often used instead of whom. After a preposition in formal English, use whom: “To whom did you speak?”\n3. Whose — asks about ownership: “Whose is this pen?”\n4. Which — asks someone to identify one or more persons or things from a known or limited group: “Which is yours?”\n5. What — asks about things, information, actions or identity: “What happened?”\n\nAn interrogative pronoun replaces a noun; compare “Who is at the door?” with “Which book is yours?” In the second sentence, which is a pronoun because it stands alone. In “Which book is yours?”, some grammar books analyse which as a determiner because it comes before the noun book. Questions may be direct (“Who came?”) or embedded (“I wonder who came.”). In an embedded question, use statement word order: “I wonder what he wants,” not “I wonder what does he want.”\n\nUse the form according to its grammatical role: who is usually the subject, whom the object, whose the possessor, which selects from a limited set, and what asks more generally. Punctuation: direct questions end with a question mark.",
        urdu: "Interrogative pronoun ایسا ضمیر ہے جو سوال پوچھنے کے لیے استعمال ہوتا ہے۔ یہ اس شخص، چیز، مالک یا انتخاب کے اسم کی جگہ آتا ہے جس کے بارے میں بولنے والا معلومات چاہتا ہے۔ اہم interrogative pronouns یہ ہیں: who، whom، whose، which اور what۔\n\n1. Who — کسی شخص کے بارے میں پوچھتا ہے اور عموماً فاعل ہوتا ہے: “Who called you?” یعنی تمہیں کس نے فون کیا؟\n2. Whom — کسی شخص کے بارے میں مفعول کی حیثیت سے پوچھتا ہے: “Whom did you meet?” روزمرہ گفتگو میں whom کی جگہ اکثر who استعمال ہوتا ہے۔ رسمی انگریزی میں حرفِ جار کے بعد whom آتا ہے: “To whom did you speak?”\n3. Whose — ملکیت کے بارے میں پوچھتا ہے: “Whose is this pen?”\n4. Which — معلوم یا محدود گروہ میں سے کسی شخص یا چیز کی شناخت پوچھتا ہے: “Which is yours?”\n5. What — چیز، معلومات، عمل یا شناخت کے بارے میں عمومی سوال کرتا ہے: “What happened?”\n\nInterrogative pronoun اسم کی جگہ آتا ہے۔ “Who is at the door?” میں who ضمیر ہے۔ “Which book is yours?” میں which اسم book سے پہلے ہے، اس لیے اسے بعض قواعد میں determiner کہا جاتا ہے۔ سوال براہِ راست بھی ہو سکتا ہے (“Who came?”) اور کسی بڑے جملے کے اندر بھی (“I wonder who came.”)۔ Embedded question میں عام جملے والی ترتیب استعمال کریں: “I wonder what he wants”، نہ کہ “I wonder what does he want”۔\n\nلفظ کا انتخاب اس کے grammatical کام کے مطابق کریں: who فاعل، whom مفعول، whose ملکیت، which محدود انتخاب، اور what عمومی معلومات کے لیے ہے۔ براہِ راست سوال کے آخر میں question mark لگائیں۔",
        sindhi: "Interrogative pronoun اهڙو ضمير آهي جيڪو سوال پڇڻ لاءِ استعمال ٿيندو آهي. اهو ان ماڻهو، شيءِ، مالڪ يا چونڊ جي اسم جي جاءِ وٺندو آهي جنهن بابت ڳالهائيندڙ ڄاڻ چاهي ٿو. اهم interrogative pronouns هي آهن: who، whom، whose، which ۽ what.\n\n1. Who — ڪنهن ماڻهو بابت پڇي ٿو ۽ عام طور فاعل هوندو آهي: “Who called you?” يعني توکي ڪنهن فون ڪيو؟\n2. Whom — ڪنهن ماڻهو بابت مفعول طور پڇي ٿو: “Whom did you meet?” روزمره ڳالهائڻ ۾ whom جي جاءِ تي اڪثر who ايندو آهي. رسمي انگريزيءَ ۾ حرفِ جر کان پوءِ whom استعمال ٿيندو آهي: “To whom did you speak?”\n3. Whose — ملڪيت بابت پڇي ٿو: “Whose is this pen?”\n4. Which — معلوم يا محدود گروهه مان ڪنهن ماڻهو يا شيءِ جي سڃاڻپ پڇي ٿو: “Which is yours?”\n5. What — شيءِ، ڄاڻ، عمل يا سڃاڻپ بابت عام سوال پڇي ٿو: “What happened?”\n\nInterrogative pronoun اسم جي جاءِ وٺندو آهي. “Who is at the door?” ۾ who ضمير آهي. “Which book is yours?” ۾ which اسم book کان اڳ آهي، تنهنڪري ڪجهه گرامر ڪتابن ۾ ان کي determiner چيو ويندو آهي. سوال سڌو به ٿي سگهي ٿو (“Who came?”) ۽ ڪنهن وڏي جملي اندر به (“I wonder who came.”). Embedded question ۾ عام جملي واري ترتيب رکو: “I wonder what he wants”، نه ته “I wonder what does he want.”\n\nلفظ جو انتخاب ان جي grammatical ڪم موجب ڪريو: who فاعل، whom مفعول، whose ملڪيت، which محدود چونڊ، ۽ what عام ڄاڻ لاءِ آهي. سڌي سوال جي آخر ۾ سواليا نشان لڳايو.",
        examples: [
          ["Who is standing at the gate?", "دروازے پر کون کھڑا ہے؟", "دروازي وٽ ڪير بيٺو آهي؟"],
          ["Whom did you invite to the ceremony?", "تم نے تقریب میں کس کو مدعو کیا؟", "تو تقريب ۾ ڪنهن کي دعوت ڏني؟"],
          ["Whose is this notebook?", "یہ کاپی کس کی ہے؟", "هي ڪاپي ڪنهن جي آهي؟"],
          ["Which of these dresses do you prefer?", "ان کپڑوں میں سے تمہیں کون سا پسند ہے؟", "انهن ڪپڙن مان توکي ڪهڙو پسند آهي؟"],
          ["What happened after the meeting?", "اجلاس کے بعد کیا ہوا؟", "گڏجاڻيءَ کان پوءِ ڇا ٿيو؟"],
          ["Who taught you to speak English?", "تمہیں انگریزی بولنا کس نے سکھایا؟", "توکي انگريزي ڳالهائڻ ڪنهن سيکاريو؟"],
          ["Whom are you waiting for?", "تم کس کا انتظار کر رہے ہو؟", "تون ڪنهن جو انتظار ڪري رهيو آهين؟"],
          ["Which is your favourite subject?", "تمہارا پسندیدہ مضمون کون سا ہے؟", "تنهنجو پسنديده مضمون ڪهڙو آهي؟"],
          ["What caused the delay?", "تاخیر کا سبب کیا بنا؟", "دير جو سبب ڇا بڻيو؟"],
          ["Whose keys are lying on the table?", "میز پر کس کی چابیاں پڑی ہیں؟", "ميز تي ڪنهن جون چاٻيون پيل آهن؟"],
          ["Who will represent our school?", "ہمارے اسکول کی نمائندگی کون کرے گا؟", "اسان جي اسڪول جي نمائندگي ڪير ڪندو؟"],
          ["Which of the two roads is shorter?", "ان دو راستوں میں سے کون سا چھوٹا ہے؟", "انهن ٻن رستن مان ڪهڙو ننڍو آهي؟"],
          ["What do you want for breakfast?", "تم ناشتے میں کیا چاہتے ہو؟", "تون ناشتي ۾ ڇا چاهين ٿو؟"],
          ["Whom should I contact in an emergency?", "ہنگامی حالت میں مجھے کس سے رابطہ کرنا چاہیے؟", "هنگامي حالت ۾ مون کي ڪنهن سان رابطو ڪرڻ گهرجي؟"],
          ["Who has taken my dictionary?", "میری لغت کون لے گیا ہے؟", "منهنجي ڊڪشنري ڪير کڻي ويو آهي؟"],
          ["What is written on this page?", "اس صفحے پر کیا لکھا ہے؟", "هن صفحي تي ڇا لکيل آهي؟"],
          ["Which of these answers is correct?", "ان جوابوں میں سے کون سا درست ہے؟", "انهن جوابن مان ڪهڙو صحيح آهي؟"],
          ["Whose idea was it to start this project?", "یہ منصوبہ شروع کرنے کا خیال کس کا تھا؟", "هي منصوبو شروع ڪرڻ جو خيال ڪنهن جو هو؟"],
          ["Who do you think will win the match?", "تمہارے خیال میں میچ کون جیتے گا؟", "تنهنجي خيال ۾ ميچ ڪير کٽيندو؟"],
          ["What are the children looking at?", "بچے کس چیز کو دیکھ رہے ہیں؟", "ٻار ڇا ڏسي رهيا آهن؟"],
          ["Whom did the principal appoint as captain?", "پرنسپل نے کس کو کپتان مقرر کیا؟", "پرنسپال ڪنهن کي ڪپتان مقرر ڪيو؟"],
          ["Which of the books belongs to you?", "ان کتابوں میں سے کون سی تمہاری ہے؟", "انهن ڪتابن مان ڪهڙو تنهنجو آهي؟"],
          ["Who is responsible for this decision?", "اس فیصلے کا ذمہ دار کون ہے؟", "هن فيصلي جو ذميوار ڪير آهي؟"],
          ["What made you change your mind?", "کس چیز نے تمہاری رائے بدل دی؟", "ڪهڙي ڳالهه تنهنجي راءِ بدلائي؟"],
          ["Whose turn is it to read aloud?", "بلند آواز سے پڑھنے کی باری کس کی ہے؟", "وڏي آواز سان پڙهڻ جو وارو ڪنهن جو آهي؟"],
          ["Which of the players scored the first goal?", "کھلاڑیوں میں سے پہلا گول کس نے کیا؟", "رانديگرن مان پهريون گول ڪنهن ڪيو؟"],
          ["Who can solve this difficult problem?", "یہ مشکل مسئلہ کون حل کر سکتا ہے؟", "هي ڏکيو مسئلو ڪير حل ڪري سگهي ٿو؟"],
          ["What did the doctor advise you?", "ڈاکٹر نے تمہیں کیا مشورہ دیا؟", "ڊاڪٽر توکي ڪهڙو مشورو ڏنو؟"],
          ["Whom will you choose for the team?", "تم ٹیم کے لیے کس کو منتخب کرو گے؟", "تون ٽيم لاءِ ڪنهن کي چونڊيندين؟"],
          ["Which of these paintings was made by your sister?", "ان تصویروں میں سے کون سی تمہاری بہن نے بنائی؟", "انهن تصويرن مان ڪهڙي تنهنجي ڀيڻ ٺاهي؟"]
        ]
      },
      {
        title: "Exclamatory Pronouns",
        english: "In traditional school grammar, an exclamatory pronoun is a pronoun used in an exclamation to express strong feeling such as surprise, admiration, joy, anger or disbelief. What, who and which may be used in this way when they stand for a person or thing and help form an exclamatory expression.\n\n1. What may express surprise or strong feeling: “What! You have finished already!” Here what stands alone as an exclamatory pronoun.\n2. Who may express astonishment or rhetorical feeling: “Who would have believed it!”\n3. Which may point emphatically to a person or thing from a group: “Which of you could have expected this!”\n\nImportant distinction: in “What a beautiful day!” the word what comes before the noun day and is usually classified as an exclamatory determiner in modern grammar (or an exclamatory adjective in some traditional school grammars), not a pronoun. It is a pronoun when it stands independently, as in “What! Is that true?” Exclamations may end with an exclamation mark (!).",
        urdu: "روایتی اسکول گرامر میں exclamatory pronoun ایسا ضمیر ہے جو تعجب، تعریف، خوشی، غصے یا بے یقینی جیسے شدید جذبات ظاہر کرنے کے لیے فجائیہ جملے میں استعمال ہوتا ہے۔ What، who اور which اس وقت اس طرح استعمال ہو سکتے ہیں جب یہ کسی شخص یا چیز کی جگہ آئیں اور فجائیہ اظہار بنائیں۔\n\n1. What تعجب یا شدید احساس ظاہر کر سکتا ہے: “What! You have finished already!” یہاں what اکیلا استعمال ہوا ہے، اس لیے اسے exclamatory pronoun کہا جا سکتا ہے۔\n2. Who حیرت یا زور دار تاثر ظاہر کر سکتا ہے: “Who would have believed it!”\n3. Which کسی گروہ میں سے کسی شخص یا چیز کی طرف زور دے کر اشارہ کر سکتا ہے: “Which of you could have expected this!”\n\nاہم فرق: “What a beautiful day!” میں what اسم day سے پہلے آیا ہے، اس لیے جدید گرامر میں اسے عموماً exclamatory determiner کہا جاتا ہے (روایتی اسکول گرامر میں exclamatory adjective بھی کہا جاتا ہے)، pronoun نہیں۔ جب what اکیلا آئے، جیسے “What! Is that true?” تو یہ pronoun ہوتا ہے۔ فجائیہ جملے کے آخر میں عموماً exclamation mark (!) لگتا ہے۔",
        sindhi: "روايتي اسڪول گرامر ۾ exclamatory pronoun اهڙو ضمير آهي جيڪو حيرت، ساراهه، خوشي، ڪاوڙ يا بي يقيني جهڙا تيز احساس ظاهر ڪرڻ لاءِ فجائيه جملي ۾ استعمال ٿيندو آهي. What، who ۽ which ان وقت اهڙي طرح استعمال ٿي سگهن ٿا جڏهن اهي ڪنهن ماڻهو يا شيءِ جي جاءِ وٺن ۽ فجائيه اظهار ٺاهين.\n\n1. What حيرت يا شديد احساس ڏيکاري سگهي ٿو: “What! You have finished already!” هتي what اڪيلو آيو آهي، تنهنڪري ان کي exclamatory pronoun چئي سگهجي ٿو.\n2. Who حيرت يا زورائتو تاثر ڏيکاري سگهي ٿو: “Who would have believed it!”\n3. Which ڪنهن گروهه مان ڪنهن ماڻهو يا شيءِ ڏانهن زور سان اشارو ڪري سگهي ٿو: “Which of you could have expected this!”\n\nاهم فرق: “What a beautiful day!” ۾ what اسم day کان اڳ آهي، تنهنڪري جديد گرامر ۾ ان کي عام طور exclamatory determiner چيو ويندو آهي (روايتي اسڪول گرامر ۾ exclamatory adjective به چيو ويندو آهي)، pronoun نه. جڏهن what اڪيلو اچي، جيئن “What! Is that true?” ته اهو pronoun هوندو آهي. فجائيه جملي جي آخر ۾ عام طور عجب جو نشان (!) لڳندو آهي.",
        examples: [
          ["Who would have imagined such a wonderful result!", "کس نے سوچا تھا کہ ایسا شاندار نتیجہ نکلے گا!", "ڪنهن سوچيو هو ته اهڙو شاندار نتيجو نڪرندو!"],
          ["What has happened to our beautiful garden!", "ہمارے خوبصورت باغ کو یہ کیا ہو گیا!", "اسان جي سهڻي باغ کي هي ڇا ٿي ويو!"],
          ["Who could forget such kindness!", "ایسی مہربانی کون بھول سکتا ہے!", "اهڙي مهرباني ڪير وساري سگهي ٿو!"],
          ["What! You have finished the whole book already!", "کیا! تم نے پوری کتاب ابھی سے ختم کر لی!", "ڇا! تو سڄو ڪتاب ايترو جلدي پورو ڪري ڇڏيو!"],
          ["Which of you could remain silent at such news!", "تم میں سے کون ایسی خبر سن کر خاموش رہ سکتا ہے!", "توهان مان اهڙي خبر ٻڌي ڪير خاموش رهي سگهي ٿو!"],
          ["Who would believe that the little child painted this!", "کون یقین کرے گا کہ یہ تصویر اس چھوٹے بچے نے بنائی ہے!", "ڪير يقين ڪندو ته هي تصوير ننڍڙي ٻار ٺاهي آهي!"],
          ["What! They have won the championship!", "کیا! انہوں نے چیمپئن شپ جیت لی!", "ڇا! انهن چيمپئن شپ کٽي ورتي!"],
          ["Who could have expected such a warm welcome!", "کسے ایسی پُرتپاک پذیرائی کی توقع تھی!", "ڪنهن کي اهڙي گرمجوش آجيان جي اميد هئي!"],
          ["Which of these would have guessed the secret!", "انهن مان ڪنهن کي راز جي خبر پئجي سگهي ها!", "انهن مان ڪير راز جو اندازو لڳائي ها!"],
          ["What! You remembered every detail!", "کیا! تمہیں ہر بات یاد رہی!", "ڇا! توکي هر ڳالهه ياد رهي!"]
        ]
      }
    ]
  },
  "verbs": {
    overview: "Verbs express actions, events and states. A verb phrase may include a main verb and helping verbs that show tense, aspect, voice or mood.",
    watchFor: "Some verbs describe states rather than visible actions, such as know, belong, seem and believe.",
    examples: ["They have finished the work.", "The soup tastes delicious."],
    specialSectionsTitle: "TRANSITIVE & INTRANSITIVE VERBS — فعل متعدي ۽ لازم",
    specialSections: [
      {
        title: "Transitive and Intransitive Verbs — 30 Detailed Examples",
        english: "A transitive verb is an action verb that takes a direct object. The direct object receives the action and answers “whom?” or “what?” after the verb: “Mina opened the door.” Opened what? The door. Therefore, opened is transitive.\n\nAn intransitive verb does not take a direct object. The action or state is complete without a direct object: “The child laughed.” Laughed what? There is no direct object. An intransitive verb may still be followed by an adverb or a prepositional phrase, as in “The child laughed loudly” or “The guests arrived at noon.” These phrases do not become direct objects.\n\nTo identify the verb type, first find the verb, then ask “what?” or “whom?” If the sentence has a direct object answering that question, the verb is transitive in that use. If it has no direct object, it is intransitive in that use. Some verbs can be transitive in one sentence and intransitive in another; the classification depends on how the verb is used, not only on the verb itself. A linking verb such as seem or become is generally neither transitive nor intransitive in this object-based classification.",
        urdu: "Transitive verb (فعل متعدی) وہ فعل ہے جسے اپنا مطلب مکمل کرنے کے لیے direct object (مفعولِ مستقیم) درکار ہوتا ہے۔ مفعول فعل کا اثر قبول کرتا ہے اور فعل کے بعد “کس کو؟” یا “کیا؟” پوچھنے سے ملتا ہے۔ مثال: “Mina opened the door.” یعنی مینا نے دروازہ کھولا۔ کیا کھولا؟ دروازہ۔ اس لیے opened متعدی فعل ہے۔\n\nIntransitive verb (فعل لازم) ایسا فعل ہے جس کے ساتھ direct object نہیں ہوتا۔ فعل کا مطلب مفعول کے بغیر مکمل ہو جاتا ہے: “The child laughed.” یعنی بچہ ہنسا۔ کیا ہنسا؟ یہاں کوئی direct object نہیں۔ لازم فعل کے بعد adverb یا prepositional phrase آ سکتا ہے، جیسے “The child laughed loudly” یا “The guests arrived at noon”؛ یہ فقرے direct object نہیں ہیں۔\n\nفعل کی قسم معلوم کرنے کے لیے پہلے فعل تلاش کریں، پھر اس کے بعد “کیا؟” یا “کس کو؟” پوچھیں۔ اگر جواب direct object ہو تو اس استعمال میں فعل متعدی ہے۔ اگر direct object نہ ہو تو اس استعمال میں فعل لازم ہے۔ بعض افعال ایک جملے میں متعدی اور دوسرے میں لازم ہو سکتے ہیں؛ فیصلہ جملے میں ان کے استعمال سے ہوتا ہے، صرف لفظ سے نہیں۔ seem یا become جیسے linking verbs عموماً اس object-based تقسیم میں نہ متعدی ہوتے ہیں نہ لازم۔",
        sindhi: "Transitive verb (فعل متعدي) اهو فعل آهي جنهن جي معنيٰ مڪمل ٿيڻ لاءِ direct object (سڌو مفعول) گهربل هوندو آهي. مفعول فعل جو اثر قبول ڪندو آهي ۽ فعل کان پوءِ “ڪنهن کي؟” يا “ڇا؟” پڇڻ سان ملي ٿو. مثال: “Mina opened the door.” يعني مينا دروازو کوليو. ڇا کوليو؟ دروازو. تنهنڪري opened متعدي فعل آهي.\n\nIntransitive verb (فعل لازم) اهڙو فعل آهي جنهن سان direct object نه هوندو آهي. فعل جي معنيٰ مفعول کان سواءِ مڪمل هوندي آهي: “The child laughed.” يعني ٻار کليو. ڇا کليو؟ هتي ڪو direct object ڪونهي. لازم فعل کان پوءِ adverb يا prepositional phrase اچي سگهي ٿو، جيئن “The child laughed loudly” يا “The guests arrived at noon”؛ اهي فقره direct object ناهن.\n\nفعل جو قسم سڃاڻڻ لاءِ پهرين فعل ڳوليو، پوءِ ان کان پوءِ “ڇا؟” يا “ڪنهن کي؟” پڇو. جيڪڏهن جواب direct object هجي ته ان استعمال ۾ فعل متعدي آهي. جيڪڏهن direct object نه هجي ته ان استعمال ۾ فعل لازم آهي. ڪي فعل هڪ جملي ۾ متعدي ۽ ٻئي ۾ لازم ٿي سگهن ٿا؛ فيصلو جملي ۾ انهن جي استعمال مان ٿيندو، رڳو لفظ مان نه. seem يا become جهڙا linking verbs عام طور هن object-based ورهاست ۾ نه متعدي هوندا آهن نه لازم.",
        examples: [
          ["The boy kicked the ball. (Transitive: kicked what? the ball.)", "لڑکے نے گیند کو لات ماری۔", "ڇوڪري بال کي لت هنئي."],
          ["The baby slept peacefully. (Intransitive: no object.)", "بچہ سکون سے سویا۔", "ٻار سڪون سان ستو."],
          ["Sara opened the window. (Transitive: opened what? the window.)", "سارہ نے کھڑکی کھولی۔", "ساره دري کولي."],
          ["The sun rises in the east. (Intransitive: no object.)", "سورج مشرق سے طلوع ہوتا ہے۔", "سج اوڀر کان اڀري ٿو."],
          ["The chef prepared dinner. (Transitive: prepared what? dinner.)", "باورچی نے رات کا کھانا تیار کیا۔", "باورچي رات جي ماني تيار ڪئي."],
          ["The birds are singing. (Intransitive: no object.)", "پرندے گا رہے ہیں۔", "پکي ڳائي رهيا آهن."],
          ["Ali bought a new bicycle. (Transitive: bought what? a bicycle.)", "علی نے نئی سائیکل خریدی۔", "علي نئين سائيڪل خريد ڪئي."],
          ["The old man laughed loudly. (Intransitive: no object.)", "بوڑھا آدمی زور سے ہنسا۔", "پوڙهو ماڻهو وڏي آواز سان کليو."],
          ["The teacher explained the lesson. (Transitive: explained what? the lesson.)", "استاد نے سبق سمجھایا۔", "استاد سبق سمجهايو."],
          ["The river flows through the valley. (Intransitive: no direct object.)", "دریا وادی میں سے گزرتا ہے۔", "ندي ماٿريءَ مان وهي ٿي."],
          ["They repaired the broken chair. (Transitive: repaired what? the chair.)", "انہوں نے ٹوٹی ہوئی کرسی ٹھیک کی۔", "انهن ٽٽل ڪرسيءَ جي مرمت ڪئي."],
          ["The audience applauded enthusiastically. (Intransitive: no object.)", "تماشائیوں نے جوش سے تالیاں بجائیں۔", "تماشائين جوش سان تاڙيون وڄايون."],
          ["My sister writes short stories. (Transitive: writes what? stories.)", "میری بہن مختصر کہانیاں لکھتی ہے۔", "منهنجي ڀيڻ مختصر ڪهاڻيون لکي ٿي."],
          ["The train arrived late. (Intransitive: no object.)", "ٹرین دیر سے پہنچی۔", "ريل گاڏي دير سان پهتي."],
          ["The gardener watered the plants. (Transitive: watered what? the plants.)", "مالی نے پودوں کو پانی دیا۔", "مالهي ٻوٽن کي پاڻي ڏنو."],
          ["The children played outside. (Intransitive: no direct object.)", "بچے باہر کھیلے۔", "ٻار ٻاهر کيڏيا."],
          ["He solved the difficult puzzle. (Transitive: solved what? the puzzle.)", "اس نے مشکل پہیلی حل کی۔", "هن ڏکيو ڳجهارت حل ڪيو."],
          ["The horse galloped across the field. (Intransitive: no object.)", "گھوڑا میدان میں تیزی سے دوڑا۔", "گهوڙو ميدان ۾ تيزيءَ سان ڊوڙيو."],
          ["The company launched a new product. (Transitive: launched what? a product.)", "کمپنی نے نئی مصنوعات متعارف کرائی۔", "ڪمپني نئين شيءِ مارڪيٽ ۾ آندي."],
          ["The guests laughed at the joke. (Intransitive: no direct object; at the joke is a prepositional phrase.)", "مہمان لطیفے پر ہنسے۔", "مهمان مذاق تي کليا."],
          ["The police caught the thief. (Transitive: caught whom? the thief.)", "پولیس نے چور کو پکڑ لیا۔", "پوليس چور کي پڪڙي ورتو."],
          ["The flowers bloomed in spring. (Intransitive: no object.)", "بہار میں پھول کھلے۔", "بهار ۾ گل ٽڙيا."],
          ["She carried the heavy suitcase. (Transitive: carried what? the suitcase.)", "اس نے بھاری سوٹ کیس اٹھایا۔", "هن ڳرو سوٽ ڪيس کنيو."],
          ["The little boy cried all night. (Intransitive: no object.)", "چھوٹا لڑکا ساری رات روتا رہا۔", "ننڍڙو ڇوڪرو سڄي رات رنو."],
          ["We discussed the new plan. (Transitive: discussed what? the plan.)", "ہم نے نئے منصوبے پر گفتگو کی۔", "اسان نئين منصوبي تي بحث ڪيو."],
          ["The leaves fell from the tree. (Intransitive: no object.)", "پتے درخت سے گر گئے۔", "پن وڻ تان ڪريا."],
          ["The mechanic fixed my car. (Transitive: fixed what? my car.)", "مکینک نے میری گاڑی ٹھیک کی۔", "مڪينڪ منهنجي گاڏي ٺيڪ ڪئي."],
          ["The guests stayed overnight. (Intransitive: no direct object.)", "مہمان رات بھر ٹھہرے۔", "مهمان سڄي رات ترسيا."],
          ["The nurse checked the patient’s temperature. (Transitive: checked what? the temperature.)", "نرس نے مریض کا درجۂ حرارت چیک کیا۔", "نرس مريض جو گرمي پد چيڪ ڪيو."],
          ["The little stream disappeared. (Intransitive: no object.)", "چھوٹی ندی غائب ہو گئی۔", "ننڍي نهر گم ٿي وئي."]
        ]
      },
      {
        title: "Use of Verbs Transitively — 10 Examples",
        english: "A verb is used transitively when it acts upon a direct object. The object may be a noun, pronoun or noun phrase. To find it, ask “what?” or “whom?” after the verb. For example, in “She repaired the bicycle,” repaired what? The bicycle. The phrase “the bicycle” is the direct object.\n\nA transitive verb can also take an indirect object as well as a direct object: “He gave his sister a gift.” Here sister is the indirect object and gift is the direct object. A direct object is not the same as a prepositional phrase: in “They listened to music,” music is the object of the preposition to, not a direct object of listened; listen is normally intransitive in this construction.",
        urdu: "فعل اس وقت متعدی استعمال ہوتا ہے جب اس کا اثر کسی direct object پر پڑتا ہے۔ مفعول اسم، ضمیر یا اسم کا فقرہ ہو سکتا ہے۔ اسے تلاش کرنے کے لیے فعل کے بعد “کیا؟” یا “کس کو؟” پوچھیں۔ مثال: “She repaired the bicycle.” یعنی اس نے سائیکل ٹھیک کی۔ کیا ٹھیک کی؟ سائیکل۔ اس لیے “the bicycle” direct object ہے۔\n\nمتعدی فعل کے ساتھ indirect object بھی آ سکتا ہے: “He gave his sister a gift.” یہاں sister بالواسطہ مفعول اور gift direct object ہے۔ Direct object اور حرفِ جار کے بعد آنے والا مفعول ایک چیز نہیں۔ “They listened to music” میں music حرفِ جار to کا مفعول ہے، listened کا direct object نہیں؛ اس ساخت میں listen عموماً لازم ہے۔",
        sindhi: "فعل ان وقت متعدي استعمال ٿيندو آهي جڏهن ان جو اثر ڪنهن direct object تي پوي. مفعول اسم، ضمير يا اسم جو فقره ٿي سگهي ٿو. ان کي ڳولڻ لاءِ فعل کان پوءِ “ڇا؟” يا “ڪنهن کي؟” پڇو. مثال: “She repaired the bicycle.” يعني هن سائيڪل ٺيڪ ڪئي. ڇا ٺيڪ ڪيائين؟ سائيڪل. تنهنڪري “the bicycle” direct object آهي.\n\nمتعدي فعل سان indirect object به اچي سگهي ٿو: “He gave his sister a gift.” هتي sister اڻ سڌو مفعول ۽ gift direct object آهي. Direct object ۽ حرفِ جر کان پوءِ ايندڙ مفعول هڪجهڙا ناهن. “They listened to music” ۾ music حرفِ جر to جو مفعول آهي، listened جو direct object نه؛ هن جوڙجڪ ۾ listen عام طور لازم آهي.",
        examples: [
          ["She reads the newspaper every morning.", "وہ ہر صبح اخبار پڑھتی ہے۔", "هوءَ هر صبح اخبار پڙهي ٿي."],
          ["The carpenter built a wooden table.", "بڑھئی نے لکڑی کی میز بنائی۔", "واڍي ڪاٺ جي ميز ٺاهي."],
          ["Please close the door quietly.", "براہِ کرم دروازہ آہستہ سے بند کریں۔", "مهرباني ڪري دروازو آهستي بند ڪريو."],
          ["The student answered the question correctly.", "طالب علم نے سوال کا درست جواب دیا۔", "شاگرد سوال جو صحيح جواب ڏنو."],
          ["They planted five trees near the school.", "انہوں نے اسکول کے قریب پانچ درخت لگائے۔", "انهن اسڪول ڀرسان پنج وڻ پوکيا."],
          ["My mother baked a chocolate cake.", "میری والدہ نے چاکلیٹ کا کیک بنایا۔", "منهنجي امڙ چاڪليٽ جو ڪيڪ ٺاهيو."],
          ["The artist painted a beautiful landscape.", "فنکار نے خوبصورت منظر کی تصویر بنائی۔", "فنڪار سهڻو منظر رنگيو."],
          ["We watched an educational documentary.", "ہم نے تعلیمی دستاویزی فلم دیکھی۔", "اسان تعليمي دستاويزي فلم ڏٺي."],
          ["The dog chased the ball across the garden.", "کتے نے باغ میں گیند کا پیچھا کیا۔", "ڪتي باغ ۾ بال جو پيڇو ڪيو."],
          ["He borrowed my grammar book.", "اس نے میری قواعد کی کتاب ادھار لی۔", "هن منهنجو گرامر جو ڪتاب اڌارو ورتو."]
        ]
      },
      {
        title: "Use of Verbs Intransitively — 10 Examples",
        english: "A verb is used intransitively when it does not take a direct object. The sentence may be complete with the verb alone, or it may include an adverb or a prepositional phrase that adds information about time, place, manner or direction. For example, “The baby smiled” is complete; “The baby smiled happily” adds manner, but happily is not an object.\n\nDo not mistake every noun after a verb for a direct object. In “The guests arrived at the hotel,” hotel is the object of the preposition at, not a direct object of arrived. Many verbs can be used both transitively and intransitively depending on the sentence. Always examine the particular use.",
        urdu: "فعل اس وقت لازم استعمال ہوتا ہے جب اس کے ساتھ direct object نہ ہو۔ فعل اکیلا بھی جملے کا مطلب مکمل کر سکتا ہے، یا اس کے ساتھ adverb یا prepositional phrase آ سکتا ہے جو وقت، جگہ، طریقہ یا سمت بتائے۔ مثال: “The baby smiled” یعنی بچہ مسکرایا۔ “The baby smiled happily” میں happily طریقہ بتاتا ہے، مفعول نہیں۔\n\nفعل کے بعد آنے والے ہر اسم کو direct object نہ سمجھیں۔ “The guests arrived at the hotel” میں hotel حرفِ جار at کا مفعول ہے، arrived کا direct object نہیں۔ بہت سے افعال جملے کے مطابق متعدی اور لازم دونوں طرح استعمال ہو سکتے ہیں۔ ہمیشہ جملے میں فعل کا مخصوص استعمال دیکھیں۔",
        sindhi: "فعل ان وقت لازم استعمال ٿيندو آهي جڏهن ان سان direct object نه هجي. فعل اڪيلو به جملي جي معنيٰ مڪمل ڪري سگهي ٿو، يا ان سان adverb يا prepositional phrase اچي سگهي ٿو جيڪو وقت، جاءِ، طريقي يا رخ بابت وڌيڪ ڄاڻ ڏئي. مثال: “The baby smiled” يعني ٻار مرڪيو. “The baby smiled happily” ۾ happily طريقو ٻڌائي ٿو، مفعول نه آهي.\n\nفعل کان پوءِ ايندڙ هر اسم کي direct object نه سمجهو. “The guests arrived at the hotel” ۾ hotel حرفِ جر at جو مفعول آهي، arrived جو direct object نه. ڪيترائي فعل جملي جي حساب سان متعدي ۽ لازم ٻنهي قسمن ۾ استعمال ٿي سگهن ٿا. هميشه جملي ۾ فعل جو خاص استعمال ڏسو.",
        examples: [
          ["The little baby smiled.", "ننھا بچہ مسکرایا۔", "ننڍڙو ٻار مرڪيو."],
          ["The old clock stopped suddenly.", "پرانی گھڑی اچانک رک گئی۔", "پراڻي گهڙي اوچتو بند ٿي وئي."],
          ["The audience cheered loudly.", "سامعین نے زور سے خوشی کا اظہار کیا۔", "حاضرين وڏي آواز سان خوشيءَ جو اظهار ڪيو."],
          ["My grandfather walks every evening.", "میرے دادا ہر شام چہل قدمی کرتے ہیں۔", "منهنجو ڏاڏو هر شام پنڌ ڪندو آهي."],
          ["The sun sets behind the hills.", "سورج پہاڑیوں کے پیچھے غروب ہوتا ہے۔", "سج ٽڪرين جي پٺيان لهي ٿو."],
          ["The students waited patiently.", "طلبہ نے صبر سے انتظار کیا۔", "شاگردن صبر سان انتظار ڪيو."],
          ["The baby laughed happily.", "بچہ خوشی سے ہنسا۔", "ٻار خوشيءَ سان کليو."],
          ["The leaves trembled in the wind.", "پتے ہوا میں کانپ رہے تھے۔", "پن هوا ۾ ڏڪي رهيا هئا."],
          ["The guests departed after lunch.", "مہمان دوپہر کے کھانے کے بعد روانہ ہوئے۔", "مهمان منجهند جي مانيءَ کان پوءِ روانا ٿيا."],
          ["The little bird flew away.", "چھوٹا پرندہ اڑ گیا۔", "ننڍڙو پکي اڏامي ويو."]
        ]
      },
      {
        title: "Intransitive Verbs Used Transitively: Cognate Object and Adverbial Object",
        english: "An intransitive verb normally does not take a direct object. However, some intransitive verbs can be followed by a noun phrase that looks like an object. Traditional grammar describes two important patterns: the cognate object (also called cognate accusative) and the adverbial object (also called adverbial accusative). These nouns do not always behave like ordinary objects that receive the action; their meaning and grammatical function are different.\n\nA. Cognate object / cognate accusative\nA cognate object is a noun related in meaning, and often historically or etymologically, to the intransitive verb. It repeats or develops the idea of the verb: “dream a dream,” “smile a sweet smile,” “die a peaceful death.” The noun is commonly modified by an adjective or phrase. The verb remains intransitive in its basic sense, but the construction includes a cognate noun that gives the action more detail or emphasis. In modern grammatical analysis, some such constructions may be treated as transitive uses; traditional school grammar often explains them as an intransitive verb followed by a cognate object.\n\nHow to recognise it: the noun is closely related to the verb in meaning (dream/dream, smile/smile, die/death, laugh/laugh); it often repeats the action idea rather than naming a separate thing affected by it. Compare “She smiled” with “She smiled a welcoming smile.”\n\nB. Adverbial object / adverbial accusative\nAn adverbial object is a noun phrase in the objective or accusative form that tells us the extent, duration, distance, measure or time of the action or state. Examples: “walk five miles,” “wait two hours,” “sleep eight hours,” “live ninety years.” These expressions answer questions such as “how far?”, “how long?” or “how much?” They function adverbially, not as ordinary direct objects receiving the action.\n\nHow to recognise it: ask “how long?”, “how far?” or “to what extent?” The answer is a measure of time, distance or extent. Compare “He walked the road” (the road is a direct object in a transitive construction) with “He walked five miles” (five miles measures the distance walked). A noun phrase after a verb is not automatically a direct object.\n\nRemember: classification can vary between traditional and modern grammar frameworks. For school grammar, learn the terms cognate object/cognate accusative and adverbial object/adverbial accusative, and identify what each noun phrase expresses. The examples below are translated into Urdu and Sindhi.",
        urdu: "فعل لازم عام طور پر direct object نہیں لیتا۔ تاہم بعض لازم افعال کے بعد ایسا اسم یا اسم کا فقرہ آ سکتا ہے جو بظاہر مفعول معلوم ہوتا ہے۔ روایتی قواعد میں دو اہم صورتیں بیان کی جاتی ہیں: Cognate Object (جسے Cognate Accusative بھی کہتے ہیں) اور Adverbial Object (جسے Adverbial Accusative بھی کہتے ہیں)۔ ان اسموں کا کام ہمیشہ عام مفعول جیسا نہیں ہوتا جو فعل کا اثر قبول کرے؛ ان کا مفہوم اور نحوی کردار مختلف ہوتا ہے۔\n\nA. Cognate Object / Cognate Accusative\nCognate object ایسا اسم ہے جو معنی کے لحاظ سے لازم فعل سے قریبی تعلق رکھتا ہے اور اکثر اسی فعل کے خیال کو دہراتا یا مزید واضح کرتا ہے: “dream a dream”، “smile a sweet smile”، “die a peaceful death”۔ اس اسم کے ساتھ عموماً صفت یا وضاحتی فقرہ بھی آتا ہے۔ فعل اپنے بنیادی معنی میں لازم رہتا ہے، لیکن cognate noun عمل کی مزید وضاحت یا تاکید کرتا ہے۔ جدید قواعد میں بعض ایسی ساختوں کو متعدی استعمال بھی سمجھا جا سکتا ہے؛ روایتی اسکول گرامر انہیں لازم فعل کے بعد cognate object قرار دیتی ہے۔\n\nپہچان: اسم کا فعل سے معنی کا گہرا تعلق ہوتا ہے، جیسے dream/dream، smile/smile، die/death، laugh/laugh۔ یہ کسی الگ چیز کا نام لینے کے بجائے فعل کے عمل ہی کو دہراتا یا نمایاں کرتا ہے۔ مثال: “She smiled” اور “She smiled a welcoming smile.”\n\nB. Adverbial Object / Adverbial Accusative\nAdverbial object ایسا اسم یا اسم کا فقرہ ہے جو وقت، مدت، فاصلے، مقدار یا عمل کی حد بتاتا ہے: “walk five miles”، “wait two hours”، “sleep eight hours”، “live ninety years”۔ یہ “کتنی دیر؟”، “کتنا فاصلہ؟” یا “کس حد تک؟” جیسے سوالوں کا جواب دیتا ہے۔ یہ عام direct object نہیں بلکہ adverbial کام کرتا ہے۔\n\nپہچان: “کتنی دیر؟”، “کتنا فاصلہ؟” یا “کس حد تک؟” پوچھیں۔ جواب وقت، فاصلے یا مقدار کی پیمائش ہو گا۔ فعل کے بعد آنے والا ہر اسم لازماً direct object نہیں ہوتا۔\n\nیاد رکھیں: روایتی اور جدید قواعد میں ان ساختوں کی درجہ بندی کچھ مختلف ہو سکتی ہے۔ اسکول گرامر کے لیے Cognate Object/Cognate Accusative اور Adverbial Object/Adverbial Accusative کی اصطلاحات اور ان کے معنوی فرق کو یاد رکھیں۔",
        sindhi: "فعل لازم عام طور تي direct object نه وٺندو آهي. پر ڪي لازم فعلن کان پوءِ اهڙو اسم يا اسمي فقره اچي سگهي ٿو جيڪو ڏسڻ ۾ مفعول لڳي. روايتي گرامر ۾ ٻه اهم صورتون آهن: Cognate Object (جنهن کي Cognate Accusative به چوندا آهن) ۽ Adverbial Object (جنهن کي Adverbial Accusative به چوندا آهن). انهن اسمن جو ڪم هميشه عام مفعول جهڙو نه هوندو آهي جيڪو فعل جو اثر قبول ڪري؛ انهن جي معنيٰ ۽ نحوي ڪم الڳ هوندو آهي.\n\nA. Cognate Object / Cognate Accusative\nCognate object اهڙو اسم آهي جيڪو معنيٰ ۾ لازم فعل سان ويجهو تعلق رکي ٿو ۽ اڪثر فعل جي خيال کي ورجائي يا وڌيڪ واضح ڪري ٿو: “dream a dream”، “smile a sweet smile”، “die a peaceful death”۔ هن اسم سان عام طور صفت يا وضاحتي فقره به اچي سگهي ٿو. فعل پنهنجي بنيادي معنيٰ ۾ لازم رهي ٿو، پر cognate noun عمل بابت وڌيڪ وضاحت يا زور ڏئي ٿو. جديد گرامر ۾ ڪي اهڙيون بناوتون متعدي استعمال به سمجهيون وڃن ٿيون؛ روايتي اسڪول گرامر انهن کي لازم فعل کان پوءِ cognate object سڏي ٿي.\n\nسڃاڻپ: اسم جو فعل سان معنيٰ جو ويجهو لاڳاپو هوندو آهي، جيئن dream/dream، smile/smile، die/death، laugh/laugh۔ اهو ڪنهن الڳ متاثر ٿيندڙ شيءِ بدران فعل جي عمل کي ورجائي يا نمايان ڪري ٿو. مثال: “She smiled” ۽ “She smiled a welcoming smile.”\n\nB. Adverbial Object / Adverbial Accusative\nAdverbial object اهڙو اسم يا اسمي فقره آهي جيڪو وقت، مدت، فاصلو، ماپ يا عمل جي حد ٻڌائي ٿو: “walk five miles”، “wait two hours”، “sleep eight hours”، “live ninety years”۔ اهو “ڪيترو وقت؟”، “ڪيترو فاصلو؟” يا “ڪهڙي حد تائين؟” جهڙن سوالن جو جواب ڏئي ٿو. اهو عام direct object نه پر adverbial ڪم ڪري ٿو.\n\nسڃاڻپ: “ڪيترو وقت؟”، “ڪيترو فاصلو؟” يا “ڪهڙي حد تائين؟” پڇو. جواب وقت، فاصلي يا مقدار جي ماپ هوندو. فعل کان پوءِ ايندڙ هر اسم لازمي طور direct object نه هوندو.\n\nياد رکو: روايتي ۽ جديد گرامر ۾ انهن بناوتن جي درجي بندي ڪجهه مختلف ٿي سگهي ٿي. اسڪول گرامر لاءِ Cognate Object/Cognate Accusative ۽ Adverbial Object/Adverbial Accusative جا اصطلاح ۽ انهن جي معنوي فرق کي ياد رکو.",
        examples: [
          ["She dreamed a beautiful dream last night.", "اس نے گزشتہ رات ایک خوبصورت خواب دیکھا۔", "هن گذريل رات هڪ سهڻو خواب ڏٺو."],
          ["The old man lived a peaceful life.", "بوڑھے آدمی نے پُرسکون زندگی گزاری۔", "پوڙهي ماڻهوءَ سڪون واري زندگي گذاري."],
          ["The child smiled a sweet smile.", "بچے نے پیاری سی مسکراہٹ دی۔", "ٻار مٺڙي مرڪ مرڪي."],
          ["He laughed a hearty laugh.", "وہ دل کھول کر ہنسا۔", "هو دل کولي کليو."],
          ["The soldiers fought a brave fight.", "سپاہیوں نے بہادری سے جنگ لڑی۔", "سپاهين بهادريءَ سان جنگ ڪئي."],
          ["She danced a graceful dance.", "اس نے خوبصورت رقص کیا۔", "هن سهڻو رقص ڪيو."],
          ["The singer sang a joyful song.", "گلوکار نے خوشی بھرا گیت گایا۔", "ڳائڻي خوشيءَ ڀريو گيت ڳايو."],
          ["He sighed a deep sigh of relief.", "اس نے اطمینان کا گہرا سانس لیا۔", "هن اطمينان جو ڊگهو ساهه کنيو."],
          ["The old king died a peaceful death.", "بوڑھا بادشاہ پُرسکون موت مرا۔", "پوڙهو بادشاهه سڪون واري موت مئو."],
          ["The athlete ran a remarkable race.", "کھلاڑی نے شاندار دوڑ لگائی۔", "رانديگر شاندار ڊوڙ ڪئي."],
          ["The little girl cried bitter tears.", "چھوٹی لڑکی نے غم سے آنسو بہائے۔", "ننڍڙي ڇوڪري ڏک وچان ڳوڙها ڳاڙيا."],
          ["He nodded an approving nod.", "اس نے منظوری میں سر ہلایا۔", "هن منظوريءَ ۾ ڪنڌ لوڏيو."],
          ["She wept silent tears.", "وہ خاموشی سے روتی رہی۔", "هوءَ خاموشيءَ سان روئندي رهي."],
          ["The dancer performed a traditional dance.", "رقاصہ نے روایتی رقص پیش کیا۔", "ناچڻي روايتي رقص پيش ڪيو."],
          ["The poet dreamed a strange dream.", "شاعر نے ایک عجیب خواب دیکھا۔", "شاعر هڪ عجيب خواب ڏٺو."],
          ["The baby slept the sleep of innocence.", "بچہ معصومانہ نیند سویا۔", "ٻار معصوميت واري ننڊ ستو."],
          ["He smiled a welcoming smile.", "اس نے استقبال کے لیے مسکراہٹ دی۔", "هن آجيان واري مرڪ مرڪي."],
          ["The team fought a difficult battle.", "ٹیم نے مشکل مقابلہ کیا۔", "ٽيم ڏکيو مقابلو ڪيو."],
          ["She sang a song of hope.", "اس نے امید کا گیت گایا۔", "هن اميد جو گيت ڳايو."],
          ["The old sailor dreamed a dream of the sea.", "بوڑھے ملاح نے سمندر کا خواب دیکھا۔", "پوڙهي ملاح سمنڊ جو خواب ڏٺو."],
          ["They walked five miles before sunset.", "وہ غروبِ آفتاب سے پہلے پانچ میل چلے۔", "اهي سج لهڻ کان اڳ پنج ميل هليا."],
          ["We waited two hours for the bus.", "ہم نے بس کے لیے دو گھنٹے انتظار کیا۔", "اسان بس لاءِ ٻه ڪلاڪ انتظار ڪيو."],
          ["She slept eight hours last night.", "وہ گزشتہ رات آٹھ گھنٹے سوئی۔", "هوءَ گذريل رات اٺ ڪلاڪ ستي."],
          ["The baby cried all night.", "بچہ ساری رات روتا رہا۔", "ٻار سڄي رات رنو."],
          ["He stayed three days in Lahore.", "وہ لاہور میں تین دن ٹھہرا۔", "هو لاهور ۾ ٽي ڏينهن ترسيو."],
          ["The horse ran a short distance.", "گھوڑا تھوڑا فاصلہ دوڑا۔", "گهوڙو ٿورو فاصلو ڊوڙيو."],
          ["The old man lived ninety years.", "بوڑھا آدمی نوّے سال جیا۔", "پوڙهو ماڻهو نوي سال جيئرو رهيو."],
          ["The workers rested half an hour.", "مزدوروں نے آدھا گھنٹہ آرام کیا۔", "مزدورن اڌ ڪلاڪ آرام ڪيو."],
          ["She travelled many kilometres alone.", "وہ اکیلی کئی کلومیٹر سفر کرتی رہی۔", "هوءَ اڪيلي ڪيترائي ڪلوميٽر سفر ڪندي رهي."],
          ["The meeting lasted two hours.", "اجلاس دو گھنٹے جاری رہا۔", "گڏجاڻي ٻه ڪلاڪ هلي."],
          ["He walked a long way to school.", "وہ اسکول تک لمبا راستہ پیدل چلا۔", "هو اسڪول تائين ڊگهو پنڌ ڪري ويو."],
          ["The patient slept the whole afternoon.", "مریض پوری دوپہر سوتا رہا۔", "مريض سڄي منجهند ستو رهيو."],
          ["They stayed a week at the seaside.", "وہ سمندر کے کنارے ایک ہفتہ ٹھہرے۔", "اهي سمنڊ ڪناري هڪ هفتو رهيا."],
          ["The train ran twenty kilometres behind schedule.", "ٹرین مقررہ وقت سے پیچھے بیس کلومیٹر چلی۔", "ريل گاڏي مقرر وقت کان پوئتي ويهه ڪلوميٽر هلي."],
          ["I waited a moment outside.", "میں باہر ایک لمحہ انتظار کرتا رہا۔", "مان ٻاهر هڪ لمحو انتظار ڪندو رهيس."],
          ["The river flows several miles through the plain.", "دریا میدان میں کئی میل بہتا ہے۔", "ندي ميدان مان ڪيترائي ميل وهي ٿي."],
          ["The child grew two inches in a year.", "بچہ ایک سال میں دو انچ بڑھا۔", "ٻار هڪ سال ۾ ٻه انچ وڌيو."],
          ["The old bridge stood there for centuries.", "پرانا پل وہاں صدیوں تک قائم رہا۔", "پراڻو پل اتي صدين تائين بيٺو رهيو."],
          ["She worked all day without a break.", "اس نے بغیر وقفے کے سارا دن کام کیا۔", "هن بنا وقفي سڄو ڏينهن ڪم ڪيو."],
          ["The hikers climbed three kilometres before resting.", "پہاڑی مسافروں نے آرام سے پہلے تین کلومیٹر چڑھائی کی۔", "جابلو مسافرن آرام ڪرڻ کان اڳ ٽي ڪلوميٽر چڙهائي ڪئي."]
        ]
      }
    ]
  },
  "adjectives": {
    overview: "An adjective is a word that describes or gives more information about a noun or pronoun. It can tell us about quality, size, age, colour, shape, origin or quantity. Adjectives are commonly used attributively (before a noun) or predicatively (after a linking verb).",
    watchFor: "An adjective describes a noun or pronoun; an adverb commonly describes a verb, adjective or another adverb. The same adjective can be attributive in one sentence and predicative in another.",
    examples: ["It was a difficult question. (attributive: before the noun)", "The question seems difficult. (predicative: after a linking verb)"],
    overviewUrdu: "Adjective (صفت) وہ لفظ ہے جو اسم یا ضمیر کی خوبی، حالت، رنگ، جسامت، عمر، شکل، اصل یا تعداد کے بارے میں بتاتا ہے۔ صفت اسم سے پہلے بھی آ سکتی ہے (Attributive) اور linking verb کے بعد بھی (Predicative)۔",
    overviewSindhi: "Adjective (صفت) اهو لفظ آهي جيڪو اسم يا ضمير جي خوبي، حالت، رنگ، ماپ، عمر، شڪل، اصل يا تعداد بابت ڄاڻ ڏئي ٿو. صفت اسم کان اڳ به اچي سگهي ٿي (Attributive) ۽ linking verb کان پوءِ به (Predicative)۔",
    watchForUrdu: "صفت اسم یا ضمیر کی وضاحت کرتی ہے، جبکہ Adverb عموماً فعل، صفت یا دوسرے Adverb کی وضاحت کرتا ہے۔ ایک ہی صفت ایک جملے میں Attributive اور دوسرے میں Predicative ہو سکتی ہے۔",
    watchForSindhi: "صفت اسم يا ضمير جي وضاحت ڪري ٿي، جڏهن ته Adverb عام طور فعل، صفت يا ٻئي Adverb جي وضاحت ڪري ٿو. ساڳي صفت هڪ جملي ۾ Attributive ۽ ٻئي ۾ Predicative ٿي سگهي ٿي.",
    specialSectionsTitle: "ATTRIBUTIVE & PREDICATIVE ADJECTIVES — صفت جا استعمال",
    specialSections: [
      {
        title: "Attributive Adjectives",
        english: "An adjective is used attributively when it comes directly before the noun it describes. It forms part of the noun phrase and tells us which kind, what size, what colour or what quality the noun has. Example: a beautiful flower — beautiful describes the noun flower. The usual pattern is adjective + noun.",
        urdu: "جب صفت اپنے اسم سے پہلے آ کر اس کی خوبی، رنگ، جسامت یا حالت بتائے تو اسے Attributive استعمال کہتے ہیں۔ یہ اسم کے فقرے کا حصہ ہوتی ہے۔ مثال: a beautiful flower میں beautiful، flower کی صفت ہے۔ عام ترتیب صفت + اسم ہوتی ہے۔",
        sindhi: "جڏهن صفت پنهنجي اسم کان اڳ اچي ان جي خوبي، رنگ، ماپ يا حالت ٻڌائي ته ان کي Attributive استعمال چئبو آهي. اها اسم واري فقري جو حصو هوندي آهي. مثال: a beautiful flower ۾ beautiful، flower جي صفت آهي. عام ترتيب صفت + اسم آهي.",
        examples: [
          ["She bought a beautiful dress.", "اس نے ایک خوبصورت لباس خریدا۔", "هن هڪ سهڻو لباس خريد ڪيو."],
          ["The clever student answered correctly.", "ذہین طالب علم نے درست جواب دیا۔", "هوشيار شاگرد صحيح جواب ڏنو."],
          ["We live in a small house.", "ہم ایک چھوٹے گھر میں رہتے ہیں۔", "اسان هڪ ننڍڙي گهر ۾ رهون ٿا."],
          ["He drives a red car.", "وہ ایک سرخ گاڑی چلاتا ہے۔", "هو هڪ ڳاڙهي گاڏي هلائي ٿو."],
          ["I read an interesting book.", "میں نے ایک دلچسپ کتاب پڑھی۔", "مون هڪ دلچسپ ڪتاب پڙهيو."],
          ["They planted tall trees.", "انہوں نے لمبے درخت لگائے۔", "انهن ڊگها وڻ پوکيا."],
          ["She wore a silk scarf.", "اس نے ریشم کا دوپٹہ پہنا۔", "هن ريشم جو اسڪارف پاتو."],
          ["We watched a wonderful film.", "ہم نے ایک شاندار فلم دیکھی۔", "اسان هڪ شاندار فلم ڏٺي."],
          ["The old bridge needs repair.", "پرانے پل کو مرمت کی ضرورت ہے۔", "پراڻي پل کي مرمت جي ضرورت آهي."],
          ["He ate three ripe mangoes.", "اس نے تین پکے ہوئے آم کھائے۔", "هن ٽي پڪا انب کاڌا."]
        ]
      },
      {
        title: "Predicative Adjectives",
        english: "An adjective is used predicatively when it comes after a linking verb and describes the subject (or, in some patterns, the object). Common linking verbs include be (am, is, are, was, were), seem, become, look, feel, sound, smell and taste. Example: The flower is beautiful — beautiful describes the subject flower after is. The adjective is part of the predicate.",
        urdu: "جب صفت linking verb کے بعد آ کر فاعل یا بعض جملوں میں مفعول کی حالت یا خوبی بتائے تو اسے Predicative استعمال کہتے ہیں۔ عام linking verbs میں is, am, are, was, were, seem, become, look, feel, sound, smell اور taste شامل ہیں۔ مثال: The flower is beautiful میں beautiful، flower کی کیفیت بتاتا ہے۔",
        sindhi: "جڏهن صفت linking verb کان پوءِ اچي فاعل يا ڪجهه جملن ۾ مفعول جي حالت يا خوبي ٻڌائي ته ان کي Predicative استعمال چئبو آهي. عام linking verbs ۾ is, am, are, was, were, seem, become, look, feel, sound, smell ۽ taste شامل آهن. مثال: The flower is beautiful ۾ beautiful، flower جي حالت ٻڌائي ٿو.",
        examples: [
          ["The sky is blue.", "آسمان نیلا ہے۔", "آسمان نيرو آهي."],
          ["The children are happy.", "بچے خوش ہیں۔", "ٻار خوش آهن."],
          ["This soup tastes delicious.", "یہ سوپ مزیدار ہے۔", "هي سوپ مزيدار آهي."],
          ["The room looks clean.", "کمرہ صاف دکھائی دیتا ہے۔", "ڪمرو صاف نظر اچي ٿو."],
          ["My grandfather is old.", "میرے دادا بزرگ ہیں۔", "منهنجو ڏاڏو پوڙهو آهي."],
          ["The weather became cold.", "موسم سرد ہو گیا۔", "موسم ٿڌو ٿي ويو."],
          ["Your idea sounds interesting.", "آپ کا خیال دلچسپ لگتا ہے۔", "توهان جو خيال دلچسپ لڳي ٿو."],
          ["The flowers smell sweet.", "پھولوں کی خوشبو میٹھی ہے۔", "گلن جي خوشبو مٺي آهي."],
          ["I feel tired today.", "میں آج تھکا ہوا محسوس کرتا ہوں۔", "مان اڄ ٿڪل محسوس ڪريان ٿو."],
          ["The students seem ready.", "طلبہ تیار معلوم ہوتے ہیں۔", "شاگرد تيار نظر اچن ٿا."]
        ]
      },
      {
        title: "Adjectives of Quality or Descriptive Adjectives",
        english: "These adjectives describe the kind, quality or characteristic of a person, animal or thing. They answer the question 'What kind?'",
        urdu: "یہ صفات کسی شخص، جانور یا چیز کی خوبی، خامی یا خصوصیت بیان کرتی ہیں۔ یہ سوال 'کیسا؟' یا 'کیسی؟' کا جواب دیتی ہیں۔",
        sindhi: "اهي صفتون ڪنهن ماڻهو، جانور يا شيءِ جي خوبي، خامي يا خاصيت بيان ڪن ٿيون. اهي 'ڪيئن؟' واري سوال جو جواب ڏين ٿيون.",
        examples: [
          ["She is a kind woman.", "وہ ایک مہربان عورت ہے۔", "هوءَ هڪ مهربان عورت آهي."],
          ["He bought a beautiful house.", "اس نے ایک خوبصورت گھر خریدا۔", "هن هڪ سهڻو گهر خريد ڪيو."],
          ["It was a difficult test.", "یہ ایک مشکل امتحان تھا۔", "اهو هڪ ڏکيو امتحان هو."],
          ["The brave soldier saved the child.", "بہادر سپاہی نے بچے کو بچایا۔", "بهادر سپاهي ٻار کي بچايو."],
          ["We saw a huge elephant.", "ہم نے ایک بہت بڑا ہاتھی دیکھا۔", "اسان هڪ تمام وڏو هاٿي ڏٺو."],
          ["She wore a red dress.", "اس نے سرخ لباس پہنا۔", "هن ڳاڙهو لباس پاتو."],
          ["This is a useful book.", "یہ ایک مفید کتاب ہے۔", "هي هڪ فائديمند ڪتاب آهي."],
          ["The clever boy solved the puzzle.", "ذہین لڑکے نے پہیلی حل کی۔", "هوشيار ڇوڪري ڳجهارت حل ڪئي."],
          ["They live in a quiet village.", "وہ ایک پُرسکون گاؤں میں رہتے ہیں۔", "اهي هڪ ماٺيڻي ڳوٺ ۾ رهن ٿا."],
          ["Fresh fruit is healthy food.", "تازہ پھل صحت بخش غذا ہے۔", "تازا ميوا صحتمند خوراڪ آهن."]
        ]
      },
      {
        title: "Proper Adjectives",
        english: "A proper adjective is formed from a proper noun and begins with a capital letter in English. It describes a person, place, nation, language or culture, such as Pakistani, Sindhi or Shakespearean.",
        urdu: "Proper Adjective کسی خاص اسم (Proper Noun) سے بنتی ہے اور انگریزی میں اس کا پہلا حرف بڑا لکھا جاتا ہے۔ یہ کسی ملک، شہر، زبان، قوم یا شخصیت سے تعلق ظاہر کرتی ہے۔",
        sindhi: "Proper Adjective ڪنهن خاص اسم (Proper Noun) مان ٺهندي آهي ۽ انگريزي ۾ ان جو پهريون اکر وڏو لکبو آهي. اها ملڪ، شهر، ٻولي، قوم يا شخصيت سان لاڳاپو ظاهر ڪري ٿي.",
        examples: [
          ["Pakistani food is popular.", "پاکستانی کھانا مقبول ہے۔", "پاڪستاني کاڌو مشهور آهي."],
          ["She enjoys Sindhi poetry.", "وہ سندھی شاعری پسند کرتی ہے۔", "هوءَ سنڌي شاعري پسند ڪري ٿي."],
          ["We are learning the English language.", "ہم انگریزی زبان سیکھ رہے ہیں۔", "اسان انگريزي ٻولي سکي رهيا آهيون."],
          ["Italian art attracts visitors.", "اطالوی فن سیاحوں کو متوجہ کرتا ہے۔", "اطالوي فن سياحن کي ڇڪي ٿو."],
          ["He bought a Chinese phone.", "اس نے چینی فون خریدا۔", "هن چيني فون خريد ڪيو."],
          ["The French writer visited our school.", "فرانسیسی مصنف نے ہمارے اسکول کا دورہ کیا۔", "فرانسيسي ليکڪ اسان جي اسڪول جو دورو ڪيو."],
          ["I like Arabian horses.", "مجھے عربی گھوڑے پسند ہیں۔", "مون کي عربي گهوڙا پسند آهن."],
          ["The Victorian building is very old.", "وکٹورین عمارت بہت پرانی ہے۔", "وڪٽورين عمارت تمام پراڻي آهي."],
          ["We studied Shakespearean drama.", "ہم نے شیکسپیئر کے ڈرامے کا مطالعہ کیا۔", "اسان شيڪسپيئر جي ڊرامي جو مطالعو ڪيو."],
          ["Japanese technology is advanced.", "جاپانی ٹیکنالوجی ترقی یافتہ ہے۔", "جاپاني ٽيڪنالاجي ترقي يافته آهي."]
        ]
      },
      {
        title: "Adjectives of Quantity",
        english: "Adjectives of quantity tell how much of a thing is meant. They are generally used with uncountable nouns and answer 'How much?' Examples include some, much, little, enough and sufficient.",
        urdu: "Adjectives of Quantity بتاتی ہیں کہ کسی چیز کی کتنی مقدار مراد ہے۔ یہ عموماً ناقابلِ شمار اسموں کے ساتھ آتی ہیں اور 'کتنا؟' کا جواب دیتی ہیں۔",
        sindhi: "Adjectives of Quantity ٻڌائين ٿيون ته ڪنهن شيءِ جي ڪيتري مقدار مراد آهي. اهي عام طور اڻ ڳڻپ اسم سان اچن ٿيون ۽ 'ڪيترو؟' جو جواب ڏين ٿيون.",
        examples: [
          ["There is some water in the jug.", "جگ میں کچھ پانی ہے۔", "جگ ۾ ڪجهه پاڻي آهي."],
          ["We have enough rice for dinner.", "ہمارے پاس رات کے کھانے کے لیے کافی چاول ہیں۔", "اسان وٽ رات جي ماني لاءِ ڪافي چانور آهن."],
          ["There is little milk in the bottle.", "بوتل میں تھوڑا دودھ ہے۔", "بوتل ۾ ٿورو کير آهي."],
          ["She has much patience.", "اس میں بہت صبر ہے۔", "هن ۾ گهڻو صبر آهي."],
          ["He drank a little juice.", "اس نے تھوڑا سا رس پیا۔", "هن ٿورو رس پيتو."],
          ["We need more sugar.", "ہمیں مزید چینی چاہیے۔", "اسان کي وڌيڪ کنڊ گهرجي."],
          ["There is no oil in the pan.", "پین میں تیل نہیں ہے۔", "ڪڙاهيءَ ۾ تيل ناهي."],
          ["I have sufficient information.", "میرے پاس کافی معلومات ہیں۔", "مون وٽ ڪافي ڄاڻ آهي."],
          ["They wasted too much time.", "انہوں نے بہت زیادہ وقت ضائع کیا۔", "انهن تمام گهڻو وقت ضايع ڪيو."],
          ["Add less salt to the soup.", "سوپ میں کم نمک ڈالیں۔", "سوپ ۾ گهٽ لوڻ وجهو."]
        ]
      },
      {
        title: "Adjectives of Number or Numerical Adjectives",
        english: "Adjectives of number tell how many persons or things are meant, or the order in which they occur. They are used with countable nouns. They include definite, indefinite and distributive numeral adjectives; definite numerals include cardinal and ordinal forms.",
        urdu: "Adjectives of Number بتاتی ہیں کہ کتنے افراد یا چیزیں ہیں یا ان کی ترتیب کیا ہے۔ یہ قابلِ شمار اسموں کے ساتھ استعمال ہوتی ہیں۔ ان کی اقسام میں Definite، Indefinite اور Distributive شامل ہیں؛ Definite میں Cardinal اور Ordinal آتے ہیں۔",
        sindhi: "Adjectives of Number ٻڌائين ٿيون ته ڪيترا ماڻهو يا شيون آهن يا انهن جي ترتيب ڪهڙي آهي. اهي ڳڻپ لائق اسمن سان استعمال ٿين ٿيون. انهن ۾ Definite، Indefinite ۽ Distributive قسمون آهن؛ Definite ۾ Cardinal ۽ Ordinal اچن ٿا.",
        examples: [
          ["Five students passed the test.", "پانچ طلبہ امتحان میں کامیاب ہوئے۔", "پنج شاگرد امتحان ۾ ڪامياب ٿيا."],
          ["The first train has arrived.", "پہلی ٹرین آ گئی ہے۔", "پهرين ريل اچي وئي آهي."],
          ["Several birds are sitting on the wall.", "کئی پرندے دیوار پر بیٹھے ہیں۔", "ڪيترائي پکي ڀت تي ويٺا آهن."],
          ["Each child received a pencil.", "ہر بچے کو ایک پنسل ملی۔", "هر ٻار کي هڪ پينسل ملي."],
          ["There are twelve months in a year.", "ایک سال میں بارہ مہینے ہوتے ہیں۔", "هڪ سال ۾ ٻارهن مهينا ٿين ٿا."],
          ["Many people attended the meeting.", "بہت سے لوگ اجلاس میں شریک ہوئے۔", "ڪيترائي ماڻهو گڏجاڻي ۾ شامل ٿيا."],
          ["Both sisters can swim.", "دونوں بہنیں تیر سکتی ہیں۔", "ٻئي ڀينرون تري سگهن ٿيون."],
          ["Every student must work hard.", "ہر طالب علم کو محنت کرنی چاہیے۔", "هر شاگرد کي محنت ڪرڻ گهرجي."],
          ["The third chapter is easy.", "تیسرا باب آسان ہے۔", "ٽيون باب آسان آهي."],
          ["Neither answer is correct.", "دونوں میں سے کوئی جواب درست نہیں۔", "ٻنهي مان ڪو به جواب صحيح ناهي."]
        ]
      },
      {
        title: "Definite Numeral Adjectives",
        english: "A definite numeral adjective gives an exact number or a specific position. Cardinal numbers show an exact count; ordinal numbers show order or rank.",
        urdu: "Definite Numeral Adjective کسی اسم کی صحیح تعداد یا خاص ترتیب بتاتی ہے۔ Cardinal تعداد بتاتا ہے جبکہ Ordinal درجہ یا ترتیب ظاہر کرتا ہے۔",
        sindhi: "Definite Numeral Adjective اسم جو صحيح تعداد يا خاص ترتيب ٻڌائي ٿي. Cardinal ڳڻپ ٻڌائي ٿو، جڏهن ته Ordinal درجو يا ترتيب ظاهر ڪري ٿو.",
        examples: [
          ["Three boys are playing.", "تین لڑکے کھیل رہے ہیں۔", "ٽي ڇوڪرا راند ڪري رهيا آهن."],
          ["I bought six apples.", "میں نے چھ سیب خریدے۔", "مون ڇهه صوف خريد ڪيا."],
          ["Ten workers arrived early.", "دس مزدور جلدی پہنچے۔", "ڏهه مزدور سوير پهتا."],
          ["She has two brothers.", "اس کے دو بھائی ہیں۔", "هن جا ٻه ڀائر آهن."],
          ["The fourth lesson is interesting.", "چوتھا سبق دلچسپ ہے۔", "چوٿون سبق دلچسپ آهي."],
          ["He won the first prize.", "اس نے پہلا انعام جیتا۔", "هن پهريون انعام کٽيو."],
          ["Our school has twenty classrooms.", "ہمارے اسکول میں بیس جماعتیں ہیں۔", "اسان جي اسڪول ۾ ويهه ڪلاس روم آهن."],
          ["The seventh player scored a goal.", "ساتویں کھلاڑی نے گول کیا۔", "ستين رانديگر گول ڪيو."],
          ["I read two chapters today.", "میں نے آج دو ابواب پڑھے۔", "مون اڄ ٻه باب پڙهيا."],
          ["The tenth page is missing.", "دسواں صفحہ غائب ہے۔", "ڏهون صفحو گم آهي."]
        ]
      },
      {
        title: "Indefinite Numeral Adjectives",
        english: "An indefinite numeral adjective indicates an approximate or unspecified number, not an exact count. Examples include many, few, several, some and numerous.",
        urdu: "Indefinite Numeral Adjective غیر معین یا اندازاً تعداد بتاتی ہے، صحیح گنتی نہیں۔ مثلاً many، few، several اور some۔",
        sindhi: "Indefinite Numeral Adjective اڻ پڪي يا اندازي واري تعداد ٻڌائي ٿي، صحيح ڳڻپ نه. مثال طور many، few، several ۽ some.",
        examples: [
          ["Many students joined the class.", "بہت سے طلبہ جماعت میں شامل ہوئے۔", "ڪيترائي شاگرد ڪلاس ۾ شامل ٿيا."],
          ["Few people know the answer.", "چند لوگوں کو جواب معلوم ہے۔", "ٿورن ماڻهن کي جواب معلوم آهي."],
          ["Several guests arrived late.", "کئی مہمان دیر سے پہنچے۔", "ڪيترائي مهمان دير سان پهتا."],
          ["Some children are playing outside.", "کچھ بچے باہر کھیل رہے ہیں۔", "ڪجهه ٻار ٻاهر راند ڪري رهيا آهن."],
          ["Numerous stars shine at night.", "رات کو بے شمار ستارے چمکتے ہیں۔", "رات جو بي شمار تارا چمڪن ٿا."],
          ["I have a few friends here.", "یہاں میرے چند دوست ہیں۔", "هتي منهنجا ڪجهه دوست آهن."],
          ["Various books are available.", "مختلف کتابیں دستیاب ہیں۔", "مختلف ڪتاب موجود آهن."],
          ["Most students passed the exam.", "زیادہ تر طلبہ امتحان میں کامیاب ہوئے۔", "گهڻا شاگرد امتحان ۾ ڪامياب ٿيا."],
          ["Several shops are closed today.", "آج کئی دکانیں بند ہیں۔", "اڄ ڪيتريون ئي دڪان بند آهن."],
          ["Many birds migrate in winter.", "بہت سے پرندے سردیوں میں ہجرت کرتے ہیں۔", "ڪيترائي پکي سياري ۾ لڏپلاڻ ڪن ٿا."]
        ]
      },
      {
        title: "Cardinal Numeral Adjectives",
        english: "Cardinal numeral adjectives tell the exact number of persons or things. They answer 'How many?' Examples: one, two, three, twenty.",
        urdu: "Cardinal Numeral Adjectives اسم کی صحیح گنتی بتاتی ہیں اور 'کتنے؟' کا جواب دیتی ہیں، جیسے one, two, three۔",
        sindhi: "Cardinal Numeral Adjectives اسمن جي صحيح ڳڻپ ٻڌائين ٿيون ۽ 'ڪيترا؟' جو جواب ڏين ٿيون، جيئن one, two, three.",
        examples: [
          ["I have one sister.", "میری ایک بہن ہے۔", "منهنجي هڪ ڀيڻ آهي."],
          ["They planted two trees.", "انہوں نے دو درخت لگائے۔", "انهن ٻه وڻ پوکيا."],
          ["We saw three buses.", "ہم نے تین بسیں دیکھیں۔", "اسان ٽي بسون ڏٺيون."],
          ["Four boys are absent.", "چار لڑکے غیر حاضر ہیں۔", "چار ڇوڪرا غير حاضر آهن."],
          ["She bought five pencils.", "اس نے پانچ پنسلیں خریدیں۔", "هن پنج پينسلون خريد ڪيون."],
          ["Six players entered the field.", "چھ کھلاڑی میدان میں داخل ہوئے۔", "ڇهه رانديگر ميدان ۾ داخل ٿيا."],
          ["Seven days make a week.", "سات دنوں سے ایک ہفتہ بنتا ہے۔", "ست ڏينهن هڪ هفتو ٺاهين ٿا."],
          ["Eight birds sat on the roof.", "آٹھ پرندے چھت پر بیٹھے۔", "اٺ پکي ڇت تي ويٺا."],
          ["Nine students received certificates.", "نو طلبہ کو اسناد ملیں۔", "نون شاگردن کي سرٽيفڪيٽ مليا."],
          ["Ten workers completed the task.", "دس مزدوروں نے کام مکمل کیا۔", "ڏهن مزدورن ڪم پورو ڪيو."]
        ]
      },
      {
        title: "Ordinal Numeral Adjectives",
        english: "Ordinal numeral adjectives show the order, position or rank of a person or thing. They answer 'Which one in order?' Examples: first, second, third and last.",
        urdu: "Ordinal Numeral Adjectives کسی شخص یا چیز کی ترتیب، مقام یا درجہ بتاتی ہیں، جیسے first، second اور third۔",
        sindhi: "Ordinal Numeral Adjectives ڪنهن ماڻهو يا شيءِ جي ترتيب، جاءِ يا درجو ٻڌائين ٿيون، جيئن first، second ۽ third.",
        examples: [
          ["She won the first prize.", "اس نے پہلا انعام جیتا۔", "هن پهريون انعام کٽيو."],
          ["He lives on the second floor.", "وہ دوسری منزل پر رہتا ہے۔", "هو ٻئي ماڙ تي رهي ٿو."],
          ["The third question is easy.", "تیسرا سوال آسان ہے۔", "ٽيون سوال آسان آهي."],
          ["Our team came fourth.", "ہماری ٹیم چوتھے نمبر پر آئی۔", "اسان جي ٽيم چوٿين نمبر تي آئي."],
          ["Read the fifth paragraph.", "پانچواں پیراگراف پڑھیں۔", "پنجون پيراگراف پڙهو."],
          ["The sixth chapter is long.", "چھٹا باب لمبا ہے۔", "ڇهون باب ڊگهو آهي."],
          ["Today is my seventh day here.", "آج یہاں میرا ساتواں دن ہے۔", "اڄ هتي منهنجو ستون ڏينهن آهي."],
          ["The eighth player is injured.", "آٹھواں کھلاڑی زخمی ہے۔", "اٺون رانديگر زخمي آهي."],
          ["This is her ninth birthday.", "یہ اس کی نویں سالگرہ ہے۔", "هيءَ سندس نائين سالگرهه آهي."],
          ["The tenth bus is ours.", "دسویں بس ہماری ہے۔", "ڏهين بس اسان جي آهي."]
        ]
      },
      {
        title: "Distributive Numeral Adjectives",
        english: "Distributive numeral adjectives refer to persons or things one at a time or separately. Common examples are each, every, either and neither. They are normally followed by a singular countable noun.",
        urdu: "Distributive Numeral Adjectives افراد یا چیزوں کو ایک ایک کر کے یا الگ الگ ظاہر کرتی ہیں۔ عام الفاظ each، every، either اور neither ہیں۔ ان کے بعد عموماً واحد قابلِ شمار اسم آتا ہے۔",
        sindhi: "Distributive Numeral Adjectives ماڻهن يا شين کي هڪ هڪ ڪري يا الڳ الڳ ظاهر ڪن ٿيون. عام لفظ each، every، either ۽ neither آهن. انهن کان پوءِ عام طور واحد ڳڻپ لائق اسم اچي ٿو.",
        examples: [
          ["Each student has a notebook.", "ہر طالب علم کے پاس ایک کاپی ہے۔", "هر شاگرد وٽ هڪ ڪاپي آهي."],
          ["Every child needs care.", "ہر بچے کو دیکھ بھال کی ضرورت ہے۔", "هر ٻار کي سار سنڀال جي ضرورت آهي."],
          ["Each player received a medal.", "ہر کھلاڑی کو تمغہ ملا۔", "هر رانديگر کي تمغو مليو."],
          ["Every room has a window.", "ہر کمرے میں ایک کھڑکی ہے۔", "هر ڪمري ۾ هڪ دري آهي."],
          ["Either road leads to the village.", "دونوں میں سے کوئی ایک راستہ گاؤں جاتا ہے۔", "ٻنهي مان ڪو هڪ رستو ڳوٺ ڏانهن وڃي ٿو."],
          ["Neither answer is correct.", "دونوں میں سے کوئی جواب درست نہیں۔", "ٻنهي مان ڪو به جواب صحيح ناهي."],
          ["Each book has a number.", "ہر کتاب پر ایک نمبر ہے۔", "هر ڪتاب تي هڪ نمبر آهي."],
          ["Every teacher attended the meeting.", "ہر استاد اجلاس میں شریک ہوا۔", "هر استاد گڏجاڻي ۾ شامل ٿيو."],
          ["Each of the boys received a prize.", "ہر لڑکے کو انعام ملا۔", "هر ڇوڪري کي انعام مليو."],
          ["Every seat was occupied.", "ہر نشست پر کوئی بیٹھا ہوا تھا۔", "هر سيٽ تي ڪو ويٺل هو."]
        ]
      },
      {
        title: "Demonstrative Adjectives",
        english: "Demonstrative adjectives point out particular nouns. This and that are used with singular nouns; these and those are used with plural nouns. They come before the noun they identify.",
        urdu: "Demonstrative Adjectives کسی خاص شخص یا چیز کی طرف اشارہ کرتی ہیں۔ This اور that واحد اسم کے ساتھ، جبکہ these اور those جمع اسم کے ساتھ آتے ہیں۔",
        sindhi: "Demonstrative Adjectives ڪنهن خاص ماڻهو يا شيءِ ڏانهن اشارو ڪن ٿيون. This ۽ that واحد اسم سان، جڏهن ته these ۽ those جمع اسمن سان اچن ٿا.",
        examples: [
          ["This book is useful.", "یہ کتاب مفید ہے۔", "هي ڪتاب فائديمند آهي."],
          ["That house is very old.", "وہ گھر بہت پرانا ہے۔", "اهو گهر تمام پراڻو آهي."],
          ["These flowers smell sweet.", "یہ پھول خوشبودار ہیں۔", "هي گل خوشبودار آهن."],
          ["Those boys are playing cricket.", "وہ لڑکے کرکٹ کھیل رہے ہیں۔", "اهي ڇوڪرا ڪرڪيٽ کيڏي رهيا آهن."],
          ["This pen belongs to me.", "یہ قلم میرا ہے۔", "هي قلم منهنجو آهي."],
          ["That mountain is high.", "وہ پہاڑ اونچا ہے۔", "اهو جبل اوچو آهي."],
          ["These apples are fresh.", "یہ سیب تازہ ہیں۔", "اهي صوف تازا آهن."],
          ["Those birds are flying south.", "وہ پرندے جنوب کی طرف اڑ رہے ہیں۔", "اهي پکي ڏکڻ طرف اڏامي رهيا آهن."],
          ["This question is important.", "یہ سوال اہم ہے۔", "هي سوال اهم آهي."],
          ["Those buildings are modern.", "وہ عمارتیں جدید ہیں۔", "اهي عمارتون جديد آهن."]
        ]
      },
      {
        title: "Interrogative Adjectives",
        english: "Interrogative adjectives are used with nouns to ask questions. The common forms are which, what and whose. They are different from interrogative pronouns because an interrogative adjective is followed by a noun.",
        urdu: "Interrogative Adjectives اسم کے ساتھ آ کر سوال پوچھتی ہیں۔ عام الفاظ which، what اور whose ہیں۔ ان کے بعد اسم آتا ہے، اسی لیے یہ Interrogative Pronouns سے مختلف ہیں۔",
        sindhi: "Interrogative Adjectives اسمن سان گڏ اچي سوال پڇن ٿيون. عام لفظ which، what ۽ whose آهن. انهن کان پوءِ اسم اچي ٿو، تنهنڪري اهي Interrogative Pronouns کان مختلف آهن.",
        examples: [
          ["Which book do you want?", "آپ کون سی کتاب چاہتے ہیں؟", "توهان کي ڪهڙو ڪتاب گهرجي؟"],
          ["What subject do you like?", "آپ کو کون سا مضمون پسند ہے؟", "توهان کي ڪهڙو مضمون پسند آهي؟"],
          ["Whose bag is this?", "یہ کس کا بستہ ہے؟", "هي ڪنهن جو ٿيلهو آهي؟"],
          ["Which road goes to the station?", "کون سی سڑک اسٹیشن جاتی ہے؟", "ڪهڙو رستو اسٽيشن ڏانهن وڃي ٿو؟"],
          ["What colour is your car?", "آپ کی گاڑی کا رنگ کیا ہے؟", "توهان جي گاڏي جو رنگ ڪهڙو آهي؟"],
          ["Whose pencil is on the desk?", "میز پر کس کی پنسل ہے؟", "ميز تي ڪنهن جي پينسل آهي؟"],
          ["Which team won the match?", "کون سی ٹیم میچ جیتی؟", "ڪهڙي ٽيم مقابلو کٽيو؟"],
          ["What time does the class begin?", "کلاس کس وقت شروع ہوتی ہے؟", "ڪلاس ڪهڙي وقت شروع ٿئي ٿي؟"],
          ["Whose shoes are these?", "یہ جوتے کس کے ہیں؟", "هي جوتا ڪنهن جا آهن؟"],
          ["Which chapter should we read?", "ہمیں کون سا باب پڑھنا چاہیے؟", "اسان کي ڪهڙو باب پڙهڻ گهرجي؟"]
        ]
      }
      },
      {
        title: "Comparison of Adjectives",
        english: "Adjectives have three degrees of comparison: positive, comparative and superlative. The positive degree describes a quality without comparing. The comparative degree compares two people or things. The superlative degree shows the highest or lowest degree among three or more. Regular short adjectives usually take -er and -est; longer adjectives commonly use more and most.",
        urdu: "Adjectives کے تین درجے ہوتے ہیں: Positive، Comparative اور Superlative۔ Positive صرف خوبی بتاتا ہے، Comparative دو افراد یا چیزوں کا موازنہ کرتا ہے، جبکہ Superlative تین یا زیادہ میں سب سے اعلیٰ یا کم درجے کو ظاہر کرتا ہے۔ چھوٹی صفات کے ساتھ عموماً -er اور -est، جبکہ لمبی صفات کے ساتھ more اور most استعمال ہوتے ہیں۔",
        sindhi: "Adjectives جا ٽي درجا آهن: Positive، Comparative ۽ Superlative. Positive رڳو خوبي ٻڌائي ٿو، Comparative ٻن ماڻهن يا شين جو مقابلو ڪري ٿو، جڏهن ته Superlative ٽن يا وڌيڪ مان سڀ کان وڌيڪ يا گهٽ درجو ڏيکاري ٿو. ننڍين صفتن سان عام طور -er ۽ -est، جڏهن ته ڊگهين صفتن سان more ۽ most استعمال ٿيندا آهن.",
        examples: [
          ["Ali is tall; Ahmed is taller; Bilal is the tallest.", "علی لمبا ہے؛ احمد زیادہ لمبا ہے؛ بلال سب سے لمبا ہے۔", "علي ڊگهو آهي؛ احمد وڌيڪ ڊگهو آهي؛ بلال سڀ کان ڊگهو آهي."],
          ["This bag is light; that bag is lighter; this is the lightest.", "یہ بیگ ہلکا ہے؛ وہ زیادہ ہلکا ہے؛ یہ سب سے ہلکا ہے۔", "هي ٿيلهو هلڪو آهي؛ اهو وڌيڪ هلڪو آهي؛ هي سڀ کان هلڪو آهي."],
          ["Sara is kind; Hina is kinder; Ayesha is the kindest.", "سارہ مہربان ہے؛ حنا زیادہ مہربان ہے؛ عائشہ سب سے مہربان ہے۔", "سارا مهربان آهي؛ حنا وڌيڪ مهربان آهي؛ عائشه سڀ کان مهربان آهي."],
          ["This road is wide; that road is wider; this is the widest.", "یہ سڑک چوڑی ہے؛ وہ زیادہ چوڑی ہے؛ یہ سب سے چوڑی ہے۔", "هي رستو ويڪرو آهي؛ اهو وڌيڪ ويڪرو آهي؛ هي سڀ کان ويڪرو آهي."],
          ["The test is difficult; this test is more difficult; that is the most difficult.", "امتحان مشکل ہے؛ یہ زیادہ مشکل ہے؛ وہ سب سے زیادہ مشکل ہے۔", "امتحان ڏکيو آهي؛ هي وڌيڪ ڏکيو آهي؛ اهو سڀ کان ڏکيو آهي."],
          ["This story is interesting; that one is more interesting; this is the most interesting.", "یہ کہانی دلچسپ ہے؛ وہ زیادہ دلچسپ ہے؛ یہ سب سے دلچسپ ہے۔", "هي ڪهاڻي دلچسپ آهي؛ اها وڌيڪ دلچسپ آهي؛ هي سڀ کان دلچسپ آهي."],
          ["Today is good; yesterday was better; Sunday was the best.", "آج اچھا ہے؛ کل بہتر تھا؛ اتوار سب سے اچھا تھا۔", "اڄ سٺو آهي؛ ڪالهه بهتر هو؛ آچر سڀ کان بهتر هو."],
          ["This road is bad; that road is worse; this is the worst.", "یہ راستہ خراب ہے؛ وہ زیادہ خراب ہے؛ یہ سب سے خراب ہے۔", "هي رستو خراب آهي؛ اهو وڌيڪ خراب آهي؛ هي سڀ کان خراب آهي."],
          ["This box is big; that box is bigger; this is the biggest.", "یہ ڈبہ بڑا ہے؛ وہ زیادہ بڑا ہے؛ یہ سب سے بڑا ہے۔", "هي دٻو وڏو آهي؛ اهو وڌيڪ وڏو آهي؛ هي سڀ کان وڏو آهي."],
          ["This is a beautiful garden; that is more beautiful; this is the most beautiful.", "یہ خوبصورت باغ ہے؛ وہ زیادہ خوبصورت ہے؛ یہ سب سے خوبصورت ہے۔", "هي سهڻو باغ آهي؛ اهو وڌيڪ سهڻو آهي؛ هي سڀ کان سهڻو آهي."]
        ]
      },
      {
        title: "Degrees of Comparison",
        english: "The three degrees express different levels of the same quality. Positive is the basic form (small); comparative compares two (smaller than); superlative compares one with a whole group (the smallest). Use than after a comparative when naming the second item. The is normally used before a superlative adjective.",
        urdu: "تینوں درجات ایک ہی خوبی کی مختلف سطحیں ظاہر کرتے ہیں۔ Positive بنیادی شکل ہے (small)، Comparative دو کا موازنہ کرتا ہے (smaller than)، اور Superlative پورے گروہ میں سب سے زیادہ خوبی بتاتا ہے (the smallest)۔ دوسرے فرد یا چیز کا نام بتاتے وقت Comparative کے بعد than آتا ہے، جبکہ Superlative سے پہلے عموماً the استعمال ہوتا ہے۔",
        sindhi: "ٽيئي درجا ساڳئي خوبي جون مختلف سطحون ظاهر ڪن ٿا. Positive بنيادي صورت آهي (small)، Comparative ٻن جو مقابلو ڪري ٿو (smaller than)، ۽ Superlative سڄي گروهه مان سڀ کان وڌيڪ خوبي ڏيکاري ٿو (the smallest). ٻئي ماڻهو يا شيءِ جو نالو ڏيڻ وقت Comparative کان پوءِ than اچي ٿو، جڏهن ته Superlative کان اڳ عام طور the استعمال ٿئي ٿو.",
        examples: [
          ["A cat is small; a mouse is smaller; an ant is the smallest.", "بلی چھوٹی ہے؛ چوہا اس سے چھوٹا ہے؛ چیونٹی سب سے چھوٹی ہے۔", "ٻلي ننڍي آهي؛ ڪوئو وڌيڪ ننڍو آهي؛ ڪِول سڀ کان ننڍي آهي."],
          ["This rope is long; that rope is longer; this is the longest.", "یہ رسی لمبی ہے؛ وہ زیادہ لمبی ہے؛ یہ سب سے لمبی ہے۔", "هي رسي ڊگهي آهي؛ اها وڌيڪ ڊگهي آهي؛ هي سڀ کان ڊگهي آهي."],
          ["My cup is clean; yours is cleaner; hers is the cleanest.", "میرا کپ صاف ہے؛ تمہارا زیادہ صاف ہے؛ اس کا سب سے صاف ہے۔", "منهنجو ڪوپ صاف آهي؛ تنهنجو وڌيڪ صاف آهي؛ هن جو سڀ کان صاف آهي."],
          ["This exercise is easy; that is easier; this is the easiest.", "یہ مشق آسان ہے؛ وہ زیادہ آسان ہے؛ یہ سب سے آسان ہے۔", "هي مشق آسان آهي؛ اها وڌيڪ آسان آهي؛ هي سڀ کان آسان آهي."],
          ["This chair is comfortable; that is more comfortable; this is the most comfortable.", "یہ کرسی آرام دہ ہے؛ وہ زیادہ آرام دہ ہے؛ یہ سب سے آرام دہ ہے۔", "هي ڪرسي آرامده آهي؛ اها وڌيڪ آرامده آهي؛ هي سڀ کان آرامده آهي."],
          ["Hamza is young; Umar is younger; Zain is the youngest.", "حمزہ جوان ہے؛ عمر زیادہ جوان ہے؛ زین سب سے کم عمر ہے۔", "حمزه جوان آهي؛ عمر وڌيڪ جوان آهي؛ زين سڀ کان ننڍي عمر وارو آهي."],
          ["This fruit is sweet; that is sweeter; this is the sweetest.", "یہ پھل میٹھا ہے؛ وہ زیادہ میٹھا ہے؛ یہ سب سے میٹھا ہے۔", "هي ميوو مٺو آهي؛ اهو وڌيڪ مٺو آهي؛ هي سڀ کان مٺو آهي."],
          ["This room is spacious; that is more spacious; this is the most spacious.", "یہ کمرہ کشادہ ہے؛ وہ زیادہ کشادہ ہے؛ یہ سب سے کشادہ ہے۔", "هي ڪمرو ڪشادو آهي؛ اهو وڌيڪ ڪشادو آهي؛ هي سڀ کان ڪشادو آهي."],
          ["This answer is accurate; that is more accurate; this is the most accurate.", "یہ جواب درست ہے؛ وہ زیادہ درست ہے؛ یہ سب سے زیادہ درست ہے۔", "هي جواب صحيح آهي؛ اهو وڌيڪ صحيح آهي؛ هي سڀ کان وڌيڪ صحيح آهي."],
          ["This is a good plan; that is a better plan; this is the best plan.", "یہ اچھا منصوبہ ہے؛ وہ بہتر منصوبہ ہے؛ یہ بہترین منصوبہ ہے۔", "هي سٺو منصوبو آهي؛ اهو بهتر منصوبو آهي؛ هي بهترين منصوبو آهي."]
        ]
      },
      {
        title: "Positive Degree",
        english: "The positive degree is the basic form of an adjective. It describes a person or thing without showing that it is more or less than another. Examples: tall, clever, beautiful. Equality can be expressed with as + adjective + as; inequality with not as/so + adjective + as.",
        urdu: "Positive Degree صفت کی بنیادی شکل ہے۔ یہ کسی شخص یا چیز کی خوبی بتاتی ہے لیکن کسی دوسرے سے زیادہ یا کم ہونے کا موازنہ نہیں کرتی۔ برابری کے لیے as + adjective + as اور عدم برابری کے لیے not as/so + adjective + as استعمال کیا جا سکتا ہے۔",
        sindhi: "Positive Degree صفت جي بنيادي صورت آهي. اها ڪنهن ماڻهو يا شيءِ جي خوبي ٻڌائي ٿي، پر ٻئي سان وڌيڪ يا گهٽ هجڻ جو مقابلو نٿي ڪري. برابري لاءِ as + adjective + as ۽ اڻ برابري لاءِ not as/so + adjective + as استعمال ڪري سگهجي ٿو.",
        examples: [
          ["The room is clean.", "کمرہ صاف ہے۔", "ڪمرو صاف آهي."],
          ["This flower is beautiful.", "یہ پھول خوبصورت ہے۔", "هي گل سهڻو آهي."],
          ["The boy is intelligent.", "لڑکا ذہین ہے۔", "ڇوڪرو هوشيار آهي."],
          ["My bag is heavy.", "میرا بیگ بھاری ہے۔", "منهنجو ٿيلهو ڳرو آهي."],
          ["The water is cold.", "پانی ٹھنڈا ہے۔", "پاڻي ٿڌو آهي."],
          ["This road is wide.", "یہ سڑک چوڑی ہے۔", "هي رستو ويڪرو آهي."],
          ["The lesson is easy.", "سبق آسان ہے۔", "سبق آسان آهي."],
          ["She is as tall as her sister.", "وہ اپنی بہن جتنی لمبی ہے۔", "هوءَ پنهنجي ڀيڻ جيتري ڊگهي آهي."],
          ["This box is not as large as that one.", "یہ ڈبہ اس ڈبے جتنا بڑا نہیں ہے۔", "هي دٻو ان دٻي جيترو وڏو ناهي."],
          ["The garden is green.", "باغ ہرا بھرا ہے۔", "باغ سائو آهي."]
        ]
      },
      {
        title: "Comparative Degree",
        english: "The comparative degree compares two people, animals or things. For many short adjectives, add -er (tall → taller, small → smaller). For adjectives ending in -e, add -r (large → larger); for consonant + y, change y to -ier (happy → happier); some short vowel-consonant forms double the final consonant (big → bigger). Use more before many longer adjectives (more beautiful, more careful). Than commonly follows when the second item is stated.",
        urdu: "Comparative Degree دو افراد، جانوروں یا چیزوں کا موازنہ کرتی ہے۔ کئی چھوٹی صفات کے آخر میں -er لگتا ہے (tall → taller)۔ -e پر ختم ہونے والی صفت میں -r، consonant + y میں y بدل کر -ier، اور بعض مختصر vowel + consonant الفاظ میں آخری حرف دگنا ہوتا ہے (big → bigger)۔ کئی لمبی صفات سے پہلے more آتا ہے (more beautiful)۔ دوسرے فریق کا ذکر ہو تو عموماً than استعمال ہوتا ہے۔",
        sindhi: "Comparative Degree ٻن ماڻهن، جانورن يا شين جو مقابلو ڪري ٿي. ڪيترين ننڍين صفتن جي آخر ۾ -er لڳندو آهي (tall → taller). -e تي ختم ٿيندڙ صفت ۾ -r، consonant + y ۾ y بدلجي -ier ٿيندو آهي، ۽ ڪجهه ننڍن vowel + consonant لفظن ۾ آخري اکر ٻيڻو ٿيندو آهي (big → bigger). ڪيترين ڊگهين صفتن کان اڳ more ايندو آهي (more beautiful). ٻئي ڌر جو ذڪر هجي ته عام طور than استعمال ٿيندو آهي.",
        examples: [
          ["Ali is taller than Hamza.", "علی حمزہ سے زیادہ لمبا ہے۔", "علي حمزه کان وڌيڪ ڊگهو آهي."],
          ["This box is smaller than that box.", "یہ ڈبہ اس ڈبے سے چھوٹا ہے۔", "هي دٻو ان دٻي کان ننڍو آهي."],
          ["Today is hotter than yesterday.", "آج کل سے زیادہ گرم ہے۔", "اڄ ڪالهه کان وڌيڪ گرم آهي."],
          ["My new bag is lighter than the old one.", "میرا نیا بیگ پرانے بیگ سے ہلکا ہے۔", "منهنجو نئون ٿيلهو پراڻي ٿيلهي کان هلڪو آهي."],
          ["Sara is happier than before.", "سارہ پہلے سے زیادہ خوش ہے۔", "سارا اڳ کان وڌيڪ خوش آهي."],
          ["This building is larger than our school.", "یہ عمارت ہمارے اسکول سے بڑی ہے۔", "هي عمارت اسان جي اسڪول کان وڏي آهي."],
          ["This book is more interesting than that one.", "یہ کتاب اس کتاب سے زیادہ دلچسپ ہے۔", "هي ڪتاب ان ڪتاب کان وڌيڪ دلچسپ آهي."],
          ["The blue dress is more beautiful than the red one.", "نیلا لباس سرخ لباس سے زیادہ خوبصورت ہے۔", "نيرو لباس ڳاڙهي لباس کان وڌيڪ سهڻو آهي."],
          ["This method is more useful than the old method.", "یہ طریقہ پرانے طریقے سے زیادہ مفید ہے۔", "هي طريقو پراڻي طريقي کان وڌيڪ فائديمند آهي."],
          ["A train is faster than a bus.", "ٹرین بس سے زیادہ تیز ہے۔", "ريل بس کان وڌيڪ تيز آهي."]
        ]
      },
      {
        title: "Superlative Degree",
        english: "The superlative degree expresses the highest or lowest degree of a quality among three or more people or things. Many short adjectives take -est (tall → tallest); adjectives ending in -e take -st (large → largest); consonant + y changes to -iest (happy → happiest); some short vowel-consonant forms double the final consonant (big → biggest). Use most before many longer adjectives (most beautiful, most useful). The is normally placed before the superlative.",
        urdu: "Superlative Degree تین یا زیادہ افراد یا چیزوں میں کسی خوبی کی سب سے اعلیٰ یا کم ترین سطح ظاہر کرتی ہے۔ کئی چھوٹی صفات کے آخر میں -est، -e پر ختم ہونے والی صفت میں -st، consonant + y میں -iest، اور بعض مختصر الفاظ میں آخری حرف دگنا ہو کر -est لگتا ہے۔ کئی لمبی صفات سے پہلے most آتا ہے۔ Superlative سے پہلے عموماً the استعمال ہوتا ہے۔",
        sindhi: "Superlative Degree ٽن يا وڌيڪ ماڻهن يا شين مان ڪنهن خوبي جي سڀ کان وڏي يا گهٽ سطح ظاهر ڪري ٿي. ڪيترين ننڍين صفتن جي آخر ۾ -est، -e تي ختم ٿيندڙ صفت ۾ -st، consonant + y ۾ -iest، ۽ ڪجهه ننڍن لفظن ۾ آخري اکر ٻيڻو ڪري -est لڳندو آهي. ڪيترين ڊگهي صفتن کان اڳ most ايندو آهي. Superlative کان اڳ عام طور the استعمال ٿيندو آهي.",
        examples: [
          ["Bilal is the tallest boy in the class.", "بلال جماعت کا سب سے لمبا لڑکا ہے۔", "بلال ڪلاس جو سڀ کان ڊگهو ڇوڪرو آهي."],
          ["This is the smallest room in the house.", "یہ گھر کا سب سے چھوٹا کمرہ ہے۔", "هي گهر جو سڀ کان ننڍو ڪمرو آهي."],
          ["August is the hottest month here.", "اگست یہاں سب سے گرم مہینہ ہے۔", "آگسٽ هتي سڀ کان گرم مهينو آهي."],
          ["She is the happiest child in the family.", "وہ خاندان کی سب سے خوش بچی ہے۔", "هوءَ خاندان جي سڀ کان خوش ٻار آهي."],
          ["This is the largest park in the city.", "یہ شہر کا سب سے بڑا پارک ہے۔", "هي شهر جو سڀ کان وڏو پارڪ آهي."],
          ["Mount Everest is the highest mountain above sea level.", "ماؤنٹ ایورسٹ سطحِ سمندر سے بلند ترین پہاڑ ہے۔", "مائونٽ ايورسٽ سمنڊ جي سطح کان سڀ کان اوچو جبل آهي."],
          ["This is the most beautiful garden in town.", "یہ شہر کا سب سے خوبصورت باغ ہے۔", "هي شهر جو سڀ کان سهڻو باغ آهي."],
          ["That was the most difficult question in the test.", "وہ امتحان کا سب سے مشکل سوال تھا۔", "اهو امتحان جو سڀ کان ڏکيو سوال هو."],
          ["This is the most useful book in the library.", "یہ لائبریری کی سب سے مفید کتاب ہے۔", "هي لائبريري جو سڀ کان فائديمند ڪتاب آهي."],
          ["She is the best player on our team.", "وہ ہماری ٹیم کی بہترین کھلاڑی ہے۔", "هوءَ اسان جي ٽيم جي بهترين رانديگرياڻي آهي."]
        ]
      },
      {
        title: "Irregular Comparison of Adjectives",
        english: "Some adjectives do not form their comparative and superlative degrees by simply adding -er and -est or by using more and most. Their forms change irregularly and should be memorised. The table gives ten commonly taught irregular or special comparison patterns. Far and old have more than one accepted form, with different uses in some contexts.",
        urdu: "کچھ صفات کے Comparative اور Superlative درجے بنانے کے لیے صرف -er اور -est نہیں لگاتے اور نہ ہی more اور most استعمال کرتے ہیں؛ ان کی شکل بدل جاتی ہے۔ ایسی شکلیں یاد رکھنی چاہییں۔ نیچے دس عام irregular یا خاص تقابلی صورتیں دی گئی ہیں۔ Far اور old کی ایک سے زیادہ درست صورتیں بھی استعمال ہوتی ہیں۔",
        sindhi: "ڪجهه صفتن جا Comparative ۽ Superlative درجا ٺاهڻ لاءِ رڳو -er ۽ -est نٿا لڳايا وڃن ۽ نه ئي more ۽ most استعمال ٿيندا آهن؛ انهن جي صورت بدلجي ويندي آهي. اهڙيون صورتون ياد رکڻ گهرجن. هيٺ ڏهه عام irregular يا خاص تقابلي صورتون ڏنل آهن. Far ۽ old جون هڪ کان وڌيڪ صحيح صورتون به استعمال ٿين ٿيون.",
        examples: [
          ["good — better — best", "اچھا — بہتر — سب سے اچھا", "سٺو — بهتر — سڀ کان سٺو"],
          ["bad — worse — worst", "برا — بدتر — سب سے برا", "خراب — وڌيڪ خراب — سڀ کان خراب"],
          ["much — more — most (uncountable nouns)", "زیادہ مقدار — مزید — سب سے زیادہ مقدار", "گهڻي مقدار — وڌيڪ — سڀ کان گهڻي مقدار"],
          ["many — more — most (countable nouns)", "زیادہ تعداد — مزید — سب سے زیادہ تعداد", "گهڻا — وڌيڪ — سڀ کان گهڻا"],
          ["little — less — least (amount)", "تھوڑی مقدار — کم — سب سے کم", "ٿوري مقدار — گهٽ — سڀ کان گهٽ"],
          ["far — farther — farthest (distance)", "دور — زیادہ دور — سب سے دور", "پري — وڌيڪ پري — سڀ کان پري"],
          ["far — further — furthest (additional or figurative distance)", "مزید / آگے — مزید آگے — سب سے آگے", "وڌيڪ / اڳتي — وڌيڪ اڳتي — سڀ کان اڳتي"],
          ["well — better — best (adverb; also adjective meaning healthy)", "اچھی طرح / تندرست — زیادہ بہتر — سب سے بہتر", "چڱيءَ طرح / صحتمند — وڌيڪ بهتر — سڀ کان بهتر"],
          ["ill — worse — worst", "بیمار — زیادہ بیمار / بدتر — سب سے زیادہ بیمار / بدترین", "بيمار — وڌيڪ بيمار / خراب — سڀ کان وڌيڪ بيمار / خراب"],
          ["old — older — oldest (elder / eldest mainly for family relationships)", "پرانا / عمر رسیدہ — زیادہ پرانا — سب سے پرانا (رشتوں میں elder / eldest)", "پراڻو / وڏي عمر وارو — وڌيڪ پراڻو — سڀ کان پراڻو (رشتن لاءِ elder / eldest)"]
        ]
      }
      },
      {
        title: "More Adjective Comparisons — Practice List",
        english: "The following adjectives from the textbook exercise are compared here. Short adjectives commonly take -er and -est. Longer adjectives generally use more and most. Some forms are irregular: ill and bad become worse and worst; little becomes less and least; few becomes fewer and fewest. A few adjectives have spelling changes such as y changing to i before -er or -est.",
        urdu: "کتاب کی مشق میں دی گئی صفات کی تقابلی صورتیں درج ذیل ہیں۔ چھوٹی صفات کے ساتھ عموماً -er اور -est لگتا ہے، جبکہ لمبی صفات کے ساتھ more اور most آتا ہے۔ کچھ صفات بے قاعدہ ہیں: ill اور bad کی صورت worse اور worst، little کی less اور least، اور few کی fewer اور fewest ہوتی ہے۔ بعض الفاظ میں -er یا -est لگاتے وقت y بدل کر i ہو جاتا ہے۔",
        sindhi: "ڪتاب جي مشق ۾ ڏنل صفتن جون تقابلي صورتون هيٺ ڏجن ٿيون. ننڍين صفتن سان عام طور -er ۽ -est لڳندو آهي، جڏهن ته ڊگهين صفتن سان more ۽ most ايندو آهي. ڪجهه صفتون بي قاعده آهن: ill ۽ bad جون صورتون worse ۽ worst، little جون less ۽ least، ۽ few جون fewer ۽ fewest ٿين ٿيون. ڪجهه لفظن ۾ -er يا -est لڳائڻ وقت y بدلجي i ٿي ويندو آهي.",
        examples: [
          ["black — blacker — blackest", "سیاہ — زیادہ سیاہ — سب سے زیادہ سیاہ", "ڪارو — وڌيڪ ڪارو — سڀ کان ڪارو"],
          ["excellent — more excellent — most excellent", "عمدہ — زیادہ عمدہ — سب سے عمدہ", "شاندار — وڌيڪ شاندار — سڀ کان شاندار"],
          ["ill — worse — worst", "بیمار — زیادہ بیمار / بدتر — سب سے زیادہ بیمار / بدترین", "بيمار — وڌيڪ بيمار / خراب — سڀ کان وڌيڪ بيمار / خراب"],
          ["gloomy — gloomier — gloomiest", "اداس — زیادہ اداس — سب سے زیادہ اداس", "اداس — وڌيڪ اداس — سڀ کان وڌيڪ اداس"],
          ["mad — madder — maddest", "غصے میں / دیوانہ — زیادہ غصے میں — سب سے زیادہ غصے میں", "ڪاوڙيل / چريو — وڌيڪ ڪاوڙيل — سڀ کان وڌيڪ ڪاوڙيل"],
          ["safe — safer — safest", "محفوظ — زیادہ محفوظ — سب سے محفوظ", "محفوظ — وڌيڪ محفوظ — سڀ کان محفوظ"],
          ["bad — worse — worst", "برا — بدتر — سب سے برا", "خراب — وڌيڪ خراب — سڀ کان خراب"],
          ["unjust — more unjust — most unjust", "ناانصاف — زیادہ ناانصاف — سب سے زیادہ ناانصاف", "ناانصاف — وڌيڪ ناانصاف — سڀ کان وڌيڪ ناانصاف"],
          ["gay — gayer — gayest", "خوش / شاد — زیادہ خوش — سب سے زیادہ خوش", "خوش — وڌيڪ خوش — سڀ کان وڌيڪ خوش"],
          ["able — abler — ablest (also: more able — most able)", "قابل — زیادہ قابل — سب سے زیادہ قابل", "قابل — وڌيڪ قابل — سڀ کان وڌيڪ قابل"],
          ["dry — drier — driest", "خشک — زیادہ خشک — سب سے زیادہ خشک", "سڪل — وڌيڪ سڪل — سڀ کان وڌيڪ سڪل"],
          ["timid — more timid — most timid", "ڈرپوک — زیادہ ڈرپوک — سب سے زیادہ ڈرپوک", "ڊڄڻو — وڌيڪ ڊڄڻو — سڀ کان وڌيڪ ڊڄڻو"],
          ["ugly — uglier — ugliest", "بدصورت — زیادہ بدصورت — سب سے بدصورت", "بدصورت — وڌيڪ بدصورت — سڀ کان بدصورت"],
          ["true — truer — truest", "سچا — زیادہ سچا — سب سے سچا", "سچو — وڌيڪ سچو — سڀ کان سچو"],
          ["severe — more severe — most severe", "سخت — زیادہ سخت — سب سے زیادہ سخت", "سخت — وڌيڪ سخت — سڀ کان وڌيڪ سخت"],
          ["agreeable — more agreeable — most agreeable", "خوشگوار — زیادہ خوشگوار — سب سے زیادہ خوشگوار", "وڻندڙ — وڌيڪ وڻندڙ — سڀ کان وڌيڪ وڻندڙ"],
          ["difficult — more difficult — most difficult", "مشکل — زیادہ مشکل — سب سے زیادہ مشکل", "ڏکيو — وڌيڪ ڏکيو — سڀ کان ڏکيو"],
          ["little — less — least", "تھوڑا — کم — سب سے کم", "ٿورو — گهٽ — سڀ کان گهٽ"],
          ["few — fewer — fewest", "چند — کم تعداد — سب سے کم تعداد", "ٿورا — گهٽ — سڀ کان گهٽ"],
          ["numerous — more numerous — most numerous", "کثیر — زیادہ کثیر — سب سے زیادہ کثیر", "گهڻا — وڌيڪ گهڻا — سڀ کان گهڻا"],
          ["merry — merrier — merriest", "خوش مزاج — زیادہ خوش مزاج — سب سے زیادہ خوش مزاج", "خوش مزاج — وڌيڪ خوش مزاج — سڀ کان وڌيڪ خوش مزاج"]
        ]
      },
      {
        title: "Special Differences: Later, Latter, Latest, Last",
        english: "Later and latest refer to time. Latter and last refer to position or order. Later is the comparative form of late when speaking about time; latest means most recent. Latter identifies the second of two people or things already mentioned; last identifies the final one in a sequence. Do not confuse these meanings.",
        urdu: "Later اور latest وقت کے لیے استعمال ہوتے ہیں۔ Latter اور last ترتیب یا مقام کے لیے آتے ہیں۔ وقت کے لحاظ سے later کا مطلب بعد میں اور latest کا مطلب تازہ ترین ہے۔ Latter پہلے ذکر کی گئی دو چیزوں میں دوسری چیز کو ظاہر کرتا ہے، جبکہ last سلسلے کی آخری چیز بتاتا ہے۔",
        sindhi: "Later ۽ latest وقت لاءِ استعمال ٿيندا آهن. Latter ۽ last ترتيب يا جاءِ لاءِ ايندا آهن. وقت جي لحاظ کان later جو مطلب پوءِ ۽ latest جو مطلب تازو ترين آهي. Latter اڳ ذڪر ڪيل ٻن شين مان ٻي شيءِ ڏيکاري ٿو، جڏهن ته last سلسلي جي آخري شيءِ ٻڌائي ٿو.",
        examples: [
          ["He arrived later than I expected.", "وہ میری توقع سے دیر سے پہنچا۔", "هو منهنجي اميد کان دير سان پهتو."],
          ["Have you heard the latest news?", "کیا آپ نے تازہ ترین خبر سنی ہے؟", "ڇا توهان تازي خبر ٻڌي آهي؟"],
          ["The latter chapters are more interesting.", "بعد کے دو ابواب زیادہ دلچسپ ہیں۔", "پوئين باب وڌيڪ دلچسپ آهن."],
          ["The last chapter is difficult.", "آخری باب مشکل ہے۔", "آخري باب ڏکيو آهي."],
          ["We will discuss this at a later time.", "ہم اس پر بعد میں بات کریں گے۔", "اسان ان بابت پوءِ ڳالهائينداسين."],
          ["This is the latest edition of the book.", "یہ کتاب کا تازہ ترین ایڈیشن ہے۔", "هي ڪتاب جو تازو ترين ڇاپو آهي."],
          ["Of tea and coffee, I prefer the latter.", "چائے اور کافی میں سے میں دوسری چیز یعنی کافی پسند کرتا ہوں۔", "چانهه ۽ ڪافي مان مون کي ٻي شيءِ، يعني ڪافي، پسند آهي."],
          ["He was the last person to leave.", "وہ سب سے آخر میں جانے والا شخص تھا۔", "هو سڀ کان آخر ۾ وڃڻ وارو ماڻهو هو."],
          ["The meeting started later than planned.", "اجلاس منصوبے سے دیر سے شروع ہوا۔", "گڏجاڻي رٿابندي کان دير سان شروع ٿي."],
          ["The latest reports are available online.", "تازہ ترین رپورٹیں آن لائن دستیاب ہیں۔", "تازيون رپورٽون آن لائن موجود آهن."]
        ]
      },
      {
        title: "Special Differences: Elder, Older, Eldest, Oldest",
        english: "Elder and eldest are traditionally used mainly for people in the same family and normally come before a noun (my elder brother; her eldest daughter). Elder is not normally followed by than. Older and oldest can describe people, animals and things, and older is used with than (He is older than me).",
        urdu: "Elder اور eldest روایتی طور پر زیادہ تر ایک ہی خاندان کے افراد کے لیے استعمال ہوتے ہیں اور عموماً اسم سے پہلے آتے ہیں، جیسے my elder brother اور her eldest daughter۔ Elder کے بعد عموماً than نہیں آتا۔ Older اور oldest افراد، جانوروں اور چیزوں سب کے لیے استعمال ہو سکتے ہیں، اور older کے ساتھ than آ سکتا ہے۔",
        sindhi: "Elder ۽ eldest روايتي طور گهڻو ڪري ساڳئي خاندان جي ماڻهن لاءِ استعمال ٿيندا آهن ۽ عام طور اسم کان اڳ ايندا آهن، جيئن my elder brother ۽ her eldest daughter. Elder کان پوءِ عام طور than نٿو اچي. Older ۽ oldest ماڻهو، جانور ۽ شيون سڀني لاءِ استعمال ٿي سگهن ٿا، ۽ older سان than اچي سگهي ٿو.",
        examples: [
          ["John is my elder brother.", "جان میرا بڑا بھائی ہے۔", "جان منهنجو وڏو ڀاءُ آهي."],
          ["Tom is my eldest son.", "ٹام میرا سب سے بڑا بیٹا ہے۔", "ٽام منهنجو سڀ کان وڏو پٽ آهي."],
          ["He is older than his sister.", "وہ اپنی بہن سے بڑا ہے۔", "هو پنهنجي ڀيڻ کان وڏو آهي."],
          ["Rama is the oldest boy in the group.", "راما گروپ کا سب سے بڑا لڑکا ہے۔", "راما گروهه جو سڀ کان وڏو ڇوڪرو آهي."],
          ["This is the oldest temple in the city.", "یہ شہر کا سب سے قدیم مندر ہے۔", "هي شهر جو سڀ کان پراڻو مندر آهي."],
          ["My elder sister is a teacher.", "میری بڑی بہن استاد ہے۔", "منهنجي وڏي ڀيڻ استاد آهي."],
          ["Her eldest child studies medicine.", "اس کا سب سے بڑا بچہ طب پڑھتا ہے۔", "سندس سڀ کان وڏو ٻار طب پڙهي ٿو."],
          ["This building is older than that one.", "یہ عمارت اس عمارت سے پرانی ہے۔", "هي عمارت ان عمارت کان پراڻي آهي."],
          ["Which is the oldest tree in the park?", "پارک کا سب سے پرانا درخت کون سا ہے؟", "پارڪ جو سڀ کان پراڻو وڻ ڪهڙو آهي؟"],
          ["My older cousin lives nearby.", "میرا بڑا کزن قریب رہتا ہے۔", "منهنجو وڏو سوٽ ويجهو رهي ٿو."]
        ]
      },
      {
        title: "Special Differences: Farther and Further",
        english: "Both farther and further can refer to a greater distance. In traditional usage, farther is preferred for physical distance. Further is commonly used to mean additional or more, as in further information or further discussion. Further can also refer to figurative distance.",
        urdu: "Farther اور further دونوں زیادہ فاصلے کے لیے آ سکتے ہیں۔ روایتی استعمال میں جسمانی فاصلے کے لیے farther کو ترجیح دی جاتی ہے۔ Further کا مطلب اضافی یا مزید بھی ہوتا ہے، جیسے further information یعنی مزید معلومات۔ Further مجازی فاصلے کے لیے بھی استعمال ہو سکتا ہے۔",
        sindhi: "Farther ۽ further ٻئي وڌيڪ فاصلي لاءِ استعمال ٿي سگهن ٿا. روايتي استعمال ۾ حقيقي فاصلي لاءِ farther کي ترجيح ڏني ويندي آهي. Further جو مطلب اضافي يا وڌيڪ به آهي، جيئن further information يعني وڌيڪ ڄاڻ. Further مجازي فاصلي لاءِ به اچي سگهي ٿو.",
        examples: [
          ["Karachi is farther from Lahore than Hyderabad is.", "کراچی، حیدرآباد کے مقابلے میں لاہور سے زیادہ دور ہے۔", "ڪراچي، حيدرآباد جي ڀيٽ ۾ لاهور کان وڌيڪ پري آهي."],
          ["The school is farther down the road.", "اسکول سڑک پر مزید آگے ہے۔", "اسڪول رستي تي وڌيڪ اڳتي آهي."],
          ["We need further information.", "ہمیں مزید معلومات درکار ہیں۔", "اسان کي وڌيڪ ڄاڻ گهرجي."],
          ["After this, he made no further remarks.", "اس کے بعد اس نے مزید کوئی تبصرہ نہیں کیا۔", "ان کان پوءِ هن وڌيڪ ڪو تبصرو نه ڪيو."],
          ["I cannot walk any farther.", "میں مزید دور نہیں چل سکتا۔", "مان وڌيڪ پري هلي نٿو سگهان."],
          ["Further study is necessary.", "مزید مطالعہ ضروری ہے۔", "وڌيڪ پڙهائي ضروري آهي."],
          ["The village is farther away than the town.", "گاؤں قصبے سے زیادہ دور ہے۔", "ڳوٺ شهر کان وڌيڪ پري آهي."],
          ["We will discuss this further tomorrow.", "ہم کل اس پر مزید بات کریں گے۔", "اسان سڀاڻي هن بابت وڌيڪ ڳالهائينداسين."],
          ["There is no further delay.", "اب مزید تاخیر نہیں ہے۔", "هاڻي وڌيڪ دير ناهي."],
          ["The farthest station is near the border.", "سب سے دور اسٹیشن سرحد کے قریب ہے۔", "سڀ کان پري اسٽيشن سرحد جي ويجهو آهي."]
        ]
      },
      {
        title: "Special Differences: Nearest and Next",
        english: "Nearest means closest in physical distance. Next refers to the one immediately following in order, time or sequence, or the one beside something in expressions such as next to. Nearest is a superlative form of near; next is not simply interchangeable with nearest.",
        urdu: "Nearest کا مطلب جسمانی فاصلے کے لحاظ سے سب سے قریب ہے۔ Next ترتیب، وقت یا سلسلے میں فوراً بعد آنے والی چیز یا شخص کے لیے استعمال ہوتا ہے۔ Next to کا مطلب کسی چیز کے ساتھ یا برابر میں ہے۔ Nearest، near کی Superlative صورت ہے؛ next اس کا متبادل نہیں۔",
        sindhi: "Nearest جو مطلب حقيقي فاصلي ۾ سڀ کان ويجهو آهي. Next ترتيب، وقت يا سلسلي ۾ فوراً پوءِ ايندڙ شيءِ يا ماڻهو لاءِ استعمال ٿيندو آهي. Next to جو مطلب ڪنهن شيءِ جي ڀرسان آهي. Nearest، near جي Superlative صورت آهي؛ next ان جو سڌو متبادل ناهي.",
        examples: [
          ["Where is the nearest bus stop?", "قریب ترین بس اسٹاپ کہاں ہے؟", "سڀ کان ويجهو بس اسٽاپ ڪٿي آهي؟"],
          ["This is the nearest shop to my house.", "یہ میرے گھر کے قریب ترین دکان ہے۔", "هي منهنجي گهر جي سڀ کان ويجهي دڪان آهي."],
          ["The nearest hospital is five kilometres away.", "قریب ترین اسپتال پانچ کلومیٹر دور ہے۔", "سڀ کان ويجهي اسپتال پنج ڪلوميٽر پري آهي."],
          ["Karim's shop is next to the post office.", "کریم کی دکان ڈاک خانے کے ساتھ ہے۔", "ڪريم جو دڪان پوسٽ آفيس جي ڀرسان آهي."],
          ["My uncle lives in the next house.", "میرے چچا اگلے گھر میں رہتے ہیں۔", "منهنجو چاچو ڀر واري گهر ۾ رهي ٿو."],
          ["What is the next lesson?", "اگلا سبق کون سا ہے؟", "اڳيون سبق ڪهڙو آهي؟"],
          ["She was the next person in the queue.", "وہ قطار میں اگلی شخص تھی۔", "هوءَ قطار ۾ ايندڙ ماڻهو هئي."],
          ["The nearest phone box is across the street.", "قریب ترین فون بوتھ سڑک کے پار ہے۔", "سڀ کان ويجهو فون بوٿ رستي جي ٻئي پاسي آهي."],
          ["We caught the next train.", "ہم نے اگلی ٹرین پکڑی۔", "اسان ايندڙ ريل پڪڙي."],
          ["Which is the nearest route to the station?", "اسٹیشن جانے کا قریب ترین راستہ کون سا ہے؟", "اسٽيشن ڏانهن سڀ کان ويجهو رستو ڪهڙو آهي؟"]
        ]
      }
      },
      {
        title: "Interchange of the Degrees of Comparison",
        english: "A sentence can often be rewritten from one degree of comparison to another without changing its essential meaning. Positive degree commonly uses 'as...as' or 'not so/as...as'; comparative degree uses 'than'; superlative degree commonly uses 'the' with 'of all' or 'in the group'. When changing the degree, keep the original meaning and the subject group the same. Some sentences need a small change in wording or word order.",
        urdu: "کسی جملے کو اس کے بنیادی معنی بدلے بغیر ایک Degree سے دوسری Degree میں تبدیل کیا جا سکتا ہے۔ Positive Degree میں عموماً as...as یا not so/as...as، Comparative میں than، اور Superlative میں عموماً the کے ساتھ of all یا in the group استعمال ہوتا ہے۔ تبدیلی کرتے وقت جملے کا اصل مطلب اور موازنے کا گروہ برقرار رکھیں۔",
        sindhi: "ڪنهن جملي کي ان جي بنيادي معنيٰ بدلائڻ کان سواءِ هڪ Degree مان ٻي Degree ۾ تبديل ڪري سگهجي ٿو. Positive Degree ۾ عام طور as...as يا not so/as...as، Comparative ۾ than، ۽ Superlative ۾ عام طور the سان of all يا in the group استعمال ٿيندو آهي. تبديلي وقت جملي جي اصل معنيٰ ۽ مقابلي واري گروهه کي برقرار رکو.",
        examples: [
          ["Positive: No other boy in the class is as tall as Ali. | Comparative: Ali is taller than any other boy in the class. | Superlative: Ali is the tallest boy in the class.", "مثبت: جماعت میں کوئی دوسرا لڑکا علی جتنا لمبا نہیں۔ | تقابلی: علی جماعت کے کسی بھی دوسرے لڑکے سے زیادہ لمبا ہے۔ | اعلیٰ: علی جماعت کا سب سے لمبا لڑکا ہے۔", "مثبت: ڪلاس ۾ ڪو ٻيو ڇوڪرو علي جيترو ڊگهو ناهي. | تقابلي: علي ڪلاس جي ڪنهن به ٻئي ڇوڪري کان وڌيڪ ڊگهو آهي. | اعليٰ: علي ڪلاس جو سڀ کان ڊگهو ڇوڪرو آهي."],
          ["Positive: No other city in Pakistan is as large as Karachi. | Comparative: Karachi is larger than any other city in Pakistan. | Superlative: Karachi is the largest city in Pakistan.", "مثبت: پاکستان کا کوئی دوسرا شہر کراچی جتنا بڑا نہیں۔ | تقابلی: کراچی پاکستان کے کسی بھی دوسرے شہر سے بڑا ہے۔ | اعلیٰ: کراچی پاکستان کا سب سے بڑا شہر ہے۔", "مثبت: پاڪستان جو ڪو ٻيو شهر ڪراچي جيترو وڏو ناهي. | تقابلي: ڪراچي پاڪستان جي ڪنهن به ٻئي شهر کان وڏو آهي. | اعليٰ: ڪراچي پاڪستان جو سڀ کان وڏو شهر آهي."],
          ["Positive: Very few metals are as useful as iron. | Comparative: Iron is more useful than most other metals. | Superlative: Iron is one of the most useful metals.", "مثبت: بہت کم دھاتیں لوہے جتنی مفید ہیں۔ | تقابلی: لوہا زیادہ تر دوسری دھاتوں سے زیادہ مفید ہے۔ | اعلیٰ: لوہا سب سے زیادہ مفید دھاتوں میں سے ایک ہے۔", "مثبت: تمام ٿوريون ڌاتون لوهه جيتريون فائديمند آهن. | تقابلي: لوهه گهڻين ٻين ڌاتن کان وڌيڪ فائديمند آهي. | اعليٰ: لوهه سڀ کان فائديمند ڌاتن مان هڪ آهي."],
          ["Positive: No other girl in the team is as fast as Sara. | Comparative: Sara is faster than any other girl in the team. | Superlative: Sara is the fastest girl in the team.", "مثبت: ٹیم کی کوئی دوسری لڑکی سارہ جتنی تیز نہیں۔ | تقابلی: سارہ ٹیم کی کسی بھی دوسری لڑکی سے تیز ہے۔ | اعلیٰ: سارہ ٹیم کی سب سے تیز لڑکی ہے۔", "مثبت: ٽيم جي ڪا ٻي ڇوڪري سارا جيتري تيز ناهي. | تقابلي: سارا ٽيم جي ڪنهن به ٻي ڇوڪري کان تيز آهي. | اعليٰ: سارا ٽيم جي سڀ کان تيز ڇوڪري آهي."],
          ["Positive: Very few animals are as large as the elephant. | Comparative: The elephant is larger than most other animals. | Superlative: The elephant is one of the largest animals.", "مثبت: بہت کم جانور ہاتھی جتنے بڑے ہیں۔ | تقابلی: ہاتھی زیادہ تر دوسرے جانوروں سے بڑا ہے۔ | اعلیٰ: ہاتھی سب سے بڑے جانوروں میں سے ایک ہے۔", "مثبت: تمام ٿورا جانور هاٿي جيترا وڏا آهن. | تقابلي: هاٿي گهڻن ٻين جانورن کان وڏو آهي. | اعليٰ: هاٿي سڀ کان وڏن جانورن مان هڪ آهي."],
          ["Positive: No other subject is as interesting to me as English. | Comparative: English is more interesting to me than any other subject. | Superlative: English is the most interesting subject to me.", "مثبت: میرے لیے کوئی دوسرا مضمون انگریزی جتنا دلچسپ نہیں۔ | تقابلی: انگریزی میرے لیے کسی بھی دوسرے مضمون سے زیادہ دلچسپ ہے۔ | اعلیٰ: انگریزی میرے لیے سب سے دلچسپ مضمون ہے۔", "مثبت: مون لاءِ ڪو ٻيو مضمون انگريزي جيترو دلچسپ ناهي. | تقابلي: انگريزي مون لاءِ ڪنهن به ٻئي مضمون کان وڌيڪ دلچسپ آهي. | اعليٰ: انگريزي مون لاءِ سڀ کان دلچسپ مضمون آهي."],
          ["Positive: No other mountain in the world is as high as Mount Everest. | Comparative: Mount Everest is higher than any other mountain in the world. | Superlative: Mount Everest is the highest mountain in the world.", "مثبت: دنیا کا کوئی دوسرا پہاڑ ماؤنٹ ایورسٹ جتنا بلند نہیں۔ | تقابلی: ماؤنٹ ایورسٹ دنیا کے کسی بھی دوسرے پہاڑ سے بلند ہے۔ | اعلیٰ: ماؤنٹ ایورسٹ دنیا کا سب سے بلند پہاڑ ہے۔", "مثبت: دنيا جو ڪو ٻيو جبل مائونٽ ايورسٽ جيترو اوچو ناهي. | تقابلي: مائونٽ ايورسٽ دنيا جي ڪنهن به ٻئي جبل کان اوچو آهي. | اعليٰ: مائونٽ ايورسٽ دنيا جو سڀ کان اوچو جبل آهي."],
          ["Positive: Very few students are as hardworking as Ayesha. | Comparative: Ayesha is more hardworking than most other students. | Superlative: Ayesha is one of the most hardworking students.", "مثبت: بہت کم طلبہ عائشہ جتنے محنتی ہیں۔ | تقابلی: عائشہ زیادہ تر دوسرے طلبہ سے زیادہ محنتی ہے۔ | اعلیٰ: عائشہ سب سے محنتی طلبہ میں سے ایک ہے۔", "مثبت: تمام ٿورا شاگرد عائشه جيترا محنتي آهن. | تقابلي: عائشه گهڻن ٻين شاگردن کان وڌيڪ محنتي آهي. | اعليٰ: عائشه سڀ کان محنتي شاگردن مان هڪ آهي."],
          ["Positive: No other animal is as faithful as the dog. | Comparative: The dog is more faithful than any other animal. | Superlative: The dog is the most faithful animal.", "مثبت: کوئی دوسرا جانور کتے جتنا وفادار نہیں۔ | تقابلی: کتا کسی بھی دوسرے جانور سے زیادہ وفادار ہے۔ | اعلیٰ: کتا سب سے وفادار جانور ہے۔", "مثبت: ڪو ٻيو جانور ڪتي جيترو وفادار ناهي. | تقابلي: ڪتو ڪنهن به ٻئي جانور کان وڌيڪ وفادار آهي. | اعليٰ: ڪتو سڀ کان وفادار جانور آهي."],
          ["Positive: No other metal is as precious as gold. | Comparative: Gold is more precious than any other metal. | Superlative: Gold is the most precious metal.", "مثبت: کوئی دوسری دھات سونے جتنی قیمتی نہیں۔ | تقابلی: سونا کسی بھی دوسری دھات سے زیادہ قیمتی ہے۔ | اعلیٰ: سونا سب سے قیمتی دھات ہے۔", "مثبت: ڪا ٻي ڌات سون جيتري قيمتي ناهي. | تقابلي: سون ڪنهن به ٻي ڌات کان وڌيڪ قيمتي آهي. | اعليٰ: سون سڀ کان قيمتي ڌات آهي."],
          ["Positive: Very few places are as beautiful as Kashmir. | Comparative: Kashmir is more beautiful than most other places. | Superlative: Kashmir is one of the most beautiful places.", "مثبت: بہت کم جگہیں کشمیر جتنی خوبصورت ہیں۔ | تقابلی: کشمیر زیادہ تر دوسری جگہوں سے زیادہ خوبصورت ہے۔ | اعلیٰ: کشمیر خوبصورت ترین جگہوں میں سے ایک ہے۔", "مثبت: تمام ٿوريون جايون ڪشمير جيتريون سهڻيون آهن. | تقابلي: ڪشمير گهڻين ٻين جاين کان وڌيڪ سهڻو آهي. | اعليٰ: ڪشمير سڀ کان سهڻين جاين مان هڪ آهي."],
          ["Positive: No other player on the team is as strong as Hamza. | Comparative: Hamza is stronger than any other player on the team. | Superlative: Hamza is the strongest player on the team.", "مثبت: ٹیم کا کوئی دوسرا کھلاڑی حمزہ جتنا طاقتور نہیں۔ | تقابلی: حمزہ ٹیم کے کسی بھی دوسرے کھلاڑی سے زیادہ طاقتور ہے۔ | اعلیٰ: حمزہ ٹیم کا سب سے طاقتور کھلاڑی ہے۔", "مثبت: ٽيم جو ڪو ٻيو رانديگر حمزه جيترو طاقتور ناهي. | تقابلي: حمزه ٽيم جي ڪنهن به ٻئي رانديگر کان وڌيڪ طاقتور آهي. | اعليٰ: حمزه ٽيم جو سڀ کان طاقتور رانديگر آهي."],
          ["Positive: No other river in Pakistan is as long as the Indus. | Comparative: The Indus is longer than any other river in Pakistan. | Superlative: The Indus is the longest river in Pakistan.", "مثبت: پاکستان کا کوئی دوسرا دریا دریائے سندھ جتنا لمبا نہیں۔ | تقابلی: دریائے سندھ پاکستان کے کسی بھی دوسرے دریا سے لمبا ہے۔ | اعلیٰ: دریائے سندھ پاکستان کا سب سے لمبا دریا ہے۔", "مثبت: پاڪستان جو ڪو ٻيو درياهه سنڌو درياهه جيترو ڊگهو ناهي. | تقابلي: سنڌو درياهه پاڪستان جي ڪنهن به ٻئي درياهه کان ڊگهو آهي. | اعليٰ: سنڌو درياهه پاڪستان جو سڀ کان ڊگهو درياهه آهي."],
          ["Positive: Very few books are as useful as this dictionary. | Comparative: This dictionary is more useful than most other books. | Superlative: This dictionary is one of the most useful books.", "مثبت: بہت کم کتابیں اس لغت جتنی مفید ہیں۔ | تقابلی: یہ لغت زیادہ تر دوسری کتابوں سے زیادہ مفید ہے۔ | اعلیٰ: یہ لغت سب سے مفید کتابوں میں سے ایک ہے۔", "مثبت: تمام ٿورا ڪتاب هن لغت جيترا فائديمند آهن. | تقابلي: هي لغت گهڻن ٻين ڪتابن کان وڌيڪ فائديمند آهي. | اعليٰ: هي لغت سڀ کان فائديمند ڪتابن مان هڪ آهي."],
          ["Positive: No other month is as hot as June here. | Comparative: June is hotter than any other month here. | Superlative: June is the hottest month here.", "مثبت: یہاں کوئی دوسرا مہینہ جون جتنا گرم نہیں۔ | تقابلی: یہاں جون کسی بھی دوسرے مہینے سے زیادہ گرم ہے۔ | اعلیٰ: یہاں جون سب سے گرم مہینہ ہے۔", "مثبت: هتي ڪو ٻيو مهينو جون جيترو گرم ناهي. | تقابلي: هتي جون ڪنهن به ٻئي مهيني کان وڌيڪ گرم آهي. | اعليٰ: هتي جون سڀ کان گرم مهينو آهي."],
          ["Positive: No other student in the class is as careful as Bilal. | Comparative: Bilal is more careful than any other student in the class. | Superlative: Bilal is the most careful student in the class.", "مثبت: جماعت کا کوئی دوسرا طالب علم بلال جتنا محتاط نہیں۔ | تقابلی: بلال جماعت کے کسی بھی دوسرے طالب علم سے زیادہ محتاط ہے۔ | اعلیٰ: بلال جماعت کا سب سے زیادہ محتاط طالب علم ہے۔", "مثبت: ڪلاس جو ڪو ٻيو شاگرد بلال جيترو خبردار ناهي. | تقابلي: بلال ڪلاس جي ڪنهن به ٻئي شاگرد کان وڌيڪ خبردار آهي. | اعليٰ: بلال ڪلاس جو سڀ کان وڌيڪ خبردار شاگرد آهي."],
          ["Positive: Very few inventions are as important as the computer. | Comparative: The computer is more important than most other inventions. | Superlative: The computer is one of the most important inventions.", "مثبت: بہت کم ایجادات کمپیوٹر جتنی اہم ہیں۔ | تقابلی: کمپیوٹر زیادہ تر دوسری ایجادات سے زیادہ اہم ہے۔ | اعلیٰ: کمپیوٹر اہم ترین ایجادات میں سے ایک ہے۔", "مثبت: تمام ٿوريون ايجادون ڪمپيوٽر جيتريون اهم آهن. | تقابلي: ڪمپيوٽر گهڻين ٻين ايجادن کان وڌيڪ اهم آهي. | اعليٰ: ڪمپيوٽر اهم ترين ايجادن مان هڪ آهي."],
          ["Positive: No other season is as cold as winter. | Comparative: Winter is colder than any other season. | Superlative: Winter is the coldest season.", "مثبت: کوئی دوسرا موسم سردیوں جتنا ٹھنڈا نہیں۔ | تقابلی: سردیاں کسی بھی دوسرے موسم سے زیادہ ٹھنڈی ہیں۔ | اعلیٰ: سردیاں سب سے ٹھنڈا موسم ہیں۔", "مثبت: ڪو ٻيو موسم سياري جيترو ٿڌو ناهي. | تقابلي: سيارو ڪنهن به ٻئي موسم کان وڌيڪ ٿڌو آهي. | اعليٰ: سيارو سڀ کان ٿڌو موسم آهي."],
          ["Positive: No other person in the family is as old as my grandfather. | Comparative: My grandfather is older than any other person in the family. | Superlative: My grandfather is the oldest person in the family.", "مثبت: خاندان میں کوئی دوسرا شخص میرے دادا جتنا عمر رسیدہ نہیں۔ | تقابلی: میرے دادا خاندان کے کسی بھی دوسرے شخص سے زیادہ عمر رسیدہ ہیں۔ | اعلیٰ: میرے دادا خاندان کے سب سے عمر رسیدہ فرد ہیں۔", "مثبت: ڪٽنب ۾ ڪو ٻيو ماڻهو منهنجي ڏاڏي جيترو وڏي عمر وارو ناهي. | تقابلي: منهنجو ڏاڏو ڪٽنب جي ڪنهن به ٻئي ماڻهو کان وڏي عمر وارو آهي. | اعليٰ: منهنجو ڏاڏو ڪٽنب جو سڀ کان وڏي عمر وارو ماڻهو آهي."],
          ["Positive: Very few languages are as widely spoken as English. | Comparative: English is more widely spoken than most other languages. | Superlative: English is one of the most widely spoken languages.", "مثبت: بہت کم زبانیں انگریزی کی طرح وسیع پیمانے پر بولی جاتی ہیں۔ | تقابلی: انگریزی زیادہ تر دوسری زبانوں سے زیادہ وسیع پیمانے پر بولی جاتی ہے۔ | اعلیٰ: انگریزی سب سے زیادہ بولی جانے والی زبانوں میں سے ایک ہے۔", "مثبت: تمام ٿوريون ٻوليون انگريزيءَ وانگر وڏي پيماني تي ڳالهايون وڃن ٿيون. | تقابلي: انگريزي گهڻين ٻين ٻولين کان وڌيڪ وڏي پيماني تي ڳالهائي وڃي ٿي. | اعليٰ: انگريزي سڀ کان وڌيڪ ڳالهائجندڙ ٻولين مان هڪ آهي."]
        ]
      }
      },
      {
        title: "Adjectives Used as Nouns",
        english: "Adjectives are words that normally describe nouns or pronouns, but in certain sentences they can be used in place of nouns. When an adjective is used in this way, it is called an adjective used as a noun, or a substantivised adjective. It does not simply describe a person or group; it represents that person or group in the sentence. For example, in “The rich should help the poor,” the words rich and poor refer to rich people and poor people. The nouns people are understood even though they are not written. This use makes language shorter and avoids repeating the same noun.\n\nA common pattern is the + adjective. The expression usually refers to a whole class or group of people who share a particular quality, condition, age, nationality or social position. Examples include the rich, the poor, the blind, the deaf, the elderly, the young, the unemployed and the injured. In this pattern, the adjective normally takes a plural meaning and is followed by a plural verb when it is the subject: “The elderly need care,” and “The unemployed are looking for work.” We do not normally add -s to the adjective in this construction. Therefore, write “the poor,” not “the poors,” when referring generally to poor people.\n\nThese expressions usually refer to people, but a few established expressions refer to groups, ideas or abstract categories. “The unknown” can mean things that are not known; “the supernatural” refers to things beyond ordinary natural explanation; and “the impossible” refers to things that cannot be done. The exact meaning depends on the context. For example, “The unknown frightens some people” treats unknown as an idea rather than as a description of a named noun.\n\nNot every adjective can be used naturally with the. The expression must be established and understandable in context. We can say “the rich” and “the sick,” but it would sound unusual to use every descriptive adjective in the same way. Also, the + adjective does not always refer to people. In “the beautiful,” it may refer to beautiful things or qualities in a general or literary sense. In “the accused,” it refers to a person or people formally accused of an offence. Learn common expressions as vocabulary rather than assuming that every adjective follows one automatic rule.\n\nThere is an important difference between a substantivised adjective and an adjective placed before an omitted noun. In “the red one is mine,” the noun is omitted but the word one stands in its place; red is still an adjective describing one. In “the rich are generous,” there is no written noun or one after rich: the whole expression the rich functions as a noun phrase meaning rich people. This is the central feature of adjectives used as nouns.\n\nAdjectives can also be used as nouns when a particular person or group is understood from the situation. For example, “The accused was brought before the judge” uses accused as a noun referring to the person accused. “The deceased left a will” uses deceased to refer respectfully to a dead person. Such forms are common in formal, legal, news and official language. Some are singular in meaning, so they take a singular verb (“The accused is present”), while group expressions such as “the accused were questioned” take a plural verb when they refer to several people. The verb must agree with the meaning, not merely with the appearance of the adjective.\n\nWhen writing, pay attention to number and agreement. Most general group expressions such as the rich, the poor and the blind are plural and take plural verbs. If you need to refer to one individual, use a suitable noun phrase: “a poor person,” “a blind woman,” or “an elderly man.” Avoid saying “a rich” or “two poors” in ordinary standard English. Instead say “a rich person” and “two poor people.” Some expressions, such as the accused or the deceased, can be singular or plural depending on context and the verb makes the intended number clear.\n\nAdjectives used as nouns are useful because they make sentences concise, formal and expressive. They appear frequently in everyday speech, literature, newspapers, public discussion and formal writing. Remember three points: the adjective represents a person, group or idea; the meaning is supplied by context; and the verb agrees with whether the expression is singular or plural.",
        urdu: "جب کوئی صفت کسی اسم کی وضاحت کرنے کے بجائے خود اسم یا اسم کے فقرے کی جگہ استعمال ہو تو اسے Adjective Used as a Noun یا Substantivised Adjective کہتے ہیں۔ مثال کے طور پر “The rich should help the poor” میں rich سے مراد امیر لوگ اور poor سے مراد غریب لوگ ہیں۔ لفظ people لکھا نہیں گیا لیکن معنی میں موجود ہے۔ عام طور پر the + adjective پوری جماعت یا گروہ کے لیے استعمال ہوتا ہے، جیسے the rich، the poor، the blind، the elderly اور the unemployed۔ ایسے گروہی الفاظ عموماً جمع کے معنی دیتے ہیں، اس لیے ان کے ساتھ جمع فعل آتا ہے: “The elderly need care.” اس ساخت میں صفت کے ساتھ عموماً s نہیں لگاتے؛ “the poors” کے بجائے “the poor” لکھتے ہیں۔ کچھ الفاظ خیالات یا چیزوں کے مجموعے کے لیے بھی آتے ہیں، جیسے the unknown اور the impossible۔ ہر صفت اس طرح استعمال نہیں ہو سکتی؛ عام اور مستعمل تراکیب یاد رکھیں۔ “The red one” میں one اسم کی جگہ آیا ہے اور red اب بھی صفت ہے، لیکن “the rich” خود ایک اسم کا فقرہ ہے۔ بعض رسمی الفاظ جیسے the accused اور the deceased ایک شخص یا کئی افراد کے لیے استعمال ہو سکتے ہیں؛ فعل کا واحد یا جمع ہونا معنی کے مطابق ہوگا۔ ایک فرد کے لیے عام طور پر “a poor person” یا “an elderly woman” کہیں، “a poor” نہیں۔",
        sindhi: "جڏهن ڪا صفت اسم جي وضاحت ڪرڻ بدران پاڻ اسم يا اسمي فقرِي جي جاءِ تي استعمال ٿئي، تڏهن ان کي Adjective Used as a Noun يا Substantivised Adjective چئبو آهي. مثال “The rich should help the poor” ۾ rich مان مراد امير ماڻهو ۽ poor مان مراد غريب ماڻهو آهن. لفظ people لکيل ناهي، پر مطلب ۾ موجود آهي. عام طور the + adjective سڄي جماعت يا گروهه لاءِ ايندو آهي، جيئن the rich، the poor، the blind، the elderly ۽ the unemployed. اهڙيون ترڪيبون اڪثر جمع جي معنيٰ ڏين ٿيون، تنهنڪري انهن سان جمع فعل ايندو آهي: “The elderly need care.” هن جوڙجڪ ۾ صفت سان عام طور s نٿو لڳائجي؛ “the poors” بدران “the poor” لکبو آهي. ڪجهه لفظ خيالن يا شين جي مجموعي لاءِ به اچن ٿا، جيئن the unknown ۽ the impossible. هر صفت هن نموني استعمال نٿي ٿي سگهي؛ عام ۽ رائج ترڪيبون ياد رکو. “The red one” ۾ one اسم جي جاءِ تي آهي ۽ red اڃا به صفت آهي، پر “the rich” پاڻ اسمي فقرو آهي. رسمي لفظ the accused ۽ the deceased هڪ يا گهڻن ماڻهن لاءِ اچي سگهن ٿا؛ فعل واحد يا جمع معنيٰ موجب ٿيندو. هڪ فرد لاءِ “a poor person” يا “an elderly woman” چئو، “a poor” نه.",
        examples: [
          ["The rich should help the poor.", "امیر لوگوں کو غریبوں کی مدد کرنی چاہیے۔", "اميرن کي غريبن جي مدد ڪرڻ گهرجي."],
          ["The elderly need our respect.", "بزرگوں کو ہماری عزت کی ضرورت ہے۔", "وڏي عمر وارن کي اسان جي عزت جي ضرورت آهي."],
          ["The blind can read with Braille.", "نابینا افراد بریل کے ذریعے پڑھ سکتے ہیں۔", "انڌا ماڻهو بريل ذريعي پڙهي سگهن ٿا."],
          ["The unemployed are seeking jobs.", "بے روزگار لوگ ملازمتیں تلاش کر رہے ہیں۔", "بيروزگار ماڻهو نوڪريون ڳولي رهيا آهن."],
          ["The injured were taken to hospital.", "زخمیوں کو اسپتال لے جایا گیا۔", "زخمين کي اسپتال نيو ويو."],
          ["The young should learn from the old.", "نوجوانوں کو بزرگوں سے سیکھنا چاہیے۔", "نوجوانن کي وڏن کان سکڻ گهرجي."],
          ["The accused was brought before the judge.", "ملزم کو جج کے سامنے پیش کیا گیا۔", "ملزم کي جج آڏو پيش ڪيو ويو."],
          ["The deceased left a letter.", "مرحوم ایک خط چھوڑ گیا۔", "مرحوم هڪ خط ڇڏي ويو."],
          ["The unknown often makes people curious.", "نامعلوم چیزیں اکثر لوگوں میں تجسس پیدا کرتی ہیں۔", "اڻڄاتل شيون اڪثر ماڻهن ۾ تجسس پيدا ڪن ٿيون."],
          ["We should hope for the best.", "ہمیں بہترین کی امید رکھنی چاہیے۔", "اسان کي بهترين جي اميد رکڻ گهرجي."]
        ]
      }
      },
      {
        title: "Position of Adjectives",
        english: "The position of an adjective is the place it occupies in a sentence or phrase. In English, adjectives can appear in several positions depending on what they describe and how they are used. The most common position is before a noun. In “a beautiful garden,” beautiful comes before the noun garden and describes it. An adjective placed directly before a noun is called an attributive adjective. Several adjectives can also come before one noun, but they usually follow a natural order: opinion, size, age, shape, colour, origin, material and purpose. For example, “a lovely small old wooden box.” We do not normally arrange these words randomly.\n\nAdjectives can also come after a linking verb. Common linking verbs include be (am, is, are, was, were), seem, become, look, feel, sound, smell, taste and appear. In “The soup is hot,” hot follows the verb is and describes the subject soup. This is called the predicative position. The adjective does not describe the verb; it describes the subject. For example, “She looks happy” means that she appears happy.\n\nSome adjectives can be placed after the noun or pronoun they describe, especially when they are followed by a phrase or clause. Examples include “the people present,” “the only road available” and “something useful.” After indefinite pronouns such as something, anything, nothing, someone and anybody, adjectives normally come after the pronoun: “I need something cold,” not usually “I need cold something.” This position is called postpositive use.\n\nAdjectives can also follow the object of certain verbs. In “They painted the door red,” red describes the object door. In “We found the lesson difficult,” difficult describes the object lesson. Here the adjective is an object complement. It comes after the object and tells us the state or quality of that object.\n\nA few adjectives have a special position or meaning. Words such as asleep, awake, alive, afraid and alone are commonly used after a linking verb: “The baby is asleep” and “The child was afraid.” Some of these adjectives are not normally used directly before a noun in ordinary English. Instead of “an asleep baby,” we say “a sleeping baby.” Some adjectives such as main, chief, former and mere are generally used before nouns. Certain adjectives can change meaning according to position: “the concerned parents” means parents who are worried, while “the people concerned” means the people involved.\n\nRemember these basic patterns: adjective + noun (a clever student); linking verb + adjective (the student is clever); pronoun + adjective (something interesting); noun + adjective phrase (the people responsible); and object + adjective complement (They made him angry). Correct adjective position makes a sentence natural and clear.",
        urdu: "Adjective کی Position سے مراد جملے یا فقرے میں صفت کی جگہ ہے۔ انگریزی میں صفت مختلف جگہوں پر آ سکتی ہے۔ سب سے عام جگہ اسم سے پہلے ہے، جیسے “a beautiful garden” میں beautiful، garden کی وضاحت کرتا ہے۔ اسم سے پہلے آنے والی صفت کو Attributive Adjective کہتے ہیں۔ ایک اسم سے پہلے کئی صفات بھی آ سکتی ہیں، لیکن ان کی ترتیب عموماً رائے، جسامت، عمر، شکل، رنگ، اصل، مادہ اور مقصد کے مطابق ہوتی ہے، جیسے “a lovely small old wooden box”۔ صفات کو بے ترتیب نہیں رکھنا چاہیے۔\n\nصفت Linking Verb کے بعد بھی آتی ہے۔ عام linking verbs میں be کی صورتیں (am, is, are, was, were)، seem، become، look، feel، sound، smell، taste اور appear شامل ہیں۔ مثال “The soup is hot” میں hot، is کے بعد آ کر soup کی کیفیت بتاتا ہے۔ اسے Predicative Position کہتے ہیں۔ صفت یہاں فعل کی نہیں بلکہ Subject کی وضاحت کرتی ہے۔ “She looks happy” کا مطلب ہے کہ وہ خوش دکھائی دیتی ہے۔\n\nکچھ صفات اسم یا ضمیر کے بعد بھی آتی ہیں، خاص طور پر جب ان کے ساتھ کوئی فقرہ ہو، جیسے “the people present” اور “the only road available”۔ Something، anything، nothing، someone اور anybody جیسے indefinite pronouns کے بعد صفت عموماً آتی ہے: “I need something cold”۔ اسے Postpositive استعمال کہتے ہیں۔\n\nکچھ افعال کے Object کے بعد بھی صفت آتی ہے۔ “They painted the door red” میں red، door کی حالت بتاتا ہے۔ “We found the lesson difficult” میں difficult، lesson کی وضاحت کرتا ہے۔ اسے Object Complement کہتے ہیں۔\n\nAsleep، awake، alive، afraid اور alone جیسی بعض صفات عموماً linking verb کے بعد آتی ہیں: “The baby is asleep”۔ عام انگریزی میں “an asleep baby” نہیں کہتے، بلکہ “a sleeping baby” کہتے ہیں۔ Main، chief، former اور mere جیسی صفات عموماً اسم سے پہلے آتی ہیں۔ بعض صفات کی جگہ بدلنے سے معنی بھی بدل سکتا ہے: “the concerned parents” سے مراد پریشان والدین ہیں، جبکہ “the people concerned” سے مراد متعلقہ افراد ہیں۔\n\nاہم ساختیں یاد رکھیں: صفت + اسم (a clever student)، linking verb + صفت (the student is clever)، ضمیر + صفت (something interesting)، اسم + صفتی فقرہ (the people responsible)، اور object + صفت (They made him angry)۔ صفت کی درست جگہ جملے کو فطری اور واضح بناتی ہے۔",
        sindhi: "Adjective جي Position مان مراد جملي يا فقري ۾ صفت جي جاءِ آهي. انگريزيءَ ۾ صفت مختلف هنڌن تي اچي سگهي ٿي. سڀ کان عام جاءِ اسم کان اڳ آهي، جيئن “a beautiful garden” ۾ beautiful، garden جي وضاحت ڪري ٿو. اسم کان اڳ ايندڙ صفت کي Attributive Adjective چئبو آهي. هڪ اسم کان اڳ ڪيتريون صفتون به اچي سگهن ٿيون، پر انهن جي ترتيب عام طور راءِ، ماپ، عمر، شڪل، رنگ، اصل، مادو ۽ مقصد موجب هوندي آهي، جيئن “a lovely small old wooden box”. صفتن کي بي ترتيب نه رکڻ گهرجي.\n\nصفت Linking Verb کان پوءِ به اچي سگهي ٿي. عام linking verbs ۾ be جون صورتون (am, is, are, was, were)، seem، become، look، feel، sound، smell، taste ۽ appear شامل آهن. مثال “The soup is hot” ۾ hot، is کان پوءِ اچي soup جي حالت ٻڌائي ٿو. هن کي Predicative Position چئبو آهي. هتي صفت فعل جي نه، پر Subject جي وضاحت ڪري ٿي. “She looks happy” جو مطلب آهي ته هوءَ خوش نظر اچي ٿي.\n\nڪجهه صفتون اسم يا ضمير کان پوءِ به اچن ٿيون، خاص طور جڏهن انهن سان ڪو فقرو هجي، جيئن “the people present” ۽ “the only road available”. Something، anything، nothing، someone ۽ anybody جهڙن indefinite pronouns کان پوءِ صفت عام طور اچي ٿي: “I need something cold”. هن استعمال کي Postpositive استعمال چئبو آهي.\n\nڪجهه فعلن جي Object کان پوءِ به صفت اچي ٿي. “They painted the door red” ۾ red، door جي حالت ٻڌائي ٿو. “We found the lesson difficult” ۾ difficult، lesson جي وضاحت ڪري ٿو. هن کي Object Complement چئبو آهي.\n\nAsleep، awake، alive، afraid ۽ alone جهڙيون ڪجهه صفتون عام طور linking verb کان پوءِ اچن ٿيون: “The baby is asleep”. عام انگريزيءَ ۾ “an asleep baby” نٿا چئون، پر “a sleeping baby” چئون ٿا. Main، chief، former ۽ mere جهڙيون صفتون عام طور اسم کان اڳ اينديون آهن. ڪجهه صفتن جي جاءِ بدلائڻ سان معنيٰ به بدلجي سگهي ٿي: “the concerned parents” مان مراد پريشان والدين آهن، جڏهن ته “the people concerned” مان مراد لاڳاپيل ماڻهو آهن.\n\nهي بنيادي جوڙجڪون ياد رکو: صفت + اسم (a clever student)، linking verb + صفت (the student is clever)، ضمير + صفت (something interesting)، اسم + صفت وارو فقرو (the people responsible)، ۽ object + صفت (They made him angry). صفت جي صحيح جاءِ جملي کي فطري ۽ صاف بڻائي ٿي.",
        examples: [
          ["A clever student answered the question.", "ایک ذہین طالب علم نے سوال کا جواب دیا۔", "هڪ هوشيار شاگرد سوال جو جواب ڏنو."],
          ["She bought a red dress.", "اس نے ایک سرخ لباس خریدا۔", "هن هڪ ڳاڙهو لباس خريد ڪيو."],
          ["The weather is pleasant.", "موسم خوشگوار ہے۔", "موسم وڻندڙ آهي."],
          ["The children seem happy.", "بچے خوش دکھائی دیتے ہیں۔", "ٻار خوش نظر اچن ٿا."],
          ["This tea tastes sweet.", "اس چائے کا ذائقہ میٹھا ہے۔", "هن چانهه جو ذائقو مٺو آهي."],
          ["He became famous.", "وہ مشہور ہو گیا۔", "هو مشهور ٿي ويو."],
          ["I need something cold.", "مجھے کوئی ٹھنڈی چیز چاہیے۔", "مون کي ڪا ٿڌي شيءِ گهرجي."],
          ["There is nothing important here.", "یہاں کوئی اہم چیز نہیں ہے۔", "هتي ڪا اهم شيءِ ناهي."],
          ["The people present applauded.", "موجود لوگوں نے تالیاں بجائیں۔", "موجود ماڻهن تاڙيون وڄايون."],
          ["The only seat available is near the door.", "واحد دستیاب نشست دروازے کے قریب ہے۔", "واحد موجود سيٽ دروازي جي ويجهو آهي."],
          ["The baby is asleep.", "بچہ سو رہا ہے۔", "ٻار ستل آهي."],
          ["The birds are alive.", "پرندے زندہ ہیں۔", "پکي جيئرا آهن."],
          ["She felt nervous before the test.", "وہ امتحان سے پہلے گھبرائی ہوئی محسوس کر رہی تھی۔", "هوءَ امتحان کان اڳ گهٻرايل محسوس ڪري رهي هئي."],
          ["They painted the wall blue.", "انہوں نے دیوار کو نیلا رنگ کیا۔", "انهن ڀت کي نيرو رنگ ڏنو."],
          ["We found the puzzle difficult.", "ہم نے پہیلی کو مشکل پایا۔", "اسان کي ڳجهارت ڏکي لڳي."],
          ["The news made everyone sad.", "اس خبر نے سب کو اداس کر دیا۔", "ان خبر سڀني کي اداس ڪري ڇڏيو."],
          ["He is a tall, young, Pakistani cricketer.", "وہ ایک لمبا، نوجوان پاکستانی کرکٹر ہے۔", "هو هڪ ڊگهو، نوجوان پاڪستاني ڪرڪيٽر آهي."],
          ["She lives in a beautiful old house.", "وہ ایک خوبصورت پرانے گھر میں رہتی ہے۔", "هوءَ هڪ سهڻي پراڻي گهر ۾ رهي ٿي."],
          ["The concerned parents contacted the school.", "پریشان والدین نے اسکول سے رابطہ کیا۔", "پريشان والدين اسڪول سان رابطو ڪيو."],
          ["The people concerned will receive a letter.", "متعلقہ لوگوں کو ایک خط ملے گا۔", "لاڳاپيل ماڻهن کي هڪ خط ملندو."]
        ]
      }
      },
      {
        title: "The Correct Use of Some and Any",
        english: "Some and any are determiners commonly used with plural countable nouns and uncountable nouns. They tell us about an indefinite quantity or number, without stating an exact amount. Some is generally used in affirmative statements: “I have some books” and “There is some water in the jug.” It can be used with plural countable nouns such as books, apples and students, and with uncountable nouns such as water, milk, sugar and information.\n\nAny is generally used in negative statements and questions: “I do not have any money” and “Do you have any questions?” With uncountable nouns, any refers to an unspecified amount; with plural countable nouns, it refers to an unspecified number. In questions, some is often used when the speaker expects or hopes for a positive answer, or when making an offer or request: “Would you like some tea?” “Could I have some water?” Thus, the choice is not simply a mechanical rule that some is always affirmative and any is always interrogative or negative; the speaker's intention matters.\n\nAny can also be used in affirmative sentences to mean “it does not matter which” or “whichever.” For example, “You may choose any book” means that you may choose one book without restriction. “Any student can answer this question” means every student is able to answer it. Some can also mean “a certain” when the exact person or thing is not known: “Some man called you.” Use some and any with the noun forms they naturally accompany, and remember that they do not normally take a singular countable noun alone. Say “some books,” “some water,” “any book” or “any information,” not “some book” when you mean an unspecified plural quantity.",
        urdu: "Some اور any غیر معین تعداد یا مقدار بتانے کے لیے استعمال ہوتے ہیں۔ یہ plural countable nouns اور uncountable nouns کے ساتھ آتے ہیں۔ Some عموماً مثبت جملوں میں استعمال ہوتا ہے: “I have some books” یعنی میرے پاس کچھ کتابیں ہیں، اور “There is some water” یعنی کچھ پانی موجود ہے۔ Books، apples اور students قابلِ شمار جمع اسم ہیں، جبکہ water، milk، sugar اور information ناقابلِ شمار اسم ہیں۔\n\nAny عموماً منفی جملوں اور سوالات میں آتا ہے: “I do not have any money” یعنی میرے پاس بالکل پیسے نہیں ہیں، اور “Do you have any questions?” یعنی کیا آپ کے کوئی سوال ہیں؟ سوال میں some اس وقت بھی آتا ہے جب بولنے والا مثبت جواب کی توقع رکھتا ہو یا پیشکش اور درخواست کر رہا ہو، جیسے “Would you like some tea?” یعنی کیا آپ چائے لینا پسند کریں گے؟ اس لیے یہ اصول یاد رکھیں کہ some صرف مثبت اور any صرف سوالیہ جملوں کے لیے نہیں؛ بولنے والے کا مقصد بھی اہم ہے۔\n\nAny مثبت جملے میں “کوئی بھی” کے معنی میں بھی آتا ہے، جیسے “You may choose any book” یعنی آپ کوئی بھی کتاب منتخب کر سکتے ہیں۔ Some کبھی “ایک خاص مگر غیر متعین” کے معنی میں آتا ہے، جیسے “Some man called you” یعنی کسی شخص نے آپ کو فون کیا۔ Some اور any کو اسم کے ساتھ درست صورت میں استعمال کریں: some books، some water، any book اور any information۔",
        sindhi: "Some ۽ any غير مقرر تعداد يا مقدار ڏيکارڻ لاءِ استعمال ٿيندا آهن. اهي جمع countable nouns ۽ uncountable nouns سان ايندا آهن. Some عام طور هاڪاري جملن ۾ استعمال ٿيندو آهي: “I have some books” يعني مون وٽ ڪجهه ڪتاب آهن، ۽ “There is some water” يعني ڪجهه پاڻي موجود آهي. Books، apples ۽ students ڳڻپ لائق جمع اسم آهن، جڏهن ته water، milk، sugar ۽ information اڻ ڳڻپ لائق اسم آهن.\n\nAny عام طور ناڪاري جملن ۽ سوالن ۾ ايندو آهي: “I do not have any money” يعني مون وٽ بلڪل پئسا ناهن، ۽ “Do you have any questions?” يعني ڇا توهان جا ڪي سوال آهن؟ سوال ۾ some تڏهن به ايندو آهي جڏهن ڳالهائيندڙ هاڪاري جواب جي اميد رکي يا ڪا آڇ يا درخواست ڪري، جيئن “Would you like some tea?” يعني ڇا توهان چانهه وٺڻ پسند ڪندا؟ تنهنڪري some رڳو هاڪاري ۽ any رڳو سوالن لاءِ ناهي؛ ڳالهائيندڙ جو مقصد به اهم آهي.\n\nAny هاڪاري جملي ۾ “ڪو به” جي معنيٰ ۾ به ايندو آهي، جيئن “You may choose any book” يعني توهان ڪو به ڪتاب چونڊي سگهو ٿا. Some ڪڏهن “ڪو خاص پر اڻڄاتل” جي معنيٰ ڏئي ٿو، جيئن “Some man called you” يعني ڪنهن ماڻهو توهان کي فون ڪيو. Some ۽ any کي اسم سان صحيح نموني استعمال ڪريو: some books، some water، any book ۽ any information.",
        examples: [
          ["I bought some apples.", "میں نے کچھ سیب خریدے۔", "مون ڪجهه صوف خريد ڪيا."],
          ["There is some milk in the fridge.", "فریج میں کچھ دودھ ہے۔", "فرج ۾ ڪجهه کير آهي."],
          ["She needs some information.", "اسے کچھ معلومات درکار ہیں۔", "هن کي ڪجهه ڄاڻ گهرجي."],
          ["Would you like some tea?", "کیا آپ چائے لینا پسند کریں گے؟", "ڇا توهان چانهه وٺڻ پسند ڪندا؟"],
          ["Please give me some water.", "براہِ کرم مجھے کچھ پانی دیں۔", "مهرباني ڪري مون کي ڪجهه پاڻي ڏيو."],
          ["I do not have any money.", "میرے پاس بالکل پیسے نہیں ہیں۔", "مون وٽ بلڪل پئسا ناهن."],
          ["Are there any students in the classroom?", "کیا جماعت میں کوئی طالب علم موجود ہیں؟", "ڇا ڪلاس ۾ ڪي شاگرد موجود آهن؟"],
          ["We did not see any birds.", "ہم نے کوئی پرندے نہیں دیکھے۔", "اسان ڪو به پکي نه ڏٺو."],
          ["You can take any seat.", "آپ کوئی بھی نشست لے سکتے ہیں۔", "توهان ڪا به سيٽ وٺي سگهو ٿا."],
          ["Some person left this umbrella here.", "کسی شخص نے یہ چھتری یہاں چھوڑی ہے۔", "ڪنهن ماڻهو هيءَ ڇٽي هتي ڇڏي آهي."]
        ]
      }      },
      {
        title: "The Correct Use of Each and Every",
        english: "Each and every are used with singular countable nouns and usually take a singular verb. Both refer to all the members of a group, but they present the group from slightly different viewpoints. Each focuses on the members individually, one by one. Every views the members collectively as a complete group and emphasizes that the statement applies to all of them.\n\nUse each when you want to draw attention to individuals separately: “Each student received a certificate.” This means that the students were considered one at a time and every individual received a certificate. Each can be used before a singular noun (“each child”), after a subject (“They each have a ticket”), and with of + a plural noun or pronoun (“each of the boys,” “each of them”). When each of is used, the noun or pronoun after of is plural, but the verb is normally singular: “Each of the players is ready.”\n\nEvery is used before a singular noun to refer to all members without exception: “Every student must attend.” It cannot normally be used directly with of; say “every one of the students,” not “every of the students.” Every is common with words such as day, week, month and year to express regular intervals: “I exercise every day.” It can also be used in expressions such as every one, every single and every other day.\n\nEach is suitable for two or more people or things, while every is generally used for three or more when considering a group. In ordinary usage, however, every often gives a general statement about all members of a group. Remember that each and every are followed by a singular countable noun and a singular verb: “Each boy is,” “Every girl has.” Do not write “Each students are” or “Every student have.”",
        urdu: "Each اور every دونوں ہر فرد یا ہر چیز کی طرف اشارہ کرتے ہیں۔ ان کے بعد عموماً واحد قابلِ شمار اسم اور واحد فعل آتا ہے، لیکن دونوں کے مفہوم میں معمولی فرق ہے۔ Each افراد کو ایک ایک کر کے الگ الگ دیکھتا ہے، جبکہ every پورے گروہ کے تمام افراد پر زور دیتا ہے۔\n\nEach اس وقت استعمال کریں جب ہر فرد کو الگ اہمیت دینی ہو: “Each student received a certificate” یعنی ہر طالب علم نے ایک سرٹیفکیٹ حاصل کیا۔ Each اسم سے پہلے آ سکتا ہے، جیسے each child؛ subject کے بعد بھی آ سکتا ہے، جیسے “They each have a ticket”؛ اور of کے ساتھ بھی استعمال ہوتا ہے، جیسے “each of the boys” یا “each of them”۔ Each of کے بعد اسم یا ضمیر جمع ہوتا ہے، لیکن فعل عموماً واحد آتا ہے: “Each of the players is ready.”\n\nEvery واحد اسم سے پہلے آتا ہے اور گروہ کے تمام افراد کو بغیر استثنا شامل کرتا ہے: “Every student must attend” یعنی ہر طالب علم کو حاضر ہونا ضروری ہے۔ Every براہِ راست of کے ساتھ استعمال نہیں ہوتا؛ “every of the students” کے بجائے “every one of the students” کہیں۔ روزمرہ معمول کے لیے every day، every week، every month اور every year استعمال ہوتے ہیں۔ Every one، every single اور every other day بھی عام تراکیب ہیں۔\n\nEach دو یا دو سے زیادہ افراد یا چیزوں کے لیے آ سکتا ہے، جبکہ every عموماً تین یا زیادہ کے گروہ کے لیے استعمال ہوتا ہے۔ یاد رکھیں کہ each اور every کے بعد واحد اسم اور واحد فعل آتا ہے: “Each boy is”، “Every girl has”۔ “Each students are” اور “Every student have” غلط ہیں۔",
        sindhi: "Each ۽ every ٻئي هر ماڻهو يا هر شيءِ ڏانهن اشارو ڪن ٿا. انهن کان پوءِ عام طور واحد ڳڻپ لائق اسم ۽ واحد فعل ايندو آهي، پر ٻنهي جي معنيٰ ۾ ٿورو فرق آهي. Each ماڻهن کي هڪ هڪ ڪري الڳ ڏسي ٿو، جڏهن ته every سڄي گروهه جي سڀني ماڻهن تي زور ڏئي ٿو.\n\nEach تڏهن استعمال ڪريو جڏهن هر فرد کي الڳ اهميت ڏيڻي هجي: “Each student received a certificate” يعني هر شاگرد سرٽيفڪيٽ حاصل ڪيو. Each اسم کان اڳ اچي سگهي ٿو، جيئن each child؛ فاعل کان پوءِ به اچي سگهي ٿو، جيئن “They each have a ticket”؛ ۽ of سان به استعمال ٿئي ٿو، جيئن “each of the boys” يا “each of them”. Each of کان پوءِ اسم يا ضمير جمع هوندو آهي، پر فعل عام طور واحد ايندو آهي: “Each of the players is ready.”\n\nEvery واحد اسم کان اڳ اچي ٿو ۽ گروهه جي سڀني ماڻهن کي بنا ڪنهن استثنا جي شامل ڪري ٿو: “Every student must attend” يعني هر شاگرد لاءِ حاضر ٿيڻ ضروري آهي. Every سڌو of سان استعمال نٿو ٿئي؛ “every of the students” بدران “every one of the students” چئو. روزاني معمول لاءِ every day، every week، every month ۽ every year استعمال ٿيندا آهن. Every one، every single ۽ every other day به عام ترڪيبون آهن.\n\nEach ٻن يا وڌيڪ ماڻهن يا شين لاءِ اچي سگهي ٿو، جڏهن ته every عام طور ٽن يا وڌيڪ جي گروهه لاءِ استعمال ٿيندو آهي. ياد رکو ته each ۽ every کان پوءِ واحد اسم ۽ واحد فعل ايندو آهي: “Each boy is”، “Every girl has”. “Each students are” ۽ “Every student have” غلط آهن.",
        examples: [
          ["Each student has a notebook.", "ہر طالب علم کے پاس ایک کاپی ہے۔", "هر شاگرد وٽ هڪ ڪاپي آهي."],
          ["Every child needs love.", "ہر بچے کو محبت کی ضرورت ہے۔", "هر ٻار کي پيار جي ضرورت آهي."],
          ["Each of the boys is hardworking.", "لڑکوں میں سے ہر ایک محنتی ہے۔", "ڇوڪرن مان هر هڪ محنتي آهي."],
          ["Every room has a window.", "ہر کمرے میں ایک کھڑکی ہے۔", "هر ڪمري ۾ هڪ دري آهي."],
          ["They each received a prize.", "ان میں سے ہر ایک کو انعام ملا۔", "انهن مان هر هڪ کي انعام مليو."],
          ["I visit my grandmother every week.", "میں ہر ہفتے اپنی دادی سے ملتا ہوں۔", "مان هر هفتي پنهنجي ڏاڏي سان ملندو آهيان."],
          ["Each book is useful.", "ہر کتاب مفید ہے۔", "هر ڪتاب فائديمند آهي."],
          ["Every one of the players was ready.", "کھلاڑیوں میں سے ہر ایک تیار تھا۔", "رانديگرن مان هر هڪ تيار هو."],
          ["Each of them has a different idea.", "ان میں سے ہر ایک کا خیال مختلف ہے۔", "انهن مان هر هڪ جو خيال مختلف آهي."],
          ["She checks her email every morning.", "وہ ہر صبح اپنی ای میل دیکھتی ہے۔", "هوءَ هر صبح پنهنجي اي ميل ڏسي ٿي."]
        ]
      }      },
      {
        title: "The Correct Use of Little, A Little and The Little",
        english: "Little, a little and the little are used with uncountable nouns, such as water, time, money, milk, hope and patience. They refer to a small amount, but the article changes the meaning.\n\nLittle means “hardly any” or “almost none.” It has a negative sense and suggests that the amount is not enough or is disappointingly small. For example, “There is little hope of success” means that there is almost no hope. “He has little money” suggests that he does not have enough money. Little is used when the speaker wants to emphasize scarcity.\n\nA little means “some, though not much.” It has a positive sense and indicates that at least a small amount exists or is available. “There is a little milk in the jug” means that some milk is there. “I have a little time” means that I have some time, even if it is not a lot. The difference between little and a little is important: “He has little experience” suggests insufficient experience, while “He has a little experience” says that he has some experience.\n\nThe little means “the small amount that exists” or “all of the small amount.” It points to a particular limited quantity already known or understood. For example, “The little money he had was spent on food” means that all the small amount of money he possessed was spent on food. “I drank the little water that remained” refers to the entire small quantity that was left.\n\nCompare the three carefully: “Little knowledge is dangerous” emphasizes a lack of knowledge; “A little knowledge is useful” emphasizes that some knowledge can help; “The little knowledge he had helped him” refers to the particular small amount of knowledge he possessed. These expressions are not normally used with plural countable nouns. For countable nouns, use few, a few and the few: “few books,” “a few books,” “the few books.” Remember: little = almost none; a little = some; the little = the small amount that exists.",
        urdu: "Little، a little اور the little ناقابلِ شمار اسماء کے ساتھ استعمال ہوتے ہیں، جیسے water، time، money، milk، hope اور patience۔ تینوں کم مقدار بتاتے ہیں، لیکن article بدلنے سے معنی بھی بدل جاتا ہے۔\n\nLittle کا مطلب ہے “بہت کم، تقریباً نہ ہونے کے برابر”۔ اس میں منفی مفہوم ہوتا ہے اور یہ ظاہر کرتا ہے کہ مقدار ناکافی ہے: “There is little hope of success” یعنی کامیابی کی امید تقریباً نہیں ہے۔ “He has little money” کا مطلب ہے کہ اس کے پاس بہت کم پیسے ہیں، جو شاید کافی نہیں۔\n\nA little کا مطلب ہے “کچھ مقدار، اگرچہ زیادہ نہیں”۔ اس کا مفہوم مثبت ہے: “There is a little milk in the jug” یعنی جگ میں کچھ دودھ موجود ہے۔ “I have a little time” یعنی میرے پاس تھوڑا سا وقت ہے۔ فرق دیکھیے: “He has little experience” سے مراد ناکافی تجربہ ہے، جبکہ “He has a little experience” کا مطلب ہے کہ اسے کچھ تجربہ حاصل ہے۔\n\nThe little کا مطلب ہے “وہ تھوڑی سی مقدار جو موجود ہے” یا “موجودہ تھوڑی سی پوری مقدار”۔ یہ کسی خاص مقدار کی طرف اشارہ کرتا ہے: “The little money he had was spent on food” یعنی اس کے پاس جتنے تھوڑے پیسے تھے، وہ سب کھانے پر خرچ ہو گئے۔ “I drank the little water that remained” یعنی جو تھوڑا سا پانی باقی تھا، میں نے وہ سارا پی لیا۔\n\nتینوں کا فرق یاد رکھیں: Little knowledge is dangerous میں علم کی کمی پر زور ہے؛ A little knowledge is useful میں کچھ علم کے فائدے پر زور ہے؛ The little knowledge he had میں اس کے پاس موجود خاص تھوڑے علم کی بات ہے۔ یہ الفاظ عموماً plural countable nouns کے ساتھ استعمال نہیں ہوتے۔ قابلِ شمار اسماء کے لیے few، a few اور the few استعمال کریں: few books، a few books، the few books۔ خلاصہ: little = تقریباً کچھ نہیں؛ a little = کچھ مقدار؛ the little = موجود تھوڑی سی پوری مقدار۔",
        sindhi: "Little، a little ۽ the little اڻ ڳڻپ لائق اسمن سان استعمال ٿيندا آهن، جيئن water، time، money، milk، hope ۽ patience. ٽيئي ٿوري مقدار ڏيکارين ٿا، پر article بدلجڻ سان معنيٰ به بدلجي ٿي.\n\nLittle جو مطلب آهي “تمام ٿورو، لڳ ڀڳ ڪجھ به نه”. ان ۾ ناڪاري مطلب هوندو آهي ۽ ظاهر ڪندو آهي ته مقدار ڪافي ناهي: “There is little hope of success” يعني ڪاميابيءَ جي اميد لڳ ڀڳ ناهي. “He has little money” جو مطلب آهي ته هن وٽ تمام ٿورا پئسا آهن، جيڪي شايد ڪافي ناهن.\n\nA little جو مطلب آهي “ڪجهه مقدار، جيتوڻيڪ گهڻو نه”. ان جو مطلب هاڪاري آهي: “There is a little milk in the jug” يعني جگ ۾ ڪجهه کير موجود آهي. “I have a little time” يعني مون وٽ ٿورو وقت آهي. فرق ڏسو: “He has little experience” مان مراد آهي ته سندس تجربو ڪافي ناهي، جڏهن ته “He has a little experience” جو مطلب آهي ته کيس ڪجهه تجربو آهي.\n\nThe little جو مطلب آهي “اها ٿوري مقدار جيڪا موجود آهي” يا “موجود ٿوري مقدار جو سڄو حصو”. اهو ڪنهن خاص مقدار ڏانهن اشارو ڪري ٿو: “The little money he had was spent on food” يعني هن وٽ جيڪي ٿورا پئسا هئا، اهي سڀ کاڌي تي خرچ ٿي ويا. “I drank the little water that remained” يعني جيڪو ٿورو پاڻي بچيو هو، اهو مون سڄو پي ڇڏيو.\n\nٽنهي جو فرق ياد رکو: Little knowledge is dangerous ۾ ڄاڻ جي کوٽ تي زور آهي؛ A little knowledge is useful ۾ ٿوري ڄاڻ جي فائدي تي زور آهي؛ The little knowledge he had ۾ سندس موجود خاص ٿوري ڄاڻ جو ذڪر آهي. اهي لفظ عام طور جمع ڳڻپ لائق اسمن سان استعمال نٿا ٿين. ڳڻپ لائق اسمن لاءِ few، a few ۽ the few استعمال ڪريو: few books، a few books، the few books. خلاصو: little = لڳ ڀڳ ڪجهه به نه؛ a little = ڪجهه مقدار؛ the little = موجود ٿوري مقدار جو سڄو حصو.",
        examples: [
          ["There is little water in the tank.", "ٹینک میں بہت کم پانی ہے۔", "ٽانڪي ۾ تمام ٿورو پاڻي آهي."],
          ["He has little interest in sports.", "اسے کھیلوں میں بہت کم دلچسپی ہے۔", "هن کي راندين ۾ تمام گهٽ دلچسپي آهي."],
          ["We have little time left.", "ہمارے پاس بہت کم وقت باقی ہے۔", "اسان وٽ تمام ٿورو وقت بچيو آهي."],
          ["There is a little sugar in the jar.", "جار میں کچھ چینی موجود ہے۔", "جار ۾ ٿوري کنڊ موجود آهي."],
          ["I have a little money with me.", "میرے پاس کچھ پیسے ہیں۔", "مون وٽ ڪجهه پئسا آهن."],
          ["She showed a little patience.", "اس نے تھوڑا سا صبر دکھایا۔", "هن ٿورو صبر ڏيکاريو."],
          ["The little food we had was shared.", "ہمارے پاس جو تھوڑا سا کھانا تھا، وہ بانٹ دیا گیا۔", "اسان وٽ جيڪو ٿورو کاڌو هو، اهو ورهايو ويو."],
          ["He spent the little money he had.", "اس نے اپنے پاس موجود تھوڑے سے تمام پیسے خرچ کر دیے۔", "هن وٽ جيڪي ٿورا پئسا هئا، اهي سڀ خرچ ڪري ڇڏيا."],
          ["I used the little time available to revise.", "میں نے دستیاب تھوڑا سا سارا وقت دہرائی کے لیے استعمال کیا۔", "مون موجود ٿورو سڄو وقت ورجاءَ لاءِ استعمال ڪيو."],
          ["A little knowledge is a dangerous thing.", "تھوڑا سا علم خطرناک چیز ہے۔", "ٿوري ڄاڻ ڪڏهن خطرناڪ ٿي سگهي ٿي."]
        ]
      }
      },
      {
        title: "The Correct Use of Few, A Few and The Few",
        english: "Few, a few and the few are used with plural countable nouns. They refer to a small number of people or things, but their meanings are different. The article a and the changes the sense of the expression, so it is important to choose the correct form according to the meaning you want to express.\n\nFew means “not many” or “almost none.” It has a negative sense and suggests that the number is smaller than expected or not enough. For example, “Few students understood the lesson” means that not many students understood it. “There are few chairs in the room” suggests that the chairs are insufficient. Few is often used in formal statements and may appear without a noun in expressions such as “Few know the truth.”\n\nA few means “some” or “a small number.” It has a positive sense: although the number is small, it is enough or useful in the situation. “I have a few friends in Karachi” means that I have some friends there. “A few people came to help” means that some people came, even if the group was not large. Compare “Few people attended” (almost nobody attended) with “A few people attended” (some people attended).\n\nThe few means “the small number that exists” or “all of that small number.” It refers to a particular group already known or understood. For example, “The few students who attended passed the test” refers to that specific small group of students, and all of them passed. “She shared the few books she owned” means that she shared all the small number of books she had.\n\nThese three expressions are used with plural countable nouns such as students, books, apples, friends and days. They are not normally used with uncountable nouns such as water, milk, money and information. With uncountable nouns, use little, a little and the little: “a little water,” not “a few water.” Remember the key difference: few = hardly any; a few = some; the few = the particular small number that exists. The verb is plural because the noun is plural: “Few people are,” “A few books were,” and “The few students have.”",
        urdu: "Few، a few اور the few جمع قابلِ شمار اسماء کے ساتھ استعمال ہوتے ہیں۔ یہ لوگوں یا چیزوں کی کم تعداد ظاہر کرتے ہیں، لیکن تینوں کے معنی مختلف ہیں۔ A اور the کے استعمال سے مفہوم بدل جاتا ہے، اس لیے درست صورت کا انتخاب ضروری ہے۔\n\nFew کا مطلب ہے “بہت کم” یا “تقریباً کوئی نہیں”۔ اس کا مفہوم منفی ہوتا ہے اور یہ ظاہر کرتا ہے کہ تعداد توقع سے کم یا ناکافی ہے۔ مثال “Few students understood the lesson” یعنی بہت کم طلبہ سبق سمجھ سکے۔ “There are few chairs in the room” کا مطلب ہے کہ کمرے میں کرسیاں ناکافی ہیں۔ Few کبھی اسم کے بغیر بھی آتا ہے، جیسے “Few know the truth” یعنی بہت کم لوگ حقیقت جانتے ہیں۔\n\nA few کا مطلب ہے “کچھ” یا “تھوڑی سی تعداد”۔ اس کا مفہوم مثبت ہے: تعداد کم ضرور ہے، لیکن کچھ لوگ یا چیزیں موجود ہیں اور صورتِ حال کے لیے کافی ہو سکتی ہیں۔ “I have a few friends in Karachi” یعنی کراچی میں میرے کچھ دوست ہیں۔ “A few people came to help” یعنی مدد کے لیے کچھ لوگ آئے۔ فرق دیکھیے: “Few people attended” یعنی تقریباً کوئی نہیں آیا؛ “A few people attended” یعنی کچھ لوگ آئے۔\n\nThe few کا مطلب ہے “وہ تھوڑی سی تعداد جو موجود ہے” یا “موجود اس چھوٹی تعداد کے تمام افراد”۔ یہ کسی خاص گروہ کی طرف اشارہ کرتا ہے جس کا پہلے ذکر ہو چکا ہو یا جو سیاق سے معلوم ہو۔ “The few students who attended passed the test” یعنی جو چند طلبہ حاضر ہوئے تھے، وہ سب امتحان میں کامیاب ہوئے۔ “She shared the few books she owned” یعنی اس کے پاس جتنی تھوڑی کتابیں تھیں، اس نے وہ سب بانٹ دیں۔\n\nیہ تینوں plural countable nouns کے ساتھ آتے ہیں، جیسے students، books، apples، friends اور days۔ انہیں عام طور پر ناقابلِ شمار اسماء جیسے water، milk، money اور information کے ساتھ استعمال نہیں کرتے۔ ان کے لیے little، a little اور the little استعمال کریں: “a little water” درست ہے، “a few water” درست نہیں۔ خلاصہ: few = تقریباً کوئی نہیں؛ a few = کچھ؛ the few = موجود خاص تھوڑی تعداد کے تمام افراد۔ چونکہ اسم جمع ہوتا ہے، اس لیے فعل بھی جمع آتا ہے: “Few people are”، “A few books were” اور “The few students have”。",
        sindhi: "Few، a few ۽ the few جمع ڳڻپ لائق اسمن سان استعمال ٿيندا آهن. اهي ماڻهن يا شين جو ٿورو تعداد ڏيکارين ٿا، پر ٽنهي جون معنائون مختلف آهن. A ۽ the جي استعمال سان مطلب بدلجي وڃي ٿو، تنهنڪري صحيح صورت چونڊڻ ضروري آهي.\n\nFew جو مطلب آهي “تمام ٿورا” يا “لڳ ڀڳ ڪو به نه”. ان جو مطلب ناڪاري هوندو آهي ۽ اهو ڏيکاري ٿو ته تعداد اميد کان گهٽ يا اڻپورو آهي. مثال “Few students understood the lesson” يعني تمام ٿورن شاگردن سبق سمجهيو. “There are few chairs in the room” جو مطلب آهي ته ڪمري ۾ ڪرسيون ڪافي ناهن. Few ڪڏهن اسم کان سواءِ به ايندو آهي، جيئن “Few know the truth” يعني تمام ٿورا ماڻهو سچ ڄاڻن ٿا.\n\nA few جو مطلب آهي “ڪجهه” يا “ٿورو تعداد”. ان جو مطلب هاڪاري آهي: تعداد ٿورو ضرور آهي، پر ڪجهه ماڻهو يا شيون موجود آهن ۽ حالت لاءِ ڪافي ٿي سگهن ٿيون. “I have a few friends in Karachi” يعني ڪراچيءَ ۾ منهنجا ڪجهه دوست آهن. “A few people came to help” يعني مدد لاءِ ڪجهه ماڻهو آيا. فرق ڏسو: “Few people attended” يعني لڳ ڀڳ ڪو به حاضر نه ٿيو؛ “A few people attended” يعني ڪجهه ماڻهو حاضر ٿيا.\n\nThe few جو مطلب آهي “اهو ٿورو تعداد جيڪو موجود آهي” يا “ان ننڍڙي موجود تعداد جا سڀئي ماڻهو”. اهو ڪنهن خاص گروهه ڏانهن اشارو ڪري ٿو، جنهن جو اڳ ذڪر ٿيو هجي يا جيڪو ڳالهه مان سمجهه ۾ اچي. “The few students who attended passed the test” يعني جيڪي ٿورا شاگرد حاضر ٿيا هئا، اهي سڀ امتحان ۾ ڪامياب ٿيا. “She shared the few books she owned” يعني هن وٽ جيڪي ٿورا ڪتاب هئا، اهي سڀ ورهائي ڇڏيائين.\n\nاهي ٽيئي plural countable nouns سان ايندا آهن، جيئن students، books، apples، friends ۽ days. انهن کي عام طور اڻ ڳڻپ لائق اسمن جهڙوڪ water، milk، money ۽ information سان استعمال نٿو ڪجي. انهن لاءِ little، a little ۽ the little استعمال ڪريو: “a little water” صحيح آهي، “a few water” صحيح ناهي. خلاصو: few = لڳ ڀڳ ڪو به نه؛ a few = ڪجهه؛ the few = موجود خاص ٿوري تعداد جا سڀ ماڻهو. اسم جمع هوندو آهي، تنهنڪري فعل به جمع ايندو آهي: “Few people are”، “A few books were” ۽ “The few students have”.",
        examples: [
          ["Few students came to school today.", "آج بہت کم طلبہ اسکول آئے۔", "اڄ تمام ٿورا شاگرد اسڪول آيا."],
          ["Few people know his real name.", "بہت کم لوگ اس کا اصل نام جانتے ہیں۔", "تمام ٿورا ماڻهو سندس اصل نالو ڄاڻن ٿا."],
          ["There are few buses after midnight.", "آدھی رات کے بعد بہت کم بسیں ہوتی ہیں۔", "اڌ رات کان پوءِ تمام ٿوريون بسون هلن ٿيون."],
          ["A few friends visited me yesterday.", "کل میرے چند دوست مجھ سے ملنے آئے۔", "ڪالهه منهنجا ڪجهه دوست مون سان ملڻ آيا."],
          ["I have a few questions to ask.", "مجھے چند سوال پوچھنے ہیں۔", "مون کي ڪجهه سوال پڇڻا آهن."],
          ["She bought a few oranges.", "اس نے چند مالٹے خریدے۔", "هن ڪجهه نارنگيون خريد ڪيون."],
          ["The few students who studied passed.", "جن چند طلبہ نے پڑھائی کی، وہ کامیاب ہوئے۔", "جن ٿورن شاگردن پڙهائي ڪئي، اهي ڪامياب ٿيا."],
          ["He gave away the few books he had.", "اس نے اپنی موجود چند کتابیں دے دیں۔", "هن وٽ جيڪي ٿورا ڪتاب هئا، سي سڀ ڏئي ڇڏيائين."],
          ["The few guests remaining were welcomed.", "باقی رہ جانے والے چند مہمانوں کا استقبال کیا گیا۔", "باقي رهيل ٿورن مهمانن جي آجيان ڪئي وئي."],
          ["We should value the few chances we get.", "ہمیں ملنے والے چند مواقع کی قدر کرنی چاہیے۔", "اسان کي ملندڙ ٿورن موقعن جي قدر ڪرڻ گهرجي."]
        ]
      }
    ]
  },
  "tenses": {
    overview: "English tense and aspect work together to show when an event happens and whether it is complete, continuing or connected to another time. The three broad time references are present, past and future.",
    watchFor: "Choose a form based on meaning and context, not only on time words. Present perfect, for example, often connects a past event to the present.",
    examples: ["I have lived here for five years. (continues now)", "I lived there in 2020. (finished past time)"]
  },
  "articles": {
    overview: "Articles are words used before nouns. A and an are indefinite articles; the is the definite article. They help show whether we mean something general or a particular thing.",
    overviewUrdu: "Articles اسماء سے پہلے آتے ہیں۔ A اور an غیر معین جبکہ the معین article ہے۔ ان سے معلوم ہوتا ہے کہ بات عام چیز کی ہو رہی ہے یا کسی خاص چیز کی۔",
    overviewSindhi: "Articles اسمن کان اڳ ايندا آهن. A ۽ an غير معين، جڏهن⁠تہ the معين article آهي. انهن سان خبر پوي ٿي ته عام شيءِ جو ذڪر آهي يا ڪنهن خاص شيءِ جو.",
    watchFor: "Choose a or an by sound, not spelling. Use the for a specific or identifiable noun. Do not use a/an with plural or uncountable nouns.",
    watchForUrdu: "A یا an کا انتخاب آواز کے مطابق کریں، ہجے کے مطابق نہیں۔ خاص یا پہچانی جانے والی چیز کے لیے the استعمال کریں۔ جمع یا ناقابلِ شمار اسم کے ساتھ a/an نہ لگائیں۔",
    watchForSindhi: "A يا an جو انتخاب آواز مطابق ڪريو، لکڻي مطابق نه. خاص يا سڃاڻپ واري شيءِ لاءِ the استعمال ڪريو. جمع يا اڻ ڳڻپ لائق اسم سان a/an نه لڳايو.",
    examples: ["She wants to become a doctor.", "The doctor who treated me was kind.", "Water is essential."],
    specialSectionsTitle: "DETAILED NOTES ON ARTICLES",
    specialSections: [
      {
        title: "Indefinite Articles — A and An",
        english: "The indefinite articles are “a” and “an”. They are used before singular countable nouns when we talk about a person, animal or thing in a general way, or mention it for the first time. They do not point to one particular person or thing known to the listener.\n\nUse “a” before a consonant sound: a boy, a teacher, a book, a university. Use “an” before a vowel sound: an apple, an egg, an orange, an umbrella. The choice depends on pronunciation, not simply on the first written letter. Therefore, we say “an hour” because h is silent, but “a house” because h is pronounced. We say “a university” because it begins with the /y/ consonant sound, and “an honest man” because h is silent.\n\nUse a/an when something is mentioned for the first time: “I saw a dog.” When we mention the same dog again, we normally use “the”: “The dog was barking.” A/an can also describe a person's job or identity: “She is a doctor.” It is used in expressions of rate or measurement: “twice a day,” “sixty kilometres an hour.” It can mean “one”: “I need a pen.”\n\nDo not use a/an with plural nouns or uncountable nouns: say “books” or “some books,” not “a books”; say “water,” not “a water,” when referring to water generally. Some nouns can be countable in one meaning and uncountable in another, so the article depends on the intended meaning.",
        urdu: "Indefinite articles دو ہیں: “a” اور “an”۔ یہ واحد قابلِ شمار اسم سے پہلے اس وقت آتے ہیں جب ہم کسی شخص، جانور یا چیز کا عام طور پر ذکر کریں، یا پہلی مرتبہ اس کا تعارف کروائیں۔ ان سے کسی خاص اور پہلے سے معلوم چیز کی نشاندہی نہیں ہوتی۔\n\nحرفِ صحیح کی آواز سے پہلے “a” استعمال ہوتا ہے: a boy، a teacher، a book، a university۔ حرفِ علت کی آواز سے پہلے “an” آتا ہے: an apple، an egg، an orange، an umbrella۔ انتخاب لکھے ہوئے پہلے حرف کے بجائے آواز کے مطابق ہوتا ہے۔ اسی لیے “an hour” کہتے ہیں کیونکہ h خاموش ہے، لیکن “a house” کہتے ہیں کیونکہ h کی آواز ادا ہوتی ہے۔ “a university” درست ہے کیونکہ اس کی ابتدا /y/ کی آواز سے ہوتی ہے، جبکہ “an honest man” درست ہے کیونکہ h خاموش ہے۔\n\nکسی چیز کا پہلی مرتبہ ذکر کرتے ہوئے a/an استعمال کرتے ہیں: “I saw a dog.” یعنی میں نے ایک کتا دیکھا۔ دوبارہ اسی کتے کا ذکر ہو تو عموماً “the” استعمال ہوگا: “The dog was barking.” یعنی وہ کتا بھونک رہا تھا۔ کسی کا پیشہ بتانے کے لیے بھی a/an آتا ہے: “She is a doctor.” یعنی وہ ڈاکٹر ہے۔ شرح یا پیمائش میں بھی استعمال ہوتا ہے: “twice a day” یعنی دن میں دو مرتبہ۔ بعض اوقات اس کا مطلب “ایک” بھی ہوتا ہے: “I need a pen.”\n\nجمع اسماء اور ناقابلِ شمار اسماء کے ساتھ a/an استعمال نہیں کرتے۔ “a books” غلط ہے؛ “books” یا “some books” کہیں۔ عام معنی میں “a water” کے بجائے “water” کہیں۔ بعض اسماء مختلف معنوں میں قابلِ شمار یا ناقابلِ شمار ہو سکتے ہیں، اس لیے استعمال سے پہلے مطلب سمجھیں۔",
        sindhi: "Indefinite articles ٻه آهن: “a” ۽ “an”. اهي واحد ڳڻپ لائق اسم کان اڳ تڏهن استعمال ٿيندا آهن، جڏهن ڪنهن ماڻهو، جانور يا شيءِ جو عام ذڪر ڪجي يا پهريون ڀيرو تعارف ڪرايو وڃي. اهي ڪنهن خاص ۽ اڳ ۾ ڄاتل شيءِ ڏانهن اشارو نٿا ڪن.\n\nConsonant sound کان اڳ “a” استعمال ٿيندو آهي: a boy، a teacher، a book، a university. Vowel sound کان اڳ “an” ايندو آهي: an apple، an egg، an orange، an umbrella. چونڊ لکيل پهرئين اکر بدران آواز مطابق ٿيندي آهي. تنهنڪري “an hour” لکون ٿا، ڇاڪاڻ⁠تہ h خاموش آهي، پر “a house” لکون ٿا، ڇاڪاڻ⁠تہ h جو آواز ادا ٿئي ٿو. “a university” صحيح آهي، ڇاڪاڻ⁠تہ ان جي شروعات /y/ واري آواز سان ٿئي ٿي، جڏهن⁠تہ “an honest man” صحيح آهي، ڇاڪاڻ⁠تہ h خاموش آهي.\n\nڪنهن شيءِ جو پهريون ڀيرو ذڪر ڪندي a/an استعمال ڪجي ٿو: “I saw a dog.” يعني مون هڪ ڪتو ڏٺو. ساڳئي ڪتي جو ٻيهر ذڪر ڪجي ته عام طور “the” استعمال ٿيندو: “The dog was barking.” يعني اهو ڪتو ڀونڪي رهيو هو. ڪنهن جو پيشو ٻڌائڻ لاءِ به a/an ايندو آهي: “She is a doctor.” يعني هوءَ ڊاڪٽر آهي. شرح يا ماپ ۾ به استعمال ٿئي ٿو: “twice a day” يعني ڏينهن ۾ ٻه ڀيرا. ڪڏهن ان جو مطلب “هڪ” به هوندو آهي: “I need a pen.”\n\nجمع اسمن يا اڻ ڳڻپ لائق اسمن سان a/an استعمال نه ڪجي. “a books” غلط آهي؛ “books” يا “some books” چئبو. عام معنيٰ ۾ “a water” بدران “water” چئبو. ڪي اسم مختلف معنائن ۾ ڳڻپ لائق يا اڻ ڳڻپ لائق ٿي سگهن ٿا، تنهنڪري استعمال وقت مطلب کي سمجهڻ ضروري آهي.",
        examples: [
          ["I saw a bird in the garden.", "میں نے باغ میں ایک پرندہ دیکھا۔", "مون باغ ۾ هڪ پکي ڏٺو."],
          ["She ate an apple.", "اس نے ایک سیب کھایا۔", "هن هڪ صوف کاڌو."],
          ["He is a university student.", "وہ یونیورسٹی کا طالب علم ہے۔", "هو يونيورسٽيءَ جو شاگرد آهي."],
          ["We waited for an hour.", "ہم نے ایک گھنٹہ انتظار کیا۔", "اسان هڪ ڪلاڪ انتظار ڪيو."],
          ["My father is a teacher.", "میرے والد استاد ہیں۔", "منهنجو پيءُ استاد آهي."],
          ["An honest person tells the truth.", "ایک ایماندار شخص سچ بولتا ہے۔", "هڪ ايماندار ماڻهو سچ ڳالهائيندو آهي."]
        ]
      },
      {
        title: "Definite Article — The",
        english: "“The” is called the definite article. It is used before a noun when the speaker expects the listener to know exactly which person or thing is meant. Unlike a/an, it points to something definite, particular or identifiable. It can be used with singular nouns, plural nouns and both countable and uncountable nouns.\n\nUse “the” when the noun has already been mentioned: “I saw a cat. The cat was black.” Use it when the situation makes the noun clear: “Please close the door” (the door of this room). Use it when a phrase or clause identifies the noun: “The girl in the blue dress is my sister.” It is also used for something unique in the relevant context, such as the sun, the moon and the earth.\n\n“The” is used with superlative adjectives and ordinal numbers: the tallest building, the best answer, the first chapter, the second day. It is used with names of rivers, seas, oceans, deserts, mountain ranges and groups of islands: the Indus, the Arabian Sea, the Pacific Ocean, the Sahara, the Himalayas, the Maldives. It is also used with some country names that include words such as kingdom, states or republic, and with plural country names: the United Kingdom, the United States, the Netherlands.\n\nDo not normally use “the” before plural or uncountable nouns when speaking about them generally: “Books are useful” and “Milk is nutritious.” But use it when speaking about a particular group or amount: “The books on this table are mine” and “The milk in the fridge is fresh.”",
        urdu: "“The” کو definite article کہتے ہیں۔ اسے اسم سے پہلے اس وقت استعمال کیا جاتا ہے جب بولنے والا توقع کرے کہ سننے والا سمجھ جائے گا کہ کس خاص شخص یا چیز کی بات ہو رہی ہے۔ A/an کے برعکس، the کسی متعین، مخصوص یا پہچانی جانے والی چیز کی طرف اشارہ کرتا ہے۔ یہ واحد، جمع، قابلِ شمار اور ناقابلِ شمار تمام قسم کے اسماء کے ساتھ آ سکتا ہے۔\n\nجب کسی اسم کا پہلے ذکر ہو چکا ہو تو دوبارہ اس سے پہلے the آتا ہے: “I saw a cat. The cat was black.” یعنی میں نے ایک بلی دیکھی۔ وہ بلی کالی تھی۔ جب صورتِ حال سے چیز واضح ہو تو بھی the استعمال ہوتا ہے: “Please close the door” یعنی براہِ کرم دروازہ بند کریں۔ جب کوئی فقرہ یا جملہ اسم کی شناخت واضح کرے تو بھی the آتا ہے: “The girl in the blue dress is my sister.” یعنی نیلے لباس والی لڑکی میری بہن ہے۔ اپنے متعلقہ سیاق میں منفرد چیزوں کے ساتھ بھی the استعمال ہوتا ہے، جیسے the sun، the moon اور the earth۔\n\nSuperlative adjectives اور ترتیبی اعداد سے پہلے the آتا ہے: the tallest building، the best answer، the first chapter، the second day۔ دریاؤں، سمندروں، بحرِ اعظم، صحراؤں، پہاڑی سلسلوں اور جزائر کے مجموعوں کے ناموں کے ساتھ بھی the استعمال ہوتا ہے: the Indus، the Arabian Sea، the Pacific Ocean، the Sahara، the Himalayas، the Maldives۔ بعض ملکوں کے ناموں میں kingdom، states یا republic جیسے الفاظ ہوں، یا ملک کا نام جمع ہو، تو بھی the آتا ہے: the United Kingdom، the United States، the Netherlands۔\n\nجب جمع یا ناقابلِ شمار اسماء کا عمومی ذکر ہو تو عموماً the نہیں لگاتے: “Books are useful” یعنی کتابیں فائدہ مند ہیں؛ “Milk is nutritious” یعنی دودھ غذائیت بخش ہے۔ لیکن کسی خاص گروہ یا مقدار کی بات ہو تو the لگائیں: “The books on this table are mine” یعنی اس میز پر رکھی کتابیں میری ہیں۔",
        sindhi: "“The” کي definite article چيو ويندو آهي. اهو اسم کان اڳ تڏهن استعمال ٿيندو آهي، جڏهن ڳالهائيندڙ کي اميد هجي ته ٻڌندڙ سمجهي ويندو ته ڪهڙي خاص ماڻهو يا شيءِ جو ذڪر آهي. A/an جي ابتڙ، the ڪنهن مقرر، خاص يا سڃاڻپ واري شيءِ ڏانهن اشارو ڪري ٿو. اهو واحد، جمع، ڳڻپ لائق ۽ اڻ ڳڻپ لائق اسمن سان استعمال ٿي سگهي ٿو.\n\nجڏهن ڪنهن اسم جو اڳ ذڪر ٿي چڪو هجي ته ٻيهر ان کان اڳ the ايندو آهي: “I saw a cat. The cat was black.” يعني مون هڪ ٻلي ڏٺي. اها ٻلي ڪاري هئي. جڏهن صورتحال مان شيءِ واضح هجي ته به the استعمال ٿيندو آهي: “Please close the door” يعني مهرباني ڪري دروازو بند ڪريو. جڏهن ڪو فقرو يا جملو اسم جي سڃاڻپ واضح ڪري ته به the ايندو آهي: “The girl in the blue dress is my sister.” يعني نيري لباس واري ڇوڪري منهنجي ڀيڻ آهي. پنهنجي لاڳاپيل صورتحال ۾ منفرد شين سان به the استعمال ٿيندو آهي، جهڙوڪ the sun، the moon ۽ the earth.\n\nSuperlative adjectives ۽ ترتيبي انگن کان اڳ the ايندو آهي: the tallest building، the best answer، the first chapter، the second day. ندين، سمنڊن، وڏن بحرن، ريگستانن، جبلن جي سلسلن ۽ ٻيٽن جي گروهن جي نالن سان به the استعمال ٿيندو آهي: the Indus، the Arabian Sea، the Pacific Ocean، the Sahara، the Himalayas، the Maldives. ڪن ملڪن جي نالن ۾ kingdom، states يا republic جهڙا لفظ هجن يا ملڪ جو نالو جمع هجي ته به the ايندو آهي: the United Kingdom، the United States، the Netherlands.\n\nجڏهن جمع يا اڻ ڳڻپ لائق اسمن جو عام ذڪر ڪجي ته عام طور the نه لڳائبو: “Books are useful” يعني ڪتاب فائديمند آهن؛ “Milk is nutritious” يعني کير غذائيت وارو آهي. پر ڪنهن خاص گروهه يا مقدار جو ذڪر هجي ته the لڳائبو: “The books on this table are mine” يعني هن ميز تي رکيل ڪتاب منهنجا آهن.",
        examples: [
          ["The moon looks beautiful tonight.", "آج رات چاند خوبصورت دکھائی دیتا ہے۔", "اڄ رات چنڊ سهڻو نظر اچي ٿو."],
          ["The teacher is in the classroom.", "استاد جماعت میں موجود ہیں۔", "استاد ڪلاس روم ۾ آهي."],
          ["The book you gave me is interesting.", "آپ کی دی ہوئی کتاب دلچسپ ہے۔", "توهان ڏنل ڪتاب دلچسپ آهي."],
          ["The Nile is a long river.", "دریائے نیل ایک طویل دریا ہے۔", "نيل هڪ ڊگهو درياهه آهي."],
          ["She won the first prize.", "اس نے پہلا انعام جیتا۔", "هن پهريون انعام کٽيو."],
          ["He is the tallest boy in the class.", "وہ جماعت کا سب سے لمبا لڑکا ہے۔", "هو ڪلاس ۾ سڀ کان ڊگهو ڇوڪرو آهي."]
        ]
      },
      {
        title: "Choosing Between A and An",
        english: "The rule for a and an is based on the first spoken sound of the next word. Use “a” before a consonant sound and “an” before a vowel sound. Vowel letters are a, e, i, o and u, but letters and sounds are not always the same. A word may begin with a vowel letter but a consonant sound, or with a consonant letter but a vowel sound.\n\nUse “a” in a uniform, a European country, a useful book and a one-rupee coin. The first sounds are /y/ in uniform, European and useful, and /w/ in one. Use “an” in an hour, an honour, an MBA student and an umbrella. The h is silent in hour and honour; the letters M and the initial sound in umbrella are pronounced with vowel sounds.\n\nThe same rule applies when an adjective comes between the article and the noun: “a beautiful house” but “an interesting story.” Listen to the first sound immediately after the article. Do not choose the article only by looking at the first letter.",
        urdu: "A اور an کا اصول اگلے لفظ کی پہلی بولی جانے والی آواز پر منحصر ہے۔ Consonant sound سے پہلے “a” اور vowel sound سے پہلے “an” استعمال کریں۔ Vowel letters a، e، i، o اور u ہیں، لیکن حروف اور آوازیں ہمیشہ ایک جیسی نہیں ہوتیں۔ کوئی لفظ vowel letter سے شروع ہو سکتا ہے مگر اس کی آواز consonant ہو سکتی ہے، یا consonant letter سے شروع ہو کر vowel sound دے سکتا ہے۔\n\n“a uniform”، “a European country”، “a useful book” اور “a one-rupee coin” درست ہیں۔ uniform، European اور useful کی ابتدا /y/ کی آواز سے، جبکہ one کی ابتدا /w/ کی آواز سے ہوتی ہے۔ “an hour”، “an honour”، “an MBA student” اور “an umbrella” درست ہیں۔ hour اور honour میں h خاموش ہے، جبکہ M کے نام اور umbrella کی ابتدائی آواز vowel sound ہے۔\n\nاگر article اور اسم کے درمیان صفت آ جائے تب بھی یہی اصول لاگو ہوتا ہے: “a beautiful house” لیکن “an interesting story”۔ Article کے فوراً بعد آنے والے لفظ کی پہلی آواز سنیں؛ صرف پہلا لکھا ہوا حرف دیکھ کر فیصلہ نہ کریں۔",
        sindhi: "A ۽ an جو اصول ايندڙ لفظ جي پهرين ڳالهائبي آواز تي دارومدار رکي ٿو. Consonant sound کان اڳ “a” ۽ vowel sound کان اڳ “an” استعمال ڪريو. Vowel letters a، e، i، o ۽ u آهن، پر اکر ۽ آواز هميشه هڪجهڙا ناهن. ڪو لفظ vowel letter سان شروع ٿي سگهي ٿو پر ان جو آواز consonant ٿي سگهي ٿو، يا consonant letter سان شروع ٿي vowel sound ڏئي سگهي ٿو.\n\n“a uniform”، “a European country”، “a useful book” ۽ “a one-rupee coin” صحيح آهن. uniform، European ۽ useful جي شروعات /y/ واري آواز سان، جڏهن⁠تہ one جي شروعات /w/ واري آواز سان ٿئي ٿي. “an hour”، “an honour”، “an MBA student” ۽ “an umbrella” صحيح آهن. hour ۽ honour ۾ h خاموش آهي، جڏهن⁠تہ M جي نالي ۽ umbrella جي پهرين آواز vowel sound آهي.\n\nجيڪڏهن article ۽ اسم جي وچ ۾ صفت اچي ته به ساڳيو اصول لاڳو ٿيندو: “a beautiful house” پر “an interesting story”. Article کان فوراً پوءِ ايندڙ لفظ جي پهرين آواز تي ڌيان ڏيو؛ رڳو پهريون لکيل اکر ڏسي فيصلو نه ڪريو.",
        examples: [
          ["He is a useful person.", "وہ ایک مفید شخص ہے۔", "هو هڪ فائديمند ماڻهو آهي."],
          ["She waited for an hour.", "اس نے ایک گھنٹہ انتظار کیا۔", "هن هڪ ڪلاڪ انتظار ڪيو."],
          ["It was a European film.", "یہ ایک یورپی فلم تھی۔", "اها هڪ يورپي فلم هئي."],
          ["He is an honest man.", "وہ ایک ایماندار آدمی ہے۔", "هو هڪ ايماندار ماڻهو آهي."],
          ["I bought a one-way ticket.", "میں نے ایک طرفہ ٹکٹ خریدا۔", "مون هڪ طرفي ٽڪيٽ خريد ڪئي."],
          ["She is an intelligent student.", "وہ ایک ذہین طالبہ ہے۔", "هوءَ هڪ ذهين شاگردياڻي آهي."]
        ]
      },
      {
        title: "Uses of the Definite Article — The",
        english: "Use “the” in the following important cases:\n\n1. When something has been mentioned before: “I bought a pen. The pen is blue.”\n2. When there is only one of something in the relevant world or context: the sun, the sky, the principal (of this school).\n3. When the noun is made specific by a phrase or clause: the boy standing near the gate; the house that Jack built.\n4. With superlative degrees: the strongest, the most beautiful, the least expensive.\n5. With ordinal numbers and words such as same and only: the first lesson, the second floor, the same book, the only answer.\n6. With names of rivers, seas, oceans, canals, deserts, mountain ranges and groups of islands: the Indus, the Red Sea, the Atlantic Ocean, the Suez Canal, the Thar Desert, the Alps, the Andaman Islands.\n7. With plural names of countries and certain political or geographical names: the United States, the United Kingdom, the United Arab Emirates, the Netherlands.\n8. With some newspapers, famous buildings, museums, hotels and ships when their names conventionally take the: the Times, the Eiffel Tower, the British Museum.\n9. With an adjective to represent a whole class of people: the rich, the poor, the elderly. These expressions take a plural verb when they refer to people as a group.\n10. With musical instruments in the general sense after verbs such as play: She plays the piano.\n11. With decades and groups of years: the 1990s.\n12. With a family name in the plural to refer to the whole family: the Smiths.\n\nDo not normally use “the” with a person's name, most singular country names, languages, school subjects, meals or sports when speaking generally: Ali, Pakistan, English, mathematics, breakfast, cricket. There are exceptions depending on the full name and context. Compare general meaning with a specific reference: “Children need love” but “The children in this room need help.”",
        urdu: "“The” کے اہم استعمال درج ذیل ہیں:\n\n1. جب کسی چیز کا پہلے ذکر ہو چکا ہو: “I bought a pen. The pen is blue.” یعنی میں نے ایک قلم خریدا۔ وہ قلم نیلا ہے۔\n2. جب متعلقہ دنیا یا صورتِ حال میں کوئی چیز ایک ہی ہو: the sun، the sky، the principal (اس اسکول کا پرنسپل)۔\n3. جب فقرہ یا جملہ اسم کو خاص بنا دے: the boy standing near the gate یعنی دروازے کے قریب کھڑا لڑکا؛ the house that Jack built یعنی وہ گھر جو جیک نے بنایا۔\n4. Superlative degree کے ساتھ: the strongest، the most beautiful، the least expensive۔\n5. ترتیبی اعداد اور same اور only جیسے الفاظ کے ساتھ: the first lesson، the second floor، the same book، the only answer۔\n6. دریاؤں، سمندروں، بحرِ اعظم، نہروں، صحراؤں، پہاڑی سلسلوں اور جزائر کے مجموعوں کے ناموں کے ساتھ: the Indus، the Red Sea، the Atlantic Ocean، the Suez Canal، the Thar Desert، the Alps، the Andaman Islands۔\n7. جمع ملکوں کے ناموں اور بعض سیاسی یا جغرافیائی ناموں کے ساتھ: the United States، the United Kingdom، the United Arab Emirates، the Netherlands۔\n8. بعض اخبارات، مشہور عمارتوں، عجائب گھروں، ہوٹلوں اور جہازوں کے ناموں کے ساتھ: the Times، the Eiffel Tower، the British Museum۔\n9. کسی صفت سے پوری جماعت کے لوگوں کا ذکر: the rich یعنی امیر لوگ؛ the poor یعنی غریب لوگ؛ the elderly یعنی بزرگ لوگ۔ لوگوں کے گروہ کے لیے ان کے ساتھ جمع فعل آتا ہے۔\n10. موسیقی کے آلات کے عمومی ذکر میں play جیسے فعل کے بعد: She plays the piano یعنی وہ پیانو بجاتی ہے۔\n11. دہائیوں کے لیے: the 1990s۔\n12. خاندان کے تمام افراد کے لیے جمع خاندانی نام کے ساتھ: the Smiths۔\n\nعام طور پر کسی شخص کے نام، زیادہ تر واحد ملکوں کے نام، زبانوں، مضامین، کھانوں یا کھیلوں کے عمومی ذکر سے پہلے the نہیں لگاتے: Ali، Pakistan، English، mathematics، breakfast، cricket۔ مکمل نام اور سیاق کے لحاظ سے استثنا ہو سکتا ہے۔ عمومی اور مخصوص معنی کا فرق دیکھیں: “Children need love” یعنی بچوں کو محبت کی ضرورت ہے؛ “The children in this room need help” یعنی اس کمرے کے بچوں کو مدد کی ضرورت ہے۔",
        sindhi: "“The” جا اهم استعمال هيٺ ڏجن ٿا:\n\n1. جڏهن ڪنهن شيءِ جو اڳ ذڪر ٿي چڪو هجي: “I bought a pen. The pen is blue.” يعني مون هڪ قلم خريد ڪيو. اهو قلم نيرو آهي.\n2. جڏهن لاڳاپيل دنيا يا صورتحال ۾ ڪا شيءِ هڪ ئي هجي: the sun، the sky، the principal (هن اسڪول جو پرنسپال).\n3. جڏهن ڪو فقرو يا جملو اسم کي خاص بڻائي: the boy standing near the gate يعني دروازي ڀرسان بيٺل ڇوڪرو؛ the house that Jack built يعني اهو گهر جيڪو جيڪ ٺاهيو.\n4. Superlative degree سان: the strongest، the most beautiful، the least expensive.\n5. ترتيبي انگن ۽ same ۽ only جهڙن لفظن سان: the first lesson، the second floor، the same book، the only answer.\n6. ندين، سمنڊن، وڏن بحرن، واهن، ريگستانن، جبلن جي سلسلن ۽ ٻيٽن جي گروهن جي نالن سان: the Indus، the Red Sea، the Atlantic Ocean، the Suez Canal، the Thar Desert، the Alps، the Andaman Islands.\n7. جمع ملڪن جي نالن ۽ ڪجهه سياسي يا جاگرافيائي نالن سان: the United States، the United Kingdom، the United Arab Emirates، the Netherlands.\n8. ڪن اخبارن، مشهور عمارتن، عجائب گهرن، هوٽلن ۽ جهازن جي نالن سان: the Times، the Eiffel Tower، the British Museum.\n9. صفت وسيلي ماڻهن جي پوري جماعت جو ذڪر ڪرڻ لاءِ: the rich يعني امير ماڻهو؛ the poor يعني غريب ماڻهو؛ the elderly يعني پوڙها ماڻهو. ماڻهن جي گروهه لاءِ انهن سان جمع فعل ايندو آهي.\n10. موسيقيءَ جي سازن جو عام ذڪر ڪرڻ وقت play جهڙي فعل کان پوءِ: She plays the piano يعني هوءَ پيانو وڄائي ٿي.\n11. ڏهاڪن جي نالن سان: the 1990s.\n12. سڄي خاندان لاءِ جمع خانداني نالي سان: the Smiths.\n\nعام طور ڪنهن ماڻهوءَ جي نالي، گهڻن واحد ملڪن جي نالن، ٻولين، اسڪولي مضمونن، کاڌن يا راندين جي عام ذڪر کان اڳ the نه لڳائبو: Ali، Pakistan، English، mathematics، breakfast، cricket. مڪمل نالي ۽ صورتحال موجب استثنا ٿي سگهن ٿا. عام ۽ خاص مطلب جو فرق ڏسو: “Children need love” يعني ٻارن کي پيار جي ضرورت آهي؛ “The children in this room need help” يعني هن ڪمري جي ٻارن کي مدد جي ضرورت آهي.",
        examples: [
          ["The sun rises in the east.", "سورج مشرق سے نکلتا ہے۔", "سج اوڀر کان اڀري ٿو."],
          ["The Indus flows through Pakistan.", "دریائے سندھ پاکستان سے گزرتا ہے۔", "سنڌو درياهه پاڪستان مان وهي ٿو."],
          ["This is the best answer.", "یہ سب سے بہترین جواب ہے۔", "هي سڀ کان بهترين جواب آهي."],
          ["The poor need our support.", "غریب لوگوں کو ہماری مدد کی ضرورت ہے۔", "غريب ماڻهن کي اسان جي سهاري جي ضرورت آهي."],
          ["She plays the piano very well.", "وہ پیانو بہت اچھا بجاتی ہے۔", "هوءَ پيانو تمام سٺو وڄائي ٿي."],
          ["The United Arab Emirates is in the Middle East.", "متحدہ عرب امارات مشرقِ وسطیٰ میں ہے۔", "گڏيل عرب امارات وچ اوڀر ۾ آهي."]
        ]
      },
      {
        title: "Use of the Indefinite Article — A and An",
        english: "The indefinite article is used when we speak about one person or thing without identifying exactly which one. English has two indefinite articles: “a” and “an”. They are used with singular countable nouns, not with plural nouns or uncountable nouns in their ordinary meaning.\n\n1. First mention: use a/an when introducing a singular countable noun for the first time. Example: “A man came to see you.” If you refer to that same man again, use “the”: “The man was carrying a bag.”\n2. One member of a class: “A teacher should be patient.” This means any teacher, not one particular teacher.\n3. Profession, occupation or identity: “My sister is a nurse”; “He became an engineer.” Use an article before a singular job title after be, become and similar verbs.\n4. Meaning of one: a/an can sometimes mean one: “I need a minute”; “She has a brother.”\n5. Rate, frequency and measurement: “twice a week,” “five rupees a kilo,” “sixty kilometres an hour.”\n6. Exclamations with singular countable nouns: “What a beautiful day!” and “Such an interesting story!”\n7. Certain quantity expressions: “a hundred,” “a thousand,” “a dozen,” and “a lot of.”\n8. A/an is chosen by sound: a book, a university, a European; an egg, an hour, an honest person. The sound immediately following the article is important, not just the written first letter.\n9. If an adjective comes before the noun, choose the article by the adjective's first sound: “a useful idea,” but “an excellent idea.”\n10. Do not use a/an before plural nouns or uncountable nouns: say “some books” and “some information,” not “a books” or “an information.” Some nouns can be countable in a different meaning: “a coffee” can mean a cup of coffee.\n\nRemember: a/an usually introduces one non-specific singular countable noun. It does not mean that the noun is unimportant; it simply does not identify a particular one to the listener.",
        urdu: "Indefinite article اس وقت استعمال ہوتا ہے جب ہم کسی ایک شخص یا چیز کا ذکر کریں لیکن یہ واضح نہ کریں کہ وہ خاص کون سا ہے۔ انگریزی میں دو indefinite articles ہیں: “a” اور “an”۔ یہ واحد قابلِ شمار اسم کے ساتھ آتے ہیں، عام طور پر جمع یا ناقابلِ شمار اسم کے ساتھ نہیں۔\n\n1. پہلی مرتبہ ذکر: کسی واحد قابلِ شمار اسم کا پہلی بار تعارف کراتے وقت a/an لگائیں۔ مثال: “A man came to see you.” یعنی ایک آدمی آپ سے ملنے آیا۔ دوبارہ اسی آدمی کا ذکر ہو تو “the” کہیں: “The man was carrying a bag.”\n2. کسی جماعت کا ایک فرد: “A teacher should be patient.” یعنی استاد کو صبر کرنے والا ہونا چاہیے۔ یہاں کسی خاص استاد کی بات نہیں۔\n3. پیشہ یا شناخت: “My sister is a nurse” یعنی میری بہن نرس ہے؛ “He became an engineer” یعنی وہ انجینئر بن گیا۔ be اور become جیسے افعال کے بعد واحد پیشے سے پہلے article لگتا ہے۔\n4. ایک کے معنی میں: a/an کبھی ایک کا مطلب دیتا ہے: “I need a minute” یعنی مجھے ایک منٹ چاہیے۔\n5. شرح، تکرار اور پیمائش: “twice a week” یعنی ہفتے میں دو بار؛ “sixty kilometres an hour” یعنی ساٹھ کلومیٹر فی گھنٹہ۔\n6. واحد قابلِ شمار اسم کے ساتھ تعجبیہ جملوں میں: “What a beautiful day!” یعنی کتنا خوبصورت دن ہے!\n7. مقدار کے بعض فقروں میں: a hundred، a thousand، a dozen، a lot of۔\n8. A یا an کا انتخاب آواز سے ہوتا ہے: a book، a university، a European؛ an egg، an hour، an honest person۔ صرف لکھے ہوئے پہلے حرف کو نہ دیکھیں۔\n9. اسم سے پہلے صفت ہو تو صفت کی پہلی آواز کے مطابق article چنیں: “a useful idea” لیکن “an excellent idea”۔\n10. جمع یا ناقابلِ شمار اسم سے پہلے a/an نہ لگائیں: “some books” اور “some information” کہیں، “a books” یا “an information” نہیں۔ بعض اسم دوسرے معنی میں قابلِ شمار ہو سکتے ہیں؛ “a coffee” کا مطلب ایک کپ کافی ہو سکتا ہے۔\n\nیاد رکھیں: a/an عموماً کسی غیر مخصوص واحد قابلِ شمار اسم کا تعارف کراتا ہے۔ اس کا مطلب یہ نہیں کہ چیز غیر اہم ہے، بلکہ صرف یہ کہ سننے والے کو کوئی خاص چیز متعین نہیں بتائی جا رہی۔",
        sindhi: "Indefinite article تڏهن استعمال ٿيندو آهي، جڏهن ڪنهن هڪ ماڻهو يا شيءِ جو ذڪر ڪجي پر اهو واضح نه ڪجي ته اها ڪهڙي خاص آهي. انگريزيءَ ۾ ٻه indefinite articles آهن: “a” ۽ “an”. اهي واحد ڳڻپ لائق اسم سان ايندا آهن؛ عام طور جمع يا اڻ ڳڻپ لائق اسم سان نه.\n\n1. پهريون ذڪر: واحد ڳڻپ لائق اسم جو پهريون ڀيرو تعارف ڪرائڻ وقت a/an لڳايو. مثال: “A man came to see you.” يعني هڪ ماڻهو توسان ملڻ آيو. ساڳئي ماڻهوءَ جو ٻيهر ذڪر هجي ته “the” استعمال ڪريو.\n2. ڪنهن جماعت جو هڪ فرد: “A teacher should be patient.” يعني استاد کي صبر وارو هئڻ گهرجي. هتي ڪنهن خاص استاد جو ذڪر ناهي.\n3. پيشو يا سڃاڻپ: “My sister is a nurse” يعني منهنجي ڀيڻ نرس آهي؛ “He became an engineer” يعني هو انجنيئر ٿيو. be ۽ become جهڙن فعلن کان پوءِ واحد پيشي سان article ايندو آهي.\n4. هڪ جي معنيٰ ۾: a/an ڪڏهن هڪ جو مطلب ڏيندو آهي: “I need a minute” يعني مون کي هڪ منٽ گهرجي.\n5. شرح، ورجاءُ ۽ ماپ: “twice a week” يعني هفتي ۾ ٻه ڀيرا؛ “sixty kilometres an hour” يعني في ڪلاڪ سٺ ڪلوميٽر.\n6. واحد ڳڻپ لائق اسم سان تعجب وارن جملن ۾: “What a beautiful day!” يعني ڪهڙو نه سهڻو ڏينهن آهي!\n7. مقدار جي ڪجهه اصطلاحن ۾: a hundred، a thousand، a dozen، a lot of.\n8. A يا an جو انتخاب آواز مطابق ٿيندو آهي: a book، a university، a European؛ an egg، an hour، an honest person. رڳو لکيل پهريون اکر نه ڏسو.\n9. اسم کان اڳ صفت هجي ته صفت جي پهرين آواز مطابق article چونڊيو: “a useful idea” پر “an excellent idea”.\n10. جمع يا اڻ ڳڻپ لائق اسم کان اڳ a/an نه لڳايو: “some books” ۽ “some information” چئو، “a books” يا “an information” نه. ڪي اسم ٻئي مطلب ۾ ڳڻپ لائق ٿي سگهن ٿا؛ “a coffee” جو مطلب ڪافيءَ جو هڪ ڪپ ٿي سگهي ٿو.\n\nياد رکو: a/an عام طور ڪنهن غير مخصوص واحد ڳڻپ لائق اسم جو تعارف ڪرائي ٿو. ان جو مطلب اهو ناهي ته شيءِ غير اهم آهي؛ رڳو ٻڌندڙ کي ڪا خاص شيءِ مقرر ڪري نه ٻڌائي پئي وڃي.",
        examples: [
          ["A boy is waiting outside.", "ایک لڑکا باہر انتظار کر رہا ہے۔", "هڪ ڇوڪرو ٻاهر انتظار ڪري رهيو آهي."],
          ["She is a doctor.", "وہ ڈاکٹر ہے۔", "هوءَ ڊاڪٽر آهي."],
          ["He ate an orange.", "اس نے ایک مالٹا کھایا۔", "هن هڪ نارنگي کاڌي."],
          ["I saw a bird on the wall.", "میں نے دیوار پر ایک پرندہ دیکھا۔", "مون ڀت تي هڪ پکي ڏٺو."],
          ["My uncle is an engineer.", "میرے چچا انجینئر ہیں۔", "منهنجو چاچو انجنيئر آهي."],
          ["A student must work hard.", "ایک طالب علم کو محنت کرنی چاہیے۔", "هڪ شاگرد کي محنت ڪرڻ گهرجي."],
          ["We go there twice a week.", "ہم وہاں ہفتے میں دو بار جاتے ہیں۔", "اسان اتي هفتي ۾ ٻه ڀيرا وڃون ٿا."],
          ["He earns a hundred rupees a day.", "وہ روزانہ سو روپے کماتا ہے۔", "هو روزانو هڪ سئو رپيا ڪمائي ٿو."],
          ["What a lovely flower!", "کیا ہی خوبصورت پھول ہے!", "ڪهڙو نه سهڻو گل آهي!"],
          ["She bought a useful dictionary.", "اس نے ایک مفید لغت خریدی۔", "هن هڪ فائديمند لغت خريد ڪئي."],
          ["He waited for an hour.", "اس نے ایک گھنٹہ انتظار کیا۔", "هن هڪ ڪلاڪ انتظار ڪيو."],
          ["I need a pen and an eraser.", "مجھے ایک قلم اور ایک ربڑ چاہیے۔", "مون کي هڪ قلم ۽ هڪ رٻڙ گهرجي."],
          ["A European visitor came today.", "آج ایک یورپی مہمان آیا۔", "اڄ هڪ يورپي مهمان آيو."],
          ["An honest person keeps promises.", "ایک ایماندار شخص وعدے پورے کرتا ہے۔", "هڪ ايماندار ماڻهو واعدا نڀائيندو آهي."],
          ["She wants to be a pilot.", "وہ پائلٹ بننا چاہتی ہے۔", "هوءَ پائلٽ ٿيڻ چاهي ٿي."]
        ]
      },
      {
        title: "Omission of the Article — Zero Article",
        english: "An article is often omitted when a noun is used in a general sense or in certain fixed expressions. This is sometimes called the zero article: no a, an or the is written before the noun.\n\n1. Plural countable nouns used generally: “Books are useful.” This means books in general, not particular books.\n2. Uncountable nouns used generally: “Water is essential”; “Honesty is important.” Do not add an article when speaking about the substance or idea generally.\n3. Names of people and most places: “Ali lives in Karachi”; “Pakistan is a beautiful country.” Many country names do not take the.\n4. Names of languages and school subjects: “She speaks English”; “Mathematics is difficult.” Use an article only when the noun is made specific or has a different meaning.\n5. Names of meals used generally: “We have breakfast at seven.” But a special meal can take an article: “We had a wonderful dinner.”\n6. Names of sports and games: “They play cricket”; “He likes football.”\n7. Days, months and festivals used as names: “Monday is busy”; “August is hot”; “Eid begins tomorrow.”\n8. By + transport or communication method: “by bus,” “by train,” “by air,” “by email.” But say “on the bus” when referring to a particular bus.\n9. Certain institutional expressions when the institution's usual purpose is meant: “go to school,” “be in hospital” (especially British usage), “go to bed,” “go to church,” “be at work.” Compare a specific building: “I went to the school to meet the principal.”\n10. At home, at night, by day, at noon and similar fixed expressions commonly omit an article.\n11. Titles followed by a person's name: “President Lincoln,” “Dr Khan,” “Professor Ahmed.” But use the article when the title is not directly followed by the name: “The president addressed the nation.”\n12. Some expressions with next and last: “next week,” “last year,” “next Monday.” Compare “the next week” when a particular following week is meant.\n13. Possessives and demonstratives already identify the noun, so do not normally combine them with an article: “my book,” “this house,” “those students,” not “the my book.”\n14. Do not omit the article when the noun is specific. Compare “Children need care” (children generally) with “The children in this class need care” (a particular group).\n\nArticle omission can vary in fixed expressions and in British and American usage. Always consider whether the noun is general, part of a set phrase, or specifically identified.",
        urdu: "جب اسم کو عمومی معنی میں استعمال کیا جائے یا وہ کسی مقررہ ترکیب کا حصہ ہو تو اکثر article حذف کر دیا جاتا ہے۔ اسے zero article بھی کہتے ہیں، یعنی اسم سے پہلے a، an یا the نہیں لکھا جاتا۔\n\n1. عمومی معنی میں جمع قابلِ شمار اسم: “Books are useful.” یعنی کتابیں فائدہ مند ہیں۔ یہاں کسی خاص کتابوں کی بات نہیں۔\n2. عمومی معنی میں ناقابلِ شمار اسم: “Water is essential” یعنی پانی ضروری ہے؛ “Honesty is important” یعنی ایمانداری اہم ہے۔ مادے یا خیال کا عمومی ذکر ہو تو article نہ لگائیں۔\n3. افراد اور اکثر جگہوں کے نام: “Ali lives in Karachi” یعنی علی کراچی میں رہتا ہے؛ “Pakistan is a beautiful country” یعنی پاکستان خوبصورت ملک ہے۔\n4. زبانوں اور تعلیمی مضامین کے نام: “She speaks English” یعنی وہ انگریزی بولتی ہے؛ “Mathematics is difficult” یعنی ریاضی مشکل ہے۔\n5. کھانوں کے عمومی نام: “We have breakfast at seven” یعنی ہم سات بجے ناشتہ کرتے ہیں۔ کسی خاص کھانے کے لیے article آ سکتا ہے: “a wonderful dinner”۔\n6. کھیلوں کے نام: “They play cricket” یعنی وہ کرکٹ کھیلتے ہیں۔\n7. دنوں، مہینوں اور تہواروں کے نام: “Monday is busy”، “August is hot”، “Eid begins tomorrow”۔\n8. By کے بعد سفر یا رابطے کا ذریعہ: by bus، by train، by air، by email۔ لیکن کسی خاص بس کے لیے “on the bus” کہیں۔\n9. بعض اداروں کے ساتھ جب ان کا معمول کا مقصد مراد ہو: go to school، go to bed، go to church، be at work۔ لیکن مخصوص عمارت مراد ہو تو article لگ سکتا ہے: “I went to the school to meet the principal.”\n10. At home، at night، by day اور at noon جیسی مقررہ ترکیبوں میں عموماً article نہیں آتا۔\n11. کسی شخص کے نام سے پہلے عہدہ یا لقب: “President Lincoln”، “Dr Khan”، “Professor Ahmed”۔ لیکن نام کے بغیر عہدہ آئے تو the لگتا ہے: “The president addressed the nation.”\n12. Next اور last کی بعض ترکیبیں: next week، last year، next Monday۔ کسی خاص آنے والے ہفتے کے لیے “the next week” بھی آ سکتا ہے۔\n13. Possessives اور demonstratives پہلے ہی اسم کی شناخت بتاتے ہیں، اس لیے ان کے ساتھ عموماً article نہیں لگاتے: my book، this house، those students؛ “the my book” غلط ہے۔\n14. جب اسم خاص ہو تو article حذف نہ کریں۔ فرق دیکھیں: “Children need care” یعنی بچوں کو عمومی طور پر دیکھ بھال چاہیے؛ “The children in this class need care” یعنی اس جماعت کے مخصوص بچوں کو دیکھ بھال چاہیے۔\n\nمقررہ فقروں اور برطانوی و امریکی انگریزی میں کچھ فرق ہو سکتا ہے۔ ہمیشہ دیکھیں کہ اسم عمومی ہے، کسی مقررہ ترکیب میں ہے یا خاص طور پر متعین ہے۔",
        sindhi: "جڏهن اسم عام معنيٰ ۾ استعمال ٿئي يا ڪنهن مقرر اصطلاح جو حصو هجي ته اڪثر article ڇڏي ڏبو آهي. ان کي zero article به چيو ويندو آهي، يعني اسم کان اڳ a، an يا the نه لکبو.\n\n1. عام معنيٰ ۾ جمع ڳڻپ لائق اسم: “Books are useful.” يعني ڪتاب فائديمند آهن. هتي ڪنهن خاص ڪتابن جو ذڪر ناهي.\n2. عام معنيٰ ۾ اڻ ڳڻپ لائق اسم: “Water is essential” يعني پاڻي ضروري آهي؛ “Honesty is important” يعني ايمانداري اهم آهي. شيءِ يا خيال جو عام ذڪر هجي ته article نه لڳايو.\n3. ماڻهن ۽ گهڻن هنڌن جا نالا: “Ali lives in Karachi” يعني علي ڪراچيءَ ۾ رهي ٿو؛ “Pakistan is a beautiful country” يعني پاڪستان سهڻو ملڪ آهي.\n4. ٻولين ۽ اسڪولي مضمونن جا نالا: “She speaks English” يعني هوءَ انگريزي ڳالهائي ٿي؛ “Mathematics is difficult” يعني رياضي ڏکي آهي.\n5. کاڌن جا عام نالا: “We have breakfast at seven” يعني اسان ستين وڳي ناشتو ڪريون ٿا. ڪنهن خاص مانيءَ لاءِ article اچي سگهي ٿو.\n6. راندين جا نالا: “They play cricket” يعني اهي ڪرڪيٽ کيڏن ٿا.\n7. ڏينهن، مهينن ۽ تهوارن جا نالا: “Monday is busy”، “August is hot”، “Eid begins tomorrow.”\n8. By کان پوءِ سفر يا رابطي جو طريقو: by bus، by train، by air، by email. پر ڪنهن خاص بس لاءِ “on the bus” چئبو.\n9. ڪن ادارن سان جڏهن انهن جو عام مقصد مراد هجي: go to school، go to bed، go to church، be at work. پر خاص عمارت مراد هجي ته article لڳي سگهي ٿو.\n10. At home، at night، by day ۽ at noon جهڙن مقرر اصطلاحن ۾ عام طور article نه ايندو.\n11. ڪنهن ماڻهوءَ جي نالي کان اڳ عهدو يا لقب: “President Lincoln”، “Dr Khan”، “Professor Ahmed”. پر نالي کان سواءِ عهدو اچي ته the لڳندو: “The president addressed the nation.”\n12. Next ۽ last جون ڪجهه ترڪيبون: next week، last year، next Monday. ڪنهن خاص ايندڙ هفتي لاءِ “the next week” به اچي سگهي ٿو.\n13. Possessives ۽ demonstratives اڳ ئي اسم جي سڃاڻپ ڏين ٿا، تنهنڪري انهن سان عام طور article نه لڳائبو: my book، this house، those students؛ “the my book” غلط آهي.\n14. جڏهن اسم خاص هجي ته article نه ڇڏجي. فرق ڏسو: “Children need care” يعني ٻارن کي عام طور سار سنڀال گهرجي؛ “The children in this class need care” يعني هن ڪلاس جي خاص ٻارن کي سار سنڀال گهرجي.\n\nمقرر اصطلاحن ۽ برطانوي توڙي آمريڪي انگريزيءَ ۾ ڪجهه فرق ٿي سگهي ٿو. هميشه ڏسو ته اسم عام آهي، مقرر اصطلاح ۾ آهي يا خاص طور سڃاڻپ ٿيل آهي.",
        examples: [
          ["Books are useful.", "کتابیں فائدہ مند ہیں۔", "ڪتاب فائديمند آهن."],
          ["Water is necessary for life.", "زندگی کے لیے پانی ضروری ہے۔", "زندگيءَ لاءِ پاڻي ضروري آهي."],
          ["Ali lives in Karachi.", "علی کراچی میں رہتا ہے۔", "علي ڪراچيءَ ۾ رهي ٿو."],
          ["She speaks English fluently.", "وہ روانی سے انگریزی بولتی ہے۔", "هوءَ روانيءَ سان انگريزي ڳالهائي ٿي."],
          ["Mathematics is my favourite subject.", "ریاضی میرا پسندیدہ مضمون ہے۔", "رياضي منهنجو پسنديده مضمون آهي."],
          ["We eat breakfast at eight.", "ہم آٹھ بجے ناشتہ کرتے ہیں۔", "اسان اٺين وڳي ناشتو ڪريون ٿا."],
          ["The boys play cricket after school.", "لڑکے اسکول کے بعد کرکٹ کھیلتے ہیں۔", "ڇوڪرا اسڪول کان پوءِ ڪرڪيٽ کيڏن ٿا."],
          ["August is usually hot.", "اگست عموماً گرم ہوتا ہے۔", "آگسٽ عام طور گرم هوندو آهي."],
          ["My father travels by bus.", "میرے والد بس کے ذریعے سفر کرتے ہیں۔", "منهنجو پيءُ بس ذريعي سفر ڪندو آهي."],
          ["The children go to school every day.", "بچے ہر روز اسکول جاتے ہیں۔", "ٻار هر روز اسڪول وڃن ٿا."],
          ["I go to bed at ten.", "میں دس بجے سونے جاتا ہوں۔", "مان ڏهين وڳي سمهڻ وڃان ٿو."],
          ["She is at home today.", "وہ آج گھر پر ہے۔", "هوءَ اڄ گهر ۾ آهي."],
          ["Dr Ahmed teaches science.", "ڈاکٹر احمد سائنس پڑھاتے ہیں۔", "ڊاڪٽر احمد سائنس پڙهائيندو آهي."],
          ["We visited Pakistan last year.", "ہم نے گزشتہ سال پاکستان کی سیر کی۔", "اسان گذريل سال پاڪستان گهمڻ وياسين."],
          ["Honesty is the best policy.", "ایمانداری بہترین اصول ہے۔", "ايمانداري بهترين اصول آهي."]
        ]
      }
    ]
  },
  "prepositions": {
    overview: "Prepositions show relationships such as place, time, direction, cause and method. They usually begin a prepositional phrase containing a noun or pronoun.",
    watchFor: "Many prepositions are fixed by common usage or the word they follow: interested in, depend on, good at. Learn these combinations as phrases.",
    examples: ["The keys are under the chair. (place)", "We arrived at noon. (time)", "She is interested in science."]
  },
  "voice": {
    overview: "Voice changes the focus of a clause. Active voice puts the doer in subject position; passive voice makes the receiver or result the focus, using a form of be plus a past participle.",
    watchFor: "Keep the tense when changing voice, and use by only when the agent matters. Not every verb can form a natural passive.",
    examples: ["Active: The team repaired the bridge.", "Passive: The bridge was repaired by the team."]
  },
  "reported-speech": {
    overview: "Direct speech quotes the speaker's exact words. Reported speech gives the meaning without quoting; pronouns, time expressions and verb forms may change to fit the reporting context.",
    watchFor: "Backshift is common after a past reporting verb, but it is not automatic when the statement is still true or the reporting verb is present.",
    examples: ["Direct: Sara said, “I am tired.”", "Reported: Sara said that she was tired."]
  },
  "adverbs": {
    overview: "Adverbs add information about how, when, where, how often or to what degree something happens. They can modify verbs, adjectives, other adverbs or whole clauses.",
    watchFor: "Not every adverb ends in -ly, and some -ly words are adjectives. Position can change emphasis or meaning.",
    examples: ["He spoke quietly. (manner)", "We rarely eat out. (frequency)", "The water is very cold. (degree)"]
  },
  "conjunctions": {
    overview: "Conjunctions connect words, phrases or clauses. Coordinating conjunctions join equal units, while subordinating conjunctions introduce dependent clauses.",
    watchFor: "Keep the structures balanced when using pairs such as either...or and neither...nor. Avoid joining two complete sentences with only a comma.",
    examples: ["I wanted tea, but she chose coffee.", "We stayed inside because it was raining."]
  },
  "interjections": {
    overview: "Interjections are short expressions that communicate reactions or feelings. They are often separate from the grammar of the main sentence.",
    watchFor: "Use punctuation to show the strength of the reaction. In formal writing, use interjections sparingly.",
    examples: ["Oh! I left my notebook at home.", "Hurray! Our team has won."]
  },
  "subject-predicate": {
    overview: "The subject tells who or what the sentence is about. The predicate says something about the subject and contains the verb.",
    watchFor: "The subject can be a phrase or clause, not just one word. Find the main verb first, then identify who or what performs or experiences it.",
    examples: ["The little boy in the blue coat / won the race.", "What she said / surprised everyone."]
  },
  "sentence-types": {
    overview: "Sentences can be classified by purpose: declarative statements, interrogative questions, imperative commands or requests, and exclamatory expressions.",
    watchFor: "Sentence purpose and sentence structure are different classifications. A question can also be complex, and a command can have an understood subject you.",
    examples: ["The shop is open. (statement)", "Please close the door. (request)", "What a beautiful view! (exclamation)"]
  },
  "subject-verb-agreement": {
    overview: "A verb agrees with its subject in person and number. In the present simple, many third-person singular subjects take a verb ending in -s or -es.",
    watchFor: "Do not let a noun inside a prepositional phrase distract you from the real subject: “The box of pencils is here.”",
    examples: ["The list of names is on the desk.", "The players are ready.", "Each student has a book."]
  },
  "punctuation": {
    overview: "Punctuation marks organise writing and guide the reader through pauses, sentence boundaries, quotations and extra information.",
    watchFor: "A comma alone cannot normally join two independent clauses. Use a full stop, semicolon or comma plus a coordinating conjunction.",
    examples: ["After dinner, we went for a walk.", "I called her, but she did not answer.", "“Are you ready?” he asked."]
  },
  "countable-uncountable": {
    overview: "Countable nouns have singular and plural forms and can be counted individually. Uncountable nouns refer to substances, concepts or categories not normally counted as separate units.",
    watchFor: "Use many and few with countable plurals; use much and little with uncountable nouns. Use a unit phrase to count an uncountable item.",
    examples: ["How many apples do we need?", "How much rice is left?", "Two pieces of advice were helpful."]
  },
  "comparatives-superlatives": {
    overview: "Comparatives compare two people or things; superlatives identify the highest or lowest degree in a group. Short adjectives often use -er and -est; longer ones often use more and most.",
    watchFor: "Do not use double comparison forms such as more easier. Use than after many comparatives and the before many superlatives.",
    examples: ["This road is wider than that one.", "She is the most careful driver in the family."]
  },
  "modals": {
    overview: "Modal auxiliaries express ability, possibility, permission, advice, obligation or prediction. They are followed by the base form of the main verb.",
    watchFor: "A modal does not take -s in the third person, and it is not followed by to in ordinary modal constructions: “He can swim.”",
    examples: ["You should check your answers. (advice)", "It might rain later. (possibility)", "May I come in? (permission)"]
  },
  "clauses-and-phrases": {
    overview: "A phrase is a group of words that works as a unit but does not contain a complete subject–finite-verb combination. A clause contains a subject and a verb; it may be independent or dependent.",
    watchFor: "A dependent clause cannot normally stand alone as a complete sentence. Look for both a subject and a verb when identifying a clause.",
    examples: ["under the old bridge (phrase)", "when the bell rang (dependent clause)", "The bell rang. (independent clause)"]
  },
  "conditionals": {
    overview: "Conditional sentences link a condition with a result. Common patterns include zero conditional for general truths, first for real possibilities, second for imagined situations and third for unreal past situations.",
    watchFor: "In standard first conditional sentences, use a present form in the if-clause and will plus the base verb in the result clause; avoid will directly after if in this pattern.",
    examples: ["If you heat ice, it melts. (general truth)", "If it rains, we will stay home. (real possibility)", "If I had known, I would have called. (unreal past)"]
  },
  "gerunds-infinitives": {
    overview: "A gerund is the -ing form used as a noun-like unit; an infinitive is usually to plus the base verb. Different verbs and expressions select different forms.",
    watchFor: "Some verbs change meaning depending on the form that follows, such as stop doing (end an activity) and stop to do (pause in order to do something).",
    examples: ["Swimming is good exercise. (gerund)", "I hope to travel soon. (infinitive)", "She stopped talking."]
  },
  "relative-clauses": {
    overview: "Relative clauses describe a noun. Who and whom refer to people, which to things, and that can refer to people or things in many defining clauses; whose shows possession.",
    watchFor: "Defining relative clauses identify which person or thing is meant and do not take commas. Non-defining clauses add extra information and are set off by commas.",
    examples: ["The student who won is my cousin. (defining)", "My car, which is ten years old, still runs well. (extra information)"]
  },
  "question-tags": {
    overview: "Question tags are short questions added to statements to check information or invite agreement. A positive statement usually takes a negative tag, and a negative statement usually takes a positive tag.",
    watchFor: "Repeat the auxiliary in the tag. If there is no auxiliary in a present or past simple statement, use do, does or did.",
    examples: ["You are ready, aren't you?", "She doesn't drive, does she?", "They arrived early, didn't they?"]
  },
  "the-sentence": {
    overview: "A complete sentence expresses a complete thought and normally contains an independent clause. It begins with a capital letter and ends with appropriate punctuation.",
    watchFor: "A fragment may look like a sentence but lack a main clause. A run-on joins independent clauses without correct punctuation or linking.",
    examples: ["Because the bus was late. (fragment)", "Because the bus was late, we walked. (complete sentence)"]
  },
  "kinds-of-nouns": {
    overview: "Nouns can be grouped by meaning and use: proper and common, concrete and abstract, collective and material. A noun may fit more than one description.",
    watchFor: "Proper nouns name specific people or places and usually begin with capital letters. Common nouns name general classes.",
    examples: ["London (proper), city (common)", "team (collective), gold (material), courage (abstract)"]
  },
  "noun-gender": {
    overview: "Traditional grammar describes masculine, feminine, common and neuter gender. Modern English often uses gender-neutral job titles and singular they when a person's gender is unknown or irrelevant.",
    watchFor: "Choose a person's pronouns according to how that person identifies; avoid assuming gender from a profession or role.",
    examples: ["actor / actress (traditional pairs)", "The teacher said they would call tomorrow. (gender-neutral)"]
  },
  "noun-number": {
    overview: "Number shows whether a noun refers to one or more than one. Most countable nouns form plurals with -s or -es, while others have irregular forms or no change.",
    watchFor: "Learn irregular plurals such as children, feet and mice. Some nouns ending in -s are singular in meaning, such as news.",
    examples: ["one child, two children", "one box, three boxes", "The news is encouraging."]
  },
  "noun-case": {
    overview: "Case shows the grammatical relationship of a noun or pronoun to other words. English nouns mainly show possession with apostrophe-s; pronouns also have subject and object forms.",
    watchFor: "Use an apostrophe to mark possession, not ordinary plurals. Distinguish “the student's books” from “the students' books.”",
    examples: ["The girl's bag is blue. (one girl)", "The girls' bags are blue. (more than one girl)"]
  },
  "personal-pronouns": {
    overview: "Personal pronouns refer to speakers, listeners or other people and things. They change form for subject, object and possession, as in I/me/my/mine.",
    watchFor: "Use subject forms before verbs and object forms after verbs or prepositions: “She called me,” not “She called I.”",
    examples: ["They invited us.", "This seat is mine."]
  },
  "adjectives-as-nouns": {
    overview: "Some adjectives can represent a whole group of people when used with the definite article, as in the rich or the elderly. They generally take plural agreement.",
    watchFor: "These group expressions usually do not take a plural -s: say “the elderly,” not “the elderlies.”",
    examples: ["The injured were taken to hospital.", "We should support the poor."]
  },
  "position-of-adjectives": {
    overview: "Adjectives commonly appear before the noun they modify or after linking verbs such as be, seem, look and feel. Some adjectives have a more restricted position.",
    watchFor: "Use an adjective, not an adverb, after a linking verb when describing the subject: “The soup smells good.”",
    examples: ["a quiet room (before noun)", "The room is quiet. (after linking verb)", "She felt happy."]
  },
  "correct-use-of-adjectives": {
    overview: "Adjectives that look similar can have different meanings or patterns, such as interested/interesting and few/a few or little/a little. Accurate choice depends on what is being described.",
    watchFor: "Use -ed adjectives for the person or thing experiencing a feeling and -ing adjectives for what causes it: “I am bored; the lesson is boring.”",
    examples: ["There are a few seats left. (some)", "There is little time left. (not much)", "The film was exciting; we were excited."]
  },
  "reflexive-emphatic-pronouns": {
    overview: "Reflexive pronouns end in -self or -selves. They are reflexive when the subject and object are the same, and emphatic when they simply add emphasis.",
    watchFor: "Do not use a reflexive pronoun as an ordinary subject or object when a personal pronoun is needed.",
    examples: ["She taught herself to play. (reflexive)", "The principal himself welcomed us. (emphatic)"]
  },
  "demonstrative-indefinite-distributive-pronouns": {
    overview: "Demonstratives point to particular people or things; indefinite pronouns refer to non-specific ones; distributive pronouns consider members of a group separately.",
    watchFor: "Each, either and neither are generally treated as singular in formal agreement. This and that are singular; these and those are plural.",
    examples: ["These are fresh.", "Someone left a message.", "Each of the players has a locker."]
  },
  "relative-pronouns": {
    overview: "Relative pronouns introduce relative clauses and connect them to a noun. Who is commonly used for people, which for things, that in many defining clauses, and whose for possession.",
    watchFor: "Use whom when the pronoun is the object in formal style, though who is common in everyday speech. Do not use that in a non-defining clause set off by commas.",
    examples: ["The author who wrote this book is here.", "The house that Jack built is old.", "The woman whose bag was lost called."]
  },
  "interrogative-pronouns": {
    overview: "Interrogative pronouns ask questions about people or things. Who asks about a person as subject, whom as object in formal usage, whose about possession, and what or which about things or choices.",
    watchFor: "Use which when choosing from a limited or known set; use what when the range is open or general.",
    examples: ["Who called you?", "Whose is this notebook?", "Which would you prefer, tea or coffee?"]
  },
  "the-verb": {
    overview: "A verb is the central part of a predicate. It may be transitive and take an object, intransitive without an object, or linking and followed by a subject complement.",
    watchFor: "A linking verb connects the subject to a description or identity; the complement is not a direct object.",
    examples: ["She opened the window. (transitive)", "The baby slept. (intransitive)", "He became a doctor. (linking)"]
  },
  "verbs-incomplete-predication": {
    overview: "Some verbs do not complete their meaning with an object alone and need a subject complement. Common linking verbs include be, become, seem, appear and remain.",
    watchFor: "The complement describes or identifies the subject. In “The sky became dark,” dark describes the sky; it is not an object receiving an action.",
    examples: ["The plan seems sensible.", "Her brother became an engineer.", "The milk went sour."]
  },
  "active-passive-voice": {
    overview: "The passive is formed with the appropriate tense of be plus the past participle. It is useful when the action or receiver is more important than the person doing it.",
    watchFor: "The object of an active sentence usually becomes the passive subject. Keep the original tense and check that the verb can take an object.",
    examples: ["Active: Someone has cleaned the room.", "Passive: The room has been cleaned."]
  },
  "mood": {
    overview: "Mood expresses how a speaker presents an action: as a fact, a command, a possibility, a wish or a condition. English uses indicative, imperative and subjunctive patterns.",
    watchFor: "The subjunctive often uses the base form after demands or recommendations and were in formal hypothetical expressions: “I suggest that he be present.”",
    examples: ["She is here. (indicative)", "Please listen. (imperative)", "If I were you, I would wait. (hypothetical subjunctive)"]
  },
  "tenses-introduction": {
    overview: "Tense forms locate events in time, while aspect shows whether an event is simple, ongoing, completed or continuing up to a point. These meanings combine in English verb phrases.",
    watchFor: "Do not treat every time expression as requiring one fixed tense. Consider whether the event is finished, repeated, in progress or connected to now.",
    examples: ["She works every day. (habit)", "She is working now. (in progress)", "She has worked here for years. (connection to now)"]
  },
  "uses-present-past-tenses": {
    overview: "Present forms describe habits, facts, current situations and actions in progress. Past forms describe completed past events, past habits and actions in progress at a past time.",
    watchFor: "Use the present perfect when a past event has present relevance or continues to now; use the simple past with a finished time such as yesterday or last year.",
    examples: ["He visits every Sunday. (habit)", "He visited yesterday. (finished past)", "He has just arrived. (present relevance)"]
  },
  "the-future": {
    overview: "English expresses future meaning in several ways: will, be going to, the present continuous and the present simple for scheduled events. The best choice depends on intention, evidence and arrangement.",
    watchFor: "Use will often for decisions made at the moment or predictions; going to often signals a prior intention or evidence-based prediction.",
    examples: ["I'll answer the phone. (instant decision)", "Look at those clouds; it is going to rain. (evidence)", "The train leaves at six. (schedule)"]
  },
  "verb-person-number": {
    overview: "Person identifies the speaker, listener or someone else; number identifies singular or plural. In the present simple, most third-person singular subjects take -s or -es.",
    watchFor: "Be careful with subjects joined by and, indefinite pronouns such as everyone, and phrases between the subject and verb.",
    examples: ["I am ready; they are ready.", "Everyone knows the answer.", "My friends live nearby."]
  },
  "the-infinitive": {
    overview: "The to-infinitive consists of to plus the base verb; the bare infinitive omits to. Infinitives can function as subjects, complements or expressions of purpose.",
    watchFor: "After modal verbs and let or make in active clauses, use the bare infinitive: “can go,” “let him speak.”",
    examples: ["To learn takes patience. (subject)", "She wants to improve. (to-infinitive)", "You must leave now. (bare infinitive)"]
  },
  "the-participle": {
    overview: "Participles are verb forms used in verb phrases and adjective-like roles. The present participle ends in -ing; the past participle often ends in -ed but may be irregular.",
    watchFor: "Do not confuse a participle in a continuous verb phrase with a gerund used as a noun. The surrounding sentence shows its function.",
    examples: ["They are waiting outside. (present participle)", "The broken window needs repair. (past participle as adjective)"]
  },
  "the-gerund": {
    overview: "A gerund is the -ing form of a verb used in a noun-like way. It can be the subject, object or complement of a sentence and can still take its own object or adverbial modifiers.",
    watchFor: "After prepositions, use a gerund rather than a to-infinitive: “interested in learning,” “before leaving.”",
    examples: ["Reading improves vocabulary. (subject)", "She enjoys painting landscapes. (object)", "He left without saying goodbye. (after preposition)"]
  }
};

// Extra examples give learners more sentence patterns to practise.
const extraTopicExamples = {
  "parts-of-speech": [
    "Birds fly over the tall trees. (Birds = noun, fly = verb, tall = adjective)",
    "She quickly opened the door. (quickly = adverb, the = article)"
  ],
  "nouns": [
    "The teacher praised the students. (people)",
    "Patience brings success. (quality)"
  ],
  "pronouns": [
    "He gave her a present.",
    "We enjoyed ourselves at the park."
  ],
  "verbs": [
    "The baby is sleeping.",
    "They will visit Lahore tomorrow."
  ],
  "adjectives": [
    "She bought a beautiful dress.",
    "The room is clean and spacious."
  ],
  "tenses": [
    "I write in my diary every night. (present habit)",
    "They were playing when it started raining. (past continuous)"
  ],
  "articles": [
    "I saw an elephant at the zoo.",
    "The sun rises in the east."
  ],
  "prepositions": [
    "The picture hangs above the sofa.",
    "We have lived here since Monday."
  ],
  "voice": [
    "Active: The chef cooks the meal.",
    "Passive: The meal is cooked by the chef."
  ],
  "reported-speech": [
    "Direct: He said, “I like tea.” Reported: He said that he liked tea.",
    "Direct: She said, “I will help.” Reported: She said that she would help."
  ],
  "adverbs": [
    "The train arrived late. (time)",
    "He almost missed the bus. (degree)"
  ],
  "conjunctions": [
    "You can have tea or coffee.",
    "Although it was cold, we went outside."
  ],
  "interjections": [
    "Alas! We lost the match.",
    "Wow! This painting is amazing."
  ],
  "subject-predicate": [
    "My younger sister / plays the piano.",
    "The birds in the garden / are singing."
  ],
  "sentence-types": [
    "Where do you live? (question)",
    "Never touch a hot pan. (command)"
  ],
  "subject-verb-agreement": [
    "My brother plays cricket.",
    "The books on the shelf are mine."
  ],
  "punctuation": [
    "My favourite colours are red, blue and green.",
    "It is raining; take an umbrella."
  ],
  "countable-uncountable": [
    "There are three chairs in the room.",
    "Please give me some information."
  ],
  "comparatives-superlatives": [
    "A train is faster than a bus.",
    "This is the tallest building in town."
  ],
  "modals": [
    "You must wear a seat belt. (obligation)",
    "Could you help me, please? (polite request)"
  ],
  "clauses-and-phrases": [
    "after the long journey (phrase)",
    "I smiled because I was happy. (main and dependent clauses)"
  ],
  "conditionals": [
    "If you study, you will improve. (first conditional)",
    "If I had more time, I would learn French. (second conditional)"
  ],
  "gerunds-infinitives": [
    "He avoids eating junk food. (gerund)",
    "They decided to start early. (infinitive)"
  ],
  "relative-clauses": [
    "The girl who sits beside me is kind.",
    "This is the phone that I bought yesterday."
  ],
  "question-tags": [
    "He can swim, can't he?",
    "Let's begin, shall we?"
  ],
  "the-sentence": [
    "The children are playing outside. (complete sentence)",
    "When the teacher arrived. (fragment)"
  ],
  "kinds-of-nouns": [
    "Pakistan is a country. (proper and common nouns)",
    "A flock of birds flew away. (collective noun)"
  ],
  "noun-gender": [
    "The king welcomed the guests. (masculine)",
    "The nurse said they would return soon. (gender-neutral pronoun)"
  ],
  "noun-number": [
    "one tooth, two teeth",
    "one leaf, many leaves"
  ],
  "noun-case": [
    "The boy's bicycle is new. (singular possession)",
    "The teachers' room is upstairs. (plural possession)"
  ],
  "personal-pronouns": [
    "I saw him at the market.",
    "They gave us their address."
  ],
  "adjectives-as-nouns": [
    "The young should respect the old.",
    "The blind can access books in different formats."
  ],
  "position-of-adjectives": [
    "It is a delicious meal. (before noun)",
    "The meal tastes delicious. (after linking verb)"
  ],
  "correct-use-of-adjectives": [
    "The instructions are confusing; I am confused.",
    "We have a little milk left. (some milk)"
  ],
  "reflexive-emphatic-pronouns": [
    "I cut myself while cooking. (reflexive)",
    "The queen herself opened the exhibition. (emphatic)"
  ],
  "demonstrative-indefinite-distributive-pronouns": [
    "Those are my shoes. (demonstrative)",
    "Neither of the answers is correct. (distributive)"
  ],
  "relative-pronouns": [
    "The man whom we met was friendly.",
    "I know a writer whose books are popular."
  ],
  "interrogative-pronouns": [
    "What is your name?",
    "Whom did you invite? (formal object form)"
  ],
  "the-verb": [
    "The children laughed loudly. (intransitive)",
    "She painted a picture. (transitive)"
  ],
  "verbs-incomplete-predication": [
    "The flowers smell sweet.",
    "His idea sounds interesting."
  ],
  "active-passive-voice": [
    "Active: The police caught the thief.",
    "Passive: The thief was caught by the police."
  ],
  "mood": [
    "May you succeed! (wish)",
    "The committee recommends that he attend. (subjunctive)"
  ],
  "tenses-introduction": [
    "They have been waiting for an hour. (continuing action)",
    "We had finished dinner before he arrived. (earlier past action)"
  ],
  "uses-present-past-tenses": [
    "Water boils at 100°C. (general fact)",
    "I was reading when the phone rang. (past action in progress)"
  ],
  "the-future": [
    "She is meeting her friend tomorrow. (arrangement)",
    "I think our team will win. (prediction)"
  ],
  "verb-person-number": [
    "She writes neatly. (third-person singular)",
    "You and I are classmates. (plural subject)"
  ],
  "the-infinitive": [
    "He came to see his uncle. (purpose)",
    "Let the children play. (bare infinitive)"
  ],
  "the-participle": [
    "The crying baby needs milk. (present participle)",
    "The letter was written yesterday. (past participle)"
  ],
  "the-gerund": [
    "Dancing is her favourite hobby. (subject)",
    "He is fond of reading novels. (after preposition)"
  ]
};
for (const [topicId, examples] of Object.entries(extraTopicExamples)) {
  if (topicDetails[topicId]) topicDetails[topicId].examples.push(...examples);
}


// Two more practice examples for every grammar topic.
const furtherTopicExamples = {
  "parts-of-speech": [
    "Honesty is the best policy. (honesty = noun, is = verb, best = adjective)",
    "The little bird sang sweetly. (little = adjective, sang = verb, sweetly = adverb)"
  ],
  "nouns": [
    "The committee held a meeting. (collective noun)",
    "Childhood is full of discoveries. (abstract noun)"
  ],
  "pronouns": [
    "This is the book that I wanted.",
    "Nobody knows the correct answer."
  ],
  "verbs": [
    "The students completed their homework.",
    "My father has repaired the bicycle."
  ],
  "adjectives": [
    "It was a difficult examination.",
    "We watched an exciting match."
  ],
  "tenses": [
    "She has been studying since morning. (present perfect continuous)",
    "They had left before the rain began. (past perfect)"
  ],
  "articles": [
    "She is a university student.",
    "He waited for an hour."
  ],
  "prepositions": [
    "The cat is hiding beneath the table.",
    "We walked through the tunnel."
  ],
  "voice": [
    "Active: The workers are painting the bridge.",
    "Passive: The bridge is being painted by the workers."
  ],
  "reported-speech": [
    "Direct: Ali said, “I am tired.” Reported: Ali said that he was tired.",
    "Direct: She said, “Open the window.” Reported: She told me to open the window."
  ],
  "adverbs": [
    "She speaks English fluently. (manner)",
    "I have already finished my work. (time)"
  ],
  "conjunctions": [
    "I stayed home because I was ill.",
    "Work hard, and you will succeed."
  ],
  "interjections": [
    "Hurray! We won the final.",
    "Oh! I forgot my keys."
  ],
  "subject-predicate": [
    "The old clock / stopped suddenly.",
    "Our teacher / explained the lesson clearly."
  ],
  "sentence-types": [
    "What a beautiful garden! (exclamation)",
    "Please close the door. (request)"
  ],
  "subject-verb-agreement": [
    "The dog barks every night.",
    "Neither answer is correct."
  ],
  "punctuation": [
    "Sara said, “I am ready.”",
    "We bought apples, oranges, and bananas."
  ],
  "countable-uncountable": [
    "There is an apple on the desk. (countable)",
    "The bottle contains plenty of water. (uncountable)"
  ],
  "comparatives-superlatives": [
    "This road is narrower than the main road.",
    "She is the most careful driver in our family."
  ],
  "modals": [
    "You should drink more water. (advice)",
    "It might rain this evening. (possibility)"
  ],
  "clauses-and-phrases": [
    "because the shop was closed (dependent clause)",
    "under the wooden bridge (prepositional phrase)"
  ],
  "conditionals": [
    "If you heat ice, it melts. (zero conditional)",
    "If they had hurried, they would have caught the bus. (third conditional)"
  ],
  "gerunds-infinitives": [
    "Swimming keeps the body healthy. (gerund)",
    "I hope to visit Karachi soon. (infinitive)"
  ],
  "relative-clauses": [
    "The student who won the prize is my cousin.",
    "I found the keys which I had lost."
  ],
  "question-tags": [
    "You are coming with us, aren't you?",
    "She doesn't eat meat, does she?"
  ],
  "the-sentence": [
    "The sun disappeared behind the clouds. (complete sentence)",
    "Because I was late. (fragment)"
  ],
  "kinds-of-nouns": [
    "The team celebrated its victory. (collective noun)",
    "Gold is an expensive metal. (material noun)"
  ],
  "noun-gender": [
    "The actress received an award. (feminine)",
    "The stallion ran across the field. (masculine)"
  ],
  "noun-number": [
    "one mouse, two mice",
    "one city, several cities"
  ],
  "noun-case": [
    "This is Ahmed's notebook. (possessive case)",
    "The child kicked the ball. (objective case)"
  ],
  "personal-pronouns": [
    "She invited them to dinner.",
    "You should believe in yourself."
  ],
  "adjectives-as-nouns": [
    "The rich should help the poor.",
    "The elderly deserve our respect."
  ],
  "position-of-adjectives": [
    "She wore a red scarf. (before noun)",
    "The sky looks clear. (after linking verb)"
  ],
  "correct-use-of-adjectives": [
    "There are fewer students today. (countable)",
    "This is the less expensive option."
  ],
  "reflexive-emphatic-pronouns": [
    "They prepared themselves for the test. (reflexive)",
    "The principal himself welcomed us. (emphatic)"
  ],
  "demonstrative-indefinite-distributive-pronouns": [
    "Everyone enjoyed the picnic. (indefinite)",
    "These are fresher than those. (demonstrative)"
  ],
  "relative-pronouns": [
    "The artist who painted this picture is famous.",
    "That is the house which belongs to my aunt."
  ],
  "interrogative-pronouns": [
    "Who is standing outside?",
    "Which of these bags is yours?"
  ],
  "the-verb": [
    "Birds migrate every winter. (intransitive)",
    "The mechanic fixed the engine. (transitive)"
  ],
  "verbs-incomplete-predication": [
    "The soup tastes delicious.",
    "The children became quiet."
  ],
  "active-passive-voice": [
    "Active: The gardener watered the plants.",
    "Passive: The plants were watered by the gardener."
  ],
  "mood": [
    "God bless you! (wish)",
    "Please submit your assignment. (imperative)"
  ],
  "tenses-introduction": [
    "He is cooking dinner now. (present continuous)",
    "She will have completed the course by June. (future perfect)"
  ],
  "uses-present-past-tenses": [
    "My mother works at a school. (present habit)",
    "They watched a film last night. (simple past)"
  ],
  "the-future": [
    "We are going to paint the room. (intention)",
    "The meeting starts at nine tomorrow. (schedule)"
  ],
  "verb-person-number": [
    "He studies science every day. (third-person singular)",
    "The players practise after school. (plural subject)"
  ],
  "the-infinitive": [
    "To forgive is sometimes difficult. (infinitive as subject)",
    "You should take a rest. (bare infinitive)"
  ],
  "the-participle": [
    "The shining stars looked beautiful. (present participle)",
    "The stolen wallet was found. (past participle)"
  ],
  "the-gerund": [
    "Cooking relaxes my mother. (subject)",
    "They discussed moving to a new house. (object)"
  ]
};
for (const [topicId, examples] of Object.entries(furtherTopicExamples)) {
  if (topicDetails[topicId]) topicDetails[topicId].examples.push(...examples);
}
