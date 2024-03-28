import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../axios";
import { API_KEY, image_url } from "../../constants/Constants";

const Banner = () => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      setMovie(response.data.results[randomIndex]);
    });
  }, []);

  return (
    <div className="banner" style={{ backgroundImage: `url(${image_url}${movie.backdrop_path})` }}>
      <div className="content">
        <h1 className="title">{movie.name}</h1>
        <p className="description">{movie.overview}</p>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
