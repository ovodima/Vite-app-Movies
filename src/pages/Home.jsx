import React, { useState } from "react";
import Movies from "../components/Movies";
import Recomendation from "./Recomendation";
import styles, { layout } from "../constans/styles";
import TVShow from "../components/TVShow";
import Links from "../constans/links";
import settingsSlider from "../constans/params";
import Header from "../components/Header";


const Home = () => {
  const [page, setPage] = useState(3);
  return (
    <>
    <Header />
    <div >
      
      <div className={layout.slider}>
        <h2 >Best Today TVShow in the World</h2>
        <Movies link={Links.tvShowToday + page} params={settingsSlider} />
      </div>
      <div className={layout.slider}>
        <h2 >TVShow Now in air</h2>
        <TVShow link={Links.tvShowInAir + page} params={settingsSlider} />
      </div>

      <button onClick={() => setPage(page => page++)}>Next</button>
    </div>
    </>
  );
};

export default Home;
