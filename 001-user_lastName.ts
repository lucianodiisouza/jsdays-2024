const user = {
  name: 'Luciano',
  lastName: 'Souza',
  age: 32,
  superPowers: ['reclamar'],
}

// update ln to enforce the right type
function updateUserDetails(ln) {
  return { ...user, ln }
}

console.log(updateUserDetails('oprimodev'))
