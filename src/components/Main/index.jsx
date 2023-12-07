import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";





export default function Main() {

  // const renderRef = React.useRef(null)

  const [aboutMeActive, setAboutMeActive] = useState(true)
  const [projectsActive, setProjectsActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)

  const AboutMeRender = () => {
    setAboutMeActive(!aboutMeActive)
    setProjectsActive(false)
    setContactActive(false)
  }

  const ProjectRender = () => {
    setAboutMeActive(false)
    setProjectsActive(!projectsActive)
    setContactActive(false)
  }

  const ContactRender = () => {
    setAboutMeActive(false)
    setProjectsActive(false)
    setContactActive(!contactActive)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"column",
        alignItems: "top",
        textAlign: "center",
        bgcolor: "black",
        borderRadius: 5,
        color: "white",
        justifyContent: "space-between",
        padding: "15px 15px 15px 15px",
      }}
    >
      <Box>
        <ButtonGroup sx={{ color: "#fff" }} variant="outlined" aria-label="outlined button group">
          <Button onClick={AboutMeRender} >About Me</Button>
          <Button onClick={ProjectRender}>Projects</Button>
          <Button onClick={ContactRender}>Contact</Button>
        </ButtonGroup>
      </Box>
      <AboutMe render={aboutMeActive}></AboutMe>
      <Projects render={projectsActive}></Projects>
    </Box>

  );
}
