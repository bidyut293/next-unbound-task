import React from 'react';
import Image from 'next/image';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  services: Service[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ services }) => {

    const getMarginClass = (index: number) => {
  switch (index) {
    case 0:
      return 'lg:mr-[15rem]'; // 1st element: some margin
    case 1:
      return 'lg:mr-[8rem]'; // 2nd element: some margin
    case 2:
      return '';        // 3rd element: no margin
    case 3:
      return 'lg:mr-[21rem]'; // 4th element: more margin
    case 4:
      return 'lg:mr-[30rem]'; // 5th element: even more margin
    default:
      return '';
  }
};

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-[128px]"
      aria-label="Company features"
    >
      <div className="relative flex flex-col justify-start items-center">
        {/* Section Header */}
        <Image
          src="/images/Services.png"
          alt=""
          width={732}
          height={186}
          className="
                                    absolute -z-0
                                    top-[140px] left-[31%] -translate-x-[15%] -translate-y-[90%]
                                    w-[401px] sm:w-[280px] lg:w-[732px] xl:w-[732px]
                                    opacity-1
                                    pointer-events-none 
                                  "
        />
        <Image
          src="/images/img_pseudo.png"
          alt=""
          width={84}
          height={10}
          className=" w-16 h-2 lg:w-[84px] lg:h-[10px] mt-8 lg:mt-[58px]"
        />
        <h2 className="text-global-4 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-jost font-semibold leading-tight lg:leading-[53px] text-center mt-3 lg:mt-[14px]">
          Great Features To Do Your Business
          <br />
          Growth & Development
        </h2>

        {/* Features Content */}
        <div className="flex justify-between flex-col lg:flex-row gap-8 lg:gap-[28px] items-center w-full mt-8 sm:mt-12 lg:mt-[46px]">
          {/* Left Image */}
          <div className="w-full lg:relative left-0 lg:left-[110px] top-0 lg:top-[-55px] lg:w-auto flex justify-center">
            <Image
              src="/images/img_bg_icon_two_dark_png.png"
              alt="Features illustration"
              width={536}
              height={534}
              className="w-full max-w-md lg:max-w-none lg:w-[536px] h-auto lg:h-[534px] object-cover"
              sizes="(max-width: 1024px) 384px, 536px"
            />
          </div>

          {/* Right Services List */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-[30px] flex-1 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex w-full lg:w-[500px] justify-start items-center bg-global-3 rounded-[8px] p-4 sm:p-5 lg:p-[20px] shadow-[0px_10px_60px_#00000019] hover:shadow-[0px_15px_70px_#00000025] transition-all duration-300 cursor-pointer group ${getMarginClass(index)}`}
              >
                <div className="flex justify-center items-center w-full">
                  <Image
                    src={service.icon}
                    alt=""
                    width={70}
                    height={70}
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] flex-shrink-0"
                    sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 70px"
                  />
                  <div className="flex flex-col gap-1 lg:gap-[2px] justify-start items-start flex-1 ml-4 sm:ml-6 lg:ml-[24px]">
                    <h3 className="text-global-4 text-lg sm:text-xl lg:text-2xl xl:text-[24px] font-jost font-semibold leading-6 sm:leading-7 lg:leading-8 xl:leading-[35px]">
                      {service.title}
                    </h3>
                    <p className="text-global-1 text-sm sm:text-base lg:text-[16px] font-kumbh-sans leading-5 sm:leading-6 lg:leading-[28px]">
                      {service.description.replace('\n', ' ')}
                    </p>
                  </div>
                  <button
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] bg-global-2 rounded-full p-2 sm:p-3 lg:p-[16px] ml-2 lg:ml-[10px] hover:bg-global-4 transition-all duration-200 group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-global-5 flex-shrink-0"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <Image
                      src="/images/Arrow.svg"
                      alt=""
                      width={10}
                      height={12}
                      className="w-full h-full p-2"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
