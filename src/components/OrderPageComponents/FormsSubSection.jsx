import React, { useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

function FormsSubSection(props) {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const addings = props.addedMaterials.length * 5 * counter;

  const totalPrice =
    Number(props.productsPrices.slice(0, props.productsPrices.length - 1)) *
      counter +
    addings;

  return (
    <section className="formSubContainer">
      <hr />
      <div className="formSubElements">
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <button onClick={decrease}>-</button>
          <span style={{ marginTop: "16px" }}>{counter}</span>
          <button onClick={increase}>+</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h6>Sipariş Toplamı</h6>
          <div className="elements">
            <p style={{ color: " #5F5F5F" }}>Seçimler</p>
            <p style={{ color: " #5F5F5F" }}>{addings + "₺"}</p>
          </div>
          <div className="elements">
            <p style={{ color: "#CE2829" }}>Toplam</p>
            <p style={{ color: "#CE2829" }}>{totalPrice + "₺"}</p>
          </div>
          <Button style={{ width: "386px", height: "62px" }} color="warning">
            SİPARİŞ VER
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FormsSubSection;
