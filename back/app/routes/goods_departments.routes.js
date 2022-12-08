const { authJwt } = require("../middleware");
const controller = require("../controllers/goods_departments.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.get('/parduotuves/:id/skyriai', [authJwt.verifyToken, authJwt.isManagerOrAdmin], controller.findAll);

    app.get('/parduotuves/:id/skyriai/:ids', [authJwt.verifyToken, authJwt.isManagerOrAdmin],controller.findOne);

    app.put('/parduotuves/:id/skyriai/:ids',[authJwt.verifyToken, authJwt.isManagerOrAdmin], controller.update);

    app.post('/parduotuves/:id/skyriai', [authJwt.verifyToken, authJwt.isManagerOrAdmin],controller.create);

    app.delete('/parduotuves/:id/skyriai/:ids', [authJwt.verifyToken, authJwt.isManagerOrAdmin],controller.delete);
};