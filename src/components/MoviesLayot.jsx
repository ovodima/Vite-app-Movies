import React, { useState } from "react";

import Loading from "./Loading";

import Slider from "react-slick";
import { useRecoilState, useRecoilValue } from "recoil";
import { moviesDetails, moviesState } from "../constans/state";

import Links from "../constans/links";
import { Link } from "react-router-dom";

const MoviesLayot = (props) => {
  const { params, searchResults } = props;

  const [movies, setMovies] = useRecoilState(moviesState);
  const moviesValue = useRecoilValue(moviesState);
  const [, setMoviesDetails] = useRecoilState(moviesDetails);

  const setMovieDetail = (movie) => {
    setMovieDetail(movie);
  };

  return (
    <>
      {!searchResults && searchResults.lenght > 0 ? (
        <Loading />
      ) : (
        <Slider {...params}>
          {searchResults.map((item) => (
            <div key={item.id} className="my-8 mx-8 p-1">
              <Link
                to={`/movie/${item.id}`}
                onClick={() => setMoviesDetails(item)}
              >
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
      )}
    </>
  );
};

export default MoviesLayot;
