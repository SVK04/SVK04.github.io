'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { useNotification } from './Notification';

const Contact = () => {
  const formRef = useRef();
  const showNotification = useNotification();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          showNotification.success('Your message has been sent successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        error => {
          showNotification.error('Error sending message', error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="border-t border-[rgb(var(--color-border))] max-w-6xl mx-auto px-6 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{'//'} 05&nbsp;&nbsp;Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Get in Touch</h2>
        <p className="text-text-secondary text-base mt-3 max-w-xl leading-relaxed">
          Whether it&apos;s a project inquiry, architecture consultation, or just a technical discussion, my inbox is
          open.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="max-w-2xl border border-[rgb(var(--color-border))] p-6 md:p-8 bg-[rgb(var(--color-surface))] hover:border-accent/30 transition-colors duration-200"
      >
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-text-secondary/80 tracking-widest uppercase">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="bg-transparent border border-[rgb(var(--color-border))] py-3 px-4 text-text-primary placeholder:text-text-secondary/25 placeholder:italic focus:outline-none focus:border-accent transition-colors duration-150 font-sans"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-text-secondary/80 tracking-widest uppercase">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="bg-transparent border border-[rgb(var(--color-border))] py-3 px-4 text-text-primary placeholder:text-text-secondary/25 placeholder:italic focus:outline-none focus:border-accent transition-colors duration-150 font-sans"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs text-text-secondary/80 tracking-widest uppercase">Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              required
              className="bg-transparent border border-[rgb(var(--color-border))] py-3 px-4 text-text-primary placeholder:text-text-secondary/25 placeholder:italic focus:outline-none focus:border-accent transition-colors duration-150 font-sans resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 border border-[rgb(var(--color-border))] bg-[rgb(var(--color-background))] hover:bg-[rgb(var(--color-border))] text-text-primary font-mono text-xs tracking-widest uppercase py-4 px-8 transition-colors duration-200 focus:outline-none focus:border-accent self-start disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? 'Sending...' : 'Transmit Message'}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
