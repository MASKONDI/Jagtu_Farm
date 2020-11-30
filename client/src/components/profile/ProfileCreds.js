import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { addRequirement } = this.props;

    const requireItems = addRequirement.map((req) => (
      <li key={req._id} className="list-group-item">
        <h4>{req.commodityName}</h4>

        <p>
          <strong>Variety:</strong> {req.variety}
        </p>
        <p>
          {req.registrationType === "" ? null : (
            <span>
              <strong>RegistrationType: </strong> {req.registrationType}
            </span>
          )}
        </p>
        <p>
          <Moment format="YYYY/MM/DD">{req.fromDate}</Moment> -
          {req.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{req.toDate}</Moment>
          )}
        </p>
        <p>
          {req.remarks === "" ? null : (
            <span>
              <strong>Remarks: </strong> {req.remarks}
            </span>
          )}
        </p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Requirement</h3>
          {requireItems.length > 0 ? (
            <ul className="list-group">{requireItems}</ul>
          ) : (
            <p className="text-center">No requirement Listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
