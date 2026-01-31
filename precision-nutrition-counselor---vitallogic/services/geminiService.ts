
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiNutritionService {
  private ai: GoogleGenAI | null = null;

  constructor() {
    if (process.env.API_KEY) {
      this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
  }

  private getAI() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async analyzeSymptoms(input: string): Promise<string> {
    const ai = this.getAI();
    const systemPrompt = `あなたは50代以上の女性に特化した精密栄養学と東洋医学の専門カウンセラーです。穏やかで親身な口調で、わかりやすく回答してください。

【あなたの専門性】
1. 更年期・閉経後の女性の栄養学：ホルモンバランス、骨密度、代謝変化に精通。
2. 東洋医学：「証（Sho）」による体質パターン診断（気血水、冷え・熱、虚実など）。
3. アーユルヴェーダ：「プラクリティ（Prakriti）」体質判定（ヴァータ・ピッタ・カパ）。

【ミッション】
50代以上の女性が抱える「からだ」「こころ」「美しさ」「暮らし」の悩みに、科学と伝統医学を融合した視点で寄り添うこと。

【出力構成】
1. 【あなたの体質傾向】東洋医学・アーユルヴェーダの視点から見た体質の特徴。
2. 【いま起きていること】更年期やホルモン変化を踏まえた現状分析。
3. 【おすすめの食材・栄養素】毎日の食事に取り入れやすい具体的なアドバイス。
4. 【暮らしのヒント】睡眠・運動・リラックス法など、無理なくできる生活改善。
5. 【もっと詳しく知りたい方へ】推奨される検査や専門家への相談。

相談内容: ${input}

回答はMarkdown形式で、やさしく親身に出力してください。難しい専門用語には必ず簡単な説明を添えてください。最後に、医療行為ではない旨の免責事項を一文添えてください。`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: systemPrompt,
      config: { temperature: 0.75 },
    });
    return response.text || "エラーが発生しました。";
  }

  async generateFantasyImage(prompt: string): Promise<string | null> {
    const ai = this.getAI();
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: `Soft, warm watercolor style, ${prompt}, gentle pastel tones, nurturing atmosphere, elegant and calming, high quality` }],
        },
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
      return null;
    } catch (e) {
      console.error("Image generation failed", e);
      return null;
    }
  }
}

export const nutritionService = new GeminiNutritionService();
