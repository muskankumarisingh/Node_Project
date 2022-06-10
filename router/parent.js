const express = require("express");
const router = express.Router();
const ctrl = require("../controller/parent");


router.post("/create/parents",ctrl.createParents);

router.get("/get/all/parent/details",ctrl.getAllParentDetails);


module.exports = router;
