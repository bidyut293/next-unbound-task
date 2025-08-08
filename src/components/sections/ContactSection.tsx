import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  formData: FormData;
  onFormChange: (field: string) => (value: string) => void;
  onFormSubmit: (e: React.FormEvent) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ formData, onFormChange, onFormSubmit }) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 lg:mt-32" aria-label="Contact us">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">
        {/* Left Image */}
        <div className="w-full lg:w-auto flex justify-center">
          <Image src="/images/img_home5_12_7_png.png" alt="Contact us illustration" width={540} height={452} className="w-full max-w-md lg:max-w-none lg:w-[540px] h-auto lg:h-[452px] object-cover lg:mt-[109px]" sizes="(max-width: 1024px) 384px, 540px" />
        </div>
        
        {/* Right Content */}
        <div className="flex flex-col gap-6 lg:gap-[24px] justify-start items-center lg:items-end flex-1">
          {/* Contact Header */}
          <div className="relative w-full lg:w-[82%] lg:mr-[28px]">
            <div className="relative w-full lg:w-[510px] h-auto lg:h-[216px] flex flex-col justify-center items-center lg:block">
              <Image src="/images/img_pseudo.png" alt="" width={84} height={10} className="lg:absolute lg:top-[74px] lg:left-[40px] w-16 h-2 lg:w-[84px] lg:h-[10px] z-10 mb-4 lg:mb-0" />
              <h2 className="lg:absolute lg:top-0 lg:left-0 text-global-5 text-4xl sm:text-6xl lg:text-8xl xl:text-[150px] font-jost font-bold leading-tight lg:leading-[217px] uppercase text-center lg:text-left">
                CALL
              </h2>
              <h3 className="lg:absolute lg:bottom-0 lg:left-[40px] text-global-4 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-jost font-semibold leading-tight lg:leading-[53px] text-center lg:text-left mt-4 lg:mt-0">
                Ready to Work Together<br />
                In News Projects ?
              </h3>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={onFormSubmit} className="flex mr-0 lg:mr-12 flex-col gap-3 lg:gap-[12px] justify-start items-start w-full lg:w-[74%]">
            <input type="text" placeholder="Your Name*" value={formData.name} onChange={(e) => onFormChange('name')(e.target.value)} required className="w-full bg-edittext-1 text-global-1 placeholder-global-2 text-sm sm:text-base lg:text-[16px] font-nunito leading-5 lg:leading-[22px] rounded-[4px] p-3 lg:p-[14px] outline-none border border-transparent focus:border-global-5 transition-all duration-200 min-h-[44px] sm:min-h-[48px]" />
            <input type="email" placeholder="Your Email*" value={formData.email} onChange={(e) => onFormChange('email')(e.target.value)} required className="w-full bg-edittext-1 text-global-1 placeholder-global-2 text-sm sm:text-base lg:text-[16px] font-nunito leading-5 lg:leading-[22px] rounded-[4px] p-3 lg:p-[14px] outline-none border border-transparent focus:border-global-5 transition-all duration-200 min-h-[44px] sm:min-h-[48px]" />
            <textarea placeholder="Your Message*" value={formData.message} onChange={(e) => onFormChange('message')(e.target.value)} required rows={4} className="w-full bg-edittext-1 text-global-1 placeholder-global-2 text-sm sm:text-base lg:text-[16px] font-nunito leading-5 lg:leading-[22px] rounded-[4px] border border-[#d0dcec] p-3 lg:p-[14px] lg:px-[16px] outline-none resize-none focus:border-global-5 transition-all duration-200" />
            <Button type="submit" variant="gradient" className="text-global-4 text-sm sm:text-base lg:text-lg xl:text-[17px] font-nunito font-semibold leading-5 sm:leading-6 lg:leading-[24px] text-center rounded-[4px] px-6 sm:px-8 lg:px-[32px] py-3 lg:py-[12px] mt-4 sm:mt-6 lg:mt-8 hover:scale-105 transition-transform duration-200">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;