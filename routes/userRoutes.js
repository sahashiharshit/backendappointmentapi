const express = require('express');
const routeController = require('../controller/routeController');
const router =express.Router();

router.post("/add-user",routeController.postUsers);
router.get("/get-user/:id",routeController.getUserById);
router.get("/get-user",routeController.getUsers);
router.delete("/delete-user/:id",routeController.deleteUser);
module.exports = router;