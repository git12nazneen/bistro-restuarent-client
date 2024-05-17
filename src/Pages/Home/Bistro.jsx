import React from "react";
import img from "../../assets/home/chef-service.jpg";
const Bistro = () => {
  return (
    <div className="mt-20">
      <div
        className="hero"
        style={{ backgroundImage: `url(${img})`, padding: "80px 0" }}
      >
        <div
          className="max-w-2xl hero-overlay bg-opacity-90"
          style={{ margin: "20px 0" }}
        ></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bistro;
