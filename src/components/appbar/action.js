import React from "react";
import logo from "assets/myLogo.png";
import { Link } from "react-router-dom";
import { Button } from 'components';

//the App bar displays information och actions relating to the current user
function Action() {
  return (
    <div className="appbar__left">
      <Link to="/signin" >
        <Button variant="login" title="Sign In" />
      </Link>
      {/* <div className="avatar">
            <img src={logo}/>
          </div>
          <div className="user">
              <p>Hello,</p>
              <span>User Name</span>
          </div> */}
    </div>
  );
}

export default Action;
