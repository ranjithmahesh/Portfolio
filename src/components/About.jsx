import React from "react";

const About = () => {
  return (
    <div
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
      name="about"
    >
      <div className="max-w-screen-lg mx-auto flex-col flex w-full h-full p-4 justify-center">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className=" text-xl mt-5">
          I have a diverse background in both civil engineering and IT, with
          over 3 years of experience in the construction field, including
          prestigious projects like the Bangalore International Airport. I have
          developed strong project management skills, improved efficiency by
          20%, and reduced project costs by 25% through effective resource
          management.
        </p>
        <br />
        <p className="text-xl">
          Transitioning into the tech industry, I spent a year learning the MERN
          stack and have become proficient in full stack development, using
          technologies like Node.js, React.js, and MongoDB. I’ve worked on
          various projects involving user and product management, backend APIs,
          and frontend development with a focus on responsive design using
          Tailwind CSS.
        </p>
        <br />
        <p className="text-xl">
          I believe my unique combination of construction and IT experience,
          coupled with my project management skills, makes me well-suited for
          this role. I’m excited about the opportunity to contribute to your
          team and leverage my background to deliver impactful results.
        </p>
      </div>
    </div>
  );
};

export default About;
