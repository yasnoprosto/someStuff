const age = 29;
const age2 = age;

const object = {
    name: "it-kamasutra.com",
    protocol: "https",
    maxStudentsCount: 10,
    isOnline: true,
    students: ["Igor", "Nastya", "Nikita"],
    classroom: {
        teacher: {
            name: "Lexa",
            age: 18,
        }
    }
}

const object2 = {
    ...object
}

object2.classroom = {
    ...object.classroom
}

object2.classroom.teacher = {
    ...object.classroom.teacher
}

object2.students = [...object.students]

const object3 = {
    name: "Denis",
    age: 29
}

const object4 = {
    ...object3
}

const state = {
    name: "it-kamasutra.com",
    age: 1,
    school: {
        students: [{}, {}, {}],
        address: "Minsk",
        director: {
            name: "Andrey",
        }
    }
}

const object5 = {
    ...state, school: {
        ...state.school
    }
}

console.log(object5)

const arr = [{name: "A", age: 29}, {name: "B", age: 31}]

const arr2 = arr.map(el => ({...el, age: {...el.age}}))
arr[0].name = "D"

const state2 = {
    ...a, school: {
        students: a.school.students.map(s => ({...s}))
    }
}
