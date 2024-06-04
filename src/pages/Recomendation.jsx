import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { moviesDetails, recommendations } from "../constans/state";

import { Link } from "react-router-dom";
import Links from "../constans/links";

const Recomendation = (props) => {
  const {  id, firstHeader } = props;
  const [recommendation, setRecommendation] = useRecoilState(recommendations);

  const [, setMoviesDetails] = useRecoilState(moviesDetails);

  const setMovieDetail = (movie) => {
    setMovieDetail(movie);
  };
  const recommendationsValue = useRecoilValue(recommendations);

  const getRecomedos = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjBmMzQ3ZGNjNzU4MmEzNGFhN2NjYmVjZDQ1ZGExNiIsInN1YiI6IjYxZmU1NWIzYmU2ZDg4MDAxYmIwZWU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gh3mzOznXDajgNrJIREaQq21Q6KX0eLx4ny2i74mlgc",
      },
    };

    try {
      const getRecom = await fetch(url, options);
      const res = await getRecom.json();

      setRecommendation(res);
    } catch (error) {
      console.error("Error fetching data: Recomendation", error);
    }
  };

  useEffect(() => {
    getRecomedos(id);
  }, [id]);

  if (!recommendationsValue.results) {
    return <p>No recomendos</p>;
  }
  return (
    <section className="w-full h-[300px] flex flex-col items-center justify-center m-4 p-4 ">
      <h2>{firstHeader}</h2>
      <div className="w-full h-full grid grid-cols-5">
        {recommendation.results.map((item) => (
          <div key={item.id} className="m-2">
            <Link
              to={`/recomendation/${item.id}`}
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
      </div>
    </section>
  );
};

export default Recomendation;
