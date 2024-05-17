import React from "react";
import SectionTitle from "../../shared/SectionTitle";
import featured from "../../assets/home/featured.jpg";
import { Button } from "@mui/material";
import "../../Pages/Home/feature.css";
const Featured = () => {
  return (
    <div className="featured bg-fixed mb-10 text-white">
      <SectionTitle
        heading={"check it out"}
        subheading={"Featured Item"}
      ></SectionTitle>
      <div className="flex featured-overlay justify-between items-center py-8 px-4 lg:px-36 text-white">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="content ml-10 space-y-2">
          <p>Aug 20, 2024</p>
          <h3>Where can i get some</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, porro
            impedit sit in cum quasi dicta architecto repellendus temporibus
            recusandae veniam quia reprehenderit eos illo totam, qui vitae enim?
            Eveniet?
          </p>
          <Button variant="contained" color="success">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
