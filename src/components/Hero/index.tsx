import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import heroImage from '../../assets/hero-image.png'

import {
  HeroContainer,
  TextsContainer,
  IconContainer,
  HeroWrapper,
} from './styles'

export function Hero() {
  const {
    yellow,
    purple,
    'yellow-dark': yellowDark,
    'gray-600': gray,
  } = useContext(ThemeContext)

  return (
    <HeroContainer>
      <HeroWrapper>
        <TextsContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul>
            <li>
              <IconContainer bgColor={yellowDark}>
                <ShoppingCart size={16} weight={'fill'} />
              </IconContainer>
              <span>Compra simples e segura</span>
            </li>

            <li>
              <IconContainer bgColor={gray}>
                <Package size={16} weight={'fill'} />
              </IconContainer>
              <span>Compra simples e segura</span>
            </li>

            <li>
              <IconContainer bgColor={yellow}>
                <Timer size={16} weight={'fill'} />
              </IconContainer>
              <span>Compra simples e segura</span>
            </li>

            <li>
              <IconContainer bgColor={purple}>
                <Coffee size={16} weight={'fill'} />
              </IconContainer>
              <span>Compra simples e segura</span>
            </li>
          </ul>
        </TextsContainer>

        <img src={heroImage} alt="hero image" />
      </HeroWrapper>
    </HeroContainer>
  )
}
