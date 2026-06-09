import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import RevealObserver from "@/components/RevealObserver"
import Image from "next/image"
import Link from "next/link"
import heroBg from "../../public/hero-bg.webp"
import heroBg2 from "../../public/hero-bg-2.png"
import heroMobileNew from "../../public/hero-mobile-new.png"
import kioskImg from "../../public/kiosk.png"
import popsiclesImg from "../../public/popsicles.jpg"
import kurmuruImg from "../../public/kurmuru.jpg"
import pookeesImg from "../../public/pookees.jpg"
import pookeesCollectionImg from "../../public/pookees-collection.jpeg"
import savoryCollectionImg from "../../public/savory-snacks-collection.png"
import sipupAllImg from "../../public/sipup-all.png"
import coreValuesBg from "../../public/core-values-bg.jpg"
import mashberePopsiclesImg from "../../public/mashbere-popsicles.png"
import mashberePomoImg from "../../public/mashbere-pomo.png"
import mashbereLycheeImg from "../../public/mashbere-lychee.png"
import mashbereMangoImg from "../../public/mashbere-mango.png"

export default function HomePage() {

  return (
    <>
      <RevealObserver />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#0d0d0d]">
        <div className="relative w-full h-[80vh] min-h-[550px] sm:aspect-square md:h-auto md:min-h-[480px]">
          {/* Desktop Images */}
          <div className="hidden md:block w-full">
            <Image
              src={heroBg}
              alt="Karumuru Hero 1"
              priority
              placeholder="blur"
              className="w-full h-auto block"
              sizes="100vw"
            />
            <Image
              src={heroBg2}
              alt="Karumuru Hero 2"
              priority
              placeholder="blur"
              className="absolute inset-0 w-full h-full object-cover object-center animate-crossfade"
              sizes="100vw"
            />
          </div>

          {/* Mobile Images */}
          <div className="block md:hidden w-full h-full relative">
            <Image
              src={heroMobileNew}
              alt="Karumuru Hero Mobile 1"
              priority
              className="absolute inset-0 w-full h-full object-cover object-center"
              sizes="100vw"
            />
            <Image
              src={heroBg2}
              alt="Karumuru Hero Mobile 2"
              priority
              placeholder="blur"
              className="absolute inset-0 w-full h-full object-cover object-center animate-crossfade"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 flex items-end md:items-center px-5 md:px-[80px] pb-24 md:pb-0 z-20">
            <div className="max-w-xl text-left reveal">
              <h1 className="text-[clamp(1.8rem,6vw,4.5rem)] text-white mb-4 md:mb-8 font-extrabold tracking-tight leading-[1.1]">
                Taste the Joy of <br/><span className="text-strawberry-red">Every Generation</span>
              </h1>
              <p className="text-sm md:text-xl text-white/75 mb-6 md:mb-12 max-w-md leading-relaxed font-medium hidden sm:block">
                Experience the purity of nature with our handcrafted frozen treats and authentic snacks.
              </p>
              <div className="flex gap-3">
                <Link href="/products" className="bg-strawberry-red text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-strawberry-red/20 inline-block">
                  Shop Now
                </Link>
                <Link href="/about" className="text-white border border-white/30 px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-white/10 transition-all backdrop-blur-sm inline-block">
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Category Cards */}
      <section className="hidden md:block relative py-10 md:py-16 px-4 md:px-[80px] bg-background overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 relative z-10 reveal">
          {/* Popsicles */}
          <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="block group flex flex-col h-[480px] rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative flex-1 p-4 pb-0 overflow-hidden">
              <div className="w-full h-full relative rounded-t-2xl overflow-hidden bg-black/5">
                <Image 
                  src={popsiclesImg} 
                  alt="Popsicles" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            {/* Text Footer */}
            <div className="p-6 flex items-center justify-between bg-white z-20">
              <div>
                <span className="text-tertiary font-bold tracking-widest text-[10px] uppercase opacity-80">Premium Range</span>
                <h3 className="text-2xl font-extrabold text-on-surface mt-1">Popsicles</h3>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full bg-surface flex items-center justify-center text-on-surface group-hover:bg-strawberry-red group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </a>

          {/* Karumuru Snacks */}
          <Link href="/products/karumuru" className="group flex flex-col h-[480px] rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:translate-y-12">
            {/* Image Container */}
            <div className="relative flex-1 p-4 pb-0 overflow-hidden">
              <div className="w-full h-full relative rounded-t-2xl overflow-hidden bg-black/5">
                <Image 
                  src={kurmuruImg} 
                  alt="Karumuru" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            {/* Text Footer */}
            <div className="p-6 flex items-center justify-between bg-white z-20">
              <div>
                <span className="text-mango-yellow font-bold tracking-widest text-[10px] uppercase opacity-90">Authentic Taste</span>
                <h3 className="text-2xl font-extrabold text-on-surface mt-1">Karumuru</h3>
              </div>
              <button className="w-12 h-12 shrink-0 rounded-full bg-surface flex items-center justify-center text-on-surface group-hover:bg-strawberry-red group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </Link>

          {/* Famous Pookees */}
          <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="block group flex flex-col h-[480px] rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative flex-1 p-4 pb-0 overflow-hidden">
              <div className="w-full h-full relative rounded-t-2xl overflow-hidden bg-black/5">
                <Image 
                  src={pookeesImg} 
                  alt="Famous Pookees" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            {/* Text Footer */}
            <div className="p-6 flex items-center justify-between bg-white z-20">
              <div>
                <span className="text-strawberry-red font-bold tracking-widest text-[10px] uppercase opacity-90">Refreshing Blends</span>
                <h3 className="text-2xl font-extrabold text-on-surface mt-1">Famous Pookees</h3>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full bg-surface flex items-center justify-center text-on-surface group-hover:bg-strawberry-red group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Browse Categories (Staggered Grid) */}
      <section className="py-12 md:py-[120px] px-4 md:px-[80px] bg-surface-container-low" id="browse-categories">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
            <div className="max-w-2xl">
              <span className="text-strawberry-red font-bold uppercase tracking-widest text-sm">Fresh Selection</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-on-surface leading-tight">Explore Our Collections</h2>
            </div>
            <a className="text-strawberry-red font-bold text-lg flex items-center group mb-2" href="#">
              View All <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2">arrow_forward</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 reveal">
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-white shadow-lg min-h-[500px] flex items-stretch cursor-pointer block">
              <Image 
                src={pookeesCollectionImg}
                alt="Pookees"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <h3 className="text-4xl font-extrabold text-white mb-4 drop-shadow-md">Pookees</h3>
                <p className="text-white/80 text-lg mb-8 max-w-md">16 Handcrafted seasonal flavors made with real fruit and traditional techniques.</p>
                <div className="bg-white text-strawberry-red text-center w-fit px-8 py-3.5 rounded-full font-bold text-base hover:scale-105 transition-transform">Discover Flavors</div>
              </div>
            </a>
            <div className="md:col-span-4 flex flex-col gap-8">
              <Link href="/products/karumuru" className="flex-1 group relative overflow-hidden rounded-3xl bg-white shadow-lg min-h-[250px] cursor-pointer" id="snacks">
                <Image 
                  src={savoryCollectionImg}
                  alt="Karumuru"
                  fill
                  className="object-contain transition-transform duration-1000 scale-110 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-extrabold text-white drop-shadow-md">Karumuru</h3>
                </div>
              </Link>
              <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="flex-1 group relative overflow-hidden rounded-3xl bg-white shadow-lg min-h-[250px] cursor-pointer block" id="syrups">
                <Image 
                  src={sipupAllImg}
                  alt="Signature Sipups"
                  fill
                  className="object-contain transition-transform duration-1000 scale-110 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-extrabold text-white drop-shadow-md">Signature Sipups</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Quote Section */}
      <section className="relative py-14 md:py-[120px] overflow-hidden bg-on-surface text-white">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image 
            src={coreValuesBg}
            alt="Core Values Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center reveal">
          <span className="text-mango-yellow font-bold tracking-[0.3em] text-xs md:text-sm uppercase">OUR CORE VALUES</span>
          <h2 className="text-3xl md:text-6xl font-extrabold mt-6 mb-8 md:mb-12 leading-tight">Naturally Better <br/>For Everyone</h2>
          <p className="text-base md:text-2xl leading-relaxed mb-10 md:mb-16 text-white/80 italic font-light max-w-4xl mx-auto">
            &quot;At Jamees, we&apos;re on a delicious mission to revolutionize snacking. We believe everyone deserves treats that are as honest as they are flavorful.&quot;
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
              <span className="font-bold text-lg">100% All-Natural</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <span className="font-bold text-lg">UAE-Wide Delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">favorite</span>
              </div>
              <span className="font-bold text-lg">Kid Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mashbere B2B Section */}
      <section className="py-12 md:py-[120px] px-4 md:px-[80px] bg-cream-bg" id="mashbere">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-10 md:mb-20 reveal">
            <span className="text-tertiary font-bold uppercase tracking-widest text-xs md:text-sm">Strategic Partnership</span>
            <h2 className="text-2xl md:text-6xl font-extrabold mt-3 md:mt-6 text-on-surface">Mashbere&apos;s Premium Collections</h2>
            <p className="text-on-surface-variant text-sm md:text-lg mt-3 md:mt-6 max-w-3xl mx-auto leading-relaxed">Exclusively distributed by Jamees Food, Mashbere brings world-class frozen treats to the UAE market.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 reveal">
            {/* Ice Creams & Popsicles */}
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-[4rem] glass-card p-12 min-h-[550px] flex flex-col justify-between hover:shadow-2xl transition-all cursor-pointer">
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-on-surface mb-4">Ice Creams &amp; Popsicles</h3>
                <p className="text-on-surface-variant text-lg max-w-xs leading-relaxed opacity-80">Artisanal frozen delights crafted with premium ingredients and innovative textures.</p>
              </div>
              <div className="relative flex-1 flex items-center justify-center py-10 px-6">
                <div className="flex items-center justify-center w-full relative animate-float">
                  <Image 
                    src={mashberePopsiclesImg} 
                    alt="Ice Creams & Popsicles" 
                    className="w-full h-auto drop-shadow-2xl rounded-[2rem]"
                  />
                </div>
              </div>
              <div className="bg-strawberry-red text-center text-white w-full py-5 rounded-3xl font-bold text-lg shadow-lg shadow-strawberry-red/20 group-hover:brightness-110 transition-all">Explore Flavors</div>
            </a>
            
            {/* SipUp Syrups */}
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-[4rem] bg-white shadow-xl p-12 min-h-[550px] flex flex-col justify-between hover:shadow-2xl transition-all cursor-pointer">
              <div>
                <h3 className="text-3xl font-extrabold text-on-surface mb-4">SipUp Syrups</h3>
                <p className="text-on-surface-variant text-lg max-w-xs leading-relaxed opacity-80">Natural fruit ice pops and concentrated syrups designed for ultimate summer refreshment.</p>
              </div>
              <div className="relative flex-1 flex items-center justify-center py-10">
                <div className="relative flex items-end justify-center w-full h-[384px]">
                  {/* Left */}
                  <div className="absolute left-1/2 -translate-x-[140%] bottom-0 h-80 w-32 group-hover:-translate-x-[160%] group-hover:-rotate-6 transition-all duration-500 drop-shadow-xl z-10">
                    <Image src={mashberePomoImg} alt="Pomegranate SipUp" fill className="object-contain object-bottom" />
                  </div>
                  {/* Center */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-96 w-40 group-hover:-translate-y-4 transition-all duration-500 drop-shadow-2xl z-20">
                    <Image src={mashbereLycheeImg} alt="Lychee SipUp" fill className="object-contain object-bottom" />
                  </div>
                  {/* Right */}
                  <div className="absolute left-1/2 translate-x-[20%] bottom-0 h-80 w-32 group-hover:translate-x-[40%] group-hover:rotate-6 transition-all duration-500 drop-shadow-xl z-10">
                    <Image src={mashbereMangoImg} alt="Mango SipUp" fill className="object-contain object-bottom" />
                  </div>
                </div>
              </div>
              <div className="border-2 border-on-surface text-center text-on-surface w-full py-5 rounded-3xl font-extrabold text-lg group-hover:bg-on-surface group-hover:text-white transition-all">View SipUp Collection</div>
            </a>
          </div>
          
          {/* Commercial Infrastructure */}
          <div className="mt-16 group relative overflow-hidden rounded-[4rem] glass-card flex flex-col md:flex-row items-center gap-12 p-12 md:p-20 hover:shadow-2xl transition-all border border-white/60 reveal">
            <div className="md:w-1/2 space-y-8">
              <div>
                <span className="text-tertiary font-bold tracking-widest text-xs uppercase opacity-70">B2B INFRASTRUCTURE</span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-on-surface mt-4 leading-tight">Mashbere Commercial <br/>Kiosk Systems</h3>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed">State-of-the-art kiosk solutions and high-performance cooling equipment designed for luxury retail, hospitality, and high-traffic venues.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary">check_circle</span>
                  <span className="font-bold text-on-surface">Smart Inventory</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary">eco</span>
                  <span className="font-bold text-on-surface">Eco-Cooling</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.mashbere.com/equipment" target="_blank" rel="noopener noreferrer" className="bg-tertiary text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-tertiary/20 hover:scale-105 transition-all inline-block">Partner With Us</a>
                <a className="flex items-center gap-2 px-10 py-4 rounded-full font-bold text-on-surface border-2 border-outline/30 hover:bg-white transition-all group/btn inline-block" href="https://www.mashbere.com" target="_blank" rel="noopener noreferrer">
                  Visit Mashbere 
                  <span className="material-symbols-outlined text-base transition-transform group-hover/btn:translate-x-1">open_in_new</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-tertiary/10 blur-[80px] rounded-full scale-110"></div>
              <div className="relative z-10 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg transition-transform duration-1000 group-hover:scale-105">
                <Image 
                  src={kioskImg} 
                  alt="Mashbere Commercial Kiosk System" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-12 md:py-[120px] px-4 md:px-[80px] bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16 reveal gap-4">
            <h2 className="text-2xl md:text-5xl font-extrabold text-on-surface tracking-tight">Trending This Week</h2>
            <div className="flex space-x-4">
              <button className="w-12 h-12 rounded-full border-2 border-strawberry-red/20 flex items-center justify-center hover:bg-strawberry-red hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-strawberry-red text-white flex items-center justify-center hover:brightness-110 shadow-lg shadow-strawberry-red/20 transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="flex overflow-x-auto space-x-4 pb-6 scrollbar-hide reveal -mx-4 px-4">
            <div className="min-w-[260px] sm:min-w-[300px] bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all group border border-gray-100">
              <div className="relative mb-8 bg-surface-container-low rounded-2xl aspect-[4/5] flex items-center justify-center overflow-hidden">
                {/* Blanked Image */}
                <div className="w-[80%] h-[80%] bg-black/5 rounded-xl group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-strawberry-red text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg">BEST SELLER</span>
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-extrabold text-on-surface">Mango SipUp</h4>
                  <p className="text-sm text-on-surface-variant font-medium mt-1">Natural Mango Syrup</p>
                </div>
                <p className="text-strawberry-red font-black text-xl">10.00 د.إ</p>
              </div>
              <button className="w-full bg-on-surface text-white font-bold py-4 rounded-2xl hover:bg-strawberry-red transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-xl">add_shopping_cart</span> Add to Cart
              </button>
            </div>
            
            <div className="min-w-[260px] sm:min-w-[300px] bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all group border border-gray-100">
              <div className="relative mb-8 bg-surface-container-low rounded-2xl aspect-[4/5] flex items-center justify-center overflow-hidden">
                {/* Blanked Image */}
                <div className="w-[80%] h-[80%] bg-black/5 rounded-xl group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-mango-yellow text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg">NEW ARRIVAL</span>
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-extrabold text-on-surface">Grapes SipUp</h4>
                  <p className="text-sm text-on-surface-variant font-medium mt-1">Pure Grape Extract</p>
                </div>
                <p className="text-strawberry-red font-black text-xl">10.00 د.إ</p>
              </div>
              <button className="w-full bg-on-surface text-white font-bold py-4 rounded-2xl hover:bg-strawberry-red transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-xl">add_shopping_cart</span> Add to Cart
              </button>
            </div>
            
            <div className="min-w-[260px] sm:min-w-[300px] bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all group border border-gray-100">
              <div className="relative mb-8 bg-surface-container-low rounded-2xl aspect-[4/5] flex items-center justify-center overflow-hidden">
                {/* Blanked Image */}
                <div className="w-[80%] h-[80%] bg-black/5 rounded-xl group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-extrabold text-on-surface">Lychee SipUp</h4>
                  <p className="text-sm text-on-surface-variant font-medium mt-1">Tropical Lychee Flavor</p>
                </div>
                <p className="text-strawberry-red font-black text-xl">10.00 د.إ</p>
              </div>
              <button className="w-full bg-on-surface text-white font-bold py-4 rounded-2xl hover:bg-strawberry-red transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-xl">add_shopping_cart</span> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-[120px] px-4 md:px-[80px] bg-surface-container-low relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-10 md:mb-20 reveal">
            <span className="text-strawberry-red font-bold uppercase tracking-widest text-xs md:text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-6xl font-extrabold mt-4 md:mt-6 tracking-tight">Love From Our Families</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 reveal">
            <div className="bg-white p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-lg border border-gray-50 hover:shadow-xl transition-all">
              <div className="text-mango-yellow mb-6 flex">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-lg text-on-surface-variant mb-10 leading-relaxed italic">&quot;Tastes just like the ice candy my lola used to make! That authentic fruit flavor takes me back to childhood. Perfect texture every single time.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-strawberry-red/10 flex items-center justify-center font-black text-strawberry-red">K</div>
                <span className="font-extrabold text-lg">Kevin M.</span>
              </div>
            </div>
            
            <div className="bg-strawberry-red p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-strawberry-red/20 md:-translate-y-8 text-white">
              <div className="text-white/40 mb-6 flex">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-lg text-white/95 mb-10 leading-relaxed italic font-medium">&quot;My new afternoon pick-me-up! These ice candies melt perfectly. Love that they&apos;re portable, natural, and actually satisfy my sweet tooth without the guilt.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-black text-strawberry-red shadow-lg">S</div>
                <span className="font-extrabold text-lg">Salama A.</span>
              </div>
            </div>
            
            <div className="bg-white p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-lg border border-gray-50 hover:shadow-xl transition-all">
              <div className="text-mango-yellow mb-6 flex">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-lg text-on-surface-variant mb-10 leading-relaxed italic">&quot;Finally, a frozen treat I feel good about giving my kids! No artificial junk, just real fruit flavors they adore. Mango is our absolute favorite!&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-strawberry-red/10 flex items-center justify-center font-black text-strawberry-red">H</div>
                <span className="font-extrabold text-lg">Hessa R.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
