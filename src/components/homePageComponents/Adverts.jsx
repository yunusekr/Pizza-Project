import React, { useEffect, useState } from "react";
import photo from "../../../Assets/mile2-aseets/cta/kart-1.png";
import photo1 from "../../../Assets/mile2-aseets/cta/kart-2.png";
import photo2 from "../../../Assets/mile2-aseets/cta/kart-3.png";

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

const StyledCardTitle = styled(CardTitle)`
  font-size: 4vw;
  font-family: quattrocento;
  font-weight: bold;
`;

const StyledCardImgOverlay = styled(CardImgOverlay)`
  margin-top: 2rem;
  margin-left: 2rem;
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
    window.scrollTo(0, 0);
    history.push({ pathname: "/order", state: { filteredProduct } });
  }

  return (
    <section className="advertsContainer">
      <Card inverse>
        <CardImg alt="Card image cap" src={photo} width="100%" />
        <StyledCardImgOverlay>
          <StyledCardTitle tag="h1">
            Özel <br />
            Lezzetus
          </StyledCardTitle>
          <CardText style={{ fontFamily: "barlow" }}>
            Position:Absolute Acı Pizza
          </CardText>
          <StyledButton onClick={goOrderPage} color="primary">
            SİPARİŞ VER
          </StyledButton>
        </StyledCardImgOverlay>
      </Card>
      <div className="advertsSameContainer">
        <AdvertsSame
          firstText={"Hackathlon"}
          secondText={"Burger Menü"}
          imgUrl={photo1}
        />
        <AdvertsSame
          firstText={"hızlı"}
          secondText={"npm gibi kurye"}
          imgUrl={photo2}
        />
      </div>
    </section>
  );
}

export default Adverts;
