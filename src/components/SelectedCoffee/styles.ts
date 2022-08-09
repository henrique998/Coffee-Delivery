import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.li`
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};
  padding-bottom: 2rem;
`

export const CoffeeDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    h3 {
      color: ${(props) => props.theme['black-800']};
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.25rem;
      margin-bottom: 0.5rem;
    }
  }

  strong {
    /* margin-left: auto; */

    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
    width: fit-content;
  }
`

export const CoffeeInfoButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const RemoveCoffeeButton = styled.button`
  background-color: ${(props) => props.theme['gray-300']};
  padding: 0.5rem;
  border-radius: 6px;
  height: 2.5rem;

  display: flex;
  align-items: center;

  span {
    font-size: 0.75rem;
    margin-left: 0.25rem;
  }

  svg {
    line-height: 0;
    color: ${(props) => props.theme.purple};
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }
`
