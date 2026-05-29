//Q.1 Find repeat string
// const data = "SAwiSS"
// for(let i = 0; i < data.length; i++){
//     for(let j = i + 1; j < data.length; j++){
//         if(data[i].toLowerCase() === data[j].toLowerCase()){
//             console.log(data[i])
//         }
//     }
// }

//Q.2  
// 1
// 1 35
// 1 35 17
// const arr = [1, 35, 17];
// function printPattern(arr) {1
//     for (let i = 0; i < arr.length; i++) {
//         let row = ""
//         for (let j = 0; j <= i; j++) {
//             row += arr[j] + " "
//         }
//         console.log(row)
//     }
// }
// printPattern(arr)

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
//     for(let j = 1 ; j <= i - 1; j++){
//         row += j + sum  + " "
//     }
//     console.log(row)
// }

//Q.9 Pyramid with numbers:
//     1
//    121
//   12321
//  1234321

// for (let i = 1; i <= 4; i++) {
//     let row = " "

//     for (let m = 4; m > i; m--) {
//         row += " "
//     }

//     for (let j = 1; j <= i; j++) {
//         row += j
//     }

//     for (let z = i - 1; z >= 1; z--) {
//         row += z
//     }
//     console.log(row)
// }



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
// for (let i = 1; i <= 4; i++) {
//     let row = ""
//     for (let j = 1; j <= 5; j++) {
//         row += "*"
//     }
//     console.log(row)
// }

//Q.12 Right-angled triangle:
// *
// **
// ***
// ****
// *****
// for (let i = 1; i <= 5; i++) {
//     let row = ""
//     for (let j = 1; j < i + 1 ; j++) {
//         row += "*"
//     }
//     console.log(row)
// }

//Q.13 Inverted triangle:
// *****
// ****
// ***
// **
// *

// for (let i = 5; i >= 1; i--) {
//     let row = ""
//     for (let j = i; j >= 1; j--) {
//         row += "*"
//     }
//     console.log(row)
// }


//Q.14 Pyramid

//     *
//    ***
//   *****
//  *******
// function printPattern(num){
//     for(let i = 1; i <= num; i++){
//         let row = ""
//         for(let j = 1; j <= num -i ; j++){
//             row += " "
//         }
//         for(let k = 1; k <= i; k++){
//             row += "*"
//         }
//         for(let l = i -1 ; l >= 1; l--){
//             row += "*"
//         }
//         console.log(row)
//     }
// }
// printPattern(4)

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

//q.25 print number from 1 to 10 every second
// let count = 1
// const intervalId = setInterval(() => {
//     console.log(count)
//     count++
//     if(count > 10){
//         clearInterval(intervalId)
//     }
// }, 1000);

// Program to check if a word is a palindrome
// function isPalindrome(word) {
//    const length = word.length;
//    // loop through half of the word
//    for (let i = 0; i < length / 2; i++) {   
//       // check if first and last characters are the same
//       if (word[i] !== word[length - 1 - i]) {
//          return 'This is not a palindrome';
//       }
//    }
//    return 'This is a palindrome';
// }
// // take input
// const inputWord = "hello";

// // call the function
// const result = isPalindrome(inputWord);
// console.log(result);

//Q.25 
// const data = ['eat','tea','tan','ate','nat','bat']
// //output will be = [['eat','tea','ate'],['tan','nat'],['bat']]

// function groupAnagrams(strs) {
//   const anagrams = {}
//     for(const str of strs){
//         const key = str.split('').sort().join('')
//         if(!anagrams[key]){
//             anagrams[key] = []
//         }
//         anagrams[key].push(str)
//     }
//     return Object.values(anagrams)
// }
// groupAnagrams(data)

//Q.26
// const arr = [1,5,9,1,5,6,1]

// Output:
// {
// 1:3,
// 5:2,
// 9:1,
// 6:1
// }

// let result = {}
// for(let i = 0; i < arr.length ; i++){
//   result[arr[i]] = (result[arr[i]] || 0) + 1
// }
// console.log(result)

//Q.27
// const arr = [1,2,3,4,5]
// output = [120,60,40,30,24]

//Q.28
// const arr = [2,7,11,15]
// target = 9
// output = [0,1]

//Q.29
// const arr = [1,2,3,4,5,6,7,8,9,10]
// target = 15
// output = [[5,10],[6,9],[7,8]]

//Q.30
// const arr = [1,2,3,4,5,6,7,8,9,10]
// target = 12
// output = [[3,9],[4,8],[5,7]]

//Q.31
// const arr = [1,2,3,4,5,6,7,8,9,10]
// target = 20
// output = []

//Q.32
// const arr = [1,2,3,4,5,6,7,8,9,10]
// target = 18
// output = [[9,9],[8,10]]

//Q.33
// const arr = [1,2,3,4,5,6,7,8,9,10]
// target = 5
// output = [[1,4],[2,3]]

//Q.34
// const arr = [1,2,3,4,5,6,7,8,9,10]
// target = 8
// output = [[1,7],[2,6],[3,5]]

//Q.35 find max and min in array
// const arrNum = [2,5,6,1,6,4,8,4]

//Q.36 find remove duplicate in array
// const arrNum = [2,5,6,1,6,4,8,4]

//Q.38 find duplicate in array
// const arrNum = [2,5,6,1,6,4,8,4]
// const duplicate = []
// for(let i = 0 ; i < arrNum.length; i++){
//    for( j = i+1; j < arrNum.length ; j++){
//        if(arrNum[i] === arrNum[j] && !duplicate.includes(arrNum[j])){
//         //   console.log(arrNum[j])
//            duplicate.push(arrNum[j])
//        }
//    }
// }

// console.log(duplicate)

//Q.39 "Hello World" to print dlroW olleH
// const str = "Hello World"
// console.log(str.split('').reverse().join(' '))
// for(let i = str.length -1; i >= 0; i--){
//     console.log(str[i])
// }

//Q.40 find second largest number in array
// const arrNum = [2,5,6,1,6,4,8,4]
// const res = arrNum.sort((a,b) => a - b)
// or 
// function customSort(arr) {
//     const n = arr.length
//     for(let i = 0; i < n -1; i++){
//         for(let j = 0; j < n - i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 const temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// const res = customSort(arrNum)
// console.log(res[res.length - 2])

//Q.41 find second smallest number in array
// const arrNum = [2,5,6,1,6,4,8,4]
// const arrLength = arrNum.length

// const res =  arrNum.sort((a,b)=> b - a)
// or
// function customNumberSort(arr) {
//     for(let i = 0 ; i < arrLength - 1; i++){
//         for(let j = 0 ; j < arrLength - i - 1; j++){
//             if(arr[j] < arr[ j+ 1]){
//                 const temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }

// const res =customNumberSort(arrNum)
// console.log(res[arrLength - 2])

