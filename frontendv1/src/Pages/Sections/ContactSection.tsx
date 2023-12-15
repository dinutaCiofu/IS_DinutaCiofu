import { Paper, Typography } from "@mui/material";
import React from "react";
import {
  contactStyle,
  bodyTextStyle,
  paperStyle,
} from "./ContactSection.styles";
import { Grid } from "@mui/material";

const ContactSection: React.FC = () => {
  return (
    <Grid container spacing={2} style={contactStyle} justifyContent={"center"}>
      <Grid item xs={8}>
        <Paper elevation={3} style={paperStyle}>
          <Typography variant="h3" gutterBottom textAlign="center">
            Contact
          </Typography>
          <Typography variant="body1" style={bodyTextStyle}>
            Pentru întrebări sau informații suplimentare, nu ezita să ne
            contactezi.
          </Typography>
          <Typography variant="body1" style={bodyTextStyle}>
            <strong>Admin:</strong> Dinuța Dumitrița Ciofu
          </Typography>
          <Typography variant="body1" style={bodyTextStyle}>
            <strong>Email:</strong> dinutaciofu@gmail.com
          </Typography>
          <Typography variant="body1" style={bodyTextStyle}>
            <strong>Adresă:</strong> Universitatea Tehnică din Cluj-Napoca
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContactSection;
