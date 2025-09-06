import { useState } from 'react'
import { AdminLayout } from '@/components/admin/AdminLayout'
import { TiptapEditor } from '@/components/admin/TiptapEditor'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Trash2, Save } from 'lucide-react'

interface DocumentSection {
  id: string
  title: string
  content: string
  order: number
}

const initialSections: DocumentSection[] = [
  {
    id: '1',
    title: 'Kirish',
    content: '<h2>Loyihaga xush kelibsiz</h2><p>Bu yerda loyihaning asosiy ma\'lumotlari keltirilgan.</p>',
    order: 1
  },
  {
    id: '2',
    title: 'O\'rnatish',
    content: '<h2>O\'rnatish jarayoni</h2><p>Loyihani o\'rnatish uchun quyidagi amallarni bajaring.</p>',
    order: 2
  },
  {
    id: '3',
    title: 'Foydalanish',
    content: '<h2>Qanday foydalanish</h2><p>Loyihadan foydalanish bo\'yicha qo\'llanma.</p>',
    order: 3
  }
]

export default function Admin() {
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
      order: sections.length + 1
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

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Sayt kontentini boshqarish paneli</p>
          </div>
          <Badge variant="outline">Beta</Badge>
        </div>

        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList>
            <TabsTrigger value="documents">Hujjatlar</TabsTrigger>
            <TabsTrigger value="settings">Sozlamalar</TabsTrigger>
            <TabsTrigger value="analytics">Statistika</TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Hujjat bo'limlari
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Yangi bo'lim nomi"
                      value={newSectionTitle}
                      onChange={(e) => setNewSectionTitle(e.target.value)}
                      className="w-64"
                    />
                    <Button onClick={handleCreateSection} size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Qo'shish
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Sections List */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Mavjud bo'limlar</h3>
                    {sections.map((section) => (
                      <Card key={section.id} className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{section.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              Tartib: {section.order}
                            </p>
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
                  </div>

                  {/* Editor */}
                  <div className="space-y-4">
                    {isEditing && selectedSection ? (
                      <>
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">
                            "{selectedSection.title}" tahrirlash
                          </h3>
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
                        </div>
                        
                        <div className="space-y-4">
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
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-96 border border-dashed rounded-lg">
                        <p className="text-muted-foreground">
                          Tahrirlash uchun bo'limni tanlang
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Sayt sozlamalari</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sozlamalar bo'limi hozircha ishlab chiqilmoqda...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Statistika</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Statistika bo'limi hozircha ishlab chiqilmoqda...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}