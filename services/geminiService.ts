import { GoogleGenAI } from "@google/genai";
import { RoundResult } from "../types";
import { MOVES } from "../constants";

let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAI && process.env.API_KEY) {
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return genAI;
};

export const getSheldonCommentary = async (result: RoundResult): Promise<string> => {
  const ai = getGenAI();
  if (!ai) return "";

  const playerMoveLabel = MOVES[result.playerMove].label;
  const computerMoveLabel = MOVES[result.computerMove].label;
  const outcomeStr = result.result === 'WIN' ? 'Player Wins' : result.result === 'LOSE' ? 'Bazinga! Player Loses' : 'Draw';

  const prompt = `
    You are Sheldon Cooper from The Big Bang Theory. 
    The user is playing Rock-Paper-Scissors-Lizard-Spock against the computer.
    
    Match details:
    Player chose: ${playerMoveLabel}
    Computer chose: ${computerMoveLabel}
    Result: ${outcomeStr}
    Action Verb: ${result.verb || 'Tie'}

    Give a very short, witty, scientific, or condescending (in a funny way) comment about this specific outcome. 
    Maximum 20 words. Keep it in character.
    If the player chose Spock or Lizard, acknowledge the superior choice.
    If the player lost, use "Bazinga!" if appropriate.
    Output pure text only.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text?.trim() || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "";
  }
};
