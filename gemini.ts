
import { GoogleGenAI } from "@google/genai";

export async function generateMarketingStrategy(businessType: string, goal: string): Promise<string> {
  // Always use direct process.env.API_KEY when initializing the GoogleGenAI client instance
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are Sanzid Rana's AI Strategy Assistant. Sanzid is a digital marketing expert with 5+ years of experience.
    A potential client with a business in the "${businessType}" niche wants to achieve the goal: "${goal}".
    
    Provide a professional, concise, and high-impact marketing strategy summary (about 150-200 words).
    Focus on specific platforms like Meta (Facebook/Instagram), Google Ads, and Technical Tracking (Pixel/CAPI).
    Use a confident, expert tone. 
    Format it with clear headings or bullet points in Markdown.
    Mention that these are initial thoughts and a custom consultation with Sanzid is recommended for a full plan.
  `;

  try {
    // Directly use generateContent with the model name and contents (prompt string)
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    // Access response.text property directly (not as a method)
    return response.text || "I'm sorry, I couldn't generate a strategy at this moment. Please contact Sanzid directly!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently offline. Please reach out to Sanzid Rana via the contact form for a personalized strategy.";
  }
}
