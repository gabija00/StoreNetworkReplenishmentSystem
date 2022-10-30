const { authJwt } = require("../middleware");
const controller = require("../controllers/shops.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });

app.get("/parduotuves",  [authJwt.verifyToken, authJwt.isOwnerOrAdmin],controller.findAll);

    app.get("/parduotuves/:id", [authJwt.verifyToken, authJwt.isOwnerOrAdmin], controller.findOne);

    app.put("/parduotuves/:id", [authJwt.verifyToken, authJwt.isOwnerOrAdmin], controller.update);

    app.post("/parduotuves",  [authJwt.verifyToken, authJwt.isOwnerOrAdmin],controller.create);

    app.delete("/parduotuves/:id",  [authJwt.verifyToken, authJwt.isOwnerOrAdmin],controller.delete);
    app.delete("/parduotuves/",  [authJwt.verifyToken, authJwt.isOwnerOrAdmin],controller.deleteAll);


  
    
  };
  