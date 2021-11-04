import React from "react";
import "./_userInfo.scss";
import avatar from "../../../assets/images/avatar.jpg";

function UserInfo(props) {
  return (
    <>
      <div className="function-icon d-flex flex-direction-row align-items-center">
        <div>
          Hi! <span className="username">dinhngocup</span>
        </div>
        <div
          data-toggle="modal"
          data-target="#signOutModal"
        >
          <i className="fa fa-sign-out mx-4" aria-hidden="true"></i>
        </div>
        <div className="avatar-user">
          <img src={avatar} alt=""/>
        </div>
        
      </div>
    </>
  );
}

UserInfo.propTypes = {};

export default UserInfo;
