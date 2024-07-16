//--------------Generics--------------//

// function identity<T, S>(val: T, numm: S) {
//   console.log(val);
//   console.log(numm);

// }

// identity(5, "Sum");

// function identity<T>(arr: T[]) {
//   console.log(arr.length);
// }

// identity([1, 2]);

// function getProducts<T>(products: T[]): T {
//   return products[3];
// }

// getProducts([1, 2]);

//  Through Arrow Function () => {}

const searchProducts = <T>(val: T):T => {
    return val
};
