import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography} from "@mui/material";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import Divider from "@mui/material/Divider";
import styles from "./style.module.css";

export default function Profile() {
  return (
    <Box className={styles.card}>
      <Box>
        <Avatar
          alt="Foto de Perfil do João"
          src="https://avatars.githubusercontent.com/u/81587343?v=4"
          className={styles.imgProfile}
        />
        <Typography className={styles.name} variant="h5">
          João Victor Martins
        </Typography>
        <Typography className={styles.grey} variant="subtitle1">
          Web Developer
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "10px 10px 10px 10px",
        }}
      >
        <Divider className={styles.hr} />
        <Box className={styles.itemProfile}>
          <EmailIcon className={styles.icon}></EmailIcon>
          <Box className={styles.colunm}>
            <Typography className={styles.grey} variant="body2">
              Email
            </Typography>
            <Link href="mailto:joaolerner@outlook.com.br">
              joaolerner@outlook.com.br
            </Link>
          </Box>
        </Box>

        <Box className={styles.itemProfile}>
          <GitHubIcon className={styles.icon}></GitHubIcon>
          <Box className={styles.colunm}>
            <Typography className={styles.grey} variant="body2">
              Github
            </Typography>
            <Link href="https://github.com/joaovictorlernermartins">
              joaovictorlernermartins
            </Link>
          </Box>
        </Box>

        <Box className={styles.itemProfile}>
          <LinkedInIcon className={styles.icon}></LinkedInIcon>
          <Box className={styles.colunm}>
            <Typography className={styles.grey} variant="body2">
              LinkedIn
            </Typography>
            <Link href="https://www.linkedin.com/in/jo%C3%A3o-victor-lerner-martins-0145a4172/">
              João Victor Lerner Martins
            </Link>
          </Box>
        </Box>

        <Box className={styles.itemProfile}>
          <WhatsAppIcon className={styles.icon}></WhatsAppIcon>
          <Box className={styles.colunm}>
            <Typography className={styles.grey} variant="body2">
              WhatsApp
            </Typography>
            <Link href="tel:+5548991695854">+55 (48) 99169-5854</Link>
          </Box>
        </Box>

        <Box className={styles.itemProfile}>
          <PlaceIcon className={styles.icon}></PlaceIcon>
          <Box className={styles.colunm}>
            <Typography className={styles.grey} variant="body2">
              Location
            </Typography>
            <Link href="https://maps.app.goo.gl/9XbxZaXuFTnXPLXR7">
              Palhoça, Santa Catarina, Brazil
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
