import React, { useState } from "react";
import { CardActionArea, Grid } from "@mui/material";
import "./Merch.css";
import ItemCard from "../ItemCard/ItemCard";
import ItemData from "../../data/shop-items.json";

export default function Merch() {
  const [cardList, setSelectedCard] = useState(ItemData);
  return (
    <div className="card-flex">
      <Grid container spacing={3} className="card-flex-container">
        {cardList.map((card) => {
          return (
            <Grid item xs={12} sm={6} className="card-flex-item">
              <ItemCard
                name={card.name}
                key={card.name}
                description={card.description}
                price={card.price}
                image={card.image}
              />
            </Grid>
          );
        })}
      </Grid>
      <div className="btt-holder">
        <CardActionArea>
          <a className="back-to-top" href="#">
            Back To Top
          </a>
        </CardActionArea>
      </div>
    </div>
  );
}
