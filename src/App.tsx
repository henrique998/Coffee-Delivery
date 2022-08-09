import { Toaster } from 'react-hot-toast'

import { Providers } from './contexts/providers'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <Providers>
      <Router />

      <Toaster />

      <GlobalStyles />
    </Providers>
  )
}

export default App
