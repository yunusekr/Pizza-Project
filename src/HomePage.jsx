import React from "react";
import Header from "./components/homePageComponents/Header";
import Categories from "./components/homePageComponents/Categories";
import Adverts from "./components/homePageComponents/Adverts";
import Menu from "./components/homePageComponents/Menu";
import { kategoriler } from "./veriler";

function HomePage() {
  return (
    <>
      <Header />
      <div className="categoryContainer">
        {kategoriler.map((items, index) => (
          <Categories key={index} name={items.name} icons={items.icons} />
        ))}
      </div>
      <Adverts />
      <Menu />
    </>
  );
}
/*

  
  */
export default HomePage;
