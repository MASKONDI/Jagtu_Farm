const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(user) {
  let errors = {};

  user.firstName = !isEmpty(user.firstName) ? user.firstName : "";
  user.lastName = !isEmpty(user.lastName) ? user.lastName : "";
  user.gender = !isEmpty(user.gender) ? user.gender : "";
  user.dob = !isEmpty(user.dob) ? user.dob : "";

  user.registrationType = !isEmpty(user.registrationType)
    ? user.registrationType
    : "";
  user.phoneNumber = !isEmpty(user.phoneNumber) ? user.phoneNumber : "";
  user.aadharNumber = !isEmpty(user.aadharNumber) ? user.aadharNumber : "";

  user.password = !isEmpty(user.password) ? user.password : "";
  user.password2 = !isEmpty(user.password2) ? user.password2 : "";

  //Address details
  user.addressLine1 = !isEmpty(user.addressLine1) ? user.addressLine1 : "";

  user.district = !isEmpty(user.district) ? user.district : "";
  user.city = !isEmpty(user.city) ? user.city : "";
  user.state = !isEmpty(user.state) ? user.state : "";
  user.pinCode = !isEmpty(user.pinCode) ? user.pinCode : "";

  if (!Validator.isLength(user.firstName, { min: 2, max: 30 })) {
    errors.firstName = "FirstName must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(user.firstName)) {
    errors.firstName = "FirstName field is required";
  }

  if (!Validator.isLength(user.lastName, { min: 2, max: 30 })) {
    errors.lastName = "LastName must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(user.lastName)) {
    errors.lastName = "LastName field is required";
  }

  if (!Validator.isNumeric(user.phoneNumber)) {
    errors.phoneNumber = "PhoneNumber must be  Number";
  }
  if (!Validator.isLength(user.phoneNumber, { min: 10, max: 10 })) {
    errors.phoneNumber = "PhoneNumber must be 10 Numeric characters";
  }
  if (!Validator.isLength(user.aadharNumber, { min: 12, max: 12 })) {
    errors.aadharNumber = "AadharNumber must be 12 digit Numeric characters";
  }
  //if (!Validator.isLength(user.panNumber, { min: 10, max: 10 })) {
  //errors.panNumber = "PanNumber must be 10 digit characters";
  //}


  if (Validator.isEmpty(user.phoneNumber)) {
    errors.phoneNumber = "PhoneNumber field is required";
  }

  if (!Validator.isLength(user.gender, { min: 1 })) {
    errors.gender = "Gender must be Male/Female";
  }
  if (Validator.isEmpty(user.gender)) {
    errors.gender = "Gender field is required";
  }

  if (!Validator.isLength(user.registrationType, { min: 2, max: 30 })) {
    errors.registrationType = "RegistrationType must be select one of them";
  }

  if (Validator.isEmpty(user.registrationType)) {
    errors.registrationType = "registrationType field is required";
  }

  if (!Validator.isLength(user.addressLine1, { min: 2, max: 100 })) {
    errors.addressLine1 = "AddressLine1 must be between 2 and 100 characters";
  }

  if (Validator.isEmpty(user.addressLine1)) {
    errors.addressLine1 = "AddressLine1 field is required";
  }
  // if (!Validator.isLength(user.addressLine2, { min: 2, max: 100 })) {
  //   errors.addressLine2 = "AddressLine2 must be between 2 and 100 characters";
  // }

  // if (Validator.isEmpty(user.addressLine2)) {
  //   errors.addressLine2 = "AddressLine2 field is required";
  // }

  if (!Validator.isLength(user.district, { min: 2, max: 30 })) {
    errors.district = "District must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(user.district)) {
    errors.district = "District field is required";
  }
  if (!Validator.isLength(user.city, { min: 2, max: 30 })) {
    errors.city = "City must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(user.city)) {
    errors.city = "City field is required";
  }

  if (!Validator.isLength(user.state, { min: 2, max: 30 })) {
    errors.state = "State must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(user.state)) {
    errors.state = "State field is required";
  }

  if (!Validator.isLength(user.pinCode, { min: 6 })) {
    errors.pinCode = "PinCode must be 6 characters";
  }

  if (Validator.isEmpty(user.pinCode)) {
    errors.pinCode = "PinCode field is required";
  }

  if (!Validator.isLength(user.password, { min: 6, max: 30 })) {
    errors.password = "Password must be atleast 6 characters";
  }

  if (Validator.isEmpty(user.password)) {
    errors.password = "password field is required";
  }
  if (Validator.isEmpty(user.password2)) {
    errors.password2 = "confirm password field is required";
  }

  if (!Validator.equals(user.password, user.password2)) {
    errors.password2 = "passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
