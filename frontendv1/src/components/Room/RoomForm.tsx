import React, { useState } from "react";
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
import { buttonStyle } from "./Room.styles";
type RoomFormProps = { onCancel: () => void };
const RoomForm: React.FC<RoomFormProps> = ({ onCancel }) => {
  const [formData, setFormData] = useState({ name: "", seats: 0 });
  const handleInputChange = (fieldName: string, value: any) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  const handleFormSubmit = () => {
    const requestData = {
      name: formData.name,
      seats: formData.seats,
    };
    console.log(requestData);
    axios
      .post("http://localhost:8080/addRoom", requestData)
      .then((response) => {
        alert("Room added successfully");
      })
      .catch((error) => alert("Error adding room"));
  };
  return (
    <Paper
      style={{
        marginTop: "20px",
        padding: 20,
        width: "250px",
        height: "400px",
      }}
    >
      <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
        Adaugă Room
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
          label="Name"
          type="name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
            style: { marginLeft: 0, marginTop: -6 },
          }}
          margin="normal"
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Seats"
          type="number"
          value={formData.seats}
          onChange={(e) => handleInputChange("seats", e.target.value)}
          fullWidth
          margin="normal"
          style={{ marginBottom: 20 }}
          InputLabelProps={{ style: { marginLeft: 0, marginTop: -6 } }}
        />
        <Button type="submit" variant="contained" style={buttonStyle}>
          Adaugă Room
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
export default RoomForm;
