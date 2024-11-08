import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { getUser } from "../../services/apiRestaurant";
import { useDispatch } from "react-redux";
import { updateId, updateName, updateOrderList } from "../user/userSlice";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await getUser({ phone: phoneNumber })
      .then((result) => {
        dispatch(updateId(result._id));
        dispatch(updateName(result.name));
        dispatch(updateOrderList(result.orderList));
      })
      .catch((err) => {
        throw Error(err);
      })
      .finally(() => {
        setPhoneNumber("");
        navigate("/user");
      });
  };

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        <span className="text-yellow-500">Log in to your account</span>
      </h1>

      <Form onSubmit={handleSubmit}>
        <p className="mb-4 text-sm text-stone-600 md:text-base">
          Please enter your mobile number:
        </p>

        <input
          type="tel"
          placeholder="Mobile Number"
          value={phoneNumber}
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="input mb-8 w-72"
        />

        <div>
          <Button type="primary">Log In</Button>
        </div>
      </Form>
    </div>
  );
};
export default Login;
