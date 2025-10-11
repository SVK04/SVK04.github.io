import React, { useState } from 'react';
import { styles } from '../style';
import { Link } from 'react-router';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = title => {
    setActive(title);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gray-900`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {/* <img src={vkLogo} alt="logo" className="w-9 h-9 object-contain" /> */}
          <p className="text-white text-[1.125rem] font-bold cursor-pointer flex">
            Vaibhav&nbsp;<span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ id, title }) => (
            <li
              role="presentation"
              key={id}
              className={`${
                active === title ? 'text-white' : 'text-gray-400'
              } hover:text-white text-[1.125rem] font-medium cursor-pointer`}
              onClick={() => handleNavClick(title)}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            role="presentation"
            src={isMenuOpen ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setIsMenuOpen(prev => !prev)}
          />
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 items-start">
              {navLinks.map(({ id, title }) => (
                <li
                  role="presentation"
                  key={id}
                  className={`${
                    active === title ? 'text-white' : 'text-gray-400'
                  } font-medium cursor-pointer text-[16px]`}
                  onClick={() => handleNavClick(title)}
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
