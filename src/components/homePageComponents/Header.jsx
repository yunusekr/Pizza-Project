import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

function Header() {
  return (
    <header>
      <div className="headerDiv">
        <h1>Teknolojik Yemekler</h1>
        <p
          className="captionSlogan1"
          style={{ color: "yellow", paddingTop: "40px" }}
        >
          fırsatı kaçırma
        </p>

        <p className="captionSlogan2">KOD ACIKTIRIR</p>
        <p className="captionSlogan2">PIZZA, DOYURUR</p>
        <Button
          style={{ width: "193.27px", height: "56px", borderRadius: "2rem" }}
          color="warning"
        >
          ACIKTIM
        </Button>
      </div>
    </header>
  );
}

export default Header;
