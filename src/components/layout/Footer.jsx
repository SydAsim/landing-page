import React from 'react';
import { Shield, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleEmailSignup = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <Shield className="w-7 h-7 text-blue-600" />
              <span className="text-xl font-bold">VisaScan AI</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Helping international students navigate the U.S. visa process with confidence.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" onClick={handleSocialClick}><Twitter className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" onClick={handleSocialClick}><Linkedin className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" onClick={handleSocialClick}><Instagram className="w-5 h-5" /></Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div>
              <p className="font-semibold mb-4">Product</p>
              <ul className="space-y-3">
                <li><a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">How It Works</a></li>
                <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Company</p>
              <ul className="space-y-3">
                <li><a href="#" onClick={handleSocialClick} className="text-sm text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" onClick={handleSocialClick} className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" onClick={handleSocialClick} className="text-sm text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Legal</p>
              <ul className="space-y-3">
                <li><a href="#" onClick={handleSocialClick} className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" onClick={handleSocialClick} className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2025 VisaScan AI. All rights reserved.</p>
          <div className="text-sm text-muted-foreground">
            Disclaimer: Not affiliated with any government agency. For informational purposes only.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;