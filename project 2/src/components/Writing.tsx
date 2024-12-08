import React, { useState } from 'react';
import { BookOpen, ExternalLink, QrCode } from 'lucide-react';
import { Button } from './ui/Button';

export function Writing() {
  const [showQRModal, setShowQRModal] = useState(false);

  const articles = [
    {
      title: "'潜力'和'实力'，中间隔着什么？",
      excerpt: "实力无法匹及野心，简而言之就是缺乏沉淀。",
      date: "2022年02月28日",
      category: "方法论"
    },
    {
      title: "为什么需要温柔和浪漫？",
      excerpt: "浪漫是不拘一格、是灵感、是创造，每个人都需要有自己的缪斯。",
      date: "2022年04月10日",
      category: "感性"
    },
    {
      title: "《第二性》：女性独立的陷阱与超越",
      excerpt: "'我们仍然太热衷于看得清晰，以致不想越过这清晰穿透其他黑暗。'——西蒙娜·德·波伏瓦《第二性》",
      date: "2022年11月06日",
      category: "女性主义"
    }
  ];

  return (
    <section id="writing" className="py-20 bg-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="w-12 h-12 text-gray-900 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">达洛维的花园</h2>
          <p className="text-gray-700 mt-4">探索理性与感性的边界</p>
          <div className="mt-6 flex justify-center">
            <Button 
              onClick={() => setShowQRModal(true)}
              className="bg-gray-900 hover:bg-gray-800 text-white"
            >
              扫码关注 <QrCode size={16} className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setShowQRModal(true)}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-900 px-2 py-1 bg-gray-100 rounded-full">
                  {article.category}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
              <div className="text-sm text-gray-500">{article.date}</div>
            </div>
          ))}
        </div>
      </div>

      {showQRModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowQRModal(false)}>
          <div className="bg-white p-8 rounded-2xl max-w-sm mx-4" onClick={e => e.stopPropagation()}>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">关注达洛维的花园</h3>
              <div className="mb-4">
                <img 
                  src="/images/qrcode.jpg"
                  alt="达洛维的花园公众号二维码"
                  className="w-48 h-48 mx-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}