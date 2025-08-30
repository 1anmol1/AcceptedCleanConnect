import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Generates an optimized collection route from a list of bins.
 * @param {Array<Object>} bins - An array of bin objects with id and location.
 * @param {Object} startPoint - The starting point {lat, lon}.
 * @returns {Array<string>} An ordered array of bin IDs.
 */
export async function getOptimalRoute(bins, startPoint) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
    You are a logistics and route optimization expert for a smart waste management company.
    Given a starting depot at location ${JSON.stringify(startPoint)} and the following list of garbage bins that need to be collected: ${JSON.stringify(bins)}.
    Calculate the most efficient route to visit all bin locations, starting and ending at the depot.
    Return the answer ONLY as a JSON array of bin IDs in the optimal collection order. Example: ["bin_102", "bin_105", "bin_101"]
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // Clean up the text to be valid JSON
    const jsonString = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error generating optimal route:", error);
    return bins.map(b => b.binId); // Fallback to unordered list
  }
}