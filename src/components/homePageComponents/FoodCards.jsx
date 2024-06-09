import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  CardLink,
  CardText,
} from "reactstrap";
function FoodCards(props) {
  return (
    <div className="foodCardsContainer" key={props.index}>
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
