var connection = require('../config/database');


exports.create = (req, res) => {
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
      connection.query(qr2,(err,result)=>{
        if (err){
          console.log(err);
          res.status(500).send({
            message:'can not insert data',
            status:500
          });
        }
        else{
          connection.query(qr,(err,result)=>{
            if (err){
              console.log(err);
              res.status(403).send({
                message:'can not insert data',
                status:403
              });
            }
            else{
              console.log(result,'result'),
              res.status(201).send({
                message:'data inserted'
              });
            }   
          });
        }   
      });
  };

  exports.findAll = (req, res) => {
    let gID = req.params.id;
  let qr = `select * from skyrius where parduotuve_id = ${gID}`;
  connection.query(qr,(err, result)=>{
    if(err) {console.log(err);}
    if (result.length >0)
    {
      res.status(200).send({
        message:'visi skyriai',
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
  let qr = `select * from skyrius where parduotuve_id = ${gID} and id = ${ids}`;
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
    let ids = req.params.ids;
  let gID = req.params.id;
  let pavadinimas = req.body.pavadinimas;
  let prekiu_tipas = req.body.prekiu_tipas;
  let prekiu_kiekis = req.body.prekiu_kiekis;

  let qr = `update skyrius set pavadinimas = '${pavadinimas}', prekiu_tipas = '${prekiu_tipas}',prekiu_kiekis='${prekiu_kiekis}' where id = '${ids}' and parduotuve_id = '${gID}'`;

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
  
    let qr1 = `delete from preke where parduotuve_id = '${qID}' and skyrius_id = '${ids}'`;
    let qr2 = `delete from skyrius where parduotuve_id = '${qID}' and id = '${ids}'`;
  
    connection.query(qr1,(err,result)=>{
      if (result.affectedRows==0) {
        console.log(err);
      }    
    });
    connection.query(qr2,(err,result)=>{
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

  