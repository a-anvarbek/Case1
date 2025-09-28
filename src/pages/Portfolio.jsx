import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { 
  BarChart3, 
  Eye
} from 'lucide-react'
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart, Bar, Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

// === DATA ===
const portfolioValue = [
  { date: "Jan", value: 700000 },
  { date: "Feb", value: 730000 },
  { date: "Mar", value: 710000 },
  { date: "Apr", value: 750000 },
  { date: "May", value: 780000 },
  { date: "Jun", value: 820000 },
  { date: "Jul", value: 800000 },
  { date: "Aug", value: 840000 },
]

const holdings = [
  { symbol: "AAPL", name: "Apple Inc.", shares: 450, avgCost: 166.2, value: 95477, allocation: 10.1, dayChange: 2.4 },
  { symbol: "MSFT", name: "Microsoft Corp.", shares: 200, avgCost: 320.5, value: 77040, allocation: 9.1, dayChange: 1.8 },
  { symbol: "GOOGL", name: "Alphabet Inc.", shares: 180, avgCost: 125.8, value: 25677, allocation: 3.0, dayChange: -0.8 },
  { symbol: "NVDA", name: "NVIDIA Corp.", shares: 85, avgCost: 245.9, value: 74417, allocation: 8.9, dayChange: 4.2 },
  { symbol: "JNJ", name: "Johnson & Johnson", shares: 320, avgCost: 158.4, value: 51936, allocation: 6.1, dayChange: 0.3 },
]

const assetAllocation = [
  { name: "Technology", value: 35, color: "#4f46e5" },
  { name: "Healthcare", value: 20, color: "#22c55e" },
  { name: "Financial", value: 15, color: "#f59e0b" },
  { name: "Consumer", value: 12, color: "#ef4444" },
  { name: "Industrial", value: 10, color: "#06b6d4" },
  { name: "Energy", value: 5, color: "#3b82f6" },
  { name: "Cash", value: 3, color: "#9ca3af" },
]

function Portfolio() {
  return (
    <motion.div 
      className="p-6 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
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
          <Button size="sm">Rebalance</Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Value", value: "$847,234", change: "+21.0%" },
          { label: "Day Change", value: "+$19,847", change: "+2.4%" },
          { label: "Total Return", value: "+$147,234", change: "+21.0%" },
          { label: "Positions", value: "23", change: "5 sectors" }
        ].map((item, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-2xl">{item.value}</p>
              <span className="text-sm text-green-600">{item.change}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Portfolio Growth</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={portfolioValue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Asset Allocation</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie data={assetAllocation} dataKey="value" nameKey="name" outerRadius={120}>
                  {assetAllocation.map((item, idx) => (
                    <Cell key={idx} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Holdings */}
      <Tabs defaultValue="holdings" className="w-full">
        <TabsList>
          <TabsTrigger value="holdings">Holdings</TabsTrigger>
          <TabsTrigger value="sectors">Sector Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="holdings">
          <Card>
            <CardHeader><CardTitle>Top Holdings</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {holdings.map((h, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-sm">{h.symbol}</span>
                    </div>
                    <div>
                      <h4 className="text-sm">{h.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {h.shares} shares @ ${h.avgCost}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">${h.value.toLocaleString()}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {h.allocation}%
                      </Badge>
                      <span className={`text-xs ${h.dayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {h.dayChange >= 0 ? '+' : ''}{h.dayChange}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sectors">
          <Card>
            <CardHeader>
              <CardTitle>Sector Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart width={500} height={300} data={[
                { sector: "Technology", value: 35 },
                { sector: "Healthcare", value: 20 },
                { sector: "Financial", value: 15 },
                { sector: "Industrial", value: 10 },
                { sector: "Consumer", value: 12 },
                { sector: "Energy", value: 5 },
                { sector: "Cash", value: 3 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="sector" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
    
  )
}

export default Portfolio;