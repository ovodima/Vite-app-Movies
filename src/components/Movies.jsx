import React, { useState, useEffect } from "react";

import Loading from "./Loading";

import Slider from "react-slick";
import { useRecoilState, useRecoilValue } from "recoil";
import { moviesDetails, moviesState } from "../constans/state";
import fetchMovies from "./Api";
import Links from "../constans/links";
import { Link } from "react-router-dom";
import { layout } from "../constans/styles";




const Movies = (props) => {
  const { link, params } = props;

  const [movies, setMovies] = useRecoilState(moviesState);
  const moviesValue = useRecoilValue(moviesState);
  const [, setMoviesDetails] = useRecoilState(moviesDetails);

  const [loading, setLoading] = useState(true);

  const setMovieDetail = (movie) => {
    setMovieDetail(movie);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchMovies(link);
        setMovies(movies);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Slider {...params}>
      {moviesValue.results.map((item) => (
        <div key={item.id} className={layout.imgSection}>
          <Link to={`/movie/${item.id}`} onClick={() => setMoviesDetails(item)}>
            <div className=" overflow-hidden w-full h-full p-1">
            <img
              src={Links.imgPath + item.poster_path}
              alt={item.title}
              className="w-full h-full rounded-md"
            />
            </div>

          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default Movies;
