
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIAnalysis from './components/AIAnalysis';
import ProgramRoadmap from './components/ProgramRoadmap';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date1: '',
    date2: '',
    timeSlot: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeOptions = [
    "午前 (10:00 - 12:00)",
    "昼〜午後 (12:00 - 15:00)",
    "夕方 (15:00 - 18:00)",
    "夜間 (18:00 - 21:00)",
    "いつでも可"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetEmail = "gmgjgmgjgmgj1@gmail.com";
    const subject = `【無料相談予約】${formData.name}様 / 精密栄養カウンセリング`;
    
    const body = `
【お客様情報】
お名前: ${formData.name}
メールアドレス: ${formData.email}

【予約希望日時】
第一希望: ${formData.date1 || '未選択'}
第二希望: ${formData.date2 || '未選択'}
希望時間帯: ${formData.timeSlot || '未選択'}

【ご相談内容・現状の悩み】
${formData.message}
    `.trim();

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-emerald-50 p-8 rounded-[2rem] text-center border border-emerald-100 group hover:bg-emerald-600 transition-colors">
                    <i className="fas fa-dna text-3xl text-emerald-600 mb-4 group-hover:text-white transition-colors"></i>
                    <h5 className="font-bold mb-2 group-hover:text-white">身体</h5>
                    <p className="text-xs text-slate-500 group-hover:text-emerald-100">精密な生化学データ</p>
                  </div>
                  <div className="bg-slate-900 p-8 rounded-[2rem] text-center text-white border border-slate-800">
                    <i className="fas fa-leaf text-3xl text-emerald-400 mb-4"></i>
                    <h5 className="font-bold mb-2">感情</h5>
                    <p className="text-xs text-slate-400">伝統医学の体質解析</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-emerald-600 p-8 rounded-[2rem] text-center text-white">
                    <i className="fas fa-om text-3xl text-white mb-4"></i>
                    <h5 className="font-bold mb-2">精神</h5>
                    <p className="text-xs text-emerald-100">東洋の「証」の視点</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-[2rem] text-center border border-slate-100">
                    <i className="fas fa-brain text-3xl text-slate-400 mb-4"></i>
                    <h5 className="font-bold mb-2">知性</h5>
                    <p className="text-xs text-slate-500">データと叡智の統合</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border-[0.5px] border-emerald-100 rounded-full -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-emerald-200 rounded-full -z-10 animate-[spin_40s_linear_infinite]"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-emerald-600 font-bold uppercase text-sm tracking-[0.2em] mb-4">Integration Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                科学で「証明」し、<br className="hidden md:block"/>
                叡智で「調和」させる。
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                精密栄養学が教える「数値」は重要です。しかし、人間関係や仕事の重圧があなたの「気」や「エネルギー」にどう影響しているか。その背景までを捉えるには、古来より伝わる東洋医学の「証」やアーユルヴェーダの「プラクリティ（体質）」という視点が不可欠です。
              </p>
              <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 mb-10">
                <p className="text-slate-700 leading-relaxed font-medium italic">
                  「身体・感情・知性・精神」のすべてが重なり合う場所で、あなただけの『正解』を見つけ出します。環境ストレスがあなたの栄養をどう奪い、本来の性質からどう逸脱させているかを可視化します。
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-microscope text-emerald-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">精密なバイオデータ分析</h4>
                    <p className="text-sm text-slate-500">血液・遺伝子・腸内フローラから、あなたの生化学的個性を特定します。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-sun text-emerald-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">伝統医学による体質診断</h4>
                    <p className="text-sm text-slate-500">東洋医学・アーユルヴェーダの視点から、未病の段階で不調の兆しを捉えます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      <ProgramRoadmap />
      <AIAnalysis />

      {/* Reservation Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-xs font-bold mb-4">
              <i className="fas fa-calendar-check"></i>
              <span>RESERVATION</span>
            </div>
            <h2 className="text-4xl font-serif font-bold mb-6">無料オンライン相談の予約</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              科学と叡智の統合カウンセリング。あなたの不調の背景にある、<br/>
              仕事や人間関係、体質の癖を読み解く第一歩です。
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md">
            {isSubmitted ? (
              <div className="py-12 animate-in zoom-in duration-500 text-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
                  <i className="fas fa-check text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold mb-4">予約リクエストを送信しました</h3>
                <p className="text-slate-400 mb-8 text-lg">
                  メールソフトが起動しました。送信ボタンを押して完了させてください。
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold transition-all"
                >
                  修正して再送する
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">お名前</label>
                    <input 
                      type="text" 
                      placeholder="氏名を入力" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 placeholder-slate-600 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white/15 transition-all text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">メールアドレス</label>
                    <input 
                      type="email" 
                      placeholder="example@mail.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 placeholder-slate-600 outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white/15 transition-all text-white" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">第一希望日</label>
                    <input 
                      type="date" 
                      required
                      value={formData.date1}
                      onChange={(e) => setFormData({...formData, date1: e.target.value})}
                      className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-white [color-scheme:dark]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">第二希望日</label>
                    <input 
                      type="date" 
                      required
                      value={formData.date2}
                      onChange={(e) => setFormData({...formData, date2: e.target.value})}
                      className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-white [color-scheme:dark]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">希望時間帯</label>
                    <select
                      required
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                      className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-slate-900">時間帯を選択</option>
                      {timeOptions.map(opt => (
                        <option key={opt} value={opt} className="bg-slate-900">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">解決したい悩み（仕事環境や人間関係、現在の体質の癖など）</label>
                  <textarea 
                    placeholder="不調の種類、現在の仕事環境や人間関係、過去に言われた体質の傾向などを自由にご記入ください。" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 h-32 placeholder-slate-600 outline-none focus:ring-2 focus:ring-emerald-500 resize-none transition-all text-white"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-emerald-900/40 flex items-center justify-center space-x-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-circle-notch animate-spin"></i>
                      <span>リクエスト作成中...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-calendar-check text-lg"></i>
                      <span>この内容で予約を申し込む</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/10 text-center">
            <p className="text-[10px] text-slate-500 tracking-widest leading-loose max-w-2xl mx-auto mb-8">
              免責事項：VitalLogicはホリスティック栄養コーチングおよびライフスタイルカウンセリングを提供しています。AI診断プレビューを含む当社のサービスは、教育および健康増進のヒントを提供することを目的としており、医学的診断、治療、または専門的な医学的助言に代わるものではありません。持病や体調に関する懸念については、必ず医師などの専門家にご相談ください。
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest">
              <div className="mb-4 md:mb-0 font-bold text-emerald-500">
                VitalLogic | Precision Nutrition Coaching & Ancient Wisdom
              </div>
              <div className="flex space-x-8">
                <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Note</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
