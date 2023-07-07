//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"


const repeatString = (substr, q, divider) => {
    let result = "";
    for (let i = 0; i < q; i++) {
        if (i === q - 1) {
            result += substr
            break;
        }
        result += substr + divider
    }
    return result
}

const repeatString2 = (substr, q, divider) => new Array(q).fill(substr).join(divider)

const repeatString3 = (substr, q, divider) => {
    let arr = [];
    for (let i = 0; i < q; i++) {
        arr.push(substr)
    }
    return arr.join(divider)
}

// console.time("func1")
// repeatString("yo", 10000000, " ")
// console.timeEnd("func1")
//
// console.time("func2")
// repeatString2("yo", 10000000, " ")
// console.timeEnd("func2")
//
// console.time("func3")
// repeatString3("yo", 10000000, " ")
// console.timeEnd("func3")


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart = (str, substr) => str.toUpperCase().startsWith(substr.toUpperCase())

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, q) => {
    const arr = str.split("");
    let newStr = ""
    for (let i = 0; i < q; i++) {
        newStr += arr[i]
    }
    return newStr + "..."
}

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null

const getMinLengthWord2 = (str) => {
    if (typeof str !== "string" || str === "") return null
    const arr = str.split(" ");
    let shortestWord = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (shortestWord.length > arr[i].length) shortestWord = arr[i]
    }

    return shortestWord
}

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"


const setUpperCase2 = (str) => {
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        arr[i] = arr[i].split("")
        arr[i][0] = arr[i][0].toUpperCase()
        arr[i] = arr[i].join("")
    }
    return arr.join(" ")
}

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

const isIncludes = (str, substr) => {
    const arrOfStr = str.toUpperCase().split("");
    const arrOfSubStr = substr.toUpperCase().split("");
    let counter = 0;

    for (let i = 0; i < arrOfStr.length; i++) {
        for (let j = 0; j < arrOfSubStr.length; j++) {
            if (arrOfStr[i] === arrOfSubStr[j]) {
                counter++;
                break;
            }
            if (counter === substr.length) return true;
        }
    }

    return false;
}


isIncludes("Incubator", "Cut") //=> true
isIncludes("Incubator", "table") //=> false
isIncludes("Incubbator", "inbba") //=> true //*false
isIncludes("Incubbator", "inba") //=> true  //*true
isIncludes("Incubator", "Incubatorrr")  //=> true //*false





  




