import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const PricingSection = () => {
  const { toast } = useToast();

  const handleSelectPlan = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const tiers = [
    {
      name: 'Free Scan',
      price: '$0',
      description: 'A quick overview of your potential risk level.',
      features: [
        'Scan one social media profile',
        'Overall risk score (Safe, Moderate, High)',
        'Limited to 1 scan per person'
      ],
      nonFeatures: [
        'Detailed content analysis',
        'Actionable recommendations',
        'Downloadable PDF report',
        'Scan multiple profiles',
      ],
      buttonText: 'Start Free Scan',
      buttonVariant: 'outline'
    },
    {
      name: 'Full Report',
      price: '$14.99',
      description: 'A comprehensive, in-depth analysis for total peace of mind.',
      features: [
        'Scan up to 3 social media profiles',
        'Detailed risk score & flagged content',
        'Personalized, actionable recommendations',
        'Downloadable 12-page PDF report',
        'Priority email support'
      ],
      nonFeatures: [],
      buttonText: 'Get Full Report',
      buttonVariant: 'default',
      popular: true,
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Clear Pricing, Invaluable Peace of Mind
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that's right for you. Start for free or unlock a full, detailed analysis.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full flex flex-col ${tier.popular ? 'border-blue-500 border-2' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <p className="text-4xl font-bold pt-4">{tier.price} <span className="text-sm font-normal text-muted-foreground">{tier.name === 'Full Report' && '/ one-time'}</span></p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {tier.nonFeatures.map(feature => (
                      <li key={feature} className="flex items-start text-muted-foreground">
                        <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="w-full" variant={tier.buttonVariant} onClick={handleSelectPlan}>
                    {tier.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;