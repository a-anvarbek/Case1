import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { AITipsCard } from './AITipsCard'
import { TrendingUp, TrendingDown, DollarSign, Activity, Clock, Newspaper } from 'lucide-react'

const marketNews = [
  {
    title: "S&P 500 Reaches New High Amid Tech Rally",
    time: "2 hours ago",
    sentiment: "positive",
    summary: "Technology stocks led the market higher with strong quarterly earnings from major players."
  },
  {
    title: "Federal Reserve Hints at Rate Stability",
    time: "4 hours ago", 
    sentiment: "neutral",
    summary: "Central bank signals potential pause in rate hikes, providing market stability."
  },
  {
    title: "Oil Prices Surge on Supply Concerns",
    time: "6 hours ago",
    sentiment: "negative",
    summary: "Energy sector volatility continues as geopolitical tensions affect supply chains."
  }
]

const portfolioStats = [
  {
    label: "Total Value",
    value: "$847,234",
    change: "+2.4%",
    isPositive: true,
    icon: DollarSign
  },
  {
    label: "Daily Change",
    value: "+$19,847",
    change: "+2.4%",
    isPositive: true,
    icon: TrendingUp
  },
  {
    label: "Total Return",
    value: "+$147,234",
    change: "+21.0%",
    isPositive: true,
    icon: Activity
  },
  {
    label: "Cash Available",
    value: "$23,456",
    change: "-5.2%",
    isPositive: false,
    icon: DollarSign
  }
]

export function MorningBrief() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <Clock className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl">Morning Brief</h1>
          <p className="text-muted-foreground">Daily market overview and portfolio status</p>
        </div>
      </div>

      {/* AI Tips Card */}
      <AITipsCard />

      {/* Portfolio Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xl">{stat.value}</p>
                  </div>
                  <div className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {stat.isPositive ? (
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-500" />
                  )}
                  <span className={`text-xs ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">vs yesterday</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Market News */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5" />
            <CardTitle>Market News</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {marketNews.map((news, index) => (
            <div key={index} className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-sm">{news.title}</h3>
                    <Badge 
                      variant={news.sentiment === 'positive' ? 'default' : news.sentiment === 'negative' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {news.sentiment}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{news.summary}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{news.time}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="p-3 rounded-lg border bg-card hover:bg-accent transition-colors text-sm">
              Add Investment
            </button>
            <button className="p-3 rounded-lg border bg-card hover:bg-accent transition-colors text-sm">
              View Watchlist
            </button>
            <button className="p-3 rounded-lg border bg-card hover:bg-accent transition-colors text-sm">
              Market Analysis
            </button>
            <button className="p-3 rounded-lg border bg-card hover:bg-accent transition-colors text-sm">
              Generate Report
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}