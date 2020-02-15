const router = require("express").Router();
const memoryController = require("../../controllers/memoryController");

// Matches with "/api/user/:id/memory"
router.route("/")
.get(memoryController.findAll)
.post(memoryController.create)

// Matches with "/api/memory/:id"
router.route("/:id")
.get(memoryController.findById)
.post(memoryController.create)

module.exports = router;

