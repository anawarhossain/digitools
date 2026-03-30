import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto text-white p-14">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-10">
          <div className="space-y-3 col-span-2">
            <h1 className="text-3xl">DigiTools</h1>
            <p className="text-gray-400">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="text-gray-400 list-none">
            <li className="text-white">
              <p>Product</p>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Templates</a>
            </li>
            <li>
              <a href="">Integrations</a>
            </li>
          </div>
          <div className="text-gray-400 list-none">
            <li className="text-white">
              <p>Company</p>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
          </div>
          <div className="text-gray-400 list-none">
            <li className="text-white">
              <p>Resources</p>
            </li>
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </div>
          <div className="space-y-2">
            <p>Social Links</p>
            <div className="flex gap-3">
              <FaInstagramSquare />
              <FaFacebook />
              <FaSquareXTwitter />
            </div>
          </div>
        </div>

        <div className="divider before:bg-white after:bg-white opacity-30"></div>
        <div className="flex justify-between text-gray-500 text-sm">
          <div>
            <p>© 2026 Digitools. All rights reserved.</p>
          </div>
          <div className="flex gap-3">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
