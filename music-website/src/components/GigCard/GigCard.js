import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

export default function GigCard(props) {
  return (
    <CardActionArea href={props.link} target="_blank">
      <ListItem
        className="gig-list-item"
        secondaryAction={
          props.ticket ? (
            <Tooltip title="Get Tickets">
              <IconButton
                className="ticket-button"
                edge="end"
                aria-label="tickets"
                href={props.ticket}
                target="_blank"
              >
                <LocalActivityIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Gig Info">
              <IconButton
                className="ticket-button"
                edge="end"
                aria-label="tickets"
                href={props.link}
                target="_blank"
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
          )
        }
      >
        <ListItemAvatar>
          <Avatar alt="gig image" src={props.image} />
        </ListItemAvatar>
        <ListItemText
          disableTypography
          primary={
            <Typography type="body2" style={{ color: "#8c52ff" }}>
              {props.date} | {props.title} | {props.time}
            </Typography>
          }
          secondary={
            <Typography type="body2" style={{ color: "#FFFFFF" }}>
              @ {props.place}
            </Typography>
          }
        />
      </ListItem>
    </CardActionArea>
  );
}
