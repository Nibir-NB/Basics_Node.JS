const fs = require('fs')

function fileData1(){
    return new Promise((resolve,reject)=>{
        
            // console.log('Inside the promise');
            fs.readFile('./files/file1.txt','utf8',(err,data)=>{
                  if(err)
                    reject('Error in reading the file');
                else
                resolve(data);
            });

            
    }
)
}

// fileData().then((data)=>{
//     console.log(data);
    
// }).catch((err)=>{console.log(err)});

function fileData2(){
    return new Promise((resolve,reject)=>{
        
            // console.log('Inside the promise');
            fs.readFile('./files/file2.txt','utf8',(err,data)=>{
                  if(err)
                    reject('Error in reading the file');
                else
                resolve(data);
            });

            
    }
)
}

async function merged() {
    try {
        const data1 = await fileData1();
        const data2 = await fileData2();
        console.log(`The merged data is :  ${data1+data2}`);
        
    } catch (error) {
        console.log(error);
        
    }
}

merged();

