import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    if (profile.registrationType === "Buyer") {
      return (
        <div className="table-responsive-sm">
          <table className="table">
            <thead>
              <tr className="table-danger">
                <td>
                  <h6>
                    {profile.user.firstName} {profile.user.lastName}
                  </h6>
                </td>
                <td>
                  {isEmpty(profile.location) ? null : (
                    <span>{profile.location}</span>
                  )}
                </td>
                {/* <td>{profile.user.phoneNumber}</td> */}
                <td style={{ color: "red" }}>{profile.registrationType} </td>
                <td>
                  <Link
                    to={`/profile/${profile.handle}`}
                    className="btn btn-info"
                  >
                    View Profile
                  </Link>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      );
    } else {
      return (
        <div className="table-responsive-sm">
          <table className="table">
            <thead>
              <tr className="table-success">
                <td>
                  <h6>
                    {profile.user.firstName} {profile.user.lastName}
                  </h6>
                </td>
                <td>
                  {isEmpty(profile.location) ? null : (
                    <span>{profile.location}</span>
                  )}
                </td>
                {/* <td>{profile.user.phoneNumber}</td> */}
                <td style={{ color: "red" }}>{profile.registrationType} </td>
                <td>
                  <Link
                    to={`/profile/${profile.handle}`}
                    className="btn btn-info"
                  >
                    View Profile
                  </Link>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      );
    }
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
