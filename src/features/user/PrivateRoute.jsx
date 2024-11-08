/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userName = useSelector((state) => state.user.userName);

  if (userName) {
    return children;
  }
  return <Navigate to="/user/login" />;
};
export default PrivateRoute;
