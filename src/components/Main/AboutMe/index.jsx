import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "./style.module.css";

export default function AboutMe(props) {
  if (props.render === true)
  return (
    <Box className={`${styles.container} fadein`}>
      <Box sx={{ display: "flex", maxWidth: "450px", flexDirection: "column" }}>
        <Typography variant="h4"><b>About Me</b></Typography>
        <Typography sx={{ marginTop: "8px" }} variant="h6">
          Hello!
        </Typography>
        <Typography sx={{ marginTop: "8px" }} variant="body1">
          My name is João Victor Lerner Martins, and I'm a 20-year-old web
          developer based in Palhoça, Santa Catarina, Brazil. I've been immersed
          in the world of programming for the past year, passionate about
          creating innovative and efficient web solutions.
        </Typography>
        <Typography sx={{ marginTop: "8px" }} variant="body1">
          Currently, I am enrolled in the Systems of Information program at
          Unisul, embarking on my first semester of studies. This academic
          journey complements my hands-on experience, allowing me to blend
          theoretical knowledge with practical skills in the dynamic field of
          web development. I am enthusiastic about learning and contributing to
          the ever-evolving landscape of technology.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1px",
          transform: "skew(330deg, 10deg)",
          marginLeft: "30px",
        }}
      >
        <img
          style={{ maxWidth: "80px" }}
          alt="W"
          src={"https://i.imgur.com/LoGVMnq.png"}
        ></img>
        <Box sx={{ display: "flex", gap: "1px" }}>
          <img
            style={{ maxWidth: "80px" }}
            alt="A"
            src={"https://i.imgur.com/rfLIbhx.png"}
          ></img>
          <img
            style={{ maxWidth: "80px" }}
            alt="S"
            src={"https://i.imgur.com/S7A5cHW.png"}
          ></img>
          <img
            style={{ maxWidth: "80px" }}
            alt="D"
            src={"https://i.imgur.com/iaK0pfi.png"}
          ></img>{" "}
        </Box>
      </Box>
    </Box>
  );
}
