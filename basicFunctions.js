// normal function statement
function sayJoca(){
    console.log('titan');
}
sayJoca();

//function expression
let sayTitan = function(){
    console.log('gypsy');
};
sayTitan();

function callJoca(joca){
    joca();
};
callJoca(sayTitan);