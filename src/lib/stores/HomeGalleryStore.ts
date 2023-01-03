import { writable } from "svelte/store"

const images1 = [
  '/products/white-carrara.webp',
  '/products/vietnam-white.webp',
  '/products/quartz-white.webp',
  '/products/diana-royal.webp',
  '/products/pietra-gray.webp',
  '/products/atlas.webp',
  '/products/nero-picasso.webp',
  '/products/arabescato-light.webp'
]
const images2 =
[
  '/products/panda-white.webp',
  '/products/moon-cream.webp',
  '/products/travertino-navona.webp',
  '/products/levanto-rose.webp',
  '/products/silver-dore.webp',
  '/products/dark-maroon.webp',
  '/products/blue-ocean.webp',
  '/products/rustic.webp'
]
const data = [
  images1,
  images2
]

const HomeGalleryImages = writable(data);
export default HomeGalleryImages;