import axios from "axios";

const promise1 = axios.get('https://google.com')

promise1
    .then((data) => {
    })
    .catch((data) => {
    })


const makeYahooRequest = () => {
    return axios.get('https://yahoo.com')
        .then((data) => data)
        .then((user => console.log(user.status)))
}

makeYahooRequest()

// const allPromises = Promise.all([promise1, promise2]);
//
// allPromises.then((result) => {
//     console.log(result[0].status)
//     console.log(result[1].status)
// }).catch(() => {
//     console.log("failed")
// })

// const allSettledPromises = Promise.allSettled([promise1, promise2]);
//
// allSettledPromises.then((results) => {
//     console.log(results[0].status)
//     console.log(results[1].status)
// })
//
// const resolvedPromise = Promise.resolve(100)
// console.log(resolvedPromise)
//
// const rejectedPromise = Promise.reject("Error ")
//
// rejectedPromise.then(() => {})
//     .catch( error => console.warn(error))
//
// const usersAPI = {
//     getAllUsers() {
//         return Promise.resolve([{name: "D"},{name: "S"}])
//     }
// }
//
// const pr = usersAPI.getAllUsers()
// pr.then(data => console.log(data))

axios.get('https://yahoo.com')
    .then((data) => {
        console.log(data.status)
        return 100
    })
    .then((number => {
        console.log(number)
        return {value:number + 1}
    }))
    .then((obj => {
        console.log(obj.value)
        const pr = Promise.resolve(obj.value + 1)
        return pr
    }))
    .then((number => {
        console.log(number)
        return number + 1
    }))

    const pr = axios.get('https://yahoo.com')


