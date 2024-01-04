import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { buttonStyle } from "./Broadcast.styles";

type BroadcastFormProps = {
  onCancel: () => void;
};

const BroadcastForm: React.FC<BroadcastFormProps> = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    date: "",
    price: 0,
    movieId: 0,
    roomId: 0,
  });
  const [movies, setMovies] = useState<{ id: number; title: string }[]>([]);
  const [rooms, setRooms] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    // Fetch movies
    axios
      .get("http://localhost:8080/findAllMovies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching movies", error));

    // Fetch rooms
    axios
      .get("http://localhost:8080/findAllRooms")
      .then((response) => setRooms(response.data))
      .catch((error) => console.error("Error fetching rooms", error));
  }, []);

  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const handleInputChange = (fieldName: string, value: any) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleFormSubmit = () => {
    const formattedDate = formatDate(formData.date);

    const requestData = {
      date: formattedDate,
      price: formData.price,
      movie: {
        id: formData.movieId,
      },
      room: {
        id: formData.roomId,
      },
    };
    console.log(requestData);
    axios
      .post("http://localhost:8080/addBroadcast", requestData)
      .then((response) => {
        console.log("Broadcast added successfully", response.data);
        alert("Broadcast added successfully");
        onCancel();
      })
      .catch((error) => console.error("Error adding broadcast", error));
  };

  return (
    <Paper
      style={{
        padding: 20,
        width: "300px",
        height: "500px",
      }}
    >
      <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
        Adaugă Broadcast
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Data"
          type="date"
          value={formData.date}
          onChange={(e) => handleInputChange("date", e.target.value)}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
            style: { marginLeft: 0, marginTop: -6 },
          }}
          margin="normal"
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Preț"
          type="number"
          value={formData.price}
          onChange={(e) => handleInputChange("price", e.target.value)}
          fullWidth
          margin="normal"
          style={{ marginBottom: 20 }}
          InputLabelProps={{ style: { marginLeft: 0, marginTop: -6 } }}
        />
        <FormControl fullWidth margin="normal" style={{ marginBottom: 20 }}>
          <InputLabel style={{ marginLeft: 0, marginTop: -6 }}>Film</InputLabel>
          <Select
            value={formData.movieId}
            onChange={(e) => handleInputChange("movieId", e.target.value)}
          >
            {movies.map((movie) => (
              <MenuItem key={movie.id} value={movie.id}>
                {movie.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" style={{ marginBottom: 20 }}>
          <InputLabel style={{ marginLeft: 0, marginTop: -6 }}>Sala</InputLabel>
          <Select
            value={formData.roomId}
            onChange={(e) => handleInputChange("roomId", e.target.value)}
          >
            {rooms.map((room) => (
              <MenuItem key={room.id} value={room.id}>
                {room.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" style={buttonStyle}>
          Adaugă Broadcast
        </Button>
        <Button
          type="button"
          variant="contained"
          onClick={onCancel}
          style={buttonStyle}
        >
          Anulează
        </Button>
      </form>
    </Paper>
  );
};

export default BroadcastForm;
