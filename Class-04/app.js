import { userName, arr } from "./utils/sum.js";
import Sum from "./utils/sum.js";
console.log(userName);
console.log(arr);
let count = Sum(5, 5);
console.log(count);
// interface Vehicle {
//     isAutomatic: boolean;
//     selfStart: boolean
// }
// interface Car extends Vehicle {
//     isAirconditioned: boolean
// }
// interface Bike extends Vehicle {
//     footRest: boolean
// }
// let car: Car = {
//     isAutomatic: true,
//     selfStart: false,
//     isAirconditioned: true
// }
// let bike: Bike = {
//     isAutomatic: false,
//     selfStart: true,
//     footRest: true
// }
// interface CarInterface {
//     name: string;
//     model: number;
//     varient: string;
//     isAutomatic: boolean
//     calculateAvg: (fuel: number, milage: number) => void
// }
// class Car implements CarInterface {
//     name;
//     model;
//     varient;
//     constructor(carName: string, model: number, varient: string) {
//         this.name = carName;
//         this.model = model
//         this.varient = varient
//     }
//     isAutomatic = true
//     calculateAvg(fuel: number, milage: number) {
//         let msg = `${this.name} has fuel average of ${milage / fuel} km.`
//         console.log(msg);
//     }
// }
// let car1 = new Car("Mehran", 2005, "VXR")
// car1.calculateAvg(20, 400)
// let car2 = new Car("Land Cruiser", 2023, "Hybrid")
// car2.calculateAvg(20, 120)
// console.log(car1);
// console.log(car2);
