import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { bodyTextStyle, headingStyle, paperStyle } from "./AboutPage.styles";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Paper elevation={3} style={{ ...paperStyle, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom style={headingStyle}>
          Despre CineBook
        </Typography>
        <Typography variant="body1" style={bodyTextStyle}>
          Bine ați venit la CineBook! CineBook a luat naștere din pasiunea
          noastră pentru film și dorința de a oferi o experiență cinematografică
          unică. Suntem dedicați să aducem magia cinematografiei direct în
          sufletele voastre, oferind cele mai bune filme și o atmosferă
          prietenoasă și confortabilă.
        </Typography>
      </Paper>
    </div>
  );
};

export default AboutPage;
