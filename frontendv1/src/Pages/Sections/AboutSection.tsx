import { Grid } from "@mui/material";
import React from "react";
import { aboutImgStyle } from "../HomePage.styles";
import AboutPage from "../AboutPage";
import WelcomeImage from "../../Img/WelcomeImage.png";

const AboutSection: React.FC = () => {
  return (
    <Grid container spacing={2} style={aboutImgStyle}>
      <Grid item xs={6}>
        <div>
          <AboutPage />
        </div>
      </Grid>
      <Grid item xs={4}>
        <img
          src={WelcomeImage}
          alt="Welcome to the cinema"
          style={{ maxWidth: "90%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default AboutSection;
