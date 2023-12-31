import React from "react";
import { Link } from "react-router-dom";
import Links from "../constans/links";
import { moviesDetails } from "../constans/state";
import { useRecoilState } from "recoil";


export default function MoviesLayot(props) {
  const { title, id, poster_path, release_date, handleClick, routePath
  } = props;

  

  

  return (
    <div className="my-2">
      <div className="bg-orangeColor p-6 rounded-lg shadow-md m-4 max-w-md">
        <Link to={routePath} onClick={() => handleClick} className="block mb-4">
          <img
            src={Links.imgPath + poster_path}
            srcSet={Links.imgPath + poster_path}
            width={400}
            height={400}
            alt={title}
            className=" rounded-md object-cover"
          />
        </Link>
        <div className="flex flex-col items-center mx-5">
          <h1 className="text-xl font-bold text-nudeColor">{title}</h1>
          <h2 className="text-white">{release_date}</h2>
        </div>
      </div>
    </div>
  );
}
