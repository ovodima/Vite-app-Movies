import React, { useState } from "react";

import Links from "../constans/links";

import settingsSlider from "../constans/params";
import MovieLayot from "../components/MovieLayot";

const Popular = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="mx-4 my-4">
      <div className="">
        
        <MovieLayot
          movieLink={Links.popular + page}
          tvshowLink={Links.tvShowTop + page}
          sliderParams={settingsSlider}
          firstHeader="Popular movies"
          secondHeader="Popular tvshow"
        />
      </div>
      

    </div>
  );
};

export default Popular;
