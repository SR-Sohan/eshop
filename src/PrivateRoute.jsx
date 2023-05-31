import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import auth from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


const PrivateRoute = ({children}) => {
    const [isLogin,setIsLogin] = useState(true);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=> {
            if(user){
                setIsLogin(true)
            }else{
                setIsLogin(false)
            }
        })
       },[isLogin])

   

    if(isLogin){
        return children;
    }else{
        return <Navigate to="/login" />
    }

}

export default PrivateRoute;