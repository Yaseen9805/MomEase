import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mood & Symptom Tracker | MomEase",
  description: "Log your mood and symptoms and get personalized AI support suggestions.",
};

export default function MoodTrackerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
