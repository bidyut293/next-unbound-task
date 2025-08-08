import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="w-full  relative bg-[linear-gradient(180deg,#000a1f_0%,_#000c2f_100%)] min-h-screen flex flex-col justify-start items-center"
      style={{
        backgroundImage: `url('/images/img_grid.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      aria-label="Hero section"
    >
      <div className="w-full relative top-20 flex flex-col justify-start items-center">
        {/* Hero Content */}
        <div className="w-full max-w-[1530px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-[160px] mb-16 sm:mb-24 lg:mb-[226px]">
          <div className="flex justify-evenly mx-0 lg:mx-[60px] flex-col lg:flex-row items-start gap-8 lg:gap-0">
            {/* Left Content */}
            <div className="w-full lg:w-[40%] flex flex-col gap-2 lg:gap-[8px] justify-start items-start">
              <h1 className="text-global-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[75px] font-jost font-semibold leading-tight lg:leading-[75px] capitalize">
                We Provide<br />
                Smart Business<br />
                Solutions
              </h1>
              <p className="text-global-4 text-base sm:text-lg lg:text-xl xl:text-[20px] font-jost leading-6 lg:leading-7 xl:leading-[29px] mt-4 lg:mt-[8px]">
                Grow your Business With Us Best Business Solutions
              </p>
            </div>
            
            {/* Right Content */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-end items-start lg:ml-[-142px]">
              <div className="relative flex justify-end items-start">
                <Image
                  src="/images/img_image_686x718.png"
                  alt="Business Solutions Illustration"
                  width={718}
                  height={686}
                  priority
                  className="w-full lg:relative p-0 lg:top-[-8rem] lg:left-[1rem] lg:p-[50px] max-w-[400px] sm:max-w-[500px] lg:max-w-none lg:w-[718px] h-auto lg:h-[686px] object-cover"
                  sizes="(max-width: 640px) 400px, (max-width: 1024px) 500px, 718px"
                />
                <Image
                  src="/images/img_image_106x106.png"
                  alt="Decorative element"
                  width={106}
                  height={106}
                  className="absolute top-16 lg:top-[108px] -right-6 lg:-right-11 w-16 h-16 sm:w-20 sm:h-20 lg:w-[106px] lg:h-[106px]"
                  sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 106px"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Images - Hidden on mobile for performance */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block">
          <Image src="/images/img_object_4_png.png" alt="" width={206} height={214} className="absolute top-[95px] left-[34%] w-[206px] h-[214px]" />
          <Image src="/images/img_image.png" alt="" width={278} height={92} className="absolute top-[100px] left-[18px] w-[278px] h-[92px]" />
          <Image src="/images/img_image_158x278.png" alt="" width={278} height={158} className="absolute bottom-[388px] right-[621px] w-[278px] h-[158px]" />
          <Image src="/images/img_image_276x278.png" alt="" width={278} height={276} className="absolute top-[113px] right-[10px] w-[278px] h-[276px]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;