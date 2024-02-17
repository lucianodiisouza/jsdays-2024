type name = string

type age = string | number

type UserPropsA = {
  name: name
  lastName: string
  age: age
  superPowers?: string[]
}

type Users = UserPropsA[]

const user: UserPropsA = {
  name: 'Luciano',
  lastName: 'Souza',
  age: 32,
}
