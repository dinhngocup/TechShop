import { cookiesService } from "./cookiesService";

export function authHeader() {
  let token = cookiesService.getCookies("user");

  if (token) {
    return `Bearer ${token}`;
  } else {
    return {};
  }
}
