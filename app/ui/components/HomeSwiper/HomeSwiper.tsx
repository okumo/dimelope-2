"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImageHeightHomeSwiper } from "@/app/utils";
export const HomeSwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <Image
          src={"https://cdn.joinnus.com/files/2024/03/nUb6w0lM3ZfzWiU.jpg"}
          width={1500}
          className="min-h-28"
          height={ImageHeightHomeSwiper}
          alt="image-swiper"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://cdn.joinnus.com/files/2024/04/LrnKq4BwTy2zr67.jpg"}
          width={1500}
          height={ImageHeightHomeSwiper}
          alt="image-swiper"
          className="min-h-28"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://cdn.joinnus.com/files/2024/04/RCTfp8SdqBPiLtc.jpg"}
          width={1500}
          height={ImageHeightHomeSwiper}
          alt="image-swiper"
          className="min-h-28"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://cdn.joinnus.com/files/2024/04/Q6ht97MSNnfke6T.jpeg"}
          width={1500}
          height={ImageHeightHomeSwiper}
          alt="image-swiper"
          className="min-h-28"
        />
      </SwiperSlide>
    </Swiper>
  );
};
