import React from "react";
import OrdersHeader from "./components/CommonOrderComponents/OrdersHeader";
import ListProduct from "./components/OrderPageComponents/ListProduct";
import Forms from "./components/OrderPageComponents/Forms";

function OrderPage() {
  Forms;
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
