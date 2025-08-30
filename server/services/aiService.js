import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

// Ensure the API key is being loaded correctly
if (!process.env.GEMINI_API_KEY) {
  console.error("CRITICAL ERROR: GEMINI_API_KEY is not defined in the .env file.");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

/**
 * Generates a real chat response from the Gemini API.
 * @param {string} systemPrompt - The persona and instructions for the AI.
 * @param {string} userMessage - The user's actual question.
 * @returns {string} The AI-generated text response.
 */
export const generateChatResponse = async (systemPrompt, userMessage) => {
  try {
    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemPrompt }] },
        { role: "model", parts: [{ text: "Understood. I am ready to assist based on my defined role." }] },
      ],
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("Error from Gemini API:", error);
    return "I'm sorry, I'm having trouble connecting to my AI brain right now. Please check the server logs for more details.";
  }
};