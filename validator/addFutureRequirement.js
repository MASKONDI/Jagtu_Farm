const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFutureRequirementInput(user) {
  let errors = {};

  user.productName = !isEmpty(user.productName) ? user.productName : "";
  user.registrationType = !isEmpty(user.registrationType)
    ? user.registrationType
    : "";
  user.address = !isEmpty(user.address) ? user.address : "";
  user.expectedQuantity = !isEmpty(user.expectedQuantity)
    ? user.expectedQuantity
    : "";
  user.fromDate = !isEmpty(user.fromDate) ? user.fromDate : "";
  user.toDate = !isEmpty(user.toDate) ? user.toDate : "";

  if (!Validator.isLength(user.productName, { min: 2, max: 30 })) {
    errors.productName = "ProductName needs to between 2 and 30 characters";
  }

  if (Validator.isEmpty(user.productName)) {
    errors.productName = "ProductName field is required";
  }
  if (Validator.isEmpty(user.address)) {
    errors.address = "Address field is required";
  }

  if (Validator.isEmpty(user.registrationType)) {
    errors.registrationType = "registrationType field is required";
  }

  if (!Validator.isLength(user.expectedQuantity, { min: 1, max: 15 })) {
    errors.expectedQuantity =
      "expectedQuantity needs to in kilogram(kg) and Quintal(q) fromat ex: 100Kg,10q";
  }

  if (Validator.isEmpty(user.expectedQuantity)) {
    errors.expectedQuantity = "Quantity field is required";
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
