import { CoffeeCard } from './CoffeeCard'

import { coffees } from './data'

import { MenuContainer } from './styles'

export function Menu() {
  return (
    <MenuContainer>
      <h2>Nossos cafés</h2>

      <ul>
        {coffees.map((coffee) => (
          <li key={coffee.id}>
            <CoffeeCard
              id={coffee.id}
              img={coffee.img}
              tags={coffee.tags}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
            />
          </li>
        ))}
      </ul>
    </MenuContainer>
  )
}
