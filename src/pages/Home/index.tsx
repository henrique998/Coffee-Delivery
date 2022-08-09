import { Hero } from '../../components/Hero'
import { Menu } from '../../components/Menu'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Menu />
    </HomeContainer>
  )
}
