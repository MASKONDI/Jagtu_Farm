const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const UserSchema = new Schema({
  //**Person Info
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },

  registrationType: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  panNumber: {
    type: String,

  },
  email: {
    type: String,

  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  avatar: {
    type: String,
  },
  //*** Address Line
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,

  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  referenceName: {
    type: String,
  },
  referencePhoneNumber: {
    type: String,
  },
  altNumber: {
    type: String,
  },

  //** Bank Details */

  bankName: {
    type: String,
  },
  accountHolderName: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  ifscCode: {
    type: String,
  },
});

module.exports = User = mongoose.model("userRegistration", UserSchema);
