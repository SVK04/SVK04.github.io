import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import axios from 'axios';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

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
      const response = await axios.post(googleSheetURL, {
        name: form.name,
        email: form.email,
        message: form.message,
      });

      const result = response;
      console.log('result', result);

      if (result.status === 'SUCCESS') {
        alert('Your message has been sent successfully! Thank you.');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error);
      alert('An error occurred. Please try again later.');
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