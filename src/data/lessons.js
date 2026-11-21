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