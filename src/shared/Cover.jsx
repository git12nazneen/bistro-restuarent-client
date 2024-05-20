import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, titleBottom }) => {
  return (
    <Parallax
      blur={{ min: -55, max: 50 }}
      bgImage={img}
      bgImageAlt="background"
      strength={-200}
      style={{ height: "100%" }} 
    >
      <div>
        <div className="hero" style={{ padding: "120px 0" }}>
        {/* <div className="hero" > */}
          <div
            className="max-w-2xl hero-overlay bg-black bg-opacity-70"
            // style={{ margin: "60px 0" }}
          ></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">
              Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;


