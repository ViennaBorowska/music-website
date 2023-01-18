import * as React from "react";
import "./ItemCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { borderColor } from "@mui/system";

//MUI Custom Theme
const theme = createTheme({
  palette: {
    background: {
      paper: "#00000",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#8c52ff",
    },
    action: {
      active: "#916ED6",
    },
  },
});

export default function ItemCard(props) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          maxWidth: 350,
          p: 2,
          border: 1,
          borderColor: "text.primary",
        }}
        className="item-card"
      >
        <CardHeader
          title={props.title}
          subheader={props.description}
          className="item-title"
        />
        <CardMedia
          component="img"
          height="250"
          image={process.env.PUBLIC_URL + props.image}
          alt="Cover of CD - black and white distorted live gig image"
          className="item-image"
          sx={{ bgsize: "contain" }}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            className="item-price"
          >
            {props.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <i>Add To Basket</i>
          <IconButton aria-label="Add To Basket" className="add-icon">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
