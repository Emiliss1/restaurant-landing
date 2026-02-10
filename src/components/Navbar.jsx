import { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export function Navbar({ active }) {
  const [burgerNav, setBurgerNav] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="justify-self-start z-100">
      <div className=" hidden md:flex justify-around  h-18 items-center text-zinc-100  font-medium text-lg">
        <div
          onClick={() => navigate("/")}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img src={logo} alt="logo" />
          <p>Restaurant</p>
        </div>
        <ul className="flex gap-8">
          <li
            onClick={() => navigate("/about-us")}
            className="group cursor-pointer"
          >
            About us{" "}
            <div
              className={`${active === "about" ? "w-full" : "w-0"} w-0 h-1 rounded-sm bg-zinc-100 mx-auto transition-all duration-200 group-hover:w-full`}
            ></div>
          </li>
          <li
            onClick={() => navigate("/menu")}
            className="group cursor-pointer"
          >
            Menu{" "}
            <div
              className={`${active === "menu" ? "w-full" : "w-0"} w-0 h-1 rounded-sm bg-zinc-100 mx-auto transition-all duration-200 group-hover:w-full`}
            ></div>
          </li>
          <li
            onClick={() => navigate("/locations")}
            className="group cursor-pointer"
          >
            Locations{" "}
            <div
              className={`${active === "locations" ? "w-full" : "w-0"} w-0 h-1 rounded-sm bg-zinc-100 mx-auto transition-all duration-200 group-hover:w-full`}
            ></div>
          </li>
        </ul>
        <button
          onClick={() => navigate("/reservation")}
          className="bg-gray-100 p-2 rounded-sm cursor-pointer hover:bg-gray-200/90 font-medium text-zinc-950 transition"
        >
          Reservation
        </button>
      </div>
      <div
        className={`flex md:hidden overflow-hidden flex-col transition-all duration-500 ${burgerNav ? "h-100" : "h-24"}  py-8 bg-zinc-900/80 `}
      >
        <div className="flex justify-between  px-8 items-center text-zinc-100  font-medium text-lg">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" />
            <p>Restaurant</p>
          </div>
          <GiHamburgerMenu
            onClick={() => setBurgerNav(!burgerNav)}
            className="text-4xl font-bold text-zinc-100 cursor-pointer hover:text-zinc-200"
          />
        </div>
        <ul
          className={`flex text-zinc-100 transition-all duration-800 ml-auto text-end mr-8 mt-8 text-3xl flex-col gap-8`}
        >
          <li className="group cursor-pointer">
            About us{" "}
            <div className="w-0 h-1 rounded-sm bg-zinc-100 mx-auto transition-all duration-200 group-hover:w-full"></div>
          </li>
          <li className="group cursor-pointer">
            Menu{" "}
            <div className="w-0 h-1 rounded-sm bg-zinc-100 mx-auto transition-all duration-200 group-hover:w-full"></div>
          </li>
          <li className="group cursor-pointer">
            Locations{" "}
            <div className="w-0 h-1 rounded-sm bg-zinc-100 mx-auto transition-all duration-200 group-hover:w-full"></div>
          </li>
          <button className="bg-gray-100 p-2 rounded-sm cursor-pointer hover:bg-gray-200/90 font-medium text-zinc-950 transition">
            Reservation
          </button>
        </ul>
      </div>
    </div>
  );
}
