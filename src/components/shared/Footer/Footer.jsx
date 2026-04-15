import React from 'react';
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import logo from "@/assets/logo/logo-xl.png";


const Footer = () => {
  
  return (
    <footer className="bg-[#1a3c31] text-white py-12 px-6">

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
<Image 
  src={logo}
  alt="KeenKeeper Logo"
  width={412}
  height={61}
  className="w-40 md:w-56 lg:w-72 h-auto mb-4"
/>

        <p className=" text-gray-400 mb-6 text-sm md:text-base ">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-10">
          <h3 className="text-xl   mb-4 font-medium">Social Links</h3>
          <div className="flex gap-4 justify-center">
           
            <a className="bg-white p-2.5 rounded-full text-black hover:bg-gray-200 ">
              <FaInstagram size={18} />
            </a>
           
            <a className="bg-white p-2.5 rounded-full text-black hover:bg-gray-200 ">
              <FaFacebookF size={18} />
            </a>
      
            <a className="bg-white p-2.5 rounded-full text-black hover:bg-gray-200 ">
              <RiTwitterXFill size={18} />
            </a>
          </div>
        </div>

        <div className="w-full
         border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between 
         items-center gap-4 text-xs md:text-sm text-gray-400 ">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <a  className="hover:text-white ">Privacy Policy</a>
            <a  className="hover:text-white ">Terms of Service</a>
            <a  className="hover:text-white ">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;