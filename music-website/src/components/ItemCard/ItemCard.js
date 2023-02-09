import * as React from "react";
import "./ItemCard.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

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
          p: 2,
          border: 1,
          borderColor: "text.primary",
        }}
        className="item-card"
      >
        <CardHeader
          title={props.name}
          subheader={props.description}
          className="item-title"
        />
        <div className="item-image-wrap">
          <Box className="item-image-container">
            <CardMedia
              component="img"
              height="250"
              width="250"
              src={process.env.PUBLIC_URL + props.image}
              alt="Cover of CD - black and white distorted live gig image"
              className="item-image"
              objectFit="contain"
            />
          </Box>
        </div>
        <CardContent>
          <Typography
            variant="h5"
            color="text.secondary"
            className="item-price"
          >
            £{props.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className="card-footer">
          <Button color="secondary" variant="outlined">
            Add To Basket
            <IconButton aria-label="Add To Basket" className="add-icon">
              <AddShoppingCartIcon />
            </IconButton>
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
