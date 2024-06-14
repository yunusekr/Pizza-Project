import React from "react";

function OrdersHeader() {
  return (
    <header className="orderMainHeader">
      <div className="orderHeader">
        <img src="Assets/mile1-assets/logo.svg" alt="Logo" />
      </div>

      <img
        style={{ marginTop: "-90px", zIndex: "-1" }}
        src="Assets/mile2-aseets/pictures/form-banner.png"
        alt="pizza image"
      />
    </header>
  );
}

export default OrdersHeader;
