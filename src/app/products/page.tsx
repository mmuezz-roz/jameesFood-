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
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] text-center mb-12 md:mb-24 reveal">
          <span className="text-strawberry-red font-bold uppercase tracking-widest text-xs md:text-sm">Direct Purchase</span>
          <h1 className="text-3xl md:text-7xl font-extrabold mt-3 md:mt-4 text-on-surface">The Jamees Shop</h1>
          <p className="text-on-surface-variant text-base md:text-xl mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed">
            Order our authentic Jamees Food originals directly to your door, or explore our premium Mashbere partner collections.
          </p>
        </div>

        {/* Jamees Food Originals */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] mb-16 md:mb-32">
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 reveal">
            <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface whitespace-nowrap">Jamees Food Originals</h2>
            <div className="h-[2px] flex-1 bg-outline/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {/* Karumuru Card */}
            <div className="group bg-white rounded-[3rem] p-6 shadow-lg border border-outline/5 hover:shadow-2xl transition-all duration-500">
              <Link href="/products/karumuru" className="block relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6 bg-surface">
                <Image 
                  src={kurmuruImg} 
                  alt="Karumuru Murukk" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <Link href="/products/karumuru">
                    <h3 className="text-2xl font-extrabold text-on-surface hover:text-strawberry-red transition-colors">Karumuru Murukk</h3>
                  </Link>
                  <span className="text-xl font-black text-strawberry-red">10 AED</span>
                </div>
                <p className="text-on-surface-variant mb-6 line-clamp-2">Authentic, crunchy savory snacks crafted using a timeless traditional recipe.</p>
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

        {/* The Mashbere Experience */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-[80px]">
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 reveal">
            <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface whitespace-nowrap">The Mashbere Experience</h2>
            <div className="h-[2px] flex-1 bg-outline/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            {/* Popsicles */}
            <div className="group bg-surface rounded-[3rem] p-6 border border-outline/10 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6 bg-white/50 flex items-center justify-center p-8">
                <Image 
                  src={popsiclesImg} 
                  alt="Premium Popsicles" 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                />
              </div>
              <div className="px-2 text-center">
                <span className="text-tertiary font-bold tracking-widest text-[10px] uppercase">Premium Range</span>
                <h3 className="text-2xl font-extrabold text-on-surface mt-1 mb-6">Popsicles</h3>
                <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="block w-full border-2 border-on-surface text-on-surface py-4 rounded-full font-bold text-lg hover:bg-on-surface hover:text-white transition-all">
                  Visit Mashbere
                </a>
              </div>
            </div>

            {/* Pookees */}
            <div className="group bg-surface rounded-[3rem] p-6 border border-outline/10 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6 bg-white/50">
                <Image 
                  src={pookeesImg} 
                  alt="Famous Pookees" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-2 text-center">
                <span className="text-tertiary font-bold tracking-widest text-[10px] uppercase">Refreshing Blends</span>
                <h3 className="text-2xl font-extrabold text-on-surface mt-1 mb-6">Famous Pookees</h3>
                <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="block w-full border-2 border-on-surface text-on-surface py-4 rounded-full font-bold text-lg hover:bg-on-surface hover:text-white transition-all">
                  Visit Mashbere
                </a>
              </div>
            </div>

            {/* SipUp Syrups */}
            <div className="group bg-surface rounded-[3rem] p-6 border border-outline/10 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6 bg-white/50 p-4">
                <Image 
                  src={sipupAllImg} 
                  alt="Signature Sipups" 
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="px-2 text-center">
                <span className="text-tertiary font-bold tracking-widest text-[10px] uppercase">Natural Fruit</span>
                <h3 className="text-2xl font-extrabold text-on-surface mt-1 mb-6">Signature Sipups</h3>
                <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="block w-full border-2 border-on-surface text-on-surface py-4 rounded-full font-bold text-lg hover:bg-on-surface hover:text-white transition-all">
                  Visit Mashbere
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
