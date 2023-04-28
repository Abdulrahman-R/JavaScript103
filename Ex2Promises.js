//Synchronous concept:
/*
execute the process up to bottom , statement after another
 even if a statement takes too long to be executed
*/

//Asynchronous concept --> if the process takes too long to be executed 
//skip it unitl it finshes the execuation 

//example 1
/*
console.log(1)
console.log(2)
setTimeout(() => {
    console.log(3)
},3000)
console.log(4)
console.log(5)
*/


//Asynchronous example 2
/*
console.log('start')
function userInfo(name){
    setTimeout(() => {
        console.log('** User info received**')
        return name
    },3000)
    
}

let userName = userInfo('Khalid')
console.log(userName)
console.log('end')
*/

//using callback to solve Asynchronous problem in example2
/*
console.log('start')
function userInfo(name, callback){
    setTimeout(() => {
        console.log('** User info received**')
        callback(name) 
    },3000)
    
}

let userName = userInfo('Abdulrahman', name =>{
    console.log(`Your name is ${name}`)
})
console.log('end')
*/


//solving example 2 with promise
console.log('start')
const userInfo = new Promise((resolve,reject) => {
    setTimeout(() => {
        const newUser ={
            name: 'Abdulrahman',
            age: 11
        }
        resolve(newUser)
    },3000)
    
})
//adding an age condtion
const addNewUser = newUser => {
    let userAge = newUser.age
    let adultAge;
    if(userAge >= 18){
        adultAge = `${newUser.name} is an Adult`
        //promise.resolve
        return Promise.resolve(adultAge)
    }else{
        adultAge  = `${newUser.name} is NOT an Adult`
         //promise.reject
        return Promise.reject(new Error(adultAge))
    }
   
}

userInfo
//to execute promise.resolve
.then(addNewUser)
.then(res =>{
    console.log('** User info received**')
    console.log(res)
})
//to execute promise.reject
.catch(err => {
    console.log(err.message)
})
console.log('end')

