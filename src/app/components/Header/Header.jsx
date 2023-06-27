import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsInstagram,
  BsSearch
} from "react-icons/bs";

const Header = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Articles",
    },
    {
      id: 4,
      name: "Contact Us",
    },
  ];

  const socialMediaItems = [
    {
      id: 1,
      logo: <BsFacebook />,
    },
    {
      id: 2,
      logo: <BsTwitter />,
    },
    {
      id: 3,
      logo: <BsYoutube />,
    },
    {
      id: 4,
      logo: <BsPinterest />,
    },
    {
      id: 5,
      logo: <BsInstagram />,
    },
  ];

  return (
    <div className="bg-black bg-opacity-20 absolute top-0 left-0 w-full text-white">
      <div className="container px-[70px] py-[29px] flex items-center justify-between">
        <Link className="text-white text-[20px] font-bold" href="/">
          RUNO
        </Link>
        <div className="flex items-center gap-[17px]">
          <nav className="flex items-center">
            <ul className="flex items-center gap-[25px]">
              {navItems.map((item) => (
                <li
                  className={`flex items-center py-[2px] ${
                    item.name === "Home"
                      ? "border-b-[2px] border-b-[#D4A373]"
                      : null
                  }`}
                  key={item.id}
                >
                  <Link href="/">{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <span className="h-[20px] w-[1px] bg-white" />
          <ul className="flex items-center gap-[18px]">
            {socialMediaItems.map((item) => (
              <li className="py-[2px]" key={item.id}>
                <Link href="/">{item.logo}</Link>
              </li>
            ))}
          </ul>
          <span className="h-[20px] w-[1px] bg-white" />
          <button className="py-[2px]">
            <BsSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
