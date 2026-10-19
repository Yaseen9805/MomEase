'use server';

/**
 * @fileOverview This file contains the Genkit flow for mood analysis and support.
 *
 * It analyzes mood and symptom entries from new mothers and provides personalized support suggestions via an AI chatbot.
 * The flow takes mood and symptom data as input and returns personalized support suggestions.
 *
 * @exports analyzeMoodAndProvideSupport - A function that analyzes mood and provides support suggestions.
 * @exports MoodAnalysisInput - The input type for the analyzeMoodAndProvideSupport function.
 * @exports MoodAnalysisOutput - The return type for the analyzeMoodAndProvideSupport function.
 */

import {ai, requireOutput} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * Input schema for mood analysis and support.
 */
const MoodAnalysisInputSchema = z.object({
  mood: z.string().max(1000).describe('The current mood of the user.'),
  symptoms: z.string().max(1000).describe('The symptoms experienced by the user.'),
  additionalContext: z
    .string()
    .max(1000)
    .optional()
    .describe('Any additional context or information from the user.'),
});

/**
 * Type definition for the input of mood analysis.
 */
export type MoodAnalysisInput = z.infer<typeof MoodAnalysisInputSchema>;

/**
 * Output schema for mood analysis and support.
 */
const MoodAnalysisOutputSchema = z.object({
  supportSuggestions: z
    .string()
    .describe('Personalized support suggestions based on the mood and symptoms.'),
});

/**
 * Type definition for the output of mood analysis.
 */
export type MoodAnalysisOutput = z.infer<typeof MoodAnalysisOutputSchema>;

/**
 * Analyzes the mood and symptoms provided in the input and returns personalized support suggestions.
 *
 * @param input - The input containing mood, symptoms, and optional additional context.
 * @returns A promise that resolves to an object containing personalized support suggestions.
 */
export async function analyzeMoodAndProvideSupport(
  input: MoodAnalysisInput
): Promise<MoodAnalysisOutput> {
  return moodAnalysisAndSupportFlow(input);
}

const moodAnalysisPrompt = ai.definePrompt({
  name: 'moodAnalysisPrompt',
  input: {schema: MoodAnalysisInputSchema},
  output: {schema: MoodAnalysisOutputSchema},
  prompt: `You are an AI chatbot designed to provide mental health support to new mothers.

  Based on the user's mood, symptoms, and any additional context, provide personalized support suggestions.

  If the user mentions suicide, self-harm, or harming their baby, respond with warmth, tell them they are not alone, and urge them to call Tele-MANAS at 14416 or emergency services at 112 right away. Do not diagnose or prescribe.

  Mood: {{{mood}}}
  Symptoms: {{{symptoms}}}
  Additional Context: {{{additionalContext}}}

  Support Suggestions:`, // The prompt should end with what we want to generate.
});

const moodAnalysisAndSupportFlow = ai.defineFlow(
  {
    name: 'moodAnalysisAndSupportFlow',
    inputSchema: MoodAnalysisInputSchema,
    outputSchema: MoodAnalysisOutputSchema,
  },
  async input => {
    const {output} = await moodAnalysisPrompt(input);
    return requireOutput(output, "Failed to generate support suggestions from AI.");
  }
);
