import { writable } from "svelte/store"

let theme = 'light'

const Theme = writable(theme)

export default Theme