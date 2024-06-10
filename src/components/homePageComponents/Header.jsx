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
      <div className="headerDiv">
        <img src="Assets/mile1-assets/logo.svg"></img>
        <p
          className="captionSlogan1"
          style={{ color: "yellow", paddingTop: "40px" }}
        >
          fırsatı kaçırma
        </p>

        <p className="captionSlogan2">KOD ACIKTIRIR</p>
        <p className="captionSlogan2">PIZZA, DOYURUR</p>
        <StyledButton color="warning">ACIKTIM</StyledButton>
      </div>
    </header>
  );
}

export default Header;
