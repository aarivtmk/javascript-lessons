// iife's - to improve security
// iife create a new scope which is not visible from outside scope
// so here when you write something in iife 

var Atm = (function () {

    x = 5;
    var account_balance = function () {
        return 2000+x;
    }


    // atm bal is private
    var atm_balance = function () {
        return '1000000';
    }


    return {
        a_balance: function () {
            console.log(account_balance());

        }
    }



})();

// console.log(Atm.account_balance());

console.log(Atm.a_balance());


