/* var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('CustomEvent',function (message,status){
    console.log(`${status}: ${message}`);
});
emitter.emit('CustomEvent','Salam',200);
*/
//-------------------------------------------------
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Person = function (name){
this.name = name;
};
util.inherits(Person,EventEmitter);
var nima = new Person('Nima Javanmardi');
nima.on('speak',function (said){
console.log(`${this.name}:${said}`);
});
nima.emit('speak','Real Eyes Realize Real Lies.');

