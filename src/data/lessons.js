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
  }
];

export const dailyQuestions = [
  { q: "Choose the correct sentence.", options: ["She go to school.", "She goes to school.", "She going school."], answer: 1, why: "With he, she or it in the simple present, add -s or -es to most verbs." },
  { q: "What is the plural of 'child'?", options: ["childs", "childes", "children"], answer: 2, why: "Children is an irregular plural noun." },
  { q: "Choose the correct article: ___ honest person.", options: ["A", "An", "The only"], answer: 1, why: "Honest begins with a vowel sound because the h is silent." }
];