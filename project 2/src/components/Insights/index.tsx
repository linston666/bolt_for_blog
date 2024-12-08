import React, { useState } from 'react';
import { InsightTabs } from './InsightTabs';
import { InsightContent } from './InsightContent';

export function Insights() {
  const [activeTab, setActiveTab] = useState('self');

  return (
    <section id="insights" className="py-20 bg-sunflower-accent/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Insights</h2>
        <div className="flex gap-8">
          <InsightTabs active={activeTab} setActive={setActiveTab} />
          <InsightContent active={activeTab} />
        </div>
      </div>
    </section>
  );
}