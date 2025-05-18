
"use client"; // Required for useState and useEffect

import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarFooter, // Keep SidebarFooter import if it's used in ui/sidebar for structure
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { SidebarNav } from './sidebar-nav';
import { AppHeader } from './app-header';
import { mainNavLinks } from '@/config/nav-links';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SplashScreen } from '../splash-screen'; // Import SplashScreen

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // Display splash for 2.5 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <SidebarProvider defaultOpen={true} collapsible="icon">
      <Sidebar
        variant="sidebar"
        collapsible="icon"
        className={cn(
          "group",
          "bg-white/60 dark:bg-gray-900/70 backdrop-blur-md",
          "border-r border-pink-200 dark:border-gray-700",
          "shadow-xl",
          "rounded-r-3xl",
          "transition-all duration-300 ease-in-out",
          "text-sidebar-foreground dark:text-sidebar-foreground"
        )}
      >
        <SidebarHeader className="p-4 flex items-start justify-start">
          <SidebarTrigger className="hidden md:flex text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground mr-2" />
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity text-heading-color md:hidden">
            MomEase
          </Link>
        </SidebarHeader>
        <SidebarContent> {/* SidebarContent already has p-4 and flex flex-col, overflow-auto, flex-1 */}
          <SidebarNav links={mainNavLinks} />
          <div className="mt-auto pt-4 border-t border-sidebar-border -mx-4 px-4"> {/* Pushes logout to bottom of scrollable content */}
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 text-sidebar-foreground",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                "group-data-[state=collapsed]:w-auto group-data-[state=collapsed]:justify-center group-data-[state=collapsed]:p-2 group-data-[state=collapsed]:mx-auto" 
              )}
            >
              <LogOut className="h-5 w-5 shrink-0" />
              <span className="group-data-[state=collapsed]:hidden">Logout</span>
            </Button>
          </div>
        </SidebarContent>
        {/* SidebarFooter is defined in ui/sidebar.tsx and has mt-auto there */}
        {/* If you wanted a visual footer *always* at bottom, it would be here. */}
        {/* The logout button is now part of SidebarContent's scrollable area. */}
      </Sidebar>
      <SidebarInset className="bg-transparent">
        <AppHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
