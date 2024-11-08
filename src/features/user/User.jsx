import Button from "../../ui/Button";
import OrderListItem from "./OrderListItem";
import { getUser } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const user = useLoaderData();
  return (
    <div className="px-4 py-3">
      <h2 className="mt-7 text-2xl font-semibold">Welcome, {user.name}</h2>

      <div className="text-center text-xl px-6 py-5">Order List</div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        {user.orderList.map((item) => (
          <OrderListItem item={item} key={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2 text-center">
        <Button to="/menu" type="primary">
          Order pizzas
        </Button>
      </div>
    </div>
  );
};

export async function loader({ params }) {
  const user = await getUser(params.id);
  return user;
}

export default User;
