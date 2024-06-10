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

    history.push({ pathname: "/order", state: { filteredProduct } });
  }

  return (
    <div onClick={goOrderPage} className="foodCardsContainer" key={props.index}>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img
          style={{ width: "306px", height: "306px" }}
          alt="Card"
          src={props.foodObj.foodImg}
        />
        <CardBody>
          <CardTitle tag="h6">{props.foodObj.foodName}</CardTitle>
          <div className="foodInfo">
            <p className="foodInfop">{props.foodObj.foodPoint}</p>
            <p className="foodInfop">
              {"(" + props.foodObj.foodCommentNo + ")"}
            </p>
            <b>
              <p>{props.foodObj.foodPrice}</p>
            </b>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default FoodCards;
