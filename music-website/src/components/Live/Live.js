import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Live.css";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import GigCard from "../GigCard/GigCard";
import GigData from "../../data/gig-list.json";
// function generate(element: React.ReactElement) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

export default function Live() {
  const [dense, setDense] = React.useState(false);
  const [gigList, setSelectedCard] = useState(GigData);
  return (
    <section className="live-container">
      <Container>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          UPCOMING SHOWS
        </Typography>
        <ImageList
          className="poster-list"
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(160px,1fr)) !important",
            gridAutoColumns: "minmax(160px, 1fr)",
          }}
        >
          {gigList.map((poster) => (
            <a href={poster.link} target="_blank">
              <ImageListItem>
                <img src={poster.poster} />
              </ImageListItem>
            </a>
          ))}
        </ImageList>
      </Container>
      <Grid item xs={12} md={6}>
        <div>
          <List dense={dense} className="gig-list-container">
            {gigList.map((gig) => {
              <GigCard
                date={gig.date}
                ticket={gig.ticket}
                link={gig.link}
                place={gig.place}
                time={gig.time}
                image={gig.image}
                title={gig.title}
              />;
            })}
          </List>
        </div>
      </Grid>
    </section>
  );
}
