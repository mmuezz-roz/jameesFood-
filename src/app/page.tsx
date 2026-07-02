import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import RevealObserver from "@/components/RevealObserver"
import TestimonialSlider from "@/components/TestimonialSlider"
import SipUpSlider from "@/components/SipUpSlider"
import TrendingSlider from "@/components/TrendingSlider"
import RotatingText from "@/components/RotatingText"
import Shuffle from "@/components/Shuffle"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import heroBg from "../../public/karumur bg image.png"
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

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://jameesfood.com/#website",
        "url": "https://jameesfood.com/",
        "name": "Jamees Food",
        "description": "Experience the purity of nature with our handcrafted frozen treats and authentic snacks.",
        "publisher": {
          "@id": "https://jameesfood.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://jameesfood.com/#organization",
        "name": "Jamees Food",
        "url": "https://jameesfood.com/",
        "logo": "https://jameesfood.com/jamees_logo.png.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971566577588",
          "contactType": "customer service",
          "availableLanguage": ["English", "Arabic"]
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealObserver />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#0d0d0d]">
        <div className="relative w-full h-[85vh] min-h-[550px] sm:aspect-square md:aspect-auto md:h-auto">
          {/* Desktop Images */}
          <div className="hidden md:block relative w-full">
            <Image
              src={heroBg}
              alt="Assorted colorful, fruit-packed Karumuru ice snacks and popsicles"
              priority
              placeholder="blur"
              className="w-full h-auto block"
              sizes="100vw"
            />
            <Image
              src={heroBg2}
              alt="Close-up of premium Jamees Food natural frozen treats"
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
              alt="Refreshing natural ice candy displayed for mobile"
              priority
              className="absolute inset-0 w-full h-full object-cover object-center"
              sizes="100vw"
            />
            <Image
              src={heroBg2}
              alt="Delicious Jamees Food frozen treats background"
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
                className="uppercase text-4xl sm:text-5xl md:text-[4.5rem] text-white mb-4 md:mb-8 font-light tracking-wide md:tracking-wider leading-[1.1] md:leading-[1.15] drop-shadow-sm transition-transform duration-700 ease-out md:group-hover:translate-x-4 flex flex-col items-start"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                <span className="block">Taste the</span>
                <span className="block">Joy of</span>
                <span className="block">Every</span>
                <span className="font-bold relative inline-block group/word cursor-pointer mt-1 md:mt-0">
                  <RotatingText texts={['Flavour', 'Generation', 'Moment']} mainClassName="inline-flex overflow-hidden justify-start" staggerFrom="last" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-120%" }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1" transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2500} />
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
      <section className="hidden md:block relative py-10 md:py-16 px-4 md:px-[80px] lg:px-[120px] bg-background overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 relative z-10 reveal">
          {/* Popsicles */}
          <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="block group flex flex-col h-[480px] rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative flex-1 p-4 pb-0 overflow-hidden">
              <div className="w-full h-full relative rounded-t-2xl overflow-hidden bg-black/5">
                <Image 
                  src={popsiclesImg} 
                  alt="Popsicles" 
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      <section className="py-10 md:py-[120px] px-4 md:px-[80px] lg:px-[120px] bg-surface-container-low" id="browse-categories">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-3 md:gap-6 reveal">
            <div className="max-w-2xl group cursor-default">
              <div className="flex items-center gap-4 overflow-hidden">
                <span className="inline-block w-0 md:group-hover:w-10 h-[2px] bg-strawberry-red transition-all duration-500 ease-out"></span>
                <span className="text-strawberry-red font-bold uppercase tracking-[0.2em] text-xs md:text-sm transition-all duration-500">Fresh Selection</span>
              </div>
              <h2 className="uppercase text-3xl md:text-5xl lg:text-6xl font-light mt-3 md:mt-4 text-on-surface leading-tight tracking-wider" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Explore Our Collections</h2>
            </div>
            <a className="text-strawberry-red font-bold text-base md:text-lg flex items-center group" href="#">
              View All <span className="material-symbols-outlined ml-1 transition-transform group-hover:translate-x-2">arrow_forward</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8 reveal">
            {/* Hero card */}
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="lg:col-span-8 group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-lg min-h-[300px] md:min-h-[500px] flex items-stretch cursor-pointer block">
              <Image 
                src={pookeesCollectionImg}
                alt="Pookees"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
                <span className="text-white/60 font-bold tracking-[0.25em] text-[9px] uppercase mb-1">Mashbere Collection</span>
                <h3 className="uppercase text-2xl md:text-3xl font-light tracking-wider text-white mb-2 md:mb-3 drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Famous <Shuffle text="Pookees" tag="span" className="font-black" hoverTriggerSelector=".group" /></h3>
                <p className="text-white/70 text-sm mb-4 md:mb-6 max-w-md leading-relaxed hidden sm:block">16 handcrafted seasonal flavors made with real fruit and traditional techniques.</p>
                <div className="bg-white text-on-surface text-center w-fit px-5 md:px-7 py-2.5 md:py-3 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-strawberry-red hover:text-white transition-all">Discover Flavors</div>
              </div>
            </a>

            {/* Side cards — horizontal on mobile, vertical on desktop */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-5 md:gap-8">
              <Link href="/products/karumuru" className="flex-1 group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-lg min-h-[160px] md:min-h-[250px] cursor-pointer" id="snacks">
                <Image 
                  src={savoryCollectionImg}
                  alt="Karumuru"
                  fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-1000 scale-110 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 md:p-7">
                  <span className="text-white/50 font-bold tracking-[0.25em] text-[8px] md:text-[9px] uppercase mb-0.5">Authentic Snack</span>
                  <h3 className="uppercase text-base md:text-xl font-light tracking-wider text-white drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Karu<Shuffle text="muru" tag="span" className="font-black" hoverTriggerSelector=".group" /></h3>
                </div>
              </Link>
              <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="flex-1 group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-lg min-h-[160px] md:min-h-[250px] cursor-pointer block" id="syrups">
                <Image 
                  src={sipupAllImg}
                  alt="Signature Sipups"
                  fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-1000 scale-110 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 md:p-7">
                  <span className="text-white/50 font-bold tracking-[0.25em] text-[8px] md:text-[9px] uppercase mb-0.5">Natural Fruit</span>
                  <h3 className="uppercase text-base md:text-xl font-light tracking-wider text-white drop-shadow-md" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Signature <Shuffle text="Sipups" tag="span" className="font-black" hoverTriggerSelector=".group" /></h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Quote Section */}
      <section className="relative py-12 md:py-[120px] overflow-hidden bg-on-surface text-white">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image 
            src={coreValuesBg}
            alt="Core Values Background"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center reveal group cursor-default">
          <span className="inline-block text-mango-yellow font-bold tracking-[0.3em] text-xs md:text-sm uppercase transition-all duration-700 md:group-hover:tracking-[0.6em] md:group-hover:text-white">OUR CORE VALUES</span>
          <h2 className="uppercase text-2xl md:text-5xl font-light mt-4 md:mt-6 mb-6 md:mb-12 leading-tight tracking-wider transition-all duration-700 md:group-hover:scale-105" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            <span className="inline-block text-mango-yellow transition-colors duration-500 group-hover:text-strawberry-red">Naturally</span>{" "}
            <span className="inline-block transition-colors duration-500 group-hover:text-mango-yellow">Better</span>
            <br/>
            <span className="inline-block text-white/80 transition-colors duration-500 group-hover:text-white">For</span>{" "}
            <span className="inline-block text-mango-yellow transition-all duration-500 group-hover:text-strawberry-red">Everyone</span>
          </h2>
          <p className="text-sm md:text-2xl leading-relaxed mb-8 md:mb-16 text-white/80 italic font-light max-w-4xl mx-auto">
            &quot;At Jamees, we&apos;re on a delicious mission to revolutionize snacking. We believe everyone deserves treats that are as honest as they are flavorful.&quot;
          </p>
          {/* Values — horizontal scroll on mobile, grid on desktop */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-12 pt-8 md:pt-16 border-t border-white/10">
            <div className="flex flex-col items-center gap-2 md:gap-0">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center md:mb-4">
                <span className="material-symbols-outlined text-xl md:text-3xl">eco</span>
              </div>
              <span className="font-bold text-xs md:text-lg text-center leading-tight">100% All-Natural</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-0">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center md:mb-4">
                <span className="material-symbols-outlined text-xl md:text-3xl">local_shipping</span>
              </div>
              <span className="font-bold text-xs md:text-lg text-center leading-tight">UAE-Wide Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-0">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center md:mb-4">
                <span className="material-symbols-outlined text-xl md:text-3xl">favorite</span>
              </div>
              <span className="font-bold text-xs md:text-lg text-center leading-tight">Kid Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mashbere B2B Section */}
      <section className="py-10 md:py-[120px] px-4 md:px-[80px] bg-cream-bg" id="mashbere">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-8 md:mb-20 reveal group cursor-default">
            <span className="inline-block text-tertiary font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs">
              Strategic Partnership
            </span>
            <div className="overflow-hidden pb-2 md:pb-4">
              <h2 
                className="relative inline-block uppercase text-xl md:text-5xl font-light mt-2 md:mt-6 text-on-surface tracking-wider" 
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                Mashbere&apos;s Premium Collections
                <span className="absolute -bottom-1 md:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] md:h-[3px] bg-strawberry-red transition-all duration-500 group-hover:w-full"></span>
              </h2>
            </div>
            <p className="text-on-surface-variant text-xs md:text-lg mt-1 md:mt-3 max-w-3xl mx-auto leading-relaxed px-2">
              Exclusively distributed by Jamees Food, Mashbere brings world-class frozen treats to the UAE market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 reveal">
            {/* Ice Creams & Popsicles */}
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl md:rounded-[4rem] glass-card p-7 md:p-12 min-h-[380px] md:min-h-[550px] flex flex-col justify-between hover:shadow-2xl transition-all cursor-pointer">
              <div className="relative z-10">
                <span className="text-tertiary font-bold tracking-[0.25em] text-[9px] uppercase">Premium Range</span>
                <h3 className="uppercase text-xl md:text-2xl font-light tracking-wider text-on-surface mt-1 mb-2 md:mb-3" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>Ice Creams & <Shuffle text="Popsicles" tag="span" className="font-black" hoverTriggerSelector=".group" /></h3>
                <p className="text-on-surface-variant text-xs md:text-sm max-w-xs leading-relaxed">Artisanal frozen delights crafted with premium ingredients and innovative textures.</p>
              </div>
              <div className="relative flex-1 flex items-center justify-center py-5 md:py-10 px-3 md:px-6">
                <div className="flex items-center justify-center w-full relative animate-float">
                  <Image 
                    src={mashberePopsiclesImg} 
                    alt="Ice Creams & Popsicles" 
                    className="w-full h-auto drop-shadow-2xl rounded-2xl md:rounded-[2rem]"
                  />
                </div>
              </div>
              <div className="bg-strawberry-red text-center text-white w-full py-3.5 md:py-4 rounded-2xl md:rounded-3xl font-bold text-[10px] tracking-[0.2em] uppercase shadow-lg shadow-strawberry-red/20 group-hover:brightness-110 transition-all">Explore Flavors</div>
            </a>
            
            {/* SipUp Syrups */}
            <a href="https://www.mashbere.com/products" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl md:rounded-[4rem] bg-white shadow-xl p-7 md:p-12 min-h-[380px] md:min-h-[550px] flex flex-col justify-between hover:shadow-2xl transition-all cursor-pointer">
              <div>
                <span className="text-mango-yellow font-bold tracking-[0.25em] text-[9px] uppercase">Natural Fruit</span>
                <h3 className="uppercase text-xl md:text-2xl font-light tracking-wider text-on-surface mt-1 mb-2 md:mb-3" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>SipUp <Shuffle text="Syrups" tag="span" className="font-black" hoverTriggerSelector=".group" /></h3>
                <p className="text-on-surface-variant text-xs md:text-sm max-w-xs leading-relaxed">Natural fruit ice pops and concentrated syrups designed for ultimate summer refreshment.</p>
              </div>
              <div className="relative flex-1 flex items-center justify-center py-4 md:py-10">
                <SipUpSlider />
              </div>
              <div className="border border-on-surface text-center text-on-surface w-full py-3.5 md:py-4 rounded-2xl md:rounded-3xl font-bold text-[10px] tracking-[0.2em] uppercase group-hover:bg-on-surface group-hover:text-white transition-all">View SipUp Collection</div>
            </a>
          </div>
          
          {/* Commercial Infrastructure */}
          <div className="mt-16 md:mt-24 group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] glass-card flex flex-col lg:flex-row items-center gap-8 md:gap-12 p-8 sm:p-10 md:p-16 lg:p-20 hover:shadow-2xl transition-all border border-white/60 reveal">
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <div>
                <span className="text-tertiary font-bold tracking-widest text-[10px] md:text-xs uppercase opacity-70">B2B INFRASTRUCTURE</span>
                <h3 
                  className="uppercase text-3xl sm:text-4xl md:text-5xl font-light text-on-surface mt-2 md:mt-3 leading-[1.15] md:leading-tight tracking-wider text-balance"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  Mashbere Commercial <br className="hidden md:block"/>
                  <span className="font-bold">Kiosk Systems</span>
                </h3>
              </div>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed text-pretty">State-of-the-art kiosk solutions and high-performance cooling equipment designed for luxury retail, hospitality, and high-traffic venues.</p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[20px] md:text-[24px]">check_circle</span>
                  <span className="font-bold text-on-surface text-sm md:text-base">Smart Inventory</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[20px] md:text-[24px]">eco</span>
                  <span className="font-bold text-on-surface text-sm md:text-base">Eco-Cooling</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full pt-2">
                <a href="https://www.mashbere.com/equipment" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-tertiary text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold shadow-lg shadow-tertiary/20 hover:scale-[1.02] active:scale-95 transition-all inline-block">Partner With Us</a>
                <a className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-on-surface border-2 border-outline/30 hover:bg-white active:bg-gray-100 transition-all group/btn inline-flex" href="https://www.mashbere.com" target="_blank" rel="noopener noreferrer">
                  Visit Mashbere 
                  <span className="material-symbols-outlined text-sm md:text-base transition-transform group-hover/btn:translate-x-1">open_in_new</span>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-tertiary/10 blur-[80px] rounded-full scale-110"></div>
              <div className="relative z-10 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg transition-transform duration-1000 group-hover:scale-105">
                <Image 
                  src={kioskImg} 
                  alt="Mashbere Commercial Kiosk System" 
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-10 md:py-[120px] px-4 md:px-[80px] bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <TrendingSlider />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 md:py-[120px] px-4 md:px-[80px] bg-surface-container-low relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-8 md:mb-20 reveal group cursor-default">
            <div className="flex items-center justify-center gap-2 mb-2 transition-transform duration-700 md:group-hover:-translate-y-1">
              <span className="material-symbols-outlined text-strawberry-red text-sm transition-all duration-500 md:group-hover:rotate-12 md:group-hover:scale-125 md:group-hover:text-rose-500" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <span className="text-strawberry-red font-bold uppercase tracking-[0.2em] text-xs md:text-sm transition-all duration-700 md:group-hover:tracking-[0.4em] md:group-hover:text-rose-500">Testimonials</span>
              <span className="material-symbols-outlined text-strawberry-red text-sm transition-all duration-500 md:group-hover:-rotate-12 md:group-hover:scale-125 md:group-hover:text-rose-500" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
            <h2 
              className="relative inline-block uppercase text-2xl md:text-5xl font-light mt-3 md:mt-6 tracking-wider transition-all duration-700 md:group-hover:tracking-[0.1em]"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              Love From Our Families
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] md:h-[3px] bg-strawberry-red transition-all duration-500 group-hover:w-full"></span>
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <Footer />
    </>
  )
}
