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
// StroyNum >> 123  >> Ravi_123
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

// [{compName : "company One", duration : "1981 - 2003"}]

let compDuration = []

companies.forEach((comp) => {
    let obj = {
        compName: comp.name,
        duration: ` ${comp.start} - ${comp.end}`
    }
    compDuration.push(obj)
})

cl(compDuration);


// filter 
// it also returns a array
// you have given a array 
// you hava given a condition
// you have to create a array


ages = [11, 21, 23, 15, 24, 26, 45, 16, 58, 17, 59];

// let canDrive = [];

// ages.forEach(age => {
//     if(age >= 18){
//         canDrive.push(age)
//     }
// })
// cl(canDrive)

// let canDrive = ages.filter(function(age){
//     if(age >= 18){
//         return true
//     }else{
//         return false
//     }
// })

// let canDrive = ages.filter(function(age){
//     return age >= 18
// })


let canDrive = ages.filter(age => age >= 18)
cl(canDrive)

ages = [11, 21, 23, 15, 24, 26, 45, 16, 58, 17, 59];

// let isNotHappy = [];
// ages.forEach(age => {
//     if(age >= 21){
//         isNotHappy.push(age)
//     }
// })
// cl(isNotHappy)


// let isHappy = ages.filter(age => {
//     return age >= 21
// })

let isHappy = ages.filter(age => age >= 21)
cl(isHappy);

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: " Retail ", start: 1981, end: 1989 }
];

// [comp.catg === retail]

// let compRetail = [];

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() === "retail"){
//         compRetail.push(companies[i])
//     }
// }

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() === "retail"){
//         compRetail.push(companies[i])
//     }
// }

companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: " Retail ", start: 1981, end: 1989 }
];

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].category.toLowerCase().trim().includes('retail')){
//         compRetail.push(companies[i])
//     }
// }

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].category.toLowerCase().trim().indexOf('retail') > -1){
//         compRetail.push(companies[i])
//     }
// }

// companies.forEach(comp => {
//     if(comp.category.toLowerCase().trim().includes('retail')){
//         compRetail.push(comp)
//     }
// })


// cl(compRetail);

// let compRetail = companies.filter(comp => {
//     return comp.category.toLowerCase().trim().includes('retail')
// })


let compRetail = companies.filter(comp => comp.category.toLowerCase().trim().includes('retail'))

cl(compRetail);
/// empty string, emptyString.length , 0 , false, emptyArray, emptyArray.length


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: " Retail ", start: 1981, end: 1989 }
];
// create a new array of companies whos run for is at least 10 years
// [{ name: "Company One", category: "Finance", start: 1981, end: 2003 } ]
// end - start >= 10

// let comp10Years = [];

// for(let i = 0; i < companies.length; i++){
//     if(companies[i].end - companies[i].start >= 10){
//         comp10Years.push(companies[i])
//     }
// }


// companies.forEach((comp) => {
//     if(comp.end - comp.start >= 10){
//         comp10Years.push(comp)
//     }
// })



// let comp10Years = companies.filter(comp => {
//     return (comp.end - comp.start >= 10)
// })

let comp10Years = companies.filter(comp => comp.end - comp.start >= 10)


cl(comp10Years)



companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: " Retail ", start: 1981, end: 1989 }
];

// create a new array of compnies who starts in 80s and run for at least 7 years


// let comp80s7years = [];

// // for (let i = 0; i < companies.length; i++) {
// //     if ((companies[i].start >= 1980 && companies[i].start <= 1989) && (companies[i].end - companies[i].start >= 7)) {
// //         comp80s7years.push(companies[i])
// //     }
// // }

// companies.forEach(comp => {
//     if((comp.start >= 1980 && comp.start <= 1989) && (comp.end - comp.start >= 7)){
//         comp80s7years.push(comp)
//     }
// })


// let comp80s7years = companies.filter(comp => {
//     return ((comp.start >= 1980 && comp.start <= 1989) && (comp.end - comp.start >= 7))
// })

let comp80s7years = companies.filter(comp => ((comp.start >= 1980 && comp.start <= 1989) && (comp.end - comp.start >= 7)))

cl(comp80s7years);


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: " Retail ", start: 1981, end: 1989 }
];

// [{compName : "Company One", "category" : ""}] // who run for at least 10 years


// let compAt10 = companies.filter(comp => {
//     return comp.end - comp.start >= 10
// }).map(comp => {
//     return {
//         compName : comp.name,
//         category : comp.category
//     }
// })


let compAt10 = companies.filter(comp => comp.end - comp.start >= 10)
    .map(comp => {
        return {
            compName: comp.name,
            category: comp.category
        }
    })

cl(compAt10);


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: " Retail ", start: 1981, end: 1989 }
];

// [{compName : "One", duration : 10}]  // comp.category === "Retail" or "Finance"

let compRetailOrFin = companies.filter(comp => {
    let catg = comp.category.toLowerCase().trim();
    return catg.includes('retail') || catg.includes('finance');
}).map(comp => {
    return {
        compName: comp.name,
        duration: comp.end - comp.start
    }
})

cl(compRetailOrFin);



companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: " Retail ", start: 1981, end: 1989 }
];

// [{compName : "Company One", duration : "1981 - 2003"}] >> comp.cat == "retail" or "tech" && comp.duartaion should be at most 10

let comp = companies.filter(comp => (comp.category.toLowerCase().trim().includes('retail') || comp.category.toLowerCase().trim().includes('technology')) && (comp.end - comp.start <= 10)).map(comp => {
    return {
        compName: comp.name,
        duration: `${comp.start} - ${comp.end}`
    }
})

cl(comp)


// findIndex
companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: " Retail ", start: 1981, end: 1989 }
];

let givenId = 5 /// find the index of object whos id is 5

let indexVal = companies.findIndex(function (comp) {
    return comp.id === givenId
})
cl(indexVal)

let postComments = [
    {
        id: 123,
        msg: 'Your are not bad at all.'
    },
    {
        id: 124,
        msg: "You are not good at teaching"
    },
    {
        id: 125,
        msg: "You are Dumb"
    },
    {
        id: 126,
        msg: "You Don't have value of others time"
    },
    {
        id: 127,
        msg: "I Love the way you teach"
    }
]

let commentId = 125;

let getIndexOfComment = postComments.findIndex((com) => {
    return com.id === commentId
})

cl(getIndexOfComment)


postComments.splice(getIndexOfComment, 1);

cl(postComments);


companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: " Retail ", start: 1981, end: 1989 }
];

// find >> HOF
// we have given a array
// we have given one condition
// and we have to find a object who pass given condition

let givenCompId = 5;

// let getobj = companies.find((comp) => {
//     return comp.id === givenCompId
// })


let getobj = companies.find(comp => comp.id === givenCompId);

let getObj2 = companies.filter(comp => comp.id === givenCompId)

cl(getobj);
cl(getObj2[0])


// sort   >> as a HOF

ages = [11, 51, 23, 150, 240, 26, 45, 16, 78, 17, 49];

// ages = ages.sort((n1, n2) => {
//     if (n1 > n2) {
//         return 1
//     } else {
//         return -1
//     }
// });

// ages = ages.sort((n1, n2) => {
//    return (n1 > n2) ? 1 : -1
// });


ages = ages.sort((n1, n2) => (n1 >= n2) ? 1 : -1);

cl(ages)

let skills = ["Html", "CSS", "JS", "TS", "angular"];
cl(skills.sort())


companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: " Retail ", start: 1981, end: 1989 }
];


// let compAssending = companies.sort((comp1, comp2) => {
//     if(comp1.start > comp2.start){
//         return 1
//     }else{
//         return -1
//     }
// })


// let compAssending = companies.sort((comp1, comp2) => {
//    return (comp1.start > comp2.start) ? 1 : -1
// })

let compAssending = companies.sort((comp1, comp2) => (comp1.start > comp2.start) ? 1 : -1)


cl(compAssending)


let compDesending = companies.sort((c1, c2) => {
    return (c1.start < c2.start) ? 1 : -1
})

cl(compDesending)

// ages = [11, 51, 23, 150, 240, 26, 45, 16, 78, 17, 49];

// let totalOfAges = 0;  // undefined 


// for (let i = 0; i < ages.length; i++) {
//     totalOfAges += ages[i]
// }

// cl(totalOfAges)

// ages.forEach(age => {
//     // totalOfAges += age
//     totalOfAges = totalOfAges + age
// })

// cl(totalOfAges)


ages = [11, 51, 23, 150, 240, 26, 45, 16, 78, 17, 49];

totalOfAges = ages.reduce(function (accum, currentVal) {
    return accum = accum + currentVal
}, 0)

cl(totalOfAges)


companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: " Retail ", start: 1981, end: 1989 }
];

let totalAgeOfAllComp = 0;


// for(let i = 0; i < companies.length; i++){
//     totalAgeOfAllComp = totalAgeOfAllComp + (companies[i].end - companies[i].start)
// }

// cl(totalAgeOfAllComp)

// totalAgeOfAllComp = 0;

// companies.forEach(comp => {
//     totalAgeOfAllComp += comp.end - comp.start
// })

// cl(totalAgeOfAllComp)

totalAgeOfAllComp = companies.reduce((accum, comp) => {
    return accum += (comp.end - comp.start)
}, 0)

cl(totalAgeOfAllComp);


let products = [
    { name: "tshirts", price: 900 },
    { name: "HeadPhones", price: 15000 },
    { name: "KeyBoards", price: 900 },
    { name: "Laptop", price: 50000 },
    { name: "Shooes", price: 2000 },
]
// val >= 10000
// []
let fancyProducts = products.reduce((accu, cv) => {
    if (cv.price >= 10000) {
        accu.push(cv)
    }
    return accu
}, [])

cl(fancyProducts)


const users = [
    {
        id: 1,
        username: "Jhon",
        lastname: "Doe"
    },
    {
        id: 2,
        username: "Jhony",
        lastname: "Doe"
    },
    {
        id: 3,
        username: "Json",
        lastname: "Bourne"
    }
]

/// Jhon-Jhony-Json

let alluserNames = "Jhon-Jhony-Json";

let oldies = [25, 35, 45, 58, 46, 59, 89];
let youngins = [5, 12, 10, 16, 14, 17, 13];
ages = [5, 15, 26, 46, 48, 75, 23, 12]

// some 
// it returns boolean value
// you have given a array and a condition
// and you have to find that at least one element in a given array
// pass/satistfied a given condition
// when we get a element/memeber who pass given condition 
// then exicution of some loop will be stoped

// let canDrive2 = oldies.some((age) => {
//     if(age >= 18){
//         return true
//     }else{
//         return false
//     }
// })

// let canDrive2 = oldies.some((age) => {
//     return age >= 18
// })
let canDrive2 = oldies.some((age) => age >= 18)
cl(canDrive2);

youngins = [5, 12, 10, 16, 14, 17, 13];

// let canDrive3 = youngins.some(age => {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// })


// let canDrive3 = youngins.some(age => {
//   return age >= 18
// })

let canDrive3 = youngins.some(age => age >= 18)
cl(canDrive3);

let canDrive4 = ages.some(age => {
    return age >= 18
})

cl(canDrive4);


oldies = [25, 35, 45, 58, 46, 59, 89];
youngins = [5, 12, 10, 16, 14, 17, 13];
ages = [5, 15, 26, 46, 48, 75, 23, 12];


companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "ReTail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: " Retail ", start: 1981, end: 1989 }
];

let isAtLeastOne25 = companies.some(comp => {
    return (comp.end - comp.start) >= 25
})
cl(isAtLeastOne25)

// every 
// it returns boolean
// We have given a array with one condition
// we have to check each and every element/memeber of array pass/satisfied given condition 
// when we get a element/member whos does not pass given condtion
// exicution of every method will stoped and it returns false

oldies = [25, 35, 45, 58, 46, 59, 89];
youngins = [5, 12, 10, 16, 14, 17, 13];
ages = [5, 15, 26, 46, 48, 75, 23, 12];

// let canEveryOneDrive = oldies.every((age) => {
//     if (age >= 18) {
//         return true
//     } else {
//         return false
//     }
// })

// let canEveryOneDrive = oldies.every((age) => {
//    return age >= 18
// })

let canEveryOneDrive = oldies.every((age) => age >= 18)

cl(canEveryOneDrive)


// let canEveryOneDrive1 = youngins.every(age => {
//     return age >= 18
// })


let canEveryOneDrive1 = youngins.every(age => age >= 18)
cl(canEveryOneDrive1);




let x = [100, 200];

cl(typeof x);
cl(Array.isArray(x));
cl(Array.isArray(100));
cl(Array.isArray({fname : "Jhon"}));


let arr = [
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900],
    1000
]

let isEveryOneArray = arr.every(a => {
    return Array.isArray(a)
})

cl(isEveryOneArray);


// flat 

arr = [
    [100, [200, [300]]],
    [400, 500, 600],
    [700, 800, 900],
    1000
]
// [100,200,300,400,500,600,700,800,900,1000]
let result = arr.flat(Infinity)
cl(result)