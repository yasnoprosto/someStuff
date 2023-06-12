const user = {
    name: "Denis", age: 34
}

const user2 = user;

user2.name = "Michael"

const copyUser = {...user2};


console.log(user === user2)
console.log(copyUser === user);
console.log(copyUser === user2);

const arr = [1, 2, 3]
const copyArr = [...arr];
arr.pop()
console.log(copyArr)

const students = [
    {
        name: "Oleg",
        age: 29,
        friends: [
            {name: "Rick"},
            {name: "Sasha"}
        ]
    },
    {
        name: "Denis",
        age: 29,
        friends: [
            {name: "Vasiliy"},
            {name: "Max"}
        ]
    },
]

const copyStudents = [...students];

copyStudents[0].age = 30;

console.log(students[0].age);
console.log(copyStudents[0].age);

const deepCopy = [{...students[0]}, {...students[1]}]

console.log(deepCopy === students)
console.log(deepCopy[0] === students[0])

const deepCopyMap = students.map((student) => ({...student}))

console.log(deepCopyMap)
console.log(students === deepCopyMap)

//CRUD

const addStudent = [...students, {name: "Alla", age: 32}]

const updateStudent = students.map(student => student.name === "Denis" ? {...student, age: 30} : student)

const deleteStudent = students.filter(student => student.name !== "Denis")

const newSt = students
    .map(student => student.name === "Denis"
        ? {...student, friends: student.friends.map(friend => friend.name === "Vasiliy"
                ? {...friend, name: "Vasyaa"}
                : friend)}
        : student)

console.log(newSt[1]);