import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection';
import SampleReportSection from '@/components/landing/SampleReportSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import PricingSection from '@/components/landing/PricingSection';
import FaqSection from '@/components/landing/FaqSection';
import CtaFooter from '@/components/landing/CtaFooter';
import Footer from '@/components/layout/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/20">
      <Helmet>
        <title>VisaScan AI - Protect Your U.S. Visa Application with Social Media Risk Analysis</title>
        <meta name="description" content="Scan your social media profiles for potential U.S. visa risks using AI. Get instant risk assessment and recommendations before your visa interview." />
      </Helmet>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-[68px]">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <WhyChooseUsSection />
        <SampleReportSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaFooter />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;