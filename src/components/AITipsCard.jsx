import { Lightbulb, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

const aiTips = [
  "Your portfolio lacks diversification. Consider adding bonds or international stocks.",
  "Tech stocks make up 65% of your portfolio. Consider rebalancing to reduce risk.",
  "You haven't made any investments this month. The market shows promising opportunities.",
  "Your cash allocation is high at 15%. Consider investing in growth opportunities.",
  "Consider dollar-cost averaging into index funds for consistent long-term growth."
]

export function AITipsCard() {
  const [currentTip, setCurrentTip] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % aiTips.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTip, 5000)
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-4 h-4 text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm text-blue-300 mb-1">AI Insight</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {aiTips[currentTip]}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="w-6 h-6 p-0 text-foreground/60 hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}