export const lessons = [
  {
    id: "parts-of-speech",
    title: "Parts of Speech",
    subtitle: "The building blocks of English",
    urdu: "انگریزی زبان میں ہر لفظ اپنا ایک خاص کام کرتا ہے۔ لفظ کے اسی کام کے مطابق اسے مختلف اقسام میں تقسیم کیا جاتا ہے۔",
    level: "Beginner",
    duration: "8 min",
    rule: "A part of speech is a category of words based on the work they do in a sentence.",
    example: "The clever student reads a book.",
    breakdown: [
      ["The", "Article", "اسم سے پہلے آتا ہے"],
      ["clever", "Adjective", "اسم کی خوبی بتاتا ہے"],
      ["student", "Noun", "کسی شخص، جگہ یا چیز کا نام"],
      ["reads", "Verb", "کام یا حالت ظاہر کرتا ہے"],
      ["a", "Article", "اسم کے ساتھ استعمال ہوتا ہے"],
      ["book", "Noun", "چیز کا نام"]
    ],
    quiz: [
      { q: "Which part of speech names a person, place or thing?", options: ["Verb", "Noun", "Adverb", "Preposition"], answer: 1, why: "A noun names a person, place, thing or idea." },
      { q: "In 'She sings beautifully', which word is an adverb?", options: ["She", "sings", "beautifully", "none"], answer: 2, why: "Beautifully tells us how she sings." }
    ]
  },
  {
    id: "nouns",
    title: "Nouns",
    subtitle: "Naming people, places and things",
    urdu: "Noun کسی شخص، جگہ، چیز یا خیال کے نام کو کہتے ہیں۔ مثال: Ali, Karachi, book, honesty۔",
    level: "Beginner",
    duration: "7 min",
    rule: "A noun is the name of a person, place, thing, or idea.",
    example: "Karachi is a large city.",
    breakdown: [["Karachi", "Proper noun", "خاص جگہ کا نام"], ["city", "Common noun", "عام جگہ کا نام"]],
    quiz: [
      { q: "Which one is a proper noun?", options: ["city", "teacher", "Pakistan", "country"], answer: 2, why: "Pakistan is the specific name of a country." }
    ]
  },
  {
    id: "pronouns",
    title: "Pronouns",
    subtitle: "Words used instead of nouns",
    urdu: "Pronoun وہ لفظ ہے جو noun کی جگہ استعمال ہوتا ہے تاکہ ایک ہی نام بار بار نہ دہرانا پڑے۔",
    level: "Beginner",
    duration: "6 min",
    rule: "A pronoun is a word used in place of a noun.",
    example: "Sara is kind. She helps everyone.",
    breakdown: [["Sara", "Noun", "شخص کا نام"], ["She", "Pronoun", "Sara کی جگہ استعمال ہوا"]],
    quiz: [
      { q: "Choose the pronoun: 'They are playing.'", options: ["are", "playing", "They", "none"], answer: 2, why: "They is used in place of people's names." }
    ]
  },
  {
    id: "verbs",
    title: "Verbs",
    subtitle: "Actions and states",
    urdu: "Verb کسی کام، عمل یا حالت کو ظاہر کرتا ہے۔ مثال: write, play, is, seem۔",
    level: "Beginner",
    duration: "8 min",
    rule: "A verb expresses an action, occurrence, or state of being.",
    example: "The children play in the garden.",
    breakdown: [["children", "Noun", "لوگوں کا نام"], ["play", "Verb", "کام ظاہر کرتا ہے"]],
    quiz: [
      { q: "Find the verb: 'Birds fly high.'", options: ["Birds", "fly", "high", "none"], answer: 1, why: "Fly is the action performed by the birds." }
    ]
  },
  {
    id: "adjectives",
    title: "Adjectives",
    subtitle: "Describing nouns",
    urdu: "Adjective کسی noun یا pronoun کی خوبی، حالت، تعداد یا مقدار بیان کرتا ہے۔",
    level: "Beginner",
    duration: "7 min",
    rule: "An adjective describes or gives more information about a noun or pronoun.",
    example: "She bought a beautiful dress.",
    breakdown: [["beautiful", "Adjective", "dress کی خوبی بتاتا ہے"]],
    quiz: [
      { q: "Which word is the adjective in 'a tall building'?", options: ["a", "tall", "building", "in"], answer: 1, why: "Tall describes the building." }
    ]
  },
  {
    id: "tenses",
    title: "Tenses",
    subtitle: "Time of an action",
    urdu: "Tense سے معلوم ہوتا ہے کہ کوئی کام حال، ماضی یا مستقبل میں ہوتا ہے۔ ہر زمانے کی مزید اقسام بھی ہوتی ہیں۔",
    level: "Beginner",
    duration: "12 min",
    rule: "Tense shows the time of an action or state: present, past, or future.",
    example: "I study. / I studied. / I will study.",
    breakdown: [["study", "Present", "حال"], ["studied", "Past", "ماضی"], ["will study", "Future", "مستقبل"]],
    quiz: [
      { q: "Which sentence is in the simple past?", options: ["I walk.", "I walked.", "I will walk.", "I am walking."], answer: 1, why: "Walked is the past form of walk." },
      { q: "Choose the simple future form.", options: ["She cooks.", "She cooked.", "She will cook.", "She is cooking."], answer: 2, why: "Will + base verb commonly forms the simple future." }
    ]
  },
  {
    id: "articles",
    title: "Articles: A, An, The",
    subtitle: "Using articles correctly",
    urdu: "A اور An غیر معین چیز کے لیے جبکہ The کسی خاص یا پہلے سے معلوم چیز کے لیے استعمال ہوتا ہے۔",
    level: "Beginner",
    duration: "7 min",
    rule: "Use a before a consonant sound, an before a vowel sound, and the for a specific noun.",
    example: "a university, an apple, the sun",
    breakdown: [["a university", "A", "یہاں university کی ابتدا 'yu' کی آواز سے ہے"], ["an apple", "An", "apple کی ابتدا vowel sound سے ہے"], ["the sun", "The", "ایک خاص اور منفرد چیز"]],
    quiz: [
      { q: "Choose the correct phrase.", options: ["a apple", "an apple", "the apple (always)", "an university"], answer: 1, why: "Apple begins with a vowel sound, so use an." }
    ]
  },
  {
    id: "prepositions",
    title: "Prepositions",
    subtitle: "Showing relationships",
    urdu: "Preposition کسی noun یا pronoun کا جملے کے دوسرے الفاظ سے تعلق ظاہر کرتا ہے، جیسے in, on, at, under۔",
    level: "Intermediate",
    duration: "9 min",
    rule: "A preposition shows the relationship of a noun or pronoun to another word.",
    example: "The keys are on the table.",
    breakdown: [["on", "Preposition", "چابیوں اور میز کا تعلق ظاہر کرتا ہے"]],
    quiz: [
      { q: "The book is ___ the table.", options: ["on", "beautiful", "quickly", "because"], answer: 0, why: "On shows the position of the book." }
    ]
  },
  {
    id: "voice",
    title: "Active & Passive Voice",
    subtitle: "Changing sentence focus",
    urdu: "Active voice میں subject کام کرتا ہے۔ Passive voice میں توجہ اس چیز یا شخص پر ہوتی ہے جس پر کام کیا گیا ہو۔",
    level: "Intermediate",
    duration: "10 min",
    rule: "Active: Subject + verb + object. Passive: Object + be + past participle (+ by subject).",
    example: "Active: Ali writes a letter. / Passive: A letter is written by Ali.",
    breakdown: [["Ali writes a letter", "Active", "Ali کام کر رہا ہے"], ["A letter is written by Ali", "Passive", "توجہ خط پر ہے"]],
    quiz: [
      { q: "Choose the passive form of 'She cleans the room.'", options: ["The room cleans her.", "The room is cleaned by her.", "She is cleaned by the room.", "The room cleaned."], answer: 1, why: "Object becomes the subject, followed by is + past participle." }
    ]
  },
  {
    id: "reported-speech",
    title: "Direct & Indirect Speech",
    subtitle: "Reporting what someone said",
    urdu: "Direct speech میں کسی کے اصل الفاظ quotation marks میں لکھتے ہیں۔ Indirect speech میں بات اپنے الفاظ میں بیان کرتے ہیں۔",
    level: "Intermediate",
    duration: "11 min",
    rule: "Direct speech quotes the exact words; reported speech communicates the meaning without quoting them.",
    example: "Direct: He said, “I am tired.” / Reported: He said that he was tired.",
    breakdown: [["I am tired", "Direct", "اصل الفاظ"], ["he was tired", "Reported", "ضمیر اور tense تبدیل ہوئے"]],
    quiz: [
      { q: "Choose the reported form: He said, 'I am happy.'", options: ["He said he is happy.", "He said that he was happy.", "He says I was happy.", "He said that I am happy."], answer: 1, why: "In a common backshift pattern, am changes to was and I changes to he." }
    ]
  },
{
    id: "adverbs", title: "Adverbs", subtitle: "Describing verbs, adjectives and other adverbs",
    urdu: "Adverb فعل، صفت یا کسی دوسرے adverb کے بارے میں مزید معلومات دیتا ہے۔ یہ بتا سکتا ہے کہ کام کیسے، کب، کہاں یا کتنی شدت سے ہوا۔",
    level: "Beginner", duration: "7 min",
    rule: "An adverb modifies a verb, an adjective, or another adverb.",
    example: "The athlete ran very quickly.",
    breakdown: [["ran", "Verb", "دوڑنے کا عمل"], ["quickly", "Adverb", "بتاتا ہے کہ وہ کیسے دوڑا"], ["very", "Adverb", "quickly کی شدت بڑھاتا ہے"]],
    quiz: [
      { q: "Find the adverb: 'The baby slept peacefully.'", options: ["baby", "slept", "peacefully", "the"], answer: 2, why: "Peacefully explains how the baby slept." },
      { q: "Which word modifies the adjective in 'extremely cold'?", options: ["extremely", "cold", "both", "neither"], answer: 0, why: "Extremely intensifies the adjective cold." }
    ]
  },
  {
    id: "conjunctions", title: "Conjunctions", subtitle: "Connecting words and ideas",
    urdu: "Conjunction دو الفاظ، فقروں یا جملوں کو آپس میں ملاتا ہے۔ عام مثالیں and, but, or, because اور although ہیں۔",
    level: "Beginner", duration: "8 min",
    rule: "A conjunction joins words, phrases, or clauses.",
    example: "I wanted to go, but it was raining.",
    breakdown: [["but", "Conjunction", "دو متضاد خیالات کو جوڑتا ہے"]],
    quiz: [
      { q: "Choose the conjunction: 'Mina and Sara are friends.'", options: ["Mina", "and", "friends", "are"], answer: 1, why: "And joins the two names." },
      { q: "Which conjunction gives a reason?", options: ["or", "but", "because", "yet"], answer: 2, why: "Because introduces a reason." }
    ]
  },
  {
    id: "interjections", title: "Interjections", subtitle: "Expressing sudden feelings",
    urdu: "Interjection ایسا لفظ یا فقرہ ہے جو اچانک جذبہ یا ردِعمل ظاہر کرتا ہے، جیسے خوشی، حیرت یا دکھ۔",
    level: "Beginner", duration: "5 min",
    rule: "An interjection expresses a sudden feeling or reaction.",
    example: "Wow! That was an amazing performance.",
    breakdown: [["Wow!", "Interjection", "حیرت یا خوشی ظاہر کرتا ہے"]],
    quiz: [{ q: "Which is an interjection?", options: ["although", "wow", "under", "carefully"], answer: 1, why: "Wow expresses a sudden reaction." }]
  },
  {
    id: "subject-predicate", title: "Subject and Predicate", subtitle: "The two main parts of a sentence",
    urdu: "Subject بتاتا ہے کہ جملہ کس کے بارے میں ہے، جبکہ predicate subject کے بارے میں کچھ بتاتا ہے اور عموماً فعل پر مشتمل ہوتا ہے۔",
    level: "Beginner", duration: "8 min",
    rule: "The subject tells who or what the sentence is about; the predicate says something about the subject.",
    example: "The little bird / sang sweetly.",
    breakdown: [["The little bird", "Subject", "جس کے بارے میں بات ہو رہی ہے"], ["sang sweetly", "Predicate", "subject کے بارے میں خبر"]],
    quiz: [{ q: "Identify the subject: 'The old train arrived late.'", options: ["arrived late", "old", "The old train", "late"], answer: 2, why: "The old train is what the sentence is about." }]
  },
  {
    id: "sentence-types", title: "Types of Sentences", subtitle: "Statements, questions, commands and exclamations",
    urdu: "مقصد کے لحاظ سے جملوں کی چار عام اقسام ہیں: خبریہ، سوالیہ، حکمیہ اور فجائیہ۔",
    level: "Beginner", duration: "8 min",
    rule: "Sentences may be declarative, interrogative, imperative, or exclamatory.",
    example: "She is ready. / Are you ready? / Please sit down. / What a day!",
    breakdown: [["She is ready.", "Declarative", "معلومات دیتا ہے"], ["Are you ready?", "Interrogative", "سوال کرتا ہے"], ["Please sit down.", "Imperative", "درخواست یا حکم"]],
    quiz: [{ q: "'Where do you live?' is which type?", options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], answer: 1, why: "It asks a question." }]
  },
  {
    id: "subject-verb-agreement", title: "Subject–Verb Agreement", subtitle: "Matching verbs with their subjects",
    urdu: "جملے میں فعل کی صورت subject کے واحد یا جمع ہونے اور grammatical person کے مطابق ہونی چاہیے۔",
    level: "Intermediate", duration: "10 min",
    rule: "A verb must agree with its subject in number and person.",
    example: "The boy plays. / The boys play.",
    breakdown: [["boy plays", "Singular agreement", "واحد subject کے ساتھ plays"], ["boys play", "Plural agreement", "جمع subject کے ساتھ play"]],
    quiz: [
      { q: "Choose the correct sentence.", options: ["The girls sings.", "The girls sing.", "The girls singing."], answer: 1, why: "A plural subject takes the plural verb form sing." },
      { q: "Each of the students ___ a book.", options: ["have", "has", "are"], answer: 1, why: "Each is grammatically singular, so use has." }
    ]
  },
  {
    id: "punctuation", title: "Punctuation", subtitle: "Making meaning clear",
    urdu: "Punctuation marks تحریر میں وقفہ، سوال، جذبات اور جملوں کی ساخت واضح کرتے ہیں۔",
    level: "Beginner", duration: "7 min",
    rule: "Punctuation marks organize writing and clarify meaning.",
    example: "Let's eat, Grandma! / Let's eat Grandma!",
    breakdown: [[",", "Comma", "مختصر وقفہ اور معنی واضح کرتا ہے"], ["?", "Question mark", "سوال کے آخر میں آتا ہے"], [".", "Full stop", "عام خبریہ جملے کے آخر میں آتا ہے"]],
    quiz: [{ q: "Which mark normally ends a direct question?", options: [".", ",", "?", ":"], answer: 2, why: "A question mark is used at the end of a direct question." }]
  },
  {
    id: "countable-uncountable", title: "Countable and Uncountable Nouns", subtitle: "Using quantity words correctly",
    urdu: "Countable nouns کو گنا جا سکتا ہے، جیسے books؛ uncountable nouns کو عام طور پر الگ الگ شمار نہیں کیا جاتا، جیسے water یا information۔",
    level: "Intermediate", duration: "8 min",
    rule: "Countable nouns have singular and plural forms; uncountable nouns are not normally used in the plural.",
    example: "many books / much water / a piece of information",
    breakdown: [["books", "Countable", "تعداد گنی جا سکتی ہے"], ["water", "Uncountable", "عام طور پر مقدار ناپی جاتی ہے"], ["information", "Uncountable", "a piece of information کہیں"]],
    quiz: [{ q: "Choose the correct phrase.", options: ["many water", "much water", "many informations"], answer: 1, why: "Water is uncountable, so much is appropriate." }]
  },
  {
    id: "comparatives-superlatives", title: "Comparative and Superlative Adjectives", subtitle: "Comparing people and things",
    urdu: "Comparative دو چیزوں کا موازنہ کرتا ہے؛ superlative تین یا زیادہ میں سب سے نمایاں چیز بتاتا ہے۔",
    level: "Intermediate", duration: "9 min",
    rule: "Use comparative forms to compare two; use superlative forms to identify the highest or lowest degree in a group.",
    example: "tall, taller, tallest / beautiful, more beautiful, most beautiful",
    breakdown: [["taller", "Comparative", "دو افراد یا چیزوں کا موازنہ"], ["tallest", "Superlative", "گروہ میں سب سے زیادہ لمبا"]],
    quiz: [{ q: "Choose the superlative of 'good'.", options: ["gooder", "more good", "best", "better"], answer: 2, why: "Good has the irregular superlative form best." }]
  },
  {
    id: "modals", title: "Modal Verbs", subtitle: "Ability, permission, advice and possibility",
    urdu: "Modal verbs جیسے can, could, may, might, must اور should صلاحیت، اجازت، امکان، ضرورت یا مشورہ ظاہر کرتے ہیں۔ ان کے بعد عموماً verb کی base form آتی ہے۔",
    level: "Intermediate", duration: "9 min",
    rule: "Modal auxiliary verbs express meanings such as ability, permission, possibility, obligation, or advice.",
    example: "You should practise daily. / She can swim.",
    breakdown: [["should", "Modal", "مشورہ ظاہر کرتا ہے"], ["can", "Modal", "صلاحیت ظاہر کرتا ہے"], ["practise / swim", "Base verb", "modal کے بعد بنیادی صورت"]],
    quiz: [{ q: "Which modal is commonly used to give advice?", options: ["should", "mustn't", "mightn't", "wouldn't"], answer: 0, why: "Should is commonly used for advice or recommendation." }]
  }
  ,
  {
    id: "clauses-and-phrases", title: "Phrases and Clauses", subtitle: "Recognising groups of words and complete thoughts",
    urdu: "Phrase الفاظ کا ایسا مجموعہ ہے جو مکمل subject اور verb کے ساتھ مکمل خیال ظاہر نہیں کرتا۔ Clause میں subject اور verb دونوں ہوتے ہیں؛ بعض clauses مکمل جملہ بھی بن سکتے ہیں۔",
    level: "Intermediate", duration: "9 min",
    rule: "A phrase is a group of related words without a subject–verb combination forming a clause. A clause contains a subject and a verb.",
    example: "under the old bridge (phrase) / when the rain stopped (dependent clause) / The rain stopped. (independent clause)",
    breakdown: [["under the old bridge", "Phrase", "یہاں مکمل subject اور verb نہیں"], ["the rain stopped", "Subject + verb", "یہ مکمل خیال بن سکتا ہے"], ["when the rain stopped", "Dependent clause", "یہ اکیلا مکمل خیال نہیں"], ["The rain stopped.", "Independent clause", "یہ مکمل جملہ ہے"]],
    quiz: [
      { q: "Which group of words is a phrase?", options: ["because she laughed", "near the station", "the baby cried"], answer: 1, why: "Near the station has no subject–verb combination." },
      { q: "Which is an independent clause?", options: ["although it was late", "after the match ended", "The team celebrated."], answer: 2, why: "The team celebrated expresses a complete thought." },
      { q: "A clause must contain which elements?", options: ["A subject and a verb", "Two adjectives", "A preposition only"], answer: 0, why: "A clause contains a subject and a verb." }
    ]
  },
  {
    id: "conditionals", title: "Conditional Sentences", subtitle: "Talking about facts, possibilities and imagined situations",
    urdu: "Conditional sentences میں کسی شرط اور اس کے نتیجے کا ذکر ہوتا ہے۔ Zero conditional عمومی حقائق، first conditional ممکنہ مستقبل، second conditional خیالی حال یا مستقبل، اور third conditional ماضی کے غیرحقیقی حالات کے لیے استعمال ہوتا ہے۔",
    level: "Intermediate", duration: "10 min",
    rule: "Conditionals link a condition with its result. Common patterns include if + present, will + base verb for likely future results, and if + past, would + base verb for unreal situations.",
    example: "If you heat ice, it melts. / If it rains, we will stay inside. / If I had more time, I would read.",
    breakdown: [["If you heat ice", "Zero conditional", "عمومی حقیقت یا سائنسی اصول"], ["If it rains", "First conditional", "ممکنہ مستقبل کی شرط"], ["If I had more time", "Second conditional", "خیالی یا غیرحقیقی صورت حال"]],
    quiz: [
      { q: "Choose the correct zero conditional sentence.", options: ["If water reaches 100°C, it boils.", "If water reached 100°C, it will boil.", "If water will reach 100°C, it boiled."], answer: 0, why: "Zero conditional uses present simple in both clauses for general facts." },
      { q: "Complete: If I see Sara, I ___ her the message.", options: ["gave", "will give", "would gave"], answer: 1, why: "The first conditional uses present simple after if and will + base verb for the result." },
      { q: "Choose the correct second conditional form.", options: ["If I am rich, I bought a boat.", "If I were rich, I would buy a boat.", "If I will be rich, I buy a boat."], answer: 1, why: "Second conditional commonly uses if + past form and would + base verb." }
    ]
  },
  {
    id: "gerunds-infinitives", title: "Gerunds and Infinitives", subtitle: "Using -ing forms and to + verb",
    urdu: "Gerund فعل کی -ing صورت ہے جو noun کا کام کرتی ہے، جیسے Reading is useful۔ Infinitive عام طور پر to + verb ہوتا ہے، جیسے to read۔ بعض verbs کے بعد gerund اور بعض کے بعد infinitive آتا ہے۔",
    level: "Intermediate", duration: "9 min",
    rule: "A gerund is an -ing verb form used as a noun. An infinitive is usually to + base verb. Which form follows depends on the preceding word or the sentence structure.",
    example: "Swimming is healthy. / I hope to travel. / She enjoys painting.",
    breakdown: [["Swimming", "Gerund", "جملے میں noun کا کام"], ["to travel", "Infinitive", "to کے بعد verb کی بنیادی صورت"], ["painting", "Gerund", "enjoy کے بعد -ing استعمال ہوتا ہے"]],
    quiz: [
      { q: "Choose the correct form: He enjoys ___.", options: ["to cook", "cooking", "cook"], answer: 1, why: "Enjoy is normally followed by a gerund (-ing form)." },
      { q: "Which sentence uses an infinitive?", options: ["Reading helps me relax.", "They decided to leave.", "She avoids driving."], answer: 1, why: "To leave is an infinitive: to + base verb." },
      { q: "In “Dancing is fun”, what is “Dancing”?", options: ["A gerund", "A finite verb", "A preposition"], answer: 0, why: "Dancing is an -ing form functioning as the subject noun." }
    ]
  },
  {
    id: "relative-clauses", title: "Relative Clauses", subtitle: "Adding information about people and things",
    urdu: "Relative clauses کسی شخص یا چیز کے بارے میں اضافی معلومات دیتی ہیں۔ Who عموماً لوگوں، which چیزوں، اور that لوگوں یا چیزوں کے لیے defining clauses میں استعمال ہو سکتا ہے۔",
    level: "Intermediate", duration: "9 min",
    rule: "A relative clause modifies a noun. Common relative pronouns include who for people, which for things, and that for people or things in defining clauses.",
    example: "The woman who teaches us is kind. / This is the book that I borrowed.",
    breakdown: [["who", "Relative pronoun", "لوگوں کے لیے"], ["which", "Relative pronoun", "چیزوں کے لیے"], ["that I borrowed", "Relative clause", "کتاب کے بارے میں وضاحت"]],
    quiz: [
      { q: "Choose the best relative pronoun: The man ___ lives next door is a doctor.", options: ["which", "who", "where"], answer: 1, why: "Who is used for people." },
      { q: "Choose the best option: This is the laptop ___ I bought yesterday.", options: ["who", "where", "that"], answer: 2, why: "That can introduce a defining relative clause referring to a thing." },
      { q: "What does a relative clause do?", options: ["Modifies a noun", "Always asks a question", "Shows only past time"], answer: 0, why: "A relative clause gives identifying or additional information about a noun." }
    ]
  },
  {
    id: "question-tags", title: "Question Tags", subtitle: "Checking information and inviting agreement",
    urdu: "Question tag جملے کے آخر میں آنے والا مختصر سوال ہے۔ مثبت جملے کے بعد عموماً منفی tag اور منفی جملے کے بعد مثبت tag آتا ہے۔ معاون فعل اور subject کے مطابق tag بنایا جاتا ہے۔",
    level: "Intermediate", duration: "8 min",
    rule: "A question tag is a short question added to a statement. Positive statements usually take negative tags; negative statements usually take positive tags.",
    example: "You are ready, aren't you? / She doesn't drive, does she?",
    breakdown: [["You are ready", "Positive statement", "مثبت جملہ"], ["aren't you?", "Negative tag", "منفی tag اور وہی auxiliary"], ["doesn't drive", "Negative statement", "منفی جملہ"], ["does she?", "Positive tag", "مثبت tag"]],
    quiz: [
      { q: "Choose the correct tag: She is a doctor, ___?", options: ["is she", "isn't she", "doesn't she"], answer: 1, why: "A positive statement with is takes the negative tag isn't she." },
      { q: "Choose the correct tag: They don't live here, ___?", options: ["do they", "don't they", "are they"], answer: 0, why: "A negative statement takes a positive tag; don't changes to do." },
      { q: "Choose the correct tag: Let's begin, ___?", options: ["will we", "shall we", "do we"], answer: 1, why: "Let's commonly takes the tag shall we." }
    ]
  }
  ,
  {
    id: "the-sentence", title: "The Sentence", subtitle: "What makes a complete sentence",
    urdu: "Sentence الفاظ کا ایسا مجموعہ ہے جو مکمل خیال ظاہر کرے۔ عام طور پر اس میں subject اور predicate ہوتا ہے اور تحریر میں مناسب capital letter اور اختتامی punctuation استعمال ہوتی ہے۔",
    level: "Beginner", duration: "8 min",
    rule: "A sentence is a group of words that expresses a complete thought. It normally contains a subject and a predicate.",
    example: "The children are playing outside. / Please close the door.",
    breakdown: [["The children", "Subject", "جس کے بارے میں بات ہو رہی ہے"], ["are playing outside", "Predicate", "subject کے بارے میں مکمل بات"], ["Please close the door.", "Imperative sentence", "حکم یا درخواست؛ subject you پوشیدہ ہے"]],
    quiz: [
      { q: "Which group of words is a complete sentence?", options: ["Under the table", "Because it was raining", "The birds are singing."], answer: 2, why: "The birds are singing expresses a complete thought." },
      { q: "What does a sentence normally express?", options: ["A complete thought", "Only a noun", "Only an adjective"], answer: 0, why: "A sentence communicates a complete thought." },
      { q: "Which punctuation mark ends this question: 'Where are you going'", options: [".", "?", "!"], answer: 1, why: "A direct question ends with a question mark." }
    ]
  },
  {
    id: "kinds-of-nouns", title: "The Noun: Kinds of Nouns", subtitle: "Proper, common, collective, abstract and material nouns",
    urdu: "Noun کی اہم اقسام میں proper، common، collective، abstract اور material nouns شامل ہیں۔ Proper noun خاص نام، common noun عام نام، collective noun گروہ، abstract noun خیال یا کیفیت، اور material noun مادّے کا نام ہے۔",
    level: "Beginner", duration: "10 min",
    rule: "Nouns may be classified as proper, common, collective, abstract, and material nouns according to what they name.",
    example: "Ayesha (proper), girl (common), team (collective), courage (abstract), gold (material).",
    breakdown: [["Ayesha", "Proper noun", "خاص شخص کا نام"], ["team", "Collective noun", "افراد کے گروہ کا نام"], ["honesty", "Abstract noun", "نظر نہ آنے والی خوبی یا خیال"], ["gold", "Material noun", "مادّے کا نام"]],
    quiz: [
      { q: "Which is an abstract noun?", options: ["Table", "Wisdom", "Karachi"], answer: 1, why: "Wisdom names an idea or quality." },
      { q: "Which is a collective noun?", options: ["Crowd", "Stone", "Kindness"], answer: 0, why: "Crowd names a group of people." },
      { q: "Which is a proper noun?", options: ["river", "city", "Indus"], answer: 2, why: "Indus is the specific name of a river." }
    ]
  },
  {
    id: "noun-gender", title: "The Noun: Gender", subtitle: "Masculine, feminine, common and neuter",
    urdu: "Gender کے لحاظ سے nouns کو masculine، feminine، common اور neuter میں تقسیم کیا جاتا ہے۔ Masculine مرد یا نر، feminine عورت یا مادہ، common دونوں کے لیے، اور neuter بے جان چیزوں کے لیے آتا ہے۔",
    level: "Beginner", duration: "8 min",
    rule: "The four traditional grammatical genders are masculine, feminine, common, and neuter.",
    example: "king (masculine), queen (feminine), teacher (common), pencil (neuter).",
    breakdown: [["king", "Masculine", "مذکر"], ["queen", "Feminine", "مونث"], ["teacher", "Common gender", "مرد یا عورت دونوں ہو سکتے ہیں"], ["pencil", "Neuter", "بے جان چیز"]],
    quiz: [
      { q: "What is the gender of 'teacher' when it may refer to a man or woman?", options: ["Masculine", "Common", "Neuter"], answer: 1, why: "A common-gender noun can refer to either a male or a female." },
      { q: "Which is the feminine form of 'actor'?", options: ["Actress", "Actoring", "Actorman"], answer: 0, why: "Actress is the traditional feminine counterpart of actor." },
      { q: "Which noun is neuter in traditional grammar?", options: ["Mother", "Boy", "Window"], answer: 2, why: "Window names an inanimate thing." }
    ]
  },
  {
    id: "noun-number", title: "The Noun: Number", subtitle: "Singular and plural nouns",
    urdu: "Number بتاتا ہے کہ noun ایک ہے یا ایک سے زیادہ۔ زیادہ تر nouns میں s یا es لگتا ہے، لیکن کچھ کی plural صورت بدل جاتی ہے، جیسے child/children اور mouse/mice۔",
    level: "Beginner", duration: "9 min",
    rule: "Nouns have singular and plural forms. Most plurals add -s or -es, while some are irregular.",
    example: "book/books, bus/buses, child/children, sheep/sheep.",
    breakdown: [["book → books", "Regular plural", "عام طور پر s لگتا ہے"], ["box → boxes", "Plural in -es", "s، sh، ch، x یا z کی آواز کے بعد اکثر es"], ["child → children", "Irregular plural", "لفظ کی صورت بدلتی ہے"], ["sheep → sheep", "Same form", "واحد اور جمع ایک جیسی صورت"]],
    quiz: [
      { q: "Choose the correct plural of 'woman'.", options: ["Womans", "Women", "Womens"], answer: 1, why: "Woman has the irregular plural women." },
      { q: "Which is the correct plural of 'box'?", options: ["Boxs", "Boxes", "Boxies"], answer: 1, why: "Nouns ending in x normally add -es." },
      { q: "Which noun has the same singular and plural form?", options: ["Sheep", "Child", "Foot"], answer: 0, why: "Sheep is commonly unchanged in the plural." }
    ]
  },
  {
    id: "noun-case", title: "The Noun: Case", subtitle: "How a noun functions in a sentence",
    urdu: "Case noun کا جملے میں grammatical تعلق یا کام ظاہر کرتا ہے۔ عام تدریسی تقسیم میں nominative/subjective، objective اور possessive/genitive case شامل ہیں۔",
    level: "Intermediate", duration: "9 min",
    rule: "Case shows the grammatical function of a noun. A noun may be used as a subject, an object, or to show possession.",
    example: "The girl (subject) helped the boy (object). The girl's bag is blue (possessive).",
    breakdown: [["The girl", "Nominative / subjective", "فعل کرنے والا subject"], ["the boy", "Objective", "فعل کا object"], ["girl's", "Possessive / genitive", "ملکیت ظاہر کرتا ہے"]],
    quiz: [
      { q: "In 'The dog chased the cat', which noun is the subject?", options: ["dog", "cat", "chased"], answer: 0, why: "The dog performs the action and is the subject." },
      { q: "Which form shows possession?", options: ["teacher", "teacher's", "teachers (as a verb)"], answer: 1, why: "The apostrophe-s form commonly marks singular possession." },
      { q: "In 'We thanked the doctor', what is 'the doctor'?", options: ["Subject", "Object", "Possessive"], answer: 1, why: "The doctor receives the action of thanking." }
    ]
  },
  {
    id: "personal-pronouns", title: "Personal Pronouns", subtitle: "Person, number, gender and case",
    urdu: "Personal pronouns بولنے والے، سننے والے یا جس شخص/چیز کے بارے میں بات ہو رہی ہو اس کی جگہ آتے ہیں۔ مثالیں I, we, you, he, she, it, they اور ان کی object forms me, us, him, her, them ہیں۔",
    level: "Beginner", duration: "9 min",
    rule: "Personal pronouns refer to the speaker (first person), the person addressed (second person), or the person or thing spoken about (third person).",
    example: "I called Sara. She answered me. They invited us.",
    breakdown: [["I / we", "First person", "بولنے والا یا بولنے والے"], ["you", "Second person", "جس سے بات کی جائے"], ["he / she / it / they", "Third person", "جس کے بارے میں بات ہو"], ["me / him / her / us / them", "Object forms", "فعل یا preposition کے بعد object"]],
    quiz: [
      { q: "Choose the correct pronoun: 'Sara is my friend. ___ is kind.'", options: ["He", "She", "They"], answer: 1, why: "She is the appropriate third-person singular pronoun for Sara in this example." },
      { q: "Choose the correct object pronoun: 'The teacher praised Ali and ___.'", options: ["I", "me", "my"], answer: 1, why: "Me is the object form required after praised." },
      { q: "Which pronoun is first person plural?", options: ["They", "We", "You"], answer: 1, why: "We refers to the speaker together with one or more others." }
    ]
  },
  {
    id: "adjectives-as-nouns", title: "Adjectives Used as Nouns", subtitle: "Adjectives referring to people or groups",
    urdu: "کچھ adjectives اسم کے طور پر استعمال ہوتے ہیں۔ The rich یا the poor پوری جماعت یا گروہ کو ظاہر کر سکتے ہیں، جبکہ بعض صفات کسی خاص فرد کے لیے بھی noun کا کام کرتی ہیں۔",
    level: "Intermediate", duration: "7 min",
    rule: "An adjective may function like a noun, often with the definite article the to refer to a whole class of people.",
    example: "The rich should help the poor. / The injured were taken to hospital.",
    breakdown: [["the rich", "Adjective used as noun", "امیر لوگوں کا گروہ"], ["the poor", "Adjective used as noun", "غریب لوگوں کا گروہ"], ["the injured", "Adjective used as noun", "زخمی افراد"]],
    quiz: [
      { q: "In 'The young need guidance', what does 'the young' mean?", options: ["A young object", "Young people as a group", "One young person only"], answer: 1, why: "The + adjective can refer to a whole class of people." },
      { q: "Choose the correct sentence.", options: ["The poors need help.", "The poor need help.", "A poor need help."], answer: 1, why: "The poor is a plural group expression and normally takes a plural verb." },
      { q: "Complete: The injured ___ taken to hospital.", options: ["was", "were", "is"], answer: 1, why: "The injured refers to injured people as a plural group." }
    ]
  },
  {
    id: "position-of-adjectives", title: "Position of the Adjectives", subtitle: "Attributive and predicative use",
    urdu: "Adjective عموماً noun سے پہلے آتا ہے، جیسے a beautiful garden؛ لیکن linking verb کے بعد بھی آ سکتا ہے، جیسے the garden is beautiful۔ بعض adjectives صرف مخصوص جگہوں پر استعمال ہوتے ہیں۔",
    level: "Intermediate", duration: "8 min",
    rule: "Adjectives commonly appear before the noun they modify (attributive position) or after a linking verb (predicative position).",
    example: "a clever student (attributive) / The student is clever (predicative).",
    breakdown: [["a clever student", "Attributive", "adjective noun سے پہلے"], ["is clever", "Predicative", "linking verb کے بعد"], ["something useful", "Postpositive", "کچھ مخصوص صورتوں میں noun/pronoun کے بعد"]],
    quiz: [
      { q: "Where is the adjective in 'She bought a red dress'?", options: ["Before the noun", "After the linking verb", "At the end of the sentence"], answer: 0, why: "Red comes before and describes the noun dress." },
      { q: "Which sentence uses an adjective predicatively?", options: ["A quiet room", "The room is quiet", "A quiet and clean room"], answer: 1, why: "Quiet follows the linking verb is." },
      { q: "Choose the natural phrase.", options: ["something useful", "useful something (in ordinary use)", "usefully something"], answer: 0, why: "After indefinite pronouns such as something, adjectives commonly follow." }
    ]
  },
  {
    id: "correct-use-of-adjectives", title: "The Correct Use of Some Adjectives", subtitle: "Common distinctions and adjective patterns",
    urdu: "کچھ adjectives معنی یا استعمال میں ایک دوسرے سے ملتے جلتے ہیں مگر ایک جیسے نہیں، مثلاً few/a few، little/a little، each/every، older/elder اور later/latter۔ درست لفظ سیاق کے مطابق چنیں۔",
    level: "Intermediate", duration: "10 min",
    rule: "Choose adjectives and adjective determiners according to their meaning, countability, and grammatical pattern.",
    example: "Few people came (almost none). / A few people came (some). / There is little hope (almost none). / There is a little hope (some).",
    breakdown: [["few / a few", "Countable nouns", "few تقریباً نہ ہونے کے برابر؛ a few کچھ"], ["little / a little", "Uncountable nouns", "little تقریباً نہ ہونے کے برابر؛ a little کچھ"], ["each / every", "Singular idea", "دونوں کے بعد عموماً singular noun اور singular verb"], ["older / elder", "Age", "elder عموماً خاندان کے افراد کے لیے attributive استعمال ہوتا ہے"]],
    quiz: [
      { q: "Choose the sentence meaning 'some books are available'.", options: ["Few books are available.", "A few books are available.", "Little books are available."], answer: 1, why: "A few means some and is used with countable plural nouns." },
      { q: "Choose the correct phrase.", options: ["a little water", "a few water", "few water"], answer: 0, why: "Water is uncountable, so a little is used." },
      { q: "Choose the correct sentence.", options: ["Every students are ready.", "Every student is ready.", "Every student are ready."], answer: 1, why: "Every is followed by a singular noun and normally takes a singular verb." },
      { q: "Which is the usual phrase for an older brother in traditional usage?", options: ["elder brother", "eldest brother (for any comparison)", "more elder brother"], answer: 0, why: "Elder is traditionally used before a family noun such as brother." }
    ]
  }
];

export const dailyQuestions = [
  { q: "Choose the correct sentence.", options: ["She go to school.", "She goes to school.", "She going school."], answer: 1, why: "With he, she or it in the simple present, add -s or -es to most verbs." },
  { q: "What is the plural of 'child'?", options: ["childs", "childes", "children"], answer: 2, why: "Children is an irregular plural noun." },
  { q: "Choose the correct article: ___ honest person.", options: ["A", "An", "The only"], answer: 1, why: "Honest begins with a vowel sound because the h is silent." },
  { q: "Choose the correct past tense of 'teach'.", options: ["teached", "taught", "teaching"], answer: 1, why: "Teach is irregular; its simple past form is taught." },
  { q: "Which sentence uses an adverb correctly?", options: ["He speaks fluent.", "He speaks fluently.", "He fluent speaks."], answer: 1, why: "Fluently is the adverb that modifies speaks." },
  { q: "Choose the correct subject–verb agreement.", options: ["My friend live nearby.", "My friend lives nearby.", "My friend living nearby."], answer: 1, why: "The singular subject my friend takes lives in the simple present." },
  { q: "Choose the correct article: She is ___ university student.", options: ["a", "an", "the only"], answer: 0, why: "University begins with a /y/ consonant sound, so use a." },
  { q: "Which is an uncountable noun?", options: ["chairs", "advice", "apples"], answer: 1, why: "Advice is generally uncountable; say a piece of advice." },
  { q: "Choose the comparative form of 'careful'.", options: ["carefuller", "more careful", "most careful"], answer: 1, why: "Longer adjectives commonly use more for the comparative." },
  { q: "Which modal best completes: 'You ___ wear a seat belt.'", options: ["should", "can to", "mustn't to"], answer: 0, why: "Should expresses strong advice; must is also possible for a legal requirement." },
  { q: "Choose the correctly punctuated sentence.", options: ["What time is it.", "What time is it?", "What time is it,"], answer: 1, why: "A direct question ends with a question mark." },
  { q: "Identify the conjunction: 'We stayed inside because it rained.'", options: ["inside", "because", "rained"], answer: 1, why: "Because connects the main clause to its reason." },
  { q: "Choose the passive form: 'The chef prepared dinner.'", options: ["Dinner prepared the chef.", "Dinner was prepared by the chef.", "Dinner is prepare by chef."], answer: 1, why: "The object dinner becomes the subject; simple past passive uses was + past participle." }
];