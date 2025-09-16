"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/lib/favorites-context"
import { useCart } from "@/lib/cart-context"
import { Heart, X, ShoppingCart } from "lucide-react"
import Image from "next/image"

export function FavoritesModal() {
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

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <h2 className="text-xl font-semibold">Favorites ({favoritesState.items.length})</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Favorite Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  {favoritesState.items.length === 0 ? (
                    <div className="text-center py-12">
                      <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">No favorites yet</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Add items to your wishlist by clicking the heart icon
                      </p>
                    </div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {favoritesState.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col gap-3 p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="relative">
                            <Image
                              src={item.image || "/placeholder.svg?height=150&width=150"}
                              alt={item.name}
                              width={150}
                              height={150}
                              className="rounded-md object-cover w-full"
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFavorite(item.id)}
                              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 hover:text-red-700 h-8 w-8"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 line-clamp-2 leading-tight text-sm">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-2">
                              <p className="text-blue-600 font-semibold">${item.price}</p>
                              {item.originalPrice && (
                                <p className="text-xs text-gray-500 line-through">${item.originalPrice}</p>
                              )}
                            </div>
                            <Button
                              size="sm"
                              className="w-full mt-3 bg-blue-600 hover:bg-blue-700"
                              onClick={() => addToCart(item)}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {favoritesState.items.length > 0 && (
                  <div className="border-t p-6">
                    <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
                      Continue Shopping
                    </Button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
