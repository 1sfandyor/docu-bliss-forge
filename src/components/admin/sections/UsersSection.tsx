import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Plus, Edit, Trash2, UserCheck, UserX } from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'editor' | 'viewer'
  status: 'active' | 'inactive'
  lastLogin: string
  avatar?: string
}

const initialUsers: User[] = [
  {
    id: '1',
    name: 'Akmal Rahimov',
    email: 'akmal@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-01-15 14:30',
    avatar: 'AR'
  },
  {
    id: '2',
    name: 'Dilshoda Karimova',
    email: 'dilshoda@example.com',
    role: 'editor',
    status: 'active',
    lastLogin: '2024-01-14 09:15',
    avatar: 'DK'
  },
  {
    id: '3',
    name: 'Javlon Usmonov',
    email: 'javlon@example.com',
    role: 'viewer',
    status: 'inactive',
    lastLogin: '2024-01-10 16:45',
    avatar: 'JU'
  },
  {
    id: '4',
    name: 'Madina Azizova',
    email: 'madina@example.com',
    role: 'editor',
    status: 'active',
    lastLogin: '2024-01-15 11:20',
    avatar: 'MA'
  }
]

export const UsersSection = () => {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === 'all' || user.role === roleFilter
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter
    
    return matchesSearch && matchesRole && matchesStatus
  })

  const toggleUserStatus = (id: string) => {
    setUsers(prev => 
      prev.map(user => 
        user.id === id 
          ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
          : user
      )
    )
  }

  const changeUserRole = (id: string, newRole: 'admin' | 'editor' | 'viewer') => {
    setUsers(prev => 
      prev.map(user => 
        user.id === id 
          ? { ...user, role: newRole }
          : user
      )
    )
  }

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin': return 'destructive'
      case 'editor': return 'default'
      case 'viewer': return 'secondary'
      default: return 'outline'
    }
  }

  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin': return 'Administrator'
      case 'editor': return 'Muharrir'
      case 'viewer': return 'Ko\'ruvchi'
      default: return role
    }
  }

  const userStats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    admins: users.filter(u => u.role === 'admin').length,
    editors: users.filter(u => u.role === 'editor').length
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Foydalanuvchilar</h1>
          <p className="text-muted-foreground">Foydalanuvchilarni boshqarish va ruxsatlar</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Yangi foydalanuvchi
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{userStats.total}</div>
            <p className="text-sm text-muted-foreground">Jami foydalanuvchilar</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{userStats.active}</div>
            <p className="text-sm text-muted-foreground">Faol foydalanuvchilar</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{userStats.admins}</div>
            <p className="text-sm text-muted-foreground">Administratorlar</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{userStats.editors}</div>
            <p className="text-sm text-muted-foreground">Muharrirlar</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtrlar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Foydalanuvchi qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha rollar</SelectItem>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="editor">Muharrir</SelectItem>
                <SelectItem value="viewer">Ko'ruvchi</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Holat" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha holatlar</SelectItem>
                <SelectItem value="active">Faol</SelectItem>
                <SelectItem value="inactive">Nofaol</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle>Foydalanuvchilar ro'yxati</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="text-xs text-muted-foreground">
                      Oxirgi kirish: {user.lastLogin}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Badge variant={getRoleBadgeVariant(user.role)}>
                    {getRoleText(user.role)}
                  </Badge>
                  <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                    {user.status === 'active' ? 'Faol' : 'Nofaol'}
                  </Badge>
                  
                  <div className="flex gap-1">
                    <Select 
                      value={user.role} 
                      onValueChange={(value: 'admin' | 'editor' | 'viewer') => 
                        changeUserRole(user.id, value)
                      }
                    >
                      <SelectTrigger className="w-32 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Muharrir</SelectItem>
                        <SelectItem value="viewer">Ko'ruvchi</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button
                      onClick={() => toggleUserStatus(user.id)}
                      variant="ghost"
                      size="sm"
                    >
                      {user.status === 'active' ? 
                        <UserX className="h-4 w-4" /> : 
                        <UserCheck className="h-4 w-4" />
                      }
                    </Button>
                    
                    <Button
                      onClick={() => deleteUser(user.id)}
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}