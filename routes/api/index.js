const router = require("express").Router();
const userRoutes = require("./user");
const memoryRoutes = require("./memory");

// user and memory routes
router.use("/user", userRoutes);
router.use("/memory", memoryRoutes);



module.exports = router;