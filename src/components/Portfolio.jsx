import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const Portfolio = () => {
  // const portfolios = [
  //   {
  //     id: 1,
  //     src: arrayDestruct,
  //   },
  //   {
  //     id: 2,
  //     src: reactParallax,
  //   },
  //   {
  //     id: 3,
  //     src: navbar,
  //   },
  //   {
  //     id: 4,
  //     src: reactSmooth,
  //   },
  //   {
  //     id: 5,
  //     src: installNode,
  //   },
  //   {
  //     id: 6,
  //     src: reactWeather,
  //   },
  // ];

  const portfolios = [
    {
      id: 1,
      name: "Real Estate",
      src: img1,
      demo: "https://mern-estate-q962.onrender.com/",
      code: "https://github.com/ranjithmahesh/RealEstate",
      title: "Full Stack project",
    },
    {
      id: 2,
      name: "Food App",

      src: img2,
      project: "React Native project",
      demo: "https://drive.google.com/file/d/1VP4TMaxJIiLtirefmLbM9ZI1wbSNjvK6/view?usp=sharing",
      title: "React Native project",

      code: "https://github.com/ranjithmahesh/FoodApp",
    },
    {
      id: 3,
      src: img3,
      demo: "https://spiffy-speculoos-1ff5c2.netlify.app/",
      title: "React JS project",
      name: "Food Cart",

      code: "https://github.com/ranjithmahesh/Food-cart",
    },
    {
      id: 4,
      src: img4,
      demo: "https://drive.google.com/file/d/1Whqu-1lvGifCjtJRMIdggg-0ed9B3eEK/view?usp=drivesdk",
      title: "React Native project",
      name: "News App",

      code: "https://github.com/ranjithmahesh/News_APP",
    },
    {
      id: 5,
      src: img5,
      name: "Laundary App",
      title: "React Native project",

      demo: "https://drive.google.com/file/d/1ULH8HSf8xx4dX6DeRND1SjMm3zarWxAI/view?usp=drive_link",
      code: "https://github.com/ranjithmahesh/laundry_app",
    },
    {
      id: 6,
      src: img6,
      name: "Gaming Site",
      title: "React JS project",

      demo: "https://65375b26e0affd285fbd76ee--capable-jalebi-a5085e.netlify.app/",
      code: "https://github.com/ranjithmahesh/Gameing-Site",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white   "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, demo, code, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-[250px] w-full object-contain bg-white"
              />
              <div className="pt-6">
                <p className="text-center ">{name}</p>
                <p className="text-center ">{title}</p>
              </div>

              <div className="flex items-center justify-center ">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(demo)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(code)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
