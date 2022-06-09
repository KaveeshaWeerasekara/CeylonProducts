import React, { useState, useEffect } from "react";

import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";

//Icons
import SearchIcon from "@mui/icons-material/Search";
import ProductTable from "./ProductTable";

//Product Categorys
const products = [
  {
    title: "Spices",
    image:
      "https://images.unsplash.com/photo-1616225273962-05c320ca73d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    to: "/",
  },
  {
    title: "Tea",
    image:
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    to: "/",
  },
  {
    title: "Coffee",
    image:
      "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    to: "/",
  },
  {
    title: "Milk",
    image:
      "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    to: "/",
  },
  {
    title: "Handy Craft",
    image:
      "https://images.unsplash.com/photo-1556379069-7c1b1b8990b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
    to: "/",
  },
  {
    title: "Traditional Mask",
    image:
      "https://images.unsplash.com/photo-1546753051-f9cbab09c91b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    to: "/",
  },
];

const Categorys = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  //Get Users Details
  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const res = await axios.get(`/api/users/getusers`);
        if (res.data.success) {
          setCourses(res.data.existingposts);
          console.log(res.data);
        }
      } catch (e) {
        alert(e.message);
      }
    };
    getAllCourses();
  }, []);

  //serch
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //Count Sellers
  let count = 0;
  courses.find((seller) => {
    if (seller.firstName === "Harli") {
      count = count + 1;
    }
  });

  // switch(user.title){
  //   case "Spices":
  //     return count;
  //     break;
  //   default:
  //     return 0;
  // }

  // for (let index = 0; index < courses.length; index++) {

  //   if( courses.firstName[index] == "Harli"){
  //     count=count+1;
  //   }

  // }

  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold mt-3 text-3xl italic">Products...</h1>

      {/* Search Bar */}
      <div>
        <br></br>
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
              <SearchIcon color="disabled" />
            </svg>
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-1/3 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
            onChange={handleSearch}
          />
        </label>
      </div>

      {/* View All Products Details Button */}
      <div className="flex justify-end">
        <Link
          className=" mr-0  bg-green-700  transition duration-150 ease-in-out hover:bg-green-600 rounded text-white px-3 md:px-6 py-2 text-sm "
          to="ProductDetails?category=all"
        >
          View All Products Details
        </Link>
      </div>

      {/* Map Card Details */}
      <div className="grid grid-flow-rows grid-cols-3 gap-8">
        {products
          .filter((user) => {
            if (search === "") {
              return user;
            } else if (
              user.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return user;
            }
          })
          .map((user) => {
            return (
              <div>
                <Link to={`ProductDetails?category=${user.title}`}>
                  <Card
                    title={user.title}
                    image={user.image}
                    sCount={user.title === "Spices" ? count : 0}
                  />
                </Link>
              </div>
            );
          })}
      </div>
      <br></br>
    </div>
  );
};

export default Categorys;
