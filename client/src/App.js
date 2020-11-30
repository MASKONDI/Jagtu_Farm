import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAuction";
import NavBar from "./components/Layout/Navbar";

import Landing from "./components/Layout/Landing";
import Footer from "./components/Layout/Footer";

import About from "./components/Layout/sub-components/About";
import Services from "./components/Layout/sub-components/Services";
import Msp from "./components/Layout/sub-components/Msp";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/common/privateRoute";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddRequirement from "./components/add-store/AddRequirement";
import Career from "./components/Layout/sub-components/Career";


import TermCondition from "./components/Layout/sub-components/termsandconditions";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";
import { clearCurrentProfile } from "./actions/profileAction";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import NotFound from "./components/not-found/NotFound";

import "../src/css/style.css";
//import "../src/css/plugins.css";

//import "./client/src/css/plugins.css";
//import "H:/eFarm/client/src/css/plugins.css";

//Check for Token
if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get User  Info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // check for expine token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //clear current Profile
    store.dispatch(clearCurrentProfile());
    //Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>

          <div className="App">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/termsandconditions" component={TermCondition} />

            <Route exact path="/career" component={Career} />

            <Route exact path="/register" component={Register} />
            <Route exact path="/about_us" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/msp" component={Msp} />


            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profile/:handle" component={Profile} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/addRequirement"
                component={AddRequirement}
              />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/feed" component={Posts} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/post/:id" component={Post} />
            </Switch>
            <Route exact path="/not-found" component={NotFound} />
          </div>
          <Footer />
        </HashRouter>
      </Provider>
    );
  }
}
export default App;
