import React from "react";
import Movies from "../components/Movies";
import Recomendation from "./Recomendation";
import styles from "../constans/styles";

import Links from "../constans/links";

const Home = () => {
  return (
    <div className={styles.marginY}>
      {/* <Recomendation className="sm: hidden mx-4" /> */}

      <Movies link={Links.all} />
    </div>
  );
};

export default Home;
