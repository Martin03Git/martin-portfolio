
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants.ts';

let chatSession: Chat | null = null;

// Initialize the chat session with the model and system instruction
export const initializeChat = async () => {
  // Always use a new GoogleGenAI instance with the API key from process.env
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: AI_SYSTEM_INSTRUCTION,
      thinkingConfig: { thinkingBudget: 0 },
    },
  });
  return chatSession;
};

// Send message to Gemini and return the streaming response
export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<GenerateContentResponse> | null> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    throw new Error("Failed to initialize chat session.");
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Re-initialize chat session on failure to attempt recovery
    await initializeChat();
    if(chatSession) {
       return await chatSession.sendMessageStream({ message });
    }
    return null;
  }
};
