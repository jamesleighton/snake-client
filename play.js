const { connect } = require('./client');

console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput(stdin);

  return stdin;
}
  
  //setupInput();


 const handleUserInput = function(stdin) {
   stdin.on('data', (key) => { 
     if (key = '\0003') {
       process.stdout.write("Thanksssss.");
       process.exit();
     }
   })
 };


