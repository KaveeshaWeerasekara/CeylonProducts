import "./App.scss";

import Login from "./components/loginAndSignup/pages/Login";
import Register from "./components/loginAndSignup/pages/Register";
import Home from "./components/loginAndSignup/pages/Home";
import Seller from "./components/sellerRegistration/SellerRegistration";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/seller" element={<Seller />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
