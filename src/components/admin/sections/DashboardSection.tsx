import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Users, BarChart3, Settings } from 'lucide-react'

export const DashboardSection = () => {
  const stats = [
    { label: 'Jami hujjatlar', value: '12', icon: FileText, color: 'bg-blue-500' },
    { label: 'Foydalanuvchilar', value: '45', icon: Users, color: 'bg-green-500' },
    { label: 'Ko\'rishlar', value: '1,234', icon: BarChart3, color: 'bg-purple-500' },
    { label: 'Sozlamalar', value: '8', icon: Settings, color: 'bg-orange-500' },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Sayt holati va statistikalari</p>
        </div>
        <Badge variant="outline">Faol</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <div className={`p-2 rounded ${stat.color} text-white`}>
                  <Icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  O'tgan oyga nisbatan +20.1%
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>So'nggi faollik</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Yangi hujjat qo'shildi</p>
                  <p className="text-sm text-muted-foreground">2 soat oldin</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Foydalanuvchi ro'yxatdan o'tdi</p>
                  <p className="text-sm text-muted-foreground">4 soat oldin</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Sozlamalar o'zgartirildi</p>
                  <p className="text-sm text-muted-foreground">1 kun oldin</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tezkor amallar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <p className="font-medium">Yangi hujjat yaratish</p>
                <p className="text-sm text-muted-foreground">Yangi dokumentatsiya bo'limi qo'shish</p>
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <p className="font-medium">Foydalanuvchilarni boshqarish</p>
                <p className="text-sm text-muted-foreground">Foydalanuvchi ruxsatlarini sozlash</p>
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <p className="font-medium">Sayt sozlamalari</p>
                <p className="text-sm text-muted-foreground">Umumiy sozlamalarni o'zgartirish</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}