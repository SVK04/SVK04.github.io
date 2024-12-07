import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { useNotification } from './Notification';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const showNotification = useNotification();

  const [loading, setLoading] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const googleSheetURL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

    try {
      const response = await fetch(googleSheetURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // redirect:'manual',
        // mode:'no-cors',
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Message: form.message,
        }),
      });

      const result = await response.json();

      if (result.status === 200) {
        showNotification.success('Your message has been sent successfully! Thank you.');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.log('Failed to send your message. Please try again.');
      }
    } catch (error) {
      showNotification.error('error', error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8
      rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-black
            rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-black
            rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>

            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-black
            rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-black py-3 px-8
          outline-none w-fit text-white font-bold hover:bg-gray-400
          shadow-md shadow-primary rounded-xl"
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
