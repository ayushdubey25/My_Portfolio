import React from "react";
import "./Contact.css";
import { Navbar } from "./Navbar";
import transition from "../../transition";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "-56px" }}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/996/623/non_2x/empty-3d-realistic-blue-and-pink-neon-color-podium-studio-room-glowing-lighting-effect-with-decoration-dust-minimal-scene-backgroun-vector.jpg"
          alt=""
          className="background w-100 "
          style={{ position: "relative" }}
        />
        <div className="contactcard">
          <h1>Contact</h1>
          <hr />
          <div className="image-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7913/7913071.png"
              alt=""
            />
            <a href="mailto:web.ayush@outlook.com">web.ayush@outlook.com</a>
            <br />
            <img
              src="https://www.pngkey.com/png/full/178-1787508_github-icon-download-at-icons8-white-github-icon.png"
              alt=""
            />
            <a href="https://github.com/ayushdubey25">
              https://github.com/ayushdubey25
            </a>
            <br />
            <img
              src="https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png"
              alt=""
            />
            <a href="https://x.com/ayushd025">https://x.com/ayushd025</a>
            <br />
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/909/522/original/internet-icon-in-purple-circle-free-png.png"
              alt=""
            />
            <a href="https://digilopment.in/">https://digilopment.in/</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default transition(Contact);
