
import { GoogleGenAI } from "@google/genai";

export class FitnessCoachService {
  /**
   * Fetches performance advice from the AI model.
   * Following @google/genai guidelines, initialization is done directly with process.env.API_KEY.
   */
  async getAdvice(prompt: string) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: `You are BEAXST, a world-class performance coach. 
          Your style is direct, intense, motivating, and focused on functional strength and hypertrophy. 
          Respond in concise, actionable bullet points. 
          Use aggressive motivational language but remain supportive of recovery and longevity. 
          Assume the user is training in the SBD (Squat Bench Deadlift) Peak Phase 2 program.`,
          temperature: 0.7,
        },
      });
      // Directly access .text property as per SDK best practices
      return response.text;
    } catch (error) {
      console.error("AI Error:", error);
      return "Listen, I'm having trouble connecting to the neural network. Just stick to the program and keep pushing. Efficiency is key.";
    }
  }
}
