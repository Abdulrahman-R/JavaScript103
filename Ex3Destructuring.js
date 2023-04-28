//Dstructuring
let ages = [25,30,32]
let [firstAge, secondAge, thirdAge] = ages
console.log(firstAge, secondAge, thirdAge)

//undefined Dstructuring
let colors = ['red','blue']
let [fisrtColor, secondColor, thirdColor] = colors
console.log(fisrtColor, secondColor, thirdColor)

//Dstructuring Default Value

//colors = ['red','blue','black']
let [ftColor, sdColor, tdColor = 'yellow'] = colors 
console.log(ftColor, sdColor, tdColor)

//Ignoring values

colors = ['red','blue','black','green']
 let [,,fColor, sColor] = colors
 console.log(fColor, sColor)


 //Destructuring Nested Arrays
 let numbers = [1,2, [3,4]]
 let [first, second , third] = numbers
 console.log(first, second , third);
 console.log(first, second , third[0]);
 let [fNum, SNum,[fValue,sValue]] = numbers
 console.log(fNum, SNum,fValue,sValue);
 
 //swap with Destructuring
 let num1 = 1 , num2 =2;
 [num1,num2] = [num2,num1]
 console.log(num1,num2)


 //Destructuring with L(left) value

 colors = ['red','blue','black','green']

 [colors[0],colors[1]]=['purble', 'crimson']
 console.log(colors)

 //Object Destructuring

 let student = {
    name: 'Abdulrahman',
    age: 24,
    gender: 'male'
 }
 // let {name: myName,age: myAge} = student
 //console.log(myName,myAge)
 let name = 'Hamed' , age = 23 , gender ='male';
 //to solve the problem of 'blocks'
 //{name,age,gender} = student
 ({name,age,gender} = student)
 console.log(name,age,gender)


  //Destructuring Nested objects(two-level object)

  let uniStudent ={
    name: {

        first: 'Abdulrahman',
        lastName: 'Alrehaili'
    },
    //Object Destructuring using String Key
    '@s age': 25
  }

  let {name:{lastName: myLastName}} = uniStudent
  console.log(myLastName)
  console.log(uniStudent['@s age'])

  //Rest Declaration ----> تجمع القيم في متغير واحد
  let nums = [1,2,3,4,5,6,7]
  let [n1,n2,...otherN] =  nums
  console.log(n1,n2,otherN)
  console.log(n1,n2,...otherN)
  console.log(n1,n2,otherN[0])

//Spread Operator ----> تفكك القيم
let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [...array1,...array2]
console.log(array3)

//Rest Declaration with empty arrays
let foods = ['meat','Veggies']
let [f1,f2,...fs]=  foods
console.log(f1,f2,fs)

//Rest Declaration with objetcs

let gameDev = {
    gDevName: 'Salem',
    gDevAge: 24,
    gDevGender: 'male'
}
//object Dstructuring with  Default Value
let {gDevName,gDevNickName = 'unKnown',...otherInfo} = gameDev
console.log(gDevName,gDevNickName,otherInfo)


