import React, { useCallback, useEffect, useState } from "react";
import tmdbInstance, { baseImageURL } from "../axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const fetchData = useCallback(async () => {
    const request = await tmdbInstance.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  },[fetchUrl])
   

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const allMovies = movies.map(
    (movie) =>
      ((isLargeRow && movie.poster_path) ||
        (!isLargeRow && movie.backdrop_path)) && (
        <img
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          key={movie.id}
          src={`${baseImageURL}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      )
  );

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">{allMovies}</div>
    </div>
  );
}

export default Row;
