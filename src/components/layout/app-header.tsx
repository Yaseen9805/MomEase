
"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { UserCircle, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { Badge } from "@/components/ui/badge";
import { ThemeToggleButton } from "@/components/theme-toggle-button"; // Added import

export function AppHeader() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-transparent px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <Link href="/" className="text-xl font-semibold text-heading-color">
          MomEase
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggleButton /> {/* Added button here */}
        <Button asChild variant="ghost" size="icon" className="rounded-full relative">
          <Link href="/cart">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
              >
                {itemCount}
              </Badge>
            )}
            <span className="sr-only">Shopping Cart</span>
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <UserCircle className="h-6 w-6" />
          <span className="sr-only">User Profile</span>
        </Button>
      </div>
    </header>
  );
}
