import React from 'react';
import { motion } from 'framer-motion';
import { Image, Type, Link2, BrainCircuit } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-blue-500" />,
    title: 'Advanced AI Analysis',
    description: 'Our proprietary AI, powered by GPT-4, understands the nuances of immigration law and social media trends.',
  },
  {
    icon: <Type className="w-8 h-8 text-green-500" />,
    title: 'Text & Caption Scanning',
    description: 'We analyze your posts, comments, and bio for keywords and phrases that could be misinterpreted by visa officers.',
  },
  {
    icon: <Image className="w-8 h-8 text-purple-500" />,
    title: 'Image Content Analysis',
    description: 'Our AI examines images for potentially problematic content, symbols, or activities that could raise red flags.',
  },
  {
    icon: <Link2 className="w-8 h-8 text-orange-500" />,
    title: 'Link & Hashtag Review',
    description: 'We check the external links you share and the hashtags you use for connections to controversial topics.',
  },
];

const FeaturesSection = () => {
    const handleMouseMove = (e) => {
        for(const card of document.querySelectorAll(".card-glow")) {
            const rect = card.getBoundingClientRect(),
                  x = e.clientX - rect.left,
                  y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    }

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            A Deeper Look at Your Digital Footprint
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI doesn't just scratch the surface. We provide a multi-layered analysis to give you the most comprehensive risk assessment possible.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" onMouseMove={handleMouseMove}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 dark:bg-card/70 card-glow transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;