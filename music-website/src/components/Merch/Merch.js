import React, { useState } from "react";
import "./Merch.css";
import ItemCard from "../ItemCard/ItemCard";
import ItemData from "../../data/shop-items.json";

export default function Merch() {
  const [cardList, setSelectedCard] = useState(ItemData);
  return (
    <div className="card-flex">
      <section className="card-flex-item">
        {cardList.map((card) => {
          return (
            <ItemCard
              name={card.title}
              key={card.title}
              description={card.description}
              price={card.price}
              image={card.image}
            />
          );
        })}
      </section>
    </div>
  );
}
