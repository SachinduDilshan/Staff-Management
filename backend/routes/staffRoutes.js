const express = require("express");
const router = express.Router();

const { createStaff, getAllStaff, getStaffOnLeave } = require("../controllers/staffController");

router.post("/staff", createStaff);
router.get("/staff", getAllStaff);
router.get("/staff/on-leave", getStaffOnLeave);

module.exports = router;    