import React from 'react';
import Image from 'next/image';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface SolutionsSectionProps {
  services: Service[];
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({ services }) => {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-[126px]"
      aria-label="Business solutions"
    >
      <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-[56px]">
        {/* Left Images */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start items-start gap-4 lg:gap-[20px]">
          <Image
            src="/images/img_bg_icon_one.png"
            alt=""
            width={120}
            height={470}
            className="w-12 h-48 sm:w-16 sm:h-64 lg:w-[120px] lg:h-[470px] mt-8 lg:mt-[57px]"
            sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 120px"
          />
          <Image
            src="/images/img_image_1_png.png"
            alt="Professional team collaboration"
            width={362}
            height={576}
            className="w-48 h-72 sm:w-64 sm:h-96 lg:w-[362px] lg:h-[576px] object-cover rounded-lg"
            sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 362px"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col justify-start items-start flex-1 text-center lg:text-left">
          <Image
            src="/images/features.png"
            alt=""
            width={772}
            height={186}
            className="
                  absolute -z-0
                  top-[65px] left-[48%] -translate-x-[55%] -translate-y-[90%]
                  w-[972px] sm:w-[280px] lg:w-[500px] xl:w-[772px]
                  opacity-1
                  pointer-events-none 
                "
          />
          <Image
            src="/images/img_pseudo.png"
            alt=""
            width={84}
            height={10}
            className="w-16 h-2 lg:w-[84px] lg:h-[10px] mx-auto lg:mx-0"
          />
          <h2 className="text-global-4 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-jost font-semibold leading-tight lg:leading-[53px] mt-3 lg:mt-[14px]">
            Explore Our Professional
            <br />
            Business Solutions
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-[24px] mt-8 sm:mt-12 lg:mt-[72px] w-full">
            {services.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className="flex gap-4 sm:gap-6 lg:gap-[24px] justify-start items-start p-4 lg:p-0"
              >
                <Image
                  src={service.icon}
                  alt=""
                  width={60}
                  height={60}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] mt-1 lg:mt-[4px] flex-shrink-0"
                  sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 60px"
                />
                <div className="flex flex-col gap-1 lg:gap-[6px] justify-start items-start flex-1">
                  <h3 className="text-global-4 text-lg sm:text-xl lg:text-2xl xl:text-[24px] font-jost font-semibold leading-6 sm:leading-7 lg:leading-8 xl:leading-[35px]">
                    {service.title}
                  </h3>
                  <p className="text-global-1 text-sm sm:text-base lg:text-[16px] font-kumbh-sans leading-5 sm:leading-6 lg:leading-[28px]">
                    {service.description.replace('\n', ' ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
