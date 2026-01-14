
import React from 'react';

const steps = [
  {
    phase: "Phase 01",
    title: "Biochemical Blueprint",
    subtitle: "科学的データの収集",
    desc: "最新の検査データを解析し、あなたの身体の『現状の数値』を多角的なデータマップとして可視化します。",
    icon: "fa-dna",
    tags: ["精密解析", "分子レベル"]
  },
  {
    phase: "Phase 02",
    title: "Constitutional Mapping",
    subtitle: "個体性の特定",
    desc: "伝統医学の視点から、あなたが生まれ持った性質と、数値の裏側にある『生命の癖』を読み解きます。",
    icon: "fa-leaf",
    tags: ["証の特定", "プラクリティ"]
  },
  {
    phase: "Phase 03",
    title: "Environmental Synthesis",
    subtitle: "統合分析",
    desc: "日々の環境がどのようにエネルギーを削っているか。複雑に絡み合った不調の根本原因を特定します。",
    icon: "fa-project-diagram",
    tags: ["ストレス応答", "神経調律"]
  },
  {
    phase: "Phase 04",
    title: "Precision Transformation",
    subtitle: "四位一体の変革",
    desc: "身体・感情・知性・精神を整え、本来の生命力が溢れ出し、心身が根源から輝きを取り戻す状態へ導きます。",
    icon: "fa-gem",
    tags: ["オーダーメイド", "QOL最大化"]
  }
];

const ProgramRoadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-20 left-10 text-[10rem] font-serif font-bold text-slate-200/50 pointer-events-none select-none leading-none opacity-40">
        BALANCE
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">The Journey to Balance</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">人生が輝きだす、<br/>4つのステップ。</h3>
          <p className="text-slate-500 max-w-2xl text-lg font-light leading-relaxed">
            精密な分析は、単なる数字の羅列ではありません。<br/>
            あなたが自分自身の物語を再構築し、本来の輝きを取り戻すためのプロセスです。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-emerald-500 font-serif italic text-xl mb-6">{step.phase}</div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/20 group-hover:rotate-6 transition-transform">
                  <i className={`fas ${step.icon} text-2xl text-white`}></i>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h4>
                <div className="text-sm font-medium text-emerald-600 mb-4">{step.subtitle}</div>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {step.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {step.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md">
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