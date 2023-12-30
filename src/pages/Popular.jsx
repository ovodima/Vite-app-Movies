import React from "react";
import Movies from "../components/Movies";
import Links from "../constans/links";

const Popular = () => {
  return (
    <div>
      <Movies link={Links.popular} />
    </div>
  );
};

export default Popular;
