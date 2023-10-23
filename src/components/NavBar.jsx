import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Links } from "../assets/data";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 fixed text-white bg-black px-4">
      <div>
        <h1
          className="text-5xl ml-2 font-signature cursor-pointer
        "
        >
          <Link to="home" smooth duration={500}>Ranjith</Link>
        </h1>
      </div>

      <ul className=" hidden md:flex">
        {Links.map(({ link, i }) => (
          <li
            key={i}
            className=" px-4 
        cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200    "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav ? (
        <ul className="flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500  ">
          {Links.map(({ link, i }) => (
            <li
              key={i}
              className=" px-4  py-6 text-4xl
        cursor-pointer capitalize hover:scale-105 duration-200    "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default NavBar;
