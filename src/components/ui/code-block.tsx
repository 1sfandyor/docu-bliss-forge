import { ReactNode } from "react";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ children, language, filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = typeof children === 'string' ? children : '';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative group", className)}>
      {filename && (
        <div className="bg-muted border border-doc-code-border border-b-0 rounded-t-lg px-4 py-2 text-sm text-muted-foreground font-mono">
          {filename}
        </div>
      )}
      <div className="relative bg-doc-code border border-doc-code-border rounded-lg overflow-hidden">
        {language && (
          <div className="absolute top-2 left-3 text-xs text-muted-foreground font-mono">
            {language}
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
        <pre className={cn("p-4 overflow-x-auto text-sm", language && "pt-8")}>
          <code className="font-mono">{children}</code>
        </pre>
      </div>
    </div>
  );
}

interface InlineCodeProps {
  children: ReactNode;
  className?: string;
}

export function InlineCode({ children, className }: InlineCodeProps) {
  return (
    <code className={cn(
      "relative rounded bg-doc-code px-1.5 py-0.5 font-mono text-sm border border-doc-code-border",
      className
    )}>
      {children}
    </code>
  );
}