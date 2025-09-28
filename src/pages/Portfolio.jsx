import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'  
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Percent,
  Eye,
  MoreHorizontal
} from 'lucide-react'
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart as RechartsBarChart,
  Bar
} from 'recharts'

const portfolioValue = [
  { month: 'Jan', value: 680000 },
  { month: 'Feb', value: 720000 },
  { month: 'Mar', value: 695000 },
  { month: 'Apr', value: 750000 },
  { month: 'May', value: 780000 },
  { month: 'Jun', value: 820000 },
  { month: 'Jul', value: 800000 },
  { month: 'Aug', value: 847000 }
]

const assetAllocation = [
  { name: 'Technology', value: 35, amount: 296450, color: '#3b82f6' },
  { name: 'Healthcare', value: 20, amount: 169447, color: '#10b981' },
  { name: 'Financial', value: 15, amount: 127085, color: '#f59e0b' },
  { name: 'Consumer', value: 12, amount: 101668, color: '#ef4444' },
  { name: 'Industrial', value: 10, amount: 84723, color: '#8b5cf6' },
  { name: 'Energy', value: 5, amount: 42362, color: '#06b6d4' },
  { name: 'Cash', value: 3, amount: 25424, color: '#6b7280' }
]

const holdings = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    shares: 450,
    avgCost: 165.20,
    currentPrice: 189.95,
    value: 85477,
    dayChange: 2.4,
    totalReturn: 15.0,
    allocation: 10.1
  },
  {
    symbol: 'MSFT', 
    name: 'Microsoft Corp.',
    shares: 200,
    avgCost: 320.50,
    currentPrice: 385.20,
    value: 77040,
    dayChange: 1.8,
    totalReturn: 20.2,
    allocation: 9.1
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    shares: 180,
    avgCost: 125.80,
    currentPrice: 142.65,
    value: 25677,
    dayChange: -0.8,
    totalReturn: 13.4,
    allocation: 3.0
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    shares: 85,
    avgCost: 245.90,
    currentPrice: 875.50,
    value: 74417,
    dayChange: 4.2,
    totalReturn: 255.9,
    allocation: 8.8
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    shares: 320,
    avgCost: 158.40,
    currentPrice: 162.30,
    value: 51936,
    dayChange: 0.3,
    totalReturn: 2.5,
    allocation: 6.1
  }
]

const sectorPerformance = [
  { sector: 'Technology', return: 28.5, color: '#3b82f6' },
  { sector: 'Healthcare', return: 12.3, color: '#10b981' },
  { sector: 'Financial', return: 8.9, color: '#f59e0b' },
  { sector: 'Consumer', return: 15.7, color: '#ef4444' },
  { sector: 'Industrial', return: 6.2, color: '#8b5cf6' },
  { sector: 'Energy', return: -2.4, color: '#06b6d4' }
]

export default function Portfolio() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl">Portfolio</h1>
            <p className="text-muted-foreground">Track your investments and performance</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <Button size="sm">
            Rebalance
          </Button>
        </div>
      </div>

      {/* Portfolio Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl">$847,234</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-sm text-green-600">+21.0%</span>
                </div>
              </div>
              <DollarSign className="w-8 h-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Day Change</p>
                <p className="text-2xl">+$19,847</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-sm text-green-600">+2.4%</span>
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Return</p>
                <p className="text-2xl">+$147,234</p>
                <div className="flex items-center gap-1 mt-1">
                  <Percent className="w-3 h-3 text-green-500" />
                  <span className="text-sm text-green-600">+21.0%</span>
                </div>
              </div>
              <PieChart className="w-8 h-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Positions</p>
                <p className="text-2xl">23</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-sm text-muted-foreground">5 sectors</span>
                </div>
              </div>
              <BarChart3 className="w-8 h-8 text-muted-foreground/50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={portfolioValue}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                <XAxis dataKey="month" className="text-muted-foreground" />
                <YAxis className="text-muted-foreground" />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                  labelFormatter={(label) => `Month: ${label}`}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Asset Allocation Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={assetAllocation}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {assetAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name, props) => [
                    `${value}% ($${props.payload.amount.toLocaleString()})`,
                    name
                  ]}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px'
                  }}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Holdings */}
      <Tabs defaultValue="holdings" className="w-full">
        <TabsList>
          <TabsTrigger value="holdings">Holdings</TabsTrigger>
          <TabsTrigger value="sectors">Sector Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="holdings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {holdings.map((holding, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-sm">{holding.symbol}</span>
                      </div>
                      <div>
                        <h4 className="text-sm">{holding.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {holding.shares} shares @ ${holding.avgCost}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm">${holding.value.toLocaleString()}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {holding.allocation}%
                        </Badge>
                        <span className={`text-xs ${holding.dayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {holding.dayChange >= 0 ? '+' : ''}{holding.dayChange}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sectors">
          <Card>
            <CardHeader>
              <CardTitle>Sector Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart data={sectorPerformance}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                  <XAxis dataKey="sector" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Return']}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }}
                  />
                  <Bar dataKey="return" fill={(entry) => entry.color} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}