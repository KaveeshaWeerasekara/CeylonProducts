import React, { useState, useEffect } from "react";
import axios from "axios";

//Export Top Sellers
export default function TopSellers() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  //Get Database Data
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("/api/users/getusers");
      if (res.data.success) {
        setPosts(res.data.existingposts);
        console.log(res.data);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="md:w-full rounded-md shadow-lg p-5 bg-gray-700 ">
          <h1 className="pt-2 pb-3 text-gray-800 dark:text-gray-100 font-bold text-lg">
            Top Sellers
          </h1>
          {/* map Sellers */}
          {currentPosts.map((user) => {
            return (
              <div className="flex items-center justify-between">
                <div className="flex items-center pt-2 ">
                  <div className="w-12 h-12 flex items-center justify-center ">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.img}
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-100 text-sm font-medium pl-3">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
                <p className="text-sm font-medium text-indigo-500">25 orders</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
