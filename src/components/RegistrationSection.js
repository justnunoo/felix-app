"use client"

import React from 'react'
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from 'next/link';

export default function RegistrationSections() {
    

  return (
    <div>{/* Reusable Registration & Partnership Section with Framer Motion */}
    <RegistrationSection 
      title="Stay Updated"
      description="Join our mailing list to receive updates about our launch and programs."
      buttonText="Join Now"
      link="/register"
    />

    <RegistrationSection 
      title="Become Our Partner"
      description="Register to join us in making an impact! Sign up to explore partnership opportunities."
      buttonText="Register Now"
      link="/register"
    /></div>
  )
}


// Reusable Component with Animation
const RegistrationSection = ({ title, description, buttonText, link }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" }); // Animates only once
  
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 bg-white"
      >
        <div className="max-w-lg mx-auto p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          
          {title === "Stay Updated" && (
            <input
              type="email"
              placeholder="Enter email address"
              className="border p-2 my-4 rounded w-full"
            />
          )}
  
          <Link
            href={link}
            className="block w-full text-center bg-indigo-700 text-white font-semibold rounded-lg py-2 hover:bg-indigo-800 transition"
          >
            {buttonText}
          </Link>
        </div>
      </motion.section>
    );
  };