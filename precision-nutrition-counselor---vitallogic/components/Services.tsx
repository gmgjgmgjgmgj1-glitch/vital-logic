
import React from 'react';

const services = [
  {
    icon: "fa-leaf",
    title: "更年期ケア＆ホルモンバランス",
    desc: "ホットフラッシュ、不眠、イライラ――。ホルモンの変化に寄り添いながら、必要な栄養素を科学的に見極め、穏やかな毎日を取り戻します。",
    features: ["ホルモン検査データ解析", "自律神経バランス改善", "漢方的アプローチ"]
  },
  {
    icon: "fa-spa",
    title: "内側から輝く美容栄養",
    desc: "肌のハリ、髪のツヤ、体型の変化。外側のケアだけでは届かない「内側からの美しさ」を、腸内環境や抗酸化栄養の最適化で叶えます。",
    features: ["腸内フローラ改善", "抗酸化・抗糖化対策", "コラーゲン生成サポート"]
  },
  {
    icon: "fa-heart",
    title: "こころとからだの統合ケア",
    desc: "気持ちの落ち込み、将来への不安、人間関係の疲れ。東洋医学の「気血水」の考え方を取り入れ、心身のバランスを整えます。",
    features: ["東洋医学体質診断", "ストレス栄養学", "睡眠の質向上"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-mauve-500 font-bold tracking-widest text-xs mb-4">OUR SERVICES</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-stone-800">
            あなたのお悩みに寄り添う<br className="sm:hidden"/>3つのケア
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-base leading-relaxed">
            「なんとなく不調」には、必ず理由があります。<br/>
            科学と伝統の両方の目で、その原因を丁寧に紐解きます。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 lg:p-10 rounded-3xl bg-cream-50 border border-cream-200 hover:border-mauve-200 hover:bg-mauve-50/50 transition-all duration-500 hover:shadow-lg hover:shadow-mauve-100/50"
            >
              <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 group-hover:bg-mauve-500 transition-colors duration-300">
                <i className={`fas ${service.icon} text-mauve-500 text-xl group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-stone-800">{service.title}</h3>
              <p className="text-stone-500 leading-relaxed mb-6 text-[15px]">{service.desc}</p>
              <div className="space-y-2">
                {service.features.map((f, j) => (
                  <div key={j} className="flex items-center space-x-2 text-sm text-mauve-600">
                    <i className="fas fa-check text-[10px] text-mauve-400"></i>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why integration matters */}
        <div className="mt-16 lg:mt-20 p-10 lg:p-14 bg-stone-800 rounded-[2.5rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <i className="fas fa-yin-yang text-[10rem]"></i>
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-6">
                なぜ「科学」と「東洋の知恵」の<br/>両方が必要なのか
              </h3>
              <p className="text-stone-400 mb-8 leading-relaxed text-[15px]">
                病院の検査では「異常なし」と言われるのに、からだがつらい。<br/>
                それは、数値だけでは捉えきれない「体質」や「気の巡り」の問題かもしれません。<br/><br/>
                西洋の精密データと、東洋医学が長年培ってきた知恵。<br/>
                この両方があって初めて、あなたの全体像が見えてきます。
              </p>
              <a
                href="#program"
                className="inline-block bg-mauve-500 hover:bg-mauve-400 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg"
              >
                プログラムの詳細へ
              </a>
            </div>
            <div className="space-y-4">
              {[
                "血液・ホルモン・腸内の精密解析",
                "東洋医学の「証」による体質診断",
                "アーユルヴェーダの体質（ドーシャ）判定",
                "生活環境・ストレスを含めた総合評価"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <i className="fas fa-check-circle text-mauve-300"></i>
                  <span className="text-sm font-medium text-stone-300">{item}</span>
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
