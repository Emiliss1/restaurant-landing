import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export default function Reservation() {
  const [restaurantIndex, setRestaurantIndex] = useState(null);

  const restaurants = [
    {
      restaurant: "restaurant 1",
      city: "City",
      address: "address",
      image:
        "https://ca-times.brightspotcdn.com/dims4/default/a536579/2147483647/strip/true/crop/2880x1920+0+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F5b%2Fdced3ab54ebab4a1477f4168f737%2F938247-tn-wknd-me-outdoor-patio-dining-chachas-20220410-12.jpg",
      bannerImg:
        "https://www.rijksmuseum.nl/assets/6c9b72ab-e13e-42d2-96a8-4c1e9c74886e?w=1200&h=630&fx=3470&fy=2313&c=3de26b4a182aa8c31b8e496988f0ff0a61359d33dca3ea79ff862ebf71fa0eba",
    },
    {
      restaurant: "restaurant 2",
      city: "City",
      address: "address",
      image:
        "https://ca-times.brightspotcdn.com/dims4/default/a536579/2147483647/strip/true/crop/2880x1920+0+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F5b%2Fdced3ab54ebab4a1477f4168f737%2F938247-tn-wknd-me-outdoor-patio-dining-chachas-20220410-12.jpg",
      bannerImg:
        "https://www.rijksmuseum.nl/assets/6c9b72ab-e13e-42d2-96a8-4c1e9c74886e?w=1200&h=630&fx=3470&fy=2313&c=3de26b4a182aa8c31b8e496988f0ff0a61359d33dca3ea79ff862ebf71fa0eba",
    },
    {
      restaurant: "restaurant 3",
      city: "City",
      address: "address",
      image:
        "https://ca-times.brightspotcdn.com/dims4/default/a536579/2147483647/strip/true/crop/2880x1920+0+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F5b%2Fdced3ab54ebab4a1477f4168f737%2F938247-tn-wknd-me-outdoor-patio-dining-chachas-20220410-12.jpg",
      bannerImg:
        "https://www.rijksmuseum.nl/assets/6c9b72ab-e13e-42d2-96a8-4c1e9c74886e?w=1200&h=630&fx=3470&fy=2313&c=3de26b4a182aa8c31b8e496988f0ff0a61359d33dca3ea79ff862ebf71fa0eba",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <section
        className={`h-120  overflow-hidden flex flex-col   w-full  bg-zinc-900 bg-blend-soft-light bg-[url(assets/background.webp)] bg-cover`}
      >
        <Navbar />
        <div className="flex z-0 flex-col  w-full mt-20 px-8 sm:w-3/6 mx-auto ">
          <h1 className="text-zinc-100 mx-auto break-all 2xs:break-normal text-4xl 2xs:text-5xl xs:text-7xl  font-medium">
            Reservation
          </h1>
          <p className="text-zinc-200 break-all  mt-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id
            tenetur error asperiores officiis aspernatur porro soluta ipsam aut,
            odio iusto dolorum esse alias incidunt consequatur velit sed quia
            neque.
          </p>
        </div>
      </section>
      <section className="w-11/12 xl:w-[1200px] text-zinc-100 pb-8 relative   h-max my-30 bg-zinc-900 mx-auto">
        <div
          className={`${typeof restaurantIndex === "number" ? "opacity-0 invisible absolute w-full" : "opacity-100 visible"}  duration-500 mt-8 transition-all `}
        >
          <div className="text-xl border-b w-11/12 mx-auto border-zinc-500 text-center py-2">
            <h1>Choose a restaurant you want to make a reservation at</h1>
          </div>
          <div
            className={
              "mt-8 w-11/12 mx-auto justify-items-center grid gap-y-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            }
          >
            {restaurants.length > 0 &&
              restaurants.map((restaurant, index) => (
                <div
                  key={index}
                  onClick={() => setRestaurantIndex(index)}
                  style={{ backgroundImage: `url(${restaurant.image})` }}
                  className={`w-11/12 sm:w-82 h-64 cursor-pointer hover:border-b-8  border-[#ffb273] transition-all delay-100 duration-300  bg-cover items-center  justify-end flex flex-col`}
                >
                  <div className="bg-zinc-900/50 text-lg flex-col flex items-center w-full">
                    <h1 className="text-xl border-b-2 w-11/12 text-center border-[#ffb273]">
                      {restaurant.restaurant}
                    </h1>
                    <p>{restaurant.city}</p>
                    <p>{restaurant.address}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div
          className={` ${typeof restaurantIndex === "number" ? "opacity-100 visible" : "opacity-0 invisible absolute h-0"}    overflow-hidden transition-all delay-500 duration-500`}
        >
          <div
            style={{
              backgroundImage: `url(${typeof restaurantIndex === "number" && restaurants[restaurantIndex].image})`,
            }}
            className="w-full flex items-center justify-center bg-cover bg-center h-92 bg-zinc-700/50 bg-blend-soft-light"
          >
            <h1 className="text-4xl sm:text-5xl">
              {typeof restaurantIndex === "number" &&
                restaurants[restaurantIndex].restaurant}
            </h1>
          </div>
          <p className="text-center break-all mt-8 px-4 sm:px-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            rerum quae magni ab error cumque totam incidunt obcaecati! Error
            illum a illo laudantium minus nam velit hic at vero totam!
          </p>
          <div className="flex justify-center mt-4">
            <button className="py-1 w-48 text-lg text-white bg-[#ffb273] cursor-pointer hover:bg-[#ffa861]">
              Book a table
            </button>
          </div>
          <div className="flex justify-center sm:justify-start">
            <button
              onClick={() => setRestaurantIndex(null)}
              className="py-1 w-5/6 sm:w-32  sm:ml-8 mt-12 bg-zinc-100 text-zinc-950 text-lg cursor-pointer hover:bg-zinc-200"
            >
              Back
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
