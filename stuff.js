// module.exports.gypsy = function(arr){
//     return 'There are '+ arr.length + ' gypsies in this array';
// };

// module.exports.sum = function(x,y){
//     return `the sum of the two numbers is ${x + y}`;
// };
// module.exports.pi = 3.142;

let gypsy = function(arr){
    return 'There are '+ arr.length + ' gypsies in this array';
};

let sum = function(x,y){
    return `the sum of the two numbers is ${x + y}`;
};
let pi = 3.142;

module.exports = {
    gypsy: gypsy,
    sum: sum,
    pi: pi
};



