const age = 29;
const age2 = age;

const object = {
    name : "it-kamasutra.com",
    protocol : "https",
    maxStudentsCount : 10,
    isOnline : true,
    students : ["Igor", "Nastya", "Nikita"],
    classroom : {
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
