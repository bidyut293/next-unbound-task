import React from 'react';
import Image from 'next/image';
import Slider from '@/components/ui/Slider';

interface SliderItem {
  id: string;
  image: string;
  category: string;
  title: string;
}

interface ProjectsSectionProps {
  sliderItems: SliderItem[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ sliderItems }) => {
  return (
    <section
      className="w-full max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-[128px]"
      aria-label="Recent projects"
    >
      <div className="relative flex flex-col justify-start items-center">
        {/* Section Header */}
        <Image
          src="/images/Projects.png"
          alt=""
          width={753}
          height={186}
          className="
                                    absolute -z-0
                                    top-[20%] left-[53%] -translate-x-[55%] -translate-y-[90%]
                                    w-[401px] sm:w-[280px] lg:w-[700px] xl:w-[753px]
                                    opacity-1
                                    pointer-events-none 
                                  "
        />
        <Image
          src="/images/img_pseudo.png"
          alt=""
          width={84}
          height={10}
          className="w-16 h-2 lg:w-[84px] lg:h-[10px] mt-8 lg:mt-[58px]"
        />
        <h2 className="text-global-4 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-jost font-semibold leading-tight lg:leading-[53px] text-center mt-3 lg:mt-[14px]">
          Checkout our Recently
          <br />
          Completed Projects
        </h2>

        {/* Projects Slider */}
        <Slider items={sliderItems} autoPlay autoPlayInterval={5000} />
      </div>
    </section>
  );
};

export default ProjectsSection;
