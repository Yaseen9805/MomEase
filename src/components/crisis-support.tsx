import { HeartHandshake, PhoneCall } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function CrisisDisclaimer() {
  return (
    <p className="text-xs text-muted-foreground text-center">
      Not medical advice. In a crisis, call Tele-MANAS 14416 (free, 24/7) or 112.
    </p>
  );
}

export function CrisisBanner() {
  return (
    <Alert variant="destructive">
      <HeartHandshake className="h-4 w-4" />
      <AlertTitle>You are not alone</AlertTitle>
      <AlertDescription>
        If you are thinking about harming yourself or your baby, please reach out right now.
        <span className="flex items-center gap-1 font-semibold mt-1">
          <PhoneCall className="h-3.5 w-3.5" /> Call Tele-MANAS at 14416 (free, 24/7) or emergency services at 112.
        </span>
      </AlertDescription>
    </Alert>
  );
}
