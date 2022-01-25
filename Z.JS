// const { Writable } = require('stream');

// const myStream = new Writable();

// console.log(myStream.destroyed); // false
// myStream.destroy();
// console.log(myStream.destroyed); 




// // Write 'hello, ' and then end with 'world!'.
// const fs = require('fs');
// const file = fs.createWriteStream('example.txt');
// file.write('hello, ');
// file.end('world!');
// // Writing more now is not allowed!


var fs = require("fs"); 
// Insert a readable stream 
var readerStream = fs.createReadStream('example.txt');
 // Insert a writable stream
  var writerStream = fs.createWriteStream('output.txt');
   // Pipe the read and write operations 
   
   // read input.txt and write data to output.txt
    readerStream.pipe(writerStream); 
    console.log("Program Ended"); 
  