import React from "react";
import { FaTwitter } from "react-icons/fa";
import logo from "../../Assets/mile2-aseets/footer/logo-footer.svg";
import icon1 from "../../Assets/mile2-aseets/footer/icons/icon-1.png";
import icon2 from "../../Assets/mile2-aseets/footer/icons/icon-2.png";
import icon3 from "../../Assets/mile2-aseets/footer/icons/icon-3.png";
import li0 from "../../Assets/mile2-aseets/footer/insta/li-0.png";
import li1 from "../../Assets/mile2-aseets/footer/insta/li-1.png";
import li2 from "../../Assets/mile2-aseets/footer/insta/li-2.png";
import li3 from "../../Assets/mile2-aseets/footer/insta/li-3.png";
import li4 from "../../Assets/mile2-aseets/footer/insta/li-4.png";
import li5 from "../../Assets/mile2-aseets/footer/insta/li-5.png";

import li6 from "../../Assets/mile2-aseets/icons/1.svg";
function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footer">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <address className="firstContainer">
            <img src={logo} />
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
                  src={icon1}
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
                  src={icon2}
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
                  src={icon3}
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
            <img src={li0} alt="yemek" />
            <img src={li2} alt="yemek" />
            <img src={li4} alt="yemek" />
            <img src={li1} alt="yemek" />

            <img src={li3} alt="yemek" />

            <img src={li5} alt="yemek" />
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
