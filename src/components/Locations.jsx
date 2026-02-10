import { useEffect } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ScrollAnimation } from "./ScrollAnimation";

export default function Locations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <header
        className={`h-120  overflow-hidden flex flex-col   w-full  bg-zinc-900 bg-blend-soft-light bg-[url(assets/background.webp)] bg-cover`}
      >
        <Navbar active="locations" />
        <div className="flex z-0 flex-col  w-full mt-20 px-8 sm:w-3/6 mx-auto ">
          <h1 className="text-zinc-100 mx-auto break-all 2xs:break-normal text-4xl 2xs:text-5xl xs:text-7xl  font-medium">
            Locations
          </h1>
          <p className="text-zinc-200 break-all  mt-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id
            tenetur error asperiores officiis aspernatur porro soluta ipsam aut,
            odio iusto dolorum esse alias incidunt consequatur velit sed quia
            neque.
          </p>
        </div>
      </header>

      <main>
        <ScrollAnimation type="top">
          <section className="w-11/12 xl:w-[1200px] text-zinc-100 py-8 flex flex-col items-center h-max my-30 bg-zinc-900 mx-auto">
            <div className="w-11/12 border-b-2 border-[#ffb273] py-4">
              <h1 className="text-4xl break-all  text-center">Restaurant 1</h1>
              <h2 className="text-3xl text-center">City</h2>
              <div className="mt-8 flex flex-col gap-y-6 md:gap-y-0 md:flex-row items-center justify-between">
                <div className="flex-col flex gap-4">
                  <p className="text-2xl">Address street 48</p>
                  <p className="text-xl">
                    Contacts:{" "}
                    <span className="text-[#ffb273] ml-2">I-VI 10-22</span>
                  </p>
                  <p className="text-[#ffb273] text-xl">+123 213 2465</p>
                  <p className="text-[#ffb273] text-xl">Email@email.com</p>
                </div>
                <img
                  className="w-98  object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODt5tSsMIMFzaVP9v3v0DSGnaSF3RlZf9ow&s"
                  alt="restaurant"
                />
              </div>
            </div>
            <div className="w-11/12 border-b-2 border-[#ffb273] py-4">
              <h1 className="text-4xl break-all  text-center">Restaurant 2</h1>
              <h2 className="text-3xl text-center">City</h2>
              <div className="mt-8 flex flex-col gap-y-6 md:gap-y-0 md:flex-row items-center justify-between">
                <div className="flex-col flex gap-4">
                  <p className="text-2xl">Address street 48</p>
                  <p className="text-xl">
                    Contacts:{" "}
                    <span className="text-[#ffb273] ml-2">I-VI 10-22</span>
                  </p>
                  <p className="text-[#ffb273] text-xl">+123 213 2465</p>
                  <p className="text-[#ffb273] text-xl">Email@email.com</p>
                </div>
                <img
                  className="w-98  object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODt5tSsMIMFzaVP9v3v0DSGnaSF3RlZf9ow&s"
                  alt="restaurant"
                />
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
}
