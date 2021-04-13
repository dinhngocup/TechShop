import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import News from "./components/news";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
import Home from "./pages/Home/main";
import Product from "./pages/Product/main";
import ShoppingCart from "./pages/ShoppingItems/main";
import "./_app.scss";
import ScrollToTopRouter from "./components/ScrollToTop/scrollToTopRouter";

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
                <Route path="/home">
                  <Home />
                </Route>
                <Route
                  path={[
                    "/shopping-cart",
                    "/wish-list",
                    "/check-out",
                    "/completed-order",
                  ]}
                >
                  <ShoppingCart />
                </Route>
                <Route path="/user-info">
                  <News />
                </Route>

                <Route path={["/products", "/products/:slug"]}>
                  <Product />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>

                <Route path="/contacts">
                  <News />
                </Route>
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
