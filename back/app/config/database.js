var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'ltnya0pnki2ck9w8.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  user: 'e8pk8b2sgejq4aiz', //
  password: 'oupy8n5i8orlikgn', //
  database: 'afw5epqtsyzcw62i',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection