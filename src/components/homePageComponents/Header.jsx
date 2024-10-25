import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import logo from "../../../Assets/mile1-assets/logo.svg";

const StyledButton = styled(Button)`
  width: 193.27px;
  height: 56px;
  border-radius: 2rem;
`;

function Header() {
  return (
    <header>
      <figure className="headerDiv">
        <img src={logo}></img>
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
