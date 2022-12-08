var connection = require('../config/database');
exports.findAll = (req, res) => {
  let qr = `select * from preke`;
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