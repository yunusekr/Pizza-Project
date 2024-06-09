import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import AdvertsSame from "./AdvertsSame";
function Adverts() {
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
          <CardText>Position:Absolute Acı Burger</CardText>
          <Button
            style={{
              width: "138px",
              height: "48px",
              borderRadius: "2rem",
              color: "red",
              background: "white",
              border: "none",
              marginTop: "0.5rem",
            }}
            color="primary"
          >
            SİPARİŞ VER
          </Button>
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
