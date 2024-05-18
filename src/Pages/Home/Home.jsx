import React from "react";
import Banner from "./Banner";
import Order from "./Order";
import PopularMenu from "./PopularMenu";
import Bistro from "./Bistro";
import Recomended from "./Recomended";
import Featured from "./Featured";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner></Banner>
      <Order></Order>
      <Bistro></Bistro>
      <PopularMenu></PopularMenu>
      <Recomended></Recomended>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
