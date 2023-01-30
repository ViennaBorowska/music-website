import React from "react";
import "./Home.css";
import { YouTubeEmbed } from "react-social-media-embed";
import { FacebookProvider, Page } from "react-facebook";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            marginTop: "20px",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Facebook Page
          </Typography>
          <FacebookProvider appId="1185955652039406">
            <Page
              href="https://www.facebook.com/GeorgeBorowskiOfficial/"
              tabs="timeline"
            />
          </FacebookProvider>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        ></Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h3" gutterBottom>
            VIDEOS
          </Typography>
          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=MmL9kiExf04"
            width={325}
            height={220}
            className="yt-video"
          />
          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=BOyHrOhaMxk"
            width={325}
            height={220}
            className="yt-video"
          />
          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=LXsj6AUjH5Y"
            width={325}
            height={220}
            className="yt-video"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
