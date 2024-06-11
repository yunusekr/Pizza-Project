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

function AdvertsSame(props) {
  return (
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src={props.imgUrl}
          style={{
            width: 636,
            height: 255.53,
          }}
          width="100%"
        />
        <CardImgOverlay style={{ marginTop: "2rem", marginLeft: "2rem" }}>
          <CardTitle
            style={{
              fontSize: "30px",
              fontFamily: "barlow",
              fontWeight: "600px",
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
          </CardTitle>
          <StyledButton color="primary">SİPARİŞ VER</StyledButton>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

export default AdvertsSame;
