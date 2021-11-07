import React from "react";
 import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import Product from "./components/Product";
import Home from "./components/Home";
import "./App.css";

function App() {
    return (
        <Router>
            <Layout/>
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route path="/cart" component={Cart} />
                <Route path="/product" render={(props) => <Product {...props} />} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path="/payment" component={Payment} />
            </Routes>
        </Router>

    );
}
export default App;
