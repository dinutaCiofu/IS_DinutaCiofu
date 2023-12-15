import React, { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { htmlStyle, toolBarStyle } from "./HomePage.styles";
import TabButton from "../components/TabButton";

import { Grid } from "@mui/material";
import ContactSection from "./Sections/ContactSection";
import AboutSection from "./Sections/AboutSection";
import AvantajeSection from "./Sections/AvantajeSection";
import IntroductionSection from "./Sections/IntroductionSection";
import FooterSection from "./Sections/FooterSection";

const HomePage = (): JSX.Element => {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [avantajeSelected, setAvantajeSelected] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const avantajeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAvantaje = () => {
    avantajeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
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
              setAvantajeSelected(false);
              scrollToAbout();
            }}
            isSelected={aboutSelected}
          >
            About
          </TabButton>
          <TabButton
            onSelect={() => {
              setAboutSelected(false);
              setContactSelected(false);
              setAvantajeSelected(!avantajeSelected);
              scrollToAvantaje();
            }}
            isSelected={avantajeSelected}
          >
            Avantaje Online
          </TabButton>
          <TabButton
            onSelect={() => {
              setAboutSelected(false);
              setContactSelected(!contactSelected);
              setAvantajeSelected(false);
              scrollToContact();
            }}
            isSelected={contactSelected}
          >
            Contact
          </TabButton>
        </Toolbar>
      </AppBar>
      <IntroductionSection />

      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <Grid item xs={6} ref={avantajeRef}>
        <AvantajeSection />
      </Grid>
      <Grid item xs={6} ref={contactRef}>
        {/* <ContactSection /> */}
        <FooterSection />
      </Grid>
    </div>
  );
};
export default HomePage;
