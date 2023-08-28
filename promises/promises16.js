let myPromise = new Promise((res, rej) => {
    res()
    setTimeout(() => {
        // console.log("Hello!")
    }, 2000)
})

let myPromise2 = new Promise((res, rej) => {
    res()
    setTimeout(() => {
        // console.log(Math.random() * 10)
    }, 2000)
})

myPromise.then(() => {
    // console.log("myPromise зарезолвился, и я узнал об этом")
})

const doAfter = (sec) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(Math.random())
        }, sec * 1000)
    })
}

doAfter(3).then(() => console.log("log3"))
doAfter(1).then(() => console.log("log1"))
doAfter(5).then(() => console.log("log5"))

let promise3 = doAfter(3);
promise3.then( () => console.log('я сработал через 3 секунд') );
promise3.catch( () => console.error('я сработал через 3 секунды и словил ошибку') );
promise3.then( () => console.log('и я') );

let promise1 = doAfter(1)
let pr2 = promise1.then((data) => {
    console.log(data + " from pr2")
    return data
})
let pr3 = promise1.then((data) => {
    console.log(data + " from pr3")
    return data
})

doAfter(1)
    .then((res) => res * 10)
    .then((res) => doAfter(2))
    .then((res) => res * 1000)
    .then(res => console.log(res))