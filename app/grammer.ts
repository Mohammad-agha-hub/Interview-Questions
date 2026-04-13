export type Rule = {
  rule: string;
  structure: string;
  examples: string[];
};

export type Topic = {
  id: string;
  title: string;
  color: string;
  level: 3 | 4 | 5;
  rules: Rule[];
};

export const grammarTopics: Topic[] = [
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
