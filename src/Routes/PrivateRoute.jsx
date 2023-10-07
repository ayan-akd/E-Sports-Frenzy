/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="w-screen h-screen flex items-center justify-center"><span className="loading loading-spinner text-red-600  loading-lg"></span></div>
    }
    if(!user){
       return <Navigate state={location.pathname} to={"/login"}></Navigate>
    }
    return children
};

export default PrivateRoute;