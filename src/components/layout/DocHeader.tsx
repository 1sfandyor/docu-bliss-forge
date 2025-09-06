import { Search, Github, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DocHeader() {
  return (
    <header className="sticky top-0 z-50 bg-doc-nav border-b border-doc-sidebar-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-foreground">Docs</span>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                Boshlash
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                API
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                Komponentlar
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                Misollar
              </a>
            </nav>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Qidirish..." 
                className="pl-9 w-64 bg-muted/50 border-border focus:bg-background"
              />
            </div>
            
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Github className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}