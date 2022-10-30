const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
//Import Routes
const authRoute  = require('./routes/auth');
const postRoute  = require('./routes/parduotuve');

dotenv.config();
//conect to db
const db=mysql.createConnection({
    host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});
  
  
  //check dataconnection
  db.connect(err=>{
    if (err) {console.log(err);}
    else console.log('databse conected');
  });

//middleware
app.use(express.json());


//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server Up '));