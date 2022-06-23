import React, { useEffect, useState } from "react";
import axios from "axios";

//Search Icon
import SearchIcon from "@mui/icons-material/Search";

//Import Pagination liabry
import ReactPaginate from "react-paginate";


import "../../../sass/Admin/Pagination.css";

//per page has rows
const PER_PAGE = 10;

const Verification = () => {
  //Set status
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(posts.length / PER_PAGE);

  //Get database data using axios
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get("/api/users/getuserByValidation");
    if (res.data.success) {
      setPosts(res.data.existingposts);
      console.log(res.data);
    }
    setLoading(false);
  };
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("Selected Page", selectedPage);
    setCurrentPage(selectedPage);
  };

  const verifyUser = async (id) => {
    await axios
      .put(`http://localhost:5000/api/users/verifyuser/${id}`)
      .then((res) => {
        alert("User verified successfully");
        window.location.reload(true);
        console.log("User verified success fully");
      });
  };
  const notverifyUser = async (id) => {
    await axios
      .put(`http://localhost:5000/api/users/notverifyuser/${id}`)
      .then((res) => {
        alert("User not accepted as a seller");
        window.location.reload(true);
        console.log("User not accepted as a seller");
      });
  };
  return (
    <div>
      {
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div>
            <br></br>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                  <SearchIcon color="disabled" />
                </svg>
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-1/3 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
            <br></br>
          </div>

          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Postal code
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          TP No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>

                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    {/* Data mapping & Search function */}
                    <tbody className="bg-white divide-y divide-gray-200">
                      {posts
                        .filter((user) => {
                          if (searchTerm === "") {
                            return user;
                          } else if (
                            user.firstName
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            user.lastName
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            user.Email.toLowerCase().includes(
                              searchTerm.toLowerCase()
                            ) ||
                            user.Street.toLowerCase().includes(
                              searchTerm.toLowerCase()
                            ) ||
                            user.city
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return user;
                          }
                        })

                        .slice(offset, offset + PER_PAGE)
                        .map((post, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={post.img}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {post.firstName} {post.lastName}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {post.Email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {post.streetNo}
                                {post.Street}, <br></br>
                                {post.city},
                                {post.province}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {post.postalCode}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {post.tpnumber}
                            </td>
                            <td className="px- py-2 whitespace-nowrap ">
                              <button className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mb-2" onClick={() => verifyUser(post._id)}>
                                Verify 
                              </button>
                            <br></br>
                              <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded  " onClick={() => notverifyUser(post._id)}>
                                Ignore
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination Bar */}
          <div className="pagination-container container-fluid align-items-center my-3">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default Verification;
