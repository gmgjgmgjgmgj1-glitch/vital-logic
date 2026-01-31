
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
    "午後 (13:00 - 15:00)",
    "夕方 (15:00 - 17:00)",
    "いつでも可"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetEmail = "gmgjgmgjgmgj1@gmail.com";
    const subject = `【無料相談予約】${formData.name}様 / VitalLogic精密栄養カウンセリング`;

    const body = `
【お客様情報】
お名前: ${formData.name}
メールアドレス: ${formData.email}

【予約希望日時】
第一希望: ${formData.date1 || '未選択'}
第二希望: ${formData.date2 || '未選択'}
希望時間帯: ${formData.timeSlot || '未選択'}

【ご相談内容】
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

      {/* About / Philosophy Section */}
      <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-mauve-50 p-7 rounded-[1.5rem] text-center border border-mauve-100 group hover:bg-mauve-500 transition-colors duration-300">
                    <i className="fas fa-heartbeat text-2xl text-mauve-500 mb-3 group-hover:text-white transition-colors"></i>
                    <h5 className="font-serif font-bold mb-1 text-stone-800 group-hover:text-white text-sm">からだ</h5>
                    <p className="text-[11px] text-stone-400 group-hover:text-mauve-100">ホルモン・栄養バランス</p>
                  </div>
                  <div className="bg-stone-800 p-7 rounded-[1.5rem] text-center text-white">
                    <i className="fas fa-cloud-sun text-2xl text-mauve-300 mb-3"></i>
                    <h5 className="font-serif font-bold mb-1 text-sm">こころ</h5>
                    <p className="text-[11px] text-stone-400">感情・ストレスケア</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-mauve-500 p-7 rounded-[1.5rem] text-center text-white">
                    <i className="fas fa-spa text-2xl text-white mb-3"></i>
                    <h5 className="font-serif font-bold mb-1 text-sm">美しさ</h5>
                    <p className="text-[11px] text-mauve-100">内側からの輝き</p>
                  </div>
                  <div className="bg-cream-100 p-7 rounded-[1.5rem] text-center border border-cream-200">
                    <i className="fas fa-sun text-2xl text-amber-500 mb-3"></i>
                    <h5 className="font-serif font-bold mb-1 text-stone-800 text-sm">暮らし</h5>
                    <p className="text-[11px] text-stone-400">睡眠・生活リズム</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-mauve-100/50 rounded-full -z-10"></div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-mauve-500 font-bold tracking-widest text-xs mb-4">OUR PHILOSOPHY</p>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8 leading-tight text-stone-800">
                「年だから仕方ない」<br/>
                そう思っていませんか？
              </h2>
              <p className="text-base text-stone-500 mb-6 leading-relaxed">
                50代を迎えると、からだもこころも大きく変わります。でもそれは、衰えではなく<strong className="text-stone-700">「からだが新しいバランスを求めているサイン」</strong>です。
              </p>
              <p className="text-base text-stone-500 mb-8 leading-relaxed">
                VitalLogicは、最新の栄養科学で「何が足りないのか」を数値で見える化し、東洋医学の知恵で「あなたの体質に合った整え方」を見つけます。
              </p>

              <div className="bg-mauve-50/60 p-7 rounded-2xl border border-mauve-100 mb-8">
                <p className="text-stone-600 leading-relaxed font-medium text-[15px]">
                  <i className="fas fa-quote-left text-mauve-300 mr-2 text-xs"></i>
                  更年期のつらさ、疲れやすさ、お肌の悩み。ひとつひとつに原因があり、ひとつひとつに解決策があります。「もう遅い」ということは、決してありません。
                  <i className="fas fa-quote-right text-mauve-300 ml-2 text-xs"></i>
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-mauve-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-microscope text-mauve-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-[15px]">科学的な根拠に基づくアプローチ</h4>
                    <p className="text-sm text-stone-500">血液検査・ホルモン値・腸内環境データから、あなたの状態を正確に把握します。</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-leaf text-amber-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-[15px]">東洋医学の知恵を活かして</h4>
                    <p className="text-sm text-stone-500">「冷え」「気の滞り」「血の巡り」――数値には現れない不調のサインも読み解きます。</p>
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
      <section id="contact" className="py-20 lg:py-28 bg-stone-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-80 h-80 bg-mauve-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-mauve-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-mauve-500/20 text-mauve-300 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              <i className="fas fa-calendar-check"></i>
              <span>RESERVATION</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              まずは、お気軽にお話しください
            </h2>
            <p className="text-stone-400 max-w-lg mx-auto leading-relaxed text-[15px]">
              初回の無料オンライン相談では、あなたのお悩みをじっくりお伺いし、<br className="hidden md:block"/>
              VitalLogicでどのようなサポートができるかをご説明いたします。
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-md">
            {isSubmitted ? (
              <div className="py-10 text-center">
                <div className="w-16 h-16 bg-mauve-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-mauve-500/20">
                  <i className="fas fa-check text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">ありがとうございます</h3>
                <p className="text-stone-400 mb-8 text-base leading-relaxed">
                  メールソフトが起動しましたので、<br/>
                  そのまま送信ボタンを押して完了してください。
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold transition-all"
                >
                  内容を修正する
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-400 ml-1">お名前</label>
                    <input
                      type="text"
                      placeholder="山田 花子"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-4 placeholder-stone-600 outline-none focus:ring-2 focus:ring-mauve-400 focus:bg-white/15 transition-all text-white text-[15px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-400 ml-1">メールアドレス</label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-4 placeholder-stone-600 outline-none focus:ring-2 focus:ring-mauve-400 focus:bg-white/15 transition-all text-white text-[15px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-400 ml-1">第一希望日</label>
                    <input
                      type="date"
                      required
                      value={formData.date1}
                      onChange={(e) => setFormData({...formData, date1: e.target.value})}
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-4 outline-none focus:ring-2 focus:ring-mauve-400 transition-all text-white [color-scheme:dark]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-400 ml-1">第二希望日</label>
                    <input
                      type="date"
                      required
                      value={formData.date2}
                      onChange={(e) => setFormData({...formData, date2: e.target.value})}
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-4 outline-none focus:ring-2 focus:ring-mauve-400 transition-all text-white [color-scheme:dark]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-stone-400 ml-1">希望時間帯</label>
                    <select
                      required
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-4 outline-none focus:ring-2 focus:ring-mauve-400 transition-all text-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-stone-800">時間帯を選択</option>
                      {timeOptions.map(opt => (
                        <option key={opt} value={opt} className="bg-stone-800">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-400 ml-1">
                    気になっていること・ご相談内容
                  </label>
                  <textarea
                    placeholder="例：更年期の症状がつらい、肌の調子が悪い、疲れが取れない、など何でもお気軽にどうぞ。"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/10 border border-white/10 rounded-xl p-4 h-28 placeholder-stone-600 outline-none focus:ring-2 focus:ring-mauve-400 resize-none transition-all text-white text-[15px]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-mauve-500 hover:bg-mauve-400 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-mauve-900/30 flex items-center justify-center space-x-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-circle-notch animate-spin"></i>
                      <span>送信準備中...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>無料相談を予約する</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-stone-500">
                  ご予約後、確認メールをお送りいたします。強引な勧誘は一切ございませんのでご安心ください。
                </p>
              </form>
            )}
          </div>

          {/* Footer */}
          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-[11px] text-stone-500 leading-loose max-w-xl mx-auto mb-8">
              免責事項：VitalLogicは栄養カウンセリング・コーチングサービスです。医学的な診断・治療・処方に代わるものではありません。持病や治療中の方は、必ずかかりつけの医師にもご相談ください。
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 tracking-wider">
              <div className="mb-4 md:mb-0 font-serif font-bold text-mauve-400 text-sm">
                VitalLogic
                <span className="block text-[10px] text-stone-500 font-sans font-normal tracking-widest mt-0.5">50代からの精密栄養カウンセリング</span>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-mauve-400 transition-colors">プライバシーポリシー</a>
                <a href="#" className="hover:text-mauve-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-mauve-400 transition-colors">LINE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
