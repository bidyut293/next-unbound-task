'use client';

import React, { useState, useMemo, useCallback } from 'react';

// Common Components
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

// Section Components
import HeroSection from '@/components/sections/HeroSection';
import PartnersSection from '@/components/sections/PartnersSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import AwardsSection from '@/components/sections/AwardsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SeoSection from '@/components/sections/SeoSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

const HomePage: React.FC = () => {
  // State for the FAQ section
  const [selectedFaq, setSelectedFaq] = useState<string | null>('faq-2');
  
  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handler for form submission
  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }, [formData]);

  // Handler for form input changes
  const handleFormChange = useCallback((field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  // Handler to toggle FAQ items
  const toggleFaq = useCallback((faqId: string) => {
    setSelectedFaq(prev => (prev === faqId ? null : faqId));
  }, []);

  // Memoized data for different sections
  const sliderItems = useMemo(() => [
    { id: '1', image: '/images/img_project_1_jpg.png', category: 'Marketing', title: 'Tech Website\nSolution' },
    { id: '2', image: '/images/img_project_2_jpg.png', category: 'Technology', title: 'App Platform\nIntegration' },
    { id: '3', image: '/images/img_project_3_jpg.png', category: 'Software', title: 'Software Tools\nDevelopment' },
  ], []);

  const services = useMemo(() => [
    { icon: '/images/img_service_icon_1_png.png', title: 'Graphics Design', description: 'Sed perspiciatis unde omnis\nnatus error voluptatem' },
    { icon: '/images/img_service_icon_2_png.png', title: 'Ideation & Evaluation', description: 'Sed perspiciatis unde omnis\nnatus error voluptatem' },
    { icon: '/images/img_service_icon_3_png.png', title: 'Brand Identity', description: 'Sed perspiciatis unde omnis\nnatus error voluptatem' },
    { icon: '/images/img_service_icon_4_png.png', title: 'Custom Service', description: 'Sed perspiciatis unde omnis\nnatus error voluptatem' },
    { icon: '/images/img_service_icon_5_png.png', title: 'Web Strategy', description: 'Sed perspiciatis unde omnis\nnatus error voluptatem' },
  ], []);

  const achievements = useMemo(() => [
    { icon: '/images/img_feature_icon_1_png.png', number: '150', label: 'Project Completed' },
    { icon: '/images/img_feature_icon_2_png.png', number: '250', label: 'Satisfied Clients' },
    { icon: '/images/img_feature_icon_3_png.png', number: '50', label: 'Expert Teams' },
  ], []);

  const testimonials = useMemo(() => [
    { quote: 'Sed ut perspiciatis unde natus error sitwa\nvoluptatem accusantium laudant totames\naperiam eaque abillo beatae vitae', name: 'Richard S. Brooks', position: 'CEO & Founder' },
    { quote: 'Sed ut perspiciatis unde natus error sitwa\nvoluptatem accusantium laudant totames\naperiam eaque abillo beatae vitae', name: 'Gars G. Bernhardt', position: 'CEO & Founder' },
  ], []);

  return (
    <div className="w-full bg-[#000a1f] flex flex-col justify-start items-center">
      <Header />
        <HeroSection />
        <PartnersSection />
      <main className='w-full max-w-[1530px]'>
        <SolutionsSection services={services} />
        <AwardsSection />
        <FeaturesSection services={services} />
        <ProjectsSection sliderItems={sliderItems} />
        <SeoSection selectedFaq={selectedFaq} toggleFaq={toggleFaq} />
        <AchievementsSection achievements={achievements} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection
          formData={formData}
          onFormChange={handleFormChange}
          onFormSubmit={handleFormSubmit}
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;