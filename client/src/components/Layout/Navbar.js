import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAuction";
import { clearCurrentProfile } from "../../actions/profileAction";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Post Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            {user.name}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Registration
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand logoSize" to="/" target="" rel="noopener noreferrer">
         <img  src={require("../../../src/img/jagtuFinallogo.png")} alt=""/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about_us">
                  {" "}
                  AboutUs
                </Link>
              </li>
              {/*<li className="nav-item">
                <Link className="nav-link" to="/commodity_list">
                  {" "}
                  Commodity
                </Link>
              </li>*/}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/services">
                  {" "}
                  Services
                </Link>
              </li> */}
             <li className="nav-item">
                <Link className="nav-link" to="/career">
                  {" "}
                  Career
                  </Link>
                   </li>
              
              {/* <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  StackHolder
                </Link>
              </li> */}
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
