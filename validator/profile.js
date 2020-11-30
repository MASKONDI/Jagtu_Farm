const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(user) {
  let errors = {};

  user.handle = !isEmpty(user.handle) ? user.handle : "";
  user.registartionType = !isEmpty(user.registartionType)
    ? user.registartionType
    : "";
  user.productList = !isEmpty(user.productList) ? user.productList : "";
  user.location = !isEmpty(user.location) ? user.location : "";

  if (!Validator.isLength(user.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to between 2 and 4 characters";
  }

  if (Validator.isEmpty(user.handle)) {
    errors.handle = "Profile handle is required";
  }

  if (!Validator.isLength(user.location, { min: 5, max: 200 })) {
    errors.location = "Location needs to between 5 and 200 characters";
  }

  if (Validator.isEmpty(user.location)) {
    errors.location = "Address is required";
  }

  if (Validator.isEmpty(user.registrationType)) {
    errors.registrationType = "RegistrationType field is required";
  }

  if (Validator.isEmpty(user.productList)) {
    errors.productList = "ProductList field is required";
  }

  if (!isEmpty(user.youtube)) {
    if (!Validator.isURL(user.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  if (!isEmpty(user.twitter)) {
    if (!Validator.isURL(user.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(user.instagram)) {
    if (!Validator.isURL(user.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  if (!isEmpty(user.facebook)) {
    if (!Validator.isURL(user.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
