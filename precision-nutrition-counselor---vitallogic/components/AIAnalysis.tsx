
import React, { useState } from 'react';
import { nutritionService } from '../services/geminiService';

const AIAnalysis: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [visualResult, setVisualResult] = useState<string | null>(null);
  const [generatingImage, setGeneratingImage] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);
    setVisualResult(null);
    
    try {
      const response = await nutritionService.analyzeSymptoms(query);
      setResult(response);
      
      // Generate associated visualization
      setGeneratingImage(true);
      const imgPrompt = `A high-detail 3D render of a glowing biological essence or crystalline structure floating in a serene, professional medical-tech environment, vibrant and balanced lighting, representing harmony for ${query.substring(0, 30)}`;
      const img = await nutritionService.generateFantasyImage(imgPrompt);
      setVisualResult(img);
    } catch (error) {
      console.error(error);
      setResult("エラーが発生しました。しばらくしてから再度お試しください。");
    } finally {
      setLoading(false);
      setGeneratingImage(false);
    }
  };

  return (
    <section id="ai-preview" className="py-24 bg-emerald-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-emerald-900/5 p-8 md:p-16 border border-white">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center animate-pulse">
              <i className="fas fa-magic text-white text-xs"></i>
            </div>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Diagnostic Preview</span>
          </div>

          <h3 className="text-3xl font-serif font-bold mb-6">AI 精密栄養シミュレーター</h3>
          <p className="text-slate-600 mb-10">
            今の心身の状態を教えてください。VitalLogicのAIが、精密データと伝統医学の知見に基づき、あなたのための統合的な視点を提示します。
          </p>

          <form onSubmit={handleAnalyze} className="mb-10">
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="例：最近、仕事のプレッシャーで『気』が休まらず、甘いものを欲してしまいます。体が重く、朝の目覚めがスッキリしません..."
                className="w-full h-40 p-6 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none resize-none shadow-inner"
              />
              <button
                type="submit"
                disabled={loading}
                className={`absolute bottom-4 right-4 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 hover:bg-emerald-600 transition-all shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <i className="fas fa-circle-notch animate-spin"></i>
                    <span>分析中...</span>
                  </>
                ) : (
                  <>
                    <span>分析を開始</span>
                    <i className="fas fa-wand-sparkles"></i>
                  </>
                )}
              </button>
            </div>
          </form>

          {(result || generatingImage) && (
            <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4 text-emerald-400">
                    <i className="fas fa-lightbulb"></i>
                    <span className="font-bold">統合分析結果</span>
                  </div>
                  <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed whitespace-pre-wrap text-sm">
                    {result || "解析情報を構築中..."}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-emerald-600 p-6 rounded-3xl text-white text-center shadow-lg shadow-emerald-900/20">
                    <h5 className="text-xs font-bold uppercase tracking-widest mb-4">Vitality Visualization</h5>
                    <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden border border-white/20">
                      {generatingImage ? (
                        <div className="flex flex-col items-center">
                          <i className="fas fa-sparkles text-2xl animate-bounce mb-2"></i>
                          <p className="text-[10px] uppercase font-bold opacity-50">Visualizing Balance...</p>
                        </div>
                      ) : (
                        visualResult && <img src={visualResult} alt="Energy Visualization" className="w-full h-full object-cover animate-in zoom-in duration-500" />
                      )}
                    </div>
                    <p className="text-[10px] mt-4 opacity-70 leading-relaxed">
                      この画像は、あなたの現在のエネルギーバランスを独自の3D CGIで表現したものです。
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-white text-slate-900 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all shadow-md border border-slate-100 text-sm"
                  >
                    個別相談を予約
                  </button>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-slate-50 rounded-xl text-center border border-slate-200/50">
                <p className="text-[10px] text-slate-500 italic">
                  ※本診断プレビューはAIの推測に基づくコーチング用のものであり、医学的診断や治療を目的としたものではありません。実際の精密検査や医師の診断に代わるものではない点をご了承ください。
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAnalysis;
