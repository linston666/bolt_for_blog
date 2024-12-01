import React from 'react';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-800">JZ</a>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
          <a href="#writing" className="hover:text-emerald-600 transition-colors">Writing</a>
          <a href="#projects" className="hover:text-emerald-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}