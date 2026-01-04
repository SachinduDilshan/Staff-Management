const mongoose = require("mongoose");     

const staffSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    role: String,
    salary: Number,
    department: String,
    onLeave: {
        type: Boolean,
        default: false
    },
    leaveFrom: Date,
    leaveTo: Date,    
});

module.exports = mongoose.model("Staff", staffSchema);