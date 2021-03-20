import Header from "./components/Header/header";
import News from "./components/news";
import Home from "./components/Home/home";

import "./App.css";
import "./_app.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react'
function App() {
  const [isClosingMenu, setIsClosingMenu] = useState(true);
  const [requestCloseMenu, setRequestCloseMenu] = useState(false)
  const handleCloseMenu = () => {
    //menu is opened
    //console.log(isClosingMenu)
    if(!isClosingMenu)
      setRequestCloseMenu(true);
    
    
  }

  const updateMenuStatus = (dataFromChild) => {
    setIsClosingMenu(dataFromChild.isClosingMenu);
    setRequestCloseMenu(dataFromChild.requestCloseMenu)
  }
  return (
    <div className="wrapper">
      <div className="main-content" onClick={handleCloseMenu}>
        <Router>
          <Header updateMenuStatus={updateMenuStatus}
          requestCloseMenu={requestCloseMenu} />
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
