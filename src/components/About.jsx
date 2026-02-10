import { useEffect } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ScrollAnimation } from "./ScrollAnimation";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header
        className={`h-120  overflow-hidden flex flex-col   w-full  bg-zinc-900 bg-blend-soft-light bg-[url(assets/background.webp)] bg-cover`}
      >
        <Navbar active="about" />
        <div className="flex z-0 flex-col  w-full mt-20 px-8 sm:w-4/6 mx-auto ">
          <h1 className="text-zinc-100 mx-auto break-all  text-4xl 2xs:text-5xl xs:text-7xl  font-medium">
            About us
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
          <section className="h-max py-8 flex items-center text-zinc-100 w-11/12 xl:w-[1200px] break-all mx-auto my-28 bg-zinc-900">
            <div className="flex flex-col md:flex-row gap-4 px-8 border-y w-11/12 border-zinc-500 mx-auto py-4">
              <div className="flex w-full flex-col gap-2">
                <h1 className="text-4xl">Header</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  alias earum architecto eius saepe rem fugiat ipsa animi!
                  Inventore necessitatibus facere sapiente ad libero tenetur,
                  unde at quos asperiores molestiae. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Neque alias earum architecto
                  eius saepe rem fugiat ipsa animi! Inventore necessitatibus
                  facere sapiente ad libero tenetur, unde at quos asperiores
                  molestiae. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. <br /> <br /> Neque alias earum architecto eius saepe
                  rem fugiat ipsa animi! Inventore necessitatibus facere
                  sapiente ad libero tenetur, unde at quos asperiores molestiae.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  alias earum architecto eius saepe rem fugiat ipsa animi!
                  Inventore necessitatibus facere sapiente ad libero tenetur,
                  unde at quos asperiores molestiae.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Neque alias earum architecto
                  eius saepe rem fugiat ipsa animi! Inventore necessitatibus
                  facere sapiente ad libero tenetur, unde at quos asperiores
                  molestiae. essitatibus facere sapiente ad libero tenetur, unde
                  at quos asperiores molestiae.
                </p>
              </div>
              <img
                className="w-full md:w-11/12 h-max self-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODt5tSsMIMFzaVP9v3v0DSGnaSF3RlZf9ow&s"
                alt="restaurant"
              />
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
}
