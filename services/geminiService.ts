
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getSmartRecommendation(mood: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Sugira 3 filmes ou séries para alguém se sentindo ${mood}. Seja breve e amigável.`,
    });
    return response.text;
  } catch (e) { return "Que tal um clássico hoje?"; }
}

export async function getContentAnalysis(title: string, description: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Dê um motivo empolgante para assistir "${title}": ${description}`,
    });
    return response.text;
  } catch (e) { return "Uma história imperdível!"; }
}
