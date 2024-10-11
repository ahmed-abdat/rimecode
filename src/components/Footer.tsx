'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black text-gray-800 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="RimCode Logo" className="h-8 w-8 mr-2" width={32} height={32} />
              <span className="text-xl font-bold">RimCode</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Innovative Web & Mobile Solutions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">Mobile Apps</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">UI/UX Design</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} RimCode. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
              <FaDiscord className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
              <FaTwitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;