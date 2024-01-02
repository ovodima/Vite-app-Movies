import React, { useEffect, useState } from "react";
import Catalog from "../components/Catalog";

import Loading from "../components/Loading";
import Links from "../constans/links";
import fetchMovies from "../components/Api";


// const images = [
//   "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   "https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   "https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// ];

const images = [
  'https://image.tmdb.org/t/p/w1280/tmttRFo2OiXQD0EHMxxlw8EzUuZ.png',
  'https://image.tmdb.org/t/p/w1280/tmttRFo2OiXQD0EHMxxlw8EzUuZ.png',
  'https://image.tmdb.org/t/p/w1280/tmttRFo2OiXQD0EHMxxlw8EzUuZ.png',
  'https://image.tmdb.org/t/p/w1280/tmttRFo2OiXQD0EHMxxlw8EzUuZ.png',
  'https://image.tmdb.org/t/p/w1280/tmttRFo2OiXQD0EHMxxlw8EzUuZ.png',
  'https://image.tmdb.org/t/p/w1280/tmttRFo2OiXQD0EHMxxlw8EzUuZ.png',
]


const Recomendation = () => {
 


 
  

  if (!images) {
    return <Loading />;
  } else {
    return (
      <div className="w-40 h-40">
        
        
      </div>
    );
  }
};

export default Recomendation;
