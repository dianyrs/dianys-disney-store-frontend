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
import NotFound from "./components/NotFoundPage";
import {Link} from "react-router-dom";
import Products from "./components/Products";
import Categories from "./components/Categories";
import CategoryItems from "./components/CategoryItems";
import Test from "./components/Test";

function App() {
    return (
        <div className="App">
            <header>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/pay" element={<Pay/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/product/:id" element={<ProductPage/>}/>
                <Route path="/all-products" element={<ProductList/>}/>
                <Route path="/categories/:category" element={<ProductList/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/categories" element={<CategoryItems/>}/>
                <Route path="/test" element={<Test/>}/>

            </Routes>
        </div>
    );
    // return (
    //         <div>
    //             <LoginPage/>
    //             {/*<Routes>*/}
    //             {/*    <Route exact path="/" component={Home}/>*/}
    //             {/*    <Route exact path="/register" component={RegisterPage}/>*/}
    //             {/*    <Route exact path="/login" component={LoginPage}/>*/}
    //             {/*    <Route exact path="/success" component={Success}/>*/}
    //             {/*    <Route exact path="/payment" component={Pay}/>*/}
    //             {/*</Routes>*/}
    //         </div>
    // );
};

export default App;
