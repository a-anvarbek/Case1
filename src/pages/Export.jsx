import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Checkbox } from '../components/ui/checkbox'
import { 
  Download, 
  FileText,
  BarChart3, 
  Settings,
  FileSpreadsheet,
  File,
  CheckCircle,
  Clock
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const exportHistory = [
  {
    id: 1,
    name: "Q4 2024 Portfolio Report",
    type: "PDF",
    date: "2024-01-15",
    status: "completed",
    size: "2.4 MB"
  },
  {
    id: 2,
    name: "Holdings Analysis December",
    type: "Excel",
    date: "2024-01-10",
    status: "completed",
    size: "856 KB"
  },
  {
    id: 3,
    name: "Performance Summary 2024",
    type: "PDF",
    date: "2024-01-05",
    status: "processing",
    size: "1.8 MB"
  }
]

const reportTypes = [
  {
    id: 'portfolio-summary',
    name: 'Portfolio Summary',
    description: 'Overview of holdings, performance, and allocation',
    formats: ['PDF', 'Excel'],
    icon: BarChart3
  },
  {
    id: 'performance-report',
    name: 'Performance Report',
    description: 'Detailed analysis of returns and benchmarks',
    formats: ['PDF'],
    icon: FileText
  },
  {
    id: 'holdings-detail',
    name: 'Holdings Detail',
    description: 'Complete list of positions with cost basis',
    formats: ['Excel', 'CSV'],
    icon: FileSpreadsheet
  },
  {
    id: 'tax-report',
    name: 'Tax Report',
    description: 'Capital gains, dividends, and tax information',
    formats: ['PDF', 'Excel'],
    icon: File
  }
]

export default function Export() {
  const [selectedReports, setSelectedReports] = useState([])
  const [selectedFormat, setSelectedFormat] = useState('PDF')
  const [dateRange, setDateRange] = useState('ytd')
  const [isExporting, setIsExporting] = useState(false)

  const handleReportToggle = (reportId) => {
    setSelectedReports(prev => 
      prev.includes(reportId) 
        ? prev.filter(id => id !== reportId)
        : [...prev, reportId]
    )
  }

  const handleExport = async () => {
    setIsExporting(true)
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsExporting(false)
    // Reset selection
    setSelectedReports([])
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Download className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl">Export</h1>
            <p className="text-muted-foreground">Generate and download portfolio reports</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="generate" className="w-full">
        <TabsList>
          <TabsTrigger value="generate">Generate Reports</TabsTrigger>
          <TabsTrigger value="history">Export History</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Report Selection */}
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Select Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reportTypes.map((report) => {
                    const Icon = report.icon
                    const isSelected = selectedReports.includes(report.id)
                    
                    return (
                      <div 
                        key={report.id} 
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          isSelected ? 'border-primary bg-primary/5' : 'hover:bg-accent/50'
                        }`}
                        onClick={() => handleReportToggle(report.id)}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox 
                            checked={isSelected}
                            onChange={() => handleReportToggle(report.id)}
                          />
                          <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm mb-1">{report.name}</h3>
                            <p className="text-xs text-muted-foreground mb-2">{report.description}</p>
                            <div className="flex gap-1">
                              {report.formats.map((format) => (
                                <Badge key={format} variant="secondary" className="text-xs">
                                  {format}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Export Settings */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Export Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm mb-2 block">Format</label>
                    <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PDF">PDF Document</SelectItem>
                        <SelectItem value="Excel">Excel Spreadsheet</SelectItem>
                        <SelectItem value="CSV">CSV File</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm mb-2 block">Date Range</label>
                    <Select value={dateRange} onValueChange={setDateRange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ytd">Year to Date</SelectItem>
                        <SelectItem value="1y">Last 12 Months</SelectItem>
                        <SelectItem value="3m">Last 3 Months</SelectItem>
                        <SelectItem value="1m">Last Month</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Selected Reports:</span>
                        <span>{selectedReports.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Format:</span>
                        <span>{selectedFormat}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date Range:</span>
                        <span className="capitalize">{dateRange.replace('_', ' ')}</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full gap-2" 
                    disabled={selectedReports.length === 0 || isExporting}
                    onClick={handleExport}
                  >
                    {isExporting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Export Reports
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Export Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Export</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2" size="sm">
                    <FileText className="w-4 h-4" />
                    Current Portfolio (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2" size="sm">
                    <FileSpreadsheet className="w-4 h-4" />
                    Holdings List (Excel)
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2" size="sm">
                    <BarChart3 className="w-4 h-4" />
                    Performance Summary
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Export History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exportHistory.map((export_item) => (
                  <div key={export_item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        {export_item.type === 'PDF' ? (
                          <FileText className="w-5 h-5" />
                        ) : (
                          <FileSpreadsheet className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm">{export_item.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {export_item.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {export_item.size}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(export_item.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {export_item.status === 'completed' ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </>
                      ) : (
                        <>
                          <Clock className="w-4 h-4 text-yellow-500 animate-spin" />
                          <span className="text-sm text-muted-foreground">Processing...</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}