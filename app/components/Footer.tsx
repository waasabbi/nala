'use client';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#f8e3dd] text-gray-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-serif mb-4">NALA</h3>
            <p className="text-gray-600 mb-6">
              Premium skincare products made with natural ingredients for a healthier, more radiant you.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/essencenala/" className="bg-white p-2 rounded-full text-[#ff8c69] hover:bg-[#ff8c69] hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-[#ff8c69] hover:bg-[#ff8c69] hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
            
            </div>
          </div>
          
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#ff8c69] transition-colors">About Us</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#ff8c69] transition-colors">Contact</button></li>
              {/* <li><a href="#" className="hover:text-[#ff8c69] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#ff8c69] transition-colors">Sustainability</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-600">
              {/* <li><a href="#" className="hover:text-[#ff8c69] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#ff8c69] transition-colors">Shipping & Returns</a></li> */}
              <li><a href="#" className="hover:text-[#ff8c69] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#ff8c69] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#f0d5ce] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NALA. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <a href="#" className="hover:text-[#ff8c69] transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#ff8c69] transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-[#ff8c69] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 