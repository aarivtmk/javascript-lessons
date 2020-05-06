// modules - private and public control acesss

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

    };


    var database = {
        allItems: {
            exp: [],
            inc: []
        }
    };

    return {
        addItem: function (type, des, val) { //type : inc, des: sal, val: 40000
            var newTransaction, id;
            // id - [1,3] - next id-4
            // id = lastitem+1

            if (database.allItems[type].length > 0) {
                id = database.allItems[type][database.allItems[type].length - 1].id + 1;
            }
            else {
                id = 0;
            }


            if (type === 'exp') {
                newTransaction = new Expense(id, des, val);
                console.log('expense items in database', newTransaction);

            }
            else if (type === 'inc') {
                newTransaction = new Income(id, des, val);
                console.log('items in databse is', newTransaction);

            }

            // push data to database

            database.allItems[type].push(newTransaction);
            return newTransaction;


        }
    }




})();

// uicontroller
var uiController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeBlock: '.income__list',
        expensesBlock: '.expenses__list',

    };




    return {

        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }

        },

        addListItem: function (newitem, type) {
            // create html with placeholder text
            var html, newHtml;

            if (type === 'inc') {
                block = DOMStrings.incomeBlock;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div > '


            }

            else if (type === 'exp') {
                block = DOMStrings.expensesBlock;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div>          <div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete" > <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div ></div > ';
            }

            // replace placeholder with the actual value

            newHtml = html.replace('%id%', newitem.id);
            newHtml = newHtml.replace('%description%', newitem.description);
            newHtml = newHtml.replace('%value%', newitem.value);


            // insert it into html

            document.querySelector(block).insertAdjacentHTML('afterbegin', newHtml);


        },

        getDom: function () {
            return DOMStrings;
        },

    }

})();


// viewcontroller - it controls both uicontroller and budget controller

var viewcontroller = (function (bCtrl, uiCtrl) {

    var DOM = uiCtrl.getDom();

    var setupEvents = function () {
        console.log('app started');


        document.querySelector(DOM.inputButton).addEventListener('click', function () {
            // console.log('clicked');
            ctrlAdditem();



        });

        document.addEventListener('keypress', function (key) {
            if (key.keyCode === 13) {
                // console.log('enter clicked');
                ctrlAdditem();

            }
        })


    };

    ctrlAdditem = function () {

        // take input from ui
        var input = uiCtrl.getInput();
        console.log('input is', input);

        // add this input to database

        var item = budgetController.addItem(input.type, input.description, input.value);
        console.log('inserted successfully', item);



        // add the item to ui

        uiCtrl.addListItem(item, input.type);

    }



    return {
        startApp: function () {
            return setupEvents();
        }
    }


})(budgetController, uiController);

viewcontroller.startApp()







