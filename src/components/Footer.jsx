import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import img2 from "../assets/client/download (3).png";
import img3 from "../assets/client/download (4).png";

const Footer = () => {
  return (
    <footer className="bg-[#F2FAFA] border-t border-gray-200 py-6 mt-6">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-center mb-4">
            <div className="  flex items-center justify-center rounded-md">
              <img src={logo} alt="" />
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col">
          <h3 className="text-blue-600 font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Books
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Ebooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                New Release
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          <h3 className="text-blue-600 font-semibold text-lg mb-4">
            Latest News
          </h3>
          <ul className="space-y-4">
            <li className="flex space-x-4">
              <div className="w-24 h-16 rounded-md">
                <img className="w-20 h-full" src={img2} alt="" />
              </div>
              <div>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Nostrud exercitation
                </a>
                <p className="text-gray-600 text-sm">
                  Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
                <span className="text-gray-500 text-xs">15 April 2022</span>
              </div>
            </li>
            <li className="flex space-x-4">
              <div className="w-24 h-16 rounded-md">
                <img className="w-20 h-full" src={img3} alt="" />
              </div>
              <div>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Nostrud exercitation
                </a>
                <p className="text-gray-600 text-sm">
                  Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
                <span className="text-gray-500 text-xs">15 April 2022</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-6 text-center">
        <p className="text-gray-600 text-sm">
          © 2024 Alim. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2 text-sm">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            Privacy
          </a>
          <span>|</span>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
