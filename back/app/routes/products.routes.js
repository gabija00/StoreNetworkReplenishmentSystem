const { authJwt } = require("../middleware");
const controller = require("../controllers/products.controller");


module.exports = function(app) {
    
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

    app.get('/parduotuves/:id/skyriai/:ids/prekes', [authJwt.verifyToken, authJwt.isManagerOrAdmin],controller.findAll);

    app.get('/parduotuves/:id/skyriai/:ids/prekes/:idp',[authJwt.verifyToken, authJwt.isManagerOrAdmin] ,controller.findOne);

    app.put('/parduotuves/:id/skyriai/:ids/prekes/:idp', [authJwt.verifyToken, authJwt.isManagerOrAdmin],controller.update);

    app.post('/parduotuves/:id/skyriai/:ids/prekes',[authJwt.verifyToken, authJwt.isManagerOrAdmin], controller.create);

    app.delete('/parduotuves/:id/skyriai/:ids/prekes/:idp', controller.delete);
};