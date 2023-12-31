import React, { useState, useEffect } from "react";
import MoviesLayot from "./MoviesLayot";
import Loading from "./Loading";

import Slider from "react-slick";
import { useRecoilState, useRecoilValue } from "recoil";
import { moviesDetails, moviesState } from "../constans/state";
import fetchMovies from "./Api";
import Links from "../constans/links";
import { Link } from "react-router-dom";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "40px",
  slidesToShow: 4,
  speed: 600,
};

const Movies = (props) => {
  const { link } = props;

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
    <Slider {...settings}>
      {moviesValue.results.map((item) => (
        <div key={item.id} className="my-8 mx-8 p-1">
          
            <Link
              to={`/movie/${item.id}`}
              onClick={() => setMoviesDetails(item)}
            >
              <img src={Links.imgPath + item.poster_path} alt="Sorry, but film maker dont give image" height={500}/>
            </Link>
          
        </div>
      ))}
    </Slider>
  );
};

export default Movies;
