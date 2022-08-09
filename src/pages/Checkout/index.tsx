import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

// import { Input } from '../../components/Input'
import { SelectedCoffee } from '../../components/SelectedCoffee'
import { useCart } from '../../hooks'
import { formatMoney } from '../../utils'

import {
  CheckoutContainer,
  CheckoutForm,
  OrderDetailsContainer,
  OrderDetailsBox,
  FieldsContainer,
  PaymentMethodBox,
  PaymentoOptionsBox,
  PaymentoOption,
  ConfirmOrderContainer,
  ConfirmOrderBox,
  TotalBox,
  ConfirmOrderButton,
  ItemsLenghtMessage,
} from './styles'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import toast from 'react-hot-toast'

type PaymenMethod = 'credit_card' | 'debit_card' | 'money'

const CartDelivery = 3.5

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe um cep válido'),
  street: zod.string().min(1, 'Informe uma rua'),
  number: zod.string().min(1, 'Informe um número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe um bairro'),
  city: zod.string().min(1, 'Informe uma cidade'),
  uf: zod.string().min(1, 'uf'),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<PaymenMethod | ''>('')

  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const { cartItems, coffeesTotal } = useCart()

  const cartTotal = CartDelivery + coffeesTotal

  function handleCompleteOrder(data: CheckoutFormData) {
    if (!paymentMethod.trim()) {
      toast.error('Escolha um método de pagamento', {
        position: 'top-left',
      })
      return
    }

    localStorage.removeItem('coffeeDelivery:cart')

    navigate('/success')
  }

  const { errors } = formState

  return cartItems.length >= 1 ? (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit(handleCompleteOrder)}>
        <OrderDetailsContainer>
          <h2>Complete seu pedido</h2>

          <OrderDetailsBox>
            <header>
              <MapPinLine size={22} />

              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <FieldsContainer>
              <Input
                {...register('cep')}
                placeholder="CEP"
                className="cep"
                type="text"
                error={errors.cep?.message}
              />
              <Input
                {...register('street')}
                placeholder="RUA"
                className="street"
                type="text"
                error={errors.street?.message}
              />
              <Input
                {...register('number')}
                placeholder="NÚMERO"
                className="number"
                type="number"
                error={errors.number?.message}
              />
              <Input
                {...register('complement')}
                placeholder="COMPLEMENTO (Opcional)"
                className="complement"
                type="text"
                error={errors.complement?.message}
              />
              <Input
                {...register('district')}
                placeholder="BAIRRO"
                className="district"
                type="text"
                error={errors.district?.message}
              />
              <Input
                {...register('city')}
                placeholder="CIDADE"
                className="city"
                type="text"
                error={errors.city?.message}
              />
              <Input
                {...register('uf')}
                placeholder="UF"
                // className="uf"
                type="text"
                error={errors.uf?.message}
              />
            </FieldsContainer>
          </OrderDetailsBox>

          <PaymentMethodBox>
            <header>
              <CurrencyDollar size={22} weight={'fill'} />

              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <PaymentoOptionsBox>
              <PaymentoOption
                onClick={() => setPaymentMethod('credit_card')}
                isActive={paymentMethod === 'credit_card'}
              >
                <CreditCard size={16} />
                <label>Cartão de crédito</label>
              </PaymentoOption>

              <PaymentoOption
                onClick={() => setPaymentMethod('debit_card')}
                isActive={paymentMethod === 'debit_card'}
              >
                <Bank size={16} />
                <label>Cartão de débito</label>
              </PaymentoOption>

              <PaymentoOption
                onClick={() => setPaymentMethod('money')}
                isActive={paymentMethod === 'money'}
              >
                <Money size={16} />
                <label>Dinheiro</label>
              </PaymentoOption>
            </PaymentoOptionsBox>
          </PaymentMethodBox>
        </OrderDetailsContainer>

        <ConfirmOrderContainer>
          <h2>Cafés selecionados</h2>

          <ConfirmOrderBox>
            <ul>
              {cartItems?.map((cartItem) => (
                <SelectedCoffee key={cartItem.id} coffee={cartItem} />
              ))}
            </ul>

            <TotalBox>
              <div>
                <span>Total de ítens</span>

                <span className="price">R$ {formatMoney(coffeesTotal)}</span>
              </div>

              <div>
                <span>Entrega</span>

                <span className="price">R$ {formatMoney(CartDelivery)}</span>
              </div>

              <div>
                <strong>Total</strong>

                <strong>R$ {formatMoney(cartTotal)}</strong>
              </div>
            </TotalBox>

            <ConfirmOrderButton type="submit" disabled={coffeesTotal <= 0}>
              CONFIRMAR PEDIDO
            </ConfirmOrderButton>
          </ConfirmOrderBox>
        </ConfirmOrderContainer>
      </CheckoutForm>
    </CheckoutContainer>
  ) : (
    <ItemsLenghtMessage>
      <h1>Você ainda não possui itens no carrinho!</h1>
    </ItemsLenghtMessage>
  )
}
