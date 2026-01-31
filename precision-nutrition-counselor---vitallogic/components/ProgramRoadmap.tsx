
import React from 'react';

const steps = [
  {
    phase: "Step 01",
    title: "じっくりヒアリング",
    subtitle: "あなたのお話を聴かせてください",
    desc: "現在のお悩み、生活習慣、食事内容、これまでの健康状態をじっくりお伺いします。検査データがあればお持ちください。",
    icon: "fa-comments",
    tags: ["無料相談OK", "オンライン対応"]
  },
  {
    phase: "Step 02",
    title: "体質診断＆データ解析",
    subtitle: "科学と東洋医学の両面から",
    desc: "血液データや生活情報をもとに、西洋医学的な栄養状態と東洋医学的な体質傾向を掛け合わせて分析します。",
    icon: "fa-microscope",
    tags: ["精密解析", "体質診断"]
  },
  {
    phase: "Step 03",
    title: "あなただけの栄養プラン",
    subtitle: "無理なく続けられるご提案",
    desc: "毎日の食事に取り入れやすい形で、必要な栄養素と食材、生活改善のポイントをわかりやすくお伝えします。",
    icon: "fa-utensils",
    tags: ["オーダーメイド", "簡単レシピ付"]
  },
  {
    phase: "Step 04",
    title: "寄り添いサポート",
    subtitle: "変化を実感するまで一緒に",
    desc: "定期的なフォローアップで、からだの変化を確認しながらプランを調整。不安なことはいつでもご相談いただけます。",
    icon: "fa-hand-holding-heart",
    tags: ["定期フォロー", "LINEサポート"]
  }
];

const ProgramRoadmap: React.FC = () => {
  return (
    <section id="program" className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden">
      <div className="absolute top-16 left-8 text-[8rem] lg:text-[10rem] font-display font-bold text-mauve-100/30 pointer-events-none select-none leading-none">
        Journey
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="mb-16 lg:mb-20 text-center md:text-left">
          <p className="text-mauve-500 font-bold tracking-widest text-xs mb-4">YOUR JOURNEY</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-800 mb-6">
            輝きを取り戻す、<br/>4つのステップ。
          </h2>
          <p className="text-stone-500 max-w-lg text-base leading-relaxed">
            はじめての方でも安心してお受けいただけるよう、<br/>
            一歩ずつ、丁寧に進めてまいります。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white p-8 rounded-[2rem] shadow-md shadow-mauve-100/30 border border-cream-200 h-full hover:shadow-xl hover:border-mauve-200 hover:-translate-y-1 transition-all duration-500">
                <div className="text-mauve-400 font-display italic text-lg mb-5">{step.phase}</div>

                <div className="w-14 h-14 bg-gradient-to-br from-mauve-300 to-mauve-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-mauve-200/30 group-hover:rotate-3 transition-transform">
                  <i className={`fas ${step.icon} text-xl text-white`}></i>
                </div>

                <h3 className="text-lg font-serif font-bold text-stone-800 mb-1">{step.title}</h3>
                <div className="text-sm font-medium text-mauve-500 mb-4">{step.subtitle}</div>

                <p className="text-stone-500 text-sm leading-relaxed mb-6">{step.desc}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {step.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-wider bg-mauve-50 text-mauve-600 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramRoadmap;
