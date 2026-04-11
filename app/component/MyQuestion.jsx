"use client";

import { useState } from "react";



const categories = [
  {
    id: "technology",
    label: "Technology",
    color: "#0891B2",
    emoji: "💻",
    topics: [
      {
        id: "t1",
        title: "Social media and daily life",
        prompts: [
          "How many hours a day do you spend on social media? Is that too much?",
          "Do you think social media makes people more or less lonely?",
          "Should there be an age limit for using social media? Why or why not?",
          "Describe how social media has changed the way people communicate.",
        ],
      },
      {
        id: "t2",
        title: "Artificial intelligence",
        prompts: [
          "Do you think AI will replace human jobs in the future? Which ones?",
          "What is one thing AI can do better than humans? What can humans do better?",
          "Would you trust an AI to make important decisions for you? Why or why not?",
          "How do you think AI will change education in the next 10 years?",
        ],
      },
      {
        id: "t3",
        title: "Smartphones and screen time",
        prompts: [
          "Could you live without your smartphone for one week? What would be the hardest part?",
          "Do you think smartphones have made people more or less productive?",
          "How has the smartphone changed the way we take photos and share memories?",
          "Should phones be banned in classrooms? Give reasons for your opinion.",
        ],
      },
      {
        id: "t4",
        title: "The internet and privacy",
        prompts: [
          "Are you worried about companies collecting your personal data online?",
          "What are the biggest dangers of the internet for young people?",
          "Do you think people share too much personal information online?",
          "Describe a time when technology let you down or caused a problem.",
        ],
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    color: "#7C3AED",
    emoji: "📚",
    topics: [
      {
        id: "e1",
        title: "The purpose of school",
        prompts: [
          "Is school mainly about learning facts or developing skills for life?",
          "What is the most useful subject you have ever studied? Why?",
          "Should schools teach students how to manage money and cook? Why?",
          "Describe your ideal school. How would it be different from your current one?",
        ],
      },
      {
        id: "e2",
        title: "Exams and grades",
        prompts: [
          "Do you think exams are the best way to measure a student's ability?",
          "Have you ever worked very hard for an exam? Describe the experience.",
          "Some people say grades cause too much stress. Do you agree?",
          "What would happen if schools had no exams at all?",
        ],
      },
      {
        id: "e3",
        title: "Online learning vs classroom",
        prompts: [
          "What are the advantages and disadvantages of studying online?",
          "Did you ever study online? How did it compare to being in a classroom?",
          "Do you think universities will become mostly online in the future?",
          "What do you miss most about being in a classroom when studying from home?",
        ],
      },
      {
        id: "e4",
        title: "Learning languages",
        prompts: [
          "Why are you learning English? How do you think it will help you?",
          "What is the hardest part of learning a new language for you?",
          "Do you think children learn languages more easily than adults?",
          "What is the best method you have used to learn new vocabulary?",
        ],
      },
    ],
  },
  {
    id: "money",
    label: "Money & Work",
    color: "#059669",
    emoji: "💰",
    topics: [
      {
        id: "m1",
        title: "Money and happiness",
        prompts: [
          "Do you think money can buy happiness? Give examples to support your view.",
          "What would you do if you won one million dollars tomorrow?",
          "Is it better to have a high salary or a job you love? Why?",
          "At what age should young people start earning their own money?",
        ],
      },
      {
        id: "m2",
        title: "Jobs and careers",
        prompts: [
          "What is your dream job and why? What skills does it require?",
          "Is it better to work for a company or be your own boss?",
          "How important is it to choose a career that helps other people?",
          "Describe a job you would never want to do. Why would you avoid it?",
        ],
      },
      {
        id: "m3",
        title: "Wealth and inequality",
        prompts: [
          "Is it fair that some people earn hundreds of times more than others?",
          "Should very rich people pay more taxes? What would you do with that money?",
          "What responsibilities do wealthy people have toward society?",
          "Describe the difference between being rich and being financially comfortable.",
        ],
      },
      {
        id: "m4",
        title: "Saving and spending",
        prompts: [
          "Are you a saver or a spender? Give an example from your own life.",
          "What is the most expensive thing you have ever bought? Was it worth it?",
          "Should schools teach students about budgeting and saving? Why?",
          "What is one thing most people waste money on without realising it?",
        ],
      },
    ],
  },
  {
    id: "philosophy",
    label: "Philosophy & Life",
    color: "#DB2777",
    emoji: "🤔",
    topics: [
      {
        id: "p1",
        title: "The meaning of success",
        prompts: [
          "How do you personally define success? Is it about money, happiness, or something else?",
          "Can a person be a failure in the eyes of society but a success in their own eyes?",
          "Do you think success requires sacrifice? What have you sacrificed to achieve something?",
          "Describe someone you consider truly successful and explain why.",
        ],
      },
      {
        id: "p2",
        title: "Right and wrong",
        prompts: [
          "Is it ever acceptable to lie? Give a situation where lying might be the right thing to do.",
          "Do you think people are born good or bad, or does society shape them?",
          "Is it always wrong to break the law? Can you think of any exceptions?",
          "Describe a moral dilemma you have faced in your own life.",
        ],
      },
      {
        id: "p3",
        title: "Happiness and fulfilment",
        prompts: [
          "What three things are most important to your personal happiness?",
          "Do you think people in the past were happier or less happy than people today?",
          "Is it selfish to prioritise your own happiness over the needs of others?",
          "Describe a moment in your life when you felt truly happy and content.",
        ],
      },
      {
        id: "p4",
        title: "Change and identity",
        prompts: [
          "Do you think people can truly change their personality or character?",
          "How much has your identity been shaped by your culture and country?",
          "If you could change one thing about yourself, what would it be and why?",
          "Describe how you are different now compared to five years ago.",
        ],
      },
    ],
  },
  {
    id: "war",
    label: "War & Peace",
    color: "#DC2626",
    emoji: "🕊️",
    topics: [
      {
        id: "w1",
        title: "Causes and consequences of war",
        prompts: [
          "What do you think is the most common cause of war throughout history?",
          "Can war ever be completely justified? Under what circumstances?",
          "How does war affect ordinary civilians who are not soldiers?",
          "Describe the long-term consequences of war on a country's society and culture.",
        ],
      },
      {
        id: "w2",
        title: "Peace and conflict resolution",
        prompts: [
          "What do you think is the most effective way to resolve conflicts between countries?",
          "Do organisations like the United Nations actually prevent wars?",
          "Is world peace a realistic goal or just an ideal? Give reasons.",
          "Describe a conflict in your region and how it has affected people's lives.",
        ],
      },
      {
        id: "w3",
        title: "Soldiers and sacrifice",
        prompts: [
          "Should young people be required to do military service? Why or why not?",
          "How should society treat veterans who return from war?",
          "Is it possible to be both a patriot and opposed to war?",
          "Describe the qualities you think a good soldier needs beyond physical strength.",
        ],
      },
    ],
  },
  {
    id: "health",
    label: "Health & Wellbeing",
    color: "#059669",
    emoji: "🏥",
    topics: [
      {
        id: "h1",
        title: "Mental health",
        prompts: [
          "Why do you think mental health problems have increased in recent years?",
          "Is it easy or difficult to talk about mental health in your culture?",
          "What daily habits do you think are most important for mental wellbeing?",
          "Describe a time when you felt stressed and explain how you dealt with it.",
        ],
      },
      {
        id: "h2",
        title: "Food and lifestyle",
        prompts: [
          "How has the typical diet in your country changed in the last 20 years?",
          "Do you think governments should tax unhealthy food? Why or why not?",
          "Is it possible to eat healthily on a small budget? How?",
          "Describe your typical daily diet and whether you think it is healthy.",
        ],
      },
      {
        id: "h3",
        title: "Healthcare systems",
        prompts: [
          "Should healthcare be completely free for everyone? Who should pay for it?",
          "What do you think is the biggest public health problem in your country?",
          "How important is exercise compared to diet for staying healthy?",
          "Describe how healthcare in your country compares to what you think is ideal.",
        ],
      },
    ],
  },
  {
    id: "environment",
    label: "Environment",
    color: "#0891B2",
    emoji: "🌍",
    topics: [
      {
        id: "env1",
        title: "Climate change",
        prompts: [
          "Do you think individuals or governments are more responsible for fighting climate change?",
          "What changes have you personally made to live in a more environmentally friendly way?",
          "How will climate change affect your country in the next 50 years?",
          "Describe an environmental problem in your local area and a possible solution.",
        ],
      },
      {
        id: "env2",
        title: "Plastic and pollution",
        prompts: [
          "Should single-use plastic be completely banned worldwide? Why or why not?",
          "What do you think is the most serious type of pollution? Why?",
          "How can ordinary people be encouraged to produce less waste?",
          "Describe the environmental conditions in your city. Is it clean or polluted?",
        ],
      },
      {
        id: "env3",
        title: "Nature and animals",
        prompts: [
          "Do humans have a responsibility to protect endangered animal species?",
          "Is it ethical to keep animals in zoos? What are the arguments on both sides?",
          "How important is it for children to spend time in nature?",
          "Describe a place in nature that is special to you and explain why.",
        ],
      },
    ],
  },
  {
    id: "society",
    label: "Society & Culture",
    color: "#D97706",
    emoji: "🌐",
    topics: [
      {
        id: "s1",
        title: "Gender and equality",
        prompts: [
          "Do you think men and women have equal opportunities in your country?",
          "What professions are still dominated by one gender and why do you think that is?",
          "How have gender roles changed in your country over the last generation?",
          "Describe someone in your life who has challenged traditional gender expectations.",
        ],
      },
      {
        id: "s2",
        title: "Immigration and identity",
        prompts: [
          "What do you think are the main benefits and challenges of immigration?",
          "How does a person keep their cultural identity when living in a new country?",
          "Should countries have open borders or strict immigration controls?",
          "Describe how immigration has affected your country's culture and society.",
        ],
      },
      {
        id: "s3",
        title: "Traditional vs modern values",
        prompts: [
          "What traditional values from your culture do you want to preserve? Why?",
          "Is globalisation making all cultures too similar to each other?",
          "How has the relationship between older and younger generations changed?",
          "Describe a tradition from your culture that you find meaningful or interesting.",
        ],
      },
      {
        id: "s4",
        title: "Crime and justice",
        prompts: [
          "What do you think is the best way to reduce crime in society?",
          "Is the purpose of prison to punish people or to rehabilitate them?",
          "Should the age at which someone can be tried as an adult be lowered?",
          "Describe a law in your country that you think is unfair or should be changed.",
        ],
      },
    ],
  },
  {
    id: "future",
    label: "Future & Dreams",
    color: "#7C3AED",
    emoji: "🚀",
    topics: [
      {
        id: "f1",
        title: "Your personal future",
        prompts: [
          "Where do you see yourself in ten years? Describe your life in detail.",
          "What is one dream you have that most people around you don't know about?",
          "What is the biggest obstacle standing between you and your goals right now?",
          "Describe the life you would live if you knew you could not fail.",
        ],
      },
      {
        id: "f2",
        title: "The future of humanity",
        prompts: [
          "Do you think the world will be a better or worse place in 100 years?",
          "Will humans ever live on other planets? Would you want to?",
          "What invention do you think is most needed to solve humanity's problems?",
          "Describe the biggest threat to humanity's future and how it could be overcome.",
        ],
      },
      {
        id: "f3",
        title: "Work and automation",
        prompts: [
          "Which jobs do you think will still exist in 30 years? Which will disappear?",
          "If robots do most of the work, how should people spend their time?",
          "Would you rather work fewer hours for less pay or more hours for more pay?",
          "Describe your ideal work-life balance and how close you are to achieving it.",
        ],
      },
    ],
  },
];

export default function MyQuestionsTab() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [search, setSearch] = useState("");

  const category = categories.find((c) => c.id === activeCategory) || categories[0];

  const filteredTopics = search.trim()
    ? category.topics.filter(
        (t) =>
          t.title.toLowerCase().includes(search.toLowerCase()) ||
          t.prompts.some((p) => p.toLowerCase().includes(search.toLowerCase()))
      )
    : category.topics;

  return (
    <>
      {/* Header */}
      <div className="my-q-header">
        <h2>Discussion Topics</h2>
        <p>Choose a category and a topic for your students to discuss.</p>
      </div>

      {/* Category chips */}
      <div className="topic-scroll">
        {categories.map((c) => (
          <button
            key={c.id}
            className={`topic-chip${activeCategory === c.id ? " active" : ""}`}
            style={activeCategory === c.id ? { backgroundColor: c.color } : {}}
            onClick={() => {
              setActiveCategory(c.id);
              setSearch("");
              setExpandedTopic(null);
            }}
          >
            {c.emoji} {c.label}
          </button>
        ))}
      </div>

      {/* Category heading */}
      <div className="topic-title-bar">
        <div className="topic-color-bar" style={{ backgroundColor: category.color }} />
        <span className="topic-title">
          {category.emoji} {category.label}
        </span>
        <span className="topic-count">{category.topics.length} topics</span>
      </div>

      {/* Search */}
      <div className="search-wrap search-box">
        <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          className="search-input"
          placeholder="Search topics or prompts…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Topics */}
      {filteredTopics.length === 0 ? (
        <div className="empty-state">
          <p>🔍</p>
          <p>No topics match "{search}"</p>
        </div>
      ) : (
        filteredTopics.map((topic) => {
          const isOpen = expandedTopic === topic.id;
          return (
            <div className="rule-card" key={topic.id}>
              {/* Topic header — click to expand */}
              <button
                onClick={() => setExpandedTopic(isOpen ? null : topic.id)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <div className="rule-header" style={{ marginBottom: isOpen ? 12 : 0 }}>
                  <div className="rule-dot" style={{ backgroundColor: category.color }} />
                  <span className="rule-title" style={{ flex: 1 }}>{topic.title}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                      color: "var(--text-muted)",
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>

              {/* Prompts */}
              {isOpen && (
                <div className="examples">
                  {topic.prompts.map((prompt, i) => (
                    <div
                      key={i}
                      className="example"
                      style={{ borderLeftColor: category.color, fontStyle: "normal" }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: category.color,
                          display: "block",
                          marginBottom: 3,
                        }}
                      >
                        Q{i + 1}
                      </span>
                      {prompt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
    </>
  );
}