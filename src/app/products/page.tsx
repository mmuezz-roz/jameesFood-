import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import RevealObserver from "@/components/RevealObserver"
import AddToCartButton from "@/components/products/AddToCartButton"
import Image from "next/image"
import Link from "next/link"

import kurmuruImg from "../../../public/kurmuru.jpg"
import popsiclesImg from "../../../public/mashbere-popsicles.png"
import pookeesImg from "../../../public/pookees.jpg"
import sipupAllImg from "../../../public/sipup-all.png"

export default function ProductsPage() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20 md:pt-32 pb-16 md:pb-24">
        {/* Header */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] text-center mb-12 md:mb-24 reveal group cursor-default">
          <span className="inline-block text-strawberry-red font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm transition-all duration-700 md:group-hover:tracking-[0.5em]">Direct Purchase</span>
          <h1 
            className="uppercase text-3xl md:text-7xl font-light mt-3 md:mt-4 text-on-surface tracking-wider transition-all duration-700 md:group-hover:tracking-widest"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            The Jamees <span className="font-black">Shop</span>
          </h1>
          <div className="mx-auto mt-3 h-[2px] w-0 group-hover:w-40 bg-strawberry-red transition-all duration-700 ease-out rounded-full"></div>
          <p className="text-on-surface-variant text-base md:text-xl mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed transition-all duration-700 md:group-hover:text-on-surface">
            Order our authentic Jamees Food originals directly to your door, or explore our premium Mashbere partner collections.
          </p>
        </div>

        {/* Jamees Food Originals */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] mb-16 md:mb-32">
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 reveal group cursor-default">
            <div>
              <h2 
                className="uppercase text-2xl md:text-3xl font-light text-on-surface whitespace-nowrap tracking-wider transition-all duration-500 md:group-hover:tracking-widest"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                Jamees Food <span className="font-black">Originals</span>
              </h2>
              <div className="mt-1.5 h-[2px] w-0 group-hover:w-full bg-mango-yellow transition-all duration-500 ease-out rounded-full"></div>
            </div>
            <div className="h-[1px] flex-1 bg-outline/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal">
            {/* Karumuru Card */}
            <div className="relative block w-full aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700 border border-black/5">
              <Link href="/products/karumuru" className="absolute inset-0 z-10">
                <Image 
                  src={kurmuruImg} 
                  alt="Karumuru Murukk" 
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              </Link>
              
              <span className="absolute top-5 left-5 bg-mango-yellow text-white text-[9px] md:text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg z-20 pointer-events-none">
                10 AED
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-20 pointer-events-none">
                <div className="transition-transform duration-500 md:translate-y-16 group-hover:translate-y-0">
                  <span className="text-white/60 font-bold tracking-[0.25em] text-[9px] uppercase mb-1 drop-shadow-sm">Authentic Snack</span>
                  <h3 className="uppercase text-2xl md:text-3xl font-light tracking-wider text-white drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    Karumuru <span className="font-black">Murukk</span>
                  </h3>
                  <p className="text-sm text-white/80 mt-2 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Authentic, crunchy savory snacks crafted using a timeless traditional recipe.
                  </p>
                  
                  <div className="mt-5 w-full pointer-events-auto md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <AddToCartButton 
                      product={{
                        id: "karumuru",
                        name: "Karumuru Murukk",
                        price: 10,
                        image: "/kurmuru.jpg"
                      }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Mashbere Experience */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px]">
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 reveal group cursor-default">
            <div>
              <h2 
                className="uppercase text-2xl md:text-3xl font-light text-on-surface whitespace-nowrap tracking-wider transition-all duration-700 md:group-hover:-translate-y-0.5"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                The Mashbere <span className="font-black">Experience</span>
              </h2>
              <div className="mt-1.5 h-[2px] w-0 group-hover:w-full bg-tertiary transition-all duration-700 ease-out rounded-full"></div>
            </div>
            <div className="h-[1px] flex-1 bg-outline/10"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal">
            
            {/* Popsicles */}
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="relative block w-full aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700 border border-black/5 cursor-pointer bg-white">
              <Image 
                src={popsiclesImg} 
                alt="Premium Popsicles" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-contain p-8 md:p-12 transition-transform duration-[1.5s] ease-out group-hover:scale-110 drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              
              <span className="absolute top-5 left-5 bg-white text-tertiary text-[9px] md:text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg z-20">
                PREMIUM RANGE
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-20 transition-transform duration-500 md:translate-y-12 group-hover:translate-y-0">
                <span className="text-white/60 font-bold tracking-[0.25em] text-[9px] uppercase mb-1 drop-shadow-sm">Mashbere Exclusive</span>
                <h3 className="uppercase text-2xl md:text-3xl font-light tracking-wider text-white drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  Signature <span className="font-black">Popsicles</span>
                </h3>
                <p className="text-sm text-white/80 mt-2 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Artisanal frozen popsicles made with real fruit in bold flavors.
                </p>
                <div className="mt-5 w-full bg-tertiary text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-[10px] tracking-[0.15em] uppercase md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <span className="material-symbols-outlined text-base">shopping_cart</span> Shop Now
                </div>
              </div>
            </a>

            {/* Pookees */}
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="relative block w-full aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700 border border-black/5 cursor-pointer">
              <Image 
                src={pookeesImg} 
                alt="Famous Pookees" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              
              <span className="absolute top-5 left-5 bg-strawberry-red text-white text-[9px] md:text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg z-20">
                BEST SELLER
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-20 transition-transform duration-500 md:translate-y-12 group-hover:translate-y-0">
                <span className="text-white/60 font-bold tracking-[0.25em] text-[9px] uppercase mb-1 drop-shadow-sm">Refreshing Blends</span>
                <h3 className="uppercase text-2xl md:text-3xl font-light tracking-wider text-white drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  Famous <span className="font-black">Pookees</span>
                </h3>
                <p className="text-sm text-white/80 mt-2 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  16 handcrafted seasonal flavors made with real fruit.
                </p>
                <div className="mt-5 w-full bg-strawberry-red text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-[10px] tracking-[0.15em] uppercase md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <span className="material-symbols-outlined text-base">shopping_cart</span> Shop Now
                </div>
              </div>
            </a>

            {/* SipUp Syrups */}
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="relative block w-full aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700 border border-black/5 cursor-pointer bg-white">
              <Image 
                src={sipupAllImg} 
                alt="Signature Sipups" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-contain p-8 transition-transform duration-[1.5s] ease-out group-hover:scale-110 drop-shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              
              <span className="absolute top-5 left-5 bg-mango-yellow text-white text-[9px] md:text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg z-20">
                NATURAL FRUIT
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-20 transition-transform duration-500 md:translate-y-12 group-hover:translate-y-0">
                <span className="text-white/60 font-bold tracking-[0.25em] text-[9px] uppercase mb-1 drop-shadow-sm">Mashbere Extract</span>
                <h3 className="uppercase text-2xl md:text-3xl font-light tracking-wider text-white drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  Signature <span className="font-black">Sipups</span>
                </h3>
                <p className="text-sm text-white/80 mt-2 line-clamp-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Natural fruit ice pops and concentrated syrups for summer.
                </p>
                <div className="mt-5 w-full bg-white text-on-surface font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-[10px] tracking-[0.15em] uppercase md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <span className="material-symbols-outlined text-base">shopping_cart</span> Shop Now
                </div>
              </div>
            </a>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
