const stuff = [
    {
        name: "John",
        age: 30,
        city: "New York",
        occupation: "Software Engineer"
    },
    {
        name: "Alice",
        age: 25,
        city: "San Francisco",
        occupation: "Product Manager"
    },
    {
        name: "Bob",
        age: 45,
        city: "Seattle",
        occupation: "Sales Manager"
    },
    {
        name: "Jane",
        age: 32,
        city: "Los Angeles",
        occupation: "Marketing Specialist"
    },
    {
        name: "Tom",
        age: 28,
        city: "Chicago",
        occupation: "Web Developer"
    },
    {
        name: "Mary",
        age: 38,
        city: "Boston",
        occupation: "Graphic Designer"
    },
    {
        name: "Peter",
        age: 50,
        city: "Miami",
        occupation: "Business Analyst"
    },
    {
        name: "Sara",
        age: 27,
        city: "Denver",
        occupation: "Data Scientist"
    },
    {
        name: "Chris",
        age: 35,
        city: "Austin",
        occupation: "Project Manager"
    },
    {
        name: "Emily",
        age: 29,
        city: "Portland",
        occupation: "UI/UX Designer"
    }
];

const getNames = (array) => {
    const result = [];
    const elMapFn = (st) => st.name
    for (let i = 0; i < array.length; i++) {
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}

const getSimpleStuff = (array) => {
    result = [];
    const elMapFn = (st) => {
        return st.name + " " + st.occupation
    }
    for (let i = 0; i < array.length; i++) {
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}

const selfMadeMap = (array, mapFn) => {
    result = [];
    for (let i = 0; i < array.length; i++) {
        const newValue = mapFn(array[i])
        result[i] = newValue
    }
    return result
}

const selfMadeFilter = (array, conditionFn) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (conditionFn(array[i])) {
            result.push(array[i])
        }
    }
    return result
}

const selfMadePush = (array, ...newElements) => {
    for (let i = 0; i < newElements.length; i++) {
        array[array.length] = newElements[i]
    }
    console.log(array)
    return array.length
}

console.log(selfMadePush(stuff, {
    name: "Denis",
    age: 29,
    city: "Moscow",
    occupation: "React Developer"
}, {
    name: "Egor",
    age: 26,
    city: "Ufa",
    occupation: "Barmen"
}))

let arrNum = [1,2,3,4,5]

const selfMadeIncludes = (array, el) => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === el) {
            return true
        }
    }
  return false
}

console.log(selfMadeIncludes(arrNum, 3))
console.log(selfMadeIncludes(arrNum, 6))