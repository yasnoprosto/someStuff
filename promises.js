const server = {
    getData() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("Data")
                // rej("Error")
            }, 2000)
        })
    }
}

const promise = server.getData();

promise.then(
    (data) => {
        console.log('.then1 ', data)
    })
    .then((data) => {
    console.log(".then2")
    })
    .then((data) => {
    console.log(".then3")
    })
    .then((data) => {
    console.log(".then4")
})


// promise.catch((err) => {
//     console.log(".catch ", err)
// })
//
// promise.finally((data) => {
//     console.log(".finally", data)
// })

// console.log(newPromise)

