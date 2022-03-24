import './App.css';
import Pay from './components/Pay';
import Success from './components/Success';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";


function App() {
  return (
        <div>
        <Home/>
            <Routes>
                <Route exact path="/pay" element={<Pay/>}>
                </Route>
                <Route exact path="/success" element={<Success/>}>
                </Route>
            </Routes>
        </div>
  );
};

export default App;
