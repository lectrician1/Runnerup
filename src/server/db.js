function register(username, name, email, password) {
  const { Client } = require('pg')
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });

  client.connect();
  
  var text = 'INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, crypt($4, gen_salt(\'bf\', 8)));';
  var values = [name, username, email, password];
  client.query(text, values, (err, res) => {
    console.log(res);
    client.end();
  });
}

function login(username, email, password) {
  const { Client } = require('pg')
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });

  client.connect();
  
  var text = 'SELECT * FROM users WHERE email = lower($1) OR username = lower($2) AND password = crypt($3, password);';
  var values = [email, username, password];
  client.query(text, values, (err, res) => {
    if (res) {
      console.log(res);
    }
    client.end();
  });
}

module.exports = {
  login,
  register
}
