import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { TrendingUp, Plus, Search, Filter, MoreHorizontal, DollarSign, Calendar } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const pipelineData = [
  {
    id: 1,
    company: "Tesla Inc.",
    symbol: "TSLA",
    sector: "Technology",
    status: "researching",
    targetPrice: "$240.00",
    currentPrice: "$218.45",
    upside: "+9.9%",
    addedDate: "2024-01-15",
    notes: "Strong EV market position, expanding globally"
  },
  {
    id: 2,
    company: "Microsoft Corp.",
    symbol: "MSFT",
    sector: "Technology", 
    status: "in-progress",
    targetPrice: "$420.00",
    currentPrice: "$385.20",
    upside: "+9.0%",
    addedDate: "2024-01-12",
    notes: "AI integration driving growth, solid fundamentals"
  },
  {
    id: 3,
    company: "Johnson & Johnson",
    symbol: "JNJ",
    sector: "Healthcare",
    status: "approved",
    targetPrice: "$170.00",
    currentPrice: "$162.30",
    upside: "+4.7%",
    addedDate: "2024-01-10",
    notes: "Stable dividend, healthcare sector strength"
  },
  {
    id: 4,
    company: "Meta Platforms",
    symbol: "META",
    sector: "Technology",
    status: "rejected",
    targetPrice: "$280.00",
    currentPrice: "$295.50",
    upside: "-5.2%",
    addedDate: "2024-01-08",
    notes: "Overvalued at current price, regulatory concerns"
  },
  {
    id: 5,
    company: "Berkshire Hathaway",
    symbol: "BRK.B",
    sector: "Financial",
    status: "researching",
    targetPrice: "$385.00",
    currentPrice: "$368.90",
    upside: "+4.4%",
    addedDate: "2024-01-14",
    notes: "Buffett's track record, diverse portfolio"
  }
]

const statusConfig = {
  researching: { color: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20', label: 'Researching' },
  'in-progress': { color: 'bg-blue-500/10 text-blue-600 border-blue-500/20', label: 'In Progress' },
  approved: { color: 'bg-green-500/10 text-green-600 border-green-500/20', label: 'Approved' },
  rejected: { color: 'bg-red-500/10 text-red-600 border-red-500/20', label: 'Rejected' }
}

export function Pipeline() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredData = pipelineData.filter(item => {
    const matchesSearch = item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const statusCounts = {
    all: pipelineData.length,
    researching: pipelineData.filter(item => item.status === 'researching').length,
    'in-progress': pipelineData.filter(item => item.status === 'in-progress').length,
    approved: pipelineData.filter(item => item.status === 'approved').length,
    rejected: pipelineData.filter(item => item.status === 'rejected').length
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl">Investment Pipeline</h1>
            <p className="text-muted-foreground">Track potential investments and research progress</p>
          </div>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Investment
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search companies or symbols..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {Object.entries(statusCounts).map(([status, count]) => (
            <Button
              key={status}
              variant={statusFilter === status ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(status)}
              className="gap-2"
            >
              {status === 'all' ? 'All' : statusConfig[status as keyof typeof statusConfig]?.label || status}
              <span className="text-xs opacity-60">({count})</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Pipeline Items */}
      <div className="space-y-4">
        {filteredData.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg">{item.company}</h3>
                    <Badge variant="outline" className="text-xs">
                      {item.symbol}
                    </Badge>
                    <Badge className={`text-xs border ${statusConfig[item.status as keyof typeof statusConfig].color}`}>
                      {statusConfig[item.status as keyof typeof statusConfig].label}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{item.notes}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Current</p>
                        <p>{item.currentPrice}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Target</p>
                        <p>{item.targetPrice}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">Upside</p>
                        <p className={item.upside.startsWith('+') ? 'text-green-600' : 'text-red-600'}>{item.upside}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Added</p>
                        <p>{new Date(item.addedDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Notes</DropdownMenuItem>
                    <DropdownMenuItem>Change Status</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredData.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <TrendingUp className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-lg mb-2">No investments found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || statusFilter !== 'all' 
                ? 'Try adjusting your search or filters'
                : 'Start building your investment pipeline by adding potential investments'
              }
            </p>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add First Investment
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}