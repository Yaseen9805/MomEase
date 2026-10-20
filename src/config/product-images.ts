export const productImages = {
  prod1: "/images/shop/diapers.jpg",
  prod2: "/images/shop/baby-wipes.jpg",
  prod3: "/images/shop/baby-bottles.jpg",
  prod4: "/images/shop/breast-pump.jpg",
  prod5: "/images/shop/maternity-bra.jpg",
  prod6: "/images/shop/postpartum-belt.jpg",
  prod7: "/images/shop/nipple-cream.jpg",
  prod8: "/images/shop/bath-soak.jpg",
  prod9: "/images/shop/baby-lotion.jpg",
  prod10: "/images/shop/baby-towel.jpg",
  prod11: "/images/shop/prenatal-vitamins.jpg",
  prod12: "/images/shop/omega-3.jpg",
} as const;

export type ProductId = keyof typeof productImages;
