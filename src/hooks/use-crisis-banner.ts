import { useState, useCallback } from "react";
import { containsCrisisLanguage } from "@/lib/crisis";

export function useCrisisBanner() {
  const [showBanner, setShowBanner] = useState(false);

  const checkText = useCallback((text: string) => {
    if (containsCrisisLanguage(text)) {
      setShowBanner(true);
    }
  }, []);

  return { showBanner, checkText };
}
