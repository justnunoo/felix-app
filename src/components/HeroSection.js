"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function HeroSection() {
  return (
    <section className="py-1">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-[400px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="flex flex-col items-center justify-center h-full space-y-4"
            style={{
              backgroundImage: 'url("/cooperationd.jpg")', // Replace with your image path
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-white/80 p-8 rounded-lg shadow-md">
              <h1 className="text-4xl font-bold text-indigo-700 text-center">
                IntoWine Consult
              </h1>
              <p className="text-lg text-gray-600 text-center">
                Empowering businesses with data-driven financial strategies.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="flex flex-col items-center justify-center h-full space-y-4"
            style={{
              backgroundImage: 'url("/handshake.jpg")', // Replace with your image path
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-white/80 p-8 rounded-lg shadow-md">
              <h1 className="text-4xl font-bold text-indigo-700 text-center">
                Our Mission
              </h1>
              <p className="text-lg text-gray-600 text-center">
                To provide tailored financial solutions that drive growth and success.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="flex flex-col items-center justify-center h-full space-y-4"
            style={{
              backgroundImage: 'url("/meeting.jpeg")', // Replace with your image path
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-white/80 p-8 rounded-lg shadow-md">
              <h1 className="text-4xl font-bold text-indigo-700 text-center">
                Our Vision
              </h1>
              <p className="text-lg text-gray-600 text-center">
                A world where every business has access to expert financial guidance.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}