import styled from 'styled-components'

export const MenuContainer = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['black-800']};
    line-height: 2.625rem;
  }

  ul {
    margin-top: 3.375rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2rem;
  }
`

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  max-width: 16rem;
  width: 100%;

  border-radius: 6px 36px 6px 36px;

  padding: 0 1.25rem 1.25rem;

  text-align: center;

  > img {
    margin-top: -10%;

    margin-left: auto;
    margin-right: auto;
  }

  > h2 {
    margin-top: 1rem;

    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['black-800']};
    line-height: 1.625rem;
  }

  > p {
    margin-top: 0.5rem;

    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};
    line-height: 1.125rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Tag = styled.div`
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.125rem 0.5rem;
  width: fit-content;
  border-radius: 100px;
  margin: 0.75rem auto 0;

  strong {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.875rem;
    font-weight: 700;
  }
`

export const Price = styled.div`
  color: ${(props) => props.theme['gray-600']};

  font-weight: 800;

  strong {
    font-size: 1.5rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CartButton = styled.button`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  padding: 0.5rem;

  line-height: 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
