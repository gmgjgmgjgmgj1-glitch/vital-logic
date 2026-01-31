
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
      if (!process.env.API_KEY && !process.env.GEMINI_API_KEY) {
        setResult("**AI体質診断をご利用いただくには、API Keyの設定が必要です。**\n\nサイト管理者にお問い合わせいただくか、直接カウンセリングをご予約ください。\n\n下記の「無料相談を予約」ボタンから、お気軽にお申し込みいただけます。");
        setLoading(false);
        return;
      }
      const response = await nutritionService.analyzeSymptoms(query);
      setResult(response);

      setGeneratingImage(true);
      const imgPrompt = `Soft watercolor painting of healing herbs and gentle botanical elements, warm pastel tones, peaceful and nurturing atmosphere, representing wellness and balance for ${query.substring(0, 30)}`;
      const img = await nutritionService.generateFantasyImage(imgPrompt);
      setVisualResult(img);
    } catch (error) {
      console.error(error);
      setResult("申し訳ございません。エラーが発生いたしました。しばらくしてから再度お試しください。");
    } finally {
      setLoading(false);
      setGeneratingImage(false);
    }
  };

  const sampleQueries = [
    "最近ホットフラッシュがひどく、夜中に何度も目が覚めてしまいます",
    "肌のハリがなくなり、シミやくすみが気になります。疲れやすさもあります",
    "気持ちが沈みがちで、何をするにもおっくうです。甘いものがやめられません",
  ];

  return (
    <section id="ai-preview" className="py-20 lg:py-28 bg-mauve-50/40">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-mauve-100/20 p-8 md:p-14 border border-cream-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-mauve-500 rounded-full flex items-center justify-center animate-soft-pulse">
              <i className="fas fa-sparkles text-white text-xs"></i>
            </div>
            <span className="text-sm font-bold text-mauve-500 tracking-widest">AI DIAGNOSIS</span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4 text-stone-800">
            AI体質診断（無料）
          </h2>
          <p className="text-stone-500 mb-8 leading-relaxed text-[15px]">
            今のからだやこころの状態を教えてください。<br/>
            AIが東洋医学と栄養学の視点から、あなたの体質傾向と改善のヒントをお伝えします。
          </p>

          {/* Sample queries */}
          <div className="mb-6">
            <p className="text-xs text-stone-400 mb-3">こんなお悩みを入力してみてください：</p>
            <div className="flex flex-wrap gap-2">
              {sampleQueries.map((sq, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(sq)}
                  className="text-xs bg-cream-100 text-stone-600 px-3 py-1.5 rounded-full hover:bg-mauve-100 hover:text-mauve-700 transition-colors text-left"
                >
                  {sq.substring(0, 24)}...
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleAnalyze} className="mb-8">
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="例：最近よく眠れず、朝起きても疲れが取れません。更年期のせいか汗をかきやすく、気持ちも不安定になりがちです..."
                className="w-full h-36 p-5 rounded-2xl bg-cream-50 border border-cream-200 focus:ring-2 focus:ring-mauve-300 focus:border-transparent transition-all outline-none resize-none text-stone-700 text-[15px] leading-relaxed"
              />
              <button
                type="submit"
                disabled={loading}
                className={`absolute bottom-4 right-4 bg-mauve-500 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 hover:bg-mauve-600 transition-all shadow-lg shadow-mauve-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <i className="fas fa-circle-notch animate-spin"></i>
                    <span>分析中...</span>
                  </>
                ) : (
                  <>
                    <span>診断する</span>
                    <i className="fas fa-arrow-right"></i>
                  </>
                )}
              </button>
            </div>
          </form>

          {(result || generatingImage) && (
            <div className="mt-10 animate-fade-in-up">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-stone-800 text-white p-8 rounded-2xl relative overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4 text-mauve-300">
                    <i className="fas fa-lightbulb"></i>
                    <span className="font-bold text-sm">あなたの体質診断結果</span>
                  </div>
                  <div className="prose-warm max-w-none text-stone-300 leading-relaxed whitespace-pre-wrap text-sm">
                    {result || "丁寧に分析しています..."}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-mauve-400 to-mauve-600 p-6 rounded-2xl text-white text-center shadow-lg shadow-mauve-200/30">
                    <h4 className="text-xs font-bold tracking-widest mb-3 opacity-80">BALANCE IMAGE</h4>
                    <div className="aspect-square bg-white/10 rounded-xl flex items-center justify-center overflow-hidden border border-white/20">
                      {generatingImage ? (
                        <div className="flex flex-col items-center">
                          <i className="fas fa-palette text-2xl animate-gentle-float mb-2"></i>
                          <p className="text-[10px] font-bold opacity-50">描画中...</p>
                        </div>
                      ) : (
                        visualResult && <img src={visualResult} alt="体質バランスイメージ" className="w-full h-full object-cover" />
                      )}
                    </div>
                    <p className="text-[10px] mt-3 opacity-70 leading-relaxed">
                      あなたの体質バランスをイメージで表現しました
                    </p>
                  </div>

                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-white text-stone-800 py-4 rounded-xl font-bold hover:bg-mauve-50 transition-all shadow-md border border-cream-200 text-sm"
                  >
                    <i className="fas fa-calendar-check mr-2 text-mauve-500"></i>
                    無料相談を予約する
                  </button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-cream-100 rounded-xl text-center border border-cream-200">
                <p className="text-[11px] text-stone-400">
                  ※本診断はAIの推測に基づくもので、医学的な診断・治療に代わるものではありません。詳しくはカウンセリングにてご相談ください。
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
