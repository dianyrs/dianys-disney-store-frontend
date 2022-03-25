import React from 'react';
import './App.css';
import Pay from './components/Pay';

import {Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";
import Register from "./components/RegisterPage";
import RegisterPage from "./components/RegisterPage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Success from "./components/Success";
import Cart from "./components/Cart";
function App ()  {
  return (
          <div className="App">
              <Cart/>
              {/*<Routes>*/}
              {/*    <Route exact path="/" component={Home}/>*/}
              {/*    <Route exact path="/register" component={RegisterPage}/>*/}
              {/*    <Route exact path="/login" component={LoginPage}/>*/}
              {/*    <Route exact path="/success" component={Success}/>*/}
              {/*    <Route exact path="/payment" component={Pay}/>*/}
              {/*</Routes>*/}
          </div>
  );
};

export default App;
