import React, { useEffect, useState } from "react";
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

import axios from "axios";

const StyledInput = styled(Input)`
  border: 1px solid #ce2829;
`;

function Forms(props) {
  let history = useHistory();

  const [isHamurSelected, setIsHamurSelected] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(false);

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

  const handleHamurChange = (event) => {
    setIsHamurSelected(event.target.value !== "-Hamur Kalınlığı Seç");
  };

  const handleSizeChange = (event) => {
    setIsSizeSelected(event.target.value !== "");
  };

  const [counter, setCounter] = useState(1);

  const increase = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
  };

  const decrease = (event) => {
    event.preventDefault();
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const addings = selectedMaterials.length * 5 * counter;

  const totalPrice =
    Number(props.price.slice(0, props.price.length - 1)) * counter + addings;

  const onSubmit = (data, event) => {
    if (!isHamurSelected || !isSizeSelected) {
      return;
    }
    axios
      .post("https://reqres.in/api/pizza", data)
      .then((response) => {
        history.push({
          pathname: "/accepted",
          state: {
            responseData: response.data,
            secimler: addings,
            toplam: totalPrice,
            productName: props.productNames,
          },
        });
      })
      .catch(() => {
        console.log("İnternet'e bağlanılamadı");
      });
  };

  return (
    <>
      <form className="formContainer">
        <fieldset style={{ display: "flex", flexDirection: "column" }}>
          <div className="sizeAndThick">
            <div>
              <legend>
                Boyut Seç<span style={{ color: "red" }}>*</span>
              </legend>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="radio"
                  value="S"
                  {...register("boyut")}
                  onChange={handleSizeChange}
                />
                <label>S</label>
                <input
                  type="radio"
                  value="M"
                  {...register("boyut")}
                  onChange={handleSizeChange}
                />{" "}
                <label>M</label>
                <input
                  type="radio"
                  value="L"
                  {...register("boyut")}
                  onChange={handleSizeChange}
                />{" "}
                <label>L</label>
              </div>
              <label style={{ color: "red" }}>
                {!isSizeSelected && "Boyut seçmelisin"}
              </label>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "24px" }} htmlFor="exampleSelect">
                  Hamur Seç<span style={{ color: "red" }}>*</span>
                </label>
                <select
                  style={{ border: "none" }}
                  id="exampleSelect"
                  name="hamur"
                  {...register("hamur")}
                  onChange={handleHamurChange}
                >
                  <option>-Hamur Kalınlığı Seç</option>
                  <option>İnce</option>
                  <option>Orta</option>
                  <option>Kalın</option>
                </select>
                {!isHamurSelected && (
                  <span style={{ color: "red" }}>
                    Hamur kalınlığı seçmelisin
                  </span>
                )}
              </div>
            </div>
          </div>
          <label style={{ fontSize: "24px", marginTop: "3rem" }}>
            Ek Malzemeler
          </label>
          {selectedMaterials.length > 10 && (
            <span style={{ color: "#5F5F5F" }}>
              En fazla 10 tane malzeme seçebilirsiniz.5₺
            </span>
          )}
          <aside className="formCheckboxes">
            {/*1.checkbox grubu*/}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              {AddingMaterials.map((items, index) => (
                <div className="checkboxesGroups" key={index}>
                  <input
                    className="checkboxInputs"
                    type="checkbox"
                    {...register("materials")}
                    value={items.name}
                    checked={
                      selectedMaterials.indexOf(items.name) >= 10 ||
                      selectedMaterials.indexOf(items.name) == -1
                        ? false
                        : true
                    }
                  />{" "}
                  <label>{items.name}</label>
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
                <div className="checkboxesGroups" key={index}>
                  <input
                    className="checkboxInputs"
                    type="checkbox"
                    {...register("materials")}
                    value={items.name}
                    checked={
                      selectedMaterials.indexOf(items.name) >= 10 ||
                      selectedMaterials.indexOf(items.name) == -1
                        ? false
                        : true
                    }
                  />{" "}
                  <label>{items.name}</label>
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
                <div className="checkboxesGroups" key={index}>
                  <input
                    className="checkboxInputs"
                    type="checkbox"
                    {...register("materials")}
                    value={items.name}
                    checked={
                      selectedMaterials.indexOf(items.name) >= 10 ||
                      selectedMaterials.indexOf(items.name) == -1
                        ? false
                        : true
                    }
                  />{" "}
                  <label>{items.name}</label>
                </div>
              ))}
            </div>
          </aside>
        </fieldset>
        <div style={{ paddingLeft: "0" }}>
          <div>
            <label htmlFor="Name">İsim</label>
          </div>
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
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="orderNote">Sipariş Notu</label>
          <input
            style={{ border: "none" }}
            id="orderNote"
            type="textarea"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            {...register("orderNote")}
          />
        </div>

        <section className="formSubContainer">
          <hr />
          <div className="formSubElements">
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <button onClick={decrease}>-</button>
              <span style={{ marginTop: "16px" }}>{counter}</span>
              <button onClick={increase}>+</button>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
            >
              <h6>Sipariş Toplamı</h6>

              <div className="formSubElements">
                <p style={{ color: " #5F5F5F" }}>Seçimler</p>
                <p style={{ color: " #5F5F5F" }}>{addings + "₺"}</p>
              </div>
              <div className="formSubElements">
                <p style={{ color: "#CE2829" }}>Toplam</p>
                <p style={{ color: "#CE2829" }}>{totalPrice + "₺"}</p>
              </div>
              <div className="OrderButton">
                <Button
                  onClick={handleSubmit(onSubmit)}
                  style={{ width: "386px", height: "62px" }}
                  color="warning"
                >
                  SİPARİŞ VER
                </Button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default Forms;
