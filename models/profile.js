const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a schema
const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "userRegistration",
  },
  //Handle should be unique when you visit profile
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  //holds NGO or food Company Name
  company: {
    type: String,
  },
  //hold social Media link
  website: {
    type: String,
  },
  // holds Current Location or Address
  location: {
    type: String,
    required: true,
  },
  //Holds Who you are ex: Farmer, Seller, Buyer
  registrationType: {
    type: String,
    required: true,
  },
  productList: {
    //Commodity
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  //hold current Need  when you want to sell or buy your product
  addRequirement: [
    {
      commodityName: { type: String, required: true },
      registrationType: { type: String, required: true },
      variety: { type: String, required: true },
      quantity: { type: String, required: true },
      expectedPrice: { type: String },
      fromDate: { type: Date, required: true },
      toDate: { type: Date, required: true },
      basis:{type: String,required:true},
      measure: {type: String, required: true},
      remark: { type: String },
      status: { type: String },
    },
  ],

  //hold Future Requirement at particular time period
  futureRequirement: [
    {
      //if Farmer then what product they want to sell in Market
      productName: { type: String, required: true },
      registrationType: { type: String, required: true },
      address: { type: String, required: true },
      expectedQuantity: { type: String, required: true },
      fromDate: { type: Date, required: true },
      toDate: { type: Date, required: true },
      remark: { type: String },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = profile = mongoose.model("profile", profileSchema);
