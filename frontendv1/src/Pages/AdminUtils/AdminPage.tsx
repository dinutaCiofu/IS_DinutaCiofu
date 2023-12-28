import React, { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import {
  htmlStyle,
  toolBarStyle,
  listDividersStyle,
  containerStyle,
  divClientsListStyle,
} from "./AdminPage.styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ClientList from "../../components/ClientList";

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
          <ListItem button>
            <ListItemText primary="Program" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Reservations" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Broadcasts" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="My account" />
          </ListItem>
        </List>
      </div>
      <div style={divClientsListStyle}>
        {selectedOption === "Customers" && <ClientList />}
      </div>
    </div>
  );
};

export default AdminPage;
