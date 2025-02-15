// export default function MissionVisionSection() {
//   return (
//     <section className="py-12 text-center bg-gray-100">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-indigo-700">Our Mission & Vision Statements</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
//           <div className="relative w-72 h-72 p-6 bg-white rounded-full shadow-md overflow-hidden">
//             <h3 className="text-xl font-semibold text-indigo-600">Our Mission</h3>
//             <p className="text-gray-600">
//               To provide tailored financial solutions that drive growth and success.
//             </p>
//           </div>
//           <div className="p-6 bg-white rounded-full shadow-md">
//             <h3 className="text-xl font-semibold text-indigo-600">Our Vision</h3>
//             <p className="text-gray-600">
//               A world where every business has access to expert financial guidance.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



export default function MissionVisionSection() {
  return (
    <section className="py-16 text-center bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-indigo-700">Our Mission & Vision</h2>
        <p className="text-lg text-gray-600 mt-2">
          Empowering businesses with expert financial solutions.
        </p>

        {/* Mission & Vision Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
          {/* Mission */}
          <div className="relative w-80 h-80 flex flex-col justify-center items-center text-center bg-white rounded-full shadow-lg border-4 border-indigo-300 p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-indigo-700">Our Mission</h3>
            <p className="text-gray-600 mt-4 text-lg">
              To provide tailored financial solutions that drive growth and success.
            </p>
          </div>

          {/* Vision */}
          <div className="relative w-80 h-80 flex flex-col justify-center items-center text-center bg-white rounded-full shadow-lg border-4 border-indigo-300 p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-indigo-700">Our Vision</h3>
            <p className="text-gray-600 mt-4 text-lg">
              A world where every business has access to expert financial guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
