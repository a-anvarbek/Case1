import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Badge } from '../components/ui/badge'
import { 
  FileText, 
  Plus, 
  Search, 
  Folder, 
  Edit3, 
  Trash2, 
  Calendar,
  Tag
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'

const folders = [
  { id: 1, name: 'Research Notes', count: 8, color: 'bg-blue-500/10 text-blue-600' },
  { id: 2, name: 'Market Analysis', count: 5, color: 'bg-green-500/10 text-green-600' },
  { id: 3, name: 'Company Reports', count: 12, color: 'bg-purple-500/10 text-purple-600' },
  { id: 4, name: 'Investment Ideas', count: 6, color: 'bg-orange-500/10 text-orange-600' }
]

const notes = [
  {
    id: 1,
    title: "Tesla Q4 2024 Earnings Analysis",
    content: "Strong delivery numbers exceeded expectations. Cybertruck production ramping up. Energy business showing solid growth...",
    folder: "Research Notes",
    tags: ["Tesla", "Earnings", "EV"],
    date: "2024-01-15",
    lastModified: "2 hours ago"
  },
  {
    id: 2,
    title: "AI Sector Investment Thesis",
    content: "The AI revolution is creating significant opportunities. Key players: NVDA, MSFT, GOOGL...",
    folder: "Investment Ideas",
    tags: ["AI", "Technology", "Growth"],
    date: "2024-01-14",
    lastModified: "1 day ago"
  },
  {
    id: 3,
    title: "Fed Rate Decision Impact",
    content: "Federal Reserve maintaining current rates. Market reaction positive for growth stocks...",
    folder: "Market Analysis",
    tags: ["Fed", "Interest Rates", "Macro"],
    date: "2024-01-13",
    lastModified: "2 days ago"
  },
  {
    id: 4,
    title: "Healthcare Sector Deep Dive",
    content: "Aging population demographics driving healthcare demand. Key themes: biotech innovation, medical devices...",
    folder: "Company Reports",
    tags: ["Healthcare", "Demographics", "Innovation"],
    date: "2024-01-12",
    lastModified: "3 days ago"
  }
]

export default function Notes() {
  const [selectedFolder, setSelectedFolder] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isNewNoteOpen, setIsNewNoteOpen] = useState(false)

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesFolder = selectedFolder === 'all' || note.folder === selectedFolder
    return matchesSearch && matchesFolder
  })


  return (
    <motion.div 
      className="p-6 space-y-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FileText className="w-4 h-4 text-primary" />
          </motion.div>
          <div>
            <h1 className="text-2xl font-semibold">Notes</h1>
            <p className="text-muted-foreground">Organize your investment research and insights</p>
          </div>
        </div>
        <Dialog open={isNewNoteOpen} onOpenChange={setIsNewNoteOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Note
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl motion-safe:animate-in fade-in-50 zoom-in-95">
            <DialogHeader>
              <DialogTitle>Create New Note</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Note title..." />
              <Textarea placeholder="Start writing your note..." rows={8} />
              <div className="flex gap-2">
                <Input placeholder="Add tags..." className="flex-1" />
                <Button variant="outline">Research Notes</Button>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsNewNoteOpen(false)}>Cancel</Button>
                <Button onClick={() => setIsNewNoteOpen(false)}>Save Note</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Folders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant={selectedFolder === 'all' ? 'default' : 'ghost'}
                className="w-full justify-start gap-2 transition-all"
                onClick={() => setSelectedFolder('all')}
              >
                <FileText className="w-4 h-4" />
                All Notes
                <Badge variant="secondary" className="ml-auto text-xs">
                  {notes.length}
                </Badge>
              </Button>
              {folders.map((folder) => (
                <Button
                  key={folder.id}
                  variant={selectedFolder === folder.name ? 'default' : 'ghost'}
                  className="w-full justify-start gap-2 transition-all"
                  onClick={() => setSelectedFolder(folder.name)}
                >
                  <Folder className="w-4 h-4" />
                  {folder.name}
                  <Badge variant="secondary" className="ml-auto text-xs">
                    {folder.count}
                  </Badge>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>


        {/* Notes List */}
        <div className="lg:col-span-3 space-y-4">
          <AnimatePresence>
            {filteredNotes.map((note) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Card className="hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg mb-1">{note.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Folder className="w-3 h-3" />
                          <span>{note.folder}</span>
                          <Calendar className="w-3 h-3 ml-2" />
                          <span>{note.lastModified}</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm"><Edit3 className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {note.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {note.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(note.date).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
