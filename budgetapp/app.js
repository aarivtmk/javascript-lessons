// to do list
// modules
// private and public data
// encapusulation


// we use modules to split out code iinto small parts. so that no other
// code can overwrite. 


// data module
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allitems: {
            exp: [],
            inc: [],

        },

        total: {
            exp: [],
            inc: []
        }
    };

    return {

    }



})();







// ui module

var uiController = (function () {
    var DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'

    }

    return {
        getInput: function () {
            // var type = document.querySelector(DOMstring.inputType).value;
            // var description = document.querySelector(DOMstring.inputDescription).value;
            // var value = document.querySelector(DOMstring.inputValue).value;
            // return type,description,value;

            return {
                type: document.querySelector(DOMstring.inputType).value,
                description: document.querySelector(DOMstring.inputDescription).value,
                value: document.querySelector(DOMstring.inputValue).value,
            }





        },

        getDomString: function () {
            return DOMstring;
        }




    };




})();




// create control module

var controller = (function () {
    var DOM = uiController.getDomString();


    document.querySelector(DOM.inputButton).addEventListener('click', function () {

        ctrlAdditem();


    });

    document.addEventListener('keypress', function (key) {
        // console.log(key);
        if (key.keyCode === 13) {
            // console.log('enter pressed');

            ctrlAdditem();



        }


    });

    ctrlAdditem = function () {

        var newItem;

        //1. get the field input data
        var input = uiController.getInput();
        console.log(input);


        // 2 send item to budget controller data base




        //3. display item on ui



    }






})();
