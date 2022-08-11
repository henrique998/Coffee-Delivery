/* eslint-disable react-hooks/exhaustive-deps */
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import deliverymanImg from '../../assets/deliveryman.svg'
import { PaymenMethod } from '../Checkout'

import {
  SuccessContainer,
  SuccessInfoContainer,
  IconContainer,
  SuccessInfoBox,
} from './styles'

type LocationType = {
  state: {
    street: string
    number: string
    district: string
    city: string
    uf: string
    paymentMethod: PaymenMethod
  }
}

const paymentMethods = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  money: 'Dinheiro',
}

export function Success() {
  const { purple, yellow, 'yellow-dark': yellowDark } = useContext(ThemeContext)

  const navigate = useNavigate()

  const { state } = useLocation() as unknown as LocationType

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) {
    return <></>
  }

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
              Entrega em{' '}
              <strong>
                {state.street}, {state.number}
              </strong>{' '}
              <br />
              {state.district} - {state.city}, {state.uf.toUpperCase()}
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
                Pagamento na entrega <br />{' '}
                <strong> {paymentMethods[state.paymentMethod]}</strong>
              </span>
            </div>
          </li>
        </SuccessInfoBox>
        <img src={deliverymanImg} alt="deliveryman ilustration" />
      </SuccessInfoContainer>
    </SuccessContainer>
  )
}
