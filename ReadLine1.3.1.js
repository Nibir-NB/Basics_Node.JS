const readline = require('readline');    // using the library, and make a veriable ' readline ' which will contain the properties of the readline file.






/*      //Example1
const process1 = readline.createInterface({                      //using the creatInterface property
    input: process.stdin,                                        // process is a global object
    output: process.stdout
});

process1.question('What is your name?\n ', 
    (inputName) => {                                            // the argument here is the input that the user type in the keybord
         console.log(`Your name is saved as ${inputName}\n  Wellcome ${inputName} !!!`);
         userName = inputName;
         process1.close();  // close the input stream when done reading from it.
    });
*/






let num1 = Math.floor(Math.random() * 10);          // generating a random number between 1-10
    let num2 = Math.floor(Math.random() * 10);
    let multi = num1*num2;
    let sum = num1+num2;



const process2 = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

process2.question(`What is the sum of ${num1} + ${num2}  \n`, 
    (sumPut)=>{                                                // the argument is the STRING which is typed by the user in the keybord 
          if(sumPut.trim()==sum){
            console.log('Correct ansture....');
            process2.close();                                  // leaving the program while the ans is correct
          }
          else{
            process2.setPrompt(`${sumPut} is wrong ans . Please try again \n`);
            process2.prompt();                                // taking input again
            process2.on('line',(sumPut)=>{                    // checking the above LINE ( ans ) is true or not
                if(sumPut.trim()==sum){
                    console.log('Correct ansture....');
                    process2.close();                         // leaving the program while it is true
                  }
                  else{
                    process2.setPrompt(`${sumPut} is wrong ans . Please try again\n `);
                    process2.prompt();                        // continue taking input as it is wrong ans 
                  }
            })
          }
    }
)






/*      // example3     uncomment to see

    const maths = readline.createInterface({                     
        input: process.stdin,                                       
        output: process.stdout
    });

    

    maths.question( `What is the result of ${num1} * ${num2} ?\n`,
        (mulInput) => {
            if( mulInput.trim() == multi){
                console.log('Correct Answer!!!...');
                maths.close();
            }
            else { 
                maths.setPrompt(`Wrong answer *_*     Please Try Again !!!\n`) ;           //console.log(`Wrong Answer!!!...    Please try again `)
                maths.prompt();
                maths.on('line',(mulInput)=>{
                    if ( mulInput.trim() == multi ){
                        console.log(`Correct Answer!!!...`);
                        maths.close();
                    }
                    else{
                        maths.setPrompt(`Wrong answer *_*     Please Try Again !!!\n`) ;
                        maths.prompt();   
                    }
                   
                    
                })
            }
                
        }
    )
*/




