import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;

  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;

  background-color: ${(props) => props.theme.background};
`

export const HeaderWrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface InfoProps {
  variant: 'purple' | 'yellow'
}

export const Info = styled.div<InfoProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme[props.variant]};
  background-color: ${(props) => props.theme[`${props.variant}-light`]};
  border-radius: 6px;
  padding: 0.5rem;
  position: relative;
`
export const CartQuantity = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`
