'use client';

import { useState } from 'react';
import { useNotification } from './Notification';

// Sits on the ink-colored closing section, so colors are paper-on-ink.
const fieldClass =
  'w-full rounded-none border-0 border-b border-background/40 bg-transparent px-0 py-3 text-lg text-background placeholder:text-background/40 focus:border-accent-bright focus:outline-none focus:ring-0';

const ContactForm = () => {
  const showNotification = useNotification();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      showNotification.success('Message sent. I’ll reply by email.');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      // Provider errors (e.g. an expired Gmail connection) are for me, not the visitor.
      console.error('Contact form send failed:', error?.status, error?.text || error);
      showNotification.error('Message not sent. Please try again later, or reach me on LinkedIn.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col">
        <span className="text-sm text-background/70">Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          required
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col">
        <span className="text-sm text-background/70">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col">
        <span className="text-sm text-background/70">What do you need built or fixed?</span>
        <textarea
          rows="3"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="btn btn--on-ink btn--fill mt-2 self-start disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Start a conversation'} <span aria-hidden="true">→</span>
      </button>
    </form>
  );
};

export default ContactForm;
