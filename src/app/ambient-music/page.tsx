import { Metadata } from "next";
import { AmbientMusicPlayer } from "@/components/ambient-music-player";

export const metadata: Metadata = {
  title: "Ambient Music | MomEase",
  description: "Relax and unwind with calming ambient sounds.",
};

export default function AmbientMusicPage() {
  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Ambient Music for Relaxation</h1>
        <p className="text-lg text-foreground/80 mt-2">
          Choose a sound to help you unwind, meditate, or find calm.
        </p>
      </header>
      <AmbientMusicPlayer />
    </div>
  );
}
