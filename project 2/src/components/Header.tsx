import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="apple-blur px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-display font-semibold text-sunflower-primary-dark">
            Lin's Yard
          </a>
          
          <div className="hidden md:flex space-x-8 font-medium text-sunflower-primary">
            <a href="#about" className="hover:text-sunflower-primary-dark transition-colors">关于我</a>
            <a href="#insights" className="hover:text-sunflower-primary-dark transition-colors">Insights</a>
            <a href="#writing" className="hover:text-sunflower-primary-dark transition-colors">公众号</a>
            <a href="#projects" className="hover:text-sunflower-primary-dark transition-colors">我的项目</a>
            <a href="#contact" className="hover:text-sunflower-primary-dark transition-colors">联系我</a>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/linston666" className="text-sunflower-secondary hover:text-sunflower-secondary-dark transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-sunflower-secondary hover:text-sunflower-secondary-dark transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:susanzhao-cc@foxmail.com" className="text-sunflower-secondary hover:text-sunflower-secondary-dark transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}