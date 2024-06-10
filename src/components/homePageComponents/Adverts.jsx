import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: 138px;
  height: 48px;
  border-radius: 2rem;
  color: red;
  background: white;
  border: none;
  margin-top: 0.5rem;

  &:hover {
    background-color: #5f5f5f;
  }
`;
import AdvertsSame from "./AdvertsSame";
import { useHistory } from "react-router-dom";
import { foods } from "../../veriler";

function Adverts() {
  let history = useHistory();

  function goOrderPage(event) {
    const filteredProduct = foods.find(
      (food) => food.foodName === event.target.previousSibling.textContent
    );
    history.push({ pathname: "/order", state: { filteredProduct } });
  }

  return (
    <section className="advertsContainer">
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="Assets/mile2-aseets/cta/kart-1.png"
          style={{
            width: 636,
            height: 535.75,
          }}
          width="100%"
        />
        <CardImgOverlay style={{ marginTop: "2rem", marginLeft: "2rem" }}>
          <CardTitle
            style={{
              fontSize: "60px",
              fontFamily: "quattrocento",
              fontWeight: "bold",
            }}
            tag="h1"
          >
            Özel <br />
            Lezzetus
          </CardTitle>
          <CardText>Position:Absolute Acı Pizza</CardText>
          <StyledButton onClick={goOrderPage} color="primary">
            SİPARİŞ VER
          </StyledButton>
        </CardImgOverlay>
      </Card>
      <div className="advertsSameContainer">
        <AdvertsSame
          firstText={"Hackathlon"}
          secondText={"Burger Menü"}
          imgUrl={"Assets/mile2-aseets/cta/kart-2.png"}
        />
        <AdvertsSame
          firstText={"hızlı"}
          secondText={"npm gibi kurye"}
          imgUrl={"Assets/mile2-aseets/cta/kart-3.png"}
        />
      </div>
    </section>
  );
}

export default Adverts;
