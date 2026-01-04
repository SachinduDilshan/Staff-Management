const Staff = require("../models/Staff");

exports.createStaff = async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStaffOnLeave = async (req, res) => {
  try {
    const staff = await Staff.find({ onLeave: true });
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
