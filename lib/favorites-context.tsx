"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"

export interface FavoriteItem {
  id: string
  name: string
  price: number
  image: string
  color?: string
  storage?: string
}

interface FavoritesState {
  items: FavoriteItem[]
}

type FavoritesAction =
  | { type: "ADD_FAVORITE"; payload: FavoriteItem }
  | { type: "REMOVE_FAVORITE"; payload: string }
  | { type: "LOAD_FAVORITES"; payload: FavoriteItem[] }

const FavoritesContext = createContext<{
  state: FavoritesState
  dispatch: React.Dispatch<FavoritesAction>
} | null>(null)

function favoritesReducer(state: FavoritesState, action: FavoritesAction): FavoritesState {
  switch (action.type) {
    case "ADD_FAVORITE": {
      const exists = state.items.some((item) => item.id === action.payload.id)
      if (exists) return state

      return {
        ...state,
        items: [...state.items, action.payload],
      }
    }

    case "REMOVE_FAVORITE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    case "LOAD_FAVORITES":
      return {
        ...state,
        items: action.payload,
      }

    default:
      return state
  }
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(favoritesReducer, {
    items: [],
  })

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites")
    if (savedFavorites) {
      try {
        const favoriteItems = JSON.parse(savedFavorites)
        dispatch({ type: "LOAD_FAVORITES", payload: favoriteItems })
      } catch (error) {
        console.error("Failed to load favorites from localStorage:", error)
      }
    }
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.items))
  }, [state.items])

  return <FavoritesContext.Provider value={{ state, dispatch }}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
