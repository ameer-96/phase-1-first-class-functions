let receivesAFunction = callback => {
    callback();
}

function returnsANamedFunction() {
    return function Afunction() {

    }
}
function returnsAnAnonymousFunction() {
    return function anon(){
        
    }
}