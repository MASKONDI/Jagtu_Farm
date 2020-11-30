import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteRequirement } from "../../actions/profileAction";

class Requirement extends Component {
  onDeleteClick(id) {
    this.props.deleteRequirement(id);
  }

  render() {
    const requirement = this.props.requirement.map((req) => (
      <tr key={req._id}>
        <td>{req.commodityName}</td>
        <td>{req.variety}</td>
        <td>{req.registrationType}</td>
    <td>{req.quantity}<span>{req.measure}</span></td>
        <td>
          <Moment format="YYYY/MM/DD">{req.fromDate}</Moment> -
          {req.toDate === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{req.toDate}</Moment>
          )}
        </td>
        <td>
          {" "}
          <p style={{ color: "red" }}>{req.status}...</p>
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, req._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Requirement Details</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Commodity</th>
              <th>Variety</th>
              <th>Sell/Buy</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
            {requirement}
          </thead>
        </table>
      </div>
    );
  }
}
Requirement.propTypes = {
  deleteRequirement: PropTypes.func.isRequired,
};
export default connect(null, { deleteRequirement })(Requirement);
