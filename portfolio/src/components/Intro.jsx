import React from "react";
import "./Intro.css";
import transition from "../../transition";
const Intro = () => {
  return (
    <section>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
        style={{ marginTop: "-56px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100  ayush"
              src="https://getwallpapers.com/wallpaper/full/b/8/1/489068.jpg"
              alt="First slide"
            />
            <div className="intro">
              <div className="circle"></div>
              <img src="/images/Ayush.png" alt="" />
              <h1 className="name">Ayush Dubey</h1>
              <p>
                "I bridge the gap between creativity and functionality, crafting
                seamless digital experiences that exceed expectations. From
                designing intuitive interfaces to building scalable server-side
                architectures, I bring ideas to life with cutting-edge
                technologies and a dedication to excellence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default transition(Intro);
