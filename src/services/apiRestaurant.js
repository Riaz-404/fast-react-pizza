// const API_URL = "http://localhost:8080/api";
// const API_URL = "https://react-fast-pizza-api.onrender.com/api";
const API_URL = "https://fast-react-pizza-backend.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    console.log(newOrder);
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    console.log(data);
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function getUser(id) {
  try {
    const res = await fetch(`${API_URL}/user/${id}`);
    if (!res.ok) throw Error(`Couldn't find user ${id}`);

    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed fetching user");
  }
}

export async function loginUser(params) {
  try {
    const res = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed login user");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
