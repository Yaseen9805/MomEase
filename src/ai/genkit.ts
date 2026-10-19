import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI()],
  model: googleAI.model('gemini-3.8-flash'),
});

export function requireOutput<T>(output: T | null | undefined, message: string): T {
  if (!output) {
    throw new Error(message);
  }
  return output;
}
