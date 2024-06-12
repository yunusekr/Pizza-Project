import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Forms from "./Forms";

const StyledNav = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  color: #5f5f5f;
`;

function ListProduct() {
  const location = useLocation();
  const stateData = location.state?.filteredProduct;
  const [productPrice, setProductPrice] = useState(stateData.foodPrice);
  const [productName, setProductName] = useState(stateData.foodName);

  return (
    <div>
      <nav className="linksAndProductContainer">
        <StyledNav to="/" exact activeClassName="active">
          Anasayfa
        </StyledNav>
        <span style={{ fontSize: "15px", color: "#CE2829" }}>
          - Sipariş Oluştur
        </span>
      </nav>
      <b>
        <p>{stateData.foodName !== undefined ? stateData.foodName : ""}</p>
      </b>
      <div className="productInfos">
        <div>
          <b>
            <p className="foodPrice" style={{ fontSize: "1.8rem" }}>
              {stateData.foodPrice}
            </p>
          </b>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6rem" }}>
          <p className="foodInfop">{stateData.foodPoint}</p>
          <p className="foodInfop">{"(" + stateData.foodCommentNo + ")"}</p>
        </div>
      </div>
      <p style={{ width: "97%", lineHeight: "1.8rem", color: " #5F5F5F" }}>
        {stateData.foodDescription}
      </p>
      <Forms price={productPrice} productNames={productName} />
    </div>
  );
}

export default ListProduct;
