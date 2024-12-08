import React from 'react';
import { Briefcase, BookOpen, Globe } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Briefcase,
      title: '"非法"学生',
      description: '中国政法大学非法学专业学生，在校期间曾是"乡侣"电商扶贫创业团队负责人，京东校园合伙人领队，HCIA海外游学项目校园领队'
    },
    {
      icon: BookOpen,
      title: '半路出家软件人',
      description: '曾做过销售、公众号运营、市场营销，自学软件基础，做过企业服务软件，目前是互联网大厂产品，目前在钻研搜索推荐领域，AI领域小白，持续学习者'
    },
    {
      icon: Globe,
      title: '生命课题探索者',
      description: '业余公众号写手2年，理想职业是调查记者，仍旧在持续探索个人真正的生命课题，目前在艺术、社会、政治等领域持续积累中'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-sunflower-primary-dark font-display">关于我</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="apple-card p-8 hover:translate-y-[-4px]"
            >
              <div className="w-16 h-16 bg-sunflower-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-sunflower-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-sunflower-primary-dark text-center font-display">
                {feature.title}
              </h3>
              <p className="text-sunflower-primary text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}