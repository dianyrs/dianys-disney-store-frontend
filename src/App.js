import './App.css';
import Pay from './components/Pay';
import Success from './components/Success';
import {Routes, Route} from "react-router-dom";
import Test from "./components/Test";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <div className="container">
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
