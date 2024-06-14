import React from "react";
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
  margin-top: 1rem;

  &:hover {
    background-color: #5f5f5f;
  }
`;

const StyledCardImgOverlay = styled(CardImgOverlay)`
  margin-top: 2rem;
  margin-left: 2rem;
`;

const StyledCardTitle = styled(CardTitle)`
  font-size: 2vw;
  font-family: barlow;
  font-weight: 600px;
`;

function AdvertsSame(props) {
  return (
    <div>
      <Card inverse>
        <CardImg alt="Card image cap" src={props.imgUrl} width="100%" />
        <StyledCardImgOverlay>
          <StyledCardTitle
            style={{
              color: props.firstText === "hızlı" ? "black" : "white",
            }}
            tag="h1"
          >
            <span
              style={{
                color: props.firstText === "hızlı" ? "red" : "transparent",
                display: props.firstText === "hızlı" ? "contents" : "none",
              }}
            >
              Çoooook
            </span>
            {" " + props.firstText}
            <br />
            {props.secondText}
          </StyledCardTitle>
          <StyledButton color="primary">SİPARİŞ VER</StyledButton>
        </StyledCardImgOverlay>
      </Card>
    </div>
  );
}

export default AdvertsSame;
