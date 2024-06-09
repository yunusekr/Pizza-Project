import React from "react";
import Header from "./components/homePageComponents/Header";
import Categories from "./components/homePageComponents/Categories";
import Adverts from "./components/homePageComponents/Adverts";

function HomePage() {
  return (
    <>
      <Header />
      <Categories />
      <Adverts />
    </>
  );
}

export default HomePage;
