import coffeeImg1 from '../../assets/coffee1.png'
import coffeeImg2 from '../../assets/coffee2.png'
import coffeeImg3 from '../../assets/coffee3.png'
import coffeeImg4 from '../../assets/coffee4.png'
import coffeeImg5 from '../../assets/coffee5.png'
import coffeeImg6 from '../../assets/coffee6.png'
import coffeeImg7 from '../../assets/coffee7.png'
import coffeeImg8 from '../../assets/coffee8.png'
import coffeeImg9 from '../../assets/coffee9.png'
import coffeeImg10 from '../../assets/coffee10.png'
import coffeeImg11 from '../../assets/coffee11.png'
import coffeeImg12 from '../../assets/coffee12.png'
import coffeeImg13 from '../../assets/coffee13.png'
import coffeeImg14 from '../../assets/coffee14.png'

interface TagContent {
  id: number
  name: string
}

interface CoffeeCardData {
  id: number
  img: string
  title: string
  tags: TagContent[]
  description: string
  price: number
}

export const coffees: CoffeeCardData[] = [
  {
    id: 1,
    img: coffeeImg1,
    title: 'Expresso Tradicional',
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
    ],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    img: coffeeImg2,
    title: 'Expresso Americano',
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
    ],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    img: coffeeImg3,
    title: 'Expresso Cremoso',
    tags: [
      {
        id: 1,
        name: 'Tradicional',
      },
    ],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    img: coffeeImg4,
    title: 'Expresso Gelado',
    tags: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
      {
        id: 2,
        name: 'GELADO',
      },
    ],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    img: coffeeImg5,
    title: 'Café com Leite',
    tags: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
      {
        id: 2,
        name: 'COM LEITE',
      },
    ],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    img: coffeeImg6,
    title: 'Latte',
    tags: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
      {
        id: 2,
        name: 'COM LEITE',
      },
    ],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    img: coffeeImg7,
    title: 'Capuccino',
    tags: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
      {
        id: 2,
        name: 'COM LEITE',
      },
    ],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    img: coffeeImg8,
    title: 'Macchiato',
    tags: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
      {
        id: 2,
        name: 'COM LEITE',
      },
    ],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    img: coffeeImg9,
    title: 'Mocaccino',
    tags: [
      {
        id: 1,
        name: 'TRADICIONAL',
      },
      {
        id: 2,
        name: 'COM LEITE',
      },
    ],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 1,
    img: coffeeImg10,
    title: 'Chocolate Quente',
    tags: [
      {
        id: 1,
        name: 'ESPECIAL',
      },
      {
        id: 2,
        name: 'COM LEITE',
      },
    ],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    img: coffeeImg11,
    title: 'Cubano',
    tags: [
      {
        id: 1,
        name: 'ESPECIAL',
      },
      {
        id: 2,
        name: 'ALCOÓLICO',
      },
      {
        id: 3,
        name: 'GELADO',
      },
    ],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    img: coffeeImg12,
    title: 'Havaiano',
    tags: [
      {
        id: 1,
        name: 'ESPECIAL',
      },
    ],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    img: coffeeImg13,
    title: 'Árabe',
    tags: [
      {
        id: 1,
        name: 'ESPECIAL',
      },
    ],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    img: coffeeImg14,
    title: 'Irlandês',
    tags: [
      {
        id: 1,
        name: 'ESPECIAL',
      },
      {
        id: 2,
        name: 'ALCOÓLICO',
      },
    ],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
