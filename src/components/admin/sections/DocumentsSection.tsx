import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { TiptapEditor } from '@/components/admin/TiptapEditor'
import { Plus, Edit, Trash2, Save, Eye } from 'lucide-react'

interface DocumentSection {
  id: string
  title: string
  content: string
  order: number
  status: 'draft' | 'published'
}

const initialSections: DocumentSection[] = [
  {
    id: '1',
    title: 'Kirish',
    content: '<h2>Loyihaga xush kelibsiz</h2><p>Bu yerda loyihaning asosiy ma\'lumotlari keltirilgan.</p>',
    order: 1,
    status: 'published'
  },
  {
    id: '2',
    title: 'O\'rnatish',
    content: '<h2>O\'rnatish jarayoni</h2><p>Loyihani o\'rnatish uchun quyidagi amallarni bajaring.</p>',
    order: 2,
    status: 'published'
  },
  {
    id: '3',
    title: 'API ma\'lumotnomasi',
    content: '<h2>API dan foydalanish</h2><p>API endpoints va ulardan foydalanish.</p>',
    order: 3,
    status: 'draft'
  }
]

export const DocumentsSection = () => {
  const [sections, setSections] = useState<DocumentSection[]>(initialSections)
  const [selectedSection, setSelectedSection] = useState<DocumentSection | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [newSectionTitle, setNewSectionTitle] = useState('')

  const handleEditSection = (section: DocumentSection) => {
    setSelectedSection(section)
    setIsEditing(true)
  }

  const handleSaveSection = () => {
    if (!selectedSection) return
    
    setSections(prev => 
      prev.map(section => 
        section.id === selectedSection.id ? selectedSection : section
      )
    )
    setIsEditing(false)
    setSelectedSection(null)
  }

  const handleCreateSection = () => {
    if (!newSectionTitle.trim()) return
    
    const newSection: DocumentSection = {
      id: Date.now().toString(),
      title: newSectionTitle,
      content: '<p>Yangi bo\'lim matni...</p>',
      order: sections.length + 1,
      status: 'draft'
    }
    
    setSections(prev => [...prev, newSection])
    setNewSectionTitle('')
  }

  const handleDeleteSection = (id: string) => {
    setSections(prev => prev.filter(section => section.id !== id))
  }

  const handleContentChange = (content: string) => {
    if (selectedSection) {
      setSelectedSection({ ...selectedSection, content })
    }
  }

  const toggleStatus = (id: string) => {
    setSections(prev => 
      prev.map(section => 
        section.id === id 
          ? { ...section, status: section.status === 'published' ? 'draft' : 'published' }
          : section
      )
    )
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Hujjatlar</h1>
          <p className="text-muted-foreground">Dokumentatsiya kontentini boshqarish</p>
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Yangi bo'lim nomi"
            value={newSectionTitle}
            onChange={(e) => setNewSectionTitle(e.target.value)}
            className="w-64"
          />
          <Button onClick={handleCreateSection}>
            <Plus className="h-4 w-4 mr-2" />
            Qo'shish
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sections List */}
        <Card>
          <CardHeader>
            <CardTitle>Mavjud bo'limlar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sections.map((section) => (
              <Card key={section.id} className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{section.title}</h4>
                    <Badge variant={section.status === 'published' ? 'default' : 'secondary'}>
                      {section.status === 'published' ? 'Nashr etilgan' : 'Qoralama'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tartib: {section.order}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEditSection(section)}
                      variant="ghost"
                      size="sm"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Tahrirlash
                    </Button>
                    <Button
                      onClick={() => toggleStatus(section.id)}
                      variant="ghost"
                      size="sm"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      {section.status === 'published' ? 'Yashirish' : 'Nashr etish'}
                    </Button>
                    <Button
                      onClick={() => handleDeleteSection(section.id)}
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Editor */}
        <Card>
          <CardHeader>
            <CardTitle>
              {isEditing && selectedSection ? 
                `"${selectedSection.title}" tahrirlash` : 
                'Tahrir qilish'
              }
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isEditing && selectedSection ? (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button onClick={handleSaveSection} size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Saqlash
                  </Button>
                  <Button 
                    onClick={() => setIsEditing(false)}
                    variant="outline" 
                    size="sm"
                  >
                    Bekor qilish
                  </Button>
                </div>
                
                <div>
                  <Label htmlFor="section-title">Bo'lim nomi</Label>
                  <Input
                    id="section-title"
                    value={selectedSection.title}
                    onChange={(e) => 
                      setSelectedSection({
                        ...selectedSection,
                        title: e.target.value
                      })
                    }
                  />
                </div>
                
                <div>
                  <Label>Kontent</Label>
                  <TiptapEditor
                    content={selectedSection.content}
                    onChange={handleContentChange}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 border border-dashed rounded-lg">
                <p className="text-muted-foreground">
                  Tahrirlash uchun bo'limni tanlang
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}