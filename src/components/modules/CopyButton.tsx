"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/libs/utils";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

export default function CopyButton({ textToCopy, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita que se dispare el click del padre
    e.stopPropagation();
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "p-2 rounded-full transition-all duration-300 focus:outline-none",
        copied 
          ? "bg-green-500/20 text-green-500 hover:bg-green-500/30" 
          : "bg-muted hover:bg-primary/10 hover:text-primary text-muted-foreground",
        className
      )}
      title="Copiar"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}