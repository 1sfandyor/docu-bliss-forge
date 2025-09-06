import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Clock, 
  Download,
  Globe,
  Smartphone
} from 'lucide-react'

const analyticsData = {
  overview: {
    totalViews: 12543,
    uniqueVisitors: 8934,
    avgTimeOnSite: '4:32',
    bounceRate: '32%',
    pageViews: 18765,
    downloads: 234
  },
  topPages: [
    { page: '/docs/kirish', views: 3421, percentage: 27.3 },
    { page: '/docs/api', views: 2876, percentage: 22.9 },
    { page: '/docs/ornatish', views: 2134, percentage: 17.0 },
    { page: '/docs/misollar', views: 1890, percentage: 15.1 },
    { page: '/', views: 1456, percentage: 11.6 }
  ],
  traffic: [
    { source: 'Organik qidiruv', visitors: 4567, percentage: 51.1 },
    { source: 'To\'g\'ridan-to\'g\'ri', visitors: 2341, percentage: 26.2 },
    { source: 'Ijtimoiy tarmoqlar', visitors: 1234, percentage: 13.8 },
    { source: 'Havola orqali', visitors: 792, percentage: 8.9 }
  ],
  devices: [
    { device: 'Desktop', users: 5432, percentage: 60.8 },
    { device: 'Mobile', users: 2876, percentage: 32.2 },
    { device: 'Tablet', users: 626, percentage: 7.0 }
  ]
}

export const AnalyticsSection = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Statistika</h1>
          <p className="text-muted-foreground">Sayt ko'rsatkichlari va tahlil</p>
        </div>
        <Badge variant="outline">So'nggi 30 kun</Badge>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-blue-500" />
              <div className="text-sm text-muted-foreground">Ko'rishlar</div>
            </div>
            <div className="text-2xl font-bold">{analyticsData.overview.totalViews.toLocaleString()}</div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +12.5%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-green-500" />
              <div className="text-sm text-muted-foreground">Noyob tashrif</div>
            </div>
            <div className="text-2xl font-bold">{analyticsData.overview.uniqueVisitors.toLocaleString()}</div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +8.2%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <div className="text-sm text-muted-foreground">O'rtacha vaqt</div>
            </div>
            <div className="text-2xl font-bold">{analyticsData.overview.avgTimeOnSite}</div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +5.1%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-purple-500" />
              <div className="text-sm text-muted-foreground">Chiqish darajasi</div>
            </div>
            <div className="text-2xl font-bold">{analyticsData.overview.bounceRate}</div>
            <div className="text-xs text-red-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3 rotate-180" />
              -3.4%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-cyan-500" />
              <div className="text-sm text-muted-foreground">Sahifa ko'rishlari</div>
            </div>
            <div className="text-2xl font-bold">{analyticsData.overview.pageViews.toLocaleString()}</div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +15.7%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-indigo-500" />
              <div className="text-sm text-muted-foreground">Yuklab olishlar</div>
            </div>
            <div className="text-2xl font-bold">{analyticsData.overview.downloads}</div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +22.1%
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pages" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pages">Mashhur sahifalar</TabsTrigger>
          <TabsTrigger value="traffic">Trafik manbalari</TabsTrigger>
          <TabsTrigger value="devices">Qurilmalar</TabsTrigger>
          <TabsTrigger value="realtime">Real vaqt</TabsTrigger>
        </TabsList>

        <TabsContent value="pages">
          <Card>
            <CardHeader>
              <CardTitle>Eng ko'p ko'rilgan sahifalar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{page.page}</div>
                      <div className="text-sm text-muted-foreground">
                        {page.views.toLocaleString()} ko'rish
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${page.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-sm font-medium w-12">
                        {page.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic">
          <Card>
            <CardHeader>
              <CardTitle>Trafik manbalari</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.traffic.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{source.source}</div>
                      <div className="text-sm text-muted-foreground">
                        {source.visitors.toLocaleString()} tashrif buyuruvchi
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${source.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-sm font-medium w-12">
                        {source.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices">
          <Card>
            <CardHeader>
              <CardTitle>Qurilmalar bo'yicha taqsimot</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.devices.map((device, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{device.device}</div>
                        <div className="text-sm text-muted-foreground">
                          {device.users.toLocaleString()} foydalanuvchi
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${device.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-sm font-medium w-12">
                        {device.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="realtime">
          <Card>
            <CardHeader>
              <CardTitle>Real vaqt statistikasi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="text-4xl font-bold text-green-600 mb-2">23</div>
                <p className="text-muted-foreground">Hozir onlayn foydalanuvchilar</p>
                <div className="mt-6 space-y-2 text-sm">
                  <div>So'nggi 5 daqiqada: 12 yangi tashrif</div>
                  <div>So'nggi soatda: 156 ko'rish</div>
                  <div>Bugungi eng faol vaqt: 14:00-15:00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}