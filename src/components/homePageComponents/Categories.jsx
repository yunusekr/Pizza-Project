import React from "react";
import { Button } from "reactstrap";

function Categories(props) {
  const deneme = (event) => {
    debugger;
  };

  return (
    <div>
      <div key={props.index}>
        <Button
          onClick={deneme}
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
          />
          {props.name}
        </Button>
      </div>
    </div>
  );
}

export default Categories;
