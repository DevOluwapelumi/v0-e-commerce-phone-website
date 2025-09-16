"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/lib/favorites-context"
import { useCart } from "@/lib/cart-context"
import { Heart, X, ShoppingCart } from "lucide-react"
import Image from "next/image"

export function FavoritesSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { state: favoritesState, dispatch: favoritesDispatch } = useFavorites()
  const { dispatch: cartDispatch } = useCart()

  const removeFavorite = (id: string) => {
    favoritesDispatch({ type: "REMOVE_FAVORITE", payload: id })
  }

  const addToCart = (item: any) => {
    cartDispatch({ type: "ADD_ITEM", payload: item })
  }

  return (
    <>
      {/* Favorites Button */}
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="relative">
        <Heart className="h-5 w-5" />
        {favoritesState.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {favoritesState.items.length}
          </span>
        )}
      </Button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Favorites ({favoritesState.items.length})</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Favorite Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {favoritesState.items.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No favorites yet</p>
                  <p className="text-xs text-gray-400 mt-2">Add items to your wishlist by clicking the heart icon</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {favoritesState.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="relative">
                        <Image
                          src={item.image || "/placeholder.svg?height=80&width=80"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm text-gray-900 line-clamp-2 leading-tight">{item.name}</h3>
                        <p className="text-blue-600 font-semibold text-base mt-1">${item.price}</p>
                        {item.originalPrice && (
                          <p className="text-xs text-gray-500 line-through">${item.originalPrice}</p>
                        )}

                        <div className="flex gap-2 mt-3">
                          <Button
                            size="sm"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-xs h-8"
                            onClick={() => addToCart(item)}
                          >
                            <ShoppingCart className="h-3 w-3 mr-1" />
                            Add to Cart
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeFavorite(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 px-2"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
