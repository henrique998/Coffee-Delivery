import { ReactNode } from 'react'
import { CartContextProvider } from './CartContext'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}
