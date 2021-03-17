import Header from "./components/Header/header";
import "./App.css";
import News from './components/news'
import Home from './components/Home/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        
      </div>
      <Header />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/shopping-cart" />
        <Route path="/user-info" />
        <Route path="/products" />
        <Route path="/news" component={News}/>
        <Route path="/sales" />
        <Route path="/contacts" />
      </Switch>
    </Router>
  );
}

export default App;
