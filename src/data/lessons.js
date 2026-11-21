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
  },
  {
    id: "reflexive-emphatic-pronouns", title: "Reflexive and Emphatic Pronouns", subtitle: "Pronouns ending in -self and -selves",
    urdu: "Reflexive pronoun اس وقت آتا ہے جب subject اور object ایک ہی شخص یا چیز ہوں، جیسے She hurt herself۔ Emphatic pronoun کسی noun یا pronoun پر زور دیتا ہے، جیسے The principal herself welcomed us۔",
    level: "Intermediate", duration: "9 min",
    rule: "Reflexive pronouns refer back to the subject; emphatic (intensive) pronouns add emphasis and can usually be removed without changing the basic sentence structure.",
    example: "He taught himself French. / The captain herself spoke to us.",
    breakdown: [["himself", "Reflexive", "He ہی نے خود کو سکھایا"], ["herself", "Emphatic", "کپتان پر زور؛ جملہ اس کے بغیر بھی مکمل ہے"]],
    quiz: [
      { q: "Choose the correct pronoun: 'Maya looked at ___ in the mirror.'", options: ["herself", "her", "hers"], answer: 0, why: "The subject and object refer to Maya, so use the reflexive herself." },
      { q: "Which sentence uses an emphatic pronoun?", options: ["He blamed himself.", "The manager herself opened the meeting.", "They introduced themselves."], answer: 1, why: "Herself adds emphasis to the manager and is not the object of opened." },
      { q: "Choose the plural reflexive pronoun for 'we'.", options: ["ourself", "ourselves", "themselves"], answer: 1, why: "The reflexive form of we is ourselves." }
    ]
  },
  {
    id: "demonstrative-indefinite-distributive-pronouns", title: "Demonstrative, Indefinite and Distributive Pronouns", subtitle: "Pointing, referring generally and considering members separately",
    urdu: "Demonstrative pronouns کسی چیز کی طرف اشارہ کرتے ہیں: this, that, these, those۔ Indefinite pronouns غیرمتعین افراد یا چیزوں کے لیے ہیں: someone, anything, many۔ Distributive pronouns افراد یا چیزوں کو الگ الگ دیکھتے ہیں: each, either, neither۔",
    level: "Intermediate", duration: "10 min",
    rule: "Demonstrative pronouns point to specific items; indefinite pronouns refer to unspecified people or things; distributive pronouns consider members individually or as alternatives.",
    example: "These are fresh. / Someone is waiting. / Each has a ticket. / Neither is suitable.",
    breakdown: [["These", "Demonstrative", "قریب موجود جمع چیزوں کی طرف اشارہ"], ["Someone", "Indefinite", "کسی غیرمتعین شخص کے لیے"], ["Each", "Distributive", "ہر فرد کو الگ الگ دیکھتا ہے"], ["Neither", "Distributive", "دو میں سے کوئی بھی نہیں"]],
    quiz: [
      { q: "Which is a demonstrative pronoun?", options: ["Those", "Someone", "Each"], answer: 0, why: "Those points to particular plural items." },
      { q: "Choose the indefinite pronoun.", options: ["This", "Nobody", "Either"], answer: 1, why: "Nobody refers to an unspecified person or no person." },
      { q: "Complete: ___ of the two answers is correct; both are wrong.", options: ["Neither", "These", "Someone"], answer: 0, why: "Neither means not one and not the other of two." }
    ]
  },
  {
    id: "relative-pronouns", title: "Relative Pronouns", subtitle: "Connecting clauses to the nouns they describe",
    urdu: "Relative pronouns کسی noun کے بارے میں مزید وضاحت دینے والی clause کو ملاتے ہیں۔ Who لوگوں، whom object کے طور پر لوگوں، whose ملکیت، which چیزوں، اور that بعض defining clauses میں لوگوں یا چیزوں کے لیے آتا ہے۔",
    level: "Intermediate", duration: "9 min",
    rule: "Relative pronouns introduce relative clauses and refer back to an antecedent: who, whom, whose, which, and that.",
    example: "The student who won is my cousin. / The artist whose work we saw is here. / This is the tool that I need.",
    breakdown: [["who", "Subject form", "relative clause میں subject"], ["whom", "Object form", "relative clause میں object؛ رسمی استعمال"], ["whose", "Possessive", "ملکیت ظاہر کرتا ہے"], ["which / that", "Things", "چیزوں کے لیے relative pronouns"]],
    quiz: [
      { q: "The woman ___ called you is outside.", options: ["who", "whom", "whose"], answer: 0, why: "Who is the subject of called." },
      { q: "The boy ___ bicycle was stolen reported it.", options: ["which", "whose", "whom"], answer: 1, why: "Whose expresses possession: the boy's bicycle." },
      { q: "The person to ___ I spoke was helpful.", options: ["who", "whom", "which"], answer: 1, why: "Whom is the formal object of the preposition to." }
    ]
  },
  {
    id: "interrogative-pronouns", title: "Interrogative Pronouns", subtitle: "Who, whom, whose, which and what",
    urdu: "Interrogative pronouns سوال پوچھنے کے لیے استعمال ہوتے ہیں۔ Who شخص کے بارے میں، whom object کے بارے میں، whose ملکیت کے بارے میں، which محدود انتخاب میں، اور what عمومی چیز یا معلومات کے بارے میں پوچھتا ہے۔",
    level: "Beginner", duration: "8 min",
    rule: "Interrogative pronouns introduce questions: who, whom, whose, which, and what.",
    example: "Who is at the door? / Whom did you invite? / Which is yours? / What happened?",
    breakdown: [["Who", "Person / subject", "کون؟ بطور subject"], ["Whom", "Person / object", "کسے؟ بطور object"], ["Whose", "Possession", "کس کا؟"], ["Which", "Choice", "محدود انتخاب میں کون سا؟"], ["What", "Thing / information", "کیا؟"]],
    quiz: [
      { q: "___ is your favourite author?", options: ["Who", "Whose", "Whom"], answer: 0, why: "Who asks which person is your favourite author." },
      { q: "___ bag is lying here?", options: ["Whom", "Whose", "Which (person)"], answer: 1, why: "Whose asks about ownership." },
      { q: "___ of these two routes is shorter?", options: ["Which", "Who", "Whom"], answer: 0, why: "Which asks someone to choose from a limited set." }
    ]
  },
  {
    id: "the-verb", title: "The Verb", subtitle: "Main verbs, auxiliary verbs and verb forms",
    urdu: "Verb جملے میں عمل، واقعہ یا حالت ظاہر کرتا ہے۔ Main verb بنیادی معنی دیتا ہے، جبکہ auxiliary verb tense، سوال، نفی یا voice بنانے میں مدد دیتا ہے۔ Verbs کی base، past، past participle اور -ing صورتیں ہوتی ہیں۔",
    level: "Beginner", duration: "10 min",
    rule: "A verb expresses an action, event, or state. Main verbs carry lexical meaning; auxiliary verbs help form tenses, questions, negatives, and passive constructions.",
    example: "She writes daily. / She is writing. / The letter was written.",
    breakdown: [["writes", "Main verb", "عمل ظاہر کرتا ہے"], ["is", "Auxiliary", "continuous tense بنانے میں مدد"], ["was", "Auxiliary", "passive construction میں مدد"], ["written", "Past participle", "write کی تیسری صورت"]],
    quiz: [
      { q: "Identify the main verb: 'They have finished the work.'", options: ["They", "have", "finished"], answer: 2, why: "Finished carries the main action; have is the auxiliary." },
      { q: "Which is an auxiliary verb?", options: ["garden", "will", "beautiful"], answer: 1, why: "Will helps form a future construction." },
      { q: "Choose the past participle of 'write'.", options: ["wrote", "written", "writing"], answer: 1, why: "Written is the past participle of write." }
    ]
  },
  {
    id: "verbs-incomplete-predication", title: "Verbs of Incomplete Predication", subtitle: "Linking verbs and subject complements",
    urdu: "کچھ verbs اپنے معنی کو مکمل کرنے کے لیے subject complement چاہتے ہیں۔ ایسے verbs کو verbs of incomplete predication کہا جاتا ہے۔ Be, seem, become, appear اور feel جیسے linking verbs کے بعد noun یا adjective آ سکتا ہے۔",
    level: "Intermediate", duration: "9 min",
    rule: "A verb of incomplete predication does not make a complete predicate by itself; it is completed by a subject complement that describes or identifies the subject.",
    example: "The sky is blue. / She became a doctor. / The plan seems sensible.",
    breakdown: [["is", "Linking verb", "subject کو complement سے ملاتا ہے"], ["blue", "Subject complement", "sky کی حالت بتاتا ہے"], ["became", "Linking verb", "subject کی نئی شناخت/حالت"], ["a doctor", "Subject complement", "She کی شناخت"]],
    quiz: [
      { q: "In 'The soup tastes delicious', what is 'delicious'?", options: ["Direct object", "Subject complement", "Adverb"], answer: 1, why: "Delicious describes the subject soup after the linking verb tastes." },
      { q: "Choose the linking verb.", options: ["seems", "kicked", "built"], answer: 0, why: "Seems links the subject to a description or identification." },
      { q: "Which sentence contains a subject complement?", options: ["He kicked the ball.", "The child became sleepy.", "She opened the window."], answer: 1, why: "Sleepy describes the subject child and completes became." }
    ]
  },
  {
    id: "active-passive-voice", title: "Active and Passive Voice", subtitle: "Changing the focus of a sentence",
    urdu: "Active voice میں subject کام کرتا ہے: The chef cooked the meal۔ Passive voice میں object کو subject بنا کر کام پر توجہ دی جاتی ہے: The meal was cooked by the chef۔ Passive بنانے کے لیے مناسب be form اور past participle استعمال ہوتا ہے۔",
    level: "Intermediate", duration: "10 min",
    rule: "In active voice the subject performs the action. In passive voice the receiver becomes the subject and the verb uses an appropriate form of be + past participle.",
    example: "Active: The students completed the project. / Passive: The project was completed by the students.",
    breakdown: [["The students", "Active subject", "کام کرنے والے"], ["completed", "Active verb", "ماضی کا فعل"], ["The project", "Passive subject", "جس پر کام ہوا"], ["was completed", "Passive verb", "was + past participle"]],
    quiz: [
      { q: "Choose the passive form: 'They built the bridge.'", options: ["The bridge was built by them.", "The bridge built them.", "The bridge is build by them."], answer: 0, why: "Simple past passive uses was/were + past participle." },
      { q: "Which sentence is active?", options: ["The window was broken.", "The team won the match.", "The match was won."], answer: 1, why: "The subject team performs the action won." },
      { q: "What form follows the appropriate form of 'be' in a passive verb?", options: ["Past participle", "Present participle only", "Infinitive with to"], answer: 0, why: "Passive constructions use be + past participle." }
    ]
  },
  {
    id: "mood", title: "Mood", subtitle: "Indicative, imperative and subjunctive",
    urdu: "Mood فعل کی ایسی صورت ہے جو بولنے والے کا انداز یا مقصد ظاہر کرتی ہے۔ Indicative حقیقت یا سوال، imperative حکم یا درخواست، اور subjunctive خواہش، ضرورت، تجویز یا غیرحقیقی صورت ظاہر کر سکتا ہے۔",
    level: "Intermediate", duration: "9 min",
    rule: "Grammatical mood expresses how a speaker presents an action: indicative for statements and questions, imperative for commands and requests, and subjunctive for certain wishes, demands, and hypothetical situations.",
    example: "She is at home. (indicative) / Please sit down. (imperative) / I suggest that he be on time. (subjunctive)",
    breakdown: [["She is at home", "Indicative", "حقیقت بیان کرتا ہے"], ["Please sit down", "Imperative", "درخواست یا حکم"], ["he be on time", "Subjunctive", "تجویز کے بعد base form"]],
    quiz: [
      { q: "'Close the door, please.' uses which mood?", options: ["Indicative", "Imperative", "Subjunctive"], answer: 1, why: "It gives a polite command or request." },
      { q: "Choose the subjunctive form: 'They insisted that he ___ present.'", options: ["is", "be", "was"], answer: 1, why: "The mandative subjunctive uses the base form be." },
      { q: "Which sentence is indicative?", options: ["May you succeed!", "The train arrives at six.", "Turn left."], answer: 1, why: "It states information about a scheduled arrival." }
    ]
  },
  {
    id: "tenses-introduction", title: "Tenses: Introduction", subtitle: "Present, past and future time",
    urdu: "Tense فعل کے ذریعے وقت ظاہر کرتا ہے۔ بنیادی طور پر present، past اور future کی بات کی جاتی ہے۔ ان کے ساتھ simple، continuous، perfect اور perfect continuous جیسے پہلو بھی پڑھائے جاتے ہیں۔",
    level: "Beginner", duration: "9 min",
    rule: "Tense locates an action or state in time; English teaching commonly groups forms around present, past, and future, with simple, continuous, perfect, and perfect continuous aspects.",
    example: "I work. / I worked. / I will work. / I am working.",
    breakdown: [["work", "Present simple", "حال کی عادت یا حقیقت"], ["worked", "Past simple", "ماضی کا مکمل عمل"], ["will work", "Future construction", "مستقبل کا ارادہ یا پیش گوئی"], ["am working", "Present continuous", "اس وقت جاری عمل"]],
    quiz: [
      { q: "Which sentence is in the past simple?", options: ["I walk.", "I walked.", "I will walk."], answer: 1, why: "Walked is the past simple form." },
      { q: "Which form commonly describes an action happening now?", options: ["Present continuous", "Past perfect", "Future simple"], answer: 0, why: "Present continuous uses am/is/are + -ing." },
      { q: "What does tense primarily help express?", options: ["Time", "Ownership", "Comparison"], answer: 0, why: "Tense relates an action or state to time." }
    ]
  },
  {
    id: "uses-present-past-tenses", title: "The Uses of the Present and Past Tenses", subtitle: "Habits, facts, ongoing actions and past events",
    urdu: "Present simple عادت اور عمومی حقیقت، present continuous جاری یا عارضی عمل، present perfect ماضی کے عمل کا حال سے تعلق، past simple مکمل ماضی، اور past continuous ماضی میں جاری عمل کے لیے استعمال ہوتا ہے۔",
    level: "Intermediate", duration: "11 min",
    rule: "Use present simple for habits and facts, present continuous for ongoing or temporary actions, present perfect for past actions connected to the present, past simple for completed past events, and past continuous for actions in progress at a past time.",
    example: "She walks to school. / She is walking now. / She has finished. / She visited us yesterday. / She was reading at eight.",
    breakdown: [["walks", "Present simple", "عادت"], ["is walking", "Present continuous", "ابھی جاری عمل"], ["has finished", "Present perfect", "ماضی کا کام اور موجودہ نتیجہ"], ["visited", "Past simple", "ماضی میں مکمل واقعہ"], ["was reading", "Past continuous", "ماضی کے ایک وقت پر جاری عمل"]],
    quiz: [
      { q: "Choose the present simple sentence expressing a habit.", options: ["He is sleeping now.", "He walks to work every day.", "He walked yesterday."], answer: 1, why: "Every day signals a regular habit." },
      { q: "Complete: I ___ my homework already.", options: ["have finished", "finish yesterday", "am finish"], answer: 0, why: "Present perfect connects a completed action with the present." },
      { q: "At 9 pm last night, we ___ dinner.", options: ["eat", "were eating", "have eaten"], answer: 1, why: "Past continuous describes an action in progress at a past time." }
    ]
  },
  {
    id: "the-future", title: "The Future", subtitle: "Will, going to and present forms for future meaning",
    urdu: "Future کے لیے will، be going to، present continuous اور present simple مختلف موقعوں پر آتے ہیں۔ Will فوری فیصلے، پیش گوئی یا وعدے؛ going to پہلے سے ارادے یا موجودہ ثبوت پر مبنی پیش گوئی؛ present continuous طے شدہ انتظامات کے لیے عام ہے۔",
    level: "Intermediate", duration: "10 min",
    rule: "English expresses future meaning with several constructions: will + base verb, be going to + base verb, present continuous for arrangements, and present simple for timetables.",
    example: "I will help you. / It is going to rain. / We are meeting Ali tomorrow. / The train leaves at six.",
    breakdown: [["will help", "Will future", "فیصلہ، وعدہ یا پیش گوئی"], ["is going to rain", "Going to", "موجودہ شواہد پر پیش گوئی"], ["are meeting", "Present continuous", "طے شدہ انتظام"], ["leaves", "Present simple", "شیڈول یا ٹائم ٹیبل"]],
    quiz: [
      { q: "The phone is ringing. I ___ answer it. (decision made now)", options: ["will", "am going", "was"], answer: 0, why: "Will is commonly used for a spontaneous decision." },
      { q: "Look at those dark clouds! It ___ rain.", options: ["is going to", "has", "did"], answer: 0, why: "Going to suits a prediction based on present evidence." },
      { q: "Which form commonly describes a fixed timetable?", options: ["Present simple", "Past continuous", "Past perfect"], answer: 0, why: "Timetables often use the present simple: The train leaves at six." }
    ]
  },
  {
    id: "verb-person-number", title: "The Verb: Person and Number", subtitle: "Matching verb forms to the subject",
    urdu: "Person بتاتا ہے کہ subject بولنے والا، سننے والا یا کسی تیسرے شخص کے بارے میں ہے۔ Number واحد یا جمع بتاتا ہے۔ Simple present میں he/she/it کے ساتھ اکثر verb میں s یا es آتا ہے؛ be کی صورتیں am, is, are اور was, were بھی subject کے مطابق بدلتی ہیں۔",
    level: "Intermediate", duration: "9 min",
    rule: "Verb forms may vary according to the grammatical person and number of the subject; in the present simple, third-person singular lexical verbs usually take -s or -es.",
    example: "I work. / She works. / We are ready. / He is ready. / They were late.",
    breakdown: [["I work", "First person singular", "I کے ساتھ base form"], ["She works", "Third person singular", "verb کے ساتھ s"], ["We are", "First person plural", "جمع subject کے ساتھ are"], ["He is", "Third person singular", "واحد subject کے ساتھ is"]],
    quiz: [
      { q: "Choose the correct verb: 'My brother ___ in Lahore.'", options: ["live", "lives", "living"], answer: 1, why: "My brother is third-person singular, so use lives." },
      { q: "Choose the correct form: 'You ___ my best friend.'", options: ["is", "am", "are"], answer: 2, why: "You takes are in standard English." },
      { q: "Which sentence has correct subject–verb agreement?", options: ["They was happy.", "They were happy.", "They is happy."], answer: 1, why: "The plural subject they takes were in the past tense of be." }
    ]
  },
  {
    id: "the-infinitive", title: "The Infinitive", subtitle: "To-infinitives and bare infinitives",
    urdu: "Infinitive فعل کی بنیادی صورت ہے۔ اکثر اس سے پہلے to آتا ہے، جیسے to read، مگر modal verbs کے بعد اور let/make جیسے بعض verbs کے بعد bare infinitive یعنی بغیر to کے base verb آتا ہے۔",
    level: "Intermediate", duration: "9 min",
    rule: "The to-infinitive is to + base verb; the bare infinitive is the base verb without to, used after modal auxiliaries and certain verbs and expressions.",
    example: "I want to learn. / She can swim. / Let him speak.",
    breakdown: [["to learn", "To-infinitive", "to + base verb"], ["swim", "Bare infinitive", "modal can کے بعد to نہیں"], ["speak", "Bare infinitive", "let کے بعد base form"]],
    quiz: [
      { q: "Choose the correct form: 'She hopes ___ abroad.'", options: ["study", "to study", "studying"], answer: 1, why: "Hope is normally followed by a to-infinitive." },
      { q: "Complete: 'You must ___ the instructions.'", options: ["to read", "reading", "read"], answer: 2, why: "A modal verb such as must is followed by the bare infinitive." },
      { q: "Which sentence contains a bare infinitive?", options: ["They decided to leave.", "He can drive.", "I enjoy reading."], answer: 1, why: "Drive follows the modal can without to." }
    ]
  },
  {
    id: "the-participle", title: "The Participle", subtitle: "Present, past and perfect participles",
    urdu: "Participle فعل کی ایسی صورت ہے جو verb phrase یا adjective کا کام کر سکتی ہے۔ Present participle عموماً -ing، past participle عموماً تیسری صورت، اور perfect participle having + past participle سے بنتا ہے۔",
    level: "Intermediate", duration: "10 min",
    rule: "Present participles use the -ing form, past participles use the verb's past-participle form, and perfect participle clauses commonly use having + past participle.",
    example: "The crying baby needs sleep. / The broken window was repaired. / Having finished her work, she went home.",
    breakdown: [["crying", "Present participle", "baby کی وضاحت کرتا ہے"], ["broken", "Past participle", "window کی حالت بتاتا ہے"], ["Having finished", "Perfect participle", "پہلا عمل مکمل ہونے کے بعد دوسرا عمل"]],
    quiz: [
      { q: "Which word is a present participle?", options: ["written", "running", "ran"], answer: 1, why: "Running is the -ing participle form." },
      { q: "Choose the past participle of 'break'.", options: ["broke", "breaking", "broken"], answer: 2, why: "Broken is the past participle of break." },
      { q: "Complete: '___ the letter, he posted it.'", options: ["Having written", "Writes", "To writing"], answer: 0, why: "Having + past participle forms a perfect participle clause." }
    ]
  },
  {
    id: "the-gerund", title: "The Gerund", subtitle: "The -ing form used as a noun",
    urdu: "Gerund فعل کی -ing صورت ہے جو noun کا کام کرتی ہے۔ یہ subject، object یا preposition کے بعد آ سکتا ہے۔ ہر -ing لفظ gerund نہیں ہوتا؛ اگر وہ continuous tense یا adjective کا کام کرے تو اس کا grammatical کردار مختلف ہے۔",
    level: "Intermediate", duration: "9 min",
    rule: "A gerund is an -ing verb form functioning as a noun; it can serve as a subject, object, or complement and may take its own object.",
    example: "Reading improves vocabulary. / She enjoys painting. / He is good at solving puzzles.",
    breakdown: [["Reading", "Gerund subject", "جملے کا subject"], ["painting", "Gerund object", "enjoys کا object"], ["solving puzzles", "Gerund phrase", "preposition at کے بعد noun کا کام"]],
    quiz: [
      { q: "Which sentence uses a gerund as its subject?", options: ["She is reading.", "Reading is relaxing.", "The reading child smiled."], answer: 1, why: "Reading functions as the subject of is." },
      { q: "Choose the correct form: 'They avoided ___ late.'", options: ["to arrive", "arriving", "arrive"], answer: 1, why: "Avoid is normally followed by a gerund." },
      { q: "Which -ing word is a gerund?", options: ["Swimming is fun.", "They are swimming.", "The swimming child waved."], answer: 0, why: "Swimming functions as a noun and is the subject." }
    ]
  },
  {
    "id": "irregular-verbs",
    "title": "Irregular Verbs",
    "subtitle": "Past forms that do not take a regular -ed ending",
    "urdu": "Irregular verbs ماضی اور past participle بنانے کے لیے عام طور پر صرف -ed نہیں لیتے۔ ان کی صورتیں یاد کرنا ضروری ہے، مثلاً go–went–gone اور write–wrote–written۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "Irregular verbs form their past simple and past participle in ways that do not follow the regular -ed pattern.",
    "example": "go–went–gone; see–saw–seen; buy–bought–bought; cut–cut–cut.",
    "breakdown": [
      [
        "go",
        "Base form",
        "اصل صورت"
      ],
      [
        "went",
        "Past simple",
        "ماضی کی صورت"
      ],
      [
        "gone",
        "Past participle",
        "has/have/had کے ساتھ"
      ],
      [
        "write–wrote–written",
        "Irregular forms",
        "تینوں صورتیں مختلف"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the past simple of 'begin'.",
        "options": [
          "beginned",
          "began",
          "begun"
        ],
        "answer": 1,
        "why": "Began is the past simple; begun is the past participle."
      },
      {
        "q": "Choose the past participle of 'break'.",
        "options": [
          "broke",
          "broken",
          "breaking"
        ],
        "answer": 1,
        "why": "Broken is used with have/has/had and in passive forms."
      },
      {
        "q": "Which verb has the same base, past and past participle?",
        "options": [
          "go",
          "cut",
          "write"
        ],
        "answer": 1,
        "why": "Cut–cut–cut has the same spelling in all three forms."
      }
    ]
  },
  {
    "id": "auxiliaries-and-modals",
    "title": "Auxiliaries and Modals",
    "subtitle": "Helping verbs and modal meanings",
    "urdu": "Auxiliary verbs اصل فعل کے ساتھ tense، سوال، نفی اور passive voice بناتے ہیں۔ Be, have اور do بنیادی auxiliaries ہیں۔ Modal auxiliaries جیسے can, could, may, might, must, shall, should, will اور would صلاحیت، اجازت، امکان، ضرورت یا ارادہ ظاہر کرتے ہیں۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "Primary auxiliaries be, have, and do help form verb phrases; modal auxiliaries precede a bare infinitive and express meanings such as ability, permission, possibility, obligation, and prediction.",
    "example": "She is reading. / Have they arrived? / Do you agree? / You must wear a seat belt.",
    "breakdown": [
      [
        "is",
        "Be auxiliary",
        "continuous tense"
      ],
      [
        "have",
        "Have auxiliary",
        "perfect tense"
      ],
      [
        "do",
        "Do auxiliary",
        "سوال اور نفی"
      ],
      [
        "must",
        "Modal",
        "ضرورت یا پابندی"
      ],
      [
        "might",
        "Modal",
        "امکان"
      ]
    ],
    "quiz": [
      {
        "q": "Which auxiliary forms the present perfect?",
        "options": [
          "have",
          "do",
          "be"
        ],
        "answer": 0,
        "why": "Have/has + past participle forms the present perfect."
      },
      {
        "q": "Which modal expresses strong obligation?",
        "options": [
          "might",
          "must",
          "could"
        ],
        "answer": 1,
        "why": "Must commonly expresses strong obligation."
      },
      {
        "q": "Choose the correct sentence.",
        "options": [
          "She can sings.",
          "She can sing.",
          "She cans sing."
        ],
        "answer": 1,
        "why": "A modal is followed by the bare infinitive."
      }
    ]
  },
  {
    "id": "conjugation-of-the-verb",
    "title": "Conjugation of the Verb",
    "subtitle": "Verb forms according to person, number, tense and mood",
    "urdu": "Verb کی conjugation سے مراد subject، person، number، tense یا mood کے مطابق فعل کی صورت بدلنا ہے۔ مثال: I am، he is، they are؛ یا I work، she works۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "Conjugation is the variation of a verb's form to express grammatical distinctions such as person, number, tense, and mood.",
    "example": "I am; you are; he is. / I work; she works. / I went; they went.",
    "breakdown": [
      [
        "am / is / are",
        "Present forms of be",
        "subject کے مطابق تبدیلی"
      ],
      [
        "work / works",
        "Present simple",
        "third-person singular میں -s"
      ],
      [
        "went",
        "Past form",
        "past tense کی صورت"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct form: 'She ___ ready.'",
        "options": [
          "am",
          "are",
          "is"
        ],
        "answer": 2,
        "why": "The third-person singular subject she takes is."
      },
      {
        "q": "Which is the correct present form?",
        "options": [
          "He play",
          "He plays",
          "He playing"
        ],
        "answer": 1,
        "why": "A third-person singular subject usually takes -s in the present simple."
      },
      {
        "q": "What is conjugation?",
        "options": [
          "Changing a verb's form for grammar",
          "Adding an adjective",
          "Joining two nouns"
        ],
        "answer": 0,
        "why": "Conjugation changes a verb form to express grammatical information."
      }
    ]
  },
  {
    "id": "the-adverb",
    "title": "The Adverb",
    "subtitle": "Modifying verbs, adjectives and other adverbs",
    "urdu": "Adverb فعل، adjective یا دوسرے adverb کے بارے میں مزید معلومات دیتا ہے۔ یہ manner، time، place، frequency یا degree بتا سکتا ہے، جیسے slowly، yesterday، here، often اور very۔",
    "level": "Beginner",
    "duration": "8 min",
    "rule": "An adverb modifies a verb, an adjective, another adverb, or sometimes a whole clause.",
    "example": "She speaks softly. / It is very cold. / He arrived yesterday.",
    "breakdown": [
      [
        "softly",
        "Manner adverb",
        "کیسے بولتی ہے؟"
      ],
      [
        "very",
        "Degree adverb",
        "cold کی شدت"
      ],
      [
        "yesterday",
        "Time adverb",
        "کب پہنچا؟"
      ]
    ],
    "quiz": [
      {
        "q": "Find the adverb: 'The baby slept peacefully.'",
        "options": [
          "baby",
          "slept",
          "peacefully"
        ],
        "answer": 2,
        "why": "Peacefully tells how the baby slept."
      },
      {
        "q": "Which word modifies the adjective in 'very tall'?",
        "options": [
          "very",
          "tall",
          "in"
        ],
        "answer": 0,
        "why": "Very modifies the degree of tall."
      },
      {
        "q": "Which is an adverb of frequency?",
        "options": [
          "often",
          "outside",
          "tomorrow"
        ],
        "answer": 0,
        "why": "Often tells how frequently something happens."
      }
    ]
  },
  {
    "id": "comparison-of-adverbs",
    "title": "Comparison of Adverbs",
    "subtitle": "Positive, comparative and superlative forms",
    "urdu": "Adverbs بھی comparison کے لیے positive، comparative اور superlative صورتیں رکھتے ہیں۔ چھوٹے adverbs میں اکثر -er اور -est، جبکہ بہت سے -ly adverbs میں more اور most استعمال ہوتے ہیں۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "Adverbs can be compared with -er/-est or more/most; some forms are irregular, such as well, better, best.",
    "example": "fast, faster, fastest; carefully, more carefully, most carefully; well, better, best.",
    "breakdown": [
      [
        "fast",
        "Positive",
        "اصل صورت"
      ],
      [
        "faster",
        "Comparative",
        "دو کاموں کا موازنہ"
      ],
      [
        "fastest",
        "Superlative",
        "تین یا زیادہ میں سب سے زیادہ"
      ],
      [
        "well / better / best",
        "Irregular",
        "غیرقاعدہ صورتیں"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the comparative of 'carefully'.",
        "options": [
          "carefuller",
          "more carefully",
          "most carefully"
        ],
        "answer": 1,
        "why": "Many adverbs ending in -ly use more for the comparative."
      },
      {
        "q": "Choose the superlative of 'fast'.",
        "options": [
          "faster",
          "fastest",
          "most fast"
        ],
        "answer": 1,
        "why": "Fast forms fastest with -est."
      },
      {
        "q": "What is the comparative form of 'well'?",
        "options": [
          "gooder",
          "better",
          "best"
        ],
        "answer": 1,
        "why": "Well has the irregular comparative better."
      }
    ]
  },
  {
    "id": "formation-of-adverbs",
    "title": "Formation of Adverbs",
    "subtitle": "How adverbs are made",
    "urdu": "بہت سے adverbs میں adjective کے ساتھ -ly لگایا جاتا ہے، جیسے quick → quickly۔ کچھ spellings بدلتی ہیں، مثلاً happy → happily؛ جبکہ بعض الفاظ کی صورت نہیں بدلتی، جیسے fast، hard اور late۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "Many adverbs are formed by adding -ly to adjectives, with spelling changes in some cases; some adverbs have the same form as their adjectives.",
    "example": "quick → quickly; happy → happily; gentle → gently; good → well; fast → fast.",
    "breakdown": [
      [
        "quickly",
        "quick + -ly",
        "عام طریقہ"
      ],
      [
        "happily",
        "happy → happily",
        "y بدل کر i"
      ],
      [
        "gently",
        "gentle → gently",
        "آخری e حذف"
      ],
      [
        "fast",
        "same form",
        "adjective اور adverb دونوں"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the adverb formed from 'careful'.",
        "options": [
          "carefuly",
          "carefully",
          "carefuller"
        ],
        "answer": 1,
        "why": "Add -ly to careful: carefully."
      },
      {
        "q": "Choose the correct adverb from 'happy'.",
        "options": [
          "happyly",
          "happily",
          "happiley"
        ],
        "answer": 1,
        "why": "Change y to i before adding -ly."
      },
      {
        "q": "Which word can be both an adjective and an adverb without changing form?",
        "options": [
          "fast",
          "beautiful",
          "slowly"
        ],
        "answer": 0,
        "why": "Fast can describe a noun or modify a verb."
      }
    ]
  },
  {
    "id": "position-of-adverbs",
    "title": "Position of Adverbs",
    "subtitle": "Where adverbs usually appear in a sentence",
    "urdu": "Adverb کی جگہ اس کے معنی اور قسم پر منحصر ہوتی ہے۔ Manner adverbs اکثر verb یا object کے بعد، frequency adverbs عام فعل سے پہلے مگر be کے بعد، اور time/place adverbs اکثر جملے کے آخر میں آتے ہیں۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "Adverb placement depends on its type and emphasis: frequency adverbs usually precede main verbs but follow be; manner, place, and time adverbs often appear after the verb or object or at the end.",
    "example": "She often reads. / He is always polite. / They worked carefully yesterday.",
    "breakdown": [
      [
        "often reads",
        "Frequency position",
        "main verb سے پہلے"
      ],
      [
        "is always",
        "Frequency with be",
        "be کے بعد"
      ],
      [
        "worked carefully",
        "Manner position",
        "verb/object کے بعد"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the usual position: 'She ___ visits her aunt.'",
        "options": [
          "often",
          "visits often always",
          "always often"
        ],
        "answer": 0,
        "why": "Frequency adverbs usually come before the main verb."
      },
      {
        "q": "Choose the correct sentence.",
        "options": [
          "He always is late.",
          "He is always late.",
          "Always he late is."
        ],
        "answer": 1,
        "why": "Frequency adverbs usually follow the verb be."
      },
      {
        "q": "Where does a time adverb often appear?",
        "options": [
          "At the end of a sentence",
          "Inside the subject noun",
          "Before every article"
        ],
        "answer": 0,
        "why": "Time adverbs commonly appear at the end, though other positions are possible."
      }
    ]
  },
  {
    "id": "prepositions-following-words",
    "title": "Words Followed by Prepositions",
    "subtitle": "Common adjective, verb and noun combinations",
    "urdu": "انگریزی میں کئی verbs، adjectives اور nouns مخصوص prepositions کے ساتھ استعمال ہوتے ہیں۔ مثال: listen to، depend on، interested in، afraid of، reason for۔ ان combinations کو مثالوں کے ساتھ یاد کریں۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "Many words form conventional combinations with particular prepositions; learn the complete phrase rather than translating each preposition literally.",
    "example": "listen to music; depend on others; interested in science; proud of her work; a reason for delay.",
    "breakdown": [
      [
        "listen to",
        "Verb + preposition",
        "کسی بات کو سننا"
      ],
      [
        "depend on",
        "Verb + preposition",
        "انحصار کرنا"
      ],
      [
        "interested in",
        "Adjective + preposition",
        "دلچسپی ہونا"
      ],
      [
        "reason for",
        "Noun + preposition",
        "کسی چیز کی وجہ"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct phrase.",
        "options": [
          "listen at music",
          "listen to music",
          "listen on music"
        ],
        "answer": 1,
        "why": "The standard phrase is listen to."
      },
      {
        "q": "She is interested ___ science.",
        "options": [
          "on",
          "at",
          "in"
        ],
        "answer": 2,
        "why": "Interested is commonly followed by in."
      },
      {
        "q": "Success often depends ___ hard work.",
        "options": [
          "on",
          "for",
          "with"
        ],
        "answer": 0,
        "why": "The verb depend is followed by on."
      }
    ]
  },
  {
    "id": "the-conjunction",
    "title": "The Conjunction",
    "subtitle": "Joining words, phrases and clauses",
    "urdu": "Conjunction ایسا لفظ ہے جو words، phrases یا clauses کو ملاتا ہے۔ اس کی بنیادی اقسام coordinating، subordinating اور correlative conjunctions ہیں۔",
    "level": "Beginner",
    "duration": "8 min",
    "rule": "A conjunction joins words, phrases, or clauses; common groups are coordinating, subordinating, and correlative conjunctions.",
    "example": "Tea and coffee; I stayed because it rained; either call or text.",
    "breakdown": [
      [
        "and",
        "Coordinating",
        "برابر درجے کے الفاظ ملاتا ہے"
      ],
      [
        "because",
        "Subordinating",
        "وجہ والی subordinate clause"
      ],
      [
        "either...or",
        "Correlative",
        "جوڑے کی صورت میں انتخاب"
      ]
    ],
    "quiz": [
      {
        "q": "Which word is a conjunction?",
        "options": [
          "under",
          "because",
          "quickly"
        ],
        "answer": 1,
        "why": "Because joins a reason clause to the main clause."
      },
      {
        "q": "Which conjunction joins equal grammatical units?",
        "options": [
          "Coordinating",
          "Subordinating",
          "Interjection"
        ],
        "answer": 0,
        "why": "Coordinating conjunctions join units of equal grammatical status."
      },
      {
        "q": "Complete: 'You can have ___ tea ___ coffee.'",
        "options": [
          "either / or",
          "because / so",
          "although / but"
        ],
        "answer": 0,
        "why": "Either...or is a correlative pair for alternatives."
      }
    ]
  },
  {
    "id": "conjunctions-and-their-uses",
    "title": "Some Conjunctions and Their Uses",
    "subtitle": "And, but, or, because, although, unless and more",
    "urdu": "And اضافہ، but تضاد، or انتخاب، because وجہ، although رعایت، if شرط، unless منفی شرط، اور so نتیجہ ظاہر کرتا ہے۔ ہر conjunction دو حصوں کے درمیان منطقی تعلق قائم کرتا ہے۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "Choose conjunctions according to the relationship: addition (and), contrast (but/although), choice (or), reason (because), result (so), condition (if/unless), and time (when/while).",
    "example": "I was tired, but I continued. / We stayed in because it rained. / Unless you hurry, you will miss the bus.",
    "breakdown": [
      [
        "and",
        "Addition",
        "اضافہ"
      ],
      [
        "but / although",
        "Contrast",
        "تضاد یا رعایت"
      ],
      [
        "because",
        "Reason",
        "وجہ"
      ],
      [
        "so",
        "Result",
        "نتیجہ"
      ],
      [
        "if / unless",
        "Condition",
        "شرط"
      ],
      [
        "when / while",
        "Time",
        "وقت"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the conjunction of reason: 'We stayed home ___ it was raining.'",
        "options": [
          "because",
          "but",
          "or"
        ],
        "answer": 0,
        "why": "Because introduces the reason."
      },
      {
        "q": "Complete: '___ you practise, you will improve.'",
        "options": [
          "If",
          "Although",
          "Unless"
        ],
        "answer": 0,
        "why": "If introduces a condition."
      },
      {
        "q": "Which conjunction shows contrast?",
        "options": [
          "and",
          "but",
          "so"
        ],
        "answer": 1,
        "why": "But connects contrasting ideas."
      }
    ]
  },
  {
    "id": "the-interjection",
    "title": "The Interjection",
    "subtitle": "Words expressing sudden feeling or reaction",
    "urdu": "Interjection ایسا لفظ یا مختصر فقرہ ہے جو اچانک جذبہ، حیرت، خوشی، درد یا افسوس ظاہر کرتا ہے۔ اسے اکثر exclamation mark یا comma سے الگ کیا جاتا ہے۔",
    "level": "Beginner",
    "duration": "7 min",
    "rule": "An interjection expresses a sudden feeling or reaction and is often grammatically independent of the rest of the sentence.",
    "example": "Hurrah! We have won. / Alas, the old tree has fallen. / Oh! I forgot.",
    "breakdown": [
      [
        "Hurrah!",
        "Joy",
        "خوشی"
      ],
      [
        "Alas,",
        "Sorrow",
        "افسوس"
      ],
      [
        "Oh!",
        "Surprise / realization",
        "حیرت یا احساس"
      ]
    ],
    "quiz": [
      {
        "q": "Which is an interjection expressing joy?",
        "options": [
          "Hurrah!",
          "Because",
          "Under"
        ],
        "answer": 0,
        "why": "Hurrah expresses happiness or triumph."
      },
      {
        "q": "Choose the interjection in 'Alas! We lost the match.'",
        "options": [
          "lost",
          "match",
          "Alas"
        ],
        "answer": 2,
        "why": "Alas expresses sorrow or regret."
      },
      {
        "q": "What does an interjection usually express?",
        "options": [
          "A sudden feeling",
          "Ownership",
          "Verb tense"
        ],
        "answer": 0,
        "why": "Interjections express reactions or emotions."
      }
    ]
  },
  {
    "id": "same-word-different-parts-of-speech",
    "title": "The Same Word Used as Different Parts of Speech",
    "subtitle": "Meaning and function change with sentence context",
    "urdu": "ایک ہی لفظ مختلف جملوں میں مختلف parts of speech کا کام کر سکتا ہے۔ اس کا کردار جملے میں اس کے استعمال سے طے ہوتا ہے، صرف لفظ کی شکل سے نہیں۔ مثال: a fast car (adjective)، run fast (adverb)، fast (verb: روزہ رکھنا)۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "A word's part of speech is determined by its function in context; the same spelling can serve as different parts of speech in different sentences.",
    "example": "I drink water (noun/verb distinction: water as noun); Please water the plants (verb). / a fast train (adjective); run fast (adverb).",
    "breakdown": [
      [
        "water",
        "Noun",
        "I drink water؛ چیز کا نام"
      ],
      [
        "water",
        "Verb",
        "Water the plants؛ عمل"
      ],
      [
        "fast",
        "Adjective",
        "fast train؛ train کی صفت"
      ],
      [
        "fast",
        "Adverb",
        "run fast؛ فعل کی کیفیت"
      ],
      [
        "before",
        "Preposition / conjunction / adverb",
        "جملے کے مطابق کردار بدل سکتا ہے"
      ]
    ],
    "quiz": [
      {
        "q": "In 'They fast during the day', what part of speech is 'fast'?",
        "options": [
          "Noun",
          "Verb",
          "Adjective"
        ],
        "answer": 1,
        "why": "Fast is the verb meaning to abstain from food."
      },
      {
        "q": "In 'a fast runner', what is 'fast'?",
        "options": [
          "Adjective",
          "Adverb",
          "Conjunction"
        ],
        "answer": 0,
        "why": "Fast describes the noun runner."
      },
      {
        "q": "In 'She runs fast', what is 'fast'?",
        "options": [
          "Adjective",
          "Adverb",
          "Preposition"
        ],
        "answer": 1,
        "why": "Fast modifies the verb runs."
      }
    ]
  },
  {
    "id": "analysis-of-simple-sentences",
    "title": "Analysis of Simple Sentences",
    "subtitle": "Breaking a sentence into its grammatical parts",
    "urdu": "Simple sentence میں ایک independent clause ہوتا ہے۔ اس کے subject، predicate، object، complement اور modifiers کو الگ کر کے ان کا کام پہچانیں۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "Analyse a simple sentence by identifying its subject and predicate, then the verb, objects, complements, and modifiers. A simple sentence contains one independent clause.",
    "example": "The diligent student wrote a careful answer in her notebook.",
    "breakdown": [
      [
        "The diligent student",
        "Subject",
        "جس کے بارے میں بات ہو رہی ہے"
      ],
      [
        "wrote",
        "Verb",
        "عمل ظاہر کرتا ہے"
      ],
      [
        "a careful answer",
        "Direct object",
        "کیا لکھا؟"
      ],
      [
        "in her notebook",
        "Adverbial phrase",
        "کہاں لکھا؟"
      ]
    ],
    "quiz": [
      {
        "q": "In 'The child opened the door', what is the direct object?",
        "options": [
          "The child",
          "opened",
          "the door"
        ],
        "answer": 2,
        "why": "The door receives the action of opened."
      },
      {
        "q": "Which part tells what the subject does or is?",
        "options": [
          "Predicate",
          "Article",
          "Object only"
        ],
        "answer": 0,
        "why": "The predicate says something about the subject and includes the verb."
      },
      {
        "q": "How many independent clauses does a simple sentence contain?",
        "options": [
          "One",
          "Two",
          "At least three"
        ],
        "answer": 0,
        "why": "A simple sentence has one independent clause."
      }
    ]
  },
  {
    "id": "phrases",
    "title": "Phrases",
    "subtitle": "Understanding groups of words",
    "urdu": "Phrase الفاظ کا ایسا مجموعہ ہے جو جملے میں ایک اکائی کی طرح کام کرتا ہے، مگر عام طور پر اس میں subject اور finite verb پر مشتمل مکمل clause نہیں ہوتا۔",
    "level": "Intermediate",
    "duration": "8 min",
    "rule": "A phrase is a group of related words that functions as a unit in a sentence but does not contain a complete subject–finite-verb structure.",
    "example": "The girl with curly hair smiled.",
    "breakdown": [
      [
        "with curly hair",
        "Phrase",
        "اسم girl کے بارے میں مزید بتاتا ہے"
      ],
      [
        "The girl",
        "Noun phrase",
        "جملے کا subject"
      ],
      [
        "smiled",
        "Verb",
        "predicate کا بنیادی فعل"
      ]
    ],
    "quiz": [
      {
        "q": "Which group is a phrase rather than a clause?",
        "options": [
          "because it rained",
          "under the wooden bridge",
          "when she arrived"
        ],
        "answer": 1,
        "why": "Under the wooden bridge has no subject–finite-verb combination."
      },
      {
        "q": "A phrase usually functions as what?",
        "options": [
          "A grammatical unit",
          "A complete paragraph",
          "Always a full sentence"
        ],
        "answer": 0,
        "why": "A phrase performs a grammatical role as a unit."
      }
    ]
  },
  {
    "id": "adjective-phrases",
    "title": "Adjective Phrases",
    "subtitle": "Phrases that describe nouns and pronouns",
    "urdu": "Adjective phrase ایسا phrase ہے جو adjective کی طرح noun یا pronoun کی وضاحت کرتا ہے۔ یہ عموماً بتاتا ہے کہ کوئی شخص یا چیز کیسی ہے۔",
    "level": "Intermediate",
    "duration": "8 min",
    "rule": "An adjective phrase is a group of words that modifies a noun or pronoun and functions like an adjective.",
    "example": "The house on the hill belongs to my aunt.",
    "breakdown": [
      [
        "on the hill",
        "Adjective phrase",
        "house کی نشاندہی کرتا ہے"
      ],
      [
        "The house",
        "Noun",
        "جس کے بارے میں بات ہے"
      ],
      [
        "belongs to my aunt",
        "Predicate",
        "subject کے بارے میں خبر"
      ]
    ],
    "quiz": [
      {
        "q": "Identify the adjective phrase: 'The boy with a red cap waved.'",
        "options": [
          "The boy",
          "with a red cap",
          "waved"
        ],
        "answer": 1,
        "why": "With a red cap describes the noun boy."
      },
      {
        "q": "An adjective phrase modifies which kind of word?",
        "options": [
          "A noun or pronoun",
          "Only a verb",
          "Only a conjunction"
        ],
        "answer": 0,
        "why": "It functions as an adjective and describes a noun or pronoun."
      }
    ]
  },
  {
    "id": "adverb-phrases",
    "title": "Adverb Phrases",
    "subtitle": "Phrases that modify verbs, adjectives or adverbs",
    "urdu": "Adverb phrase فعل، adjective یا دوسرے adverb کے بارے میں مزید معلومات دیتا ہے۔ یہ وقت، جگہ، طریقہ، وجہ یا شدت ظاہر کر سکتا ہے۔",
    "level": "Intermediate",
    "duration": "8 min",
    "rule": "An adverb phrase is a group of words that functions as an adverb, modifying a verb, adjective, or another adverb.",
    "example": "The team played with great enthusiasm.",
    "breakdown": [
      [
        "played",
        "Verb",
        "عمل"
      ],
      [
        "with great enthusiasm",
        "Adverb phrase",
        "بتاتا ہے کہ ٹیم نے کیسے کھیلا"
      ],
      [
        "The team",
        "Subject",
        "کام کرنے والا گروہ"
      ]
    ],
    "quiz": [
      {
        "q": "Find the adverb phrase: 'She spoke in a gentle voice.'",
        "options": [
          "She",
          "spoke",
          "in a gentle voice"
        ],
        "answer": 2,
        "why": "The phrase explains how she spoke."
      },
      {
        "q": "An adverb phrase can answer which question?",
        "options": [
          "How?",
          "Whose name?",
          "Which article?"
        ],
        "answer": 0,
        "why": "Adverb phrases can express manner, time, place, reason and degree."
      }
    ]
  },
  {
    "id": "noun-phrases",
    "title": "Noun Phrases",
    "subtitle": "Groups of words that function as nouns",
    "urdu": "Noun phrase ایسا مجموعہ ہے جس کا مرکزی لفظ noun یا pronoun ہوتا ہے۔ پورا phrase subject، object یا complement کا کام کر سکتا ہے۔",
    "level": "Intermediate",
    "duration": "8 min",
    "rule": "A noun phrase is a group of words built around a noun or pronoun and functioning as a noun in a sentence.",
    "example": "The very old wooden bridge collapsed.",
    "breakdown": [
      [
        "The very old wooden bridge",
        "Noun phrase",
        "پورا phrase subject ہے"
      ],
      [
        "bridge",
        "Head noun",
        "phrase کا مرکزی اسم"
      ],
      [
        "collapsed",
        "Verb",
        "عمل ظاہر کرتا ہے"
      ]
    ],
    "quiz": [
      {
        "q": "Which is the noun phrase in 'Those three little birds are singing'?",
        "options": [
          "are singing",
          "Those three little birds",
          "singing"
        ],
        "answer": 1,
        "why": "The complete group is built around the head noun birds."
      },
      {
        "q": "What is the head noun in 'a basket of ripe mangoes'?",
        "options": [
          "basket",
          "of",
          "ripe"
        ],
        "answer": 0,
        "why": "Basket is the main noun of the phrase."
      }
    ]
  },
  {
    "id": "clauses",
    "title": "Clauses",
    "subtitle": "Groups of words with a subject and a verb",
    "urdu": "Clause میں subject اور verb دونوں ہوتے ہیں۔ Independent clause مکمل خیال ظاہر کرتا ہے، جبکہ dependent clause معنی مکمل کرنے کے لیے کسی دوسرے clause پر انحصار کرتا ہے۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "A clause is a group of words containing a subject and a verb. Independent clauses can stand alone; dependent clauses cannot.",
    "example": "I stayed inside because it was raining.",
    "breakdown": [
      [
        "I stayed inside",
        "Independent clause",
        "مکمل خیال"
      ],
      [
        "because it was raining",
        "Dependent clause",
        "وجہ بتاتا ہے مگر اکیلا مکمل جملہ نہیں"
      ]
    ],
    "quiz": [
      {
        "q": "Which group is an independent clause?",
        "options": [
          "although she was tired",
          "the train arrived",
          "because we waited"
        ],
        "answer": 1,
        "why": "The train arrived expresses a complete thought."
      },
      {
        "q": "What must a clause contain?",
        "options": [
          "A subject and a verb",
          "Only an adjective",
          "Two articles"
        ],
        "answer": 0,
        "why": "A clause has a subject–verb relationship."
      }
    ]
  },
  {
    "id": "adverb-clauses",
    "title": "Adverb Clauses",
    "subtitle": "Dependent clauses that work like adverbs",
    "urdu": "Adverb clause ایک dependent clause ہے جو verb یا پورے main clause کے بارے میں وقت، وجہ، شرط، مقصد، رعایت یا طریقہ بتاتا ہے۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "An adverb clause is a dependent clause that modifies a verb or main clause and commonly answers when, where, why, how, or under what condition.",
    "example": "We cancelled the match because it was raining.",
    "breakdown": [
      [
        "We cancelled the match",
        "Main clause",
        "بنیادی بات"
      ],
      [
        "because it was raining",
        "Adverb clause of reason",
        "میچ منسوخ کرنے کی وجہ"
      ],
      [
        "it",
        "Subject",
        "clause کا subject"
      ],
      [
        "was raining",
        "Verb phrase",
        "clause کا فعل"
      ]
    ],
    "quiz": [
      {
        "q": "Which is the adverb clause in 'Call me when you arrive'?",
        "options": [
          "Call me",
          "when you arrive",
          "me"
        ],
        "answer": 1,
        "why": "When you arrive tells when to call."
      },
      {
        "q": "What does an adverb clause commonly express?",
        "options": [
          "Time or reason",
          "Only the name of a person",
          "Possession only"
        ],
        "answer": 0,
        "why": "Adverb clauses express meanings such as time, reason, condition and contrast."
      }
    ]
  },
  {
    "id": "adjective-clauses",
    "title": "Adjective Clauses",
    "subtitle": "Relative clauses that describe nouns",
    "urdu": "Adjective clause ایک dependent clause ہے جو noun یا pronoun کی وضاحت کرتا ہے۔ یہ اکثر who، whom، whose، which یا that سے شروع ہوتا ہے۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "An adjective clause is a dependent clause that modifies a noun or pronoun, often introduced by a relative pronoun or relative adverb.",
    "example": "The student who won the prize thanked her teacher.",
    "breakdown": [
      [
        "The student",
        "Noun",
        "جس کی وضاحت ہو رہی ہے"
      ],
      [
        "who won the prize",
        "Adjective clause",
        "student کے بارے میں بتاتا ہے"
      ],
      [
        "who",
        "Relative pronoun",
        "clause کو student سے جوڑتا ہے"
      ]
    ],
    "quiz": [
      {
        "q": "Identify the adjective clause: 'I liked the book that you recommended.'",
        "options": [
          "I liked",
          "the book",
          "that you recommended"
        ],
        "answer": 2,
        "why": "That you recommended describes which book."
      },
      {
        "q": "Which word commonly introduces an adjective clause?",
        "options": [
          "who",
          "very",
          "under"
        ],
        "answer": 0,
        "why": "Who is a relative pronoun that can introduce an adjective clause."
      }
    ]
  },
  {
    "id": "noun-clauses",
    "title": "Noun Clauses",
    "subtitle": "Dependent clauses that function as nouns",
    "urdu": "Noun clause ایک dependent clause ہے جو جملے میں noun کی طرح subject، object یا complement کا کام کرتا ہے۔ یہ اکثر that، what، whether یا سوالیہ الفاظ سے شروع ہوتا ہے۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A noun clause is a dependent clause that performs a noun function, such as subject, direct object, or subject complement.",
    "example": "What she said surprised everyone.",
    "breakdown": [
      [
        "What she said",
        "Noun clause",
        "پورا clause subject ہے"
      ],
      [
        "she",
        "Subject",
        "noun clause کے اندر"
      ],
      [
        "said",
        "Verb",
        "noun clause کے اندر فعل"
      ],
      [
        "surprised everyone",
        "Predicate",
        "noun clause کے بارے میں خبر"
      ]
    ],
    "quiz": [
      {
        "q": "Find the noun clause: 'I know that he is honest.'",
        "options": [
          "I know",
          "that he is honest",
          "he is"
        ],
        "answer": 1,
        "why": "That he is honest is the object of know."
      },
      {
        "q": "What role can a noun clause perform?",
        "options": [
          "Subject or object",
          "Only adjective modifier",
          "Only punctuation mark"
        ],
        "answer": 0,
        "why": "A noun clause can function as a subject, object, or complement."
      }
    ]
  },
  {
    "id": "sentence-types-simple-compound-complex",
    "title": "Simple, Compound and Complex Sentences",
    "subtitle": "Distinguishing sentence structures",
    "urdu": "Simple sentence میں ایک independent clause ہوتا ہے۔ Compound sentence میں دو یا زیادہ independent clauses ہوتے ہیں، جبکہ complex sentence میں ایک independent اور کم از کم ایک dependent clause ہوتا ہے۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "Classify sentences by their clause structure: simple has one independent clause; compound joins independent clauses; complex combines an independent clause with at least one dependent clause.",
    "example": "The bell rang. / The bell rang, and the students left. / When the bell rang, the students left.",
    "breakdown": [
      [
        "The bell rang.",
        "Simple",
        "ایک independent clause"
      ],
      [
        "The bell rang, and the students left.",
        "Compound",
        "دو independent clauses"
      ],
      [
        "When the bell rang, the students left.",
        "Complex",
        "ایک dependent اور ایک independent clause"
      ]
    ],
    "quiz": [
      [
        "Which sentence is compound?",
        [
          "I smiled.",
          "I smiled because I was happy.",
          "I smiled, and she waved."
        ],
        2,
        "It joins two independent clauses with and."
      ],
      [
        "Which sentence is complex?",
        [
          "After the rain stopped, we went out.",
          "The rain stopped.",
          "The rain stopped, and the sun appeared."
        ],
        0,
        "After the rain stopped is dependent; we went out is independent."
      ]
    ]
  },
  {
    "id": "more-about-noun-clauses",
    "title": "More About Noun Clauses",
    "subtitle": "Functions, introductions and punctuation",
    "urdu": "Noun clause subject، object، subject complement یا prepositional object بن سکتا ہے۔ یہ that، whether، if اور wh-words جیسے what، who، where، why سے شروع ہو سکتا ہے۔ indirect question میں عام statement word order استعمال ہوتا ہے۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "Noun clauses function as subjects, objects, complements, or objects of prepositions. They are introduced by that, whether, if, and wh-words; embedded questions use statement word order.",
    "example": "What you decide is important. / I wonder where she lives. / The truth is that we need help.",
    "breakdown": [
      [
        "What you decide",
        "Noun clause / subject",
        "پورے جملے کا subject"
      ],
      [
        "where she lives",
        "Embedded question",
        "statement word order"
      ],
      [
        "that we need help",
        "Noun clause / complement",
        "truth کی وضاحت"
      ]
    ],
    "quiz": [
      [
        "Choose the correct embedded question.",
        [
          "I know where does he live.",
          "I know where he lives.",
          "I know where lives he."
        ],
        1,
        "Embedded questions use subject before verb."
      ],
      [
        "In 'What she said surprised me', the noun clause is:",
        [
          "What she said",
          "surprised me",
          "me"
        ],
        0,
        "The clause functions as the subject."
      ]
    ]
  },
  {
    "id": "more-about-adjective-clauses",
    "title": "More About Adjective Clauses",
    "subtitle": "Defining, non-defining and relative words",
    "urdu": "Adjective clauses کی دو اہم اقسام defining اور non-defining ہیں۔ Defining clause ضروری شناخت دیتا ہے اور عموماً commas کے بغیر آتا ہے۔ Non-defining clause اضافی معلومات دیتا ہے اور commas سے الگ ہوتا ہے۔ who لوگوں، which چیزوں، whose ملکیت، اور that defining clauses میں استعمال ہو سکتا ہے۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "Adjective clauses may be defining (essential information) or non-defining (extra information). Relative pronouns include who, whom, whose, which, and that; that is generally not used in non-defining clauses.",
    "example": "The student who studies regularly improves. / My car, which I bought last year, is reliable.",
    "breakdown": [
      [
        "who studies regularly",
        "Defining adjective clause",
        "ضروری شناخت"
      ],
      [
        "which I bought last year",
        "Non-defining adjective clause",
        "اضافی معلومات، commas کے ساتھ"
      ],
      [
        "whose",
        "Possessive relative pronoun",
        "ملکیت ظاہر کرتا ہے"
      ]
    ],
    "quiz": [
      [
        "Which is correctly punctuated?",
        [
          "My brother who lives in Lahore, is a doctor.",
          "My brother, who lives in Lahore, is a doctor.",
          "My brother who lives in Lahore is, a doctor."
        ],
        1,
        "A non-defining clause is enclosed by commas."
      ],
      [
        "Which relative word shows possession?",
        [
          "whose",
          "which",
          "where"
        ],
        0,
        "Whose indicates possession."
      ]
    ]
  },
  {
    "id": "more-about-adverb-clauses",
    "title": "More About Adverb Clauses",
    "subtitle": "Meaning, position and punctuation",
    "urdu": "Adverb clause dependent clause ہوتا ہے جو وقت، جگہ، مقصد، وجہ، شرط، نتیجہ، موازنہ یا رعایت ظاہر کرتا ہے۔ جب یہ جملے کے شروع میں آئے تو عموماً اس کے بعد comma لگتا ہے؛ آخر میں آئے تو اکثر comma نہیں لگتا۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "Adverb clauses are dependent clauses that modify a verb or whole clause by expressing time, place, purpose, reason, condition, result, comparison, or concession. An introductory adverb clause is usually followed by a comma.",
    "example": "Although it was late, we continued because we had work to finish.",
    "breakdown": [
      [
        "Although it was late",
        "Adverb clause of concession",
        "رعایت یا مخالفت"
      ],
      [
        "because we had work to finish",
        "Adverb clause of reason",
        "وجہ"
      ],
      [
        "introductory clause + comma",
        "Punctuation",
        "شروع میں آنے پر comma"
      ]
    ],
    "quiz": [
      [
        "Which punctuation is usual when an adverb clause begins the sentence?",
        [
          "A comma after the clause",
          "A semicolon inside the clause",
          "No punctuation ever"
        ],
        0,
        "An introductory dependent clause is normally followed by a comma."
      ],
      [
        "An adverb clause is:",
        [
          "A dependent clause modifying a verb or clause",
          "Always an independent clause",
          "A phrase without a verb"
        ],
        0,
        "It contains a subject and verb and functions adverbially."
      ]
    ]
  },
  {
    "id": "adverb-clauses-of-time",
    "title": "Adverb Clauses of Time",
    "subtitle": "When an action happens",
    "urdu": "Adverb clause of time بتاتا ہے کہ کام کب ہوتا ہے۔ عام subordinating conjunctions میں when، while، before، after، until، as soon as، since اور once شامل ہیں۔ مستقبل کے معنی میں time clause کے اندر عموماً will کے بجائے present simple استعمال ہوتا ہے۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A time adverb clause tells when an action happens. Common subordinators include when, while, before, after, until, as soon as, since, and once. Use a present form in a future time clause rather than will.",
    "example": "When the lesson ends, we will practise.",
    "breakdown": [
      [
        "When the lesson ends",
        "Time clause",
        "کب مشق کریں گے؟"
      ],
      [
        "when / before / after",
        "Time conjunctions",
        "وقت کا تعلق"
      ],
      [
        "will practise",
        "Main clause",
        "مستقبل کا عمل"
      ]
    ],
    "quiz": [
      [
        "Choose the correct sentence.",
        [
          "When he will arrive, call me.",
          "When he arrives, call me.",
          "When he arrive, call me."
        ],
        1,
        "Present simple is commonly used in future time clauses."
      ],
      [
        "Which conjunction introduces time?",
        [
          "although",
          "because",
          "until"
        ],
        2,
        "Until introduces a time limit."
      ]
    ]
  },
  {
    "id": "adverb-clauses-of-place",
    "title": "Adverb Clauses of Place",
    "subtitle": "Where an action happens",
    "urdu": "Adverb clause of place بتاتا ہے کہ کام کہاں ہوتا ہے۔ عام الفاظ where اور wherever ہیں۔ یہ clauses اکثر verb یا main clause کی جگہ یا حدود واضح کرتے ہیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A place adverb clause tells where an action occurs or applies. It is commonly introduced by where or wherever.",
    "example": "You may sit wherever you feel comfortable.",
    "breakdown": [
      [
        "wherever you feel comfortable",
        "Place clause",
        "کہاں بیٹھ سکتے ہیں؟"
      ],
      [
        "where / wherever",
        "Subordinators",
        "جگہ ظاہر کرتے ہیں"
      ],
      [
        "You may sit",
        "Main clause",
        "بنیادی بات"
      ]
    ],
    "quiz": [
      [
        "Which word commonly introduces a place clause?",
        [
          "wherever",
          "because",
          "unless"
        ],
        0,
        "Wherever introduces a place clause."
      ],
      [
        "In 'Stay where you are', the clause tells:",
        [
          "When to stay",
          "Where to stay",
          "Why to stay"
        ],
        1,
        "Where you are identifies the place."
      ]
    ]
  },
  {
    "id": "adverb-clauses-of-purpose",
    "title": "Adverb Clauses of Purpose",
    "subtitle": "Explaining the aim of an action",
    "urdu": "Adverb clause of purpose کسی عمل کا مقصد بتاتا ہے۔ عام الفاظ so that اور in order that ہیں۔ مقصد کے clause میں can، could، may یا might جیسے modal verbs آ سکتے ہیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A purpose adverb clause explains the aim of an action and is often introduced by so that or in order that. It commonly uses a modal such as can, could, may, or might.",
    "example": "She spoke slowly so that everyone could understand.",
    "breakdown": [
      [
        "so that everyone could understand",
        "Purpose clause",
        "مقصد واضح کرتا ہے"
      ],
      [
        "could understand",
        "Modal + verb",
        "ممکنہ مقصد"
      ],
      [
        "She spoke slowly",
        "Main clause",
        "عمل"
      ]
    ],
    "quiz": [
      [
        "Which conjunction introduces purpose?",
        [
          "so that",
          "although",
          "unless"
        ],
        0,
        "So that introduces the intended aim."
      ],
      [
        "Choose the purpose sentence.",
        [
          "He left because he was tired.",
          "He whispered so that the baby would not wake.",
          "He stayed although it rained."
        ],
        1,
        "The clause gives the purpose of whispering."
      ]
    ]
  },
  {
    "id": "adverb-clauses-of-cause-reason",
    "title": "Adverb Clauses of Cause or Reason",
    "subtitle": "Explaining why something happens",
    "urdu": "Adverb clause of cause or reason کسی کام کی وجہ بتاتا ہے۔ عام subordinators because، since اور as ہیں۔ Because عام طور پر واضح وجہ کے لیے استعمال ہوتا ہے؛ since اور as اکثر معلوم یا پس منظر کی وجہ دیتے ہیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A cause or reason adverb clause explains why something happens. Common subordinators are because, since, and as. Because often introduces a direct reason; since and as can introduce an already-known or background reason.",
    "example": "We stayed indoors because the storm was severe.",
    "breakdown": [
      [
        "because the storm was severe",
        "Reason clause",
        "کیوں اندر رہے؟"
      ],
      [
        "because / since / as",
        "Subordinators",
        "وجہ ظاہر کرتے ہیں"
      ],
      [
        "We stayed indoors",
        "Main clause",
        "نتیجہ خیز عمل"
      ]
    ],
    "quiz": [
      [
        "Choose the conjunction of reason.",
        [
          "because",
          "wherever",
          "unless"
        ],
        0,
        "Because introduces a reason."
      ],
      [
        "In 'Since it was raining, we took a taxi', the clause gives:",
        [
          "A condition",
          "A reason",
          "A comparison"
        ],
        1,
        "Since introduces the reason for taking a taxi."
      ]
    ]
  },
  {
    "id": "adverb-clauses-of-condition",
    "title": "Adverb Clauses of Condition",
    "subtitle": "Stating what must happen first",
    "urdu": "Adverb clause of condition کسی عمل کے لیے شرط بتاتا ہے۔ عام الفاظ if، unless، provided that، as long as اور in case ہیں۔ Future condition clause میں عموماً if کے بعد will نہیں آتا۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A condition adverb clause states the condition under which something happens. Common subordinators include if, unless, provided that, as long as, and in case. Use a present form in ordinary future condition clauses.",
    "example": "If you revise, you will improve.",
    "breakdown": [
      [
        "If you revise",
        "Condition clause",
        "شرط"
      ],
      [
        "you will improve",
        "Main clause",
        "نتیجہ"
      ],
      [
        "unless",
        "Negative condition",
        "if...not کے معنی"
      ]
    ],
    "quiz": [
      [
        "Choose the correct future condition.",
        [
          "If it will rain, we will stay.",
          "If it rains, we will stay.",
          "If it rain, we will stay."
        ],
        1,
        "The if-clause normally uses present simple for a future condition."
      ],
      [
        "Unless usually means:",
        [
          "if not",
          "because",
          "at the time"
        ],
        0,
        "Unless introduces a negative condition."
      ]
    ]
  },
  {
    "id": "adverb-clauses-of-result-consequence",
    "title": "Adverb Clauses of Result and Consequence",
    "subtitle": "Showing an outcome",
    "urdu": "Adverb clause of result یا consequence کسی عمل کا نتیجہ ظاہر کرتا ہے۔ Common patterns میں so...that اور such...that شامل ہیں۔ So کے بعد adjective یا adverb، جبکہ such کے بعد عموماً noun phrase آتا ہے۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "Result clauses show the consequence of an action or quality. Common patterns are so + adjective/adverb + that and such + noun phrase + that.",
    "example": "The road was so slippery that several cars stopped.",
    "breakdown": [
      [
        "so slippery",
        "So + adjective",
        "شدت ظاہر کرتا ہے"
      ],
      [
        "that several cars stopped",
        "Result clause",
        "نتیجہ"
      ],
      [
        "such a difficult task that...",
        "Such + noun phrase",
        "متبادل ساخت"
      ]
    ],
    "quiz": [
      [
        "Choose the correct pattern.",
        [
          "so tired that",
          "so that tired",
          "such tired so"
        ],
        0,
        "So is followed by an adjective and then that-clause."
      ],
      [
        "Which sentence shows result?",
        [
          "He left so early that nobody saw him.",
          "He left before sunrise.",
          "He left because he was tired."
        ],
        0,
        "The that-clause gives the consequence of leaving early."
      ]
    ]
  },
  {
    "id": "adverb-clauses-of-comparison",
    "title": "Adverb Clauses of Comparison",
    "subtitle": "Comparing actions or qualities",
    "urdu": "Adverb clause of comparison کسی عمل یا کیفیت کا موازنہ کرتا ہے۔ عام ساختیں than، as...as، not so...as اور as if/as though ہیں۔ فعل یا auxiliary کی تکرار سے بچنے کے لیے بعض اوقات مختصر clause استعمال ہوتا ہے۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "Comparison adverb clauses compare actions or qualities. Common patterns include than, as...as, not so...as, and as if/as though.",
    "example": "She runs faster than I do. / He talks as if he knew everything.",
    "breakdown": [
      [
        "than I do",
        "Comparison clause",
        "دو اعمال کا موازنہ"
      ],
      [
        "as...as",
        "Equal comparison",
        "برابری"
      ],
      [
        "as if he knew everything",
        "Manner / supposition",
        "جیسے اسے سب معلوم ہو"
      ]
    ],
    "quiz": [
      [
        "Complete: 'She is as tall ___ her sister.'",
        [
          "as",
          "than",
          "that"
        ],
        0,
        "The equal comparison pattern is as...as."
      ],
      [
        "Which word commonly introduces comparison?",
        [
          "than",
          "unless",
          "because"
        ],
        0,
        "Than introduces a comparative clause."
      ]
    ]
  },
  {
    "id": "adverb-clauses-of-supposition-concession",
    "title": "Adverb Clauses of Supposition or Concession",
    "subtitle": "Imagined situations and contrast",
    "urdu": "Supposition میں as if، as though یا even if فرضی یا غیر یقینی صورت ظاہر کرتے ہیں۔ Concession میں although، though، even though، whereas یا while ایسی بات بتاتے ہیں جو main clause کے باوجود درست رہتی ہے۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "Supposition clauses express an imagined or uncertain situation, often with as if or as though. Concession clauses express contrast or an unexpected fact, often with although, though, even though, or even if.",
    "example": "He talks as though he knew the answer. / Although it was cold, they went swimming.",
    "breakdown": [
      [
        "as though he knew the answer",
        "Supposition clause",
        "فرضی تاثر"
      ],
      [
        "Although it was cold",
        "Concession clause",
        "مخالفت کے باوجود"
      ],
      [
        "even if",
        "Concessive condition",
        "چاہے ایسا ہو"
      ]
    ],
    "quiz": [
      [
        "Which conjunction commonly introduces concession?",
        [
          "although",
          "because",
          "where"
        ],
        0,
        "Although introduces a contrast or concession."
      ],
      [
        "Which phrase often introduces supposition?",
        [
          "as if",
          "so that",
          "until"
        ],
        0,
        "As if introduces an imagined comparison or supposition."
      ]
    ]
  },
  {
    "id": "analysis-of-complex-sentences",
    "title": "Analysis of Complex Sentences",
    "subtitle": "Clause analysis: main and subordinate clauses",
    "urdu": "Complex sentence میں ایک independent (main) clause اور کم از کم ایک dependent (subordinate) clause ہوتا ہے۔ تجزیے میں ہر clause کی حد، subject، verb اور function پہچانیں۔ دیکھیں کہ subordinate clause noun، adjective یا adverb کا کام کر رہا ہے۔",
    "level": "Advanced",
    "duration": "11 min",
    "rule": "To analyse a complex sentence, identify the main clause and every subordinate clause. Mark each clause's subject and verb, then classify its function: noun, adjective (relative), or adverb. Also note the subordinating word and the relationship it expresses.",
    "example": "When the rain stopped, the children who were waiting outside ran to the playground because the sun had appeared.",
    "breakdown": [
      [
        "When the rain stopped",
        "Adverb clause of time",
        "بتاتا ہے بچے کب بھاگے؛ subordinate clause"
      ],
      [
        "the children ran to the playground",
        "Main / independent clause",
        "بنیادی مکمل خیال"
      ],
      [
        "who were waiting outside",
        "Adjective clause",
        "children کی وضاحت کرتا ہے"
      ],
      [
        "because the sun had appeared",
        "Adverb clause of reason",
        "بھاگنے کی وجہ بتاتا ہے"
      ]
    ],
    "quiz": [
      {
        "q": "In 'Although he was tired, he finished the work', which is the main clause?",
        "options": [
          "Although he was tired",
          "he finished the work",
          "Although he"
        ],
        "answer": 1,
        "why": "He finished the work can stand alone as a complete independent clause."
      },
      {
        "q": "In 'The book that you gave me is useful', what is 'that you gave me'?",
        "options": [
          "Noun clause",
          "Adjective clause",
          "Adverb clause"
        ],
        "answer": 1,
        "why": "It modifies the noun book and identifies which book."
      },
      {
        "q": "In 'I know where she lives', what is 'where she lives'?",
        "options": [
          "Noun clause",
          "Adjective clause",
          "Adverb clause of place"
        ],
        "answer": 0,
        "why": "The clause is the object of know, so it functions as a noun."
      }
    ]
  },
  {
    "id": "analysis-of-compound-sentences",
    "title": "Analysis of Compound Sentences",
    "subtitle": "Clause analysis: coordinating independent clauses",
    "urdu": "Compound sentence میں دو یا زیادہ independent clauses ہوتے ہیں۔ ہر clause کا اپنا subject اور verb ہوتا ہے اور clauses عموماً coordinating conjunction (for, and, nor, but, or, yet, so) یا semicolon سے جڑتے ہیں۔ تجزیے میں ہر independent clause الگ کریں اور رابطے کا طریقہ بتائیں۔",
    "level": "Advanced",
    "duration": "10 min",
    "rule": "To analyse a compound sentence, separate its independent clauses, identify the subject and predicate in each, and explain how they are joined: by a coordinating conjunction (FANBOYS), a semicolon, or a suitable conjunctive adverb with correct punctuation.",
    "example": "The sky grew dark, and the wind began to blow; soon, the rain started.",
    "breakdown": [
      [
        "The sky grew dark",
        "Independent clause 1",
        "Subject: the sky; verb: grew; complement: dark"
      ],
      [
        "and",
        "Coordinating conjunction",
        "دونوں independent clauses کو جوڑتا ہے"
      ],
      [
        "the wind began to blow",
        "Independent clause 2",
        "Subject: the wind; verb phrase: began to blow"
      ],
      [
        "soon, the rain started",
        "Independent clause 3",
        "Subject: the rain; verb: started؛ semicolon سے پہلے والے clause سے جڑا"
      ]
    ],
    "quiz": [
      {
        "q": "How many independent clauses are in 'Mina cooked dinner, and Ali washed the dishes'?",
        "options": [
          "One",
          "Two",
          "Three"
        ],
        "answer": 1,
        "why": "Mina cooked dinner and Ali washed the dishes can each stand alone."
      },
      {
        "q": "Which word joins the clauses in 'I called, but nobody answered'?",
        "options": [
          "I",
          "but",
          "answered"
        ],
        "answer": 1,
        "why": "But is the coordinating conjunction joining the two independent clauses."
      },
      {
        "q": "Which punctuation can join closely related independent clauses without a coordinating conjunction?",
        "options": [
          "A semicolon",
          "An apostrophe",
          "A hyphen"
        ],
        "answer": 0,
        "why": "A semicolon can join two closely related independent clauses."
      }
    ]
  },
  {
    "id": "transformation-of-sentences",
    "title": "Transformation of Sentences",
    "subtitle": "Changing sentence structure without changing meaning",
    "urdu": "Sentence transformation میں جملے کی ساخت یا انداز بدلا جاتا ہے لیکن بنیادی مطلب برقرار رہتا ہے۔ تبدیلی کرتے وقت tense، subject، verb اور اصل مفہوم کا خیال رکھیں۔",
    "level": "Advanced",
    "duration": "10 min",
    "rule": "Sentence transformation changes the grammatical form or structure of a sentence while preserving its essential meaning. Common transformations include changing degrees of comparison, voice, polarity, and sentence types.",
    "example": "Though he is poor, he is honest. → In spite of his poverty, he is honest.",
    "breakdown": [
      [
        "Though he is poor",
        "Adverb clause of concession",
        "اصل جملے میں رعایت کا مفہوم"
      ],
      [
        "In spite of his poverty",
        "Prepositional phrase",
        "اسی مفہوم کو phrase سے ظاہر کیا گیا"
      ],
      [
        "he is honest",
        "Main clause",
        "بنیادی مطلب برقرار ہے"
      ]
    ],
    "quiz": [
      {
        "q": "What must usually remain unchanged in a sentence transformation?",
        "options": [
          "The original meaning",
          "The number of words",
          "The punctuation only"
        ],
        "answer": 0,
        "why": "A correct transformation changes form but preserves the essential meaning."
      },
      {
        "q": "Which expression can replace 'although' in many transformations?",
        "options": [
          "In spite of",
          "Because",
          "So that"
        ],
        "answer": 0,
        "why": "Although + clause can often be changed to in spite of + noun or gerund phrase."
      }
    ]
  },
  {
    "id": "sentences-containing-adverb-too",
    "title": "Sentences Containing the Adverb 'Too'",
    "subtitle": "Transforming too...to into so...that",
    "urdu": "Too کا مطلب ضرورت سے زیادہ ہوتا ہے۔ too + adjective/adverb + to کے جملے کو اکثر so + adjective/adverb + that + cannot/could not میں بدلا جا سکتا ہے۔",
    "level": "Advanced",
    "duration": "8 min",
    "rule": "A sentence with too...to can often be transformed into so...that...cannot/could not. Keep the tense and meaning consistent. Example: 'He is too weak to walk' becomes 'He is so weak that he cannot walk.'",
    "example": "The box is too heavy for me to lift. → The box is so heavy that I cannot lift it.",
    "breakdown": [
      [
        "too heavy",
        "Too + adjective",
        "شدت ضرورت سے زیادہ ہے"
      ],
      [
        "for me to lift",
        "Infinitive phrase",
        "کام کرنے والے شخص کی نشاندہی"
      ],
      [
        "so heavy that I cannot lift it",
        "So...that construction",
        "ناممکن ہونے کا مفہوم واضح کیا گیا"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct transformation: 'She is too young to drive.'",
        "options": [
          "She is so young that she cannot drive.",
          "She is so young that she can drive.",
          "She is too young that she drives."
        ],
        "answer": 0,
        "why": "Too young to drive means she is so young that she cannot drive."
      },
      {
        "q": "Which word commonly follows 'too + adjective' in this pattern?",
        "options": [
          "to + verb",
          "that + noun",
          "for + past tense"
        ],
        "answer": 0,
        "why": "The usual pattern is too + adjective + to-infinitive."
      }
    ]
  },
  {
    "id": "interchange-degrees-of-comparison",
    "title": "Interchange of the Degrees of Comparison",
    "subtitle": "Positive, comparative and superlative forms",
    "urdu": "Adjective کے positive، comparative اور superlative درجوں کو معنی برقرار رکھتے ہوئے بدلا جا سکتا ہے۔ تبدیلی میں than any other، one of the، as...as اور not so...as جیسے سانچوں کا درست استعمال کریں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "Degrees of comparison can be interchanged while preserving meaning. A superlative such as 'the tallest' can become 'taller than any other' or 'no other...as tall as'. For a group, 'one of the tallest' becomes 'among those that are taller than most'.",
    "example": "Ali is the tallest boy in the class. → Ali is taller than any other boy in the class. → No other boy in the class is as tall as Ali.",
    "breakdown": [
      [
        "the tallest",
        "Superlative degree",
        "گروہ میں سب سے بلند"
      ],
      [
        "taller than any other boy",
        "Comparative degree",
        "ہر دوسرے لڑکے سے بلند"
      ],
      [
        "No other boy...as tall as Ali",
        "Positive degree",
        "کسی دوسرے لڑکے کے برابر بلند نہیں"
      ]
    ],
    "quiz": [
      {
        "q": "'Sara is wiser than any other girl in the group' can be changed to:",
        "options": [
          "No other girl in the group is as wise as Sara.",
          "Sara is the least wise girl.",
          "Every girl is wiser than Sara."
        ],
        "answer": 0,
        "why": "The positive form uses 'No other...as...as'."
      },
      {
        "q": "Which degree uses 'more...than' or '-er than'?",
        "options": [
          "Positive",
          "Comparative",
          "Superlative"
        ],
        "answer": 1,
        "why": "The comparative degree compares two people or things."
      }
    ]
  },
  {
    "id": "interchange-active-passive",
    "title": "Interchange of Active and Passive Voice",
    "subtitle": "Changing the focus while keeping tense",
    "urdu": "Active voice میں subject کام کرتا ہے، جبکہ passive voice میں object کو subject کی جگہ لایا جاتا ہے۔ Passive بناتے وقت مناسب helping verb اور verb کی third form استعمال کریں؛ tense برقرار رکھیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "To change active into passive, make the object the new subject, use the correct form of be + past participle, and add 'by + agent' when needed. Keep the tense unchanged. Only verbs that take an object can normally form a passive.",
    "example": "The teacher praised the student. → The student was praised by the teacher.",
    "breakdown": [
      [
        "The teacher",
        "Active subject / agent",
        "کام کرنے والا"
      ],
      [
        "praised",
        "Simple past active verb",
        "فعل ماضی"
      ],
      [
        "The student",
        "Passive subject",
        "Active object کو subject بنایا"
      ],
      [
        "was praised",
        "Simple past passive",
        "was + past participle"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the passive form of 'They are cleaning the room.'",
        "options": [
          "The room is being cleaned by them.",
          "The room was cleaned by them.",
          "The room has cleaned them."
        ],
        "answer": 0,
        "why": "Present continuous passive uses am/is/are + being + past participle."
      },
      {
        "q": "What happens to the active object in a standard passive transformation?",
        "options": [
          "It becomes the passive subject",
          "It disappears in every case",
          "It becomes the main verb"
        ],
        "answer": 0,
        "why": "The active object normally moves to subject position."
      }
    ]
  },
  {
    "id": "interchange-affirmative-negative",
    "title": "Interchange of Affirmative and Negative Sentences",
    "subtitle": "Changing polarity without changing meaning",
    "urdu": "Affirmative جملے کو negative اور negative کو affirmative بناتے وقت مفہوم وہی رکھیں۔ Often، always، everyone، only، must وغیرہ کے ساتھ مناسب متبادل ساخت استعمال کریں؛ صرف not لگانا کافی نہیں ہوتا۔",
    "level": "Advanced",
    "duration": "8 min",
    "rule": "An affirmative sentence can sometimes be changed into a negative sentence, and vice versa, without changing its meaning by using an equivalent expression. For example, 'He is always punctual' may become 'He is never late.' Avoid changing the intended meaning.",
    "example": "Only a brave person can do this. → None but a brave person can do this.",
    "breakdown": [
      [
        "Only",
        "Restrictive adverb",
        "صرف کے معنی دیتا ہے"
      ],
      [
        "None but",
        "Negative equivalent",
        "اسی محدود معنی کو ظاہر کرتا ہے"
      ],
      [
        "a brave person can do this",
        "Main clause",
        "اصل مفہوم برقرار"
      ]
    ],
    "quiz": [
      {
        "q": "Which is a meaning-preserving negative form of 'Everyone likes kindness'?",
        "options": [
          "No one dislikes kindness.",
          "No one likes kindness.",
          "Everyone hates kindness."
        ],
        "answer": 0,
        "why": "No one dislikes kindness expresses the same general positive idea."
      },
      {
        "q": "'Only the wise can understand it' can become:",
        "options": [
          "None but the wise can understand it.",
          "Nobody can understand it.",
          "The wise cannot understand it."
        ],
        "answer": 0,
        "why": "'None but' is an equivalent negative expression for 'only'."
      }
    ]
  },
  {
    "id": "interchange-interrogative-assertive",
    "title": "Interchange of Interrogative and Assertive Sentences",
    "subtitle": "Questions and statements with equivalent meaning",
    "urdu": "Interrogative sentence سوال کرتا ہے جبکہ assertive sentence بیان کرتا ہے۔ Rhetorical question کو assertive جملے میں بدلتے وقت سوال کا پوشیدہ مطلب بیان کریں اور مناسب punctuation استعمال کریں۔",
    "level": "Advanced",
    "duration": "8 min",
    "rule": "A rhetorical interrogative can be transformed into an assertive sentence by stating its implied meaning. A question such as 'Who does not love freedom?' means 'Everyone loves freedom.' Ordinary information questions do not always have a direct assertive equivalent.",
    "example": "Who does not wish to be happy? → Everyone wishes to be happy.",
    "breakdown": [
      [
        "Who does not wish...?",
        "Rhetorical interrogative",
        "سوال کی صورت میں زور دیا گیا"
      ],
      [
        "Everyone wishes...",
        "Assertive sentence",
        "پوشیدہ مثبت مطلب بیان کیا"
      ]
    ],
    "quiz": [
      {
        "q": "'Who can deny the truth?' is closest in meaning to:",
        "options": [
          "No one can deny the truth.",
          "Everyone denies the truth.",
          "Can truth deny anyone?"
        ],
        "answer": 0,
        "why": "The rhetorical question implies that nobody can deny the truth."
      },
      {
        "q": "What punctuation usually ends an assertive sentence?",
        "options": [
          "Question mark",
          "Full stop",
          "Exclamation mark"
        ],
        "answer": 1,
        "why": "An ordinary assertive statement generally ends with a full stop."
      }
    ]
  },
  {
    "id": "interchange-exclamatory-assertive",
    "title": "Interchange of Exclamatory and Assertive Sentences",
    "subtitle": "Expressing strong feeling as a statement",
    "urdu": "Exclamatory sentence جذبات یا حیرت ظاہر کرتا ہے۔ اسے assertive میں بدلتے وقت What a یا How کے بجائے جملے کا اصل مطلب بیان کریں اور exclamation mark کو full stop سے بدلیں۔",
    "level": "Advanced",
    "duration": "8 min",
    "rule": "An exclamatory sentence can be changed into an assertive sentence by expressing the same feeling as a statement. 'What a beautiful day!' becomes 'It is a very beautiful day.' Preserve the intensity with words such as very, greatly, or indeed where appropriate.",
    "example": "How clever she is! → She is very clever.",
    "breakdown": [
      [
        "How clever",
        "Exclamatory structure",
        "شدت اور تعریف ظاہر کرتا ہے"
      ],
      [
        "She is very clever",
        "Assertive structure",
        "وہی تعریف بیان کی گئی"
      ],
      [
        "! → .",
        "Punctuation change",
        "بیان کے آخر میں full stop"
      ]
    ],
    "quiz": [
      {
        "q": "Change 'What a lovely flower it is!' into an assertive sentence.",
        "options": [
          "It is a very lovely flower.",
          "Is it a lovely flower?",
          "It is not a flower."
        ],
        "answer": 0,
        "why": "The exclamation becomes a statement while retaining the strong positive meaning."
      },
      {
        "q": "Which punctuation normally ends an assertive sentence?",
        "options": [
          "!",
          "?",
          "."
        ],
        "answer": 2,
        "why": "An assertive sentence normally ends with a full stop."
      }
    ]
  },
  {
    "id": "interchange-parts-of-speech",
    "title": "Interchange of One Part of Speech for Another",
    "subtitle": "Changing word forms while preserving meaning",
    "urdu": "ایک ہی خیال کو مختلف parts of speech کے ذریعے بیان کیا جا سکتا ہے۔ مثلاً adjective کو noun یا verb کو noun میں بدلا جا سکتا ہے۔ تبدیلی کے بعد sentence structure اور ضروری prepositions درست رکھیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A sentence can often be rewritten by replacing a word with another part of speech derived from the same word family. Adjust the surrounding grammar so that the meaning remains the same: 'He is a careful driver' can become 'He drives carefully.'",
    "example": "She is a beautiful singer. → She sings beautifully.",
    "breakdown": [
      [
        "beautiful",
        "Adjective",
        "singer کی خوبی بتاتا ہے"
      ],
      [
        "beautifully",
        "Adverb",
        "sings کے طریقے کو بیان کرتا ہے"
      ],
      [
        "singer → sings",
        "Noun → Verb",
        "جملے کی ساخت بدلی مگر مطلب برقرار"
      ]
    ],
    "quiz": [
      {
        "q": "In 'He is a quick runner' → 'He runs quickly', which change occurs?",
        "options": [
          "Adjective to adverb",
          "Noun to pronoun",
          "Verb to preposition"
        ],
        "answer": 0,
        "why": "Quick is an adjective; quickly is an adverb modifying runs."
      },
      {
        "q": "Choose the correct transformation: 'She gave a careful answer.'",
        "options": [
          "She answered carefully.",
          "She careful answered.",
          "She answered carefulness."
        ],
        "answer": 0,
        "why": "Careful (adjective) becomes carefully (adverb) to modify answered."
      }
    ]
  },
  {
    "id": "simple-to-compound-sentences",
    "title": "Conversion of Simple Sentences into Compound Sentences",
    "subtitle": "Changing a phrase into coordinated clauses",
    "urdu": "Simple sentence میں ایک ہی principal clause ہوتا ہے، جبکہ compound sentence میں دو یا زیادہ independent clauses ہوتے ہیں۔ Simple کو compound بناتے وقت phrase کو مناسب مکمل clause میں بدلیں اور and, but, or, so وغیرہ استعمال کریں۔ اصل مفہوم برقرار رکھیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A simple sentence can be changed into a compound sentence by expanding a phrase or participial construction into an independent clause and joining it to the other independent clause with a suitable coordinating conjunction. Preserve the original relationship and meaning.",
    "example": "In spite of his poverty, he is honest. → He is poor, but he is honest.",
    "breakdown": [
      [
        "In spite of his poverty",
        "Prepositional phrase",
        "Simple sentence میں رعایت کا مفہوم"
      ],
      [
        "He is poor",
        "Independent clause 1",
        "Phrase کو مکمل clause بنایا"
      ],
      [
        "but",
        "Coordinating conjunction",
        "تضاد ظاہر کرتا ہے"
      ],
      [
        "he is honest",
        "Independent clause 2",
        "دوسرا independent clause"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the compound form of 'Being ill, he stayed at home.'",
        "options": [
          "He was ill, so he stayed at home.",
          "Being ill at home.",
          "He stayed at home because of illness."
        ],
        "answer": 0,
        "why": "The participial phrase becomes an independent clause joined by so."
      },
      {
        "q": "Which conjunction best shows contrast in this conversion?",
        "options": [
          "and",
          "but",
          "so"
        ],
        "answer": 1,
        "why": "But joins independent clauses with contrasting ideas."
      }
    ]
  },
  {
    "id": "compound-to-simple-sentences",
    "title": "Conversion of Compound Sentences into Simple Sentences",
    "subtitle": "Combining coordinated clauses into one principal clause",
    "urdu": "Compound sentence کے دو یا زیادہ independent clauses کو simple sentence میں بدلنے کے لیے ایک clause کو phrase، participle، infinitive یا prepositional construction میں تبدیل کیا جا سکتا ہے۔ Subject اور tense کا خیال رکھیں اور معنی نہ بدلیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A compound sentence can be converted into a simple sentence by reducing one independent clause to a phrase, participial construction, infinitive, or prepositional phrase. The resulting sentence has one principal clause and retains the original meaning.",
    "example": "He finished his work, and he went home. → Having finished his work, he went home.",
    "breakdown": [
      [
        "He finished his work",
        "First independent clause",
        "پہلا کام مکمل ہونے کا بیان"
      ],
      [
        "Having finished his work",
        "Perfect participial phrase",
        "پہلے clause کو phrase میں بدلا"
      ],
      [
        "he went home",
        "Principal clause",
        "اب صرف ایک principal clause ہے"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the simple form of 'She heard the news and she became happy.'",
        "options": [
          "Hearing the news, she became happy.",
          "She heard the news, and she was happy.",
          "She was happy because she heard the news."
        ],
        "answer": 0,
        "why": "The first clause is reduced to a participial phrase, leaving one principal clause."
      },
      {
        "q": "A simple sentence has:",
        "options": [
          "Two independent clauses",
          "One principal clause",
          "Only one word"
        ],
        "answer": 1,
        "why": "A simple sentence contains one independent or principal clause, though it may have phrases."
      }
    ]
  },
  {
    "id": "simple-to-complex-sentences",
    "title": "Conversion of Simple Sentences into Complex Sentences",
    "subtitle": "Expanding phrases into subordinate clauses",
    "urdu": "Simple sentence کو complex بنانے کے لیے کسی phrase کو subordinate clause میں تبدیل کریں۔ Clause کو اس کے کام کے مطابق noun، adjective یا adverb clause بنائیں اور because, although, when, who, which, that جیسے الفاظ درست استعمال کریں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A simple sentence can be converted into a complex sentence by expanding a phrase into a subordinate clause. The subordinate clause may function as a noun, adjective, or adverb clause. Keep the relationship and meaning unchanged.",
    "example": "Despite his illness, he attended the meeting. → Although he was ill, he attended the meeting.",
    "breakdown": [
      [
        "Despite his illness",
        "Prepositional phrase",
        "Simple sentence میں concession ظاہر کرتا ہے"
      ],
      [
        "Although he was ill",
        "Adverb clause of concession",
        "Phrase کو subordinate clause میں بدلا"
      ],
      [
        "he attended the meeting",
        "Main clause",
        "مرکزی خیال برقرار"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the complex form of 'On seeing the police, the thief ran away.'",
        "options": [
          "When the thief saw the police, he ran away.",
          "The thief saw the police and ran away.",
          "Seeing the police, the thief ran away."
        ],
        "answer": 0,
        "why": "The phrase On seeing becomes the subordinate adverb clause when the thief saw."
      },
      {
        "q": "Which word can introduce a clause of concession?",
        "options": [
          "Although",
          "And",
          "Or"
        ],
        "answer": 0,
        "why": "Although introduces a subordinate clause expressing contrast or concession."
      }
    ]
  },
  {
    "id": "complex-to-simple-sentences",
    "title": "Conversion of Complex Sentences into Simple Sentences",
    "subtitle": "Reducing subordinate clauses to phrases",
    "urdu": "Complex sentence میں subordinate clause کو participial، infinitive، gerund یا prepositional phrase میں بدل کر simple sentence بنایا جا سکتا ہے۔ Main clause برقرار رکھیں اور subordinate clause کا تعلق واضح رکھیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A complex sentence can be converted into a simple sentence by reducing a subordinate clause to a phrase, such as a participial, infinitive, gerund, or prepositional phrase. The final sentence must contain only one principal clause.",
    "example": "When he saw the snake, he ran away. → Seeing the snake, he ran away.",
    "breakdown": [
      [
        "When he saw the snake",
        "Adverb clause of time",
        "وقت کا تعلق ظاہر کرتا ہے"
      ],
      [
        "Seeing the snake",
        "Present participial phrase",
        "Subordinate clause کو phrase میں بدلا"
      ],
      [
        "he ran away",
        "Principal clause",
        "بنیادی خیال برقرار"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the simple form of 'Because he was careless, he made a mistake.'",
        "options": [
          "Being careless, he made a mistake.",
          "Because he was careless, he made a mistake.",
          "He was careless, so he made a mistake."
        ],
        "answer": 0,
        "why": "The reason clause is reduced to the participial phrase Being careless."
      },
      {
        "q": "Which structure can replace a subordinate clause in a simple sentence?",
        "options": [
          "A phrase",
          "Another independent clause",
          "A question mark"
        ],
        "answer": 0,
        "why": "A phrase can express the related idea without forming another clause."
      }
    ]
  },
  {
    "id": "compound-to-complex-sentences",
    "title": "Conversion of Compound Sentences into Complex Sentences",
    "subtitle": "Replacing coordination with subordination",
    "urdu": "Compound sentence میں independent clauses کو coordinating conjunction جوڑتا ہے۔ اسے complex بنانے کے لیے ایک independent clause کو subordinate clause میں بدلیں، مثلاً because، although، when، if یا who کے ذریعے۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A compound sentence can be converted into a complex sentence by making one independent clause subordinate to the other. Choose a subordinating conjunction or relative pronoun that accurately expresses the relationship, such as cause, contrast, time, condition, or description.",
    "example": "He was ill, but he attended the meeting. → Although he was ill, he attended the meeting.",
    "breakdown": [
      [
        "He was ill",
        "Subordinate adverb clause",
        "Although کے بعد dependent بن گیا"
      ],
      [
        "Although",
        "Subordinating conjunction",
        "تضاد / رعایت ظاہر کرتا ہے"
      ],
      [
        "he attended the meeting",
        "Main clause",
        "مرکزی independent clause"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the complex form of 'Work hard, or you will fail.'",
        "options": [
          "If you do not work hard, you will fail.",
          "Work hard, and you will succeed.",
          "Work hard to avoid failure."
        ],
        "answer": 0,
        "why": "The alternative warning is expressed as a subordinate condition clause."
      },
      {
        "q": "What is the key change from compound to complex?",
        "options": [
          "One independent clause becomes subordinate",
          "All verbs are removed",
          "The sentence becomes a fragment"
        ],
        "answer": 0,
        "why": "A complex sentence has one main clause and at least one subordinate clause."
      }
    ]
  },
  {
    "id": "complex-to-compound-sentences",
    "title": "Conversion of Complex Sentences into Compound Sentences",
    "subtitle": "Replacing subordination with coordination",
    "urdu": "Complex sentence میں main clause کے ساتھ subordinate clause ہوتا ہے۔ Compound بنانے کے لیے subordinate clause کو independent clause میں بدلیں اور مناسب coordinating conjunction جیسے and, but, so, or استعمال کریں۔ اصل تعلق اور معنی برقرار رکھیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "A complex sentence can be converted into a compound sentence by turning the subordinate clause into an independent clause and joining the clauses with an appropriate coordinating conjunction. Select the conjunction to preserve cause, contrast, result, or sequence.",
    "example": "Although he was tired, he continued working. → He was tired, but he continued working.",
    "breakdown": [
      [
        "Although he was tired",
        "Adverb clause of concession",
        "Complex sentence میں dependent clause"
      ],
      [
        "He was tired",
        "Independent clause 1",
        "اب مکمل independent clause"
      ],
      [
        "but",
        "Coordinating conjunction",
        "تضاد برقرار رکھتا ہے"
      ],
      [
        "he continued working",
        "Independent clause 2",
        "دوسرا independent clause"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the compound form of 'As it was raining, we stayed indoors.'",
        "options": [
          "It was raining, so we stayed indoors.",
          "Because it rained, we stayed indoors.",
          "Staying indoors in the rain."
        ],
        "answer": 0,
        "why": "The reason clause becomes an independent clause joined by so."
      },
      {
        "q": "Which conjunction commonly expresses result in a compound sentence?",
        "options": [
          "So",
          "Although",
          "Because"
        ],
        "answer": 0,
        "why": "So coordinates two independent clauses and expresses a result."
      }
    ]
  },
  {
    "id": "synthesis-simple-sentences-into-simple",
    "title": "Synthesis: Combining Two or More Simple Sentences into One Simple Sentence",
    "subtitle": "Joining ideas with phrases and single-clause structures",
    "urdu": "Synthesis کا مطلب کئی جملوں کو ملا کر ایک جملہ بنانا ہے۔ دو یا زیادہ simple sentences کو ایک simple sentence میں بدلتے وقت participle، infinitive، prepositional phrase، apposition یا مناسب لفظ استعمال کریں۔ نئے جملے میں صرف ایک principal clause ہو اور تمام بنیادی خیالات محفوظ رہیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "To combine two or more simple sentences into one simple sentence, express related ideas through a participial phrase, infinitive phrase, prepositional phrase, apposition, or a compound element such as a shared subject or predicate. The result must contain one principal clause, not two coordinated independent clauses.",
    "example": "The sun set. The sky became dark. → The sun having set, the sky became dark.",
    "breakdown": [
      [
        "The sun set",
        "Simple sentence 1",
        "پہلا مکمل خیال"
      ],
      [
        "The sky became dark",
        "Simple sentence 2",
        "دوسرا مکمل خیال"
      ],
      [
        "The sun having set",
        "Perfect participial phrase",
        "پہلے جملے کو phrase میں بدلا"
      ],
      [
        "the sky became dark",
        "Principal clause",
        "ایک ہی principal clause باقی ہے"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the single simple sentence made from 'He saw the danger. He ran away.'",
        "options": [
          "Seeing the danger, he ran away.",
          "He saw the danger, so he ran away.",
          "He saw the danger and he ran away."
        ],
        "answer": 0,
        "why": "The first sentence becomes a participial phrase, leaving one principal clause."
      },
      {
        "q": "Which structure can help combine simple sentences into one simple sentence?",
        "options": [
          "A participial phrase",
          "Two independent clauses joined by but",
          "A question clause only"
        ],
        "answer": 0,
        "why": "A participial phrase can express one idea without creating another independent clause."
      },
      {
        "q": "How many principal clauses should the final simple sentence contain?",
        "options": [
          "One",
          "Two",
          "At least three"
        ],
        "answer": 0,
        "why": "A simple sentence has one principal or independent clause."
      }
    ]
  },
  {
    "id": "synthesis-simple-sentences-into-compound",
    "title": "Synthesis: Combining Two or More Simple Sentences into One Compound Sentence",
    "subtitle": "Joining complete ideas with coordinating conjunctions",
    "urdu": "دو یا زیادہ simple sentences کو compound sentence میں ملانے کے لیے ہر مکمل خیال کو independent clause کی صورت میں رکھیں اور انہیں and، but، or، so، yet، for یا nor جیسے coordinating conjunction سے جوڑیں۔ ضرورت کے مطابق comma لگائیں اور اصل معنی برقرار رکھیں۔",
    "level": "Advanced",
    "duration": "9 min",
    "rule": "To combine two or more simple sentences into one compound sentence, retain each complete idea as an independent clause and join the clauses with an appropriate coordinating conjunction (for, and, nor, but, or, yet, so) or suitable punctuation such as a semicolon. Use a comma before a coordinating conjunction joining independent clauses.",
    "example": "The weather was cold. We went for a walk. → The weather was cold, but we went for a walk.",
    "breakdown": [
      [
        "The weather was cold",
        "Independent clause 1",
        "Subject: the weather; predicate: was cold"
      ],
      [
        "but",
        "Coordinating conjunction",
        "تضاد ظاہر کرتا ہے"
      ],
      [
        "we went for a walk",
        "Independent clause 2",
        "Subject: we; predicate: went for a walk"
      ],
      [
        "The weather was cold, but we went for a walk.",
        "Compound sentence",
        "دو independent clauses ایک compound sentence میں جڑے"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the compound sentence made from 'It was raining. We stayed indoors.'",
        "options": [
          "It was raining, so we stayed indoors.",
          "Because it was raining, we stayed indoors.",
          "Staying indoors in the rain."
        ],
        "answer": 0,
        "why": "Both ideas remain independent clauses joined by the coordinating conjunction so."
      },
      {
        "q": "Which conjunction best joins contrasting ideas?",
        "options": [
          "but",
          "so",
          "for"
        ],
        "answer": 0,
        "why": "But expresses contrast between the two independent clauses."
      },
      {
        "q": "What punctuation is normally placed before a coordinating conjunction joining two independent clauses?",
        "options": [
          "A comma",
          "An apostrophe",
          "A hyphen"
        ],
        "answer": 0,
        "why": "Use a comma before a coordinating conjunction that joins two independent clauses."
      }
    ]
  },
  {
    "id": "sequence-of-tenses",
    "title": "The Sequence of Tenses",
    "subtitle": "Keeping verb tenses consistent in connected clauses",
    "urdu": "Sequence of Tenses سے مراد ایک ہی جملے یا بیان میں مختلف clauses کے افعال کے زمانوں کا باہمی تعلق ہے۔ عام طور پر past reporting verb کے بعد subordinate clause میں بھی past tense آتا ہے، لیکن universal truth، مستقل حقیقت یا اب بھی درست بات کے لیے present tense برقرار رہ سکتا ہے۔",
    "level": "Advanced",
    "duration": "10 min",
    "rule": "The sequence of tenses is the relationship between the tense of a verb in a main clause and the tense of a verb in a subordinate clause. When the main verb is in the past, a subordinate verb often shifts to a past form if the action is viewed from that past time. However, a general truth or a fact that is still true may remain in the present. A past perfect is used for an action completed before another past action.",
    "example": "He said that he was tired. / The teacher explained that the Earth moves around the Sun.",
    "breakdown": [
      [
        "He said",
        "Main clause: simple past",
        "Reporting verb ماضی میں ہے"
      ],
      [
        "that he was tired",
        "Subordinate noun clause: past",
        "ماضی کے reporting verb کے ساتھ tense backshift ہوا"
      ],
      [
        "The teacher explained",
        "Main clause: simple past",
        "ماضی میں وضاحت کی گئی"
      ],
      [
        "that the Earth moves around the Sun",
        "Subordinate noun clause: simple present",
        "ہمیشہ درست حقیقت ہے، اس لیے present برقرار ہے"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct sentence: 'She said that she ___ busy.'",
        "options": [
          "is",
          "was",
          "will"
        ],
        "answer": 1,
        "why": "With a past reporting verb, the present 'am/is' commonly shifts to 'was' in reported context."
      },
      {
        "q": "Which tense is normally used for a universal truth after a past reporting verb?",
        "options": [
          "Simple present",
          "Past perfect only",
          "Future continuous"
        ],
        "answer": 0,
        "why": "Universal truths generally remain in the simple present."
      },
      {
        "q": "Complete the sentence: He knew that the train ___ before he arrived.",
        "options": [
          "leaves",
          "had left",
          "will leave"
        ],
        "answer": 1,
        "why": "The train's departure happened before another past action, so past perfect is appropriate."
      }
    ]
  },
  {
    "id": "direct-and-indirect-speech",
    "title": "Direct and Indirect Speech",
    "subtitle": "Reporting statements, questions, commands and requests",
    "urdu": "Direct Speech میں بولنے والے کے اصل الفاظ quotation marks میں لکھے جاتے ہیں۔ Indirect یا Reported Speech میں بات اپنے الفاظ میں بیان کی جاتی ہے۔ تبدیلی کرتے وقت pronouns، reporting verb، tense، وقت اور جگہ کے الفاظ اور جملے کی ترتیب درست کریں۔",
    "level": "Advanced",
    "duration": "12 min",
    "rule": "Direct speech gives a speaker's exact words in quotation marks. Indirect (reported) speech reports the meaning without quoting the exact words. When the reporting verb is in the past, tenses commonly backshift (present to past, will to would, can to could), and pronouns and time/place expressions change as needed. No backshift is usually needed when the reporting verb is present or when the statement is a universal truth. Reported questions use statement word order; commands and requests commonly use tell/ask + object + to-infinitive.",
    "example": "Direct: Sara said, “I am reading now.” → Indirect: Sara said that she was reading then. / Direct: He asked, “Where do you live?” → Indirect: He asked where I lived.",
    "breakdown": [
      [
        "I am reading",
        "Present continuous",
        "Reported speech میں was reading ہو گیا"
      ],
      [
        "I → she",
        "Pronoun change",
        "بولنے والے کے مطابق ضمیر بدلا"
      ],
      [
        "now → then",
        "Time expression",
        "وقت کا لفظ بدلا"
      ],
      [
        "Where do you live?",
        "Direct question",
        "Question mark اور do-support ختم"
      ],
      [
        "where I lived",
        "Reported question",
        "Statement word order استعمال ہوا"
      ]
    ],
    "quiz": [
      {
        "q": "Change into indirect speech: He said, “I am happy.”",
        "options": [
          "He said that he was happy.",
          "He said that I am happy.",
          "He said that he is happy yesterday."
        ],
        "answer": 0,
        "why": "The pronoun changes from I to he and present am commonly backshifts to was after said."
      },
      {
        "q": "Choose the correct reported form: She asked, “Where are you going?”",
        "options": [
          "She asked where was I going.",
          "She asked where I was going.",
          "She asked where am I going."
        ],
        "answer": 1,
        "why": "Reported questions use statement word order: subject before verb."
      },
      {
        "q": "Change the command: The teacher said to the boys, “Sit down.”",
        "options": [
          "The teacher told the boys to sit down.",
          "The teacher said the boys sit down.",
          "The teacher asked that sit down."
        ],
        "answer": 0,
        "why": "Commands are commonly reported with told + object + to-infinitive."
      },
      {
        "q": "Which expression commonly changes from 'today' in direct speech to 'that day' in reported speech?",
        "options": [
          "today",
          "yesterday",
          "tomorrow"
        ],
        "answer": 0,
        "why": "Today commonly changes to that day when the reporting context is in the past."
      }
    ]
  }
,
  {
    "id": "agreement-verb-with-subject",
    "title": "Agreement of the Verb with the Subject",
    "subtitle": "Choosing a verb that agrees with its subject",
    "urdu": "Verb ہمیشہ اپنے اصل subject کے مطابق ہونا چاہیے، درمیان میں آنے والے الفاظ کے مطابق نہیں۔ Each، every، everyone اور neither جیسے الفاظ عموماً واحد فعل لیتے ہیں؛ and سے جڑے دو subjects عموماً جمع فعل لیتے ہیں۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "A verb agrees with its subject in person and number. Ignore phrases between the subject and verb. A singular subject generally takes a singular verb, while a plural subject takes a plural verb. Each, every, everyone, either, and neither are generally singular; subjects joined by and are usually plural.",
    "example": "The quality of the apples is good. / Each of the players has a uniform. / Ali and Sara are ready.",
    "breakdown": [
      [
        "quality",
        "Head noun / subject",
        "اصل subject واحد ہے"
      ],
      [
        "of the apples",
        "Prepositional phrase",
        "یہ subject کو جمع نہیں بناتا"
      ],
      [
        "is",
        "Singular verb",
        "quality کے ساتھ واحد فعل"
      ],
      [
        "Ali and Sara",
        "Compound subject",
        "دو افراد، اس لیے جمع"
      ],
      [
        "are",
        "Plural verb",
        "جمع subject کے مطابق"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct verb: The basket of oranges ___ heavy.",
        "options": [
          "are",
          "is",
          "be"
        ],
        "answer": 1,
        "why": "The subject is basket, not oranges; basket is singular."
      },
      {
        "q": "Each of the students ___ a notebook.",
        "options": [
          "have",
          "has",
          "having"
        ],
        "answer": 1,
        "why": "Each is treated as singular and takes has."
      },
      {
        "q": "My brother and sister ___ at home.",
        "options": [
          "is",
          "are",
          "was"
        ],
        "answer": 1,
        "why": "Two subjects joined by and normally take a plural verb."
      }
    ]
  },
  {
    "id": "correct-usage-nouns-pronouns",
    "title": "Correct Usage: Nouns and Pronouns",
    "subtitle": "Using noun forms and pronouns accurately",
    "urdu": "Noun اور pronoun کا درست استعمال جملے کے معنی اور ساخت کو واضح کرتا ہے۔ Countable اور uncountable nouns، possessive forms، subject اور object pronouns، اور pronoun کا اپنے antecedent سے تعلق خاص طور پر اہم ہیں۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "Use countable nouns with suitable singular or plural forms, and do not normally pluralize uncountable nouns such as advice, information, and furniture. Choose subject pronouns (I, he, she, we, they) for subjects and object pronouns (me, him, her, us, them) for objects. Make pronouns agree clearly with their antecedents.",
    "example": "She gave me some useful advice. / The children brought their books. / This is between you and me.",
    "breakdown": [
      [
        "advice",
        "Uncountable noun",
        "some advice، نہ کہ an advice"
      ],
      [
        "me",
        "Object pronoun",
        "gave کا object"
      ],
      [
        "children",
        "Plural noun",
        "اس کے مطابق their استعمال ہوا"
      ],
      [
        "you and me",
        "Object pronouns",
        "preposition between کے بعد object forms"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct phrase.",
        "options": [
          "an advice",
          "some advice",
          "many advice"
        ],
        "answer": 1,
        "why": "Advice is uncountable; use some advice or a piece of advice."
      },
      {
        "q": "The teacher spoke to Sara and ___.",
        "options": [
          "I",
          "me",
          "my"
        ],
        "answer": 1,
        "why": "The pronoun is the object of to, so use me."
      },
      {
        "q": "Every student must bring ___ own pencil.",
        "options": [
          "their",
          "them",
          "theirs"
        ],
        "answer": 0,
        "why": "Singular they is widely accepted for a person whose gender is unknown; their comes before the noun."
      }
    ]
  },
  {
    "id": "correct-usage-adjectives",
    "title": "Correct Usage: Adjectives",
    "subtitle": "Choosing and placing adjectives correctly",
    "urdu": "Adjective noun یا pronoun کی صفت، تعداد یا حالت بتاتا ہے۔ Adjective اور adverb میں فرق کریں، comparative کے ساتھ than اور superlative کے ساتھ عموماً the استعمال کریں، اور صفت کو درست noun کے ساتھ رکھیں۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "Use an adjective to describe a noun or pronoun and an adverb to modify a verb, adjective, or adverb. Use comparative forms when comparing two and superlative forms for the highest or lowest degree in a group. Avoid double comparatives and double superlatives.",
    "example": "She is a careful driver. / She drives carefully. / This is the most useful of the three books.",
    "breakdown": [
      [
        "careful",
        "Adjective",
        "driver کی وضاحت کرتا ہے"
      ],
      [
        "carefully",
        "Adverb",
        "drives کے طریقے کی وضاحت"
      ],
      [
        "more useful",
        "Comparative",
        "دو یا زیادہ چیزوں کا تقابل"
      ],
      [
        "most useful",
        "Superlative",
        "گروہ میں سب سے زیادہ مفید"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct sentence.",
        "options": [
          "He is a carefully driver.",
          "He is a careful driver.",
          "He is carefully driver."
        ],
        "answer": 1,
        "why": "Careful is an adjective describing the noun driver."
      },
      {
        "q": "Which is the correct comparative form of 'good'?",
        "options": [
          "gooder",
          "better",
          "best"
        ],
        "answer": 1,
        "why": "Better is the comparative form; best is the superlative."
      },
      {
        "q": "Choose the correct phrase.",
        "options": [
          "more easier",
          "easier",
          "most easier"
        ],
        "answer": 1,
        "why": "Do not use more with the -er comparative form."
      }
    ]
  },
  {
    "id": "correct-usage-verbs",
    "title": "Correct Usage: Verbs",
    "subtitle": "Using verb forms, auxiliaries and tenses accurately",
    "urdu": "Verb کے درست استعمال کے لیے tense، subject-verb agreement، infinitive، gerund، participle اور auxiliary کا خیال رکھیں۔ Modal کے بعد عموماً base form آتی ہے، اور do/does/did کے بعد بھی base verb استعمال ہوتا ہے۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "Use the correct tense and verb form for the context. After do, does, or did, use the base form; after a modal auxiliary, use the base form. Use a gerund after verbs and prepositions that require it, and use the past participle in perfect and passive constructions.",
    "example": "Did she go? / He can swim. / I enjoy reading. / They have finished the work.",
    "breakdown": [
      [
        "did",
        "Past auxiliary",
        "ماضی کا سوال بنانے میں مدد دیتا ہے"
      ],
      [
        "go",
        "Base form",
        "did کے بعد went نہیں آئے گا"
      ],
      [
        "can",
        "Modal auxiliary",
        "صلاحیت ظاہر کرتا ہے"
      ],
      [
        "swim",
        "Base form",
        "modal کے بعد بنیادی صورت"
      ],
      [
        "reading",
        "Gerund",
        "enjoy کے بعد -ing form"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct sentence.",
        "options": [
          "Did he went home?",
          "Did he go home?",
          "Did he goes home?"
        ],
        "answer": 1,
        "why": "After did, use the base form go."
      },
      {
        "q": "You must ___ your homework.",
        "options": [
          "to finish",
          "finish",
          "finished"
        ],
        "answer": 1,
        "why": "A modal verb is followed by the base form."
      },
      {
        "q": "She enjoys ___ novels.",
        "options": [
          "read",
          "to reading",
          "reading"
        ],
        "answer": 2,
        "why": "Enjoy is followed by a gerund."
      }
    ]
  },
  {
    "id": "correct-usage-adverbs",
    "title": "Correct Usage: Adverbs",
    "subtitle": "Using adverbs in the right form and position",
    "urdu": "Adverb فعل، صفت یا دوسرے adverb کی وضاحت کرتا ہے۔ Adjective اور adverb کی شکل میں فرق رکھیں، frequency adverbs کو عموماً main verb سے پہلے اور be کے بعد رکھیں، جبکہ enough عموماً adjective یا adverb کے بعد آتا ہے۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "Use adverbs to modify verbs, adjectives, or other adverbs. Adverbs of frequency usually come before a main verb but after forms of be. Place enough after the adjective or adverb it modifies. Distinguish hard (with effort) from hardly (almost not), and late from lately (recently).",
    "example": "She usually arrives early. / He is always polite. / The box is large enough. / They worked hard.",
    "breakdown": [
      [
        "usually",
        "Adverb of frequency",
        "main verb arrives سے پہلے"
      ],
      [
        "always",
        "Adverb of frequency",
        "verb is کے بعد"
      ],
      [
        "large enough",
        "Adjective + adverb",
        "enough صفت کے بعد"
      ],
      [
        "hard",
        "Adverb",
        "محنت سے؛ hardly کا مطلب تقریباً نہیں"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct sentence.",
        "options": [
          "She speaks English fluent.",
          "She speaks English fluently.",
          "She fluent speaks English."
        ],
        "answer": 1,
        "why": "Fluently is the adverb modifying speaks."
      },
      {
        "q": "Choose the correct position.",
        "options": [
          "He is always late.",
          "He always is late (usual neutral order).",
          "He late is always."
        ],
        "answer": 0,
        "why": "An adverb of frequency normally follows the verb be."
      },
      {
        "q": "The water is warm ___.",
        "options": [
          "enough",
          "too enough",
          "enoughly"
        ],
        "answer": 0,
        "why": "Enough follows the adjective it modifies."
      }
    ]
  },
  {
    "id": "correct-usage-conjunctions",
    "title": "Correct Usage: Conjunctions",
    "subtitle": "Joining ideas with the right conjunction",
    "urdu": "Conjunction الفاظ، phrases اور clauses کو جوڑتا ہے۔ And، but، or، so جیسے الفاظ کو معنی کے مطابق منتخب کریں۔ Although کے ساتھ but اور because کے ساتھ so کو ایک ہی ساخت میں غیر ضروری طور پر اکٹھا نہ کریں۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "Choose coordinating and subordinating conjunctions according to the logical relationship: addition, contrast, choice, reason, result, time, or condition. Do not use two conjunctions redundantly when one construction is sufficient. Keep parallel grammatical structures on both sides of a conjunction.",
    "example": "Although it was raining, we went out. / It was raining, but we went out. / She likes reading and writing.",
    "breakdown": [
      [
        "Although",
        "Subordinating conjunction",
        "رعایت یا تضاد کے ساتھ dependent clause"
      ],
      [
        "but",
        "Coordinating conjunction",
        "دو independent clauses میں تضاد"
      ],
      [
        "reading and writing",
        "Parallel gerunds",
        "دونوں طرف ایک جیسی grammatical form"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct sentence.",
        "options": [
          "Although he was tired, but he worked.",
          "Although he was tired, he worked.",
          "Although he tired, but worked."
        ],
        "answer": 1,
        "why": "Although already introduces the subordinate contrast clause; but is unnecessary here."
      },
      {
        "q": "She is interested in singing ___ dancing.",
        "options": [
          "and",
          "because",
          "although"
        ],
        "answer": 0,
        "why": "And joins two parallel activities."
      },
      {
        "q": "Choose the conjunction that introduces a condition.",
        "options": [
          "if",
          "because",
          "although"
        ],
        "answer": 0,
        "why": "If commonly introduces a conditional clause."
      }
    ]
  },
  {
    "id": "correct-order-of-words",
    "title": "Correct Usage: Order of Words",
    "subtitle": "Arranging words in natural English sentences",
    "urdu": "English میں عام خبریہ جملے کی ترتیب Subject + Verb + Object ہوتی ہے۔ Adjective عموماً noun سے پہلے، adverb مناسب مقام پر، اور سوالیہ جملے میں auxiliary subject سے پہلے آتا ہے۔ الفاظ کی غلط ترتیب معنی یا جملے کی فطری روانی بدل سکتی ہے۔",
    "level": "Intermediate",
    "duration": "9 min",
    "rule": "The usual English statement order is Subject + Verb + Object (SVO). Adjectives generally precede the nouns they modify. Place indirect objects and adverbs in natural positions, and form most questions by placing an auxiliary before the subject.",
    "example": "The children (subject) read (verb) a story (object). / Where does she live? / She bought a beautiful red dress.",
    "breakdown": [
      [
        "The children",
        "Subject",
        "جملے کا فاعل"
      ],
      [
        "read",
        "Verb",
        "عمل"
      ],
      [
        "a story",
        "Object",
        "جس پر عمل ہوا"
      ],
      [
        "Where does she live?",
        "Question order",
        "question word + auxiliary + subject + base verb"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the natural word order.",
        "options": [
          "A story the children read.",
          "The children read a story.",
          "Read the children a story (as a statement)."
        ],
        "answer": 1,
        "why": "The normal statement order is subject, verb, then object."
      },
      {
        "q": "Choose the correct question.",
        "options": [
          "Where she does live?",
          "Where does she live?",
          "Where does live she?"
        ],
        "answer": 1,
        "why": "The auxiliary does comes before the subject she, followed by the base verb live."
      },
      {
        "q": "Choose the correctly ordered phrase.",
        "options": [
          "a wooden small box",
          "a small wooden box",
          "a box wooden small"
        ],
        "answer": 1,
        "why": "Opinion/size and material adjectives follow conventional adjective order; small normally precedes wooden."
      }
    ]
  },
  {
    "id": "idioms-continued",
    "title": "Idioms (Continued)",
    "subtitle": "Understanding common expressions beyond their literal meanings",
    "urdu": "Idiom ایسا مستقل فقرہ ہے جس کا مطلب اکثر اس کے لفظی معنی سے مختلف ہوتا ہے۔ اسے context کے مطابق سمجھیں اور عام طور پر اس کے الفاظ کو اپنی مرضی سے تبدیل نہ کریں۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "An idiom is a fixed expression whose meaning is not always predictable from the literal meanings of its words. Learn the expression as a unit, understand its context and register, and use it naturally rather than translating it word for word.",
    "example": "Once in a blue moon = very rarely. / Break the ice = make people feel more relaxed. / A blessing in disguise = something that seems bad at first but turns out well.",
    "breakdown": [
      [
        "once in a blue moon",
        "Idiom",
        "بہت کم یا شاذ و نادر"
      ],
      [
        "break the ice",
        "Idiom",
        "ابتدائی جھجک ختم کرنا"
      ],
      [
        "a blessing in disguise",
        "Idiom",
        "بظاہر نقصان مگر بعد میں فائدہ"
      ]
    ],
    "quiz": [
      {
        "q": "What does 'once in a blue moon' mean?",
        "options": [
          "Very often",
          "Very rarely",
          "At midnight"
        ],
        "answer": 1,
        "why": "The idiom means something happens very rarely."
      },
      {
        "q": "If someone 'breaks the ice', what do they do?",
        "options": [
          "Make people feel more comfortable",
          "Damage a frozen lake",
          "End a friendship"
        ],
        "answer": 0,
        "why": "It means easing initial awkwardness in a social situation."
      },
      {
        "q": "A 'blessing in disguise' is...",
        "options": [
          "A hidden danger",
          "Something bad that leads to a good result",
          "A formal celebration"
        ],
        "answer": 1,
        "why": "The expression describes an apparently bad event that turns out beneficial."
      }
    ]
  },
  {
    "id": "correct-punctuation",
    "title": "Correct Usage: Punctuation",
    "subtitle": "Using punctuation marks to make meaning clear",
    "urdu": "Punctuation marks جملے کی ساخت اور معنی واضح کرتے ہیں۔ Comma، semicolon، colon، apostrophe، quotation marks، dash اور hyphen کے استعمال میں فرق سمجھیں۔ Comma splice سے بچیں اور possessive اور contraction میں apostrophe درست لگائیں۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "Use a full stop to end a statement, a question mark for a direct question, and an exclamation mark for a strong exclamation. Use commas to separate items and introductory elements; use a semicolon to join closely related independent clauses; use apostrophes for possession and contractions. Do not join independent clauses with only a comma.",
    "example": "My brother, who lives in Lahore, is visiting. / It was late; we went home. / Sara's book is here. / Don't be late.",
    "breakdown": [
      [
        ";",
        "Semicolon",
        "قریب المعنی دو independent clauses جوڑتا ہے"
      ],
      [
        "Sara's",
        "Possessive apostrophe",
        "Sara کی ملکیت"
      ],
      [
        "Don't",
        "Contraction",
        "do not کی مختصر شکل"
      ],
      [
        ", who lives in Lahore,",
        "Non-essential clause",
        "اضافی معلومات کو commas میں رکھا"
      ]
    ],
    "quiz": [
      {
        "q": "Which sentence uses the apostrophe correctly for one girl's book?",
        "options": [
          "The girls book is new.",
          "The girl's book is new.",
          "The girls' book is new."
        ],
        "answer": 1,
        "why": "Girl's shows possession by one girl; girls' would mean multiple girls."
      },
      {
        "q": "Which punctuation mark can join two closely related independent clauses?",
        "options": [
          "Semicolon",
          "Apostrophe",
          "Hyphen"
        ],
        "answer": 0,
        "why": "A semicolon can join closely related independent clauses."
      },
      {
        "q": "Which is a comma splice?",
        "options": [
          "I was tired, so I slept.",
          "I was tired; I slept.",
          "I was tired, I slept."
        ],
        "answer": 2,
        "why": "Two independent clauses should not be joined by only a comma."
      }
    ]
  },
  {
    "id": "spelling-rules",
    "title": "Spelling Rules",
    "subtitle": "Reliable patterns for spelling English words",
    "urdu": "English spelling میں کچھ عام اصول مدد دیتے ہیں، مثلاً consonant کے بعد y کو plural یا third-person form میں i بنانا، silent e کے ساتھ suffix لگانا، اور بعض الفاظ میں ie/ei کی ترتیب۔ تاہم کئی exceptions بھی ہیں، اس لیے لفظ اور اس کی family کو یاد رکھیں۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "Common spelling patterns include changing a consonant + y to i before many endings (happy → happier; city → cities), dropping a silent e before a vowel suffix (make → making), and doubling a final consonant in some short stressed syllables (stop → stopping). Keep exceptions in mind: chief, receive, weird, and many others do not follow a single universal rule.",
    "example": "city → cities; make → making; stop → stopped; hope → hoping; receive; separate.",
    "breakdown": [
      [
        "city → cities",
        "Consonant + y",
        "y بدل کر ies ہوا"
      ],
      [
        "make → making",
        "Silent e",
        "vowel suffix سے پہلے e حذف ہوا"
      ],
      [
        "stop → stopping",
        "Final consonant",
        "مختصر stressed syllable میں p دگنا ہوا"
      ],
      [
        "receive",
        "Exception / ie-ei",
        "ei یہاں c کے بعد آیا"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct plural spelling.",
        "options": [
          "citys",
          "cities",
          "cityes"
        ],
        "answer": 1,
        "why": "A consonant + y usually changes to ies in the plural."
      },
      {
        "q": "Choose the correct -ing form.",
        "options": [
          "makeing",
          "making",
          "makking"
        ],
        "answer": 1,
        "why": "The silent e is dropped before -ing."
      },
      {
        "q": "Choose the correct spelling.",
        "options": [
          "recieve",
          "receive",
          "receeve"
        ],
        "answer": 1,
        "why": "Receive is spelled with ei after c."
      }
    ]
  },
  {
    "id": "figures-of-speech",
    "title": "Figures of Speech",
    "subtitle": "Using language imaginatively and effectively",
    "urdu": "Figures of Speech زبان کو مؤثر، خوبصورت اور تصویری بناتے ہیں۔ Simile میں like یا as کے ذریعے موازنہ، metaphor میں براہِ راست تشبیہ، personification میں غیر انسانی چیز کو انسانی صفت، اور hyperbole میں مبالغہ ہوتا ہے۔",
    "level": "Intermediate",
    "duration": "11 min",
    "rule": "A figure of speech uses language in a non-literal or specially patterned way for emphasis, vividness, or artistic effect. A simile makes an explicit comparison using like or as; a metaphor describes one thing as another; personification gives human qualities to non-human things; hyperbole is deliberate exaggeration; alliteration repeats initial consonant sounds.",
    "example": "Her smile was like sunshine. (simile) / Time is a thief. (metaphor) / The wind whispered. (personification) / I've told you a million times. (hyperbole)",
    "breakdown": [
      [
        "like sunshine",
        "Simile",
        "like کے ذریعے واضح موازنہ"
      ],
      [
        "Time is a thief",
        "Metaphor",
        "وقت کو چور قرار دیا"
      ],
      [
        "wind whispered",
        "Personification",
        "ہوا کو انسانی عمل دیا"
      ],
      [
        "a million times",
        "Hyperbole",
        "زور دینے کے لیے مبالغہ"
      ]
    ],
    "quiz": [
      {
        "q": "'The stars danced in the sky' is an example of...",
        "options": [
          "Personification",
          "Literal description",
          "Alliteration"
        ],
        "answer": 0,
        "why": "Stars are given the human action of dancing."
      },
      {
        "q": "Which sentence contains a simile?",
        "options": [
          "He is a lion.",
          "Her voice is like music.",
          "The city never sleeps."
        ],
        "answer": 1,
        "why": "Like explicitly signals the comparison."
      },
      {
        "q": "'I am so hungry I could eat a horse' is...",
        "options": [
          "Hyperbole",
          "Personification",
          "Onomatopoeia"
        ],
        "answer": 0,
        "why": "It is deliberate exaggeration, not a literal claim."
      }
    ]
  }
,
  {
    "id": "structures",
    "title": "Structures",
    "subtitle": "Building common English sentence patterns",
    "urdu": "English sentence structures مختلف انداز میں خیال ظاہر کرتے ہیں۔ عام patterns میں Subject + Verb، Subject + Verb + Object، Subject + Linking Verb + Complement، اور There is/There are شامل ہیں۔ درست structure منتخب کرنے سے جملہ واضح اور مکمل بنتا ہے۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "English clauses are commonly built around a subject and a verb. Frequent patterns include Subject + Verb (Birds fly), Subject + Verb + Object (She reads books), Subject + Linking Verb + Complement (He is kind), and Subject + Verb + Indirect Object + Direct Object (She gave me a gift). There is/There are introduces the existence or presence of something.",
    "example": "The baby sleeps. / We watched a film. / The soup smells delicious. / There are three books on the desk.",
    "breakdown": [
      [
        "The baby",
        "Subject",
        "جس کے بارے میں بات ہو رہی ہے"
      ],
      [
        "sleeps",
        "Intransitive verb",
        "اسے object کی ضرورت نہیں"
      ],
      [
        "We watched a film",
        "S + V + O",
        "subject، فعل اور object"
      ],
      [
        "smells delicious",
        "Linking verb + complement",
        "delicious subject کی حالت بتاتا ہے"
      ],
      [
        "There are three books",
        "Existential structure",
        "موجودگی ظاہر کرتا ہے"
      ]
    ],
    "quiz": [
      {
        "q": "Which sentence follows Subject + Verb + Object?",
        "options": [
          "Birds fly.",
          "Mina opened the window.",
          "The sky is blue."
        ],
        "answer": 1,
        "why": "Mina is the subject, opened is the verb, and the window is the object."
      },
      {
        "q": "Choose the correct linking-verb structure.",
        "options": [
          "The flowers smell sweet.",
          "The flowers smell the room sweet.",
          "Sweet smell the flowers."
        ],
        "answer": 0,
        "why": "Sweet is a complement describing the subject flowers after the linking verb smell."
      },
      {
        "q": "Choose the correct expression.",
        "options": [
          "There is two chairs.",
          "There are two chairs.",
          "There be two chairs."
        ],
        "answer": 1,
        "why": "Use there are with the plural noun phrase two chairs."
      }
    ]
  },
  {
    "id": "verb-patterns",
    "title": "Verb Patterns",
    "subtitle": "Choosing the correct form after a verb",
    "urdu": "ہر verb کے بعد ہر قسم کی ساخت استعمال نہیں ہوتی۔ کچھ verbs کے بعد infinitive آتا ہے، کچھ کے بعد gerund، کچھ دونوں قبول کرتے ہیں مگر معنی بدل سکتے ہیں، اور بعض verbs کے بعد object کے ساتھ infinitive یا base form آتی ہے۔",
    "level": "Advanced",
    "duration": "12 min",
    "rule": "English verbs govern different complements. Some are followed by a to-infinitive (want to go, decide to leave), some by a gerund (enjoy reading, avoid driving), and some by either form with little change (begin to rain / begin raining). Others change meaning: remember to lock (do not forget a task) versus remember locking (recall a past action). Common patterns also include verb + object + to-infinitive (asked me to wait) and make/let + object + base verb (made me laugh; let me go).",
    "example": "She decided to study. / He enjoys swimming. / I remembered to call her. / I remember meeting him.",
    "breakdown": [
      [
        "decided to study",
        "Verb + to-infinitive",
        "فیصلے کے بعد infinitive"
      ],
      [
        "enjoys swimming",
        "Verb + gerund",
        "enjoy کے بعد -ing form"
      ],
      [
        "remembered to call",
        "Remember + infinitive",
        "کام یاد رہا اور پھر کیا"
      ],
      [
        "remember meeting",
        "Remember + gerund",
        "ماضی کا واقعہ یاد ہے"
      ],
      [
        "made me laugh",
        "Make + object + base verb",
        "make کے بعد object اور base form"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct form: They enjoy ___ football.",
        "options": [
          "to play",
          "playing",
          "play"
        ],
        "answer": 1,
        "why": "Enjoy is followed by a gerund."
      },
      {
        "q": "Choose the correct sentence.",
        "options": [
          "She decided going home.",
          "She decided to go home.",
          "She decided go home."
        ],
        "answer": 1,
        "why": "Decide is normally followed by a to-infinitive."
      },
      {
        "q": "What does 'I remembered to post the letter' mean?",
        "options": [
          "I recalled posting it earlier.",
          "I did not forget to post it.",
          "I forgot the letter."
        ],
        "answer": 1,
        "why": "Remember + to-infinitive refers to remembering a task that needs to be done."
      },
      {
        "q": "Choose the correct pattern.",
        "options": [
          "The joke made us laugh.",
          "The joke made us to laugh.",
          "The joke made laugh us."
        ],
        "answer": 0,
        "why": "Make + object is followed by the base form without to."
      }
    ]
  },
  {
    "id": "question-tags-and-short-answers",
    "title": "Question Tags and Short Answers",
    "subtitle": "Checking information and replying naturally",
    "urdu": "Question tag جملے کے آخر میں مختصر سوال ہوتا ہے، جس سے تصدیق یا اتفاق طلب کیا جاتا ہے۔ مثبت جملے کے بعد عموماً منفی tag اور منفی جملے کے بعد مثبت tag آتا ہے۔ Short answers میں سوال کے auxiliary verb کو استعمال کیا جاتا ہے، مثلاً Yes, I do یا No, she isn't۔",
    "level": "Intermediate",
    "duration": "10 min",
    "rule": "A question tag usually uses an auxiliary verb and a pronoun. A positive statement normally takes a negative tag (You are ready, aren't you?), while a negative statement takes a positive tag (She isn't late, is she?). If there is no auxiliary in the statement, use do/does/did. Short answers repeat the auxiliary: Yes, I do; No, he hasn't. Match the auxiliary and tense, and remember special forms such as I am late, aren't I?",
    "example": "They have finished, haven't they? / He doesn't drive, does he? / Do you like tea? Yes, I do.",
    "breakdown": [
      [
        "They have finished",
        "Positive statement",
        "have auxiliary موجود ہے"
      ],
      [
        "haven't they?",
        "Negative tag",
        "اسی auxiliary اور pronoun کا tag"
      ],
      [
        "He doesn't drive",
        "Negative statement",
        "doesn't کے ذریعے نفی"
      ],
      [
        "does he?",
        "Positive tag",
        "منفی statement کے بعد مثبت tag"
      ],
      [
        "Yes, I do",
        "Short answer",
        "سوال کے auxiliary do کو دہرایا"
      ]
    ],
    "quiz": [
      {
        "q": "Complete the tag: You are a student, ___?",
        "options": [
          "are you",
          "aren't you",
          "don't you"
        ],
        "answer": 1,
        "why": "A positive statement with are normally takes the negative tag aren't you."
      },
      {
        "q": "Complete the tag: She doesn't eat meat, ___?",
        "options": [
          "does she",
          "doesn't she",
          "is she"
        ],
        "answer": 0,
        "why": "A negative statement takes a positive tag; use does to match doesn't."
      },
      {
        "q": "Short answer: 'Do they live here?' — 'Yes, ___.'",
        "options": [
          "they do",
          "they are",
          "they have"
        ],
        "answer": 0,
        "why": "Repeat the auxiliary do in the short answer."
      },
      {
        "q": "Choose the usual tag: I am late, ___?",
        "options": [
          "amn't I",
          "aren't I",
          "don't I"
        ],
        "answer": 1,
        "why": "The conventional question tag after I am is aren't I."
      }
    ]
  },
  {
    "id": "more-structures",
    "title": "More Structures",
    "subtitle": "Useful patterns for emphasis, comparison and complex meaning",
    "urdu": "مزید sentence structures میں there اور it کے ابتدائی استعمال، emphatic do، so/such، too/enough، not only…but also، either…or، neither…nor، اور comparative structures شامل ہیں۔ ان patterns میں parallel structure اور subject-verb agreement کا خیال رکھیں۔",
    "level": "Advanced",
    "duration": "12 min",
    "rule": "English uses a range of fixed structures to express emphasis, degree, alternatives, and comparison. Examples include emphatic do (I do understand), so + adjective/adverb + that (so tired that...), such + noun phrase + that (such a difficult task that...), too + adjective + to-infinitive, adjective + enough + to-infinitive, not only…but also, either…or, neither…nor, and the…the comparative pattern. Keep parallel elements grammatically balanced. With either…or and neither…nor, the verb commonly agrees with the nearer subject.",
    "example": "I do want to help. / It was so cold that we stayed inside. / The bag is too heavy to lift. / She is not only clever but also hardworking. / The sooner we start, the earlier we finish.",
    "breakdown": [
      [
        "do want",
        "Emphatic do",
        "بات پر زور دیتا ہے"
      ],
      [
        "so cold that",
        "So…that structure",
        "شدت اور نتیجہ"
      ],
      [
        "too heavy to lift",
        "Too…to structure",
        "ضرورت سے زیادہ بھاری"
      ],
      [
        "not only…but also",
        "Correlative conjunctions",
        "متوازی دو باتیں جوڑتا ہے"
      ],
      [
        "The sooner…the earlier",
        "Comparative structure",
        "دو تبدیلیوں کا باہمی تعلق"
      ]
    ],
    "quiz": [
      {
        "q": "Choose the correct structure.",
        "options": [
          "The box is too heavy to lift.",
          "The box is too heavy that lift.",
          "The box too heavy to lifting."
        ],
        "answer": 0,
        "why": "Too + adjective is followed by a to-infinitive in this pattern."
      },
      {
        "q": "Complete the sentence: It was ___ interesting that I read it twice.",
        "options": [
          "so",
          "such",
          "too"
        ],
        "answer": 0,
        "why": "Use so + adjective + that."
      },
      {
        "q": "Choose the parallel structure.",
        "options": [
          "She is not only kind but also helpful.",
          "She is not only kind but also helps.",
          "She is not only kindness but also helpful."
        ],
        "answer": 0,
        "why": "Kind and helpful are both adjectives, keeping the paired elements parallel."
      },
      {
        "q": "Choose the correct verb: Neither the teacher nor the students ___ ready.",
        "options": [
          "is",
          "are",
          "was"
        ],
        "answer": 1,
        "why": "With neither…nor, the verb commonly agrees with the nearer subject, students."
      }
    ]
  }
,
  {
    "id": "paragraph-writing",
    "title": "Paragraph Writing",
    "subtitle": "Introductory remarks, principles, examples and writing a single paragraph",
    "urdu": "Paragraph ایک مرکزی خیال کے گرد منظم جملوں کا مجموعہ ہے۔ اچھے paragraph میں topic sentence، وضاحتی تفصیل، مثالیں اور اختتامی جملہ شامل ہو سکتے ہیں۔ تمام جملے ایک ہی موضوع سے متعلق ہوں اور ترتیب منطقی ہو۔",
    "level": "Intermediate",
    "duration": "12 min",
    "rule": "A paragraph develops one main idea. Begin with a clear topic sentence, add supporting details, facts or examples, arrange ideas in a logical order, and finish with a concluding sentence when appropriate. Good paragraphs show unity (one controlling idea), coherence (clear connections), adequate development (enough detail), and correct mechanics (grammar, spelling and punctuation). Use transitions such as first, moreover, for example, and finally where they help the reader.",
    "example": "Reading is a valuable habit. It increases our knowledge and improves our language. Through books, we learn about people, places and ideas beyond our own experience. Reading also develops imagination and concentration. For these reasons, everyone should make time for reading every day.",
    "breakdown": [
      [
        "Reading is a valuable habit.",
        "Topic sentence",
        "مرکزی خیال متعارف کراتا ہے"
      ],
      [
        "It increases our knowledge...",
        "Supporting detail",
        "مرکزی خیال کی وضاحت"
      ],
      [
        "Through books...",
        "Example / elaboration",
        "مزید تفصیل دیتا ہے"
      ],
      [
        "Reading also develops...",
        "Additional support",
        "دوسرا متعلقہ فائدہ"
      ],
      [
        "For these reasons...",
        "Concluding sentence",
        "پیراگراف کو نتیجے پر ختم کرتا ہے"
      ]
    ],
    "quiz": [
      {
        "q": "What is the main purpose of a topic sentence?",
        "options": [
          "To introduce the paragraph's main idea",
          "To add an unrelated detail",
          "To list every punctuation mark"
        ],
        "answer": 0,
        "why": "A topic sentence states the central idea that the rest of the paragraph develops."
      },
      {
        "q": "Which quality means that all sentences support one main idea?",
        "options": [
          "Unity",
          "Handwriting",
          "Rhyme"
        ],
        "answer": 0,
        "why": "Unity keeps every sentence relevant to the paragraph's controlling idea."
      },
      {
        "q": "Which is the best supporting detail for a paragraph about the benefits of exercise?",
        "options": [
          "Exercise strengthens the heart and muscles.",
          "My favourite film is a comedy.",
          "The train leaves at noon."
        ],
        "answer": 0,
        "why": "It directly supports the topic of exercise benefits."
      },
      {
        "q": "What is coherence?",
        "options": [
          "Logical flow and clear connection between ideas",
          "Using the longest possible words",
          "Repeating the topic sentence exactly"
        ],
        "answer": 0,
        "why": "Coherence makes the paragraph easy to follow through logical order and transitions."
      }
    ],
    "practicePrompt": "Write one paragraph of 6–8 sentences on 'The Importance of Trees'. Include a topic sentence, at least three supporting details and a suitable concluding sentence."
  },
  {
    "id": "story-writing",
    "title": "Story Writing",
    "subtitle": "Introductory remarks, hints and specimen story",
    "urdu": "Story writing میں واقعات کو دلچسپ اور منطقی ترتیب سے بیان کیا جاتا ہے۔ Hints کو صرف الگ الگ جملوں کی صورت میں نقل نہ کریں؛ انہیں کردار، جگہ، مسئلے، واقعات اور انجام کے ساتھ مربوط کہانی میں تبدیل کریں۔ کہانی کا آغاز واضح ہو، واقعات میں تسلسل ہو اور اختتام مؤثر ہو۔",
    "level": "Intermediate",
    "duration": "13 min",
    "rule": "A good story usually has a setting, characters, a problem or central event, a sequence of connected actions, and an ending. When writing from hints, identify the main idea, put events in a sensible order, add only relevant details and dialogue, and keep the tense and point of view consistent. Give the story a suitable title. A moral may be added when the task calls for one, but it should grow naturally from the events.",
    "example": "**The Honest Woodcutter**\n\nA poor woodcutter was cutting a tree beside a river when his axe slipped from his hands and fell into the deep water. He sat on the bank and began to weep. A kind spirit appeared and asked what had happened. The spirit brought out a golden axe, but the woodcutter said it was not his. The spirit then showed him a silver axe, which he also refused. At last, the spirit brought out the woodcutter's old iron axe. The woodcutter happily recognised it. Pleased by his honesty, the spirit gave him all three axes. The woodcutter returned home grateful and happy.\n\n**Moral: Honesty is the best policy.**",
    "breakdown": [
      [
        "A poor woodcutter... beside a river",
        "Setting and character",
        "کردار اور جگہ کا تعارف"
      ],
      [
        "his axe... fell into the deep water",
        "Problem",
        "کہانی کا بنیادی مسئلہ"
      ],
      [
        "A kind spirit appeared...",
        "Rising action",
        "واقعات آگے بڑھتے ہیں"
      ],
      [
        "he also refused... recognised it",
        "Turning point",
        "کردار کی دیانت ظاہر ہوتی ہے"
      ],
      [
        "the spirit gave him all three axes",
        "Resolution",
        "مسئلہ حل ہو جاتا ہے"
      ],
      [
        "Honesty is the best policy",
        "Moral",
        "کہانی کا سبق"
      ]
    ],
    "quiz": [
      {
        "q": "What should you do first when given story-writing hints?",
        "options": [
          "Understand and arrange the events logically",
          "Copy each hint without connecting it",
          "Write the moral before understanding the story"
        ],
        "answer": 0,
        "why": "Planning the sequence helps create a coherent story."
      },
      {
        "q": "Which element tells the reader where and when a story happens?",
        "options": [
          "Setting",
          "Conclusion",
          "Punctuation"
        ],
        "answer": 0,
        "why": "The setting establishes the time and place."
      },
      {
        "q": "Why should the tense usually remain consistent?",
        "options": [
          "It helps readers follow when events happen",
          "It makes every sentence a question",
          "It removes the need for characters"
        ],
        "answer": 0,
        "why": "Consistent tense keeps the timeline clear."
      },
      {
        "q": "Which is the strongest ending for a story?",
        "options": [
          "A conclusion that resolves the main problem",
          "An unrelated new event",
          "A sentence that stops in the middle"
        ],
        "answer": 0,
        "why": "A satisfying ending brings the central events to a meaningful close."
      }
    ],
    "practicePrompt": "Write a story using these hints: A thirsty crow — finds a pot — little water at the bottom — cannot reach it — drops pebbles into the pot — water rises — drinks water — flies away happily. Give the story a title and a suitable moral."
  }
,
  {
    "id": "letter-writing",
    "title": "Letter Writing",
    "subtitle": "Forms, classification, social and friendly letters, invitations, business, applications, official letters and letters to newspapers",
    "urdu": "خط نویسی میں مقصد، مخاطب اور رسمی یا غیر رسمی انداز کے مطابق زبان اور ترتیب منتخب کی جاتی ہے۔ دوستانہ خطوط میں بے تکلفی اور گرمجوشی ہوتی ہے، جبکہ کاروباری، درخواست اور سرکاری خطوط میں شائستہ، واضح اور مختصر زبان استعمال ہوتی ہے۔",
    "level": "Intermediate",
    "duration": "18 min",
    "rule": "Introductory remarks: A letter is a written message sent to a person or organisation. Before writing, identify the purpose and reader. The form of letters: A personal letter commonly has the sender's address and date, a greeting, the message, a suitable closing and the writer's name. Formal letters generally include the sender's address, date, recipient's name or designation and address, a clear subject, salutation, concise body, complimentary close and signature. Follow the format required by your school or organisation. Classification: Letters may be broadly classified as informal/personal (social and friendly letters) and formal (business, application, official and letters to newspapers). Social letters: These maintain family and social relationships, for example congratulations, condolences or thanks. Friendly letters: These are written to friends and relatives in a warm, natural tone; use clear paragraphs and personal details. Notes of invitations: State the occasion, date, time, venue and any reply instructions. Keep the wording welcoming and include RSVP details when needed. Business letters: Use a professional tone for enquiries, orders, complaints, claims and replies. Give a precise subject, relevant facts and a clear action requested. Letters of applications: State the post or opportunity applied for, introduce relevant qualifications and experience, refer to enclosed documents if any, and close courteously. Official letters: Address an office or public authority respectfully; state the matter, provide dates or reference numbers where relevant, and make the requested action clear. Letters to newspapers: Address the editor, give a concise subject or heading, explain the issue with accurate facts and reasoned points, and end with a constructive suggestion. Avoid abusive or unsupported claims.",
    "example": "**Sample: Formal application for leave**\n\n24 Garden Road\nKarachi\n21 November 2026\n\nThe Principal\nCity School\nKarachi\n\n**Subject: Application for two days' leave**\n\nRespected Sir/Madam,\n\nI respectfully request leave for two days, 23 and 24 November, as I am unwell and have been advised to rest. I shall make up the missed classwork after returning to school.\n\nKindly grant me leave for these days.\n\nYours faithfully,\nA Student",
    "breakdown": [
      [
        "Sender's address and date",
        "Opening details",
        "مرسل کا پتہ اور تاریخ درج کریں"
      ],
      [
        "Recipient's name/designation and address",
        "Inside address",
        "جس شخص یا ادارے کو خط لکھا جا رہا ہے"
      ],
      [
        "Subject and salutation",
        "Purpose and greeting",
        "موضوع مختصر اور واضح؛ مناسب خطاب"
      ],
      [
        "Opening paragraph",
        "Reason for writing",
        "خط لکھنے کا مقصد واضح کریں"
      ],
      [
        "Main body",
        "Relevant details",
        "ضروری معلومات منظم انداز میں دیں"
      ],
      [
        "Closing request and sign-off",
        "Polite conclusion",
        "درخواست یا نتیجہ شائستگی سے بیان کریں"
      ]
    ],
    "quiz": [
      {
        "q": "Which pair gives the broad classification of letters?",
        "options": [
          "Informal and formal",
          "Past and future",
          "Singular and plural"
        ],
        "answer": 0,
        "why": "Personal letters are informal; business, application and official letters are formal."
      },
      {
        "q": "Which details should an invitation note clearly include?",
        "options": [
          "Occasion, date, time and venue",
          "Only the writer's favourite subject",
          "A long unrelated story"
        ],
        "answer": 0,
        "why": "Guests need the essential event details to respond and attend."
      },
      {
        "q": "What tone is most suitable for a business letter?",
        "options": [
          "Clear, courteous and professional",
          "Over-familiar and slang-filled",
          "Angry and insulting"
        ],
        "answer": 0,
        "why": "Professional language helps communicate requests and facts effectively."
      },
      {
        "q": "What should a letter to a newspaper editor contain?",
        "options": [
          "A clear issue supported by accurate facts",
          "Personal attacks without evidence",
          "Unrelated private messages"
        ],
        "answer": 0,
        "why": "A reasoned, factual letter is more useful to readers and editors."
      },
      {
        "q": "What is the purpose of a subject line in a formal letter?",
        "options": [
          "To state the main purpose briefly",
          "To replace the entire letter",
          "To give the writer's nickname"
        ],
        "answer": 0,
        "why": "A subject line lets the recipient understand the topic quickly."
      }
    ],
    "practicePrompt": "Write (1) a friendly letter inviting a cousin to spend the holidays with you, and (2) a formal letter to a newspaper editor about keeping your neighbourhood clean. For each, use the appropriate format and tone."
  }
,
  {
    "id": "comprehension",
    "title": "Comprehension",
    "subtitle": "Introductory remarks and specimen passage with questions",
    "urdu": "Comprehension یعنی عبارت کو غور سے پڑھ کر اس کا مطلب سمجھنا اور سوالات کے جواب عبارت کی بنیاد پر دینا۔ پہلے عبارت کا مجموعی خیال سمجھیں، پھر سوالات پڑھ کر متعلقہ معلومات تلاش کریں۔ جواب اپنے الفاظ میں، مختصر اور واضح لکھیں۔ عبارت سے باہر کی معلومات شامل نہ کریں، جب تک سوال خاص طور پر رائے یا نتیجہ اخذ کرنے کو نہ کہے۔",
    "level": "Intermediate",
    "duration": "12 min",
    "rule": "Introductory remarks: Reading comprehension tests how accurately you understand a passage. Read the passage once for its general meaning, then read it again for details, important words, the writer's purpose and the relationships between ideas. Read each question carefully and identify what it asks: a fact, a reason, a meaning, an inference or the main idea. Answer from evidence in the passage, preferably in your own words. Keep answers relevant and concise, use complete sentences when required, and check that you have answered every part of the question. For vocabulary questions, use the surrounding sentence to infer meaning. Do not copy large sections when a short answer is enough.",
    "example": "**Specimen passage: The Community Garden**\n\nIn a crowded part of the city, an unused piece of land stood between two rows of houses. People often passed it without noticing the rubbish scattered across it. One summer, a group of neighbours decided to turn the neglected space into a garden. They cleared the waste, prepared the soil and planted vegetables, herbs and flowers. Some residents donated seeds, while others offered tools or gave an hour of work each weekend.\n\nAt first, the plants grew slowly because the soil was dry. The neighbours arranged a watering schedule and collected rainwater in covered containers. Soon, green shoots appeared, and butterflies began visiting the flowers. The garden did more than provide fresh produce. Children learned how plants grow, older residents shared their gardening knowledge, and neighbours who had rarely spoken began working together. The project showed that a shared effort can improve not only a place but also the relationships among the people who live there.\n\n**Questions**\n1. Where was the unused piece of land located?\n2. What did the neighbours do to improve it?\n3. Why did the plants grow slowly at first?\n4. How did the neighbours solve the watering problem?\n5. Mention two benefits of the garden besides fresh produce.\n6. What does the word “neglected” mean in the passage?\n7. What is the main lesson of the passage?",
    "breakdown": [
      [
        "Read once for the general idea",
        "Gist",
        "پہلی بار عبارت کا مرکزی خیال سمجھیں"
      ],
      [
        "Read again for names, reasons and details",
        "Scanning",
        "دوسری بار مطلوبہ معلومات تلاش کریں"
      ],
      [
        "Notice context around unfamiliar words",
        "Vocabulary in context",
        "لفظ کا مطلب آس پاس کے جملوں سے اخذ کریں"
      ],
      [
        "Support answers with passage evidence",
        "Accuracy",
        "جواب عبارت کی معلومات کے مطابق دیں"
      ],
      [
        "Write briefly in your own words",
        "Clear response",
        "اپنے الفاظ میں مختصر اور مکمل جواب دیں"
      ]
    ],
    "quiz": [
      {
        "q": "What should you do on the first reading of a passage?",
        "options": [
          "Understand its general meaning",
          "Memorise every word",
          "Skip the title and topic"
        ],
        "answer": 0,
        "why": "The first reading helps you grasp the overall subject and main idea."
      },
      {
        "q": "Where should answers to factual questions come from?",
        "options": [
          "Evidence in the passage",
          "An unrelated story",
          "A guess unrelated to the text"
        ],
        "answer": 0,
        "why": "Comprehension answers should be supported by the given text."
      },
      {
        "q": "How can you work out an unfamiliar word's meaning?",
        "options": [
          "Use clues in the surrounding sentences",
          "Ignore the whole paragraph",
          "Choose any meaning at random"
        ],
        "answer": 0,
        "why": "Context often explains how a word is being used."
      },
      {
        "q": "What does “neglected” mean in the specimen passage?",
        "options": [
          "Not cared for",
          "Newly painted",
          "Carefully guarded"
        ],
        "answer": 0,
        "why": "The land was unused and covered with rubbish, showing it had not been cared for."
      }
    ],
    "practicePrompt": "Read the specimen passage and answer all seven questions in complete, concise sentences. Then write the main idea of the passage in one sentence."
  }
,
  {
    "id": "precis-writing",
    "title": "Precis Writing",
    "subtitle": "Introductory remarks, uses, method of procedure, summary and specimen",
    "urdu": "Precis writing سے مراد کسی عبارت کے بنیادی خیال کو مختصر، واضح اور اپنے الفاظ میں بیان کرنا ہے۔ ایک اچھا precis اصل عبارت کے مرکزی نکات محفوظ رکھتا ہے، غیر ضروری مثالیں اور تکرار حذف کرتا ہے، اور مصنف کے مطلب کو تبدیل نہیں کرتا۔",
    "level": "Intermediate",
    "duration": "15 min",
    "rule": "Introductory remarks: A precis (pronounced “pray-see”) is a concise and accurate summary of a passage. It presents the central idea and essential supporting points in the writer's own words, without adding personal opinions. Uses of precis writing: It develops careful reading, separates main ideas from minor details, improves concise expression, and helps readers communicate the substance of long reports, articles or speeches quickly. Method of procedure: (1) Read the passage carefully to understand its overall meaning. (2) Read it again and identify the central idea and essential points. (3) Underline key points and note their logical order. (4) Remove repetition, illustrations, unnecessary examples and minor details. (5) Write the summary in your own words, usually in one connected paragraph. (6) Give it a short, suitable title. (7) Compare it with the original to check accuracy, completeness, grammar and length. Follow the word limit given in the question; a precis is often about one-third of the original passage, but the stated instructions take priority. To sum up: A precis should be brief, clear, coherent, accurate and objective. It must preserve the original meaning and include only the essential points.",
    "example": "**Specimen passage**\n\nTrees are among the most useful gifts of nature. They provide shade, fruit and timber, and their roots help hold the soil together. They absorb carbon dioxide and release oxygen, while their leaves help cool the air. Trees also provide shelter and food for birds, insects and many other living creatures. Yet forests are often cleared to make room for buildings, roads and farms. When too many trees are cut down, soil erosion increases, wildlife loses its habitat and the local climate may become hotter. Planting young trees is helpful, but protecting existing forests is equally important because mature trees take many years to grow. Governments and communities should therefore work together to prevent unnecessary cutting, care for public green spaces and encourage responsible planting. Every person can contribute by protecting trees in their neighbourhood and using paper thoughtfully.\n\n**Specimen precis**\n\n**Title: The Importance of Trees**\n\nTrees benefit people and the environment by providing useful products, oxygen, shade and wildlife habitats. Deforestation causes soil erosion, habitat loss and rising temperatures. Since mature trees take years to grow, existing forests must be protected as well as new trees planted. Governments, communities and individuals should work together to conserve trees and use natural resources responsibly.\n\n**Note:** The specimen precis is shorter than the original and retains its central ideas without copying every example.",
    "breakdown": [
      [
        "Read the whole passage",
        "Understand",
        "عبارت کا مجموعی مطلب سمجھیں"
      ],
      [
        "Identify the central idea",
        "Main point",
        "مرکزی خیال معلوم کریں"
      ],
      [
        "Select essential supporting points",
        "Key details",
        "صرف ضروری نکات منتخب کریں"
      ],
      [
        "Remove repetition and examples",
        "Condense",
        "تکرار اور غیر ضروری تفصیل حذف کریں"
      ],
      [
        "Rewrite in your own words",
        "Draft",
        "اپنے الفاظ میں مربوط خلاصہ لکھیں"
      ],
      [
        "Check meaning, title and word limit",
        "Revise",
        "اصل مطلب، عنوان اور الفاظ کی تعداد جانچیں"
      ]
    ],
    "quiz": [
      {
        "q": "What is the main purpose of a precis?",
        "options": [
          "To present the essential meaning briefly",
          "To add the writer's personal opinions",
          "To copy the passage word for word"
        ],
        "answer": 0,
        "why": "A precis condenses the original while preserving its central meaning."
      },
      {
        "q": "Which detail should usually be removed from a precis?",
        "options": [
          "An unnecessary example or repetition",
          "The central idea",
          "An essential reason"
        ],
        "answer": 0,
        "why": "Minor examples and repeated points are omitted to keep the summary concise."
      },
      {
        "q": "In whose words should a precis normally be written?",
        "options": [
          "The writer's own words",
          "Only the original author's exact sentences",
          "A mixture of unrelated quotations"
        ],
        "answer": 0,
        "why": "Paraphrasing shows understanding and creates a concise summary."
      },
      {
        "q": "What should you do after drafting a precis?",
        "options": [
          "Compare it with the original for accuracy",
          "Add new arguments",
          "Change the author's meaning"
        ],
        "answer": 0,
        "why": "Checking against the passage ensures the summary remains accurate and complete."
      },
      {
        "q": "What should guide the length of a precis?",
        "options": [
          "The word limit in the instructions",
          "The number of paragraphs in the original only",
          "A fixed length in every task"
        ],
        "answer": 0,
        "why": "Always follow the specified word limit; one-third is only a common guideline."
      }
    ],
    "practicePrompt": "Write a precis of the specimen passage in about one-third of its length. Give it a suitable title, use your own words, and preserve the main points without adding your opinion."
  }
,
  {
    "id": "expansion-of-passages",
    "title": "Expansion of Passages",
    "subtitle": "Introductory remarks, method of procedure and specimen",
    "urdu": "Expansion of passages میں دیے گئے مختصر قول یا خیال کو اس کے مرکزی مفہوم سے ہٹے بغیر ایک مکمل، مربوط پیراگراف میں پھیلایا جاتا ہے۔ اصل خیال کو سمجھیں، متعلقہ نکات سوچیں، مثال یا وضاحت شامل کریں اور غیر متعلقہ باتوں سے گریز کریں۔",
    "level": "Intermediate",
    "duration": "13 min",
    "rule": "Introductory remarks: Expansion of a passage means developing a short statement, quotation or central idea into a clear, connected piece of writing. The aim is to explain the thought fully, not merely to repeat it in more words. Method of procedure: (1) Read the given statement carefully and identify its central idea. (2) Consider what it means and what message it conveys. (3) Note two or three relevant supporting points, reasons or examples. (4) Arrange these points in a logical order. (5) Write an introductory sentence that introduces the idea, followed by explanation and suitable examples. (6) End with a sentence that reinforces the main message. Keep the expansion focused, coherent and accurate. Do not distort the original meaning, add unrelated ideas or use unnecessary repetition. A proverb or quotation may be explained with a practical example where appropriate.",
    "example": "**Specimen statement: “Where there is a will, there is a way.”**\n\nDetermination is one of the most important qualities for success. A person who has a clear aim and is willing to work steadily can often overcome difficulties that seem impossible at first. Talent and good opportunities are helpful, but they are not enough without effort and patience. For example, a student who finds a subject difficult can improve through regular practice, careful study and guidance from teachers. The student may progress slowly, but persistence makes improvement possible. On the other hand, a person who gives up at the first obstacle loses the chance to discover what can be achieved. This proverb reminds us that strong determination encourages us to find solutions and continue working towards our goals. Success may take time, but a firm will and consistent effort can open a way forward.",
    "breakdown": [
      [
        "Understand the statement",
        "Central idea",
        "قول یا خیال کا بنیادی مطلب سمجھیں"
      ],
      [
        "Think of reasons and implications",
        "Development",
        "خیال کی وضاحت کے لیے متعلقہ نکات سوچیں"
      ],
      [
        "Choose a relevant example",
        "Illustration",
        "مناسب مثال سے بات واضح کریں"
      ],
      [
        "Arrange points logically",
        "Coherence",
        "خیالات کو درست ترتیب میں رکھیں"
      ],
      [
        "Write a focused conclusion",
        "Closing",
        "اختتام میں مرکزی پیغام مضبوط کریں"
      ]
    ],
    "quiz": [
      {
        "q": "What is the purpose of expanding a passage or statement?",
        "options": [
          "To explain its central idea fully and clearly",
          "To repeat the statement many times",
          "To change its original meaning"
        ],
        "answer": 0,
        "why": "Expansion develops the given thought with relevant explanation and support."
      },
      {
        "q": "What should you identify before writing?",
        "options": [
          "The central idea",
          "The longest possible word",
          "An unrelated topic"
        ],
        "answer": 0,
        "why": "Understanding the central idea keeps the expansion relevant."
      },
      {
        "q": "Which material is most useful in an expansion?",
        "options": [
          "Relevant reasons and examples",
          "Unconnected stories",
          "Repeated sentences"
        ],
        "answer": 0,
        "why": "Relevant support explains and illustrates the original thought."
      },
      {
        "q": "How should an expansion end?",
        "options": [
          "With a conclusion that reinforces the main message",
          "With a completely new topic",
          "In the middle of an unfinished idea"
        ],
        "answer": 0,
        "why": "A focused conclusion brings the explanation back to its central message."
      }
    ],
    "practicePrompt": "Expand the statement “Honesty is the best policy” into a well-organised paragraph of about 150–180 words. Explain the idea, give a relevant example and finish with a clear conclusion."
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