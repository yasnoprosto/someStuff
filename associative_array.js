const users1 = {
    '0': 'Dok',
    '1': 'Day',
    '2': 'Don',
    '3': 'Duk',
}

const user = { id: 100500, name: "Igor"}

const users2 = {
    '101': {id: 101, name: "Red"},
    '102321': {id: 102321, name: "Rin"},
    '11101': {id: 11101, name: "Rok"},
    '12101': {id: 12101, name: "Ruf"},
}

const users3 = [
    {id: 101, name: "Red"},
    {id: 102321, name: "Rin"},
    {id: 11101, name: "Rok"},
    {id: 12101, name: "Ruf"},
]

users2[user.id] = user

users3.push(user);

users3copy = [...users3, user]

console.log(users2)
console.log(users3)
console.log(users3copy)

delete users1["2"]
console.log(users1)