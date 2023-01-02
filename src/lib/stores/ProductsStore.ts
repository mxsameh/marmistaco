import { writable } from "svelte/store";

const data = 
[
  {
    id: 0,
    name: 'afyon sugar',
    image: '/products/afyon-sugar.webp',
    link: '/products/afyon-sugar'
  },
  {
    id: 1,
    name: 'arabescato dark',
    image: '/products/arabescato-dark.webp',
    link: '/products/arabescato-dark'
  },
  {
    id: 2,
    name: 'arabescato light',
    image: '/products/arabescato-light.webp',
    link: '/products/arabescato-light'
  },
  {
    id: 3,
    name: 'atlas',
    image: '/products/atlas.webp',
    link: '/products/atlas'
  },
  {
    id: 4,
    name: 'avalanche platinum',
    image: '/products/avalanche-platinum.webp',
    link: '/products/avalanche-platinum'
  },
  {
    id: 5,
    name: 'blue ocean',
    image: '/products/blue-ocean.webp',
    link: '/products/blue-ocean'
  },
  {
    id: 6,
    name: 'classic beige',
    image: '/products/classic-beige.webp',
    link: '/products/classic-beige'
  },
  {
    id: 7,
    name: 'dark maroon',
    image: '/products/dark-maroon.webp',
    link: '/products/dark-maroon'
  },
  {
    id: 8,
    name: 'dark tiger',
    image: '/products/dark-tiger.webp',
    link: '/products/dark-tiger'
  },
  {
    id: 9,
    name: 'desert',
    image: '/products/desert.webp',
    link: '/products/desert'
  },
  {
    id: 10,
    name: 'diana royal',
    image: '/products/diana-royal.webp',
    link: '/products/diana-royal'
  },
  {
    id: 11,
    name: 'dragon black',
    image: '/products/dragon-black.webp',
    link: '/products/dragon-black'
  },
  {
    id: 12,
    name: 'gray emperador',
    image: '/products/gray-emperador.webp',
    link: '/products/gray-emperador'
  },
  {
    id: 13,
    name: 'kemal pasha',
    image: '/products/kemal-pasha.webp',
    link: '/products/kemal-pasha'
  },
  {
    id: 14,
    name: 'levanto rose',
    image: '/products/levanto-rose.webp',
    link: '/products/levanto-rose'
  },
  {
    id: 15,
    name: 'lilac',
    image: '/products/lilac.webp',
    link: '/products/lilac'
  },
  {
    id: 16,
    name: 'limra',
    image: '/products/limra.webp',
    link: '/products/limra'
  },
  {
    id: 17,
    name: 'marin black',
    image: '/products/marin-black.webp',
    link: '/products/marin-black'
  },
  {
    id: 18,
    name: 'marmara',
    image: '/products/marmara.webp',
    link: '/products/marmara'
  },
  {
    id: 19,
    name: 'moon cream',
    image: '/products/moon-cream.webp',
    link: '/products/moon-cream'
  },
  {
    id: 20,
    name: 'nero picasso',
    image: '/products/nero-picasso.webp',
    link: '/products/nero-picasso'
  },
  {
    id: 21,
    name: 'nova cream',
    image: '/products/nova-cream.webp',
    link: '/products/nova-cream'
  },
  {
    id: 22,
    name: 'ottoman',
    image: '/products/ottoman.webp',
    link: '/products/ottoman'
  },
  {
    id: 23,
    name: 'panda white',
    image: '/products/panda-white.webp',
    link: '/products/panda-white'
  },
  {
    id: 24,
    name: 'pietra gray',
    image: '/products/pietra-gray.webp',
    link: '/products/pietra-gray'
  },
  {
    id: 25,
    name: 'quartz white',
    image: '/products/quartz-white.webp',
    link: '/products/quartz-white'
  },
  {
    id: 26,
    name: 'rustic',
    image: '/products/rustic.webp',
    link: '/products/rustic'
  },
  {
    id: 27,
    name: 'silver dore',
    image: '/products/silver-dore.webp',
    link: '/products/silver-dore'
  },
  {
    id: 28,
    name: 'silver afyon',
    image: '/products/silver-afyon.webp',
    link: '/products/silver-afyon'
  },
  {
    id: 29,
    name: 'travertine',
    image: '/products/travertine.webp',
    link: '/products/travertine'
  },
  {
    id: 30,
    name: 'travertino navona',
    image: '/products/travertino-navona.webp',
    link: '/products/travertino-navona'
  },
  {
    id: 31,
    name: 'tundra',
    image: '/products/tundra.webp',
    link: '/products/tundra'
  },
  {
    id: 32,
    name: 'versace',
    image: '/products/versace.webp',
    link: '/products/versace'
  },
  {
    id: 33,
    name: 'vietnam white',
    image: '/products/vietnam-white.webp',
    link: '/products/vietnam-white'
  },
  {
    id: 34,
    name: 'white carrara',
    image: '/products/white-carrara.webp',
    link: '/products/white-carrara'
  }
]

const Products = writable(data)


export default Products;