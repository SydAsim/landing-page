import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const steps = [
  {
    step: "01",
    icon: <Users className="w-8 h-8" />,
    title: "Connect Your Profiles",
    description: "Securely link your public social media profiles. We never ask for your passwords."
  },
  {
    step: "02",
    icon: <Zap className="w-8 h-8" />,
    title: "AI Scans In Real-Time",
    description: "Our GPT-4 powered AI analyzes public bios, posts, images, and captions for potential visa risks."
  },
  {
    step: "03",
    icon: <FileText className="w-8 h-8" />,
    title: "Get Your Actionable Report",
    description: "Receive an instant risk score, then unlock a full detailed report with clear recommendations."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Get Your Social Media Risk Assessment in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our process is fast, secure, and designed to give you clarity and confidence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card/60 dark:bg-card/80">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200 dark:border-blue-800">
                    <div className="text-blue-600 dark:text-blue-400">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">STEP {item.step}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;