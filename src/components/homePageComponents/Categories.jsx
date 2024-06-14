import React, { useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  border: none;
  border-radius: 3rem;
  color: black;
  width: 186px;
  height: 80px;

  &:hover {
    background-color: #292929;
  }
`;

function Categories(props) {
  const findText = (e) => {
    if (e.target.tagName === "IMG") {
      props.setCategoryName(e.target.alt);
    } else {
      props.setCategoryName(e.target.textContent);
    }
  };
  return (
    <section>
      <div key={props.index} onClick={findText}>
        <StyledButton outline>
          <img
            style={{ paddingRight: "20px" }}
            src={props.icons}
            alt={props.name}
            onClick={findText}
          />
          {props.name}
        </StyledButton>
      </div>
    </section>
  );
}

export default Categories;
