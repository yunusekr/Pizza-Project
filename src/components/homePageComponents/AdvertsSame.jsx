import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
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
              fontFamily: "quattrocento",
              fontWeight: "bold",
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
          <Button
            style={{
              width: "138px",
              height: "48px",
              borderRadius: "2rem",
              color: "red",
              background: "white",
              border: "none",
              marginTop: "1rem",
            }}
            color="primary"
          >
            SİPARİŞ VER
          </Button>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

export default AdvertsSame;
