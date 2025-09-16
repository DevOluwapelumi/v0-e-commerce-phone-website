"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useFavorites } from "@/lib/favorites-context"
import { getAllPhones, type Phone } from "@/lib/phone-api"
import Image from "next/image"
import Link from "next/link"

export function ProductShowcase() {
  const [phones, setPhones] = useState<Phone[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { dispatch: cartDispatch } = useCart()
  const { dispatch: favoritesDispatch } = useFavorites()

  useEffect(() => {
    const loadPhones = async () => {
      try {
        const allPhones = await getAllPhones()
        setPhones(allPhones)
      } catch (error) {
        console.error("Failed to load phones:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadPhones()
  }, [])

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

  if (isLoading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Smartphones</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the latest and greatest smartphones with cutting-edge technology and premium design
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Smartphones</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the latest and greatest smartphones with cutting-edge technology and premium design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phones.map((phone) => (
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
                  <h3 className="font-semibold text-lg text-card-foreground">{phone.name}</h3>

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

        <div className="text-center mt-12">
          <Link href="/products">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
