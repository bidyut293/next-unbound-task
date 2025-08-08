import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const AwardsSection: React.FC = () => {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[22px] mt-16 sm:mt-24 lg:mt-[126px]"
      aria-label="Company awards"
    >
      <div className="flex flex-col lg:flex-row justify-end items-center gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="relative w-full lg:w-[48%] flex flex-col justify-start items-start text-center lg:text-left">
          <Image
            src="/images/img_pseudo.png"
            alt=""
            width={84}
            height={10}
            className="w-18 h-2 lg:w-[84px] lg:h-[10px] mx-auto lg:mx-0"
          />
          <Image
            src="/images/Who.png"
            alt=""
            width={401}
            height={186}
            className="
                            absolute -z-0
                            top-[100px] left-[33%] -translate-x-[55%] -translate-y-[90%]
                            w-[401px] sm:w-[280px] lg:w-[400px] xl:w-[500px]
                            opacity-1
                            pointer-events-none 
                          "
          />
          <h2 className="text-global-4 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-jost font-semibold leading-tight lg:leading-[53px] mt-3 lg:mt-[12px]">
            We are Awards Winning
            <br />
            Modern Business Solutions
            <br />
            Agency
          </h2>
          <p className="text-global-4 text-sm sm:text-base lg:text-lg xl:text-[18px] font-kumbh-sans leading-6 sm:leading-7 lg:leading-[32px] mt-6 lg:mt-[24px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            <br className="hidden lg:block" />
            accusantium doloremque laudantium totam rem aperiam eaque
            <br className="hidden lg:block" />
            epsa quae ab illo inventore veritatis architecto beatae
          </p>

          {/* Service Tags */}
          <div className="flex flex-col gap-2 lg:gap-[10px] justify-start items-center mt-6 lg:mt-[22px] w-full">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 lg:gap-[10px] w-full">
              <Button
                variant="primary"
                size="sm"
                leftImage={{ src: '/images/img_.svg', width: 14, height: 20 }}
                className="bg-global-3 text-global-4 text-sm sm:text-base lg:text-[16px] font-kumbh-sans font-semibold px-4 sm:px-6 lg:px-[18px] py-2 sm:py-3 lg:py-[12px] shadow-[0px_10px_60px_#00000019] rounded-[5px]"
              >
                Tech Solutions
              </Button>
              <Button
                variant="primary"
                size="sm"
                leftImage={{ src: '/images/img_.svg', width: 14, height: 20 }}
                className="bg-global-3 text-global-4 text-sm sm:text-base lg:text-[16px] font-kumbh-sans font-semibold px-4 sm:px-6 lg:px-[18px] py-2 sm:py-3 lg:py-[12px] shadow-[0px_10px_60px_#00000019] rounded-[5px]"
              >
                IT Consulting
              </Button>
              <Button
                variant="primary"
                size="sm"
                leftImage={{ src: '/images/img_.svg', width: 14, height: 20 }}
                className="bg-global-3 text-global-4 text-sm sm:text-base lg:text-[16px] font-kumbh-sans font-semibold px-4 sm:px-6 lg:px-[18px] py-2 sm:py-3 lg:py-[12px] shadow-[0px_10px_60px_#00000019] rounded-[5px]"
              >
                Web Solutions
              </Button>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 lg:gap-[10px] w-full">
              <Button
                variant="primary"
                size="sm"
                leftImage={{ src: '/images/img_.svg', width: 14, height: 20 }}
                className="bg-global-3 text-global-4 text-sm sm:text-base lg:text-[16px] font-kumbh-sans font-semibold px-4 sm:px-6 lg:px-[18px] py-2 sm:py-3 lg:py-[12px] shadow-[0px_10px_60px_#00000019] rounded-[5px]"
              >
                Business Growth
              </Button>
              <Button
                variant="primary"
                size="sm"
                leftImage={{ src: '/images/img_.svg', width: 14, height: 20 }}
                className="bg-global-3 text-global-4 text-sm sm:text-base lg:text-[16px] font-kumbh-sans font-semibold px-4 sm:px-6 lg:px-[18px] py-2 sm:py-3 lg:py-[12px] shadow-[0px_10px_60px_#00000019] rounded-[5px]"
              >
                Product Design
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[40%] mt-8 lg:mt-[30px]">
          <Image
            src="/images/img_about_1_png.png"
            alt="Team collaboration and business growth"
            width={540}
            height={514}
            className="w-full max-w-md lg:max-w-none lg:w-[540px] h-auto lg:h-[514px] object-cover rounded-lg mx-auto"
            sizes="(max-width: 1024px) 384px, 540px"
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
