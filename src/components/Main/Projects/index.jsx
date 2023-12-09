import { Box, Typography } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';



export default function Projects(props) {

  const projects = [
    {
      image: "https://i.imgur.com/Ztr3siN.png", //APACHE LOCALHOST OR LINK
      title: "My top 5 animes",
      name: "My Top 5 Animes",
      chip: "HTML",
      text: "A simple html and css file with my top 5 favourites animes, ",
      link: "https://github.com/joaovictorlernermartins/my-top-animelist-html"
    },
    {
      image: "https://i.imgur.com/gQcLwvR.png",
      name: "My Anime Calendar",
      chip: "Python",
      text: "We can add animes to our calendar by inserting their name, day of the week when the episode is released, and a link to open the anime page. At the homepage we can filter the animes by the day of the week. If not filtered, everyone will be listed. ",
      link: "https://github.com/joaovictorlernermartins/my-top-animelist-html"
    },
  ]


  if (props.render === true)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "top",
          textAlign: "start",
          color: "white",
          padding: "20px 40px 20px 40px",
          gap: "40px",
          justifyContent:"center",
        }}
      >
        <Typography variant="h4"><b>My Projects</b></Typography>
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}>

          {projects.map(project => (

            <Card sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxWidth: 345,
              bgcolor: "rgb(31, 31, 31)!important;",
              color: "white",
              borderRadius: 2,
            }}>
              <Box>
              <CardMedia
                sx={{ height: 140 }}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Chip sx={{ border: "1px solid #6d00b5", color: "#a628fa" }} label={project.chip} size="small" variant="outlined" />
                <Typography sx={{ marginTop: "5px" }} variant="body2" color="#8787a3 !important;">
                  {project.text}
                </Typography>
              </CardContent>
              </Box>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button target="_blank" href={project.link} size="small">Open GitHub</Button>
              </CardActions>
            </Card>

          ))}
        </Box>
      </Box>
    );

}


