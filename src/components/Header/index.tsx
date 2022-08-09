import {
  HeaderContainer,
  InfoContainer,
  Info,
  HeaderWrapper,
  CartQuantity,
} from './styles'

import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <img className="logo" src={logoImg} alt="logotipo" />
        </Link>

        <InfoContainer>
          <Info variant="purple">
            <MapPin size={22} weight={'fill'} />
            <span>Porto Alegre, RS</span>
          </Info>

          <Link to="/checkout">
            <Info variant="yellow">
              {cartQuantity >= 1 && <CartQuantity>{cartQuantity}</CartQuantity>}
              <ShoppingCart size={22} weight={'fill'} />
            </Info>
          </Link>
        </InfoContainer>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
