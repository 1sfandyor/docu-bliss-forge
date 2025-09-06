import { DocLayout } from "@/components/layout/DocLayout";
import { CodeBlock, InlineCode } from "@/components/ui/code-block";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Layers } from "lucide-react";

export default function Documentation() {
  return (
    <DocLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center py-12 bg-gradient-hero rounded-xl border border-border">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Documentation Template
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Modern va professional ko'rinishga ega hujjatlar uchun template. 
            Responsive design va chiroyli komponentlar bilan.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary border-0">
              Boshlash
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              GitHub'da ko'rish
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-border hover:shadow-medium transition-smooth">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Tez va Samarali</CardTitle>
              <CardDescription>
                React va TypeScript yordamida qurilgan. Vite bundler bilan tez yuklash.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border hover:shadow-medium transition-smooth">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Xavfsiz</CardTitle>
              <CardDescription>
                TypeScript type safety va zamonaviy security best practices.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border hover:shadow-medium transition-smooth">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Modulli</CardTitle>
              <CardDescription>
                Qayta ishlatilishi mumkin komponentlar va tozalangan kod strukturasi.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Start */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Tezkor Boshlash</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">1. Loyihani o'rnatish</h3>
            <p className="text-muted-foreground">
              Avval <InlineCode>Node.js</InlineCode> va <InlineCode>npm</InlineCode> o'rnatilganiga ishonch hosil qiling:
            </p>
            
            <CodeBlock language="bash" filename="terminal">
{`npm create vite@latest my-docs --template react-ts
cd my-docs
npm install`}
            </CodeBlock>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">2. Loyihani ishga tushirish</h3>
            <p className="text-muted-foreground">
              Development server'ni ishga tushiring:
            </p>
            
            <CodeBlock language="bash">
{`npm run dev`}
            </CodeBlock>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">3. Birinchi komponent</h3>
            <p className="text-muted-foreground">
              Oddiy React komponent yarating:
            </p>
            
            <CodeBlock language="tsx" filename="src/components/HelloWorld.tsx">
{`import React from 'react';

interface HelloWorldProps {
  name: string;
}

export function HelloWorld({ name }: HelloWorldProps) {
  return (
    <div className="p-4 bg-card rounded-lg border">
      <h1 className="text-2xl font-bold">
        Salom, {name}!
      </h1>
      <p className="text-muted-foreground mt-2">
        Bu birinchi React komponentingiz.
      </p>
    </div>
  );
}`}
            </CodeBlock>
          </div>
        </div>

        {/* Configuration */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Sozlash</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Tailwind CSS sozlamalari</h3>
            <p className="text-muted-foreground">
              <InlineCode>tailwind.config.js</InlineCode> faylida ranglar va mavzuni sozlash:
            </p>
            
            <CodeBlock language="javascript" filename="tailwind.config.js">
{`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}`}
            </CodeBlock>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-muted/50 rounded-lg p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Foydali maslahatlar
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Componentlarni kichik va qayta ishlatilishi mumkin qilib yarating</li>
            <li>• TypeScript type'laridan foydalaning</li>
            <li>• CSS modules yoki Tailwind CSS dan foydalaning</li>
            <li>• Performance uchun lazy loading qo'llang</li>
          </ul>
        </div>

        {/* Version Badge */}
        <div className="flex justify-center pt-8">
          <Badge variant="secondary" className="text-xs">
            Version 1.0.0
          </Badge>
        </div>
      </div>
    </DocLayout>
  );
}