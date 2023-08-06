const promise = new Promise((res, rej) => {
    res("Some data")
    rej("Some error")
})

promise.then((data) => {
    // console.log(data)
}).catch((data) => {
    // console.log(data)
}).finally(() => {
    // console.log("finished")
})

// fetch("https://google.com/?query=js")
//     .then((data) => {
//         console.log(data.url)
//         return fetch("https://yahoo.com/?query=js")
//     }).then((data) => {
//     console.log(data.url)
//     return fetch("https://bing.com/?query=js")
//     }).then((data) => {
//     console.log(data.url)
//     })

const foo1 = async () => {
    try {
        const data1 = await fetch("https://google.com/?query=js")
        console.log(data1.url)
        const data2 = await fetch("https://yahoo.com/?query=js")
        console.log(data2.url)
        const data3 = await fetch("https://bing.com/?query=js")
        console.log(data3.url)
    } catch {

    }
}



// foo1()

async function foo2() {
    // console.log(2)
}

foo2()

const pr1 = promise.then((data) => {
    return 1
})
const pr2 = promise.then((data) => {
    throw new Error("Error text")
})
const pr3 = promise.then((data) => {
    return 3
})

const prAll = Promise.all([pr1, pr2, pr3])

prAll.then((data) => {
    console.log(data)
}).catch(() => {

})