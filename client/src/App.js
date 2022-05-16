import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Css & scss
import "./App.scss";
import "./App.css";

import Login from "./components/loginAndSignup/pages/Login";
import Register from "./components/loginAndSignup/pages/Register";

//Import components (Pages) - Admin
import SellersTable from "./Pages/Admin Panel/SellersTable";

//Import Component (Pages) - Client
import Home from "./Pages/Client Panel/Home";

//Import Component (Pages) - Seller
import SellerRegistration from "./components/seller Panel/SellerRegistration";

function App() {
  return (
    <BrowserRouter>
      {/* Login & Registation */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      {/* Admin */}
      <Routes>
        <Route path="/AdminPanel/" element={<SellersTable />} />
      </Routes>

      {/* Client */}
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>

      {/* Seller */}
      <Routes>
        <Route path="/Seller" element={<SellerRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
