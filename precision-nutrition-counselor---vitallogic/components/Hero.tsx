
import React, { useState, useEffect } from 'react';
import { nutritionService } from '../services/geminiService';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000";

const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        if (!process.env.API_KEY && !process.env.GEMINI_API_KEY) {
          setHeroImage(FALLBACK_IMAGE);
          setLoading(false);
          return;
        }
        const img = await nutritionService.generateFantasyImage(
          "An elegant Japanese woman in her 50s meditating peacefully in a serene garden with soft morning light, surrounded by herbs and flowers, warm golden tones, gentle and calming atmosphere"
        );
        setHeroImage(img || FALLBACK_IMAGE);
      } catch {
        setHeroImage(FALLBACK_IMAGE);
      } finally {
        setLoading(false);
      }
    };
    fetchHeroImage();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden bg-cream-50">
      {/* Warm background gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-gradient-to-bl from-mauve-100/40 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-amber-100/30 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-20 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-xl order-1">
            <div className="inline-flex items-center space-x-2 bg-mauve-100 text-mauve-700 px-4 py-1.5 rounded-full text-xs font-bold mb-8 tracking-wider">
              <i className="fas fa-heart text-mauve-400 text-[10px]"></i>
              <span>50代からの、新しいわたしへ</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8 text-stone-800">
              からだの声に耳をすませて、<br/>
              <span className="text-mauve-600">もっと美しく、</span><br/>
              <span className="text-mauve-600">もっと健やかに。</span>
            </h1>

            <p className="text-base md:text-lg text-stone-500 mb-10 leading-relaxed">
              更年期のゆらぎ、疲れやすさ、肌の変化――。<br className="hidden md:block"/>
              それは「年だから」ではなく、からだが出しているサインです。<br className="hidden md:block"/>
              科学的な栄養データと東洋医学の知恵を掛け合わせて、<br className="hidden md:block"/>
              あなたらしい輝きを取り戻すお手伝いをいたします。
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#ai-preview"
                className="bg-mauve-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-mauve-200 hover:bg-mauve-600 transition-all text-center text-base"
              >
                <i className="fas fa-sparkles mr-2"></i>
                無料AI体質診断を試す
              </a>
              <a
                href="#about"
                className="bg-white border border-stone-200 text-stone-600 px-8 py-4 rounded-2xl font-bold hover:bg-mauve-50 hover:border-mauve-200 transition-all text-center text-base"
              >
                詳しく見る
              </a>
            </div>

            <p className="text-[11px] text-stone-400">
              ※本サービスは医療行為ではなく、栄養カウンセリング・コーチングです。
            </p>
          </div>

          <div className="relative order-2 mt-4 lg:mt-0">
            <div className="relative z-10 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-mauve-200/30 bg-mauve-50 aspect-[4/5] flex items-center justify-center">
              {loading ? (
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 border-3 border-mauve-300 border-t-mauve-600 rounded-full animate-spin"></div>
                  <p className="text-sm text-mauve-400 animate-soft-pulse">イメージを準備しています...</p>
                </div>
              ) : (
                <img
                  src={heroImage || FALLBACK_IMAGE}
                  alt="穏やかな朝の光のなかで"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 glass-warm p-5 lg:p-6 rounded-2xl shadow-xl z-20 max-w-[220px] lg:max-w-[260px]">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-seedling text-amber-600 text-sm"></i>
                </div>
                <div className="font-bold text-stone-800 text-sm">あなただけの処方</div>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                お一人おひとりの体質・生活に合わせた、オーダーメイドの栄養プランをご提案します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
