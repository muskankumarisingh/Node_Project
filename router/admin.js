const express = require("express");
const router = express.Router();
const ctrl = require("../controller/admin");


router.post("/create/admin",ctrl.createAdmins);

router.get("/get/all/admin/details",ctrl.getAllAdminDetails);


module.exports = router;
