import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function CompletePage() {
  const location = useLocation();
  const stateData = location.state?.responseData;
  const addings = location.state?.secimler;
  const total = location.state?.toplam;
  const productName = location.state?.productName;
  console.log(stateData);
  return (
    <output className="order-completed-page ">
      <main className="topInfo">
        <div style={{ paddingBottom: "4rem" }}>
          <img src="https://resmim.net/cdn/2024/07/16/WHCnA6.png" alt="" />
        </div>
        <p
          className="captionSlogan1"
          style={{ color: "yellow", paddingBottom: "1rem" }}
        >
          lezzetin yolda
        </p>
        <p className="Siparis">SİPARİŞ ALINDI</p>
        <hr style={{ color: "#FAF7F2", width: "100%" }} />
      </main>

      <p class="productName">{productName}</p>
      <dl>
        <span>
          Boyut:{" "}
          <span style={{ fontWeight: "700" }}> {" " + stateData.boyut}</span>
        </span>
        <span>
          Hamur:{" "}
          <span style={{ fontWeight: "700" }}>{" " + stateData.hamur}</span>
        </span>
        <span>
          Ek Malzemeler:
          {stateData.materials.map((items, index) => (
            <span style={{ fontWeight: "700" }} key={index}>
              {" " + items + ","}
            </span>
          ))}
        </span>
      </dl>
      <section className="totalSection">
        <p style={{ fontSize: "20px" }}>Sipariş Toplamı</p>
        <div style={{ display: "flex", gap: "3.9rem" }}>
          <span>Seçimler</span>
          <span>{addings + "₺"}</span>
        </div>
        <div style={{ display: "flex", gap: "4.5rem" }}>
          <span>Toplam</span>
          <span>{total + "₺"}</span>
        </div>
      </section>
    </output>
  );
}

export default CompletePage;
