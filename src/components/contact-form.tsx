import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '+917501411769';
    const message = `
*New Enquiry*
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        <motion.button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Send className="w-4 h-4" />
          Send to WhatsApp
        </motion.button>
      </div>
    </motion.form>
  );
};