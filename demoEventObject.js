var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler
var myEventHandler = function () {
    console.log('I hear a sigaw!');
}

// Assign the event handler to an event:
eventEmitter.on('sigaw', myEventHandler);

console.log(eventEmitter.eventNames());

// Fire the 'sigaw' event:
eventEmitter.emit('sigaw');