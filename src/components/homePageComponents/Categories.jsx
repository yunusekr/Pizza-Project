import React from "react";
import { Button } from "reactstrap";
import { kategoriler } from "../../veriler";
function Categories() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "4rem",
        marginTop: "2rem",
      }}
    >
      {kategoriler.map((items, index) => (
        <div key={index}>
          <Button style={{ border: "none", color: "black" }} outline>
            <img
              style={{ paddingRight: "20px" }}
              src={items.icons}
              alt={items.name}
            />
            {items.name}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Categories;
