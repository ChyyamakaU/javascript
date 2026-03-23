// var myProfile = {
//     name: "Amaka",
//     age: 50,
//     isStudent: false

// };

// console.log(myProfile);


// let name = "John",
// let age = 20;

// console.log(Name)

// reason for error: the variables in js is case sensitive. The variable name is in lower case while the output has the first character in upper case.


// 3.
console.log(true + false)
console.log(true + true)
console.log(false + false)

// I observed that true+false gives 1, true + true, 2, false + false, 0. 
// This means that js assigns 1 to true and 0 to false

// 4.
var studentName = "Amaka";
var studentAge = 20;
var isGraduated = true;

console.log(studentName)
console.log(studentAge)
console.log(isGraduated)


// 5.
var person = {
    name: "John",
    age: 25,
    isStudent: true,

};

console.log(person.name)
console.log(person.age)
console.log(person.isStudent)


person.age = 39;

console.log(person.age)

person.country = "Nigeria";
console.log(person.country)



// 6.

var phone = {

    battery: "4300 MAh approximately",
    camera: "48 mp",
    storage: "256g RAM",
    weight: "240 grams",
    price: 100000,
    isAndriod: false,
    owner: null

};

console.log(phone)


// 7. 
let user ={
    username:"admin",
    password: "1234"
};

console.log(user.username)
console.log(user.password)
 

// 8. 

let name = null;
let age 

console.log(name)
console.log(age)

// difference
// the first is a null data type which means there is no value for name
// the second is undefined which means it's value is yet to be assigned.


// 9.
var person = {
name: "Ama",
age: 12,
isStudent: true

};

console.log(person)


// 10.

let x = null;
let y  ;

console.log(x)
console.log(y)
console.log(typeof x)
console.log(typeof y)

// string concatination

// way 1
let greet = "Hello,";
let greeting = "World!";
// let result = greet + " "  + greeting;
// console.log(result);

// way 2.
// let greeting ="Hello, ";
// greeting += "world!";
// console.log(greeting);

// 3 using string literals
// let result = `${greet} ${greeting} from template literal`
// console.log(result);

// 4. methods used on a string with a string
// "Hello".concat()

// greet.concat(greeting)

// let result = "hello".concat (true+false,  " " , greeting, "," , "another " ) 
// console.log(result)




let quote = "Believe you can and you're halfway there.";
let authorName =  "Theodore Roosevelt"

let outcome = quote + "-" + authorName;

console.log(outcome);

let biography = {
firstName: "Amaka",
lastName : "Umunnakwe",
country: "Nigeria",
job: "Software Engineer"
};

let result = ` ${biography.firstName} ${biography.lastName} is a ${biography.job} in ${biography.country}`;

console.log (result)


let userProfile= {
name: "Solex",
age : 34,
country: "Nigeria",
hobby: "coding"
};

let profileOutcome  = `Name: ${userProfile.firstName} 
Age: ${userProfile.age} 
Country: ${userProfile.country}
Hobby: ${userProfile.hobby}`;

console.log (profileOutcome)