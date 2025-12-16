"use client";
import ArtistSlider from "@/components/artistSlider";
import FormContact from "@/components/form";
import Slider from "@/components/slider";
import {
  Building2,
  Facebook,
  GraduationCap,
  Mails,
  Navigation,
  Phone,
  UserRoundPlus,
  Youtube,
} from "lucide-react";

import Image from "next/image";
import Masonry from "react-masonry-css";

export default function Home() {
  const breakpointColumnsObj = {
    default: 4,
    1024: 2,
    640: 1,
  };

  const images = [
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/11.jpg",
    "/images/gallery/22.jpg",
    "/images/gallery/33.jpg",
    "/images/gallery/44.jpg",
    "/images/gallery/55.jpg",
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
  ];

  const contactDetail = [
    { icon: Phone, title: "Union President", info: "+94 xx xxx xxxx" },
    { icon: Building2, title: "Head of Department", info: "+94 xx xxx xxxx" },
    { icon: Mails, title: "Email Address", info: "bess@uom.lk" },
    {
      icon: Navigation,
      title: "Location",
      info: "University of Moratuwa, Bandaranayake Mawatha, Sri Lanka",
    },
  ];

  const SocialIcon = [
    { icon: Facebook, href: "" },
    { icon: Youtube, href: "" },
  ];

  return (
    <div>
      <section>
        <Slider />
      </section>
      <section>
        <div className="container px-4 lg:px-12 mx-auto pt-10 lg:pt-20">
          <p className="lg:text-8xl   md:text-6xl text-5xl text-primary font-bold text-center tracking-wide drop-shadow-sm  font-abhaya">
            Sarasavi Gee Sisila
          </p>
          <div className="space-y-4.5 lg:space-y-6 text-primary/70 text-start lg:text-center max-w-5xl mx-auto mt-3 lg:mt-6 tracking-[1px] font-light font-poppins">
            <p>
              Sarasavi Gee Sisila is one of the most anticipated events on the
              University of Moratuwa’s annual calendar. Organized by the
              Building Economics Students’ Society (BESS), this musical
              extravaganza is much more than a celebration of classical music as
              it serves as a crucial fundraiser supporting the financial and
              welfare needs of the student community.
            </p>
            <p>
              First held in 1993 by the undergraduates of the 5th batch of the
              Department of Building Economics, Sarasavi Gee Sisila has since
              grown into a landmark event at the university. The inaugural
              edition was graced by legendary musicians such as Dr. Dayarathne
              Ranathunge, Mrs. Amara Ranathunge, and Mr. Victor Rathnayake,
              setting a high standard for excellence and artistry.
            </p>
            <p>
              Over the years, Sarasavi Gee Sisila has evolved into one of the
              largest and most iconic musical events within the university,
              earning a reputation as the epitome of classical music in the
              university community. Every edition continues to celebrate the
              rich heritage of Sri Lankan music while providing a platform for
              both legendary and emerging artists to captivate audiences with
              unforgettable performances.
            </p>
          </div>
          <div className="mt-6.5 lg:mt-12">
            <ArtistSlider />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#F9FAFB] pt-11 pb-9  lg:pt-20">
          <div className="container px-4 lg:px-12 mx-auto lg:gap-15 md:gap-0  grid md:grid-cols-1 lg:grid-cols-2 items-center justify-center overflow-hidden  ">
            <div className=" order-2 lg:order-1  lg:py-10  ">
              <div className="hidden sm:block">
                <p className=" text-3xl lg:text-4xl text-primary font-semibold font-poppins max-w-2xl  ">
                  Department of Building Economics
                </p>
                <p className="font-poppins mt-2 text-primary">
                  University Of Moratuwa
                </p>
              </div>

              <div className="space-y-4.5 lg:space-y-6  text-primary/50 max-w-5xl mx-auto mt-6 tracking-[1px]  font-poppins">
                <p>
                  The Building Economics Students’ Society (BESS), representing
                  the students of the Department of Building Economics at the
                  University of Moratuwa, has become a beacon of hope,
                  leadership, and compassion.has become a beacon of hope,
                  leadership, and compassion.
                </p>
                <p>
                  Through its wide-ranging welfare initiatives, community
                  service projects, and educational programs, BESS has touched
                  countless lives, brought positive changes, and inspired a
                  sense of empowerment among those it serves.
                </p>
              </div>
              <div className="mt-4 lg:mt-6 lg:flex space-y-5 lg:space-y-0 gap-12">
                <div className="flex gap-3 items-center">
                  <GraduationCap className="text-gold size-6" />
                  <p className="font-poppins  text-pretty">
                    Academic Excellence
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <UserRoundPlus className="text-gold size-6" />
                  <p className="font-poppins  text-pretty">
                    Student Engagement
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:h-120 overflow-hidden">
              <div className=" sm:hidden">
                <p className="text-2xl lg:text-4xl text-primary font-semibold font-poppins max-w-2xl  ">
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
                className="w-full lg:h-full md:h-100 h-60 object-cover object-bottom rounded-2xl mt-6 sm:mt-0"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-0 lg:pt-20">
          <div className="container px-4 lg:px-12 mx-auto  grid md:grid-cols-1 lg:grid-cols-2 items-center justify-center overflow-hidden  ">
            <div className="order-2 lg:order-1  bg-primary p-5 lg:p-15 flex  items-center justify-center gap-10  ">
              <div>
                <p className=" text-2xl lg:text-4xl leading-9 lg:leading-12 text-white font-semibold font-poppins lg:max-w-2xl  ">
                  Building Economics Students' Society (BESS)
                </p>

                <div className="space-y-6  text-white max-w-5xl mx-auto mt-6 tracking-[1px]  font-poppins">
                  <p>
                    The Building Economics Students’ Society (BESS),
                    representing the students of the Department of Building
                    Economics at the University of Moratuwa, has become a beacon
                    of hope, leadership, and compassion.
                  </p>
                  <p>
                    Through its wide-ranging welfare initiatives, community
                    service projects, and educational programs, BESS has touched
                    countless lives, brought positive changes, and inspired a
                    sense of empowerment among those it serves.
                  </p>
                </div>
              </div>
              <div className="bg-[#D6AC1B] h-70 w-1 hidden md:flex"></div>
            </div>
            <div className="order-1 lg:order-2 lg:h-120 overflow-hidden  ">
              <Image
                src="/images/BESS logo.png"
                width={500}
                height={500}
                className="w-full h-full object-cover p-10 "
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-4 lg:px-12 mx-auto pt-11 lg:pt-20 ">
          <p className="text-2xl lg:text-5xl  font-semibold text-primary font-poppins">
            Captured Moments
          </p>
          <p className="mt-3 text-base lg:text-lg text-primary/70 font-poppins">
            A collection of moments from BESS events, initiatives, and student
            life.
          </p>
          <div className="mt-7 lg:mt-12">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex -ml-4 w-auto"
              columnClassName="pl-4"
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="mb-4 relative overflow-hidden rounded-lg shadow"
                >
                  <div className="relative group">
                    <img
                      src={img}
                      alt="Sarasavi Gee Sisila Gallery Image"
                      className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#FAF8F5] pt-7.5">
          <div className="container px-4 lg:px-12 mx-auto   ">
            <p className="text-2xl lg:text-5xl  font-semibold text-primary font-poppins">
              Connect With Us
            </p>
            <p className="mt-3 text-base lg:text-lg text-primary/70 font-poppins">
              Join hands with BESS for impact and service.
            </p>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15   mt-8">
              <div className="order-2 lg:order-1 bg-white p-0 lg:p-10 rounded-2xl">
                <FormContact />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex flex-col gap-6 lg:gap-9 p-4 lg:p-10 bg-primary rounded-2xl">
                  {contactDetail.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <div key={index} className="flex gap-3 items-center ">
                        <div className="h-11 w-11 rounded-[10px] bg-gold flex items-center justify-center">
                          <Icon className="text-primary size-6" />
                        </div>
                        <div>
                          <p className="font-poppins text-xl text-gold tracking-[2px]">
                            {detail.title}
                          </p>
                          <p className="text-dark-gray-text  text-white font-poppins ">
                            {detail.info}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
