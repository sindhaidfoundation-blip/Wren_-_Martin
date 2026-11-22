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
        title: "Gender of Nouns",
        english: "Gender tells whether a noun refers to a male, female, either sex, or a non-living thing. The four traditional types are masculine, feminine, common and neuter.",
        urdu: "اسم کی جنس بتاتی ہے کہ لفظ نر، مادہ، دونوں میں سے کسی ایک، یا بے جان چیز کے لیے ہے۔ روایتی طور پر اس کی چار اقسام ہیں: مذکر، مؤنث، مشترک اور غیر ذی روح۔",
        sindhi: "اسم جي جنس مان خبر پوي ٿي ته لفظ نر، مادي، ٻنهي مان ڪنهن هڪ، يا بي جان شيءِ لاءِ آهي. روايتي طور جنس جا چار قسم آهن: مذڪر، مؤنث، گڏيل ۽ غير جاندار.",
        examples: [
          ["boy — masculine / girl — feminine", "لڑکا مذکر ہے، لڑکی مؤنث ہے۔", "ڇوڪرو مذڪر آهي، ڇوڪري مؤنث آهي."],
          ["king — masculine / queen — feminine", "بادشاہ مذکر ہے، ملکہ مؤنث ہے۔", "بادشاهه مذڪر آهي، راڻي مؤنث آهي."],
          ["father — masculine / mother — feminine", "والد مذکر ہیں، والدہ مؤنث ہیں۔", "پيءُ مذڪر آهي، ماءُ مؤنث آهي."],
          ["teacher — common gender", "Teacher مرد یا عورت دونوں کے لیے آ سکتا ہے۔", "Teacher مرد يا عورت ٻنهي لاءِ استعمال ٿي سگهي ٿو."],
          ["book — neuter gender", "کتاب بے جان چیز ہے، اس لیے neuter ہے۔", "ڪتاب بي جان شيءِ آهي، تنهنڪري neuter آهي."]
        ]
      },
      {
        title: "Common Noun",
        english: "A common noun is a general name for a person, place, animal or thing. It does not name one particular person or place.",
        urdu: "Common noun کسی شخص، جگہ، جانور یا چیز کا عام نام ہوتا ہے، کسی ایک خاص نام کو ظاہر نہیں کرتا۔",
        sindhi: "Common noun ڪنهن ماڻهو، هنڌ، جانور يا شيءِ جو عام نالو آهي؛ اهو ڪنهن هڪ خاص نالي کي ظاهر نٿو ڪري.",
        examples: [
          ["boy", "لڑکا", "ڇوڪرو"],
          ["city", "شہر", "شهر"],
          ["teacher", "استاد", "استاد"],
          ["river", "دریا", "درياهه"],
          ["book", "کتاب", "ڪتاب"]
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
    ]
  },
  "subject-predicate": {
    overview: "A sentence has two main parts: the Subject and the Predicate.",
    watchFor: "The subject is who or what the sentence is about; the predicate tells what the subject does or what is said about it.",
    examples: ["Ali reads a book. (Subject: Ali; Predicate: reads a book.)", "The birds are singing. (Subject: The birds; Predicate: are singing.)"]
  },
  "pronouns": {
    overview: "Pronouns replace nouns or noun phrases and help avoid repetition. Their form can change according to person, number, gender and grammatical case.",
    watchFor: "Make sure a pronoun clearly refers to the noun it replaces, and use subject forms for subjects and object forms after verbs or prepositions.",
    examples: ["Mina lost her keys, but she found them later.", "Ali and I went home; the teacher spoke to us."]
  },
  "verbs": {
    overview: "Verbs express actions, events and states. A verb phrase may include a main verb and helping verbs that show tense, aspect, voice or mood.",
    watchFor: "Some verbs describe states rather than visible actions, such as know, belong, seem and believe.",
    examples: ["They have finished the work.", "The soup tastes delicious."]
  },
  "adjectives": {
    overview: "Adjectives describe nouns and pronouns by giving information about quality, size, age, colour, origin or quantity. They can appear before a noun or after a linking verb.",
    watchFor: "Do not confuse adjectives with adverbs: an adjective describes a noun, while an adverb commonly describes a verb, adjective or another adverb.",
    examples: ["It was a difficult question.", "The question seems difficult."]
  },
  "tenses": {
    overview: "English tense and aspect work together to show when an event happens and whether it is complete, continuing or connected to another time. The three broad time references are present, past and future.",
    watchFor: "Choose a form based on meaning and context, not only on time words. Present perfect, for example, often connects a past event to the present.",
    examples: ["I have lived here for five years. (continues now)", "I lived there in 2020. (finished past time)"]
  },
  "articles": {
    overview: "A and an introduce a non-specific singular countable noun; the points to something identifiable or specific. The choice between a and an depends on the first sound, not the first letter.",
    watchFor: "Use an before a vowel sound (an hour) and a before a consonant sound (a university). Plural and uncountable nouns often take no article when speaking generally.",
    examples: ["She wants to become a doctor.", "The doctor who treated me was kind.", "Water is essential."]
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
