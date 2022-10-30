var connection = require('../config/database');
exports.create = (req, res) => {
    console.log(req.body, 'createdata');
  let pavadinimas = req.body.pavadinimas;
  let aprasymas = req.body.aprasymas;
  let svoris_gramais = req.body.svoris_gramais;
  let skyrius_id = req.params.ids;
  let parduotuve_id = req.params.id;

  let qr = `insert into preke(pavadinimas, aprasymas, svoris_gramais, skyrius_id, parduotuve_id) values('${pavadinimas}','${aprasymas}','${svoris_gramais}','${skyrius_id}','${parduotuve_id}')`;

  connection.query(qr,(err,result)=>{
    if (!req.body) return res.status(404).send({
      message:'data not found',
      status:404
    });
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
    let gID = req.params.id;
  let ids = req.params.ids;
  let qr = `select * from preke where parduotuve_id = ${gID} and skyrius_id = ${ids}`;
  connection.query(qr,(err, result)=>{
    if(err) {console.log(err);}
    if (result.length >0)
    {
      res.status(200).send({
        message:'get all data',
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
 };

  

  exports.findOne = (req, res) => {
    let gID = req.params.id;
  let ids = req.params.ids;
  let idp = req.params.idp;
  let qr = `select * from preke where parduotuve_id = ${gID} and skyrius_id = ${ids} and id=${idp}`;
  connection.query(qr,(err, result)=>{
    if(err) {console.log(err);}
    if (result.length >0)
    {
      res.status(200).send({
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
  };

  exports.update = (req, res) => {
    console.log(req.body, 'updatedata');

  let idp = req.params.idp;
  let ids = req.params.ids;
  let gID = req.params.id;
  let pavadinimas = req.body.pavadinimas;
  let aprasymas = req.body.aprasymas;
  let svoris_gramais = req.body.svoris_gramais;

  let qr = `update preke set pavadinimas = '${pavadinimas}', aprasymas = '${aprasymas}',svoris_gramais='${svoris_gramais}' where id = '${idp}' and parduotuve_id = '${gID}' and skyrius_id = '${ids}'`;

  connection.query(qr,(err,result)=>{
    console.log(result);
    if (result.affectedRows==0) {
      res.status(403).send({
        message:'can not update data',
        status:403
      });
    }
    else
    {
      res.status(200).send({
        message:'data updated',
        status:200
      });
    }    
  });
  };

  exports.delete = (req, res) => {
    let qID = req.params.id;
  let ids = req.params.ids;
  let idp = req.params.idp;

  let qr1 = `delete from preke where parduotuve_id = '${qID}' and skyrius_id = '${ids}' and id = '${idp}'`;

  connection.query(qr1,(err,result)=>{
    if (result.affectedRows==0) {
      console.log(err);
      res.status(403).send(
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

  