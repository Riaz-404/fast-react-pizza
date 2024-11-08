import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Username() {
  const { _id, userName } = useSelector((state) => state.user);

  if (!_id) return null;

  return (
    <Link to={`/user/${_id}`}>
      <div className="text-sm font-semibold">{userName}</div>
    </Link>
  );
}

export default Username;
