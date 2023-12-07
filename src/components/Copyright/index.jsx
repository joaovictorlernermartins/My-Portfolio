import * as React from "react";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link
        color="inherit"
        target="_blank"
        href="https://github.com/joaovictorlernermartins"
      >
        João Victor Lerner Martins
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
