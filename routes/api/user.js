const router = require("express").Router();
const userController = require("../../controllers/userController");
console.log('userController', userController)
// POST /api/user  
// GET  /api/user/:id

router.route("/")
.get(userController.findAll)
.post(userController.create)

router.route("/login")
.put(userController.login)

router.route("/:id")
.get(userController.findById)

module.exports = router;
