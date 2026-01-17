
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTravelAdvise = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert travel consultant at SHADHIN BANGLA. Your tone is professional, enthusiastic, and futuristic. Help the user with this request: ${prompt}`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text || "I'm sorry, I couldn't process your request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The neural link is temporarily offline. Please try again later.";
  }
};
