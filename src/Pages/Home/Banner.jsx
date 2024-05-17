import React from 'react';
import banner from '../../assets/home/banner.jpg'
import banner1 from '../../assets/home/01.jpg'
import banner2 from '../../assets/home/02.jpg'
import banner3 from '../../assets/home/03.png'
import banner4 from '../../assets/home/04.jpg'
import banner5 from '../../assets/home/06.png'
import banner6 from '../../assets/home/05.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from 'swiper/modules';


const Banner = () => {
    return (
        <>
        <Swiper watchSlidesProgress={true} slidesPerView={1}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  modules={[Autoplay]} className="mySwiper">
        <SwiperSlide>
            <img src={banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>  <img className='min-h-screen' src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide>  <img className='min-h-screen' src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide>  <img className='min-h-screen' src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide>  <img className='min-h-screen' src={banner4} alt="" /></SwiperSlide>
        <SwiperSlide>  <img className='min-h-screen' src={banner5} alt="" /></SwiperSlide>
        <SwiperSlide>  <img className='min-h-screen' src={banner6} alt="" /></SwiperSlide>
        
      </Swiper>
      </>
    );
};

export default Banner;