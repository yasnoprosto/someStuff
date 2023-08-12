// import axios from "axios";

// const promise1 = axios.get('https://google.com')

// promise1
//     .then((data) => {
//     })
//     .catch((data) => {
//     })


// const makeYahooRequest = () => {
//     return axios.get('https://yahoo.com')
//         .then((data) => data)
//         .then((user => console.log(user.status)))
// }

// makeYahooRequest()

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
//
// axios.get('https://yahoo.com')
//     .then((data) => {
//         console.log(data.status)
//         return 100
//     })
//     .then((number => {
//         console.log(number)
//         return {value:number + 1}
//     }))
//     .then((obj => {
//         console.log(obj.value)
//         const pr = Promise.resolve(obj.value + 1)
//         return pr
//     }))
//     .then((number => {
//         console.log(number)
//         return number + 1
//     }))
//
//     const pr = axios.get('https://yahoo.com' )
//
//
// function getRandomNumber() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(Math.random())
//         }, 2000)
//     })
// }
//
// getRandomNumber().then(n => console.log(n))
// getRandomNumber().then(n => console.log(n))


const repo = {
    save(data) {
        debugger
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((res, rej) => {
            debugger
            try {
                localStorage.setItem('some-key', JSON.stringify(data))
            } catch (error) {
                rej("Error")
            }
            res("no error")
        })
        return promise
    },
    read() {
        const data = localStorage.getItem("some-key");
        return data ? null : JSON.parse(data)
    },
    readAsync() {
        return new Promise((res, rej) => {
            const data = localStorage.getItem("some-key");
            data ? res(null) : res(JSON.parse(data))
        })
    }
}
//
// const result = repo.save({name: "Den§"})
// if (result) {
//     console.log("OK")
// } else {
//     console.warn("NOT OK")
// }
// const run = async () => {
//     await repo.saveAsync({name: "Den1"})
//     console.log("OK2")
//
//     const data = await repo.readAsync()
//     console.log(data)
// }
//
// run()
//
//
// const wait = (t) => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res()
//         }, t)
//     })
// }
//
// async function count() {
//     await wait(1000)
//     console.log(1)
//     await wait(1000)
//     console.log(2)
//     await wait(1000)
//     console.log(3)
// }
//
// count()

const findUserInDB = (id) => {
    const users = [{id: 1, name: "Denis"}, {id: 2, name: "Oleg"}, {id: 3, name: "Mike"}]

    return new Promise((res, rej) => {
        setTimeout(() => {
            let user = user.find(u => u.id === id)
            user === null ? rej("user not found") : res(user)
        }, randomTime(500, 1500))
    })
}

const randomTime = (start, end) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const ownAxios = {
    _fake(url, data) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                let user = user.find(u => u.id === id)
                user === null ? rej("user not found") : res(user)
            }, randomTime(500, 1500))
        })
    },
    post(url, data) {
        return this._fake(url, data)
    },
    get(url, data) {
        return this._fake(url, data)
    }
}

const api = {
    async save() {

    },
    async read() {
        return {name: 'Denis'}
    }
}

const x = async () => {

}

async function runApi() {
    // await api.save()
    // let data = await api.read()
    // console.log(data)
    const a = x()
    console.log(a)
}

runApi()
