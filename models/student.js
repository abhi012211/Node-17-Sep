const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//table structure is know as schema

const StudentSchema = new Schema({
  rollNo: { type: Number },
  name: { type: String },
  fatherName: { type: String },
  adharCardName: { type: String },
  adharCardNo: { type: String },
  mobileNo: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("Student", StudentSchema);
