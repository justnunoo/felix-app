'use client';

import Image from 'next/image';

const CompanyOverview = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-8">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96 border-8 border-orange-500 rounded-full overflow-hidden">
          <Image
            src="/images/award.jpg" // Change this to your actual image path
            alt="Award"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Company Overview</span>
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mt-4">
          Welcome to JIK Management Advisory Africa (LTD)
        </h1>
        <p className="text-gray-700 mt-4 leading-relaxed">
          A leading multidisciplinary management consulting firm that partners with business leaders, governmental
          agencies, and society to tackle their most important challenges and their greatest opportunities for
          improvement using ISO management system standards. A leading Management Consulting firm which provides
          services in accordance with the ISO 20700-2017 the international Guidelines for management consultancy
          services.
        </p>
        <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-300">
          More About us →
        </button>
      </div>
    </section>
  );
};

export default CompanyOverview;
