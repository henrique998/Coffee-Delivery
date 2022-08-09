import styled from 'styled-components'

import heroBg from '../../assets/hero-bg.png'

export const HeroContainer = styled.section`
  height: calc(100vh - 6.5rem);

  background: url(${heroBg}) no-repeat center;
  background-size: cover;
`

export const HeroWrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const TextsContainer = styled.div`
  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme['black-900']};
    line-height: 62.4px;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['black-800']};
    line-height: 1.625rem;
  }

  ul {
    margin-top: 4.125rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      span {
        color: ${(props) => props.theme['gray-600']};
        font-size: 1rem;
        line-height: 1.25rem;
      }
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
