export const CRISIS_PHRASES = [
  "suicide",
  "kill myself",
  "end my life",
  "self harm",
  "hurt myself",
  "hurt my baby",
] as const;

export function containsCrisisLanguage(text: string): boolean {
  const normalized = text.toLowerCase().replace(/-/g, " ");
  return CRISIS_PHRASES.some((phrase) => normalized.includes(phrase));
}
