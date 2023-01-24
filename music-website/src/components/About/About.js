import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./About.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "black",
  opacity: 0.8,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="bio-container">
        <Grid item xs={12} md={2}>
          <Item className="will-fadeIn" id="bio-txt">
            <p>
              "One of the hitherto-unacknowledged people, products and 'things{" "}
              <br></br> that have helped shape rock'n'roll - such has <br></br>
              been the life of Mr Unsung Personified" <br></br>-{" "}
              <i>Q Magazine</i>
            </p>
          </Item>
        </Grid>
        <Grid item xs={12} md={2}>
          <Item className="will-fadeIn" id="bio-txt-2">
            <p>
              "As a first step towards an appreciation of <br></br> George
              Borowski's contribution to music, consider the following -{" "}
              <br></br>
              George’s consistent motto is one that undoubtedly <br></br>{" "}
              connects his epic music with the music of others." <br></br>-
              <i>Jim Sutherland, BBC Manchester Introducing</i>
            </p>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item className="will-fadeIn" id="bio-txt-main">
            <p>
              Born in Wales in the 2nd Polish Hospital in the displaced persons
              camp in September 1950, George's family eventually settled in
              Stretford, Manchester, and George has been writing & playing music
              since his Polish father was persuaded to invest almost a weeks
              wages in an acoustic guitar for the budding creator when he was
              15. Sadly, George had really wanted an electric.... <br></br>{" "}
              <br></br> Alongside performing in multiple musical outfits such as{" "}
              <i>The Out</i>, <i>Conspiracy</i> & <i>Amazon Rags</i>, George has
              toured and worked alongside acts <i>Tina Turner</i>,{" "}
              <i>Radiohead</i>, <i>Meatloaf</i> and <i>Pixes</i> (to name a few)
              as a guitar tech, player, writer and certified spiritual advisor.
              George now plays with a shifting band of tremendous talents under
              the name <i>George Borowski & The Fabulous Wonderfuls</i>
              <br></br> <br></br>
              Head to the <a href="./live">Live page</a> to see our upcoming
              shows!
            </p>
          </Item>
        </Grid>
        <Grid item xs={12} md={2}>
          <Item className="will-fadeIn" id="bio-txt-3">
            <p>
              "I have never seen a rock'n'roll <br></br>performer so completely
              connected <br></br> with what he was doing onstage." <br></br> -
              <i>Frank Black, Pixies</i>
            </p>
          </Item>
        </Grid>
        <Grid item xs={12} md={2}>
          <Item className="will-fadeIn" id="bio-txt-4">
            <p>
              "George has an uncanny ability to straddle the divide <br></br>{" "}
              and deliver a message to all camps." <br></br> -{" "}
              <i>Terry Christian, The Word</i>
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
