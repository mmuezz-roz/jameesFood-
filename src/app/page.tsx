"use client"

import { useEffect } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.1 })

    revealElements.forEach(el => observer.observe(el))
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-44 pb-24 px-5 md:px-[80px] flex flex-col items-center justify-center overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto w-full text-center relative z-10 mb-20 reveal">
          <h1 className="text-5xl md:text-8xl text-on-surface mb-8 font-extrabold tracking-tight leading-[1.1]">
            Taste the Joy of <br/><span className="text-strawberry-red">Every Generation</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Experience the purity of nature with our handcrafted frozen treats and authentic snacks. Clean ingredients, timeless flavors for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-strawberry-red text-white px-12 py-5 rounded-full font-bold text-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-strawberry-red/20">
              Shop Now
            </button>
            <button className="glass-card text-on-surface px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all">
              Our Story
            </button>
          </div>
        </div>

        {/* Featured Category Cards */}
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 reveal">
          {/* Ice Candy */}
          <div className="group relative h-[500px] rounded-3xl overflow-hidden glass-card cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
              <div>
                <span className="text-tertiary font-bold tracking-widest text-xs uppercase opacity-70">Premium Range</span>
                <h3 className="text-3xl font-extrabold text-on-surface mt-2">Ice Candy</h3>
              </div>
              <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-on-surface group-hover:bg-strawberry-red group-hover:text-white transition-all duration-500 shadow-lg">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-110 bg-black/5">
              {/* Blanked Image */}
              <div className="w-full h-full" />
            </div>
          </div>

          {/* Karumuru Snacks */}
          <div className="group relative h-[500px] rounded-3xl overflow-hidden glass-card cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 md:translate-y-12">
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
              <div>
                <span className="text-mango-yellow font-bold tracking-widest text-xs uppercase">Authentic Taste</span>
                <h3 className="text-3xl font-extrabold text-on-surface mt-2">Savory Snacks</h3>
              </div>
              <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-on-surface group-hover:bg-strawberry-red group-hover:text-white transition-all duration-500 shadow-lg">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-110 bg-black/5">
              {/* Blanked Image */}
              <div className="w-full h-full" />
            </div>
          </div>

          {/* SipUp Syrups */}
          <div className="group relative h-[500px] rounded-3xl overflow-hidden glass-card cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
              <div>
                <span className="text-strawberry-red font-bold tracking-widest text-xs uppercase opacity-70">Refreshing Blends</span>
                <h3 className="text-3xl font-extrabold text-on-surface mt-2">Natural Syrups</h3>
              </div>
              <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-on-surface group-hover:bg-strawberry-red group-hover:text-white transition-all duration-500 shadow-lg">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-110 bg-black/5">
              {/* Blanked Image */}
              <div className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Browse Categories (Staggered Grid) */}
      <section className="py-[120px] px-5 md:px-[80px] bg-surface-container-low" id="browse-categories">
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
            <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-white shadow-lg min-h-[500px] flex items-stretch">
              {/* Blanked Image */}
              <div className="absolute inset-0 w-full h-full bg-black/10 transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <h3 className="text-4xl font-extrabold text-white mb-4">Ice Candy</h3>
                <p className="text-white/80 text-lg mb-8 max-w-md">16 Handcrafted seasonal flavors made with real fruit and traditional techniques.</p>
                <button className="bg-white text-strawberry-red w-fit px-8 py-3.5 rounded-full font-bold text-base hover:scale-105 transition-transform">Discover Flavors</button>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="flex-1 group relative overflow-hidden rounded-3xl bg-white shadow-lg min-h-[250px]" id="snacks">
                {/* Blanked Image */}
                <div className="absolute inset-0 w-full h-full bg-black/10 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-extrabold text-white">Savory Snacks</h3>
                </div>
              </div>
              <div className="flex-1 group relative overflow-hidden rounded-3xl bg-white shadow-lg min-h-[250px]" id="syrups">
                {/* Blanked Image */}
                <div className="absolute inset-0 w-full h-full bg-black/10 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-extrabold text-white">Natural Syrups</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Quote Section */}
      <section className="relative py-[120px] overflow-hidden bg-on-surface text-white">
        <div className="absolute inset-0 opacity-10">
          {/* Blanked Image */}
          <div className="w-full h-full bg-white/20" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center reveal">
          <span className="text-mango-yellow font-bold tracking-[0.3em] text-sm uppercase">OUR CORE VALUES</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-8 mb-12 leading-tight">Naturally Better <br/>For Everyone</h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-16 text-white/80 italic font-light max-w-4xl mx-auto">
            &quot;At Jamees, we&apos;re on a delicious mission to revolutionize snacking. We believe everyone deserves treats that are as honest as they are flavorful. Our journey starts with sourcing the freshest local fruits and ends in your happy moments.&quot;
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
      <section className="py-[120px] px-5 md:px-[80px] bg-cream-bg" id="mashbere">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20 reveal">
            <span className="text-tertiary font-bold uppercase tracking-widest text-sm">Strategic Partnership</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-6 text-on-surface">Mashbere&apos;s Premium Collections</h2>
            <p className="text-on-surface-variant text-lg mt-6 max-w-3xl mx-auto leading-relaxed">Exclusively distributed by Jamees Food, Mashbere brings world-class frozen treats to the UAE market.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 reveal">
            {/* Ice Creams & Popsicles */}
            <div className="group relative overflow-hidden rounded-[4rem] glass-card p-12 min-h-[550px] flex flex-col justify-between hover:shadow-2xl transition-all">
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-on-surface mb-4">Ice Creams &amp; Popsicles</h3>
                <p className="text-on-surface-variant text-lg max-w-xs leading-relaxed opacity-80">Artisanal frozen delights crafted with premium ingredients and innovative textures.</p>
              </div>
              <div className="relative flex-1 flex items-center justify-center py-10">
                <div className="flex items-center justify-center w-full h-full bg-black/5 rounded-2xl animate-float">
                  {/* Blanked Image */}
                </div>
              </div>
              <button className="bg-strawberry-red text-white w-full py-5 rounded-3xl font-bold text-lg shadow-lg shadow-strawberry-red/20 hover:brightness-110 transition-all">Explore Flavors</button>
            </div>
            
            {/* SipUp Syrups */}
            <div className="group relative overflow-hidden rounded-[4rem] bg-white shadow-xl p-12 min-h-[550px] flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <h3 className="text-3xl font-extrabold text-on-surface mb-4">SipUp Syrups</h3>
                <p className="text-on-surface-variant text-lg max-w-xs leading-relaxed opacity-80">Natural fruit ice pops and concentrated syrups designed for ultimate summer refreshment.</p>
              </div>
              <div className="relative flex-1 flex items-center justify-center py-10">
                <div className="flex gap-6 items-end justify-center w-full h-full">
                  {/* Blanked Images */}
                  <div className="h-64 w-20 bg-black/5 rounded-lg group-hover:rotate-6 transition-transform" />
                  <div className="h-72 w-24 bg-black/10 rounded-lg group-hover:-translate-y-4 transition-transform shadow-lg" />
                  <div className="h-64 w-20 bg-black/5 rounded-lg group-hover:-rotate-6 transition-transform" />
                </div>
              </div>
              <button className="border-2 border-on-surface text-on-surface w-full py-5 rounded-3xl font-extrabold text-lg hover:bg-on-surface hover:text-white transition-all">View SipUp Collection</button>
            </div>
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
                <button className="bg-tertiary text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-tertiary/20 hover:scale-105 transition-all">Partner With Us</button>
                <a className="flex items-center gap-2 px-10 py-4 rounded-full font-bold text-on-surface border-2 border-outline/30 hover:bg-white transition-all group/btn" href="#">
                  Visit Mashbere 
                  <span className="material-symbols-outlined text-base transition-transform group-hover/btn:translate-x-1">open_in_new</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-tertiary/10 blur-[80px] rounded-full scale-110"></div>
              {/* Blanked Image */}
              <div className="relative z-10 w-full aspect-video bg-black/5 rounded-3xl transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-[120px] px-5 md:px-[80px] bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 reveal gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">Trending This Week</h2>
            <div className="flex space-x-4">
              <button className="w-12 h-12 rounded-full border-2 border-strawberry-red/20 flex items-center justify-center hover:bg-strawberry-red hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-strawberry-red text-white flex items-center justify-center hover:brightness-110 shadow-lg shadow-strawberry-red/20 transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="flex overflow-x-auto space-x-8 pb-10 scrollbar-hide reveal -mx-4 px-4">
            {/* Product Card: Mango */}
            <div className="min-w-[320px] bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all group border border-gray-100">
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
            
            {/* Product Card: Grapes */}
            <div className="min-w-[320px] bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all group border border-gray-100">
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
            
            {/* Product Card: Lychee */}
            <div className="min-w-[320px] bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all group border border-gray-100">
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
      <section className="py-[120px] px-5 md:px-[80px] bg-surface-container-low relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20 reveal">
            <span className="text-strawberry-red font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-tight">Love From Our Families</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 reveal">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-50 hover:shadow-xl transition-all">
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
            
            <div className="bg-strawberry-red p-10 rounded-[2.5rem] shadow-2xl shadow-strawberry-red/20 transform md:-translate-y-8 text-white">
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
            
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-50 hover:shadow-xl transition-all">
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
