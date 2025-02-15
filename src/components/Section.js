export default function MissionVisionSection() {
  return (
    <section className="py-12 text-center bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700">Our Mission & Vision Statements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600">Our Mission</h3>
            <p className="text-gray-600">
              To provide tailored financial solutions that drive growth and success.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600">Our Vision</h3>
            <p className="text-gray-600">
              A world where every business has access to expert financial guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
