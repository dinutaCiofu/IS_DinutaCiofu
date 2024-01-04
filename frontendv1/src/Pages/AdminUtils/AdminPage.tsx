import React, { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import {
  htmlStyle,
  toolBarStyle,
  listDividersStyle,
  containerStyle,
  movieOptionsBtnStyle,
} from "./AdminPage.styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ClientList from "../../components/Client/ClientList";
import MovieList from "../../components/Movie/MovieList";
import MovieForm from "../../components/Movie/MovieForm";
import { Button } from "@mui/material";
import { buttonStyle } from "../../components/Client/ClientList.styles";
import Program from "../../components/Program/Program";
import BroadcastList from "../../components/Broadcast/BroadcastList";
import BroadcastForm from "../../components/Broadcast/BroadcastForm";

type MovieMode = "view" | "add" | null;
type BroadcastMode = "view" | "add" | null;
type OptionSelect = string | null;
type RoomMode = "view" | "add" | null;

const AdminPage = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [movieMode, setMovieMode] = useState<string | null>(null);
  const [broadcastMode, setBroadcastMode] = useState<string | null>(null);

  const handleOptionSelect = (option: OptionSelect) => {
    setSelectedOption(option);
    setMovieMode(null); // reset movie mode
    setBroadcastMode(null); // reset broadcast mode
  };

  const handleMovieModeSelect = (mode: MovieMode) => {
    setMovieMode(mode);
  };
  const handleBroadcastModeSelect = (mode: BroadcastMode) => {
    setBroadcastMode(mode);
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

          <ListItem button onClick={() => handleOptionSelect("Broadcasts")}>
            <ListItemText primary="Broadcasts" />
          </ListItem>
          <Divider light />
          <ListItem button onClick={() => handleOptionSelect("Reservations")}>
            <ListItemText primary="Reservations" />
          </ListItem>
          <Divider light />
          <ListItem button onClick={() => handleOptionSelect("Rooms")}>
            <ListItemText primary="Rooms" />
          </ListItem>
          <Divider light />
          <ListItem button onClick={() => handleOptionSelect("My account")}>
            <ListItemText primary="My account" />
          </ListItem>
        </List>
      </div>
      <>
        {selectedOption === "Customers" && <ClientList />}
        {selectedOption === "Movies" && movieMode === null && (
          <div style={movieOptionsBtnStyle}>
            <Button
              style={buttonStyle}
              variant="contained"
              onClick={() => handleMovieModeSelect("view")}
            >
              Vizualizare Filme
            </Button>
            <Button
              style={buttonStyle}
              variant="contained"
              onClick={() => handleMovieModeSelect("add")}
            >
              Adauga film
            </Button>
          </div>
        )}
        {selectedOption === "Movies" && movieMode === "view" && (
          <>
            <MovieList onCancel={() => handleMovieModeSelect(null)} />
          </>
        )}
        {selectedOption === "Movies" && movieMode === "add" && (
          <MovieForm onCancel={() => handleMovieModeSelect(null)} />
        )}
        {selectedOption === "Program" && (
          <Program onCancel={() => handleOptionSelect(null)} />
        )}
        {selectedOption === "Broadcasts" && broadcastMode === null && (
          <div style={movieOptionsBtnStyle}>
            <Button
              style={buttonStyle}
              variant="contained"
              onClick={() => handleBroadcastModeSelect("view")}
            >
              Vizualizare Broadcasts
            </Button>
            <Button
              style={buttonStyle}
              variant="contained"
              onClick={() => handleBroadcastModeSelect("add")}
            >
              Adauga Broadcast
            </Button>
          </div>
        )}
        {selectedOption === "Broadcasts" && broadcastMode === "view" && (
          <div>
            <BroadcastList onCancel={() => handleBroadcastModeSelect(null)} />
          </div>
        )}
        {selectedOption === "Broadcasts" && broadcastMode === "add" && (
          <BroadcastForm onCancel={() => handleBroadcastModeSelect(null)} />
        )}
      </>
    </div>
  );
};

export default AdminPage;
