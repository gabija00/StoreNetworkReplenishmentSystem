const { authJwt } = require("../middleware");
const controller = require("../controllers/products_public.controller");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });

    app.get('/prekes', controller.findAll);

};