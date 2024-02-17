interface Car {
  doors: number
  wheels: number
}

// BAD
interface MartyMcFlyCarBad {
  doors: number
  wheels: number
  useRocketFuel: boolean
  timeTravelEnabled: boolean
}






// GOOD
interface MartyMcFlyCar extends Car {
  useRocketFuel: boolean
  timeTravelEnabled: boolean
}

// Declaration Merging

// type House = {
//   address: string
// }

// type House = {
//   city: string
// }

interface Laptop {
  brand: string
}

interface Laptop {
  cpu: string
}

const laptop: Laptop = {
  brand: 'Apple',
  cpu: 'M3',
}
