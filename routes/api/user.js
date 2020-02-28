const router = require("express").Router();
const userController = require("../../controllers/userController");
console.log('userController', userController)
// POST /api/user  
// GET  /api/user/:id

router.route("/")
.get(userController.findAll)
.post(userController.create)
// added tuesday
// .get(userController.findUserId)


router.route("/login")
.put(userController.login)

router.route("/:id")
.get(userController.findById)

// added tuesday
router.route("/:user")
// .get(userController.findById)
.post(userController.create)

module.exports = router;
