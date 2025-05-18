
import type { LucideProps } from 'lucide-react';
import { Home, Bot, BookOpen, Users, BarChart3, CalendarCheck2, Baby, ShoppingBag, Music2, Stethoscope, Activity, GraduationCap, TrendingUp } from 'lucide-react';

// Define a type for the icon names for better type safety
export type IconName = 'Home' | 'Bot' | 'BookOpen' | 'Users' | 'BarChart3' | 'CalendarCheck2' | 'Baby' | 'ShoppingBag' | 'Music2' | 'Stethoscope' | 'Activity' | 'GraduationCap' | 'TrendingUp';

// Define a map from icon names to actual components for use in client components
export const iconComponents: Record<IconName, React.FC<LucideProps>> = {
  Home,
  Bot,
  BookOpen,
  Users,
  BarChart3,
  CalendarCheck2,
  Baby,
  ShoppingBag,
  Music2,
  Stethoscope,
  Activity,
  GraduationCap,
  TrendingUp,
};

export interface NavLink {
  href: string;
  label: string;
  iconName: IconName;
  exact?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { href: '/', label: 'Dashboard', iconName: 'Home', exact: true },
  { href: '/mood-tracker', label: 'Mood Tracker', iconName: 'BarChart3' },
  { href: '/ai-companion', label: 'AI Companion', iconName: 'Bot' },
  { href: '/exercises-wellbeing', label: 'Exercises & Well-being', iconName: 'Activity' },
  { href: '/educate', label: 'Educate', iconName: 'GraduationCap' },
  { href: '/growth', label: 'Growth', iconName: 'TrendingUp' },
  { href: '/community', label: 'Community', iconName: 'Users' },
  { href: '/ambient-music', label: 'Ambient Music', iconName: 'Music2'},
  { href: '/professional-help', label: 'Professional Help', iconName: 'Stethoscope'},
  { href: '/shop', label: 'Shop Essentials', iconName: 'ShoppingBag'},
];
