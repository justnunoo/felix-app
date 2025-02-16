"use client"; // Ensures animations run on the client side

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function MissionVisionSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 text-center bg-gradient-to-b from-gray-50 to-gray-200"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-indigo-700">Our Mission & Vision</h2>
        <p className="text-lg text-gray-600 mt-2">
          Empowering businesses with expert financial solutions.
        </p>

        {/* Mission & Vision Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
          {/* Mission */}
          <AnimatedCard title="Our Mission">
            Our mission is to create a dynamic platform for professionals and
            investors to share knowledge, exchange ideas, and build strategic networks.
            Through curated training, coaching, and collaborative opportunities,
            we aim to equip our members with the tools and insights needed to succeed in today’s
            competitive business landscape.
          </AnimatedCard>

          {/* Vision */}
          <AnimatedCard title="Our Vision">
            To empower professionals and entrepreneurs worldwide by fostering a
            collaborative community where innovative business and investment ideas thrive,
            enabling members to achieve financial growth, professional development,
            and meaningful connections.
          </AnimatedCard>
        </div>
      </div>
    </motion.section>
  );
}

// Reusable Animated Card Component
const AnimatedCard = ({ title, children }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-96 h-96 flex flex-col justify-center items-center text-center bg-white rounded-3xl shadow-lg border-4 border-indigo-300 p-6 hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-2xl font-semibold text-indigo-700">{title}</h3>
      <p className="text-gray-600 mt-4 text-lg">{children}</p>
    </motion.div>
  );
};
