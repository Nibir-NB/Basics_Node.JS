const EventEmitter = require('events');

const event = new EventEmitter();


event.on('test1', () => { console.log("Test1")});

event.on('test2', (arg1) => { console.log("Test2  "+arg1) });

event.on('test3', (arg1, arg2) => { console.log(`Test3 ${arg1} ${arg2}`) });



event.emit('test1');

event.emit('test2','Argument_for_test2');

event.emit('test3','Argument1_for_test3',"Argument2_for_test3");

//Example1
let num1 = 67;
let num2 = 33;
event.on('sum', (num1,num2) => { console.log(`Test4 : Sum of ${num1} and ${num2} is equal to  ${num1+num2}`) });
event.emit('sum', num1, num2);


//Example2
let name = "Pikachu";
let type = "Electric";
let level = 100;
let atk = 50;
event.on('test4', (name,type,level,atk) => { 
    console.log(`Test5: ${name} is a ${type}. It's level is ${level}, and it has an attack power of ${atk}`)
     });
event.emit('test4', name, type, level, atk);

