//Test method
const str = 'I love game development'
let regex = /game/

let containsRegex = regex.test(str)
console.log(containsRegex)

//false use case
//regex = /software/
//console.log(regex.test(str))

//Replace method
let newStr = str.replace(regex, 'app')
console.log(newStr)


//search method
let searchStr = str.search(/game/)
console.log(searchStr)

//match
let nStr = '1 2 3 4 5 3 1 3 45 6 343 2 1 3 43 1'
let matchArray = nStr.match(/1/g)
console.log(matchArray)
console.log(matchArray.length)