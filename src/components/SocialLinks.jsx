import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ranjith-sm/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ranjithmahesh?tab=repositories",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ranjithmahesh1997@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="flex-col top-[35%] left-0 fixed lg:flex  hidden ">
      <ul>
        {links.map(({ item, i, href, download, style, child }) => (
          <li
            key={i}
            className={
              "flex justify-between items-center w-40 h-14  px-4  ml-[-100px] hover:ml-[-10px] bg-gray-500 hover:rounded-md duration-300 " +
              "" +
              style
            }
          >
            <a
              href={href}
              download={download}
              rel="noreferrer"
              target="_blank"
              className="flex justify-between w-full items-center text-white  "
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
