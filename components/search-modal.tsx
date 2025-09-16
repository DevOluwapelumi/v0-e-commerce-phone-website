"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"
import { useFavorites } from "@/lib/favorites-context"
import { Search, X, ShoppingCart, Heart } from "lucide-react"
import { searchPhones, type Phone } from "@/lib/phone-api"
import Image from "next/image"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Phone[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch: cartDispatch } = useCart()
  const { dispatch: favoritesDispatch } = useFavorites()

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchTimeout = setTimeout(async () => {
      setIsLoading(true)
      try {
        const phones = await searchPhones(query)
        setResults(phones)
      } catch (error) {
        console.error("Search failed:", error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, 300)

    return () => clearTimeout(searchTimeout)
  }, [query])

  const addToCart = (phone: Phone) => {
    cartDispatch({
      type: "ADD_ITEM",
      payload: {
        id: phone.id,
        name: phone.name,
        price: phone.price,
        image: phone.image,
      },
    })
  }

  const addToFavorites = (phone: Phone) => {
    favoritesDispatch({
      type: "ADD_FAVORITE",
      payload: {
        id: phone.id,
        name: phone.name,
        price: phone.price,
        image: phone.image,
      },
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white rounded-lg shadow-xl z-50 max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b">
              <Search className="h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for phones, brands, or features..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 border-0 focus-visible:ring-0 text-lg"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-2 text-gray-500">Searching...</p>
                </div>
              ) : results.length > 0 ? (
                <div className="p-4 space-y-3">
                  {results.map((phone) => (
                    <div key={phone.id} className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <Image
                        src={phone.image || "/placeholder.svg"}
                        alt={phone.name}
                        width={60}
                        height={60}
                        className="rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{phone.name}</h3>
                        <p className="text-sm text-gray-600">{phone.brand}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold text-blue-600">${phone.price}</span>
                          {phone.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">${phone.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => addToFavorites(phone)} className="p-2">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" onClick={() => addToCart(phone)} className="bg-blue-600 hover:bg-blue-700">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : query.trim() ? (
                <div className="p-8 text-center">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No phones found for "{query}"</p>
                  <p className="text-sm text-gray-400 mt-1">Try searching for brands like Apple, Samsung, or Google</p>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Start typing to search for phones</p>
                  <p className="text-sm text-gray-400 mt-1">Search by name, brand, or features</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
