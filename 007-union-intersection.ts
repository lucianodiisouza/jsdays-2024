// Union Type
type Age = string | number

// Intersection Type using &
type Email = {
  email: string
}

type Person = {
  name: string
  age: Age
}

const person: Person & Email = {
  name: 'foo',
  age: 30,
  email: 'email@com'
}
