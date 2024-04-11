"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const HomeSwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay]}
      className="max-w-full 2xl:h-80 xl:max-h-80 lg:max-h-60 md:max-h-52 sm:h-64 h-36"
    >
      <SwiperSlide>
        <Image
          src={"https://cdn.joinnus.com/files/2024/03/nUb6w0lM3ZfzWiU.jpg"}
          fill={true}
          className="w-full"
          alt="image-swiper"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://cdn.joinnus.com/files/2024/04/LrnKq4BwTy2zr67.jpg"}
          alt="image-swiper"
          fill={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://cdn.joinnus.com/files/2024/04/RCTfp8SdqBPiLtc.jpg"}
          alt="image-swiper"
          fill={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://cdn.joinnus.com/files/2024/04/Q6ht97MSNnfke6T.jpeg"}
          alt="image-swiper"
          fill={true}
        />
      </SwiperSlide>
    </Swiper>
  );
};
