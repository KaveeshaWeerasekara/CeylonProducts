import React, { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";

//Export Seller Transaction Table
const Transction = () => {
  const [courses, setCourses] = useState([]);

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

  const columns = [
    {
      name: "postalCode",
      label: "JOINED DATE",
    },
    {
      name: "Street",
      label: "CATEGEORY",
      options: {
        sort: false,
      },
    },
    {
      name: "city",
      label: "AMOUNT",
      options: {
        sort: false,
      },
    },
  ];

  const options = {
    filterType: "dropdown",
   responsive: "stacked",
    print: false,
    filter: false,
    viewColumns: false,
    
  };

  //Return Table
  return (
    <div>
      <br></br>
      <MUIDataTable
        title="Transactions"
        data={courses}
        columns={columns}
        options={options}
      />
      <br></br>
    </div>
  );
};

export default Transction;
