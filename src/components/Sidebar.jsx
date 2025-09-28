import { 
  BarChart3, 
  FileText, 
  Download, 
  Sun, 
  Moon, 
  TrendingUp,
  User
} from 'lucide-react'
import { Button } from './ui/button'
import { cn } from './ui/utils'
import { useNavigate, useLocation } from 'react-router'
import ROUTES from "../router/routes"

const navigationItems = [
  { path: ROUTES.HOME, label: 'Morning Brief', icon: Sun },
  { path: ROUTES.PIPELINE, label: 'Pipeline', icon: TrendingUp },
  { path: ROUTES.NOTES, label: 'Notes', icon: FileText },
  { path: ROUTES.PORTFOLIO, label: 'Portfolio', icon: BarChart3 },
  { path: ROUTES.EXPORT, label: 'Export', icon: Download },
]

export default function Sidebar({ isDarkMode, onThemeToggle }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-19 bg-sidebar-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="text-sidebar-foreground">InvestTracker</h1>
            <p className="text-xs text-sidebar-foreground/60">Portfolio Manager</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          return (
            <Button
              key={item.path}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-12",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
              onClick={() => navigate(item.path)}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onThemeToggle}
          className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
        
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-sidebar-accent-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-sidebar-foreground">John Investor</p>
            <p className="text-xs text-sidebar-foreground/60 truncate">john@portfolio.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
