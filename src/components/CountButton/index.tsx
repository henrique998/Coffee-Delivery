import { Minus, Plus } from 'phosphor-react'

import { CountButtonContainer, CountButtonItem } from './styles'

interface CountButtonProps {
  onIncrement: () => void
  onDecrement: () => void
  quantityValue: number
}

export function CountButton({
  onIncrement,
  onDecrement,
  quantityValue,
}: CountButtonProps) {
  return (
    <CountButtonContainer>
      <CountButtonItem
        disabled={quantityValue <= 1}
        type="button"
        onClick={onDecrement}
      >
        <Minus size={12} weight={'fill'} />
      </CountButtonItem>

      <input type="number" value={quantityValue} readOnly />

      <CountButtonItem type="button" onClick={onIncrement}>
        <Plus size={12} weight={'fill'} />
      </CountButtonItem>
    </CountButtonContainer>
  )
}
