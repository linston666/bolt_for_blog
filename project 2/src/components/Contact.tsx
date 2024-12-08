import React from 'react';
import { Mail, MapPin, BookOpen } from 'lucide-react';
import { Button } from './ui/Button';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-sunflower-accent-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-sunflower-primary-dark">联系我</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-sunflower-primary-dark">联系信息</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-sunflower-primary" size={20} />
                <span className="text-sunflower-primary">susanzhao-cc@foxmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-sunflower-primary" size={20} />
                <span className="text-sunflower-primary">暂居北京</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="text-sunflower-primary" size={20} />
                <span className="text-sunflower-primary">我的微信：linston666</span>
              </div>
            </div>
          </div>
          <form className="space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sunflower-primary-dark mb-1">
                你的名字
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-sunflower-accent rounded-xl focus:ring-2 focus:ring-sunflower-primary focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sunflower-primary-dark mb-1">
                你的邮件
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-sunflower-accent rounded-xl focus:ring-2 focus:ring-sunflower-primary focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-sunflower-primary-dark mb-1">
                想说的话
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-sunflower-accent rounded-xl focus:ring-2 focus:ring-sunflower-primary focus:border-transparent outline-none transition-all"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-sunflower-primary hover:bg-sunflower-primary-dark text-white"
            >
              联系我
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}