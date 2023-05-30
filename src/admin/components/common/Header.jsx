import React from "react";

const Header = () => {
  return (
    <div className="dash_header_component py-3 mb-5">
      <div className="container">
        <div className="dash_header_wrap">
          <div className="logo_area">
           
          </div>
          <div className="user_name">
            <p>Sohanur Rahman</p>
          </div>
          <div className="logout">
            <button>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
