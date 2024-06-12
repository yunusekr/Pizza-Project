import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function CompletePage() {
  const location = useLocation();
  const stateData = location.state?.responseData;
  const addings = location.state?.secimler;
  const total = location.state?.toplam;
  const productName = location.state?.productName;

  return (
    <section className="order-completed-page ">
      <div>
        <img src="Assets/mile1-assets/logo.svg" alt="" />
        <div>
          <p className="captionSlogan1" style={{ color: "yellow" }}>
            lezzetin yolda
          </p>
          <p className="Siparis">SİPARİŞ ALINDI</p>
        </div>
        <hr style={{ color: "white" }} />
      </div>
      <div
        style={{
          width: "201px",
          height: "153px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <p>{productName}</p>
        <span>
          Boyut: <span> {" " + stateData.boyut}</span>
        </span>
        <span>
          Hamur: <span>{" " + stateData.hamur}</span>
        </span>
        <span>
          Ek Malzemeler:
          {stateData.materials.map((items, index) => (
            <span key={index}>{" " + items + ","}</span>
          ))}
        </span>
      </div>
      <div
        style={{
          width: "288px",
          height: "191px",
          display: "flex",
          flexDirection: "column",
          border: "1px solid white",
          justifyContent: "center",
          paddingLeft: "45px",
          borderRadius: "0.3rem",
        }}
      >
        <p>Sipariş Toplamı</p>
        <div style={{ display: "flex", gap: "6rem" }}>
          <span>Seçimler</span>
          <span>{addings + "₺"}</span>
        </div>
        <div style={{ display: "flex", gap: "6rem" }}>
          <span>Toplam</span>
          <span>{total + "₺"}</span>
        </div>
      </div>
    </section>
  );
}

export default CompletePage;
