"use client";
import ArtistSlider from "@/components/artistSlider";
import EventCountdown from "@/components/countdown";
import FormContact from "@/components/form";
import Slider from "@/components/slider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  container,
  fadeUpTitle,
  fadeUp,
  cardReveal,
  imageReveal,
} from "@/animation/index";
import { images, contactDetail } from "@/data/index";
import { GraduationCap, UserRoundPlus, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";

export default function Home() {
  const breakpointColumnsObj = {
    default: 4,
    1024: 2,
    640: 1,
  };

  return (
    <div>
      <section>
        <Slider />
      </section>
      <section>
        <div id="about" className="relative -top-20" />
        <motion.div
          className="container px-4 lg:px-12 mx-auto pt-10 lg:pt-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUpTitle}
            className="lg:text-7xl md:text-6xl text-4xl text-primary font-bold text-center tracking-wide drop-shadow-sm font-poppins"
          >
            Sarasavi Gee Sisila
          </motion.p>

          <motion.div
            className="space-y-4.5 lg:space-y-6 text-primary/70 text-start lg:text-center max-w-5xl mx-auto mt-3 lg:mt-6 tracking-[1px] font-light font-poppins"
            variants={container}
          >
            <motion.p variants={fadeUp}>
              Sarasavi Gee Sisila organized by the Building Economics Students’
              Society (BESS), stands as the landmark classical music
              extravaganza of the year at the University of Moratuwa. This
              humble initiative envisioned by the 5th batch of the Department of
              Building Economics in 1993 has given rise to a hallmark tradition
              that now stands as the most powerful musical expression of the
              year at University of Moratuwa, igniting the stage with the spirit
              of Sri Lankan classical music.
            </motion.p>

            <motion.p variants={fadeUp}>
              Sarasavi Gee Sisila is a show that gives back. Every ticket serves
              a greater purpose, transforming music into compassion by
              supporting the welfare and aspirations of the student community.
              The legacy continues as it enters the 28th chapter this year,
              where a community of thousands comes together not just to witness
              extraordinary performances, but to lift each other up.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <section>
        <motion.div
          className="container mx-auto px-4 lg:px-12 pt-7 lg:pt-11"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            initial={{ scale: 0.96 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <video
              className="w-full h-auto lg:h-140 object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/images/Gee.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <motion.div
              className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </section>
      <section>
        <div className="bg-primary py-13 lg:py-20 mt-13 lg:mt-25 relative w-full overflow-hidden">
          <motion.div
            className="container mx-auto px-4 lg:px-12 relative z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-gold font-poppins text-center bg-black/5 px-3 py-1 w-fit mx-auto rounded-full border border-gold/20"
            >
              UPCOMING EVENT
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, scale: 0.96 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-4 text-3xl text-center lg:text-6xl text-white font-semibold font-poppins"
            >
              Sarasavi Gee Sisila – 2026
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-3 text-sm lg:text-lg text-white/60 font-poppins text-center"
            >
              The next celebration of classical harmony begins soon
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center mt-3 gap-3 justify-center"
            >
              <CalendarDays className="text-gold size-6" />
              <p className="font-poppins text-xl text-gold tracking-[1px]">
                January 24, 2026 • 6:00 PM
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <EventCountdown />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-fit mx-auto mt-9.5 lg:mt-8"
            >
              <Link href="https://www.sarasavigeesisila.com/" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button className="text-[22px] rounded-full hover:bg-gold  font-poppins bg-gold hover:text-white">
                    Reserve Seats
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 1 }}
              className="mt-5 text-base lg:text-xs text-white/40 text-center font-poppins"
            >
              Secure your seats early for the most anticipated musical event of
              2026
            </motion.p>
          </motion.div>
        </div>
      </section>
      <section>
        <motion.div
          className="container mx-auto px-4 lg:px-12 pt-10 lg:pt-22"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-2xl lg:text-4xl text-primary font-semibold font-poppins max-w-2xl"
          >
            Artists – Sarasavi Gee Sisila 2026
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-base lg:text-lg text-primary/70 font-poppins"
          >
            Celebrating voices that define classical harmony
          </motion.p>

          <motion.div variants={cardReveal} className="mt-6.5 lg:mt-12">
            <ArtistSlider />
          </motion.div>
        </motion.div>
      </section>
      <section>
        <div id="department" className="relative -top-20" />

        <div className="bg-black/8 pt-11 pb-9 lg:pb-25 lg:pt-25 mt-10 lg:mt-16">
          <motion.div
            className="container px-4 lg:px-12 mx-auto grid md:grid-cols-1 lg:grid-cols-2 lg:gap-15 items-center overflow-hidden"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div className="order-2 lg:order-1 lg:py-10">
              <motion.div variants={fadeUp} className="hidden sm:block">
                <p className="text-3xl lg:text-4xl text-primary font-semibold font-poppins max-w-2xl">
                  Department of Building Economics
                </p>
                <p className="font-poppins mt-2 text-primary">
                  University Of Moratuwa
                </p>
              </motion.div>

              <div className="space-y-4.5 lg:space-y-6 text-primary/50 max-w-5xl mt-6 tracking-[1px] font-poppins">
                <motion.p variants={fadeUp}>
                  Established in 1983 under the patronage of the late Professor
                  Siri Caldera, the Department of Building Economics at
                  University of Moratuwa is Sri Lanka's inaugural state-owned
                  institution to offer undergraduate degrees in Quantity
                  Surveyıng and Facilities Management.
                </motion.p>

                <motion.p variants={fadeUp}>
                  Renowned accreditations and postgraduate programs in Project
                  Management, Construction Law and Occupational Safety continue
                  to shape competent professionals committed to excellence in
                  the built environment sector.
                </motion.p>
              </div>

              <motion.div
                variants={container}
                className="mt-4 lg:mt-6 lg:flex space-y-5 lg:space-y-0 gap-12"
              >
                <motion.div
                  variants={fadeUp}
                  className="flex gap-3 items-center"
                >
                  <GraduationCap className="text-gold size-6" />
                  <p className="font-poppins">Academic Excellence</p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex gap-3 items-center"
                >
                  <UserRoundPlus className="text-gold size-6" />
                  <p className="font-poppins">Student Engagement</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={imageReveal}
              className="order-1 lg:order-2 lg:h-120 overflow-hidden"
            >
              <div className="sm:hidden mb-4">
                <p className="text-2xl text-primary font-semibold font-poppins">
                  Department of Building Economics
                </p>
                <p className="font-poppins mt-2 text-primary">
                  University Of Moratuwa
                </p>
              </div>

              <Image
                src="/images/gallery/11.jpg"
                width={500}
                height={500}
                alt="Department of Building Economics"
                className="w-full lg:h-full md:h-100 h-60 object-cover object-bottom rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section>
        <div id="bess" className="relative -top-20" />

        <div className="pt-0 lg:pt-25">
          <motion.div
            className="container px-4 lg:px-12 mx-auto grid md:grid-cols-1 lg:grid-cols-2 items-center overflow-hidden"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              variants={container}
              className="order-2 lg:order-1 bg-primary p-5 lg:p-15 flex items-center justify-center gap-10"
            >
              <motion.div variants={container}>
                <motion.p
                  variants={fadeUp}
                  className="text-2xl lg:text-4xl leading-9 lg:leading-12 text-white font-semibold font-poppins lg:max-w-2xl"
                >
                  Building Economics Students' Society (BESS)
                </motion.p>

                <motion.div
                  variants={container}
                  className="space-y-6 text-white max-w-5xl mt-6 tracking-[1px] font-poppins"
                >
                  <motion.p variants={fadeUp}>
                    Being the student society of the department, Building
                    Economics Students’ Society (BESS) has grown into a vibrant
                    community defined by care, leadership and purpose over the
                    years.
                  </motion.p>

                  <motion.p variants={fadeUp}>
                    BESS has sustained its commitment to meaningful social
                    impact, enriching the lives it touches through a broad
                    spectrum of welfare programs, community engagement
                    initiatives and academic support activities. Sarasavi Gee
                    Sisila is the cornerstone fundraiser that fuels BESS’s
                    efforts to enrich student life.
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scaleY: 0 },
                  visible: {
                    opacity: 1,
                    scaleY: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="bg-[#D6AC1B] h-70 w-1 hidden md:flex origin-top"
              />
            </motion.div>

            <motion.div
              variants={imageReveal}
              className="order-1 lg:order-2 lg:h-120 overflow-hidden"
            >
              <Image
                src="/images/BESS logo.png"
                width={500}
                height={500}
                alt="BESS Logo"
                className="w-full h-full object-cover p-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section>
        <div id="gallery" className="relative -top-20" />

        <motion.div
          className="container px-4 lg:px-12 mx-auto pt-11 lg:pt-21 pb-0 lg:pb-22"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-2xl lg:text-5xl font-semibold text-primary font-poppins"
          >
            Captured Moments
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-base lg:text-lg text-primary/70 font-poppins"
          >
            A collection of moments from BESS events, initiatives, and student
            life.
          </motion.p>

          <div className="mt-7 lg:mt-12">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex -ml-4 w-auto"
              columnClassName="pl-4"
            >
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  variants={imageReveal}
                  className="mb-4 relative overflow-hidden rounded-lg shadow"
                >
                  <div className="relative group">
                    <img
                      src={img}
                      alt="Sarasavi Gee Sisila Gallery Image"
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </div>
        </motion.div>
      </section>
      <section>
        <div id="contacts" className="relative -top-20" />

        <div className="bg-black/8 pt-7.5 pb-10 lg:pb-24 lg:pt-20">
          <motion.div
            className="container px-4 lg:px-12 mx-auto"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-2xl lg:text-5xl font-semibold text-primary font-poppins"
            >
              Connect With Us
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-base lg:text-lg text-primary/70 font-poppins"
            >
              Be part of the BESS community committed to service that truly
              matters.
            </motion.p>

            <motion.div
              variants={container}
              className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 mt-8"
            >
              <motion.div
                variants={cardReveal}
                className="order-2 lg:order-1 bg-white p-4 lg:p-10 rounded-2xl"
              >
                <FormContact />
              </motion.div>

              <motion.div
                variants={cardReveal}
                className="order-1 lg:order-2 bg-primary rounded-2xl"
              >
                <div className="flex items-center h-full">
                  <motion.div
                    variants={container}
                    className="flex flex-col gap-6 lg:gap-9 p-4 lg:p-10"
                  >
                    {contactDetail.map((detail, index) => {
                      const Icon = detail.icon;
                      return (
                        <motion.div
                          key={index}
                          variants={fadeUp}
                          className="flex gap-4 lg:gap-5 items-center"
                        >
                          <div className="h-11 w-11 shrink-0 rounded-[10px] bg-gold flex items-center justify-center">
                            <Icon className="text-primary size-6" />
                          </div>
                          <div>
                            <p className="font-poppins text-lg lg:text-xl text-gold tracking-[2px]">
                              {detail.title}
                            </p>
                            <p className="text-sm text-white/60 font-poppins">
                              {detail.info}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
