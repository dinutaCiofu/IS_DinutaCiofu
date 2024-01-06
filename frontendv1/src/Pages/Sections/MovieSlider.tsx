import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieSlider.css";

interface Movie {
  id: number;
  title: string;
  description: string;
  duration: string;
  genre: string;
  language: string;
  category: string;
  imageFileName: string; // numele fisierului imaginii
}

const MovieSlider: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Movie[]>(
          "http://localhost:8080/findAllMovies"
        );
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // incrementeaza indexul filmului curent
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // se schimba la fiecare 3 secunde

    return () => {
      clearInterval(intervalId);
    };
  }, [currentMovieIndex, movies.length]);

  const handleDotClick = (index: number) => {
    setCurrentMovieIndex(index);
  };

  const formatFileName = (title: string): string => {
    return title.replace(/\s+/g, "-").toLowerCase();
  };

  return (
    <div className="movie-slider-container">
      <h2>{movies[currentMovieIndex]?.title}</h2>
      <p>{movies[currentMovieIndex]?.description}</p>
      <p>{movies[currentMovieIndex]?.genre}</p>
      <img
        src={
          movies[currentMovieIndex] && movies[currentMovieIndex]?.title
            ? `${process.env.PUBLIC_URL}/Img/${formatFileName(
                movies[currentMovieIndex].title
              )}.jpeg`
            : undefined
        }
        alt={movies[currentMovieIndex]?.title}
        style={{ maxWidth: "100%" }}
      />

      <div className="dots-container">
        {movies.map((movie, index) => (
          <span
            key={index}
            className={`dot ${index === currentMovieIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MovieSlider;
