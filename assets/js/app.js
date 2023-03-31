let cl = console.log;

// HOF >> a function which accepts another fucntion as argument 
// callback >> A function passed as argument in another function

let ages = [11, 21, 23, 15, 24, 26, 45, 46, 58, 57, 59];


// let doubleAges = [] ;  // undefined

// // for(let i = 0; i < ages.length; i++){
// //     doubleAges.push(ages[i] * 2)
// // }

// ages.forEach(function(age){
//     doubleAges.push(age * 2)
// })

// cl(doubleAges)

// map >> HOF
// it returns a new array
// we have given a array
// we have to create a new array
// we have to apply same functnality on each and every memeber of given array

// let newArray = givenArray.map(function(para){
//  ...........
// })

ages = [11, 21, 23, 15, 24, 26, 45, 46, 58, 57, 59];

// let doubleAges = ages.map(function(age){
//     return age * 2
// })

// let doubleAges = ages.map((age) => {
//     return age * 2
// })

let doubleAges = ages.map(age => age * 2)

cl(doubleAges)


ages = [11, 21, 23, 15, 24, 26, 45, 46, 58, 57, 59];

// let sqrtArray = [];
// // for (let i = 0; i < ages.length; i++) {
// //     let sqrtNum = Math.sqrt(ages[i]);
// //     sqrtArray.push(sqrtNum);
// // }

// ages.forEach(function(age){
//     sqrtArray.push(Math.sqrt(age))
// })

// cl(sqrtArray)

// cl(Math.sqrt(25))

ages = [11, 21, 23, 15, 24, 26, 45, 46, 58, 57, 59];

// let sqrtArray = ages.map(function(age){
//         return Math.sqrt(age)
// })

// let sqrtArray = ages.map((age) => {
//     return Math.sqrt(age)
// })

let sqrtArray = ages.map(age => Math.sqrt(age))
cl(sqrtArray);

ages = [11, 21, 23, 15, 24, 26, 45, 46, 58, 57, 59];

// let cubeArray = [];

// for (let i = 0; i < ages.length; i++) {
//     //cl(Math.pow(ages[i], 3))
//     let cubeValue = Math.pow(ages[i], 3)
//     cubeArray.push(cubeValue)
// }


// ages.forEach(function(age){
//     cubeArray.push(Math.pow(age,3))
// })

// cl(cubeArray)

// cl(Math.pow(11, 3))

ages = [11, 21, 23, 15, 24, 26, 45, 46, 58, 57, 59];

let cubeArray = ages.map(function (age) {
    return Math.pow(age, 3)
})

cl(cubeArray)

let companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

//   ["Compnay One", "Company Two", "Company Threee", "Company Four" ...]

// let compNameArray = [];

// // for (let i = 0; i < companies.length; i++) {
// //     //    cl(companies[i].name)
// //     compNameArray.push(companies[i].name)
// // }

// companies.forEach((comp) => {
//         compNameArray.push(comp.name)
// })
// cl(compNameArray)

// let compNameArray = companies.map((comp) => {
//     return comp.name
// }).

let compNameArray = companies.map(comp => comp.name)
cl(compNameArray);

// [1981, 1986,....]

// let startYearObj = [];

// // for(let i = 0; i < companies.length; i++){
// //     startYearObj.push(companies[i].start)
// // }

// companies.forEach((comp) => {
//     startYearObj.push(comp.start)
// })

// cl(startYearObj);


// let startYearObj = companies.map((comp) => {
//     return comp.start;
// })

let startYearObj = companies.map(comp => comp.start)

cl(startYearObj);

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// [{compName : "Compnay One"},{compName : "Compnay Two"}, {compName : "Compnay Three"}]
// let compNames = []
// // for(let i = 0; i < companies.length; i++){
// //     let obj = {
// //         compName : companies[i].name
// //     }
// //     compNames.push(obj)
// // }

// companies.forEach(comp => {
//     let obj = {
//         compName : comp.name
//     }
//     compNames.push(obj)
// })

// cl(compNames)


// let compNames = companies.map(comp => {
//     let obj = {
//         compName : comp.name
//     }
//     return obj
// })

// let compNames = companies.map(comp => {
//     return {
//         compName: comp.name
//     }
// })

let compNames = companies.map(comp => ({ compName: comp.name }))
cl(compNames);
companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


// [{compName : "Company One", lifeSpan : 22}, {compName : "Company Two", lifeSpan : 16}...]

// let compLifeSpan = [];

// // for(let i = 0; i < companies.length; i++){
// //     let obj = {
// //         compName : companies[i].name,
// //         lifeSpan : companies[i].end - companies[i].start
// //     }
// //     compLifeSpan.push(obj)
// // }

// companies.forEach((comp) => {
//     let obj = {
//         compName : comp.name,
//         lifeSpan : comp.end - comp.start
//     }
//     compLifeSpan.push(obj)
// })

// console.table(compLifeSpan)

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let compLifeSpan = companies.map(comp => {
    return {
        compName: comp.name,
        lifeSpan: comp.end - comp.start
    }
})

// let compLifeSpan = companies.map(comp => ({
//     compName: comp.name,
//     lifeSpan: comp.end - comp.start
// }))

console.log(compLifeSpan)

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];