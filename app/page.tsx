import { Hero } from "@/components/home/hero"
import { ProductCategories } from "@/components/home/product-categories"
import { FeaturedProducts } from "@/components/home/featured-products"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { BrandMarquee } from "@/components/home/brand-marquee"

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandMarquee />
      <ProductCategories />
      <FeaturedProducts />
      <WhyChooseUs />
    </main>
  )
}
