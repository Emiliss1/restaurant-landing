import React, { useEffect, useRef } from "react";
import background from "../assets/background.webp";
import { Navbar } from "./Navbar";
import down from "../assets/down-arrow.png";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";
import { Footer } from "./Footer";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollAnimation } from "./ScrollAnimation";

export default function Main() {
  const [index, setIndex] = useState(0);
  const [topOffSet, setTopOffSet] = useState(0);
  const [rect, setRect] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const navigate = useNavigate();

  const dishes = [
    {
      image:
        "https://www.bhf.org.uk/-/media/images/information-support/heart-matters/2020/june-2020/restaurant-style-recipes/tuna_steak_620x400.jpg?rev=8e89f93ef6c7474083653bfa78c16a0a&la=en&h=400&w=620&hash=5309C9457B2C88A97F3A0B314B84918E",
      title: "Lorem ipsum dolor sit",
    },
    {
      image:
        "https://www.bhf.org.uk/-/media/images/information-support/heart-matters/2020/june-2020/restaurant-style-recipes/tuna_steak_620x400.jpg?rev=8e89f93ef6c7474083653bfa78c16a0a&la=en&h=400&w=620&hash=5309C9457B2C88A97F3A0B314B84918E",
      title: "Lorem ipsum dolor sit",
    },
    {
      image:
        "https://www.bhf.org.uk/-/media/images/information-support/heart-matters/2020/june-2020/restaurant-style-recipes/tuna_steak_620x400.jpg?rev=8e89f93ef6c7474083653bfa78c16a0a&la=en&h=400&w=620&hash=5309C9457B2C88A97F3A0B314B84918E",
      title: "Lorem ipsum dolor sit",
    },
    {
      image:
        "https://www.bhf.org.uk/-/media/images/information-support/heart-matters/2020/june-2020/restaurant-style-recipes/tuna_steak_620x400.jpg?rev=8e89f93ef6c7474083653bfa78c16a0a&la=en&h=400&w=620&hash=5309C9457B2C88A97F3A0B314B84918E",
      title: "Lorem ipsum dolor sitassdasdasdasds",
    },
  ];

  const newsItems = [
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.6669164481079056xw:1xh;center,top&resize=1200:*",
      title: "20% Off for steaks",
      desc: "Lorem ipsum doloasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar sit amet consectetur adipisicing elit. Sit",
      hashTitle: "news-1",
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.6669164481079056xw:1xh;center,top&resize=1200:*",
      title: "20% Off for steaks",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit",
      hashTitle: "news-2",
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.6669164481079056xw:1xh;center,top&resize=1200:*",
      title: "20% Off for steaks",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit",
      hashTitle: "news-2",
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.6669164481079056xw:1xh;center,top&resize=1200:*",
      title: "20% Off for steaks",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit",
      hashTitle: "news-4",
    },
  ];

  const width = 300;

  const visibleCards =
    window.innerWidth > 1024
      ? 3
      : 1024 > window.innerWidth && window.innerWidth > 768
        ? 2
        : 1;

  const maxIndex = dishes.length - visibleCards;

  const ref = useRef(null);

  const onScroll = (e) => {
    setScrollTop(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setRect(ref.current.getBoundingClientRect().height);
    setTopOffSet(window.pageYOffset);

    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [scrollTop]);

  const handleDishSlider = (type) => {
    if (type === "next") {
      if (index < maxIndex) setIndex(index + 1);
    }
    if (type === "prev") {
      if (index > 0) setIndex(index - 1);
    }
  };

  return (
    <div>
      <header
        ref={ref}
        className={`min-h-[900px] h-screen overflow-hidden z-100 flex flex-col justify-between  w-full  bg-zinc-800 bg-blend-soft-light bg-[url(./assets/background.webp)] bg-cover`}
      >
        <Navbar />
        <div className="flex flex-col  w-full px-8 sm:w-3/6 mx-auto ">
          <h1 className="text-zinc-100 mx-auto break-all 2xs:break-normal text-4xl 2xs:text-5xl xs:text-7xl  font-medium">
            Restaurant
          </h1>
          <p className="text-zinc-200 break-all  mt-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id
            tenetur error asperiores officiis aspernatur porro soluta ipsam aut,
            odio iusto dolorum esse alias incidunt consequatur velit sed quia
            neque.
          </p>
          <p className="text-center text-zinc-100 mt-12">
            Interested in dining with us?
          </p>
          <div className="flex  justify-center">
            <button
              onClick={() => navigate("/reservation")}
              className="bg-gray-100 p-2 font-medium text-lg mt-3 text-zinc-950 rounded-sm cursor-pointer hover:bg-gray-200/90"
            >
              Reserve a table
            </button>
          </div>
        </div>
        <img className="h-16 w-16 mx-auto  mb-8" src={down} alt="arrow" />
      </header>

      <main className="overflow-hidden">
        <div className="bg-zinc-900">
          <ScrollAnimation type="top">
            <section className="h-max py-4 pb-8 w-full bg-zinc-900 mt-20">
              <h1 className="text-zinc-100 text-5xl text-center py-2">News</h1>
              <div className="grid grid-cols-1 2md:grid-cols-3 gap-y-4 md:gap-y-0 sm:grid-cols-2 justify-items-center items-center mx-0  xs:mx-auto mt-2 w-full xs:w-max  gap-x-8 ">
                {newsItems.length > 0 &&
                  newsItems.map((item, index) => (
                    <div key={index}>
                      {index < 3 ? (
                        <div
                          key={index}
                          className="w-11/12 mx-auto xs:mx-0 2xs:w-64 flex flex-col rounded-sm text-zinc-100 pb-4  text-center h-78 bg-zinc-800"
                        >
                          <img
                            className="p-2 max-h-42 w-full rounded-xl mx-auto"
                            src={item.image}
                            alt={item.title}
                          />
                          <p className="text-lg">{item.title}</p>
                          <p className="text-zinc-200  px-2 truncate break-all">
                            {item.desc}
                          </p>
                          <div className="flex mt-auto justify-center">
                            <button
                              onClick={() =>
                                navigate(`/news/${item.hashTitle}`)
                              }
                              className="py-2 w-5/6 rounded-sm bg-gray-100 cursor-pointer text-zinc-950 text-lg font-medium hover:bg-gray-200/90"
                            >
                              More
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="hidden"></div>
                      )}
                    </div>
                  ))}
              </div>
            </section>
          </ScrollAnimation>

          <div className="h-[1.5px] w-11/12 mx-auto bg-zinc-800"></div>
          <ScrollAnimation type="side">
            <section className="w-full h-max py-4 flex items-center justify-center bg-zinc-900 mb-48 ">
              <div className="w-5/6 flex flex-col lg:flex-row lg:gap-y-0 gap-y-8 gap-4 items-center justify-around">
                <div className="text-zinc-100 w-11/12  sm:w-120 breal-all flex flex-col items-center sm:items-start gap-2">
                  <h1 className="text-3xl">About us</h1>
                  <p className="text-zinc-200 break-all w-5/6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat sequi eum non, et suscipit dolorem ipsum, culpa
                    excepturi eaque quibusdam sit. Deleniti, tenetur doloremque
                    ad culpa nisi suscipit! Sed, porro.
                  </p>
                  <button
                    onClick={() => navigate("/about-us")}
                    className="p-2 w-5/6  lg:w-max bg-gray-100 cursor-pointer text-zinc-950 font-bold text-xl md:text-lg md:font-medium hover:bg-gray-200/90"
                  >
                    More about us
                  </button>
                </div>
                <div className="w-full sm:w-110 h-full p-4 mt-4 bg-zinc-800">
                  <img
                    className="w-full sm:w-120 -ml-2 xs:-ml-8 -mt-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODt5tSsMIMFzaVP9v3v0DSGnaSF3RlZf9ow&s"
                    alt="restaurant"
                  />
                </div>
              </div>
            </section>
          </ScrollAnimation>
        </div>

        <ScrollAnimation type={"top"}>
          <section className="w-full  py-8 h-max py-4 mb-40 text-zinc-100 bg-zinc-950 bg-cover">
            <h1 className="text-5xl pl-16">Menu</h1>
            <div className="w-11/12 mx-auto bg-zinc-800 h-[1px] mt-4 mb-4"></div>
            <div className="flex  mx-auto justify-center items-center gap-4 overflow-hidden">
              <GrPrevious
                onClick={() => handleDishSlider("prev")}
                className={`text-3xl hidden xs:block  ${index > 0 ? "hover:text-gray-300 cursor-pointer" : "text-gray-500"}`}
              />
              <div className="w-[250px] sm:w-[300px] md:w-[600px] lg:w-[900px] overflow-hidden">
                <div
                  className="w-max flex transition-transform duration-500 ease-in-out items-center justify-center gap-8"
                  style={{
                    transform: `translateX(-${index * width}px)`,
                  }}
                >
                  {dishes.length > 0 &&
                    dishes.map((dish, index) => (
                      <div
                        key={index}
                        className="h-80 w-64 xs:w-68 bg-zinc-900"
                      >
                        <img
                          className="h-64 w-full object-cover"
                          src={dish.image}
                          alt={dish.title}
                        />
                        <p className="text-center py-2 font-medium">
                          {dish.title}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              <GrNext
                onClick={() => handleDishSlider("next")}
                className={`text-3xl hidden xs:block ${index < maxIndex ? "hover:text-gray-300 cursor-pointer" : "text-gray-500"}  `}
              />
            </div>
            <div className="flex xs:hidden justify-center mt-4 gap-8">
              <GrPrevious
                onClick={() => handleDishSlider("prev")}
                className={`text-4xl ${index > 0 ? "hover:text-gray-300 cursor-pointer" : "text-gray-500"}`}
              />
              <GrNext
                onClick={() => handleDishSlider("next")}
                className={`text-4xl  ${index < maxIndex ? "hover:text-gray-300 cursor-pointer" : "text-gray-500"}  `}
              />
            </div>

            <div className="w-11/12 mx-auto bg-zinc-800 h-[1px] mt-4 mb-4"></div>
            <p className="text-center text-gray-200">View our full menu</p>
            <div className="flex justify-center mt-1">
              <button
                onClick={() => navigate("/menu")}
                className="py-1 w-32 text-lg text-white bg-[#ffb273] cursor-pointer hover:bg-[#ffa861]"
              >
                Menu
              </button>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <div
        className={`z-100 fixed ${topOffSet > rect ? "opacity-100 " : "opacity-0"} bottom-0 mr-10 mb-20 transition-all duration-500 right-0`}
      >
        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          aria-label="To the top"
          className="w-12  h-12 rounded-xl bg-zinc-100 text-zinc-950 flex justify-center items-center text-lg cursor-pointer hover:bg-zinc-200"
        >
          <FaArrowUp />
        </button>
      </div>

      <Footer />
    </div>
  );
}
