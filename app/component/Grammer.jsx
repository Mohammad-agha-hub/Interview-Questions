"use client";

import { useState } from "react";
import { grammarTopics } from "@/app/grammer";

export default function GrammarTab() {
  const [activeTopic, setActiveTopic] = useState(grammarTopics[0].id);
  const [search, setSearch] = useState("");

  const topic =
    grammarTopics.find((t) => t.id === activeTopic) || grammarTopics[0];

  const filteredRules = search.trim()
    ? topic.rules.filter(
        (r) =>
          r.rule.toLowerCase().includes(search.toLowerCase()) ||
          r.examples.some((e) =>
            e.toLowerCase().includes(search.toLowerCase()),
          ),
      )
    : topic.rules;

  return (
    <>
      {/* Topic chips */}
      <div className="topic-scroll">
        {grammarTopics.map((t) => (
          <button
            key={t.id}
            className={`topic-chip${activeTopic === t.id ? " active" : ""}`}
            style={activeTopic === t.id ? { backgroundColor: t.color } : {}}
            onClick={() => {
              setActiveTopic(t.id);
              setSearch("");
            }}
          >
            {t.title}
          </button>
        ))}
      </div>

      {/* Topic heading */}
      <div className="topic-title-bar">
        <div
          className="topic-color-bar"
          style={{ backgroundColor: topic.color }}
        />
        <span className="topic-title">{topic.title}</span>
        <span className="topic-count">{topic.rules.length} rules</span>
      </div>

      {/* Search */}
      <div className="search-box search-wrap">
        <svg
          className="search-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          className="search-input"
          placeholder="Search rules or examples…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Rules */}
      {filteredRules.length === 0 ? (
        <div className="empty-state">
          <p>🔍</p>
          <p>No results found for "{search}"</p>
        </div>
      ) : (
        filteredRules.map((rule, i) => (
          <div className="rule-card" key={i}>
            <div className="rule-header">
              <div
                className="rule-dot"
                style={{ backgroundColor: topic.color }}
              />
              <span className="rule-title">{rule.rule}</span>
            </div>
            <div className="structure-badge">{rule.structure}</div>
            <div className="examples">
              {rule.examples.map((ex, j) => (
                <div
                  className="example"
                  style={{ borderLeftColor: topic.color }}
                  key={j}
                >
                  {ex}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </>
  );
}
