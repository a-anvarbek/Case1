// Pages
import MainRouter from "./router/MainRouter";

// Components
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("morning-brief");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="size-full flex bg-background">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />
      <main className="flex-1 overflow-auto">
        <MainRouter />
      </main>
    </div>
  );
}
