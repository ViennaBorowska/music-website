import * as React from "react";
import "./ItemCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ItemCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={props.title} subheader={props.description} />
      <CardMedia
        component="img"
        height="194"
        image={process.env.PUBLIC_URL + props.image}
        alt="Cover of CD - black and white distorted live gig image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add To Basket">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
