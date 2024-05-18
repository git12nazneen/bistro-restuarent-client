import React from 'react';


import banner2 from '../../assets/home/slide1.jpg'
import banner3 from '../../assets/home/slide2.jpg'
import banner4 from '../../assets/home/slide3.jpg'
import banner5 from '../../assets/home/slide4.jpg'
import banner6 from '../../assets/home/slide5.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../../shared/SectionTitle';


const Order = () => {
    return (
        <div className='max-w-6xl mx-auto'>
          <SectionTitle
          heading={'From 10 am to 11 pm'}
          subheading={'ORDER ONLINE'}>
            
          </SectionTitle>
        <Swiper watchSlidesProgress={true} slidesPerView={4} loop={true}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  modules={[Autoplay]} className="mySwiper">
          
        
      
        <SwiperSlide>  <img src={banner2} alt="" />
        <h3 className='-mt-20 text-center text-2xl'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>  <img src={banner3} alt="" />
        <h3 className='-mt-20 text-center text-2xl'>Pizza</h3>
        </SwiperSlide>
       
        <SwiperSlide>  <img src={banner4} alt="" />
        <h3 className='-mt-20 text-center text-2xl'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>  <img src={banner6} alt="" />
        <h3 className='-mt-20 text-center text-2xl'>Salads</h3>
        </SwiperSlide>

        <SwiperSlide>  <img src={banner5} alt="" />
        <h3 className='-mt-20 text-center text-2xl'>Desert</h3>
        </SwiperSlide>
        
      </Swiper>
      </div>
    );
};

export default Order;