import React from 'react';
import Image from 'next/image';

interface Achievement {
  icon: string;
  number: string;
  label: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {

  const getRotateClass = (index: number) => {
  switch (index) {
    case 0:
      return '-rotate-[5deg] lg:-rotate-[5deg]'; // tilt left
    case 1:
      return '-rotate-[5deg] lg:-rotate-[5deg]';                                   // flat
    case 2:
      return '-rotate-[5deg] lg:-rotate-[5deg]';   // tilt right
    default:
      return '';
  }
};

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-[128px]" aria-label="Company achievements">
      <div className="flex flex-col gap-5 lg:gap-[20px] justify-center items-start">
        {/* Achievement Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0">
          <div className="relative w-full lg:w-[52%]">
            <div className="relative w-full lg:w-[494px] h-auto lg:h-[216px] flex flex-col justify-center items-center lg:block">
              <Image src="/images/img_pseudo.png" alt="" width={84} height={10} className="lg:absolute lg:top-[74px] lg:left-[40px] w-16 h-2 lg:w-[84px] lg:h-[10px] z-10 mb-4 lg:mb-0" />
              <h2 className="lg:absolute lg:top-0 lg:left-0 text-global-5 text-4xl sm:text-6xl lg:text-8xl xl:text-[150px] font-jost font-bold leading-tight lg:leading-[217px] uppercase text-center lg:text-left">
                FACT
              </h2>
              <h3 className="lg:absolute w-auto lg:w-max lg:top-[6.5rem] lg:left-[40px] text-global-4 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-jost font-semibold leading-tight lg:leading-[53px] text-center lg:text-left mt-4 lg:mt-0">
                Let us See Our Company<br />
                Achievement
              </h3>
            </div>
          </div>
          <button className="w-16 h-16 lg:w-[170px] lg:h-[170px] lg:mr-[94px] lg:mb-[20px] hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-global-5 rounded-full" aria-label="Play achievement video">
            <Image src="/images/img_video.svg" alt="" width={70} height={70} className="lg:relative top-0 lg:top-[45%] w-full h-full" />
          </button>
        </div>
        <p className="text-global-2 text-sm sm:text-base lg:text-[16px] font-kumbh-sans leading-6 sm:leading-7 lg:leading-[32px] text-center lg:text-left lg:ml-[40px]">
          Sed ut perspiciatis unde omnis iste natus error sit ways<br className="hidden lg:block" />
          voluptatem accusantium doloremque laudantium totam rem<br className="hidden lg:block" />
          aperiam eaque epsa quae abillo inventore
        </p>
        
        {/* Achievement Cards */}
        <div className="flex mt-2 flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[24px] lg:ml-[72px] w-full justify-center lg:justify-start">
          {achievements.map((achievement, index) => (
            <div key={index} className={`flex flex-col justify-center items-center w-full sm:w-[306px] bg-global-3 rounded-[10px] p-8 sm:p-12 lg:p-[58px] lg:px-[30px] shadow-[0px_0px_10px_#06060626] hover:shadow-[0px_0px_20px_#06060640] transition-all duration-300 hover:scale-105 ${getRotateClass(index)}`}>
              <div className="flex flex-col justify-start items-center w-full">
                <div className="flex flex-col gap-2 lg:gap-[10px] justify-start items-center w-full">
                  <Image src={achievement.icon} alt="" width={90} height={84} className="w-16 h-16 lg:w-[90px] lg:h-[84px]" sizes="(max-width: 1024px) 64px, 90px" />
                  <div className="flex justify-center items-start w-full">
                    <span className="text-global-4 text-2xl sm:text-3xl lg:text-[35px] font-jost font-bold leading-tight lg:leading-[51px] text-center mt-2 lg:mt-[10px]">
                      {achievement.number}
                    </span>
                    <span className="text-global-4 text-2xl sm:text-3xl lg:text-[35px] font-saira font-bold leading-tight lg:leading-[55px] text-center">
                      +
                    </span>
                  </div>
                </div>
                <p className="text-global-4 text-base sm:text-lg lg:text-xl xl:text-[20px] font-jost font-medium leading-5 sm:leading-6 lg:leading-[29px] text-center capitalize mt-2">
                  {achievement.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;