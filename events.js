let events = require('events');

let util = require('util');

let Gypsy = function(name){
    this.name = name;
};

util.inherits(Gypsy, events.EventEmitter);

let joca = new Gypsy('joca');
let jenny = new Gypsy('jenny');
let sophie = new Gypsy('sophie');

let people = [joca, jenny, sophie];

people.forEach(function(gypsy){
    gypsy.on('speak', function(mssg){
        console.log(gypsy.name + ' said ' + mssg);
    });
});
jenny.emit('speak', ' whats up titans');
joca.emit('speak', ' we are good jenny');