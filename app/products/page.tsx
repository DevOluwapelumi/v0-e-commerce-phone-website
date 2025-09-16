"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Heart, ShoppingCart, Search, Filter } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useFavorites } from "@/lib/favorites-context"
import { getAllPhones, searchPhones, type Phone } from "@/lib/phone-api"
import Image from "next/image"

export default function ProductsPage() {
  const [phones, setPhones] = useState<Phone[]>([])
  const [filteredPhones, setFilteredPhones] = useState<Phone[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const { dispatch: cartDispatch } = useCart()
  const { dispatch: favoritesDispatch } = useFavorites()

  // Load all phones on component mount
  useEffect(() => {
    const loadPhones = async () => {
      try {
        const allPhones = await getAllPhones()
        setPhones(allPhones)
        setFilteredPhones(allPhones)
      } catch (error) {
        console.error("Failed to load phones:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadPhones()
  }, [])

  // Handle search and filtering
  useEffect(() => {
    const filterPhones = async () => {
      let result = phones

      // Apply search filter
      if (searchQuery.trim()) {
        result = await searchPhones(searchQuery)
      }

      // Apply brand filter
      if (selectedBrand !== "all") {
        result = result.filter((phone) => phone.brand.toLowerCase() === selectedBrand.toLowerCase())
      }

      // Apply sorting
      result = [...result].sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "rating":
            return b.rating - a.rating
          case "name":
          default:
            return a.name.localeCompare(b.name)
        }
      })

      setFilteredPhones(result)
    }

    filterPhones()
  }, [searchQuery, selectedBrand, sortBy, phones])

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

  const uniqueBrands = Array.from(new Set(phones.map((phone) => phone.brand)))

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
            <p className="text-lg text-muted-foreground">Loading our complete smartphone collection...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">All Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our complete collection of premium smartphones from top brands
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search phones, brands, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-[140px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {uniqueBrands.map((brand) => (
                  <SelectItem key={brand} value={brand.toLowerCase()}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPhones.length} of {phones.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredPhones.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No products found matching your criteria</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedBrand("all")
                setSortBy("name")
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhones.map((phone) => (
              <Card
                key={phone.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src={phone.image || "/placeholder.svg"}
                      alt={phone.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-primary">
                      {phone.originalPrice ? "Sale" : "Featured"}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                      onClick={() => addToFavorites(phone)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg text-card-foreground">{phone.name}</h3>
                      <p className="text-sm text-muted-foreground">{phone.brand}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{phone.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({phone.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">${phone.price}</span>
                      {phone.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${phone.originalPrice}</span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {phone.colors.slice(0, 3).map((color, index) => (
                        <span key={index} className="text-xs text-muted-foreground">
                          {color}
                          {index < 2 && index < phone.colors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                      {phone.colors.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{phone.colors.length - 3} more</span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">{phone.description}</p>

                    <Button
                      className="w-full mt-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
                      onClick={() => addToCart(phone)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
