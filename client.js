const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    console.log('successfully connected');
    conn.write('Name: JNL');
  });

  conn.on('data', (data) => {
    console.log(data);
  })

return conn;
}

module.exports = {connect};


