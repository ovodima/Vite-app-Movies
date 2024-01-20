import React, { useState } from "react";

import Links from "../constans/links";
import settingsSlider from "../constans/params";
import Header from "../components/Header";
import MovieLayot from "../components/MovieLayot";

const Home = () => {
  const [page, setPage] = useState(1);
  console.log(page);
  return (
    <>
      <Header />
      <div>
        <div className="">
          <MovieLayot
            movieLink={Links.tvShowToday + page}
            tvshowLink={Links.tvShowInAir + page}
            sliderParams={settingsSlider}
            firstHeader="Show Today"
            secondHeader="Best Today TVShow in the World"
          />
        </div>

        <button onClick={() => setPage((page) => page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Home;
