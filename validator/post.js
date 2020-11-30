const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(user) {
  let errors = {};

  user.text = !isEmpty(user.text) ? user.text : "";

  if (!Validator.isLength(user.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(user.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
