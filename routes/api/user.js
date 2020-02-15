const router = require("express").Router();
const userController = require("../../controllers/userController");

// POST /api/user  
// GET  /api/user/user:id

router.route("/")
.post(userController.create)

router.route("/:id")
.get(userController.findById)

module.exports = router;
