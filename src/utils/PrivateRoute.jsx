import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  } else {
    return (
      <div>
        <Navigate to={"/auth/singIn"}></Navigate>
        <Navigate to={"/auth/singIn"}></Navigate>
        <Navigate to={"/auth/singIn"}></Navigate>
      </div>
    );
  }
};

export default PrivateRoute;
