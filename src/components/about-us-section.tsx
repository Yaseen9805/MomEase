
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Mohammed Shahzad Anwar',
    role: 'Project Lead & Full-Stack Developer',
    bio: 'Passionate about creating impactful web solutions that help users.',
    imageUrl: '/images/shahzad.jpg',
    aiHint: 'male profile'
  },
  {
    name: 'Syed Yaseenuddin',
    role: 'Frontend Specialist & UI/UX Designer',
    bio: 'Focused on crafting intuitive and engaging user experiences.',
    imageUrl: '/images/yaseen.jpeg',
    aiHint: 'male designer'
  },
  {
    name: 'Mohammed Ali Khan',
    role: 'Backend Developer & AI Integration',
    bio: 'Expert in building robust backend systems and integrating AI features.',
    imageUrl: '/images/ali-khan.jpg',
    aiHint: 'male tech'
  },
  {
    name: 'Sohail Mohammed Ayan',
    role: 'QA & Content Strategist',
    bio: 'Ensuring quality and developing meaningful content for our users.',
    imageUrl: '/images/ayan.jpg',
    aiHint: 'male professional'
  },
];

export function AboutUsSection() {
  return (
    <section id="about-us-section" className="py-12 bg-card/30 rounded-lg shadow-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card 
              key={member.name} 
              className="text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out transform flex flex-col"
            >
              <CardHeader className="items-center pt-6">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mb-4 object-cover"
                  data-ai-hint={member.aiHint}
                />
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pb-6">
                <p className="text-sm text-foreground/80">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
