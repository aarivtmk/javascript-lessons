// modules - using iife and closures
// adv: private and public - you can control access



// data module

var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };



    var database = {
        allitems: {
            exp: [],
            inc: [],
        },

        totals: {
            exp: [],
            inc: [],
        },

    };


    return {
        addItem: function (type, des, val) {
            var newItem, id;
            // id - [1,2,4] - next id =4
            // id - [1,3,]- next id =4
            // id = lastitem+1

            if (database.allitems[type].length > 0) {
                id = database.allitems[type][database.allitems[type].length - 1].id + 1;

            }
            else {
                id = 0;
            }



            if (type === 'exp') {
                newItem = new Expense(id, des, val);
            }
            else if (type === 'inc') {
                newItem = new Income(id, des, val);
            }

            // push data to database
            database.allitems[type].push(newItem);
            return newItem;


        }
    }


})();



// template or user interface module
var uiController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
    };


    // var obj = {

    // }

    return {
        getInput: function () {

            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value,
            }

        },

        getDOM: function () {
            return DOMStrings;
        }
    }





})();


// controller module
var viewcontroller = (function (budgetCntrl, uiCntrl) {



    var ctrlAdditem = function () {
        var input = uiCntrl.getInput();
        console.log(input);


        // add item to the budget controller

        var item = budgetCntrl.addItem(input.type, input.description, input.value);
        console.log('the newitem in the database is', item);

    }

    var setupEvents = function () {
        var DOM = uiCntrl.getDOM();
        console.log(DOM);

        // add event listener
        document.querySelector(DOM.inputButton).addEventListener('click', function () {
            ctrlAdditem();

        });

        document.addEventListener('keypress', function (key) {

            if (key.keyCode === 13) {
                ctrlAdditem();

            }


        });
    }


    return {
        startEvent: function () {
            console.log('app started');

            setupEvents();
        }
    }



})(budgetController, uiController);

viewcontroller.startEvent();
