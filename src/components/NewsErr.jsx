import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export function NewsErr() {
  const navigate = useNavigate();
  return (
    <div>
      <section
        className={`h-screen  overflow-hidden flex flex-col justify-between  w-full  bg-zinc-900 bg-blend-soft-light bg-[url(assets/background.webp)] bg-cover`}
      >
        <Navbar />
        <div className="flex z-0 flex-col gap-8 w-full px-8 sm:w-3/6 mx-auto ">
          <h1 className="text-zinc-100 text-center mx-auto break-all 2xs:break-normal text-4xl 2xs:text-5xl xs:text-7xl  font-medium">
            News Not found
          </h1>
          <p className="text-zinc-100 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            amet voluptates nulla suscipit, aut quisquam molestiae aliquam sint
            voluptatem minus unde nam, facere harum dicta pariatur reprehenderit
            animi veniam ipsum!
          </p>
          <div className="flex  justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-gray-100 p-2 px-8 font-medium text-lg mt-3 text-zinc-950 rounded-sm cursor-pointer hover:bg-gray-200/90"
            >
              Main page
            </button>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
