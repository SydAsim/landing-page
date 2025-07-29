import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "Is this affiliated with any government agency?",
    answer: "No, VisaScan AI is a private simulation tool. We are not affiliated with DHS, ICE, or any government agency. Our AI simulates how officials might review your profiles based on publicly available guidelines and patterns."
  },
  {
    question: "Does it store my data?",
    answer: "We prioritize your privacy. We only analyze publicly available information from the profiles you provide. All scan data and personal information is encrypted and automatically deleted from our servers after 30 days."
  },
  {
    question: "What does the $14.99 unlock include?",
    answer: "The full report includes a deep analysis of up to three social media profiles, specific examples of flagged content with context, personalized recommendations for mitigation, risk scoring across different categories, and a downloadable PDF report for your records."
  },
  {
    question: "How accurate is the AI risk score?",
    answer: "Our AI is trained on thousands of real-world visa cases and official guidelines, achieving over 94% accuracy in identifying potential risk factors. However, this is a simulation and should be used as a supplementary tool, not as a replacement for legal advice from a qualified immigration attorney."
  },
  {
    question: "Will using this tool affect my visa application?",
    answer: "Absolutely not. This is a completely private and confidential tool. Government agencies have no access to your scan results or the fact that you have used our service. Our goal is to help you proactively clean up your profile to improve your chances."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our social media risk assessment.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white dark:bg-gray-900 rounded-lg px-6 border-b-0 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;