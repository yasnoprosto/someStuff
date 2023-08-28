const server = {
    getData() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("some Data")
                // rej("Error")
            }, 2000)
        })
    }
}

const promise = server.getData();
const promise2 = server.getData();

promise.then(
    (data) => {
        console.log('.then1', data)
        return promise2
    })
    .then((data) => {
    console.log(".then2", data)
        return 20
    })
    .then((data) => {
    console.log(".then3", data)
        return 30
    })
    .then((data) => {
    console.log(".then4", data)
})


// promise.catch((err) => {
//     console.log(".catch ", err)
// })
//
// promise.finally((data) => {
//     console.log(".finally", data)
// })

// console.log(newPromise)

