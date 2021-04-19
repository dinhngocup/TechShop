import Footer from "components/main/Footer/footer";
import Header from "components/main/Header/header";
import ScrollToTop from "components/main/ScrollToTop/scrollToTop";
import ScrollToTopRouter from "components/main/ScrollToTop/scrollToTopRouter";
import News from "components/news";
import PrivateRoute from "components/privateRoute";
import Home from "pages/Home/main";
import Login from "pages/Login/login";
import Product from "pages/Product/main";
import ShoppingCart from "pages/ShoppingItems/main";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./_app.scss";

function App() {
  console.log("app");

  return (
    <div className="wrapper">
      <div className="main-content">
        <Router>
          <Header />
          <div className="body-content">
            <ScrollToTop />
            <ScrollToTopRouter>
              <Switch>
                <Route exact path={["/home", "/"]}>
                  <Home />
                </Route>
                <Route
                  path={["/shopping-cart", "/wish-list", "/completed-order"]}
                >
                  <ShoppingCart />
                </Route>
                <Route path="/user-info">
                  <News />
                </Route>

                <Route path={["/products", "/products/:slug"]}>
                  <Product />
                </Route>

                <Route path="/contacts">
                  <News />
                </Route>
                
                <Route path="/login">
                  <Login />
                </Route>

                <PrivateRoute path="/check-out">
                  <ShoppingCart />
                </PrivateRoute>
              </Switch>
            </ScrollToTopRouter>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
