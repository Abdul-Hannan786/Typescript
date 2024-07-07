// import { userName, sum } from "./utils/sum.js"
// import Sum from "./utils/sum.js"

// let count = sum(5, 5)
// console.log(userName);
// console.log (count);


// console.log(Sum(5, 9));
// console.log(UserName);












// interface Vehicle {

//     isAutomatic: boolean,
//     selfStart: boolean
// }

// interface Car extends Vehicle {
//     airConditioned: boolean
// }


// interface Bike extends Vehicle {
//     footRest: boolean
// }


// let bike: Bike = {
//  isAutomatic: true,
//  selfStart: true,
//  footRest:true
// }














class Car {
    name;
    model;
    varient;
    constructor(carName: string, model: number, varient: string){
        this.name = carName;
        this.model = model;
        this.varient = varient
    }


}

let car1 = new Car("Mehran", 2005, "VXR")
let car2 = new Car("Haval", 2023, "HEV")
console.log(car1);
console.log(car2);
