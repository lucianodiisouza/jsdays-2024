// Object Literal

// type Person = {
//   name: string
//   age: number
//   isMarried: boolean
// }

// Interface Types

interface CreditCard {
  cardNumber: string
  cardholderName: string
  expirationDate: string
  cvv: string
  cardType: string
  isExpired: boolean
}

// Type Alias Types
type Age = number | string | boolean
type Name = string

// type Person = {
//   name: Name
//   age: Age
// }

// Class Types
class Person {
    constructor(public name: string, private age: number) {}
}

type PersonType = Person;

const john: PersonType = new Person('John Doe', 30);

// Array Types
type amount = number[]
type count = Array<CreditCard>
