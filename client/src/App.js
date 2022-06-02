import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Css & scss
import "./App.scss";
import "./App.css";
import "./css/ContactUs.css";



import Login from "./components/loginAndSignup/pages/Login";
import Register from "./components/loginAndSignup/pages/Register";

//Import components (Pages) - Admin
import SellersTable from "./Pages/Admin Panel/SellersTable";

//Import Component (Pages) - Client
import Home from "./Pages/Client Panel/Home";

//Import Component (Pages) - client
import ContactUsPage from "./Pages/Client Panel/ContactUsPage";

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
        <Route path="/AdminPanel/" element={<SellersTable />} />
      </Routes>

      {/* Client */}
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/ContactUs" element={<ContactUsPage />} />
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
