import React from "react";
import "./Home.css";
import { FacebookEmbed } from "react-social-media-embed";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FacebookEmbed
        url="https://www.facebook.com/andrewismusic/posts/451971596293956"
        width={550}
      />
    </div>
  );
}
