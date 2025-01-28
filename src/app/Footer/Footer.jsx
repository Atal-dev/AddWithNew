
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FaFacebookF, FaDribbble, FaInstagram } from 'react-icons/fa';
import { IoMdArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#283132] text-white px-6 py-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Logo Section */}
            <div className="flex items-center">
            {/* Hexagon Logo */}
            <div className="mr-3">
                <img src="https://demo.awaikenthemes.com/inspaire/wp-content/uploads/2024/11/footer-logo.svg" alt="" />
            </div>
            {/* Brand Name */}
            {/* <span className="text-2xl font-bold">inspaire</span> */}
            </div>

            {/* Social Media Section */}
            <div className="flex items-center gap-6">
          <span className="text-lg">Follow Our Socials</span>
          <div className="flex gap-4">
            <a href="#" className="text-gray-800">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all hover:bg-gray-500 hover:text-white">
                <FaFacebookF className="text-lg" />
                <span className="sr-only">Facebook</span>
              </div>
            </a>
            <a href="#" className="text-gray-800">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all hover:bg-gray-500 hover:text-white">
                <FaDribbble className="text-lg" />
                <span className="sr-only">Dribbble</span>
              </div>
            </a>
            <a href="#" className="text-gray-800">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all hover:bg-gray-500 hover:text-white">
                <FaInstagram className="text-lg" />
                <span className="sr-only">Instagram</span>
              </div>
            </a>
          </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 pt-8 border-t border-gray-700 lg:grid-cols-4 gap-8">
          {/* Information Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300">About Our Company</a></li>
              <li><a href="#" className="hover:text-gray-300">View Our Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers At Company</a></li>
              <li><a href="#" className="hover:text-gray-300">Read Our Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Our Latest Projects</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300">Residential Interior Design</a></li>
              <li><a href="#" className="hover:text-gray-300">Commercial Interior Design</a></li>
              <li><a href="#" className="hover:text-gray-300">Furniture And Decor Selection</a></li>
              <li><a href="#" className="hover:text-gray-300">Lighting Design</a></li>
              <li><a href="#" className="hover:text-gray-300">Color Consultation</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center transition-all hover:border-white">
                  <FaPhone className="text-lg" />
                </div>
                <span>+1 (213) 465 789</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center transition-all hover:border-white">
                  <FaEnvelope className="text-lg" />
                </div>
                <span>info@domain.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-10 rounded-full border border-gray-600 flex items-center justify-center transition-all hover:border-white">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <span>Generała Ziętka Jerzego 54, Mysłowice 41-412</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get The Latest Trending News</h3>
            <p className="mb-4">Your Dream Space Starts Here Get Exclusive Design Straight Your Inbox!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-slate-900 rounded-l focus:outline-none"
              />
              <button className="bg-white text-gray-500 px-4 py-2 rounded-r ">
                <IoMdArrowForward  className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700 gap-4">
          <p>Copyright © 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


