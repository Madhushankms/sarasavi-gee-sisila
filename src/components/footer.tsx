import { it } from "node:test";
import React from "react";
import { Phone, Mails, Navigation, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

function Footer() {
  const contactDetail = [
    { icon: Phone, title: "Phone Number", info: "+94 xx xxx xxxx" },
    { icon: Mails, title: "Email Address", info: "example@email.com" },
    {
      icon: Navigation,
      title: "University of Moratuwa",
      info: "University of Moratuwa, Srilanka.",
    },
  ];

  const SocialIcon = [
    { icon: Facebook, href: "" },
    { icon: Youtube, href: "" },
  ];

  const centerData = [
    {
      sub: "Product",
      items: [
        { title: "How It Works", href: "##" },
        { title: "Core Features", href: "##" },
        { title: "Use Cases", href: "##" },
        { title: "FAQ", href: "##" },
        { title: "Download Brochure", href: "##" },
      ],
    },
    {
      sub: "Solutions",
      items: [
        { title: "Business Impact", href: "##" },
        { title: "Security and ", href: "##" },
        { title: "Compliance", href: "##" },
      ],
    },
  ];

  return (
    <div className="bg-primary mt-9 lg:mt-20">
      <div className="container px-4 lg:px-12 mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-5 ">
          <div className="">
            <div>
              <Image
                src="/images/f.png"
                className="w-40 h-auto mx-auto lg:mx-0"
                width={500}
                height={500}
                alt="Sarasavi Geesisila Logo"
              />
            </div>
            <p className="font-sm  text-[#C6C6C6] font-poppins tracking-[1px] pt-px max-w-80 lg:max-w-115 mx-auto lg:mx-0  text-center lg:text-start">
              Where classical music, timeless artistry, and cultural heritage
              converge at a prestigious Sri Lankan university stage.
            </p>

            <div className="flex gap-5 mt-6 justify-center lg:justify-start">
              {SocialIcon.map(({ icon: Icon }, index) => (
                <div
                  key={index}
                  className="h-8 w-8 rounded-[10px] border border-gold flex items-center justify-center"
                >
                  <Icon className="text-white size-4" />
                </div>
              ))}
            </div>
          </div>
          {centerData.map((section) => (
            <div
              className="
           mt-2 lg:mt-13"
            >
              <p className="font-poppins tracking-[1px] text-white text-center lg:text-start">
                {section.sub}
              </p>
              <div className="mt-2 lg:mt-6">
                {section.items.map((item) => (
                  <p className="font-sm font-poppins text-[#C6C6C6] tracking-[1px] pt-px text-center lg:text-start">
                    {item.title}
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
            © 2025 Sasavi Gee Sisila. All Rights Reserved.
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
