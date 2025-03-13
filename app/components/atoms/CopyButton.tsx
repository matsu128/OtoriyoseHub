'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 text-sm font-medium transition-colors',
        'bg-primary text-primary-foreground hover:bg-primary/90 rounded-md',
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          コピー完了!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          クーポンをコピー
        </>
      )}
    </button>
  );
}