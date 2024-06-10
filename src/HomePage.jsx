import React from "react";
import Header from "../src/components/homePageComponents/Header";
import Categories from "../src/components/homePageComponents/Categories";
import Adverts from "../src/components/homePageComponents/Adverts";
import Menu from "../src/components/homePageComponents/Menu";
import { kategoriler } from "../src/veriler";
import Foods from "../src/components/homePageComponents/Foods";
import Footer from "./components/Footer";

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
      <Foods />
      <Footer />
    </>
  );
}
/*

  
  */
export default HomePage;
