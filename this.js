function foo() {
    const a = () => {
        console.log(this)
    }
    a()
}

// foo()

// const car = {
//     color: "red",
//     showColor() {
//         function a() {
//             console.log(this.color)
//         }
//         a()
//     }
// }
//
// car.showColor()

// let user = {
//     age: 25,
//     showAge() {
//         console.log(this.age)
//     }
// }
//
// const admin = user
//
// user = null
//
// admin.showAge()

// const car1 = {
//     speed: 200
// }
//
// const car2 = {
//     speed: 260
// }
//
// function showSpeed() {
//     console.log(this)
// }
//
// car1.foo = showSpeed
// car2.foo = showSpeed
//
// car1.foo()
// car2.foo()
//
//  let car3 = {
//     color: "red",
//      showColor() {
//          return () => {
//              console.log(this.color)
//          }
//      }
//  }
//
//  car3.showColor()()

// const car1 = {
//     speed: 200,
//     showSpeed() {
//         console.log(this.speed)
//     }
// }
//
// const car2 = {
//     speed: 220,
// }
//
// const car3 = {
//     speed: 300,
// }
//
// car1.showSpeed.call(car2)
// car1.showSpeed.apply(car2)
// car1.showSpeed.bind(car2).apply(car3)

function Car (brand) {
    this.brand = brand
}

const car1 = new Car('bmw')
const car2 = new Car('mercedes-benz')

console.log(car1)
console.log(car2)