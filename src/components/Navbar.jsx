import React, { useState } from 'react';
import { styles } from '../style';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import { default as logo } from '../assets/vklogo.svg';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex
    items-center py-5 fixed top-0 z-20 bg-gray-900`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[1.125rem] font-bold cursor-pointer flex">
            Vaibhav&nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(Link => (
            <li
              key={Link.id}
              className={`${active === Link.title ? 'text-white' : 'text-gray-400'}
            hover:text-white text-[1.125rem]
            font-medium cursor-pointer
            `}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[1.75rem] h-[1.75rem] object-contain 
           cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-6
          black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
          z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(Link => (
                <li
                  key={Link.id}
                  className={`${active === Link.title ? 'text-white' : 'text-gray-400'}
           font-poppins font-medium cursor-pointer text-[16px]
            `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
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
