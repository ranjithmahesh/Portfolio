import React from "react";
import profile from "../assets/profile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


function Home() {
  return (
    <div
      name="home"
      className=" h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className=" flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            i love building and desgining software. Currently, working on web
            application using technologies like React, Node JS and Express JS.
          </p>
          <div>
            <Link to='portfolio' duration={500} className="group rounded-md flex text-white px-6 py-3 w-fit items-center cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500  ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="Ranjith"
            className=" rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
