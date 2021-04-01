import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { updateRequestClose } from "./appSlice";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import News from "./components/news";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
import Home from "./pages/Home/main";
import Product from "./pages/Product/main";
import "./_app.scss";
import Sales from "./components/sale";

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
              {/* <Route path=":slug">
                <Sales />
              </Route> */}
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/shopping-cart">
                <News />
              </Route>
              <Route path="/user-info">
                <News />
              </Route>
              <Route path="/products">
                <Product />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>

              <Route path="/sales">
                <Sales />
              </Route>
              <Route path="/contacts">
                <News />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
