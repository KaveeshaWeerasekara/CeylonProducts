import React from "react";
import SOrdersTable from "../../components/seller Panel/OrderDetails/SOrdersTable";
import UpdatesOrder from "../../components/seller Panel/OrderDetails/UpdatesOrder";

function OrderDetails() {
  return <div className=" container">
      <UpdatesOrder />
      <SOrdersTable />
  </div>;
}

export default OrderDetails;
