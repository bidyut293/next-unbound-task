import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnersSection: React.FC = () => {
  return (
    <section
      className="w-full bg-center py-8 sm:py-12 lg:py-[120px] mt-[-150px] sm:mt-[-200px] lg:mt-[-204px] relative z-10"
      style={{
        backgroundImage: `url('/images/vector_1.png')`,
      }}
      aria-label="Partners section"
    >
      <div className="w-full mt-40 max-w-[1470px] mx-auto px-4 sm:px-6 lg:px-[90px]">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[60px] justify-start items-center">
          {/* Partners Header */}
          <div className="flex px-20 flex-col lg:flex-row justify-start items-center gap-6 lg:gap-0 w-full">
            <div className="relative flex flex-col gap-3 lg:gap-[14px] justify-start items-start flex-1">
              {/* Background PNG */}
              <Image
                src="/images/brand.png"
                alt=""
                width={555}
                height={300}
                className="
      absolute -z-0
      top-[53%] left-[285px] -translate-x-[55%] -translate-y-[90%]
      w-[200px] sm:w-[280px] lg:w-[400px] xl:w-[555px]
      opacity-1
      pointer-events-none 
    "
              />

              {/* Foreground content */}
              <Image
                src="/images/img_pseudo.png"
                alt=""
                width={84}
                height={10}
                className="relative z-10 w-16 h-2 lg:w-[84px] lg:h-[10px]"
              />
              <h2 className="relative z-10 text-global-4 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-jost font-semibold leading-tight lg:leading-[53px]">
                We have More Then 254+
                <br />
                Global Partners
              </h2>
            </div>
            <p className="text-global-2 text-sm sm:text-base lg:text-[16px] font-kumbh-sans leading-6 sm:leading-7 lg:leading-[32px] w-full lg:w-[42%] text-center lg:text-left">
              Sed ut perspiciatis unde omnis natus error voluptatem santium
              <br className="hidden sm:block" />
              doloremque laudantium, totam rem aperiam, eaque ipsa quae
              <br className="hidden sm:block" />
              ab nllo inventore veritatis quasi architecto beatae vitae
            </p>
          </div>

          {/* Partners Logos */}
          <div className="flex flex-col gap-3 lg:gap-[14px] justify-start items-center w-full px-4 lg:px-[50px]">
            <div className="w-full h-px bg-global-4 opacity-30"></div>
            <div className="flex items-center justify-between w-full">
              {/* left arrow */}
              <button
                aria-label="Previous partners"
                className="
      flex items-center justify-center
      w-10 h-10 lg:w-12 lg:h-12
      p-[2px] rounded-full
      [background:linear-gradient(270deg,#186EF2_0%,#6D18EF_100%)]
      shadow-lg hover:shadow-xl transition-all duration-300
    "
              >
                <div className="w-full h-full rounded-full bg-[#000A1F] flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
                </div>
              </button>

              {/* logos row – flex-1 keeps them centered */}
              <div className="flex-1 flex justify-center items-center gap-4 sm:gap-6 lg:gap-10 flex-wrap lg:flex-nowrap">
                {/* <Image
                  src="/images/img_6_300x300_1_png.png"
                  alt="Partner logo"
                  width={154}
                  height={80}
                  className="w-20 h-11 sm:w-24 sm:h-12 lg:w-[154px] lg:h-[80px]"
                /> */}
                <Image
                  src="/images/image_1.png"
                  alt="Partner logo"
                  width={146}
                  height={90}
                  className="w-20 h-15 sm:w-24 sm:h-12 lg:w-[146px] lg:h-[80px]"
                />
                <Image
                  src="/images/img_6_300x300_1_png.png"
                  alt="Partner logo"
                  width={154}
                  height={80}
                  className="w-20 h-11 sm:w-24 sm:h-12 lg:w-[154px] lg:h-[80px]"
                />
                <Image
                  src="/images/img_clients_ksa_25_300x300_1_png.png"
                  alt="Partner logo"
                  width={152}
                  height={80}
                  className="w-20 h-11 sm:w-24 sm:h-12 lg:w-[152px] lg:h-[80px]"
                />
                <Image
                  src="/images/img_2_300x300_1_png.png"
                  alt="Partner logo"
                  width={146}
                  height={80}
                  className="w-20 h-11 sm:w-24 sm:h-12 lg:w-[146px] lg:h-[80px]"
                />
                <Image
                  src="/images/image_2.png"
                  alt="Partner logo"
                  width={146}
                  height={80}
                  className="w-20 h-11 sm:w-24 sm:h-12 lg:w-[146px] lg:h-[70px]"
                />
                {/* <Image
                  src="/images/img_clients_ksa_25_300x300_1_png.png"
                  alt="Partner logo"
                  width={152}
                  height={80}
                  className="w-20 h-11 sm:w-24 sm:h-12 lg:w-[152px] lg:h-[80px]"
                /> */}
              </div>

              {/* right arrow */}
              <button
                aria-label="Next partners"
                className="
      flex items-center justify-center
      w-10 h-10 lg:w-12 lg:h-12
      p-[2px] rounded-full
      [background:linear-gradient(270deg,#186EF2_0%,#6D18EF_100%)]
      shadow-lg hover:shadow-xl transition-all duration-300
    "
              >
                <div className="w-full h-full rounded-full bg-[#000A1F] flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
