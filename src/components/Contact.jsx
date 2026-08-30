'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { useNotification } from './Notification';
import { IconBrandLinkedin, IconBrandGithub, IconSend } from '@tabler/icons-react';

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
          showNotification.success('Message transmitted successfully!');
          setForm({ name: '', email: '', message: '' });
        },
        error => {
          showNotification.error('Failed to send message', error.text || 'Please try again later.');
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-b border-[rgb(var(--color-border))]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14"
      >
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{'//'} 05&nbsp;&nbsp;Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">Get in Touch</h2>
        <p className="text-text-secondary text-base mt-2 max-w-xl leading-relaxed">
          Open to backend engineering roles, AI infrastructure projects, and technical discussions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="p-6 rounded-xl border border-[rgb(var(--color-border))] bg-surface space-y-4">
            <h3 className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
              {'//'} Direct Communication
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Prefer direct outreach? Connect with me on LinkedIn or review my open-source code repositories.
            </p>

            <div className="pt-2 space-y-3 font-mono text-xs">
              <a
                href="https://www.linkedin.com/in/vaibhav-kaul-448889246/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-text-secondary hover:text-accent transition-colors"
              >
                <IconBrandLinkedin size={15} />
                <span>linkedin.com/in/vaibhav-kaul</span>
              </a>

              <a
                href="https://github.com/SVK04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-text-secondary hover:text-accent transition-colors"
              >
                <IconBrandGithub size={15} />
                <span>github.com/SVK04</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-7 rounded-xl border border-[rgb(var(--color-border))] p-6 sm:p-8 bg-surface shadow-sm"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="bg-surface-dim/40 border border-[rgb(var(--color-border))] py-3 px-4 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-sans rounded-md text-sm"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                className="bg-surface-dim/40 border border-[rgb(var(--color-border))] py-3 px-4 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-sans rounded-md text-sm"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">Message</span>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Project requirements, roles, or questions..."
                required
                className="bg-surface-dim/40 border border-[rgb(var(--color-border))] py-3 px-4 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-sans resize-none rounded-md text-sm"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 btn-primary font-mono text-xs tracking-widest uppercase py-3 px-6 rounded-md self-start disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              <IconSend size={13} />
              <span>{loading ? 'Transmitting...' : 'Transmit Message'}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
