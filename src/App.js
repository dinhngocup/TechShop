import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { updateRequestClose } from "./appSlice";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./pages/Home/main";
import News from "./components/news";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
import "./_app.scss";
import Product from "./pages/Product/main";



function App() {
  console.log("app");
  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    const action = updateRequestClose(true);
    dispatch(action);
  };

  return (
    <div className="wrapper">
      <div className="main-content" onClick={handleCloseMenu}>
        <Router>
          <Header />
          <div className="body-content">
            <ScrollToTop />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/shopping-cart" component={News} />
              <Route path="/user-info" component={News} />
              <Route path="/products" component={Product} />
              <Route path="/news" component={News} />
              <Route path="/sales" component={News} />
              <Route path="/contacts" component={News} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
