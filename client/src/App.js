import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Css & scss
import "./App.scss";
import "./App.css";

import Login from "./components/loginAndSignup/pages/Login";
import Register from "./components/loginAndSignup/pages/Register";

//Import components (Pages) - Admin
import AppLayout from "./components/Admin Panel/Layout/AppLayout";
import Dashboard from "./Pages/Admin Panel/Dashboard/Dashboard";
import SellersTable from "./Pages/Admin Panel/Sellers/SellersTable";
import Categorys from "./Pages/Admin Panel/Products/Categories";
import ProductTable from "./Pages/Admin Panel/Products/ProductTable";
import Verification from "./Pages/Admin Panel/SellerVerification/Verification";

//Import Component (Pages) - Client
import Home from "./Pages/Client Panel/Home";

//Import Component (Pages) - Seller
import SellerRegistration from "./components/seller Panel/SellerRegistration";

//Import Page - Form
import Formview from "./Pages/Client Panel/products/Form";

//Import page- ProductsView
import ProductsView from "./Pages/Client Panel/products/ProductsView";

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
        <Route path="AdminPanel" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="Sellers" element={<SellersTable />} />
          <Route path="Products" element={<Categorys />} />
          <Route path="Verification" element={<Verification />} />

          <Route path="Products/ProductDetails" element={<ProductTable />} />
        </Route>
      </Routes>
      {/* Client */}
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
      {/* Seller */}
      <Routes>
        <Route path="/Seller" element={<SellerRegistration />} />
      </Routes>
      {/*Form*/}
      <Routes>
        <Route path="/Form" element={<Formview />} />
      </Routes>
      {/*ProductsView*/}
      <Routes>
        <Route path="/ProductsView" element={<ProductsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
