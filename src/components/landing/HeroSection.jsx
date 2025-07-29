import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, CheckCircle, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import visaPreview from './image.png';
import SplineObject from '@/components/ui/SplineObject';

const HeroSection = () => {
  const { toast } = useToast();

  const handleStartScan = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="government-seal w-16 h-16 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tighter">
              Worried About <span className="text-blue-500">U.S. Visa Risks?</span> Scan Your Social Media With AI.
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Our AI simulates how consular officers might review your profiles. Get a risk score and red flags in minutes—before your interview.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold"
                onClick={handleStartScan}
              >
                <Search className="w-5 h-5 mr-2" />
                Start Your Free Scan
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg"
                onClick={() => document.getElementById('sample-report')?.scrollIntoView()}
              >
                View Sample Report
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Free Initial Risk Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Secure & 100% Private</span>
              </div>
            </div>
          </motion.div>

         <motion.div 
  className="flex-1 max-w-lg lg:max-w-none flex justify-center items-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: 'spring', duration: 1.5, delay: 0.2 }}
>
  {/* Paste your image here */}
  <img 
    src={visaPreview}
    alt="3D Scan Visualization" 
    className="rounded-md w-full max-w-md"
  />
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
