import React from 'react';
import { Link2 } from 'lucide-react';

interface KnowledgeCardProps {
  title: string;
  description: string;
  url: string;
}

export function KnowledgeCard({ title, description, url }: KnowledgeCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block p-6 rounded-xl transition-all duration-200",
        "bg-white/70 hover:bg-sunflower-primary/5",
        "border border-sunflower-accent/50 hover:border-sunflower-accent",
        "hover:shadow-sm group"
      )}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-medium text-gray-800 group-hover:text-sunflower-primary-dark transition-colors">
          {title}
        </h3>
        <Link2 className="w-5 h-5 text-gray-400 group-hover:text-sunflower-primary transition-colors" />
      </div>
      <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-colors">
        {description}
      </p>
    </a>
  );
}