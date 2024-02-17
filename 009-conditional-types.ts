type MyType<T> = T extends 'string'
  ? string
  : T extends 'number'
  ? number
  : unknown

function getValue<T extends 'string' | 'number'>(type: T): MyType<T> {
  switch (type) {
    case 'string':
      return 'Hello, TypeScript!' as MyType<T>
    case 'number':
      return 42 as MyType<T>
    default:
      throw new Error('Invalid type')
  }
}

const stringValue: string = getValue('string') // Type inference: string
const numberValue: number = getValue('number') // Type inference: number

// const arrayValue: number[] = getValue('array')
