import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Zap, ShieldCheck } from 'lucide-react';
import SplineObject from '@/components/ui/SplineObject';

const benefits = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: 'Unparalleled Accuracy',
    description: 'Our AI is specifically trained on consular processing guidelines and real-world case data for the highest accuracy.',
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: 'Instant, Actionable Insights',
    description: 'Don\'t wait weeks for a consultation. Get your risk score and recommendations in minutes, not days.',
  },
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    title: 'Bank-Level Security',
    description: 'Your data is your own. We use end-to-end encryption and delete all scan data after 30 days. We never see your passwords.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
              The Smartest Way to Prepare for Your U.S. Visa Interview
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Generic advice won't cut it. VisaScan AI gives you a personalized, data-driven advantage that immigration lawyers charge thousands for.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SplineObject />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;