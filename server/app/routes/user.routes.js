const controller = require("../controller/user.controller");

module.exports = function (app) {
  app.post("/create", controller.signup);
  app.get("/get", controller.get);
};
