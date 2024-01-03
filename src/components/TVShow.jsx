import React, { useState, useEffect } from "react";

import Loading from "./Loading";

import Slider from "react-slick";
import { useRecoilState, useRecoilValue } from "recoil";
import { moviesDetails, tvShowState } from "../constans/state";
import fetchMovies from "./Api";
import Links from "../constans/links";
import { Link } from "react-router-dom";




const TVShow = (props) => {
  const { link, params } = props;

  const [movies, setMovies] = useRecoilState(tvShowState);
  const moviesValue = useRecoilValue(tvShowState);
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
        <div key={item.id} className="my-8 mx-8 p-1">
          <Link to={`/movie/${item.id}`} onClick={() => setMoviesDetails(item)}>
            <div className="relative h-45 overflow-hidden">
            <img
              src={Links.imgPath + item.poster_path}
              alt="Sorry, but film maker dont give image"
              className="w-full h-full object- rounded-xl"
            />
            </div>

          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default TVShow;
