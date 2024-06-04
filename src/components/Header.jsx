import React, { useEffect, useState } from "react";
import { getImages } from "./Api";
import { useRecoilValue } from "recoil";
import { moviesState } from "../constans/state";

const Header = () => {
  const moviesImg = useRecoilValue(moviesState);

  return (
    <div className="py-8 shadow-2xl m-8 h-[300px] flex items-center rounded-xl">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Hello my dear friends, It's demostration application simple version
          real project.All Rights Reserved. Author application:
          <a
            href="https://www.instagram.com/dima.tsx/"
            className="text-orangeColor"
          >
            dima.tsx
          </a>
        </h2>
        <p className="mt-4">Enjoy!</p>
      </div>
    </div>
  );
};

export default Header;
