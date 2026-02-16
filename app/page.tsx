import { Hero } from "@/components/home/hero"
import { ProductCategories } from "@/components/home/product-categories"
import { FeaturedProducts } from "@/components/home/featured-products"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { BrandMarquee } from "@/components/home/brand-marquee"

import { db } from "@/lib/db"
import { products } from "@/lib/schema"

export default async function Home() {
  const allProducts = await db.select().from(products).all()

  return (
    <main>
      <Hero />
      <BrandMarquee />
      <ProductCategories />
      <FeaturedProducts products={allProducts} />
      <WhyChooseUs />
    </main>
  )
}
