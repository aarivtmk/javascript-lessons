// // difference between let and const

// function start() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i)
//     }

//     console.log(i)
// }

// start()

// function start() {
//     for (var i = 0; i < 5; i++) {
//         if (true) {
//             var color = 'red';
//         }
//     }
//     console.log(color)


//     console.log(i)
// }

// start()


// objects
// creating objects
// factories and constructors
// primitives and referencetypes
// working with properties
// private properties
// getters and setters


const circle = {
    radius: 1,
    localtion: {
        x: 1,
        y: 2,
    },
    draw: function () {
        console.log('draw')
    }

};

circle.draw();


