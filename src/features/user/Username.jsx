import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Username() {
  const userName = useSelector((state) => state.user.userName);

  if (!userName) return null;

  return (
    <Link to="/user">
      <div className="text-sm font-semibold">{userName}</div>
    </Link>
  );
}

export default Username;
