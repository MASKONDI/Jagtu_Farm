const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateaddRequirementInput(user) {
  let errors = {};

  user.commodityName = !isEmpty(user.commodityName) ? user.commodityName : "";
  user.registrationType = !isEmpty(user.registrationType)
    ? user.registrationType
    : "";
  user.variety = !isEmpty(user.variety) ? user.variety : "";
  user.measure = !isEmpty(user.measure) ? user.measure : "";
  user.basis = !isEmpty(user.basis) ? user.basis : "";
  user.quantity = !isEmpty(user.quantity) ? user.quantity : "";
  user.fromDate = !isEmpty(user.fromDate) ? user.fromDate : "";
  user.toDate = !isEmpty(user.toDate) ? user.toDate : "";

  if (!Validator.isLength(user.commodityName, { min: 2, max: 30 })) {
    errors.commodityName = "CommodityName needs to between 2 and 30 characters";
  }

  if (Validator.isEmpty(user.commodityName)) {
    errors.commodityName = "commodityName field is required";
  }

  if (Validator.isEmpty(user.registrationType)) {
    errors.registrationType = "registrationType field is required";
  }
  if (Validator.isEmpty(user.measure)) {
    errors.measure = "Measure field is required";
  }
  if (Validator.isEmpty(user.basis)) {
    errors.basis = "Basis field is required";
  }
  if (!Validator.isLength(user.quantity, { min: 1, max: 15 })) {
    errors.quantity =
      "Quantity needs to in kilogram(kg) and Quintal(q) fromat ex: 100,10";
  }

  if (Validator.isEmpty(user.quantity)) {
    errors.quantity = "Quantity field is required";
  }

  if (Validator.isEmpty(user.fromDate)) {
    errors.fromDate = "fromDate field is required";
  }

  if (Validator.isEmpty(user.toDate)) {
    errors.toDate = "toDate field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
