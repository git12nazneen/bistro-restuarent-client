import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";
import 'swiper/css/navigation';
import "swiper/css";
import { Rating } from "@mui/material";
import { Navigation } from "swiper/modules";
const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="mb-10">
      <SectionTitle
        heading={"What our clients say"}
        subheading={"Testimonial"}
      ></SectionTitle>
{/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> */}
     
      <Swiper
        // watchSlidesProgress={true}
        slidesPerView={1}
        navigation={true} modules={[Navigation]}
        className="mySwiper"
      >
        <div className="my-14 ">
          {review.map((reviews) => (
            <SwiperSlide key={reviews._id}>
              <div className="text-center max-w-4xl mx-auto">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={reviews.rating}
                  readOnly
                />
                <h3>{reviews.details}</h3>

                <p className="font-bold text-orange-600 text-3xl">{reviews.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
