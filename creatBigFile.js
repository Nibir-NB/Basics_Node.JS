const {writeFileSync} = require('fs');
// const bigFile = fileSystem();

for( i=1;i<=1000;i++){
   writeFileSync(`./files/big.txt`,`Hello world ${i}\n`,{flag:'a'})
}