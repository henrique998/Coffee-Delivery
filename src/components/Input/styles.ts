import styled from 'styled-components'

interface InputElementContainerProps {
  isError?: boolean
}

export const InputElementContainer = styled.div`
  display: grid;
  gap: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.red};
    font-size: 0.875rem;
  }
`

export const InputElement = styled.input<InputElementContainerProps>`
  height: 2.625rem;
  padding: 0.75rem;
  background-color: ${(props) => props.theme['gray-200']};
  border: 1px solid
    ${(props) => (props.isError ? props.theme.red : props.theme['gray-300'])};
  border-radius: 4px;
  outline: none;
  font-size: 0.875rem;
  width: 100%;

  &:focus {
    border: 1px solid ${(props) => props.theme.yellow};
  }

  &::placeholder {
    color: ${(props) =>
      props.isError ? props.theme.red : props.theme['gray-500']};
  }
`
