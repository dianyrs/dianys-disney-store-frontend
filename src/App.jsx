import './App.css';
import Pay from './components/Pay';
import Success from './components/Success';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  return (
        <div>
        <ProductList />
        </div>
  );
};

export default App;
