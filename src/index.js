const num = [1, 2, 3, 4, 5]

// // const c = num.forEach((n) => {
// //     return n*2
// // })

// const c = num.map((n) => n + 10)

// console.log(c)

// const nweNums = num.
//                 map((n) => n * 10)
//                 .map((n) => n + 10)
//                 .filter((n) => n > 20)
//                 console.log(nweNums)


// reduce 

// const total = num.reduce(function (acc , curr) {
//     console.log(`acc : ${acc} && curr : ${curr}`)
//     return acc + curr;
// },0)


const total = num.reduce((acc , curr) => acc + curr , 0)

console.log(total)