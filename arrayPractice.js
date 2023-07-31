const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Ann",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//1. Создайте полную (глубокую) копию объекта user
let deepCopyUser = {
    ...user, friends: [...user.friends]
};
//2. Создайте полную (глубокую) массива students
let deepCopyStudents = students.map(s => ({...s}));

//3. Создайте полную (глубокую) копию объекта superUser
let deepCopySuperUser = {
    ...superUser, friends: superUser.friends.map(f => ({...f}))
};

//4. Отсортируйте students по успеваемости (лучший идёт первым)(sort)
let sortedByScores = [...students.sort((a, b) => {
    return a.scores < b.scores ? 1 : -1
})]
// console.log(sortedByScores);

//5. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter(st => st.scores >= 100)
// console.log(bestStudents)

//6. Сформируйте массив имён студентов (map)
let studentsNames = students.map(st => st.name);
// console.log(studentsNames)

//7. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(st => ({...st, isStudent: true}));
// console.log(trueStudents)

//8. Nick женился. Выполните соответствующие преобразование массива
// students (map)
let studentsWithMarriedNick = students.map(st => st.name === "Nick" ? {...st, isMarried: true} : st);
// console.log(studentsWithMarriedNick)

// Внесите  следующие изменения в объект superUser:
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//9.Удалите объект с id=1 из массива  friends
let superUserCorrect1 = {
    ...superUser, friends: superUser.friends.filter(f => f.id !== 1)
};

// console.log(superUserCorrect1)
//10. поменяйте объекту с id=2 из массива  friends значение св-ва name на
// "Donald"
let superUserCorrect2 = {
    ...superUser, friends: superUser.friends.map(fr => fr.id === 2 ? {...fr, name: "Donald"} : fr)
};

// console.log(superUserCorrect2)

//11. добавьте в список друзей нового друга
const newFriend = {
    id: 5,
    name: "Nick",
    age: 27,
    isMarried: false,
    scores: 99
}
let superUserCorrect3 = {
    ...superUser, friends: [...superUser.friends, newFriend]
}

// console.log(superUserCorrect3)

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом не используя методы массивов и
// Math.max()*
let bestStudent = students[0]
for (let i = 1; i < students.length; i++) {
    if(students[i].scores > bestStudent.scores) {
        bestStudent = students[i]
    }
}


// console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)*
let scoresSum = students.reduce((acc, student) => acc + student.scores, 0);
// console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    const studentsNames = students.map(stud => stud.name)
    return students.map(st => ({...st, friends: studentsNames.filter(name => name !== st.name)}))
}
console.time('addFriends');
addFriends(students);
console.timeEnd('addFriends');

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]

const getBestStudents = (students, a = 1) => {
    const sortedStudents = students.sort((a, b) => b.scores - a.scores)
    if(a === 1) {
        return sortedStudents[0]
    } else if(a <= students.length) {
        return sortedStudents.slice(0, a)
    } else {
        return sortedStudents.concat(new Array(a - sortedStudents.length).fill(null))
    }

}
//
// console.log(getBestStudents(students))
// console.log(getBestStudents(students, 2))
// console.log(getBestStudents(students, 13))







