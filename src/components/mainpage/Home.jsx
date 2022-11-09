import React from "react";
import Categories from "./Category";
import "./Home.css";
import SliderHome from "./Slider";
import HotDeals from "../deals/HotDeals";
import ShoppingCart from "../shoppingcart/ShoppingCart";

const Home = ({products,cartItems,onAdd,onRemove}) => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <SliderHome />
          <ShoppingCart onAdd={onAdd} onRemove={onRemove}cartItems={cartItems} />
        </div>
      </section>
    </>
  );
};

export default Home;
