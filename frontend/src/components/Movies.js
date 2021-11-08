import React, { Fragment, useState, useEffect } from "react";
import "../App.css";

const Movies = () => {
  useEffect(() => {
    const getAPI = () => {
      // Change this endpoint to whatever local or online address you have
      // Local PostgreSQL Database
      const API = "http://127.0.0.1:5000/";

      fetch(API)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setLoading(false);
          setApiData(data);
        });
    };
    getAPI();
  }, []);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <Fragment>
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        {loading === true ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section>
            {apiData.map((movie) => {
              let metaColor = "low";

              if (movie.meta_score >= 70) {
                metaColor = "high";
              } else if (movie.meta_score <= 69 && movie.meta_score >= 49) {
                metaColor = "medium";
              } else {
                metaColor = "low";
              }

              return (
                <div className="movie-container" key={String(movie.movie_id)}>
                  <h1>{movie.movie_name}</h1>
                  <p>
                    <strong>Director:</strong> {movie.director}
                  </p>
                  <p>
                    <strong>Genre:</strong> {movie.genre}
                  </p>
                  <img src={movie.img_url} alt={movie.movie_name} />

                  <p>
                    <strong>Meta Score:</strong>{" "}
                    <span className={metaColor}>{movie.meta_score}</span>
                  </p>
                  <p>
                    <strong>Runtime:</strong> {movie.movie_runtime}
                  </p>
                  <p>
                    <strong>Rating:</strong> {movie.rating}
                  </p>
                  <p>
                    <strong>Release Year:</strong> {movie.release_year}
                  </p>
                  <p>{movie.summary}</p>
                </div>
              );
            })}
          </section>
        )}
      </main>
    </Fragment>
  );
};

export default Movies;
