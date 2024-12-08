import React from 'react';
import { cn } from '../../utils/cn';

interface TabProps {
  active: string;
  setActive: (tab: string) => void;
}

export function InsightTabs({ active, setActive }: TabProps) {
  const tabs = [
    { id: 'self', label: '对自己' },
    { id: 'users', label: '对用户' },
    { id: 'product', label: '产品思考流程' },
    { id: 'work', label: '关于工作' },
    { id: 'knowledge', label: '知识分享' },
    { id: 'moments', label: 'Moments' },
  ];

  return (
    <div className="w-64 space-y-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className={cn(
            'w-full text-left px-4 py-3 rounded-lg transition-all duration-200',
            'bg-white/50 hover:bg-sunflower-primary/10',
            active === tab.id
              ? 'bg-sunflower-primary/20 text-sunflower-primary-dark font-medium shadow-sm'
              : 'text-gray-700 hover:text-sunflower-primary-dark hover:shadow-sm'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}