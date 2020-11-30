const express = require("express");
const mongoose = require("mongoose");
var passport = require("passport");
const bodyParser = require("body-parser");
const app = express();
var path = require("path");
//DB Config
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/userRegistartion");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
app.use("/api/userRegistration", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//Passport middleware
app.use(passport.initialize());

//passport Config
const myPassportService = require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // app.get("/*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  // });
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
