import React from "react";
import logo from "../../../Assets/mile1-assets/logo.svg";
import formbanner from "../../../Assets/mile2-aseets/pictures/form-banner.png";
function OrdersHeader() {
  return (
    <header className="orderMainHeader">
      <div className="orderHeader">
        <img src={logo} alt="Logo" />
      </div>

      <img
        style={{ marginTop: "-90px", zIndex: "-1" }}
        src={formbanner}
        alt="pizza image"
      />
    </header>
  );
}

export default OrdersHeader;
