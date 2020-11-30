import React, { Component } from "react";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 image-location">
                {/*  &nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
              />*/}
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">
                {profile.user.firstName}
                {profile.user.lastName}
              </h1>
              <p className="lead text-center">
                {profile.registrationType}{" "}
                {isEmpty(profile.company) ? null : (
                  <span>at {profile.company}</span>
                )}
              </p>
              {profile.user.phoneNumber}
              {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
              <p>
                {isEmpty(profile.website) ? null : (
                  <Link
                    className="text-white p-2"
                    to={profile.website}
                    target="_blank"
                  >
                    <i className="fa fa-globe fa-2x" />
                  </Link>
                )}

                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <Link
                    className="text-white p-2"
                    to={profile.social.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </Link>
                )}

                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <Link
                    className="text-white p-2"
                    to={profile.social.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </Link>
                )}
                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <Link
                    className="text-white p-2"
                    to={profile.social.youtube}
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </Link>
                )}

                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <Link
                    className="text-white p-2"
                    to={profile.social.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
