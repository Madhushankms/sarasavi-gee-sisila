import React from "react";
import { Phone, Mails, Navigation, Facebook, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const contactDetail = [
    { icon: Phone, title: "Phone Number", info: "+94 78 853 7477" },
    { icon: Mails, title: "Email Address", info: "bess.uombecon@gmail.com" },
    {
      icon: Navigation,
      title: "University of Moratuwa",
      info: "University of Moratuwa, Srilanka.",
    },
  ];

  const SocialIcon = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/16ezMNPLmi/?mibextid=wwXIfr",
    },
    { icon: Youtube, href: "http://www.youtube.com/@bess_official" },
  ];

  const centerData = [
    {
      sub: "Department Information",
      items: [
        { title: "About", href: "/#about" },
        { title: "Department", href: "/#department" },
        { title: "BESS", href: "/#bess" },
      ],
    },
    {
      sub: "Explore",
      items: [
        { title: "Gallery", href: "/#gallery" },
        { title: "Reserve Seats ", href: "https://www.sarasavigeesisila.com/" },
        { title: "Contact Us", href: "/#contacts" },
      ],
    },
  ];

  return (
    <div className="bg-primary mt-9 lg:mt-24 pt-5 lg:pt-22">
      <div className="container px-4 lg:px-12 mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-5 ">
          <div className="">
            <div>
              <Image
                src="/images/gg.png"
                className="w-30 h-auto mx-auto lg:mx-0 cursor-pointer"
                width={500}
                height={500}
                alt="Sarasavi Geesisila Logo"
              />
            </div>
            <p className="lg:mt-5 font-sm  text-[#C6C6C6] font-poppins tracking-[1px] pt-px max-w-80 lg:max-w-115 mx-auto lg:mx-0  text-center lg:text-start">
              Where classical music, timeless artistry, and cultural heritage
              converge at a prestigious Sri Lankan university stage.
            </p>

            <div className="flex gap-5 mt-6 lg:mt-8 justify-center lg:justify-start">
              {SocialIcon.map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <div
                    key={index}
                    className="group h-8 w-8 rounded-[10px] border border-gold 
             flex items-center justify-center cursor-pointer
             transition-transform duration-300 ease-out
             hover:scale-110"
                  >
                    <Icon className="text-white size-4 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {centerData.map((section, index) => (
            <div
              key={index}
              className="
           mt-2 lg:mt-13"
            >
              <p className="font-poppins tracking-[1px] text-white text-center lg:text-start">
                {section.sub}
              </p>
              <div className="mt-2 lg:mt-6 space-y-0 lg:space-y-1">
                {section.items.map((item, index) => (
                  <p
                    key={index}
                    className="font-sm font-poppins text-[#C6C6C6] tracking-[1px] pt-px text-center lg:text-start cursor-pointer"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div className=" mt-2 lg:mt-13">
            <p className="font-poppins tracking-[1px] text-white text-center lg:text-start">
              Contact Information
            </p>
            <div className="flex lg:flex-col flex-row justify-center lg:justify-start gap-5 mt-4 lg:mt-11 ">
              {contactDetail.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex gap-3 items-center ">
                    <div className="h-8 w-8 rounded-[10px] border border-gold flex items-center justify-center">
                      <Icon className="text-white size-4" />
                    </div>
                    <div className="hidden lg:flex">
                      <p className="text-[#C6C6C6] font-poppins font-sk-modernist-regular ">
                        {detail.info}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-white/35 mt-8 lg:mt-10" />
        <div className="flex lg:flex-row flex-col gap-4 justify-between py-7">
          <p className="text-[#C6C6C6] font-poppins text-xs lg:text-base  text-center lg:text-start">
            © 2025 Sarasavi Gee Sisila. All Rights Reserved.
          </p>
          <p className="text-[#C6C6C6] font-poppins text-xs lg:text-base text-center lg:text-start">
            Building Economics Students’ Society (BESS)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
