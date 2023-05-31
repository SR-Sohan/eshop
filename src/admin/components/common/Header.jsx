import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [isLogin,setIsLogin] = useState(false);
  const [displayName,setDisplayName] = useState('')

  let navigate = useNavigate();

 useEffect(()=>{
  onAuthStateChanged(auth,(user)=> {
      if(user){
          setIsLogin(true)
          setDisplayName(user.displayName);
      }else{
          setIsLogin(false)
      }
  })
 },[isLogin])

  const handleLogout = () => {
      signOut(auth).then(() => {
          navigate("/login")
        }).catch((error) => {
          alert(error.message)
        });
  }
  return (
    <div className="dash_header_component py-3 mb-5">
      <div className="container">
        <div className="dash_header_wrap">
          <div className="logo_area">
           
          </div>
          <div className="user_name">
            <p>{displayName && displayName}</p>
          </div>
          <div className="logout">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
