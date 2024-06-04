import React, { useState } from "react";

import Links from "../constans/links";

import settingsSlider from "../constans/params";
import MovieLayot from "../components/MovieLayot";
import Header from "../components/Header";

const Popular = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Header />
      <MovieLayot
        movieLink={Links.popular + page}
        tvshowLink={Links.tvShowTop + page}
        sliderParams={settingsSlider}
        firstHeader="Popular movies"
        secondHeader="Popular tvshow"
      />
    </>
  );
};

export default Popular;
