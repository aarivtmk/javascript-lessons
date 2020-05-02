// function constructors
// protype
// protype chain
// passing function as parameter/argument
//functions returns in functions
// IIFE - to improve data privacy
// closures
// bind/call/apply





// what is object

// var object = {
//     key: value
// }

// var john = {
//     name: 'john doe',
//     yearOfBirth: 1998,
//     job: 'teacher',
//     calculateAge: function () {
//         this.age = 2020 - this.yearOfBirth;
//     }
// }
// console.log(john);
// john.calculateAge();
// console.log(john);

// var Student = function (name, rollno, dob) {
//     this.name = name;
//     this.rollno = rollno;
//     this.dob = dob;

// }


// Student.prototype.calculateAge = function () {
//     this.age = 2020 - this.dob;

// }

// Student.prototype.college = 'MIT';

// var s1 = new Student('manishkumar', 121, 1997);

// console.log(s1);

// var s2 = new Student('mohammed', 121, 1990);
// console.log(s2);



// functions passing as argument 

// var years = [1998, 2005, 1997, 1960];

// function calculate(yearsArray, fun) {
//     var arrRes = [];
//     for (var i = 0; i < yearsArray.length; i++) {
//         arrRes.push(fun(yearsArray[i]))
//     }

//     return arrRes;
// }

// function calculateAge(ele) {
//     return 2020 - ele;
// }


// var agesofPeople = calculate(years, calculateAge);
// console.log(agesofPeople);




// functions return functions
// program for an interview based on the job title

function interviewQuestion(job) {
    if (job == 'designer') {
        return function (name) {
            console.log('hey ' + name + ' , what do you mean by design?');

        }

    }

    else if (job == 'teacher') {
        return function (name) {
            console.log('hey ' + name + ' , what do you teach?');

        }
    }

    else if (job == 'software engineer') {
        return function (name) {
            console.log('hey ' + name + ' , are you a front end or backend engineer?');

        }
    }

    else {
        return function (name) {
            console.log('hey ' + name + ' ,what do you do?');

        }
    }

}
// var tQ = interviewQuestion('teacher');
// tQ('manish');

// var designerQuestion = interviewQuestion('designer');


// designerQuestion('sandeep');

// IIFE - immediately invoked function expression used for data privacy

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 6);

// }
// game()


(function () {
    var score = Math.random() * 10;
    console.log(score >= 6);
})();


// closures

// an inner function will always have access to variables and Parameters of it outer function
// even after the outer function returned

// find year remain for retirement

// function retirement(retirementAge) {
//     var a = 'years left for retirement';
//     return function (yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);

//     }
// }


// // find retirement for indian

// var retirementIndian = retirement(65);
// retirementIndian(1960);


// // find retirement for German
// var retirementGerman = retirement(70);
// retirementGerman(1960);


// call / apply /bind - method borrowing

var s1 = {
    name: 'stevejobs',
    age: 22,
    job: 'student',
    presentation: function (style, timeOftheDay) {
        if (style == 'formal') {
            console.log('Good' + timeOftheDay + ' I am ' + this.name);

        }

        else {
            console.log('Hey friends' + ' I am ' + this.name + '. have a nice ' + timeOftheDay);

        }
    }
}
var s2 = {
    name: 'jack dorsey',
    age: 23,
    job: 'student',
}


// so here if you want to call presentation from s2, you have to borrow it

s1.presentation.call(s2, 'formal', 'Evening');

// what is apply
// you have to give input in the form of array
// s1.presentation.apply(s2, ['friendly', 'afternoon']);

// bind - instead of calling, here we copy the function

var s2function = s1.presentation.bind(s2, 'formal', 'Evening');
s2function()







