
import React, { useState, useEffect } from 'react';
import { nutritionService } from '../services/geminiService';

const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroImage = async () => {
      const img = await nutritionService.generateFantasyImage(
        "A sophisticated laboratory where holographic data and glowing natural botanical elements merge, viewed through a professional lens, cinematic lighting"
      );
      setHeroImage(img);
      setLoading(false);
    };
    fetchHeroImage();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden bg-white">
      {/* Background soft elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-emerald-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl order-1 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-wider uppercase">
              <span>Modern Science × Ancient Wisdom</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-8">
              精密な科学と、<br/>
              <span className="text-emerald-600 italic font-medium">古来の叡智。</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
              身体・感情・知性・精神。この4つを「バイオデータ」と「伝統医学」の両面から調律。<br className="hidden md:block"/>
              あなたの中に眠る真の可能性を、今、科学的根拠に基づき解き放ちます。
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-0">
              <div className="flex flex-col space-y-2 w-full sm:w-auto">
                <a href="#ai-preview" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-slate-200 hover:bg-emerald-600 transition-all text-center">
                  AI 無料精密診断
                </a>
                <span className="text-[10px] text-slate-400 text-center">※本サービスは医療診断ではなく、コーチング・カウンセリングです。</span>
              </div>
              <a href="#philosophy" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all text-center w-full sm:w-auto">
                統合アプローチを知る
              </a>
            </div>
          </div>
          
          <div className="relative order-2 lg:order-2 mt-8 lg:mt-0">
            <div className="relative z-10 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 aspect-[4/5] flex items-center justify-center">
              {loading ? (
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm font-bold text-slate-400 animate-pulse uppercase tracking-widest">Generating 3D Insight...</p>
                </div>
              ) : (
                <img 
                  src={heroImage || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"} 
                  alt="Unified Medical Insight Visualization" 
                  className="w-full h-full object-cover animate-in fade-in duration-1000"
                />
              )}
            </div>
            {/* Floating info card */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white/90 backdrop-blur-xl p-6 lg:p-8 rounded-2xl shadow-xl z-20 border border-emerald-50 max-w-[240px] lg:max-w-xs">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-fingerprint text-emerald-600 text-sm lg:text-base"></i>
                </div>
                <div className="font-bold text-slate-900 text-sm lg:text-base">Unique Identity</div>
              </div>
              <p className="text-[10px] lg:text-xs text-slate-500 leading-relaxed">
                精密なデータ解析が、あなたの毎日を鮮やかな調和へと導きます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
