import React, { useEffect, useState } from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Data } from "./Data";

const Testimonials = () => {
  // Define breakpoints and corresponding spaceBetween values
  const breakpoints = {
    1024: {
      spaceBetween: 20,
    },
    //* Add more breakpoints as needed
  };

  //* Function to generate responsive spaceBetween based on breakpoints
  const getResponsiveSpace = () => {
    const screenWidth = window.innerWidth;

    //* Find the applicable breakpoint
    const breakpoint = Object.keys(breakpoints).find(
      (bp) => screenWidth <= parseInt(bp)
    );

    //* Return the corresponding spaceBetween value
    return breakpoints[breakpoint]?.spaceBetween || 30; //* Default value if no breakpoint matches
  };

  const [centered, setCentered] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Update centered state based on screen width
      setCentered(window.innerWidth > 734);
    };

    // Attach event listener on component mount
    window.addEventListener("resize", handleResize);

    // Call the handler once to initialize the state
    handleResize();

    // Detach event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <section className="testimonials">
      <h1>What Our Users Say</h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={getResponsiveSpace()}
        centeredSlides={centered}
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
