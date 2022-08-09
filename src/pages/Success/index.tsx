import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import deliverymanImg from '../../assets/deliveryman.svg'

import {
  SuccessContainer,
  SuccessInfoContainer,
  IconContainer,
  SuccessInfoBox,
} from './styles'

export function Success() {
  const { purple, yellow, 'yellow-dark': yellowDark } = useContext(ThemeContext)

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <SuccessInfoContainer>
        <SuccessInfoBox>
          <li>
            <IconContainer bgColor={purple}>
              <MapPin size={16} weight={'fill'} />
            </IconContainer>
            <span>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />
              Farrapos - Porto Alegre, RS
            </span>
          </li>

          <li>
            <IconContainer bgColor={yellow}>
              <Timer size={16} weight={'fill'} />
            </IconContainer>
            <div>
              <span>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </li>

          <li>
            <IconContainer bgColor={yellowDark}>
              <CurrencyDollar size={16} weight={'fill'} />
            </IconContainer>
            <div>
              <span>
                Pagamento na entrega <br /> <strong> Cartão de Crédito</strong>
              </span>
            </div>
          </li>
        </SuccessInfoBox>
        <img src={deliverymanImg} alt="deliveryman ilustration" />
      </SuccessInfoContainer>
    </SuccessContainer>
  )
}
