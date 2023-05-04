const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL.');

  connection.query('CREATE TABLE IF NOT EXISTS counter (count INT);', (err) => {
    if (err) throw err;
    connection.query('INSERT INTO counter (count) SELECT 0 WHERE NOT EXISTS (SELECT * FROM counter);', (err) => {
      if (err) throw err;
    });
  });
});

app.get('/increment', (req, res) => {
  connection.query('UPDATE counter SET count = count + 1;', (err) => {
    if (err) throw err;
    connection.query('SELECT count FROM counter;', (err, result) => {
      if (err) throw err;
      res.json({ count: result[0].count });
    });
  });
});

app.listen(3000, () => {
  console.log('App listening on port 3000.');
});
