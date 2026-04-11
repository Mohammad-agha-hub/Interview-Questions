"use client";

import { useState } from "react";



const categories = [
  {
    id: "technology",
    label: "Technology",
    color: "#0891B2",
    
    topics: [
      {
        id: "t1",
        title: "Social media and daily life",
        prompts: [
          
          "Do you think social media makes people more or less lonely?",
          "Should there be an age limit for using social media? Why or why not?",
          "Describe how social media has changed the way people communicate.",
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
          "What are the biggest dangers of the internet for young people?",
          "Do you think people share too much personal information online?",
          
        ],
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    color: "#7C3AED",
   
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
          "Some people say grades cause too much stress. Do you agree?",
         
        ],
      },
      {
        id: "e3",
        title: "Online learning vs classroom",
        prompts: [
          "What are the advantages and disadvantages of studying online?",
          "Do you think universities will become mostly online in the future?",
         
        ],
      },
      {
        id: "e4",
        title: "Learning languages",
        prompts: [
          "Why are you learning English? How do you think it will help you?",
         
        ],
      },
    ],
  },
  {
    id: "money",
    label: "Money & Work",
    color: "#059669",
   
    topics: [
      {
        id: "m1",
        title: "Money and happiness",
        prompts: [
          "Do you think money can buy happiness? Give examples to support your view.",
          "What would you do if you won one million dollars tomorrow?",
          "Is it better to have a high salary or a job you love? Why?",
         
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
          "What responsibilities do wealthy people have toward society?",
         
        ],
      },
      {
        id: "m4",
        title: "Saving and spending",
        prompts: [
          
          "What is one thing most people waste money on without realising it?",
        ],
      },
    ],
  },
  {
    id: "philosophy",
    label: "Philosophy & Life",
    color: "#DB2777",
   
    topics: [
      {
        id: "p1",
        title: "The meaning of success",
        prompts: [
          "How do you personally define success? Is it about money, happiness, or something else?",
          "Can a person be a failure in the eyes of society but a success in their own eyes?",
          "Do you think success requires sacrifice? What have you sacrificed to achieve something?",
        
        ],
      },
      {
        id: "p2",
        title: "Right and wrong",
        prompts: [
          "Is it ever acceptable to lie? Give a situation where lying might be the right thing to do.",
          "Do you think people are born good or bad, or does society shape them?",
          "Is it always wrong to break the law? Can you think of any exceptions?",
         
        ],
      },
      {
        id: "p3",
        title: "Happiness and fulfilment",
        prompts: [
          "What three things are most important to your personal happiness?",
          "Do you think people in the past were happier or less happy than people today?",
          "Is it selfish to prioritise your own happiness over the needs of others?",
          
        ],
      },
      {
        id: "p4",
        title: "Change and identity",
        prompts: [
          "Do you think people can truly change their personality or character?",
          
          "If you could change one thing about yourself, what would it be and why?",
         
        ],
      },
    ],
  },
  {
    id: "war",
    label: "War & Peace",
    color: "#DC2626",
   
    topics: [
      {
        id: "w1",
        title: "Causes and consequences of war",
        prompts: [
          "What do you think is the most common cause of war throughout history?",
          "Can war ever be completely justified? Under what circumstances?",
          "How does war affect ordinary civilians who are not soldiers?",
         
        ],
      },
      {
        id: "w2",
        title: "Peace and conflict resolution",
        prompts: [
          "What do you think is the most effective way to resolve conflicts between countries?",
         
        ],
      },
      {
        id: "w3",
        title: "Soldiers and sacrifice",
        prompts: [
          "Should young people be required to do military service? Why or why not?",
        
        ],
      },
    ],
  },
  
  
  {
    id: "society",
    label: "Society & Culture",
    color: "#D97706",
   
    topics: [
      {
        id: "s1",
        title: "Gender and equality",
        prompts: [
          "Do you think men and women have equal opportunities in your country?",
         
        ],
      },
      {
        id: "s2",
        title: "Immigration and identity",
        prompts: [
          "What do you think are the main benefits and challenges of immigration?",
          
        ],
      },
     
      {
        id: "s4",
        title: "Crime and justice",
        prompts: [
          "What do you think is the best way to reduce crime in society?",
          "Is the purpose of prison to punish people or to rehabilitate them?",
          
          "Describe a law in your country that you think is unfair or should be changed.",
        ],
      },
    ],
  },
  {
    id: "future",
    label: "Future & Dreams",
    color: "#7C3AED",
    
    topics: [
      
      {
        id: "f2",
        title: "The future of humanity",
        prompts: [
          "Do you think the world will be a better or worse place in 100 years?",
          "Describe the biggest threat to humanity's future and how it could be overcome.",
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