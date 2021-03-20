import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { updateRequestClose } from "./appSlice";
import Header from "./components/Header/header";
import Home from './components/Home/home';
import News from "./components/news";
import "./_app.scss";

//const Home = React.lazy(() => import("./components/Home/home"));

function App() {
  console.log('app')
  //const stateMenu = useSelector((state) => state.menu);
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
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/shopping-cart" />
              <Route path="/user-info" />
              <Route path="/products" />
              <Route path="/news" component={News} />
              <Route path="/sales" />
              <Route path="/contacts" />
            </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
