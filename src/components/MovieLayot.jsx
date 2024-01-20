import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  moviesDetails,
  moviesState,
  tvShowState,
  itemId,
} from "../constans/state";
import fetchMovies from "./Api";
import Links from "../constans/links";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const MovieLayot = (props) => {
  const [load, setLoad] = useState(true);

  const { movieLink, tvshowLink, sliderParams, firstHeader, secondHeader} = props;

  const [movies, setMovies] = useRecoilState(moviesState);
  const [show, setShow] = useRecoilState(tvShowState);

  const [itentity, setItentity] = useRecoilState(itemId);

  const showState = useRecoilValue(tvShowState);
  const moviesValue = useRecoilValue(moviesState);

  const [, setMoviesDetails] = useRecoilState(moviesDetails);

  const setMovieDetail = (movie) => {
    setMovieDetail(movie);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchMovies(movieLink);
        setMovies(movies);

        const tvShow = await fetchMovies(tvshowLink);
        setShow(tvShow);

        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchData``;

    console.log(showState);
  }, []);

  if (load) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div className=""> <h2>{firstHeader}</h2></div>
        <Slider {...sliderParams}>
          {moviesValue.results.map((item) => (
            <div
              key={item.id}
              className=""
              onClick={() => setItentity(item.id)}
            >
              <Link
                to={`/movie/${item.id}`}
                onClick={() => setMoviesDetails(item)}
              >
                <div className="">
                  <img
                    src={Links.imgPath + item.poster_path}
                    alt={item.title}
                    className="w-full h-full object- rounded-xl"
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </section>
      <section>
      <div className=""> <h2>{secondHeader}</h2></div>
        <Slider {...sliderParams}>
          {showState.results.map((item) => (
            <div
              key={item.id}
              className=""
              onClick={() => setItentity(item.id)}
            >
              <Link
                to={`/movie/${item.id}`}
                onClick={() => setMoviesDetails(item)}
              >
                <div className="">
                  <img
                    src={Links.imgPath + item.poster_path}
                    alt={item.title}
                    className="w-full h-full object- rounded-xl"
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default MovieLayot;
