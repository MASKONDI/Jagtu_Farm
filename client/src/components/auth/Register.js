import React, { Component } from "react";
//import axios from "axios";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAuction";
import { Link } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      aadharNumber: "",
      panNumber: "",
      gender: "",
      password: "",
      password2: "",
      altNumber: "",
      dob: "",
      addressLine1: "",
      addressLine2: "",
      district: "",
      city: "",
      state: "",
      pinCode: "",
      bankName: "",
      accountHolderName: "",
      accountNumber: "",

      ifscCode: "",

      registrationType: "",
      referenceName: "",
      refPhoneNumber: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      aadharNumber: this.state.aadharNumber,
      panNumber: this.state.panNumber,
      gender: this.state.gender,
      password: this.state.password,
      password2: this.state.password2,
      dob: this.state.dob,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      district: this.state.district,
      city: this.state.city,
      state: this.state.state,
      pinCode: this.state.pinCode,
      bankName: this.state.bankName,
      accountHolderName: this.state.accountHolderName,
      accountNumber: this.state.accountNumber,

      ifscCode: this.state.ifscCode,

      registrationType: this.state.registrationType,
      referenceName: this.state.referenceName,
      refPhoneNumber: this.state.refPhoneNumber,
      altNumber: this.state.altNumber,
    };
    this.props.registerUser(newUser, this.props.history);
    //   console.log(newUser);
    //   axios
    //     .post("/api/userRegistration/register", newUser)
    //     .then((res) => console.log(res.data))
    //     .catch((err) => this.setState({ errors: err.response.data }));
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register headerfix">
        <header id="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <h1 className="text-white">Jagtu Registration Form </h1>
              </div>
            </div>
          </div>
        </header>
        <section id="contact" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card bg-light p-4">
                  <div className="card-body">
                    <h4>Get In Touch</h4>
                    <p>
                      Jagtu Farms Private Limited want to promote uniformity in agriculture marketing by
                      streamlining of procedures across the integrated markets, removing information
                      asymmetry between buyers and sellers and promoting real time price discovery based
                      on actual demand and supply.
                    </p>
                    <h4>Our Location:</h4>
                    <p>21018,Plot GH-04,Sec-16C,<br /> Pinewood Tower,Mahagun Mywood,<br /> Greater Noida,
                  Uttar Pradesh, India 201308</p>
                    <h4>Email</h4>
                    <p>info@jagtu.com</p>

                  </div>
                </div>
              </div>
              <div className="col-md-8 m-auto">
                <div className="card p-4">
                  <div className="card-body">
                    <h5 className="text-center">Please fill the following Information...</h5>
                    <br />
                    <form onSubmit={this.onSubmit}>
                      <div className="form-row">
                        <div className="form-group col-md-4">
                          <input
                            type="text"
                            className={classnames("form-control form-control-md", {
                              "is-invalid": errors.firstName,
                            })}
                            id="firstName"
                            placeholder="FirstName"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.onChange}
                          />
                          {errors.firstName && (
                            <div className="invalid-feedback">
                              {errors.firstName}
                            </div>
                          )}
                        </div><div className="form-group col-md-4">
                          <input
                            type="text"
                            className={classnames("form-control form-control-md", {
                              "is-invalid": errors.middleName,
                            })}
                            id="middleName"
                            placeholder="MiddleName"
                            name="middleName"
                            value={this.state.middleName}
                            onChange={this.onChange}
                          />
                          {errors.middleName && (
                            <div className="invalid-feedback">
                              {errors.middleName}
                            </div>
                          )}
                        </div>
                        <div className="form-group col-md-4">
                          <input
                            onChange={this.onChange}
                            type="text"
                            className={classnames("form-control form-control-md", {
                              "is-invalid": errors.lastName,
                            })}
                            placeholder="LastName"
                            name="lastName"
                            value={this.state.lastName}
                          />
                          {errors.lastName && (
                            <div className="invalid-feedback">
                              {errors.lastName}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <select
                          className={classnames("form-control form-control-md", {
                            "is-invalid": errors.registrationType,
                          })}
                          name="registrationType"
                          value={this.state.registrationType}
                          onChange={this.onChange}
                        >
                          {errors.registrationType && (
                            <div className="invalid-feedback">
                              {errors.registrationType}
                            </div>
                          )}
                          <option value="0">* Select Registartion Type</option>
                          <option value="Farmer">Farmer</option>
                          <option value="Buyer"> Buyer</option>


                        </select>
                        <small className="form-text text-muted">
                          Give us an idea who you are ?
                    </small>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <select
                            className={classnames("form-control form-control-md", {
                              "is-invalid": errors.gender,
                            })}
                            name="gender"
                            value={this.state.gender}
                            onChange={this.onChange}
                          >
                            {errors.gender && (
                              <div className="invalid-feedback">
                                {errors.gender}
                              </div>
                            )}
                            <option value="0">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female"> FeMale</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <select
                            className={classnames("form-control form-control-md", {
                              "is-invalid": errors.dob,
                            })}
                            name="dob"
                            value={this.state.dob}
                            onChange={this.onChange}
                          >
                            {errors.dob && (
                              <div className="invalid-feedback">
                                {errors.dob}
                              </div>
                            )}
                            <option value="0">* Year of Birth</option>
                            <option value="1940">1940</option>
                            <option value="1941">1941</option>
                            <option value="1942">1942</option>
                            <option value="1943">1943</option>
                            <option value="1944">1944</option>
                            <option value="1945">1945</option>
                            <option value="1946">1946</option>
                            <option value="1947">1947</option>
                            <option value="1948">1948</option>
                            <option value="1949">1949</option>

                            <option value="1950">1950</option>
                            <option value="1951">1951</option>
                            <option value="1952">1952</option>
                            <option value="1953">1953</option>
                            <option value="1954">1954</option>
                            <option value="1955">1955</option>
                            <option value="1956">1956</option>
                            <option value="1957">1957</option>
                            <option value="1958">1958</option>
                            <option value="1959">1959</option>

                            <option value="1960">1960</option>
                            <option value="1961">1961</option>
                            <option value="1962">1962</option>
                            <option value="1963">1963</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1966">1966</option>
                            <option value="1967">1967</option>
                            <option value="1968">1968</option>
                            <option value="1969">1969</option>

                            <option value="1970">1970</option>
                            <option value="1971">1971</option>
                            <option value="1972">1972</option>
                            <option value="1973">1973</option>
                            <option value="1974">1974</option>
                            <option value="1975">1975</option>
                            <option value="1976">1976</option>
                            <option value="1977">1977</option>
                            <option value="1978">1978</option>
                            <option value="1979">1979</option>

                            <option value="1980">1980</option>
                            <option value="1981">1981</option>
                            <option value="1982">1982</option>
                            <option value="1983">1983</option>
                            <option value="1984">1984</option>
                            <option value="1985">1985</option>
                            <option value="1986">1986</option>
                            <option value="1987">1987</option>
                            <option value="1988">1988</option>
                            <option value="1989">1989</option>
                            <option value="1990">1990</option>

                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>

                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>


                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            onChange={this.onChange}
                            type="Number"
                            className={classnames("form-control form-control-md", {
                              "is-invalid": errors.aadharNumber,
                            })}
                            placeholder="AdharNumber"
                            name="aadharNumber"
                            value={this.state.aadharNumber}
                            maxLength="12"
                          />{errors.aadharNumber && (
                            <div className="invalid-feedback">{errors.aadharNumber}</div>
                          )}
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            onChange={this.onChange}
                            type="text"
                            className={classnames("form-control text-uppercase form-control-md", {
                              "is-invalid": errors.panNumber,
                            })}
                            placeholder="PanNumber"
                            name="panNumber"
                            value={this.state.panNumber}

                          />
                          {errors.panNumber && (
                            <div className="invalid-feedback">{errors.panNumber}</div>
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          onChange={this.onChange}
                          type="email"
                          className="form-control form-control-md"
                          placeholder="Email Address"
                          name="email"
                          value={this.state.email}
                        />
                      </div>
                      <TextFieldGroup
                        placeholder="Phone Number"
                        name="phoneNumber"
                        type="Number"
                        value={this.state.phoneNumber}
                        onChange={this.onChange}
                        error={errors.phoneNumber}
                        info="Please inter Adhar card registered phone Number, furthur you
                    can login by using this Number and Password"
                      />
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            onChange={this.onChange}
                            type="password"
                            className={classnames("form-control form-control-md", {
                              "is-invalid": errors.password,
                            })}
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                          />
                          {errors.password && (
                            <div className="invalid-feedback">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            onChange={this.onChange}
                            type="password"
                            className={classnames("form-control form-control-md", {
                              "is-invalid": errors.password2,
                            })}
                            placeholder="Confirm Password"
                            name="password2"
                            value={this.state.password2}
                          />
                          {errors.password2 && (
                            <div className="invalid-feedback">
                              {errors.password2}
                            </div>
                          )}
                        </div>{" "}
                      </div>
                      <TextFieldGroup
                        placeholder="Alternative Phone Number"
                        name="altNumber"
                        type="Number"
                        value={this.state.altNumber}
                        onChange={this.onChange}
                        error={errors.altNumber}
                        info="Please inter alternative phone Number"
                      />
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            onChange={this.onChange}
                            type="text"
                            className="form-control form-control-md"
                            placeholder="ReferenceName"
                            name="referenceName"
                            value={this.state.referenceName}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            onChange={this.onChange}
                            type="Number"
                            className="form-control form-control-md"
                            placeholder="ReferencePhoneNumber"
                            name="refPhoneNumber"
                            value={this.state.refPhoneNumber}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <button type="button" className="btn btn-light">
                          Address Details
                    </button>
                      </div>
                      <div className="form-group">
                        <input
                          onChange={this.onChange}
                          type="text"
                          className={classnames("form-control ", {
                            "is-invalid": errors.addressLine1,
                          })}
                          id="inputAddress"
                          placeholder="1234 Main St"
                          name="addressLine1"
                          value={this.state.addressLine1}
                        />
                        {errors.addressLine1 && (
                          <div className="invalid-feedback">
                            {errors.addressLine1}
                          </div>
                        )}
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            onChange={this.onChange}
                            type="text"
                            className={classnames("form-control ", {
                              "is-invalid": errors.addressLine2,
                            })}
                            id="addressLine2"
                            placeholder="Apartment, studio, or floor"
                            name="addressLine2"
                            value={this.state.addressLine2}
                          />
                          {errors.addressLine2 && (
                            <div className="invalid-feedback">
                              {errors.addressLine2}
                            </div>
                          )}
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            onChange={this.onChange}
                            type="text"
                            className={classnames("form-control form-control-md", {
                              "is-invalid": errors.district,
                            })}
                            id="district"
                            placeholder="district"
                            name="district"
                            value={this.state.district}
                          />
                          {errors.district && (
                            <div className="invalid-feedback">
                              {errors.district}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            onChange={this.onChange}
                            type="text"
                            className={classnames("form-control", {
                              "is-invalid": errors.city,
                            })}
                            placeholder="City"
                            name="city"
                            id="city"
                            value={this.state.city}
                          />
                          {errors.city && (
                            <div className="invalid-feedback">{errors.city}</div>
                          )}
                        </div>
                        <div className="form-group col-md-4">
                          <select
                            id="inputState"
                            className={classnames("form-control ", {
                              "is-invalid": errors.state,
                            })}
                            name="state"
                            value={this.state.state}
                            onChange={this.onChange}
                          >
                            {errors.state && (
                              <div className="invalid-feedback">{errors.state}</div>
                            )}
                            <option value="0">State...</option>

                            <option>Andaman and Nicobar Islands</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chandigarh</option>
                            <option>Chhattisgarh</option>
                            <option>Dadra and Nagar Haveli</option>
                            <option>Daman and Diu</option>
                            <option>Delhi</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jammu and Kashmir</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Lakshadweep</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Puducherry</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                          </select>
                        </div>
                        <div className="form-group col-md-2">
                          <input
                            onChange={this.onChange}
                            type="text"
                            className={classnames("form-control ", {
                              "is-invalid": errors.pinCode,
                            })}
                            placeholder="pinCode"
                            name="pinCode"
                            id="pinCode"
                            value={this.state.pinCode}
                          />
                          {errors.pinCode && (
                            <div className="invalid-feedback">{errors.pinCode}</div>
                          )}
                        </div>
                      </div>
                      <div className="mb-3">
                        <button type="button" className="btn btn-light">
                          Add Bank Details
                    </button>
                        <span className="text-muted">Optional</span>
                      </div>
                      <div className="form-row">
                        <div className="input-group col-md-6 mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">

                            </span>
                          </div>
                          <input
                            onChange={this.onChange}
                            type="text"
                            className="form-control form-control-md"
                            placeholder="Bank Name"
                            name="bankName"
                            value={this.state.bankName}
                          />
                        </div>
                        <div className="input-group col-md-6 mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">

                            </span>
                          </div>
                          <input
                            onChange={this.onChange}
                            type="text"
                            className="form-control form-control-md"
                            placeholder="Account Holder Name"
                            name="accountHolderName"
                            value={this.state.accountHolderName}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="input-group col-md-12 mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">

                            </span>
                          </div>
                          <input
                            onChange={this.onChange}
                            type="text"
                            className="form-control form-control-md"
                            placeholder="Account No."
                            name="accountNumber"
                            value={this.state.accountNumber}
                          />
                        </div>

                      </div>
                      <div className="form-row">
                        <div className="input-group col-md-12 mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">

                            </span>
                          </div>
                          <input
                            onChange={this.onChange}
                            type="text"
                            className="form-control form-control-md"
                            placeholder="IFSC code"
                            name="ifscCode"
                            value={this.state.ifscCode}
                          />
                        </div>

                      </div>{" "}
                      <div className="form-group">
                        <div className="form-check">

                          <br /><input
                            onChange={this.onChange}
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            required
                          />
                          <label className="form-check-label">
                            By registering up, I agree to Jagtu Farms Private Limited{" "}
                            <a
                              href="https://drive.google.com/file/d/1_TOfNcUpNSZlo470naMf5UPTtJ8Fk16N/view?usp=sharing"
                              title="Terms and Conditions"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Terms and Conditions.
                        </a>
                          </label>
                        </div>
                      </div>
                      <input
                        onChange={this.onChange}
                        type="submit"
                        className="btn btn-info btn-block mt-4"
                      />
                      <br />
                      <p className="text-center">Already have an account? <span><Link to="/login">Login Here</Link></span></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
