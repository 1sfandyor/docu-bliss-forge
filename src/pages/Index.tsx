import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Code, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-foreground">Documentation Template</span>
            </div>
            <Link to="/docs">
              <Button>
                Hujjatlarga o'tish
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Professional
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Documentation </span>
            Template
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Next.js hujjatlari ko'rinishidagi zamonaviy va professional template. 
            Responsive design, dark mode va chiroyli komponentlar bilan.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/docs">
              <Button size="lg" className="bg-gradient-primary border-0">
                <BookOpen className="mr-2 w-5 h-5" />
                Hujjatlarni ko'rish
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              <Code className="mr-2 w-5 h-5" />
              GitHub'da ko'rish
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nega aynan bu template?
            </h2>
            <p className="text-lg text-muted-foreground">
              Zamonaviy web development best practices asosida yaratilgan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Tez va Optimallashtirilgan</CardTitle>
                <CardDescription>
                  React 18, TypeScript va Vite bundler yordamida qurilgan. 
                  Maksimal performance uchun optimallashtirilgan.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Chiroyli Dizayn</CardTitle>
                <CardDescription>
                  Tailwind CSS va shadcn/ui komponentlari. 
                  Professional ko'rinish va responsive design.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>To'liq Hujjatlashtirilgan</CardTitle>
                <CardDescription>
                  Batafsil hujjatlar, misollar va qo'llanmalar. 
                  Har bir komponent va funksiya tushuntirilgan.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>TypeScript Support</CardTitle>
                <CardDescription>
                  To'liq TypeScript yordami. Type safety va 
                  IntelliSense uchun barcha type'lar mavjud.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Oson Boshlanish</CardTitle>
                <CardDescription>
                  Bir necha daqiqada o'rnatish va ishga tushirish. 
                  Batafsil qo'llanma va misollar bilan.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Customizable</CardTitle>
                <CardDescription>
                  Osonlik bilan o'zgartirilishi mumkin. 
                  Ranglar, shriftlar va komponentlarni sozlash.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Hujjatlaringizni professional ko'rinishga keltiring
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Bu template yordamida chiroyli va funktsional hujjatlar yarating
          </p>
          <Link to="/docs">
            <Button size="lg" className="bg-gradient-primary border-0">
              Boshlash
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Documentation Template. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
