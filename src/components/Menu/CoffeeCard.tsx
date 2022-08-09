import {
  CoffeeCardContainer,
  TagsContainer,
  Tag,
  Price,
  Buttons,
  CartButton,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { CountButton } from '../CountButton'
import { useCart } from '../../hooks'
import { useState } from 'react'
import { formatMoney } from '../../utils'

interface TagContent {
  id: number
  name: string
}

interface CoffeeCardProps {
  id: number
  img: string
  title: string
  tags: TagContent[]
  description: string
  price: number
}

export function CoffeeCard({
  id,
  img,
  tags,
  title,
  description,
  price,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { addCoffeeToCart } = useCart()

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddCoffeeToCart() {
    const coffee = {
      id,
      img,
      tags,
      title,
      description,
      price,
      quantity,
    }

    addCoffeeToCart(coffee)
  }

  return (
    <CoffeeCardContainer>
      <img src={img} alt="coffee image" />

      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag.id}>
            <strong>{tag.name.toUpperCase()}</strong>
          </Tag>
        ))}
      </TagsContainer>

      <h2>{title}</h2>

      <p>{description}</p>

      <footer>
        <Price>
          R$ <strong>{formatMoney(price)}</strong>
        </Price>

        <Buttons>
          <CountButton
            onIncrement={handleIncrementQuantity}
            onDecrement={handleDecrementQuantity}
            quantityValue={quantity}
          />

          <CartButton type="button" onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight={'fill'} />
          </CartButton>
        </Buttons>
      </footer>
    </CoffeeCardContainer>
  )
}
