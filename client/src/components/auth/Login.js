import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAuction";
import TextFieldGroup from "../common/TextFieldGroup";
import {Link} from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //after login we don't to open login page again
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashBoard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const userData = {
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  }
  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="login headerfix">
          <header id="page-header">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto text-center">
                  <h1 className="text-white">Log In</h1>
                 
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <br/>
              <div className="card p-4">
                  <div className="card-body">
                  <h3 className="text-center">Sign in to your Jagtu Farms account</h3>

                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Phone Number"
                    name="phoneNumber"
                    type="Number"
                    value={this.state.phoneNumber}
                    onChange={this.onChange}
                    error={errors.phoneNumber}
                  />

                  <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                  <br />
                  <p className="text-center"><Link to="/register">Create New Account </Link></p>
                </form>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
