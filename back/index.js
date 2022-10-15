const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const mysql = require('mysql2');

app.use(cors());
app.use(bodyParser.json());

//database conection 
const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'sistema',
  port:3306
});


//check dataconnection
db.connect(err=>{
  if (err) {console.log('error');}
  console.log('databse conected');
});

//visos parduotuves
app.get('/parduotuves',(req,res)=>{
  let qr = 'select * from parduotuve';
  db.query(qr,(err,result)=>{
    if (err)
    {
      console.log(err,'errs');
      res.send({
        message:'Not found',
        status:404,
      });
    }
    if (result.length>0)
    {
      res.send({
        message:'all users data',
        status:200,
        data:result
      });
      
    }
  });
});


//viena parduotuve
app.get('/parduotuves/:id',(req,res)=>{
  let gID = req.params.id;
  let qr = `select * from parduotuve where id = ${gID}`;
  db.query(qr,(err, result)=>{
    if(err) {console.log(err);}
    if (result.length >0)
    {
      res.send({
        message:'get single data',
        status:200,
        data:result
      });
      
    }
    else
    {
      res.status(404).send({
        message:'data not found',
        status:404
      });
      
    }
  });
});
//vienos parduotuves skyriai
app.get('/parduotuves/:id/skyriai',(req,res)=>{
  let gID = req.params.id;
  let qr = `select * from skyrius where parduotuve_id = ${gID}`;
  db.query(qr,(err, result)=>{
    if(err) {console.log(err);}
    if (result.length >0)
    {
      res.send({
        message:'visi skyriai',
        status:200,
        data:result
      });
      
    }
    else
    {
      res.send({
        message:'data not found',
        status:404
      });
      
    }
  });
});
//vieno skyriaus atvaizdavimas
app.get('/parduotuves/:id/skyriai/:ids',(req,res)=>{
  let gID = req.params.id;
  let ids = req.params.ids;
  let qr = `select * from skyrius where parduotuve_id = ${gID} and id = ${ids}`;
  db.query(qr,(err, result)=>{
    if(err) {console.log(err);}
    if (result.length >0)
    {
      res.send({
        message:'get single data',
        status:200,
        data:result
      });
      
    }
    else
    {
      res.send({
        message:'data not found',
        status:404
      });
      
    }
  });
});
//vienos parduotuves, vieno skyriaus visu prekiu atvaizdavimas
app.get('/parduotuves/:id/skyriai/:ids/prekes',(req,res)=>{
  let gID = req.params.id;
  let ids = req.params.ids;
  let qr = `select * from preke where parduotuve_id = ${gID} and skyrius_id = ${ids}`;
  db.query(qr,(err, result)=>{
    if(err) {console.log(err);}
    if (result.length >0)
    {
      res.send({
        message:'get all data',
        status:200,
        data:result
      });
      
    }
    else
    {
      res.send({
        message:'data not found',
        status:404
      });
      
    }
  });
});
//gauti vienos parduotuves, vieno skyriaus, vienos prekes vaizda
app.get('/parduotuves/:id/skyriai/:ids/prekes/:idp',(req,res)=>{
  let gID = req.params.id;
  let ids = req.params.ids;
  let idp = req.params.idp;
  let qr = `select * from preke where parduotuve_id = ${gID} and skyrius_id = ${ids} and id=${idp}`;
  db.query(qr,(err, result)=>{
    if(err) {console.log(err);}
    if (result.length >0)
    {
      res.send({
        message:'get single data',
        status:200,
        data:result
      });
      
    }
    else
    {
      res.send({
        message:'data not found',
        status:404
      });
      
    }
  });
});

//parduotuves itraukimas
app.post('/parduotuves',(req, res)=>{
  if (!req.body) return res.send({
    message:'data not found',
    status:404
  });
  console.log(req.body, 'createdata');
  let pavadinimas = req.body.pavadinimas;
  let adresas = req.body.adresas;
  let parduotuves_vadovas = req.body.parduotuves_vadovas;
  let darbuotoju_kiekis = req.body.darbuotoju_kiekis;
  let prekiu_kiekis = req.body.prekiu_kiekis;

  let qr = `insert into parduotuve(pavadinimas, adresas, parduotuves_vadovas, darbuotoju_kiekis, prekiu_kiekis) values('${pavadinimas}','${adresas}','${parduotuves_vadovas}','${darbuotoju_kiekis}','${prekiu_kiekis}')`;

  db.query(qr,(err,result)=>{
    if (err){
      console.log(err);
      res.send({
        message:'can not insert data',
        status:500
      });
    }
    else{
      console.log(result,'result')
      res.send({
        message:'data inserted',
        status:201
      });
    }   
  });
});



//skyriaus itraukimas
app.post('/parduotuves/:id/skyriai',(req, res)=>{
  if (!req.body) return res.send({
    message:'data not found',
    status:404
  });
  console.log(req.body, 'createdata');
  let pavadinimas = req.body.pavadinimas;
  let prekiu_tipas = req.body.prekiu_tipas;
  let prekiu_kiekis = req.body.prekiu_kiekis;
  let parduotuve_id = req.params.id;

  let qr = `insert into skyrius(pavadinimas, prekiu_tipas, prekiu_kiekis, parduotuve_id) values('${pavadinimas}','${prekiu_tipas}','${prekiu_kiekis}','${parduotuve_id}')`;

  let qr2 = `select * from parduotuve where id = '${parduotuve_id}'`;
  db.query(qr2,(err,result)=>{
    if (err){
      console.log(err);
      res.send({
        message:'can not insert data',
        status:500
      });
    }
    else{
      db.query(qr,(err,result)=>{
        if (err){
          console.log(err);
          res.send({
            message:'can not insert data',
            status:403
          });
        }
        else{
          console.log(result,'result'),
          res.send({
            message:'data inserted',
            status:201
          });
        }   
      });
    }   
  });
});

//vienos prekes itraukimas
app.post('/parduotuves/:id/skyriai/:ids/prekes',(req, res)=>{
  console.log(req.body, 'createdata');
  let pavadinimas = req.body.pavadinimas;
  let aprasymas = req.body.aprasymas;
  let svoris_gramais = req.body.svoris_gramais;
  let skyrius_id = req.params.ids;
  let parduotuve_id = req.params.id;

  let qr = `insert into preke(pavadinimas, aprasymas, svoris_gramais, skyrius_id, parduotuve_id) values('${pavadinimas}','${aprasymas}','${svoris_gramais}','${skyrius_id}','${parduotuve_id}')`;

  db.query(qr,(err,result)=>{
    if (!req.body) return res.send({
      message:'data not found',
      status:404
    });
    if (err){
      console.log(err);
      res.send({
        message:'can not insert data',
        status:500
      });
    }
    else{
      console.log(result,'result')
      res.send({
        message:'data inserted',
        status:201
      });
    }   
  });
});


//vienos parduotuves atnaujinimas
app.put('/parduotuves/:id',(req,res)=>{
  console.log(req.body, 'updatedata');

  let gID = req.params.id;
  let pavadinimas = req.body.pavadinimas;
  let adresas = req.body.adresas;
  let parduotuves_vadovas = req.body.parduotuves_vadovas;
  let darbuotoju_kiekis = req.body.darbuotoju_kiekis;
  let prekiu_kiekis = req.body.prekiu_kiekis;

  let qr = `update parduotuve set pavadinimas = '${pavadinimas}', adresas = '${adresas}', parduotuves_vadovas='${parduotuves_vadovas}', darbuotoju_kiekis='${darbuotoju_kiekis}',prekiu_kiekis='${prekiu_kiekis}' where id = '${gID}'`;

  db.query(qr,(err,result)=>{
    console.log(result);
    if (result.affectedRows==0) {
      return res.send({
        message:'can not update data',
        status:403
      });
      
    }
    else
    {
      res.send({
        message:'data updated',
        status:200
      });
      return;
    }    
  });
});
//vieno skyriaus atnaujinimas
app.put('/parduotuves/:id/skyriai/:ids',(req,res)=>{
  console.log(req.body, 'updatedata');

  let ids = req.params.ids;
  let gID = req.params.id;
  let pavadinimas = req.body.pavadinimas;
  let prekiu_tipas = req.body.prekiu_tipas;
  let prekiu_kiekis = req.body.prekiu_kiekis;

  let qr = `update skyrius set pavadinimas = '${pavadinimas}', prekiu_tipas = '${prekiu_tipas}',prekiu_kiekis='${prekiu_kiekis}' where id = '${ids}' and parduotuve_id = '${gID}'`;

  db.query(qr,(err,result)=>{
    console.log(result);
    if (result.affectedRows==0) {
      res.send({
        message:'can not update data',
        status:403
      });
    }
    else
    {
      res.send({
        message:'data updated',
        status:200
      });
    }    
  });
});
//vienos prekes atnaujinimas
app.put('/parduotuves/:id/skyriai/:ids/prekes/:idp',(req,res)=>{
  console.log(req.body, 'updatedata');

  let idp = req.params.idp;
  let ids = req.params.ids;
  let gID = req.params.id;
  let pavadinimas = req.body.pavadinimas;
  let aprasymas = req.body.aprasymas;
  let svoris_gramais = req.body.svoris_gramais;

  let qr = `update preke set pavadinimas = '${pavadinimas}', aprasymas = '${aprasymas}',svoris_gramais='${svoris_gramais}' where id = '${idp}' and parduotuve_id = '${gID}' and skyrius_id = '${ids}'`;

  db.query(qr,(err,result)=>{
    console.log(result);
    if (result.affectedRows==0) {
      res.send({
        message:'can not update data',
        status:403
      });
    }
    else
    {
      res.send({
        message:'data updated',
        status:200
      });
    }    
  });
});


//parduotuves trynimas
app.delete('/parduotuves/:id',(req,res)=>{
  let qID = req.params.id;

  let qr1 = `delete from preke where parduotuve_id = '${qID}'`;
  let qr2 = `delete from skyrius where parduotuve_id = '${qID}'`;
  let qr = `delete from parduotuve where id = '${qID}'`;

  
  db.query(qr1,(err,result)=>{
    if (result.affectedRows==0) {
      console.log(result);
     /* res.send(
        {
          message:'data not deleted',
          status:405
        });
    }
    else
    {
      res.send(
        {
          message:'data deleted',
          status:200
        });*/
    }   
  });
  db.query(qr2,(err,result)=>{
    if (result.affectedRows==0) {
      console.log(result);
      /*res.send(
        {
          message:'data not deleted',
          status:405
        });
    }
    else
    {
      res.send(
        {
          message:'data deleted',
          status:200
        });*/
    }    
  });
  db.query(qr,(err,result)=>{
    console.log(result);
    if (result.affectedRows==0) {
      
      res.send(
        {
          message:'data not deleted',
          status:403
        });
    }
    else
    {
      res.send(
        {
          message:'data deleted',
          status:200
        });
    }    
  });
});

//vieno skyriaus istrynimas
app.delete('/parduotuves/:id/skyriai/:ids',(req,res)=>{
  let qID = req.params.id;
  let ids = req.params.ids;

  let qr1 = `delete from preke where parduotuve_id = '${qID}' and skyrius_id = '${ids}'`;
  let qr2 = `delete from skyrius where parduotuve_id = '${qID}' and id = '${ids}'`;

  db.query(qr1,(err,result)=>{
    if (result.affectedRows==0) {
      console.log(err);
      /*res.send(
        {
          message:'data not deleted',
          status:405
        });
    }
    else
    {
      res.send(
        {
          message:'data deleted',
          status:200
        });*/
    }    
  });
  db.query(qr2,(err,result)=>{
    if (result.affectedRows==0) {
      console.log(err);
      res.send(
        {
          message:'data not deleted',
          status:403
        });
    }
    else
    {
      res.send(
        {
          message:'data deleted',
          status:200
        });
    }    
  });
});
//vienos prekes trynimas
app.delete('/parduotuves/:id/skyriai/:ids/prekes/:idp',(req,res)=>{
  let qID = req.params.id;
  let ids = req.params.ids;
  let idp = req.params.idp;

  let qr1 = `delete from preke where parduotuve_id = '${qID}' and skyrius_id = '${ids}' and id = '${idp}'`;

  db.query(qr1,(err,result)=>{
    if (result.affectedRows==0) {
      console.log(err);
      res.send(
        {
          message:'data not deleted',
          status:403
        });
    }
    else
    {
      res.send(
        {
          message:'data deleted',
          status:200
        });
    }    
  });
});


app.listen(3001, (req, res) =>{
    console.log('Express API is running at port 3001');
} );





