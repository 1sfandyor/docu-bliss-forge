import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Edit, Trash2, Save, MoveUp, MoveDown } from 'lucide-react'

interface Section {
  id: string
  name: string
  description: string
  order: number
  documentsCount: number
  isVisible: boolean
}

const initialSections: Section[] = [
  {
    id: '1',
    name: 'Boshlash',
    description: 'Loyiha bilan tanishish va boshlash uchun zarur ma\'lumotlar',
    order: 1,
    documentsCount: 3,
    isVisible: true
  },
  {
    id: '2',
    name: 'API',
    description: 'API endpoints va ulardan foydalanish bo\'yicha qo\'llanma',
    order: 2,
    documentsCount: 8,
    isVisible: true
  },
  {
    id: '3',
    name: 'Misollar',
    description: 'Amaliy misollar va kod namunalari',
    order: 3,
    documentsCount: 5,
    isVisible: false
  },
  {
    id: '4',
    name: 'FAQ',
    description: 'Tez-tez so\'raladigan savollar va javoblar',
    order: 4,
    documentsCount: 12,
    isVisible: true
  }
]

export const SectionsSection = () => {
  const [sections, setSections] = useState<Section[]>(initialSections)
  const [selectedSection, setSelectedSection] = useState<Section | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [newSection, setNewSection] = useState({ name: '', description: '' })

  const handleEditSection = (section: Section) => {
    setSelectedSection(section)
    setIsEditing(true)
    setIsCreating(false)
  }

  const handleCreateNew = () => {
    setIsCreating(true)
    setIsEditing(false)
    setSelectedSection(null)
    setNewSection({ name: '', description: '' })
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
    if (!newSection.name.trim()) return
    
    const section: Section = {
      id: Date.now().toString(),
      name: newSection.name,
      description: newSection.description,
      order: sections.length + 1,
      documentsCount: 0,
      isVisible: true
    }
    
    setSections(prev => [...prev, section])
    setIsCreating(false)
    setNewSection({ name: '', description: '' })
  }

  const handleDeleteSection = (id: string) => {
    setSections(prev => prev.filter(section => section.id !== id))
  }

  const toggleVisibility = (id: string) => {
    setSections(prev => 
      prev.map(section => 
        section.id === id 
          ? { ...section, isVisible: !section.isVisible }
          : section
      )
    )
  }

  const moveSection = (id: string, direction: 'up' | 'down') => {
    setSections(prev => {
      const sortedSections = [...prev].sort((a, b) => a.order - b.order)
      const currentIndex = sortedSections.findIndex(s => s.id === id)
      
      if (direction === 'up' && currentIndex > 0) {
        const temp = sortedSections[currentIndex].order
        sortedSections[currentIndex].order = sortedSections[currentIndex - 1].order
        sortedSections[currentIndex - 1].order = temp
      } else if (direction === 'down' && currentIndex < sortedSections.length - 1) {
        const temp = sortedSections[currentIndex].order
        sortedSections[currentIndex].order = sortedSections[currentIndex + 1].order
        sortedSections[currentIndex + 1].order = temp
      }
      
      return sortedSections
    })
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Bo'limlar</h1>
          <p className="text-muted-foreground">Hujjatlar bo'limlarini tartibga solish</p>
        </div>
        <Button onClick={handleCreateNew}>
          <Plus className="h-4 w-4 mr-2" />
          Yangi bo'lim
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sections List */}
        <Card>
          <CardHeader>
            <CardTitle>Mavjud bo'limlar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sections
              .sort((a, b) => a.order - b.order)
              .map((section) => (
              <Card key={section.id} className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{section.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                    <Badge variant={section.isVisible ? 'default' : 'secondary'}>
                      {section.isVisible ? 'Ko\'rinuvchi' : 'Yashirin'}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Tartib: {section.order}</span>
                    <span>{section.documentsCount} ta hujjat</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEditSection(section)}
                      variant="ghost"
                      size="sm"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => moveSection(section.id, 'up')}
                      variant="ghost"
                      size="sm"
                    >
                      <MoveUp className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => moveSection(section.id, 'down')}
                      variant="ghost"
                      size="sm"
                    >
                      <MoveDown className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => toggleVisibility(section.id)}
                      variant="ghost"
                      size="sm"
                    >
                      {section.isVisible ? 'Yashirish' : 'Ko\'rsatish'}
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

        {/* Editor/Creator */}
        <Card>
          <CardHeader>
            <CardTitle>
              {isEditing ? 'Bo\'limni tahrirlash' : 
               isCreating ? 'Yangi bo\'lim yaratish' : 
               'Bo\'lim tafsilotlari'}
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
                    onClick={() => { setIsEditing(false); setSelectedSection(null) }}
                    variant="outline" 
                    size="sm"
                  >
                    Bekor qilish
                  </Button>
                </div>
                
                <div>
                  <Label htmlFor="section-name">Bo'lim nomi</Label>
                  <Input
                    id="section-name"
                    value={selectedSection.name}
                    onChange={(e) => 
                      setSelectedSection({
                        ...selectedSection,
                        name: e.target.value
                      })
                    }
                  />
                </div>
                
                <div>
                  <Label htmlFor="section-desc">Tavsif</Label>
                  <Textarea
                    id="section-desc"
                    value={selectedSection.description}
                    onChange={(e) => 
                      setSelectedSection({
                        ...selectedSection,
                        description: e.target.value
                      })
                    }
                    rows={3}
                  />
                </div>
              </div>
            ) : isCreating ? (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button onClick={handleCreateSection} size="sm">
                    <Save className="h-4 w-4 mr-2" />
                    Yaratish
                  </Button>
                  <Button 
                    onClick={() => setIsCreating(false)}
                    variant="outline" 
                    size="sm"
                  >
                    Bekor qilish
                  </Button>
                </div>
                
                <div>
                  <Label htmlFor="new-section-name">Bo'lim nomi</Label>
                  <Input
                    id="new-section-name"
                    value={newSection.name}
                    onChange={(e) => 
                      setNewSection({
                        ...newSection,
                        name: e.target.value
                      })
                    }
                    placeholder="Masalan: API ma'lumotnomasi"
                  />
                </div>
                
                <div>
                  <Label htmlFor="new-section-desc">Tavsif</Label>
                  <Textarea
                    id="new-section-desc"
                    value={newSection.description}
                    onChange={(e) => 
                      setNewSection({
                        ...newSection,
                        description: e.target.value
                      })
                    }
                    rows={3}
                    placeholder="Bo'lim haqida qisqacha ma'lumot"
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 border border-dashed rounded-lg">
                <p className="text-muted-foreground">
                  Tahrirlash uchun bo'limni tanlang yoki yangi bo'lim yarating
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}