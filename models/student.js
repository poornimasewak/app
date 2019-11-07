const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true },
    course: { type: String, required: true },
    phone: Number,
    status: { type: String, default: "pass" },
    date: { type: Date, default: Date.now }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
