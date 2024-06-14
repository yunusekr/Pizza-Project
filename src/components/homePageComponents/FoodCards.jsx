import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  CardLink,
  CardText,
} from "reactstrap";
import { foods } from "../../veriler";
import styled from "styled-components";

function FoodCards(props) {
  let history = useHistory();

  function getSubstringUntilFirstNumber(string) {
    let regex = /^[^\d]+(?=\d)/;
    let match = string.match(regex);
    if (match) {
      return match[0];
    } else {
      return null;
    }
  }

  function goOrderPage(event) {
    const productName = getSubstringUntilFirstNumber(
      event.currentTarget.textContent
    );

    const filteredProduct = foods.find((food) => food.foodName === productName);
    window.scrollTo(0, 0);
    history.push({ pathname: "/order", state: { filteredProduct } });
  }

  const StyledCardBody = styled(CardBody)`
    font-family: barlow;
    font-weight: 600px;
  `;

  return (
    <figure
      onClick={goOrderPage}
      className="foodCardsContainer"
      key={props.index}
    >
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Card" src={props.foodObj.foodImg} />
        <StyledCardBody>
          <CardTitle tag="h6">{props.foodObj.foodName}</CardTitle>
          <div className="foodInfo">
            <p className="foodInfop">{props.foodObj.foodPoint}</p>
            <p className="foodInfop">
              {"(" + props.foodObj.foodCommentNo + ")"}
            </p>
            <b>
              <p style={{ color: "#292929" }}>{props.foodObj.foodPrice}</p>
            </b>
          </div>
        </StyledCardBody>
      </Card>
    </figure>
  );
}

export default FoodCards;
