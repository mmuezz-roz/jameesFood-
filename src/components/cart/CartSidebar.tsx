"use client"

import { useCart } from "@/context/CartContext"
import { X, Minus, Plus, ShoppingBag, MessageCircle } from "lucide-react"
import Image from "next/image"

const WA_NUMBER = "971502994974" // Make sure this matches the one in ProductDetailClient

export default function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart()

  if (!isCartOpen) return null

  const handleCheckout = () => {
    let message = "Hi! I would like to place an order:\n\n"
    items.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (${item.price * item.quantity} AED)\n`
    })
    message += `\n*Total: ${cartTotal} AED*\n\nPlease let me know the delivery options.`
    
    const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(waLink, "_blank")
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#FAF7F0] shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#111010]/10 bg-white">
          <div className="flex items-center gap-3">
            <ShoppingBag size={24} className="text-[#1A1714]" />
            <h2 className="text-xl font-bold font-display text-[#1A1714]">Your Cart</h2>
            <span className="bg-strawberry-red text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[#1A1714]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center opacity-60">
              <ShoppingBag size={48} className="mb-4 text-[#111010]/20" />
              <p className="text-lg font-medium text-[#111010]">Your cart is empty.</p>
              <p className="text-sm mt-2">Looks like you haven&apos;t added anything yet.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-2.5 bg-white border border-[#111010]/20 rounded-full font-bold hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#111010]/5">
                <div className="w-20 h-24 bg-gray-100 rounded-xl overflow-hidden relative flex-shrink-0">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">🍃</div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-[#1A1714] line-clamp-2 leading-tight text-sm">
                      {item.name}
                    </h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#1A1714]/40 hover:text-red-500 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="font-bold text-strawberry-red">
                    {item.price} AED
                  </div>

                  <div className="flex items-center gap-3 bg-[#FAF7F0] w-fit rounded-full px-1 py-1 mt-1">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-50 text-[#111010]"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-bold min-w-[12px] text-center text-[#111010]">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-50 text-[#111010]"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#111010]/10 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-end mb-6">
              <span className="text-[#111010]/60 font-medium">Total</span>
              <div className="text-right">
                <div className="text-2xl font-black text-[#1A1714] leading-none">
                  {cartTotal} <span className="text-sm text-[#111010]/60 font-medium">AED</span>
                </div>
                <div className="text-[10px] text-[#111010]/40 mt-1 uppercase tracking-wider">
                  Excluding delivery
                </div>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#20bd5a] hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={20} />
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  )
}
