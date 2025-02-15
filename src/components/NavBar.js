// "use client"

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-indigo-700 text-white">
//       {/* Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Flex container for the navbar */}
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center space-x-2">
//               {/* <span className="text-xl font-bold">IntoWine Consult</span> */}
//               <Image 
//                 src="/Picture1-removebg-preview.png"
//                 alt='logo'
//                 height={70}
//                 width={120} />
//             </Link>
//           </div>

//           {/* Navigation Links (Desktop) */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 href="/"
//                 className="hover:text-indigo-200 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="hover:text-indigo-200 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/services"
//                 className="hover:text-indigo-200 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Services
//               </Link>
//               <Link
//                 href="/contact"
//                 className="hover:text-indigo-200 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>

//           {/* Hamburger Menu (Mobile) */}
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 {isMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Responsive Navigation Menu */}
//       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link
//             href="/"
//             className="hover:bg-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="hover:bg-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             About Us
//           </Link>
//           <Link
//             href="/services"
//             className="hover:bg-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Services
//           </Link>
//           <Link
//             href="/contact"
//             className="hover:bg-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="bg-indigo-700 text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for the navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Picture1-removebg-preview.png"
                alt="logo"
                height={70}
                width={120}
              />
            </Link>
          </motion.div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "About Us", "Services", "Contact"].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-indigo-200 transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="-mr-2 flex md:hidden">
            <motion.button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Responsive Navigation Menu (Mobile) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-indigo-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "About Us", "Services", "Contact"].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:bg-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
