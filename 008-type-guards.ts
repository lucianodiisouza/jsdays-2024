// typeof Type Guard
const person = {
  name: 'Luciano',
  phone: '+5531987654321',
}

const data: typeof person = {
  name: 'Other',
  phone: '+19876544321',
}

// User-defined Type Guard
const payload = []

function isArray(payload: any) {
  return Array.isArray(payload)
}

console.log(isArray(payload)) // true
