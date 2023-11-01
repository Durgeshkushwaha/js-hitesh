let score = 33  // it is guarantee that it is a number

// const {score} = req.body // but it is not known whether it number or string or any other thing

 console.log(typeof score);//  O/P=> number

let score1= "33" 

 console.log(typeof score1) //  => string

let num= Number(score1)  // Now here string score1 becomes converted into number
  console.log(typeof num)  // its output will (number)

let score2= "33abc"

let num1=Number(score2)
  console.log(typeof num1);  // => number
  console.log(num1)     // => NaN(Not a Number)


let score3= null

 console.log(typeof score3) // => object
 console.log(score3);   // => null

  let numb= Number(score3)  
 console.log(typeof numb)  // =>number
 console.log(numb)       // => 0

 let sco=true

 console.log(typeof sco) // => boolean
 let numb1=Number(sco)
 console.log(typeof numb1)  // => number
 console.log(numb1)          // => 1  , but if sco=false then it will give 0

let scor="shyam"

let n=Number(scor)
console.log(typeof n)  // =>number
console.log(n)        // NaN

// Note:-
// "33" =>33    
// "33acb" => NaN
// true => 1 ,false => 0

// Note:-if we will convert into boolean 
//  1 => true, 0 => false
//  empty string ("") => false 
//  non empty string ("ram") => true 

