"use client";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryEventCard } from "../../common";

export const HeaderSwiper = () => {
  return (
    <Swiper
      loop
      slidesPerView={"auto"}
      freeMode
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[FreeMode, Autoplay]}
      breakpoints={{
        "@0.00": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        "@1.50": {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide>
        <CategoryEventCard
          imageUrl={
            "https://static.vaope.com/public/artists/9293-ICONO-LANDING_EVENTOS-LIMA-SUR.jpg"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryEventCard imageUrl="https://static.vaope.com/public/artists/2042-ICONO-LANDING_EVENTOS-LIMA-ESTE.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryEventCard imageUrl="https://static.vaope.com/public/artists/7166-ICONO-LANDING_EVENTOS-LIMA-NORTE.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryEventCard imageUrl="https://static.vaope.com/public/artists/6238-ICONO_LANDING-PIURA.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryEventCard imageUrl="https://static.vaope.com/public/artists/1566-ICONO_LANDING-AREQUIPA.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryEventCard imageUrl="https://static.vaope.com/public/artists/134-ICONO_LANDING-HUANCAYO.jpg?w=200" />
      </SwiperSlide>
    </Swiper>
  );
};
