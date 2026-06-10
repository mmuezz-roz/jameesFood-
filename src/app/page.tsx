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
import pookee09 from "./public/09.jpg"
import popsicle14 from "./public/14.jpg"

export default function HomePage() {

  return (
    <>
      <RevealObserver />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#0d0d0d]">
        <div className="relative w-full h-[85vh] min-h-[550px] sm:aspect-square md:aspect-auto md:h-auto">
          {/* Desktop Images */}
          <div className="hidden md:block relative w-full">
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 md:bg-gradient-to-r md:from-black/70 md:to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-start px-6 sm:px-8 md:px-[120px] pb-24 md:pb-0 pt-24 z-20">
            <div className="max-w-2xl text-left reveal cursor-default group w-full">
              <span className="text-white/80 tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-xs font-semibold mb-4 md:mb-6 block drop-shadow-sm transition-all duration-700 md:group-hover:tracking-[0.6em] md:group-hover:text-white">Handcrafted Excellence</span>
              <h1 
                className="uppercase text-4xl sm:text-5xl md:text-[4.5rem] text-white mb-4 md:mb-8 font-light tracking-wide md:tracking-wider leading-[1.1] md:leading-[1.15] drop-shadow-sm transition-transform duration-700 ease-out md:group-hover:translate-x-4"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                Taste the <br className="sm:hidden"/> Joy of <br className="hidden md:block"/>
                <span className="font-bold relative inline-block group/word cursor-pointer mt-1 md:mt-0">
                  Every Generation
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-0 h-[2px] md:h-[3px] bg-white transition-all duration-500 group-hover/word:w-full"></span>
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-lg text-white/90 mb-8 md:mb-12 max-w-xs md:max-w-lg leading-relaxed md:leading-[1.8] font-light transition-all duration-700 md:group-hover:translate-x-4 md:group-hover:text-white">
                Experience the purity of nature with our handcrafted frozen treats and authentic snacks.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-5 transition-transform duration-700 md:group-hover:translate-x-4">
                <Link href="/products" className="group/btn relative overflow-hidden bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase shadow-lg flex items-center justify-center gap-2 md:gap-3 flex-1 md:flex-none">
                  <span className="relative z-10 transition-colors duration-500">Shop Now</span>
                  <span className="material-symbols-outlined text-[14px] relative z-10 transition-transform duration-500 group-hover/btn:translate-x-1.5">arrow_forward</span>
                  <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 rounded-full"></div>
                </Link>
                <Link href="/about" className="group/btn relative overflow-hidden text-white border border-white/40 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase backdrop-blur-sm flex items-center justify-center gap-2 md:gap-3 hover:border-white/80 transition-colors duration-500 flex-1 md:flex-none">
                  <span className="relative z-10">Our Story</span>
                  <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 rounded-full"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-30 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="w-[22px] h-[34px] border-[1.5px] border-white/80 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
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
                <span className="text-tertiary font-bold tracking-[0.25em] text-[9px] uppercase">Premium Range</span>
                <h3 className="uppercase text-lg font-light tracking-wider text-on-surface mt-0.5" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}><span className="font-black">Popsicles</span></h3>
              </div>
              <div className="w-11 h-11 shrink-0 rounded-full bg-surface flex items-center justify-center text-on-surface group-hover:bg-strawberry-red group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
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
                <span className="text-mango-yellow font-bold tracking-[0.25em] text-[9px] uppercase">Authentic Taste</span>
                <h3 className="uppercase text-lg font-light tracking-wider text-on-surface mt-0.5" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Karu<span className="font-black">muru</span></h3>
              </div>
              <button className="w-11 h-11 shrink-0 rounded-full bg-surface flex items-center justify-center text-on-surface group-hover:bg-strawberry-red group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
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
                <span className="text-strawberry-red font-bold tracking-[0.25em] text-[9px] uppercase">Refreshing Blends</span>
                <h3 className="uppercase text-lg font-light tracking-wider text-on-surface mt-0.5" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Famous <span className="font-black">Pookees</span></h3>
              </div>
              <div className="w-11 h-11 shrink-0 rounded-full bg-surface flex items-center justify-center text-on-surface group-hover:bg-strawberry-red group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Browse Categories (Staggered Grid) */}
      <section className="py-12 md:py-[120px] px-4 md:px-[80px] bg-surface-container-low" id="browse-categories">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
            <div className="max-w-2xl group cursor-default">
              {/* Left-border accent — slides in from left on hover, editorial style */}
              <div className="flex items-center gap-4 overflow-hidden">
                <span className="inline-block w-0 md:group-hover:w-10 h-[2px] bg-strawberry-red transition-all duration-500 ease-out"></span>
                <span className="text-strawberry-red font-bold uppercase tracking-[0.2em] md:group-hover:tracking-[0.4em] text-sm transition-all duration-500">Fresh Selection</span>
              </div>
              <h2 className="uppercase text-4xl md:text-5xl font-light mt-4 text-on-surface leading-tight tracking-wider transition-all duration-700 md:group-hover:translate-x-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Explore Our Collections</h2>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                <span className="text-white/60 font-bold tracking-[0.25em] text-[9px] uppercase mb-1">Mashbere Collection</span>
                <h3 className="uppercase text-3xl font-light tracking-wider text-white mb-3 drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Famous <span className="font-black">Pookees</span></h3>
                <p className="text-white/70 text-sm mb-6 max-w-md leading-relaxed">16 handcrafted seasonal flavors made with real fruit and traditional techniques.</p>
                <div className="bg-white text-on-surface text-center w-fit px-7 py-3 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-strawberry-red hover:text-white transition-all">Discover Flavors</div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-7">
                  <span className="text-white/50 font-bold tracking-[0.25em] text-[9px] uppercase mb-0.5">Authentic Snack</span>
                  <h3 className="uppercase text-xl font-light tracking-wider text-white drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Karu<span className="font-black">muru</span></h3>
                </div>
              </Link>
              <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="flex-1 group relative overflow-hidden rounded-3xl bg-white shadow-lg min-h-[250px] cursor-pointer block" id="syrups">
                <Image 
                  src={sipupAllImg}
                  alt="Signature Sipups"
                  fill
                  className="object-contain transition-transform duration-1000 scale-110 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-7">
                  <span className="text-white/50 font-bold tracking-[0.25em] text-[9px] uppercase mb-0.5">Natural Fruit</span>
                  <h3 className="uppercase text-xl font-light tracking-wider text-white drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Signature <span className="font-black">Sipups</span></h3>
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
        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center reveal group cursor-default">
          <span className="inline-block text-mango-yellow font-bold tracking-[0.3em] md:group-hover:tracking-[0.5em] text-xs md:text-sm uppercase transition-all duration-700">OUR CORE VALUES</span>
          {/* Word-by-word glow — warm, nature-inspired for values section */}
          <h2 className="uppercase text-3xl md:text-5xl font-light mt-6 mb-8 md:mb-12 leading-tight tracking-wider" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            <span className="inline-block transition-all duration-500 md:group-hover:text-mango-yellow md:group-hover:drop-shadow-[0_0_20px_rgba(250,189,0,0.6)]">Naturally</span>{" "}
            <span className="inline-block transition-all duration-700 md:group-hover:text-white md:group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">Better</span>
            <br/>
            <span className="inline-block transition-all duration-500 md:group-hover:text-white/60">For</span>{" "}
            <span className="inline-block transition-all duration-700 md:group-hover:text-mango-yellow md:group-hover:drop-shadow-[0_0_20px_rgba(250,189,0,0.6)]">Everyone</span>
          </h2>
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
          <div className="text-center mb-10 md:mb-20 reveal group cursor-default">
            <span className="inline-block text-tertiary font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs transition-all duration-700 md:group-hover:tracking-[0.5em] md:group-hover:text-strawberry-red">
              Strategic Partnership
            </span>
            <div className="overflow-hidden pb-4">
              <h2 
                className="relative inline-block uppercase text-2xl md:text-5xl font-light mt-3 md:mt-6 text-on-surface tracking-wider transition-transform duration-700 ease-out md:group-hover:-translate-y-2" 
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                Mashbere&apos;s Premium Collections
                <span className="absolute -bottom-1 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] md:h-[3px] bg-strawberry-red transition-all duration-500 group-hover:w-full"></span>
              </h2>
            </div>
            <p className="text-on-surface-variant text-sm md:text-lg mt-1 md:mt-3 max-w-3xl mx-auto leading-relaxed transition-all duration-700 md:group-hover:text-on-surface">
              Exclusively distributed by Jamees Food, Mashbere brings world-class frozen treats to the UAE market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 reveal">
            {/* Ice Creams & Popsicles */}
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-[4rem] glass-card p-12 min-h-[550px] flex flex-col justify-between hover:shadow-2xl transition-all cursor-pointer">
              <div className="relative z-10">
                <span className="text-tertiary font-bold tracking-[0.25em] text-[9px] uppercase">Premium Range</span>
                <h3 className="uppercase text-2xl font-light tracking-wider text-on-surface mt-1 mb-3" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Ice Creams &amp; <span className="font-black">Popsicles</span></h3>
                <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">Artisanal frozen delights crafted with premium ingredients and innovative textures.</p>
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
              <div className="bg-strawberry-red text-center text-white w-full py-4 rounded-3xl font-bold text-[10px] tracking-[0.2em] uppercase shadow-lg shadow-strawberry-red/20 group-hover:brightness-110 transition-all">Explore Flavors</div>
            </a>
            
            {/* SipUp Syrups */}
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-[4rem] bg-white shadow-xl p-12 min-h-[550px] flex flex-col justify-between hover:shadow-2xl transition-all cursor-pointer">
              <div>
                <span className="text-mango-yellow font-bold tracking-[0.25em] text-[9px] uppercase">Natural Fruit</span>
                <h3 className="uppercase text-2xl font-light tracking-wider text-on-surface mt-1 mb-3" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>SipUp <span className="font-black">Syrups</span></h3>
                <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">Natural fruit ice pops and concentrated syrups designed for ultimate summer refreshment.</p>
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
              <div className="border border-on-surface text-center text-on-surface w-full py-4 rounded-3xl font-bold text-[10px] tracking-[0.2em] uppercase group-hover:bg-on-surface group-hover:text-white transition-all">View SipUp Collection</div>
            </a>
          </div>
          
          {/* Commercial Infrastructure */}
          <div className="mt-16 group relative overflow-hidden rounded-[4rem] glass-card flex flex-col md:flex-row items-center gap-12 p-12 md:p-20 hover:shadow-2xl transition-all border border-white/60 reveal">
            <div className="md:w-1/2 space-y-8">
              <div>
                <span className="text-tertiary font-bold tracking-widest text-xs uppercase opacity-70">B2B INFRASTRUCTURE</span>
                <h3 
                  className="uppercase text-4xl md:text-5xl font-light text-on-surface mt-3 leading-tight tracking-wider"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  Mashbere Commercial <br/>
                  <span className="font-bold">Kiosk Systems</span>
                </h3>
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
            <div className="group cursor-default">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-strawberry-red opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-strawberry-red"></span>
                </span>
                <span className="text-strawberry-red text-[9px] font-bold tracking-[0.35em] uppercase transition-all duration-500 group-hover:tracking-[0.5em]">This Week</span>
              </div>
              <h2
                className="uppercase font-black text-3xl md:text-6xl tracking-tight leading-none text-on-surface transition-all duration-500 md:group-hover:tracking-widest"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                Trending
              </h2>
              <div className="mt-2 h-[2px] w-0 group-hover:w-full bg-strawberry-red transition-all duration-700 ease-out rounded-full"></div>
            </div>
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
            <div className="min-w-[260px] sm:min-w-[300px] bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all group border border-gray-100 flex flex-col">
              <div className="relative mb-8 bg-surface-container-low rounded-2xl aspect-[4/5] flex items-center justify-center overflow-hidden">
                <Image src={pookee09} alt="Pookee" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-strawberry-red text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg">BEST SELLER</span>
              </div>
              <div className="flex justify-between items-start mb-6 flex-1">
                <div>
                  <span className="text-strawberry-red font-bold tracking-[0.25em] text-[9px] uppercase">Mashbere Original</span>
                  <h4 className="uppercase text-lg font-light tracking-wider text-on-surface mt-0.5" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Premium <span className="font-black">Pookee</span></h4>
                  <p className="text-xs text-on-surface-variant mt-1">Authentic Mashbere Flavor</p>
                </div>
              </div>
              <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="w-full border border-on-surface text-on-surface font-bold py-3.5 rounded-2xl hover:bg-strawberry-red hover:text-white hover:border-strawberry-red transition-all flex items-center justify-center gap-2 text-[10px] tracking-[0.15em] uppercase">
                <span className="material-symbols-outlined text-base">open_in_new</span> View on Mashbere
              </a>
            </div>
            
            <div className="min-w-[260px] sm:min-w-[300px] bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all group border border-gray-100 flex flex-col">
              <div className="relative mb-8 bg-surface-container-low rounded-2xl aspect-[4/5] flex items-center justify-center overflow-hidden">
                <Image src={popsicle14} alt="Mashbere Popsicle" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-mango-yellow text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg">NEW ARRIVAL</span>
              </div>
              <div className="flex justify-between items-start mb-6 flex-1">
                <div>
                  <span className="text-mango-yellow font-bold tracking-[0.25em] text-[9px] uppercase">New Arrival</span>
                  <h4 className="uppercase text-lg font-light tracking-wider text-on-surface mt-0.5" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Mashbere <span className="font-black">Popsicle</span></h4>
                  <p className="text-xs text-on-surface-variant mt-1">Real Fruit Popsicle</p>
                </div>
              </div>
              <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="w-full border border-on-surface text-on-surface font-bold py-3.5 rounded-2xl hover:bg-strawberry-red hover:text-white hover:border-strawberry-red transition-all flex items-center justify-center gap-2 text-[10px] tracking-[0.15em] uppercase">
                <span className="material-symbols-outlined text-base">open_in_new</span> View on Mashbere
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-[120px] px-4 md:px-[80px] bg-surface-container-low relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-10 md:mb-20 reveal group cursor-default">
            {/* Heart beat pulse — warm, emotional for testimonials/community */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="material-symbols-outlined text-strawberry-red text-sm transition-transform duration-300 md:group-hover:scale-125 md:group-hover:drop-shadow-[0_0_8px_rgba(213,39,39,0.8)]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <span className="text-strawberry-red font-bold uppercase tracking-[0.2em] md:group-hover:tracking-[0.4em] text-xs md:text-sm transition-all duration-500">Testimonials</span>
              <span className="material-symbols-outlined text-strawberry-red text-sm transition-transform duration-300 md:group-hover:scale-125 md:group-hover:drop-shadow-[0_0_8px_rgba(213,39,39,0.8)]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
            <h2 
              className="uppercase text-3xl md:text-5xl font-light mt-4 md:mt-6 tracking-wider transition-all duration-700 md:group-hover:tracking-[0.08em]"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Love From Our Families
            </h2>
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
                <div className="w-10 h-10 rounded-full bg-strawberry-red/10 flex items-center justify-center font-black text-strawberry-red text-sm">K</div>
                <div>
                  <span className="uppercase text-sm font-light tracking-wider" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Kevin <span className="font-black">M.</span></span>
                </div>
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
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-strawberry-red shadow-lg text-sm">S</div>
                <div>
                  <span className="uppercase text-sm font-light tracking-wider" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Salama <span className="font-black">A.</span></span>
                </div>
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
                <div className="w-10 h-10 rounded-full bg-strawberry-red/10 flex items-center justify-center font-black text-strawberry-red text-sm">H</div>
                <div>
                  <span className="uppercase text-sm font-light tracking-wider" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Hessa <span className="font-black">R.</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
