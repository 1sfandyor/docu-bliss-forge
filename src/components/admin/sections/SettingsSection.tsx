import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Save, Download, Upload, RefreshCw } from 'lucide-react'

const initialSettings = {
  site: {
    title: 'Documentation Portal',
    description: 'Professional documentation website for developers',
    logo: '/logo.png',
    favicon: '/favicon.ico',
    primaryColor: '#3b82f6',
    language: 'uz'
  },
  features: {
    enableSearch: true,
    enableComments: false,
    enableAnalytics: true,
    enableNotifications: true,
    enableDarkMode: true,
    enableMobileMenu: true
  },
  security: {
    requireAuth: false,
    enableTwoFactor: false,
    sessionTimeout: 60,
    maxLoginAttempts: 5,
    passwordMinLength: 8
  },
  api: {
    rateLimit: 100,
    cacheTimeout: 300,
    enableCors: true,
    allowedOrigins: 'https://yourdomain.com',
    apiVersion: 'v1'
  }
}

export const SettingsSection = () => {
  const [settings, setSettings] = useState(initialSettings)
  const [isLoading, setIsLoading] = useState(false)

  const handleSiteSettingChange = (field: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      site: { ...prev.site, [field]: value }
    }))
  }

  const handleFeatureToggle = (feature: string, enabled: boolean) => {
    setSettings(prev => ({
      ...prev,
      features: { ...prev.features, [feature]: enabled }
    }))
  }

  const handleSecurityChange = (field: string, value: string | number | boolean) => {
    setSettings(prev => ({
      ...prev,
      security: { ...prev.security, [field]: value }
    }))
  }

  const handleApiChange = (field: string, value: string | number | boolean) => {
    setSettings(prev => ({
      ...prev,
      api: { ...prev.api, [field]: value }
    }))
  }

  const handleSaveSettings = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    alert('Sozlamalar saqlandi!')
  }

  const handleExportSettings = () => {
    const dataStr = JSON.stringify(settings, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'settings.json'
    link.click()
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Sozlamalar</h1>
          <p className="text-muted-foreground">Sayt konfiguratsiyasi va xususiyatlari</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportSettings}>
            <Download className="h-4 w-4 mr-2" />
            Eksport
          </Button>
          <Button onClick={handleSaveSettings} disabled={isLoading}>
            {isLoading ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            Saqlash
          </Button>
        </div>
      </div>

      <Tabs defaultValue="site" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="site">Sayt</TabsTrigger>
          <TabsTrigger value="features">Xususiyatlar</TabsTrigger>
          <TabsTrigger value="security">Xavfsizlik</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="site">
          <Card>
            <CardHeader>
              <CardTitle>Sayt sozlamalari</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="site-title">Sayt nomi</Label>
                  <Input
                    id="site-title"
                    value={settings.site.title}
                    onChange={(e) => handleSiteSettingChange('title', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="site-language">Til</Label>
                  <Input
                    id="site-language"
                    value={settings.site.language}
                    onChange={(e) => handleSiteSettingChange('language', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="site-description">Tavsif</Label>
                <Textarea
                  id="site-description"
                  value={settings.site.description}
                  onChange={(e) => handleSiteSettingChange('description', e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="site-logo">Logo yo'li</Label>
                  <Input
                    id="site-logo"
                    value={settings.site.logo}
                    onChange={(e) => handleSiteSettingChange('logo', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="site-favicon">Favicon yo'li</Label>
                  <Input
                    id="site-favicon"
                    value={settings.site.favicon}
                    onChange={(e) => handleSiteSettingChange('favicon', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="primary-color">Asosiy rang</Label>
                <div className="flex gap-2">
                  <Input
                    id="primary-color"
                    type="color"
                    value={settings.site.primaryColor}
                    onChange={(e) => handleSiteSettingChange('primaryColor', e.target.value)}
                    className="w-16 h-10"
                  />
                  <Input
                    value={settings.site.primaryColor}
                    onChange={(e) => handleSiteSettingChange('primaryColor', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>Xususiyatlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Qidiruv funksiyasi</Label>
                    <p className="text-sm text-muted-foreground">Hujjatlarda qidiruv imkoniyati</p>
                  </div>
                  <Switch 
                    checked={settings.features.enableSearch}
                    onCheckedChange={(checked) => handleFeatureToggle('enableSearch', checked)}
                  />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Sharhlar</Label>
                    <p className="text-sm text-muted-foreground">Sahifalarda sharh yozish</p>
                  </div>
                  <Switch 
                    checked={settings.features.enableComments}
                    onCheckedChange={(checked) => handleFeatureToggle('enableComments', checked)}
                  />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Analitika</Label>
                    <p className="text-sm text-muted-foreground">Tashrif statistikalarini yig'ish</p>
                  </div>
                  <Switch 
                    checked={settings.features.enableAnalytics}
                    onCheckedChange={(checked) => handleFeatureToggle('enableAnalytics', checked)}
                  />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Bildirishnomalar</Label>
                    <p className="text-sm text-muted-foreground">Push bildirishnomalar</p>
                  </div>
                  <Switch 
                    checked={settings.features.enableNotifications}
                    onCheckedChange={(checked) => handleFeatureToggle('enableNotifications', checked)}
                  />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Qorong'u rejim</Label>
                    <p className="text-sm text-muted-foreground">Tungi mavzu</p>
                  </div>
                  <Switch 
                    checked={settings.features.enableDarkMode}
                    onCheckedChange={(checked) => handleFeatureToggle('enableDarkMode', checked)}
                  />
                </div>
                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Mobil menyu</Label>
                    <p className="text-sm text-muted-foreground">Mobil qurilmalar uchun menyu</p>
                  </div>
                  <Switch 
                    checked={settings.features.enableMobileMenu}
                    onCheckedChange={(checked) => handleFeatureToggle('enableMobileMenu', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Xavfsizlik sozlamalari</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Autentifikatsiya talab qilish</Label>
                  <p className="text-sm text-muted-foreground">Saytga kirish uchun ro'yxatdan o'tish</p>
                </div>
                <Switch 
                  checked={settings.security.requireAuth}
                  onCheckedChange={(checked) => handleSecurityChange('requireAuth', checked)}
                />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label>Ikki faktorli autentifikatsiya</Label>
                  <p className="text-sm text-muted-foreground">SMS yoki app orqali tasdiqlash</p>
                </div>
                <Switch 
                  checked={settings.security.enableTwoFactor}
                  onCheckedChange={(checked) => handleSecurityChange('enableTwoFactor', checked)}
                />
              </div>
              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="session-timeout">Sessiya tugash vaqti (daqiqa)</Label>
                  <Input
                    id="session-timeout"
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) => handleSecurityChange('sessionTimeout', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="max-attempts">Maksimal kirish urinishlari</Label>
                  <Input
                    id="max-attempts"
                    type="number"
                    value={settings.security.maxLoginAttempts}
                    onChange={(e) => handleSecurityChange('maxLoginAttempts', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="password-length">Parol uzunligi</Label>
                  <Input
                    id="password-length"
                    type="number"
                    value={settings.security.passwordMinLength}
                    onChange={(e) => handleSecurityChange('passwordMinLength', parseInt(e.target.value))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API sozlamalari</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="rate-limit">So'rovlar chegarasi (daqiqada)</Label>
                  <Input
                    id="rate-limit"
                    type="number"
                    value={settings.api.rateLimit}
                    onChange={(e) => handleApiChange('rateLimit', parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="cache-timeout">Cache timeout (soniya)</Label>
                  <Input
                    id="cache-timeout"
                    type="number"
                    value={settings.api.cacheTimeout}
                    onChange={(e) => handleApiChange('cacheTimeout', parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>CORS yoqish</Label>
                  <p className="text-sm text-muted-foreground">Cross-Origin Resource Sharing</p>
                </div>
                <Switch 
                  checked={settings.api.enableCors}
                  onCheckedChange={(checked) => handleApiChange('enableCors', checked)}
                />
              </div>
              <Separator />

              <div>
                <Label htmlFor="allowed-origins">Ruxsat etilgan domenlar</Label>
                <Input
                  id="allowed-origins"
                  value={settings.api.allowedOrigins}
                  onChange={(e) => handleApiChange('allowedOrigins', e.target.value)}
                  placeholder="https://example.com, https://app.example.com"
                />
              </div>

              <div>
                <Label htmlFor="api-version">API versiyasi</Label>
                <Input
                  id="api-version"
                  value={settings.api.apiVersion}
                  onChange={(e) => handleApiChange('apiVersion', e.target.value)}
                />
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">API holati</h4>
                <div className="flex gap-2">
                  <Badge variant="default">Faol</Badge>
                  <Badge variant="outline">v{settings.api.apiVersion}</Badge>
                  <Badge variant="secondary">Barqaror</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}