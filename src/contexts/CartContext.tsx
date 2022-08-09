import { createContext, ReactNode, useEffect, useState } from 'react'
import { produce } from 'immer'

type Tag = {
  id: number
  name: string
}

export type CartItem = {
  id: number
  img: string
  title: string
  tags: Tag[]
  description: string
  price: number
  quantity: number
}

type CoffeDataToUpdate = {
  coffeeId: number
  type: 'increment' | 'decrement'
}

interface CartContextData {
  cartItems: CartItem[]
  addCoffeeToCart: (cofee: CartItem) => void
  cartQuantity: number
  updateCoffeeQuantity: (data: CoffeDataToUpdate) => void
  removeCoffee: (coffeeId: number) => void
  coffeesTotal: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storagedCartCoffees = localStorage.getItem('coffeeDelivery:cart')

    if (storagedCartCoffees) {
      return JSON.parse(storagedCartCoffees)
    }

    return []
  })

  const cartQuantity = cartItems.length

  const coffeesTotal = cartItems.reduce((prevValue, coffee) => {
    return prevValue + coffee.price * coffee.quantity
  }, 0)

  function addCoffeeToCart(item: CartItem) {
    const coffeeIndex = cartItems.findIndex((coffee) => coffee.id === item.id)

    const newCart = produce(cartItems, (draft) => {
      if (coffeeIndex < 0) {
        draft.push(item)
      } else {
        draft[coffeeIndex].quantity += item.quantity
      }
    })

    setCartItems(newCart)
  }

  function updateCoffeeQuantity({ coffeeId, type }: CoffeDataToUpdate) {
    const coffeeIndex = cartItems.findIndex((coffee) => coffee.id === coffeeId)

    const updatedCoffee = produce(cartItems, (draft) => {
      if (coffeeIndex >= 0) {
        const coffee = draft[coffeeIndex]

        draft[coffeeIndex].quantity =
          type === 'increment' ? coffee.quantity + 1 : coffee.quantity - 1
      }
    })

    setCartItems(updatedCoffee)
  }

  function removeCoffee(coffeeId: number) {
    const coffeeIndex = cartItems.findIndex((coffee) => coffee.id === coffeeId)

    const filteredCoffees = produce(cartItems, (draft) => {
      if (coffeeIndex >= 0) {
        draft.splice(coffeeIndex, 1)
      }
    })

    setCartItems(filteredCoffees)
  }

  useEffect(() => {
    localStorage.setItem('coffeeDelivery:cart', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        updateCoffeeQuantity,
        removeCoffee,
        coffeesTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
