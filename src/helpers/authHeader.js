import { Cookies } from "react-cookie";

export function authHeader() {
  const cookies = new Cookies();
  let user = cookies.get("user");

  if (user && user.access_token) {
    return `Bearer ${user.access_token}`;
  } else {
    return {};
  }
}
