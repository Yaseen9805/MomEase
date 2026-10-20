
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart as CartIcon } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/types/shop";
import { useToast } from "@/hooks/use-toast"; // Added for Add to Cart Toast
import { productImages } from "@/config/product-images";

// Sample Product Data
const products: Product[] = [
  { id: "prod1", name: "Organic Cotton Diapers (Pack of 50)", price: 29.99, imageUrl: productImages.prod1, dataAiHint: "organic diapers", category: "Diapers & Wipes" },
  { id: "prod2", name: "Gentle Baby Wipes (3-Pack)", price: 12.50, imageUrl: productImages.prod2, dataAiHint: "baby wipes", category: "Diapers & Wipes" },
  { id: "prod3", name: "Ergonomic Baby Bottle Set", price: 24.99, imageUrl: productImages.prod3, dataAiHint: "baby bottles", category: "Feeding Supplies" },
  { id: "prod4", name: "Silicone Breast Pump", price: 19.99, imageUrl: productImages.prod4, dataAiHint: "breast pump", category: "Feeding Supplies" },
  { id: "prod5", name: "Comfort Maternity Bra", price: 35.00, imageUrl: productImages.prod5, dataAiHint: "maternity bra", category: "Maternity Wear" },
  { id: "prod6", name: "Postpartum Support Belt", price: 28.75, imageUrl: productImages.prod6, dataAiHint: "postpartum belt", category: "Postpartum Care" },
  { id: "prod7", name: "Organic Nipple Cream", price: 15.99, imageUrl: productImages.prod7, dataAiHint: "nipple cream", category: "Postpartum Care" },
  { id: "prod8", name: "Lavender Bath Soak for Mom", price: 18.00, imageUrl: productImages.prod8, dataAiHint: "bath soak", category: "Postpartum Care" },
  { id: "prod9", name: "Baby Soothing Lotion", price: 10.50, imageUrl: productImages.prod9, dataAiHint: "baby lotion", category: "Baby Care" },
  { id: "prod10", name: "Hooded Baby Towel", price: 22.00, imageUrl: productImages.prod10, dataAiHint: "baby towel", category: "Baby Care" },
  { id: "prod11", name: "Prenatal Vitamins (90 Count)", price: 32.99, imageUrl: productImages.prod11, dataAiHint: "prenatal vitamins", category: "Supplements" },
  { id: "prod12", name: "Postnatal Omega-3 Supplement", price: 27.50, imageUrl: productImages.prod12, dataAiHint: "omega 3", category: "Supplements" },
];


export default function ShopPage() {
  const { addToCart } = useCart();
  const { toast } = useToast(); // Initialize useToast

  // Function to handle adding item to cart and showing toast
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    // toast({ // Toast is now handled by CartContext
    //   title: "Added to Cart!",
    //   description: `${product.name} has been added to your cart.`,
    // });
  };


  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Shop Essentials</h1>
        <p className="text-lg text-foreground/80 mt-2">
          Find all your mother and baby essentials in one place.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out transform flex flex-col overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="text-lg h-12 line-clamp-2">{product.name}</CardTitle>
              <CardDescription className="text-sm text-primary font-semibold">${product.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col items-center justify-center bg-muted/30 p-2">
              <div className="w-full aspect-[16/10] relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="rounded-md object-contain" 
                  data-ai-hint={product.dataAiHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => handleAddToCart(product)} // Updated onClick handler
              >
                <CartIcon className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

