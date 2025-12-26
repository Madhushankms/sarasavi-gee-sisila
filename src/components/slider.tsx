"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

function Slider() {
  return (
    <Swiper
      className="mySwiper2"
      effect="fade"
      modules={[Autoplay, EffectFade]}
      fadeEffect={{ crossFade: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={1200}
      loop={true}
    >
      <SwiperSlide>
        <div className="relative h-96 lg:h-screen">
          <Image
            src="/images/slider/5.jpg"
            alt="Background Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-96 lg:h-screen">
          <Image
            src="/images/slider/6.jpg"
            alt="Background Hero"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-96 lg:h-screen">
          <Image
            src="/images/slider/1.jpg"
            alt="Background Hero"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
