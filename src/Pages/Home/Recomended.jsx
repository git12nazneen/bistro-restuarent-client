import React from "react";
import SectionTitle from "../../shared/SectionTitle";
import slide from "../../assets/home/slide1.jpg";
import slide1 from "../../assets/home/slide2.jpg";
import slide2 from "../../assets/home/slide3.jpg";
import { Button } from "@mui/material";
const Recomended = () => {
  return (
    <div>
      <SectionTitle
        heading={"Sould Try"}
        subheading={"CHIEF RECOMENDED"}
      ></SectionTitle>
      <section className="">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12"></div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-3">
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img class="object-cover w-full h-56" src={slide} alt="avatar" />

              <div class="py-5 text-center">
                <a
                  href="#"
                  class="block text-xl font-bold text-gray-800 dark:text-white"
                  tabindex="0"
                  role="link"
                >
                    Salad
                </a>
                <h3 class="text-sm text-gray-700 dark:text-gray-200 px-4 py-4">
                Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus
                </h3>
                <button className="btn btn-neutral">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
            <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img class="object-cover w-full h-56" src={slide1} alt="avatar" />

              <div class="py-5 text-center">
                <a
                  href="#"
                  class="block text-xl font-bold text-gray-800 dark:text-white"
                  tabindex="0"
                  role="link"
                >
                 Pizza
                </a>
                <h2 class="text-sm text-gray-700 dark:text-gray-200 px-4 py-4">
                Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive 
                </h2>
                <Button variant="contained" color="success">
                Add to cart
      </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
            <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img class="object-cover w-full h-56" src={slide2} alt="avatar" />

              <div class="py-5 text-center">
                <a
                  href="#"
                  class="block text-xl font-bold text-gray-800 dark:text-white"
                  tabindex="0"
                  role="link"
                >
                   Soup
                </a>
                <h3 class="text-sm text-gray-700 dark:text-gray-200 px-4 py-4">
                Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus
                </h3>
                <button className="btn btn-neutral">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recomended;
