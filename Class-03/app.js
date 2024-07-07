"use strict";
//------------Tuples------------//
// let basicColors2: string[] = ["Abdul Hannan", "Haider Ali Shah"]
// let basicColors: readonly [string, string, number]
// basicColors = ["Abdul", "Hannan", 56]
// console.log(basicColors);
// let mixedArr: [string, number, boolean];
// mixedArr = ["Abdul Hannan", 188528, true]
//-----------Enums---------//
// const pending = "pending"
// const confirmed = "Confirmed"
// const shipped = "Shipped"
// const delevered = "Delivered"
// enum OrderStatus {
//     pending = "Pending",
//     confirmed = "Confirmed",
//     shipped = "Shipped",
//     delivered = "Delivered"
// }
// enum TrafficLight {
//     Green,
//     Yellow,
//     Red
// }
// const stringKeys = Object
//     .keys(TrafficLight)
//     .filter((v) => isNaN(Number(v)))
// stringKeys.forEach((key, index) => {
//     console.log(`${key} has index ${index}`)
// })
// enum TrafficLight {
//     Green = "G",
//     Yellow = "Y",
//     Red = "R"
// }
// Object.keys(TrafficLight).forEach((key, index) => {
//     const enumValue = TrafficLight[key as keyof typeof TrafficLight];
//     console.log(`${key} has value ${enumValue} and index ${index}`);
// });
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
for (const value in Color) {
    log(value);
}
function log(value) {
    if (!isNaN(Number(value))) {
        return;
    }
    console.log(`Value: ${value}`);
}
// enum HTTPCode {
//     success = 200,
//     badRequest = 400,
//     myMistake = 500
// }
// console.log(HTTPCode[200]);
//------------Casting-----------//
// let a = prompt("What Is Your Name?")
// let userName: string = a as string
// let userName2: string = <string>a;
// console.log(userName2);
