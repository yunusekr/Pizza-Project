import React from "react";
import OrdersHeader from "./components/CommonOrderComponents/OrdersHeader";
import ListProduct from "./components/OrderPageComponents/ListProduct";
import Footer from "./components/Footer";
function OrderPage() {
  return (
    <>
      <OrdersHeader />
      <div className="OrderPageGeneralContainer">
        <ListProduct />
      </div>
      <Footer />
    </>
  );
}

export default OrderPage;
