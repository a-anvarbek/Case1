import { useState, useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { MorningBrief } from './components/MorningBrief'
import { Pipeline } from './components/Pipeline'
import { Notes } from './components/Notes'
import { Portfolio } from './components/Portfolio'
import { Export } from './components/Export'

export default function App() {
  const [activeSection, setActiveSection] = useState('morning-brief')
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Initialize dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const handleThemeToggle = () => {
    setIsDarkMode(prev => !prev)
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'morning-brief':
        return <MorningBrief />
      case 'pipeline':
        return <Pipeline />
      case 'notes':
        return <Notes />
      case 'portfolio':
        return <Portfolio />
      case 'export':
        return <Export />
      default:
        return <MorningBrief />
    }
  }

  return (
    <div className="size-full flex bg-background">
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  )
}