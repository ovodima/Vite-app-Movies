import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { imageData, itemId, moviesDetails } from "../constans/state";

import Links from "../constans/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faStar,
  faCalendar,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";



const like = <FontAwesomeIcon icon={faThumbsUp} />;
const star = <FontAwesomeIcon icon={faStar} />;
const calendar = <FontAwesomeIcon icon={faCalendar} />;
const dislike = <FontAwesomeIcon icon={faThumbsDown} />;

const MoviesDetail = () => {
  const [selectMovies, setSelectMovies] = useRecoilState(moviesDetails);
  const {
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
  const id = useRecoilValue(itemId);
  console.log(id)

  useEffect(() => {
    
    const fetchImg = async (id) => {
      const url = `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjBmMzQ3ZGNjNzU4MmEzNGFhN2NjYmVjZDQ1ZGExNiIsInN1YiI6IjYxZmU1NWIzYmU2ZDg4MDAxYmIwZWU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gh3mzOznXDajgNrJIREaQq21Q6KX0eLx4ny2i74mlgc",
        },
      };
  
      try {
        const images = await fetch(url, options);
        const res = await images.json();
        console.log(res)
        // setImageData(res)
      } catch (error) {
        console.error("Error fetching data: img", error);
      }
    };

    
  fetchImg(id)
  
    
  }, [])
  

  return (
    <div className="flex flex-col items-center mx-2 my-4 w-full">
      <img
        src={Links.imgPath + backdrop_path}
        // srcSet={Links.imgPath + poster_path}
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
      <p className=''>
        {overview}
      </p>
    
      
    </div>
  );
};

export default MoviesDetail;
