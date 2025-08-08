import React from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section 
      className="w-full mt-16 sm:mt-24 lg:mt-[128px]"
      aria-label="Client testimonials"
      style={{
        backgroundImage: `url('/images/img_bg_pattern_8.png'), url('/images/img_bg_pattern_8_974x480.png')`,
        backgroundSize: 'cover, cover',
        backgroundPosition: 'left center, right center',
        backgroundRepeat: 'no-repeat, no-repeat'
      }}
    >
      <div className="relative bg-global-1 bg-opacity-80">
        <Image
                    src="/images/right_say.png"
                    alt=""
                    width={364}
                    height={975}
                    className="
                          absolute z-10
                           top-5 left-[-7rem]
                          w-[364px] sm:w-[280px] lg:w-[364px] xl:w-[364px]
                          opacity-1
                          pointer-events-none 
                        "
                  />
        <div className="flex justify-center items-center px-4 sm:px-8 lg:px-[56px] py-16 lg:py-[90px]">
          <div className="relative flex flex-col justify-start items-center w-full max-w-6xl">
            {/* Testimonials Header */}
            <Image
                        src="/images/say.png"
                        alt=""
                        width={439}
                        height={186}
                        className="
                              absolute -z-0
                              top-[84px] left-[52%] -translate-x-[55%] -translate-y-[90%]
                              w-[972px] sm:w-[280px] lg:w-[439px] xl:w-[439px]
                              opacity-1
                              pointer-events-none 
                            "
                      />
            <Image src="/images/img_pseudo.png" alt="" width={84} height={10} className="w-16 h-2 lg:w-[84px] lg:h-[10px]" />
            <h2 className="text-global-4 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-jost font-semibold leading-tight lg:leading-[53px] text-center mt-3 lg:mt-[14px]">
              People's Say About Our<br />
              Support & Services
            </h2>
            
            {/* Testimonials Cards */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] justify-start items-center w-full mt-8 sm:mt-12 lg:mt-[56px]">
              {testimonials.map((testimonial, index) => (
                <article key={index} className="max-w-[555px] flex flex-col justify-start items-start w-full bg-global-3 p-8 sm:p-12 lg:p-[50px] lg:px-[56px] lg:pr-[60px] shadow-[0px_5px_15px_#00000019] hover:shadow-[0px_10px_25px_#00000025] transition-all duration-300 rounded-lg">
                  <Image src="/images/img_span_icon.png" alt="" width={66} height={50} className="w-12 h-8 lg:w-[66px] lg:h-[50px] ml-2 lg:ml-[10px]" sizes="(max-width: 1024px) 48px, 66px" />
                  <blockquote className="text-global-1 text-base sm:text-lg lg:text-xl xl:text-[22px] font-kumbh-sans leading-6 sm:leading-7 lg:leading-8 xl:leading-[35px] w-full p-1 lg:p-[2px] lg:pr-[12px] lg:pb-[28px] lg:pl-[12px] mt-5 lg:mt-[20px] ml-2 lg:ml-[10px]">
                    {testimonial.quote.replace(/\n/g, ' ')}
                  </blockquote>
                  <div className="flex justify-start items-center w-full mt-6 sm:mt-8 lg:mt-[36px] ml-2 lg:ml-[10px]">
                    <div className="flex flex-col gap-1 lg:gap-[4px] justify-start items-start flex-1">
                      <h4 className="text-global-4 text-lg sm:text-xl lg:text-2xl xl:text-[24px] font-jost font-semibold leading-6 sm:leading-7 lg:leading-8 xl:leading-[35px]">
                        {testimonial.name}
                      </h4>
                      <p className="text-global-1 text-sm sm:text-base lg:text-[16px] font-kumbh-sans leading-5">
                        {testimonial.position}
                      </p>
                    </div>
                    <Image src="/images/img_icon_chat.png" alt="" width={100} height={60} className="w-16 h-10 sm:w-20 sm:h-12 lg:w-[100px] lg:h-[60px]" sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 100px" />
                  </div>
                </article>
              ))}
            </div>
            
            {/* Testimonials Pagination */}
            <div className="flex gap-2 lg:gap-[10px] justify-center items-center mt-8 sm:mt-12 lg:mt-[62px]">
              <div className="w-2 h-2 lg:w-[10px] lg:h-[10px] bg-global-6 rounded-[5px] cursor-pointer hover:bg-global-5 transition-colors"></div>
              <div className="w-6 h-2 lg:w-[30px] lg:h-[10px] bg-global-5 rounded-[5px]"></div>
              <div className="w-2 h-2 lg:w-[10px] lg:h-[10px] bg-global-6 rounded-[5px] cursor-pointer hover:bg-global-5 transition-colors"></div>
              <div className="w-2 h-2 lg:w-[10px] lg:h-[10px] bg-global-6 rounded-[5px] cursor-pointer hover:bg-global-5 transition-colors"></div>
            </div>
          </div>
        </div>
         <Image
                    src="/images/left_say.png"
                    alt=""
                    width={480}
                    height={975}
                    className="
                          absolute z-10
                           top-0 right-[-6rem]
                          w-[364px] sm:w-[280px] lg:w-[480px] xl:w-[480px]
                          opacity-1
                          pointer-events-none 
                        "
                  />
      </div>
    </section>
  );
};

export default TestimonialsSection;