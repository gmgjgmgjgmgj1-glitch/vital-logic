
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
    const systemPrompt = `あなたは精密栄養学と東洋・伝統医学を融合させた、超一流のホリスティック・カウンセラーです。

【あなたの専門性】
1. 精密栄養学：血液データや遺伝子、分子レベルの生化学。
2. 東洋医学：個人の「証（Sho）」を見極めるパターン診断（気血水、虚実など）。
3. アーユルヴェーダ：個人の憲法である「プラクリティ（Prakriti）」の視点（ヴァータ・ピッタ・カパ）。

【ミッション】
身体・感情・知性・精神の四位一体を整えること。特に仕事や人間関係による不調を、これら3つの視点を統合して解析してください。

【出力構成】
1. 【統合的考察】生化学データと伝統医学（証・プラクリティ）の視点を掛け合わせた現状分析。
2. 【四位一体の調和度】身体・感情・知性・精神のバランス評価。
3. 【個別最適化アクション】優先すべき栄養素、食事法（伝統医学的な性質も考慮）、生活習慣の調整。
4. 【精密検査の推奨】次に受けるべき科学的検査。

相談内容: ${input}

回答はMarkdown形式で、親身かつ知的に出力してください。最後に、医療行為ではない旨の免責事項を添えてください。`;

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
          parts: [{ text: `Pixar like 3D CGI, Fantasy Art style, ${prompt}, cinematic lighting, 8k, vibrant colors, masterpiece, high detail` }],
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