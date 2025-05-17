import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-tr from-gray-900 via-black to-gray-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-7xl font-extrabold text-white tracking-wide mb-4">404</h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">Oops! The page you’re looking for doesn’t exist.</p>

        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-[#915eff] hover:bg-[#7e4de3] transition-colors rounded-full font-medium"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
