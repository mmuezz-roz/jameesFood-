import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import RevealObserver from "@/components/RevealObserver"
import AddToCartButton from "@/components/products/AddToCartButton"
import Image from "next/image"
import Link from "next/link"
import kurmuruImg from "../../../../public/kurmuru.jpg"
import kurmuruHoverImg from "../../../../public/savory-snacks-collection.png"

export default function KarumuruPage() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px]">
          {/* Breadcrumbs */}
          <nav className="flex gap-2 text-sm font-medium text-on-surface-variant mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-strawberry-red transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-strawberry-red transition-colors">Products</Link>
            <span>/</span>
            <span className="text-on-surface font-bold">Karumuru Murukk</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start reveal">
            {/* Product Image */}
            <div className="group relative w-full aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden bg-white shadow-2xl glass-card">
              <Image 
                src={kurmuruImg} 
                alt="Karumuru Murukk" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:opacity-0"
                priority
              />
              <Image 
                src={kurmuruHoverImg} 
                alt="Karumuru Murukk Detail" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-700 opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100"
                priority
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col pt-2 md:pt-12">
              <span className="text-mango-yellow font-extrabold tracking-widest text-sm uppercase mb-4 drop-shadow-sm">Authentic Taste</span>
              <h1 className="text-3xl md:text-6xl font-extrabold text-on-surface mb-4 md:mb-6 leading-tight">
                Karumuru Murukk
              </h1>
              
              <div className="text-2xl md:text-3xl font-black text-strawberry-red mb-6 md:mb-8">
                10 AED <span className="text-lg text-on-surface-variant font-medium">/ pack</span>
              </div>

              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed mb-12">
                <p>
                  Experience the ultimate crunch with our signature Karumuru Murukk. Crafted using a timeless traditional recipe, these golden, spiral-shaped savory snacks deliver an irresistible combination of roasted spices and perfect texture.
                </p>
                <p>
                  Made with premium rice flour, roasted urad dal, and infused with subtle hints of cumin and sesame seeds, every bite takes you on a flavorful journey to authentic snacking heritage. Perfect alongside a hot cup of tea or as an anytime crunchy delight.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 font-bold text-on-surface">
                  <li>100% Authentic Recipe</li>
                  <li>No Artificial Preservatives</li>
                  <li>Crispy, Crunchy & Satisfying</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <AddToCartButton 
                  product={{
                    id: "karumuru",
                    name: "Karumuru Murukk",
                    price: 10,
                    image: "/kurmuru.jpg"
                  }} 
                />
                <button className="bg-white text-on-surface border-2 border-outline/20 py-5 px-8 rounded-full font-bold text-lg hover:border-on-surface transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">favorite_border</span>
                  Wishlist
                </button>
              </div>

              {/* Details Accordion style info */}
              <div className="mt-16 pt-8 border-t border-outline/20">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-sm text-on-surface-variant uppercase tracking-widest font-bold mb-2">Weight</span>
                    <span className="text-lg font-extrabold text-on-surface">250g Pack</span>
                  </div>
                  <div>
                    <span className="block text-sm text-on-surface-variant uppercase tracking-widest font-bold mb-2">Dietary</span>
                    <span className="text-lg font-extrabold text-on-surface">Vegetarian</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
