import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Css & scss
import "./App.scss";
import "./App.css";

import Login from "./components/loginAndSignup/pages/Login";
import Register from "./components/loginAndSignup/pages/Register";
//import Home from "./components/loginAndSignup/pages/Home";

//Import components (Pages) - Admin Panel
import SellersTable from "./components/Admin Panel/Pages/Sellers/SellersTableNew";


//Import Component (Pages) - Buyer
import Home from "./components/Home/Home";

import SellerRegistration from "./components/sellerRegistration/SellerRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      
      <Routes>
          <Route path="/AdminPanel/" element={<SellersTable />} />
        </Routes>

      <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/Seller" element={<SellerRegistration />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
