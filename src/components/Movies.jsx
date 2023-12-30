import React, { useState, useEffect } from "react";
import MoviesLayot from "./MoviesLayot";
import Loading from "./Loading";
import Slider from "react-slick";
import { useRecoilState, useRecoilValue } from "recoil";
import { moviesState } from "../constans/state";
import fetchMovies from "./Api";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "40px",
  slidesToShow: 3,
  speed: 600,
};

const Movies = (props) => {
  const { link } = props;

  const [movies, setMovies] = useRecoilState(moviesState);
  const moviesValue = useRecoilValue(moviesState);

  const [loading, setLoading] = useState(true);

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
        <MoviesLayot
          key={item.id}
          id={item.id}
          poster_path={item.poster_path}


          release_date={item.release_date}
          title={item.title}
        />
      ))}
    </Slider>
  );
};

export default Movies;
