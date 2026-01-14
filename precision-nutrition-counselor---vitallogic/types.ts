
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface AnalysisResult {
  summary: string;
  focusAreas: string[];
  recommendation: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
