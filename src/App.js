import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "./App.css";
import GlobalStyle from "./assets/styles/GlobalStyle";
import SignOut from "./components/AdminHeader/SignOut/signOut";
import AdminNav from "./components/main/AdminNav/adminNav";
import Footer from "./components/main/Footer/footer";
import ScrollToTop from "./components/main/ScrollToTop/scrollToTop";
import ScrollToTopRouter from "./components/main/ScrollToTop/scrollToTopRouter";
import NotFoundPage from "./components/notFoundPage";
import PrivateRoute from "./components/privateRoute";
import AdminHome from "./pages/AdminHome/main";
import AdminLogin from "./pages/AdminLogin/main";
import Header from "./pages/Header/header";
import Home from "./pages/Home/main";
import Login from "./pages/Login/login";
import OrderPage from "./pages/Order/main";
import Product from "./pages/Product/main";
import ShoppingCart from "./pages/ShoppingItems/main";
import "./_app.scss";
import AdminOrder from "./pages/AdminOrder/main";
import AdminProduct from "./pages/AdminProduct/main";
import SupportedSupplier from "./pages/SupportedSupplier/main";

function App() {
  console.log("app");

  return (
    <div className="wrapper">
      <GlobalStyle />
      <SignOut />
      <div className="main-content">
        <Router>
          <Header />
          <Switch>
            <Route
              path={[
                "/admin/home",
                "/admin/order/:orderStatus",
                "/admin/product",
                "/admin/supplier",
              ]}
            >
              <div className="container-fluid pt-1">
                <Row style={{ height: "100vh", background: "white" }}>
                  <Col xs="3" className="p-0">
                    <AdminNav />
                  </Col>
                  <Col xs="9" className="pl-0 pr-5">
                    <Switch>
                      {/*TODO: update to private route*/}
                      <PrivateRoute path="/admin/home">
                        <AdminHome />
                      </PrivateRoute>
                      <PrivateRoute path="/admin/order/:orderStatus">
                        <AdminOrder />
                      </PrivateRoute>
                      <PrivateRoute path="/admin/product">
                        <AdminProduct />
                      </PrivateRoute>
                      <PrivateRoute path="/admin/supplier">
                        <SupportedSupplier />
                      </PrivateRoute>
                    </Switch>
                  </Col>
                </Row>
              </div>
            </Route>

            <Route path="/admin/login">
              <AdminLogin />
            </Route>

            <Route
              path={[
                "/home",
                "/shopping-cart",
                "/wish-list",
                "/product",
                "/product/:productCategory",
                "/login",
                "/check-out",
                "/your-orders/:orderStatus",
                "/your-orders/:orderStatus/:orderId",
              ]}
            >
              <div className="body-content">
                <ScrollToTop />
                <ScrollToTopRouter>
                  <Switch>
                    <Route exact path={["/home", "/"]}>
                      <Home />
                    </Route>
                    <Route path={["/shopping-cart", "/wish-list"]}>
                      <ShoppingCart />
                    </Route>
                    <Route path={["/product", "/product/:productCategory"]}>
                      <Product />
                    </Route>
                    <Route path="/login">
                      <Login />
                    </Route>

                    <PrivateRoute path="/check-out">
                      <ShoppingCart />
                    </PrivateRoute>
                    <PrivateRoute
                      path={[
                        "/your-orders/:orderStatus",
                        "/your-orders/:orderStatus/:orderId",
                      ]}
                    >
                      <OrderPage />
                    </PrivateRoute>
                  </Switch>
                </ScrollToTopRouter>

                <Footer />
              </div>
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
