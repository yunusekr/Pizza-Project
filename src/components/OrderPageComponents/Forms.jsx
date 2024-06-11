import React from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, FormText, Label, Input, Button } from "reactstrap";
import styled from "styled-components";
import {
  AddingMaterials,
  AddingMaterials2,
  AddingMaterials3,
} from "../../veriler";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { VscNoNewline } from "react-icons/vsc";

const StyledInput = styled(Input)`
  border: 1px solid #ce2829;
`;

function Forms() {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      materials: [],
    },
  });
  const selectedMaterials = watch("materials");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <FormGroup
          style={{ display: "flex", flexDirection: "column" }}
          tag="fieldset"
        >
          <div style={{ display: "flex", gap: "10rem", marginTop: "1rem" }}>
            <div>
              <legend>
                Boyut Seç<span style={{ color: "red" }}>*</span>
              </legend>
              <div style={{ display: "flex" }}>
                <FormGroup check>
                  <input type="radio" value="S" {...register("boyut")} />
                  <Label check>S</Label>
                </FormGroup>
                <FormGroup check>
                  <input type="radio" value="M" {...register("boyut")} />{" "}
                  <Label check>M</Label>
                </FormGroup>
                <FormGroup check>
                  <input type="radio" value="L" {...register("boyut")} />{" "}
                  <Label check>L</Label>
                </FormGroup>
              </div>
            </div>
            <div>
              <FormGroup style={{ display: "flex", flexDirection: "column" }}>
                <Label style={{ fontSize: "24px" }} for="exampleSelect">
                  Hamur Seç<span style={{ color: "red" }}>*</span>
                </Label>
                <select
                  style={{ border: "none" }}
                  id="exampleSelect"
                  name="select"
                  {...register("select")}
                >
                  <option>-Hamur Kalınlığı Seç</option>
                  <option>İnce</option>
                  <option>Orta</option>
                  <option>Kalın</option>
                </select>
              </FormGroup>
            </div>
          </div>
          <Label style={{ fontSize: "24px", marginTop: "3rem" }}>
            Ek Malzemeler
          </Label>
          {selectedMaterials.length > 10 && (
            <span style={{ color: "#5F5F5F" }}>
              En fazla 10 tane malzeme seçebilirsiniz.5₺
            </span>
          )}
          <aside
            style={{
              height: "300px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/*1.checkbox grubu*/}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              {AddingMaterials.map((items, index) => (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  key={index}
                >
                  <input
                    style={{
                      width: "45px",
                      height: "45px",
                      border: "none",
                    }}
                    type="checkbox"
                    {...register("materials")}
                    value={items.name}
                  />{" "}
                  <Label check>{items.name}</Label>
                </div>
              ))}
            </div>

            {/*2.checkbox grubu*/}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              {AddingMaterials2.map((items, index) => (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  key={index}
                >
                  <input
                    style={{ width: "45px", height: "45px" }}
                    type="checkbox"
                    {...register("materials")}
                    value={items.name}
                  />{" "}
                  <Label check>{items.name}</Label>
                </div>
              ))}
            </div>

            {/*3.checkbox grubu*/}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              {AddingMaterials3.map((items, index) => (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  key={index}
                >
                  <input
                    style={{ width: "45px", height: "45px" }}
                    type="checkbox"
                    {...register("materials")}
                    value={items.name}
                  />{" "}
                  <Label check>{items.name}</Label>
                </div>
              ))}
            </div>
          </aside>
        </FormGroup>
        <FormGroup style={{ paddingLeft: "0" }} check>
          <FormGroup>
            <Label htmlFor="Name">İsim</Label>
          </FormGroup>
          <input
            style={{ border: "none" }}
            id="Name"
            type="text"
            placeholder="İsminizi giriniz"
            {...register("name", {
              minLength: {
                value: 3,
                message: "İsim alanı en az 3 karakter olmalıdır",
              },
            })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </FormGroup>
        <FormGroup style={{ display: "flex", flexDirection: "column" }}>
          <Label for="orderNote">Sipariş Notu</Label>
          <input
            style={{ border: "none" }}
            id="orderNote"
            type="textarea"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            {...register("orderNote")}
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </>
  );
}

export default Forms;
