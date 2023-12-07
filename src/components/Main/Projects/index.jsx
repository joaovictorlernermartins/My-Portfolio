import { Box, Typography } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


export default function Projects(props) {

  const projects = [{
    image: "https://github.com/dkt0001/my-top-animelist-html/raw/main/Captura%20de%20tela%202023-10-19%20014402.png?raw=true",
    title: "The Best Animes in My Opinion",
    name: "The Best Animes in My Opiniont",
    text: "A simple html file with my top 5 favourites animes",
  },
  {
    image: "https://private-user-images.githubusercontent.com/81587343/284774887-5d5b7f73-ee0b-489d-b700-875a380d1b12.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE4OTM2MjAsIm5iZiI6MTcwMTg5MzMyMCwicGF0aCI6Ii84MTU4NzM0My8yODQ3NzQ4ODctNWQ1YjdmNzMtZWUwYi00ODlkLWI3MDAtODc1YTM4MGQxYjEyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA2VDIwMDg0MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWYzYzRjOWI4MzM1MDQyZTk4NTg5NzM4NzZmYWUxMjhhMTNiNTdiZWFkZDJhZWNiMGU0YzRlNWRkZDI4ZTUyZjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.oewOUvs5-hTfAv6I2f5Tvn8tofM5ZIkH1Q5hAk7ftu4",
    title: "myanimelist-streamlit",
    name: "My Anime List- Python(Streamlit)",
    text: "A simple project made in python to store in a database anime that are being released, front made in streamlit (python) and back in sqlite3.",
  }
  ]

  if (props.render === true)
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "top",
          textAlign: "start",
          bgcolor: "black",
          borderRadius: 5,
          color: "white",
          justifyContent: "space-evenly",
          padding: "20px 40px 20px 30px",
          marginTop: "10px",
          gap: "10px",
        }}
      >
        {projects.map(project => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={project.image}
              title={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.text}
              </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center", alignContent: "end"}}>
              <Button size="small">Open GitHub</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    );

}


