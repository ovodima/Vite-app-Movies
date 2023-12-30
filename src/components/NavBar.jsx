import React, { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constans/NavLink";

import Recomendation  from "../pages/Recomendation";
import Popular from "../pages/Popular";
import Form from "../pages/Form";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <BrowserRouter>
    <section>
      <nav className="w-full flex py-4 justify-between items-center navbar z-10">
        <h1 className="text-[16px] text-orangeColor xs: font-bold font-mono text-uppercase">
          Movies App
        </h1>
        <ul className='className="list-none sm:flex hidden justify-end items-center flex-1"'>
          {navLinks.map((nav, i) => (
            <li
              key={nav.id}
              className={` text-transform: uppercase font-mono font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-purpleColor" : "text-orangeColor"
              } ${i === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.id === "home" ? "/" : nav.id}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            width={28}
            height={28}
            className="object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex z-10"
          } p-6 bg-backgroundColor absolute top-20 right-0 mx-3 my-2 min-w-[140] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`text-transform:uppercase  font-bold font-mono cursor-pointer text-[24px] my-1  ${
                  active === nav.title ? "text-purpleColor" : "text-orangeColor"
                }`}
              >
                <Link to={nav.id === "home" ? "/" : nav.id}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/recomendation" element={<Recomendation  />} />
        <Route path="/form" element={<Form />} />
        <Route path="/search" element={<Search />} />
      </Routes>

    </BrowserRouter>
  );
};

export default NavBar;
