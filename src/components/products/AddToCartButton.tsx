"use client"

import { useCart } from "@/context/CartContext"

interface Props {
  product: {
    id: string
    name: string
    price: number
    image: string
  }
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart()

  return (
    <button 
      onClick={() => addToCart({ ...product, quantity: 1 })}
      className="flex-1 bg-strawberry-red text-white py-5 px-8 rounded-full font-bold text-lg shadow-xl shadow-strawberry-red/20 hover:brightness-110 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
    >
      <span className="material-symbols-outlined">shopping_cart</span>
      Add to Cart
    </button>
  )
}
