import React from "react";

const Banner = () => {
  const article = [
    "Hello Welcome to mirror",
    "Typing something",
    "Do anything diffarents",
  ];
  let articleIndex = 0;
  const articleHandle = () => {
    {
      let arr;
      setInterval(() => {
        if (articleIndex === article.length) {
          articleIndex = 0;
        }
        arr = article[articleIndex];
        articleIndex++;
      }, 2500);
      return arr;
    }
  };
  return (
    <div className="carousel w-full h-[450px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="./blog1.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="./blog3.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="./blog1.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="./blog2.png" className="w-full opacity-40" />
        <div className="absolute top-[50%] px-60 bg-opacity-60 text-black">
          {articleHandle()}
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
