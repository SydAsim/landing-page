import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Chen",
    country: "China",
    university: "Stanford University",
    quote: "I never knew my old hashtags could raise a flag. VisaScan helped me clean up my profile before my visa interview. So much peace of mind!",
    rating: 5
  },
  {
    name: "Raj Patel",
    country: "India",
    university: "MIT",
    quote: "The AI found issues I completely missed. The report was clear and the recommendations were easy to follow. Got my F-1 visa approved on the first try!",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    country: "Mexico",
    university: "Harvard",
    quote: "This service is a must-have for any international student. It's like having an immigration expert review your social media for a fraction of the cost.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from international students who've successfully navigated the visa process with our help.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-slate-50 dark:bg-slate-800/50 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-6">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.country} • {testimonial.university}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;