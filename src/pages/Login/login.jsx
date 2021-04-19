import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "utilities/slices/userSlice";
import { useHistory, useLocation } from "react-router-dom";
import { Cookies } from "react-cookie";
import { updateLoggedInStatus } from "utilities/slices/userSlice";

function Login() {
  console.log("login");
  const location = useLocation();
  const history = useHistory();
  const [info, setInfo] = useState({});
  const { isLoggedIn, error } = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const handleChangeInputText = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function submitToLogin() {
      await dispatch(login(info));
    }
    submitToLogin();
  };

  useEffect(() => {
    const checkLoggedInStatus = () => {
      const cookies = new Cookies();
      const status = cookies.get("user");
      if (status === undefined && isLoggedIn)
        dispatch(updateLoggedInStatus({ isLoggedIn: false }));
    };
    checkLoggedInStatus();

    console.log(isLoggedIn);

    if (isLoggedIn) {
      if (location.state?.referrer.pathname) {
        history.push(location.state.referrer.pathname);
      } else history.push("/home");
    }
  }, [isLoggedIn, history, location, dispatch]);

  return (
    <div>
      <div>Login page</div>
      <form>
        <label>email</label>
        <input name="email" onChange={handleChangeInputText} required />
        <label>password</label>
        <input name="password" onChange={handleChangeInputText} required />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div>{error}</div>
    </div>
  );
}

export default Login;
