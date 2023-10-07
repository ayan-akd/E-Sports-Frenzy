/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div className="w-screen h-screen flex items-center justify-center"><span className="loading loading-spinner text-red-600  loading-lg"></span></div>
    }
    if(!user){
       return <Navigate to={"/login"}></Navigate>
    }
    return children
};

export default PrivateRoute;