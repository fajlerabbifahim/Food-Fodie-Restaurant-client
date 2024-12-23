import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="bg-[#212121] text-white py-10">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Foodie</h3>
            <p className="text-sm text-gray-400">
              Foodie is your one-stop destination for exploring delicious
              cuisines from around the world. From Middle Eastern delights to
              global favorites, find your taste of joy!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/allFoods" className="hover:text-[#FF5722]">
                  All Foods
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#FF5722]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#FF5722]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#FF5722]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-400">Email: contact@foodie.com</p>
            <p className="text-sm text-gray-400 mb-4">Phone: +123 456 789</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="p-3 bg-gray-700 rounded-full hover:bg-[#FF5722] text-white"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-700 rounded-full hover:bg-[#FF5722] text-white"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-700 rounded-full hover:bg-[#FF5722] text-white"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-700 rounded-full hover:bg-[#FF5722] text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Foodie. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
