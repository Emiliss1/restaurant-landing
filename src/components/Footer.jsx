import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full flex  flex-col h-max bg-zinc-950">
      <div className="text-center px-4 text-zinc-100 py-16">
        <h1 className="text-3xl">Ready to dine with us?</h1>
        <p className="text-zinc-300 mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
        </p>
        <div className="flex mt-2 justify-center">
          <button
            onClick={() => navigate("/reservation")}
            className="bg-gray-100 p-2 font-medium text-lg mt-3 text-zinc-950 rounded-sm cursor-pointer hover:bg-gray-200/90"
          >
            Reserve a table
          </button>
        </div>
      </div>
      <div className=" items-center border-t-1 text-zinc-500 grid grid-cols-1  justify-items-center sm:justify-items-start gap-y-4 sm:gap-y-0 sm:grid-cols-3 px-4 py-12">
        <div className="flex 2xl:flex-row flex-col gap-4">
          <div className="flex items-center text-zinc-100 gap-2">
            <FaPhoneAlt />
            <p>+123 222 33311</p>
          </div>
          <div className="flex items-center text-zinc-100 gap-2">
            <MdEmail className="text-xl" />
            <p>Email@email.com</p>
          </div>
          <div className="flex items-center text-zinc-100 gap-2">
            <TiLocation className="text-xl" />
            <p>adress street 48</p>
          </div>
        </div>
        <div className="text-zinc-500 mx-auto text-center">
          <p>© 2026 Restaurant || All Rights Reserved.</p>
        </div>
        <div className="flex gap-2 mx-0 sm:ml-auto text-2xl text-zinc-100 items-center">
          <FaSquareFacebook className="cursor-pointer hover:text-zinc-300" />
          <RiInstagramFill className="cursor-pointer hover:text-zinc-300" />
          <AiFillTikTok className="cursor-pointer hover:text-zinc-300" />
        </div>
      </div>
    </footer>
  );
}
