// "use client";

// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Import Swiper styles
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion"; // Import Framer Motion

// export default function HeroSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="py-1">
//       <Swiper
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Pagination, Navigation, Autoplay]}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         className="h-[400px]"
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active slide index
//       >
//         {/* Slide Data */}
//         {[
//           {
//             // title: "IntoWine Consult",
//             description: "Empowering Professionals, Building Futures: Where Ideas Meet Opportunity.",
//             image: "/meeting3.jpg",
//           },
//           {
//             // title: "Our Mission",
//             description: "Discover innovative business strategies, connect with industry leaders, and grow your network.",
//             image: "/handshake.jpg",
//           },
//           {
//             // title: "Our Vision",
//             description: "Join our community of forward-thinking professionals and unlock your potential today!",
//             image: "/metting1.jpg",
//           },
//           {
//             // title: "Our Vision",
//             description: "Start your journey to success with expert coaching and exclusive networking opportunities.",
//             image: "/meeting2.jpg",
//           },
//         ].map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="flex flex-col items-center justify-center h-full space-y-4"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 // filter:"blur(1px)",
//               }}
//             >
//               <motion.div
//                 className="bg-white/80 p-8 rounded-lg shadow-md"
//                 initial={{ opacity: 0, scale: 0.8, y: 50 }}
//                 animate={activeIndex === index ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               >
//                 <motion.h1
//                   className="text-4xl font-bold text-indigo-700 text-center"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={activeIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                 >
//                   {slide.title}
//                 </motion.h1>
//                 <motion.p
//                   className="text-lg text-gray-600 text-center"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0 }}
//                   transition={{ duration: 0.7, ease: "easeOut" }}
//                 >
//                   {slide.description}
//                 </motion.p>
//               </motion.div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-1 relative">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-[500px]"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {[
          {
            title: "Empowering Professionals",
            description: "Building Futures: Where Ideas Meet Opportunity.",
            image: "/meeting3.jpg",
          },
          {
            title: "Innovative Strategies",
            description: "Discover business insights, connect with leaders, and grow your network.",
            image: "/handshake.jpg",
          },
          {
            title: "Join Our Community",
            description: "Unlock your potential today with industry-leading guidance.",
            image: "/metting1.jpg",
          },
          {
            title: "Your Success Journey",
            description: "Get expert coaching and exclusive networking opportunities.",
            image: "/meeting2.jpg",
          },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex items-center justify-center h-full w-full text-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-black/50" />

              <motion.div
                className="relative max-w-3xl px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="text-lg md:text-2xl text-white mt-4 drop-shadow-md"
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
