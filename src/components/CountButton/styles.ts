import styled from 'styled-components'

export const CountButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.125rem;
  max-width: 4.375rem;

  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['gray-300']};

  input {
    width: 100%;
    text-align: center;
    background: transparent;
    border: none;
    cursor: auto;

    color: ${(props) => props.theme['black-900']};

    &:focus {
      outline: none;
    }
  }
`

export const CountButtonItem = styled.button`
  color: ${(props) => props.theme.purple};
`
