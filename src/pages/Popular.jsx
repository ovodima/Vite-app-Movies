import React from "react";
import Movies from "../components/Movies";
import Links from "../constans/links";
import TVShow from "../components/TVShow";
import settingsSlider from "../constans/params";







const Popular = () => {


  return (
    <div className='mx-4 my-4'>
      <div className="mx-2 my-2">
        <h2>Popular</h2>
        <Movies link={Links.popular} params={settingsSlider} />
      </div>
      <div className="mx-2 my-2">
        <h2>Popular TV-Show</h2>
        <TVShow link={Links.tvShow} params={settingsSlider} />
      </div>
    </div>
  );
};

export default Popular;
