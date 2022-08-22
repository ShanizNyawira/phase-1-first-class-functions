function receivesAFunction(callback) {
    console.log(callback());
    }

function returnsANamedFunction() {
    return returnsANamedFunction;
    }
var fn = returnsANamedFunction()
    
fn();

function returnsAnAnonymousFunction() {
    return function(){};
}
var fn = returnsAnAnonymousFunction()

 fn();
