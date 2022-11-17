import React, { useEffect, useState } from "react";
import tmdbInstance, { baseImageURL } from "../axios";
import requests from "../request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  const fetchData = async () => {
    const request = await tmdbInstance.get(requests.fetchNetflixOriginals);
    setMovie(request.data.results[Math.floor(Math.random() * request.data.results?.length - 1 )]);
    return request;
  }

  useEffect(()=> {
    fetchData()
  }, [])

  const trancate = (string,n) => {
    return string?.length > n ? string.substr(0, n-1) + ' ...' : string
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${baseImageURL}${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {trancate(movie?.overview,150)}
        </h1>
      </div>

      <div className="banner--fadeButton" />
    </header>
  );
}

export default Banner;
