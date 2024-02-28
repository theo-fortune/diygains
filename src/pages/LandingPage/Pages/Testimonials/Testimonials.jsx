import React from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Data } from "./Data";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Users Say</h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {Data.map(({ id, image, description, title, name, quote }) => {
          return (
            <SwiperSlide className="testimonials-card" key={id}>
              <div className="testimonials-card__up">
                <img src={quote} alt="test" />
                <p>{description}</p>
              </div>
              <div className="testimonials-card__down">
                <img src={image} alt="profile" />
                <div className="testimonials-card__down-detail">
                  <h4>{name}</h4>
                  <p>{title}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
