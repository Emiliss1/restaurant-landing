import { useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useEffect, useState } from "react";
import { NewsErr } from "./NewsErr";

export default function News() {
  const [newsData, setNewsData] = useState(null);
  const [newsErr, setNewsErr] = useState(false);

  const newsItems = [
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.6669164481079056xw:1xh;center,top&resize=1200:*",
      title: "50% Off for desserts",
      desc: "Lorem ipsum doloasdasdasdsaaaaar sit amet consectetur adipisicing elit. Sit. ipsum doloasdasdasdsaaaaar sit amet consectetur adipisicing elit. Sit.ipsum doloasdasdasdsaaaaar sit amet consectetur adipisicing elit. Sit ipsum doloasdasdasdsaaaaar sit amet consectetur adipisicing elit. Sit ipsum doloasdasdasdsaaaaar sit amet consectetur adipisicing elit. Sit ipsum doloasdasdasdsaaaaar sit amet consectetur adipisicing elit. Sitipsum doloasdasdasdsaaaaar sit amet consectetur adipisicing elit. Sitipsum doloasdasdasdsaaaaar sit amet consectetur adipisicing elit. Sitipsum doloasdasdasdsaaaaar sit amet consectetur adipisicing elit. Sit",
      hashTitle: "news-1",
      banner:
        "https://as2.ftcdn.net/jpg/03/01/76/65/1000_F_301766534_Nd0WoLqus2TVilLcRQL6OMACiJeEgnWu.jpg",
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.6669164481079056xw:1xh;center,top&resize=1200:*",
      title: "20% Off for steaks",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit",
      hashTitle: "news-2",
      banner:
        "https://as2.ftcdn.net/jpg/03/01/76/65/1000_F_301766534_Nd0WoLqus2TVilLcRQL6OMACiJeEgnWu.jpg",
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.6669164481079056xw:1xh;center,top&resize=1200:*",
      title: "20% Off for steaks",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit",
      hashTitle: "news-3",
      banner:
        "https://as2.ftcdn.net/jpg/03/01/76/65/1000_F_301766534_Nd0WoLqus2TVilLcRQL6OMACiJeEgnWu.jpg",
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.6669164481079056xw:1xh;center,top&resize=1200:*",
      title: "20% Off for steaks",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit",
      hashTitle: "news-4",
      banner:
        "https://as2.ftcdn.net/jpg/03/01/76/65/1000_F_301766534_Nd0WoLqus2TVilLcRQL6OMACiJeEgnWu.jpg",
    },
  ];

  const { pathname } = useLocation();
  const newsTitle = pathname.replace("/news/", "");
  console.log(newsTitle);

  useEffect(() => {
    const foundNews = newsItems.find((item) => item.hashTitle === newsTitle);

    if (!foundNews) {
      setNewsErr(true);
    }

    setNewsData(foundNews);

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {newsErr ? (
        <NewsErr />
      ) : (
        <div>
          <section
            className={`h-100  overflow-hidden flex flex-col   w-full  bg-zinc-900 bg-blend-soft-light bg-[url(assets/background.webp)] bg-cover`}
          >
            <Navbar />
            <div className="flex z-0 flex-col  w-full mt-20 px-8 sm:w-3/6 mx-auto ">
              <h1 className="text-zinc-100 mx-auto break-all 2xs:break-normal text-4xl 2xs:text-5xl xs:text-7xl  font-medium">
                {newsData?.title}
              </h1>
            </div>
          </section>
          <section className="w-11/12 xl:w-[1200px] text-zinc-100 h-max pb-8 bg-zinc-900 mx-auto my-30 ">
            <div
              style={{ backgroundImage: `url(${newsData?.banner})` }}
              className={`w-full h-72  bg-cover`}
            ></div>
            <p className="px-8 md:px-20 break-all mt-8">{newsData?.desc}</p>
          </section>
        </div>
      )}

      <Footer />
    </div>
  );
}
