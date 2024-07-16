import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const StyledButton = styled(Button)`
  width: 193.27px;
  height: 56px;
  border-radius: 2rem;
`;

function Header() {
  return (
    <header>
      <figure className="headerDiv">
        <img src="https://resmim.net/cdn/2024/07/16/WHChHy.png"></img>
        <p className="captionSlogan1 forPadding">fırsatı kaçırma</p>
        <h2 className="captionSlogan2">
          KOD ACIKTIRIR <br /> PIZZA, DOYURUR
        </h2>
        <StyledButton color="warning">ACIKTIM</StyledButton>
      </figure>
    </header>
  );
}

export default Header;
