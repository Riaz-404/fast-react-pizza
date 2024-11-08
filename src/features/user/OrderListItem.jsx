import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { calcMinutesLeft, formatDate } from "../../utils/helpers";

/* eslint-disable react/prop-types */
const OrderListItem = ({ item }) => {
  const { orderId, estimatedDelivery, createdAt } = item;
  const navigate = useNavigate();

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <li className="py-3 px-5 sm:flex sm:items-center sm:justify-between">
      <div>
        <p className="mb-1 sm:mb-0">{orderId}</p>
        <p className="text-xs text-stone-500">{formatDate(createdAt)}</p>
      </div>
      <div className="flex items-center justify-between sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-8">
          {deliveryIn >= 0 ? (
            <div className="text-right">
              <p className="mb-1 sm:mb-0 uppercase">Pending</p>
              <p className="text-xs text-stone-500">
                Estimated delivery: {formatDate(estimatedDelivery)}
              </p>
            </div>
          ) : (
            <div className="text-right uppercase">Delivered</div>
          )}
        </div>
        <p className="text-sm font-bold">
          <Button type="small" onClick={() => navigate(`/order/${orderId}`)}>
            Details
          </Button>
        </p>
      </div>
    </li>
  );
};
export default OrderListItem;
