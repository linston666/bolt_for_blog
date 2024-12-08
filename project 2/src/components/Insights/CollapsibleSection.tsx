import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

export function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(
      "border border-sunflower-accent/50 rounded-lg overflow-hidden transition-all duration-200",
      "hover:border-sunflower-accent hover:shadow-sm"
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full px-4 py-3 flex items-center justify-between',
          'text-left transition-all duration-200',
          isOpen 
            ? 'bg-sunflower-primary/10 text-sunflower-primary-dark'
            : 'bg-white/70 hover:bg-sunflower-primary/5 text-gray-800 hover:text-sunflower-primary-dark'
        )}
      >
        <span className="font-medium">{title}</span>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-sunflower-primary transition-transform duration-200" />
        ) : (
          <ChevronRight className="w-5 h-5 text-sunflower-primary transition-transform duration-200" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-white/80 border-t border-sunflower-accent/20">
          {children}
        </div>
      )}
    </div>
  );
}