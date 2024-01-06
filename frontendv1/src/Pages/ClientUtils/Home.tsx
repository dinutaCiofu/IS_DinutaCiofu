import React from "react";
import Header from "../Sections/Header";
import MainTabs from "../Sections/MainTabs";
import MovieSlider from "../Sections/MovieSlider";
import { useNavigate } from "react-router-dom";
import { AppBar, Container } from "@mui/material";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleTabChange = (newValue: number) => {
    console.log("Tab changed to:", newValue);
  };

  const handleSignOut = () => {
    navigate("/Login");
  };

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "transparent" }}>
        <Header locationName="Cluj-Napoca" onSignOut={handleSignOut} />
        <Container
          component="main"
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <MainTabs onTabChange={handleTabChange} />
        </Container>
      </AppBar>
      <MovieSlider />
    </div>
  );
};

export default Home;
