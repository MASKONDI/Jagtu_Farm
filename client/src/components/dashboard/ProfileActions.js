import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light disabled">
        <i className="fa fa-user-circle text-info mr-1"></i> Edit Profile
      </Link>
      <Link to="/addRequirement" className="btn btn-light">
        <i className="fa fa-store text-info mr-1"></i>
        Create Store {/** Add Requirement */}
      </Link>
      {/*<Link to="/futureRequirement" className="btn btn-light">
        <i className="fa fa-store text-info mr-1"></i>
        Add Future Requirement
  </Link>*/}
    </div>
  );
};

export default ProfileActions;
