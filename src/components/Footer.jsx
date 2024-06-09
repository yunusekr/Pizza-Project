import React from "react";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footer">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="firstContainer">
            <img src="Assets/mile2-aseets/footer/logo-footer.svg" />
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
                  src="Assets/mile2-aseets/footer/icons/icon-1.png"
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
                  src="Assets/mile2-aseets/footer/icons/icon-2.png"
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
                  src="Assets/mile2-aseets/footer/icons/icon-3.png"
                  alt="Mail"
                />
                <p>+90 216 123 45 67</p>
              </li>
            </ul>
          </div>
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
            <img src="Assets/mile2-aseets/footer/insta/li-0.png" alt="yemek" />
            <img src="Assets/mile2-aseets/footer/insta/li-2.png" alt="yemek" />
            <img src="Assets/mile2-aseets/footer/insta/li-4.png" alt="yemek" />
            <img src="Assets/mile2-aseets/footer/insta/li-1.png" alt="yemek" />

            <img src="Assets/mile2-aseets/footer/insta/li-3.png" alt="yemek" />

            <img src="Assets/mile2-aseets/footer/insta/li-5.png" alt="yemek" />
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
