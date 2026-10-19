import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Essentials | MomEase",
  description: "Browse and purchase baby and mother essentials.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
