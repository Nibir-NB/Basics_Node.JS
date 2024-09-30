
   const event = require('events');

   const emitter = new event();

   emitter.on('switchOn',()=>{                            // Event 
                                                          // callback function
    console.log('1st Emitter:  It is a simple emitter output .');
    
   })
   // Emitter listning
   emitter.emit('switchOn');                // the perameter should be same . Im=n this case it is switchOn
// The sequence matters , the .on() should be above .emit()



   emitter.on('secondEmit', (name,id)=>{
    console.log(`2nd Emitter:  The name is : ${name} \t The id is: ${id}`);
   })

   emitter.emit('secondEmit',"Nibir",115);


   emitter.on('finel',()=>{
    console.log("3rd Emitter:  This is third emitter output");
   })
   emitter.on('finel',(guitar)=>{
    console.log(`4th Emitter:  The guitar name is : ${guitar}`);
   })

   emitter.emit('finel',"guitar1");
                                           