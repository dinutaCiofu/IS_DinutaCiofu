import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import { buttonStyle, movieListStyle } from "./MovieList.styles";
import Button from "@mui/material/Button";

type MovieFormProps = {
  onCancel: () => void;
};
const MovieForm: React.FC<MovieFormProps> = ({ onCancel }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    duration: "",
    genre: "",
    language: "",
    category: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof typeof newMovie
  ) => {
    setNewMovie({ ...newMovie, [field]: e.target.value });
  };

  const handleAddMovie = async () => {
    try {
      // Send a request to add the movie to the database
      await axios.post("http://localhost:8080/saveMovie", newMovie);

      // Show a success prompt
      alert("Film adaugat cu succes!");

      // Reset the form and close it
      setNewMovie({
        title: "",
        description: "",
        duration: "",
        genre: "",
        language: "",
        category: "",
      });

      onCancel();
    } catch (error) {
      console.error("Error adding movie", error);
    }
  };

  return (
    <div style={movieListStyle}>
      <h2>Adauga Film</h2>
      <p>
        Titlu:
        <TextField
          value={newMovie.title || ""}
          onChange={(e) => handleInputChange(e, "title")}
          size="small"
        />
      </p>
      <p>
        Descriere:
        <TextField
          value={newMovie.description || ""}
          onChange={(e) => handleInputChange(e, "description")}
          size="small"
        />
      </p>
      <p>
        Durata:
        <TextField
          value={newMovie.duration || ""}
          onChange={(e) => handleInputChange(e, "duration")}
          size="small"
        />
      </p>
      <p>
        Genre:
        <TextField
          value={newMovie.genre || ""}
          onChange={(e) => handleInputChange(e, "genre")}
          size="small"
        />
      </p>
      <p>
        Limba:
        <TextField
          value={newMovie.language || ""}
          onChange={(e) => handleInputChange(e, "language")}
          size="small"
        />
      </p>
      <p>
        Categorie:
        <TextField
          value={newMovie.category || ""}
          onChange={(e) => handleInputChange(e, "category")}
          size="small"
        />
      </p>
      <Button style={buttonStyle} variant="contained" onClick={handleAddMovie}>
        Adauga
      </Button>
      <Button style={buttonStyle} variant="contained" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default MovieForm;
