import React from "react";
import Categories from "./Categories";
import { kategoriler } from "../../veriler";

function Menu() {
  return (
    <section className="MenuContainer">
      <div>
        <p className="captionSlogan1" style={{ color: "red" }}>
          en çok paketlenen menüler
        </p>
      </div>
      <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
      <div className="categoryContainer">
        {kategoriler.map((items, index) => (
          <Categories
            key={index}
            name={items.englishName}
            icons={items.icons}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
