const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /orders routes needed to make the tests pass

router
  .route("/")
  .get(controller.list)
  .put(controller.update)
  .post(controller.create)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/:orderId")
  .get(controller.read)
  .put(controller.update)
  .post(controller.create)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;
