import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { itemId, moviesDetails, recommendations } from "../constans/state";
detailSlider

import Links from "../constans/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faStar,
  faCalendar,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import Recomendation from "../pages/Recomendation";
import { detailSlider } from "../constans/params";

const like = <FontAwesomeIcon icon={faThumbsUp} />;
const star = <FontAwesomeIcon icon={faStar} />;
const calendar = <FontAwesomeIcon icon={faCalendar} />;
const dislike = <FontAwesomeIcon icon={faThumbsDown} />;

const MoviesDetail = () => {
  const [selectMovies, setSelectMovies] = useRecoilState(moviesDetails);
  const {
    id,
    vote_average,
    vote_count,
    release_date,
    original_language,
    backdrop_path,
    poster_path,
    title,
    overview,
  } = selectMovies;

  

  const [likes, setLike] = useState(vote_count);
  const [check, setCheck] = useState(false);

  const hadleLike = () => {
    if (!check) {
      setLike(likes + 1);
    } else {
      setLike(likes - 1);
    }
    setCheck(!check);
  };

  const voteRate = (vote) => {
    if (vote >= 8) {
      return "bg-voteGreen";
    } else if (vote >= 5) {
      return "bg-voteYellow";
    } else {
      return "bg-voteRed";
    }
  };

 

  
  return (
    <div className="flex flex-col items-center mx-2 my-4 w-full">
      <img
        src={Links.imgPath + backdrop_path}
        alt={title}
        className="w-full rounded-xl"
      />
      <h2 className=" text-nudeColor hover:text-orangeColor font-sans subpixel-antialiased text-xl font-bold">
        {title}
      </h2>
      <div className=" w-full  flex items-center justify-between my-4">
        <span
          className={`p-1 rounded-md font-semibold ${voteRate(vote_average)}`}
        >
          {star} {vote_average.toFixed(1)}
        </span>
        <span className="mx-4 bg-orangeColor p-2 rounded-md text-secondaryColor font-bold">
          {calendar} {release_date}
        </span>
        <span
          className="bg-orangeColor p-2 m-2 rounded-xl cursor-pointer font-semibold"
          onClick={hadleLike}
        >
          {" "}
          {!check ? like : dislike} {likes}
        </span>
      </div>
      <p className="">{overview}</p>
      <div>
        
      <Recomendation  id={id} firstHeader='Recomendation'/>
      </div>
    </div>
  );
};

export default MoviesDetail;
