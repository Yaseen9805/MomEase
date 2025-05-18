
import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { MainLayout } from '@/components/layout/main-layout';
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from '@/context/cart-context';
import { ThemeProvider } from '@/context/theme-context';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'], 
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MomEase',
  description: 'Support for pregnant and postpartum women by MomEase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased transition-colors duration-300 ease-in-out`}>
        <ThemeProvider
          defaultTheme="light"
          storageKey="momease-ui-theme"
        >
          <CartProvider>
            <MainLayout>
              {children}
            </MainLayout>
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
