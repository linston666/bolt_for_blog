import React from 'react';
import { BookOpen } from 'lucide-react';

export function Writing() {
  const articles = [
    {
      title: "The Art of Self-Reflection",
      excerpt: "Exploring the depths of personal growth through mindful introspection",
      date: "March 2024",
      category: "Philosophy"
    },
    {
      title: "Emotional Intelligence in the Digital Age",
      excerpt: "Understanding and nurturing emotional awareness in our connected world",
      date: "February 2024",
      category: "Psychology"
    },
    {
      title: "Finding Balance in Modern Life",
      excerpt: "Navigating the complexities of work, relationships, and personal growth",
      date: "January 2024",
      category: "Life Balance"
    }
  ];

  return (
    <section id="writing" className="py-20 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Dalloway's Garden</h2>
          <p className="text-gray-600 mt-4">A space for philosophical reflection and emotional exploration</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-sm text-emerald-600 mb-2">{article.category}</div>
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="text-sm text-gray-500">{article.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}