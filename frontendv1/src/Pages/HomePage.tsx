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
} from "./HomePage.styles";
import TabButton from "../components/TabButton";
import AboutPage from "./AboutPage";

const HomePage = (): JSX.Element => {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [programSelected, setProgramSelected] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
        <Button style={getStartedButtonStyle} variant="contained" size="large">
          Începeți
        </Button>
      </div>
      <div ref={aboutRef}>
        <AboutPage />
      </div>
    </div>
  );
};
export default HomePage;
