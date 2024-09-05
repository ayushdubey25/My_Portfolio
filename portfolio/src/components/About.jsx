import React from "react";
import "./About.css";
import { Navbar } from "./Navbar";
import transition from "../../transition";
const About = () => {
  return (
    <>
      <Navbar />

      <div style={{ overflow: "scrollY", marginTop: "-56px" }}>
        <img
          src="https://storage.sell.app/public-assets/sfqpfaqh409mjezdun4b4g8j"
          alt=""
          className="w-100"
          style={{ height: "1550px" }}
        />

        <div className="about">
          <h2>About</h2>
          <p style={{ textAlign: "justify" }}>
            Hi, I'm Ayush Dubey, a passionate web developer with a zeal for
            creating exceptional digital experiences. With a strong foundation
            in [programming languages/technologies], I craft innovative,
            user-friendly, and responsive solutions that deliver results. I'm
            dedicated to staying up-to-date with industry trends and best
            practices, ensuring my work is always cutting-edge. Let's
            collaborate and bring your vision to life
          </p>
          <hr />
          <div className="icon">
            <div className="card">
              <img src="images/frontend_development.png" alt="" />
              <p> </p>
              <h2>Frontend Development</h2>
              <p style={{ textAlign: "justify" }}>
                I'm passionate about building modern, responsive, and
                user-friendly interfaces. With expertise in HTML, CSS,
                JavaScript, and frameworks like React and Angular, I craft
                seamless web experiences that delight users. I stay up-to-date
                with the latest trends and technologies to ensure my work is
                always cutting-edge. Let's create amazing digital products
                together!
              </p>
            </div>
            <div className="card">
              <hr />

              <img src="images/backend-development.png" alt="" />
              <p> </p>
              <h2>Backend Development</h2>
              <p style={{ textAlign: "justify" }}>
                With a strong foundation in building scalable, efficient, and
                secure server-side applications. With expertise in languages
                like Java, Python, and JavaScript, and frameworks like Spring
                Boot, Django, and Node.js, I craft robust APIs, microservices,
                and data pipelines that drive modern web applications. I'm
                dedicated to staying up-to-date with industry trends and best
                practices, ensuring my work is always reliable, maintainable,
                and high-performance. Let's build innovative digital solutions
                together!
              </p>
            </div>
            <div className="card">
              <hr />
              <img src="images/ui-design.png" alt="" />
              <p> </p>
              <h2>UI Designing</h2>
              <p style={{ textAlign: "justify" }}>
                {" "}
                I'm a creative and user-centered UI designer passionate about
                crafting intuitive, visually stunning, and responsive digital
                experiences. With a keen eye for detail and a deep understanding
                of human-computer interaction, I design modern web interfaces
                that delight users and drive results. My expertise includes
                wireframing, prototyping, and visual design, with proficiency in
                tools like Figma, Sketch, and Adobe XD. I'm dedicated to staying
                current with industry trends and design principles, ensuring my
                work is always innovative, accessible, and user-friendly. Let's
                create amazing digital products together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default transition(About);
