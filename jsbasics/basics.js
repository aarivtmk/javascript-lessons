// /*
// type coercion
// variable mutation
// variables in detail - primitives
// difference between primitives
// == and ===
// arrays
// objects
// initializing objects

// objects and functions


// OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT
// FUNCTION CONSTRUCTORS
// PROTOTYPES
// INHERITANCE

// EXPLANATION WITH CONSOLE
// primitives vs objects
// functions in details - passing functions as an arugument
// IIFE - immediately invoked function
// closures

// */


// // type coercion - automatically converts integer or boolen or float to string
// name = 'steve';
// age = 60;

// // console.log(name + age);

// var job, is_married;
// job = 'teacher';
// is_married = false;

// // console.log(name + ' is a ' + age + ' years old and' + ' is a' + job + ' and is he married?' + is_married);

// // variable mutation - able to vhange the value of variables

// age = 'sixty';
// // console.log(age);

// // console.log(name + ' is a ' + age + ' years old and' + ' is a' + job + ' and is he married?' + is_married);


// // primtives : Number, String,Boolean,undefined,null

// // we use NULL to definine nothing

// // var n = null;
// // console.log(n);
// // console.log(typeof (n));
// // null has a datatype of object

// // what is undefined

// // var marks;
// // console.log(marks);

// // var temp = undefined;
// // console.log(temp);
// // console.log(typeof (temp));

// // NOTE: undefined has no data type

// var name = ""
// // empty means empty string
// // console.log(name);


// // == and ===

// // === strict comparision

// // var number1 = '1';
// // var number2 = 1;

// // console.log(number1 === number2);

// // array is nothing but list

// // var marks = [1, 2, 4, 'hi']
// // console.log(marks);

// // marks.push(100);
// // console.log(marks);
// // marks.pop();
// // console.log(marks);



// // object

// // object is nothing but dictionary

// // var student = {
// //     first_name: 'steve',
// //     last_name: 'jobs',
// //     family: ['mohammed', 'manish']
// // }

// // console.log(student['last_name']);
// // console.log(student.family[1]);

// // student['last_name'] = 'dorsey';
// // console.log(student);

// // student.first_name = 'jack';
// // console.log(student);


// // initializing objects

// // var student2 = new Object();
// // student2.name = 'aariv';
// // student2.rollno = 202;

// // console.log(student2);



// // objects and methods

// // var student = {
// //     first_name: 'steve',
// //     last_name: 'jobs',
// //     yearofBirth: 1990,
// //     calculateAge: function () {
// //         return 2020 - this.yearofBirth;

// //     }
// // }

// // age = student.calculateAge();

// // student['age'] = age;
// // console.log(student);


// var student = {
//     first_name: 'steve',
//     last_name: 'jobs',
//     yearofBirth: 1990,
//     calculateAge: function () {
//         this.age = 2020 - this.yearofBirth;
//         console.log(this.age);


//     }
// }
// // console.log(student);

// // student.calculateAge()
// // console.log(student);


// // oop in javascript

// // inorder to create a blueprint, here we use function constructors
// //  instead of class



// // var Person = function (name, yearofBirth, job) {
// //     this.name = name;
// //     this.yearofBirth = yearofBirth;
// //     this.job = job;


// //     // function to calculate age
// //     this.calculateAge = function () {
// //         console.log(2020 - this.yearofBirth);

// //     }

// // }

// // var s1 = new Person('mohammed zulfekar', 1998, 'teacher');
// // s1.calculateAge();
// // console.log(s1.yearofBirth);


// // var s2 = new Person('sandeep zulfekar', 1997, 'software engineer');

// // s2.calculateAge();



// // var Dog = function (name, height, weight, breed) {
// //     this.name = name;
// //     this.height = height;
// //     this.weight = weight;
// //     this.breed = breed;

// //     this.bark = function () {
// //         console.log(this.name + ' barks bow bow!!!');

// //     }
// // }

// // dog1 = new Dog('jimmy', 3, 20, 'Lab');

// // console.log(dog1.name);
// // console.log(dog1.bark());





// // inheritance
// // we use prototypes for inhertitance in javascript


// var Person = function (name, yearofBirth, job) {
//     this.name = name;
//     this.yearofBirth = yearofBirth;
//     this.job = job;

// }


// Person.prototype.calculateAge = function () {
//     console.log(2020 - this.yearofBirth);

// }

// Person.prototype.last_name = 'SBI'

// var man1 = new Person('manish', 1997, 'developer');
// var man2 = new Person('darpan', 1998, 'student');
// var man3 = new Person('stevejobs', 1960, 'ceo');



// // console.log(man1.name);
// // console.log(man2.name);
// // console.log(man3.name);
// // console.log(man1.yearofBirth);
// // console.log(man2.yearofBirth);
// // console.log(man3.yearofBirth);

// man1.calculateAge()
// console.log(man1.last_name);





// // var man1 = {
// //     first_name: 'steve',
// //     last_name: 'jobs',
// //     yearofBirth: 1990,
// //     calculateAge: function () {
// //         this.age = 2020 - this.yearofBirth;
// //         console.log(this.age);


// //     }
// // }

// // var man2 = {
// //     first_name: 'steve',
// //     last_name: 'jobs',
// //     yearofBirth: 1990,
// //     calculateAge: function () {
// //         this.age = 2020 - this.yearofBirth;
// //         console.log(this.age);


// //     }
// // }

// // var man3 = {
// //     first_name: 'steve',
// //     last_name: 'jobs',
// //     yearofBirth: 1990,
// //     calculateAge: function () {
// //         this.age = 2020 - this.yearofBirth;
// //         console.log(this.age);


// //     }
// // }




// var BankAtm = function (cname, cardNo, branch, balance) {
//     this.cname = cname;
//     this.cardNo = cardNo;
//     this.branch = branch;
//     this.balance = balance;

// }

// BankAtm.prototype.withdrawal = function (wa) {
//     if (this.balance > wa) {
//         this.balance = this.balance - wa;
//     }
//     else {
//         alert('sorry insufficient funds')
//     }
//     return this.balance;
// }

// BankAtm.prototype.balEnq = function () {
//     console.log('your bal is' + this.balance);
// }

// person1 = new BankAtm('steve', 121, 'ameerpet', 1000);
// person2 = new BankAtm('jack', 122, 'srnagar', 1500);
// person3 = new BankAtm('elon', 123, 'charminar', 2000);

// console.log(person1.branch);

// console.log(person1.withdrawal(800));


// copying primitives

// var a = 23;
// var b = a;
// a = 40;

// console.log(a);  //40
// console.log(b);  //23

// // reference objects

// var obj1 = {
//     name: 'steve',
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);



// passing object as parameter of the function

// age = 20

// function changeDetails(n) {

//     n = 25;
//     console.log(n);


// }


// changeDetails(age);
// console.log(age);






// var person_details = {
//     name: 'steve',
//     city: 'New york'
// }


// function changeDetails(object) {

//     object.name = 'jobs';
//     object.city = 'hyd';
//     console.log(object.name);


// }


// changeDetails(person_details)

// console.log(person_details.name);



var person_details = {
    // name: 'steve',
    // city: 'New york'
}

console.log(person_details);



var person = new Object();
// person.name = 'jobs';
// person['city'] = 'sec';

console.log(person);
