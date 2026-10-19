import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart | MomEase",
  description: "Review the baby and mother essentials in your shopping cart.",
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
