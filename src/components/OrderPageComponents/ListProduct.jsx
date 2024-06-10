import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
const StyledNav = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  color: #5f5f5f;
`;

function ListProduct() {
  const location = useLocation();
  const stateData = location.state?.filteredProduct;
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
        <p>{stateData.foodName}</p>
      </b>
      <div className="productInfos">
        <b>
          <p>{stateData.foodPrice}</p>
        </b>
        <p>{stateData.foodPoint}</p>
        <p>{"(" + stateData.foodCommentNo + ")"}</p>
      </div>
    </div>
  );
}

export default ListProduct;
