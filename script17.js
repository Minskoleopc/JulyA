// map()
let birthyear = [1989,1990,1991,1992]
let ages = birthyear.map(function(el,index,arr){
   // console.log(el)
   return 2023 - el 
})
console.log(ages)

let numbers = [1,2,3,4,5,6,7,8,9,10]
let tableOf2 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(tableOf2)

// filter()

let marks = [89,44,55,67,22,44,77,88]
//[89,67,77,88]
let q1 = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q1)

// reduce()

let nms = [11,22,33]
let total = 0
for(let i = 0 ; i < nms.length ; i++){
    total = total + nms[i]
}
console.log(total)

let q2 = nms.reduce(function(acc,el,index,arr){
    return acc + el 
},0)

console.log(q2)


// program 4 (forEach does not return anything)

let cities = ["nagpur","wardha","chandrapur","chennai"]
cities.forEach(function(el,index,arr){
    console.log('welcome '+ el)
})
//console.log(q3)

// program 5

let ns = [11,22,33,44,55,33,44,55] 
let n = ns.filter(function(el,index,arr){
    return el > 30
})
// [33,44,55,33,44,55]

let n2 = ns.find(function(el,index,arr){
    return el > 30
})
console.log(n2)

let n3 = ns.findIndex(function(el,index,arr){
    return el > 30
})
console.log(n3)


// program 6 

let m = [11,33,44,55,66,22,3]
let n4 = m.every(function(el,index,arr){
    return el > 10
})
console.log(n4)

let n5 = m.some(function(el,index,arr){
    return el > 600
})
console.log(n5)


// ppp() , push() , shift() , unshift(), includes
// map() , filter() , reduce() ,foeach()
// find() , findIndex() , every() , some()

// 8:30 am























