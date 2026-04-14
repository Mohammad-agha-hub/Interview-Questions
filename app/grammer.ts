export type Rule = {
  rule: string;
  structure: string;
  examples: string[];
};



export const grammarTopics = [
  {
    id: "bg-static-verbs",
    title: "Static Verbs",
    color: "#B45309",
    level: "beginner",
    rules: [
      {
        rule: "Static (stative) verbs describe states, NOT actions — never used in continuous tenses",
        structure: "subject + stative verb + complement (NO -ing form)",
        examples: [
          "I know the answer. (NOT: I am knowing the answer.)",
          "She loves chocolate. (NOT: She is loving chocolate.)",
        ],
      },
      {
        rule: "Common stative verbs — thinking/mind: know, believe, understand, remember, forget",
        structure: "subject + know/believe/understand + object",
        examples: [
          "He understands the question very well.",
          "I believe that she is telling the truth.",
        ],
      },
      {
        rule: "Common stative verbs — feelings: like, love, hate, want, need, prefer",
        structure: "subject + like/love/hate/want/need + object",
        examples: [
          "They need more time to finish the project.",
          "She prefers tea to coffee in the morning.",
        ],
      },
      {
        rule: "Common stative verbs — senses: see, hear, smell, taste, seem, appear",
        structure: "subject + sense verb + adjective/object",
        examples: [
          "This soup tastes delicious! (NOT: is tasting)",
          "She seems tired today — maybe she didn't sleep well.",
        ],
      },
    ],
  },
  {
    id: "bg-articles-demonstratives",
    title: "Articles & Demonstratives",
    color: "#DC2626",
    level: "beginner",
    rules: [
      {
        rule: "A / AN — indefinite article (first mention, singular countable nouns)",
        structure: "a + consonant sound  |  an + vowel sound",
        examples: [
          "I have a dog and a cat at home.",
          "She is an engineer at an international company.",
        ],
      },
      {
        rule: "THE — definite article (specific, already known, or unique things)",
        structure: "the + noun (singular or plural)",
        examples: [
          "Please close the door — it's getting cold.",
          "The sun rises in the east every single morning.",
        ],
      },
      {
        rule: "THIS / THAT — demonstrative adjectives (singular)",
        structure: "this (near) + singular noun  |  that (far) + singular noun",
        examples: [
          "This book is very interesting — I can't put it down.",
          "That building over there is our new school.",
        ],
      },
      {
        rule: "THESE / THOSE — demonstrative adjectives (plural)",
        structure: "these (near) + plural noun  |  those (far) + plural noun",
        examples: [
          "These shoes are very comfortable for walking.",
          "Those children in the park are my neighbors.",
        ],
      },
    ],
  },
  {
    id: "bg-possessive-adj",
    title: "Possessive Adjectives",
    color: "#7C3AED",
    level: "beginner",
    rules: [
      {
        rule: "Possessive adjectives — show who something belongs to",
        structure: "my, your, his, her, its, our, their + noun",
        examples: [
          "I have a dog. My dog is very friendly.",
          "She has a bag. Her bag is red and white.",
        ],
      },
      {
        rule: "HIS — male  /  HER — female  /  ITS — things & animals",
        structure: "his/her/its + noun",
        examples: [
          "Tom loves his job — he is a very happy man.",
          "The cat drinks its milk every morning.",
        ],
      },
      {
        rule: "OUR — for we/us  /  THEIR — for they/them",
        structure: "our/their + noun",
        examples: [
          "We live in this house. Our house has a big garden.",
          "They have two cars. Their cars are parked outside.",
        ],
      },
    ],
  },
  {
    id: "bg-gradable-adj",
    title: "Gradable & Non-Gradable Adj.",
    color: "#DB2777",
    level: "beginner",
    rules: [
      {
        rule: "Gradable adjectives — can vary in degree (use very, quite, extremely)",
        structure: "very / quite / extremely + gradable adjective",
        examples: [
          "The weather is very hot today — much hotter than yesterday.",
          "She is quite tired after working all day long.",
        ],
      },
      {
        rule: "Non-gradable (absolute) adjectives — already at maximum (use absolutely, completely)",
        structure: "absolutely / completely / totally + non-gradable adjective",
        examples: [
          "The film was absolutely brilliant — I loved every minute.",
          "The room was completely empty when we arrived.",
        ],
      },
      {
        rule: "Common non-gradable adjectives: perfect, impossible, unique, dead, frozen, exhausted, starving",
        structure:
          "subject + be + absolutely/completely + non-gradable adjective",
        examples: [
          "I am absolutely exhausted after the long journey here.",
          "This idea is completely impossible — we need a new plan.",
        ],
      },
    ],
  },
  {
    id: "bg-quantitative-adj",
    title: "Quantitative Adj.",
    color: "#0891B2",
    level: "beginner",
    rules: [
      {
        rule: "MANY — for countable plural nouns (questions and negatives)",
        structure: "many + countable plural noun",
        examples: [
          "There aren't many students in the classroom today.",
          "How many books do you have in your bag?",
        ],
      },
      {
        rule: "MUCH — for uncountable nouns (questions and negatives)",
        structure: "much + uncountable noun",
        examples: [
          "There isn't much sugar left in the jar.",
          "How much water do you drink every day?",
        ],
      },
      {
        rule: "A LOT OF / LOTS OF — for both countable and uncountable (positive statements)",
        structure: "a lot of / lots of + noun",
        examples: [
          "She has a lot of friends at school.",
          "There is a lot of traffic in the city during rush hour.",
        ],
      },
      {
        rule: "A FEW — small number (countable)  /  A LITTLE — small amount (uncountable)",
        structure: "a few + countable noun  |  a little + uncountable noun",
        examples: [
          "I have a few coins in my pocket — enough for the bus.",
          "Can I have a little milk in my tea, please?",
        ],
      },
    ],
  },
  {
    id: "bg-whose",
    title: "Usages of Whose",
    color: "#059669",
    level: "beginner",
    rules: [
      {
        rule: "WHOSE — question word to ask about possession",
        structure: "Whose + noun + is/are + this/that/these/those?",
        examples: [
          "Whose bag is this on the table?",
          "Whose keys are those on the floor?",
        ],
      },
      {
        rule: "WHOSE — relative pronoun to show possession in a clause",
        structure: "noun + whose + noun + verb",
        examples: [
          "The girl whose hair is long is my sister.",
          "I know a man whose brother is a famous doctor.",
        ],
      },
    ],
  },
  {
    id: "bg-would",
    title: "Usages of Would",
    color: "#D97706",
    level: "beginner",
    rules: [
      {
        rule: "WOULD — polite requests and offers",
        structure: "Would you + base verb...?  /  Would you like + noun?",
        examples: [
          "Would you please open the window for me?",
          "Would you like a cup of tea or coffee?",
        ],
      },
      {
        rule: "WOULD — imaginary / unreal situations (conditional)",
        structure: "I/he/she + would + base verb (if something were true)",
        examples: [
          "I would travel the world if I had more money.",
          "She would be happier if she had a different job.",
        ],
      },
      {
        rule: "WOULD — past habits (things done regularly in the past)",
        structure: "subject + would + base verb (past routine)",
        examples: [
          "When I was young, I would walk to school every day.",
          "Every summer, we would visit our grandparents in the village.",
        ],
      },
    ],
  },
  {
    id: "bg-objective-pronouns",
    title: "Objective Pronouns",
    color: "#DC2626",
    level: "beginner",
    rules: [
      {
        rule: "Objective pronouns — used as the object of a verb or preposition",
        structure: "me, you, him, her, it, us, them",
        examples: [
          "She loves him and he loves her.",
          "Can you help me with this exercise, please?",
        ],
      },
      {
        rule: "Object pronoun after verbs",
        structure: "subject + verb + object pronoun",
        examples: [
          "The teacher called us to the front of the class.",
          "I saw them at the shopping mall yesterday afternoon.",
        ],
      },
      {
        rule: "Object pronoun after prepositions",
        structure: "preposition + object pronoun",
        examples: [
          "This gift is for her — it's her birthday today.",
          "He sat next to me during the long flight.",
        ],
      },
    ],
  },
  {
    id: "bg-can",
    title: "Ability Expression (Can)",
    color: "#7C3AED",
    level: "beginner",
    rules: [
      {
        rule: "CAN — ability in the present",
        structure: "subject + can + base verb",
        examples: [
          "I can speak English and a little French.",
          "She can swim very well — she's on the school team.",
        ],
      },
      {
        rule: "CANNOT / CAN'T — inability",
        structure: "subject + can't + base verb",
        examples: [
          "He can't drive yet — he's only fifteen years old.",
          "I can't find my keys — have you seen them?",
        ],
      },
      {
        rule: "CAN — asking for permission or making a request",
        structure: "Can + I/you + base verb?",
        examples: [
          "Can I borrow your pen for a moment, please?",
          "Can you help me carry these heavy bags?",
        ],
      },
    ],
  },
  {
    id: "bg-possessive-verbs",
    title: "Possessive Verbs",
    color: "#DB2777",
    level: "beginner",
    rules: [
      {
        rule: "HAVE / HAS — to show possession (present)",
        structure: "I/You/We/They + have  |  He/She/It + has",
        examples: [
          "I have a new bicycle — I got it for my birthday.",
          "She has two brothers and one younger sister.",
        ],
      },
      {
        rule: "HAD — possession in the past",
        structure: "subject + had + noun",
        examples: [
          "He had a dog when he was a child.",
          "They had a small house near the river long ago.",
        ],
      },
      {
        rule: "HAVE GOT / HAS GOT — informal possession (common in British English)",
        structure: "I/You/We/They + have got  |  He/She/It + has got",
        examples: [
          "I've got a headache — I need to rest.",
          "She's got a beautiful garden full of flowers.",
        ],
      },
    ],
  },
  {
    id: "bg-wh-questions",
    title: "WH-Questions",
    color: "#0891B2",
    level: "beginner",
    rules: [
      {
        rule: "WHO — asking about a person  /  WHAT — asking about a thing or information",
        structure: "Who/What + auxiliary + subject + verb?",
        examples: [
          "Who is your best friend at school?",
          "What is your favorite subject at school?",
        ],
      },
      {
        rule: "WHERE / WHEN / WHY / HOW — place, time, reason, manner",
        structure: "Wh-word + auxiliary + subject + verb?",
        examples: [
          "Where do you live? — I live in Quetta.",
          "How do you go to school? — I take the bus.",
        ],
      },
      {
        rule: "WHICH — asking about a choice between options",
        structure: "Which + noun + auxiliary + subject + verb?",
        examples: [
          "Which color do you prefer — blue or green?",
          "Which bag is yours — the big one or the small one?",
        ],
      },
    ],
  },
  {
    id: "bg-possessive-pronouns",
    title: "Possessive Pronouns",
    color: "#059669",
    level: "beginner",
    rules: [
      {
        rule: "Possessive pronouns — replace a possessive adjective + noun (NO noun after)",
        structure: "mine, yours, his, hers, ours, theirs",
        examples: [
          "This is my book. → This book is mine.",
          "Is this your pen? → Is this pen yours?",
        ],
      },
      {
        rule: "Using possessive pronouns to avoid repetition",
        structure: "subject + possessive pronoun (stands alone)",
        examples: [
          "My bag is red. Hers is blue.",
          "Our house is big. Theirs is even bigger.",
        ],
      },
    ],
  },
  {
    id: "bg-may",
    title: "Usages of May",
    color: "#D97706",
    level: "beginner",
    rules: [
      {
        rule: "MAY — asking for formal permission",
        structure: "May + I + base verb?",
        examples: [
          "May I come in, please?",
          "May I use your phone for a moment?",
        ],
      },
      {
        rule: "MAY — possibility (maybe, perhaps)",
        structure: "subject + may + base verb",
        examples: [
          "It may rain later — bring an umbrella just in case.",
          "She may be at home — try calling her.",
        ],
      },
      {
        rule: "MAY NOT — negative possibility",
        structure: "subject + may not + base verb",
        examples: [
          "He may not come to the party tonight.",
          "They may not have enough time to finish.",
        ],
      },
    ],
  },
  {
    id: "bg-present-continuous",
    title: "Present Continuous Tense",
    color: "#DC2626",
    level: "beginner",
    rules: [
      {
        rule: "Present Continuous — action happening right now",
        structure: "subject + is/am/are + V-ing",
        examples: [
          "She is reading a book right now.",
          "They are playing football in the park.",
        ],
      },
      {
        rule: "Negative form  |  Question form",
        structure:
          "subject + is/am/are + not + V-ing  |  Is/Am/Are + subject + V-ing?",
        examples: [
          "He isn't watching TV — he is sleeping.",
          "Are you listening to me carefully?",
        ],
      },
    ],
  },
  {
    id: "bg-imperatives",
    title: "Imperatives",
    color: "#7C3AED",
    level: "beginner",
    rules: [
      {
        rule: "Positive imperative — giving commands, instructions, advice",
        structure: "Base verb + (object/complement)",
        examples: [
          "Open your books to page twenty.",
          "Please sit down and be quiet, everyone.",
        ],
      },
      {
        rule: "Negative imperative — telling someone NOT to do something",
        structure: "Don't + base verb",
        examples: [
          "Don't touch that — it's very hot!",
          "Don't run in the corridors of the school.",
        ],
      },
      {
        rule: "Let's — imperative with 'us' (making suggestions together)",
        structure: "Let's + base verb",
        examples: [
          "Let's go for a walk in the park this evening.",
          "Let's study together after school today.",
        ],
      },
    ],
  },
  {
    id: "bg-adj-order",
    title: "Orders of Adj.",
    color: "#DB2777",
    level: "beginner",
    rules: [
      {
        rule: "Adjective order: Opinion → Size → Age → Shape → Color → Origin → Material → Purpose",
        structure:
          "opinion + size + age + shape + color + origin + material + noun",
        examples: [
          "She has a beautiful long black leather bag.",
          "He bought a lovely small old round wooden table.",
        ],
      },
      {
        rule: "Most common at beginner level: Opinion + Size + Color + Noun",
        structure: "opinion + size + color + noun",
        examples: [
          "She has a nice big red car.",
          "They live in a beautiful small white house.",
        ],
      },
    ],
  },
  {
    id: "bg-simple-future",
    title: "Simple Future Tense",
    color: "#0891B2",
    level: "beginner",
    rules: [
      {
        rule: "WILL — spontaneous decisions, promises, predictions",
        structure: "subject + will + base verb",
        examples: [
          "I will help you with your homework tonight.",
          "It will be sunny and warm tomorrow.",
        ],
      },
      {
        rule: "Negative: won't  |  Question form: Will + subject?",
        structure:
          "subject + won't + base verb  |  Will + subject + base verb?",
        examples: [
          "She won't be late — she always arrives on time.",
          "Will you come to my party on Saturday?",
        ],
      },
    ],
  },
  {
    id: "bg-going-to",
    title: "Future: Going To",
    color: "#059669",
    level: "beginner",
    rules: [
      {
        rule: "GOING TO — planned intentions and decisions already made",
        structure: "subject + is/am/are + going to + base verb",
        examples: [
          "I am going to visit my grandparents this weekend.",
          "They are going to buy a new house next year.",
        ],
      },
      {
        rule: "GOING TO — predictions based on present visible evidence",
        structure: "subject + is/am/are + going to + base verb",
        examples: [
          "Look at those dark clouds — it's going to rain very soon.",
          "He's going to fall — be careful!",
        ],
      },
      {
        rule: "Negative form",
        structure: "subject + is/am/are + not going to + base verb",
        examples: [
          "I'm not going to eat fast food anymore.",
          "She isn't going to apply for that job.",
        ],
      },
    ],
  },
  {
    id: "bg-simple-present",
    title: "Simple Present Tense",
    color: "#D97706",
    level: "beginner",
    rules: [
      {
        rule: "Simple Present — habits, routines, facts, general truths",
        structure: "I/You/We/They + base verb  |  He/She/It + verb + s/es",
        examples: [
          "I wake up at 7 o'clock every morning.",
          "She works at a hospital — she is a nurse.",
        ],
      },
      {
        rule: "Negative: don't / doesn't  |  Question: Do / Does",
        structure:
          "subject + don't/doesn't + base verb  |  Do/Does + subject + base verb?",
        examples: [
          "I don't like spicy food at all.",
          "Does she live near the school?",
        ],
      },
    ],
  },
  {
    id: "bg-non-progressive",
    title: "Non-Progressive Verbs",
    color: "#DC2626",
    level: "beginner",
    rules: [
      {
        rule: "Non-progressive (stative) verbs are NOT used in the -ing form",
        structure: "subject + stative verb (simple tense only — NO continuous)",
        examples: [
          "I understand you. (NOT: I am understanding you.)",
          "She wants a new phone. (NOT: She is wanting a new phone.)",
        ],
      },
      {
        rule: "Mental states: know, think, believe, remember, forget",
        structure: "subject + mental verb (present simple)",
        examples: [
          "He knows the answer to that question.",
          "I don't remember her name — sorry!",
        ],
      },
      {
        rule: "Emotions: love, like, hate, fear, prefer, need, want",
        structure: "subject + emotion verb (present simple)",
        examples: [
          "They love playing in the park after school.",
          "She needs help with her assignment.",
        ],
      },
    ],
  },
  {
    id: "bg-adv-frequency",
    title: "Adverbs of Frequency",
    color: "#7C3AED",
    level: "beginner",
    rules: [
      {
        rule: "Adverbs of frequency — always, usually, often, sometimes, rarely, never",
        structure:
          "subject + adverb + main verb  (before main verb, after 'be')",
        examples: [
          "She always drinks coffee in the morning.",
          "He is never late for class.",
        ],
      },
      {
        rule: "Position: BEFORE the main verb, AFTER 'be'",
        structure:
          "subject + [be] + adverb  OR  subject + adverb + [main verb]",
        examples: [
          "I sometimes go for a walk after dinner.",
          "They are usually very helpful and friendly.",
        ],
      },
      {
        rule: "HOW OFTEN questions",
        structure: "How often + do/does + subject + verb?",
        examples: [
          "How often do you exercise? — I usually go three times a week.",
          "How often does she call her parents? — She calls them every day.",
        ],
      },
    ],
  },
  {
    id: "bg-adv-manner",
    title: "Adverbs of Manner",
    color: "#DB2777",
    level: "beginner",
    rules: [
      {
        rule: "Adverbs of manner — describe HOW an action is done (usually after verb/object)",
        structure: "subject + verb + adverb of manner",
        examples: [
          "She speaks English fluently and confidently.",
          "He ran quickly to catch the school bus.",
        ],
      },
      {
        rule: "Forming adverbs — adjective + LY",
        structure: "slow → slowly  |  careful → carefully  |  quiet → quietly",
        examples: [
          "Please walk quietly — the baby is sleeping.",
          "She smiled happily when she heard the good news.",
        ],
      },
      {
        rule: "Irregular adverbs — good → well  /  fast → fast  /  hard → hard",
        structure: "subject + verb + irregular adverb",
        examples: [
          "He plays football very well — he could be a professional.",
          "She works very hard every single day.",
        ],
      },
    ],
  },
  {
    id: "bg-pc-future",
    title: "Present Continuous with Future Meaning",
    color: "#0891B2",
    level: "beginner",
    rules: [
      {
        rule: "Present Continuous for future — fixed, arranged plans",
        structure: "subject + is/am/are + V-ing + future time expression",
        examples: [
          "I am meeting my friend tomorrow afternoon.",
          "We are having a party this Friday evening.",
        ],
      },
      {
        rule: "Difference: GOING TO (intention) vs Present Continuous (arranged appointment)",
        structure:
          "I'm going to study. (intention)  vs  I'm studying with Ali at 5. (appointment)",
        examples: [
          "She is flying to London next Monday — the ticket is already booked.",
          "They are starting a new project next week — everything is organised.",
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LEVEL ONE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "l1-to-be",
    title: "To Be Verbs (Present & Past)",
    color: "#7C3AED",
    level: 1,
    rules: [
      {
        rule: "To Be — Present: am / is / are",
        structure: "I + am  |  He/She/It + is  |  You/We/They + are",
        examples: [
          "I am a student at this school.",
          "She is very happy today — it's her birthday.",
        ],
      },
      {
        rule: "To Be — Past: was / were",
        structure: "I/He/She/It + was  |  You/We/They + were",
        examples: [
          "He was very tired after the long journey.",
          "We were at home all day yesterday — we didn't go out.",
        ],
      },
      {
        rule: "Negatives: isn't / aren't / wasn't / weren't  |  Questions: Is/Are/Was/Were?",
        structure: "subject + wasn't/weren't  |  Was/Were + subject?",
        examples: [
          "She isn't at school today — she is sick.",
          "Was he at the meeting yesterday morning?",
        ],
      },
    ],
  },
  {
    id: "l1-had",
    title: "Had",
    color: "#DB2777",
    level: 1,
    rules: [
      {
        rule: "HAD — past tense of HAVE (possession in the past)",
        structure: "subject + had + noun",
        examples: [
          "She had a beautiful garden when she lived in the countryside.",
          "I had a dog named Max when I was a child.",
        ],
      },
      {
        rule: "HAD — past experience or situation",
        structure: "subject + had + noun (experience)",
        examples: [
          "We had a wonderful time at the beach last summer.",
          "He had a headache all day long yesterday.",
        ],
      },
      {
        rule: "HAD — negative: didn't have",
        structure: "subject + didn't have + noun",
        examples: [
          "I didn't have enough money to buy the book.",
          "She didn't have time to eat breakfast before school.",
        ],
      },
    ],
  },
  {
    id: "l1-regular-irregular",
    title: "Regular & Irregular Verbs",
    color: "#0891B2",
    level: 1,
    rules: [
      {
        rule: "Regular verbs — add -ED in past simple and past participle",
        structure:
          "base form + -ed  (walk → walked, play → played, clean → cleaned)",
        examples: [
          "She walked to school because she missed the bus.",
          "They played football after school yesterday.",
        ],
      },
      {
        rule: "Regular verbs — spelling rules: double consonant / drop e / y → ied",
        structure: "stop → stopped  |  live → lived  |  study → studied",
        examples: [
          "He stopped the car at the traffic light.",
          "She studied all night for the important exam.",
        ],
      },
      {
        rule: "Irregular verbs — different past simple form (must be memorized)",
        structure:
          "go → went  |  eat → ate  |  come → came  |  see → saw  |  take → took",
        examples: [
          "We went to the cinema and saw a great film.",
          "She took her umbrella because it was raining.",
        ],
      },
    ],
  },
  {
    id: "l1-simple-past",
    title: "Simple Past Tense",
    color: "#059669",
    level: 1,
    rules: [
      {
        rule: "Simple Past — completed actions at a specific past time",
        structure: "subject + V2 (past form)",
        examples: [
          "She visited her grandmother last Sunday afternoon.",
          "They watched a movie together after dinner.",
        ],
      },
      {
        rule: "Negative: didn't + base verb  |  Question: Did + subject + base verb?",
        structure:
          "subject + didn't + base verb  |  Did + subject + base verb?",
        examples: [
          "I didn't go to school yesterday because I was sick.",
          "Did you enjoy the party last night?",
        ],
      },
    ],
  },
  {
    id: "l1-adj-quantity",
    title: "Adj. of Quantity",
    color: "#D97706",
    level: 1,
    rules: [
      {
        rule: "SOME — for positive statements (countable & uncountable)",
        structure: "some + noun (positive sentences)",
        examples: [
          "There are some apples in the basket on the table.",
          "She drank some water after her run.",
        ],
      },
      {
        rule: "ANY — for questions and negatives",
        structure: "any + noun (questions and negatives)",
        examples: [
          "Is there any milk left in the fridge?",
          "I don't have any money with me right now.",
        ],
      },
      {
        rule: "NO — none at all (replaces 'not any')",
        structure: "no + noun (= not any)",
        examples: [
          "There is no sugar in this coffee — it's too bitter.",
          "We have no time left — we must leave now.",
        ],
      },
    ],
  },
  {
    id: "l1-adv-manner",
    title: "Adverbs of Manner",
    color: "#DC2626",
    level: 1,
    rules: [
      {
        rule: "Adverbs of manner — describe how an action is performed",
        structure: "verb + adverb of manner (often at end of clause)",
        examples: [
          "She answered all the questions correctly.",
          "He drives very carefully on rainy days.",
        ],
      },
      {
        rule: "Formation: adjective + LY",
        structure:
          "quiet → quietly  |  slow → slowly  |  beautiful → beautifully",
        examples: [
          "The children sang beautifully at the school concert.",
          "Please speak slowly so everyone can understand.",
        ],
      },
    ],
  },
  {
    id: "l1-wh-questions",
    title: "WH-Questions",
    color: "#7C3AED",
    level: 1,
    rules: [
      {
        rule: "WH-questions with BE (past and present)",
        structure: "Wh-word + was/were + subject?",
        examples: [
          "Where were you last night? — I was at home.",
          "Who was your teacher in primary school?",
        ],
      },
      {
        rule: "WH-questions with DID (simple past)",
        structure: "Wh-word + did + subject + base verb?",
        examples: [
          "What did you eat for lunch today?",
          "When did she arrive at the airport?",
        ],
      },
      {
        rule: "HOW MUCH / HOW MANY / HOW LONG / HOW OFTEN",
        structure: "How + adverb/adjective + did + subject + verb?",
        examples: [
          "How long did the film last? — About two hours.",
          "How many people came to the wedding?",
        ],
      },
    ],
  },
  {
    id: "l1-present-continuous",
    title: "Present Continuous Tense",
    color: "#DB2777",
    level: 1,
    rules: [
      {
        rule: "Present Continuous — action happening now or around now",
        structure: "subject + is/am/are + V-ing",
        examples: [
          "I am studying English grammar right now.",
          "She is cooking dinner in the kitchen.",
        ],
      },
      {
        rule: "Present Continuous — temporary situation (not permanent)",
        structure: "subject + is/am/are + V-ing (temporary)",
        examples: [
          "He is staying with his uncle this week.",
          "They are living in an apartment while building their house.",
        ],
      },
      {
        rule: "Contrast: Simple Present (habit) vs Present Continuous (now)",
        structure: "always (habit) vs right now (continuous)",
        examples: [
          "She usually drinks tea, but today she is drinking coffee.",
          "He walks to school every day, but today he is taking the bus.",
        ],
      },
    ],
  },
  {
    id: "l1-preposition",
    title: "Preposition",
    color: "#0891B2",
    level: 1,
    rules: [
      {
        rule: "Prepositions of TIME: at, on, in",
        structure: "at + time  |  on + day/date  |  in + month/year/season",
        examples: [
          "The class starts at 8 o'clock on Monday morning.",
          "She was born in April, in the year 2005.",
        ],
      },
      {
        rule: "Prepositions of PLACE: at, on, in, under, next to, between, behind",
        structure: "preposition + place noun",
        examples: [
          "The cat is under the table near the window.",
          "The school is between the bank and the post office.",
        ],
      },
      {
        rule: "Prepositions of MOVEMENT: to, from, into, out of, through, across",
        structure: "verb of movement + preposition + place",
        examples: [
          "She walked across the street to the bus stop.",
          "He ran into the building to escape from the rain.",
        ],
      },
    ],
  },
  {
    id: "l1-past-continuous",
    title: "Past Continuous Tense",
    color: "#059669",
    level: 1,
    rules: [
      {
        rule: "Past Continuous — action in progress at a specific past time",
        structure: "subject + was/were + V-ing",
        examples: [
          "At 8 PM last night, I was watching TV with my family.",
          "They were playing outside when it started to rain.",
        ],
      },
      {
        rule: "Past Continuous interrupted by Simple Past — using WHEN",
        structure: "was/were + V-ing + when + simple past",
        examples: [
          "She was sleeping when the phone rang loudly.",
          "I was having breakfast when he arrived at the door.",
        ],
      },
      {
        rule: "Two parallel actions in the past — using WHILE",
        structure: "while + was/were + V-ing, subject + was/were + V-ing",
        examples: [
          "While I was studying, she was watching TV.",
          "He was reading while she was cooking dinner.",
        ],
      },
    ],
  },
  {
    id: "l1-past-ability",
    title: "Past Ability",
    color: "#D97706",
    level: 1,
    rules: [
      {
        rule: "COULD — general ability in the past",
        structure: "subject + could + base verb",
        examples: [
          "When I was young, I could run very fast.",
          "She could speak three languages before she was ten.",
        ],
      },
      {
        rule: "COULDN'T — inability in the past",
        structure: "subject + couldn't + base verb",
        examples: [
          "I couldn't swim when I was five years old.",
          "He couldn't find his keys anywhere in the house.",
        ],
      },
      {
        rule: "WAS / WERE ABLE TO — specific achievement (managed to do it once)",
        structure: "subject + was/were able to + base verb",
        examples: [
          "She was able to finish the exam just before time was up.",
          "They were able to escape the building before the fire spread.",
        ],
      },
    ],
  },
  {
    id: "l1-present-obligations",
    title: "Present Obligations",
    color: "#DC2626",
    level: 1,
    rules: [
      {
        rule: "MUST — strong personal obligation or necessity",
        structure: "subject + must + base verb",
        examples: [
          "You must study hard if you want to pass the exam.",
          "I must call my mother tonight — she's been waiting.",
        ],
      },
      {
        rule: "HAVE TO — external obligation (rules, laws, requirements)",
        structure: "subject + have to / has to + base verb",
        examples: [
          "Students have to wear the school uniform every day.",
          "She has to submit the assignment by Friday.",
        ],
      },
      {
        rule: "MUSTN'T — prohibition (not permitted at all)",
        structure: "subject + mustn't + base verb",
        examples: [
          "You mustn't use your phone during the exam.",
          "We mustn't make noise in the library.",
        ],
      },
    ],
  },
  {
    id: "l1-yes-no-questions",
    title: "Yes/No Questions",
    color: "#7C3AED",
    level: 1,
    rules: [
      {
        rule: "Yes/No questions with BE — present and past",
        structure: "Is/Am/Are/Was/Were + subject + complement?",
        examples: [
          "Is she your sister? — Yes, she is. / No, she isn't.",
          "Was he at the meeting yesterday? — Yes, he was.",
        ],
      },
      {
        rule: "Yes/No questions with DO / DOES — simple present",
        structure: "Do/Does + subject + base verb?",
        examples: [
          "Do you like spicy food? — No, I don't.",
          "Does he work here? — Yes, he does.",
        ],
      },
      {
        rule: "Yes/No questions with DID — simple past",
        structure: "Did + subject + base verb?",
        examples: [
          "Did you enjoy the concert last night? — Yes, I did.",
          "Did she pass the exam? — No, she didn't.",
        ],
      },
    ],
  },
  {
    id: "l1-present-perfect",
    title: "Present Perfect Tense",
    color: "#DB2777",
    level: 1,
    rules: [
      {
        rule: "Present Perfect — past experience with a present connection",
        structure: "subject + have/has + V3 (past participle)",
        examples: [
          "I have visited Paris three times in my life.",
          "She has finished her homework already.",
        ],
      },
      {
        rule: "Negative: haven't/hasn't + V3  |  Question: Have/Has + subject + V3?",
        structure: "subject + haven't/hasn't + V3  |  Have/Has + subject + V3?",
        examples: [
          "He hasn't eaten anything since this morning.",
          "Have you ever tried sushi before?",
        ],
      },
    ],
  },
  {
    id: "l1-gone-been",
    title: "Gone & Been",
    color: "#0891B2",
    level: 1,
    rules: [
      {
        rule: "GONE — the person has left and has NOT yet returned",
        structure: "subject + has/have + gone + to + place",
        examples: [
          "She has gone to the market — she'll be back soon.",
          "He has gone to Dubai for a business trip.",
        ],
      },
      {
        rule: "BEEN — the person went somewhere and has already come back",
        structure: "subject + has/have + been + to + place",
        examples: [
          "I have been to London twice — it's a beautiful city.",
          "She has been to the doctor and is back home now.",
        ],
      },
    ],
  },
  {
    id: "l1-ppt-markers",
    title: "Present Perfect (yet, just, still, already)",
    color: "#059669",
    level: 1,
    rules: [
      {
        rule: "ALREADY — sooner than expected (positive sentences)",
        structure: "subject + have/has + already + V3",
        examples: [
          "She has already eaten — she's not hungry anymore.",
          "I have already seen this film — let's watch something else.",
        ],
      },
      {
        rule: "YET — by now (questions and negatives)",
        structure:
          "subject + haven't/hasn't + V3 + yet  |  Have/Has + subject + V3 + yet?",
        examples: [
          "Have you finished your homework yet?",
          "He hasn't arrived yet — we should call him.",
        ],
      },
      {
        rule: "JUST — very recently, a moment ago",
        structure: "subject + have/has + just + V3",
        examples: [
          "I have just had breakfast — I'm still full.",
          "She has just called me — she's on her way here.",
        ],
      },
      {
        rule: "STILL — continuing or not yet done (negative = still hasn't)",
        structure: "subject + still + haven't/hasn't + V3",
        examples: [
          "He still hasn't replied to my message from yesterday.",
          "They still haven't decided where to go for the holiday.",
        ],
      },
    ],
  },
  {
    id: "l1-comparison",
    title: "Comparison of Adj.",
    color: "#D97706",
    level: 1,
    rules: [
      {
        rule: "Comparative — comparing two things",
        structure: "adjective-er / more + adjective + than",
        examples: [
          "She is taller than her brother by ten centimetres.",
          "This exam was more difficult than the last one.",
        ],
      },
      {
        rule: "Superlative — comparing within a group",
        structure: "the + adjective-est / the most + adjective + in/of",
        examples: [
          "He is the tallest student in the whole class.",
          "This is the most interesting book I have ever read.",
        ],
      },
      {
        rule: "Irregular: good → better → best  /  bad → worse → worst",
        structure: "subject + be + irregular comparative/superlative",
        examples: [
          "Her English is better than mine — she practices every day.",
          "This is the worst weather we have had all year.",
        ],
      },
    ],
  },
  {
    id: "l1-past-obligation",
    title: "Past Obligation",
    color: "#DC2626",
    level: 1,
    rules: [
      {
        rule: "HAD TO — obligation that existed in the past",
        structure: "subject + had to + base verb",
        examples: [
          "I had to wake up very early to catch the morning flight.",
          "She had to study all weekend for the final exam.",
        ],
      },
      {
        rule: "DIDN'T HAVE TO — no obligation in the past (optional)",
        structure: "subject + didn't have to + base verb",
        examples: [
          "We didn't have to wear a uniform at our old school.",
          "He didn't have to pay for the meal — his friend treated him.",
        ],
      },
      {
        rule: "WASN'T / WEREN'T ALLOWED TO — prohibition in the past",
        structure: "subject + wasn't/weren't allowed to + base verb",
        examples: [
          "We weren't allowed to use our phones during class.",
          "She wasn't allowed to stay out after 10 PM.",
        ],
      },
    ],
  },
  {
    id: "l1-imperatives",
    title: "Imperatives",
    color: "#7C3AED",
    level: 1,
    rules: [
      {
        rule: "Positive imperative — instruction, direction, advice",
        structure: "Base verb + (object)",
        examples: [
          "Write your name at the top of the page.",
          "Always check your work before you hand it in.",
        ],
      },
      {
        rule: "Negative imperative — prohibition or warning",
        structure: "Don't + base verb",
        examples: [
          "Don't forget to bring your books to class tomorrow.",
          "Don't speak while your classmate is presenting.",
        ],
      },
    ],
  },
  {
    id: "l1-similes",
    title: "Similes",
    color: "#DB2777",
    level: 1,
    rules: [
      {
        rule: "Similes — comparisons using AS...AS or LIKE",
        structure:
          "subject + verb + as + adjective + as + noun  OR  like + noun",
        examples: [
          "She is as brave as a lion — nothing scares her.",
          "He sings like an angel — his voice is incredible.",
        ],
      },
      {
        rule: "Common similes with AS...AS",
        structure: "as + adjective + as + comparison noun",
        examples: [
          "The snow is as white as a sheet of paper.",
          "He is as strong as an ox — he can lift anything.",
        ],
      },
    ],
  },
  {
    id: "l1-indefinite-pronouns",
    title: "Indefinite Pronouns",
    color: "#0891B2",
    level: 1,
    rules: [
      {
        rule: "SOME- (something, someone, somewhere) — positive statements",
        structure: "something/someone/somewhere + verb",
        examples: [
          "Someone left their bag in the classroom.",
          "There is something strange about that old house.",
        ],
      },
      {
        rule: "ANY- (anything, anyone, anywhere) — questions and negatives",
        structure: "anything/anyone/anywhere + verb",
        examples: [
          "Has anyone seen my red pen?",
          "I didn't do anything wrong — I promise!",
        ],
      },
      {
        rule: "NO- (nothing, no one, nowhere) + EVERY- (everything, everyone, everywhere)",
        structure: "no-/every- + positive verb",
        examples: [
          "No one knew the answer to that difficult question.",
          "Everyone is welcome at this school.",
        ],
      },
    ],
  },
  {
    id: "l1-since-for",
    title: "Since & For",
    color: "#059669",
    level: 1,
    rules: [
      {
        rule: "FOR — used with a duration of time (how long)",
        structure: "have/has + V3 + for + period of time",
        examples: [
          "She has lived in this city for ten years.",
          "I have been waiting for nearly half an hour.",
        ],
      },
      {
        rule: "SINCE — used with a starting point (when it began)",
        structure: "have/has + V3 + since + point in time",
        examples: [
          "He has worked here since 2018.",
          "We haven't spoken since last Tuesday.",
        ],
      },
    ],
  },
  {
    id: "l1-determiners",
    title: "Determiners",
    color: "#D97706",
    level: 1,
    rules: [
      {
        rule: "Articles as determiners: a, an, the",
        structure: "a/an + singular countable  |  the + any noun",
        examples: [
          "I bought a new book. The book is very interesting.",
          "She is an actress — the most famous one in our country.",
        ],
      },
      {
        rule: "Quantifiers as determiners: some, any, much, many, few, little",
        structure: "determiner + noun",
        examples: [
          "There are many students in this class.",
          "She doesn't have much time left — she must hurry.",
        ],
      },
      {
        rule: "Demonstratives as determiners: this, that, these, those",
        structure: "this/that + singular  |  these/those + plural",
        examples: [
          "These exercises are quite challenging for beginners.",
          "That car parked outside belongs to my uncle.",
        ],
      },
    ],
  },


  // ═══════════════════════════════════════════════════════════════════════════
  // LEVEL TWO
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "l2-simple-past",
    title: "Simple Past Tense",
    color: "#7C3AED",
    level: 2,
    rules: [
      {
        rule: "Simple Past — completed actions with a definite past time",
        structure: "subject + V2 (regular: +ed / irregular: different form)",
        examples: [
          "She left the office at 5 PM sharp yesterday.",
          "They won the championship three years ago.",
        ],
      },
      {
        rule: "Negative: didn't + base verb  |  Question: Did + subject + base verb?",
        structure:
          "subject + didn't + base verb  |  Did + subject + base verb?",
        examples: [
          "He didn't study enough, so he failed the test.",
          "Did you understand everything the teacher explained?",
        ],
      },
    ],
  },
  {
    id: "l2-present-perfect",
    title: "Present Perfect Tense",
    color: "#DB2777",
    level: 2,
    rules: [
      {
        rule: "Present Perfect — experience, recent actions, situations from past to now",
        structure: "subject + have/has + V3",
        examples: [
          "I have never tried Indian food before — it looks delicious.",
          "She has worked here since she graduated from university.",
        ],
      },
      {
        rule: "EVER / NEVER — with present perfect for life experiences",
        structure:
          "Have/Has + subject + ever + V3?  |  subject + has/have + never + V3",
        examples: [
          "Have you ever ridden a horse before?",
          "He has never been to Europe — he hopes to go one day.",
        ],
      },
    ],
  },
  {
    id: "l2-present-perfect-continuous",
    title: "Present Perfect Continuous",
    color: "#0891B2",
    level: 2,
    rules: [
      {
        rule: "Present Perfect Continuous — action that started in the past and is still ongoing",
        structure: "subject + have/has + been + V-ing",
        examples: [
          "She has been studying for three hours without a break.",
          "It has been raining since early this morning.",
        ],
      },
      {
        rule: "Negative: hasn't/haven't been + V-ing  |  Question: Have/Has + subject + been + V-ing?",
        structure:
          "subject + haven't/hasn't + been + V-ing  |  Have/Has + subject + been + V-ing?",
        examples: [
          "He hasn't been sleeping well lately — he seems very tired.",
          "How long have you been waiting here?",
        ],
      },
    ],
  },
  {
    id: "l2-simple-future",
    title: "Simple Future",
    color: "#059669",
    level: 2,
    rules: [
      {
        rule: "WILL — predictions, promises, spontaneous decisions, offers",
        structure: "subject + will + base verb",
        examples: [
          "I think technology will change our lives dramatically.",
          "Wait here — I'll get you a glass of water.",
        ],
      },
      {
        rule: "GOING TO — planned intentions and predictions with present evidence",
        structure: "subject + is/am/are + going to + base verb",
        examples: [
          "She is going to start a new business next year.",
          "Be careful — you're going to spill that hot drink!",
        ],
      },
    ],
  },
  {
    id: "l2-past-cont-present-cont",
    title: "Past Cont. & Present Cont.",
    color: "#D97706",
    level: 2,
    rules: [
      {
        rule: "Present Continuous — happening right now or around this time",
        structure: "subject + is/am/are + V-ing",
        examples: [
          "She is preparing for her presentation right now.",
          "I am currently reading a very long novel.",
        ],
      },
      {
        rule: "Past Continuous — in progress at a specific moment in the past",
        structure: "subject + was/were + V-ing",
        examples: [
          "At midnight, they were still celebrating the New Year.",
          "She was working on her laptop when the power cut out.",
        ],
      },
      {
        rule: "Combined: Past Continuous (background) + Simple Past (interruption) — WHEN",
        structure: "was/were + V-ing + when + simple past",
        examples: [
          "I was washing the dishes when she called me.",
          "They were hiking when the storm suddenly started.",
        ],
      },
    ],
  },
  {
    id: "l2-want",
    title: "Usages of Want",
    color: "#DC2626",
    level: 2,
    rules: [
      {
        rule: "WANT + noun — desire for something",
        structure: "subject + want/wants + noun",
        examples: [
          "I want a cup of tea with milk and no sugar.",
          "She wants a new laptop for her studies.",
        ],
      },
      {
        rule: "WANT + to-infinitive — desire to do something",
        structure: "subject + want/wants + to + base verb",
        examples: [
          "He wants to become a professional architect.",
          "They want to travel to Japan next summer.",
        ],
      },
      {
        rule: "WANT + object + to-infinitive — desire someone else to do something",
        structure: "subject + want + object + to + base verb",
        examples: [
          "She wants her son to study harder this term.",
          "The manager wants us to submit the report by Friday.",
        ],
      },
    ],
  },
  {
    id: "l2-linking-verbs",
    title: "Linking Verbs",
    color: "#7C3AED",
    level: 2,
    rules: [
      {
        rule: "Linking verbs — connect subject to an adjective or noun (NOT action verbs)",
        structure: "subject + linking verb + adjective/noun",
        examples: [
          "She looks very tired today — she should rest.",
          "The soup smells delicious — what did you put in it?",
        ],
      },
      {
        rule: "Common linking verbs: be, seem, appear, become, feel, taste, look, smell, sound",
        structure: "subject + linking verb + adjective (NOT adverb)",
        examples: [
          "He seems happy about the exam results.",
          "The music sounds beautiful — who is playing?",
        ],
      },
      {
        rule: "BECOME — linking verb for change of state",
        structure: "subject + become/became + adjective/noun",
        examples: [
          "She became a doctor after eight years of studying.",
          "The situation became very complicated very quickly.",
        ],
      },
    ],
  },
  {
    id: "l2-too-enough",
    title: "Too + Adj. and Adj. + Enough",
    color: "#DB2777",
    level: 2,
    rules: [
      {
        rule: "TOO + adjective — excessive degree (causes a problem)",
        structure: "subject + be + too + adjective (+ to + base verb)",
        examples: [
          "He is too young to vote in the election.",
          "This box is too heavy to carry by myself.",
        ],
      },
      {
        rule: "Adjective + ENOUGH — sufficient degree (able to do something)",
        structure: "subject + be + adjective + enough (+ to + base verb)",
        examples: [
          "She is tall enough to reach the top shelf.",
          "Are you confident enough to speak in front of everyone?",
        ],
      },
      {
        rule: "NOT + adjective + ENOUGH — insufficient degree",
        structure: "subject + be + not + adjective + enough",
        examples: [
          "He isn't experienced enough for this senior position.",
          "The room isn't big enough for all of us to sit comfortably.",
        ],
      },
    ],
  },
  {
    id: "l2-obligation",
    title: "Obligation",
    color: "#0891B2",
    level: 2,
    rules: [
      {
        rule: "MUST — strong internal or personal obligation",
        structure: "subject + must + base verb",
        examples: [
          "We must respect our elders and our teachers.",
          "I must remember to pay the electricity bill today.",
        ],
      },
      {
        rule: "HAVE TO — external obligation from rules or authority",
        structure: "subject + have to / has to + base verb",
        examples: [
          "Drivers have to follow the speed limit on all roads.",
          "She has to get permission before leaving the school.",
        ],
      },
      {
        rule: "DON'T HAVE TO — no obligation (optional)",
        structure: "subject + don't/doesn't have to + base verb",
        examples: [
          "You don't have to attend — it's completely optional.",
          "She doesn't have to wear a uniform at her new job.",
        ],
      },
    ],
  },
  {
    id: "l2-ability",
    title: "Ability Expression (Can, Could, Able To)",
    color: "#059669",
    level: 2,
    rules: [
      {
        rule: "CAN — present ability",
        structure: "subject + can + base verb",
        examples: [
          "She can solve complex mathematical problems easily.",
          "I can understand Spanish but I can't speak it well.",
        ],
      },
      {
        rule: "COULD — past ability or polite requests",
        structure: "subject + could + base verb",
        examples: [
          "He could play chess by the age of seven.",
          "Could you explain that again more slowly, please?",
        ],
      },
      {
        rule: "BE ABLE TO — ability in all tenses (more formal)",
        structure: "subject + am/is/are/was/were + able to + base verb",
        examples: [
          "She was able to finish the project despite all the difficulties.",
          "Will you be able to come to the meeting on Thursday?",
        ],
      },
    ],
  },
  {
    id: "l2-tag-questions",
    title: "Tag Questions",
    color: "#D97706",
    level: 2,
    rules: [
      {
        rule: "Tag questions — positive statement + negative tag",
        structure: "positive statement + auxiliary + n't + subject pronoun?",
        examples: [
          "She is a great teacher, isn't she?",
          "They finished the work, didn't they?",
        ],
      },
      {
        rule: "Tag questions — negative statement + positive tag",
        structure: "negative statement + auxiliary + subject pronoun?",
        examples: [
          "He hasn't called yet, has he?",
          "You don't like spicy food, do you?",
        ],
      },
      {
        rule: "Special cases: I am → aren't I?  /  Let's → shall we?  /  Imperative → will you?",
        structure: "special statement + special tag",
        examples: [
          "I'm next in line, aren't I?",
          "Let's take a short break, shall we?",
        ],
      },
    ],
  },
  {
    id: "l2-similes",
    title: "Similes",
    color: "#DC2626",
    level: 2,
    rules: [
      {
        rule: "Similes — comparing using AS...AS",
        structure: "as + adjective + as + noun phrase",
        examples: [
          "She is as graceful as a swan when she dances.",
          "The room was as silent as a graveyard at midnight.",
        ],
      },
      {
        rule: "Similes — comparing using LIKE",
        structure: "subject + verb + like + noun/noun phrase",
        examples: [
          "He ran like the wind and won the race easily.",
          "She works like a machine — she never stops.",
        ],
      },
    ],
  },
  {
    id: "l2-rejoinders",
    title: "Rejoinders",
    color: "#7C3AED",
    level: 2,
    rules: [
      {
        rule: "Positive rejoinders — agreeing with positive statements",
        structure: "So + auxiliary + subject",
        examples: [
          '"I love Italian food." → "So do I!" (Me too)',
          '"She is very smart." → "So is her brother."',
        ],
      },
      {
        rule: "Negative rejoinders — agreeing with negative statements",
        structure: "Neither / Nor + auxiliary + subject",
        examples: [
          '"I don\'t like cold weather." → "Neither do I."',
          '"She can\'t swim." → "Nor can he."',
        ],
      },
      {
        rule: "Disagreeing rejoinders — But I do / But I don't",
        structure: "But + subject + auxiliary (opposite polarity)",
        examples: [
          '"I hate homework." → "But I don\'t — I find it helpful."',
          '"She doesn\'t enjoy cooking." → "But I do — I cook every day."',
        ],
      },
    ],
  },
  {
    id: "l2-reciprocal-pronouns",
    title: "Reciprocal Pronouns",
    color: "#DB2777",
    level: 2,
    rules: [
      {
        rule: "EACH OTHER — two people doing something mutually",
        structure: "subject (two) + verb + each other",
        examples: [
          "They looked at each other and started laughing.",
          "She and her best friend call each other every single day.",
        ],
      },
      {
        rule: "ONE ANOTHER — more than two people doing something mutually",
        structure: "subject (plural, more than two) + verb + one another",
        examples: [
          "The team members helped one another during the difficult project.",
          "In that small village, everyone knows one another very well.",
        ],
      },
    ],
  },
  {
    id: "l2-reflexive-pronouns",
    title: "Reflexive Pronouns",
    color: "#0891B2",
    level: 2,
    rules: [
      {
        rule: "Reflexive pronouns — when subject and object refer to the same person",
        structure:
          "myself / yourself / himself / herself / itself / ourselves / yourselves / themselves",
        examples: [
          "She hurt herself while playing football in the garden.",
          "He taught himself to play the guitar — no teacher needed.",
        ],
      },
      {
        rule: "BY + reflexive pronoun — doing something alone, without help",
        structure: "subject + verb + by + reflexive pronoun",
        examples: [
          "She lives by herself in a small apartment in the city.",
          "Did you cook all of this by yourself? It's amazing!",
        ],
      },
    ],
  },
  {
    id: "l2-used-to",
    title: "Past Habitual Actions (Used To)",
    color: "#059669",
    level: 2,
    rules: [
      {
        rule: "USED TO — past habits or states that no longer exist",
        structure: "subject + used to + base verb",
        examples: [
          "I used to play video games for hours every day.",
          "She used to live in the city, but now she lives in the countryside.",
        ],
      },
      {
        rule: "Negative: didn't use to  |  Question: Did + subject + use to?",
        structure:
          "subject + didn't use to + base verb  |  Did + subject + use to + base verb?",
        examples: [
          "He didn't use to like vegetables, but now he loves them.",
          "Did you use to have a pet when you were young?",
        ],
      },
    ],
  },
  {
    id: "l2-indirect-command",
    title: "Indirect Command / Request",
    color: "#D97706",
    level: 2,
    rules: [
      {
        rule: "Reporting commands — told / ordered + object + to-infinitive",
        structure: "said → told + object + to + base verb",
        examples: [
          '"Clean your room." → She told me to clean my room.',
          '"Stand up." → The officer ordered the soldiers to stand up.',
        ],
      },
      {
        rule: "Reporting requests — asked + object + to-infinitive",
        structure: "said → asked + object + to + base verb",
        examples: [
          '"Please help me." → She asked me to help her.',
          '"Could you open the window?" → He asked her to open the window.',
        ],
      },
      {
        rule: "Negative commands/requests — told/asked + object + NOT to + base verb",
        structure: "told/asked + object + not to + base verb",
        examples: [
          '"Don\'t be late." → She told him not to be late.',
          '"Please don\'t make noise." → He asked them not to make noise.',
        ],
      },
    ],
  },
  {
    id: "l2-reported-command",
    title: "Reported Command / Request",
    color: "#DC2626",
    level: 2,
    rules: [
      {
        rule: "Reported commands — change imperative using told/ordered",
        structure: "told / ordered / instructed + object + to + base verb",
        examples: [
          '"Leave immediately!" → The manager ordered everyone to leave the building.',
          '"Submit your forms by Monday." → She told the students to submit their forms.',
        ],
      },
      {
        rule: "Reported requests — change polite requests using asked/begged",
        structure: "asked / begged + object + to + base verb",
        examples: [
          '"Could you lend me some money?" → She asked him to lend her some money.',
          '"Please don\'t tell anyone." → He begged her not to tell anyone.',
        ],
      },
    ],
  },
  {
    id: "l2-participle-adj",
    title: "Participle Adjective",
    color: "#7C3AED",
    level: 2,
    rules: [
      {
        rule: "-ING adjective — describes the thing CAUSING the feeling",
        structure:
          "subject (thing) + be + V-ing adjective (boring, exciting, interesting, tiring)",
        examples: [
          "This film is very exciting — I can't stop watching it.",
          "The lecture was so boring that half the students fell asleep.",
        ],
      },
      {
        rule: "-ED adjective — describes the person EXPERIENCING the feeling",
        structure:
          "subject (person) + be + V-ed adjective (bored, excited, interested, tired)",
        examples: [
          "She felt very excited about her first trip abroad.",
          "I was bored during the long meeting — it never seemed to end.",
        ],
      },
      {
        rule: "Common pairs: interested/interesting  |  bored/boring  |  tired/tiring",
        structure:
          "-ING = causes the feeling  |  -ED = experiences the feeling",
        examples: [
          "The story is interesting. → I am interested in the story.",
          "The journey is tiring. → She is tired from the journey.",
        ],
      },
    ],
  },
  {
    id: "l2-advice",
    title: "Advices (Should)",
    color: "#DB2777",
    level: 2,
    rules: [
      {
        rule: "SHOULD — giving advice or a recommendation",
        structure: "subject + should + base verb",
        examples: [
          "You should drink more water every day — it's good for you.",
          "She should see a doctor if her headache continues.",
        ],
      },
      {
        rule: "SHOULDN'T — advising against doing something",
        structure: "subject + shouldn't + base verb",
        examples: [
          "You shouldn't eat so much junk food — it's bad for your health.",
          "He shouldn't stay up so late the night before an exam.",
        ],
      },
      {
        rule: "OUGHT TO — similar to should, slightly more formal",
        structure: "subject + ought to + base verb",
        examples: [
          "We ought to be more respectful toward older people.",
          "You ought to apologize to her — what you said was unkind.",
        ],
      },
    ],
  },
  {
    id: "l2-relative-clause",
    title: "Relative Clause (Who, That, Which)",
    color: "#0891B2",
    level: 2,
    rules: [
      {
        rule: "WHO — defining relative clause for people",
        structure: "noun (person) + who + verb",
        examples: [
          "The doctor who treated me was very professional and kind.",
          "I know a girl who speaks six different languages.",
        ],
      },
      {
        rule: "WHICH — defining relative clause for things and animals",
        structure: "noun (thing/animal) + which + verb",
        examples: [
          "The car which she bought last year is already broken.",
          "I read a book which changed my whole perspective on life.",
        ],
      },
      {
        rule: "THAT — defining relative clause for both people and things",
        structure: "noun (person or thing) + that + verb",
        examples: [
          "The student that won the prize worked very hard all year.",
          "This is the book that everyone is talking about right now.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LEVEL 3
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "l3-relative-clause",
    title: "Relative Clause",
    color: "#7C3AED",
    level: 3,
    rules: [
      {
        rule: "WHO — for people (subject or object)",
        structure: "noun + who + verb",
        examples: [
          "The boy who sits next to me is my best friend.",
          "I know a doctor who works at City Hospital.",
        ],
      },
      {
        rule: "WHICH — for things or animals",
        structure: "noun + which + verb",
        examples: [
          "The book which I bought last week is very interesting.",
          "She wore a dress which was completely red.",
        ],
      },
      {
        rule: "THAT — for people or things (defining clauses)",
        structure: "noun + that + verb",
        examples: [
          "The student that won the prize is my classmate.",
          "The movie that we watched yesterday was quite boring.",
        ],
      },
      {
        rule: "WHOSE — possession",
        structure: "noun + whose + noun + verb",
        examples: [
          "The girl whose bag was stolen called the police.",
          "He is a writer whose books are very famous.",
        ],
      },
      {
        rule: "WHERE — for places",
        structure: "place noun + where + subject + verb",
        examples: [
          "This is the house where I was born.",
          "The park where we usually play is nearby.",
        ],
      },
    ],
  },
  {
    id: "l3-gerund",
    title: "Gerund",
    color: "#DB2777",
    level: 3,
    rules: [
      {
        rule: "Gerund as subject of a sentence",
        structure: "Verb-ing + main verb",
        examples: [
          "Swimming is a great form of exercise.",
          "Reading books improves your vocabulary.",
        ],
      },
      {
        rule: "Gerund as object of a verb",
        structure: "subject + verb + verb-ing",
        examples: [
          "I enjoy cooking dinner at home.",
          "She stopped talking when the teacher arrived.",
        ],
      },
      {
        rule: "Gerund after prepositions",
        structure: "preposition + verb-ing",
        examples: [
          "He is good at playing chess.",
          "She is interested in learning French.",
        ],
      },
      {
        rule: "Common verbs followed by gerund: enjoy, avoid, finish, mind, suggest, keep, deny",
        structure: "verb + verb-ing",
        examples: [
          "They finished cleaning the room before guests arrived.",
          "He denied stealing the money.",
        ],
      },
    ],
  },
  {
    id: "l3-noun-clause",
    title: "Noun Clause",
    color: "#0891B2",
    level: 3,
    rules: [
      {
        rule: "THAT-clause — as object of a verb",
        structure: "subject + verb + that + subject + verb",
        examples: [
          "I think that he is right.",
          "She knows that we are coming to the party.",
        ],
      },
      {
        rule: "WH-clause — as object of a verb",
        structure: "subject + verb + wh-word + subject + verb (no inversion)",
        examples: [
          "I don't know where she lives.",
          "Tell me what you want for dinner.",
        ],
      },
      {
        rule: "IF / WHETHER — embedded yes/no question",
        structure: "subject + verb + if/whether + subject + verb",
        examples: [
          "I'm not sure if he will come tonight.",
          "She asked whether the store was still open.",
        ],
      },
    ],
  },
  {
    id: "l3-time-clause",
    title: "Time Clause",
    color: "#059669",
    level: 3,
    rules: [
      {
        rule: "WHEN — at the time that something happens",
        structure: "When + subject + verb, main clause",
        examples: [
          "When I was a child, I loved playing outside.",
          "Call me when you arrive at the station.",
        ],
      },
      {
        rule: "WHILE — during the time that (two actions simultaneously)",
        structure: "While + subject + was/were + V-ing, main clause",
        examples: [
          "While she was cooking, he set the table.",
          "I fell asleep while I was reading the book.",
        ],
      },
      {
        rule: "BEFORE — earlier than another action",
        structure: "Before + subject + verb, main clause",
        examples: [
          "Before you leave, please turn off all the lights.",
          "She had breakfast before she went to school.",
        ],
      },
      {
        rule: "AFTER — following another action",
        structure: "After + subject + verb, main clause",
        examples: [
          "After he finished dinner, he watched TV.",
          "We went home after the concert ended.",
        ],
      },
      {
        rule: "AS SOON AS — immediately when something happens",
        structure: "As soon as + subject + verb, main clause",
        examples: [
          "As soon as she heard the news, she called her mother.",
          "I'll text you as soon as I find out the result.",
        ],
      },
      {
        rule: "UNTIL — up to the point in time when",
        structure: "main clause + until + subject + verb",
        examples: [
          "She waited patiently until the rain stopped.",
          "Don't go to bed until you finish your homework.",
        ],
      },
    ],
  },
  {
    id: "l3-indirect-questions",
    title: "Indirect Questions",
    color: "#D97706",
    level: 3,
    rules: [
      {
        rule: "Indirect YES/NO questions — using if / whether",
        structure: "Could you tell me + if/whether + subject + verb?",
        examples: [
          "Is the bank open? → Could you tell me if the bank is open?",
          "Did she call? → Do you know whether she called?",
        ],
      },
      {
        rule: "Indirect WH-questions — no question inversion",
        structure: "Can you tell me + wh-word + subject + verb? (no inversion)",
        examples: [
          "Where does he live? → Can you tell me where he lives?",
          "What time does the train leave? → Do you know what time the train leaves?",
        ],
      },
      {
        rule: "Common introductory phrases for indirect questions",
        structure: "I wonder / I don't know / Could you tell me / Do you know",
        examples: [
          "I wonder why she left so early last night.",
          "I don't know how much the ticket costs.",
        ],
      },
    ],
  },
  {
    id: "l3-conditional",
    title: "Conditional Types 1 & 2",
    color: "#DC2626",
    level: 3,
    rules: [
      {
        rule: "Type 1 — Real / likely future condition",
        structure: "If + present simple, will + base verb",
        examples: [
          "If it rains tomorrow, we will stay inside.",
          "If you study hard, you will pass the exam.",
        ],
      },
      {
        rule: "Type 1 — Negative form",
        structure: "If + subject + don't/doesn't + verb, will + verb",
        examples: [
          "If she doesn't hurry, she will miss the bus.",
          "If they don't practice, they won't win the match.",
        ],
      },
      {
        rule: "Type 2 — Unreal / imaginary present or future condition",
        structure: "If + past simple, would + base verb",
        examples: [
          "If I had a car, I would drive to work every day.",
          "If she were taller, she would be a basketball player.",
        ],
      },
      {
        rule: "Type 2 — Using WERE for all subjects (formal/correct)",
        structure: "If + subject + were + adj/noun, would + base verb",
        examples: [
          "If I were you, I would apologize immediately.",
          "If he were more careful, he wouldn't make so many mistakes.",
        ],
      },
    ],
  },
  {
    id: "l3-emphatic-pronouns",
    title: "Emphatic Pronouns",
    color: "#7C3AED",
    level: 3,
    rules: [
      {
        rule: "Emphatic pronouns — stress that the subject did something alone",
        structure:
          "subject + verb + object + myself / yourself / himself / herself / itself / ourselves / yourselves / themselves",
        examples: [
          "I made this cake myself — no one helped me.",
          "She fixed the car herself, which was impressive.",
        ],
      },
      {
        rule: "Emphatic pronoun directly after subject — for stronger emphasis",
        structure: "subject + myself/yourself/himself... + verb + object",
        examples: [
          "He himself admitted the mistake in front of everyone.",
          "The president himself attended the ceremony.",
        ],
      },
      {
        rule: "BY + reflexive pronoun — alone, without any help",
        structure: "subject + verb + by + myself / yourself / himself...",
        examples: [
          "She lives by herself in a small apartment.",
          "I cooked the entire meal by myself.",
        ],
      },
    ],
  },
  {
    id: "l3-past-perfect",
    title: "Past Perfect Tense",
    color: "#DB2777",
    level: 3,
    rules: [
      {
        rule: "Past Perfect — action completed before another past action",
        structure: "subject + had + past participle (V3)",
        examples: [
          "By the time she arrived at the party, he had already left.",
          "I had eaten dinner before she called me.",
        ],
      },
      {
        rule: "Negative form",
        structure: "subject + had not (hadn't) + V3",
        examples: [
          "She hadn't studied, so she failed the test.",
          "He hadn't seen that movie before we recommended it.",
        ],
      },
      {
        rule: "Question form",
        structure: "Had + subject + V3?",
        examples: [
          "Had you ever visited Paris before last year?",
          "Had she finished the report before the meeting started?",
        ],
      },
      {
        rule: "Common time markers: before, after, by the time, when, already",
        structure: "subject + past simple + after/when + subject + had + V3",
        examples: [
          "After he had finished his homework, he played video games.",
          "When we arrived at the cinema, the film had already started.",
        ],
      },
    ],
  },
  {
    id: "l3-past-perfect-continuous",
    title: "Past Perfect Continuous",
    color: "#0891B2",
    level: 3,
    rules: [
      {
        rule: "Past Perfect Continuous — ongoing action before a past point",
        structure: "subject + had been + V-ing",
        examples: [
          "She had been waiting for two hours when he finally arrived.",
          "They had been playing football all afternoon before it got dark.",
        ],
      },
      {
        rule: "Negative form",
        structure: "subject + had not been + V-ing",
        examples: [
          "He hadn't been sleeping well before the big exam.",
          "We hadn't been expecting such a large crowd at the event.",
        ],
      },
      {
        rule: "Question form",
        structure: "Had + subject + been + V-ing?",
        examples: [
          "Had she been studying before the test began?",
          "Had they been arguing before I arrived at their house?",
        ],
      },
      {
        rule: "Used to show the cause of a visible past result",
        structure: "subject + had been + V-ing + so + past result",
        examples: [
          "He had been running for an hour, so he was completely out of breath.",
          "She had been crying — her eyes were red and puffy.",
        ],
      },
    ],
  },
  {
    id: "l3-active-passive",
    title: "Active & Passive Voice",
    color: "#059669",
    level: 3,
    rules: [
      {
        rule: "Simple Present",
        structure: "Active: S + V1(s/es) + O  |  Passive: O + is/am/are + V3",
        examples: [
          "Active: She cleans the room every morning.",
          "Passive: The room is cleaned every morning.",
        ],
      },
      {
        rule: "Simple Past",
        structure: "Active: S + V2 + O  |  Passive: O + was/were + V3",
        examples: [
          "Active: He broke the window accidentally.",
          "Passive: The window was broken accidentally.",
        ],
      },
      {
        rule: "Present Continuous",
        structure:
          "Active: S + is/am/are + V-ing  |  Passive: O + is/am/are + being + V3",
        examples: [
          "Active: The workers are fixing the road.",
          "Passive: The road is being fixed by the workers.",
        ],
      },
      {
        rule: "Simple Future (will)",
        structure: "Active: S + will + V1 + O  |  Passive: O + will be + V3",
        examples: [
          "Active: They will announce the results tomorrow.",
          "Passive: The results will be announced tomorrow.",
        ],
      },
    ],
  },
  {
    id: "l3-direct-indirect",
    title: "Direct & Indirect Speech",
    color: "#D97706",
    level: 3,
    rules: [
      {
        rule: "Statements — tense backshift (say/tell → said/told)",
        structure: "said/told + that + subject + past verb",
        examples: [
          '"I am happy." → She said that she was happy.',
          '"We live in Quetta." → They said that they lived in Quetta.',
        ],
      },
      {
        rule: "Yes/No Questions — using if / whether",
        structure: "asked + if/whether + subject + verb (no inversion)",
        examples: [
          '"Are you tired?" → He asked if I was tired.',
          '"Did she pass the exam?" → She asked whether I had passed.',
        ],
      },
      {
        rule: "WH-Questions — wh-word + subject + verb",
        structure: "asked + wh-word + subject + verb (no inversion)",
        examples: [
          '"Where do you study?" → He asked where I studied.',
          '"What time is it?" → She asked what time it was.',
        ],
      },
      {
        rule: "Commands — told/asked + object + to-infinitive",
        structure: "told/asked + object + (not) to + base verb",
        examples: [
          '"Open the window." → She told him to open the window.',
          '"Please sit down." → He asked them to sit down.',
        ],
      },
    ],
  },
  {
    id: "l3-causative",
    title: "Causative Verbs",
    color: "#DC2626",
    level: 3,
    rules: [
      {
        rule: "MAKE — force or compel someone to do something",
        structure: "subject + make + object + base verb",
        examples: [
          "The teacher made the students rewrite the essay.",
          "The sad movie made her cry uncontrollably.",
        ],
      },
      {
        rule: "LET — allow someone to do something",
        structure: "subject + let + object + base verb",
        examples: [
          "My mother lets me stay up late on weekends.",
          "He let his friend use his laptop for the assignment.",
        ],
      },
      {
        rule: "HAVE (active) — arrange for someone to do something",
        structure: "subject + have + object (person) + base verb",
        examples: [
          "I'll have the technician check your phone tomorrow.",
          "She had her assistant send the email to the team.",
        ],
      },
      {
        rule: "GET — persuade or convince someone to do something",
        structure: "subject + get + object + to-infinitive",
        examples: [
          "She got her brother to help with the dishes.",
          "He got his friend to lend him some money.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LEVEL 4
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "l4-future-continuous",
    title: "Future Continuous Tense",
    color: "#7C3AED",
    level: 4,
    rules: [
      {
        rule: "Future Continuous — action in progress at a specific future time",
        structure: "subject + will be + V-ing",
        examples: [
          "At 8 PM tonight, I will be watching a film with my family.",
          "This time tomorrow, she will be flying to London.",
        ],
      },
      {
        rule: "Negative form",
        structure: "subject + will not (won't) be + V-ing",
        examples: [
          "He won't be working this Saturday afternoon.",
          "They won't be attending the conference next week.",
        ],
      },
      {
        rule: "Question form",
        structure: "Will + subject + be + V-ing?",
        examples: [
          "Will you be using the car tonight?",
          "Will she be joining us for the dinner party?",
        ],
      },
      {
        rule: "Used for polite inquiries about someone's plans",
        structure: "Will you be + V-ing? (softer tone than 'are you going to')",
        examples: [
          "Will you be needing any help with the project?",
          "Will you be attending the meeting on Friday?",
        ],
      },
    ],
  },
  {
    id: "l4-future-perfect",
    title: "Future Perfect Tense",
    color: "#DB2777",
    level: 4,
    rules: [
      {
        rule: "Future Perfect — action completed before a specific future point",
        structure: "subject + will have + V3",
        examples: [
          "By next year, she will have graduated from university.",
          "By 10 AM, I will have finished writing the report.",
        ],
      },
      {
        rule: "Negative form",
        structure: "subject + will not (won't) have + V3",
        examples: [
          "He won't have arrived by the time we leave.",
          "They won't have fixed the road by next Monday.",
        ],
      },
      {
        rule: "Question form",
        structure: "Will + subject + have + V3?",
        examples: [
          "Will you have finished the assignment by 5 PM?",
          "Will she have left before we get there?",
        ],
      },
      {
        rule: "Common time expressions: by, by then, by the time",
        structure: "By + time expression, + subject + will have + V3",
        examples: [
          "By the time he arrives, we will have already eaten dinner.",
          "By 2030, they will have completed construction of the new stadium.",
        ],
      },
    ],
  },
  {
    id: "l4-gerund-infinitive",
    title: "Gerund & Infinitives",
    color: "#0891B2",
    level: 4,
    rules: [
      {
        rule: "Verbs followed by GERUND only",
        structure:
          "verb + V-ing  (enjoy, avoid, finish, mind, suggest, keep, deny, consider)",
        examples: [
          "I enjoy swimming in the early morning.",
          "She suggested going to the new restaurant downtown.",
        ],
      },
      {
        rule: "Verbs followed by INFINITIVE only",
        structure:
          "verb + to + base verb  (want, decide, hope, plan, refuse, agree, manage)",
        examples: [
          "He decided to leave the company early next year.",
          "They hope to visit Italy during the summer.",
        ],
      },
      {
        rule: "Verbs followed by BOTH — same meaning (begin, start, continue, like, love, hate)",
        structure: "verb + V-ing  OR  verb + to + base verb",
        examples: [
          "She started singing / She started to sing when the music played.",
          "I love reading / I love to read before going to bed.",
        ],
      },
      {
        rule: "Verbs followed by BOTH — different meaning (remember, forget, stop, try, regret)",
        structure:
          "verb + V-ing (past/habit) vs verb + to-inf (future/purpose)",
        examples: [
          "I remember meeting her. (past event) vs. Remember to lock the door. (reminder for future)",
          "He stopped smoking. (he quit) vs. He stopped to smoke. (paused an activity to smoke)",
        ],
      },
    ],
  },
  {
    id: "l4-verbs-adj-infinitive",
    title: "Verbs / Adjectives + Infinitives",
    color: "#059669",
    level: 4,
    rules: [
      {
        rule: "Verb + object + infinitive",
        structure:
          "verb + object + to + base verb  (ask, tell, want, expect, allow, encourage)",
        examples: [
          "She asked him to help her carry the boxes.",
          "The manager told the team to submit the report by Friday.",
        ],
      },
      {
        rule: "Adjective + infinitive — feelings or reactions",
        structure: "subject + be + adjective + to + base verb",
        examples: [
          "I was happy to hear the good news.",
          "She was surprised to see him at the airport.",
        ],
      },
      {
        rule: "It is + adjective + infinitive — general statements",
        structure: "It is + adjective + to + base verb",
        examples: [
          "It is difficult to learn a new language as an adult.",
          "It was easy to find the hotel using the map.",
        ],
      },
      {
        rule: "Adjective + enough + infinitive — sufficient degree",
        structure: "adjective + enough + to + base verb",
        examples: [
          "She is old enough to make her own decisions.",
          "He is strong enough to lift that heavy box.",
        ],
      },
      {
        rule: "Too + adjective + infinitive — excessive degree",
        structure: "too + adjective + to + base verb",
        examples: [
          "He is too tired to go out with us tonight.",
          "The bag is too heavy to carry up those stairs.",
        ],
      },
    ],
  },
  {
    id: "l4-do-make",
    title: "Do and Make",
    color: "#D97706",
    level: 4,
    rules: [
      {
        rule: "DO — for tasks, duties, and general activities",
        structure: "do + noun (task or activity)",
        examples: [
          "She does her homework every single night.",
          "He does the dishes right after dinner.",
        ],
      },
      {
        rule: "DO — for general/unspecified activities",
        structure: "do + something / nothing / anything / everything",
        examples: [
          "What are you doing this weekend? Any plans?",
          "She didn't do anything wrong — it was a misunderstanding.",
        ],
      },
      {
        rule: "MAKE — for creating, producing, or causing something",
        structure: "make + noun (product or result)",
        examples: [
          "She made a beautiful cake for his birthday.",
          "He made a long phone call from the office.",
        ],
      },
      {
        rule: "Fixed expressions with DO",
        structure:
          "do + the + noun  (chores, shopping, washing, ironing, cleaning)",
        examples: [
          "He does the shopping every Saturday morning.",
          "She always does her best in every class.",
        ],
      },
      {
        rule: "Fixed expressions with MAKE",
        structure: "make + noun (no article needed)",
        examples: [
          "They made a very important decision together.",
          "Please don't make noise in the library — others are studying.",
        ],
      },
    ],
  },
  {
    id: "l4-nouns-infinitive",
    title: "Nouns + Infinitives",
    color: "#DC2626",
    level: 4,
    rules: [
      {
        rule: "Noun + infinitive — defining what is to be done",
        structure: "noun + to + base verb",
        examples: [
          "She has a lot of work to do before the deadline.",
          "Is there anything to eat in the fridge?",
        ],
      },
      {
        rule: "Noun + infinitive — expressing purpose or function",
        structure: "noun + to + base verb (showing what something is used for)",
        examples: [
          "He needs a pen to write with during the exam.",
          "She bought a special box to keep her jewelry in.",
        ],
      },
      {
        rule: "Common nouns followed by infinitives",
        structure:
          "ability / chance / decision / time / way / opportunity + to + base verb",
        examples: [
          "She has the ability to solve complex problems quickly.",
          "This is the best way to improve your English skills.",
        ],
      },
    ],
  },
  {
    id: "l4-causative",
    title: "Causative Verbs",
    color: "#7C3AED",
    level: 4,
    rules: [
      {
        rule: "HAVE (passive causative) — arrange a service for yourself",
        structure: "subject + have + thing + V3",
        examples: [
          "She had her nails done at the salon last weekend.",
          "We had our car repaired at the garage.",
        ],
      },
      {
        rule: "GET (passive causative) — slightly informal, same meaning as have",
        structure: "subject + get + thing + V3",
        examples: [
          "I need to get my eyes checked at the clinic.",
          "He got his passport renewed at the embassy.",
        ],
      },
      {
        rule: "MAKE — force or cause someone to do something",
        structure: "subject + make + object + base verb",
        examples: [
          "The coach made the players train for three hours.",
          "The terrible smell made everyone feel sick.",
        ],
      },
      {
        rule: "HAVE + person + base verb — arrange for someone to do something",
        structure: "subject + have + person + base verb",
        examples: [
          "I'll have someone call you back within the hour.",
          "She had the waiter bring extra chairs to the table.",
        ],
      },
    ],
  },
  {
    id: "l4-preferences",
    title: "Preferences",
    color: "#DB2777",
    level: 4,
    rules: [
      {
        rule: "PREFER + noun / gerund + TO + noun / gerund — general preference",
        structure: "subject + prefer + V-ing + to + V-ing",
        examples: [
          "I prefer walking to driving — it's healthier.",
          "She prefers green tea to coffee in the morning.",
        ],
      },
      {
        rule: "WOULD PREFER + to-infinitive — specific preference (this time)",
        structure: "subject + would prefer + to + base verb",
        examples: [
          "I would prefer to stay home and rest tonight.",
          "She would prefer to travel by train rather than fly.",
        ],
      },
      {
        rule: "WOULD RATHER + base verb — same subject, stronger preference",
        structure: "subject + would rather + base verb (+ than + base verb)",
        examples: [
          "I'd rather walk than take the crowded bus.",
          "He would rather stay home and watch a film.",
        ],
      },
      {
        rule: "WOULD RATHER + subject + past simple — different subject",
        structure: "subject + would rather + subject + V2",
        examples: [
          "I'd rather you didn't tell anyone about this.",
          "She would rather he came to the party alone.",
        ],
      },
    ],
  },
  {
    id: "l4-modals",
    title: "Modal Auxiliary Verbs",
    color: "#0891B2",
    level: 4,
    rules: [
      {
        rule: "CAN / COULD — ability, possibility, permission",
        structure: "subject + can/could + base verb",
        examples: [
          "She can speak three different languages fluently.",
          "Could I use your phone for a moment, please?",
        ],
      },
      {
        rule: "MAY / MIGHT — possibility or formal permission",
        structure: "subject + may/might + base verb",
        examples: [
          "It might rain later, so take an umbrella.",
          "May I come in and take a seat?",
        ],
      },
      {
        rule: "SHOULD / OUGHT TO — advice or recommendation",
        structure: "subject + should/ought to + base verb",
        examples: [
          "You should see a doctor if the pain continues.",
          "We ought to respect the rules of our school.",
        ],
      },
      {
        rule: "MUST — strong obligation or logical deduction",
        structure: "subject + must + base verb",
        examples: [
          "You must wear a seatbelt at all times. (obligation)",
          "She must be exhausted — she worked a twelve-hour shift. (deduction)",
        ],
      },
      {
        rule: "WOULD — polite requests, past habits, imaginary situations",
        structure: "subject + would + base verb",
        examples: [
          "Would you please close the door behind you?",
          "When I was young, I would visit my grandparents every summer.",
        ],
      },
    ],
  },
  {
    id: "l4-obligations",
    title: "Obligations",
    color: "#059669",
    level: 4,
    rules: [
      {
        rule: "MUST — strong personal or internal obligation",
        structure: "subject + must + base verb",
        examples: [
          "I must finish this important report by tomorrow morning.",
          "You must stop at a red traffic light.",
        ],
      },
      {
        rule: "HAVE TO — external obligation (rules, laws, requirements)",
        structure: "subject + have to / has to + base verb",
        examples: [
          "Students have to wear a uniform at this school.",
          "She has to work on weekends this month.",
        ],
      },
      {
        rule: "SHOULD / OUGHT TO — moral duty or advice",
        structure: "subject + should/ought to + base verb",
        examples: [
          "You should help your parents at home whenever you can.",
          "We ought to be more careful about wasting water.",
        ],
      },
      {
        rule: "MUSTN'T — prohibition (not allowed at all)",
        structure: "subject + mustn't + base verb",
        examples: [
          "You mustn't use your phone during the exam — it's strictly forbidden.",
          "Students mustn't cheat or copy from each other.",
        ],
      },
      {
        rule: "DON'T HAVE TO — no obligation (optional, free choice)",
        structure: "subject + don't/doesn't have to + base verb",
        examples: [
          "You don't have to come if you're feeling tired or unwell.",
          "She doesn't have to cook tonight — we'll order from a restaurant.",
        ],
      },
    ],
  },
  {
    id: "l4-reported-speech",
    title: "Reported Speech",
    color: "#D97706",
    level: 4,
    rules: [
      {
        rule: "Statements — tense backshift rules",
        structure: "said/told + that + subject + past form",
        examples: [
          '"I work here." → She said that she worked there.',
          '"We are leaving tomorrow." → They said they were leaving the next day.',
        ],
      },
      {
        rule: "Yes/No Questions — using if / whether",
        structure: "asked + if/whether + subject + verb (no inversion)",
        examples: [
          '"Are you hungry?" → He asked if I was hungry.',
          '"Can you swim?" → She asked whether I could swim.',
        ],
      },
      {
        rule: "WH-Questions — wh-word + subject + verb",
        structure: "asked + wh-word + subject + verb (no inversion)",
        examples: [
          '"Why are you late?" → She asked why I was late.',
          '"Where did you go last night?" → He asked where I had gone.',
        ],
      },
      {
        rule: "Reporting verbs — more specific patterns",
        structure: "verb + -ing / to-inf / obj + to-inf",
        examples: [
          "She admitted forgetting to bring the keys. (admit + -ing)",
          "He promised to return the book by Friday. (promise + to-inf)",
          "The teacher told us to study harder. (tell + obj + to-inf)",
        ],
      },
    ],
  },
  {
    id: "l4-past-speculations",
    title: "Past Speculations",
    color: "#DC2626",
    level: 4,
    rules: [
      {
        rule: "MUST HAVE + V3 — certain positive deduction about the past",
        structure: "subject + must have + V3",
        examples: [
          "He must have forgotten the meeting — he never showed up.",
          "She must have studied really hard to get such a high score.",
        ],
      },
      {
        rule: "CAN'T HAVE / COULDN'T HAVE + V3 — certain negative deduction",
        structure: "subject + can't / couldn't have + V3",
        examples: [
          "She can't have eaten — the food is still completely untouched.",
          "He couldn't have known about the surprise party beforehand.",
        ],
      },
      {
        rule: "MIGHT HAVE / MAY HAVE + V3 — uncertain past possibility",
        structure: "subject + might/may have + V3",
        examples: [
          "She might have left early because of the traffic.",
          "They may have taken the wrong bus by accident.",
        ],
      },
      {
        rule: "COULD HAVE + V3 — past possibility that didn't happen",
        structure: "subject + could have + V3",
        examples: [
          "You could have called me — why didn't you?",
          "She could have passed the exam if she had prepared properly.",
        ],
      },
      {
        rule: "SHOULD HAVE + V3 — regret or criticism about past actions",
        structure: "subject + should have / shouldn't have + V3",
        examples: [
          "I should have listened to your advice — you were right.",
          "He shouldn't have driven so fast on that slippery road.",
        ],
      },
    ],
  },
  {
    id: "l4-active-passive",
    title: "Active & Passive Voice",
    color: "#7C3AED",
    level: 4,
    rules: [
      {
        rule: "Present Perfect Passive",
        structure: "Object + has/have + been + V3",
        examples: [
          "Active: Someone has stolen the bag. → Passive: The bag has been stolen.",
          "Active: They have built a new hospital. → Passive: A new hospital has been built.",
        ],
      },
      {
        rule: "Past Perfect Passive",
        structure: "Object + had + been + V3",
        examples: [
          "Active: They had repaired the road before the race began. → Passive: The road had been repaired before the race.",
          "The report had been completed long before the deadline.",
        ],
      },
      {
        rule: "Modal Passive",
        structure: "Object + modal + be + V3",
        examples: [
          "Active: They should fix this problem. → Passive: This problem should be fixed.",
          "Active: She can solve it. → Passive: It can be solved by her.",
        ],
      },
      {
        rule: "Future Perfect Passive",
        structure: "Object + will have been + V3",
        examples: [
          "Active: They will have finished the project. → Passive: The project will have been finished.",
          "The results will have been announced by the time you arrive.",
        ],
      },
    ],
  },
  {
    id: "l4-conditional",
    title: "Conditional Types 1, 2 & 3 (Unless)",
    color: "#DB2777",
    level: 4,
    rules: [
      {
        rule: "Type 1 — Real future condition",
        structure: "If + present simple, will + base verb",
        examples: [
          "If it rains tonight, we won't go out for dinner.",
          "If she calls, tell her I'll be back in an hour.",
        ],
      },
      {
        rule: "Type 2 — Unreal present or future condition",
        structure: "If + past simple, would + base verb",
        examples: [
          "If I knew the answer, I would definitely tell you.",
          "If she had more free time, she would learn to play guitar.",
        ],
      },
      {
        rule: "Type 3 — Unreal past condition (expressing regret or criticism)",
        structure: "If + past perfect, would have + V3",
        examples: [
          "If she had studied more, she would have passed the exam.",
          "If he had left earlier, he wouldn't have missed his flight.",
        ],
      },
      {
        rule: "UNLESS — if not / except if (mainly used with Type 1)",
        structure: "Unless + present simple, main clause",
        examples: [
          "Unless you hurry up, you will be late for class.",
          "I won't go to the party unless you come with me.",
        ],
      },
    ],
  },
  {
    id: "l4-passive-causatives",
    title: "Passive Causatives",
    color: "#0891B2",
    level: 4,
    rules: [
      {
        rule: "HAVE something done — arrange a service (main use)",
        structure: "subject + have + object (thing) + V3",
        examples: [
          "I had my hair cut at the salon yesterday afternoon.",
          "She is having her apartment painted this week.",
          "He had his phone screen fixed at the repair shop.",
        ],
      },
      {
        rule: "GET something done — informal version of have something done",
        structure: "subject + get + object (thing) + V3",
        examples: [
          "I got my teeth checked at the dentist last month.",
          "She got her photo taken professionally for her CV.",
          "He needs to get his car washed before the trip.",
        ],
      },
      {
        rule: "Tense changes with HAVE something done",
        structure:
          "Change tense of HAVE; V3 (past participle) always stays the same",
        examples: [
          "Present: She has her nails done every single week.",
          "Past: She had her nails done last Saturday.",
          "Future: She will have her nails done before the wedding.",
        ],
      },
    ],
  },
  {
    id: "l4-apologies",
    title: "Apologies",
    color: "#059669",
    level: 4,
    rules: [
      {
        rule: "Formal apologies — I apologize for + V-ing / noun",
        structure: "I apologize for + V-ing / noun",
        examples: [
          "I apologize for being late to the meeting this morning.",
          "I apologize for the inconvenience this has caused you.",
        ],
      },
      {
        rule: "Informal apologies — Sorry for + V-ing",
        structure: "Sorry for + V-ing / noun",
        examples: [
          "Sorry for interrupting your conversation just now.",
          "Sorry for the confusion about the meeting time.",
        ],
      },
      {
        rule: "Expressing regret — I should have / shouldn't have + V3",
        structure: "I should(n't) have + V3",
        examples: [
          "I shouldn't have said those things — I'm truly sorry.",
          "I should have told you earlier — please forgive me.",
        ],
      },
      {
        rule: "Accepting an apology — common responses",
        structure: "Response phrases",
        examples: [
          "That's okay. / No problem at all. / Don't worry about it.",
          "I understand. / It happens to everyone. / Apology accepted.",
        ],
      },
      {
        rule: "Offering to make up for a mistake",
        structure: "Let me + base verb  /  I'll make it up to you",
        examples: [
          "Let me buy you another coffee to make up for the wait.",
          "I'll make it up to you next time, I absolutely promise.",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LEVEL 5
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "relative-clause",
    title: "Relative Clause",
    color: "#7C3AED",
    level: 5,
    rules: [
      {
        rule: "WHO — for people (subject or object)",
        structure: "noun + who + verb",
        examples: [
          "The woman who lives upstairs is a nurse.",
          "The man who I met yesterday was very kind.",
        ],
      },
      {
        rule: "WHICH — for things or animals",
        structure: "noun + which + verb",
        examples: [
          "The car which broke down was brand new.",
          "She gave me a book which I really enjoyed.",
        ],
      },
      {
        rule: "THAT — for people or things (defining only)",
        structure: "noun + that + verb",
        examples: [
          "The student that scored highest won the prize.",
          "The bag that I bought is expensive.",
        ],
      },
      {
        rule: "WHOSE — possession",
        structure: "noun + whose + noun + verb",
        examples: [
          "I know a girl whose mother is a famous singer.",
          "The man whose car was stolen filed a report.",
        ],
      },
      {
        rule: "WHERE — for places",
        structure: "place noun + where + subject + verb",
        examples: [
          "That is the school where I studied.",
          "I remember the café where we first met.",
        ],
      },
      {
        rule: "WHEN — for time",
        structure: "time noun + when + subject + verb",
        examples: [
          "I remember the day when we moved to this city.",
          "There are moments when I miss my hometown.",
        ],
      },
      {
        rule: "Non-defining clause — extra information (commas required)",
        structure: "noun, + relative pronoun + extra info,",
        examples: [
          "My father, who is 60 years old, still runs every morning.",
          "London, which is the capital of England, is very expensive.",
        ],
      },
    ],
  },
  {
    id: "describing-people",
    title: "Describing People",
    color: "#DB2777",
    level: 5,
    rules: [
      {
        rule: "Appearance — using HAVE/HAS for features",
        structure: "Subject + have/has + adjective + noun",
        examples: [
          "She has long, curly black hair.",
          "He has a round face and dark brown eyes.",
        ],
      },
      {
        rule: "Appearance — using BE for general look",
        structure: "Subject + is/are + adjective",
        examples: [
          "He is tall and well-built.",
          "She is slim and of medium height.",
        ],
      },
      {
        rule: "Adjective order — opinion → size → age → shape → color → origin",
        structure: "opinion + size + age + shape + color + origin + noun",
        examples: [
          "She has beautiful long dark hair.",
          "He is a young, athletic, fair-skinned man.",
        ],
      },
      {
        rule: "Personality — using BE + adjectives",
        structure: "Subject + is/are + personality adjective",
        examples: [
          "My best friend is very outgoing and generous.",
          "He is hardworking, patient, and kind.",
        ],
      },
    ],
  },
  {
    id: "purpose",
    title: "Adverb Clause of Purpose",
    color: "#0891B2",
    level: 5,
    rules: [
      {
        rule: "SO THAT — positive purpose with modal",
        structure:
          "main clause + so that + subject + can/could/will/would + verb",
        examples: [
          "She studies hard so that she can pass the exam.",
          "He left early so that he could catch the train.",
        ],
      },
      {
        rule: "IN ORDER THAT — formal version of 'so that'",
        structure: "main clause + in order that + subject + can/could + verb",
        examples: [
          "She spoke slowly in order that everyone could understand.",
          "He worked overtime in order that the project would be finished on time.",
        ],
      },
      {
        rule: "TO / IN ORDER TO — same subject in both clauses",
        structure: "subject + verb + to/in order to + base verb",
        examples: [
          "She went to the library to study.",
          "He woke up early in order to exercise.",
        ],
      },
      {
        rule: "SO AS TO — formal, often negative",
        structure: "subject + verb + so as (not) to + base verb",
        examples: [
          "She spoke quietly so as not to disturb the others.",
          "He took notes so as to remember the key points.",
        ],
      },
    ],
  },
  {
    id: "reason",
    title: "Adverb Clause of Reason",
    color: "#059669",
    level: 5,
    rules: [
      {
        rule: "BECAUSE — strongest, direct reason",
        structure: "main clause + because + subject + verb",
        examples: [
          "I stayed home because I was sick.",
          "She cried because she lost her keys.",
        ],
      },
      {
        rule: "SINCE — reason already known to listener",
        structure: "Since + subject + verb, + main clause",
        examples: [
          "Since it was getting late, we decided to leave.",
          "Since you already know the answer, why did you ask?",
        ],
      },
      {
        rule: "AS — similar to since, common in formal writing",
        structure: "As + subject + verb, + main clause",
        examples: [
          "As the road was blocked, we took a different route.",
          "She couldn't attend as she was out of town.",
        ],
      },
      {
        rule: "NOW THAT — reason related to a new/changed situation",
        structure: "Now that + subject + verb, + main clause",
        examples: [
          "Now that you've graduated, you can look for a job.",
          "Now that the rain has stopped, we can go outside.",
        ],
      },
    ],
  },
  {
    id: "result",
    title: "Adverb Clause of Result",
    color: "#D97706",
    level: 5,
    rules: [
      {
        rule: "SO + adjective/adverb + THAT",
        structure: "subject + verb + so + adj/adv + that + result clause",
        examples: [
          "It was so cold that the pipes froze.",
          "He spoke so fast that no one understood him.",
        ],
      },
      {
        rule: "SUCH + a/an + adjective + noun + THAT",
        structure: "It was such a/an + adj + noun + that + result",
        examples: [
          "It was such a hot day that we stayed indoors.",
          "She is such a kind person that everyone loves her.",
        ],
      },
      {
        rule: "SUCH + adjective + plural/uncountable noun + THAT",
        structure: "such + adj + plural noun + that + result",
        examples: [
          "They were such friendly people that we felt at home.",
          "There was such heavy traffic that we were late.",
        ],
      },
      {
        rule: "SO MUCH / MANY / LITTLE / FEW + noun + THAT",
        structure: "so much/many/little/few + noun + that + result",
        examples: [
          "There was so much noise that I couldn't concentrate.",
          "There were so few students that the class was cancelled.",
        ],
      },
    ],
  },
  {
    id: "contrast",
    title: "Adverb Clause of Contrast",
    color: "#DC2626",
    level: 5,
    rules: [
      {
        rule: "ALTHOUGH / EVEN THOUGH / THOUGH",
        structure: "Although/Even though + subject + verb, + main clause",
        examples: [
          "Although it was raining, we went for a walk.",
          "He failed the exam even though he had studied hard.",
        ],
      },
      {
        rule: "WHILE / WHEREAS — direct contrast between two facts",
        structure: "main clause + while/whereas + contrasting clause",
        examples: [
          "He is very talkative, while his brother is very quiet.",
          "She prefers coffee, whereas her husband prefers tea.",
        ],
      },
      {
        rule: "DESPITE / IN SPITE OF + noun or -ing (no clause after)",
        structure: "Despite/In spite of + noun/-ing, + main clause",
        examples: [
          "Despite the rain, we went out.",
          "In spite of being tired, he finished the work.",
        ],
      },
      {
        rule: "NO MATTER HOW / WHAT — extreme contrast",
        structure: "No matter how/what + subject + verb, + main clause",
        examples: [
          "No matter how hard he tries, he never succeeds.",
          "No matter what you say, she won't change her mind.",
        ],
      },
    ],
  },
  {
    id: "noun-clause",
    title: "Noun Clause",
    color: "#7C3AED",
    level: 5,
    rules: [
      {
        rule: "THAT-clause — as object of a verb",
        structure: "subject + verb + that + subject + verb",
        examples: [
          "I believe that she is telling the truth.",
          "She hopes that things will improve.",
        ],
      },
      {
        rule: "THAT-clause — as subject of a sentence",
        structure: "That + subject + verb + main verb",
        examples: [
          "That he lied shocked everyone.",
          "That she passed made her family proud.",
        ],
      },
      {
        rule: "THAT-clause — after adjectives",
        structure: "subject + be + adjective + that + clause",
        examples: [
          "I'm glad that you came.",
          "He is sure that he will get the job.",
        ],
      },
      {
        rule: "WH-word clause — as object",
        structure: "subject + verb + wh-word + subject + verb",
        examples: ["I don't know where she went.", "No one knows why he left."],
      },
      {
        rule: "WH-word clause — as subject",
        structure: "Wh-word + subject + verb + main verb",
        examples: [
          "What he said made everyone laugh.",
          "Where she lives is a mystery.",
        ],
      },
      {
        rule: "WHETHER / IF — yes/no uncertainty",
        structure: "subject + verb + whether/if + subject + verb",
        examples: [
          "I wonder whether she will come.",
          "He doesn't know if the shop is open.",
        ],
      },
      {
        rule: "Noun clause — after prepositions",
        structure: "preposition + wh-word + subject + verb",
        examples: [
          "We talked about what happened at the meeting.",
          "He was worried about whether he would pass.",
        ],
      },
    ],
  },
  {
    id: "wh-ever",
    title: "Determiners (WH-ever)",
    color: "#0891B2",
    level: 5,
    rules: [
      {
        rule: "WHATEVER — anything that / it doesn't matter what",
        structure: "Whatever + subject + verb, + main clause",
        examples: [
          "Whatever you decide, I will support you.",
          "Whatever happens, stay calm.",
        ],
      },
      {
        rule: "WHOEVER — anyone who / it doesn't matter who",
        structure: "Whoever + verb, + main clause",
        examples: [
          "Whoever finds the wallet will get a reward.",
          "You can invite whoever you want.",
        ],
      },
      {
        rule: "WHICHEVER — any one of several options",
        structure: "Whichever + noun + subject + verb, + main clause",
        examples: [
          "Take whichever seat you prefer.",
          "Whichever route you take, allow extra time.",
        ],
      },
      {
        rule: "WHENEVER — any time / it doesn't matter when",
        structure: "Whenever + subject + verb, + main clause",
        examples: [
          "You can visit whenever you want.",
          "He falls asleep whenever he watches TV.",
        ],
      },
      {
        rule: "WHEREVER — any place / it doesn't matter where",
        structure: "Wherever + subject + verb, + main clause",
        examples: [
          "Wherever she goes, she makes friends.",
          "Take your umbrella wherever you go.",
        ],
      },
      {
        rule: "HOWEVER — in any way / it doesn't matter how",
        structure: "However + adjective/adverb + subject + verb, + main clause",
        examples: [
          "However hard it is, don't give up.",
          "However much he eats, he never gains weight.",
        ],
      },
    ],
  },
  {
    id: "active-passive",
    title: "Active & Passive Voice",
    color: "#059669",
    level: 5,
    rules: [
      {
        rule: "Simple Present",
        structure: "Active: S + V1(s/es) + O  |  Passive: O + is/am/are + V3",
        examples: [
          "Active: The teacher explains the lesson.",
          "Passive: The lesson is explained by the teacher.",
        ],
      },
      {
        rule: "Simple Past",
        structure: "Active: S + V2 + O  |  Passive: O + was/were + V3",
        examples: [
          "Active: They built this bridge in 1990.",
          "Passive: This bridge was built in 1990.",
        ],
      },
      {
        rule: "Simple Future (will)",
        structure: "Active: S + will + V1 + O  |  Passive: O + will be + V3",
        examples: [
          "Active: The company will announce the results.",
          "Passive: The results will be announced tomorrow.",
        ],
      },
      {
        rule: "Present Continuous",
        structure:
          "Active: S + is/am/are + V-ing  |  Passive: O + is/am/are + being + V3",
        examples: [
          "Active: The chef is preparing the meal.",
          "Passive: The meal is being prepared by the chef.",
        ],
      },
      {
        rule: "Past Continuous",
        structure:
          "Active: S + was/were + V-ing  |  Passive: O + was/were + being + V3",
        examples: [
          "Active: Workers were repairing the road.",
          "Passive: The road was being repaired.",
        ],
      },
      {
        rule: "Present Perfect",
        structure:
          "Active: S + has/have + V3  |  Passive: O + has/have + been + V3",
        examples: [
          "Active: Someone has stolen my wallet.",
          "Passive: My wallet has been stolen.",
        ],
      },
      {
        rule: "Past Perfect",
        structure: "Active: S + had + V3  |  Passive: O + had + been + V3",
        examples: [
          "Active: She had finished the report before noon.",
          "Passive: The report had been finished before noon.",
        ],
      },
      {
        rule: "Modal Verbs (can, must, should, may...)",
        structure: "Active: S + modal + V1  |  Passive: O + modal + be + V3",
        examples: [
          "Active: You must submit the form today.",
          "Passive: The form must be submitted today.",
        ],
      },
      {
        rule: "Two Objects (give, send, show, offer...)",
        structure: "Either object can become the subject in passive",
        examples: [
          "Active: The manager gave the employees a bonus.",
          "Passive: The employees were given a bonus.",
        ],
      },
      {
        rule: "Impersonal Passive — It is said / believed / thought",
        structure: "It is said/believed/thought + that + clause",
        examples: [
          "People say he is rich. → It is said that he is rich.",
          "People believe she escaped. → It is believed that she escaped.",
        ],
      },
    ],
  },
  {
    id: "direct-indirect",
    title: "Direct & Indirect Speech",
    color: "#D97706",
    level: 5,
    rules: [
      {
        rule: "Statements — tense shifts back",
        structure: "said/told + that + subject + past verb",
        examples: [
          '"I am tired." → She said that she was tired.',
          '"We finished the work." → They said that they had finished the work.',
          '"She will come tomorrow." → He said that she would come the next day.',
        ],
      },
      {
        rule: "Yes/No Questions — using IF / WHETHER",
        structure:
          "asked + if/whether + subject + verb (no auxiliary, no inversion)",
        examples: [
          '"Are you ready?" → He asked if I was ready.',
          '"Did she call?" → She asked whether he had called.',
          '"Will you help me?" → He asked if I would help him.',
        ],
      },
      {
        rule: "WH- Questions — wh-word + subject + verb",
        structure: "asked + wh-word + subject + verb (no inversion)",
        examples: [
          '"Where do you live?" → She asked where I lived.',
          '"What did he say?" → I asked what he had said.',
          '"Why are you crying?" → He asked why she was crying.',
        ],
      },
      {
        rule: "Commands & Requests — told/asked + object + to-infinitive",
        structure: "told/asked/ordered + object + (not) to + base verb",
        examples: [
          '"Close the door." → She told him to close the door.',
          '"Please help me." → He asked her to help him.',
          '"Don\'t make noise." → She told them not to make noise.',
        ],
      },
      {
        rule: "Time & Place Expression Changes",
        structure:
          "now→then, today→that day, tomorrow→the next day, here→there",
        examples: [
          '"I saw her yesterday." → He said he had seen her the day before.',
          '"We will meet tomorrow." → She said they would meet the next day.',
          '"I live here." → He said he lived there.',
        ],
      },
      {
        rule: "Pronoun Changes",
        structure:
          "Pronouns shift based on who is speaking and who is listening",
        examples: [
          '"I love my job." → She said she loved her job.',
          '"We finished our work." → They said they had finished their work.',
          '"You are late." → He told me I was late.',
        ],
      },
      {
        rule: "Reporting Verbs — more specific than say/tell",
        structure: "verb + -ing / to-inf / obj + to-inf / obj + of -ing",
        examples: [
          'admit + -ing → "I cheated on the test," he said. → He admitted cheating on the test.',
          'suggest + -ing → "Let\'s take a taxi," she said. → She suggested taking a taxi.',
          'agree + to-inf → "I will pay for dinner," he said. → He agreed to pay for dinner.',
          'refuse + to-inf → "I won\'t answer," she said. → She refused to answer.',
          'warn + obj + not to → "Don\'t go alone," she said. → She warned me not to go alone.',
          'accuse + obj + of -ing → "You stole the money," he said. → He accused her of stealing.',
          'deny + -ing → "I didn\'t take it," she said. → She denied taking the money.',
          'promise + to-inf → "I will call you," he said. → He promised to call later.',
          'apologize + for -ing → "I\'m sorry for being late," he said. → He apologized for being late.',
        ],
      },
      {
        rule: "No Tense Change — present reporting verb or universal truth",
        structure:
          "When the reporting verb is present tense, no backshift needed",
        examples: [
          '"The sun rises in the east." → She says the sun rises in the east.',
          '"I love you." → He says he loves her.',
        ],
      },
    ],
  },
  {
    id: "causative",
    title: "Causative Verbs",
    color: "#DC2626",
    level: 5,
    rules: [
      {
        rule: "HAVE (active) — arrange for someone to do something",
        structure: "Subject + have + object + base verb",
        examples: [
          "I have the mechanic fix my car.",
          "She has her assistant book the tickets.",
          "We had the workers paint the house.",
        ],
      },
      {
        rule: "HAVE (passive) — focus on the thing done",
        structure: "Subject + have + object + past participle (V3)",
        examples: [
          "I have my car fixed every year.",
          "She had her hair cut yesterday.",
          "They had the documents signed.",
        ],
      },
      {
        rule: "GET (active) — persuade or convince someone to do it",
        structure: "Subject + get + object + to-infinitive",
        examples: [
          "I got my brother to help me move.",
          "She got the doctor to give her a prescription.",
          "He got his friend to drive him home.",
        ],
      },
      {
        rule: "GET (passive) — something gets done",
        structure: "Subject + get + object + past participle (V3)",
        examples: [
          "I got my laptop repaired.",
          "She got her dress made by a tailor.",
          "He got his phone stolen on the bus.",
        ],
      },
      {
        rule: "MAKE — force or cause someone to do something",
        structure: "Subject + make + object + base verb",
        examples: [
          "The teacher made the students redo the test.",
          "The noise made me wake up.",
          "His words made her cry.",
        ],
      },
      {
        rule: "MAKE (passive) — was/were made + to-infinitive",
        structure: "Object + was/were + made + to-infinitive",
        examples: [
          "The students were made to redo the test.",
          "She was made to apologize in front of the class.",
          "He was made to leave the room.",
        ],
      },
      {
        rule: "LET — allow someone to do something",
        structure: "Subject + let + object + base verb",
        examples: [
          "My parents let me stay up late.",
          "She let the children play outside.",
          "He let his friend borrow the car.",
        ],
      },
      {
        rule: "LET (passive) — use 'be allowed to' instead",
        structure: "Subject + was/were + allowed + to + base verb",
        examples: [
          "I was allowed to stay up late.",
          "The children were allowed to play outside.",
          "He was allowed to borrow the car.",
        ],
      },
      {
        rule: "HELP — assist someone in doing something",
        structure: "Subject + help + object + base verb / to-infinitive",
        examples: [
          "She helped me find the answer.",
          "He helped his mother carry the bags.",
          "They helped us complete the project.",
        ],
      },
    ],
  },
  {
    id: "case-expressions",
    title: "Case Expressions",
    color: "#7C3AED",
    level: 5,
    rules: [
      {
        rule: "IN CASE — as a precaution (future possibility)",
        structure: "main clause + in case + subject + present verb",
        examples: [
          "Take an umbrella in case it rains.",
          "Write it down in case you forget.",
          "I'll call you in case something changes.",
        ],
      },
      {
        rule: "IN CASE OF — if something happens (formal/written)",
        structure: "In case of + noun, + main clause",
        examples: [
          "In case of fire, use the stairs.",
          "In case of emergency, call 911.",
          "In case of rain, the event will be moved indoors.",
        ],
      },
      {
        rule: "IN ANY CASE — regardless / anyway (used to conclude)",
        structure: "In any case, + main clause",
        examples: [
          "In any case, I'll be there by 8.",
          "In any case, the decision has already been made.",
          "I may not finish early, but in any case I will try.",
        ],
      },
    ],
  },
];
