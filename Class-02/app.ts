// console.log("Hello world");

// ---------Unoion Types---------//


// let user: string | number = "Abdul Hannan"
// user = 8
// console.log(user);




// let fruits: string[] = ["Apple", "Orange", "Mango"]
// console.log(fruits);


// let mixedArr: (string | number)[] = ["Apple", "Orange", "Mango"]
// mixedArr.push(90)
// console.log(mixedArr);


//-----------Type Aliases-----------//

// let user:string | number = "Abdul Hannan"
// let user1:string | number = "Haider Ali"


// type Mixed = string | number | boolean

// let user: Mixed= "Abdul Hannan"
// let user1: Mixed = "Haider Ali"
// let user2: Mixed = true
// let isUser: Mixed = 95



type Car = {
    name: string,
    model: number,
    varient: string,
    isAutomatic: boolean,
    features: string[],
    launchedYear?: number,
    calulateAvg?: (fuelQty: number, distance: number) => void
}


let car: Car = {
    name: "Mehran",
    model: 2009,
    varient: "VXR",
    isAutomatic: true,
    features: ["Air Bag", "Air Conditioned"],
    calulateAvg: (fuelQty, distance) => {

    }
}


console.log(car);
car.launchedYear = 2000








