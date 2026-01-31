import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InputSection from "./components/InputSection";
import ResultsSection from "./components/ResultsSection";

function App() {
  const [theme, setTheme] = useState("light");
  const [analysisState, setAnalysisState] = useState("idle"); // idle, analyzing, complete

  // Initialize theme from system preference or local storage could go here
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleAnalyze = () => {
    setAnalysisState("analyzing");
    // Simulate API call
    setTimeout(() => {
      setAnalysisState("complete");
    }, 2000);
  };

  return (
    <div className="app-layout">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="container" style={{ paddingBottom: "80px" }}>
        <HeroSection />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <InputSection
            onAnalyze={handleAnalyze}
            isAnalyzing={analysisState === "analyzing"}
          />

          {analysisState === "complete" && (
            <div className="animate-fade-in">
              <ResultsSection />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
