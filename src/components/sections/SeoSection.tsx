import React from 'react';
import Image from 'next/image';

interface SeoSectionProps {
  selectedFaq: string | null;
  toggleFaq: (faqId: string) => void;
}

const SeoSection: React.FC<SeoSectionProps> = ({ selectedFaq, toggleFaq }) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-[128px]" aria-label="SEO services">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="w-full lg:w-auto flex flex-col gap-4 lg:gap-[18px] justify-start items-center lg:items-end px-4 sm:px-8 lg:px-[128px] lg:pl-[56px]">
          {/* SEO Header */}
          <div className="relative w-full lg:w-[74%] lg:mr-[32px]">
            <div className="relative w-full lg:w-[472px] h-auto lg:h-[216px] flex flex-col justify-center items-center lg:block">
              <Image src="/images/img_pseudo.png" alt="" width={84} height={10} className="lg:absolute lg:top-[74px] lg:left-[40px] w-16 h-2 lg:w-[84px] lg:h-[10px] z-10 mb-4 lg:mb-0" />
              <h2 className="lg:absolute lg:top-0 lg:left-0 text-global-5 text-4xl sm:text-6xl lg:text-8xl xl:text-[150px] font-jost font-bold leading-tight lg:leading-[217px] uppercase text-center lg:text-left">
                SEO
              </h2>
              <h3 className="lg:absolute lg:bottom-0 lg:left-[40px] text-global-4 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-jost font-semibold leading-tight lg:leading-[53px] text-center lg:text-left mt-4 lg:mt-0">
                Manage Business SEO<br />
                Optimization Easily
              </h3>
            </div>
          </div>
          <p className="ml-[10rem] mt-3 text-global-2 text-sm sm:text-base lg:text-[16px] font-kumbh-sans leading-6 sm:leading-7 lg:leading-[32px] text-center lg:text-left lg:mr-[26px]">
            Quis autem vel eum iure reprehenderit qui in ea voluptates<br className="hidden sm:block" />
            velit esse quam molestiae consequatur velillum
          </p>
          
          {/* FAQ Section */}
          <div className="flex flex-col justify-start items-center w-full lg:w-[74%]">
            {/* FAQ Item 1 */}
            <button className="flex justify-between items-center w-full bg-global-3 border-b border-solid border-[#2e2d2d] p-3 lg:p-[14px] lg:px-[8px] hover:bg-global-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-5" onClick={() => toggleFaq('faq-1')} aria-expanded={selectedFaq === 'faq-1'}>
              <p className="text-global-4 text-base sm:text-lg lg:text-[18px] font-jost font-semibold leading-6 lg:leading-[27px] text-left">Why SEO Growth Business Strategy ?</p>
              <Image src="/images/img_arrow_white_a700.svg" alt="" width={14} height={18} className={`w-3 h-4 lg:w-[14px] lg:h-[18px] lg:mr-[6px] transition-transform duration-200 ${selectedFaq === 'faq-1' ? 'rotate-90' : ''}`} />
            </button>
            {selectedFaq === 'faq-1' && (
              <div className="flex justify-start items-end w-full bg-global-2">
                <div className="flex justify-start items-center w-full p-4 lg:p-[6px] mt-2 lg:mt-[10px]">
                  <p className="text-global-1 text-sm sm:text-base lg:text-[16px] font-kumbh-sans leading-6 sm:leading-7 lg:leading-[32px] w-full lg:mr-[6px]">On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded</p>
                </div>
              </div>
            )}
            
            {/* FAQ Item 2 - Active */}
            <button className="flex justify-between items-center w-full bg-global-3 border-b border-solid border-global-5 p-3 lg:p-[14px] lg:px-[8px] hover:bg-global-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-5 mt-2 lg:mt-[10px]" onClick={() => toggleFaq('faq-2')} aria-expanded={selectedFaq === 'faq-2'}>
              <p className="text-global-4 text-base sm:text-lg lg:text-[18px] font-jost font-semibold leading-6 lg:leading-[27px] text-left">How We Help Your Projects ?</p>
              <Image src="/images/img_arrow_white_a700.svg" alt="" width={14} height={18} className={`w-3 h-4 lg:w-[12px] lg:h-[14px] transition-transform duration-200 ${selectedFaq === 'faq-2' ? 'rotate-90' : ''}`} />
            </button>
            {selectedFaq === 'faq-2' && (
              <div className="flex justify-start items-end w-full bg-global-2 mt-2 lg:mt-[10px]">
                <div className="flex justify-start items-center w-full p-4 lg:p-[6px] mt-2 lg:mt-[10px]">
                  <p className="text-global-1 text-sm sm:text-base lg:text-[16px] font-kumbh-sans leading-6 sm:leading-7 lg:leading-[32px] w-full lg:mr-[6px]">On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded</p>
                </div>
              </div>
            )}
            
            {/* FAQ Item 3 */}
            <button className="flex justify-between items-center w-full bg-global-3 border-b border-solid border-[#2e2d2d] p-3 lg:p-[14px] lg:px-[8px] hover:bg-global-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-global-5 mt-2 lg:mt-[10px]" onClick={() => toggleFaq('faq-3')} aria-expanded={selectedFaq === 'faq-3'}>
              <p className="text-global-4 text-base sm:text-lg lg:text-[18px] font-jost font-semibold leading-6 lg:leading-[27px] text-left">Why SEO Growth Business Strategy ?</p>
              <Image src="/images/img_arrow_white_a700.svg" alt="" width={14} height={18} className={`w-3 h-4 lg:w-[14px] lg:h-[18px] lg:mr-[6px] transition-transform duration-200 ${selectedFaq === 'faq-3' ? 'rotate-90' : ''}`} />
            </button>
            {selectedFaq === 'faq-3' && (
              <div className="flex justify-start items-end w-full bg-global-2">
                <div className="flex justify-start items-center w-full p-4 lg:p-[6px] mt-2 lg:mt-[10px]">
                  <p className="text-global-1 text-sm sm:text-base lg:text-[16px] font-kumbh-sans leading-6 sm:leading-7 lg:leading-[32px] w-full lg:mr-[6px]">On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Images */}
        <div className="relative w-full lg:w-[44%] flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none lg:w-[700px] h-auto lg:h-[678px]">
            <Image src="/images/img_pseudo_678x476.png" alt="" width={476} height={678} className="lg:absolute lg:top-0 lg:left-[24px] w-full lg:w-[476px] h-auto lg:h-[678px] object-cover rounded-lg" sizes="(max-width: 1024px) 384px, 476px" />
            <Image src="/images/img_faq_png.png" alt="FAQ illustration" width={700} height={572} className="lg:absolute p-0 lg:p-10 lg:bottom-0 lg:left-0 w-full lg:w-[700px] h-auto lg:h-[572px] object-cover rounded-lg mt-4 lg:mt-0 overflow-visible" sizes="(max-width: 1024px) 384px, 700px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;