import { IconBrandGithub, IconBrandLinkedinFilled, IconBrandInstagram } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">© {new Date().getFullYear()} Vaibhav Kaul</h2>
          <p className="text-sm mt-1">Built with ❤️ using React & TailwindCSS</p>
        </div>

        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/SVK04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <IconBrandGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-kaul-448889246/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <IconBrandLinkedinFilled />
          </a>
          <a
            href="https://www.instagram.com/kaul__vaibhav/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <IconBrandInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
