import { cookiesService } from "helpers/cookiesService";

export function authHeader() {
  let user = cookiesService.getCookies("user");

  if (user && user.access_token) {
    return `Bearer ${user.access_token}`;
  } else {
    return {};
  }
}
