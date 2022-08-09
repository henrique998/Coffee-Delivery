import { Trash } from 'phosphor-react'
import { CartItem } from '../../contexts/CartContext'

import { CountButton } from '../../components/CountButton'

import {
  SelectedCoffeeContainer,
  CoffeeDetails,
  CoffeeInfoButtonsBox,
  RemoveCoffeeButton,
} from './styles'
import { formatMoney } from '../../utils'
import { useCart } from '../../hooks'

interface SelectedCoffeeProps {
  coffee: CartItem
}

export function SelectedCoffee({ coffee }: SelectedCoffeeProps) {
  const { updateCoffeeQuantity, removeCoffee } = useCart()

  const total = coffee.price * coffee.quantity

  const formmatedPrice = formatMoney(total)

  function handleIncrementCoffeeQuantity() {
    updateCoffeeQuantity({ coffeeId: coffee.id, type: 'increment' })
  }

  function handleDecrementCoffeeQuantity() {
    updateCoffeeQuantity({ coffeeId: coffee.id, type: 'decrement' })
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee.id)
  }

  return (
    <SelectedCoffeeContainer>
      <CoffeeDetails>
        <img src={coffee.img} alt="coffee image" />

        <div>
          <h3>{coffee.title}</h3>
          <CoffeeInfoButtonsBox>
            <CountButton
              onIncrement={handleIncrementCoffeeQuantity}
              onDecrement={handleDecrementCoffeeQuantity}
              quantityValue={coffee.quantity}
            />
            <RemoveCoffeeButton type="button" onClick={handleRemoveCoffee}>
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveCoffeeButton>
          </CoffeeInfoButtonsBox>
        </div>

        <strong>R$ {formmatedPrice}</strong>
      </CoffeeDetails>
    </SelectedCoffeeContainer>
  )
}
