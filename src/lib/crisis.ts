export const CRISIS_PHRASES = [
  "suicide",
  "kill myself",
  "end my life",
  "self harm",
  "self-harm",
  "hurt myself",
  "hurt my baby",
] as const;

export function containsCrisisLanguage(text: string): boolean {
  const lower = text.toLowerCase();
  return CRISIS_PHRASES.some((phrase) => lower.includes(phrase));
}
