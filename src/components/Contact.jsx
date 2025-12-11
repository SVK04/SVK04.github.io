import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
    <div className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-tertiary p-8 rounded-2xl shadow-lg border border-border"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-text-primary font-medium mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="bg-surface-dim py-3 px-4 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition shadow-sm border border-border"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-text-primary font-medium mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="bg-surface-dim py-3 px-4 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition shadow-sm border border-border"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-text-primary font-medium mb-3">Your Message</span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="bg-surface-dim py-3 px-4 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition resize-none shadow-sm border border-border"
            />
          </label>

          <button
            type="submit"
            className="bg-brand-primary hover:opacity-90 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 w-fit focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
