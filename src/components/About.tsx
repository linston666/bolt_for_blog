import React from 'react';
import { Briefcase, BookOpen, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="text-emerald-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Product Management</h3>
            <p className="text-gray-600">
              Leading product strategy and development at Meituan, focusing on user-centric solutions.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-emerald-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Writing</h3>
            <p className="text-gray-600">
              Creator of Dalloway's Garden, exploring life philosophy and emotional intelligence.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-emerald-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Bridging technology and human needs through innovative product solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}