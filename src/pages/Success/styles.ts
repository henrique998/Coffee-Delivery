import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;

  > h1 {
    font-weight: 800;
    font-size: 32px;
    color: ${(props) => props.theme['yellow-dark']};
  }

  > p {
    font-size: 20px;
    color: ${(props) => props.theme['black-800']};
  }
`

export const SuccessInfoContainer = styled.section`
  margin-top: 2.5rem;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 6.375rem;
`

export const SuccessInfoBox = styled.ul`
  flex: 1;

  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  min-width: 32rem;
  position: relative;
  background-color: ${(props) => props.theme.background};

  &::before {
    content: '';
    position: absolute;
    inset: -1.5px;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    z-index: -1;
  }

  display: grid;
  gap: 2rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    span {
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }
`

interface IconContainerProps {
  bgColor: string
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${(props) => props.bgColor};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.white};
  }
`
