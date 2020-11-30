const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Validation
const validateProfileInput = require("../../validator/profile");
const validateaddRequirementInput = require("../../validator/addRequirement");
const validateFutureRequirementInput = require("../../validator/addFutureRequirement");

//Load profile Model
const Profile = require("../../models/profile");

//Load User Profile
const User = require("../../models/User");
const { populate } = require("../../models/User");

//@route GET api/profile/test
//@desc Test profile route
//@access public
router.get("/test", (req, res) =>
  res.json({ msg: "Profile works successfully" })
);

//@route GET api/profile
//@desc Get current user profile
//@access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id }) //Match with user id
      .populate("user", ["firstName", "lastName", "avatar"])
      .then((profile) => {
        if (!profile) {
          errors.noProfile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => res.status(404).json(err));
  }
);
//@route GET api/profile/handle/:handle
//@desc Get profile by handle
//@access Public
router.get("/handle/:handle", (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["firstName", "lastName", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noProfile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
});

//@route GET api/profile/user/:user_id
//@desc Get profile by userId
//@access Public
router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["firstName", "lastName", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noProfile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => res.status(404).json("there is no profile for this user"));
});

//@route GET api/profile/all
//@desc GET all Profile
//@access Public
router.get("/all", (req, res) => {
  const errors = {};
  Profile.find()
    .populate("user", ["firstName", "lastName", "avatar", "phoneNumber"])
    .then((profiles) => {
      if (!profiles) {
        errors.noProfile = "There are no profiles";
        return res.status(404).json(errors);
      }
      res.json(profiles);
    })
    .catch((err) => res.status(404).json("There are no profiles"));
});

//@route POST api/profile
//@desc create or edit User Profile
//@access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    //check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // Get fields

    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.registrationType)
      profileFields.registrationType = req.body.registrationType;
    if (req.body.bio) profileFields.bio = req.body.bio;

    //ProductList - split into array
    if (typeof req.body.productList != "undefined") {
      profileFields.productList = req.body.productList.split(",");
    }

    //Social Media Links
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;

    Profile.findOne({ user: req.user.id }).then((profile) => {
      if (profile) {
        //update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then((profile) => res.json(profile));
      } else {
        //create
        //check if handle already exist
        Profile.findOne({ handle: profileFields.handle }).then((profile) => {
          if (profile) {
            errors.handle = "that Handle already exists";
            res.status(400).json(errors);
          }
          //Save profile
          new Profile(profileFields)
            .save()
            .then((profile) => res.json(profile));
        });
      }
    });
  }
);

//@route POST api/profile/addRequirement
//@desc addRequirement to Profile
//@access Private
router.post(
  "/addRequirement",

  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateaddRequirementInput(req.body);
    //check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then((profile) => {
      const newRequirement = {
        //what product do you want to sell or buy
        commodityName: req.body.commodityName,
        registrationType: req.body.registrationType,
        variety: req.body.variety,
        quantity: req.body.quantity,
        expectedPrice: req.body.expectedPrice,
        measure: req.body.measure,
        basis: req.body.basis,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
        remark: req.body.remark,
        status: "Pending",
      };

      profile.addRequirement.unshift(newRequirement);
      profile.save().then((profile) => res.json(profile));
    });
  }
);
//@route POST api/profile/futureRequirement
//@desc addFutureRequirement to Profile
//@access Private
router.post(
  "/futureRequirement",

  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFutureRequirementInput(req.body);
    //check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then((profile) => {
      const newRequirement = {
        //what product do you want to sell or buy
        productName: req.body.productName,
        registrationType: req.body.registrationType,
        address: req.body.address,
        expectedQuantity: req.body.expectedQuantity,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
        remark: req.body.remark,
      };

      profile.futureRequirement.unshift(newRequirement);
      profile.save().then((profile) => res.json(profile));
    });
  }
);

//@route DELETE api/profile/addRequirement/:cur_id
//@desc Delete addRequirement from profile
//@access Private
router.delete(
  "/addRequirement/:cur_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        //Get remove index

        const removeIndex = profile.addRequirement
          .map((item) => item.id)
          .indexOf(req.params.exp_id);
        //splice out of array
        profile.addRequirement.splice(removeIndex, 1);
        // save Rest of profile
        profile.save().then((profile) => res.json(profile));
      })
      .catch((err) => res.status(404).json(err));
  }
);
//@route DELETE api/profile/addRequirement
//@desc Delete addRequirement from profile
//@access Private
router.delete(
  "/futureRequirement/:fur_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        //Get remove index

        const removeIndex = profile.futureRequirement
          .map((item) => item.id)
          .indexOf(req.params.fur_id);
        //splice out of array
        profile.futureRequirement.splice(removeIndex, 1);
        // save Rest of profile
        profile.save().then((profile) => res.json(profile));
      })
      .catch((err) => res.status(404).json(err));
  }
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
