/* eslint-disable n/handle-callback-err */
/* eslint-disable react/display-name */
import { WarningCircle } from 'phosphor-react'
import { forwardRef, InputHTMLAttributes } from 'react'
import { InputElement, InputElementContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string | any
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputElementContainer className={className}>
        <InputElement {...props} ref={ref} isError={!!error} />

        {error && (
          <span title={error}>
            <WarningCircle size={20} /> {error}
          </span>
        )}
      </InputElementContainer>
    )
  },
)
