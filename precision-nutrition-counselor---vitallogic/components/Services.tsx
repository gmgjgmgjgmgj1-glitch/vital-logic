
import React from 'react';

const services = [
  {
    icon: "fa-vial",
    title: "バイオデータ精密解析",
    desc: "血液検査やDNAデータを元に、あなたの体質や不足栄養素、代謝の特徴を科学的に特定します。"
  },
  {
    icon: "fa-leaf",
    title: "統合体質カウンセリング",
    desc: "東洋医学の『証』やアーユルヴェーダの『ドーシャ』を掛け合わせ、数値の裏側にある心身の傾向を読み解きます。"
  },
  {
    icon: "fa-project-diagram",
    title: "ホリスティック・コーチング",
    desc: "食事ログに加え、仕事や人間関係のストレスマネジメントも伴走。四位一体の調和を目指します。"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">Integrated Service</h2>
          <h3 className="text-4xl font-serif font-bold mb-6">VitalLogic 3つのコア</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            私たちは「データ」という客観性と、「伝統医学」という主観的な知恵を統合した、唯一無二の最適解を提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300">
              <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 transition-colors">
                <i className={`fas ${service.icon} text-emerald-600 text-xl group-hover:text-white`}></i>
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <i className="fas fa-yin-yang text-[12rem]"></i>
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-serif font-bold mb-6">なぜ「統合」が必要なのか？</h4>
              <p className="text-slate-400 mb-8 leading-relaxed">
                検査結果が『異常なし』であっても、不調を感じるのはなぜでしょうか。
                それは、現代科学ではまだ捉えきれない、あなた特有の『エネルギーのバランス』や『季節・環境への応答』があるからです。
                東洋と西洋、両方の眼を持つことで、初めて本当のあなたが見えてきます。
              </p>
              <a 
                href="#roadmap" 
                className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-emerald-900/40"
              >
                プログラム詳細を見る
              </a>
            </div>
            <div className="space-y-4">
              {[
                "生化学データ解析（血液・DNA・腸内）",
                "東洋医学的パターン（証）の特定",
                "アーユルヴェーダ（プラクリティ）診断",
                "環境ストレスへの生化学的応答の最適化"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <i className="fas fa-check-circle text-emerald-400"></i>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;