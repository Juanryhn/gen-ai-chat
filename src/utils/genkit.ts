import { gemini15Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';
import { z } from 'zod';

// Configure a Genkit instance
const ai = genkit({
  plugins: [googleAI({
    apiKey: process.env.API_GEN_GEM,
  })],
  model: gemini15Flash, // Set default model
});

// Define the flow with streaming support
export const simpleFlow = ai.defineFlow(
  {
    name: 'streamFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
    streamSchema: z.object({ text: z.string() }), // Define the schema for streamed chunks
  },
  async (input, { sendChunk }) => {
    const response = await ai.generate({
      model: gemini15Flash,
      prompt: input,
      streamingCallback: (chunk) => {
        sendChunk({ text: chunk.text });
      },
    });
    return response.text;
  }
);
