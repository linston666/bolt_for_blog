import React from 'react';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Linston</h3>
            <p className="text-gray-400 mt-2">你的生命课题是什么？</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com" className="hover:text-emerald-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-emerald-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-emerald-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <BookOpen size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jiaying Zhao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}