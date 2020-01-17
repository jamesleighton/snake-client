
let connection;
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput(stdin, conn);

  return stdin;
}
  
 const handleUserInput = function(stdin, conn) {
   process.stdin.on('data', (key) => { 
     if (key === '\u0003') {
       process.stdout.write("Thanksssss.");
       process.exit();
      }
      if (key === "w") {
        conn.write('Move: up');
      }
      if (key === "a") {
        conn.write('Move: left'); 
      }
      if (key === "d") {
        conn.write('Move: right');
      } 
      if (key === "s") {
        conn.write('Move: down');
      }
    }
  )};
//handleUserInput();
//setupInput();

 module.exports = { setupInput };