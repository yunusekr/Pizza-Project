import React, { useEffect, useState } from "react";
import { foods, kategoriler } from "../../veriler";
import Categories from "./Categories";
import FoodCards from "./FoodCards";

function Foods() {
  const [categoryName, setCategoryName] = useState("");

  const firstValues = foods.filter((food) => food.foodCategory === "Ramen");

  const [filteredFoods, setFiltered] = useState(firstValues);

  useEffect(() => {
    if (categoryName !== "") {
      const filteredFoods = foods.filter(
        (food) => food.foodCategory === categoryName
      );
      setFiltered(filteredFoods);
    }
  }, [categoryName]);

  return (
    <>
      <div className="categoryContainer">
        {kategoriler.map((items, index) => (
          <Categories
            key={index}
            name={items.englishName}
            icons={items.icons}
            setCategoryName={setCategoryName}
          />
        ))}
      </div>

      <div className="cardsContains">
        {filteredFoods.map((items, index) => (
          <FoodCards key={index} foodObj={items} />
        ))}
      </div>
    </>
  );
}

export default Foods;
