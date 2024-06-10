import React from "react";
import OrdersHeader from "./components/CommonOrderComponents/OrdersHeader";
import ListProduct from "./components/OrderPageComponents/ListProduct";

function OrderPage() {
  return (
    <>
      <OrdersHeader />

      <div className="OrderPageGeneralContainer">
        <ListProduct />
      </div>
    </>
  );
}

export default OrderPage;
