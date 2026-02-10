import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollAnimation } from "./ScrollAnimation";

export default function Menu() {
  const [dishType, setDishType] = useState("starter");

  const menu = [
    {
      title: "Dish title",
      price: "3.5",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/2/2015/03/Prawn-cocktail-ee87e39.jpg?quality=90&resize=700,466",
      type: "starter",
    },
    {
      title: "Dish title",
      price: "3.5",
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2021/06/Vegetable-Kabobs-001.jpg",
      type: "side",
    },
    {
      title: "Dish title",
      price: "3.5",
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2021/06/Vegetable-Kabobs-001.jpg",
      type: "side",
    },
    {
      title: "Dish title",
      price: "3.5",
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2021/06/Vegetable-Kabobs-001.jpg",
      type: "side",
    },
    {
      title: "Dish title",
      price: "3.5",
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2021/06/Vegetable-Kabobs-001.jpg",
      type: "side",
    },
    {
      title: "Dish title",
      price: "3.5",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/2/2019/10/134_Roma_9780451497017_art_r1-facac84.jpg?quality=90&resize=700,466",
      type: "Main",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header
        className={`h-120  overflow-hidden flex flex-col   w-full  bg-zinc-900 bg-blend-soft-light bg-[url(assets/background.webp)] bg-cover`}
      >
        <Navbar active="menu" />
        <div className="flex z-0 flex-col  w-full mt-20 px-8 sm:w-3/6 mx-auto ">
          <h1 className="text-zinc-100 mx-auto break-all 2xs:break-normal text-4xl 2xs:text-5xl xs:text-7xl  font-medium">
            Menu
          </h1>
          <p className="text-zinc-200 break-all  mt-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id
            tenetur error asperiores officiis aspernatur porro soluta ipsam aut,
            odio iusto dolorum esse alias incidunt consequatur velit sed quia
            neque.
          </p>
        </div>
      </header>
      <main className="overflow-hidden">
        <ScrollAnimation type="side">
          <section className="w-11/12 xl:w-[1200px] h-max text-zinc-100 bg-zinc-950 my-30 py-8 mx-auto">
            <div className="flex flex-col md:flex-row border-b-2 pb-4 text-lg gap-4 w-11/12 mx-auto  px-4">
              <div
                onClick={() => setDishType("starter")}
                className="group cursor-pointer flex flex-col"
              >
                <p>Starters</p>
                <div
                  className={`${dishType === "starter" ? "w-full" : "w-0"} transition-all duration-300 rounded-sm group-hover:w-full bg-zinc-100 h-1`}
                ></div>
              </div>
              <div
                onClick={() => setDishType("side")}
                className="group cursor-pointer flex flex-col"
              >
                <p>Sides</p>
                <div
                  className={`${dishType === "side" ? "w-full" : "w-0"} transition-all duration-300 rounded-sm group-hover:w-full bg-zinc-100 h-1`}
                ></div>
              </div>
              <div
                onClick={() => setDishType("Main")}
                className="group cursor-pointer flex flex-col"
              >
                <p>Main courses</p>
                <div
                  className={`${dishType === "Main" ? "w-full" : "w-0"} transition-all duration-300 rounded-sm group-hover:w-full bg-zinc-100 h-1`}
                ></div>
              </div>
              <div
                onClick={() => setDishType("desserts")}
                className="group cursor-pointer flex flex-col"
              >
                <p>desserts</p>
                <div
                  className={`${dishType === "desserts" ? "w-full" : "w-0"} transition-all duration-300 rounded-sm group-hover:w-full bg-zinc-100 h-1`}
                ></div>
              </div>
              <div
                onClick={() => setDishType("drinks")}
                className="group cursor-pointer flex flex-col"
              >
                <p>Drinks</p>
                <div
                  className={`${dishType === "drinks" ? "w-full" : "w-0"} transition-all duration-300 rounded-sm group-hover:w-full bg-zinc-100 h-1`}
                ></div>
              </div>
            </div>
            <div className="grid  justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6 w-11/12 mt-8 mx-auto">
              {menu.length > 0 && menu.some((men) => men.type === dishType) ? (
                menu.map((dish, index) => {
                  if (dish.type === dishType)
                    return (
                      <div
                        key={index}
                        className="w-11/12 sm:w-84  ease-in px-4 h-max flex flex-col items-center gap-2 text-center border-zinc-500  border-y-2 py-4"
                      >
                        <img
                          className="w-11/12 sm:w-84 h-54 object-cover"
                          src={dish.image}
                          alt={dish.title}
                        />
                        <div className="flex text-2xl justify-between w-full items-center">
                          <h1 className="text-2xl">{dish.title}</h1>
                          <p>{dish.price}€</p>
                        </div>
                      </div>
                    );
                })
              ) : !menu.some((men) => men.type === dishType) ? (
                <div className="text-lg">Currently there is no {dishType}</div>
              ) : (
                <div className="text-lg">Currently there is no dishes</div>
              )}
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
}
