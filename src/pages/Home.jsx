import React, { useState } from "react";
import Movies from "../components/Movies";
import Recomendation from "./Recomendation";
import styles from "../constans/styles";
import TVShow from "../components/TVShow";
import Links from "../constans/links";
import settingsSlider from "../constans/params";

const Home = () => {

  const [page, setPage] = useState(3)
  return (
    <div className={styles.marginY}>
      {/* <Recomendation className="sm: hidden mx-4" /> */}
      <div className="">
      <h2>Best Today TVShow in the World</h2>
      <Movies link={Links.tvShowToday + page} params={settingsSlider}/>
      </div>
      <div className="">
      <h2>TVShow Now in air</h2>
      <TVShow link={Links.tvShowInAir + page} params={settingsSlider} />
      </div>
      
    </div>
  );
};

export default Home;
