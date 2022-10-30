var connection = require('../config/database');


exports.create = (req, res) => {
    if (!req.body) return res.status(404).send({
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
    
      connection.query(qr,(err,result)=>{
        if (err){
          console.log(err);
          res.status(500).send({
            message:'can not insert data',
            status:500
          });
        }
        else{
          console.log(result,'result')
          res.status(201).send({
            message:'data inserted',
            status:201
          });
        }   
      });
  };

  exports.findAll = (req, res) => {
    let qr = 'select * from parduotuve';
    connection.query(qr,(err,result)=>{
    if (err)
    {
      console.log(err,'errs');
      res.status(404).send({
        message:'Not found',
        status:404,
      });
    }
    if (result.length>0)
    {
      res.status(200).send({
        message:'all users data',
        data:result
      });
      
    }
  });
 };

  

  exports.findOne = (req, res) => {
    let gID = req.params.id;
    let qr = `select * from parduotuve where id = ${gID}`;
    connection.query(qr,(err, result)=>{
        if (err)
        {
          console.log(err,'errs');
          res.status(404).send({
            message:'Not found',
            status:404,
          });
        }
        if (result.length>0)
        {
          res.status(200).send({
            message:'all users data',
            data:result
          });
          
        }
  });
  };

  exports.update = (req, res) => {
    let gID = req.params.id;
  let pavadinimas = req.body.pavadinimas;
  let adresas = req.body.adresas;
  let parduotuves_vadovas = req.body.parduotuves_vadovas;
  let darbuotoju_kiekis = req.body.darbuotoju_kiekis;
  let prekiu_kiekis = req.body.prekiu_kiekis;

  let qr = `update parduotuve set pavadinimas = '${pavadinimas}', adresas = '${adresas}', parduotuves_vadovas='${parduotuves_vadovas}', darbuotoju_kiekis='${darbuotoju_kiekis}',prekiu_kiekis='${prekiu_kiekis}' where id = '${gID}'`;

  connection.query(qr,(err,result)=>{
    console.log(result);
    if (result.affectedRows==0) {
      return res.status(403).send({
        message:'can not update data'
      });
      
    }
    else
    {
      res.status(200).send({
        message:'data updated'
      });
      return;
    }    
  });
  };

  exports.delete = (req, res) => {
    let qID = req.params.id;

  let qr1 = `delete from preke where parduotuve_id = '${qID}'`;
  let qr2 = `delete from skyrius where parduotuve_id = '${qID}'`;
  let qr = `delete from parduotuve where id = '${qID}'`;

  
  connection.query(qr1,(err,result)=>{
    if (result.affectedRows==0) {
      console.log(result);
    }   
  });
  connection.query(qr2,(err,result)=>{
    if (result.affectedRows==0) {
      console.log(result);
    }    
  });
  connection.query(qr,(err,result)=>{
    console.log(result);
    if (result.affectedRows==0) {
      
      res.status(404).send(
        {
          message:'data not deleted',
          status:403
        });
    }
    else
    {
      res.status(200).send(
        {
          message:'data deleted',
          status:200
        });
    }    
  });
  };

  exports.deleteAll = (req, res) => {
    let qID = req.params.id;

  let qr1 = `delete  * from preke`;
  let qr2 = `delete * from skyrius`;
  let qr = `delete * from parduotuve`;

  
  connection.query(qr1,(err,result)=>{
    if (result.affectedRows==0) {
      console.log(result);
    }   
  });
  connection.query(qr2,(err,result)=>{
    if (result.affectedRows==0) {
      console.log(result);
    }    
  });
  connection.query(qr,(err,result)=>{
    console.log(result);
    if (result.affectedRows==0) {
      
      res.status(404).send(
        {
          message:'data not deleted',
          status:403
        });
    }
    else
    {
      res.status(200).send(
        {
          message:'data deleted',
          status:200
        });
    }    
  });
  };