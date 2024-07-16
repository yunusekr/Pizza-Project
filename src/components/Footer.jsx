import React from "react";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footer">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <address className="firstContainer">
            <img src="https://resmim.net/cdn/2024/07/16/WHEMr1.png" />
            <ul>
              <li
                style={{
                  width: "306px",
                  height: "64.78",
                  display: "flex",
                  fontSize: "15px",
                }}
              >
                <img
                  src="https://resmim.net/cdn/2024/07/16/WHwT6W.png"
                  alt="Konum"
                  style={{ width: "28px", height: "28px" }}
                />
                <p>
                  341 Londonderry Road ,<br />
                  Istanbul Turkiye
                </p>
              </li>
              <li
                style={{
                  width: "306px",
                  height: "64.78",
                  display: "flex",
                  fontSize: "15px",
                }}
              >
                <img
                  style={{ width: "28px", height: "28px" }}
                  src="https://resmim.net/cdn/2024/07/16/WHwC7M.png"
                  alt="Mail"
                />
                <p>aciktim@teknolojikyemekler.com</p>
              </li>
              <li
                style={{
                  width: "306px",
                  height: "64.78",
                  display: "flex",
                  fontSize: "15px",
                }}
              >
                <img
                  style={{ width: "28px", height: "28px" }}
                  src="https://resmim.net/cdn/2024/07/16/WHwEcQ.png"
                  alt="Mail"
                />
                <p>+90 216 123 45 67</p>
              </li>
            </ul>
          </address>
          <div className="secondContainer">
            <h5>Sıccacık Menuler</h5>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>
        </div>
        <div className="thirdContainer">
          <h5>Instagram</h5>
          <div className="instaPhotos">
            <img
              src="https://resmim.net/cdn/2024/07/16/WHw8Yc.png"
              alt="yemek"
            />
            <img
              src="https://resmim.net/cdn/2024/07/16/WHwRm6.png"
              alt="yemek"
            />
            <img
              src="https://resmim.net/cdn/2024/07/16/WHwsb8.png"
              alt="yemek"
            />
            <img
              src="https://resmim.net/cdn/2024/07/16/WHwIbL.png"
              alt="yemek"
            />

            <img
              src="https://resmim.net/cdn/2024/07/16/WHw9tK.png"
              alt="yemek"
            />

            <img
              src="https://resmim.net/cdn/2024/07/16/WHwcCQ.png"
              alt="yemek"
            />
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "0" }}></hr>
      <div className="copyRight">
        <p>© 2023 Teknolojik Yemekler</p>
        <FaTwitter />
      </div>
    </footer>
  );
}

export default Footer;
