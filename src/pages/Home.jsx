import React, { useState } from "react";

import Links from "../constans/links";
import settingsSlider, { detailSlider } from "../constans/params";
import Header from "../components/Header";
import MovieLayot from "../components/MovieLayot";

const Home = () => {
  const [page, setPage] = useState(1);
  
  return (
    <>
      
        <Header/>
        
      <div>
        <div className="">
          <MovieLayot
            movieLink={Links.topWeek + page}
            tvshowLink={Links.tvShowInAir + page}
            sliderParams={settingsSlider}
            firstHeader="Top of the week"
            secondHeader="Best Today TVShow in the World"
          />
        </div>

        <button onClick={() => setPage((page) => page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Home;
