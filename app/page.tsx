"use client";

import { useState } from "react";
import GrammarTab from "@/app/component/Grammer";
import MyQuestionsTab from "@/app/component/MyQuestion";

export default function Home() {
  const [tab, setTab] = useState<"grammar" | "myq">("grammar");

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <h1>Grammar Study</h1>
          <p>Rules, structures &amp; examples for every topic</p>
        </div>
      </header>

      <main className="main">
        {/* Top-level tab switcher */}
        <div className="top-tabs">
          <button
            className={`top-tab${tab === "grammar" ? " active" : ""}`}
            onClick={() => setTab("grammar")}
          >
           
            Grammar
          </button>
          <button
            className={`top-tab${tab === "myq" ? " active" : ""}`}
            onClick={() => setTab("myq")}
          >
            
            Topic
          </button>
        </div>

        {tab === "grammar" ? <GrammarTab /> : <MyQuestionsTab />}
      </main>
    </div>
  );
}
