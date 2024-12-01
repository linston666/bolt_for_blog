import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          林斯顿_
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          产品经理，自由写手，预备役旅行者
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          生命本身应当以艺术品的形式存在，欢迎你与我的生命产生交互。
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
        >
          Learn More <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}