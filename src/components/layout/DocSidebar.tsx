import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    title: "Boshlash",
    items: [
      { title: "Kirish", href: "/" },
      { title: "O'rnatish", href: "/setup" },
      { title: "Birinchi loyiha", href: "/first-project" },
    ]
  },
  {
    title: "Asoslar",
    items: [
      { title: "Routing", href: "/routing" },
      { title: "Componentlar", href: "/components" },
      { title: "Styling", href: "/styling" },
      { title: "Data Fetching", href: "/data-fetching" },
    ]
  },
  {
    title: "API Reference",
    items: [
      { title: "Configuration", href: "/config" },
      { title: "CLI", href: "/cli" },
      { title: "Functions", href: "/functions" },
    ]
  },
  {
    title: "Deployment",
    items: [
      { title: "Vercel", href: "/deploy-vercel" },
      { title: "Netlify", href: "/deploy-netlify" },
      { title: "Docker", href: "/deploy-docker" },
    ]
  }
];

interface NavItemComponentProps {
  item: NavItem;
  level?: number;
}

function NavItemComponent({ item, level = 0 }: NavItemComponentProps) {
  const [isOpen, setIsOpen] = useState(level === 0);

  if (item.items) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center justify-between w-full text-left py-2 px-3 rounded-md text-sm font-medium transition-smooth hover:bg-muted/50",
            level === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            level > 0 && "ml-4"
          )}
        >
          {item.title}
          <ChevronRight 
            className={cn(
              "w-4 h-4 transition-transform",
              isOpen && "rotate-90"
            )} 
          />
        </button>
        {isOpen && (
          <div className="mt-1 space-y-1">
            {item.items.map((subItem, index) => (
              <NavItemComponent key={index} item={subItem} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      className={cn(
        "block py-2 px-3 rounded-md text-sm transition-smooth hover:bg-muted/50 hover:text-foreground",
        level === 0 ? "font-medium text-foreground" : "text-muted-foreground ml-4",
        window.location.pathname === item.href && "bg-primary/10 text-primary font-medium"
      )}
    >
      {item.title}
    </a>
  );
}

export function DocSidebar() {
  return (
    <aside className="w-64 bg-doc-sidebar border-r border-doc-sidebar-border h-[calc(100vh-4rem)] overflow-y-auto sticky top-16">
      <nav className="p-4 space-y-2">
        {navigationItems.map((item, index) => (
          <NavItemComponent key={index} item={item} />
        ))}
      </nav>
    </aside>
  );
}