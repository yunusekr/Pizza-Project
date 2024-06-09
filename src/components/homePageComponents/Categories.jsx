import React, { useState } from "react";
import { Button } from "reactstrap";

function Categories(props) {
  const findText = (e) => {
    if (e.target.tagName === "IMG") {
      props.setCategoryName(e.target.alt);
    } else {
      props.setCategoryName(e.target.textContent);
    }
  };
  return (
    <div>
      <div key={props.index} onClick={findText}>
        <Button
          style={{
            border: "none",
            color: "black",
            borderRadius: "3rem",
            width: "186px",
            height: "80px",
          }}
          outline
        >
          <img
            style={{ paddingRight: "20px" }}
            src={props.icons}
            alt={props.name}
            onClick={findText}
          />
          {props.name}
        </Button>
      </div>
    </div>
  );
}

export default Categories;
