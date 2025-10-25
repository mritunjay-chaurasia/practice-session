//Q.1 Find non repeat string
//     const data = SAwiSS

//Q.2  
// 1
// 1 35
// 1 35 17

//Q.3 Print numbers in descending order per row:
// 54321
// 4321
// 321
// 21
// 1

// function printPattern(n){
//   for(let i = n; i > 0; i--){
//     let row = ""
//     for(let j = i; j > 0 ; j--){
//         row += j
//     }
//     console.log(row)
//   }
// }
// printPattern(5)

//Q.4 Print numbers in ascending order per row:
// 1
// 12
// 123
// 1234
// 12345

// function printPattern(n){
//     for(let i = 1; i <= n; i++){
//         let row = ""
//         for(let j = 1; j <= i ; j++){
//             row += j
//         }
//         console.log(row)
//     }
// }
// printPattern(5)


//Q.5  
// 12345
// 2345
// 345
// 45
// 5

// function printPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = ""
//          for(let j = 1; j >= n-i;i++){
//             console.log(j)
//          }
//         // console.log(row)
//     }
// }

// printPattern(5)

//Q.6 Right-angled triangle with numbers:
//     1
//    12
//   123
//  1234
// 12345

// function printPattern(n){
// for(let i = 1; i <= n ; i++){
//     let line = ""
//     for(let j = 1; j <= n-i; j++){
//         line += " "
//     }
//     for(let j = 1 ; j <= i ; j++){
//         line += j
//     }
//     console.log(line)
// }
// }
// printPattern(5)

//Q.7 Inverted right-angled triangle with numbers:
// 12345
// 1234
// 123
// 12
// 1

// function printPattern(n){
//     for(let i = 1 ; i <= n ; i++){
//         let row = ""
//         for(let j = 1; j <= n - i +1 ; j++){
//             row += j
//         }
//         console.log(row)
//     }
// }
// printPattern(5)

//Q.8 Floyd’s Triangle:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// for(let i = 1; i <= 4; i++){
//     let sum = 0
//     let row = ""
//     for(let j = 1 ; j <= i; j++){
//         sum += j
//     }
//     for(let j = 1 ; j <= i; j++){
//         row += j + sum - i + " "
//     }
//     console.log(row)
// }

//Q.9 Pyramid with numbers:
//     1
//    121
//   12321
//  1234321

for(let i = 1; i <= 4; i++){
    let row = " "
    // for(let m = 4 ; m > i; m-- ){
    //     row += " "
    // }
    // for(let j = 1; j <= i; j++){
    //     row += j
    // }

    for(let z = 0; z <= i; z--){
        console.log(z)
        // row += j
    }
//    console.log(row)
}



//Q.10 Diamond number pattern:

//     1
//    121
//   12321
//  1234321
//   12321
//    121
//     1

//Q.11 Square pattern:
// *****
// *****
// *****
// *****

//Q.12 Right-angled triangle:
// *
// **
// ***
// ****
// *****

//Q.13 Inverted triangle:
// *****
// ****
// ***
// **
// *


//Q.14 Pyramid

//     *
//    ***
//   *****
//  *******

//Q.15 Inverted pyramid:
//  *******
//   *****
//    ***
//     *

//Q.16 Diamond
//     *
//    ***
//   *****
//  *******
//   *****
//    ***
//     *

//Q.17 Hollow square:
// *****
// *   *
// *   *
// *   *
// *****

//Q.18 Hollow pyramid:

//     *
//    * *
//   *   *
//  *******

//Q.19 Pascal’s Triangle (binomial coefficients):
//     1
//    1 1
//   1 2 1
//  1 3 3 1

//Q.20 Butterfly pattern:
// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *

//Q.21 Hourglass pattern:
// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

//Q.22 Checkerboard pattern:
// * * * * *
//  * * * *
// * * * * *
//  * * * *


//Q.23 0-1 Triangle:
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// for(let i = 1 ; i <= 4; i++){
//     let start = (i % 2 !== 0) ? 1 : 0
//     let row = ""
//     for(let j = 0 ; j < i ; j++){
//       row += start + " "
//       start = 1 - start
//     }
//      console.log(row)
// }

// Q.24
//const para = "hello every one"
//output = "Hello Every One"
// const arr = para.split(' ')
// const res = []
// for(let i = 0; i < arr.length; i++){
//     const data = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
//     res.push(data)
// }
// console.log(res.join(" "))