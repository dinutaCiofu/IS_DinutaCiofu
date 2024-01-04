import React, { useState, useEffect } from "react";
import axios from "axios";
import movieIcon from "../../Img/camera-movie.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  buttonStyle,
  liStyle,
  movieDetailsDivStyle,
  movieListStyle,
  parentDivStyle,
  ulStyle,
} from "./MovieList.styles";

type Movie = {
  id?: number;
  title: string;
  description: string;
  duration: string;
  genre: string;
  language: string;
  category: string;
};
type MovieListProps = {
  onCancel: () => void;
};

const MovieList: React.FC<MovieListProps> = ({ onCancel }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [updatedMovie, setUpdatedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    // preluam datele despre filme de la server
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Movie[]>(
          "http://localhost:8080/findAllMovies"
        );
        setMovies(response.data || []);
      } catch (err) {
        console.error("Error fetching movies", err);
      }
    };
    fetchMovies();
  }, []);

  const handleMovieSelect = (movie: Movie) => {
    // se actualizeaza starea pentru a afisa detaliile filmului selectat
    setSelectedMovie(movie);
    setUpdatedMovie({ ...movie });
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Movie
  ) => {
    if (updatedMovie) {
      setUpdatedMovie({ ...updatedMovie, [field]: e.target.value });
    }
  };

  const handleUpdateMovie = async () => {
    try {
      if (selectedMovie && updatedMovie) {
        const response = await axios.post(
          `http://localhost:8080/updateMovie/${selectedMovie.id}`,
          updatedMovie
        );

        // handle the response
        console.log("Update response:", response.data);

        // refresh
        const moviesResponse = await axios.get(
          "http://localhost:8080/findAllMovies"
        );
        setMovies(moviesResponse.data);
      }
    } catch (err) {
      console.error("Error updating movie", err);
    }
  };

  const handleDeleteMovie = async () => {
    try {
      if (selectedMovie) {
        // se trimite request pentru stergerea filmului dupa id
        await axios.delete(
          `http://localhost:8080/deleteMovieById/${selectedMovie.id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // refresh
        const response = await axios.get<Movie[]>(
          "http://localhost:8080/findAllMovies"
        );
        setMovies(response.data);

        // deselecteaza
        setSelectedMovie(null);
      }
    } catch (err) {
      console.error("Error deleting movie", err);
    }
  };
  const handleCancel = () => {
    onCancel();
  };
  return (
    <div style={parentDivStyle}>
      <div style={movieListStyle}>
        <h2> Lista filmelor</h2>
        <ul style={ulStyle}>
          {movies.map((movie) => (
            <li
              key={movie.id}
              onClick={() => handleMovieSelect(movie)}
              style={liStyle}
            >
              <img
                src={movieIcon}
                alt="Customer Icon"
                style={{ marginRight: "8px" }}
              />
              {movie.title}
            </li>
          ))}
        </ul>
        <Button style={buttonStyle} variant="contained" onClick={handleCancel}>
          Anuleaza
        </Button>
      </div>
      <div style={movieDetailsDivStyle}>
        {selectedMovie && (
          <div>
            <h2>Detalii Film</h2>
            <p>ID: {selectedMovie.id}</p>
            <p>Titlu:</p>
            <TextField
              value={updatedMovie?.title || ""}
              onChange={(e) => handleInputChange(e, "title")}
              size="small"
            />

            <p>Descriere:</p>
            <TextField
              value={updatedMovie?.description || ""}
              onChange={(e) => handleInputChange(e, "description")}
              size="small"
            />

            <p>Durata:</p>
            <TextField
              value={updatedMovie?.duration || ""}
              onChange={(e) => handleInputChange(e, "duration")}
              size="small"
            />

            <p>Genre: </p>
            <TextField
              value={updatedMovie?.genre || ""}
              onChange={(e) => handleInputChange(e, "genre")}
              size="small"
            />

            <p>Limba:</p>
            <TextField
              value={updatedMovie?.language || ""}
              onChange={(e) => handleInputChange(e, "language")}
              size="small"
            />
            <p>Categorie:</p>
            <TextField
              value={updatedMovie?.category || ""}
              onChange={(e) => handleInputChange(e, "category")}
              size="small"
            />

            <Button
              style={buttonStyle}
              variant="contained"
              onClick={handleUpdateMovie}
            >
              Actualizare Film
            </Button>
            <Button
              style={buttonStyle}
              variant="contained"
              onClick={handleDeleteMovie}
            >
              Ștergere Film
            </Button>
          </div>
        )}
      </div>
      {/* <img
        src={customers}
        alt="Customers"
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
      /> */}
    </div>
  );
};

export default MovieList;
