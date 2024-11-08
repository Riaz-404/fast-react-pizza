import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/user/login" className="text-sm font-semibold md:block">
      Log In
    </Link>
  );
};
export default LoginButton;
