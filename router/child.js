const express = require("express");
const router = express.Router();
const ctrl = require("../controller/child");


router.post("/create/childs",ctrl.createChilds);

router.get("/get/all/child/details",ctrl.getAllChildDetails);


module.exports = router;
