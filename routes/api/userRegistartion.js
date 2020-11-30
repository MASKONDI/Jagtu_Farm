const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const keys = require("../../config/keys");
const passport = require("passport");
require("../../config/passport");
const router = express.Router();

//load input validation
const validateRegisterInput = require("../../validator/register");
const validateLoginInput = require("../../validator/login");

//@route GET api/UserRegistration/test
//@desc Test UserRegistration route
//@access public
router.get("/test", (req, res) =>
  res.json({ msg: "Users Registration successfully" })
);
router.get("/termCondition", (req, res) =>
  res.json({ msg: "termAndCondition for registeration" })
);

//@route POST api/UserRegistration/register
//@desc Test UserRegistration route
//@access public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ phoneNumber: req.body.phoneNumber }).then((user) => {
    if (user) {
      errors.phoneNumber = "phoneNumer already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mn", //default
      });

      const newUser = new User({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        dob: req.body.dob,
        avatar,
        gender: req.body.gender,
        registrationType: req.body.registrationType,
        aadharNumber: req.body.aadharNumber,
        panNumber: req.body.panNumber,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        district: req.body.district,
        city: req.body.city,
        state: req.body.state,
        pinCode: req.body.pinCode,
        referenceName: req.body.referenceName,
        altNumber: req.body.altNumber,
        referencePhoneNumber: req.body.referencePhoneNumber,
        bankName: req.body.bankName,
        accountHolderName: req.body.accountHolderName,
        accountNumber: req.body.accountNumber,
        ifscCode: req.body.ifscCode,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

//@route POST api/UserRegistration/login
//@desc login user / Returning JWT Token
//@access public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
  User.findOne({ phoneNumber }).then((user) => {
    //check for user
    if (!user) {
      errors.phoneNumber = "Please enter registerd mobile Number ";
      return res.status(404).json(errors);
    }
    //check passWord
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //User Matched
        // res.json({ msg: "Success" });
        const payload = {
          id: user.id,
          name: user.firstName + user.lastName,
          avatar: user.avatar,
        }; //create JWT payload

        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn:  3600},
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

//@route Get api/UserRegistration/current
//@desc Return current user
//@access private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
