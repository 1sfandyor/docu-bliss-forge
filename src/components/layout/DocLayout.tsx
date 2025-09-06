import { ReactNode } from "react";
import { DocSidebar } from "./DocSidebar";
import { DocHeader } from "./DocHeader";

interface DocLayoutProps {
  children: ReactNode;
}

export function DocLayout({ children }: DocLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <DocHeader />
      <div className="flex">
        <DocSidebar />
        <main className="flex-1 bg-doc-content border-l border-doc-sidebar-border">
          <div className="max-w-4xl mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}