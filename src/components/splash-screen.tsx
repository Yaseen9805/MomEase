
"use client";

import { useEffect, useState } from 'react';
import { HeartPulse } from 'lucide-react'; // Or your actual app logo component

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay for the fade-in effect to be noticeable
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: 'linear-gradient(to bottom, hsl(var(--background-start)), hsl(330 70% 92%), hsl(var(--background-end)))',
      }}
    >
      <div className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <HeartPulse className="h-24 w-24 text-primary animate-pulse" /> {/* Replace with your logo if available */}
      </div>
      <h1 className={`mt-6 text-4xl font-bold text-heading-color transition-all duration-700 ease-in-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        MomEase
      </h1>
      <p className={`mt-2 text-lg text-foreground/80 transition-all duration-700 ease-in-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        Your journey, supported.
      </p>
    </div>
  );
}
