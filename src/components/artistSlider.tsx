"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";

function ArtistSlider() {
  const images = [
    "/images/artists/TM.2.png",
    "/images/artists/CP.png",
    "/images/artists/DP.png",
    "/images/artists/DS.png",
    "/images/artists/EJ.png",
    "/images/artists/RG.png",
    "/images/artists/SW.png",
  ];
  return (
    <Swiper
      loop
      speed={1000}
      slidesPerView={4}
      spaceBetween={20}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ dynamicBullets: true }}
      modules={[Pagination, Autoplay]}
      className="mySwiper2"
      breakpoints={{
        0: {
          slidesPerView: 1.2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4.2,
        },
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide>
          <div>
            <Image
              src={src}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ArtistSlider;
