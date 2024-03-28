import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../axios";
import { API_KEY, image_url } from "../../constants/Constants";
import YouTube from "react-youtube";
const Row = (props) => {
  const [movies, setMovies] = useState([]);
  
  const [urlId, setUrlId] = useState();
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
      console.log("OEILF:JKGMNL:EKFJJ",response.data.results);
    });
  });
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          alert("ARREY LENGTH IS 0");
        }
      });
  };
  return (
    <div className="row">
    <h3>{props.title}</h3>
    <div className="posters">
      {movies.map((obj) => (
        <div className="poster-container" key={obj.id}>
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${image_url + obj.backdrop_path}`}
            alt="poster"
          />
          <p className="movie-name">{obj.title ? obj.title: obj.name}</p>
        </div>
      ))}
    </div>
    {urlId && <YouTube videoId={urlId.key} opts={opts} />}
  </div>
  );
};

export default Row;
