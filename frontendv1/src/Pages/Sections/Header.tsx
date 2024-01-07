import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PinIcon from "@mui/icons-material/LocationOn";
import { toolBarStyle } from "../HomePage.styles";
import MainTabs from "./MainTabs";

interface HeaderProps {
  locationName: string;
  onSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({ locationName, onSignOut }) => {
  const handleTabChange = (newValue: number) => {
    console.log("Tab changed to:", newValue);
  };
  return (
    <AppBar position="fixed" style={toolBarStyle}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CineBook
        </Typography>
        <MainTabs onTabChange={handleTabChange} />
        <IconButton color="inherit">
          <PinIcon />
        </IconButton>
        <Typography>{locationName}</Typography>
        <Button
          color="inherit"
          onClick={onSignOut}
          style={{ marginLeft: "20px" }}
        >
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
