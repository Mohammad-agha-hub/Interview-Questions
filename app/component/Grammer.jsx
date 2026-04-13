"use client";

import { useState } from "react";
import { grammarTopics } from "@/app/grammer";


const LEVEL_META = {
  3: { label: "Level 3", accent: "#7C3AED", bg: "#F5F3FF" },
  4: { label: "Level 4", accent: "#0891B2", bg: "#ECFEFF" },
  5: { label: "Level 5", accent: "#059669", bg: "#ECFDF5" },
};

export default function GrammarTab() {
  const [activeLevel, setActiveLevel] = useState(3);
  const [activeTopic, setActiveTopic] = useState("");
  const [search, setSearch] = useState("");

  // Filter topics to the active level
  const levelTopics = grammarTopics.filter((t) => t.level === activeLevel);

  // Resolve active topic: prefer saved activeTopic, else default to first of level
  const resolvedTopicId =
    levelTopics.find((t) => t.id === activeTopic)?.id ?? levelTopics[0]?.id;

  const topic = levelTopics.find((t) => t.id === resolvedTopicId) ?? levelTopics[0];

  const filteredRules = search.trim()
    ? topic?.rules.filter(
        (r) =>
          r.rule.toLowerCase().includes(search.toLowerCase()) ||
          r.examples.some((e) =>
            e.toLowerCase().includes(search.toLowerCase())
          )
      )
    : topic?.rules ?? [];

  const meta = LEVEL_META[activeLevel];

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setActiveTopic(""); // reset so it defaults to first topic of new level
    setSearch("");
  };

  return (
    <>
      {/* ── Level Selector ── */}
      <div className="level-selector">
        {([3, 4, 5]).map((lvl) => {
          const m = LEVEL_META[lvl];
          const isActive = activeLevel === lvl;
          return (
            <button
              key={lvl}
              className={`level-btn${isActive ? " level-btn--active" : ""}`}
              style={
                isActive
                  ? {
                      backgroundColor: m.accent,
                      borderColor: m.accent,
                      color: "#fff",
                    }
                  : {
                      backgroundColor: m.bg,
                      borderColor: m.accent,
                      color: m.accent,
                    }
              }
              onClick={() => handleLevelChange(lvl)}
            >
              <span className="level-btn-label">{m.label}</span>
              <span
                className="level-btn-count"
                style={{ opacity: isActive ? 0.85 : 0.7 }}
              >
                {grammarTopics.filter((t) => t.level === lvl).length} topics
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Topic chips ── */}
      <div className="topic-scroll">
        {levelTopics.map((t) => (
          <button
            key={t.id}
            className={`topic-chip${resolvedTopicId === t.id ? " active" : ""}`}
            style={resolvedTopicId === t.id ? { backgroundColor: t.color } : {}}
            onClick={() => {
              setActiveTopic(t.id);
              setSearch("");
            }}
          >
            {t.title}
          </button>
        ))}
      </div>

      {/* ── Topic heading ── */}
      {topic && (
        <>
          <div className="topic-title-bar">
            <div
              className="topic-color-bar"
              style={{ backgroundColor: topic.color }}
            />
            <span className="topic-title">{topic.title}</span>
            <span
              className="level-badge"
              style={{ backgroundColor: meta.bg, color: meta.accent, border: `1px solid ${meta.accent}` }}
            >
              Level {activeLevel}
            </span>
            <span className="topic-count">{topic.rules.length} rules</span>
          </div>

          {/* ── Search ── */}
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

          {/* ── Rules ── */}
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
      )}

      {/* ── Inline styles for new elements ── */}
      <style>{`
        .level-selector {
          display: flex;
          gap: 10px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .level-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: 10px 22px;
          border-radius: 12px;
          border: 2px solid transparent;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.18s ease;
          flex: 1;
          min-width: 90px;
        }

        .level-btn:hover {
          filter: brightness(0.95);
          transform: translateY(-1px);
        }

        .level-btn--active {
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .level-btn-label {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .level-btn-count {
          font-size: 11px;
          font-weight: 500;
        }

        .level-badge {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 20px;
          margin-left: 6px;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
}