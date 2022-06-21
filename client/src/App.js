import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Css & scss
import "./App.scss";
import "./App.css";
import "./css/ContactUs.css";

import Login from "./components/loginAndSignup/pages/Login";
import Register from "./components/loginAndSignup/pages/Register";

//Import components (Pages) - Admin
import AppLayout from "./components/Admin Panel/Layout/AppLayout";
import Dashboard from "./Pages/Admin Panel/Dashboard/Dashboard";
import SellersTable from "./Pages/Admin Panel/Sellers/SellersTable";
import OrderTable from "./Pages/Admin Panel/Orders/OrderTable";
import Earnings from "./Pages/Admin Panel/Earnings/Earning";
import Categorys from "./Pages/Admin Panel/Products/Categories";
import ProductTable from "./Pages/Admin Panel/Products/ProductTable";
import Verification from "./Pages/Admin Panel/SellerVerification/Verification";

//Import Component (Pages) - Client
import Home from "./Pages/Client Panel/Home";

//Import Component (Pages) - client
import ContactUsPage from "./Pages/Client Panel/ContactUsPage";

//Import Component (Pages) - Seller
import SellerRegistration from "./components/seller Panel/SellerRegistration";
import SDashboard from "./Pages/Seller Panel/Dashboard";
import SEarnings from "./Pages/Seller Panel/Earnings";

//Import Page - Form
import Formview from "./Pages/Client Panel/products/Form";

//Import page- ProductsView
import ProductView from "./components/Client Panel/Product/ProductView";

//Import page- Shop
import Shop from "./components/Client Panel/Product/Shop";


import AppLayout1 from "./components/seller Panel/Layout/AppLayout1";
import OrderDetails from "./Pages/Seller Panel/OrderDetails";


//Import page-Blogs
import Blogs from "./Pages/Client Panel/BlogPosts/Blogs";
import { AddBlog } from "./Pages/Client Panel/BlogPosts/AddBlogs";


//Import Refund pages
import Refund from "./Pages/Client Panel/Refunds/Refund";

//Import Help Center Pages
import HelpCenter from "./Pages/Client Panel/HelpCenter/HelpCenter";
import GettingMsg from "./Pages/Client Panel/HelpCenter/GettingMsg";
import RequestRefund from "./Pages/Client Panel/HelpCenter/RequestRefund";
import ReportType from "./Pages/Client Panel/HelpCenter/ReportType";
import Reportrestricted from "./Pages/Client Panel/HelpCenter/Reportrestricted";
import ReturnProduct from "./Pages/Client Panel/HelpCenter/ReturnProduct";
import BuyingProcess from "./Pages/Client Panel/HelpCenter/BuyingProcess";

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
          <Route path="Orders" element={<OrderTable />} />
          <Route path="Earnings" element={<Earnings />} />
          <Route path="Verification" element={<Verification />} />
          <Route path="Products/ProductDetails" element={<ProductTable />} />
        </Route>
      </Routes>

      {/* Seller */}
      <Routes>
        <Route path="SellerPanel" element={<AppLayout1 />}>
          <Route path="" element={<SDashboard />} />
          <Route path="Orders" element={<OrderDetails />} />
          <Route path="earnings" element={<SEarnings />} />
        </Route>
      </Routes>

      {/* Client */}
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/ContactUs" element={<ContactUsPage />} />
      </Routes>

      {/*Form*/}
      <Routes>
        <Route path="/Form" element={<Formview />} />
      </Routes>
      {/*ProductView*/}
      <Routes>
        <Route path="/ProductView" element={<ProductView />} />
      </Routes>

        {/*Shop*/}
        <Routes>
        <Route path="/Shop" element={<Shop />} />
      </Routes>

      <Routes>
      <Route path="/Sellers" element={<SellerRegistration />} />
      </Routes>

      {/* BlogPost Module */}
      <Routes>
        <Route path="/AllBlogs" element={<Blogs />} />
      </Routes>

      <Routes>
        <Route path="/blogs/add" element={<AddBlog />} />
      </Routes>


      {/* Refund Request module */}
      <Routes>
        <Route path="/Refund" element={<Refund />} />
      </Routes>


      {/* Help Center page */}
      <Routes>
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/GettingMsg" element={<GettingMsg />} />
        <Route path="/RequestRefund" element={<RequestRefund />} />
        <Route path="/ReportType" element={<ReportType />} />
        <Route path="/Reportrestricted" element={<Reportrestricted />} />
        <Route path="/ReturnProduct" element={<ReturnProduct />} />
        <Route path="/BuyingProcess" element={<BuyingProcess />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
