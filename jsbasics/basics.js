/*
in this lesson, we are going to discuss the following concepts
1.variables
2.console.log
3.datatypes
4.rules of variables
5.a glimspse at reserved keywords
6.comments and multiline comment
7.variable mutation and type coercion
8.alert
9.prompt
10.basic operators
11.operator precedence
12.Grouping operators
13.Multiple assignments
14. control statements
15. loops
16.truth and falsy values
17.Task Problems
18.functions

*/

// single line comment
/*
this 
is 
a  multi line comment
*/

var marks = 50 // integer literal
var temperature = 30.4 // float literal
var name = 'Mohammed' // string literal
var grade = 'A'  // character literal
var is_raining = true



console.log(marks)
console.log(name)

// concatenation
var first_name = 'Manish'
var last_name = 'kumar'

console.log('My name is : ' + first_name + ' ' + last_name)

// rules of variables
// start with only letters or _ or $
/*

PYTHON IS CASE SENSITIVE MEANS
NAME AND name are different

in javascript , they are same
*/

var Name = 'sandeep'
console.log('name is ', name)


// variable mutation and type coercion

name = 'steve'
age = 20
console.log('name is :' + name + '       ' + age)

// alert('Hey Manish! You got a new message!!')

// how to take input from console

// var first_name = prompt('What is first Name?')
// var last_name = prompt('what is your last name?')
// alert('your user name is ' + first_name + ' ' + last_name)
// console.log('your username is ' + first_name + ' ' + last_name)


// basic operators
// +,-,/,%,*,=,+=,-=,
// a+b 
// + - operator
// a,b - operands


var dob_sandeep = 1997
var age_sandeep = 2020 - dob_sandeep
console.log(age_sandeep)

var dob_steve = 1940
var age_steve = 2020 - dob_steve
console.log(age_steve)

// find who is elder person

// var elder = age_sandeep > age_steve

// console.log(elder)

if (age_steve > age_sandeep) {
    console.log('Steve is elder than Sandeep')
}
else {
    console.log('Sandeep is elder than Steve')
}
age = 2.2
console.log(typeof (age))
name = 'manish'
console.log(typeof (name))

// operator precedence

var present_year = 2020
var dob_sandeep = 2004
var age_for_vote = 18

var elgible_or_not = present_year - dob_sandeep >= age_for_vote

console.log(elgible_or_not)

var a = 5
// a = a + 3
a += 3

console.log(a)


// increment and decrement operators

// a = 2
// a++ // a= a+1
// console.log(a)

// a-- //a = a-1
// console.log(a)


a = 3

a = a * a //carot
console.log(a)


is_married = false

if (is_married) {
    console.log('you are married')
}
else {
    console.log('not married')
}

// find a no is 0 or positive or negative

var no = 0
if (no > 0) {
    console.log('postive')
}
else if (no == 0) {
    console.log('zero')

}
else {
    console.log('negative')

}


// and or not
//  && || !

// grant pension
// 1) more than 60y
// 2) applied status

age = 61
applied_status = false

if (age > 60 || applied_status == true) {
    console.log('grant pension')

}
else {
    console.log('pension rejected')
}
// AND & -AMPERSAND

// TT - T
// TF - F
// FT -F
// FF - F

// OR - ||

// FF - F
// TF -T 
// FT - T 
// TT -T 



// kid - <13
// teen - <20
// youngman - >19

var age = 6

if (age > 12 && age < 20) {
    console.log('you are an teenager')
}

else if (age > 20 && age < 35) {
    console.log('you are an youngster')

}

else if (age < 13) {
    console.log('you are a kid')
}
else {
    console.log('you are an adult')
}

// terenary operator

var age = 5
var eligible_for_vote
console.log(eligible_for_vote = (age > 18) ? 'elgible' : 'Not Elig');


// switch case - if else




// if (job == 'teacher') {
//     console.log(name + 'is a' + job)
// }
// else if (job == 'engineer') {
//     console.log(name + 'is a' + job)

// }

// else {
//     console.log('job not found')

// }

// give salary to people based on their designation
var job = 'teacher'



switch (job) {
    case 'manager':
        console.log('salary:10000')
        break

    case 'teacher':
        console.log('salary:5000')
        break


    case 'assistant':
        console.log('salary:3000')
        break


    default:
        console.log('base salary:1000')


}

// control statemtns - if,ifelse,else if ladder,switch case

// loops : for while do while


