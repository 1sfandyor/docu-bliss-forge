import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { 
  Menu, 
  FileText, 
  Settings, 
  Home, 
  Users,
  BarChart3,
  Layers
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface AdminLayoutProps {
  children: React.ReactNode
}

const adminMenuItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: FileText, label: 'Hujjatlar', id: 'documents' },
  { icon: Layers, label: 'Bo\'limlar', id: 'sections' },
  { icon: Users, label: 'Foydalanuvchilar', id: 'users' },
  { icon: BarChart3, label: 'Statistika', id: 'analytics' },
  { icon: Settings, label: 'Sozlamalar', id: 'settings' },
]

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [activeSection, setActiveSection] = useState('dashboard')

  const AdminSidebar = () => (
    <div className="w-64 h-full bg-card border-r border-border">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <p className="text-sm text-muted-foreground">Saytni boshqarish</p>
      </div>
      
      <nav className="p-4 space-y-2">
        {adminMenuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                activeSection === item.id 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </button>
          )
        })}
      </nav>
    </div>
  )

  return (
    <div className="h-screen flex bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <AdminSidebar />
      </div>
      
      {/* Mobile Sidebar */}
      <Sheet>
        <div className="lg:hidden">
          <div className="flex items-center gap-4 p-4 border-b border-border">
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <h1 className="text-lg font-semibold">Admin Panel</h1>
          </div>
        </div>
        
        <SheetContent side="left" className="p-0 w-64">
          <AdminSidebar />
        </SheetContent>
      </Sheet>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}