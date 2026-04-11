export type Rule = {
  rule: string;
  structure: string;
  examples: string[];
};

export type Topic = {
  id: string;
  title: string;
  color: string;
  rules: Rule[];
};

export const grammarTopics: Topic[] = [
  {
    id: "relative-clause",
    title: "Relative Clause",
    color: "#7C3AED",
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
      {
        rule: "FOR FEAR THAT / LEST — to avoid something negative",
        structure: "main clause + for fear that/lest + subject + verb",
        examples: [
          "She whispered for fear that someone might hear her.",
          "He studied all night lest he fail the exam.",
        ],
      },
    ],
  },
  {
    id: "reason",
    title: "Adverb Clause of Reason",
    color: "#059669",
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
          "admit + -ing → He admitted cheating on the test.",
          "suggest + -ing → She suggested taking a taxi.",
          "agree + to-inf → He agreed to pay for dinner.",
          "refuse + to-inf → She refused to answer the question.",
          "warn + obj + not to → She warned me not to go alone.",
          "accuse + obj + of -ing → He accused her of stealing.",
          "deny + -ing → She denied taking the money.",
          "promise + to-inf → He promised to call later.",
          "apologize + for -ing → He apologized for being late.",
        ],
      },
      {
        rule: "No Tense Change — present reporting verb or universal truth",
        structure:
          "When the reporting verb is present tense, no backshift needed",
        examples: [
          '"The sun rises in the east." → She says the sun rises in the east.',
          '"I love you." → He still says he loves her.',
        ],
      },
    ],
  },
  {
    id: "causative",
    title: "Causative Verbs",
    color: "#DC2626",
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
