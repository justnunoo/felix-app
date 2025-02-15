// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Import Swiper styles
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";

// export default function HeroSection() {
//   return (
//     <section className="py-1">
//       <Swiper
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Pagination, Navigation, Autoplay]}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         className="h-[400px]"
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div
//             className="flex flex-col items-center justify-center h-full space-y-4"
//             style={{
//               backgroundImage: 'url("/cooperationd.jpg")', // Replace with your image path
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <div className="bg-white/80 p-8 rounded-lg shadow-md">
//               <h1 className="text-4xl font-bold text-indigo-700 text-center">
//                 IntoWine Consult
//               </h1>
//               <p className="text-lg text-gray-600 text-center">
//                 Empowering businesses with data-driven financial strategies.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           <div
//             className="flex flex-col items-center justify-center h-full space-y-4"
//             style={{
//               backgroundImage: 'url("/handshake.jpg")', // Replace with your image path
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <div className="bg-white/80 p-8 rounded-lg shadow-md">
//               <h1 className="text-4xl font-bold text-indigo-700 text-center">
//                 Our Mission
//               </h1>
//               <p className="text-lg text-gray-600 text-center">
//                 To provide tailored financial solutions that drive growth and success.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 3 */}
//         <SwiperSlide>
//           <div
//             className="flex flex-col items-center justify-center h-full space-y-4"
//             style={{
//               backgroundImage: 'url("/meeting.jpeg")', // Replace with your image path
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <div className="bg-white/80 p-8 rounded-lg shadow-md">
//               <h1 className="text-4xl font-bold text-indigo-700 text-center">
//                 Our Vision
//               </h1>
//               <p className="text-lg text-gray-600 text-center">
//                 A world where every business has access to expert financial guidance.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-1">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-[400px]"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active slide index
      >
        {/* Slide Data */}
        {[
          {
            title: "IntoWine Consult",
            description: "Empowering businesses with data-driven financial strategies.",
            image: "/meeting3.jpg",
          },
          {
            title: "Our Mission",
            description: "To provide tailored financial solutions that drive growth and success.",
            image: "/handshake.jpg",
          },
          {
            title: "Our Vision",
            description: "A world where every business has access to expert financial guidance.",
            image: "/metting1.jpg",
          },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center justify-center h-full space-y-4"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <motion.div
                className="bg-white/80 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={activeIndex === index ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-4xl font-bold text-indigo-700 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={activeIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="text-lg text-gray-600 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {slide.description}
                </motion.p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
