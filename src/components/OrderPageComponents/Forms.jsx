import React from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, FormText, Label, Input, Button } from "reactstrap";
import styled from "styled-components";
import { AddingMaterials } from "../../veriler";

const StyledInput = styled(Input)`
  border: 1px solid #ce2829;
`;

function Forms() {
  let history = useHistory();
  const asd = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <Form onSubmit={asd}>
      <FormGroup
        style={{ display: "flex", flexDirection: "column" }}
        tag="fieldset"
      >
        <div style={{ display: "flex", gap: "10rem" }}>
          <div>
            <legend>
              Boyut Seç<span style={{ color: "red" }}>*</span>
            </legend>
            <div style={{ display: "flex", gap: "2rem" }}>
              <FormGroup check>
                <StyledInput name="radio1" type="radio" />
                <Label check>S</Label>
              </FormGroup>
              <FormGroup check>
                <StyledInput name="radio1" type="radio" />{" "}
                <Label check>M</Label>
              </FormGroup>
              <FormGroup check>
                <StyledInput name="radio1" type="radio" />{" "}
                <Label check>L</Label>
              </FormGroup>
            </div>
          </div>
          <div>
            <FormGroup>
              <Label style={{ fontSize: "24px" }} for="exampleSelect">
                Hamur Seç<span style={{ color: "red" }}>*</span>
              </Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>-Hamur Kalınlığı Seç</option>
                <option>İnce</option>
                <option>Orta</option>
                <option>Kalın</option>
              </Input>
            </FormGroup>
          </div>
        </div>
        <div
          style={{ height: "300px", display: "flex", flexDirection: "column" }}
        >
          <Label style={{ fontSize: "24px" }}>Ek Malzemeler</Label>
          <Input type="checkbox" /> <Label check>Check me out</Label>
        </div>
      </FormGroup>
      <FormGroup check>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
        </FormGroup>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input id="exampleText" name="text" type="textarea" />
      </FormGroup>

      <Button onClick={asd}>Submit</Button>
    </Form>
  );
}

export default Forms;
