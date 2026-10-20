
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { LucideProps } from 'lucide-react';
import { Phone } from 'lucide-react';

interface ProfessionalCardProps {
  name: string;
  specialty: string;
  description: string;
  Icon: React.FC<LucideProps>;
  phoneNumber?: string;
}

function getInitials(name: string): string {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function ProfessionalCard({ name, specialty, description, Icon, phoneNumber }: ProfessionalCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out transform flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
      <div
        aria-hidden="true"
        className="flex h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-3xl font-semibold text-primary"
      >
        {getInitials(name)}
      </div>
      <div className="flex-grow text-center sm:text-left">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-2xl flex items-center justify-center sm:justify-start gap-2">
            <Icon className="h-6 w-6 text-primary" />
            {name}
          </CardTitle>
          <CardDescription className="text-primary font-semibold mt-1">{specialty}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-sm text-foreground/80 mb-3 whitespace-pre-line">{description}</p>
          {phoneNumber && (
            <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground mb-3">
              <Phone className="h-4 w-4 text-primary" />
              <span>{phoneNumber}</span>
            </div>
          )}
          <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            Contact (Demo)
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
