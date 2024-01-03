import React, { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import {
  htmlStyle,
  toolBarStyle,
  listDividersStyle,
  containerStyle,
} from "./AdminPage.styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ClientList from "../../components/Client/ClientList";
import MovieList from "../../components/Movie/MovieList";

const AdminPage = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div style={htmlStyle}>
      <AppBar position="fixed">
        <Toolbar style={toolBarStyle}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CineBook
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={containerStyle}>
        <List
          sx={listDividersStyle}
          component="nav"
          aria-label="mailbox folders"
        >
          <ListItem button onClick={() => handleOptionSelect("Movies")}>
            <ListItemText primary="Movies" />
          </ListItem>
          <Divider />
          <ListItem
            button
            divider
            onClick={() => handleOptionSelect("Customers")}
          >
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button onClick={() => handleOptionSelect("Program")}>
            <ListItemText primary="Program" />
          </ListItem>
          <Divider light />
          <ListItem button onClick={() => handleOptionSelect("Reservations")}>
            <ListItemText primary="Reservations" />
          </ListItem>
          <Divider light />
          <ListItem button onClick={() => handleOptionSelect("Broadcasts")}>
            <ListItemText primary="Broadcasts" />
          </ListItem>
          <Divider light />
          <ListItem button onClick={() => handleOptionSelect("My account")}>
            <ListItemText primary="My account" />
          </ListItem>
        </List>
      </div>
      <>
        {selectedOption === "Customers" && <ClientList />}
        {selectedOption === "Movies" && <MovieList />}
      </>
    </div>
  );
};

export default AdminPage;
