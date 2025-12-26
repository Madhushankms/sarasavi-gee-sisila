"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const slideReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ArtistSlider() {
  const images: string[] = [
    "/images/artists/TM.2.png",
    "/images/artists/CP.png",
    "/images/artists/DP.png",
    "/images/artists/DS.png",
    "/images/artists/EJ.png",
    "/images/artists/RG.png",
    "/images/artists/SW.png",
  ];

  return (
    <div>
      <Swiper
        loop
        speed={1000}
        spaceBetween={20}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{
          el: ".application-slider-pagination",
          clickable: true,
          bulletClass: "application-bullet-class swiper-pagination-bullet",
          bulletActiveClass:
            "application-bullet-active-class swiper-pagination-bullet-active",
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full"
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4.2 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={slideReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                width={500}
                height={500}
                alt="Sarasavi Gee Sisila Artist"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="application-slider-pagination mt-6 flex justify-center" />
    </div>
  );
}

export default ArtistSlider;
