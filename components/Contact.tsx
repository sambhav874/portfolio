'use client';

import { useState } from 'react';
import axios from 'axios'; // 1. Import axios
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '', // 2. Renamed 'message' to 'feedback' to match the API
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 3. Make a POST request to your API endpoint
      const response = await axios.post('/api/contact', formData);

      if (response.data.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', feedback: '' }); // Reset form on success
      } else {
        // Handle server-side failures if success is false
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      // Handle network errors or exceptions
      console.error('Contact form submission error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      // 4. Ensure the submitting state is always reset
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
          Get in Touch
        </h2>
        <div className="h-px w-24 bg-primary" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Column - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg font-light text-slate-400 mb-8 leading-relaxed">
            I'm always interested in new opportunities, collaborations, and conversations about technology, AI, and fintech.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Email</h3>
              <a href="mailto:sambhavjain874@gmail.com" className="text-slate-400 hover:text-white transition-colors font-light">
                sambhavjain874@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Location</h3>
              <p className="text-slate-400 font-light">Delhi, India</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Response Time</h3>
              <p className="text-slate-400 font-light">Usually within 24 hours</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#1e293b] border-slate-800 focus:border-primary transition-colors font-light"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#1e293b] border-slate-800 focus:border-primary transition-colors font-light"
              />
            </div>
            <div>
              <Textarea
                name="feedback"
                placeholder="Your Message..."
                value={formData.feedback}
                onChange={handleChange}
                required
                rows={6}
                className="bg-[#1e293b] border-slate-800 focus:border-primary transition-colors font-light resize-none"
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full group bg-primary text-white hover:bg-sky-500 transition-all duration-300">
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;