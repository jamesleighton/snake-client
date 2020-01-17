const net = require('net');

const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,   //"localhost,"
    port: PORT //50543
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


