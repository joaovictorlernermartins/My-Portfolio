import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import styles from "./style.module.css";





export default function Main() {

  // const renderRef = React.useRef(null)

  const [aboutMeActive, setAboutMeActive] = useState(true)
  const [projectsActive, setProjectsActive] = useState(false)

  const AboutMeRender = () => {
    setAboutMeActive(true)
    setProjectsActive(false)
  }

  const ProjectRender = () => {
    setAboutMeActive(false)
    setProjectsActive(true)
  }

  return (
    <Box className={styles.container}>
      <Box>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={AboutMeRender} >About Me</Button>
          <Button onClick={ProjectRender}>Projects</Button>
        </ButtonGroup>
      </Box>
      <AboutMe render={aboutMeActive}></AboutMe>
      <Projects render={projectsActive}></Projects>
    </Box>

  );
}
