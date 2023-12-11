import React, { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  getStartedButtonStyle,
  htmlStyle,
  toolBarBtnStyle,
  toolBarStyle,
  aboutImgStyle,
} from "./HomePage.styles";
import TabButton from "../components/TabButton";
import AboutPage from "./AboutPage";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import WelcomeImage from "../Img/WelcomeImage.png";

const HomePage = (): JSX.Element => {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [programSelected, setProgramSelected] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const login = (event: any): void => {
    navigate("/Login");
  };
  return (
    <div style={htmlStyle}>
      <AppBar position="static">
        <Toolbar style={toolBarStyle}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CineBook
          </Typography>
          <TabButton
            onSelect={() => {
              setAboutSelected(!aboutSelected);
              setContactSelected(false);
              setProgramSelected(false);
              scrollToAbout();
            }}
            isSelected={aboutSelected}
          >
            About
          </TabButton>
          <TabButton
            onSelect={() => {
              setAboutSelected(false);
              setContactSelected(!contactSelected);
              setProgramSelected(false);
            }}
            isSelected={contactSelected}
          >
            Contact
          </TabButton>
          <TabButton
            onSelect={() => {
              setAboutSelected(false);
              setContactSelected(false);
              setProgramSelected(!programSelected);
            }}
            isSelected={programSelected}
          >
            Program
          </TabButton>
        </Toolbar>
      </AppBar>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h3" gutterBottom>
          Bine ați venit la CineBook
        </Typography>
        <Typography variant="body2">
          Oferim cele mai noi și captivante filme într-o atmosferă confortabilă.
        </Typography>
        <Button
          style={getStartedButtonStyle}
          onClick={login}
          variant="contained"
          size="large"
        >
          Începeți
        </Button>
      </div>
      <Grid container spacing={2} style={aboutImgStyle}>
        <Grid item xs={6}>
          <div ref={aboutRef}>
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
    </div>
  );
};
export default HomePage;
