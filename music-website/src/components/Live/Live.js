import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Live.css";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

// function generate(element: React.ReactElement) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

export default function Live() {
  const [dense, setDense] = React.useState(false);

  return (
    <section className="live-container">
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          UPCOMING SHOWS
        </Typography>
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
                <Avatar>
                  <AudiotrackIcon />
                </Avatar>
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
                    The Queen Crafthouse & Kitchen, Doncaster
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
