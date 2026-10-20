
import { Metadata } from "next";
import { ProfessionalCard } from "@/components/professional-card";
import { Stethoscope, User, Baby, Leaf, Heart } from "lucide-react"; 

export const metadata: Metadata = {
  title: "Professional Help | MomEase",
  description: "Find OB/GYNs, pediatricians, therapists, and nutritionists.",
};

const professionals = [
  {
    name: "Dr. Venkatesh Reddy", // Changed from Ms B Haritha Shyam
    specialty: "Nutritionist",
    description: "Msc Nutrition, Registered Dietician. 20+ Years Experience.",
    Icon: Leaf,
    phoneNumber: "7709639841",
  },
  {
    name: "Dr. Sunil Patil",
    specialty: "Pediatrician",
    description: "Sr. Consultant MBBS, DNB Paediatrics, IAP Fellowship In Neonatology. 10+ Years Experience.",
    Icon: Baby, 
    phoneNumber: "9135067007",
  },
  {
    name: "Dr. Namita Singh",
    specialty: "Psychologist / Therapist",
    description: "Ph.D. in Psychology, M.Phil.-Specialization Neuropsychology. 24+ Years Experience.",
    Icon: Heart,
    phoneNumber: "7191817032",
  },
  {
    name: "Dr. Gouthami Thota",
    specialty: "OB/GYN",
    description: "Best Gynecologist in Kompally, Hyderabad - Ankura Hospital.",
    Icon: Stethoscope,
    phoneNumber: "090531 08108",
  },
];

export default function ProfessionalHelpPage() {
  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Find Professional Help</h1>
        <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">
          Connect with experienced healthcare professionals to support your journey through pregnancy and motherhood.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {professionals.map((prof, index) => (
          <ProfessionalCard
            key={index}
            name={prof.name}
            specialty={prof.specialty}
            description={prof.description}
            Icon={prof.Icon}
            phoneNumber={prof.phoneNumber}
          />
        ))}
      </div>
    </div>
  );
}
