const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(user) {
  let errors = {};

  user.phoneNumber = !isEmpty(user.phoneNumber) ? user.phoneNumber : "";
  user.password = !isEmpty(user.password) ? user.password : "";

  if (!Validator.isNumeric(user.phoneNumber)) {
    errors.phoneNumber = "PhoneNumber must be a Number";
  }
  if (!Validator.isLength(user.phoneNumber, { min: 10, max: 10 })) {
    errors.phoneNumber = "PhoneNumber must be 10 Numeric characters";
  }

  if (Validator.isEmpty(user.phoneNumber)) {
    errors.phoneNumber = "PhoneNumber field is required";
  }

  if (Validator.isEmpty(user.password)) {
    errors.password = "password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
