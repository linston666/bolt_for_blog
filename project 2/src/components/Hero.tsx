import React from 'react';
import { Button } from './ui/Button';
import { ArrowDown, Bike, Book, Pen, Music, Brain, Sparkles } from 'lucide-react';

export function Hero() {
  const personalTraits = [
    { icon: Bike, text: "骑行" },
    { icon: Book, text: "读书" },
    { icon: Pen, text: "写作" },
    { icon: Music, text: "跳舞" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="text-center px-4 space-y-8 backdrop-blur-sm bg-white/30 py-16 rounded-3xl max-w-4xl mx-4">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-display font-black text-gray-900 tracking-tight">
            林斯顿_
          </h1>
          <p className="text-xl text-gray-800 font-medium">
            赵佳莹 | Susan
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {personalTraits.map((trait, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
              <trait.icon className="w-4 h-4 text-sunflower-primary" />
              <span className="text-gray-800 font-medium">{trait.text}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-lg font-medium text-gray-800">
            <Brain className="w-5 h-5 text-sunflower-primary" />
            <span>ENTP, but...</span>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-gray-700 italic font-light leading-relaxed">
              "有序和无序成为邻居，理性紧挨着非理性"
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              用"轻度的疯狂"和"令人放心的理性"来定义人格，有机会获取更精彩的上下文。
            </p>
          </div>
        </div>

        <div className="pt-4">
          <Button 
            size="lg" 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            探索更多<ArrowDown className="ml-2 group-hover:animate-bounce" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}