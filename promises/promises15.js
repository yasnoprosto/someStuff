const customAxios = {
    get() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    a: 1,
                    b: 2,
                    message: "Hello"
                })
                // rej("rejected data")
            }, 3000)
        })
    }
}

customAxios.get()
    .then(data => data.message)
// .then(message => console.log(message + 1))

let promise = customAxios.get()
promise.then((data) => {
    return new Promise((res) => res("New Promise"))
})
// .then(message => console.log(message))

const a = {
    result: 0,
    sum(a) {
        this.result += a
        return this
    },
    minus(a) {
        this.result -= a
        return this
    },
    divide(a) {
        this.result /= a
        return this
    }
}

a.sum(10)
    .minus(1)
    .divide(3)

// console.log(a.result)

const fetch = (url) => {
    return new Promise((res) => {
        switch (url) {
            case "google": {
                setTimeout(() => {
                    console.log("google")
                    res({data: "from google"})
                }, 3000)
                break
            }
            case "microsoft": {
                setTimeout(() => {
                    console.log("microsoft")
                    res({data: "from microsoft"})
                }, 2000)
                break
            }
            case "yahoo": {
                setTimeout(() => {
                    console.log("yahoo")
                    res({data: "from yahoo"})
                }, 1000)
                break
            }
            default: {
                setTimeout(() => {
                    console.log("unknown resourse")
                    res({data: "from unknown resourse"})
                }, 4000)
            }
        }
    })
}

let makeRequests = () => {
    fetch("google")
        .then(data => fetch("yahoo"))
        .then(data => fetch("microsoft"))
        .then(data => fetch("ooo"))
}

let makeRequests2 = async () => {
    await fetch("google")
    await fetch("yahoo")
    await fetch("microsoft")
    await fetch("ooo")
}

let makeRequestsMultiThreading = async () => {
    let promises = [
        fetch("google"),
        fetch("yahoo"),
        fetch("microsoft"),
        fetch("ooo")
    ]
    await Promise.all(promises)
    console.log("All finished  ")
}

makeRequestsMultiThreading()


