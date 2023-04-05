const router = require("express").Router();
const empresa = require("../controller/empresa.controler");

router.get("/findAll",empresa.findAllempresas);
router.post("/create",empresa.createEmpresa);

module.exports = router;