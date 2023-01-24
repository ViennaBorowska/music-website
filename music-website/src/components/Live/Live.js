import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Live.css";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import InfoIcon from "@mui/icons-material/Info";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import QueensCraftPoster from "./posters/gb-poster-crafthouse.jpg";
import HunchPoster from "./posters/gb-hunch-poster.jpg";
// function generate(element: React.ReactElement) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

const images = [
  {
    thumbnail: {
      uri: QueensCraftPoster,
      href: "https://www.facebook.com/theQueenDonny",
    },
  },
  {
    thumbnail: {
      uri: HunchPoster,
      href: "https://castindoncaster.com/whats-on/the-hunch-george-borowski/?fbclid=IwAR1YNFEku7CRSUBJc57X5lw72TWSqq0s_h3xB6a09ouyv6D6zjlvIsBMfd8",
    },
  },
];

export default function Live() {
  const [dense, setDense] = React.useState(false);

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
          {images.map((image) => (
            <a href={image.thumbnail.href} target="_blank">
              <ImageListItem>
                <img src={image.thumbnail.uri} />
              </ImageListItem>
            </a>
          ))}
        </ImageList>
      </Container>
      <Grid item xs={12} md={6}>
        <div>
          <List dense={dense} className="gig-list-container">
            <ListItem
              className="gig-list-item"
              secondaryAction={
                <Tooltip title="Get Tickets">
                  <IconButton
                    className="ticket-button"
                    edge="end"
                    aria-label="tickets"
                    href="https://castindoncaster.com/whats-on/the-hunch-george-borowski/"
                    target="_blank"
                  >
                    <LocalActivityIcon />
                  </IconButton>
                </Tooltip>
              }
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography type="body2" style={{ color: "#8c52ff" }}>
                    WEDS 25/1: The Hunch + George Borowski
                  </Typography>
                }
                secondary={
                  <Typography type="body2" style={{ color: "#FFFFFF" }}>
                    @ Cask, Doncaster
                  </Typography>
                }
              />
            </ListItem>
            <ListItem
              className="gig-list-item"
              secondaryAction={
                <Tooltip title="Gig Info">
                  <IconButton
                    edge="end"
                    aria-label="gig-ticket"
                    className="ticket-button"
                  >
                    <InfoIcon
                      href="https://www.facebook.com/theQueenDonny"
                      target="_blank"
                    />
                  </IconButton>
                </Tooltip>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AudiotrackIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography type="body2" style={{ color: "#8c52ff" }}>
                    FRI 27/1: George Solo
                  </Typography>
                }
                secondary={
                  <Typography type="body2" style={{ color: "#FFFFFF" }}>
                    @ The Queen Crafthouse & Kitchen, Doncaster
                  </Typography>
                }
              />
            </ListItem>
            <ListItem
              className="gig-list-item"
              secondaryAction={
                <Tooltip title="Gig Info">
                  <IconButton
                    edge="end"
                    aria-label="gig-ticket"
                    className="ticket-button"
                  >
                    <InfoIcon
                      href="https://www.thehivelive.org/all-events"
                      target="_blank"
                    />
                  </IconButton>
                </Tooltip>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <AudiotrackIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography type="body2" style={{ color: "#8c52ff" }}>
                    SUN 5/2: George & The Fabulous Wonderfuls
                  </Typography>
                }
                secondary={
                  <Typography type="body2" style={{ color: "#FFFFFF" }}>
                    @ The Hive, Winsford for Independent Venue Week
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </div>
      </Grid>
    </section>
  );
}
