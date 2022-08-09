import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-bottom: 9.8rem;
  height: calc(100vh - 6.5rem);
`

export const CheckoutForm = styled.form`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
`

export const OrderDetailsContainer = styled.div`
  h2 {
    color: ${(props) => props.theme['black-800']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.4375rem;
    margin-bottom: 1rem;
  }
`

export const OrderDetailsBox = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  padding: 2rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    h3 {
      line-height: 1.25rem;
      color: ${(props) => props.theme['black-800']};
      font-size: 1rem;
    }

    p {
      color: ${(props) => props.theme['gray-600']};
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
`

export const FieldsContainer = styled.div`
  margin-top: 2rem;

  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .number {
    grid-column: span 1;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentMethodBox = styled.div`
  margin-top: 0.75rem;

  background-color: ${(props) => props.theme['gray-100']};
  padding: 2.5rem;
  border-radius: 6px;

  flex: 1;

  header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.purple};
    }

    h3 {
      line-height: 1.25rem;
      color: ${(props) => props.theme['black-800']};
      font-size: 1rem;
    }

    p {
      color: ${(props) => props.theme['gray-600']};
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
`

export const PaymentoOptionsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-top: 2rem;
`

interface PaymentoOptionProps {
  isActive: boolean
}

export const PaymentoOption = styled.div<PaymentoOptionProps>`
  padding: 1rem;
  background-color: ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  max-width: 11.125rem;
  width: 100%;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      border: 1px solid ${(props) => props.theme.purple};
    `}

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  label {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-600']};
    cursor: pointer;
  }
`

export const ConfirmOrderContainer = styled.aside`
  width: 28rem;

  h2 {
    color: ${(props) => props.theme['black-800']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.4375rem;
    margin-bottom: 1rem;
  }
`

export const ConfirmOrderBox = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  padding: 2rem;
  border-radius: 6px 44px 6px 44px;

  li + li {
    margin-top: 1.5rem;
    padding-top: 0.5rem;
  }
`

export const TotalBox = styled.div`
  margin-top: 1.5rem;

  display: grid;
  gap: 0.875rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      line-height: 1.125rem;
      color: ${(props) => props.theme['gray-600']};
    }

    span.price {
      font-size: 1rem;
    }

    strong {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.625rem;
      color: ${(props) => props.theme['black-800']};
    }
  }
`

export const ConfirmOrderButton = styled.button`
  margin-top: 1.5rem;

  width: 100%;
  height: 2.875rem;
  line-height: 1.375rem;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  &:disabled {
    filter: brightness(0.8);
    cursor: auto;
  }
`
export const ItemsLenghtMessage = styled.main`
  h1 {
    text-align: center;
    margin-top: 2.5rem;
    color: ${(props) => props.theme['black-900']};
  }
`
